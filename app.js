let dishes = [
        "biryani",
    "plao",
    "kerhai",
    "daal chawal",
    "tikka",
    "pizza"];
dishes.splice(2, 0, "zinger burger", "broast")
// let newDishes = dishes.slice(2,5);
// console.log(newDishes);
let userDish = prompt("ap kia khana khahen ge");
let dishmile = false;

for (i = 0; i < dishes.length; i++) {
    if (userDish == dishes[i]) {
        alert(`user ko ${userDish} deliever kar na he jo ke counter number ${i} per he`);
        dishmile = true;
        break;
    }
}

if (!dishmile) {
    for (let j = 1; j <= 2 ; j++) {
        alert("ustaad " + userDish + " hamare pass nahi he");
        userDish = prompt("ap ne jo dish batai he wo hamare pass nahi he agina dish den");

        for (k = 0; k < dishes.length; k++) {
            if (userDish == dishes[k]) {
                alert(`user ko ${userDish} deliever kar na he jo ke counter number ${k} per he`);
                dishmile = true;
                break;
            }
        }
        if (dishmile) {
            break;
        }
    }
    if (dishmile) {
        alert("ustaad " + userDish + " ki dish deliver kar di he");
    }
    else{
        alert("sorry ap ko 3 baar moka dia jo ke apne zaya kar dia");
    }

}
else {
    alert("ustaad " + userDish + " ki dish deliver kar di he");
}




