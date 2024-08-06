class closeTagLine {
  constructor(element) {
    this.element = document.querySelector(element);
    this.element.addEventListener('click', () => {
      this.element.parentElement.remove();
    });
  }
}

export default new closeTagLine('.tagline__close');
