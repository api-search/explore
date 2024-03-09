---
name: Amadeus
description: >-
  Leverage the full potential of travel data with Amadeus Travel APIs. Get
  instant access to over 400 airlines, 150,000 hotels, 300,000 tours &
  activities, and more. Whether you are a developer, a startup or a leading
  travel brand, Amadeus APIs enable you to play, innovate, create high-quality
  apps and deliver them to the market quickly.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/amadeus.yml
created: 2023/11/13
modified: 2023/11/13
specificationVersion: '0.16'
tags:
  - APIs
  - Travel
apis:
  - name: Amadeus Airport & City Search API
    description: >-
      The Airport & City Search API finds airports and cities that match a
      specific word or string of letters. Using this API, you can automatically
      suggest airports based on what the traveler enters in the search field.
      The API provides a list of airports/cities ordered by yearly passenger
      volume with the name, 3-letter IATA code, time zone and coordinates of
      each airport. 
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developers.amadeus.com/self-service/category/flights/api-doc/airport-and-city-search
    baseURL: https://api.example.com
    tags:
      - Aiports
      - Cities
    properties:
      - type: OpenAPI
        url: >-
          https://developers.amadeus.com/self-service/category/flights/api-doc/airport-and-city-search
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/amadeus4dev/amadeus-open-api-specification/main/spec/yaml/AirportCitySearch_v1_swagger_specification.yaml
      - type: OpenAPI
        url: https://example.com
    contact:
      - FN: Name
        url: http://example.com
        email: info@example.com
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/amadeus4dev/amadeus-open-api-specification/main/spec/yaml/AirportCitySearch_v1_swagger_specification.yaml-openapi-search.yml
  - name: Amadeus Flight Status API
    description: >-
      The Flight Status API provides real-time flight schedule data including
      up-to-date departure and arrival times, terminal and gate information,
      flight duration and real-time delay status. Help travelers track the live
      status of their flight and enjoy a stress-free trip.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developers.amadeus.com/self-service/category/flights/api-doc/on-demand-flight-status
    baseURL: https://api.example.com
    tags:
      - Airlines
      - Flights
      - Status
    properties:
      - type: OpenAPI
        url: >-
          https://developers.amadeus.com/self-service/category/flights/api-doc/on-demand-flight-status
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/amadeus4dev/amadeus-open-api-specification/main/spec/yaml/OnDemandFlightStatus_v2_swagger_specification.yaml
    contact:
      - FN: Name
        url: http://example.com
        email: info@example.com
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/amadeus4dev/amadeus-open-api-specification/main/spec/yaml/OnDemandFlightStatus_v2_swagger_specification.yaml-openapi-search.yml
  - name: Amadeus Airline Code Lookup API
    description: >-
      The Airline Code Lookup API lets you find the name of an airline by its
      IATA or ICAO airline code. You can search for multiple airline names by
      including various airline codes in the same request. 
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developers.amadeus.com/self-service/category/flights/api-doc/airline-code-lookup
    baseURL: https://api.example.com
    tags:
      - Airlines
    properties:
      - type: OpenAPI
        url: >-
          https://developers.amadeus.com/self-service/category/flights/api-doc/airline-code-lookup
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/amadeus4dev/amadeus-open-api-specification/main/spec/yaml/AirlineCodeLookUp_v1_swagger_specification.yaml
    contact:
      - FN: Name
        url: http://example.com
        email: info@example.com
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/amadeus4dev/amadeus-open-api-specification/main/spec/yaml/AirlineCodeLookUp_v1_swagger_specification.yaml-openapi-search.yml
common:
  - type: GitHub Repository
    url: https://github.com/amadeus4dev/amadeus-open-api-specification
  - type: Portal
    url: https://developers.amadeus.com/
  - type: SignUp
    url: https://developers.amadeus.com/register
  - type: Login
    url: https://developers.amadeus.com/signin
  - type: Blog
    url: https://developers.amadeus.com/blog
  - type: Support
    url: https://developers.amadeus.com/support
  - type: Getting Started
    url: >-
      https://developers.amadeus.com/get-started/get-started-with-self-service-apis-335
  - type: Privacy Policy
    url: https://developers.amadeus.com/legal/privacy-policy
  - type: Terms of Use
    url: https://developers.amadeus.com/legal/terms-of-use
  - type: Plan
    url: https://developers.amadeus.com/pricing
  - type: Contact
    url: https://developers.amadeus.com/support
  - type: FAQ
    url: https://developers.amadeus.com/support/faq/
  - type: Code
    url: https://amadeus4dev.github.io/developer-guides/examples/code-example/
  - type: Tutorials
    url: https://amadeus4dev.github.io/developer-guides/resources/
  - type: Videos
    url: https://www.youtube.com/@amadeusfordevelopers8592
  - type: Change Log
    url: https://developers.amadeus.com/self-service/apis-changelog
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---