class Carrera {
  constructor(nombre, materias = [], duracion = 3) {
    this.nombre = nombre;
    this.materias = materias;
    this.duracion = duracion;
  }
  //getters
  getNombre() {
    return this.nombre;
  }
  getMaterias() {
    return this.materias;
  }

  getMateriasPendientes() {
    let pendientes = [];
    this.materias.forEach((materia) => {
      if (materia.estado === Materia.ESTADO_PENDIENTE) {
        pendientes.push(materia);
      }
    });
    return pendientes;
  }

  getMateriasCursando() {
    let cursando = [];
    this.materias.forEach((materia) => {
      if (materia.estado === Materia.ESTADO_CURSO) {
        cursando.push(materia);
      }
    });
    return cursando;
  }

  getMateriasRegulares() {
    let regulares = [];
    this.materias.forEach((materia) => {
      if (materia.estado === Materia.ESTADO_REGULAR) {
        regulares.push(materia);
      }
    });
    return regulares;
  }

  getMateriasAprobadas() {
    let aprobadas = [];
    this.materias.forEach((materia) => {
      if (materia.estado === Materia.ESTADO_APROBADO) {
        aprobadas.push(materia);
      }
    });
    return aprobadas;
  }

  getMateriasLibres() {
    let libres = [];
    this.materias.forEach((materia) => {
      if (materia.estado === Materia.ESTADO_LIBRE) {
        libres.push(materia);
      }
    });
    return libres;
  }
  //setters
  setNombre(nombre) {
    this.nombre = nombre;
  }

  addMateria(
    nivel,
    nombre,
    tipo,
    primerSemestre,
    segundoSemestre,
    correlativas
  ) {
    let c = 0;
    this.materias.forEach((materia) => {
      if (materia.ID[0] === nivel.toString()) {
        c += 1;
      }
    });
    const id = `${nivel}${c}`;
    this.materias.push(
      new Materia(
        id,
        nombre,
        tipo,
        primerSemestre,
        segundoSemestre,
        correlativas
      )
    );
    this.saveMateriasToLocalStorage(); // Guarda los cambios en LocalStorage
    console.log(`Se agrego: ${this.materias[i].nombre}\n`);
  }

  removeMateria(id) {
    const i = this.materias.findIndex((materia) => {
      return materia.ID === id;
    });
    if (i !== -1) {
      // Verifica si se encontró el índice
      console.log(`Se elimino: ${this.materias[i].nombre}\n`);
      this.materias.splice(i, 1); // Elimina el elemento del array
      this.saveMateriasToLocalStorage(); // Guarda los cambios en LocalStorage
    } else {
      throw new Error("Materia no encontrada");
    }
  }

  countAllMaterias() {
    return this.materias.length;
  }

  countMateriasPendientes() {
    return this.getMateriasPendientes().length;
  }

  countMateriasCursando() {
    return this.getMateriasCursando().length;
  }

  countMateriasRegulares() {
    return this.getMateriasRegulares().length;
  }

  countMateriasAprobadas() {
    return this.getMateriasAprobadas().length;
  }

  countMateriasLibres() {
    return this.getMateriasLibres().length;
  }

  // Métodos para usar localStorage
  saveMateriasToLocalStorage() {
    localStorage.setItem("materias", JSON.stringify(this.materias));
    console.log("data saved to LS");
  }

  loadMateriasFromLocalStorage() {
    const data = localStorage.getItem("materias");
    if (data) {
      let materiasArray = JSON.parse(data);
      this.materias = materiasArray.map(
        (m) =>
          new Materia(
            m.ID,
            m.nombre,
            m.tipo,
            m.estado,
            m.primerSemestre,
            m.segundoSemestre,
            m.correlativas
          )
      );
    }
    console.log("data loaded form LS");
  }

  info() {
    console.clear();
    console.log(`Nombre de la carrera: ${this.getNombre()}`);
    console.log(`Materias totales: ${this.countAllMaterias()}`);
    console.log(`Materias Libres: ${this.countMateriasLibres()}`);
    console.log(`Materias Aprobadas: ${this.countMateriasAprobadas()}`);
    console.log(`Materias Regulares: ${this.countMateriasRegulares()}`);
    console.log(`Materias Cursando: ${this.countMateriasCursando()}`);
    console.log(`Materias Pendientes: ${this.countMateriasPendientes()}`);
  }
}
