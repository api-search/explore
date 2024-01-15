---
openapi: 3.0.0
info:
  title: Stripe Payment Links API
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
  /v1/payment_links:
    get:
      description: <p>Returns a list of your payment links.</p>
      operationId: GetPaymentLinks
      parameters:
        - description: >-
            Only return payment links that are active or inactive (e.g., pass
            `false` to list all inactive payment links).
          in: query
          name: active
          required: false
          schema:
            type: boolean
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
                      $ref: '#/components/schemas/payment_link'
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
                    pattern: ^/v1/payment_links
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: PaymentLinksResourcePaymentLinkList
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
      summary: Retrieve Payment Links
      tags:
        - Payments
        - Links
    post:
      description: <p>Creates a payment link.</p>
      operationId: PostPaymentLinks
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              after_completion:
                explode: true
                style: deepObject
              automatic_tax:
                explode: true
                style: deepObject
              consent_collection:
                explode: true
                style: deepObject
              custom_fields:
                explode: true
                style: deepObject
              custom_text:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              invoice_creation:
                explode: true
                style: deepObject
              line_items:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              payment_intent_data:
                explode: true
                style: deepObject
              payment_method_types:
                explode: true
                style: deepObject
              phone_number_collection:
                explode: true
                style: deepObject
              restrictions:
                explode: true
                style: deepObject
              shipping_address_collection:
                explode: true
                style: deepObject
              shipping_options:
                explode: true
                style: deepObject
              subscription_data:
                explode: true
                style: deepObject
              tax_id_collection:
                explode: true
                style: deepObject
              transfer_data:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                after_completion:
                  description: Behavior after the purchase is complete.
                  properties:
                    hosted_confirmation:
                      properties:
                        custom_message:
                          maxLength: 500
                          type: string
                      title: after_completion_confirmation_page_params
                      type: object
                    redirect:
                      properties:
                        url:
                          maxLength: 2048
                          type: string
                      required:
                        - url
                      title: after_completion_redirect_params
                      type: object
                    type:
                      enum:
                        - hosted_confirmation
                        - redirect
                      type: string
                  required:
                    - type
                  title: after_completion_params
                  type: object
                allow_promotion_codes:
                  description: Enables user redeemable promotion codes.
                  type: boolean
                application_fee_amount:
                  description: >-
                    The amount of the application fee (if any) that will be
                    requested to be applied to the payment and transferred to
                    the application owner's Stripe account. Can only be applied
                    when there are no line items with recurring prices.
                  type: integer
                application_fee_percent:
                  description: >-
                    A non-negative decimal between 0 and 100, with at most two
                    decimal places. This represents the percentage of the
                    subscription invoice total that will be transferred to the
                    application owner's Stripe account. There must be at least 1
                    line item with a recurring price to use this field.
                  type: number
                automatic_tax:
                  description: Configuration for automatic tax collection.
                  properties:
                    enabled:
                      type: boolean
                  required:
                    - enabled
                  title: automatic_tax_params
                  type: object
                billing_address_collection:
                  description: Configuration for collecting the customer's billing address.
                  enum:
                    - auto
                    - required
                  type: string
                consent_collection:
                  description: Configure fields to gather active consent from customers.
                  properties:
                    payment_method_reuse_agreement:
                      properties:
                        position:
                          enum:
                            - auto
                            - hidden
                          type: string
                      required:
                        - position
                      title: payment_method_reuse_agreement_params
                      type: object
                    promotions:
                      enum:
                        - auto
                        - none
                      type: string
                    terms_of_service:
                      enum:
                        - none
                        - required
                      type: string
                  title: consent_collection_params
                  type: object
                currency:
                  description: >-
                    Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies) and supported
                    by each line item's price.
                  type: string
                custom_fields:
                  description: >-
                    Collect additional information from your customer using
                    custom fields. Up to 2 fields are supported.
                  items:
                    properties:
                      dropdown:
                        properties:
                          options:
                            items:
                              properties:
                                label:
                                  maxLength: 100
                                  type: string
                                value:
                                  maxLength: 100
                                  type: string
                              required:
                                - label
                                - value
                              title: custom_field_option_param
                              type: object
                            type: array
                        required:
                          - options
                        title: custom_field_dropdown_param
                        type: object
                      key:
                        maxLength: 200
                        type: string
                      label:
                        properties:
                          custom:
                            maxLength: 50
                            type: string
                          type:
                            enum:
                              - custom
                            type: string
                        required:
                          - custom
                          - type
                        title: custom_field_label_param
                        type: object
                      numeric:
                        properties:
                          maximum_length:
                            type: integer
                          minimum_length:
                            type: integer
                        title: custom_field_numeric_param
                        type: object
                      optional:
                        type: boolean
                      text:
                        properties:
                          maximum_length:
                            type: integer
                          minimum_length:
                            type: integer
                        title: custom_field_text_param
                        type: object
                      type:
                        enum:
                          - dropdown
                          - numeric
                          - text
                        type: string
                    required:
                      - key
                      - label
                      - type
                    title: custom_field_param
                    type: object
                  type: array
                custom_text:
                  description: >-
                    Display additional text for your customers using custom
                    text.
                  properties:
                    after_submit:
                      anyOf:
                        - properties:
                            message:
                              maxLength: 1200
                              type: string
                          required:
                            - message
                          title: custom_text_position_param
                          type: object
                        - enum:
                            - ''
                          type: string
                    shipping_address:
                      anyOf:
                        - properties:
                            message:
                              maxLength: 1200
                              type: string
                          required:
                            - message
                          title: custom_text_position_param
                          type: object
                        - enum:
                            - ''
                          type: string
                    submit:
                      anyOf:
                        - properties:
                            message:
                              maxLength: 1200
                              type: string
                          required:
                            - message
                          title: custom_text_position_param
                          type: object
                        - enum:
                            - ''
                          type: string
                    terms_of_service_acceptance:
                      anyOf:
                        - properties:
                            message:
                              maxLength: 1200
                              type: string
                          required:
                            - message
                          title: custom_text_position_param
                          type: object
                        - enum:
                            - ''
                          type: string
                  title: custom_text_param
                  type: object
                customer_creation:
                  description: >-
                    Configures whether [checkout
                    sessions](https://stripe.com/docs/api/checkout/sessions)
                    created by this payment link create a
                    [Customer](https://stripe.com/docs/api/customers).
                  enum:
                    - always
                    - if_required
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                inactive_message:
                  description: >-
                    The custom message to be displayed to a customer when a
                    payment link is no longer active.
                  maxLength: 500
                  type: string
                invoice_creation:
                  description: Generate a post-purchase Invoice for one-time payments.
                  properties:
                    enabled:
                      type: boolean
                    invoice_data:
                      properties:
                        account_tax_ids:
                          anyOf:
                            - items:
                                maxLength: 5000
                                type: string
                              type: array
                            - enum:
                                - ''
                              type: string
                        custom_fields:
                          anyOf:
                            - items:
                                properties:
                                  name:
                                    maxLength: 30
                                    type: string
                                  value:
                                    maxLength: 30
                                    type: string
                                required:
                                  - name
                                  - value
                                title: custom_field_params
                                type: object
                              type: array
                            - enum:
                                - ''
                              type: string
                        description:
                          maxLength: 1500
                          type: string
                        footer:
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
                        rendering_options:
                          anyOf:
                            - properties:
                                amount_tax_display:
                                  enum:
                                    - ''
                                    - exclude_tax
                                    - include_inclusive_tax
                                  type: string
                              title: rendering_options_param
                              type: object
                            - enum:
                                - ''
                              type: string
                      title: invoice_settings_params
                      type: object
                  required:
                    - enabled
                  title: invoice_creation_create_params
                  type: object
                line_items:
                  description: >-
                    The line items representing what is being sold. Each line
                    item represents an item being sold. Up to 20 line items are
                    supported.
                  items:
                    properties:
                      adjustable_quantity:
                        properties:
                          enabled:
                            type: boolean
                          maximum:
                            type: integer
                          minimum:
                            type: integer
                        required:
                          - enabled
                        title: adjustable_quantity_params
                        type: object
                      price:
                        maxLength: 5000
                        type: string
                      quantity:
                        type: integer
                    required:
                      - price
                      - quantity
                    title: line_items_create_params
                    type: object
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
                    value to `metadata`. Metadata associated with this Payment
                    Link will automatically be copied to [checkout
                    sessions](https://stripe.com/docs/api/checkout/sessions)
                    created by this payment link.
                  type: object
                on_behalf_of:
                  description: The account on behalf of which to charge.
                  type: string
                payment_intent_data:
                  description: >-
                    A subset of parameters to be passed to PaymentIntent
                    creation for Checkout Sessions in `payment` mode.
                  properties:
                    capture_method:
                      enum:
                        - automatic
                        - automatic_async
                        - manual
                      type: string
                    description:
                      maxLength: 1000
                      type: string
                    metadata:
                      additionalProperties:
                        type: string
                      type: object
                    setup_future_usage:
                      enum:
                        - off_session
                        - on_session
                      type: string
                    statement_descriptor:
                      maxLength: 22
                      type: string
                    statement_descriptor_suffix:
                      maxLength: 22
                      type: string
                    transfer_group:
                      maxLength: 5000
                      type: string
                  title: payment_intent_data_params
                  type: object
                payment_method_collection:
                  description: >-
                    Specify whether Checkout should collect a payment method.
                    When set to `if_required`, Checkout will not collect a
                    payment method when the total due for the session is 0.This
                    may occur if the Checkout Session includes a free trial or a
                    discount.


                    Can only be set in `subscription` mode.


                    If you'd like information on how to collect a payment method
                    outside of Checkout, read the guide on [configuring
                    subscriptions with a free
                    trial](https://stripe.com/docs/payments/checkout/free-trials).
                  enum:
                    - always
                    - if_required
                  type: string
                payment_method_types:
                  description: >-
                    The list of payment method types that customers can use. If
                    no value is passed, Stripe will dynamically show relevant
                    payment methods from your [payment method
                    settings](https://dashboard.stripe.com/settings/payment_methods)
                    (20+ payment methods
                    [supported](https://stripe.com/docs/payments/payment-methods/integration-options#payment-method-product-support)).
                  items:
                    enum:
                      - affirm
                      - afterpay_clearpay
                      - alipay
                      - au_becs_debit
                      - bacs_debit
                      - bancontact
                      - blik
                      - boleto
                      - card
                      - cashapp
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
                      - sepa_debit
                      - sofort
                      - us_bank_account
                      - wechat_pay
                    type: string
                    x-stripeBypassValidation: true
                  type: array
                phone_number_collection:
                  description: >-
                    Controls phone number collection settings during checkout.


                    We recommend that you review your privacy policy and check
                    with your legal contacts.
                  properties:
                    enabled:
                      type: boolean
                  required:
                    - enabled
                  title: phone_number_collection_params
                  type: object
                restrictions:
                  description: Settings that restrict the usage of a payment link.
                  properties:
                    completed_sessions:
                      properties:
                        limit:
                          type: integer
                      required:
                        - limit
                      title: completed_sessions_params
                      type: object
                  required:
                    - completed_sessions
                  title: restrictions_params
                  type: object
                shipping_address_collection:
                  description: >-
                    Configuration for collecting the customer's shipping
                    address.
                  properties:
                    allowed_countries:
                      items:
                        enum:
                          - AC
                          - AD
                          - AE
                          - AF
                          - AG
                          - AI
                          - AL
                          - AM
                          - AO
                          - AQ
                          - AR
                          - AT
                          - AU
                          - AW
                          - AX
                          - AZ
                          - BA
                          - BB
                          - BD
                          - BE
                          - BF
                          - BG
                          - BH
                          - BI
                          - BJ
                          - BL
                          - BM
                          - BN
                          - BO
                          - BQ
                          - BR
                          - BS
                          - BT
                          - BV
                          - BW
                          - BY
                          - BZ
                          - CA
                          - CD
                          - CF
                          - CG
                          - CH
                          - CI
                          - CK
                          - CL
                          - CM
                          - CN
                          - CO
                          - CR
                          - CV
                          - CW
                          - CY
                          - CZ
                          - DE
                          - DJ
                          - DK
                          - DM
                          - DO
                          - DZ
                          - EC
                          - EE
                          - EG
                          - EH
                          - ER
                          - ES
                          - ET
                          - FI
                          - FJ
                          - FK
                          - FO
                          - FR
                          - GA
                          - GB
                          - GD
                          - GE
                          - GF
                          - GG
                          - GH
                          - GI
                          - GL
                          - GM
                          - GN
                          - GP
                          - GQ
                          - GR
                          - GS
                          - GT
                          - GU
                          - GW
                          - GY
                          - HK
                          - HN
                          - HR
                          - HT
                          - HU
                          - ID
                          - IE
                          - IL
                          - IM
                          - IN
                          - IO
                          - IQ
                          - IS
                          - IT
                          - JE
                          - JM
                          - JO
                          - JP
                          - KE
                          - KG
                          - KH
                          - KI
                          - KM
                          - KN
                          - KR
                          - KW
                          - KY
                          - KZ
                          - LA
                          - LB
                          - LC
                          - LI
                          - LK
                          - LR
                          - LS
                          - LT
                          - LU
                          - LV
                          - LY
                          - MA
                          - MC
                          - MD
                          - ME
                          - MF
                          - MG
                          - MK
                          - ML
                          - MM
                          - MN
                          - MO
                          - MQ
                          - MR
                          - MS
                          - MT
                          - MU
                          - MV
                          - MW
                          - MX
                          - MY
                          - MZ
                          - NA
                          - NC
                          - NE
                          - NG
                          - NI
                          - NL
                          - 'NO'
                          - NP
                          - NR
                          - NU
                          - NZ
                          - OM
                          - PA
                          - PE
                          - PF
                          - PG
                          - PH
                          - PK
                          - PL
                          - PM
                          - PN
                          - PR
                          - PS
                          - PT
                          - PY
                          - QA
                          - RE
                          - RO
                          - RS
                          - RU
                          - RW
                          - SA
                          - SB
                          - SC
                          - SE
                          - SG
                          - SH
                          - SI
                          - SJ
                          - SK
                          - SL
                          - SM
                          - SN
                          - SO
                          - SR
                          - SS
                          - ST
                          - SV
                          - SX
                          - SZ
                          - TA
                          - TC
                          - TD
                          - TF
                          - TG
                          - TH
                          - TJ
                          - TK
                          - TL
                          - TM
                          - TN
                          - TO
                          - TR
                          - TT
                          - TV
                          - TW
                          - TZ
                          - UA
                          - UG
                          - US
                          - UY
                          - UZ
                          - VA
                          - VC
                          - VE
                          - VG
                          - VN
                          - VU
                          - WF
                          - WS
                          - XK
                          - YE
                          - YT
                          - ZA
                          - ZM
                          - ZW
                          - ZZ
                        type: string
                      type: array
                  required:
                    - allowed_countries
                  title: shipping_address_collection_params
                  type: object
                shipping_options:
                  description: >-
                    The shipping rate options to apply to [checkout
                    sessions](https://stripe.com/docs/api/checkout/sessions)
                    created by this payment link.
                  items:
                    properties:
                      shipping_rate:
                        maxLength: 5000
                        type: string
                    title: shipping_option_params
                    type: object
                  type: array
                submit_type:
                  description: >-
                    Describes the type of transaction being performed in order
                    to customize relevant text on the page, such as the submit
                    button. Changing this value will also affect the hostname in
                    the
                    [url](https://stripe.com/docs/api/payment_links/payment_links/object#url)
                    property (example: `donate.stripe.com`).
                  enum:
                    - auto
                    - book
                    - donate
                    - pay
                  type: string
                subscription_data:
                  description: >-
                    When creating a subscription, the specified configuration
                    data will be used. There must be at least one line item with
                    a recurring price to use `subscription_data`.
                  properties:
                    description:
                      maxLength: 500
                      type: string
                    metadata:
                      additionalProperties:
                        type: string
                      type: object
                    trial_period_days:
                      type: integer
                    trial_settings:
                      properties:
                        end_behavior:
                          properties:
                            missing_payment_method:
                              enum:
                                - cancel
                                - create_invoice
                                - pause
                              type: string
                          required:
                            - missing_payment_method
                          title: end_behavior
                          type: object
                      required:
                        - end_behavior
                      title: trial_settings_config
                      type: object
                  title: subscription_data_params
                  type: object
                tax_id_collection:
                  description: Controls tax ID collection during checkout.
                  properties:
                    enabled:
                      type: boolean
                  required:
                    - enabled
                  title: tax_id_collection_params
                  type: object
                transfer_data:
                  description: >-
                    The account (if any) the payments will be attributed to for
                    tax reporting, and where funds from each payment will be
                    transferred to.
                  properties:
                    amount:
                      type: integer
                    destination:
                      type: string
                  required:
                    - destination
                  title: transfer_data_params
                  type: object
              required:
                - line_items
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_link'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Payment Link
      tags:
        - Payments
        - Links
  '/v1/payment_links/{payment_link}':
    get:
      description: <p>Retrieve a payment link.</p>
      operationId: GetPaymentLinksPaymentLink
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
          name: payment_link
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
                $ref: '#/components/schemas/payment_link'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Payment Link
      tags:
        - Payments
        - Links
    post:
      description: <p>Updates a payment link.</p>
      operationId: PostPaymentLinksPaymentLink
      parameters:
        - in: path
          name: payment_link
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              after_completion:
                explode: true
                style: deepObject
              automatic_tax:
                explode: true
                style: deepObject
              custom_fields:
                explode: true
                style: deepObject
              custom_text:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              inactive_message:
                explode: true
                style: deepObject
              invoice_creation:
                explode: true
                style: deepObject
              line_items:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              payment_intent_data:
                explode: true
                style: deepObject
              payment_method_types:
                explode: true
                style: deepObject
              restrictions:
                explode: true
                style: deepObject
              shipping_address_collection:
                explode: true
                style: deepObject
              subscription_data:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                active:
                  description: >-
                    Whether the payment link's `url` is active. If `false`,
                    customers visiting the URL will be shown a page saying that
                    the link has been deactivated.
                  type: boolean
                after_completion:
                  description: Behavior after the purchase is complete.
                  properties:
                    hosted_confirmation:
                      properties:
                        custom_message:
                          maxLength: 500
                          type: string
                      title: after_completion_confirmation_page_params
                      type: object
                    redirect:
                      properties:
                        url:
                          maxLength: 2048
                          type: string
                      required:
                        - url
                      title: after_completion_redirect_params
                      type: object
                    type:
                      enum:
                        - hosted_confirmation
                        - redirect
                      type: string
                  required:
                    - type
                  title: after_completion_params
                  type: object
                allow_promotion_codes:
                  description: Enables user redeemable promotion codes.
                  type: boolean
                automatic_tax:
                  description: Configuration for automatic tax collection.
                  properties:
                    enabled:
                      type: boolean
                  required:
                    - enabled
                  title: automatic_tax_params
                  type: object
                billing_address_collection:
                  description: Configuration for collecting the customer's billing address.
                  enum:
                    - auto
                    - required
                  type: string
                custom_fields:
                  anyOf:
                    - items:
                        properties:
                          dropdown:
                            properties:
                              options:
                                items:
                                  properties:
                                    label:
                                      maxLength: 100
                                      type: string
                                    value:
                                      maxLength: 100
                                      type: string
                                  required:
                                    - label
                                    - value
                                  title: custom_field_option_param
                                  type: object
                                type: array
                            required:
                              - options
                            title: custom_field_dropdown_param
                            type: object
                          key:
                            maxLength: 200
                            type: string
                          label:
                            properties:
                              custom:
                                maxLength: 50
                                type: string
                              type:
                                enum:
                                  - custom
                                type: string
                            required:
                              - custom
                              - type
                            title: custom_field_label_param
                            type: object
                          numeric:
                            properties:
                              maximum_length:
                                type: integer
                              minimum_length:
                                type: integer
                            title: custom_field_numeric_param
                            type: object
                          optional:
                            type: boolean
                          text:
                            properties:
                              maximum_length:
                                type: integer
                              minimum_length:
                                type: integer
                            title: custom_field_text_param
                            type: object
                          type:
                            enum:
                              - dropdown
                              - numeric
                              - text
                            type: string
                        required:
                          - key
                          - label
                          - type
                        title: custom_field_param
                        type: object
                      type: array
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Collect additional information from your customer using
                    custom fields. Up to 2 fields are supported.
                custom_text:
                  description: >-
                    Display additional text for your customers using custom
                    text.
                  properties:
                    after_submit:
                      anyOf:
                        - properties:
                            message:
                              maxLength: 1200
                              type: string
                          required:
                            - message
                          title: custom_text_position_param
                          type: object
                        - enum:
                            - ''
                          type: string
                    shipping_address:
                      anyOf:
                        - properties:
                            message:
                              maxLength: 1200
                              type: string
                          required:
                            - message
                          title: custom_text_position_param
                          type: object
                        - enum:
                            - ''
                          type: string
                    submit:
                      anyOf:
                        - properties:
                            message:
                              maxLength: 1200
                              type: string
                          required:
                            - message
                          title: custom_text_position_param
                          type: object
                        - enum:
                            - ''
                          type: string
                    terms_of_service_acceptance:
                      anyOf:
                        - properties:
                            message:
                              maxLength: 1200
                              type: string
                          required:
                            - message
                          title: custom_text_position_param
                          type: object
                        - enum:
                            - ''
                          type: string
                  title: custom_text_param
                  type: object
                customer_creation:
                  description: >-
                    Configures whether [checkout
                    sessions](https://stripe.com/docs/api/checkout/sessions)
                    created by this payment link create a
                    [Customer](https://stripe.com/docs/api/customers).
                  enum:
                    - always
                    - if_required
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                inactive_message:
                  anyOf:
                    - maxLength: 500
                      type: string
                    - enum:
                        - ''
                      type: string
                  description: >-
                    The custom message to be displayed to a customer when a
                    payment link is no longer active.
                invoice_creation:
                  description: Generate a post-purchase Invoice for one-time payments.
                  properties:
                    enabled:
                      type: boolean
                    invoice_data:
                      properties:
                        account_tax_ids:
                          anyOf:
                            - items:
                                maxLength: 5000
                                type: string
                              type: array
                            - enum:
                                - ''
                              type: string
                        custom_fields:
                          anyOf:
                            - items:
                                properties:
                                  name:
                                    maxLength: 30
                                    type: string
                                  value:
                                    maxLength: 30
                                    type: string
                                required:
                                  - name
                                  - value
                                title: custom_field_params
                                type: object
                              type: array
                            - enum:
                                - ''
                              type: string
                        description:
                          maxLength: 1500
                          type: string
                        footer:
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
                        rendering_options:
                          anyOf:
                            - properties:
                                amount_tax_display:
                                  enum:
                                    - ''
                                    - exclude_tax
                                    - include_inclusive_tax
                                  type: string
                              title: rendering_options_param
                              type: object
                            - enum:
                                - ''
                              type: string
                      title: invoice_settings_params
                      type: object
                  required:
                    - enabled
                  title: invoice_creation_update_params
                  type: object
                line_items:
                  description: >-
                    The line items representing what is being sold. Each line
                    item represents an item being sold. Up to 20 line items are
                    supported.
                  items:
                    properties:
                      adjustable_quantity:
                        properties:
                          enabled:
                            type: boolean
                          maximum:
                            type: integer
                          minimum:
                            type: integer
                        required:
                          - enabled
                        title: adjustable_quantity_params
                        type: object
                      id:
                        maxLength: 5000
                        type: string
                      quantity:
                        type: integer
                    required:
                      - id
                    title: line_items_update_params
                    type: object
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
                    value to `metadata`. Metadata associated with this Payment
                    Link will automatically be copied to [checkout
                    sessions](https://stripe.com/docs/api/checkout/sessions)
                    created by this payment link.
                  type: object
                payment_intent_data:
                  description: >-
                    A subset of parameters to be passed to PaymentIntent
                    creation for Checkout Sessions in `payment` mode.
                  properties:
                    description:
                      anyOf:
                        - maxLength: 1000
                          type: string
                        - enum:
                            - ''
                          type: string
                    metadata:
                      anyOf:
                        - additionalProperties:
                            type: string
                          type: object
                        - enum:
                            - ''
                          type: string
                    statement_descriptor:
                      anyOf:
                        - maxLength: 22
                          type: string
                        - enum:
                            - ''
                          type: string
                    statement_descriptor_suffix:
                      anyOf:
                        - maxLength: 22
                          type: string
                        - enum:
                            - ''
                          type: string
                    transfer_group:
                      anyOf:
                        - maxLength: 5000
                          type: string
                        - enum:
                            - ''
                          type: string
                  title: payment_intent_data_update_params
                  type: object
                payment_method_collection:
                  description: >-
                    Specify whether Checkout should collect a payment method.
                    When set to `if_required`, Checkout will not collect a
                    payment method when the total due for the session is 0.This
                    may occur if the Checkout Session includes a free trial or a
                    discount.


                    Can only be set in `subscription` mode.


                    If you'd like information on how to collect a payment method
                    outside of Checkout, read the guide on [configuring
                    subscriptions with a free
                    trial](https://stripe.com/docs/payments/checkout/free-trials).
                  enum:
                    - always
                    - if_required
                  type: string
                payment_method_types:
                  anyOf:
                    - items:
                        enum:
                          - affirm
                          - afterpay_clearpay
                          - alipay
                          - au_becs_debit
                          - bacs_debit
                          - bancontact
                          - blik
                          - boleto
                          - card
                          - cashapp
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
                          - sepa_debit
                          - sofort
                          - us_bank_account
                          - wechat_pay
                        type: string
                        x-stripeBypassValidation: true
                      type: array
                    - enum:
                        - ''
                      type: string
                  description: >-
                    The list of payment method types that customers can use.
                    Pass an empty string to enable dynamic payment methods that
                    use your [payment method
                    settings](https://dashboard.stripe.com/settings/payment_methods).
                restrictions:
                  anyOf:
                    - properties:
                        completed_sessions:
                          properties:
                            limit:
                              type: integer
                          required:
                            - limit
                          title: completed_sessions_params
                          type: object
                      required:
                        - completed_sessions
                      title: restrictions_params
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: Settings that restrict the usage of a payment link.
                shipping_address_collection:
                  anyOf:
                    - properties:
                        allowed_countries:
                          items:
                            enum:
                              - AC
                              - AD
                              - AE
                              - AF
                              - AG
                              - AI
                              - AL
                              - AM
                              - AO
                              - AQ
                              - AR
                              - AT
                              - AU
                              - AW
                              - AX
                              - AZ
                              - BA
                              - BB
                              - BD
                              - BE
                              - BF
                              - BG
                              - BH
                              - BI
                              - BJ
                              - BL
                              - BM
                              - BN
                              - BO
                              - BQ
                              - BR
                              - BS
                              - BT
                              - BV
                              - BW
                              - BY
                              - BZ
                              - CA
                              - CD
                              - CF
                              - CG
                              - CH
                              - CI
                              - CK
                              - CL
                              - CM
                              - CN
                              - CO
                              - CR
                              - CV
                              - CW
                              - CY
                              - CZ
                              - DE
                              - DJ
                              - DK
                              - DM
                              - DO
                              - DZ
                              - EC
                              - EE
                              - EG
                              - EH
                              - ER
                              - ES
                              - ET
                              - FI
                              - FJ
                              - FK
                              - FO
                              - FR
                              - GA
                              - GB
                              - GD
                              - GE
                              - GF
                              - GG
                              - GH
                              - GI
                              - GL
                              - GM
                              - GN
                              - GP
                              - GQ
                              - GR
                              - GS
                              - GT
                              - GU
                              - GW
                              - GY
                              - HK
                              - HN
                              - HR
                              - HT
                              - HU
                              - ID
                              - IE
                              - IL
                              - IM
                              - IN
                              - IO
                              - IQ
                              - IS
                              - IT
                              - JE
                              - JM
                              - JO
                              - JP
                              - KE
                              - KG
                              - KH
                              - KI
                              - KM
                              - KN
                              - KR
                              - KW
                              - KY
                              - KZ
                              - LA
                              - LB
                              - LC
                              - LI
                              - LK
                              - LR
                              - LS
                              - LT
                              - LU
                              - LV
                              - LY
                              - MA
                              - MC
                              - MD
                              - ME
                              - MF
                              - MG
                              - MK
                              - ML
                              - MM
                              - MN
                              - MO
                              - MQ
                              - MR
                              - MS
                              - MT
                              - MU
                              - MV
                              - MW
                              - MX
                              - MY
                              - MZ
                              - NA
                              - NC
                              - NE
                              - NG
                              - NI
                              - NL
                              - 'NO'
                              - NP
                              - NR
                              - NU
                              - NZ
                              - OM
                              - PA
                              - PE
                              - PF
                              - PG
                              - PH
                              - PK
                              - PL
                              - PM
                              - PN
                              - PR
                              - PS
                              - PT
                              - PY
                              - QA
                              - RE
                              - RO
                              - RS
                              - RU
                              - RW
                              - SA
                              - SB
                              - SC
                              - SE
                              - SG
                              - SH
                              - SI
                              - SJ
                              - SK
                              - SL
                              - SM
                              - SN
                              - SO
                              - SR
                              - SS
                              - ST
                              - SV
                              - SX
                              - SZ
                              - TA
                              - TC
                              - TD
                              - TF
                              - TG
                              - TH
                              - TJ
                              - TK
                              - TL
                              - TM
                              - TN
                              - TO
                              - TR
                              - TT
                              - TV
                              - TW
                              - TZ
                              - UA
                              - UG
                              - US
                              - UY
                              - UZ
                              - VA
                              - VC
                              - VE
                              - VG
                              - VN
                              - VU
                              - WF
                              - WS
                              - XK
                              - YE
                              - YT
                              - ZA
                              - ZM
                              - ZW
                              - ZZ
                            type: string
                          type: array
                      required:
                        - allowed_countries
                      title: shipping_address_collection_params
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Configuration for collecting the customer's shipping
                    address.
                subscription_data:
                  description: >-
                    When creating a subscription, the specified configuration
                    data will be used. There must be at least one line item with
                    a recurring price to use `subscription_data`.
                  properties:
                    metadata:
                      anyOf:
                        - additionalProperties:
                            type: string
                          type: object
                        - enum:
                            - ''
                          type: string
                    trial_settings:
                      anyOf:
                        - properties:
                            end_behavior:
                              properties:
                                missing_payment_method:
                                  enum:
                                    - cancel
                                    - create_invoice
                                    - pause
                                  type: string
                              required:
                                - missing_payment_method
                              title: end_behavior
                              type: object
                          required:
                            - end_behavior
                          title: trial_settings_config
                          type: object
                        - enum:
                            - ''
                          type: string
                  title: subscription_data_update_params
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_link'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Payment Link
      tags:
        - Payments
        - Links
  '/v1/payment_links/{payment_link}/line_items':
    get:
      description: >-
        <p>When retrieving a payment link, there is an includable
        <strong>line_items</strong> property containing the first handful of
        those items. There is also a URL where you can retrieve the full
        (paginated) list of line items.</p>
      operationId: GetPaymentLinksPaymentLinkLineItems
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
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - in: path
          name: payment_link
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
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
                    description: Details about each object.
                    items:
                      $ref: '#/components/schemas/item'
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
                title: PaymentLinksResourceListLineItems
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
      summary: Retrieve Payment Link Line Items
      tags:
        - Payments
        - Links
        - Lines
        - Items
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
    payment_link:
      description: >-
        A payment link is a shareable URL that will take your customers to a
        hosted payment page. A payment link can be shared and used multiple
        times.


        When a customer opens a payment link it will open a new [checkout
        session](https://stripe.com/docs/api/checkout/sessions) to render the
        payment page. You can use [checkout session
        events](https://stripe.com/docs/api/events/types#event_types-checkout.session.completed)
        to track payments through payment links.


        Related guide: [Payment Links
        API](https://stripe.com/docs/payment-links)
      properties:
        active:
          description: >-
            Whether the payment link's `url` is active. If `false`, customers
            visiting the URL will be shown a page saying that the link has been
            deactivated.
          type: boolean
        after_completion:
          $ref: '#/components/schemas/payment_links_resource_after_completion'
        allow_promotion_codes:
          description: Whether user redeemable promotion codes are enabled.
          type: boolean
        application:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/application'
            - $ref: '#/components/schemas/deleted_application'
          description: The ID of the Connect application that created the Payment Link.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/application'
              - $ref: '#/components/schemas/deleted_application'
        application_fee_amount:
          description: >-
            The amount of the application fee (if any) that will be requested to
            be applied to the payment and transferred to the application owner's
            Stripe account.
          nullable: true
          type: integer
        application_fee_percent:
          description: >-
            This represents the percentage of the subscription invoice total
            that will be transferred to the application owner's Stripe account.
          nullable: true
          type: number
        automatic_tax:
          $ref: '#/components/schemas/payment_links_resource_automatic_tax'
        billing_address_collection:
          description: Configuration for collecting the customer's billing address.
          enum:
            - auto
            - required
          type: string
        consent_collection:
          anyOf:
            - $ref: '#/components/schemas/payment_links_resource_consent_collection'
          description: >-
            When set, provides configuration to gather active consent from
            customers.
          nullable: true
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        custom_fields:
          description: >-
            Collect additional information from your customer using custom
            fields. Up to 2 fields are supported.
          items:
            $ref: '#/components/schemas/payment_links_resource_custom_fields'
          type: array
        custom_text:
          $ref: '#/components/schemas/payment_links_resource_custom_text'
        customer_creation:
          description: Configuration for Customer creation during checkout.
          enum:
            - always
            - if_required
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        inactive_message:
          description: >-
            The custom message to be displayed to a customer when a payment link
            is no longer active.
          maxLength: 5000
          nullable: true
          type: string
        invoice_creation:
          anyOf:
            - $ref: '#/components/schemas/payment_links_resource_invoice_creation'
          description: Configuration for creating invoice for payment mode payment links.
          nullable: true
        line_items:
          description: The line items representing what is being sold.
          properties:
            data:
              description: Details about each object.
              items:
                $ref: '#/components/schemas/item'
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
          title: PaymentLinksResourceListLineItems
          type: object
          x-expandableFields:
            - data
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
            - payment_link
          type: string
        on_behalf_of:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/account'
          description: >-
            The account on behalf of which to charge. See the [Connect
            documentation](https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts)
            for details.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/account'
        payment_intent_data:
          anyOf:
            - $ref: '#/components/schemas/payment_links_resource_payment_intent_data'
          description: >-
            Indicates the parameters to be passed to PaymentIntent creation
            during checkout.
          nullable: true
        payment_method_collection:
          description: Configuration for collecting a payment method during checkout.
          enum:
            - always
            - if_required
          type: string
        payment_method_types:
          description: >-
            The list of payment method types that customers can use. When
            `null`, Stripe will dynamically show relevant payment methods you've
            enabled in your [payment method
            settings](https://dashboard.stripe.com/settings/payment_methods).
          items:
            enum:
              - affirm
              - afterpay_clearpay
              - alipay
              - au_becs_debit
              - bacs_debit
              - bancontact
              - blik
              - boleto
              - card
              - cashapp
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
              - sepa_debit
              - sofort
              - us_bank_account
              - wechat_pay
            type: string
            x-stripeBypassValidation: true
          nullable: true
          type: array
        phone_number_collection:
          $ref: '#/components/schemas/payment_links_resource_phone_number_collection'
        restrictions:
          anyOf:
            - $ref: '#/components/schemas/payment_links_resource_restrictions'
          description: Settings that restrict the usage of a payment link.
          nullable: true
        shipping_address_collection:
          anyOf:
            - $ref: >-
                #/components/schemas/payment_links_resource_shipping_address_collection
          description: Configuration for collecting the customer's shipping address.
          nullable: true
        shipping_options:
          description: The shipping rate options applied to the session.
          items:
            $ref: '#/components/schemas/payment_links_resource_shipping_option'
          type: array
        submit_type:
          description: >-
            Indicates the type of transaction being performed which customizes
            relevant text on the page, such as the submit button.
          enum:
            - auto
            - book
            - donate
            - pay
          type: string
        subscription_data:
          anyOf:
            - $ref: '#/components/schemas/payment_links_resource_subscription_data'
          description: >-
            When creating a subscription, the specified configuration data will
            be used. There must be at least one line item with a recurring price
            to use `subscription_data`.
          nullable: true
        tax_id_collection:
          $ref: '#/components/schemas/payment_links_resource_tax_id_collection'
        transfer_data:
          anyOf:
            - $ref: '#/components/schemas/payment_links_resource_transfer_data'
          description: >-
            The account (if any) the payments will be attributed to for tax
            reporting, and where funds from each payment will be transferred to.
          nullable: true
        url:
          description: The public URL that can be shared with customers.
          maxLength: 5000
          type: string
      required:
        - active
        - after_completion
        - allow_promotion_codes
        - automatic_tax
        - billing_address_collection
        - currency
        - custom_fields
        - custom_text
        - customer_creation
        - id
        - livemode
        - metadata
        - object
        - payment_method_collection
        - phone_number_collection
        - shipping_options
        - submit_type
        - tax_id_collection
        - url
      title: PaymentLink
      type: object
      x-expandableFields:
        - after_completion
        - application
        - automatic_tax
        - consent_collection
        - custom_fields
        - custom_text
        - invoice_creation
        - line_items
        - on_behalf_of
        - payment_intent_data
        - phone_number_collection
        - restrictions
        - shipping_address_collection
        - shipping_options
        - subscription_data
        - tax_id_collection
        - transfer_data
      x-resourceId: payment_link
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
  - name: Payments
    description: Needs a description.
  - name: Links
    description: Needs a description.
  - name: Lines
    description: Needs a description.
  - name: Items
    description: Needs a description.
---