
  const selectdifficolta = document.querySelector('.difficolta');
  const btnstartgame = document.querySelector('.play');
  const boarcontainer = document.querySelector('.griglia');

  

  btnstartgame.addEventListener('click', function(){

    const level = selectdifficolta.value
    const totalcell = getcellnum(level)
   generategrid(totalcell);

  })

  const numcells = 81; //livello medio 
  generanumeribombe(16, numcells)
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
        
        const cell = document.createElement("div");
        cell.classList.add("cella");
        cell.style.width = cellsize + "%";
        cell.style.height = cellsize + "%";
        cell.addEventListener("click", onsingleclick);
        cell.textContent = i + 1
        

        boarcontainer.append(cell)
    }   

  }

  function onsingleclick () {
      this.style.backgroundColor = 'red'
  }                       
  
  function generanumeribombe(numbombe, nummaxrandom){
      const arraybombe = [];

      for (let i = 0; i < 16; i++){
          const nuovabomba = generaterandomnumber(1, nummaxrandom);
       
          let numeroesiste = arraybombe.includes(nuovabomba);
          //arraybombe.indexOf(nuovabomba)
          /* for (let j = 0; j < arraybombe.length; j++) {
              const bombaesistente = arraybombe[j];
              if(bombaesistente === nuovabomba){
                  numeroesiste = true
              }
              
          } */
          if(!numeroesiste){
            arraybombe.push(nuovabomba)
          } else {
            i--;
          }
          
        }
       
    }
    
    
    function generaterandomnumber(minnumber = 1, maxnumber = 10){

    const numrandom = Math.floor(Math.random() * (maxnumber - minnumber + 1) + minnumber);
    return numrandom
    }


function orderarray (){
    const arrayordinato = arraybombe.sort( (a, b) => a - b);
    return arrayordinato
    
}
