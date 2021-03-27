import React, { Component } from 'react'
import Header from '../Header/Header'
import ResultsContainer from '../ResultsContainer/ResultsContainer'
import SearchBox from '../SearchBox/SearchBox'
import './App.css'
// const App = () => {
//     return <h1> this is fun component</h1>
// }

const name = require('@rstacruz/startup-name-generator');


class App extends React.Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         headertext: "name it ",
    //     }
    // }
    state = {
        headertext: "Name It !",
        headerExpanded: true,
        suggestednames: [],
    }

    handleInputChange = (inputText) => {
        // alert('i am called :' + inputText);
        // name(inputText);
        // console.log(name())
        // this.setState({ headerExpanded: inputText.length > 0 ? false : true });
        // this.setState({ headerExpanded: !(inputText.length > 0) });
        this.setState({ headerExpanded: !inputText, suggestednames: inputText ? name(inputText) : [] })
    }

    render() {
        // console.log(name('clouds'));
        return (
            <div>
                <Header
                    headTitle={this.state.headertext}
                    headerExpanded={this.state.headerExpanded}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestednames={this.state.suggestednames} />
            </div >
        )
    }
}
export default App;

//state: data save for future
//prop: data used to communicate b/n parent and child