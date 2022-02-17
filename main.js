
//Checks to make sure amount of gas does not exceed size of tank
const fillGasTank = (gas) => {
    if(gas <= 15){
        console.log(`I filled the tank with ${gallons} of gas`)
    }else{
        console.log("You cannot add this much gas to the tank.")
    }
}

fillGasTank(15)

