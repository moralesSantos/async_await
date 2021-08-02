
async function getmyCity(cityName){
    let fetchresult = await fetch(`https://geocode.xyz/${cityName}?json=1`);

    if (fetchresult.ok){
        let json = await fetchresult.json();
        // console.log(json);
        console.log(cityName + " Latt/Long are: "+ json.latt + " / " + json.longt);
        return json; 
        // console.log(json);
    } else {
        alert("Http-Error: " + fetchresult.status);
    }
}

// getmyCity("seattle");
getmyCity("Raliegh")

