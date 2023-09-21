import inquirer from 'inquirer';
import chalk from 'chalk';

// Define the Adventurer's character statistics
const adventurer = {
  name: "",
  location: "Area 51, Bermuda Triangle, The Pyramids of Giza",
  health: 100,     // Starting health
  stamina: 100,    // Starting stamina
  experience: 0,   // Starting experience points
};

console.log(chalk.bgGreenBright("Welcome To My Adventurous Game"));

// The Main Game Function
const adventurerGame = async () => {
  console.log(`You find yourself in ${adventurer.location}.`);

  const ticketResponse = await inquirer.prompt([
    {
      name: "userTicket",
      type: "list",
      message: "Which Ticket You Will Want",
      choices: ["Standered", "Essential", "Premium"]
    },
  ]);

  const selectedTicket = ticketResponse.userTicket; // Store the selected ticket in a variable

  const userName = await inquirer.prompt([
    {
      type: "input",
      name: "UserInput",
      message: "Enter Your Name",
    },
  ]);
  adventurer.name = userName.UserInput;

  const yourLocations = await inquirer.prompt([
    {
      type: "list",
      name: "Locations",
      message: "Where You Go To Explore The Unknown World?",
      choices: [
        "Explore Area 51", // All Locations
        "Explore Bermuda Triangle",
        "Explore The Pyramids of Giza",
        "Go To Home",
        "Go And Quit Game",
      ],
    },
  ]);

  switch (yourLocations.Locations) {
    case "Explore Area 51":
      console.log("You are starting to explore Area 51.");
      // Decrease stamina when exploring
      adventurer.stamina -= 10;
      break;

    case "Explore Bermuda Triangle":
      console.log("You are starting to explore Bermuda Triangle.");
      // Decrease health when exploring
      adventurer.health -= 20;
      break;

    case "Explore The Pyramids Of Giza":
      console.log("You are starting to explore The Pyramids Of Giza.");
      // Gain experience when exploring
      adventurer.experience += 30;
      break;

    case "Quit The Game":
      console.log("Thanks For Playing This Amazing Game");
      process.exit(0);
  }

  // Display character statistics and the selected ticket after each action
  console.log(`Selected Ticket: ${selectedTicket}`);
  console.log(`Character Stats - Health: ${adventurer.health}, Stamina: ${adventurer.stamina}, Experience: ${adventurer.experience}`);
};

adventurerGame();
