const our_team_blocks = document.querySelectorAll('.our-team-container__block');

for(let i = 0; i <= our_team_blocks.length; i++) {
    i %2 === 0 ? our_team_blocks[i].classList.add('odd') : our_team_blocks[i].classList.add('even');
}