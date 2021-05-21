document.querySelector('html').onclick = documentDesign();
const imgArr = ["#img1","#img2","#img3","#img4"];

function documentDesign(){
    pageLayout();
    buttonDesign();
    start();
}

function pageLayout(){
    let divP = document.querySelector('.imgCont');
    // divP.style.background = 'black';
    divP.style.width = '100%';
    divP.style.height = '30em';
    divP.style.display = 'flex';
    divP.style.justifyContent = 'space-around';
}

function buttonDesign(){
    let btn1 = document.querySelector('#prev');
    btn1.innerHTML = '<';
    btn1.style.height = '2em';
    btn1.style.alignSelf = 'center';
    btn1.style.borderRadius = '50%';
    btn1.style.padding = '0px 8px';
    let orgclr1 = btn1.style.color;
    let orgbg1 = btn1.style.backgroundColor;
    btn1.addEventListener('mouseover',(event) => {
        btn1.style.backgroundColor = 'gray';
        btn1.style.color = 'white';
    });
    btn1.addEventListener('mouseleave',(event) => {
        btn1.style.backgroundColor = orgbg1;
        btn1.style.color = orgclr1;
    });

    let btn2 = document.querySelector('#next');
    btn2.innerHTML = '>';
    btn2.style.height = '2em';
    btn2.style.borderRadius = '50%';
    btn2.style.alignSelf = 'center';
    btn2.style.padding = '0px 8px';
    let orgclr2 = btn2.style.color;
    let orgbg2 = btn2.style.backgroundColor;
    btn2.addEventListener('mouseover',(event) => {
        btn2.style.backgroundColor = 'gray';
        btn2.style.color = 'white';
    });
    btn2.addEventListener('mouseleave',(event) => {
        btn2.style.backgroundColor = orgbg2;
        btn2.style.color = orgclr2;
    });
}

function start(){
    console.log("yes here!")
    document.querySelector('#img1').style.display = 'inline';
    document.querySelector('#img1').style.width = '90%';
    document.querySelector('#img2').style.display = 'none';
    document.querySelector('#img3').style.display = 'none';
    document.querySelector('#img4').style.display = 'none';
}

document.querySelector('#prev').onclick = function prev(){
    console.log("left");
    let n = getCurrent();
    if(n>0) {
        n--;
        slideShow(n);
    }
    else slideShow(0);
}

document.querySelector('#next').onclick = function next(){
    console.log("right");
    let n = getCurrent();
    let len = imgArr.length;
    if(n < len-1){
        n++;
        slideShow(n);
    }
    else slideShow(len-1);
}

function getCurrent(){
    // let imgArr = ["#img1","#img2","#img3","#img4"];
    for (let i = 0; i < imgArr.length; i++) {
        if(document.querySelector(imgArr[i]).style.display === 'inline'){
            return i;
        }        
    }
}

function slideShow(n){
    console.log('Entered ' + n);
    let current = n;
    for (let i = 0; i < imgArr.length; i++) {
        if(i === current){
            display(imgArr[i]);   
        }     
        else document.querySelector(imgArr[i]).style.display = 'none';
    }
}

function display(image){
    let img = document.querySelector(image);
    img.style.display = 'inline';
    img.style.width = '90%';
}


// function setImages(){
//     let img1 = document.querySelector('#img1');
//     img1.setAttribute('src','1.jpg');
//     let img2 = document.querySelector('#img2');
//     img2.setAttribute('src','2.jpg');
//     let img3 = document.querySelector('#img3');
//     img3.setAttribute('src','3.jpg');
//     let img4 = document.querySelector('#img4');
//     img4.setAttribute('src','4.jpg');
//     start();
//     // img1.style.width = '10em';
//     // img2.style.width = '10em';
//     // img3.style.width = '10em';
//     // img4.style.width = '10em';
// }