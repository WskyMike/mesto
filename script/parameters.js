export const initialCards = [
  {
    name: 'Гейминг',
    link: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'На заре',
    link: 'https://cdn.pixabay.com/photo/2021/10/28/20/20/hut-6750482_960_720.jpg'
  },
  {
    name: 'Панельки',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Няши',
    link: 'https://cdn.pixabay.com/photo/2017/03/14/17/24/women-2143800_960_720.jpg'
  },
  {
    name: 'Тай',
    link: 'https://images.unsplash.com/photo-1581413224308-c859525067ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Мотокайф',
    link: 'https://cdn.pixabay.com/photo/2021/12/13/09/46/moto-bikes-6867911_960_720.jpg'
  }
];

export const validationConfig = {
  //Класс формы
  formSelector: '.popup__form',
  //Класс поля формы
  inputSelector: '.popup__input',
  //Поле формы с красным подчеркиванием
  inputInvalidClass: 'popup__input_type_invalid',
  //Видимая ошибка
  inputSpanErrorClass: 'popup__input-error_visible',
  //Кнопка Сохранить
  submitButtonSelector: '.popup__submit',
  //Нерабочая кнопка сохранить
  submitButtonInactiveClass: 'popup__submit_inactive'
};

// ON PAGE
export const profileEditButton = document.querySelector(".profile__edit-button");
export const photoAddButton = document.querySelector(".profile__add-button");
export const profileUserName = document.querySelector(".profile__user-name");
export const profileUserAbout = document.querySelector(".profile__user-about");
// POPUPs
export const popups = document.querySelectorAll(".popup");
// PROFILE POPUP
export const popupEditProfile = document.querySelector(".popup_style_edit-profile");
export const popupInputName = document.querySelector(".popup__input_data_user-name");
export const popupInputAbout = document.querySelector(".popup__input_data_user-about");
export const popupFormProfile = document.querySelector(".popup__form_type_profile");
// ADD PHOTO POPUP
export const popupAddPhoto = document.querySelector(".popup_style_add-photo");
export const popupInputTitlePhoto = document.querySelector(".popup__input_data_title-photo");
export const popupInputLinkToPic = document.querySelector(".popup__input_data_link-to-pic");
export const popupFormPhoto = document.querySelector(".popup__form_type_photo");
// ELEMENTS
export const elementsContainer = document.querySelector('.elements__container');


