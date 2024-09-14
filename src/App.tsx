import './App.css'
//为什么button要分开写，不然报错？
//因为命名导出的需要{}包裹,非命名也就是export default导出的不需要包裹
import Button,{ButtonSize,ButtonType} from './components/button/button'
import Icon from './components/icon/icon'
import Input from './components/input/input'
import Menu from './components/menu/menu'
import MenuItem from './components/menu/menuItem'
import SubMenu from './components/menu/subMenu'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas) //添加所有icon，而不是一个个导入

function App() {

  return (
    <div className='back'>
      <Button disabled size={ButtonSize.Large} type={ButtonType.Primary} children={'hello'}></Button>
      
      <Menu defaultIndex={0}  onSelect={(index)=>console.log(index)} >
        {/* 直接通过children.map遍历和cloneElement根据位置设置index,不用显式声明了 */}
        {/* <MenuItem index={0}> */} 
        <SubMenu title='hellonihao'>
          <MenuItem >
            cool link
          </MenuItem>
          <MenuItem >
            cool link2
          </MenuItem>
        </SubMenu>
        {/* <MenuItem index={1}> */}
        <SubMenu title='hello'>
            <MenuItem>
              sub1
            </MenuItem>
            <MenuItem>
              sub2
            </MenuItem>
        </SubMenu>
        {/* <MenuItem index={2}> */}
        <MenuItem>
          cool link 3
        </MenuItem>
      </Menu>

      <Icon icon="coffee" theme='danger' size="10x"></Icon>
      <Icon icon="angle-down" theme='danger' size="10x"></Icon>
      <Input placeholder='hello' icon={"arrow-down"} size='lg'/>
    </div>
  )
}

export default App
