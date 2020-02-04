import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import logo from './logo.svg';
import ToggleMenu from './toggle-menu';

export default function Menu() {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='mb-4'>
      <Navbar color='dark' dark expand='md'>
        <NavbarBrand tag={RRNavLink} to='/' exact>
          <img src={logo} height='40' alt='Logo' />
          React Academy
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to='/' exact>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/about'>
                About
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <ToggleMenu name='Todos' link='todos' />
              <DropdownMenu>
                <DropdownItem tag={RRNavLink} to='/todos/ClassicState'>
                  Classic State
                </DropdownItem>
                <DropdownItem tag={RRNavLink} to='/todos/ContextHooks'>
                  Context and hooks
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={RRNavLink} to='/todos/ReduxClassic'>
                  Classic Redux — connect
                </DropdownItem>
                <DropdownItem tag={RRNavLink} to='/todos/ReduxHooks'>
                  Classic Redux — hooks
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={RRNavLink} to='/todos/ToolkitClassic'>
                  Redux Toolkit — connect
                </DropdownItem>
                <DropdownItem tag={RRNavLink} to='/todos/ToolkitHooks'>
                  Redux Toolkit — hooks
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink tag={RRNavLink} to='/reddits'>
                Reddits
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
