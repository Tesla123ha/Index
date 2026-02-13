document.addEventListener('DOMContentLoaded', () => {
    const firstNameInput = document.getElementById('firstName');
    const form = document.getElementById('registrationForm');

    // Restrict First Name to letters only
    firstNameInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^A-Za-z\s]/g, '');
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = document.querySelector('.submit-btn');
        btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Registering...';
        
        setTimeout(() => {
            alert('Welcome to the community!');
            btn.innerHTML = 'Register';
            this.reset();
        }, 1500);
    });
});