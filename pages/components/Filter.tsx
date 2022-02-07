import DropDown from './DropDown'

export default function Filter() {
  return (
    <>
      <form>
        <div className="flex items-center justify-center h-screen">
          <div className="max-w-lg rounded-[24px] bg-edvora-dark-gray px-10 py-6">
            <h1 className="text-lg text-edvora-light-gray">Filters</h1>
            <hr className="border-edvora-light-gray" />
            <div className="mt-6 space-y-4">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="fullname"
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <DropDown />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
