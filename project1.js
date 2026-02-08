const btn= document.getElementById("search-btn");
const ip= document.getElementById("city-ip")
const cityname = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const temp = document.getElementById("temp");
const API_KEY = "cccd4cefcabb4582bb9125729250110";
async function getdata(cityName) {
   const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`)
    return await promise.json();
    
}
btn.addEventListener("click",async ()=>
{
    const val = ip.value;
    const res = await getdata(val);
    console.log(res);
   cityname.innerText = `${res.location.name}, ${res.location.region}, ${res.location.country}`;
   cityTime.innerText = res.location.localtime;
   temp.innerText = res.current.temp_c;

})
