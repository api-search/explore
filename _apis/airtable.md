---
name: Airtable
description: >-
  We help organizations achieve their most ambitious goals and move with greater
  agility. With our next-generation app platform, teams easily design and deploy
  flexible and engaging apps that power critical workflows and make valuable
  data actionable across the enterprise.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/airtable.yml
created: 2023/11/21
modified: 2023/11/21
specificationVersion: '0.16'
tags:
  - Forms
  - Spreadsheets
  - Applications
apis:
  - name: Airtable API
    description: >-
      he Airtable API can be used to integrate your data in Airtable with any
      external system. The API closely follows REST semantics, uses JSON to
      encode objects, and relies on standard HTTP codes to signal operation
      outcomes.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://airtable.com/developers/web/api/introduction
    baseURL: https://api.example.com
    tags:
      - Forms
      - Spreadsheets
      - Applications
    properties:
      - type: OpenAPI
        url: https://airtable.com/developers/web/api/introduction
    overlays: []
    aid: airtable:airtable-api
common:
  - type: Authentication
    url: https://airtable.com/developers/web/api/authentication
  - type: OAuth Scopes
    url: https://airtable.com/developers/web/api/scopes
  - type: Authentication
    url: https://airtable.com/developers/web/api/oauth-reference
  - type: Errors
    url: https://airtable.com/developers/web/api/errors
  - type: Rate Limits
    url: https://airtable.com/developers/web/api/rate-limits
  - type: Change Log
    url: https://airtable.com/developers/web/api/changelog
  - type: Newsletter
    url: http://eepurl.com/gVD-df
  - type: Extensions
    url: https://airtable.com/developers/extensions
  - type: Forum
    url: https://community.airtable.com/c/developers/55
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
aid: airtable
---