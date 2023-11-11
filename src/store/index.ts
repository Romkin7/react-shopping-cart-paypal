import { createStore } from 'redux';

const store = createStore(() => ({
    birds: [
        {
            name: 'robin',
            views: 1,
        },
    ],
}));

export default store;
