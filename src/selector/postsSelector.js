

const getVisiblePosts = (posts, {text, sortBy}) => {
    return posts.filter(post => {
        const textMatch = post.title.toLowerCase().includes(text.toLowerCase()) || post.description.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    })
    .sort((a, b) => {
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? -1: 1
        }
    })
}

export default getVisiblePosts