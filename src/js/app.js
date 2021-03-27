const form = document.querySelector('.form');
let error = null;
let title = null;
let first = 0;
form.noValidate = true;

function deleteError(err) {
  if (err !== null && title !== null) {
    error.parentElement.removeChild(error);
    title.parentElement.removeChild(title);
    error = null;
    title = null;
  }
}

function addError() {
  const arr = Array.from(form.elements);
  first = arr.find((o) => !o.validity.valid);
  first.focus();
  error = document.createElement('div');
  title = document.createElement('div');
  title.textContent = 'Popover Title';
  title.className = 'form-error form-error-title';
  error.dataset.id = 'error';
  error.className = 'form-error';
  error.textContent = 'And here is some amazing content. It is very engaging. Right?';
  first.offsetParent.appendChild(error);
  error.style.top = `${first.offsetTop + first.offsetHeight / 2 - error.offsetHeight / 2}px`;
  error.style.left = `${first.offsetLeft - (error.offsetWidth - first.offsetWidth) / 2}px`;
  error.offsetParent.appendChild(title);
  title.style.top = `${first.offsetTop + first.offsetHeight / 2 - title.offsetHeight * 2}px`;
  title.style.left = `${first.offsetLeft - (error.offsetWidth - first.offsetWidth) / 2}px`;
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let isValid = evt.currentTarget.checkValidity();
  if (error !== null && title !== null) {
    deleteError(error);
    isValid = true;
  }
  if (!isValid) {
    addError();
  }
});
