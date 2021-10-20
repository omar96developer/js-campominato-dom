
  const selectdifficolta = document.querySelector('.difficolta');
  const btnstartgame = document.querySelector('.play');
  const boarcontainer = document.querySelector('.griglia');

  

  btnstartgame.addEventListener('click', function(){
    //utente sceglie livello 
    const level = selectdifficolta.value
    const totalcell = getcellnum(level)
   generategrid(totalcell);

  })
  
  function getcellnum(level){
      switch (parseInt(level)) {
        case 1:
            result = 100;
            break;
        case 2:
            result = 81;
            break;
        case 3:
            result = 49;
            break;
      }

      return result
  }

  function generategrid(cellsnumber) {
      boarcontainer.innerHTML = "";
      const perrowcels =  Math.sqrt(cellsnumber);
      const cellsize = 100 / perrowcels

    for (let i = 0; i < cellsnumber; i++) {
            //gnero una cella
        //const cell = `<div class='cella' style='width: ${cellsize}%; height: ${cellsize}%;'></div>`;
        const cell = document.createElement("div");
        cell.classList.add("cella");
        cell.style.width = cellsize + "%";
        cell.style.height = cellsize + "%";
        cell.addEventListener("click", onsingleclick);
        cell.textContent = i + 1
        

        //boarcontainer.innerHTML += cell;
        boarcontainer.append(cell)
    }   

  }

  function onsingleclick () {
      this.style.backgroundColor = 'red'
  }