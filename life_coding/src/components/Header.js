function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            props.onClick()
          }}
        >
          생활코딩
        </a>
      </h1>
      <p>리액트 강의에 오신 것을 환영합니다.</p>
    </header>
  );
}

export default Header;