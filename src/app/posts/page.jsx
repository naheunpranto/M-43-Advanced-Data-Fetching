 
// const getPosts = async () => {
//     const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return data.json();
// }



// const getPosts = async () => {
//     try{
//         const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//         return data.json();
//     }
//     catch(err){
//         throw new Error ('Failed to fetch posts')
//     }
// }


const getPosts = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");

    if(!data.ok){
        throw new Error('Failed to fetch posts')
    }

    return data.json();
}


const PostsPage = async () => {
    // const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const posts = await data.json();

    const posts = await getPosts();


    return (
        <div>
            <h2>Posts are coming soon: {posts.length}</h2>
        </div>
    );
};

export default PostsPage;