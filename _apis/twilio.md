---
specificationVersion: '0.17'
aid: twilio
name: Twilio
description: >-
  We are a software company that strengthens businesses by unifying their data
  to build insightful paths to customers, so they are smarter with every
  interaction and able to outmaneuver their competition.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://artisinal.apisjson.org/apis/twilio/apis.yml
created: 2023/9/25
modified: '2024-01-31'
tags: []
apis:
  - aid: twilio:twilio-accounts-api
    name: Twilio Accounts API
    description: >-
      When you first sign up with Twilio, you have just one account, your main
      account. But you can also create more accounts... subaccounts are useful
      for things like segmenting phone numbers and usage data for your customers
      and controlling access to data.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/iam/api/account
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/iam/api/account
      - type: OpenAPI
        data:
          openapi: 3.0.1
          info:
            title: Twilio - Accounts
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          tags:
            - name: AccountsV1AuthTokenPromotion
            - name: AccountsV1Aws
            - name: AccountsV1PublicKey
            - name: AccountsV1Safelist
            - name: AccountsV1SecondaryAuthToken
          x-maturity:
            - name: GA
              description: This product is Generally Available.
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with caution.
          paths:
            /v1/AuthTokens/Promote:
              description: Auth Token promotion
              post:
                description: >-
                  Promote the secondary Auth Token to primary. After promoting
                  the new token, all requests to Twilio using your old primary
                  Auth Token will result in an error.
                tags:
                  - Auth
                  - Tokens
                  - Promote
            /v1/Credentials:
              description: 'TODO: Resource-level docs'
            /v1/Credentials/AWS:
              description: User provided AWS keys
              get:
                description: >-
                  Retrieves a collection of AWS Credentials belonging to the
                  account used to make the request
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
              post:
                description: Create a new AWS Credential
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
            /v1/Credentials/AWS/{Sid}:
              description: User provided AWS keys
              get:
                description: >-
                  Fetch the AWS credentials specified by the provided Credential
                  Sid
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
              post:
                description: Modify the properties of a given Account
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
              delete:
                description: Delete a Credential from your account
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
            /v1/Credentials/PublicKeys:
              description: User provided public keys
              get:
                description: >-
                  Retrieves a collection of Public Key Credentials belonging to
                  the account used to make the request
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
              post:
                description: Create a new Public Key Credential
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
            /v1/Credentials/PublicKeys/{Sid}:
              description: User provided public keys
              get:
                description: Fetch the public key specified by the provided Credential Sid
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
              post:
                description: Modify the properties of a given Account
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
              delete:
                description: Delete a Credential from your account
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
            /v1/SafeList/Numbers:
              description: 'TODO: Resource-level docs'
              post:
                description: Add a new phone number to SafeList.
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
                  - Safe
                  - List
                  - Numbers
              get:
                description: Check if a phone number exists in SafeList.
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
                  - Safe
                  - List
                  - Numbers
              delete:
                description: Remove a phone number from SafeList.
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
                  - Safe
                  - List
                  - Numbers
            /v1/AuthTokens/Secondary:
              description: Secondary Auth Token
              post:
                description: Create a new secondary Auth Token
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
                  - Safe
                  - List
                  - Numbers
                  - Secondary
              delete:
                description: Delete the secondary Auth Token from your account
                tags:
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
                  - Safe
                  - List
                  - Numbers
                  - Seconda
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
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
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/accounts-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/accounts-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-assistant-api
    name: Twilio Assistant API
    description: >-
      Intelligent virtual assistants (IVA) are incredibly sophisticated
      applications with the potential to revolutionize the way modern businesses
      service customers.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/blog/what-is-intelligent-virtual-assistant
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/blog/what-is-intelligent-virtual-assistant
      - type: OpenAPI
        data:
          info:
            title: Assistants
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /understand/Assistants/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
            /understand/Assistants/{AssistantSid}/FallbackActions:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
            /understand/Assistants/{AssistantSid}/InitiationActions:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
            /understand/Assistants/{AssistantSid}/Dialogues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
            /understand/Assistants/{AssistantSid}/FieldTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
            /understand/Assistants/{AssistantSid}/FieldTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
            /understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
            /understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
            /understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
            /understand/Assistants/{AssistantSid}/ModelBuilds:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
            /understand/Assistants/{AssistantSid}/Queries/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
            /understand/Assistants/{AssistantSid}/Queries:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
            /understand/Assistants/{AssistantSid}/StyleSheet:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns Style sheet JSON object for this Assistant
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
                  - Style
                  - Sheet
              post:
                description: >-
                  Updates the style sheet for an assistant identified by
                  {AssistantSid} or {AssistantUniqueName}.
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
                  - Style
                  - Sheet
            /understand/Assistants/{AssistantSid}/Tasks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
                  - Style
                  - Sheet
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
                  - Style
                  - Sheet
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
                  - Style
                  - Sheet
            /understand/Assistants/{AssistantSid}/Tasks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
                  - Style
                  - Sheet
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
                  - Style
                  - Sheet
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns JSON actions for this Task.
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
                  - Style
                  - Sheet
              post:
                description: >-
                  Updates the actions of an Task identified by {TaskSid} or
                  {TaskUniqueName}.
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
                  - Style
                  - Sheet
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Samples
                  - Style
                  - Sheet
                  - Statistics
          tags:
            - name: PreviewDeployedDevicesCertificate
            - name: PreviewDeployedDevicesDeployment
            - name: PreviewDeployedDevicesDevice
            - name: PreviewDeployedDevicesFleet
            - name: PreviewDeployedDevicesKey
            - name: PreviewHostedNumbersAuthorizationDocument
            - name: PreviewHostedNumbersDependentHostedNumberOrder
            - name: PreviewHostedNumbersHostedNumberOrder
            - null
            - null
            - null
            - null
            - name: PreviewSyncDocument
            - name: PreviewSyncDocumentPermission
            - name: PreviewSyncService
            - name: PreviewSyncSyncList
            - name: PreviewSyncSyncListItem
            - name: PreviewSyncSyncListPermission
            - name: PreviewSyncSyncMap
            - name: PreviewSyncSyncMapItem
            - name: PreviewSyncSyncMapPermission
            - name: Assistants
            - name: Actions
            - name: Actions
            - name: PreviewUnderstandDialogue
            - name: PreviewUnderstandField
            - name: PreviewUnderstandFieldType
            - name: PreviewUnderstandFieldValue
            - name: PreviewUnderstandModelBuild
            - name: PreviewUnderstandQuery
            - name: PreviewUnderstandSample
            - name: PreviewUnderstandStyleSheet
            - name: PreviewUnderstandTask
            - name: PreviewUnderstandTaskActions
            - name: PreviewUnderstandTaskStatistics
            - name: PreviewWirelessCommand
            - name: PreviewWirelessRatePlan
            - name: PreviewWirelessSim
            - name: PreviewWirelessUsage
          x-maturity:
            - name: Preview
              description: >-
                PLEASE NOTE that this is a Preview product that is subject to
                change. Use it with caution. If you currently do not have
                developer preview access, please contact https://www.twilio
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: >-
                openapi-request-body-have-application-x-www-form-url-encoded-info
              message: Request Body Application X WWW Form URL Encoded
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
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
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
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
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/assistant-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/assistant-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-autopilot-api
    name: Twilio Autopilot API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Autopilot
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Assistants/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
            /v1/Assistants:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
            /v1/Assistants/{AssistantSid}/Defaults:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
            /v1/Assistants/{AssistantSid}/Dialogues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
            /v1/Assistants/{AssistantSid}/Dialogues:
              description: 'TODO: Resource-level docs'
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
            /v1/Assistants/{AssistantSid}/FieldTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
            /v1/Assistants/{AssistantSid}/FieldTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
            /v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
            /v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
            /v1/Assistants/{AssistantSid}/ModelBuilds/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
            /v1/Assistants/{AssistantSid}/ModelBuilds:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
            /v1/Assistants/{AssistantSid}/Queries/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
            /v1/Assistants/{AssistantSid}/Queries:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
            /v1/Assistants/Restore:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
            /v1/Assistants/{AssistantSid}/StyleSheet:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns Style sheet JSON object for the Assistant
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
              post:
                description: >-
                  Updates the style sheet for an Assistant identified by
                  `assistant_sid`.
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
            /v1/Assistants/{AssistantSid}/Tasks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
            /v1/Assistants/{AssistantSid}/Tasks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns JSON actions for the Task.
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
                  - Actions
              post:
                description: >-
                  Updates the actions of an Task identified by {TaskSid} or
                  {TaskUniqueName}.
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
                  - Actions
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
                  - Actions
                  - Statistics
            /v1/Assistants/{AssistantSid}/Webhooks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
                  - Actions
                  - Statistics
                  - Webhooks
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
                  - Actions
                  - Statistics
                  - Webhooks
              delete:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
                  - Actions
                  - Statistics
                  - Webhooks
            /v1/Assistants/{AssistantSid}/Webhooks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
                  - Actions
                  - Statistics
                  - Webhooks
              post:
                description: ''
                tags:
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                  - Field
                  - Types
                  - Type
                  - Values
                  - Model
                  - Builds
                  - Queries
                  - Restore
                  - Samples
                  - Style
                  - Sheet
                  - Actions
                  - Statistics
                  - Webhooks
          tags:
            - name: AutopilotV1Assistant
            - name: AutopilotV1Defaults
            - name: AutopilotV1Dialogue
            - name: AutopilotV1Field
            - name: AutopilotV1FieldType
            - name: AutopilotV1FieldValue
            - name: AutopilotV1ModelBuild
            - name: AutopilotV1Query
            - name: AutopilotV1RestoreAssistant
            - name: AutopilotV1Sample
            - name: AutopilotV1StyleSheet
            - name: AutopilotV1Task
            - name: AutopilotV1TaskActions
            - name: AutopilotV1TaskStatistics
            - name: AutopilotV1Webhook
          x-maturity:
            - name: Preview
              description: >-
                PLEASE NOTE that this is a Preview product that is subject to
                change. Use it with caution. If you currently do not have
                developer preview access, please contact https://www.twilio
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: >-
                openapi-request-body-have-application-x-www-form-url-encoded-info
              message: Request Body Application X WWW Form URL Encoded
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
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
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
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
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/autopilot-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/autopilot-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-bulk-exports-api
    name: Twilio Bulk Exports API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Bulkexports
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Exports/{ResourceType}/Days/{Day}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Day.
                tags:
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
            /v1/Exports/{ResourceType}/Days:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Days for a resource.
                tags:
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
            /v1/Exports/{ResourceType}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Export.
                tags:
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
            /v1/Exports:
              description: 'TODO: Resource-level docs'
            /v1/Exports/{ResourceType}/Configuration:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Export Configuration.
                tags:
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                  - Configuration
              post:
                description: Update a specific Export Configuration.
                tags:
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                  - Configuration
            /v1/Exports/{ResourceType}/Jobs:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                  - Configuration
                  - Jobs
              post:
                description: ''
                tags:
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                  - Configuration
                  - Jobs
            /v1/Exports/Jobs/{JobSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                  - Configuration
                  - Jobs
                  - Job
                  - Sid
              delete:
                description: ''
                tags:
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                  - Configuration
                  - Jobs
                  - Job
                  - Sid
            /v1/Exports/Jobs:
              description: 'TODO: Resource-level docs'
          tags:
            - name: BulkexportsV1Day
            - name: BulkexportsV1Export
            - name: BulkexportsV1ExportConfiguration
            - name: BulkexportsV1ExportCustomJob
            - name: BulkexportsV1Job
          x-maturity:
            - name: GA
              description: This product is G
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-200-status-code-error
              message: A GET operation should have a 200 status code for the response.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
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
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: >-
                openapi-request-body-have-application-x-www-form-url-encoded-info
              message: Request Body Application X WWW Form URL Encoded
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-operations-description-error
              message: Operation Description
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
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/bulk-exports-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/bulk-exports-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-content-api
    name: Twilio Content API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Content
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Content/{Sid}/ApprovalRequests:
              description: >-
                An Approval Fetch resource represents the approval status of a
                Content resource.
              get:
                description: >-
                  Fetch a Content resource's approval status by its unique
                  Content Sid
                tags:
                  - Content
                  - Sid
                  - Approval
                  - Requests
            /v1/Content/{Sid}:
              description: A Content resource represents rich messaging content.
              get:
                description: Fetch a Content resource by its unique Content Sid
                tags:
                  - Content
                  - Sid
                  - Approval
                  - Requests
              delete:
                description: Deletes a Content resource
                tags:
                  - Content
                  - Sid
                  - Approval
                  - Requests
            /v1/Content:
              description: A Content resource represents rich messaging content.
              get:
                description: >-
                  Retrieve a list of Contents belonging to the account used to
                  make the request
                tags:
                  - Content
                  - Sid
                  - Approval
                  - Requests
            /v1/ContentAndApprovals:
              description: >-
                A Content resource represents rich messaging content and its
                respective approval request status.
              get:
                description: >-
                  Retrieve a list of Contents with approval statuses belonging
                  to the account used to make the request
                tags:
                  - Content
                  - Sid
                  - Approval
                  - Requests
                  - And
                  - Approvals
            /v1/LegacyContent:
              description: >-
                A Legacy Content resource represents legacy rich messaging
                content.
              get:
                description: >-
                  Retrieve a list of Legacy Contents belonging to the account
                  used to make the request
                tags:
                  - Content
                  - Sid
                  - Approval
                  - Requests
                  - And
                  - Approvals
                  - Legacy
          tags:
            - name: ContentV1ApprovalFetch
            - name: ContentV1Content
            - name: ContentV1ContentAndApprovals
            - name: ContentV1LegacyContent
          x-maturity:
            - name: Preview
              description: >-
                PLEASE NOTE that this is a Preview product that is subject to
                change. Use it with caution. If you currently do not have
                developer preview access, please contact https://www.twilio
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/content-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/content-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-conversations-api
    name: Twilio Conversations API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Conversations
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Configuration:
              description: >-
                The Configuration resource manages a set of account-level
                settings applicable to the Conversations API.
              get:
                description: >-
                  Fetch the global configuration of conversations on your
                  account
                tags:
                  - Configuration
              post:
                description: >-
                  Update the global configuration of conversations on your
                  account
                tags:
                  - Configuration
            /v1/Configuration/Addresses:
              description: >-
                Address Configuration resource manages the configurations
                related to a unique address within Conversations
              get:
                description: Retrieve a list of address configurations for an account
                tags:
                  - Configuration
                  - Addresses
              post:
                description: Create a new address configuration
                tags:
                  - Configuration
                  - Addresses
            /v1/Configuration/Addresses/{Sid}:
              description: >-
                Address Configuration resource manages the configurations
                related to a unique address within Conversations
              get:
                description: 'Fetch an address configuration '
                tags:
                  - Configuration
                  - Addresses
                  - Sid
              post:
                description: Update an existing address configuration
                tags:
                  - Configuration
                  - Addresses
                  - Sid
              delete:
                description: Remove an existing address configuration
                tags:
                  - Configuration
                  - Addresses
                  - Sid
            /v1/Configuration/Webhooks:
              description: >-
                A Webhook resource manages a service-level set of callback URLs
                and their configuration for receiving all conversation events.
              get:
                description: ''
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
              post:
                description: ''
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
            /v1/Conversations:
              description: >-
                A Conversation resource represents an omnichannel group
                conversation with an ordered list of messages and a participant
                roster.
              post:
                description: Create a new conversation in your account's default service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
              get:
                description: >-
                  Retrieve a list of conversations in your account's default
                  service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
            /v1/Conversations/{Sid}:
              description: >-
                A Conversation resource represents an omnichannel group
                conversation with an ordered list of messages and a participant
                roster.
              post:
                description: >-
                  Update an existing conversation in your account's default
                  service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
              delete:
                description: Remove a conversation from your account's default service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
              get:
                description: Fetch a conversation from your account's default service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
            /v1/Conversations/{ConversationSid}/Messages:
              description: A Message resource represents a message in a conversation.
              post:
                description: Add a new message to the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
              get:
                description: Retrieve a list of all messages in the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
            /v1/Conversations/{ConversationSid}/Messages/{Sid}:
              description: A Message resource represents a message in a conversation.
              post:
                description: Update an existing message in the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
              delete:
                description: Remove a message from the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
              get:
                description: Fetch a message from the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
            /v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}:
              description: >-
                A Message Receipt resource represents a delivery/read receipt of
                a message in a conversation.
              get:
                description: >-
                  Fetch the delivery and read receipts of the conversation
                  message
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
            /v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts:
              description: >-
                A Message Receipt resource represents a delivery/read receipt of
                a message in a conversation.
              get:
                description: >-
                  Retrieve a list of all delivery and read receipts of the
                  conversation message
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
            /v1/Conversations/{ConversationSid}/Participants:
              description: A Participant resource represents a member of the conversation.
              post:
                description: Add a new participant to the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
              get:
                description: Retrieve a list of all participants of the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
            /v1/Conversations/{ConversationSid}/Participants/{Sid}:
              description: A Participant resource represents a member of the conversation.
              post:
                description: Update an existing participant in the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
              delete:
                description: Remove a participant from the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
              get:
                description: Fetch a participant of the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
            /v1/Conversations/{ConversationSid}/Webhooks:
              description: >-
                A Scoped Webhook resource manages a set of callback URLs and
                their configuration for receiving events specific to one
                conversation.
              get:
                description: Retrieve a list of all webhooks scoped to the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
              post:
                description: Create a new webhook scoped to the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
            /v1/Conversations/{ConversationSid}/Webhooks/{Sid}:
              description: >-
                A Scoped Webhook resource manages a set of callback URLs and
                their configuration for receiving events specific to one
                conversation.
              get:
                description: Fetch the configuration of a conversation-scoped webhook
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
              post:
                description: Update an existing conversation-scoped webhook
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
              delete:
                description: Remove an existing webhook scoped to the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
            /v1/Credentials:
              description: A Credential resource represents a push notification credential.
              post:
                description: Add a new push notification credential to your account
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
              get:
                description: >-
                  Retrieve a list of all push notification credentials on your
                  account
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
            /v1/Credentials/{Sid}:
              description: A Credential resource represents a push notification credential.
              post:
                description: >-
                  Update an existing push notification credential on your
                  account
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
              delete:
                description: Remove a push notification credential from your account
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
              get:
                description: Fetch a push notification credential from your account
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
            /v1/ParticipantConversations:
              description: >-
                Participant Conversations resource represents a list of
                Conversations that this Participant belongs to belonging to a
                default conversation service.
              get:
                description: >-
                  Retrieve a list of all Conversations that this Participant
                  belongs to by identity or by address. Only one parameter
                  should be specified.
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
            /v1/Roles:
              description: >-
                A Role resource represents a set of permissions granted to a
                user within a service or a conversation.
              post:
                description: Create a new user role in your account's default service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
              get:
                description: >-
                  Retrieve a list of all user roles in your account's default
                  service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
            /v1/Roles/{Sid}:
              description: >-
                A Role resource represents a set of permissions granted to a
                user within a service or a conversation.
              post:
                description: Update an existing user role in your account's default service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
              delete:
                description: Remove a user role from your account's default service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
              get:
                description: Fetch a user role from your account's default service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
            /v1/Services:
              description: >-
                A Service resource is a top-level conversation resource
                container that serves as a data silo.
              post:
                description: Create a new conversation service on your account
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
              get:
                description: Retrieve a list of all conversation services on your account
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
            /v1/Services/{Sid}:
              description: >-
                A Service resource is a top-level conversation resource
                container that serves as a data silo.
              delete:
                description: >-
                  Remove a conversation service with all its nested resources
                  from your account
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
              get:
                description: Fetch a conversation service from your account
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
            /v1/Services/{ChatServiceSid}/Bindings/{Sid}:
              description: >-
                A Binding resource represents a push notification binding and
                its configuration, for delivering conversation events to mobile
                or web endpoints.
              delete:
                description: >-
                  Remove a push notification binding from the conversation
                  service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
              get:
                description: >-
                  Fetch a push notification binding from the conversation
                  service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
            /v1/Services/{ChatServiceSid}/Bindings:
              description: >-
                A Binding resource represents a push notification binding and
                its configuration, for delivering conversation events to mobile
                or web endpoints.
              get:
                description: >-
                  Retrieve a list of all push notification bindings in the
                  conversation service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
            /v1/Services/{ChatServiceSid}/Configuration:
              description: >-
                A Service Configuration resource manages service-level settings
                applicable to the Conversation API.
              get:
                description: Fetch the configuration of a conversation service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
              post:
                description: Update configuration settings of a conversation service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
            /v1/Services/{ChatServiceSid}/Conversations:
              description: >-
                A Service Conversation resource represents an omnichannel group
                conversation with an ordered list of messages and a participant
                roster.
              post:
                description: Create a new conversation in your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
              get:
                description: Retrieve a list of conversations in your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
            /v1/Services/{ChatServiceSid}/Conversations/{Sid}:
              description: >-
                A Service Conversation resource represents an omnichannel group
                conversation with an ordered list of messages and a participant
                roster.
              post:
                description: Update an existing conversation in your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
              delete:
                description: Remove a conversation from your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
              get:
                description: Fetch a conversation from your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages:
              description: >-
                A Service Message resource represents a message in a
                conversation within a specific service.
              post:
                description: Add a new message to the conversation in a specific service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
              get:
                description: Retrieve a list of all messages in the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}:
              description: >-
                A Service Message resource represents a message in a
                conversation within a specific service.
              post:
                description: Update an existing message in the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
              delete:
                description: Remove a message from the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
              get:
                description: Fetch a message from the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}:
              description: >-
                A Service Message Receipt resource represents a delivery/read
                receipt of a message in a conversation.
              get:
                description: >-
                  Fetch the delivery and read receipts of the conversation
                  message
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts:
              description: >-
                A Service Message Receipt resource represents a delivery/read
                receipt of a message in a conversation.
              get:
                description: >-
                  Retrieve a list of all delivery and read receipts of the
                  conversation message
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants:
              description: >-
                A Service Participant resource represents a member of the
                conversation within a specific service.
              post:
                description: >-
                  Add a new participant to the conversation in a specific
                  service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
              get:
                description: Retrieve a list of all participants of the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}:
              description: >-
                A Service Participant resource represents a member of the
                conversation within a specific service.
              post:
                description: Update an existing participant in the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
              delete:
                description: Remove a participant from the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
              get:
                description: Fetch a participant of the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks:
              description: >-
                A Conversation-scoped Webhook resource manages a set of callback
                URLs and their configuration for receiving events specific to
                one conversation.
              post:
                description: >-
                  Create a new webhook scoped to the conversation in a specific
                  service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
              get:
                description: Retrieve a list of all webhooks scoped to the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}:
              description: >-
                A Conversation-scoped Webhook resource manages a set of callback
                URLs and their configuration for receiving events specific to
                one conversation.
              post:
                description: Update an existing conversation-scoped webhook
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
              delete:
                description: Remove an existing webhook scoped to the conversation
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
              get:
                description: Fetch the configuration of a conversation-scoped webhook
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
            /v1/Services/{ChatServiceSid}/Configuration/Notifications:
              description: >-
                A Service Notification resource manages a set of settings to
                determine push notification behavior at service level.
              post:
                description: Update push notification service settings
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
              get:
                description: Fetch push notification service settings
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
            /v1/Services/{ChatServiceSid}/ParticipantConversations:
              description: >-
                Service Participant Conversations resource represents a list of
                Conversations that this Participant belongs to belonging to a
                specific conversation service.
              get:
                description: >-
                  Retrieve a list of all Conversations that this Participant
                  belongs to by identity or by address. Only one parameter
                  should be specified.
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
            /v1/Services/{ChatServiceSid}/Roles:
              description: >-
                A Service Role resource represents a set of permissions granted
                to a user within a service or a conversation.
              post:
                description: Create a new user role in your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
              get:
                description: Retrieve a list of all user roles in your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
            /v1/Services/{ChatServiceSid}/Roles/{Sid}:
              description: >-
                A Service Role resource represents a set of permissions granted
                to a user within a service or a conversation.
              post:
                description: Update an existing user role in your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
              delete:
                description: Remove a user role from your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
              get:
                description: Fetch a user role from your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
            /v1/Services/{ChatServiceSid}/Users:
              description: >-
                A Service User resource represents a conversation user belonging
                to a specific conversation service.
              post:
                description: Add a new conversation user to your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
              get:
                description: Retrieve a list of all conversation users in your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
            /v1/Services/{ChatServiceSid}/Users/{Sid}:
              description: >-
                A Service User resource represents a conversation user belonging
                to a specific conversation service.
              post:
                description: Update an existing conversation user in your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
              delete:
                description: Remove a conversation user from your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
              get:
                description: Fetch a conversation user from your service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
            /v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}:
              description: >-
                A Service User Conversation resource represents a conversation
                of the user belonging to a specific conversation service.
              post:
                description: Update a specific User Conversation.
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
              delete:
                description: Delete a specific User Conversation.
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
              get:
                description: Fetch a specific User Conversation.
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
            /v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations:
              description: >-
                A Service User Conversation resource represents a conversation
                of the user belonging to a specific conversation service.
              get:
                description: Retrieve a list of all User Conversations for the User.
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
            /v1/Services/{ChatServiceSid}/Configuration/Webhooks:
              description: >-
                A service webhook configuration resource manages a service-level
                set of callback URLs and their configuration for receiving all
                the corresponding service events.
              post:
                description: Update a specific Webhook.
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
              get:
                description: Fetch a specific service webhook configuration.
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
            /v1/Users:
              description: >-
                A User resource represents a conversation user belonging to a
                default conversation service.
              post:
                description: Add a new conversation user to your account's default service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
              get:
                description: >-
                  Retrieve a list of all conversation users in your account's
                  default service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
            /v1/Users/{Sid}:
              description: >-
                A User resource represents a conversation user belonging to a
                default conversation service.
              post:
                description: >-
                  Update an existing conversation user in your account's default
                  service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
              delete:
                description: Remove a conversation user from your account's default service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
              get:
                description: Fetch a conversation user from your account's default service
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
            /v1/Users/{UserSid}/Conversations/{ConversationSid}:
              description: >-
                A User Conversation resource represents a conversation of the
                user belonging to a default conversation service.
              post:
                description: Update a specific User Conversation.
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
              delete:
                description: Delete a specific User Conversation.
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
              get:
                description: Fetch a specific User Conversation.
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
            /v1/Users/{UserSid}/Conversations:
              description: >-
                A User Conversation resource represents a conversation of the
                user belonging to a default conversation service.
              get:
                description: Retrieve a list of all User Conversations for the User.
                tags:
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                  - Participants
                  - Credentials
                  - Participant
                  - Roles
                  - Services
                  - Chat
                  - Service
                  - Bindings
                  - Notifications
                  - Users
                  - User
          tags:
            - name: ConversationsV1AddressConfiguration
            - name: ConversationsV1Binding
            - name: ConversationsV1Configuration
            - name: ConversationsV1Conversation
            - name: ConversationsV1Credential
            - name: ConversationsV1DeliveryReceipt
            - name: ConversationsV1Message
            - name: ConversationsV1Notification
            - name: ConversationsV1Participant
            - name: ConversationsV1ParticipantConversation
            - name: ConversationsV1Role
            - name: ConversationsV1Service
            - name: ConversationsV1User
            - name: ConversationsV1UserConversation
            - name: ConversationsV1Webhook
          x-maturity:
            - name: GA
              description: This product is G
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: >-
                openapi-request-body-have-application-x-www-form-url-encoded-info
              message: Request Body Application X WWW Form URL Encoded
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
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
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
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
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
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
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
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-nullable-info
              message: Request Body Schema Properties Nullable
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/conversations-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/conversations-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-events-api
    name: Twilio Events API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Events
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Types:
              description: Event Types available
              get:
                description: Retrieve a paginated list of all the available Event Types.
                tags:
                  - Types
            /v1/Types/{Type}:
              description: Event Types available
              get:
                description: Fetch a specific Event Type.
                tags:
                  - Types
                  - Type
            /v1/Schemas/{Id}:
              description: Versioned Schema definitions for Event Types
              get:
                description: Fetch a specific schema with its nested versions.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
            /v1/Schemas:
              description: Versioned Schema definitions for Event Types
            /v1/Schemas/{Id}/Versions:
              description: Version of the Schema
              get:
                description: Retrieve a paginated list of versions of the schema.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
            /v1/Schemas/{Id}/Versions/{SchemaVersion}:
              description: Version of the Schema
              get:
                description: Fetch a specific schema and version.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
            /v1/Sinks/{Sid}:
              description: Sink destination to send events to
              get:
                description: Fetch a specific Sink.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
              delete:
                description: Delete a specific Sink.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
              post:
                description: Update a specific Sink
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
            /v1/Sinks:
              description: Sink destination to send events to
              post:
                description: Create a new Sink
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
              get:
                description: >-
                  Retrieve a paginated list of Sinks belonging to the account
                  used to make the request.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
            /v1/Sinks/{Sid}/Test:
              description: Test sink
              post:
                description: Create a new Sink Test Event for the given Sink.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                  - Test
            /v1/Sinks/{Sid}/Validate:
              description: Validate sink
              post:
                description: Validate that a test event for a Sink was received.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                  - Test
                  - Validate
            /v1/Subscriptions/{SubscriptionSid}/SubscribedEvents:
              description: Event subscribed to in the parent Subscription
              get:
                description: >-
                  Retrieve a list of all Subscribed Event types for a
                  Subscription.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                  - Test
                  - Validate
                  - Subscriptions
                  - Subscription
                  - Subscribed
                  - Events
              post:
                description: Add an event type to a Subscription.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                  - Test
                  - Validate
                  - Subscriptions
                  - Subscription
                  - Subscribed
                  - Events
            /v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}:
              description: Event subscribed to in the parent Subscription
              get:
                description: Read an Event for a Subscription.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                  - Test
                  - Validate
                  - Subscriptions
                  - Subscription
                  - Subscribed
                  - Events
              post:
                description: Update an Event for a Subscription.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                  - Test
                  - Validate
                  - Subscriptions
                  - Subscription
                  - Subscribed
                  - Events
              delete:
                description: Remove an event type from a Subscription.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                  - Test
                  - Validate
                  - Subscriptions
                  - Subscription
                  - Subscribed
                  - Events
            /v1/Subscriptions:
              description: Subscription to send Event Types to a Sink
              get:
                description: >-
                  Retrieve a paginated list of Subscriptions belonging to the
                  account used to make the request.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                  - Test
                  - Validate
                  - Subscriptions
                  - Subscription
                  - Subscribed
                  - Events
              post:
                description: Create a new Subscription.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                  - Test
                  - Validate
                  - Subscriptions
                  - Subscription
                  - Subscribed
                  - Events
            /v1/Subscriptions/{Sid}:
              description: Subscription to send Event Types to a Sink
              get:
                description: Fetch a specific Subscription.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                  - Test
                  - Validate
                  - Subscriptions
                  - Subscription
                  - Subscribed
                  - Events
              post:
                description: Update a Subscription.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                  - Test
                  - Validate
                  - Subscriptions
                  - Subscription
                  - Subscribed
                  - Events
              delete:
                description: Delete a specific Subscription.
                tags:
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                  - Test
                  - Validate
                  - Subscriptions
                  - Subscription
                  - Subscribed
                  - Events
          tags:
            - name: EventsV1EventType
            - name: EventsV1Schema
            - name: EventsV1SchemaVersion
            - name: EventsV1Sink
            - name: EventsV1SinkTest
            - name: EventsV1SinkValidate
            - name: EventsV1SubscribedEvent
            - name: EventsV1Subscription
          x-maturity:
            - name: GA
              description: This product is G
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
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
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
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
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: >-
                openapi-request-body-have-application-x-www-form-url-encoded-info
              message: Request Body Application X WWW Form URL Encoded
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
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
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/events-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/events-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-frontline-api
    name: Twilio Frontline API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Frontline
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Users/{Sid}:
              description: A User resource represents a frontline user.
              get:
                description: Fetch a frontline user
                tags:
                  - Users
                  - Sid
              post:
                description: Update an existing frontline user
                tags:
                  - Users
                  - Sid
          tags:
            - name: FrontlineV1User
          x-maturity:
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. U
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: >-
                openapi-request-body-have-application-x-www-form-url-encoded-info
              message: Request Body Application X WWW Form URL Encoded
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/frontline-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/frontline-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-insights-api
    name: Twilio Insights API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Insights
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Voice/Settings:
              description: 'TODO: Resource-level docs'
              get:
                description: Get the Voice Insights Settings.
                tags:
                  - Voice
                  - Settings
              post:
                description: Update a specific Voice Insights Setting.
                tags:
                  - Voice
                  - Settings
            /v1/Voice/{CallSid}/Annotation:
              description: 'TODO: Resource-level docs'
              post:
                description: Update an Annotation for a specific Call.
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
              get:
                description: Get the Annotation for a specific Call.
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
            /v1/Voice/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
            /v1/Voice/Summaries:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Call Summaries.
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
            /v1/Conferences/{ConferenceSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a specific Conference Summary.
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
                  - Conferences
                  - Conference
            /v1/Conferences:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Conference Summaries.
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
                  - Conferences
                  - Conference
            /v1/Conferences/{ConferenceSid}/Participants/{ParticipantSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Get a specific Conference Participant Summary for a
                  Conference.
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
                  - Conferences
                  - Conference
                  - Participants
                  - Participant
            /v1/Conferences/{ConferenceSid}/Participants:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Get a list of Conference Participants Summaries for a
                  Conference.
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
                  - Conferences
                  - Conference
                  - Participants
                  - Participant
            /v1/Voice/{CallSid}/Events:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Call Insight Events for a Call.
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
                  - Conferences
                  - Conference
                  - Participants
                  - Participant
                  - Events
            /v1/Voice/{CallSid}/Metrics:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Call Metrics for a Call.
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
                  - Conferences
                  - Conference
                  - Participants
                  - Participant
                  - Events
                  - Metrics
            /v1/Voice/{CallSid}/Summary:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a specific Call Summary.
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
                  - Conferences
                  - Conference
                  - Participants
                  - Participant
                  - Events
                  - Metrics
                  - Summary
            /v1/Video/Rooms/{RoomSid}/Participants/{ParticipantSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Get Video Log Analyzer data for a Room Participant.
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
                  - Conferences
                  - Conference
                  - Participants
                  - Participant
                  - Events
                  - Metrics
                  - Summary
                  - Video
                  - Rooms
                  - Room
            /v1/Video/Rooms/{RoomSid}/Participants:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of room participants.
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
                  - Conferences
                  - Conference
                  - Participants
                  - Participant
                  - Events
                  - Metrics
                  - Summary
                  - Video
                  - Rooms
                  - Room
            /v1/Video/Rooms/{RoomSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Get Video Log Analyzer data for a Room.
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
                  - Conferences
                  - Conference
                  - Participants
                  - Participant
                  - Events
                  - Metrics
                  - Summary
                  - Video
                  - Rooms
                  - Room
            /v1/Video/Rooms:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Programmable Video Rooms.
                tags:
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
                  - Conferences
                  - Conference
                  - Participants
                  - Participant
                  - Events
                  - Metrics
                  - Summary
                  - Video
                  - Rooms
                  - Room
          tags:
            - name: InsightsV1Annotation
            - name: InsightsV1Call
            - name: InsightsV1CallSummaries
            - name: InsightsV1CallSummary
            - name: InsightsV1Conference
            - name: InsightsV1ConferenceParticipant
            - name: InsightsV1Event
            - name: InsightsV1Metric
            - name: InsightsV1Participant
            - name: InsightsV1Room
            - name: InsightsV1Setting
          x-maturity:
            - name: GA
              description: This product is Generally Available.
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with caution.
            - name: Preview
              description: >-
                PLEASE NOTE that this is a Preview product that is subject to
                change. Use it with caution. If you currently do not have
                developer preview access, please contact https://www.twilio
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
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
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: >-
                openapi-request-body-have-application-x-www-form-url-encoded-info
              message: Request Body Application X WWW Form URL Encoded
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-nullable-info
              message: Request Body Schema Properties Nullable
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/insights-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/insights-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-intelligence-api
    name: Twilio Intelligence API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Intelligence
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v2/Transcripts/{Sid}/Media:
              description: 'TODO: Resource-level docs'
              get:
                description: Get download URLs for media if possible
                tags:
                  - Transcripts
                  - Sid
                  - Media
            /v2/Transcripts/{TranscriptSid}/OperatorResults:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of Operator Results for the given Transcript.
                tags:
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
            /v2/Transcripts/{TranscriptSid}/OperatorResults/{OperatorSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Operator Result for the given Transcript.
                tags:
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
            /v2/Transcripts/{TranscriptSid}/Sentences:
              description: 'TODO: Resource-level docs'
              get:
                description: Get all Transcript Sentences by TranscriptSid
                tags:
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
            /v2/Services:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Service for the given Account
                tags:
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
              get:
                description: Retrieves a list of all Services for an account.
                tags:
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
            /v2/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Service.
                tags:
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
              get:
                description: Fetch a specific Service.
                tags:
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
              post:
                description: Update a specific Service.
                tags:
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
            /v2/Transcripts:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Transcript for the service
                tags:
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
              get:
                description: Retrieve a list of Transcripts for a given service.
                tags:
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
            /v2/Transcripts/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Transcript.
                tags:
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
              delete:
                description: Delete a specific Transcript.
                tags:
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
          tags:
            - name: IntelligenceV2Media
            - name: IntelligenceV2OperatorResult
            - name: IntelligenceV2Sentence
            - name: IntelligenceV2Service
            - name: IntelligenceV2Transcript
          x-maturity:
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. U
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
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
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/intelligence-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/intelligence-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-ip-messaging-api
    name: Twilio IP Messaging API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Ip_messaging
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v2/Services/{ServiceSid}/Bindings:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
            /v2/Services/{ServiceSid}/Bindings/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
            /v2/Services/{ServiceSid}/Channels/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
            /v2/Services/{ServiceSid}/Channels:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Webhooks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Webhooks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
            /v2/Credentials:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
            /v2/Credentials/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Invites/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Invites:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Members:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Messages:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
            /v2/Services/{ServiceSid}/Roles/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
            /v2/Services/{ServiceSid}/Roles:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
            /v2/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
            /v2/Services:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
            /v2/Services/{ServiceSid}/Users/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
                  - Users
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
                  - Users
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
                  - Users
            /v2/Services/{ServiceSid}/Users:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
                  - Users
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
                  - Users
            /v2/Services/{ServiceSid}/Users/{UserSid}/Bindings:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
                  - Users
                  - User
            /v2/Services/{ServiceSid}/Users/{UserSid}/Bindings/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
                  - Users
                  - User
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
                  - Users
                  - User
            /v2/Services/{ServiceSid}/Users/{UserSid}/Channels:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
                  - Users
                  - User
            /v2/Services/{ServiceSid}/Users/{UserSid}/Channels/{ChannelSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
                  - Users
                  - User
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
                  - Users
                  - User
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                  - Members
                  - Messages
                  - Roles
                  - Users
                  - User
          tags:
            - name: IpMessagingV2Binding
            - name: IpMessagingV2Channel
            - name: IpMessagingV2Credential
            - name: IpMessagingV2Invite
            - name: IpMessagingV2Member
            - name: IpMessagingV2Message
            - name: IpMessagingV2Role
            - name: IpMessagingV2Service
            - name: IpMessagingV2User
            - name: IpMessagingV2UserBinding
            - name: IpMessagingV2UserChannel
            - name: IpMessagingV2Webhook
          x-maturity:
            - name: GA
              description: This product is G
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-description-info
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: >-
                openapi-request-body-have-application-x-www-form-url-encoded-info
              message: Request Body Application X WWW Form URL Encoded
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
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
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-info
              message: Request Body Schema Properties Nullable
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/ip-message-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/ip-message-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-marketplace-api
    name: Twilio Marketplace API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/add-ons/marketplace
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/add-ons/marketplace
      - type: OpenAPI
        data:
          info:
            title: Marketplace API
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /marketplace/AvailableAddOns/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Fetch an instance of an Add-on currently available to be
                  installed.
                tags:
                  - Available
                  - Add
                  - Ons
                  - Sid
            /marketplace/AvailableAddOns:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of Add-ons currently available to be
                  installed.
                tags:
                  - Available
                  - Add
                  - Ons
                  - Sid
            /marketplace/AvailableAddOns/{AvailableAddOnSid}/Extensions/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch an instance of an Extension for the Available Add-on.
                tags:
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
            /marketplace/AvailableAddOns/{AvailableAddOnSid}/Extensions:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of Extensions for the Available Add-on.
                tags:
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
            /marketplace/InstalledAddOns:
              description: 'TODO: Resource-level docs'
              post:
                description: Install an Add-on for the Account specified.
                tags:
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
              get:
                description: >-
                  Retrieve a list of Add-ons currently installed on this
                  Account.
                tags:
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
            /marketplace/InstalledAddOns/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Remove an Add-on installation from your account
                tags:
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
              get:
                description: >-
                  Fetch an instance of an Add-on currently installed on this
                  Account.
                tags:
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
              post:
                description: Update an Add-on installation for the Account specified.
                tags:
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
            /marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch an instance of an Extension for the Installed Add-on.
                tags:
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
              post:
                description: Update an Extension for an Add-on installation.
                tags:
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
            /marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of Extensions for the Installed Add-on.
                tags:
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
          tags:
            - null
            - null
            - null
            - null
          x-maturity:
            - name: Preview
              description: >-
                PLEASE NOTE that this is a Preview product that is subject to
                change. Use it with caution. If you currently do not have
                developer preview access, please contact https://www.twilio.
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
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
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
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
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-security-schemes-info
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/marketplace-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/marketplace-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-media-api
    name: Twilio Media API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/media
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/media
      - type: OpenAPI
        data:
          info:
            title: Twilio - Media
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/MediaProcessors:
              description: >-
                A MediaProcessor resource provides the ability to capture
                content from a web application with a Twilio Media Extension to
                create a livestream.
              post:
                description: ''
                tags:
                  - Media
                  - Processors
              get:
                description: Returns a list of MediaProcessors.
                tags:
                  - Media
                  - Processors
            /v1/MediaProcessors/{Sid}:
              description: >-
                A MediaProcessor resource provides the ability to capture
                content from a web application with a Twilio Media Extension to
                create a livestream.
              get:
                description: Returns a single MediaProcessor resource identified by a SID.
                tags:
                  - Media
                  - Processors
                  - Sid
              post:
                description: Updates a MediaProcessor resource identified by a SID.
                tags:
                  - Media
                  - Processors
                  - Sid
            /v1/MediaRecordings/{Sid}:
              description: >-
                A MediaRecording resource exposes recording metadata and allows
                the deletion of a particular recording.
              delete:
                description: Deletes a MediaRecording resource identified by a SID.
                tags:
                  - Media
                  - Processors
                  - Sid
                  - Recordings
              get:
                description: Returns a single MediaRecording resource identified by a SID.
                tags:
                  - Media
                  - Processors
                  - Sid
                  - Recordings
            /v1/MediaRecordings:
              description: >-
                A MediaRecording resource exposes recording metadata and allows
                the deletion of a particular recording.
              get:
                description: Returns a list of MediaRecordings.
                tags:
                  - Media
                  - Processors
                  - Sid
                  - Recordings
            /v1/PlayerStreamers/{Sid}:
              description: >-
                A PlayerStreamer resource provides the ability to send a
                livestream to a JavaScript, iOS, or Android Player SDK.
              get:
                description: Returns a single PlayerStreamer resource identified by a SID.
                tags:
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                  - Player
                  - Streamers
              post:
                description: Updates a PlayerStreamer resource identified by a SID.
                tags:
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                  - Player
                  - Streamers
            /v1/PlayerStreamers:
              description: >-
                A PlayerStreamer resource provides the ability to send a
                livestream to a JavaScript, iOS, or Android Player SDK.
              post:
                description: ''
                tags:
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                  - Player
                  - Streamers
              get:
                description: Returns a list of PlayerStreamers.
                tags:
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                  - Player
                  - Streamers
            /v1/PlayerStreamers/{Sid}/PlaybackGrant:
              description: >-
                A PlaybackGrant resource allows developers to generate a grant
                to initialize the Twilio Live Player SDK and connect to a
                livestream.
              post:
                description: ''
                tags:
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                  - Player
                  - Streamers
                  - Playback
                  - Grant
              get:
                description: >-
                  **This method is not enabled.** Returns a single PlaybackGrant
                  resource identified by a SID.
                tags:
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                  - Player
                  - Streamers
                  - Playback
                  - Grant
          tags:
            - name: MediaV1MediaProcessor
            - name: MediaV1MediaRecording
            - name: MediaV1PlaybackGrant
            - name: MediaV1PlayerStreamer
          x-maturity:
            - name: GA
              description: This product is Generally Available.
            - name: Preview
              description: >-
                PLEASE NOTE that this is a Preview product that is subject to
                change. Use it with caution. If you currently do not have
                developer preview access, please contact https://www.twilio
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-description-info
              message: Operation Description
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
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
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
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/media-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/media-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-messaging-api
    name: Twilio Messaging API
    description: >-
      Send and receive messages via SMS, MMS, WhatsApp, Facebook Messenger, and
      more through our Messaging and Conversations APIs.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/en-us/ahoy
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/en-us/messaging
      - type: OpenAPI
        url: https://www.twilio.com/en-us/sms/pricing/us
      - type: OpenAPI
        data:
          info:
            title: Twilio - Messaging
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Services/{ServiceSid}/AlphaSenders:
              description: >-
                A Messaging Service resource to add, fetch or remove an Alpha
                Sender ID from a Messaging Service.
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
            /v1/Services/{ServiceSid}/AlphaSenders/{Sid}:
              description: >-
                A Messaging Service resource to add, fetch or remove an Alpha
                Sender ID from a Messaging Service.
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
            /v1/a2p/BrandRegistrations/{BrandRegistrationSid}/SmsOtp:
              description: >-
                A Messaging Service resource to retry OTP verification for Sole
                Proprietor Brand Registrations.
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
            /v1/a2p/BrandRegistrations/{Sid}:
              description: >-
                A Messaging Service resource to add and fetch Brand
                Registrations.
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
            /v1/a2p/BrandRegistrations:
              description: >-
                A Messaging Service resource to add and fetch Brand
                Registrations.
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
            /v1/a2p/BrandRegistrations/{BrandSid}/Vettings:
              description: A Messaging Service resource to add and get Brand Vettings.
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
            /v1/a2p/BrandRegistrations/{BrandSid}/Vettings/{BrandVettingSid}:
              description: A Messaging Service resource to add and get Brand Vettings.
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
            /v1/Services/{MessagingServiceSid}/ChannelSenders:
              description: >-
                A Messaging Service resource to read, fetch all Channel Senders
                associated with a Messaging Service.
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
            /v1/Services/{MessagingServiceSid}/ChannelSenders/{Sid}:
              description: >-
                A Messaging Service resource to read, fetch all Channel Senders
                associated with a Messaging Service.
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
            /v1/Deactivations:
              description: >-
                A Deactivation resource to retrieve a list of United States
                phone numbers that have been deactivated by mobile carriers on a
                specific date.
              get:
                description: >-
                  Fetch a list of all United States numbers that have been
                  deactivated on a specific date.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
            /v1/LinkShortening/Domains/{DomainSid}/Certificate:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
            /v1/LinkShortening/Domains/{DomainSid}/Config:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
            /v1/LinkShortening/MessagingService/{MessagingServiceSid}/DomainConfig:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
            /v1/Services/PreregisteredUsa2p:
              description: >-
                Resource to associate preregistered campaign with Messaging
                Service.
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
            /v1/LinkShortening/Domains/{DomainSid}/MessagingServices/{MessagingServiceSid}:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
            /v1/LinkShortening/MessagingServices/{MessagingServiceSid}/Domain:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
            /v1/Services/{ServiceSid}/PhoneNumbers:
              description: >-
                A Messaging Service resource to add, fetch or remove phone
                numbers from a Messaging Service.
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
            /v1/Services/{ServiceSid}/PhoneNumbers/{Sid}:
              description: >-
                A Messaging Service resource to add, fetch or remove phone
                numbers from a Messaging Service.
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
            /v1/Services:
              description: >-
                A Messaging Service resource to create, fetch, update, delete or
                add/remove senders from Messaging Services.
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
            /v1/Services/{Sid}:
              description: >-
                A Messaging Service resource to create, fetch, update, delete or
                add/remove senders from Messaging Services.
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
            /v1/Services/{ServiceSid}/ShortCodes:
              description: >-
                A Messaging Service resource to add, fetch or remove short code
                numbers from a Messaging Service.
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
            /v1/Services/{ServiceSid}/ShortCodes/{Sid}:
              description: >-
                A Messaging Service resource to add, fetch or remove short code
                numbers from a Messaging Service.
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
            /v1/Tollfree/Verifications/{Sid}:
              description: A Messaging resource to add and fetch Tollfree Verifications.
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
                  - Tollfree
                  - Verifications
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
                  - Tollfree
                  - Verifications
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
                  - Tollfree
                  - Verifications
            /v1/Tollfree/Verifications:
              description: A Messaging resource to add and fetch Tollfree Verifications.
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
                  - Tollfree
                  - Verifications
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
                  - Tollfree
                  - Verifications
            /v1/Services/{MessagingServiceSid}/Compliance/Usa2p:
              description: >-
                A service for (fetch/create/delete) A2P Campaign for a Messaging
                Service
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
                  - Tollfree
                  - Verifications
                  - Compliance
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
                  - Tollfree
                  - Verifications
                  - Compliance
            /v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}:
              description: >-
                A service for (fetch/create/delete) A2P Campaign for a Messaging
                Service
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
                  - Tollfree
                  - Verifications
                  - Compliance
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
                  - Tollfree
                  - Verifications
                  - Compliance
            /v1/Services/{MessagingServiceSid}/Compliance/Usa2p/Usecases:
              description: >-
                Messaging Service Use Case resource. Fetch possible use cases
                for service. The Use Cases API returns an empty list if there is
                an issue with the customer's A2P brand registration. This Brand
                cannot register any campaign use cases. Customers are requested
                to contact support with their A2P brand information.
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
                  - Tollfree
                  - Verifications
                  - Compliance
                  - Usecases
            /v1/Services/Usecases:
              description: >-
                Use Case resource. Fetch possible use cases for a Messaging
                Service.
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                  - Brand
                  - Registrations
                  - Registration
                  - Sms
                  - Otp
                  - Vettings
                  - Vetting
                  - Messaging
                  - Channel
                  - Deactivations
                  - Link
                  - Shortening
                  - Domains
                  - Domain
                  - Certificate
                  - Config
                  - Preregistered
                  - Usa2p
                  - Phone
                  - Numbers
                  - Short
                  - Codes
                  - Tollfree
                  - Verifications
                  - Compliance
                  - Usecases
          tags:
            - name: MessagingV1AlphaSender
            - name: MessagingV1BrandRegistration
            - name: MessagingV1BrandRegistrationOtp
            - name: MessagingV1BrandVetting
            - name: MessagingV1ChannelSender
            - name: MessagingV1Deactivations
            - name: MessagingV1DomainCerts
            - name: MessagingV1DomainConfig
            - name: MessagingV1DomainConfigMessagingService
            - name: MessagingV1ExternalCampaign
            - name: MessagingV1LinkshorteningMessagingService
            - name: MessagingV1LinkshorteningMessagingServiceDomainAssociation
            - name: MessagingV1PhoneNumber
            - name: MessagingV1Service
            - name: MessagingV1ShortCode
            - name: MessagingV1TollfreeVerification
            - name: MessagingV1UsAppToPerson
            - name: MessagingV1UsAppToPersonUsecase
            - name: MessagingV1Usecase
          x-maturity:
            - name: GA
              description: This product is Generally Available.
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. U
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
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
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-response-get-200-status-code-error
              message: A GET operation should have a 200 status code for the response.
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/messaging-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/messaging-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-microvisor-api
    name: Twilio Microvisor API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Microvisor
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Configs:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Configs for an Account.
                tags:
                  - Configs
              post:
                description: Create a config for an Account.
                tags:
                  - Configs
            /v1/Configs/{Key}:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a Config for an Account.
                tags:
                  - Configs
                  - Key
              post:
                description: Update a config for an Account.
                tags:
                  - Configs
                  - Key
              delete:
                description: Delete a config for an Account.
                tags:
                  - Configs
                  - Key
            /v1/Secrets:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Secrets for an Account.
                tags:
                  - Configs
                  - Key
                  - Secrets
              post:
                description: Create a secret for an Account.
                tags:
                  - Configs
                  - Key
                  - Secrets
            /v1/Secrets/{Key}:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a Secret for an Account.
                tags:
                  - Configs
                  - Key
                  - Secrets
              post:
                description: Update a secret for an Account.
                tags:
                  - Configs
                  - Key
                  - Secrets
              delete:
                description: Delete a secret for an Account.
                tags:
                  - Configs
                  - Key
                  - Secrets
            /v1/Apps:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Apps for an Account.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
            /v1/Apps/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific App.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
              delete:
                description: Delete a specific App.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
            /v1/Apps/{AppSid}/Manifest:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve the Manifest for an App.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
            /v1/Devices:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Devices registered with the Account.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
            /v1/Devices/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Device.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
              post:
                description: Update a specific Device.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
            /v1/Devices/{DeviceSid}/Configs:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Configs for a Device.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
              post:
                description: Create a config for a Microvisor Device.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
            /v1/Devices/{DeviceSid}/Configs/{Key}:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a Config for a Device.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
              post:
                description: Update a config for a Microvisor Device.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
              delete:
                description: Delete a config for a Microvisor Device.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
            /v1/Devices/{DeviceSid}/Secrets:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Secrets for a Device.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
              post:
                description: Create a secret for a Microvisor Device.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
            /v1/Devices/{DeviceSid}/Secrets/{Key}:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a Secret for a Device.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
              post:
                description: Update a secret for a Microvisor Device.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
              delete:
                description: Delete a secret for a Microvisor Device.
                tags:
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
          tags:
            - name: MicrovisorV1AccountConfig
            - name: MicrovisorV1AccountSecret
            - name: MicrovisorV1App
            - name: MicrovisorV1AppManifest
            - name: MicrovisorV1Device
            - name: MicrovisorV1DeviceConfig
            - name: MicrovisorV1DeviceSecret
          x-maturity:
            - name: Preview
              description: >-
                PLEASE NOTE that this is a Preview product that is subject to
                change. Use it with caution. If you currently do not have
                developer preview access, please contact https://www.twilio
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
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
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
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
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/microvisor-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/microvisor-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-monitor-api
    name: Twilio Monitor API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Monitor
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Alerts/{Sid}:
              description: Debugger alerts
              get:
                description: ''
                tags:
                  - Alerts
                  - Sid
            /v1/Alerts:
              description: Debugger alerts
              get:
                description: ''
                tags:
                  - Alerts
                  - Sid
            /v1/Events/{Sid}:
              description: Debugger events
              get:
                description: ''
                tags:
                  - Alerts
                  - Sid
                  - Events
            /v1/Events:
              description: Debugger events
              get:
                description: Returns a list of events in the account, sorted by event-date.
                tags:
                  - Alerts
                  - Sid
                  - Events
          tags:
            - name: MonitorV1Alert
            - name: MonitorV1Event
          x-maturity:
            - name: GA
              description: This product is G
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/monitor-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/monitor-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-notify-api
    name: Twilio Notify API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Notify
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Services/{ServiceSid}/Bindings/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
            /v1/Services/{ServiceSid}/Bindings:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
            /v1/Credentials:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
            /v1/Credentials/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
            /v1/Services/{ServiceSid}/Notifications:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                  - Notifications
            /v1/Services:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                  - Notifications
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                  - Notifications
            /v1/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                  - Notifications
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                  - Notifications
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                  - Notifications
          tags:
            - name: NotifyV1Binding
            - name: NotifyV1Credential
            - name: NotifyV1Notification
            - name: NotifyV1Service
          x-maturity:
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. U
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/notify-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/notify-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-numbers-api
    name: Twilio Numbers API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Numbers
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v2/HostedNumber/AuthorizationDocuments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific AuthorizationDocument.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
              delete:
                description: Cancel the AuthorizationDocument request.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
            /v2/HostedNumber/AuthorizationDocuments:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of AuthorizationDocuments belonging to the
                  account initiating the request.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
              post:
                description: >-
                  Create an AuthorizationDocument for authorizing the hosting of
                  phone number capabilities on Twilio's platform.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
            /v2/HostedNumber/Orders/Bulk/{BulkHostingSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific BulkHostedNumberOrder.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
            /v2/HostedNumber/Orders/Bulk:
              description: 'TODO: Resource-level docs'
            /v2/RegulatoryCompliance/Bundles:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Bundle.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
              get:
                description: Retrieve a list of all Bundles for an account.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
            /v2/RegulatoryCompliance/Bundles/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Bundle instance.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
              post:
                description: Updates a Bundle in an account.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
              delete:
                description: Delete a specific Bundle.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Creates a new copy of a Bundle. It will internally create
                  copies of all the bundle items (identities and documents) of
                  the original bundle
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
              get:
                description: Retrieve a list of all Bundles Copies for a Bundle.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
            /v2/HostedNumber/AuthorizationDocuments/{SigningDocumentSid}/DependentHostedNumberOrders:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of dependent HostedNumberOrders belonging to
                  the AuthorizationDocument.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
            /v2/RegulatoryCompliance/EndUsers:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new End User.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
              get:
                description: Retrieve a list of all End User for an account.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
            /v2/RegulatoryCompliance/EndUsers/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific End User Instance.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
              post:
                description: Update an existing End User.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
              delete:
                description: Delete a specific End User.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
            /v2/RegulatoryCompliance/EndUserTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all End-User Types.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
            /v2/RegulatoryCompliance/EndUserTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific End-User Type Instance.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations:
              description: 'TODO: Resource-level docs'
              post:
                description: Creates an evaluation for a bundle
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
              get:
                description: >-
                  Retrieve a list of Evaluations associated to the Bundle
                  resource.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Evaluation Instance.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
            /v2/HostedNumber/Orders/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific HostedNumberOrder.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
              delete:
                description: >-
                  Cancel the HostedNumberOrder (only available when the status
                  is in `received`).
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
            /v2/HostedNumber/Orders:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of HostedNumberOrders belonging to the account
                  initiating the request.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
              post:
                description: Host a phone number's capability on Twilio's platform.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
                  - Item
                  - Assignments
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
                  - Item
                  - Assignments
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
                  - Item
                  - Assignments
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
                  - Item
                  - Assignments
            /v2/RegulatoryCompliance/Regulations:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Regulations.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
                  - Item
                  - Assignments
                  - Regulations
            /v2/RegulatoryCompliance/Regulations/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Regulation Instance.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
                  - Item
                  - Assignments
                  - Regulations
            /v2/RegulatoryCompliance:
              description: 'TODO: Resource-level docs'
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/ReplaceItems:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Replaces all bundle items in the target bundle (specified in
                  the path) with all the bundle items of the source bundle
                  (specified by the from_bundle_sid body param)
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
                  - Item
                  - Assignments
                  - Regulations
                  - Replace
                  - Items
            /v2/RegulatoryCompliance/SupportingDocuments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Supporting Document.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
                  - Item
                  - Assignments
                  - Regulations
                  - Replace
                  - Items
                  - Supporting
              get:
                description: Retrieve a list of all Supporting Document for an account.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
                  - Item
                  - Assignments
                  - Regulations
                  - Replace
                  - Items
                  - Supporting
            /v2/RegulatoryCompliance/SupportingDocuments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Supporting Document Instance.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
                  - Item
                  - Assignments
                  - Regulations
                  - Replace
                  - Items
                  - Supporting
              post:
                description: Update an existing Supporting Document.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
                  - Item
                  - Assignments
                  - Regulations
                  - Replace
                  - Items
                  - Supporting
              delete:
                description: Delete a specific Supporting Document.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
                  - Item
                  - Assignments
                  - Regulations
                  - Replace
                  - Items
                  - Supporting
            /v2/RegulatoryCompliance/SupportingDocumentTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Supporting Document Types.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
                  - Item
                  - Assignments
                  - Regulations
                  - Replace
                  - Items
                  - Supporting
            /v2/RegulatoryCompliance/SupportingDocumentTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Supporting Document Type Instance.
                tags:
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                  - Regulatory
                  - Compliance
                  - Bundles
                  - Bundle
                  - Copies
                  - Signing
                  - Document
                  - Dependent
                  - End
                  - Users
                  - User
                  - Types
                  - Evaluations
                  - Item
                  - Assignments
                  - Regulations
                  - Replace
                  - Items
                  - Supporting
          tags:
            - name: NumbersV2AuthorizationDocument
            - name: NumbersV2BulkHostedNumberOrder
            - name: NumbersV2Bundle
            - name: NumbersV2BundleCopy
            - name: NumbersV2DependentHostedNumberOrder
            - name: NumbersV2EndUser
            - name: NumbersV2EndUserType
            - name: NumbersV2Evaluation
            - name: NumbersV2HostedNumberOrder
            - name: NumbersV2ItemAssignment
            - name: NumbersV2Regulation
            - name: NumbersV2ReplaceItems
            - name: NumbersV2SupportingDocument
            - name: NumbersV2SupportingDocumentType
          x-maturity:
            - name: GA
              description: This product is Generally Available.
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. U
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/numbers-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/numbers-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-pricing-api
    name: Twilio Pricing API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Pricing
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v2/Trunking/Countries:
              description: Trunking pricing by country
              get:
                description: ''
                tags:
                  - Trunking
                  - Countries
            /v2/Trunking/Countries/{IsoCountry}:
              description: Trunking pricing by country
              get:
                description: Fetch a specific Country.
                tags:
                  - Trunking
                  - Countries
                  - Iso
                  - Country
            /v2/Trunking/Numbers/{DestinationNumber}:
              description: Trunking pricing for a specific phone number
              get:
                description: >-
                  Fetch pricing information for a specific destination and,
                  optionally, origination phone number.
                tags:
                  - Trunking
                  - Countries
                  - Iso
                  - Country
                  - Numbers
                  - Destination
                  - Number
            /v2/Trunking/Numbers:
              description: Trunking pricing for a specific phone number
            /v2/Voice:
              description: Voice pricing
            /v2/Voice/Countries:
              description: Voice pricing by country
              get:
                description: ''
                tags:
                  - Trunking
                  - Countries
                  - Iso
                  - Country
                  - Numbers
                  - Destination
                  - Number
                  - Voice
            /v2/Voice/Countries/{IsoCountry}:
              description: Voice pricing by country
              get:
                description: Fetch a specific Country.
                tags:
                  - Trunking
                  - Countries
                  - Iso
                  - Country
                  - Numbers
                  - Destination
                  - Number
                  - Voice
            /v2/Voice/Numbers/{DestinationNumber}:
              description: Voice pricing for a specific phone number
              get:
                description: >-
                  Fetch pricing information for a specific destination and,
                  optionally, origination phone number.
                tags:
                  - Trunking
                  - Countries
                  - Iso
                  - Country
                  - Numbers
                  - Destination
                  - Number
                  - Voice
            /v2/Voice/Numbers:
              description: Voice pricing for a specific phone number
          tags:
            - name: PricingV2Country
            - name: PricingV2Number
          x-maturity:
            - name: GA
              description: This product is G
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
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
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/pricing-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/pricing-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-proxy-api
    name: Twilio Proxy API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Proxy
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of Interactions for a given
                  [Session](https://www.twilio.com/docs/proxy/api/session).
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
              delete:
                description: Delete a specific Interaction.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
            /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of all Interactions for a Session. A maximum
                  of 100 records will be returned per page.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
            /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Create a new message Interaction to send directly from your
                  system to one
                  [Participant](https://www.twilio.com/docs/proxy/api/participant). 
                  The `inbound` properties for the Interaction will always be
                  empty.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
            /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
            /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Participant.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
              delete:
                description: >-
                  Delete a specific Participant. This is a soft-delete. The
                  participant remains associated with the session and cannot be
                  re-added. Participants are only permanently deleted when the
                  [Session](https://www.twilio.com/docs/proxy/api/session) is
                  deleted.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
            /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Participants in a Session.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
              post:
                description: Add a new Participant to the Session
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
            /v1/Services/{ServiceSid}/PhoneNumbers:
              description: 'TODO: Resource-level docs'
              post:
                description: Add a Phone Number to a Service's Proxy Number Pool.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
              get:
                description: >-
                  Retrieve a list of all Phone Numbers in the Proxy Number Pool
                  for a Service. A maximum of 100 records will be returned per
                  page.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
            /v1/Services/{ServiceSid}/PhoneNumbers/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Phone Number from a Service.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
              get:
                description: Fetch a specific Phone Number.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
              post:
                description: Update a specific Proxy Number.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
            /v1/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Service.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
              delete:
                description: Delete a specific Service.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
              post:
                description: Update a specific Service.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
            /v1/Services:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of all Services for Twilio Proxy. A maximum of
                  100 records will be returned per page.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
              post:
                description: Create a new Service for Twilio Proxy
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
            /v1/Services/{ServiceSid}/Sessions/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Session.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
              delete:
                description: Delete a specific Session.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
              post:
                description: Update a specific Session.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
            /v1/Services/{ServiceSid}/Sessions:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of all Sessions for the Service. A maximum of
                  100 records will be returned per page.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
              post:
                description: Create a new Session
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
            /v1/Services/{ServiceSid}/ShortCodes:
              description: 'TODO: Resource-level docs'
              post:
                description: Add a Short Code to the Proxy Number Pool for the Service.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
                  - Short
                  - Codes
              get:
                description: >-
                  Retrieve a list of all Short Codes in the Proxy Number Pool
                  for the Service. A maximum of 100 records will be returned per
                  page.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
                  - Short
                  - Codes
            /v1/Services/{ServiceSid}/ShortCodes/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Short Code from a Service.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
                  - Short
                  - Codes
              get:
                description: Fetch a specific Short Code.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
                  - Short
                  - Codes
              post:
                description: Update a specific Short Code.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                  - Phone
                  - Numbers
                  - Short
                  - Codes
          tags:
            - name: ProxyV1Interaction
            - name: ProxyV1MessageInteraction
            - name: ProxyV1Participant
            - name: ProxyV1PhoneNumber
            - name: ProxyV1Service
            - name: ProxyV1Session
            - name: ProxyV1ShortCode
          x-maturity:
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. U
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/proxy-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/proxy-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-routes-api
    name: Twilio Routes API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Routes
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v2/PhoneNumbers/{PhoneNumber}:
              description: 'TODO: Resource-level docs'
              post:
                description: Assign an Inbound Processing Region to a phone number.
                tags:
                  - Phone
                  - Numbers
                  - Number
              get:
                description: >-
                  Fetch the Inbound Processing Region assigned to a phone
                  number.
                tags:
                  - Phone
                  - Numbers
                  - Number
            /v2/SipDomains/{SipDomain}:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Phone
                  - Numbers
                  - Number
                  - Sip
                  - Domains
                  - Domain
              get:
                description: ''
                tags:
                  - Phone
                  - Numbers
                  - Number
                  - Sip
                  - Domains
                  - Domain
            /v2/Trunks/{SipTrunkDomain}:
              description: 'TODO: Resource-level docs'
              post:
                description: Assign an Inbound Processing Region to a SIP Trunk
                tags:
                  - Phone
                  - Numbers
                  - Number
                  - Sip
                  - Domains
                  - Domain
                  - Trunks
                  - Trunk
              get:
                description: Fetch the Inbound Processing Region assigned to a SIP Trunk.
                tags:
                  - Phone
                  - Numbers
                  - Number
                  - Sip
                  - Domains
                  - Domain
                  - Trunks
                  - Trunk
          tags:
            - name: RoutesV2PhoneNumber
            - name: RoutesV2SipDomain
            - name: RoutesV2Trunk
          x-maturity:
            - name: GA
              description: This product is G
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
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
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/routes-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/routes-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-serverless-api
    name: Twilio Serverless API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Serverless
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Services/{ServiceSid}/Assets:
              description: >-
                A wrapper that represents a static file and groups the different
                Versions of the static file.
              get:
                description: Retrieve a list of all Assets.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
              post:
                description: Create a new Asset resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
            /v1/Services/{ServiceSid}/Assets/{Sid}:
              description: >-
                A wrapper that represents a static file and groups the different
                Versions of the static file.
              get:
                description: Retrieve a specific Asset resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
              delete:
                description: Delete an Asset resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
              post:
                description: Update a specific Asset resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
            /v1/Services/{ServiceSid}/Assets/{AssetSid}/Versions:
              description: The content of an Asset.
              get:
                description: Retrieve a list of all Asset Versions.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
            /v1/Services/{ServiceSid}/Assets/{AssetSid}/Versions/{Sid}:
              description: The content of an Asset.
              get:
                description: Retrieve a specific Asset Version.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
            /v1/Services/{ServiceSid}/Builds:
              description: >-
                A collection of Function Versions, Asset Versions, Dependencies,
                and a Runtime that form a deployable unit.
              get:
                description: Retrieve a list of all Builds.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
              post:
                description: >-
                  Create a new Build resource. At least one function version or
                  asset version is required.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
            /v1/Services/{ServiceSid}/Builds/{Sid}:
              description: >-
                A collection of Function Versions, Asset Versions, Dependencies,
                and a Runtime that form a deployable unit.
              get:
                description: Retrieve a specific Build resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
              delete:
                description: Delete a Build resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
            /v1/Services/{ServiceSid}/Builds/{Sid}/Status:
              description: The status of a Build resource.
              get:
                description: Retrieve a specific Build resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Deployments:
              description: >-
                An association of a Build with an Environment so that the Build
                is published in the Environment.
              get:
                description: Retrieve a list of all Deployments.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
              post:
                description: Create a new Deployment.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Deployments/{Sid}:
              description: >-
                An association of a Build with an Environment so that the Build
                is published in the Environment.
              get:
                description: Retrieve a specific Deployment.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
            /v1/Services/{ServiceSid}/Environments:
              description: >-
                Represents a deployed build of a given set of Functions and/or
                Assets at a specific URL.
              get:
                description: Retrieve a list of all environments.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
              post:
                description: Create a new environment.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
            /v1/Services/{ServiceSid}/Environments/{Sid}:
              description: >-
                Represents a deployed build of a given set of Functions and/or
                Assets at a specific URL.
              get:
                description: Retrieve a specific environment.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
              delete:
                description: Delete a specific environment.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
            /v1/Services/{ServiceSid}/Functions:
              description: >-
                A wrapper that represents a Serverless JavaScript function and
                groups the different  and groups the different Versions of this
                code.
              get:
                description: Retrieve a list of all Functions.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
              post:
                description: Create a new Function resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
            /v1/Services/{ServiceSid}/Functions/{Sid}:
              description: >-
                A wrapper that represents a Serverless JavaScript function and
                groups the different  and groups the different Versions of this
                code.
              get:
                description: Retrieve a specific Function resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
              delete:
                description: Delete a Function resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
              post:
                description: Update a specific Function resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
            /v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions:
              description: The content of a Function.
              get:
                description: Retrieve a list of all Function Version resources.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
            /v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions/{Sid}:
              description: The content of a Function.
              get:
                description: Retrieve a specific Function Version resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
            /v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions/{Sid}/Content:
              description: The code of a Function Version.
              get:
                description: >-
                  Retrieve a the content of a specific Function Version
                  resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
                  - Content
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Logs:
              description: >-
                A record of an event that occurred related to a function
                invocation.
              get:
                description: Retrieve a list of all logs.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
                  - Content
                  - Logs
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Logs/{Sid}:
              description: >-
                A record of an event that occurred related to a function
                invocation.
              get:
                description: Retrieve a specific log.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
                  - Content
                  - Logs
            /v1/Services:
              description: >-
                The top-level resource for a Serverless application, which
                serves as a container for the application environments.
              get:
                description: Retrieve a list of all Services.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
                  - Content
                  - Logs
              post:
                description: Create a new Service resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
                  - Content
                  - Logs
            /v1/Services/{Sid}:
              description: >-
                The top-level resource for a Serverless application, which
                serves as a container for the application environments.
              get:
                description: Retrieve a specific Service resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
                  - Content
                  - Logs
              delete:
                description: Delete a Service resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
                  - Content
                  - Logs
              post:
                description: Update a specific Service resource.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
                  - Content
                  - Logs
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Variables:
              description: A key and value pair that is specific to an Environment.
              get:
                description: Retrieve a list of all Variables.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
                  - Content
                  - Logs
                  - Variables
              post:
                description: Create a new Variable.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
                  - Content
                  - Logs
                  - Variables
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Variables/{Sid}:
              description: A key and value pair that is specific to an Environment.
              get:
                description: Retrieve a specific Variable.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
                  - Content
                  - Logs
                  - Variables
              post:
                description: Update a specific Variable.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
                  - Content
                  - Logs
                  - Variables
              delete:
                description: Delete a specific Variable.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                  - Environments
                  - Environment
                  - Deployments
                  - Functions
                  - Function
                  - Content
                  - Logs
                  - Variables
          tags:
            - name: ServerlessV1Asset
            - name: ServerlessV1AssetVersion
            - name: ServerlessV1Build
            - name: ServerlessV1BuildStatus
            - name: ServerlessV1Deployment
            - name: ServerlessV1Environment
            - name: ServerlessV1Function
            - name: ServerlessV1FunctionVersion
            - name: ServerlessV1FunctionVersionContent
            - name: ServerlessV1Log
            - name: ServerlessV1Service
            - name: ServerlessV1Variable
          x-maturity:
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. U
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
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
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/serverless-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/serverless-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-studio-api
    name: Twilio Studio API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Studio
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v2/Flows/{FlowSid}/Executions:
              description: Executions of Studio flows
              get:
                description: Retrieve a list of all Executions for the Flow.
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
              post:
                description: Triggers a new Execution for the Flow
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
            /v2/Flows/{FlowSid}/Executions/{Sid}:
              description: Executions of Studio flows
              get:
                description: Retrieve an Execution
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
              delete:
                description: Delete the Execution and all Steps relating to it.
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
              post:
                description: Update the status of an Execution to `ended`.
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
            /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Context:
              description: JSON context for executions
              get:
                description: Retrieve the most recent context for an Execution.
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
            /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps:
              description: Individual steps within an execution
              get:
                description: Retrieve a list of all Steps for an Execution.
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
            /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}:
              description: Individual steps within an execution
              get:
                description: Retrieve a Step.
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
            /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context:
              description: JSON context for an individual step within an execution
              get:
                description: Retrieve the context for an Execution Step.
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
            /v2/Flows:
              description: Studio flows
              post:
                description: Create a Flow.
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
              get:
                description: Retrieve a list of all Flows.
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
            /v2/Flows/{Sid}:
              description: Studio flows
              post:
                description: Update a Flow.
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
              get:
                description: Retrieve a specific Flow.
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
              delete:
                description: Delete a specific Flow.
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
            /v2/Flows/{Sid}/Revisions:
              description: Studio flows revisions
              get:
                description: Retrieve a list of all Flows revisions.
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
                  - Revisions
            /v2/Flows/{Sid}/Revisions/{Revision}:
              description: Studio flows revisions
              get:
                description: Retrieve a specific Flow revision.
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
                  - Revisions
                  - Revision
            /v2/Flows/Validate:
              description: Flow definition validator
              post:
                description: Validate flow JSON definition
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
                  - Revisions
                  - Revision
                  - Validate
            /v2/Flows/{Sid}/TestUsers:
              description: Test users of a flow
              get:
                description: Fetch flow test users
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
                  - Revisions
                  - Revision
                  - Validate
                  - Test
                  - Users
              post:
                description: Update flow test users
                tags:
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
                  - Revisions
                  - Revision
                  - Validate
                  - Test
                  - Users
          tags:
            - name: StudioV2Execution
            - name: StudioV2ExecutionContext
            - name: StudioV2ExecutionStep
            - name: StudioV2ExecutionStepContext
            - name: StudioV2Flow
            - name: StudioV2FlowRevision
            - name: StudioV2FlowTestUser
            - name: StudioV2FlowValidate
          x-maturity:
            - name: GA
              description: This product is G
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
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
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/studio-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/studio-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-super-sim-api
    name: Twilio Super SIM API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Supersim
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Sims/{SimSid}/BillingPeriods:
              description: Billing Period for an IoT Super SIM
              get:
                description: Retrieve a list of Billing Periods for a Super SIM.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
            /v1/ESimProfiles:
              description: eSIM Profiles that can be loaded onto consumer eUICC SIMs
              post:
                description: Order an eSIM Profile.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
              get:
                description: Retrieve a list of eSIM Profiles.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
            /v1/ESimProfiles/{Sid}:
              description: eSIM Profiles that can be loaded onto consumer eUICC SIMs
              get:
                description: Fetch an eSIM Profile.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
            /v1/Fleets:
              description: >-
                Configure shared settings inherited by all Super SIMs assigned
                to the Fleet
              post:
                description: Create a Fleet
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
              get:
                description: Retrieve a list of Fleets from your account.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
            /v1/Fleets/{Sid}:
              description: >-
                Configure shared settings inherited by all Super SIMs assigned
                to the Fleet
              get:
                description: Fetch a Fleet instance from your account.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
              post:
                description: >-
                  Updates the given properties of a Super SIM Fleet instance
                  from your account.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
            /v1/IpCommands:
              description: Machine-to-machine IP Commands sent to/from Super SIMs
              post:
                description: Send an IP Command to a Super SIM.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
              get:
                description: Retrieve a list of IP Commands from your account.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
            /v1/IpCommands/{Sid}:
              description: Machine-to-machine IP Commands sent to/from Super SIMs
              get:
                description: Fetch IP Command instance from your account.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
            /v1/Networks/{Sid}:
              description: Mobile operator networks to which Super SIMs can connect
              get:
                description: Fetch a Network resource.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
            /v1/Networks:
              description: Mobile operator networks to which Super SIMs can connect
              get:
                description: Retrieve a list of Network resources.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
            /v1/NetworkAccessProfiles:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Network Access Profile
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
              get:
                description: Retrieve a list of Network Access Profiles from your account.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
            /v1/NetworkAccessProfiles/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a Network Access Profile instance from your account.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
              post:
                description: >-
                  Updates the given properties of a Network Access Profile in
                  your account.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
            /v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks:
              description: >-
                Mobile operator networks which Network Access Profiles allow
                access to
              get:
                description: >-
                  Retrieve a list of Network Access Profile resource's Network
                  resource.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
                  - Profile
              post:
                description: Add a Network resource to the Network Access Profile resource.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
                  - Profile
            /v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks/{Sid}:
              description: >-
                Mobile operator networks which Network Access Profiles allow
                access to
              delete:
                description: >-
                  Remove a Network resource from the Network Access Profile
                  resource's.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
                  - Profile
              get:
                description: Fetch a Network Access Profile resource's Network resource.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
                  - Profile
            /v1/SettingsUpdates:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of Settings Updates.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
                  - Profile
                  - Settings
                  - Updates
            /v1/Sims:
              description: Individual IoT Super SIMs
              post:
                description: Register a Super SIM to your Account
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
                  - Profile
                  - Settings
                  - Updates
              get:
                description: Retrieve a list of Super SIMs from your account.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
                  - Profile
                  - Settings
                  - Updates
            /v1/Sims/{Sid}:
              description: Individual IoT Super SIMs
              get:
                description: Fetch a Super SIM instance from your account.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
                  - Profile
                  - Settings
                  - Updates
              post:
                description: >-
                  Updates the given properties of a Super SIM instance from your
                  account.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
                  - Profile
                  - Settings
                  - Updates
            /v1/Sims/{SimSid}/IpAddresses:
              description: IP Addresses for a Super SIM configured to use a VPN connection
              get:
                description: Retrieve a list of IP Addresses for the given Super SIM.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
                  - Profile
                  - Settings
                  - Updates
                  - Addresses
            /v1/SmsCommands:
              description: Machine-to-machine SMS Commands sent to/from SIMs
              post:
                description: Send SMS Command to a Sim.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
                  - Profile
                  - Settings
                  - Updates
                  - Addresses
                  - Sms
              get:
                description: Retrieve a list of SMS Commands from your account.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
                  - Profile
                  - Settings
                  - Updates
                  - Addresses
                  - Sms
            /v1/SmsCommands/{Sid}:
              description: Machine-to-machine SMS Commands sent to/from SIMs
              get:
                description: Fetch SMS Command instance from your account.
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
                  - Profile
                  - Settings
                  - Updates
                  - Addresses
                  - Sms
            /v1/UsageRecords:
              description: Usage information for Sim resources
              get:
                description: List UsageRecords
                tags:
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                  - Networks
                  - Network
                  - Access
                  - Profile
                  - Settings
                  - Updates
                  - Addresses
                  - Sms
                  - Usage
                  - Records
          tags:
            - name: SupersimV1BillingPeriod
            - name: SupersimV1EsimProfile
            - name: SupersimV1Fleet
            - name: SupersimV1IpCommand
            - name: SupersimV1Network
            - name: SupersimV1NetworkAccessProfile
            - name: SupersimV1NetworkAccessProfileNetwork
            - name: SupersimV1SettingsUpdate
            - name: SupersimV1Sim
            - name: SupersimV1SimIpAddress
            - name: SupersimV1SmsCommand
            - name: SupersimV1UsageRecord
          x-maturity:
            - name: GA
              description: This product is Generally Available.
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. U
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
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
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/super-sim-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/super-sim-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-sync-api
    name: Twilio Sync API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Sync
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Services/{ServiceSid}/Documents/{Sid}:
              description: Sync Document objects
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
            /v1/Services/{ServiceSid}/Documents:
              description: Sync Document objects
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
            /v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}:
              description: Sync document permissions
              get:
                description: Fetch a specific Sync Document Permission.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
              delete:
                description: Delete a specific Sync Document Permission.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
              post:
                description: Update an identity's access to a specific Sync Document.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
            /v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions:
              description: Sync document permissions
              get:
                description: >-
                  Retrieve a list of all Permissions applying to a Sync
                  Document.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
            /v1/Services/{Sid}:
              description: Containers for sync objects
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
            /v1/Services:
              description: Containers for sync objects
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
            /v1/Services/{ServiceSid}/Streams/{StreamSid}/Messages:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Stream Message.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
            /v1/Services/{ServiceSid}/Lists/{Sid}:
              description: Sync list objects
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
            /v1/Services/{ServiceSid}/Lists:
              description: Sync list objects
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
            /v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}:
              description: Items in a sync list
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
            /v1/Services/{ServiceSid}/Lists/{ListSid}/Items:
              description: Items in a sync list
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
            /v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}:
              description: Permissions for Sync list items
              get:
                description: Fetch a specific Sync List Permission.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
              delete:
                description: Delete a specific Sync List Permission.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
              post:
                description: Update an identity's access to a specific Sync List.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
            /v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions:
              description: Permissions for Sync list items
              get:
                description: Retrieve a list of all Permissions applying to a Sync List.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
            /v1/Services/{ServiceSid}/Maps/{Sid}:
              description: Sync map objects
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
            /v1/Services/{ServiceSid}/Maps:
              description: Sync map objects
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
            /v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}:
              description: Keys in a sync map
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
                  - Map
                  - Key
              delete:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
                  - Map
                  - Key
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
                  - Map
                  - Key
            /v1/Services/{ServiceSid}/Maps/{MapSid}/Items:
              description: Keys in a sync map
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
                  - Map
                  - Key
              get:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
                  - Map
                  - Key
            /v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Sync Map Permission.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
                  - Map
                  - Key
              delete:
                description: Delete a specific Sync Map Permission.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
                  - Map
                  - Key
              post:
                description: Update an identity's access to a specific Sync Map.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
                  - Map
                  - Key
            /v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Permissions applying to a Sync Map.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
                  - Map
                  - Key
            /v1/Services/{ServiceSid}/Streams/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Stream.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
                  - Map
                  - Key
              delete:
                description: Delete a specific Stream.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
                  - Map
                  - Key
              post:
                description: Update a specific Stream.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
                  - Map
                  - Key
            /v1/Services/{ServiceSid}/Streams:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Stream.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
                  - Map
                  - Key
              get:
                description: Retrieve a list of all Streams in a Service Instance.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                  - Streams
                  - Stream
                  - Messages
                  - Lists
                  - List
                  - Items
                  - Index
                  - Maps
                  - Map
                  - Key
          tags:
            - name: SyncV1Document
            - name: SyncV1DocumentPermission
            - name: SyncV1Service
            - name: SyncV1StreamMessage
            - name: SyncV1SyncList
            - name: SyncV1SyncListItem
            - name: SyncV1SyncListPermission
            - name: SyncV1SyncMap
            - name: SyncV1SyncMapItem
            - name: SyncV1SyncMapPermission
            - name: SyncV1SyncStream
          x-maturity:
            - name: GA
              description: This product is G
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: >-
                openapi-request-body-have-application-x-www-form-url-encoded-info
              message: Request Body Application X WWW Form URL Encoded
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
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
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/sync-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/sync-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-task-router-api
    name: Twilio Task Router API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Taskrouter
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Workspaces/{WorkspaceSid}/Activities/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
              delete:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
            /v1/Workspaces/{WorkspaceSid}/Activities:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
            /v1/Workspaces/{WorkspaceSid}/Events/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
            /v1/Workspaces/{WorkspaceSid}/Events:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
            /v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
              delete:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
            /v1/Workspaces/{WorkspaceSid}/Tasks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
            /v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}:
              description: Types of tasks
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
              delete:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
            /v1/Workspaces/{WorkspaceSid}/TaskChannels:
              description: Types of tasks
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
              delete:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
            /v1/Workspaces/{WorkspaceSid}/TaskQueues:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/CumulativeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
            /v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations:
              description: Tasks reserved for workers
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
            /v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}:
              description: Tasks reserved for workers
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
            /v1/Workspaces/{WorkspaceSid}/Workers:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
            /v1/Workspaces/{WorkspaceSid}/Workers/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
              delete:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations:
              description: Current and past reservations for a worker
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}:
              description: Current and past reservations for a worker
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
            /v1/Workspaces/{WorkspaceSid}/Workers/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
            /v1/Workspaces/{WorkspaceSid}/Workers/CumulativeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
            /v1/Workspaces/{WorkspaceSid}/Workers/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
            /v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
              delete:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
            /v1/Workspaces/{WorkspaceSid}/Workflows:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
            /v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/CumulativeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
                  - Workflow
            /v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
                  - Workflow
            /v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
                  - Workflow
            /v1/Workspaces/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
                  - Workflow
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
                  - Workflow
              delete:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
                  - Workflow
            /v1/Workspaces:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
                  - Workflow
              post:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
                  - Workflow
            /v1/Workspaces/{WorkspaceSid}/CumulativeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
                  - Workflow
            /v1/Workspaces/{WorkspaceSid}/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
                  - Workflow
            /v1/Workspaces/{WorkspaceSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                  - Real
                  - Time
                  - Statistics
                  - Queue
                  - Cumulative
                  - Reservations
                  - Workers
                  - Worker
                  - Workflows
                  - Workflow
          tags:
            - name: TaskrouterV1Activity
            - name: TaskrouterV1Event
            - name: TaskrouterV1Reservation
            - name: TaskrouterV1Task
            - name: TaskrouterV1TaskChannel
            - name: TaskrouterV1TaskQueue
            - name: TaskrouterV1TaskQueueCumulativeStatistics
            - name: TaskrouterV1TaskQueueRealTimeStatistics
            - name: TaskrouterV1TaskQueueStatistics
            - name: TaskrouterV1TaskQueuesStatistics
            - name: TaskrouterV1Worker
            - name: TaskrouterV1WorkerChannel
            - name: TaskrouterV1WorkerStatistics
            - name: TaskrouterV1WorkersCumulativeStatistics
            - name: TaskrouterV1WorkersRealTimeStatistics
            - name: TaskrouterV1WorkersStatistics
            - name: TaskrouterV1Workflow
            - name: TaskrouterV1WorkflowCumulativeStatistics
            - name: TaskrouterV1WorkflowRealTimeStatistics
            - name: TaskrouterV1WorkflowStatistics
            - name: TaskrouterV1Workspace
            - name: TaskrouterV1WorkspaceCumulativeStatistics
            - name: TaskrouterV1WorkspaceRealTimeStatistics
            - name: TaskrouterV1WorkspaceStatistics
          x-maturity:
            - name: GA
              description: This product is G
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: >-
                openapi-request-body-have-application-x-www-form-url-encoded-info
              message: Request Body Application X WWW Form URL Encoded
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
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
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
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
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/task-router-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/task-router-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-trunking-api
    name: Twilio Trunking API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Trunking
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Trunks/{TrunkSid}/CredentialLists/{Sid}:
              description: List of credentials for accessing a trunk
              get:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
              delete:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
            /v1/Trunks/{TrunkSid}/CredentialLists:
              description: List of credentials for accessing a trunk
              post:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
              get:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
            /v1/Trunks/{TrunkSid}/IpAccessControlLists/{Sid}:
              description: List of IP addresses for accessing a trunk
              get:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
              delete:
                description: Remove an associated IP Access Control List from a Trunk
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
            /v1/Trunks/{TrunkSid}/IpAccessControlLists:
              description: List of IP addresses for accessing a trunk
              post:
                description: Associate an IP Access Control List with a Trunk
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
              get:
                description: List all IP Access Control Lists for a Trunk
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
            /v1/Trunks/{TrunkSid}/OriginationUrls/{Sid}:
              description: >-
                Network element entry points into your communications
                infrastructure
              get:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
              delete:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
              post:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
            /v1/Trunks/{TrunkSid}/OriginationUrls:
              description: >-
                Network element entry points into your communications
                infrastructure
              post:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
              get:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
            /v1/Trunks/{TrunkSid}/PhoneNumbers/{Sid}:
              description: Phone numbers associated with trunks
              get:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
                  - Phone
                  - Numbers
              delete:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
                  - Phone
                  - Numbers
            /v1/Trunks/{TrunkSid}/PhoneNumbers:
              description: Phone numbers associated with trunks
              post:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
                  - Phone
                  - Numbers
              get:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
                  - Phone
                  - Numbers
            /v1/Trunks/{TrunkSid}/Recording:
              description: Recording settings for a trunk
              get:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
                  - Phone
                  - Numbers
                  - Recording
              post:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
                  - Phone
                  - Numbers
                  - Recording
            /v1/Trunks/{Sid}:
              description: Represents a SIP trunk
              get:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
                  - Phone
                  - Numbers
                  - Recording
              delete:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
                  - Phone
                  - Numbers
                  - Recording
              post:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
                  - Phone
                  - Numbers
                  - Recording
            /v1/Trunks:
              description: Represents a SIP trunk
              post:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
                  - Phone
                  - Numbers
                  - Recording
              get:
                description: ''
                tags:
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                  - Origination
                  - Urls
                  - Phone
                  - Numbers
                  - Recording
          tags:
            - name: TrunkingV1CredentialList
            - name: TrunkingV1IpAccessControlList
            - name: TrunkingV1OriginationUrl
            - name: TrunkingV1PhoneNumber
            - name: TrunkingV1Recording
            - name: TrunkingV1Trunk
          x-maturity:
            - name: GA
              description: This product is G
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/trunking-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/trunking-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-trust-hub-api
    name: Twilio Trust Hub API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Trusthub
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/ComplianceInquiries/Customers/Initialize:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Create a new Compliance Inquiry for the authenticated account.
                  This is necessary to start a new embedded session.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
            /v1/ComplianceInquiries/Customers/{CustomerId}/Initialize:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Resume a specific Compliance Inquiry that has expired, or
                  re-open a rejected Compliance Inquiry for editing.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
            /v1/ComplianceInquiries/Tollfree/Initialize:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Create a new Compliance Tollfree Verification Inquiry for the
                  authenticated account. This is necessary to start a new
                  embedded session.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
            /v1/CustomerProfiles:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Customer-Profile.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
              get:
                description: Retrieve a list of all Customer-Profiles for an account.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
            /v1/CustomerProfiles/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Customer-Profile instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
              post:
                description: Updates a Customer-Profile in an account.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
              delete:
                description: Delete a specific Customer-Profile.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
            /v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
            /v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
            /v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
            /v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
            /v1/CustomerProfiles/{CustomerProfileSid}/Evaluations:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Evaluation
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
              get:
                description: >-
                  Retrieve a list of Evaluations associated to the
                  customer_profile resource.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
            /v1/CustomerProfiles/{CustomerProfileSid}/Evaluations/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Evaluation Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
            /v1/EndUsers:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new End User.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
              get:
                description: Retrieve a list of all End User for an account.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
            /v1/EndUsers/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific End User Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
              post:
                description: Update an existing End User.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
              delete:
                description: Delete a specific End User.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
            /v1/EndUserTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all End-User Types.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
            /v1/EndUserTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific End-User Type Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
            /v1/Policies:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Policys.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
            /v1/Policies/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Policy Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
            /v1/SupportingDocuments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Supporting Document.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
              get:
                description: Retrieve a list of all Supporting Document for an account.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
            /v1/SupportingDocuments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Supporting Document Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
              post:
                description: Update an existing Supporting Document.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
              delete:
                description: Delete a specific Supporting Document.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
            /v1/SupportingDocumentTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Supporting Document Types.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
            /v1/SupportingDocumentTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Supporting Document Type Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
            /v1/TrustProducts:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Customer-Profile.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
              get:
                description: Retrieve a list of all Customer-Profiles for an account.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
            /v1/TrustProducts/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Customer-Profile instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
              post:
                description: Updates a Customer-Profile in an account.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
              delete:
                description: Delete a specific Customer-Profile.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
            /v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
                  - Product
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
                  - Product
            /v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
                  - Product
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
                  - Product
            /v1/TrustProducts/{TrustProductSid}/EntityAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
                  - Product
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
                  - Product
            /v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
                  - Product
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
                  - Product
            /v1/TrustProducts/{TrustProductSid}/Evaluations:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Evaluation
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
                  - Product
              get:
                description: >-
                  Retrieve a list of Evaluations associated to the trust_product
                  resource.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
                  - Product
            /v1/TrustProducts/{TrustProductSid}/Evaluations/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Evaluation Instance.
                tags:
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
                  - Entity
                  - Evaluations
                  - End
                  - Users
                  - User
                  - Types
                  - Policies
                  - Supporting
                  - Documents
                  - Document
                  - Trust
                  - Products
                  - Product
          tags:
            - name: TrusthubV1ComplianceInquiries
            - name: TrusthubV1ComplianceTollfreeInquiries
            - name: TrusthubV1CustomerProfiles
            - name: TrusthubV1CustomerProfilesChannelEndpointAssignment
            - name: TrusthubV1CustomerProfilesEntityAssignments
            - name: TrusthubV1CustomerProfilesEvaluations
            - name: TrusthubV1EndUser
            - name: TrusthubV1EndUserType
            - name: TrusthubV1Policies
            - name: TrusthubV1SupportingDocument
            - name: TrusthubV1SupportingDocumentType
            - name: TrusthubV1TrustProducts
            - name: TrusthubV1TrustProductsChannelEndpointAssignment
            - name: TrusthubV1TrustProductsEntityAssignments
            - name: TrusthubV1TrustProductsEvaluations
          x-maturity:
            - name: GA
              description: This product is G
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
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
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/trust-hub-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/trust-hub-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-verify-api
    name: Twilio Verify API
    description: >-
      Set up SMS or voice verifications to quickly authenticate users, fight
      fraud, and protect user accounts.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/en-us/trusted-activation/verify
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/en-us/trusted-activation/verify
      - type: OpenAPI
        url: https://www.twilio.com/en-us/verify/pricing
      - type: OpenAPI
        data:
          info:
            title: Twilio - Verify
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v2/Services/{ServiceSid}/AccessTokens:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new enrollment Access Token for the Entity
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
            /v2/Services/{ServiceSid}/AccessTokens/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch an Access Token for the Entity
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
            /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Bucket for a Rate Limit
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
              get:
                description: Retrieve a list of all Buckets for a Rate Limit.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
            /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}:
              description: 'TODO: Resource-level docs'
              post:
                description: Update a specific Bucket.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
              get:
                description: Fetch a specific Bucket.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
              delete:
                description: Delete a specific Bucket.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
            /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Challenge for the Factor
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
              get:
                description: Retrieve a list of all Challenges for a Factor.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
            /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Challenge.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
              post:
                description: Verify a specific Challenge.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
            /v2/Services/{ServiceSid}/Entities:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Entity for the Service
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
              get:
                description: Retrieve a list of all Entities for a Service.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
            /v2/Services/{ServiceSid}/Entities/{Identity}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Entity.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
              get:
                description: Fetch a specific Entity.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
            /v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Factor.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
              get:
                description: Fetch a specific Factor.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
              post:
                description: >-
                  Update a specific Factor. This endpoint can be used to Verify
                  a Factor if passed an `AuthPayload` param.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
            /v2/Services/{ServiceSid}/Entities/{Identity}/Factors:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Factors for an Entity.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
              post:
                description: Create a new Factor for the Entity
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
            /v2/Forms/{FormType}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch the forms for a specific Form Type.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
            /v2/Services/{ServiceSid}/MessagingConfigurations:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new MessagingConfiguration for a service.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
              get:
                description: Retrieve a list of all Messaging Configurations for a Service.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
            /v2/Services/{ServiceSid}/MessagingConfigurations/{Country}:
              description: 'TODO: Resource-level docs'
              post:
                description: Update a specific MessagingConfiguration
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
              get:
                description: Fetch a specific MessagingConfiguration.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
              delete:
                description: Delete a specific MessagingConfiguration.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
            /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{ChallengeSid}/Notifications:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Notification for the corresponding Challenge
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
            /v2/Services/{ServiceSid}/RateLimits:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Rate Limit for a Service
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
              get:
                description: Retrieve a list of all Rate Limits for a service.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
            /v2/Services/{ServiceSid}/RateLimits/{Sid}:
              description: 'TODO: Resource-level docs'
              post:
                description: Update a specific Rate Limit.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
              get:
                description: Fetch a specific Rate Limit.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
              delete:
                description: Delete a specific Rate Limit.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
            /v2/SafeList/Numbers:
              description: 'TODO: Resource-level docs'
              post:
                description: Add a new phone number to SafeList.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
            /v2/SafeList/Numbers/{PhoneNumber}:
              description: 'TODO: Resource-level docs'
              get:
                description: Check if a phone number exists in SafeList.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
              delete:
                description: Remove a phone number from SafeList.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
            /v2/Services:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Verification Service.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
              get:
                description: Retrieve a list of all Verification Services for an account.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
            /v2/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Verification Service Instance.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
              delete:
                description: Delete a specific Verification Service Instance.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
              post:
                description: Update a specific Verification Service.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
            /v2/Services/{ServiceSid}/Verifications:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Verification using a Service
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
                  - Verifications
            /v2/Services/{ServiceSid}/Verifications/{Sid}:
              description: 'TODO: Resource-level docs'
              post:
                description: Update a Verification status
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
                  - Verifications
              get:
                description: Fetch a specific Verification
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
                  - Verifications
            /v2/Attempts:
              description: 'TODO: Resource-level docs'
              get:
                description: List all the verification attempts for a given Account.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
                  - Verifications
                  - Attempts
            /v2/Attempts/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific verification attempt.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
                  - Verifications
                  - Attempts
            /v2/Attempts/Summary:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Get a summary of how many attempts were made and how many were
                  converted.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
                  - Verifications
                  - Attempts
                  - Summary
            /v2/Services/{ServiceSid}/VerificationCheck:
              description: 'TODO: Resource-level docs'
              post:
                description: challenge a specific Verification Check.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
                  - Verifications
                  - Attempts
                  - Summary
                  - Verification
                  - Check
            /v2/Templates:
              description: 'TODO: Resource-level docs'
              get:
                description: List all the available templates for a given Account.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
                  - Verifications
                  - Attempts
                  - Summary
                  - Verification
                  - Check
                  - Templates
            /v2/Services/{ServiceSid}/Webhooks:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Webhook for the Service
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
                  - Verifications
                  - Attempts
                  - Summary
                  - Verification
                  - Check
                  - Templates
                  - Webhooks
              get:
                description: Retrieve a list of all Webhooks for a Service.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
                  - Verifications
                  - Attempts
                  - Summary
                  - Verification
                  - Check
                  - Templates
                  - Webhooks
            /v2/Services/{ServiceSid}/Webhooks/{Sid}:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
                  - Verifications
                  - Attempts
                  - Summary
                  - Verification
                  - Check
                  - Templates
                  - Webhooks
              delete:
                description: Delete a specific Webhook.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
                  - Verifications
                  - Attempts
                  - Summary
                  - Verification
                  - Check
                  - Templates
                  - Webhooks
              get:
                description: Fetch a specific Webhook.
                tags:
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                  - Entities
                  - Identity
                  - Challenges
                  - Factors
                  - Forms
                  - Form
                  - Type
                  - Messaging
                  - Configurations
                  - Country
                  - Challenge
                  - Notifications
                  - Safe
                  - List
                  - Numbers
                  - Phone
                  - Number
                  - Verifications
                  - Attempts
                  - Summary
                  - Verification
                  - Check
                  - Templates
                  - Webhooks
          tags:
            - name: VerifyV2AccessToken
            - name: VerifyV2Bucket
            - name: VerifyV2Challenge
            - name: VerifyV2Entity
            - name: VerifyV2Factor
            - name: VerifyV2Form
            - name: VerifyV2MessagingConfiguration
            - name: VerifyV2NewFactor
            - name: VerifyV2Notification
            - name: VerifyV2RateLimit
            - name: VerifyV2Safelist
            - name: VerifyV2Service
            - name: VerifyV2Template
            - name: VerifyV2Verification
            - name: VerifyV2VerificationAttempt
            - name: VerifyV2VerificationAttemptsSummary
            - name: VerifyV2VerificationCheck
            - name: VerifyV2Webhook
          x-maturity:
            - name: GA
              description: This product is Generally Available.
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. U
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
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
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
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
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/verify-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/verify-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-video-api
    name: Twilio Video API
    description: >-
      Twilio Video is a programmable real-time communications platform that
      allows you to add video chat functionality to your web, iOS, and Android
      applications. The platform provides APIs, SDKs, and helper tools to
      capture, distribute, record, and render high quality audio and video
      applications.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/video
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/video
      - type: OpenAPI
        data:
          info:
            title: Twilio - Video
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Compositions/{Sid}:
              description: Recording compositions
              get:
                description: >-
                  Returns a single Composition resource identified by a
                  Composition SID.
                tags:
                  - Compositions
                  - Sid
              delete:
                description: >-
                  Delete a Recording Composition resource identified by a
                  Composition SID.
                tags:
                  - Compositions
                  - Sid
            /v1/Compositions:
              description: Recording compositions
              get:
                description: List of all Recording compositions.
                tags:
                  - Compositions
                  - Sid
              post:
                description: ''
                tags:
                  - Compositions
                  - Sid
            /v1/CompositionHooks/{Sid}:
              description: Recording composition hooks
              get:
                description: >-
                  Returns a single CompositionHook resource identified by a
                  CompositionHook SID.
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
              delete:
                description: >-
                  Delete a Recording CompositionHook resource identified by a
                  `CompositionHook SID`.
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
              post:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
            /v1/CompositionHooks:
              description: Recording composition hooks
              get:
                description: List of all Recording CompositionHook resources.
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
              post:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
            /v1/CompositionSettings/Default:
              description: Recording composition settings
              get:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
              post:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
            /v1/Recordings/{Sid}:
              description: Single-track, single-media recordings
              get:
                description: >-
                  Returns a single Recording resource identified by a Recording
                  SID.
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
              delete:
                description: Delete a Recording resource identified by a Recording SID.
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
            /v1/Recordings:
              description: Single-track, single-media recordings
              get:
                description: List of all Track recordings.
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
            /v1/RecordingSettings/Default:
              description: Recording settings
              get:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
              post:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
            /v1/Rooms/{Sid}:
              description: Video rooms with one or more participants
              get:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
              post:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
            /v1/Rooms:
              description: Video rooms with one or more participants
              post:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
              get:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
            /v1/Rooms/{RoomSid}/Participants/{Sid}:
              description: Participants in video rooms
              get:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
              post:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
            /v1/Rooms/{RoomSid}/Participants:
              description: Participants in video rooms
              get:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
            /v1/Rooms/{RoomSid}/Participants/{Sid}/Anonymize:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
                  - Anonymize
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Returns a single Track resource represented by TrackName or
                  SID.
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
                  - Anonymize
                  - Participant
                  - Published
                  - Tracks
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Returns a list of tracks associated with a given Participant.
                  Only `currently` Published Tracks are in the list resource.
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
                  - Anonymize
                  - Participant
                  - Published
                  - Tracks
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns a list of Subscribe Rules for the Participant.
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
                  - Anonymize
                  - Participant
                  - Published
                  - Tracks
                  - Subscribe
                  - Rules
              post:
                description: Update the Subscribe Rules for the Participant
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
                  - Anonymize
                  - Participant
                  - Published
                  - Tracks
                  - Subscribe
                  - Rules
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Returns a single Track resource represented by `track_sid`. 
                  Note: This is one resource with the Video API that requires a
                  SID, be Track Name on the subscriber side is not guaranteed to
                  be unique.
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
                  - Anonymize
                  - Participant
                  - Published
                  - Tracks
                  - Subscribe
                  - Rules
                  - Subscribed
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Returns a list of tracks that are subscribed for the
                  participant.
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
                  - Anonymize
                  - Participant
                  - Published
                  - Tracks
                  - Subscribe
                  - Rules
                  - Subscribed
            /v1/Rooms/{RoomSid}/Recordings/{Sid}:
              description: Single-track, single-media room recordings
              get:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
                  - Anonymize
                  - Participant
                  - Published
                  - Tracks
                  - Subscribe
                  - Rules
                  - Subscribed
              delete:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
                  - Anonymize
                  - Participant
                  - Published
                  - Tracks
                  - Subscribe
                  - Rules
                  - Subscribed
            /v1/Rooms/{RoomSid}/Recordings:
              description: Single-track, single-media room recordings
              get:
                description: ''
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
                  - Anonymize
                  - Participant
                  - Published
                  - Tracks
                  - Subscribe
                  - Rules
                  - Subscribed
            /v1/Rooms/{RoomSid}/RecordingRules:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns a list of Recording Rules for the Room.
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
                  - Anonymize
                  - Participant
                  - Published
                  - Tracks
                  - Subscribe
                  - Rules
                  - Subscribed
              post:
                description: Update the Recording Rules for the Room
                tags:
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                  - Room
                  - Participants
                  - Anonymize
                  - Participant
                  - Published
                  - Tracks
                  - Subscribe
                  - Rules
                  - Subscribed
          tags:
            - name: VideoV1Anonymize
            - name: VideoV1Composition
            - name: VideoV1CompositionHook
            - name: VideoV1CompositionSettings
            - name: VideoV1Participant
            - name: VideoV1PublishedTrack
            - name: VideoV1Recording
            - name: VideoV1RecordingRules
            - name: VideoV1RecordingSettings
            - name: VideoV1Room
            - name: VideoV1RoomRecording
            - name: VideoV1SubscribeRules
            - name: VideoV1SubscribedTrack
          x-maturity:
            - name: GA
              description: This product is G
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
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
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
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
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-operations-description-error
              message: Operation Description
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/video-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/video-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-voice-api
    name: Twilio Voice API
    description: >-
      Build custom voice call experiences for your applications to reach
      customers around the world.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/en-us/voice
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/en-us/voice
      - type: OpenAPI
        data:
          info:
            title: Twilio - Voice
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/Archives/{Date}/Calls/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: >-
                  Delete an archived call record from Bulk Export. Note: this
                  does not also delete the record from the Voice API.
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
            /v1/ByocTrunks:
              description: >-
                BYOC Trunks allow you to bring your own voice carrier to Twilio,
                enabling your calls to use our Programmable Voice APIs.
              post:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
              get:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
            /v1/ByocTrunks/{Sid}:
              description: >-
                BYOC Trunks allow you to bring your own voice carrier to Twilio,
                enabling your calls to use our Programmable Voice APIs.
              get:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
              post:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
              delete:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
            /v1/ConnectionPolicies:
              description: >-
                Connection Policy for sending traffic to your communications
                infrastructure.
              post:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
              get:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
            /v1/ConnectionPolicies/{Sid}:
              description: >-
                Connection Policy for sending traffic to your communications
                infrastructure.
              get:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
              post:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
              delete:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
            /v1/ConnectionPolicies/{ConnectionPolicySid}/Targets:
              description: >-
                Network element entry points into your communications
                infrastructure
              post:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
              get:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
            /v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}:
              description: >-
                Network element entry points into your communications
                infrastructure
              get:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
              post:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
              delete:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
            /v1/DialingPermissions:
              description: 'TODO: Resource-level docs'
            /v1/DialingPermissions/Countries/{IsoCode}:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve voice dialing country permissions identified by the
                  given ISO country code
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
            /v1/DialingPermissions/Countries:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve all voice dialing country permissions for this
                  account
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
            /v1/DialingPermissions/BulkCountryUpdates:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Create a bulk update request to change voice dialing country
                  permissions of one or more countries identified by the
                  corresponding [ISO country
                  code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
                  - Bulk
                  - Country
                  - Updates
            /v1/DialingPermissions/Countries/{IsoCode}/HighRiskSpecialPrefixes:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Fetch the high-risk special services prefixes from the country
                  resource corresponding to the [ISO country
                  code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
                  - Bulk
                  - Country
                  - Updates
                  - High
                  - Risk
                  - Special
                  - Prefixes
            /v1/Settings:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve voice dialing permissions inheritance for the
                  sub-account
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
                  - Bulk
                  - Country
                  - Updates
                  - High
                  - Risk
                  - Special
                  - Prefixes
                  - Settings
              post:
                description: >-
                  Update voice dialing permissions inheritance for the
                  sub-account
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
                  - Bulk
                  - Country
                  - Updates
                  - High
                  - Risk
                  - Special
                  - Prefixes
                  - Settings
            /v1/IpRecords:
              description: >-
                IP Records hold information about the IP addresses and ranges
                ([CIDR](https://tools.ietf.org/html/rfc4632) blocks) that your
                traffic will be associated with.
              post:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
                  - Bulk
                  - Country
                  - Updates
                  - High
                  - Risk
                  - Special
                  - Prefixes
                  - Settings
                  - Ip
                  - Records
              get:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
                  - Bulk
                  - Country
                  - Updates
                  - High
                  - Risk
                  - Special
                  - Prefixes
                  - Settings
                  - Ip
                  - Records
            /v1/IpRecords/{Sid}:
              description: >-
                IP Records hold information about the IP addresses and ranges
                ([CIDR](https://tools.ietf.org/html/rfc4632) blocks) that your
                traffic will be associated with.
              get:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
                  - Bulk
                  - Country
                  - Updates
                  - High
                  - Risk
                  - Special
                  - Prefixes
                  - Settings
                  - Ip
                  - Records
              post:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
                  - Bulk
                  - Country
                  - Updates
                  - High
                  - Risk
                  - Special
                  - Prefixes
                  - Settings
                  - Ip
                  - Records
              delete:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
                  - Bulk
                  - Country
                  - Updates
                  - High
                  - Risk
                  - Special
                  - Prefixes
                  - Settings
                  - Ip
                  - Records
            /v1/SourceIpMappings:
              description: >-
                With Source IP Mappings, Twilio can recognize your SIP requests
                based on where they are sent from. The Request-URI no longer has
                to have the FQDN (Fully Qualified Domain Name) of your SIP
                Domain.
              post:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
                  - Bulk
                  - Country
                  - Updates
                  - High
                  - Risk
                  - Special
                  - Prefixes
                  - Settings
                  - Ip
                  - Records
                  - Source
                  - Mappings
              get:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
                  - Bulk
                  - Country
                  - Updates
                  - High
                  - Risk
                  - Special
                  - Prefixes
                  - Settings
                  - Ip
                  - Records
                  - Source
                  - Mappings
            /v1/SourceIpMappings/{Sid}:
              description: >-
                With Source IP Mappings, Twilio can recognize your SIP requests
                based on where they are sent from. The Request-URI no longer has
                to have the FQDN (Fully Qualified Domain Name) of your SIP
                Domain.
              get:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
                  - Bulk
                  - Country
                  - Updates
                  - High
                  - Risk
                  - Special
                  - Prefixes
                  - Settings
                  - Ip
                  - Records
                  - Source
                  - Mappings
              post:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
                  - Bulk
                  - Country
                  - Updates
                  - High
                  - Risk
                  - Special
                  - Prefixes
                  - Settings
                  - Ip
                  - Records
                  - Source
                  - Mappings
              delete:
                description: ''
                tags:
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                  - Policy
                  - Targets
                  - Dialing
                  - Permissions
                  - Countries
                  - Iso
                  - Code
                  - Bulk
                  - Country
                  - Updates
                  - High
                  - Risk
                  - Special
                  - Prefixes
                  - Settings
                  - Ip
                  - Records
                  - Source
                  - Mappings
          tags:
            - name: VoiceV1ArchivedCall
            - name: VoiceV1BulkCountryUpdate
            - name: VoiceV1ByocTrunk
            - name: VoiceV1ConnectionPolicy
            - name: VoiceV1ConnectionPolicyTarget
            - name: VoiceV1Country
            - name: VoiceV1HighriskSpecialPrefix
            - name: VoiceV1IpRecord
            - name: VoiceV1Settings
            - name: VoiceV1SourceIpMapping
          x-maturity:
            - name: GA
              description: This product is Generally Available.
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with caution.
            - name: Preview
              description: >-
                PLEASE NOTE that this is a Preview product that is subject to
                change. Use it with caution. If you currently do not have
                developer preview access, please contact https://www.twilio
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
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
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
            - code: openapi-operations-description-error
              message: Operation Description
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
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
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/voice-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/voice-openapi-api-evangelist-ratings.yml
  - aid: twilio:twilio-wireless-api
    name: Twilio Wireless API
    description: Needs description.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://www.twilio.com/docs/
    baseURL: https:/api.twilio.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://www.twilio.com/docs/
      - type: OpenAPI
        data:
          info:
            title: Twilio - Wireless
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/UsageRecords:
              description: Aggregated Usage information for all SIMs on an Account
              get:
                description: ''
                tags:
                  - Usage
                  - Records
            /v1/Commands/{Sid}:
              description: Machine-to-machine commands sent to/from devices
              get:
                description: Fetch a Command instance from your account.
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
              delete:
                description: Delete a Command instance from your account.
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
            /v1/Commands:
              description: Machine-to-machine commands sent to/from devices
              get:
                description: Retrieve a list of Commands from your account.
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
              post:
                description: Send a Command to a Sim.
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
            /v1/Sims/{SimSid}/DataSessions:
              description: Data session information for SIMs
              get:
                description: ''
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
                  - Sims
                  - Sim
                  - Data
                  - Sessions
            /v1/RatePlans:
              description: Capabilities and restrictions for SIMs
              get:
                description: ''
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
                  - Sims
                  - Sim
                  - Data
                  - Sessions
                  - Rate
                  - Plans
              post:
                description: ''
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
                  - Sims
                  - Sim
                  - Data
                  - Sessions
                  - Rate
                  - Plans
            /v1/RatePlans/{Sid}:
              description: Capabilities and restrictions for SIMs
              get:
                description: ''
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
                  - Sims
                  - Sim
                  - Data
                  - Sessions
                  - Rate
                  - Plans
              post:
                description: ''
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
                  - Sims
                  - Sim
                  - Data
                  - Sessions
                  - Rate
                  - Plans
              delete:
                description: ''
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
                  - Sims
                  - Sim
                  - Data
                  - Sessions
                  - Rate
                  - Plans
            /v1/Sims/{Sid}:
              description: A resource representing a Programmable Wireless SIM
              get:
                description: Fetch a Sim resource on your Account.
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
                  - Sims
                  - Sim
                  - Data
                  - Sessions
                  - Rate
                  - Plans
              post:
                description: >-
                  Updates the given properties of a Sim resource on your
                  Account.
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
                  - Sims
                  - Sim
                  - Data
                  - Sessions
                  - Rate
                  - Plans
              delete:
                description: Delete a Sim resource on your Account.
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
                  - Sims
                  - Sim
                  - Data
                  - Sessions
                  - Rate
                  - Plans
            /v1/Sims:
              description: A resource representing a Programmable Wireless SIM
              get:
                description: Retrieve a list of Sim resources on your Account.
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
                  - Sims
                  - Sim
                  - Data
                  - Sessions
                  - Rate
                  - Plans
            /v1/Sims/{SimSid}/UsageRecords:
              description: Usage information for SIMs
              get:
                description: ''
                tags:
                  - Usage
                  - Records
                  - Commands
                  - Sid
                  - Sims
                  - Sim
                  - Data
                  - Sessions
                  - Rate
                  - Plans
          tags:
            - name: WirelessV1Command
            - name: WirelessV1DataSession
            - name: WirelessV1RatePlan
            - name: WirelessV1Sim
            - name: WirelessV1UsageRecord
          x-maturity:
            - name: GA
              description: This product is G
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
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
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-examples-info
              message: Schema Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-enum-casing-info
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-security-schemes-info
              message: Security Scheme
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
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-openapi-version-301-info
              message: 3.0.1 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-info
              message: Path Description
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-description-error
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
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
            - code: openapi-parameters-description-info
              message: Parameter Description
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
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-x-maturity-hint
              message: X-Maturity
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
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
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-description-error
              message: Tag Descriptions
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-x-maturity-error
              message: Maturity Extension
    overlays:
      - type: APIs.io Search
        url: overlays/wireless-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/wireless-openapi-api-evangelist-ratings.yml
common:
  - type: Sign Up
    url: https://www.twilio.com/try-twilio
  - type: About
    url: https://www.twilio.com/en-us/company
  - type: Support
    url: https://support.twilio.com/
  - type: SDKs
    url: https://www.twilio.com/docs/libraries
  - type: Status
    url: https://status.twilio.com/
  - type: Change Log
    url: https://www.twilio.com/en-us/changelog
  - type: Blog
    url: https://www.twilio.com/blog
  - type: Privacy
    url: https://www.twilio.com/en-us/legal/privacy
  - type: Terms of Service
    url: https://www.twilio.com/en-us/legal/tos
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
  - type: API Evangelist Subway
    url: overlays/api-evangelist-subway.yml
maintainers:
  - FN: APIs.json
    email: info@apis.io
---