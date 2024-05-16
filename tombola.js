// prima cosa da fare è creare i div per che coorispondono alle tabelle della tombola//

function GeneraNumeri() {
    const Numeri = []
    const tombola = document.getElementById ("Tabellone")

    for (let i = 1; i <= 77; i++) {
        const cella = document.createElement ("div")
        cella.innerText = i
        cella.classList.add("cella") 
        tombola.appendChild(cella)
        Numeri.push(i)
    }
    
}
    

   
    





