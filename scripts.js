/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #121212;
    color: #ffffff;
    text-align: center;
}

/* Header */
header {
    background: linear-gradient(135deg, #d32f2f, #880e4f);
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

#logo {
    font-size: 28px;
    cursor: pointer;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
}

nav ul li {
    display: inline;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease-in-out;
}

nav ul li a:hover {
    color: #ff5252;
}

/* Sections */
section {
    padding: 40px 20px;
    margin: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 10px rgba(255, 0, 0, 0.3);
}

h2 {
    color: #ff5252;
}

/* Blog Posts */
#blog-posts {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}

.blog-post {
    padding: 15px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 8px rgba(255, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
}

.blog-post:hover {
    transform: scale(1.05);
}

/* Footer */
footer {
    margin-top: 20px;
    padding: 20px;
    background: linear-gradient(135deg, #880e4f, #d32f2f);
    text-align: center;
}

.oracle {
    font-weight: bold;
    color: #ff5252;
    text-transform: uppercase;
}
