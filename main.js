
// BE_x-exercise_x

const customEmitter = require('./customEmitter');

function generateRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function simulateUserLogin(userId) {
  console.log(`TIMESTAMP: USER_${userId} logged in`);
  customEmitter.emit('userLoggedIn', userId);
}

function simulateUserLogout(userId) {
  customEmitter.emit('userLoggedOut', userId);
}

customEmitter.on('userLoggedIn', (userId) => {
  console.log(`User ${userId} has logged in.`);
});

customEmitter.on('userLoggedOut', (userId) => {
  console.log(`User ${userId} has logged out.`);
});

function runSimulation() {
  const userId = Math.floor(generateRandomNumber(1, 999)); // Simulate user ID

  setTimeout(() => {
    simulateUserLogin(userId);

    setTimeout(() => {
      simulateUserLogout(userId);

      // Continue simulating user login/logout
      runSimulation();
    }, 1000); // Simulate user logging out after 1 second
  }, generateRandomNumber(100, 2000)); // Simulate user logging in between 0.1 to 2 seconds
}

console.log('Simulating user login and logout events...');
runSimulation();
