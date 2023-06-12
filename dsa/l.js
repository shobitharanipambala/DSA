//
// This is only a SKELETON file for the 'Hello World' exercise. 
// It's been provided as a convenience to get you started writing code faster.
//

// Store the user object in the below variable
let user;

// User database to store all the Users
const database = [];

// NewsFeed to store all the latest Posts
const newsfeed = [];

// Creating User Object
function createUser (name, username, password){
  user = {
    name: name,
    username: username,
    password: password,
  };
  return user;
};

// Greeting user with a 'Hello'
function greetUser (user){
  return `Hello ${user.username}`;
};

// Adding users to User Database
function addToUserDatabase  (user, userDatabase){
  userDatabase.push(user);
  return database;
};

// Creating Post Object
function createPost  (username, timeline){
  const post = {
    username: username,
    timeline: timeline,
  };
  return post;
};

// Adding posts to NewsFeed
function addNewsFeed  (post, newsfeed){
  newsfeed.push(post);
  return newsfeed;
};

addToUserDatabase(user, database);
console.log(database);
// Output: [ { name: 'hashinsert', username: 'hash22', password: '2022' } ]

// Creating a post object
const postUsername = prompt("Enter your username:");
const timeline = prompt("Enter your timeline:");
const post = createPost(postUsername, timeline);

console.log(post);
// Output: { username: 'hash22', timeline: 'Democratizing Education' }

// Adding the post to the newsfeed
addNewsFeed(post, newsfeed);
console.log(newsfeed);