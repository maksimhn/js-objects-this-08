'use strict';

////////////////////////////////////////////////////

//////////////////// MealTracker ////////////////////

////////////////////////////////////////////////////

var example_user, User, Meal;

/* Your Code Begins Here */
example_user = {
  name : "Pete",
  age : 25,
  calorieTarget : 2700,
  meals : [
    {title: "breakfast", date: "2015-06-21", description: "cereal with milk", calories: 240},
    {title: "lunch", date: "2015-06-22", description: "vodka and cucumbers", calories: 400},
    {title: "dinner", date: "2015-06-24", description: "bacon, lost of bacon", calories: 1000}
  ],
  caloriesEatenOn: function(date){
    var totalCalories = 0;
    for (var i = 0; i < this.meals.length; i++) {
      if (date === this.meals[i].date) {
        totalCalories += this.meals[i].calories;
      }
    }
    return totalCalories;
  },
  avgDailyCalories: function(){
    var days = {};
    for (var i = 0; i < this.meals.length; ++i) {
      if (days[this.meals[i].date] === undefined) {
        days[this.meals[i].date] = this.caloriesEatenOn(this.meals[i].date);
      }
    }

    // Iterate through dictionary
    var numDays = 0;
    var totalCalories = 0;
    for (var day in days) {
      totalCalories += days[day];
      numDays += 1;
    }
    return Math.floor(totalCalories/numDays);
  },
  onTrack: function(){
    return this.avgDailyCalories() < calorieTarget;
  }
};


var User = function (name, age, calorieTarget) {
  this.name = name;
  this.age = age;
  this.calorieTarget = calorieTarget;
  this.meals = [];

  this.caloriesEatenOn = function(date){
    var totalCalories = 0;
    for (var i = 0; i < this.meals.length; i++) {
      if (date === this.meals[i].date) {
        totalCalories += this.meals[i].calories;
      }
    }
    return totalCalories;
  };

  this.avgDailyCalories = function(){
    var days = {};
    for (var i = 0; i < this.meals.length; ++i) {
      if (days[this.meals[i].date] === undefined) {
        days[this.meals[i].date] = this.caloriesEatenOn(this.meals[i].date);
      }
    }
    // Iterate through dictionary
    var numDays = 0;
    var totalCalories = 0;
    for (var day in days) {
      totalCalories += days[day];
      numDays += 1;
    }
    return Math.floor(totalCalories/numDays);
  };

  this.onTrack = function(){
    return this.avgDailyCalories() < calorieTarget;
  };
};

var Meal = function (title, date, description, calories) {
  this.title = title;
  this.date = date;
  this.description = description;
  this.calories = calories;
};
/* Your Code Ends Here */


module.exports = {
  example_user : example_user,
  User : User,
  Meal : Meal
}
