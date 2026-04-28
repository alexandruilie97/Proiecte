let d = new Date();
let salut =d.getHours();
if(salut >= 5 && salut < 11){
    alert('Buna dimineata, vulturi!')
}
else if(salut >= 11 && salut < 19){
   alert('Buna ziua, vulturi!')
}

else if( salut >= 19 && salut < 24){
    alert('Buna seara, vulturi!')
}

else{
    alert('Noapte buna, vulturi!')
}