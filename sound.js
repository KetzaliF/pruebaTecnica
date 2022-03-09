let audio = document.getElementsByTagName("audio")[0];
let sound = false;
let boton = document.getElementById("sound");

boton.addEventListener("click", function(){
   if (!sound) {
      audio.play();
      sound = true;
   } else {
      audio.pause();
      sound = false;
   }
});