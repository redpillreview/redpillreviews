const blogFeedURL = "https://redpillreviews.blogspot.com/feeds/posts/default?alt=json";

async function fetchBlogPosts() {
    try {
        const response = await fetch(blogFeedURL);
        const data = await response.json();
        const posts = data.feed.entry;

        let articlesHTML = "";
        posts.forEach(post => {
            const title = post.title.$t;
            const link = post.link.find(l => l.rel === "alternate").href;
            const contentSnippet = post.summary?.$t || post.content.$t.substring(0, 150) + "...";

            articlesHTML += `
                <div class="article">
                    <h3>${title}</h3>
                    <p>${contentSnippet}</p>
                    <a href="${link}" class="read-more" target="_blank">Read More</a>
                </div>
            `;
        });

        document.querySelector(".articles-container").innerHTML = articlesHTML;
    } catch (error) {
        console.error("Error fetching blog posts:", error);
    }
}

fetchBlogPosts();
