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
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-error
              message: Info Description
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-tags-description-info
              message: Tag Descriptions
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/relay-delivery-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/relay-delivery-openapi-api-evangelist-ratings.yml
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
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: relay-delivery
---