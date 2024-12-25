const dice_container = document.getElementById("dice-container");
var count;

function runGame(){
    const randomNumber = Math.ceil(Math.random() * 6);
    if (randomNumber===1) {
        dice_container.innerHTML = ` <div class="dice dice-1 animate__animated animate__flip">
        <span class="dot center "></span>
      </div>`;
    }
    else if (randomNumber===2) {
        dice_container.innerHTML = `<div class="dice dice-2 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
    }
    else if(randomNumber===3){
        dice_container.innerHTML = `<div class="dice dice-3 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot center"></span>
        <span class="dot bottom-right"></span>
      </div>`;
    }
    else if(randomNumber===4){
        dice_container.innerHTML = `<div class="dice dice-4 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot top-right"></span>
        <span class="dot bottom-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
    }
    else if(randomNumber===5){
        dice_container.innerHTML = `<div class="dice dice-5 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot top-right"></span>
        <span class="dot center"></span>
        <span class="dot bottom-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
    }
    else if(randomNumber===6){
        dice_container.innerHTML = `<div class="dice dice-6 animate__animated animate__flip">
        <span class="dot top-left"></span>
        <span class="dot top-right"></span>
        <span class="dot middle-left"></span>
        <span class="dot middle-right"></span>
        <span class="dot bottom-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
    }
    count = randomNumber
    console.log(count);
    win()
}


function win(){
    if (count===6) {
      Swal.fire("You are win buddy! Your dice number is six");
      dice_container.innerHTML = `<div class="dice dice-1 animate__animated animate__flip">
        <span class="dot center "></span>
      </div>`
    }
}
