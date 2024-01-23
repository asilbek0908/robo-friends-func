function Search(props) {
  const { onSearchChange } = props;
  return (
    <div className="search">
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Search..."
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Search;
