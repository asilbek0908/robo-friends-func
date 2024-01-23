function Robot(props) {
  const { id, name, username, email } = props;
  return (
    <div
      className="robot card text-center text-bg-info shadow rounded"
      style={{ width: "20rem" }}
    >
      <div key={id}>
        <img src={`https://robohash.org/${username}`} alt={name} />
        <div>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

export default Robot;
