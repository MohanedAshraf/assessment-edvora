export default function ProductCard() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-5 ">
        <div className="flex flex-col max-w-sm p-3 rounded-xl bg-edvora-gray">
          <div className="flex items-start ">
            <img
              className="w-24 h-24 mb-3 rounded-lg shadow-lg "
              src="https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
              alt="product"
            />
            <div className="p-2 ml-5">
              <h1 className="text-gray-200 text-md"> Product Name </h1>
              <h3 className="mt-2 text-xs text-edvora-light-gray ">
                Brand Name
              </h3>
              <p className="mt-4 text-xs text-gray-200">$ 29.99</p>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <h3 className="text-xs text-edvora-light-gray">Location</h3>
            <h3 className="text-xs mr-7 text-edvora-light-gray">
              Date:10:12:2021
            </h3>
          </div>
          <div className="mt-2 text-xs text-edvora-light-gray">
            Description of the product/item
          </div>
        </div>
      </div>
    </>
  )
}
