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
tags: []
apis:
  - name: Acuris Entities API
    description: >-
      The Acuris Entities API allows you to search over 1M records of private
      and public companies, firms, assets, and private investors.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://iongroup.com/analytics/data-portal/apis-data-feeds/entities-api/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: >-
          https://iongroup.com/analytics/data-portal/apis-data-feeds/entities-api/documentation/low-level-documentation/
      - type: OpenAPI
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
                  - Get
                  - List
                  - Of
                  - Entities
                  - (with
                  - Optional
                  - Filters)
                  - Entities
                summary: Get list of entities (with optional filters)
                description: >-
                  Returns JSON containing entities matching given filtering
                  criteria set (or top ten entities when no filters are
                  provided).
            /entities/{id}:
              get:
                tags:
                  - Get
                  - One
                  - Entity
                  - By
                  - Its
                  - Entities
                  - Id
                summary: Get one entity by its ID
            /entities/hierarchy:
              get:
                tags:
                  - Get
                  - Entities
                  - Hierarchy
                  - (with
                  - Optional
                  - Filters)
                  - Entities
                  - Id
                  - Hierarchy
                summary: Get entities hierarchy (with optional filters)
                description: >-
                  Returns JSON containing entities matching given filtering
                  criteria set (or top ten entities when no fi
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-302-info
              message: 3.0.2 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-description-error
              message: Info Description
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-tags-description-info
              message: Tag Descriptions
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-error
              message: Operation ID.
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
    overlays:
      - type: APIs.io Search
        url: overlays/entities-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/entities-openapi-api-evangelist-ratings.yml
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
    tags: []
    properties:
      - type: OpenAPI
        url: >-
          https://iongroup.com/analytics/data-portal/apis-data-feeds/spac-api/documentation/low-level-documentation/
      - type: OpenAPI
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
                  - Get
                  - List
                  - Of
                  - Entities
                  - (with
                  - Optional
                  - Filters)
                  - Entities
                summary: Get list of entities (with optional filters)
                description: >-
                  Returns JSON containing entities matching given filtering
                  criteria set (or top ten entities when no filters are
                  provided).
            /entities/{id}:
              get:
                tags:
                  - Get
                  - One
                  - Entity
                  - By
                  - Its
                  - Entities
                  - Id
                summary: Get one entity by its ID
            /entities/hierarchy:
              get:
                tags:
                  - Get
                  - Entities
                  - Hierarchy
                  - (with
                  - Optional
                  - Filters)
                  - Entities
                  - Id
                  - Hierarchy
                summary: Get entities hierarchy (with optional filters)
                description: >-
                  Returns JSON containing entities matching given filtering
                  criteria set (or top ten entities when no fi
      - type: OpenAPI
        url: >-
          https://iongroup.com/analytics/data-portal/apis-data-feeds/spac-api/data-glossary/
      - type: OpenAPI
        url: >-
          https://iongroup.com/analytics/data-portal/apis-data-feeds/spac-api/error-handling/
      - type: OpenAPI
        url: >-
          https://iongroup.com/analytics/data-portal/apis-data-feeds/spac-api/changelog/
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-302-info
              message: 3.0.2 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-description-error
              message: Info Description
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-tags-description-info
              message: Tag Descriptions
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-error
              message: Operation ID.
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
    overlays:
      - type: APIs.io Search
        url: overlays/dealogic-analytics-spac-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/dealogic-analytics-spac-openapi-api-evangelist-ratings.yml
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
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: ion-group
---