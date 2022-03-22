import { useEffect } from "react";
import Particles from "react-tsparticles";

import basicOptions from './basicOptions.json'
import style from './style.module.scss'

const BackgroundParticles = ({ options }) => {
  const usingOptions = options !== undefined ? options : basicOptions

  useEffect(() => {
    let tspart = document.getElementById("tsparticles").childNodes;
    console.log(tspart)
    tspart[0].style.zIndex = '-1 !important'

  }, [])
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles canvasClassName={style.generic} id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={basicOptions}>
      <div>helloaokdfj;lakjf;dlkj</div></Particles>
  );
};

export const getOptionWithGravity = (gravity) =>{
  var options = basicOptions
  options.particles.move.gravity.acceleration = gravity
  return options
}

export default BackgroundParticles;
