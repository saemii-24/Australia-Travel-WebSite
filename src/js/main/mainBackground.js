const mainTitle = document.querySelector('.main__title');
const sentence = [
  ['하버', '브리지에서', '바라보는', '붉게', '물든', '시드니'],
  ['태양과', '만나', '일곱', '가지', '색으로', '빛나는', '바위산'],
  ['호주에서', '살고', '있는', '동물들과의', '특별한', '만남'],
  ['남극해의', '시원한', '바람을', '맞으며', '떠나는', '드라이브'],
  ['크루즈를', '타고', '만나는', '장난기', '가득한', '돌고래'],
  ['푸른', '바다', '위', '파도를', '가르며', '즐기는', '서핑']
];



let sentenceNum = 0;
let wordNum = 0;
let startTime = 0;
let callBackTime = 0;
const gageBar = document.getElementById('main__bar--gage');
$('.main__bg>div:gt(0)').hide(); //fadeIn Out animation

function oneSentence() {
  gageBar.classList.add('gageBar');
  let span = document.createElement('span');
  span.textContent = `
    ${sentence[sentenceNum][wordNum]}
    `;
  mainTitle.append(span);

  // 한 문장의 모든 단어를 출력하면 애니메이션 종료
  if (wordNum === sentence[sentenceNum].length - 1) {
    clearTimeout(oneSentence); 
    mainTitle.classList.add('fadeOut');
    mainTitle.style.animationDelay = `${5 - (sentence[sentenceNum].length) * 0.3}s`;
    wordNum = 0;

    setTimeout(() => { 
      // 첫 애니메이션 총 시간 5초가 지난 후 다음 문장 애니메이션 시작
      mainTitle.textContent = '';
      sentenceNum++;

      if (sentenceNum === sentence.length) { sentenceNum = 0; }
      
      oneSentence();

      gageBar.classList.remove('gageBar');
      mainTitle.classList.remove('fadeOut');
      $('.main__bg>div:first-child').fadeOut(1000).next('div').fadeIn(1000).end().appendTo('.main__bg');

    }, 5000 - (sentence[sentenceNum].length-1) * 300);

  } else {
    wordNum++;
    setTimeout(oneSentence, 300);
  }
}

oneSentence();