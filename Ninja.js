

class Ninja{

    constructor(nombre, salud, velocidad, fuerza ){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
        

    sayName(){
        return this.nombre
    }

    showStatus(){
        return ninja1
    }

    srinkSake(){
        return this.salud +=10;
    }

}

const ninja1 = new Ninja("andres", 10, 50, 200);

console.log(ninja1.sayName())
console.log(ninja1.showStatus())
console.log(ninja1.srinkSake())

