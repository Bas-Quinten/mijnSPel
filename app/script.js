(function () {
  let goud = 0
  spelerPos = [5,100]

  let speler = document.querySelector('.speler');
  [...document.querySelectorAll('.button')].forEach((button, ind) => {
    let x = 0;
    let y = 0;
    switch (ind) {
      case 0:
        x = +5;
        break;
      case 1:
        x = -5;
        break;
      case 2:
        y = -5;
        break; 
      case 3:
        y = 5;
        break;        
    }
    button.addEventListener('click', moveTo(x, y));
  })


  function moveTo(plusX, PlusY) {
    return function () {
      if (plusX) {
        spelerPos[0] += plusX
      }
      if (PlusY) {
        spelerPos[1] += PlusY
      }

      speler.style.top = spelerPos[0] + "px"
      speler.style.left = spelerPos[1] + "px"
      
      console.log('hi', speler.style.top);
    }
  }

  function klikGoud() {
    goud = goud + 1
    scorebord()
  }

  function scorebord() {
    let bord = document.querySelector("#score")
    bord.innerHTML = goud
  }
  document.querySelectorAll(".ore").forEach(ore => {
    ore.addEventListener('click', klikGoud)
  })

}())  