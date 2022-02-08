import Head from 'next/head'
import Filter from './components/Filter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Edvora</title>
      </Head>
      <div className=" bg-edvora-gray font-body">
        <Filter></Filter>
      </div>
    </>
  )
}
