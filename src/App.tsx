import './App.css'
//为什么button要分开写，不然报错？
//因为命名导出的需要{}包裹,非命名也就是export default导出的不需要包裹
import Button,{ButtonSize,ButtonType} from './components/button/button'
import Menu from './components/menu/menu'
import MenuItem from './components/menu/menuItem'

function App() {

  return (
    <>
      <Button disabled size={ButtonSize.Large} type={ButtonType.Primary} children={'hello'}></Button>
      <Menu defaultIndex={0} onSelect={(index)=>console.log(index)}>
        {/* 直接通过children.map遍历和cloneElement根据位置设置index,不用显式声明了 */}
        {/* <MenuItem index={0}> */} 
        <MenuItem>
          cool link
        </MenuItem>
        {/* <MenuItem index={1}> */}
        <MenuItem>
          cool link 2
        </MenuItem>
        {/* <MenuItem index={2}> */}
        <MenuItem>
          cool link 3
        </MenuItem>
      </Menu>
    </>
  )
}

export default App
