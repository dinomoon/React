function Control(props) {
  return (
    <ul>
      <li>
        <a href="/create" onClick={(e) => {
          e.preventDefault();
          props.onClick('create');
        }}
        >
          create
        </a>
      </li>
      <li>
        <a href="/update" onClick={(e) => {
          e.preventDefault();
          props.onClick('update');
        }}
        >
          update
        </a>
      </li>
      <li>
        <a href="/delete" onClick={(e) => {
          e.preventDefault();
          props.onClick('delete');
        }}
        >
          delete
        </a>
      </li>
    </ul>
  )
}

export default Control;