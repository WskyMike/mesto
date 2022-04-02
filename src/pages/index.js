// IMPORT
import { Card } from "../components/Card.js";
import * as data from "../components/parameters.js";
import { FormValidator } from "../components/FormValidator.js";
import "./index.css";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

// > > > > > Создание карточки < < < < <

const createCard = (name, link) => {
  const card = new Card(name, link, "#template__card", () => {
    imagePopup.open(name, link);
  })
  return card.generateCard();
};

const addCard = new Section(
  {
    items: data.initialCards,
    renderer: (item) => {
      const card = createCard(item.name, item.link);
      addCard.addItem(card);
    },
  },
  data.elementsContainer
);

addCard.renderItems();

// > > > > >                     < < < < <

// Клик на кнопку ПРОФИЛЬ
data.profileEditButton.addEventListener("click", () => {
  const {name, about } = userInfo.getUserInfo()
  data.popupInputName.value = name;
  data.popupInputAbout.value = about;
  editProfilePopup.open();
  editProfileValidator.resetValidation();
});

// Клик на кнопку ФОТО
data.photoAddButton.addEventListener("click", () => {
  addCardPopup.open();
  addCardValidator.resetValidation();
});

// Обработчик SUBMIT формы ПРОФИЛЬ
const handleSubmitProfileForm = (input) => {
  userInfo.setUserInfo(input.name, input.about)
  editProfilePopup.close();
}

// Обработчик SUBMIT формы ФОТО
const handleSubmitAddCardForm = (input) => {
  // Создаем новую карточку (собираем инпуты в _getInputValues)
  const card = createCard(input);
  addCard.addItem(card);
  addCardPopup.close();
}

// > > > > > Создание классов < < < < <

// Попап ФУЛЛСКРИН
const imagePopup = new PopupWithImage (data.popupStyleFullscreen);
imagePopup.setEventListeners();

// Попап ФОТО
const addCardPopup = new PopupWithForm(data.popupAddPhoto, handleSubmitAddCardForm);
addCardPopup.setEventListeners();

// Попап ПРОФИЛЬ
const editProfilePopup = new PopupWithForm(data.popupEditProfile, handleSubmitProfileForm);
const userInfo = new UserInfo ({ nameSelector: ".profile__user-name", aboutSelector: ".profile__user-about" });
editProfilePopup.setEventListeners();


// Валидация форм
const editProfileValidator = new FormValidator(
  data.validationConfig,
  data.popupFormProfile
);
editProfileValidator.enableValidation();

const addCardValidator = new FormValidator(
  data.validationConfig,
  data.popupFormPhoto
);
addCardValidator.enableValidation();

// > > > > >                  < < < < <
