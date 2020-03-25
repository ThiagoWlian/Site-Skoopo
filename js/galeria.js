let imgclick1 = document.querySelector('.ImgMin1');
let imgclick2 = document.querySelector('.ImgMin2');
let imgclick3 = document.querySelector('.ImgMin3');
let imgclick4 = document.querySelector('.ImgMin4');
let imgfull = document.querySelector('.ImgFull');

imgclick1.addEventListener('click',function(event) {
    let foto = document.createElement('img');
    foto.src = './images/galeria1.jpg';
    foto.classList.add('Imgcover');
    document.querySelector('.ImgFull').innerHTML = "";
    imgfull.appendChild(foto);
})

imgclick2.addEventListener('click',function(event) {
    event.preventDefault();
    let foto = document.createElement('iframe');
    foto.src = 'https://www.youtube.com/embed/aela7tLEqaw';
    foto.classList.add('Imgcover');
    document.querySelector('.ImgFull').innerHTML = "";
    imgfull.appendChild(foto);
})

imgclick3.addEventListener('click',function(event) {
    event.preventDefault();
    let foto = document.createElement('img');
    foto.src = './images/galeria3.jpg';
    foto.classList.add("Imgcover");
    document.querySelector('.ImgFull').innerHTML = "";
    imgfull.appendChild(foto);
})

imgclick4.addEventListener('click',function(event) {
    event.preventDefault();
    let foto = document.createElement('img');
    foto.src = './images/galeria4.jpg';
    foto.classList.add('Imgcover');
    document.querySelector('.ImgFull').innerHTML = "";
    imgfull.appendChild(foto);
})
