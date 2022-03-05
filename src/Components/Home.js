import React from 'react'
import {
  Container, 
  Row, 
  Col, 
  Button} 
from 'react-bootstrap'
import '../CSS/Home.css'
import Data from '../Data.json'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Container fluid style={{
        paddingTop:"25px",
      }}>
        <Row>
          <Col lg={6} xs={12} className="homeabout fontBold">
            <h2> Get insurance policy and save up to 40%</h2>
            <p className="fontRegular">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Button>Read More</Button>
          </Col>

          <Col lg={6} xs={12}className="text-center">
            <img src="/Images/family.png" alt="About_logo" width="75%"></img>
          </Col>
        </Row>
      </Container>

      <Container fluid className="fontBold">
        <Row>
          <Col className="insuranceheader text-center">
            <h2 className="">Choose your <br/>insurance</h2>
          </Col>
        </Row>

        <Row style={{
          maxWidth:"95%",
          margin:"auto",
        }}>
            {Data && Data.slice(0,6).map((value) =>{
              return(
                <>
                  <Col lg={4} key={value.id} className="insurancelist text-center">
                    <img src={value.image} height="187"/>
                    <h3>{value.name}</h3>
                    <p className="fontRegular">{value.summary}</p>
                  </Col>
                </>
              );
            })}
        </Row>

        <Row>
          <Col className="viewall text-center">
            <Link to={"/product"}>
              <Button>View All</Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col lg={6} xs={12}className="text-center">
            <img src="/Images/privilege.png" width="83%"></img>
          </Col>

          <Col lg={6} xs={12} className="privilegepart fontRegular">
            <h1 className="fontBold">Privilege For Joining Us.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <Row>
              <Col lg={1} xs={1}>
                <img src="/Images/protection.png" alt="protection.logo" width="95%"></img>
              </Col>
              <Col lg={11} xs={11}className="privilegedetail">
                <h5 className="fontBold">Excellent protection service</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since 1500s.
                </p>
              </Col>

              <Col lg={1} xs={1}>
                <img src="/Images/saving.png" alt="saving_logo" width="96%" height="65"></img>
              </Col>
              <Col lg={11} xs={11}className="privilegedetail">
                <h5 className="fontBold">Increase potential savings</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since 1500s.
                </p>
              </Col>

              <Col lg={1} xs={1}>
                <img src="/Images/clock.png" alt="clock_logo" width="93%"></img>
              </Col>
              <Col lg={11} xs={11}className="privilegedetail">
                <h5 className="fontBold">Full lifetime protection</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since 1500s.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home