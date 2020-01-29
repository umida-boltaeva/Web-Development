let numberOfDrumButtons = document.querySelectorAll(".drum").length;



for(let i = 0; i < numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

      switch (buttonInnerHTML) {
          case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
              break;
      
          default:
              break;
      }

        });

}





