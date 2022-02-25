// ON PAGE
const profileEditButton = document.querySelector(".profile__edit-button");
const photoAddButton = document.querySelector(".profile__add-button");
const profileUserName = document.querySelector(".profile__user-name");
const profileUserAbout = document.querySelector(".profile__user-about");
// POPUPs
const popup = document.querySelector(".popup");
const popups = document.querySelectorAll(".popup");
// PROFILE POPUP
const popupEditProfile = document.querySelector(".popup_style_edit-profile");
const popupInputName = document.querySelector(".popup__input_data_user-name");
const popupInputAbout = document.querySelector(".popup__input_data_user-about");
const popupFormProfile = document.querySelector(".popup__form_type_profile");
// ADD PHOTO POPUP
const popupAddPhoto = document.querySelector(".popup_style_add-photo");
const popupInputTitlePhoto = document.querySelector(".popup__input_data_title-photo");
const popupInputLinkToPic = document.querySelector(".popup__input_data_link-to-pic");
const popupFormPhoto = document.querySelector(".popup__form_type_photo");
//FULLSCREEN POPUP
const popupFullscreen = document.querySelector(".popup_style_fullscreen-img");
const popupFullscreenImg = document.querySelector(".popup__fullscreen-img");
const popupFullscreenTitle = document.querySelector(".popup__fullscreen-title");
// ELEMENTS
const templateCard = document.querySelector ('#template__card').content;
const elementsContainer = document.querySelector('.elements__container');

// > > > > > > > > > > > > > > > >  КАРТОЧКИ < < < < < < < < < < < < < < < <

// Готовим карточку \\
function renderCard(name, link) {
  const card = templateCard.cloneNode(true);                                //клонируем содержимое template__card
  const elementsPicture = card.querySelector('.elements__picture');         //находим поле с картинкой и присваиваем link
  const elementsText = card.querySelector('.elements__text');               //находим поле с заголовком и присваиваем name
  const like = card.querySelector(".elements__like-icon");                  // находим лайк
  const trash = card.querySelector(".elements__trash");                     // находим корзинку

  elementsPicture.src = link;
  elementsText.textContent = name;
  elementsPicture.alt = name;                                                  // alt будет такой же, как name

  //добавим на лайк слушатель клика и создадим событие >> Событие: при клике на цель (target) класс будет изменен на _active. Классы постоянно чередуются с помощью toggle
  like.addEventListener('click', (evt) => {evt.target.classList.toggle("elements__like-icon_active")});

  // добавим на клик по корзине удаление карточки.
  trash.addEventListener('click', (evt) => {evt.target.closest(".elements__card").remove()});

  //клик по картинке подставляет название и ссылку на фото в попап из карточки и открывает его
  elementsPicture.addEventListener('click', () => {
    popupFullscreenImg.src = link;
    popupFullscreenImg.alt = name;
    popupFullscreenTitle.textContent = name;

    openPopup(popupFullscreen);
  });

  return card; // возвращаем готовую карточку
};

// добавляем карточки на страницу\\
function addCard(card) {
  elementsContainer.prepend(card); // добавить готовую карточку в начало контейнера.
};

initialCards.forEach((item) => { // вызываем функцию для каждого элемента массива [initialCards]
  let card  = renderCard (item.name, item.link); // здесь наполняет содержимым поля link и name из массива [initialCards]
  addCard(card); // вызываем функцию добавления карточки на страницу с (cardItem), где заполнили поля name и link
});

// > > > > > > > > > > > > > > > >          < < < < < < < < < < < < < < < <

//функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupEsc);
};

// Функция закрытие попап по ESC
function closePopupEsc (evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  };
};

// Закрыть попап по кнопке и оверлею
popups.forEach((popup) => {
  popup.addEventListener('click', (event) => {
      if (event.target.classList.contains('popup_opened')) {
        closePopup(popup);
      };
      if (event.target.classList.contains('popup__close')) {
        closePopup(popup);
      };
  });
});


// клик на кнопку profile__edit-button открывает попап и заполняет форму текстом со страницы + сброс валидации при каждом открытии
profileEditButton.addEventListener("click", () => {
  popupInputName.value = profileUserName.textContent;
  popupInputAbout.value = profileUserAbout.textContent;
  openPopup (popupEditProfile);
  resetValidation (popupEditProfile, validationConfig)
});

// клик на кнопку profile__add-button открывает попап + сброс валидации при каждом открытииы
photoAddButton.addEventListener("click", () => {
  openPopup (popupAddPhoto);
  resetValidation (popupAddPhoto, validationConfig)
});

// Обработчик «отправки» формы ПРОФИЛЬ
function handleSubmitProfileForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileUserName.textContent = popupInputName.value;
  profileUserAbout.textContent = popupInputAbout.value;
  closePopup(popupEditProfile);
};

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка» /
popupFormProfile.addEventListener("submit", handleSubmitProfileForm);

// Обработчик «отправки» формы ФОТО
function handleSubmitAddCardForm(evt) {
  evt.preventDefault();
  let card = renderCard(popupInputTitlePhoto.value, popupInputLinkToPic.value); // Создаем карточку
  addCard(card); // Добавляем на страницу
  closePopup(popupAddPhoto);
  popupFormPhoto.reset ();
};

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
popupFormPhoto.addEventListener("submit", handleSubmitAddCardForm);
