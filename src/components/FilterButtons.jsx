const FilterButtons = ({ filterData, setCategory }) => {
    const handleCategory = (title) => {
        setCategory(title);
    };

    return (
        <div className="flex flex-wrap justify-center gap-4 py-4">
            {filterData.map((data) => (
                <button
                    className="border border-white text-white bg-slate-900 px-4 py-2 rounded-lg font-medium text-lg hover:bg-white hover:text-black transition duration-300"
                    onClick={() => handleCategory(data.title)}
                    key={data.id}
                >
                    {data.title}
                </button>
            ))}
        </div>
    );
}

export default FilterButtons;
