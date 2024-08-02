document.addEventListener("click", (e) => {
  if (e.target.id.includes("materia")) {
    // abre moodal materia
    document.getElementById("modal").classList.toggle("hidden");
    document.getElementById("opacity").classList.toggle("hidden");
    renderInfo(carrera, e.target.id);
    renderSelectEstado(carrera, e.target.id);
    // renderiza la informacion de la materia
  } else if (e.target.id.includes("close")) {
    //cierra modal
    document.getElementById("modal").classList.toggle("hidden");
    document.getElementById("opacity").classList.toggle("hidden");

    // Limpia la info de la materia en el modal
  }
});

document.getElementById("estado").addEventListener("change", (e) => {
  let idx = document.getElementById("idxmateria").textContent;
  let id = document.getElementById("idmateria").textContent;
  console.log(`IDX: ${idx}`);
  console.log(`ID: ${id}`);
  switch (e.target.value) {
    case "pendiente":
      document.getElementById(`materia${id}`).style.backgroundColor = "grey";
      carrera.materias[idx].setEstado(Materia.ESTADO_PENDIENTE);

      break;
    case "curso":
      document.getElementById(`materia${id}`).style.backgroundColor = "orange";
      carrera.materias[idx].setEstado(Materia.ESTADO_CURSO);

      break;
    case "regular":
      document.getElementById(`materia${id}`).style.backgroundColor = "yellow";
      carrera.materias[idx].setEstado(Materia.ESTADO_REGULAR);

      break;
    case "aprobado":
      document.getElementById(`materia${id}`).style.backgroundColor = "green";
      carrera.materias[idx].setEstado(Materia.ESTADO_APROBADO);

      break;
    case "libre":
      document.getElementById(`materia${id}`).style.backgroundColor = "red";
      carrera.materias[idx].setEstado(Materia.ESTADO_LIBRE);

      break;
    default:
      alert("error");
      break;
  }
  carrera.saveMateriasToLocalStorage();
});

document
  .getElementById("selectAgregarCorrelativas")
  .addEventListener("change", () => {
    let idxMateria = document.getElementById("idxmateria").textContent;
    let select = document.getElementById("selectAgregarCorrelativas");
    let idCorrlelativa = select.options[select.selectedIndex].id.replace(
      "agregar",
      ""
    );

    alert(`IDXMATERIA: ${idxMateria}`);
    alert(`IDCORRELATIVA: ${idCorrlelativa}`);
    carrera.materias[idxMateria].addCorrelativa(
      carrera.materias,
      `${idCorrlelativa}`
    );
    renderCorrelativas(carrera);
    carrera.saveMateriasToLocalStorage();
  });

// document
//   .getElementById("eliminarCorrelativa")
//   .addEventListener("change", (e) => {});
