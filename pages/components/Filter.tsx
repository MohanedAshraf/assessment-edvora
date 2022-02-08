import DropDown from './DropDown'

export default function Filter() {
  return (
    <>
      <form>
        <div className="flex items-center justify-center w-60">
          <div className="rounded-[24px] bg-edvora-dark-gray px-8 py-7 pb-10">
            <h1 className="text-lg text-edvora-light-gray">Filters</h1>
            <hr className="border-edvora-light-gray" />
            <div className="mt-8 space-y-4 ">
              <DropDown optionName={'Products'} idx={'z-20'} />
              <DropDown optionName={'State'} idx={'z-10'} />
              <DropDown optionName={'City'} idx={'z-0'} />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
