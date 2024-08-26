const FilterButtons = ({filterData , setCategory}) => {
    const HandleCategory = (title) => {
        setCategory(title);
    }
    return (
        <div className="flex flex-wrap justify-center gap-6 py-4">
           {filterData.map( (data) => (
                <button className="border text-white bg-slate-900 px-2 py-1 rounded-lg font-medium text-lg hover:bg-white hover:text-black transition duration-300 hover:scale-90"
                    onClick={ () => HandleCategory(data.title)}>
                    {data.title}
                </button>    
            ))}  
        </div>
    )
}

export default FilterButtons;