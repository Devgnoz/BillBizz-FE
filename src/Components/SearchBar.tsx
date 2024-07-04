
type Props = {}

const SearchBar = ({}: Props) => {
  return (
    <div className="relative flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 absolute left-3 text-gray-500">
 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

     <input className="pl-9 text-sm w-[90%] rounded-md text-start  text-gray-800 h-[30px] p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
      style={{backgroundColor:"rgba(28, 28, 28, 0.04)"}} placeholder='Search'/>
   </div>
  )
}

export default SearchBar