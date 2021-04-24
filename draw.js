let gambarKotak = ""
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
        gambarKotak += ("*");
    }
     gambarKotak += "\n"
}

console.log(gambarKotak)

let gambarSegitiga = ""
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        gambarSegitiga += ("*");
    }
     gambarSegitiga += "\n"
}

console.log(gambarSegitiga)


let gambarSegitigaTerbalik = ""
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j <= 5 -i; j++) {
        gambarSegitigaTerbalik += ("*");
    }
     gambarSegitigaTerbalik += "\n"
}

console.log(gambarSegitigaTerbalik)

let gambarSelangSeling = ""
let nilai = 0
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
         

        
        nilai++
        let temp = 1
                
        for (let k = 1; k <= nilai; k++) {
            if (nilai % k == 0) {
                temp++
            }
        }
           
            if  (nilai % 2)
                gambarSelangSeling += ("!");
            else
            gambarSelangSeling += ("*");    
               
                
            
        
        
            
    }
     gambarSelangSeling += "\n"
}

console.log(gambarSelangSeling)



let gambarKotakPola = ""
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if ((i%2==1) && (j==3)) 
            gambarKotakPola += ("!");
        
        else if ((i%2==0) && (j==2)) 
                
                gambarKotakPola += ("!");
            
            
        else 
            gambarKotakPola += ("*")
            
        
            
        
    }
     gambarKotakPola += "\n"
}

console.log(gambarKotakPola)