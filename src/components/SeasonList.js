import React from 'react';
import PropTypes from 'prop-types';
import SeasonPreview from './SeasonPreview';


const SeasonList = ({seasons, onSeasonClick}) => {
    return (
            <div className="SeasonList">
                {Object.keys(seasons).map(seasonId => 
                  <SeasonPreview key={seasonId} 
                  onClick={onSeasonClick}
                  {...seasons[seasonId]} />
                )}
            </div>
    );
};

SeasonList.propTypes = {
    seasons: PropTypes.object,
    onSeasonClick: PropTypes.func.isRequired
};

export default SeasonList;