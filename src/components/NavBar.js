import React from 'react';
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

const NavBar = () => {
    return(
		<Router>
	 		<MDBNavbar color="unique-color-dark" dark expand="md">
		        <MDBNavbarBrand>
				<img src="https://lupu.space/brand.png" className="z-depth-0"
				  style={{ height: "35px", padding: 0, margin: 10 }} alt="LuPu Solutions" />
		        </MDBNavbarBrand>
				<MDBNavbarNav right>
				<MDBNavItem className="waves-effect waves-light">

					<a href="mailto:lukas.puchon@gmail.com" className="white-text" >
							<MDBIcon icon="at" className="mr-1" /> Contact us
					</a>

				</MDBNavItem>
				</MDBNavbarNav>
      		</MDBNavbar>
    	</Router>
    )
}

export default NavBar;
