import search from '../../../assets/theme1/icons/search.svg'

const SearchInput = () => {
  return (
    <div className="rounded-xl border border-[#808080] text-dark1 px-4 p-2 flex gap-2 justify-start items-center w-75">
        <img src={search} alt="searchIcon" />
        <input type="search" className="border-none outline-none placeholder:text-[#808080] w-full " placeholder="Search"  />
    </div>
  )
}

export default SearchInput