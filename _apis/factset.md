---
name: Factset
description: >-
  FactSet APIs connect applications and workflows to an extensive universe of
  content and functionality.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: >-
  https://raw.githubusercontent.com/apis-json/artisanal/main/apis/factset/apis.yml
created: 2024/03/02
modified: 2024/03/02
specificationVersion: '0.17'
tags:
  - Financial
apis:
  - name: Factset PA Engine API
    description: >-
      Through the PA Engine API, request analytics for multi-asset class
      performance, attribution, and risk, including the flexibility of choosing
      your portfolio, benchmark, return period, and more.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/pa-engine-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/pa-engine-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/pa-engine-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/pa-engine-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/pa-engine-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/pa-engine-api#changelog
      - type: OpenAPI
        url: properties/pa-engine-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/pa-engine-openapi-search.yml
  - name: Factset Formula API
    description: >-
      Use FactSet’s flexible, formula-based API to retrieve data from almost all
      available content sets FactSet offers through FactSet's FQL and Screening
      formulas.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/formula-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/formula-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/formula-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/formula-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/formula-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/formula-api#changelog
      - type: OpenAPI
        url: properties/formula-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/formula-openapi-search.yml
  - name: FactSet Global Prices API
    description: >-
      FactSet Global Prices API currently covers listing and composite level
      prices, volume, turnover, and VWAP data on a seven day week basis for a
      global equity universe.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-global-prices-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-global-prices-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-global-prices-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-global-prices-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-global-prices-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-global-prices-api#changelog
      - type: OpenAPI
        url: properties/global-prices-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/global-prices-openapi-search.yml
  - name: Open FactSet Database (OFDB) API
    description: >-
      Through Open FactSet Database (OFDB) API, users can create, modify and
      view non portfolio databases.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/ofdb-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/ofdb-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/ofdb-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/ofdb-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/ofdb-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/ofdb-api#changelog
      - type: OpenAPI
        url: properties/ofdb-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/ofdb-openapi-search.yml
  - name: FactSet Signals API
    description: >-
      Leverage Signals to identify material events for a company. Signals are
      derived from FactSet's core data,  cognitive computing technology, and our
      3rd party partners. 
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/signals-api
    baseURL: https://example.com
    tags:
      - AI/ML
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/signals-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/signals-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/signals-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/signals-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/signals-api#changelog
      - type: OpenAPI
        url: properties/signals-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/signals-openapi-search.yml
  - name: FactSet Natural Language Processing API
    description: >-
      These APIs leverage natural language processing to help extract meaningful
      data from unstructured text
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/natural-language-processing-api
    baseURL: https://example.com
    tags:
      - AI/ML
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/natural-language-processing-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/natural-language-processing-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/natural-language-processing-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/natural-language-processing-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/natural-language-processing-api#changelog
      - type: OpenAPI
        url: properties/natural-language-processing-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/natural-language-processing-openapi-search.yml
  - name: FactSet Universal Screening API
    description: >-
      Use the Universal Screening API to calculate your saved screens and then
      output the results in a convenient JSON format or archive the results to
      an Open FactSet Database (OFDB) file
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/universal-screening-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/universal-screening-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/universal-screening-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/universal-screening-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/universal-screening-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/universal-screening-api#changelog
      - type: OpenAPI
        url: properties/universal-screening-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/universal-screening-openapi-search.yml
  - name: FactSet Portfolio
    description: >-
      Through the Portfolio API, you can accomplish what-if analysis by
      uploading a paper portfolio to test out a new strategy or prospective
      opportunity.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/portfolio-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/portfolio-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/portfolio-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/portfolio-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/portfolio-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/portfolio-api#changelog
      - type: OpenAPI
        url: properties/portfolio-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/portfolio-openapi-search.yml
  - name: FactSet SPAR Engine API
    description: >-
      Through the SPAR API (Style, Performance, and Risk) monitor your
      portfolios’ returns against equity and fixed income benchmarks, and peer
      universes, with MPT risk statistics such as beta, standard deviation,
      r-squared, alpha, and tracking error…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/spar-engine-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/spar-engine-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/spar-engine-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/spar-engine-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/spar-engine-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/spar-engine-api#changelog
      - type: OpenAPI
        url: properties/spar-engine-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/spar-engine-openapi-search.yml
  - name: FactSet Prices API
    description: >-
      Gain access to comprehensive global coverage for equity prices, returns,
      volume, shares, splits, and dividends. Security types include Common
      Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit,
      Open-ended Fund, Exchange…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-prices-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-prices-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-prices-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-prices-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-prices-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-prices-api#changelog
      - type: OpenAPI
        url: properties/prices-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/prices-openapi-search.yml
  - name: FactSet Concordance API
    description: >-
      The FactSet Concordance API helps our users discover the respective
      FactSet Entity & People identifier for a specific entity based off of a
      list of provided corresponding attributes, such as Names, URLs, and
      Location.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-concordance-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-concordance-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-concordance-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-concordance-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-concordance-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-concordance-api#changelog
      - type: OpenAPI
        url: properties/concordance-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/concordance-openapi-search.yml
  - name: FactSet ESG API
    description: FactSet ESG API giving access to SASB & SDG Score data
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-esg-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-esg-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-esg-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-esg-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-esg-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-esg-api#changelog
      - type: OpenAPI
        url: properties/esg-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/esg-openapi-search.yml
  - name: FactSet Digital Cards
    description: >-
      The FactSet Digital Cards API provides quick access to key company
      information and market data in an easily consumable and sharable format.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-digital-cards
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-digital-cards#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-digital-cards#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-digital-cards#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-digital-cards#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-digital-cards#changelog
      - type: OpenAPI
        url: properties/digital-cards-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/digital-cards-openapi-search.yml
  - name: FactSet Vault API
    description: >-
      Through the Vault API, request validated pre-calculated returns and
      attribution data archived in Portfolio Vault to streamline your official
      performance and reporting workflows.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/vault-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vault-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vault-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vault-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vault-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vault-api#changelog
      - type: OpenAPI
        url: properties/vault-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/vault-openapi-search.yml
  - name: FactSet Chart Generation Service
    description: >-
      An API for getting chart images in the form of png or jpg based on various
      parameters like ticker, benchmark, currency, frequency, start and end date
      etc.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/chart-generation-service
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/chart-generation-service#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/chart-generation-service#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/chart-generation-service#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/chart-generation-service#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/chart-generation-service#changelog
      - type: OpenAPI
        url: properties/chart-generation-service-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/ chart-generation-service-openapi-search.yml
      - type: APIs.io Search
        url: overlays/chart-generation-service-openapi-search.yml
  - name: FactSet Real-Time News API
    description: >-
      Retrieve news by category, identifier, and keyword, for a specific date or
      range of dates. Endpoints can be subscribed for streamed updates.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/real-time-news-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/real-time-news-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-news-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/real-time-news-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-news-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/real-time-news-api#changelog
      - type: OpenAPI
        url: properties/real-time-news-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/real-time-news-openapi-search.yml
  - name: FactSet Vermilion API
    description: >-
      The Vermilion API, enables users to programmatically access FactSet's
      Vermilion Reporting Suite (VRS) and seamlessly integrate into customer's
      3rd party applications. The API is referred to as two key product
      initiatives, the REST API and the SCIM API.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/vermilion-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vermilion-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vermilion-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vermilion-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vermilion-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/vermilion-api#changelog
      - type: OpenAPI
        url: properties/vermilion-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/vermilion-openapi-search.yml
  - name: FactSet Estimates API
    description: >-
      20+ years of comprehensive estimates and statistics on a wide variety of
      financial statement items as well as industry-specific metrics. FactSet’s
      consensus estimates are aggregated from a wide base of contributors and
      cover over 19,000 active…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-estimates-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-api#changelog
      - type: OpenAPI
        url: properties/estimates-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/estimates-openapi-search.yml
  - name: FactSet Issue Tracker API
    description: >-
      Through Issue Tracker API, Clients can Create, Read and Update the Issue
      Tracker Issues programmatically.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/issue-tracker-api
    baseURL: https://example.com
    tags:
      - Utility
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/issue-tracker-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/issue-tracker-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/issue-tracker-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/issue-tracker-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/issue-tracker-api#changelog
      - type: OpenAPI
        url: properties/issue-tracker-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/issue-tracker-openapi-search.yml
  - name: FactSet Axioma Equity Optimizer API
    description: >-
      The Axioma Equity API offers equity-based portfolio optimizations,
      balancing a client’s investment objectives within the confines of the
      established constraints within their investment strategy.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/axioma-equity-optimizer-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-equity-optimizer-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-equity-optimizer-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-equity-optimizer-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-equity-optimizer-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-equity-optimizer-api#changelog
      - type: OpenAPI
        url: properties/axioma-equity-optimizer-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/axioma-equity-optimizer-openapi-search.yml
  - name: FactSet Barra Portfolio Optimizer
    description: Barra Portfolio Optimizer (BPM) API
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/barra-portfolio-optimizer
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/barra-portfolio-optimizer#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/barra-portfolio-optimizer#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/barra-portfolio-optimizer#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/barra-portfolio-optimizer#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/barra-portfolio-optimizer#changelog
      - type: OpenAPI
        url: properties/barra-portfolio-optimizer-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/barra-portfolio-optimizer-openapi-search.yml
  - name: FactSet Exchange DataFeed Snapshot API - Symbol List
    description: >-
      FactSet’s Exchange DataFeed Snapshot API provides cost-effective access to
      real-time and delayed global exchange data.  Proprietary technology
      normalizes over 200 global exchanges and 150+ data fields.  Asset types
      integrated include equities,…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-symbol-list
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-symbol-list#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-symbol-list#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-symbol-list#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-symbol-list#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-symbol-list#changelog
      - type: OpenAPI
        url: >-
          properties/exchange-datafeed-snapshot-api-symbol-list-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/exchange-datafeed-snapshot-api-symbol-list-openapi-search.yml
  - name: FactSet Event Calendar API
    description: >-
      Accessing Event Calendar content along with business logic contained in
      the workstation experience
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/event-calendar-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/event-calendar-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/event-calendar-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/event-calendar-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/event-calendar-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/event-calendar-api#changelog
      - type: OpenAPI
        url: properties/event-calendar-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/event-calendar-openapi-search.yml
  - name: FactSet ID Lookup API
    description: >-
      FactSet Identifier Lookup API exposes the service that powers the search
      functionality in FactSet WorkStation and FactSet Web. Clients can leverage
      this API for their search functionality to return tickers, entity names,
      and other identifiers…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/id-lookup-api
    baseURL: https://example.com
    tags:
      - Utility
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/id-lookup-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/id-lookup-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/id-lookup-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/id-lookup-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/id-lookup-api#changelog
      - type: OpenAPI
        url: properties/id-lookup-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/id-lookup-openapi-search.yml
  - name: FactSet Conversational API Powered by FactSet Mercury
    description: >-
      The FactSet Conversational API allows clients to white-label core FactSet
      Mercury capabilities in a client’s chatbot experience.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/conversational-api-powered-factset-mercury
    baseURL: https://example.com
    tags:
      - AI/ML
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/conversational-api-powered-factset-mercury#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/conversational-api-powered-factset-mercury#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/conversational-api-powered-factset-mercury#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/conversational-api-powered-factset-mercury#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/conversational-api-powered-factset-mercury#changelog
      - type: OpenAPI
        url: properties/conversational-api-powered-by-mercury-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/conversational-api-powered-by-mercury-openapi-search.yml
  - name: FactSet IRN Contacts API
    description: >-
      Contacts API allows users to create, update and delete Contacts as well as
      configure settings in the Internal Research Notes Contacts application.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/irn-contacts-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-contacts-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-contacts-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-contacts-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-contacts-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-contacts-api#changelog
      - type: OpenAPI
        url: properties/irn-contacts-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/irn-contacts-openapi-search.yml
  - name: FactSet Overview Report Builder API
    description: >-
      Relevant industry-specific data for high level analysis of public and
      private companies 
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/overview-report-builder-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/overview-report-builder-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/overview-report-builder-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/overview-report-builder-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/overview-report-builder-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/overview-report-builder-api#changelog
      - type: OpenAPI
        url: properties/overview-report-builder-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/overview-report-builder-openapi-search.yml
  - name: FactSet Documents Distributor - CallStreet Events
    description: >-
      CallStreet Events contains all the Documents Distributor APIs that offer
      events data such as Events Audio and Near Real-Time Transcripts.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/documents-distributor-callstreet-events
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-callstreet-events#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-callstreet-events#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-callstreet-events#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-callstreet-events#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-callstreet-events#changelog
      - type: OpenAPI
        url: >-
          properties/documents-distributor-callstreet-events-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/documents-distributor-callstreet-events-openapi-search.yml
  - name: FactSet Recommendation List API for Digital Portals
    description: >-
      Manage lists of financial products via a CMS or upload job, including
      revision control.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/recommendation-list-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/recommendation-list-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/recommendation-list-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/recommendation-list-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/recommendation-list-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/recommendation-list-api-digital-portals#changelog        
    overlays: []
  - name: FactSet Benchmarks API
    description: >-
      Returns Benchmark Constituent data including weights, price, and market
      value for a specified date.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-benchmarks-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-benchmarks-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-benchmarks-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-benchmarks-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-benchmarks-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-benchmarks-api#changelog
      - type: OpenAPI
        url: properties/benchmarks-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/benchmarks-openapi-search.yml
  - name: FactSet Bonds API for Digital Portals
    description: >-
      Search for fixed income instruments, using a criteria-based screener. The
      API provides also fundamental data and key figures.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/bonds-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/bonds-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/bonds-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/bonds-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/bonds-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/bonds-api-digital-portals#changelog       
    overlays: []
  - name: FactSet Virtual Portfolio API for Digital Portals
    description: >-
      Virtual portfolios empower self-directed investors to define, track and
      realize their mid- to long-term financial strategies
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/virtual-portfolio-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/virtual-portfolio-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/virtual-portfolio-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/virtual-portfolio-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/virtual-portfolio-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/virtual-portfolio-api-digital-portals#changelog        
    overlays: []
  - name: FactSet S&P Global Fixed Income Evaluated Prices and Analytics API
    description: >-
      S&P Global Fixed Income Evaluated Prices & Analytics API provides access
      to evaluated pricing and analytics data for Corporate Bonds, Municipal
      Bonds and Asset Backed Securities(ABS). Perform quick analytics by
      controlling the date ranges, frequency.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/sp-global-fixed-income-evaluated-prices-and-analytics-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/sp-global-fixed-income-evaluated-prices-and-analytics-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/sp-global-fixed-income-evaluated-prices-and-analytics-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/sp-global-fixed-income-evaluated-prices-and-analytics-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/sp-global-fixed-income-evaluated-prices-and-analytics-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/sp-global-fixed-income-evaluated-prices-and-analytics-api#changelog
      - type: OpenAPI
        url: >-
          properties/s-p-global-fixed-income-evaluated-prices-and-analytics-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/s-p-global-fixed-income-evaluated-prices-and-analytics-openapi-search.yml
  - name: FactSet Foreign Exchange Rate API
    description: >-
      Access Foreign Exchange Rate Spots and Forwards for a given currency pair
      and date range.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/foreign-exchange-rate-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/foreign-exchange-rate-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/foreign-exchange-rate-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/foreign-exchange-rate-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/foreign-exchange-rate-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/foreign-exchange-rate-api#changelog
      - type: OpenAPI
        url: properties/foreign-exchange-rate-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/foreign-exchange-rate-openapi-search.yml
  - name: FactSet Fixed Income Analytics Batcher API
    description: >-
      The Fixed Income Analytics Batcher API allows the user to enrich portfolio
      holdings with fixed income analytics and monitor requests interactively.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/fixed-income-analytics-batcher-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-analytics-batcher-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-analytics-batcher-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-analytics-batcher-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-analytics-batcher-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-analytics-batcher-api#changelog
      - type: OpenAPI
        url: properties/fixed-income-analytics-batcher-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/fixed-income-analytics-batcher-openapi-search.yml
  - name: FactSet Open Risk API
    description: >-
      Through this API one can get a comprehensive access to factor-based linear
      risk analytics engine, offering flexible and powerful risk analyses with
      full capability.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/openrisk-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/openrisk-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/openrisk-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/openrisk-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/openrisk-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/openrisk-api#changelog
      - type: OpenAPI
        url: properties/open-risk-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/open-risk-openapi-search.yml
  - name: FactSet Intraday Tick History API
    description: >-
      FactSet’s Tick History provides cost-effective access to consolidated
      real-time and delayed global exchange data. Proprietary technology
      normalizes data from over 200 global exchanges and across 19 tick history
      fields. Asset types integrated…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/factset-intraday-tick-history-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-intraday-tick-history-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-intraday-tick-history-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-intraday-tick-history-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-intraday-tick-history-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-intraday-tick-history-api#changelog
      - type: OpenAPI
        url: properties/intraday-tick-history-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/intraday-tick-history-openapi-search.yml
  - name: FactSet Funds API
    description: Reference and Time Series Mutual Fund Data
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-funds-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-funds-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-funds-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-funds-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-funds-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-funds-api#changelog
      - type: OpenAPI
        url: properties/funds-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/funds-openapi-search.yml
  - name: FactSet Terms and Conditions API
    description: FactSet Security Reference - Fixed Income Terms & Conditions
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-terms-and-conditions-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-terms-and-conditions-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-terms-and-conditions-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-terms-and-conditions-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-terms-and-conditions-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-terms-and-conditions-api#changelog
      - type: OpenAPI
        url: properties/terms-and-conditions-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/terms-and-conditions-openapi-search.yml
  - name: FactSet Northfield Portfolio Optimizer
    description: Northfield Portfolio Optimizer API
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/northfield-portfolio-optimizer
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/northfield-portfolio-optimizer#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/northfield-portfolio-optimizer#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/northfield-portfolio-optimizer#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/northfield-portfolio-optimizer#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/northfield-portfolio-optimizer#changelog
      - type: OpenAPI
        url: properties/northfield-portfolio-optimizer-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/northfield-portfolio-optimizer-openapi-search.yml
  - name: FactSet Security Modeling API
    description: >-
      The Security Modeling (SM) API allows clients to programmatically work
      with the terms and conditions (t&c's) stored in the Security Modeling
      application
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/security-modeling-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/security-modeling-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/security-modeling-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/security-modeling-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/security-modeling-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/security-modeling-api#changelog
      - type: OpenAPI
        url: properties/security-modeling-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/security-modeling-openapi-search.yml
  - name: FactSet Stocks API for Digital Portals
    description: >-
      Search for equity instruments based on stock-specific parameters, request
      EOD benchmark key figures and selected fundamentals (end of fiscal year
      and potential daily updates).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/stocks-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/stocks-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/stocks-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/stocks-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/stocks-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/stocks-api-digital-portals#changelog       
    overlays: []
  - name: FactSet Company Logo API for Digital Portals
    description: Logo images of listed companies (US, CA, EU)
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/company-logo-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/company-logo-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/company-logo-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/company-logo-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/company-logo-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/company-logo-api-digital-portals#changelog
      - type: OpenAPI
        url: properties/company-logo-api-for-digital-portals-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/company-logo-api-for-digital-portals-openapi-search.yml
  - name: FactSet Securitized Derivatives API for Digital Portals
    description: >-
      Fundamental data for a single securitized derivative. Notation-based key
      figures of a securitized derivative.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals#changelog         
    overlays: []
  - name: FactSet Watchlist API for Digital Portals
    description: >-
      Watchlists keeps track of users´ individual investment objectives in
      self-directed wealth management applications.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/watchlist-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/watchlist-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/watchlist-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/watchlist-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/watchlist-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/watchlist-api-digital-portals#changelog         
    overlays: []
  - name: FactSet Quant Factor Library API
    description: >-
      The FactSet Quant Factor Library (QFL) API helps to detect investment
      themes across global equity markets, incorporate ideas into your portfolio
      construction process, and transform raw data into actionable intelligence.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-quant-factor-library-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-quant-factor-library-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-quant-factor-library-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-quant-factor-library-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-quant-factor-library-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-quant-factor-library-api#changelog
      - type: OpenAPI
        url: properties/quant-factor-library-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/quant-factor-library-openapi-search.yml
  - name: FactSet Exchange DataFeed Data Model API
    description: >-
      The Exchange DataFeed Data Model API provides mapping tables for
      enumeration values used in the FactSet Real-Time products
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/exchange-datafeed-data-model-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-data-model-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-data-model-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-data-model-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-data-model-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-data-model-api#changelog
      - type: OpenAPI
        url: properties/exchange-datafeed-data-model-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/exchange-datafeed-data-model-openapi-search.yml
  - name: FactSet Fixed Income Calculation API
    description: >-
      Leverage FactSet's Fixed Income Calculation Engine to derive analytics on
      the fly
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/fixed-income-calculation-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-calculation-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-calculation-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-calculation-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-calculation-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/fixed-income-calculation-api#changelog
      - type: OpenAPI
        url: properties/fixed-income-calculation-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/fixed-income-calculation-openapi-search.yml
  - name: FactSet Tick History API
    description: >-
      Tick History provides dynamic access to historical tick data for a
      specific security for specific dates or date range.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-tick-history-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-tick-history-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-tick-history-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-tick-history-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-tick-history-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-tick-history-api#changelog
      - type: OpenAPI
        url: properties/tick-history-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/tick-history-openapi-search.yml
  - name: FactSet IRN Configuration API
    description: >-
      Config API allows users to read and update configuration and settings of
      the Internal Research Notes.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/irn-configuration-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-configuration-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-configuration-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-configuration-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-configuration-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-configuration-api#changelog
      - type: OpenAPI
        url: properties/irn-configuration-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/irn-configuration-openapi-search.yml
  - name: FactSet IRN Custom Symbols API
    description: >-
      This API allows users to create, read, edit and delete IRN custom symbols
      as well as configure settings in the Internal Research Notes Symbol
      Manager application.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/irn-custom-symbols-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-custom-symbols-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-custom-symbols-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-custom-symbols-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-custom-symbols-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/irn-custom-symbols-api#changelog
      - type: OpenAPI
        url: properties/irn-custom-symbols-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/irn-custom-symbols-openapi-search.yml
  - name: FactSet Portfolio Optimizer API
    description: >-
      The FactSet Portfolio Optimizer (FPO) offers full multi-asset class
      portfolio optimization,  balancing a client’s investment objectives within
      the confines of the established constraints within the investment
      strategy.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-portfolio-optimizer-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-portfolio-optimizer-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-portfolio-optimizer-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-portfolio-optimizer-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-portfolio-optimizer-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-portfolio-optimizer-api#changelog
      - type: OpenAPI
        url: properties/portfolio-optimizer-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/portfolio-optimizer-openapi-search.yml
  - name: FactSet Standard Datafeed API
    description: Download standard datafeed tables and schemas based on user subscription
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/standard-datafeed-api
    baseURL: https://example.com
    tags:
      - Utility
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/standard-datafeed-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/standard-datafeed-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/standard-datafeed-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/standard-datafeed-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/standard-datafeed-api#changelog
      - type: OpenAPI
        url: properties/standard-datafeed-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/standard-datafeed-openapi-search.yml
  - name: FactSet Real-Time Time Series API
    description: >-
      Time series data, end-of-day or intraday, tick-by-tick or subsampled.
      Additional vendor-specific endpoints provide a modified interface for
      seamless integration with the ChartIQ chart library.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/real-time-time-series-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-time-series-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-time-series-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-time-series-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-time-series-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-time-series-api#changelog
      - type: OpenAPI
        url: properties/real-time-time-series-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/real-time-time-series-openapi-search.yml
  - name: FactSet BookBuilder API
    description: >-
      The BookBuilder API is a powerful tool that quickly combines FactSet’s
      detailed reports for companies of interest into polished pdfs that can be
      read, saved down, and shared with others.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/bookbuilder-api
    baseURL: https://example.com
    tags:
      - Utility
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/bookbuilder-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/bookbuilder-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/bookbuilder-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/bookbuilder-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/bookbuilder-api#changelog
      - type: OpenAPI
        url: properties/bookbuilder-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/bookbuilder-openapi-search.yml
  - name: FactSet Exchange DataFeed Snapshot API - Entire Exchange
    description: >-
      Provides clients access to Snapshot files created at 15-minute intervals
      for an entire exchange
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-entire-exchange
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-entire-exchange#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-entire-exchange#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-entire-exchange#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-entire-exchange#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/exchange-datafeed-snapshot-api-entire-exchange#changelog
      - type: OpenAPI
        url: >-
          properties/exchange-datafeed-snapshot-api-entire-exchange-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/exchange-datafeed-snapshot-api-entire-exchange-openapi-search.yml
  - name: FactSet Ownership API
    description: >-
      FactSet’s Fund Ownership API gives access to underlying fund holding
      details for a specified fund ID or list of IDs. Holdings details include
      industry codes, security identifiers, adjusted market value, adjusted
      shares held, and issue type.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-ownership-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-api#changelog
      - type: OpenAPI
        url: properties/ownership-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/ownership-openapi-search.yml
  - name: FactSet Portfolio Reporting Batcher API
    description: The PRB API allows clients to trigger existing PRB jobs.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/portfolio-reporting-batcher-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-reporting-batcher-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-reporting-batcher-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-reporting-batcher-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-reporting-batcher-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-reporting-batcher-api#changelog
      - type: OpenAPI
        url: properties/portfolio-reporting-batcher-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/portfolio-reporting-batcher-openapi-search.yml
  - name: FactSet Global Filings API
    description: ' This API is designed to expose document search and document retrieval functionality'
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/global-filings-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/global-filings-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/global-filings-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/global-filings-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/global-filings-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/global-filings-api#changelog
      - type: OpenAPI
        url: properties/global-filings-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/global-filings-openapi-search.yml
  - name: FactSet Symbology API
    description: >-
      FactSet Symbology API provides symbol resolution services, allowing users
      to translate from familiar market symbols to FactSet's native symbology.
      FactSet's symbology sits at the center of its hub-and-spoke data model,
      enabling you to quickly…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/symbology-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/symbology-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/symbology-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/symbology-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/symbology-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/symbology-api#changelog
      - type: OpenAPI
        url: properties/symbology-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/symbology-openapi-search.yml
  - name: FactSet StreetAccount News API
    description: >-
      Accessing streetAccount news along with business logic contained in the
      workstation experience
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/streetaccount-news-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/streetaccount-news-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/streetaccount-news-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/streetaccount-news-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/streetaccount-news-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/streetaccount-news-api#changelog
      - type: OpenAPI
        url: properties/streetaccount-news-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/streetaccount-news-openapi-search.yml
  - name: FactSet Entity Report Builder API
    description: >-
      Create entity tree reports that display complex ownership structures
      through the FactSet Entity Report Builder API.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/factset-entity-report-builder-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-entity-report-builder-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-entity-report-builder-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-entity-report-builder-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-entity-report-builder-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-entity-report-builder-api#changelog
      - type: OpenAPI
        url: properties/entity-report-builder-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/entity-report-builder-openapi-search.yml
  - name: FactSet People API
    description: >-
      Fetch People Profiles, Job History, or get associated positions and names
      of companies.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-people-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-people-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-people-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-people-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-people-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-people-api#changelog
      - type: OpenAPI
        url: properties/people-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/people-openapi-original.yml
      - type: APIs.io Search
        url: overlays/people-openapi-search.yml
  - name: FactSet Axioma Fixed Income Optimizer
    description: Fixed Income-based portfolio optimization
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/axioma-fixed-income-optimizer
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-fixed-income-optimizer#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-fixed-income-optimizer#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-fixed-income-optimizer#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-fixed-income-optimizer#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/axioma-fixed-income-optimizer#changelog
      - type: OpenAPI
        url: properties/axioma-fixed-income-optimizer-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/axioma-fixed-income-optimizer-openapi-search.yml
  - name: FactSet IRN Meetings API
    description: >-
      Meetings API allows users to extract, create, update and delete their
      meetings and appointments in Internal Research Notes application.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/irn-meetings-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-meetings-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-meetings-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-meetings-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-meetings-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-meetings-api#changelog
      - type: OpenAPI
        url: properties/irn-meetings-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/irn-meetings-openapi-search.yml
  - name: FactSet Fundamentals Report Builder API
    description: >-
      Report Builder APIs return data in relational structures and with industry
      handling to provide the most relevant financial data in a
      presentation-ready format.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/factset-fundamentals-report-builder-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-report-builder-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-report-builder-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-report-builder-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-report-builder-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-report-builder-api#changelog
      - type: OpenAPI
        url: properties/fundamentals-report-builder-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/fundamentals-report-builder-openapi-original.yml
      - type: APIs.io Search
        url: overlays/fundamentals-report-builder-openapi-search.yml
  - name: FactSet ETF Profile and Prices API
    description: >-
      Access FactSet-collected profile data and pricing for Exchange Traded
      Funds (ETFs).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/etf-profile-and-prices-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/etf-profile-and-prices-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/etf-profile-and-prices-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/etf-profile-and-prices-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/etf-profile-and-prices-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/etf-profile-and-prices-api#changelog
      - type: OpenAPI
        url: properties/etf-profile-and-prices-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/etf-profile-and-prices-openapi-search.yml
  - name: FactSet Classifications API
    description: Get Industry Classifications from a variety of vendors
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/classifications-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/classifications-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/classifications-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/classifications-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/classifications-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/classifications-api#changelog
      - type: OpenAPI
        url: properties/classifications-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/classifications-openapi-search.yml
  - name: FactSet Analytics Datastore API
    description: >-
      Request pre-calculated Portfolio Analytics data saved in FactSet's
      Analytics Datastore, via deterministic URLs.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/analytics-datastore-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/analytics-datastore-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/analytics-datastore-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/analytics-datastore-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/analytics-datastore-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/analytics-datastore-api#changelog
      - type: OpenAPI
        url: properties/analytics-datastore-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/analytics-datastore-openapi-search.yml
  - name: FactSet Quant Engine API
    description: >-
      Use Quant Engine API to retrieve quantitative dataset from FactSet Content
      Database
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/quant-engine-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/quant-engine-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/quant-engine-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/quant-engine-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/quant-engine-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/quant-engine-api#changelog
      - type: OpenAPI
        url: properties/quant-engine-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/quant-engine-openapi-search.yml
  - name: FactSet Investment Banking Office Refresh API
    description: Refresh FactSet models (e.g., Excel templates with =FDS codes).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/investment-banking-office-refresh-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/investment-banking-office-refresh-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/investment-banking-office-refresh-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/investment-banking-office-refresh-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/investment-banking-office-refresh-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/investment-banking-office-refresh-api#changelog
      - type: OpenAPI
        url: properties/investment-banking-office-refresh-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/investment-banking-office-refresh-openapi-original.yml
      - type: APIs.io Search
        url: overlays/investment-banking-office-refresh-openapi-search.yml
  - name: FactSet Funds API for Digital Portals
    description: >-
      Search for mutual funds and ETFs using one single consolidated API,
      including a criteria-based screener.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/funds-api-digital-portals
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/funds-api-digital-portals#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/funds-api-digital-portals#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/funds-api-digital-portals#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/funds-api-digital-portals#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/funds-api-digital-portals#changelog       
    overlays: []
  - name: FactSet Content Feeds Data Dictionary
    description: >-
      Browse data items and definitions available through FactSet's off platform
      product offerings.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/content-feeds-data-dictionary
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/content-feeds-data-dictionary#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/content-feeds-data-dictionary#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/content-feeds-data-dictionary#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/content-feeds-data-dictionary#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/content-feeds-data-dictionary#changelog
      - type: OpenAPI
        url: properties/content-feeds-data-dictionary-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/content-feeds-data-dictionary-openapi-search.yml
  - name: FactSet Private Markets API
    description: FactSet Private Markets API
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-private-markets-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-private-markets-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-private-markets-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-private-markets-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-private-markets-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-private-markets-api#changelog
      - type: OpenAPI
        url: properties/private-markets-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/private-markets-openapi-search.yml
  - name: FactSet Programmatic Environment API
    description: FactSet Programmatic Environment API
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/factset-programmatic-environment-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-programmatic-environment-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-programmatic-environment-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-programmatic-environment-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-programmatic-environment-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-programmatic-environment-api#changelog
      - type: OpenAPI
        url: properties/programmatic-environment-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/programmatic-environment-openapi-search.yml
  - name: FactSet Procure to Pay SCIM
    description: >-
      Create users and manage user attributes, entitlements and security
      settings
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/procure-to-pay-api-scim
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-api-scim#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-api-scim#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-api-scim#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-api-scim#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-api-scim#changelog
      - type: OpenAPI
        url: properties/procure-to-pay-api-scim-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/procure-to-pay-api-scim-openapi-search.yml
  - name: FactSet Publisher API
    description: >-
      Through the Publisher API, you can optimize your reporting workflows by
      calculating customized, presentation-ready documents that integrate
      Portfolio Analysis, SPAR, commentary, risk, as well as your firm's
      proprietary data.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/publisher-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/publisher-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/publisher-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/publisher-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/publisher-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/publisher-api#changelog
      - type: OpenAPI
        url: properties/publisher-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/publisher-openapi-search.yml
  - name: FactSet Options API
    description: >-
      The FactSet Options API provides Chains and related pricing data such as
      mid bid-ask price, reference data (e.g., strike price), and risk measures
      (e.g., Greeks and implied volatility).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-options-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-options-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-options-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-options-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-options-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-options-api#changelog
      - type: OpenAPI
        url: properties/options-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/options-openapi-search.yml
  - name: FactSet Ownership Report Builder API
    description: Returns top holders of company and fund equity
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/factset-ownership-report-builder-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-report-builder-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-report-builder-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-report-builder-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-report-builder-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-ownership-report-builder-api#changelog
      - type: OpenAPI
        url: properties/ownership-report-builder-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/ownership-report-builder-openapi-search.yml
  - name: FactSet Documents Distributor - Documents API
    description: >-
      Documents APIs that provide filings such as Global Filings and XML files
      such as StreetAccount
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/documents-distributor-documents-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-documents-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-documents-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-documents-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-documents-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/documents-distributor-documents-api#changelog
      - type: OpenAPI
        url: properties/documents-distributor-documents-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/documents-distributor-documents-openapi-search.yml
  - name: FactSet Portfolio Metadata API
    description: >-
      The Portfolio Metadata API will allow users to read, write, and edit ACCTs
      and ACCT properties as well as ACTMs and components.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/portfolio-metadata-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-metadata-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-metadata-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-metadata-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-metadata-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/portfolio-metadata-api#changelog
      - type: OpenAPI
        url: properties/portfolio-metadata-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/portfolio-metadata-openapi-search.yml
  - name: FactSet Optimization Engine API (Multi-period)
    description: >-
      The Optimization Engine API (Multi-period) allows users to execute
      multi-period optimization, with client provided data, to solve dynamic
      asset allocation problems
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/optimization-engine-api-multi-period
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/optimization-engine-api-multi-period#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/optimization-engine-api-multi-period#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/optimization-engine-api-multi-period#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/optimization-engine-api-multi-period#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/optimization-engine-api-multi-period#changelog
      - type: OpenAPI
        url: properties/optimization-engine-api-multi-period-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/optimization-engine-api-multi-period-openapi-search.yml
  - name: FactSet Real-Time Price Alerting API
    description: >-
      Basic Price Alerting deals with generation of alerts based on current
      price data. Users can define an upper or lower limit and choose on which
      price type those limit conditions apply.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/real-time-price-alerting-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-price-alerting-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-price-alerting-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-price-alerting-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-price-alerting-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-price-alerting-api#changelog
      - type: OpenAPI
        url: properties/real-time-price-alerting-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/real-time-price-alerting-openapi-search.yml
  - name: FactSet Real-Time Quotes API
    description: >-
      The Quotes API combines endpoints for retrieving security end-of-day,
      delayed, and realtime prices with performance key figures and basic
      reference data on the security and market level.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/real-time-quotes-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-quotes-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-quotes-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-quotes-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-quotes-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/real-time-quotes-api#changelog
      - type: OpenAPI
        url: properties/real-time-quotes-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/real-time-quotes-openapi-search.yml
  - name: FactSet Open FactSet Marketplace API
    description: >-
      Access FactSet’s comprehensive catalog of Data Feeds, APIs and Technology
      Solutions available on the Open FactSet Marketplace.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/openfactset-marketplace-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-marketplace-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-marketplace-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-marketplace-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-marketplace-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-marketplace-api#changelog
      - type: OpenAPI
        url: properties/open-marketplace-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/open-marketplace-openapi-search.yml
  - name: FactSet Entity API
    description: ' FactSet’s Entity API provides access to FactSet’s complete security and entity level symbology, comprehensive entity reference data, and all of the necessary relationships and connections to create a foundation that tightly correlates disparate sources o'
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-entity-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-entity-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-entity-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-entity-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-entity-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-entity-api#changelog
      - type: OpenAPI
        url: properties/entity-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/entity-openapi-search.yml
  - name: Procure to Pay Invoice and Billing
    description: >-
      List and download available PDF invoices. Generate custom billing
      reports. 
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/procure-to-pay-invoice-and-billing
    baseURL: https://example.com
    tags:
      - Utility
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-invoice-and-billing#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-invoice-and-billing#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-invoice-and-billing#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-invoice-and-billing#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/procure-to-pay-invoice-and-billing#changelog
      - type: OpenAPI
        url: properties/procure-to-pay-api-scim-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/procure-to-pay-api-scim-openapi-search.yml
  - name: FactSet IRN Notes API
    description: >-
      Notes API allows users to extract, create, update and delete their notes
      in the Internal Research Notes application.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/irn-notes-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-notes-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-notes-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-notes-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-notes-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/irn-notes-api#changelog
      - type: OpenAPI
        url: properties/irn-notes-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/irn-notes-openapi-search.yml
  - name: FactSet RBICS API
    description: >-
      A Comprehensive structured taxonomy to classify companies by what they
      primarily do. FactSet Revere Business Industry Classification System
      (RBICS) delivers a granular view for investors by classifying companies
      using a bottom-up approach…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-rbics-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-rbics-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-rbics-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-rbics-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-rbics-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-rbics-api#changelog
      - type: OpenAPI
        url: properties/rbics-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/rbics-openapi-search.yml
  - name: FactSet GeoRev API
    description: >-
      FactSet Revere Geographic Revenue ("GeoRev") Exposure data provides a
      highly structured and normalized display of companies’ revenues by
      geography.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-georev-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-georev-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-georev-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-georev-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-georev-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-georev-api#changelog
      - type: OpenAPI
        url: properties/georev-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/georev-openapi-original.yml
      - type: APIs.io Search
        url: overlays/georev-openapi-search.yml
  - name: FactSet Direct Streaming of Transaction Messages API
    description: >-
      Connect transaction data from your OMS to be leveraged in FactSet's PMP
      and Portfolio Analytics applications
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/direct-streaming-transaction-messages-api
    baseURL: https://example.com
    tags:
      - Analytics
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/direct-streaming-transaction-messages-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/direct-streaming-transaction-messages-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/direct-streaming-transaction-messages-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/direct-streaming-transaction-messages-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/direct-streaming-transaction-messages-api#changelog
      - type: OpenAPI
        url: >-
          properties/direct-streaming-of-transaction-messages-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/direct-streaming-of-transaction-messages-openapi-original.yml
      - type: APIs.io Search
        url: overlays/direct-streaming-of-transaction-messages-openapi-search.yml
  - name: Open FactSet Partners - Documents
    description: 'Access to all job listing files provided by the OFM Partners: LinkUp'
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/openfactset-partners-documents
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-partners-documents#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-partners-documents#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-partners-documents#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-partners-documents#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/openfactset-partners-documents#changelog
      - type: OpenAPI
        url: properties/open-partners-documents-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/open-partners-documents-openapi-search.yml
  - name: FactSet Estimates Report Builder API
    description: >-
      The FactSet Estimates Report Builder APIs return consensus estimate data
      with fiscal periods and line items structured in a presentation-ready
      format.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/factset-estimates-report-builder-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-report-builder-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-report-builder-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-report-builder-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-report-builder-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-estimates-report-builder-api#changelog
      - type: OpenAPI
        url: properties/estimates-report-builder-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/estimates-report-builder-openapi-search.yml
  - name: FactSet Data Monitor API
    description: >-
      Data Monitor is an SDK that provides access to the same, trusted,
      information available within FactSet's Workstation and Web offerings.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/data-monitor-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/data-monitor-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/data-monitor-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/data-monitor-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/data-monitor-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/data-monitor-api#changelog
    overlays: []
  - name: FactSet Fundamentals API
    description: >-
      Gain access to current, comprehensive, and comparative information on
      securities in worldwide developed and emerging markets. Composed of annual
      and interim/quarterly data and detailed historical financial statement
      content, FactSet Fundamentals…
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-fundamentals-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-fundamentals-api#changelog
      - type: OpenAPI
        url: properties/fundamentals-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/fundamentals-openapi-search.yml
  - name: FactSet ETF API
    description: ETF Reference Data
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-etf-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-etf-api#overview
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-etf-api#sdkLibrary
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-etf-api#notebooks
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-etf-api#codeSnippet
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-etf-api#changelog
      - type: OpenAPI
        url: properties/etf-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/etf-openapi-search.yml
  - name: FactSet Search Answers
    description: >-
      The FactSet Search Answers API provides answers to search queries,
      reflecting the data shown within FactSet Search Answers.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-search-answers
    baseURL: https://example.com
    tags:
      - Utility
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-search-answers#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-search-answers#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-search-answers#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-search-answers#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-search-answers#changelog
      - type: OpenAPI
        url: properties/search-answers-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/search-answers-openapi-search.yml
  - name: FactSet Capital Structure Report Builder API
    description: >-
      Curated data from multiple sources for comprehensive capital analysis
      reports
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://developer.factset.com/api-catalog/capital-structure-report-builder-api
    baseURL: https://example.com
    tags:
      - Content
    properties:
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/capital-structure-report-builder-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/capital-structure-report-builder-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/capital-structure-report-builder-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/capital-structure-report-builder-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/capital-structure-report-builder-api#changelog
      - type: OpenAPI
        url: properties/capital-structure-report-builder-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/capital-structure-report-builder-openapi-search.yml
  - name: FactSet Trading API
    description: This Trading API gives programmatic access to FactSet's trading platform
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.factset.com/api-catalog/factset-trading-api
    baseURL: https://example.com
    tags:
      - Functional
    properties:
      - type: OpenAPI
        url: https://developer.factset.com/api-catalog/factset-trading-api#overview
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-trading-api#sdkLibrary
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-trading-api#notebooks
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-trading-api#codeSnippet
      - type: OpenAPI
        url: >-
          https://developer.factset.com/api-catalog/factset-trading-api#changelog
      - type: OpenAPI
        url: properties/trading-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/trading-openapi-search.yml
common:
  - type: Portal
    url: https://developer.factset.com/
  - type: Getting Started
    url: https://developer.factset.com/learn/getting-started
  - type: Authentication
    url: https://developer.factset.com/learn/authentication
  - type: Widget
    url: https://developer.factset.com/widgets
  - type: Recipes
    url: https://developer.factset.com/recipe-catalog
  - type: Error Logs
    url: https://developer.factset.com/learn/self-service-tools-error-logs
  - type: Login
    url: https://login.factset.com/
  - type: Contact
    url: https://developer.factset.com/contact
  - type: Privacy
    url: https://www.factset.com/privacy
  - type: Terms of Service
    url: https://www.factset.com/legal-statement
  - type: License
    url: https://developer.factset.com/licenses
  - type: LinkedIn
    url: https://www.linkedin.com/company/factset/
  - type: Facebook
    url: https://www.facebook.com/FactSet
  - type: Instagram
    url: https://www.instagram.com/lifeatfactset/
maintainers:
  - FN: API Evangelist
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---