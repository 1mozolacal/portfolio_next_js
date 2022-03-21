import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import WallPaper from '../components/backgroundImage/backgroundImage'
import BackgroundParticles from '../components/backgroundParticles/backgroundParticles'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'
import TypeWriter from '../components/typeWriter/typeWriter'

import styling from '../styles/AHome.module.scss'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  const rep = Array.from('qwertyuiopasdfghjkzxcvbnmqwertyuiopasdfghjkzxcvbnmqwertyuiopasdfghjkzxcvbnmqwertyuiopasdfghjkzxcvbnm') //new Array(100)
  return (
    <>
        
        <div style={{ zIndex: 10 }}>
          <Navbar className={styling["show-z"]}></Navbar>
        {/* <WallPaper url='https://academic.daniels.utoronto.ca/forestry/wp-content/uploads/sites/4/2020/12/ali-kazal-z7ofnYF_qsI-unsplash-2.jpg'/> */}
        <Banner></Banner>
        <TypeWriter></TypeWriter>
        <div className={styling["show-z"]}>Calvin</div>
        {rep.map( (v,i) =>{
          return (<div className={styling["show-z"]} style={{color:'white'}}>calvin</div>)
        })}
      </div>
      <BackgroundParticles></BackgroundParticles>
    </>)
}
