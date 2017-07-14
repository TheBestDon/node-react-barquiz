import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Season extends Component {
  componentDidMount() {
    this.props.fetchGames(this.props.gameIds);
  }
    render() {
        return (
    <div>
       <div className="Season">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Season Description</h3>
          </div>
          <div className="panel-body">
            <div className="season-description">
              {this.props.description}
            </div>
          </div>
        </div>

         <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Games</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.props.gameIds.map(gameId =>
                <li key={gameId} className="list-group-item">
                   {this.props.lookupGame(gameId).venueName} 
                </li>
              )}
            </ul>
          </div>
        </div> 
        </div>

            <div className="home-link link"
             onClick={this.props.seasonListClick}>
          Season List
        </div>
        </div>
        );
    }
}

Season.propTypes = {
    description: PropTypes.string.isRequired,
    seasonListClick: PropTypes.func.isRequired,
    fetchGames: PropTypes.func.isRequired,
    gameIds: PropTypes.array.isRequired,
    lookupGame: PropTypes.func.isRequired
};

export default Season;