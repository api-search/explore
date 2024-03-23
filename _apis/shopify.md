---
name: Shopify
description: >-
  Shopify is a popular e-commerce website builder that small businesses can use
  to build online stores or sell products on third-party marketplaces or social
  media platforms. Shopify also sells point-of-sale, or POS, software that small
  businesses can use in their brick-and-mortar stores.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/shopify.yml
created: 2023/11/23
modified: 2023/11/23
specificationVersion: '0.16'
tags:
  - Commerce
  - Point of Sale
apis:
  - name: Shopify REST API
    description: >-
      The Admin API lets you build apps and integrations that extend and enhance
      the Shopify admin.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://shopify.dev/docs/api/admin-rest
    baseURL: https://api.example.com
    tags:
      - Commerce
      - Point of Sale
    properties:
      - type: OpenAPI
        url: https://shopify.dev/docs/api/admin-rest
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/allengrant/shopify_openapi/master/shopify_openapi.yaml
      - type: OpenAPI
        url: https://shopify.dev/docs/api/admin-rest#client_libraries
      - type: OpenAPI
        url: https://shopify.dev/docs/api/admin-rest#authentication
      - type: OpenAPI
        url: https://shopify.dev/docs/api/admin-rest#rate_limits
      - type: OpenAPI
        url: https://shopify.dev/docs/api/admin-rest#status_and_error_codes
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/allengrant/shopify_openapi/master/shopify_openapi.yaml-openapi-search.yml
    aid: shopify:shopify-rest-api
  - name: Shopify GraphQL API
    description: >-
      The Admin API lets you build apps and integrations that extend and enhance
      the Shopify admin.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://shopify.dev/docs/api/admin-graphql
    baseURL: https://api.example.com
    tags:
      - Commerce
      - Point of Sale
    properties:
      - type: OpenAPI
        url: https://shopify.dev/docs/api/admin-graphql
      - type: OpenAPI
        url: https://shopify.dev/docs/api/admin-graphql#client_libraries
      - type: OpenAPI
        url: https://shopify.dev/docs/api/admin-graphql#authentication
      - type: OpenAPI
        url: https://shopify.dev/docs/api/admin-graphql#rate_limits
      - type: OpenAPI
        url: https://shopify.dev/docs/api/admin-graphql#status_and_error_codes
    overlays: []
    aid: shopify:shopify-graphql-api
common:
  - type: Forum
    url: https://community.shopify.com/?shpxid=fc915313-46B3-448F-D8CE-FA0CB7CDA326
  - type: Discord
    url: https://discord.gg/shopifydevs
  - type: Change Log
    url: https://shopify.dev/changelog
  - type: Youtube
    url: https://www.youtube.com/channel/UCcYsEEKJtpxoO9T-keJZrEw
  - type: Twitch
    url: https://www.twitch.tv/shopifydevs
  - type: Blog
    url: >-
      https://www.shopify.com/partners/blog?shpxid=fc915313-46B3-448F-D8CE-FA0CB7CDA326
  - type: Blog
    url: https://shopify.engineering/
  - type: Events
    url: >-
      https://community.shopify.com/c/events/eb-p/events_en?shpxid=fc915313-46B3-448F-D8CE-FA0CB7CDA326
  - type: Terms of Service
    url: >-
      https://www.shopify.com/legal/api-terms?shpxid=fc915313-46B3-448F-D8CE-FA0CB7CDA326
  - type: Privacy Policy
    url: >-
      https://www.shopify.com/legal/privacy?shpxid=fc915313-46B3-448F-D8CE-FA0CB7CDA326
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: shopify
---