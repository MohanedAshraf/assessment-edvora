import Head from 'next/head'
import Filter from './components/Filter'
import ProductCard from './components/ProductCard'
import SimpleCarousel from './components/SimpleCarousel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Edvora</title>
      </Head>
      <div className=" bg-edvora-dark-gray font-body">
        {/* <Filter></Filter> */}
        {/*<ProductCard />*/}
        {/* @ts-ignore */}
        <SimpleCarousel deviceType="desktop" />
      </div>
    </>
  )
}
