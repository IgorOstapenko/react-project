import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props)
    return <h1>Hello {props.title}</h1>
}

const Text = () => {
    return (
        <>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                odit quas commodi sunt cumque error et. Magni, praesentium
                aspernatur perferendis rerum dolorum laudantium, perspiciatis
                corrupti unde laboriosam libero velit distinctio?
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                odit quas commodi sunt cumque error et. Magni, praesentium
                aspernatur perferendis rerum dolorum laudantium, perspiciatis
                corrupti unde laboriosam libero velit distinctio?
            </p>
        </>
    )
}

const App = () => {
    return (
        <>
            <Header title="React"/>
            <Header title="App.js"/>
            <Text />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
