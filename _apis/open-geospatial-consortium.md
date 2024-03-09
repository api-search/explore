---
name: Open Geospatial Consortium
description: >-
  OGC is globally known for its proven widely implemented open standards. The
  OGC open consensus-based standards development process has evolved to move at
  the pace of innovation, with constant input from technology forecasting,
  practical prototyping, real-world testing, certification and compliance and
  community engagement.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/template.yml
created: 2024/01/01
modified: 2024/01/01
specificationVersion: '0.16'
tags:
  - Standards
  - Geospatial
  - Locations
apis:
  - name: Open Geospatial Consortium API - Features
    description: >-
      OGC API standards define modular API building blocks to spatially enable
      Web APIs in a consistent way. OpenAPI is used to define the reusable API
      building blocks with responses in JSON and HTML.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://ogcapi.ogc.org/features/overview.html
    baseURL: https://api.example.com
    tags:
      - Locations
      - Geospatial
    properties:
      - type: OpenAPI
        url: https://ogcapi.ogc.org/features/overview.html
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
    url: overlays/apis-io-search.yml
---