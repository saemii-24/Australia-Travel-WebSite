// /*Luxon 라이브러리*/
// /*호주 시간 계산하기*/
// /*버튼 클릭시 각 도시의 시간을 보여준다.
// 멜버른 / 시드니 / 브리즈번 모두 UTC+10
// 서머타임 시행시 UTC+11, 브리즈번은 서머타임 미시행이며,
// 시행시 서머타임 아이콘을 보여준다.*/

// //초단위로 업데이트 됨.
// //서머타임 시행시 브리즈번 버튼 클릭 이벤트에서 오류 발생으로 수정//

function callAusTimeObj(cityTimeZone) {
  //도시 시간대(기본정보) 불러오기
  let cityTime = luxon.DateTime.now().setZone(cityTimeZone);
  let cityTimeNow = cityTime.toFormat("HH:mm:ss");

  //오전 오후 확인
  let cityHour = cityTime.toFormat("HH");
  let cityMeridiem = "";
  if (cityHour >= 12 && cityHour <= 24) {
    cityMeridiem = "오후";
  } else {
    cityMeridiem = "오전";
  }
  //날짜 확인
  let cityDate = cityTime.toFormat("yyyy.LL.dd.");

  //요일 확인
  let cityDay = cityTime.toFormat("c");

  //luxon은 월요일 = 1, 일요일 = 7
  switch (cityDay) {
    case "1":
      cityDay = "월요일";
      break;
    case "2":
      cityDay = "화요일";
      break;
    case "3":
      cityDay = "수요일";
      break;
    case "4":
      cityDay = "목요일";
      break;
    case "5":
      cityDay = "금요일";
      break;
    case "6":
      cityDay = "토요일";
      break;
    case "7":
      cityDay = "일요일";
      break;
  }

  /*DST 시행 확인*/
  let isCityDST = luxon.DateTime.now().setZone(cityTimeZone).isInDST;

  if (isCityDST) {
    isCityDST = "sunny";
  } else {
    isCityDST = "";
  }

  if (cityTimeZone === "Asia/Seoul") {
    document.getElementById("time__now--korea").innerText = cityTimeNow;
    document.getElementById("time__merdiem--korea").innerText = cityMeridiem;
    document.getElementById("today__now--korea").innerText = cityDate;
    document.getElementById("today__day--korea").innerText = cityDay;
  } else {
    document.getElementById("time__now--australia").innerText = cityTimeNow;
    document.getElementById("time__merdiem--australia").innerText =
      cityMeridiem;
    document.getElementById("today__now--australia").innerText = cityDate;
    document.getElementById("today__day--australia").innerText = cityDay;
    document.getElementById("weather__summertime--dtc").innerText = isCityDST;
  }
}

/*날씨정보 알아오기*/

async function weather(cityId) {
  //정보 불러오기 전 load 표시
  const showLoad = document.querySelector(".weather__load");
  const showTemp = document.querySelector(".weather__temp__australia");
  const showLoadText = document.getElementById("weather__city--australia");

  showLoad.style.display = "block";
  showTemp.style.display = "none";
  showLoadText.innerText = "날씨를 로딩중 입니다.";

  //api를 요청한다.
  await fetch(`/.netlify/functions/api?city=${cityId}`, {
    method: "POST",
    body: JSON.stringify({ cityId: cityId }),
  })
    .then((res) => res.json())
    .then((data) => {
      //나라를 판별한다.
      //판별된 나라는 innerText의 기준이 된다.
      let country = data.sys.country;
      switch (country) {
        case "KR":
          country = "korea";
          break;
        case "AU":
          country = "australia";
          break;
      }

      //도시를 판별한다
      let city = data.name;
      let putCity = document.getElementById(`weather__city--${country}`);
      switch (city) {
        case "Sydney":
          city = "시드니";
          break;
        case "Melbourne":
          city = "멜버른";
          break;
        case "Brisbane":
          city = "브리즈번";
          break;
        case "Seoul":
          city = "서울";
          break;
      }
      putCity.innerText = city;

      //날씨를 판별한다
      let weatherIcon = data.weather[0].icon;
      let putIcon = document.querySelector(`.weather__icon--${country}`);

      //날씨 아이콘을 선택한다. 선택
      let iconName = "clear_day";
      if (weatherIcon === "01d" || weatherIcon === "01n") {
        iconName = "clear_day";
      } else if (weatherIcon === "02d" || weatherIcon === "02n") {
        iconName = "partly_cloudy_day";
      } else if (weatherIcon === "03d" || weatherIcon === "03n") {
        iconName = "cloud";
      } else if (weatherIcon === "04d" || weatherIcon === "04n") {
        iconName = "cloud";
      } else if (weatherIcon === "09d" || weatherIcon === "09n") {
        iconName = "rainy_light";
      } else if (weatherIcon === "10d" || weatherIcon === "10n") {
        iconName = "rainy";
      } else if (weatherIcon === "11d" || weatherIcon === "11n") {
        iconName = "thunderstorm";
      } else if (weatherIcon === "13d" || weatherIcon === "13n") {
        iconName = "ac_unit";
      } else if (weatherIcon === "50d" || weatherIcon === "50n") {
        iconName = "foggy";
      }
      putIcon.innerText = iconName;

      //온도 넣기
      let temp = data.main.temp.toFixed(1);
      let putTemp = document.getElementById(`weather__now--${country}`);
      putTemp.innerText = temp;
    })
    .catch((err) => {
      console.log(err);

      document.querySelector(".weather__error").innerText =
        "현재 기본값이 출력 중입니다.";

      //default값 (20도, 맑음 출력)
      const defaultWeather = document.querySelectorAll(".weather__now");
      const defaultWeatherIcon = document.querySelectorAll(
        ".weather__icon--now"
      );
      const defaultBtnWeather = document.querySelectorAll(
        ".btn__blur--weather"
      );
      const defaultCity = document.querySelector("#weather__city--australia");

      defaultWeather.forEach((weather) => {
        weather.innerText = "20.0";
      });
      defaultWeatherIcon.forEach((weatherIcon) => {
        weatherIcon.innerText = "sunny";
      });

      defaultBtnWeather.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          defaultCity.innerText = event.target.innerText;
        });
      });
    });
  //작업이 끝난경우 로딩스피너를 display none
  showLoad.style.display = "none";
  showTemp.style.display = "flex";
}

//button dom요소
const sydneyBtn = document.getElementById("btn__blur--sydney");
const melbourneBtn = document.getElementById("btn__blur--melbourne");
const brisbaneBtn = document.getElementById("btn__blur--brisbane");
const btnAll = document.querySelectorAll(".btn__blur--weather");

//Luxon 각 나라의 TIME ZONE
const sydneyTimeZone = "Australia/Sydney";
const melbourneTimeZone = "Australia/Melbourne";
const brisbaneTimeZone = "Australia/Brisbane";
const seoulTimeZone = "Asia/Seoul";

//WeatherAPI 각 나라의 ID
const seoulId = 1835847;
const sydneyId = 2147714;
const melbourneId = 2158177;
const brisbaneId = 7839562;

// load 되면 바로 호출
weather(seoulId);
weather(sydneyId);
// setInterval을 넣고, clearInterval에 사용된다.
let intervalTime = setInterval(() => {
  callAusTimeObj(sydneyTimeZone);
}, 200);
setInterval(() => {
  callAusTimeObj(seoulTimeZone);
}, 200);

//버튼 호출
btnAll.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //btn 1개만 active 되게
    btnAll.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    //버튼을 클릭하면 clearInterval 하고 진행되어야 한다.
    clearInterval(intervalTime);
    if (e.target.innerText === "시드니") {
      weather(sydneyId);
      intervalTime = setInterval(() => {
        callAusTimeObj(sydneyTimeZone);
      }, 200);

      //멜버른 버튼 클릭
    } else if (e.target.innerText === "멜버른") {
      weather(melbourneId);
      intervalTime = setInterval(() => {
        callAusTimeObj(melbourneTimeZone);
      }, 200);
      //브리즈번 버튼 클릭
    } else if (e.target.innerText === "브리즈번") {
      weather(brisbaneId);
      intervalTime = setInterval(() => {
        callAusTimeObj(brisbaneTimeZone);
      }, 200);
    }
  });
});
