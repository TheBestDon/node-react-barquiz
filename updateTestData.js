import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  let seasonCount = 0;
  db.collection('seasons').find({}).each((err, season) => {
    assert.equal(null, err);
    if (!season) { return; }

    seasonCount++;
    db.collection('games')
      .find({ id: { $in: season.gameIds }})
      .project({ _id: 1 })
      .toArray()
      .then(_ids => {
        const newIds = _ids.map(o => o._id);
        db.collection('seasons').updateOne(
          { id: season.id },
          { $set: { gameIds: newIds } }
        ).then(() => {
          console.info('Updated', season._id);
          seasonCount--;
          if (seasonCount === 0) { db.close(); }
        });
      })
      .catch(console.error);
  });

});