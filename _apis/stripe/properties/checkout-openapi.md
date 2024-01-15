---
openapi: 3.0.0
info:
  title: Stripe Checkout API
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
  /v1/checkout/sessions:
    get:
      description: <p>Returns a list of Checkout Sessions.</p>
      operationId: GetCheckoutSessions
      parameters:
        - description: >-
            Only return the Checkout Sessions that were created during the given
            date interval.
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
        - description: Only return the Checkout Sessions for the Customer specified.
          in: query
          name: customer
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Only return the Checkout Sessions for the Customer details
            specified.
          explode: true
          in: query
          name: customer_details
          required: false
          schema:
            properties:
              email:
                type: string
            required:
              - email
            title: customer_details_params
            type: object
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
        - description: Only return the Checkout Session for the PaymentIntent specified.
          in: query
          name: payment_intent
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Only return the Checkout Sessions for the Payment Link specified.
          in: query
          name: payment_link
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
        - description: Only return the Checkout Sessions matching the given status.
          in: query
          name: status
          required: false
          schema:
            enum:
              - complete
              - expired
              - open
            type: string
          style: form
        - description: Only return the Checkout Session for the subscription specified.
          in: query
          name: subscription
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
                      $ref: '#/components/schemas/checkout.session'
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
                title: PaymentPagesCheckoutSessionList
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
      summary: Retrieve Checkout Sessions
      tags:
        - Checkout
        - Sessions
    post:
      description: <p>Creates a Session object.</p>
      operationId: PostCheckoutSessions
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              after_expiration:
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
              customer_update:
                explode: true
                style: deepObject
              discounts:
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
              payment_method_options:
                explode: true
                style: deepObject
              payment_method_types:
                explode: true
                style: deepObject
              phone_number_collection:
                explode: true
                style: deepObject
              setup_intent_data:
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
            schema:
              additionalProperties: false
              properties:
                after_expiration:
                  description: Configure actions after a Checkout Session has expired.
                  properties:
                    recovery:
                      properties:
                        allow_promotion_codes:
                          type: boolean
                        enabled:
                          type: boolean
                      required:
                        - enabled
                      title: recovery_params
                      type: object
                  title: after_expiration_params
                  type: object
                allow_promotion_codes:
                  description: Enables user redeemable promotion codes.
                  type: boolean
                automatic_tax:
                  description: >-
                    Settings for automatic tax lookup for this session and
                    resulting payments, invoices, and subscriptions.
                  properties:
                    enabled:
                      type: boolean
                  required:
                    - enabled
                  title: automatic_tax_params
                  type: object
                billing_address_collection:
                  description: >-
                    Specify whether Checkout should collect the customer's
                    billing address.
                  enum:
                    - auto
                    - required
                  type: string
                cancel_url:
                  description: >-
                    If set, Checkout displays a back button and customers will
                    be directed to this URL if they decide to cancel payment and
                    return to your website.
                  maxLength: 5000
                  type: string
                client_reference_id:
                  description: >-
                    A unique string to reference the Checkout Session. This can
                    be a

                    customer ID, a cart ID, or similar, and can be used to
                    reconcile the

                    session with your internal systems.
                  maxLength: 200
                  type: string
                consent_collection:
                  description: >-
                    Configure fields for the Checkout Session to gather active
                    consent from customers.
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
                    currency](https://stripe.com/docs/currencies). Required in
                    `setup` mode when `payment_method_types` is not set.
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
                customer:
                  description: >-
                    ID of an existing Customer, if one exists. In `payment`
                    mode, the customer’s most recently saved card

                    payment method will be used to prefill the email, name, card
                    details, and billing address

                    on the Checkout page. In `subscription` mode, the customer’s
                    [default payment
                    method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method)

                    will be used if it’s a card, otherwise the most recently
                    saved card will be used. A valid billing address, billing
                    name and billing email are required on the payment method
                    for Checkout to prefill the customer's card details.


                    If the Customer already has a valid
                    [email](https://stripe.com/docs/api/customers/object#customer_object-email)
                    set, the email will be prefilled and not editable in
                    Checkout.

                    If the Customer does not have a valid `email`, Checkout will
                    set the email entered during the session on the Customer.


                    If blank for Checkout Sessions in `subscription` mode or
                    with `customer_creation` set as `always` in `payment` mode,
                    Checkout will create a new Customer object based on
                    information provided during the payment flow.


                    You can set
                    [`payment_intent_data.setup_future_usage`](https://stripe.com/docs/api/checkout/sessions/create#create_checkout_session-payment_intent_data-setup_future_usage)
                    to have Checkout automatically attach the payment method to
                    the Customer you pass in for future reuse.
                  maxLength: 5000
                  type: string
                customer_creation:
                  description: >-
                    Configure whether a Checkout Session creates a
                    [Customer](https://stripe.com/docs/api/customers) during
                    Session confirmation.


                    When a Customer is not created, you can still retrieve
                    email, address, and other customer data entered in Checkout

                    with
                    [customer_details](https://stripe.com/docs/api/checkout/sessions/object#checkout_session_object-customer_details).


                    Sessions that don't create Customers instead are grouped by
                    [guest
                    customers](https://stripe.com/docs/payments/checkout/guest-customers)

                    in the Dashboard. Promotion codes limited to first time
                    customers will return invalid for these Sessions.


                    Can only be set in `payment` and `setup` mode.
                  enum:
                    - always
                    - if_required
                  type: string
                customer_email:
                  description: >-
                    If provided, this value will be used when the Customer
                    object is created.

                    If not provided, customers will be asked to enter their
                    email address.

                    Use this parameter to prefill customer data if you already
                    have an email

                    on file. To access information about the customer once a
                    session is

                    complete, use the `customer` field.
                  type: string
                customer_update:
                  description: >-
                    Controls what fields on Customer can be updated by the
                    Checkout Session. Can only be provided when `customer` is
                    provided.
                  properties:
                    address:
                      enum:
                        - auto
                        - never
                      type: string
                      x-stripeBypassValidation: true
                    name:
                      enum:
                        - auto
                        - never
                      type: string
                      x-stripeBypassValidation: true
                    shipping:
                      enum:
                        - auto
                        - never
                      type: string
                      x-stripeBypassValidation: true
                  title: customer_update_params
                  type: object
                discounts:
                  description: >-
                    The coupon or promotion code to apply to this Session.
                    Currently, only up to one may be specified.
                  items:
                    properties:
                      coupon:
                        maxLength: 5000
                        type: string
                      promotion_code:
                        maxLength: 5000
                        type: string
                    title: discount_params
                    type: object
                  type: array
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                expires_at:
                  description: >-
                    The Epoch time in seconds at which the Checkout Session will
                    expire. It can be anywhere from 30 minutes to 24 hours after
                    Checkout Session creation. By default, this value is 24
                    hours from creation.
                  format: unix-time
                  type: integer
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
                          additionalProperties:
                            type: string
                          type: object
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
                      title: invoice_data_params
                      type: object
                  required:
                    - enabled
                  title: invoice_creation_params
                  type: object
                line_items:
                  description: >-
                    A list of items the customer is purchasing. Use this
                    parameter to pass one-time or recurring
                    [Prices](https://stripe.com/docs/api/prices).


                    For `payment` mode, there is a maximum of 100 line items,
                    however it is recommended to consolidate line items if there
                    are more than a few dozen.


                    For `subscription` mode, there is a maximum of 20 line items
                    with recurring Prices and 20 line items with one-time
                    Prices. Line items with one-time Prices will be on the
                    initial invoice only.
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
                      dynamic_tax_rates:
                        items:
                          maxLength: 5000
                          type: string
                        type: array
                      price:
                        maxLength: 5000
                        type: string
                      price_data:
                        properties:
                          currency:
                            type: string
                          product:
                            maxLength: 5000
                            type: string
                          product_data:
                            properties:
                              description:
                                maxLength: 40000
                                type: string
                              images:
                                items:
                                  type: string
                                type: array
                              metadata:
                                additionalProperties:
                                  type: string
                                type: object
                              name:
                                maxLength: 5000
                                type: string
                              tax_code:
                                maxLength: 5000
                                type: string
                            required:
                              - name
                            title: product_data
                            type: object
                          recurring:
                            properties:
                              interval:
                                enum:
                                  - day
                                  - month
                                  - week
                                  - year
                                type: string
                              interval_count:
                                type: integer
                            required:
                              - interval
                            title: recurring_adhoc
                            type: object
                          tax_behavior:
                            enum:
                              - exclusive
                              - inclusive
                              - unspecified
                            type: string
                          unit_amount:
                            type: integer
                          unit_amount_decimal:
                            format: decimal
                            type: string
                        required:
                          - currency
                        title: price_data_with_product_data
                        type: object
                      quantity:
                        type: integer
                      tax_rates:
                        items:
                          maxLength: 5000
                          type: string
                        type: array
                    title: line_item_params
                    type: object
                  type: array
                locale:
                  description: >-
                    The IETF language tag of the locale Checkout is displayed
                    in. If blank or `auto`, the browser's locale is used.
                  enum:
                    - auto
                    - bg
                    - cs
                    - da
                    - de
                    - el
                    - en
                    - en-GB
                    - es
                    - es-419
                    - et
                    - fi
                    - fil
                    - fr
                    - fr-CA
                    - hr
                    - hu
                    - id
                    - it
                    - ja
                    - ko
                    - lt
                    - lv
                    - ms
                    - mt
                    - nb
                    - nl
                    - pl
                    - pt
                    - pt-BR
                    - ro
                    - ru
                    - sk
                    - sl
                    - sv
                    - th
                    - tr
                    - vi
                    - zh
                    - zh-HK
                    - zh-TW
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
                mode:
                  description: >-
                    The mode of the Checkout Session. Pass `subscription` if the
                    Checkout Session includes at least one recurring item.
                  enum:
                    - payment
                    - setup
                    - subscription
                  type: string
                payment_intent_data:
                  description: >-
                    A subset of parameters to be passed to PaymentIntent
                    creation for Checkout Sessions in `payment` mode.
                  properties:
                    application_fee_amount:
                      type: integer
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
                    on_behalf_of:
                      type: string
                    receipt_email:
                      type: string
                    setup_future_usage:
                      enum:
                        - off_session
                        - on_session
                      type: string
                    shipping:
                      properties:
                        address:
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
                          required:
                            - line1
                          title: address
                          type: object
                        carrier:
                          maxLength: 5000
                          type: string
                        name:
                          maxLength: 5000
                          type: string
                        phone:
                          maxLength: 5000
                          type: string
                        tracking_number:
                          maxLength: 5000
                          type: string
                      required:
                        - address
                        - name
                      title: shipping
                      type: object
                    statement_descriptor:
                      maxLength: 22
                      type: string
                    statement_descriptor_suffix:
                      maxLength: 22
                      type: string
                    transfer_data:
                      properties:
                        amount:
                          type: integer
                        destination:
                          type: string
                      required:
                        - destination
                      title: transfer_data_params
                      type: object
                    transfer_group:
                      type: string
                  title: payment_intent_data_params
                  type: object
                payment_method_collection:
                  description: >-
                    Specify whether Checkout should collect a payment method.
                    When set to `if_required`, Checkout will not collect a
                    payment method when the total due for the session is 0.

                    This may occur if the Checkout Session includes a free trial
                    or a discount.


                    Can only be set in `subscription` mode.


                    If you'd like information on how to collect a payment method
                    outside of Checkout, read the guide on configuring
                    [subscriptions with a free
                    trial](https://stripe.com/docs/payments/checkout/free-trials).
                  enum:
                    - always
                    - if_required
                  type: string
                payment_method_configuration:
                  description: >-
                    The ID of the payment method configuration to use with this
                    Checkout session.
                  maxLength: 100
                  type: string
                payment_method_options:
                  description: Payment-method-specific configuration.
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
                          title: mandate_options_param
                          type: object
                        setup_future_usage:
                          enum:
                            - none
                            - off_session
                            - on_session
                          type: string
                        verification_method:
                          enum:
                            - automatic
                            - instant
                            - microdeposits
                          type: string
                          x-stripeBypassValidation: true
                      title: payment_method_options_param
                      type: object
                    affirm:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    afterpay_clearpay:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    alipay:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    au_becs_debit:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    bacs_debit:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                            - off_session
                            - on_session
                          type: string
                      title: payment_method_options_param
                      type: object
                    bancontact:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    boleto:
                      properties:
                        expires_after_days:
                          type: integer
                        setup_future_usage:
                          enum:
                            - none
                            - off_session
                            - on_session
                          type: string
                      title: payment_method_options_param
                      type: object
                    card:
                      properties:
                        installments:
                          properties:
                            enabled:
                              type: boolean
                          title: installments_param
                          type: object
                        setup_future_usage:
                          enum:
                            - off_session
                            - on_session
                          type: string
                        statement_descriptor_suffix_kana:
                          maxLength: 22
                          type: string
                        statement_descriptor_suffix_kanji:
                          maxLength: 17
                          type: string
                      title: payment_method_options_param
                      type: object
                    cashapp:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                            - off_session
                            - on_session
                          type: string
                      title: payment_method_options_param
                      type: object
                    customer_balance:
                      properties:
                        bank_transfer:
                          properties:
                            eu_bank_transfer:
                              properties:
                                country:
                                  maxLength: 5000
                                  type: string
                              required:
                                - country
                              title: eu_bank_transfer_params
                              type: object
                            requested_address_types:
                              items:
                                enum:
                                  - aba
                                  - iban
                                  - sepa
                                  - sort_code
                                  - spei
                                  - swift
                                  - zengin
                                type: string
                                x-stripeBypassValidation: true
                              type: array
                            type:
                              enum:
                                - eu_bank_transfer
                                - gb_bank_transfer
                                - jp_bank_transfer
                                - mx_bank_transfer
                                - us_bank_transfer
                              type: string
                              x-stripeBypassValidation: true
                          required:
                            - type
                          title: bank_transfer_param
                          type: object
                        funding_type:
                          enum:
                            - bank_transfer
                          type: string
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    eps:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    fpx:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    giropay:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    grabpay:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    ideal:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    klarna:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    konbini:
                      properties:
                        expires_after_days:
                          type: integer
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    link:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                            - off_session
                          type: string
                      title: payment_method_options_param
                      type: object
                    oxxo:
                      properties:
                        expires_after_days:
                          type: integer
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    p24:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                        tos_shown_and_accepted:
                          type: boolean
                      title: payment_method_options_param
                      type: object
                    paynow:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
                      type: object
                    paypal:
                      properties:
                        capture_method:
                          enum:
                            - ''
                            - manual
                          type: string
                        preferred_locale:
                          enum:
                            - cs-CZ
                            - da-DK
                            - de-AT
                            - de-DE
                            - de-LU
                            - el-GR
                            - en-GB
                            - en-US
                            - es-ES
                            - fi-FI
                            - fr-BE
                            - fr-FR
                            - fr-LU
                            - hu-HU
                            - it-IT
                            - nl-BE
                            - nl-NL
                            - pl-PL
                            - pt-PT
                            - sk-SK
                            - sv-SE
                          type: string
                          x-stripeBypassValidation: true
                        reference:
                          maxLength: 127
                          type: string
                        risk_correlation_id:
                          maxLength: 32
                          type: string
                        setup_future_usage:
                          enum:
                            - ''
                            - none
                            - off_session
                          type: string
                      title: payment_method_options_param
                      type: object
                    pix:
                      properties:
                        expires_after_seconds:
                          type: integer
                      title: payment_method_options_param
                      type: object
                    revolut_pay:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                            - off_session
                          type: string
                      title: payment_method_options_param
                      type: object
                    sepa_debit:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                            - off_session
                            - on_session
                          type: string
                      title: payment_method_options_param
                      type: object
                    sofort:
                      properties:
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      title: payment_method_options_param
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
                          title: linked_account_options_param
                          type: object
                        setup_future_usage:
                          enum:
                            - none
                            - off_session
                            - on_session
                          type: string
                        verification_method:
                          enum:
                            - automatic
                            - instant
                          type: string
                          x-stripeBypassValidation: true
                      title: payment_method_options_param
                      type: object
                    wechat_pay:
                      properties:
                        app_id:
                          maxLength: 5000
                          type: string
                        client:
                          enum:
                            - android
                            - ios
                            - web
                          type: string
                          x-stripeBypassValidation: true
                        setup_future_usage:
                          enum:
                            - none
                          type: string
                      required:
                        - client
                      title: payment_method_options_param
                      type: object
                  title: payment_method_options_param
                  type: object
                payment_method_types:
                  description: >-
                    A list of the types of payment methods (e.g., `card`) this
                    Checkout Session can accept.


                    You can omit this attribute to manage your payment methods
                    from the [Stripe
                    Dashboard](https://dashboard.stripe.com/settings/payment_methods).

                    See [Dynamic Payment
                    Methods](https://stripe.com/docs/payments/payment-methods/integration-options#using-dynamic-payment-methods)
                    for more details.


                    Read more about the supported payment methods and their
                    requirements in our [payment

                    method details
                    guide](/docs/payments/checkout/payment-methods).


                    If multiple payment methods are passed, Checkout will
                    dynamically reorder them to

                    prioritize the most relevant payment methods based on the
                    customer's location and

                    other characteristics.
                  items:
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
                      - card
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
                  type: array
                phone_number_collection:
                  description: >-
                    Controls phone number collection settings for the session.


                    We recommend that you review your privacy policy and check
                    with your legal contacts

                    before using this feature. Learn more about [collecting
                    phone numbers with
                    Checkout](https://stripe.com/docs/payments/checkout/phone-numbers).
                  properties:
                    enabled:
                      type: boolean
                  required:
                    - enabled
                  title: phone_number_collection_params
                  type: object
                redirect_on_completion:
                  description: >-
                    This parameter applies to `ui_mode: embedded`. By default,
                    Stripe will always redirect to your return_url after a
                    successful confirmation. If you set `redirect_on_completion:
                    'if_required'`, then we will only redirect if your user
                    chooses a redirect-based payment method.
                  enum:
                    - always
                    - if_required
                    - never
                  type: string
                return_url:
                  description: >-
                    The URL to redirect your customer back to after they
                    authenticate or cancel their payment on the

                    payment method's app or site. This parameter is required if
                    ui_mode is `embedded`

                    and redirect-based payment methods are enabled on the
                    session.
                  type: string
                setup_intent_data:
                  description: >-
                    A subset of parameters to be passed to SetupIntent creation
                    for Checkout Sessions in `setup` mode.
                  properties:
                    description:
                      maxLength: 1000
                      type: string
                    metadata:
                      additionalProperties:
                        type: string
                      type: object
                    on_behalf_of:
                      type: string
                  title: setup_intent_data_param
                  type: object
                shipping_address_collection:
                  description: >-
                    When set, provides configuration for Checkout to collect a
                    shipping address from a customer.
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
                    The shipping rate options to apply to this Session. Up to a
                    maximum of 5.
                  items:
                    properties:
                      shipping_rate:
                        maxLength: 5000
                        type: string
                      shipping_rate_data:
                        properties:
                          delivery_estimate:
                            properties:
                              maximum:
                                properties:
                                  unit:
                                    enum:
                                      - business_day
                                      - day
                                      - hour
                                      - month
                                      - week
                                    type: string
                                  value:
                                    type: integer
                                required:
                                  - unit
                                  - value
                                title: delivery_estimate_bound
                                type: object
                              minimum:
                                properties:
                                  unit:
                                    enum:
                                      - business_day
                                      - day
                                      - hour
                                      - month
                                      - week
                                    type: string
                                  value:
                                    type: integer
                                required:
                                  - unit
                                  - value
                                title: delivery_estimate_bound
                                type: object
                            title: delivery_estimate
                            type: object
                          display_name:
                            maxLength: 100
                            type: string
                          fixed_amount:
                            properties:
                              amount:
                                type: integer
                              currency:
                                type: string
                              currency_options:
                                additionalProperties:
                                  properties:
                                    amount:
                                      type: integer
                                    tax_behavior:
                                      enum:
                                        - exclusive
                                        - inclusive
                                        - unspecified
                                      type: string
                                  required:
                                    - amount
                                  title: currency_option
                                  type: object
                                type: object
                            required:
                              - amount
                              - currency
                            title: fixed_amount
                            type: object
                          metadata:
                            additionalProperties:
                              type: string
                            type: object
                          tax_behavior:
                            enum:
                              - exclusive
                              - inclusive
                              - unspecified
                            type: string
                          tax_code:
                            type: string
                          type:
                            enum:
                              - fixed_amount
                            type: string
                        required:
                          - display_name
                        title: method_params
                        type: object
                    title: shipping_option_params
                    type: object
                  type: array
                submit_type:
                  description: >-
                    Describes the type of transaction being performed by
                    Checkout in order to customize

                    relevant text on the page, such as the submit button.
                    `submit_type` can only be

                    specified on Checkout Sessions in `payment` mode, but not
                    Checkout Sessions

                    in `subscription` or `setup` mode. Possible values are
                    `auto`, `pay`, `book`, `donate`. If blank or `auto`, `pay`
                    is used.
                  enum:
                    - auto
                    - book
                    - donate
                    - pay
                  type: string
                subscription_data:
                  description: >-
                    A subset of parameters to be passed to subscription creation
                    for Checkout Sessions in `subscription` mode.
                  properties:
                    application_fee_percent:
                      type: number
                    billing_cycle_anchor:
                      format: unix-time
                      type: integer
                    default_tax_rates:
                      items:
                        maxLength: 5000
                        type: string
                      type: array
                    description:
                      maxLength: 500
                      type: string
                    metadata:
                      additionalProperties:
                        type: string
                      type: object
                    on_behalf_of:
                      type: string
                    proration_behavior:
                      enum:
                        - create_prorations
                        - none
                      type: string
                    transfer_data:
                      properties:
                        amount_percent:
                          type: number
                        destination:
                          type: string
                      required:
                        - destination
                      title: transfer_data_specs
                      type: object
                    trial_end:
                      format: unix-time
                      type: integer
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
                success_url:
                  description: >-
                    The URL to which Stripe should send customers when payment
                    or setup

                    is complete.

                    This parameter is not allowed if ui_mode is `embedded`. If
                    you’d like to use

                    information from the successful Checkout Session on your
                    page, read the

                    guide on [customizing your success
                    page](https://stripe.com/docs/payments/checkout/custom-success-page).
                  maxLength: 5000
                  type: string
                tax_id_collection:
                  description: Controls tax ID collection settings for the session.
                  properties:
                    enabled:
                      type: boolean
                  required:
                    - enabled
                  title: tax_id_collection_params
                  type: object
                ui_mode:
                  description: >-
                    `ui_mode` can be `hosted` or `embedded`. The default is
                    `hosted`.
                  enum:
                    - embedded
                    - hosted
                  type: string
                  x-stripeBypassValidation: true
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/checkout.session'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Checkout Session
      tags:
        - Checkout
        - Sessions
  '/v1/checkout/sessions/{session}':
    get:
      description: <p>Retrieves a Session object.</p>
      operationId: GetCheckoutSessionsSession
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
          name: session
          required: true
          schema:
            maxLength: 66
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
                $ref: '#/components/schemas/checkout.session'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Checkout Session
      tags:
        - Checkout
        - Sessions
  '/v1/checkout/sessions/{session}/expire':
    post:
      description: >-
        <p>A Session can be expired when it is in one of these statuses:
        <code>open</code> </p>


        <p>After it expires, a customer can’t complete a Session and customers
        loading the Session see a message saying the Session is expired.</p>
      operationId: PostCheckoutSessionsSessionExpire
      parameters:
        - in: path
          name: session
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
                $ref: '#/components/schemas/checkout.session'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Expire Checkout Session
      tags:
        - Checkout
        - Sessions
        - Expires
  '/v1/checkout/sessions/{session}/line_items':
    get:
      description: >-
        <p>When retrieving a Checkout Session, there is an includable
        <strong>line_items</strong> property containing the first handful of
        those items. There is also a URL where you can retrieve the full
        (paginated) list of line items.</p>
      operationId: GetCheckoutSessionsSessionLineItems
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
          name: session
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
                title: PaymentPagesCheckoutSessionListLineItems
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
      summary: Retrieve Checkout Session Line Items
      tags:
        - Checkout
        - Sessions
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
    checkout.session:
      description: >-
        A Checkout Session represents your customer's session as they pay for

        one-time purchases or subscriptions through
        [Checkout](https://stripe.com/docs/payments/checkout)

        or [Payment Links](https://stripe.com/docs/payments/payment-links). We
        recommend creating a

        new Session each time your customer attempts to pay.


        Once payment is successful, the Checkout Session will contain a
        reference

        to the [Customer](https://stripe.com/docs/api/customers), and either the
        successful

        [PaymentIntent](https://stripe.com/docs/api/payment_intents) or an
        active

        [Subscription](https://stripe.com/docs/api/subscriptions).


        You can create a Checkout Session on your server and redirect to its URL

        to begin Checkout.


        Related guide: [Checkout
        quickstart](https://stripe.com/docs/checkout/quickstart)
      properties:
        after_expiration:
          anyOf:
            - $ref: >-
                #/components/schemas/payment_pages_checkout_session_after_expiration
          description: >-
            When set, provides configuration for actions to take if this
            Checkout Session expires.
          nullable: true
        allow_promotion_codes:
          description: Enables user redeemable promotion codes.
          nullable: true
          type: boolean
        amount_subtotal:
          description: Total of all items before discounts or taxes are applied.
          nullable: true
          type: integer
        amount_total:
          description: Total of all items after discounts and taxes are applied.
          nullable: true
          type: integer
        automatic_tax:
          $ref: '#/components/schemas/payment_pages_checkout_session_automatic_tax'
        billing_address_collection:
          description: >-
            Describes whether Checkout should collect the customer's billing
            address.
          enum:
            - auto
            - required
          nullable: true
          type: string
        cancel_url:
          description: >-
            If set, Checkout displays a back button and customers will be
            directed to this URL if they decide to cancel payment and return to
            your website.
          maxLength: 5000
          nullable: true
          type: string
        client_reference_id:
          description: |-
            A unique string to reference the Checkout Session. This can be a
            customer ID, a cart ID, or similar, and can be used to reconcile the
            Session with your internal systems.
          maxLength: 5000
          nullable: true
          type: string
        client_secret:
          description: >-
            Client secret to be used when initializing Stripe.js embedded
            checkout.
          maxLength: 5000
          nullable: true
          type: string
        consent:
          anyOf:
            - $ref: '#/components/schemas/payment_pages_checkout_session_consent'
          description: Results of `consent_collection` for this session.
          nullable: true
        consent_collection:
          anyOf:
            - $ref: >-
                #/components/schemas/payment_pages_checkout_session_consent_collection
          description: >-
            When set, provides configuration for the Checkout Session to gather
            active consent from customers.
          nullable: true
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
          nullable: true
          type: string
        currency_conversion:
          anyOf:
            - $ref: >-
                #/components/schemas/payment_pages_checkout_session_currency_conversion
          description: >-
            Currency conversion details for automatic currency conversion
            sessions
          nullable: true
        custom_fields:
          description: >-
            Collect additional information from your customer using custom
            fields. Up to 2 fields are supported.
          items:
            $ref: '#/components/schemas/payment_pages_checkout_session_custom_fields'
          type: array
        custom_text:
          $ref: '#/components/schemas/payment_pages_checkout_session_custom_text'
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
            - $ref: '#/components/schemas/deleted_customer'
          description: >-
            The ID of the customer for this Session.

            For Checkout Sessions in `subscription` mode or Checkout Sessions
            with `customer_creation` set as `always` in `payment` mode, Checkout

            will create a new customer object based on information provided

            during the payment flow unless an existing customer was provided
            when

            the Session was created.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
              - $ref: '#/components/schemas/deleted_customer'
        customer_creation:
          description: >-
            Configure whether a Checkout Session creates a Customer when the
            Checkout Session completes.
          enum:
            - always
            - if_required
          nullable: true
          type: string
        customer_details:
          anyOf:
            - $ref: >-
                #/components/schemas/payment_pages_checkout_session_customer_details
          description: >-
            The customer details including the customer's tax exempt status and
            the customer's tax IDs. Only the customer's email is present on
            Sessions in `setup` mode.
          nullable: true
        customer_email:
          description: >-
            If provided, this value will be used when the Customer object is
            created.

            If not provided, customers will be asked to enter their email
            address.

            Use this parameter to prefill customer data if you already have an
            email

            on file. To access information about the customer once the payment
            flow is

            complete, use the `customer` attribute.
          maxLength: 5000
          nullable: true
          type: string
        expires_at:
          description: The timestamp at which the Checkout Session will expire.
          format: unix-time
          type: integer
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        invoice:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/invoice'
          description: 'ID of the invoice created by the Checkout Session, if it exists.'
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/invoice'
        invoice_creation:
          anyOf:
            - $ref: >-
                #/components/schemas/payment_pages_checkout_session_invoice_creation
          description: Details on the state of invoice creation for the Checkout Session.
          nullable: true
        line_items:
          description: The line items purchased by the customer.
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
          title: PaymentPagesCheckoutSessionListLineItems
          type: object
          x-expandableFields:
            - data
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        locale:
          description: >-
            The IETF language tag of the locale Checkout is displayed in. If
            blank or `auto`, the browser's locale is used.
          enum:
            - auto
            - bg
            - cs
            - da
            - de
            - el
            - en
            - en-GB
            - es
            - es-419
            - et
            - fi
            - fil
            - fr
            - fr-CA
            - hr
            - hu
            - id
            - it
            - ja
            - ko
            - lt
            - lv
            - ms
            - mt
            - nb
            - nl
            - pl
            - pt
            - pt-BR
            - ro
            - ru
            - sk
            - sl
            - sv
            - th
            - tr
            - vi
            - zh
            - zh-HK
            - zh-TW
          nullable: true
          type: string
          x-stripeBypassValidation: true
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
        mode:
          description: The mode of the Checkout Session.
          enum:
            - payment
            - setup
            - subscription
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - checkout.session
          type: string
        payment_intent:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/payment_intent'
          description: The ID of the PaymentIntent for Checkout Sessions in `payment` mode.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/payment_intent'
        payment_link:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/payment_link'
          description: The ID of the Payment Link that created this Session.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/payment_link'
        payment_method_collection:
          description: >-
            Configure whether a Checkout Session should collect a payment
            method.
          enum:
            - always
            - if_required
          nullable: true
          type: string
        payment_method_configuration_details:
          anyOf:
            - $ref: >-
                #/components/schemas/payment_method_config_biz_payment_method_configuration_details
          description: >-
            Information about the payment method configuration used for this
            Checkout session if using dynamic payment methods.
          nullable: true
        payment_method_options:
          anyOf:
            - $ref: '#/components/schemas/checkout_session_payment_method_options'
          description: >-
            Payment-method-specific configuration for the PaymentIntent or
            SetupIntent of this CheckoutSession.
          nullable: true
        payment_method_types:
          description: |-
            A list of the types of payment methods (e.g. card) this Checkout
            Session is allowed to accept.
          items:
            maxLength: 5000
            type: string
          type: array
        payment_status:
          description: >-
            The payment status of the Checkout Session, one of `paid`, `unpaid`,
            or `no_payment_required`.

            You can use this value to decide when to fulfill your customer's
            order.
          enum:
            - no_payment_required
            - paid
            - unpaid
          type: string
        phone_number_collection:
          $ref: >-
            #/components/schemas/payment_pages_checkout_session_phone_number_collection
        recovered_from:
          description: >-
            The ID of the original expired Checkout Session that triggered the
            recovery flow.
          maxLength: 5000
          nullable: true
          type: string
        redirect_on_completion:
          description: >-
            Applies to Checkout Sessions with `ui_mode: embedded`. By default,
            Stripe will always redirect to your return_url after a successful
            confirmation. If you set `redirect_on_completion: 'if_required'`,
            then we will only redirect if your user chooses a redirect-based
            payment method.
          enum:
            - always
            - if_required
            - never
          type: string
        return_url:
          description: >-
            Applies to Checkout Sessions with `ui_mode: embedded`. The URL to
            redirect your customer back to after they authenticate or cancel
            their payment on the payment method's app or site.
          maxLength: 5000
          type: string
        setup_intent:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/setup_intent'
          description: The ID of the SetupIntent for Checkout Sessions in `setup` mode.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/setup_intent'
        shipping_address_collection:
          anyOf:
            - $ref: >-
                #/components/schemas/payment_pages_checkout_session_shipping_address_collection
          description: >-
            When set, provides configuration for Checkout to collect a shipping
            address from a customer.
          nullable: true
        shipping_cost:
          anyOf:
            - $ref: >-
                #/components/schemas/payment_pages_checkout_session_shipping_cost
          description: >-
            The details of the customer cost of shipping, including the customer
            chosen ShippingRate.
          nullable: true
        shipping_details:
          anyOf:
            - $ref: '#/components/schemas/shipping'
          description: Shipping information for this Checkout Session.
          nullable: true
        shipping_options:
          description: The shipping rate options applied to this Session.
          items:
            $ref: >-
              #/components/schemas/payment_pages_checkout_session_shipping_option
          type: array
        status:
          description: >-
            The status of the Checkout Session, one of `open`, `complete`, or
            `expired`.
          enum:
            - complete
            - expired
            - open
          nullable: true
          type: string
        submit_type:
          description: >-
            Describes the type of transaction being performed by Checkout in
            order to customize

            relevant text on the page, such as the submit button. `submit_type`
            can only be

            specified on Checkout Sessions in `payment` mode, but not Checkout
            Sessions

            in `subscription` or `setup` mode. Possible values are `auto`,
            `pay`, `book`, `donate`. If blank or `auto`, `pay` is used.
          enum:
            - auto
            - book
            - donate
            - pay
          nullable: true
          type: string
        subscription:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/subscription'
          description: >-
            The ID of the subscription for Checkout Sessions in `subscription`
            mode.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/subscription'
        success_url:
          description: |-
            The URL the customer will be directed to after the payment or
            subscription creation is successful.
          maxLength: 5000
          nullable: true
          type: string
        tax_id_collection:
          $ref: >-
            #/components/schemas/payment_pages_checkout_session_tax_id_collection
        total_details:
          anyOf:
            - $ref: >-
                #/components/schemas/payment_pages_checkout_session_total_details
          description: Tax and discount details for the computed total amount.
          nullable: true
        ui_mode:
          description: The UI mode of the Session. Can be `hosted` (default) or `embedded`.
          enum:
            - embedded
            - hosted
          nullable: true
          type: string
          x-stripeBypassValidation: true
        url:
          description: >-
            The URL to the Checkout Session. Redirect customers to this URL to
            take them to Checkout. If you’re using [Custom
            Domains](https://stripe.com/docs/payments/checkout/custom-domains),
            the URL will use your subdomain. Otherwise, it’ll use
            `checkout.stripe.com.`

            This value is only present when the session is active.
          maxLength: 5000
          nullable: true
          type: string
      required:
        - automatic_tax
        - created
        - custom_fields
        - custom_text
        - expires_at
        - id
        - livemode
        - mode
        - object
        - payment_method_types
        - payment_status
        - shipping_options
      title: Session
      type: object
      x-expandableFields:
        - after_expiration
        - automatic_tax
        - consent
        - consent_collection
        - currency_conversion
        - custom_fields
        - custom_text
        - customer
        - customer_details
        - invoice
        - invoice_creation
        - line_items
        - payment_intent
        - payment_link
        - payment_method_configuration_details
        - payment_method_options
        - phone_number_collection
        - setup_intent
        - shipping_address_collection
        - shipping_cost
        - shipping_details
        - shipping_options
        - subscription
        - tax_id_collection
        - total_details
      x-resourceId: checkout.session
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
  - name: Checkout
    description: Needs a description.
  - name: Sessions
    description: Needs a description.
  - name: Expires
    description: Needs a description.
  - name: Line
    description: Needs a description.
  - name: Items
    description: Needs a description.
---