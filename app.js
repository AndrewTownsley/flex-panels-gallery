const panels = document.querySelectorAll('.panel');

function togglePanelOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', togglePanelOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));