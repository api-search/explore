---
name: Docusign
description: >-
  DocuSign is an electronic signature solution that allows individuals and
  corporations to sign and manage documents electronically. It uses secure
  technology to authenticate entities, individuals, documents, and workflows.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/docusign.yml
created: 2023/11/22
modified: 2023/11/22
specificationVersion: '0.16'
tags:
  - Documents
  - Signatures
apis:
  - name: DocuSign Admin API
    description: >-
      An API for an organization administrator to manage organizations, accounts
      and users.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.docusign.com/docs/admin-api/
    baseURL: https://api.example.com
    tags:
      - Documents
      - Signatures
    properties:
      - type: OpenAPI
        url: https://developers.docusign.com/docs/admin-api/reference/
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/docusign/OpenAPI-Specifications/master/admin.rest.swagger-v2.json
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/docusign/OpenAPI-Specifications/master/admin.rest.swagger-v2.json-openapi-search.yml
  - name: DocuSign Click API
    description: >-
      DocuSign Click lets you capture consent to standard agreement terms with a
      single click: terms and conditions, terms of service, terms of use,
      privacy policies, and more. The Click API lets you include this
      customizable clickwrap solution in your DocuSign integrations.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.docusign.com/docs/click-api/click101/
    baseURL: https://api.example.com
    tags:
      - Documents
      - Signatures
    properties:
      - type: OpenAPI
        url: https://developers.docusign.com/docs/click-api/click101/
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/docusign/OpenAPI-Specifications/master/click.rest.swagger-v2.json
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/docusign/OpenAPI-Specifications/master/click.rest.swagger-v2.json-openapi-search.yml
  - name: DocuSign eSignature API
    description: >-
      The DocuSign eSignature API provides you with a powerful, convenient, and
      simple Web services API for interacting with DocuSign.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.docusign.com/docs/esign-rest-api/reference/
    baseURL: https://api.example.com
    tags:
      - Documents
      - Signatures
    properties:
      - type: OpenAPI
        url: https://developers.docusign.com/docs/esign-rest-api/reference/
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/docusign/OpenAPI-Specifications/master/esignature.rest.swagger-v2.1.json
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/docusign/OpenAPI-Specifications/master/esignature.rest.swagger-v2.1.json-openapi-search.yml
  - name: Docusign Monitor API
    description: >+
      DocuSign Monitor helps organizations protect their agreements with
      round-the-clock activity tracking. The Monitor API delivers this activity
      tracking information directly to existing security stacks or data
      visualization tools—enabling teams to detect unauthorized activity,
      investigate incidents, and quickly respond to verified threats. It also
      provides the flexibility security teams need to customize dashboards and
      alerts to meet specific business needs.

    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.docusign.com/docs/monitor-api/
    baseURL: https://api.example.com
    tags:
      - Documents
      - Signatures
    properties:
      - type: OpenAPI
        url: https://developers.docusign.com/docs/monitor-api/reference/
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/docusign/OpenAPI-Specifications/master/monitor.rest.swagger-v2.0.json
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/docusign/OpenAPI-Specifications/master/monitor.rest.swagger-v2.0.json-openapi-search.yml
common:
  - type: Getting Started
    url: https://developers.docusign.com/get-started
  - type: Tools
    url: https://developers.docusign.com/tools/overview/
  - type: Postman Collections
    url: https://developers.docusign.com/tools/postman/
  - type: IDE
    url: https://developers.docusign.com/tools/ide-extensions/
  - type: Support
    url: https://developers.docusign.com/support
  - type: Success Stories
    url: https://developers.docusign.com/success/
  - type: Developer Spotlight
    url: https://developers.docusign.com/developer-spotlight/
  - type: Events
    url: https://developers.docusign.com/developer-events/
  - type: Plans
    url: https://ecom.docusign.com/plans-and-pricing/developer
  - type: Partners
    url: https://developers.docusign.com/partner/integration-guide/
  - type: Change Log
    url: https://developers.docusign.com/changelog/?
  - type: Newsletter
    url: https://developers.docusign.com/newsletter/
  - type: Blog
    url: https://www.docusign.com/blog/developers
  - type: Support
    url: https://developers.docusign.com/support/
  - type: FAQs
    url: https://support.docusign.com/articles/DocuSign-Developer-Support-FAQs
  - type: Office Hours
    url: https://www.docusign.com/resources
  - type: SDKs
    url: https://developers.docusign.com/docs/sdks/
  - type: Webhooks
    url: https://developers.docusign.com/platform/webhooks/
  - type: Authentication
    url: https://developers.docusign.com/platform/auth/
  - type: Quickstarts
    url: https://developers.docusign.com/docs/esign-rest-api/quickstart/
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---