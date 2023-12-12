function validateAndRegister() {
    var form = document.getElementById('registrationForm');
    var name = form.elements['name'].value;
    var email = form.elements['email'].value;
    var password = form.elements['password'].value;
    var confirmPassword = form.elements['confirmPassword'].value;
    var dob = form.elements['dob'].value;

    // Валидация данных
    if (!name || !email || !password || !confirmPassword || !dob) {
        alert('Please fill in all required fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Password mismatch.');
        return;
    }

    // Дополнительная логика для отправки данных на сервер или их обработки
    console.log('Register:', { name, email, password, dob });
}

function registerWithGoogle() {
    // Дополнительная логика для регистрации через Google
    console.log('Register With Google');
}

function registerWithGitHub() {
    // Дополнительная логика для регистрации через GitHub
    console.log('Register Wit GitHub');
}
