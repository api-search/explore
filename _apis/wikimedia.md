---
name: Wikimedia
description: >-
  The Wikimedia Foundation, Inc is a nonprofit charitable organization dedicated
  to encouraging the growth, development and distribution of free, multilingual
  content, and to providing the full content of these wiki-based projects to the
  public free of charge.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/wikimedia.yml
created: 2023/11/20
modified: 2023/11/20
specificationVersion: '0.16'
tags:
  - Wiki
  - Content
apis:
  - name: Wikimedia Core REST API
    description: Discover and interact with free knowledge from across Wikimedia projects.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://api.wikimedia.org/wiki/Core_REST_API
    baseURL: https://api.wikimedia.org
    tags:
      - Wiki
      - Content
    properties:
      - type: OpenAPI
        url: https://api.wikimedia.org/wiki/Core_REST_API
    overlays: []
    aid: wikimedia:wikimedia-core-rest-api
  - name: Wikimedia Feed API
    description: Get daily featured articles, most read pages, and more.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://api.wikimedia.org/wiki/Feed_API
    baseURL: https://api.example.com
    tags:
      - Wiki
      - Feed
    properties:
      - type: OpenAPI
        url: https://api.wikimedia.org/wiki/Feed_API
    overlays: []
    aid: wikimedia:wikimedia-feed-api
  - name: Wikimedia Lift Wing API
    description: Use machine learning to make predictions about pages and edits.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://api.wikimedia.org/wiki/Lift_Wing_API
    baseURL: https://api.example.com
    tags:
      - Wiki
      - Machine Learning
    properties:
      - type: OpenAPI
        url: https://api.wikimedia.org/wiki/Lift_Wing_API
    overlays: []
    aid: wikimedia:wikimedia-lift-wing-api
  - name: Page Description API
    description: Interact with page descriptions.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://api.wikimedia.org/wiki/Page_Description_API
    baseURL: https://api.example.com
    tags:
      - Wiki
      - Descriptions
    properties:
      - type: OpenAPI
        url: https://api.wikimedia.org/wiki/Page_Description_API
    overlays: []
    aid: wikimedia:page-description-api
  - name: Wikimedia Link Recommendation API
    description: Suggest links to add to an article on Wikipedia.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://api.wikimedia.org/wiki/Link_Recommendation_API
    baseURL: https://api.example.com
    tags:
      - Wiki
      - Links
      - Recommendations
    properties:
      - type: OpenAPI
        url: https://api.wikimedia.org/wiki/Link_Recommendation_API
    overlays: []
    aid: wikimedia:wikimedia-link-recommendation-api
common:
  - type: Guidelines
    url: https://api.wikimedia.org/wiki/Maintainers/API_guidelines
  - type: Community
    url: https://api.wikimedia.org/wiki/Community
  - type: FAQ
    url: https://api.wikimedia.org/wiki/Community/FAQ
  - type: Terms of Service
    url: >-
      https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Terms_of_Use
  - type: Privacy Policy
    url: >-
      https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Privacy_policy
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: wikimedia
---