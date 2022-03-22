import { Container } from 'react-bootstrap'
import style from './style.module.scss'

const Subtitle = ({ text,hrefID }) => {

    return (
            <h1 id={hrefID!== undefined ? "#"+hrefID : undefined}  className={style.decorated}><span>{text}</span></h1>
    )
}

export default Subtitle