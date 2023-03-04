

var list_button = document.querySelectorAll("button")
for(i=0;i<list_button.length;i++){
    list_button[i].addEventListener("click",function(){
        var button =  this.innerText;
        buttonAnimation(button);
        if(button==='w'){
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        }
        else if(button==='a'){
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        }
        else if(button==='s'){
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        }
        else if(button==='d'){
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        }
        else if(button==='j'){
            var audio = new Audio("/sounds/tom-2.mp3");
            audio.play();
        }
        else if(button==='k'){
            var audio = new Audio("/sounds/tom-3.mp3");
            audio.play();
        }
        else {
            var audio = new Audio("/sounds/tom-4.mp3");
            audio.play();
        }
    });

}


function buttonAnimation(currentkey){
    var pressed = document.querySelector("." + currentkey);
    pressed.classList.add("pressed");
    setTimeout(function(){
       pressed.classList.remove("pressed")
    },1000)
}
