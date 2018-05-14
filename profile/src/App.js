import React, {Component} from 'react';
import MainSelectionView from './components/main-selection-view/main-selection-view';
import About from './components/about/about';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedView: null
        };
        this.onChangeNavigation = this.onChangeNavigation.bind(this);
    }

    onChangeNavigation(value) {
        this.setState({
            selectedView: value
        })
    }

    render() {
        const {selectedView} = this.state;
        return (
            <div className="App">
                <MainSelectionView onChangeNavigation={this.onChangeNavigation}/>
                <About selectedView={selectedView}/>
            </div>
        );
    }
}

export default App;
