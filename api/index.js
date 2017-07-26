import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from './../config';
import _ from 'lodash';
import { mongoose } from './../db/mongoose';
import { User } from './../model/user';
import { authenticate } from './../middleware/authenticate';

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
            hostName: 1,
            seasonName: 1
        })
        .each((err, season) => {
            assert.equal(null, err);

        if(!season) {
            res.send({seasons});
            return;
        }
        seasons[season._id] = season;
        });
});

router.get('/games/:gameIds', (req, res) => {
    const gameIds = req.params.gameIds.split(',').map(ObjectID);
    let games = {}
    mdb.collection('games').find({_id: {$in: gameIds}})
         .project({
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
        games[game._id] = game;
        });
});

router.get('/seasons/:seasonId', (req, res) => {
    mdb.collection('seasons')
        .findOne({_id: ObjectID(req.params.seasonId)})
        .then(season => res.send(season))
        .catch(console.error);
});

router.post('/users', (req, res) => {
   var body = _.pick(req.body, ['email', 'password']);
   var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
      res.header('x-auth', token).send(user);
    }).catch((e) => {
    res.status(400).send(e);
  })
});

router.get('/users/me', authenticate, (req, res) => {
   res.send(req.user);
});

router.post('/users/login', (req, res) => {
       var body = _.pick(req.body, ['email', 'password']);

       User.findByCredentials(body.email, body.password).then((user) => {
        user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        })
       }).catch((e) => {
        res.status(400).send();
       });
});

export default router;