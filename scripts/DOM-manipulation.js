const feature_blocks = document.querySelectorAll('.features-container__feature-block');

for(let i = 0; i <= feature_blocks.length; i++) {
    i %2 === 0 ? feature_blocks[i].classList.add('odd') : feature_blocks[i].classList.add('even');
}