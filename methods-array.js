        const number =  [6,3,4,100,2,5]
        const names = ['Mike','mike','alpha','tango']

         const sorted = number.sort((a,b)=>{
            if(a >b) return 1
             if (a < b) return -1
             
             return 0
          })
          
          console.log(sorted)
           
         /* usa o padrão UTF-16*/
         /*Ordena de forma ascendente*/

         /* Returna de uma forma se for positivo outro forma se for negativo*/
         /*Mantei se for zero*/

          let numbers = [1,2,3,45,5,6]

          let test1 = numbers.sort((a,b)=> b - a)

          console.log(test1)
          