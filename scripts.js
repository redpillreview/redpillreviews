document.addEventListener("DOMContentLoaded", function () {
    const blogId = "286026449388250697"; // Your Blog ID
    const apiKey = "AIzaSyB8Ydjlg14S2-6xzlU15Gd0nQfwx_c6XMU"; // Your API Key (Update Later)
    const postContainer = document.getElementById("blog-posts");

    async function fetchPosts() {
        try {
            const response = await fetch(
                `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`
            );
            const data = await response.json();

            if (data.items) {
                postContainer.innerHTML = "";
                data.items.forEach((post) => {
                    const postElement = document.createElement("div");
                    postElement.classList.add("post");

                    postElement.innerHTML = `
                        <h2><a href="${post.url}" target="_blank">${post.title}</a></h2>
                        <p>${post.content.substring(0, 200)}...</p>
                        <a href="${post.url}" target="_blank">Read More</a>
                    `;

                    postContainer.appendChild(postElement);
                });
            } else {
                postContainer.innerHTML = "<p>No posts found.</p>";
            }
        } catch (error) {
            console.error("Error fetching blog posts:", error);
            postContainer.innerHTML = "<p>Failed to load posts.</p>";
        }
    }

    fetchPosts();
});
