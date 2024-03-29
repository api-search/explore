---
name: Paypal
description: >-
  PayPal allows any business or individual with an email address to securely,
  conveniently and cost-effectively send and receive payments online. Our
  network builds on the existing financial infrastructure of bank accounts and
  credit cards to create a global, real-time payment solution.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/paypal.yml
created: 2023/11/22
modified: 2023/11/22
specificationVersion: '0.16'
tags:
  - Payments
  - Financial
apis:
  - name: Paypal Billing Subscriptions API
    description: >-
      You can use billing plans and subscriptions to create subscriptions that
      process recurring PayPal payments for physical or digital goods, or
      services. A plan includes pricing and billing cycle information that
      defines the amount and frequency of charge for a subscription. You can
      also define a fixed plan, such as a $5 basic plan or a volume- or
      graduated-based plan with pricing tiers based on the quantity purchased.
      For more information, see <a href=\"/docs/subscriptions/\">Subscriptions
      Overview</a>.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.paypal.com/docs/api/subscriptions/v1/
    baseURL: https://api.example.com
    tags:
      - Payments
      - Billing
    properties:
      - type: OpenAPI
        url: https://developer.paypal.com/docs/api/subscriptions/v1/
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/billing_subscriptions_v1.json
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/billing_subscriptions_v1.json-openapi-search.yml
    aid: paypal:paypal-billing-subscriptions-api
  - name: Paypal Catalog Products API
    description: >-
      Merchants can use the Catalog Products API to create products, which are
      goods and services.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.paypal.com/docs/api/catalog-products/v1/
    baseURL: https://api.example.com
    tags:
      - Products
      - Catalog
    properties:
      - type: OpenAPI
        url: https://developer.paypal.com/docs/api/catalog-products/v1/
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/catalogs_products_v1.json
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/catalogs_products_v1.json-openapi-search.yml
    aid: paypal:paypal-catalog-products-api
  - name: Paypal Orders API
    description: >-
      An order represents a payment between two or more parties. Use the Orders
      API to create, update, retrieve, authorize, and capture orders.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.paypal.com/docs/api/orders/v2/
    baseURL: https://api.example.com
    tags:
      - Orders
    properties:
      - type: OpenAPI
        url: https://developer.paypal.com/docs/api/orders/v2/
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/checkout_orders_v2.json
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/checkout_orders_v2.json-openapi-search.yml
    aid: paypal:paypal-orders-api
  - name: Paypal Disputes API
    description: >-
      Occasionally, something goes wrong with a customer's order. To dispute a
      charge, a customer can create a dispute with PayPal. PayPal merchants,
      partners, and external developers can use the PayPal Disputes API to
      manage customer disputes.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.paypal.com/docs/api/customer-disputes/v1/
    baseURL: https://api.example.com
    tags:
      - Charges
      - Disputes
    properties:
      - type: OpenAPI
        url: https://developer.paypal.com/docs/api/customer-disputes/v1/
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/customer_disputes_v1.json
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/customer_disputes_v1.json-openapi-search.yml
    aid: paypal:paypal-disputes-api
common:
  - type: OpenAPI Specs
    url: https://github.com/paypal/paypal-rest-api-specifications/tree/main/openapi
  - type: Developer
    url: https://developer.paypal.com/home/
  - type: JavaScript SDK
    url: https://developer.paypal.com/sdk/js/
  - type: Videos
    url: https://developer.paypal.com/video/home
  - type: Support
    url: https://developer.paypal.com/docs/support/
  - type: Privacy
    url: https://www.paypal.com/myaccount/privacy/privacyhub
  - type: Terms of Service
    url: https://www.paypal.com/us/webapps/mpp/ua/legalhub-full
  - type: Contact
    url: https://www.paypal.com/us/smarthelp/contact-us
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: paypal
---