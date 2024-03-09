---
name: HubSpot
description: >-
  HubSpot is a leading CRM platform that provides software and support to help
  businesses grow better. Our platform includes marketing, sales, service, and
  website management products that start free and scale to meet our customers’
  needs at any stage of growth. Today, thousands of customers around the world
  use our powerful and easy-to-use tools and integrations to attract, engage,
  and delight customers.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/hubspot.yml
created: 2023/11/14
modified: 2023/11/14
specificationVersion: '0.16'
tags:
  - APIs
  - CRM
  - Content
apis:
  - name: HubSpot Domains API
    description: >-
      These endpoints allow you to return information about the domains
      connected to a particular HubSpot CMS site. You can return data for a list
      of domains or specify a domain by ID.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.hubspot.com/docs/api/overview
    baseURL: https://api.example.com
    tags:
      - Domains
      - CMS
    properties:
      - type: OpenAPI
        url: https://developers.hubspot.com/docs/api/cms/domains
      - type: OpenAPI
        url: https://api.hubspot.com/api-catalog-public/v1/apis/cms/v3/domains
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://api.hubspot.com/api-catalog-public/v1/apis/cms/v3/domains-openapi-search.yml
  - name: HubSpot Source Code API
    description: >-
      Endpoints for interacting with files in the CMS Developer File System.
      These files include HTML templates, CSS, JS, modules, and other assets
      which are used to create CMS content.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.hubspot.com/docs/api/cms/source-code
    baseURL: https://api.example.com
    tags:
      - CMS
      - Files
      - CSS
      - JavaScript
    properties:
      - type: OpenAPI
        url: https://developers.hubspot.com/docs/api/cms/source-code
      - type: OpenAPI
        url: https://api.hubspot.com/public/api/spec/v1/specs/cms/v3/source-code
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://api.hubspot.com/public/api/spec/v1/specs/cms/v3/source-code-openapi-search.yml
  - name: HubSpot Posts API
    description: >-
      Use these endpoints for interacting with Blog Posts, Blog Authors, and
      Blog Tags.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.hubspot.com/docs/api/cms/blog-post
    baseURL: https://api.example.com
    tags:
      - Content
      - Blogs
      - Authors
    properties:
      - type: OpenAPI
        url: https://developers.hubspot.com/docs/api/cms/blog-post
      - type: OpenAPI
        url: >-
          https://api.hubspot.com/api-catalog-public/v1/apis/cms/v3/blogs/blog-posts
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://api.hubspot.com/api-catalog-public/v1/apis/cms/v3/blogs/blog-posts-openapi-search.yml
  - name: HubSpot Authors API
    description: >-
      Use the blog authors API to manage author information for your blog
      posts. 
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.hubspot.com/docs/api/cms/blog-authors
    baseURL: https://api.example.com
    tags:
      - Content
      - Authors
    properties:
      - type: OpenAPI
        url: https://developers.hubspot.com/docs/api/cms/blog-authors
      - type: OpenAPI
        url: >-
          https://api.hubspot.com/api-catalog-public/v1/apis/cms/v3/blogs/authors
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://api.hubspot.com/api-catalog-public/v1/apis/cms/v3/blogs/authors-openapi-search.yml
  - name: HubSpot URL Redirects API
    description: >-
      URL redirects allow you to redirect traffic from a HubSpot-hosted page or
      blog post to any URL. You can also update URL redirects in bulk and use a
      flexible pattern redirect to dynamically update the structure of URLs.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.hubspot.com/docs/api/cms/url-redirects
    baseURL: https://api.example.com
    tags:
      - Content
      - URL
      - Redirects
    properties:
      - type: OpenAPI
        url: https://developers.hubspot.com/docs/api/cms/url-redirects
      - type: OpenAPI
        url: >-
          https://api.hubspot.com/api-catalog-public/v1/apis/cms/v3/url-redirects
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://api.hubspot.com/api-catalog-public/v1/apis/cms/v3/url-redirects-openapi-search.yml
common:
  - type: Index
    url: https://api.hubspot.com/api-catalog-public/v1/apis
  - type: Portal
    url: https://developers.hubspot.com/
  - type: Documentation
    url: https://developers.hubspot.com/docs/api/overview
  - type: Change Log
    url: https://developers.hubspot.com/changelog
  - type: Forums
    url: https://community.hubspot.com/t5/HubSpot-Developers/ct-p/developers
  - type: Slack
    url: https://developers.hubspot.com/slack
  - type: Blog
    url: https://developers.hubspot.com/blog
  - type: Newsletter
    url: https://offers.hubspot.com/developer-newsletter-signup
  - type: Events
    url: https://www.hubspot.com/developer-community-events
  - type: Marketplace
    url: https://ecosystem.hubspot.com/marketplace/apps
  - type: Privacy Policy
    url: https://legal.hubspot.com/privacy-policy
  - type: Terms of Service
    url: https://legal.hubspot.com/terms-of-service
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---