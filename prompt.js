const whiskers = {
    animal: "cat",
    age: "3",
    breed: "bengal",
    color: "golden",
    tail: "short",
    gender: "male",
    sound: function () {
      console.log("Meow");
    },
    play: function () {
      console.log("Oohh Yarn Toy!");
    },
  };

//   Prompt 1: Access the animal property of the object above and print its value to the console using dot notation.
whiskers.animal;

// Prompt 2: Access the age property of the object above and print its value to the console using dot notation.
whiskers.age;

// Prompt 3: Call the sound method property from object above and print to the console using dot notation.
whiskers.sound;

// Prompt 4: Access the breed property of the object above and print its value to the console using bracket notation.
whiskers["breed"];

// Prompt 5: Access the color property of the object above and print its value to the console using bracket notation.
whiskers["color"];

whiskers["play"];

// Prompt 7: Create a variable and store one of the properties from the object in the variable and print its value to the console using bracket notation.
x = whiskers["tail"];

// Prompt 8: Change the value of the color property to white using dot notation.
whiskers.color = "white";

// Prompt 9: Change the value of the gender property to female using bracket notation.
whiskers["gender"] = "female";

// Prompt 10: Add a property called size with a value of small using dot notation.
whiskers.size = "small"

// Prompt 11: Add a property called diet with a value of kitty mix using bracket notation.
whiskers["diet"] = "kitty mix"

// Classes Prompts

// Prompt 1: Create a class called Smartphone and add an empty constructor method to the Smartphone class.
class Smartphone {
    constructor() {  }
  }

// Prompt 2: Add the following parameters to the constructor method and set it equal to the parameters. OS, model, app market, company.
class Smartphone {
    constructor(OS, model, app_market, company) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
     }
  }

//   Prompt 3: Create 1 new instance named phone1 for the Smartphone class.
class Smartphone {
    constructor(OS, model, app_market, company) { 
        this.OS = OS;
        this.model = model;
        this.app_market = app_market;
        this.company = company;
     }
  }

  const phone1 = new Smartphone('ios, iphone 12, app store, apple')