function positions(firstPlace, secondPlace, lastPlace)
    {
        let nome = [firstPlace, secondPlace, lastPlace]
        if(lastPlace == "Daniel"){
                    console.log(`1º Colocado: ${firstPlace}`)
                    console.log(`2º Colocado: ${lastPlace}`)
            return  console.log(`3º Colocado: ${secondPlace}`)
        }else if(secondPlace == "Daniel"){
                    console.log(`1º Colocado: ${secondPlace}`)
                    console.log(`2º Colocado: ${firstPlace}`)
            return  console.log(`3º Colocado: ${lastPlace}`)
       }else(firstPlace == "Daniel")
                    console.log(`1º Colocado: ${firstPlace}`)
                    console.log(`2º Colocado: ${secondPlace}`)
            return  console.log(`3º Colocado: ${lastPlace}`)
        
       }
       
positions("Rafael","Daniel","Manoel")