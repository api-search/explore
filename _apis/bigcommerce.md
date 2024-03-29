---
aid: bigcommerce
name: BigCommerce
description: >-
  BigCommerce is a NASDAQ-listed ecommerce platform that provides software as a
  service services to retailers. The company's platform includes online store
  creation, search engine optimization, hosting, and marketing and security from
  small to Enterprise sized businesses.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: >-
  https://raw.githubusercontent.com/apis-json/artisanal/main/apis/bigcommerce.yml
created: 2023/11/21
modified: 2023/11/21
specificationVersion: '0.16'
tags:
  - Commerce
  - Products
apis:
  - aid: bigcommerce:abandoned-cart-emails
    name: Abandoned Cart Emails
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Abandoned Cart Emails
          tags:
            - name: Abandoned Cart Emails
            - name: Template settings
          paths:
            /marketing/abandoned-cart-emails:
              get:
                description: An array of abandoned cart emails pertaining to a store.
                tags:
                  - Abandoned Cart Emails
                summary: Get all abandoned cart email templates
              post:
                summary: Create abandoned cart email template
                tags:
                  - Abandoned Cart Emails
                description: Create an Abandoned Cart Email template.
              parameters:
                - null
            /marketing/abandoned-cart-emails/{id}:
              get:
                summary: Get an email template
                description: Get a single Abandoned Cart Email template.
                tags:
                  - Abandoned Cart Emails
              put:
                summary: Update an email template
                description: Update an email template.
                tags:
                  - Abandoned Cart Emails
              delete:
                tags:
                  - Abandoned Cart Emails
                description: Delete Abandoned Cart Email template.
                summary: Delete email template
              parameters:
                - null
                - null
            /marketing/abandoned-cart-emails/default:
              get:
                summary: Get default email template
                description: Return default Abandoned Cart Email template.
                tags:
                  - Abandoned Cart Emails
              parameters:
                - null
            /marketing/abandoned-cart-emails/settings:
              get:
                summary: Get email template settings
                tags:
                  - Template settings
                description: Read Abandoned Cart Email Template settings.
              put:
                summary: Update email template settings
                tags:
                  - Template settings
                description: Update Abandoned Cart Email template settings.
              parameters:
                - nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
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
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/abandoned-cart-emails-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/abandoned-cart-emails-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:abandoned-carts
    name: Abandoned Carts
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            version: ''
            title: Abandoned Carts
          tags:
            - name: Abandoned Carts
            - name: Abandoned Cart Settings
            - name: Abandoned Carts Settings
          paths:
            /abandoned-carts/settings:
              get:
                summary: Get Global Abandoned Cart Settings
                description: Returns the global abandoned cart settings of a store.
                tags:
                  - Abandoned Cart Settings
              put:
                summary: Update Global Abandoned Cart Settings
                description: Updates the global abandoned cart settings of a store.
                tags:
                  - Abandoned Carts Settings
              parameters:
                - null
            /abandoned-carts/settings/channels/{channel_id}:
              get:
                summary: Get Channel Abandoned Cart Settings
                description: >-
                  Returns the per-channel overrides for the abandoned cart
                  settings of a store.
                tags:
                  - Abandoned Carts Settings
              put:
                summary: Update Channel Abandoned Cart Settings
                description: >-
                  Updates the per-channel overrides for the abandoned cart
                  settings of a store.


                  #### OAuth Scopes

                  | UI Name                                      | Permission |
                  Parameter                                     |

                  |-------------------------------------|------------|-----------------------------------------------|     

                  | Information & Settings                       | modify     |
                  `store_v2_information`                        |
                tags:
                  - Abandoned Carts Settings
              parameters:
                - null
                - null
            /abandoned-carts/{token}:
              get:
                summary: Get an Abandoned Cart
                description: >-
                  Returns the `cart_id` corresponding to the abandoned cart
                  `{token}` passed in.


                  **Usage Notes**:

                  * `{token}` is the token in the query string of the abandoned
                  cart link found in abandoned cart email notifications to
                  shoppers
                tags:
                  - Abandoned Carts
              parameters:
                - null
                - nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
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
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-content-error
              message: Default Content
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
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
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-type-error
              message: Schema Type
    overlays:
      - type: APIs.io Search
        url: overlays/abandoned-carts-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/abandoned-carts-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:accepted-payment-methods
    name: Accepted Payment Methods
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            version: ''
            title: Accepted Payment Methods
          tags:
            - name: Methods
          paths:
            /payments/methods:
              parameters:
                - null
              get:
                description: >-
                  Returns a list of accepted payment methods based on the
                  `order_id` or `checkout_id`.


                  **Notes**

                  * Use the [Create an
                  Order](/docs/rest-management/orders#create-an-order) endpoint
                  to generate the `order_id`.

                  * Orders created will be set to incomplete order status.

                  * The cart ID and checkout ID are the same.


                  **Required Fields**

                  * `order_id` or `checkout_id`
                summary: Get Accepted Payment Methods
                tags:
                  - Metho
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
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
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/accepted-payment-methods-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/accepted-payment-methods-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:payment-access-token
    name: Payment Access Token
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            version: ''
            title: Payment Access Token
          tags:
            - name: Tokens
          paths:
            /payments/access_tokens:
              parameters:
                - null
              post:
                description: >-
                  Use this endpoint to create a payment access token. A payment
                  access token is required to process payments with the
                  BigCommerce API.


                  You can also generate a payment access token during checkout
                  by using the `completeCheckout` mutation in the [GraphQL
                  Storefront
                  API](/docs/storefront/cart-checkout/guide/graphql-storefront#handling-payments).


                  After the token is created, use the token to [Process a
                  payment](/docs/rest-payments/processing#process-payment).


                  **Required Fields**

                  * order_id
                summary: Create Payment Access Token
                tags:
                  - Toke
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
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
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
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
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
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
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/payment-access-token-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/payment-access-token-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:catalog-brands
    name: Catalog - Brands
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Catalog - Brands
            version: ''
          tags:
            - name: Brands
            - name: Images
            - name: Metafields
            - name: Batch metafields
          paths:
            /catalog/brands:
              get:
                tags:
                  - Brands
                summary: Get All Brands
                description: >-
                  Returns a list of *Brands*. Optional filter parameters can be
                  passed in.
              post:
                tags:
                  - Brands
                summary: Create a Brand
                description: |-
                  Creates a *Brand*.

                  **Required Fields**
                  - name

                  **Read-Only Fields**
                  - id

                  **Limits**
                  - 30,000 brands per store limit
              delete:
                tags:
                  - Brands
                summary: Delete Brands
                description: |-
                  To delete brand objects, you must include a filter.

                  **Required Fields**
                   - name
              parameters:
                - null
            /catalog/brands/{brand_id}:
              get:
                tags:
                  - Brands
                summary: Get a Brand
                description: >-
                  Returns a single *Brand*. Optional filter parameters can be
                  passed in.
              put:
                tags:
                  - Brands
                summary: Update a Brand
                description: |-
                  Updates a *Brand*.

                  **Required Fields**
                  - None

                  **Read-Only Fields**
                  - id

                  To update a *Brand Image*, send a request with an `image_url`.
              delete:
                tags:
                  - Brands
                summary: Delete a Brand
                description: Deletes a *Brand*.
              parameters:
                - null
                - null
            /catalog/brands/{brand_id}/metafields:
              get:
                tags:
                  - Metafields
                summary: Get Brand Metafields
                description: >-
                  Returns a list of *Brand Metafields*. Optional filter
                  parameters can be passed in. 
              post:
                tags:
                  - Metafields
                summary: Create a Brand Metafield
                description: >-
                  Creates a *Brand Metafield*.


                  **Required Fields**

                  - permission_set

                  - namespace

                  - key

                  - value


                  **Read-Only Fields**

                  - id


                  **Note:** The maxiumum number of metafields allowed on each
                  order, product, category, variant, or brand is 250 per client
                  ID. For more information, see [Platform
                  Limits](https://support.bigcommerce.com/s/article/Platform-Limits)
                  in the Help Center.
              parameters:
                - null
                - null
            /catalog/brands/{brand_id}/metafields/{metafield_id}:
              get:
                tags:
                  - Metafields
                summary: Get a Brand Metafields
                description: >-
                  Returns a *Brand Metafield*. Optional filter parameters can be
                  passed in.
              put:
                tags:
                  - Metafields
                summary: Update a Brand Metafield
                description: "Updates a *Brand Metafield*.\n\n**Required Fields**  \n* none\n\n**Read-Only Fields**\n* id\n* These fields can only be modified by the app (API credentials) that created the metafield:\n\t* namespace\n\t* key\n\t* permission_set\n\n**Usage Notes**\n* Attempting to modify `namespace`, `key`, and `permission_set` fields using a client ID different from the one used to create those metafields will result in a 403 error message.\n* The maxiumum number of metafields allowed on each order, product, category, variant, or brand is 250 per client ID. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center."
              delete:
                tags:
                  - Metafields
                summary: Delete a Brand Metafield
                description: Deletes a *Brand Metafield*.
              parameters:
                - null
                - null
                - null
            /catalog/brands/{brand_id}/image:
              post:
                tags:
                  - Images
                summary: Create a Brand Image
                description: >-
                  Creates a *Brand Image*.


                  **Required Fields**

                  - image_file: Form posts are the only accepted upload option.


                  **Read-Only Fields**

                  - id


                  Only one image at a time can be created. To update a *Brand
                  Image*, use the [Update a
                  brand](/docs/rest-catalog/brands#update-a-brand) endpoint and
                  an `image_url`.
              delete:
                tags:
                  - Images
                summary: Delete a Brand Image
                description: Deletes a *Brand Image*.
              parameters:
                - null
                - null
            /catalog/brands/metafields:
              get:
                summary: Get All Brand Metafields
                tags:
                  - Batch metafields
                description: Get all brand metafields.
              post:
                summary: Create multiple Metafields
                tags:
                  - Batch metafields
                description: Create multiple metafields.
              put:
                summary: Update multiple Metafields
                tags:
                  - Batch metafields
                description: Create multiple metafields.
              delete:
                summary: Delete All Metafields
                tags:
                  - Batch metafields
                description: Delete all brand metafield
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
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
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-info
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-error
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/catalog-brands-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/catalog-brands-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:storefront-carts
    name: Storefront Carts
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Storefront Carts
          tags:
            - name: Cart
            - name: Cart Items
            - name: Cart Currency
          paths:
            /carts:
              get:
                tags:
                  - Cart
                summary: Get a Cart
                description: >-
                  Returns a *Cart*.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
              post:
                tags:
                  - Cart
                summary: Create a Cart
                description: >-
                  Creates a *Cart*.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
            /carts/{cartId}:
              delete:
                tags:
                  - Cart
                summary: Delete a Cart
                description: >-
                  Deletes a *Cart*. Once a *Cart* has been deleted it can not be
                  recovered.



                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
            /carts/{cartId}/items:
              post:
                tags:
                  - Cart Items
                summary: Add Cart Line Items
                description: >-
                  Adds a line items to the *Cart*.


                  > #### Notes

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  

                  > * Please note that this API endpoint is not concurrent safe,
                  meaning multiple simultaneous requests could result in
                  unexpected and inconsistent results.
            /carts/{cartId}/items/{itemId}:
              put:
                tags:
                  - Cart Items
                summary: Update Cart Line Item
                description: >-
                  Updates a *Cart* line item. Updates an existing, single line
                  item quantity and the price of custom items in a cart.


                  If a modified product or variant needs to be changed or
                  updated, you can remove and re-add the product to the cart
                  with the correct variants using the [Delete Cart Line
                  Item](/docs/rest-storefront/carts/cart-items#delete-cart-line-item)
                  and the [Add Cart Line
                  Items](/docs/rest-storefront/carts/cart-items#add-cart-line-items)
                  endpoints. You can also use carts mutations that are part of
                  the [GraphQL Storefront
                  API](/docs/storefront/cart-checkout/guide/graphql-storefront).



                  > #### Notes

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint. 

                  > * Please note that this API endpoint is not concurrent safe,
                  meaning multiple simultaneous requests could result in
                  unexpected and inconsistent results.
              delete:
                tags:
                  - Cart Items
                summary: Delete Cart Line Item
                description: >-
                  Deletes a *Cart* line item.


                  Removing the last `line_item` in the *Cart* deletes the
                  *Cart*.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
            /carts/{cartId}/currency:
              post:
                tags:
                  - Cart Currency
                summary: Update Cart Currency
                description: >-
                  Update currency of the *Cart*. 

                  Promotions and gift certificates that don't apply to the new
                  currency will be removed from your cart.

                  You cannot update the cart currency if the draft order cart or
                  the cart contains a manual discount.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
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
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/storefront-carts-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/storefront-carts-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:carts
    name: Carts
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Carts
            version: ''
          tags:
            - name: Carts (Single)
            - name: Items
            - name: Redirects
            - name: Settings
            - name: Metafields
            - name: Batch metafields
          paths:
            /carts:
              parameters:
                - null
              post:
                description: >-
                  Creates a **Cart**. 


                  **Required Fields**


                  |Field|Details|

                  |-|-|

                  |`line_item`|Specifies a line item.| 

                  |`custom_items`|Specifies a custom item. Only required if
                  adding a custom item to the cart.|

                  |`gift_certificates`|Specifies a gift certificate. Only
                  required if adding a gift certificate to the cart.|


                  **Usage Notes**


                  * A **cart** `id` (UUID) is returned in the response.

                  * A **cart** `id` is the same as a **checkout** `id`.

                  * A cart can be created by adding an existing **catalog item**
                  or a **custom item**.

                  * Carts are valid for **30 days** from the **last
                  modification** (this includes creating the cart or editing the
                  cart).

                  * If a product has modifiers, use the `option_selections`
                  array to describe the **modifier** selection(s).

                  * The format and data type of a cart’s `option_value` are
                  defined by the `value_data` object of a product’s [variant
                  option
                  value](/docs/rest-catalog/product-variant-options/values),
                  [modifier value](/docs/rest-catalog/product-modifiers/values),
                  or a combination of both.

                  * Redirect URLs can only be generated from carts that were
                  created using the **REST Management API**. 

                  * To get cart `redirect_urls` in the response, append the
                  following query parameter to the request URL:
                  `include=redirect_urls`. Redirect URLs point to either a
                  shared checkout domain or a channel-specific domain, depending
                  on the storefront configuration.

                  * To restore a cart that was created by a shopper or through a
                  Storefront API, first recreate the cart using the **REST
                  Management API**.

                  * To get cart `promotions` in the response, append the
                  following query parameter to the request URL:
                  `include=promotions.banners`.
                tags:
                  - Carts (Single)
                summary: Create a Cart
            /carts/{cartId}/items:
              parameters:
                - null
                - null
                - null
              post:
                description: >-
                  Adds line item to the *Cart*.


                  **Usage Notes**


                  To add a custom item use `custom_items`. 


                  Overriding a product’s `list_price` will make that item
                  ineligible for V3 product level promotions.


                  If a product has modifiers, omit the `variant_id` and instead
                  use the `option_selections` array to describe both the
                  **variant** and the **modifier** selections.


                  Please note that this API endpoint is not concurrent safe,
                  meaning multiple simultaneous requests could result in
                  unexpected and inconsistent results.
                tags:
                  - Items
                summary: Add Cart Line Items
            /carts/{cartId}/redirect_urls:
              parameters:
                - null
                - null
                - null
              post:
                description: >-
                  Creates a **Cart** redirect URL for redirecting a shopper to
                  an already created cart using the `cartId`.


                  **Usage Notes**


                  * Redirect URLs can also be created with **Create a Cart**
                  requests by appending `include=redirect_urls`.

                  * A **Carts** redirect URL may only be used once.

                  * Redirect URLs point to either a shared checkout domain or a
                  channel-specific domain, depending on the storefront
                  configuration.

                  * Once a redirect URL has been visited, it will be invalidated
                  and cannot be used again. 

                  * If your application requires URLs to be visited more than
                  once, consider generating a fresh one each time you need to
                  restore a cart, and redirecting to the URL from your own
                  application.

                  * Redirect URLs can be generated only from carts that were
                  created using the **REST Management API**. 

                  * To restore a cart that was created on the storefront, either
                  by a shopper or a Storefront API, first recreate the cart
                  using the **REST Management API**.

                  * When redirecting the shopper, you can add a set of
                  `query_params` to the URL. The `query_params` feature allows
                  passing additional information to the redirect URL.
                tags:
                  - Redirects
                  - Cart Redirect URLs
                summary: Create Cart Redirect URL
            /carts/{cartId}/items/{itemId}:
              parameters:
                - null
                - null
                - null
              put:
                description: >-
                  Updates an existing, single line item in the *Cart*. 


                  **Notes**


                  Currently, only updating `list_price` and `quantity` are
                  supported. Updating a product’s `list_price` will make that
                  item ineligible for V3 product-level promotions. 


                  If the product has modifiers, omit the `variant_id` and
                  instead use the `option_selections` array to describe both the
                  **variant** and the **modifier** selections.


                  If a variant needs to be changed or updated, the product will
                  need to be removed and re-added to the cart with the correct
                  variants using the **Add Cart Line Items** endpoint.


                  `custom_items` cannot be updated via the API at this time. To
                  update your cart, add a new updated custom item and delete the
                  outdated one. If your cart contains only one line item,
                  perform the add operation before the delete operation.


                  Deleting all line items from the cart will invalidate the
                  cart. 


                  Please note that this API endpoint is not concurrent safe,
                  meaning multiple simultaneous requests could result in
                  unexpected and inconsistent results.
                tags:
                  - Items
                summary: Update Cart Line Item
              delete:
                description: >-
                  Deletes a *Cart* line item. 


                  **Notes**


                  Removing the last `line_item` in the *Cart* deletes the
                  *Cart*.
                tags:
                  - Items
                summary: Delete Cart Line Item
            /carts/{cartId}:
              parameters:
                - null
                - null
              get:
                description: Returns a storeʼs *Cart*.
                tags:
                  - Carts (Single)
                summary: Get a Cart
              put:
                description: >-
                  Updates a *Cartʼs* `customer_id`.


                  **Notes**


                  Changing the *Cart* `customer_id` will remove any promotions
                  or shipping calculations on the *Cart*. These are tied to the
                  customer depending on cart conditions and any customer
                  groups. 
                tags:
                  - Carts (Single)
                summary: Update Customer ID
              delete:
                description: >-
                  Deletes a *Cart*. Once a *Cart* has been deleted it can’t be
                  recovered.
                tags:
                  - Carts (Single)
                summary: Delete a Cart
            /carts/settings:
              parameters:
                - null
              get:
                summary: Get Global Cart Settings
                description: Returns the global cart settings of a store.
                tags:
                  - Settings
              put:
                summary: Update Global Cart Settings
                description: Update the global cart settings of a store.
                tags:
                  - Settings
            /carts/settings/channels/{channel_id}:
              parameters:
                - null
                - null
              get:
                summary: Get Channel Cart Settings
                description: >-
                  Returns the per-channel overrides for the cart settings of a
                  store.
                tags:
                  - Settings
              put:
                summary: Update Channel Cart Settings
                description: >-
                  Update the per-channel overrides for the cart settings of a
                  store.
                tags:
                  - Settings
            /carts/{cart_id}/metafields:
              parameters:
                - null
                - null
              get:
                summary: Get Cart Metafields
                tags:
                  - Metafields
                description: Get a cart's metafields.
              post:
                summary: Create a Cart Metafield
                tags:
                  - Metafields
                description: >
                  Create a cart `Metafield`. 


                  If you create an order from a Cart, you can continue
                  referencing the Cart Metafields even if you delete the
                  original Cart. Use the `cart_id` field on the Order to
                  construct the Cart Metafield endpoint. 
            /carts/{cart_id}/metafields/{metafield_id}:
              get:
                summary: Get a Cart Metafield
                tags:
                  - Metafields
                description: Gets a cart metafield.
              put:
                summary: Update a Cart Metafield
                tags:
                  - Metafields
                description: |
                  Update a `Metafield`, by `cart_id`.
              delete:
                summary: Delete a Metafield
                tags:
                  - Metafields
                description: |
                  Deletes a `Metafield`.
              parameters:
                - null
                - null
                - null
            /carts/metafields:
              get:
                summary: Get All Cart Metafields
                tags:
                  - Batch metafields
                description: Get all cart metafields.
              post:
                summary: Create multiple Metafields
                tags:
                  - Batch metafields
                description: Create multiple metafields.
              put:
                summary: Update multiple Metafields
                tags:
                  - Batch metafields
                description: Create multiple metafields.
              delete:
                summary: Delete All Metafields
                tags:
                  - Batch metafields
                description: Delete all cart metafield
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-response-put-500-status-code-info
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-error
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-oneof-info
              message: Schema Properties OneOf
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/carts-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/carts-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:catalog-categories
    name: Catalog - Categories
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Catalog - Categories
            version: ''
          tags:
            - name: Batch metafields
            - name: Metafields
            - name: Images
            - name: Sort Order
            - name: Categories (deprecated)
          paths:
            /catalog/categories:
              get:
                tags:
                  - Categories (deprecated)
                summary: Get All Categories
                description: >-
                  When possible, use the [Catalog Trees - Get all
                  categories](/docs/rest-catalog/category-trees/categories#get-all-categories)
                  endpoint instead.


                  Returns a list of *Categories*. Optional filter parameters can
                  be passed in.


                  **Note:**

                  The default rate limit for this endpoint is 40 concurrent
                  requests.
              post:
                tags:
                  - Categories (deprecated)
                summary: Create a Category
                description: "When possible, use the [Category Trees - Create categories](/docs/rest-catalog/category-trees/categories#create-categories) endpoint instead.\n\nCreates a *Category*.\n\nUse this endpoint when an API only works with categories of a default BigCommerce storefront (`channel_id=1`). \n\nUse the [Create categories](/docs/rest-catalog/category-trees/categories#create-categories) endpoint when an API works with categories across different category trees that belong to different storefront channels.\n\n**Required Fields**:\n- `parent_id`: \n\t- To create a child category, set the `parent_id` to the parent category.\n\t- To create a top level category, set the `parent_id` to `0`.\n- `name`\n\n**Read-Only Fields**:\n- `id`\n\n**Limits**:\n- 16,000 categories per store limit.\n- 1,000 categories per product limit.\n- 50 characters category name length.\n- 8 levels of category depth limit.\n- 65,642 characters category description length limit.\n\n **Note:**\n The default rate limit for this endpoint is 40 concurrent requests.\n"
              delete:
                tags:
                  - Categories (deprecated)
                summary: Delete Categories
                description: >-
                  When possible, use the [Category Trees - Delete
                  categories](/docs/rest-catalog/category-trees/categories#delete-categories)
                  endpoint instead.


                  Deletes *Category* objects. At least one filter parameter is
                  required to perform the `DELETE` operation.


                  **Usage Notes**


                  - Sending a `DELETE`request without specifying a filter
                  parameter will result in a `422` error. 

                  - Sending a `DELETE` request for a category that contains
                  products will result in a `422` error. Move products to a new
                  category by sending a `PUT` request to the
                  `/catalog/products/{product_id}` endpoint before deleting a
                  category.
              parameters:
                - null
            /catalog/categories/{category_id}:
              get:
                tags:
                  - Categories (deprecated)
                summary: Get a Category
                description: >-
                  When possible, use the [Catalog Trees - Get all
                  categories](/docs/rest-catalog/category-trees/categories#get-all-categories)
                  endpoint instead. You can provide a category identifier using
                  query parameters to retrieve a single category.


                  Returns a single *Category*. Optional parameters can be passed
                  in.


                  **Note:**

                  The default rate limit for this endpoint is 40 concurrent
                  requests.
              put:
                tags:
                  - Categories (deprecated)
                summary: Update a Category
                description: >-
                  When possible, use the [Catalog Trees - Update
                  categories](/docs/rest-catalog/category-trees/categories#update-categories)
                  endpoint instead.


                  Updates a *Category*.


                  **Required Fields**

                  * none


                  **Read-Only Fields**

                  - id


                  **Note:** 

                  The default rate limit for this endpoint is 40 concurrent
                  requests.
              delete:
                tags:
                  - Categories (deprecated)
                summary: Delete a Category
                description: >-
                  When possible, use the [Category Trees - Delete
                  categories](/docs/rest-catalog/category-trees/categories#delete-categories)
                  endpoint instead. You can provide a category identifier using
                  query parameters to delete a single category.


                  Deletes a *Category*.


                  **Note:**

                  The default rate limit for this endpoint is 40 concurrent
                  requests.
              parameters:
                - null
                - null
            /catalog/categories/{category_id}/metafields:
              get:
                tags:
                  - Metafields
                summary: Get Category Metafields
                description: >-
                  Returns a list of *Metafields* on a *Category*. Optional
                  filter parameters can be passed in.
              post:
                tags:
                  - Metafields
                summary: Create a Category Metafield
                description: >-
                  Creates a *Category Metafield*.


                  **Required Fields:**

                  - permission_set

                  - namespace

                  - key

                  - value


                  **Read-Only Fields**

                  - id


                  **Note:** The maximum number of metafields allowed on each
                  order, product, category, variant, or brand is 250 per client
                  ID. For more information, see [Platform Limits (Help
                  Center)](https://support.bigcommerce.com/s/article/Platform-Limits)
                  in the Help Center.
              parameters:
                - null
                - null
            /catalog/categories/{category_id}/metafields/{metafield_id}:
              get:
                tags:
                  - Metafields
                summary: Get a Category Metafield
                description: >-
                  Returns a single *Category Metafield*. Optional parameters can
                  be passed in.
              put:
                tags:
                  - Metafields
                summary: Update a Category Metafield
                description: "Updates a *Category Metafield*.\n\n**Required Fields**\n* none\n\n**Read-Only Fields**\n* id\n* These fields can only be modified by the app (API credentials) that created the metafield:\n\t* namespace\n\t* key\n\t* permission_set\n\n**Usage Notes**\n* Attempting to modify `namespace`, `key`, and `permission_set` fields using a client ID different from the one used to create those metafields will result in a 403 error message. "
              delete:
                tags:
                  - Metafields
                summary: Delete a Category Metafield
                description: Deletes a *Category Metafield*.
              parameters:
                - null
                - null
                - null
            /catalog/categories/{category_id}/image:
              post:
                tags:
                  - Images
                summary: Create a Category Image
                description: >-
                  Create a *Category Image*.

                   **Required Fields**
                  - image_file: Form posts are the only accepted upload option.


                  Only one image at a time can be created.

                  Limit image size to 1MB.

                  To update a *Category Image*, use the [Update
                  categories](/docs/rest-catalog/category-trees/categories#update-categories)
                  endpoint and an `image_url`.
              delete:
                tags:
                  - Images
                summary: Delete a Category Image
                description: Deletes a *Category Image*.
              parameters:
                - null
                - null
            /catalog/categories/{category_id}/products/sort-order:
              get:
                tags:
                  - Sort Order
                summary: Get Product Sort Order
                description: >-
                  Returns a list of products and their sort order for a specific
                  category.


                  **Usage Notes**

                  * Data pairs are displayed in ascending order based on
                  products' `sort_order` values.

                  * `null` values are allowed for products without specified
                  `sort_order` values.

                  * Products with `sort_order` value of `null` will be displayed
                  after products with valid numerical values.

                  * The priorities for determining product sort order on a
                  storefront are the following:
                    - Priority 1: Manually specified sort order on Category Level (API).
                    - Priority 2: Manually specified sort order on Product (Global) Level (UI/API).
                    - Priority 3: Default sorting by Product ID (newly added products go first) (UI/API).
              put:
                tags:
                  - Sort Order
                summary: Update Product Sort Order
                description: Updates sort order of products within a specific category.
              parameters:
                - null
                - null
            /catalog/categories/metafields:
              get:
                summary: Get All Category Metafields
                tags:
                  - Batch metafields
                description: Get all category metafields.
              post:
                summary: Create multiple Metafields
                tags:
                  - Batch metafields
                description: Create multiple metafields.
              put:
                summary: Update multiple Metafields
                tags:
                  - Batch metafields
                description: Create multiple metafields.
              delete:
                summary: Delete All Metafields
                tags:
                  - Batch metafields
                description: Delete all category metafield
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
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
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-info
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-error
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/catalog-categories-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/catalog-categories-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:catalog-category-trees
    name: Catalog - Category Trees
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Catalog - Category Trees
            version: ''
          tags:
            - name: Category Trees
            - name: Categories
          paths:
            /catalog/trees/categories:
              get:
                summary: Get All Categories
                description: |-
                  Returns a list of categories. 

                  To get a specific category in a tree, provide a category ID.
                tags:
                  - Categories
              post:
                summary: Create Categories
                description: |-
                  Creates new categories. 

                  Creating a category requires:
                   - `name`
                   - `tree_id` or `parent_id` 
                tags:
                  - Categories
              put:
                summary: Update Categories
                description: |-
                  Updates existing categories. 

                   To update a specific category in a tree, provide a category id.
                tags:
                  - Categories
              delete:
                summary: Delete Categories
                description: >-
                  Deletes categories. 


                  To delete a specific category in a tree, provide a category
                  ID.
                tags:
                  - Categories
              parameters:
                - null
            /catalog/trees:
              get:
                summary: Get All Category Trees
                description: Returns a list of *Category Trees*.
                tags:
                  - Category Trees
              put:
                summary: Upsert Category Trees
                description: >
                  Upserts *Category Trees*. 


                  This single endpoint updates and creates category trees. If a
                  tree object contains an ID, it is processed as an update
                  operation using that ID. If you do not provide an ID, a new
                  tree is created. The category tree `name` field is required to
                  create trees, but is not required on the update.


                  **Usage Notes**

                  * `channel_id` is required to create a *Category Tree*. You
                  can assign one `channel_id` to one category tree.
                tags:
                  - Category Trees
              delete:
                summary: Delete Category Trees
                description: >-
                  Deletes *Category Trees*. A filter must be supplied with the
                  endpoint.
                tags:
                  - Category Trees
              parameters:
                - null
            /catalog/trees/{tree_id}/categories:
              get:
                summary: Get a Category Tree
                description: Returns a *Category Tree*.
                tags:
                  - Category Trees
              parameters:
                - null
                - nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-info
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-response-delete-400-status-code-info
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-info
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-type-error
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/catalog-category-trees-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/catalog-category-trees-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:channels
    name: Channels
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            version: ''
            title: Channels
          tags:
            - name: Batch metafields
            - name: Channels
            - name: Metafields
            - name: Menus
            - name: Active Theme
            - name: Currency Assignments
            - name: Listings
            - name: Site
            - name: Site Checkout URL
          paths:
            /channels:
              parameters:
                - null
              get:
                tags:
                  - Channels
                summary: Get All Channels
                description: >-
                  Returns a list of *Channels*.


                  Will always return the default BigCommerce storefront with an
                  ID of `1`. This storefront is created by default when you
                  provision a BigCommerce store.
              post:
                tags:
                  - Channels
                summary: Create a Channel
                description: Creates a *Channel*.
            /channels/{channel_id}:
              parameters:
                - null
                - null
              get:
                tags:
                  - Channels
                summary: Get a Channel
                description: >-
                  Returns a *Channel*. Channel ID `1` returns the default
                  BigCommerce storefront.
              put:
                tags:
                  - Channels
                summary: Update a Channel
                description: >-
                  Updates a *Channel*.


                  ## Updatable Fields


                  The following fields can be updated.

                  * `name`

                  * `external_id`

                  * `status`

                  * `is_listable_from_ui`

                  * `is_visible`

                  * `config_meta`



                  > #### Note

                  > * Partial updates are supported. In most cases, if a field
                  that *cannot* be updated is passed in, the API **will not**
                  respond with an error. It returns a 200 response with the
                  object, in which you will see the field(s) were not updated.

                  > * `platform` and `type` cannot be updated after a channel is
                  created.

                  > * A channel with status `deleted` or `terminated` cannot be
                  updated.
            /channels/{channel_id}/active-theme:
              parameters:
                - null
                - null
              get:
                tags:
                  - Active Theme
                summary: Get a Channel Active Theme
                description: |-
                  Returns details of the theme active on the specified channel.
                  Does not support active Blueprint (legacy) themes.
            /channels/currency-assignments:
              parameters:
                - null
              get:
                tags:
                  - Currency Assignments
                summary: Get All Channels Currency Assignments
                description: Returns a list of currency assignments for all channels.
              post:
                tags:
                  - Currency Assignments
                summary: Create Multiple Channels Currency Assignments
                description: >-
                  Sets enabled currencies and default currency for multiple
                  channels. Note that currencies must be added first in the
                  **Settings > Setup > Currencies** settings from an active
                  MSF-enabled BigCommerce store control panel before the
                  currencies can be assigned to a channel.
              put:
                tags:
                  - Currency Assignments
                summary: Update Multiple Channels Currency Assignments
                description: >-
                  Updates enabled currencies and default currency for multiple
                  channels. Note that currencies must be added first in the
                  **Settings > Setup > Currencies** settings from an active
                  MSF-enabled BigCommerce store control panel before the
                  currencies can be assigned to a channel.
            /channels/{channel_id}/currency-assignments:
              parameters:
                - null
                - null
              get:
                tags:
                  - Currency Assignments
                summary: Get Channel Currency Assignments
                description: Returns a list of currency assignments for a specific channel.
              post:
                tags:
                  - Currency Assignments
                summary: Create Channel Currency Assignments
                description: >-
                  Sets enabled currencies and default currency for a specific
                  channel. Note that currencies must be added first in the
                  **Settings > Setup > Currencies** settings from an active
                  MSF-enabled BigCommerce store control panel before the
                  currencies can be assigned to a channel.
              put:
                tags:
                  - Currency Assignments
                summary: Update Channel Currency Assignments
                description: >-
                  Updates enabled currencies and default currency for a specific
                  channel. Note that currencies must be added first in the
                  **Settings > Setup > Currencies** settings from an active
                  MSF-enabled BigCommerce store control panel before the
                  currencies can be assigned to a channel.
              delete:
                tags:
                  - Currency Assignments
                summary: Delete Channel Currency Assignments
                description: >-
                  Deletes currency assignments for a specific channel. Once
                  done, this channel will inherit the store’s currency settings.
            /channels/{channel_id}/listings:
              parameters:
                - null
                - null
              get:
                tags:
                  - Listings
                summary: Get Channel Listings
                description: >-
                  Returns a list of all *Channel Listings* for a specific
                  channel. Note that if the *Channel* is not found or there is
                  no listing associated to the *Channel*, it will return a 200
                  response with empty data.
              post:
                tags:
                  - Listings
                summary: Create Channel Listings
                description: Creates one or more *Channel Listings* for a specific channel.
              put:
                tags:
                  - Listings
                summary: Update Channel Listings
                description: >-
                  Updates one or more *Channel Listings* for a specific channel.


                  > #### Note

                  > * Partial updates are supported. In most cases, if a field
                  that *cannot* be updated is passed in, the API **will not**
                  respond with an error. It returns a 200 response with the
                  object, in which you will see the field(s) were not updated.

                  > * If a new variant is provided, the API will append the
                  variant to the list. If a variant already exists, the API will
                  update the existing variant. Other variants that are not
                  provided in the payload remains unchanged.

                  > * If `listing_id` does not exist, the API will return a 200
                  response with empty data.

                  > * `listing_id` is required and cannot be less than or equal
                  to zero.

                  > * `product_id` cannot be updated after a channel listing is
                  created.

                  > * `product_id` of a variant must match the `product_id` of
                  the channel listing.
            /channels/{channel_id}/listings/{listing_id}:
              parameters:
                - null
                - null
                - null
              get:
                tags:
                  - Listings
                summary: Get a Channel Listing
                description: Returns a *Channel Listing* for a specific channel.
            /channels/{channel_id}/site/checkout-url:
              parameters:
                - null
                - null
              put:
                summary: Upsert a Siteʼs Checkout URL
                tags:
                  - Site Checkout URL
                description: Creates or updates (upserts) a siteʼs checkout URL
              delete:
                summary: Delete a Siteʼs Checkout URL
                description: >-
                  Deletes a siteʼs checkout URL. After deletion, a shared
                  checkout URL is used.
                tags:
                  - Site Checkout URL
            /channels/{channel_id}/site:
              parameters:
                - null
                - null
              get:
                summary: Get a Channel Site
                description: |
                  Alias of `GET /sites?channel_id=channel_id`

                  Returns site data for the specified channel.
                tags:
                  - Site
              put:
                summary: Update a Channel Site
                tags:
                  - Site
                description: Updates a site for provided channel.
              post:
                summary: Create a Channel Site
                tags:
                  - Site
                description: Alias of POST `/sites`. Creates a site for provided channel.
              delete:
                description: Deletes the Channelʼs site.
                tags:
                  - Site
                summary: Delete a Channel Site
            /channels/{channel_id}/channel-menus:
              parameters:
                - null
                - null
              get:
                summary: Get Channel Menus
                description: >
                  Returns list of Control Panel side navigation menus for a
                  channel.
                tags:
                  - Menus
              post:
                summary: Create Channel Menus
                tags:
                  - Menus
                description: >-
                  Creates or replaces list of control panel side navigation
                  menus for a channel.
              delete:
                description: Deletes control panel side navigation menus for a channel.
                tags:
                  - Menus
                summary: Delete Channel Menus
            /channels/{channel_id}/metafields:
              parameters:
                - null
                - null
              get:
                summary: Get Channel Metafields
                tags:
                  - Metafields
                description: >-
                  Returns a list of metafields on a channel. Optional filter
                  parameters can be passed in.
              post:
                summary: Create a Channel Metafield
                tags:
                  - Metafields
                description: >-
                  Creates a channel metafield.


                  **Note:** The maxiumum number of metafields allowed on each
                  order, product, category, variant, channel, or brand is 250
                  per client ID. For more information, see [Platform
                  Limits](https://support.bigcommerce.com/s/article/Platform-Limits)
                  in the Help Center.
            /channels/{channel_id}/metafields/{metafield_id}:
              parameters:
                - null
                - null
                - null
              get:
                summary: Get a Channel Metafield
                tags:
                  - Metafields
                description: Returns a single channel metafield.
              put:
                summary: Update a Channel Metafield
                tags:
                  - Metafields
                description: >-
                  Updates a single channel metafield.


                  **Usage Notes**

                  * Attempting to modify `namespace`, `key`, and
                  `permission_set` fields using a client ID different from the
                  one used to create those metafields will result in a `403`
                  error message. 
              delete:
                summary: Delete a Channel Metafield
                tags:
                  - Metafields
                description: Deletes a single channel metafield.
            /channels/metafields:
              get:
                summary: Get All Channel Metafields
                tags:
                  - Batch metafields
                description: Get all channel metafields.
              post:
                summary: Create multiple Metafields
                tags:
                  - Batch metafields
                description: Create multiple metafields.
              put:
                summary: Update multiple Metafields
                tags:
                  - Batch metafields
                description: Update multiple metafields.
              delete:
                summary: Delete All Metafields
                tags:
                  - Batch metafields
                description: Delete all channel metafield
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-description-info
              message: Operation Description
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-response-put-500-status-code-info
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-error
              message: DELETE Request Body
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-description-length-error
              message: Description needs to be less than 250 characters.
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
    overlays:
      - type: APIs.io Search
        url: overlays/channels-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/channels-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:storefront-checkouts
    name: Storefront Checkouts
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Storefront Checkouts
            version: ''
          tags:
            - name: Checkout
            - name: Checkout Billing Address
            - name: Checkout Cart Items
            - name: Checkout Consignments
            - name: Checkout Coupons
            - name: Checkout Gift Certificates
            - name: Checkout Spam Protection
            - name: Checkout Store Credit
          paths:
            /checkouts/{checkoutId}:
              get:
                tags:
                  - Checkout
                summary: Get a Checkout
                description: >-
                  Returns a *Checkout*.


                  The cart ID and checkout ID are the same.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
              put:
                tags:
                  - Checkout
                summary: Update Customer Messages
                description: >-
                  Updates *Checkout* customer messages.


                  **Limits**


                  * 2000 character limit


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
            /checkouts/{checkoutId}/carts/{cartId}/items/{itemId}:
              put:
                tags:
                  - Checkout Cart Items
                summary: Update a Line Item
                description: >-
                  Updates a *Checkout Line Item*. Updates an existing, single
                  line item in the cart.


                  If a variant needs to be changed or updated, the product will
                  need to be removed and re-added to the cart with the correct
                  variants using the [Add Cart Line
                  Items](/docs/rest-storefront/carts/cart-items#add-cart-line-items)
                  endpoint or the [GraphQL Storefront
                  API](/docs/storefront/cart-checkout/guide/graphql-storefront).


                  > #### Notes

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  

                  > * Please note that this API endpoint is not concurrent safe,
                  meaning multiple simultaneous requests could result in
                  unexpected and inconsistent results.
              delete:
                tags:
                  - Checkout Cart Items
                summary: Delete a Line Item
                description: >-
                  Deletes a *Line Item* from the *Cart*.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
            /checkouts/{checkoutId}/billing-address:
              post:
                tags:
                  - Checkout Billing Address
                summary: Add Checkout Billing Address
                description: >-
                  Adds a billing address to an existing *Checkout*.


                  **Required Fields**

                  * country_code



                  > #### Note

                  > * The `email` property is only required if the customer is a
                  guest shopper. Otherwise, it is set automatically.

                  > * Sending `email` property as a payload in POST request
                  triggers the abandoned cart notification process.

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
            /checkouts/{checkoutId}/billing-address/{addressId}:
              put:
                tags:
                  - Checkout Billing Address
                summary: Update Checkout Billing Address
                description: >-
                  Updates an existing billing address on *Checkout*.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
            /checkouts/{checkoutId}/consignments:
              post:
                tags:
                  - Checkout Consignments
                summary: Create a Consignment
                description: >
                  Adds a new *Consignment* to *Checkout*.


                  Perform the following two steps to define the fulfillment of
                  the items in the cart.
                    ### For **shipping** consignments:
                      1. Add a new Consignment to Checkout.
                          * Send a `POST` request to `/consignments` with each shipping address, line item IDs, and quantities. Each address can have its own line item IDs.
                          * Provide a full valid customer address before placing the order. If provided, the order placement will succeed. 
                          * As part of the request URL make sure to add `include=consignments.availableShippingOptions` to return the available shipping options based on the items, the address, and the shipping location. This will return `availableShippingOptions` in the response.

                        * Required Fields:
                          * `shipping_address` (deprecated) or `address`
                          * `lineItems`
                      2. Update the Consignment with Shipping Options using the [REST Storefront API](/checkouts/checkout-consignments#update-a-consignment), the [REST Management API](/docs/rest-management/checkouts/checkout-consignments#update-checkout-consignment) or the [GraphQL Storefront API](/docs/storefront/cart-checkout/guide/graphql-storefront).
                            
                    ### For **pickup** consignments:
                      1. Create a new consignment object. 
                        - Send a `POST` request to `/consignments` with line item IDs and quantities.
                        - Provide a `pickupMethodId`. This is the `id` of the Pickup Method provided in the response body of the Storefront Pickup Options API.
                        - Required Fields:
                            * `pickupOption`
                            * `lineItems`

                  To learn more about creating a Checkout Consignment, see the
                  [Carts and Checkouts
                  Tutorial](/docs/storefront/cart-checkout/guide/rest-storefront).


                  > #### Notes

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  

                  > * Please note that this API endpoint is not concurrent safe,
                  meaning multiple simultaneous requests could result in
                  unexpected and inconsistent results.
            /checkouts/{checkoutId}/consignments/{consignmentId}:
              put:
                tags:
                  - Checkout Consignments
                summary: Update a Consignment
                description: >-
                  Updates an existing consignment. An update is either one of
                  the following:


                  1. Updates the consignment address and/or line items.

                  2. Selects a specific fulfillment option.


                  ### Update the consignment address and line items

                  For this type of update, the payload is the same as when
                  creating a new consignment.         Update each *Consignment*
                  `shippingOptionId` (shipping address and line items) with the
                  `availableShippingOption > id` from the POST `/consignment`
                  response. 


                  **Note:**

                  Updating a consignment could invalidate the value for
                  `selectedShippingOption` and `selectedPickupOption`.


                  ### Select a specific fulfillment option

                  Before placing an order, each consignment must have a
                  `selectedShippingOption` or a `selectedPickupOption`.


                  If the consignment already has a pick-up option selected and a
                  shipping option is provided, the pick-up option will be
                  deselected and the shipping option will be selected instead
                  (and vice versa). The `PUT` request will fail if it contains a
                  shipping option ID and a pickup option ID.


                  Required Fields:

                  * `shippingOptionId` or `pickupOptionId`

                  * `lineItems`


                  To learn more about creating a Checkout Consignment see
                  [Checkout Consignment
                  API](/docs/storefront/cart-checkout/guide/consignments).


                  > #### Notes

                  > * You cannot pass both an `address` and a `shippingOptionId`
                  because the shipping option may not be available for the new
                  address 

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  

                  > * Please note that this API endpoint is not concurrent safe,
                  meaning multiple simultaneous requests could result in
                  unexpected and inconsistent results.
              delete:
                tags:
                  - Checkout Consignments
                summary: Delete a Consignment
                description: >-
                  Removes an existing *Consignment* from *Checkout*.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
            /checkouts/{checkoutId}/gift-certificates:
              post:
                tags:
                  - Checkout Gift Certificates
                summary: Add Gift Certificate to Checkout
                description: >-
                  Adds a *Gift Certificate Code* to *Checkout*.


                  > #### Note

                  > * *Gift Certificates* are treated as a payment methods.

                  > * You are not able to purchase a gift certificate with a
                  gift certificate.

                  > * The rate limit is 20/hour (only for unique
                  gift-certificate codes).

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
            /checkouts/{checkoutId}/gift-certificates/{giftCertificateCode}:
              delete:
                tags:
                  - Checkout Gift Certificates
                summary: Delete Gift Certificate
                description: >-
                  Deletes an existing *Gift Certificate*.


                  This removes the *Gift Certificate* payment method.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
            /checkouts/{checkoutId}/coupons:
              post:
                tags:
                  - Checkout Coupons
                summary: Add Coupon to Checkout
                description: >-
                  Adds a *Coupon Code* to *Checkout*.


                  **Required Fields**

                  * couponCode


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
            /checkouts/{checkoutId}/coupons/{couponCode}:
              delete:
                tags:
                  - Checkout Coupons
                summary: Delete Checkout Coupon
                description: >
                  Deletes a *Coupon Code* from *Checkout*.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
            /checkouts/{checkoutId}/store-credit:
              post:
                tags:
                  - Checkout Store Credit
                summary: Add Store Credit
                description: >-
                  Applies any available store credit to a checkout. As on the
                  storefront, all available store credit will be used (up to the
                  value of the order) and no amount need be specified.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.
              delete:
                tags:
                  - Checkout Store Credit
                summary: Remove Store Credit
                description: >-
                  Removes store credit from a checkout.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
            /checkouts/{checkoutId}/spam-protection:
              post:
                tags:
                  - Checkout Spam Protection
                summary: Checkout Spam Protection
                description: >-
                  Verifies if checkout is created by human.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-request-body-on-post-error
              message: Request Body POST
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
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-description-length-error
              message: Description needs to be less than 250 characters.
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
    overlays:
      - type: APIs.io Search
        url: overlays/storefront-checkouts-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/storefront-checkouts-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:checkouts
    name: Checkouts
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Checkouts
          tags:
            - name: Checkout
            - name: Checkout Billing Address
            - name: Checkout Consignments
            - name: Checkout Coupons
            - name: Checkout Discounts
            - name: Checkout Orders
            - name: Checkout Settings
            - name: Checkout Token
          paths:
            /checkouts/{checkoutId}:
              parameters:
                - null
                - null
              get:
                tags:
                  - Checkout
                summary: Get a Checkout
                description: |-
                  Returns a *Checkout*.

                  **Notes**

                  The cart ID and checkout ID are the same.
              put:
                tags:
                  - Checkout
                summary: Update Customer Messages
                description: |-
                  Change customer message pertaining to an existing *Checkout*.

                  **Limits:**
                  * 2000 characters for customer message
            /checkouts/{checkoutId}/discounts:
              post:
                tags:
                  - Checkout Discounts
                summary: Add Discount to Checkout
                description: >-
                  Adds a discount to an existing *checkout*.


                  This discount only applies to `line_items`. When you call this
                  API, you clear out all existing discounts applied to line
                  items, including product and order-based discounts.


                  This endpoint splits the discount between line items based on
                  the item value.


                  Required Fields

                  * discounted_amount
            /checkouts/{checkoutId}/billing-address:
              post:
                tags:
                  - Checkout Billing Address
                summary: Add Checkout Billing Address
                description: |-
                  Adds a billing address to an existing checkout.

                  **Required Fields**
                  * email
                  * country_code
            /checkouts/{checkoutId}/billing-address/{addressId}:
              put:
                tags:
                  - Checkout Billing Address
                summary: Update Checkout Billing Address
                description: Updates an existing billing address on a checkout.
            /checkouts/{checkoutId}/consignments:
              post:
                tags:
                  - Checkout Consignments
                summary: Add Consignment to Checkout
                description: >-
                  Adds a new consignment to a checkout.



                  Please note that this API endpoint is not concurrent safe,
                  meaning multiple simultaneous requests could result in
                  unexpected and inconsistent results.


                  For more information about working with consignments, see
                  [Checkout
                  consignment](/docs/storefront/cart-checkout/guide/consignments).  


                  Though the only required `address` properties to create a
                  consignment are `email` and `country_code`, to successfully
                  [create an
                  order](/docs/rest-management/checkouts/checkout-orders#create-an-order)
                  the `address` requires the following properties:

                  * `first_name`

                  * `last_name`

                  * `address1`

                  * `city`

                  * `country`

                  * `email`

                  * `country_code`


                  Depending on the country, the following `address` properties
                  may also be required:


                  * `postal_code`

                  * `state_or_province`
            /checkouts/{checkoutId}/consignments/{consignmentId}:
              parameters:
                - null
                - null
                - null
              put:
                tags:
                  - Checkout Consignments
                summary: Update Checkout Consignment
                description: >-
                  Updates an existing consignment. The address, line item IDs,
                  and shipping option ID can be updated using this endpoint.


                  Use a separate `PUT` request to update the shipping option IDs
                  if you also want to update the address and line item IDs.  


                  To add new shipping options, complete the following steps: 

                  * Use the [Add Consignment to
                  Checkout](/docs/rest-management/checkouts/checkout-consignments#add-consignment-to-checkout)
                  endpoint to add a new [consignment] to a checkout. 

                  * Assign a shipping option to the new consignment by sending a
                  `PUT` request to update the consignment's `shipping_option_id`
                  with a returned value from
                  `data.consignments[N].available_shipping_option[N].id`
                  obtained in the [Add Consignment to
                  Checkout](/docs/rest-management/checkouts/checkout-consignments#add-consignment-to-checkout)
                  endpoint. 


                  To update an existing address and line item IDs, assign a new
                  address and line item IDs by sending a `PUT` request.


                  Please note that this API endpoint is not concurrent safe,
                  meaning multiple simultaneous requests could result in
                  unexpected and inconsistent results.



                  2. Assign a shipping option to the new consignment by sending
                  a `PUT` request to update the consignment's
                  `shipping_option_id` with a returned value from
                  `data.consignments[N].available_shipping_option[N].id`
                  obtained in Step One. 
              delete:
                tags:
                  - Checkout Consignments
                summary: Delete Checkout Consignment
                description: >-
                  Removes an existing consignment from a checkout.


                  Removing the last consignment will remove the cart from the
                  customer it is assigned to. Create a new redirect URL for the
                  customer so they can access the cart again.
            /checkouts/{checkoutId}/coupons:
              post:
                tags:
                  - Checkout Coupons
                summary: Add Coupon to Checkout
                description: |-
                  Adds a coupon code to a checkout.

                  **Required Fields**
                  * coupon_code

                  **Limits**
                  * Coupon codes have a 50-character limit. 
            /checkouts/{checkoutId}/coupons/{couponCode}:
              delete:
                tags:
                  - Checkout Coupons
                summary: Delete Checkout Coupon
                description: Deletes a coupon code from a checkout.
            /checkouts/{checkoutId}/orders:
              post:
                tags:
                  - Checkout Orders
                summary: Create an Order
                description: >-
                  Creates an order.


                  ## Usage notes

                  * Orders created will be set to incomplete order status.

                  * You can create as many orders from the same order (cart) as
                  you want.

                  * Order duplication copies the existing order, assigns a new
                  order number, and sets the new order status to `incomplete`.

                  * Once the order is paid, the cart is deleted.

                  * Cart deletion occurs if you are using BigCommerce to accept
                  payments on orders.
            /checkouts/settings:
              parameters:
                - null
              get:
                tags:
                  - Checkout Settings
                summary: Get Checkout Settings
                description: Get checkout settings
              put:
                tags:
                  - Checkout Settings
                summary: Update Checkout Settings
                description: Update checkout settings
            /checkouts/{checkoutId}/token:
              parameters:
                - null
                - null
              post:
                tags:
                  - Checkout Token
                summary: Create Checkout Token
                description: >-
                  Use the checkout token to display a confirmation page for a
                  guest shopper.

                  **Usage Notes** * The response from performing this POST
                  request is a checkout token. * The checkout token is a
                  single-use token that is not order-dependent. You cannot
                  create this token after finalizing an order. * After
                  completing the order, you can redirect the shopper to
                  /order-confirmation/{orderId}?t={checkoutToken}. * After token
                  validation, the /order-confirmation/{orderId} page displays. *
                  The `ORDER_TOKEN` should match the order or the logged-in
                  customer can access the orde
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
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
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
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
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-description-length-error
              message: Description needs to be less than 250 characters.
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/checkouts-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/checkouts-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:storefront-cookie-consent
    name: Storefront Cookie Consent
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Storefront Cookie Consent
          tags:
            - name: Consent
          paths:
            /consent:
              post:
                summary: Set Cookie Consent Preferences
                tags:
                  - Consent
                description: >
                  Sets the status of a customer's consent to allow data
                  collection by cookies and scripts according to the following
                  consent categories:


                    2. Analytics — These cookies provide statistical information on site usage so the store owner can improve the website over time.  
                    3. Functional — These cookies enable enhanced functionality, such as videos and live chat. If a shopper does not allow these, then some or all of these functions may not work properly. 
                    4. Targeting; Advertising — These cookies allow merchants to create profiles or personalize content to enhance users' shopping experience.
                    
                    
                  This endpoint only works if the cookie consent feature is
                  enabled. It is assumed the shopper has not consented to
                  anything until a value is explicitly set. The request body
                  must be populated with a complete set of allowed and denied
                  categories.


                  Once set, consent preferences will be saved as a cookie for
                  guest shoppers. Consent preferences will be persisted to a
                  shopper's account to be used for future sessions once they
                  have logged in. Consent preferences can also be managed using
                  the [Update customer
                  consent](/docs/rest-management/customers/customer-consent#update-customer-consent)
                  endpoint.   


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 
              parameters: null
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
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
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-description-length-error
              message: Description needs to be less than 250 characters.
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
    overlays:
      - type: APIs.io Search
        url: overlays/storefront-cookie-consent-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/storefront-cookie-consent-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:currencies
    name: Currencies
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Currencies
            version: ''
          tags:
            - name: Currencies (Single)
            - name: Currencies (Bulk)
          paths:
            /currencies:
              parameters:
                - null
              get:
                tags:
                  - Currencies (Bulk)
                summary: Get All Currencies
                description: Returns a list of all store *Currency*.
              post:
                tags:
                  - Currencies (Bulk)
                summary: Create a Currency
                description: >-
                  Creates *Currency*.


                  **Required Fields** 


                  * name

                  * currency_code

                  * currency_exchange_rate

                  * token_location

                  * token

                  * decimal_token

                  * thousands_token

                  * decimal_places


                  **Read-Only Fields**

                  * id

                  * date_created

                  * date_modified



                  The `is_default` property can only be set to true. The value
                  of `is_default` cannot be unset, only overridden. To change
                  the storeʼs default currency in the BigCommerce control panel,
                  please see [Managing Currencies (Help
                  Center)](https://support.bigcommerce.com/s/article/Managing-Currencies-Beta).
              delete:
                tags:
                  - Currencies (Bulk)
                summary: Delete All Currencies
                description: Deletes all non-default store currencies.
            /currencies/{id}:
              parameters:
                - null
                - null
              get:
                tags:
                  - Currencies (Single)
                summary: Get a Currency
                description: Returns a single *Currency*.
              put:
                tags:
                  - Currencies (Single)
                summary: Update a Currency
                description: >-
                  Updates a *Currency*.


                  **Read-Only Fields**


                  * id

                  * date_created

                  * date_modified

                  * currency_code



                  The `is_default` property can only be set to true. The value
                  of `is_default` cannot be unset, only overridden. 
              delete:
                tags:
                  - Currencies (Single)
                summary: Delete a Currency
                description: >-
                  Deletes a *Currency*.


                  If a currencyʼs `is_default` property is set to true, this
                  currency cannot be deleted
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/currencies-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/currencies-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:current-customer
    name: Current Customer
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Current Customer
            version: ''
          tags:
            - name: Current Customers
          paths:
            /customer/current.jwt:
              get:
                tags:
                  - Current Customers
                summary: Get Current Customer
                description: >-
                  Identify logged-in customers securely via JavaScript.


                  > #### Note

                  > The Send a Test Request feature is not currently supported
                  for this endpoin
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
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
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-200-status-code-error
              message: A GET operation should have a 200 status code for the response.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/current-customer-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/current-customer-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:custom-template-associations
    name: Custom Template Associations
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Custom Template Associations
            version: ''
          tags:
            - name: Custom Template Associations
          paths:
            /storefront/custom-template-associations:
              parameters:
                - null
              get:
                summary: Get Custom Template Associations
                tags:
                  - Custom Template Associations
                description: >-
                  Get a collection of the storeʼs custom template associations
                  across all storefronts
              put:
                summary: Upsert Custom Template Associations
                tags:
                  - Custom Template Associations
                description: >-
                  Upsert new custom template associations data across all
                  storefronts. If an existing record is found for the
                  combination of channel ID, entity ID, and type, the existing
                  record will be overwritten with the new template.
              delete:
                summary: Delete Custom Template Associations
                tags:
                  - Custom Template Associations
                description: >-
                  Delete custom template associations. At least one query
                  parameter must be use
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
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
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/custom-template-associations-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/custom-template-associations-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:customer-login-sso
    name: Customer Login (SSO)
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Customer Login (SSO)
            version: ''
          tags:
            - name: Login Token
          paths:
            /login/token/{jwt_token}:
              get:
                tags:
                  - Login Token
                summary: Login Token
                description: >-
                  The customer login access point URL.


                  [Learn more about the Customer Login
                  API](/docs/start/authentication/customer-login).


                  ## Example


                  ```

                  https://yourstore.example.com/login/token/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ7Y2xpZW50X2lkfSIsImlhdCI6MTUzNTM5MzExMywianRpIjoie3V1aWR9Iiwib3BlcmF0aW9uIjoiY3VzdG9tZXJfbG9naW4iLCJzdG9yZV9oYXNoIjoie3N0b3JlX2hhc2h9IiwiY3VzdG9tZXJfaWQiOjJ9.J-fAtbjRFGdLsT744DhoprFEDqIfVq72HbDzrbFy6Is

                  `
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-error
              message: JSON Media Type GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
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
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
    overlays:
      - type: APIs.io Search
        url: overlays/customer-login-sso-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/customer-login-sso-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:storefront-customers
    name: Storefront Customers
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Storefront Customers
          tags:
            - name: Customers
          paths:
            /customers:
              post:
                tags:
                  - Customers
                description: >-
                  Create a *Customer*.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.
                summary: Create a Custom
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
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
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
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
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
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
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-oneof-info
              message: Schema Properties OneOf
    overlays:
      - type: APIs.io Search
        url: overlays/storefront-customers-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/storefront-customers-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:customers
    name: Customers
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            version: ''
            title: Customers V3
          tags:
            - name: Customers
            - name: Consent
            - name: Validate Credentials
            - name: Metafields
            - name: Customer Metafields
            - name: Customer Batch Metafields
            - name: Addresses
            - name: Attributes
            - name: Attribute Values
            - name: Form Fields
            - name: Form Field Values
            - name: Stored Instruments
            - name: Global Settings
            - name: Channel Settings
          paths:
            /customers:
              get:
                description: >-
                  Returns a list of Customers. Optional filter parameters can be
                  passed in.


                  **Notes**


                  Attribute names are not available on the customer object.
                summary: Get All Customers
                tags:
                  - Customers
              post:
                description: >-
                  Creates Customers. Create up to 10 customers in one call.


                  **Required Fields**

                  * last_name

                  * first_name

                  * email


                  **Required Fields Customer Address**

                  * first_name

                  * city

                  * country_code

                  * last_name

                  * address1


                  **Required Fields Attributes**

                  * Attributes must be
                  [created](/docs/rest-management/customers/customer-attributes#create-a-customer-attribute)
                  **BEFORE** creating a customer.

                  * attribute_id

                  * attribute_value -- This is input as a string, regardless of
                  the
                  [Type](/docs/rest-management/customers/customer-attributes#create-a-customer-attribute).


                  **Notes**


                  A customer can be created with global access or
                  channel-specific access.

                  * **Global access:**
                    * Make sure the channel has `allow_global_logins` enabled. This is on by default only for the default storefront. Find more info at [Customer Settings > Channel](/docs/rest-management/customers/customer-settings-channel).
                    * Omit `channel_ids` field, or provide `channel_ids: null`.
                  * **Channel-specific access:**
                    * Provide a `channel_ids` array containing the channels accessible by the customer. This array cannot be empty.
                summary: Create Customers
                tags:
                  - Customers
              put:
                description: >-
                  Updates Customers. Subresource updates are not supported. Up
                  to 10 customers can be updated in one call.


                  **Required Fields**

                  * id -- ID of the *Customer* This must be included in the
                  request body


                  **Read Only Fields**

                  * id

                  * registration_ip_address

                  * date_created

                  * date_modified



                  **Notes**


                  * Attributes Values can not be updated using Update a
                  Customer. Use the [Update customer attribute
                  values](/docs/rest-management/customers/customer-attribute-values#upsert-customer-attribute-values)
                  endpoint.

                  * channel_ids -- Updating the list of channels a customer can
                  access may create some side effects in a multi-storefront
                  situation. This list determines which customer account we will
                  use to authenticate a shopper given a channel.
                summary: Update Customers
                tags:
                  - Customers
              delete:
                description: >-
                  Deletes Customers.


                  **Required Query**

                  * id:in -- ID of the customer


                  **Notes**


                  A query is required to delete customers. If not provided, a
                  204 is returned, with no changes to the data.
                summary: Delete Customers
                tags:
                  - Customers
            /customers/addresses:
              get:
                description: >-
                  Returns a list of Customer Addresses. Optional filter
                  parameters can be passed in.
                summary: Get All Customer Addresses
                tags:
                  - Addresses
              post:
                description: >-
                  Creates a Customer Address. Multiple customer addresses can be
                  created in one call.


                  **Required Fields**

                  * **customer_id**

                  * **first_name**

                  * **last_name**

                  * **city**

                  * **country_code**

                  * **address1**


                  **Notes**

                  * A unique customer address is a combination of the following
                  core address fields:
                    * **customer_id**
                    * **first_name**
                    * **last_name**
                    * **company**
                    * **phone**
                    * **address_type**
                    * **address1**
                    * **address2**
                    * **city**
                    * **country_code**
                    * **state_or_province**
                    * **postal_code**
                  * An attempt to create an address that already exists will
                  result in no change to the address or custom form field
                  values, an HTTP 200 return code, and the address will be
                  absent from the response body.

                  * The default rate limit for this endpoint is 10 concurrent
                  requests.
                summary: Create a Customer Address
                tags:
                  - Addresses
              put:
                description: >-
                  Updates a Customer Address. Multiple customer addresses can be
                  updated in one call.


                  **Required Fields**

                  * **id** -- ID of the *Customer Address*


                  **Limits**

                  * Limit of **3** concurrent requests.


                  **Notes**

                  * A unique customer address is a combination of the following
                  core address fields:
                    * **first_name**
                    * **last_name**
                    * **company**
                    * **phone**
                    * **address_type**
                    * **address1**
                    * **address2**
                    * **city**
                    * **country_code**
                    * **state_or_province**
                    * **postal_code**
                  * An attempt to update an address such that it becomes
                  identical to another address that already exists will result
                  in no change to the target address or custom form field
                  values. The response will have an HTTP 200 return code, and
                  the address will be absent from the response body.
                summary: Update a Customer Address
                tags:
                  - Addresses
              delete:
                description: |-
                  Deletes a Customer Address.

                  **Required Query**
                  * id:in -- ID of the *Customer Address*
                summary: Delete a Customer Address
                tags:
                  - Addresses
            /customers/validate-credentials:
              post:
                tags:
                  - Validate Credentials
                description: >-
                  Validate a customer credentials - This endpoint has special
                  rate limiting protections to protect against abuse.
                summary: Validate a customer credentials
            /customers/settings:
              get:
                tags:
                  - Global Settings
                description: Returns the global-level customer settings.
                summary: Get Customer Settings
              put:
                tags:
                  - Global Settings
                description: Updates the customer settings on the global level.
                summary: Update Customer Settings
            /customers/settings/channels/{channel_id}:
              get:
                tags:
                  - Channel Settings
                description: |-
                  Returns the customer settings per channel.

                  **Notes**

                   * `null` indicates that there is no override per given channel and values are inherited from the global level.
                summary: Get Customer Settings per Channel
              put:
                tags:
                  - Channel Settings
                description: >-
                  Update the customer settings per channel


                  **Required Fields**


                  * `channel_id`: Provide a `channel_id` array containing one or
                  more channel IDs. Customers will have access to these channels
                  and no others. This array cannot be empty.


                  **Notes**


                  * Setting `null` will delete override per given channel, and
                  values will be inherited from the global level. Make sure the
                  channel has `allow_global_logins` enabled.
                summary: Update Customer Settings per Channel
              parameters:
                - null
            /customers/attributes:
              get:
                description: >-
                  Returns a list of Customer Attributes. You can pass in
                  optional filter parameters.
                summary: Get All Customer Attributes
                tags:
                  - Attributes
              post:
                description: >-
                  Creates a Customer Attribute. Multiple customer attributes can
                  be created in one call.


                  **Required Fields**

                  * name

                  * type


                  **Limits**

                  * Limit of 3 concurrent requests.


                  **Notes**


                  Once the data type is set, it cannot be changed. The attribute
                  will need to be deleted then created again with the new data
                  type. This will also delete it from the customer.


                  Customer attributes are created separately from the customer.
                  After the name and type are created, then the attributes can
                  be added to the customer.


                  A store cannot have more than 50 customer attributes.
                summary: Create a Customer Attribute
                tags:
                  - Attributes
              put:
                description: >-
                  Updates a Customer Attribute. Multiple customer attributes can
                  be updated in one call.


                  **Required Fields**

                  * id -- ID of the *Customer Attribute*


                  Once the data type is set, it can not be changed. The
                  attribute will need to be deleted then created again with the
                  new data type. This will also delete it from the customer.


                  **Limits**

                  * Limit of 3 concurrent requests.
                summary: Update a Customer Attribute
                tags:
                  - Attributes
              delete:
                description: |-
                  Deletes Customer Attributes from the store.

                  **Required Query**
                  * id:in -- ID of the *Customer Attribute*
                summary: Delete Customer Attributes
                tags:
                  - Attributes
            /customers/attribute-values:
              get:
                description: >-
                  Returns a list of Customer Attribute Values. Optional filter
                  parameters can be passed in.
                summary: Get All Customer Attribute Values
                tags:
                  - Attribute Values
              put:
                description: >-
                  Upserts Customer Attribute Values. Updates the attribute
                  values on the Customer. Multiple customer attribute values can
                  be updated in one call.


                  Upsert checks for an existing record. If there is none, it
                  creates the record, if there is a matching record, it updates
                  that record.


                  **Limits**

                  * 10 per call limit.
                summary: Upsert Customer Attribute Values
                tags:
                  - Attribute Values
              delete:
                description: >-
                  Deletes Customer Attribute Values. Deletes the attribute value
                  from the customer.


                  **Required Query**

                  * id:in - ID of the *Customer Attribute Value*
                summary: Delete Customer Attribute Values
                tags:
                  - Attribute Values
            /customers/form-field-values:
              get:
                summary: Get Customer Form Field Values
                description: >-
                  Returns a list of form field values for the Customer or
                  Customer Address object.


                  To learn about adding and managing form fields, see [Adding
                  and Editing Fields in the Account Signup
                  Form](https://support.bigcommerce.com/s/article/Editing-Form-Fields).
                tags:
                  - Form Field Values
              put:
                summary: Upsert Customer Form Field Values
                description: >-
                  Updates form field values on the Customer or Customer Address
                  objects. Multiple form field values can be updated in one
                  call.


                  Upsert checks for an existing record, if there is none it
                  creates the record, if there is a matching record it updates
                  that record.


                  To learn more about editing form fields, see [Adding and
                  Editing Fields in the Account Signup
                  Form](https://support.bigcommerce.com/s/article/Editing-Form-Fields).


                  **Limits**

                  * Limit of 10 concurrent requests.
                tags:
                  - Form Field Values
            /customers/{customerId}/consent:
              get:
                description: >-
                  Gets the status of a customerʼs consent to allow data
                  collection by cookies and scripts while shopping on a
                  storefront.
                summary: Get Customer Consent
                tags:
                  - Consent
              put:
                description: >-
                  Updates the status of a customerʼs consent to allow data
                  collection by cookies and scripts while shopping on a
                  storefront.
                summary: Update Customer Consent
                tags:
                  - Consent
              parameters:
                - null
            /customers/{customerId}/stored-instruments:
              get:
                summary: Get Stored Instruments
                tags:
                  - Stored Instruments
                description: >-
                  Lists all available stored instruments for a customer. This
                  list will include all types of stored instruments namely card,
                  account and bank_account instruments
              parameters:
                - null
            /customers/{customerId}/metafields:
              get:
                summary: Get Customer Metafields
                tags:
                  - Customer Metafields
                description: >-
                  Gets customer metafields by passing the `customerId` in the
                  query parameters.
              post:
                summary: Create Customer Metafields
                tags:
                  - Customer Metafields
                description: >-
                  Creates Customer metafields by passing the `customerId` in the
                  query parameters.
            /customers/{customerId}/metafields/{metafieldId}:
              get:
                summary: Get Customer Metafields List
                description: >
                  Lists available metafields for a customer. To retrieve the
                  list, use `customerId` and `metafieldId` in the query
                  parameters.
                tags:
                  - Customer Metafields
              put:
                summary: Update a Metafield
                tags:
                  - Customer Metafields
                description: >-
                  Updates customer metafields. To update the customer
                  metafields, use 'customerId' and 'metafield' in the query
                  parameters.
              delete:
                summary: Delete Customer Metafields
                tags:
                  - Customer Metafields
                description: >
                  Deletes customer metafields. To delete customer metafields,
                  use 'customerId' and 'metafieldId' in the query parameters.
            /customers/metafields:
              get:
                summary: Get All Customer Metafields
                tags:
                  - Customer Batch Metafields
                description: Get all customer metafields.
              post:
                summary: Create Multiple Metafields
                tags:
                  - Customer Batch Metafields
                description: Create multiple metafields.
              put:
                summary: Update Multiple Metafields
                tags:
                  - Customer Batch Metafields
                description: Create multiple metafields.
              delete:
                summary: Delete All Metafields
                tags:
                  - Customer Batch Metafields
                description: Delete all customer metafield
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-no-request-body-on-get-error
              message: GET Request Body
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-no-request-body-on-delete-error
              message: DELETE Request Body
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-response-put-500-status-code-info
              message: 500 Status Code for PUT Responses
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-type-info
              message: Schema Type
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
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-oneof-info
              message: Schema Properties OneOf
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
    overlays:
      - type: APIs.io Search
        url: overlays/customers-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/customers-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:customers
    name: Customers
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            version: ''
            title: Customers V3
          tags:
            - name: Customers
            - name: Consent
            - name: Validate Credentials
            - name: Metafields
            - name: Customer Metafields
            - name: Customer Batch Metafields
            - name: Addresses
            - name: Attributes
            - name: Attribute Values
            - name: Form Fields
            - name: Form Field Values
            - name: Stored Instruments
            - name: Global Settings
            - name: Channel Settings
          paths:
            /customers:
              get:
                description: >-
                  Returns a list of Customers. Optional filter parameters can be
                  passed in.


                  **Notes**


                  Attribute names are not available on the customer object.
                summary: Get All Customers
                tags:
                  - Customers
              post:
                description: >-
                  Creates Customers. Create up to 10 customers in one call.


                  **Required Fields**

                  * last_name

                  * first_name

                  * email


                  **Required Fields Customer Address**

                  * first_name

                  * city

                  * country_code

                  * last_name

                  * address1


                  **Required Fields Attributes**

                  * Attributes must be
                  [created](/docs/rest-management/customers/customer-attributes#create-a-customer-attribute)
                  **BEFORE** creating a customer.

                  * attribute_id

                  * attribute_value -- This is input as a string, regardless of
                  the
                  [Type](/docs/rest-management/customers/customer-attributes#create-a-customer-attribute).


                  **Notes**


                  A customer can be created with global access or
                  channel-specific access.

                  * **Global access:**
                    * Make sure the channel has `allow_global_logins` enabled. This is on by default only for the default storefront. Find more info at [Customer Settings > Channel](/docs/rest-management/customers/customer-settings-channel).
                    * Omit `channel_ids` field, or provide `channel_ids: null`.
                  * **Channel-specific access:**
                    * Provide a `channel_ids` array containing the channels accessible by the customer. This array cannot be empty.
                summary: Create Customers
                tags:
                  - Customers
              put:
                description: >-
                  Updates Customers. Subresource updates are not supported. Up
                  to 10 customers can be updated in one call.


                  **Required Fields**

                  * id -- ID of the *Customer* This must be included in the
                  request body


                  **Read Only Fields**

                  * id

                  * registration_ip_address

                  * date_created

                  * date_modified



                  **Notes**


                  * Attributes Values can not be updated using Update a
                  Customer. Use the [Update customer attribute
                  values](/docs/rest-management/customers/customer-attribute-values#upsert-customer-attribute-values)
                  endpoint.

                  * channel_ids -- Updating the list of channels a customer can
                  access may create some side effects in a multi-storefront
                  situation. This list determines which customer account we will
                  use to authenticate a shopper given a channel.
                summary: Update Customers
                tags:
                  - Customers
              delete:
                description: >-
                  Deletes Customers.


                  **Required Query**

                  * id:in -- ID of the customer


                  **Notes**


                  A query is required to delete customers. If not provided, a
                  204 is returned, with no changes to the data.
                summary: Delete Customers
                tags:
                  - Customers
            /customers/addresses:
              get:
                description: >-
                  Returns a list of Customer Addresses. Optional filter
                  parameters can be passed in.
                summary: Get All Customer Addresses
                tags:
                  - Addresses
              post:
                description: >-
                  Creates a Customer Address. Multiple customer addresses can be
                  created in one call.


                  **Required Fields**

                  * **customer_id**

                  * **first_name**

                  * **last_name**

                  * **city**

                  * **country_code**

                  * **address1**


                  **Notes**

                  * A unique customer address is a combination of the following
                  core address fields:
                    * **customer_id**
                    * **first_name**
                    * **last_name**
                    * **company**
                    * **phone**
                    * **address_type**
                    * **address1**
                    * **address2**
                    * **city**
                    * **country_code**
                    * **state_or_province**
                    * **postal_code**
                  * An attempt to create an address that already exists will
                  result in no change to the address or custom form field
                  values, an HTTP 200 return code, and the address will be
                  absent from the response body.

                  * The default rate limit for this endpoint is 10 concurrent
                  requests.
                summary: Create a Customer Address
                tags:
                  - Addresses
              put:
                description: >-
                  Updates a Customer Address. Multiple customer addresses can be
                  updated in one call.


                  **Required Fields**

                  * **id** -- ID of the *Customer Address*


                  **Limits**

                  * Limit of **3** concurrent requests.


                  **Notes**

                  * A unique customer address is a combination of the following
                  core address fields:
                    * **first_name**
                    * **last_name**
                    * **company**
                    * **phone**
                    * **address_type**
                    * **address1**
                    * **address2**
                    * **city**
                    * **country_code**
                    * **state_or_province**
                    * **postal_code**
                  * An attempt to update an address such that it becomes
                  identical to another address that already exists will result
                  in no change to the target address or custom form field
                  values. The response will have an HTTP 200 return code, and
                  the address will be absent from the response body.
                summary: Update a Customer Address
                tags:
                  - Addresses
              delete:
                description: |-
                  Deletes a Customer Address.

                  **Required Query**
                  * id:in -- ID of the *Customer Address*
                summary: Delete a Customer Address
                tags:
                  - Addresses
            /customers/validate-credentials:
              post:
                tags:
                  - Validate Credentials
                description: >-
                  Validate a customer credentials - This endpoint has special
                  rate limiting protections to protect against abuse.
                summary: Validate a customer credentials
            /customers/settings:
              get:
                tags:
                  - Global Settings
                description: Returns the global-level customer settings.
                summary: Get Customer Settings
              put:
                tags:
                  - Global Settings
                description: Updates the customer settings on the global level.
                summary: Update Customer Settings
            /customers/settings/channels/{channel_id}:
              get:
                tags:
                  - Channel Settings
                description: |-
                  Returns the customer settings per channel.

                  **Notes**

                   * `null` indicates that there is no override per given channel and values are inherited from the global level.
                summary: Get Customer Settings per Channel
              put:
                tags:
                  - Channel Settings
                description: >-
                  Update the customer settings per channel


                  **Required Fields**


                  * `channel_id`: Provide a `channel_id` array containing one or
                  more channel IDs. Customers will have access to these channels
                  and no others. This array cannot be empty.


                  **Notes**


                  * Setting `null` will delete override per given channel, and
                  values will be inherited from the global level. Make sure the
                  channel has `allow_global_logins` enabled.
                summary: Update Customer Settings per Channel
              parameters:
                - null
            /customers/attributes:
              get:
                description: >-
                  Returns a list of Customer Attributes. You can pass in
                  optional filter parameters.
                summary: Get All Customer Attributes
                tags:
                  - Attributes
              post:
                description: >-
                  Creates a Customer Attribute. Multiple customer attributes can
                  be created in one call.


                  **Required Fields**

                  * name

                  * type


                  **Limits**

                  * Limit of 3 concurrent requests.


                  **Notes**


                  Once the data type is set, it cannot be changed. The attribute
                  will need to be deleted then created again with the new data
                  type. This will also delete it from the customer.


                  Customer attributes are created separately from the customer.
                  After the name and type are created, then the attributes can
                  be added to the customer.


                  A store cannot have more than 50 customer attributes.
                summary: Create a Customer Attribute
                tags:
                  - Attributes
              put:
                description: >-
                  Updates a Customer Attribute. Multiple customer attributes can
                  be updated in one call.


                  **Required Fields**

                  * id -- ID of the *Customer Attribute*


                  Once the data type is set, it can not be changed. The
                  attribute will need to be deleted then created again with the
                  new data type. This will also delete it from the customer.


                  **Limits**

                  * Limit of 3 concurrent requests.
                summary: Update a Customer Attribute
                tags:
                  - Attributes
              delete:
                description: |-
                  Deletes Customer Attributes from the store.

                  **Required Query**
                  * id:in -- ID of the *Customer Attribute*
                summary: Delete Customer Attributes
                tags:
                  - Attributes
            /customers/attribute-values:
              get:
                description: >-
                  Returns a list of Customer Attribute Values. Optional filter
                  parameters can be passed in.
                summary: Get All Customer Attribute Values
                tags:
                  - Attribute Values
              put:
                description: >-
                  Upserts Customer Attribute Values. Updates the attribute
                  values on the Customer. Multiple customer attribute values can
                  be updated in one call.


                  Upsert checks for an existing record. If there is none, it
                  creates the record, if there is a matching record, it updates
                  that record.


                  **Limits**

                  * 10 per call limit.
                summary: Upsert Customer Attribute Values
                tags:
                  - Attribute Values
              delete:
                description: >-
                  Deletes Customer Attribute Values. Deletes the attribute value
                  from the customer.


                  **Required Query**

                  * id:in - ID of the *Customer Attribute Value*
                summary: Delete Customer Attribute Values
                tags:
                  - Attribute Values
            /customers/form-field-values:
              get:
                summary: Get Customer Form Field Values
                description: >-
                  Returns a list of form field values for the Customer or
                  Customer Address object.


                  To learn about adding and managing form fields, see [Adding
                  and Editing Fields in the Account Signup
                  Form](https://support.bigcommerce.com/s/article/Editing-Form-Fields).
                tags:
                  - Form Field Values
              put:
                summary: Upsert Customer Form Field Values
                description: >-
                  Updates form field values on the Customer or Customer Address
                  objects. Multiple form field values can be updated in one
                  call.


                  Upsert checks for an existing record, if there is none it
                  creates the record, if there is a matching record it updates
                  that record.


                  To learn more about editing form fields, see [Adding and
                  Editing Fields in the Account Signup
                  Form](https://support.bigcommerce.com/s/article/Editing-Form-Fields).


                  **Limits**

                  * Limit of 10 concurrent requests.
                tags:
                  - Form Field Values
            /customers/{customerId}/consent:
              get:
                description: >-
                  Gets the status of a customerʼs consent to allow data
                  collection by cookies and scripts while shopping on a
                  storefront.
                summary: Get Customer Consent
                tags:
                  - Consent
              put:
                description: >-
                  Updates the status of a customerʼs consent to allow data
                  collection by cookies and scripts while shopping on a
                  storefront.
                summary: Update Customer Consent
                tags:
                  - Consent
              parameters:
                - null
            /customers/{customerId}/stored-instruments:
              get:
                summary: Get Stored Instruments
                tags:
                  - Stored Instruments
                description: >-
                  Lists all available stored instruments for a customer. This
                  list will include all types of stored instruments namely card,
                  account and bank_account instruments
              parameters:
                - null
            /customers/{customerId}/metafields:
              get:
                summary: Get Customer Metafields
                tags:
                  - Customer Metafields
                description: >-
                  Gets customer metafields by passing the `customerId` in the
                  query parameters.
              post:
                summary: Create Customer Metafields
                tags:
                  - Customer Metafields
                description: >-
                  Creates Customer metafields by passing the `customerId` in the
                  query parameters.
            /customers/{customerId}/metafields/{metafieldId}:
              get:
                summary: Get Customer Metafields List
                description: >
                  Lists available metafields for a customer. To retrieve the
                  list, use `customerId` and `metafieldId` in the query
                  parameters.
                tags:
                  - Customer Metafields
              put:
                summary: Update a Metafield
                tags:
                  - Customer Metafields
                description: >-
                  Updates customer metafields. To update the customer
                  metafields, use 'customerId' and 'metafield' in the query
                  parameters.
              delete:
                summary: Delete Customer Metafields
                tags:
                  - Customer Metafields
                description: >
                  Deletes customer metafields. To delete customer metafields,
                  use 'customerId' and 'metafieldId' in the query parameters.
            /customers/metafields:
              get:
                summary: Get All Customer Metafields
                tags:
                  - Customer Batch Metafields
                description: Get all customer metafields.
              post:
                summary: Create Multiple Metafields
                tags:
                  - Customer Batch Metafields
                description: Create multiple metafields.
              put:
                summary: Update Multiple Metafields
                tags:
                  - Customer Batch Metafields
                description: Create multiple metafields.
              delete:
                summary: Delete All Metafields
                tags:
                  - Customer Batch Metafields
                description: Delete all customer metafield
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-no-request-body-on-get-error
              message: GET Request Body
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-no-request-body-on-delete-error
              message: DELETE Request Body
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-response-put-500-status-code-info
              message: 500 Status Code for PUT Responses
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-type-info
              message: Schema Type
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
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-oneof-info
              message: Schema Properties OneOf
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
    overlays:
      - type: APIs.io Search
        url: overlays/customers-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/customers-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:email-templates
    name: Email Templates
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Email Templates
          tags:
            - name: Email Templates
          paths:
            /marketing/email-templates:
              parameters:
                - null
              get:
                summary: Get Email Templates
                description: >-
                  Get a list of email templates.


                  > #### Note

                  > The `/marketing/email-templates` endpoints only work after
                  opting into the new email management experience from your
                  storeʼs control panel. You can opt-in by visiting Email
                  Templates. If you have already opted in, visiting the Email
                  Templates page will return a `404` error, and you will be able
                  to access the new Transactional Emails page.
                tags:
                  - Email Templates
            /marketing/email-templates/{template-name}:
              parameters:
                - null
                - null
              get:
                summary: Get an Email Template
                description: >-
                  Get a single global email template or a channel-specific email
                  template override.


                  > #### Note

                  > The `/marketing/email-templates` endpoints only work after
                  opting into the new email management experience from your
                  storeʼs control panel. You can opt-in by visiting [Email
                  Templates](https://login.bigcommerce.com/deep-links/manage/marketing/email-templates).
                  If you have already opted in, visiting the [Email
                  Templates](https://login.bigcommerce.com/deep-links/manage/marketing/email-templates)
                  page will return a `404` error, and you will be able to access
                  the new [Transactional
                  Emails](https://login.bigcommerce.com/deep-links/manage/transactional-emails)
                  page.
                tags:
                  - Email Templates
              put:
                summary: Update a Template
                description: >-
                  Update a global template or create a channel-specific email
                  template override.
                tags:
                  - Email Templates
              delete:
                summary: Delete Email Template Override
                description: Removes a channel-specific email template override.
                tags:
                  - Email Templat
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-error
              message: Schema Type
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
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/email-templates-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/email-templates-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:storefront-form-fields-beta
    name: Storefront Form Fields (Beta)
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Storefront Form Fields (Beta)
            version: ''
          tags:
            - name: Form Fields
          paths:
            /form-fields:
              get:
                tags:
                  - Form Fields
                summary: Get Form Fields
                description: >-
                  Gets form fields.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoin
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
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
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
    overlays:
      - type: APIs.io Search
        url: overlays/storefront-form-fields-beta-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/storefront-form-fields-beta-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:geography
    name: Geography
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Geography
          paths:
            /countries:
              get:
                description: >-
                  Get a list of all countries available. A country or territory,
                  identifiable by an ISO 3166 country code.
                summary: Get All Countries
                tags:
                  - Countries
            /countries/{id}:
              get:
                description: >-
                  Returns a single *Country*.  Gets a country. A country or
                  territory, identifiable by an ISO 3166 country code.
                summary: Get a Country
                tags:
                  - Countries
              parameters:
                - null
            /countries/{country_id}/states:
              get:
                description: >-
                  Returns a list of *States* belonging to a *Country*. 

                  A state or province, identifiable by an ISO 3166 subdivision
                  code.
                summary: Get All Countryʼs States
                tags:
                  - States
              parameters:
                - null
            /countries/{country_id}/states/{id}:
              get:
                description: >-
                  Returns a *State*. 

                  A state or province, identifiable by an ISO 3166 subdivision
                  code.
                summary: Get a Countryʼs State
                tags:
                  - States
              parameters:
                - null
                - null
            /countries/count:
              get:
                summary: Get a Count of All Countries
                tags:
                  - Countries
                description: Returns a count of all countries.
            /countries/states/count:
              get:
                summary: Get a Count of All States
                tags:
                  - States
                description: Returns a count of all states.
            /countries/states:
              get:
                summary: Get All States
                tags:
                  - States
                description: Returns a list of all states.
            /countries/{country_id}/states/count:
              get:
                summary: Get a Count of Country’s States
                tags:
                  - States
                description: Returns a count of a countryʼs states.
              parameters:
                - null
          tags:
            - name: Countries
            - name: Stat
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-error
              message: Schema Type
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
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
    overlays:
      - type: APIs.io Search
        url: overlays/geography-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/geography-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:marketing
    name: Marketing
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Marketing
            version: ''
          tags:
            - name: Banners
            - name: Coupons
            - name: Gift Certificates
          paths:
            /coupons:
              parameters:
                - null
              get:
                tags:
                  - Coupons
                summary: Get All Coupons
                description: >-
                  Returns a list of *Coupons*. Default sorting is by
                  coupon/discount id, from lowest to highest. You can pass in
                  optional filter parameters. We recommended using
                  `?min_id=x&limit=y` to paginate through a large set of data
                  because it offers better performance.


                  ## Usage Notes


                  Available types for `type` and `exclude_type` filters:


                  |Type|

                  |-|

                  |`per_item_discount`|

                  |`percentage_discount`|

                  |`per_total_discount`|

                  |`shipping_discount`|

                  |`free_shipping`|

                  |`promotion`|


                  Coupons with `type=promotion` will not populate usable data
                  for the following fields but instead be set to the following
                  default values:


                  ```json

                  ...

                  amount : 0.0000

                  min_purchase: 0.0000

                  applies_to

                  restricted_to: []

                  shipping_methods : null

                  ...

                  ```
              post:
                tags:
                  - Coupons
                summary: Create a New Coupon
                description: >-
                  Creates a *Coupon*.


                  **Required Fields**

                  *   `name`

                  *   `code`

                  *   `type`

                  *   `amount`

                  *   `applies_to`


                  **Read Only Fields**

                  *   `id`

                  *   `num_uses`


                  **Notes**


                  The coupon type can be one of the following:


                  *   `per_item_discount`

                  *   `per_total_discount`

                  *   `shipping_discount`

                  *   `free_shipping`

                  *   `percentage_discount`


                  Legacy coupon codes only work with the store's default
                  currency. Applying a coupon with any other currency other than
                  the store's default will result in the error: "Coupons only
                  apply to default currency."
              delete:
                tags:
                  - Coupons
                summary: Delete All Coupons
                description: >
                  ## Usage Notes

                  * Deleting a coupon via this endpoint will delete the coupon
                  but not the promotion it is attached to
            /coupons/count:
              parameters:
                - null
              get:
                tags:
                  - Coupons
                summary: Get a Count of Coupons
                description: Returns a count of all *Coupons* in the store.
            /coupons/{id}:
              parameters:
                - null
                - null
              put:
                tags:
                  - Coupons
                summary: Update a Coupon
                description: >-
                  Updates a *Coupon*.



                  **Read Only Fields**


                  * `id`

                  * `num_uses`

                  * `date_created`


                  **Notes**


                  If the `applies_to` value is cleared, you can restore it to
                  the coupon by reapplying the `applies_to` value in a new `PUT`
                  request.
              delete:
                tags:
                  - Coupons
                summary: Delete a Coupon
                description: Deletes a *Coupon*.
            /banners:
              parameters:
                - null
              get:
                tags:
                  - Banners
                summary: Get All Banners
                description: >-
                  Returns a list of *Banners*. Default sorting is by banner id,
                  from lowest to highest.
              post:
                tags:
                  - Banners
                summary: Create a Banner
                description: |-
                  Creates a *Banner*.

                  **Required Fields**
                  * name
                  * content
                  * page
                  * location
                  * date_type

                  **Read Only Fields**
                  * date_created
                  * id
              delete:
                tags:
                  - Banners
                summary: Delete All Banners
                description: By default, it deletes all *Banners*.
            /banners/{id}:
              parameters:
                - null
                - null
              get:
                tags:
                  - Banners
                summary: Get a Banner
                description: Returns a single *Banner*
              put:
                tags:
                  - Banners
                summary: Update a Banner
                description: |-
                  Updates a *Banner*.

                  **Read Only Fields**
                  * date_created
                  * id
              delete:
                tags:
                  - Banners
                summary: Delete a Banner
                description: Deletes a *Banner*.
            /banners/count:
              parameters:
                - null
              get:
                tags:
                  - Banners
                summary: Get a Count of Store Banners
                description: Returns a count of *Banners*.
            /gift_certificates/{id}:
              parameters:
                - null
                - null
              get:
                tags:
                  - Gift Certificates
                summary: Get a Gift Certificate
                description: Returns a single *Gift Certificate*.
              put:
                tags:
                  - Gift Certificates
                summary: Update a Gift Certificate
                description: |-
                  Updates a *Gift Certificate*.

                  **Read Only Fields**
                  * id
                  * order_id
              delete:
                tags:
                  - Gift Certificates
                summary: Delete a Gift Certificate
                description: Deletes a *Gift Certificate*.
            /gift_certificates:
              parameters:
                - null
              get:
                tags:
                  - Gift Certificates
                summary: Get All Gift Certificates
                description: >-
                  Returns a list of *Gift Certificates*. Optional filter
                  parameters can be passed in.


                  Default sorting is by gift-certificate id, from lowest to
                  highest.


                  The maximum limit is 250. If a limit isn’t provided, up to 50
                  gift_certificates are returned by default.
              post:
                tags:
                  - Gift Certificates
                summary: Create a Gift Certificate
                description: >-
                  Creates a *Gift Certificate*.



                  **Required Fields**

                  * to_name

                  * to_email

                  * from_name

                  * from_email

                  * amount


                  **Read Only Fields**

                  * id

                  * order_id


                  **Notes**


                  When a gift certificate is created through the API, no email
                  notification is triggered to the specified recipient.
              delete:
                tags:
                  - Gift Certificates
                summary: Delete All Gift Certificates
                description: By default, it deletes all *Gift Certificates
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-parameters-description-error
              message: Parameter Description
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
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/marketing-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/marketing-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:payment-methods-deprecated
    name: Payment Methods (Deprecated)
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Payment Methods (Deprecated)
            license:
              name: ''
            version: ''
          tags:
            - name: Methods (Deprecated)
          paths:
            /payments/methods:
              parameters:
                - null
              get:
                tags:
                  - Methods (Deprecated)
                summary: Get All Payment Methods
                description: >
                  Gets the list of enabled payment methods. Default sorting is
                  by payment method, alphabetically from A to Z.


                  > #### Note

                  > Avoid using this API operation if possible. It is not
                  supported; therefore, all enabled providers may not appea
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-license-info
              message: License Object
            - code: openapi-info-license-url-error
              message: Info License URL
            - code: openapi-info-license-name-error
              message: Info License Name
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/payment-methods-deprecated-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/payment-methods-deprecated-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:storefront-orders
    name: Storefront Orders
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Storefront Orders
            version: ''
          tags:
            - name: Order
          paths:
            /orders/{orderId}:
              get:
                tags:
                  - Order
                summary: Get Order
                description: >-
                  Returns *Order* data. This will return order data immediately
                  after an order is placed on the storefront.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoin
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/storefront-orders-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/storefront-orders-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:orders
    name: Orders
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Orders V3
            version: ''
            license:
              name: ''
          tags:
            - name: Metafields
            - name: Payment Actions
            - name: Transactions
            - name: Order Settings
            - name: Batch metafields
          paths:
            /orders/{order_id}/payment_actions/capture:
              post:
                summary: Capture order payment
                description: >-
                  Capture the payment for an order. When there are no payment
                  method validation issues, the capture process is successful,
                  the `payment_status` updates to `capture pending`, and the
                  payment request is scheduled. The payment request itself
                  occurs asynchronously.

                  Requires at least one of the following scopes:

                  * `store_v2_orders`

                  * `store_v2_transactions`
                tags:
                  - Payment Actions
              parameters:
                - null
                - null
            /orders/{order_id}/payment_actions/void:
              post:
                summary: Void
                description: >-
                  Void the payment for an order. When there are no payment
                  method validation issues, the void process is successful, the
                  `payment_status` updates to `void pending`, and the void
                  payment request is scheduled. The payment request itself
                  occurs asynchronously.


                  Requires at least one of the following scopes:

                  * `store_v2_orders`

                  * `store_v2_transactions`
                tags:
                  - Payment Actions
              parameters:
                - null
                - null
            /orders/{order_id}/transactions:
              parameters:
                - null
                - null
              get:
                tags:
                  - Transactions
                description: >-
                  Returns an **orderʼs** transactions.


                  **Usage Notes**

                  * Depending on the payment method, different information will
                  be available (not all payment gateways return full card or
                  fraud detail).



                  Requires at least one of the following scopes:

                  * `store_v2_transactions_read_only`

                  * `store_v2_transactions`
                summary: Get Transactions
            /orders/{order_id}/payment_actions/refund_quotes:
              post:
                summary: Create a Refund Quote
                description: >-
                  Calculate the tax amount, total refund amount and get
                  available payment options for an order refund by providing
                  items and costs or quantities to refund.


                  Requires at least one of the following scopes:

                  * `store_v2_orders`

                  * `store_v2_transactions`


                  **Note:**

                  Order refunds are processed consecutively. Processing
                  synchronous refunds on an order are not yet supported.
                tags:
                  - Payment Actions
              parameters:
                - null
                - null
            /orders/{order_id}/payment_actions/refunds:
              post:
                summary: Create a Refund
                description: >-
                  Creates a refund. When there are no payment method validation
                  issues, the refund process is successful and the refund
                  payment request is scheduled. The payment request itself
                  occurs asynchronously.


                  Requires at least one of the following scopes:

                  * `store_v2_orders`

                  * `store_v2_transactions`


                  **Note:**

                  Order refunds are processed consecutively. Processing
                  synchronous refunds on an order are not yet supported.
                tags:
                  - Payment Actions
              get:
                summary: Get Refunds for Order
                description: >-
                  Returns a list of refunds ordered by refund ID in ascending
                  order for the given order.


                  Requires at least one of the following scopes:

                  * `store_v2_transactions_read_only`

                  * `store_v2_transactions`

                  * `store_v2_orders_read_only`

                  * `store_v2_orders`
                tags:
                  - Payment Actions
              parameters:
                - null
                - null
            /orders/payment_actions/refunds/{refund_id}:
              parameters:
                - null
                - null
              get:
                summary: Get a Refund
                description: Returns a refund by refund ID.
                tags:
                  - Payment Actions
            /orders/payment_actions/refunds:
              parameters:
                - null
              get:
                summary: Get All Refunds
                description: >-
                  Returns a list of refunds ordered by refund ID in ascending
                  order.


                  Requires at least one of the following scopes:

                  * `store_v2_transactions_read_only`

                  * `store_v2_transactions`

                  * `store_v2_orders_read_only`

                  * `store_v2_orders`
                tags:
                  - Payment Actions
            /orders/payment_actions/refund_quotes:
              post:
                summary: Create Refund Quotes - BATCH
                description: >-
                  Calculate the tax amount, total refund amount and get
                  available payment options for an order refund by providing
                  items and costs or quantities to refund.


                  This endpoint will accept a batch of one or more.


                  Requires at least one of the following scopes:

                  * `store_v2_orders`

                  * `store_v2_transactions`
                tags:
                  - Payment Actions
            /orders/{order_id}/metafields:
              parameters:
                - null
                - null
              get:
                summary: Get Order Metafields
                tags:
                  - Metafields
                description: >
                  Gets a `Metafield` object list, by `order_id`.


                  The maximum number of metafields allowed on each order,
                  product, category, variant, or brand is 250 per client ID.
              post:
                summary: Create Metafields
                tags:
                  - Metafields
                description: >-
                  Creates an order `Metafield`.


                  The maximum number of metafields allowed on each order,
                  product, category, variant, or brand is 250 per client ID.
            /orders/{order_id}/metafields/{metafield_id}:
              parameters:
                - null
                - null
                - null
              get:
                summary: Get a Metafield
                tags:
                  - Metafields
                description: |
                  Gets a `Metafield`, by `order_id`.
              put:
                summary: Update a Metafield
                tags:
                  - Metafields
                description: >-
                  Updates a `Metafield` object.


                  The maxiumum number of metafields allowed on each order,
                  product, category, variant, or brand is 250 per client ID.
              delete:
                summary: Delete a Metafield
                tags:
                  - Metafields
                description: |
                  Deletes a `Metafield`.
            /orders/settings:
              get:
                summary: Get Global Order Settings
                description: Returns global order settings.
                tags:
                  - Order Settings
              put:
                summary: Update Global Order Settings
                description: Updates global order settings.
                tags:
                  - Order Settings
              parameters:
                - null
            /orders/settings/channels/{channel_id}:
              get:
                summary: Get Channel Order Settings
                description: Returns order settings for a specific channel.
                tags:
                  - Order Settings
              put:
                summary: Update Channel Order Settings
                description: |-
                  Updates order settings for a specific channel.

                   **Note:** You must override both notifications `email_addresses` or neither, i.e. either both notification `email_addresses` are an array of valid email addresses, or both `email_addresses` must be null. You may not have one set to an array of addresses and the other set to `null`.
                tags:
                  - Order Settings
              parameters:
                - null
                - null
            /orders/metafields:
              get:
                summary: Get All Order Metafields
                tags:
                  - Batch metafields
                description: Get all order metafields.
              post:
                summary: Create multiple Metafields
                tags:
                  - Batch metafields
                description: Create multiple metafields.
              put:
                summary: Update multiple Metafields
                tags:
                  - Batch metafields
                description: Create multiple metafields.
              delete:
                summary: Delete All Metafields
                tags:
                  - Batch metafields
                description: Delete all order metafield
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-license-info
              message: License Object
            - code: openapi-info-license-url-error
              message: Info License URL
            - code: openapi-info-license-name-error
              message: Info License Name
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
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
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
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
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-response-put-500-status-code-info
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-error
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-description-length-error
              message: Description needs to be less than 250 characters.
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/orders-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/orders-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:orders
    name: Orders
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Orders V3
            version: ''
            license:
              name: ''
          tags:
            - name: Metafields
            - name: Payment Actions
            - name: Transactions
            - name: Order Settings
            - name: Batch metafields
          paths:
            /orders/{order_id}/payment_actions/capture:
              post:
                summary: Capture order payment
                description: >-
                  Capture the payment for an order. When there are no payment
                  method validation issues, the capture process is successful,
                  the `payment_status` updates to `capture pending`, and the
                  payment request is scheduled. The payment request itself
                  occurs asynchronously.

                  Requires at least one of the following scopes:

                  * `store_v2_orders`

                  * `store_v2_transactions`
                tags:
                  - Payment Actions
              parameters:
                - null
                - null
            /orders/{order_id}/payment_actions/void:
              post:
                summary: Void
                description: >-
                  Void the payment for an order. When there are no payment
                  method validation issues, the void process is successful, the
                  `payment_status` updates to `void pending`, and the void
                  payment request is scheduled. The payment request itself
                  occurs asynchronously.


                  Requires at least one of the following scopes:

                  * `store_v2_orders`

                  * `store_v2_transactions`
                tags:
                  - Payment Actions
              parameters:
                - null
                - null
            /orders/{order_id}/transactions:
              parameters:
                - null
                - null
              get:
                tags:
                  - Transactions
                description: >-
                  Returns an **orderʼs** transactions.


                  **Usage Notes**

                  * Depending on the payment method, different information will
                  be available (not all payment gateways return full card or
                  fraud detail).



                  Requires at least one of the following scopes:

                  * `store_v2_transactions_read_only`

                  * `store_v2_transactions`
                summary: Get Transactions
            /orders/{order_id}/payment_actions/refund_quotes:
              post:
                summary: Create a Refund Quote
                description: >-
                  Calculate the tax amount, total refund amount and get
                  available payment options for an order refund by providing
                  items and costs or quantities to refund.


                  Requires at least one of the following scopes:

                  * `store_v2_orders`

                  * `store_v2_transactions`


                  **Note:**

                  Order refunds are processed consecutively. Processing
                  synchronous refunds on an order are not yet supported.
                tags:
                  - Payment Actions
              parameters:
                - null
                - null
            /orders/{order_id}/payment_actions/refunds:
              post:
                summary: Create a Refund
                description: >-
                  Creates a refund. When there are no payment method validation
                  issues, the refund process is successful and the refund
                  payment request is scheduled. The payment request itself
                  occurs asynchronously.


                  Requires at least one of the following scopes:

                  * `store_v2_orders`

                  * `store_v2_transactions`


                  **Note:**

                  Order refunds are processed consecutively. Processing
                  synchronous refunds on an order are not yet supported.
                tags:
                  - Payment Actions
              get:
                summary: Get Refunds for Order
                description: >-
                  Returns a list of refunds ordered by refund ID in ascending
                  order for the given order.


                  Requires at least one of the following scopes:

                  * `store_v2_transactions_read_only`

                  * `store_v2_transactions`

                  * `store_v2_orders_read_only`

                  * `store_v2_orders`
                tags:
                  - Payment Actions
              parameters:
                - null
                - null
            /orders/payment_actions/refunds/{refund_id}:
              parameters:
                - null
                - null
              get:
                summary: Get a Refund
                description: Returns a refund by refund ID.
                tags:
                  - Payment Actions
            /orders/payment_actions/refunds:
              parameters:
                - null
              get:
                summary: Get All Refunds
                description: >-
                  Returns a list of refunds ordered by refund ID in ascending
                  order.


                  Requires at least one of the following scopes:

                  * `store_v2_transactions_read_only`

                  * `store_v2_transactions`

                  * `store_v2_orders_read_only`

                  * `store_v2_orders`
                tags:
                  - Payment Actions
            /orders/payment_actions/refund_quotes:
              post:
                summary: Create Refund Quotes - BATCH
                description: >-
                  Calculate the tax amount, total refund amount and get
                  available payment options for an order refund by providing
                  items and costs or quantities to refund.


                  This endpoint will accept a batch of one or more.


                  Requires at least one of the following scopes:

                  * `store_v2_orders`

                  * `store_v2_transactions`
                tags:
                  - Payment Actions
            /orders/{order_id}/metafields:
              parameters:
                - null
                - null
              get:
                summary: Get Order Metafields
                tags:
                  - Metafields
                description: >
                  Gets a `Metafield` object list, by `order_id`.


                  The maximum number of metafields allowed on each order,
                  product, category, variant, or brand is 250 per client ID.
              post:
                summary: Create Metafields
                tags:
                  - Metafields
                description: >-
                  Creates an order `Metafield`.


                  The maximum number of metafields allowed on each order,
                  product, category, variant, or brand is 250 per client ID.
            /orders/{order_id}/metafields/{metafield_id}:
              parameters:
                - null
                - null
                - null
              get:
                summary: Get a Metafield
                tags:
                  - Metafields
                description: |
                  Gets a `Metafield`, by `order_id`.
              put:
                summary: Update a Metafield
                tags:
                  - Metafields
                description: >-
                  Updates a `Metafield` object.


                  The maxiumum number of metafields allowed on each order,
                  product, category, variant, or brand is 250 per client ID.
              delete:
                summary: Delete a Metafield
                tags:
                  - Metafields
                description: |
                  Deletes a `Metafield`.
            /orders/settings:
              get:
                summary: Get Global Order Settings
                description: Returns global order settings.
                tags:
                  - Order Settings
              put:
                summary: Update Global Order Settings
                description: Updates global order settings.
                tags:
                  - Order Settings
              parameters:
                - null
            /orders/settings/channels/{channel_id}:
              get:
                summary: Get Channel Order Settings
                description: Returns order settings for a specific channel.
                tags:
                  - Order Settings
              put:
                summary: Update Channel Order Settings
                description: |-
                  Updates order settings for a specific channel.

                   **Note:** You must override both notifications `email_addresses` or neither, i.e. either both notification `email_addresses` are an array of valid email addresses, or both `email_addresses` must be null. You may not have one set to an array of addresses and the other set to `null`.
                tags:
                  - Order Settings
              parameters:
                - null
                - null
            /orders/metafields:
              get:
                summary: Get All Order Metafields
                tags:
                  - Batch metafields
                description: Get all order metafields.
              post:
                summary: Create multiple Metafields
                tags:
                  - Batch metafields
                description: Create multiple metafields.
              put:
                summary: Update multiple Metafields
                tags:
                  - Batch metafields
                description: Create multiple metafields.
              delete:
                summary: Delete All Metafields
                tags:
                  - Batch metafields
                description: Delete all order metafield
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-license-info
              message: License Object
            - code: openapi-info-license-url-error
              message: Info License URL
            - code: openapi-info-license-name-error
              message: Info License Name
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
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
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
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
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-response-put-500-status-code-info
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-error
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-description-length-error
              message: Description needs to be less than 250 characters.
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/orders-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/orders-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:pages
    name: Pages
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Pages V3
            version: ''
          tags:
            - name: Pages (Bulk)
            - name: Pages (Single)
          paths:
            /content/pages:
              get:
                tags:
                  - Pages (Bulk)
                description: >-
                  Returns one or more content pages. This endpoint supports bulk
                  operations.
                summary: Get Pages
              post:
                tags:
                  - Pages (Bulk)
                description: >-
                  Creates one or more content pages. This endpoint supports bulk
                  operations.
                summary: Create Pages
              put:
                tags:
                  - Pages (Bulk)
                description: >-
                  Updates one or more content pages. This endpoint supports bulk
                  operations.
                summary: Update Pages
              delete:
                tags:
                  - Pages (Bulk)
                description: >-
                  Deletes one or more content pages. This endpoint supports bulk
                  operations.


                  > #### Warning

                  > **Pay attention to query parameters**

                  > If you attempt to delete multiple pages by passing more than
                  one page ID to `id:in` and one or more of them does not exist,
                  you will receive a 404 response. However, the pages
                  corresponding to the page IDs that do exist will still be
                  deleted.
                summary: Delete Pages
              parameters:
                - null
            /content/pages/{pageId}:
              get:
                tags:
                  - Pages (Single)
                description: >-
                  Returns one content page.


                  > #### Warning

                  > **Pay attention to query parameters**

                  > This endpoint recognizes the same query parameters as [Get
                  Multiple Pages](/docs/rest-content/pages#get-pages). If the
                  requested page does not meet the query parameters you specify,
                  you will receive a 404 response even if the requested `pageId`
                  does exist.
                summary: Get a Page
              put:
                tags:
                  - Pages (Single)
                description: Updates one content page.
                summary: Update a Page
              delete:
                tags:
                  - Pages (Single)
                description: |-
                  Deletes one content page.

                  > #### Warning
                  > **Query parameters not recognized**
                  > This endpoint does not recognize query parameters.
                summary: Delete a Page
              parameters:
                - null
                - nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-nullable-info
              message: Request Body Schema Properties Nullable
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
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
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
    overlays:
      - type: APIs.io Search
        url: overlays/pages-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/pages-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:price-lists
    name: Price Lists
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Price Lists
            version: ''
          tags:
            - name: Price Lists
            - name: Price Lists Assignments
            - name: Price Lists Records
          paths:
            /pricelists:
              parameters:
                - null
              get:
                tags:
                  - Price Lists
                summary: Get All Price Lists
                description: >-
                  Returns a list of *Price Lists*. Optional parameters can be
                  passed in.
              post:
                tags:
                  - Price Lists
                summary: Create a Price List
                description: |-
                  Creates a *Price List*.

                  **Required Fields**
                  * name
              delete:
                tags:
                  - Price Lists
                summary: Delete All Price Lists
                description: >-
                  Deletes a *Price List*. All associated price records are also
                  removed. Optional parameters can be passed in.
            /pricelists/{price_list_id}:
              parameters:
                - null
              get:
                tags:
                  - Price Lists
                summary: Get a Price List
                description: ' Returns a single *Price List*.'
              put:
                tags:
                  - Price Lists
                summary: Update a Price List
                description: Updates a *Price List*.
              delete:
                tags:
                  - Price Lists
                summary: Delete a Price List
                description: >-
                  Deletes a *Price List*. All associated price records are also
                  removed.

                  **Limits**

                  * Limit of 1 concurrent request.
            /pricelists/records:
              parameters:
                - null
              put:
                tags:
                  - Price Lists Records
                summary: Create Batch of Price Lists Records
                description: >-
                  Creates a batch of `Price Lists Records`; may include price
                  list records from more than one price list.  Concurrency limit
                  of 1.
            /pricelists/{price_list_id}/records:
              parameters:
                - null
              get:
                tags:
                  - Price Lists Records
                summary: Get All Price List Records
                description: >-
                  Returns a list of *Price List Records* associated with a
                  *Price List*.


                  **Notes**

                  * Supports up to 10 simultaneous GET requests. Running more
                  than the allowed number of requests concurrently on the same
                  store will result in a `429` status error and your additional
                  requests will fail.

                  * Store Pricelist Records data to reduce the number of calls
                  and maximize performance.
              put:
                tags:
                  - Price Lists Records
                summary: Upsert Price List Records
                description: >-
                  Creates or updates *Price List Records*. 


                  **Required Fields**

                  * currency


                  **Notes**

                  * Batch requests support up to 1,000 items per request.

                  * Up to 2 concurrent batch upsert requests are supported with
                  this API. Running more than the allowed concurrent requests in
                  parallel on the **same store** will cause a `429` error, and
                  your additional requests will fail. You are encouraged to run
                  requests sequentially with as many records per request as
                  possible to maximize performance.

                  * When updating a product with variants, or multiple SKUs,
                  don't include records for the parent product SKU.
              delete:
                tags:
                  - Price Lists Records
                summary: Delete a Price List Record
                description: >-
                  Deletes a *Price List Record*. Deleting the records does not
                  delete the Price List. Optional parameters can be passed in.
            /pricelists/{price_list_id}/records/{variant_id}:
              parameters:
                - null
              get:
                tags:
                  - Price Lists Records
                summary: Get Price Records by Variant
                description: >
                  Returns *Price List Records* using the variant ID. Will also
                  contain currency records.


                  **Notes**

                  * Supports up to 40 simultaneous GET requests. Running more
                  than the allowed number of requests concurrently on the same
                  store will result in a `429` status error, and your additional
                  requests will fail.

                  * Store Pricelist Records data to reduce the number of calls
                  and maximize performance.
            /pricelists/{price_list_id}/records/{variant_id}/{currency_code}:
              parameters:
                - null
              get:
                tags:
                  - Price Lists Records
                summary: Get a Price Record by Currency Code
                description: >-
                  Returns a *Price List Record* using the currency code. You can
                  use optional parameters.

                  **Notes**

                  * Supports up to 50 simultaneous GET requests. Running more
                  than the allowed number of requests concurrently on the same
                  store will result in a `429` status error, and your additional
                  requests will fail.
              put:
                tags:
                  - Price Lists Records
                summary: Set Price List Record by Currency Code
                description: >-
                  Creates or updates a *Price List Record* using the currency
                  code.

                  **Notes**

                  * Supports up to 40 simultaneous PUT requests. Running more
                  than the allowed number of requests concurrently on the same
                  store will result in a `429` status error, and your additional
                  requests will fail.
              delete:
                tags:
                  - Price Lists Records
                summary: Delete a Price Record by Currency Code
                description: >-
                  Deletes a *Price List Record* using the currency code.

                  **Note:**

                  * Supports up to 25 simultaneous DELETE requests. Running more
                  than the allowed number of requests concurrently on the same
                  store will result in a `429` status error, and your additional
                  requests will fail.
            /pricelists/assignments:
              parameters:
                - null
              get:
                tags:
                  - Price Lists Assignments
                summary: Get Price List Assignments
                description: >-
                  Fetches an array of `Price List Assignments` matching a
                  particular Customer Group and Price List and Channel.
              post:
                tags:
                  - Price Lists Assignments
                description: |-
                  Creates a batch of `Price List Assignments`. 
                  **Note:** The batch limit for `Price List Assignments` is 25.
                summary: Create Price List Assignments
              delete:
                tags:
                  - Price Lists Assignments
                summary: Delete Price List Assignments
                description: >-
                  Deletes one or more `Price List Assignments` objects from
                  BigCommerce using a query parameter. You must use at least one
                  query parameter. 
            /pricelists/{price_list_id}/assignments:
              parameters:
                - null
              put:
                tags:
                  - Price Lists Assignments
                description: >-
                  Upsert a single `Price List Assignment` for a `Price List`.

                  **Note:**

                  * Supports up to 25 simultaneous PUT requests. Running more
                  than the allowed number of requests concurrently on the same
                  store will result in a `429` status error and your additional
                  requests will fail.        
                summary: Upsert Price List Assignme
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
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
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/price-lists-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/price-lists-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:pricing
    name: Pricing
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Pricing
            version: ''
          tags:
            - name: Products
          paths:
            /pricing/products:
              post:
                tags:
                  - Products
                summary: Get Prices (Batch)
                description: >-
                  Calculate batch pricing for products for a specific channel,
                  currency, and customer group.


                  **Limits**

                  * Limit of 50 concurrent request
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
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
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/pricing-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/pricing-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:payment-processing
    name: Payment Processing
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            version: ''
            title: Payment Processing
          tags:
            - name: Processing
          paths:
            /payments:
              post:
                summary: Process Payments
                tags:
                  - Processing
                description: >-
                  Process payments for an order. See [Payment
                  Processing](/docs/store-operations/payments) for more
                  informatio
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
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
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
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
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/payment-processing-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/payment-processing-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:catalog-product-modifiers
    name: Catalog - Product Modifiers
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Catalog - Product Modifiers
            version: ''
          tags:
            - name: Product Modifiers
            - name: Values
            - name: Images
          paths:
            /catalog/products/{product_id}/modifiers:
              get:
                tags:
                  - Product Modifiers
                summary: Get All Product Modifiers
                description: >-
                  Returns a list of all *Product Modifiers*. Optional parameters
                  can be passed in.
              post:
                tags:
                  - Product Modifiers
                summary: Create a Product Modifier
                description: >-
                  Creates a *Product Modifier*.


                  **Required Fields**

                  * `required`

                  * `display_name`

                  * `type`


                  **Read-Only Fields**

                  * `id`


                  **Notes**

                  It takes two separate requests to create a new checkbox
                  modifier with option values. Perform a request to create a
                  modifier, then perform a second request to update option
                  values.
              parameters:
                - null
                - null
            /catalog/products/{product_id}/modifiers/{modifier_id}:
              get:
                tags:
                  - Product Modifiers
                summary: Get a Product Modifier
                description: >-
                  Returns a single *Product Modifier*. Optional parameters can
                  be passed in.
              put:
                tags:
                  - Product Modifiers
                summary: Update a Product Modifier
                description: Updates a *Product Modifier*.
              delete:
                tags:
                  - Product Modifiers
                summary: Delete a Product Modifier
                description: Deletes a *Product Modifier*.
              parameters:
                - null
                - null
                - null
            /catalog/products/{product_id}/modifiers/{modifier_id}/values:
              get:
                tags:
                  - Values
                summary: Get All Product Modifier Values
                description: >-
                  Returns a list of all product *Modifier Values*. Optional
                  parameters can be passed in.
              post:
                tags:
                  - Values
                summary: Create Product Modifier Value
                description: |-
                  Creates a *Modifier Value*.

                  **Required Fields**
                  * label
                  * sort_order

                  **Read-Only Fields**
                  * id
              parameters:
                - null
                - null
                - null
            /catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}:
              get:
                tags:
                  - Values
                summary: Get a Product Modifier Value
                description: >-
                  Returns a single *Modifier Value*. Optional parameters can be
                  passed in.
              put:
                tags:
                  - Values
                summary: Update a Product Modifier Value
                description: |-
                  Updates a *Modifier Value*.

                  **Required Fields**
                  * none

                  **Read-Only Fields**
                  * id
              delete:
                tags:
                  - Values
                summary: Delete Product Modifier Value
                description: Deletes a *Modifier Value*.
              parameters:
                - null
                - null
                - null
                - null
            /catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image:
              post:
                tags:
                  - Images
                summary: Create Product Modifier Image
                description: >-
                  Creates a *Modifier Image*.


                  The image will show on the storefront when the value is
                  selected.

                   **Required Fields**
                  - image_file: Form posts are the only accepted upload option.
              parameters:
                - null
                - null
                - null
                - nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
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
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
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
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/catalog-product-modifiers-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/catalog-product-modifiers-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:catalog-product-variant-options
    name: Catalog - Product Variant Options
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Catalog - Product Variant Options
            version: ''
          tags:
            - name: Product Variant Options
            - name: Values
          paths:
            /catalog/products/{product_id}/options:
              get:
                tags:
                  - Product Variant Options
                summary: Get All Product Variant Options
                description: >-
                  Returns a list of product *Variant Options*. Optional
                  parameters can be passed in. 
              post:
                tags:
                  - Product Variant Options
                summary: Create a Product Variant Option
                description: >-
                  Creates a *Variant Option*.


                  **Required Fields**

                  * display_name

                  * type

                  * option_values


                  **Read-Only Fields**

                  * id


                  **Limits**

                  * 255 characters option name length.


                  **Notes**


                  * Only one variant option at a time can be created; individual
                  variant options will contain an array of multiple values.

                  * There are several examples listed below that create options,
                  but the SKUs are not updated and they are not a variant on the
                  product. Variant SKUs must be created with a separate request.

                  * Variant options will show on the storefront as an option
                  that can be selected by the customer. A request like this
                  could be used to add new choices to a variant that has already
                  been created.

                  * If more than one variant needs to be created, use the
                  [Create a
                  Product](/docs/rest-catalog/products#create-a-product)
                  endpoint.
              parameters:
                - null
                - null
            /catalog/products/{product_id}/options/{option_id}:
              get:
                tags:
                  - Product Variant Options
                summary: Get a Product Variant Option
                description: >-
                  Returns a single *Variant Option*. Optional parameters can be
                  passed in.
              put:
                tags:
                  - Product Variant Options
                summary: Update a Product Variant Option
                description: |-
                  Updates a *Variant Option*.

                  **Read-Only Fields**
                  * id
              delete:
                tags:
                  - Product Variant Options
                summary: Delete a Product Variant Option
                description: Deletes a *Variant Option*.
              parameters:
                - null
                - null
                - null
            /catalog/products/{product_id}/options/{option_id}/values:
              get:
                tags:
                  - Values
                summary: Get All Product Variant Option Values
                description: >-
                  Returns a list of all *Variant Option Values*. Optional
                  parameters can be passed in.
              post:
                tags:
                  - Values
                summary: Create a Product Variant Option Value
                description: |-
                  Creates a *Variant Option Value*.

                  **Required Fields**
                  * label
                  * sort_order

                  **Read-Only Fields**
                  * id

                  **Limits**
                  * 250 option values per option limit.
              parameters:
                - null
                - null
                - null
            /catalog/products/{product_id}/options/{option_id}/values/{value_id}:
              get:
                tags:
                  - Values
                summary: Get a Product Variant Option Value
                description: >-
                  Returns a single *Variant Option Value*. Optional parameters
                  can be passed in.
              put:
                tags:
                  - Values
                summary: Update a Product Variant Option Value
                description: |-
                  Updates a *Variant Option Value*.

                  **Read-Only Fields**
                  * id
              delete:
                tags:
                  - Values
                summary: Delete a Product Variant Option Value
                description: Deletes a *Variant Option Value*.
              parameters:
                - null
                - null
                - null
                - nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
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
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
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
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/catalog-product-variant-options-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/catalog-product-variant-options-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:catalog-product-variants
    name: Catalog - Product Variants
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Catalog - Product Variants
            version: ''
          tags:
            - name: Batch metafields
            - name: Product Variants
            - name: Variants (Batch)
            - name: Metafields
            - name: Images
          paths:
            /catalog/products/{product_id}/variants:
              get:
                tags:
                  - Product Variants
                summary: Get All Product Variants
                description: >-
                  Returns a list of product *Variants*. Optional parameters can
                  be passed in.
              post:
                tags:
                  - Product Variants
                summary: Create a Product Variant
                description: >-
                  Creates a *Product Variant*.


                  **Required Fields**

                  * sku

                  * option_values


                  **Read-Only Fields**

                  * id


                  **Limits**

                  * 600 SKUs per product limit.

                  * 255 characters SKU length limit.


                  Variants need to be created one at a time using this endpoint.
                  To use a variant array, create products, and variants in the
                  same call use the [Create
                  Products](/docs/rest-catalog/products#create-a-product)
                  endpoint during the initial product creation.
              parameters:
                - null
                - null
            /catalog/products/{product_id}/variants/{variant_id}:
              get:
                tags:
                  - Product Variants
                summary: Get a Product Variant
                description: >-
                  Returns a single product *Variant*. Optional parameters can be
                  passed in.
              put:
                tags:
                  - Product Variants
                summary: Update a Product Variant
                description: Updates a product *Variant*.
              delete:
                tags:
                  - Product Variants
                summary: Delete a Product Variant
                description: Deletes a product *Variant*.
              parameters:
                - null
                - null
                - null
            /catalog/products/{product_id}/variants/{variant_id}/metafields:
              get:
                tags:
                  - Metafields
                summary: Get Product Variant Metafields
                description: >-
                  Returns a list of product variant *Metafields*. Optional
                  parameters can be passed in.
              post:
                tags:
                  - Metafields
                summary: Create a Product Variant Metafield
                description: >-
                  Creates a product variant *Metafield*.


                  **Required Fields:**

                  * permission_set

                  * namespace

                  * key

                  * value


                  **Read-Only Fields**

                  * id


                  **Note:** The maxiumum number of metafields allowed on each
                  order, product, category, variant, or brand is 250 per client
                  ID. For more information, see [Platform
                  Limits](https://support.bigcommerce.com/s/article/Platform-Limits)
                  in the Help Center.
              parameters:
                - null
                - null
                - null
            /catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}:
              get:
                tags:
                  - Metafields
                summary: Get a Product Variant Metafields
                description: >-
                  Returns a single product variant *Metafield*. Optional
                  parameters can be passed in.
              put:
                tags:
                  - Metafields
                summary: Update Product Variant Metafields
                description: "Updates a product variant *Metafield*.\n\n**Required Fields:**\n* none\n\n**Read-Only Fields**\n* id\n* These fields can only be modified by the app (API credentials) that created the metafield:\n\t* namespace\n\t* key\n\t* permission_set\n\n**Usage Notes**\n* Attempting to modify `namespace`, `key`, and `permission_set` fields using a client ID different from the one used to create those metafields will result in a 403 error message. "
              delete:
                tags:
                  - Metafields
                summary: Delete a Product Variant Metafield
                description: Deletes a product variant *Metafield*.
              parameters:
                - null
                - null
                - null
                - null
            /catalog/products/{product_id}/variants/{variant_id}/image:
              post:
                tags:
                  - Images
                summary: Create a Product Variant Image
                description: >-
                  Creates a *Variant Image*.


                  Only one image can be explicitly associated with a Variant. If
                  the Variant already has an associated image, overwrites the
                  existing Variant Image.


                  The image displays on the storefront when the Variant is
                  selected.

                   **Required Fields**
                  - image_file: Form posts. Files larger than 1 MB are not
                  accepted

                  - image_url: Any publicly available URL
              parameters:
                - null
                - null
                - null
            /catalog/variants:
              get:
                tags:
                  - Variants (Batch)
                summary: Get All Variants
                description: >-
                  Returns a list of all variants in your catalog. Optional
                  parameters can be passed in.
              put:
                tags:
                  - Variants (Batch)
                summary: Update Variants (Batch)
                description: >-
                  Updates a batch of `variant` objects. Currently the limit is
                  50 variants however this is subject to change.


                  **Required Fields**


                  To update an existing variant:

                  * id (variant ID)


                  To create a new variant:

                  * product_id

                  * sku

                  * option_values
                    - id (option_value ID - Example: 146)
                    - option_id (Option ID - Example: 151)
              parameters:
                - null
            /catalog/variants/metafields:
              get:
                summary: Get All Product Variant Metafields
                tags:
                  - Batch metafields
                description: Get all variant metafields.
              post:
                summary: Create multiple Metafields
                tags:
                  - Batch metafields
                description: Create multiple metafields.
              put:
                summary: Update multiple Metafields
                tags:
                  - Batch metafields
                description: Create multiple metafields.
              delete:
                summary: Delete All Metafields
                tags:
                  - Batch metafields
                description: Delete all variant metafield
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
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
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-response-put-500-status-code-info
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-error
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
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
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/catalog-product-variants-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/catalog-product-variants-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:catalog-products
    name: Catalog - Products
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Catalog - Products
            version: ''
          tags:
            - name: Batch metafields
            - name: Products
            - name: Bulk Pricing Rules
            - name: Complex Rules
            - name: Custom Fields
            - name: Images
            - name: Metafields
            - name: Reviews
            - name: Videos
            - name: Channel Assignments
            - name: Category Assignments
            - name: Summary
          paths:
            /catalog/products:
              get:
                tags:
                  - Products
                summary: Get All Products
                description: >-
                  Returns a list of **Products**. Optional filter parameters can
                  be passed in.
              put:
                tags:
                  - Products
                summary: Update Products (Batch)
                description: >-
                  Updates products in batches. Batches are limited to 10
                  products.


                  **Required Fields**

                  * `id` - product `id` is required for batch updates to
                  products.


                  **Read-Only Fields**

                  - `id`

                  - `date_created`

                  - `date_modified`

                  - `calculated_price`

                  - `base_variant_id`
              post:
                tags:
                  - Products
                summary: Create a Product
                description: >-
                  Creates a *Product*. Only one product can be created at a
                  time; however, you can create multiple product variants using
                  the `variants` array.


                  **Required Fields:**

                  - `name`

                  - `type`

                  - `weight`

                  - `price`


                  **Read-Only Fields**

                  - `id`

                  - `date_created`

                  - `date_modified`

                  - `calculated_price`

                  - `base_variant_id`


                  **Limits**

                  - 250 characters product name length.

                  - A product can have up to 1000 images. Each image file or
                  image uploaded by URL can be up to 8 MB.


                  **Usage Notes**

                  * You can create multiple product variants using the
                  `variants` array.

                  * This endpoint accepts a `video` array. To create a product
                  video that accepts a `video` object, see [Create a Product
                  Video](/docs/rest-catalog/products/videos#create-a-product-video)
                  for information.
              delete:
                tags:
                  - Products
                summary: Delete Products
                description: >-
                  To delete *Product* objects, you must include a filter. This
                  prevents inadvertently deleting all *Product* objects in a
                  store.


                  > #### Note

                  > The maximum number of products you can delete at one time is
                  250.


                  **Example**:

                  To delete products with IDs 1,2 and 3, use `DELETE
                  /v3/catalog/products?id:in=1,2,3`.
              parameters:
                - null
            /catalog/products/{product_id}:
              get:
                tags:
                  - Products
                summary: Get a Product
                description: >-
                  Returns a single *Product*. Optional parameters can be passed
                  in.
              put:
                tags:
                  - Products
                summary: Update a Product
                description: >
                  Updates a *Product*.


                  **Limits**

                  - A product can have up to 1000 images. Each image file or
                  image uploaded by URL can be up to 8 MB.


                  **Read-Only Fields**

                  - id

                  - date_created

                  - date_modified

                  - calculated_price

                  - base_variant_id
              delete:
                tags:
                  - Products
                summary: Delete a Product
                description: Deletes a *Product*.
              parameters:
                - null
                - null
            /catalog/products/{product_id}/images:
              get:
                tags:
                  - Images
                summary: Get All Product Images
                description: >-
                  Returns a list of *Product Images*. Optional parameters can be
                  passed in.
              post:
                tags:
                  - Images
                summary: Create a Product Image
                description: >-
                  Creates a *Product Image*.

                   **Required Fields**
                  - `image_file`, or

                  - `image_url`


                  **Usage Notes**

                  - `image_url` - `255` character limit

                  - For file uploads, use the `multipart/form-data` media type.

                  - You can create only one image at a time. A product can have
                  up to 1000 images.

                  - Supported image file types are BMP, GIF, JPEG, PNG, WBMP,
                  XBM, and WEBP.

                  - Each image file or image uploaded by URL can be up to 8 MB.
              parameters:
                - null
                - null
            /catalog/products/{product_id}/images/{image_id}:
              get:
                tags:
                  - Images
                summary: Get a Product Image
                description: >-
                  Returns a single *Product Image*. Optional parameters can be
                  passed in.
              put:
                tags:
                  - Images
                summary: Update a Product Image
                description: >-
                  Updates a *Product Image*.


                  **Usage Notes**

                  - `image_url` - `255` character limit

                  - Each image file or image uploaded by URL can be up to 8 MB.

                  - For file uploads, send a POST request using the
                  `multipart/form-data` media type
              delete:
                tags:
                  - Images
                summary: Delete a Product Image
                description: Deletes a *Product Image*.
              parameters:
                - null
                - null
                - null
            /catalog/products/{product_id}/videos:
              get:
                tags:
                  - Videos
                summary: Get All Product Videos
                description: >-
                  Returns a list of *Product Videos*. Optional parameters can be
                  passed in.
              post:
                tags:
                  - Videos
                summary: Create a Product Video
                description: |-
                  Creates a *Product Video*.

                  **Required Fields**
                  * video_id

                  **Read-Only Fields**
                  * id

                  Publicly accessible URLs are valid parameters.
                  Videos must be loaded through YouTube at this time.
              parameters:
                - null
                - null
            /catalog/products/{product_id}/videos/{id}:
              get:
                tags:
                  - Videos
                summary: Get a Product Video
                description: >-
                  Returns a single *Product Video*. Optional parameters can be
                  passed in.
              put:
                tags:
                  - Videos
                summary: Update a Product Video
                description: |-
                  Updates a *Product Video.

                  **Required Fields**
                  * none

                  **Read-Only Fields**
                  * id
              delete:
                tags:
                  - Videos
                summary: Delete a Product Video
                description: Deletes a *Product Video*.
              parameters:
                - null
                - null
                - null
            /catalog/products/{product_id}/complex-rules:
              get:
                tags:
                  - Complex Rules
                summary: Get Complex Rules
                description: >-
                  Returns a list of all product *Complex Rules*. Optional
                  parameters may be passed in.
              post:
                tags:
                  - Complex Rules
                summary: Create a Complex Rule
                description: |-
                  Creates a product *Complex Rule*.

                  **Required Fields**
                  - modifier_id
                  - modifier_value_id
                  - variant_id

                  **Read-Only Fields**
                  - complex_rule_id
                  - conditions_id
                  - rule_id
                  - combination_id
                  - id
              parameters:
                - null
                - null
            /catalog/products/{product_id}/complex-rules/{complex_rule_id}:
              get:
                tags:
                  - Complex Rules
                summary: Get a Product Complex Rule
                description: >-
                  Returns a single *Complex Rule*. Optional parameters can be
                  passed in.
              put:
                tags:
                  - Complex Rules
                summary: Update a Product Complex Rule
                description: |-
                  Updates a *Complex Rule*.

                  **Required Fields**:
                  - none

                  **Read-Only Fields**:
                  - complex_rule_id
                  - conditions_id
                  - rule_id
                  - combination_id
                  - id
              delete:
                tags:
                  - Complex Rules
                summary: Delete a Product Complex Rule
                description: Deletes a product *Complex Rule*.
              parameters:
                - null
                - null
                - null
            /catalog/products/{product_id}/custom-fields:
              get:
                tags:
                  - Custom Fields
                summary: Get Product Custom Fields
                description: >-
                  Returns a list of product *Custom Fields*. You can pass in
                  optional parameters.


                  **Note:**

                  The default rate limit for this endpoint is 40 concurrent
                  requests.
              post:
                tags:
                  - Custom Fields
                summary: Create a Product Custom Field
                description: >-
                  Creates a *Custom Field*.


                  **Required Fields:**

                  - name

                  - value


                  **Name-Value Pair Uniqueness**

                  - Every name-value pair must be unique inside a product.


                  **Read-Only:**

                  - id


                  **Limits**

                  - 200 custom fields per product limit.

                  - 250 characters per custom field limit.


                  **Note:**

                  The default rate limit for this endpoint is 40 concurrent
                  requests.
              parameters:
                - null
            /catalog/products/{product_id}/custom-fields/{custom_field_id}:
              get:
                tags:
                  - Custom Fields
                summary: Get a Product Custom Field
                description: >
                  Returns a *Custom Field*.


                  **Note:**

                  The default rate limit for this endpoint is 40 concurrent
                  requests.
              put:
                tags:
                  - Custom Fields
                summary: Update a Product Custom Field
                description: |-
                  Updates a *Custom Field*.

                  **Required Fields**
                  - none

                  **Name-Value Pair Uniqueness**
                  - Every name-value pair must be unique inside a product.

                  **Read-Only**
                  - id

                   **Limits**
                  - 200 custom fields per product limit.
                  - 250 characters per custom field limit.
                  - 40 concurrent requests default rate limit.
              delete:
                tags:
                  - Custom Fields
                summary: Delete a Product Custom Field
                description: >-
                  Deletes a product *Custom Field*.


                  **Note:**

                  The default rate limit for this endpoint is 40 concurrent
                  requests.
              parameters:
                - null
                - null
            /catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id}:
              get:
                tags:
                  - Bulk Pricing Rules
                summary: Get a Bulk Pricing Rule
                description: >-
                  Returns a single *Bulk Pricing Rule*. Optional parameters can
                  be passed in.
              put:
                tags:
                  - Bulk Pricing Rules
                summary: Update a Bulk Pricing Rule
                description: |-
                  Updates a *Bulk Pricing Rule*.

                  **Required Fields**
                  * none

                  **Read-Only Fields**
                  - id
              delete:
                tags:
                  - Bulk Pricing Rules
                summary: Delete a Bulk Pricing Rule
                description: Deletes a *Bulk Pricing Rule*.
              parameters:
                - null
                - null
                - null
            /catalog/products/{product_id}/metafields:
              get:
                tags:
                  - Metafields
                summary: Get Product Metafields
                description: >-
                  Returns a list of *Product Metafields*. Optional parameters
                  can be passed in.
              post:
                tags:
                  - Metafields
                summary: Create a Product Metafield
                description: >-
                  Creates a *Product Metafield*.


                  **Required Fields:**

                  * permission_set

                  * namespace

                  * key

                  * value


                  **Note:** The maxiumum number of metafields allowed on each
                  order, product, category, variant, or brand is 250 per client
                  ID. For more information, see [Platform
                  Limits](https://support.bigcommerce.com/s/article/Platform-Limits)
                  in the Help Center.
              parameters:
                - null
                - null
            /catalog/products/{product_id}/metafields/{metafield_id}:
              get:
                tags:
                  - Metafields
                summary: Get a Product Metafield
                description: >-
                  Returns a single *Product Metafield*. Optional parameters can
                  be passed in.
              put:
                tags:
                  - Metafields
                summary: Update a Product Metafield
                description: "Updates a *Product Metafield*.\n\n**Required Fields**\n* none\n\n**Read-Only Fields**\n* id\n* These fields can only be modified using the API account that created the metafield:\n\t* `namespace`\n\t* `key`\n\t* `permission_set`\n\t* `value`\n\n**Usage Notes**\n* Attempting to modify the `namespace`, `key`, `permission_set`, or `value` field using an API account different from the one used to create those metafields will result in a `403` error message. "
              delete:
                tags:
                  - Metafields
                summary: Delete a Product Metafield
                description: Deletes a *Product Metafield*.
              parameters:
                - null
                - null
                - null
            /catalog/products/{product_id}/reviews:
              get:
                tags:
                  - Reviews
                summary: Get Product Reviews
                description: >-
                  Returns a list of all *Product Reviews*. Optional parameters
                  can be passed in.
              post:
                tags:
                  - Reviews
                summary: Create a Product Review
                description: |-
                  Creates a *Product Review*.

                  **Required Fields**
                  - title
                  - date_reviewed

                  **Read-Only Fields**
                  * id
              parameters:
                - null
                - null
            /catalog/products/{product_id}/reviews/{review_id}:
              get:
                tags:
                  - Reviews
                summary: Get a Product Review
                description: >-
                  Returns a single *Product Review*. Optional parameters maybe
                  passed in.
              put:
                tags:
                  - Reviews
                summary: Update a Product Review
                description: |-
                  Updates a *Product Review*.

                  **Required Fields**
                  * none

                  **Read-Only Fields**
                  * id
              delete:
                tags:
                  - Reviews
                summary: Delete a Product Review
                description: Deletes a *Product Review*.
              parameters:
                - null
                - null
                - null
            /catalog/products/channel-assignments:
              get:
                summary: Get Products Channel Assignments
                description: Returns a list of products channel assignments.
                tags:
                  - Channel Assignments
              put:
                summary: Create Products Channel Assignments
                description: Creates products channel assignments.
                tags:
                  - Channel Assignments
              delete:
                summary: Delete Products Channel Assignments
                description: >-
                  Delete products channel assignments. A filter must be
                  supplied.
                tags:
                  - Channel Assignments
              parameters:
                - null
            /catalog/products/category-assignments:
              get:
                summary: Get Products Category Assignments
                description: Returns a list of products category assignments.
                tags:
                  - Category Assignments
              put:
                summary: Create Products Category Assignments.
                description: Creates products category assignments.
                tags:
                  - Category Assignments
              delete:
                summary: Delete Products Category Assignments
                description: >-
                  Deletes products category assignments. A filter must be
                  supplied.
                tags:
                  - Category Assignments
              parameters:
                - null
            /catalog/summary:
              get:
                tags:
                  - Summary
                summary: Get a Catalog Summary
                description: >-
                  Returns a lightweight inventory summary from the BigCommerce
                  Catalog.


                  The inventory summary includes:

                  * "inventory_count"

                  * "variant_count"

                  * "inventory_value"

                  * "highest_variant_price"

                  * "average_variant_price"

                  * "lowest_variant_price"

                  * "oldest_variant_date"

                  * "newest_variant_date"

                  * "primary_category_id"

                  * "primary_category_name"
              parameters:
                - null
            /catalog/products/metafields:
              get:
                summary: Get All Product Metafields
                tags:
                  - Batch metafields
                description: Get all product metafields.
              post:
                summary: Create multiple Metafields
                tags:
                  - Batch metafields
                description: Create multiple metafields.
              put:
                summary: Update multiple Metafields
                tags:
                  - Batch metafields
                description: Update multiple metafields.
              delete:
                summary: Delete All Metafields
                tags:
                  - Batch metafields
                description: Delete all product metafield
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-nullable-info
              message: Request Body Schema Properties Nullable
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-put-204-status-code-info
              message: PUT 204 Status Code
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-response-put-500-status-code-info
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-error
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
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
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-description-length-error
              message: Description needs to be less than 250 characters.
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-oneof-info
              message: Schema Properties OneOf
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/catalog-products-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/catalog-products-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:redirects
    name: Redirects
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Redirects
            version: ''
          tags:
            - name: Redirects
            - name: Import-Export
          paths:
            /storefront/redirects:
              parameters:
                - null
              get:
                tags:
                  - Redirects
                summary: Get Redirects
                description: >-
                  Returns a collection of the store's 301 redirects across all
                  sites.
              put:
                tags:
                  - Redirects
                summary: Upsert Redirects
                description: Upserts new redirect data across all storefronts.
              delete:
                tags:
                  - Redirects
                summary: Delete Redirects
                description: Deletes redirects.
            /storefront/redirects/imex/jobs:
              parameters:
                - null
              get:
                tags:
                  - Import-Export
                summary: Get Redirect Import-Export Jobs
                description: >-
                  Returns a collection of the storeʼs 301 redirects across all
                  sites.
            /storefront/redirects/imex/export:
              parameters:
                - null
              post:
                tags:
                  - Import-Export
                summary: Create Redirects Export Job
                description: Creates a new 301 Redirects export job.
            /storefront/redirects/imex/import:
              parameters:
                - null
              post:
                tags:
                  - Import-Export
                summary: Create Redirects Import Job
                description: Creates a new 301 Redirects import job.
            /storefront/redirects/imex/export/{uuid}/events:
              parameters:
                - null
                - null
              get:
                tags:
                  - Import-Export
                summary: Open Redirect Export Event Stream
                description: >-
                  Opens an event stream to receive live updates from an export
                  job.
            /storefront/redirects/imex/import/{uuid}/events:
              parameters:
                - null
                - null
              get:
                tags:
                  - Import-Export
                summary: Open Redirect Import Event Stream
                description: >-
                  Opens an event stream to receive live updates from an import
                  job.
            /storefront/redirects/imex/export/{uuid}/download:
              parameters:
                - null
                - null
              get:
                tags:
                  - Import-Export
                summary: Download Redirect Export
                description: Downloads the CSV file containing the results of an export jo
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
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
            - code: openapi-request-body-schema-properties-nullable-info
              message: Request Body Schema Properties Nullable
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-get-200-media-type-error
              message: JSON Media Type GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
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
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/redirects-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/redirects-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:scripts
    name: Scripts
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Scripts
            version: ''
            license:
              name: ''
          tags:
            - name: Scripts
          paths:
            /content/scripts:
              parameters:
                - null
              post:
                summary: Create a Script
                tags:
                  - Scripts
                description: >-
                  Creates a *Script*.


                  **Required Fields**

                  * name


                  **Read Only Fields**

                  * uuid


                  **Limits**

                  * 50 scripts per channel.


                  **Notes**

                  * If the `kind` is `src`:
                    * Specify the `src` property. 
                    * Optionally, you can supply a `load_method`. 
                    * Do not specify the `html` field.
                  * If the `kind` is `script_tag`:
                    * Specify the `html` property.
                    * Do not specify the `src` field.
                  * Each app can have 10 scripts installed.

                  * Multiple scripts can be created [per
                  call](/docs/integrations/scripts#notes). 
              get:
                summary: Get All Scripts
                tags:
                  - Scripts
                description: >-
                  Returns a list of *Scripts*. Optional parameters can be passed
                  in.


                  This operation will only return scripts generated by the API
                  key and password used to create the script originally. 
            /content/scripts/{uuid}:
              parameters:
                - null
                - null
              get:
                summary: Get a Script
                tags:
                  - Scripts
                description: Returns a single *Script*.
              put:
                summary: Update a Script
                tags:
                  - Scripts
                description: Updates a *Script*.
              delete:
                summary: Delete a Script
                tags:
                  - Scripts
                description: Deletes a *Script
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-license-info
              message: License Object
            - code: openapi-info-license-url-error
              message: Info License URL
            - code: openapi-info-license-name-error
              message: Info License Name
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
    overlays:
      - type: APIs.io Search
        url: overlays/scripts-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/scripts-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:settings
    name: Settings
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Settings V3
          tags:
            - name: Email Statuses
            - name: Search Filters
            - name: Store Locale
            - name: Storefront Category
            - name: Storefront Robotstxt
            - name: Storefront Search
            - name: Storefront Security
            - name: Storefront SEO
            - name: Storefront Status
            - name: Analytics
            - name: Catalog
            - name: Inventory
            - name: Inventory Notifications
            - name: Logo
            - name: Logo Image
            - name: Favicon Image
            - name: Store Profile
            - name: Storefront Product
            - name: Units of Measurement
          paths:
            /settings/analytics:
              parameters:
                - null
              get:
                summary: Get All Web Analytics Providers
                description: Returns a list of web analytics providers.
                tags:
                  - Analytics
            /settings/analytics/{id}:
              parameters:
                - null
                - null
              get:
                summary: Get a Web Analytics Provider
                description: >-
                  Returns a single web analytics provider data for a default
                  channel.
                tags:
                  - Analytics
              put:
                summary: Update a Web Analytics Provider
                description: >-
                  Updates a single web analytics provider data for a default
                  channel.
                tags:
                  - Analytics
            /settings/catalog:
              parameters:
                - null
              get:
                summary: Get Catalog Settings
                description: |-
                  Returns catalog settings.

                   - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
                tags:
                  - Catalog
              put:
                summary: Update Catalog Settings
                description: |-
                  Updates catalog settings.

                   - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
                tags:
                  - Catalog
            /settings/email-statuses:
              parameters:
                - null
              get:
                summary: Get Transactional Email Settings
                description: >-
                  Get global transactional email settings or channel specific
                  overrides by `channel_id`.
                tags:
                  - Email Statuses
              put:
                summary: Update Transactional Email Settings
                description: >-
                  Update global transactional email settings or create channel
                  specific overrides by `channel_id`.
                tags:
                  - Email Statuses
            /settings/favicon/image:
              parameters:
                - null
              post:
                summary: Create Favicon Image
                description: >-
                  Uploads an image file to use as the storefront favicon.
                  Supported MIME types include GIF, JPEG, and PNG. 

                    - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only.
                tags:
                  - Favicon Image
            /settings/inventory/notifications:
              parameters:
                - null
              get:
                summary: Get Inventory Notifications Settings
                description: >-
                  Returns inventory notification settings. 

                  * `channel_id` can be used as a query parameter to get
                  inventory notification settings per channel. If omitted, you
                  will interact with the global setting only.
                tags:
                  - Inventory Notifications
              put:
                summary: Update Inventory Notifications Settings
                description: >-
                  Updates inventory notification settings. 

                  * `channel_id` can be used as a query parameter to get
                  inventory notification settings per channel. If omitted, you
                  will interact with the global setting only. 

                  * Supplying `null` settings values per channel will delete
                  overrides per given channel and values will be inherited from
                  global level. 

                  * Partial updates are not supported within the given endpoint.
                  In order to delete overrides per channel, `null` should be
                  supplied for all the settings within the given endpoint.
                tags:
                  - Inventory Notifications
            /settings/logo:
              parameters:
                - null
              get:
                summary: Get Store Logo Settings
                description: |-
                  Returns store logo settings.

                   - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
                tags:
                  - Logo
              put:
                summary: Update Store Logo Settings
                description: >-
                  Updates the logo type and logo text for a textual logo. To
                  upload new images, use the dedicated image POST endpoints.

                   - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
                tags:
                  - Logo
            /settings/logo/image:
              parameters:
                - null
              post:
                summary: Create Logo Image
                description: >-
                  Uploads an image file to use as the storefront logo. Supported
                  MIME types include GIF, JPEG, and PNG. 

                   - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only.
                tags:
                  - Logo Image
            /settings/search/filters:
              get:
                summary: Get Enabled Filters
                description: >-
                  Returns a list of enabled default [Product
                  Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings)
                  filters. These filters will be used if a store does not have
                  contextual overrides.
                tags:
                  - Search Filters
              put:
                summary: Update Enabled Filters
                description: >-
                  Updates enabled default [Product
                  Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings)
                  filters.
                tags:
                  - Search Filters
            /settings/search/filters/available:
              parameters:
                - null
              get:
                summary: Get Available Filters
                description: >-
                  Returns a list of filters available to power [Product
                  Filtering](https://support.bigcommerce.com/s/article/Product-Filtering-Settings).
                tags:
                  - Search Filters
            /settings/search/filters/contexts:
              parameters:
                - null
              get:
                summary: Get Contextual Filters
                description: >-
                  Returns a list of contextual filters enabled for a particular
                  channel or category.


                  **Usage Notes**


                  Contextual filters allow you to configure the enabled filters
                  per channel or category, so that shoppers can filter by the
                  most relevant criteria.


                  The order of the returned filters will match the sort order of
                  the filters on the storefront.
                tags:
                  - Search Filters
              put:
                summary: Upsert Contextual Filters
                description: >-
                  Upserts contextual filters for a particular channel or
                  category.


                  **Usage Notes**


                  Contextual filters allow you to configure the enabled filters
                  per channel or category, so that shoppers can filter by the
                  most relevant criteria.


                  You can change the order of the filters on the live site by
                  changing the order of the filters you send.
                tags:
                  - Search Filters
            /settings/store/locale:
              get:
                summary: Get Locale Settings
                description: Returns global locale settings.
                tags:
                  - Store Locale
              put:
                summary: Update Locale Settings
                description: Updates global locale settings.
                tags:
                  - Store Locale
            /settings/store/profile:
              parameters:
                - null
              get:
                summary: Get Store Profile Settings
                description: |-
                  Returns store profile settings.

                   - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
                tags:
                  - Store Profile
              put:
                summary: Update Store Profile Settings
                description: |-
                  Updates store profile settings.

                   - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
                tags:
                  - Store Profile
            /settings/storefront/category:
              parameters:
                - null
              get:
                summary: Get Storefront Category Settings
                description: |-
                  Returns category settings.

                   - Channel ID can be used as a query parameter for getting channel-specific settings. If omitted, you will interact with the global setting only. 

                   - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
                tags:
                  - Storefront Category
              put:
                summary: Update Storefront Category Settings
                description: |-
                  Updates category settings.

                   - Channel ID can be used as a query parameter for updating channel-specific settings. If omitted, you will interact with the global setting only. 

                   - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
                tags:
                  - Storefront Category
            /settings/storefront/product:
              parameters:
                - null
              get:
                summary: Get Storefront Product Settings
                description: |-
                  Returns product settings.

                   - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
                tags:
                  - Storefront Product
              put:
                summary: Update Storefront Product Settings
                description: |-
                  Updates product settings.

                   - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
                tags:
                  - Storefront Product
            /settings/storefront/robotstxt:
              parameters:
                - null
              get:
                summary: Get Robots.txt Settings
                description: |-
                  Returns Robots.txt settings.

                   - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
                tags:
                  - Storefront Robotstxt
              put:
                summary: Update Robots.txt Settings
                description: |-
                  Updates Robots.txt settings.

                   - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
                tags:
                  - Storefront Robotstxt
            /settings/storefront/search:
              parameters:
                - null
              get:
                summary: Get Storefront Search Settings
                description: |-
                  Returns search settings.

                   - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
                tags:
                  - Storefront Search
              put:
                summary: Update Storefront Search Settings
                description: |-
                  Updates search settings.

                   - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
                tags:
                  - Storefront Search
            /settings/storefront/security:
              parameters:
                - null
              get:
                summary: Get Storefront Security Settings
                description: |-
                  Returns security settings.

                   - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
                tags:
                  - Storefront Security
              put:
                summary: Update Storefront Security Settings
                description: |-
                  Updates security settings.

                   - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
                tags:
                  - Storefront Security
            /settings/storefront/seo:
              parameters:
                - null
              get:
                summary: Get Storefront SEO Settings
                description: |-
                  Returns SEO settings.

                   - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
                tags:
                  - Storefront SEO
              put:
                summary: Update Storefront SEO Settings
                description: |-
                  Updates SEO settings.

                   - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
                tags:
                  - Storefront SEO
            /settings/storefront/status:
              parameters:
                - null
              get:
                summary: Get Storefront Status
                description: |-
                  Returns storefront status-related settings. 

                   - Channel ID can be used as a query parameter for getting channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` indicates that a particular field has not been overridden on a channel level when channel level settings are requested and values are inherited from global level.
                tags:
                  - Storefront Status
              put:
                summary: Update Storefront Status
                description: |-
                  Updates storefront status-related settings.

                   - Channel ID can be used as a query parameter for updating channel-specific setting. If omitted, you will interact with the global setting only. 

                   - `null` should be supplied to delete overrides per given channel and to inherit values from global level. Partial updates are not supported and all settings should be supplied with `null` value in order to delete overrides per channel.
                tags:
                  - Storefront Status
            /settings/inventory:
              parameters:
                - null
              get:
                summary: Get Inventory Settings
                tags:
                  - Inventory
                description: Get Inventory Settings
              put:
                summary: Update Inventory Settings
                tags:
                  - Inventory
                description: Update inventory settings
            /settings/store/units-of-measurement:
              get:
                summary: Get Units of Measurement Settings
                description: >-
                  Get settings for [units of
                  measurements](https://support.bigcommerce.com/s/article/Store-Settings?language=en_US#physical).
                tags:
                  - Units of Measurement
              put:
                summary: Update Units of Measurement Settings
                description: >-
                  Update settings for [units of
                  measurements](https://support.bigcommerce.com/s/article/Store-Settings?language=en_US#physical).


                  The endpoint does not support partial updates. Provide all
                  fields to update global or channel-level settings.


                  Create channel-level settings, or overrides for a channel,
                  using the `channel_id`  query parameter. 


                  To delete overrides for a channel, supply `null` as a value
                  for all fields. A channel then inherits global values.


                  The endpoint does not support 'null' as a value for
                  global-level settings.
                tags:
                  - Units of Measureme
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
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
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
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
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/settings-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/settings-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:shipping
    name: Shipping
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            version: ''
            title: Shipping V3
          tags:
            - name: Customs Information
          paths:
            /shipping/products/customs-information:
              parameters:
                - null
              get:
                description: >-
                  Get customs information for products.


                  This list can be filtered to return customs information
                  objects specific to a list of requested product_ids. This is
                  achieved by appending the query string `?product_id:in=4,5,6`
                  to the resource `/shipping/products/customs-information`.


                  ```http

                  GET /shipping/products/customs-information?product_id:in=4,5,6

                  ```
                tags:
                  - Customs Information
                summary: Get Customs Information
              delete:
                summary: Delete Customs Information
                description: >-
                  Deletes customs information objects for a product.


                  ## Example


                  This is a batch operation. The `product_id:in` query parameter
                  is required.


                  ```http

                  DELETE
                  /shipping/products/customs-information?product_id:in=4,5,6

                  ```
                tags:
                  - Customs Information
              put:
                summary: Upsert Customs Information
                description: >-
                  Creates and updates product customs information.


                  This is a batch operation where the creation of multiple
                  customs information objects can be done with one `PUT`
                  request.


                  **Limits**

                  * Limit of 50 customs information objects per `PUT` request.
                tags:
                  - Customs Informati
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
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
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-description-length-error
              message: Description needs to be less than 250 characters.
    overlays:
      - type: APIs.io Search
        url: overlays/shipping-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/shipping-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:shipping
    name: Shipping
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            version: ''
            title: Shipping V3
          tags:
            - name: Customs Information
          paths:
            /shipping/products/customs-information:
              parameters:
                - null
              get:
                description: >-
                  Get customs information for products.


                  This list can be filtered to return customs information
                  objects specific to a list of requested product_ids. This is
                  achieved by appending the query string `?product_id:in=4,5,6`
                  to the resource `/shipping/products/customs-information`.


                  ```http

                  GET /shipping/products/customs-information?product_id:in=4,5,6

                  ```
                tags:
                  - Customs Information
                summary: Get Customs Information
              delete:
                summary: Delete Customs Information
                description: >-
                  Deletes customs information objects for a product.


                  ## Example


                  This is a batch operation. The `product_id:in` query parameter
                  is required.


                  ```http

                  DELETE
                  /shipping/products/customs-information?product_id:in=4,5,6

                  ```
                tags:
                  - Customs Information
              put:
                summary: Upsert Customs Information
                description: >-
                  Creates and updates product customs information.


                  This is a batch operation where the creation of multiple
                  customs information objects can be done with one `PUT`
                  request.


                  **Limits**

                  * Limit of 50 customs information objects per `PUT` request.
                tags:
                  - Customs Informati
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
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
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-description-length-error
              message: Description needs to be less than 250 characters.
    overlays:
      - type: APIs.io Search
        url: overlays/shipping-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/shipping-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:shipping-providers
    name: Shipping Providers
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            version: ''
            title: Shipping Providers
          tags:
            - name: Shipping Provider
          paths:
            /rate:
              post:
                description: >-
                  Request shipping rates. BigCommerce sends a request for
                  shipping quotes to the shipping provider URL. The shipping
                  provider responds with shipping quotes.


                  > #### Note

                  > * Substitute the host and path specific to the shipping
                  provider for `your_app.example.com` and `rate`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.  
                summary: Request shipping rates
                tags:
                  - Shipping Provider
            /check_connection_options:
              post:
                description: >-
                  Validate connection options. BigCommerce sends a request to
                  the shipping provider URL to check a merchantʼs connection
                  credentials. The shipping provider sends a response indicating
                  whether a merchant has valid credentials. 


                  > #### Note

                  > * Substitute the host and path specific to the shipping
                  provider for `your_app.example.com` and
                  `check_connection_options`.  

                  > * The Send a Test Request feature is not currently supported
                  for this endpoint.
                summary: Validate connection options
                tags:
                  - Shipping Provid
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-names-length-error
              message: Schema Name Length
    overlays:
      - type: APIs.io Search
        url: overlays/shipping-providers-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/shipping-providers-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:sites
    name: Sites
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Sites
            version: ''
          tags:
            - name: Sites
              description: >-
                Enables creation and management of external sites (domains)
                where shoppers shop. Allows for the correct shopping experience
                to be delivered and maintained (i.e. redirect URLs, email links)
                when a shopper goes through the purchasing process.
            - name: Site Routes
            - name: Site Certificate
          paths:
            /sites:
              parameters:
                - null
              post:
                summary: Create a Site
                tags:
                  - Sites
                description: >-
                  Create a site that links a [headless
                  storefront](/docs/storefront/headless) to a sales
                  [channel](/docs/rest-management/channels).
              get:
                summary: Get Sites
                description: >-
                  Get sites linked to a [headless
                  storefront](/docs/storefront/headless) sales channels.
                tags:
                  - Sites
            /sites/{site_id}:
              get:
                summary: Get a Site
                tags:
                  - Sites
                description: Get a site with site ID `{site_id}`.
              put:
                summary: Update a Site
                tags:
                  - Sites
                description: Update a site with site ID `{site_id}`.
              delete:
                summary: Delete a Site
                tags:
                  - Sites
                description: Delete a site with site ID `{site_id}`.
              parameters:
                - null
                - null
            /sites/{site_id}/routes:
              parameters:
                - null
                - null
              get:
                summary: Get a Site’s Routes
                tags:
                  - Site Routes
                description: Get a site’s routes.
              post:
                summary: Create a Site Route
                tags:
                  - Site Routes
                description: >-
                  Create routes that tell BigCommerce how to link to pages on a
                  [headless storefront](/docs/storefront/headless).


                  ## Usage Notes

                  * For a list of supported route types, see [Route
                  types](/docs/rest-management/sites#route-types).
              put:
                description: |-
                  Upsert routes for site with ID `{site_id}`.

                  ## Usage Notes
                  * `id` is required when updating an existing route.
                summary: Update a Site’s Routes
                tags:
                  - Site Routes
            /sites/{site_id}/routes/{route_id}:
              get:
                summary: Get a Site Route
                tags:
                  - Site Routes
                description: Get a site’s route.
              put:
                summary: Update a Site Route
                tags:
                  - Site Routes
                description: |
                  Update a site’s route.
              delete:
                summary: Delete a Site Route
                tags:
                  - Site Routes
                description: Delete a site’s route.
              parameters:
                - null
                - null
                - null
            /sites/{site_id}/certificate:
              parameters:
                - null
                - null
              get:
                summary: Get a Site’s SSL/TLS Certificate Information
                description: Obtain information about a site’s SSL/TLS certificate.
                tags:
                  - Site Certificate
              put:
                summary: Upsert a Site’s SSL/TLS Certificate Information
                tags:
                  - Site Certificate
                description: >-
                  - If a value for `url` is not supplied, the saved certificate
                  is associated with the specified site’s `primary` URL.

                  - Use caution. Because this endpoint upserts, supplying an SSL
                  certificate for a domain that already has a certificate
                  connected overwrites the domain’s extant certificate.'
            /sites/certificates:
              parameters:
                - null
              get:
                summary: Get Site Certificates
                tags:
                  - Site Certificate
                description: Return all SSL certificates connected to domains within a stor
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-tags-description-info
              message: Tag Descriptions
            - code: openapi-tags-description-error
              message: Tag Descriptions
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
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-operations-description-length-error
              message: Operation Description Length
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
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/sites-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/sites-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:content
    name: Content
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Content
            version: ''
          tags:
            - name: Blog Posts
            - name: Blog Tags
            - name: Pages
            - name: Redirects
          paths:
            /blog/tags:
              parameters:
                - null
              get:
                tags:
                  - Blog Tags
                summary: Get All Blog Tags
                description: Returns a list of *Blog Tags*.
            /blog/posts:
              parameters:
                - null
              get:
                tags:
                  - Blog Posts
                summary: Get All Blog Posts
                description: >-
                  Returns all *Blog Posts*. Default sorting is by
                  published_date, beginning with the most recent post.
              post:
                tags:
                  - Blog Posts
                summary: Create a Blog Post
                description: >-
                  Creates a *Blog Post*.


                  **Required Fields**

                  *   `title`

                  *   `body`


                  **Notes**


                  * When including `published_date` in a request, supply it as a
                  flat date string (not an object) in valid <a
                  href="http://tools.ietf.org/html/rfc2822#section-3.3"
                  target="_blank">RFC 2822</a>. The following example request
                  includes a `published_date` in RFC 2822 format.

                  * Blog posts default to draft status. To publish blog posts to
                  the storefront, set the `is_published` property to `true`.

                  * If a custom URL is not provided, the post’s URL will be
                  generated based on the value of `title`.
              delete:
                tags:
                  - Blog Posts
                summary: Delete Blog Posts
                description: Deletes a page of `Blog Posts`.
            /blog/posts/{id}:
              parameters:
                - null
                - null
              get:
                tags:
                  - Blog Posts
                summary: Get a Blog Post
                description: Returns a single *Blog Post*.
              put:
                tags:
                  - Blog Posts
                summary: Update a Blog Post
                description: >-
                  Updates a *Blog Post*.


                  **Notes**


                  * To include `published_date` in a request, provide a flat
                  date string (not an object) in valid <a
                  href="http://tools.ietf.org/html/rfc2822#section-3.3"
                  target="_blank">RFC 2822</a>. The following example request
                  includes a `published_date` in RFC 2822 format.


                  * Blog posts default to draft status. To publish blog posts to
                  the storefront, set the `is_published` property to `true`.
              delete:
                tags:
                  - Blog Posts
                summary: Delete a Blog Post
                description: Deletes a *Blog Post*.
            /blog/posts/count:
              parameters:
                - null
              get:
                tags:
                  - Blog Posts
                summary: Get A Count of All Blog Posts
                description: Returns a count of all *Blog Posts*.
            /pages:
              parameters:
                - null
              get:
                tags:
                  - Pages
                summary: Get All Pages
                description: >
                  Returns a list of *Pages*. Default sorting is by
                  auto-generated ID from oldest to newest.


                  > #### Warning

                  > **Deprecated**

                  > * This API operation is deprecated. Avoid using this API
                  operation if possible. It will be removed in a future version.

                  > * To get one or more pages, use Pages V3ʼs [Get
                  pages](/docs/rest-content/pages#get-pages) endpoint. To get a
                  single page, use Pages V3ʼs [Get a
                  page](/docs/rest-content/pages#get-a-page) endpoint.
              post:
                tags:
                  - Pages
                summary: Create a Page
                description: >-
                  Creates a *Page*. The request payload limit is 1MB.


                  **Required Fields**

                  *   `type`

                  *   `name`

                  *   `link` (for a page of `type: link`)

                  *   `feed` (for a page of `type: rss_feed`)

                  *   `body` (for a page of `type: raw`)


                  **Read Only Fields**

                  *   `id`


                  ## Content Type


                  The default value for `content_type` is `text/html`; however,
                  if `page_type` is set to `raw`, `content_type` can be changed
                  to `text/javascript` or `application/json`. Updating this
                  field allows you to place a JavaScript or a JSON file in the
                  root directory.


                  > #### Warning

                  > **Deprecated**

                  > * This API operation is deprecated. Avoid using this API
                  operation if possible. It will be removed in a future version.

                  > * To create one or more pages, use Pages V3ʼs [Create
                  pages](/docs/rest-content/pages#create-pages) endpoint. 
            /pages/{id}:
              parameters:
                - null
                - null
              get:
                tags:
                  - Pages
                summary: Get A Page
                description: >
                  Returns a *Page*. 


                  > #### Warning

                  > **Deprecated**

                  > * This API operation is deprecated. Avoid using this API
                  operation if possible. It will be removed in a future version.

                  > * To get a single page, use Pages V3ʼs [Get a
                  page](/docs/rest-content/pages#get-a-page) endpoint.
              put:
                tags:
                  - Pages
                summary: Update a Page
                description: >-
                  Updates a *Page*. The request payload limit is 1MB.


                  **Read Only Fields**

                  * id


                  > #### Warning

                  > **Deprecated**

                  > * This API operation is deprecated. Avoid using this API
                  operation if possible. It will be removed in a future version.

                  > * To update multiple pages, use Pages V3ʼs [Update
                  pages](/docs/rest-content/pages#update-pages) endpoint. To
                  update a single page, use Pages V3ʼs [Update a
                  page](/docs/rest-content/pages#update-a-page) endpoint.
              delete:
                tags:
                  - Pages
                summary: Delete a Page
                description: >
                  Deletes a *Page*.


                  > #### Warning

                  > **Deprecated**

                  > * This API operation is deprecated. Avoid using this API
                  operation if possible. It will be removed in a future version.

                  > * To delete multiple pages, use Pages V3ʼs [Delete
                  pages](/docs/rest-content/pages#delete-pages) endpoint. To
                  delete a single page, use Pages V3ʼs [Delete a
                  page](/docs/rest-content/pages#delete-a-page) endpoint. 
            /redirects:
              parameters:
                - null
              get:
                tags:
                  - Redirects
                summary: Get All Redirects
                description: >-
                  Returns a list all *Redirect URLs*. 


                  > #### Warning

                  > **Deprecated**

                  > * This API operation is deprecated. Avoid using this API
                  operation if possible. It will be removed in a future version.

                  > * To get redirect URLs, use Redirects V3ʼs [Get
                  redirects](/docs/rest-management/redirects#get-redirects)
                  endpoint.
              post:
                tags:
                  - Redirects
                summary: Create a Redirect
                description: >-
                  Creates a *Redirect URL*.


                  **Required Fields**

                  *   path

                  *   forward


                  **Read Only**

                  *   url



                  > #### Warning

                  > **Deprecated**

                  > * This API operation is deprecated. Avoid using this API
                  operation if possible. It will be removed in a future version.

                  > * To upsert new redirect data, use Redirects V3ʼs [Upsert
                  redirects](/docs/rest-management/redirects#upsert-redirects)
                  endpoint.
              delete:
                tags:
                  - Redirects
                summary: Delete All Redirects
                description: >-
                  By default, it deletes all *Redirect URLs* in a store. 



                  > #### Warning

                  > **Deprecated**

                  > * This API operation is deprecated. Avoid using this API
                  operation if possible. It will be removed in a future version.

                  > * To delete redirect URLs, use Redirects V3ʼs [Delete
                  redirects](/docs/rest-management/redirects#delete-redirects)
                  endpoint.
            /redirects/{id}:
              parameters:
                - null
                - null
              get:
                tags:
                  - Redirects
                summary: Get a Redirect
                description: >-
                  Returns a single *Redirect URL*.


                  > #### Warning

                  > **Deprecated** 

                  > * This API operation is deprecated. Avoid using this API
                  operation if possible. It will be removed in a future version.

                  > * To get a redirect URL, use Redirects V3ʼs [Get
                  redirects](/docs/rest-management/redirects#get-redirects)
                  endpoint.
              put:
                tags:
                  - Redirects
                summary: Update a Redirect
                description: >-
                  Updates a *Redirect URL*.


                  **Required Fields**

                  *   path

                  *   forward


                  **Read Only Fields**

                  *   url



                  > #### Warning

                  > **Deprecated**

                  > * This API operation is deprecated. Avoid using this API
                  operation if possible. It will be removed in a future version.

                  > * To update redirect data, use Redirects V3ʼs [Upsert
                  redirects](/docs/rest-management/redirects#upsert-redirects)
                  endpoint.
              delete:
                tags:
                  - Redirects
                summary: Delete a Redirect
                description: >-
                  Deletes a *Redirect URL*.


                  > #### Warning

                  > **Deprecated** 

                  > * This API operation is deprecated. Avoid using this API
                  operation if possible. It will be removed in a future version.

                  > * To delete a redirect URL, use Redirects V3ʼs [Delete
                  redirects](/docs/rest-management/redirects#delete-redirects)
                  endpoint.
            /redirects/count:
              parameters:
                - null
              get:
                tags:
                  - Redirects
                summary: Get a Count of Redirects
                description: >-
                  Gets a count of *Redirect URLs* in a store.


                  > #### Warning

                  > **Deprecated**

                  > * This API operation is deprecated. Avoid using this API
                  operation if possible. It will be removed in a future version.

                  > * To get a count of redirects, use the `meta` object data
                  returned with the Redirects V3ʼs [Get
                  redirects](/docs/rest-management/redirects#get-redirects)
                  endpoin
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-error
              message: Schema Type
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-description-length-error
              message: Description needs to be less than 250 characters.
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/content-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/content-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:store-information
    name: Store Information
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            version: ''
            title: Store Information
          tags:
            - name: Store Information
            - name: Time Zone
          paths:
            /store:
              get:
                description: >-
                  Returns metadata about the global settings for a store. Some
                  of these values are independently configurable on a
                  per-storefront or per-channel basis. For channel overrides,
                  see [Store Settings](/docs/rest-management/settings).
                summary: Get Store Information
                tags:
                  - Store Information
            /time:
              get:
                description: >-
                  Returns the system timestamp at the time of the request. The
                  time resource is useful for validating API authentication
                  details and testing client connections.
                summary: Get System Timestamp
                tags:
                  - Time Zo
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-tags-info
              message: Operation Tags
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
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-security-schemes-info
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
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-anyof-info
              message: Schema Properties AnyOf
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
    overlays:
      - type: APIs.io Search
        url: overlays/store-information-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/store-information-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:store-logs
    name: Store Logs
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Store Logs V3 API
            version: ''
          paths:
            /store/systemlogs:
              get:
                summary: Get System Logs
                description: 'Get system logs '
                tags:
                  - System Logs
              parameters: []
          tags:
            - name: System Lo
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
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
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
    overlays:
      - type: APIs.io Search
        url: overlays/store-logs-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/store-logs-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:storefront-token
    name: Storefront Token
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Storefront Token
            version: ''
          tags:
            - name: API Token
            - name: Customer Impersonation Token
          paths:
            /storefront/api-token:
              parameters:
                - null
              post:
                tags:
                  - API Token
                summary: Create a Token
                description: |-
                  Creates a Storefront API token.

                  **Required Scopes**
                  * `Manage` `Storefront API Tokens`
              delete:
                tags:
                  - API Token
                summary: Revoke a Token
                description: >-
                  Revoke access for a Storefront API token. Only revoke
                  compromised tokens under emergency situations. Let
                  uncompromised short-lived tokens expire naturally, as you do
                  not need to revoke these.
            /storefront/api-token-customer-impersonation:
              parameters:
                - null
              post:
                tags:
                  - Customer Impersonation Token
                summary: Create a Token
                description: >-
                  Returns a Storefront API token that allows your application to
                  impersonate customers when making GraphQL `POST` requests. For
                  more information on how to use the returned token, see
                  [customer impersonation
                  tokens](/docs/rest-authentication/tokens/customer-impersonation-token#create-a-token).


                  **Required Scopes**

                  * `Manage` `Storefront API Customer Impersonation Token
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-api-in-path-info
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
            - code: openapi-operations-description-info
              message: Operation Description
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
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
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
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
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
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/storefront-token-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/storefront-token-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:subscribers
    name: Subscribers
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Subscribers
            license:
              name: ''
            version: ''
          tags:
            - name: Subscribers
              description: BigCommerce Customers API Definition.
          paths:
            /customers/subscribers:
              parameters:
                - null
              get:
                tags:
                  - Subscribers
                summary: Get Subscribers
                description: >-
                  Returns a list of *Subscribers*. Optional filter parameters
                  can be passed in.
              post:
                tags:
                  - Subscribers
                summary: Create a Subscriber
                description: |-
                  Creates a *Subscriber*.

                  **Required Fields**
                  * email

                  **Read Only Fields**
                  * id
              delete:
                tags:
                  - Subscribers
                summary: Delete Subscribers
                description: >-
                  By default, it deletes all *Subscribers*. A filter should be
                  added to avoid deleting all subscribers in a store.
            /customers/subscribers/{subscriber_id}:
              parameters:
                - null
              get:
                tags:
                  - Subscribers
                summary: Get a Subscriber
                description: Returns a *Subscriber*.
              put:
                tags:
                  - Subscribers
                summary: Update a Subscriber
                description: |-
                  Updates a *Subscriber*.

                  **Read Only Fields**
                  * id
              delete:
                tags:
                  - Subscribers
                summary: Delete a Subscriber
                description: Deletes a *Subscriber
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-license-info
              message: License Object
            - code: openapi-info-license-url-error
              message: Info License URL
            - code: openapi-info-license-name-error
              message: Info License Name
            - code: openapi-info-version-error
              message: Info Version
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-error
              message: Schema Type
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/subscribers-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/subscribers-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:storefront-subscriptions
    name: Storefront Subscriptions
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Storefront Subscriptions
            version: ''
          tags:
            - name: Subscription
          paths:
            /subscriptions:
              post:
                tags:
                  - Subscription
                summary: Create a Subscription
                description: >-
                  Creates or updates an email subscription.


                  By default, customers receive abandoned cart emails as soon as
                  they provide their email address in the checkout flow. They
                  can opt out using this endpoint.


                  However, if **Store Settings > Miscellaneous > Require
                  Consent** is enabled, Abandoned Cart Emails are not sent by
                  default, and the customer should opt-in.


                  > #### Note

                  > * Substitute your storefront domain for
                  `yourstore.example.com`. 

                  > * The Send a Test Request feature is not currently supported
                  for this endpoin
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
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
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-description-info
              message: Schemas has a description.
    overlays:
      - type: APIs.io Search
        url: overlays/storefront-subscriptions-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/storefront-subscriptions-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:tax-provider-connection
    name: Tax Provider Connection
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Tax Provider Connection
          tags:
            - name: Tax Provider Connection
          paths:
            /tax/providers/{provider_id}/connection:
              get:
                summary: Get Connection Status
                description: >
                  Retrieve the connection status of the specified tax provider
                  in the context of a store.


                  > #### Note

                  > * Requires **read** permissions on the **Information and
                  Settings** scope.
                tags:
                  - Tax Provider Connection
              delete:
                summary: Delete a Connection
                description: >
                  Remove any previously set basic connection credentials for the
                  specified provider. If the specified provider is the active
                  tax provider on the store, the store's active tax provider
                  will be reset to BigCommerce Manual Tax. It is suggested to
                  call this endpoint during a single-click app [uninstall
                  callback](/docs/integrations/apps/guide/callbacks#uninstall-callback).


                  > #### Note

                  > * This operation will be logged in [Store
                  Logs](https://support.bigcommerce.com/s/article/Using-Store-Logs)
                  under **Staff Actions**.

                  > * Requires **write** permissions on the **Information and
                  Settings**
                  [scope](/docs/start/authentication/api-accounts#oauth-scopes).
                tags:
                  - Tax Provider Connection
              put:
                description: >-
                  Set authentication information associated with a merchant's
                  account on the tax provider's infrastructure:

                  - [HTTP Basic
                  Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
                  (developer.mozilla.org) credentials

                  - (optional) Tax provider profile used in customized endpoint
                  urls for tax provider calls. This is only available for tax
                  providers that support this feature.


                  The configured `username`, `password`, and `profile` (if
                  available) is used to authenticate each API request to the Tax
                  Provider from the associated store. 

                  The tax provider's `profile` will be included in the url for
                  [Tax Provider API](/docs/rest-contracts/tax) endpoints. 


                  > #### Note

                  > * This operation will be logged in [Store
                  Logs](https://support.bigcommerce.com/s/article/Using-Store-Logs)
                  under **Staff Actions**.

                  > * Requires **write** permissions on the **Information and
                  Settings**
                  [scope](/docs/start/authentication/api-accounts#oauth-scopes).
                summary: Update a Connection
                tags:
                  - Tax Provider Connection
              parameters:
                - null
                - nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
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
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
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
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
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
    overlays:
      - type: APIs.io Search
        url: overlays/tax-provider-connection-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/tax-provider-connection-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:tax-classes
    name: Tax Classes
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Tax Classes
            version: ''
          tags:
            - name: Taxes
          paths:
            /tax_classes:
              get:
                tags:
                  - Taxes
                summary: Get All Tax Classes
                description: |-
                  Returns a list of all *Tax Classes* in a store.

                  Default sorting is by tax-class id, from lowest to highest.
            /tax_classes/{id}:
              get:
                tags:
                  - Taxes
                summary: Get a Tax Class
                description: Returns a single *Tax Class
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
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
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/tax-classes-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/tax-classes-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:tax-properties
    name: Tax Properties
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Tax Properties
            version: ''
          tags:
            - name: Tax Properties
            - name: Product Tax Properties
          paths:
            /tax/properties:
              parameters:
                - null
              get:
                tags:
                  - Tax Properties
                summary: Get Tax Properties
                description: Retrieve all tax properties defined in this store.
              put:
                tags:
                  - Tax Properties
                summary: Update Tax Properties
                description: >-
                  Update one or more tax properties. Only fields specified will
                  be adjusted.
              post:
                tags:
                  - Tax Properties
                summary: Create Tax Properties
                description: >-
                  Create one or more tax properties. A **code** and a **display
                  name** must be included when creating tax properties.
              delete:
                tags:
                  - Tax Properties
                summary: Delete Tax Properties
                description: >-
                  Delete one or multiple tax properties. A tax property must
                  have zero usages within product tax properties before you can
                  delete it.
            /tax/products/properties:
              parameters:
                - null
              get:
                tags:
                  - Product Tax Properties
                summary: Get Product Tax Properties
                description: >-
                  Retrieve the tax properties that are associated with one or
                  more products.
              put:
                tags:
                  - Product Tax Properties
                summary: Update Product Tax Properties
                description: >-
                  Update the tax properties associated with one or more
                  products. This operation will be additive to any tax property
                  values already associated with the product, overwriting any
                  existing tax property values.
              delete:
                tags:
                  - Product Tax Properties
                summary: Delete Product Tax Properties
                description: >-
                  Delete tax properties that are associated with one or more
                  product
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-400-status-code-info
              message: 400 Status Code for DELETE Responses
            - code: openapi-security-schemes-info
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
    overlays:
      - type: APIs.io Search
        url: overlays/tax-properties-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/tax-properties-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:tax-provider
    name: Tax Provider
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Tax Provider API
          tags:
            - name: Tax Provider
          paths:
            /estimate:
              post:
                summary: Estimate Taxes
                tags:
                  - Tax Provider
                description: >-
                  Submit the quote request to retrieve an estimate from the
                  enabled third-party tax provider. Estimates are not expected
                  to be persisted by the tax provider.


                  > Server URL

                  > - For supporting tax providers, the server URL contains the
                  tax provider's profile field; for example,
                  `your_profile.example.com`.

                  > - The Try it feature is not currently supported for this
                  endpoint.


                  The following actions can trigger tax estimate requests
                  multiple times during a standard checkout on a BigCommerce
                  storefront, depending on the BigCommerce merchant’s settings.


                  - After selecting a Shipping Method during the “Estimate
                  Shipping & Tax” facility on the Cart page.

                  - After specifying a Shipping Address during a Checkout.

                  - After selecting a Shipping Method during a Checkout.

                  - After specifying a Billing Address during a Checkout.


                  The following actions are not expected to trigger estimate
                  requests.


                  - While anonymously browsing a store’s product catalog.

                  - On the Cart page prior to a Shopper selecting a Shipping
                  Method via “Estimate Shipping & Tax”.

                  - On the Checkout page prior to specifying a Shipping Address.

                  - On the Checkout page, when toggling any option related to
                  using the shopper’s Shipping Address as their Billing Address.


                  The following control panel actions can also trigger tax
                  estimate requests.


                  - Order refund.

                  - Edit order.

                  - Test connection feature in Tax Settings.
            /void:
              post:
                summary: Void Tax Quote
                description: >-
                  Invalidate the persisted tax quote as identified by the given
                  unique ID. Relevant to order cancellations, full refunds, or
                  moving an order from a paid status to an unpaid status.


                  > Server URL

                  > - For supporting tax providers, the server URL contains the
                  tax provider's profile field; for example,
                  `your_profile.example.com`.

                  > - The Try it feature is not currently supported for this
                  endpoint.
                tags:
                  - Tax Provider
            /commit:
              post:
                summary: Commit Tax Quote
                description: >-
                  Submit the quote request to be persisted by the enabled
                  third-party tax provider. A commit operation is intended to be
                  submitted once only, when the Order has been confirmed and
                  paid.


                  > Server URL

                  > - For supporting tax providers, the server URL contains the
                  tax provider's profile field; for example,
                  `your_profile.example.com`.

                  > - The Try it feature is not currently supported for this
                  endpoint.
                tags:
                  - Tax Provider
            /adjust:
              post:
                summary: Adjust Tax Quote
                description: >-
                  Replace the persisted tax quote (identified by the given
                  unique ID) with the provided quote request (represented by the
                  **AdjustRequest**).


                  Relevant for returns, partial refunds, and other Order
                  modifications where there have been changes to the tax
                  liabilities.


                  The returned **Tax Quote** response is expected to be the same
                  to a response returned by an equivalent response to
                  **estimate** or **commit** methods.


                  > Server URL

                  > - For supporting tax providers, the server URL contains the
                  tax provider's profile field; for example,
                  `your_profile.example.com`.

                  > - The Try it feature is not currently supported for this
                  endpoint.
                tags:
                  - Tax Provid
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
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
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-description-length-error
              message: Description needs to be less than 250 characters.
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/tax-provider-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/tax-provider-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:tax-rates-zones
    name: Tax Rates & Zones
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Tax Rates & Zones
          tags:
            - name: Tax Zones
            - name: Tax Rates
          paths:
            /tax/zones:
              parameters:
                - null
              get:
                tags:
                  - Tax Zones
                summary: Get Tax Zones
                description: >-
                  Retrieve a selection of tax zones when you provide a list of
                  tax zone IDs. Otherwise, retrieve all tax zones defined on the
                  store.
              put:
                tags:
                  - Tax Zones
                summary: Update Tax Zones
                description: >-
                  Update one or more tax zones. Only the tax zone `id` field is
                  required. Fields unspecified by the request will retain their
                  current state.
              post:
                tags:
                  - Tax Zones
                summary: Create Tax Zones
                description: |-
                  Create one or more tax zones.

                  > #### Note
                  > You cannot create a default tax zone.
              delete:
                tags:
                  - Tax Zones
                summary: Delete Tax Zones
                description: >-
                  Delete one or more tax zones. Deleting a tax zone removes all
                  associated tax rates.


                  > You must specify which zone(s) to delete using the `id:in`
                  query parameter.
            /tax/rates:
              parameters:
                - null
              get:
                tags:
                  - Tax Rates
                summary: Get Tax Rates
                description: Retrieve a list of tax rates.
              put:
                tags:
                  - Tax Rates
                summary: Update Tax Rates
                description: >-
                  Update one or more tax rates. Only the tax rate `id` field is
                  required. Fields unspecified by the request will retain their
                  current state.
              post:
                tags:
                  - Tax Rates
                summary: Create Tax Rates
                description: >-
                  Create one or more tax rates. Tax rates must be associated
                  with a `tax_zone_id`.
              delete:
                tags:
                  - Tax Rates
                summary: Delete Tax Rates
                description: >-
                  Delete one or more tax rates.


                  > You must specify which rate(s) to delete using the `id:in`
                  query paramete
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-description-info
              message: Schemas has a description.
    overlays:
      - type: APIs.io Search
        url: overlays/tax-rates-zones-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/tax-rates-zones-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:tax-settings
    name: Tax Settings
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Tax Settings
            version: ''
          tags:
            - name: Tax Settings
          paths:
            /tax/settings:
              get:
                tags:
                  - Tax Settings
                summary: Get Tax Settings
                description: Retrieves global-level tax settings.
              put:
                tags:
                  - Tax Settings
                summary: Update Tax Settings
                description: Updates global-level tax settings.
              parameters:
                - nu
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
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
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-description-info
              message: Schemas has a description.
    overlays:
      - type: APIs.io Search
        url: overlays/tax-settings-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/tax-settings-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:tax-zone-check
    name: Tax Zone Check
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Tax Zone Check
            version: ''
          tags:
            - name: Tax Zone Check
          paths:
            /tax/zonecheck:
              parameters:
                - null
              post:
                tags:
                  - Tax Zone Check
                summary: Check zone given an address.
                description: >-
                  Check the applicable tax zone for a given address and customer
                  grou
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-summary-period-none-error
              message: Operation Summary Period
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
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
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
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
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/tax-zone-check-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/tax-zone-check-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:themes
    name: Themes
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: Themes
            version: ''
            license:
              name: ''
          tags:
            - name: Themes
            - name: Theme Actions
            - name: Theme Configurations
            - name: Theme Custom Templates
            - name: Theme Jobs
          paths:
            /themes:
              parameters:
                - null
              get:
                tags:
                  - Themes
                summary: Get all Themes
                description: Returns a list of store *Themes*.
              post:
                tags:
                  - Themes
                summary: Upload a Theme
                description: |-
                  Uploads a new *Theme* to your BigCommerce store.

                  **Required Fields**
                  * file
            /themes/{uuid}:
              get:
                tags:
                  - Themes
                summary: Get a Theme
                description: >-
                  Returns a store *Theme*. The theme variation is not available
                  at this endpoint.
              delete:
                tags:
                  - Themes
                summary: Delete a Theme
                description: >-
                  Deletes a store *Theme*.

                  Theme variations can not be deleted using this endpoint. This
                  will delete the theme and all variations.
              parameters:
                - null
                - null
            /themes/{uuid}/actions/download:
              parameters:
                - null
                - null
              post:
                tags:
                  - Theme Actions
                summary: Download a Theme
                description: Downloads a stores *Theme*.
            /themes/actions/activate:
              parameters:
                - null
                - null
              post:
                tags:
                  - Theme Actions
                summary: Activate a Theme
                description: |-
                  Actives a store *Theme*.

                  This returns a 204 response upon success.
            /themes/jobs/{job_id}:
              get:
                tags:
                  - Theme Jobs
                summary: Get a Theme Job
                description: >-
                  Returns a theme *Job*. When the job is complete, the results
                  array provides a generated link to access the theme. The link
                  is active for 60 seconds.
              parameters:
                - null
                - null
            /themes/{uuid}/configurations:
              get:
                tags:
                  - Theme Configurations
                summary: Get Theme Configuration
                description: |-
                  Returns a list of theme's configurations.

                  **Usage Notes**:
                  * At least one filter must be provided.
              parameters:
                - null
                - null
                - null
                - null
                - null
                - null
            /themes/{uuid}/configurations/validate:
              post:
                summary: Validate Theme Configuration
                tags:
                  - Theme Configurations
                description: >-
                  Validates a theme configuration against the theme's schema
                  without creating it. Useful for testing schemas before
                  creation.
              parameters:
                - null
                - null
            /themes/custom-templates/{version_uuid}:
              parameters:
                - null
                - null
              get:
                summary: Get Custom Templates
                tags:
                  - Theme Custom Templates
                description: >-
                  Enumerate available custom templates for in the theme files in
                  a specific theme version for each supported entity typ
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-license-info
              message: License Object
            - code: openapi-info-license-url-error
              message: Info License URL
            - code: openapi-info-license-name-error
              message: Info License Name
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-operations-description-info
              message: Operation Description
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
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-components-warn
              message: Default Response Schema Components
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
    overlays:
      - type: APIs.io Search
        url: overlays/themes-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/themes-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:webhooks-v3
    name: Webhooks v3
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.3
          info:
            title: Webhooks v3
            version: ''
          tags:
            - name: Manage Webhooks (Single)
            - name: Manage Webhooks (Bulk)
            - name: Webhook Events
            - name: Webhooks Admin
          paths:
            /hooks:
              post:
                summary: Create a Webhook
                description: >-
                  Creates a webhook. Only one webhook at a time can be created.
                  Custom headers can be added. Destination URL must be served on
                  port 443 (custom ports are not currently supported).
                tags:
                  - Manage Webhooks (Bulk)
              get:
                summary: Get Webhooks
                description: >-
                  Returns a list of all webhooks on a store associated to the
                  `client_id` used to authenticate the request.


                  *Note: BigCommerce determines the `client_id` from the
                  `access_token`.*
                tags:
                  - Manage Webhooks (Bulk)
            /hooks/{webhook_id}:
              get:
                description: Return a webhook by ID.
                summary: Get a Webhook
                tags:
                  - Manage Webhooks (Single)
              parameters:
                - null
              put:
                summary: Update a Webhook
                description: Updates a webhook. Custom headers can be added.
                tags:
                  - Manage Webhooks (Single)
              delete:
                summary: Delete a Webhook
                description: >-
                  Deletes a webhook. Only one webhook at a time can be deleted.
                  When a webhook is deleted, it is returned in the response as a
                  200 OK.
                tags:
                  - Manage Webhooks (Single)
            /hooks/admin:
              get:
                summary: Get Admin Info
                description: >-
                  List all notification emails, webhooks, and denylisted domains
                  associated with the API account.
                tags:
                  - Webhooks Admin
              put:
                summary: Upsert Email Notifications
                description: >
                  Update email addresses that are sent notification emails when
                  any domain associated with the API account is denylisted or
                  when a webhook is deactivated. Supports `upsert` functionality
                  in the case that no email address exists yet.
                tags:
                  - Webhooks Admin
            /hooks/events:
              get:
                tags:
                  - Webhook Events
                summary: Get Events
                description: >
                  Get a list of events that were sent but not successfully
                  received. Events are stored for not less than one wee
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-303-info
              message: 3.0.3 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-nullable-info
              message: Request Body Schema Properties Nullable
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-put-204-status-code-info
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-description-length-error
              message: Description needs to be less than 250 characters.
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
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
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
    overlays:
      - type: APIs.io Search
        url: overlays/webhooks-v3-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/webhooks-v3-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:widgets
    name: Widgets
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Widgets
            version: ''
          tags:
            - name: Regions
            - name: Widget Template
              description: BigCommerce Widget Templates API Definition.
            - name: Widget
              description: BigCommerce Widgets API Definition.
            - name: Placement
              description: BigCommerce Placements API Definition.
          paths:
            /content/widget-templates:
              post:
                tags:
                  - Widget Template
                summary: Create a Widget Template
                description: >-
                  Creates a **Widget Template**.


                  ***Note:*** *There is a limit of 1000 custom widget templates
                  per store.*


                  **Required Fields**

                  * name

                  * template
              get:
                tags:
                  - Widget Template
                description: Returns a list of **Widget Templates**.
                summary: Get All Widget Templates
            /content/widget-templates/{uuid}/preview:
              post:
                tags:
                  - Widget Template
                summary: Render a Widget Template
                description: Render a widget template and return the widget html.
              parameters:
                - null
            /content/widget-templates/{uuid}:
              get:
                tags:
                  - Widget Template
                summary: Get a Widget Template
                description: Returns a single **Widget Template**.
              put:
                tags:
                  - Widget Template
                summary: Update a Widget Template
                description: Updates a **Widget Template**.
              delete:
                tags:
                  - Widget Template
                summary: Delete A Widget Template
                description: Deletes a **Widget Template**.
              parameters:
                - null
                - null
            /content/widgets:
              post:
                tags:
                  - Widget
                summary: Create a Widget
                description: >-
                  Creates a **Widget**.


                  **Note:** There is a limit of 100,000 widgets per store and
                  150 widgets per page. For more information, see [Store
                  Limits](https://support.bigcommerce.com/s/article/Platform-Limits#storelimits).
              get:
                tags:
                  - Widget
                summary: Get All Widgets
                description: >-
                  Returns a list of **Widgets**. Optional parameters can be
                  passed in.
              parameters:
                - null
            /content/widgets/{uuid}:
              get:
                tags:
                  - Widget
                summary: Get a Widget
                description: Returns a single **Widget**.
              put:
                tags:
                  - Widget
                summary: Update a Widget
                description: Updates a **Widget**.
              delete:
                tags:
                  - Widget
                summary: Delete a Widget
                description: Deletes a **Widget**.
              parameters:
                - null
                - null
            /content/placements:
              post:
                tags:
                  - Placement
                summary: Create a Placement
                description: >-
                  Creates a **Placement**.


                  **Template Files**


                  To view the list of values accepted by the `template_file`
                  property, including **custom** templates, see
                  [Placements](/docs/storefront/widgets#placements).
              get:
                tags:
                  - Placement
                summary: Get All Placements
                description: Returns a list of **Placements**.
              parameters:
                - null
            /content/placements/{uuid}:
              get:
                tags:
                  - Placement
                summary: Get a Placement
                description: Returns a single **Placement**.
              put:
                tags:
                  - Placement
                summary: Update a Placement
                description: Updates a **Placement**.
              delete:
                tags:
                  - Placement
                summary: Delete a Placement
                description: Deletes a **Placement**.
              parameters:
                - null
                - null
            /content/regions:
              get:
                summary: Get Theme Regions
                description: Returns a list of unique **Theme Regions** in a file.
                tags:
                  - Regio
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
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
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-tags-info
              message: Operation Tags
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
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-security-schemes-info
              message: Security Scheme
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-error
              message: Schema Type
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
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
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
    overlays:
      - type: APIs.io Search
        url: overlays/widgets-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/widgets-openapi-api-evangelist-ratings.yml
  - aid: bigcommerce:wishlist
    name: Wishlist
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.bigcommerce.com/
    baseURL: https://api.example.com
    tags:
      - Tag
    properties:
      - type: OpenAPI
        url: https://developer.bigcommerce.com/
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Wishlist
            version: ''
          tags:
            - name: Wishlists
            - name: Wishlists Items
          paths:
            /wishlists:
              get:
                tags:
                  - Wishlists
                summary: Get All Wishlists
                description: >-
                  Returns a list of wishlists. Optional filter parameters can be
                  passed in.
              post:
                tags:
                  - Wishlists
                summary: Create a Wishlist
                description: >-
                  Creates a wishlist and wishlist item. More than one item can
                  be added in the POST.


                  **Required Fields**

                  * name

                  * customer_id
            /wishlists/{wishlist_id}/items/{item_id}:
              parameters:
                - null
                - null
                - null
              delete:
                tags:
                  - Wishlists Items
                summary: Delete Wishlist Item
                description: Deletes a wishlist item.
            /wishlists/{wishlist_id}:
              parameters:
                - null
                - null
              get:
                tags:
                  - Wishlists
                summary: Get a Wishlist
                description: Returns a single wishlist.
              put:
                tags:
                  - Wishlists
                summary: Update a Wishlist
                description: >-
                  Updates a wishlist.


                  Use this endpoint to update existing wishlist items, change
                  the wishlistʼs name and whether the wishlist is available
                  publicly. To add or delete a wishlist item, see [Wishlist
                  Items](/docs/rest-management/wishlists/wishlists-items).
              delete:
                tags:
                  - Wishlists
                summary: Delete a Wishlist
                description: Deletes a wishlist.
            /wishlists/{wishlist_id}/items:
              parameters:
                - null
                - null
              post:
                tags:
                  - Wishlists Items
                summary: Add Wishlist Item
                description: Adds a wishlist item. More than one item can be added at a tim
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-contact-email-info
              message: Contact Email
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
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
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-info
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-info
              message: 500 Status Code for PUT Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-204-no-body-error
              message: No Response Body DELETE
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
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
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/wishlist-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/wishlist-openapi-api-evangelist-ratings.yml
common:
  - type: API Specs
    url: https://github.com/bigcommerce/api-specs/tree/main
  - type: Portal
    url: https://developer.bigcommerce.com/
  - type: Getting Started
    url: https://developer.bigcommerce.com/docs/start
  - type: Change Log
    url: https://developer.bigcommerce.com/release-notes
  - type: SDKs
    url: https://developer.bigcommerce.com/tools-resources
  - type: Slack
    url: https://forms.gle/Q8cuoM7WfU3QE8a7A
  - type: Discord
    url: https://discord.gg/qzGDFDXc4w
  - type: GitHub Organization
    url: https://github.com/bigcommerce
  - type: YouTube
    url: https://www.youtube.com/c/bigcommerce
  - type: Status
    url: https://status.bigcommerce.com/
  - type: Support
    url: https://support.bigcommerce.com/
  - type: Terms of Service
    url: https://www.bigcommerce.com/terms/api-terms/
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
---