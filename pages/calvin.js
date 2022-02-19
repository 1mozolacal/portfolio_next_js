import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import WallPaper from '../components/backgroundImage/backgroundImage'

export default function Home() {
  return (
      <>
  <WallPaper url='https://academic.daniels.utoronto.ca/forestry/wp-content/uploads/sites/4/2020/12/ali-kazal-z7ofnYF_qsI-unsplash-2.jpg'/>
  <div>Calvin</div>
  </>)
}
