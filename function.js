alert('Welcome to our world Soldier \n I hope you are ready to fight!');
var favChar = prompt('Soldier, Choose your Character Now \n Cpt. Price or Ghost');


var bestC = function () {
  while (favChar !== 'price' && favChar !== 'Price' && favChar !== 'Cpt.Price' && favChar !== 'cpt.price' && favChar !== 'Cpt.price' && favChar !== 'Ghost' && favChar !== 'ghost') {
    alert('Soldier, we are not Joking, Write the correct name');
  }
}
bestC();


var userChoice

function bestO (){
if (favChar === 'Price' || favChar === 'price' || favChar === 'Cpt. Price' || favChar === 'cpt. price' || favChar === ' Cpt. price') {
  userChoice = '<img src="https://monophy.com/media/JsnyhhjUkBWrDP2lUh/monophy.gif">';
} else if (favChar === 'Ghost' || favChar === 'ghost') {
  userChoice = '<img src="https://i.pinimg.com/originals/6b/a5/b1/6ba5b16b5373be94a54f831f5f078544.gif">';
}

var showImage = prompt('Soldier, write down a number to see your favorite character image in the page below');


for (var x = 0; x < showImage; x++) {
  document.write(userChoice);
}
}

bestO();

//done 