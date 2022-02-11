function Todo(props) {
  //props is an object that will contain whatever you have entered in the app.js as key value pairs
  function deleteHandler() {}

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
