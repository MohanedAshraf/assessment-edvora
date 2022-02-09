// @ts-nocheck
export default function ProductCard({
  productName,
  description,
  image,
  price,
  date,
  addressState,
  brandName,
}) {
  return (
    <>
      <div className="flex py-5 ml-6">
        <div className="flex flex-col py-4 pl-3 w-72 rounded-xl bg-edvora-gray">
          <div className="flex flex-row items-start ">
            <img
              className="w-20 h-20 mb-3 rounded-lg "
              src={image}
              alt="product"
            />
            <div className="ml-4">
              <h1 className="text-gray-200 text-md"> {productName} </h1>
              <h3 className="mt-2 text-xs text-edvora-light-gray ">
                {brandName}
              </h3>
              <p className="mt-4 text-xs text-gray-200">$ {price}</p>
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <h3 className="block text-xs text-edvora-light-gray">
              {addressState !== undefined && addressState}
            </h3>
            <h3 className="block ml-4 text-xs text-edvora-light-gray">
              Date:{new Date(date).toLocaleDateString()}
            </h3>
          </div>
          <div className="self-start mt-2 ml-4 text-xs text-edvora-light-gray">
            {description}
          </div>
        </div>
      </div>
    </>
  )
}
