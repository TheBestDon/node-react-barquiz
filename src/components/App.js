import React, { Component } from 'react';
import Header from './Header';
import SeasonList from './SeasonList';
import Season from './Season';
import * as api from '../api';
import PropTypes from 'prop-types';


const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

const onPopState = handler => {
    window.onpopstate = handler;
};


class App extends Component {
    static propTypes = {
        initialData: PropTypes.object.isRequired
    };

    state = this.props.initialData;
    

    
componentDidMount() {
    onPopState((event) => {
    this.setState({
        currentSeasonId: (event.state || {}).currentSeasonId
    });
});
    }

componentWillUnmount() {
        onPopState(null);
    }
    
fetchSeason = (seasonId) => {
        pushState(
            { currentSeasonId: seasonId },
            `/season/${seasonId}`
        );
         api.fetchSeason(seasonId).then(season => {
             this.setState({
                 currentSeasonId: season.id,
                 seasons: {
                     ...this.state.seasons,
                    [season.id]: season
                 }
             });
         });
    };
    fetchSeasonList = () => {
        pushState({ currentSeasonId: null },
            '/'
        );
        api.fetchSeasonList().then(seasons => {
            this.setState({
                currentSeasonId: null,
                seasons
            });
        });
    };

    fetchGames = (gameIds) => {
        if (gameIds.length === 0) {
            return;
        }
        api.fetchGames(gameIds).then(games => {
            this.setState({
                games
            });
        });
    };
    
    currentSeason() {
        return this.state.seasons[this.state.currentSeasonId];
    }

    pageHeader() {
        if (this.state.currentSeasonId) {
            return this.currentSeason().seasonName;
        }

        return 'PM games';
    }

    lookupGame = (gameId) => {
        if (!this.state.games || !this.state.games[gameId]) {
            return {
                game: 'Loading...'
            };
        }
        return this.state.games[gameId];
    };

    currentContent() {
        if (this.state.currentSeasonId) {
        return <Season 
                seasonListClick={this.fetchSeasonList}
                fetchGames = { this.fetchGames }
                lookupGame = { this.lookupGame }
                {...this.currentSeason()} />;
    }

        return  <SeasonList 
                    onSeasonClick = { this.fetchSeason } 
                    seasons={this.state.seasons} />
}
    render() {
        return ( 
          <div className = "App" >
            <Header message = { this.pageHeader() }/>
           {this.currentContent()}
            </div>
        );
    }
}

export default App;