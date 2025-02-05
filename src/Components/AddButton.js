import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddButton({onClick}){
    return(
        <div className='container-add-goals' onClick={onClick} >
                             <span className="tooltip-add-goals">Adicionar Objetivo</span>

        <div className='container-add-goals-button'>
         <button className="add-goals-button" onClick={(e) => { e.stopPropagation(); onClick(); }}  ><FontAwesomeIcon icon={faPlus} className='icon-add'></FontAwesomeIcon></button>
            </div>
        </div>
    )
}
export default AddButton