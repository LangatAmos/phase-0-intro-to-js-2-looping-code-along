// let name = ["Amos", "Bianca", "Cassie"];
// let messages = [];

// function writeCards([name], event){
//     for (let i = 0; i > name.length; i+=1) {
//         messages.push (`Thank you ${name[0]} for the wonderful  ${event} gift!`);
//     }
//     return messages;
// }
const names = ["Amos", "Bianca", "Cassie"];
 function writeCards(names, event) {   let messages = [];
  names.forEach((name,) =>
{
messages.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
  });
  return messages;
}  console.log(writeCards(names));


// you write comments in JavaScript with two forward slashes
// i is the integer parameter of your countdown function
// i is passed to countdown when called, i.e. countdown(9)
function countdown(i)    
{
    let number = "";   

    while( i >= 0)
    {    
        number += i;
        if(i > 0) {
            console.log(number); 
        }
        i--;
    }
    return number;
}
let result = countdown(10);  


console.log(result);

function countDown(i) {
  while (i >= 0) {
      console.log(i);
      i--;
  }
}
countDown(10);