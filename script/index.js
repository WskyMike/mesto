// ON PAGE
const profileEditButton = document.querySelector(".profile__edit-button");
const photoAddButton = document.querySelector(".profile__add-button");
const profileUserName = document.querySelector(".profile__user-name");
const profileUserAbout = document.querySelector(".profile__user-about");
// POPUPs
const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup__container");
// PROFILE POPUP
const popupEditProfile = document.querySelector(".popup_style_edit-profile");
const popupCloseProfile = document.querySelector(".popup__close_type_profile");
const popupInputName = document.querySelector(".popup__input_data_user-name");
const popupInputAbout = document.querySelector(".popup__input_data_user-about");
const popupFormProfile = document.querySelector(".popup__form_type_profile");
// ADD PHOTO POPUP
const popupAddPhoto = document.querySelector(".popup_style_add-photo");
const popupClosePhoto = document.querySelector(".popup__close_type_photo");
const popupInputTitlePhoto = document.querySelector(".popup__input_data_title-photo");
const popupInputLinkToPic = document.querySelector(".popup__input_data_link-to-pic");
const popupFormPhoto = document.querySelector(".popup__form_type_photo");

//FULLSCREEN POPUP
const popupFullscreen = document.querySelector(".popup_style_fullscreen-img");
const popupFullscreenImg = document.querySelector(".popup__fullscreen-img");
const popupFullscreenTitle = document.querySelector(".popup__fullscreen-title");
const popupCloseFullscreen = document.querySelector('.popup__close_type_fullscreen');

// ELEMENTS
const initialCards = [
  {
    name: 'Детство',
    link: '../images/comp.jpg'
  },
  {
    name: 'На заре',
    link: 'https://cdn.pixabay.com/photo/2021/10/28/20/20/hut-6750482_960_720.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Няши',
    link: 'https://cdn.pixabay.com/photo/2017/03/14/17/24/women-2143800_960_720.jpg'
  },
  {
    name: 'кОзел',
    link: 'https://cdn.pixabay.com/photo/2021/10/31/09/25/animal-6756751_960_720.jpg'
  },
  {
    name: 'Мотокайф',
    link: 'https://cdn.pixabay.com/photo/2021/12/13/09/46/moto-bikes-6867911_960_720.jpg'
  }
];
const templateCard = document.querySelector ('#template__card').content;
const elementsContainer = document.querySelector('.elements__container');

// > > > > > > > > > > > > > > > >  КАРТОЧКИ < < < < < < < < < < < < < < < <

// Готовим карточку \\
function renderCards(name, link) {
  const card = templateCard.cloneNode(true);                                //клонируем содержимое template__card
  const elementsPicture = card.querySelector('.elements__picture');         //находим поле с картинкой и присваиваем link
  const elementsText = card.querySelector('.elements__text');               //находим поле с заголовком и присваиваем name
  const like = card.querySelector(".elements__like-icon");                  // находим лайк
  const trash = card.querySelector(".elements__trash");                     // находим корзинку

  elementsPicture.src = link;
  elementsText.textContent = name;
  elementsText.alt = name;                                                  // alt будет такой же, как name

  //добавим на лайк слушатель клика и создадим событие >> Событие: при клике на цель (target) класс будет изменен на _active. Классы постоянно чередуются с помощью toggle
  like.addEventListener('click', (evt) => {evt.target.classList.toggle("elements__like-icon_active")});

  // добавим на клик по корзине удаление карточки.
  trash.addEventListener('click', (evt) => {evt.target.closest(".elements__card").remove()});

  //клик по картинке подставляет название и ссылку на фото в попап из карточки и открывает его
  elementsPicture.addEventListener('click', () => {
    popupFullscreenImg.src = elementsPicture.src;
    popupFullscreenImg.alt = elementsPicture.alt;
    popupFullscreenTitle.textContent = elementsText.textContent;

    openPopup(popupFullscreen);
  });

  return card; // возвращаем готовую карточку
};

// добавляем карточки на страницу\\
function addCard(card) {
  elementsContainer.prepend(card); // добавить готовую карточку в начало контейнера.
};
initialCards.forEach((item) => { // вызываем функцию для каждого элемента массива [initialCards]
  let card  = renderCards (item.name, item.link); // здесь наполняет содержимым поля link и name из массива [initialCards] (??? запутался, потому что тупой)
  addCard(card); // вызываем функцию добавления карточки на страницу с (cardItem), где заполнили поля name и link
});

// > > > > > > > > > > > > > > > >          < < < < < < < < < < < < < < < <

//функция "открыть попап"
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

// клик на кнопку profile__edit-button открывает попап и заполняет форму текстом со страницы
profileEditButton.addEventListener("click", () => {
  popupInputName.value = profileUserName.textContent;
  popupInputAbout.value = profileUserAbout.textContent;
  openPopup (popupEditProfile);
});

// клик на кнопку profile__add-button открывает попап
photoAddButton.addEventListener("click", () => {
  openPopup (popupAddPhoto);
});

// функция "закрыть попап"
function closePopup(popup) {
  popup.classList.remove("popup_opened");
};

// клик на кнопку "popup__close_type_photo" закрывает попап
popupClosePhoto.addEventListener("click", () => {
  closePopup(popupAddPhoto);
});
// клик на кнопку "popup__close_type_profile" закрывает попап
popupCloseProfile.addEventListener("click", () => {
  closePopup(popupEditProfile);
});

popupCloseFullscreen.addEventListener("click", () => {
  closePopup(popupFullscreen);
});


// Обработчик «отправки» формы ПРОФИЛЬ
function formSubmitHandlerProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileUserName.textContent = popupInputName.value;
  profileUserAbout.textContent = popupInputAbout.value;
  closePopup(popupEditProfile);
};

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка» /
popupFormProfile.addEventListener("submit", formSubmitHandlerProfile);

// Обработчик «отправки» формы ФОТО
function formSubmitHandlerAddCard(evt) {
  evt.preventDefault();
  let card = renderCards(popupInputTitlePhoto.value, popupInputLinkToPic.value); // Создаем карточку
  addCard(card); // Добавляем на страницу
  closePopup(popupAddPhoto);
  popupFormPhoto.reset ();
};

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
popupFormPhoto.addEventListener("submit", formSubmitHandlerAddCard);
