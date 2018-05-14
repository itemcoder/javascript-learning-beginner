const qItem = document.getElementById('q');
const button = document.getElementById('q-search');

const loader = document.querySelector(".loader-wrap").querySelector('span');

const result = document.getElementById('search-result');

button.addEventListener('click', (e) => {
    let q = qItem.value.trim();

    if(!q){
        qItem.focus();
        alert("Please Inser your city to get the weather report");
        return false;
    }

    loader.classList.add('loader');

    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            let temp = `<li class="list-group-item"><b>Tempareture: ${data.main.temp}</b><small>(Max:${data.main.temp_max}, Min:${data.main.temp_min})</small></li>`;
            let position = `<li class="list-group-item"><b>Position:</b><small>(Latitude:${data.coord.lat}, Longitude:${data.coord.lon})</small></li>`;
            let weather = '';
            data.weather.forEach((item) =>{
                console.log(item);
                weather += `<img src="http://openweathermap.org/img/w/${item.icon}.png" /><small>(${item.description})</small>`;
            });
            weather = "<li class='list-group-item'>"+ weather+"</li>";

            
            let card = `<div class='card mb-4 col-sm-3'>
                        <div class="card-header">
                            <h4 class="my-0">${data.name}</h4>
                        </div>
                        <div class="card-body p-0">
                            <ul class="list-group">${temp} ${position} ${weather}</ul>
                        </div>
                    </div>`;

            result.innerHTML += card;
            qItem.value = "";
            loader.classList.remove('loader');

        }
    }

    xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=108a78dbf43a743dab946f267599c08c&units=metric`, true);
    xhr.send();

});


































// let xhr = new XMLHttpRequest();

// xhr.onload = function () {
//     if (xhr.readyState == 4 && xhr.status === 200){
//         console.log(JSON.parse(xhr.response));
//     }
// }

    
// xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Dhaka&units=metric&appid=108a78dbf43a743dab946f267599c08c');
// xhr.send();


//http:/ / openweathermap.org / img / w / ' + weather.icon + '.png"