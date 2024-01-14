elements.knife = {
    color: "#adb5bd",
    // other needed properties
    tool: (pixel) => {
        //store cutInto as a variable for legibility
        var cutInto = elements[pixel.element].cutInto;
        //if there’s no cutInto, it should equal undefined, which is falsey and !undefined = true
        if (!cutInto) { return };
        //if cutInto is an array, randomly pick one of its elements
        if(cutInto instanceof Array) { cutInto = cutInto[Math.floor(Math.random() * cutInto.length)] };
        //change pixel into the (chosen) element      
        changePixel(pixel, cutInto)
    },
    category:"tools",
};

elements.cooking_oil = {
    color: "#ffc844",
    behavior: behaviors.LIQUID,
    category: "liquids",
    tempHigh: 400,
    stateHigh: "fire",
    burn: 70,
    burnTime: 300,
    burnInto: ["carbon_dioxide","fire"],
    viscosity: 250,
    state: "liquid",
    density: 825,
    hidden: true,
    temp: 30,
    reactions: {
        "peeled_potato": {elem2: "fried_potato", tempMin: 70}
    }
};

elements.potato.cutInto = ["potato_skin","peeled_potato"];

elements.potato_skin = {
    color: ["#DC8A5A", "#A86C36", "#DC9A59", "#A76B35"],
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    isFood: true,
    temp: 20,
    hidden: true,
    tempHigh: 250,
    stateHigh: ["ash", "smoke"]
};

elements.peeled_potato = {
    color: ["#D6C39F", "#D1C09D", "#D1C09D", "#CDBF9E"],
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "solid",
    isFood: true,
    temp: 20,
    hidden: true,
    reactions: {
        "cooking_oil": { elem1: "fried_potato", tempMin: 70 }
    }
};

elements.fried_potato = {
    color: ["#DD7908", "#D57206", "#CA6801", "#D68001"],
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "solid",
    temp: 35,
    hidden: true,
    tempHigh: 600,
    stateHigh: ["ash", "smoke"],
    isFood: true
}