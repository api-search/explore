---
name: Google
description: >-
  Google Cloud APIs are programmatic interfaces to Google Cloud Platform
  services. They are a key part of Google Cloud Platform, allowing you to easily
  add the power of everything from computing to networking to storage to
  machine-learning-based data analysis to your applications.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/google.json
created: 2023/11/8
modified: 2023/11/8
specificationVersion: '0.16'
tags:
  - APIs
  - Cloud
apis:
  - name: Google Cloud API Gateway
    description: >-
      API Gateway enables you to provide secure access to your backend services
      through a well-defined REST API that is consistent across all of your
      services, regardless of the service implementation. Clients consume your
      REST APIS to implement standalone apps for a mobile device or tablet,
      through apps running in a browser, or through any other type of app that
      can make a request to an HTTP endpoint. 
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://cloud.google.com/api-gateway/docs
    baseURL: https://api.example.com
    tags:
      - API Gateway
      - Cloud
    properties:
      - type: OpenAPI
        url: https://cloud.google.com/api-gateway/docs/reference/rest
      - type: OpenAPI
        url: >-
          https://api.apis.guru/v2/specs/googleapis.com/apigateway/v1alpha2/openapi.json
    contact:
      - FN: Cloud Gateway Support
        url: https://cloud.google.com/api-gateway/docs/support
        email: ''
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://api.apis.guru/v2/specs/googleapis.com/apigateway/v1alpha2/openapi.json-openapi-search.yml
    aid: google:google-cloud-api-gateway
  - name: Books API
    description: >-
      This document is intended for developers who want to write applications
      that can interact with the Google Books API. Google Books has a vision to
      digitize the world's books. You can use the Google Books API to search
      content, organize an authenticated user's personal library and modify it
      as well.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.google.com/books
    baseURL: https://api.example.com
    tags:
      - Books
    properties:
      - type: OpenAPI
        url: https://developers.google.com/books/docs/v1/using
      - type: OpenAPI
        url: https://api.apis.guru/v2/specs/googleapis.com/books/v1/openapi.json
      - type: OpenAPI
        url: https://developers.google.com/books/docs/v1/getting_started
    contact:
      - FN: Google Help
        url: https://support.google.com/
        email: ''
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://api.apis.guru/v2/specs/googleapis.com/books/v1/openapi.json-openapi-search.yml
    aid: google:books-api
common:
  - type: Google Cloud
    url: https://cloud.google.com
  - type: Developer Portal
    url: https://developers.google.com/
  - type: Blog
    url: https://googledevelopers.blogspot.com/
  - type: Console
    url: >-
      https://console.cloud.google.com/apis/dashboard?project=api-project-111046942866
  - type: LinkedIn
    url: https://www.linkedin.com/showcase/googledevelopers/
  - type: Events
    url: https://developers.google.com/events
  - type: Community
    url: https://developers.google.com/community
maintainers:
  - FN: API Evangelist
    url: https://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
aid: google
---