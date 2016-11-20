(function () {
  let goud = 0

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
    }
    button.addEventListener('click', moveTo(x, y));
  })


  function moveTo(plusX, PlusY) {
    return function () {
      let pos = speler.getBoundingClientRect();
      let veld = document.querySelector('.spel').getBoundingClientRect()
      let veldtop = veld.top
      //let pos = (speler.offsetTop - speler.scrollTop + speler.clientTop)
      console.table([pos,veld])
      speler.style.top = ((pos.top - veldtop) + plusX) + "px"
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