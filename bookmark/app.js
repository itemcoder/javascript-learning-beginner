const siteName = document.querySelector("#siteName");
const siteUrl = document.querySelector("#siteUrl");
const form = document.querySelector("#myForm");
const bookmarksResult = document.querySelector("#bookmarksResults");

form.addEventListener('submit', function(e){
    e.preventDefault();

    let name = siteName.value.trim(),
        url = siteUrl.value.trim();


    if(!name && !url){
        alert("Please fill the form");

        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!url.match(regex)) {
        alert('Please use a valid URL');
        siteUrl.focus();
        return false;
    }
        let bookmark = {
            name: name,
            url: url
        }

    let bookmarks = localStorage.getItem('bookmarks');

    if (bookmarks===null){
        bookmarks = [];
    }else{
        bookmarks = JSON.parse(bookmarks);
    }
    
    bookmarks.push(bookmark);

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    e.target.reset();

    datareload();

});

document.addEventListener('DOMContentLoaded', datareload);


function deleteBookmark(e){
    let url =e.getAttribute("data-url");
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (Array.isArray(bookmarks) && bookmarks.length) {

        bookmarks.forEach(function(bookmark, i){
            if (bookmark.url === url){
                bookmarks.splice(i, 1);
            }
        });
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        datareload();
    }

}

function datareload() {
    
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    if(Array.isArray(bookmarks)){

        bookmarksResult.innerHTML = '';

        bookmarks.forEach(function(bookmark){
            bookmarksResult.innerHTML += "<div class='list-group-item'><h3>" + bookmark.name +"</h3><a href='"+ bookmark.url+"'>Visit</a> <button class='btn btn-danger' onclick='deleteBookmark(this)' data-url='"+bookmark.url+"'>Delete</button></div>";

        });

    }

}