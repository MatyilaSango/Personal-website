const projects = [{
        "path": "project-pics/1.jpg",
        "title": "Library System",
        "description": "Description 1"
    },
    {
        "path": "project-pics/2.jpg",
        "title": "HI Music Management System",
        "description": "Description 2"
    },
    {
        "path": "project-pics/3.jpg",
        "title": "San7beats",
        "description": "Description 3"
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