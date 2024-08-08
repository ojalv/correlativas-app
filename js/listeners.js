document.addEventListener("click", (e) => {
  closeAllEstados(materias);
  if (e.target.id.includes("materia")) {
    // abre un pequenio moodal que permite cambiar el estado de la materia
    toggleEstados(e.target.id.replace("nombre-materia-", ""));
    // renderiza la informacion de la materia
  } else if (e.target.id.includes("estado-option-")) {
    // cambia el estado de la materia
    cambiarEstadoMateria(e.target.id, carrera.materias);
    // renderiza la ui
    renderMaterias(carrera.materias);
  }
});
