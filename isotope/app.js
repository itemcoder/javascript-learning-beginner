const isotopeY = document.querySelector('.isotop-wapper');
const filters = document.getElementById('iso-filter').querySelectorAll('.btn');
const sort = document.getElementById('iso-sort').querySelectorAll('.btn');

var iso = $('.isotop-wapper').isotope({
    // options
    itemSelector: '.iso-item',
    layoutMode: 'fitRows'
});

filters.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let val = e.target.getAttribute("data-id");
        iso.isotope({
            filter: val
        });

    });
});

sort.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let val = e.target.getAttribute("data-id");
        console.log(val);
        iso.isotope({ sortBy: '.name' });

    });
});
