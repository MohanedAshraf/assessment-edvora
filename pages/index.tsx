import Head from 'next/head'
import Filter from './components/Filter'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Edvora</title>
      </Head>
      <div className=" bg-edvora-dark-gray font-body">
        {/* <Filter></Filter> */}
        <ProductCard />
      </div>
    </>
  )
}
