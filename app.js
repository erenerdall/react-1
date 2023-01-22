import axios from "axios"


// export default async function getData(number) {
//     const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + number)

//     const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + number)

//     console.log("user", user)
//     console.log("posts: ", post)

// }
// getData(1);

const getUser=(number)=>{
    return new Promise(async (success,unsucces)=>{
        const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/" + number)
        success(user)
    })
}
const getPost=(number)=>{
    return new Promise(async(success,unsucces)=>{
        const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + number)
        success(post)
    })
}

// async function getData(number){
//     await getUser(number).then(data => console.log(data)).catch(e=>console.log(e))
//     await getPost(number).then(data=>console.log(data)).catch(e=>console.log(e));
// }

// (async()=>{
//     try{
//         const users=await getUser(1);
//         const posts=await getPost(1);
//         console.log(users)
//         console.log(posts)
//     }catch(e){
//         console.log(e)
//     }
// })();

Promise.all([getUser(1),getPost(1)]).then(console.log).catch(console.log);