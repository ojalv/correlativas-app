function renderMaterias(carrera) {
  carrera.materias.forEach((materia) => {
    document.getElementById(`${materia.ID[0]}anual`).innerHTML = "";
    document.getElementById(`${materia.ID[0]}semestre2`).innerHTML = "";
    document.getElementById(`${materia.ID[0]}semestre1`).innerHTML = "";
  });

  carrera.materias.forEach((materia) => {
    const element = document.createElement("div"); //crea elemento div
    element.textContent = `${materia.nombre}`; //agrega el nombre de la materia como contenido
    element.id = `materia${materia.ID}`; //agrega el ID unico de la materia al id del elemento
    switch (materia.estado) {
      case Materia.ESTADO_APROBADO:
        element.style.backgroundColor = "green";
        break;

      case Materia.ESTADO_CURSO:
        element.style.backgroundColor = "orange";
        break;

      case Materia.ESTADO_LIBRE:
        element.style.backgroundColor = "red";
        break;

      case Materia.ESTADO_PENDIENTE:
        element.style.backgroundColor = "grey";
        break;
      case Materia.ESTADO_REGULAR:
        element.style.backgroundColor = "yellow";
        break;

      default:
        break;
    }
    element.classList.add("materia");
    if (materia.tipo === Materia.TIPO_ANUAL) {
      document.getElementById(`${materia.ID[0]}anual`).appendChild(element);
    } else if (materia.tipo === Materia.TIPO_SEMESTRAL) {
      if (materia.primerSemestre === true) {
        document
          .getElementById(`${materia.ID[0]}semestre1`)
          .appendChild(element);
      }
      if (materia.segundoSemestre === true) {
        document
          .getElementById(`${materia.ID[0]}semestre2`)
          .appendChild(element);
      }
    }
  });
}

function renderNiveles(carrera) {
  document.getElementById("roadmap").innerHTML = "";
  const niveles = "ABCDEFG";

  for (let i = 0; i < carrera.duracion; i++) {
    let element = document.createElement("div"); //crea elemento div
    let anual = document.createElement("div"); //contenedor de materias anuales
    let title = document.createElement("h2");
    let subtitle1 = document.createElement("h3");
    let subtitle2 = document.createElement("h3");
    let containerSubtitle = document.createElement("div");
    let container = document.createElement("div"); //contenedor de contenedores de materias semestrales
    let semestre1 = document.createElement("div"); //contenedor materias semestre 1
    let semestre2 = document.createElement("div"); //contenedor materias semestre 2

    title.textContent = `Nivel ${niveles[i]}`;

    subtitle1.textContent = "Semestre 1";
    subtitle2.textContent = "Semestre 2";
    containerSubtitle.classList.add("row");
    containerSubtitle.appendChild(subtitle1);
    containerSubtitle.appendChild(subtitle2);

    anual.id = `${niveles[i]}anual`;
    anual.classList.add("anuales");

    semestre1.classList.add("semestre");
    semestre2.classList.add("semestre");
    semestre1.id = `${niveles[i]}semestre1`;
    semestre2.id = `${niveles[i]}semestre2`;

    container.appendChild(semestre1);
    container.appendChild(semestre2);
    container.classList.add("semestres");

    element.id = `lvl${niveles[i]}`;
    element.classList.add("lvl");
    element.appendChild(title);
    element.appendChild(containerSubtitle);
    element.appendChild(anual);
    element.appendChild(container);

    document.getElementById("roadmap").appendChild(element); //agrega el elemento como hijo de #roadmap
  }
}

function renderInfo(carrera, idMateria) {
  //busqueda
  idx = carrera.materias.findIndex((materia) => {
    return `materia${materia.ID}` === idMateria;
  });
  document.getElementById(
    "info"
  ).innerHTML = `<h4>Info</h4><span class="hidden" id="idmateria">${idMateria.replace(
    "materia",
    ""
  )}</span><span class="hidden" id="idxmateria">${idx}</span>`;
  //nombre de la materia
  let nombre = document.createElement("div");
  nombre.textContent = carrera.materias[idx].nombre;

  //tipo de materia
  let tipo = document.createElement("div");
  if (carrera.materias[idx].tipo === Materia.TIPO_ANUAL) {
    tipo.textContent = "Modalidad: Anual";
  } else if (carrera.materias[idx].tipo === Materia.TIPO_SEMESTRAL) {
    tipo.textContent = "Modalidad: semestral";
    if (carrera.materias[idx].primerSemestre === true) {
      let s1 = document.createElement("div");
      s1.textContent = "se cursa el primer semestre";
      tipo.appendChild(s1);
    }
    if (carrera.materias[idx].segundoSemestre === true) {
      let s1 = document.createElement("div");
      s1.textContent = "se cursa el segundo semestre";
      tipo.appendChild(s1);
    }
  }

  document.getElementById("info").appendChild(nombre);
  document.getElementById("info").appendChild(tipo);
}
function renderSelectEstado(carrera) {
  //selecciona el estado actual de la materia
  document.getElementById("estado").selectedIndex =
    carrera.materias[idx].estado;
}