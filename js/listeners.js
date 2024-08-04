document.addEventListener("click", (e) => {
  if (e.target.id.includes("materia")) {
    // abre un pequenio moodal que permite cambiar el estado de la materia
    toggleEstados(e.target.id.replace("nombre-materia-",""))
    // renderiza la informacion de la materia
  } else if (e.target.id.includes("")) {
    //cierra modal
    // Limpia la info de la materia en el modal
  }
});
