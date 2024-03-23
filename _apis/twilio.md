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
tags:
  - SMS
  - Voice
  - Messaging
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
    tags:
      - Accounts
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
                  - AccountsV1AuthTokenPromotion
            /v1/Credentials:
              description: 'TODO: Resource-level docs'
            /v1/Credentials/AWS:
              description: User provided AWS keys
              get:
                description: >-
                  Retrieves a collection of AWS Credentials belonging to the
                  account used to make the request
                tags:
                  - AccountsV1Aws
              post:
                description: Create a new AWS Credential
                tags:
                  - AccountsV1Aws
            /v1/Credentials/AWS/{Sid}:
              description: User provided AWS keys
              get:
                description: >-
                  Fetch the AWS credentials specified by the provided Credential
                  Sid
                tags:
                  - AccountsV1Aws
              post:
                description: Modify the properties of a given Account
                tags:
                  - AccountsV1Aws
              delete:
                description: Delete a Credential from your account
                tags:
                  - AccountsV1Aws
            /v1/Credentials/PublicKeys:
              description: User provided public keys
              get:
                description: >-
                  Retrieves a collection of Public Key Credentials belonging to
                  the account used to make the request
                tags:
                  - AccountsV1PublicKey
              post:
                description: Create a new Public Key Credential
                tags:
                  - AccountsV1PublicKey
            /v1/Credentials/PublicKeys/{Sid}:
              description: User provided public keys
              get:
                description: Fetch the public key specified by the provided Credential Sid
                tags:
                  - AccountsV1PublicKey
              post:
                description: Modify the properties of a given Account
                tags:
                  - AccountsV1PublicKey
              delete:
                description: Delete a Credential from your account
                tags:
                  - AccountsV1PublicKey
            /v1/SafeList/Numbers:
              description: 'TODO: Resource-level docs'
              post:
                description: Add a new phone number to SafeList.
                tags:
                  - AccountsV1Safelist
              get:
                description: Check if a phone number exists in SafeList.
                tags:
                  - AccountsV1Safelist
              delete:
                description: Remove a phone number from SafeList.
                tags:
                  - AccountsV1Safelist
            /v1/AuthTokens/Secondary:
              description: Secondary Auth Token
              post:
                description: Create a new secondary Auth Token
                tags:
                  - AccountsV1SecondaryAuthToken
              delete:
                description: Delete the secondary Auth Token from your account
                tags:
                  - AccountsV1SecondaryA
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
    tags:
      - Assistant
      - Artificial Intelligence
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
              post:
                description: ''
                tags:
                  - Assistants
              delete:
                description: ''
                tags:
                  - Assistants
            /understand/Assistants/{AssistantSid}/FallbackActions:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Actions
              post:
                description: ''
                tags:
                  - Actions
            /understand/Assistants/{AssistantSid}/InitiationActions:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Actions
              post:
                description: ''
                tags:
                  - Actions
            /understand/Assistants/{AssistantSid}/Dialogues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandDialogue
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandField
              delete:
                description: ''
                tags:
                  - PreviewUnderstandField
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandField
              post:
                description: ''
                tags:
                  - PreviewUnderstandField
            /understand/Assistants/{AssistantSid}/FieldTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandFieldType
              post:
                description: ''
                tags:
                  - PreviewUnderstandFieldType
              delete:
                description: ''
                tags:
                  - PreviewUnderstandFieldType
            /understand/Assistants/{AssistantSid}/FieldTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandFieldType
              post:
                description: ''
                tags:
                  - PreviewUnderstandFieldType
            /understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandFieldValue
              delete:
                description: ''
                tags:
                  - PreviewUnderstandFieldValue
            /understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandFieldValue
              post:
                description: ''
                tags:
                  - PreviewUnderstandFieldValue
            /understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandModelBuild
              post:
                description: ''
                tags:
                  - PreviewUnderstandModelBuild
              delete:
                description: ''
                tags:
                  - PreviewUnderstandModelBuild
            /understand/Assistants/{AssistantSid}/ModelBuilds:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandModelBuild
              post:
                description: ''
                tags:
                  - PreviewUnderstandModelBuild
            /understand/Assistants/{AssistantSid}/Queries/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandQuery
              post:
                description: ''
                tags:
                  - PreviewUnderstandQuery
              delete:
                description: ''
                tags:
                  - PreviewUnderstandQuery
            /understand/Assistants/{AssistantSid}/Queries:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandQuery
              post:
                description: ''
                tags:
                  - PreviewUnderstandQuery
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandSample
              post:
                description: ''
                tags:
                  - PreviewUnderstandSample
              delete:
                description: ''
                tags:
                  - PreviewUnderstandSample
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandSample
              post:
                description: ''
                tags:
                  - PreviewUnderstandSample
            /understand/Assistants/{AssistantSid}/StyleSheet:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns Style sheet JSON object for this Assistant
                tags:
                  - PreviewUnderstandStyleSheet
              post:
                description: >-
                  Updates the style sheet for an assistant identified by
                  {AssistantSid} or {AssistantUniqueName}.
                tags:
                  - PreviewUnderstandStyleSheet
            /understand/Assistants/{AssistantSid}/Tasks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandTask
              post:
                description: ''
                tags:
                  - PreviewUnderstandTask
              delete:
                description: ''
                tags:
                  - PreviewUnderstandTask
            /understand/Assistants/{AssistantSid}/Tasks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandTask
              post:
                description: ''
                tags:
                  - PreviewUnderstandTask
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns JSON actions for this Task.
                tags:
                  - PreviewUnderstandTaskActions
              post:
                description: >-
                  Updates the actions of an Task identified by {TaskSid} or
                  {TaskUniqueName}.
                tags:
                  - PreviewUnderstandTaskActions
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - PreviewUnderstandTaskStatistics
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
                developer preview access, please contact
                https://www.twilio.com/help/
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
    tags:
      - Automation
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
                  - AutopilotV1Assistant
              post:
                description: ''
                tags:
                  - AutopilotV1Assistant
              delete:
                description: ''
                tags:
                  - AutopilotV1Assistant
            /v1/Assistants:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1Assistant
              post:
                description: ''
                tags:
                  - AutopilotV1Assistant
            /v1/Assistants/{AssistantSid}/Defaults:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1Defaults
              post:
                description: ''
                tags:
                  - AutopilotV1Defaults
            /v1/Assistants/{AssistantSid}/Dialogues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1Dialogue
            /v1/Assistants/{AssistantSid}/Dialogues:
              description: 'TODO: Resource-level docs'
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1Field
              delete:
                description: ''
                tags:
                  - AutopilotV1Field
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1Field
              post:
                description: ''
                tags:
                  - AutopilotV1Field
            /v1/Assistants/{AssistantSid}/FieldTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1FieldType
              post:
                description: ''
                tags:
                  - AutopilotV1FieldType
              delete:
                description: ''
                tags:
                  - AutopilotV1FieldType
            /v1/Assistants/{AssistantSid}/FieldTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1FieldType
              post:
                description: ''
                tags:
                  - AutopilotV1FieldType
            /v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1FieldValue
              delete:
                description: ''
                tags:
                  - AutopilotV1FieldValue
            /v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1FieldValue
              post:
                description: ''
                tags:
                  - AutopilotV1FieldValue
            /v1/Assistants/{AssistantSid}/ModelBuilds/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1ModelBuild
              post:
                description: ''
                tags:
                  - AutopilotV1ModelBuild
              delete:
                description: ''
                tags:
                  - AutopilotV1ModelBuild
            /v1/Assistants/{AssistantSid}/ModelBuilds:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1ModelBuild
              post:
                description: ''
                tags:
                  - AutopilotV1ModelBuild
            /v1/Assistants/{AssistantSid}/Queries/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1Query
              post:
                description: ''
                tags:
                  - AutopilotV1Query
              delete:
                description: ''
                tags:
                  - AutopilotV1Query
            /v1/Assistants/{AssistantSid}/Queries:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1Query
              post:
                description: ''
                tags:
                  - AutopilotV1Query
            /v1/Assistants/Restore:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - AutopilotV1RestoreAssistant
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1Sample
              post:
                description: ''
                tags:
                  - AutopilotV1Sample
              delete:
                description: ''
                tags:
                  - AutopilotV1Sample
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1Sample
              post:
                description: ''
                tags:
                  - AutopilotV1Sample
            /v1/Assistants/{AssistantSid}/StyleSheet:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns Style sheet JSON object for the Assistant
                tags:
                  - AutopilotV1StyleSheet
              post:
                description: >-
                  Updates the style sheet for an Assistant identified by
                  `assistant_sid`.
                tags:
                  - AutopilotV1StyleSheet
            /v1/Assistants/{AssistantSid}/Tasks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1Task
              post:
                description: ''
                tags:
                  - AutopilotV1Task
              delete:
                description: ''
                tags:
                  - AutopilotV1Task
            /v1/Assistants/{AssistantSid}/Tasks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1Task
              post:
                description: ''
                tags:
                  - AutopilotV1Task
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns JSON actions for the Task.
                tags:
                  - AutopilotV1TaskActions
              post:
                description: >-
                  Updates the actions of an Task identified by {TaskSid} or
                  {TaskUniqueName}.
                tags:
                  - AutopilotV1TaskActions
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1TaskStatistics
            /v1/Assistants/{AssistantSid}/Webhooks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1Webhook
              post:
                description: ''
                tags:
                  - AutopilotV1Webhook
              delete:
                description: ''
                tags:
                  - AutopilotV1Webhook
            /v1/Assistants/{AssistantSid}/Webhooks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - AutopilotV1Webhook
              post:
                description: ''
                tags:
                  - AutopilotV1Webhook
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
                developer preview access, please contact
                https://www.twilio.com/help/
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
    tags:
      - Bulk
      - Exports
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
                  - BulkexportsV1Day
            /v1/Exports/{ResourceType}/Days:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Days for a resource.
                tags:
                  - BulkexportsV1Day
            /v1/Exports/{ResourceType}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Export.
                tags:
                  - BulkexportsV1Export
            /v1/Exports:
              description: 'TODO: Resource-level docs'
            /v1/Exports/{ResourceType}/Configuration:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Export Configuration.
                tags:
                  - BulkexportsV1ExportConfiguration
              post:
                description: Update a specific Export Configuration.
                tags:
                  - BulkexportsV1ExportConfiguration
            /v1/Exports/{ResourceType}/Jobs:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - BulkexportsV1ExportCustomJob
              post:
                description: ''
                tags:
                  - BulkexportsV1ExportCustomJob
            /v1/Exports/Jobs/{JobSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - BulkexportsV1Job
              delete:
                description: ''
                tags:
                  - BulkexportsV1Job
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
              description: This product is Generally Av
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
    tags:
      - Content
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
                  - ContentV1ApprovalFetch
            /v1/Content/{Sid}:
              description: A Content resource represents rich messaging content.
              get:
                description: Fetch a Content resource by its unique Content Sid
                tags:
                  - ContentV1Content
              delete:
                description: Deletes a Content resource
                tags:
                  - ContentV1Content
            /v1/Content:
              description: A Content resource represents rich messaging content.
              get:
                description: >-
                  Retrieve a list of Contents belonging to the account used to
                  make the request
                tags:
                  - ContentV1Content
            /v1/ContentAndApprovals:
              description: >-
                A Content resource represents rich messaging content and its
                respective approval request status.
              get:
                description: >-
                  Retrieve a list of Contents with approval statuses belonging
                  to the account used to make the request
                tags:
                  - ContentV1ContentAndApprovals
            /v1/LegacyContent:
              description: >-
                A Legacy Content resource represents legacy rich messaging
                content.
              get:
                description: >-
                  Retrieve a list of Legacy Contents belonging to the account
                  used to make the request
                tags:
                  - ContentV1LegacyContent
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
                developer preview access, please contact
                https://www.twilio.com/help/
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
    tags:
      - Conversations
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
                  - ConversationsV1Configuration
              post:
                description: >-
                  Update the global configuration of conversations on your
                  account
                tags:
                  - ConversationsV1Configuration
            /v1/Configuration/Addresses:
              description: >-
                Address Configuration resource manages the configurations
                related to a unique address within Conversations
              get:
                description: Retrieve a list of address configurations for an account
                tags:
                  - ConversationsV1AddressConfiguration
              post:
                description: Create a new address configuration
                tags:
                  - ConversationsV1AddressConfiguration
            /v1/Configuration/Addresses/{Sid}:
              description: >-
                Address Configuration resource manages the configurations
                related to a unique address within Conversations
              get:
                description: 'Fetch an address configuration '
                tags:
                  - ConversationsV1AddressConfiguration
              post:
                description: Update an existing address configuration
                tags:
                  - ConversationsV1AddressConfiguration
              delete:
                description: Remove an existing address configuration
                tags:
                  - ConversationsV1AddressConfiguration
            /v1/Configuration/Webhooks:
              description: >-
                A Webhook resource manages a service-level set of callback URLs
                and their configuration for receiving all conversation events.
              get:
                description: ''
                tags:
                  - ConversationsV1Webhook
              post:
                description: ''
                tags:
                  - ConversationsV1Webhook
            /v1/Conversations:
              description: >-
                A Conversation resource represents an omnichannel group
                conversation with an ordered list of messages and a participant
                roster.
              post:
                description: Create a new conversation in your account's default service
                tags:
                  - ConversationsV1Conversation
              get:
                description: >-
                  Retrieve a list of conversations in your account's default
                  service
                tags:
                  - ConversationsV1Conversation
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
                  - ConversationsV1Conversation
              delete:
                description: Remove a conversation from your account's default service
                tags:
                  - ConversationsV1Conversation
              get:
                description: Fetch a conversation from your account's default service
                tags:
                  - ConversationsV1Conversation
            /v1/Conversations/{ConversationSid}/Messages:
              description: A Message resource represents a message in a conversation.
              post:
                description: Add a new message to the conversation
                tags:
                  - ConversationsV1Message
              get:
                description: Retrieve a list of all messages in the conversation
                tags:
                  - ConversationsV1Message
            /v1/Conversations/{ConversationSid}/Messages/{Sid}:
              description: A Message resource represents a message in a conversation.
              post:
                description: Update an existing message in the conversation
                tags:
                  - ConversationsV1Message
              delete:
                description: Remove a message from the conversation
                tags:
                  - ConversationsV1Message
              get:
                description: Fetch a message from the conversation
                tags:
                  - ConversationsV1Message
            /v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}:
              description: >-
                A Message Receipt resource represents a delivery/read receipt of
                a message in a conversation.
              get:
                description: >-
                  Fetch the delivery and read receipts of the conversation
                  message
                tags:
                  - ConversationsV1DeliveryReceipt
            /v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts:
              description: >-
                A Message Receipt resource represents a delivery/read receipt of
                a message in a conversation.
              get:
                description: >-
                  Retrieve a list of all delivery and read receipts of the
                  conversation message
                tags:
                  - ConversationsV1DeliveryReceipt
            /v1/Conversations/{ConversationSid}/Participants:
              description: A Participant resource represents a member of the conversation.
              post:
                description: Add a new participant to the conversation
                tags:
                  - ConversationsV1Participant
              get:
                description: Retrieve a list of all participants of the conversation
                tags:
                  - ConversationsV1Participant
            /v1/Conversations/{ConversationSid}/Participants/{Sid}:
              description: A Participant resource represents a member of the conversation.
              post:
                description: Update an existing participant in the conversation
                tags:
                  - ConversationsV1Participant
              delete:
                description: Remove a participant from the conversation
                tags:
                  - ConversationsV1Participant
              get:
                description: Fetch a participant of the conversation
                tags:
                  - ConversationsV1Participant
            /v1/Conversations/{ConversationSid}/Webhooks:
              description: >-
                A Scoped Webhook resource manages a set of callback URLs and
                their configuration for receiving events specific to one
                conversation.
              get:
                description: Retrieve a list of all webhooks scoped to the conversation
                tags:
                  - ConversationsV1Webhook
              post:
                description: Create a new webhook scoped to the conversation
                tags:
                  - ConversationsV1Webhook
            /v1/Conversations/{ConversationSid}/Webhooks/{Sid}:
              description: >-
                A Scoped Webhook resource manages a set of callback URLs and
                their configuration for receiving events specific to one
                conversation.
              get:
                description: Fetch the configuration of a conversation-scoped webhook
                tags:
                  - ConversationsV1Webhook
              post:
                description: Update an existing conversation-scoped webhook
                tags:
                  - ConversationsV1Webhook
              delete:
                description: Remove an existing webhook scoped to the conversation
                tags:
                  - ConversationsV1Webhook
            /v1/Credentials:
              description: A Credential resource represents a push notification credential.
              post:
                description: Add a new push notification credential to your account
                tags:
                  - ConversationsV1Credential
              get:
                description: >-
                  Retrieve a list of all push notification credentials on your
                  account
                tags:
                  - ConversationsV1Credential
            /v1/Credentials/{Sid}:
              description: A Credential resource represents a push notification credential.
              post:
                description: >-
                  Update an existing push notification credential on your
                  account
                tags:
                  - ConversationsV1Credential
              delete:
                description: Remove a push notification credential from your account
                tags:
                  - ConversationsV1Credential
              get:
                description: Fetch a push notification credential from your account
                tags:
                  - ConversationsV1Credential
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
                  - ConversationsV1ParticipantConversation
            /v1/Roles:
              description: >-
                A Role resource represents a set of permissions granted to a
                user within a service or a conversation.
              post:
                description: Create a new user role in your account's default service
                tags:
                  - ConversationsV1Role
              get:
                description: >-
                  Retrieve a list of all user roles in your account's default
                  service
                tags:
                  - ConversationsV1Role
            /v1/Roles/{Sid}:
              description: >-
                A Role resource represents a set of permissions granted to a
                user within a service or a conversation.
              post:
                description: Update an existing user role in your account's default service
                tags:
                  - ConversationsV1Role
              delete:
                description: Remove a user role from your account's default service
                tags:
                  - ConversationsV1Role
              get:
                description: Fetch a user role from your account's default service
                tags:
                  - ConversationsV1Role
            /v1/Services:
              description: >-
                A Service resource is a top-level conversation resource
                container that serves as a data silo.
              post:
                description: Create a new conversation service on your account
                tags:
                  - ConversationsV1Service
              get:
                description: Retrieve a list of all conversation services on your account
                tags:
                  - ConversationsV1Service
            /v1/Services/{Sid}:
              description: >-
                A Service resource is a top-level conversation resource
                container that serves as a data silo.
              delete:
                description: >-
                  Remove a conversation service with all its nested resources
                  from your account
                tags:
                  - ConversationsV1Service
              get:
                description: Fetch a conversation service from your account
                tags:
                  - ConversationsV1Service
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
                  - ConversationsV1Binding
              get:
                description: >-
                  Fetch a push notification binding from the conversation
                  service
                tags:
                  - ConversationsV1Binding
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
                  - ConversationsV1Binding
            /v1/Services/{ChatServiceSid}/Configuration:
              description: >-
                A Service Configuration resource manages service-level settings
                applicable to the Conversation API.
              get:
                description: Fetch the configuration of a conversation service
                tags:
                  - ConversationsV1Configuration
              post:
                description: Update configuration settings of a conversation service
                tags:
                  - ConversationsV1Configuration
            /v1/Services/{ChatServiceSid}/Conversations:
              description: >-
                A Service Conversation resource represents an omnichannel group
                conversation with an ordered list of messages and a participant
                roster.
              post:
                description: Create a new conversation in your service
                tags:
                  - ConversationsV1Conversation
              get:
                description: Retrieve a list of conversations in your service
                tags:
                  - ConversationsV1Conversation
            /v1/Services/{ChatServiceSid}/Conversations/{Sid}:
              description: >-
                A Service Conversation resource represents an omnichannel group
                conversation with an ordered list of messages and a participant
                roster.
              post:
                description: Update an existing conversation in your service
                tags:
                  - ConversationsV1Conversation
              delete:
                description: Remove a conversation from your service
                tags:
                  - ConversationsV1Conversation
              get:
                description: Fetch a conversation from your service
                tags:
                  - ConversationsV1Conversation
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages:
              description: >-
                A Service Message resource represents a message in a
                conversation within a specific service.
              post:
                description: Add a new message to the conversation in a specific service
                tags:
                  - ConversationsV1Message
              get:
                description: Retrieve a list of all messages in the conversation
                tags:
                  - ConversationsV1Message
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}:
              description: >-
                A Service Message resource represents a message in a
                conversation within a specific service.
              post:
                description: Update an existing message in the conversation
                tags:
                  - ConversationsV1Message
              delete:
                description: Remove a message from the conversation
                tags:
                  - ConversationsV1Message
              get:
                description: Fetch a message from the conversation
                tags:
                  - ConversationsV1Message
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}:
              description: >-
                A Service Message Receipt resource represents a delivery/read
                receipt of a message in a conversation.
              get:
                description: >-
                  Fetch the delivery and read receipts of the conversation
                  message
                tags:
                  - ConversationsV1DeliveryReceipt
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts:
              description: >-
                A Service Message Receipt resource represents a delivery/read
                receipt of a message in a conversation.
              get:
                description: >-
                  Retrieve a list of all delivery and read receipts of the
                  conversation message
                tags:
                  - ConversationsV1DeliveryReceipt
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants:
              description: >-
                A Service Participant resource represents a member of the
                conversation within a specific service.
              post:
                description: >-
                  Add a new participant to the conversation in a specific
                  service
                tags:
                  - ConversationsV1Participant
              get:
                description: Retrieve a list of all participants of the conversation
                tags:
                  - ConversationsV1Participant
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}:
              description: >-
                A Service Participant resource represents a member of the
                conversation within a specific service.
              post:
                description: Update an existing participant in the conversation
                tags:
                  - ConversationsV1Participant
              delete:
                description: Remove a participant from the conversation
                tags:
                  - ConversationsV1Participant
              get:
                description: Fetch a participant of the conversation
                tags:
                  - ConversationsV1Participant
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
                  - ConversationsV1Webhook
              get:
                description: Retrieve a list of all webhooks scoped to the conversation
                tags:
                  - ConversationsV1Webhook
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}:
              description: >-
                A Conversation-scoped Webhook resource manages a set of callback
                URLs and their configuration for receiving events specific to
                one conversation.
              post:
                description: Update an existing conversation-scoped webhook
                tags:
                  - ConversationsV1Webhook
              delete:
                description: Remove an existing webhook scoped to the conversation
                tags:
                  - ConversationsV1Webhook
              get:
                description: Fetch the configuration of a conversation-scoped webhook
                tags:
                  - ConversationsV1Webhook
            /v1/Services/{ChatServiceSid}/Configuration/Notifications:
              description: >-
                A Service Notification resource manages a set of settings to
                determine push notification behavior at service level.
              post:
                description: Update push notification service settings
                tags:
                  - ConversationsV1Notification
              get:
                description: Fetch push notification service settings
                tags:
                  - ConversationsV1Notification
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
                  - ConversationsV1ParticipantConversation
            /v1/Services/{ChatServiceSid}/Roles:
              description: >-
                A Service Role resource represents a set of permissions granted
                to a user within a service or a conversation.
              post:
                description: Create a new user role in your service
                tags:
                  - ConversationsV1Role
              get:
                description: Retrieve a list of all user roles in your service
                tags:
                  - ConversationsV1Role
            /v1/Services/{ChatServiceSid}/Roles/{Sid}:
              description: >-
                A Service Role resource represents a set of permissions granted
                to a user within a service or a conversation.
              post:
                description: Update an existing user role in your service
                tags:
                  - ConversationsV1Role
              delete:
                description: Remove a user role from your service
                tags:
                  - ConversationsV1Role
              get:
                description: Fetch a user role from your service
                tags:
                  - ConversationsV1Role
            /v1/Services/{ChatServiceSid}/Users:
              description: >-
                A Service User resource represents a conversation user belonging
                to a specific conversation service.
              post:
                description: Add a new conversation user to your service
                tags:
                  - ConversationsV1User
              get:
                description: Retrieve a list of all conversation users in your service
                tags:
                  - ConversationsV1User
            /v1/Services/{ChatServiceSid}/Users/{Sid}:
              description: >-
                A Service User resource represents a conversation user belonging
                to a specific conversation service.
              post:
                description: Update an existing conversation user in your service
                tags:
                  - ConversationsV1User
              delete:
                description: Remove a conversation user from your service
                tags:
                  - ConversationsV1User
              get:
                description: Fetch a conversation user from your service
                tags:
                  - ConversationsV1User
            /v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}:
              description: >-
                A Service User Conversation resource represents a conversation
                of the user belonging to a specific conversation service.
              post:
                description: Update a specific User Conversation.
                tags:
                  - ConversationsV1UserConversation
              delete:
                description: Delete a specific User Conversation.
                tags:
                  - ConversationsV1UserConversation
              get:
                description: Fetch a specific User Conversation.
                tags:
                  - ConversationsV1UserConversation
            /v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations:
              description: >-
                A Service User Conversation resource represents a conversation
                of the user belonging to a specific conversation service.
              get:
                description: Retrieve a list of all User Conversations for the User.
                tags:
                  - ConversationsV1UserConversation
            /v1/Services/{ChatServiceSid}/Configuration/Webhooks:
              description: >-
                A service webhook configuration resource manages a service-level
                set of callback URLs and their configuration for receiving all
                the corresponding service events.
              post:
                description: Update a specific Webhook.
                tags:
                  - ConversationsV1Webhook
              get:
                description: Fetch a specific service webhook configuration.
                tags:
                  - ConversationsV1Webhook
            /v1/Users:
              description: >-
                A User resource represents a conversation user belonging to a
                default conversation service.
              post:
                description: Add a new conversation user to your account's default service
                tags:
                  - ConversationsV1User
              get:
                description: >-
                  Retrieve a list of all conversation users in your account's
                  default service
                tags:
                  - ConversationsV1User
            /v1/Users/{Sid}:
              description: >-
                A User resource represents a conversation user belonging to a
                default conversation service.
              post:
                description: >-
                  Update an existing conversation user in your account's default
                  service
                tags:
                  - ConversationsV1User
              delete:
                description: Remove a conversation user from your account's default service
                tags:
                  - ConversationsV1User
              get:
                description: Fetch a conversation user from your account's default service
                tags:
                  - ConversationsV1User
            /v1/Users/{UserSid}/Conversations/{ConversationSid}:
              description: >-
                A User Conversation resource represents a conversation of the
                user belonging to a default conversation service.
              post:
                description: Update a specific User Conversation.
                tags:
                  - ConversationsV1UserConversation
              delete:
                description: Delete a specific User Conversation.
                tags:
                  - ConversationsV1UserConversation
              get:
                description: Fetch a specific User Conversation.
                tags:
                  - ConversationsV1UserConversation
            /v1/Users/{UserSid}/Conversations:
              description: >-
                A User Conversation resource represents a conversation of the
                user belonging to a default conversation service.
              get:
                description: Retrieve a list of all User Conversations for the User.
                tags:
                  - ConversationsV1UserConversation
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
              description: This product is Generally Av
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
    tags:
      - Events
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
                  - EventsV1EventType
            /v1/Types/{Type}:
              description: Event Types available
              get:
                description: Fetch a specific Event Type.
                tags:
                  - EventsV1EventType
            /v1/Schemas/{Id}:
              description: Versioned Schema definitions for Event Types
              get:
                description: Fetch a specific schema with its nested versions.
                tags:
                  - EventsV1Schema
            /v1/Schemas:
              description: Versioned Schema definitions for Event Types
            /v1/Schemas/{Id}/Versions:
              description: Version of the Schema
              get:
                description: Retrieve a paginated list of versions of the schema.
                tags:
                  - EventsV1SchemaVersion
            /v1/Schemas/{Id}/Versions/{SchemaVersion}:
              description: Version of the Schema
              get:
                description: Fetch a specific schema and version.
                tags:
                  - EventsV1SchemaVersion
            /v1/Sinks/{Sid}:
              description: Sink destination to send events to
              get:
                description: Fetch a specific Sink.
                tags:
                  - EventsV1Sink
              delete:
                description: Delete a specific Sink.
                tags:
                  - EventsV1Sink
              post:
                description: Update a specific Sink
                tags:
                  - EventsV1Sink
            /v1/Sinks:
              description: Sink destination to send events to
              post:
                description: Create a new Sink
                tags:
                  - EventsV1Sink
              get:
                description: >-
                  Retrieve a paginated list of Sinks belonging to the account
                  used to make the request.
                tags:
                  - EventsV1Sink
            /v1/Sinks/{Sid}/Test:
              description: Test sink
              post:
                description: Create a new Sink Test Event for the given Sink.
                tags:
                  - EventsV1SinkTest
            /v1/Sinks/{Sid}/Validate:
              description: Validate sink
              post:
                description: Validate that a test event for a Sink was received.
                tags:
                  - EventsV1SinkValidate
            /v1/Subscriptions/{SubscriptionSid}/SubscribedEvents:
              description: Event subscribed to in the parent Subscription
              get:
                description: >-
                  Retrieve a list of all Subscribed Event types for a
                  Subscription.
                tags:
                  - EventsV1SubscribedEvent
              post:
                description: Add an event type to a Subscription.
                tags:
                  - EventsV1SubscribedEvent
            /v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}:
              description: Event subscribed to in the parent Subscription
              get:
                description: Read an Event for a Subscription.
                tags:
                  - EventsV1SubscribedEvent
              post:
                description: Update an Event for a Subscription.
                tags:
                  - EventsV1SubscribedEvent
              delete:
                description: Remove an event type from a Subscription.
                tags:
                  - EventsV1SubscribedEvent
            /v1/Subscriptions:
              description: Subscription to send Event Types to a Sink
              get:
                description: >-
                  Retrieve a paginated list of Subscriptions belonging to the
                  account used to make the request.
                tags:
                  - EventsV1Subscription
              post:
                description: Create a new Subscription.
                tags:
                  - EventsV1Subscription
            /v1/Subscriptions/{Sid}:
              description: Subscription to send Event Types to a Sink
              get:
                description: Fetch a specific Subscription.
                tags:
                  - EventsV1Subscription
              post:
                description: Update a Subscription.
                tags:
                  - EventsV1Subscription
              delete:
                description: Delete a specific Subscription.
                tags:
                  - EventsV1Subscription
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
              description: This product is Generally Av
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
    tags:
      - CRM
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
                  - FrontlineV1User
              post:
                description: Update an existing frontline user
                tags:
                  - FrontlineV1User
          tags:
            - name: FrontlineV1User
          x-maturity:
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with 
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
    tags:
      - Insights
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
                  - InsightsV1Setting
              post:
                description: Update a specific Voice Insights Setting.
                tags:
                  - InsightsV1Setting
            /v1/Voice/{CallSid}/Annotation:
              description: 'TODO: Resource-level docs'
              post:
                description: Update an Annotation for a specific Call.
                tags:
                  - InsightsV1Annotation
              get:
                description: Get the Annotation for a specific Call.
                tags:
                  - InsightsV1Annotation
            /v1/Voice/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - InsightsV1Call
            /v1/Voice/Summaries:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Call Summaries.
                tags:
                  - InsightsV1CallSummaries
            /v1/Conferences/{ConferenceSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a specific Conference Summary.
                tags:
                  - InsightsV1Conference
            /v1/Conferences:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Conference Summaries.
                tags:
                  - InsightsV1Conference
            /v1/Conferences/{ConferenceSid}/Participants/{ParticipantSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Get a specific Conference Participant Summary for a
                  Conference.
                tags:
                  - InsightsV1ConferenceParticipant
            /v1/Conferences/{ConferenceSid}/Participants:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Get a list of Conference Participants Summaries for a
                  Conference.
                tags:
                  - InsightsV1ConferenceParticipant
            /v1/Voice/{CallSid}/Events:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Call Insight Events for a Call.
                tags:
                  - InsightsV1Event
            /v1/Voice/{CallSid}/Metrics:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Call Metrics for a Call.
                tags:
                  - InsightsV1Metric
            /v1/Voice/{CallSid}/Summary:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a specific Call Summary.
                tags:
                  - InsightsV1CallSummary
            /v1/Video/Rooms/{RoomSid}/Participants/{ParticipantSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Get Video Log Analyzer data for a Room Participant.
                tags:
                  - InsightsV1Participant
            /v1/Video/Rooms/{RoomSid}/Participants:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of room participants.
                tags:
                  - InsightsV1Participant
            /v1/Video/Rooms/{RoomSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Get Video Log Analyzer data for a Room.
                tags:
                  - InsightsV1Room
            /v1/Video/Rooms:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Programmable Video Rooms.
                tags:
                  - InsightsV1Room
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
                developer preview access, please contact
                https://www.twilio.com/help/
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
    tags:
      - Intelligence
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
                  - IntelligenceV2Media
            /v2/Transcripts/{TranscriptSid}/OperatorResults:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of Operator Results for the given Transcript.
                tags:
                  - IntelligenceV2OperatorResult
            /v2/Transcripts/{TranscriptSid}/OperatorResults/{OperatorSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Operator Result for the given Transcript.
                tags:
                  - IntelligenceV2OperatorResult
            /v2/Transcripts/{TranscriptSid}/Sentences:
              description: 'TODO: Resource-level docs'
              get:
                description: Get all Transcript Sentences by TranscriptSid
                tags:
                  - IntelligenceV2Sentence
            /v2/Services:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Service for the given Account
                tags:
                  - IntelligenceV2Service
              get:
                description: Retrieves a list of all Services for an account.
                tags:
                  - IntelligenceV2Service
            /v2/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Service.
                tags:
                  - IntelligenceV2Service
              get:
                description: Fetch a specific Service.
                tags:
                  - IntelligenceV2Service
              post:
                description: Update a specific Service.
                tags:
                  - IntelligenceV2Service
            /v2/Transcripts:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Transcript for the service
                tags:
                  - IntelligenceV2Transcript
              get:
                description: Retrieve a list of Transcripts for a given service.
                tags:
                  - IntelligenceV2Transcript
            /v2/Transcripts/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Transcript.
                tags:
                  - IntelligenceV2Transcript
              delete:
                description: Delete a specific Transcript.
                tags:
                  - IntelligenceV2Transcript
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
                change. Use it with 
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
    tags:
      - Messaging
      - IP Addresses
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
                  - IpMessagingV2Binding
            /v2/Services/{ServiceSid}/Bindings/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2Binding
              delete:
                description: ''
                tags:
                  - IpMessagingV2Binding
            /v2/Services/{ServiceSid}/Channels/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2Channel
              delete:
                description: ''
                tags:
                  - IpMessagingV2Channel
              post:
                description: ''
                tags:
                  - IpMessagingV2Channel
            /v2/Services/{ServiceSid}/Channels:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - IpMessagingV2Channel
              get:
                description: ''
                tags:
                  - IpMessagingV2Channel
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Webhooks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2Webhook
              post:
                description: ''
                tags:
                  - IpMessagingV2Webhook
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Webhooks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2Webhook
              post:
                description: ''
                tags:
                  - IpMessagingV2Webhook
              delete:
                description: ''
                tags:
                  - IpMessagingV2Webhook
            /v2/Credentials:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2Credential
              post:
                description: ''
                tags:
                  - IpMessagingV2Credential
            /v2/Credentials/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2Credential
              post:
                description: ''
                tags:
                  - IpMessagingV2Credential
              delete:
                description: ''
                tags:
                  - IpMessagingV2Credential
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Invites/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2Invite
              delete:
                description: ''
                tags:
                  - IpMessagingV2Invite
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Invites:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - IpMessagingV2Invite
              get:
                description: ''
                tags:
                  - IpMessagingV2Invite
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2Member
              delete:
                description: ''
                tags:
                  - IpMessagingV2Member
              post:
                description: ''
                tags:
                  - IpMessagingV2Member
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Members:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - IpMessagingV2Member
              get:
                description: ''
                tags:
                  - IpMessagingV2Member
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2Message
              delete:
                description: ''
                tags:
                  - IpMessagingV2Message
              post:
                description: ''
                tags:
                  - IpMessagingV2Message
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Messages:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - IpMessagingV2Message
              get:
                description: ''
                tags:
                  - IpMessagingV2Message
            /v2/Services/{ServiceSid}/Roles/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2Role
              delete:
                description: ''
                tags:
                  - IpMessagingV2Role
              post:
                description: ''
                tags:
                  - IpMessagingV2Role
            /v2/Services/{ServiceSid}/Roles:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - IpMessagingV2Role
              get:
                description: ''
                tags:
                  - IpMessagingV2Role
            /v2/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2Service
              delete:
                description: ''
                tags:
                  - IpMessagingV2Service
              post:
                description: ''
                tags:
                  - IpMessagingV2Service
            /v2/Services:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - IpMessagingV2Service
              get:
                description: ''
                tags:
                  - IpMessagingV2Service
            /v2/Services/{ServiceSid}/Users/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2User
              delete:
                description: ''
                tags:
                  - IpMessagingV2User
              post:
                description: ''
                tags:
                  - IpMessagingV2User
            /v2/Services/{ServiceSid}/Users:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - IpMessagingV2User
              get:
                description: ''
                tags:
                  - IpMessagingV2User
            /v2/Services/{ServiceSid}/Users/{UserSid}/Bindings:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2UserBinding
            /v2/Services/{ServiceSid}/Users/{UserSid}/Bindings/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2UserBinding
              delete:
                description: ''
                tags:
                  - IpMessagingV2UserBinding
            /v2/Services/{ServiceSid}/Users/{UserSid}/Channels:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2UserChannel
            /v2/Services/{ServiceSid}/Users/{UserSid}/Channels/{ChannelSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - IpMessagingV2UserChannel
              delete:
                description: ''
                tags:
                  - IpMessagingV2UserChannel
              post:
                description: ''
                tags:
                  - IpMessagingV2UserChannel
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
              description: This product is Generally Av
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
    tags:
      - Marketplace
      - Add-Ons
      - Extensions
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
                  - PreviewMarketplaceAvailableAddOn
            /marketplace/AvailableAddOns:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of Add-ons currently available to be
                  installed.
                tags:
                  - PreviewMarketplaceAvailableAddOn
            /marketplace/AvailableAddOns/{AvailableAddOnSid}/Extensions/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch an instance of an Extension for the Available Add-on.
                tags:
                  - PreviewMarketplaceAvailableAddOnExtension
            /marketplace/AvailableAddOns/{AvailableAddOnSid}/Extensions:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of Extensions for the Available Add-on.
                tags:
                  - PreviewMarketplaceAvailableAddOnExtension
            /marketplace/InstalledAddOns:
              description: 'TODO: Resource-level docs'
              post:
                description: Install an Add-on for the Account specified.
                tags:
                  - PreviewMarketplaceInstalledAddOn
              get:
                description: >-
                  Retrieve a list of Add-ons currently installed on this
                  Account.
                tags:
                  - PreviewMarketplaceInstalledAddOn
            /marketplace/InstalledAddOns/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Remove an Add-on installation from your account
                tags:
                  - PreviewMarketplaceInstalledAddOn
              get:
                description: >-
                  Fetch an instance of an Add-on currently installed on this
                  Account.
                tags:
                  - PreviewMarketplaceInstalledAddOn
              post:
                description: Update an Add-on installation for the Account specified.
                tags:
                  - PreviewMarketplaceInstalledAddOn
            /marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch an instance of an Extension for the Installed Add-on.
                tags:
                  - PreviewMarketplaceInstalledAddOnExtension
              post:
                description: Update an Extension for an Add-on installation.
                tags:
                  - PreviewMarketplaceInstalledAddOnExtension
            /marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of Extensions for the Installed Add-on.
                tags:
                  - PreviewMarketplaceInstalledAddOnExtension
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
                developer preview access, please contact
                https://www.twilio.com/help/c
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
    tags:
      - Media
      - Videos
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
                  - MediaV1MediaProcessor
              get:
                description: Returns a list of MediaProcessors.
                tags:
                  - MediaV1MediaProcessor
            /v1/MediaProcessors/{Sid}:
              description: >-
                A MediaProcessor resource provides the ability to capture
                content from a web application with a Twilio Media Extension to
                create a livestream.
              get:
                description: Returns a single MediaProcessor resource identified by a SID.
                tags:
                  - MediaV1MediaProcessor
              post:
                description: Updates a MediaProcessor resource identified by a SID.
                tags:
                  - MediaV1MediaProcessor
            /v1/MediaRecordings/{Sid}:
              description: >-
                A MediaRecording resource exposes recording metadata and allows
                the deletion of a particular recording.
              delete:
                description: Deletes a MediaRecording resource identified by a SID.
                tags:
                  - MediaV1MediaRecording
              get:
                description: Returns a single MediaRecording resource identified by a SID.
                tags:
                  - MediaV1MediaRecording
            /v1/MediaRecordings:
              description: >-
                A MediaRecording resource exposes recording metadata and allows
                the deletion of a particular recording.
              get:
                description: Returns a list of MediaRecordings.
                tags:
                  - MediaV1MediaRecording
            /v1/PlayerStreamers/{Sid}:
              description: >-
                A PlayerStreamer resource provides the ability to send a
                livestream to a JavaScript, iOS, or Android Player SDK.
              get:
                description: Returns a single PlayerStreamer resource identified by a SID.
                tags:
                  - MediaV1PlayerStreamer
              post:
                description: Updates a PlayerStreamer resource identified by a SID.
                tags:
                  - MediaV1PlayerStreamer
            /v1/PlayerStreamers:
              description: >-
                A PlayerStreamer resource provides the ability to send a
                livestream to a JavaScript, iOS, or Android Player SDK.
              post:
                description: ''
                tags:
                  - MediaV1PlayerStreamer
              get:
                description: Returns a list of PlayerStreamers.
                tags:
                  - MediaV1PlayerStreamer
            /v1/PlayerStreamers/{Sid}/PlaybackGrant:
              description: >-
                A PlaybackGrant resource allows developers to generate a grant
                to initialize the Twilio Live Player SDK and connect to a
                livestream.
              post:
                description: ''
                tags:
                  - MediaV1PlaybackGrant
              get:
                description: >-
                  **This method is not enabled.** Returns a single PlaybackGrant
                  resource identified by a SID.
                tags:
                  - MediaV1PlaybackGrant
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
                developer preview access, please contact
                https://www.twilio.com/help/
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
    tags:
      - Messaging
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
                  - MessagingV1AlphaSender
              get:
                description: ''
                tags:
                  - MessagingV1AlphaSender
            /v1/Services/{ServiceSid}/AlphaSenders/{Sid}:
              description: >-
                A Messaging Service resource to add, fetch or remove an Alpha
                Sender ID from a Messaging Service.
              get:
                description: ''
                tags:
                  - MessagingV1AlphaSender
              delete:
                description: ''
                tags:
                  - MessagingV1AlphaSender
            /v1/a2p/BrandRegistrations/{BrandRegistrationSid}/SmsOtp:
              description: >-
                A Messaging Service resource to retry OTP verification for Sole
                Proprietor Brand Registrations.
              post:
                description: ''
                tags:
                  - MessagingV1BrandRegistrationOtp
            /v1/a2p/BrandRegistrations/{Sid}:
              description: >-
                A Messaging Service resource to add and fetch Brand
                Registrations.
              get:
                description: ''
                tags:
                  - MessagingV1BrandRegistration
              post:
                description: ''
                tags:
                  - MessagingV1BrandRegistration
            /v1/a2p/BrandRegistrations:
              description: >-
                A Messaging Service resource to add and fetch Brand
                Registrations.
              get:
                description: ''
                tags:
                  - MessagingV1BrandRegistration
              post:
                description: ''
                tags:
                  - MessagingV1BrandRegistration
            /v1/a2p/BrandRegistrations/{BrandSid}/Vettings:
              description: A Messaging Service resource to add and get Brand Vettings.
              post:
                description: ''
                tags:
                  - MessagingV1BrandVetting
              get:
                description: ''
                tags:
                  - MessagingV1BrandVetting
            /v1/a2p/BrandRegistrations/{BrandSid}/Vettings/{BrandVettingSid}:
              description: A Messaging Service resource to add and get Brand Vettings.
              get:
                description: ''
                tags:
                  - MessagingV1BrandVetting
            /v1/Services/{MessagingServiceSid}/ChannelSenders:
              description: >-
                A Messaging Service resource to read, fetch all Channel Senders
                associated with a Messaging Service.
              get:
                description: ''
                tags:
                  - MessagingV1ChannelSender
            /v1/Services/{MessagingServiceSid}/ChannelSenders/{Sid}:
              description: >-
                A Messaging Service resource to read, fetch all Channel Senders
                associated with a Messaging Service.
              get:
                description: ''
                tags:
                  - MessagingV1ChannelSender
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
                  - MessagingV1Deactivations
            /v1/LinkShortening/Domains/{DomainSid}/Certificate:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - MessagingV1DomainCerts
              get:
                description: ''
                tags:
                  - MessagingV1DomainCerts
              delete:
                description: ''
                tags:
                  - MessagingV1DomainCerts
            /v1/LinkShortening/Domains/{DomainSid}/Config:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - MessagingV1DomainConfig
              get:
                description: ''
                tags:
                  - MessagingV1DomainConfig
            /v1/LinkShortening/MessagingService/{MessagingServiceSid}/DomainConfig:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - MessagingV1DomainConfigMessagingService
            /v1/Services/PreregisteredUsa2p:
              description: >-
                Resource to associate preregistered campaign with Messaging
                Service.
              post:
                description: ''
                tags:
                  - MessagingV1ExternalCampaign
            /v1/LinkShortening/Domains/{DomainSid}/MessagingServices/{MessagingServiceSid}:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - MessagingV1LinkshorteningMessagingService
              delete:
                description: ''
                tags:
                  - MessagingV1LinkshorteningMessagingService
            /v1/LinkShortening/MessagingServices/{MessagingServiceSid}/Domain:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - MessagingV1LinkshorteningMessagingServiceDomainAssociation
            /v1/Services/{ServiceSid}/PhoneNumbers:
              description: >-
                A Messaging Service resource to add, fetch or remove phone
                numbers from a Messaging Service.
              post:
                description: ''
                tags:
                  - MessagingV1PhoneNumber
              get:
                description: ''
                tags:
                  - MessagingV1PhoneNumber
            /v1/Services/{ServiceSid}/PhoneNumbers/{Sid}:
              description: >-
                A Messaging Service resource to add, fetch or remove phone
                numbers from a Messaging Service.
              delete:
                description: ''
                tags:
                  - MessagingV1PhoneNumber
              get:
                description: ''
                tags:
                  - MessagingV1PhoneNumber
            /v1/Services:
              description: >-
                A Messaging Service resource to create, fetch, update, delete or
                add/remove senders from Messaging Services.
              post:
                description: ''
                tags:
                  - MessagingV1Service
              get:
                description: ''
                tags:
                  - MessagingV1Service
            /v1/Services/{Sid}:
              description: >-
                A Messaging Service resource to create, fetch, update, delete or
                add/remove senders from Messaging Services.
              post:
                description: ''
                tags:
                  - MessagingV1Service
              get:
                description: ''
                tags:
                  - MessagingV1Service
              delete:
                description: ''
                tags:
                  - MessagingV1Service
            /v1/Services/{ServiceSid}/ShortCodes:
              description: >-
                A Messaging Service resource to add, fetch or remove short code
                numbers from a Messaging Service.
              post:
                description: ''
                tags:
                  - MessagingV1ShortCode
              get:
                description: ''
                tags:
                  - MessagingV1ShortCode
            /v1/Services/{ServiceSid}/ShortCodes/{Sid}:
              description: >-
                A Messaging Service resource to add, fetch or remove short code
                numbers from a Messaging Service.
              delete:
                description: ''
                tags:
                  - MessagingV1ShortCode
              get:
                description: ''
                tags:
                  - MessagingV1ShortCode
            /v1/Tollfree/Verifications/{Sid}:
              description: A Messaging resource to add and fetch Tollfree Verifications.
              get:
                description: ''
                tags:
                  - MessagingV1TollfreeVerification
              post:
                description: ''
                tags:
                  - MessagingV1TollfreeVerification
              delete:
                description: ''
                tags:
                  - MessagingV1TollfreeVerification
            /v1/Tollfree/Verifications:
              description: A Messaging resource to add and fetch Tollfree Verifications.
              get:
                description: ''
                tags:
                  - MessagingV1TollfreeVerification
              post:
                description: ''
                tags:
                  - MessagingV1TollfreeVerification
            /v1/Services/{MessagingServiceSid}/Compliance/Usa2p:
              description: >-
                A service for (fetch/create/delete) A2P Campaign for a Messaging
                Service
              post:
                description: ''
                tags:
                  - MessagingV1UsAppToPerson
              get:
                description: ''
                tags:
                  - MessagingV1UsAppToPerson
            /v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}:
              description: >-
                A service for (fetch/create/delete) A2P Campaign for a Messaging
                Service
              delete:
                description: ''
                tags:
                  - MessagingV1UsAppToPerson
              get:
                description: ''
                tags:
                  - MessagingV1UsAppToPerson
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
                  - MessagingV1UsAppToPersonUsecase
            /v1/Services/Usecases:
              description: >-
                Use Case resource. Fetch possible use cases for a Messaging
                Service.
              get:
                description: ''
                tags:
                  - MessagingV1Usecase
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
                change. Use it with 
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
    tags:
      - Microvisors
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
                  - MicrovisorV1AccountConfig
              post:
                description: Create a config for an Account.
                tags:
                  - MicrovisorV1AccountConfig
            /v1/Configs/{Key}:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a Config for an Account.
                tags:
                  - MicrovisorV1AccountConfig
              post:
                description: Update a config for an Account.
                tags:
                  - MicrovisorV1AccountConfig
              delete:
                description: Delete a config for an Account.
                tags:
                  - MicrovisorV1AccountConfig
            /v1/Secrets:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Secrets for an Account.
                tags:
                  - MicrovisorV1AccountSecret
              post:
                description: Create a secret for an Account.
                tags:
                  - MicrovisorV1AccountSecret
            /v1/Secrets/{Key}:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a Secret for an Account.
                tags:
                  - MicrovisorV1AccountSecret
              post:
                description: Update a secret for an Account.
                tags:
                  - MicrovisorV1AccountSecret
              delete:
                description: Delete a secret for an Account.
                tags:
                  - MicrovisorV1AccountSecret
            /v1/Apps:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Apps for an Account.
                tags:
                  - MicrovisorV1App
            /v1/Apps/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific App.
                tags:
                  - MicrovisorV1App
              delete:
                description: Delete a specific App.
                tags:
                  - MicrovisorV1App
            /v1/Apps/{AppSid}/Manifest:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve the Manifest for an App.
                tags:
                  - MicrovisorV1AppManifest
            /v1/Devices:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Devices registered with the Account.
                tags:
                  - MicrovisorV1Device
            /v1/Devices/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Device.
                tags:
                  - MicrovisorV1Device
              post:
                description: Update a specific Device.
                tags:
                  - MicrovisorV1Device
            /v1/Devices/{DeviceSid}/Configs:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Configs for a Device.
                tags:
                  - MicrovisorV1DeviceConfig
              post:
                description: Create a config for a Microvisor Device.
                tags:
                  - MicrovisorV1DeviceConfig
            /v1/Devices/{DeviceSid}/Configs/{Key}:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a Config for a Device.
                tags:
                  - MicrovisorV1DeviceConfig
              post:
                description: Update a config for a Microvisor Device.
                tags:
                  - MicrovisorV1DeviceConfig
              delete:
                description: Delete a config for a Microvisor Device.
                tags:
                  - MicrovisorV1DeviceConfig
            /v1/Devices/{DeviceSid}/Secrets:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Secrets for a Device.
                tags:
                  - MicrovisorV1DeviceSecret
              post:
                description: Create a secret for a Microvisor Device.
                tags:
                  - MicrovisorV1DeviceSecret
            /v1/Devices/{DeviceSid}/Secrets/{Key}:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a Secret for a Device.
                tags:
                  - MicrovisorV1DeviceSecret
              post:
                description: Update a secret for a Microvisor Device.
                tags:
                  - MicrovisorV1DeviceSecret
              delete:
                description: Delete a secret for a Microvisor Device.
                tags:
                  - MicrovisorV1DeviceSecret
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
                developer preview access, please contact
                https://www.twilio.com/help/
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
    tags:
      - Monitors
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
                  - MonitorV1Alert
            /v1/Alerts:
              description: Debugger alerts
              get:
                description: ''
                tags:
                  - MonitorV1Alert
            /v1/Events/{Sid}:
              description: Debugger events
              get:
                description: ''
                tags:
                  - MonitorV1Event
            /v1/Events:
              description: Debugger events
              get:
                description: Returns a list of events in the account, sorted by event-date.
                tags:
                  - MonitorV1Event
          tags:
            - name: MonitorV1Alert
            - name: MonitorV1Event
          x-maturity:
            - name: GA
              description: This product is Generally Av
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
    tags:
      - Notifications
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
                  - NotifyV1Binding
              delete:
                description: ''
                tags:
                  - NotifyV1Binding
            /v1/Services/{ServiceSid}/Bindings:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - NotifyV1Binding
              get:
                description: ''
                tags:
                  - NotifyV1Binding
            /v1/Credentials:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - NotifyV1Credential
              post:
                description: ''
                tags:
                  - NotifyV1Credential
            /v1/Credentials/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - NotifyV1Credential
              post:
                description: ''
                tags:
                  - NotifyV1Credential
              delete:
                description: ''
                tags:
                  - NotifyV1Credential
            /v1/Services/{ServiceSid}/Notifications:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - NotifyV1Notification
            /v1/Services:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - NotifyV1Service
              get:
                description: ''
                tags:
                  - NotifyV1Service
            /v1/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: ''
                tags:
                  - NotifyV1Service
              get:
                description: ''
                tags:
                  - NotifyV1Service
              post:
                description: ''
                tags:
                  - NotifyV1Service
          tags:
            - name: NotifyV1Binding
            - name: NotifyV1Credential
            - name: NotifyV1Notification
            - name: NotifyV1Service
          x-maturity:
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with 
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
    tags:
      - Phone Numbers
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
                  - NumbersV2AuthorizationDocument
              delete:
                description: Cancel the AuthorizationDocument request.
                tags:
                  - NumbersV2AuthorizationDocument
            /v2/HostedNumber/AuthorizationDocuments:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of AuthorizationDocuments belonging to the
                  account initiating the request.
                tags:
                  - NumbersV2AuthorizationDocument
              post:
                description: >-
                  Create an AuthorizationDocument for authorizing the hosting of
                  phone number capabilities on Twilio's platform.
                tags:
                  - NumbersV2AuthorizationDocument
            /v2/HostedNumber/Orders/Bulk/{BulkHostingSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific BulkHostedNumberOrder.
                tags:
                  - NumbersV2BulkHostedNumberOrder
            /v2/HostedNumber/Orders/Bulk:
              description: 'TODO: Resource-level docs'
            /v2/RegulatoryCompliance/Bundles:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Bundle.
                tags:
                  - NumbersV2Bundle
              get:
                description: Retrieve a list of all Bundles for an account.
                tags:
                  - NumbersV2Bundle
            /v2/RegulatoryCompliance/Bundles/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Bundle instance.
                tags:
                  - NumbersV2Bundle
              post:
                description: Updates a Bundle in an account.
                tags:
                  - NumbersV2Bundle
              delete:
                description: Delete a specific Bundle.
                tags:
                  - NumbersV2Bundle
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Creates a new copy of a Bundle. It will internally create
                  copies of all the bundle items (identities and documents) of
                  the original bundle
                tags:
                  - NumbersV2BundleCopy
              get:
                description: Retrieve a list of all Bundles Copies for a Bundle.
                tags:
                  - NumbersV2BundleCopy
            /v2/HostedNumber/AuthorizationDocuments/{SigningDocumentSid}/DependentHostedNumberOrders:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of dependent HostedNumberOrders belonging to
                  the AuthorizationDocument.
                tags:
                  - NumbersV2DependentHostedNumberOrder
            /v2/RegulatoryCompliance/EndUsers:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new End User.
                tags:
                  - NumbersV2EndUser
              get:
                description: Retrieve a list of all End User for an account.
                tags:
                  - NumbersV2EndUser
            /v2/RegulatoryCompliance/EndUsers/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific End User Instance.
                tags:
                  - NumbersV2EndUser
              post:
                description: Update an existing End User.
                tags:
                  - NumbersV2EndUser
              delete:
                description: Delete a specific End User.
                tags:
                  - NumbersV2EndUser
            /v2/RegulatoryCompliance/EndUserTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all End-User Types.
                tags:
                  - NumbersV2EndUserType
            /v2/RegulatoryCompliance/EndUserTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific End-User Type Instance.
                tags:
                  - NumbersV2EndUserType
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations:
              description: 'TODO: Resource-level docs'
              post:
                description: Creates an evaluation for a bundle
                tags:
                  - NumbersV2Evaluation
              get:
                description: >-
                  Retrieve a list of Evaluations associated to the Bundle
                  resource.
                tags:
                  - NumbersV2Evaluation
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Evaluation Instance.
                tags:
                  - NumbersV2Evaluation
            /v2/HostedNumber/Orders/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific HostedNumberOrder.
                tags:
                  - NumbersV2HostedNumberOrder
              delete:
                description: >-
                  Cancel the HostedNumberOrder (only available when the status
                  is in `received`).
                tags:
                  - NumbersV2HostedNumberOrder
            /v2/HostedNumber/Orders:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of HostedNumberOrders belonging to the account
                  initiating the request.
                tags:
                  - NumbersV2HostedNumberOrder
              post:
                description: Host a phone number's capability on Twilio's platform.
                tags:
                  - NumbersV2HostedNumberOrder
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - NumbersV2ItemAssignment
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - NumbersV2ItemAssignment
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - NumbersV2ItemAssignment
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - NumbersV2ItemAssignment
            /v2/RegulatoryCompliance/Regulations:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Regulations.
                tags:
                  - NumbersV2Regulation
            /v2/RegulatoryCompliance/Regulations/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Regulation Instance.
                tags:
                  - NumbersV2Regulation
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
                  - NumbersV2ReplaceItems
            /v2/RegulatoryCompliance/SupportingDocuments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Supporting Document.
                tags:
                  - NumbersV2SupportingDocument
              get:
                description: Retrieve a list of all Supporting Document for an account.
                tags:
                  - NumbersV2SupportingDocument
            /v2/RegulatoryCompliance/SupportingDocuments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Supporting Document Instance.
                tags:
                  - NumbersV2SupportingDocument
              post:
                description: Update an existing Supporting Document.
                tags:
                  - NumbersV2SupportingDocument
              delete:
                description: Delete a specific Supporting Document.
                tags:
                  - NumbersV2SupportingDocument
            /v2/RegulatoryCompliance/SupportingDocumentTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Supporting Document Types.
                tags:
                  - NumbersV2SupportingDocumentType
            /v2/RegulatoryCompliance/SupportingDocumentTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Supporting Document Type Instance.
                tags:
                  - NumbersV2SupportingDocumentType
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
                change. Use it with 
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
    tags:
      - Prices
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
                  - PricingV2Country
            /v2/Trunking/Countries/{IsoCountry}:
              description: Trunking pricing by country
              get:
                description: Fetch a specific Country.
                tags:
                  - PricingV2Country
            /v2/Trunking/Numbers/{DestinationNumber}:
              description: Trunking pricing for a specific phone number
              get:
                description: >-
                  Fetch pricing information for a specific destination and,
                  optionally, origination phone number.
                tags:
                  - PricingV2Number
            /v2/Trunking/Numbers:
              description: Trunking pricing for a specific phone number
            /v2/Voice:
              description: Voice pricing
            /v2/Voice/Countries:
              description: Voice pricing by country
              get:
                description: ''
                tags:
                  - PricingV2Country
            /v2/Voice/Countries/{IsoCountry}:
              description: Voice pricing by country
              get:
                description: Fetch a specific Country.
                tags:
                  - PricingV2Country
            /v2/Voice/Numbers/{DestinationNumber}:
              description: Voice pricing for a specific phone number
              get:
                description: >-
                  Fetch pricing information for a specific destination and,
                  optionally, origination phone number.
                tags:
                  - PricingV2Number
            /v2/Voice/Numbers:
              description: Voice pricing for a specific phone number
          tags:
            - name: PricingV2Country
            - name: PricingV2Number
          x-maturity:
            - name: GA
              description: This product is Generally Av
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
    tags:
      - Proxies
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
                  - ProxyV1Interaction
              delete:
                description: Delete a specific Interaction.
                tags:
                  - ProxyV1Interaction
            /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of all Interactions for a Session. A maximum
                  of 100 records will be returned per page.
                tags:
                  - ProxyV1Interaction
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
                  - ProxyV1MessageInteraction
              get:
                description: ''
                tags:
                  - ProxyV1MessageInteraction
            /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - ProxyV1MessageInteraction
            /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Participant.
                tags:
                  - ProxyV1Participant
              delete:
                description: >-
                  Delete a specific Participant. This is a soft-delete. The
                  participant remains associated with the session and cannot be
                  re-added. Participants are only permanently deleted when the
                  [Session](https://www.twilio.com/docs/proxy/api/session) is
                  deleted.
                tags:
                  - ProxyV1Participant
            /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Participants in a Session.
                tags:
                  - ProxyV1Participant
              post:
                description: Add a new Participant to the Session
                tags:
                  - ProxyV1Participant
            /v1/Services/{ServiceSid}/PhoneNumbers:
              description: 'TODO: Resource-level docs'
              post:
                description: Add a Phone Number to a Service's Proxy Number Pool.
                tags:
                  - ProxyV1PhoneNumber
              get:
                description: >-
                  Retrieve a list of all Phone Numbers in the Proxy Number Pool
                  for a Service. A maximum of 100 records will be returned per
                  page.
                tags:
                  - ProxyV1PhoneNumber
            /v1/Services/{ServiceSid}/PhoneNumbers/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Phone Number from a Service.
                tags:
                  - ProxyV1PhoneNumber
              get:
                description: Fetch a specific Phone Number.
                tags:
                  - ProxyV1PhoneNumber
              post:
                description: Update a specific Proxy Number.
                tags:
                  - ProxyV1PhoneNumber
            /v1/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Service.
                tags:
                  - ProxyV1Service
              delete:
                description: Delete a specific Service.
                tags:
                  - ProxyV1Service
              post:
                description: Update a specific Service.
                tags:
                  - ProxyV1Service
            /v1/Services:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of all Services for Twilio Proxy. A maximum of
                  100 records will be returned per page.
                tags:
                  - ProxyV1Service
              post:
                description: Create a new Service for Twilio Proxy
                tags:
                  - ProxyV1Service
            /v1/Services/{ServiceSid}/Sessions/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Session.
                tags:
                  - ProxyV1Session
              delete:
                description: Delete a specific Session.
                tags:
                  - ProxyV1Session
              post:
                description: Update a specific Session.
                tags:
                  - ProxyV1Session
            /v1/Services/{ServiceSid}/Sessions:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of all Sessions for the Service. A maximum of
                  100 records will be returned per page.
                tags:
                  - ProxyV1Session
              post:
                description: Create a new Session
                tags:
                  - ProxyV1Session
            /v1/Services/{ServiceSid}/ShortCodes:
              description: 'TODO: Resource-level docs'
              post:
                description: Add a Short Code to the Proxy Number Pool for the Service.
                tags:
                  - ProxyV1ShortCode
              get:
                description: >-
                  Retrieve a list of all Short Codes in the Proxy Number Pool
                  for the Service. A maximum of 100 records will be returned per
                  page.
                tags:
                  - ProxyV1ShortCode
            /v1/Services/{ServiceSid}/ShortCodes/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Short Code from a Service.
                tags:
                  - ProxyV1ShortCode
              get:
                description: Fetch a specific Short Code.
                tags:
                  - ProxyV1ShortCode
              post:
                description: Update a specific Short Code.
                tags:
                  - ProxyV1ShortCode
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
                change. Use it with 
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
    tags:
      - Routes
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
                  - RoutesV2PhoneNumber
              get:
                description: >-
                  Fetch the Inbound Processing Region assigned to a phone
                  number.
                tags:
                  - RoutesV2PhoneNumber
            /v2/SipDomains/{SipDomain}:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - RoutesV2SipDomain
              get:
                description: ''
                tags:
                  - RoutesV2SipDomain
            /v2/Trunks/{SipTrunkDomain}:
              description: 'TODO: Resource-level docs'
              post:
                description: Assign an Inbound Processing Region to a SIP Trunk
                tags:
                  - RoutesV2Trunk
              get:
                description: Fetch the Inbound Processing Region assigned to a SIP Trunk.
                tags:
                  - RoutesV2Trunk
          tags:
            - name: RoutesV2PhoneNumber
            - name: RoutesV2SipDomain
            - name: RoutesV2Trunk
          x-maturity:
            - name: GA
              description: This product is Generally Av
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
    tags:
      - Serverless
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
                  - ServerlessV1Asset
              post:
                description: Create a new Asset resource.
                tags:
                  - ServerlessV1Asset
            /v1/Services/{ServiceSid}/Assets/{Sid}:
              description: >-
                A wrapper that represents a static file and groups the different
                Versions of the static file.
              get:
                description: Retrieve a specific Asset resource.
                tags:
                  - ServerlessV1Asset
              delete:
                description: Delete an Asset resource.
                tags:
                  - ServerlessV1Asset
              post:
                description: Update a specific Asset resource.
                tags:
                  - ServerlessV1Asset
            /v1/Services/{ServiceSid}/Assets/{AssetSid}/Versions:
              description: The content of an Asset.
              get:
                description: Retrieve a list of all Asset Versions.
                tags:
                  - ServerlessV1AssetVersion
            /v1/Services/{ServiceSid}/Assets/{AssetSid}/Versions/{Sid}:
              description: The content of an Asset.
              get:
                description: Retrieve a specific Asset Version.
                tags:
                  - ServerlessV1AssetVersion
            /v1/Services/{ServiceSid}/Builds:
              description: >-
                A collection of Function Versions, Asset Versions, Dependencies,
                and a Runtime that form a deployable unit.
              get:
                description: Retrieve a list of all Builds.
                tags:
                  - ServerlessV1Build
              post:
                description: >-
                  Create a new Build resource. At least one function version or
                  asset version is required.
                tags:
                  - ServerlessV1Build
            /v1/Services/{ServiceSid}/Builds/{Sid}:
              description: >-
                A collection of Function Versions, Asset Versions, Dependencies,
                and a Runtime that form a deployable unit.
              get:
                description: Retrieve a specific Build resource.
                tags:
                  - ServerlessV1Build
              delete:
                description: Delete a Build resource.
                tags:
                  - ServerlessV1Build
            /v1/Services/{ServiceSid}/Builds/{Sid}/Status:
              description: The status of a Build resource.
              get:
                description: Retrieve a specific Build resource.
                tags:
                  - ServerlessV1BuildStatus
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Deployments:
              description: >-
                An association of a Build with an Environment so that the Build
                is published in the Environment.
              get:
                description: Retrieve a list of all Deployments.
                tags:
                  - ServerlessV1Deployment
              post:
                description: Create a new Deployment.
                tags:
                  - ServerlessV1Deployment
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Deployments/{Sid}:
              description: >-
                An association of a Build with an Environment so that the Build
                is published in the Environment.
              get:
                description: Retrieve a specific Deployment.
                tags:
                  - ServerlessV1Deployment
            /v1/Services/{ServiceSid}/Environments:
              description: >-
                Represents a deployed build of a given set of Functions and/or
                Assets at a specific URL.
              get:
                description: Retrieve a list of all environments.
                tags:
                  - ServerlessV1Environment
              post:
                description: Create a new environment.
                tags:
                  - ServerlessV1Environment
            /v1/Services/{ServiceSid}/Environments/{Sid}:
              description: >-
                Represents a deployed build of a given set of Functions and/or
                Assets at a specific URL.
              get:
                description: Retrieve a specific environment.
                tags:
                  - ServerlessV1Environment
              delete:
                description: Delete a specific environment.
                tags:
                  - ServerlessV1Environment
            /v1/Services/{ServiceSid}/Functions:
              description: >-
                A wrapper that represents a Serverless JavaScript function and
                groups the different  and groups the different Versions of this
                code.
              get:
                description: Retrieve a list of all Functions.
                tags:
                  - ServerlessV1Function
              post:
                description: Create a new Function resource.
                tags:
                  - ServerlessV1Function
            /v1/Services/{ServiceSid}/Functions/{Sid}:
              description: >-
                A wrapper that represents a Serverless JavaScript function and
                groups the different  and groups the different Versions of this
                code.
              get:
                description: Retrieve a specific Function resource.
                tags:
                  - ServerlessV1Function
              delete:
                description: Delete a Function resource.
                tags:
                  - ServerlessV1Function
              post:
                description: Update a specific Function resource.
                tags:
                  - ServerlessV1Function
            /v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions:
              description: The content of a Function.
              get:
                description: Retrieve a list of all Function Version resources.
                tags:
                  - ServerlessV1FunctionVersion
            /v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions/{Sid}:
              description: The content of a Function.
              get:
                description: Retrieve a specific Function Version resource.
                tags:
                  - ServerlessV1FunctionVersion
            /v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions/{Sid}/Content:
              description: The code of a Function Version.
              get:
                description: >-
                  Retrieve a the content of a specific Function Version
                  resource.
                tags:
                  - ServerlessV1FunctionVersionContent
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Logs:
              description: >-
                A record of an event that occurred related to a function
                invocation.
              get:
                description: Retrieve a list of all logs.
                tags:
                  - ServerlessV1Log
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Logs/{Sid}:
              description: >-
                A record of an event that occurred related to a function
                invocation.
              get:
                description: Retrieve a specific log.
                tags:
                  - ServerlessV1Log
            /v1/Services:
              description: >-
                The top-level resource for a Serverless application, which
                serves as a container for the application environments.
              get:
                description: Retrieve a list of all Services.
                tags:
                  - ServerlessV1Service
              post:
                description: Create a new Service resource.
                tags:
                  - ServerlessV1Service
            /v1/Services/{Sid}:
              description: >-
                The top-level resource for a Serverless application, which
                serves as a container for the application environments.
              get:
                description: Retrieve a specific Service resource.
                tags:
                  - ServerlessV1Service
              delete:
                description: Delete a Service resource.
                tags:
                  - ServerlessV1Service
              post:
                description: Update a specific Service resource.
                tags:
                  - ServerlessV1Service
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Variables:
              description: A key and value pair that is specific to an Environment.
              get:
                description: Retrieve a list of all Variables.
                tags:
                  - ServerlessV1Variable
              post:
                description: Create a new Variable.
                tags:
                  - ServerlessV1Variable
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Variables/{Sid}:
              description: A key and value pair that is specific to an Environment.
              get:
                description: Retrieve a specific Variable.
                tags:
                  - ServerlessV1Variable
              post:
                description: Update a specific Variable.
                tags:
                  - ServerlessV1Variable
              delete:
                description: Delete a specific Variable.
                tags:
                  - ServerlessV1Variable
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
                change. Use it with 
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
    tags:
      - Studios
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
                  - StudioV2Execution
              post:
                description: Triggers a new Execution for the Flow
                tags:
                  - StudioV2Execution
            /v2/Flows/{FlowSid}/Executions/{Sid}:
              description: Executions of Studio flows
              get:
                description: Retrieve an Execution
                tags:
                  - StudioV2Execution
              delete:
                description: Delete the Execution and all Steps relating to it.
                tags:
                  - StudioV2Execution
              post:
                description: Update the status of an Execution to `ended`.
                tags:
                  - StudioV2Execution
            /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Context:
              description: JSON context for executions
              get:
                description: Retrieve the most recent context for an Execution.
                tags:
                  - StudioV2ExecutionContext
            /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps:
              description: Individual steps within an execution
              get:
                description: Retrieve a list of all Steps for an Execution.
                tags:
                  - StudioV2ExecutionStep
            /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}:
              description: Individual steps within an execution
              get:
                description: Retrieve a Step.
                tags:
                  - StudioV2ExecutionStep
            /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context:
              description: JSON context for an individual step within an execution
              get:
                description: Retrieve the context for an Execution Step.
                tags:
                  - StudioV2ExecutionStepContext
            /v2/Flows:
              description: Studio flows
              post:
                description: Create a Flow.
                tags:
                  - StudioV2Flow
              get:
                description: Retrieve a list of all Flows.
                tags:
                  - StudioV2Flow
            /v2/Flows/{Sid}:
              description: Studio flows
              post:
                description: Update a Flow.
                tags:
                  - StudioV2Flow
              get:
                description: Retrieve a specific Flow.
                tags:
                  - StudioV2Flow
              delete:
                description: Delete a specific Flow.
                tags:
                  - StudioV2Flow
            /v2/Flows/{Sid}/Revisions:
              description: Studio flows revisions
              get:
                description: Retrieve a list of all Flows revisions.
                tags:
                  - StudioV2FlowRevision
            /v2/Flows/{Sid}/Revisions/{Revision}:
              description: Studio flows revisions
              get:
                description: Retrieve a specific Flow revision.
                tags:
                  - StudioV2FlowRevision
            /v2/Flows/Validate:
              description: Flow definition validator
              post:
                description: Validate flow JSON definition
                tags:
                  - StudioV2FlowValidate
            /v2/Flows/{Sid}/TestUsers:
              description: Test users of a flow
              get:
                description: Fetch flow test users
                tags:
                  - StudioV2FlowTestUser
              post:
                description: Update flow test users
                tags:
                  - StudioV2FlowTestUser
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
              description: This product is Generally Av
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
    tags:
      - SIM
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
                  - SupersimV1BillingPeriod
            /v1/ESimProfiles:
              description: eSIM Profiles that can be loaded onto consumer eUICC SIMs
              post:
                description: Order an eSIM Profile.
                tags:
                  - SupersimV1EsimProfile
              get:
                description: Retrieve a list of eSIM Profiles.
                tags:
                  - SupersimV1EsimProfile
            /v1/ESimProfiles/{Sid}:
              description: eSIM Profiles that can be loaded onto consumer eUICC SIMs
              get:
                description: Fetch an eSIM Profile.
                tags:
                  - SupersimV1EsimProfile
            /v1/Fleets:
              description: >-
                Configure shared settings inherited by all Super SIMs assigned
                to the Fleet
              post:
                description: Create a Fleet
                tags:
                  - SupersimV1Fleet
              get:
                description: Retrieve a list of Fleets from your account.
                tags:
                  - SupersimV1Fleet
            /v1/Fleets/{Sid}:
              description: >-
                Configure shared settings inherited by all Super SIMs assigned
                to the Fleet
              get:
                description: Fetch a Fleet instance from your account.
                tags:
                  - SupersimV1Fleet
              post:
                description: >-
                  Updates the given properties of a Super SIM Fleet instance
                  from your account.
                tags:
                  - SupersimV1Fleet
            /v1/IpCommands:
              description: Machine-to-machine IP Commands sent to/from Super SIMs
              post:
                description: Send an IP Command to a Super SIM.
                tags:
                  - SupersimV1IpCommand
              get:
                description: Retrieve a list of IP Commands from your account.
                tags:
                  - SupersimV1IpCommand
            /v1/IpCommands/{Sid}:
              description: Machine-to-machine IP Commands sent to/from Super SIMs
              get:
                description: Fetch IP Command instance from your account.
                tags:
                  - SupersimV1IpCommand
            /v1/Networks/{Sid}:
              description: Mobile operator networks to which Super SIMs can connect
              get:
                description: Fetch a Network resource.
                tags:
                  - SupersimV1Network
            /v1/Networks:
              description: Mobile operator networks to which Super SIMs can connect
              get:
                description: Retrieve a list of Network resources.
                tags:
                  - SupersimV1Network
            /v1/NetworkAccessProfiles:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Network Access Profile
                tags:
                  - SupersimV1NetworkAccessProfile
              get:
                description: Retrieve a list of Network Access Profiles from your account.
                tags:
                  - SupersimV1NetworkAccessProfile
            /v1/NetworkAccessProfiles/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a Network Access Profile instance from your account.
                tags:
                  - SupersimV1NetworkAccessProfile
              post:
                description: >-
                  Updates the given properties of a Network Access Profile in
                  your account.
                tags:
                  - SupersimV1NetworkAccessProfile
            /v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks:
              description: >-
                Mobile operator networks which Network Access Profiles allow
                access to
              get:
                description: >-
                  Retrieve a list of Network Access Profile resource's Network
                  resource.
                tags:
                  - SupersimV1NetworkAccessProfileNetwork
              post:
                description: Add a Network resource to the Network Access Profile resource.
                tags:
                  - SupersimV1NetworkAccessProfileNetwork
            /v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks/{Sid}:
              description: >-
                Mobile operator networks which Network Access Profiles allow
                access to
              delete:
                description: >-
                  Remove a Network resource from the Network Access Profile
                  resource's.
                tags:
                  - SupersimV1NetworkAccessProfileNetwork
              get:
                description: Fetch a Network Access Profile resource's Network resource.
                tags:
                  - SupersimV1NetworkAccessProfileNetwork
            /v1/SettingsUpdates:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of Settings Updates.
                tags:
                  - SupersimV1SettingsUpdate
            /v1/Sims:
              description: Individual IoT Super SIMs
              post:
                description: Register a Super SIM to your Account
                tags:
                  - SupersimV1Sim
              get:
                description: Retrieve a list of Super SIMs from your account.
                tags:
                  - SupersimV1Sim
            /v1/Sims/{Sid}:
              description: Individual IoT Super SIMs
              get:
                description: Fetch a Super SIM instance from your account.
                tags:
                  - SupersimV1Sim
              post:
                description: >-
                  Updates the given properties of a Super SIM instance from your
                  account.
                tags:
                  - SupersimV1Sim
            /v1/Sims/{SimSid}/IpAddresses:
              description: IP Addresses for a Super SIM configured to use a VPN connection
              get:
                description: Retrieve a list of IP Addresses for the given Super SIM.
                tags:
                  - SupersimV1SimIpAddress
            /v1/SmsCommands:
              description: Machine-to-machine SMS Commands sent to/from SIMs
              post:
                description: Send SMS Command to a Sim.
                tags:
                  - SupersimV1SmsCommand
              get:
                description: Retrieve a list of SMS Commands from your account.
                tags:
                  - SupersimV1SmsCommand
            /v1/SmsCommands/{Sid}:
              description: Machine-to-machine SMS Commands sent to/from SIMs
              get:
                description: Fetch SMS Command instance from your account.
                tags:
                  - SupersimV1SmsCommand
            /v1/UsageRecords:
              description: Usage information for Sim resources
              get:
                description: List UsageRecords
                tags:
                  - SupersimV1UsageRecord
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
                change. Use it with 
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
    tags:
      - Sync
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
                  - SyncV1Document
              delete:
                description: ''
                tags:
                  - SyncV1Document
              post:
                description: ''
                tags:
                  - SyncV1Document
            /v1/Services/{ServiceSid}/Documents:
              description: Sync Document objects
              post:
                description: ''
                tags:
                  - SyncV1Document
              get:
                description: ''
                tags:
                  - SyncV1Document
            /v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}:
              description: Sync document permissions
              get:
                description: Fetch a specific Sync Document Permission.
                tags:
                  - SyncV1DocumentPermission
              delete:
                description: Delete a specific Sync Document Permission.
                tags:
                  - SyncV1DocumentPermission
              post:
                description: Update an identity's access to a specific Sync Document.
                tags:
                  - SyncV1DocumentPermission
            /v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions:
              description: Sync document permissions
              get:
                description: >-
                  Retrieve a list of all Permissions applying to a Sync
                  Document.
                tags:
                  - SyncV1DocumentPermission
            /v1/Services/{Sid}:
              description: Containers for sync objects
              get:
                description: ''
                tags:
                  - SyncV1Service
              delete:
                description: ''
                tags:
                  - SyncV1Service
              post:
                description: ''
                tags:
                  - SyncV1Service
            /v1/Services:
              description: Containers for sync objects
              post:
                description: ''
                tags:
                  - SyncV1Service
              get:
                description: ''
                tags:
                  - SyncV1Service
            /v1/Services/{ServiceSid}/Streams/{StreamSid}/Messages:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Stream Message.
                tags:
                  - SyncV1StreamMessage
            /v1/Services/{ServiceSid}/Lists/{Sid}:
              description: Sync list objects
              get:
                description: ''
                tags:
                  - SyncV1SyncList
              delete:
                description: ''
                tags:
                  - SyncV1SyncList
              post:
                description: ''
                tags:
                  - SyncV1SyncList
            /v1/Services/{ServiceSid}/Lists:
              description: Sync list objects
              post:
                description: ''
                tags:
                  - SyncV1SyncList
              get:
                description: ''
                tags:
                  - SyncV1SyncList
            /v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}:
              description: Items in a sync list
              get:
                description: ''
                tags:
                  - SyncV1SyncListItem
              delete:
                description: ''
                tags:
                  - SyncV1SyncListItem
              post:
                description: ''
                tags:
                  - SyncV1SyncListItem
            /v1/Services/{ServiceSid}/Lists/{ListSid}/Items:
              description: Items in a sync list
              post:
                description: ''
                tags:
                  - SyncV1SyncListItem
              get:
                description: ''
                tags:
                  - SyncV1SyncListItem
            /v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}:
              description: Permissions for Sync list items
              get:
                description: Fetch a specific Sync List Permission.
                tags:
                  - SyncV1SyncListPermission
              delete:
                description: Delete a specific Sync List Permission.
                tags:
                  - SyncV1SyncListPermission
              post:
                description: Update an identity's access to a specific Sync List.
                tags:
                  - SyncV1SyncListPermission
            /v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions:
              description: Permissions for Sync list items
              get:
                description: Retrieve a list of all Permissions applying to a Sync List.
                tags:
                  - SyncV1SyncListPermission
            /v1/Services/{ServiceSid}/Maps/{Sid}:
              description: Sync map objects
              get:
                description: ''
                tags:
                  - SyncV1SyncMap
              delete:
                description: ''
                tags:
                  - SyncV1SyncMap
              post:
                description: ''
                tags:
                  - SyncV1SyncMap
            /v1/Services/{ServiceSid}/Maps:
              description: Sync map objects
              post:
                description: ''
                tags:
                  - SyncV1SyncMap
              get:
                description: ''
                tags:
                  - SyncV1SyncMap
            /v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}:
              description: Keys in a sync map
              get:
                description: ''
                tags:
                  - SyncV1SyncMapItem
              delete:
                description: ''
                tags:
                  - SyncV1SyncMapItem
              post:
                description: ''
                tags:
                  - SyncV1SyncMapItem
            /v1/Services/{ServiceSid}/Maps/{MapSid}/Items:
              description: Keys in a sync map
              post:
                description: ''
                tags:
                  - SyncV1SyncMapItem
              get:
                description: ''
                tags:
                  - SyncV1SyncMapItem
            /v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Sync Map Permission.
                tags:
                  - SyncV1SyncMapPermission
              delete:
                description: Delete a specific Sync Map Permission.
                tags:
                  - SyncV1SyncMapPermission
              post:
                description: Update an identity's access to a specific Sync Map.
                tags:
                  - SyncV1SyncMapPermission
            /v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Permissions applying to a Sync Map.
                tags:
                  - SyncV1SyncMapPermission
            /v1/Services/{ServiceSid}/Streams/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Stream.
                tags:
                  - SyncV1SyncStream
              delete:
                description: Delete a specific Stream.
                tags:
                  - SyncV1SyncStream
              post:
                description: Update a specific Stream.
                tags:
                  - SyncV1SyncStream
            /v1/Services/{ServiceSid}/Streams:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Stream.
                tags:
                  - SyncV1SyncStream
              get:
                description: Retrieve a list of all Streams in a Service Instance.
                tags:
                  - SyncV1SyncStream
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
              description: This product is Generally Av
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
    tags:
      - Tasks
      - Routers
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
                  - TaskrouterV1Activity
              post:
                description: ''
                tags:
                  - TaskrouterV1Activity
              delete:
                description: ''
                tags:
                  - TaskrouterV1Activity
            /v1/Workspaces/{WorkspaceSid}/Activities:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1Activity
              post:
                description: ''
                tags:
                  - TaskrouterV1Activity
            /v1/Workspaces/{WorkspaceSid}/Events/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1Event
            /v1/Workspaces/{WorkspaceSid}/Events:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1Event
            /v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1Task
              post:
                description: ''
                tags:
                  - TaskrouterV1Task
              delete:
                description: ''
                tags:
                  - TaskrouterV1Task
            /v1/Workspaces/{WorkspaceSid}/Tasks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1Task
              post:
                description: ''
                tags:
                  - TaskrouterV1Task
            /v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}:
              description: Types of tasks
              get:
                description: ''
                tags:
                  - TaskrouterV1TaskChannel
              post:
                description: ''
                tags:
                  - TaskrouterV1TaskChannel
              delete:
                description: ''
                tags:
                  - TaskrouterV1TaskChannel
            /v1/Workspaces/{WorkspaceSid}/TaskChannels:
              description: Types of tasks
              get:
                description: ''
                tags:
                  - TaskrouterV1TaskChannel
              post:
                description: ''
                tags:
                  - TaskrouterV1TaskChannel
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1TaskQueue
              post:
                description: ''
                tags:
                  - TaskrouterV1TaskQueue
              delete:
                description: ''
                tags:
                  - TaskrouterV1TaskQueue
            /v1/Workspaces/{WorkspaceSid}/TaskQueues:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1TaskQueue
              post:
                description: ''
                tags:
                  - TaskrouterV1TaskQueue
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/CumulativeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1TaskQueueCumulativeStatistics
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1TaskQueueRealTimeStatistics
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1TaskQueueStatistics
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1TaskQueuesStatistics
            /v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations:
              description: Tasks reserved for workers
              get:
                description: ''
                tags:
                  - TaskrouterV1Reservation
            /v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}:
              description: Tasks reserved for workers
              get:
                description: ''
                tags:
                  - TaskrouterV1Reservation
              post:
                description: ''
                tags:
                  - TaskrouterV1Reservation
            /v1/Workspaces/{WorkspaceSid}/Workers:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1Worker
              post:
                description: ''
                tags:
                  - TaskrouterV1Worker
            /v1/Workspaces/{WorkspaceSid}/Workers/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1Worker
              post:
                description: ''
                tags:
                  - TaskrouterV1Worker
              delete:
                description: ''
                tags:
                  - TaskrouterV1Worker
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1WorkerChannel
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1WorkerChannel
              post:
                description: ''
                tags:
                  - TaskrouterV1WorkerChannel
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1WorkerStatistics
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations:
              description: Current and past reservations for a worker
              get:
                description: ''
                tags:
                  - TaskrouterV1Reservation
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}:
              description: Current and past reservations for a worker
              get:
                description: ''
                tags:
                  - TaskrouterV1Reservation
              post:
                description: ''
                tags:
                  - TaskrouterV1Reservation
            /v1/Workspaces/{WorkspaceSid}/Workers/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1WorkersStatistics
            /v1/Workspaces/{WorkspaceSid}/Workers/CumulativeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1WorkersCumulativeStatistics
            /v1/Workspaces/{WorkspaceSid}/Workers/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1WorkersRealTimeStatistics
            /v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1Workflow
              post:
                description: ''
                tags:
                  - TaskrouterV1Workflow
              delete:
                description: ''
                tags:
                  - TaskrouterV1Workflow
            /v1/Workspaces/{WorkspaceSid}/Workflows:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1Workflow
              post:
                description: ''
                tags:
                  - TaskrouterV1Workflow
            /v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/CumulativeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1WorkflowCumulativeStatistics
            /v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1WorkflowRealTimeStatistics
            /v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1WorkflowStatistics
            /v1/Workspaces/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1Workspace
              post:
                description: ''
                tags:
                  - TaskrouterV1Workspace
              delete:
                description: ''
                tags:
                  - TaskrouterV1Workspace
            /v1/Workspaces:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1Workspace
              post:
                description: ''
                tags:
                  - TaskrouterV1Workspace
            /v1/Workspaces/{WorkspaceSid}/CumulativeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1WorkspaceCumulativeStatistics
            /v1/Workspaces/{WorkspaceSid}/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1WorkspaceRealTimeStatistics
            /v1/Workspaces/{WorkspaceSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - TaskrouterV1WorkspaceStatistics
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
              description: This product is Generally Av
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
    tags:
      - Trunking
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
                  - TrunkingV1CredentialList
              delete:
                description: ''
                tags:
                  - TrunkingV1CredentialList
            /v1/Trunks/{TrunkSid}/CredentialLists:
              description: List of credentials for accessing a trunk
              post:
                description: ''
                tags:
                  - TrunkingV1CredentialList
              get:
                description: ''
                tags:
                  - TrunkingV1CredentialList
            /v1/Trunks/{TrunkSid}/IpAccessControlLists/{Sid}:
              description: List of IP addresses for accessing a trunk
              get:
                description: ''
                tags:
                  - TrunkingV1IpAccessControlList
              delete:
                description: Remove an associated IP Access Control List from a Trunk
                tags:
                  - TrunkingV1IpAccessControlList
            /v1/Trunks/{TrunkSid}/IpAccessControlLists:
              description: List of IP addresses for accessing a trunk
              post:
                description: Associate an IP Access Control List with a Trunk
                tags:
                  - TrunkingV1IpAccessControlList
              get:
                description: List all IP Access Control Lists for a Trunk
                tags:
                  - TrunkingV1IpAccessControlList
            /v1/Trunks/{TrunkSid}/OriginationUrls/{Sid}:
              description: >-
                Network element entry points into your communications
                infrastructure
              get:
                description: ''
                tags:
                  - TrunkingV1OriginationUrl
              delete:
                description: ''
                tags:
                  - TrunkingV1OriginationUrl
              post:
                description: ''
                tags:
                  - TrunkingV1OriginationUrl
            /v1/Trunks/{TrunkSid}/OriginationUrls:
              description: >-
                Network element entry points into your communications
                infrastructure
              post:
                description: ''
                tags:
                  - TrunkingV1OriginationUrl
              get:
                description: ''
                tags:
                  - TrunkingV1OriginationUrl
            /v1/Trunks/{TrunkSid}/PhoneNumbers/{Sid}:
              description: Phone numbers associated with trunks
              get:
                description: ''
                tags:
                  - TrunkingV1PhoneNumber
              delete:
                description: ''
                tags:
                  - TrunkingV1PhoneNumber
            /v1/Trunks/{TrunkSid}/PhoneNumbers:
              description: Phone numbers associated with trunks
              post:
                description: ''
                tags:
                  - TrunkingV1PhoneNumber
              get:
                description: ''
                tags:
                  - TrunkingV1PhoneNumber
            /v1/Trunks/{TrunkSid}/Recording:
              description: Recording settings for a trunk
              get:
                description: ''
                tags:
                  - TrunkingV1Recording
              post:
                description: ''
                tags:
                  - TrunkingV1Recording
            /v1/Trunks/{Sid}:
              description: Represents a SIP trunk
              get:
                description: ''
                tags:
                  - TrunkingV1Trunk
              delete:
                description: ''
                tags:
                  - TrunkingV1Trunk
              post:
                description: ''
                tags:
                  - TrunkingV1Trunk
            /v1/Trunks:
              description: Represents a SIP trunk
              post:
                description: ''
                tags:
                  - TrunkingV1Trunk
              get:
                description: ''
                tags:
                  - TrunkingV1Trunk
          tags:
            - name: TrunkingV1CredentialList
            - name: TrunkingV1IpAccessControlList
            - name: TrunkingV1OriginationUrl
            - name: TrunkingV1PhoneNumber
            - name: TrunkingV1Recording
            - name: TrunkingV1Trunk
          x-maturity:
            - name: GA
              description: This product is Generally Av
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
    tags:
      - Trust
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
                  - TrusthubV1ComplianceInquiries
            /v1/ComplianceInquiries/Customers/{CustomerId}/Initialize:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Resume a specific Compliance Inquiry that has expired, or
                  re-open a rejected Compliance Inquiry for editing.
                tags:
                  - TrusthubV1ComplianceInquiries
            /v1/ComplianceInquiries/Tollfree/Initialize:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Create a new Compliance Tollfree Verification Inquiry for the
                  authenticated account. This is necessary to start a new
                  embedded session.
                tags:
                  - TrusthubV1ComplianceTollfreeInquiries
            /v1/CustomerProfiles:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Customer-Profile.
                tags:
                  - TrusthubV1CustomerProfiles
              get:
                description: Retrieve a list of all Customer-Profiles for an account.
                tags:
                  - TrusthubV1CustomerProfiles
            /v1/CustomerProfiles/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Customer-Profile instance.
                tags:
                  - TrusthubV1CustomerProfiles
              post:
                description: Updates a Customer-Profile in an account.
                tags:
                  - TrusthubV1CustomerProfiles
              delete:
                description: Delete a specific Customer-Profile.
                tags:
                  - TrusthubV1CustomerProfiles
            /v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - TrusthubV1CustomerProfilesChannelEndpointAssignment
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - TrusthubV1CustomerProfilesChannelEndpointAssignment
            /v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - TrusthubV1CustomerProfilesChannelEndpointAssignment
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - TrusthubV1CustomerProfilesChannelEndpointAssignment
            /v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - TrusthubV1CustomerProfilesEntityAssignments
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - TrusthubV1CustomerProfilesEntityAssignments
            /v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - TrusthubV1CustomerProfilesEntityAssignments
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - TrusthubV1CustomerProfilesEntityAssignments
            /v1/CustomerProfiles/{CustomerProfileSid}/Evaluations:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Evaluation
                tags:
                  - TrusthubV1CustomerProfilesEvaluations
              get:
                description: >-
                  Retrieve a list of Evaluations associated to the
                  customer_profile resource.
                tags:
                  - TrusthubV1CustomerProfilesEvaluations
            /v1/CustomerProfiles/{CustomerProfileSid}/Evaluations/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Evaluation Instance.
                tags:
                  - TrusthubV1CustomerProfilesEvaluations
            /v1/EndUsers:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new End User.
                tags:
                  - TrusthubV1EndUser
              get:
                description: Retrieve a list of all End User for an account.
                tags:
                  - TrusthubV1EndUser
            /v1/EndUsers/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific End User Instance.
                tags:
                  - TrusthubV1EndUser
              post:
                description: Update an existing End User.
                tags:
                  - TrusthubV1EndUser
              delete:
                description: Delete a specific End User.
                tags:
                  - TrusthubV1EndUser
            /v1/EndUserTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all End-User Types.
                tags:
                  - TrusthubV1EndUserType
            /v1/EndUserTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific End-User Type Instance.
                tags:
                  - TrusthubV1EndUserType
            /v1/Policies:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Policys.
                tags:
                  - TrusthubV1Policies
            /v1/Policies/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Policy Instance.
                tags:
                  - TrusthubV1Policies
            /v1/SupportingDocuments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Supporting Document.
                tags:
                  - TrusthubV1SupportingDocument
              get:
                description: Retrieve a list of all Supporting Document for an account.
                tags:
                  - TrusthubV1SupportingDocument
            /v1/SupportingDocuments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Supporting Document Instance.
                tags:
                  - TrusthubV1SupportingDocument
              post:
                description: Update an existing Supporting Document.
                tags:
                  - TrusthubV1SupportingDocument
              delete:
                description: Delete a specific Supporting Document.
                tags:
                  - TrusthubV1SupportingDocument
            /v1/SupportingDocumentTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Supporting Document Types.
                tags:
                  - TrusthubV1SupportingDocumentType
            /v1/SupportingDocumentTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Supporting Document Type Instance.
                tags:
                  - TrusthubV1SupportingDocumentType
            /v1/TrustProducts:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Customer-Profile.
                tags:
                  - TrusthubV1TrustProducts
              get:
                description: Retrieve a list of all Customer-Profiles for an account.
                tags:
                  - TrusthubV1TrustProducts
            /v1/TrustProducts/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Customer-Profile instance.
                tags:
                  - TrusthubV1TrustProducts
              post:
                description: Updates a Customer-Profile in an account.
                tags:
                  - TrusthubV1TrustProducts
              delete:
                description: Delete a specific Customer-Profile.
                tags:
                  - TrusthubV1TrustProducts
            /v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - TrusthubV1TrustProductsChannelEndpointAssignment
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - TrusthubV1TrustProductsChannelEndpointAssignment
            /v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - TrusthubV1TrustProductsChannelEndpointAssignment
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - TrusthubV1TrustProductsChannelEndpointAssignment
            /v1/TrustProducts/{TrustProductSid}/EntityAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - TrusthubV1TrustProductsEntityAssignments
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - TrusthubV1TrustProductsEntityAssignments
            /v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - TrusthubV1TrustProductsEntityAssignments
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - TrusthubV1TrustProductsEntityAssignments
            /v1/TrustProducts/{TrustProductSid}/Evaluations:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Evaluation
                tags:
                  - TrusthubV1TrustProductsEvaluations
              get:
                description: >-
                  Retrieve a list of Evaluations associated to the trust_product
                  resource.
                tags:
                  - TrusthubV1TrustProductsEvaluations
            /v1/TrustProducts/{TrustProductSid}/Evaluations/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Evaluation Instance.
                tags:
                  - TrusthubV1TrustProductsEvaluations
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
              description: This product is Generally Av
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
    tags:
      - Verification
      - Identity
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
                  - VerifyV2AccessToken
            /v2/Services/{ServiceSid}/AccessTokens/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch an Access Token for the Entity
                tags:
                  - VerifyV2AccessToken
            /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Bucket for a Rate Limit
                tags:
                  - VerifyV2Bucket
              get:
                description: Retrieve a list of all Buckets for a Rate Limit.
                tags:
                  - VerifyV2Bucket
            /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}:
              description: 'TODO: Resource-level docs'
              post:
                description: Update a specific Bucket.
                tags:
                  - VerifyV2Bucket
              get:
                description: Fetch a specific Bucket.
                tags:
                  - VerifyV2Bucket
              delete:
                description: Delete a specific Bucket.
                tags:
                  - VerifyV2Bucket
            /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Challenge for the Factor
                tags:
                  - VerifyV2Challenge
              get:
                description: Retrieve a list of all Challenges for a Factor.
                tags:
                  - VerifyV2Challenge
            /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Challenge.
                tags:
                  - VerifyV2Challenge
              post:
                description: Verify a specific Challenge.
                tags:
                  - VerifyV2Challenge
            /v2/Services/{ServiceSid}/Entities:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Entity for the Service
                tags:
                  - VerifyV2Entity
              get:
                description: Retrieve a list of all Entities for a Service.
                tags:
                  - VerifyV2Entity
            /v2/Services/{ServiceSid}/Entities/{Identity}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Entity.
                tags:
                  - VerifyV2Entity
              get:
                description: Fetch a specific Entity.
                tags:
                  - VerifyV2Entity
            /v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Factor.
                tags:
                  - VerifyV2Factor
              get:
                description: Fetch a specific Factor.
                tags:
                  - VerifyV2Factor
              post:
                description: >-
                  Update a specific Factor. This endpoint can be used to Verify
                  a Factor if passed an `AuthPayload` param.
                tags:
                  - VerifyV2Factor
            /v2/Services/{ServiceSid}/Entities/{Identity}/Factors:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Factors for an Entity.
                tags:
                  - VerifyV2Factor
              post:
                description: Create a new Factor for the Entity
                tags:
                  - VerifyV2NewFactor
            /v2/Forms/{FormType}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch the forms for a specific Form Type.
                tags:
                  - VerifyV2Form
            /v2/Services/{ServiceSid}/MessagingConfigurations:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new MessagingConfiguration for a service.
                tags:
                  - VerifyV2MessagingConfiguration
              get:
                description: Retrieve a list of all Messaging Configurations for a Service.
                tags:
                  - VerifyV2MessagingConfiguration
            /v2/Services/{ServiceSid}/MessagingConfigurations/{Country}:
              description: 'TODO: Resource-level docs'
              post:
                description: Update a specific MessagingConfiguration
                tags:
                  - VerifyV2MessagingConfiguration
              get:
                description: Fetch a specific MessagingConfiguration.
                tags:
                  - VerifyV2MessagingConfiguration
              delete:
                description: Delete a specific MessagingConfiguration.
                tags:
                  - VerifyV2MessagingConfiguration
            /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{ChallengeSid}/Notifications:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Notification for the corresponding Challenge
                tags:
                  - VerifyV2Notification
            /v2/Services/{ServiceSid}/RateLimits:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Rate Limit for a Service
                tags:
                  - VerifyV2RateLimit
              get:
                description: Retrieve a list of all Rate Limits for a service.
                tags:
                  - VerifyV2RateLimit
            /v2/Services/{ServiceSid}/RateLimits/{Sid}:
              description: 'TODO: Resource-level docs'
              post:
                description: Update a specific Rate Limit.
                tags:
                  - VerifyV2RateLimit
              get:
                description: Fetch a specific Rate Limit.
                tags:
                  - VerifyV2RateLimit
              delete:
                description: Delete a specific Rate Limit.
                tags:
                  - VerifyV2RateLimit
            /v2/SafeList/Numbers:
              description: 'TODO: Resource-level docs'
              post:
                description: Add a new phone number to SafeList.
                tags:
                  - VerifyV2Safelist
            /v2/SafeList/Numbers/{PhoneNumber}:
              description: 'TODO: Resource-level docs'
              get:
                description: Check if a phone number exists in SafeList.
                tags:
                  - VerifyV2Safelist
              delete:
                description: Remove a phone number from SafeList.
                tags:
                  - VerifyV2Safelist
            /v2/Services:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Verification Service.
                tags:
                  - VerifyV2Service
              get:
                description: Retrieve a list of all Verification Services for an account.
                tags:
                  - VerifyV2Service
            /v2/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Verification Service Instance.
                tags:
                  - VerifyV2Service
              delete:
                description: Delete a specific Verification Service Instance.
                tags:
                  - VerifyV2Service
              post:
                description: Update a specific Verification Service.
                tags:
                  - VerifyV2Service
            /v2/Services/{ServiceSid}/Verifications:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Verification using a Service
                tags:
                  - VerifyV2Verification
            /v2/Services/{ServiceSid}/Verifications/{Sid}:
              description: 'TODO: Resource-level docs'
              post:
                description: Update a Verification status
                tags:
                  - VerifyV2Verification
              get:
                description: Fetch a specific Verification
                tags:
                  - VerifyV2Verification
            /v2/Attempts:
              description: 'TODO: Resource-level docs'
              get:
                description: List all the verification attempts for a given Account.
                tags:
                  - VerifyV2VerificationAttempt
            /v2/Attempts/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific verification attempt.
                tags:
                  - VerifyV2VerificationAttempt
            /v2/Attempts/Summary:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Get a summary of how many attempts were made and how many were
                  converted.
                tags:
                  - VerifyV2VerificationAttemptsSummary
            /v2/Services/{ServiceSid}/VerificationCheck:
              description: 'TODO: Resource-level docs'
              post:
                description: challenge a specific Verification Check.
                tags:
                  - VerifyV2VerificationCheck
            /v2/Templates:
              description: 'TODO: Resource-level docs'
              get:
                description: List all the available templates for a given Account.
                tags:
                  - VerifyV2Template
            /v2/Services/{ServiceSid}/Webhooks:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Webhook for the Service
                tags:
                  - VerifyV2Webhook
              get:
                description: Retrieve a list of all Webhooks for a Service.
                tags:
                  - VerifyV2Webhook
            /v2/Services/{ServiceSid}/Webhooks/{Sid}:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - VerifyV2Webhook
              delete:
                description: Delete a specific Webhook.
                tags:
                  - VerifyV2Webhook
              get:
                description: Fetch a specific Webhook.
                tags:
                  - VerifyV2Webhook
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
                change. Use it with 
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
    tags:
      - Videos
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
                  - VideoV1Composition
              delete:
                description: >-
                  Delete a Recording Composition resource identified by a
                  Composition SID.
                tags:
                  - VideoV1Composition
            /v1/Compositions:
              description: Recording compositions
              get:
                description: List of all Recording compositions.
                tags:
                  - VideoV1Composition
              post:
                description: ''
                tags:
                  - VideoV1Composition
            /v1/CompositionHooks/{Sid}:
              description: Recording composition hooks
              get:
                description: >-
                  Returns a single CompositionHook resource identified by a
                  CompositionHook SID.
                tags:
                  - VideoV1CompositionHook
              delete:
                description: >-
                  Delete a Recording CompositionHook resource identified by a
                  `CompositionHook SID`.
                tags:
                  - VideoV1CompositionHook
              post:
                description: ''
                tags:
                  - VideoV1CompositionHook
            /v1/CompositionHooks:
              description: Recording composition hooks
              get:
                description: List of all Recording CompositionHook resources.
                tags:
                  - VideoV1CompositionHook
              post:
                description: ''
                tags:
                  - VideoV1CompositionHook
            /v1/CompositionSettings/Default:
              description: Recording composition settings
              get:
                description: ''
                tags:
                  - VideoV1CompositionSettings
              post:
                description: ''
                tags:
                  - VideoV1CompositionSettings
            /v1/Recordings/{Sid}:
              description: Single-track, single-media recordings
              get:
                description: >-
                  Returns a single Recording resource identified by a Recording
                  SID.
                tags:
                  - VideoV1Recording
              delete:
                description: Delete a Recording resource identified by a Recording SID.
                tags:
                  - VideoV1Recording
            /v1/Recordings:
              description: Single-track, single-media recordings
              get:
                description: List of all Track recordings.
                tags:
                  - VideoV1Recording
            /v1/RecordingSettings/Default:
              description: Recording settings
              get:
                description: ''
                tags:
                  - VideoV1RecordingSettings
              post:
                description: ''
                tags:
                  - VideoV1RecordingSettings
            /v1/Rooms/{Sid}:
              description: Video rooms with one or more participants
              get:
                description: ''
                tags:
                  - VideoV1Room
              post:
                description: ''
                tags:
                  - VideoV1Room
            /v1/Rooms:
              description: Video rooms with one or more participants
              post:
                description: ''
                tags:
                  - VideoV1Room
              get:
                description: ''
                tags:
                  - VideoV1Room
            /v1/Rooms/{RoomSid}/Participants/{Sid}:
              description: Participants in video rooms
              get:
                description: ''
                tags:
                  - VideoV1Participant
              post:
                description: ''
                tags:
                  - VideoV1Participant
            /v1/Rooms/{RoomSid}/Participants:
              description: Participants in video rooms
              get:
                description: ''
                tags:
                  - VideoV1Participant
            /v1/Rooms/{RoomSid}/Participants/{Sid}/Anonymize:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - VideoV1Anonymize
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Returns a single Track resource represented by TrackName or
                  SID.
                tags:
                  - VideoV1PublishedTrack
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Returns a list of tracks associated with a given Participant.
                  Only `currently` Published Tracks are in the list resource.
                tags:
                  - VideoV1PublishedTrack
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns a list of Subscribe Rules for the Participant.
                tags:
                  - VideoV1SubscribeRules
              post:
                description: Update the Subscribe Rules for the Participant
                tags:
                  - VideoV1SubscribeRules
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Returns a single Track resource represented by `track_sid`. 
                  Note: This is one resource with the Video API that requires a
                  SID, be Track Name on the subscriber side is not guaranteed to
                  be unique.
                tags:
                  - VideoV1SubscribedTrack
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Returns a list of tracks that are subscribed for the
                  participant.
                tags:
                  - VideoV1SubscribedTrack
            /v1/Rooms/{RoomSid}/Recordings/{Sid}:
              description: Single-track, single-media room recordings
              get:
                description: ''
                tags:
                  - VideoV1RoomRecording
              delete:
                description: ''
                tags:
                  - VideoV1RoomRecording
            /v1/Rooms/{RoomSid}/Recordings:
              description: Single-track, single-media room recordings
              get:
                description: ''
                tags:
                  - VideoV1RoomRecording
            /v1/Rooms/{RoomSid}/RecordingRules:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns a list of Recording Rules for the Room.
                tags:
                  - VideoV1RecordingRules
              post:
                description: Update the Recording Rules for the Room
                tags:
                  - VideoV1RecordingRules
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
              description: This product is Generally Av
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
    tags:
      - Voice
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
                  - VoiceV1ArchivedCall
            /v1/ByocTrunks:
              description: >-
                BYOC Trunks allow you to bring your own voice carrier to Twilio,
                enabling your calls to use our Programmable Voice APIs.
              post:
                description: ''
                tags:
                  - VoiceV1ByocTrunk
              get:
                description: ''
                tags:
                  - VoiceV1ByocTrunk
            /v1/ByocTrunks/{Sid}:
              description: >-
                BYOC Trunks allow you to bring your own voice carrier to Twilio,
                enabling your calls to use our Programmable Voice APIs.
              get:
                description: ''
                tags:
                  - VoiceV1ByocTrunk
              post:
                description: ''
                tags:
                  - VoiceV1ByocTrunk
              delete:
                description: ''
                tags:
                  - VoiceV1ByocTrunk
            /v1/ConnectionPolicies:
              description: >-
                Connection Policy for sending traffic to your communications
                infrastructure.
              post:
                description: ''
                tags:
                  - VoiceV1ConnectionPolicy
              get:
                description: ''
                tags:
                  - VoiceV1ConnectionPolicy
            /v1/ConnectionPolicies/{Sid}:
              description: >-
                Connection Policy for sending traffic to your communications
                infrastructure.
              get:
                description: ''
                tags:
                  - VoiceV1ConnectionPolicy
              post:
                description: ''
                tags:
                  - VoiceV1ConnectionPolicy
              delete:
                description: ''
                tags:
                  - VoiceV1ConnectionPolicy
            /v1/ConnectionPolicies/{ConnectionPolicySid}/Targets:
              description: >-
                Network element entry points into your communications
                infrastructure
              post:
                description: ''
                tags:
                  - VoiceV1ConnectionPolicyTarget
              get:
                description: ''
                tags:
                  - VoiceV1ConnectionPolicyTarget
            /v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}:
              description: >-
                Network element entry points into your communications
                infrastructure
              get:
                description: ''
                tags:
                  - VoiceV1ConnectionPolicyTarget
              post:
                description: ''
                tags:
                  - VoiceV1ConnectionPolicyTarget
              delete:
                description: ''
                tags:
                  - VoiceV1ConnectionPolicyTarget
            /v1/DialingPermissions:
              description: 'TODO: Resource-level docs'
            /v1/DialingPermissions/Countries/{IsoCode}:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve voice dialing country permissions identified by the
                  given ISO country code
                tags:
                  - VoiceV1Country
            /v1/DialingPermissions/Countries:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve all voice dialing country permissions for this
                  account
                tags:
                  - VoiceV1Country
            /v1/DialingPermissions/BulkCountryUpdates:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Create a bulk update request to change voice dialing country
                  permissions of one or more countries identified by the
                  corresponding [ISO country
                  code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
                tags:
                  - VoiceV1BulkCountryUpdate
            /v1/DialingPermissions/Countries/{IsoCode}/HighRiskSpecialPrefixes:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Fetch the high-risk special services prefixes from the country
                  resource corresponding to the [ISO country
                  code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
                tags:
                  - VoiceV1HighriskSpecialPrefix
            /v1/Settings:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve voice dialing permissions inheritance for the
                  sub-account
                tags:
                  - VoiceV1Settings
              post:
                description: >-
                  Update voice dialing permissions inheritance for the
                  sub-account
                tags:
                  - VoiceV1Settings
            /v1/IpRecords:
              description: >-
                IP Records hold information about the IP addresses and ranges
                ([CIDR](https://tools.ietf.org/html/rfc4632) blocks) that your
                traffic will be associated with.
              post:
                description: ''
                tags:
                  - VoiceV1IpRecord
              get:
                description: ''
                tags:
                  - VoiceV1IpRecord
            /v1/IpRecords/{Sid}:
              description: >-
                IP Records hold information about the IP addresses and ranges
                ([CIDR](https://tools.ietf.org/html/rfc4632) blocks) that your
                traffic will be associated with.
              get:
                description: ''
                tags:
                  - VoiceV1IpRecord
              post:
                description: ''
                tags:
                  - VoiceV1IpRecord
              delete:
                description: ''
                tags:
                  - VoiceV1IpRecord
            /v1/SourceIpMappings:
              description: >-
                With Source IP Mappings, Twilio can recognize your SIP requests
                based on where they are sent from. The Request-URI no longer has
                to have the FQDN (Fully Qualified Domain Name) of your SIP
                Domain.
              post:
                description: ''
                tags:
                  - VoiceV1SourceIpMapping
              get:
                description: ''
                tags:
                  - VoiceV1SourceIpMapping
            /v1/SourceIpMappings/{Sid}:
              description: >-
                With Source IP Mappings, Twilio can recognize your SIP requests
                based on where they are sent from. The Request-URI no longer has
                to have the FQDN (Fully Qualified Domain Name) of your SIP
                Domain.
              get:
                description: ''
                tags:
                  - VoiceV1SourceIpMapping
              post:
                description: ''
                tags:
                  - VoiceV1SourceIpMapping
              delete:
                description: ''
                tags:
                  - VoiceV1SourceIpMapping
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
                developer preview access, please contact
                https://www.twilio.com/help/
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
    tags:
      - Wireless
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
                  - WirelessV1UsageRecord
            /v1/Commands/{Sid}:
              description: Machine-to-machine commands sent to/from devices
              get:
                description: Fetch a Command instance from your account.
                tags:
                  - WirelessV1Command
              delete:
                description: Delete a Command instance from your account.
                tags:
                  - WirelessV1Command
            /v1/Commands:
              description: Machine-to-machine commands sent to/from devices
              get:
                description: Retrieve a list of Commands from your account.
                tags:
                  - WirelessV1Command
              post:
                description: Send a Command to a Sim.
                tags:
                  - WirelessV1Command
            /v1/Sims/{SimSid}/DataSessions:
              description: Data session information for SIMs
              get:
                description: ''
                tags:
                  - WirelessV1DataSession
            /v1/RatePlans:
              description: Capabilities and restrictions for SIMs
              get:
                description: ''
                tags:
                  - WirelessV1RatePlan
              post:
                description: ''
                tags:
                  - WirelessV1RatePlan
            /v1/RatePlans/{Sid}:
              description: Capabilities and restrictions for SIMs
              get:
                description: ''
                tags:
                  - WirelessV1RatePlan
              post:
                description: ''
                tags:
                  - WirelessV1RatePlan
              delete:
                description: ''
                tags:
                  - WirelessV1RatePlan
            /v1/Sims/{Sid}:
              description: A resource representing a Programmable Wireless SIM
              get:
                description: Fetch a Sim resource on your Account.
                tags:
                  - WirelessV1Sim
              post:
                description: >-
                  Updates the given properties of a Sim resource on your
                  Account.
                tags:
                  - WirelessV1Sim
              delete:
                description: Delete a Sim resource on your Account.
                tags:
                  - WirelessV1Sim
            /v1/Sims:
              description: A resource representing a Programmable Wireless SIM
              get:
                description: Retrieve a list of Sim resources on your Account.
                tags:
                  - WirelessV1Sim
            /v1/Sims/{SimSid}/UsageRecords:
              description: Usage information for SIMs
              get:
                description: ''
                tags:
                  - WirelessV1UsageRecord
          tags:
            - name: WirelessV1Command
            - name: WirelessV1DataSession
            - name: WirelessV1RatePlan
            - name: WirelessV1Sim
            - name: WirelessV1UsageRecord
          x-maturity:
            - name: GA
              description: This product is Generally Av
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