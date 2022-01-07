let restaurent = {
    name:'ASB',
    guestcapacity:75,
    guestcount:0,
    checkAvailabity: function(partysize){
        let seatsleft= this.guestcapacity - this.guestcount
        return partysize <= seatsleft
    },

    seatparty: function (partysize){
        this.guestCount = this.guestCount + partysize
    },

    removeparty: function (partysize){
        this.guestCount = this.guestCount - partysize
    }
}

restaurent.seatparty(72)
console.log(restaurent.checkAvailabity(4))
restaurent.removeparty(5)
console.log(restaurent.checkAvailabity(4))