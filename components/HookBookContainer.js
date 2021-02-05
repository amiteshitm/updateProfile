import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyBook } from '../redux'
function HookBookContainer() {
    const numberOfBooks = useSelector(state => state.numberOfBooks)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Hook container</h2>
            <h2>Number of books -{numberOfBooks}</h2>
            <button onClick={() => dispatch(buyBook())}>Buy Book</button>

        </div>
    )
}

export default HookBookContainer