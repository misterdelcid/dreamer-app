const postsDefaultState = [];

const sampleState = [
    {
        id: '1',
        title: 'Heavy Hand',
        description: 'Last night, I woke myself and everyone in the room up. I had a dream that my alarm clock was going off and I literally throw my arm to stop it. It ended up knocking everything on my nightstand over.',
        createdAt: '4/17/2020',
    },
    {
        id: '2',
        title: 'Sample Title 2',
        description: 'This is a sample description',
        createdAt: '4/16/2020',
    },
    {
        id: '3',
        title: 'Sample Title 3',
        description: 'This is a sample description',
        createdAt: '4/13/2020',
    }
];

const sampleState2 = [
    {
        id: '1',
        title: 'Sample Title1',
        description: 'Sample Description',
        createdAt: '4/13/2020',
    },
    {
        id: '2',
        title: 'Sample Title2',
        description: 'Sample Description',
        createdAt: '4/14/2020',
    },
    {
        id: '3',
        title: 'Sample Title3',
        description: 'Sample Description',
        createdAt: '4/15/2020',
    },
    {
        id: '4',
        title: 'Sample Title4',
        description: 'Sample Description',
        createdAt: '4/16/2020',
    },
    {
        id: '5',
        title: 'Sample Title5',
        description: 'Sample Description',
        createdAt: '4/17/2020',
    },
    {
        id: '6',
        title: 'Sample Title6',
        description: 'Sample Description',
        createdAt: '4/18/2020',
    },
    {
        id: '7',
        title: 'Sample Title7',
        description: 'Sample Description',
        createdAt: '4/19/2020',
    },
    {
        id: '8',
        title: 'Sample Title8',
        description: 'Sample Description',
        createdAt: '4/20/2020',
    },
    {
        id: '9',
        title: 'Sample Title9',
        description: 'Sample Description',
        createdAt: '4/21/2020',
    }
]

const postsReducer = (state = postsDefaultState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [
                action.post,
                ...state
            ]
        case 'REMOVE_POST':
            return state.filter(({id}) => id !== action.id)
        case 'EDIT_POST':
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        ...action.updates
                    }}
                else {
                    return post;
                }
            });
        case 'SET_POSTS':
            return action.posts;
        default:
            return state;
    }
};

export default postsReducer;