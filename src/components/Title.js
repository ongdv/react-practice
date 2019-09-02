import React from 'react'

const Title = (props) => {
    const { value, onClick } = props;
    return (
        <div>
            <h1 onClick={() => onClick(value)}>{props.value}</h1>
        </div>
    )
}

Title.defaultProps = {
    value: "Loading..."
}

export default Title
