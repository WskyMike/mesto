export class FormValidator {
  constructor(settings, form) {
    // Popup form (поля ввода и кнопка)
    this._form = form;
    // Объект validationConfig
    this._settings = settings;
    // Находим все поля внутри формы
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    // Находим кнопку отправки формы
    this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
  }

  // inputElement — проверяемое поле ввода
  // Добавляем класс с ошибкой
  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    // Красное подчеркивание
    inputElement.classList.add(this._settings.inputInvalidClass);
    // Заменим содержимое SPAN с ошибкой на переданный параметр
    errorElement.textContent = inputElement.validationMessage;
    // Отобразим SPAN
    errorElement.classList.add(this._settings.inputSpanErrorClass);
  }
  // Удаляем класс с ошибкой
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputInvalidClass);
    errorElement.classList.remove(this._settings.inputSpanErrorClass);
    errorElement.textContent = "";
  }
  // Метод, который проверяет валидность поля.
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }
  // Валидация кнопки. Функция принимает массив полей.
  // Если поле не валидно, колбэк вернёт true. Обход массива прекратится и вся фунцкция hasInvalidInput вернёт true
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  // Неактивная кнопка
  _submitButtonInactive() {
    this._buttonElement.classList.add(this._settings.submitButtonInactiveClass);
    this._buttonElement.disabled = true;
  }
  // Активная кнопка
  _submitButtonActive() {
    this._buttonElement.classList.remove(
      this._settings.submitButtonInactiveClass
    );
    this._buttonElement.disabled = false;
  }
  // Стилизация кнопки.
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButtonInactive();
    } else {
      this._submitButtonActive();
    }
  }
  // Обрабатываем инпуты пользователя
  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }
  // Обработчик форм
  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
    });
    this._setEventListeners();
  }
  // Сброс предыдущей валидации при каждом открытии форм
  resetValidation() {
    this._form.reset();
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
}
