function TOC(props) {
  let lists = [];
  let contents = props.contents;
  let i = 0;
  while (i < contents.length) {
    lists.push(
      <li key={contents[i].id}>
        <a
          href={"/content/"+contents[i].id}
          data-id={contents[i].id}
          onClick={(e) => {
            e.preventDefault();
            props.onClick(e.target.dataset.id);
          }}
        >
          {contents[i].title}
        </a>
      </li>
    )
    i++
  }

  return (
    <section className="toc">
      <ul>
        {lists}
      </ul>
    </section>
  )
}

export default TOC