import React from 'react';
import PropTypes from 'prop-types';
import style from '../css/Svg.scss';

export default function Svgani(props) {
    const Element = props.el;
    const className =
        `svg-container ${style.root}` +
        (props.className ? ` ${props.className}` : '');

    return (
        <Element
            style={props.style}
            className={className}
            dangerouslySetInnerHTML={{ __html: props.svg }}
        />
    );
}

Svgani.prpropTypes = {
    className: PropTypes.string,
    el: PropTypes.string.isRequired,
    style: PropTypes.object,
    svg: PropTypes.string.isRequired,
};

Svgani.defaultProps = {
    el: 'span',
};
