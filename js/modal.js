const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


export const Modal = {

   wrapper: document.querySelector('.modal-wrapper'),
   message: document.querySelector('.modal .title span'),
   buttonClose:document.querySelector('.modal button.close'),

   open() {
      Modal.wrapper.classList.add('open')
   },
   close() {
      Modal.wrapper.classList.remove('open')
   }

}

Modal.buttonClose.onclick = () => {
   Modal.close()

   inputHeight.value = ''
   inputWeight.value = ''
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
   if (event.key === 'Escape') {
      Modal.close()

      inputHeight.value = ''
      inputWeight.value = ''
   }
}