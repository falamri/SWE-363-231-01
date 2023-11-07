
// BE_x-exercise_x

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function chatbot() {
  rl.question('You: ', (answer) => {
    const lowerAnswer = answer.toLowerCase();
    if (lowerAnswer === 'hi') {
      console.log('Chatbot: Hello! How can I help you today?');
    } 
    
    else if (lowerAnswer === 'hello') {
      console.log('Chatbot: Hi there! How can I assist you?');
    }

    else if (lowerAnswer === 'how are you') {
        console.log('Chatbot:  I\'m just a program, but I\'m doing fine. How can I help you?');
    }

    else if (lowerAnswer === 'what is your name') {
        console.log('Chatbot: You can call me chatbot. How can I assist you?');
    }
    
    else if (lowerAnswer === 'bye' || lowerAnswer === 'exit' || lowerAnswer === 'quit') {
      console.log('Chatbot: Goodbye! Have a great day!');
      rl.close();
    }
    
    else if (lowerAnswer.includes('+') || lowerAnswer.includes('-') || lowerAnswer.includes('*') || lowerAnswer.includes('/')) {
      const result = calculateMathExpression(lowerAnswer);
      if (result !== null) {
        console.log(`Chatbot: The result is ${result}`);
      } else {
        console.log('Chatbot: Sorry, I couldn\'t understand the math expression.');
      }
    }
    
    else {
      console.log('Chatbot: I\'m not sure how to help with that. Can you ask something else?');
    }

    chatbot();
  });
}

function calculateMathExpression(expression) {
  try {
    return eval(expression).toString();
  } catch (error) {
    return null;
  }
}

chatbot();

rl.on('close', () => {
  console.log('\nChatbot: Thank you for using our chatbot. Goodbye!');
  process.exit(0);
});
