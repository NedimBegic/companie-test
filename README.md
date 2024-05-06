<h1>Project README</h1>

  <h2>Live Page</h2>
  <p>The live page is hosted on Netlify. You can access it <a href="https://companie-test.netlify.app/">here</a>.</p>
  
  <img src="https://i.ibb.co/Wgv1rmQ/h.png" alt="Project Screenshot">

  <h2>Component Design Pattern</h2>
  <p>The project follows a component design pattern, structured as follows:</p>
  <ul>
    <li><strong>Pages:</strong> Pages that render into the App component.</li>
    <li><strong>Components:</strong> Components that render into pages.</li>
    <li><strong>SideComponents:</strong> Components that render into components.</li>
    <li><strong>Store folder:</strong> Where the context is used to manage global state.</li>
    <li><strong>Utils folder:</strong> Used to store types and options used in the app.</li>
  </ul>

  <h2>Overview</h2>
  <p>This project is a solution to a coding test provided by [Company Name]. It is a React application that allows users to browse top movies and TV shows, search for specific content, and view detailed information about individual movies or TV shows.</p>

  <h2>Features</h2>
  <ul>
    <li>When the app loads, the TV SHOWS tab is selected by default.</li>
    <li>Clicking on a tab loads the top 10 movies/TV shows depending on the selected tab.</li>
    <li>The search field is live and reacts to any change in the input field.</li>
    <li>The search fires a request on the search endpoint from TMDB and does not filter the top 10 results.</li>
    <li>The search is performed only when there are 3 or more characters in the search bar and is triggered only one second after the user has stopped typing.</li>
    <li>When there are fewer than 3 characters in the search bar, the content reverts back to the top 10 movies/TV shows.</li>
    <li>When the search is performed, results appear under the search box.</li>
    <li>Switching between tabs while searching triggers the search again with the same search term for the selected tab and updates the results.</li>
    <li>Clicking on a specific movie/TV show takes the user to the details view.</li>
    <li>The detailed view of the movie/TV show shows the cover image on top and, in the case of movies/TV shows with a trailer, shows the trailer video instead of the cover image.</li>
    <li>Below the image/trailer, some basic information regarding the selected movie/TV show is shown.</li>
    <li>The back button returns the user back to where they were and with the same state before clicking to see more information about a movie/TV show.</li>
  </ul>

  <h2>Technical Requirements</h2>
  <ul>
    <li>React version 16.8 or later is used.</li>
    <li>React Context is used for managing global state.</li>
    <li>React Router is used for routing.</li>
    <li>Axios is used for consuming RESTful APIs.</li>
    <li>TypeScript is used for type safety.</li>
    <li>Functional and stateful components, React Hooks, and proper HTML structure and CSS layout skills are showcased.</li>
  </ul>

  <h2>Notes</h2>
  <ul>
    <li>Due to a limitation with the TMDB API, the search for a single movie or TV show by ID was not working. As a workaround, the search was performed using the original name or original title.</li>
    <li>If an object doesn't have a cover image, a default one is used.</li>
    <li>I started to write tests, but I could not configure Jest with TypeScript and ECMAScript. This is the first time I tested TypeScript.</li>
    <li>To use the API, you must have a token and URL of the API in environmental variables.</li>
  </ul>

  <h2>Installation</h2>
  <ol>
    <li>Clone the repository: <code>git clone https://github.com/your-username/your-repository.git</code></li>
    <li>Change into the project directory: <code>cd your-repository</code></li>
    <li>Install dependencies: <code>npm install</code></li>
    <li>Start the development server: <code>npm start</code></li>
    <li>Open your web browser and go to <code>http://localhost:3000</code> to view the app</li>
  </ol>
