const stories = [
  {
    time: "00:00",
    title: "医院陪诊师",
    subtitle: "裘淑蓉（48岁，杭州）",
    entry: "医院走廊的灯",
    tone: "陪伴与慰藉，接住独居病人的孤独与无助",
    icon: "陪",
    images: ["hospital-companion.jpg", "stethoscope.jpg"],
    paragraphs: [
      "裘淑蓉曾是超市收银员，五年前转行做全职医院陪诊，常年奔波在杭州各大医院，专门帮扶独居老人、异地看病的弱势群体。",
      "去年深秋，78岁的杜奶奶独自来市区看心脏科，子女远在外地，无助又忐忑。裘淑蓉提前等候接诊，耐心帮老人操作挂号、整理多年病历。",
      "就诊全程，她细致记录医嘱、用药剂量和复查时间，中午拿出随身带的牛奶面包安抚空腹不适的老人。看完病后，她贴心护送老人到车站，反复叮嘱安全。"
    ]
  },
  {
    time: "00:30",
    title: "地铁钢轨检修工",
    subtitle: "地下隧道里的「轨道医生」",
    entry: "地铁隧道通风口",
    tone: "毫米级匠心，用专业托举城市通勤安全",
    icon: "轨",
    images: ["rail-night.jpg", "train-day.jpg"],
    paragraphs: [
      "最后一班地铁驶回车辆段，城市的地下脉络彻底归于沉寂。",
      "零点三十分，张天宇和班组同事换好工装，背上工具包走入漆黑的隧道。他们是只在深夜出没的「轨道医生」。",
      "7公里的线路，要俯身逐米排查。手电筒扫过钢轨表面，检查锤判断内部伤损，激光测量仪反复校准轨距。",
      "没人认得他的脸，但每一个坐早班地铁的乘客，都踩过他亲手守护的轨道。"
    ]
  },
  {
    time: "01:20",
    title: "写字楼夜班运维",
    subtitle: "丁建军（36岁，广州）",
    entry: "写字楼设备告警",
    tone: "默默守护整栋写字楼的设备运转",
    icon: "维",
    images: ["storm-maintenance.jpg", "night-lamp.jpg"],
    paragraphs: [
      "丁建军从事写字楼夜班运维六年，昼夜颠倒，默默守护整栋写字楼的设备运转。",
      "暴雨深夜，写字楼突发设备告警，天台空调故障、楼层水管爆裂积水严重。他独自冒雨抢修，连夜关阀门、排积水、抢救办公设备与重要文件。",
      "险情过后，他依旧按规完成整夜机房、消防、配电巡检，细致做好交接台账。"
    ]
  },
  {
    time: "02:00",
    title: "宠物深夜寄养员",
    subtitle: "夜间全程照料寄养宠物",
    entry: "寄养室夜间巡查",
    tone: "通宵值守，耐心与责任心并重",
    icon: "宠",
    images: ["pet-care.jpg", "tree-sun.jpg"],
    paragraphs: [
      "宠物深夜寄养员负责夜间照料寄养宠物，定时投喂、更换饮水、清理笼舍与排泄物。",
      "他们要巡查宠物精神、饮食和睡眠状态，按要求喂药，及时处理呕吐、突发躁动等异常状况，并同步向宠主反馈夜间状态。",
      "这份工作需要通宵值守，也需要足够稳定的耐心和责任心。"
    ]
  },
  {
    time: "03:15",
    title: "夜间图书管理员",
    subtitle: "城市深夜的「掌灯人」",
    entry: "街角书房玻璃窗",
    tone: "温柔的陪伴，用灯光守住城市的精神角落",
    icon: "书",
    images: ["library-night-worker.jpg", "library-children.jpg", "library-sun.jpg"],
    paragraphs: [
      "街上的商铺陆续熄了灯，街角这间24小时书吧的暖黄光，还亮着。",
      "黄威是这里的夜班管理员，整理书架、补充热水、擦拭桌面，更多时候，他是个安静的「旁观者」。",
      "他给备考学生关掉震动闹钟，给拖着行李的姑娘放一杯温水，给读古籍的老人调亮靠窗台灯。",
      "「有人说我们是看店的，其实我们是守灯的。这盏灯亮着，城市就有一块温柔的地方。」"
    ]
  },
  {
    time: "04:00",
    title: "菜市场分拣员",
    subtitle: "王芳，42岁",
    entry: "菜市场生鲜分拣",
    tone: "日复一日守着市井烟火，用细心勤恳做好平凡小事",
    icon: "鲜",
    images: ["market-sorter.jpg", "cherry-tree.jpg"],
    paragraphs: [
      "42岁的王芳在菜市场生鲜分拣岗位工作五年，每天天不亮就到摊位，整理当日果蔬、分级分拣打包。",
      "她细致剔除烂叶，轻放鲜果减少磕碰损耗，精准配好居民订购的食材，日均分拣两百多份货品。",
      "节假日市场客流暴涨，她主动加班。靠着这份踏实工作，她撑起家里日常开支，也保障街坊买到新鲜放心的生鲜。"
    ]
  }
];

const storyImageBase = "./assets/story-art/";
const storyCardsEl = document.querySelector("#storyCards");
const dockDotsEl = document.querySelector("#dockDots");
const dockTimeEl = document.querySelector("#dockTime");
const travelerEl = document.querySelector("#traveler");
const journeyEl = document.querySelector(".journey");
const roadPathEl = document.querySelector(".road-line");
const bgMusicEl = document.querySelector("#bgMusic");
const musicToggleEl = document.querySelector("#musicToggle");
const musicStatusEl = document.querySelector("#musicStatus");
const dialogEl = document.querySelector("#storyDialog");
const dialogMediaEl = document.querySelector("#dialogMedia");
const dialogKickerEl = document.querySelector("#dialogKicker");
const dialogTitleEl = document.querySelector("#dialogTitle");
const dialogSubtitleEl = document.querySelector("#dialogSubtitle");
const dialogToneEl = document.querySelector("#dialogTone");
const dialogTextEl = document.querySelector("#dialogText");

let activeIndex = 0;
let userPausedMusic = false;

function renderStories() {
  storyCardsEl.innerHTML = stories
    .map(
      (story, index) => `
        <article class="chapter${index === 0 ? " active" : ""}" data-index="${index}" data-time="${story.time}">
          <div class="chapter-scene" style="--scene: url('${storyImageBase}${story.images[0]}')" aria-hidden="true"></div>
          <button class="story-marker" type="button" data-index="${index}" aria-label="查看 ${story.time} ${story.title}">
            <span class="marker-thumb" style="--cover: url('${storyImageBase}${story.images[0]}')"></span>
            <span class="marker-symbol">${story.icon}</span>
          </button>
          <p class="marker-caption">${story.title}</p>
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

function setActive(index) {
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

function openStory(index) {
  const story = stories[index];
  setActive(index);

  dialogMediaEl.innerHTML = story.images
    .map((image, imageIndex) => `<img src="${storyImageBase}${image}" alt="${story.title}图片${imageIndex + 1}" />`)
    .join("");
  dialogKickerEl.textContent = `${story.time} / ${story.entry}`;
  dialogTitleEl.textContent = story.title;
  dialogSubtitleEl.textContent = story.subtitle;
  dialogToneEl.textContent = story.tone;
  dialogTextEl.innerHTML = story.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");

  dialogEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("dialog-open");
}

function closeStory() {
  dialogEl.setAttribute("aria-hidden", "true");
  document.body.classList.remove("dialog-open");
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
      threshold: [0.36, 0.5, 0.64],
      rootMargin: "-18% 0px -24% 0px"
    }
  );

  chapters.forEach((chapter) => observer.observe(chapter));
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function updateTravelerPosition() {
  const journeyRect = journeyEl.getBoundingClientRect();
  const roadRect = document.querySelector(".road").getBoundingClientRect();
  const viewportAnchor = window.innerHeight * 0.58;
  const progress = clamp((viewportAnchor - journeyRect.top) / journeyRect.height, 0, 1);
  const pathLength = roadPathEl.getTotalLength();
  const point = roadPathEl.getPointAtLength(pathLength * progress);
  const x = (point.x / 390) * roadRect.width;
  const y = (point.y / 5400) * roadRect.height;

  travelerEl.style.setProperty("--traveler-x", `${x}px`);
  travelerEl.style.setProperty("--traveler-y", `${y}px`);
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

  storyCardsEl.addEventListener("click", (event) => {
    const marker = event.target.closest(".story-marker");
    if (!marker) {
      return;
    }

    openStory(Number(marker.dataset.index));
  });

  dialogEl.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-dialog]")) {
      closeStory();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dialogEl.getAttribute("aria-hidden") === "false") {
      closeStory();
    }
  });

  window.addEventListener("scroll", updateTravelerPosition, { passive: true });
  window.addEventListener("resize", updateTravelerPosition);
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
bindNavigation();
observeStories();
bindMusic();
updateTravelerPosition();
