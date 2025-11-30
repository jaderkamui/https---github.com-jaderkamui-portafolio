// ------------------------
// Pedir NOMBRE
// ------------------------
let nombre = prompt("Ingrese su nombre completo:");

while (!nombre || nombre.trim() === "") {
  alert("❌ El nombre no puede estar vacío.");
  nombre = prompt("Ingrese su nombre completo:");
}

// ------------------------
// Pedir EMAIL
// ------------------------
let email = prompt("Ingrese su correo electrónico:");

while (
  !email || 
  email.trim() === "" || 
  !email.includes("@") || 
  !email.includes(".")
) {
  alert("❌ Correo inválido. Debe contener '@' y un dominio como .com o .cl");
  email = prompt("Ingrese su correo electrónico:");
}

// ------------------------
// Pedir CONTRASEÑA
// ------------------------
let password = prompt("Ingrese una contraseña de 8 caracteres:");

while (!password || password.length !== 8) {
  alert("❌ La contraseña debe tener EXACTAMENTE 8 caracteres.");
  password = prompt("Ingrese una contraseña de 8 caracteres:");
}

// ------------------------
// Si todo está correcto
// ------------------------
console.log(`✅ Registro exitoso. ¡Bienvenido a la Consola, ${nombre}!`);
console.log(`📧 Correo registrado: ${email}`)
console.log(`🔒 Contraseña guardada, corresponde a 8 digitos: ${"*".repeat(password.length)}
`);
