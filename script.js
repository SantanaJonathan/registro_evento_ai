const scriptURL = 'https://script.google.com/macros/s/AKfycbzZ6U8WOXnngD19Z8PZyWL4iToYYnNYFB8y1z2KtURELTH6eooS/exec'
const form = document.forms['submit-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})