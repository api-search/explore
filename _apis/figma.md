---
name: Figma
description: >-
  Figma's mission is to make design accessible to everyone. Our two products
  help people from different backgrounds and roles express their ideas visually
  and make things together.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/figma.yml
created: 2023/11/22
modified: 2023/11/22
specificationVersion: '0.16'
tags:
  - Ideas
  - Design
apis:
  - name: Figma API
    description: >-
      Welcome to Figma, the world's first collaborative interface design tool.
      Figma allows designers to create and prototype their digital experiences -
      together in real-time and in one place - helping them turn their ideas and
      visions into products, faster. Figma's mission is to make design
      accessible to everyone. The Figma API is one of the ways we aim to do
      that.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.figma.com/developers
    baseURL: https://api.example.com
    tags:
      - Ideas
      - Design
    properties:
      - type: OpenAPI
        url: https://www.figma.com/developers/api#intro
    overlays: []
common:
  - type: Authentication
    url: https://www.figma.com/developers/api#authentication
  - type: Webhooks
    url: https://www.figma.com/developers/api#webhooks_v2
  - type: Errors
    url: https://www.figma.com/developers/api#errors
  - type: Change Log
    url: https://www.figma.com/developers/api#changelog
  - type: Login
    url: https://www.figma.com/login
  - type: Sign Up
    url: https://www.figma.com/signup
  - type: Blog
    url: https://www.figma.com/blog
  - type: Terms of Service
    url: https://www.figma.com/summary-of-policy
  - type: Contact
    url: https://www.figma.com/contact
  - type: Security
    url: https://www.figma.com/security
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---