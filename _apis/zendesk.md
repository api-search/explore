---
name: Zendesk
description: >-
  Zendesk Sunshine is our open and flexible platform, built natively on AWS. You
  can create unique customer experiences using our APIs and SDKs, connect data
  sources across your technology stack, and build any app or automation you
  want, using the languages you love.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/zendesk.yml
created: 2023/11/23
modified: 2023/11/23
specificationVersion: '0.16'
tags: []
apis:
  - name: Zendesk API
    description: >-
      Zendesk’s APIs are organized around REST. Our APIs have predictable
      resource-oriented URLs, accepts form-encoded request bodies, returns
      JSON-encoded responses, and uses standard HTTP response codes,
      authentication, and verbs.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.zendesk.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.zendesk.com/api-reference/
      - type: OpenAPI
        url: https://www.postman.com/zendesk-redback/workspace/zendesk-public-api
    overlays: []
    aid: zendesk:zendesk-api
common:
  - type: Webhooks
    url: https://developer.zendesk.com/api-reference/webhooks/introduction/
  - type: Integrations
    url: >-
      https://developer.zendesk.com/api-reference/integration-services/introduction/
  - type: Marketplace
    url: https://developer.zendesk.com/documentation/marketplace/
  - type: Forum
    url: https://support.zendesk.com/hc/en-us/community/topics
  - type: Blog
    url: https://developerblog.zendesk.com/
  - type: Slack
    url: >-
      https://docs.google.com/forms/d/e/1FAIpQLScm_rDLWwzWnq6PpYWFOR_PwMaSBcaFft-1pYornQtBGAaiJA/viewform
  - type: Privacy
    url: https://www.zendesk.com/company/agreements-and-terms/privacy-policy/
  - type: Terms of Service
    url: >-
      https://www.zendesk.com/company/agreements-and-terms/master-subscription-agreement/
  - type: Status
    url: https://status.zendesk.com/
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: zendesk
---