const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const checkReservation = function(){

    let guestName = document.getElementById("Name").value;

    if(reservations[guestName] != undefined){ //Check if the name is on the guests list

        if(reservations[guestName].claimed){ //Check if the guest already inside
            console.log("Hmm, someone already claimed this reservation")
            return
        }

        console.log(`"Welcome, ${guestName}"`)
        return   
    }

    console.log("You have no reservation")
}