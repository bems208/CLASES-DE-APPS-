// Cargar los usuarios guardados al cargar la página
window.onload = function() {
    loadUsers();
};

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Validar campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (username && password && email && phone) {
        // Crear un objeto de usuario
        const user = {
            username: username,
            email: email,
            phone: phone
        };

        // Guardar el usuario en LocalStorage
        saveUser(user);

        // Mostrar los datos ingresados
        document.getElementById('resultUsername').textContent = username;
        document.getElementById('resultEmail').textContent = email;
        document.getElementById('resultPhone').textContent = phone;

        // Ocultar el formulario y mostrar los resultados
        document.getElementById('registrationForm').classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');

        // Actualizar la lista de usuarios registrados
        loadUsers();
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

// Función para guardar usuario en LocalStorage
function saveUser(user) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

// Función para cargar los usuarios guardados y mostrarlos en la lista
function loadUsers() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Limpiar la lista

    users.forEach(user => {
        let li = document.createElement('li');
        li.textContent = `Usuario: ${user.username}, Correo: ${user.email}, Teléfono: ${user.phone}`;
        userList.appendChild(li);
    });
}
