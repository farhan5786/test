// Get DOM elements
const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');
const messagesContainer = document.getElementById('messages-container');
const popupWarning = document.getElementById('popup-warning');
const closePopupButton = document.getElementById('close-popup');

// List of inappropriate words/phrases
const inappropriateWords = ['marani', 'sex', 'fuck', 'bitch', 'asshole', 'shit', 'damn', 'fucking', 'fucker', 'choda', 'khanki', 'শুয়োরের বাচ্চা', 'হারামি', 'কুত্তার বাচ্চা', 'ধুর মাগী', 'মাদারচোদ', 'বাঞ্চোত', 'গাধা', 'খানকির পোলা', 'হারামজাদা', 'ভাতার', 'চুতমারানি', 'বেয়াদব'];
// Function to send a user message and bot response
function sendMessage() {
  const messageText = userInput.value.trim();

  if (messageText) {
    // Check for inappropriate content
    if (containsInappropriateContent(messageText)) {
      // Show warning popup and clear input
      showPopupWarning();
      userInput.value = '';  // Clear input field
      return; // Do not proceed with sending the message
    }

    // User message
    const userMessage = createMessage(messageText, 'user');
    messagesContainer.appendChild(userMessage);
    userInput.value = '';  // Clear input field

    // Scroll to the bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Bot response after a small delay
    setTimeout(() => {
      const botMessage = createMessage(generateBotResponse(messageText), 'bot');
      messagesContainer.appendChild(botMessage);

      // Scroll to the bottom
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
  }
}

// Function to create a message element
function createMessage(text, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);

  const messageContent = document.createElement('div');
  messageContent.classList.add('message-content');

  const avatar = document.createElement('img');
  avatar.src = sender === 'user' ? 'user.png' : 'chatbot.png';
  avatar.alt = sender === 'user' ? 'User Avatar' : 'Bot Avatar';

  const messageText = document.createElement('p');
  messageText.textContent = text;

  messageContent.appendChild(avatar);
  messageContent.appendChild(messageText);

  messageElement.appendChild(messageContent);

  return messageElement;
}

// Function to generate bot's response
function generateBotResponse(userInput) {
  const lowercasedInput = userInput.toLowerCase();

  // Sample responses
    const responses = {
    greeting: [
      "Hey there! How can I assist you today?",
      "Hello! What’s on your mind?",
      "Hi! How can I help you?",
      "Hello! How’s it going?",
    ],
    howAreYou: [
      "I'm just a bot, but I'm here and ready to chat! How about you?",
      "I'm doing great, thanks for asking! How can I assist you?",
      "I'm here to help you with whatever you need! How can I assist?",
    ],
    bye: [
      "Goodbye! Hope to chat with you again soon!",
      "Take care! If you need me, I’ll be here.",
      "Bye! Have a great day!",
    ],
    unknown: [
      "I'm sorry, I didn’t catch that. Could you say it another way?",
      "Could you clarify that? I’m here to help!",
      "I’m not sure I understand, but I’d love to try and help!",
    ],
  };

  // Determine response category based on keywords
  if (lowercasedInput.includes("hello") || lowercasedInput.includes("hi")) {
    return getRandomResponse(responses.greeting);
  } else if (lowercasedInput.includes("how are you")) {
    return getRandomResponse(responses.howAreYou);
  } else if (lowercasedInput.includes("bye")) {
    return getRandomResponse(responses.bye);
  } else {
    return getRandomResponse(responses.unknown);
  }
}

// Helper function to randomly select a response
function getRandomResponse(responseArray) {
  const randomIndex = Math.floor(Math.random() * responseArray.length);
  return responseArray[randomIndex];
}

// Function to check for inappropriate content
function containsInappropriateContent(input) {
  const lowercasedInput = input.toLowerCase();

  // Check if any inappropriate word is exactly present in the input
  return inappropriateWords.some(word => lowercasedInput.split(' ').includes(word));
}

// Function to show the custom warning popup
function showPopupWarning() {
  popupWarning.style.display = 'flex';
}

// Function to hide the custom warning popup
function hidePopupWarning() {
  popupWarning.style.display = 'none';
}

// Event listener to close the popup
closePopupButton.addEventListener('click', hidePopupWarning);

// Event listener for send button
sendButton.addEventListener('click', sendMessage);

// Optional: Allow pressing "Enter" to send message
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
