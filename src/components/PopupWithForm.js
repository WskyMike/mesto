
import Popup from "./Popup.js";

// Класс попапа с формой ввода.
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    // Селектор попапа с формой.
    this._form = this._popup.querySelector(".popup__form");
    // Колбэк сабмита формы.
    this._handleSubmitForm = handleSubmitForm;
    // Находим поля инпутов и делаем массив
    this._inputs = [...this._form.querySelectorAll(".popup__input")];
    // Кнопка SUBMIT
    this._popupSubmitButton = this._popup.querySelector(".popup__submit");
  }
  // Метод собирает данные всех полей ввода формы.
  _getInputValues() {
    this._inputValues = {};
    this._inputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });

    return this._inputValues;
  }
  close() {
    super.close();
    this._form.reset();
  }
  // Подмена SUBMIT для попапа AREYOUSURE дял передачи _id
  changeSubmitHandler(newSubmitHandler) {
    this._handleSubmitForm = newSubmitHandler
  }
  // Закрытие формы и обработчик submit'а формы.
  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
  }
  // Загрузка визуал
  renderLoading(isLoading) {
    if(isLoading) {
      this._popupSubmitButton.textContent = 'Сохранение...'
    } else {
      this._popupSubmitButton.textContent = 'Сохранить'
    }
  }
}
