---
id: charges
name: Stripe Charges API
description: >-
  The Charge object represents a single attempt to move money into your Stripe
  account. PaymentIntent confirmation is the most common way to create Charges,
  but transferring money to a different Stripe account through Connect also
  creates Charges. Some legacy payment flows create Charges directly, which is
  not recommended for new integrations.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
humanURL: https://stripe.com/docs/api/charges
baseURL: https://api.stripe.com
tags:
  - Payments
properties:
  - type: Documentation
    url: https://stripe.com/docs/api/charges
  - type: OpenAPI
    url: properties/charges-openapi-original.yml
overlays:
  - type: APIs.io Search
    url: overlays/charges-openapi-search.yml
common:
  - type: Sign Up
    url: https://dashboard.stripe.com/register
  - type: Authentication
    url: https://stripe.com/docs/api/authentication
  - type: Blog
    url: https://stripe.com/blog
  - type: Status
    url: https://status.stripe.com/
  - type: Change Log
    url: https://stripe.com/docs/upgrades#api-versions
  - type: Terms of Service
    url: https://stripe.com/privacy
  - type: Support
    url: https://support.stripe.com/
---