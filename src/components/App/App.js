import React, { Component } from 'react'
import Header from '../Header/Header'
import './App.css'
// const App = () => {
//     return <h1> this is fun component</h1>
// }

class App extends React.Component {
    state = {
        headertext: "hello world"
    }
    render() {
        return (
            <div>
                <Header />
                <h3>{this.state.headertext}</h3>
                <button onClick={() => {
                    this.setState({
                        headertext: "magic happened"
                    })
                }}>magic happens here</button>
            </div >
        )
    }
}
export default App;
