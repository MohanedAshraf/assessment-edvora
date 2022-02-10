// @ts-nocheck
export default function ProductCard({
  productName,
  description,
  image,
  price,
  date,
  addressState,
  addressCity,
  brandName,
}) {
  return (
    <>
      <div className="mx-3 my-4 flex-col flex-nowrap rounded-xl bg-edvora-gray p-3">
        <div className="flex flex-nowrap rounded-xl bg-edvora-gray ">
          <div className="flex flex-col ">
            <img
              className="mb-3 h-20 w-20 rounded-lg "
              src={image}
              alt="product"
            />

            <h3 className="w-24 text-xs text-edvora-light-gray">
              {addressState + ', ' + addressCity}
            </h3>
          </div>
          <div className="mt-2 flex flex-col ">
            <div className="ml-4">
              <h1 className="text-md text-gray-200"> {productName} </h1>
              <h3 className="mt-2 text-xs text-edvora-light-gray ">
                {brandName}
              </h3>
              <p className="mt-4 text-xs text-gray-200">$ {price}</p>
            </div>

            <h3 className="ml-4 block text-xs text-edvora-light-gray">
              Date:{new Date(date).toLocaleDateString()}
            </h3>
          </div>
        </div>
        <div className="mt-4 text-xs text-edvora-light-gray">{description}</div>
      </div>
    </>
  )
}
