---
specificationVersion: '0.17'
aid: twilio.com:twilio
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
  - aid: twilio.com:accounts
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
        url: properties/accounts-openapi-original.yml
        data:
          info:
            title: Twilio - Accounts
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          openapi: 3.0.1
          paths:
            /v1/AuthTokens/Promote:
              description: Auth Token promotion
              post:
                description: >-
                  Promote the secondary Auth Token to primary. After promoting
                  the new token, all requests to Twilio using your old primary
                  Auth Token will result in an error.
                tags:
                  - Promote
                  - Auth
                  - Token
                  - Auth
                  - Tokens
                  - Promote
                summary: Promote Auth Token
            /v1/Credentials:
              description: 'TODO: Resource-level docs'
            /v1/Credentials/AWS:
              description: User provided AWS keys
              get:
                description: >-
                  Retrieves a collection of AWS Credentials belonging to the
                  account used to make the request
                tags:
                  - Retrieve
                  - Credentials
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                summary: Retrieve AWS Credentials
              post:
                description: Create a new AWS Credential
                tags:
                  - Create
                  - Credential
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                summary: Create AWS Credential
            /v1/Credentials/AWS/{Sid}:
              description: User provided AWS keys
              get:
                description: >-
                  Fetch the AWS credentials specified by the provided Credential
                  Sid
                tags:
                  - Retrieve
                  - Credential
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                summary: Retrieve AWS Credential
              post:
                description: Modify the properties of a given Account
                tags:
                  - Modify
                  - Account
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                summary: Modify AWS Account
              delete:
                description: Delete a Credential from your account
                tags:
                  - Delete
                  - Account
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                summary: Delete AWS Account
            /v1/Credentials/PublicKeys:
              description: User provided public keys
              get:
                description: >-
                  Retrieves a collection of Public Key Credentials belonging to
                  the account used to make the request
                tags:
                  - Retrieve
                  - Public
                  - Keys
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
                summary: Retrieve Public Keys
              post:
                description: Create a new Public Key Credential
                tags:
                  - Create
                  - Public
                  - Key
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
                summary: Create Public Key
            /v1/Credentials/PublicKeys/{Sid}:
              description: User provided public keys
              get:
                description: Fetch the public key specified by the provided Credential Sid
                tags:
                  - Retrieve
                  - Public
                  - Key
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
                summary: Retrieve Public Key
              post:
                description: Modify the properties of a given Account
                tags:
                  - Update
                  - Public
                  - Key
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
                summary: Update Public Key
              delete:
                description: Delete a Credential from your account
                tags:
                  - Delete
                  - Public
                  - Key
                  - Auth
                  - Tokens
                  - Promote
                  - Credentials
                  - Sid
                  - Public
                  - Keys
                summary: Delete Public Key
            /v1/SafeList/Numbers:
              description: 'TODO: Resource-level docs'
              post:
                description: Add a new phone number to SafeList.
                tags:
                  - Add
                  - Safe
                  - List
                  - Phone
                  - Number
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
                summary: Add SafeList Phone Number
              get:
                description: Check if a phone number exists in SafeList.
                tags:
                  - Get
                  - Safe
                  - List
                  - Phone
                  - Number
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
                summary: Get SafeList Phone Number
              delete:
                description: Remove a phone number from SafeList.
                tags:
                  - Delete
                  - Safe
                  - List
                  - Phone
                  - Number
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
                summary: Delete SafeList Phone Number
            /v1/AuthTokens/Secondary:
              description: Secondary Auth Token
              post:
                description: Create a new secondary Auth Token
                tags:
                  - Create
                  - Auth
                  - Token
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
                summary: Create Auth Token
              delete:
                description: Delete the secondary Auth Token from your account
                tags:
                  - Delete
                  - Auth
                  - Token
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
                summary: Delete Auth Token
          tags:
            - name: Authentication
              description: Needs a description.
            - name: Promotion
              description: Needs a description.
            - name: Tokens
              description: Needs a description.
            - name: Credentials
              description: Needs a description.
            - name: AWS
              description: Needs a description.
            - name: Public Keys
              description: Needs a description.
            - name: Keys
              description: Needs a description.
            - name: Lists
              description: Needs a description.
            - name: Numbers
              description: Needs a description.
            - name: Phone Numbers
              description: Needs a description.
            - name: Safety
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Available.
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with ca
    overlays:
      - type: APIs.io Search
        url: overlays/accounts-openapi-search.yml
  - aid: twilio.com:assistant
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
        url: properties/assistant-openapi-original.yml
        data:
          info:
            title: Assistant API
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
                  - Retrieve
                  - Assistant
                  - Assistants
                  - Sid
                summary: Retrieve Assistant
              post:
                description: ''
                tags:
                  - Create
                  - Assistant
                  - Assistants
                  - Sid
                summary: Create Assistant
              delete:
                description: ''
                tags:
                  - Delete
                  - Assistant
                  - Assistants
                  - Sid
                summary: Delete Assistant
            /understand/Assistants/{AssistantSid}/FallbackActions:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Fallback
                  - Actions
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                summary: Retrieve Fallback Actions
              post:
                description: ''
                tags:
                  - Create
                  - Fallback
                  - Actions
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                summary: Create Fallback Actions
            /understand/Assistants/{AssistantSid}/InitiationActions:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Initiation
                  - Actions
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                summary: Retrieve Initiation Actions
              post:
                description: ''
                tags:
                  - Create
                  - Initiation
                  - Action
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                summary: Create Initiation Action
            /understand/Assistants/{AssistantSid}/Dialogues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Dialogue
                  - Assistants
                  - Sid
                  - Assistant
                  - Fallback
                  - Actions
                  - Initiation
                  - Dialogues
                summary: Retrieve Dialogue
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Task
                  - Field
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
                summary: Retrieve Task Field
              delete:
                description: ''
                tags:
                  - Delete
                  - Task
                  - Fields
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
                summary: Delete Task Fields
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Task
                  - Fields
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
                summary: Retrieve Task Fields
              post:
                description: ''
                tags:
                  - Create
                  - Task
                  - Field
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
                summary: Create Task Field
            /understand/Assistants/{AssistantSid}/FieldTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Task
                  - Field
                  - Type
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
                summary: Retrieve Task Field Type
              post:
                description: ''
                tags:
                  - Update
                  - Task
                  - Field
                  - Type
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
                summary: Update Task Field Type
              delete:
                description: ''
                tags:
                  - Delete
                  - Task
                  - Field
                  - Type
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
                summary: Delete Task Field Type
            /understand/Assistants/{AssistantSid}/FieldTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Task
                  - Field
                  - Types
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
                summary: Retrieve Task Field Types
              post:
                description: ''
                tags:
                  - Create
                  - Task
                  - Field
                  - Type
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
                summary: Create Task Field Type
            /understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Field
                  - Value
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
                summary: Retrieve Field Value
              delete:
                description: ''
                tags:
                  - Delete
                  - Field
                  - Value
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
                summary: Delete Field Value
            /understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Field
                  - Values
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
                summary: Retrieve Field Values
              post:
                description: ''
                tags:
                  - Create
                  - Field
                  - Value
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
                summary: Create Field Value
            /understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Model
                  - Build
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
                summary: Retrieve Model Build
              post:
                description: ''
                tags:
                  - Update
                  - Model
                  - Build
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
                summary: Update Model Build
              delete:
                description: ''
                tags:
                  - Delete
                  - Model
                  - Build
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
                summary: Delete Model Build
            /understand/Assistants/{AssistantSid}/ModelBuilds:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Model
                  - Builds
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
                summary: Retrieve Model Builds
              post:
                description: ''
                tags:
                  - Create
                  - Model
                  - Build
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
                summary: Create Model Build
            /understand/Assistants/{AssistantSid}/Queries/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Query
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
                summary: Retrieve Query
              post:
                description: ''
                tags:
                  - Update
                  - Query
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
                summary: Update Query
              delete:
                description: ''
                tags:
                  - Delete
                  - Query
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
                summary: Delete Query
            /understand/Assistants/{AssistantSid}/Queries:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Queries
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
                summary: Retrieve Queries
              post:
                description: ''
                tags:
                  - Create
                  - Query
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
                summary: Create Query
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Task
                  - Sample
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
                summary: Retrieve Task Sample
              post:
                description: ''
                tags:
                  - Update
                  - Task
                  - Sample
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
                summary: Update Task Sample
              delete:
                description: ''
                tags:
                  - Delete
                  - Task
                  - Sample
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
                summary: Delete Task Sample
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Task
                  - Samples
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
                summary: Retrieve Task Samples
              post:
                description: ''
                tags:
                  - Create
                  - Task
                  - Sample
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
                summary: Create Task Sample
            /understand/Assistants/{AssistantSid}/StyleSheet:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns Style sheet JSON object for this Assistant
                tags:
                  - Retrieve
                  - Style
                  - Sheet
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
                summary: Retrieve Style Sheet
              post:
                description: >-
                  Updates the style sheet for an assistant identified by
                  {AssistantSid} or {AssistantUniqueName}.
                tags:
                  - Create
                  - Style
                  - Sheet
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
                summary: Create Style Sheet
            /understand/Assistants/{AssistantSid}/Tasks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Task
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
                summary: Retrieve Task
              post:
                description: ''
                tags:
                  - Update
                  - Task
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
                summary: Update Task
              delete:
                description: ''
                tags:
                  - Delete
                  - Task
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
                summary: Delete Task
            /understand/Assistants/{AssistantSid}/Tasks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Tasks
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
                summary: Retrieve Tasks
              post:
                description: ''
                tags:
                  - Create
                  - Task
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
                summary: Create Task
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns JSON actions for this Task.
                tags:
                  - Retrieve
                  - Task
                  - Actions
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
                summary: Retrieve Task Actions
              post:
                description: >-
                  Updates the actions of an Task identified by {TaskSid} or
                  {TaskUniqueName}.
                tags:
                  - Create
                  - Task
                  - Action
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
                summary: Create Task Action
            /understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Task
                  - Statistics
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
                summary: Retrieve Task Statistics
          tags:
            - name: Dialogue
            - name: Fields
            - name: Field Types
            - name: Field Values
            - name: Model Build
            - name: Queries
            - name: Samples
            - name: Style Sheets
            - name: Tasks
            - name: Task Actions
            - name: Task Statistics
          x-maturity:
            - name: Preview
              description: >-
                PLEASE NOTE that this is a Preview product that is subject to
                change. Use it with caution. If you currently do not have
                developer preview access, please contact
                https://www.twilio.com/help/co
    overlays:
      - type: APIs.io Search
        url: overlays/assistant-openapi-search.yml
  - aid: twilio.com:autopilot
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
        url: properties/autopilot-openapi-original.yml
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
                  - Retrieve
                  - Assistant
                  - Assistants
                  - Sid
                summary: Retrieve Assistant
              post:
                description: ''
                tags:
                  - Create
                  - Assistant
                  - Assistants
                  - Sid
                summary: Create Assistant
              delete:
                description: ''
                tags:
                  - Delete
                  - Assistant
                  - Assistants
                  - Sid
                summary: Delete Assistant
            /v1/Assistants:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Assistants
                  - Assistants
                  - Sid
                summary: Retrieve Assistants
              post:
                description: ''
                tags:
                  - Create
                  - Assistant
                  - Assistants
                  - Sid
                summary: Create Assistant
            /v1/Assistants/{AssistantSid}/Defaults:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Assistant
                  - Defaults
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                summary: Retrieve Assistant Defaults
              post:
                description: ''
                tags:
                  - Create
                  - Assistant
                  - Defaults
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                summary: Create Assistant Defaults
            /v1/Assistants/{AssistantSid}/Dialogues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Assistant
                  - Dialogue
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                summary: Retrieve Assistant Dialogue
            /v1/Assistants/{AssistantSid}/Dialogues:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Assistant
                  - Dialogue
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                summary: Retrieve Assistant Dialogue s
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Task
                  - Fields
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                summary: Retrieve Task Fields
              delete:
                description: ''
                tags:
                  - Delete
                  - Task
                  - Field
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                summary: Delete Task Field
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Task
                  - Fields
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                summary: Retrieve Task Fields
              post:
                description: ''
                tags:
                  - Create
                  - Task
                  - Field
                  - Assistants
                  - Sid
                  - Assistant
                  - Defaults
                  - Dialogues
                  - Tasks
                  - Task
                  - Fields
                summary: Create Task Field
            /v1/Assistants/{AssistantSid}/FieldTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Field
                  - Type
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
                summary: Retrieve Field Type
              post:
                description: ''
                tags:
                  - Update
                  - Field
                  - Type
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
                summary: Update Field Type
              delete:
                description: ''
                tags:
                  - Delete
                  - Field
                  - Type
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
                summary: Delete Field Type
            /v1/Assistants/{AssistantSid}/FieldTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Field
                  - Types
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
                summary: Retrieve Field Types
              post:
                description: ''
                tags:
                  - Create
                  - Field
                  - Type
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
                summary: Create Field Type
            /v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Field
                  - Value
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
                summary: Retrieve Field Value
              delete:
                description: ''
                tags:
                  - Delete
                  - Field
                  - Value
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
                summary: Delete Field Value
            /v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Field
                  - Values
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
                summary: Retrieve Field Values
              post:
                description: ''
                tags:
                  - Create
                  - Field
                  - Values
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
                summary: Create Field Values
            /v1/Assistants/{AssistantSid}/ModelBuilds/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Model
                  - Builds
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
                summary: Retrieve Model Builds
              post:
                description: ''
                tags:
                  - Update
                  - Model
                  - Builds
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
                summary: Update Model Builds
              delete:
                description: ''
                tags:
                  - Delete
                  - Model
                  - Builds
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
                summary: Delete Model Builds
            /v1/Assistants/{AssistantSid}/ModelBuilds:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Model
                  - Builds
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
                summary: Retrieve Model Builds
              post:
                description: ''
                tags:
                  - Create
                  - Model
                  - Builds
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
                summary: Create Model Builds
            /v1/Assistants/{AssistantSid}/Queries/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Query
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
                summary: Retrieve Query
              post:
                description: ''
                tags:
                  - Update
                  - Query
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
                summary: Update Query
              delete:
                description: ''
                tags:
                  - Delete
                  - Query
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
                summary: Delete Query
            /v1/Assistants/{AssistantSid}/Queries:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Queries
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
                summary: Retrieve Queries
              post:
                description: ''
                tags:
                  - Create
                  - Query
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
                summary: Create Query
            /v1/Assistants/Restore:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Restore
                  - Assistant
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
                summary: Restore Assistant
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Task
                  - Sample
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
                summary: Retrieve Task Sample
              post:
                description: ''
                tags:
                  - Update
                  - Task
                  - Sample
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
                summary: Update Task Sample
              delete:
                description: ''
                tags:
                  - Delete
                  - Task
                  - Sample
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
                summary: Delete Task Sample
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Task
                  - Samples
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
                summary: Retrieve Task Samples
              post:
                description: ''
                tags:
                  - Create
                  - Task
                  - Sample
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
                summary: Create Task Sample
            /v1/Assistants/{AssistantSid}/StyleSheet:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns Style sheet JSON object for the Assistant
                tags:
                  - Retrieve
                  - Style
                  - Sheets
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
                summary: Retrieve Style Sheets
              post:
                description: >-
                  Updates the style sheet for an Assistant identified by
                  `assistant_sid`.
                tags:
                  - Create
                  - Style
                  - Sheet
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
                summary: Create Style Sheet
            /v1/Assistants/{AssistantSid}/Tasks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Task
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
                summary: Retrieve Task
              post:
                description: ''
                tags:
                  - Update
                  - Task
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
                summary: Update Task
              delete:
                description: ''
                tags:
                  - Delete
                  - Task
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
                summary: Delete Task
            /v1/Assistants/{AssistantSid}/Tasks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Tasks
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
                summary: Retrieve Tasks
              post:
                description: ''
                tags:
                  - Create
                  - Task
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
                summary: Create Task
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns JSON actions for the Task.
                tags:
                  - Retrieve
                  - Task
                  - Actions
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
                summary: Retrieve Task Actions
              post:
                description: >-
                  Updates the actions of an Task identified by {TaskSid} or
                  {TaskUniqueName}.
                tags:
                  - Create
                  - Task
                  - Action
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
                summary: Create Task Action
            /v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Task
                  - Statistics
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
                summary: Retrieve Task Statistics
            /v1/Assistants/{AssistantSid}/Webhooks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Webhook
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
                summary: Retrieve Webhook
              post:
                description: ''
                tags:
                  - Update
                  - Webhook
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
                summary: Update Webhook
              delete:
                description: ''
                tags:
                  - Delete
                  - Webhook
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
                summary: Delete Webhook
            /v1/Assistants/{AssistantSid}/Webhooks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Webhooks
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
                summary: Retrieve Webhooks
              post:
                description: ''
                tags:
                  - Create
                  - Webhook
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
                summary: Create Webhook
          tags:
            - name: Assistants
              description: Needs a description.
            - name: Dialogue
              description: Needs a description.
            - name: Tasks
              description: Needs a description.
            - name: Fields
              description: Needs a description.
            - name: Field Types
              description: Needs a description.
            - name: Field Values
              description: Needs a description.
            - name: Value
              description: Needs a description.
            - name: Model Builds
              description: Needs a description.
            - name: Models
              description: Needs a description.
            - name: Builds
              description: Needs a description.
            - name: Queries
              description: Needs a description.
            - name: Query
              description: Needs a description.
            - name: Restore
              description: Needs a description.
            - name: Samples
              description: Needs a description.
            - name: Style Sheets
              description: Needs a description.
            - name: Actions
              description: Needs a description.
            - name: Statistics
              description: Needs a description.
            - name: Webhooks
              description: Needs a description.
          x-maturity:
            - name: Preview
              description: >-
                PLEASE NOTE that this is a Preview product that is subject to
                change. Use it with caution. If you currently do not have
                developer preview access, please contact
                https://www.twilio.com/help/co
    overlays:
      - type: APIs.io Search
        url: overlays/autopilot-openapi-search.yml
  - aid: twilio.com:bulk-exports
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
        url: properties/bulk-exports-openapi-original.yml
        data:
          info:
            title: Twilio Bulk Exports API
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
                  - Retrieve
                  - Export
                  - Day
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                summary: Retrieve Export Day
            /v1/Exports/{ResourceType}/Days:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Days for a resource.
                tags:
                  - Retrieve
                  - Export
                  - Days
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                summary: Retrieve Export Days
            /v1/Exports/{ResourceType}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Export.
                tags:
                  - Retrieve
                  - Export
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                summary: Retrieve Export
            /v1/Exports:
              description: 'TODO: Resource-level docs'
            /v1/Exports/{ResourceType}/Configuration:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Export Configuration.
                tags:
                  - Retrieve
                  - Export
                  - Configuration
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                  - Configuration
                summary: Retrieve Export Configuration
              post:
                description: Update a specific Export Configuration.
                tags:
                  - Create
                  - Export
                  - Configuration
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                  - Configuration
                summary: Create Export Configuration
            /v1/Exports/{ResourceType}/Jobs:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Export
                  - Jobs
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                  - Configuration
                  - Jobs
                summary: Retrieve Export Jobs
              post:
                description: ''
                tags:
                  - Create
                  - Export
                  - Job
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                  - Configuration
                  - Jobs
                summary: Create Export Job
            /v1/Exports/Jobs/{JobSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Export
                  - Job
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                  - Configuration
                  - Jobs
                  - Job
                  - Sid
                summary: Retrieve Export Job
              delete:
                description: ''
                tags:
                  - Delete
                  - Export
                  - Job
                  - Exports
                  - Resource
                  - Type
                  - Days
                  - Day
                  - Configuration
                  - Jobs
                  - Job
                  - Sid
                summary: Delete Export Job
            /v1/Exports/Jobs:
              description: 'TODO: Resource-level docs'
          tags:
            - name: Bulk
              description: Needs a description.
            - name: Exports
              description: Needs a description.
            - name: Bulk Exports
              description: Needs a description.
            - name: Days
              description: Needs a description.
            - name: Configurations
              description: Needs a description.
            - name: ' Jobs'
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Avai
    overlays:
      - type: APIs.io Search
        url: overlays/bulk-exports-openapi-search.yml
  - aid: twilio.com:content
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
        url: properties/content-openapi-original.yml
        data:
          info:
            title: Twilio Content API
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
                  - Retrieve
                  - Content
                  - Approval
                  - Status
                  - Content
                  - Sid
                  - Approval
                  - Requests
                summary: Retrieve Content Approval Status
            /v1/Content/{Sid}:
              description: A Content resource represents rich messaging content.
              get:
                description: Fetch a Content resource by its unique Content Sid
                tags:
                  - Retrieve
                  - Content
                  - Content
                  - Sid
                  - Approval
                  - Requests
                summary: Retrieve Content
              delete:
                description: Deletes a Content resource
                tags:
                  - Delete
                  - Content
                  - Content
                  - Sid
                  - Approval
                  - Requests
                summary: Delete Content
            /v1/Content:
              description: A Content resource represents rich messaging content.
              get:
                description: >-
                  Retrieve a list of Contents belonging to the account used to
                  make the request
                tags:
                  - Retrieve
                  - Contents
                  - Content
                  - Sid
                  - Approval
                  - Requests
                summary: Retrieve Contents
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
                  - Approval
                  - Statuses
                  - Content
                  - Sid
                  - Approval
                  - Requests
                  - And
                  - Approvals
                summary: Content Approval Statuses
            /v1/LegacyContent:
              description: >-
                A Legacy Content resource represents legacy rich messaging
                content.
              get:
                description: >-
                  Retrieve a list of Legacy Contents belonging to the account
                  used to make the request
                tags:
                  - Legacy
                  - Content
                  - Content
                  - Sid
                  - Approval
                  - Requests
                  - And
                  - Approvals
                  - Legacy
                summary: Legacy Content
          tags:
            - name: Content
              description: Needs a description.
            - name: Approval Requests
              description: Needs a description.
            - name: Approval
              description: Needs a description.
            - name: Status
              description: Needs a description.
            - name: Legacy
              description: Needs a description.
          x-maturity:
            - name: Preview
              description: >-
                PLEASE NOTE that this is a Preview product that is subject to
                change. Use it with caution. If you currently do not have
                developer preview access, please contact
                https://www.twilio.com/help/co
    overlays:
      - type: APIs.io Search
        url: overlays/content-openapi-search.yml
  - aid: twilio.com:conversations
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
        url: properties/conversations-openapi-original.yml
        data:
          info:
            title: Twilio Conversations API
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
                  - Retrieve
                  - Configuration
                  - Configuration
                summary: Retrieve Configuration
              post:
                description: >-
                  Update the global configuration of conversations on your
                  account
                tags:
                  - Update
                  - Configuration
                  - Configuration
                summary: Update Configuration
            /v1/Configuration/Addresses:
              description: >-
                Address Configuration resource manages the configurations
                related to a unique address within Conversations
              get:
                description: Retrieve a list of address configurations for an account
                tags:
                  - Retrieve
                  - Configuration
                  - Addresses
                  - Configuration
                  - Addresses
                summary: Retrieve Configuration Addresses
              post:
                description: Create a new address configuration
                tags:
                  - Create
                  - Configuration
                  - Address
                  - Configuration
                  - Addresses
                summary: Create Configuration Address
            /v1/Configuration/Addresses/{Sid}:
              description: >-
                Address Configuration resource manages the configurations
                related to a unique address within Conversations
              get:
                description: 'Fetch an address configuration '
                tags:
                  - Retrieve
                  - Configuration
                  - Address
                  - Configuration
                  - Addresses
                  - Sid
                summary: Retrieve Configuration Address
              post:
                description: Update an existing address configuration
                tags:
                  - Update
                  - Configuration
                  - Address
                  - Configuration
                  - Addresses
                  - Sid
                summary: Update Configuration Address
              delete:
                description: Remove an existing address configuration
                tags:
                  - Delete
                  - Configuration
                  - Address
                  - Configuration
                  - Addresses
                  - Sid
                summary: Delete Configuration Address
            /v1/Configuration/Webhooks:
              description: >-
                A Webhook resource manages a service-level set of callback URLs
                and their configuration for receiving all conversation events.
              get:
                description: ''
                tags:
                  - Retrieve
                  - Configuration
                  - Webhooks
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                summary: Retrieve Configuration Webhooks
              post:
                description: ''
                tags:
                  - Create
                  - Configuration
                  - Webhooks
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                summary: Create Configuration Webhooks
            /v1/Conversations:
              description: >-
                A Conversation resource represents an omnichannel group
                conversation with an ordered list of messages and a participant
                roster.
              post:
                description: Create a new conversation in your account's default service
                tags:
                  - Create
                  - Conversation
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                summary: Create Conversation
              get:
                description: >-
                  Retrieve a list of conversations in your account's default
                  service
                tags:
                  - Retrieve
                  - Conversations
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                summary: Retrieve Conversations
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
                  - Update
                  - Conversation
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                summary: Update Conversation
              delete:
                description: Remove a conversation from your account's default service
                tags:
                  - Delete
                  - Conversation
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                summary: Delete Conversation
              get:
                description: Fetch a conversation from your account's default service
                tags:
                  - Retrieve
                  - Conversation
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                summary: Retrieve Conversation
            /v1/Conversations/{ConversationSid}/Messages:
              description: A Message resource represents a message in a conversation.
              post:
                description: Add a new message to the conversation
                tags:
                  - Create
                  - Conversation
                  - Message
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                summary: Create Conversation Message
              get:
                description: Retrieve a list of all messages in the conversation
                tags:
                  - Retrieve
                  - Conversation
                  - Messages
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                summary: Retrieve Conversation Messages
            /v1/Conversations/{ConversationSid}/Messages/{Sid}:
              description: A Message resource represents a message in a conversation.
              post:
                description: Update an existing message in the conversation
                tags:
                  - Update
                  - Conversation
                  - Message
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                summary: Update Conversation Message
              delete:
                description: Remove a message from the conversation
                tags:
                  - Delete
                  - Conversation
                  - Message
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                summary: Delete Conversation Message
              get:
                description: Fetch a message from the conversation
                tags:
                  - Retrieve
                  - Conversation
                  - Message
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                summary: Retrieve Conversation Message
            /v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}:
              description: >-
                A Message Receipt resource represents a delivery/read receipt of
                a message in a conversation.
              get:
                description: >-
                  Fetch the delivery and read receipts of the conversation
                  message
                tags:
                  - Retrieve
                  - Conversation
                  - Message
                  - Receipt
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                summary: Retrieve Conversation Message Receipt
            /v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts:
              description: >-
                A Message Receipt resource represents a delivery/read receipt of
                a message in a conversation.
              get:
                description: >-
                  Retrieve a list of all delivery and read receipts of the
                  conversation message
                tags:
                  - Retrieve
                  - Conversation
                  - Message
                  - Receipts
                  - Configuration
                  - Addresses
                  - Sid
                  - Webhooks
                  - Conversations
                  - Conversation
                  - Messages
                  - Message
                  - Receipts
                summary: Retrieve Conversation Message Receipts
            /v1/Conversations/{ConversationSid}/Participants:
              description: A Participant resource represents a member of the conversation.
              post:
                description: Add a new participant to the conversation
                tags:
                  - Add
                  - Conversation
                  - Participant
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
                summary: Add Conversation Participant
              get:
                description: Retrieve a list of all participants of the conversation
                tags:
                  - Retrieve
                  - Conversation
                  - Participants
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
                summary: Retrieve Conversation Participants
            /v1/Conversations/{ConversationSid}/Participants/{Sid}:
              description: A Participant resource represents a member of the conversation.
              post:
                description: Update an existing participant in the conversation
                tags:
                  - Update
                  - Conversation
                  - Participant
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
                summary: Update Conversation Participant
              delete:
                description: Remove a participant from the conversation
                tags:
                  - Delete
                  - Conversation
                  - Participant
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
                summary: Delete Conversation Participant
              get:
                description: Fetch a participant of the conversation
                tags:
                  - Retrieve
                  - Conversation
                  - Participant
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
                summary: Retrieve Conversation Participant
            /v1/Conversations/{ConversationSid}/Webhooks:
              description: >-
                A Scoped Webhook resource manages a set of callback URLs and
                their configuration for receiving events specific to one
                conversation.
              get:
                description: Retrieve a list of all webhooks scoped to the conversation
                tags:
                  - Retrieve
                  - Conversation
                  - Webhooks
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
                summary: Retrieve Conversation Webhooks
              post:
                description: Create a new webhook scoped to the conversation
                tags:
                  - Create
                  - Conversation
                  - Webhook
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
                summary: Create Conversation Webhook
            /v1/Conversations/{ConversationSid}/Webhooks/{Sid}:
              description: >-
                A Scoped Webhook resource manages a set of callback URLs and
                their configuration for receiving events specific to one
                conversation.
              get:
                description: Fetch the configuration of a conversation-scoped webhook
                tags:
                  - Retrieve
                  - Conversation
                  - Webhook
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
                summary: Retrieve Conversation Webhook
              post:
                description: Update an existing conversation-scoped webhook
                tags:
                  - Update
                  - Conversation
                  - Webhook
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
                summary: Update Conversation Webhook
              delete:
                description: Remove an existing webhook scoped to the conversation
                tags:
                  - Delete
                  - Conversation
                  - Webhook
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
                summary: Delete Conversation Webhook
            /v1/Credentials:
              description: A Credential resource represents a push notification credential.
              post:
                description: Add a new push notification credential to your account
                tags:
                  - Create
                  - Credential
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
                summary: Create Credential
              get:
                description: >-
                  Retrieve a list of all push notification credentials on your
                  account
                tags:
                  - Retrieve
                  - Credentials
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
                summary: Retrieve Credentials
            /v1/Credentials/{Sid}:
              description: A Credential resource represents a push notification credential.
              post:
                description: >-
                  Update an existing push notification credential on your
                  account
                tags:
                  - Update
                  - Credential
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
                summary: Update Credential
              delete:
                description: Remove a push notification credential from your account
                tags:
                  - Delete
                  - Credential
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
                summary: Delete Credential
              get:
                description: Fetch a push notification credential from your account
                tags:
                  - Retrieve
                  - Credential
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
                summary: Retrieve Credential
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
                  - Retrieve
                  - Participant
                  - Conversations
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
                summary: Retrieve Participant Conversations
            /v1/Roles:
              description: >-
                A Role resource represents a set of permissions granted to a
                user within a service or a conversation.
              post:
                description: Create a new user role in your account's default service
                tags:
                  - Create
                  - Role
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
                summary: Create Role
              get:
                description: >-
                  Retrieve a list of all user roles in your account's default
                  service
                tags:
                  - Retrieve
                  - Roles
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
                summary: Retrieve Roles
            /v1/Roles/{Sid}:
              description: >-
                A Role resource represents a set of permissions granted to a
                user within a service or a conversation.
              post:
                description: Update an existing user role in your account's default service
                tags:
                  - Update
                  - Roles
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
                summary: Update Roles
              delete:
                description: Remove a user role from your account's default service
                tags:
                  - Delete
                  - Role
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
                summary: Delete Role
              get:
                description: Fetch a user role from your account's default service
                tags:
                  - Retrieve
                  - Role
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
                summary: Retrieve Role
            /v1/Services:
              description: >-
                A Service resource is a top-level conversation resource
                container that serves as a data silo.
              post:
                description: Create a new conversation service on your account
                tags:
                  - Create
                  - Service
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
                summary: Create Service
              get:
                description: Retrieve a list of all conversation services on your account
                tags:
                  - Retrieve
                  - Services
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
                summary: Retrieve Services
            /v1/Services/{Sid}:
              description: >-
                A Service resource is a top-level conversation resource
                container that serves as a data silo.
              delete:
                description: >-
                  Remove a conversation service with all its nested resources
                  from your account
                tags:
                  - Delete
                  - Service
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
                summary: Delete Service
              get:
                description: Fetch a conversation service from your account
                tags:
                  - Retrieve
                  - Service
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
                summary: Retrieve Service
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
                  - Delete
                  - Service
                  - Binding
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
                summary: Delete Service Binding
              get:
                description: >-
                  Fetch a push notification binding from the conversation
                  service
                tags:
                  - Retrieve
                  - Service
                  - Binding
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
                summary: Retrieve Service Binding
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
                  - Retrieve
                  - Service
                  - Bindings
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
                summary: Retrieve Service Bindings
            /v1/Services/{ChatServiceSid}/Configuration:
              description: >-
                A Service Configuration resource manages service-level settings
                applicable to the Conversation API.
              get:
                description: Fetch the configuration of a conversation service
                tags:
                  - Retrieve
                  - Service
                  - Configurations
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
                summary: Retrieve Service Configurations
              post:
                description: Update configuration settings of a conversation service
                tags:
                  - Update
                  - Service
                  - Configuration
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
                summary: Update Service Configuration
            /v1/Services/{ChatServiceSid}/Conversations:
              description: >-
                A Service Conversation resource represents an omnichannel group
                conversation with an ordered list of messages and a participant
                roster.
              post:
                description: Create a new conversation in your service
                tags:
                  - Create
                  - Service
                  - Conversation
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
                summary: Create Service Conversation
              get:
                description: Retrieve a list of conversations in your service
                tags:
                  - Retrieve
                  - Service
                  - Conversations
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
                summary: Retrieve Service Conversations
            /v1/Services/{ChatServiceSid}/Conversations/{Sid}:
              description: >-
                A Service Conversation resource represents an omnichannel group
                conversation with an ordered list of messages and a participant
                roster.
              post:
                description: Update an existing conversation in your service
                tags:
                  - Update
                  - Service
                  - Conversation
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
                summary: Update Service Conversation
              delete:
                description: Remove a conversation from your service
                tags:
                  - Delete
                  - Service
                  - Conversation
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
                summary: Delete Service Conversation
              get:
                description: Fetch a conversation from your service
                tags:
                  - Retrieve
                  - Service
                  - Conversation
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
                summary: Retrieve Service Conversation
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages:
              description: >-
                A Service Message resource represents a message in a
                conversation within a specific service.
              post:
                description: Add a new message to the conversation in a specific service
                tags:
                  - Create
                  - Service
                  - Conversation
                  - Message
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
                summary: Create Service Conversation Message
              get:
                description: Retrieve a list of all messages in the conversation
                tags:
                  - Retrieve
                  - Service
                  - Conversation
                  - Messages
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
                summary: Retrieve Service Conversation Messages
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}:
              description: >-
                A Service Message resource represents a message in a
                conversation within a specific service.
              post:
                description: Update an existing message in the conversation
                tags:
                  - Update
                  - Service
                  - Conversation
                  - Message
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
                summary: Update Service Conversation Message
              delete:
                description: Remove a message from the conversation
                tags:
                  - Delete
                  - Service
                  - Conversation
                  - Message
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
                summary: Delete Service Conversation Message
              get:
                description: Fetch a message from the conversation
                tags:
                  - Retrieve
                  - Service
                  - Conversation
                  - Message
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
                summary: Retrieve Service Conversation Message
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}:
              description: >-
                A Service Message Receipt resource represents a delivery/read
                receipt of a message in a conversation.
              get:
                description: >-
                  Fetch the delivery and read receipts of the conversation
                  message
                tags:
                  - Retrieve
                  - Service
                  - Conversation
                  - Message
                  - Receipt
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
                summary: Retrieve Service Conversation Message Receipt
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts:
              description: >-
                A Service Message Receipt resource represents a delivery/read
                receipt of a message in a conversation.
              get:
                description: >-
                  Retrieve a list of all delivery and read receipts of the
                  conversation message
                tags:
                  - Retrieve
                  - Service
                  - Conversation
                  - Message
                  - Receipts
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
                summary: Retrieve Service Conversation Message Receipts
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants:
              description: >-
                A Service Participant resource represents a member of the
                conversation within a specific service.
              post:
                description: >-
                  Add a new participant to the conversation in a specific
                  service
                tags:
                  - Add
                  - Service
                  - Conversation
                  - Participant
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
                summary: Add Service Conversation Participant
              get:
                description: Retrieve a list of all participants of the conversation
                tags:
                  - Retrieve
                  - Service
                  - Conversation
                  - Participants
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
                summary: Retrieve Service Conversation Participants
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}:
              description: >-
                A Service Participant resource represents a member of the
                conversation within a specific service.
              post:
                description: Update an existing participant in the conversation
                tags:
                  - Update
                  - Service
                  - Conversation
                  - Participant
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
                summary: Update Service Conversation Participant
              delete:
                description: Remove a participant from the conversation
                tags:
                  - Delete
                  - Service
                  - Conversation
                  - Participant
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
                summary: Delete Service Conversation Participant
              get:
                description: Fetch a participant of the conversation
                tags:
                  - Retrieve
                  - Service
                  - Conversation
                  - Participant
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
                summary: Retrieve Service Conversation Participant
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
                  - Create
                  - Service
                  - Conversation
                  - Webhook
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
                summary: Create Service Conversation Webhook
              get:
                description: Retrieve a list of all webhooks scoped to the conversation
                tags:
                  - Retrieve
                  - Service
                  - Conversation
                  - Webhooks
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
                summary: Retrieve Service Conversation Webhooks
            /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}:
              description: >-
                A Conversation-scoped Webhook resource manages a set of callback
                URLs and their configuration for receiving events specific to
                one conversation.
              post:
                description: Update an existing conversation-scoped webhook
                tags:
                  - Update
                  - Service
                  - Conversation
                  - Webhook
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
                summary: Update Service Conversation Webhook
              delete:
                description: Remove an existing webhook scoped to the conversation
                tags:
                  - Delete
                  - Service
                  - Conversation
                  - Webhook
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
                summary: Delete Service Conversation Webhook
              get:
                description: Fetch the configuration of a conversation-scoped webhook
                tags:
                  - Retrieve
                  - Service
                  - Conversation
                  - Webhook
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
                summary: Retrieve Service Conversation Webhook
            /v1/Services/{ChatServiceSid}/Configuration/Notifications:
              description: >-
                A Service Notification resource manages a set of settings to
                determine push notification behavior at service level.
              post:
                description: Update push notification service settings
                tags:
                  - Create
                  - Service
                  - Conversation
                  - Notification
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
                summary: Create Service Conversation Notification
              get:
                description: Fetch push notification service settings
                tags:
                  - Retrieve
                  - Service
                  - Conversation
                  - Notifications
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
                summary: Retrieve Service Conversation Notifications
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
                  - Retrieve
                  - Service
                  - Participant
                  - Conversations
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
                summary: Retrieve Service Participant Conversations
            /v1/Services/{ChatServiceSid}/Roles:
              description: >-
                A Service Role resource represents a set of permissions granted
                to a user within a service or a conversation.
              post:
                description: Create a new user role in your service
                tags:
                  - Create
                  - Service
                  - Roles
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
                summary: Create Service Roles
              get:
                description: Retrieve a list of all user roles in your service
                tags:
                  - Retrieve
                  - Service
                  - Roles
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
                summary: Retrieve Service Roles
            /v1/Services/{ChatServiceSid}/Roles/{Sid}:
              description: >-
                A Service Role resource represents a set of permissions granted
                to a user within a service or a conversation.
              post:
                description: Update an existing user role in your service
                tags:
                  - Update
                  - Service
                  - Role
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
                summary: Update Service Role
              delete:
                description: Remove a user role from your service
                tags:
                  - Delete
                  - Service
                  - Role
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
                summary: Delete Service Role
              get:
                description: Fetch a user role from your service
                tags:
                  - Retrieve
                  - Service
                  - Role
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
                summary: Retrieve Service Role
            /v1/Services/{ChatServiceSid}/Users:
              description: >-
                A Service User resource represents a conversation user belonging
                to a specific conversation service.
              post:
                description: Add a new conversation user to your service
                tags:
                  - Create
                  - Service
                  - User
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
                summary: Create Service User
              get:
                description: Retrieve a list of all conversation users in your service
                tags:
                  - Retrieve
                  - Service
                  - Users
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
                summary: Retrieve Service Users
            /v1/Services/{ChatServiceSid}/Users/{Sid}:
              description: >-
                A Service User resource represents a conversation user belonging
                to a specific conversation service.
              post:
                description: Update an existing conversation user in your service
                tags:
                  - Update
                  - Service
                  - User
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
                summary: Update Service User
              delete:
                description: Remove a conversation user from your service
                tags:
                  - Delete
                  - Service
                  - User
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
                summary: Delete Service User
              get:
                description: Fetch a conversation user from your service
                tags:
                  - Retrieve
                  - Service
                  - User
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
                summary: Retrieve Service User
            /v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}:
              description: >-
                A Service User Conversation resource represents a conversation
                of the user belonging to a specific conversation service.
              post:
                description: Update a specific User Conversation.
                tags:
                  - Update
                  - Service
                  - User
                  - Conversation
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
                summary: Update Service User Conversation
              delete:
                description: Delete a specific User Conversation.
                tags:
                  - Delete
                  - Service
                  - User
                  - Conversation
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
                summary: Delete Service User Conversation
              get:
                description: Fetch a specific User Conversation.
                tags:
                  - Retrieve
                  - Service
                  - User
                  - Conversation
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
                summary: Retrieve Service User Conversation
            /v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations:
              description: >-
                A Service User Conversation resource represents a conversation
                of the user belonging to a specific conversation service.
              get:
                description: Retrieve a list of all User Conversations for the User.
                tags:
                  - Retrieve
                  - Service
                  - User
                  - Conversations
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
                summary: Retrieve Service User Conversations
            /v1/Services/{ChatServiceSid}/Configuration/Webhooks:
              description: >-
                A service webhook configuration resource manages a service-level
                set of callback URLs and their configuration for receiving all
                the corresponding service events.
              post:
                description: Update a specific Webhook.
                tags:
                  - Create
                  - Service
                  - Configuration
                  - Webhook
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
                summary: Create Service Configuration Webhook
              get:
                description: Fetch a specific service webhook configuration.
                tags:
                  - Retrieve
                  - Service
                  - Configuration
                  - Webhooks
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
                summary: Retrieve Service Configuration Webhooks
            /v1/Users:
              description: >-
                A User resource represents a conversation user belonging to a
                default conversation service.
              post:
                description: Add a new conversation user to your account's default service
                tags:
                  - Create
                  - User
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
                summary: Create User
              get:
                description: >-
                  Retrieve a list of all conversation users in your account's
                  default service
                tags:
                  - Retrieve
                  - Users
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
                summary: Retrieve Users
            /v1/Users/{Sid}:
              description: >-
                A User resource represents a conversation user belonging to a
                default conversation service.
              post:
                description: >-
                  Update an existing conversation user in your account's default
                  service
                tags:
                  - Update
                  - User
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
                summary: Update User
              delete:
                description: Remove a conversation user from your account's default service
                tags:
                  - Delete
                  - User
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
                summary: Delete User
              get:
                description: Fetch a conversation user from your account's default service
                tags:
                  - Retrieve
                  - User
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
                summary: Retrieve User
            /v1/Users/{UserSid}/Conversations/{ConversationSid}:
              description: >-
                A User Conversation resource represents a conversation of the
                user belonging to a default conversation service.
              post:
                description: Update a specific User Conversation.
                tags:
                  - Update
                  - User
                  - Conversation
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
                summary: Update User Conversation
              delete:
                description: Delete a specific User Conversation.
                tags:
                  - Delete
                  - User
                  - Conversation
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
                summary: Delete User Conversation
              get:
                description: Fetch a specific User Conversation.
                tags:
                  - Retrieve
                  - User
                  - Conversation
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
                summary: Retrieve User Conversation
            /v1/Users/{UserSid}/Conversations:
              description: >-
                A User Conversation resource represents a conversation of the
                user belonging to a default conversation service.
              get:
                description: Retrieve a list of all User Conversations for the User.
                tags:
                  - Retrieve
                  - User
                  - Conversations
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
                summary: Retrieve User Conversations
          tags:
            - name: Conversations
              description: Needs a description.
            - name: Configurations
              description: Needs a description.
            - name: Addresses
              description: Needs a description.
            - name: Webhooks
              description: Needs a description.
            - name: Messages
              description: Needs a description.
            - name: Receipts
              description: Needs a description.
            - name: Participants
              description: Needs a description.
            - name: Credentials
              description: Needs a description.
            - name: Roles
              description: Needs a description.
            - name: Services
              description: Needs a description.
            - name: Bindings
              description: Needs a description.
            - name: Notifications
              description: Needs a description.
            - name: Users
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Avai
    overlays:
      - type: APIs.io Search
        url: overlays/conversations-openapi-search.yml
  - aid: twilio.com:events
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
        url: properties/events-openapi-original.yml
        data:
          info:
            title: Twilio Events API
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
                  - Retrieve
                  - Types
                  - Types
                summary: Retrieve Types
            /v1/Types/{Type}:
              description: Event Types available
              get:
                description: Fetch a specific Event Type.
                tags:
                  - Retrieve
                  - Type
                  - Types
                  - Type
                summary: Retrieve Type
            /v1/Schemas/{Id}:
              description: Versioned Schema definitions for Event Types
              get:
                description: Fetch a specific schema with its nested versions.
                tags:
                  - Retrieve
                  - Schema
                  - Types
                  - Type
                  - Schemas
                  - Id
                summary: Retrieve Schema
            /v1/Schemas:
              description: Versioned Schema definitions for Event Types
            /v1/Schemas/{Id}/Versions:
              description: Version of the Schema
              get:
                description: Retrieve a paginated list of versions of the schema.
                tags:
                  - Retrieve
                  - Schema
                  - Versions
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                summary: Retrieve Schema Versions
            /v1/Schemas/{Id}/Versions/{SchemaVersion}:
              description: Version of the Schema
              get:
                description: Fetch a specific schema and version.
                tags:
                  - Retrieve
                  - Schema
                  - Version
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                summary: Retrieve Schema Version
            /v1/Sinks/{Sid}:
              description: Sink destination to send events to
              get:
                description: Fetch a specific Sink.
                tags:
                  - Retrieve
                  - Sink
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                summary: Retrieve Sink
              delete:
                description: Delete a specific Sink.
                tags:
                  - Delete
                  - Sink
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                summary: Delete Sink
              post:
                description: Update a specific Sink
                tags:
                  - Update
                  - Sink
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                summary: Update Sink
            /v1/Sinks:
              description: Sink destination to send events to
              post:
                description: Create a new Sink
                tags:
                  - Create
                  - Sink
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                summary: Create Sink
              get:
                description: >-
                  Retrieve a paginated list of Sinks belonging to the account
                  used to make the request.
                tags:
                  - Retrieve
                  - Sinks
                  - Types
                  - Type
                  - Schemas
                  - Id
                  - Versions
                  - Schema
                  - Version
                  - Sinks
                  - Sid
                summary: Retrieve Sinks
            /v1/Sinks/{Sid}/Test:
              description: Test sink
              post:
                description: Create a new Sink Test Event for the given Sink.
                tags:
                  - Create
                  - Sink
                  - Test
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
                summary: Create Sink Test
            /v1/Sinks/{Sid}/Validate:
              description: Validate sink
              post:
                description: Validate that a test event for a Sink was received.
                tags:
                  - Validate
                  - Sink
                  - Test
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
                summary: Validate Sink Test
            /v1/Subscriptions/{SubscriptionSid}/SubscribedEvents:
              description: Event subscribed to in the parent Subscription
              get:
                description: >-
                  Retrieve a list of all Subscribed Event types for a
                  Subscription.
                tags:
                  - Retrieve
                  - Subscription
                  - Events
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
                summary: Retrieve Subscription Events
              post:
                description: Add an event type to a Subscription.
                tags:
                  - Add
                  - Subscription
                  - Event
                  - Type
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
                summary: Add Subscription Event Type
            /v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}:
              description: Event subscribed to in the parent Subscription
              get:
                description: Read an Event for a Subscription.
                tags:
                  - Retrieve
                  - Subscription
                  - Event
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
                summary: Retrieve Subscription Event
              post:
                description: Update an Event for a Subscription.
                tags:
                  - Update
                  - Subscription
                  - Event
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
                summary: Update Subscription Event
              delete:
                description: Remove an event type from a Subscription.
                tags:
                  - Delete
                  - Subscription
                  - Event
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
                summary: Delete Subscription Event
            /v1/Subscriptions:
              description: Subscription to send Event Types to a Sink
              get:
                description: >-
                  Retrieve a paginated list of Subscriptions belonging to the
                  account used to make the request.
                tags:
                  - Retrieve
                  - Subscriptions
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
                summary: Retrieve Subscriptions
              post:
                description: Create a new Subscription.
                tags:
                  - Create
                  - Subscription
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
                summary: Create Subscription
            /v1/Subscriptions/{Sid}:
              description: Subscription to send Event Types to a Sink
              get:
                description: Fetch a specific Subscription.
                tags:
                  - Retrieve
                  - Subscription
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
                summary: Retrieve Subscription
              post:
                description: Update a Subscription.
                tags:
                  - Update
                  - Subscription
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
                summary: Update Subscription
              delete:
                description: Delete a specific Subscription.
                tags:
                  - Delete
                  - Subscription
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
                summary: Delete Subscription
          tags:
            - name: Events
              description: Needs a description.
            - name: Event Types
              description: Needs a description.
            - name: Types
              description: Needs a description.
            - name: Schema
              description: Needs a description.
            - name: Versions
              description: Needs a description.
            - name: Sinks
              description: Needs a description.
            - name: Tests
              description: Needs a description.
            - name: Validate
              description: Needs a description.
            - name: Subscriptions
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Avai
    overlays:
      - type: APIs.io Search
        url: overlays/events-openapi-search.yml
  - aid: twilio.com:frontline
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
        url: properties/frontline-openapi-original.yml
        data:
          info:
            title: Twilio Frontline API
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
                  - Retrieve
                  - User
                  - Users
                  - Sid
                summary: Retrieve User
              post:
                description: Update an existing frontline user
                tags:
                  - Update
                  - User
                  - Users
                  - Sid
                summary: Update User
          tags:
            - name: Frontline
              description: Needs a description.
            - name: Sales
              description: Needs a description.
            - name: ' Relationships'
              description: Needs a description.
            - name: ' Users'
              description: Needs a description.
          x-maturity:
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with ca
    overlays:
      - type: APIs.io Search
        url: overlays/frontline-openapi-search.yml
  - aid: twilio.com:insights
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
        url: properties/insights-openapi-original.yml
        data:
          info:
            title: Twilio Insights API
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
                  - Retrieve
                  - Voice
                  - Settings
                  - Voice
                  - Settings
                summary: Retrieve Voice Settings
              post:
                description: Update a specific Voice Insights Setting.
                tags:
                  - Update
                  - Voice
                  - Settings
                  - Voice
                  - Settings
                summary: Update Voice Settings
            /v1/Voice/{CallSid}/Annotation:
              description: 'TODO: Resource-level docs'
              post:
                description: Update an Annotation for a specific Call.
                tags:
                  - Update
                  - Voice
                  - Annotation
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                summary: Update Voice Annotation
              get:
                description: Get the Annotation for a specific Call.
                tags:
                  - Retrieve
                  - Voice
                  - Annotation
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                summary: Retrieve Voice Annotation
            /v1/Voice/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Voice
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                summary: Retrieve Voice
            /v1/Voice/Summaries:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Call Summaries.
                tags:
                  - Retrieve
                  - Voice
                  - Summaries
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
                summary: Retrieve Voice Summaries
            /v1/Conferences/{ConferenceSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a specific Conference Summary.
                tags:
                  - Retrieve
                  - Conference
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
                  - Conferences
                  - Conference
                summary: Retrieve Conference
            /v1/Conferences:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Conference Summaries.
                tags:
                  - Retrieve
                  - Conferences
                  - Voice
                  - Settings
                  - Call
                  - Sid
                  - Annotation
                  - Summaries
                  - Conferences
                  - Conference
                summary: Retrieve Conferences
            /v1/Conferences/{ConferenceSid}/Participants/{ParticipantSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Get a specific Conference Participant Summary for a
                  Conference.
                tags:
                  - Retrieve
                  - Conference
                  - Participant
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
                summary: Retrieve Conference Participant
            /v1/Conferences/{ConferenceSid}/Participants:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Get a list of Conference Participants Summaries for a
                  Conference.
                tags:
                  - Retrieve
                  - Conference
                  - Participants
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
                summary: Retrieve Conference Participants
            /v1/Voice/{CallSid}/Events:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Call Insight Events for a Call.
                tags:
                  - Retrieve
                  - Voice
                  - Events
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
                summary: Retrieve Voice Events
            /v1/Voice/{CallSid}/Metrics:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Call Metrics for a Call.
                tags:
                  - Retrieve
                  - Voice
                  - Metrics
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
                summary: Retrieve Voice Metrics
            /v1/Voice/{CallSid}/Summary:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a specific Call Summary.
                tags:
                  - Retrieve
                  - Voice
                  - Summary
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
                summary: Retrieve Voice Summary
            /v1/Video/Rooms/{RoomSid}/Participants/{ParticipantSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Get Video Log Analyzer data for a Room Participant.
                tags:
                  - Retrieve
                  - Video
                  - Room
                  - Participant
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
                summary: Retrieve Video Room Participant
            /v1/Video/Rooms/{RoomSid}/Participants:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of room participants.
                tags:
                  - Retrieve
                  - Video
                  - Room
                  - Participants
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
                summary: Retrieve Video Room Participants
            /v1/Video/Rooms/{RoomSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Get Video Log Analyzer data for a Room.
                tags:
                  - Retrieve
                  - Video
                  - Room
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
                summary: Retrieve Video Room
            /v1/Video/Rooms:
              description: 'TODO: Resource-level docs'
              get:
                description: Get a list of Programmable Video Rooms.
                tags:
                  - Retrieve
                  - Video
                  - Rooms
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
                summary: Retrieve Video Rooms
          tags:
            - name: Insights
              description: Needs a description.
            - name: Voice
              description: Needs a description.
            - name: Settings
              description: Needs a description.
            - name: Annotations
              description: Needs a description.
            - name: Summaries
              description: Needs a description.
            - name: Conferences
              description: Needs a description.
            - name: Participants
              description: Needs a description.
            - name: Events
              description: Needs a description.
            - name: Metrics
              description: Needs a description.
            - name: Videos
              description: Needs a description.
            - name: Rooms
              description: Needs a description.
            - name: Retrieve
              description: Needs a description.
            - name: Retriev
              description: Needs a description.
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
                https://www.twilio.com/help/co
    overlays:
      - type: APIs.io Search
        url: overlays/insights-openapi-search.yml
  - aid: twilio.com:intelligence
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
        url: properties/intelligence-openapi-original.yml
        data:
          info:
            title: Twilio Intelligence API
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
                  - Retrieve
                  - Transcript
                  - Media
                  - Transcripts
                  - Sid
                  - Media
                summary: Retrieve Transcript Media
            /v2/Transcripts/{TranscriptSid}/OperatorResults:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of Operator Results for the given Transcript.
                tags:
                  - Retrieve
                  - Transcript
                  - Operator
                  - Results
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                summary: Retrieve Transcript Operator Results
            /v2/Transcripts/{TranscriptSid}/OperatorResults/{OperatorSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Operator Result for the given Transcript.
                tags:
                  - Retrieve
                  - Transcript
                  - Operator
                  - Result
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                summary: Retrieve Transcript Operator Result
            /v2/Transcripts/{TranscriptSid}/Sentences:
              description: 'TODO: Resource-level docs'
              get:
                description: Get all Transcript Sentences by TranscriptSid
                tags:
                  - Retrieve
                  - Transcript
                  - Sentences
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                summary: Retrieve Transcript Sentences
            /v2/Services:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Service for the given Account
                tags:
                  - Create
                  - Service
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
                summary: Create Service
              get:
                description: Retrieves a list of all Services for an account.
                tags:
                  - Retrieve
                  - Services
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
                summary: Retrieve Services
            /v2/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Service.
                tags:
                  - Delete
                  - Service
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
                summary: Delete Service
              get:
                description: Fetch a specific Service.
                tags:
                  - Retrieve
                  - Service
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
                summary: Retrieve Service
              post:
                description: Update a specific Service.
                tags:
                  - Update
                  - Service
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
                summary: Update Service
            /v2/Transcripts:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Transcript for the service
                tags:
                  - Create
                  - Transcript
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
                summary: Create Transcript
              get:
                description: Retrieve a list of Transcripts for a given service.
                tags:
                  - Retrieve
                  - Transcripts
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
                summary: Retrieve Transcripts
            /v2/Transcripts/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Transcript.
                tags:
                  - Retrieve
                  - Transcript
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
                summary: Retrieve Transcript
              delete:
                description: Delete a specific Transcript.
                tags:
                  - Delete
                  - Transcript
                  - Transcripts
                  - Sid
                  - Media
                  - Transcript
                  - Operator
                  - Results
                  - Sentences
                  - Services
                summary: Delete Transcript
          tags:
            - name: Tag
            - name: Intelligence
              description: Needs a description.
            - name: Transcripts
              description: Needs a description.
            - name: Media
              description: Needs a description.
            - name: Operators
              description: Needs a description.
            - name: Sentences
              description: Needs a description.
            - name: Services
              description: Needs a description.
          x-maturity:
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with ca
    overlays:
      - type: APIs.io Search
        url: overlays/intelligence-openapi-search.yml
  - aid: twilio.com:ip-messaging
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
        url: properties/ip-message-openapi-original.yml
        data:
          info:
            title: Twilio IP Messaging API
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
                  - Retrieve
                  - Service
                  - Bindings
                  - Services
                  - Service
                  - Sid
                  - Bindings
                summary: Retrieve Service Bindings
            /v2/Services/{ServiceSid}/Bindings/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Binding
                  - Services
                  - Service
                  - Sid
                  - Bindings
                summary: Retrieve Service Binding
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Binding
                  - Services
                  - Service
                  - Sid
                  - Bindings
                summary: Delete Service Binding
            /v2/Services/{ServiceSid}/Channels/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Channel
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                summary: Retrieve Service Channel
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Channel
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                summary: Delete Service Channel
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - Channel
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                summary: Update Service Channel
            /v2/Services/{ServiceSid}/Channels:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Channel
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                summary: Create Service Channel
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Channels
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                summary: Retrieve Service Channels
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Webhooks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Channel
                  - Webhooks
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                summary: Retrieve Service Channel Webhooks
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Channel
                  - Webhook
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                summary: Create Service Channel Webhook
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Webhooks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Channel
                  - Webhook
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                summary: Retrieve Service Channel Webhook
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - Channel
                  - Webhooks
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                summary: Update Service Channel Webhooks
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Channel
                  - Webhook
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                summary: Delete Service Channel Webhook
            /v2/Credentials:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Credentials
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                summary: Retrieve Credentials
              post:
                description: ''
                tags:
                  - Create
                  - Credential
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                summary: Create Credential
            /v2/Credentials/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Credential
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                summary: Retrieve Credential
              post:
                description: ''
                tags:
                  - Update
                  - Credential
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                summary: Update Credential
              delete:
                description: ''
                tags:
                  - Delete
                  - Credential
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                summary: Delete Credential
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Invites/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Channel
                  - Invite
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                summary: Retrieve Service Channel Invite
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Channel
                  - Invite
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                summary: Delete Service Channel Invite
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Invites:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Channel
                  - Invite
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                summary: Create Service Channel Invite
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Channel
                  - Invites
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Channels
                  - Channel
                  - Webhooks
                  - Credentials
                  - Invites
                summary: Retrieve Service Channel Invites
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Channel
                  - Member
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
                summary: Retrieve Service Channel Member
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Channel
                  - Member
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
                summary: Delete Service Channel Member
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - Channel
                  - Member
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
                summary: Update Service Channel Member
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Members:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Channel
                  - Member
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
                summary: Create Service Channel Member
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Channel
                  - Members
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
                summary: Retrieve Service Channel Members
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Channel
                  - Message
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
                summary: Retrieve Service Channel Message
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Channel
                  - Message
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
                summary: Delete Service Channel Message
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - Channel
                  - Message
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
                summary: Update Service Channel Message
            /v2/Services/{ServiceSid}/Channels/{ChannelSid}/Messages:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Channel
                  - Message
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
                summary: Create Service Channel Message
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Channel
                  - Messages
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
                summary: Retrieve Service Channel Messages
            /v2/Services/{ServiceSid}/Roles/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Role
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
                summary: Retrieve Service Role
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Role
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
                summary: Delete Service Role
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - Role
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
                summary: Update Service Role
            /v2/Services/{ServiceSid}/Roles:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Role
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
                summary: Create Service Role
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Roles
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
                summary: Retrieve Service Roles
            /v2/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
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
                summary: Retrieve Service
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
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
                summary: Delete Service
              post:
                description: ''
                tags:
                  - Update
                  - Service
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
                summary: Update Service
            /v2/Services:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Create
                  - Service
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
                summary: Create Service
              get:
                description: ''
                tags:
                  - Retrieve
                  - Services
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
                summary: Retrieve Services
            /v2/Services/{ServiceSid}/Users/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - User
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
                summary: Retrieve Service User
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - User
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
                summary: Delete Service User
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - User
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
                summary: Update Service User
            /v2/Services/{ServiceSid}/Users:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - User
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
                summary: Create Service User
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Users
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
                summary: Retrieve Service Users
            /v2/Services/{ServiceSid}/Users/{UserSid}/Bindings:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - User
                  - Bindings
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
                summary: Retrieve Service User Bindings
            /v2/Services/{ServiceSid}/Users/{UserSid}/Bindings/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - User
                  - Binding
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
                summary: Retrieve Service User Binding
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - User
                  - Binding
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
                summary: Delete Service User Binding
            /v2/Services/{ServiceSid}/Users/{UserSid}/Channels:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - User
                  - Channels
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
                summary: Retrieve Service User Channels
            /v2/Services/{ServiceSid}/Users/{UserSid}/Channels/{ChannelSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - User
                  - Channel
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
                summary: Retrieve Service User Channel
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - User
                  - Channel
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
                summary: Delete Service User Channel
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - User
                  - Channel
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
                summary: Update Service User Channel
          tags:
            - name: IP Messaging
              description: Needs a description.
            - name: Services
              description: Needs a description.
            - name: Bindings
              description: Needs a description.
            - name: Channels
              description: Needs a description.
            - name: Webhooks
              description: Needs a description.
            - name: Cre
              description: Needs a description.
            - name: Credentials
              description: Needs a description.
            - name: Invites
              description: Needs a description.
            - name: Members
              description: Needs a description.
            - name: Message
              description: Needs a description.
            - name: Roles
              description: Needs a description.
            - name: Users
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Avai
    overlays:
      - type: APIs.io Search
        url: overlays/ip-message-openapi-search.yml
  - aid: twilio.com:marketplace
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
        url: properties/marketplace-openapi-original.yml
        data:
          info:
            title: Twilio Marketplace API
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
                  - Retrieve
                  - Available
                  - Add-
                  - 'On'
                  - Available
                  - Add
                  - Ons
                  - Sid
                summary: Retrieve Available Add-On
            /marketplace/AvailableAddOns:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of Add-ons currently available to be
                  installed.
                tags:
                  - Retrieve
                  - Available
                  - Add-
                  - Ons
                  - Available
                  - Add
                  - Ons
                  - Sid
                summary: Retrieve Available Add-Ons
            /marketplace/AvailableAddOns/{AvailableAddOnSid}/Extensions/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch an instance of an Extension for the Available Add-on.
                tags:
                  - Retrieve
                  - Available
                  - Add-
                  - 'On'
                  - Extension
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                summary: Retrieve Available Add-On Extension
            /marketplace/AvailableAddOns/{AvailableAddOnSid}/Extensions:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of Extensions for the Available Add-on.
                tags:
                  - Retrieve
                  - Available
                  - Add-
                  - 'On'
                  - Extensions
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                summary: Retrieve Available Add-On Extensions
            /marketplace/InstalledAddOns:
              description: 'TODO: Resource-level docs'
              post:
                description: Install an Add-on for the Account specified.
                tags:
                  - Create
                  - Installed
                  - Add-
                  - 'On'
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
                summary: Create Installed Add-On
              get:
                description: >-
                  Retrieve a list of Add-ons currently installed on this
                  Account.
                tags:
                  - Retrieve
                  - Installed
                  - Add-
                  - Ons
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
                summary: Retrieve Installed Add-Ons
            /marketplace/InstalledAddOns/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Remove an Add-on installation from your account
                tags:
                  - Delete
                  - Installed
                  - Add-
                  - 'On'
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
                summary: Delete Installed Add-On
              get:
                description: >-
                  Fetch an instance of an Add-on currently installed on this
                  Account.
                tags:
                  - Retrieve
                  - Installed
                  - Add-
                  - 'On'
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
                summary: Retrieve Installed Add-On
              post:
                description: Update an Add-on installation for the Account specified.
                tags:
                  - Update
                  - Installed
                  - Add-
                  - 'On'
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
                summary: Update Installed Add-On
            /marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch an instance of an Extension for the Installed Add-on.
                tags:
                  - Retrieve
                  - Installed
                  - Add-
                  - 'On'
                  - Extension
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
                summary: Retrieve Installed Add-On Extension
              post:
                description: Update an Extension for an Add-on installation.
                tags:
                  - Create
                  - Installed
                  - Add-
                  - 'On'
                  - Extension
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
                summary: Create Installed Add-On Extension
            /marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of Extensions for the Installed Add-on.
                tags:
                  - Retrieve
                  - Installed
                  - Add-
                  - 'On'
                  - Extensions
                  - Available
                  - Add
                  - Ons
                  - Sid
                  - 'On'
                  - Extensions
                  - Installed
                summary: Retrieve Installed Add-On Extensions
          tags:
            - name: PreviewMarketplaceAvailableAddOn
            - name: PreviewMarketplaceAvailableAddOnExtension
            - name: PreviewMarketplaceInstalledAddOn
            - name: PreviewMarketplaceInstalledAddOnExtension
          x-maturity:
            - name: Preview
              description: >-
                PLEASE NOTE that this is a Preview product that is subject to
                change. Use it with caution. If you currently do not have
                developer preview access, please contact
                https://www.twilio.com/help/co
    overlays:
      - type: APIs.io Search
        url: overlays/marketplace-openapi-search.yml
  - aid: twilio.com:media
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
        url: properties/media-openapi-original.yml
        data:
          info:
            title: Twilio Media API
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
                  - Create
                  - Media
                  - Processors
                  - Media
                  - Processors
                summary: Create Media Processors
              get:
                description: Returns a list of MediaProcessors.
                tags:
                  - Retrieve
                  - Media
                  - Processors
                  - Media
                  - Processors
                summary: Retrieve Media Processors
            /v1/MediaProcessors/{Sid}:
              description: >-
                A MediaProcessor resource provides the ability to capture
                content from a web application with a Twilio Media Extension to
                create a livestream.
              get:
                description: Returns a single MediaProcessor resource identified by a SID.
                tags:
                  - Retrieve
                  - Media
                  - Processor
                  - Media
                  - Processors
                  - Sid
                summary: Retrieve Media Processor
              post:
                description: Updates a MediaProcessor resource identified by a SID.
                tags:
                  - Update
                  - Media
                  - Processor
                  - Media
                  - Processors
                  - Sid
                summary: Update Media Processor
            /v1/MediaRecordings/{Sid}:
              description: >-
                A MediaRecording resource exposes recording metadata and allows
                the deletion of a particular recording.
              delete:
                description: Deletes a MediaRecording resource identified by a SID.
                tags:
                  - Delete
                  - Media
                  - Processor
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                summary: Delete Media Processor
              get:
                description: Returns a single MediaRecording resource identified by a SID.
                tags:
                  - Retrieve
                  - Media
                  - Processor
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                summary: Retrieve Media Processor
            /v1/MediaRecordings:
              description: >-
                A MediaRecording resource exposes recording metadata and allows
                the deletion of a particular recording.
              get:
                description: Returns a list of MediaRecordings.
                tags:
                  - Retrieve
                  - Media
                  - Recordings
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                summary: Retrieve Media Recordings
            /v1/PlayerStreamers/{Sid}:
              description: >-
                A PlayerStreamer resource provides the ability to send a
                livestream to a JavaScript, iOS, or Android Player SDK.
              get:
                description: Returns a single PlayerStreamer resource identified by a SID.
                tags:
                  - Retrieve
                  - Player
                  - Streamer
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                  - Player
                  - Streamers
                summary: Retrieve Player Streamer
              post:
                description: Updates a PlayerStreamer resource identified by a SID.
                tags:
                  - Update
                  - Player
                  - Streamer
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                  - Player
                  - Streamers
                summary: Update Player Streamer
            /v1/PlayerStreamers:
              description: >-
                A PlayerStreamer resource provides the ability to send a
                livestream to a JavaScript, iOS, or Android Player SDK.
              post:
                description: ''
                tags:
                  - Create
                  - Player
                  - Streamers
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                  - Player
                  - Streamers
                summary: Create Player Streamers
              get:
                description: Returns a list of PlayerStreamers.
                tags:
                  - Retrieve
                  - Player
                  - Streamers
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                  - Player
                  - Streamers
                summary: Retrieve Player Streamers
            /v1/PlayerStreamers/{Sid}/PlaybackGrant:
              description: >-
                A PlaybackGrant resource allows developers to generate a grant
                to initialize the Twilio Live Player SDK and connect to a
                livestream.
              post:
                description: ''
                tags:
                  - Create
                  - Player
                  - Streamer
                  - Playback
                  - Grant
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                  - Player
                  - Streamers
                  - Playback
                  - Grant
                summary: Create Player Streamer Playback Grant
              get:
                description: >-
                  **This method is not enabled.** Returns a single PlaybackGrant
                  resource identified by a SID.
                tags:
                  - Retrieve
                  - Player
                  - Streamer
                  - Playback
                  - Grant
                  - Media
                  - Processors
                  - Sid
                  - Recordings
                  - Player
                  - Streamers
                  - Playback
                  - Grant
                summary: Retrieve Player Streamer Playback Grant
          tags:
            - name: Tag
            - name: Media
              description: Needs a description.
            - name: Processors
              description: Needs a description.
            - name: Recordings
              description: Needs a description.
            - name: ' Players'
              description: Needs a description.
            - name: ' Streaming'
              description: Needs a description.
            - name: Playback
              description: Needs a description.
            - name: Grants
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Available.
            - name: Preview
              description: >-
                PLEASE NOTE that this is a Preview product that is subject to
                change. Use it with caution. If you currently do not have
                developer preview access, please contact
                https://www.twilio.com/help/co
    overlays:
      - type: APIs.io Search
        url: overlays/media-openapi-search.yml
  - aid: twilio.com:messaging
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
        url: properties/messaging-openapi-original.yml
        data:
          info:
            title: Twilio Messaging API
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
                  - Create
                  - Service
                  - Alpha
                  - Sender
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                summary: Create Service Alpha Sender
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Alpha
                  - Senders
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                summary: Retrieve Service Alpha Senders
            /v1/Services/{ServiceSid}/AlphaSenders/{Sid}:
              description: >-
                A Messaging Service resource to add, fetch or remove an Alpha
                Sender ID from a Messaging Service.
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Alpha
                  - Sender
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                summary: Retrieve Service Alpha Sender
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Alpha
                  - Sender
                  - Services
                  - Service
                  - Sid
                  - Alpha
                  - Senders
                summary: Delete Service Alpha Sender
            /v1/a2p/BrandRegistrations/{BrandRegistrationSid}/SmsOtp:
              description: >-
                A Messaging Service resource to retry OTP verification for Sole
                Proprietor Brand Registrations.
              post:
                description: ''
                tags:
                  - Create
                  - Brand
                  - Registration
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
                summary: Create Brand Registration SMS
            /v1/a2p/BrandRegistrations/{Sid}:
              description: >-
                A Messaging Service resource to add and fetch Brand
                Registrations.
              get:
                description: ''
                tags:
                  - Retrieve
                  - Brand
                  - Registration
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
                summary: Retrieve Brand Registration
              post:
                description: ''
                tags:
                  - Update
                  - Brand
                  - Registration
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
                summary: Update Brand Registration
            /v1/a2p/BrandRegistrations:
              description: >-
                A Messaging Service resource to add and fetch Brand
                Registrations.
              get:
                description: ''
                tags:
                  - Retrieve
                  - Brand
                  - Registrations
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
                summary: Retrieve Brand Registrations
              post:
                description: ''
                tags:
                  - Create
                  - Brand
                  - Registration
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
                summary: Create Brand Registration
            /v1/a2p/BrandRegistrations/{BrandSid}/Vettings:
              description: A Messaging Service resource to add and get Brand Vettings.
              post:
                description: ''
                tags:
                  - Create
                  - Brand
                  - Registration
                  - Vetting
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
                summary: Create Brand Registration Vetting
              get:
                description: ''
                tags:
                  - Retrieve
                  - Brand
                  - Registration
                  - Vettings
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
                summary: Retrieve Brand Registration Vettings
            /v1/a2p/BrandRegistrations/{BrandSid}/Vettings/{BrandVettingSid}:
              description: A Messaging Service resource to add and get Brand Vettings.
              get:
                description: ''
                tags:
                  - Retrieve
                  - Brand
                  - Registration
                  - Vetting
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
                summary: Retrieve Brand Registration Vetting
            /v1/Services/{MessagingServiceSid}/ChannelSenders:
              description: >-
                A Messaging Service resource to read, fetch all Channel Senders
                associated with a Messaging Service.
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Channel
                  - Senders
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
                summary: Retrieve Service Channel Senders
            /v1/Services/{MessagingServiceSid}/ChannelSenders/{Sid}:
              description: >-
                A Messaging Service resource to read, fetch all Channel Senders
                associated with a Messaging Service.
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Channel
                  - Sender
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
                summary: Retrieve Service Channel Sender
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
                  - Retrieve
                  - Deactivations
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
                summary: Retrieve Deactivations
            /v1/LinkShortening/Domains/{DomainSid}/Certificate:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Create
                  - Link
                  - Shortening
                  - Domain
                  - Certificate
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
                summary: Create Link Shortening Domain Certificate
              get:
                description: ''
                tags:
                  - Retrieve
                  - Link
                  - Shortening
                  - Domain
                  - Certificate
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
                summary: Retrieve Link Shortening Domain Certificate
              delete:
                description: ''
                tags:
                  - Create
                  - Link
                  - Shortening
                  - Domain
                  - Certificate
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
                summary: Create Link Shortening Domain Certificate
            /v1/LinkShortening/Domains/{DomainSid}/Config:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Create
                  - Link
                  - Shortening
                  - Domain
                  - Configuration
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
                summary: Create Link Shortening Domain Configuration
              get:
                description: ''
                tags:
                  - Retrieve
                  - Link
                  - Shortening
                  - Domain
                  - Configuration
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
                summary: Retrieve Link Shortening Domain Configuration
            /v1/LinkShortening/MessagingService/{MessagingServiceSid}/DomainConfig:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Link
                  - Shortening
                  - Messaging
                  - Service
                  - Domain
                  - Configuration
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
                summary: >-
                  Retrieve Link Shortening  Messaging Service Domain
                  Configuration
            /v1/Services/PreregisteredUsa2p:
              description: >-
                Resource to associate preregistered campaign with Messaging
                Service.
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Pre-registered
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
                summary: Create Service Pre-registered USA 2P
            /v1/LinkShortening/Domains/{DomainSid}/MessagingServices/{MessagingServiceSid}:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Update
                  - Link
                  - Shortening
                  - Domain
                  - Message
                  - Service
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
                summary: Update Link Shortening Domain Message Service
              delete:
                description: ''
                tags:
                  - Delete
                  - Link
                  - Shortening
                  - Domain
                  - Message
                  - Service
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
                summary: Delete Link Shortening Domain Message Service
            /v1/LinkShortening/MessagingServices/{MessagingServiceSid}/Domain:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Link
                  - Shortening
                  - Messaging
                  - Service
                  - Domain
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
                summary: Retrieve Link Shortening Messaging Service Domain
            /v1/Services/{ServiceSid}/PhoneNumbers:
              description: >-
                A Messaging Service resource to add, fetch or remove phone
                numbers from a Messaging Service.
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Phone
                  - Number
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
                summary: Create Service Phone Number
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Phone
                  - Numbers
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
                summary: Retrieve Service Phone Numbers
            /v1/Services/{ServiceSid}/PhoneNumbers/{Sid}:
              description: >-
                A Messaging Service resource to add, fetch or remove phone
                numbers from a Messaging Service.
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Phone
                  - Number
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
                summary: Delete Service Phone Number
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Phone
                  - Numbers
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
                summary: Retrieve Service Phone Numbers
            /v1/Services:
              description: >-
                A Messaging Service resource to create, fetch, update, delete or
                add/remove senders from Messaging Services.
              post:
                description: ''
                tags:
                  - Create
                  - Service
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
                summary: Create Service
              get:
                description: ''
                tags:
                  - Retrieve
                  - Services
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
                summary: Retrieve Services
            /v1/Services/{Sid}:
              description: >-
                A Messaging Service resource to create, fetch, update, delete or
                add/remove senders from Messaging Services.
              post:
                description: ''
                tags:
                  - Update
                  - Service
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
                summary: Update Service
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
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
                summary: Retrieve Service
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
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
                summary: Delete Service
            /v1/Services/{ServiceSid}/ShortCodes:
              description: >-
                A Messaging Service resource to add, fetch or remove short code
                numbers from a Messaging Service.
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Short
                  - Codes
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
                summary: Create Service Short Codes
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Short
                  - Codes
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
                summary: Retrieve Service Short Codes
            /v1/Services/{ServiceSid}/ShortCodes/{Sid}:
              description: >-
                A Messaging Service resource to add, fetch or remove short code
                numbers from a Messaging Service.
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Short
                  - Code
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
                summary: Delete Service Short Code
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Short
                  - Code
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
                summary: Retrieve Service Short Code
            /v1/Tollfree/Verifications/{Sid}:
              description: A Messaging resource to add and fetch Tollfree Verifications.
              get:
                description: ''
                tags:
                  - Retrieve
                  - Toll
                  - Free
                  - Verification
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
                summary: Retrieve Toll Free Verification
              post:
                description: ''
                tags:
                  - Update
                  - Toll
                  - Free
                  - Verification
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
                summary: Update Toll Free Verification
              delete:
                description: ''
                tags:
                  - Delete
                  - Toll
                  - Free
                  - Verification
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
                summary: Delete Toll Free Verification
            /v1/Tollfree/Verifications:
              description: A Messaging resource to add and fetch Tollfree Verifications.
              get:
                description: ''
                tags:
                  - Retrieve
                  - Toll
                  - Free
                  - Verifications
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
                summary: Retrieve Toll Free Verifications
              post:
                description: ''
                tags:
                  - Create
                  - Toll
                  - Free
                  - Verification
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
                summary: Create Toll Free Verification
            /v1/Services/{MessagingServiceSid}/Compliance/Usa2p:
              description: >-
                A service for (fetch/create/delete) A2P Campaign for a Messaging
                Service
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Compliance
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
                summary: Create Service Compliance USA 2P
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Compliance
                  - Ps
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
                summary: Retrieve Service Compliance USA 2Ps
            /v1/Services/{MessagingServiceSid}/Compliance/Usa2p/{Sid}:
              description: >-
                A service for (fetch/create/delete) A2P Campaign for a Messaging
                Service
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Compliance
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
                summary: Delete Service Compliance USA 2P
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Compliance
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
                summary: Retrieve Service Compliance USA 2P
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
                  - Retrieve
                  - Service
                  - Compliance
                  - Use
                  - Cases
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
                summary: Retrieve Service Compliance USA 2P Use Cases
            /v1/Services/Usecases:
              description: >-
                Use Case resource. Fetch possible use cases for a Messaging
                Service.
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Use
                  - Cases
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
                summary: Retrieve Service Use Cases
          tags:
            - name: Messaging
              description: Needs a description.
            - name: Services
              description: Needs a description.
            - name: Alpha
              description: Needs a description.
            - name: Senders
              description: Needs a description.
            - name: Brand
              description: Needs a description.
            - name: Registrations
              description: Needs a description.
            - name: SMS
              description: Needs a description.
            - name: Vettings
              description: Needs a description.
            - name: Channels
              description: Needs a description.
            - name: Deactivations
              description: Needs a description.
            - name: Link Shortening
              description: Needs a description.
            - name: Domains
              description: Needs a description.
            - name: Certificates
              description: Needs a description.
            - name: Configurations
              description: Needs a description.
            - name: Pre-Registered
              description: Needs a description.
            - name: USA
              description: Needs a description.
            - name: 2P
              description: Needs a description.
            - name: Phone Number
              description: Needs a description.
            - name: Numbers
              description: Needs a description.
            - name: Short Codes
              description: Needs a description.
            - name: Toll Free
              description: Needs a description.
            - name: Verification
              description: Needs a description.
            - name: Verifications
              description: Needs a description.
            - name: Compliance
              description: Needs a description.
            - name: Use Cases
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Available.
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with ca
    overlays:
      - type: APIs.io Search
        url: overlays/messaging-openapi-search.yml
  - aid: twilio.com:microvisor
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
        url: properties/microvisor-openapi-original.yml
        data:
          info:
            title: Twilio Microvisor API
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
                  - Retrieve
                  - Configurations
                  - Configs
                summary: Retrieve Configurations
              post:
                description: Create a config for an Account.
                tags:
                  - Create
                  - Configuration
                  - Configs
                summary: Create Configuration
            /v1/Configs/{Key}:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a Config for an Account.
                tags:
                  - Retrieve
                  - Configuration
                  - Configs
                  - Key
                summary: Retrieve Configuration
              post:
                description: Update a config for an Account.
                tags:
                  - Update
                  - Configuration
                  - Configs
                  - Key
                summary: Update Configuration
              delete:
                description: Delete a config for an Account.
                tags:
                  - Delete
                  - Configuration
                  - Configs
                  - Key
                summary: Delete Configuration
            /v1/Secrets:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Secrets for an Account.
                tags:
                  - Retrieve
                  - Secrets
                  - Configs
                  - Key
                  - Secrets
                summary: Retrieve Secrets
              post:
                description: Create a secret for an Account.
                tags:
                  - Create
                  - Secret
                  - Configs
                  - Key
                  - Secrets
                summary: Create Secret
            /v1/Secrets/{Key}:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a Secret for an Account.
                tags:
                  - Retrieve
                  - Secret
                  - Configs
                  - Key
                  - Secrets
                summary: Retrieve Secret
              post:
                description: Update a secret for an Account.
                tags:
                  - Update
                  - Secret
                  - Configs
                  - Key
                  - Secrets
                summary: Update Secret
              delete:
                description: Delete a secret for an Account.
                tags:
                  - Delete
                  - Secret
                  - Configs
                  - Key
                  - Secrets
                summary: Delete Secret
            /v1/Apps:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Apps for an Account.
                tags:
                  - Retrieve
                  - Applications
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                summary: Retrieve Applications
            /v1/Apps/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific App.
                tags:
                  - Retrieve
                  - Application
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                summary: Retrieve Application
              delete:
                description: Delete a specific App.
                tags:
                  - Delete
                  - Application
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                summary: Delete Application
            /v1/Apps/{AppSid}/Manifest:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve the Manifest for an App.
                tags:
                  - Retrieve
                  - Application
                  - Manifest
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                summary: Retrieve Application Manifest
            /v1/Devices:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Devices registered with the Account.
                tags:
                  - Retrieve
                  - Devices
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                summary: Retrieve Devices
            /v1/Devices/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Device.
                tags:
                  - Retrieve
                  - Device
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                summary: Retrieve Device
              post:
                description: Update a specific Device.
                tags:
                  - Update
                  - Device
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                summary: Update Device
            /v1/Devices/{DeviceSid}/Configs:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Configs for a Device.
                tags:
                  - Retrieve
                  - Device
                  - Configurations
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
                summary: Retrieve Device Configurations
              post:
                description: Create a config for a Microvisor Device.
                tags:
                  - Create
                  - Device
                  - Configuration
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
                summary: Create Device Configuration
            /v1/Devices/{DeviceSid}/Configs/{Key}:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a Config for a Device.
                tags:
                  - Retrieve
                  - Device
                  - Configuration
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
                summary: Retrieve Device Configuration
              post:
                description: Update a config for a Microvisor Device.
                tags:
                  - Update
                  - Device
                  - Configuration
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
                summary: Update Device Configuration
              delete:
                description: Delete a config for a Microvisor Device.
                tags:
                  - Delete
                  - Device
                  - Configuration
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
                summary: Delete Device Configuration
            /v1/Devices/{DeviceSid}/Secrets:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Secrets for a Device.
                tags:
                  - Retrieve
                  - Device
                  - Secrets
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
                summary: Retrieve Device Secrets
              post:
                description: Create a secret for a Microvisor Device.
                tags:
                  - Create
                  - Device
                  - Secret
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
                summary: Create Device Secret
            /v1/Devices/{DeviceSid}/Secrets/{Key}:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a Secret for a Device.
                tags:
                  - Retrieve
                  - Device
                  - Secret
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
                summary: Retrieve Device Secret
              post:
                description: Update a secret for a Microvisor Device.
                tags:
                  - Update
                  - Device
                  - Secret
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
                summary: Update Device Secret
              delete:
                description: Delete a secret for a Microvisor Device.
                tags:
                  - Delete
                  - Device
                  - Secret
                  - Configs
                  - Key
                  - Secrets
                  - Apps
                  - Sid
                  - App
                  - Manifest
                  - Devices
                  - Device
                summary: Delete Device Secret
          tags:
            - name: Test
            - name: Microvisors
              description: Needs a description.
            - name: Accounts
              description: Needs a description.
            - name: Configurations
              description: Needs a description.
            - name: Keys
              description: Needs a description.
            - name: Microvisor
              description: Needs a description.
            - name: Secrets
              description: Needs a description.
            - name: Applications
              description: Needs a description.
            - name: Manifests
              description: Needs a description.
            - name: Devices
              description: Needs a description.
          x-maturity:
            - name: Preview
              description: >-
                PLEASE NOTE that this is a Preview product that is subject to
                change. Use it with caution. If you currently do not have
                developer preview access, please contact
                https://www.twilio.com/help/co
    overlays:
      - type: APIs.io Search
        url: overlays/microvisor-openapi-search.yml
  - aid: twilio.com:monitor
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
        url: properties/monitor-openapi-original.yml
        data:
          info:
            title: Twilio Monitor API
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
                  - Retrieve
                  - Alert
                  - Alerts
                  - Sid
                summary: Retrieve Alert
            /v1/Alerts:
              description: Debugger alerts
              get:
                description: ''
                tags:
                  - Retrieve
                  - Alerts
                  - Alerts
                  - Sid
                summary: Retrieve Alerts
            /v1/Events/{Sid}:
              description: Debugger events
              get:
                description: ''
                tags:
                  - Retrieve
                  - Event
                  - Alerts
                  - Sid
                  - Events
                summary: Retrieve Event
            /v1/Events:
              description: Debugger events
              get:
                description: Returns a list of events in the account, sorted by event-date.
                tags:
                  - Retrieve
                  - Events
                  - Alerts
                  - Sid
                  - Events
                summary: Retrieve Events
          tags:
            - name: Tag
            - name: Monitors
              description: Needs a description.
            - name: Alerts
              description: Needs a description.
            - name: Events
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Avai
    overlays:
      - type: APIs.io Search
        url: overlays/monitor-openapi-search.yml
  - aid: twilio.com:notify
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
        url: properties/notify-openapi-original.yml
        data:
          info:
            title: Twilio Notify API
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
                  - Retrieve
                  - Service
                  - Binding
                  - Services
                  - Service
                  - Sid
                  - Bindings
                summary: Retrieve Service Binding
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Binding
                  - Services
                  - Service
                  - Sid
                  - Bindings
                summary: Delete Service Binding
            /v1/Services/{ServiceSid}/Bindings:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Binding
                  - Services
                  - Service
                  - Sid
                  - Bindings
                summary: Create Service Binding
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Bindings
                  - Services
                  - Service
                  - Sid
                  - Bindings
                summary: Retrieve Service Bindings
            /v1/Credentials:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Credentials
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                summary: Retrieve Credentials
              post:
                description: ''
                tags:
                  - Create
                  - Credential
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                summary: Create Credential
            /v1/Credentials/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Credential
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                summary: Retrieve Credential
              post:
                description: ''
                tags:
                  - Update
                  - Credential
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                summary: Update Credential
              delete:
                description: ''
                tags:
                  - Delete
                  - Credential
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                summary: Delete Credential
            /v1/Services/{ServiceSid}/Notifications:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Notification
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                  - Notifications
                summary: Create Service Notification
            /v1/Services:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                  - Notifications
                summary: Create Service
              get:
                description: ''
                tags:
                  - Retrieve
                  - Services
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                  - Notifications
                summary: Retrieve Services
            /v1/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                  - Notifications
                summary: Delete Service
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                  - Notifications
                summary: Retrieve Service
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - Services
                  - Service
                  - Sid
                  - Bindings
                  - Credentials
                  - Notifications
                summary: Update Service
          tags:
            - name: Tag
            - name: Notifications
              description: Needs a description.
            - name: Services
              description: Needs a description.
            - name: Bindings
              description: Needs a description.
            - name: Credentials
              description: Needs a description.
          x-maturity:
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with ca
    overlays:
      - type: APIs.io Search
        url: overlays/notify-openapi-search.yml
  - aid: twilio.com:numbers
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
        url: properties/numbers-openapi-original.yml
        data:
          info:
            title: Twilio Numbers API
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
                  - Retrieve
                  - Hosted
                  - Number
                  - Authorization
                  - Document
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                summary: Retrieve Hosted Number Authorization Document
              delete:
                description: Cancel the AuthorizationDocument request.
                tags:
                  - Delete
                  - Hosted
                  - Number
                  - Authorization
                  - Document
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                summary: Delete Hosted Number Authorization Document
            /v2/HostedNumber/AuthorizationDocuments:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of AuthorizationDocuments belonging to the
                  account initiating the request.
                tags:
                  - Retrieve
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                summary: Retrieve Hosted Number Authorization Documents
              post:
                description: >-
                  Create an AuthorizationDocument for authorizing the hosting of
                  phone number capabilities on Twilio's platform.
                tags:
                  - Create
                  - Hosted
                  - Number
                  - Authorization
                  - Document
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                summary: Create Hosted Number Authorization Document
            /v2/HostedNumber/Orders/Bulk/{BulkHostingSid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific BulkHostedNumberOrder.
                tags:
                  - Retrieve
                  - Hosted
                  - Number
                  - Orders
                  - Bulk
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Sid
                  - Orders
                  - Bulk
                  - Hosting
                summary: Retrieve Hosted Number Orders Bulk
            /v2/HostedNumber/Orders/Bulk:
              description: 'TODO: Resource-level docs'
            /v2/RegulatoryCompliance/Bundles:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Bundle.
                tags:
                  - Create
                  - Regulatory
                  - Compliance
                  - Bundle
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
                summary: Create Regulatory Compliance Bundle
              get:
                description: Retrieve a list of all Bundles for an account.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - Bundles
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
                summary: Retrieve Regulatory Compliance Bundles
            /v2/RegulatoryCompliance/Bundles/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Bundle instance.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - Bundle
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
                summary: Retrieve Regulatory Compliance Bundle
              post:
                description: Updates a Bundle in an account.
                tags:
                  - Update
                  - Regulatory
                  - Compliance
                  - Bundle
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
                summary: Update Regulatory Compliance Bundle
              delete:
                description: Delete a specific Bundle.
                tags:
                  - Delete
                  - Regulatory
                  - Compliance
                  - Bundle
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
                summary: Delete Regulatory Compliance Bundle
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Creates a new copy of a Bundle. It will internally create
                  copies of all the bundle items (identities and documents) of
                  the original bundle
                tags:
                  - Create
                  - Regulatory
                  - Compliance
                  - Bundle
                  - Copy
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
                summary: Create Regulatory Compliance Bundle Copy
              get:
                description: Retrieve a list of all Bundles Copies for a Bundle.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - Bundle
                  - Copy
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
                summary: Retrieve Regulatory Compliance Bundle Copy
            /v2/HostedNumber/AuthorizationDocuments/{SigningDocumentSid}/DependentHostedNumberOrders:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of dependent HostedNumberOrders belonging to
                  the AuthorizationDocument.
                tags:
                  - Retrieve
                  - Hosted
                  - Number
                  - Authorization
                  - Documents
                  - Orders
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
                summary: Retrieve Hosted Number Authorization Documents Orders
            /v2/RegulatoryCompliance/EndUsers:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new End User.
                tags:
                  - Create
                  - Regulatory
                  - Compliance
                  - End
                  - User
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
                summary: Create Regulatory Compliance End User
              get:
                description: Retrieve a list of all End User for an account.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - End
                  - Users
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
                summary: Retrieve Regulatory Compliance End Users
            /v2/RegulatoryCompliance/EndUsers/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific End User Instance.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - End
                  - User
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
                summary: Retrieve Regulatory Compliance End User
              post:
                description: Update an existing End User.
                tags:
                  - Update
                  - Regulatory
                  - Compliance
                  - End
                  - User
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
                summary: Update Regulatory Compliance End User
              delete:
                description: Delete a specific End User.
                tags:
                  - Delete
                  - Regulatory
                  - Compliance
                  - End
                  - User
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
                summary: Delete Regulatory Compliance End User
            /v2/RegulatoryCompliance/EndUserTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all End-User Types.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - End
                  - User
                  - Types
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
                summary: Retrieve Regulatory Compliance End User Types
            /v2/RegulatoryCompliance/EndUserTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific End-User Type Instance.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - End
                  - User
                  - Type
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
                summary: Retrieve Regulatory Compliance End User Type
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations:
              description: 'TODO: Resource-level docs'
              post:
                description: Creates an evaluation for a bundle
                tags:
                  - Create
                  - Regulatory
                  - Compliance
                  - Bundle
                  - Evaluation
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
                summary: Create Regulatory Compliance Bundle Evaluation
              get:
                description: >-
                  Retrieve a list of Evaluations associated to the Bundle
                  resource.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - Bundle
                  - Evaluations
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
                summary: Retrieve Regulatory Compliance Bundle Evaluations
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Evaluation Instance.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - Bundle
                  - Evaluation
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
                summary: Retrieve Regulatory Compliance Bundle Evaluation
            /v2/HostedNumber/Orders/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific HostedNumberOrder.
                tags:
                  - Retrieve
                  - Hosted
                  - Number
                  - Order
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
                summary: Retrieve Hosted Number Order
              delete:
                description: >-
                  Cancel the HostedNumberOrder (only available when the status
                  is in `received`).
                tags:
                  - Delete
                  - Hosted
                  - Number
                  - Order
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
                summary: Delete Hosted Number Order
            /v2/HostedNumber/Orders:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of HostedNumberOrders belonging to the account
                  initiating the request.
                tags:
                  - Retrieve
                  - Hosted
                  - Number
                  - Orders
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
                summary: Retrieve Hosted Number Orders
              post:
                description: Host a phone number's capability on Twilio's platform.
                tags:
                  - Create
                  - Hosted
                  - Number
                  - Order
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
                summary: Create Hosted Number Order
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - Create
                  - Regulatory
                  - Compliance
                  - Bundle
                  - Item
                  - Assignment
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
                summary: Create Regulatory Compliance Bundle Item Assignment
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - Bundle
                  - Item
                  - Assignments
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
                summary: Retrieve Regulatory Compliance Bundle Item Assignments
            /v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - Bundle
                  - Item
                  - Assignment
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
                summary: Retrieve Regulatory Compliance Bundle Item Assignment
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - Delete
                  - Regulatory
                  - Compliance
                  - Bundle
                  - Item
                  - Assignment
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
                summary: Delete Regulatory Compliance Bundle Item Assignment
            /v2/RegulatoryCompliance/Regulations:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Regulations.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - Regulations
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
                summary: Retrieve Regulatory Compliance Regulations
            /v2/RegulatoryCompliance/Regulations/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Regulation Instance.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - Regulation
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
                summary: Retrieve Regulatory Compliance Regulation
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
                  - Create
                  - Regulatory
                  - Compliance
                  - Bundle
                  - Replace
                  - Items
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
                summary: Create Regulatory Compliance Bundle Replace Items
            /v2/RegulatoryCompliance/SupportingDocuments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Supporting Document.
                tags:
                  - Create
                  - Regulatory
                  - Compliance
                  - Supporting
                  - Document
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
                summary: Create Regulatory Compliance Supporting Document
              get:
                description: Retrieve a list of all Supporting Document for an account.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - Supporting
                  - Documents
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
                summary: Retrieve Regulatory Compliance Supporting Documents
            /v2/RegulatoryCompliance/SupportingDocuments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Supporting Document Instance.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - Supporting
                  - Document
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
                summary: Retrieve Regulatory Compliance Supporting Document
              post:
                description: Update an existing Supporting Document.
                tags:
                  - Update
                  - Regulatory
                  - Compliance
                  - Supporting
                  - Document
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
                summary: Update Regulatory Compliance Supporting Document
              delete:
                description: Delete a specific Supporting Document.
                tags:
                  - Delete
                  - Regulatory
                  - Compliance
                  - Supporting
                  - Document
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
                summary: Delete Regulatory Compliance Supporting Document
            /v2/RegulatoryCompliance/SupportingDocumentTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Supporting Document Types.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - Supporting
                  - Document
                  - Types
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
                summary: Retrieve Regulatory Compliance Supporting Document Types
            /v2/RegulatoryCompliance/SupportingDocumentTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Supporting Document Type Instance.
                tags:
                  - Retrieve
                  - Regulatory
                  - Compliance
                  - Supporting
                  - Document
                  - Type
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
                summary: Retrieve Regulatory Compliance Supporting Document Type
          tags:
            - name: Tag
            - name: Numbers
              description: Needs a description.
            - name: Hosted Numbers
              description: Needs a description.
            - name: Hosted
              description: Needs a description.
            - name: Authorization
              description: Needs a description.
            - name: Documents
              description: Needs a description.
            - name: Orders
              description: Needs a description.
            - name: Bulk
              description: Needs a description.
            - name: Bulk Hosting
              description: Needs a description.
            - name: Regulation
              description: Needs a description.
            - name: Compliance
              description: Needs a description.
            - name: Bundles
              description: Needs a description.
            - name: Copies
              description: Needs a description.
            - name: Signing
              description: Needs a description.
            - name: Dependent
              description: Needs a description.
            - name: Regulations
              description: Needs a description.
            - name: User
              description: Needs a description.
            - name: Regulatory
              description: Needs a description.
            - name: End
              description: Needs a description.
            - name: Users
              description: Needs a description.
            - name: Types
              description: Needs a description.
            - name: User Types
              description: Needs a description.
            - name: Bunldes
              description: Needs a description.
            - name: Evaluations
              description: Needs a description.
            - name: Items
              description: Needs a description.
            - name: Assignments
              description: Needs a description.
            - name: Supporting
              description: Needs a description.
            - name: ' Bundles'
              description: Needs a description.
            - name: ' Document Types'
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Available.
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with ca
    overlays:
      - type: APIs.io Search
        url: overlays/numbers-openapi-search.yml
  - aid: twilio.com:pricing
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
        url: properties/pricing-openapi-original.yml
        data:
          rules: null
          info:
            title: Twilio Pricing API
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
                  - Retrieve
                  - Trunking
                  - Countries
                  - Trunking
                  - Countries
                summary: Retrieve Trunking Countries
            /v2/Trunking/Countries/{IsoCountry}:
              description: Trunking pricing by country
              get:
                description: Fetch a specific Country.
                tags:
                  - Retrieve
                  - Trunking
                  - Country
                  - Trunking
                  - Countries
                  - Iso
                  - Country
                summary: Retrieve Trunking Country
            /v2/Trunking/Numbers/{DestinationNumber}:
              description: Trunking pricing for a specific phone number
              get:
                description: >-
                  Fetch pricing information for a specific destination and,
                  optionally, origination phone number.
                tags:
                  - Retrieve
                  - Trunking
                  - Number
                  - Trunking
                  - Countries
                  - Iso
                  - Country
                  - Numbers
                  - Destination
                  - Number
                summary: Retrieve Trunking Number
            /v2/Trunking/Numbers:
              description: Trunking pricing for a specific phone number
            /v2/Voice:
              description: Voice pricing
            /v2/Voice/Countries:
              description: Voice pricing by country
              get:
                description: ''
                tags:
                  - Retrieve
                  - Voice
                  - Countries
                  - Trunking
                  - Countries
                  - Iso
                  - Country
                  - Numbers
                  - Destination
                  - Number
                  - Voice
                summary: Retrieve Voice Countries
            /v2/Voice/Countries/{IsoCountry}:
              description: Voice pricing by country
              get:
                description: Fetch a specific Country.
                tags:
                  - Retrieve
                  - Voice
                  - Country
                  - Trunking
                  - Countries
                  - Iso
                  - Country
                  - Numbers
                  - Destination
                  - Number
                  - Voice
                summary: Retrieve Voice Country
            /v2/Voice/Numbers/{DestinationNumber}:
              description: Voice pricing for a specific phone number
              get:
                description: >-
                  Fetch pricing information for a specific destination and,
                  optionally, origination phone number.
                tags:
                  - Retrieve
                  - Voice
                  - Number
                  - Trunking
                  - Countries
                  - Iso
                  - Country
                  - Numbers
                  - Destination
                  - Number
                  - Voice
                summary: Retrieve Voice Number
            /v2/Voice/Numbers:
              description: Voice pricing for a specific phone number
          tags:
            - name: Pricing
              description: Needs a description.
            - name: Trunking
              description: Needs a description.
            - name: Countries
              description: Needs a description.
            - name: Numbers
              description: Needs a description.
            - name: Voice
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Avai
    overlays:
      - type: APIs.io Search
        url: overlays/pricing-openapi-search.yml
  - aid: twilio.com:proxy
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
        url: properties/proxy-openapi-original.yml
        data:
          info:
            title: Twilio Proxy API
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
                  - Retrieve
                  - Service
                  - Session
                  - Interaction
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                summary: Retrieve Service Session Interaction
              delete:
                description: Delete a specific Interaction.
                tags:
                  - Delete
                  - Service
                  - Session
                  - Interaction
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                summary: Delete Service Session Interaction
            /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of all Interactions for a Session. A maximum
                  of 100 records will be returned per page.
                tags:
                  - Retrieve
                  - Service
                  - Session
                  - Interactions
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                summary: Retrieve Service Session Interactions
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
                  - Create
                  - Service
                  - Session
                  - Participant
                  - Interaction
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                summary: Create Service Session Participant Interaction
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Session
                  - Participant
                  - Interaction
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                summary: Retrieve Service Session Participant Interaction
            /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Session
                  - Participant
                  - Interactions
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                summary: Retrieve Service Session Participant Interactions
            /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Participant.
                tags:
                  - Retrieve
                  - Service
                  - Session
                  - Participant
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                summary: Retrieve Service Session Participant
              delete:
                description: >-
                  Delete a specific Participant. This is a soft-delete. The
                  participant remains associated with the session and cannot be
                  re-added. Participants are only permanently deleted when the
                  [Session](https://www.twilio.com/docs/proxy/api/session) is
                  deleted.
                tags:
                  - Delete
                  - Service
                  - Session
                  - Participant
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                summary: Delete Service Session Participant
            /v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Participants in a Session.
                tags:
                  - Retrieve
                  - Service
                  - Session
                  - Participants
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                summary: Retrieve Service Session Participants
              post:
                description: Add a new Participant to the Session
                tags:
                  - Create
                  - Service
                  - Session
                  - Participant
                  - Services
                  - Service
                  - Sid
                  - Sessions
                  - Session
                  - Interactions
                  - Participants
                  - Participant
                  - Message
                summary: Create Service Session Participant
            /v1/Services/{ServiceSid}/PhoneNumbers:
              description: 'TODO: Resource-level docs'
              post:
                description: Add a Phone Number to a Service's Proxy Number Pool.
                tags:
                  - Create
                  - Service
                  - Phone
                  - Number
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
                summary: Create Service Phone Number
              get:
                description: >-
                  Retrieve a list of all Phone Numbers in the Proxy Number Pool
                  for a Service. A maximum of 100 records will be returned per
                  page.
                tags:
                  - Retrieve
                  - Service
                  - Phone
                  - Numbers
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
                summary: Retrieve Service Phone Numbers
            /v1/Services/{ServiceSid}/PhoneNumbers/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Phone Number from a Service.
                tags:
                  - Delete
                  - Service
                  - Phone
                  - Number
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
                summary: Delete Service Phone Number
              get:
                description: Fetch a specific Phone Number.
                tags:
                  - Retrieve
                  - Service
                  - Phone
                  - Number
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
                summary: Retrieve Service Phone Number
              post:
                description: Update a specific Proxy Number.
                tags:
                  - Update
                  - Service
                  - Phone
                  - Number
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
                summary: Update Service Phone Number
            /v1/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Service.
                tags:
                  - Retrieve
                  - Service
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
                summary: Retrieve Service
              delete:
                description: Delete a specific Service.
                tags:
                  - Delete
                  - Service
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
                summary: Delete Service
              post:
                description: Update a specific Service.
                tags:
                  - Update
                  - Service
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
                summary: Update Service
            /v1/Services:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of all Services for Twilio Proxy. A maximum of
                  100 records will be returned per page.
                tags:
                  - Retrieve
                  - Services
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
                summary: Retrieve Services
              post:
                description: Create a new Service for Twilio Proxy
                tags:
                  - Create
                  - Service
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
                summary: Create Service
            /v1/Services/{ServiceSid}/Sessions/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Session.
                tags:
                  - Retrieve
                  - Service
                  - Session
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
                summary: Retrieve Service Session
              delete:
                description: Delete a specific Session.
                tags:
                  - Delete
                  - Service
                  - Session
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
                summary: Delete Service Session
              post:
                description: Update a specific Session.
                tags:
                  - Update
                  - Service
                  - Session
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
                summary: Update Service Session
            /v1/Services/{ServiceSid}/Sessions:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve a list of all Sessions for the Service. A maximum of
                  100 records will be returned per page.
                tags:
                  - Retrieve
                  - Service
                  - Sessions
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
                summary: Retrieve Service Sessions
              post:
                description: Create a new Session
                tags:
                  - Create
                  - Service
                  - Session
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
                summary: Create Service Session
            /v1/Services/{ServiceSid}/ShortCodes:
              description: 'TODO: Resource-level docs'
              post:
                description: Add a Short Code to the Proxy Number Pool for the Service.
                tags:
                  - Create
                  - Service
                  - Short
                  - Code
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
                summary: Create Service Short Code
              get:
                description: >-
                  Retrieve a list of all Short Codes in the Proxy Number Pool
                  for the Service. A maximum of 100 records will be returned per
                  page.
                tags:
                  - Retrieve
                  - Service
                  - Short
                  - Codes
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
                summary: Retrieve Service Short Codes
            /v1/Services/{ServiceSid}/ShortCodes/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Short Code from a Service.
                tags:
                  - Delete
                  - Service
                  - Short
                  - Code
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
                summary: Delete Service Short Code
              get:
                description: Fetch a specific Short Code.
                tags:
                  - Retrieve
                  - Service
                  - Short
                  - Code
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
                summary: Retrieve Service Short Code
              post:
                description: Update a specific Short Code.
                tags:
                  - Update
                  - Service
                  - Short
                  - Code
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
                summary: Update Service Short Code
          tags:
            - name: Tag
            - name: Proxies
              description: Needs a description.
            - name: Services
              description: Needs a description.
            - name: ''
              description: Needs a description.
            - name: Sessions
              description: Needs a description.
            - name: Interactions
              description: Needs a description.
            - name: Participants
              description: Needs a description.
            - name: Phone Numbers
              description: Needs a description.
            - name: Numbers
              description: Needs a description.
            - name: Short Codes
              description: Needs a description.
          x-maturity:
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with ca
    overlays:
      - type: APIs.io Search
        url: overlays/proxy-openapi-search.yml
  - aid: twilio.com:routes
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
        url: properties/routes-openapi-original.yml
        data:
          info:
            title: Twilio Routes API
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
                  - Create
                  - Phone
                  - Number
                  - Phone
                  - Numbers
                  - Number
                summary: Create Phone Number
              get:
                description: >-
                  Fetch the Inbound Processing Region assigned to a phone
                  number.
                tags:
                  - Retrieve
                  - Phone
                  - Number
                  - Phone
                  - Numbers
                  - Number
                summary: Retrieve Phone Number
            /v2/SipDomains/{SipDomain}:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Create
                  - Domain
                  - Phone
                  - Numbers
                  - Number
                  - Sip
                  - Domains
                  - Domain
                summary: Create SIP Domain
              get:
                description: ''
                tags:
                  - Retrieve
                  - Domain
                  - Phone
                  - Numbers
                  - Number
                  - Sip
                  - Domains
                  - Domain
                summary: Retrieve SIP Domain
            /v2/Trunks/{SipTrunkDomain}:
              description: 'TODO: Resource-level docs'
              post:
                description: Assign an Inbound Processing Region to a SIP Trunk
                tags:
                  - Create
                  - Trunk
                  - Phone
                  - Numbers
                  - Number
                  - Sip
                  - Domains
                  - Domain
                  - Trunks
                  - Trunk
                summary: Create Trunk
              get:
                description: Fetch the Inbound Processing Region assigned to a SIP Trunk.
                tags:
                  - Retrieve
                  - Trunks
                  - Phone
                  - Numbers
                  - Number
                  - Sip
                  - Domains
                  - Domain
                  - Trunks
                  - Trunk
                summary: Retrieve Trunks
          tags:
            - name: Tag
            - name: Routes
              description: Needs a description.
            - name: Phone Numbers
              description: Needs a description.
            - name: Numbers
              description: Needs a description.
            - name: SIP Domains
              description: Needs a description.
            - name: SIP
              description: Needs a description.
            - name: Domains
              description: Needs a description.
            - name: Trunks
              description: Needs a description.
            - name: SIP Trunk
              description: Needs a description.
            - name: Domain
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Avai
    overlays:
      - type: APIs.io Search
        url: overlays/routes-openapi-search.yml
  - aid: twilio.com:serverless
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
        url: properties/serverless-openapi-original.yml
        data:
          info:
            title: Twilio Serverless API
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
                  - Retrieve
                  - Service
                  - Assets
                  - Services
                  - Service
                  - Sid
                  - Assets
                summary: Retrieve Service Assets
              post:
                description: Create a new Asset resource.
                tags:
                  - Create
                  - Service
                  - Asset
                  - Services
                  - Service
                  - Sid
                  - Assets
                summary: Create Service Asset
            /v1/Services/{ServiceSid}/Assets/{Sid}:
              description: >-
                A wrapper that represents a static file and groups the different
                Versions of the static file.
              get:
                description: Retrieve a specific Asset resource.
                tags:
                  - Retrieve
                  - Service
                  - Asset
                  - Services
                  - Service
                  - Sid
                  - Assets
                summary: Retrieve Service Asset
              delete:
                description: Delete an Asset resource.
                tags:
                  - Delete
                  - Service
                  - Asset
                  - Services
                  - Service
                  - Sid
                  - Assets
                summary: Delete Service Asset
              post:
                description: Update a specific Asset resource.
                tags:
                  - Update
                  - Service
                  - Asset
                  - Services
                  - Service
                  - Sid
                  - Assets
                summary: Update Service Asset
            /v1/Services/{ServiceSid}/Assets/{AssetSid}/Versions:
              description: The content of an Asset.
              get:
                description: Retrieve a list of all Asset Versions.
                tags:
                  - Retrieve
                  - Service
                  - Asset
                  - Versions
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                summary: Retrieve Service Asset Versions
            /v1/Services/{ServiceSid}/Assets/{AssetSid}/Versions/{Sid}:
              description: The content of an Asset.
              get:
                description: Retrieve a specific Asset Version.
                tags:
                  - Retrieve
                  - Service
                  - Asset
                  - Version
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                summary: Retrieve Service Asset Version
            /v1/Services/{ServiceSid}/Builds:
              description: >-
                A collection of Function Versions, Asset Versions, Dependencies,
                and a Runtime that form a deployable unit.
              get:
                description: Retrieve a list of all Builds.
                tags:
                  - Retrieve
                  - Service
                  - Builds
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                summary: Retrieve Service Builds
              post:
                description: >-
                  Create a new Build resource. At least one function version or
                  asset version is required.
                tags:
                  - Create
                  - Service
                  - Build
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                summary: Create Service Build
            /v1/Services/{ServiceSid}/Builds/{Sid}:
              description: >-
                A collection of Function Versions, Asset Versions, Dependencies,
                and a Runtime that form a deployable unit.
              get:
                description: Retrieve a specific Build resource.
                tags:
                  - Retrieve
                  - Service
                  - Build
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                summary: Retrieve Service Build
              delete:
                description: Delete a Build resource.
                tags:
                  - Delete
                  - Service
                  - Build
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                summary: Delete Service Build
            /v1/Services/{ServiceSid}/Builds/{Sid}/Status:
              description: The status of a Build resource.
              get:
                description: Retrieve a specific Build resource.
                tags:
                  - Retrieve
                  - Service
                  - Build
                  - Status
                  - Services
                  - Service
                  - Sid
                  - Assets
                  - Asset
                  - Versions
                  - Builds
                  - Status
                summary: Retrieve Service Build Status
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Deployments:
              description: >-
                An association of a Build with an Environment so that the Build
                is published in the Environment.
              get:
                description: Retrieve a list of all Deployments.
                tags:
                  - Retrieve
                  - Service
                  - Environment
                  - Deployments
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
                summary: Retrieve Service Environment Deployments
              post:
                description: Create a new Deployment.
                tags:
                  - Create
                  - Service
                  - Environment
                  - Deployment
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
                summary: Create Service Environment Deployment
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Deployments/{Sid}:
              description: >-
                An association of a Build with an Environment so that the Build
                is published in the Environment.
              get:
                description: Retrieve a specific Deployment.
                tags:
                  - Retrieve
                  - Service
                  - Environment
                  - Deployment
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
                summary: Retrieve Service Environment Deployment
            /v1/Services/{ServiceSid}/Environments:
              description: >-
                Represents a deployed build of a given set of Functions and/or
                Assets at a specific URL.
              get:
                description: Retrieve a list of all environments.
                tags:
                  - Retrieve
                  - Service
                  - Environments
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
                summary: Retrieve Service Environments
              post:
                description: Create a new environment.
                tags:
                  - Create
                  - Service
                  - Environment
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
                summary: Create Service Environment
            /v1/Services/{ServiceSid}/Environments/{Sid}:
              description: >-
                Represents a deployed build of a given set of Functions and/or
                Assets at a specific URL.
              get:
                description: Retrieve a specific environment.
                tags:
                  - Retrieve
                  - Service
                  - Environment
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
                summary: Retrieve Service Environment
              delete:
                description: Delete a specific environment.
                tags:
                  - Delete
                  - Service
                  - Environment
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
                summary: Delete Service Environment
            /v1/Services/{ServiceSid}/Functions:
              description: >-
                A wrapper that represents a Serverless JavaScript function and
                groups the different  and groups the different Versions of this
                code.
              get:
                description: Retrieve a list of all Functions.
                tags:
                  - Retrieve
                  - Service
                  - Functions
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
                summary: Retrieve Service Functions
              post:
                description: Create a new Function resource.
                tags:
                  - Create
                  - Service
                  - Functions
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
                summary: Create Service Functions
            /v1/Services/{ServiceSid}/Functions/{Sid}:
              description: >-
                A wrapper that represents a Serverless JavaScript function and
                groups the different  and groups the different Versions of this
                code.
              get:
                description: Retrieve a specific Function resource.
                tags:
                  - Retrieve
                  - Service
                  - Function
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
                summary: Retrieve Service Function
              delete:
                description: Delete a Function resource.
                tags:
                  - Delete
                  - Service
                  - Function
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
                summary: Delete Service Function
              post:
                description: Update a specific Function resource.
                tags:
                  - Update
                  - Service
                  - Function
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
                summary: Update Service Function
            /v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions:
              description: The content of a Function.
              get:
                description: Retrieve a list of all Function Version resources.
                tags:
                  - Retrieve
                  - Service
                  - Function
                  - Versions
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
                summary: Retrieve Service Function Versions
            /v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions/{Sid}:
              description: The content of a Function.
              get:
                description: Retrieve a specific Function Version resource.
                tags:
                  - Retrieve
                  - Service
                  - Function
                  - Version
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
                summary: Retrieve Service Function Version
            /v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions/{Sid}/Content:
              description: The code of a Function Version.
              get:
                description: >-
                  Retrieve a the content of a specific Function Version
                  resource.
                tags:
                  - Retrieve
                  - Service
                  - Function
                  - Version
                  - Contents
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
                summary: Retrieve Service Function Version Contents
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Logs:
              description: >-
                A record of an event that occurred related to a function
                invocation.
              get:
                description: Retrieve a list of all logs.
                tags:
                  - Retrieve
                  - Service
                  - Environment
                  - Logs
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
                summary: Retrieve Service Environment Logs
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Logs/{Sid}:
              description: >-
                A record of an event that occurred related to a function
                invocation.
              get:
                description: Retrieve a specific log.
                tags:
                  - Retrieve
                  - Service
                  - Environment
                  - Log
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
                summary: Retrieve Service Environment Log
            /v1/Services:
              description: >-
                The top-level resource for a Serverless application, which
                serves as a container for the application environments.
              get:
                description: Retrieve a list of all Services.
                tags:
                  - Retrieve
                  - Services
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
                summary: Retrieve Services
              post:
                description: Create a new Service resource.
                tags:
                  - Create
                  - Service
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
                summary: Create Service
            /v1/Services/{Sid}:
              description: >-
                The top-level resource for a Serverless application, which
                serves as a container for the application environments.
              get:
                description: Retrieve a specific Service resource.
                tags:
                  - Retrieve
                  - Service
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
                summary: Retrieve Service
              delete:
                description: Delete a Service resource.
                tags:
                  - Retrieve
                  - Service
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
                summary: Retrieve Service
              post:
                description: Update a specific Service resource.
                tags:
                  - Update
                  - Service
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
                summary: Update Service
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Variables:
              description: A key and value pair that is specific to an Environment.
              get:
                description: Retrieve a list of all Variables.
                tags:
                  - Retrieve
                  - Service
                  - Environment
                  - Variables
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
                summary: Retrieve Service Environment Variables
              post:
                description: Create a new Variable.
                tags:
                  - Create
                  - Service
                  - Environment
                  - Variable
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
                summary: Create Service Environment Variable
            /v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Variables/{Sid}:
              description: A key and value pair that is specific to an Environment.
              get:
                description: Retrieve a specific Variable.
                tags:
                  - Retrieve
                  - Service
                  - Environment
                  - Variable
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
                summary: Retrieve Service Environment Variable
              post:
                description: Update a specific Variable.
                tags:
                  - Update
                  - Service
                  - Environment
                  - Variable
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
                summary: Update Service Environment Variable
              delete:
                description: Delete a specific Variable.
                tags:
                  - Delete
                  - Service
                  - Environment
                  - Variable
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
                summary: Delete Service Environment Variable
          tags:
            - name: Tag
            - name: Serverless
              description: Needs a description.
            - name: Services
              description: Needs a description.
            - name: Assets
              description: Needs a description.
            - name: Versions
              description: Needs a description.
            - name: Builds
              description: Needs a description.
            - name: Status
              description: Needs a description.
            - name: Environments
              description: Needs a description.
            - name: Deployments
              description: Needs a description.
            - name: Functions
              description: Needs a description.
            - name: Contents
              description: Needs a description.
            - name: Logs
              description: Needs a description.
            - name: Variables
              description: Needs a description.
          x-maturity:
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with ca
    overlays:
      - type: APIs.io Search
        url: overlays/serverless-openapi-search.yml
  - aid: twilio.com:studio
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
        url: properties/studio-openapi-original.yml
        data:
          info:
            title: Twilio Studio API
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
                  - Retrieve
                  - Flow
                  - Executions
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                summary: Retrieve Flow Executions
              post:
                description: Triggers a new Execution for the Flow
                tags:
                  - Create
                  - Flow
                  - Execution
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                summary: Create Flow Execution
            /v2/Flows/{FlowSid}/Executions/{Sid}:
              description: Executions of Studio flows
              get:
                description: Retrieve an Execution
                tags:
                  - Retrieve
                  - Flow
                  - Execution
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                summary: Retrieve Flow Execution
              delete:
                description: Delete the Execution and all Steps relating to it.
                tags:
                  - Delete
                  - Flow
                  - Execution
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                summary: Delete Flow Execution
              post:
                description: Update the status of an Execution to `ended`.
                tags:
                  - Update
                  - Flow
                  - Execution
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                summary: Update Flow Execution
            /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Context:
              description: JSON context for executions
              get:
                description: Retrieve the most recent context for an Execution.
                tags:
                  - Retrieve
                  - Flow
                  - Execution
                  - Context
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                summary: Retrieve Flow Execution Context
            /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps:
              description: Individual steps within an execution
              get:
                description: Retrieve a list of all Steps for an Execution.
                tags:
                  - Retrieve
                  - Flow
                  - Execution
                  - Steps
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                summary: Retrieve Flow Execution Steps
            /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}:
              description: Individual steps within an execution
              get:
                description: Retrieve a Step.
                tags:
                  - Retrieve
                  - Flow
                  - Execution
                  - Step
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                summary: Retrieve Flow Execution Step
            /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context:
              description: JSON context for an individual step within an execution
              get:
                description: Retrieve the context for an Execution Step.
                tags:
                  - Retrieve
                  - Flow
                  - Execution
                  - Step
                  - Context
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
                summary: Retrieve Flow Execution Step Context
            /v2/Flows:
              description: Studio flows
              post:
                description: Create a Flow.
                tags:
                  - Create
                  - Flow
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
                summary: Create Flow
              get:
                description: Retrieve a list of all Flows.
                tags:
                  - Retrieve
                  - Flows
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
                summary: Retrieve Flows
            /v2/Flows/{Sid}:
              description: Studio flows
              post:
                description: Update a Flow.
                tags:
                  - Update
                  - Flow
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
                summary: Update Flow
              get:
                description: Retrieve a specific Flow.
                tags:
                  - Retrieve
                  - Flow
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
                summary: Retrieve Flow
              delete:
                description: Delete a specific Flow.
                tags:
                  - Delete
                  - Flow
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
                summary: Delete Flow
            /v2/Flows/{Sid}/Revisions:
              description: Studio flows revisions
              get:
                description: Retrieve a list of all Flows revisions.
                tags:
                  - Retrieve
                  - Flow
                  - Revisions
                  - Flows
                  - Flow
                  - Sid
                  - Executions
                  - Execution
                  - Context
                  - Steps
                  - Step
                  - Revisions
                summary: Retrieve Flow Revisions
            /v2/Flows/{Sid}/Revisions/{Revision}:
              description: Studio flows revisions
              get:
                description: Retrieve a specific Flow revision.
                tags:
                  - Retrieve
                  - Flow
                  - Revision
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
                summary: Retrieve Flow Revision
            /v2/Flows/Validate:
              description: Flow definition validator
              post:
                description: Validate flow JSON definition
                tags:
                  - Retrieve
                  - Flow
                  - Validate
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
                summary: Retrieve Flow Validate
            /v2/Flows/{Sid}/TestUsers:
              description: Test users of a flow
              get:
                description: Fetch flow test users
                tags:
                  - Retrieve
                  - Flow
                  - Test
                  - Users
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
                summary: Retrieve Flow Test Users
              post:
                description: Update flow test users
                tags:
                  - Update
                  - Flow
                  - Test
                  - Users
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
                summary: Update Flow Test Users
          tags:
            - name: Tag
            - name: Studio
              description: Needs a description.
            - name: Flows
              description: Needs a description.
            - name: Executions
              description: Needs a description.
            - name: Context
              description: Needs a description.
            - name: Steps
              description: Needs a description.
            - name: Revisions
              description: Needs a description.
            - name: Validate
              description: Needs a description.
            - name: Tests
              description: Needs a description.
            - name: Users
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Avai
    overlays:
      - type: APIs.io Search
        url: overlays/studio-openapi-search.yml
  - aid: twilio.com:super-sim
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
        url: properties/super-sim-openapi-original.yml
        data:
          info:
            title: Twilio Super SIM API
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
                  - Retrieve
                  - Billing
                  - Periods
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                summary: Retrieve SIM Billing Periods
            /v1/ESimProfiles:
              description: eSIM Profiles that can be loaded onto consumer eUICC SIMs
              post:
                description: Order an eSIM Profile.
                tags:
                  - Create
                  - Profile
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                summary: Create ESIM Profile
              get:
                description: Retrieve a list of eSIM Profiles.
                tags:
                  - Retrieve
                  - Profiles
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                summary: Retrieve ESIM Profiles
            /v1/ESimProfiles/{Sid}:
              description: eSIM Profiles that can be loaded onto consumer eUICC SIMs
              get:
                description: Fetch an eSIM Profile.
                tags:
                  - Retrieve
                  - Profile
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                summary: Retrieve ESIM Profile
            /v1/Fleets:
              description: >-
                Configure shared settings inherited by all Super SIMs assigned
                to the Fleet
              post:
                description: Create a Fleet
                tags:
                  - Create
                  - Fleets
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                summary: Create Fleets
              get:
                description: Retrieve a list of Fleets from your account.
                tags:
                  - Retrieve
                  - Fleets
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                summary: Retrieve Fleets
            /v1/Fleets/{Sid}:
              description: >-
                Configure shared settings inherited by all Super SIMs assigned
                to the Fleet
              get:
                description: Fetch a Fleet instance from your account.
                tags:
                  - Retrieve
                  - Fleet
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                summary: Retrieve Fleet
              post:
                description: >-
                  Updates the given properties of a Super SIM Fleet instance
                  from your account.
                tags:
                  - Update
                  - Fleet
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                summary: Update Fleet
            /v1/IpCommands:
              description: Machine-to-machine IP Commands sent to/from Super SIMs
              post:
                description: Send an IP Command to a Super SIM.
                tags:
                  - Create
                  - Command
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                summary: Create IP Command
              get:
                description: Retrieve a list of IP Commands from your account.
                tags:
                  - Retrieve
                  - Commands
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                summary: Retrieve IP Commands
            /v1/IpCommands/{Sid}:
              description: Machine-to-machine IP Commands sent to/from Super SIMs
              get:
                description: Fetch IP Command instance from your account.
                tags:
                  - Retrieve
                  - Command
                  - Sims
                  - Sim
                  - Sid
                  - Billing
                  - Periods
                  - Profiles
                  - Fleets
                  - Ip
                  - Commands
                summary: Retrieve IP Command
            /v1/Networks/{Sid}:
              description: Mobile operator networks to which Super SIMs can connect
              get:
                description: Fetch a Network resource.
                tags:
                  - Retrieve
                  - Network
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
                summary: Retrieve Network
            /v1/Networks:
              description: Mobile operator networks to which Super SIMs can connect
              get:
                description: Retrieve a list of Network resources.
                tags:
                  - Retrieve
                  - Networks
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
                summary: Retrieve Networks
            /v1/NetworkAccessProfiles:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Network Access Profile
                tags:
                  - Create
                  - Network
                  - Access
                  - Profile
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
                summary: Create Network Access Profile
              get:
                description: Retrieve a list of Network Access Profiles from your account.
                tags:
                  - Retrieve
                  - Network
                  - Access
                  - Profiles
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
                summary: Retrieve Network Access Profiles
            /v1/NetworkAccessProfiles/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a Network Access Profile instance from your account.
                tags:
                  - Retrieve
                  - Network
                  - Access
                  - Profiles
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
                summary: Retrieve Network Access Profiles
              post:
                description: >-
                  Updates the given properties of a Network Access Profile in
                  your account.
                tags:
                  - Create
                  - Network
                  - Access
                  - Profile
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
                summary: Create Network Access Profile
            /v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks:
              description: >-
                Mobile operator networks which Network Access Profiles allow
                access to
              get:
                description: >-
                  Retrieve a list of Network Access Profile resource's Network
                  resource.
                tags:
                  - Retrieve
                  - Network
                  - Access
                  - Profile
                  - Networks
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
                summary: Retrieve Network Access Profile Networks
              post:
                description: Add a Network resource to the Network Access Profile resource.
                tags:
                  - Create
                  - Network
                  - Access
                  - Profile
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
                summary: Create Network Access Profile Network
            /v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks/{Sid}:
              description: >-
                Mobile operator networks which Network Access Profiles allow
                access to
              delete:
                description: >-
                  Remove a Network resource from the Network Access Profile
                  resource's.
                tags:
                  - Delete
                  - Network
                  - Access
                  - Profile
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
                summary: Delete Network Access Profile Network
              get:
                description: Fetch a Network Access Profile resource's Network resource.
                tags:
                  - Retrieve
                  - Network
                  - Access
                  - Profile
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
                summary: Retrieve Network Access Profile Network
            /v1/SettingsUpdates:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of Settings Updates.
                tags:
                  - Retrieve
                  - Settings
                  - Update
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
                summary: Retrieve Settings Update
            /v1/Sims:
              description: Individual IoT Super SIMs
              post:
                description: Register a Super SIM to your Account
                tags:
                  - Create
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
                summary: Create SIM
              get:
                description: Retrieve a list of Super SIMs from your account.
                tags:
                  - Retrieve
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
                summary: Retrieve SIM
            /v1/Sims/{Sid}:
              description: Individual IoT Super SIMs
              get:
                description: Fetch a Super SIM instance from your account.
                tags:
                  - Retrieve
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
                summary: Retrieve SIM
              post:
                description: >-
                  Updates the given properties of a Super SIM instance from your
                  account.
                tags:
                  - Update
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
                summary: Update SIM
            /v1/Sims/{SimSid}/IpAddresses:
              description: IP Addresses for a Super SIM configured to use a VPN connection
              get:
                description: Retrieve a list of IP Addresses for the given Super SIM.
                tags:
                  - Retrieve
                  - Ddress
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
                summary: Retrieve SIM IP ADdress
            /v1/SmsCommands:
              description: Machine-to-machine SMS Commands sent to/from SIMs
              post:
                description: Send SMS Command to a Sim.
                tags:
                  - Create
                  - Command
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
                summary: Create SMS Command
              get:
                description: Retrieve a list of SMS Commands from your account.
                tags:
                  - Retrieve
                  - Commands
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
                summary: Retrieve SMS Commands
            /v1/SmsCommands/{Sid}:
              description: Machine-to-machine SMS Commands sent to/from SIMs
              get:
                description: Fetch SMS Command instance from your account.
                tags:
                  - Retrieve
                  - Command
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
                summary: Retrieve SMS Command
            /v1/UsageRecords:
              description: Usage information for Sim resources
              get:
                description: List UsageRecords
                tags:
                  - Retrieve
                  - Usage
                  - Records
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
                summary: Retrieve Usage Records
          tags:
            - name: Tag
            - name: SIM
              description: Needs a description.
            - name: Billing
              description: Needs a description.
            - name: Periods
              description: Needs a description.
            - name: ESIM
              description: Needs a description.
            - name: Profiles
              description: Needs a description.
            - name: Fleets
              description: Needs a description.
            - name: IP Commands
              description: Needs a description.
            - name: Network
              description: Needs a description.
            - name: Networks
              description: Needs a description.
            - name: Access
              description: Needs a description.
            - name: Settings
              description: Needs a description.
            - name: Update
              description: Needs a description.
            - name: IP Addresses
              description: Needs a description.
            - name: SMS
              description: Needs a description.
            - name: Commands
              description: Needs a description.
            - name: Usage
              description: Needs a description.
            - name: Records
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Available.
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with ca
    overlays:
      - type: APIs.io Search
        url: overlays/super-sim-openapi-search.yml
  - aid: twilio.com:sync
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
        url: properties/sync-openapi-original.yml
        data:
          info:
            title: Twilio Sync API
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
                  - Retrieve
                  - Service
                  - Document
                  - Services
                  - Service
                  - Sid
                  - Documents
                summary: Retrieve Service Document
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Document
                  - Services
                  - Service
                  - Sid
                  - Documents
                summary: Delete Service Document
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - Document
                  - Services
                  - Service
                  - Sid
                  - Documents
                summary: Update Service Document
            /v1/Services/{ServiceSid}/Documents:
              description: Sync Document objects
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Document
                  - Services
                  - Service
                  - Sid
                  - Documents
                summary: Create Service Document
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Documents
                  - Services
                  - Service
                  - Sid
                  - Documents
                summary: Retrieve Service Documents
            /v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}:
              description: Sync document permissions
              get:
                description: Fetch a specific Sync Document Permission.
                tags:
                  - Retrieve
                  - Service
                  - Document
                  - Permission
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                summary: Retrieve Service Document Permission
              delete:
                description: Delete a specific Sync Document Permission.
                tags:
                  - Delete
                  - Service
                  - Document
                  - Permission
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                summary: Delete Service Document Permission
              post:
                description: Update an identity's access to a specific Sync Document.
                tags:
                  - Update
                  - Service
                  - Document
                  - Permission
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                summary: Update Service Document Permission
            /v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions:
              description: Sync document permissions
              get:
                description: >-
                  Retrieve a list of all Permissions applying to a Sync
                  Document.
                tags:
                  - Retrieve
                  - Service
                  - Document
                  - Permissions
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                summary: Retrieve Service Document Permissions
            /v1/Services/{Sid}:
              description: Containers for sync objects
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                summary: Retrieve Service
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                summary: Delete Service
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                summary: Update Service
            /v1/Services:
              description: Containers for sync objects
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                summary: Create Service
              get:
                description: ''
                tags:
                  - Retrieve
                  - Services
                  - Services
                  - Service
                  - Sid
                  - Documents
                  - Document
                  - Permissions
                  - Identity
                summary: Retrieve Services
            /v1/Services/{ServiceSid}/Streams/{StreamSid}/Messages:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Stream Message.
                tags:
                  - Create
                  - Service
                  - Stream
                  - Message
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
                summary: Create Service Stream Message
            /v1/Services/{ServiceSid}/Lists/{Sid}:
              description: Sync list objects
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - List
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
                summary: Retrieve Service List
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - List
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
                summary: Delete Service List
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - List
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
                summary: Update Service List
            /v1/Services/{ServiceSid}/Lists:
              description: Sync list objects
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - List
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
                summary: Create Service List
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Lists
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
                summary: Retrieve Service Lists
            /v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}:
              description: Items in a sync list
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - List
                  - Item
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
                summary: Retrieve Service List Item
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - List
                  - Item
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
                summary: Delete Service List Item
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - List
                  - Item
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
                summary: Update Service List Item
            /v1/Services/{ServiceSid}/Lists/{ListSid}/Items:
              description: Items in a sync list
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - List
                  - Item
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
                summary: Create Service List Item
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - List
                  - Item
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
                summary: Retrieve Service List Item
            /v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}:
              description: Permissions for Sync list items
              get:
                description: Fetch a specific Sync List Permission.
                tags:
                  - Retrieve
                  - Service
                  - List
                  - Permission
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
                summary: Retrieve Service List Permission
              delete:
                description: Delete a specific Sync List Permission.
                tags:
                  - Delete
                  - Service
                  - List
                  - Permission
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
                summary: Delete Service List Permission
              post:
                description: Update an identity's access to a specific Sync List.
                tags:
                  - Update
                  - Service
                  - List
                  - Permission
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
                summary: Update Service List Permission
            /v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions:
              description: Permissions for Sync list items
              get:
                description: Retrieve a list of all Permissions applying to a Sync List.
                tags:
                  - Retrieve
                  - Service
                  - List
                  - Permissions
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
                summary: Retrieve Service List Permissions
            /v1/Services/{ServiceSid}/Maps/{Sid}:
              description: Sync map objects
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Map
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
                summary: Retrieve Service Map
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Map
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
                summary: Delete Service Map
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - Map
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
                summary: Update Service Map
            /v1/Services/{ServiceSid}/Maps:
              description: Sync map objects
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Map
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
                summary: Create Service Map
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Map
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
                summary: Retrieve Service Map
            /v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}:
              description: Keys in a sync map
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Map
                  - Item
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
                summary: Retrieve Service Map Item
              delete:
                description: ''
                tags:
                  - Delete
                  - Service
                  - Map
                  - Item
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
                summary: Delete Service Map Item
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - Map
                  - Item
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
                summary: Update Service Map Item
            /v1/Services/{ServiceSid}/Maps/{MapSid}/Items:
              description: Keys in a sync map
              post:
                description: ''
                tags:
                  - Create
                  - Service
                  - Map
                  - Item
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
                summary: Create Service Map Item
              get:
                description: ''
                tags:
                  - Retrieve
                  - Service
                  - Map
                  - Item
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
                summary: Retrieve Service Map Item
            /v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Sync Map Permission.
                tags:
                  - Retrieve
                  - Service
                  - Map
                  - Permission
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
                summary: Retrieve Service Map Permission
              delete:
                description: Delete a specific Sync Map Permission.
                tags:
                  - Delete
                  - Service
                  - Map
                  - Permission
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
                summary: Delete Service Map Permission
              post:
                description: Update an identity's access to a specific Sync Map.
                tags:
                  - Update
                  - Service
                  - Map
                  - Permission
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
                summary: Update Service Map Permission
            /v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Permissions applying to a Sync Map.
                tags:
                  - Retrieve
                  - Service
                  - Map
                  - Permissions
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
                summary: Retrieve Service Map Permissions
            /v1/Services/{ServiceSid}/Streams/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Stream.
                tags:
                  - Retrieve
                  - Service
                  - Stream
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
                summary: Retrieve Service Stream
              delete:
                description: Delete a specific Stream.
                tags:
                  - Delete
                  - Service
                  - Stream
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
                summary: Delete Service Stream
              post:
                description: Update a specific Stream.
                tags:
                  - Update
                  - Service
                  - Stream
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
                summary: Update Service Stream
            /v1/Services/{ServiceSid}/Streams:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Stream.
                tags:
                  - Create
                  - Service
                  - Stream
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
                summary: Create Service Stream
              get:
                description: Retrieve a list of all Streams in a Service Instance.
                tags:
                  - Retrieve
                  - Service
                  - Streams
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
                summary: Retrieve Service Streams
          tags:
            - name: Tag
            - name: Sync
              description: Needs a description.
            - name: Services
              description: Needs a description.
            - name: Documents
              description: Needs a description.
            - name: Permissions
              description: Needs a description.
            - name: Streams
              description: Needs a description.
            - name: Messages
              description: Needs a description.
            - name: Lists
              description: Needs a description.
            - name: Items
              description: Needs a description.
            - name: Maps
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Avai
    overlays:
      - type: APIs.io Search
        url: overlays/sync-openapi-search.yml
  - aid: twilio.com:task-router
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
        url: properties/task-router-openapi-original.yml
        data:
          info:
            title: Twilio Task Router API
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
                  - Retrieve
                  - Workspace
                  - Activity
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                summary: Retrieve Workspace Activity
              post:
                description: ''
                tags:
                  - Update
                  - Workspace
                  - Activity
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                summary: Update Workspace Activity
              delete:
                description: ''
                tags:
                  - Delete
                  - Workspace
                  - Activity
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                summary: Delete Workspace Activity
            /v1/Workspaces/{WorkspaceSid}/Activities:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Activities
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                summary: Retrieve Workspace Activities
              post:
                description: ''
                tags:
                  - Create
                  - Workspace
                  - Activity
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                summary: Create Workspace Activity
            /v1/Workspaces/{WorkspaceSid}/Events/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Event
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                summary: Retrieve Workspace Event
            /v1/Workspaces/{WorkspaceSid}/Events:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Events
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                summary: Retrieve Workspace Events
            /v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Task
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                summary: Retrieve Workspace Task
              post:
                description: ''
                tags:
                  - Update
                  - Workspace
                  - Task
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                summary: Update Workspace Task
              delete:
                description: ''
                tags:
                  - Delete
                  - Workspace
                  - Task
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                summary: Delete Workspace Task
            /v1/Workspaces/{WorkspaceSid}/Tasks:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Tasks
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                summary: Retrieve Workspace Tasks
              post:
                description: ''
                tags:
                  - Create
                  - Workspace
                  - Task
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                summary: Create Workspace Task
            /v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}:
              description: Types of tasks
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Task
                  - Channel
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                summary: Retrieve Workspace Task Channel
              post:
                description: ''
                tags:
                  - Update
                  - Workspace
                  - Task
                  - Channel
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                summary: Update Workspace Task Channel
              delete:
                description: ''
                tags:
                  - Delete
                  - Workspace
                  - Task
                  - Channel
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                summary: Delete Workspace Task Channel
            /v1/Workspaces/{WorkspaceSid}/TaskChannels:
              description: Types of tasks
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Task
                  - Channels
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                summary: Retrieve Workspace Task Channels
              post:
                description: ''
                tags:
                  - Create
                  - Workspace
                  - Task
                  - Channel
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                summary: Create Workspace Task Channel
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Task
                  - Queue
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                summary: Retrieve Workspace Task Queue
              post:
                description: ''
                tags:
                  - Update
                  - Workspace
                  - Task
                  - Queue
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                summary: Update Workspace Task Queue
              delete:
                description: ''
                tags:
                  - Delete
                  - Workspace
                  - Task
                  - Queue
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                summary: Delete Workspace Task Queue
            /v1/Workspaces/{WorkspaceSid}/TaskQueues:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Task
                  - Queues
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                summary: Retrieve Workspace Task Queues
              post:
                description: ''
                tags:
                  - Create
                  - Workspace
                  - Task
                  - Queue
                  - Workspaces
                  - Workspace
                  - Sid
                  - Activities
                  - Events
                  - Tasks
                  - Task
                  - Channels
                  - Queues
                summary: Create Workspace Task Queue
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/CumulativeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Task
                  - Queue
                  - Cumulative
                  - Statistics
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
                summary: Retrieve Workspace Task Queue Cumulative Statistics
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Task
                  - Queue
                  - Real-
                  - Time
                  - Statistics
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
                summary: Retrieve Workspace Task Queue Real-Time Statistics
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Task
                  - Queue
                  - Statistics
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
                summary: Retrieve Workspace Task Queue Statistics
            /v1/Workspaces/{WorkspaceSid}/TaskQueues/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Task
                  - Queues
                  - Statistics
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
                summary: Retrieve Workspace Task Queues Statistics
            /v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations:
              description: Tasks reserved for workers
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Task
                  - Reservations
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
                summary: Retrieve Workspace Task Reservations
            /v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}:
              description: Tasks reserved for workers
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Task
                  - Reservation
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
                summary: Retrieve Workspace Task Reservation
              post:
                description: ''
                tags:
                  - Create
                  - Workspace
                  - Task
                  - Reservation
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
                summary: Create Workspace Task Reservation
            /v1/Workspaces/{WorkspaceSid}/Workers:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Workers
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
                summary: Retrieve Workspace Workers
              post:
                description: ''
                tags:
                  - Create
                  - Workspace
                  - Worker
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
                summary: Create Workspace Worker
            /v1/Workspaces/{WorkspaceSid}/Workers/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Worker
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
                summary: Retrieve Workspace Worker
              post:
                description: ''
                tags:
                  - Update
                  - Workspace
                  - Worker
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
                summary: Update Workspace Worker
              delete:
                description: ''
                tags:
                  - Delete
                  - Workspace
                  - Worker
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
                summary: Delete Workspace Worker
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Worker
                  - Channels
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
                summary: Retrieve Workspace Worker Channels
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Worker
                  - Channel
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
                summary: Retrieve Workspace Worker Channel
              post:
                description: ''
                tags:
                  - Update
                  - Workspace
                  - Worker
                  - Channel
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
                summary: Update Workspace Worker Channel
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Worker
                  - Statistics
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
                summary: Retrieve Workspace Worker Statistics
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations:
              description: Current and past reservations for a worker
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Worker
                  - Reservations
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
                summary: Retrieve Workspace Worker Reservations
            /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}:
              description: Current and past reservations for a worker
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Worker
                  - Reservation
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
                summary: Retrieve Workspace Worker Reservation
              post:
                description: ''
                tags:
                  - Update
                  - Workspace
                  - Worker
                  - Reservations
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
                summary: Update Workspace Worker Reservations
            /v1/Workspaces/{WorkspaceSid}/Workers/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Worker
                  - Statistics
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
                summary: Retrieve Workspace Worker Statistics
            /v1/Workspaces/{WorkspaceSid}/Workers/CumulativeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Worker
                  - Cumulative
                  - Statistics
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
                summary: Retrieve Workspace Worker Cumulative Statistics
            /v1/Workspaces/{WorkspaceSid}/Workers/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Worker
                  - Real-
                  - Time
                  - Statistics
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
                summary: Retrieve Workspace Worker Real-Time Statistics
            /v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Workflow
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
                summary: Retrieve Workspace Workflow
              post:
                description: ''
                tags:
                  - Update
                  - Workspace
                  - Workflow
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
                summary: Update Workspace Workflow
              delete:
                description: ''
                tags:
                  - Delete
                  - Workspace
                  - Workflow
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
                summary: Delete Workspace Workflow
            /v1/Workspaces/{WorkspaceSid}/Workflows:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Workflows
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
                summary: Retrieve Workspace Workflows
              post:
                description: ''
                tags:
                  - Create
                  - Workspace
                  - Workflow
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
                summary: Create Workspace Workflow
            /v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/CumulativeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Workflow
                  - Cumulative
                  - Statistics
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
                summary: Retrieve Workspace Workflow Cumulative Statistics
            /v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Workflow
                  - Real-
                  - Time
                  - Statistics
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
                summary: Retrieve Workspace Workflow Real-Time Statistics
            /v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Workflow
                  - Statistics
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
                summary: Retrieve Workspace Workflow Statistics
            /v1/Workspaces/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
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
                summary: Retrieve Workspace
              post:
                description: ''
                tags:
                  - Update
                  - Workspace
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
                summary: Update Workspace
              delete:
                description: ''
                tags:
                  - Delete
                  - Workspace
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
                summary: Delete Workspace
            /v1/Workspaces:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspaces
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
                summary: Retrieve Workspaces
              post:
                description: ''
                tags:
                  - Create
                  - Workspace
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
                summary: Create Workspace
            /v1/Workspaces/{WorkspaceSid}/CumulativeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Cumulative
                  - Statistics
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
                summary: Retrieve Workspace Cumulative Statistics
            /v1/Workspaces/{WorkspaceSid}/RealTimeStatistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Real-
                  - Time
                  - Statistics
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
                summary: Retrieve Workspace Real-Time Statistics
            /v1/Workspaces/{WorkspaceSid}/Statistics:
              description: 'TODO: Resource-level docs'
              get:
                description: ''
                tags:
                  - Retrieve
                  - Workspace
                  - Statistics
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
                summary: Retrieve Workspace Statistics
          tags:
            - name: Tag
            - name: Task Routers
              description: Needs a description.
            - name: Workspaces
              description: Needs a description.
            - name: Activities
              description: Needs a description.
            - name: Events
              description: Needs a description.
            - name: Tasks
              description: Needs a description.
            - name: Channels
              description: Needs a description.
            - name: Queues
              description: Needs a description.
            - name: Cumulative
              description: Needs a description.
            - name: Statistics
              description: Needs a description.
            - name: Real-Time
              description: Needs a description.
            - name: Reservations
              description: Needs a description.
            - name: Workers
              description: Needs a description.
            - name: Workflow
              description: Needs a description.
            - name: Workflows
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Avai
    overlays:
      - type: APIs.io Search
        url: overlays/task-router-openapi-search.yml
  - aid: twilio.com:trunking
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
        url: properties/trunking-openapi-original.yml
        data:
          info:
            title: Twilio Trunking API
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
                  - Retrieve
                  - Trunk
                  - Credential
                  - List
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                summary: Retrieve Trunk Credential List
              delete:
                description: ''
                tags:
                  - Delete
                  - Trunk
                  - Credential
                  - List
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                summary: Delete Trunk Credential List
            /v1/Trunks/{TrunkSid}/CredentialLists:
              description: List of credentials for accessing a trunk
              post:
                description: ''
                tags:
                  - Retrieve
                  - Trunk
                  - Credential
                  - Lists
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                summary: Retrieve Trunk Credential Lists
              get:
                description: ''
                tags:
                  - Retrieve
                  - Trunk
                  - Credential
                  - List
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                summary: Retrieve Trunk Credential List
            /v1/Trunks/{TrunkSid}/IpAccessControlLists/{Sid}:
              description: List of IP addresses for accessing a trunk
              get:
                description: ''
                tags:
                  - Retrieve
                  - Trunk
                  - Access
                  - Control
                  - List
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                summary: Retrieve Trunk IP Access Control List
              delete:
                description: Remove an associated IP Access Control List from a Trunk
                tags:
                  - Delete
                  - Trunk
                  - Access
                  - Control
                  - List
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                summary: Delete Trunk IP Access Control List
            /v1/Trunks/{TrunkSid}/IpAccessControlLists:
              description: List of IP addresses for accessing a trunk
              post:
                description: Associate an IP Access Control List with a Trunk
                tags:
                  - Create
                  - Trunk
                  - Access
                  - Control
                  - List
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                summary: Create Trunk IP Access Control List
              get:
                description: List all IP Access Control Lists for a Trunk
                tags:
                  - Retrieve
                  - Trunk
                  - Access
                  - Control
                  - List
                  - Trunks
                  - Trunk
                  - Sid
                  - Credential
                  - Lists
                  - Ip
                  - Access
                  - Control
                summary: Retrieve Trunk IP Access Control List
            /v1/Trunks/{TrunkSid}/OriginationUrls/{Sid}:
              description: >-
                Network element entry points into your communications
                infrastructure
              get:
                description: ''
                tags:
                  - Retrieve
                  - Trunk
                  - Origination
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
                summary: Retrieve Trunk Origination URL
              delete:
                description: ''
                tags:
                  - Delete
                  - Trunk
                  - Origination
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
                summary: Delete Trunk Origination URL
              post:
                description: ''
                tags:
                  - Update
                  - Trunk
                  - Origination
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
                summary: Update Trunk Origination URL
            /v1/Trunks/{TrunkSid}/OriginationUrls:
              description: >-
                Network element entry points into your communications
                infrastructure
              post:
                description: ''
                tags:
                  - Create
                  - Trunk
                  - Origination
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
                summary: Create Trunk Origination URL
              get:
                description: ''
                tags:
                  - Retrieve
                  - Trunk
                  - Origination
                  - Ls
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
                summary: Retrieve Trunk Origination URLs
            /v1/Trunks/{TrunkSid}/PhoneNumbers/{Sid}:
              description: Phone numbers associated with trunks
              get:
                description: ''
                tags:
                  - Retrieve
                  - Trunk
                  - Phone
                  - Number
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
                summary: Retrieve Trunk Phone Number
              delete:
                description: ''
                tags:
                  - Delete
                  - Trunk
                  - Phone
                  - Number
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
                summary: Delete Trunk Phone Number
            /v1/Trunks/{TrunkSid}/PhoneNumbers:
              description: Phone numbers associated with trunks
              post:
                description: ''
                tags:
                  - Create
                  - Trunk
                  - Phone
                  - Number
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
                summary: Create Trunk Phone Number
              get:
                description: ''
                tags:
                  - Retrieve
                  - Trunk
                  - Phone
                  - Numbers
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
                summary: Retrieve Trunk Phone Numbers
            /v1/Trunks/{TrunkSid}/Recording:
              description: Recording settings for a trunk
              get:
                description: ''
                tags:
                  - Retrieve
                  - Trunk
                  - Recording
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
                summary: Retrieve Trunk Recording
              post:
                description: ''
                tags:
                  - Create
                  - Trunk
                  - Recording
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
                summary: Create Trunk Recording
            /v1/Trunks/{Sid}:
              description: Represents a SIP trunk
              get:
                description: ''
                tags:
                  - Retrieve
                  - Trunk
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
                summary: Retrieve Trunk
              delete:
                description: ''
                tags:
                  - Delete
                  - Trunk
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
                summary: Delete Trunk
              post:
                description: ''
                tags:
                  - Update
                  - Trunk
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
                summary: Update Trunk
            /v1/Trunks:
              description: Represents a SIP trunk
              post:
                description: ''
                tags:
                  - Create
                  - Trunk
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
                summary: Create Trunk
              get:
                description: ''
                tags:
                  - Retrieve
                  - Trunks
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
                summary: Retrieve Trunks
          tags:
            - name: Tag
            - name: Trunking
              description: Needs a description.
            - name: Trunks
              description: Needs a description.
            - name: Credentials
              description: Needs a description.
            - name: Lists
              description: Needs a description.
            - name: IP Addresses
              description: Needs a description.
            - name: Access Control
              description: Needs a description.
            - name: Origination
              description: Needs a description.
            - name: URL
              description: Needs a description.
            - name: Phone Number
              description: Needs a description.
            - name: Numbers
              description: Needs a description.
            - name: Recording
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Avai
    overlays:
      - type: APIs.io Search
        url: overlays/trunking-openapi-search.yml
  - aid: twilio.com:trust-hub
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
        url: properties/trust-hub-openapi-original.yml
        data:
          info:
            title: Twilio Trust Hub API
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
                  - Create
                  - Compliance
                  - Inquiry
                  - Customers
                  - Initialize
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                summary: Create Compliance Inquiry Customers Initialize
            /v1/ComplianceInquiries/Customers/{CustomerId}/Initialize:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Resume a specific Compliance Inquiry that has expired, or
                  re-open a rejected Compliance Inquiry for editing.
                tags:
                  - Create
                  - Compliance
                  - Inquiry
                  - Customer
                  - Initialize
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                summary: Create Compliance Inquiry Customer Initialize
            /v1/ComplianceInquiries/Tollfree/Initialize:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Create a new Compliance Tollfree Verification Inquiry for the
                  authenticated account. This is necessary to start a new
                  embedded session.
                tags:
                  - Create
                  - Compliance
                  - Inquiry
                  - Toll
                  - Free
                  - Initialize
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                summary: Create Compliance Inquiry Toll Free Initialize
            /v1/CustomerProfiles:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Customer-Profile.
                tags:
                  - Create
                  - Customer
                  - Profile
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                summary: Create Customer Profile
              get:
                description: Retrieve a list of all Customer-Profiles for an account.
                tags:
                  - Retrieve
                  - Customer
                  - Profiles
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                summary: Retrieve Customer Profiles
            /v1/CustomerProfiles/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Customer-Profile instance.
                tags:
                  - Retrieve
                  - Customer
                  - Profile
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                summary: Retrieve Customer Profile
              post:
                description: Updates a Customer-Profile in an account.
                tags:
                  - Update
                  - Customer
                  - Profile
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                summary: Update Customer Profile
              delete:
                description: Delete a specific Customer-Profile.
                tags:
                  - Delete
                  - Customer
                  - Profile
                  - Compliance
                  - Inquiries
                  - Customers
                  - Initialize
                  - Customer
                  - Id
                  - Tollfree
                  - Profiles
                  - Sid
                summary: Delete Customer Profile
            /v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - Create
                  - Customer
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignment
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
                summary: Create Customer Profile Channel Endpoint Assignment
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - Retrieve
                  - Customer
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignments
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
                summary: Retrieve Customer Profile Channel Endpoint Assignments
            /v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - Retrieve
                  - Customer
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignment
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
                summary: Retrieve Customer Profile Channel Endpoint Assignment
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - Delete
                  - Customer
                  - Profile
                  - Channel
                  - Endpoint
                  - Assignment
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
                summary: Delete Customer Profile Channel Endpoint Assignment
            /v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - Create
                  - Customer
                  - Profile
                  - Entity
                  - Assignment
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
                summary: Create Customer Profile Entity Assignment
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - Retrieve
                  - Customer
                  - Profile
                  - Entity
                  - Assignments
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
                summary: Retrieve Customer Profile Entity Assignments
            /v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - Retrieve
                  - Customer
                  - Profile
                  - Entity
                  - Assignment
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
                summary: Retrieve Customer Profile Entity Assignment
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - Delete
                  - Customer
                  - Profile
                  - Entity
                  - Assignment
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
                summary: Delete Customer Profile Entity Assignment
            /v1/CustomerProfiles/{CustomerProfileSid}/Evaluations:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Evaluation
                tags:
                  - Create
                  - Customer
                  - Profile
                  - Evaluation
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
                summary: Create Customer Profile Evaluation
              get:
                description: >-
                  Retrieve a list of Evaluations associated to the
                  customer_profile resource.
                tags:
                  - Retrieve
                  - Customer
                  - Profile
                  - Evaluations
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
                summary: Retrieve Customer Profile Evaluations
            /v1/CustomerProfiles/{CustomerProfileSid}/Evaluations/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Evaluation Instance.
                tags:
                  - Retrieve
                  - Customer
                  - Profile
                  - Evaluation
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
                summary: Retrieve Customer Profile Evaluation
            /v1/EndUsers:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new End User.
                tags:
                  - Create
                  - End
                  - User
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
                summary: Create End User
              get:
                description: Retrieve a list of all End User for an account.
                tags:
                  - Retrieve
                  - End
                  - Users
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
                summary: Retrieve End Users
            /v1/EndUsers/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific End User Instance.
                tags:
                  - Retrieve
                  - End
                  - User
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
                summary: Retrieve End User
              post:
                description: Update an existing End User.
                tags:
                  - Update
                  - End
                  - User
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
                summary: Update End User
              delete:
                description: Delete a specific End User.
                tags:
                  - Delete
                  - End
                  - User
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
                summary: Delete End User
            /v1/EndUserTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all End-User Types.
                tags:
                  - Retrieve
                  - End
                  - User
                  - Types
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
                summary: Retrieve End User Types
            /v1/EndUserTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific End-User Type Instance.
                tags:
                  - Retrieve
                  - End
                  - User
                  - Type
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
                summary: Retrieve End User Type
            /v1/Policies:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Policys.
                tags:
                  - Retrieve
                  - Policies
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
                summary: Retrieve Policies
            /v1/Policies/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Policy Instance.
                tags:
                  - Retrieve
                  - Policy
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
                summary: Retrieve Policy
            /v1/SupportingDocuments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Supporting Document.
                tags:
                  - Create
                  - Supporting
                  - Document
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
                summary: Create Supporting Document
              get:
                description: Retrieve a list of all Supporting Document for an account.
                tags:
                  - Retrieve
                  - Supporting
                  - Documents
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
                summary: Retrieve Supporting Documents
            /v1/SupportingDocuments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Supporting Document Instance.
                tags:
                  - Retrieve
                  - Supporting
                  - Document
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
                summary: Retrieve Supporting Document
              post:
                description: Update an existing Supporting Document.
                tags:
                  - Update
                  - Supporting
                  - Document
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
                summary: Update Supporting Document
              delete:
                description: Delete a specific Supporting Document.
                tags:
                  - Delete
                  - Supporting
                  - Document
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
                summary: Delete Supporting Document
            /v1/SupportingDocumentTypes:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Supporting Document Types.
                tags:
                  - Retrieve
                  - Supporting
                  - Document
                  - Types
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
                summary: Retrieve Supporting Document Types
            /v1/SupportingDocumentTypes/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Supporting Document Type Instance.
                tags:
                  - Retrieve
                  - Supporting
                  - Document
                  - Type
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
                summary: Retrieve Supporting Document Type
            /v1/TrustProducts:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Customer-Profile.
                tags:
                  - Create
                  - Trust
                  - Product
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
                summary: Create Trust Product
              get:
                description: Retrieve a list of all Customer-Profiles for an account.
                tags:
                  - Retrieve
                  - Trust
                  - Products
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
                summary: Retrieve Trust Products
            /v1/TrustProducts/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Customer-Profile instance.
                tags:
                  - Retrieve
                  - Trust
                  - Product
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
                summary: Retrieve Trust Product
              post:
                description: Updates a Customer-Profile in an account.
                tags:
                  - Update
                  - Trust
                  - Product
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
                summary: Update Trust Product
              delete:
                description: Delete a specific Customer-Profile.
                tags:
                  - Delete
                  - Trust
                  - Product
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
                summary: Delete Trust Product
            /v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - Create
                  - Trust
                  - Product
                  - Channel
                  - Endpoint
                  - Assignment
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
                summary: Create Trust Product Channel Endpoint Assignment
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - Retrieve
                  - Trust
                  - Product
                  - Channel
                  - Endpoint
                  - Assignments
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
                summary: Retrieve Trust Product Channel Endpoint Assignments
            /v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - Retrieve
                  - Trust
                  - Product
                  - Channel
                  - Endpoint
                  - Assignment
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
                summary: Retrieve Trust Product Channel Endpoint Assignment
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - Delete
                  - Trust
                  - Product
                  - Channel
                  - Endpoint
                  - Assignment
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
                summary: Delete Trust Product Channel Endpoint Assignment
            /v1/TrustProducts/{TrustProductSid}/EntityAssignments:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Assigned Item.
                tags:
                  - Create
                  - Trust
                  - Product
                  - Entity
                  - Assignment
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
                summary: Create Trust Product Entity Assignment
              get:
                description: Retrieve a list of all Assigned Items for an account.
                tags:
                  - Retrieve
                  - Trust
                  - Product
                  - Entity
                  - Assignments
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
                summary: Retrieve Trust Product Entity Assignments
            /v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Assigned Item Instance.
                tags:
                  - Retrieve
                  - Trust
                  - Product
                  - Entity
                  - Assignment
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
                summary: Retrieve Trust Product Entity Assignment
              delete:
                description: Remove an Assignment Item Instance.
                tags:
                  - Delete
                  - Trust
                  - Product
                  - Entity
                  - Assignment
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
                summary: Delete Trust Product Entity Assignment
            /v1/TrustProducts/{TrustProductSid}/Evaluations:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Evaluation
                tags:
                  - Create
                  - Trust
                  - Product
                  - Evaluation
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
                summary: Create Trust Product Evaluation
              get:
                description: >-
                  Retrieve a list of Evaluations associated to the trust_product
                  resource.
                tags:
                  - Retrieve
                  - Trust
                  - Product
                  - Evaluations
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
                summary: Retrieve Trust Product Evaluations
            /v1/TrustProducts/{TrustProductSid}/Evaluations/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Evaluation Instance.
                tags:
                  - Retrieve
                  - Trust
                  - Product
                  - Evaluation
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
                summary: Retrieve Trust Product Evaluation
          tags:
            - name: Tag
            - name: Trust Hubs
              description: Needs a description.
            - name: Compliance
              description: Needs a description.
            - name: Inquiries
              description: Needs a description.
            - name: Customers
              description: Needs a description.
            - name: Initialize
              description: Needs a description.
            - name: Toll
              description: Needs a description.
            - name: Free
              description: Needs a description.
            - name: Customer Profiles
              description: Needs a description.
            - name: Profiles
              description: Needs a description.
            - name: Channels
              description: Needs a description.
            - name: Endpoints
              description: Needs a description.
            - name: Assignments
              description: Needs a description.
            - name: Entities
              description: Needs a description.
            - name: Evaluations
              description: Needs a description.
            - name: Users
              description: Needs a description.
            - name: User Types
              description: Needs a description.
            - name: Types
              description: Needs a description.
            - name: Policies
              description: Needs a description.
            - name: Supporting Documents
              description: Needs a description.
            - name: Documents
              description: Needs a description.
            - name: Document Types
              description: Needs a description.
            - name: Trust
              description: Needs a description.
            - name: Products
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Avai
    overlays:
      - type: APIs.io Search
        url: overlays/trust-hub-openapi-search.yml
  - aid: twilio.com:verify
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
        url: properties/verify-openapi-original.yml
        data:
          info:
            title: Twilio Verify API
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
                  - Create
                  - Service
                  - Access
                  - Token
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                summary: Create Service Access Token
            /v2/Services/{ServiceSid}/AccessTokens/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch an Access Token for the Entity
                tags:
                  - Retrieve
                  - Service
                  - Access
                  - Token
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                summary: Retrieve Service Access Token
            /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Bucket for a Rate Limit
                tags:
                  - Create
                  - Service
                  - Rate
                  - Limit
                  - Bucket
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                summary: Create Service Rate Limit Bucket
              get:
                description: Retrieve a list of all Buckets for a Rate Limit.
                tags:
                  - Retrieve
                  - Service
                  - Rate
                  - Limit
                  - Buckets
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                summary: Retrieve Service Rate Limit Buckets
            /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}:
              description: 'TODO: Resource-level docs'
              post:
                description: Update a specific Bucket.
                tags:
                  - Update
                  - Service
                  - Rate
                  - Limit
                  - Bucket
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                summary: Update Service Rate Limit Bucket
              get:
                description: Fetch a specific Bucket.
                tags:
                  - Retrieve
                  - Service
                  - Rate
                  - Limit
                  - Bucket
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                summary: Retrieve Service Rate Limit Bucket
              delete:
                description: Delete a specific Bucket.
                tags:
                  - Delete
                  - Service
                  - Rate
                  - Limit
                  - Bucket
                  - Services
                  - Service
                  - Sid
                  - Access
                  - Tokens
                  - Rate
                  - Limits
                  - Limit
                  - Buckets
                summary: Delete Service Rate Limit Bucket
            /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Challenge for the Factor
                tags:
                  - Create
                  - Service
                  - Entities
                  - Challenge
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
                summary: Create Service Entities Challenge
              get:
                description: Retrieve a list of all Challenges for a Factor.
                tags:
                  - Retrieve
                  - Service
                  - Entities
                  - Challenges
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
                summary: Retrieve Service Entities Challenges
            /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific Challenge.
                tags:
                  - Retrieve
                  - Service
                  - Entities
                  - Challenge
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
                summary: Retrieve Service Entities Challenge
              post:
                description: Verify a specific Challenge.
                tags:
                  - Update
                  - Service
                  - Entities
                  - Challenge
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
                summary: Update Service Entities Challenge
            /v2/Services/{ServiceSid}/Entities:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Entity for the Service
                tags:
                  - Create
                  - Service
                  - Entity
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
                summary: Create Service Entity
              get:
                description: Retrieve a list of all Entities for a Service.
                tags:
                  - Retrieve
                  - Service
                  - Entities
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
                summary: Retrieve Service Entities
            /v2/Services/{ServiceSid}/Entities/{Identity}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Entity.
                tags:
                  - Delete
                  - Service
                  - Entity
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
                summary: Delete Service Entity
              get:
                description: Fetch a specific Entity.
                tags:
                  - Retrieve
                  - Service
                  - Entity
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
                summary: Retrieve Service Entity
            /v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}:
              description: 'TODO: Resource-level docs'
              delete:
                description: Delete a specific Factor.
                tags:
                  - Delete
                  - Service
                  - Entities
                  - Factor
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
                summary: Delete Service Entities Factor
              get:
                description: Fetch a specific Factor.
                tags:
                  - Retrieve
                  - Service
                  - Entities
                  - Factor
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
                summary: Retrieve Service Entities Factor
              post:
                description: >-
                  Update a specific Factor. This endpoint can be used to Verify
                  a Factor if passed an `AuthPayload` param.
                tags:
                  - Update
                  - Service
                  - Entities
                  - Factor
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
                summary: Update Service Entities Factor
            /v2/Services/{ServiceSid}/Entities/{Identity}/Factors:
              description: 'TODO: Resource-level docs'
              get:
                description: Retrieve a list of all Factors for an Entity.
                tags:
                  - Retrieve
                  - Service
                  - Entities
                  - Factors
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
                summary: Retrieve Service Entities Factors
              post:
                description: Create a new Factor for the Entity
                tags:
                  - Create
                  - Service
                  - Entities
                  - Factor
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
                summary: Create Service Entities Factor
            /v2/Forms/{FormType}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch the forms for a specific Form Type.
                tags:
                  - Retrieve
                  - Forms
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
                summary: Retrieve Forms
            /v2/Services/{ServiceSid}/MessagingConfigurations:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new MessagingConfiguration for a service.
                tags:
                  - Create
                  - Service
                  - Messaging
                  - Configuration
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
                summary: Create Service Messaging Configuration
              get:
                description: Retrieve a list of all Messaging Configurations for a Service.
                tags:
                  - Retrieve
                  - Service
                  - Messaging
                  - Configurations
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
                summary: Retrieve Service Messaging Configurations
            /v2/Services/{ServiceSid}/MessagingConfigurations/{Country}:
              description: 'TODO: Resource-level docs'
              post:
                description: Update a specific MessagingConfiguration
                tags:
                  - Update
                  - Service
                  - Messaging
                  - Configuration
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
                summary: Update Service Messaging Configuration
              get:
                description: Fetch a specific MessagingConfiguration.
                tags:
                  - Retrieve
                  - Service
                  - Messaging
                  - Configuration
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
                summary: Retrieve Service Messaging Configuration
              delete:
                description: Delete a specific MessagingConfiguration.
                tags:
                  - Delete
                  - Service
                  - Messaging
                  - Configuration
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
                summary: Delete Service Messaging Configuration
            /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{ChallengeSid}/Notifications:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Notification for the corresponding Challenge
                tags:
                  - Create
                  - Service
                  - Entities
                  - Challenges
                  - Notification
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
                summary: Create Service Entities Challenges Notification
            /v2/Services/{ServiceSid}/RateLimits:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Rate Limit for a Service
                tags:
                  - Create
                  - Service
                  - Rate
                  - Limits
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
                summary: Create Service Rate Limits
              get:
                description: Retrieve a list of all Rate Limits for a service.
                tags:
                  - Retrieve
                  - Service
                  - Rate
                  - Limits
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
                summary: Retrieve Service Rate Limits
            /v2/Services/{ServiceSid}/RateLimits/{Sid}:
              description: 'TODO: Resource-level docs'
              post:
                description: Update a specific Rate Limit.
                tags:
                  - Update
                  - Service
                  - Rate
                  - Limit
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
                summary: Update Service Rate Limit
              get:
                description: Fetch a specific Rate Limit.
                tags:
                  - Retrieve
                  - Service
                  - Rate
                  - Limit
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
                summary: Retrieve Service Rate Limit
              delete:
                description: Delete a specific Rate Limit.
                tags:
                  - Delete
                  - Service
                  - Rate
                  - Limit
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
                summary: Delete Service Rate Limit
            /v2/SafeList/Numbers:
              description: 'TODO: Resource-level docs'
              post:
                description: Add a new phone number to SafeList.
                tags:
                  - Create
                  - Safe
                  - List
                  - Number
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
                summary: Create Safe List Number
            /v2/SafeList/Numbers/{PhoneNumber}:
              description: 'TODO: Resource-level docs'
              get:
                description: Check if a phone number exists in SafeList.
                tags:
                  - Retrieve
                  - Safe
                  - List
                  - Number
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
                summary: Retrieve Safe List Number
              delete:
                description: Remove a phone number from SafeList.
                tags:
                  - Delete
                  - Safe
                  - List
                  - Number
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
                summary: Delete Safe List Number
            /v2/Services:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Verification Service.
                tags:
                  - Create
                  - Service
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
                summary: Create Service
              get:
                description: Retrieve a list of all Verification Services for an account.
                tags:
                  - Retrieve
                  - Services
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
                summary: Retrieve Services
            /v2/Services/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch specific Verification Service Instance.
                tags:
                  - Retrieve
                  - Service
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
                summary: Retrieve Service
              delete:
                description: Delete a specific Verification Service Instance.
                tags:
                  - Delete
                  - Service
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
                summary: Delete Service
              post:
                description: Update a specific Verification Service.
                tags:
                  - Update
                  - Service
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
                summary: Update Service
            /v2/Services/{ServiceSid}/Verifications:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Verification using a Service
                tags:
                  - Create
                  - Service
                  - Verification
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
                summary: Create Service Verification
            /v2/Services/{ServiceSid}/Verifications/{Sid}:
              description: 'TODO: Resource-level docs'
              post:
                description: Update a Verification status
                tags:
                  - Update
                  - Service
                  - Verification
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
                summary: Update Service Verification
              get:
                description: Fetch a specific Verification
                tags:
                  - Retrieve
                  - Service
                  - Verification
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
                summary: Retrieve Service Verification
            /v2/Attempts:
              description: 'TODO: Resource-level docs'
              get:
                description: List all the verification attempts for a given Account.
                tags:
                  - Retrieve
                  - Attempts
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
                summary: Retrieve Attempts
            /v2/Attempts/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: Fetch a specific verification attempt.
                tags:
                  - Retrieve
                  - Attempt
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
                summary: Retrieve Attempt
            /v2/Attempts/Summary:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Get a summary of how many attempts were made and how many were
                  converted.
                tags:
                  - Retrieve
                  - Attempt
                  - Summary
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
                summary: Retrieve Attempt Summary
            /v2/Services/{ServiceSid}/VerificationCheck:
              description: 'TODO: Resource-level docs'
              post:
                description: challenge a specific Verification Check.
                tags:
                  - Create
                  - Service
                  - Verification
                  - Check
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
                summary: Create Service Verification Check
            /v2/Templates:
              description: 'TODO: Resource-level docs'
              get:
                description: List all the available templates for a given Account.
                tags:
                  - Retrieve
                  - Template
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
                summary: Retrieve Template
            /v2/Services/{ServiceSid}/Webhooks:
              description: 'TODO: Resource-level docs'
              post:
                description: Create a new Webhook for the Service
                tags:
                  - Create
                  - Service
                  - Webhook
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
                summary: Create Service Webhook
              get:
                description: Retrieve a list of all Webhooks for a Service.
                tags:
                  - Retrieve
                  - Service
                  - Webhooks
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
                summary: Retrieve Service Webhooks
            /v2/Services/{ServiceSid}/Webhooks/{Sid}:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Update
                  - Service
                  - Webhook
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
                summary: Update Service Webhook
              delete:
                description: Delete a specific Webhook.
                tags:
                  - Delete
                  - Service
                  - Webhook
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
                summary: Delete Service Webhook
              get:
                description: Fetch a specific Webhook.
                tags:
                  - Retrieve
                  - Service
                  - Webhook
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
                summary: Retrieve Service Webhook
          tags:
            - name: Tag
            - name: Verify
              description: Needs a description.
            - name: Services
              description: Needs a description.
            - name: Access
              description: Needs a description.
            - name: Tokens
              description: Needs a description.
            - name: Rate Limits
              description: Needs a description.
            - name: Buckets
              description: Needs a description.
            - name: Entities
              description: Needs a description.
            - name: Challenges
              description: Needs a description.
            - name: Factors
              description: Needs a description.
            - name: Forms
              description: Needs a description.
            - name: Messaging
              description: Needs a description.
            - name: Configurations
              description: Needs a description.
            - name: Notifications
              description: Needs a description.
            - name: Numbers
              description: Needs a description.
            - name: Safety
              description: Needs a description.
            - name: Lists
              description: Needs a description.
            - name: Phone Numbers
              description: Needs a description.
            - name: Verification
              description: Needs a description.
            - name: Attempts
              description: Needs a description.
            - name: Summary
              description: Needs a description.
            - name: Checks
              description: Needs a description.
            - name: vi
              description: Needs a description.
            - name: Template
              description: Needs a description.
            - name: Templates
              description: Needs a description.
            - name: Webhooks
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Available.
            - name: Beta
              description: >-
                PLEASE NOTE that this is a Beta product that is subject to
                change. Use it with ca
    overlays:
      - type: APIs.io Search
        url: overlays/verify-openapi-search.yml
  - aid: twilio.com:video
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
        url: properties/video-openapi-original.yml
        data:
          info:
            title: Twilio Video API
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
                  - Retrieve
                  - Composition
                  - Compositions
                  - Sid
                summary: Retrieve Composition
              delete:
                description: >-
                  Delete a Recording Composition resource identified by a
                  Composition SID.
                tags:
                  - Delete
                  - Composition
                  - Compositions
                  - Sid
                summary: Delete Composition
            /v1/Compositions:
              description: Recording compositions
              get:
                description: List of all Recording compositions.
                tags:
                  - Retrieve
                  - Compositions
                  - Compositions
                  - Sid
                summary: Retrieve Compositions
              post:
                description: ''
                tags:
                  - Create
                  - Composition
                  - Compositions
                  - Sid
                summary: Create Composition
            /v1/CompositionHooks/{Sid}:
              description: Recording composition hooks
              get:
                description: >-
                  Returns a single CompositionHook resource identified by a
                  CompositionHook SID.
                tags:
                  - Retrieve
                  - Composition
                  - Hook
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                summary: Retrieve Composition Hook
              delete:
                description: >-
                  Delete a Recording CompositionHook resource identified by a
                  `CompositionHook SID`.
                tags:
                  - Delete
                  - Composition
                  - Hook
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                summary: Delete Composition Hook
              post:
                description: ''
                tags:
                  - Update
                  - Composition
                  - Hook
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                summary: Update Composition Hook
            /v1/CompositionHooks:
              description: Recording composition hooks
              get:
                description: List of all Recording CompositionHook resources.
                tags:
                  - Retrieve
                  - Composition
                  - Hooks
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                summary: Retrieve Composition Hooks
              post:
                description: ''
                tags:
                  - Create
                  - Composition
                  - Hook
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                summary: Create Composition Hook
            /v1/CompositionSettings/Default:
              description: Recording composition settings
              get:
                description: ''
                tags:
                  - Retrieve
                  - Composition
                  - Settings
                  - Default
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                summary: Retrieve Composition Settings Default
              post:
                description: ''
                tags:
                  - Update
                  - Composition
                  - Settings
                  - Default
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                summary: Update Composition Settings Default
            /v1/Recordings/{Sid}:
              description: Single-track, single-media recordings
              get:
                description: >-
                  Returns a single Recording resource identified by a Recording
                  SID.
                tags:
                  - Retrieve
                  - Recording
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                summary: Retrieve Recording
              delete:
                description: Delete a Recording resource identified by a Recording SID.
                tags:
                  - Delete
                  - Recording
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                summary: Delete Recording
            /v1/Recordings:
              description: Single-track, single-media recordings
              get:
                description: List of all Track recordings.
                tags:
                  - Update
                  - Recording
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                summary: Update Recording
            /v1/RecordingSettings/Default:
              description: Recording settings
              get:
                description: ''
                tags:
                  - Retrieve
                  - Recording
                  - Settings
                  - Default
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                summary: Retrieve Recording Settings Default
              post:
                description: ''
                tags:
                  - Update
                  - Recording
                  - Settings
                  - Default
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                summary: Update Recording Settings Default
            /v1/Rooms/{Sid}:
              description: Video rooms with one or more participants
              get:
                description: ''
                tags:
                  - Retrieve
                  - Room
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                summary: Retrieve Room
              post:
                description: ''
                tags:
                  - Update
                  - Room
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                summary: Update Room
            /v1/Rooms:
              description: Video rooms with one or more participants
              post:
                description: ''
                tags:
                  - Create
                  - Room
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                summary: Create Room
              get:
                description: ''
                tags:
                  - Retrieve
                  - Rooms
                  - Compositions
                  - Sid
                  - Composition
                  - Hooks
                  - Settings
                  - Default
                  - Recordings
                  - Recording
                  - Rooms
                summary: Retrieve Rooms
            /v1/Rooms/{RoomSid}/Participants/{Sid}:
              description: Participants in video rooms
              get:
                description: ''
                tags:
                  - Retrieve
                  - Room
                  - Participant
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
                summary: Retrieve Room Participant
              post:
                description: ''
                tags:
                  - Update
                  - Room
                  - Participant
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
                summary: Update Room Participant
            /v1/Rooms/{RoomSid}/Participants:
              description: Participants in video rooms
              get:
                description: ''
                tags:
                  - Retrieve
                  - Room
                  - Participants
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
                summary: Retrieve Room Participants
            /v1/Rooms/{RoomSid}/Participants/{Sid}/Anonymize:
              description: 'TODO: Resource-level docs'
              post:
                description: ''
                tags:
                  - Update
                  - Room
                  - Participant
                  - Anonymize
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
                summary: Update Room Participant Anonymize
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Returns a single Track resource represented by TrackName or
                  SID.
                tags:
                  - Retrieve
                  - Room
                  - Participant
                  - Published
                  - Track
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
                summary: Retrieve Room Participant Published Track
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Returns a list of tracks associated with a given Participant.
                  Only `currently` Published Tracks are in the list resource.
                tags:
                  - Retrieve
                  - Room
                  - Participant
                  - Published
                  - Tracks
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
                summary: Retrieve Room Participant Published Tracks
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns a list of Subscribe Rules for the Participant.
                tags:
                  - Retrieve
                  - Room
                  - Participant
                  - Subscribe
                  - Rules
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
                summary: Retrieve Room Participant Subscribe Rules
              post:
                description: Update the Subscribe Rules for the Participant
                tags:
                  - Create
                  - Room
                  - Participant
                  - Subscribe
                  - Rules
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
                summary: Create Room Participant Subscribe Rules
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks/{Sid}:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Returns a single Track resource represented by `track_sid`. 
                  Note: This is one resource with the Video API that requires a
                  SID, be Track Name on the subscriber side is not guaranteed to
                  be unique.
                tags:
                  - Retrieve
                  - Room
                  - Participant
                  - Subscribed
                  - Track
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
                summary: Retrieve Room Participant Subscribed Track
            /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Returns a list of tracks that are subscribed for the
                  participant.
                tags:
                  - Retrieve
                  - Room
                  - Participant
                  - Subscribed
                  - Tracks
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
                summary: Retrieve Room Participant Subscribed Tracks
            /v1/Rooms/{RoomSid}/Recordings/{Sid}:
              description: Single-track, single-media room recordings
              get:
                description: ''
                tags:
                  - Retrieve
                  - Room
                  - Recording
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
                summary: Retrieve Room Recording
              delete:
                description: ''
                tags:
                  - Delete
                  - Room
                  - Recording
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
                summary: Delete Room Recording
            /v1/Rooms/{RoomSid}/Recordings:
              description: Single-track, single-media room recordings
              get:
                description: ''
                tags:
                  - Retrieve
                  - Room
                  - Recordings
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
                summary: Retrieve Room Recordings
            /v1/Rooms/{RoomSid}/RecordingRules:
              description: 'TODO: Resource-level docs'
              get:
                description: Returns a list of Recording Rules for the Room.
                tags:
                  - Retrieve
                  - Room
                  - Recording
                  - Rules
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
                summary: Retrieve Room Recording Rules
              post:
                description: Update the Recording Rules for the Room
                tags:
                  - Update
                  - Room
                  - Recording
                  - Rules
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
                summary: Update Room Recording Rules
          tags:
            - name: Tag
            - name: Video
              description: Needs a description.
            - name: Compositions
              description: Needs a description.
            - name: Hooks
              description: Needs a description.
            - name: Settings
              description: Needs a description.
            - name: Defaults
              description: Needs a description.
            - name: Videos
              description: Needs a description.
            - name: Recordings
              description: Needs a description.
            - name: Rooms
              description: Needs a description.
            - name: Participants
              description: Needs a description.
            - name: Anonymize
              description: Needs a description.
            - name: Published
              description: Needs a description.
            - name: Tracks
              description: Needs a description.
            - name: Subscribiptions
              description: Needs a description.
            - name: Rules
              description: Needs a description.
            - name: Subscriptions
              description: Needs a description.
            - name: Track
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Avai
    overlays:
      - type: APIs.io Search
        url: overlays/video-openapi-search.yml
  - aid: twilio.com:voice
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
        url: properties/voice-openapi-original.yml
        data:
          info:
            title: Twilio Voice API
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
                  - Delete
                  - Archive
                  - Call
                  - Archives
                  - Date
                  - Calls
                  - Sid
                summary: Delete Archive Call
            /v1/ByocTrunks:
              description: >-
                BYOC Trunks allow you to bring your own voice carrier to Twilio,
                enabling your calls to use our Programmable Voice APIs.
              post:
                description: ''
                tags:
                  - Create
                  - Trunk
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                summary: Create BYOC Trunk
              get:
                description: ''
                tags:
                  - Retrieve
                  - Trunks
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                summary: Retrieve BYOC Trunks
            /v1/ByocTrunks/{Sid}:
              description: >-
                BYOC Trunks allow you to bring your own voice carrier to Twilio,
                enabling your calls to use our Programmable Voice APIs.
              get:
                description: ''
                tags:
                  - Retrieve
                  - Trunk
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                summary: Retrieve BYOC Trunk
              post:
                description: ''
                tags:
                  - Update
                  - Trunk
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                summary: Update BYOC Trunk
              delete:
                description: ''
                tags:
                  - Delete
                  - Trunk
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                summary: Delete BYOC Trunk
            /v1/ConnectionPolicies:
              description: >-
                Connection Policy for sending traffic to your communications
                infrastructure.
              post:
                description: ''
                tags:
                  - Create
                  - Connection
                  - Policy
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                summary: Create Connection Policy
              get:
                description: ''
                tags:
                  - Retrieve
                  - Connection
                  - Policies
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                summary: Retrieve Connection Policies
            /v1/ConnectionPolicies/{Sid}:
              description: >-
                Connection Policy for sending traffic to your communications
                infrastructure.
              get:
                description: ''
                tags:
                  - Retrieve
                  - Connection
                  - Policy
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                summary: Retrieve Connection Policy
              post:
                description: ''
                tags:
                  - Update
                  - Connection
                  - Policy
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                summary: Update Connection Policy
              delete:
                description: ''
                tags:
                  - Delete
                  - Connection
                  - Policy
                  - Archives
                  - Date
                  - Calls
                  - Sid
                  - Byoc
                  - Trunks
                  - Connection
                  - Policies
                summary: Delete Connection Policy
            /v1/ConnectionPolicies/{ConnectionPolicySid}/Targets:
              description: >-
                Network element entry points into your communications
                infrastructure
              post:
                description: ''
                tags:
                  - Create
                  - Connection
                  - Policies
                  - Target
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
                summary: Create Connection Policies Target
              get:
                description: ''
                tags:
                  - Retrieve
                  - Connection
                  - Policies
                  - Targets
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
                summary: Retrieve Connection Policies Targets
            /v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}:
              description: >-
                Network element entry points into your communications
                infrastructure
              get:
                description: ''
                tags:
                  - Retrieve
                  - Connection
                  - Policies
                  - Target
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
                summary: Retrieve Connection Policies Target
              post:
                description: ''
                tags:
                  - Update
                  - Connection
                  - Policies
                  - Target
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
                summary: Update Connection Policies Target
              delete:
                description: ''
                tags:
                  - Delete
                  - Connection
                  - Policies
                  - Target
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
                summary: Delete Connection Policies Target
            /v1/DialingPermissions:
              description: 'TODO: Resource-level docs'
            /v1/DialingPermissions/Countries/{IsoCode}:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve voice dialing country permissions identified by the
                  given ISO country code
                tags:
                  - Retrieve
                  - Dialing
                  - Permission
                  - Country
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
                summary: Retrieve Dialing Permission Country
            /v1/DialingPermissions/Countries:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve all voice dialing country permissions for this
                  account
                tags:
                  - Retrieve
                  - Dialing
                  - Permission
                  - Countries
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
                summary: Retrieve Dialing Permission Countries
            /v1/DialingPermissions/BulkCountryUpdates:
              description: 'TODO: Resource-level docs'
              post:
                description: >-
                  Create a bulk update request to change voice dialing country
                  permissions of one or more countries identified by the
                  corresponding [ISO country
                  code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
                tags:
                  - Update
                  - Dialing
                  - Permission
                  - Bulk
                  - Country
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
                summary: Update Dialing Permission Bulk Country
            /v1/DialingPermissions/Countries/{IsoCode}/HighRiskSpecialPrefixes:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Fetch the high-risk special services prefixes from the country
                  resource corresponding to the [ISO country
                  code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
                tags:
                  - Retrieve
                  - Dialing
                  - Permission
                  - Countries
                  - High
                  - Risk
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
                summary: Retrieve Dialing Permission Countries High Risk
            /v1/Settings:
              description: 'TODO: Resource-level docs'
              get:
                description: >-
                  Retrieve voice dialing permissions inheritance for the
                  sub-account
                tags:
                  - Retrieve
                  - Settings
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
                summary: Retrieve Settings
              post:
                description: >-
                  Update voice dialing permissions inheritance for the
                  sub-account
                tags:
                  - Update
                  - Settings
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
                summary: Update Settings
            /v1/IpRecords:
              description: >-
                IP Records hold information about the IP addresses and ranges
                ([CIDR](https://tools.ietf.org/html/rfc4632) blocks) that your
                traffic will be associated with.
              post:
                description: ''
                tags:
                  - Create
                  - Record
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
                summary: Create IP Record
              get:
                description: ''
                tags:
                  - Retrieve
                  - Records
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
                summary: Retrieve IP Records
            /v1/IpRecords/{Sid}:
              description: >-
                IP Records hold information about the IP addresses and ranges
                ([CIDR](https://tools.ietf.org/html/rfc4632) blocks) that your
                traffic will be associated with.
              get:
                description: ''
                tags:
                  - Retrieve
                  - Record
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
                summary: Retrieve IP Record
              post:
                description: ''
                tags:
                  - Update
                  - Record
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
                summary: Update IP Record
              delete:
                description: ''
                tags:
                  - Delete
                  - Record
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
                summary: Delete IP Record
            /v1/SourceIpMappings:
              description: >-
                With Source IP Mappings, Twilio can recognize your SIP requests
                based on where they are sent from. The Request-URI no longer has
                to have the FQDN (Fully Qualified Domain Name) of your SIP
                Domain.
              post:
                description: ''
                tags:
                  - Create
                  - Source
                  - Mapping
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
                summary: Create Source IP Mapping
              get:
                description: ''
                tags:
                  - Retrieve
                  - Source
                  - Mappings
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
                summary: Retrieve Source IP Mappings
            /v1/SourceIpMappings/{Sid}:
              description: >-
                With Source IP Mappings, Twilio can recognize your SIP requests
                based on where they are sent from. The Request-URI no longer has
                to have the FQDN (Fully Qualified Domain Name) of your SIP
                Domain.
              get:
                description: ''
                tags:
                  - Retrieve
                  - Source
                  - Mapping
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
                summary: Retrieve Source IP Mapping
              post:
                description: ''
                tags:
                  - Update
                  - Source
                  - Mapping
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
                summary: Update Source IP Mapping
              delete:
                description: ''
                tags:
                  - Delete
                  - Source
                  - Mapping
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
                summary: Delete Source IP Mapping
          tags:
            - name: Tag
            - name: Voice
              description: Needs a description.
            - name: ''
              description: Needs a description.
            - name: Archives
              description: Needs a description.
            - name: Calls
              description: Needs a description.
            - name: BYOC
              description: Needs a description.
            - name: Trunks
              description: Needs a description.
            - name: Connections
              description: Needs a description.
            - name: Policies
              description: Needs a description.
            - name: Targets
              description: Needs a description.
            - name: Dialing
              description: Needs a description.
            - name: Permissions
              description: Needs a description.
            - name: Countries
              description: Needs a description.
            - name: ISO
              description: Needs a description.
            - name: Bulk
              description: Needs a description.
            - name: High
              description: Needs a description.
            - name: Risk
              description: Needs a description.
            - name: Settings
              description: Needs a description.
            - name: IP Address
              description: Needs a description.
            - name: Record
              description: Needs a description.
            - name: Records
              description: Needs a description.
            - name: Source
              description: Needs a description.
            - name: Mapping
              description: Needs a description.
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
                https://www.twilio.com/help/co
    overlays:
      - type: APIs.io Search
        url: overlays/voice-openapi-search.yml
  - aid: twilio.com:wireless
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
        url: properties/wireless-openapi-original.yml
        data:
          info:
            title: Twilio Wireless API
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
                  - Retrieve
                  - Usage
                  - Records
                  - Usage
                  - Records
                summary: Retrieve Usage Records
            /v1/Commands/{Sid}:
              description: Machine-to-machine commands sent to/from devices
              get:
                description: Fetch a Command instance from your account.
                tags:
                  - Retrieve
                  - Command
                  - Usage
                  - Records
                  - Commands
                  - Sid
                summary: Retrieve Command
              delete:
                description: Delete a Command instance from your account.
                tags:
                  - Delete
                  - Command
                  - Usage
                  - Records
                  - Commands
                  - Sid
                summary: Delete Command
            /v1/Commands:
              description: Machine-to-machine commands sent to/from devices
              get:
                description: Retrieve a list of Commands from your account.
                tags:
                  - Retrieve
                  - Commands
                  - Usage
                  - Records
                  - Commands
                  - Sid
                summary: Retrieve Commands
              post:
                description: Send a Command to a Sim.
                tags:
                  - Create
                  - Command
                  - Usage
                  - Records
                  - Commands
                  - Sid
                summary: Create Command
            /v1/Sims/{SimSid}/DataSessions:
              description: Data session information for SIMs
              get:
                description: ''
                tags:
                  - Retrieve
                  - Data
                  - Sessions
                  - Usage
                  - Records
                  - Commands
                  - Sid
                  - Sims
                  - Sim
                  - Data
                  - Sessions
                summary: Retrieve SIMS Data Sessions
            /v1/RatePlans:
              description: Capabilities and restrictions for SIMs
              get:
                description: ''
                tags:
                  - Retrieve
                  - Rate
                  - Plans
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
                summary: Retrieve Rate Plans
              post:
                description: ''
                tags:
                  - Create
                  - Rate
                  - Plan
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
                summary: Create Rate Plan
            /v1/RatePlans/{Sid}:
              description: Capabilities and restrictions for SIMs
              get:
                description: ''
                tags:
                  - Retrieve
                  - Rate
                  - Plan
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
                summary: Retrieve Rate Plan
              post:
                description: ''
                tags:
                  - Update
                  - Rate
                  - Plan
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
                summary: Update Rate Plan
              delete:
                description: ''
                tags:
                  - Delete
                  - Rate
                  - Plan
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
                summary: Delete Rate Plan
            /v1/Sims/{Sid}:
              description: A resource representing a Programmable Wireless SIM
              get:
                description: Fetch a Sim resource on your Account.
                tags:
                  - Retrieve
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
                summary: Retrieve SIM
              post:
                description: >-
                  Updates the given properties of a Sim resource on your
                  Account.
                tags:
                  - Update
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
                summary: Update SIM
              delete:
                description: Delete a Sim resource on your Account.
                tags:
                  - Delete
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
                summary: Delete SIM
            /v1/Sims:
              description: A resource representing a Programmable Wireless SIM
              get:
                description: Retrieve a list of Sim resources on your Account.
                tags:
                  - Retrieve
                  - Ms
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
                summary: Retrieve SIMs
            /v1/Sims/{SimSid}/UsageRecords:
              description: Usage information for SIMs
              get:
                description: ''
                tags:
                  - Retrieve
                  - Usage
                  - Records
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
                summary: Retrieve SIM Usage Records
          tags:
            - name: Tag
            - name: Wireless
              description: Needs a description.
            - name: Usage
              description: Needs a description.
            - name: Records
              description: Needs a description.
            - name: Commands
              description: Needs a description.
            - name: SIMS
              description: Needs a description.
            - name: Data
              description: Needs a description.
            - name: Sessions
              description: Needs a description.
            - name: Rate Plans
              description: Needs a description.
            - name: SIM
              description: Needs a description.
          x-maturity:
            - name: GA
              description: This product is Generally Avai
    overlays:
      - type: APIs.io Search
        url: overlays/wireless-openapi-search.yml
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
    url: overlays/api-evangelist-ratings.yml
  - type: API Evangelist Subway
    url: overlays/api-evangelist-subway.yml
maintainers:
  - FN: APIs.json
    email: info@apis.io
---