import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Data from '../Data.json'
import '../CSS/ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const filteredid = Data.filter((Data) => Data.id === id);

  return (
    <>
      {filteredid.map(product =>{
        const {name, description, image, alt, id} = product;
        return(
          <>
            <Container fluid>
              <Row>
                <Col lg={12} className="detailheader text-center fontBold">
                  <h1>{name} Detail Page</h1>
                </Col>
              </Row>
            </Container>

            <Container fluid>
              <Row>
                <Col lg={6} className="text-center">
                  <img src={image} alt={alt}/>
                </Col>

                <Col lg={6} key={id} className="pagedetail fontBold">
                  <h1 className="text-center">{name}</h1>
                  <p className="fontRegular">{description}</p>
                  <Button> Join Now </Button>
                </Col>
              </Row>
            </Container>

            
            <Container fluid>
              <Row className="detailheader text-center fontBold">
                <Col lg={12}>
                  <h1>Insurance Policy</h1>
                </Col>
              </Row>
            </Container>

            <Container fluid>
              <Row className="fontRegular">
                <Col lg={6} className="detailheader">
                  <p>
                    Kondisi: Baru <br/>
                    Berat: 1.000 Gram <br/>
                    Kategori: Speaker <br/>
                    Etalase: Semua Etalase <br/>
                    Speaker Karaoke Bass Box Fleco F-416 / F-417 <br/>
                    Desain terkini untuk suara musik premium <br/><br/>

                    Spesifikasi : <br/>
                    Ukuran Speaker : 4 Inch <br/>
                    Daya Keluar : 5 Watt <br/>
                    Respon Frekuensi : 45hz - 18khz <br/>
                    S?N : 50db <br/>
                    Produk : 1 SET <br/>
                    Baterai : 1200 mAh <br/>
                    Voltase : DCSV <br/>
                    Berat : 0.6 KG <br/>
                    Warna : Hitam <br/>
                  </p>
                </Col>

                <Col lg={6} className="detailheader">
                  <p>
                    Kondisi: Baru <br/>
                    Berat: 1.000 Gram <br/>
                    Kategori: Speaker <br/>
                    Etalase: Semua Etalase <br/>
                    Speaker Karaoke Bass Box Fleco F-416 / F-417 <br/>
                    Desain terkini untuk suara musik premium <br/><br/>

                    Spesifikasi : <br/>
                    Ukuran Speaker : 4 Inch <br/>
                    Daya Keluar : 5 Watt <br/>
                    Respon Frekuensi : 45hz - 18khz <br/>
                    S?N : 50db <br/>
                    Produk : 1 SET <br/>
                    Baterai : 1200 mAh <br/>
                    Voltase : DCSV <br/>
                    Berat : 0.6 KG <br/>
                    Warna : Hitam <br/>
                  </p>
                </Col>
              </Row>
            </Container>
          </>

        )
      })}
    </>
  )
}

export default ProductDetail