# Build your app 🥽

## CountrySearch 🌍🌎🌏

CountrySearch is an application that is meant to search for countries and get countries for them in real-time. The
application is very simple. It only has one functionality: Search and show the countries in a table

### Requirements

- There should be one search input to input the name or partial name of a country
- There should be a button for search to initiate
- When the button is clicked, a list of cards shows the possible answers
- The list shows:
  - Flag
  - Name
  - Population
  - Capital
  - Link to the country's Wikipedia page "Open on Wikipedia" (https://en.wikipedia.org/wiki/<
    country_name>)
- The API for countries is: https://restcountries.com/
  - All countries: https://restcountries.com/v3.1/all
  - Specific country: https://restcountries.com/v3.1/name/{countryCode}
  - Specific list of countries: https://restcountries.com/v3.1/alpha?codes=ALB,BGR,GRC,UNK,SRB
- Read the API documentation to figure out how to call for the countries

### Extra requirements

Add three buttons on top of the list with the following functionality:

- Button 1: Get all countries in Europe
- Button 2: Get all countries that are neighbors of Macedonia
- Button 3: Get Macedonia
