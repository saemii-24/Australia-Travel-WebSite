

/*Cover Bg 사이즈 구하기*/
/*background-size:cover로 되어있을 때의 이미지 사이즈를 구한다.*/
function coverBgSize(el) {

  //html 요소 사이즈를 가져온다.
  // console.log(el);
  const elWidth = el.offsetWidth;
  const elHeight = el.offsetHeight;
  // console.log(elWidth);

  //해당 요소에 포함 된 background img url값만 가져온다
  const elBgImg = getComputedStyle(el).getPropertyValue("background-image").replace('url("', '').replace('")', '');
  // console.log(elBgImg);

  //img url의 실제 사이즈를 가져온다.
  const elBg = new Image();
  elBg.src = elBgImg;
  const elBgWidth = elBg.width;
  const elBgHeight = elBg.height;

  ///컨테이너와 이미지 사이즈를 이용해 기준을 설정

  let stand = elWidth / elBgWidth;

  if(elWidth/elBgWidth > elHeight/elBgHeight) { 
    stand = elWidth / elBgWidth;
  }else{
    stand = elHeight / elBgHeight;
  }

  let nowWidth = elBgWidth * stand;
  let nowHeight = elBgHeight * stand;

  return { 'nowWidth': nowWidth, 'nowHeight': nowHeight }
};






/*호주 즐길거리 hover 애니메이션*/
//창 사이즈 변경될때마다 실행
window.addEventListener('resize',function(){
  hoverAnimation(recommendThings);
  hoverAnimation(naturalThings);
  hoverAnimation(cityThings);
  hoverAnimation(foodTypes);
});

const recommendThings = document.querySelectorAll('.swiper-slide');
const naturalThings = document.querySelectorAll('.natural__box--picture');
const cityThings = document.querySelectorAll('.city__box');
const foodTypes = document.querySelectorAll('.food__type');

//실행되면 바로 실행
window.onload = function(){
hoverAnimation(recommendThings);
hoverAnimation(naturalThings);
hoverAnimation(cityThings);
hoverAnimation(foodTypes);
}

function hoverAnimation(els){
  els.forEach((el)=>{
  let size = coverBgSize(el);
  let size_width = size['nowWidth'];
  let size_height = size['nowHeight'];
  el.style.backgroundSize = `${size_width}px ${size_height}px`;

  el.addEventListener('mouseover',function(){
    el.style.backgroundSize = `${size_width*1.05}px ${size_height*1.05}px`;
  });
  el.addEventListener('mouseleave',function(){
    el.style.backgroundSize = `${size_width}px ${size_height}px`;
  });
});
}


/*food*/
/*음식 미리보기 사진을 클릭하면 음식 설명이 바뀐다*/
/*현재 보여지고 있는 사진을 표시해준다.*/
function foodImgChange(){ //음식 설명 변경
  const foodTypes = document.querySelectorAll('.food__type');
  const foodContents = document.querySelectorAll('.food__content');

  foodTypes.forEach(function(foodType, index){
    if(index===0){
      foodType.classList.add('active');
    }
    foodType.addEventListener('click',function(event){
      foodTypes.forEach((foodType) =>{foodType.classList.remove('active');});
      event.target.classList.add('active');
      foodContents.forEach((foodContent)=>{foodContent.classList.remove('active');});
      foodContents[index].classList.add('active');
    });
  });
}
foodImgChange();


/*district*/
/*지도를 클릭하면 그 주의 정보를 불러온다.*/
const districtMap = document.querySelectorAll('.district__map--js');
const districtInfo = document.querySelectorAll('.district__info--js');
const districtInfoContent = [
  ['태즈메이니아', 'Tasmania', '호바트', '2,296,411명', '90,758 km²', '	UTC+10 / 서머타임 시행'],
  ['웨스턴 오스트레일리아', 'Western Australia', '퍼스', '2,296,411명', '2,645,615km²', 'UTC +8 / UTC+8:45'],
  ['사우스 오스트레일리아', 'South Australia', '애들레이드', '1,514,337명', '1,043,514 km²', 'UTC+9:30 / 서머타임 시행'],
  ['퀸즐랜드', 'Queensland', '브리즈번', '4,907,600명', '1,852,642 km²', 'UTC+10'],
  ['빅토리아', 'Victoria', '멜버른', '5,713,000명', '237,629 km²', 'UTC+10 / 서머타임 시행'],
  ['뉴사우스웨일스', 'New South Wales', '시드니', '6,889,100 명', '809,444 km²', 'UTC+10 / 서머타임 시행'],
];

districtMap.forEach((district, index)=>{
  district.addEventListener('click',(event)=>{
    districtMap.forEach((district)=>{
      district.classList.remove('active');
    });
    event.target.classList.add('active');

    console.log(districtInfoContent[index]);
    for(key in districtInfoContent[index]){
      districtInfo[key].innerText = districtInfoContent[index][key];
    }
  });
});



/*weatehr__bg*/
/*비디오가 끝나도 자연스럽게 fadein으로 연결시킨다.*/
/*추가 확인 필요!*/

let weatherVideoFirst = document.getElementById('weather__bg--js--first');
let weatherVideoSecond = document.getElementById('weather__bg--js--second');

videoLoad();
function videoLoad() {
  weatherVideoFirst.onloadedmetadata = function () {
    // weatherVideoSecond.pause();
    let videoFirstPlay = true;

    function videoIntervalPlay() {
      if (videoFirstPlay) {
        weatherVideoFirst.style.opacity = 1;
        weatherVideoFirst.play();
        setTimeout(()=>{
          weatherVideoSecond.pause(); 
          weatherVideoSecond.currentTime=0;},1000)
        videoFirstPlay = false;
      } else {
        weatherVideoFirst.style.opacity = 0;
        weatherVideoSecond.play();
        setTimeout(()=>{
          weatherVideoFirst.pause(); 
          weatherVideoFirst.currentTime=0;},1000);
        videoFirstPlay = true;
      }
    }
    videoIntervalPlay();
    setInterval(videoIntervalPlay, 20000);
  }
}




/*swiper js*/
function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on('init', () => {
    if (!swiper.params.debugger) return;
    console.log('init');
  });
  on('click', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('click');
  });
  on('tap', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('tap');
  });
  on('doubleTap', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('doubleTap');
  });
  on('sliderMove', (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log('sliderMove');
  });
  on('slideChange', () => {
    if (!swiper.params.debugger) return;
    console.log(
      'slideChange',
      swiper.previousIndex,
      '->',
      swiper.activeIndex
    );
  });
  on('slideChangeTransitionStart', () => {
    if (!swiper.params.debugger) return;
    console.log('slideChangeTransitionStart');
  });
  on('slideChangeTransitionEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('slideChangeTransitionEnd');
  });
  on('transitionStart', () => {
    if (!swiper.params.debugger) return;
    console.log('transitionStart');
  });
  on('transitionEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('transitionEnd');
  });
  on('fromEdge', () => {
    if (!swiper.params.debugger) return;
    console.log('fromEdge');
  });
  on('reachBeginning', () => {
    if (!swiper.params.debugger) return;
    console.log('reachBeginning');
  });
  on('reachEnd', () => {
    if (!swiper.params.debugger) return;
    console.log('reachEnd');
  });
}


let windowSize = window.innerWidth;

window.addEventListener('resize',function(){
  windowSize = window.innerWidth;
  windowSizeSwiper();
});
windowSizeSwiper();

function windowSizeSwiper() {
  if(windowSize >= 1200){
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 6,
      centeredSlides: true,
      spaceBetween: 20,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Enable debugger
      debugger: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      }
    });
  }else if(windowSize >= 770 && windowSize < 1200){
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 20,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Enable debugger
      debugger: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      }
    });
  }else if(windowSize >=0 && windowSize < 769){
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 20,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Enable debugger
      debugger: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      }
    });
  }
}

function slide(viewNum){
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: viewNum,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Enable debugger
    debugger: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    }
  });
}


/*intersectionObserver animation*/
/*각 요소가 화면에 등장할 때 적용할 애니메이션을 작성한다.*/
let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('back-origin');
    }
  });
  }, {threshold: 0.5});
  
  const toTopEls = document.querySelectorAll('.to-top');
  toTopEls.forEach(toTopEl => observer.observe(toTopEl));

  const toLeftEls = document.querySelectorAll('.to-left');
  toLeftEls.forEach(toLeftEl => observer.observe(toLeftEl));  

  const toRightEls = document.querySelectorAll('.to-right');
  toRightEls.forEach(toRightEl => observer.observe(toRightEl));

  const toChargeEls = document.querySelectorAll('.to-charge');
  toChargeEls.forEach(toChargeEl => observer.observe(toChargeEl));

  const opacityChanges = document.querySelectorAll('.opacityChange');
  opacityChanges.forEach(opacityChange => observer.observe(opacityChange));
