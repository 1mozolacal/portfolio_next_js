import { VerticalTimeline } from 'react-vertical-timeline-component';
import Head from 'next/head'

import BackgroundParticles from '../components/backgroundParticles/backgroundParticles'
import Navbar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'
import TypeWriter from '../components/typeWriter/typeWriter'
import Subtitle from '../components/subtitle/subtitile'
import AnimatedCard, { CardHolder } from '../components/card/class_card'
import TimeLineElement from '../components/timeLine/timeLine'
import FrostedGlass, { FrostedDescritpion } from '../components/frostedGlass/forstedGlass';
import Pie from '../components/skillDisplay/skillDisplay';

import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap
import 'react-vertical-timeline-component/style.min.css';//vertical timeline
import styling from '../styles/AHome.module.scss'

import projectData from '../content/project-animated-cards.json'
import workExperience from '../content/work-time-line.json'
import { Container } from 'react-bootstrap';

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ zIndex: 10 }}>
        <Navbar className={styling["show-z"]}></Navbar>
        <div className={styling["show-z"]}>
          <Pie></Pie>
        </div>
        <div id='home' className={`${styling['banner-group']} ${styling['show-z']}`}>
          <Banner />
          <TypeWriter />
        </div>
        <Container className={styling['content-wrapper']}>
          <Subtitle hrefID='work' text='Work Experience' />
          <VerticalTimeline>
            {workExperience.data.map((item, index) => {
              return (<TimeLineElement
                key={index}
                background={item.background}
                colour={item.colour}
                date={item.date}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                icon={item.icon}
              />)
            })}
          </VerticalTimeline>
          <div className={styling.break} />
          <Subtitle hrefID='projects' text='Projects' />
          <CardHolder>
            {projectData.data.map((item, index) => {
              return (<FrostedDescritpion
                key={index}
                title={item.title}
                description={item.description}
                picture={item.icon}
                gitLink={item.git}
              ></FrostedDescritpion>)
            })}
          </CardHolder>
        </Container>
        <Pie></Pie>
      </div>
      <BackgroundParticles></BackgroundParticles>
    </>)
}
