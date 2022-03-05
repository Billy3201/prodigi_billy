import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FiInstagram } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import '../CSS/Footer.css'

const Footer = () => {
  return (
    <>
        <Container fluid>
            <Row style={{
                paddingTop:"20px",
            }}>
                <Col lg={4} xs={4}>
                    <p style={{
                        maxWidth: "90%",
                        margin:"auto",
                    }}>Help</p>
                </Col>

                <Col lg={4} xs={4} className="text-center fontMedium">
                    <p style={{
                        display:'flex',
                        justifyContent:"center",
                        alignItems:"center",
                        marginBottom:"0",
                        marginTop:"5",
                    }}>© 2022 lyfeguard insurance</p>
                </Col>

                <Col lg={4} xs={4}className="footerright text-end">
                    <a href="https://www.instagram.com/">
                        <FiInstagram/>
                    </a>
                    <a href="https://www.whatsapp.com/">
                        <BsWhatsapp/>
                    </a>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer