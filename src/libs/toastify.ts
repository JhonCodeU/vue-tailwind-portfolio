import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


const ToastifyBase = (text: string, type: any) => {
    return Toastify({
      text,
      position: "left",
      gravity: "top",
      className: type,
      style: {
        background: 'linear-gradient(315deg, #20bf55 0%, #01baef 74%);'
      }
    }).showToast()
}

export default ToastifyBase
