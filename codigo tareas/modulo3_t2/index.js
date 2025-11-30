// -------------------------------
// E2-M3 Gestor Interactivo de Tareas
// -------------------------------

function gestorTareas() {

  // 1. Crear arreglo vacío
  let listaDeTareas = [];

  // 2. Bucle interactivo para agregar tareas
  let continuar = true;

  while (continuar) {
    let tarea = prompt("Ingresa una tarea:");

    // Evitar tareas vacías
    while (!tarea || tarea.trim() === "") {
      alert("⚠️ La tarea no puede estar vacía.");
      tarea = prompt("Ingresa una tarea válida:");
    }

    listaDeTareas.push(tarea);
    continuar = confirm("¿Deseas agregar otra tarea?");
  }

  // 3. Mostrar la lista final
  console.log("\n--- Lista de Tareas Pendientes ---");

  listaDeTareas.forEach((tarea, index) => {
    console.log(`${index + 1}. ${tarea}`);
  });
}
