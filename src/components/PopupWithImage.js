
import Popup from './Popup.js'

// Класс попап фуллскрин.
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._img = this._popup.querySelector('.popup__fullscreen-img');
    this._title = this._popup.querySelector('.popup__fullscreen-title');
  }
  // Откроем попап и подставим данные.
  open(name, link) {
    super.open()

    this._img.src = link;
    this._img.alt = name;
    this._title.textContent = name;
  }
}
