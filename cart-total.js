const MINUS_300 = 'ДАРИМ300';
const MINUS_15_PERCENT = 'СКИДКА15';

function calculate (sum, numberOfProducts,promo = null){
    
    let noPromo = promo===null
       if(noPromo){
           return sum
       } 
        
       if(sum < 300){
           return 0
        }
       
        if (promo === MINUS_300){
            sum = sum - 300 
         }
       
        if (numberOfProducts >= 10 ){
             sum = sum * 0.95  
        }
        
        if(sum > 50000){
            sum = sum  - (sum - 50000)* 0.2
        }

        if (promo === MINUS_15_PERCENT){
            if(sum >= 20000){
                sum = sum * 0.85}
        }
        return sum
    }
    


       
       console.group('should return same amount without any promotions')
       console.log(calculate(10, 9) ===10)
       console.log(calculate(100, 1) ===100)
       console.log(calculate(1000, 5) === 1000)
       console.log(calculate(49999, 3) === 49999)
       console.groupEnd()
        
       console.group(`should properly apply ${MINUS_300} promocode`)
       console.log (calculate(1000, 1, MINUS_300) === 700)
       console.log (calculate(820, 9, MINUS_300) ===520)
       console.log(calculate(100, 1, MINUS_300) === 0)
       console.log(calculate(100, 15, MINUS_300) === 0)
       console.groupEnd()

       console.group('should properly apply 5% discount for 10+ units')
       console.log (calculate(100, 10) === 95)
       console.log (calculate(500, 15) === 475)
       console.log(calculate(500, 17, MINUS_300) ===190)
       console.log(calculate(180, 12, MINUS_300) === 0)
       console.groupEnd()

       console.group('should properly apply 20% discount to 50k+ surplus')
       // simple case
       console.log (calculate(50100, 2) === 50000)
       // when 20% surplus discount should not be applied
       console.log (calculate(50100, 1, MINUS_300) === 49800)
       console.log (calculate(52300, 30, MINUS_300) ===49400 )
       console.log(calculate(52000, 22) === 49400)
       // when 20% surplus discount should be applied
       console.log(calculate(60300, 1, MINUS_300) === 58000)
       console.log(calculate(70000, 12) === 63200)
       console.log(calculate(70300, 12, MINUS_300) === 63200)
       console.groupEnd()

       console.group(`should properly apply ${MINUS_15_PERCENT} promocode to 20k+ carts`)
       console.log (calculate(19000, 4, MINUS_15_PERCENT)=== 19000)
       console.log (calculate(20000, 2, MINUS_15_PERCENT)=== 17000 )
        // 21 000 - 5% < 20k, should not be applied
       console.log(calculate(21000, 12, MINUS_15_PERCENT) === 19950)
       // 60 000 - 20% on surplus - 15%
       console.log(calculate(60000, 1, MINUS_15_PERCENT) === 49300)
       // 60 000 - 5% - 20% on surplus - 15%
       console.log(calculate(60000, 94, MINUS_15_PERCENT) === 47260)
       console.groupEnd()
       


    
    