// Get modal elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');

// Get all view-details links
const viewDetailsLinks = document.querySelectorAll('.view-details');

// Function to open modal
function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to close modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event listeners for view-details links
viewDetailsLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const imageSrc = this.getAttribute('data-image');
        openModal(imageSrc);
    });
});

// Event listener for close button
closeBtn.addEventListener('click', closeModal);

// Event listener to close modal when clicking outside the modal content
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Event listener for ESC key to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// WhatsApp contact form
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const number = '5527998282603';
    const whatsappMessage = `Olá, meu nome é ${name}. Meu email é ${email}. ${message}`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, '_blank');

    contactForm.reset();
});