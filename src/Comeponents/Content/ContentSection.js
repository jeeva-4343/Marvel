import React, { useState, useEffect } from 'react';
import marvelData from './marvelData.json';
import marvel1 from '../../assets/antman-2.jpg';
import marvel2 from '../../assets/spiderman.jpg';
import marvel3 from '../../assets/female.jpg';
import marvel4 from '../../assets/hulk1.jpg';
import marvel5 from '../../assets/vision.png';
import marvel6 from '../../assets/vision.jpg';
import marvel7 from '../../assets/blue.png';
import { Container, Row, Col, Button } from 'react-bootstrap';

const imageMap = {
    "antman-2.jpg": marvel1,
    "spiderman.jpg": marvel2,
    "female.jpg": marvel3,
    "hulk1.jpg": marvel4,
    "vision.png": marvel5,
    "vision.jpg": marvel6,
    "blue.png": marvel7,
};

const ITEMS_PER_PAGE = 6;

const ContentSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(marvelData);
    }, []);

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <Container fluid style={{ marginTop: '450px',  padding: '5px',overflowX:'clip' }}>
            <div className="mx-auto">
                <Row className="g-4">
                    {currentItems.map(item => (
                        <Col key={item.id} xs={12} sm={6} md={4} style={{borderRadius:'5px'}}>
                            <div 
                                className="bg-gray-1000 text-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out" 
                                style={{ transform: 'scale(1)', transition: 'transform 0.3s ease',borderRadius:'5px' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <img
                                    src={imageMap[item.image]}
                                    alt={item.title}
                                    className="img-fluid"
                                    style={{ height: '300px', width: '100%',borderRadius:'5px'}}
                                />
                                <div className="p-1 text-center" style={{ backgroundColor: '#9e869b' }}>
                                    <h2 className="text-lg font-bold">{item.title}</h2>
                                    <p className="text-sm">{item.category}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="d-flex justify-content-between align-items-center mt-4">
                    <Button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        style={{ width: '80px' }}
                        className="bg-gray-700 text-white rounded disabled:opacity-50"
                    >
                        Previous
                    </Button>

                    <div className="d-flex mx-auto">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <Button
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-300'}`}
                            >
                                {index + 1}
                            </Button>
                        ))}
                    </div>

                    <Button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        style={{ width: '80px' }}
                        className="bg-gray-700 text-white rounded disabled:opacity-50"
                    >
                        Next
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default ContentSection;
