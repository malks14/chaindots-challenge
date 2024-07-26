# City Forecast App - Chaindots Challenge

## Overview

The City Forecast App is a web application designed to help users search for cities worldwide and view detailed weather forecasts. Users can interact with the app to get current weather conditions and forecast data for their desired cities. Additionally, if a user logs in, they can save their favorite cities to a list, which is persisted in local storage. The app also allows users to view and manage their saved cities.

## Features

- **Search for Cities**: Users can search for any city worldwide to view its current weather and forecast.
- **Weather Forecast**: View detailed weather conditions including temperature, humidity, wind speed, and more.
- **User Authentication**: Users can log in to access additional features.
- **Favorite Cities**: Logged-in users can add cities to their favorite list.
- **Persistent Storage**: Favorite cities are saved in local storage and can be accessed even after the page is refreshed.
- **Manage Favorites**: Users can view all their saved cities and delete them from their favorites list.

## Stack
It was developed using React, Vitest for testing, Material-UI for components and Material-UI Icons for the different icons used.

## Installation

To get started with the City Forecast App locally, follow these steps:

1. **Clone the Repository**

   git clone https://github.com/malks14/chaindots-challenge.git

2. **Navigate to project directory and install dependencies**

    cd chaindots-challenge

    git npm install

3. **Create an .env file**
    Create a .env file in the root directory using the provided .env.example

    Open the .env file and add your API keys. You can obtain your API keys by signing up at [RapidAPI WeatherAPI](https://rapidapi.com/weatherapi/api/weatherapi-com).

    VITE_RAPIDAPI_KEY=your-rapidapi-key
    VITE_RAPIDAPI_HOST=your-rapidapi-host

4. **Run app**

    git run dev

5. **Authentication**

    User data can be found in public/users.json


Feel free to adjust the contact information, repository URL, or any other details to better fit your project.
