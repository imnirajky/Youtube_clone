// Array of user names
const users = ["Niraj", "Aman", "Arman", "Saurav", "Kisalay"];

// Array of messages
const messages = [
    "Hello, how are you?",
    "Great!",
    "Best content",
    "Have a nice day!",
    "Liked the video!!!!",
];

// Function to generate a random message
export function generateRandomMessage() {
    // Randomly select a user and a message
    const User = users[Math.floor(Math.random() * users.length)];
    const Message = messages[Math.floor(Math.random() * messages.length)];

    // Combine the user and message
    const randomChatMessage = { User, Message };

    return randomChatMessage;
}