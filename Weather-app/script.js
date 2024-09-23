const input = document.getElementById('city-input');
const search_button = document.getElementById('city-search');

const city_location = document.getElementById('city-details');
const local_time = document.getElementById('local-time');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const icon = document.getElementById('icon');

async function getData(city_location) {
    let data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=2b590cdc4f154003bce73446242309&q=${city_location}&aqi=yes`
    );
    return await data.json();
}

search_button.addEventListener("click", async () => {
    const val = input.value;
    const result = await getData(val);
    city_location.innerText = `${result.location.name}, ${result.location.country}`;
    local_time.innerText = `${result.location.localtime} (24-hr)`;
    temperature.innerText = `${result.current.temp_c} \u00B0 C`;
    condition.innerText = `${result.current.condition.text}`
    icon.setAttribute("src", `${result.current.condition.icon}`);
});