const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const form = document.getElementById('myForm')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    if (password.value !== confirmPassword) {
        alert('Senhas não conferem')
    }
})