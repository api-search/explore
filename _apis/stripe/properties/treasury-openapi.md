---
openapi: 3.0.0
info:
  title: Stripe Treasury API
  description: Needs description.
  contact:
    email: dev-platform@stripe.com
    name: Stripe Dev Platform Team
    url: 'https://stripe.com'
  termsOfService: 'https://stripe.com/us/terms/'
  version: '2023-10-16'
  x-stripeSpecFilename: spec3
security:
  - basicAuth: []
  - bearerAuth: []
servers:
  - url: 'https://api.stripe.com/'
paths:
  /v1/treasury/credit_reversals:
    get:
      description: <p>Returns a list of CreditReversals.</p>
      operationId: GetTreasuryCreditReversals
      parameters:
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: Returns objects associated with this FinancialAccount.
          in: query
          name: financial_account
          required: true
          schema:
            type: string
          style: form
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: Only return CreditReversals for the ReceivedCredit ID.
          in: query
          name: received_credit
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Only return CreditReversals for a given status.
          in: query
          name: status
          required: false
          schema:
            enum:
              - canceled
              - posted
              - processing
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    description: Details about each object.
                    items:
                      $ref: '#/components/schemas/treasury.credit_reversal'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: TreasuryReceivedCreditsResourceCreditReversalList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Credit Reversals
      tags:
        - Treasury
        - Credits
        - Reversals
    post:
      description: <p>Reverses a ReceivedCredit and creates a CreditReversal object.</p>
      operationId: PostTreasuryCreditReversals
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                metadata:
                  additionalProperties:
                    type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
                received_credit:
                  description: The ReceivedCredit to reverse.
                  maxLength: 5000
                  type: string
              required:
                - received_credit
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.credit_reversal'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Credit Reversal
      tags:
        - Treasury
        - Credits
        - Reversals
  '/v1/treasury/credit_reversals/{credit_reversal}':
    get:
      description: >-
        <p>Retrieves the details of an existing CreditReversal by passing the
        unique CreditReversal ID from either the CreditReversal creation request
        or CreditReversal list</p>
      operationId: GetTreasuryCreditReversalsCreditReversal
      parameters:
        - in: path
          name: credit_reversal
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.credit_reversal'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Credit Reversal
      tags:
        - Treasury
        - Credits
        - Reversals
  /v1/treasury/debit_reversals:
    get:
      description: <p>Returns a list of DebitReversals.</p>
      operationId: GetTreasuryDebitReversals
      parameters:
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: Returns objects associated with this FinancialAccount.
          in: query
          name: financial_account
          required: true
          schema:
            type: string
          style: form
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: Only return DebitReversals for the ReceivedDebit ID.
          in: query
          name: received_debit
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Only return DebitReversals for a given resolution.
          in: query
          name: resolution
          required: false
          schema:
            enum:
              - lost
              - won
            type: string
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Only return DebitReversals for a given status.
          in: query
          name: status
          required: false
          schema:
            enum:
              - canceled
              - completed
              - processing
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    description: Details about each object.
                    items:
                      $ref: '#/components/schemas/treasury.debit_reversal'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: TreasuryReceivedDebitsResourceDebitReversalList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Debit Reversals
      tags:
        - Treasury
        - Debits
        - Reversals
    post:
      description: <p>Reverses a ReceivedDebit and creates a DebitReversal object.</p>
      operationId: PostTreasuryDebitReversals
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                metadata:
                  additionalProperties:
                    type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
                received_debit:
                  description: The ReceivedDebit to reverse.
                  maxLength: 5000
                  type: string
              required:
                - received_debit
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.debit_reversal'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Debit Reversal
      tags:
        - Treasury
        - Debits
        - Reversals
  '/v1/treasury/debit_reversals/{debit_reversal}':
    get:
      description: <p>Retrieves a DebitReversal object.</p>
      operationId: GetTreasuryDebitReversalsDebitReversal
      parameters:
        - in: path
          name: debit_reversal
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.debit_reversal'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Debit Reversal
      tags:
        - Treasury
        - Debits
        - Reversals
  /v1/treasury/financial_accounts:
    get:
      description: <p>Returns a list of FinancialAccounts.</p>
      operationId: GetTreasuryFinancialAccounts
      parameters:
        - explode: true
          in: query
          name: created
          required: false
          schema:
            anyOf:
              - properties:
                  gt:
                    type: integer
                  gte:
                    type: integer
                  lt:
                    type: integer
                  lte:
                    type: integer
                title: range_query_specs
                type: object
              - type: integer
          style: deepObject
        - description: An object ID cursor for use in pagination.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: A limit ranging from 1 to 100 (defaults to 10).
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: An object ID cursor for use in pagination.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    items:
                      $ref: '#/components/schemas/treasury.financial_account'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    pattern: ^/v1/treasury/financial_accounts
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: TreasuryFinancialAccountsResourceFinancialAccountList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Financial Accounts
      tags:
        - Treasury
        - Financial
        - Accounts
    post:
      description: >-
        <p>Creates a new FinancialAccount. For now, each connected account can
        only have one FinancialAccount.</p>
      operationId: PostTreasuryFinancialAccounts
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              features:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              platform_restrictions:
                explode: true
                style: deepObject
              supported_currencies:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                features:
                  description: >-
                    Encodes whether a FinancialAccount has access to a
                    particular feature. Stripe or the platform can control
                    features via the requested field.
                  properties:
                    card_issuing:
                      properties:
                        requested:
                          type: boolean
                      required:
                        - requested
                      title: access
                      type: object
                    deposit_insurance:
                      properties:
                        requested:
                          type: boolean
                      required:
                        - requested
                      title: access
                      type: object
                    financial_addresses:
                      properties:
                        aba:
                          properties:
                            requested:
                              type: boolean
                          required:
                            - requested
                          title: aba_access
                          type: object
                      title: financial_addresses
                      type: object
                    inbound_transfers:
                      properties:
                        ach:
                          properties:
                            requested:
                              type: boolean
                          required:
                            - requested
                          title: access_with_ach_details
                          type: object
                      title: inbound_transfers
                      type: object
                    intra_stripe_flows:
                      properties:
                        requested:
                          type: boolean
                      required:
                        - requested
                      title: access
                      type: object
                    outbound_payments:
                      properties:
                        ach:
                          properties:
                            requested:
                              type: boolean
                          required:
                            - requested
                          title: access_with_ach_details
                          type: object
                        us_domestic_wire:
                          properties:
                            requested:
                              type: boolean
                          required:
                            - requested
                          title: access
                          type: object
                      title: outbound_payments
                      type: object
                    outbound_transfers:
                      properties:
                        ach:
                          properties:
                            requested:
                              type: boolean
                          required:
                            - requested
                          title: access_with_ach_details
                          type: object
                        us_domestic_wire:
                          properties:
                            requested:
                              type: boolean
                          required:
                            - requested
                          title: access
                          type: object
                      title: outbound_transfers
                      type: object
                  title: feature_access
                  type: object
                metadata:
                  additionalProperties:
                    type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
                platform_restrictions:
                  description: >-
                    The set of functionalities that the platform can restrict on
                    the FinancialAccount.
                  properties:
                    inbound_flows:
                      enum:
                        - restricted
                        - unrestricted
                      type: string
                    outbound_flows:
                      enum:
                        - restricted
                        - unrestricted
                      type: string
                  title: platform_restrictions
                  type: object
                supported_currencies:
                  description: The currencies the FinancialAccount can hold a balance in.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
              required:
                - supported_currencies
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.financial_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Financial Account
      tags:
        - Treasury
        - Financial
        - Accounts
  '/v1/treasury/financial_accounts/{financial_account}':
    get:
      description: <p>Retrieves the details of a FinancialAccount.</p>
      operationId: GetTreasuryFinancialAccountsFinancialAccount
      parameters:
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - in: path
          name: financial_account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.financial_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Financial Account
      tags:
        - Treasury
        - Financial
        - Accounts
    post:
      description: <p>Updates the details of a FinancialAccount.</p>
      operationId: PostTreasuryFinancialAccountsFinancialAccount
      parameters:
        - in: path
          name: financial_account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              features:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              platform_restrictions:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                features:
                  description: >-
                    Encodes whether a FinancialAccount has access to a
                    particular feature, with a status enum and associated
                    `status_details`. Stripe or the platform may control
                    features via the requested field.
                  properties:
                    card_issuing:
                      properties:
                        requested:
                          type: boolean
                      required:
                        - requested
                      title: access
                      type: object
                    deposit_insurance:
                      properties:
                        requested:
                          type: boolean
                      required:
                        - requested
                      title: access
                      type: object
                    financial_addresses:
                      properties:
                        aba:
                          properties:
                            requested:
                              type: boolean
                          required:
                            - requested
                          title: aba_access
                          type: object
                      title: financial_addresses
                      type: object
                    inbound_transfers:
                      properties:
                        ach:
                          properties:
                            requested:
                              type: boolean
                          required:
                            - requested
                          title: access_with_ach_details
                          type: object
                      title: inbound_transfers
                      type: object
                    intra_stripe_flows:
                      properties:
                        requested:
                          type: boolean
                      required:
                        - requested
                      title: access
                      type: object
                    outbound_payments:
                      properties:
                        ach:
                          properties:
                            requested:
                              type: boolean
                          required:
                            - requested
                          title: access_with_ach_details
                          type: object
                        us_domestic_wire:
                          properties:
                            requested:
                              type: boolean
                          required:
                            - requested
                          title: access
                          type: object
                      title: outbound_payments
                      type: object
                    outbound_transfers:
                      properties:
                        ach:
                          properties:
                            requested:
                              type: boolean
                          required:
                            - requested
                          title: access_with_ach_details
                          type: object
                        us_domestic_wire:
                          properties:
                            requested:
                              type: boolean
                          required:
                            - requested
                          title: access
                          type: object
                      title: outbound_transfers
                      type: object
                  title: feature_access
                  type: object
                metadata:
                  additionalProperties:
                    type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
                platform_restrictions:
                  description: >-
                    The set of functionalities that the platform can restrict on
                    the FinancialAccount.
                  properties:
                    inbound_flows:
                      enum:
                        - restricted
                        - unrestricted
                      type: string
                    outbound_flows:
                      enum:
                        - restricted
                        - unrestricted
                      type: string
                  title: platform_restrictions
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.financial_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Financial Account
      tags:
        - Treasury
        - Financial
        - Accounts
  '/v1/treasury/financial_accounts/{financial_account}/features':
    get:
      description: >-
        <p>Retrieves Features information associated with the
        FinancialAccount.</p>
      operationId: GetTreasuryFinancialAccountsFinancialAccountFeatures
      parameters:
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - in: path
          name: financial_account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.financial_account_features'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Financial Account Features
      tags:
        - Treasury
        - Financial
        - Accounts
        - Features
    post:
      description: <p>Updates the Features associated with a FinancialAccount.</p>
      operationId: PostTreasuryFinancialAccountsFinancialAccountFeatures
      parameters:
        - in: path
          name: financial_account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              card_issuing:
                explode: true
                style: deepObject
              deposit_insurance:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              financial_addresses:
                explode: true
                style: deepObject
              inbound_transfers:
                explode: true
                style: deepObject
              intra_stripe_flows:
                explode: true
                style: deepObject
              outbound_payments:
                explode: true
                style: deepObject
              outbound_transfers:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                card_issuing:
                  description: >-
                    Encodes the FinancialAccount's ability to be used with the
                    Issuing product, including attaching cards to and drawing
                    funds from the FinancialAccount.
                  properties:
                    requested:
                      type: boolean
                  required:
                    - requested
                  title: access
                  type: object
                deposit_insurance:
                  description: >-
                    Represents whether this FinancialAccount is eligible for
                    deposit insurance. Various factors determine the insurance
                    amount.
                  properties:
                    requested:
                      type: boolean
                  required:
                    - requested
                  title: access
                  type: object
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                financial_addresses:
                  description: >-
                    Contains Features that add FinancialAddresses to the
                    FinancialAccount.
                  properties:
                    aba:
                      properties:
                        requested:
                          type: boolean
                      required:
                        - requested
                      title: aba_access
                      type: object
                  title: financial_addresses
                  type: object
                inbound_transfers:
                  description: >-
                    Contains settings related to adding funds to a
                    FinancialAccount from another Account with the same owner.
                  properties:
                    ach:
                      properties:
                        requested:
                          type: boolean
                      required:
                        - requested
                      title: access_with_ach_details
                      type: object
                  title: inbound_transfers
                  type: object
                intra_stripe_flows:
                  description: >-
                    Represents the ability for the FinancialAccount to send
                    money to, or receive money from other FinancialAccounts (for
                    example, via OutboundPayment).
                  properties:
                    requested:
                      type: boolean
                  required:
                    - requested
                  title: access
                  type: object
                outbound_payments:
                  description: >-
                    Includes Features related to initiating money movement out
                    of the FinancialAccount to someone else's bucket of money.
                  properties:
                    ach:
                      properties:
                        requested:
                          type: boolean
                      required:
                        - requested
                      title: access_with_ach_details
                      type: object
                    us_domestic_wire:
                      properties:
                        requested:
                          type: boolean
                      required:
                        - requested
                      title: access
                      type: object
                  title: outbound_payments
                  type: object
                outbound_transfers:
                  description: >-
                    Contains a Feature and settings related to moving money out
                    of the FinancialAccount into another Account with the same
                    owner.
                  properties:
                    ach:
                      properties:
                        requested:
                          type: boolean
                      required:
                        - requested
                      title: access_with_ach_details
                      type: object
                    us_domestic_wire:
                      properties:
                        requested:
                          type: boolean
                      required:
                        - requested
                      title: access
                      type: object
                  title: outbound_transfers
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.financial_account_features'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Financial Account Feature
      tags:
        - Treasury
        - Financial
        - Accounts
        - Features
  /v1/treasury/inbound_transfers:
    get:
      description: >-
        <p>Returns a list of InboundTransfers sent from the specified
        FinancialAccount.</p>
      operationId: GetTreasuryInboundTransfers
      parameters:
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: Returns objects associated with this FinancialAccount.
          in: query
          name: financial_account
          required: true
          schema:
            type: string
          style: form
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Only return InboundTransfers that have the given status:
            `processing`, `succeeded`, `failed` or `canceled`.
          in: query
          name: status
          required: false
          schema:
            enum:
              - canceled
              - failed
              - processing
              - succeeded
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    description: Details about each object.
                    items:
                      $ref: '#/components/schemas/treasury.inbound_transfer'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: TreasuryInboundTransfersResourceInboundTransferList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Inbound Transfers
      tags:
        - Treasury
        - Inbound
        - Transfers
    post:
      description: <p>Creates an InboundTransfer.</p>
      operationId: PostTreasuryInboundTransfers
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: Amount (in cents) to be transferred.
                  type: integer
                currency:
                  description: >-
                    Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies).
                  type: string
                description:
                  description: >-
                    An arbitrary string attached to the object. Often useful for
                    displaying to users.
                  maxLength: 5000
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                financial_account:
                  description: The FinancialAccount to send funds to.
                  type: string
                metadata:
                  additionalProperties:
                    type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
                origin_payment_method:
                  description: >-
                    The origin payment method to be debited for the
                    InboundTransfer.
                  maxLength: 5000
                  type: string
                statement_descriptor:
                  description: >-
                    The complete description that appears on your customers'
                    statements. Maximum 10 characters.
                  maxLength: 10
                  type: string
              required:
                - amount
                - currency
                - financial_account
                - origin_payment_method
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.inbound_transfer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Inbound Transfer
      tags:
        - Treasury
        - Inbound
        - Transfers
  '/v1/treasury/inbound_transfers/{id}':
    get:
      description: <p>Retrieves the details of an existing InboundTransfer.</p>
      operationId: GetTreasuryInboundTransfersId
      parameters:
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - in: path
          name: id
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.inbound_transfer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Inbound Transfer
      tags:
        - Treasury
        - Inbound
        - Transfers
  '/v1/treasury/inbound_transfers/{inbound_transfer}/cancel':
    post:
      description: <p>Cancels an InboundTransfer.</p>
      operationId: PostTreasuryInboundTransfersInboundTransferCancel
      parameters:
        - in: path
          name: inbound_transfer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.inbound_transfer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Cancel Inbound Transfer
      tags:
        - Cancel
        - Treasury
        - Inbound
        - Transfers
  /v1/treasury/outbound_payments:
    get:
      description: >-
        <p>Returns a list of OutboundPayments sent from the specified
        FinancialAccount.</p>
      operationId: GetTreasuryOutboundPayments
      parameters:
        - description: Only return OutboundPayments sent to this customer.
          in: query
          name: customer
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: Returns objects associated with this FinancialAccount.
          in: query
          name: financial_account
          required: true
          schema:
            type: string
          style: form
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Only return OutboundPayments that have the given status:
            `processing`, `failed`, `posted`, `returned`, or `canceled`.
          in: query
          name: status
          required: false
          schema:
            enum:
              - canceled
              - failed
              - posted
              - processing
              - returned
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    description: Details about each object.
                    items:
                      $ref: '#/components/schemas/treasury.outbound_payment'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    pattern: ^/v1/treasury/outbound_payments
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: TreasuryOutboundPaymentsResourceOutboundPaymentList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Outbound Payments
      tags:
        - Treasury
        - Outbound
        - Payments
    post:
      description: <p>Creates an OutboundPayment.</p>
      operationId: PostTreasuryOutboundPayments
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              destination_payment_method_data:
                explode: true
                style: deepObject
              destination_payment_method_options:
                explode: true
                style: deepObject
              end_user_details:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: Amount (in cents) to be transferred.
                  type: integer
                currency:
                  description: >-
                    Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies).
                  type: string
                customer:
                  description: >-
                    ID of the customer to whom the OutboundPayment is sent. Must
                    match the Customer attached to the
                    `destination_payment_method` passed in.
                  maxLength: 5000
                  type: string
                description:
                  description: >-
                    An arbitrary string attached to the object. Often useful for
                    displaying to users.
                  maxLength: 5000
                  type: string
                destination_payment_method:
                  description: >-
                    The PaymentMethod to use as the payment instrument for the
                    OutboundPayment. Exclusive with
                    `destination_payment_method_data`.
                  maxLength: 5000
                  type: string
                destination_payment_method_data:
                  description: >-
                    Hash used to generate the PaymentMethod to be used for this
                    OutboundPayment. Exclusive with
                    `destination_payment_method`.
                  properties:
                    billing_details:
                      properties:
                        address:
                          anyOf:
                            - properties:
                                city:
                                  maxLength: 5000
                                  type: string
                                country:
                                  maxLength: 5000
                                  type: string
                                line1:
                                  maxLength: 5000
                                  type: string
                                line2:
                                  maxLength: 5000
                                  type: string
                                postal_code:
                                  maxLength: 5000
                                  type: string
                                state:
                                  maxLength: 5000
                                  type: string
                              title: billing_details_address
                              type: object
                            - enum:
                                - ''
                              type: string
                        email:
                          anyOf:
                            - type: string
                            - enum:
                                - ''
                              type: string
                        name:
                          anyOf:
                            - maxLength: 5000
                              type: string
                            - enum:
                                - ''
                              type: string
                        phone:
                          anyOf:
                            - maxLength: 5000
                              type: string
                            - enum:
                                - ''
                              type: string
                      title: billing_details_inner_params
                      type: object
                    financial_account:
                      type: string
                    metadata:
                      additionalProperties:
                        type: string
                      type: object
                    type:
                      enum:
                        - financial_account
                        - us_bank_account
                      type: string
                    us_bank_account:
                      properties:
                        account_holder_type:
                          enum:
                            - company
                            - individual
                          type: string
                        account_number:
                          maxLength: 5000
                          type: string
                        account_type:
                          enum:
                            - checking
                            - savings
                          type: string
                        financial_connections_account:
                          maxLength: 5000
                          type: string
                        routing_number:
                          maxLength: 5000
                          type: string
                      title: payment_method_param
                      type: object
                  required:
                    - type
                  title: payment_method_data
                  type: object
                destination_payment_method_options:
                  description: >-
                    Payment method-specific configuration for this
                    OutboundPayment.
                  properties:
                    us_bank_account:
                      anyOf:
                        - properties:
                            network:
                              enum:
                                - ach
                                - us_domestic_wire
                              type: string
                          title: payment_method_options_param
                          type: object
                        - enum:
                            - ''
                          type: string
                  title: payment_method_options
                  type: object
                end_user_details:
                  description: End user details.
                  properties:
                    ip_address:
                      type: string
                    present:
                      type: boolean
                  required:
                    - present
                  title: end_user_details_params
                  type: object
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                financial_account:
                  description: The FinancialAccount to pull funds from.
                  type: string
                metadata:
                  additionalProperties:
                    type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
                statement_descriptor:
                  description: >-
                    The description that appears on the receiving end for this
                    OutboundPayment (for example, bank statement for external
                    bank transfer). Maximum 10 characters for `ach` payments,
                    140 characters for `us_domestic_wire` payments, or 500
                    characters for `stripe` network transfers. The default value
                    is "payment".
                  maxLength: 5000
                  type: string
              required:
                - amount
                - currency
                - financial_account
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.outbound_payment'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Outbound Payment
      tags:
        - Treasury
        - Outbound
        - Payments
  '/v1/treasury/outbound_payments/{id}':
    get:
      description: >-
        <p>Retrieves the details of an existing OutboundPayment by passing the
        unique OutboundPayment ID from either the OutboundPayment creation
        request or OutboundPayment list.</p>
      operationId: GetTreasuryOutboundPaymentsId
      parameters:
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - in: path
          name: id
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.outbound_payment'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Outbound Payment
      tags:
        - Treasury
        - Outbound
        - Payments
  '/v1/treasury/outbound_payments/{id}/cancel':
    post:
      description: <p>Cancel an OutboundPayment.</p>
      operationId: PostTreasuryOutboundPaymentsIdCancel
      parameters:
        - in: path
          name: id
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.outbound_payment'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Cacel Outbound Payment
      tags:
        - Cancel
        - Treasury
        - Outbound
        - Payments
  /v1/treasury/outbound_transfers:
    get:
      description: >-
        <p>Returns a list of OutboundTransfers sent from the specified
        FinancialAccount.</p>
      operationId: GetTreasuryOutboundTransfers
      parameters:
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: Returns objects associated with this FinancialAccount.
          in: query
          name: financial_account
          required: true
          schema:
            type: string
          style: form
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Only return OutboundTransfers that have the given status:
            `processing`, `canceled`, `failed`, `posted`, or `returned`.
          in: query
          name: status
          required: false
          schema:
            enum:
              - canceled
              - failed
              - posted
              - processing
              - returned
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    description: Details about each object.
                    items:
                      $ref: '#/components/schemas/treasury.outbound_transfer'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: TreasuryOutboundTransfersResourceOutboundTransferList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Outbound Transfers
      tags:
        - Treasury
        - Outbound
        - Transfers
    post:
      description: <p>Creates an OutboundTransfer.</p>
      operationId: PostTreasuryOutboundTransfers
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              destination_payment_method_options:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: Amount (in cents) to be transferred.
                  type: integer
                currency:
                  description: >-
                    Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies).
                  type: string
                description:
                  description: >-
                    An arbitrary string attached to the object. Often useful for
                    displaying to users.
                  maxLength: 5000
                  type: string
                destination_payment_method:
                  description: >-
                    The PaymentMethod to use as the payment instrument for the
                    OutboundTransfer.
                  maxLength: 5000
                  type: string
                destination_payment_method_options:
                  description: Hash describing payment method configuration details.
                  properties:
                    us_bank_account:
                      anyOf:
                        - properties:
                            network:
                              enum:
                                - ach
                                - us_domestic_wire
                              type: string
                          title: payment_method_options_param
                          type: object
                        - enum:
                            - ''
                          type: string
                  title: payment_method_options
                  type: object
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                financial_account:
                  description: The FinancialAccount to pull funds from.
                  type: string
                metadata:
                  additionalProperties:
                    type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
                statement_descriptor:
                  description: >-
                    Statement descriptor to be shown on the receiving end of an
                    OutboundTransfer. Maximum 10 characters for `ach` transfers
                    or 140 characters for `us_domestic_wire` transfers. The
                    default value is "transfer".
                  maxLength: 5000
                  type: string
              required:
                - amount
                - currency
                - financial_account
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.outbound_transfer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Outbound Transfer
      tags:
        - Treasury
        - Outbound
        - Transfers
  '/v1/treasury/outbound_transfers/{outbound_transfer}':
    get:
      description: >-
        <p>Retrieves the details of an existing OutboundTransfer by passing the
        unique OutboundTransfer ID from either the OutboundTransfer creation
        request or OutboundTransfer list.</p>
      operationId: GetTreasuryOutboundTransfersOutboundTransfer
      parameters:
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - in: path
          name: outbound_transfer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.outbound_transfer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Outbound Transfer
      tags:
        - Treasury
        - Outbound
        - Transfers
  '/v1/treasury/outbound_transfers/{outbound_transfer}/cancel':
    post:
      description: >-
        <p>An OutboundTransfer can be canceled if the funds have not yet been
        paid out.</p>
      operationId: PostTreasuryOutboundTransfersOutboundTransferCancel
      parameters:
        - in: path
          name: outbound_transfer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.outbound_transfer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Cancel Outbound Transfer
      tags:
        - Treasury
        - Outbound
        - Transfers
        - Cancel
  /v1/treasury/received_credits:
    get:
      description: <p>Returns a list of ReceivedCredits.</p>
      operationId: GetTreasuryReceivedCredits
      parameters:
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: The FinancialAccount that received the funds.
          in: query
          name: financial_account
          required: true
          schema:
            type: string
          style: form
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: Only return ReceivedCredits described by the flow.
          explode: true
          in: query
          name: linked_flows
          required: false
          schema:
            properties:
              source_flow_type:
                enum:
                  - credit_reversal
                  - other
                  - outbound_payment
                  - payout
                type: string
                x-stripeBypassValidation: true
            required:
              - source_flow_type
            title: linked_flows_param
            type: object
          style: deepObject
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Only return ReceivedCredits that have the given status: `succeeded`
            or `failed`.
          in: query
          name: status
          required: false
          schema:
            enum:
              - failed
              - succeeded
            type: string
            x-stripeBypassValidation: true
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    description: Details about each object.
                    items:
                      $ref: '#/components/schemas/treasury.received_credit'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: TreasuryReceivedCreditsResourceReceivedCreditList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Received Credits
  '/v1/treasury/received_credits/{id}':
    get:
      description: >-
        <p>Retrieves the details of an existing ReceivedCredit by passing the
        unique ReceivedCredit ID from the ReceivedCredit list.</p>
      operationId: GetTreasuryReceivedCreditsId
      parameters:
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - in: path
          name: id
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.received_credit'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Received Credit
      tags:
        - Treasury
        - Received
        - Credits
  /v1/treasury/received_debits:
    get:
      description: <p>Returns a list of ReceivedDebits.</p>
      operationId: GetTreasuryReceivedDebits
      parameters:
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: The FinancialAccount that funds were pulled from.
          in: query
          name: financial_account
          required: true
          schema:
            type: string
          style: form
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Only return ReceivedDebits that have the given status: `succeeded`
            or `failed`.
          in: query
          name: status
          required: false
          schema:
            enum:
              - failed
              - succeeded
            type: string
            x-stripeBypassValidation: true
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    description: Details about each object.
                    items:
                      $ref: '#/components/schemas/treasury.received_debit'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: TreasuryReceivedDebitsResourceReceivedDebitList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Received Debits
      tags:
        - Treasury
        - Received
        - Debits
  '/v1/treasury/received_debits/{id}':
    get:
      description: >-
        <p>Retrieves the details of an existing ReceivedDebit by passing the
        unique ReceivedDebit ID from the ReceivedDebit list</p>
      operationId: GetTreasuryReceivedDebitsId
      parameters:
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - in: path
          name: id
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.received_debit'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Received Debit
      tags:
        - Treasury
        - Received
        - Debits
  /v1/treasury/transaction_entries:
    get:
      description: <p>Retrieves a list of TransactionEntry objects.</p>
      operationId: GetTreasuryTransactionEntries
      parameters:
        - explode: true
          in: query
          name: created
          required: false
          schema:
            anyOf:
              - properties:
                  gt:
                    type: integer
                  gte:
                    type: integer
                  lt:
                    type: integer
                  lte:
                    type: integer
                title: range_query_specs
                type: object
              - type: integer
          style: deepObject
        - explode: true
          in: query
          name: effective_at
          required: false
          schema:
            anyOf:
              - properties:
                  gt:
                    type: integer
                  gte:
                    type: integer
                  lt:
                    type: integer
                  lte:
                    type: integer
                title: range_query_specs
                type: object
              - type: integer
          style: deepObject
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: Returns objects associated with this FinancialAccount.
          in: query
          name: financial_account
          required: true
          schema:
            type: string
          style: form
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            The results are in reverse chronological order by `created` or
            `effective_at`. The default is `created`.
          in: query
          name: order_by
          required: false
          schema:
            enum:
              - created
              - effective_at
            type: string
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Only return TransactionEntries associated with this Transaction.
          in: query
          name: transaction
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    description: Details about each object.
                    items:
                      $ref: '#/components/schemas/treasury.transaction_entry'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    pattern: ^/v1/treasury/transaction_entries
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: TreasuryTransactionsResourceTransactionEntryList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Transaction Entries
      tags:
        - Treasury
        - Transactions
        - Entries
  '/v1/treasury/transaction_entries/{id}':
    get:
      description: <p>Retrieves a TransactionEntry object.</p>
      operationId: GetTreasuryTransactionEntriesId
      parameters:
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - in: path
          name: id
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.transaction_entry'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Transaction Entry
      tags:
        - Treasury
        - Transactions
        - Entries
  /v1/treasury/transactions:
    get:
      description: <p>Retrieves a list of Transaction objects.</p>
      operationId: GetTreasuryTransactions
      parameters:
        - explode: true
          in: query
          name: created
          required: false
          schema:
            anyOf:
              - properties:
                  gt:
                    type: integer
                  gte:
                    type: integer
                  lt:
                    type: integer
                  lte:
                    type: integer
                title: range_query_specs
                type: object
              - type: integer
          style: deepObject
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: Returns objects associated with this FinancialAccount.
          in: query
          name: financial_account
          required: true
          schema:
            type: string
          style: form
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            The results are in reverse chronological order by `created` or
            `posted_at`. The default is `created`.
          in: query
          name: order_by
          required: false
          schema:
            enum:
              - created
              - posted_at
            type: string
            x-stripeBypassValidation: true
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Only return Transactions that have the given status: `open`,
            `posted`, or `void`.
          in: query
          name: status
          required: false
          schema:
            enum:
              - open
              - posted
              - void
            type: string
          style: form
        - description: >-
            A filter for the `status_transitions.posted_at` timestamp. When
            using this filter, `status=posted` and `order_by=posted_at` must
            also be specified.
          explode: true
          in: query
          name: status_transitions
          required: false
          schema:
            properties:
              posted_at:
                anyOf:
                  - properties:
                      gt:
                        type: integer
                      gte:
                        type: integer
                      lt:
                        type: integer
                      lte:
                        type: integer
                    title: range_query_specs
                    type: object
                  - type: integer
            title: status_transition_timestamp_specs
            type: object
          style: deepObject
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    description: Details about each object.
                    items:
                      $ref: '#/components/schemas/treasury.transaction'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: TreasuryTransactionsResourceTransactionList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Transactions
      tags:
        - Treasury
        - Transactions
  '/v1/treasury/transactions/{id}':
    get:
      description: <p>Retrieves the details of an existing Transaction.</p>
      operationId: GetTreasuryTransactionsId
      parameters:
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - in: path
          name: id
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/treasury.transaction'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Transaction
      tags:
        - Treasury
        - Transactions
components:
  schemas:
    error:
      description: An error response from the Stripe API
      properties:
        error:
          $ref: '#/components/schemas/api_errors'
      required:
        - error
      type: object
    treasury.credit_reversal:
      description: >-
        You can reverse some
        [ReceivedCredits](https://stripe.com/docs/api#received_credits)
        depending on their network and source flow. Reversing a ReceivedCredit
        leads to the creation of a new object known as a CreditReversal.
      properties:
        amount:
          description: Amount (in cents) transferred.
          type: integer
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        financial_account:
          description: The FinancialAccount to reverse funds from.
          maxLength: 5000
          type: string
        hosted_regulatory_receipt_url:
          description: >-
            A [hosted transaction
            receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts)
            URL that is provided when money movement is considered regulated
            under Stripe's money transmission licenses.
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          type: object
        network:
          description: The rails used to reverse the funds.
          enum:
            - ach
            - stripe
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - treasury.credit_reversal
          type: string
        received_credit:
          description: The ReceivedCredit being reversed.
          maxLength: 5000
          type: string
        status:
          description: Status of the CreditReversal
          enum:
            - canceled
            - posted
            - processing
          type: string
        status_transitions:
          $ref: >-
            #/components/schemas/treasury_received_credits_resource_status_transitions
        transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/treasury.transaction'
          description: The Transaction associated with this object.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/treasury.transaction'
      required:
        - amount
        - created
        - currency
        - financial_account
        - id
        - livemode
        - metadata
        - network
        - object
        - received_credit
        - status
        - status_transitions
      title: TreasuryReceivedCreditsResourceCreditReversal
      type: object
      x-expandableFields:
        - status_transitions
        - transaction
      x-resourceId: treasury.credit_reversal
    treasury.debit_reversal:
      description: >-
        You can reverse some
        [ReceivedDebits](https://stripe.com/docs/api#received_debits) depending
        on their network and source flow. Reversing a ReceivedDebit leads to the
        creation of a new object known as a DebitReversal.
      properties:
        amount:
          description: Amount (in cents) transferred.
          type: integer
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        financial_account:
          description: The FinancialAccount to reverse funds from.
          maxLength: 5000
          nullable: true
          type: string
        hosted_regulatory_receipt_url:
          description: >-
            A [hosted transaction
            receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts)
            URL that is provided when money movement is considered regulated
            under Stripe's money transmission licenses.
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        linked_flows:
          anyOf:
            - $ref: >-
                #/components/schemas/treasury_received_debits_resource_debit_reversal_linked_flows
          description: Other flows linked to a DebitReversal.
          nullable: true
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          type: object
        network:
          description: The rails used to reverse the funds.
          enum:
            - ach
            - card
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - treasury.debit_reversal
          type: string
        received_debit:
          description: The ReceivedDebit being reversed.
          maxLength: 5000
          type: string
        status:
          description: Status of the DebitReversal
          enum:
            - failed
            - processing
            - succeeded
          type: string
        status_transitions:
          $ref: >-
            #/components/schemas/treasury_received_debits_resource_status_transitions
        transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/treasury.transaction'
          description: The Transaction associated with this object.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/treasury.transaction'
      required:
        - amount
        - created
        - currency
        - id
        - livemode
        - metadata
        - network
        - object
        - received_debit
        - status
        - status_transitions
      title: TreasuryReceivedDebitsResourceDebitReversal
      type: object
      x-expandableFields:
        - linked_flows
        - status_transitions
        - transaction
      x-resourceId: treasury.debit_reversal
    treasury.financial_account:
      description: >-
        Stripe Treasury provides users with a container for money called a
        FinancialAccount that is separate from their Payments balance.

        FinancialAccounts serve as the source and destination of Treasury’s
        money movement APIs.
      properties:
        active_features:
          description: The array of paths to active Features in the Features hash.
          items:
            enum:
              - card_issuing
              - deposit_insurance
              - financial_addresses.aba
              - inbound_transfers.ach
              - intra_stripe_flows
              - outbound_payments.ach
              - outbound_payments.us_domestic_wire
              - outbound_transfers.ach
              - outbound_transfers.us_domestic_wire
              - remote_deposit_capture
            type: string
            x-stripeBypassValidation: true
          type: array
        balance:
          $ref: '#/components/schemas/treasury_financial_accounts_resource_balance'
        country:
          description: >-
            Two-letter country code ([ISO 3166-1
            alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
          maxLength: 5000
          type: string
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        features:
          $ref: '#/components/schemas/treasury.financial_account_features'
        financial_addresses:
          description: The set of credentials that resolve to a FinancialAccount.
          items:
            $ref: >-
              #/components/schemas/treasury_financial_accounts_resource_financial_address
          type: array
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          nullable: true
          type: object
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - treasury.financial_account
          type: string
        pending_features:
          description: The array of paths to pending Features in the Features hash.
          items:
            enum:
              - card_issuing
              - deposit_insurance
              - financial_addresses.aba
              - inbound_transfers.ach
              - intra_stripe_flows
              - outbound_payments.ach
              - outbound_payments.us_domestic_wire
              - outbound_transfers.ach
              - outbound_transfers.us_domestic_wire
              - remote_deposit_capture
            type: string
            x-stripeBypassValidation: true
          type: array
        platform_restrictions:
          anyOf:
            - $ref: >-
                #/components/schemas/treasury_financial_accounts_resource_platform_restrictions
          description: >-
            The set of functionalities that the platform can restrict on the
            FinancialAccount.
          nullable: true
        restricted_features:
          description: The array of paths to restricted Features in the Features hash.
          items:
            enum:
              - card_issuing
              - deposit_insurance
              - financial_addresses.aba
              - inbound_transfers.ach
              - intra_stripe_flows
              - outbound_payments.ach
              - outbound_payments.us_domestic_wire
              - outbound_transfers.ach
              - outbound_transfers.us_domestic_wire
              - remote_deposit_capture
            type: string
            x-stripeBypassValidation: true
          type: array
        status:
          description: The enum specifying what state the account is in.
          enum:
            - closed
            - open
          type: string
          x-stripeBypassValidation: true
        status_details:
          $ref: >-
            #/components/schemas/treasury_financial_accounts_resource_status_details
        supported_currencies:
          description: >-
            The currencies the FinancialAccount can hold a balance in.
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase.
          items:
            type: string
          type: array
      required:
        - balance
        - country
        - created
        - financial_addresses
        - id
        - livemode
        - object
        - status
        - status_details
        - supported_currencies
      title: TreasuryFinancialAccountsResourceFinancialAccount
      type: object
      x-expandableFields:
        - balance
        - features
        - financial_addresses
        - platform_restrictions
        - status_details
      x-resourceId: treasury.financial_account
    treasury.financial_account_features:
      description: >-
        Encodes whether a FinancialAccount has access to a particular Feature,
        with a `status` enum and associated `status_details`.

        Stripe or the platform can control Features via the requested field.
      properties:
        card_issuing:
          $ref: >-
            #/components/schemas/treasury_financial_accounts_resource_toggle_settings
        deposit_insurance:
          $ref: >-
            #/components/schemas/treasury_financial_accounts_resource_toggle_settings
        financial_addresses:
          $ref: >-
            #/components/schemas/treasury_financial_accounts_resource_financial_addresses_features
        inbound_transfers:
          $ref: >-
            #/components/schemas/treasury_financial_accounts_resource_inbound_transfers
        intra_stripe_flows:
          $ref: >-
            #/components/schemas/treasury_financial_accounts_resource_toggle_settings
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - treasury.financial_account_features
          type: string
        outbound_payments:
          $ref: >-
            #/components/schemas/treasury_financial_accounts_resource_outbound_payments
        outbound_transfers:
          $ref: >-
            #/components/schemas/treasury_financial_accounts_resource_outbound_transfers
      required:
        - object
      title: TreasuryFinancialAccountsResourceFinancialAccountFeatures
      type: object
      x-expandableFields:
        - card_issuing
        - deposit_insurance
        - financial_addresses
        - inbound_transfers
        - intra_stripe_flows
        - outbound_payments
        - outbound_transfers
      x-resourceId: treasury.financial_account_features
    treasury.inbound_transfer:
      description: >-
        Use
        [InboundTransfers](https://stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers)
        to add funds to your
        [FinancialAccount](https://stripe.com/docs/api#financial_accounts) via a
        PaymentMethod that is owned by you. The funds will be transferred via an
        ACH debit.
      properties:
        amount:
          description: Amount (in cents) transferred.
          type: integer
        cancelable:
          description: Returns `true` if the InboundTransfer is able to be canceled.
          type: boolean
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          nullable: true
          type: string
        failure_details:
          anyOf:
            - $ref: >-
                #/components/schemas/treasury_inbound_transfers_resource_failure_details
          description: >-
            Details about this InboundTransfer's failure. Only set when status
            is `failed`.
          nullable: true
        financial_account:
          description: The FinancialAccount that received the funds.
          maxLength: 5000
          type: string
        hosted_regulatory_receipt_url:
          description: >-
            A [hosted transaction
            receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts)
            URL that is provided when money movement is considered regulated
            under Stripe's money transmission licenses.
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        linked_flows:
          $ref: >-
            #/components/schemas/treasury_inbound_transfers_resource_inbound_transfer_resource_linked_flows
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          type: object
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - treasury.inbound_transfer
          type: string
        origin_payment_method:
          description: The origin payment method to be debited for an InboundTransfer.
          maxLength: 5000
          type: string
        origin_payment_method_details:
          anyOf:
            - $ref: '#/components/schemas/inbound_transfers'
          description: Details about the PaymentMethod for an InboundTransfer.
          nullable: true
        returned:
          description: >-
            Returns `true` if the funds for an InboundTransfer were returned
            after the InboundTransfer went to the `succeeded` state.
          nullable: true
          type: boolean
        statement_descriptor:
          description: >-
            Statement descriptor shown when funds are debited from the source.
            Not all payment networks support `statement_descriptor`.
          maxLength: 5000
          type: string
        status:
          description: >-
            Status of the InboundTransfer: `processing`, `succeeded`, `failed`,
            and `canceled`. An InboundTransfer is `processing` if it is created
            and pending. The status changes to `succeeded` once the funds have
            been "confirmed" and a `transaction` is created and posted. The
            status changes to `failed` if the transfer fails.
          enum:
            - canceled
            - failed
            - processing
            - succeeded
          type: string
        status_transitions:
          $ref: >-
            #/components/schemas/treasury_inbound_transfers_resource_inbound_transfer_resource_status_transitions
        transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/treasury.transaction'
          description: The Transaction associated with this object.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/treasury.transaction'
      required:
        - amount
        - cancelable
        - created
        - currency
        - financial_account
        - id
        - linked_flows
        - livemode
        - metadata
        - object
        - origin_payment_method
        - statement_descriptor
        - status
        - status_transitions
      title: TreasuryInboundTransfersResourceInboundTransfer
      type: object
      x-expandableFields:
        - failure_details
        - linked_flows
        - origin_payment_method_details
        - status_transitions
        - transaction
      x-resourceId: treasury.inbound_transfer
    treasury.outbound_payment:
      description: >-
        Use OutboundPayments to send funds to another party's external bank
        account or
        [FinancialAccount](https://stripe.com/docs/api#financial_accounts). To
        send money to an account belonging to the same user, use an
        [OutboundTransfer](https://stripe.com/docs/api#outbound_transfers).


        Simulate OutboundPayment state changes with the
        `/v1/test_helpers/treasury/outbound_payments` endpoints. These methods
        can only be called on test mode objects.
      properties:
        amount:
          description: Amount (in cents) transferred.
          type: integer
        cancelable:
          description: 'Returns `true` if the object can be canceled, and `false` otherwise.'
          type: boolean
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        customer:
          description: >-
            ID of the [customer](https://stripe.com/docs/api/customers) to whom
            an OutboundPayment is sent.
          maxLength: 5000
          nullable: true
          type: string
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          nullable: true
          type: string
        destination_payment_method:
          description: >-
            The PaymentMethod via which an OutboundPayment is sent. This field
            can be empty if the OutboundPayment was created using
            `destination_payment_method_data`.
          maxLength: 5000
          nullable: true
          type: string
        destination_payment_method_details:
          anyOf:
            - $ref: '#/components/schemas/outbound_payments_payment_method_details'
          description: Details about the PaymentMethod for an OutboundPayment.
          nullable: true
        end_user_details:
          anyOf:
            - $ref: >-
                #/components/schemas/treasury_outbound_payments_resource_outbound_payment_resource_end_user_details
          description: Details about the end user.
          nullable: true
        expected_arrival_date:
          description: >-
            The date when funds are expected to arrive in the destination
            account.
          format: unix-time
          type: integer
        financial_account:
          description: The FinancialAccount that funds were pulled from.
          maxLength: 5000
          type: string
        hosted_regulatory_receipt_url:
          description: >-
            A [hosted transaction
            receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts)
            URL that is provided when money movement is considered regulated
            under Stripe's money transmission licenses.
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          type: object
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - treasury.outbound_payment
          type: string
        returned_details:
          anyOf:
            - $ref: >-
                #/components/schemas/treasury_outbound_payments_resource_returned_status
          description: >-
            Details about a returned OutboundPayment. Only set when the status
            is `returned`.
          nullable: true
        statement_descriptor:
          description: >-
            The description that appears on the receiving end for an
            OutboundPayment (for example, bank statement for external bank
            transfer).
          maxLength: 5000
          type: string
        status:
          description: >-
            Current status of the OutboundPayment: `processing`, `failed`,
            `posted`, `returned`, `canceled`. An OutboundPayment is `processing`
            if it has been created and is pending. The status changes to
            `posted` once the OutboundPayment has been "confirmed" and funds
            have left the account, or to `failed` or `canceled`. If an
            OutboundPayment fails to arrive at its destination, its status will
            change to `returned`.
          enum:
            - canceled
            - failed
            - posted
            - processing
            - returned
          type: string
        status_transitions:
          $ref: >-
            #/components/schemas/treasury_outbound_payments_resource_outbound_payment_resource_status_transitions
        transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/treasury.transaction'
          description: The Transaction associated with this object.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/treasury.transaction'
      required:
        - amount
        - cancelable
        - created
        - currency
        - expected_arrival_date
        - financial_account
        - id
        - livemode
        - metadata
        - object
        - statement_descriptor
        - status
        - status_transitions
        - transaction
      title: TreasuryOutboundPaymentsResourceOutboundPayment
      type: object
      x-expandableFields:
        - destination_payment_method_details
        - end_user_details
        - returned_details
        - status_transitions
        - transaction
      x-resourceId: treasury.outbound_payment
    treasury.outbound_transfer:
      description: >-
        Use OutboundTransfers to transfer funds from a
        [FinancialAccount](https://stripe.com/docs/api#financial_accounts) to a
        PaymentMethod belonging to the same entity. To send funds to a different
        party, use
        [OutboundPayments](https://stripe.com/docs/api#outbound_payments)
        instead. You can send funds over ACH rails or through a domestic wire
        transfer to a user's own external bank account.


        Simulate OutboundTransfer state changes with the
        `/v1/test_helpers/treasury/outbound_transfers` endpoints. These methods
        can only be called on test mode objects.
      properties:
        amount:
          description: Amount (in cents) transferred.
          type: integer
        cancelable:
          description: 'Returns `true` if the object can be canceled, and `false` otherwise.'
          type: boolean
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          nullable: true
          type: string
        destination_payment_method:
          description: >-
            The PaymentMethod used as the payment instrument for an
            OutboundTransfer.
          maxLength: 5000
          nullable: true
          type: string
        destination_payment_method_details:
          $ref: '#/components/schemas/outbound_transfers_payment_method_details'
        expected_arrival_date:
          description: >-
            The date when funds are expected to arrive in the destination
            account.
          format: unix-time
          type: integer
        financial_account:
          description: The FinancialAccount that funds were pulled from.
          maxLength: 5000
          type: string
        hosted_regulatory_receipt_url:
          description: >-
            A [hosted transaction
            receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts)
            URL that is provided when money movement is considered regulated
            under Stripe's money transmission licenses.
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          type: object
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - treasury.outbound_transfer
          type: string
        returned_details:
          anyOf:
            - $ref: >-
                #/components/schemas/treasury_outbound_transfers_resource_returned_details
          description: >-
            Details about a returned OutboundTransfer. Only set when the status
            is `returned`.
          nullable: true
        statement_descriptor:
          description: >-
            Information about the OutboundTransfer to be sent to the recipient
            account.
          maxLength: 5000
          type: string
        status:
          description: >-
            Current status of the OutboundTransfer: `processing`, `failed`,
            `canceled`, `posted`, `returned`. An OutboundTransfer is
            `processing` if it has been created and is pending. The status
            changes to `posted` once the OutboundTransfer has been "confirmed"
            and funds have left the account, or to `failed` or `canceled`. If an
            OutboundTransfer fails to arrive at its destination, its status will
            change to `returned`.
          enum:
            - canceled
            - failed
            - posted
            - processing
            - returned
          type: string
        status_transitions:
          $ref: >-
            #/components/schemas/treasury_outbound_transfers_resource_status_transitions
        transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/treasury.transaction'
          description: The Transaction associated with this object.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/treasury.transaction'
      required:
        - amount
        - cancelable
        - created
        - currency
        - destination_payment_method_details
        - expected_arrival_date
        - financial_account
        - id
        - livemode
        - metadata
        - object
        - statement_descriptor
        - status
        - status_transitions
        - transaction
      title: TreasuryOutboundTransfersResourceOutboundTransfer
      type: object
      x-expandableFields:
        - destination_payment_method_details
        - returned_details
        - status_transitions
        - transaction
      x-resourceId: treasury.outbound_transfer
    treasury.received_credit:
      description: >-
        ReceivedCredits represent funds sent to a
        [FinancialAccount](https://stripe.com/docs/api#financial_accounts) (for
        example, via ACH or wire). These money movements are not initiated from
        the FinancialAccount.
      properties:
        amount:
          description: Amount (in cents) transferred.
          type: integer
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          type: string
        failure_code:
          description: >-
            Reason for the failure. A ReceivedCredit might fail because the
            receiving FinancialAccount is closed or frozen.
          enum:
            - account_closed
            - account_frozen
            - other
          nullable: true
          type: string
          x-stripeBypassValidation: true
        financial_account:
          description: The FinancialAccount that received the funds.
          maxLength: 5000
          nullable: true
          type: string
        hosted_regulatory_receipt_url:
          description: >-
            A [hosted transaction
            receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts)
            URL that is provided when money movement is considered regulated
            under Stripe's money transmission licenses.
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        initiating_payment_method_details:
          $ref: >-
            #/components/schemas/treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_details
        linked_flows:
          $ref: '#/components/schemas/treasury_received_credits_resource_linked_flows'
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        network:
          description: The rails used to send the funds.
          enum:
            - ach
            - card
            - stripe
            - us_domestic_wire
          type: string
          x-stripeBypassValidation: true
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - treasury.received_credit
          type: string
        reversal_details:
          anyOf:
            - $ref: >-
                #/components/schemas/treasury_received_credits_resource_reversal_details
          description: Details describing when a ReceivedCredit may be reversed.
          nullable: true
        status:
          description: >-
            Status of the ReceivedCredit. ReceivedCredits are created either
            `succeeded` (approved) or `failed` (declined). If a ReceivedCredit
            is declined, the failure reason can be found in the `failure_code`
            field.
          enum:
            - failed
            - succeeded
          type: string
          x-stripeBypassValidation: true
        transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/treasury.transaction'
          description: The Transaction associated with this object.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/treasury.transaction'
      required:
        - amount
        - created
        - currency
        - description
        - id
        - initiating_payment_method_details
        - linked_flows
        - livemode
        - network
        - object
        - status
      title: TreasuryReceivedCreditsResourceReceivedCredit
      type: object
      x-expandableFields:
        - initiating_payment_method_details
        - linked_flows
        - reversal_details
        - transaction
      x-resourceId: treasury.received_credit
    treasury.received_debit:
      description: >-
        ReceivedDebits represent funds pulled from a
        [FinancialAccount](https://stripe.com/docs/api#financial_accounts).
        These are not initiated from the FinancialAccount.
      properties:
        amount:
          description: Amount (in cents) transferred.
          type: integer
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          type: string
        failure_code:
          description: >-
            Reason for the failure. A ReceivedDebit might fail because the
            FinancialAccount doesn't have sufficient funds, is closed, or is
            frozen.
          enum:
            - account_closed
            - account_frozen
            - insufficient_funds
            - other
          nullable: true
          type: string
        financial_account:
          description: The FinancialAccount that funds were pulled from.
          maxLength: 5000
          nullable: true
          type: string
        hosted_regulatory_receipt_url:
          description: >-
            A [hosted transaction
            receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts)
            URL that is provided when money movement is considered regulated
            under Stripe's money transmission licenses.
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        initiating_payment_method_details:
          $ref: >-
            #/components/schemas/treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_details
        linked_flows:
          $ref: '#/components/schemas/treasury_received_debits_resource_linked_flows'
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        network:
          description: The network used for the ReceivedDebit.
          enum:
            - ach
            - card
            - stripe
          type: string
          x-stripeBypassValidation: true
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - treasury.received_debit
          type: string
        reversal_details:
          anyOf:
            - $ref: >-
                #/components/schemas/treasury_received_debits_resource_reversal_details
          description: Details describing when a ReceivedDebit might be reversed.
          nullable: true
        status:
          description: >-
            Status of the ReceivedDebit. ReceivedDebits are created with a
            status of either `succeeded` (approved) or `failed` (declined). The
            failure reason can be found under the `failure_code`.
          enum:
            - failed
            - succeeded
          type: string
          x-stripeBypassValidation: true
        transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/treasury.transaction'
          description: The Transaction associated with this object.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/treasury.transaction'
      required:
        - amount
        - created
        - currency
        - description
        - id
        - linked_flows
        - livemode
        - network
        - object
        - status
      title: TreasuryReceivedDebitsResourceReceivedDebit
      type: object
      x-expandableFields:
        - initiating_payment_method_details
        - linked_flows
        - reversal_details
        - transaction
      x-resourceId: treasury.received_debit
    treasury.transaction_entry:
      description: >-
        TransactionEntries represent individual units of money movements within
        a single [Transaction](https://stripe.com/docs/api#transactions).
      properties:
        balance_impact:
          $ref: '#/components/schemas/treasury_transactions_resource_balance_impact'
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        effective_at:
          description: >-
            When the TransactionEntry will impact the FinancialAccount's
            balance.
          format: unix-time
          type: integer
        financial_account:
          description: The FinancialAccount associated with this object.
          maxLength: 5000
          type: string
        flow:
          description: Token of the flow associated with the TransactionEntry.
          maxLength: 5000
          nullable: true
          type: string
        flow_details:
          anyOf:
            - $ref: '#/components/schemas/treasury_transactions_resource_flow_details'
          description: Details of the flow associated with the TransactionEntry.
          nullable: true
        flow_type:
          description: Type of the flow associated with the TransactionEntry.
          enum:
            - credit_reversal
            - debit_reversal
            - inbound_transfer
            - issuing_authorization
            - other
            - outbound_payment
            - outbound_transfer
            - received_credit
            - received_debit
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - treasury.transaction_entry
          type: string
        transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/treasury.transaction'
          description: The Transaction associated with this object.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/treasury.transaction'
        type:
          description: The specific money movement that generated the TransactionEntry.
          enum:
            - credit_reversal
            - credit_reversal_posting
            - debit_reversal
            - inbound_transfer
            - inbound_transfer_return
            - issuing_authorization_hold
            - issuing_authorization_release
            - other
            - outbound_payment
            - outbound_payment_cancellation
            - outbound_payment_failure
            - outbound_payment_posting
            - outbound_payment_return
            - outbound_transfer
            - outbound_transfer_cancellation
            - outbound_transfer_failure
            - outbound_transfer_posting
            - outbound_transfer_return
            - received_credit
            - received_debit
          type: string
      required:
        - balance_impact
        - created
        - currency
        - effective_at
        - financial_account
        - flow_type
        - id
        - livemode
        - object
        - transaction
        - type
      title: TreasuryTransactionsResourceTransactionEntry
      type: object
      x-expandableFields:
        - balance_impact
        - flow_details
        - transaction
      x-resourceId: treasury.transaction_entry
    treasury.transaction:
      description: >-
        Transactions represent changes to a
        [FinancialAccount's](https://stripe.com/docs/api#financial_accounts)
        balance.
      properties:
        amount:
          description: Amount (in cents) transferred.
          type: integer
        balance_impact:
          $ref: '#/components/schemas/treasury_transactions_resource_balance_impact'
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          type: string
        entries:
          description: >-
            A list of TransactionEntries that are part of this Transaction. This
            cannot be expanded in any list endpoints.
          nullable: true
          properties:
            data:
              description: Details about each object.
              items:
                $ref: '#/components/schemas/treasury.transaction_entry'
              type: array
            has_more:
              description: >-
                True if this list has another page of items after this one that
                can be fetched.
              type: boolean
            object:
              description: >-
                String representing the object's type. Objects of the same type
                share the same value. Always has the value `list`.
              enum:
                - list
              type: string
            url:
              description: The URL where this list can be accessed.
              maxLength: 5000
              pattern: ^/v1/treasury/transaction_entries
              type: string
          required:
            - data
            - has_more
            - object
            - url
          title: TreasuryTransactionsResourceTransactionEntryList
          type: object
          x-expandableFields:
            - data
        financial_account:
          description: The FinancialAccount associated with this object.
          maxLength: 5000
          type: string
        flow:
          description: ID of the flow that created the Transaction.
          maxLength: 5000
          nullable: true
          type: string
        flow_details:
          anyOf:
            - $ref: '#/components/schemas/treasury_transactions_resource_flow_details'
          description: Details of the flow that created the Transaction.
          nullable: true
        flow_type:
          description: Type of the flow that created the Transaction.
          enum:
            - credit_reversal
            - debit_reversal
            - inbound_transfer
            - issuing_authorization
            - other
            - outbound_payment
            - outbound_transfer
            - received_credit
            - received_debit
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - treasury.transaction
          type: string
        status:
          description: Status of the Transaction.
          enum:
            - open
            - posted
            - void
          type: string
        status_transitions:
          $ref: >-
            #/components/schemas/treasury_transactions_resource_abstract_transaction_resource_status_transitions
      required:
        - amount
        - balance_impact
        - created
        - currency
        - description
        - financial_account
        - flow_type
        - id
        - livemode
        - object
        - status
        - status_transitions
      title: TreasuryTransactionsResourceTransaction
      type: object
      x-expandableFields:
        - balance_impact
        - entries
        - flow_details
        - status_transitions
      x-resourceId: treasury.transaction
  securitySchemes:
    basicAuth:
      description: >-
        Basic HTTP authentication. Allowed headers-- Authorization: Basic
        <api_key> | Authorization: Basic <base64 hash of `api_key:`>
      scheme: basic
      type: http
    bearerAuth:
      bearerFormat: auth-scheme
      description: >-
        Bearer HTTP authentication. Allowed headers-- Authorization: Bearer
        <api_key>
      scheme: bearer
      type: http
tags:
  - name: Treasury
    description: Needs a description.
  - name: Credits
    description: Needs a description.
  - name: Reversals
    description: Needs a description.
  - name: Debit
    description: Needs a description.
  - name: Financial
    description: Needs a description.
  - name: Accounts
    description: Needs a description.
  - name: Features
    description: Needs a description.
  - name: Inbound
    description: Needs a description.
  - name: Transfers
    description: Needs a description.
  - name: Cancel
    description: Needs a description.
  - name: Outbound
    description: Needs a description.
  - name: Payments
    description: Needs a description.
  - name: Received
    description: Needs a description.
  - name: Debits
    description: Needs a description.
  - name: Transactiosn
    description: Needs a description.
  - name: Entries
    description: Needs a description.
  - name: Transactions
    description: Needs a description.
---