---
name: Template
description: This is the description.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/template.yml
created: 2024/01/01
modified: 2024/01/01
specificationVersion: '0.16'
tags:
  - Tag
apis:
  - name: API
    description: This is the description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://example.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: Documentation
        url: https://example.com
    overlays: []
common:
  - type: Property
    url: https://example.com
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.y
---