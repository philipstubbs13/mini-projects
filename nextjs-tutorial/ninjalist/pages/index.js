import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni a omnis pariatur, iusto obcaecati facilis maiores magnam nulla reprehenderit eveniet eius neque vitae laudantium corrupti blanditiis laborum? Nam, veniam modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni a omnis pariatur, iusto obcaecati facilis maiores magnam nulla reprehenderit eveniet eius neque vitae laudantium corrupti blanditiis laborum? Nam, veniam modi.</p>
      <Footer />
    </div>
  )
}
