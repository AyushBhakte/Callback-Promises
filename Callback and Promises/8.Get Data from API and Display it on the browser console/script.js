// Function to fetch and log posts
async function fetchAndLogPosts() {
    try {
        // Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Log the data to the console
        console.log(data);
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching data:', error);
    }
}

// Example usage
fetchAndLogPosts();
