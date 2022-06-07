const projects = [{
        "path": "project-pics/1.jpg",
        "title": "Library System",
        "description": "A library system or application that allows students to sign in or register. It enables students to browser books based on the faculty and department the like. It also has a search functionality for one to search for a book. It has an administration side for administrators to manager the system and update/add/delete the books."
    },
    {
        "path": "project-pics/2.jpg",
        "title": "HI Music Management System",
        "description": "Its a management system for me to manage my music."
    },
    {
        "path": "project-pics/3.jpg",
        "title": "San7beats",
        "description": "A website that presents all music and beats at one place. It reads all my music/beats posted from other sites like souncloud, audiomack, etc and presents them all in one place."
    }
];

let len = 0;

document.getElementById("main-project").innerHTML = "" +
"<img class='proj-pic' src='" + projects[len].path + "' alt='pic' height='100px'/>" +
"<span style='font-size: 22px'><b>"+projects[len].title+"</b></span><br /><br />" +
projects[len].description;

function preCard(){
    len--;
    if(len < 0) {
        len = projects.length - 1;
    }
    document.getElementById("main-project").innerHTML = "" +
        "<img class='proj-pic' src='" + projects[len].path + "' alt='pic' height='100px'/>" +
        "<span style='font-size: 22px'><b>"+projects[len].title+"</b></span><br /><br />" +
        projects[len].description;
}
function nextCard(){
    len++;
    if(len > projects.length - 1) {
        len = 0;
    }
    document.getElementById("main-project").innerHTML = "" +
        "<img class='proj-pic' src='" + projects[len].path + "' alt='pic' height='100px' />" +
        "<span><b>"+projects[len].title+"</b></span><br /><br />" +
        projects[len].description;
}