const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    message = document.getElementById('message');

const sendEmail = (e) => {
    e.preventDefault();

    if(
        contactName.value === '' || 
        contactEmail.value === '' ||
        contactSubject.value === '' ||
        contactMessage.value === ''
    ) {
        message.textContent = 'Completa todos los campos de entrada';
        message.classList.remove('color-first');
        message.classList.add('color-red');

        setTimeout(() => {
            message.textContent = ''
        }, 3000);
    } else {
      emailjs
        .sendForm(
            'service_bumodp3c', 
            'template_x4lca5q', 
            '#contact-form', 
            'd26lWqhngi9FlBHXG'
        )
        .then(
            () => {
                message.textContent = 'Mensaje enviado!';
                message.classList.add('color-first');

                setTimeout(() => {
                    message.textContent = ''
                }, 5000);
            },
            (error) => {
                alert('Algo salio mal...', error);
            }
        ); 

    contactName.value = '';
    contactEmail.value = '';
    contactSubject.value = '';
    contactMessage.value = '';
  }
};

contactForm.addEventListener('submit', sendEmail)