---
name: GitHub
description: >-
  GitHub is a platform and cloud-based service for software development and
  version control using Git, allowing developers to store and manage their code.
  It provides the distributed version control of Git plus access control, bug
  tracking, software feature requests, task management, continuous integration,
  and wikis for every project.[6] Headquartered in California, it has been a
  subsidiary of Microsoft since 2018.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/github.yml
created: 2023/11/10
modified: 2023/11/10
specificationVersion: '0.16'
tags:
  - APIs
  - Source Control
  - Repositories
  - Code
apis:
  - name: GitHub REST API
    description: >-
      To create integrations, retrieve data, and automate your workflows, build
      with the GitHub REST API. When you make a request to the REST API, you
      will specify an HTTP method and a path. Additionally, you might also
      specify request headers and path, query, or body parameters. The API will
      return the response status code, response headers, and potentially a
      response body.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.github.com/en/rest
    baseURL: https://api.example.com
    tags:
      - Source Control
      - Repositories
      - Code
    properties:
      - type: OpenAPI
        url: https://docs.github.com/en/rest?apiVersion=2022-11-28
      - type: OpenAPI
        url: properties/github-openapi-original.yml
      - type: OpenAPI
        url: >-
          https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api?apiVersion=2022-11-28
      - type: OpenAPI
        url: >-
          https://docs.github.com/en/rest/overview/authenticating-to-the-rest-api?apiVersion=2022-11-28
      - type: OpenAPI
        url: >-
          https://docs.github.com/en/rest/overview/rate-limits-for-the-rest-api?apiVersion=2022-11-28
      - type: OpenAPI
        url: >-
          https://docs.github.com/en/rest/overview/api-versions?apiVersion=2022-11-28
    overlays:
      - type: APIs.io Search
        url: overlays/github-openapi-search.yml
  - name: GitHub GraphQL API
    description: >+
      To create integrations, retrieve data, and automate your workflows, use
      the GitHub GraphQL API. The GitHub GraphQL API offers more precise and
      flexible queries than the GitHub REST API.

    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.github.com/en/graphql
    baseURL: https://api.example.com
    tags:
      - Source Control
      - Repositories
      - Code
    properties:
      - type: OpenAPI
        url: https://docs.github.com/en/graphql/overview/about-the-graphql-api
      - type: OpenAPI
        url: https://docs.github.com/en/graphql/overview/explorer
      - type: OpenAPI
        url: https://docs.github.com/en/graphql/overview/changelog
      - type: OpenAPI
        url: >-
          https://docs.github.com/en/graphql/overview/rate-limits-and-node-limits-for-the-graphql-api
    overlays: []
common:
  - type: WebHooks
    url: https://docs.github.com/en/webhooks
  - type: Getting Started
    url: https://docs.github.com/en/get-started
  - type: Authentication
    url: https://docs.github.com/en/authentication
  - type: Support
    url: https://docs.github.com/en/support
  - type: Education
    url: https://docs.github.com/en/education
  - type: Terms of Service
    url: >-
      https://docs.github.com/en/site-policy/github-terms/github-terms-of-service
  - type: Privacy Policy
    url: >-
      https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement
  - type: Status
    url: https://www.githubstatus.com/
  - type: Pricing
    url: https://github.com/pricing
  - type: Blog
    url: https://github.blog/
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---