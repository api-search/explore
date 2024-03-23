---
name: SportsData
description: >-
  SportsDataIO is an award-winning sports data and content provider producing
  millions of data points across thousands of games annually. We license our
  products through robust APIs, responsive widgets & visualizations, and
  predictive engines. Our mission is to produce the most accurate information
  distributed in real-time via enterprise-grade products, in easy-to-use formats
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/sportsdata.yml
created: 2023/11/15
modified: 2023/11/15
specificationVersion: '0.16'
tags:
  - Sports
  - Games
apis:
  - name: NFL API
    description: >-
      This is the documentation for our NFL API. To get a more comprehensive
      understanding of what feeds we have to offer and the data points we
      deliver via our endpoints, we encourage you to explore the following
      resources:
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://sportsdata.io/developers/api-documentation/nfl
    baseURL: https://api.example.com
    tags:
      - NFL
      - Sports
    properties:
      - type: OpenAPI
        url: https://sportsdata.io/developers/api-documentation/nfl
    overlays: []
    aid: sportsdata:nfl-api
  - name: MLB API
    description: >-
      This is the documentation for our MLB API. To get a more comprehensive
      understanding of what feeds we have to offer and the data points we
      deliver via our endpoints, we encourage you to explore the following
      resources:
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://sportsdata.io/developers/api-documentation/mlb
    baseURL: https://api.example.com
    tags:
      - Sports
      - MLB
    properties:
      - type: OpenAPI
        url: https://sportsdata.io/developers/api-documentation/mlb
    overlays: []
    aid: sportsdata:mlb-api
  - name: NBA API
    description: >
      This is the documentation for our NBA API. To get a more comprehensive
      understanding of what feeds we have to offer and the data points we
      deliver via our endpoints, we encourage you to explore the following
      resources:
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://sportsdata.io/developers/api-documentation/nba
    baseURL: https://api.example.com
    tags:
      - Sports
      - NBA
    properties:
      - type: OpenAPI
        url: https://sportsdata.io/developers/api-documentation/nba
    overlays: []
    aid: sportsdata:nba-api
  - name: NHL API
    description: >-
      This is the documentation for our NHL API. To get a more comprehensive
      understanding of what feeds we have to offer and the data points we
      deliver via our endpoints, we encourage you to explore the following
      resources:
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://sportsdata.io/developers/api-documentation/nhl
    baseURL: https://api.example.com
    tags:
      - Sports
      - NHL
    properties:
      - type: OpenAPI
        url: https://sportsdata.io/developers/api-documentation/nhl
    overlays: []
    aid: sportsdata:nhl-api
common:
  - type: Getting Started
    url: https://sportsdata.io/developers
  - type: Widgets
    url: https://sportsdata.io/developers/widgets-guide
  - type: FAQ
    url: https://sportsdata.io/developers/faq
  - type: Blog
    url: https://sportsdata.io/articles
  - type: Contact
    url: https://sportsdata.io/contact-us
  - type: Terms of Service
    url: https://sportsdata.io/terms-of-service
  - type: Privacy Policy
    url: https://sportsdata.io/privacy-policy
  - type: Swagger
    url: https://sportsdata.io/downloads/swagger/fantasydata-swagger.zip
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: sportsdata
---