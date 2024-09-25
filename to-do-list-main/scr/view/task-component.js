import {createElement} from '../framework/render.js';


function createTaskComponent() {
    return (
        `
     <li class="tasks">Название задачи</li>
        `
      );
}
export default class TaskComponent {
  getTemplate() {
    return createTaskComponent();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
