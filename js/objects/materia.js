class Materia {
  // Constantes para los tipos de materia y estados
  static TIPO_ANUAL = 0;
  static TIPO_SEMESTRAL = 1;
  static ESTADO_PENDIENTE = 0;
  static ESTADO_CURSO = 1;
  static ESTADO_REGULAR = 2;
  static ESTADO_APROBADO = 3;
  static ESTADO_LIBRE = 4;

  constructor(
    ID,
    nombre,
    tipo = Materia.TIPO_ANUAL,
    estado = Materia.ESTADO_PENDIENTE,
    primerSemestre = null,
    segundoSemestre = null,
    correlativas = []
  ) {
    this.ID = ID;
    this.nombre = nombre;
    this.tipo = tipo; // 0 (Anual), 1 (Semestral)
    this.estado = estado; // 0 (Pendiente), 1 (Cursando), 2 (Regular), 3 (Aprobado), 4 (Libre)
    this.correlativas = correlativas;
    if (tipo === Materia.TIPO_ANUAL) {
      this.primerSemestre = null;
      this.segundoSemestre = null;
    } else {
      this.primerSemestre = primerSemestre;
      this.segundoSemestre = segundoSemestre;
    }
  }

  // Métodos Getter
  getID() {
    return this.ID;
  }

  getIndex(materias) {
    return materias.findIndex((m) => {
      return m.ID === this.ID;
    });
  }

  getNombre() {
    return this.nombre;
  }

  getTipo() {
    return this.tipo;
  }

  getPrimerSemestre() {
    return this.primerSemestre;
  }

  getSegundoSemestre() {
    return this.segundoSemestre;
  }

  getEstado() {
    return this.estado;
  }

  getCorrelativas() {
    return this.correlativas;
  }

  // Métodos Setter con Validación
  setNombre(nombre) {
    if (typeof nombre === "string" && nombre.trim() !== "") {
      this.nombre = nombre;
    } else {
      throw new Error("Nombre inválido");
    }
  }

  setTipo(tipo) {
    if ([Materia.TIPO_ANUAL, Materia.TIPO_SEMESTRAL].includes(tipo)) {
      this.tipo = tipo;
    } else {
      throw new Error("Tipo inválido");
    }
  }

  setEstado(estado) {
    if (
      [
        Materia.ESTADO_PENDIENTE,
        Materia.ESTADO_CURSO,
        Materia.ESTADO_REGULAR,
        Materia.ESTADO_APROBADO,
        Materia.ESTADO_LIBRE,
      ].includes(estado)
    ) {
      this.estado = estado;
      console.log(`nuevo estado: ${this.getEstado()}`);
    } else {
      throw new Error("Estado inválido");
    }
  }

  addCorrelativa(materias, IDcorrelativa) {
    const ID = materias.findIndex((materias) => {
      return materias.ID === IDcorrelativa;
    });

    if (!this.correlativas.includes(materias[ID])) {
      if (materias[ID] instanceof Materia) {
        this.correlativas.push(materias[ID]);
      } else {
        throw new Error("Correlativa debe ser una instancia de Materia");
      }
    } else {
      throw new Error("Correlativa ya existente");
    }
  }

  removeCorrelativa(correlativaID) {
    this.correlativas = this.correlativas.filter(
      (correlativa) => correlativa.ID !== correlativaID
    );
  }

  // Método para actualizar el estado de la materia
  actualizarEstado(nuevoEstado) {
    this.setEstado(nuevoEstado);
  }

  // Método para verificar si una materia es semestral
  esSemestral() {
    return this.tipo === Materia.TIPO_SEMESTRAL;
  }
}
