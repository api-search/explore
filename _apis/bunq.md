---
name: Bunq
description: >-
  We offer mobile banking that makes life easy—wherever, whenever. Join us and
  discover a simple, sustainable, and user-centered way of banking that makes
  everyday finances 100% hassle-free.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/bunq.yml
created: 2023/11/13
modified: 2023/11/13
specificationVersion: '0.16'
tags:
  - APIs
  - Banks
  - Banking
  - PSD2
apis:
  - name: Bunq API
    description: >-
      We offer mobile banking that makes life easy—wherever, whenever. Join us
      and discover a simple, sustainable, and user-centered way of banking that
      makes everyday finances 100% hassle-free.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://doc.bunq.com/
    baseURL: https://api.example.com
    tags:
      - APIs
      - Banks
      - Banking
      - PSD2
    properties:
      - type: OpenAPI
        url: https://doc.bunq.com/
      - type: OpenAPI
        url: https://raw.githubusercontent.com/bunq/doc/master/swagger.json
    contact:
      - FN: Name
        url: http://example.com
        email: info@example.com
    overlays: []
common:
  - type: Portal
    url: https://developer.bunq.com/en/
  - type: Authentication
    url: https://doc.bunq.com/#/authentication
  - type: Errors
    url: https://doc.bunq.com/#/errors
  - type: Headers
    url: https://doc.bunq.com/#/headers
  - type: Type
    url: https://example.com
  - type: Callbacks
    url: https://doc.bunq.com/#/callbacks
  - type: Pagination
    url: https://doc.bunq.com/#/pagination
  - type: Change Log
    url: https://beta.doc.bunq.com/basics/changelog
  - type: Status
    url: https://status.bunq.com/
  - type: GitHub Organization
    url: https://github.com/bunq
  - type: Postman Collections
    url: https://github.com/bunq/postman/
  - type: Sandbox
    url: https://beta.doc.bunq.com/basics/sandbox
  - type: Blog
    url: https://medium.com/bunq-developers-corner
  - type: FAQ
    url: https://beta.doc.bunq.com/other/faq
  - type: Terms of Service
    url: >-
      https://assets-global.website-files.com/63b43f001c7774d38d5f3a2d/63b43f001c7774ee815f41aa_20200805_terms_bunq_API_EN.pdf
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---