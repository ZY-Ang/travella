import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {withRouter} from "react-router-dom";

/**
 * Returns {@code true} if {@param event}
 * is the equivalent of an 'enter' keypress.
 */
export const isKeyPressedEnter = (event) => {
  return (event.charCode === 13);
};

/**
 * Calls {@param _function} if {@param event}
 * is the equivalent of an 'enter' keypress.
 */
export const doOnKeyPressEnter = (_function) => (event) => {
  if (isKeyPressedEnter(event)) {
    return _function(event);
  }
};

class PageHome extends Component {
  state = {
    text: "",
    error: ""
  };

  onSubmit = (event) => {
    if (this.state.text.toLowerCase() === 'romania') {
      this.props.history.push('/dashboard');
    } else {
      this.setState({error: "Location not found!"});
    }
    if (event) {
      event.preventDefault();
    }
  };
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix text-center">
                <h1 className="display-3 mr-4">traVella</h1>
                <h4 className="pt-3">Empowering travellers.</h4>
                <p className="text-muted float-left"/>
              </div>
              <InputGroup className="input-prepend">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-search"/>
                  </InputGroupText>
                </InputGroupAddon>
                <Input size="16" onChange={(event) => {
                  this.setState({text: event.target.value, error: ""});

                }} onKeyPress={doOnKeyPressEnter(this.onSubmit)} type="text" placeholder="Type a city (Sao Paulo, Romania, etc.)" />
                <InputGroupAddon addonType="append">
                  <Button color="info" onClick={this.onSubmit}>Search</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p className="form-control-static text-danger">{this.state.error}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(PageHome);
