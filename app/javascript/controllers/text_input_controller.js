import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ["characterCountInfo", "textBox"]
  static values = { characterCount: {type: Number, default: 0} }

  updateCharacterCount() {
    const maxLength = 280
    const currentLength = this.textBoxTarget.value.length
    const remainingChars = maxLength - currentLength

    if (remainingChars <= 20 && remainingChars > 0) {
      this.characterCountInfoTarget.textContent = `WARNING ${remainingChars} characters remaining`
    } else if (remainingChars < 0) {
      this.characterCountInfoTarget.textContent = 'Maximum Characters exceeded'
    } else {
      this.characterCountInfoTarget.textContent = `${remainingChars} characters remaining`
    }
  }

}