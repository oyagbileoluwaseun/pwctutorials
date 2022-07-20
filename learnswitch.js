const color = 'red';
switch (color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
    case 'green':
        console.log('color is green')
        break;
    default:
        console.log("Color is not red, blue or green");
}

const result = 73;
switch (true) {
    case (result > 70 && result <= 100):
        console.log('Distinction')
        break;
    case (result > 60 && result <= 69):
        console.log('Very good')
        break;
    case (result > 50 && result <= 59):
        console.log('Credit')
        break;
    case (result > 40 && result <= 49):
        console.log('Pass')
        break;
    case (result > 0 && result <= 39):
        console.log('Failed')
        break;
    default:
        console.log("You did not write the test");
}


