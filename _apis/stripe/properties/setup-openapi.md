---
openapi: 3.0.0
info:
  title: Stripe Setup API
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
  /v1/setup_attempts:
    get:
      description: >-
        <p>Returns a list of SetupAttempts that associate with a provided
        SetupIntent.</p>
      operationId: GetSetupAttempts
      parameters:
        - description: |-
            A filter on the list, based on the object `created` field. The value
            can be a string with an integer Unix timestamp or a
            dictionary with a number of different query options.
          explode: true
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
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: |-
            Only return SetupAttempts created by the SetupIntent specified by
            this ID.
          in: query
          name: setup_intent
          required: true
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
                      $ref: '#/components/schemas/setup_attempt'
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
                    pattern: ^/v1/setup_attempts
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: PaymentFlowsSetupIntentSetupAttemptList
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
      summary: Retrieve Setup Attempts
      tags:
        - Setup
        - Attempts
  /v1/setup_intents:
    get:
      description: <p>Returns a list of SetupIntents.</p>
      operationId: GetSetupIntents
      parameters:
        - description: >-
            If present, the SetupIntent's payment method will be attached to the
            in-context Stripe Account.


            It can only be used for this Stripe Account’s own money movement
            flows like InboundTransfer and OutboundTransfers. It cannot be set
            to true when setting up a PaymentMethod for a Customer, and defaults
            to false when attaching a PaymentMethod to a Customer.
          in: query
          name: attach_to_self
          required: false
          schema:
            type: boolean
          style: form
        - description: >-
            A filter on the list, based on the object `created` field. The value
            can be a string with an integer Unix timestamp, or it can be a
            dictionary with a number of different query options.
          explode: true
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
            Only return SetupIntents for the customer specified by this customer
            ID.
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
            Only return SetupIntents that associate with the specified payment
            method.
          in: query
          name: payment_method
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
                      $ref: '#/components/schemas/setup_intent'
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
                    pattern: ^/v1/setup_intents
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: PaymentFlowsSetupIntentList
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
      summary: Retrieve Setup Intents
      tags:
        - Setup
        - Intents
    post:
      description: >-
        <p>Creates a SetupIntent object.</p>


        <p>After you create the SetupIntent, attach a payment method and <a
        href="/docs/api/setup_intents/confirm">confirm</a>

        it to collect any required permissions to charge the payment method
        later.</p>
      operationId: PostSetupIntents
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              automatic_payment_methods:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              flow_directions:
                explode: true
                style: deepObject
              mandate_data:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              payment_method_data:
                explode: true
                style: deepObject
              payment_method_options:
                explode: true
                style: deepObject
              payment_method_types:
                explode: true
                style: deepObject
              single_use:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                attach_to_self:
                  description: >-
                    If present, the SetupIntent's payment method will be
                    attached to the in-context Stripe Account.


                    It can only be used for this Stripe Account’s own money
                    movement flows like InboundTransfer and OutboundTransfers.
                    It cannot be set to true when setting up a PaymentMethod for
                    a Customer, and defaults to false when attaching a
                    PaymentMethod to a Customer.
                  type: boolean
                automatic_payment_methods:
                  description: >-
                    When you enable this parameter, this SetupIntent accepts
                    payment methods that you enable in the Dashboard and that
                    are compatible with its other parameters.
                  properties:
                    allow_redirects:
                      enum:
                        - always
                        - never
                      type: string
                    enabled:
                      type: boolean
                  required:
                    - enabled
                  title: automatic_payment_methods_param
                  type: object
                confirm:
                  description: >-
                    Set to `true` to attempt to confirm this SetupIntent
                    immediately. This parameter defaults to `false`. If a card
                    is the attached payment method, you can provide a
                    `return_url` in case further authentication is necessary.
                  type: boolean
                customer:
                  description: >-
                    ID of the Customer this SetupIntent belongs to, if one
                    exists.


                    If present, the SetupIntent's payment method will be
                    attached to the Customer on successful setup. Payment
                    methods attached to other Customers cannot be used with this
                    SetupIntent.
                  maxLength: 5000
                  type: string
                description:
                  description: >-
                    An arbitrary string attached to the object. Often useful for
                    displaying to users.
                  maxLength: 1000
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                flow_directions:
                  description: >-
                    Indicates the directions of money movement for which this
                    payment method is intended to be used.


                    Include `inbound` if you intend to use the payment method as
                    the origin to pull funds from. Include `outbound` if you
                    intend to use the payment method as the destination to send
                    funds to. You can include both if you intend to use the
                    payment method for both purposes.
                  items:
                    enum:
                      - inbound
                      - outbound
                    type: string
                  type: array
                mandate_data:
                  anyOf:
                    - properties:
                        customer_acceptance:
                          properties:
                            accepted_at:
                              format: unix-time
                              type: integer
                            offline:
                              properties: {}
                              title: offline_param
                              type: object
                            online:
                              properties:
                                ip_address:
                                  type: string
                                user_agent:
                                  maxLength: 5000
                                  type: string
                              required:
                                - ip_address
                                - user_agent
                              title: online_param
                              type: object
                            type:
                              enum:
                                - offline
                                - online
                              maxLength: 5000
                              type: string
                          required:
                            - type
                          title: customer_acceptance_param
                          type: object
                      required:
                        - customer_acceptance
                      title: secret_key_param
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    This hash contains details about the mandate to create. This
                    parameter can only be used with
                    [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
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
                on_behalf_of:
                  description: The Stripe account ID created for this SetupIntent.
                  type: string
                payment_method:
                  description: >-
                    ID of the payment method (a PaymentMethod, Card, or saved
                    Source object) to attach to this SetupIntent.
                  maxLength: 5000
                  type: string
                payment_method_configuration:
                  description: >-
                    The ID of the payment method configuration to use with this
                    SetupIntent.
                  maxLength: 100
                  type: string
                payment_method_data:
                  description: >-
                    When included, this hash creates a PaymentMethod that is set
                    as the
                    [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)

                    value in the SetupIntent.
                  properties:
                    acss_debit:
                      properties:
                        account_number:
                          maxLength: 5000
                          type: string
                        institution_number:
                          maxLength: 5000
                          type: string
                        transit_number:
                          maxLength: 5000
                          type: string
                      required:
                        - account_number
                        - institution_number
                        - transit_number
                      title: payment_method_param
                      type: object
                    affirm:
                      properties: {}
                      title: param
                      type: object
                    afterpay_clearpay:
                      properties: {}
                      title: param
                      type: object
                    alipay:
                      properties: {}
                      title: param
                      type: object
                    au_becs_debit:
                      properties:
                        account_number:
                          maxLength: 5000
                          type: string
                        bsb_number:
                          maxLength: 5000
                          type: string
                      required:
                        - account_number
                        - bsb_number
                      title: param
                      type: object
                    bacs_debit:
                      properties:
                        account_number:
                          maxLength: 5000
                          type: string
                        sort_code:
                          maxLength: 5000
                          type: string
                      title: param
                      type: object
                    bancontact:
                      properties: {}
                      title: param
                      type: object
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
                    blik:
                      properties: {}
                      title: param
                      type: object
                    boleto:
                      properties:
                        tax_id:
                          maxLength: 5000
                          type: string
                      required:
                        - tax_id
                      title: param
                      type: object
                    cashapp:
                      properties: {}
                      title: param
                      type: object
                    customer_balance:
                      properties: {}
                      title: param
                      type: object
                    eps:
                      properties:
                        bank:
                          enum:
                            - arzte_und_apotheker_bank
                            - austrian_anadi_bank_ag
                            - bank_austria
                            - bankhaus_carl_spangler
                            - bankhaus_schelhammer_und_schattera_ag
                            - bawag_psk_ag
                            - bks_bank_ag
                            - brull_kallmus_bank_ag
                            - btv_vier_lander_bank
                            - capital_bank_grawe_gruppe_ag
                            - deutsche_bank_ag
                            - dolomitenbank
                            - easybank_ag
                            - erste_bank_und_sparkassen
                            - hypo_alpeadriabank_international_ag
                            - hypo_bank_burgenland_aktiengesellschaft
                            - hypo_noe_lb_fur_niederosterreich_u_wien
                            - hypo_oberosterreich_salzburg_steiermark
                            - hypo_tirol_bank_ag
                            - hypo_vorarlberg_bank_ag
                            - marchfelder_bank
                            - oberbank_ag
                            - raiffeisen_bankengruppe_osterreich
                            - schoellerbank_ag
                            - sparda_bank_wien
                            - volksbank_gruppe
                            - volkskreditbank_ag
                            - vr_bank_braunau
                          maxLength: 5000
                          type: string
                      title: param
                      type: object
                    fpx:
                      properties:
                        bank:
                          enum:
                            - affin_bank
                            - agrobank
                            - alliance_bank
                            - ambank
                            - bank_islam
                            - bank_muamalat
                            - bank_of_china
                            - bank_rakyat
                            - bsn
                            - cimb
                            - deutsche_bank
                            - hong_leong_bank
                            - hsbc
                            - kfh
                            - maybank2e
                            - maybank2u
                            - ocbc
                            - pb_enterprise
                            - public_bank
                            - rhb
                            - standard_chartered
                            - uob
                          maxLength: 5000
                          type: string
                          x-stripeBypassValidation: true
                      required:
                        - bank
                      title: param
                      type: object
                    giropay:
                      properties: {}
                      title: param
                      type: object
                    grabpay:
                      properties: {}
                      title: param
                      type: object
                    ideal:
                      properties:
                        bank:
                          enum:
                            - abn_amro
                            - asn_bank
                            - bunq
                            - handelsbanken
                            - ing
                            - knab
                            - moneyou
                            - n26
                            - rabobank
                            - regiobank
                            - revolut
                            - sns_bank
                            - triodos_bank
                            - van_lanschot
                            - yoursafe
                          maxLength: 5000
                          type: string
                      title: param
                      type: object
                    interac_present:
                      properties: {}
                      title: param
                      type: object
                    klarna:
                      properties:
                        dob:
                          properties:
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
                          title: date_of_birth
                          type: object
                      title: param
                      type: object
                    konbini:
                      properties: {}
                      title: param
                      type: object
                    link:
                      properties: {}
                      title: param
                      type: object
                    metadata:
                      additionalProperties:
                        type: string
                      type: object
                    oxxo:
                      properties: {}
                      title: param
                      type: object
                    p24:
                      properties:
                        bank:
                          enum:
                            - alior_bank
                            - bank_millennium
                            - bank_nowy_bfg_sa
                            - bank_pekao_sa
                            - banki_spbdzielcze
                            - blik
                            - bnp_paribas
                            - boz
                            - citi_handlowy
                            - credit_agricole
                            - envelobank
                            - etransfer_pocztowy24
                            - getin_bank
                            - ideabank
                            - ing
                            - inteligo
                            - mbank_mtransfer
                            - nest_przelew
                            - noble_pay
                            - pbac_z_ipko
                            - plus_bank
                            - santander_przelew24
                            - tmobile_usbugi_bankowe
                            - toyota_bank
                            - volkswagen_bank
                          type: string
                          x-stripeBypassValidation: true
                      title: param
                      type: object
                    paynow:
                      properties: {}
                      title: param
                      type: object
                    paypal:
                      properties: {}
                      title: param
                      type: object
                    pix:
                      properties: {}
                      title: param
                      type: object
                    promptpay:
                      properties: {}
                      title: param
                      type: object
                    radar_options:
                      properties:
                        session:
                          maxLength: 5000
                          type: string
                      title: radar_options
                      type: object
                    revolut_pay:
                      properties: {}
                      title: param
                      type: object
                    sepa_debit:
                      properties:
                        iban:
                          maxLength: 5000
                          type: string
                      required:
                        - iban
                      title: param
                      type: object
                    sofort:
                      properties:
                        country:
                          enum:
                            - AT
                            - BE
                            - DE
                            - ES
                            - IT
                            - NL
                          type: string
                      required:
                        - country
                      title: param
                      type: object
                    type:
                      enum:
                        - acss_debit
                        - affirm
                        - afterpay_clearpay
                        - alipay
                        - au_becs_debit
                        - bacs_debit
                        - bancontact
                        - blik
                        - boleto
                        - cashapp
                        - customer_balance
                        - eps
                        - fpx
                        - giropay
                        - grabpay
                        - ideal
                        - klarna
                        - konbini
                        - link
                        - oxxo
                        - p24
                        - paynow
                        - paypal
                        - pix
                        - promptpay
                        - revolut_pay
                        - sepa_debit
                        - sofort
                        - us_bank_account
                        - wechat_pay
                        - zip
                      type: string
                      x-stripeBypassValidation: true
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
                    wechat_pay:
                      properties: {}
                      title: param
                      type: object
                    zip:
                      properties: {}
                      title: param
                      type: object
                  required:
                    - type
                  title: payment_method_data_params
                  type: object
                payment_method_options:
                  description: Payment method-specific configuration for this SetupIntent.
                  properties:
                    acss_debit:
                      properties:
                        currency:
                          enum:
                            - cad
                            - usd
                          type: string
                        mandate_options:
                          properties:
                            custom_mandate_url:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            default_for:
                              items:
                                enum:
                                  - invoice
                                  - subscription
                                type: string
                              type: array
                            interval_description:
                              maxLength: 500
                              type: string
                            payment_schedule:
                              enum:
                                - combined
                                - interval
                                - sporadic
                              type: string
                            transaction_type:
                              enum:
                                - business
                                - personal
                              type: string
                          title: >-
                            setup_intent_payment_method_options_mandate_options_param
                          type: object
                        verification_method:
                          enum:
                            - automatic
                            - instant
                            - microdeposits
                          type: string
                          x-stripeBypassValidation: true
                      title: setup_intent_payment_method_options_param
                      type: object
                    card:
                      properties:
                        mandate_options:
                          properties:
                            amount:
                              type: integer
                            amount_type:
                              enum:
                                - fixed
                                - maximum
                              type: string
                            currency:
                              type: string
                            description:
                              maxLength: 200
                              type: string
                            end_date:
                              format: unix-time
                              type: integer
                            interval:
                              enum:
                                - day
                                - month
                                - sporadic
                                - week
                                - year
                              type: string
                            interval_count:
                              type: integer
                            reference:
                              maxLength: 80
                              type: string
                            start_date:
                              format: unix-time
                              type: integer
                            supported_types:
                              items:
                                enum:
                                  - india
                                type: string
                              type: array
                          required:
                            - amount
                            - amount_type
                            - currency
                            - interval
                            - reference
                            - start_date
                          title: setup_intent_mandate_options_param
                          type: object
                        network:
                          enum:
                            - amex
                            - cartes_bancaires
                            - diners
                            - discover
                            - eftpos_au
                            - interac
                            - jcb
                            - mastercard
                            - unionpay
                            - unknown
                            - visa
                          maxLength: 5000
                          type: string
                          x-stripeBypassValidation: true
                        request_three_d_secure:
                          enum:
                            - any
                            - automatic
                            - challenge
                          type: string
                          x-stripeBypassValidation: true
                        three_d_secure:
                          properties:
                            ares_trans_status:
                              enum:
                                - A
                                - C
                                - I
                                - 'N'
                                - R
                                - U
                                - 'Y'
                              type: string
                            cryptogram:
                              maxLength: 5000
                              type: string
                            electronic_commerce_indicator:
                              enum:
                                - '01'
                                - '02'
                                - '05'
                                - '06'
                                - '07'
                              type: string
                              x-stripeBypassValidation: true
                            network_options:
                              properties:
                                cartes_bancaires:
                                  properties:
                                    cb_avalgo:
                                      enum:
                                        - '0'
                                        - '1'
                                        - '2'
                                        - '3'
                                        - '4'
                                        - A
                                      type: string
                                    cb_exemption:
                                      maxLength: 4
                                      type: string
                                    cb_score:
                                      type: integer
                                  required:
                                    - cb_avalgo
                                  title: cartes_bancaires_network_options_param
                                  type: object
                              title: network_options_param
                              type: object
                            requestor_challenge_indicator:
                              maxLength: 2
                              type: string
                            transaction_id:
                              maxLength: 5000
                              type: string
                            version:
                              enum:
                                - 1.0.2
                                - 2.1.0
                                - 2.2.0
                              type: string
                              x-stripeBypassValidation: true
                          title: setup_intent_payment_method_options_param
                          type: object
                      title: setup_intent_param
                      type: object
                    link:
                      properties: {}
                      title: setup_intent_payment_method_options_param
                      type: object
                    paypal:
                      properties:
                        billing_agreement_id:
                          maxLength: 5000
                          type: string
                      title: payment_method_options_param
                      type: object
                    sepa_debit:
                      properties:
                        mandate_options:
                          properties: {}
                          title: payment_method_options_mandate_options_param
                          type: object
                      title: setup_intent_payment_method_options_param
                      type: object
                    us_bank_account:
                      properties:
                        financial_connections:
                          properties:
                            permissions:
                              items:
                                enum:
                                  - balances
                                  - ownership
                                  - payment_method
                                  - transactions
                                maxLength: 5000
                                type: string
                                x-stripeBypassValidation: true
                              type: array
                            prefetch:
                              items:
                                enum:
                                  - balances
                                  - transactions
                                type: string
                                x-stripeBypassValidation: true
                              type: array
                            return_url:
                              maxLength: 5000
                              type: string
                          title: linked_account_options_param
                          type: object
                        mandate_options:
                          properties:
                            collection_method:
                              enum:
                                - ''
                                - paper
                              type: string
                              x-stripeBypassValidation: true
                          title: mandate_options_param
                          type: object
                        networks:
                          properties:
                            requested:
                              items:
                                enum:
                                  - ach
                                  - us_domestic_wire
                                type: string
                              type: array
                          title: networks_options_param
                          type: object
                        verification_method:
                          enum:
                            - automatic
                            - instant
                            - microdeposits
                          type: string
                          x-stripeBypassValidation: true
                      title: setup_intent_payment_method_options_param
                      type: object
                  title: payment_method_options_param
                  type: object
                payment_method_types:
                  description: >-
                    The list of payment method types (for example, card) that
                    this SetupIntent can use. If you don't provide this, it
                    defaults to ["card"].
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                return_url:
                  description: >-
                    The URL to redirect your customer back to after they
                    authenticate or cancel their payment on the payment method's
                    app or site. To redirect to a mobile application, you can
                    alternatively supply an application URI scheme. This
                    parameter can only be used with
                    [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
                  type: string
                single_use:
                  description: >-
                    If you populate this hash, this SetupIntent generates a
                    `single_use` mandate after successful completion.
                  properties:
                    amount:
                      type: integer
                    currency:
                      type: string
                  required:
                    - amount
                    - currency
                  title: setup_intent_single_use_params
                  type: object
                usage:
                  description: >-
                    Indicates how the payment method is intended to be used in
                    the future. If not provided, this value defaults to
                    `off_session`.
                  enum:
                    - off_session
                    - on_session
                  type: string
                use_stripe_sdk:
                  description: >-
                    Set to `true` when confirming server-side and using
                    Stripe.js, iOS, or Android client-side SDKs to handle the
                    next actions.
                  type: boolean
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/setup_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Setup Intent
      tags:
        - Setup
        - Intents
  '/v1/setup_intents/{intent}':
    get:
      description: >-
        <p>Retrieves the details of a SetupIntent that has previously been
        created. </p>


        <p>Client-side retrieval using a publishable key is allowed when the
        <code>client_secret</code> is provided in the query string. </p>


        <p>When retrieved with a publishable key, only a subset of properties
        will be returned. Please refer to the <a
        href="#setup_intent_object">SetupIntent</a> object reference for more
        details.</p>
      operationId: GetSetupIntentsIntent
      parameters:
        - description: >-
            The client secret of the SetupIntent. We require this string if you
            use a publishable key to retrieve the SetupIntent.
          in: query
          name: client_secret
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
        - in: path
          name: intent
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
                $ref: '#/components/schemas/setup_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Setup Intent
      tags:
        - Setup
        - Intents
    post:
      description: <p>Updates a SetupIntent object.</p>
      operationId: PostSetupIntentsIntent
      parameters:
        - in: path
          name: intent
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
              flow_directions:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              payment_method_data:
                explode: true
                style: deepObject
              payment_method_options:
                explode: true
                style: deepObject
              payment_method_types:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                attach_to_self:
                  description: >-
                    If present, the SetupIntent's payment method will be
                    attached to the in-context Stripe Account.


                    It can only be used for this Stripe Account’s own money
                    movement flows like InboundTransfer and OutboundTransfers.
                    It cannot be set to true when setting up a PaymentMethod for
                    a Customer, and defaults to false when attaching a
                    PaymentMethod to a Customer.
                  type: boolean
                customer:
                  description: >-
                    ID of the Customer this SetupIntent belongs to, if one
                    exists.


                    If present, the SetupIntent's payment method will be
                    attached to the Customer on successful setup. Payment
                    methods attached to other Customers cannot be used with this
                    SetupIntent.
                  maxLength: 5000
                  type: string
                description:
                  description: >-
                    An arbitrary string attached to the object. Often useful for
                    displaying to users.
                  maxLength: 1000
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                flow_directions:
                  description: >-
                    Indicates the directions of money movement for which this
                    payment method is intended to be used.


                    Include `inbound` if you intend to use the payment method as
                    the origin to pull funds from. Include `outbound` if you
                    intend to use the payment method as the destination to send
                    funds to. You can include both if you intend to use the
                    payment method for both purposes.
                  items:
                    enum:
                      - inbound
                      - outbound
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
                payment_method:
                  description: >-
                    ID of the payment method (a PaymentMethod, Card, or saved
                    Source object) to attach to this SetupIntent.
                  maxLength: 5000
                  type: string
                payment_method_configuration:
                  description: >-
                    The ID of the payment method configuration to use with this
                    SetupIntent.
                  maxLength: 100
                  type: string
                payment_method_data:
                  description: >-
                    When included, this hash creates a PaymentMethod that is set
                    as the
                    [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)

                    value in the SetupIntent.
                  properties:
                    acss_debit:
                      properties:
                        account_number:
                          maxLength: 5000
                          type: string
                        institution_number:
                          maxLength: 5000
                          type: string
                        transit_number:
                          maxLength: 5000
                          type: string
                      required:
                        - account_number
                        - institution_number
                        - transit_number
                      title: payment_method_param
                      type: object
                    affirm:
                      properties: {}
                      title: param
                      type: object
                    afterpay_clearpay:
                      properties: {}
                      title: param
                      type: object
                    alipay:
                      properties: {}
                      title: param
                      type: object
                    au_becs_debit:
                      properties:
                        account_number:
                          maxLength: 5000
                          type: string
                        bsb_number:
                          maxLength: 5000
                          type: string
                      required:
                        - account_number
                        - bsb_number
                      title: param
                      type: object
                    bacs_debit:
                      properties:
                        account_number:
                          maxLength: 5000
                          type: string
                        sort_code:
                          maxLength: 5000
                          type: string
                      title: param
                      type: object
                    bancontact:
                      properties: {}
                      title: param
                      type: object
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
                    blik:
                      properties: {}
                      title: param
                      type: object
                    boleto:
                      properties:
                        tax_id:
                          maxLength: 5000
                          type: string
                      required:
                        - tax_id
                      title: param
                      type: object
                    cashapp:
                      properties: {}
                      title: param
                      type: object
                    customer_balance:
                      properties: {}
                      title: param
                      type: object
                    eps:
                      properties:
                        bank:
                          enum:
                            - arzte_und_apotheker_bank
                            - austrian_anadi_bank_ag
                            - bank_austria
                            - bankhaus_carl_spangler
                            - bankhaus_schelhammer_und_schattera_ag
                            - bawag_psk_ag
                            - bks_bank_ag
                            - brull_kallmus_bank_ag
                            - btv_vier_lander_bank
                            - capital_bank_grawe_gruppe_ag
                            - deutsche_bank_ag
                            - dolomitenbank
                            - easybank_ag
                            - erste_bank_und_sparkassen
                            - hypo_alpeadriabank_international_ag
                            - hypo_bank_burgenland_aktiengesellschaft
                            - hypo_noe_lb_fur_niederosterreich_u_wien
                            - hypo_oberosterreich_salzburg_steiermark
                            - hypo_tirol_bank_ag
                            - hypo_vorarlberg_bank_ag
                            - marchfelder_bank
                            - oberbank_ag
                            - raiffeisen_bankengruppe_osterreich
                            - schoellerbank_ag
                            - sparda_bank_wien
                            - volksbank_gruppe
                            - volkskreditbank_ag
                            - vr_bank_braunau
                          maxLength: 5000
                          type: string
                      title: param
                      type: object
                    fpx:
                      properties:
                        bank:
                          enum:
                            - affin_bank
                            - agrobank
                            - alliance_bank
                            - ambank
                            - bank_islam
                            - bank_muamalat
                            - bank_of_china
                            - bank_rakyat
                            - bsn
                            - cimb
                            - deutsche_bank
                            - hong_leong_bank
                            - hsbc
                            - kfh
                            - maybank2e
                            - maybank2u
                            - ocbc
                            - pb_enterprise
                            - public_bank
                            - rhb
                            - standard_chartered
                            - uob
                          maxLength: 5000
                          type: string
                          x-stripeBypassValidation: true
                      required:
                        - bank
                      title: param
                      type: object
                    giropay:
                      properties: {}
                      title: param
                      type: object
                    grabpay:
                      properties: {}
                      title: param
                      type: object
                    ideal:
                      properties:
                        bank:
                          enum:
                            - abn_amro
                            - asn_bank
                            - bunq
                            - handelsbanken
                            - ing
                            - knab
                            - moneyou
                            - n26
                            - rabobank
                            - regiobank
                            - revolut
                            - sns_bank
                            - triodos_bank
                            - van_lanschot
                            - yoursafe
                          maxLength: 5000
                          type: string
                      title: param
                      type: object
                    interac_present:
                      properties: {}
                      title: param
                      type: object
                    klarna:
                      properties:
                        dob:
                          properties:
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
                          title: date_of_birth
                          type: object
                      title: param
                      type: object
                    konbini:
                      properties: {}
                      title: param
                      type: object
                    link:
                      properties: {}
                      title: param
                      type: object
                    metadata:
                      additionalProperties:
                        type: string
                      type: object
                    oxxo:
                      properties: {}
                      title: param
                      type: object
                    p24:
                      properties:
                        bank:
                          enum:
                            - alior_bank
                            - bank_millennium
                            - bank_nowy_bfg_sa
                            - bank_pekao_sa
                            - banki_spbdzielcze
                            - blik
                            - bnp_paribas
                            - boz
                            - citi_handlowy
                            - credit_agricole
                            - envelobank
                            - etransfer_pocztowy24
                            - getin_bank
                            - ideabank
                            - ing
                            - inteligo
                            - mbank_mtransfer
                            - nest_przelew
                            - noble_pay
                            - pbac_z_ipko
                            - plus_bank
                            - santander_przelew24
                            - tmobile_usbugi_bankowe
                            - toyota_bank
                            - volkswagen_bank
                          type: string
                          x-stripeBypassValidation: true
                      title: param
                      type: object
                    paynow:
                      properties: {}
                      title: param
                      type: object
                    paypal:
                      properties: {}
                      title: param
                      type: object
                    pix:
                      properties: {}
                      title: param
                      type: object
                    promptpay:
                      properties: {}
                      title: param
                      type: object
                    radar_options:
                      properties:
                        session:
                          maxLength: 5000
                          type: string
                      title: radar_options
                      type: object
                    revolut_pay:
                      properties: {}
                      title: param
                      type: object
                    sepa_debit:
                      properties:
                        iban:
                          maxLength: 5000
                          type: string
                      required:
                        - iban
                      title: param
                      type: object
                    sofort:
                      properties:
                        country:
                          enum:
                            - AT
                            - BE
                            - DE
                            - ES
                            - IT
                            - NL
                          type: string
                      required:
                        - country
                      title: param
                      type: object
                    type:
                      enum:
                        - acss_debit
                        - affirm
                        - afterpay_clearpay
                        - alipay
                        - au_becs_debit
                        - bacs_debit
                        - bancontact
                        - blik
                        - boleto
                        - cashapp
                        - customer_balance
                        - eps
                        - fpx
                        - giropay
                        - grabpay
                        - ideal
                        - klarna
                        - konbini
                        - link
                        - oxxo
                        - p24
                        - paynow
                        - paypal
                        - pix
                        - promptpay
                        - revolut_pay
                        - sepa_debit
                        - sofort
                        - us_bank_account
                        - wechat_pay
                        - zip
                      type: string
                      x-stripeBypassValidation: true
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
                    wechat_pay:
                      properties: {}
                      title: param
                      type: object
                    zip:
                      properties: {}
                      title: param
                      type: object
                  required:
                    - type
                  title: payment_method_data_params
                  type: object
                payment_method_options:
                  description: Payment method-specific configuration for this SetupIntent.
                  properties:
                    acss_debit:
                      properties:
                        currency:
                          enum:
                            - cad
                            - usd
                          type: string
                        mandate_options:
                          properties:
                            custom_mandate_url:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            default_for:
                              items:
                                enum:
                                  - invoice
                                  - subscription
                                type: string
                              type: array
                            interval_description:
                              maxLength: 500
                              type: string
                            payment_schedule:
                              enum:
                                - combined
                                - interval
                                - sporadic
                              type: string
                            transaction_type:
                              enum:
                                - business
                                - personal
                              type: string
                          title: >-
                            setup_intent_payment_method_options_mandate_options_param
                          type: object
                        verification_method:
                          enum:
                            - automatic
                            - instant
                            - microdeposits
                          type: string
                          x-stripeBypassValidation: true
                      title: setup_intent_payment_method_options_param
                      type: object
                    card:
                      properties:
                        mandate_options:
                          properties:
                            amount:
                              type: integer
                            amount_type:
                              enum:
                                - fixed
                                - maximum
                              type: string
                            currency:
                              type: string
                            description:
                              maxLength: 200
                              type: string
                            end_date:
                              format: unix-time
                              type: integer
                            interval:
                              enum:
                                - day
                                - month
                                - sporadic
                                - week
                                - year
                              type: string
                            interval_count:
                              type: integer
                            reference:
                              maxLength: 80
                              type: string
                            start_date:
                              format: unix-time
                              type: integer
                            supported_types:
                              items:
                                enum:
                                  - india
                                type: string
                              type: array
                          required:
                            - amount
                            - amount_type
                            - currency
                            - interval
                            - reference
                            - start_date
                          title: setup_intent_mandate_options_param
                          type: object
                        network:
                          enum:
                            - amex
                            - cartes_bancaires
                            - diners
                            - discover
                            - eftpos_au
                            - interac
                            - jcb
                            - mastercard
                            - unionpay
                            - unknown
                            - visa
                          maxLength: 5000
                          type: string
                          x-stripeBypassValidation: true
                        request_three_d_secure:
                          enum:
                            - any
                            - automatic
                            - challenge
                          type: string
                          x-stripeBypassValidation: true
                        three_d_secure:
                          properties:
                            ares_trans_status:
                              enum:
                                - A
                                - C
                                - I
                                - 'N'
                                - R
                                - U
                                - 'Y'
                              type: string
                            cryptogram:
                              maxLength: 5000
                              type: string
                            electronic_commerce_indicator:
                              enum:
                                - '01'
                                - '02'
                                - '05'
                                - '06'
                                - '07'
                              type: string
                              x-stripeBypassValidation: true
                            network_options:
                              properties:
                                cartes_bancaires:
                                  properties:
                                    cb_avalgo:
                                      enum:
                                        - '0'
                                        - '1'
                                        - '2'
                                        - '3'
                                        - '4'
                                        - A
                                      type: string
                                    cb_exemption:
                                      maxLength: 4
                                      type: string
                                    cb_score:
                                      type: integer
                                  required:
                                    - cb_avalgo
                                  title: cartes_bancaires_network_options_param
                                  type: object
                              title: network_options_param
                              type: object
                            requestor_challenge_indicator:
                              maxLength: 2
                              type: string
                            transaction_id:
                              maxLength: 5000
                              type: string
                            version:
                              enum:
                                - 1.0.2
                                - 2.1.0
                                - 2.2.0
                              type: string
                              x-stripeBypassValidation: true
                          title: setup_intent_payment_method_options_param
                          type: object
                      title: setup_intent_param
                      type: object
                    link:
                      properties: {}
                      title: setup_intent_payment_method_options_param
                      type: object
                    paypal:
                      properties:
                        billing_agreement_id:
                          maxLength: 5000
                          type: string
                      title: payment_method_options_param
                      type: object
                    sepa_debit:
                      properties:
                        mandate_options:
                          properties: {}
                          title: payment_method_options_mandate_options_param
                          type: object
                      title: setup_intent_payment_method_options_param
                      type: object
                    us_bank_account:
                      properties:
                        financial_connections:
                          properties:
                            permissions:
                              items:
                                enum:
                                  - balances
                                  - ownership
                                  - payment_method
                                  - transactions
                                maxLength: 5000
                                type: string
                                x-stripeBypassValidation: true
                              type: array
                            prefetch:
                              items:
                                enum:
                                  - balances
                                  - transactions
                                type: string
                                x-stripeBypassValidation: true
                              type: array
                            return_url:
                              maxLength: 5000
                              type: string
                          title: linked_account_options_param
                          type: object
                        mandate_options:
                          properties:
                            collection_method:
                              enum:
                                - ''
                                - paper
                              type: string
                              x-stripeBypassValidation: true
                          title: mandate_options_param
                          type: object
                        networks:
                          properties:
                            requested:
                              items:
                                enum:
                                  - ach
                                  - us_domestic_wire
                                type: string
                              type: array
                          title: networks_options_param
                          type: object
                        verification_method:
                          enum:
                            - automatic
                            - instant
                            - microdeposits
                          type: string
                          x-stripeBypassValidation: true
                      title: setup_intent_payment_method_options_param
                      type: object
                  title: payment_method_options_param
                  type: object
                payment_method_types:
                  description: >-
                    The list of payment method types (for example, card) that
                    this SetupIntent can set up. If you don't provide this
                    array, it defaults to ["card"].
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
                $ref: '#/components/schemas/setup_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Setup Intent
      tags:
        - Setup
        - Intents
  '/v1/setup_intents/{intent}/cancel':
    post:
      description: >-
        <p>You can cancel a SetupIntent object when it’s in one of these
        statuses: <code>requires_payment_method</code>,
        <code>requires_confirmation</code>, or <code>requires_action</code>.
        </p>


        <p>After you cancel it, setup is abandoned and any operations on the
        SetupIntent fail with an error.</p>
      operationId: PostSetupIntentsIntentCancel
      parameters:
        - in: path
          name: intent
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
                cancellation_reason:
                  description: >-
                    Reason for canceling this SetupIntent. Possible values are:
                    `abandoned`, `requested_by_customer`, or `duplicate`
                  enum:
                    - abandoned
                    - duplicate
                    - requested_by_customer
                  maxLength: 5000
                  type: string
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
                $ref: '#/components/schemas/setup_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Cancel Setup Intent
      tags:
        - Cancel
        - Setup
        - Intent
  '/v1/setup_intents/{intent}/confirm':
    post:
      description: >-
        <p>Confirm that your customer intends to set up the current or

        provided payment method. For example, you would confirm a SetupIntent

        when a customer hits the “Save” button on a payment method management

        page on your website.</p>


        <p>If the selected payment method does not require any additional

        steps from the customer, the SetupIntent will transition to the

        <code>succeeded</code> status.</p>


        <p>Otherwise, it will transition to the <code>requires_action</code>
        status and

        suggest additional actions via <code>next_action</code>. If setup fails,

        the SetupIntent will transition to the

        <code>requires_payment_method</code> status or the <code>canceled</code>
        status if the

        confirmation limit is reached.</p>
      operationId: PostSetupIntentsIntentConfirm
      parameters:
        - in: path
          name: intent
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
              mandate_data:
                explode: true
                style: deepObject
              payment_method_data:
                explode: true
                style: deepObject
              payment_method_options:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                client_secret:
                  description: The client secret of the SetupIntent.
                  maxLength: 5000
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                mandate_data:
                  anyOf:
                    - properties:
                        customer_acceptance:
                          properties:
                            accepted_at:
                              format: unix-time
                              type: integer
                            offline:
                              properties: {}
                              title: offline_param
                              type: object
                            online:
                              properties:
                                ip_address:
                                  type: string
                                user_agent:
                                  maxLength: 5000
                                  type: string
                              required:
                                - ip_address
                                - user_agent
                              title: online_param
                              type: object
                            type:
                              enum:
                                - offline
                                - online
                              maxLength: 5000
                              type: string
                          required:
                            - type
                          title: customer_acceptance_param
                          type: object
                      required:
                        - customer_acceptance
                      title: secret_key_param
                      type: object
                    - enum:
                        - ''
                      type: string
                    - description: This hash contains details about the Mandate to create
                      properties:
                        customer_acceptance:
                          properties:
                            online:
                              properties:
                                ip_address:
                                  type: string
                                user_agent:
                                  maxLength: 5000
                                  type: string
                              title: online_param
                              type: object
                            type:
                              enum:
                                - online
                              maxLength: 5000
                              type: string
                          required:
                            - online
                            - type
                          title: customer_acceptance_param
                          type: object
                      required:
                        - customer_acceptance
                      title: client_key_param
                      type: object
                payment_method:
                  description: >-
                    ID of the payment method (a PaymentMethod, Card, or saved
                    Source object) to attach to this SetupIntent.
                  maxLength: 5000
                  type: string
                payment_method_data:
                  description: >-
                    When included, this hash creates a PaymentMethod that is set
                    as the
                    [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)

                    value in the SetupIntent.
                  properties:
                    acss_debit:
                      properties:
                        account_number:
                          maxLength: 5000
                          type: string
                        institution_number:
                          maxLength: 5000
                          type: string
                        transit_number:
                          maxLength: 5000
                          type: string
                      required:
                        - account_number
                        - institution_number
                        - transit_number
                      title: payment_method_param
                      type: object
                    affirm:
                      properties: {}
                      title: param
                      type: object
                    afterpay_clearpay:
                      properties: {}
                      title: param
                      type: object
                    alipay:
                      properties: {}
                      title: param
                      type: object
                    au_becs_debit:
                      properties:
                        account_number:
                          maxLength: 5000
                          type: string
                        bsb_number:
                          maxLength: 5000
                          type: string
                      required:
                        - account_number
                        - bsb_number
                      title: param
                      type: object
                    bacs_debit:
                      properties:
                        account_number:
                          maxLength: 5000
                          type: string
                        sort_code:
                          maxLength: 5000
                          type: string
                      title: param
                      type: object
                    bancontact:
                      properties: {}
                      title: param
                      type: object
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
                    blik:
                      properties: {}
                      title: param
                      type: object
                    boleto:
                      properties:
                        tax_id:
                          maxLength: 5000
                          type: string
                      required:
                        - tax_id
                      title: param
                      type: object
                    cashapp:
                      properties: {}
                      title: param
                      type: object
                    customer_balance:
                      properties: {}
                      title: param
                      type: object
                    eps:
                      properties:
                        bank:
                          enum:
                            - arzte_und_apotheker_bank
                            - austrian_anadi_bank_ag
                            - bank_austria
                            - bankhaus_carl_spangler
                            - bankhaus_schelhammer_und_schattera_ag
                            - bawag_psk_ag
                            - bks_bank_ag
                            - brull_kallmus_bank_ag
                            - btv_vier_lander_bank
                            - capital_bank_grawe_gruppe_ag
                            - deutsche_bank_ag
                            - dolomitenbank
                            - easybank_ag
                            - erste_bank_und_sparkassen
                            - hypo_alpeadriabank_international_ag
                            - hypo_bank_burgenland_aktiengesellschaft
                            - hypo_noe_lb_fur_niederosterreich_u_wien
                            - hypo_oberosterreich_salzburg_steiermark
                            - hypo_tirol_bank_ag
                            - hypo_vorarlberg_bank_ag
                            - marchfelder_bank
                            - oberbank_ag
                            - raiffeisen_bankengruppe_osterreich
                            - schoellerbank_ag
                            - sparda_bank_wien
                            - volksbank_gruppe
                            - volkskreditbank_ag
                            - vr_bank_braunau
                          maxLength: 5000
                          type: string
                      title: param
                      type: object
                    fpx:
                      properties:
                        bank:
                          enum:
                            - affin_bank
                            - agrobank
                            - alliance_bank
                            - ambank
                            - bank_islam
                            - bank_muamalat
                            - bank_of_china
                            - bank_rakyat
                            - bsn
                            - cimb
                            - deutsche_bank
                            - hong_leong_bank
                            - hsbc
                            - kfh
                            - maybank2e
                            - maybank2u
                            - ocbc
                            - pb_enterprise
                            - public_bank
                            - rhb
                            - standard_chartered
                            - uob
                          maxLength: 5000
                          type: string
                          x-stripeBypassValidation: true
                      required:
                        - bank
                      title: param
                      type: object
                    giropay:
                      properties: {}
                      title: param
                      type: object
                    grabpay:
                      properties: {}
                      title: param
                      type: object
                    ideal:
                      properties:
                        bank:
                          enum:
                            - abn_amro
                            - asn_bank
                            - bunq
                            - handelsbanken
                            - ing
                            - knab
                            - moneyou
                            - n26
                            - rabobank
                            - regiobank
                            - revolut
                            - sns_bank
                            - triodos_bank
                            - van_lanschot
                            - yoursafe
                          maxLength: 5000
                          type: string
                      title: param
                      type: object
                    interac_present:
                      properties: {}
                      title: param
                      type: object
                    klarna:
                      properties:
                        dob:
                          properties:
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
                          title: date_of_birth
                          type: object
                      title: param
                      type: object
                    konbini:
                      properties: {}
                      title: param
                      type: object
                    link:
                      properties: {}
                      title: param
                      type: object
                    metadata:
                      additionalProperties:
                        type: string
                      type: object
                    oxxo:
                      properties: {}
                      title: param
                      type: object
                    p24:
                      properties:
                        bank:
                          enum:
                            - alior_bank
                            - bank_millennium
                            - bank_nowy_bfg_sa
                            - bank_pekao_sa
                            - banki_spbdzielcze
                            - blik
                            - bnp_paribas
                            - boz
                            - citi_handlowy
                            - credit_agricole
                            - envelobank
                            - etransfer_pocztowy24
                            - getin_bank
                            - ideabank
                            - ing
                            - inteligo
                            - mbank_mtransfer
                            - nest_przelew
                            - noble_pay
                            - pbac_z_ipko
                            - plus_bank
                            - santander_przelew24
                            - tmobile_usbugi_bankowe
                            - toyota_bank
                            - volkswagen_bank
                          type: string
                          x-stripeBypassValidation: true
                      title: param
                      type: object
                    paynow:
                      properties: {}
                      title: param
                      type: object
                    paypal:
                      properties: {}
                      title: param
                      type: object
                    pix:
                      properties: {}
                      title: param
                      type: object
                    promptpay:
                      properties: {}
                      title: param
                      type: object
                    radar_options:
                      properties:
                        session:
                          maxLength: 5000
                          type: string
                      title: radar_options
                      type: object
                    revolut_pay:
                      properties: {}
                      title: param
                      type: object
                    sepa_debit:
                      properties:
                        iban:
                          maxLength: 5000
                          type: string
                      required:
                        - iban
                      title: param
                      type: object
                    sofort:
                      properties:
                        country:
                          enum:
                            - AT
                            - BE
                            - DE
                            - ES
                            - IT
                            - NL
                          type: string
                      required:
                        - country
                      title: param
                      type: object
                    type:
                      enum:
                        - acss_debit
                        - affirm
                        - afterpay_clearpay
                        - alipay
                        - au_becs_debit
                        - bacs_debit
                        - bancontact
                        - blik
                        - boleto
                        - cashapp
                        - customer_balance
                        - eps
                        - fpx
                        - giropay
                        - grabpay
                        - ideal
                        - klarna
                        - konbini
                        - link
                        - oxxo
                        - p24
                        - paynow
                        - paypal
                        - pix
                        - promptpay
                        - revolut_pay
                        - sepa_debit
                        - sofort
                        - us_bank_account
                        - wechat_pay
                        - zip
                      type: string
                      x-stripeBypassValidation: true
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
                    wechat_pay:
                      properties: {}
                      title: param
                      type: object
                    zip:
                      properties: {}
                      title: param
                      type: object
                  required:
                    - type
                  title: payment_method_data_params
                  type: object
                payment_method_options:
                  description: Payment method-specific configuration for this SetupIntent.
                  properties:
                    acss_debit:
                      properties:
                        currency:
                          enum:
                            - cad
                            - usd
                          type: string
                        mandate_options:
                          properties:
                            custom_mandate_url:
                              anyOf:
                                - type: string
                                - enum:
                                    - ''
                                  type: string
                            default_for:
                              items:
                                enum:
                                  - invoice
                                  - subscription
                                type: string
                              type: array
                            interval_description:
                              maxLength: 500
                              type: string
                            payment_schedule:
                              enum:
                                - combined
                                - interval
                                - sporadic
                              type: string
                            transaction_type:
                              enum:
                                - business
                                - personal
                              type: string
                          title: >-
                            setup_intent_payment_method_options_mandate_options_param
                          type: object
                        verification_method:
                          enum:
                            - automatic
                            - instant
                            - microdeposits
                          type: string
                          x-stripeBypassValidation: true
                      title: setup_intent_payment_method_options_param
                      type: object
                    card:
                      properties:
                        mandate_options:
                          properties:
                            amount:
                              type: integer
                            amount_type:
                              enum:
                                - fixed
                                - maximum
                              type: string
                            currency:
                              type: string
                            description:
                              maxLength: 200
                              type: string
                            end_date:
                              format: unix-time
                              type: integer
                            interval:
                              enum:
                                - day
                                - month
                                - sporadic
                                - week
                                - year
                              type: string
                            interval_count:
                              type: integer
                            reference:
                              maxLength: 80
                              type: string
                            start_date:
                              format: unix-time
                              type: integer
                            supported_types:
                              items:
                                enum:
                                  - india
                                type: string
                              type: array
                          required:
                            - amount
                            - amount_type
                            - currency
                            - interval
                            - reference
                            - start_date
                          title: setup_intent_mandate_options_param
                          type: object
                        network:
                          enum:
                            - amex
                            - cartes_bancaires
                            - diners
                            - discover
                            - eftpos_au
                            - interac
                            - jcb
                            - mastercard
                            - unionpay
                            - unknown
                            - visa
                          maxLength: 5000
                          type: string
                          x-stripeBypassValidation: true
                        request_three_d_secure:
                          enum:
                            - any
                            - automatic
                            - challenge
                          type: string
                          x-stripeBypassValidation: true
                        three_d_secure:
                          properties:
                            ares_trans_status:
                              enum:
                                - A
                                - C
                                - I
                                - 'N'
                                - R
                                - U
                                - 'Y'
                              type: string
                            cryptogram:
                              maxLength: 5000
                              type: string
                            electronic_commerce_indicator:
                              enum:
                                - '01'
                                - '02'
                                - '05'
                                - '06'
                                - '07'
                              type: string
                              x-stripeBypassValidation: true
                            network_options:
                              properties:
                                cartes_bancaires:
                                  properties:
                                    cb_avalgo:
                                      enum:
                                        - '0'
                                        - '1'
                                        - '2'
                                        - '3'
                                        - '4'
                                        - A
                                      type: string
                                    cb_exemption:
                                      maxLength: 4
                                      type: string
                                    cb_score:
                                      type: integer
                                  required:
                                    - cb_avalgo
                                  title: cartes_bancaires_network_options_param
                                  type: object
                              title: network_options_param
                              type: object
                            requestor_challenge_indicator:
                              maxLength: 2
                              type: string
                            transaction_id:
                              maxLength: 5000
                              type: string
                            version:
                              enum:
                                - 1.0.2
                                - 2.1.0
                                - 2.2.0
                              type: string
                              x-stripeBypassValidation: true
                          title: setup_intent_payment_method_options_param
                          type: object
                      title: setup_intent_param
                      type: object
                    link:
                      properties: {}
                      title: setup_intent_payment_method_options_param
                      type: object
                    paypal:
                      properties:
                        billing_agreement_id:
                          maxLength: 5000
                          type: string
                      title: payment_method_options_param
                      type: object
                    sepa_debit:
                      properties:
                        mandate_options:
                          properties: {}
                          title: payment_method_options_mandate_options_param
                          type: object
                      title: setup_intent_payment_method_options_param
                      type: object
                    us_bank_account:
                      properties:
                        financial_connections:
                          properties:
                            permissions:
                              items:
                                enum:
                                  - balances
                                  - ownership
                                  - payment_method
                                  - transactions
                                maxLength: 5000
                                type: string
                                x-stripeBypassValidation: true
                              type: array
                            prefetch:
                              items:
                                enum:
                                  - balances
                                  - transactions
                                type: string
                                x-stripeBypassValidation: true
                              type: array
                            return_url:
                              maxLength: 5000
                              type: string
                          title: linked_account_options_param
                          type: object
                        mandate_options:
                          properties:
                            collection_method:
                              enum:
                                - ''
                                - paper
                              type: string
                              x-stripeBypassValidation: true
                          title: mandate_options_param
                          type: object
                        networks:
                          properties:
                            requested:
                              items:
                                enum:
                                  - ach
                                  - us_domestic_wire
                                type: string
                              type: array
                          title: networks_options_param
                          type: object
                        verification_method:
                          enum:
                            - automatic
                            - instant
                            - microdeposits
                          type: string
                          x-stripeBypassValidation: true
                      title: setup_intent_payment_method_options_param
                      type: object
                  title: payment_method_options_param
                  type: object
                return_url:
                  description: >-
                    The URL to redirect your customer back to after they
                    authenticate on the payment method's app or site.

                    If you'd prefer to redirect to a mobile application, you can
                    alternatively supply an application URI scheme.

                    This parameter is only used for cards and other
                    redirect-based payment methods.
                  type: string
                use_stripe_sdk:
                  description: >-
                    Set to `true` when confirming server-side and using
                    Stripe.js, iOS, or Android client-side SDKs to handle the
                    next actions.
                  type: boolean
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/setup_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Confirm Setup Intent
      tags:
        - Confirm
        - Setup
        - Intent
  '/v1/setup_intents/{intent}/verify_microdeposits':
    post:
      description: <p>Verifies microdeposits on a SetupIntent object.</p>
      operationId: PostSetupIntentsIntentVerifyMicrodeposits
      parameters:
        - in: path
          name: intent
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              amounts:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amounts:
                  description: >-
                    Two positive integers, in *cents*, equal to the values of
                    the microdeposits sent to the bank account.
                  items:
                    type: integer
                  type: array
                client_secret:
                  description: The client secret of the SetupIntent.
                  maxLength: 5000
                  type: string
                descriptor_code:
                  description: >-
                    A six-character code starting with SM present in the
                    microdeposit sent to the bank account.
                  maxLength: 5000
                  type: string
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
                $ref: '#/components/schemas/setup_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Verify Setup Intent Microdeposit
      tags:
        - Verify
        - Setup
        - Intents
        - Micro
        - Deposits
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
    setup_intent:
      description: >-
        A SetupIntent guides you through the process of setting up and saving a
        customer's payment credentials for future payments.

        For example, you can use a SetupIntent to set up and save your
        customer's card without immediately collecting a payment.

        Later, you can use
        [PaymentIntents](https://stripe.com/docs/api#payment_intents) to drive
        the payment flow.


        Create a SetupIntent when you're ready to collect your customer's
        payment credentials.

        Don't maintain long-lived, unconfirmed SetupIntents because they might
        not be valid.

        The SetupIntent transitions through multiple
        [statuses](https://stripe.com/docs/payments/intents#intent-statuses) as
        it guides

        you through the setup process.


        Successful SetupIntents result in payment credentials that are optimized
        for future payments.

        For example, cardholders in [certain
        regions](/guides/strong-customer-authentication) might need to be run
        through

        [Strong Customer
        Authentication](https://stripe.com/docs/strong-customer-authentication)
        during payment method collection

        to streamline later [off-session
        payments](https://stripe.com/docs/payments/setup-intents).

        If you use the SetupIntent with a
        [Customer](https://stripe.com/docs/api#setup_intent_object-customer),

        it automatically attaches the resulting payment method to that Customer
        after successful setup.

        We recommend using SetupIntents or
        [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage)
        on

        PaymentIntents to save payment methods to prevent saving invalid or
        unoptimized payment methods.


        By using SetupIntents, you can reduce friction for your customers, even
        as regulations change over time.


        Related guide: [Setup Intents
        API](https://stripe.com/docs/payments/setup-intents)
      properties:
        application:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/application'
          description: ID of the Connect application that created the SetupIntent.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/application'
        attach_to_self:
          description: >-
            If present, the SetupIntent's payment method will be attached to the
            in-context Stripe Account.


            It can only be used for this Stripe Account’s own money movement
            flows like InboundTransfer and OutboundTransfers. It cannot be set
            to true when setting up a PaymentMethod for a Customer, and defaults
            to false when attaching a PaymentMethod to a Customer.
          type: boolean
        automatic_payment_methods:
          anyOf:
            - $ref: >-
                #/components/schemas/payment_flows_automatic_payment_methods_setup_intent
          description: >-
            Settings for dynamic payment methods compatible with this Setup
            Intent
          nullable: true
        cancellation_reason:
          description: >-
            Reason for cancellation of this SetupIntent, one of `abandoned`,
            `requested_by_customer`, or `duplicate`.
          enum:
            - abandoned
            - duplicate
            - requested_by_customer
          nullable: true
          type: string
        client_secret:
          description: >-
            The client secret of this SetupIntent. Used for client-side
            retrieval using a publishable key.


            The client secret can be used to complete payment setup from your
            frontend. It should not be stored, logged, or exposed to anyone
            other than the customer. Make sure that you have TLS enabled on any
            page that includes the client secret.
          maxLength: 5000
          nullable: true
          type: string
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
            - $ref: '#/components/schemas/deleted_customer'
          description: >-
            ID of the Customer this SetupIntent belongs to, if one exists.


            If present, the SetupIntent's payment method will be attached to the
            Customer on successful setup. Payment methods attached to other
            Customers cannot be used with this SetupIntent.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
              - $ref: '#/components/schemas/deleted_customer'
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          nullable: true
          type: string
        flow_directions:
          description: >-
            Indicates the directions of money movement for which this payment
            method is intended to be used.


            Include `inbound` if you intend to use the payment method as the
            origin to pull funds from. Include `outbound` if you intend to use
            the payment method as the destination to send funds to. You can
            include both if you intend to use the payment method for both
            purposes.
          items:
            enum:
              - inbound
              - outbound
            type: string
          nullable: true
          type: array
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        last_setup_error:
          anyOf:
            - $ref: '#/components/schemas/api_errors'
          description: The error encountered in the previous SetupIntent confirmation.
          nullable: true
        latest_attempt:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/setup_attempt'
          description: The most recent SetupAttempt for this SetupIntent.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/setup_attempt'
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        mandate:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/mandate'
          description: ID of the multi use Mandate generated by the SetupIntent.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/mandate'
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
        next_action:
          anyOf:
            - $ref: '#/components/schemas/setup_intent_next_action'
          description: >-
            If present, this property tells you what actions you need to take in
            order for your customer to continue payment setup.
          nullable: true
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - setup_intent
          type: string
        on_behalf_of:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/account'
          description: The account (if any) for which the setup is intended.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/account'
        payment_method:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/payment_method'
          description: ID of the payment method used with this SetupIntent.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/payment_method'
        payment_method_configuration_details:
          anyOf:
            - $ref: >-
                #/components/schemas/payment_method_config_biz_payment_method_configuration_details
          description: >-
            Information about the payment method configuration used for this
            Setup Intent.
          nullable: true
        payment_method_options:
          anyOf:
            - $ref: '#/components/schemas/setup_intent_payment_method_options'
          description: Payment method-specific configuration for this SetupIntent.
          nullable: true
        payment_method_types:
          description: >-
            The list of payment method types (e.g. card) that this SetupIntent
            is allowed to set up.
          items:
            maxLength: 5000
            type: string
          type: array
        single_use_mandate:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/mandate'
          description: ID of the single_use Mandate generated by the SetupIntent.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/mandate'
        status:
          description: >-
            [Status](https://stripe.com/docs/payments/intents#intent-statuses)
            of this SetupIntent, one of `requires_payment_method`,
            `requires_confirmation`, `requires_action`, `processing`,
            `canceled`, or `succeeded`.
          enum:
            - canceled
            - processing
            - requires_action
            - requires_confirmation
            - requires_payment_method
            - succeeded
          type: string
        usage:
          description: >-
            Indicates how the payment method is intended to be used in the
            future.


            Use `on_session` if you intend to only reuse the payment method when
            the customer is in your checkout flow. Use `off_session` if your
            customer may or may not be in your checkout flow. If not provided,
            this value defaults to `off_session`.
          maxLength: 5000
          type: string
      required:
        - created
        - id
        - livemode
        - object
        - payment_method_types
        - status
        - usage
      title: SetupIntent
      type: object
      x-expandableFields:
        - application
        - automatic_payment_methods
        - customer
        - last_setup_error
        - latest_attempt
        - mandate
        - next_action
        - on_behalf_of
        - payment_method
        - payment_method_configuration_details
        - payment_method_options
        - single_use_mandate
      x-resourceId: setup_intent
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
  - name: Setup
    description: Needs a description.
  - name: Attempts
    description: Needs a description.
  - name: Intents
    description: Needs a description.
  - name: Cancel
    description: Needs a description.
  - name: Intent
    description: Needs a description.
  - name: Confirm
    description: Needs a description.
  - name: Verify
    description: Needs a description.
  - name: Micro
    description: Needs a description.
  - name: Deposits
    description: Needs a description.
---