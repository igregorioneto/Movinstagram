import axios from 'axios';

// http://localhost:3001/posts -> postagens
// http://localhost:3001/comments -> comentários
// http://localhost:3001/likes -> curtidas
// http://localhost:3001/bestFriends -> melhores amigos

const getPosts = async () => {
    const resp = await axios.get('http://localhost:3001/posts');
    return resp.data;
}

const getComments = async () => {
    const resp = await axios.get('http://localhost:3001/comments');
    return resp.data;
}

const getLikes = async () => {
    const resp = await axios.get('http://localhost:3001/likes');
    return resp.data;
}

const getBestFriends = async () => {
    const resp = await axios.get('http://localhost:3001/bestFriends');
    return resp.data;
}

const postComments = async (id, comment, user, postId) => {
    try{
        await axios.post('http://localhost:3001/comments/',{
        id: id,
        comment: comment,
        user: user,
        postId: postId});
    }catch(e){
        console.log(e);
    }
    
}

export{
    getPosts,
    getComments,
    getLikes,
    getBestFriends,
    postComments
}
