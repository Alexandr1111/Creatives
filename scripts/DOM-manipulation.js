const key_blocks = document.querySelectorAll('.section-key__content ul li');

let BASE_WIDTH = 86;

for (let i = 0; i <= key_blocks.length; i++) {
    BASE_WIDTH += 6;
    key_blocks[0].style.width = '86%';
    key_blocks[i+1].style.width = BASE_WIDTH + '%';
}

