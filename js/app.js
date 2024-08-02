// Lista de materias adaptada para el nuevo código
let materias = [
  new Materia(
    "A0",
    "bases de datos",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    true
  ),
  new Materia(
    "A1",
    "introduccion a la programacion",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    true
  ),
  new Materia(
    "A2",
    "proyecto integrador 1",
    Materia.TIPO_ANUAL,
    Materia.ESTADO_PENDIENTE
  ),
  new Materia(
    "A3",
    "ejercicio profesional",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    true
  ),
  new Materia(
    "A4",
    "etica y deontologia profesional",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    true
  ),
  new Materia("A5", "ingles 1", Materia.TIPO_ANUAL, Materia.ESTADO_PENDIENTE),
  new Materia(
    "A6",
    "programacion web 1",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    null,
    true
  ),
  new Materia(
    "A7",
    "programacion 1",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    null,
    true
  ),
  new Materia(
    "A8",
    "sistema de gestion de contenidos",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    null,
    true
  ),

  new Materia(
    "B0",
    "proyecto integrador 2",
    Materia.TIPO_ANUAL,
    Materia.ESTADO_PENDIENTE
  ),
  new Materia(
    "B1",
    "programacion web 2",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    true
  ),
  new Materia(
    "B2",
    "desarrollo de software",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    true
  ),
  new Materia(
    "B3",
    "programacion 2",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    true
  ),
  new Materia("B4", "ingles 2", Materia.TIPO_ANUAL, Materia.ESTADO_PENDIENTE),
  new Materia(
    "B5",
    "aplicaciones para moviles",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    null,
    true
  ),
  new Materia(
    "B6",
    "ciberseguridad",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    null,
    true
  ),
  new Materia(
    "B7",
    "testeador de software",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    null,
    true
  ),

  new Materia(
    "C0",
    "tecnologia y desarrollo",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    true
  ),
  new Materia(
    "C1",
    "practica profesionalizante",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    true
  ),
  new Materia(
    "C2",
    "emprendedurismo",
    Materia.TIPO_SEMESTRAL,
    Materia.ESTADO_PENDIENTE,
    true
  ),
];

const carrera = new Carrera(
  "Tecnicatura superior en desarrollo web y aplicaciones digitales"
);
// carrera.saveMateriasToLocalStorage();

carrera.loadMateriasFromLocalStorage();
renderNiveles(carrera);
renderMaterias(carrera);
