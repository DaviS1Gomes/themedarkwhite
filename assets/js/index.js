
function clickButton(){
    const button = document.body.querySelector('.button');
        button.addEventListener('click',() => {
            button.classList.toggle('animation');
            document.body.classList.toggle('dark')
        });
}
clickButton();

