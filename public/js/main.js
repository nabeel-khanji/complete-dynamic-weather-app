const cityName = document.getElementById("cityName");
const submitButton = document.getElementById("submitButton");
const city_name = document.getElementById("city-name");
const temp_status = document.getElementById("temp-status");
const tempRealVal = document.getElementById("temp-real-val");
const dataHide = document.querySelector(".middle-layer");
const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal == "") {
    city_name.innerText = "PLease write te name before you search ";
    dataHide.classList.add("data-hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=matric&callback=&appid=5064e39e4c4a34352a4691eda2db2627`;
      const res = await fetch(url);
      const objData = await res.json();
      const arrayData = [objData];
      console.log(url);

      console.log(arrayData);
      tempRealVal.innerText = (arrayData[0].main.temp-273).toFixed(2);
      city_name.innerText = `${arrayData[0].name} ${arrayData[0].sys.country} `;
      const tempMod = arrayData[0].weather[0].main;
      if (tempMod == "Clear") {
        temp_status.innerHTML =
          '<i style="color: #fbfb98;" class="fa fa-sun"  aria-hidden="true"></i>';
     } else if (tempMod == "Clouds") {
        temp_status.innerHTML =
          '<i style="color: #b4b4b4;" class="fa fa-cloud" aria-hidden="true"></i>';
      } else if (tempMod == "Clouds") {
        temp_status.innerHTML = '<i style="color: #5f91bd;" class="fas fa-cloud-rain"></i>';
      } else {
        temp_status.innerHTML =
          '<i style="color: #fbfb98;"class="fa fa-sun" aria-hidden="true"></i>';
      }
      dataHide.classList.remove("data-hide");
    } catch (error) {
      city_name.innerText = "Please enter proper city name";
      dataHide.classList.add("data-hide");
    }
  }
};
submitButton.addEventListener("click", getInfo);
