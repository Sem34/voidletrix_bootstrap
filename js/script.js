// works buttons
let btn3D = document.querySelector('.works__btn_3d');
let btnIllus = document.querySelector('.works__btn_ills');
let btnAnim = document.querySelector('.works__btn_anim');

btn3D.onclick = function () {
    btn3D.classList.add('works__btn_active');
    btnIllus.classList.remove('works__btn_active');
    btnAnim.classList.remove('works__btn_active');
};

btnIllus.onclick = function () {
    btnIllus.classList.add('works__btn_active');
    btn3D.classList.remove('works__btn_active');
    btnAnim.classList.remove('works__btn_active');
};
btnAnim.onclick = function () {
    btnAnim.classList.add('works__btn_active');
    btn3D.classList.remove('works__btn_active');
    btnIllus.classList.remove('works__btn_active');
}


// // slider
// let line = document.querySelector('.line');
// let slides = document.querySelectorAll('.slide');
// let sliderWidth = document.querySelector('.slider').offsetWidth; 
// let widthArray = [0];
// let lineWidth = 0; 
// let offset = 0;
// let step = 0;
// let ostatok = 0; 

// // console.log(sliderWidth);
// for (let i = 0; i < slides.length; i++) {
//     widthArray.push(slides[i].offsetWidth);
//     lineWidth += slides[i].offsetWidth;
// }
// line.style.width = line.width + 'px';

// console.log(widthArray);

// document.onclick = function () {
//     ostatok = lineWidth - sliderWidth - (offset + widthArray[step]);
//     if (ostatok >= 0) {
//         offset = offset + widthArray[step];
//         line.style.left = -offset + 'px';
//     }
//     else{
//         line.style.left = -(lineWidth - sliderWidth) + 'px';
//         offset = 0;
//         step = -1;
//     }

//     if (step + 1 == slides.length) {
//         step = 0;
//         offset = 0;
//     }
//     else{
//         step++;
//     }

// }

