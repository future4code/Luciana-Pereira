function exe2a () {
    const animal = confirm("E um animal?");
    if(animal){
        const temPelo = confirm("Tem pelo?");
        if (temPelo){
            const late = confirm ("Late?");
            if (late){
                console.log ("E um cachorro");
            } else {
                console.log("E um gato");
            }
        } else {
            const voa = confirm ("Voa ?");
            if (voa) {
                console.log("E um passaro");
            } else {
                console.log ("E um peixe");
            }
        }
    } else {
        console.log("E uma pedra");
    }
} exe2a ()

function exe2b () {
    const animal = confirm ("E um animal?");
    if (animal) {
        const temPelo = confirm ("Tem pelo?");
        if (temPelo) {
            const late = confirm ("Late?");
            if (late){
                console.log("E um cachorro");
            } else {
                const roedor = confirm("E roedor?");
                if (roedor){
                    console.log("E um rato");
                } else {
                    console.log("E um gato");
                }
            }
        } else {
            const voa = confirm("voa?");
            if (voa) {
                console.log("E um passaro");
            } else {
                const ehDoMar = confirm("E do mar?");
                if (ehDoMar) {
                    console.log("E um peixe");
                } else {
                    console.log("E um sapo");
                }
            }
        }
    } else {
        const serVivo = confirm("E um ser vivo?");
        if (serVivo){
            console.log("E uma planta");
        } else {
            console.log("E uma pedra");
        }
    }
} exe2b ()