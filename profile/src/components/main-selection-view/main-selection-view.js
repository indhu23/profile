import React from 'react';

class MainSelectionView extends React.Component {


    render() {
        const {onChangeNavigation} = this.props;
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <span className="d-block d-lg-none">Profile</span>
                        <span className="d-none d-lg-block">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.JPG"
                             alt=""/>
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="nav-link js-scroll-trigger hover" onClick={(e) => onChangeNavigation('about')}>About</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link js-scroll-trigger hover" onClick={(e) => onChangeNavigation('experience')}>Experience</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link js-scroll-trigger hover"  onClick={(e) => onChangeNavigation('education')}>Education</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link js-scroll-trigger hover" onClick={(e) => onChangeNavigation('skills')}>Skills</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link js-scroll-trigger hover" onClick={(e) => onChangeNavigation('interests')}>Interests</div>
                            </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default MainSelectionView;