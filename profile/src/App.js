import React, {Component} from 'react';
import MainSelectionView from './components/main-selection-view/main-selection-view';
import About from './components/about/about';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedView: null
        };
        this.onChangeNavigation = this.onChangeNavigation.bind(this);
    }

    onChangeNavigation(value) {
        // Closes responsive menu when a scroll trigger link is clicked
            $('.navbar-collapse').addClass('collapsed');
            $('.navbar-collapse').removeClass('show');
        this.setState({
            selectedView: value
        })
    }

    render() {
        const {selectedView} = this.state;
        return (
            <div>
                <MainSelectionView onChangeNavigation={this.onChangeNavigation}/>
                <About selectedView={selectedView}/>
            </div>
        );
    }
}

export default App;
