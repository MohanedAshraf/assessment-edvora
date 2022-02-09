// @ts-nocheck
import ProductCard from './ProductCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function SimpleCarousel({ productName, products }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <>
      <h2 className="mt-8 text-2xl text-gray-200">{productName}</h2>
      <hr className="mt-2 border-gray-200" />
      <div className="mt-4 rounded-2xl bg-edvora-dark-gray">
        <Slider {...settings}>
          {products &&
            products.map(
              ({ product_name, discription, image, price, date, address }) => {
                return (
                  <ProductCard
                    productName={product_name}
                    description={discription}
                    image={image}
                    price={price}
                    date={date}
                    address={address}
                  />
                )
              }
            )}
        </Slider>
      </div>
    </>
  )
}
