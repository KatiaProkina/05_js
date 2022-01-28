
function calc (sum, numberOfProducts,promo = null){
    let totalPrice = 0
    if (promo = 'ДАРИМ300' && sum < 300) {
        totalPrice = 0
        return totalPrice
    }
    else if(promo = 'ДАРИМ300'){
        totalPrice = sum - 300; 
        return totalPrice
        }
    if(promo = null){
            totalPrice = sum
        }
    if (numberOfProducts >= 10){
        totalPrice = totalPrice * 0.95;
        }
    if (totalPrice > 50000){
        let difference = totalPrice - 50000;
        let twentyPersent = difference * 0.2;
        totalPrice = totalPrice - twentyPersent;
        } 
    if (promo = 'СКИДКА15' && sum >= 20000){
        totalPrice = totalPrice * 0.85
        }
        return totalPrice 
     } 

export default calc








