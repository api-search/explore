---
name: Amadeus
description: >-
  Leverage the full potential of travel data with Amadeus Travel APIs. Get
  instant access to over 400 airlines, 150,000 hotels, 300,000 tours &
  activities, and more. Whether you are a developer, a startup or a leading
  travel brand, Amadeus APIs enable you to play, innovate, create high-quality
  apps and deliver them to the market quickly.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/amadeus.yml
created: 2023/11/13
modified: 2023/11/13
specificationVersion: '0.16'
tags:
  - APIs
  - Travel
apis:
  - aid: amadeus:airline-routes
    name: Airline Routes
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Airline Routes
          paths:
            /airline/destinations:
              get:
                summary: get airline destinations
                tags:
                  - destinations
                description: nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-contact-error
              message: Contact Object
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
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-error
              message: JSON Media Type GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
    overlays:
      - type: APIs.io Search
        url: overlays/airline-routes-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/airline-routes-openapi-api-evangelist-ratings.yml
  - aid: amadeus:airport-city-search
    name: Airport & City Search
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Airport & City Search
            version: '1.0'
          servers:
            - url: https://test.api.amadeus.com/v1
          paths:
            /reference-data/locations:
              get:
                tags:
                  - location
                summary: >-
                  Returns a list of airports and cities matching a given
                  keyword.
            /reference-data/locations/{locationId}:
              get:
                tags:
                  - location
                summary: Returns a specific airports or cities based on its id.
          components:
            schemas:
              Location:
                type: object
                properties:
                  id:
                    type: string
                    description: id of the ressource
                  self:
                    $ref: '#/components/schemas/Links'
                  type:
                    type: string
                    description: the resource name
                    example: location
                  subType:
                    type: string
                    description: location sub type
                    example: AIRPORT
                    enum:
                      - AIRPORT
                      - CITY
                      - POINT_OF_INTEREST
                      - DISTRICT
                  name:
                    type: string
                    description: short name of the location
                    example: Paris CDG
                  detailedName:
                    type: string
                    description: >-
                      detailed name of the location. For a city location it
                      contains city name and country code. For an airport
                      location it contains city name; country code and airport
                      full name
                    example: 'Paris/FR: Charles de Gaulle'
                  timeZoneOffset:
                    type: string
                    description: >-
                      timezone offset of the location at the date of the API
                      call (including daylight saving time)
                    example: '+01:00'
                  iataCode:
                    type: string
                    description: >-
                      IATA code of the location. ([IATA table
                      codes](http://www.iata.org/publications/Pages/code-search.aspx)
                      here)
                    example: CDG
                  geoCode:
                    $ref: '#/components/schemas/GeoCode'
                  address:
                    $ref: '#/components/schemas/Address'
                  distance:
                    $ref: '#/components/schemas/Distance'
                  analytics:
                    $ref: '#/components/schemas/Analytics'
                  relevance:
                    type: number
                    description: score value calculated based on distance and analytics
                    format: double
                    example: 9.6584
                  category:
                    type: string
                    description: category of the location
                    example: HISTORICAL
                    enum:
                      - SIGHTS
                      - BEACH_PARK
                      - HISTORICAL
                      - NIGHTLIFE
                      - RESTAURANT
                      - SHOPPING
                  tags:
                    type: array
                    description: list of tags related to the location
                    items:
                      type: string
                      example: ''
                  rank:
                    type: string
                    description: >-
                      the rank is the position compared to other locations based
                      on how famous is a place. 1 being the highest.
                    example: '1'
              Address:
                type: object
                properties:
                  cityName:
                    type: string
                    description: >-
                      name of the city of the location; equal to name if the
                      location is a city
                    example: Paris
                  cityCode:
                    type: string
                    description: >-
                      IATA code of the city of the location; equal to IATAcode
                      if the location is a city
                    example: PAR
                  countryName:
                    type: string
                    description: name of the country of the location
                    example: France
                  countryCode:
                    type: string
                    description: code of the country of the location in ISO standard
                    example: FR
                  stateCode:
                    type: string
                    description: code of the state of the location if any
                    example: TO
                  regionCode:
                    type: string
                    description: code of the region of the location in ISO standard
                    example: EUROP
              Distance:
                type: object
                properties:
                  value:
                    type: integer
                    description: >-
                      great-circle distance between two locations. This distance
                      thus do not take into account traffic conditions;
                      international boundaries; mountains; water; or other
                      elements that might make the a nearby location hard to
                      reach.
                    example: 152
                  unit:
                    type: string
                    description: unit of the distance
                    example: KM
                    enum:
                      - KM
                      - MI
              GeoCode:
                type: object
                properties:
                  latitude:
                    type: number
                    description: latitude of the location
                    format: double
                    example: 43.580418
                  longitude:
                    type: number
                    description: longitude of the location
                    format: double
                    example: 7.125102
              Analytics:
                type: object
                properties:
                  travelers:
                    $ref: '#/components/schemas/Travelers'
              Travelers:
                type: object
                properties:
                  score:
                    type: number
                    description: >-
                      Approximate score for ranking purposes calculated based on
                      number of travelers in the location.
                    format: integer
                    example: 68
              Error_400:
                required:
                  - errors
                type: object
                properties:
                  errors:
                    type: array
                    items:
                      $ref: '#/components/schemas/Issue'
                example:
                  errors:
                    - status: 400
                      code: 477
                      title: INVALID FORMAT
                      detail: invalid query parameter format
                      source:
                        parameter: airport
                        example: CDG
              Error_404:
                required:
                  - errors
                type: object
                properties:
                  errors:
                    type: array
                    items:
                      $ref: '#/components/schemas/Issue'
                example:
                  errors:
                    - status: 404
                      code: 1797
                      title: NOT FOUND
                      detail: no response found for this query parameter
                      source:
                        parameter: airport
              Error_500:
                required:
                  - errors
                type: object
                properties:
                  errors:
                    type: array
                    items:
                      $ref: '#/components/schemas/Issue'
                example:
                  errors:
                    - status: 500
                      code: 141
                      title: SYSTEM ERROR HAS OCCURRED
              Issue:
                type: object
                properties:
                  status:
                    type: integer
                    description: the HTTP status code applicable to this error
                  code:
                    type: integer
                    description: an application-specific error code
                    format: int64
                  title:
                    type: string
                    description: a short summary of the error
                  detail:
                    type: string
                    description: explanation of the error
                  source:
                    title: Issue_Source
                    type: object
                    properties:
                      pointer:
                        type: string
                        description: >-
                          a JSON Pointer [RFC6901] to the associated entity in
                          the request document
                      parameter:
                        type: string
                        description: >-
                          a string indicating which URI query parameter caused
                          the issue
                      example:
                        type: string
                        description: a string indicating an example of the right value
                    description: an object containing references to the source of the error
              Collection_Meta:
                title: Collection_Meta
                type: object
                properties:
                  count:
                    type: integer
                    example: 1
                  links:
                    title: CollectionLinks
                    type: object
                    properties:
                      self:
                        type: string
                        format: uri
                        example: https://test.api.amadeus.com/v1/area/resources?...
                      next:
                        type: string
                        format: uri
                        example: https://test.api.amadeus.com/v1/area/resources?...
                      previous:
                        type: string
                        format: uri
                        example: https://test.api.amadeus.com/v1/area/resources?...
                      last:
                        type: string
                        format: uri
                        example: https://test.api.amadeus.com/v1/area/resources?...
                      first:
                        type: string
                        format: uri
                        example: https://test.api.amadeus.com/v1/area/resources?...
                      up:
                        type: string
                        format: uri
                        example: https://test.api.amadeus.com/v1/area/resources?...
                    example:
                      self: >-
                        https://test.api.amadeus.com/v1/area/resources?param=value
              Links:
                required:
                  - href
                type: object
                properties:
                  href:
                    type: string
                    format: uri
                  methods:
                    type: array
                    items:
                      type: string
                      enum:
                        - GET
                        - PUT
                        - DELETE
                        - POST
                        - PATCH
                  count:
                    type: integer
                example:
                  href: string
            responses:
              '400':
                description: "code    | title                                 \n- | ---------------------------------- \n477     | INVALID FORMAT\n572     | INVALID OPTION \n2781    | INVALID LENGTH\n4926    | INVALID DATA RECEIVED               \n32171   | MANDATORY DATA MISSING \t     \n"
                content:
                  application/vnd.amadeus+json:
                    schema:
                      $ref: '#/components/schemas/Error_400'
              '404':
                description: Not Found
                content:
                  application/vnd.amadeus+json:
                    schema:
                      $ref: '#/components/schemas/Error_404'
              '500':
                description: Unexpected Error
                content:
                  application/vnd.amadeus+json:
                    schema:
                      $ref: '#/components/schemas/Error_500'
              airport-city-autocomplete:
                description: Successful Operation
                content:
                  application/vnd.amadeus+json:
                    schema:
                      title: Success
                      required:
                        - data
                      type: object
                      properties:
                        meta:
                          $ref: '#/components/schemas/Collection_Meta'
                        data:
                          type: array
                          items:
                            $ref: '#/components/schemas/Location'
                      example:
                        meta:
                          count: 2
                          links:
                            self: >-
                              https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=MUC&countryCode=DE
                        data:
                          - type: location
                            subType: CITY
                            name: MUNICH INTERNATIONAL
                            detailedName: MUNICH/DE:MUNICH INTERNATIONAL
                            id: CMUC
                            self:
                              href: >-
                                https://test.api.amadeus.com/v1/reference-data/locations/CMUC
                              methods:
                                - GET
                            timeZoneOffset: '+02:00'
                            iataCode: MUC
                            geoCode:
                              latitude: 48.35378
                              longitude: 11.78609
                            address:
                              cityName: MUNICH
                              cityCode: MUC
                              countryName: GERMANY
                              countryCode: DE
                              regionCode: EUROP
                            analytics:
                              travelers:
                                score: 27
                          - type: location
                            subType: AIRPORT
                            name: MUNICH INTERNATIONAL
                            detailedName: MUNICH/DE:MUNICH INTERNATIONAL
                            id: AMUC
                            self:
                              href: >-
                                https://test.api.amadeus.com/v1/reference-data/locations/AMUC
                              methods:
                                - GET
                            timeZoneOffset: '+02:00'
                            iataCode: MUC
                            geoCode:
                              latitude: 48.35378
                              longitude: 11.78609
                            address:
                              cityName: MUNICH
                              cityCode: MUC
                              countryName: GERMANY
                              countryCode: DE
                              regionCode: EUROP
                            analytics:
                              travelers:
                                score: 27
              airport-city:
                description: Successful Operation
                content:
                  application/vnd.amadeus+json:
                    schema:
                      title: Success
                      required:
                        - data
                      type: object
                      properties:
                        meta:
                          $ref: '#/components/schemas/Collection_Meta'
                        data:
                          $ref: '#/components/schemas/Location'
                      example:
                        meta:
                          links:
                            self: >-
                              https://test.api.amadeus.com/v1/reference-data/locations/CMUC
                        data:
                          type: location
                          subType: CITY
                          name: MUNICH INTERNATIONAL
                          detailedName: MUNICH/DE:MUNICH INTERNATIONAL
                          id: CMUC
                          self:
                            href: >-
                              https://test.api.amadeus.com/v1/reference-data/locations/CMUC
                            methods:
                              - GET
                          timeZoneOffset: '+02:00'
                          iataCode: MUC
                          geoCode:
                            latitude: 48.35378
                            longitude: 11.78609
                          address:
                            cityName: MUNICH
                            cityCode: MUC
                            countryName: GERMANY
                            countryCode: DE
                            regionCode: EUROP
                          analytics:
                            travelers:
                              score: 27
              400_GET-Id:
                description: |
                  code    | title                                 
                  ------- | ------------------------------------- 
                  572     | INVALID OPTION    
                content:
                  application/vnd.amadeus+json:
                    schema:
                      $ref: '#/components/schemas/Error_400'
            parameters:
              pageLimit:
                name: page[limit]
                in: query
                description: maximum items in one page
                schema:
                  type: integer
                  default: 10
              pageOffset:
                name: page[offset]
                in: query
                description: start index of the requested page
                schema:
                  type: integer
                  default: 0
              sort:
                name: sort
                in: query
                description: >
                  defines on which attribute the sorting will be done:

                  * analytics.travelers.score - sort by the number of travelers
                  by airport or city, the airports and cities with the highest
                  traffic are on top of the results
                schema:
                  type: string
                  default: analytics.travelers.score
                  enum:
                    - analytics.travelers.score
              view:
                name: view
                in: query
                description: >
                  select the level of information of the reply:

                  * LIGHT - Gives only the IATACode, name, detailedName,
                  cityName and countryName

                  * FULL - Adds on top of the LIGHT information the
                  timeZoneOffset, geocode, detailed address and travelers.score

                  default option is FULL
                schema:
                  type: string
                  default: FULL
                  enum:
                    - LIGHT
                    - FULL
              locationId:
                name: locationId
                in: path
                description: identifier of the location
                required: true
                schema:
                  type: string
                example: nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-enum-casing-info
              message: Parameter Enum Upper Snake Case
            - code: openapi-parameters-enum-info
              message: Parameter Enum
            - code: openapi-parameters-enum-casing-error
              message: Parameter Enum Upper Snake Case
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
    overlays:
      - type: APIs.io Search
        url: overlays/airport-city-search-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/airport-city-search-openapi-api-evangelist-ratings.yml
  - aid: amadeus:airport-nearest-relevant
    name: Airport Nearest Relevant
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-enum-casing-info
              message: Parameter Enum Upper Snake Case
            - code: openapi-parameters-enum-info
              message: Parameter Enum
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/airport-nearest-relevant-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/airport-nearest-relevant-openapi-api-evangelist-ratings.yml
  - aid: amadeus:airport-on-time-performance
    name: Airport On-Time Performance
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/airport-on-time-performance-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/airport-on-time-performance-openapi-api-evangelist-ratings.yml
  - aid: amadeus:airport-routes
    name: Airport Routes
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Airport Routes
          paths:
            /airport/direct-destinations:
              get:
                summary: get airport direct routes
                tags:
                  - direct-destinations
                description: nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-contact-error
              message: Contact Object
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
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-error
              message: JSON Media Type GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
    overlays:
      - type: APIs.io Search
        url: overlays/airport-routes-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/airport-routes-openapi-api-evangelist-ratings.yml
  - aid: amadeus:amadeus-oauth2-login
    name: Amadeus OAuth2 Login
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Amadeus OAuth2 Login
          paths:
            /security/oauth2/token:
              post:
                description: >-
                  The token endpoint is used by the client to obtain an access
                  token by presenting its authorization grant.

                  To learn more about this endpoint please refer to the
                  specification at
                  https://tools.ietf.org/html/rfc6749#section-3.2
                tags:
                  - OAuth2 Access Token
                summary: The OAuth 2.0 token endpoint
            /security/oauth2/token/{access_token}:
              get:
                description: Get token information
                tags:
                  - OAuth2 Access Token
                summary: The OAuth 2.0 token info
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: >-
                openapi-request-body-have-application-x-www-form-url-encoded-info
              message: Request Body Application X WWW Form URL Encoded
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
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
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
    overlays:
      - type: APIs.io Search
        url: overlays/amadeus-oauth2-login-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/amadeus-oauth2-login-openapi-api-evangelist-ratings.yml
  - aid: amadeus:branded-fares-upsell
    name: Branded Fares Upsell
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-error
              message: Parameter Schema Type
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/branded-fares-upsell-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/branded-fares-upsell-openapi-api-evangelist-ratings.yml
  - aid: amadeus:city-search
    name: City Search
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: City Search
          paths:
            /reference-data/locations/cities:
              get:
                summary: GET Cities by keyword
                tags:
                  - City
                description: nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-contact-error
              message: Contact Object
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
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-error
              message: JSON Media Type GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
    overlays:
      - type: APIs.io Search
        url: overlays/city-search-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/city-search-openapi-api-evangelist-ratings.yml
  - aid: amadeus:flight-availibilities-search
    name: Flight Availibilities Search
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-error
              message: Parameter Schema Type
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
    overlays:
      - type: APIs.io Search
        url: overlays/flight-availibilities-search-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/flight-availibilities-search-openapi-api-evangelist-ratings.yml
  - aid: amadeus:flight-busiest-traveling-period
    name: Flight Busiest Traveling Period
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-enum-info
              message: Parameter Enum
            - code: openapi-parameters-enum-casing-error
              message: Parameter Enum Upper Snake Case
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/flight-busiest-traveling-period-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/flight-busiest-traveling-period-openapi-api-evangelist-ratings.yml
  - aid: amadeus:flight-cheapest-date-search
    name: Flight Cheapest Date Search
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-enum-info
              message: Parameter Enum
            - code: openapi-parameters-enum-casing-error
              message: Parameter Enum Upper Snake Case
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/flight-cheapest-date-search-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/flight-cheapest-date-search-openapi-api-evangelist-ratings.yml
  - aid: amadeus:flight-check-in-links
    name: Flight Check-in Links
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/flight-check-in-links-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/flight-check-in-links-openapi-api-evangelist-ratings.yml
  - aid: amadeus:flight-choice-prediction
    name: Flight Choice Prediction
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-error
              message: Parameter Schema Type
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/flight-choice-prediction-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/flight-choice-prediction-openapi-api-evangelist-ratings.yml
  - aid: amadeus:flight-create-orders
    name: Flight Create Orders
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-error
              message: Parameter Schema Type
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-get-201-content-error
              message: POST Content
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/flight-create-orders-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/flight-create-orders-openapi-api-evangelist-ratings.yml
  - aid: amadeus:flight-delay-prediction
    name: Flight Delay Prediction
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/flight-delay-prediction-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/flight-delay-prediction-openapi-api-evangelist-ratings.yml
  - aid: amadeus:flight-inspiration-search
    name: Flight Inspiration Search
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-enum-info
              message: Parameter Enum
            - code: openapi-parameters-enum-casing-error
              message: Parameter Enum Upper Snake Case
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/flight-inspiration-search-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/flight-inspiration-search-openapi-api-evangelist-ratings.yml
  - aid: amadeus:flight-most-booked-destinations
    name: Flight Most Booked Destinations
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-enum-casing-info
              message: Parameter Enum Upper Snake Case
            - code: openapi-parameters-enum-info
              message: Parameter Enum
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/flight-most-booked-destinations-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/flight-most-booked-destinations-openapi-api-evangelist-ratings.yml
  - aid: amadeus:flight-most-traveled-destinations
    name: Flight Most Traveled Destinations
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-enum-casing-info
              message: Parameter Enum Upper Snake Case
            - code: openapi-parameters-enum-info
              message: Parameter Enum
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/flight-most-traveled-destinations-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/flight-most-traveled-destinations-openapi-api-evangelist-ratings.yml
  - aid: amadeus:flight-offers-price
    name: Flight Offers Price
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-error
              message: Parameter Schema Type
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/flight-offers-price-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/flight-offers-price-openapi-api-evangelist-ratings.yml
  - aid: amadeus:flight-offers-search
    name: Flight Offers Search
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-error
              message: Parameter Schema Type
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-enum-info
              message: Parameter Enum
            - code: openapi-parameters-enum-casing-error
              message: Parameter Enum Upper Snake Case
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
    overlays:
      - type: APIs.io Search
        url: overlays/flight-offers-search-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/flight-offers-search-openapi-api-evangelist-ratings.yml
  - aid: amadeus:flight-order-management
    name: Flight Order Management
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-400-status-code-info
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
    overlays:
      - type: APIs.io Search
        url: overlays/flight-order-management-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/flight-order-management-openapi-api-evangelist-ratings.yml
  - aid: amadeus:flight-price-analysis
    name: Flight Price Analysis
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Flight Price Analysis API
          paths:
            /analytics/itinerary-price-metrics:
              get:
                summary: GET itinerary price metric
                description: ''
                tags:
                  - price-metrics
              parameters: nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-contact-error
              message: Contact Object
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
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-error
              message: JSON Media Type GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
    overlays:
      - type: APIs.io Search
        url: overlays/flight-price-analysis-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/flight-price-analysis-openapi-api-evangelist-ratings.yml
  - aid: amadeus:hotel-booking
    name: Hotel Booking
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-info-contact-error
              message: Contact Object
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
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-get-201-content-error
              message: POST Content
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
    overlays:
      - type: APIs.io Search
        url: overlays/hotel-booking-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/hotel-booking-openapi-api-evangelist-ratings.yml
  - aid: amadeus:hotel-list
    name: Hotel List
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Hotel List
          paths:
            /reference-data/locations/hotels/by-hotels:
              get:
                summary: Search Hotels using its unique Id
                tags:
                  - Hotels
                description: ''
            /reference-data/locations/hotels/by-city:
              get:
                summary: Search Hotels in a city
                tags:
                  - Hotels
                description: ''
            /reference-data/locations/hotels/by-geocode:
              get:
                summary: Search Hotels using Geocode
                tags:
                  - Hotels
                description: ''
              parameters: nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-contact-error
              message: Contact Object
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
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-error
              message: JSON Media Type GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
    overlays:
      - type: APIs.io Search
        url: overlays/hotel-list-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/hotel-list-openapi-api-evangelist-ratings.yml
  - aid: amadeus:hotel-name-autocomplete
    name: Hotel Name Autocomplete
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
        data:
          swagger: '2.0'
          info:
            title: Hotel Name Autocomplete
          host: test.api.amadeus.com
          basePath: /v1
          schemes:
            - https
          consumes:
            - application/vnd.amadeus+json
          produces:
            - application/vnd.amadeus+json
          paths:
            /reference-data/locations/hotel:
              get:
                tags:
                  - Search
                summary: Returns a list of hotels matching a given keyword.
                description: nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
    overlays:
      - type: APIs.io Search
        url: overlays/hotel-name-autocomplete-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/hotel-name-autocomplete-openapi-api-evangelist-ratings.yml
  - aid: amadeus:hotel-ratings
    name: Hotel Ratings
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
        data:
          swagger: '2.0'
          info:
            title: Hotel Ratings
          host: test.api.amadeus.com
          basePath: /v2
          tags:
            - name: Hotel Ratings
              description: Sentiments about Hotels.
          schemes:
            - https
          produces:
            - application/vnd.amadeus+json
          paths:
            /e-reputation/hotel-sentiments:
              get:
                tags:
                  - Hotel Ratings
                summary: Get sentiments by Amadeus Hotel Ids
                description: ''
          definitions:
            HotelSentiment:
              type: object
              properties:
                hotelId:
                  type: string
                  example: BBLONBTL
                  description: >-
                    Amadeus Hotel Ids are found in the Hotel Search response
                    (parameter name is 'hotelId')
                type:
                  type: string
                  example: hotelSentiment
                overallRating:
                  $ref: '#/definitions/Score'
                numberOfRatings:
                  type: integer
                  example: 350
                numberOfReviews:
                  type: integer
                  example: 200
                sentiments:
                  type: object
                  description: >-
                    Dictionary containing scores for all the available
                    categories.  If a property does not have any category this
                    object will not be present in the response.
                  properties:
                    sleepQuality:
                      $ref: '#/definitions/Score'
                    service:
                      $ref: '#/definitions/Score'
                    facilities:
                      $ref: '#/definitions/Score'
                    roomComforts:
                      $ref: '#/definitions/Score'
                    valueForMoney:
                      $ref: '#/definitions/Score'
                    catering:
                      $ref: '#/definitions/Score'
                    swimmingPool:
                      $ref: '#/definitions/Score'
                    location:
                      $ref: '#/definitions/Score'
                    internet:
                      $ref: '#/definitions/Score'
                    pointsOfInterest:
                      $ref: '#/definitions/Score'
                    staff:
                      $ref: '#/definitions/Score'
              required:
                - hotelId
                - overallRating
                - avgHotelAvailabilityResponseTime
                - numberOfRatings
                - numberOfReviews
            CollectionMeta:
              title: CollectionMeta
              properties:
                count:
                  type: integer
                  example: 1
                links:
                  $ref: '#/definitions/CollectionLinks'
            CollectionLinks:
              title: CollectionLinks
              properties:
                self:
                  type: string
                  format: uri
                  example: https://test.api.amadeus.com/v1/area/resources?...
                next:
                  type: string
                  format: uri
                  example: https://test.api.amadeus.com/v1/area/resources?...
                previous:
                  type: string
                  format: uri
                  example: https://test.api.amadeus.com/v1/area/resources?...
                last:
                  type: string
                  format: uri
                  example: https://test.api.amadeus.com/v1/area/resources?...
                first:
                  type: string
                  format: uri
                  example: https://test.api.amadeus.com/v1/area/resources?...
                up:
                  type: string
                  format: uri
                  example: https://test.api.amadeus.com/v1/area/resources?...
              example:
                self: https://test.api.amadeus.com/v1/area/resources?param=value
            WarningNotFound:
              allOf:
                - $ref: '#/definitions/Warning'
              example:
                code: 913
                title: PROPERTIES NOT FOUND
                detail: >-
                  Some of the requested properties were not found in our
                  database.
                source:
                  parameter: hotelIds
                  pointer: ABCDEFGH,LPCDEFGQ
            Score:
              type: integer
              description: >-
                Integer between 0 and 100. It represents the score for a
                specific category or the overall rating for a given Hotel.
              example: 82
            Error400:
              properties:
                errors:
                  type: array
                  items:
                    $ref: '#/definitions/Error'
              required:
                - errors
            Error401:
              properties:
                errors:
                  type: array
                  items:
                    $ref: '#/definitions/Error'
              required:
                - errors
              example:
                errors:
                  - status: 401
                    code: 20
                    title: RESTRICTED
                    detail: Query unauthorized
            Error500:
              properties:
                errors:
                  type: array
                  items:
                    $ref: '#/definitions/Error'
              required:
                - errors
              example:
                errors:
                  - status: 500
                    code: 141
                    title: SYSTEM ERROR HAS OCCURRED
            Error:
              required:
                - status
                - code
                - title
              properties:
                status:
                  type: integer
                  description: >-
                    The [HTTP status
                    code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
                    of this response. This is present only in terminal errors
                    which cause an unsuccessful response. In the case of
                    multiple errors, they must all have the same status.
                code:
                  type: integer
                  description: >-
                    A machine-readable error code from the Amadeus Canned
                    Messages table, that will enable the API Consumers code to
                    handle this type of error
                title:
                  type: string
                  description: >-
                    An error title from the Canned Messages table with a 1:1
                    correspondence to the error code. This may be localized
                detail:
                  type: string
                  description: >-
                    An easy-to-read explanation specific to this occurrence of
                    the problem. It should give the API consumer an idea of what
                    went wrong and how to recover from it. Like the title, this
                    field’s value can be localized.
                source:
                  $ref: '#/definitions/ErrorSource'
                documentation:
                  type: string
                  format: url
                  description: >-
                    A link to a web page or file with further documentation to
                    help the API consumer resolve this error
            Warning:
              required:
                - code
                - title
              properties:
                code:
                  type: integer
                  description: >-
                    A machine-readable error code from the Canned Messages
                    table, that will enable the API Consumers code to handle
                    this type of error
                title:
                  type: string
                  description: >-
                    An error title from the Canned Messages table with a 1:1
                    correspondence to the error code. This may be localized
                detail:
                  type: string
                  description: >-
                    An easy-to-read explanation specific to this occurrence of
                    the problem. It should give the API consumer an idea of what
                    went wrong and how to recover from it. Like the title, this
                    field’s value can be localized.
                source:
                  $ref: '#/definitions/ErrorSource'
                documentation:
                  type: string
                  format: url
                  description: >-
                    A link to a web page or file with further documentation to
                    help the API consumer resolve this error
            ErrorSource:
              properties:
                parameter:
                  type: string
                  description: >-
                    The key of the URI path or query parameter that caused the
                    error
                pointer:
                  type: string
                  description: >-
                    A JSON Pointer [RFC6901] to the associated entity in the
                    request body that caused this error
                example:
                  type: string
                  description: A sample input to guide the user when resolving this issue
          responses:
            '400':
              description: Not Found
              schema:
                $ref: '#/definitions/Error400'
            '401':
              description: Unauthorized
              schema:
                $ref: '#/definitions/Error401'
            '500':
              description: Unexpected Error
              schema:
                $ref: '#/definitions/Error500'
            sentiments:
              description: Successful operation
              schema:
                title: SuccessSentiments
                required:
                  - data
                properties:
                  meta:
                    $ref: '#/definitions/CollectionMeta'
                  warnings:
                    type: array
                    items:
                      $ref: '#/definitions/WarningNotFound'
                  data:
                    type: array
                    items:
                      $ref: '#/definitions/HotelSentiment'
                example:
                  data:
                    - type: hotelSentiment
                      numberOfReviews: 218
                      numberOfRatings: 278
                      hotelId: ADNYCCTB
                      overallRating: 93
                      sentiments:
                        sleepQuality: 87
                        service: 98
                        facilities: 90
                        roomComforts: 92
                        valueForMoney: 87
                        catering: 89
                        location: 98
                        pointsOfInterest: 91
                        staff: 100
                    - type: hotelSentiment
                      numberOfReviews: 2667
                      numberOfRatings: 2666
                      hotelId: TELONMFS
                      overallRating: 81
                      sentiments:
                        sleepQuality: 78
                        service: 80
                        facilities: 75
                        roomComforts: 87
                        valueForMoney: 75
                        catering: 81
                        location: 89
                        internet: 72
                        pointsOfInterest: 81
                        staff: 89
                  meta:
                    count: 1
                    links:
                      self: >-
                        https://test.api.amadeus.com/v2/e-reputation/hotel-sentiments?hotelIds=ADNYCCTB,TELONMFS,XXXYYY01
                  warnings:
                    - code: 913
                      title: PROPERTIES NOT FOUND
                      detail: >-
                        Some of the requested properties were not found in our
                        database.
                      source:
                        parameter: hotelIds
                        pointer: null
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
    overlays:
      - type: APIs.io Search
        url: overlays/hotel-ratings-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/hotel-ratings-openapi-api-evangelist-ratings.yml
  - aid: amadeus:hotel-search
    name: Hotel Search
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
        data:
          swagger: '2.0'
          info:
            title: Hotel Search API
          host: test.api.amadeus.com
          basePath: /v3
          schemes:
            - https
          consumes:
            - application/vnd.amadeus+json
          produces:
            - application/vnd.amadeus+json
          paths:
            /shopping/hotel-offers:
              get:
                description: ''
                summary: getMultiHotelOffers
                tags:
                  - shopping
            /shopping/hotel-offers/{offerId}:
              get:
                description: ' '
                summary: getOfferPricing
                tags:
                  - shopping
          definitions:
            HotelOffers:
              title: HotelOffers
              type: object
              properties:
                type:
                  description: the type of the object (hotel-offers)
                  type: string
                available:
                  type: boolean
                self:
                  type: string
                offers:
                  type: array
                  items:
                    $ref: '#/definitions/HotelOffer'
                hotel:
                  $ref: '#/definitions/Hotel'
            PricingResponse:
              title: PricingResponse
              type: object
              properties:
                data:
                  $ref: '#/definitions/HotelOffers'
              example:
                data:
                  type: hotel-offers
                  hotel:
                    type: hotel
                    hotelId: MCLONGHM
                    chainCode: MC
                    name: JW MARRIOTT GROSVENOR HOUSE
                    cityCode: LON
                    address:
                      countryCode: GB
                    amenities:
                      - CRIBS_AVAILABLE
                  available: true
                  offers:
                    - id: TSXOJ6LFQ2
                      checkInDate: '2023-11-22'
                      checkOutDate: '2023-11-23'
                      rateCode: 'V  '
                      rateFamilyEstimated:
                        code: PRO
                        type: P
                      description:
                        text: >-
                          Executive King Room, Executive Lounge Access, 1 King,
                          35sqm/377sqft-40sqm/430sqft, Wireless in ternet, for a
                          fee, Wired internet, for a fee, C A credit card is
                          required for payment to guarantee the Prepay
                          Non-refundable Non-changeable rate. Prepay rates will
                          be charged the full cost of the reservation within 24
                          hours of making the reservation. If payment is
                          unsuccessful within 48 hours of making the
                          reservation, the hotel reserves the right to cancel
                          the reservation. Date changes to the reservation are
                          not allowed. Cancellation will result in forfeiture of
                          the prepayment. The credit card used at the time of
                          making the reservation must be valid for the entire
                          stay.
                        lang: EN
                      room:
                        type: ELE
                        typeEstimated:
                          beds: 1
                          bedType: DOUBLE
                        description:
                          text: Prepay Non-refundable Non-changeable, prepay in full
                          lang: EN
                      guests:
                        adults: 1
                      price:
                        currency: GBP
                        base: '716.00'
                        total: '716.00'
                        variations:
                          changes:
                            - startDate: '2023-11-22'
                              endDate: '2023-11-23'
                              base: '716.00'
                      policies:
                        paymentType: deposit
                        cancellation:
                          description:
                            text: NON-REFUNDABLE RATE
                          type: FULL_STAY
                meta:
                  lang: EN
            Errors:
              title: Errors
              description: A set of errors
              type: object
              properties:
                errors:
                  type: array
                  items:
                    $ref: '#/definitions/Error'
            MultiResponse:
              title: MultiResponse
              type: object
              properties:
                data:
                  $ref: '#/definitions/HotelOffers'
              example:
                data:
                  - type: hotel-offers
                    hotel:
                      type: hotel
                      hotelId: MCLONGHM
                      chainCode: MC
                      dupeId: '700031300'
                      name: JW Marriott Grosvenor House London
                      cityCode: LON
                      latitude: 51.50988
                      longitude: -0.15509
                    available: true
                    offers:
                      - id: TSXOJ6LFQ2
                        checkInDate: '2023-11-22'
                        checkOutDate: '2023-11-23'
                        rateCode: 'V  '
                        rateFamilyEstimated:
                          code: PRO
                          type: P
                        room:
                          type: ELE
                          typeEstimated:
                            category: EXECUTIVE_ROOM
                            beds: 1
                            bedType: DOUBLE
                          description:
                            text: >-
                              Prepay Non-refundable Non-changeable, prepay in
                              full

                              Executive King Room, Executive Lounge Access,

                              1 King, 35sqm/377sqft-40sqm/430sqft, Wireless
                            lang: EN
                        guests:
                          adults: 1
                        price:
                          currency: GBP
                          base: '716.00'
                          total: '716.00'
                          variations:
                            average:
                              base: '716.00'
                            changes:
                              - startDate: '2023-11-22'
                                endDate: '2023-11-23'
                                total: '716.00'
                        policies:
                          paymentType: deposit
                          cancellation:
                            description:
                              text: NON-REFUNDABLE RATE
                            type: FULL_STAY
                        self: >-
                          https://test.api.amadeus.com/v3/shopping/hotel-offers/TSXOJ6LFQ2
                    self: >-
                      https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=MCLONGHM&adults=1&checkInDate=2023-11-22&paymentPolicy=NONE&roomQuantity=1
            Hotel:
              title: Hotel
              description: Hotel Content
              type: object
              properties:
                hotelId:
                  description: Amadeus Property Code (8 chars)
                  example: ADPAR001
                  type: string
                  pattern: ^[A-Z0-9]{8}$
                chainCode:
                  description: Brand (RT...) or Merchant (AD...) (Amadeus 2 chars Code)
                  example: AD
                  type: string
                  pattern: ^[A-Z]{2}$
                brandCode:
                  description: >-
                    Brand (RT...) (Amadeus 2 chars Code). Small Properties
                    distributed by Merchants may not have a Brand.

                    Example - AD (Value Hotels) is the Provider/Merchant, and RT
                    (Accor) is the Brand of the Property
                  example: RT
                  type: string
                  pattern: ^[A-Z]{2}$
                dupeId:
                  description: >-
                    Unique Property identifier of the physical hotel.

                    One physical hotel can be represented by different
                    Providers, each one having its own `hotelID`.

                    This attribute allows a client application to group together
                    hotels that are actually the same.
                  example: '501132260'
                  type: string
                name:
                  description: Hotel Name
                  example: Hotel de Paris
                  type: string
                cityCode:
                  description: >-
                    Warning: The IATA city code associated to the hotel (not
                    necessary the real Hotel City)
                  example: PAR
                  type: string
                  pattern: ^[A-Z]{3}$
            HotelOffer:
              title: HotelOffer
              description: Hotel Offer
              type: object
              properties:
                type:
                  $ref: '#/definitions/Type'
                id:
                  description: >-
                    Unique identifier of this offer. Might be valid for a
                    temporary period only.
                  example: TSXOJ6LFQ2
                  type: string
                  minLength: 2
                  maxLength: 100
                  pattern: ^[A-Z0-9]*$
                checkInDate:
                  description: >-
                    check-in date of the stay (hotel local date). Format
                    YYYY-MM-DD

                    The lowest accepted value is today date (no dates in the
                    past).
                  example: '2020-12-30'
                  type: string
                  format: date
                checkOutDate:
                  description: >-
                    check-out date of the stay (hotel local date). Format
                    YYYY-MM-DD

                    The lowest accepted value is `checkInDate`+1.
                  example: '2020-12-31'
                  type: string
                  format: date
                roomQuantity:
                  description: number of rooms (1-9)
                  example: '1'
                  type: string
                rateCode:
                  description: |-
                    Special Rate - Provider Response Code (3 chars)
                    Examples

                      * RAC - Rack

                      * BAR - Best Available Rate

                      * PRO - Promotional

                      * COR - Corporate

                      * GOV - Government (qualified)

                      * AAA - AAA (qualified)

                      * BNB - Bed and Breakfast

                      * PKG - Package

                      * TVL - Travel Industry

                      * SPC - Special Promo Rate

                      * WKD - Weekend

                      * CON - Convention

                      * SNR - Senior (Europe) (qualified)

                      * ARP - AARP - American Association of Retired People (50+) (qualified)

                      * SRS - Senior (qualified)

                      * ROR - Room Only Rate (no breakfast)

                      * FAM - Family

                      * DAY - Day rate
                  example: RAC
                  type: string
                  minLength: 3
                  maxLength: 3
                  pattern: ^[A-Z0-9*]{3}$
                rateFamilyEstimated:
                  $ref: '#/definitions/HotelProduct_RateFamily'
                category:
                  description: |-
                    Special Rate Category
                    Examples:
                      ASSOCIATION
                      FAMILY_PLAN
                  example: FAMILY_PLAN
                  type: string
                description:
                  $ref: '#/definitions/QualifiedFreeText'
                commission:
                  $ref: '#/definitions/HotelProduct_Commission'
                boardType:
                  $ref: '#/definitions/BoardType'
                room:
                  $ref: '#/definitions/HotelProduct_RoomDetails'
                guests:
                  $ref: '#/definitions/HotelProduct_Guests'
                price:
                  $ref: '#/definitions/HotelProduct_HotelPrice'
                policies:
                  $ref: '#/definitions/HotelProduct_PolicyDetails'
                self:
                  description: >-
                    A self link to the object. Use this to refresh the Offer
                    price
                  example: >-
                    https://test.travel.api.amadeus.com/v2/shopping/hotel-offers/63A93695B58821ABB0EC2B33FE9FAB24D72BF34B1BD7D707293763D8D9378FC3
                  type: string
              required:
                - id
                - rateCode
                - room
                - price
            BoardType:
              title: BoardType
              description: The included Breakfast/Meals
              type: string
              enum:
                - ROOM_ONLY
                - BREAKFAST
                - HALF_BOARD
                - FULL_BOARD
                - ALL_INCLUSIVE
                - BUFFET_BREAKFAST
                - CARIBBEAN_BREAKFAST
                - CONTINENTAL_BREAKFAST
                - ENGLISH_BREAKFAST
                - FULL_BREAKFAST
                - DINNER_BED_AND_BREAKFAST
                - LUNCH
                - DINNER
                - FAMILY_PLAN
                - AS_BROCHURED
                - SELF_CATERING
                - BERMUDA
                - AMERICAN
                - FAMILY_AMERICAN
                - MODIFIED
            Error:
              title: Error
              description: The Error Definition
              type: object
              properties:
                status:
                  description: >-
                    The [HTTP status
                    code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
                    of this response. This is present only in terminal errors
                    which cause an unsuccessful response. In the case of
                    multiple errors, they must all have the same status.
                  type: integer
                  format: int32
                code:
                  description: >-
                    A machine-readable error code from the Amadeus Canned
                    Messages table, that will enable the API Consumers code to
                    handle this type of error
                  type: integer
                  format: int32
                title:
                  description: >-
                    An error title from the Canned Messages table with a 1:1
                    correspondence to the error code. This may be localized
                  type: string
                detail:
                  description: >-
                    An easy-to-read explanation specific to this occurrence of
                    the problem. It should give the API consumer an idea of what
                    went wrong and how to recover from it. Like the title, this
                    field’s value can be localized.
                  type: string
                source:
                  $ref: '#/definitions/Error_Source'
                documentation:
                  description: >-
                    A link to a web page or file with further documentation to
                    help the API consumer resolve this error
                  type: string
            Error_Source:
              title: Error_Source
              type: object
              properties:
                parameter:
                  description: >-
                    The key of the URI path or query parameter that caused the
                    error
                  type: string
                pointer:
                  description: >-
                    A JSON Pointer [RFC6901] to the associated entity in the
                    request body that caused this error
                  type: string
                example:
                  description: A sample input to guide the user when resolving this issue
                  type: string
            HotelProduct_CancellationPolicy:
              title: HotelProduct_CancellationPolicy
              type: object
              properties:
                type:
                  $ref: '#/definitions/CancellationType'
                amount:
                  description: Amount of the cancellation fee.
                  type: string
                  pattern: ^\\d+(\\.\\d+)?$
                numberOfNights:
                  description: Number of nights due as fee in case of cancellation.
                  type: integer
                  minimum: 0
                  format: int32
                percentage:
                  description: >-
                    Percentage of the total stay amount to be paid in case of
                    cancellation. Value is between 0 and 100.
                  type: string
                  pattern: ^\\d+(\\.\\d+)?$
                deadline:
                  description: >-
                    Represents the deadline after which the penalty applies.
                    DateTime is in ISO 8601
                    [https://www.w3.org/TR/NOTE-datetime].

                    Example: 2010-08-14T12:00:00+01:00

                    Example: 2010-08-14T12:00:00Z

                    Example: 2010-08-14T12:00:00-01:00

                    The value is expressed in the hotel local time zone, with
                    the added time zone difference. So you can compute the
                    deadline in UTC(GMT) if desired.
                  type: string
                  format: date-time
                description:
                  $ref: '#/definitions/QualifiedFreeText'
            HotelProduct_CheckInOutPolicy:
              title: HotelProduct_CheckInOutPolicy
              type: object
              properties:
                checkIn:
                  description: >-
                    Check-in From time limit in ISO-8601 format
                    [http://www.w3.org/TR/xmlschema-2/#time]
                  example: '13:00:00'
                  type: string
                checkInDescription:
                  $ref: '#/definitions/QualifiedFreeText'
                checkOut:
                  description: >-
                    Check-out Until time limit in ISO-8601 format
                    [http://www.w3.org/TR/xmlschema-2/#time]
                  example: '11:00:00'
                  type: string
                checkOutDescription:
                  $ref: '#/definitions/QualifiedFreeText'
            HotelProduct_Commission:
              title: HotelProduct_Commission
              type: object
              properties:
                percentage:
                  description: >-
                    Percentage of the commission paid to the travel seller.
                    Value is between 0 and 100
                  type: string
                  pattern: ^\\d+(\\.\\d+)?$
                amount:
                  description: >-
                    Amount of the commission paid to the travel seller. The
                    amount is always linked to the currency code of the offer
                  type: string
                  pattern: ^\\d+(\\.\\d+)?$
                description:
                  $ref: '#/definitions/QualifiedFreeText'
            HotelProduct_DepositPolicy:
              title: HotelProduct_DepositPolicy
              description: >-
                the deposit/prepay policy information applicable to the offer.
                It includes accepted payments, deadline and the amount due
              type: object
              properties:
                amount:
                  description: Deposit-Prepay amount
                  type: string
                  pattern: ^\\d+(\\.\\d+)?$
                deadline:
                  description: >-
                    The date and time of the deadline in ISO
                    8601[https://www.w3.org/TR/NOTE-datetime]. 
                     Example: 2010-08-14T13:00:00
                     Please note that this value is expressed in the hotels local time zone
                  type: string
                  format: date-time
                description:
                  $ref: '#/definitions/QualifiedFreeText'
                acceptedPayments:
                  $ref: '#/definitions/HotelProduct_PaymentPolicy'
            HotelProduct_EstimatedRoomType:
              title: HotelProduct_EstimatedRoomType
              description: >-
                estimated room category, bed type and number of beds in the
                room. This information has been parsed from the room
                description, and is thus only provided for informational
                purposes
              type: object
              properties:
                category:
                  description: Category code
                  type: string
                beds:
                  description: Number of beds in the room (1-9)
                  type: integer
                  format: int32
                bedType:
                  description: Type of the bed
                  type: string
            HotelProduct_GuaranteePolicy:
              title: HotelProduct_GuaranteePolicy
              description: >-
                the guarantee policy information applicable to the offer. It
                includes accepted payments
              type: object
              properties:
                description:
                  $ref: '#/definitions/QualifiedFreeText'
                acceptedPayments:
                  $ref: '#/definitions/HotelProduct_PaymentPolicy'
            HotelProduct_Guests:
              title: HotelProduct_Guests
              type: object
              properties:
                adults:
                  description: number of adult guests (1-9) per room
                  example: 2
                  type: integer
                  minimum: 1
                  maximum: 9
                  format: int32
                childAges:
                  description: >-
                    Comma separated list of ages of each child at the time of
                    check-out from the hotel. If several children have the same
                    age, the ages will be repeated.
                  type: array
                  items:
                    type: integer
                    minimum: 0
                    maximum: 20
                    format: int32
            HotelProduct_HoldPolicy:
              title: HotelProduct_HoldPolicy
              description: the hold policy
              type: object
              properties:
                deadline:
                  description: >-
                    The date and time of the deadline in ISO
                    8601[https://www.w3.org/TR/NOTE-datetime]. 
                     Example: 2010-08-14T13:00:00
                     Please note that this value is expressed in the hotels local time zone
                  type: string
                  format: date-time
              required:
                - deadline
            HotelProduct_HotelPrice:
              title: HotelProduct_HotelPrice
              description: price information
              type: object
              properties:
                currency:
                  description: currency Code apply to all elements of the price
                  type: string
                sellingTotal:
                  description: >-
                    sellingTotal = Total + margins + markup + totalFees -
                    discounts
                  type: string
                total:
                  description: total = base + totalTaxes
                  type: string
                base:
                  type: string
                taxes:
                  type: array
                  items:
                    $ref: '#/definitions/Tax'
                markups:
                  type: array
                  items:
                    $ref: '#/definitions/Markup'
                variations:
                  $ref: '#/definitions/HotelProduct_PriceVariations'
            HotelProduct_PaymentPolicy:
              title: HotelProduct_PaymentPolicy
              description: >-
                Accepted Payment Methods and Card Types. Several Payment Methods
                and Card Types may be available.
              type: object
              properties:
                creditCards:
                  description: Accepted Payment Card Types for the `method` CREDIT_CARD
                  type: array
                  items:
                    type: string
                    minLength: 2
                    maxLength: 2
                    pattern: ^[A-Z]{2}$
                  minLength: 2
                  maxLength: 2
                  pattern: ^[A-Z]{2}$
                methods:
                  description: Accepted Payment Methods
                  type: array
                  items:
                    $ref: '#/definitions/Method'
            HotelProduct_PolicyDetails:
              title: HotelProduct_PolicyDetails
              description: Booking Rules
              type: object
              properties:
                paymentType:
                  $ref: '#/definitions/PaymentType'
                guarantee:
                  $ref: '#/definitions/HotelProduct_GuaranteePolicy'
                deposit:
                  $ref: '#/definitions/HotelProduct_DepositPolicy'
                prepay:
                  $ref: '#/definitions/HotelProduct_DepositPolicy'
                holdTime:
                  $ref: '#/definitions/HotelProduct_HoldPolicy'
                cancellations:
                  type: array
                  items:
                    $ref: '#/definitions/HotelProduct_CancellationPolicy'
                checkInOut:
                  $ref: '#/definitions/HotelProduct_CheckInOutPolicy'
            HotelProduct_PriceVariation:
              title: HotelProduct_PriceVariation
              description: >-
                Some prices may vary during a stay, thus here you can see the
                daily price per period of the stay
              type: object
              properties:
                startDate:
                  description: |-
                    Begin date of the period
                    Format: YYYY-MM-DD
                  type: string
                  format: date
                endDate:
                  description: |-
                    End date of the period
                    Format: YYYY-MM-DD
                  type: string
                  format: date
                currency:
                  description: currency Code apply to all elements of the price
                  type: string
                sellingTotal:
                  description: >-
                    sellingTotal = Total + margins + markup + totalFees -
                    discounts
                  type: string
                total:
                  description: total = base + totalTaxes
                  type: string
                base:
                  type: string
                markups:
                  type: array
                  items:
                    $ref: '#/definitions/Markup'
              required:
                - startDate
                - endDate
            HotelProduct_PriceVariations:
              title: HotelProduct_PriceVariations
              description: >-
                Daily price variations and the average daily price (when
                available) is shown here
              type: object
              properties:
                average:
                  $ref: '#/definitions/Price'
                changes:
                  description: >-
                    A collection of price periods if the daily price changes
                    during the stay
                  type: array
                  items:
                    $ref: '#/definitions/HotelProduct_PriceVariation'
            HotelProduct_RateFamily:
              title: HotelProduct_RateFamily
              description: >-
                The estimated rate code family of the offer. Grouping various
                rate plan codes that belongs to the same family and indicates
                the type of the rate
              type: object
              properties:
                code:
                  description: The estimated rate family (PRO,FAM,GOV)
                  type: string
                  pattern: '[A-Z0-9]{3}'
                type:
                  description: The type of the rate (public=P, negotiated=N, conditional=C)
                  type: string
                  pattern: '[PNC]'
            HotelProduct_RoomDetails:
              title: HotelProduct_RoomDetails
              type: object
              properties:
                type:
                  description: >-
                    Room type code, 3 character identifier of the room.

                    The first character identifies the room type category. 

                    The second numeric character identifies the number of beds. 

                    The third character identifies the bed type. 

                    There is a special case where ROH is returned, this value
                    stands for Run Of House.
                  type: string
                  pattern: ^[A-Z0-9*]{3}$
                typeEstimated:
                  $ref: '#/definitions/HotelProduct_EstimatedRoomType'
                description:
                  $ref: '#/definitions/QualifiedFreeText'
            Markup:
              title: Markup
              description: >-
                Markup applied to provide a service or a product to the client.
                The markup can be introduced by any stakeholder. Typical use
                case is to convey markup information set by the travel agent or
                in case of merchant mode.
              type: object
              properties:
                amount:
                  description: >-
                    Defines the monetary value with decimal position as a
                    String.
                  example: '10'
                  type: string
            Method:
              title: Method
              description: |-
                The Payment Methods
                 * CREDIT_CARD (CC) - Payment Cards in `creditCards` are accepted
                 * AGENCY_ACCOUNT - Agency Account (Credit Line) is accepted. Agency is Charged at CheckOut
                 * TRAVEL_AGENT_ID - Agency IATA/ARC Number is accepted to Guarantee the booking
                 * CORPORATE_ID (COR-ID) - Corporate Account is accepted to Guarantee the booking
                 * HOTEL_GUEST_ID - Hotel Chain Rewards Card Number is accepted to Guarantee the booking
                 * CHECK - Checks are accepted
                 * MISC_CHARGE_ORDER - Miscellaneous Charge Order is accepted
                 * ADVANCE_DEPOSIT - Cash is accepted for Deposit/PrePay
                 * COMPANY_ADDRESS - Company Billing Address is accepted to Guarantee the booking
              type: string
              enum:
                - CREDIT_CARD
                - AGENCY_ACCOUNT
                - TRAVEL_AGENT_ID
                - CORPORATE_ID
                - HOTEL_GUEST_ID
                - CHECK
                - MISC_CHARGE_ORDER
                - ADVANCE_DEPOSIT
                - COMPANY_ADDRESS
                - VCC_BILLBACK
                - VCC_B2B_WALLET
                - DEFERED_PAYMENT
                - TRAVEL_AGENT_IMMEDIATE
            PaymentType:
              title: PaymentType
              description: >-
                payment type. Guarantee means Pay at Check Out. Check the
                `methods` in `guarantee` or `deposit` or `prepay`.
              type: string
              enum:
                - GUARANTEE
                - DEPOSIT
                - PREPAY
                - HOLDTIME
            Price:
              title: Price
              description: Price valuation information
              type: object
              properties:
                currency:
                  description: currency Code apply to all elements of the price
                  type: string
                sellingTotal:
                  description: >-
                    sellingTotal = Total + margins + markup + totalFees -
                    discounts
                  type: string
                total:
                  description: total = base + totalTaxes
                  type: string
                base:
                  type: string
                markups:
                  type: array
                  items:
                    $ref: '#/definitions/Markup'
            QualifiedFreeText:
              title: QualifiedFreeText
              description: >-
                Specific type to convey a list of string for specific
                information type ( via qualifier) in specific character set, or
                language
              type: object
              properties:
                text:
                  description: Free Text
                  example: A description
                  type: string
                lang:
                  description: see RFC 5646
                  example: fr-FR
                  type: string
            Tax:
              title: Tax
              description: >-
                IATA Tax definition: An impost for raising revenue for the
                general treasury and which will be used for general public
                purposes.
              type: object
              properties:
                amount:
                  description: Defines amount with decimal separator.
                  type: string
                currency:
                  description: >-
                    Defines a monetary unit. It is a three alpha code (iata
                    code). Example: EUR for Euros, USD for US dollar, etc.
                  type: string
                  minLength: 1
                  maxLength: 3
                code:
                  description: >-
                    International Standards Organization (ISO) Tax code.It is a
                    two-letter country code.
                  type: string
                percentage:
                  description: >-
                    In the case of a tax on TST value, the percentage of the tax
                    will be indicated in this field.
                  type: string
                included:
                  description: Indicates if tax is included or not
                  type: boolean
                description:
                  description: Example - "Governement tax"
                  type: string
                pricingFrequency:
                  description: |-
                    Specifies if the tax applies per stay or per night
                      - PER_STAY
                      - PER_NIGHT
                  type: string
                pricingMode:
                  description: |-
                    Specifies if the tax applies per occupant or per room
                      - PER_OCCUPANT
                      - PER_PRODUCT
                  type: string
            Type:
              title: Type
              description: data type
              type: string
              enum:
                - hotel-offer
            CancellationType:
              title: CancellationType
              description: '* FULL_STAY: the Penalty amount equals the `total` price.'
              type: string
              enum:
                - FULL_STAY
          tags:
            - name: shopping
              description: nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-enum-info
              message: Parameter Enum
            - code: openapi-parameters-enum-casing-error
              message: Parameter Enum Upper Snake Case
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-tags-description-error
              message: Tag Descriptions
    overlays:
      - type: APIs.io Search
        url: overlays/hotel-search-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/hotel-search-openapi-api-evangelist-ratings.yml
  - aid: amadeus:location-score
    name: Location Score
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Location Score
          paths:
            /location/analytics/category-rated-areas:
              get:
                summary: GET category rated areas
                description: ''
                tags:
                  - category-rated-areas
              parameters: nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-contact-error
              message: Contact Object
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
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-error
              message: JSON Media Type GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
    overlays:
      - type: APIs.io Search
        url: overlays/location-score-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/location-score-openapi-api-evangelist-ratings.yml
  - aid: amadeus:on-demand-flight-status
    name: On-Demand Flight Status
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/on-demand-flight-status-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/on-demand-flight-status-openapi-api-evangelist-ratings.yml
  - aid: amadeus:points-of-interest
    name: Points of Interest
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
    overlays:
      - type: APIs.io Search
        url: overlays/points-of-interest-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/points-of-interest-openapi-api-evangelist-ratings.yml
  - aid: amadeus:safe-place
    name: Safe Place
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
    overlays:
      - type: APIs.io Search
        url: overlays/safe-place-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/safe-place-openapi-api-evangelist-ratings.yml
  - aid: amadeus:seatmap-display
    name: Seatmap Display
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-error
              message: Parameter Schema Type
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
    overlays:
      - type: APIs.io Search
        url: overlays/seatmap-display-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/seatmap-display-openapi-api-evangelist-ratings.yml
  - aid: amadeus:tours-and-activities
    name: Tours and Activities
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
    overlays:
      - type: APIs.io Search
        url: overlays/tours-and-activities-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/tours-and-activities-openapi-api-evangelist-ratings.yml
  - aid: amadeus:transfer-booking
    name: Transfer Booking
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-error
              message: Parameter Schema Type
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-get-201-content-error
              message: POST Content
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/transfer-booking-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/transfer-booking-openapi-api-evangelist-ratings.yml
  - aid: amadeus:transfer-management
    name: Transfer Management
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/transfer-management-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/transfer-management-openapi-api-evangelist-ratings.yml
  - aid: amadeus:transfer-search
    name: Transfer Search
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/transfer-search-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/transfer-search-openapi-api-evangelist-ratings.yml
  - aid: amadeus:travel-recommendations
    name: Travel Recommendations
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Travel Recommendations API
          paths:
            /reference-data/recommended-locations:
              get:
                summary: GET recommended destinations
                tags:
                  - recommended-locations
                description: nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-contact-error
              message: Contact Object
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
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-error
              message: JSON Media Type GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
    overlays:
      - type: APIs.io Search
        url: overlays/travel-recommendations-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/travel-recommendations-openapi-api-evangelist-ratings.yml
  - aid: amadeus:trip-parser
    name: Trip Parser
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Trip Parser
          x-release-note:
            '3.0':
              - First release of Trip Parser V3
          paths:
            /travel/trip-parser:
              post:
                tags:
                  - Trip
                summary: POST Trip Parser request
                description: nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-contact-error
              message: Contact Object
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
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
    overlays:
      - type: APIs.io Search
        url: overlays/trip-parser-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/trip-parser-openapi-api-evangelist-ratings.yml
  - aid: amadeus:trip-purpose-prediction
    name: Trip Purpose Prediction
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developers.amadeus.com
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developers.amadeus.com
      - type: OpenAPI
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-parameters-schema-error
              message: Parameter Schema Type
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-error
              message: GET Content
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-operations-description-error
              message: Operation Description
    overlays:
      - type: APIs.io Search
        url: overlays/trip-purpose-prediction-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/trip-purpose-prediction-openapi-api-evangelist-ratings.yml
common:
  - type: GitHub Repository
    url: https://github.com/amadeus4dev/amadeus-open-api-specification
  - type: Portal
    url: https://developers.amadeus.com/
  - type: SignUp
    url: https://developers.amadeus.com/register
  - type: Login
    url: https://developers.amadeus.com/signin
  - type: Blog
    url: https://developers.amadeus.com/blog
  - type: Support
    url: https://developers.amadeus.com/support
  - type: Getting Started
    url: >-
      https://developers.amadeus.com/get-started/get-started-with-self-service-apis-335
  - type: Privacy Policy
    url: https://developers.amadeus.com/legal/privacy-policy
  - type: Terms of Use
    url: https://developers.amadeus.com/legal/terms-of-use
  - type: Plan
    url: https://developers.amadeus.com/pricing
  - type: Contact
    url: https://developers.amadeus.com/support
  - type: FAQ
    url: https://developers.amadeus.com/support/faq/
  - type: Code
    url: https://amadeus4dev.github.io/developer-guides/examples/code-example/
  - type: Tutorials
    url: https://amadeus4dev.github.io/developer-guides/resources/
  - type: Videos
    url: https://www.youtube.com/@amadeusfordevelopers8592
  - type: Change Log
    url: https://developers.amadeus.com/self-service/apis-changelog
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: amadeus
---