import React from 'react'

import StylingProject from "./style.module.scss"

import { GitButton } from '../helperComponents/helperComponents'

export const CardHolder = (props) => {

  return (
    <div
      className={StylingProject.flexcontainer}
      style={{
        color: "black",
        position: "relative",
        top: "10%",
      }}
    >
      {props.children}
    </div>)
}

class AnimatedCard extends React.Component {
  constructor(props) {
    super(props)
    this.title = props.title
    this.description = props.description
    this.icon = props.icon
    this.gitLink = props.git
    this.readMoreLink = props.link
    this.handleMouse = this.handleMouse.bind(this)
    this.handleMouseOff = this.handleMouseOff.bind(this)
    this.redirectOnClick = this.redirectOnClick.bind(this)
    this.ele = React.createRef()
    this.perspective = "100em"
    this.maxRot = 25
    if (props.name) {
      this.id = props.name
    } else {
      this.id = "ranID-aniCard-" + Math.floor(Math.random() * 1000000)
    }
  }

  //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
  handleMouse(params) {
    const ele = document.getElementById(this.id)
    if (ele) {
      ele.style.transitionDuration = "0s"
      ele.style.transitionDelay = "0s"
      const elePos = ele.getBoundingClientRect()
      let xRot =
        ((params.clientX - elePos.x - elePos.width / 2) / elePos.width) *
        (this.maxRot * 2)
      let yRot =
        ((params.clientY - elePos.y - elePos.height / 2) / elePos.height) *
        (this.maxRot * 2)
      // console.log("rot X:" + xRot)
      //console.log("rot Y:" + yRot)
      ele.style.transform =
        "perspective(" +
        this.perspective +
        ") rotateX(" +
        yRot +
        "deg) rotateY(" +
        -xRot +
        "deg)"
      // ele.style.boxShadow = "insert 10px 10px 25px rgba(0,0,0,0.6)"
      let shadow =
        "inset " +
        (params.clientX - elePos.x - elePos.width / 2) +
        "px " +
        (params.clientY - elePos.y - elePos.height / 2) +
        "px " +
        Math.min(elePos.width, elePos.height) / 2 +
        "px 10px rgba(0,0,0,0.4)"

      ele.style.boxShadow = shadow
      ele.style.opacity = "1"
      //ele.style.webkitBoxShadow = shadow - depricated
      //ele.style.mozBoxShadow = shadow
    }
  }

  handleMouseOff(params) {
    const ele = document.getElementById(this.id)
    if (ele) {
      ele.style.transitionDuration = "3s"
      ele.style.transitionDelay = "0.5s"
      ele.style.transform =
        "perspective(" + this.perspective + ") rotateX(0deg) rotateY(0deg)"
      const elePos = ele.getBoundingClientRect()
      ele.style.boxShadow =
        "inset " +
        0 +
        "px " +
        0 +
        "px " +
        Math.min(elePos.width, elePos.height) / 2 +
        "px 10px rgba(0,0,0,0.4)"
      ele.style.opacity = "0.65"
    }
  }

  redirectOnClick() {
    if (this.readMoreLink) {
      window.location.href = this.readMoreLink
    }
  }

  render() {
    return (
      <div
        onMouseMove={this.handleMouse}
        onMouseOut={this.handleMouseOff}
        className={StylingProject.projectitem}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        id={this.id}
        onClick={this.redirectOnClick}
      >
        <div>
          <h1 style={{ textAlign: "center" }}>{this.title}</h1>
          {this.icon && (
            <ProjectPictureButton link={this.icon}></ProjectPictureButton>
          )}
          <div className={StylingProject['summary-holder']}>{this.description}</div>
        </div>
        <div className="btn-group">
          {this.gitLink && (
            <div className="btn">
              <GitButton
                style={{ height: "4em", width: "4em" }}
                link={this.gitLink}
              ></GitButton>
            </div>
          )}
          {this.readMoreLink && (
            <div className="btn">
              <MoreButton link={this.readMoreLink}></MoreButton>
            </div>
          )}
        </div>
      </div>
    )
  }
}

class ProjectPictureButton extends React.Component {
  constructor(props) {
    super(props)
    this.link = props.link
  }
  render() {
    return (
      <div>
        <img
          alt="Project Icon"
          src={this.link}
          style={{ width: "80%" }}
          className="mx-auto d-block rounded-circle"
        ></img>
      </div>
    )
  }
}
class MoreButton extends React.Component {
  constructor(props) {
    super(props)
    this.link = props.link
  }
  render() {
    return (
      <a className={"btn " + StylingProject['see-more-button']} href={this.link}>
        See more
      </a>
    )
  }
}

export default AnimatedCard