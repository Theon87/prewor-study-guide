//This is an array that stores all the elements
const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

/*This randomTopic variable allows the selectTopic() function to work without having to 
    enter each index manually - like topic[0]
*/
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

/*This is a function wrapped around a for loop
    The for loop selects each index in the array until all indicies are referenced
*/
function listTopics() {
    for (let x = 0; x < topics.length; x++) {
        console.log(topics[x])
    }    
}

//This is a function wrapped around an if...else if conditional
function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');

//A function will not execute unless it is called as it is in this line
listTopics();

console.log('Which topic should we study first?');
selectTopic();
