function initialize() {
    list = document.getElementById("list");
    foodSelection = document.getElementById("foodsel");
    foodList = ["Eggs", "Milk", "Bread", "Salmon", "Butter"];
    display();
}

function addFood() {
    if (!foodList.includes(foodSelection.value)) {
        foodList.push(foodSelection.value);
        display();
    }
}

function deleteFood() {
    if (foodList.includes(foodSelection.value)) {
        for (let i = 0; i < foodList.length; i++)
            if (foodSelection.value === foodList[i])
                foodList.splice(i, 1);
        display();
    }
}

function array_moveUp(num) {
    let oldLoc = parseInt(foodSelection.value);
    let newLoc = oldLoc + parseInt(num);
    if (newLoc < 0) {
        return;
    }
    if (newLoc > foodList.length - 1) {
        newLoc--;
        return;
    }
    foodList.splice(newLoc, 0, foodList.splice(oldLoc, 1)[0]);
    foodSelection.value = newLoc;
    display();
}

function display() {
    list.innerHTML = "0: " + foodList[0];
    for (let i = 1; i < foodList.length; i++) 
        list.innerHTML += "<br />" + i + ": " + foodList[i];
}