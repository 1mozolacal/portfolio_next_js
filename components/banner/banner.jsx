import style from './style.module.scss'

const Banner = () => {

    return (
        <div className={style.wrapper}>
            <h1 className={style["first-line"]}>I&apos;m</h1>
            <h1 className={style["second-line"]}>Calvin Mozola</h1>
        </div>
    )
}

export default Banner