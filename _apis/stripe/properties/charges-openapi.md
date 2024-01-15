---
openapi: 3.0.0
info:
  title: Stripe Charges API
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
  /v1/charges:
    get:
      description: >-
        <p>Returns a list of charges you’ve previously created. The charges are
        returned in sorted order, with the most recent charges appearing
        first.</p>
      operationId: GetCharges
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
        - description: Only return charges for the customer specified by this customer ID.
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
            Only return charges that were created by the PaymentIntent specified
            by this PaymentIntent ID.
          in: query
          name: payment_intent
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
        - description: Only return charges for this transfer group.
          in: query
          name: transfer_group
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
                      $ref: '#/components/schemas/charge'
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
                    pattern: ^/v1/charges
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: ChargeList
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
      summary: Retrieve Charges
      tags:
        - Charges
    post:
      description: >-
        <p>Use the <a href="/docs/api/payment_intents">Payment Intents API</a>
        to initiate a new payment instead

        of using this method. Confirmation of the PaymentIntent creates the
        <code>Charge</code>

        object used to request payment, so this method is limited to legacy
        integrations.</p>
      operationId: PostCharges
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              card:
                explode: true
                style: deepObject
              destination:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              radar_options:
                explode: true
                style: deepObject
              shipping:
                explode: true
                style: deepObject
              transfer_data:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: >-
                    Amount intended to be collected by this payment. A positive
                    integer representing how much to charge in the [smallest
                    currency
                    unit](https://stripe.com/docs/currencies#zero-decimal)
                    (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a
                    zero-decimal currency). The minimum amount is $0.50 US or
                    [equivalent in charge
                    currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts).
                    The amount value supports up to eight digits (e.g., a value
                    of 99999999 for a USD charge of $999,999.99).
                  type: integer
                application_fee:
                  type: integer
                application_fee_amount:
                  description: >-
                    A fee in cents (or local equivalent) that will be applied to
                    the charge and transferred to the application owner's Stripe
                    account. The request must be made with an OAuth key or the
                    `Stripe-Account` header in order to take an application fee.
                    For more information, see the application fees
                    [documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees).
                  type: integer
                capture:
                  description: >-
                    Whether to immediately capture the charge. Defaults to
                    `true`. When `false`, the charge issues an authorization (or
                    pre-authorization), and will need to be
                    [captured](https://stripe.com/docs/api#capture_charge)
                    later. Uncaptured charges expire after a set number of days
                    (7 by default). For more information, see the [authorizing
                    charges and settling
                    later](https://stripe.com/docs/charges/placing-a-hold)
                    documentation.
                  type: boolean
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
                currency:
                  description: >-
                    Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies).
                  type: string
                customer:
                  description: >-
                    The ID of an existing customer that will be charged in this
                    request.
                  maxLength: 500
                  type: string
                description:
                  description: >-
                    An arbitrary string which you can attach to a `Charge`
                    object. It is displayed when in the web interface alongside
                    the charge. Note that if you use Stripe to send automatic
                    email receipts to your customers, your receipt emails will
                    include the `description` of the charge(s) that they are
                    describing.
                  maxLength: 40000
                  type: string
                destination:
                  anyOf:
                    - properties:
                        account:
                          maxLength: 5000
                          type: string
                        amount:
                          type: integer
                      required:
                        - account
                      title: destination_specs
                      type: object
                    - type: string
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
                on_behalf_of:
                  description: >-
                    The Stripe account ID for which these funds are intended.
                    Automatically set if you use the `destination` parameter.
                    For details, see [Creating Separate Charges and
                    Transfers](https://stripe.com/docs/connect/separate-charges-and-transfers#on-behalf-of).
                  maxLength: 5000
                  type: string
                radar_options:
                  description: >-
                    Options to configure Radar. See [Radar
                    Session](https://stripe.com/docs/radar/radar-session) for
                    more information.
                  properties:
                    session:
                      maxLength: 5000
                      type: string
                  title: radar_options_with_hidden_options
                  type: object
                receipt_email:
                  description: >-
                    The email address to which this charge's
                    [receipt](https://stripe.com/docs/dashboard/receipts) will
                    be sent. The receipt will not be sent until the charge is
                    paid, and no receipts will be sent for test mode charges. If
                    this charge is for a
                    [Customer](https://stripe.com/docs/api/customers/object),
                    the email address specified here will override the
                    customer's email address. If `receipt_email` is specified
                    for a charge in live mode, a receipt will be sent regardless
                    of your [email
                    settings](https://dashboard.stripe.com/account/emails).
                  type: string
                shipping:
                  description: >-
                    Shipping information for the charge. Helps prevent fraud on
                    charges for physical goods.
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
                      title: optional_fields_address
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
                  title: optional_fields_shipping
                  type: object
                source:
                  description: >-
                    A payment source to be charged. This can be the ID of a
                    [card](https://stripe.com/docs/api#cards) (i.e., credit or
                    debit card), a [bank
                    account](https://stripe.com/docs/api#bank_accounts), a
                    [source](https://stripe.com/docs/api#sources), a
                    [token](https://stripe.com/docs/api#tokens), or a [connected
                    account](https://stripe.com/docs/connect/account-debits#charging-a-connected-account).
                    For certain sourcesnamely,
                    [cards](https://stripe.com/docs/api#cards), [bank
                    accounts](https://stripe.com/docs/api#bank_accounts), and
                    attached [sources](https://stripe.com/docs/api#sources)you
                    must also pass the ID of the associated customer.
                  maxLength: 5000
                  type: string
                  x-stripeBypassValidation: true
                statement_descriptor:
                  description: >-
                    For card charges, use `statement_descriptor_suffix` instead.
                    Otherwise, you can use this value as the complete
                    description of a charge on your customers’ statements. Must
                    contain at least one letter, maximum 22 characters.
                  maxLength: 22
                  type: string
                statement_descriptor_suffix:
                  description: >-
                    Provides information about the charge that customers see on
                    their statements. Concatenated with the prefix (shortened
                    descriptor) or statement descriptor that’s set on the
                    account to form the complete statement descriptor. Maximum
                    22 characters for the concatenated descriptor.
                  maxLength: 22
                  type: string
                transfer_data:
                  description: >-
                    An optional dictionary including the account to
                    automatically transfer to as part of a destination charge.
                    [See the Connect
                    documentation](https://stripe.com/docs/connect/destination-charges)
                    for details.
                  properties:
                    amount:
                      type: integer
                    destination:
                      maxLength: 5000
                      type: string
                  required:
                    - destination
                  title: transfer_data_specs
                  type: object
                transfer_group:
                  description: >-
                    A string that identifies this transaction as part of a
                    group. For details, see [Grouping
                    transactions](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options).
                  type: string
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/charge'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Charge
      tags:
        - Charges
  /v1/charges/search:
    get:
      description: >-
        <p>Search for charges you’ve previously created using Stripe’s <a
        href="/docs/search#search-query-language">Search Query Language</a>.

        Don’t use search in read-after-write flows where strict consistency is
        necessary. Under normal operating

        conditions, data is searchable in less than a minute. Occasionally,
        propagation of new or updated data can be up

        to an hour behind during outages. Search functionality is not available
        to merchants in India.</p>
      operationId: GetChargesSearch
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
            charges](https://stripe.com/docs/search#query-fields-for-charges).
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
                      $ref: '#/components/schemas/charge'
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
      summary: Search Charges
      tags:
        - Search
        - Charges
  '/v1/charges/{charge}':
    get:
      description: >-
        <p>Retrieves the details of a charge that has previously been created.
        Supply the unique charge ID that was returned from your previous
        request, and Stripe will return the corresponding charge information.
        The same information is returned when creating or refunding the
        charge.</p>
      operationId: GetChargesCharge
      parameters:
        - in: path
          name: charge
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
                $ref: '#/components/schemas/charge'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Charge
      tags:
        - Charges
    post:
      description: >-
        <p>Updates the specified charge by setting the values of the parameters
        passed. Any parameters not provided will be left unchanged.</p>
      operationId: PostChargesCharge
      parameters:
        - in: path
          name: charge
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
              fraud_details:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              shipping:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                customer:
                  description: >-
                    The ID of an existing customer that will be associated with
                    this request. This field may only be updated if there is no
                    existing associated customer with this charge.
                  maxLength: 5000
                  type: string
                description:
                  description: >-
                    An arbitrary string which you can attach to a charge object.
                    It is displayed when in the web interface alongside the
                    charge. Note that if you use Stripe to send automatic email
                    receipts to your customers, your receipt emails will include
                    the `description` of the charge(s) that they are describing.
                  maxLength: 40000
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                fraud_details:
                  description: >-
                    A set of key-value pairs you can attach to a charge giving
                    information about its riskiness. If you believe a charge is
                    fraudulent, include a `user_report` key with a value of
                    `fraudulent`. If you believe a charge is safe, include a
                    `user_report` key with a value of `safe`. Stripe will use
                    the information you send to improve our fraud detection
                    algorithms.
                  properties:
                    user_report:
                      enum:
                        - ''
                        - fraudulent
                        - safe
                      maxLength: 5000
                      type: string
                  required:
                    - user_report
                  title: fraud_details
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
                receipt_email:
                  description: >-
                    This is the email address that the receipt for this charge
                    will be sent to. If this field is updated, then a new email
                    receipt will be sent to the updated address.
                  maxLength: 5000
                  type: string
                shipping:
                  description: >-
                    Shipping information for the charge. Helps prevent fraud on
                    charges for physical goods.
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
                      title: optional_fields_address
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
                  title: optional_fields_shipping
                  type: object
                transfer_group:
                  description: >-
                    A string that identifies this transaction as part of a
                    group. `transfer_group` may only be provided if it has not
                    been set. See the [Connect
                    documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options)
                    for details.
                  type: string
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/charge'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Charge
      tags:
        - Charges
  '/v1/charges/{charge}/capture':
    post:
      description: >-
        <p>Capture the payment of an existing, uncaptured charge that was
        created with the <code>capture</code> option set to false.</p>


        <p>Uncaptured payments expire a set number of days after they are
        created (<a href="/docs/charges/placing-a-hold">7 by default</a>), after
        which they are marked as refunded and capture attempts will fail.</p>


        <p>Don’t use this method to capture a PaymentIntent-initiated charge.
        Use <a href="/docs/api/payment_intents/capture">Capture a
        PaymentIntent</a>.</p>
      operationId: PostChargesChargeCapture
      parameters:
        - in: path
          name: charge
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
              transfer_data:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: >-
                    The amount to capture, which must be less than or equal to
                    the original amount. Any additional amount will be
                    automatically refunded.
                  type: integer
                application_fee:
                  description: An application fee to add on to this charge.
                  type: integer
                application_fee_amount:
                  description: >-
                    An application fee amount to add on to this charge, which
                    must be less than or equal to the original amount.
                  type: integer
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                receipt_email:
                  description: >-
                    The email address to send this charge's receipt to. This
                    will override the previously-specified email address for
                    this charge, if one was set. Receipts will not be sent in
                    test mode.
                  type: string
                statement_descriptor:
                  description: >-
                    For card charges, use `statement_descriptor_suffix` instead.
                    Otherwise, you can use this value as the complete
                    description of a charge on your customers’ statements. Must
                    contain at least one letter, maximum 22 characters.
                  maxLength: 22
                  type: string
                statement_descriptor_suffix:
                  description: >-
                    Provides information about the charge that customers see on
                    their statements. Concatenated with the prefix (shortened
                    descriptor) or statement descriptor that’s set on the
                    account to form the complete statement descriptor. Maximum
                    22 characters for the concatenated descriptor.
                  maxLength: 22
                  type: string
                transfer_data:
                  description: >-
                    An optional dictionary including the account to
                    automatically transfer to as part of a destination charge.
                    [See the Connect
                    documentation](https://stripe.com/docs/connect/destination-charges)
                    for details.
                  properties:
                    amount:
                      type: integer
                  title: transfer_data_specs
                  type: object
                transfer_group:
                  description: >-
                    A string that identifies this transaction as part of a
                    group. `transfer_group` may only be provided if it has not
                    been set. See the [Connect
                    documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options)
                    for details.
                  type: string
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/charge'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Capture Charge
      tags:
        - Capture
        - Charges
  '/v1/charges/{charge}/dispute':
    get:
      description: <p>Retrieve a dispute for a specified charge.</p>
      operationId: GetChargesChargeDispute
      parameters:
        - in: path
          name: charge
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
                $ref: '#/components/schemas/dispute'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Charge Dispute
      tags:
        - Charges
        - Dispute
    post:
      description: ''
      operationId: PostChargesChargeDispute
      parameters:
        - in: path
          name: charge
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              evidence:
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
                evidence:
                  description: >-
                    Evidence to upload, to respond to a dispute. Updating any
                    field in the hash will submit all fields in the hash for
                    review. The combined character count of all fields is
                    limited to 150,000.
                  properties:
                    access_activity_log:
                      maxLength: 20000
                      type: string
                    billing_address:
                      maxLength: 5000
                      type: string
                    cancellation_policy:
                      type: string
                    cancellation_policy_disclosure:
                      maxLength: 20000
                      type: string
                    cancellation_rebuttal:
                      maxLength: 20000
                      type: string
                    customer_communication:
                      type: string
                    customer_email_address:
                      maxLength: 5000
                      type: string
                    customer_name:
                      maxLength: 5000
                      type: string
                    customer_purchase_ip:
                      maxLength: 5000
                      type: string
                    customer_signature:
                      type: string
                    duplicate_charge_documentation:
                      type: string
                    duplicate_charge_explanation:
                      maxLength: 20000
                      type: string
                    duplicate_charge_id:
                      maxLength: 5000
                      type: string
                    product_description:
                      maxLength: 20000
                      type: string
                    receipt:
                      type: string
                    refund_policy:
                      type: string
                    refund_policy_disclosure:
                      maxLength: 20000
                      type: string
                    refund_refusal_explanation:
                      maxLength: 20000
                      type: string
                    service_date:
                      maxLength: 5000
                      type: string
                    service_documentation:
                      type: string
                    shipping_address:
                      maxLength: 5000
                      type: string
                    shipping_carrier:
                      maxLength: 5000
                      type: string
                    shipping_date:
                      maxLength: 5000
                      type: string
                    shipping_documentation:
                      type: string
                    shipping_tracking_number:
                      maxLength: 5000
                      type: string
                    uncategorized_file:
                      type: string
                    uncategorized_text:
                      maxLength: 20000
                      type: string
                  title: dispute_evidence_params
                  type: object
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
                submit:
                  description: >-
                    Whether to immediately submit evidence to the bank. If
                    `false`, evidence is staged on the dispute. Staged evidence
                    is visible in the API and Dashboard, and can be submitted to
                    the bank by making another request with this attribute set
                    to `true` (the default).
                  type: boolean
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/dispute'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Charge Dispute
      tags:
        - Charges
        - Dispute
  '/v1/charges/{charge}/dispute/close':
    post:
      description: ''
      operationId: PostChargesChargeDisputeClose
      parameters:
        - in: path
          name: charge
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
                $ref: '#/components/schemas/dispute'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Close Charge Dispute
      tags:
        - Charges
        - Dispute
        - Closed
  '/v1/charges/{charge}/refund':
    post:
      description: >-
        <p>When you create a new refund, you must specify either a Charge or a
        PaymentIntent object.</p>


        <p>This action refunds a previously created charge that’s not refunded
        yet.

        Funds are refunded to the credit or debit card that’s originally
        charged.</p>


        <p>You can optionally refund only part of a charge.

        You can repeat this until the entire charge is refunded.</p>


        <p>After you entirely refund a charge, you can’t refund it again.

        This method raises an error when it’s called on an already-refunded
        charge,

        or when you attempt to refund more money than is left on a charge.</p>
      operationId: PostChargesChargeRefund
      parameters:
        - description: The identifier of the charge to refund.
          in: path
          name: charge
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
                    A positive integer in cents (or local equivalent)
                    representing how much of this charge to refund. Can refund
                    only up to the remaining, unrefunded amount of the charge.
                  type: integer
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                instructions_email:
                  description: >-
                    For payment methods without native refund support (e.g.,
                    Konbini, PromptPay), use this email from the customer to
                    receive refund instructions.
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
                payment_intent:
                  description: The identifier of the PaymentIntent to refund.
                  maxLength: 5000
                  type: string
                reason:
                  description: >-
                    String indicating the reason for the refund. If set,
                    possible values are `duplicate`, `fraudulent`, and
                    `requested_by_customer`. If you believe the charge to be
                    fraudulent, specifying `fraudulent` as the reason will add
                    the associated card and email to your [block
                    lists](https://stripe.com/docs/radar/lists), and will also
                    help us improve our fraud detection algorithms.
                  enum:
                    - duplicate
                    - fraudulent
                    - requested_by_customer
                  maxLength: 5000
                  type: string
                refund_application_fee:
                  description: >-
                    Boolean indicating whether the application fee should be
                    refunded when refunding this charge. If a full charge refund
                    is given, the full application fee will be refunded.
                    Otherwise, the application fee will be refunded in an amount
                    proportional to the amount of the charge refunded. An
                    application fee can be refunded only by the application that
                    created the charge.
                  type: boolean
                reverse_transfer:
                  description: >-
                    Boolean indicating whether the transfer should be reversed
                    when refunding this charge. The transfer will be reversed
                    proportionally to the amount being refunded (either the
                    entire or partial amount).<br><br>A transfer can be reversed
                    only by the application that created the charge.
                  type: boolean
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/charge'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Refund Charge
      tags:
        - Refunds
        - Charges
  '/v1/charges/{charge}/refunds':
    get:
      description: >-
        <p>You can see a list of the refunds belonging to a specific charge.
        Note that the 10 most recent refunds are always available by default on
        the charge object. If you need more than those 10, you can use this API
        method and the <code>limit</code> and <code>starting_after</code>
        parameters to page through additional refunds.</p>
      operationId: GetChargesChargeRefunds
      parameters:
        - in: path
          name: charge
          required: true
          schema:
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
                      $ref: '#/components/schemas/refund'
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
                title: RefundList
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
      summary: Retrieve Charge Refunds
      tags:
        - Refunds
        - Charges
    post:
      description: >-
        <p>When you create a new refund, you must specify a Charge or a
        PaymentIntent object on which to create it.</p>


        <p>Creating a new refund will refund a charge that has previously been
        created but not yet refunded.

        Funds will be refunded to the credit or debit card that was originally
        charged.</p>


        <p>You can optionally refund only part of a charge.

        You can do so multiple times, until the entire charge has been
        refunded.</p>


        <p>Once entirely refunded, a charge can’t be refunded again.

        This method will raise an error when called on an already-refunded
        charge,

        or when trying to refund more money than is left on a charge.</p>
      operationId: PostChargesChargeRefunds
      parameters:
        - description: The identifier of the charge to refund.
          in: path
          name: charge
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
                  type: integer
                currency:
                  description: >-
                    Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies).
                  type: string
                customer:
                  description: Customer whose customer balance to refund from.
                  maxLength: 5000
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                instructions_email:
                  description: >-
                    For payment methods without native refund support (e.g.,
                    Konbini, PromptPay), use this email from the customer to
                    receive refund instructions.
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
                origin:
                  description: Origin of the refund
                  enum:
                    - customer_balance
                  type: string
                payment_intent:
                  description: The identifier of the PaymentIntent to refund.
                  maxLength: 5000
                  type: string
                reason:
                  description: >-
                    String indicating the reason for the refund. If set,
                    possible values are `duplicate`, `fraudulent`, and
                    `requested_by_customer`. If you believe the charge to be
                    fraudulent, specifying `fraudulent` as the reason will add
                    the associated card and email to your [block
                    lists](https://stripe.com/docs/radar/lists), and will also
                    help us improve our fraud detection algorithms.
                  enum:
                    - duplicate
                    - fraudulent
                    - requested_by_customer
                  maxLength: 5000
                  type: string
                refund_application_fee:
                  description: >-
                    Boolean indicating whether the application fee should be
                    refunded when refunding this charge. If a full charge refund
                    is given, the full application fee will be refunded.
                    Otherwise, the application fee will be refunded in an amount
                    proportional to the amount of the charge refunded. An
                    application fee can be refunded only by the application that
                    created the charge.
                  type: boolean
                reverse_transfer:
                  description: >-
                    Boolean indicating whether the transfer should be reversed
                    when refunding this charge. The transfer will be reversed
                    proportionally to the amount being refunded (either the
                    entire or partial amount).<br><br>A transfer can be reversed
                    only by the application that created the charge.
                  type: boolean
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/refund'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Charge Refunds
      tags:
        - Refunds
        - Charges
  '/v1/charges/{charge}/refunds/{refund}':
    get:
      description: <p>Retrieves the details of an existing refund.</p>
      operationId: GetChargesChargeRefundsRefund
      parameters:
        - in: path
          name: charge
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
        - in: path
          name: refund
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
                $ref: '#/components/schemas/refund'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Charge Refund
      tags:
        - Refunds
        - Charges
    post:
      description: <p>Update a specified refund.</p>
      operationId: PostChargesChargeRefundsRefund
      parameters:
        - in: path
          name: charge
          required: true
          schema:
            type: string
          style: simple
        - in: path
          name: refund
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
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/refund'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Charge Refund
      tags:
        - Refunds
        - Charges
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
    charge:
      description: >-
        The `Charge` object represents a single attempt to move money into your
        Stripe account.

        PaymentIntent confirmation is the most common way to create Charges, but
        transferring

        money to a different Stripe account through Connect also creates
        Charges.

        Some legacy payment flows create Charges directly, which is not
        recommended for new integrations.
      properties:
        amount:
          description: >-
            Amount intended to be collected by this payment. A positive integer
            representing how much to charge in the [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100
            cents to charge $1.00 or 100 to charge ¥100, a zero-decimal
            currency). The minimum amount is $0.50 US or [equivalent in charge
            currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts).
            The amount value supports up to eight digits (e.g., a value of
            99999999 for a USD charge of $999,999.99).
          type: integer
        amount_captured:
          description: >-
            Amount in cents (or local equivalent) captured (can be less than the
            amount attribute on the charge if a partial capture was made).
          type: integer
        amount_refunded:
          description: >-
            Amount in cents (or local equivalent) refunded (can be less than the
            amount attribute on the charge if a partial refund was issued).
          type: integer
        application:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/application'
          description: ID of the Connect application that created the charge.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/application'
        application_fee:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/application_fee'
          description: >-
            The application fee (if any) for the charge. [See the Connect
            documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees)
            for details.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/application_fee'
        application_fee_amount:
          description: >-
            The amount of the application fee (if any) requested for the charge.
            [See the Connect
            documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees)
            for details.
          nullable: true
          type: integer
        balance_transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/balance_transaction'
          description: >-
            ID of the balance transaction that describes the impact of this
            charge on your account balance (not including refunds or disputes).
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/balance_transaction'
        billing_details:
          $ref: '#/components/schemas/billing_details'
        calculated_statement_descriptor:
          description: >-
            The full statement descriptor that is passed to card networks, and
            that is displayed on your customers' credit card and bank
            statements. Allows you to see what the statement descriptor looks
            like after the static and dynamic portions are combined.
          maxLength: 5000
          nullable: true
          type: string
        captured:
          description: >-
            If the charge was created without capturing, this Boolean represents
            whether it is still uncaptured or has since been captured.
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
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
            - $ref: '#/components/schemas/deleted_customer'
          description: ID of the customer this charge is for if one exists.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
              - $ref: '#/components/schemas/deleted_customer'
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 40000
          nullable: true
          type: string
        disputed:
          description: Whether the charge has been disputed.
          type: boolean
        failure_balance_transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/balance_transaction'
          description: >-
            ID of the balance transaction that describes the reversal of the
            balance on your account due to payment failure.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/balance_transaction'
        failure_code:
          description: >-
            Error code explaining reason for charge failure if available (see
            [the errors section](https://stripe.com/docs/error-codes) for a list
            of codes).
          maxLength: 5000
          nullable: true
          type: string
        failure_message:
          description: >-
            Message to user further explaining reason for charge failure if
            available.
          maxLength: 5000
          nullable: true
          type: string
        fraud_details:
          anyOf:
            - $ref: '#/components/schemas/charge_fraud_details'
          description: Information on fraud assessments for the charge.
          nullable: true
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        invoice:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/invoice'
          description: ID of the invoice this charge is for if one exists.
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
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - charge
          type: string
        on_behalf_of:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/account'
          description: >-
            The account (if any) the charge was made on behalf of without
            triggering an automatic transfer. See the [Connect
            documentation](https://stripe.com/docs/connect/separate-charges-and-transfers)
            for details.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/account'
        outcome:
          anyOf:
            - $ref: '#/components/schemas/charge_outcome'
          description: >-
            Details about whether the payment was accepted, and why. See
            [understanding declines](https://stripe.com/docs/declines) for
            details.
          nullable: true
        paid:
          description: >-
            `true` if the charge succeeded, or was successfully authorized for
            later capture.
          type: boolean
        payment_intent:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/payment_intent'
          description: 'ID of the PaymentIntent associated with this charge, if one exists.'
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/payment_intent'
        payment_method:
          description: ID of the payment method used in this charge.
          maxLength: 5000
          nullable: true
          type: string
        payment_method_details:
          anyOf:
            - $ref: '#/components/schemas/payment_method_details'
          description: Details about the payment method at the time of the transaction.
          nullable: true
        radar_options:
          $ref: '#/components/schemas/radar_radar_options'
        receipt_email:
          description: >-
            This is the email address that the receipt for this charge was sent
            to.
          maxLength: 5000
          nullable: true
          type: string
        receipt_number:
          description: >-
            This is the transaction number that appears on email receipts sent
            for this charge. This attribute will be `null` until a receipt has
            been sent.
          maxLength: 5000
          nullable: true
          type: string
        receipt_url:
          description: >-
            This is the URL to view the receipt for this charge. The receipt is
            kept up-to-date to the latest state of the charge, including any
            refunds. If the charge is for an Invoice, the receipt will be
            stylized as an Invoice receipt.
          maxLength: 5000
          nullable: true
          type: string
        refunded:
          description: >-
            Whether the charge has been fully refunded. If the charge is only
            partially refunded, this attribute will still be false.
          type: boolean
        refunds:
          description: A list of refunds that have been applied to the charge.
          nullable: true
          properties:
            data:
              description: Details about each object.
              items:
                $ref: '#/components/schemas/refund'
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
          title: RefundList
          type: object
          x-expandableFields:
            - data
        review:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/review'
          description: ID of the review associated with this charge if one exists.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/review'
        shipping:
          anyOf:
            - $ref: '#/components/schemas/shipping'
          description: Shipping information for the charge.
          nullable: true
        source_transfer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/transfer'
          description: >-
            The transfer ID which created this charge. Only present if the
            charge came from another Stripe account. [See the Connect
            documentation](https://stripe.com/docs/connect/destination-charges)
            for details.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/transfer'
        statement_descriptor:
          description: >-
            For card charges, use `statement_descriptor_suffix` instead.
            Otherwise, you can use this value as the complete description of a
            charge on your customers’ statements. Must contain at least one
            letter, maximum 22 characters.
          maxLength: 5000
          nullable: true
          type: string
        statement_descriptor_suffix:
          description: >-
            Provides information about the charge that customers see on their
            statements. Concatenated with the prefix (shortened descriptor) or
            statement descriptor that’s set on the account to form the complete
            statement descriptor. Maximum 22 characters for the concatenated
            descriptor.
          maxLength: 5000
          nullable: true
          type: string
        status:
          description: >-
            The status of the payment is either `succeeded`, `pending`, or
            `failed`.
          enum:
            - failed
            - pending
            - succeeded
          type: string
        transfer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/transfer'
          description: >-
            ID of the transfer to the `destination` account (only applicable if
            the charge was created using the `destination` parameter).
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/transfer'
        transfer_data:
          anyOf:
            - $ref: '#/components/schemas/charge_transfer_data'
          description: >-
            An optional dictionary including the account to automatically
            transfer to as part of a destination charge. [See the Connect
            documentation](https://stripe.com/docs/connect/destination-charges)
            for details.
          nullable: true
        transfer_group:
          description: >-
            A string that identifies this transaction as part of a group. See
            the [Connect
            documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options)
            for details.
          maxLength: 5000
          nullable: true
          type: string
      required:
        - amount
        - amount_captured
        - amount_refunded
        - billing_details
        - captured
        - created
        - currency
        - disputed
        - id
        - livemode
        - metadata
        - object
        - paid
        - refunded
        - status
      title: Charge
      type: object
      x-expandableFields:
        - application
        - application_fee
        - balance_transaction
        - billing_details
        - customer
        - failure_balance_transaction
        - fraud_details
        - invoice
        - on_behalf_of
        - outcome
        - payment_intent
        - payment_method_details
        - radar_options
        - refunds
        - review
        - shipping
        - source_transfer
        - transfer
        - transfer_data
      x-resourceId: charge
    dispute:
      description: >-
        A dispute occurs when a customer questions your charge with their card
        issuer.

        When this happens, you have the opportunity to respond to the dispute
        with

        evidence that shows that the charge is legitimate.


        Related guide: [Disputes and fraud](https://stripe.com/docs/disputes)
      properties:
        amount:
          description: >-
            Disputed amount. Usually the amount of the charge, but it can differ
            (usually because of currency fluctuation or because only part of the
            order is disputed).
          type: integer
        balance_transactions:
          description: >-
            List of zero, one, or two balance transactions that show funds
            withdrawn and reinstated to your Stripe account as a result of this
            dispute.
          items:
            $ref: '#/components/schemas/balance_transaction'
          type: array
        charge:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/charge'
          description: ID of the charge that's disputed.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/charge'
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
        evidence:
          $ref: '#/components/schemas/dispute_evidence'
        evidence_details:
          $ref: '#/components/schemas/dispute_evidence_details'
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        is_charge_refundable:
          description: >-
            If true, it's still possible to refund the disputed payment. After
            the payment has been fully refunded, no further funds are withdrawn
            from your Stripe account as a result of this dispute.
          type: boolean
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
            - dispute
          type: string
        payment_intent:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/payment_intent'
          description: ID of the PaymentIntent that's disputed.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/payment_intent'
        payment_method_details:
          $ref: '#/components/schemas/dispute_payment_method_details'
        reason:
          description: >-
            Reason given by cardholder for dispute. Possible values are
            `bank_cannot_process`, `check_returned`, `credit_not_processed`,
            `customer_initiated`, `debit_not_authorized`, `duplicate`,
            `fraudulent`, `general`, `incorrect_account_details`,
            `insufficient_funds`, `product_not_received`,
            `product_unacceptable`, `subscription_canceled`, or `unrecognized`.
            Learn more about [dispute
            reasons](https://stripe.com/docs/disputes/categories).
          maxLength: 5000
          type: string
        status:
          description: >-
            Current status of dispute. Possible values are
            `warning_needs_response`, `warning_under_review`, `warning_closed`,
            `needs_response`, `under_review`, `won`, or `lost`.
          enum:
            - lost
            - needs_response
            - under_review
            - warning_closed
            - warning_needs_response
            - warning_under_review
            - won
          type: string
      required:
        - amount
        - balance_transactions
        - charge
        - created
        - currency
        - evidence
        - evidence_details
        - id
        - is_charge_refundable
        - livemode
        - metadata
        - object
        - reason
        - status
      title: Dispute
      type: object
      x-expandableFields:
        - balance_transactions
        - charge
        - evidence
        - evidence_details
        - payment_intent
        - payment_method_details
      x-resourceId: dispute
    refund:
      description: >-
        Refund objects allow you to refund a previously created charge that
        isn't

        refunded yet. Funds are refunded to the credit or debit card that's

        initially charged.


        Related guide: [Refunds](https://stripe.com/docs/refunds)
      properties:
        amount:
          description: 'Amount, in cents (or local equivalent).'
          type: integer
        balance_transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/balance_transaction'
          description: >-
            Balance transaction that describes the impact on your account
            balance.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/balance_transaction'
        charge:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/charge'
          description: ID of the charge that's refunded.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/charge'
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
            An arbitrary string attached to the object. You can use this for
            displaying to users (available on non-card refunds only).
          maxLength: 5000
          type: string
        destination_details:
          $ref: '#/components/schemas/refund_destination_details'
        failure_balance_transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/balance_transaction'
          description: >-
            After the refund fails, this balance transaction describes the
            adjustment made on your account balance that reverses the initial
            balance transaction.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/balance_transaction'
        failure_reason:
          description: >-
            Provides the reason for the refund failure. Possible values are:
            `lost_or_stolen_card`, `expired_or_canceled_card`,
            `charge_for_pending_refund_disputed`, `insufficient_funds`,
            `declined`, `merchant_request`, or `unknown`.
          maxLength: 5000
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        instructions_email:
          description: >-
            For payment methods without native refund support (for example,
            Konbini, PromptPay), provide an email address for the customer to
            receive refund instructions.
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
        next_action:
          $ref: '#/components/schemas/refund_next_action'
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - refund
          type: string
        payment_intent:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/payment_intent'
          description: ID of the PaymentIntent that's refunded.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/payment_intent'
        reason:
          description: >-
            Reason for the refund, which is either user-provided (`duplicate`,
            `fraudulent`, or `requested_by_customer`) or generated by Stripe
            internally (`expired_uncaptured_charge`).
          enum:
            - duplicate
            - expired_uncaptured_charge
            - fraudulent
            - requested_by_customer
          nullable: true
          type: string
          x-stripeBypassValidation: true
        receipt_number:
          description: >-
            This is the transaction number that appears on email receipts sent
            for this refund.
          maxLength: 5000
          nullable: true
          type: string
        source_transfer_reversal:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/transfer_reversal'
          description: >-
            The transfer reversal that's associated with the refund. Only
            present if the charge came from another Stripe account.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/transfer_reversal'
        status:
          description: >-
            Status of the refund. This can be `pending`, `requires_action`,
            `succeeded`, `failed`, or `canceled`. Learn more about [failed
            refunds](https://stripe.com/docs/refunds#failed-refunds).
          maxLength: 5000
          nullable: true
          type: string
        transfer_reversal:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/transfer_reversal'
          description: >-
            This refers to the transfer reversal object if the accompanying
            transfer reverses. This is only applicable if the charge was created
            using the destination parameter.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/transfer_reversal'
      required:
        - amount
        - created
        - currency
        - id
        - object
      title: Refund
      type: object
      x-expandableFields:
        - balance_transaction
        - charge
        - destination_details
        - failure_balance_transaction
        - next_action
        - payment_intent
        - source_transfer_reversal
        - transfer_reversal
      x-resourceId: refund
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
  - name: Charges
    description: Needs a description.
  - name: Search
    description: Needs a description.
  - name: Capture
    description: Needs a description.
  - name: Dispute
    description: Needs a description.
  - name: Closed
    description: Needs a description.
  - name: Refunds
    description: Needs a description.
---