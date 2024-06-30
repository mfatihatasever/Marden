// Chat functionality
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
    const message = chatInput.value;
    if (message.trim()) {
        const messageElem = document.createElement('p');
        messageElem.textContent = message;
        chatBox.appendChild(messageElem);
        chatInput.value = '';
    }
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const contactData = {
        name: name,
        email: email,
        message: message
    };

    console.log('Contact Form Submission:', contactData);
    alert('Thank you for your message!');

    // Here, you can handle storing the data in a backend or local storage
});


//For Blog Page 
document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message) {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        input.value = '';
    }
});
