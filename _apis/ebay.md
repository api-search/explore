---
name: eBay
description: >-
  eBay offers developers a wide range of RESTful and Traditional APIs. For new
  development, eBay strongly encourages the use of our RESTful APIs. A key
  benefit of REST is that it uses less bandwidth and supports multiple formats
  including plain text, XML, HTML, and JSON while SOAP only supports XML.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/ebay.yml
created: 2023/11/9
modified: 2023/11/9
specificationVersion: '0.16'
tags: []
apis:
  - name: eBay Account API
    description: >-
      The Account API gives sellers the ability to configure their eBay seller
      accounts, including the seller's policies (eBay business policies and
      seller-defined custom policies), opt in and out of eBay seller programs,
      configure sales tax tables, and get account information. 
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.ebay.com/api-docs/sell/account/static/overview.html
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.ebay.com/api-docs/sell/account/static/overview.html
      - type: OpenAPI
        url: >-
          https://developer.ebay.com/api-docs/master/sell/account/openapi/3/sell_account_v1_oas3.json
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://developer.ebay.com/api-docs/master/sell/account/openapi/3/sell_account_v1_oas3.json-openapi-search.yml
    aid: ebay:ebay-account-api
  - name: Analytics API
    description: >-
      Provides information about an individual seller’s business performance
      through different report and data gathering resources including customer
      service metrics, traffic reports, and seller profiles.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.ebay.com/api-docs/sell/analytics/static/overview.html
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: >-
          https://developer.ebay.com/api-docs/sell/analytics/static/overview.html
      - type: OpenAPI
        url: >-
          https://developer.ebay.com/api-docs/master/sell/analytics/openapi/3/sell_analytics_v1_oas3.json
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://developer.ebay.com/api-docs/master/sell/analytics/openapi/3/sell_analytics_v1_oas3.json-openapi-search.yml
    aid: ebay:analytics-api
  - name: Compliance API
    description: >-
      Provides tools for validating listings to help sellers keep their listings
      in compliance with eBay’s policies.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.ebay.com/api-docs/sell/compliance/resources/methods
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.ebay.com/api-docs/sell/compliance/resources/methods
      - type: OpenAPI
        url: >-
          https://developer.ebay.com/api-docs/master/sell/compliance/openapi/3/sell_compliance_v1_oas3.json
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://developer.ebay.com/api-docs/master/sell/compliance/openapi/3/sell_compliance_v1_oas3.json-openapi-search.yml
    aid: ebay:compliance-api
  - name: Feed API
    description: >-
      Manage your eBay business by downloading or uploading inventory, order,
      and customer service metric files, and creating schedules. This API is
      designed to make a large merchant's workflow more efficient by leveraging
      eBay infrastructure to use parallel execution and to automatically retry
      on errors.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.ebay.com/api-docs/sell/feed/resources/methods
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.ebay.com/api-docs/sell/feed/resources/methods
      - type: OpenAPI
        url: >-
          https://developer.ebay.com/api-docs/master/sell/feed/openapi/3/sell_feed_v1_oas3.json
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://developer.ebay.com/api-docs/master/sell/feed/openapi/3/sell_feed_v1_oas3.json-openapi-search.yml
    aid: ebay:feed-api
common:
  - type: Getting Started
    url: https://developer.ebay.com/develop/get-started
  - type: Guides
    url: https://developer.ebay.com/develop/guides
  - type: Tools
    url: https://developer.ebay.com/develop/tools
  - type: SDKs
    url: https://developer.ebay.com/develop/ebay-sdks
  - type: Widgets
    url: https://developer.ebay.com/develop/widgets
  - type: Support
    url: https://developer.ebay.com/my/support/tickets
  - type: Rate Limits
    url: https://developer.ebay.com/develop/apis/api-call-limits
  - type: Status
    url: https://developer.ebay.com/support/api-status
  - type: Forum
    url: https://community.ebay.com/t5/Developer-Groups/ct-p/developergroup
  - type: License
    url: https://developer.ebay.com/join/api-license-agreement
  - type: FAQ
    url: https://developer.ebay.com/support/faq
  - type: Blog
    url: https://developer.ebay.com/updates/blog
  - type: Newsletter
    url: https://developer.ebay.com/updates/newsletter
  - type: Events
    url: https://developer.ebay.com/grow/events
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: ebay
---