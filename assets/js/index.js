
function clickButton(){
    const button = document.body.querySelector('.button');
    const borderButton =  document.body.querySelector('.border-button') 
        button.addEventListener('click',() => {
            button.classList.toggle('animation');
            document.body.classList.toggle('dark')
            borderButton.classList.toggle('white');
        });
}
clickButton();

