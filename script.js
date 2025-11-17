// Simple JavaScript for interactivity
function showWelcome() {
    alert('Welcome to our website! This site is deployed automatically with GitHub Actions.');
}

function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const messageDiv = document.getElementById('form-message');
    
    // Simulate form submission
    const name = formData.get('name');
    const email = formData.get('email');
    
    // Show success message
    messageDiv.textContent = `Thank you, ${name}! We have received your message and will contact you at ${email}.`;
    messageDiv.className = 'form-message success';
    
    // Reset form
    form.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Add fade-in animation to elements
    const animateElements = document.querySelectorAll('.feature-card, .content');
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Add click counter to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        let clicks = 0;
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            clicks++;
            const originalHTML = this.innerHTML;
            this.innerHTML = `<h3>Clicked ${clicks} times!</h3><p>Keep exploring!</p>`;
            
            setTimeout(() => {
                this.innerHTML = originalHTML;
            }, 1000);
        });
    });
});
