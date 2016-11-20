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
      console.table(plusX, pos)
      let veldtop = document.querySelector('.spel').getBoundingClientRect().top
      //let pos = (speler.offsetTop - speler.scrollTop + speler.clientTop)
      console.log(pos)
      speler.style.top = pos.top - veldtop + plusX + "px"
      console.log('hi', speler.style.top);
    }
  }

  function klikGoud() {
    goud = goud + 1
    scorebord()
  }

  function scorebord() {
    console.log('score', goud)
    let bord = document.querySelector("#score")
    bord.innerHTML = "goud:" + goud
  }
  console.log('hi')
  document.querySelectorAll(".ore").forEach(ore => {
    console.log('added to', ore)
    ore.addEventListener('click', klikGoud)
  })

}())  