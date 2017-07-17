import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const getApiUrl = seasonId => {
    if (seasonId) {
        return `${config.serverUrl}/api/seasons/${seasonId}`;
    }
    return `${config.serverUrl}/api/seasons`;
};

const getInitialData = (seasonId, apiData) => {
    if (seasonId) {
        return {
            currentSeasonId: apiData._id,
            seasons: {
                [apiData._id]: apiData
            }
        };
    }
    return {
        seasons: apiData.seasons
    };
};

const serverRender = (seasonId) =>
  axios.get(getApiUrl(seasonId))
    .then(resp => {
      const initialData = getInitialData(seasonId, resp.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData
      };
    });

export default serverRender;