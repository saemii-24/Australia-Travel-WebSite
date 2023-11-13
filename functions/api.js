exports.handler = async (event) => {
  try {
    let apiKey = process.env.API_KEY;
    let cityId = event.queryStringParameters.city;
    console.log("City ID:", cityId);

    const originData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&lang=kr&units=metric`
    );
    const weatherData = await originData.json();
    return {
      statusCode: 200,
      body: JSON.stringify(weatherData),
    };
  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "오류가 발생했습니다." }),
    };
  }
};
