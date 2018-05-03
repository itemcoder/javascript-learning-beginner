const h3 = document.querySelector('h3');
const ul = document.querySelector('ul');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    const request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                let data = JSON.parse(this.responseText);
                Object.keys(data).map(function(vale) {
                    let li = document.createElement('li');
                    li.classList.add("list-group-item");
                    li.textContent = vale + " : " + data[vale];
                    ul.appendChild(li);
                });
                // data.each(function(value, index) {
                //     console.log(value);
                //     console.log(index);
                // });
                // let newData = Array.from(data);
                // console.log(newData);
                // data.map(function(value, index) {
                //     console.log(value);
                //     console.log(index);
                // });
                // h3.textContent = data.name;
            } else if (this.status == 404) {
                console.log(this.statusText);
            }
        }
    };

    request.open('get', 'data.json', true);
    request.send();
});














// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (this.readyState == 4) {
//         if (this.status == 200) {
//             let data = JSON.parse(this.responseText);
//             document.querySelector('h3').textContent = xhr.responseText;
//             console.log(data);
//         } else if (this.status == 404) {
//             console.log("Resource or file not found");
//         }
//     }
// };

// xhr.open('get', 'data.json', true);
// xhr.send();