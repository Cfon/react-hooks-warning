import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { Star, UnfilledStar } from './Stars';

/**
 * @param {{defaultValue: number}} props
 * @param {{max: number}} props
 * @param {{reeadonly: boolean}} props
 * @param {{onRating: function}} props
 */
export const Rating = props => {
    const [rating, setRating] = useState(props.defaultValue);

    useEffect(() => {
        props.onRating(rating);
    }, [rating]);

    return (
        <div>
            {new Array(props.max).fill(0).map((_, index) => (
                <span
                    key={index}
                    onClick={
                        !props.readonly ? setRating.bind(null, index + 1) : null
                    }
                >
                    {index < rating ? (
                        <Star disable={props.readonly} />
                    ) : (
                        <UnfilledStar disable={props.readonly} />
                    )}
                </span>
            ))}
        </div>
    );
};

Rating.propTypes = {
    defaultValue: PropTypes.number,
    max: PropTypes.number,
    readonly: PropTypes.bool,
    onRating: PropTypes.func,
};

Rating.defaultProps = {
    defaultValue: 0,
    max: 5,
    readonly: false,
    onRating: () => {},
};
