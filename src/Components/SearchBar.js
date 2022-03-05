import React from 'react'
import Data from '../Data.json'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Container, Row, Col} from 'react-bootstrap'
import '../CSS/Searchbar.css'

const SearchBar = ({placeholder}) => {
    const [filteredData, setFilteredData] = useState([ ]);

    const handleFilter = (e) => {
        const searchWord= e.target.value;
        const newFilter = Data.filter((value) =>{
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        })
            console.log(newFilter)
            setFilteredData(newFilter)
    }
  return (
    <>
        <div className="searchInput text-center">
            <input
            type="text"
            placeholder={placeholder}
            onChange={handleFilter}
            />

            <Container fluid>
                <Row>
                    {(filteredData.length === 0 ? 
                    (
                        Data && Data.map((value)=>{
                            return <>
                                <Col lg={3}>
                                    <Link to={`/product/${value.id}`} className="searchResult">
                                        <Card className="productlist" key={value.id} >
                                            <img src={value.image} style={{
                                                width:"250px",
                                                height: "180px",
                                                margin: "auto",
                                            }}/>
                                            <Card.Body className="fontBold">
                                                <Card.Title>{value.name}</Card.Title>
                                                <Card.Text className="fontMedium">
                                                {value.summary}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            </>
                        })                  
                    ) : 
                    (
                        filteredData && filteredData.map((value)=>{
                            return <>
                                <Col lg={3}>
                                    <Link to={`/product/${value.id}`} className="searchResult">
                                        <Card className="productlist" key={value.id} >
                                            <img src={value.image} style={{
                                                width:"250px",
                                                height: "180px",
                                                margin: "auto",
                                            }}/>
                                            <Card.Body className="fontBold">
                                                <Card.Title>{value.name}</Card.Title>
                                                <Card.Text className="fontMedium">
                                                {value.summary}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            </>
                        })       
                    )
                    )}
 
                </Row>
            </Container>
        </div>
    </>
  )
}

export default SearchBar

