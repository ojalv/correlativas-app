function renderMaterias(materias) {
  materias.forEach((materia) => {
    document.getElementById(`${materia.ID[0]}anual`).innerHTML = "";
    document.getElementById(`${materia.ID[0]}semestre2`).innerHTML = "";
    document.getElementById(`${materia.ID[0]}semestre1`).innerHTML = "";
  });

  materias.forEach((materia) => {
    const element = document.createElement("div"); //crea elemento div
    element.id = `materia${materia.ID}`; //agrega el ID unico de la materia al id del elemento
    element.innerHTML = `<div class="estados hidden" id="estados${materia.ID}">
    <div class="estado pendiente" id="estado-option-0${materia.ID}"></div>
    <div class="estado curso" id="estado-option-1${materia.ID}"></div>
    <div class="estado regular" id="estado-option-2${materia.ID}"></div>
    <div class="estado aprobado" id="estado-option-3${materia.ID}"></div>
    <div class="estado libre" id="estado-option-4${materia.ID}"></div>
    </div><p class="nombre" id="nombre-materia-${materia.ID}">${materia.nombre}</p>`; //agrega el nombre de la materia como contenido
    switch (parseInt(materia.estado)) {
      case Materia.ESTADO_APROBADO:
        element.style.backgroundColor = "var(--ESTADO_APROBADO)";
        break;

      case Materia.ESTADO_CURSO:
        element.style.backgroundColor = "var(--ESTADO_CURSO)";
        break;

      case Materia.ESTADO_LIBRE:
        element.style.backgroundColor = "var(--ESTADO_LIBRE)";
        break;

      case Materia.ESTADO_PENDIENTE:
        element.style.backgroundColor = "var(--ESTADO_PENDIENTE)";
        break;
      case Materia.ESTADO_REGULAR:
        element.style.backgroundColor = "var(--ESTADO_REGULAR)";
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

function toggleEstados(idMateria) {
  document.getElementById(`estados${idMateria}`).classList.toggle("hidden");
}

function closeAllEstados(materias) {
  materias.forEach((m) => {
    document.getElementById(`estados${m.ID}`).classList.add("hidden");
  });
}
function cambiarEstadoMateria(idOption, materias) {
  const estado = idOption.replace("estado-option-", "")[0];
  const idMateria = idOption.replace(`estado-option-${estado}`, "");
  materias.forEach((materia) => {
    if (materia.ID === idMateria) {
      materia.estado = estado;
    }
  });
}
