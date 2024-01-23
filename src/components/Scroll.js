function Scroll(props) {
  const { children } = props;
  return (
    <div
      style={{
        overflow: "scroll",
        border: "3px solid #000",
        height: "700px",
        padding: "30px 0",
      }}
    >
      {children}
    </div>
  );
}

export default Scroll;
