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
        data:
          openapi: 3.0.0
          info:
            title: Relay Delivery
            description: ''
          tags:
            - name: Orders
              description: Manage delivery and pickup orders.
            - name: Quotes
              description: >-
                Manage delivery estimates and pricing before initiating a
                delivery.
          paths:
            /order:
              post:
                tags:
                  - order
                summary: Create a new delivery or pickup order.
                description: ''
            /order/{orderKey}:
              patch:
                tags:
                  - order
                summary: Make changes to an active order.
                description: >-
                  Some fields of the order may be updated. See
                  /schemas/platform-order-update-request.html
              get:
                tags:
                  - order
                summary: Fetch an order.
                description: >-
                  Review order details and hooks. Polling this method is not
                  expected. You should rely on the webhooks to recieve updates.
            /quote:
              post:
                tags:
                  - quote
                summary: Request a new quote
                description: ''
            /quote/{quoteKey}:
              get:
                tags:
                  - quote
                summary: Fetch a previously created quote.
                description: >-
                  If you created a quote a in the past and you want to check if
                  the quote is still valid then you can attempt to fetch it by
                  the quote key. If the quote is no longer valid then it will
                  not be found. If you are using your quotes right away then
                  there is no need to call this route.
            /delivery-zone:
              post:
                tags:
                  - delivery-zone
                summary: Retrieve the delivery zone for any address
                description: >-
                  Relay's maximum possible operating zone for a specific
                  address. Orders outside of this range will never be accepted.
            /order/ready:
              post:
                tags:
                  - order
                summary: Toggle the ready status of an order.
                description: >-
                  If you have an event for when an order is ready to be picked
                  up then you can use this route to dramatically improve the
                  quality of service your orders receive on the Relay Platform.
                  Be sure to set `requireReadyEvent` to true when creating the
                  order if you intend to use this method.
            /order/void:
              post:
                tags:
                  - order
                summary: Void/cancel an Order
                description: >-
                  Cancel an order when a customer no longer wants an order.
                  Voiding an order should be extremely rare and excessive
                  voiding is treated a
    overlays:
      - type: APIs.io Search
        url: overlays/relay-delivery-openapi-search.yml
    aid: relay-delivery:relay-delivery
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
aid: relay-delivery
---