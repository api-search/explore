---
name: Freedom of Information Act (FOIA)
description: This is the description.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/template.yml
created: 2024/01/01
modified: 2024/01/01
specificationVersion: '0.16'
tags:
  - Government
apis:
  - name: Freedom of Information Act (FOIA) API
    description: This is the description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.foia.gov/developer/
    baseURL: https://api.example.com
    tags:
      - Government
    properties:
      - type: OpenAPI
        url: https://www.foia.gov/developer/
    overlays: []
common:
  - type: Portal
    url: https://www.foia.gov/developer/
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---