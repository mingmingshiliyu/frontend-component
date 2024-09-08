import './App.css'
//为什么button要分开写，不然报错？
import Button,{ButtonSize,ButtonType} from './components/button/button'

function App() {

  return (
    <>
      <Button disabled size={ButtonSize.Large} type={ButtonType.Primary} children={<button></button>}></Button>
    </>
  )
}

export default App
