document.addEventListener("DOMContentLoaded", function() {
    const blogFeedUrl = "https://redpillreviews.blogspot.com/feeds/posts/default?alt=json";
    const articlesContainer = document.getElementById("blog-posts");

    fetch(blogFeedUrl)
        .then(response => response.json())
        .then(data => {
            const posts = data.feed.entry.slice(0, 5); // Get latest 5 posts
            posts.forEach(post => {
                const title = post.title.$t;
                const link = post.link.find(l => l.rel === "alternate").href;
                const contentSnippet = post.content.$t.replace(/<[^>]+>/g, '').substring(0, 150) + "...";

                const articleDiv = document.createElement("div");
                articleDiv.classList.add("article");
                articleDiv.innerHTML = `
                    <h3>${title}</h3>
                    <p>${contentSnippet}</p>
                    <a href="${link}" class="read-more" target="_blank">Read More</a>
                `;
                articlesContainer.appendChild(articleDiv);
            });
        })
        .catch(error => console.error("Error fetching blog posts:", error));
});
