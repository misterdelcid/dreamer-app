import database from '../firebase/firebase'

//Add Post
export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});

//Start Adding a Post
export const startAddPost = (postData = {}) => {
    return(dispatch => {
        const {
            title = '',
            description = '',
            createdAt = '',
        } = postData
        const post = {title, description, createdAt}

        database.ref('posts').push(post).then(ref => {
            dispatch(addPost({
                id: ref.key,
                ...post,
            }));
        });
    });
};

//Remove Post
export const removePost = ({id} = {}) => ({
    type: 'REMOVE_POST',
    id
});

//Start Removing a Post
export const startRemovePost =({id} = {}) => {
    return(dispatch => {
        database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost({ id }));
        });
    });
};

//Edit Post
export const editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates
});

//Start Editing a Post
export const startEditPost = (id, updates) => {
    return(dispatch => {
        return database.ref(`posts/${id}`).update(updates).then(() => {
            dispatch(editPost(id, updates));
        });
    });
};

//Set Posts
export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
});

//Start Getting & Setting Posts
export const startSetPosts = () => {
    return (dispatch => {
        return database.ref('posts').once('value').then(snapshot => {
            const posts = [];
            snapshot.forEach(childSnapshot => {
                posts.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setPosts(posts));
        });
    });
};
