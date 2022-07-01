import React from 'react'
import { BsSun,BsMoon } from 'react-icons/bs'
const ToggleButton = ({setTheme,theme}) => {
    // const [selected,setSelected] = useState(false)
    return (
        <div className="toggle-container">
            <div className={`dialog-button ${theme ? "disabled" : ''}`} onClick={setTheme}>
            {theme ? <BsMoon size='20px'  />  : <BsSun size='20px' /> }
            </div>
        </div>
    )
}

export default ToggleButton
