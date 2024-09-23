const button = document.getElementById("location_button");


async function getData(lat, long) {
    let data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=2b590cdc4f154003bce73446242309&q=${lat},${long}&aqi=yes`
    );
    return await data.json();
}

async function gotLocation(position) {
    const res = await getData(
        position.coords.latitude,
        position.coords.longitude
    )
    console.log(res);
}

function failedToGet(){
    console.log("Error Finding Location");
}

button.addEventListener("click", async () => {
    let result = navigator.geolocation.getCurrentPosition(gotLocation,failedToGet);
});