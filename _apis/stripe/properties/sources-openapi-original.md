---
openapi: 3.0.0
info:
  title: Stripe Sources API
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
  /v1/sources:
    post:
      description: <p>Creates a new source object.</p>
      operationId: PostSources
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              mandate:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              owner:
                explode: true
                style: deepObject
              receiver:
                explode: true
                style: deepObject
              redirect:
                explode: true
                style: deepObject
              source_order:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostSourcesRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/source'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/sources/{source}':
    get:
      description: >-
        <p>Retrieves an existing source object. Supply the unique source ID from
        a source creation request and Stripe will return the corresponding
        up-to-date source object information.</p>
      operationId: GetSourcesSource
      parameters:
        - description: >-
            The client secret of the source. Required if a publishable key is
            used to retrieve the source.
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
          name: source
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
              $ref: '#/components/schemas/GetSourcesSourceRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/source'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>Updates the specified source by setting the values of the parameters
        passed. Any parameters not provided will be left unchanged.</p>


        <p>This request accepts the <code>metadata</code> and <code>owner</code>
        as arguments. It is also possible to update type specific information
        for selected payment methods. Please refer to our <a
        href="/docs/sources">payment method guides</a> for more detail.</p>
      operationId: PostSourcesSource
      parameters:
        - in: path
          name: source
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
              mandate:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              owner:
                explode: true
                style: deepObject
              source_order:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostSourcesSourceRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/source'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/sources/{source}/mandate_notifications/{mandate_notification}':
    get:
      description: <p>Retrieves a new Source MandateNotification.</p>
      operationId: GetSourcesSourceMandateNotificationsMandateNotification
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
          name: mandate_notification
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: source
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
              $ref: >-
                #/components/schemas/GetSourcesSourceMandateNotificationsMandateNotificationRequest
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/source_mandate_notification'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/sources/{source}/source_transactions':
    get:
      description: <p>List source transactions for a given source.</p>
      operationId: GetSourcesSourceSourceTransactions
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
          name: source
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
              $ref: '#/components/schemas/GetSourcesSourceSourceTransactionsRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/ApmsSourcesSourceTransactionList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/sources/{source}/source_transactions/{source_transaction}':
    get:
      description: >-
        <p>Retrieve an existing source transaction object. Supply the unique
        source ID from a source creation request and the source transaction ID
        and Stripe will return the corresponding up-to-date source object
        information.</p>
      operationId: GetSourcesSourceSourceTransactionsSourceTransaction
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
          name: source
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - in: path
          name: source_transaction
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
              $ref: >-
                #/components/schemas/GetSourcesSourceSourceTransactionsSourceTransactionRequest
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/source_transaction'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/sources/{source}/verify':
    post:
      description: <p>Verify a given source.</p>
      operationId: PostSourcesSourceVerify
      parameters:
        - in: path
          name: source
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
              values:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostSourcesSourceVerifyRequest'
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/source'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
components:
  schemas:
    source:
      description: >-
        `Source` objects allow you to accept a variety of payment methods. They

        represent a customer's payment instrument, and can be used with the
        Stripe API

        just like a `Card` object: once chargeable, they can be charged, or can
        be

        attached to customers.


        Stripe doesn't recommend using the deprecated [Sources
        API](https://stripe.com/docs/api/sources).

        We recommend that you adopt the [PaymentMethods
        API](https://stripe.com/docs/api/payment_methods).

        This newer API provides access to our latest features and payment method
        types.


        Related guides: [Sources API](https://stripe.com/docs/sources) and
        [Sources & Customers](https://stripe.com/docs/sources/customers).
      properties:
        ach_credit_transfer:
          $ref: '#/components/schemas/source_type_ach_credit_transfer'
        ach_debit:
          $ref: '#/components/schemas/source_type_ach_debit'
        acss_debit:
          $ref: '#/components/schemas/source_type_acss_debit'
        alipay:
          $ref: '#/components/schemas/source_type_alipay'
        amount:
          description: >-
            A positive integer in the smallest currency unit (that is, 100 cents
            for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency)
            representing the total amount associated with the source. This is
            the amount for which the source will be chargeable once ready.
            Required for `single_use` sources.
          nullable: true
          type: integer
        au_becs_debit:
          $ref: '#/components/schemas/source_type_au_becs_debit'
        bancontact:
          $ref: '#/components/schemas/source_type_bancontact'
        card:
          $ref: '#/components/schemas/source_type_card'
        card_present:
          $ref: '#/components/schemas/source_type_card_present'
        client_secret:
          description: >-
            The client secret of the source. Used for client-side retrieval
            using a publishable key.
          maxLength: 5000
          type: string
        code_verification:
          $ref: '#/components/schemas/source_code_verification_flow'
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        currency:
          description: >-
            Three-letter [ISO code for the
            currency](https://stripe.com/docs/currencies) associated with the
            source. This is the currency for which the source will be chargeable
            once ready. Required for `single_use` sources.
          nullable: true
          type: string
        customer:
          description: >-
            The ID of the customer to which this source is attached. This will
            not be present when the source has not been attached to a customer.
          maxLength: 5000
          type: string
        eps:
          $ref: '#/components/schemas/source_type_eps'
        flow:
          description: >-
            The authentication `flow` of the source. `flow` is one of
            `redirect`, `receiver`, `code_verification`, `none`.
          maxLength: 5000
          type: string
        giropay:
          $ref: '#/components/schemas/source_type_giropay'
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        ideal:
          $ref: '#/components/schemas/source_type_ideal'
        klarna:
          $ref: '#/components/schemas/source_type_klarna'
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
        multibanco:
          $ref: '#/components/schemas/source_type_multibanco'
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - source
          type: string
        owner:
          anyOf:
            - $ref: '#/components/schemas/source_owner'
          description: >-
            Information about the owner of the payment instrument that may be
            used or required by particular source types.
          nullable: true
        p24:
          $ref: '#/components/schemas/source_type_p24'
        receiver:
          $ref: '#/components/schemas/source_receiver_flow'
        redirect:
          $ref: '#/components/schemas/source_redirect_flow'
        sepa_debit:
          $ref: '#/components/schemas/source_type_sepa_debit'
        sofort:
          $ref: '#/components/schemas/source_type_sofort'
        source_order:
          $ref: '#/components/schemas/source_order'
        statement_descriptor:
          description: >-
            Extra information about a source. This will appear on your
            customer's statement every time you charge the source.
          maxLength: 5000
          nullable: true
          type: string
        status:
          description: >-
            The status of the source, one of `canceled`, `chargeable`,
            `consumed`, `failed`, or `pending`. Only `chargeable` sources can be
            used to create a charge.
          maxLength: 5000
          type: string
        three_d_secure:
          $ref: '#/components/schemas/source_type_three_d_secure'
        type:
          description: >-
            The `type` of the source. The `type` is a payment method, one of
            `ach_credit_transfer`, `ach_debit`, `alipay`, `bancontact`, `card`,
            `card_present`, `eps`, `giropay`, `ideal`, `multibanco`, `klarna`,
            `p24`, `sepa_debit`, `sofort`, `three_d_secure`, or `wechat`. An
            additional hash is included on the source with a name matching this
            value. It contains additional information specific to the [payment
            method](https://stripe.com/docs/sources) used.
          enum:
            - ach_credit_transfer
            - ach_debit
            - acss_debit
            - alipay
            - au_becs_debit
            - bancontact
            - card
            - card_present
            - eps
            - giropay
            - ideal
            - klarna
            - multibanco
            - p24
            - sepa_debit
            - sofort
            - three_d_secure
            - wechat
          type: string
          x-stripeBypassValidation: true
        usage:
          description: >-
            Either `reusable` or `single_use`. Whether this source should be
            reusable or not. Some source types may or may not be reusable by
            construction, while others may leave the option at creation. If an
            incompatible value is passed, an error will be returned.
          maxLength: 5000
          nullable: true
          type: string
        wechat:
          $ref: '#/components/schemas/source_type_wechat'
      required:
        - client_secret
        - created
        - flow
        - id
        - livemode
        - object
        - status
        - type
      title: Source
      type: object
      x-expandableFields:
        - code_verification
        - owner
        - receiver
        - redirect
        - source_order
      x-resourceId: source
    error:
      description: An error response from the Stripe API
      properties:
        error:
          $ref: '#/components/schemas/api_errors'
      required:
        - error
      type: object
    source_mandate_notification:
      description: >-
        Source mandate notifications should be created when a notification
        related to

        a source mandate must be sent to the payer. They will trigger a webhook
        or

        deliver an email to the customer.
      properties:
        acss_debit:
          $ref: '#/components/schemas/source_mandate_notification_acss_debit_data'
        amount:
          description: >-
            A positive integer in the smallest currency unit (that is, 100 cents
            for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency)
            representing the amount associated with the mandate notification.
            The amount is expressed in the currency of the underlying source.
            Required if the notification type is `debit_initiated`.
          nullable: true
          type: integer
        bacs_debit:
          $ref: '#/components/schemas/source_mandate_notification_bacs_debit_data'
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
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
            - source_mandate_notification
          type: string
        reason:
          description: >-
            The reason of the mandate notification. Valid reasons are
            `mandate_confirmed` or `debit_initiated`.
          maxLength: 5000
          type: string
        sepa_debit:
          $ref: '#/components/schemas/source_mandate_notification_sepa_debit_data'
        source:
          $ref: '#/components/schemas/source'
        status:
          description: >-
            The status of the mandate notification. Valid statuses are `pending`
            or `submitted`.
          maxLength: 5000
          type: string
        type:
          description: >-
            The type of source this mandate notification is attached to. Should
            be the source type identifier code for the payment method, such as
            `three_d_secure`.
          maxLength: 5000
          type: string
      required:
        - created
        - id
        - livemode
        - object
        - reason
        - source
        - status
        - type
      title: SourceMandateNotification
      type: object
      x-expandableFields:
        - acss_debit
        - bacs_debit
        - sepa_debit
        - source
      x-resourceId: source_mandate_notification
    source_transaction:
      description: |-
        Some payment methods have no required amount that a customer must send.
        Customers can be instructed to send any amount, and it can be made up of
        multiple transactions. As such, sources can have multiple associated
        transactions.
      properties:
        ach_credit_transfer:
          $ref: '#/components/schemas/source_transaction_ach_credit_transfer_data'
        amount:
          description: >-
            A positive integer in the smallest currency unit (that is, 100 cents
            for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency)
            representing the amount your customer has pushed to the receiver.
          type: integer
        chf_credit_transfer:
          $ref: '#/components/schemas/source_transaction_chf_credit_transfer_data'
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
        gbp_credit_transfer:
          $ref: '#/components/schemas/source_transaction_gbp_credit_transfer_data'
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
            - source_transaction
          type: string
        paper_check:
          $ref: '#/components/schemas/source_transaction_paper_check_data'
        sepa_credit_transfer:
          $ref: '#/components/schemas/source_transaction_sepa_credit_transfer_data'
        source:
          description: The ID of the source this transaction is attached to.
          maxLength: 5000
          type: string
        status:
          description: >-
            The status of the transaction, one of `succeeded`, `pending`, or
            `failed`.
          maxLength: 5000
          type: string
        type:
          description: The type of source this transaction is attached to.
          enum:
            - ach_credit_transfer
            - ach_debit
            - alipay
            - bancontact
            - card
            - card_present
            - eps
            - giropay
            - ideal
            - klarna
            - multibanco
            - p24
            - sepa_debit
            - sofort
            - three_d_secure
            - wechat
          type: string
      required:
        - amount
        - created
        - currency
        - id
        - livemode
        - object
        - source
        - status
        - type
      title: SourceTransaction
      type: object
      x-expandableFields:
        - ach_credit_transfer
        - chf_credit_transfer
        - gbp_credit_transfer
        - paper_check
        - sepa_credit_transfer
      x-resourceId: source_transaction
    PostSourcesRequest:
      type: object
      properties:
        amount:
          description: >-
            Amount associated with the source. This is the amount for which the
            source will be chargeable once ready. Required for `single_use`
            sources. Not supported for `receiver` type sources, where charge
            amount may not be specified until funds land.
          type: integer
        currency:
          description: >-
            Three-letter [ISO code for the
            currency](https://stripe.com/docs/currencies) associated with the
            source. This is the currency for which the source will be chargeable
            once ready.
          type: string
        customer:
          description: >-
            The `Customer` to whom the original source is attached to. Must be
            set when the original source is not a `Source` (e.g., `Card`).
          maxLength: 500
          type: string
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        flow:
          description: >-
            The authentication `flow` of the source to create. `flow` is one of
            `redirect`, `receiver`, `code_verification`, `none`. It is generally
            inferred unless a type supports multiple flows.
          enum:
            - code_verification
            - none
            - receiver
            - redirect
          maxLength: 5000
          type: string
        mandate:
          description: >-
            Information about a mandate possibility attached to a source object
            (generally for bank debits) as well as its acceptance status.
          properties:
            acceptance:
              properties:
                date:
                  format: unix-time
                  type: integer
                ip:
                  type: string
                offline:
                  properties:
                    contact_email:
                      type: string
                  required:
                    - contact_email
                  title: mandate_offline_acceptance_params
                  type: object
                online:
                  properties:
                    date:
                      format: unix-time
                      type: integer
                    ip:
                      type: string
                    user_agent:
                      maxLength: 5000
                      type: string
                  title: mandate_online_acceptance_params
                  type: object
                status:
                  enum:
                    - accepted
                    - pending
                    - refused
                    - revoked
                  maxLength: 5000
                  type: string
                type:
                  enum:
                    - offline
                    - online
                  maxLength: 5000
                  type: string
                user_agent:
                  maxLength: 5000
                  type: string
              required:
                - status
              title: mandate_acceptance_params
              type: object
            amount:
              anyOf:
                - type: integer
                - enum:
                    - ''
                  type: string
            currency:
              type: string
            interval:
              enum:
                - one_time
                - scheduled
                - variable
              maxLength: 5000
              type: string
            notification_method:
              enum:
                - deprecated_none
                - email
                - manual
                - none
                - stripe_email
              maxLength: 5000
              type: string
          title: mandate_params
          type: object
        metadata:
          additionalProperties:
            type: string
          type: object
        original_source:
          description: The source to share.
          maxLength: 5000
          type: string
        owner:
          description: >-
            Information about the owner of the payment instrument that may be
            used or required by particular source types.
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
        receiver:
          description: >-
            Optional parameters for the receiver flow. Can be set only if the
            source is a receiver (`flow` is `receiver`).
          properties:
            refund_attributes_method:
              enum:
                - email
                - manual
                - none
              maxLength: 5000
              type: string
          title: receiver_params
          type: object
        redirect:
          description: >-
            Parameters required for the redirect flow. Required if the source is
            authenticated by a redirect (`flow` is `redirect`).
          properties:
            return_url:
              type: string
          required:
            - return_url
          title: redirect_params
          type: object
        source_order:
          description: >-
            Information about the items and shipping associated with the source.
            Required for transactional credit (for example Klarna) sources
            before you can charge it.
          properties:
            items:
              items:
                properties:
                  amount:
                    type: integer
                  currency:
                    type: string
                  description:
                    maxLength: 1000
                    type: string
                  parent:
                    maxLength: 5000
                    type: string
                  quantity:
                    type: integer
                  type:
                    enum:
                      - discount
                      - shipping
                      - sku
                      - tax
                    maxLength: 5000
                    type: string
                title: order_item_specs
                type: object
              type: array
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
              title: order_shipping
              type: object
          title: shallow_order_specs
          type: object
        statement_descriptor:
          description: >-
            An arbitrary string to be displayed on your customer's statement. As
            an example, if your website is `RunClub` and the item you're
            charging for is a race ticket, you may want to specify a
            `statement_descriptor` of `RunClub 5K race ticket.` While many
            payment types will display this information, some may not display it
            at all.
          maxLength: 5000
          type: string
        token:
          description: >-
            An optional token used to create the source. When passed, token
            properties will override source parameters.
          maxLength: 5000
          type: string
        type:
          description: >-
            The `type` of the source to create. Required unless `customer` and
            `original_source` are specified (see the [Cloning card
            Sources](https://stripe.com/docs/sources/connect#cloning-card-sources)
            guide)
          maxLength: 5000
          type: string
        usage:
          enum:
            - reusable
            - single_use
          maxLength: 5000
          type: string
    GetSourcesSourceRequest:
      type: object
      properties: {}
    PostSourcesSourceRequest:
      type: object
      properties:
        amount:
          description: Amount associated with the source.
          type: integer
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        mandate:
          description: >-
            Information about a mandate possibility attached to a source object
            (generally for bank debits) as well as its acceptance status.
          properties:
            acceptance:
              properties:
                date:
                  format: unix-time
                  type: integer
                ip:
                  type: string
                offline:
                  properties:
                    contact_email:
                      type: string
                  required:
                    - contact_email
                  title: mandate_offline_acceptance_params
                  type: object
                online:
                  properties:
                    date:
                      format: unix-time
                      type: integer
                    ip:
                      type: string
                    user_agent:
                      maxLength: 5000
                      type: string
                  title: mandate_online_acceptance_params
                  type: object
                status:
                  enum:
                    - accepted
                    - pending
                    - refused
                    - revoked
                  maxLength: 5000
                  type: string
                type:
                  enum:
                    - offline
                    - online
                  maxLength: 5000
                  type: string
                user_agent:
                  maxLength: 5000
                  type: string
              required:
                - status
              title: mandate_acceptance_params
              type: object
            amount:
              anyOf:
                - type: integer
                - enum:
                    - ''
                  type: string
            currency:
              type: string
            interval:
              enum:
                - one_time
                - scheduled
                - variable
              maxLength: 5000
              type: string
            notification_method:
              enum:
                - deprecated_none
                - email
                - manual
                - none
                - stripe_email
              maxLength: 5000
              type: string
          title: mandate_params
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
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
            Individual keys can be unset by posting an empty value to them. All
            keys can be unset by posting an empty value to `metadata`.
        owner:
          description: >-
            Information about the owner of the payment instrument that may be
            used or required by particular source types.
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
        source_order:
          description: >-
            Information about the items and shipping associated with the source.
            Required for transactional credit (for example Klarna) sources
            before you can charge it.
          properties:
            items:
              items:
                properties:
                  amount:
                    type: integer
                  currency:
                    type: string
                  description:
                    maxLength: 1000
                    type: string
                  parent:
                    maxLength: 5000
                    type: string
                  quantity:
                    type: integer
                  type:
                    enum:
                      - discount
                      - shipping
                      - sku
                      - tax
                    maxLength: 5000
                    type: string
                title: order_item_specs
                type: object
              type: array
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
              title: order_shipping
              type: object
          title: order_params
          type: object
    GetSourcesSourceMandateNotificationsMandateNotificationRequest:
      type: object
      properties: {}
    GetSourcesSourceSourceTransactionsRequest:
      type: object
      properties: {}
    ApmsSourcesSourceTransactionList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/source_transaction'
          type: array
        has_more:
          description: >-
            True if this list has another page of items after this one that can
            be fetched.
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
    GetSourcesSourceSourceTransactionsSourceTransactionRequest:
      type: object
      properties: {}
    PostSourcesSourceVerifyRequest:
      type: object
      required:
        - values
      properties:
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        values:
          description: The values needed to verify the source.
          items:
            maxLength: 5000
            type: string
          type: array
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
---