

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

    drinkSake(){
        return this.salud +=10;
    }

}


class Sensei extends Ninja {
    
    constructor(nombre, salud, velocidad, fuerza, sabiduria=10){
        super(nombre, salud, velocidad, fuerza)
        this.sabiduria = sabiduria;
    }

    drinkSake (){
        return this.salud +=20;
    }

    speakWisdom (){
        let padre = super.drinkSake();
        return padre+" fé en la causa";
        
    }


}

const ninja1 = new Ninja("andres", 10, 50, 200);

const sensei = new Sensei("felipe", 200, 10,100 );




console.log(ninja1.sayName())
console.log(ninja1.showStatus())
console.log(ninja1.drinkSake())

console.log(sensei)

console.log(sensei.drinkSake())
console.log(sensei.speakWisdom())
