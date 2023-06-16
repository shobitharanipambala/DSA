/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

const searchBoxHandler = (searchTerm) => {
  let filteredItems = getFilteredItems(searchTerm, listItems);
  listItems.forEach((item) => {
    if (filteredItems.includes(item)) {
      filteredItems.push(item);
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
};

/**
 * A function that takes in a search term and an array of list items and returns an array of list items that match the search term
 * @param {*} searchTerm
 * @param {*} listItemsArray
 */
function getFilteredItems(searchTerm, listItemsArray) {
  const filteredItems = [];
  for (let i = 0; i < listItemsArray.length; i++) {
    if (listItemsArray[i].innerText === searchTerm) {
      filteredItems.push(listItemsArray[i]);
    }
  }
  return filteredItems;
}

    
    
  
  
  //declare an empty array to store the filtered items
  //loop through the listItemsArray
  //check if the item.innerText contains the searchTerm
  //if it does, push the item into the filteredItems array
  //return the filteredItems array
  //Tip: Make sure to convert the searchTerm and the item.innerText to lowercase before comparing


const getData = async () => {
  const res = await fetch('https://randomuser.me/api?results=50');
  const { results } = await res.json();
  result.innerHTML = '';
  results.forEach((user) => {
    const li = document.createElement('li');
    listItems.push(li);
    li.innerHTML = `
      <img
            src="${user.picture.large}"
            alt="${user.name.first}"
          />
      <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
      </div>
      `;
    result.appendChild(li);
  });
};

getData();

filter.addEventListener('input', (e) => searchBoxHandler(e.target.value));

module.exports = { getFilteredItems };
