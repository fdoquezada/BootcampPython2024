// Definimos los clientes registrados
const clients = [
  {
    name: 'Juan Pérez',
    id: '12345678',
    password: 'abc123',
    balance: 1000
  },
  {
    name: 'María González',
    id: '87654321',
    password: 'def456',
    balance: 2500
  },
  {
    name: 'Carlos Rodríguez',
    id: '45678912',
    password: 'ghi789',
    balance: 800
  }
];

// Función para validar la identidad del usuario
function validateUser() {
  const id = prompt('Ingrese su identificador:');
  const password = prompt('Ingrese su contraseña:');

  const user = clients.find(client => client.id === id && client.password === password);
  if (user) {
    console.log(`Bienvenido, ${user.name}!`);
    return user;
  } else {
    console.log('Identificador o contraseña incorrectos. Intente nuevamente.');
    return null;
  }
}

// Función para mostrar el menú de opciones
function showMenu(user) {
  let option;
  do {
    option = prompt(`
      Menú:
      1. Ver saldo
      2. Realizar giro
      3. Realizar depósito
      4. Salir
    `);

    switch (option) {
      case '1':
        console.log(`Su saldo actual es: $${user.balance}`);
        break;
      case '2':
        withdrawMoney(user);
        break;
      case '3':
        depositMoney(user);
        break;
      case '4':
        console.log('Saliendo del menú...');
        break;
      default:
        console.log('Opción inválida. Intente nuevamente.');
    }
  } while (option !== '4');
}

// Función para realizar un giro
function withdrawMoney(user) {
  const amount = parseFloat(prompt(`Su saldo actual es: $${user.balance}. ¿Cuánto desea girar?`));
  if (isNaN(amount) || amount <= 0) {
    console.log('Ingrese un monto válido.');
  } else if (amount > user.balance) {
    console.log('No puede girar una cantidad mayor a su saldo actual.');
  } else {
    user.balance -= amount;
    console.log(`Ha girado $${amount}. Su nuevo saldo es: $${user.balance}`);
  }
}
// Función para realizar un depósito
function depositMoney(user) {
  const amount = parseFloat(prompt(`Su saldo actual es: $${user.balance}. ¿Cuánto desea depositar?`));
  user.balance += amount;
  console.log(`Ha depositado $${amount}. Su nuevo saldo es: $${user.balance}`);
}

// Ejecución del programa
const user = validateUser();
if (user) {
  showMenu(user);
}