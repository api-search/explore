---
name: Mapbox
description: >-
  Mapbox is a living platform of location services. We equip innovators to keep
  up with a changing world through using real-time data and map rendering
  technologies that make it look easy. We are a global team of builders.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/mapbox.yml
created: 2023/11/22
modified: 2023/11/22
specificationVersion: '0.16'
tags:
  - Maps
  - Locations
apis:
  - name: Mapbox Tiling Service
    description: >-
      Mapbox Tiling Service (MTS) is a tool for creating vector tilesets. With
      MTS, you use sets of configuration options (tileset recipes) to transform
      your geospatial data into vector tiles. The resulting tiles are hosted on
      Mapbox servers for use in your applications.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.mapbox.com/api/maps/mapbox-tiling-service/
    baseURL: https://api.example.com
    tags:
      - Maps
      - Tiles
    properties:
      - type: OpenAPI
        url: https://docs.mapbox.com/api/maps/mapbox-tiling-service/
    overlays: []
    aid: mapbox:mapbox-tiling-service
  - name: Vector Tiles API
    description: >-
      The Mapbox Vector Tiles API serves vector tiles from Mapbox-hosted vector
      tilesets.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.mapbox.com/api/maps/vector-tiles/
    baseURL: https://api.example.com
    tags:
      - Maps
      - Tiles
    properties:
      - type: OpenAPI
        url: https://docs.mapbox.com/api/maps/vector-tiles/
    overlays: []
    aid: mapbox:vector-tiles-api
  - name: Mapbox Raster Tiles API
    description: >-
      The Mapbox Raster Tiles API serves raster tiles generated from satellite
      imagery tilesets and tilesets generated from raster data uploaded to
      Mapbox.com.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.mapbox.com/api/maps/raster-tiles/
    baseURL: https://api.example.com
    tags:
      - Maps
      - Tiles
    properties:
      - type: OpenAPI
        url: https://docs.mapbox.com/api/maps/raster-tiles/
    overlays: []
    aid: mapbox:mapbox-raster-tiles-api
  - name: Mapbox Static Images API
    description: >-
      The Mapbox Static Images API serves standalone, static map images
      generated from Mapbox Studio styles. These images can be displayed on web
      and mobile devices without the aid of a mapping library or API. They look
      like an embedded map, but do not have interactivity or controls.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.mapbox.com/api/maps/static-images/
    baseURL: https://api.example.com
    tags:
      - Maps
      - Images
    properties:
      - type: OpenAPI
        url: https://docs.mapbox.com/api/maps/static-images/
    overlays: []
    aid: mapbox:mapbox-static-images-api
  - name: Mapbox Static Tiles API
    description: >-
      The Mapbox Static Tiles API serves raster tiles generated from Mapbox
      Studio styles. Raster tiles can be used in traditional web mapping
      libraries like Mapbox.js, Leaflet, OpenLayers, and others to create
      interactive slippy maps. The Static Tiles API is well-suited for maps with
      limited interactivity or use on devices that do not support WebGL.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.mapbox.com/api/maps/static-tiles/
    baseURL: https://api.example.com
    tags:
      - Maps
      - Tiles
    properties:
      - type: OpenAPI
        url: https://docs.mapbox.com/api/maps/static-tiles/
    overlays: []
    aid: mapbox:mapbox-static-tiles-api
  - name: Mapbox Styles API
    description: >-
      The Mapbox Styles API lets you read and change map styles, fonts, and
      images. This API is the basis for Mapbox Studio. If you use Studio, Mapbox
      GL JS, or the Mapbox Mobile SDKs, you are already using the Styles API.
      This documentation is useful for software developers who want to
      programmatically read and write these resources. It isn't necessary for
      you to read or understand this reference to design or use Mapbox maps. You
      will need to be familiar with the Mapbox Style Specification to use the
      Styles API. The Mapbox Style Specification defines the structure of map
      styles and is the open standard that helps Studio communicate with APIs
      and produce maps that are compatible with Mapbox libraries.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.mapbox.com/api/maps/styles/
    baseURL: https://api.example.com
    tags:
      - Tiles
      - Styles
    properties:
      - type: OpenAPI
        url: https://docs.mapbox.com/api/maps/styles/
    overlays: []
    aid: mapbox:mapbox-styles-api
  - name: Mapbox Tilequery API
    description: >-
      The Mapbox Tilequery API allows you to retrieve data about specific
      features from a vector tileset, based on a given latitude and longitude.
      The Tilequery API makes it possible to query for features within a radius,
      do point-in-polygon queries, query for features in multiple composite
      layers, and augment data from the Mapbox Geocoding API with custom data.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.mapbox.com/api/maps/tilequery/
    baseURL: https://api.example.com
    tags:
      - Tiles
      - Maps
    properties:
      - type: OpenAPI
        url: https://docs.mapbox.com/api/maps/tilequery/
    overlays: []
    aid: mapbox:mapbox-tilequery-api
  - name: Mapbox Uploads API
    description: >-
      The Mapbox Uploads API transforms geographic data into tilesets that can
      be used with maps and geographic applications. Given a wide variety of
      geospatial formats, it normalizes projections and generates tiles at
      multiple zoom levels to make data viewable on the web.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.mapbox.com/api/maps/uploads/
    baseURL: https://api.example.com
    tags:
      - Maps
      - Uploads
    properties:
      - type: OpenAPI
        url: https://docs.mapbox.com/api/maps/uploads/
    overlays: []
    aid: mapbox:mapbox-uploads-api
  - name: Mapbox Tiling Service (MTS)
    description: >-
      Mapbox Tiling Service (MTS) is a tool for creating vector tilesets. With
      MTS, you use sets of configuration options (tileset recipes) to transform
      your geospatial data into vector tiles. The resulting tiles are hosted on
      Mapbox servers for use in your applications.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.mapbox.com/api/maps/mapbox-tiling-service/
    baseURL: https://api.example.com
    tags:
      - Maps
      - Tiles
    properties:
      - type: OpenAPI
        url: https://docs.mapbox.com/api/maps/mapbox-tiling-service/
    overlays: []
    aid: mapbox:mapbox-tiling-service-mts
  - name: Mapbox Datasets API
    description: >-
      The Mapbox Datasets API supports reading, creating, updating, and removing
      features from a dataset. Using the Datasets API involves interacting with
      two types of objects: datasets and features. Datasets contain one or more
      collections of GeoJSON features. When you edit a dataset object, you
      change the name and description properties of the dataset itself. When you
      edit a feature object, you edit the contents of the dataset, such as the
      coordinates or properties of a feature.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.mapbox.com/api/maps/datasets/
    baseURL: https://api.example.com
    tags:
      - Maps
      - Datasets
    properties:
      - type: OpenAPI
        url: https://docs.mapbox.com/api/maps/datasets/
    overlays: []
    aid: mapbox:mapbox-datasets-api
  - name: Mapbox Fonts API
    description: >-
      The Mapbox Fonts API accepts fonts as raw binary data, allows those fonts
      to be deleted, and generates encoded letters for map renderers. Two types
      of fonts are supported: TrueType fonts, usually with .ttf file extensions,
      and OpenType fonts, with .otf extensions. Fonts are managed on a
      per-account basis. Styles can use any font from the same account.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.mapbox.com/api/maps/fonts/
    baseURL: https://api.example.com
    tags:
      - Maps
      - Fonts
    properties:
      - type: OpenAPI
        url: https://docs.mapbox.com/api/maps/fonts/
    overlays: []
    aid: mapbox:mapbox-fonts-api
common:
  - type: Support
    url: https://docs.mapbox.com/help/
  - type: SDK
    url: https://docs.mapbox.com/api/overview/#sdk-and-library-support
  - type: Authentication
    url: https://docs.mapbox.com/api/overview/#access-tokens-and-token-scopes
  - type: Versioning
    url: https://docs.mapbox.com/api/overview/#api-versioning
  - type: Rate Limits
    url: https://docs.mapbox.com/api/overview/#rate-limits
  - type: CORS
    url: https://docs.mapbox.com/api/overview/#https-and-cors
  - type: Pagination
    url: https://docs.mapbox.com/api/overview/#pagination
  - type: Login
    url: https://account.mapbox.com/auth/signin/
  - type: Sign Up
    url: https://account.mapbox.com/auth/signup/
  - type: Terms of Service
    url: https://www.mapbox.com/tos/
  - type: Privacy
    url: https://www.mapbox.com/privacy/
  - type: Security
    url: https://www.mapbox.com/platform/security/
  - type: Cheatsheet
    url: https://labs.mapbox.com/developer-cheatsheet/
  - type: Getting Started
    url: https://docs.mapbox.com/help/getting-started
  - type: Tutorials
    url: https://docs.mapbox.com/help/tutorials
  - type: Videos
    url: https://docs.mapbox.com/help/how-to-videos
  - type: Troubleshooting
    url: https://docs.mapbox.com/help/troubleshooting
  - type: Glossay
    url: https://docs.mapbox.com/help/glossary
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
aid: mapbox
---