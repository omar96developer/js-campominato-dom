
  const selectdifficolta = document.querySelector('.difficolta');
  const btnstartgame = document.querySelector('.play');
  const boarcontainer = document.querySelector('.griglia');

  let bombe = [];

  btnstartgame.addEventListener('click', function(){

    const level = selectdifficolta.value
    const totalcell = getcellnum(level)
   generategrid(totalcell);
   bombe = generanumeribombe(16, totalcell)

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
      
      const numcellacorrente = parseInt(this.textContent)

      if(bombe.includes(numcellacorrente)){
        this.style.backgroundColor = 'red'
        alert('You lose')
        window.location.reload(false)
      } else{
        this.style.backgroundColor = 'green'
      }
      return
  }                       
  




function generanumeribombe(numbombe, nummaxrandom){
    let arraybombe = [];
    arraybombe = generabombewhile(nummaxrandom, numbombe)
    return arraybombe
}


function orderarray (){
    const arrayordinato = arraybombe.sort( (a, b) => a - b);
    return arrayordinato
    
} 

function generabombewhile (numcells, numbombe){
    const arraybombe = []
    while(arraybombe.length < numbombe) {
        const nuovabomba = generaterandomnumber(1, numcells);
    
        let numeroesiste = arraybombe.includes(nuovabomba);
        if(!numeroesiste){
            arraybombe.push(nuovabomba)
            } else {

            }
    }
    return arraybombe
}

function generaterandomnumber(minnumber = 1, maxnumber = 10){

    const numrandom = Math.floor(Math.random() * (maxnumber - minnumber + 1) + minnumber);
    return numrandom
    }



