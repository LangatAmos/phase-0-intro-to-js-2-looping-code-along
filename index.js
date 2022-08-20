const names = ["Amos", "Bianca", "Cassie"];

function writeCards(names, event) {   
  let messages = [];
  names.forEach((name,) =>
{
messages.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
  });
  return messages;
}  
console.log(writeCards(names));


function countDown(i) {
  while (i >= 0) {
      console.log(i);
      i--;
  }
}
countDown(10);