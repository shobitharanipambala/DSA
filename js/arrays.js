//
//In this excercise, you will start logging your daily activities in a multi-dimensional Array
//
// This is only a STARTER FILE for the exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let activities = [
    ['Eat', 1],
    ['Play Game', 1],
    ['Sleep', 7],
  ];
  
  // Adding Activity
   const addActivity = () => {
    activities.push(['Study', 2]);
    return activities;
   
  };
  
  // Removing a certain Activity
 const removeActivity = () => {
    const index = activities.findIndex(activity => activity[0] === 'Play Game');
      if (index !== -1) {
        activities.splice(index, 1);
      }
    return activities;
    throw new Error('removing an activity is not implemented');
  };
  
  // Percentage of hours spent on an Activity
 const percentSpent = () => {
    
    const totalHours = activities.reduce((sum, activity) => sum + activity[1], 0);
    const sleepActivity = activities.find(activity => activity[0] === 'Sleep');
    const sleepHours = sleepActivity ? sleepActivity[1] : 0;
    const sleepPercentage = (sleepHours / totalHours) * 100;
    return `${sleepPercentage.toFixed(0)}%`;
    console.log(sleepPercentage);
 }

    
                                     
  
 