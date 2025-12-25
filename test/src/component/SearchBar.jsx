const SearchBar = ({ query, setQuqery }) => {
  return (
    <div className=" ">
      <input
        className="border-primary-800 border-solid border-2 rounded-xl pl-3 mt-5"
        placeholder="search . . ."
        type="text"
        value={query}
        onChange={(e) => setQuqery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
