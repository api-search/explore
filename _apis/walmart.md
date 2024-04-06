---
name: Walmart
description: >-
  Walmart Inc. is an American multinational retail corporation that operates a
  chain of hypermarkets, discount department stores, and grocery stores in the
  United States, headquartered in Bentonville, Arkansas.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/walmart.yml
created: 2023/11/15
modified: 2023/11/15
specificationVersion: '0.16'
tags: []
apis:
  - name: Walmart Feeds API
    description: >-
      Feeds are constructed to handle bulk functions. A feed consists of an HTTP
      request with an attached file. The attached file contains the XML
      representing the objects that need to be created or updated. The Walmart
      APIs version 3.0 supports only Item and Feed types. Refer to the bulk
      endpoints in each section to see example Feeds for each feed type. Once
      you upload the Feeds, you can use the Feed ID to track the status of the
      feeds and the status of the item within those Feeds.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.walmart.com/api/us/mp/feeds
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.walmart.com/api/us/mp/feeds
    overlays: []
    aid: walmart:walmart-feeds-api
  - name: Walmart Items API
    description: >-
      The Item Management APIs enable you to set up and manage items on
      Walmart.com. Once you have completed Registration and have access to your
      Consumer ID and Private Key, you can get started with the integration
      process
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.walmart.com/api/us/mp/items
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.walmart.com/api/us/mp/items
    overlays: []
    aid: walmart:walmart-items-api
  - name: Walmart Prices API
    description: >-
      The price is a fundamental building block for your listing on Walmart.com.
      You can use the price management APIs to set up and manage the price for a
      given item
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.walmart.com/api/us/mp/price
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.walmart.com/api/us/mp/price
    overlays: []
    aid: walmart:walmart-prices-api
  - name: Walmart Promotion API
    description: >-
      Sellers can set regular or promotional prices for their items. Setting the
      Promotional prices is an option to create unique pricing for events such
      as clearance sales or to call out a comparison price
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.walmart.com/api/us/mp/promotion
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.walmart.com/api/us/mp/promotion
    overlays: []
    aid: walmart:walmart-promotion-api
  - name: Walmart Order API
    description: >-
      The Walmart Order Management APIs help Sellers to manage customer’s Sales
      Orders and to stay up-to-date on orders fulfillment, which orders to
      fulfill, and when to fulfill them.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.walmart.com/api/us/mp/orders
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.walmart.com/api/us/mp/orders
    overlays: []
    aid: walmart:walmart-order-api
  - name: Walmart Returns API
    description: >-
      Buyers can now Initiate Returns from Walmart.com for Marketplace seller
      items (Except for HAZMAT, OTHER or FREIGHT items). For item in the
      exception categories: HAZMAT or OTHER, sellers need to generate the return
      shipping label, and upload the label. For detailed instructions, and to
      download the Returns API JSON schema, see Returns guide.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.walmart.com/api/us/mp/returns
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.walmart.com/api/us/mp/returns
    overlays: []
    aid: walmart:walmart-returns-api
  - name: Walmart Inventory API
    description: >-
      Maintaining up-to-date inventory for your items on Walmart.com ensures a
      great experience for your customers and greater sales opportunities for
      you.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.walmart.com/api/us/mp/inventory
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.walmart.com/api/us/mp/inventory
    overlays: []
    aid: walmart:walmart-inventory-api
common:
  - type: Portal
    url: https://developer.walmart.com/
  - type: Docs
    url: https://developer.walmart.com/home/us-mp/
  - type: Sandbox
    url: https://developer.walmart.com/doc/sandbox/
  - type: Whats New
    url: https://developer.walmart.com/category/us/whats-new/
  - type: Support
    url: https://developer.walmart.com/home/help/
  - type: FAQ
    url: https://developer.walmart.com/faq/us/
  - type: Status
    url: https://developer.walmart.com/apiStatus
  - type: Terms of Service
    url: https://developer.walmart.com/faq/terms-and-conditions
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: walmart
---