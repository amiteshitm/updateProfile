import React from 'react'
import { connect } from 'react-redux'
import { addToto } from '../../actions'
const AddTodo = (props) => {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            let input = event.target.userInput.value;
            // console.log(input)
            props.dispatch(addToto(input))
            event.target.userInput.value = ''
        }}>
            <input type='text' name='userInput' />
            <button>Submit</button>
        </form>
    )
}


export default connect()(AddTodo)