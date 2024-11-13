import { createRoot } from 'react-dom/client'

function 컴포넌트(props){
  return (
    <div>
      {props.name}님
      <h1>안녕하세요</h1>
    </div>
  );
}

function 컴포넌트2(props){
  const  conut = props
  const user = props
  return(
    <div>
      <h1>{user}님 안녕하세요 {count}번 클릭 하셨읍니다</h1>
    </div>  
  );
}

function Hello(props){
  return (
    <main>
      <h1>heelo {props.name} World</h1>
      <h3>{number} 번째 방문입다</h3>
    </main>
  )
}
createRoot(document.getElementById('root')).render(
  <>
  <Hello name = "소마고" number = "3"/>
  </>
)
