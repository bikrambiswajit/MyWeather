const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city-name');
const temp = document.getElementById('temp');
const tempStatus = document.getElementById('tempStatus');
const datahide = document.querySelector('.middle-layer');

const getInfo =  async(event)=> {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === "") {
        city_name.innerHTML = `Please enter search query`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f0e06fccc4674676ffc72e456ab81f37`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerHTML = arrData[0].name;
            temp.innerText = arrData[0].main.temp;
            tempStatus.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                tempStatus.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
                } else if (tempMood == "Clouds") {
                tempStatus.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
                } else if (tempMood == "Rain") {
                tempStatus.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
                } else {
                tempStatus.innerHTML =
                    "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
                }

                datahide.classList.remove('data_hide');
        }
        catch{
            //city_name.innerText = `Please enter the city name correctly`;
            datahide.classList.add('data_hide');
        }
        
    }
}

submitBtn.addEventListener('click', getInfo);