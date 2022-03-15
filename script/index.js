// IMPORT
import { Card } from "./Card.js";
import * as data from "./parameters.js";
import { FormValidator } from "./FormValidator.js";

// Валидация форм
const editProfileValidator = new FormValidator(
  data.validationConfig,
  data.popupFormProfile
);
editProfileValidator.enableValidation();

const photoAddValidator = new FormValidator(
  data.validationConfig,
  data.popupFormPhoto
);
photoAddValidator.enableValidation();

// > > > > > > > > > > > > > > > >  КАРТОЧКИ < < < < < < < < < < < < < < < <

// Ф-я добавления карточки в начало контейнера.
const addCard = (card) => {
  data.elementsContainer.prepend(card);
};

// Ф-я cоздание карточки
const createCard = (name, link) => {
  const card = new Card(name, link, "#template__card");
  const templateCard = card.generateCard();
  return templateCard;
};

// Массив стандартных карточек
data.initialCards.forEach((item) => {
  const card = createCard(item.name, item.link);
  addCard(card);
});
// > > > > > > > > > > > > > > > >          < < < < < < < < < < < < < < < <

//функция открытия попапа
export default function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
}

// Функция закрытие попап по ESC
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

// Закрыть попап по кнопке и оверлею
data.popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (event.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});

// клик на кнопку profile__edit-button открывает попап и заполняет форму текстом со страницы + сброс валидации при каждом открытии
data.profileEditButton.addEventListener("click", () => {
  data.popupInputName.value = data.profileUserName.textContent;
  data.popupInputAbout.value = data.profileUserAbout.textContent;
  openPopup(data.popupEditProfile);
  editProfileValidator.resetValidation();
});

// клик на кнопку profile__add-button открывает попап + сброс валидации при каждом открытииы
data.photoAddButton.addEventListener("click", () => {
  openPopup(data.popupAddPhoto);
  photoAddValidator.resetValidation();
});

// Обработчик «отправки» формы ПРОФИЛЬ
function handleSubmitProfileForm(evt) {
  evt.preventDefault(); // Отменим стандартную отправку формы
  data.profileUserName.textContent = data.popupInputName.value;
  data.profileUserAbout.textContent = data.popupInputAbout.value;
  closePopup(data.popupEditProfile);
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
data.popupFormProfile.addEventListener("submit", handleSubmitProfileForm);

// Обработчик «отправки» формы ФОТО
function handleSubmitAddCardForm(evt) {
  evt.preventDefault();
  const card = createCard(
    data.popupInputTitlePhoto.value,
    data.popupInputLinkToPic.value
  );
  // Создаем карточку со своими данными
  addCard(card); // Добавляем на страницу
  closePopup(data.popupAddPhoto);
  data.popupFormPhoto.reset();
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
data.popupFormPhoto.addEventListener("submit", handleSubmitAddCardForm);
