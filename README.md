<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML, CSS, and JavaScript Projects Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f4f7f6;
            color: #333;
            line-height: 1.6;
        }
        .container {
            max-width: 960px;
            margin: 40px auto;
            padding: 30px;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        h1, h2, h3 {
            color: #2c3e50;
            margin-bottom: 1rem;
            font-weight: 600;
        }
        h1 {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 2.5rem;
            color: #1a202c;
        }
        h2 {
            font-size: 1.8rem;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 0.5rem;
            margin-top: 2rem;
        }
        h3 {
            font-size: 1.4rem;
            margin-top: 1.5rem;
        }
        p {
            margin-bottom: 1rem;
        }
        ul {
            list-style-type: disc;
            margin-left: 20px;
            margin-bottom: 1rem;
        }
        ul li {
            margin-bottom: 0.5rem;
        }
        a {
            color: #3182ce;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        a:hover {
            color: #2b6cb0;
            text-decoration: underline;
        }
        .project-section {
            margin-bottom: 2.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px dashed #e2e8f0;
        }
        .project-section:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>HTML, CSS, and JavaScript Projects Portfolio</h1>

        <p>This repository showcases a collection of five diverse projects built using HTML, CSS, and JavaScript, demonstrating various web development skills including API integration, responsive design, animations, and basic game development.</p>

        <div class="project-section">
            <h2>1. Forkify Recipe App</h2>
            <p>This is a comprehensive recipe application where users can search for recipes using an external API. It implements a basic MVC (Model-View-Controller) architectural pattern.</p>
            <h3>Features:</h3>
            <ul>
                <li><strong>Recipe Search:</strong> Find recipes by searching for ingredients or dish names.</li>
                <li><strong>Bookmarks:</strong> Save your favorite recipes for quick access.</li>
                <li><strong>Custom Recipes:</strong> Add and manage your own unique recipes.</li>
                <li><strong>API Integration:</strong> Fetches recipe data from a public API.</li>
            </ul>
            <p><strong>Live Demo:</strong> <a href="https://bhranti0302.github.io/HTML-CSS-and-JavaScript-Projects/forkify-recipe-app-master/" target="_blank">Forkify Live Link Here</a></p>
        </div>

        <div class="project-section">
            <h2>2. Pig Game</h2>
            <p>A simple, classic "Pig Game" implemented with JavaScript. It's a dice game where two players race to reach 100 points.</p>
            <h3>Features:</h3>
            <ul>
                <li>Two-player turn-based gameplay.</li>
                <li>Roll dice to accumulate points.</li>
                <li>Hold points to pass turn.</li>
                <li>Lose current turn points if a 1 is rolled.</li>
            </ul>
            <p><strong>Live Demo:</strong> <a href="https://bhranti0302.github.io/HTML-CSS-and-JavaScript-Projects/pig-game-master/" target="_blank">Pig Game Live Link Here</a></p>
        </div>

        <div class="project-section">
            <h2>3. Responsive Car Project</h2>
            <p>A modern, one-page website designed for a car showcase. It features a fully responsive layout that adapts to various screen sizes and includes scroll animations for an enhanced user experience.</p>
            <h3>Features:</h3>
            <ul>
                <li>Single-page design.</li>
                <li>Responsive layout for mobile, tablet, and desktop.</li>
                <li>ScrollReveal.js for smooth scroll animations.</li>
                <li>Clean and appealing UI/UX.</li>
            </ul>
            <p><strong>Live Demo:</strong> <a href="https://bhranti0302.github.io/HTML-CSS-and-JavaScript-Projects/responsive-car-website-main/" target="_blank">Responsive Car Project Live Link Here</a></p>
        </div>

        <div class="project-section">
            <h2>4. Responsive Coffee Website</h2>
            <p>A sleek, one-page website for a coffee shop, designed with responsiveness and engaging animations in mind.</p>
            <h3>Features:</h3>
            <ul>
                <li>Single-page layout.</li>
                <li>Fully responsive across devices.</li>
                <li>Dynamic animations using ScrollReveal.js.</li>
                <li>Modern and inviting design.</li>
            </ul>
            <p><strong>Live Demo:</strong> <a href="https://bhranti0302.github.io/HTML-CSS-and-JavaScript-Projects/responsive-coffee-website-main/" target="_blank">Responsive Coffee Website Live Link Here</a></p>
        </div>

        <div class="project-section">
            <h2>5. Responsive Pizza App</h2>
            <p>A vibrant, one-page website for a pizza ordering concept, complete with responsive design and interactive scroll animations.</p>
            <h3>Features:</h3>
            <ul>
                <li>One-page website structure.</li>
                <li>Adapts seamlessly to different screen sizes.</li>
                <li>Utilizes ScrollReveal.js for interactive scrolling effects.</li>
                <li>Visually appealing design for a food service.</li>
            </ul>
            <p><strong>Live Demo:</strong> <a href="https://bhranti0302.github.io/HTML-CSS-and-JavaScript-Projects/responsive-pizza-website-main%20(2)/" target="_blank">Responsive Pizza App Live Link Here</a></p>
        </div>

        <p class="text-sm text-gray-600 mt-8"><strong>Note:</strong> The live demo links provided above are placeholders assuming you will host these projects using GitHub Pages. Once your repository is public and GitHub Pages is set up for each project (by ensuring each project's <code>index.html</code> is at the root of its respective subfolder), you can update these links to the actual live URLs. Remember that your GitHub Pages URL will typically follow the format <code>https://yourusername.github.io/your-repository-name/your-project-folder/</code>.</p>
    </div>
</body>
</html>
