const inputNumber = document.querySelector("#numberInput");
const fact = document.querySelector("#fact");
const factText = document.querySelector("#factText");

inputNumber.addEventListener('input', function(e){
    let number = e.target.value;

    if(number != ''){


        fetch('http://numbersapi.com/' + number)
            .then(response => response.text())
            .then( data => {
                console.log(data);
                fact.style.display = "block";
                factText.textContent = data;

            }).catch(e => console.log(e));
        // let xhr = new XMLHttpRequest();

        // xhr.open('GET', 'http://numbersapi.com/'+ number);

        // xhr.onload =function () {
        // if(this.status == 200){
        //         console.log(this.responseText);
        //         fact.style.display = "block";
        //         factText.textContent = this.responseText;
        // }  
        // };

        // xhr.send();
    }else{
        fact.style.display = "none";
    }

})