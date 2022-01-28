
function filter(validEmailAdress,invalidEmailAdress){
    let result = []
    for(let i of validEmailAdress){
        if (!invalidEmailAdress.includes(i)){
            result.push(i)
        }
    }
   return result
}
export default filter


