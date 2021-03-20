import React, { Component } from 'react'
import Header from '../Header/Header'
import './App.css'
// const App = () => {
//     return <h1> this is fun component</h1>
// }

class App extends React.Component {
    state = {
        headertext: "Name It !"
    }
    render() {
        return (
            <div>
                <Header headTitle={this.state.headertext} />
            </div >
        )
    }
}
export default App;

//state: data save for future
//prop: data used to communicate b/n parent and child