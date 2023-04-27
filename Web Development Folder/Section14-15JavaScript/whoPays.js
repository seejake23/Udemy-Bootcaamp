var diners = ["Jake", "Chelle", "Rorey", "Jazz", "Connor", "Courtney"];

function whosPaying(diners) {
    var numberOfDiners = diners.length;
    var randomInt = Math.floor(Math.random() * numberOfDiners);
    var buyer = diners[randomInt];

    return buyer + " is buying dinner. Sorry!";
}