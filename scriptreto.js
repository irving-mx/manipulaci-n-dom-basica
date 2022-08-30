const img = document.querySelector('#img');

img.addEventListener('mouseover',grow);
img.addEventListener('mouseout',child);


function grow(){
    img.setAttribute("src","https://as01.epimg.net/meristation/imagenes/2021/02/08/noticias/1612786479_151283_1612786596_noticia_normal.jpg");
}

function child(){
    img.setAttribute("src", "https://pbs.twimg.com/media/CFGGcxbWEAEERYl.jpg");
}