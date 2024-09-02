
async function getTodoAndPost() {
        // Fetch data from both APIs concurrently
        const [todoResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json()),
            fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => response.json()),]);


        // Combine the results into a single object
        const combinedResult = {
            todo: todoResponse,
            post: postResponse,
        };
        return combinedResult;
        
    }
    getTodoAndPost().then((data) =>  console.log(data));
