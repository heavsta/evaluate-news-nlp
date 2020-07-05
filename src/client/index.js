import { checkForInput } from './js/inputChecker';
import { handleSubmit } from './js/formHandler'
import { updateUI } from './js/updateUI';

console.log(checkForInput);


// importing sass files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


// exporting js files

export {
    checkForInput,
    handleSubmit,
    updateUI
}