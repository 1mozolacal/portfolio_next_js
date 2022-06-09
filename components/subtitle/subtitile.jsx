import { Container } from 'react-bootstrap'
import style from './style.module.scss'

//Causes the bellow known error for the ID
//When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.
const Subtitle = ({ text,hrefID }) => {

    return (
            <h1 id={hrefID}  className={style.decorated}><span>{text}</span></h1>
    )
}

export default Subtitle