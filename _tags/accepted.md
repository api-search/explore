---
name: Accepted
description: Needs a description.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json-icons/accepted.png
url: https://example.com/apis/accepted.yml
created: 2024/4/8
modified: 2024/4/8
specificationVersion: '0.16'
tags:
  - Accepted
apis:
  - aid: bigcommerce:accepted-payment-methods
    name: Accepted Payment Methods
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: Documentation
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            version: ''
            title: Accepted Payment Methods
          tags:
            - name: Methods
          paths:
            /payments/methods:
              parameters:
                - null
              get:
                description: >-
                  Returns a list of accepted payment methods based on the
                  `order_id` or `checkout_id`.


                  **Notes**

                  * Use the [Create an
                  Order](/docs/rest-management/orders#create-an-order) endpoint
                  to generate the `order_id`.

                  * Orders created will be set to incomplete order status.

                  * The cart ID and checkout ID are the same.


                  **Required Fields**

                  * `order_id` or `checkout_id`
                summary: Get Accepted Payment Methods
                tags:
                  - Get
                  - Accepted
                  - Payment
                  - Methods
                  - Payments
                  - Metho
    overlays:
      - type: APIs.io Search
        url: overlays/accepted-payment-methods-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/accepted-payment-methods-openapi-api-evangelist-ratings.yml
maintainers:
  - FN: API Evangelist
    email: info@apievangelist.com
---