import React from 'react'
import Button from './Button'

const CheckButton = ({toggleCheck, taskID, checked}) => {

    return (
        <Button onClick={() => toggleCheck(taskID)} text={checked ? '👌' : '👎'}/>
    )
}

export default CheckButton