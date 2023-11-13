//현재 창 사이즈를 받아 애니메이션을 수정한다.
// let windowSize = window.innerWidth;


window.addEventListener('resize',function(){
    windowSize = window.innerWidth;
    natural();
    city();
    district();
    foodMove();
});

/*city*/
city();
function city(){
    const cityBoxes = document.querySelectorAll('.city__box');
    if(windowSize <= 769){
        cityBoxes.forEach((cityBox)=>{
            cityBox.classList.remove('to-left');
            cityBox.classList.remove('to-right');
            cityBox.classList.remove('to-top');
            cityBox.classList.add('to-top');
        });
    }else{
        cityBoxes.forEach((cityBox)=>{cityBox.classList.remove('to-top');});
        cityBoxes[0].classList.add('to-right');
        cityBoxes[1].classList.add('to-left');
        cityBoxes[2].classList.add('to-right');
        cityBoxes[3].classList.add('to-top');
        cityBoxes[4].classList.add('to-left');
    }
}

/*natural*/
natural();
function natural(){
    const naturalBoxs = document.querySelectorAll('.natural-ani-js');
    if (windowSize <= 769) {
        naturalBoxs.forEach((naturalBox)=>{
            naturalBox.classList.remove('to-top');
            naturalBox.classList.add('to-left');
        });
    }else{
        naturalBoxs.forEach((naturalBox)=>{
            naturalBox.classList.remove('to-left');
            naturalBox.classList.add('to-top');
        });
    }
}

/*district*/
//스크롤에 따라 내려가거나 올라가는 애니메이션
const bg = document.querySelector('.district__bg');
let bgHeight = bg.clientHeight;
let bgTop = window.scrollY + bg.getBoundingClientRect().top - bgHeight; //요소 TOP scroll위치

const food = document.querySelector('.food__show');
const foodBoxes = document.querySelectorAll('.food__content');
let foodHeight = food.clientHeight;
let foodTop = window.scrollY + food.getBoundingClientRect().top - foodHeight;

let scrollHeight = 0;

function district() {
    window.addEventListener('scroll', () => {
        scrollHeight = window.scrollY;
        imageMove(bgTop, bgHeight, bg, 100, 30);

        foodBoxes.forEach((foodBox)=>{
            imageMove(foodTop, foodHeight, foodBox, 100, 500);
        });
    });
}
district();


function imageMove(elTop, elHeight, el, ifPCsize, ifOthersize){

    if (windowSize <= 1200) {
        let move = (scrollHeight - elTop) / 50;
        if (move < elHeight) {
            el.style.backgroundPosition = `center ${-ifPCsize + move}px`;
        } else if (move > elHeight) {
            el.style.backgroundPosition = `center ${-ifPCsize + move}px`;
        }
    } else {
        let move = (scrollHeight - elTop) / 50;
        if (move < elHeight) {
            el.style.backgroundPosition = `center ${-ifOthersize + move}px`;
        } else if (move > elHeight) {
            el.style.backgroundPosition = `center ${-ifOthersize + move}px`;
        }
    }
}


function foodMove(){
    const foodThird = document.getElementById('food__type--third');
    const foodFourth = document.getElementById('food__type--fourth');

    if(windowSize < 1200 && windowSize >=770){
        foodThird.classList.remove('delay-2');
        foodFourth.classList.remove('delay-3');
        foodFourth.classList.add('delay-1');
    }else{
        foodFourth.classList.remove('delay-1');
        foodThird.classList.add('delay-2');
        foodFourth.classList.add('delay-3');
    }
}
foodMove();