import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
    assert.equal(null, err);

    db.collection('seasons').insertMany([{
            id: 1,
            seasonName: '2017 summer - Tuesday',
            hostName: 'Ina Aite',
            startDate: new Date('2017-06-01'),
            endDate: new Date('2017-08-31'),
            description: `
This product is a classroom tool that scaffolds higher order thinking. Its a collaborative strategy that using building bricks to help structure students ideas. Learners build knowledge structures with information (attached to different coloured bricks). Students desks are turned into workshops where they physically manipulate information into meaningful creations. They show sequences of information (like stories), rank information by importance and pretty much all other essential cognitive skills you need at school. The end result is clarity in thought and better collaborative conversations. I want this to be marketed as a sophisticated knowledge tool applicable to all ages and subjects. It gives students the cognitive edge, they get a little more 'RAM'!.

I want to continue with the construction/building theme as well as the mind/brain/learning theme. They need to be blended somehow. Teachers find it easier to talk about building/scaffolding analogies as its less abstract.
      `,
            gameIds: [101, 102]
        },
        {
            id: 2,
            seasonName: '2017 summer - Wendsday',
            hostName: 'Ina Aite',
            startDate: new Date('2017-06-02'),
            endDate: new Date('2017-08-31'),
            description: `
Educating people about sustainable food production
      `,
            gameIds: []
        },
        {
            id: 3,
            seasonName: '2017 summer - Thursday',
            hostName: 'Ina Aite',
            startDate: new Date('2017-06-03'),
            endDate: new Date('2017-08-31'),
            description: `
Data is created at every touch point in a notes life-cycle. Because of the volume of the data, it can be difficult to store, analyse and gain insight. Collecting, processing and analysing the data using big data technologies and displaying the results in an interactive display makes it easy to make informative decisions, overcome problem and plan for the future.

It works using big data technologies and displays the results in modern browsers, combining powerful visualisation components and a data-driven approach to interact with the data.

It enables you to analyse data that were not previously possible. The volume, variety, complexity of the analytical processing involved, and the responsiveness required are now achievable with the product. Gaining smarter decision making but also provide faster time to value.
    `,
            gameIds: [103, 104, 105]
        },
        {
            id: 4,
            seasonName: '2017 summer - Friday',
            hostName: 'Ina Aite',
            startDate: new Date('2017-06-04'),
            endDate: new Date('2017-08-31'),
            description: `
A list of free online programming books, categorized by languages/topics
    `,
            gameIds: []
        }
    ]).then(response => {
        console.info('Seasons', response.insertedCount);
        db.collection('games').insertMany([
            { id: 101, city: 'Vilnius', venueName: 'Juoda Raudona', gameDate: new Date('2017-06-17'), hostName: 'Ina Aite', results: [{ teamName: 'E621', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'No Name', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'O Maziukas', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'Dronas', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'Lavarel', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }] },
            { id: 102, city: 'Vilnius', venueName: 'Juoda Raudona', gameDate: new Date('2017-06-18'), hostName: 'Ina Aite', results: [{ teamName: 'E621', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'No Name', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'O Maziukas', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'Dronas', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'Lavarel', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }] },
            { id: 103, city: 'Vilnius', venueName: 'Grey', gameDate: new Date('2017-06-19'), hostName: 'Ina Aite', results: [{ teamName: 'E621', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'No Name', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'O Maziukas', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'Dronas', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'Lavarel', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }] },
            { id: 104, city: 'Vilnius', venueName: 'Tres Baracudos', gameDate: new Date('2017-06-20'), hostName: 'Ina Aite', results: [{ teamName: 'E621', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'No Name', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'O Maziukas', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'Dronas', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'Lavarel', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }] },
            { id: 105, city: 'Vilnius', venueName: 'Juoda Raudona', gameDate: new Date('2017-06-21'), hostName: 'Ina Aite', results: [{ teamName: 'E621', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'No Name', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'O Maziukas', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'Dronas', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'Lavarel', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }] },
            { id: 106, city: 'Kaunas', venueName: 'Cili', gameDate: new Date('2017-06-22'), hostName: 'Ina Aite', results: [{ teamName: 'E621', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'No Name', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'O Maziukas', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'Dronas', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }, { teamName: 'Lavarel', firstLeg: 5, secondLeg: 8, thirdLeg: 8, forthLeg: 4, fithLeg: 9, sixthLeg: 9 }] }
        ]).then(response => {
            console.info('Teams', response.insertedCount);
            db.collection('teams').insertMany([
                { teamName: 'E621', city: 'Vilnius', description: 'Labai gera komanda', picture: 'blob' },
                { teamName: 'No Name', city: 'Vilnius', description: 'Lievakai', picture: 'blob' },
                { teamName: 'O Maziukas', city: 'Vilnius', description: 'Visada laimi', picture: 'blob' },
                { teamName: 'Dronas', city: 'Vilnius', description: 'Tokios nera', picture: 'blob' },
                { teamName: 'Lavarel', city: 'Vilnius', description: 'Kazin ar tokie yra, bet turbut yra', picture: 'blob' },
                { teamName: '1X', city: 'Vilnius', description: 'Labai smaikstus', picture: 'blob' }
            ]).then(response => {
                console.info('Games', response.insertedCount);
                db.close();
            });
        });
    });
});