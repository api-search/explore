---
name: Accessed
description: Needs a description.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json-icons/accessed.png
url: https://example.com/apis/accessed.yml
created: 2024/4/8
modified: 2024/4/8
specificationVersion: '0.16'
tags:
  - Accessed
apis:
  - aid: box:box-recent-items-api
    name: Box Recent Items API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: Documentation
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Recent Items API
          paths:
            /recent_items:
              get:
                summary: List recently accessed items
                tags:
                  - List
                  - Recently
                  - Accessed
                  - Items
                  - Recent_items
                description: |-
                  Returns information about the recent items accessed
                  by a user, either in the last 90 days or up to the last
                  1000 ite
    overlays:
      - type: APIs.io Search
        url: overlays/recent-items-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/recent-items-openapi-api-evangelist-ratings.yml
maintainers:
  - FN: API Evangelist
    email: info@apievangelist.com
---