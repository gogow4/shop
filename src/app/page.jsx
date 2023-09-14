import Image from 'next/image'
import styles from './page.module.css'
import Nav from './components/nav/nav'
import Bas from './bas/bas'

export default function Home() {
  return (
    <div>
      <Nav />
      <Bas />
    </div>
  )
}
