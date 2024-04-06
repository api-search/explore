---
name: HERE
description: >-
  As global mobility becomes increasingly connected, electrified and automated,
  HERE Technologies is leading the way to a safer, greener future. Our location
  platform is integrated into more than 160 million vehicles across the planet,
  using fresh and accurate data that we have been building for over 35 years –
  and continue to refresh daily. Our experience in mapmaking has made HERE one
  of the leading innovators in location technology and spatial intelligence.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/here.json
created: 2023/11/13
modified: 2023/11/13
specificationVersion: '0.16'
tags: []
apis:
  - name: HERE APIs
    description: >-
      RESTful web services that serve different purposes – from search, to
      geocoding, to routing. Whether you’re providing truck routing for fleets
      or navigating users through the city with different transport modes, HERE
      REST APIs provide you with everything you need to put location at the
      heart of your app: maps, weather information, batch geocoding,
      comprehensive routing and more. Additional advanced location features
      include geofencing (entry and exit notifications), custom and private
      roads, speed limits, traffic lights and road curvature.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.here.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.here.com/develop/rest-apis
      - type: OpenAPI
        url: https://fleet.ls.hereapi.com/v3/api-docs?apiKey=YOUR_API_KEY
    contact:
      - FN: Name
        url: http://example.com
        email: info@example.com
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://fleet.ls.hereapi.com/v3/api-docs?apiKey=YOUR_API_KEY-openapi-search.yml
    aid: here:here-apis
common:
  - type: SignUp
    url: https://platform.here.com/sign-up
  - type: SignIn
    url: https://platform.here.com/portal/
  - type: Plans
    url: https://www.here.com/get-started/pricing
  - type: Support
    url: https://developer.here.com/help
  - type: Tutorials
    url: https://developer.here.com/tutorials
  - type: Examples
    url: https://developer.here.com/examples
  - type: Blog
    url: https://www.here.com/company/blog?type=developer
  - type: Change Log
    url: https://developer.here.com/documentation/changelog/index.html
  - type: Newsletter
    url: https://developer.here.com/newsletter
  - type: Knowledge
    url: https://knowledge.here.com/csm_kb
  - type: Status
    url: https://status.here.com/status
  - type: Slack
    url: >-
      https://join.slack.com/t/heredev/shared_invite/zt-1tog8frbk-Y8KUaHhbYGtpFPgsmXl5Fw
  - type: Privacy Policy
    url: https://legal.here.com/privacy/policy
  - type: Terms of Service
    url: https://legal.here.com/terms/serviceterms
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: here
---