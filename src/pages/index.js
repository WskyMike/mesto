// IMPORT < < < < <
import { Card } from "../components/Card.js";
import * as data from "../components/parameters.js";
import { FormValidator } from "../components/FormValidator.js";
import "./index.css";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/api.js";

// Данные ЮЗЕРА < < < < <
let userId

api.getProfile()
.then((res) => {
  userInfo.setUserInfo(res.name, res.about, res.avatar);
  userId = res._id
})
.catch(err => alert(err))
// > > > > >

// Массив карточек с сервера < < < < <
api.getInitialCards()
.then((cardList) => {
  cardList.reverse().forEach((data) => {
    const card = createCard({
      name: data.name,
      link: data.link,
      likes: data.likes,
      id: data._id,
      userId: userId,
      ownerId: data.owner._id
    });
    addCard.addItem(card);
  })
})
.catch(err => alert(err))
// > > > > >
// Создание карточки < < < < <
const createCard = (data) => {
  const card = new Card(
    data,
    "#template__card",
    () => {
      imagePopup.open(data.name, data.link);
    },
    (id) => {
      confirmPopup.open()
      confirmPopup.changeSubmitHandler(() => {
        confirmPopup.renderLoading(true)
        api.deleteCard(id)
         .then( () => {
           card.deleteCard()
           confirmPopup.close()
         })
         .catch(err => alert(err))
         .finally( () => editProfilePopup.renderLoading(false))
      })
    },
    // Если стоит ЛАЙК - удалить, иначе - поставить
    (id) => {
      if(card.isLiked()) {
        api.deletelike(id)
        .then(res => {
          card.setLikes(res.likes)
        })
        .catch(err => alert(err))
      } else {
        api.addlike(id)
        .then(res => {
          card.setLikes(res.likes)
        })
        .catch(err => alert(err))
      }
    }
  );
  return card.generateCard();
};

const addCard = new Section({ items: [],}, data.elementsContainer);

addCard.renderItems();
// > > > > >

// ПРОФИЛЬ < < < <
// Клик на кнопку
data.profileEditButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  data.popupInputName.value = name;
  data.popupInputAbout.value = about;
  editProfilePopup.open();
  editProfileValidator.resetValidation();
});

// Попап ПРОФИЛЬ обработка SUBMIT
const editProfilePopup = new PopupWithForm(
  data.popupEditProfile, (input) => {
    editProfilePopup.renderLoading(true)
    // Отправим данные из инпутов на сервер
    api.editProfile(input.name, input.about)
      // Сначала ждем ответа от сервера, потом выставляем данные (от сервера, не из инпутов).
      .then((res) => {
        userInfo.setUserInfo(res.name, res.about);
        // Закроем попап после ответа сервера.
        editProfilePopup.close();
      })
      .catch(err => alert(err))
      .finally( () => editProfilePopup.renderLoading(false))
  })
editProfilePopup.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__user-name",
  aboutSelector: ".profile__user-about",
  avatarSelector: ".profile__avatar-src"
});

// Валидация ПРОФИЛЬ
const editProfileValidator = new FormValidator(
  data.validationConfig,
  data.popupFormProfile
);
editProfileValidator.enableValidation();

// ДОБАВИТЬ ФОТО < < < < <
// Клик на кнопку
data.photoAddButton.addEventListener("click", () => {
  addCardPopup.open();
  addCardValidator.resetValidation();
});

// Попап ФОТО и обработка SUBMIT
const addCardPopup = new PopupWithForm(
  data.popupAddPhoto, (input) => {
    // Создаем новую карточку (собираем инпуты в _getInputValues)
    addCardPopup.renderLoading(true)
    api.addCard(input.name, input.link)
    .then((res) => {
      const card = createCard({
        name: res.name,
        link: res.link,
        likes: res.likes,
        id: res._id,
        userId: userId,
        ownerId: res.owner._id
      });
      addCard.addItem(card);
      addCardPopup.close();
    })
    .catch(err => alert(err))
    .finally( () => addCardPopup.renderLoading(false))
  })
addCardPopup.setEventListeners();

// Валидация ФОТО
const addCardValidator = new FormValidator(
  data.validationConfig,
  data.popupFormPhoto
);
addCardValidator.enableValidation();

// АВАТАР < < < < <
// Клик на кнопку
data.avatarButton.addEventListener('click', () => {
  avatarPopup.open()
  avatarValidator.resetValidation()
});

// Попап АВАТАР и обработка SUBMIT
const avatarPopup = new PopupWithForm(
  data.popupAvatar, (input) => {
    avatarPopup.renderLoading(true)
    api.updateAvatar(input.avatar)
    .then(res => {
      userInfo.setUserInfo(res.name, res.about, res.avatar)
      avatarPopup.close()
    })
    .catch(err => alert(err))
    .finally( () => avatarPopup.renderLoading(false))
  })
avatarPopup.setEventListeners()

// Валидация АВАТАР
const avatarValidator = new FormValidator(
  data.validationConfig,
  data.popupAvatar
);
avatarValidator.enableValidation();

// Попап ФУЛЛСКРИН < < < < <
const imagePopup = new PopupWithImage(data.popupStyleFullscreen);
imagePopup.setEventListeners();

// Попап ВЫ УВЕРЕНЫ < < < < <
const confirmPopup = new PopupWithForm(data.popupConfirm);
confirmPopup.setEventListeners();
