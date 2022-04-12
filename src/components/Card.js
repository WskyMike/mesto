class Card {
  constructor(data, cardSelector, handleImgClick, handleDelClick, handleLikeClick) {
    this._name =data.name;
    this._image = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;

    this._cardSelector = cardSelector;
    this._handleImgClick = handleImgClick;
    this._handleDelClick = handleDelClick;
    this._handleLikeClick = handleLikeClick;
  }
  // Получим содержимое template и клонируем его
  _getTemplate() {
    const templateCard = document
      .querySelector(this._cardSelector)
      .content.cloneNode(true);

    return templateCard;
  }
  // Метод удаления карточки
  deleteCard() {
    this._elementTrash.closest(".elements__card").remove();
  }
  // Слушаем клики
  _setEventListeners() {
    this._elementLike.addEventListener("click", () => this._handleLikeClick(this._id));

    this._elementTrash.addEventListener("click", () => this._handleDelClick(this._id));

    this._elementImg.addEventListener("click", () => this._handleImgClick());
  }
  // Логика наличия лайка владельца
  isLiked () {
    const userHasLiked = this._likes.find(user => user._id === this._userId)
    return userHasLiked
  }
  // Поставить ЛАЙК
  setLikes(newLikes) {
    this._likes = newLikes;
    this._elementLikeCount.textContent = this._likes.length

    if(this.isLiked()) {
      this._blackLikeIcon()
    } else {
      this._whiteLikeIcon()
    }
  }
  _blackLikeIcon() {
    this._elementLike.classList.add("elements__like-icon_active");
  }
  _whiteLikeIcon() {
    this._elementLike.classList.remove("elements__like-icon_active");
  }
  // Генерим карточку
  generateCard() {
    this._element = this._getTemplate();
    this._elementName = this._element.querySelector(".elements__text");
    this._elementImg = this._element.querySelector(".elements__picture");
    this._elementLike = this._element.querySelector(".elements__like-icon");
    this._elementTrash = this._element.querySelector(".elements__trash");
    this._elementLikeCount = this._element.querySelector(".elements__like-count");
    this._setEventListeners();
    this.setLikes(this._likes)
    this._elementName.textContent = this._name;
    this._elementImg.src = this._image;
    this._elementImg.alt = this._name;

    if (this._userId !== this._ownerId) {
      this._elementTrash.style.display = 'none';
    }

    return this._element;
  }
}

export { Card };
