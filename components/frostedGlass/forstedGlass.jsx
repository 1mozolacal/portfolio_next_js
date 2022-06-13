import moduleStyle from "./style.module.scss"
import Image from "next/image"
const FrostedGlass = () => {

    return (
        <div className={moduleStyle.container}>hello</div>
    )
}

const FrostedDescritpion = ({ gitLink, picture, title, description }) => {
    return (
        <div className={moduleStyle.card}>
            <Image src={picture} layout="fill"></Image>
            <div className={moduleStyle.info}>
                <h1 className={moduleStyle.title}>{title}</h1>
                {gitLink &&
                    <a className={moduleStyle.description} href={gitLink}>
                        <button type="button" class='btn btn-primary btn-lg'>Source code</button>
                    </a>
                }
                <p className={moduleStyle.description}>{description}</p>
            </div>
        </div >
    )
}

export { FrostedDescritpion }
export default FrostedGlass
