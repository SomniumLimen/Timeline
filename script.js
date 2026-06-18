const stories = [
  {
    time: "00:00",
    title: "医院陪诊师",
    subtitle: "裘淑蓉（48岁，杭州）",
    entry: "医院走廊的灯",
    tone: "陪伴与慰藉，接住独居病人的孤独与无助",
    cover: "hospital-corridor.jpg",
    coverAlt: "医院病房窗边",
    credit: {
      name: "Hospital corridor",
      creator: "Carlos Ebert",
      license: "CC BY",
      url: "https://www.flickr.com/photos/42042512@N00/2242493200"
    },
    paragraph:
      "她提前等候、整理病历、记录医嘱，把独居老人从挂号台一路护送到回家的车站。"
  },
  {
    time: "00:30",
    title: "地铁钢轨检修工",
    subtitle: "地下隧道里的「轨道医生」",
    entry: "地铁隧道通风口",
    tone: "毫米级匠心，用专业托举城市通勤安全",
    cover: "subway-track.jpg",
    coverAlt: "夜间地铁隧道检修",
    credit: {
      name: "fastrack",
      creator: "MTAPhotos",
      license: "CC BY",
      url: "https://www.flickr.com/photos/61135621@N03/8393705236"
    },
    paragraph:
      "最后一班地铁驶回车辆段，他们背着工具包走进隧道，逐米排查每一段钢轨。"
  },
  {
    time: "01:20",
    title: "写字楼夜班运维",
    subtitle: "丁建军（36岁，广州）",
    entry: "写字楼设备告警",
    tone: "默默守护整栋写字楼的设备运转",
    cover: "office-night.jpg",
    coverAlt: "夜间亮灯的写字楼",
    credit: {
      name: "San Francisco Office Building Night",
      creator: "Wonderlane",
      license: "CC0",
      url: "https://www.flickr.com/photos/71401718@N00/2972847595"
    },
    paragraph:
      "暴雨夜里，设备告警、天台空调故障、楼层管道积水，他一个人抢修到凌晨。"
  },
  {
    time: "02:00",
    title: "宠物深夜寄养员",
    subtitle: "夜间全程照料寄养宠物",
    entry: "寄养室夜间巡查",
    tone: "通宵值守，耐心与责任心并重",
    cover: "pet-kennel.jpg",
    coverAlt: "宠物寄养笼舍",
    credit: {
      name: "dog kennel",
      creator: "Acme Canine",
      license: "CC BY",
      url: "https://www.flickr.com/photos/34595254@N08/3209403615"
    },
    paragraph:
      "换水、喂食、巡查状态、安抚应激情绪，夜色越深，越需要温柔和耐心。"
  },
  {
    time: "03:15",
    title: "夜间图书管理员",
    subtitle: "城市深夜的「掌灯人」",
    entry: "街角书房玻璃窗",
    tone: "用灯光守住城市的精神角落",
    cover: "night-library.jpg",
    coverAlt: "夜色中的图书馆建筑",
    credit: {
      name: "Library of Congress, Washington DC",
      creator: "Pierre Blache",
      license: "CC0",
      url: "https://www.flickr.com/photos/141783395@N02/49205211721"
    },
    paragraph:
      "他轻手轻脚整理书架、补热水、调亮台灯，让深夜无处落脚的人有一块安静地方。"
  },
  {
    time: "04:00",
    title: "菜市场分拣员",
    subtitle: "王芳，42岁",
    entry: "菜市场生鲜分拣",
    tone: "守着市井烟火，用细心做好平凡小事",
    cover: "fresh-vegetables.jpg",
    coverAlt: "市场里的新鲜蔬菜",
    credit: {
      name: "Fresh vegetables",
      creator: "shankar s.",
      license: "CC BY",
      url: "https://www.flickr.com/photos/77742560@N06/7637461480"
    },
    paragraph:
      "天不亮就到摊位，分级、打包、复核订单，保障街坊买到新鲜放心的生鲜。"
  }
];

const musicCredit = {
  name: "a soothing song.mp3",
  creator: "cheesepuff",
  license: "CC0",
  url: "https://freesound.org/people/cheesepuff/sounds/110215"
};

const webAssetBase = "./assets/web/";
const storyCardsEl = document.querySelector("#storyCards");
const dockDotsEl = document.querySelector("#dockDots");
const dockTimeEl = document.querySelector("#dockTime");
const travelerEl = document.querySelector("#traveler");
const creditsListEl = document.querySelector("#creditsList");
const bgMusicEl = document.querySelector("#bgMusic");
const musicToggleEl = document.querySelector("#musicToggle");
const musicStatusEl = document.querySelector("#musicStatus");

let activeIndex = 0;
let userPausedMusic = false;

function renderStories() {
  storyCardsEl.innerHTML = stories
    .map(
      (story, index) => `
        <article class="chapter${index === 0 ? " active" : ""}" data-index="${index}" data-time="${story.time}">
          <div class="scene-card">
            <div class="scene-media" style="--cover: url('${webAssetBase}${story.cover}')" role="img" aria-label="${story.coverAlt}"></div>
            <div class="scene-body">
              <div class="scene-kicker">
                <span>${story.entry}</span>
                <span>${story.time}</span>
              </div>
              <h2>${story.title}</h2>
              <p class="scene-subtitle">${story.subtitle}</p>
              <p class="scene-tone">${story.tone}</p>
              <p>${story.paragraph}</p>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  dockDotsEl.innerHTML = stories
    .map(
      (story, index) => `
        <button class="dock-dot${index === 0 ? " active" : ""}" type="button" data-index="${index}" aria-label="跳转到 ${story.time} ${story.title}"></button>
      `
    )
    .join("");
}

function renderCredits() {
  const imageCredits = stories
    .map(
      ({ credit }) => `
        <p>
          图片：<a href="${credit.url}" target="_blank" rel="noreferrer">${credit.name}</a>
          / ${credit.creator} / ${credit.license}
        </p>
      `
    )
    .join("");

  creditsListEl.innerHTML = `
    <div class="credits-list">
      ${imageCredits}
      <p>
        音乐：<a href="${musicCredit.url}" target="_blank" rel="noreferrer">${musicCredit.name}</a>
        / ${musicCredit.creator} / ${musicCredit.license}
      </p>
    </div>
  `;
}

function setActive(index) {
  if (index === activeIndex) {
    return;
  }

  activeIndex = index;
  dockTimeEl.textContent = stories[index].time;
  travelerEl.style.setProperty("--tilt", `${index % 2 === 0 ? -13 : 15}deg`);

  document.querySelectorAll(".chapter").forEach((chapter, chapterIndex) => {
    chapter.classList.toggle("active", chapterIndex === index);
  });

  document.querySelectorAll(".dock-dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === index);
  });
}

function observeStories() {
  const chapters = document.querySelectorAll(".chapter");

  const observer = new IntersectionObserver(
    (entries) => {
      const centered = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (centered) {
        setActive(Number(centered.target.dataset.index));
      }
    },
    {
      threshold: [0.38, 0.52, 0.66],
      rootMargin: "-18% 0px -24% 0px"
    }
  );

  chapters.forEach((chapter) => observer.observe(chapter));
}

function bindNavigation() {
  dockDotsEl.addEventListener("click", (event) => {
    const dot = event.target.closest(".dock-dot");
    if (!dot) {
      return;
    }

    const chapter = document.querySelector(`.chapter[data-index="${dot.dataset.index}"]`);
    chapter?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function updateMusicButton() {
  musicToggleEl.classList.toggle("paused", bgMusicEl.paused);
  musicToggleEl.classList.toggle("needs-tap", bgMusicEl.paused && !userPausedMusic);
  musicStatusEl.textContent = bgMusicEl.paused ? "播放" : "音乐";
}

async function tryPlayMusic() {
  if (userPausedMusic) {
    updateMusicButton();
    return;
  }

  bgMusicEl.volume = 0.34;

  try {
    await bgMusicEl.play();
  } catch {
    musicToggleEl.classList.add("needs-tap");
  } finally {
    updateMusicButton();
  }
}

function bindMusic() {
  musicToggleEl.addEventListener("click", async () => {
    if (bgMusicEl.paused) {
      userPausedMusic = false;
      await tryPlayMusic();
    } else {
      userPausedMusic = true;
      bgMusicEl.pause();
      updateMusicButton();
    }
  });

  window.addEventListener(
    "pointerdown",
    () => {
      tryPlayMusic();
    },
    { once: true }
  );

  bgMusicEl.addEventListener("play", updateMusicButton);
  bgMusicEl.addEventListener("pause", updateMusicButton);
  tryPlayMusic();
}

renderStories();
renderCredits();
bindNavigation();
observeStories();
bindMusic();
