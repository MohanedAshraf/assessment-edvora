// @ts-nocheck
import ProductCard from './ProductCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <MdArrowForwardIos
      className={className}
      style={{
        ...style,

        color: 'white',
        width: '30px',
        height: '30px',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <MdArrowBackIosNew
      className={className}
      style={{
        ...style,
        color: 'white',
        width: '30px',
        height: '30px',
        display: 'none',
      }}
      onClick={onClick}
    />
  )
}

export default function SimpleCarousel({ productName, products }) {
  const settings = {
    dots: false,
    infinite: products.length > 3,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 762,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <>
      <h2 className="mt-8 text-lg text-gray-200 xl:text-2xl">{productName}</h2>
      <hr className="mt-1 border-gray-400" />
      <div className="mt-4 rounded-2xl bg-edvora-dark-gray px-5">
        <Slider {...settings}>
          {products &&
            products.map(
              ({
                product_name,
                discription,
                image,
                price,
                date,
                address: { state, city },
                brand_name,
              }) => {
                return (
                  <ProductCard
                    key={date}
                    productName={product_name}
                    description={discription}
                    image={image}
                    price={price}
                    date={date}
                    addressState={state}
                    addressCity={city}
                    brandName={brand_name}
                  />
                )
              }
            )}
        </Slider>
      </div>
    </>
  )
}
