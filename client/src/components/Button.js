import React from 'react'
import PropTypes from "prop-types";

const Button = (props) => {
    const onClick = () => {
        // console.log('clicked')
        props.onClick()
    }
    return <button onClick={onClick} className='btn' style={style(props.color)}>{props.text}</button>
}

const style = (color) => {
    return {
        backgroundColor: color
    }
}

Button.defaultProps = {
    color: 'black',
    text: 'button'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired

}

export default Button