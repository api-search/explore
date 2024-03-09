---
name: Plaid
description: >-
  Plaid is a data network that powers the tools millions of people rely on to
  live a healthier financial life. Plaid works with thousands of companies like
  Venmo, SoFi, and Betterment, several of the Fortune 500, and many of the
  largest banks to make it easy for people to connect their financial accounts
  to the apps and services they want to use. Plaid’s network covers more than
  12,000 financial institutions across the US, Canada, UK and Europe.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/plaid.yml
created: 2023/11/22
modified: 2023/11/22
specificationVersion: '0.16'
tags:
  - Banks
  - Accounts
apis:
  - name: Plaid API
    description: >-
      Plaid is a data network that powers the tools millions of people rely on
      to live a healthier financial life. Plaid works with thousands of
      companies like Venmo, SoFi, and Betterment, several of the Fortune 500,
      and many of the largest banks to make it easy for people to connect their
      financial accounts to the apps and services they want to use. Plaid’s
      network covers more than 12,000 financial institutions across the US,
      Canada, UK and Europe.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://plaid.com/docs/
    baseURL: https://api.example.com
    tags:
      - Banks
      - Accounts
    properties:
      - type: OpenAPI
        url: https://plaid.com/docs/
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/plaid/plaid-openapi/master/2020-09-14.yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/plaid/plaid-openapi/master/2020-09-14.yml-openapi-search.yml
common:
  - type: Quickstarts
    url: https://plaid.com/docs/quickstart/
  - type: Sandbox
    url: https://plaid.com/docs/sandbox/
  - type: Errors
    url: https://plaid.com/docs/errors/
  - type: Support
    url: https://plaid.com/docs/support/
  - type: Change Log
    url: https://plaid.com/docs/changelog/
  - type: GitHub Organization
    url: https://github.com/plaid
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---