---
name: Elsevier
description: >-
  Elsevier is a Dutch academic publishing company specializing in scientific,
  technical, and medical content. Its products include journals such as The
  Lancet, Cell, the ScienceDirect collection of electronic journals, Trends, the
  Current Opinion series, the online citation database Scopus, the SciVal tool
  for measuring research performance, the ClinicalKey search engine for
  clinicians, and the ClinicalPath evidence-based cancer care service. 
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/elsevier.yml
created: 2023/11/22
modified: 2023/11/22
specificationVersion: '0.16'
tags:
  - Academic
  - Scientific
  - Science
  - Journals
apis:
  - name: Elsevier Scopus APIs
    description: >-
      Scopus delivers a comprehensive view of the world of research. Scopus.com
      allows you to track analyze and visualize research data from 5000
      different publishers. It covers 78 million items including records from
      journals, books and book series, conference proceedings and trade
      publications across 16 million Author Profiles and 70,000 Institutional
      Profiles All of this comes together to power your research and help you to
      stay abreast with current publications, find co-authors, analyze journals
      to publish in and track and monitor global trends
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://dev.elsevier.com/sc_apis.html
    baseURL: https://api.example.com
    tags:
      - Academic
      - Scientific
      - Science
      - Journals
    properties:
      - type: OpenAPI
        url: https://dev.elsevier.com/scopus.html
      - type: OpenAPI
        url: https://dev.elsevier.com/elsdoc/scopus
    overlays:
      - type: APIs.io Search
        url: overlays/https://dev.elsevier.com/elsdoc/scopus-openapi-search.yml
  - name: Elsevier ScienceDirect APIs
    description: >+
      ScienceDirect APIs expose peer-reviewed full-text scientific, technical
      and medical content from all scholarly publications indexed by
      ScienceDirect, Elsevier's premier scientific platform.

    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://dev.elsevier.com/sd_apis.html
    baseURL: https://api.example.com
    tags:
      - Academic
      - Scientific
      - Science
      - Journals
    properties:
      - type: OpenAPI
        url: https://dev.elsevier.com/sciencedirect.html
      - type: OpenAPI
        url: https://dev.elsevier.com/elsdoc/sciencedirect
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://dev.elsevier.com/elsdoc/sciencedirect-openapi-search.yml
  - name: Elsevier SciVal API
    description: >+
      The SciVal API gives access to a comprehensive basket of metrics for
      researchers (Scopus Author profiles) and all 8,500+ institutions available
      in SciVal, Elsevier's platform for research performance benchmarking. It
      returns metrics from SciVal for a given a Scopus Author or Institution
      identifier (or multiples of each).

    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://dev.elsevier.com/scival_apis.html
    baseURL: https://api.example.com
    tags:
      - Academic
      - Scientific
      - Science
      - Journals
    properties:
      - type: OpenAPI
        url: https://dev.elsevier.com/scival.html
      - type: OpenAPI
        url: https://dev.elsevier.com/elsdoc/scival
    overlays:
      - type: APIs.io Search
        url: overlays/https://dev.elsevier.com/elsdoc/scival-openapi-search.yml
common:
  - type: Portal
    url: https://dev.elsevier.com/
  - type: Use Cases
    url: https://dev.elsevier.com/use_cases.html
  - type: Terms of Service
    url: https://dev.elsevier.com/api_service_agreement.html
  - type: Examples
    url: https://dev.elsevier.com/examples.html
  - type: Guides
    url: https://dev.elsevier.com/technical_documentation.html
  - type: SDK
    url: https://github.com/ElsevierDev/elsapy
  - type: Support
    url: https://dev.elsevier.com/support.html
  - type: Privacy Policy
    url: http://www.elsevier.com/locate/privacypolicy
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---