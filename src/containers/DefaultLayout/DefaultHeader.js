import React, { Component } from 'react';
import {
  Badge, Button, Col, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, FormText, Input, InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label, Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import {getLocationsStartingWith} from "../../firebase/dbase";
import {Link} from "react-router-dom";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  onSearchChange = (event) => {
    getLocationsStartingWith(event.target.value)
      .then(snapshot => {
        console.log(snapshot.val());
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand>
          <Link to={'/'} className="text-black">Romania</Link>
        </AppNavbarBrand>
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="ml-auto" navbar>
          <NavItem>
            <InputGroup className="input-prepend">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fa fa-search"/>
                </InputGroupText>
              </InputGroupAddon>
              <Input size="16" onChange={this.onSearchChange} type="text" placeholder="Type a location" />
              <InputGroupAddon addonType="append">
                <Button color="info">Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </NavItem>
          <NavItem className="d-md-down-none">
          </NavItem>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
