const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputInvalidClass: 'popup__input_type_invalid',
  inputSpanErrorClass: 'popup__input-error_visible',
  submitButtonSelector: '.popup__submit',
  submitButtonInactiveClass: 'popup__submit_inactive'
};

// const formElement = document.querySelector('.popup__form');
// const inputElement = formElement.querySelector('.popup__input')

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.inputInvalidClass);                      // Красное подчеркивание
  errorElement.textContent = errorMessage;                                            // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.classList.add(validationConfig.inputSpanErrorClass);                   // Отобразим SPAN
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.inputInvalidClass);
  errorElement.classList.remove(validationConfig.inputSpanErrorClass);
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
// formElement — html-элемент формы, в которой находится проверяемое поле ввода. Он нужен для поиска элемента ошибки в форме.
// inputElement — проверяемое поле ввода.
const isValid = (formElement, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);           // errorMeggage = validationMessage (стандартное свойство)
  } else {
    hideInputError(formElement, inputElement, validationConfig);
  }
};

// Валидация кнопки. Функция принимает массив полей
// Если поле не валидно, колбэк вернёт true. Обход массива прекратится и вся фунцкция hasInvalidInput вернёт true
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {                                                     // проходим по этому массиву методом some
    return !inputElement.validity.valid;
  })
};

// Неактивная кнопка
const submitButtonInactive = (buttonElement, validationConfig) => {
  buttonElement.classList.add(validationConfig.submitButtonInactiveClass);
  buttonElement.disabled = true;
};

// Активная кнопка
const submitButtonActive = (buttonElement, validationConfig) => {
  buttonElement.classList.remove(validationConfig.submitButtonInactiveClass);
  buttonElement.disabled = false;
};

// Стилизация кнопки. Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  if (hasInvalidInput(inputList)) {                                               // Если есть хоть один невалидный инпут - кнопка не активна.
    submitButtonInactive(buttonElement, validationConfig);
  } else {
    submitButtonActive(buttonElement, validationConfig);
  };
};

// Добавим слушатель событий всем полям ввода внутри формы
const setEventListeners = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));      // Находим все поля внутри формы, сделаем из них массив методом Array.from
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validationConfig);                                   // Найдём в текущей форме кнопку отправки submit
  inputList.forEach((inputElement) => {                                                           // Обойдём все элементы полученной коллекции
    inputElement.addEventListener('input', () => {                                                // каждому полю добавим обработчик события input
      isValid(formElement, inputElement, validationConfig)                                        // Внутри колбэка вызовем isValid, передав ей форму и проверяемый элемент
      toggleButtonState(inputList, buttonElement, validationConfig);                              // Вызовем tBS передадим ей массив полей и кнопку
    });
  });
};

// Добавим обработчик всем формам
const enableValidation = validationConfig => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));     // Найдём все формы с указанным классом в DOM, сделаем из них массив методом Array.from
  formList.forEach((formElement) => {                                                        // Переберём полученную коллекцию
    formElement.addEventListener('submit', (evt) => {                                        // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });
    setEventListeners(formElement, validationConfig);                                           // Для каждой формы вызовем функцию setEventListeners, передав ей элемент формы
  });
};

enableValidation(validationConfig);

// Сброс валидации при повторном открытии попапа
function resetValidation (formElement, validationConfig) {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validationConfig);
  inputList.forEach(inputElement => {
    hideInputError(formElement, inputElement, validationConfig);
  });
};
