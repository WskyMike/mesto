
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
export const avatarButton = document.querySelector(".profile__avatar-button");
export const profileUserName = document.querySelector(".profile__user-name");
export const profileUserAbout = document.querySelector(".profile__user-about");
export const avatarImg = document.querySelector(".profile__avatar-src");
// POPUPs
export const popups = document.querySelectorAll(".popup");
export const popupStyleFullscreen = document.querySelector(".popup_style_fullscreen-img");
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
// AREYOUSURE POPUP
export const popupConfirm = document.querySelector(".popup_style_delete");
// AVATAR POPUP
export const popupAvatar = document.querySelector(".popup_style_avatar");
// ELEMENTS
export const elementsContainer = document.querySelector('.elements__container');


