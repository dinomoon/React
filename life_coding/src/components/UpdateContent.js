function UpdateContent(props) {
  return (
    <section>
      <h2>Update</h2>
      <form action="/create_process" method="POST" onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(
          props.content.id,
          e.target.title.value,
          e.target.desc.value
        )
      }}
      >
        <input
          type="text"
          name="title"
          placeholder="title"
          value={props.content.title}
          // onChange={function(e){
          //   this.setState({
          //     title: e.target.value  
          //   })
          // }.bind(this)}
        >
        </input>
        <textarea
          type="desc"
          name="desc" 
          placeholder="description"
          value={props.content.desc}
          // onChange={function(e){
          //   this.setState({
          //     desc: e.target.value  
          //   })
          // }.bind(this)}
        >
        </textarea>
        <input type="submit"></input>
      </form>
    </section>
  )
}

export default UpdateContent;