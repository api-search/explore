---
openapi: 3.0.0
info:
  title: Stripe Accounts API
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
  /v1/account:
    get:
      description: <p>Retrieves the details of an account.</p>
      operationId: GetAccount
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
                $ref: '#/components/schemas/account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Account
      tags:
        - Accounts
  /v1/account_links:
    post:
      description: >-
        <p>Creates an AccountLink object that includes a single-use Stripe URL
        that the platform can redirect their user to in order to take them
        through the Connect Onboarding flow.</p>
      operationId: PostAccountLinks
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
                account:
                  description: The identifier of the account to create an account link for.
                  maxLength: 5000
                  type: string
                collect:
                  description: >-
                    Which information the platform needs to collect from the
                    user. One of `currently_due` or `eventually_due`. Default is
                    `currently_due`.
                  enum:
                    - currently_due
                    - eventually_due
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                refresh_url:
                  description: >-
                    The URL the user will be redirected to if the account link
                    is expired, has been previously-visited, or is otherwise
                    invalid. The URL you specify should attempt to generate a
                    new account link with the same parameters used to create the
                    original account link, then redirect the user to the new
                    account link's URL so they can continue with Connect
                    Onboarding. If a new account link cannot be generated or the
                    redirect fails you should display a useful error to the
                    user.
                  type: string
                return_url:
                  description: >-
                    The URL that the user will be redirected to upon leaving or
                    completing the linked flow.
                  type: string
                type:
                  description: >-
                    The type of account link the user is requesting. Possible
                    values are `account_onboarding` or `account_update`.
                  enum:
                    - account_onboarding
                    - account_update
                  type: string
                  x-stripeBypassValidation: true
              required:
                - account
                - type
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/account_link'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Account Link
      tags:
        - Accounts
        - Links
  /v1/account_sessions:
    post:
      description: >-
        <p>Creates a AccountSession object that includes a single-use token that
        the platform can use on their front-end to grant client-side API
        access.</p>
      operationId: PostAccountSessions
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              components:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                account:
                  description: >-
                    The identifier of the account to create an Account Session
                    for.
                  type: string
                components:
                  description: >-
                    Each key of the dictionary represents an embedded component,
                    and each embedded component maps to its configuration (e.g.
                    whether it has been enabled or not).
                  properties:
                    account_onboarding:
                      properties:
                        enabled:
                          type: boolean
                        features:
                          properties: {}
                          title: base_features_param
                          type: object
                      required:
                        - enabled
                      title: base_config_param
                      type: object
                    payment_details:
                      properties:
                        enabled:
                          type: boolean
                        features:
                          properties:
                            capture_payments:
                              type: boolean
                            dispute_management:
                              type: boolean
                            refund_management:
                              type: boolean
                          title: payments_features_param
                          type: object
                      required:
                        - enabled
                      title: payments_config_param
                      type: object
                    payments:
                      properties:
                        enabled:
                          type: boolean
                        features:
                          properties:
                            capture_payments:
                              type: boolean
                            dispute_management:
                              type: boolean
                            refund_management:
                              type: boolean
                          title: payments_features_param
                          type: object
                      required:
                        - enabled
                      title: payments_config_param
                      type: object
                    payouts:
                      properties:
                        enabled:
                          type: boolean
                        features:
                          properties:
                            edit_payout_schedule:
                              type: boolean
                            instant_payouts:
                              type: boolean
                            standard_payouts:
                              type: boolean
                          title: payouts_features_param
                          type: object
                      required:
                        - enabled
                      title: payouts_config_param
                      type: object
                  title: account_session_create_components_param
                  type: object
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
              required:
                - account
                - components
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/account_session'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Account Sessions
      tags:
        - Accounts
        - Sessions
  /v1/accounts:
    get:
      description: >-
        <p>Returns a list of accounts connected to your platform via <a
        href="/docs/connect">Connect</a>. If you’re not a platform, the list is
        empty.</p>
      operationId: GetAccounts
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
                      $ref: '#/components/schemas/account'
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
                    pattern: ^/v1/accounts
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: AccountList
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
      summary: Retrieve Accounts
      tags:
        - Accounts
    post:
      description: >-
        <p>With <a href="/docs/connect">Connect</a>, you can create Stripe
        accounts for your users.

        To do this, you’ll first need to <a
        href="https://dashboard.stripe.com/account/applications/settings">register
        your platform</a>.</p>


        <p>If you’ve already collected information for your connected accounts,
        you <a href="/docs/connect/best-practices#onboarding">can prefill that
        information</a> when

        creating the account. Connect Onboarding won’t ask for the prefilled
        information during account onboarding.

        You can prefill any information on the account.</p>
      operationId: PostAccounts
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              bank_account:
                explode: true
                style: deepObject
              business_profile:
                explode: true
                style: deepObject
              capabilities:
                explode: true
                style: deepObject
              company:
                explode: true
                style: deepObject
              documents:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              individual:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              settings:
                explode: true
                style: deepObject
              tos_acceptance:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                account_token:
                  description: >-
                    An [account
                    token](https://stripe.com/docs/api#create_account_token),
                    used to securely provide details to the account.
                  maxLength: 5000
                  type: string
                bank_account:
                  anyOf:
                    - properties:
                        account_holder_name:
                          maxLength: 5000
                          type: string
                        account_holder_type:
                          enum:
                            - company
                            - individual
                          maxLength: 5000
                          type: string
                        account_number:
                          maxLength: 5000
                          type: string
                        account_type:
                          enum:
                            - checking
                            - futsu
                            - savings
                            - toza
                          maxLength: 5000
                          type: string
                        country:
                          maxLength: 5000
                          type: string
                        currency:
                          type: string
                        documents:
                          properties:
                            bank_account_ownership_verification:
                              properties:
                                files:
                                  items:
                                    maxLength: 500
                                    type: string
                                  type: array
                              title: documents_param
                              type: object
                          title: external_account_documents_param
                          type: object
                        object:
                          enum:
                            - bank_account
                          maxLength: 5000
                          type: string
                        routing_number:
                          maxLength: 5000
                          type: string
                      required:
                        - account_number
                        - country
                      title: external_account_payout_bank_account
                      type: object
                    - maxLength: 5000
                      type: string
                  description: >-
                    Either a token, like the ones returned by
                    [Stripe.js](https://stripe.com/docs/js), or a dictionary
                    containing a user's bank account details.
                business_profile:
                  description: Business information about the account.
                  properties:
                    mcc:
                      maxLength: 4
                      type: string
                    monthly_estimated_revenue:
                      properties:
                        amount:
                          type: integer
                        currency:
                          type: string
                      required:
                        - amount
                        - currency
                      title: monthly_estimated_revenue_specs
                      type: object
                    name:
                      maxLength: 5000
                      type: string
                    product_description:
                      maxLength: 40000
                      type: string
                    support_address:
                      properties:
                        city:
                          maxLength: 100
                          type: string
                        country:
                          maxLength: 5000
                          type: string
                        line1:
                          maxLength: 200
                          type: string
                        line2:
                          maxLength: 200
                          type: string
                        postal_code:
                          maxLength: 5000
                          type: string
                        state:
                          maxLength: 5000
                          type: string
                      title: address_specs
                      type: object
                    support_email:
                      type: string
                    support_phone:
                      maxLength: 5000
                      type: string
                    support_url:
                      anyOf:
                        - type: string
                        - enum:
                            - ''
                          type: string
                    url:
                      type: string
                  title: business_profile_specs
                  type: object
                business_type:
                  description: The business type.
                  enum:
                    - company
                    - government_entity
                    - individual
                    - non_profit
                  type: string
                  x-stripeBypassValidation: true
                capabilities:
                  description: >-
                    Each key of the dictionary represents a capability, and each
                    capability maps to its settings (e.g. whether it has been
                    requested or not). Each capability will be inactive until
                    you have provided its specific requirements and Stripe has
                    verified them. An account may have some of its requested
                    capabilities be active and some be inactive.
                  properties:
                    acss_debit_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    affirm_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    afterpay_clearpay_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    au_becs_debit_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    bacs_debit_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    bancontact_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    bank_transfer_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    blik_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    boleto_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    card_issuing:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    card_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    cartes_bancaires_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    cashapp_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    eps_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    fpx_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    giropay_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    grabpay_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    ideal_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    india_international_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    jcb_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    klarna_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    konbini_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    legacy_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    link_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    oxxo_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    p24_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    paynow_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    promptpay_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    revolut_pay_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    sepa_debit_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    sofort_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    tax_reporting_us_1099_k:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    tax_reporting_us_1099_misc:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    transfers:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    treasury:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    us_bank_account_ach_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    zip_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                  title: capabilities_param
                  type: object
                company:
                  description: >-
                    Information about the company or business. This field is
                    available for any `business_type`.
                  properties:
                    address:
                      properties:
                        city:
                          maxLength: 100
                          type: string
                        country:
                          maxLength: 5000
                          type: string
                        line1:
                          maxLength: 200
                          type: string
                        line2:
                          maxLength: 200
                          type: string
                        postal_code:
                          maxLength: 5000
                          type: string
                        state:
                          maxLength: 5000
                          type: string
                      title: address_specs
                      type: object
                    address_kana:
                      properties:
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
                        town:
                          maxLength: 5000
                          type: string
                      title: japan_address_kana_specs
                      type: object
                    address_kanji:
                      properties:
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
                        town:
                          maxLength: 5000
                          type: string
                      title: japan_address_kanji_specs
                      type: object
                    directors_provided:
                      type: boolean
                    executives_provided:
                      type: boolean
                    export_license_id:
                      maxLength: 5000
                      type: string
                    export_purpose_code:
                      maxLength: 5000
                      type: string
                    name:
                      maxLength: 100
                      type: string
                    name_kana:
                      maxLength: 100
                      type: string
                    name_kanji:
                      maxLength: 100
                      type: string
                    owners_provided:
                      type: boolean
                    ownership_declaration:
                      properties:
                        date:
                          format: unix-time
                          type: integer
                        ip:
                          type: string
                        user_agent:
                          maxLength: 5000
                          type: string
                      title: company_ownership_declaration
                      type: object
                    phone:
                      maxLength: 5000
                      type: string
                    registration_number:
                      maxLength: 5000
                      type: string
                    structure:
                      enum:
                        - ''
                        - free_zone_establishment
                        - free_zone_llc
                        - government_instrumentality
                        - governmental_unit
                        - incorporated_non_profit
                        - incorporated_partnership
                        - limited_liability_partnership
                        - llc
                        - multi_member_llc
                        - private_company
                        - private_corporation
                        - private_partnership
                        - public_company
                        - public_corporation
                        - public_partnership
                        - single_member_llc
                        - sole_establishment
                        - sole_proprietorship
                        - tax_exempt_government_instrumentality
                        - unincorporated_association
                        - unincorporated_non_profit
                        - unincorporated_partnership
                      type: string
                      x-stripeBypassValidation: true
                    tax_id:
                      maxLength: 5000
                      type: string
                    tax_id_registrar:
                      maxLength: 5000
                      type: string
                    vat_id:
                      maxLength: 5000
                      type: string
                    verification:
                      properties:
                        document:
                          properties:
                            back:
                              maxLength: 500
                              type: string
                            front:
                              maxLength: 500
                              type: string
                          title: verification_document_specs
                          type: object
                      title: verification_specs
                      type: object
                  title: company_specs
                  type: object
                country:
                  description: >-
                    The country in which the account holder resides, or in which
                    the business is legally established. This should be an ISO
                    3166-1 alpha-2 country code. For example, if you are in the
                    United States and the business for which you're creating an
                    account is legally represented in Canada, you would use `CA`
                    as the country for the account being created. Available
                    countries include [Stripe's global
                    markets](https://stripe.com/global) as well as countries
                    where [cross-border
                    payouts](https://stripe.com/docs/connect/cross-border-payouts)
                    are supported.
                  maxLength: 5000
                  type: string
                default_currency:
                  description: >-
                    Three-letter ISO currency code representing the default
                    currency for the account. This must be a currency that
                    [Stripe supports in the account's
                    country](https://stripe.com/docs/payouts).
                  type: string
                documents:
                  description: >-
                    Documents that may be submitted to satisfy various
                    informational requests.
                  properties:
                    bank_account_ownership_verification:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                    company_license:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                    company_memorandum_of_association:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                    company_ministerial_decree:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                    company_registration_verification:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                    company_tax_id_verification:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                    proof_of_registration:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                  title: documents_specs
                  type: object
                email:
                  description: >-
                    The email address of the account holder. This is only to
                    make the account easier to identify to you. Stripe only
                    emails Custom accounts with your consent.
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                external_account:
                  description: >-
                    A card or bank account to attach to the account for
                    receiving
                    [payouts](https://stripe.com/docs/connect/bank-debit-card-payouts)
                    (you won’t be able to use it for top-ups). You can provide
                    either a token, like the ones returned by
                    [Stripe.js](https://stripe.com/docs/js), or a dictionary, as
                    documented in the `external_account` parameter for [bank
                    account](https://stripe.com/docs/api#account_create_bank_account)
                    creation. <br><br>By default, providing an external account
                    sets it as the new default external account for its
                    currency, and deletes the old default if one exists. To add
                    additional external accounts without replacing the existing
                    default for the currency, use the [bank
                    account](https://stripe.com/docs/api#account_create_bank_account)
                    or [card
                    creation](https://stripe.com/docs/api#account_create_card)
                    APIs.
                  maxLength: 5000
                  type: string
                  x-stripeBypassValidation: true
                individual:
                  description: >-
                    Information about the person represented by the account.
                    This field is null unless `business_type` is set to
                    `individual`.
                  properties:
                    address:
                      properties:
                        city:
                          maxLength: 100
                          type: string
                        country:
                          maxLength: 5000
                          type: string
                        line1:
                          maxLength: 200
                          type: string
                        line2:
                          maxLength: 200
                          type: string
                        postal_code:
                          maxLength: 5000
                          type: string
                        state:
                          maxLength: 5000
                          type: string
                      title: address_specs
                      type: object
                    address_kana:
                      properties:
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
                        town:
                          maxLength: 5000
                          type: string
                      title: japan_address_kana_specs
                      type: object
                    address_kanji:
                      properties:
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
                        town:
                          maxLength: 5000
                          type: string
                      title: japan_address_kanji_specs
                      type: object
                    dob:
                      anyOf:
                        - properties:
                            day:
                              type: integer
                            month:
                              type: integer
                            year:
                              type: integer
                          required:
                            - day
                            - month
                            - year
                          title: date_of_birth_specs
                          type: object
                        - enum:
                            - ''
                          type: string
                    email:
                      type: string
                    first_name:
                      maxLength: 100
                      type: string
                    first_name_kana:
                      maxLength: 5000
                      type: string
                    first_name_kanji:
                      maxLength: 5000
                      type: string
                    full_name_aliases:
                      anyOf:
                        - items:
                            maxLength: 300
                            type: string
                          type: array
                        - enum:
                            - ''
                          type: string
                    gender:
                      type: string
                    id_number:
                      maxLength: 5000
                      type: string
                    id_number_secondary:
                      maxLength: 5000
                      type: string
                    last_name:
                      maxLength: 100
                      type: string
                    last_name_kana:
                      maxLength: 5000
                      type: string
                    last_name_kanji:
                      maxLength: 5000
                      type: string
                    maiden_name:
                      maxLength: 5000
                      type: string
                    metadata:
                      anyOf:
                        - additionalProperties:
                            type: string
                          type: object
                        - enum:
                            - ''
                          type: string
                    phone:
                      type: string
                    political_exposure:
                      enum:
                        - existing
                        - none
                      type: string
                    registered_address:
                      properties:
                        city:
                          maxLength: 100
                          type: string
                        country:
                          maxLength: 5000
                          type: string
                        line1:
                          maxLength: 200
                          type: string
                        line2:
                          maxLength: 200
                          type: string
                        postal_code:
                          maxLength: 5000
                          type: string
                        state:
                          maxLength: 5000
                          type: string
                      title: address_specs
                      type: object
                    ssn_last_4:
                      maxLength: 5000
                      type: string
                    verification:
                      properties:
                        additional_document:
                          properties:
                            back:
                              maxLength: 500
                              type: string
                            front:
                              maxLength: 500
                              type: string
                          title: person_verification_document_specs
                          type: object
                        document:
                          properties:
                            back:
                              maxLength: 500
                              type: string
                            front:
                              maxLength: 500
                              type: string
                          title: person_verification_document_specs
                          type: object
                      title: person_verification_specs
                      type: object
                  title: individual_specs
                  type: object
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                settings:
                  description: >-
                    Options for customizing how the account functions within
                    Stripe.
                  properties:
                    bacs_debit_payments:
                      properties:
                        display_name:
                          type: string
                      title: bacs_debit_payments_specs
                      type: object
                    branding:
                      properties:
                        icon:
                          maxLength: 5000
                          type: string
                        logo:
                          maxLength: 5000
                          type: string
                        primary_color:
                          maxLength: 5000
                          type: string
                        secondary_color:
                          maxLength: 5000
                          type: string
                      title: branding_settings_specs
                      type: object
                    card_issuing:
                      properties:
                        tos_acceptance:
                          properties:
                            date:
                              format: unix-time
                              type: integer
                            ip:
                              type: string
                            user_agent:
                              anyOf:
                                - maxLength: 5000
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                          title: settings_terms_of_service_specs
                          type: object
                      title: card_issuing_settings_specs
                      type: object
                    card_payments:
                      properties:
                        decline_on:
                          properties:
                            avs_failure:
                              type: boolean
                            cvc_failure:
                              type: boolean
                          title: decline_charge_on_specs
                          type: object
                        statement_descriptor_prefix:
                          maxLength: 10
                          type: string
                        statement_descriptor_prefix_kana:
                          anyOf:
                            - maxLength: 10
                              type: string
                            - enum:
                                - ''
                              type: string
                        statement_descriptor_prefix_kanji:
                          anyOf:
                            - maxLength: 10
                              type: string
                            - enum:
                                - ''
                              type: string
                      title: card_payments_settings_specs
                      type: object
                    payments:
                      properties:
                        statement_descriptor:
                          maxLength: 22
                          type: string
                        statement_descriptor_kana:
                          maxLength: 22
                          type: string
                        statement_descriptor_kanji:
                          maxLength: 22
                          type: string
                      title: payments_settings_specs
                      type: object
                    payouts:
                      properties:
                        debit_negative_balances:
                          type: boolean
                        schedule:
                          properties:
                            delay_days:
                              anyOf:
                                - enum:
                                    - minimum
                                  maxLength: 5000
                                  type: string
                                - type: integer
                            interval:
                              enum:
                                - daily
                                - manual
                                - monthly
                                - weekly
                              maxLength: 5000
                              type: string
                              x-stripeBypassValidation: true
                            monthly_anchor:
                              type: integer
                            weekly_anchor:
                              enum:
                                - friday
                                - monday
                                - saturday
                                - sunday
                                - thursday
                                - tuesday
                                - wednesday
                              maxLength: 5000
                              type: string
                          title: transfer_schedule_specs
                          type: object
                        statement_descriptor:
                          maxLength: 22
                          type: string
                      title: payout_settings_specs
                      type: object
                    treasury:
                      properties:
                        tos_acceptance:
                          properties:
                            date:
                              format: unix-time
                              type: integer
                            ip:
                              type: string
                            user_agent:
                              anyOf:
                                - maxLength: 5000
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                          title: settings_terms_of_service_specs
                          type: object
                      title: treasury_settings_specs
                      type: object
                  title: settings_specs
                  type: object
                tos_acceptance:
                  description: >-
                    Details on the account's acceptance of the [Stripe Services
                    Agreement](https://stripe.com/docs/connect/updating-accounts#tos-acceptance).
                  properties:
                    date:
                      format: unix-time
                      type: integer
                    ip:
                      type: string
                    service_agreement:
                      maxLength: 5000
                      type: string
                    user_agent:
                      maxLength: 5000
                      type: string
                  title: tos_acceptance_specs
                  type: object
                type:
                  description: >-
                    The type of Stripe account to create. May be one of
                    `custom`, `express` or `standard`.
                  enum:
                    - custom
                    - express
                    - standard
                  type: string
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Account
      tags:
        - Accounts
  '/v1/accounts/{account}':
    delete:
      description: >-
        <p>With <a href="/docs/connect">Connect</a>, you can delete accounts you
        manage.</p>


        <p>Accounts created using test-mode keys can be deleted at any time.
        Standard accounts created using live-mode keys cannot be deleted. Custom
        or Express accounts created using live-mode keys can only be deleted
        once all balances are zero.</p>


        <p>If you want to delete your own account, use the <a
        href="https://dashboard.stripe.com/settings/account">account information
        tab in your account settings</a> instead.</p>
      operationId: DeleteAccountsAccount
      parameters:
        - in: path
          name: account
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
                $ref: '#/components/schemas/deleted_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Account
      tags:
        - Accounts
    get:
      description: <p>Retrieves the details of an account.</p>
      operationId: GetAccountsAccount
      parameters:
        - in: path
          name: account
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
                $ref: '#/components/schemas/account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Accounts
      tags:
        - Accounts
    post:
      description: >-
        <p>Updates a <a href="/docs/connect/accounts">connected account</a> by
        setting the values of the parameters passed. Any parameters not provided
        are

        left unchanged.</p>


        <p>For Custom accounts, you can update any information on the account.
        For other accounts, you can update all information until that

        account has started to go through Connect Onboarding. Once you create an
        <a href="/docs/api/account_links">Account Link</a>

        for a Standard or Express account, some parameters can no longer be
        changed. These are marked as <strong>Custom Only</strong> or
        <strong>Custom and Express</strong>

        below.</p>


        <p>To update your own account, use the <a
        href="https://dashboard.stripe.com/settings/account">Dashboard</a>.
        Refer to our

        <a href="/docs/connect/updating-accounts">Connect</a> documentation to
        learn more about updating accounts.</p>
      operationId: PostAccountsAccount
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              business_profile:
                explode: true
                style: deepObject
              capabilities:
                explode: true
                style: deepObject
              company:
                explode: true
                style: deepObject
              documents:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              individual:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              settings:
                explode: true
                style: deepObject
              tos_acceptance:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                account_token:
                  description: >-
                    An [account
                    token](https://stripe.com/docs/api#create_account_token),
                    used to securely provide details to the account.
                  maxLength: 5000
                  type: string
                business_profile:
                  description: Business information about the account.
                  properties:
                    mcc:
                      maxLength: 4
                      type: string
                    monthly_estimated_revenue:
                      properties:
                        amount:
                          type: integer
                        currency:
                          type: string
                      required:
                        - amount
                        - currency
                      title: monthly_estimated_revenue_specs
                      type: object
                    name:
                      maxLength: 5000
                      type: string
                    product_description:
                      maxLength: 40000
                      type: string
                    support_address:
                      properties:
                        city:
                          maxLength: 100
                          type: string
                        country:
                          maxLength: 5000
                          type: string
                        line1:
                          maxLength: 200
                          type: string
                        line2:
                          maxLength: 200
                          type: string
                        postal_code:
                          maxLength: 5000
                          type: string
                        state:
                          maxLength: 5000
                          type: string
                      title: address_specs
                      type: object
                    support_email:
                      type: string
                    support_phone:
                      maxLength: 5000
                      type: string
                    support_url:
                      anyOf:
                        - type: string
                        - enum:
                            - ''
                          type: string
                    url:
                      type: string
                  title: business_profile_specs
                  type: object
                business_type:
                  description: The business type.
                  enum:
                    - company
                    - government_entity
                    - individual
                    - non_profit
                  type: string
                  x-stripeBypassValidation: true
                capabilities:
                  description: >-
                    Each key of the dictionary represents a capability, and each
                    capability maps to its settings (e.g. whether it has been
                    requested or not). Each capability will be inactive until
                    you have provided its specific requirements and Stripe has
                    verified them. An account may have some of its requested
                    capabilities be active and some be inactive.
                  properties:
                    acss_debit_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    affirm_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    afterpay_clearpay_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    au_becs_debit_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    bacs_debit_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    bancontact_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    bank_transfer_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    blik_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    boleto_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    card_issuing:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    card_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    cartes_bancaires_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    cashapp_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    eps_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    fpx_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    giropay_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    grabpay_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    ideal_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    india_international_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    jcb_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    klarna_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    konbini_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    legacy_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    link_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    oxxo_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    p24_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    paynow_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    promptpay_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    revolut_pay_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    sepa_debit_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    sofort_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    tax_reporting_us_1099_k:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    tax_reporting_us_1099_misc:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    transfers:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    treasury:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    us_bank_account_ach_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                    zip_payments:
                      properties:
                        requested:
                          type: boolean
                      title: capability_param
                      type: object
                  title: capabilities_param
                  type: object
                company:
                  description: >-
                    Information about the company or business. This field is
                    available for any `business_type`.
                  properties:
                    address:
                      properties:
                        city:
                          maxLength: 100
                          type: string
                        country:
                          maxLength: 5000
                          type: string
                        line1:
                          maxLength: 200
                          type: string
                        line2:
                          maxLength: 200
                          type: string
                        postal_code:
                          maxLength: 5000
                          type: string
                        state:
                          maxLength: 5000
                          type: string
                      title: address_specs
                      type: object
                    address_kana:
                      properties:
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
                        town:
                          maxLength: 5000
                          type: string
                      title: japan_address_kana_specs
                      type: object
                    address_kanji:
                      properties:
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
                        town:
                          maxLength: 5000
                          type: string
                      title: japan_address_kanji_specs
                      type: object
                    directors_provided:
                      type: boolean
                    executives_provided:
                      type: boolean
                    export_license_id:
                      maxLength: 5000
                      type: string
                    export_purpose_code:
                      maxLength: 5000
                      type: string
                    name:
                      maxLength: 100
                      type: string
                    name_kana:
                      maxLength: 100
                      type: string
                    name_kanji:
                      maxLength: 100
                      type: string
                    owners_provided:
                      type: boolean
                    ownership_declaration:
                      properties:
                        date:
                          format: unix-time
                          type: integer
                        ip:
                          type: string
                        user_agent:
                          maxLength: 5000
                          type: string
                      title: company_ownership_declaration
                      type: object
                    phone:
                      maxLength: 5000
                      type: string
                    registration_number:
                      maxLength: 5000
                      type: string
                    structure:
                      enum:
                        - ''
                        - free_zone_establishment
                        - free_zone_llc
                        - government_instrumentality
                        - governmental_unit
                        - incorporated_non_profit
                        - incorporated_partnership
                        - limited_liability_partnership
                        - llc
                        - multi_member_llc
                        - private_company
                        - private_corporation
                        - private_partnership
                        - public_company
                        - public_corporation
                        - public_partnership
                        - single_member_llc
                        - sole_establishment
                        - sole_proprietorship
                        - tax_exempt_government_instrumentality
                        - unincorporated_association
                        - unincorporated_non_profit
                        - unincorporated_partnership
                      type: string
                      x-stripeBypassValidation: true
                    tax_id:
                      maxLength: 5000
                      type: string
                    tax_id_registrar:
                      maxLength: 5000
                      type: string
                    vat_id:
                      maxLength: 5000
                      type: string
                    verification:
                      properties:
                        document:
                          properties:
                            back:
                              maxLength: 500
                              type: string
                            front:
                              maxLength: 500
                              type: string
                          title: verification_document_specs
                          type: object
                      title: verification_specs
                      type: object
                  title: company_specs
                  type: object
                default_currency:
                  description: >-
                    Three-letter ISO currency code representing the default
                    currency for the account. This must be a currency that
                    [Stripe supports in the account's
                    country](https://stripe.com/docs/payouts).
                  type: string
                documents:
                  description: >-
                    Documents that may be submitted to satisfy various
                    informational requests.
                  properties:
                    bank_account_ownership_verification:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                    company_license:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                    company_memorandum_of_association:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                    company_ministerial_decree:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                    company_registration_verification:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                    company_tax_id_verification:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                    proof_of_registration:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                  title: documents_specs
                  type: object
                email:
                  description: >-
                    The email address of the account holder. This is only to
                    make the account easier to identify to you. Stripe only
                    emails Custom accounts with your consent.
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                external_account:
                  description: >-
                    A card or bank account to attach to the account for
                    receiving
                    [payouts](https://stripe.com/docs/connect/bank-debit-card-payouts)
                    (you won’t be able to use it for top-ups). You can provide
                    either a token, like the ones returned by
                    [Stripe.js](https://stripe.com/docs/js), or a dictionary, as
                    documented in the `external_account` parameter for [bank
                    account](https://stripe.com/docs/api#account_create_bank_account)
                    creation. <br><br>By default, providing an external account
                    sets it as the new default external account for its
                    currency, and deletes the old default if one exists. To add
                    additional external accounts without replacing the existing
                    default for the currency, use the [bank
                    account](https://stripe.com/docs/api#account_create_bank_account)
                    or [card
                    creation](https://stripe.com/docs/api#account_create_card)
                    APIs.
                  maxLength: 5000
                  type: string
                  x-stripeBypassValidation: true
                individual:
                  description: >-
                    Information about the person represented by the account.
                    This field is null unless `business_type` is set to
                    `individual`.
                  properties:
                    address:
                      properties:
                        city:
                          maxLength: 100
                          type: string
                        country:
                          maxLength: 5000
                          type: string
                        line1:
                          maxLength: 200
                          type: string
                        line2:
                          maxLength: 200
                          type: string
                        postal_code:
                          maxLength: 5000
                          type: string
                        state:
                          maxLength: 5000
                          type: string
                      title: address_specs
                      type: object
                    address_kana:
                      properties:
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
                        town:
                          maxLength: 5000
                          type: string
                      title: japan_address_kana_specs
                      type: object
                    address_kanji:
                      properties:
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
                        town:
                          maxLength: 5000
                          type: string
                      title: japan_address_kanji_specs
                      type: object
                    dob:
                      anyOf:
                        - properties:
                            day:
                              type: integer
                            month:
                              type: integer
                            year:
                              type: integer
                          required:
                            - day
                            - month
                            - year
                          title: date_of_birth_specs
                          type: object
                        - enum:
                            - ''
                          type: string
                    email:
                      type: string
                    first_name:
                      maxLength: 100
                      type: string
                    first_name_kana:
                      maxLength: 5000
                      type: string
                    first_name_kanji:
                      maxLength: 5000
                      type: string
                    full_name_aliases:
                      anyOf:
                        - items:
                            maxLength: 300
                            type: string
                          type: array
                        - enum:
                            - ''
                          type: string
                    gender:
                      type: string
                    id_number:
                      maxLength: 5000
                      type: string
                    id_number_secondary:
                      maxLength: 5000
                      type: string
                    last_name:
                      maxLength: 100
                      type: string
                    last_name_kana:
                      maxLength: 5000
                      type: string
                    last_name_kanji:
                      maxLength: 5000
                      type: string
                    maiden_name:
                      maxLength: 5000
                      type: string
                    metadata:
                      anyOf:
                        - additionalProperties:
                            type: string
                          type: object
                        - enum:
                            - ''
                          type: string
                    phone:
                      type: string
                    political_exposure:
                      enum:
                        - existing
                        - none
                      type: string
                    registered_address:
                      properties:
                        city:
                          maxLength: 100
                          type: string
                        country:
                          maxLength: 5000
                          type: string
                        line1:
                          maxLength: 200
                          type: string
                        line2:
                          maxLength: 200
                          type: string
                        postal_code:
                          maxLength: 5000
                          type: string
                        state:
                          maxLength: 5000
                          type: string
                      title: address_specs
                      type: object
                    ssn_last_4:
                      maxLength: 5000
                      type: string
                    verification:
                      properties:
                        additional_document:
                          properties:
                            back:
                              maxLength: 500
                              type: string
                            front:
                              maxLength: 500
                              type: string
                          title: person_verification_document_specs
                          type: object
                        document:
                          properties:
                            back:
                              maxLength: 500
                              type: string
                            front:
                              maxLength: 500
                              type: string
                          title: person_verification_document_specs
                          type: object
                      title: person_verification_specs
                      type: object
                  title: individual_specs
                  type: object
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                settings:
                  description: >-
                    Options for customizing how the account functions within
                    Stripe.
                  properties:
                    bacs_debit_payments:
                      properties:
                        display_name:
                          type: string
                      title: bacs_debit_payments_specs
                      type: object
                    branding:
                      properties:
                        icon:
                          maxLength: 5000
                          type: string
                        logo:
                          maxLength: 5000
                          type: string
                        primary_color:
                          maxLength: 5000
                          type: string
                        secondary_color:
                          maxLength: 5000
                          type: string
                      title: branding_settings_specs
                      type: object
                    card_issuing:
                      properties:
                        tos_acceptance:
                          properties:
                            date:
                              format: unix-time
                              type: integer
                            ip:
                              type: string
                            user_agent:
                              anyOf:
                                - maxLength: 5000
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                          title: settings_terms_of_service_specs
                          type: object
                      title: card_issuing_settings_specs
                      type: object
                    card_payments:
                      properties:
                        decline_on:
                          properties:
                            avs_failure:
                              type: boolean
                            cvc_failure:
                              type: boolean
                          title: decline_charge_on_specs
                          type: object
                        statement_descriptor_prefix:
                          maxLength: 10
                          type: string
                        statement_descriptor_prefix_kana:
                          anyOf:
                            - maxLength: 10
                              type: string
                            - enum:
                                - ''
                              type: string
                        statement_descriptor_prefix_kanji:
                          anyOf:
                            - maxLength: 10
                              type: string
                            - enum:
                                - ''
                              type: string
                      title: card_payments_settings_specs
                      type: object
                    payments:
                      properties:
                        statement_descriptor:
                          maxLength: 22
                          type: string
                        statement_descriptor_kana:
                          maxLength: 22
                          type: string
                        statement_descriptor_kanji:
                          maxLength: 22
                          type: string
                      title: payments_settings_specs
                      type: object
                    payouts:
                      properties:
                        debit_negative_balances:
                          type: boolean
                        schedule:
                          properties:
                            delay_days:
                              anyOf:
                                - enum:
                                    - minimum
                                  maxLength: 5000
                                  type: string
                                - type: integer
                            interval:
                              enum:
                                - daily
                                - manual
                                - monthly
                                - weekly
                              maxLength: 5000
                              type: string
                              x-stripeBypassValidation: true
                            monthly_anchor:
                              type: integer
                            weekly_anchor:
                              enum:
                                - friday
                                - monday
                                - saturday
                                - sunday
                                - thursday
                                - tuesday
                                - wednesday
                              maxLength: 5000
                              type: string
                          title: transfer_schedule_specs
                          type: object
                        statement_descriptor:
                          maxLength: 22
                          type: string
                      title: payout_settings_specs
                      type: object
                    treasury:
                      properties:
                        tos_acceptance:
                          properties:
                            date:
                              format: unix-time
                              type: integer
                            ip:
                              type: string
                            user_agent:
                              anyOf:
                                - maxLength: 5000
                                  type: string
                                - enum:
                                    - ''
                                  type: string
                          title: settings_terms_of_service_specs
                          type: object
                      title: treasury_settings_specs
                      type: object
                  title: settings_specs_update
                  type: object
                tos_acceptance:
                  description: >-
                    Details on the account's acceptance of the [Stripe Services
                    Agreement](https://stripe.com/docs/connect/updating-accounts#tos-acceptance).
                  properties:
                    date:
                      format: unix-time
                      type: integer
                    ip:
                      type: string
                    service_agreement:
                      maxLength: 5000
                      type: string
                    user_agent:
                      maxLength: 5000
                      type: string
                  title: tos_acceptance_specs
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Account
      tags:
        - Accounts
  '/v1/accounts/{account}/bank_accounts':
    post:
      description: <p>Create an external account for a given account.</p>
      operationId: PostAccountsAccountBankAccounts
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              bank_account:
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
                bank_account:
                  anyOf:
                    - properties:
                        account_holder_name:
                          maxLength: 5000
                          type: string
                        account_holder_type:
                          enum:
                            - company
                            - individual
                          maxLength: 5000
                          type: string
                        account_number:
                          maxLength: 5000
                          type: string
                        account_type:
                          enum:
                            - checking
                            - futsu
                            - savings
                            - toza
                          maxLength: 5000
                          type: string
                        country:
                          maxLength: 5000
                          type: string
                        currency:
                          type: string
                        documents:
                          properties:
                            bank_account_ownership_verification:
                              properties:
                                files:
                                  items:
                                    maxLength: 500
                                    type: string
                                  type: array
                              title: documents_param
                              type: object
                          title: external_account_documents_param
                          type: object
                        object:
                          enum:
                            - bank_account
                          maxLength: 5000
                          type: string
                        routing_number:
                          maxLength: 5000
                          type: string
                      required:
                        - account_number
                        - country
                      title: external_account_payout_bank_account
                      type: object
                    - maxLength: 5000
                      type: string
                  description: >-
                    Either a token, like the ones returned by
                    [Stripe.js](https://stripe.com/docs/js), or a dictionary
                    containing a user's bank account details.
                default_for_currency:
                  description: >-
                    When set to true, or if this is the first external account
                    added in this currency, this account becomes the default
                    external account for its currency.
                  type: boolean
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                external_account:
                  description: >-
                    Please refer to full
                    [documentation](https://stripe.com/docs/api) instead.
                  maxLength: 5000
                  type: string
                  x-stripeBypassValidation: true
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
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/external_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Bank Account
      tags:
        - Banks
        - Accounts
  '/v1/accounts/{account}/bank_accounts/{id}':
    delete:
      description: <p>Delete a specified external account for a given account.</p>
      operationId: DeleteAccountsAccountBankAccountsId
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: id
          required: true
          schema:
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
                $ref: '#/components/schemas/deleted_external_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Bank Account
      tags:
        - Banks
        - Accounts
    get:
      description: <p>Retrieve a specified external account for a given account.</p>
      operationId: GetAccountsAccountBankAccountsId
      parameters:
        - in: path
          name: account
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
        - in: path
          name: id
          required: true
          schema:
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
                $ref: '#/components/schemas/external_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Bank Account
      tags:
        - Banks
        - Accounts
    post:
      description: >-
        <p>Updates the metadata, account holder name, account holder type of a
        bank account belonging to a <a
        href="/docs/connect/custom-accounts">Custom account</a>, and optionally
        sets it as the default for its currency. Other bank account details are
        not editable by design.</p>


        <p>You can re-enable a disabled bank account by performing an update
        call without providing any arguments or changes.</p>
      operationId: PostAccountsAccountBankAccountsId
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: id
          required: true
          schema:
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              documents:
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
                account_holder_name:
                  description: >-
                    The name of the person or business that owns the bank
                    account.
                  maxLength: 5000
                  type: string
                account_holder_type:
                  description: >-
                    The type of entity that holds the account. This can be
                    either `individual` or `company`.
                  enum:
                    - ''
                    - company
                    - individual
                  maxLength: 5000
                  type: string
                account_type:
                  description: >-
                    The bank account type. This can only be `checking` or
                    `savings` in most countries. In Japan, this can only be
                    `futsu` or `toza`.
                  enum:
                    - checking
                    - futsu
                    - savings
                    - toza
                  maxLength: 5000
                  type: string
                address_city:
                  description: City/District/Suburb/Town/Village.
                  maxLength: 5000
                  type: string
                address_country:
                  description: 'Billing address country, if provided when creating card.'
                  maxLength: 5000
                  type: string
                address_line1:
                  description: Address line 1 (Street address/PO Box/Company name).
                  maxLength: 5000
                  type: string
                address_line2:
                  description: Address line 2 (Apartment/Suite/Unit/Building).
                  maxLength: 5000
                  type: string
                address_state:
                  description: State/County/Province/Region.
                  maxLength: 5000
                  type: string
                address_zip:
                  description: ZIP or postal code.
                  maxLength: 5000
                  type: string
                default_for_currency:
                  description: >-
                    When set to true, this becomes the default external account
                    for its currency.
                  type: boolean
                documents:
                  description: >-
                    Documents that may be submitted to satisfy various
                    informational requests.
                  properties:
                    bank_account_ownership_verification:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                  title: external_account_documents_param
                  type: object
                exp_month:
                  description: Two digit number representing the card’s expiration month.
                  maxLength: 5000
                  type: string
                exp_year:
                  description: Four digit number representing the card’s expiration year.
                  maxLength: 5000
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                name:
                  description: Cardholder name.
                  maxLength: 5000
                  type: string
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/external_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Bank Account
      tags:
        - Banks
        - Accounts
  '/v1/accounts/{account}/capabilities':
    get:
      description: >-
        <p>Returns a list of capabilities associated with the account. The
        capabilities are returned sorted by creation date, with the most recent
        capability appearing first.</p>
      operationId: GetAccountsAccountCapabilities
      parameters:
        - in: path
          name: account
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
                description: ''
                properties:
                  data:
                    items:
                      $ref: '#/components/schemas/capability'
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
                title: ListAccountCapability
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
      summary: Retrieve Account Capabilities
      tags:
        - Accounts
        - Capabilities
  '/v1/accounts/{account}/capabilities/{capability}':
    get:
      description: <p>Retrieves information about the specified Account Capability.</p>
      operationId: GetAccountsAccountCapabilitiesCapability
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: capability
          required: true
          schema:
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
                $ref: '#/components/schemas/capability'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Account Capability
      tags:
        - Accounts
        - Capabilities
    post:
      description: >-
        <p>Updates an existing Account Capability. Request or remove a
        capability by updating its <code>requested</code> parameter.</p>
      operationId: PostAccountsAccountCapabilitiesCapability
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: capability
          required: true
          schema:
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
                requested:
                  description: >-
                    To request a new capability for an account, pass true. There
                    can be a delay before the requested capability becomes
                    active. If the capability has any activation requirements,
                    the response includes them in the `requirements` arrays.


                    If a capability isn't permanent, you can remove it from the
                    account by passing false. Most capabilities are permanent
                    after they've been requested. Attempting to remove a
                    permanent capability returns an error.
                  type: boolean
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/capability'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Account Capability
      tags:
        - Accounts
        - Capabilities
  '/v1/accounts/{account}/external_accounts':
    get:
      description: <p>List external accounts for an account.</p>
      operationId: GetAccountsAccountExternalAccounts
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
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
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: Filter external accounts according to a particular object type.
          in: query
          name: object
          required: false
          schema:
            enum:
              - bank_account
              - card
            maxLength: 5000
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
                    description: >-
                      The list contains all external accounts that have been
                      attached to the Stripe account. These may be bank accounts
                      or cards.
                    items:
                      anyOf:
                        - $ref: '#/components/schemas/bank_account'
                        - $ref: '#/components/schemas/card'
                      title: Polymorphic
                      x-stripeBypassValidation: true
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
                title: ExternalAccountList
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
      summary: Retrieve External Accounts
      tags:
        - External
        - Accounts
    post:
      description: <p>Create an external account for a given account.</p>
      operationId: PostAccountsAccountExternalAccounts
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              bank_account:
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
                bank_account:
                  anyOf:
                    - properties:
                        account_holder_name:
                          maxLength: 5000
                          type: string
                        account_holder_type:
                          enum:
                            - company
                            - individual
                          maxLength: 5000
                          type: string
                        account_number:
                          maxLength: 5000
                          type: string
                        account_type:
                          enum:
                            - checking
                            - futsu
                            - savings
                            - toza
                          maxLength: 5000
                          type: string
                        country:
                          maxLength: 5000
                          type: string
                        currency:
                          type: string
                        documents:
                          properties:
                            bank_account_ownership_verification:
                              properties:
                                files:
                                  items:
                                    maxLength: 500
                                    type: string
                                  type: array
                              title: documents_param
                              type: object
                          title: external_account_documents_param
                          type: object
                        object:
                          enum:
                            - bank_account
                          maxLength: 5000
                          type: string
                        routing_number:
                          maxLength: 5000
                          type: string
                      required:
                        - account_number
                        - country
                      title: external_account_payout_bank_account
                      type: object
                    - maxLength: 5000
                      type: string
                  description: >-
                    Either a token, like the ones returned by
                    [Stripe.js](https://stripe.com/docs/js), or a dictionary
                    containing a user's bank account details.
                default_for_currency:
                  description: >-
                    When set to true, or if this is the first external account
                    added in this currency, this account becomes the default
                    external account for its currency.
                  type: boolean
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                external_account:
                  description: >-
                    Please refer to full
                    [documentation](https://stripe.com/docs/api) instead.
                  maxLength: 5000
                  type: string
                  x-stripeBypassValidation: true
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
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/external_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create External Accounts
      tags:
        - External
        - Accounts
  '/v1/accounts/{account}/external_accounts/{id}':
    delete:
      description: <p>Delete a specified external account for a given account.</p>
      operationId: DeleteAccountsAccountExternalAccountsId
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: id
          required: true
          schema:
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
                $ref: '#/components/schemas/deleted_external_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete External Account
      tags:
        - External
        - Accounts
    get:
      description: <p>Retrieve a specified external account for a given account.</p>
      operationId: GetAccountsAccountExternalAccountsId
      parameters:
        - in: path
          name: account
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
        - in: path
          name: id
          required: true
          schema:
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
                $ref: '#/components/schemas/external_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve External Account
      tags:
        - External
        - Accounts
    post:
      description: >-
        <p>Updates the metadata, account holder name, account holder type of a
        bank account belonging to a <a
        href="/docs/connect/custom-accounts">Custom account</a>, and optionally
        sets it as the default for its currency. Other bank account details are
        not editable by design.</p>


        <p>You can re-enable a disabled bank account by performing an update
        call without providing any arguments or changes.</p>
      operationId: PostAccountsAccountExternalAccountsId
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: id
          required: true
          schema:
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              documents:
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
                account_holder_name:
                  description: >-
                    The name of the person or business that owns the bank
                    account.
                  maxLength: 5000
                  type: string
                account_holder_type:
                  description: >-
                    The type of entity that holds the account. This can be
                    either `individual` or `company`.
                  enum:
                    - ''
                    - company
                    - individual
                  maxLength: 5000
                  type: string
                account_type:
                  description: >-
                    The bank account type. This can only be `checking` or
                    `savings` in most countries. In Japan, this can only be
                    `futsu` or `toza`.
                  enum:
                    - checking
                    - futsu
                    - savings
                    - toza
                  maxLength: 5000
                  type: string
                address_city:
                  description: City/District/Suburb/Town/Village.
                  maxLength: 5000
                  type: string
                address_country:
                  description: 'Billing address country, if provided when creating card.'
                  maxLength: 5000
                  type: string
                address_line1:
                  description: Address line 1 (Street address/PO Box/Company name).
                  maxLength: 5000
                  type: string
                address_line2:
                  description: Address line 2 (Apartment/Suite/Unit/Building).
                  maxLength: 5000
                  type: string
                address_state:
                  description: State/County/Province/Region.
                  maxLength: 5000
                  type: string
                address_zip:
                  description: ZIP or postal code.
                  maxLength: 5000
                  type: string
                default_for_currency:
                  description: >-
                    When set to true, this becomes the default external account
                    for its currency.
                  type: boolean
                documents:
                  description: >-
                    Documents that may be submitted to satisfy various
                    informational requests.
                  properties:
                    bank_account_ownership_verification:
                      properties:
                        files:
                          items:
                            maxLength: 500
                            type: string
                          type: array
                      title: documents_param
                      type: object
                  title: external_account_documents_param
                  type: object
                exp_month:
                  description: Two digit number representing the card’s expiration month.
                  maxLength: 5000
                  type: string
                exp_year:
                  description: Four digit number representing the card’s expiration year.
                  maxLength: 5000
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                name:
                  description: Cardholder name.
                  maxLength: 5000
                  type: string
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/external_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update External Account
      tags:
        - External
        - Accounts
  '/v1/accounts/{account}/login_links':
    post:
      description: >-
        <p>Creates a single-use login link for an Express account to access
        their Stripe dashboard.</p>


        <p><strong>You may only create login links for <a
        href="/docs/connect/express-accounts">Express accounts</a> connected to
        your platform</strong>.</p>
      operationId: PostAccountsAccountLoginLinks
      parameters:
        - in: path
          name: account
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
                $ref: '#/components/schemas/login_link'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Login Link
      tags:
        - Accounts
        - Login
        - Links
  '/v1/accounts/{account}/people':
    get:
      description: >-
        <p>Returns a list of people associated with the account’s legal entity.
        The people are returned sorted by creation date, with the most recent
        people appearing first.</p>
      operationId: GetAccountsAccountPeople
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
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
            Filters on the list of people returned based on the person's
            relationship to the account's company.
          explode: true
          in: query
          name: relationship
          required: false
          schema:
            properties:
              director:
                type: boolean
              executive:
                type: boolean
              legal_guardian:
                type: boolean
              owner:
                type: boolean
              representative:
                type: boolean
            title: all_people_relationship_specs
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
                      $ref: '#/components/schemas/person'
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
                title: PersonList
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
      summary: Retrieve Account Peoples
      tags:
        - Accounts
        - People
    post:
      description: <p>Creates a new person.</p>
      operationId: PostAccountsAccountPeople
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              additional_tos_acceptances:
                explode: true
                style: deepObject
              address:
                explode: true
                style: deepObject
              address_kana:
                explode: true
                style: deepObject
              address_kanji:
                explode: true
                style: deepObject
              dob:
                explode: true
                style: deepObject
              documents:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              full_name_aliases:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              registered_address:
                explode: true
                style: deepObject
              relationship:
                explode: true
                style: deepObject
              verification:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                additional_tos_acceptances:
                  description: >-
                    Details on the legal guardian's acceptance of the required
                    Stripe agreements.
                  properties:
                    account:
                      properties:
                        date:
                          format: unix-time
                          type: integer
                        ip:
                          type: string
                        user_agent:
                          anyOf:
                            - maxLength: 5000
                              type: string
                            - enum:
                                - ''
                              type: string
                      title: settings_terms_of_service_specs
                      type: object
                  title: person_additional_tos_acceptances_specs
                  type: object
                address:
                  description: The person's address.
                  properties:
                    city:
                      maxLength: 100
                      type: string
                    country:
                      maxLength: 5000
                      type: string
                    line1:
                      maxLength: 200
                      type: string
                    line2:
                      maxLength: 200
                      type: string
                    postal_code:
                      maxLength: 5000
                      type: string
                    state:
                      maxLength: 5000
                      type: string
                  title: address_specs
                  type: object
                address_kana:
                  description: The Kana variation of the person's address (Japan only).
                  properties:
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
                    town:
                      maxLength: 5000
                      type: string
                  title: japan_address_kana_specs
                  type: object
                address_kanji:
                  description: The Kanji variation of the person's address (Japan only).
                  properties:
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
                    town:
                      maxLength: 5000
                      type: string
                  title: japan_address_kanji_specs
                  type: object
                dob:
                  anyOf:
                    - properties:
                        day:
                          type: integer
                        month:
                          type: integer
                        year:
                          type: integer
                      required:
                        - day
                        - month
                        - year
                      title: date_of_birth_specs
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: The person's date of birth.
                documents:
                  description: >-
                    Documents that may be submitted to satisfy various
                    informational requests.
                  properties:
                    company_authorization:
                      properties:
                        files:
                          items:
                            anyOf:
                              - maxLength: 500
                                type: string
                              - enum:
                                  - ''
                                type: string
                          type: array
                      title: documents_param
                      type: object
                    passport:
                      properties:
                        files:
                          items:
                            anyOf:
                              - maxLength: 500
                                type: string
                              - enum:
                                  - ''
                                type: string
                          type: array
                      title: documents_param
                      type: object
                    visa:
                      properties:
                        files:
                          items:
                            anyOf:
                              - maxLength: 500
                                type: string
                              - enum:
                                  - ''
                                type: string
                          type: array
                      title: documents_param
                      type: object
                  title: person_documents_specs
                  type: object
                email:
                  description: The person's email address.
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                first_name:
                  description: The person's first name.
                  maxLength: 5000
                  type: string
                first_name_kana:
                  description: The Kana variation of the person's first name (Japan only).
                  maxLength: 5000
                  type: string
                first_name_kanji:
                  description: The Kanji variation of the person's first name (Japan only).
                  maxLength: 5000
                  type: string
                full_name_aliases:
                  anyOf:
                    - items:
                        maxLength: 5000
                        type: string
                      type: array
                    - enum:
                        - ''
                      type: string
                  description: >-
                    A list of alternate names or aliases that the person is
                    known by.
                gender:
                  description: >-
                    The person's gender (International regulations require
                    either "male" or "female").
                  type: string
                id_number:
                  description: >-
                    The person's ID number, as appropriate for their country.
                    For example, a social security number in the U.S., social
                    insurance number in Canada, etc. Instead of the number
                    itself, you can also provide a [PII token provided by
                    Stripe.js](https://stripe.com/docs/js/tokens/create_token?type=pii).
                  maxLength: 5000
                  type: string
                id_number_secondary:
                  description: >-
                    The person's secondary ID number, as appropriate for their
                    country, will be used for enhanced verification checks. In
                    Thailand, this would be the laser code found on the back of
                    an ID card. Instead of the number itself, you can also
                    provide a [PII token provided by
                    Stripe.js](https://stripe.com/docs/js/tokens/create_token?type=pii).
                  maxLength: 5000
                  type: string
                last_name:
                  description: The person's last name.
                  maxLength: 5000
                  type: string
                last_name_kana:
                  description: The Kana variation of the person's last name (Japan only).
                  maxLength: 5000
                  type: string
                last_name_kanji:
                  description: The Kanji variation of the person's last name (Japan only).
                  maxLength: 5000
                  type: string
                maiden_name:
                  description: The person's maiden name.
                  maxLength: 5000
                  type: string
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                nationality:
                  description: >-
                    The country where the person is a national. Two-letter
                    country code ([ISO 3166-1
                    alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)),
                    or "XX" if unavailable.
                  maxLength: 5000
                  type: string
                person_token:
                  description: >-
                    A [person
                    token](https://stripe.com/docs/connect/account-tokens), used
                    to securely provide details to the person.
                  maxLength: 5000
                  type: string
                phone:
                  description: The person's phone number.
                  type: string
                political_exposure:
                  description: >-
                    Indicates if the person or any of their representatives,
                    family members, or other closely related persons, declares
                    that they hold or have held an important public job or
                    function, in any jurisdiction.
                  maxLength: 5000
                  type: string
                registered_address:
                  description: The person's registered address.
                  properties:
                    city:
                      maxLength: 100
                      type: string
                    country:
                      maxLength: 5000
                      type: string
                    line1:
                      maxLength: 200
                      type: string
                    line2:
                      maxLength: 200
                      type: string
                    postal_code:
                      maxLength: 5000
                      type: string
                    state:
                      maxLength: 5000
                      type: string
                  title: address_specs
                  type: object
                relationship:
                  description: >-
                    The relationship that this person has with the account's
                    legal entity.
                  properties:
                    director:
                      type: boolean
                    executive:
                      type: boolean
                    legal_guardian:
                      type: boolean
                    owner:
                      type: boolean
                    percent_ownership:
                      anyOf:
                        - type: number
                        - enum:
                            - ''
                          type: string
                    representative:
                      type: boolean
                    title:
                      maxLength: 5000
                      type: string
                  title: relationship_specs
                  type: object
                ssn_last_4:
                  description: >-
                    The last four digits of the person's Social Security number
                    (U.S. only).
                  type: string
                verification:
                  description: The person's verification status.
                  properties:
                    additional_document:
                      properties:
                        back:
                          maxLength: 500
                          type: string
                        front:
                          maxLength: 500
                          type: string
                      title: person_verification_document_specs
                      type: object
                    document:
                      properties:
                        back:
                          maxLength: 500
                          type: string
                        front:
                          maxLength: 500
                          type: string
                      title: person_verification_document_specs
                      type: object
                  title: person_verification_specs
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/person'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Account People
      tags:
        - Accounts
        - People
  '/v1/accounts/{account}/people/{person}':
    delete:
      description: >-
        <p>Deletes an existing person’s relationship to the account’s legal
        entity. Any person with a relationship for an account can be deleted
        through the API, except if the person is the
        <code>account_opener</code>. If your integration is using the
        <code>executive</code> parameter, you cannot delete the only verified
        <code>executive</code> on file.</p>
      operationId: DeleteAccountsAccountPeoplePerson
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: person
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
                $ref: '#/components/schemas/deleted_person'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Account People
      tags:
        - Accounts
        - People
    get:
      description: <p>Retrieves an existing person.</p>
      operationId: GetAccountsAccountPeoplePerson
      parameters:
        - in: path
          name: account
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
        - in: path
          name: person
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
                $ref: '#/components/schemas/person'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Account People
      tags:
        - Accounts
        - People
    post:
      description: <p>Updates an existing person.</p>
      operationId: PostAccountsAccountPeoplePerson
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: person
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              additional_tos_acceptances:
                explode: true
                style: deepObject
              address:
                explode: true
                style: deepObject
              address_kana:
                explode: true
                style: deepObject
              address_kanji:
                explode: true
                style: deepObject
              dob:
                explode: true
                style: deepObject
              documents:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              full_name_aliases:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              registered_address:
                explode: true
                style: deepObject
              relationship:
                explode: true
                style: deepObject
              verification:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                additional_tos_acceptances:
                  description: >-
                    Details on the legal guardian's acceptance of the required
                    Stripe agreements.
                  properties:
                    account:
                      properties:
                        date:
                          format: unix-time
                          type: integer
                        ip:
                          type: string
                        user_agent:
                          anyOf:
                            - maxLength: 5000
                              type: string
                            - enum:
                                - ''
                              type: string
                      title: settings_terms_of_service_specs
                      type: object
                  title: person_additional_tos_acceptances_specs
                  type: object
                address:
                  description: The person's address.
                  properties:
                    city:
                      maxLength: 100
                      type: string
                    country:
                      maxLength: 5000
                      type: string
                    line1:
                      maxLength: 200
                      type: string
                    line2:
                      maxLength: 200
                      type: string
                    postal_code:
                      maxLength: 5000
                      type: string
                    state:
                      maxLength: 5000
                      type: string
                  title: address_specs
                  type: object
                address_kana:
                  description: The Kana variation of the person's address (Japan only).
                  properties:
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
                    town:
                      maxLength: 5000
                      type: string
                  title: japan_address_kana_specs
                  type: object
                address_kanji:
                  description: The Kanji variation of the person's address (Japan only).
                  properties:
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
                    town:
                      maxLength: 5000
                      type: string
                  title: japan_address_kanji_specs
                  type: object
                dob:
                  anyOf:
                    - properties:
                        day:
                          type: integer
                        month:
                          type: integer
                        year:
                          type: integer
                      required:
                        - day
                        - month
                        - year
                      title: date_of_birth_specs
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: The person's date of birth.
                documents:
                  description: >-
                    Documents that may be submitted to satisfy various
                    informational requests.
                  properties:
                    company_authorization:
                      properties:
                        files:
                          items:
                            anyOf:
                              - maxLength: 500
                                type: string
                              - enum:
                                  - ''
                                type: string
                          type: array
                      title: documents_param
                      type: object
                    passport:
                      properties:
                        files:
                          items:
                            anyOf:
                              - maxLength: 500
                                type: string
                              - enum:
                                  - ''
                                type: string
                          type: array
                      title: documents_param
                      type: object
                    visa:
                      properties:
                        files:
                          items:
                            anyOf:
                              - maxLength: 500
                                type: string
                              - enum:
                                  - ''
                                type: string
                          type: array
                      title: documents_param
                      type: object
                  title: person_documents_specs
                  type: object
                email:
                  description: The person's email address.
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                first_name:
                  description: The person's first name.
                  maxLength: 5000
                  type: string
                first_name_kana:
                  description: The Kana variation of the person's first name (Japan only).
                  maxLength: 5000
                  type: string
                first_name_kanji:
                  description: The Kanji variation of the person's first name (Japan only).
                  maxLength: 5000
                  type: string
                full_name_aliases:
                  anyOf:
                    - items:
                        maxLength: 5000
                        type: string
                      type: array
                    - enum:
                        - ''
                      type: string
                  description: >-
                    A list of alternate names or aliases that the person is
                    known by.
                gender:
                  description: >-
                    The person's gender (International regulations require
                    either "male" or "female").
                  type: string
                id_number:
                  description: >-
                    The person's ID number, as appropriate for their country.
                    For example, a social security number in the U.S., social
                    insurance number in Canada, etc. Instead of the number
                    itself, you can also provide a [PII token provided by
                    Stripe.js](https://stripe.com/docs/js/tokens/create_token?type=pii).
                  maxLength: 5000
                  type: string
                id_number_secondary:
                  description: >-
                    The person's secondary ID number, as appropriate for their
                    country, will be used for enhanced verification checks. In
                    Thailand, this would be the laser code found on the back of
                    an ID card. Instead of the number itself, you can also
                    provide a [PII token provided by
                    Stripe.js](https://stripe.com/docs/js/tokens/create_token?type=pii).
                  maxLength: 5000
                  type: string
                last_name:
                  description: The person's last name.
                  maxLength: 5000
                  type: string
                last_name_kana:
                  description: The Kana variation of the person's last name (Japan only).
                  maxLength: 5000
                  type: string
                last_name_kanji:
                  description: The Kanji variation of the person's last name (Japan only).
                  maxLength: 5000
                  type: string
                maiden_name:
                  description: The person's maiden name.
                  maxLength: 5000
                  type: string
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                nationality:
                  description: >-
                    The country where the person is a national. Two-letter
                    country code ([ISO 3166-1
                    alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)),
                    or "XX" if unavailable.
                  maxLength: 5000
                  type: string
                person_token:
                  description: >-
                    A [person
                    token](https://stripe.com/docs/connect/account-tokens), used
                    to securely provide details to the person.
                  maxLength: 5000
                  type: string
                phone:
                  description: The person's phone number.
                  type: string
                political_exposure:
                  description: >-
                    Indicates if the person or any of their representatives,
                    family members, or other closely related persons, declares
                    that they hold or have held an important public job or
                    function, in any jurisdiction.
                  maxLength: 5000
                  type: string
                registered_address:
                  description: The person's registered address.
                  properties:
                    city:
                      maxLength: 100
                      type: string
                    country:
                      maxLength: 5000
                      type: string
                    line1:
                      maxLength: 200
                      type: string
                    line2:
                      maxLength: 200
                      type: string
                    postal_code:
                      maxLength: 5000
                      type: string
                    state:
                      maxLength: 5000
                      type: string
                  title: address_specs
                  type: object
                relationship:
                  description: >-
                    The relationship that this person has with the account's
                    legal entity.
                  properties:
                    director:
                      type: boolean
                    executive:
                      type: boolean
                    legal_guardian:
                      type: boolean
                    owner:
                      type: boolean
                    percent_ownership:
                      anyOf:
                        - type: number
                        - enum:
                            - ''
                          type: string
                    representative:
                      type: boolean
                    title:
                      maxLength: 5000
                      type: string
                  title: relationship_specs
                  type: object
                ssn_last_4:
                  description: >-
                    The last four digits of the person's Social Security number
                    (U.S. only).
                  type: string
                verification:
                  description: The person's verification status.
                  properties:
                    additional_document:
                      properties:
                        back:
                          maxLength: 500
                          type: string
                        front:
                          maxLength: 500
                          type: string
                      title: person_verification_document_specs
                      type: object
                    document:
                      properties:
                        back:
                          maxLength: 500
                          type: string
                        front:
                          maxLength: 500
                          type: string
                      title: person_verification_document_specs
                      type: object
                  title: person_verification_specs
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/person'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Account People
      tags:
        - Accounts
        - People
  '/v1/accounts/{account}/persons':
    get:
      description: >-
        <p>Returns a list of people associated with the account’s legal entity.
        The people are returned sorted by creation date, with the most recent
        people appearing first.</p>
      operationId: GetAccountsAccountPersons
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
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
            Filters on the list of people returned based on the person's
            relationship to the account's company.
          explode: true
          in: query
          name: relationship
          required: false
          schema:
            properties:
              director:
                type: boolean
              executive:
                type: boolean
              legal_guardian:
                type: boolean
              owner:
                type: boolean
              representative:
                type: boolean
            title: all_people_relationship_specs
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
                      $ref: '#/components/schemas/person'
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
                title: PersonList
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
      summary: Retrieve Account Persons
      tags:
        - Accounts
        - Persons
    post:
      description: <p>Creates a new person.</p>
      operationId: PostAccountsAccountPersons
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              additional_tos_acceptances:
                explode: true
                style: deepObject
              address:
                explode: true
                style: deepObject
              address_kana:
                explode: true
                style: deepObject
              address_kanji:
                explode: true
                style: deepObject
              dob:
                explode: true
                style: deepObject
              documents:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              full_name_aliases:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              registered_address:
                explode: true
                style: deepObject
              relationship:
                explode: true
                style: deepObject
              verification:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                additional_tos_acceptances:
                  description: >-
                    Details on the legal guardian's acceptance of the required
                    Stripe agreements.
                  properties:
                    account:
                      properties:
                        date:
                          format: unix-time
                          type: integer
                        ip:
                          type: string
                        user_agent:
                          anyOf:
                            - maxLength: 5000
                              type: string
                            - enum:
                                - ''
                              type: string
                      title: settings_terms_of_service_specs
                      type: object
                  title: person_additional_tos_acceptances_specs
                  type: object
                address:
                  description: The person's address.
                  properties:
                    city:
                      maxLength: 100
                      type: string
                    country:
                      maxLength: 5000
                      type: string
                    line1:
                      maxLength: 200
                      type: string
                    line2:
                      maxLength: 200
                      type: string
                    postal_code:
                      maxLength: 5000
                      type: string
                    state:
                      maxLength: 5000
                      type: string
                  title: address_specs
                  type: object
                address_kana:
                  description: The Kana variation of the person's address (Japan only).
                  properties:
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
                    town:
                      maxLength: 5000
                      type: string
                  title: japan_address_kana_specs
                  type: object
                address_kanji:
                  description: The Kanji variation of the person's address (Japan only).
                  properties:
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
                    town:
                      maxLength: 5000
                      type: string
                  title: japan_address_kanji_specs
                  type: object
                dob:
                  anyOf:
                    - properties:
                        day:
                          type: integer
                        month:
                          type: integer
                        year:
                          type: integer
                      required:
                        - day
                        - month
                        - year
                      title: date_of_birth_specs
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: The person's date of birth.
                documents:
                  description: >-
                    Documents that may be submitted to satisfy various
                    informational requests.
                  properties:
                    company_authorization:
                      properties:
                        files:
                          items:
                            anyOf:
                              - maxLength: 500
                                type: string
                              - enum:
                                  - ''
                                type: string
                          type: array
                      title: documents_param
                      type: object
                    passport:
                      properties:
                        files:
                          items:
                            anyOf:
                              - maxLength: 500
                                type: string
                              - enum:
                                  - ''
                                type: string
                          type: array
                      title: documents_param
                      type: object
                    visa:
                      properties:
                        files:
                          items:
                            anyOf:
                              - maxLength: 500
                                type: string
                              - enum:
                                  - ''
                                type: string
                          type: array
                      title: documents_param
                      type: object
                  title: person_documents_specs
                  type: object
                email:
                  description: The person's email address.
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                first_name:
                  description: The person's first name.
                  maxLength: 5000
                  type: string
                first_name_kana:
                  description: The Kana variation of the person's first name (Japan only).
                  maxLength: 5000
                  type: string
                first_name_kanji:
                  description: The Kanji variation of the person's first name (Japan only).
                  maxLength: 5000
                  type: string
                full_name_aliases:
                  anyOf:
                    - items:
                        maxLength: 5000
                        type: string
                      type: array
                    - enum:
                        - ''
                      type: string
                  description: >-
                    A list of alternate names or aliases that the person is
                    known by.
                gender:
                  description: >-
                    The person's gender (International regulations require
                    either "male" or "female").
                  type: string
                id_number:
                  description: >-
                    The person's ID number, as appropriate for their country.
                    For example, a social security number in the U.S., social
                    insurance number in Canada, etc. Instead of the number
                    itself, you can also provide a [PII token provided by
                    Stripe.js](https://stripe.com/docs/js/tokens/create_token?type=pii).
                  maxLength: 5000
                  type: string
                id_number_secondary:
                  description: >-
                    The person's secondary ID number, as appropriate for their
                    country, will be used for enhanced verification checks. In
                    Thailand, this would be the laser code found on the back of
                    an ID card. Instead of the number itself, you can also
                    provide a [PII token provided by
                    Stripe.js](https://stripe.com/docs/js/tokens/create_token?type=pii).
                  maxLength: 5000
                  type: string
                last_name:
                  description: The person's last name.
                  maxLength: 5000
                  type: string
                last_name_kana:
                  description: The Kana variation of the person's last name (Japan only).
                  maxLength: 5000
                  type: string
                last_name_kanji:
                  description: The Kanji variation of the person's last name (Japan only).
                  maxLength: 5000
                  type: string
                maiden_name:
                  description: The person's maiden name.
                  maxLength: 5000
                  type: string
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                nationality:
                  description: >-
                    The country where the person is a national. Two-letter
                    country code ([ISO 3166-1
                    alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)),
                    or "XX" if unavailable.
                  maxLength: 5000
                  type: string
                person_token:
                  description: >-
                    A [person
                    token](https://stripe.com/docs/connect/account-tokens), used
                    to securely provide details to the person.
                  maxLength: 5000
                  type: string
                phone:
                  description: The person's phone number.
                  type: string
                political_exposure:
                  description: >-
                    Indicates if the person or any of their representatives,
                    family members, or other closely related persons, declares
                    that they hold or have held an important public job or
                    function, in any jurisdiction.
                  maxLength: 5000
                  type: string
                registered_address:
                  description: The person's registered address.
                  properties:
                    city:
                      maxLength: 100
                      type: string
                    country:
                      maxLength: 5000
                      type: string
                    line1:
                      maxLength: 200
                      type: string
                    line2:
                      maxLength: 200
                      type: string
                    postal_code:
                      maxLength: 5000
                      type: string
                    state:
                      maxLength: 5000
                      type: string
                  title: address_specs
                  type: object
                relationship:
                  description: >-
                    The relationship that this person has with the account's
                    legal entity.
                  properties:
                    director:
                      type: boolean
                    executive:
                      type: boolean
                    legal_guardian:
                      type: boolean
                    owner:
                      type: boolean
                    percent_ownership:
                      anyOf:
                        - type: number
                        - enum:
                            - ''
                          type: string
                    representative:
                      type: boolean
                    title:
                      maxLength: 5000
                      type: string
                  title: relationship_specs
                  type: object
                ssn_last_4:
                  description: >-
                    The last four digits of the person's Social Security number
                    (U.S. only).
                  type: string
                verification:
                  description: The person's verification status.
                  properties:
                    additional_document:
                      properties:
                        back:
                          maxLength: 500
                          type: string
                        front:
                          maxLength: 500
                          type: string
                      title: person_verification_document_specs
                      type: object
                    document:
                      properties:
                        back:
                          maxLength: 500
                          type: string
                        front:
                          maxLength: 500
                          type: string
                      title: person_verification_document_specs
                      type: object
                  title: person_verification_specs
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/person'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Account Person
      tags:
        - Accounts
        - Persons
  '/v1/accounts/{account}/persons/{person}':
    delete:
      description: >-
        <p>Deletes an existing person’s relationship to the account’s legal
        entity. Any person with a relationship for an account can be deleted
        through the API, except if the person is the
        <code>account_opener</code>. If your integration is using the
        <code>executive</code> parameter, you cannot delete the only verified
        <code>executive</code> on file.</p>
      operationId: DeleteAccountsAccountPersonsPerson
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: person
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
                $ref: '#/components/schemas/deleted_person'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Account Person
      tags:
        - Accounts
        - Persons
    get:
      description: <p>Retrieves an existing person.</p>
      operationId: GetAccountsAccountPersonsPerson
      parameters:
        - in: path
          name: account
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
        - in: path
          name: person
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
                $ref: '#/components/schemas/person'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Account Person
      tags:
        - Accounts
        - Persons
    post:
      description: <p>Updates an existing person.</p>
      operationId: PostAccountsAccountPersonsPerson
      parameters:
        - in: path
          name: account
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: person
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              additional_tos_acceptances:
                explode: true
                style: deepObject
              address:
                explode: true
                style: deepObject
              address_kana:
                explode: true
                style: deepObject
              address_kanji:
                explode: true
                style: deepObject
              dob:
                explode: true
                style: deepObject
              documents:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              full_name_aliases:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              registered_address:
                explode: true
                style: deepObject
              relationship:
                explode: true
                style: deepObject
              verification:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                additional_tos_acceptances:
                  description: >-
                    Details on the legal guardian's acceptance of the required
                    Stripe agreements.
                  properties:
                    account:
                      properties:
                        date:
                          format: unix-time
                          type: integer
                        ip:
                          type: string
                        user_agent:
                          anyOf:
                            - maxLength: 5000
                              type: string
                            - enum:
                                - ''
                              type: string
                      title: settings_terms_of_service_specs
                      type: object
                  title: person_additional_tos_acceptances_specs
                  type: object
                address:
                  description: The person's address.
                  properties:
                    city:
                      maxLength: 100
                      type: string
                    country:
                      maxLength: 5000
                      type: string
                    line1:
                      maxLength: 200
                      type: string
                    line2:
                      maxLength: 200
                      type: string
                    postal_code:
                      maxLength: 5000
                      type: string
                    state:
                      maxLength: 5000
                      type: string
                  title: address_specs
                  type: object
                address_kana:
                  description: The Kana variation of the person's address (Japan only).
                  properties:
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
                    town:
                      maxLength: 5000
                      type: string
                  title: japan_address_kana_specs
                  type: object
                address_kanji:
                  description: The Kanji variation of the person's address (Japan only).
                  properties:
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
                    town:
                      maxLength: 5000
                      type: string
                  title: japan_address_kanji_specs
                  type: object
                dob:
                  anyOf:
                    - properties:
                        day:
                          type: integer
                        month:
                          type: integer
                        year:
                          type: integer
                      required:
                        - day
                        - month
                        - year
                      title: date_of_birth_specs
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: The person's date of birth.
                documents:
                  description: >-
                    Documents that may be submitted to satisfy various
                    informational requests.
                  properties:
                    company_authorization:
                      properties:
                        files:
                          items:
                            anyOf:
                              - maxLength: 500
                                type: string
                              - enum:
                                  - ''
                                type: string
                          type: array
                      title: documents_param
                      type: object
                    passport:
                      properties:
                        files:
                          items:
                            anyOf:
                              - maxLength: 500
                                type: string
                              - enum:
                                  - ''
                                type: string
                          type: array
                      title: documents_param
                      type: object
                    visa:
                      properties:
                        files:
                          items:
                            anyOf:
                              - maxLength: 500
                                type: string
                              - enum:
                                  - ''
                                type: string
                          type: array
                      title: documents_param
                      type: object
                  title: person_documents_specs
                  type: object
                email:
                  description: The person's email address.
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                first_name:
                  description: The person's first name.
                  maxLength: 5000
                  type: string
                first_name_kana:
                  description: The Kana variation of the person's first name (Japan only).
                  maxLength: 5000
                  type: string
                first_name_kanji:
                  description: The Kanji variation of the person's first name (Japan only).
                  maxLength: 5000
                  type: string
                full_name_aliases:
                  anyOf:
                    - items:
                        maxLength: 5000
                        type: string
                      type: array
                    - enum:
                        - ''
                      type: string
                  description: >-
                    A list of alternate names or aliases that the person is
                    known by.
                gender:
                  description: >-
                    The person's gender (International regulations require
                    either "male" or "female").
                  type: string
                id_number:
                  description: >-
                    The person's ID number, as appropriate for their country.
                    For example, a social security number in the U.S., social
                    insurance number in Canada, etc. Instead of the number
                    itself, you can also provide a [PII token provided by
                    Stripe.js](https://stripe.com/docs/js/tokens/create_token?type=pii).
                  maxLength: 5000
                  type: string
                id_number_secondary:
                  description: >-
                    The person's secondary ID number, as appropriate for their
                    country, will be used for enhanced verification checks. In
                    Thailand, this would be the laser code found on the back of
                    an ID card. Instead of the number itself, you can also
                    provide a [PII token provided by
                    Stripe.js](https://stripe.com/docs/js/tokens/create_token?type=pii).
                  maxLength: 5000
                  type: string
                last_name:
                  description: The person's last name.
                  maxLength: 5000
                  type: string
                last_name_kana:
                  description: The Kana variation of the person's last name (Japan only).
                  maxLength: 5000
                  type: string
                last_name_kanji:
                  description: The Kanji variation of the person's last name (Japan only).
                  maxLength: 5000
                  type: string
                maiden_name:
                  description: The person's maiden name.
                  maxLength: 5000
                  type: string
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                nationality:
                  description: >-
                    The country where the person is a national. Two-letter
                    country code ([ISO 3166-1
                    alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)),
                    or "XX" if unavailable.
                  maxLength: 5000
                  type: string
                person_token:
                  description: >-
                    A [person
                    token](https://stripe.com/docs/connect/account-tokens), used
                    to securely provide details to the person.
                  maxLength: 5000
                  type: string
                phone:
                  description: The person's phone number.
                  type: string
                political_exposure:
                  description: >-
                    Indicates if the person or any of their representatives,
                    family members, or other closely related persons, declares
                    that they hold or have held an important public job or
                    function, in any jurisdiction.
                  maxLength: 5000
                  type: string
                registered_address:
                  description: The person's registered address.
                  properties:
                    city:
                      maxLength: 100
                      type: string
                    country:
                      maxLength: 5000
                      type: string
                    line1:
                      maxLength: 200
                      type: string
                    line2:
                      maxLength: 200
                      type: string
                    postal_code:
                      maxLength: 5000
                      type: string
                    state:
                      maxLength: 5000
                      type: string
                  title: address_specs
                  type: object
                relationship:
                  description: >-
                    The relationship that this person has with the account's
                    legal entity.
                  properties:
                    director:
                      type: boolean
                    executive:
                      type: boolean
                    legal_guardian:
                      type: boolean
                    owner:
                      type: boolean
                    percent_ownership:
                      anyOf:
                        - type: number
                        - enum:
                            - ''
                          type: string
                    representative:
                      type: boolean
                    title:
                      maxLength: 5000
                      type: string
                  title: relationship_specs
                  type: object
                ssn_last_4:
                  description: >-
                    The last four digits of the person's Social Security number
                    (U.S. only).
                  type: string
                verification:
                  description: The person's verification status.
                  properties:
                    additional_document:
                      properties:
                        back:
                          maxLength: 500
                          type: string
                        front:
                          maxLength: 500
                          type: string
                      title: person_verification_document_specs
                      type: object
                    document:
                      properties:
                        back:
                          maxLength: 500
                          type: string
                        front:
                          maxLength: 500
                          type: string
                      title: person_verification_document_specs
                      type: object
                  title: person_verification_specs
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/person'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Account Person
      tags:
        - Accounts
        - Persons
  '/v1/accounts/{account}/reject':
    post:
      description: >-
        <p>With <a href="/docs/connect">Connect</a>, you may flag accounts as
        suspicious.</p>


        <p>Test-mode Custom and Express accounts can be rejected at any time.
        Accounts created using live-mode keys may only be rejected once all
        balances are zero.</p>
      operationId: PostAccountsAccountReject
      parameters:
        - in: path
          name: account
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
                reason:
                  description: >-
                    The reason for rejecting the account. Can be `fraud`,
                    `terms_of_service`, or `other`.
                  maxLength: 5000
                  type: string
              required:
                - reason
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Reject Account
      tags:
        - Accounts
        - Rejects
components:
  schemas:
    account:
      description: >-
        This is an object representing a Stripe account. You can retrieve it to
        see

        properties on the account like its current requirements or if the
        account is

        enabled to make live charges or receive payouts.


        For Custom accounts, the properties below are always returned. For other
        accounts, some properties are returned until that

        account has started to go through Connect Onboarding. Once you create an
        [Account Link](https://stripe.com/docs/api/account_links)

        for a Standard or Express account, some parameters are no longer
        returned. These are marked as **Custom Only** or **Custom and Express**

        below. Learn about the differences [between
        accounts](https://stripe.com/docs/connect/accounts).
      properties:
        business_profile:
          anyOf:
            - $ref: '#/components/schemas/account_business_profile'
          description: Business information about the account.
          nullable: true
        business_type:
          description: The business type.
          enum:
            - company
            - government_entity
            - individual
            - non_profit
          nullable: true
          type: string
          x-stripeBypassValidation: true
        capabilities:
          $ref: '#/components/schemas/account_capabilities'
        charges_enabled:
          description: Whether the account can create live charges.
          type: boolean
        company:
          $ref: '#/components/schemas/legal_entity_company'
        controller:
          $ref: '#/components/schemas/account_unification_account_controller'
        country:
          description: The account's country.
          maxLength: 5000
          type: string
        created:
          description: >-
            Time at which the account was connected. Measured in seconds since
            the Unix epoch.
          format: unix-time
          type: integer
        default_currency:
          description: >-
            Three-letter ISO currency code representing the default currency for
            the account. This must be a currency that [Stripe supports in the
            account's country](https://stripe.com/docs/payouts).
          maxLength: 5000
          type: string
        details_submitted:
          description: >-
            Whether account details have been submitted. Standard accounts
            cannot receive payouts before this is true.
          type: boolean
        email:
          description: >-
            An email address associated with the account. It's not used for
            authentication and Stripe doesn't market to this field without
            explicit approval from the platform.
          maxLength: 5000
          nullable: true
          type: string
        external_accounts:
          description: >-
            External accounts (bank accounts and debit cards) currently attached
            to this account
          properties:
            data:
              description: >-
                The list contains all external accounts that have been attached
                to the Stripe account. These may be bank accounts or cards.
              items:
                anyOf:
                  - $ref: '#/components/schemas/bank_account'
                  - $ref: '#/components/schemas/card'
                title: Polymorphic
                x-stripeBypassValidation: true
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
              type: string
          required:
            - data
            - has_more
            - object
            - url
          title: ExternalAccountList
          type: object
          x-expandableFields:
            - data
        future_requirements:
          $ref: '#/components/schemas/account_future_requirements'
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        individual:
          $ref: '#/components/schemas/person'
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
            - account
          type: string
        payouts_enabled:
          description: Whether Stripe can send payouts to this account.
          type: boolean
        requirements:
          $ref: '#/components/schemas/account_requirements'
        settings:
          anyOf:
            - $ref: '#/components/schemas/account_settings'
          description: Options for customizing how the account functions within Stripe.
          nullable: true
        tos_acceptance:
          $ref: '#/components/schemas/account_tos_acceptance'
        type:
          description: 'The Stripe account type. Can be `standard`, `express`, or `custom`.'
          enum:
            - custom
            - express
            - standard
          type: string
      required:
        - id
        - object
      title: Account
      type: object
      x-expandableFields:
        - business_profile
        - capabilities
        - company
        - controller
        - external_accounts
        - future_requirements
        - individual
        - requirements
        - settings
        - tos_acceptance
      x-resourceId: account
    error:
      description: An error response from the Stripe API
      properties:
        error:
          $ref: '#/components/schemas/api_errors'
      required:
        - error
      type: object
    account_link:
      description: >-
        Account Links are the means by which a Connect platform grants a
        connected account permission to access

        Stripe-hosted applications, such as Connect Onboarding.


        Related guide: [Connect
        Onboarding](https://stripe.com/docs/connect/custom/hosted-onboarding)
      properties:
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        expires_at:
          description: The timestamp at which this account link will expire.
          format: unix-time
          type: integer
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - account_link
          type: string
        url:
          description: The URL for the account link.
          maxLength: 5000
          type: string
      required:
        - created
        - expires_at
        - object
        - url
      title: AccountLink
      type: object
      x-expandableFields: []
      x-resourceId: account_link
    account_session:
      description: >-
        An AccountSession allows a Connect platform to grant access to a
        connected account in Connect embedded components.


        We recommend that you create an AccountSession each time you need to
        display an embedded component

        to your user. Do not save AccountSessions to your database as they
        expire relatively

        quickly, and cannot be used more than once.


        Related guide: [Connect embedded
        components](https://stripe.com/docs/connect/get-started-connect-embedded-components)
      properties:
        account:
          description: The ID of the account the AccountSession was created for
          maxLength: 5000
          type: string
        client_secret:
          description: >-
            The client secret of this AccountSession. Used on the client to set
            up secure access to the given `account`.


            The client secret can be used to provide access to `account` from
            your frontend. It should not be stored, logged, or exposed to anyone
            other than the connected account. Make sure that you have TLS
            enabled on any page that includes the client secret.


            Refer to our docs to [setup Connect embedded
            components](https://stripe.com/docs/connect/get-started-connect-embedded-components)
            and learn about how `client_secret` should be handled.
          maxLength: 5000
          type: string
        components:
          $ref: >-
            #/components/schemas/connect_embedded_account_session_create_components
        expires_at:
          description: The timestamp at which this AccountSession will expire.
          format: unix-time
          type: integer
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
            - account_session
          type: string
      required:
        - account
        - client_secret
        - components
        - expires_at
        - livemode
        - object
      title: ConnectEmbeddedMethodAccountSessionCreateMethodAccountSession
      type: object
      x-expandableFields:
        - components
      x-resourceId: account_session
    deleted_account:
      description: ''
      properties:
        deleted:
          description: Always true for a deleted object
          enum:
            - true
          type: boolean
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - account
          type: string
      required:
        - deleted
        - id
        - object
      title: DeletedAccount
      type: object
      x-expandableFields: []
      x-resourceId: deleted_account
    external_account:
      anyOf:
        - $ref: '#/components/schemas/bank_account'
        - $ref: '#/components/schemas/card'
      title: Polymorphic
      x-resourceId: external_account
      x-stripeBypassValidation: true
    deleted_external_account:
      anyOf:
        - $ref: '#/components/schemas/deleted_bank_account'
        - $ref: '#/components/schemas/deleted_card'
      title: Polymorphic
      x-resourceId: deleted_external_account
      x-stripeBypassValidation: true
    capability:
      description: >-
        This is an object representing a capability for a Stripe account.


        Related guide: [Account
        capabilities](https://stripe.com/docs/connect/account-capabilities)
      properties:
        account:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/account'
          description: The account for which the capability enables functionality.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/account'
        future_requirements:
          $ref: '#/components/schemas/account_capability_future_requirements'
        id:
          description: The identifier for the capability.
          maxLength: 5000
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - capability
          type: string
        requested:
          description: Whether the capability has been requested.
          type: boolean
        requested_at:
          description: >-
            Time at which the capability was requested. Measured in seconds
            since the Unix epoch.
          format: unix-time
          nullable: true
          type: integer
        requirements:
          $ref: '#/components/schemas/account_capability_requirements'
        status:
          description: >-
            The status of the capability. Can be `active`, `inactive`,
            `pending`, or `unrequested`.
          enum:
            - active
            - disabled
            - inactive
            - pending
            - unrequested
          type: string
      required:
        - account
        - id
        - object
        - requested
        - status
      title: AccountCapability
      type: object
      x-expandableFields:
        - account
        - future_requirements
        - requirements
      x-resourceId: capability
    login_link:
      description: >-
        Login Links are single-use login link for an Express account to access
        their Stripe dashboard.
      properties:
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - login_link
          type: string
        url:
          description: The URL for the login link.
          maxLength: 5000
          type: string
      required:
        - created
        - object
        - url
      title: LoginLink
      type: object
      x-expandableFields: []
      x-resourceId: login_link
    person:
      description: >-
        This is an object representing a person associated with a Stripe
        account.


        A platform cannot access a Standard or Express account's persons after
        the account starts onboarding, such as after generating an account link
        for the account.

        See the [Standard
        onboarding](https://stripe.com/docs/connect/standard-accounts) or
        [Express onboarding
        documentation](https://stripe.com/docs/connect/express-accounts) for
        information about platform prefilling and account onboarding steps.


        Related guide: [Handling identity verification with the
        API](https://stripe.com/docs/connect/handling-api-verification#person-information)
      properties:
        account:
          description: The account the person is associated with.
          maxLength: 5000
          type: string
        additional_tos_acceptances:
          $ref: '#/components/schemas/person_additional_tos_acceptances'
        address:
          $ref: '#/components/schemas/address'
        address_kana:
          anyOf:
            - $ref: '#/components/schemas/legal_entity_japan_address'
          nullable: true
        address_kanji:
          anyOf:
            - $ref: '#/components/schemas/legal_entity_japan_address'
          nullable: true
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        dob:
          $ref: '#/components/schemas/legal_entity_dob'
        email:
          description: The person's email address.
          maxLength: 5000
          nullable: true
          type: string
        first_name:
          description: The person's first name.
          maxLength: 5000
          nullable: true
          type: string
        first_name_kana:
          description: The Kana variation of the person's first name (Japan only).
          maxLength: 5000
          nullable: true
          type: string
        first_name_kanji:
          description: The Kanji variation of the person's first name (Japan only).
          maxLength: 5000
          nullable: true
          type: string
        full_name_aliases:
          description: A list of alternate names or aliases that the person is known by.
          items:
            maxLength: 5000
            type: string
          type: array
        future_requirements:
          anyOf:
            - $ref: '#/components/schemas/person_future_requirements'
          nullable: true
        gender:
          description: >-
            The person's gender (International regulations require either "male"
            or "female").
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        id_number_provided:
          description: >-
            Whether the person's `id_number` was provided. True if either the
            full ID number was provided or if only the required part of the ID
            number was provided (ex. last four of an individual's SSN for the US
            indicated by `ssn_last_4_provided`).
          type: boolean
        id_number_secondary_provided:
          description: Whether the person's `id_number_secondary` was provided.
          type: boolean
        last_name:
          description: The person's last name.
          maxLength: 5000
          nullable: true
          type: string
        last_name_kana:
          description: The Kana variation of the person's last name (Japan only).
          maxLength: 5000
          nullable: true
          type: string
        last_name_kanji:
          description: The Kanji variation of the person's last name (Japan only).
          maxLength: 5000
          nullable: true
          type: string
        maiden_name:
          description: The person's maiden name.
          maxLength: 5000
          nullable: true
          type: string
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          type: object
        nationality:
          description: The country where the person is a national.
          maxLength: 5000
          nullable: true
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - person
          type: string
        phone:
          description: The person's phone number.
          maxLength: 5000
          nullable: true
          type: string
        political_exposure:
          description: >-
            Indicates if the person or any of their representatives, family
            members, or other closely related persons, declares that they hold
            or have held an important public job or function, in any
            jurisdiction.
          enum:
            - existing
            - none
          type: string
        registered_address:
          $ref: '#/components/schemas/address'
        relationship:
          $ref: '#/components/schemas/person_relationship'
        requirements:
          anyOf:
            - $ref: '#/components/schemas/person_requirements'
          nullable: true
        ssn_last_4_provided:
          description: >-
            Whether the last four digits of the person's Social Security number
            have been provided (U.S. only).
          type: boolean
        verification:
          $ref: '#/components/schemas/legal_entity_person_verification'
      required:
        - account
        - created
        - id
        - object
      title: Person
      type: object
      x-expandableFields:
        - additional_tos_acceptances
        - address
        - address_kana
        - address_kanji
        - dob
        - future_requirements
        - registered_address
        - relationship
        - requirements
        - verification
      x-resourceId: person
    deleted_person:
      description: ''
      properties:
        deleted:
          description: Always true for a deleted object
          enum:
            - true
          type: boolean
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - person
          type: string
      required:
        - deleted
        - id
        - object
      title: DeletedPerson
      type: object
      x-expandableFields: []
      x-resourceId: deleted_person
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
  - name: Accounts
    description: Needs a description.
  - name: Links
    description: Needs a description.
  - name: Sessions
    description: Needs a description.
  - name: Banks
    description: Needs a description.
  - name: Capabilities
    description: Needs a description.
  - name: External
    description: Needs a description.
  - name: Login
    description: Needs a description.
  - name: People
    description: Needs a description.
  - name: Persons
    description: Needs a description.
  - name: Rejects
    description: Needs a description.
---