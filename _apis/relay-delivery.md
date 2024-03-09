---
name: Relay Delivery
description: >-
  At Relay, we are building technology and a business model that provides better
  value for couriers, restaurants, and their customers.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/riot-games.yml
created: 2024/03/08
modified: 2024/03/08
specificationVersion: '0.16'
tags:
  - Delivery
  - Restaurants
  - Couriers
  - Food
apis:
  - name: Relay Delivery
    description: >-
      Through this API and hooks you are able to send delivery jobs to any valid
      address. Additionally, you are able to request quotes for pricing and
      duration estimates before creating a delivery job. Restaurants are not
      billed and instead the Platform is billed.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.relay.delivery/
    baseURL: https://api.example.com
    tags:
      - Games
      - Video Games
    properties:
      - type: OpenAPI
        url: https://docs.relay.delivery/api/v2.html
      - type: OpenAPI
        url: properties/relay-delivery-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/relay-delivery-openapi-search.yml
common:
  - type: Change Log
    url: https://docs.relay.delivery/release-notes.html
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---