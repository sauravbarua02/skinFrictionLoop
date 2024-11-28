const containerEl = document.getElementById("container");
const skinFrictions = [20, 25, 30, 26];

let frictionCapacity = 0;

function calculation(){
    for (let skinFriction of skinFrictions)
        frictionCapacity += skinFriction;
    return frictionCapacity;
}

function display(){
    containerEl.innerText = "Total friction capacity of the pile:" + calculation() +" kN";
}

display();



