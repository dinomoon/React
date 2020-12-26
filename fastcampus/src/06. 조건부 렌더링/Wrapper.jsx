function Wrapper({ children }) {
  const style = {
    border: '4px solid black',
    padding: 16
  }

  return <div style={style}>{children}</div>
}

export default Wrapper;