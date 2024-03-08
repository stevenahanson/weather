# Weather Widget

This is a simple weather application that displays current weather information based on location using the OpenWeatherMap API.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/stevenahanson/weather.git
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

This app fetches weather data based on the user's location and displays it in a visually appealing format. Currently, it's retrieving a hardcoded location based on what is contained in the weather API.

The main components of the app are:

- **WeatherWidget**: This component displays the weather information including city, country, description, and temperature.
- **WeatherData**: This component handles fetching weather data from the OpenWeatherMap API. Missing tests. Can be placed into a utils folder.

## Packages Used

- React Spinners (loading symbol)
- Weather-icons 

## Credits

This app was created by Steven Hanson.
