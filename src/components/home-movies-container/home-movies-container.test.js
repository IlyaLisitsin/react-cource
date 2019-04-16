import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux';

import createStore from '../../store'
import HomeMoviesContainer from './home-movies-container.component'

// const { context } = store;

const moviesCollection = [
    {
        'id': 284054,
        'title': 'Black Panther',
        'tagline': 'Long live the king',
        'vote_average': 7.3,
        'vote_count': 3788,
        'release_date': '2018-02-13',
        'poster_path': 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
        'overview': 'King T\'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country\'s new leader. However, T\'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T\'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \'special forces\'), and an American secret agent, to prevent Wakanda from being dragged into a world war.',
        'budget': 200000000,
        'revenue': 1245257672,
        'genres': [
            'Action',
            'Adventure',
            'Fantasy',
            'Science Fiction'
        ],
        'runtime': 134
    },
    {
        'id': 333339,
        'title': 'Ready Player One',
        'tagline': 'A better reality awaits.',
        'vote_average': 8.1,
        'vote_count': 617,
        'release_date': '2018-03-28',
        'poster_path': 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
        'overview': 'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',
        'budget': 175000000,
        'revenue': 0,
        'genres': [
            'Adventure',
            'Science Fiction',
            'Action'
        ],
        'runtime': 140
    },
    {
        'id': 338970,
        'title': 'Tomb Raider',
        'tagline': 'Her legend begins',
        'vote_average': 6.2,
        'vote_count': 817,
        'release_date': '2018-03-08',
        'poster_path': 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
        'overview': 'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.',
        'budget': 94000000,
        'revenue': 126025000,
        'genres': [
            'Action',
            'Adventure'
        ],
        'runtime': 118
    },
    {
        'id': 284053,
        'title': 'Thor: Ragnarok',
        'tagline': 'No Hammer. No Problem.',
        'vote_average': 7.4,
        'vote_count': 5349,
        'release_date': '2017-10-25',
        'poster_path': 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
        'overview': 'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
        'budget': 180000000,
        'revenue': 854229371,
        'genres': [
            'Action',
            'Adventure',
            'Fantasy'
        ],
        'runtime': 130
    }
];

const store = createStore();

describe('HomeMoviesContainer', () => {
    test('receive props correctly', () => {
        const wrapper = mount(
            <Provider store={store}>
                <HomeMoviesContainer moviesCollection={moviesCollection} />,
            </Provider>
            // { context }
        );

        expect(wrapper.props().children[0].props.moviesCollection).toEqual(moviesCollection);
    });
});