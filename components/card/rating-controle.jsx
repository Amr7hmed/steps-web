import React from 'react';
import Rating from 'react-rating';


function RatingControle() {
    return (
        <>

            <Rating
                readonly={true}
                placeholderRating={3.5}
                emptySymbol={
                    <img src="/assets/icons/star-gary.png" className="star" />
                }
                placeholderSymbol={
                    <img src="/assets/icons/star.png" className="star" />
                }
                fullSymbol={
                    <img src="/assets/icons/star-yelow-gray.png" className="star" />
                }
            />
        </>
    )
}

export default RatingControle