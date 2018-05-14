function matches(elem, filter) {
    if (elem && elem.nodeType === 1) {
        if (filter) {
            return elem.matches(filter);
        }
        return true;
    }
    return false;
}

// this will start from the current element and get all of
// the next siblings
function getNextSiblings(elem, filter) {
    var sibs = [];
    while (elem = elem.nextSibling) {
        if (matches(elem, filter)) {
            sibs.push(elem);
        }
    }
    return sibs;
}

// this will start from the current element and get all the
// previous siblings
function getPreviousSiblings(elem, filter) {
    var sibs = [];
    while (elem = elem.previousSibling) {
        if (matches(elem, filter)) {
            sibs.push(elem);
        }
    }
    return sibs;
}

// this will start from the first child of the current element's
// parent and get all the siblings
function getAllSiblings(elem, filter) {
    var sibs = [];
    elem = elem.parentNode.firstChild;
    while (elem = elem.nextSibling) {
        if (matches(elem, filter)) {
            sibs.push(elem);
        }
    }
    return sibs;
}

function loadRatings() {
    let currentRating = parseInt(document.querySelector('.ratings').getAttribute('data-current-rating'), 10);
    let yourRating = parseInt(document.querySelector('.ratings').getAttribute('data-your-rating'), 10);
    let rating = yourRating ? yourRating : currentRating;

    if(yourRating){
        
    }
    document.querySelectorAll('.ratings a').forEach((a, i) => {
        if (i < (currentRating - 1)) {
            console.log(a);
            a.classList.add("selected");
        } else {
            a.classList.remove('selected');
        }
    });
}

document.addEventListener("DOMContentLoaded", currentRatings);

document.querySelectorAll(".ratings a").forEach((item)=>{
    console.log(item);
    item.addEventListener('mouseover', (e) =>{
        e.preventDefault();
        let currentItem = e.target;
        let allSib = getAllSiblings(currentItem, 'a');
        allSib.forEach((a)=>{
            a.classList.remove('selected');
        });
        let prevSib = getPreviousSiblings(currentItem, 'a');
        prevSib.forEach((a)=>{
            a.classList.add('selected');
        });
        currentItem.classList.add('selected');
    });

    item.addEventListener('mouseleave', (e)=>{
        currentRatings();
    });
})