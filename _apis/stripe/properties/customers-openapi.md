---
openapi: 3.0.0
info:
  title: Stripe Customers API
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
  /v1/customers:
    get:
      description: >-
        <p>Returns a list of your customers. The customers are returned sorted
        by creation date, with the most recent customers appearing first.</p>
      operationId: GetCustomers
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
            A case-sensitive filter on the list based on the customer's `email`
            field. The value must be a string.
          in: query
          name: email
          required: false
          schema:
            maxLength: 512
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
            Provides a list of customers that are associated with the specified
            test clock. The response will not include customers with test clocks
            if this parameter is not set.
          in: query
          name: test_clock
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
                      $ref: '#/components/schemas/customer'
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
                    pattern: ^/v1/customers
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: CustomerResourceCustomerList
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
      summary: Retrieve Customers
      tags:
        - Customers
    post:
      description: <p>Creates a new customer object.</p>
      operationId: PostCustomers
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              address:
                explode: true
                style: deepObject
              cash_balance:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              invoice_settings:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              preferred_locales:
                explode: true
                style: deepObject
              shipping:
                explode: true
                style: deepObject
              tax:
                explode: true
                style: deepObject
              tax_id_data:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
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
                      title: optional_fields_address
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: The customer's address.
                balance:
                  description: >-
                    An integer amount in cents (or local equivalent) that
                    represents the customer's current balance, which affect the
                    customer's future invoices. A negative amount represents a
                    credit that decreases the amount due on an invoice; a
                    positive amount increases the amount due on an invoice.
                  type: integer
                cash_balance:
                  description: >-
                    Balance information and default balance settings for this
                    customer.
                  properties:
                    settings:
                      properties:
                        reconciliation_mode:
                          enum:
                            - automatic
                            - manual
                            - merchant_default
                          type: string
                      title: balance_settings_param
                      type: object
                  title: cash_balance_param
                  type: object
                coupon:
                  maxLength: 5000
                  type: string
                description:
                  description: >-
                    An arbitrary string that you can attach to a customer
                    object. It is displayed alongside the customer in the
                    dashboard.
                  maxLength: 5000
                  type: string
                email:
                  description: >-
                    Customer's email address. It's displayed alongside the
                    customer in your dashboard and can be useful for searching
                    and tracking. This may be up to *512 characters*.
                  maxLength: 512
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                invoice_prefix:
                  description: >-
                    The prefix for the customer used to generate unique invoice
                    numbers. Must be 3–12 uppercase letters or numbers.
                  maxLength: 5000
                  type: string
                invoice_settings:
                  description: Default invoice settings for this customer.
                  properties:
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
                    default_payment_method:
                      maxLength: 5000
                      type: string
                    footer:
                      maxLength: 5000
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
                  title: customer_param
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
                name:
                  description: The customer's full name or business name.
                  maxLength: 256
                  type: string
                next_invoice_sequence:
                  description: >-
                    The sequence to be used on the customer's next invoice.
                    Defaults to 1.
                  type: integer
                payment_method:
                  maxLength: 5000
                  type: string
                phone:
                  description: The customer's phone number.
                  maxLength: 20
                  type: string
                preferred_locales:
                  description: 'Customer''s preferred languages, ordered by preference.'
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                promotion_code:
                  description: >-
                    The API ID of a promotion code to apply to the customer. The
                    customer will have a discount applied on all recurring
                    payments. Charges you create through the API will not have
                    the discount.
                  maxLength: 5000
                  type: string
                shipping:
                  anyOf:
                    - properties:
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
                          title: optional_fields_address
                          type: object
                        name:
                          maxLength: 5000
                          type: string
                        phone:
                          maxLength: 5000
                          type: string
                      required:
                        - address
                        - name
                      title: customer_shipping
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    The customer's shipping information. Appears on invoices
                    emailed to this customer.
                source:
                  maxLength: 5000
                  type: string
                  x-stripeBypassValidation: true
                tax:
                  description: Tax details about the customer.
                  properties:
                    ip_address:
                      anyOf:
                        - type: string
                        - enum:
                            - ''
                          type: string
                    validate_location:
                      enum:
                        - deferred
                        - immediately
                      type: string
                  title: tax_param
                  type: object
                tax_exempt:
                  description: >-
                    The customer's tax exemption. One of `none`, `exempt`, or
                    `reverse`.
                  enum:
                    - ''
                    - exempt
                    - none
                    - reverse
                  type: string
                tax_id_data:
                  description: The customer's tax IDs.
                  items:
                    properties:
                      type:
                        enum:
                          - ad_nrt
                          - ae_trn
                          - ar_cuit
                          - au_abn
                          - au_arn
                          - bg_uic
                          - bo_tin
                          - br_cnpj
                          - br_cpf
                          - ca_bn
                          - ca_gst_hst
                          - ca_pst_bc
                          - ca_pst_mb
                          - ca_pst_sk
                          - ca_qst
                          - ch_vat
                          - cl_tin
                          - cn_tin
                          - co_nit
                          - cr_tin
                          - do_rcn
                          - ec_ruc
                          - eg_tin
                          - es_cif
                          - eu_oss_vat
                          - eu_vat
                          - gb_vat
                          - ge_vat
                          - hk_br
                          - hu_tin
                          - id_npwp
                          - il_vat
                          - in_gst
                          - is_vat
                          - jp_cn
                          - jp_rn
                          - jp_trn
                          - ke_pin
                          - kr_brn
                          - li_uid
                          - mx_rfc
                          - my_frp
                          - my_itn
                          - my_sst
                          - no_vat
                          - nz_gst
                          - pe_ruc
                          - ph_tin
                          - ro_tin
                          - rs_pib
                          - ru_inn
                          - ru_kpp
                          - sa_vat
                          - sg_gst
                          - sg_uen
                          - si_tin
                          - sv_nit
                          - th_vat
                          - tr_tin
                          - tw_vat
                          - ua_vat
                          - us_ein
                          - uy_ruc
                          - ve_rif
                          - vn_tin
                          - za_vat
                        maxLength: 5000
                        type: string
                        x-stripeBypassValidation: true
                      value:
                        type: string
                    required:
                      - type
                      - value
                    title: data_params
                    type: object
                  type: array
                test_clock:
                  description: ID of the test clock to attach to the customer.
                  maxLength: 5000
                  type: string
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/customer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Customer
      tags:
        - Customers
  /v1/customers/search:
    get:
      description: >-
        <p>Search for customers you’ve previously created using Stripe’s <a
        href="/docs/search#search-query-language">Search Query Language</a>.

        Don’t use search in read-after-write flows where strict consistency is
        necessary. Under normal operating

        conditions, data is searchable in less than a minute. Occasionally,
        propagation of new or updated data can be up

        to an hour behind during outages. Search functionality is not available
        to merchants in India.</p>
      operationId: GetCustomersSearch
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
            A cursor for pagination across multiple pages of results. Don't
            include this parameter on the first call. Use the next_page value
            returned in a previous response to request subsequent results.
          in: query
          name: page
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            The search query string. See [search query
            language](https://stripe.com/docs/search#search-query-language) and
            the list of supported [query fields for
            customers](https://stripe.com/docs/search#query-fields-for-customers).
          in: query
          name: query
          required: true
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
                      $ref: '#/components/schemas/customer'
                    type: array
                  has_more:
                    type: boolean
                  next_page:
                    maxLength: 5000
                    nullable: true
                    type: string
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value.
                    enum:
                      - search_result
                    type: string
                  total_count:
                    description: >-
                      The total number of objects that match the query, only
                      accurate up to 10,000.
                    type: integer
                  url:
                    maxLength: 5000
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: SearchResult
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
      summary: Search Customers
      tags:
        - Search
        - Customers
  '/v1/customers/{customer}':
    delete:
      description: >-
        <p>Permanently deletes a customer. It cannot be undone. Also immediately
        cancels any active subscriptions on the customer.</p>
      operationId: DeleteCustomersCustomer
      parameters:
        - in: path
          name: customer
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
                $ref: '#/components/schemas/deleted_customer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Customer
      tags:
        - Customers
    get:
      description: <p>Retrieves a Customer object.</p>
      operationId: GetCustomersCustomer
      parameters:
        - in: path
          name: customer
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
                anyOf:
                  - $ref: '#/components/schemas/customer'
                  - $ref: '#/components/schemas/deleted_customer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Customer
      tags:
        - Customers
    post:
      description: >-
        <p>Updates the specified customer by setting the values of the
        parameters passed. Any parameters not provided will be left unchanged.
        For example, if you pass the <strong>source</strong> parameter, that
        becomes the customer’s active source (e.g., a card) to be used for all
        charges in the future. When you update a customer to a new valid card
        source by passing the <strong>source</strong> parameter: for each of the
        customer’s current subscriptions, if the subscription bills
        automatically and is in the <code>past_due</code> state, then the latest
        open invoice for the subscription with automatic collection enabled will
        be retried. This retry will not count as an automatic retry, and will
        not affect the next regularly scheduled payment for the invoice.
        Changing the <strong>default_source</strong> for a customer will not
        trigger this behavior.</p>


        <p>This request accepts mostly the same arguments as the customer
        creation call.</p>
      operationId: PostCustomersCustomer
      parameters:
        - in: path
          name: customer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              address:
                explode: true
                style: deepObject
              bank_account:
                explode: true
                style: deepObject
              card:
                explode: true
                style: deepObject
              cash_balance:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              invoice_settings:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              preferred_locales:
                explode: true
                style: deepObject
              shipping:
                explode: true
                style: deepObject
              tax:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
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
                      title: optional_fields_address
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: The customer's address.
                balance:
                  description: >-
                    An integer amount in cents (or local equivalent) that
                    represents the customer's current balance, which affect the
                    customer's future invoices. A negative amount represents a
                    credit that decreases the amount due on an invoice; a
                    positive amount increases the amount due on an invoice.
                  type: integer
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
                        country:
                          maxLength: 5000
                          type: string
                        currency:
                          type: string
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
                      title: customer_payment_source_bank_account
                      type: object
                    - maxLength: 5000
                      type: string
                  description: >-
                    Either a token, like the ones returned by
                    [Stripe.js](https://stripe.com/docs/js), or a dictionary
                    containing a user's bank account details.
                card:
                  anyOf:
                    - properties:
                        address_city:
                          maxLength: 5000
                          type: string
                        address_country:
                          maxLength: 5000
                          type: string
                        address_line1:
                          maxLength: 5000
                          type: string
                        address_line2:
                          maxLength: 5000
                          type: string
                        address_state:
                          maxLength: 5000
                          type: string
                        address_zip:
                          maxLength: 5000
                          type: string
                        cvc:
                          maxLength: 5000
                          type: string
                        exp_month:
                          type: integer
                        exp_year:
                          type: integer
                        metadata:
                          additionalProperties:
                            type: string
                          type: object
                        name:
                          maxLength: 5000
                          type: string
                        number:
                          maxLength: 5000
                          type: string
                        object:
                          enum:
                            - card
                          maxLength: 5000
                          type: string
                      required:
                        - exp_month
                        - exp_year
                        - number
                      title: customer_payment_source_card
                      type: object
                    - maxLength: 5000
                      type: string
                  description: >-
                    A token, like the ones returned by
                    [Stripe.js](https://stripe.com/docs/js).
                  x-stripeBypassValidation: true
                cash_balance:
                  description: >-
                    Balance information and default balance settings for this
                    customer.
                  properties:
                    settings:
                      properties:
                        reconciliation_mode:
                          enum:
                            - automatic
                            - manual
                            - merchant_default
                          type: string
                      title: balance_settings_param
                      type: object
                  title: cash_balance_param
                  type: object
                coupon:
                  maxLength: 5000
                  type: string
                default_alipay_account:
                  description: >-
                    ID of Alipay account to make the customer's new default for
                    invoice payments.
                  maxLength: 500
                  type: string
                default_bank_account:
                  description: >-
                    ID of bank account to make the customer's new default for
                    invoice payments.
                  maxLength: 500
                  type: string
                default_card:
                  description: >-
                    ID of card to make the customer's new default for invoice
                    payments.
                  maxLength: 500
                  type: string
                default_source:
                  description: >-
                    If you are using payment methods created via the
                    PaymentMethods API, see the
                    [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method)
                    parameter.


                    Provide the ID of a payment source already attached to this
                    customer to make it this customer's default payment source.


                    If you want to add a new payment source and make it the
                    default, see the
                    [source](https://stripe.com/docs/api/customers/update#update_customer-source)
                    property.
                  maxLength: 500
                  type: string
                description:
                  description: >-
                    An arbitrary string that you can attach to a customer
                    object. It is displayed alongside the customer in the
                    dashboard.
                  maxLength: 5000
                  type: string
                email:
                  description: >-
                    Customer's email address. It's displayed alongside the
                    customer in your dashboard and can be useful for searching
                    and tracking. This may be up to *512 characters*.
                  maxLength: 512
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                invoice_prefix:
                  description: >-
                    The prefix for the customer used to generate unique invoice
                    numbers. Must be 3–12 uppercase letters or numbers.
                  maxLength: 5000
                  type: string
                invoice_settings:
                  description: Default invoice settings for this customer.
                  properties:
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
                    default_payment_method:
                      maxLength: 5000
                      type: string
                    footer:
                      maxLength: 5000
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
                  title: customer_param
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
                name:
                  description: The customer's full name or business name.
                  maxLength: 256
                  type: string
                next_invoice_sequence:
                  description: >-
                    The sequence to be used on the customer's next invoice.
                    Defaults to 1.
                  type: integer
                phone:
                  description: The customer's phone number.
                  maxLength: 20
                  type: string
                preferred_locales:
                  description: 'Customer''s preferred languages, ordered by preference.'
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                promotion_code:
                  description: >-
                    The API ID of a promotion code to apply to the customer. The
                    customer will have a discount applied on all recurring
                    payments. Charges you create through the API will not have
                    the discount.
                  maxLength: 5000
                  type: string
                shipping:
                  anyOf:
                    - properties:
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
                          title: optional_fields_address
                          type: object
                        name:
                          maxLength: 5000
                          type: string
                        phone:
                          maxLength: 5000
                          type: string
                      required:
                        - address
                        - name
                      title: customer_shipping
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    The customer's shipping information. Appears on invoices
                    emailed to this customer.
                source:
                  maxLength: 5000
                  type: string
                  x-stripeBypassValidation: true
                tax:
                  description: Tax details about the customer.
                  properties:
                    ip_address:
                      anyOf:
                        - type: string
                        - enum:
                            - ''
                          type: string
                    validate_location:
                      enum:
                        - deferred
                        - immediately
                      type: string
                  title: tax_param
                  type: object
                tax_exempt:
                  description: >-
                    The customer's tax exemption. One of `none`, `exempt`, or
                    `reverse`.
                  enum:
                    - ''
                    - exempt
                    - none
                    - reverse
                  type: string
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/customer'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Customer
      tags:
        - Customers
  '/v1/customers/{customer}/balance_transactions':
    get:
      description: >-
        <p>Returns a list of transactions that updated the customer’s <a
        href="/docs/billing/customer/balance">balances</a>.</p>
      operationId: GetCustomersCustomerBalanceTransactions
      parameters:
        - in: path
          name: customer
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
                      $ref: '#/components/schemas/customer_balance_transaction'
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
                title: CustomerBalanceTransactionList
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
      summary: Retrieve Customer Transactions
      tags:
        - Customers
        - Transactions
    post:
      description: >-
        <p>Creates an immutable transaction that updates the customer’s credit
        <a href="/docs/billing/customer/balance">balance</a>.</p>
      operationId: PostCustomersCustomerBalanceTransactions
      parameters:
        - in: path
          name: customer
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
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: >-
                    The integer amount in **cents (or local equivalent)** to
                    apply to the customer's credit balance.
                  type: integer
                currency:
                  description: >-
                    Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies). Specifies the
                    [`invoice_credit_balance`](https://stripe.com/docs/api/customers/object#customer_object-invoice_credit_balance)
                    that this transaction will apply to. If the customer's
                    `currency` is not set, it will be updated to this value.
                  type: string
                description:
                  description: >-
                    An arbitrary string attached to the object. Often useful for
                    displaying to users.
                  maxLength: 350
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
              required:
                - amount
                - currency
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/customer_balance_transaction'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Customer Transaction
      tags:
        - Customers
        - Transactions
  '/v1/customers/{customer}/balance_transactions/{transaction}':
    get:
      description: >-
        <p>Retrieves a specific customer balance transaction that updated the
        customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>
      operationId: GetCustomersCustomerBalanceTransactionsTransaction
      parameters:
        - in: path
          name: customer
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
          name: transaction
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
                $ref: '#/components/schemas/customer_balance_transaction'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Customer Transaction
      tags:
        - Customers
        - Transactions
    post:
      description: >-
        <p>Most credit balance transaction fields are immutable, but you may
        update its <code>description</code> and <code>metadata</code>.</p>
      operationId: PostCustomersCustomerBalanceTransactionsTransaction
      parameters:
        - in: path
          name: customer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: transaction
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
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                description:
                  description: >-
                    An arbitrary string attached to the object. Often useful for
                    displaying to users.
                  maxLength: 350
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
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/customer_balance_transaction'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Customer Transaction
      tags:
        - Customers
        - Transactions
  '/v1/customers/{customer}/bank_accounts':
    get:
      deprecated: true
      description: >-
        <p>You can see a list of the bank accounts belonging to a Customer. Note
        that the 10 most recent sources are always available by default on the
        Customer. If you need more than those 10, you can use this API method
        and the <code>limit</code> and <code>starting_after</code> parameters to
        page through additional bank accounts.</p>
      operationId: GetCustomersCustomerBankAccounts
      parameters:
        - in: path
          name: customer
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
                    description: Details about each object.
                    items:
                      $ref: '#/components/schemas/bank_account'
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
                title: BankAccountList
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
      summary: Retrieve Customer Bank Accounts
      tags:
        - Customers
        - Bank
        - Accounts
    post:
      description: >-
        <p>When you create a new credit card, you must specify a customer or
        recipient on which to create it.</p>


        <p>If the card’s owner has no default card, then the new card will
        become the default.

        However, if the owner already has a default, then it will not change.

        To change the default, you should <a
        href="/docs/api#update_customer">update the customer</a> to have a new
        <code>default_source</code>.</p>
      operationId: PostCustomersCustomerBankAccounts
      parameters:
        - in: path
          name: customer
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
              card:
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
                alipay_account:
                  description: >-
                    A token returned by [Stripe.js](https://stripe.com/docs/js)
                    representing the user’s Alipay account details.
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
                        country:
                          maxLength: 5000
                          type: string
                        currency:
                          type: string
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
                      title: customer_payment_source_bank_account
                      type: object
                    - maxLength: 5000
                      type: string
                  description: >-
                    Either a token, like the ones returned by
                    [Stripe.js](https://stripe.com/docs/js), or a dictionary
                    containing a user's bank account details.
                card:
                  anyOf:
                    - properties:
                        address_city:
                          maxLength: 5000
                          type: string
                        address_country:
                          maxLength: 5000
                          type: string
                        address_line1:
                          maxLength: 5000
                          type: string
                        address_line2:
                          maxLength: 5000
                          type: string
                        address_state:
                          maxLength: 5000
                          type: string
                        address_zip:
                          maxLength: 5000
                          type: string
                        cvc:
                          maxLength: 5000
                          type: string
                        exp_month:
                          type: integer
                        exp_year:
                          type: integer
                        metadata:
                          additionalProperties:
                            type: string
                          type: object
                        name:
                          maxLength: 5000
                          type: string
                        number:
                          maxLength: 5000
                          type: string
                        object:
                          enum:
                            - card
                          maxLength: 5000
                          type: string
                      required:
                        - exp_month
                        - exp_year
                        - number
                      title: customer_payment_source_card
                      type: object
                    - maxLength: 5000
                      type: string
                  description: >-
                    A token, like the ones returned by
                    [Stripe.js](https://stripe.com/docs/js).
                  x-stripeBypassValidation: true
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
                source:
                  description: >-
                    Please refer to full
                    [documentation](https://stripe.com/docs/api) instead.
                  maxLength: 5000
                  type: string
                  x-stripeBypassValidation: true
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_source'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Customer Bank Account
      tags:
        - Customers
        - Banks
        - Accounts
  '/v1/customers/{customer}/bank_accounts/{id}':
    delete:
      description: <p>Delete a specified source for a given customer.</p>
      operationId: DeleteCustomersCustomerBankAccountsId
      parameters:
        - in: path
          name: customer
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
                anyOf:
                  - $ref: '#/components/schemas/payment_source'
                  - $ref: '#/components/schemas/deleted_payment_source'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Customer Bank Account
      tags:
        - Customers
        - Banks
        - Accounts
    get:
      deprecated: true
      description: >-
        <p>By default, you can see the 10 most recent sources stored on a
        Customer directly on the object, but you can also retrieve details about
        a specific bank account stored on the Stripe account.</p>
      operationId: GetCustomersCustomerBankAccountsId
      parameters:
        - in: path
          name: customer
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
                $ref: '#/components/schemas/bank_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Customer Bank Account
      tags:
        - Customers
        - Banks
        - Accounts
    post:
      description: <p>Update a specified source for a given customer.</p>
      operationId: PostCustomersCustomerBankAccountsId
      parameters:
        - in: path
          name: customer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
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
              metadata:
                explode: true
                style: deepObject
              owner:
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
                    - company
                    - individual
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
                owner:
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
                      title: source_address
                      type: object
                    email:
                      type: string
                    name:
                      maxLength: 5000
                      type: string
                    phone:
                      maxLength: 5000
                      type: string
                  title: owner
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                anyOf:
                  - $ref: '#/components/schemas/card'
                  - $ref: '#/components/schemas/bank_account'
                  - $ref: '#/components/schemas/source'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Customer Bank Account
      tags:
        - Customers
        - Banks
        - Accounts
  '/v1/customers/{customer}/bank_accounts/{id}/verify':
    post:
      description: <p>Verify a specified bank account for a given customer.</p>
      operationId: PostCustomersCustomerBankAccountsIdVerify
      parameters:
        - in: path
          name: customer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
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
                $ref: '#/components/schemas/bank_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Verify Customer Bank Account
      tags:
        - Customers
        - Banks
        - Accounts
        - Verify
  '/v1/customers/{customer}/cards':
    get:
      deprecated: true
      description: >-
        <p>You can see a list of the cards belonging to a customer.

        Note that the 10 most recent sources are always available on the
        <code>Customer</code> object.

        If you need more than those 10, you can use this API method and the
        <code>limit</code> and <code>starting_after</code> parameters to page
        through additional cards.</p>
      operationId: GetCustomersCustomerCards
      parameters:
        - in: path
          name: customer
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
                      $ref: '#/components/schemas/card'
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
                title: CardList
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
      summary: Retrieve Customer Cards
      tags:
        - Customers
        - Cards
    post:
      description: >-
        <p>When you create a new credit card, you must specify a customer or
        recipient on which to create it.</p>


        <p>If the card’s owner has no default card, then the new card will
        become the default.

        However, if the owner already has a default, then it will not change.

        To change the default, you should <a
        href="/docs/api#update_customer">update the customer</a> to have a new
        <code>default_source</code>.</p>
      operationId: PostCustomersCustomerCards
      parameters:
        - in: path
          name: customer
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
              card:
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
                alipay_account:
                  description: >-
                    A token returned by [Stripe.js](https://stripe.com/docs/js)
                    representing the user’s Alipay account details.
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
                        country:
                          maxLength: 5000
                          type: string
                        currency:
                          type: string
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
                      title: customer_payment_source_bank_account
                      type: object
                    - maxLength: 5000
                      type: string
                  description: >-
                    Either a token, like the ones returned by
                    [Stripe.js](https://stripe.com/docs/js), or a dictionary
                    containing a user's bank account details.
                card:
                  anyOf:
                    - properties:
                        address_city:
                          maxLength: 5000
                          type: string
                        address_country:
                          maxLength: 5000
                          type: string
                        address_line1:
                          maxLength: 5000
                          type: string
                        address_line2:
                          maxLength: 5000
                          type: string
                        address_state:
                          maxLength: 5000
                          type: string
                        address_zip:
                          maxLength: 5000
                          type: string
                        cvc:
                          maxLength: 5000
                          type: string
                        exp_month:
                          type: integer
                        exp_year:
                          type: integer
                        metadata:
                          additionalProperties:
                            type: string
                          type: object
                        name:
                          maxLength: 5000
                          type: string
                        number:
                          maxLength: 5000
                          type: string
                        object:
                          enum:
                            - card
                          maxLength: 5000
                          type: string
                      required:
                        - exp_month
                        - exp_year
                        - number
                      title: customer_payment_source_card
                      type: object
                    - maxLength: 5000
                      type: string
                  description: >-
                    A token, like the ones returned by
                    [Stripe.js](https://stripe.com/docs/js).
                  x-stripeBypassValidation: true
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
                source:
                  description: >-
                    Please refer to full
                    [documentation](https://stripe.com/docs/api) instead.
                  maxLength: 5000
                  type: string
                  x-stripeBypassValidation: true
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_source'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Customer Card
      tags:
        - Customers
        - Cards
  '/v1/customers/{customer}/cards/{id}':
    delete:
      description: <p>Delete a specified source for a given customer.</p>
      operationId: DeleteCustomersCustomerCardsId
      parameters:
        - in: path
          name: customer
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
                anyOf:
                  - $ref: '#/components/schemas/payment_source'
                  - $ref: '#/components/schemas/deleted_payment_source'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Customer Card
      tags:
        - Customers
        - Cards
    get:
      deprecated: true
      description: >-
        <p>You can always see the 10 most recent cards directly on a customer;
        this method lets you retrieve details about a specific card stored on
        the customer.</p>
      operationId: GetCustomersCustomerCardsId
      parameters:
        - in: path
          name: customer
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
                $ref: '#/components/schemas/card'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Customer Card
      tags:
        - Customers
        - Cards
    post:
      description: <p>Update a specified source for a given customer.</p>
      operationId: PostCustomersCustomerCardsId
      parameters:
        - in: path
          name: customer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
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
              metadata:
                explode: true
                style: deepObject
              owner:
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
                    - company
                    - individual
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
                owner:
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
                      title: source_address
                      type: object
                    email:
                      type: string
                    name:
                      maxLength: 5000
                      type: string
                    phone:
                      maxLength: 5000
                      type: string
                  title: owner
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                anyOf:
                  - $ref: '#/components/schemas/card'
                  - $ref: '#/components/schemas/bank_account'
                  - $ref: '#/components/schemas/source'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Customer Card
      tags:
        - Customers
        - Cards
  '/v1/customers/{customer}/cash_balance':
    get:
      description: <p>Retrieves a customer’s cash balance.</p>
      operationId: GetCustomersCustomerCashBalance
      parameters:
        - in: path
          name: customer
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
                $ref: '#/components/schemas/cash_balance'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Customer Cash Balance
      tags:
        - Customers
        - Cash
        - Balances
    post:
      description: <p>Changes the settings on a customer’s cash balance.</p>
      operationId: PostCustomersCustomerCashBalance
      parameters:
        - in: path
          name: customer
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
              settings:
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
                settings:
                  description: A hash of settings for this cash balance.
                  properties:
                    reconciliation_mode:
                      enum:
                        - automatic
                        - manual
                        - merchant_default
                      type: string
                  title: balance_settings_param
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/cash_balance'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Customer Cash Balance
      tags:
        - Customers
        - Cash
        - Balances
  '/v1/customers/{customer}/cash_balance_transactions':
    get:
      description: >-
        <p>Returns a list of transactions that modified the customer’s <a
        href="/docs/payments/customer-balance">cash balance</a>.</p>
      operationId: GetCustomersCustomerCashBalanceTransactions
      parameters:
        - in: path
          name: customer
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
                description: >-
                  Customers with certain payments enabled have a cash balance,
                  representing funds that were paid

                  by the customer to a merchant, but have not yet been allocated
                  to a payment. Cash Balance Transactions

                  represent when funds are moved into or out of this balance.
                  This includes funding by the customer, allocation

                  to payments, and refunds to the customer.
                properties:
                  data:
                    description: Details about each object.
                    items:
                      $ref: '#/components/schemas/customer_cash_balance_transaction'
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
                title: CustomerCashBalanceTransactionList
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
      summary: Retrieve Customer Cash Balance Transactions
      tags:
        - Customers
        - Cash
        - Balances
        - Transactions
  '/v1/customers/{customer}/cash_balance_transactions/{transaction}':
    get:
      description: >-
        <p>Retrieves a specific cash balance transaction, which updated the
        customer’s <a href="/docs/payments/customer-balance">cash
        balance</a>.</p>
      operationId: GetCustomersCustomerCashBalanceTransactionsTransaction
      parameters:
        - in: path
          name: customer
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
          name: transaction
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
                $ref: '#/components/schemas/customer_cash_balance_transaction'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Customer Cash Balance Transaction
      tags:
        - Customers
        - Cash
        - Balances
        - Transactions
  '/v1/customers/{customer}/discount':
    delete:
      description: <p>Removes the currently applied discount on a customer.</p>
      operationId: DeleteCustomersCustomerDiscount
      parameters:
        - in: path
          name: customer
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
                $ref: '#/components/schemas/deleted_discount'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Customer Discount
      tags:
        - Customers
        - Discounts
    get:
      description: ''
      operationId: GetCustomersCustomerDiscount
      parameters:
        - in: path
          name: customer
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
                $ref: '#/components/schemas/discount'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Customer Discount
      tags:
        - Customers
        - Discounts
  '/v1/customers/{customer}/funding_instructions':
    post:
      description: >-
        <p>Retrieve funding instructions for a customer cash balance. If funding
        instructions do not yet exist for the customer, new

        funding instructions will be created. If funding instructions have
        already been created for a given customer, the same

        funding instructions will be retrieved. In other words, we will return
        the same funding instructions each time.</p>
      operationId: PostCustomersCustomerFundingInstructions
      parameters:
        - in: path
          name: customer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              bank_transfer:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                bank_transfer:
                  description: Additional parameters for `bank_transfer` funding types
                  properties:
                    eu_bank_transfer:
                      properties:
                        country:
                          maxLength: 5000
                          type: string
                      required:
                        - country
                      title: eu_bank_account_params
                      type: object
                    requested_address_types:
                      items:
                        enum:
                          - iban
                          - sort_code
                          - spei
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
                  title: bank_transfer_params
                  type: object
                currency:
                  description: >-
                    Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies).
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                funding_type:
                  description: The `funding_type` to get the instructions for.
                  enum:
                    - bank_transfer
                  type: string
              required:
                - bank_transfer
                - currency
                - funding_type
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/funding_instructions'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Customer Funding Instructions
      tags:
        - Customers
        - Funding
        - Instructions
  '/v1/customers/{customer}/payment_methods':
    get:
      description: <p>Returns a list of PaymentMethods for a given Customer</p>
      operationId: GetCustomersCustomerPaymentMethods
      parameters:
        - in: path
          name: customer
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
        - description: >-
            An optional filter on the list, based on the object `type` field.
            Without the filter, the list includes all current and future payment
            method types. If your integration expects only one type of payment
            method in the response, make sure to provide a type value in the
            request.
          in: query
          name: type
          required: false
          schema:
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
                      $ref: '#/components/schemas/payment_method'
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
                title: CustomerPaymentMethodResourceList
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
      summary: Retrieve Customer Payment Methods
      tags:
        - Customers
        - Payments
        - Methods
  '/v1/customers/{customer}/payment_methods/{payment_method}':
    get:
      description: <p>Retrieves a PaymentMethod object for a given Customer.</p>
      operationId: GetCustomersCustomerPaymentMethodsPaymentMethod
      parameters:
        - in: path
          name: customer
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
          name: payment_method
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
                $ref: '#/components/schemas/payment_method'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Customer Payment Method
      tags:
        - Customers
        - Payments
        - Methods
  '/v1/customers/{customer}/sources':
    get:
      description: <p>List sources for a specified customer.</p>
      operationId: GetCustomersCustomerSources
      parameters:
        - in: path
          name: customer
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
        - description: Filter sources according to a particular object type.
          in: query
          name: object
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
                      anyOf:
                        - $ref: '#/components/schemas/bank_account'
                        - $ref: '#/components/schemas/card'
                        - $ref: '#/components/schemas/source'
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
                title: ApmsSourcesSourceList
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
      summary: Retrieve Customer Sources
      tags:
        - Customers
        - Sources
    post:
      description: >-
        <p>When you create a new credit card, you must specify a customer or
        recipient on which to create it.</p>


        <p>If the card’s owner has no default card, then the new card will
        become the default.

        However, if the owner already has a default, then it will not change.

        To change the default, you should <a
        href="/docs/api#update_customer">update the customer</a> to have a new
        <code>default_source</code>.</p>
      operationId: PostCustomersCustomerSources
      parameters:
        - in: path
          name: customer
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
              card:
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
                alipay_account:
                  description: >-
                    A token returned by [Stripe.js](https://stripe.com/docs/js)
                    representing the user’s Alipay account details.
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
                        country:
                          maxLength: 5000
                          type: string
                        currency:
                          type: string
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
                      title: customer_payment_source_bank_account
                      type: object
                    - maxLength: 5000
                      type: string
                  description: >-
                    Either a token, like the ones returned by
                    [Stripe.js](https://stripe.com/docs/js), or a dictionary
                    containing a user's bank account details.
                card:
                  anyOf:
                    - properties:
                        address_city:
                          maxLength: 5000
                          type: string
                        address_country:
                          maxLength: 5000
                          type: string
                        address_line1:
                          maxLength: 5000
                          type: string
                        address_line2:
                          maxLength: 5000
                          type: string
                        address_state:
                          maxLength: 5000
                          type: string
                        address_zip:
                          maxLength: 5000
                          type: string
                        cvc:
                          maxLength: 5000
                          type: string
                        exp_month:
                          type: integer
                        exp_year:
                          type: integer
                        metadata:
                          additionalProperties:
                            type: string
                          type: object
                        name:
                          maxLength: 5000
                          type: string
                        number:
                          maxLength: 5000
                          type: string
                        object:
                          enum:
                            - card
                          maxLength: 5000
                          type: string
                      required:
                        - exp_month
                        - exp_year
                        - number
                      title: customer_payment_source_card
                      type: object
                    - maxLength: 5000
                      type: string
                  description: >-
                    A token, like the ones returned by
                    [Stripe.js](https://stripe.com/docs/js).
                  x-stripeBypassValidation: true
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
                source:
                  description: >-
                    Please refer to full
                    [documentation](https://stripe.com/docs/api) instead.
                  maxLength: 5000
                  type: string
                  x-stripeBypassValidation: true
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_source'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Customer Sources
      tags:
        - Customers
        - Sources
  '/v1/customers/{customer}/sources/{id}':
    delete:
      description: <p>Delete a specified source for a given customer.</p>
      operationId: DeleteCustomersCustomerSourcesId
      parameters:
        - in: path
          name: customer
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
                anyOf:
                  - $ref: '#/components/schemas/payment_source'
                  - $ref: '#/components/schemas/deleted_payment_source'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Customer Source
      tags:
        - Customers
        - Sources
    get:
      description: <p>Retrieve a specified source for a given customer.</p>
      operationId: GetCustomersCustomerSourcesId
      parameters:
        - in: path
          name: customer
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
            maxLength: 500
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
                $ref: '#/components/schemas/payment_source'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Customer Source
      tags:
        - Customers
        - Sources
    post:
      description: <p>Update a specified source for a given customer.</p>
      operationId: PostCustomersCustomerSourcesId
      parameters:
        - in: path
          name: customer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
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
              metadata:
                explode: true
                style: deepObject
              owner:
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
                    - company
                    - individual
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
                owner:
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
                      title: source_address
                      type: object
                    email:
                      type: string
                    name:
                      maxLength: 5000
                      type: string
                    phone:
                      maxLength: 5000
                      type: string
                  title: owner
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                anyOf:
                  - $ref: '#/components/schemas/card'
                  - $ref: '#/components/schemas/bank_account'
                  - $ref: '#/components/schemas/source'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Customer Source
      tags:
        - Customers
        - Sources
  '/v1/customers/{customer}/sources/{id}/verify':
    post:
      description: <p>Verify a specified bank account for a given customer.</p>
      operationId: PostCustomersCustomerSourcesIdVerify
      parameters:
        - in: path
          name: customer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
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
                $ref: '#/components/schemas/bank_account'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Verify Customer Source
      tags:
        - Customers
        - Sources
        - Verify
  '/v1/customers/{customer}/subscriptions':
    get:
      description: >-
        <p>You can see a list of the customer’s active subscriptions. Note that
        the 10 most recent active subscriptions are always available by default
        on the customer object. If you need more than those 10, you can use the
        limit and starting_after parameters to page through additional
        subscriptions.</p>
      operationId: GetCustomersCustomerSubscriptions
      parameters:
        - in: path
          name: customer
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
                      $ref: '#/components/schemas/subscription'
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
                title: SubscriptionList
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
      summary: Retrieve Customer Subscriptions
      tags:
        - Customers
        - Subscriptions
    post:
      description: <p>Creates a new subscription on an existing customer.</p>
      operationId: PostCustomersCustomerSubscriptions
      parameters:
        - in: path
          name: customer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              add_invoice_items:
                explode: true
                style: deepObject
              automatic_tax:
                explode: true
                style: deepObject
              billing_thresholds:
                explode: true
                style: deepObject
              default_tax_rates:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              items:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              payment_settings:
                explode: true
                style: deepObject
              pending_invoice_item_interval:
                explode: true
                style: deepObject
              transfer_data:
                explode: true
                style: deepObject
              trial_end:
                explode: true
                style: deepObject
              trial_settings:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                add_invoice_items:
                  description: >-
                    A list of prices and quantities that will generate invoice
                    items appended to the next invoice for this subscription.
                    You may pass up to 20 items.
                  items:
                    properties:
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
                          - product
                        title: one_time_price_data_with_negative_amounts
                        type: object
                      quantity:
                        type: integer
                      tax_rates:
                        anyOf:
                          - items:
                              maxLength: 5000
                              type: string
                            type: array
                          - enum:
                              - ''
                            type: string
                    title: add_invoice_item_entry
                    type: object
                  type: array
                application_fee_percent:
                  description: >-
                    A non-negative decimal between 0 and 100, with at most two
                    decimal places. This represents the percentage of the
                    subscription invoice total that will be transferred to the
                    application owner's Stripe account. The request must be made
                    by a platform account on a connected account in order to set
                    an application fee percentage. For more information, see the
                    application fees
                    [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
                  type: number
                automatic_tax:
                  description: >-
                    Automatic tax settings for this subscription. We recommend
                    you only include this parameter when the existing value is
                    being changed.
                  properties:
                    enabled:
                      type: boolean
                  required:
                    - enabled
                  title: automatic_tax_config
                  type: object
                backdate_start_date:
                  description: >-
                    For new subscriptions, a past timestamp to backdate the
                    subscription's start date to. If set, the first invoice will
                    contain a proration for the timespan between the start date
                    and the current time. Can be combined with trials and the
                    billing cycle anchor.
                  format: unix-time
                  type: integer
                billing_cycle_anchor:
                  description: >-
                    A future timestamp to anchor the subscription's [billing
                    cycle](https://stripe.com/docs/subscriptions/billing-cycle).
                    This is used to determine the date of the first full
                    invoice, and, for plans with `month` or `year` intervals,
                    the day of the month for subsequent invoices. The timestamp
                    is in UTC format.
                  format: unix-time
                  type: integer
                  x-stripeBypassValidation: true
                billing_thresholds:
                  anyOf:
                    - properties:
                        amount_gte:
                          type: integer
                        reset_billing_cycle_anchor:
                          type: boolean
                      title: billing_thresholds_param
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Define thresholds at which an invoice will be sent, and the
                    subscription advanced to a new billing period. Pass an empty
                    string to remove previously-defined thresholds.
                cancel_at:
                  description: >-
                    A timestamp at which the subscription should cancel. If set
                    to a date before the current period ends, this will cause a
                    proration if prorations have been enabled using
                    `proration_behavior`. If set during a future period, this
                    will always cause a proration for that period.
                  format: unix-time
                  type: integer
                cancel_at_period_end:
                  description: >-
                    Boolean indicating whether this subscription should cancel
                    at the end of the current period.
                  type: boolean
                collection_method:
                  description: >-
                    Either `charge_automatically`, or `send_invoice`. When
                    charging automatically, Stripe will attempt to pay this
                    subscription at the end of the cycle using the default
                    source attached to the customer. When sending an invoice,
                    Stripe will email your customer an invoice with payment
                    instructions and mark the subscription as `active`. Defaults
                    to `charge_automatically`.
                  enum:
                    - charge_automatically
                    - send_invoice
                  type: string
                coupon:
                  description: >-
                    The ID of the coupon to apply to this subscription. A coupon
                    applied to a subscription will only affect invoices created
                    for that particular subscription.
                  maxLength: 5000
                  type: string
                currency:
                  description: >-
                    Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies).
                  type: string
                days_until_due:
                  description: >-
                    Number of days a customer has to pay invoices generated by
                    this subscription. Valid only for subscriptions where
                    `collection_method` is set to `send_invoice`.
                  type: integer
                default_payment_method:
                  description: >-
                    ID of the default payment method for the subscription. It
                    must belong to the customer associated with the
                    subscription. This takes precedence over `default_source`.
                    If neither are set, invoices will use the customer's
                    [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method)
                    or
                    [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
                  maxLength: 5000
                  type: string
                default_source:
                  description: >-
                    ID of the default payment source for the subscription. It
                    must belong to the customer associated with the subscription
                    and be in a chargeable state. If `default_payment_method` is
                    also set, `default_payment_method` will take precedence. If
                    neither are set, invoices will use the customer's
                    [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method)
                    or
                    [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
                  maxLength: 5000
                  type: string
                default_tax_rates:
                  anyOf:
                    - items:
                        maxLength: 5000
                        type: string
                      type: array
                    - enum:
                        - ''
                      type: string
                  description: >-
                    The tax rates that will apply to any subscription item that
                    does not have `tax_rates` set. Invoices created will have
                    their `default_tax_rates` populated from the subscription.
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                items:
                  description: >-
                    A list of up to 20 subscription items, each with an attached
                    price.
                  items:
                    properties:
                      billing_thresholds:
                        anyOf:
                          - properties:
                              usage_gte:
                                type: integer
                            required:
                              - usage_gte
                            title: item_billing_thresholds_param
                            type: object
                          - enum:
                              - ''
                            type: string
                      metadata:
                        additionalProperties:
                          type: string
                        type: object
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
                          - product
                          - recurring
                        title: recurring_price_data
                        type: object
                      quantity:
                        type: integer
                      tax_rates:
                        anyOf:
                          - items:
                              maxLength: 5000
                              type: string
                            type: array
                          - enum:
                              - ''
                            type: string
                    title: subscription_item_create_params
                    type: object
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
                off_session:
                  description: >-
                    Indicates if a customer is on or off-session while an
                    invoice payment is attempted.
                  type: boolean
                payment_behavior:
                  description: >-
                    Only applies to subscriptions with
                    `collection_method=charge_automatically`.


                    Use `allow_incomplete` to create subscriptions with
                    `status=incomplete` if the first invoice cannot be paid.
                    Creating subscriptions with this status allows you to manage
                    scenarios where additional user actions are needed to pay a
                    subscription's invoice. For example, SCA regulation may
                    require 3DS authentication to complete payment. See the [SCA
                    Migration
                    Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication)
                    for Billing to learn more. This is the default behavior.


                    Use `default_incomplete` to create Subscriptions with
                    `status=incomplete` when the first invoice requires payment,
                    otherwise start as active. Subscriptions transition to
                    `status=active` when successfully confirming the payment
                    intent on the first invoice. This allows simpler management
                    of scenarios where additional user actions are needed to pay
                    a subscription’s invoice. Such as failed payments, [SCA
                    regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication),
                    or collecting a mandate for a bank debit payment method. If
                    the payment intent is not confirmed within 23 hours
                    subscriptions transition to `status=incomplete_expired`,
                    which is a terminal state.


                    Use `error_if_incomplete` if you want Stripe to return an
                    HTTP 402 status code if a subscription's first invoice
                    cannot be paid. For example, if a payment method requires
                    3DS authentication due to SCA regulation and further user
                    action is needed, this parameter does not create a
                    subscription and returns an error instead. This was the
                    default behavior for API versions prior to 2019-03-14. See
                    the [changelog](https://stripe.com/docs/upgrades#2019-03-14)
                    to learn more.


                    `pending_if_incomplete` is only used with updates and cannot
                    be passed when creating a subscription.


                    Subscriptions with `collection_method=send_invoice` are
                    automatically activated regardless of the first invoice
                    status.
                  enum:
                    - allow_incomplete
                    - default_incomplete
                    - error_if_incomplete
                    - pending_if_incomplete
                  type: string
                payment_settings:
                  description: >-
                    Payment settings to pass to invoices created by the
                    subscription.
                  properties:
                    payment_method_options:
                      properties:
                        acss_debit:
                          anyOf:
                            - properties:
                                mandate_options:
                                  properties:
                                    transaction_type:
                                      enum:
                                        - business
                                        - personal
                                      type: string
                                  title: mandate_options_param
                                  type: object
                                verification_method:
                                  enum:
                                    - automatic
                                    - instant
                                    - microdeposits
                                  type: string
                                  x-stripeBypassValidation: true
                              title: invoice_payment_method_options_param
                              type: object
                            - enum:
                                - ''
                              type: string
                        bancontact:
                          anyOf:
                            - properties:
                                preferred_language:
                                  enum:
                                    - de
                                    - en
                                    - fr
                                    - nl
                                  type: string
                              title: invoice_payment_method_options_param
                              type: object
                            - enum:
                                - ''
                              type: string
                        card:
                          anyOf:
                            - properties:
                                mandate_options:
                                  properties:
                                    amount:
                                      type: integer
                                    amount_type:
                                      enum:
                                        - fixed
                                        - maximum
                                      type: string
                                    description:
                                      maxLength: 200
                                      type: string
                                  title: mandate_options_param
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
                                  type: string
                              title: subscription_payment_method_options_param
                              type: object
                            - enum:
                                - ''
                              type: string
                        customer_balance:
                          anyOf:
                            - properties:
                                bank_transfer:
                                  properties:
                                    eu_bank_transfer:
                                      properties:
                                        country:
                                          maxLength: 5000
                                          type: string
                                      required:
                                        - country
                                      title: eu_bank_transfer_param
                                      type: object
                                    type:
                                      type: string
                                  title: bank_transfer_param
                                  type: object
                                funding_type:
                                  type: string
                              title: invoice_payment_method_options_param
                              type: object
                            - enum:
                                - ''
                              type: string
                        konbini:
                          anyOf:
                            - properties: {}
                              title: invoice_payment_method_options_param
                              type: object
                            - enum:
                                - ''
                              type: string
                        us_bank_account:
                          anyOf:
                            - properties:
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
                                  title: invoice_linked_account_options_param
                                  type: object
                                verification_method:
                                  enum:
                                    - automatic
                                    - instant
                                    - microdeposits
                                  type: string
                                  x-stripeBypassValidation: true
                              title: invoice_payment_method_options_param
                              type: object
                            - enum:
                                - ''
                              type: string
                      title: payment_method_options
                      type: object
                    payment_method_types:
                      anyOf:
                        - items:
                            enum:
                              - ach_credit_transfer
                              - ach_debit
                              - acss_debit
                              - au_becs_debit
                              - bacs_debit
                              - bancontact
                              - boleto
                              - card
                              - cashapp
                              - customer_balance
                              - fpx
                              - giropay
                              - grabpay
                              - ideal
                              - konbini
                              - link
                              - paynow
                              - paypal
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
                    save_default_payment_method:
                      enum:
                        - 'off'
                        - on_subscription
                      type: string
                  title: payment_settings
                  type: object
                pending_invoice_item_interval:
                  anyOf:
                    - properties:
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
                      title: pending_invoice_item_interval_params
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Specifies an interval for how often to bill for any pending
                    invoice items. It is analogous to calling [Create an
                    invoice](https://stripe.com/docs/api#create_invoice) for the
                    given subscription at the specified interval.
                promotion_code:
                  description: >-
                    The API ID of a promotion code to apply to this
                    subscription. A promotion code applied to a subscription
                    will only affect invoices created for that particular
                    subscription.
                  maxLength: 5000
                  type: string
                proration_behavior:
                  description: >-
                    Determines how to handle
                    [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations)
                    resulting from the `billing_cycle_anchor`. If no value is
                    passed, the default is `create_prorations`.
                  enum:
                    - always_invoice
                    - create_prorations
                    - none
                  type: string
                transfer_data:
                  description: >-
                    If specified, the funds from the subscription's invoices
                    will be transferred to the destination and the ID of the
                    resulting transfers will be found on the resulting charges.
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
                  anyOf:
                    - enum:
                        - now
                      maxLength: 5000
                      type: string
                    - format: unix-time
                      type: integer
                  description: >-
                    Unix timestamp representing the end of the trial period the
                    customer will get before being charged for the first time.
                    If set, trial_end will override the default trial period of
                    the plan the customer is being subscribed to. The special
                    value `now` can be provided to end the customer's trial
                    immediately. Can be at most two years from
                    `billing_cycle_anchor`. See [Using trial periods on
                    subscriptions](https://stripe.com/docs/billing/subscriptions/trials)
                    to learn more.
                trial_from_plan:
                  description: >-
                    Indicates if a plan's `trial_period_days` should be applied
                    to the subscription. Setting `trial_end` per subscription is
                    preferred, and this defaults to `false`. Setting this flag
                    to `true` together with `trial_end` is not allowed. See
                    [Using trial periods on
                    subscriptions](https://stripe.com/docs/billing/subscriptions/trials)
                    to learn more.
                  type: boolean
                trial_period_days:
                  description: >-
                    Integer representing the number of trial period days before
                    the customer is charged for the first time. This will always
                    overwrite any trials that might apply via a subscribed plan.
                    See [Using trial periods on
                    subscriptions](https://stripe.com/docs/billing/subscriptions/trials)
                    to learn more.
                  type: integer
                trial_settings:
                  description: Settings related to subscription trials.
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
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/subscription'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Customer Subscription
      tags:
        - Customers
        - Subscriptions
  '/v1/customers/{customer}/subscriptions/{subscription_exposed_id}':
    delete:
      description: >-
        <p>Cancels a customer’s subscription. If you set the
        <code>at_period_end</code> parameter to <code>true</code>, the
        subscription will remain active until the end of the period, at which
        point it will be canceled and not renewed. Otherwise, with the default
        <code>false</code> value, the subscription is terminated immediately. In
        either case, the customer will not be charged again for the
        subscription.</p>


        <p>Note, however, that any pending invoice items that you’ve created
        will still be charged for at the end of the period, unless manually <a
        href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription
        to cancel at the end of the period, any pending prorations will also be
        left in place and collected at the end of the period. But if the
        subscription is set to cancel immediately, pending prorations will be
        removed.</p>


        <p>By default, upon subscription cancellation, Stripe will stop
        automatic collection of all finalized invoices for the customer. This is
        intended to prevent unexpected payment attempts after the customer has
        canceled a subscription. However, you can resume automatic collection of
        the invoices manually after subscription cancellation to have us
        proceed. Or, you could check for unpaid invoices before allowing the
        customer to cancel the subscription at all.</p>
      operationId: DeleteCustomersCustomerSubscriptionsSubscriptionExposedId
      parameters:
        - in: path
          name: customer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: subscription_exposed_id
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
                invoice_now:
                  description: >-
                    Can be set to `true` if `at_period_end` is not set to
                    `true`. Will generate a final invoice that invoices for any
                    un-invoiced metered usage and new/pending proration invoice
                    items.
                  type: boolean
                prorate:
                  description: >-
                    Can be set to `true` if `at_period_end` is not set to
                    `true`. Will generate a proration invoice item that credits
                    remaining unused time until the subscription period end.
                  type: boolean
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/subscription'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Customer Subscription
      tags:
        - Customers
        - Subscriptions
    get:
      description: <p>Retrieves the subscription with the given ID.</p>
      operationId: GetCustomersCustomerSubscriptionsSubscriptionExposedId
      parameters:
        - in: path
          name: customer
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
          name: subscription_exposed_id
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
                $ref: '#/components/schemas/subscription'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Customer Subscription
      tags:
        - Customers
        - Subscriptions
    post:
      description: >-
        <p>Updates an existing subscription on a customer to match the specified
        parameters. When changing plans or quantities, we will optionally
        prorate the price we charge next month to make up for any price changes.
        To preview how the proration will be calculated, use the <a
        href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>
      operationId: PostCustomersCustomerSubscriptionsSubscriptionExposedId
      parameters:
        - in: path
          name: customer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: subscription_exposed_id
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              add_invoice_items:
                explode: true
                style: deepObject
              automatic_tax:
                explode: true
                style: deepObject
              billing_thresholds:
                explode: true
                style: deepObject
              cancel_at:
                explode: true
                style: deepObject
              cancellation_details:
                explode: true
                style: deepObject
              default_source:
                explode: true
                style: deepObject
              default_tax_rates:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              items:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              pause_collection:
                explode: true
                style: deepObject
              payment_settings:
                explode: true
                style: deepObject
              pending_invoice_item_interval:
                explode: true
                style: deepObject
              transfer_data:
                explode: true
                style: deepObject
              trial_end:
                explode: true
                style: deepObject
              trial_settings:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                add_invoice_items:
                  description: >-
                    A list of prices and quantities that will generate invoice
                    items appended to the next invoice for this subscription.
                    You may pass up to 20 items.
                  items:
                    properties:
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
                          - product
                        title: one_time_price_data_with_negative_amounts
                        type: object
                      quantity:
                        type: integer
                      tax_rates:
                        anyOf:
                          - items:
                              maxLength: 5000
                              type: string
                            type: array
                          - enum:
                              - ''
                            type: string
                    title: add_invoice_item_entry
                    type: object
                  type: array
                application_fee_percent:
                  description: >-
                    A non-negative decimal between 0 and 100, with at most two
                    decimal places. This represents the percentage of the
                    subscription invoice total that will be transferred to the
                    application owner's Stripe account. The request must be made
                    by a platform account on a connected account in order to set
                    an application fee percentage. For more information, see the
                    application fees
                    [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
                  type: number
                automatic_tax:
                  description: >-
                    Automatic tax settings for this subscription. We recommend
                    you only include this parameter when the existing value is
                    being changed.
                  properties:
                    enabled:
                      type: boolean
                  required:
                    - enabled
                  title: automatic_tax_config
                  type: object
                billing_cycle_anchor:
                  description: >-
                    Either `now` or `unchanged`. Setting the value to `now`
                    resets the subscription's billing cycle anchor to the
                    current time. For more information, see the billing cycle
                    [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
                  enum:
                    - now
                    - unchanged
                  maxLength: 5000
                  type: string
                  x-stripeBypassValidation: true
                billing_thresholds:
                  anyOf:
                    - properties:
                        amount_gte:
                          type: integer
                        reset_billing_cycle_anchor:
                          type: boolean
                      title: billing_thresholds_param
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Define thresholds at which an invoice will be sent, and the
                    subscription advanced to a new billing period. Pass an empty
                    string to remove previously-defined thresholds.
                cancel_at:
                  anyOf:
                    - format: unix-time
                      type: integer
                    - enum:
                        - ''
                      type: string
                  description: >-
                    A timestamp at which the subscription should cancel. If set
                    to a date before the current period ends, this will cause a
                    proration if prorations have been enabled using
                    `proration_behavior`. If set during a future period, this
                    will always cause a proration for that period.
                cancel_at_period_end:
                  description: >-
                    Boolean indicating whether this subscription should cancel
                    at the end of the current period.
                  type: boolean
                cancellation_details:
                  description: Details about why this subscription was cancelled
                  properties:
                    comment:
                      anyOf:
                        - maxLength: 5000
                          type: string
                        - enum:
                            - ''
                          type: string
                    feedback:
                      enum:
                        - ''
                        - customer_service
                        - low_quality
                        - missing_features
                        - other
                        - switched_service
                        - too_complex
                        - too_expensive
                        - unused
                      type: string
                  title: cancellation_details_param
                  type: object
                collection_method:
                  description: >-
                    Either `charge_automatically`, or `send_invoice`. When
                    charging automatically, Stripe will attempt to pay this
                    subscription at the end of the cycle using the default
                    source attached to the customer. When sending an invoice,
                    Stripe will email your customer an invoice with payment
                    instructions and mark the subscription as `active`. Defaults
                    to `charge_automatically`.
                  enum:
                    - charge_automatically
                    - send_invoice
                  type: string
                coupon:
                  description: >-
                    The ID of the coupon to apply to this subscription. A coupon
                    applied to a subscription will only affect invoices created
                    for that particular subscription.
                  maxLength: 5000
                  type: string
                days_until_due:
                  description: >-
                    Number of days a customer has to pay invoices generated by
                    this subscription. Valid only for subscriptions where
                    `collection_method` is set to `send_invoice`.
                  type: integer
                default_payment_method:
                  description: >-
                    ID of the default payment method for the subscription. It
                    must belong to the customer associated with the
                    subscription. This takes precedence over `default_source`.
                    If neither are set, invoices will use the customer's
                    [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method)
                    or
                    [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
                  maxLength: 5000
                  type: string
                default_source:
                  anyOf:
                    - maxLength: 5000
                      type: string
                    - enum:
                        - ''
                      type: string
                  description: >-
                    ID of the default payment source for the subscription. It
                    must belong to the customer associated with the subscription
                    and be in a chargeable state. If `default_payment_method` is
                    also set, `default_payment_method` will take precedence. If
                    neither are set, invoices will use the customer's
                    [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method)
                    or
                    [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
                default_tax_rates:
                  anyOf:
                    - items:
                        maxLength: 5000
                        type: string
                      type: array
                    - enum:
                        - ''
                      type: string
                  description: >-
                    The tax rates that will apply to any subscription item that
                    does not have `tax_rates` set. Invoices created will have
                    their `default_tax_rates` populated from the subscription.
                    Pass an empty string to remove previously-defined tax rates.
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                items:
                  description: >-
                    A list of up to 20 subscription items, each with an attached
                    price.
                  items:
                    properties:
                      billing_thresholds:
                        anyOf:
                          - properties:
                              usage_gte:
                                type: integer
                            required:
                              - usage_gte
                            title: item_billing_thresholds_param
                            type: object
                          - enum:
                              - ''
                            type: string
                      clear_usage:
                        type: boolean
                      deleted:
                        type: boolean
                      id:
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
                          - product
                          - recurring
                        title: recurring_price_data
                        type: object
                      quantity:
                        type: integer
                      tax_rates:
                        anyOf:
                          - items:
                              maxLength: 5000
                              type: string
                            type: array
                          - enum:
                              - ''
                            type: string
                    title: subscription_item_update_params
                    type: object
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
                off_session:
                  description: >-
                    Indicates if a customer is on or off-session while an
                    invoice payment is attempted.
                  type: boolean
                pause_collection:
                  anyOf:
                    - properties:
                        behavior:
                          enum:
                            - keep_as_draft
                            - mark_uncollectible
                            - void
                          type: string
                        resumes_at:
                          format: unix-time
                          type: integer
                      required:
                        - behavior
                      title: pause_collection_param
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    If specified, payment collection for this subscription will
                    be paused.
                payment_behavior:
                  description: >-
                    Use `allow_incomplete` to transition the subscription to
                    `status=past_due` if a payment is required but cannot be
                    paid. This allows you to manage scenarios where additional
                    user actions are needed to pay a subscription's invoice. For
                    example, SCA regulation may require 3DS authentication to
                    complete payment. See the [SCA Migration
                    Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication)
                    for Billing to learn more. This is the default behavior.


                    Use `default_incomplete` to transition the subscription to
                    `status=past_due` when payment is required and await
                    explicit confirmation of the invoice's payment intent. This
                    allows simpler management of scenarios where additional user
                    actions are needed to pay a subscription’s invoice. Such as
                    failed payments, [SCA
                    regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication),
                    or collecting a mandate for a bank debit payment method.


                    Use `pending_if_incomplete` to update the subscription using
                    [pending
                    updates](https://stripe.com/docs/billing/subscriptions/pending-updates).
                    When you use `pending_if_incomplete` you can only pass the
                    parameters [supported by pending
                    updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).


                    Use `error_if_incomplete` if you want Stripe to return an
                    HTTP 402 status code if a subscription's invoice cannot be
                    paid. For example, if a payment method requires 3DS
                    authentication due to SCA regulation and further user action
                    is needed, this parameter does not update the subscription
                    and returns an error instead. This was the default behavior
                    for API versions prior to 2019-03-14. See the
                    [changelog](https://stripe.com/docs/upgrades#2019-03-14) to
                    learn more.
                  enum:
                    - allow_incomplete
                    - default_incomplete
                    - error_if_incomplete
                    - pending_if_incomplete
                  type: string
                payment_settings:
                  description: >-
                    Payment settings to pass to invoices created by the
                    subscription.
                  properties:
                    payment_method_options:
                      properties:
                        acss_debit:
                          anyOf:
                            - properties:
                                mandate_options:
                                  properties:
                                    transaction_type:
                                      enum:
                                        - business
                                        - personal
                                      type: string
                                  title: mandate_options_param
                                  type: object
                                verification_method:
                                  enum:
                                    - automatic
                                    - instant
                                    - microdeposits
                                  type: string
                                  x-stripeBypassValidation: true
                              title: invoice_payment_method_options_param
                              type: object
                            - enum:
                                - ''
                              type: string
                        bancontact:
                          anyOf:
                            - properties:
                                preferred_language:
                                  enum:
                                    - de
                                    - en
                                    - fr
                                    - nl
                                  type: string
                              title: invoice_payment_method_options_param
                              type: object
                            - enum:
                                - ''
                              type: string
                        card:
                          anyOf:
                            - properties:
                                mandate_options:
                                  properties:
                                    amount:
                                      type: integer
                                    amount_type:
                                      enum:
                                        - fixed
                                        - maximum
                                      type: string
                                    description:
                                      maxLength: 200
                                      type: string
                                  title: mandate_options_param
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
                                  type: string
                              title: subscription_payment_method_options_param
                              type: object
                            - enum:
                                - ''
                              type: string
                        customer_balance:
                          anyOf:
                            - properties:
                                bank_transfer:
                                  properties:
                                    eu_bank_transfer:
                                      properties:
                                        country:
                                          maxLength: 5000
                                          type: string
                                      required:
                                        - country
                                      title: eu_bank_transfer_param
                                      type: object
                                    type:
                                      type: string
                                  title: bank_transfer_param
                                  type: object
                                funding_type:
                                  type: string
                              title: invoice_payment_method_options_param
                              type: object
                            - enum:
                                - ''
                              type: string
                        konbini:
                          anyOf:
                            - properties: {}
                              title: invoice_payment_method_options_param
                              type: object
                            - enum:
                                - ''
                              type: string
                        us_bank_account:
                          anyOf:
                            - properties:
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
                                  title: invoice_linked_account_options_param
                                  type: object
                                verification_method:
                                  enum:
                                    - automatic
                                    - instant
                                    - microdeposits
                                  type: string
                                  x-stripeBypassValidation: true
                              title: invoice_payment_method_options_param
                              type: object
                            - enum:
                                - ''
                              type: string
                      title: payment_method_options
                      type: object
                    payment_method_types:
                      anyOf:
                        - items:
                            enum:
                              - ach_credit_transfer
                              - ach_debit
                              - acss_debit
                              - au_becs_debit
                              - bacs_debit
                              - bancontact
                              - boleto
                              - card
                              - cashapp
                              - customer_balance
                              - fpx
                              - giropay
                              - grabpay
                              - ideal
                              - konbini
                              - link
                              - paynow
                              - paypal
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
                    save_default_payment_method:
                      enum:
                        - 'off'
                        - on_subscription
                      type: string
                  title: payment_settings
                  type: object
                pending_invoice_item_interval:
                  anyOf:
                    - properties:
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
                      title: pending_invoice_item_interval_params
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Specifies an interval for how often to bill for any pending
                    invoice items. It is analogous to calling [Create an
                    invoice](https://stripe.com/docs/api#create_invoice) for the
                    given subscription at the specified interval.
                promotion_code:
                  description: >-
                    The promotion code to apply to this subscription. A
                    promotion code applied to a subscription will only affect
                    invoices created for that particular subscription.
                  maxLength: 5000
                  type: string
                proration_behavior:
                  description: >-
                    Determines how to handle
                    [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations)
                    when the billing cycle changes (e.g., when switching plans,
                    resetting `billing_cycle_anchor=now`, or starting a trial),
                    or if an item's `quantity` changes. The default value is
                    `create_prorations`.
                  enum:
                    - always_invoice
                    - create_prorations
                    - none
                  type: string
                proration_date:
                  description: >-
                    If set, the proration will be calculated as though the
                    subscription was updated at the given time. This can be used
                    to apply exactly the same proration that was previewed with
                    [upcoming
                    invoice](https://stripe.com/docs/api#upcoming_invoice)
                    endpoint. It can also be used to implement custom proration
                    logic, such as prorating by day instead of by second, by
                    providing the time that you wish to use for proration
                    calculations.
                  format: unix-time
                  type: integer
                transfer_data:
                  anyOf:
                    - properties:
                        amount_percent:
                          type: number
                        destination:
                          type: string
                      required:
                        - destination
                      title: transfer_data_specs
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    If specified, the funds from the subscription's invoices
                    will be transferred to the destination and the ID of the
                    resulting transfers will be found on the resulting charges.
                    This will be unset if you POST an empty value.
                trial_end:
                  anyOf:
                    - enum:
                        - now
                      maxLength: 5000
                      type: string
                    - format: unix-time
                      type: integer
                  description: >-
                    Unix timestamp representing the end of the trial period the
                    customer will get before being charged for the first time.
                    This will always overwrite any trials that might apply via a
                    subscribed plan. If set, trial_end will override the default
                    trial period of the plan the customer is being subscribed
                    to. The special value `now` can be provided to end the
                    customer's trial immediately. Can be at most two years from
                    `billing_cycle_anchor`.
                trial_from_plan:
                  description: >-
                    Indicates if a plan's `trial_period_days` should be applied
                    to the subscription. Setting `trial_end` per subscription is
                    preferred, and this defaults to `false`. Setting this flag
                    to `true` together with `trial_end` is not allowed. See
                    [Using trial periods on
                    subscriptions](https://stripe.com/docs/billing/subscriptions/trials)
                    to learn more.
                  type: boolean
                trial_settings:
                  description: Settings related to subscription trials.
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
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/subscription'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Customer Subscription
      tags:
        - Customers
        - Subscriptions
  '/v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount':
    delete:
      description: <p>Removes the currently applied discount on a customer.</p>
      operationId: DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount
      parameters:
        - in: path
          name: customer
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: subscription_exposed_id
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
                $ref: '#/components/schemas/deleted_discount'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Customer Subscription Discount
      tags:
        - Customers
        - Subscriptions
        - Discount
    get:
      description: ''
      operationId: GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount
      parameters:
        - in: path
          name: customer
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
          name: subscription_exposed_id
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
                $ref: '#/components/schemas/discount'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Customer Subscription Discount
      tags:
        - Customers
        - Subscriptions
        - Discount
  '/v1/customers/{customer}/tax_ids':
    get:
      description: <p>Returns a list of tax IDs for a customer.</p>
      operationId: GetCustomersCustomerTaxIds
      parameters:
        - in: path
          name: customer
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
                      $ref: '#/components/schemas/tax_id'
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
                title: TaxIDsList
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
      summary: Retrieve Customer Tax IDs
      tags:
        - Customers
        - Taxes
    post:
      description: <p>Creates a new <code>tax_id</code> object for a customer.</p>
      operationId: PostCustomersCustomerTaxIds
      parameters:
        - in: path
          name: customer
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
                type:
                  description: >-
                    Type of the tax ID, one of `ad_nrt`, `ae_trn`, `ar_cuit`,
                    `au_abn`, `au_arn`, `bg_uic`, `bo_tin`, `br_cnpj`, `br_cpf`,
                    `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`,
                    `ca_pst_sk`, `ca_qst`, `ch_vat`, `cl_tin`, `cn_tin`,
                    `co_nit`, `cr_tin`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`,
                    `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`,
                    `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`,
                    `jp_rn`, `jp_trn`, `ke_pin`, `kr_brn`, `li_uid`, `mx_rfc`,
                    `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `pe_ruc`,
                    `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`,
                    `sg_gst`, `sg_uen`, `si_tin`, `sv_nit`, `th_vat`, `tr_tin`,
                    `tw_vat`, `ua_vat`, `us_ein`, `uy_ruc`, `ve_rif`, `vn_tin`,
                    or `za_vat`
                  enum:
                    - ad_nrt
                    - ae_trn
                    - ar_cuit
                    - au_abn
                    - au_arn
                    - bg_uic
                    - bo_tin
                    - br_cnpj
                    - br_cpf
                    - ca_bn
                    - ca_gst_hst
                    - ca_pst_bc
                    - ca_pst_mb
                    - ca_pst_sk
                    - ca_qst
                    - ch_vat
                    - cl_tin
                    - cn_tin
                    - co_nit
                    - cr_tin
                    - do_rcn
                    - ec_ruc
                    - eg_tin
                    - es_cif
                    - eu_oss_vat
                    - eu_vat
                    - gb_vat
                    - ge_vat
                    - hk_br
                    - hu_tin
                    - id_npwp
                    - il_vat
                    - in_gst
                    - is_vat
                    - jp_cn
                    - jp_rn
                    - jp_trn
                    - ke_pin
                    - kr_brn
                    - li_uid
                    - mx_rfc
                    - my_frp
                    - my_itn
                    - my_sst
                    - no_vat
                    - nz_gst
                    - pe_ruc
                    - ph_tin
                    - ro_tin
                    - rs_pib
                    - ru_inn
                    - ru_kpp
                    - sa_vat
                    - sg_gst
                    - sg_uen
                    - si_tin
                    - sv_nit
                    - th_vat
                    - tr_tin
                    - tw_vat
                    - ua_vat
                    - us_ein
                    - uy_ruc
                    - ve_rif
                    - vn_tin
                    - za_vat
                  maxLength: 5000
                  type: string
                  x-stripeBypassValidation: true
                value:
                  description: Value of the tax ID.
                  type: string
              required:
                - type
                - value
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/tax_id'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Customer Tax ID
      tags:
        - Customers
        - Taxes
  '/v1/customers/{customer}/tax_ids/{id}':
    delete:
      description: <p>Deletes an existing <code>tax_id</code> object.</p>
      operationId: DeleteCustomersCustomerTaxIdsId
      parameters:
        - in: path
          name: customer
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
                $ref: '#/components/schemas/deleted_tax_id'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Customer Tax ID
      tags:
        - Customers
        - Taxes
    get:
      description: >-
        <p>Retrieves the <code>tax_id</code> object with the given
        identifier.</p>
      operationId: GetCustomersCustomerTaxIdsId
      parameters:
        - in: path
          name: customer
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
                $ref: '#/components/schemas/tax_id'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Customer Tax ID
      tags:
        - Customers
        - Taxes
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
    customer:
      description: >-
        This object represents a customer of your business. Use it to create
        recurring charges and track payments that belong to the same customer.


        Related guide: [Save a card during
        payment](https://stripe.com/docs/payments/save-during-payment)
      properties:
        address:
          anyOf:
            - $ref: '#/components/schemas/address'
          description: The customer's address.
          nullable: true
        balance:
          description: >-
            The current balance, if any, that's stored on the customer. If
            negative, the customer has credit to apply to their next invoice. If
            positive, the customer has an amount owed that's added to their next
            invoice. The balance only considers amounts that Stripe hasn't
            successfully applied to any invoice. It doesn't reflect unpaid
            invoices. This balance is only taken into account after invoices
            finalize.
          type: integer
        cash_balance:
          anyOf:
            - $ref: '#/components/schemas/cash_balance'
          description: >-
            The current funds being held by Stripe on behalf of the customer.
            You can apply these funds towards payment intents when the source is
            "cash_balance". The `settings[reconciliation_mode]` field describes
            if these funds apply to these payment intents manually or
            automatically.
          nullable: true
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            Three-letter [ISO code for the
            currency](https://stripe.com/docs/currencies) the customer can be
            charged in for recurring billing purposes.
          maxLength: 5000
          nullable: true
          type: string
        default_source:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/bank_account'
            - $ref: '#/components/schemas/card'
            - $ref: '#/components/schemas/source'
          description: >-
            ID of the default payment source for the customer.


            If you use payment methods created through the PaymentMethods API,
            see the
            [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method)
            field instead.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/bank_account'
              - $ref: '#/components/schemas/card'
              - $ref: '#/components/schemas/source'
          x-stripeBypassValidation: true
        delinquent:
          description: >-
            Tracks the most recent state change on any invoice belonging to the
            customer. Paying an invoice or marking it uncollectible via the API
            will set this field to false. An automatic payment failure or
            passing the `invoice.due_date` will set this field to `true`.


            If an invoice becomes uncollectible by
            [dunning](https://stripe.com/docs/billing/automatic-collection),
            `delinquent` doesn't reset to `false`.


            If you care whether the customer has paid their most recent
            subscription invoice, use `subscription.status` instead. Paying or
            marking uncollectible any customer invoice regardless of whether it
            is the latest invoice for a subscription will always set this field
            to `false`.
          nullable: true
          type: boolean
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          nullable: true
          type: string
        discount:
          anyOf:
            - $ref: '#/components/schemas/discount'
          description: >-
            Describes the current discount active on the customer, if there is
            one.
          nullable: true
        email:
          description: The customer's email address.
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        invoice_credit_balance:
          additionalProperties:
            type: integer
          description: >-
            The current multi-currency balances, if any, that's stored on the
            customer. If positive in a currency, the customer has a credit to
            apply to their next invoice denominated in that currency. If
            negative, the customer has an amount owed that's added to their next
            invoice denominated in that currency. These balances don't apply to
            unpaid invoices. They solely track amounts that Stripe hasn't
            successfully applied to any invoice. Stripe only applies a balance
            in a specific currency to an invoice after that invoice (which is in
            the same currency) finalizes.
          type: object
        invoice_prefix:
          description: The prefix for the customer used to generate unique invoice numbers.
          maxLength: 5000
          nullable: true
          type: string
        invoice_settings:
          $ref: '#/components/schemas/invoice_setting_customer_setting'
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
        name:
          description: The customer's full name or business name.
          maxLength: 5000
          nullable: true
          type: string
        next_invoice_sequence:
          description: >-
            The suffix of the customer's next invoice number (for example,
            0001).
          type: integer
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - customer
          type: string
        phone:
          description: The customer's phone number.
          maxLength: 5000
          nullable: true
          type: string
        preferred_locales:
          description: 'The customer''s preferred locales (languages), ordered by preference.'
          items:
            maxLength: 5000
            type: string
          nullable: true
          type: array
        shipping:
          anyOf:
            - $ref: '#/components/schemas/shipping'
          description: >-
            Mailing and shipping address for the customer. Appears on invoices
            emailed to this customer.
          nullable: true
        sources:
          description: 'The customer''s payment sources, if any.'
          properties:
            data:
              description: Details about each object.
              items:
                anyOf:
                  - $ref: '#/components/schemas/bank_account'
                  - $ref: '#/components/schemas/card'
                  - $ref: '#/components/schemas/source'
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
          title: ApmsSourcesSourceList
          type: object
          x-expandableFields:
            - data
        subscriptions:
          description: 'The customer''s current subscriptions, if any.'
          properties:
            data:
              description: Details about each object.
              items:
                $ref: '#/components/schemas/subscription'
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
          title: SubscriptionList
          type: object
          x-expandableFields:
            - data
        tax:
          $ref: '#/components/schemas/customer_tax'
        tax_exempt:
          description: >-
            Describes the customer's tax exemption status, which is `none`,
            `exempt`, or `reverse`. When set to `reverse`, invoice and receipt
            PDFs include the following text: **"Reverse charge"**.
          enum:
            - exempt
            - none
            - reverse
          nullable: true
          type: string
        tax_ids:
          description: The customer's tax IDs.
          properties:
            data:
              description: Details about each object.
              items:
                $ref: '#/components/schemas/tax_id'
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
          title: TaxIDsList
          type: object
          x-expandableFields:
            - data
        test_clock:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/test_helpers.test_clock'
          description: ID of the test clock that this customer belongs to.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/test_helpers.test_clock'
      required:
        - created
        - id
        - livemode
        - object
      title: Customer
      type: object
      x-expandableFields:
        - address
        - cash_balance
        - default_source
        - discount
        - invoice_settings
        - shipping
        - sources
        - subscriptions
        - tax
        - tax_ids
        - test_clock
      x-resourceId: customer
    deleted_customer:
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
            - customer
          type: string
      required:
        - deleted
        - id
        - object
      title: DeletedCustomer
      type: object
      x-expandableFields: []
      x-resourceId: deleted_customer
    customer_balance_transaction:
      description: >-
        Each customer has a
        [Balance](https://stripe.com/docs/api/customers/object#customer_object-balance)
        value,

        which denotes a debit or credit that's automatically applied to their
        next invoice upon finalization.

        You may modify the value directly by using the [update customer
        API](https://stripe.com/docs/api/customers/update),

        or by creating a Customer Balance Transaction, which increments or
        decrements the customer's `balance` by the specified `amount`.


        Related guide: [Customer
        balance](https://stripe.com/docs/billing/customer/balance)
      properties:
        amount:
          description: >-
            The amount of the transaction. A negative value is a credit for the
            customer's balance, and a positive value is a debit to the
            customer's `balance`.
          type: integer
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        credit_note:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/credit_note'
          description: The ID of the credit note (if any) related to the transaction.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/credit_note'
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
          description: The ID of the customer the transaction belongs to.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          nullable: true
          type: string
        ending_balance:
          description: >-
            The customer's `balance` after the transaction was applied. A
            negative value decreases the amount due on the customer's next
            invoice. A positive value increases the amount due on the customer's
            next invoice.
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
          description: The ID of the invoice (if any) related to the transaction.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/invoice'
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
            - customer_balance_transaction
          type: string
        type:
          description: >-
            Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`,
            `initial`, `invoice_overpaid`, `invoice_too_large`,
            `invoice_too_small`, `unspent_receiver_credit`, or
            `unapplied_from_invoice`. See the [Customer Balance
            page](https://stripe.com/docs/billing/customer/balance#types) to
            learn more about transaction types.
          enum:
            - adjustment
            - applied_to_invoice
            - credit_note
            - initial
            - invoice_overpaid
            - invoice_too_large
            - invoice_too_small
            - migration
            - unapplied_from_invoice
            - unspent_receiver_credit
          type: string
      required:
        - amount
        - created
        - currency
        - customer
        - ending_balance
        - id
        - livemode
        - object
        - type
      title: CustomerBalanceTransaction
      type: object
      x-expandableFields:
        - credit_note
        - customer
        - invoice
      x-resourceId: customer_balance_transaction
    payment_source:
      anyOf:
        - $ref: '#/components/schemas/account'
        - $ref: '#/components/schemas/bank_account'
        - $ref: '#/components/schemas/card'
        - $ref: '#/components/schemas/source'
      title: Polymorphic
      x-resourceId: payment_source
      x-stripeBypassValidation: true
    bank_account:
      description: >-
        These bank accounts are payment methods on `Customer` objects.


        On the other hand [External
        Accounts](https://stripe.com/docs/api#external_accounts) are transfer

        destinations on `Account` objects for [Custom
        accounts](https://stripe.com/docs/connect/custom-accounts).

        They can be bank accounts or debit cards as well, and are documented in
        the links above.


        Related guide: [Bank debits and
        transfers](https://stripe.com/docs/payments/bank-debits-transfers)
      properties:
        account:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/account'
          description: The ID of the account that the bank account is associated with.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/account'
        account_holder_name:
          description: The name of the person or business that owns the bank account.
          maxLength: 5000
          nullable: true
          type: string
        account_holder_type:
          description: >-
            The type of entity that holds the account. This can be either
            `individual` or `company`.
          maxLength: 5000
          nullable: true
          type: string
        account_type:
          description: >-
            The bank account type. This can only be `checking` or `savings` in
            most countries. In Japan, this can only be `futsu` or `toza`.
          maxLength: 5000
          nullable: true
          type: string
        available_payout_methods:
          description: >-
            A set of available payout methods for this bank account. Only values
            from this set should be passed as the `method` when creating a
            payout.
          items:
            enum:
              - instant
              - standard
            type: string
          nullable: true
          type: array
        bank_name:
          description: >-
            Name of the bank associated with the routing number (e.g., `WELLS
            FARGO`).
          maxLength: 5000
          nullable: true
          type: string
        country:
          description: >-
            Two-letter ISO code representing the country the bank account is
            located in.
          maxLength: 5000
          type: string
        currency:
          description: >-
            Three-letter [ISO code for the
            currency](https://stripe.com/docs/payouts) paid out to the bank
            account.
          type: string
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
            - $ref: '#/components/schemas/deleted_customer'
          description: The ID of the customer that the bank account is associated with.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
              - $ref: '#/components/schemas/deleted_customer'
        default_for_currency:
          description: >-
            Whether this bank account is the default external account for its
            currency.
          nullable: true
          type: boolean
        fingerprint:
          description: >-
            Uniquely identifies this particular bank account. You can use this
            attribute to check whether two bank accounts are the same.
          maxLength: 5000
          nullable: true
          type: string
        future_requirements:
          anyOf:
            - $ref: '#/components/schemas/external_account_requirements'
          description: >-
            Information about the [upcoming new requirements for the bank
            account](https://stripe.com/docs/connect/custom-accounts/future-requirements),
            including what information needs to be collected, and by when.
          nullable: true
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        last4:
          description: The last four digits of the bank account number.
          maxLength: 5000
          type: string
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
            - bank_account
          type: string
        requirements:
          anyOf:
            - $ref: '#/components/schemas/external_account_requirements'
          description: >-
            Information about the requirements for the bank account, including
            what information needs to be collected.
          nullable: true
        routing_number:
          description: The routing transit number for the bank account.
          maxLength: 5000
          nullable: true
          type: string
        status:
          description: >-
            For bank accounts, possible values are `new`, `validated`,
            `verified`, `verification_failed`, or `errored`. A bank account that
            hasn't had any activity or validation performed is `new`. If Stripe
            can determine that the bank account exists, its status will be
            `validated`. Note that there often isn’t enough information to know
            (e.g., for smaller credit unions), and the validation is not always
            run. If customer bank account verification has succeeded, the bank
            account status will be `verified`. If the verification failed for
            any reason, such as microdeposit failure, the status will be
            `verification_failed`. If a payout sent to this bank account fails,
            we'll set the status to `errored` and will not continue to send
            [scheduled payouts](https://stripe.com/docs/payouts#payout-schedule)
            until the bank details are updated.


            For external accounts, possible values are `new`, `errored` and
            `verification_failed`. If a payouts fails, the status is set to
            `errored` and scheduled payouts are stopped until account details
            are updated. In India, if we can't [verify the owner of the bank
            account](https://support.stripe.com/questions/bank-account-ownership-verification),
            we'll set the status to `verification_failed`. Other validations
            aren't run against external accounts because they're only used for
            payouts. This means the other statuses don't apply.
          maxLength: 5000
          type: string
      required:
        - country
        - currency
        - id
        - last4
        - object
        - status
      title: BankAccount
      type: object
      x-expandableFields:
        - account
        - customer
        - future_requirements
        - requirements
      x-resourceId: bank_account
    card:
      description: >-
        You can store multiple cards on a customer in order to charge the
        customer

        later. You can also store multiple debit cards on a recipient in order
        to

        transfer to those cards later.


        Related guide: [Card payments with
        Sources](https://stripe.com/docs/sources/cards)
      properties:
        account:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/account'
          description: >-
            The account this card belongs to. This attribute will not be in the
            card object if the card belongs to a customer or recipient instead.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/account'
        address_city:
          description: City/District/Suburb/Town/Village.
          maxLength: 5000
          nullable: true
          type: string
        address_country:
          description: 'Billing address country, if provided when creating card.'
          maxLength: 5000
          nullable: true
          type: string
        address_line1:
          description: Address line 1 (Street address/PO Box/Company name).
          maxLength: 5000
          nullable: true
          type: string
        address_line1_check:
          description: >-
            If `address_line1` was provided, results of the check: `pass`,
            `fail`, `unavailable`, or `unchecked`.
          maxLength: 5000
          nullable: true
          type: string
        address_line2:
          description: Address line 2 (Apartment/Suite/Unit/Building).
          maxLength: 5000
          nullable: true
          type: string
        address_state:
          description: State/County/Province/Region.
          maxLength: 5000
          nullable: true
          type: string
        address_zip:
          description: ZIP or postal code.
          maxLength: 5000
          nullable: true
          type: string
        address_zip_check:
          description: >-
            If `address_zip` was provided, results of the check: `pass`, `fail`,
            `unavailable`, or `unchecked`.
          maxLength: 5000
          nullable: true
          type: string
        available_payout_methods:
          description: >-
            A set of available payout methods for this card. Only values from
            this set should be passed as the `method` when creating a payout.
          items:
            enum:
              - instant
              - standard
            type: string
          nullable: true
          type: array
        brand:
          description: >-
            Card brand. Can be `American Express`, `Diners Club`, `Discover`,
            `Eftpos Australia`, `JCB`, `MasterCard`, `UnionPay`, `Visa`, or
            `Unknown`.
          maxLength: 5000
          type: string
        country:
          description: >-
            Two-letter ISO code representing the country of the card. You could
            use this attribute to get a sense of the international breakdown of
            cards you've collected.
          maxLength: 5000
          nullable: true
          type: string
        currency:
          description: >-
            Three-letter [ISO code for
            currency](https://stripe.com/docs/payouts). Only applicable on
            accounts (not customers or recipients). The card can be used as a
            transfer destination for funds in this currency.
          nullable: true
          type: string
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
            - $ref: '#/components/schemas/deleted_customer'
          description: >-
            The customer that this card belongs to. This attribute will not be
            in the card object if the card belongs to an account or recipient
            instead.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
              - $ref: '#/components/schemas/deleted_customer'
        cvc_check:
          description: >-
            If a CVC was provided, results of the check: `pass`, `fail`,
            `unavailable`, or `unchecked`. A result of unchecked indicates that
            CVC was provided but hasn't been checked yet. Checks are typically
            performed when attaching a card to a Customer object, or when
            creating a charge. For more details, see [Check if a card is valid
            without a
            charge](https://support.stripe.com/questions/check-if-a-card-is-valid-without-a-charge).
          maxLength: 5000
          nullable: true
          type: string
        default_for_currency:
          description: Whether this card is the default external account for its currency.
          nullable: true
          type: boolean
        dynamic_last4:
          description: >-
            (For tokenized numbers only.) The last four digits of the device
            account number.
          maxLength: 5000
          nullable: true
          type: string
        exp_month:
          description: Two-digit number representing the card's expiration month.
          type: integer
        exp_year:
          description: Four-digit number representing the card's expiration year.
          type: integer
        fingerprint:
          description: >-
            Uniquely identifies this particular card number. You can use this
            attribute to check whether two customers who’ve signed up with you
            are using the same card number, for example. For payment methods
            that tokenize card information (Apple Pay, Google Pay), the
            tokenized number might be provided instead of the underlying card
            number.


            *As of May 1, 2021, card fingerprint in India for Connect changed to
            allow two fingerprints for the same cardone for India and one for
            the rest of the world.*
          maxLength: 5000
          nullable: true
          type: string
        funding:
          description: >-
            Card funding type. Can be `credit`, `debit`, `prepaid`, or
            `unknown`.
          maxLength: 5000
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        last4:
          description: The last four digits of the card.
          maxLength: 5000
          type: string
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
        name:
          description: Cardholder name.
          maxLength: 5000
          nullable: true
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - card
          type: string
        status:
          description: >-
            For external accounts that are cards, possible values are `new` and
            `errored`. If a payout fails, the status is set to `errored` and
            [scheduled payouts](https://stripe.com/docs/payouts#payout-schedule)
            are stopped until account details are updated.
          maxLength: 5000
          nullable: true
          type: string
        tokenization_method:
          description: >-
            If the card number is tokenized, this is the method that was used.
            Can be `android_pay` (includes Google Pay), `apple_pay`,
            `masterpass`, `visa_checkout`, or null.
          maxLength: 5000
          nullable: true
          type: string
      required:
        - brand
        - exp_month
        - exp_year
        - funding
        - id
        - last4
        - object
      title: Card
      type: object
      x-expandableFields:
        - account
        - customer
      x-resourceId: card
    cash_balance:
      description: >-
        A customer's `Cash balance` represents real funds. Customers can add
        funds to their cash balance by sending a bank transfer. These funds can
        be used for payment and can eventually be paid out to your bank account.
      properties:
        available:
          additionalProperties:
            type: integer
          description: >-
            A hash of all cash balances available to this customer. You cannot
            delete a customer with any cash balances, even if the balance is 0.
            Amounts are represented in the [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal).
          nullable: true
          type: object
        customer:
          description: The ID of the customer whose cash balance this object represents.
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
            - cash_balance
          type: string
        settings:
          $ref: '#/components/schemas/customer_balance_customer_balance_settings'
      required:
        - customer
        - livemode
        - object
        - settings
      title: cash_balance
      type: object
      x-expandableFields:
        - settings
      x-resourceId: cash_balance
    customer_cash_balance_transaction:
      description: >-
        Customers with certain payments enabled have a cash balance,
        representing funds that were paid

        by the customer to a merchant, but have not yet been allocated to a
        payment. Cash Balance Transactions

        represent when funds are moved into or out of this balance. This
        includes funding by the customer, allocation

        to payments, and refunds to the customer.
      properties:
        adjusted_for_overdraft:
          $ref: >-
            #/components/schemas/customer_balance_resource_cash_balance_transaction_resource_adjusted_for_overdraft
        applied_to_payment:
          $ref: >-
            #/components/schemas/customer_balance_resource_cash_balance_transaction_resource_applied_to_payment_transaction
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
          maxLength: 5000
          type: string
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
          description: >-
            The customer whose available cash balance changed as a result of
            this transaction.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
        ending_balance:
          description: >-
            The total available cash balance for the specified currency after
            this transaction was applied. Represented in the [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal).
          type: integer
        funded:
          $ref: >-
            #/components/schemas/customer_balance_resource_cash_balance_transaction_resource_funded_transaction
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        net_amount:
          description: >-
            The amount by which the cash balance changed, represented in the
            [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal). A positive
            value represents funds being added to the cash balance, a negative
            value represents funds being removed from the cash balance.
          type: integer
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - customer_cash_balance_transaction
          type: string
        refunded_from_payment:
          $ref: >-
            #/components/schemas/customer_balance_resource_cash_balance_transaction_resource_refunded_from_payment_transaction
        transferred_to_balance:
          $ref: >-
            #/components/schemas/customer_balance_resource_cash_balance_transaction_resource_transferred_to_balance
        type:
          description: >-
            The type of the cash balance transaction. New types may be added in
            future. See [Customer
            Balance](https://stripe.com/docs/payments/customer-balance#types) to
            learn more about these types.
          enum:
            - adjusted_for_overdraft
            - applied_to_payment
            - funded
            - funding_reversed
            - refunded_from_payment
            - return_canceled
            - return_initiated
            - transferred_to_balance
            - unapplied_from_payment
          type: string
        unapplied_from_payment:
          $ref: >-
            #/components/schemas/customer_balance_resource_cash_balance_transaction_resource_unapplied_from_payment_transaction
      required:
        - created
        - currency
        - customer
        - ending_balance
        - id
        - livemode
        - net_amount
        - object
        - type
      title: CustomerCashBalanceTransaction
      type: object
      x-expandableFields:
        - adjusted_for_overdraft
        - applied_to_payment
        - customer
        - funded
        - refunded_from_payment
        - transferred_to_balance
        - unapplied_from_payment
      x-resourceId: customer_cash_balance_transaction
    deleted_discount:
      description: ''
      properties:
        checkout_session:
          description: >-
            The Checkout session that this coupon is applied to, if it is
            applied to a particular session in payment mode. Will not be present
            for subscription mode.
          maxLength: 5000
          nullable: true
          type: string
        coupon:
          $ref: '#/components/schemas/coupon'
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
            - $ref: '#/components/schemas/deleted_customer'
          description: The ID of the customer associated with this discount.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
              - $ref: '#/components/schemas/deleted_customer'
        deleted:
          description: Always true for a deleted object
          enum:
            - true
          type: boolean
        id:
          description: >-
            The ID of the discount object. Discounts cannot be fetched by ID.
            Use `expand[]=discounts` in API calls to expand discount IDs in an
            array.
          maxLength: 5000
          type: string
        invoice:
          description: >-
            The invoice that the discount's coupon was applied to, if it was
            applied directly to a particular invoice.
          maxLength: 5000
          nullable: true
          type: string
        invoice_item:
          description: >-
            The invoice item `id` (or invoice line item `id` for invoice line
            items of type='subscription') that the discount's coupon was applied
            to, if it was applied directly to a particular invoice item or
            invoice line item.
          maxLength: 5000
          nullable: true
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - discount
          type: string
        promotion_code:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/promotion_code'
          description: The promotion code applied to create this discount.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/promotion_code'
        start:
          description: Date that the coupon was applied.
          format: unix-time
          type: integer
        subscription:
          description: >-
            The subscription that this coupon is applied to, if it is applied to
            a particular subscription.
          maxLength: 5000
          nullable: true
          type: string
      required:
        - coupon
        - deleted
        - id
        - object
        - start
      title: DeletedDiscount
      type: object
      x-expandableFields:
        - coupon
        - customer
        - promotion_code
      x-resourceId: deleted_discount
    discount:
      description: >-
        A discount represents the actual application of a
        [coupon](https://stripe.com/docs/api#coupons) or [promotion
        code](https://stripe.com/docs/api#promotion_codes).

        It contains information about when the discount began, when it will end,
        and what it is applied to.


        Related guide: [Applying discounts to
        subscriptions](https://stripe.com/docs/billing/subscriptions/discounts)
      properties:
        checkout_session:
          description: >-
            The Checkout session that this coupon is applied to, if it is
            applied to a particular session in payment mode. Will not be present
            for subscription mode.
          maxLength: 5000
          nullable: true
          type: string
        coupon:
          $ref: '#/components/schemas/coupon'
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
            - $ref: '#/components/schemas/deleted_customer'
          description: The ID of the customer associated with this discount.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
              - $ref: '#/components/schemas/deleted_customer'
        end:
          description: >-
            If the coupon has a duration of `repeating`, the date that this
            discount will end. If the coupon has a duration of `once` or
            `forever`, this attribute will be null.
          format: unix-time
          nullable: true
          type: integer
        id:
          description: >-
            The ID of the discount object. Discounts cannot be fetched by ID.
            Use `expand[]=discounts` in API calls to expand discount IDs in an
            array.
          maxLength: 5000
          type: string
        invoice:
          description: >-
            The invoice that the discount's coupon was applied to, if it was
            applied directly to a particular invoice.
          maxLength: 5000
          nullable: true
          type: string
        invoice_item:
          description: >-
            The invoice item `id` (or invoice line item `id` for invoice line
            items of type='subscription') that the discount's coupon was applied
            to, if it was applied directly to a particular invoice item or
            invoice line item.
          maxLength: 5000
          nullable: true
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - discount
          type: string
        promotion_code:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/promotion_code'
          description: The promotion code applied to create this discount.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/promotion_code'
        start:
          description: Date that the coupon was applied.
          format: unix-time
          type: integer
        subscription:
          description: >-
            The subscription that this coupon is applied to, if it is applied to
            a particular subscription.
          maxLength: 5000
          nullable: true
          type: string
      required:
        - coupon
        - id
        - object
        - start
      title: Discount
      type: object
      x-expandableFields:
        - coupon
        - customer
        - promotion_code
      x-resourceId: discount
    funding_instructions:
      description: >-
        Each customer has a
        [`balance`](https://stripe.com/docs/api/customers/object#customer_object-balance)
        that is

        automatically applied to future invoices and payments using the
        `customer_balance` payment method.

        Customers can fund this balance by initiating a bank transfer to any
        account in the

        `financial_addresses` field.

        Related guide: [Customer balance funding
        instructions](https://stripe.com/docs/payments/customer-balance/funding-instructions)
      properties:
        bank_transfer:
          $ref: '#/components/schemas/funding_instructions_bank_transfer'
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          maxLength: 5000
          type: string
        funding_type:
          description: The `funding_type` of the returned instructions
          enum:
            - bank_transfer
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
            - funding_instructions
          type: string
      required:
        - bank_transfer
        - currency
        - funding_type
        - livemode
        - object
      title: CustomerBalanceFundingInstructionsCustomerBalanceFundingInstructions
      type: object
      x-expandableFields:
        - bank_transfer
      x-resourceId: funding_instructions
    payment_method:
      description: >-
        PaymentMethod objects represent your customer's payment instruments.

        You can use them with
        [PaymentIntents](https://stripe.com/docs/payments/payment-intents) to
        collect payments or save them to

        Customer objects to store instrument details for future payments.


        Related guides: [Payment
        Methods](https://stripe.com/docs/payments/payment-methods) and [More
        Payment
        Scenarios](https://stripe.com/docs/payments/more-payment-scenarios).
      properties:
        acss_debit:
          $ref: '#/components/schemas/payment_method_acss_debit'
        affirm:
          $ref: '#/components/schemas/payment_method_affirm'
        afterpay_clearpay:
          $ref: '#/components/schemas/payment_method_afterpay_clearpay'
        alipay:
          $ref: '#/components/schemas/payment_flows_private_payment_methods_alipay'
        au_becs_debit:
          $ref: '#/components/schemas/payment_method_au_becs_debit'
        bacs_debit:
          $ref: '#/components/schemas/payment_method_bacs_debit'
        bancontact:
          $ref: '#/components/schemas/payment_method_bancontact'
        billing_details:
          $ref: '#/components/schemas/billing_details'
        blik:
          $ref: '#/components/schemas/payment_method_blik'
        boleto:
          $ref: '#/components/schemas/payment_method_boleto'
        card:
          $ref: '#/components/schemas/payment_method_card'
        card_present:
          $ref: '#/components/schemas/payment_method_card_present'
        cashapp:
          $ref: '#/components/schemas/payment_method_cashapp'
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
          description: >-
            The ID of the Customer to which this PaymentMethod is saved. This
            will not be set when the PaymentMethod has not been saved to a
            Customer.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
        customer_balance:
          $ref: '#/components/schemas/payment_method_customer_balance'
        eps:
          $ref: '#/components/schemas/payment_method_eps'
        fpx:
          $ref: '#/components/schemas/payment_method_fpx'
        giropay:
          $ref: '#/components/schemas/payment_method_giropay'
        grabpay:
          $ref: '#/components/schemas/payment_method_grabpay'
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        ideal:
          $ref: '#/components/schemas/payment_method_ideal'
        interac_present:
          $ref: '#/components/schemas/payment_method_interac_present'
        klarna:
          $ref: '#/components/schemas/payment_method_klarna'
        konbini:
          $ref: '#/components/schemas/payment_method_konbini'
        link:
          $ref: '#/components/schemas/payment_method_link'
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
            - payment_method
          type: string
        oxxo:
          $ref: '#/components/schemas/payment_method_oxxo'
        p24:
          $ref: '#/components/schemas/payment_method_p24'
        paynow:
          $ref: '#/components/schemas/payment_method_paynow'
        paypal:
          $ref: '#/components/schemas/payment_method_paypal'
        pix:
          $ref: '#/components/schemas/payment_method_pix'
        promptpay:
          $ref: '#/components/schemas/payment_method_promptpay'
        radar_options:
          $ref: '#/components/schemas/radar_radar_options'
        revolut_pay:
          $ref: '#/components/schemas/payment_method_revolut_pay'
        sepa_debit:
          $ref: '#/components/schemas/payment_method_sepa_debit'
        sofort:
          $ref: '#/components/schemas/payment_method_sofort'
        type:
          description: >-
            The type of the PaymentMethod. An additional hash is included on the
            PaymentMethod with a name matching this value. It contains
            additional information specific to the PaymentMethod type.
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
            - card_present
            - cashapp
            - customer_balance
            - eps
            - fpx
            - giropay
            - grabpay
            - ideal
            - interac_present
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
          $ref: '#/components/schemas/payment_method_us_bank_account'
        wechat_pay:
          $ref: '#/components/schemas/payment_method_wechat_pay'
        zip:
          $ref: '#/components/schemas/payment_method_zip'
      required:
        - billing_details
        - created
        - id
        - livemode
        - object
        - type
      title: PaymentMethod
      type: object
      x-expandableFields:
        - acss_debit
        - affirm
        - afterpay_clearpay
        - alipay
        - au_becs_debit
        - bacs_debit
        - bancontact
        - billing_details
        - blik
        - boleto
        - card
        - card_present
        - cashapp
        - customer
        - customer_balance
        - eps
        - fpx
        - giropay
        - grabpay
        - ideal
        - interac_present
        - klarna
        - konbini
        - link
        - oxxo
        - p24
        - paynow
        - paypal
        - pix
        - promptpay
        - radar_options
        - revolut_pay
        - sepa_debit
        - sofort
        - us_bank_account
        - wechat_pay
        - zip
      x-resourceId: payment_method
    subscription:
      description: >-
        Subscriptions allow you to charge a customer on a recurring basis.


        Related guide: [Creating
        subscriptions](https://stripe.com/docs/billing/subscriptions/creating)
      properties:
        application:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/application'
            - $ref: '#/components/schemas/deleted_application'
          description: ID of the Connect Application that created the subscription.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/application'
              - $ref: '#/components/schemas/deleted_application'
        application_fee_percent:
          description: >-
            A non-negative decimal between 0 and 100, with at most two decimal
            places. This represents the percentage of the subscription invoice
            total that will be transferred to the application owner's Stripe
            account.
          nullable: true
          type: number
        automatic_tax:
          $ref: '#/components/schemas/subscription_automatic_tax'
        billing_cycle_anchor:
          description: >-
            Determines the date of the first full invoice, and, for plans with
            `month` or `year` intervals, the day of the month for subsequent
            invoices. The timestamp is in UTC format.
          format: unix-time
          type: integer
        billing_thresholds:
          anyOf:
            - $ref: '#/components/schemas/subscription_billing_thresholds'
          description: >-
            Define thresholds at which an invoice will be sent, and the
            subscription advanced to a new billing period
          nullable: true
        cancel_at:
          description: >-
            A date in the future at which the subscription will automatically
            get canceled
          format: unix-time
          nullable: true
          type: integer
        cancel_at_period_end:
          description: >-
            If the subscription has been canceled with the `at_period_end` flag
            set to `true`, `cancel_at_period_end` on the subscription will be
            true. You can use this attribute to determine whether a subscription
            that has a status of active is scheduled to be canceled at the end
            of the current period.
          type: boolean
        canceled_at:
          description: >-
            If the subscription has been canceled, the date of that
            cancellation. If the subscription was canceled with
            `cancel_at_period_end`, `canceled_at` will reflect the time of the
            most recent update request, not the end of the subscription period
            when the subscription is automatically moved to a canceled state.
          format: unix-time
          nullable: true
          type: integer
        cancellation_details:
          anyOf:
            - $ref: '#/components/schemas/cancellation_details'
          description: Details about why this subscription was cancelled
          nullable: true
        collection_method:
          description: >-
            Either `charge_automatically`, or `send_invoice`. When charging
            automatically, Stripe will attempt to pay this subscription at the
            end of the cycle using the default source attached to the customer.
            When sending an invoice, Stripe will email your customer an invoice
            with payment instructions and mark the subscription as `active`.
          enum:
            - charge_automatically
            - send_invoice
          type: string
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
        current_period_end:
          description: >-
            End of the current period that the subscription has been invoiced
            for. At the end of this period, a new invoice will be created.
          format: unix-time
          type: integer
        current_period_start:
          description: >-
            Start of the current period that the subscription has been invoiced
            for.
          format: unix-time
          type: integer
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
            - $ref: '#/components/schemas/deleted_customer'
          description: ID of the customer who owns the subscription.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
              - $ref: '#/components/schemas/deleted_customer'
        days_until_due:
          description: >-
            Number of days a customer has to pay invoices generated by this
            subscription. This value will be `null` for subscriptions where
            `collection_method=charge_automatically`.
          nullable: true
          type: integer
        default_payment_method:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/payment_method'
          description: >-
            ID of the default payment method for the subscription. It must
            belong to the customer associated with the subscription. This takes
            precedence over `default_source`. If neither are set, invoices will
            use the customer's
            [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method)
            or
            [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/payment_method'
        default_source:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/bank_account'
            - $ref: '#/components/schemas/card'
            - $ref: '#/components/schemas/source'
          description: >-
            ID of the default payment source for the subscription. It must
            belong to the customer associated with the subscription and be in a
            chargeable state. If `default_payment_method` is also set,
            `default_payment_method` will take precedence. If neither are set,
            invoices will use the customer's
            [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method)
            or
            [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/bank_account'
              - $ref: '#/components/schemas/card'
              - $ref: '#/components/schemas/source'
          x-stripeBypassValidation: true
        default_tax_rates:
          description: >-
            The tax rates that will apply to any subscription item that does not
            have `tax_rates` set. Invoices created will have their
            `default_tax_rates` populated from the subscription.
          items:
            $ref: '#/components/schemas/tax_rate'
          nullable: true
          type: array
        description:
          description: >-
            The subscription's description, meant to be displayable to the
            customer. Use this field to optionally store an explanation of the
            subscription for rendering in Stripe surfaces and certain local
            payment methods UIs.
          maxLength: 500
          nullable: true
          type: string
        discount:
          anyOf:
            - $ref: '#/components/schemas/discount'
          description: >-
            Describes the current discount applied to this subscription, if
            there is one. When billing, a discount applied to a subscription
            overrides a discount applied on a customer-wide basis.
          nullable: true
        ended_at:
          description: 'If the subscription has ended, the date the subscription ended.'
          format: unix-time
          nullable: true
          type: integer
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        items:
          description: 'List of subscription items, each with an attached price.'
          properties:
            data:
              description: Details about each object.
              items:
                $ref: '#/components/schemas/subscription_item'
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
          title: SubscriptionItemList
          type: object
          x-expandableFields:
            - data
        latest_invoice:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/invoice'
          description: The most recent invoice this subscription has generated.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/invoice'
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
        next_pending_invoice_item_invoice:
          description: >-
            Specifies the approximate timestamp on which any pending invoice
            items will be billed according to the schedule provided at
            `pending_invoice_item_interval`.
          format: unix-time
          nullable: true
          type: integer
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - subscription
          type: string
        on_behalf_of:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/account'
          description: >-
            The account (if any) the charge was made on behalf of for charges
            associated with this subscription. See the Connect documentation for
            details.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/account'
        pause_collection:
          anyOf:
            - $ref: '#/components/schemas/subscriptions_resource_pause_collection'
          description: >-
            If specified, payment collection for this subscription will be
            paused.
          nullable: true
        payment_settings:
          anyOf:
            - $ref: '#/components/schemas/subscriptions_resource_payment_settings'
          description: Payment settings passed on to invoices created by the subscription.
          nullable: true
        pending_invoice_item_interval:
          anyOf:
            - $ref: '#/components/schemas/subscription_pending_invoice_item_interval'
          description: >-
            Specifies an interval for how often to bill for any pending invoice
            items. It is analogous to calling [Create an
            invoice](https://stripe.com/docs/api#create_invoice) for the given
            subscription at the specified interval.
          nullable: true
        pending_setup_intent:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/setup_intent'
          description: >-
            You can use this
            [SetupIntent](https://stripe.com/docs/api/setup_intents) to collect
            user authentication when creating a subscription without immediate
            payment or updating a subscription's payment method, allowing you to
            optimize for off-session payments. Learn more in the [SCA Migration
            Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication#scenario-2).
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/setup_intent'
        pending_update:
          anyOf:
            - $ref: '#/components/schemas/subscriptions_resource_pending_update'
          description: >-
            If specified, [pending
            updates](https://stripe.com/docs/billing/subscriptions/pending-updates)
            that will be applied to the subscription once the `latest_invoice`
            has been paid.
          nullable: true
        schedule:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/subscription_schedule'
          description: The schedule attached to the subscription
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/subscription_schedule'
        start_date:
          description: >-
            Date when the subscription was first created. The date might differ
            from the `created` date due to backdating.
          format: unix-time
          type: integer
        status:
          description: >-
            Possible values are `incomplete`, `incomplete_expired`, `trialing`,
            `active`, `past_due`, `canceled`, or `unpaid`. 


            For `collection_method=charge_automatically` a subscription moves
            into `incomplete` if the initial payment attempt fails. A
            subscription in this state can only have metadata and default_source
            updated. Once the first invoice is paid, the subscription moves into
            an `active` state. If the first invoice is not paid within 23 hours,
            the subscription transitions to `incomplete_expired`. This is a
            terminal state, the open invoice will be voided and no further
            invoices will be generated. 


            A subscription that is currently in a trial period is `trialing` and
            moves to `active` when the trial period is over. 


            If subscription `collection_method=charge_automatically`, it becomes
            `past_due` when payment is required but cannot be paid (due to
            failed payment or awaiting additional user actions). Once Stripe has
            exhausted all payment retry attempts, the subscription will become
            `canceled` or `unpaid` (depending on your subscriptions settings). 


            If subscription `collection_method=send_invoice` it becomes
            `past_due` when its invoice is not paid by the due date, and
            `canceled` or `unpaid` if it is still not paid by an additional
            deadline after that. Note that when a subscription has a status of
            `unpaid`, no subsequent invoices will be attempted (invoices will be
            created, but then immediately automatically closed). After receiving
            updated payment information from a customer, you may choose to
            reopen and pay their closed invoices.
          enum:
            - active
            - canceled
            - incomplete
            - incomplete_expired
            - past_due
            - paused
            - trialing
            - unpaid
          type: string
        test_clock:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/test_helpers.test_clock'
          description: ID of the test clock this subscription belongs to.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/test_helpers.test_clock'
        transfer_data:
          anyOf:
            - $ref: '#/components/schemas/subscription_transfer_data'
          description: >-
            The account (if any) the subscription's payments will be attributed
            to for tax reporting, and where funds from each payment will be
            transferred to for each of the subscription's invoices.
          nullable: true
        trial_end:
          description: 'If the subscription has a trial, the end of that trial.'
          format: unix-time
          nullable: true
          type: integer
        trial_settings:
          anyOf:
            - $ref: >-
                #/components/schemas/subscriptions_trials_resource_trial_settings
          description: Settings related to subscription trials.
          nullable: true
        trial_start:
          description: 'If the subscription has a trial, the beginning of that trial.'
          format: unix-time
          nullable: true
          type: integer
      required:
        - automatic_tax
        - billing_cycle_anchor
        - cancel_at_period_end
        - collection_method
        - created
        - currency
        - current_period_end
        - current_period_start
        - customer
        - id
        - items
        - livemode
        - metadata
        - object
        - start_date
        - status
      title: Subscription
      type: object
      x-expandableFields:
        - application
        - automatic_tax
        - billing_thresholds
        - cancellation_details
        - customer
        - default_payment_method
        - default_source
        - default_tax_rates
        - discount
        - items
        - latest_invoice
        - on_behalf_of
        - pause_collection
        - payment_settings
        - pending_invoice_item_interval
        - pending_setup_intent
        - pending_update
        - schedule
        - test_clock
        - transfer_data
        - trial_settings
      x-resourceId: subscription
    tax_id:
      description: >-
        You can add one or multiple tax IDs to a
        [customer](https://stripe.com/docs/api/customers) or account.

        Customer and account tax IDs get displayed on related invoices and
        credit notes.


        Related guides: [Customer tax identification
        numbers](https://stripe.com/docs/billing/taxes/tax-ids), [Account tax
        IDs](https://stripe.com/docs/invoicing/connect#account-tax-ids)
      properties:
        country:
          description: Two-letter ISO code representing the country of the tax ID.
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
          description: ID of the customer.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
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
            - tax_id
          type: string
        type:
          description: >-
            Type of the tax ID, one of `ad_nrt`, `ae_trn`, `ar_cuit`, `au_abn`,
            `au_arn`, `bg_uic`, `bo_tin`, `br_cnpj`, `br_cpf`, `ca_bn`,
            `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`,
            `ch_vat`, `cl_tin`, `cn_tin`, `co_nit`, `cr_tin`, `do_rcn`,
            `ec_ruc`, `eg_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`,
            `ge_vat`, `hk_br`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`,
            `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kr_brn`, `li_uid`,
            `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`,
            `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`,
            `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sv_nit`, `th_vat`,
            `tr_tin`, `tw_vat`, `ua_vat`, `us_ein`, `uy_ruc`, `ve_rif`,
            `vn_tin`, or `za_vat`. Note that some legacy tax IDs have type
            `unknown`
          enum:
            - ad_nrt
            - ae_trn
            - ar_cuit
            - au_abn
            - au_arn
            - bg_uic
            - bo_tin
            - br_cnpj
            - br_cpf
            - ca_bn
            - ca_gst_hst
            - ca_pst_bc
            - ca_pst_mb
            - ca_pst_sk
            - ca_qst
            - ch_vat
            - cl_tin
            - cn_tin
            - co_nit
            - cr_tin
            - do_rcn
            - ec_ruc
            - eg_tin
            - es_cif
            - eu_oss_vat
            - eu_vat
            - gb_vat
            - ge_vat
            - hk_br
            - hu_tin
            - id_npwp
            - il_vat
            - in_gst
            - is_vat
            - jp_cn
            - jp_rn
            - jp_trn
            - ke_pin
            - kr_brn
            - li_uid
            - mx_rfc
            - my_frp
            - my_itn
            - my_sst
            - no_vat
            - nz_gst
            - pe_ruc
            - ph_tin
            - ro_tin
            - rs_pib
            - ru_inn
            - ru_kpp
            - sa_vat
            - sg_gst
            - sg_uen
            - si_tin
            - sv_nit
            - th_vat
            - tr_tin
            - tw_vat
            - ua_vat
            - unknown
            - us_ein
            - uy_ruc
            - ve_rif
            - vn_tin
            - za_vat
          type: string
        value:
          description: Value of the tax ID.
          maxLength: 5000
          type: string
        verification:
          anyOf:
            - $ref: '#/components/schemas/tax_id_verification'
          description: Tax ID verification information.
          nullable: true
      required:
        - created
        - id
        - livemode
        - object
        - type
        - value
      title: tax_id
      type: object
      x-expandableFields:
        - customer
        - verification
      x-resourceId: tax_id
    deleted_tax_id:
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
            - tax_id
          type: string
      required:
        - deleted
        - id
        - object
      title: deleted_tax_id
      type: object
      x-expandableFields: []
      x-resourceId: deleted_tax_id
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
  - name: Customers
    description: Needs a description.
  - name: Search
    description: Needs a description.
  - name: Transactions
    description: Needs a description.
  - name: Bank
    description: Needs a description.
  - name: Accounts
    description: Needs a description.
  - name: Verify
    description: Needs a description.
  - name: Cards
    description: Needs a description.
  - name: Cash
    description: Needs a description.
  - name: Balances
    description: Needs a description.
  - name: Discounts
    description: Needs a description.
  - name: Funding
    description: Needs a description.
  - name: Instructions
    description: Needs a description.
  - name: Payments
    description: Needs a description.
  - name: Methods
    description: Needs a description.
  - name: Sources
    description: Needs a description.
  - name: Subscriptions
    description: Needs a description.
  - name: Discount
    description: Needs a description.
  - name: Taxes
    description: Needs a description.
---