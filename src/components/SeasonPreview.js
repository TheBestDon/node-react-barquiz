import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SeasonPreview extends Component {
    handleClick = () => {
        this.props.onClick(this.props.id);
    };
    render() {
        return ( <div className = "link SeasonPreview"
            onClick = { this.handleClick.bind(this) } >
            <div className = "season-name" > 
            { this.props.seasonName } 
            
             <div className = "host-name" > 
                 { this.props.hostName } 
             </div> 
             </div>
            </div >
        );
    }
}

SeasonPreview.propTypes = {
    id: PropTypes.number.isRequired,
    hostName: PropTypes.string.isRequired,
    seasonName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SeasonPreview;