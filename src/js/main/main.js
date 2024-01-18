/*food*/
/*음식 미리보기 사진을 클릭하면 음식 설명이 바뀐다*/
/*현재 보여지고 있는 사진을 표시해준다.*/
function foodImgChange() {
  //음식 설명 변경
  const foodTypes = document.querySelectorAll(".food__type");
  const foodContents = document.querySelectorAll(".food__content");

  foodTypes.forEach(function (foodType, index) {
    if (index === 0) {
      foodType.classList.add("active");
    }
    foodType.addEventListener("click", function (event) {
      foodTypes.forEach((foodType) => {
        foodType.classList.remove("active");
      });
      event.target.classList.add("active");
      foodContents.forEach((foodContent) => {
        foodContent.classList.remove("active");
      });
      foodContents[index].classList.add("active");
    });
  });
}
foodImgChange();

/*district*/
/*지도를 클릭하면 그 주의 정보를 불러온다.*/
const districtMap = document.querySelectorAll(".district__map--js");
const districtInfo = document.querySelectorAll(".district__info--js");
const districtInfoContent = [
  [
    "태즈메이니아",
    "Tasmania",
    "호바트",
    "2,296,411명",
    "90,758 km²",
    "	UTC+10 / 서머타임 시행",
  ],
  [
    "웨스턴 오스트레일리아",
    "Western Australia",
    "퍼스",
    "2,296,411명",
    "2,645,615km²",
    "UTC +8 / UTC+8:45",
  ],
  [
    "사우스 오스트레일리아",
    "South Australia",
    "애들레이드",
    "1,514,337명",
    "1,043,514 km²",
    "UTC+9:30 / 서머타임 시행",
  ],
  [
    "퀸즐랜드",
    "Queensland",
    "브리즈번",
    "4,907,600명",
    "1,852,642 km²",
    "UTC+10",
  ],
  [
    "빅토리아",
    "Victoria",
    "멜버른",
    "5,713,000명",
    "237,629 km²",
    "UTC+10 / 서머타임 시행",
  ],
  [
    "뉴사우스웨일스",
    "New South Wales",
    "시드니",
    "6,889,100 명",
    "809,444 km²",
    "UTC+10 / 서머타임 시행",
  ],
];

districtMap.forEach((district, index) => {
  district.addEventListener("click", (event) => {
    districtMap.forEach((district) => {
      district.classList.remove("active");
    });
    event.target.classList.add("active");

    // console.log(districtInfoContent[index]);
    for (key in districtInfoContent[index]) {
      districtInfo[key].innerText = districtInfoContent[index][key];
    }
  });
});

/*weatehr__bg*/
/*비디오가 끝나도 자연스럽게 fadein으로 연결시킨다.*/

let weatherVideoFirst = document.getElementById("weather__bg--js--first");
let weatherVideoSecond = document.getElementById("weather__bg--js--second");

videoLoad();
function videoLoad() {
  weatherVideoFirst.onloadedmetadata = function () {
    // weatherVideoSecond.pause();
    let videoFirstPlay = true;

    function videoIntervalPlay() {
      if (videoFirstPlay) {
        weatherVideoFirst.style.opacity = 1;
        weatherVideoFirst.play();
        setTimeout(() => {
          weatherVideoSecond.pause();
          weatherVideoSecond.currentTime = 0;
        }, 1000);
        videoFirstPlay = false;
      } else {
        weatherVideoFirst.style.opacity = 0;
        weatherVideoSecond.play();
        setTimeout(() => {
          weatherVideoFirst.pause();
          weatherVideoFirst.currentTime = 0;
        }, 1000);
        videoFirstPlay = true;
      }
    }
    videoIntervalPlay();
    setInterval(videoIntervalPlay, 20000);
  };
}

/*swiper js*/

let windowSize = window.innerWidth;

window.addEventListener("resize", function () {
  windowSize = window.innerWidth;
  windowSizeSwiper();
});
windowSizeSwiper();

function windowSizeSwiper() {
  if (windowSize >= 1200) {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 6,
      centeredSlides: true,
      spaceBetween: 20,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // Enable debugger
      debugger: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });
  } else if (windowSize >= 770 && windowSize < 1200) {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 20,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // Enable debugger
      debugger: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });
  } else if (windowSize >= 0 && windowSize < 769) {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 20,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // Enable debugger
      debugger: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });
  }
}

function slide(viewNum) {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: viewNum,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Enable debugger
    debugger: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });
}

/*intersectionObserver animation*/
/*각 요소가 화면에 등장할 때 적용할 애니메이션을 작성한다.*/
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("back-origin");
      }
    });
  },
  { threshold: 0.5 }
);

const toTopEls = document.querySelectorAll(".to-top");
toTopEls.forEach((toTopEl) => observer.observe(toTopEl));

const toLeftEls = document.querySelectorAll(".to-left");
toLeftEls.forEach((toLeftEl) => observer.observe(toLeftEl));

const toRightEls = document.querySelectorAll(".to-right");
toRightEls.forEach((toRightEl) => observer.observe(toRightEl));

const toChargeEls = document.querySelectorAll(".to-charge");
toChargeEls.forEach((toChargeEl) => observer.observe(toChargeEl));

const opacityChanges = document.querySelectorAll(".opacityChange");
opacityChanges.forEach((opacityChange) => observer.observe(opacityChange));
