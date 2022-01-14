$(function () {
    const szamologep = new Szamologep();
    let a = 2
    let b = 3
    let eredmeny = szamologep.osszead(a, b)
    $(".a").html(a)
    $(".b").html(b)
    $(".eredmeny").html(eredmeny)
})

class Szamologep {
    constructor() {

    }
    osszead(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return "az egyik nem szám!"
        }

        if (typeof a === "boolean" || typeof b === "boolean") {
            return "az egyik tag logikai változó!"
        }

        if (Number(a) + Number(b) >= Number.MAX_VALUE) {
            return "túlcsordulás"
        }
       
        if (Number(a) + Number(b) <=- Number.MAX_VALUE) {
            return "túlcsordulás"
        }
      

        return Number(a) + Number(b)
    }
    kivonas(a,b){
        if (isNaN(a) || isNaN(b)) {
            return "az egyik nem szám!"
        }

        if (typeof a === "boolean" || typeof b === "boolean") {
            return "az egyik tag logikai változó!"
        }
        if (Number(a) - Number(b) >= Number.MAX_VALUE) {
            return "túlcsordulás"
        }
       
        if (Number(a) - Number(b) <= -Number.MAX_VALUE) {
            return "túlcsordulás"
        }
        return Number(a)-Number(b)
    }
    

}