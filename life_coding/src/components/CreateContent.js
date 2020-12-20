function CreateContent(props) {
  return (
    <section>
      <h2>Create</h2>
      <form action="/create_process" method="POST" onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(
          e.target.title.value,
          e.target.desc.value,
        );
      }}>
        <input type="text" name="title" placeholder="title"></input>
        <input type="desc" name="desc" placeholder="description"></input>
        <input type="submit"></input>
      </form>
    </section>
  )
}

export default CreateContent;