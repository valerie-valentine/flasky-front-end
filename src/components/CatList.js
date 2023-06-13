import React from 'react';
import Cat from './Cat';
import PropTypes from 'prop-types';

const Catlist = ({ catData }) => {
    const getCatListJSX = (cats) => {
        return cats.map((cat, i) => {
            return (
            <Cat 
                name={cat.name}
                caretaker={cat.caretaker}
                color={cat.color}
                personality={cat.name}
                key={i}
                />);
        });
    };

    return (
        <div>
            <h2>Cat List Size: {catData.length}</h2>
            <ul>
             {getCatListJSX(catData)}
            </ul>
        </div>
    );
};

Catlist.propTypes = {
    catData: PropTypes.arrayof(
        PropTypes.shape(
            {
                name:  PropTypes.string.isRequired,
                caretaker:  PropTypes.string.isRequired,
                color:  PropTypes.string.isRequired,
                personality:  PropTypes.string.isRequired,
            })
    ).isRequired,
};

export default Catlist;