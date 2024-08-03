class UI {
  // ID
  static ID_ROADMAP_NIVELES = "roadmap-niveles";
  static ID_ROADMAP_MATERIAS = "roadmap-materias";
  static ID_ROADMAP_MATERIA = "roadmap-materia";
  static ID_MODAL_MATERIA_INFO = "info-materia";
  static ID_MODAL_MATERIA_CORRELATIVAS = "modal-materia-correlativas";
  static ID_MODAL_MATERIA_CORRELATIVA = "modal-materia-correlativa";
  static ID_MODAL_MATERIA_CORRELATIVA_REMOVE = "modal-materia-correlativa-rem";
  static ID_MODAL_MATERIA_CORRELATIVA_ADD = "modal-materia-correlativa-add";
  static ID_MODAL_MATERIA_CORRELATIVA_REMOVE_OPTIONS =
    "modal-materia-correlativa-add-options";
  static ID_MODAL_MATERIA_CORRELATIVA_ADD_OPTIONS =
    "modal-materia-correlativa-add-options";

  // MODAL ELEMENT
  static MODAL = document.getElementById("modal"); // MODAL
  static MODAL_CLOSE_BTN = document.getElementById("close"); // MODAL CLOSE BTN

  // ADD CORRELATIVA ELEMENT
  static SELECTOR_CORRELATIVA_ADD = document.getElementById(
    this.ID_MODAL_MATERIA_CORRELATIVA_ADD
  ); // ADD CORRELATIVA BTN
  static OPTIONS_CORRELATIVA_ADD = document.getElementById(
    this.ID_MODAL_MATERIA_CORRELATIVA_ADD_OPTIONS
  ); // ADD CORRELATIVA OPTIONS

  // REMOVE CORRELATIVA ELEMENT
  static SELECTOR_CORRELATIVA_REMOVE = document.getElementById(
    this.ID_MODAL_MATERIA_CORRELATIVA_REMOVE
  ); // REMOVE CORRELATIVA BTN
  static OPTIONS_CORRELATIVA_REMOVE = document.getElementById(
    this.ID_MODAL_MATERIA_CORRELATIVA_REMOVE_OPTIONS
  ); // REMOVE CORRELATIVA OPTIONS

  // MATERIA INFO ELEEMENT

	static MATERIA_INFO = document.getElementById(this.ID_MODAL_MATERIA_INFO)
	static MATERIA_INFO_NAME = document.getElementById(this.ID_MODAL_MATERIA_INFO)
	static MATERIA_INFO_STATE = document.getElementById(this.ID_MODAL_MATERIA_INFO)
	static MATERIA_INFO_TYPE = document.getElementById(this.ID_MODAL_MATERIA_INFO)
}
