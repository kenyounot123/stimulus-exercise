import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ["dropdownMenu", "specialElement", "showElement"]
  static classes = ["change", "special"]

  showDropdown() {
    this.dropdownMenuTarget.classList.toggle(this.changeClass);
  }

  hideAndShowElement() {
    this.specialElementTarget.classList.toggle(this.specialClass);
    this.showElementTarget.classList.toggle(this.changeClass);
  }

  highlightCheckbox(event) {
    const checkbox = event.target
    const parentElement = checkbox.closest('div')

    if (checkbox.checked) {
      parentElement.classList.add('highlighted');
    } else {
      parentElement.classList.remove('highlighted');
    }

  }
}