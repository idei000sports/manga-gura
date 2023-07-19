import Head from 'next/head'
import Header from '../components/header.js'
import Menu from '../components/menu.js'
import List from '../components/list.js'
import styles from '../styles/Home.module.css'



export default function Home() {



  return (
    <>
      <Head>
        <title>漫画蔵</title>
      </Head>
      <Header />
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-2">
            <Menu />
          </div>

          <div className="col-md-10">
            <List />
          </div>
        </div>

      </div>
    </>
  )
}
