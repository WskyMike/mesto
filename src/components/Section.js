// items — это массив данных, которые нужно добавить на страницу при инициализации класса.
// renderer — это функция, которая отвечает за создание и отрисовку каждого отдельного элемента данных на странице.

// класс Section отвечает за отрисовку элементов на странице.
export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._container = containerSelector;
    this._renderer = renderer;
    this._items = items;
  }
  // публичный метод, который отвечает за отрисовку всех элементов
  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }
  // Метод принимает DOM-элемент и добавляет его в контейнер.
  addItem(element) {
    this._container.prepend(element);
  }
}
