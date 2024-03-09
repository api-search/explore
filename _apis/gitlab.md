---
name: GitLab
description: >-
  GitLab Inc. is an open-core company that operates GitLab, a DevOps software
  package that can develop, secure, and operate software.[9] The open source
  software project was created by Ukrainian developer Dmytro Zaporozhets and
  Dutch developer Sytse Sijbrandij.[10] In 2018, GitLab Inc. was considered to
  be the first partly-Ukrainian unicorn. Since its founding, GitLab Inc. has
  promoted remote work,[13] and is known as one of the largest all-remote
  companies in the world.[14] GitLab has an estimated 30 million registered
  users, with 1 million being active licensed users.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/gitlab.yml
created: 2023/11/10
modified: 2023/11/10
specificationVersion: '0.16'
tags:
  - APIs
  - Code
  - DevOps
  - Repositories
apis:
  - name: GitLab REST API
    description: >+
      The REST APIs have been around for a longer time compared to GraphQL APIs,
      which may make them more familiar to some developers. It is often a good
      choice for developers who are more comfortable with traditional API
      architecture.

    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.gitlab.com/ee/api/rest/index.html
    baseURL: https://api.example.com
    tags:
      - APIs
      - Code
      - DevOps
      - Repositories
    properties:
      - type: OpenAPI
        url: https://docs.gitlab.com/ee/api/rest/index.html
      - type: OpenAPI
        url: properties/gitlab-openapi-original.yaml
      - type: OpenAPI
        url: https://docs.gitlab.com/ee/api/rest/index.html#authentication
      - type: OpenAPI
        url: https://docs.gitlab.com/ee/api/rest/index.html#status-codes
      - type: OpenAPI
        url: https://docs.gitlab.com/ee/api/rest/index.html#third-party-clients
      - type: OpenAPI
        url: https://docs.gitlab.com/ee/api/rest/index.html#rate-limits
    overlays:
      - type: APIs.io Search
        url: overlays/gitlab-openapi-original.yaml-openapi-search.yml
  - name: GitLab GraphQL API
    description: >-
      GraphQL is a query language for APIs. You can use it to request the exact
      data you need, and therefore limit the number of requests you need.
      GraphQL data is arranged in types, so your client can use client-side
      GraphQL libraries to consume the API and avoid manual parsing. There are
      no fixed endpoints and no data model, so you can add to the API without
      creating breaking changes. This enables us to have a versionless API.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.gitlab.com/ee/api/graphql/
    baseURL: https://api.example.com
    tags:
      - APIs
      - Code
      - DevOps
      - Repositories
    properties:
      - type: OpenAPI
        url: https://docs.gitlab.com/ee/api/graphql/
      - type: OpenAPI
        url: >-
          https://docs.gitlab.com/ee/api/graphql/#deprecation-and-removal-process
      - type: OpenAPI
        url: >-
          https://docs.gitlab.com/ee/api/graphql/#deprecation-and-removal-process
      - type: OpenAPI
        url: https://docs.gitlab.com/ee/api/graphql/#limits
    overlays: []
common:
  - type: Terms of Service
    url: https://about.gitlab.com/terms/
  - type: Privacy Policy
    url: https://about.gitlab.com/privacy/
  - type: Contact
    url: https://about.gitlab.com/company/contact/
  - type: IDE
    url: https://docs.gitlab.com/ee/editor_extensions/
  - type: Whats New
    url: https://about.gitlab.com/releases/categories/releases/
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---