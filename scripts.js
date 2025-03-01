document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-posts");
    const blogId = "286026449388250697";
    const apiKey = "AIzaSyB8Ydjlg14S2-6xzlU15Gd0nQfwx_c6XMU";
    const apiUrl = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.items) {
                blogContainer.innerHTML = ""; // Clear the loading text

                data.items.forEach(post => {
                    const postElement = document.createElement("div");
                    postElement.classList.add("blog-post");
                    
                    postElement.innerHTML = `
                        <h3><a href="${post.url}" target="_blank">${post.title}</a></h3>
                        <p>${post.content.substring(0, 150)}...</p> <!-- Show first 150 chars -->
                        <a href="${post.url}" target="_blank">Read More</a>
                        <hr>
                    `;

                    blogContainer.appendChild(postElement);
                });
            } else {
                blogContainer.innerHTML = "<p>No blog posts found.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching blog posts:", error);
            blogContainer.innerHTML = "<p>Error loading blog posts.</p>";
        });
});
