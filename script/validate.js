
const formElement = document.querySelector('.popup__form');
const inputElement = formElement.querySelector('.popup__input')

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_invalid');                      // Красное подчеркивание
  errorElement.textContent = errorMessage;                                      // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.classList.add('popup__input-error_visible');                     // Отобразим SPAN
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_invalid');
  errorElement.classList.remove('popup__input-error_visible');
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
// formElement — html-элемент формы, в которой находится проверяемое поле ввода. Он нужен для поиска элемента ошибки в форме.
// inputElement — проверяемое поле ввода.
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);           // errorMeggage = validationMessage (стандартное свойство)
  } else {
    hideInputError(formElement, inputElement);
  }
};

// Валидация кнопки. Функция принимает массив полей
// Если поле не валидно, колбэк вернёт true. Обход массива прекратится и вся фунцкция hasInvalidInput вернёт true
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {                                     // проходим по этому массиву методом some
    return !inputElement.validity.valid;
  })
};

// Стилизация кнопки. Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {                                             // Если есть хотя бы один невалидный инпут - сделать кнопку неактивной
    buttonElement.classList.add('popup__submit_inactive');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('popup__submit_inactive');                   // иначе сделай кнопку активной
    buttonElement.disabled = false;
  }
};

// Добавим слушатель событий всем полям ввода внутри формы
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));            // Находим все поля внутри формы, сделаем из них массив методом Array.from
  const buttonElement = formElement.querySelector('.popup__submit');
  toggleButtonState(inputList, buttonElement);                       // Найдём в текущей форме кнопку отправки submit
  inputList.forEach((inputElement) => {                                                   // Обойдём все элементы полученной коллекции
    inputElement.addEventListener('input', () => {                                        // каждому полю добавим обработчик события input
      isValid(formElement, inputElement)                                                  // Внутри колбэка вызовем isValid, передав ей форму и проверяемый элемент
      toggleButtonState(inputList, buttonElement);                                        // Вызовем tBS передадим ей массив полей и кнопку
    });
  });
};

// Добавим обработчик всем формам
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));     // Найдём все формы с указанным классом в DOM, сделаем из них массив методом Array.from
  formList.forEach((formElement) => {                                         // Переберём полученную коллекцию
    formElement.addEventListener('submit', (evt) => {                         // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });
    setEventListeners(formElement);                                           // Для каждой формы вызовем функцию setEventListeners, передав ей элемент формы
  });
};

enableValidation();


