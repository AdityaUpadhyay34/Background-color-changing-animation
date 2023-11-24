document.addEventListener('DOMContentLoaded',function() {
    const background = document.querySelector('.background');
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color +=  
            letters[Math.floor(Math.random()*16)];
        }
        return color;
    }
    function changeBackgroundColor() {
        background.style.backgroundColor = getRandomColor();
    }
    //change background color on page load
    changeBackgroundColor();
    //change background color on every page refresh
    document.addEventListener('keydown',function(event) {
        if (event.code ==='F5') {
            changeBackgroundColor();
        }
    });
});