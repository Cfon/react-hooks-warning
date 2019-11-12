import React from 'react';
import classNames from 'classnames';
import './Stars.scss';

/**
 * @param {{disable: boolean}} props
 */
export const Star = props => {
    return (
        <span
            className={classNames('fa fa-star', {
                'fa-disabled': props.disable,
            })}
        />
    );
};

/**
 * @param {{disable: boolean}} props
 */
export const UnfilledStar = props => {
    return (
        <span
            className={classNames('fa fa-star-o', {
                'fa-disabled': props.disable,
            })}
        />
    );
};
