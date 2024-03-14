---
name: Europeana
description: >-
  Europeana empowers the cultural heritage sector in its digital
  transformation.  We develop expertise, tools and policies to embrace digital
  change and encourage partnerships that foster innovation.  We make it easier
  for people to use cultural heritage for education, research, creation and
  recreation. Our work contributes to an open, knowledgeable and creative
  society.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/europeana.yml
created: 2023/11/23
modified: 2023/11/23
specificationVersion: '0.16'
tags:
  - Museums
  - Books
  - Paintings
apis:
  - name: Europeana Search and Record API
    description: >-
      The Europeana REST API allows you to build applications that use the
      wealth of our collections drawn from the major museums and galleries
      across Europe. The Europeana collections contain over 50 million cultural
      heritage items, from books and paintings to 3D objects and audiovisual
      material, that celebrate over 3,500 cultural institutions across Europe.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://pro.europeana.eu/page/intro#intro
    baseURL: https://api.example.com
    tags:
      - Museums
      - Books
      - Paintings
    properties:
      - type: OpenAPI
        url: https://pro.europeana.eu/page/api-rest-console
      - type: OpenAPI
        url: https://api.europeana.eu/api/api-docs
    overlays:
      - type: APIs.io Search
        url: overlays/https://api.europeana.eu/api/api-docs-openapi-search.yml
    aid: europeana:europeana-search-and-record-api
common:
  - type: Portal
    url: https://pro.europeana.eu/
  - type: News
    url: https://pro.europeana.eu/page/news
  - type: Events
    url: https://pro.europeana.eu/page/events
  - type: Terms of Service
    url: https://www.europeana.eu/en/rights
  - type: Privacy Policy
    url: https://www.europeana.eu/en/rights/privacy-policy
  - type: Contact
    url: https://pro.europeana.eu/about-us/office-employees
  - type: Libraries
    url: https://pro.europeana.eu/page/api-libraries-and-plugins
  - type: Change Log
    url: https://github.com/europeana/api2/releases/
  - type: Getting Started
    url: https://pro.europeana.eu/page/record#get-started
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
aid: europeana
---