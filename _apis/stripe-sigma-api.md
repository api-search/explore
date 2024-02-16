---
id: sigma
name: Stripe Sigma API
description: >-
  If you have scheduled a Sigma query, you’ll receive a
  sigma.scheduled_query_run.created webhook each time the query runs. The
  webhook contains a ScheduledQueryRun object, which you can use to retrieve the
  query results.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
humanURL: https://stripe.com/docs/api/sigma/scheduled_queries
baseURL: https://api.stripe.com
tags:
  - Payments
properties:
  - type: Documentation
    url: https://stripe.com/docs/api/sigma/scheduled_queries
  - type: OpenAPI
    url: properties/sigma-openapi-original.yml
overlays:
  - type: APIs.io Search
    url: overlays/sigma-openapi-search.yml
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