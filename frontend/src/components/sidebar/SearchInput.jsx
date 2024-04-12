import { FiSearch } from 'react-icons/fi';

const SearchInput = () => {
    return (
        <form className="flex item-center gap-2">
            <input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <FiSearch size={24} color="black" />
            </button>
        </form>
    )
}

export default SearchInput;