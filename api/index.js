import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
    assert.equal(null, err);

    mdb = db;
});

const router = express.Router();

router.get('/seasons', (req, res) => {
    let seasons = {}
    mdb.collection('seasons').find({})
        .project({
            id: 1,
            hostName: 1,
            seasonName: 1
        })
        .each((err, season) => {
            assert.equal(null, err);

        if(!season) {
            res.send({seasons});
            return;
        }
        seasons[season.id] = season;
        });
});

router.get('/games/:gameIds', (req, res) => {
    const gameIds = req.params.gameIds.split(',').map(Number);
    let games = {}
    mdb.collection('games').find({id: {$in: gameIds}})
         .project({
            id: 1,
            hostName: 1,
            venueName: 1,
            gameDate: 1
        })
        .each((err, game) => {
            assert.equal(null, err);

        if(!game) {
            res.send({games});
            return;
        }
        games[game.id] = game;
        });
});

router.get('/seasons/:seasonId', (req, res) => {
    mdb.collection('seasons')
        .findOne({id: Number(req.params.seasonId)})
        .then(season => res.send(season))
        .catch(console.error);
});

export default router;