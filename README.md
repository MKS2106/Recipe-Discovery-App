# Recipe Discovery App
This is an application built using **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. This is bulit using TheMealDB API.  The application will allow users to browse recipes by category, search for specific recipes, view detailed recipe information, and manage a personal list of “favorite” recipes.

## Objective
- Implement state management, Custom Hooks, Global State with Context API, Data fetching and Routing
- Build components that render recipes in a home page, Filter Categories, provide funtionality to maintain a favrites list
- Provide search functionality.

# Your users should be able to:
- See/Browse all the recipes available
- Let users navigate to a specific category from home page and view recipes by category
- Let users to navigate to a particular recipe detail page from a category page
- Add a recipe to its favorite list/page, remove a recipe from favorite list
- Search for a recipe based on recipe name

## Project Structure
<pre>
recipe-discovery-app/
├── src/
│   ├── components/              
│   ├── context/                
│   │   └── FavoriteContext.jsx
│   ├── hooks/                   
│   │   ├── useFetch.jsx
│   │   └── useLocalStorage.jsx
│   ├── pages/                   
│   │   ├── CategoryPage.jsx
│   │   ├── RecipeDetailPage.jsx
│   │   ├── FavoritesPage.jsx
│   │   └── SearchResultPage.jsx
│   ├── App.jsx                  
│   └── main.jsx                 
├── package.json</pre>
  


## Pre-Requisite 
- Ensure you have a recent LTS (Long-Term Support) version of Node.js installed. Node.js includes npm (Node Package Manager). - You can verify your installation by opening your terminal or command prompt and running:
    " node -v "
    " npm -v "

- Ensure you have installed Tailwind for Vite'
- Ensure you have installed react router DOM(npm i react-router-dom)

## How to Run
1. Clone or download the project.
2. Navigate (cd) to the project folder
3. Install Dependencies run "npm install"
4. Start the development server by running "npm run dev"
5. Open the link in browser

## API Reference and Endpoints
 #### The following endpoints are available for use, but are only examples. You will need to explore the API documentation  and use the endpoints that best fit the needs of your application.
- List all categories: https://www.themealdb.com/api/json/v1/1/categories.php
- Filter by category: https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
- Lookup full recipe details by ID: https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
- Search meal by name: https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata


## Reflection:
#### The most Challenging Part:
- One of the most challenging aspects was implementing custom hooks and properly configuring the Context Provider — particularly wrapping the app's children with the FavoriteContext so the state could be accessed globally.
- I created reusable hooks like useFetch and useLocalStorage to avoid repeating state and effect logic, especially since API calls and local storage interactions occurred in multiple components. This helped keep the code clean, modular, and easy to test.
- Designing the routing and navigation flow also required careful planning. Since the app’s core features were clearly defined, I structured the pages and routes to follow a logical and intuitive user journey — from the homepage to category browsing, detailed recipe views, search, and favorites.






