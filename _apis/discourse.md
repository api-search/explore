---
name: Discourse
description: >+
  At Discourse, our mission is to democratize online community and teamwork by
  raising the standard of civilized discourse on the Internet. We achieve this
  through delivering the best community and forum software.

image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/discourse.yml
created: 2023/11/13
modified: 2023/11/13
specificationVersion: '0.16'
tags:
  - APIs
  - Forums
  - Communities
apis:
  - name: Discourse API
    description: >+
      At Discourse, our mission is to democratize online community and teamwork
      by raising the standard of civilized discourse on the Internet. We achieve
      this through delivering the best community and forum software.

    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.example.com
    baseURL: https://api.example.com
    tags:
      - APIs
      - Forums
      - Communities
    properties:
      - type: OpenAPI
        url: https://docs.discourse.org/
      - type: OpenAPI
        url: https://docs.discourse.org/openapi.json
    contact:
      - FN: Discourse Support
        url: https://meta.discourse.org/t/what-is-discourse-api/166416
        email: ''
    overlays:
      - type: APIs.io Search
        url: overlays/https://docs.discourse.org/openapi.json-openapi-search.yml
common:
  - type: Plans
    url: https://www.discourse.org/pricing
  - type: Blog
    url: https://blog.discourse.org/
  - type: Plugins
    url: https://www.discourse.org/plugins
  - type: Integrations
    url: https://www.discourse.org/integrations
  - type: Github Repo
    url: https://github.com/discourse/discourse
  - type: Privacy Policy
    url: https://www.discourse.org/privacy
  - type: Status
    url: https://status.discourse.org/
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---