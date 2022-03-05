import React from 'react'
import SearchBar from './SearchBar'
import { Container, Row, Col } from 'react-bootstrap'

const Product = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={12} className="text-center">
            <h1>Find Insurance that fits your need here !</h1>
          </Col>
        </Row>
      </Container>

      <SearchBar placeholder="Search..."/>
    </>
  )
}

export default Product