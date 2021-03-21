import React, { Component } from 'react'
import Header from '../Header/Header'
import SearchBox from '../SearchBox/SearchBox'
import './App.css'
// const App = () => {
//     return <h1> this is fun component</h1>
// }

class App extends React.Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         headertext: "name it ",
    //     }
    // }
    state = {
        headertext: "Name It !",
        headerExpanded: true
    }

    handleInputChange = (inputText) => {
        // alert('i am called :' + inputText);
        console.log(inputText);
        // this.setState({ headerExpanded: inputText.length > 0 ? false : true });
        // this.setState({ headerExpanded: !(inputText.length > 0) });
        this.setState({ headerExpanded: !inputText })
    }
    
    render() {
        return (
            <div>
                <Header
                    headTitle={this.state.headertext}
                    headerExpanded={this.state.headerExpanded}
                />
                <SearchBox onInputChange={this.handleInputChange} />
            </div >
        )
    }
}
export default App;

//state: data save for future
//prop: data used to communicate b/n parent and child