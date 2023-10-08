const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

export const AlertError = {
   element: document.querySelector('.alert-error'),

   open() {
      AlertError.element.classList.add('open')

      /*
      inputHeight.addEventListener('input', closeAlertErrorBox)
      inputWeight.addEventListener('input', closeAlertErrorBox)
      function closeAlertErrorBox () {
         AlertError.close()
      }
      */

   },
   close(){
      AlertError.element.classList.remove('open')
   }




}