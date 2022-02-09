// @ts-nocheck
import ListBox from './ListBox'

export default function Filter({ products, state, city }) {
  return (
    <>
      <form>
        <div className="flex items-center justify-center w-60">
          <div className="rounded-[24px] bg-edvora-dark-gray px-8 py-7 pb-10">
            <h1 className="text-lg text-edvora-light-gray">Filters</h1>
            <hr className="border-edvora-light-gray" />
            <div className="mt-8 space-y-4 ">
              <ListBox optionName={'Products'} data={products} idx={'z-20'} />
              <ListBox optionName={'State'} data={state} idx={'z-10'} />
              <ListBox optionName={'City'} data={city} idx={'z-0'} />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
