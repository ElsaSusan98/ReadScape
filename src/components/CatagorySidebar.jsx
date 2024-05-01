import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';

const categories = [
    'All',
    'Drama',
    'Novels',
    'Recipe',
    'Fantasy',
    'Fiction',
    'Historical Fiction',
    'Music',
    'Mystery',
    'Poetry',
    'Psychology',
    'Romance',
    'Science Fiction',
    'Sports',
    'Thriller',
];

const Sidebar = ({ category, setCategory }) => {
    const handleCategoryClick = (cat) => {
        setCategory(cat === 'All' ? '' : cat);
    };

    return (
        <Col md={3}>
            <div className='sidebar sidebar_widget mb-5'>
                <div className='sidebar_inner'>
                    <span className='cat_heading'>Categories</span>
                    <ListGroup variant="flush">
                        {categories.map((cat, index) => (
                            <ListGroup.Item
                                key={index}
                                active={category === cat}
                                onClick={() => handleCategoryClick(cat)} // Updated onClick handler

                                className="border-0"
                            >
                                <span className='catagory-list'>{cat}</span>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            </div>
        </Col>
    );
};
export default Sidebar;
