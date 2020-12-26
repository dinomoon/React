// function Hello(props) {
//   return (
//     <h1 style={{color: props.color}}>안녕하세요 {props.name}</h1>
//   )
// }

// 구조 분해
function Hello({name, color}) {
  return (
    <h1 
      style={{
        color
      }}
    >
      안녕하세요 {name}
    </h1>
  )
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello