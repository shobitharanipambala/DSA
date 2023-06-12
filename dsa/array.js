let activities = [
    ['Eat', 1],
    ['Play Game', 1],
    ['Sleep', 7],
  ];
  
  // Adding Activity
  export const addActivity = () => {
    activities.push(['Study', 2]);
  };
  
  // Removing a certain Activity
  export const removeActivity = () => {
    const index = activities.findIndex(activity => activity[0] === 'Play Game');
    if (index !== -1) {
      activities.splice(index, 1);
    }
  };
  
  // Percentage of hours spent on an Activity
  export const percentSpent = () => {
    const totalHours = activities.reduce((sum, activity) => sum + activity[1], 0);
    const sleepActivity = activities.find(activity => activity[0] === 'Sleep');
    const sleepHours = sleepActivity ? sleepActivity[1] : 0;
    const sleepPercentage = (sleepHours / totalHours) * 100;
    return `${sleepPercentage.toFixed(0)}%`;
  };
  
  // Add Percentage of hours column to the array
  // export const addPercentCol = () => {
  //     throw new Error('percentage Activity column is not implemented');
  // };
  
  console.log(activities); // Initial activities array

addActivity();
console.log(activities); // Updated activities array with the added activity

removeActivity();
console.log(activities); // Updated activities array with the removed activity

const sleepPercentage = percentSpent();
console.log(sleepPercentage); // Percentage of hours spent on sleeping
