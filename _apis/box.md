---
name: Box
description: >-
  Box, Inc. (formerly Box.net) is a public company based in Redwood City,
  California. It develops and markets cloud-based content management,
  collaboration, and file sharing tools for businesses. Box was founded in 2005
  by Aaron Levie and Dylan Smith. Initially, it focused on consumers, but around
  2009 and 2010 Box pivoted to focus on business users. The company raised about
  $500 million over numerous funding rounds, before going public in 2015. Its
  software allows users to store and manage files in an online folder system
  accessible from any device. Users can then comment on the files, share them,
  apply workflows, and implement security and governance policies.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/box.yml
created: 2023/11/09
modified: 2023/11/09
specificationVersion: '0.16'
tags:
  - APIs
  - Documents
  - Content
apis:
  - name: Box API
    description: >-
      Development with Box Platform is easy with SDKs, Box CLI, Postman
      collection, front-end UI elements, and much more.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags:
      - Documents
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.box.com/reference/
      - type: OpenAPI
        url: https://raw.githubusercontent.com/box/box-openapi/main/openapi.json
    contact:
      - FN: Create a Ticket
        url: https://support.box.com/hc/en-us/
        email: ''
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/box/box-openapi/main/openapi.json-openapi-search.yml
common:
  - type: Blog
    url: https://medium.com/box-developer-blog
  - type: Newsletter
    url: https://developer.box.com/newsletter/
  - type: Change Log
    url: https://developer.box.com/changelog/
  - type: Samples
    url: https://github.com/box/samples
  - type: Forum
    url: >-
      https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
  - type: Status
    url: https://status.box.com/
  - type: Feedback
    url: https://pulse.box.com/forums/909778-product-feedback?category_id=330838
  - type: Login
    url: https://account.box.com/login
  - type: Pricing
    url: https://www.box.com/pricing
  - type: Node SDK
    url: https://github.com/box/box-node-sdk
  - type: Java SDK
    url: https://github.com/box/box-java-sdk
  - type: Python SDK
    url: https://github.com/box/box-python-sdk
  - type: .NET SDK
    url: https://github.com/box/box-windows-sdk-v2
  - type: iOS Content SDK
    url: https://github.com/box/box-ios-sdk
  - type: CLI
    url: https://github.com/box/boxcli
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---