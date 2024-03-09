---
name: Microsoft Azure
description: >-
  Microsoft Azure, often referred to as Azure is a cloud computing platform run
  by Microsoft. It offers access, management, and the development of
  applications and services through global data centers. It also provides a
  range of capabilities, including software as a service (SaaS), platform as a
  service (PaaS), and infrastructure as a service (IaaS). Microsoft Azure
  supports many programming languages, tools, and frameworks, including
  Microsoft-specific and third-party software and systems.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: >-
  https://raw.githubusercontent.com/apis-json/artisanal/main/apis/microsoft-azure.yml
created: 2023/11/8
modified: 2023/11/8
specificationVersion: '0.16'
tags:
  - APIs
  - Cloud
apis:
  - name: Azure API Management
    description: >-
      Deploy API gateways side-by-side with the APIs hosted in Azure, other
      clouds, and on-premises, optimizing API traffic flow. Meet security and
      compliance requirements while enjoying a unified management experience and
      full observability across all internal and external APIs.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://azure.microsoft.com/en-us/products/api-management/
    baseURL: https://api.example.com
    tags:
      - API Management
    properties:
      - type: OpenAPI
        url: >-
          https://learn.microsoft.com/en-us/rest/api/apimanagement/api-management-service?view=rest-apimanagement-2022-08-01
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/apimanagement.json
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/apimanagement.json-openapi-search.yml
  - name: Azure Cognitive Search
    description: >-
      Azure Cognitive Search, an AI-powered information retrieval platform,
      helps developers build rich search experiences and generative AI apps that
      combine large language models with enterprise data. Implement search
      functionality for any mobile or search application within your
      organization or as part of software as a service (SaaS) apps
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://azure.microsoft.com/en-us/products/ai-services/cognitive-search
    baseURL: https://api.example.com
    tags:
      - Cognitive
      - Search
    properties:
      - type: OpenAPI
        url: https://learn.microsoft.com/en-us/rest/api/searchmanagement/
      - type: OpenAPI
        url: >-
          https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/stable/2023-05-01/cognitiveservices.json
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/stable/2023-05-01/cognitiveservices.json-openapi-search.yml
  - name: Azure Key Vault
    description: >-
      Use Key Vault to safeguard and manage cryptographic keys, certificates and
      secrets used by cloud applications and services.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://learn.microsoft.com/en-us/rest/api/keyvault/
    baseURL: https://api.example.com
    tags:
      - API Management
    properties:
      - type: OpenAPI
        url: https://learn.microsoft.com/en-us/rest/api/keyvault/
      - type: OpenAPI
        url: >-
          https://github.com/Azure/azure-rest-api-specs/tree/main/specification/keyvault/resource-manager/Microsoft.KeyVault/stable/2023-07-01
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/Azure/azure-rest-api-specs/tree/main/specification/keyvault/resource-manager/Microsoft.KeyVault/stable/2023-07-01-openapi-search.yml
common:
  - type: Pricing
    url: https://azure.microsoft.com/en-us/pricing/
  - type: Getting Started
    url: https://azure.microsoft.com/en-us/get-started/
  - type: Templates
    url: >-
      https://learn.microsoft.com/en-us/samples/browse/?expanded=azure&products=azure-resource-manager
  - type: Blog
    url: https://azure.microsoft.com/en-us/blog/
  - type: Events
    url: https://azure.microsoft.com/en-us/resources/events/
  - type: Stories
    url: https://azure.microsoft.com/en-us/resources/developers/stories/
  - type: Marketplace
    url: https://azure.microsoft.com/en-us/partners/marketplace/
  - type: Support
    url: https://azure.microsoft.com/en-us/support/
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---