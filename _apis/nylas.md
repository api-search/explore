---
name: Nylas
description: >-
  Our mission is to unlock humanity’s potential to work together. We provide
  simple tools to remove complexity when building embedded email and scheduling
  experiences, allowing world-class teams to think big, innovate, and build
  better products.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/template.yml
created: 2024/01/01
modified: 2024/01/01
specificationVersion: '0.16'
tags:
  - Email
  - Scheduling
apis:
  - name: Nylas API
    description: >-
      The Nylas Platform allows developers to build features that connect them
      to every inbox, calendar, and contact book in the world. Nylas provides an
      integration that can be completed in days, pre-built security and
      compliance features, and a 99.9% guaranteed uptime. The Nylas Platform is
      secure, reliable, and easy to use and maintain.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.nylas.com/
    baseURL: https://api.example.com
    tags:
      - Email
      - Scheduling
    properties:
      - type: OpenAPI
        url: https://developer.nylas.com/
    overlays: []
    aid: nylas:nylas-api
common:
  - type: Property
    url: https://example.com
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
aid: nylas
---