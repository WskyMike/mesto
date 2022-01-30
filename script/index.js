// PROFILE
const buttonEditButon = document.querySelector(".profile__edit-button");
const profileUserName = document.querySelector(".profile__user-name");
const profileUserAbout = document.querySelector(".profile__user-about");
// POPUP
const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup__container");
const popupForm = document.querySelector(".popup__form");
const popupCloseButton = document.querySelector(".popup__close");
const popupInputName = document.querySelector(".popup__input_user-name");
const popupInputAbout = document.querySelector(".popup__input_user-about");

//функция "открыть попап" и заполнить поля тем, что на странице
function openPopup() {
  popup.classList.add("popup_opened");
  popupInputName.value = profileUserName.textContent;
  popupInputAbout.value = profileUserAbout.textContent;
}

// клик на кнопку "profile__edit-button" открывает попап
buttonEditButon.addEventListener("click", openPopup);

// функция "закрыть попап"
function closePopup() {
  popup.classList.remove("popup_opened");
}

// клик на крестик "popup__close" закрывает попап
popupCloseButton.addEventListener("click", closePopup);

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileUserName.textContent = popupInputName.value;
  profileUserAbout.textContent = popupInputAbout.value;
  closePopup();
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка» /
popupForm.addEventListener("submit", formSubmitHandler);

//клик на пустое поле закрывает попап
// popup.addEventListener('click', function (event) {
//   if (!event.defaultPrevented) {
//     closePopup();
//   }
// });
// popupContainer.addEventListener('click', function (e) {
//   e.preventDefault();
// });
