import Image from "next/image"

const WallPaperRaw = (props) => {
    const imageURL = props.url
    return <div style={{
        height: "100%",
        width: "100%",
        position: 'fixed',
        backgroundImage: `url(${imageURL})`,
    }}></div>
}

const WallPaper = (props) => {
    const imageURL = props.url
    const position = props.position
    return (<div style={{
        height: "100%",
        width: "100%",
        position: position ? position : 'fixed',
    }}>
        <Image
            layout="responsive"
            width='100vw'
            height='100vh'
            src={imageURL}
        />
    </div>)
}

export default WallPaper;