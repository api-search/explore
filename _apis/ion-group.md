---
name: Ion Group
description: >-
  We’re visionary innovators who are delivering mission-critical trading and
  workflow automation software to financial institutions, corporations, central
  banks, and governments. By combining our passion for automation with a
  strategic view on the industries we serve, we design solutions that improve
  decision-making, simplify complex processes, and empower people. Simply put,
  we help our customers do more, faster and better than before. We believe our
  investments in research and development are shaping the future of automation
  and enabling our customers to transform their business. And we embrace the
  power of community, working with each other and with our customers to succeed
  through a positive culture of continuous improvement.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: >-
  https://raw.githubusercontent.com/apis-json/artisanal/main/apis/ion-group/apis.yml
created: 2024/03/05
modified: 2024/03/05
specificationVersion: '0.16'
tags:
  - Financial
  - Data
apis:
  - name: Acuris Entities API
    description: >-
      The Acuris Entities API allows you to search over 1M records of private
      and public companies, firms, assets, and private investors.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://iongroup.com/analytics/data-portal/apis-data-feeds/entities-api/
    baseURL: https://api.example.com
    tags:
      - Companies
      - Firms
      - Assets
      - Investors
    properties:
      - type: OpenAPI
        url: >-
          https://iongroup.com/analytics/data-portal/apis-data-feeds/entities-api/documentation/low-level-documentation/
      - type: OpenAPI
        url: properties/entities-openapi-original.yml
        data:
          openapi: 3.0.2
          info:
            title: Acuris Entities API
          tags:
            - name: entities
              description: Get list of entities
          paths:
            /entities:
              get:
                tags:
                  - entities
                summary: Get list of entities (with optional filters)
                description: >-
                  Returns JSON containing entities matching given filtering
                  criteria set (or top ten entities when no filters are
                  provided).
            /entities/{id}:
              get:
                tags:
                  - entityById
                summary: Get one entity by its ID
            /entities/hierarchy:
              get:
                tags:
                  - entitiesHierarchy
                summary: Get entities hierarchy (with optional filters)
                description: >-
                  Returns JSON containing entities matching given filtering
                  criteria set (or top ten entities when no filters are 
    overlays:
      - type: APIs.io Search
        url: overlays/entities-openapi-search.yml
    aid: ion-group:acuris-entities-api
  - name: Dealogic Analytics Spac API
    description: >-
      Detailed profiling of Special Purpose Acquisition Companies (SPACs). Gain
      access to real-time content and analytics covering the full spectrum of
      the SPAC market, from IPO Filing/Pricing, additional fundraising via
      PIPEs, through to the M&A de-SPAC.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://iongroup.com/analytics/data-portal/apis-data-feeds/spac-api/
    baseURL: https://api.example.com
    tags:
      - SPAC
      - IPO
    properties:
      - type: OpenAPI
        url: >-
          https://iongroup.com/analytics/data-portal/apis-data-feeds/spac-api/documentation/low-level-documentation/
      - type: OpenAPI
        url: properties/dealogic-analytics-spac-openapi-original.yml
        data:
          openapi: 3.0.2
          info:
            title: Acuris Entities API
          tags:
            - name: entities
              description: Get list of entities
          paths:
            /entities:
              get:
                tags:
                  - entities
                summary: Get list of entities (with optional filters)
                description: >-
                  Returns JSON containing entities matching given filtering
                  criteria set (or top ten entities when no filters are
                  provided).
            /entities/{id}:
              get:
                tags:
                  - entityById
                summary: Get one entity by its ID
            /entities/hierarchy:
              get:
                tags:
                  - entitiesHierarchy
                summary: Get entities hierarchy (with optional filters)
                description: >-
                  Returns JSON containing entities matching given filtering
                  criteria set (or top ten entities when no filters are 
      - type: OpenAPI
        url: >-
          https://iongroup.com/analytics/data-portal/apis-data-feeds/spac-api/data-glossary/
      - type: OpenAPI
        url: >-
          https://iongroup.com/analytics/data-portal/apis-data-feeds/spac-api/error-handling/
      - type: OpenAPI
        url: >-
          https://iongroup.com/analytics/data-portal/apis-data-feeds/spac-api/changelog/
    overlays:
      - type: APIs.io Search
        url: overlays/dealogic-analytics-spac-openapi-search.yml
    aid: ion-group:dealogic-analytics-spac-api
common:
  - type: APIs & Data Feed
    url: https://iongroup.com/analytics/data-portal/apis-data-feeds/
  - type: Data Portal
    url: https://iongroup.com/analytics/data-portal/
  - type: GitHub
    url: https://github.com/iongroup
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
aid: ion-group
---