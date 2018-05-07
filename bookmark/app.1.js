const siteName = document.getElementById("siteName");
const siteUrl = document.getElementById("siteUrl");


document.forms['myForm'].addEventListener('submit', function(e){

    e.preventDefault();

    let name = siteName.value.trim();
    let url = siteUrl.value.trim();
    if (!validateForm(name, url)) {
        return false;
    }

    if(!siteName.value.trim() && !siteUrl.value.trim()){
        alert("Please fill in the form");
        return false;
    }

    let bookmark = {
        name: siteName.value.trim(),
        url: siteUrl.value.trim()
    }

    let bookmarks = localStorage.getItem('bookmarks');
    if (bookmarks === null){
        bookmarks = [];
    }else{
        bookmarks = JSON.parse(bookmarks);
    }

    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    e.target.reset();
    reloadData();
});

document.addEventListener('DOMContentLoaded', reloadData);

function reloadData() {

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    let result = document.getElementById('bookmarksResults');
    result.innerHTML = '';
    if (Array.isArray(bookmarks) && bookmarks.length) {
        bookmarks.forEach(function (bookmark) {
            var name = bookmark.name;
            var url = bookmark.url;
            result.innerHTML += '<div class="list-group-item"><h3>' + name + ' <a class="btn btn-default" href="' + url + '" target="_blank">Visit</a></h3> <button class="btn btn-danger" onclick="deleteBookmark(this)" data-url="'+url+'">Delete</button></div>';
        });
    }
}

function deleteBookmark(e) {
    let url = e.getAttribute("data-url").trim();
    if (url){
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        if (Array.isArray(bookmarks) && bookmarks.length){
            bookmarks.forEach(function(bookmark, index) {
               if(bookmark.url === url){
                   bookmarks.splice(index, 1);
               } 
            });
        }
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    reloadData();
    
}

function validateForm(name, url) {
    if (!name || !url) {
        if(!name){
            alert('Please fill the name field at the  form');
            siteName.focus();
            return false;
        }

        if(!url){
            alert('Please fill the Url field at the  form');
            siteUrl.focus();
            return false;
        }

        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!url.match(regex)) {
        alert('Please use a valid URL');
        siteUrl.focus();
        return false;
    }

    return true;
}