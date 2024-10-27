// Toggle Menu for Mobile View
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

const typed = new Typed('#typed-text', {
  strings: [
    "<span class='gradient1'>Porto</span>",
    "<span class='gradient2'>Developer</span>",
    "<span class='gradient3'>Gamer</span>"
  ],
  typeSpeed: 120,
  backSpeed: 120,
  backDelay: 300,
  loop: true,
  contentType: 'html' 
});

// Project Card Hover Effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });
});


// Services Heading Typing Effect
const servicesHeading = new Typed('#services-heading', {
  strings: ['Services', 'Skills'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// Education Card Hover Effect
const educationCards = document.querySelectorAll('.education-card');
educationCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    educationCards.forEach(c => {
      if (c !== card) {
        c.style.filter = 'blur(3px)';
        c.style.transform = 'scale(0.95)';
      }
    });
    card.style.filter = 'blur(0)';
    card.style.transform = 'scale(1.1)';
  });

  card.addEventListener('mouseout', () => {
    educationCards.forEach(c => {
      c.style.filter = 'blur(0)';
      c.style.transform = 'scale(1)';
    });
  });
});

// Copy Email Function
function copyToClipboard() {
  var emailText = document.getElementById("email").innerText;
  navigator.clipboard.writeText(emailText).then(function() {
    alert("Email address copied to clipboard!");
  }, function() {
    alert("Failed to copy email address.");
  });
}

document.querySelector('button').addEventListener('click', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
      alert('Please fill out all fields before submitting.');
  } else {
      alert(`Thanks, ${name}! Your message has been sent.`);
      window.location.href = 'thankyou.html';
  }
});

document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('click', function() {
      alert(`You are about to visit ${this.title}`);
  });
});



