import ListBox from './ListBox'

const choice = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
export default function Filter() {
  return (
    <>
      <form>
        <div className="flex items-center justify-center w-60">
          <div className="rounded-[24px] bg-edvora-dark-gray px-8 py-7 pb-10">
            <h1 className="text-lg text-edvora-light-gray">Filters</h1>
            <hr className="border-edvora-light-gray" />
            <div className="mt-8 space-y-4 ">
              <ListBox
                optionName={'Products'}
                data={['Products', ...choice]}
                idx={'z-20'}
              />
              <ListBox
                optionName={'State'}
                data={['State', ...choice]}
                idx={'z-10'}
              />
              <ListBox
                optionName={'City'}
                data={['City', ...choice]}
                idx={'z-0'}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
