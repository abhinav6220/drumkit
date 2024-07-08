var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){ // onclick se bhi kaam chal zata
       
       var name = this.innerHTML;
       var s= this.classList[0];
       makesound(name);
       makeshadow(s);
    })


}
document.addEventListener("keydown",function(event){
     makesound(event.key);
     makeshadow(event.key);
     
})

function makesound(key){
    switch(key){
        case "w":
       var audio= new Audio("sounds/tom-1.mp3");       
       audio.play(); 
       break;
        case "a":
        var audio= new Audio("sounds/tom-2.mp3");       
        audio.play(); 
        break;  
         case "s":
            var audio= new Audio("sounds/tom-3.mp3");       
            audio.play(); 
            break;
            case "d":
                var audio= new Audio("sounds/tom-4.mp3");       
                audio.play(); 
                break;
                case "j":
                    var audio= new Audio("sounds/snare.mp3");       
                    audio.play(); 
                    break;  
                    case "k":
                        var audio= new Audio("sounds/crash.mp3");       
                        audio.play(); 
                        break;
                        case "l":
                            var audio= new Audio("sounds/kick-bass.mp3");       
                            audio.play(); 
                            break;     
           
       }
}
function makeshadow(key){
  var activebutton =  document.querySelector("."+key);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
    
}
