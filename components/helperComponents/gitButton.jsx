import gitIcon from "../../public/images/helper/git-icon.png"
import Image from "next/image"

export const GitButtonOld = ({link,styling,style,icon,alt}) =>{

    return (
        <a href={link}>
          <img
            alt={alt || "Github Logo"}
            className={styling}
            style={style}
            src={gitIcon}
          ></img>
        </a>
      )
}

const GitButton = ({link,styling,style,icon,alt}) =>{

  return (
      <a href={link}>
        <Image
          alt={alt || "Github Logo"}
          className={styling}
          style={style}
          src={icon || gitIcon}
          width = {60}
          height = {60}
        ></Image>
      </a>
    )
}


export default GitButton
  