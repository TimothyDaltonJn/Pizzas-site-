import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute,
} from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon/>
        </Icon>
        <SidebarMenu>
            <SidebarLink to="/">Pizzas</SidebarLink>
            <SidebarLink to="/">Desserts</SidebarLink>
            <SidebarLink to="/">Full menu</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
        <SidebarRoute to="/">Order now</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
    )
}

export default Sidebar
