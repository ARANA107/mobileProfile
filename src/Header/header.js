import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';


export class Header extends Component{

    state={
        setIsOpen:false
    }

    style={
        height:"100px",
    }

    style1={
        margin: "20px",
        fontSize: "21px"
    }

    styleLogo={
        margin: "12px 14px 10px 10px",
        fontSize: "35px",
        position: "absolute",
        color: "rgb(11, 15, 104)"
    }

    toggle = () => {
        this.setState({setIsOpen: !this.state.setIsOpen})
    }
    render(){
        return(
            <div>
            <Navbar style={this.style} color="light" light expand="md">
              <NavbarBrand href="/"><img style={{height:"80px"}} src="/assets/images/logo.png"></img><span style={this.styleLogo}>Talk and Fix</span></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.setIsOpen} navbar>
                <Nav className="d-md-flex d-block flex-row mx-md-auto mx-0" navbar>
                  <NavItem style={this.style1}>
                    <NavLink href="/accessories">Accessories</NavLink>
                  </NavItem>
                  <NavItem style={this.style1}>
                    <NavLink href="/about">About</NavLink>
                  </NavItem>
                  <NavItem style={this.style1}>
                    <NavLink href="/contact">Contact</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle style={this.style1} nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar> 
          </div>
        )
    }
}