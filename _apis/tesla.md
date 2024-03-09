---
name: Tesla
description: >-
  Tesla, Inc. is an American multinational automotive and clean energy company
  headquartered in Austin, Texas, which designs, manufactures and sells electric
  vehicles, stationary battery energy storage devices from home to grid-scale,
  solar panels and solar shingles, and related products and services.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/template.yml
created: 2024/01/01
modified: 2024/01/01
specificationVersion: '0.16'
tags:
  - Cars
  - Automobiles
apis:
  - name: Tesla FleetAPI
    description: >-
      FleetAPI is a RESTful data and command service providing access to Tesla
      vehicles and energy devices. Partners can interact with their own devices,
      or devices for which they have been granted access by a customer.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.tesla.com/docs/fleet-api
    baseURL: https://api.example.com
    tags:
      - Cars
      - Automobiles
      - Fleets
    properties:
      - type: OpenAPI
        url: https://developer.tesla.com/docs/fleet-api
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