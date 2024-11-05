// function navigateTo(sectionId, element) {
//   const sections = document.querySelectorAll('.container');
//   sections.forEach(section => {
//       section.style.display = 'none';
//   });

//   const activeSection = document.getElementById(sectionId);
//   if (activeSection) {
//       activeSection.style.display = 'block';
//   }

//   const nav = document.querySelector('nav');
//   const animation = nav.querySelector('.animation');
//   const targetPosition = element.getBoundingClientRect();
//   const navPosition = nav.getBoundingClientRect();

//   animation.style.left = `${targetPosition.left - navPosition.left}px`;
//   animation.style.width = `${targetPosition.width}px`;
// }

emailjs.init("rAagqMof4QBT_39DR");

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_xmj8xqg', 'template_cg9u5nm', this)
            .then(function(response) {
                alert('Message sent successfully!');
                location.reload();
            }, function(error) {
                alert('Failed to send message.');
            });
    });
});

const buttons = document.querySelectorAll('.nav-button');
const containers = document.querySelectorAll('.content-container > div');

function showContainer(target) {
  containers.forEach(container => {
    container.classList.add('hidden');
  });
  
  const selectedContainer = document.querySelector(`.${target}`);
  if (selectedContainer) {
    selectedContainer.classList.remove('hidden');
  }

  buttons.forEach(button => {
    button.classList.remove('active');
  });

  const activeButton = Array.from(buttons).find(button => button.getAttribute('data-target') === target);
  if (activeButton) {
    activeButton.classList.add('active');
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    showContainer(target);
  });
});

showContainer('project-container');