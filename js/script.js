// works buttons (3D Design, illustrations, Animation)
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
}


