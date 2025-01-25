//lod the fr page 
var articles = document.querySelector(".articles");

route = window.location.href.split("=")[1];



console.log(route);

if(route == undefined) Loader("./article/en/frontpage.html", articles);
else Loader(""+route, articles);






async function Loader(path, elem)
{
    response = await fetch(path);
    const text = await response.text()
    .then(data => elem.innerHTML = data);
}