import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class PageHome extends Component {
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
                <Input size="16" type="text" placeholder="Type a city (Sao Paulo, Romania, etc.)" />
                <InputGroupAddon addonType="append">
                  <Button color="info">Search</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PageHome;
