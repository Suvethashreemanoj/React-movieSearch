# React Movie Search App

A simple React application to search for movies and view popular movies using the TMDb API.

## Features

- Search for movies by title
- View popular movies on homepage
- Responsive movie card grid
- Add movies to favorites (UI only)
- Loading and error handling

## Technologies Used

- React
- TMDb API
- CSS (custom styling)
- Vite

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Suvethashreemanoj/React-movieSearch.git
   cd React-movieSearch/frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Add your TMDb API key in `src/services/api.js`:
   ```js
   const API_KEY = 'your_tmdb_api_key_here';
   ```

### Running the App

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── css/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License.
