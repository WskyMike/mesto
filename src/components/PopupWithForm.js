
import Popup from "./Popup.js";

// Класс попапа с формой ввода.
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    // Селектор попапа с формой.
    this._form = this._popup.querySelector(".popup__form");
    // Колбэк сабмита формы(?)
    this._handleSubmitForm = handleSubmitForm;
  }
  // Метод собирает данные всех полей ввода формы.
  _getInputValues() {
    const inputs = [...this._form.querySelectorAll(".popup__input")];
    const inputValues = {};
    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }
  close() {
    super.close();
    this._form.reset();
  }
  // Закрытие формы и обработчик submit'а формы.
  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
  }
}
