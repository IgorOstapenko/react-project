import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
    return <h1>Hello App component</h1>
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
            <Header />
            <Text />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
