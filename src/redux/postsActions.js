import database from '../firebase/firebase'

//Add Post
export const addPost = (post) => ({
    type: 'ADD_POST',
    post
});

//Start Adding a Post
export const startAddPost = (postData = {}) => {
    return((dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            title = '',
            description = '',
            createdAt = '',
        } = postData
        const post = {title, description, createdAt}

        database.ref(`users/${uid}/posts`).push(post).then(ref => {
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
    return((dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/posts/${id}`).remove().then(() => {
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
    return((dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/posts/${id}`).update(updates).then(() => {
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
    return ((dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/posts`).once('value').then(snapshot => {
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
