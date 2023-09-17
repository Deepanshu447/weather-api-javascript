let a = new Date();
let b = a.getHours();
let c = 18;
console.log(b);
document.getElementById('date').innerHTML = a;
let weatherimg = document.getElementById('weatherimg');


const myfun = () => {
    var cityname = document.getElementById('search').value;

    let name = document.getElementById('location');
    let temperature=document.getElementById('temperature');
    let description = document.getElementById('description');
    let pressure = document.getElementById('pressure');
    let wind = document.getElementById('wind');
    let humidity = document.getElementById('humidity');




    const apiKey = 'f51e6e3a8c0377fe66349623dac8f1c7';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apiKey}`)
        .then((data) => data.json())
        .then((Resp) => {
            // console.log(Resp);
            name.textContent = `${Resp.name},${Resp.sys.country}`;
            temperature.textContent = `${Resp.main.temp}°C`;
            description.textContent = Resp.weather[0].main;
            pressure.textContent = `pressure  ${Resp.main.pressure} hPa`;
            humidity.textContent = `humidity  ${Resp.main.humidity} %`;
            wind.textContent = `wind  .  . ${Resp.wind.speed} mi/h`;

            if (Resp.weather[0].main == "Drizzle") {
                weatherimg.src = "./day/drizzle.png"

            }
            else if (Resp.weather[0].main == "Mist") {
                weatherimg.src = "./day/mist.png"

            }
            else if (Resp.weather[0].main == "Haze") {
                weatherimg.src = "./day/Haze.png"

            }
            else if (Resp.weather[0].main == "Clear") {
                weatherimg.src = "./day/Sunny.png"

            }
            else if (Resp.weather[0].main == "Clouds") {
                weatherimg.src = "./day/clouds.png"

            }


        })
        .catch(error => {
            console.error(error);
            name.textContent = 'City not found';
            temperature.textContent = 'none';
        });
    ;



}
