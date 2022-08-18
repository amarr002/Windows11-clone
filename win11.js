function fscreen(){
    document.getElementsByClassName('mainbody')[0].requestFullscreen();
}

let pull = document.getElementsByClassName("pull")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

pull.addEventListener("click", ()=>{

if(startmenu.style.bottom=="30px"){
    startmenu.style.bottom="-255px"
}
else{
    startmenu.style.bottom="30px"
}
})

let search = document.getElementsByClassName("search")[0];
searchmenu = document.getElementsByClassName("searchmenu")[0];

search.addEventListener("click", ()=>{

if(searchmenu.style.bottom=="30px"){
    searchmenu.style.bottom="-255px"
}
else{
    searchmenu.style.bottom="30px"
}
})
let file = document.getElementsByClassName("file")[0];
fileexplorer = document.getElementsByClassName("fileexplorer")[0];

file.addEventListener("click", ()=>{

if(fileexplorer.style.bottom=="70px"){
    fileexplorer.style.bottom="-400px"
}
else{
    fileexplorer.style.bottom="70px"
}
})
let down = document.getElementsByClassName("down")[0];
winstore = document.getElementsByClassName("winstore")[0];

down.addEventListener("click", ()=>{

if(winstore.style.bottom=="70px"){
    winstore.style.bottom="-400px"
}
else{
    winstore.style.bottom="70px"
}
})
let int = document.getElementsByClassName("int")[0];
intexplorer = document.getElementsByClassName("intexplorer")[0];

int.addEventListener("click", ()=>{

if(intexplorer.style.bottom=="70px"){
    intexplorer.style.bottom="-400px"
}
else{
    intexplorer.style.bottom="70px"
}
})
function gettime(){
    var date = new Date;
    document.getElementById('thetime').innerHTML = date.getHours()+":"+date.getMinutes();
    document.getElementById('thedate').innerHTML = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();
    // var secs = date.getSeconds();
    // var leftsecs = 60-secs;
// console.log(date.getHours()+":"+date.getMinutes());
}
gettime();
setInterval(function(){ gettime(); },1000);