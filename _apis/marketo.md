---
name: Marketo
description: >-
  Marketo develops and sells marketing automation software for account-based
  marketing and other marketing services and products, including SEO and content
  creation.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/marketo.yml
created: 2023/11/23
modified: 2023/11/23
specificationVersion: '0.16'
tags:
  - Marketing
  - Automation
apis:
  - name: Marketo REST API
    description: >-
      Marketo exposes a REST API which allows for remote execution of many of
      the system’s capabilities.  From creating programs to bulk lead import,
      there are a large number of options which allow fine-grained control of a
      Marketo instance.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.marketo.com/rest-api/
    baseURL: https://api.example.com
    tags:
      - Marketing
      - Automation
    properties:
      - type: OpenAPI
        url: https://developers.marketo.com/rest-api/
      - type: OpenAPI
        url: >-
          https://developers.marketo.com/rest-api/endpoint-reference/download-swagger-definition/
      - type: OpenAPI
        url: https://developers.marketo.com/rest-api/authentication/
      - type: OpenAPI
        url: https://developers.marketo.com/rest-api/error-codes/
      - type: OpenAPI
        url: >-
          https://developers.marketo.com/rest-api/marketo-integration-best-practices/
      - type: OpenAPI
        url: https://developers.marketo.com/performance/
    overlays: []
    aid: marketo:marketo-rest-api
common:
  - type: Portal
    url: https://developers.marketo.com/
  - type: Getting Started
    url: https://developers.marketo.com/getting-started/
  - type: Webhooks
    url: https://developers.marketo.com/webhooks/
  - type: Libraries
    url: https://github.com/Marketo/Community-Supported-Client-Libraries
  - type: Contact
    url: http://www.marketo.com/company/contact/
  - type: Blog
    url: https://developers.marketo.com/blog/
  - type: Terms of Service
    url: https://www.marketo.com/company/legal/
  - type: Privacy
    url: http://legal.marketo.com/privacy/
  - type: License
    url: https://developers.marketo.com/api-license/
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: marketo
---