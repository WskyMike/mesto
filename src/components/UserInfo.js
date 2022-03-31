// Класс UserInfo отвечает за управление отображением информации о пользователе на странице.
export default class UserInfo {
  // Принимает объекы с селекторами элемента имени пользователя и информации о себе.
  constructor({ nameSelector, aboutSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
  }
  // Подставляет данные пользователя в форму при открытии.
  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    };
  }
  // Принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo(name, about) {
    this._name.textContent = name;
    this._about.textContent = about;
  }
}
