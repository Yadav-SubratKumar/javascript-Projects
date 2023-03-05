const endTime = window.prompt("Enter Date to begin the countdown");
document.querySelector('.Date_time').innerHTML = endTime;
const inputs = document.querySelectorAll('input');
const clock = () =>{

    const end = new Date(endTime);
    const today = new Date();
    const diff = (end - today)/1000;
    console.log(diff);
    
        
inputs[0].value = Math.floor(diff /24 / 3600);
inputs[1].value = Math.floor(diff / 3600) % 24;
inputs[2].value = Math.floor(diff / 60) % 60;
inputs[3].value = Math.floor(diff ) % 60;
    

}


setInterval(
    () => {
        clock();
    }
    ,1000
)