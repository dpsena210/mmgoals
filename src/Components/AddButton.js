import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddButton(){
    return(
        <button className="add-goals-button"><FontAwesomeIcon icon={faPlus} className='icon-add'></FontAwesomeIcon></button>
    )
}
export default AddButton