
// let PROFILE
let buttonEditButon = document.querySelector('.profile__edit-button');
let profileUserName = document.querySelector('.profile__username');
let profileUserAbout = document.querySelector('.profile__userabout');
// let POPUP
let popup = document.querySelector('.popup');
let popupContainer = document.querySelector('.popup__container');
let popupCloseButton = document.querySelector('.popup__close');
let popupSaveButton = document.querySelector('.popup__submit');
let popupInputName = document.querySelector('.popup__username');
let popupInputAbout = document.querySelector('.popup__userabout');

//функция "открыть попап" и заполнить поля тем, что на странице
function openPopup(event) {
  event.preventDefault();
  popup.classList.add('popup_opened');
  popupInputName.value = profileUserName.textContent;
  popupInputAbout.value = profileUserAbout.textContent;
};

// функция "закрыть попап"
function closePopup() {
  popup.classList.remove('popup_opened');
};

// клик на кнопку "редактировать профиль"
buttonEditButon.addEventListener('click', openPopup);

// клик на крестик "закрыть попап"
popupCloseButton.addEventListener('click', closePopup);

//Клик на "Сохранить"
popupSaveButton.addEventListener('click', formSubmitHandler);

//клик на пустое поле закрывает попап
popup.addEventListener('click', function (event) {
  if (!event.defaultPrevented) {
    closePopup();
  }
});
popupContainer.addEventListener('click', function (e) {
  e.preventDefault();
});

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileUserName.textContent = popupInputName.value;
  profileUserAbout.textContent = popupInputAbout.value;
  if (popupInputName.value.length > 0) {
    closePopup();
  }
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
popupContainer.addEventListener('submit', formSubmitHandler);



