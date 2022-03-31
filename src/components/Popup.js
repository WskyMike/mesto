export default class Popup {
  constructor(popupSelector) {
    // Конкретный попап.
    this._popup = popupSelector;
    // this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  // Клик по иконке или оверлею.
  setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
      if (evt.target.classList.contains("popup__close")) {
        this.close();
      }
    });
  }
  // Логика закрытия клавишей ESC.
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
}
