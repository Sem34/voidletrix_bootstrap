// works buttons
let btnDesign = document.querySelector('.works__btn_3d');
let blockDesign = document.querySelector('.design');
let btnIllus = document.querySelector('.works__btn_ills');
let blockIllustrations = document.querySelector('.illustrations')
let btnAnim = document.querySelector('.works__btn_anim');
let blockAnimation = document.querySelector('.animation');

btnDesign.onclick = function () {
    btnDesign.classList.add('works__btn_active');
    btnIllus.classList.remove('works__btn_active');
    btnAnim.classList.remove('works__btn_active');
    blockIllustrations.classList.remove('d-block');
    blockIllustrations.classList.add('d-none');
    blockDesign.classList.add('d-block');
    blockDesign.classList.remove('d-none');
    // blockDesign.classList.add('design__show');
    // blockIllustrations.classList.remove('illustrations__show');
    // blockIllustrations.classList.add('illustrations__no-show');
    // blockAnimation.classList.add('animation__no-show');
};

btnIllus.onclick = function () {
    btnIllus.classList.add('works__btn_active');
    btnDesign.classList.remove('works__btn_active');
    btnAnim.classList.remove('works__btn_active');
    blockIllustrations.classList.remove('d-none');
    blockIllustrations.classList.add('d-block');
    blockDesign.classList.remove('d-block');
    blockDesign.classList.add('d-none');
    blockAnimation.classList.remove('d-block');
    blockAnimation.classList.add('d-none');
    // blockDesign.classList.remove('design__show');
    // blockIllustrations.classList.remove('illustrations__no-show');
    // blockIllustrations.classList.add('illustrations__show');
    // blockAnimation.classList.add('animation__no-show');
};
btnAnim.onclick = function () {
    btnAnim.classList.add('works__btn_active');
    btnDesign.classList.remove('works__btn_active');
    btnIllus.classList.remove('works__btn_active');
    blockAnimation.classList.remove('d-none');
    blockAnimation.classList.add('d-block');
    blockDesign.classList.remove('d-block');
    blockDesign.classList.add('d-none');
    blockIllustrations.classList.remove('d-block');
    blockIllustrations.classList.add('d-none');
    // blockAnimation.classList.remove('animation__no-show');
    // blockAnimation.classList.add('animation__show');
    // blockIllustrations.classList.remove('illustrations__show');
    // blockIllustrations.classList.add('illustrations__no-show');
    // blockDesign.classList.remove('design__show');
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

