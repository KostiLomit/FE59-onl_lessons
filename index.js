"use strict";
const postContainer = document.getElementById('post');
let userText = 0;
let userArray = [];
userInput();

    function userInput() {
        userText = window.prompt("What messages do you want to see (number)?", "3 7 15 23");
        userArray = userText.split(' ').map(item => parseInt(item, 10))
        
        if (userText === 0) {
            alert ('Try again')
            userInput();
        } else {
            renderPost(userArray);
        }
    }

    async function getPost(id) {
        try {
            const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                if (!result.ok) {
                    throw new Error(result.statusText);
                }
            const post = await result.json();
            return post;
        } catch (err) {
            console.error('Error', err);
            throw err;
        }
    }
    
    async function renderPost(array) {
        
        for ( const id of array) {
            try {
                const post = await getPost(id);
                createPost([post]);
        } catch (err) {
            console.error(`Error load post with id - ${id}`, err);
        }
    }
}

function createPost(data) {
    const container = document.getElementById('posts-container'); 
    data.forEach(post => {
        const { userId, id, title, body } = post;
        const postElement = `
        <div class="post-item" data-product-id="${id}">
            <div class="post-span">
                <span class="userId">${userId}</span>
                <span class="id">${id}</span>
            </div>
            <div class="meta">
                <h3 class="meta-title">${title}</h3>
                <p class="meta-body">${body}</p>
            </div>
        </div>
        `;
        postContainer.insertAdjacentHTML('beforeend', postElement);
    });
}

//Promise chaining

// function getPost(id) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then(result => {
//             if (!result.ok) {
//                 throw new Error(result.statusText);
//             }
//             return result.json();
//         })
//         .catch(err => {
//             console.error('Error', err);  
//             throw err;
//         });
// }

// function renderPosts(array) {
//     let promise = Promise.resolve();
    
//     array.forEach(id => {
//         promise = promise
//             .then(() => getPost(id))
//             .then(post => {
//                 const postElement = `
//                     <div class="post-item" data-product-id="${post.id}">
//                         <div class="post-span">
//                             <span class="userId">${post.userId}</span>
//                             <span class="id">${post.id}</span>
//                         </div>
//                         <div class="meta">
//                             <h3 class="meta-title">${post.title}</h3>
//                             <p class="meta-body">${post.body}</p>
//                         </div>
//                     </div>
//                 `;
//                 postContainer.insertAdjacentHTML('beforeend', postElement);
//             })
//             .catch(err => {
//                 console.error(`Error loading post with id - ${id}`, err);
//             });
//     });
    
//     return promise;
// }

// const postIds = [15, 23, 7, 3];
// renderPosts(postIds);