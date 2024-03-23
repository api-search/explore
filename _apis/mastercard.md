---
name: Mastercard
description: >-
  Mastercard Inc. is the second-largest payment-processing corporation
  worldwide. It offers a range of payment transaction processing and other
  related-payment services. Its headquarters are in Purchase, New York.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/mastercard.yml
created: 2023/11/14
modified: 2023/11/14
specificationVersion: '0.16'
tags:
  - APIs
  - Credit Cards
  - Payments
apis:
  - name: Mastercard Universal Specification Submission API
    description: >-
      The Universal Specification Submission API is currently being used by
      Mastercard Issuers to submit PAN related events for the Account Level
      Management suite of services: Enhanced Value, Product Graduation Plus,
      Consumer Product Monitoring Service, World High Value, Small Business
      Spend, and Affluent Shortfall for World and World Elite Mastercard cards.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.mastercard.com/product/account-services-catalogue/
    baseURL: https://api.example.com
    tags:
      - Credit Cards
      - Accounts
    properties:
      - type: OpenAPI
        url: https://developer.mastercard.com/product/account-services-catalogue/
    overlays: []
    aid: mastercard:mastercard-universal-specification-submission-api
  - name: Mastercard Account to Account Commerce for Creditor Service Providers
    description: >-
      Online checkouts can be frustrating and tedious. As shopping habits shift
      to digital, consumers and merchants require secure and streamlined online
      experiences. Mastercard Account to Account Commerce enables creditor
      service providers (CSP) to provide their creditors (merchants) and debtors
      (consumers) with an intuitive checkout experience that will improve the
      overall online payments experience, reduce friction at checkout, and
      improve customer conversions. Through Account to Account Commerce,
      creditors can initiate payment requests, offer refunds, and offer
      account-on-file services to debtors of participating debtor service
      providers.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.mastercard.com/account-to-account-commerce-for-csp/documentation/
    baseURL: https://api.example.com
    tags:
      - Credit Cards
      - Accounts
    properties:
      - type: OpenAPI
        url: >-
          https://developer.mastercard.com/account-to-account-commerce-for-csp/documentation/
    overlays: []
    aid: >-
      mastercard:mastercard-account-to-account-commerce-for-creditor-service-providers
  - name: Mastercard Debtor Service Provider Resources API
    description: >-
      Online checkouts can be frustrating and tedious. As shopping habits shift
      to digital, consumers and merchants require secure and streamlined online
      experiences. Mastercard Account to Account Commerce enables debtor service
      providers (DSP) to provide their debtors (customers) with a fast, secure,
      and convenient way to pay using their mobile banking app.= Through Account
      to Account Commerce, the debtors can view their balance before checkout,
      initiate refunds, and use their accounts for recurring payments or
      frequent purchases.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.mastercard.com/account-to-account-commerce-for-dsp/documentation/
    baseURL: https://api.example.com
    tags:
      - Credit Cards
      - Debtors
    properties:
      - type: OpenAPI
        url: >-
          https://developer.mastercard.com/account-to-account-commerce-for-dsp/documentation/
    overlays: []
    aid: mastercard:mastercard-debtor-service-provider-resources-api
  - name: Mastercard Automatic Billing Updater API
    description: >-
      Automatic Billing Updater (ABU) is a web service that provides access to
      updated account credentials (cards). This can be leveraged by
      Merchant/Acquirers/Payment Service Providers to ensure that they always
      have their customers’ most up to date card credentials on file; the main
      benefit being a big reduction in declines for recurring and card-on-file
      payments. This service can be used in two different ways, either pulling
      updates or having updates pushed to an endpoint on the
      Merchant/Acquirers/Payment Service Provider’s system for account numbers
      that they are watching.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.mastercard.com/automatic-billing-updater/documentation
    baseURL: https://api.example.com
    tags:
      - Credit Cards
      - Billing
    properties:
      - type: OpenAPI
        url: >-
          https://developer.mastercard.com/automatic-billing-updater/documentation
    overlays: []
    aid: mastercard:mastercard-automatic-billing-updater-api
  - name: Mastercard Benefit Eligibility Service API
    description: >-
      This API is for third-parties who want to enable eligibility checks based
      on input criteria including card number. The Eligibility API is a PAN
      (Primary Account Number) level verification service designed to promote
      targeted distribution of Mastercard card level benefits. This service
      enables merchants and third-party developers to use a PAN to check the
      eligibility and access rights to the benefits for those cardholders.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.mastercard.com/eligibility-api/documentation/
    baseURL: https://api.example.com
    tags:
      - Credit Cards
      - Benefits
    properties:
      - type: OpenAPI
        url: https://developer.mastercard.com/eligibility-api/documentation/
    overlays: []
    aid: mastercard:mastercard-benefit-eligibility-service-api
  - name: Mastercard Bill Pay API
    description: >-
      The Mastercard Bill Pay Experience Design Guide was created to provide
      you, our customer, with our best user experience recommendations and
      cutting edge resources for implementation. You will find white label Figma
      flows to improve the speed, quality and cost of implementation and scale.
      Our goal is to make it easier than ever to go to market efficiently and
      effectively and achieve adoption and long-term use of Mastercard Bill Pay.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.mastercard.com/bill-pay-experience-design-guide/documentation
    baseURL: https://api.example.com
    tags:
      - Credit Cards
      - Bill Pay
    properties:
      - type: OpenAPI
        url: >-
          https://developer.mastercard.com/bill-pay-experience-design-guide/documentation
    overlays: []
    aid: mastercard:mastercard-bill-pay-api
common:
  - type: Partners
    url: https://developer.mastercard.com/partners
  - type: Portal
    url: https://developer.mastercard.com/
  - type: Blog
    url: https://developer.mastercard.com/blog
  - type: Sign Up
    url: https://developer.mastercard.com/account/sign-up
  - type: Support
    url: https://developer.mastercard.com/support
  - type: Forum
    url: https://forum.developer.mastercard.com/s/
  - type: Terms of Service
    url: https://developer.mastercard.com/terms-of-use
  - type: Privacy Policy
    url: https://www.mastercard.us/en-us/about-mastercard/what-we-do/privacy.html
  - type: Status
    url: https://developer.mastercard.com/api-status
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: mastercard
---