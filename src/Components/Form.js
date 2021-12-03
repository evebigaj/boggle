import {React} from 'react'

const Form = (props) => {

    return <>
    <form id="form" onSubmit={props.onSubmit}>
      <label htmlFor="word">Enter Word: </label> <br/>
      <input type="text" id="word" value={props.word} 
      onChange = {props.handleChange} autocomplete="off"></input> <br/>
      <input type="submit" value="submit" id="submit"></input>
    </form>
    </>
}

export default Form