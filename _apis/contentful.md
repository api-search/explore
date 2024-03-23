---
name: Contenful
description: >-
  Contentful is content infrastructure. Our platform lets you create, manage and
  distribute content to any platform. Unlike a CMS, we give you total freedom to
  create your own content model so you can decide which content you want to
  manage.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/contentful.yml
created: 2023/11/20
modified: 2023/11/20
specificationVersion: '0.16'
tags:
  - Content
  - CMS
apis:
  - name: Contentful Content Delivery API
    description: >-
      The Content Delivery API (CDA), available at cdn.contentful.com, is a
      read-only API for delivering content from Contentful to apps, websites and
      other media. Content is delivered as JSON data, and images, videos and
      other media as files.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://www.contentful.com/developers/docs/references/content-delivery-api/
    baseURL: https://cdn.contentful.com
    tags:
      - Content
      - Delivery
    properties:
      - type: OpenAPI
        url: >-
          https://www.contentful.com/developers/docs/references/content-delivery-api/
    overlays: []
    aid: contenful:contentful-content-delivery-api
  - name: Contentful Content Management API
    description: >-
      Contentful's Content Management API (CMA) helps you manage content in your
      spaces. To learn more about how to model your content, read our modeling
      guide.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://www.contentful.com/developers/docs/references/content-management-api/
    baseURL: https://api.example.com
    tags:
      - Content
      - Management
    properties:
      - type: OpenAPI
        url: >-
          https://www.contentful.com/developers/docs/references/content-management-api/
    overlays: []
    aid: contenful:contentful-content-management-api
  - name: Contentful Preview API
    description: >-
      In addition to the Content Delivery API (CDA) for published content, is
      the Preview API for previewing both published and unpublished content. It
      maintains the same behaviour and parameters as the CDA, but delivers the
      latest drafts for entries and assets. The Content Preview API is used to
      display the latest version of an entry.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.contentful.com/developers/docs/references/content-preview-api/
    baseURL: https://api.example.com
    tags:
      - Content
      - Preview
    properties:
      - type: OpenAPI
        url: >-
          https://www.contentful.com/developers/docs/references/content-preview-api/
    overlays: []
    aid: contenful:contentful-preview-api
  - name: Contentful Images API
    description: >-
      The Contentful Images API allows the retrieval and manipulation of image
      files referenced from assets.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.contentful.com/developers/docs/references/images-api/
    baseURL: https://api.example.com
    tags:
      - Content
      - Images
    properties:
      - type: OpenAPI
        url: https://www.contentful.com/developers/docs/references/images-api/
    overlays: []
    aid: contenful:contentful-images-api
  - name: Contentful GraphQL Content API
    description: >-
      The GraphQL Content API provides a GraphQL API interface to the content
      from Contentful. Each Contentful space comes with a GraphQL schema based
      on its content model. This GraphQL schema is generated at request time and
      is always up-to-date with the current status of the space.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.contentful.com/developers/docs/references/graphql/
    baseURL: https://api.example.com
    tags:
      - Content
      - GraphQL
    properties:
      - type: OpenAPI
        url: https://www.contentful.com/developers/docs/references/graphql/
    overlays: []
    aid: contenful:contentful-graphql-content-api
  - name: Contentful User Management API
    description: >-
      Contentful's User Management API helps organizations programmatically
      manage their organizations, organization memberships, teams, space
      memberships and more.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.contentful.com/developers/docs/references/user-management-api/
    baseURL: https://api.example.com
    tags:
      - Content
      - Users
    properties:
      - type: OpenAPI
        url: >-
          https://www.contentful.com/developers/docs/references/user-management-api/
    overlays: []
    aid: contenful:contentful-user-management-api
  - name: Contentful SCIM API
    description: >-
      System for Cross-domain Identity Management, or SCIM, is an API
      specification created to facilitate the management of people and groups of
      people in cloud-based applications and services.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.contentful.com/developers/docs/references/scim-api/
    baseURL: https://api.example.com
    tags:
      - SCIM
      - Content
    properties:
      - type: OpenAPI
        url: https://www.contentful.com/developers/docs/references/scim-api/
    overlays: []
    aid: contenful:contentful-scim-api
common:
  - type: Portal
    url: https://www.contentful.com/developers/
  - type: Documentation
    url: https://www.contentful.com/developers/docs/
  - type: Change Log
    url: https://www.contentful.com/developers/changelog/
  - type: Blog
    url: https://www.contentful.com/blog/category/guides/
  - type: Plans
    url: https://www.contentful.com/pricing/
  - type: Sign Up
    url: https://www.contentful.com/sign-up/#small
  - type: Login
    url: https://be.contentful.com/login
  - type: Webhooks
    url: https://www.contentful.com/faq/webhooks/
  - type: Change Log
    url: https://www.contentful.com/developers/changelog/
  - type: Code of Conduct
    url: https://www.contentful.com/developers/code-of-conduct/
  - type: Support
    url: https://www.contentful.com/support/
  - type: Stack Overflow
    url: http://stackoverflow.com/questions/tagged/contentful?sort=newest
  - type: Security
    url: https://www.contentful.com/security/
  - type: Privacy Policy
    url: https://www.contentful.com/legal/privacy-at-contentful/privacy-notice/
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: contenful
---