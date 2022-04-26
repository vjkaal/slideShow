const imgArr = ["#img1", "#img2", "#img3", "#img4"];
const waitTime = 1000;
document.querySelector('html').onclick = documentDesign();
//if length of array is changed plz also change it on line 11

function documentDesign() {
	start();
	looping();
	// hoverable(0,3);
}

function start() {
	document.querySelector(imgArr[0]).style.display = "inline";
	for(let i=1;i<imgArr.length;i++){
		document.querySelector(imgArr[i]).style.display = "none";
	}
	// document.querySelector("#img9").style.display = "none";
	// document.querySelector("#extra").style.display = "none";
}

async function looping() {
	let len = imgArr.length;
	for (let i = 0; i <= len; i++) {
		if (i === len) {
			i = 0;
		}
		display(i);
		await wait();
		document.querySelector(imgArr[i]).style.display = "none";
	}
}

function wait() {
	// check();
	let miliseconds = waitTime;
	return new Promise((resolve) => setTimeout(resolve, miliseconds));
}

function display(i) {
	let img = document.querySelector(imgArr[i]);
	img.style.display = "inline";
}


// document.querySelector('#prev').onclick = function prev() {
//     setButtons();
//     console.log("left");
//     let n = getCurrent();
//     if (n > 0) {
//         n--;
//         slideShow(n);
//     }
//     else slideShow(0);
// }

// document.querySelector('#next').onclick = function next() {
//     setButtons();
//     console.log("right");
//     let n = getCurrent();
//     let len = imgArr.length;
//     if (n < len - 1) {
//         n++;
//         slideShow(n);
//     }
//     else slideShow(len - 1);
// }

// function hoverable(n,len) {
//     console.log(n+" "+len);
//     let btn1 = document.querySelector('#prev');
//     let orgclr1 = btn1.style.color;
//     let orgbg1 = btn1.style.backgroundColor;
//     let bd1 = btn1.style.border;
//     let pt1 = btn1.style.cursor;
//     if (n > 0) {
//         btn1.addEventListener('mouseover', (event) => {
//             btn1.style.backgroundColor = 'gray';
//             btn1.style.color = 'white';
//             btn1.style.border = 'solid white 2px';
//             btn1.style.cursor = 'pointer';
//         });
//         btn1.addEventListener('mouseleave', (event) => {
//             btn1.style.backgroundColor = orgbg1;
//             btn1.style.color = orgclr1;
//             btn1.style.border = bd1;
//             btn1.style.cursor = pt1;
//         });
//     }
//     else{
//         // console.log('else am running');
//         btn1.addEventListener('mouseover',(event) => {
//             btn1.style.cursor = 'not-allowed';
//         });
//         btn1.addEventListener('mouseleave',(event) => {
//             btn1.style.cursor = pt1;
//         });
//     }
	
//     let btn2 = document.querySelector('#next');
//     let orgclr2 = btn2.style.color;
//     let orgbg2 = btn2.style.backgroundColor;
//     let pt2 = btn2.style.cursor;
//     let bd2 = btn2.style.border;
//     if (n < len) {
//         // console.log(n);
//         btn2.addEventListener('mouseover', (event) => {
//             btn2.style.backgroundColor = 'gray';
//             btn2.style.color = 'white';
//             btn2.style.border = 'solid white 2px';
//             btn2.style.cursor = 'pointer';
//         });
//         btn2.addEventListener('mouseleave', (event) => {
//             btn2.style.backgroundColor = orgbg2;
//             btn2.style.color = orgclr2;
//             btn2.style.cursor = pt2;
//             btn2.style.border = bd2;
//         });
//     }
//     else{
//         btn2.addEventListener('mouseover',(event) => {
//             btn2.style.cursor = 'not-allowed';
//         });
//         btn2.addEventListener('mouseleave',(event) => {
//             btn2.style.cursor = pt2;
//         })
//     }
//     console.log('this');
//     console.log(btn1.style.backgroundColor);
//     console.log(btn2.style.backgroundColor);
// }

// function setButtons(bg1,c1,bg2,c2){
//     let btn1 = document.querySelector('#prev');
//     btn1.style.backgroundColor = 'white';
//     btn1.style.color = 'black';
//     btn1.style.border = 'solid black 2px';
//     let btn2 = document.querySelector('#next');
//     btn2.style.backgroundColor = 'white';
//     btn2.style.color = 'black';
//     btn2.style.border = 'solid black 2px';
//     console.log('that');
//     console.log(btn1.style.backgroundColor);
//     console.log(btn2.style.backgroundColor);
// }