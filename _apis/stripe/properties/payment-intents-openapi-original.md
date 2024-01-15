---
openapi: 3.0.0
info:
  title: Stripe Payment Intents API
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
  /v1/payment_intents:
    get:
      description: <p>Returns a list of PaymentIntents.</p>
      operationId: GetPaymentIntents
      parameters:
        - description: >-
            A filter on the list, based on the object `created` field. The value
            can be a string with an integer Unix timestamp or a dictionary with
            a number of different query options.
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
            Only return PaymentIntents for the customer that this customer ID
            specifies.
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
              $ref: '#/components/schemas/GetPaymentIntentsRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/PaymentFlowsPaymentIntentList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>Creates a PaymentIntent object.</p>


        <p>After the PaymentIntent is created, attach a payment method and <a
        href="/docs/api/payment_intents/confirm">confirm</a>

        to continue the payment. Learn more about <a
        href="/docs/payments/payment-intents">the available payment flows

        with the Payment Intents API</a>.</p>


        <p>When you use <code>confirm=true</code> during creation, it’s
        equivalent to creating

        and confirming the PaymentIntent in the same call. You can use any
        parameters

        available in the <a href="/docs/api/payment_intents/confirm">confirm
        API</a> when you supply

        <code>confirm=true</code>.</p>
      operationId: PostPaymentIntents
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
              mandate_data:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              off_session:
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
              $ref: '#/components/schemas/PostPaymentIntentsRequest'
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  /v1/payment_intents/search:
    get:
      description: >-
        <p>Search for PaymentIntents you’ve previously created using Stripe’s <a
        href="/docs/search#search-query-language">Search Query Language</a>.

        Don’t use search in read-after-write flows where strict consistency is
        necessary. Under normal operating

        conditions, data is searchable in less than a minute. Occasionally,
        propagation of new or updated data can be up

        to an hour behind during outages. Search functionality is not available
        to merchants in India.</p>
      operationId: GetPaymentIntentsSearch
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
            the list of supported [query fields for payment
            intents](https://stripe.com/docs/search#query-fields-for-payment-intents).
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
              $ref: '#/components/schemas/GetPaymentIntentsSearchRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/SearchResult'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/payment_intents/{intent}':
    get:
      description: >-
        <p>Retrieves the details of a PaymentIntent that has previously been
        created. </p>


        <p>You can retrieve a PaymentIntent client-side using a publishable key
        when the <code>client_secret</code> is in the query string. </p>


        <p>If you retrieve a PaymentIntent with a publishable key, it only
        returns a subset of properties. Refer to the <a
        href="#payment_intent_object">payment intent</a> object reference for
        more details.</p>
      operationId: GetPaymentIntentsIntent
      parameters:
        - description: >-
            The client secret of the PaymentIntent. We require it if you use a
            publishable key to retrieve the source.
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
              $ref: '#/components/schemas/GetPaymentIntentsIntentRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>Updates properties on a PaymentIntent object without confirming.</p>


        <p>Depending on which properties you update, you might need to confirm
        the

        PaymentIntent again. For example, updating the
        <code>payment_method</code>

        always requires you to confirm the PaymentIntent again. If you prefer to

        update and confirm at the same time, we recommend updating properties
        through

        the <a href="/docs/api/payment_intents/confirm">confirm API</a>
        instead.</p>
      operationId: PostPaymentIntentsIntent
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
              application_fee_amount:
                explode: true
                style: deepObject
              expand:
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
              receipt_email:
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
              $ref: '#/components/schemas/PostPaymentIntentsIntentRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/payment_intents/{intent}/apply_customer_balance':
    post:
      description: >-
        <p>Manually reconcile the remaining amount for a
        <code>customer_balance</code> PaymentIntent.</p>
      operationId: PostPaymentIntentsIntentApplyCustomerBalance
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
              $ref: >-
                #/components/schemas/PostPaymentIntentsIntentApplyCustomerBalanceRequest
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/payment_intents/{intent}/cancel':
    post:
      description: >-
        <p>You can cancel a PaymentIntent object when it’s in one of these
        statuses: <code>requires_payment_method</code>,
        <code>requires_capture</code>, <code>requires_confirmation</code>,
        <code>requires_action</code> or, <a href="/docs/payments/intents">in
        rare cases</a>, <code>processing</code>. </p>


        <p>After it’s canceled, no additional charges are made by the
        PaymentIntent and any operations on the PaymentIntent fail with an
        error. For PaymentIntents with a <code>status</code> of
        <code>requires_capture</code>, the remaining
        <code>amount_capturable</code> is automatically refunded. </p>


        <p>You can’t cancel the PaymentIntent for a Checkout Session. <a
        href="/docs/api/checkout/sessions/expire">Expire the Checkout
        Session</a> instead.</p>
      operationId: PostPaymentIntentsIntentCancel
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
              $ref: '#/components/schemas/PostPaymentIntentsIntentCancelRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/payment_intents/{intent}/capture':
    post:
      description: >-
        <p>Capture the funds of an existing uncaptured PaymentIntent when its
        status is <code>requires_capture</code>.</p>


        <p>Uncaptured PaymentIntents are cancelled a set number of days (7 by
        default) after their creation.</p>


        <p>Learn more about <a href="/docs/payments/capture-later">separate
        authorization and capture</a>.</p>
      operationId: PostPaymentIntentsIntentCapture
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
              metadata:
                explode: true
                style: deepObject
              transfer_data:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostPaymentIntentsIntentCaptureRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/payment_intents/{intent}/confirm':
    post:
      description: >-
        <p>Confirm that your customer intends to pay with current or provided

        payment method. Upon confirmation, the PaymentIntent will attempt to
        initiate

        a payment.

        If the selected payment method requires additional authentication steps,
        the

        PaymentIntent will transition to the <code>requires_action</code> status
        and

        suggest additional actions via <code>next_action</code>. If payment
        fails,

        the PaymentIntent transitions to the
        <code>requires_payment_method</code> status or the

        <code>canceled</code> status if the confirmation limit is reached. If

        payment succeeds, the PaymentIntent will transition to the
        <code>succeeded</code>

        status (or <code>requires_capture</code>, if <code>capture_method</code>
        is set to <code>manual</code>).

        If the <code>confirmation_method</code> is <code>automatic</code>,
        payment may be attempted

        using our <a
        href="/docs/stripe-js/reference#stripe-handle-card-payment">client
        SDKs</a>

        and the PaymentIntent’s <a
        href="#payment_intent_object-client_secret">client_secret</a>.

        After <code>next_action</code>s are handled by the client, no additional

        confirmation is required to complete the payment.

        If the <code>confirmation_method</code> is <code>manual</code>, all
        payment attempts must be

        initiated using a secret key.

        If any actions are required for the payment, the PaymentIntent will

        return to the <code>requires_confirmation</code> state

        after those actions are completed. Your server needs to then

        explicitly re-confirm the PaymentIntent to initiate the next payment

        attempt. Read the <a
        href="/docs/payments/payment-intents/web-manual">expanded
        documentation</a>

        to learn more about manual confirmation.</p>
      operationId: PostPaymentIntentsIntentConfirm
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
              off_session:
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
              radar_options:
                explode: true
                style: deepObject
              receipt_email:
                explode: true
                style: deepObject
              shipping:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostPaymentIntentsIntentConfirmRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/payment_intents/{intent}/increment_authorization':
    post:
      description: >-
        <p>Perform an incremental authorization on an eligible

        <a href="/docs/api/payment_intents/object">PaymentIntent</a>. To be
        eligible, the

        PaymentIntent’s status must be <code>requires_capture</code> and

        <a
        href="/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported">incremental_authorization_supported</a>

        must be <code>true</code>.</p>


        <p>Incremental authorizations attempt to increase the authorized amount
        on

        your customer’s card to the new, higher <code>amount</code> provided.
        Similar to the

        initial authorization, incremental authorizations can be declined. A

        single PaymentIntent can call this endpoint multiple times to further

        increase the authorized amount.</p>


        <p>If the incremental authorization succeeds, the PaymentIntent object

        returns with the updated

        <a
        href="/docs/api/payment_intents/object#payment_intent_object-amount">amount</a>.

        If the incremental authorization fails, a

        <a href="/docs/error-codes#card-declined">card_declined</a> error
        returns, and no other

        fields on the PaymentIntent or Charge update. The PaymentIntent

        object remains capturable for the previously authorized amount.</p>


        <p>Each PaymentIntent can have a maximum of 10 incremental authorization
        attempts, including declines.

        After it’s captured, a PaymentIntent can no longer be incremented.</p>


        <p>Learn more about <a
        href="/docs/terminal/features/incremental-authorizations">incremental
        authorizations</a>.</p>
      operationId: PostPaymentIntentsIntentIncrementAuthorization
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
              metadata:
                explode: true
                style: deepObject
              transfer_data:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: >-
                #/components/schemas/PostPaymentIntentsIntentIncrementAuthorizationRequest
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/payment_intents/{intent}/verify_microdeposits':
    post:
      description: <p>Verifies microdeposits on a PaymentIntent object.</p>
      operationId: PostPaymentIntentsIntentVerifyMicrodeposits
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
              $ref: >-
                #/components/schemas/PostPaymentIntentsIntentVerifyMicrodepositsRequest
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_intent'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
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
    payment_intent:
      description: >-
        A PaymentIntent guides you through the process of collecting a payment
        from your customer.

        We recommend that you create exactly one PaymentIntent for each order or

        customer session in your system. You can reference the PaymentIntent
        later to

        see the history of payment attempts for a particular session.


        A PaymentIntent transitions through

        [multiple
        statuses](https://stripe.com/docs/payments/intents#intent-statuses)

        throughout its lifetime as it interfaces with Stripe.js to perform

        authentication flows and ultimately creates at most one successful
        charge.


        Related guide: [Payment Intents
        API](https://stripe.com/docs/payments/payment-intents)
      properties:
        amount:
          description: >-
            Amount intended to be collected by this PaymentIntent. A positive
            integer representing how much to charge in the [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100
            cents to charge $1.00 or 100 to charge ¥100, a zero-decimal
            currency). The minimum amount is $0.50 US or [equivalent in charge
            currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts).
            The amount value supports up to eight digits (e.g., a value of
            99999999 for a USD charge of $999,999.99).
          type: integer
        amount_capturable:
          description: Amount that can be captured from this PaymentIntent.
          type: integer
        amount_details:
          $ref: '#/components/schemas/payment_flows_amount_details'
        amount_received:
          description: Amount that this PaymentIntent collects.
          type: integer
        application:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/application'
          description: ID of the Connect application that created the PaymentIntent.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/application'
        application_fee_amount:
          description: >-
            The amount of the application fee (if any) that will be requested to
            be applied to the payment and transferred to the application owner's
            Stripe account. The amount of the application fee collected will be
            capped at the total payment amount. For more information, see the
            PaymentIntents [use case for connected
            accounts](https://stripe.com/docs/payments/connected-accounts).
          nullable: true
          type: integer
        automatic_payment_methods:
          anyOf:
            - $ref: >-
                #/components/schemas/payment_flows_automatic_payment_methods_payment_intent
          description: >-
            Settings to configure compatible payment methods from the [Stripe
            Dashboard](https://dashboard.stripe.com/settings/payment_methods)
          nullable: true
        canceled_at:
          description: >-
            Populated when `status` is `canceled`, this is the time at which the
            PaymentIntent was canceled. Measured in seconds since the Unix
            epoch.
          format: unix-time
          nullable: true
          type: integer
        cancellation_reason:
          description: >-
            Reason for cancellation of this PaymentIntent, either user-provided
            (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`)
            or generated by Stripe internally (`failed_invoice`, `void_invoice`,
            or `automatic`).
          enum:
            - abandoned
            - automatic
            - duplicate
            - failed_invoice
            - fraudulent
            - requested_by_customer
            - void_invoice
          nullable: true
          type: string
        capture_method:
          description: >-
            Controls when the funds will be captured from the customer's
            account.
          enum:
            - automatic
            - automatic_async
            - manual
          type: string
        client_secret:
          description: >-
            The client secret of this PaymentIntent. Used for client-side
            retrieval using a publishable key. 


            The client secret can be used to complete a payment from your
            frontend. It should not be stored, logged, or exposed to anyone
            other than the customer. Make sure that you have TLS enabled on any
            page that includes the client secret.


            Refer to our docs to [accept a
            payment](https://stripe.com/docs/payments/accept-a-payment?ui=elements)
            and learn about how `client_secret` should be handled.
          maxLength: 5000
          nullable: true
          type: string
        confirmation_method:
          description: >-
            Describes whether we can confirm this PaymentIntent automatically,
            or if it requires customer action to confirm the payment.
          enum:
            - automatic
            - manual
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
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
            - $ref: '#/components/schemas/deleted_customer'
          description: >-
            ID of the Customer this PaymentIntent belongs to, if one exists.


            Payment methods attached to other Customers cannot be used with this
            PaymentIntent.


            If present in combination with
            [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage),
            this PaymentIntent's payment method will be attached to the Customer
            after the PaymentIntent has been confirmed and any required actions
            from the user are complete.
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
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        invoice:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/invoice'
          description: 'ID of the invoice that created this PaymentIntent, if it exists.'
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/invoice'
        last_payment_error:
          anyOf:
            - $ref: '#/components/schemas/api_errors'
          description: >-
            The payment error encountered in the previous PaymentIntent
            confirmation. It will be cleared if the PaymentIntent is later
            updated for any reason.
          nullable: true
        latest_charge:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/charge'
          description: The latest charge created by this PaymentIntent.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/charge'
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
            Learn more about [storing information in
            metadata](https://stripe.com/docs/payments/payment-intents/creating-payment-intents#storing-information-in-metadata).
          type: object
        next_action:
          anyOf:
            - $ref: '#/components/schemas/payment_intent_next_action'
          description: >-
            If present, this property tells you what actions you need to take in
            order for your customer to fulfill a payment using the provided
            source.
          nullable: true
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - payment_intent
          type: string
        on_behalf_of:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/account'
          description: >-
            The account (if any) for which the funds of the PaymentIntent are
            intended. See the PaymentIntents [use case for connected
            accounts](https://stripe.com/docs/payments/connected-accounts) for
            details.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/account'
        payment_method:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/payment_method'
          description: ID of the payment method used in this PaymentIntent.
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
            PaymentIntent.
          nullable: true
        payment_method_options:
          anyOf:
            - $ref: '#/components/schemas/payment_intent_payment_method_options'
          description: Payment-method-specific configuration for this PaymentIntent.
          nullable: true
        payment_method_types:
          description: >-
            The list of payment method types (e.g. card) that this PaymentIntent
            is allowed to use.
          items:
            maxLength: 5000
            type: string
          type: array
        processing:
          anyOf:
            - $ref: '#/components/schemas/payment_intent_processing'
          description: >-
            If present, this property tells you about the processing state of
            the payment.
          nullable: true
        receipt_email:
          description: >-
            Email address that the receipt for the resulting payment will be
            sent to. If `receipt_email` is specified for a payment in live mode,
            a receipt will be sent regardless of your [email
            settings](https://dashboard.stripe.com/account/emails).
          maxLength: 5000
          nullable: true
          type: string
        review:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/review'
          description: 'ID of the review associated with this PaymentIntent, if any.'
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/review'
        setup_future_usage:
          description: >-
            Indicates that you intend to make future payments with this
            PaymentIntent's payment method.


            Providing this parameter will [attach the payment
            method](https://stripe.com/docs/payments/save-during-payment) to the
            PaymentIntent's Customer, if present, after the PaymentIntent is
            confirmed and any required actions from the user are complete. If no
            Customer was provided, the payment method can still be
            [attached](https://stripe.com/docs/api/payment_methods/attach) to a
            Customer after the transaction completes.


            When processing card payments, Stripe also uses `setup_future_usage`
            to dynamically optimize your payment flow and comply with regional
            legislation and network rules, such as
            [SCA](https://stripe.com/docs/strong-customer-authentication).
          enum:
            - off_session
            - on_session
          nullable: true
          type: string
        shipping:
          anyOf:
            - $ref: '#/components/schemas/shipping'
          description: Shipping information for this PaymentIntent.
          nullable: true
        statement_descriptor:
          description: >-
            For card charges, use
            [statement_descriptor_suffix](https://stripe.com/docs/payments/account/statement-descriptors#dynamic).
            Otherwise, you can use this value as the complete description of a
            charge on your customers' statements. It must contain at least one
            letter and be 1–22 characters long.
          maxLength: 5000
          nullable: true
          type: string
        statement_descriptor_suffix:
          description: >-
            Provides information about a card payment that customers see on
            their statements. Concatenated with the prefix (shortened
            descriptor) or statement descriptor that’s set on the account to
            form the complete statement descriptor. Maximum 22 characters for
            the concatenated descriptor.
          maxLength: 5000
          nullable: true
          type: string
        status:
          description: >-
            Status of this PaymentIntent, one of `requires_payment_method`,
            `requires_confirmation`, `requires_action`, `processing`,
            `requires_capture`, `canceled`, or `succeeded`. Read more about each
            PaymentIntent
            [status](https://stripe.com/docs/payments/intents#intent-statuses).
          enum:
            - canceled
            - processing
            - requires_action
            - requires_capture
            - requires_confirmation
            - requires_payment_method
            - succeeded
          type: string
        transfer_data:
          anyOf:
            - $ref: '#/components/schemas/transfer_data'
          description: >-
            The data that automatically creates a Transfer after the payment
            finalizes. Learn more about the [use case for connected
            accounts](https://stripe.com/docs/payments/connected-accounts).
          nullable: true
        transfer_group:
          description: >-
            A string that identifies the resulting payment as part of a group.
            Learn more about the [use case for connected
            accounts](https://stripe.com/docs/connect/separate-charges-and-transfers).
          maxLength: 5000
          nullable: true
          type: string
      required:
        - amount
        - capture_method
        - confirmation_method
        - created
        - currency
        - id
        - livemode
        - object
        - payment_method_types
        - status
      title: PaymentIntent
      type: object
      x-expandableFields:
        - amount_details
        - application
        - automatic_payment_methods
        - customer
        - invoice
        - last_payment_error
        - latest_charge
        - next_action
        - on_behalf_of
        - payment_method
        - payment_method_configuration_details
        - payment_method_options
        - processing
        - review
        - shipping
        - transfer_data
      x-resourceId: payment_intent
    GetPaymentIntentsRequest:
      type: object
      properties: {}
    PaymentFlowsPaymentIntentList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/payment_intent'
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
          pattern: ^/v1/payment_intents
          type: string
    PostPaymentIntentsRequest:
      type: object
      required:
        - amount
        - currency
      properties:
        amount:
          description: >-
            Amount intended to be collected by this PaymentIntent. A positive
            integer representing how much to charge in the [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100
            cents to charge $1.00 or 100 to charge ¥100, a zero-decimal
            currency). The minimum amount is $0.50 US or [equivalent in charge
            currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts).
            The amount value supports up to eight digits (e.g., a value of
            99999999 for a USD charge of $999,999.99).
          type: integer
        application_fee_amount:
          description: >-
            The amount of the application fee (if any) that will be requested to
            be applied to the payment and transferred to the application owner's
            Stripe account. The amount of the application fee collected will be
            capped at the total payment amount. For more information, see the
            PaymentIntents [use case for connected
            accounts](https://stripe.com/docs/payments/connected-accounts).
          type: integer
        automatic_payment_methods:
          description: >-
            When you enable this parameter, this PaymentIntent accepts payment
            methods that you enable in the Dashboard and that are compatible
            with this PaymentIntent's other parameters.
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
        capture_method:
          description: >-
            Controls when the funds will be captured from the customer's
            account.
          enum:
            - automatic
            - automatic_async
            - manual
          type: string
        confirm:
          description: >-
            Set to `true` to attempt to [confirm this
            PaymentIntent](https://stripe.com/docs/api/payment_intents/confirm)
            this PaymentIntent immediately. This parameter defaults to `false`.
            When creating and confirming a PaymentIntent at the same time, you
            can also provide the parameters available in the [Confirm
            API](https://stripe.com/docs/api/payment_intents/confirm).
          type: boolean
        confirmation_method:
          description: >-
            Describes whether we can confirm this PaymentIntent automatically,
            or if it requires customer action to confirm the payment.
          enum:
            - automatic
            - manual
          type: string
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        customer:
          description: >-
            ID of the Customer this PaymentIntent belongs to, if one exists.


            Payment methods attached to other Customers cannot be used with this
            PaymentIntent.


            If present in combination with
            [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage),
            this PaymentIntent's payment method will be attached to the Customer
            after the PaymentIntent has been confirmed and any required actions
            from the user are complete.
          maxLength: 5000
          type: string
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 1000
          type: string
        error_on_requires_action:
          description: >-
            Set to `true` to fail the payment attempt if the PaymentIntent
            transitions into `requires_action`. Use this parameter for simpler
            integrations that don't handle customer actions, such as [saving
            cards without
            authentication](https://stripe.com/docs/payments/save-card-without-authentication).
            This parameter can only be used with
            [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
          type: boolean
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        mandate:
          description: >-
            ID of the mandate that's used for this payment. This parameter can
            only be used with
            [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
          maxLength: 5000
          type: string
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
            This hash contains details about the Mandate to create. This
            parameter can only be used with
            [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
        metadata:
          additionalProperties:
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
            Individual keys can be unset by posting an empty value to them. All
            keys can be unset by posting an empty value to `metadata`.
          type: object
        off_session:
          anyOf:
            - type: boolean
            - enum:
                - one_off
                - recurring
              maxLength: 5000
              type: string
          description: >-
            Set to `true` to indicate that the customer isn't in your checkout
            flow during this payment attempt and can't authenticate. Use this
            parameter in scenarios where you collect card details and [charge
            them
            later](https://stripe.com/docs/payments/cards/charging-saved-cards).
            This parameter can only be used with
            [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
        on_behalf_of:
          description: >-
            The Stripe account ID that these funds are intended for. Learn more
            about the [use case for connected
            accounts](https://stripe.com/docs/payments/connected-accounts).
          type: string
        payment_method:
          description: >-
            ID of the payment method (a PaymentMethod, Card, or [compatible
            Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility)
            object) to attach to this PaymentIntent.


            If you omit this parameter with `confirm=true`,
            `customer.default_source` attaches as this PaymentIntent's payment
            instrument to improve migration for users of the Charges API. We
            recommend that you explicitly provide the `payment_method` moving
            forward.
          maxLength: 5000
          type: string
        payment_method_configuration:
          description: >-
            The ID of the payment method configuration to use with this
            PaymentIntent.
          maxLength: 100
          type: string
        payment_method_data:
          description: >-
            If provided, this hash will be used to create a PaymentMethod. The
            new PaymentMethod will appear

            in the
            [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)

            property on the PaymentIntent.
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
          description: Payment method-specific configuration for this PaymentIntent.
          properties:
            acss_debit:
              anyOf:
                - properties:
                    mandate_options:
                      properties:
                        custom_mandate_url:
                          anyOf:
                            - type: string
                            - enum:
                                - ''
                              type: string
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
                        payment_intent_payment_method_options_mandate_options_param
                      type: object
                    setup_future_usage:
                      enum:
                        - ''
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
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            affirm:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    preferred_locale:
                      maxLength: 30
                      type: string
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            afterpay_clearpay:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    reference:
                      maxLength: 128
                      type: string
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                      x-stripeBypassValidation: true
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            alipay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            au_becs_debit:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            bacs_debit:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_method_options_param
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
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            blik:
              anyOf:
                - properties:
                    code:
                      maxLength: 5000
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            boleto:
              anyOf:
                - properties:
                    expires_after_days:
                      type: integer
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            card:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    cvc_token:
                      maxLength: 5000
                      type: string
                    installments:
                      properties:
                        enabled:
                          type: boolean
                        plan:
                          anyOf:
                            - properties:
                                count:
                                  type: integer
                                interval:
                                  enum:
                                    - month
                                  type: string
                                type:
                                  enum:
                                    - fixed_count
                                  type: string
                              required:
                                - count
                                - interval
                                - type
                              title: installment_plan
                              type: object
                            - enum:
                                - ''
                              type: string
                      title: installments_param
                      type: object
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
                        - interval
                        - reference
                        - start_date
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
                    request_extended_authorization:
                      enum:
                        - if_available
                        - never
                      type: string
                    request_incremental_authorization:
                      enum:
                        - if_available
                        - never
                      type: string
                    request_multicapture:
                      enum:
                        - if_available
                        - never
                      type: string
                    request_overcapture:
                      enum:
                        - if_available
                        - never
                      type: string
                    request_three_d_secure:
                      enum:
                        - any
                        - automatic
                        - challenge
                      type: string
                      x-stripeBypassValidation: true
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                    statement_descriptor_suffix_kana:
                      anyOf:
                        - maxLength: 22
                          type: string
                        - enum:
                            - ''
                          type: string
                    statement_descriptor_suffix_kanji:
                      anyOf:
                        - maxLength: 17
                          type: string
                        - enum:
                            - ''
                          type: string
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
                        exemption_indicator:
                          enum:
                            - low_risk
                            - none
                          type: string
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
                      required:
                        - cryptogram
                        - transaction_id
                        - version
                      title: payment_method_options_param
                      type: object
                  title: payment_intent_param
                  type: object
                - enum:
                    - ''
                  type: string
            card_present:
              anyOf:
                - properties:
                    request_extended_authorization:
                      type: boolean
                    request_incremental_authorization_support:
                      type: boolean
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            cashapp:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_intent_payment_method_options_param
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
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            eps:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            fpx:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            giropay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            grabpay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            ideal:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            interac_present:
              anyOf:
                - properties: {}
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            klarna:
              anyOf:
                - properties:
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
                        - de-CH
                        - de-DE
                        - el-GR
                        - en-AT
                        - en-AU
                        - en-BE
                        - en-CA
                        - en-CH
                        - en-CZ
                        - en-DE
                        - en-DK
                        - en-ES
                        - en-FI
                        - en-FR
                        - en-GB
                        - en-GR
                        - en-IE
                        - en-IT
                        - en-NL
                        - en-NO
                        - en-NZ
                        - en-PL
                        - en-PT
                        - en-SE
                        - en-US
                        - es-ES
                        - es-US
                        - fi-FI
                        - fr-BE
                        - fr-CA
                        - fr-CH
                        - fr-FR
                        - it-CH
                        - it-IT
                        - nb-NO
                        - nl-BE
                        - nl-NL
                        - pl-PL
                        - pt-PT
                        - sv-FI
                        - sv-SE
                      type: string
                      x-stripeBypassValidation: true
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                      x-stripeBypassValidation: true
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            konbini:
              anyOf:
                - properties:
                    confirmation_number:
                      anyOf:
                        - maxLength: 11
                          type: string
                        - enum:
                            - ''
                          type: string
                    expires_after_days:
                      anyOf:
                        - type: integer
                        - enum:
                            - ''
                          type: string
                    expires_at:
                      anyOf:
                        - format: unix-time
                          type: integer
                        - enum:
                            - ''
                          type: string
                    product_description:
                      anyOf:
                        - maxLength: 22
                          type: string
                        - enum:
                            - ''
                          type: string
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            link:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            oxxo:
              anyOf:
                - properties:
                    expires_after_days:
                      type: integer
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            p24:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                    tos_shown_and_accepted:
                      type: boolean
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            paynow:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            paypal:
              anyOf:
                - properties:
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
                - enum:
                    - ''
                  type: string
            pix:
              anyOf:
                - properties:
                    expires_after_seconds:
                      type: integer
                    expires_at:
                      format: unix-time
                      type: integer
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            promptpay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            revolut_pay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            sepa_debit:
              anyOf:
                - properties:
                    mandate_options:
                      properties: {}
                      title: payment_method_options_mandate_options_param
                      type: object
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            sofort:
              anyOf:
                - properties:
                    preferred_language:
                      enum:
                        - ''
                        - de
                        - en
                        - es
                        - fr
                        - it
                        - nl
                        - pl
                      type: string
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
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
                    preferred_settlement_speed:
                      enum:
                        - ''
                        - fastest
                        - standard
                      type: string
                    setup_future_usage:
                      enum:
                        - ''
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
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            wechat_pay:
              anyOf:
                - properties:
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
                - enum:
                    - ''
                  type: string
            zip:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
          title: payment_method_options_param
          type: object
        payment_method_types:
          description: >-
            The list of payment method types (for example, a card) that this
            PaymentIntent can use. If you don't provide this, it defaults to
            ["card"]. Use `automatic_payment_methods` to manage payment methods
            from the [Stripe
            Dashboard](https://dashboard.stripe.com/settings/payment_methods).
          items:
            maxLength: 5000
            type: string
          type: array
        radar_options:
          description: >-
            Options to configure Radar. Learn more about [Radar
            Sessions](https://stripe.com/docs/radar/radar-session).
          properties:
            session:
              maxLength: 5000
              type: string
          title: radar_options_with_hidden_options
          type: object
        receipt_email:
          description: >-
            Email address to send the receipt to. If you specify `receipt_email`
            for a payment in live mode, you send a receipt regardless of your
            [email settings](https://dashboard.stripe.com/account/emails).
          type: string
        return_url:
          description: >-
            The URL to redirect your customer back to after they authenticate or
            cancel their payment on the payment method's app or site. If you'd
            prefer to redirect to a mobile application, you can alternatively
            supply an application URI scheme. This parameter can only be used
            with
            [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
          type: string
        setup_future_usage:
          description: >-
            Indicates that you intend to make future payments with this
            PaymentIntent's payment method.


            Providing this parameter will [attach the payment
            method](https://stripe.com/docs/payments/save-during-payment) to the
            PaymentIntent's Customer, if present, after the PaymentIntent is
            confirmed and any required actions from the user are complete. If no
            Customer was provided, the payment method can still be
            [attached](https://stripe.com/docs/api/payment_methods/attach) to a
            Customer after the transaction completes.


            When processing card payments, Stripe also uses `setup_future_usage`
            to dynamically optimize your payment flow and comply with regional
            legislation and network rules, such as
            [SCA](https://stripe.com/docs/strong-customer-authentication).
          enum:
            - off_session
            - on_session
          type: string
        shipping:
          description: Shipping information for this PaymentIntent.
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
        statement_descriptor:
          description: >-
            For card charges, use
            [statement_descriptor_suffix](https://stripe.com/docs/payments/account/statement-descriptors#dynamic).
            Otherwise, you can use this value as the complete description of a
            charge on your customers' statements. It must contain at least one
            letter and be 1–22 characters long.
          maxLength: 22
          type: string
        statement_descriptor_suffix:
          description: >-
            Provides information about a card payment that customers see on
            their statements. Concatenated with the prefix (shortened
            descriptor) or statement descriptor that’s set on the account to
            form the complete statement descriptor. The concatenated descriptor
            must contain 1-22 characters.
          maxLength: 22
          type: string
        transfer_data:
          description: >-
            The parameters that you can use to automatically create a Transfer.

            Learn more about the [use case for connected
            accounts](https://stripe.com/docs/payments/connected-accounts).
          properties:
            amount:
              type: integer
            destination:
              type: string
          required:
            - destination
          title: transfer_data_creation_params
          type: object
        transfer_group:
          description: >-
            A string that identifies the resulting payment as part of a group.
            Learn more about the [use case for connected
            accounts](https://stripe.com/docs/connect/separate-charges-and-transfers).
          type: string
        use_stripe_sdk:
          description: >-
            Set to `true` when confirming server-side and using Stripe.js, iOS,
            or Android client-side SDKs to handle the next actions.
          type: boolean
    GetPaymentIntentsSearchRequest:
      type: object
      properties: {}
    SearchResult:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/payment_intent'
          type: array
        has_more:
          type: boolean
        next_page:
          maxLength: 5000
          nullable: true
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - search_result
          type: string
        total_count:
          description: >-
            The total number of objects that match the query, only accurate up
            to 10,000.
          type: integer
        url:
          maxLength: 5000
          type: string
    GetPaymentIntentsIntentRequest:
      type: object
      properties: {}
    PostPaymentIntentsIntentRequest:
      type: object
      properties:
        amount:
          description: >-
            Amount intended to be collected by this PaymentIntent. A positive
            integer representing how much to charge in the [smallest currency
            unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100
            cents to charge $1.00 or 100 to charge ¥100, a zero-decimal
            currency). The minimum amount is $0.50 US or [equivalent in charge
            currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts).
            The amount value supports up to eight digits (e.g., a value of
            99999999 for a USD charge of $999,999.99).
          type: integer
        application_fee_amount:
          anyOf:
            - type: integer
            - enum:
                - ''
              type: string
          description: >-
            The amount of the application fee (if any) that will be requested to
            be applied to the payment and transferred to the application owner's
            Stripe account. The amount of the application fee collected will be
            capped at the total payment amount. For more information, see the
            PaymentIntents [use case for connected
            accounts](https://stripe.com/docs/payments/connected-accounts).
        capture_method:
          description: >-
            Controls when the funds will be captured from the customer's
            account.
          enum:
            - automatic
            - automatic_async
            - manual
          type: string
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        customer:
          description: >-
            ID of the Customer this PaymentIntent belongs to, if one exists.


            Payment methods attached to other Customers cannot be used with this
            PaymentIntent.


            If present in combination with
            [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage),
            this PaymentIntent's payment method will be attached to the Customer
            after the PaymentIntent has been confirmed and any required actions
            from the user are complete.
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
        payment_method:
          description: >-
            ID of the payment method (a PaymentMethod, Card, or [compatible
            Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility)
            object) to attach to this PaymentIntent.
          maxLength: 5000
          type: string
        payment_method_configuration:
          description: >-
            The ID of the payment method configuration to use with this
            PaymentIntent.
          maxLength: 100
          type: string
        payment_method_data:
          description: >-
            If provided, this hash will be used to create a PaymentMethod. The
            new PaymentMethod will appear

            in the
            [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)

            property on the PaymentIntent.
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
          description: Payment-method-specific configuration for this PaymentIntent.
          properties:
            acss_debit:
              anyOf:
                - properties:
                    mandate_options:
                      properties:
                        custom_mandate_url:
                          anyOf:
                            - type: string
                            - enum:
                                - ''
                              type: string
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
                        payment_intent_payment_method_options_mandate_options_param
                      type: object
                    setup_future_usage:
                      enum:
                        - ''
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
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            affirm:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    preferred_locale:
                      maxLength: 30
                      type: string
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            afterpay_clearpay:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    reference:
                      maxLength: 128
                      type: string
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                      x-stripeBypassValidation: true
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            alipay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            au_becs_debit:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            bacs_debit:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_method_options_param
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
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            blik:
              anyOf:
                - properties:
                    code:
                      maxLength: 5000
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            boleto:
              anyOf:
                - properties:
                    expires_after_days:
                      type: integer
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            card:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    cvc_token:
                      maxLength: 5000
                      type: string
                    installments:
                      properties:
                        enabled:
                          type: boolean
                        plan:
                          anyOf:
                            - properties:
                                count:
                                  type: integer
                                interval:
                                  enum:
                                    - month
                                  type: string
                                type:
                                  enum:
                                    - fixed_count
                                  type: string
                              required:
                                - count
                                - interval
                                - type
                              title: installment_plan
                              type: object
                            - enum:
                                - ''
                              type: string
                      title: installments_param
                      type: object
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
                        - interval
                        - reference
                        - start_date
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
                    request_extended_authorization:
                      enum:
                        - if_available
                        - never
                      type: string
                    request_incremental_authorization:
                      enum:
                        - if_available
                        - never
                      type: string
                    request_multicapture:
                      enum:
                        - if_available
                        - never
                      type: string
                    request_overcapture:
                      enum:
                        - if_available
                        - never
                      type: string
                    request_three_d_secure:
                      enum:
                        - any
                        - automatic
                        - challenge
                      type: string
                      x-stripeBypassValidation: true
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                    statement_descriptor_suffix_kana:
                      anyOf:
                        - maxLength: 22
                          type: string
                        - enum:
                            - ''
                          type: string
                    statement_descriptor_suffix_kanji:
                      anyOf:
                        - maxLength: 17
                          type: string
                        - enum:
                            - ''
                          type: string
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
                        exemption_indicator:
                          enum:
                            - low_risk
                            - none
                          type: string
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
                      required:
                        - cryptogram
                        - transaction_id
                        - version
                      title: payment_method_options_param
                      type: object
                  title: payment_intent_param
                  type: object
                - enum:
                    - ''
                  type: string
            card_present:
              anyOf:
                - properties:
                    request_extended_authorization:
                      type: boolean
                    request_incremental_authorization_support:
                      type: boolean
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            cashapp:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_intent_payment_method_options_param
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
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            eps:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            fpx:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            giropay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            grabpay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            ideal:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            interac_present:
              anyOf:
                - properties: {}
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            klarna:
              anyOf:
                - properties:
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
                        - de-CH
                        - de-DE
                        - el-GR
                        - en-AT
                        - en-AU
                        - en-BE
                        - en-CA
                        - en-CH
                        - en-CZ
                        - en-DE
                        - en-DK
                        - en-ES
                        - en-FI
                        - en-FR
                        - en-GB
                        - en-GR
                        - en-IE
                        - en-IT
                        - en-NL
                        - en-NO
                        - en-NZ
                        - en-PL
                        - en-PT
                        - en-SE
                        - en-US
                        - es-ES
                        - es-US
                        - fi-FI
                        - fr-BE
                        - fr-CA
                        - fr-CH
                        - fr-FR
                        - it-CH
                        - it-IT
                        - nb-NO
                        - nl-BE
                        - nl-NL
                        - pl-PL
                        - pt-PT
                        - sv-FI
                        - sv-SE
                      type: string
                      x-stripeBypassValidation: true
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                      x-stripeBypassValidation: true
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            konbini:
              anyOf:
                - properties:
                    confirmation_number:
                      anyOf:
                        - maxLength: 11
                          type: string
                        - enum:
                            - ''
                          type: string
                    expires_after_days:
                      anyOf:
                        - type: integer
                        - enum:
                            - ''
                          type: string
                    expires_at:
                      anyOf:
                        - format: unix-time
                          type: integer
                        - enum:
                            - ''
                          type: string
                    product_description:
                      anyOf:
                        - maxLength: 22
                          type: string
                        - enum:
                            - ''
                          type: string
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            link:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            oxxo:
              anyOf:
                - properties:
                    expires_after_days:
                      type: integer
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            p24:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                    tos_shown_and_accepted:
                      type: boolean
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            paynow:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            paypal:
              anyOf:
                - properties:
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
                - enum:
                    - ''
                  type: string
            pix:
              anyOf:
                - properties:
                    expires_after_seconds:
                      type: integer
                    expires_at:
                      format: unix-time
                      type: integer
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            promptpay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            revolut_pay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            sepa_debit:
              anyOf:
                - properties:
                    mandate_options:
                      properties: {}
                      title: payment_method_options_mandate_options_param
                      type: object
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            sofort:
              anyOf:
                - properties:
                    preferred_language:
                      enum:
                        - ''
                        - de
                        - en
                        - es
                        - fr
                        - it
                        - nl
                        - pl
                      type: string
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
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
                    preferred_settlement_speed:
                      enum:
                        - ''
                        - fastest
                        - standard
                      type: string
                    setup_future_usage:
                      enum:
                        - ''
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
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            wechat_pay:
              anyOf:
                - properties:
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
                - enum:
                    - ''
                  type: string
            zip:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
          title: payment_method_options_param
          type: object
        payment_method_types:
          description: >-
            The list of payment method types (for example, card) that this
            PaymentIntent can use. Use `automatic_payment_methods` to manage
            payment methods from the [Stripe
            Dashboard](https://dashboard.stripe.com/settings/payment_methods).
          items:
            maxLength: 5000
            type: string
          type: array
        receipt_email:
          anyOf:
            - type: string
            - enum:
                - ''
              type: string
          description: >-
            Email address that the receipt for the resulting payment will be
            sent to. If `receipt_email` is specified for a payment in live mode,
            a receipt will be sent regardless of your [email
            settings](https://dashboard.stripe.com/account/emails).
        setup_future_usage:
          description: >-
            Indicates that you intend to make future payments with this
            PaymentIntent's payment method.


            Providing this parameter will [attach the payment
            method](https://stripe.com/docs/payments/save-during-payment) to the
            PaymentIntent's Customer, if present, after the PaymentIntent is
            confirmed and any required actions from the user are complete. If no
            Customer was provided, the payment method can still be
            [attached](https://stripe.com/docs/api/payment_methods/attach) to a
            Customer after the transaction completes.


            When processing card payments, Stripe also uses `setup_future_usage`
            to dynamically optimize your payment flow and comply with regional
            legislation and network rules, such as
            [SCA](https://stripe.com/docs/strong-customer-authentication).


            If `setup_future_usage` is already set and you are performing a
            request using a publishable key, you may only update the value from
            `on_session` to `off_session`.
          enum:
            - ''
            - off_session
            - on_session
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
            - enum:
                - ''
              type: string
          description: Shipping information for this PaymentIntent.
        statement_descriptor:
          description: >-
            For card charges, use
            [statement_descriptor_suffix](https://stripe.com/docs/payments/account/statement-descriptors#dynamic).
            Otherwise, you can use this value as the complete description of a
            charge on your customers' statements. It must contain at least one
            letter and be 1–22 characters long.
          maxLength: 22
          type: string
        statement_descriptor_suffix:
          description: >-
            Provides information about a card payment that customers see on
            their statements. Concatenated with the prefix (shortened
            descriptor) or statement descriptor that’s set on the account to
            form the complete statement descriptor. Maximum 22 characters for
            the concatenated descriptor.
          maxLength: 22
          type: string
        transfer_data:
          description: >-
            Use this parameter to automatically create a Transfer when the
            payment succeeds. Learn more about the [use case for connected
            accounts](https://stripe.com/docs/payments/connected-accounts).
          properties:
            amount:
              type: integer
          title: transfer_data_update_params
          type: object
        transfer_group:
          description: >-
            A string that identifies the resulting payment as part of a group.
            You can only provide `transfer_group` if it hasn't been set. Learn
            more about the [use case for connected
            accounts](https://stripe.com/docs/payments/connected-accounts).
          type: string
    PostPaymentIntentsIntentApplyCustomerBalanceRequest:
      type: object
      properties:
        amount:
          description: >-
            Amount that you intend to apply to this PaymentIntent from the
            customer’s cash balance.


            A positive integer representing how much to charge in the [smallest
            currency unit](https://stripe.com/docs/currencies#zero-decimal) (for
            example, 100 cents to charge 1 USD or 100 to charge 100 JPY, a
            zero-decimal currency).


            The maximum amount is the amount of the PaymentIntent.


            When you omit the amount, it defaults to the remaining amount
            requested on the PaymentIntent.
          type: integer
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
    PostPaymentIntentsIntentCancelRequest:
      type: object
      properties:
        cancellation_reason:
          description: >-
            Reason for canceling this PaymentIntent. Possible values are:
            `duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`
          enum:
            - abandoned
            - duplicate
            - fraudulent
            - requested_by_customer
          maxLength: 5000
          type: string
          x-stripeBypassValidation: true
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
    PostPaymentIntentsIntentCaptureRequest:
      type: object
      properties:
        amount_to_capture:
          description: >-
            The amount to capture from the PaymentIntent, which must be less
            than or equal to the original amount. Any additional amount is
            automatically refunded. Defaults to the full `amount_capturable` if
            it's not provided.
          type: integer
        application_fee_amount:
          description: >-
            The amount of the application fee (if any) that will be requested to
            be applied to the payment and transferred to the application owner's
            Stripe account. The amount of the application fee collected will be
            capped at the total payment amount. For more information, see the
            PaymentIntents [use case for connected
            accounts](https://stripe.com/docs/payments/connected-accounts).
          type: integer
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        final_capture:
          description: >-
            Defaults to `true`. When capturing a PaymentIntent, setting
            `final_capture` to `false` notifies Stripe to not release the
            remaining uncaptured funds to make sure that they're captured in
            future requests. You can only use this setting when
            [multicapture](https://stripe.com/docs/payments/multicapture) is
            available for PaymentIntents.
          type: boolean
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
        statement_descriptor:
          description: >-
            For card charges, use
            [statement_descriptor_suffix](https://stripe.com/docs/payments/account/statement-descriptors#dynamic).
            Otherwise, you can use this value as the complete description of a
            charge on your customers' statements. It must contain at least one
            letter and be 1–22 characters long.
          maxLength: 22
          type: string
        statement_descriptor_suffix:
          description: >-
            Provides information about a card payment that customers see on
            their statements. Concatenated with the prefix (shortened
            descriptor) or statement descriptor that’s set on the account to
            form the complete statement descriptor. The concatenated descriptor
            must be 1-22 characters long.
          maxLength: 22
          type: string
        transfer_data:
          description: >-
            The parameters that you can use to automatically create a transfer
            after the payment

            is captured. Learn more about the [use case for connected
            accounts](https://stripe.com/docs/payments/connected-accounts).
          properties:
            amount:
              type: integer
          title: transfer_data_update_params
          type: object
    PostPaymentIntentsIntentConfirmRequest:
      type: object
      properties:
        capture_method:
          description: >-
            Controls when the funds will be captured from the customer's
            account.
          enum:
            - automatic
            - automatic_async
            - manual
          type: string
        client_secret:
          description: The client secret of the PaymentIntent.
          maxLength: 5000
          type: string
        error_on_requires_action:
          description: >-
            Set to `true` to fail the payment attempt if the PaymentIntent
            transitions into `requires_action`. This parameter is intended for
            simpler integrations that do not handle customer actions, like
            [saving cards without
            authentication](https://stripe.com/docs/payments/save-card-without-authentication).
          type: boolean
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        mandate:
          description: ID of the mandate that's used for this payment.
          maxLength: 5000
          type: string
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
        off_session:
          anyOf:
            - type: boolean
            - enum:
                - one_off
                - recurring
              maxLength: 5000
              type: string
          description: >-
            Set to `true` to indicate that the customer isn't in your checkout
            flow during this payment attempt and can't authenticate. Use this
            parameter in scenarios where you collect card details and [charge
            them
            later](https://stripe.com/docs/payments/cards/charging-saved-cards).
        payment_method:
          description: >-
            ID of the payment method (a PaymentMethod, Card, or [compatible
            Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility)
            object) to attach to this PaymentIntent.
          maxLength: 5000
          type: string
        payment_method_data:
          description: >-
            If provided, this hash will be used to create a PaymentMethod. The
            new PaymentMethod will appear

            in the
            [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)

            property on the PaymentIntent.
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
          description: Payment method-specific configuration for this PaymentIntent.
          properties:
            acss_debit:
              anyOf:
                - properties:
                    mandate_options:
                      properties:
                        custom_mandate_url:
                          anyOf:
                            - type: string
                            - enum:
                                - ''
                              type: string
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
                        payment_intent_payment_method_options_mandate_options_param
                      type: object
                    setup_future_usage:
                      enum:
                        - ''
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
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            affirm:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    preferred_locale:
                      maxLength: 30
                      type: string
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            afterpay_clearpay:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    reference:
                      maxLength: 128
                      type: string
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                      x-stripeBypassValidation: true
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            alipay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            au_becs_debit:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            bacs_debit:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_method_options_param
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
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            blik:
              anyOf:
                - properties:
                    code:
                      maxLength: 5000
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            boleto:
              anyOf:
                - properties:
                    expires_after_days:
                      type: integer
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            card:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    cvc_token:
                      maxLength: 5000
                      type: string
                    installments:
                      properties:
                        enabled:
                          type: boolean
                        plan:
                          anyOf:
                            - properties:
                                count:
                                  type: integer
                                interval:
                                  enum:
                                    - month
                                  type: string
                                type:
                                  enum:
                                    - fixed_count
                                  type: string
                              required:
                                - count
                                - interval
                                - type
                              title: installment_plan
                              type: object
                            - enum:
                                - ''
                              type: string
                      title: installments_param
                      type: object
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
                        - interval
                        - reference
                        - start_date
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
                    request_extended_authorization:
                      enum:
                        - if_available
                        - never
                      type: string
                    request_incremental_authorization:
                      enum:
                        - if_available
                        - never
                      type: string
                    request_multicapture:
                      enum:
                        - if_available
                        - never
                      type: string
                    request_overcapture:
                      enum:
                        - if_available
                        - never
                      type: string
                    request_three_d_secure:
                      enum:
                        - any
                        - automatic
                        - challenge
                      type: string
                      x-stripeBypassValidation: true
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                    statement_descriptor_suffix_kana:
                      anyOf:
                        - maxLength: 22
                          type: string
                        - enum:
                            - ''
                          type: string
                    statement_descriptor_suffix_kanji:
                      anyOf:
                        - maxLength: 17
                          type: string
                        - enum:
                            - ''
                          type: string
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
                        exemption_indicator:
                          enum:
                            - low_risk
                            - none
                          type: string
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
                      required:
                        - cryptogram
                        - transaction_id
                        - version
                      title: payment_method_options_param
                      type: object
                  title: payment_intent_param
                  type: object
                - enum:
                    - ''
                  type: string
            card_present:
              anyOf:
                - properties:
                    request_extended_authorization:
                      type: boolean
                    request_incremental_authorization_support:
                      type: boolean
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            cashapp:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_intent_payment_method_options_param
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
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            eps:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            fpx:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            giropay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            grabpay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            ideal:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            interac_present:
              anyOf:
                - properties: {}
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            klarna:
              anyOf:
                - properties:
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
                        - de-CH
                        - de-DE
                        - el-GR
                        - en-AT
                        - en-AU
                        - en-BE
                        - en-CA
                        - en-CH
                        - en-CZ
                        - en-DE
                        - en-DK
                        - en-ES
                        - en-FI
                        - en-FR
                        - en-GB
                        - en-GR
                        - en-IE
                        - en-IT
                        - en-NL
                        - en-NO
                        - en-NZ
                        - en-PL
                        - en-PT
                        - en-SE
                        - en-US
                        - es-ES
                        - es-US
                        - fi-FI
                        - fr-BE
                        - fr-CA
                        - fr-CH
                        - fr-FR
                        - it-CH
                        - it-IT
                        - nb-NO
                        - nl-BE
                        - nl-NL
                        - pl-PL
                        - pt-PT
                        - sv-FI
                        - sv-SE
                      type: string
                      x-stripeBypassValidation: true
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                      x-stripeBypassValidation: true
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            konbini:
              anyOf:
                - properties:
                    confirmation_number:
                      anyOf:
                        - maxLength: 11
                          type: string
                        - enum:
                            - ''
                          type: string
                    expires_after_days:
                      anyOf:
                        - type: integer
                        - enum:
                            - ''
                          type: string
                    expires_at:
                      anyOf:
                        - format: unix-time
                          type: integer
                        - enum:
                            - ''
                          type: string
                    product_description:
                      anyOf:
                        - maxLength: 22
                          type: string
                        - enum:
                            - ''
                          type: string
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            link:
              anyOf:
                - properties:
                    capture_method:
                      enum:
                        - ''
                        - manual
                      type: string
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            oxxo:
              anyOf:
                - properties:
                    expires_after_days:
                      type: integer
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            p24:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                    tos_shown_and_accepted:
                      type: boolean
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            paynow:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            paypal:
              anyOf:
                - properties:
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
                - enum:
                    - ''
                  type: string
            pix:
              anyOf:
                - properties:
                    expires_after_seconds:
                      type: integer
                    expires_at:
                      format: unix-time
                      type: integer
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            promptpay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            revolut_pay:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            sepa_debit:
              anyOf:
                - properties:
                    mandate_options:
                      properties: {}
                      title: payment_method_options_mandate_options_param
                      type: object
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                        - on_session
                      type: string
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            sofort:
              anyOf:
                - properties:
                    preferred_language:
                      enum:
                        - ''
                        - de
                        - en
                        - es
                        - fr
                        - it
                        - nl
                        - pl
                      type: string
                    setup_future_usage:
                      enum:
                        - ''
                        - none
                        - off_session
                      type: string
                  title: payment_method_options_param
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
                    preferred_settlement_speed:
                      enum:
                        - ''
                        - fastest
                        - standard
                      type: string
                    setup_future_usage:
                      enum:
                        - ''
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
                  title: payment_intent_payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
            wechat_pay:
              anyOf:
                - properties:
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
                - enum:
                    - ''
                  type: string
            zip:
              anyOf:
                - properties:
                    setup_future_usage:
                      enum:
                        - none
                      type: string
                  title: payment_method_options_param
                  type: object
                - enum:
                    - ''
                  type: string
          title: payment_method_options_param
          type: object
        payment_method_types:
          description: >-
            The list of payment method types (for example, a card) that this
            PaymentIntent can use. Use `automatic_payment_methods` to manage
            payment methods from the [Stripe
            Dashboard](https://dashboard.stripe.com/settings/payment_methods).
          items:
            maxLength: 5000
            type: string
          type: array
        radar_options:
          description: >-
            Options to configure Radar. Learn more about [Radar
            Sessions](https://stripe.com/docs/radar/radar-session).
          properties:
            session:
              maxLength: 5000
              type: string
          title: radar_options_with_hidden_options
          type: object
        receipt_email:
          anyOf:
            - type: string
            - enum:
                - ''
              type: string
          description: >-
            Email address that the receipt for the resulting payment will be
            sent to. If `receipt_email` is specified for a payment in live mode,
            a receipt will be sent regardless of your [email
            settings](https://dashboard.stripe.com/account/emails).
        return_url:
          description: >-
            The URL to redirect your customer back to after they authenticate or
            cancel their payment on the payment method's app or site.

            If you'd prefer to redirect to a mobile application, you can
            alternatively supply an application URI scheme.

            This parameter is only used for cards and other redirect-based
            payment methods.
          type: string
        setup_future_usage:
          description: >-
            Indicates that you intend to make future payments with this
            PaymentIntent's payment method.


            Providing this parameter will [attach the payment
            method](https://stripe.com/docs/payments/save-during-payment) to the
            PaymentIntent's Customer, if present, after the PaymentIntent is
            confirmed and any required actions from the user are complete. If no
            Customer was provided, the payment method can still be
            [attached](https://stripe.com/docs/api/payment_methods/attach) to a
            Customer after the transaction completes.


            When processing card payments, Stripe also uses `setup_future_usage`
            to dynamically optimize your payment flow and comply with regional
            legislation and network rules, such as
            [SCA](https://stripe.com/docs/strong-customer-authentication).


            If `setup_future_usage` is already set and you are performing a
            request using a publishable key, you may only update the value from
            `on_session` to `off_session`.
          enum:
            - ''
            - off_session
            - on_session
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
            - enum:
                - ''
              type: string
          description: Shipping information for this PaymentIntent.
        use_stripe_sdk:
          description: >-
            Set to `true` when confirming server-side and using Stripe.js, iOS,
            or Android client-side SDKs to handle the next actions.
          type: boolean
    PostPaymentIntentsIntentIncrementAuthorizationRequest:
      type: object
      required:
        - amount
      properties:
        amount:
          description: >-
            The updated total amount that you intend to collect from the
            cardholder. This amount must be greater than the currently
            authorized amount.
          type: integer
        application_fee_amount:
          description: >-
            The amount of the application fee (if any) that will be requested to
            be applied to the payment and transferred to the application owner's
            Stripe account. The amount of the application fee collected will be
            capped at the total payment amount. For more information, see the
            PaymentIntents [use case for connected
            accounts](https://stripe.com/docs/payments/connected-accounts).
          type: integer
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
        metadata:
          additionalProperties:
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
            Individual keys can be unset by posting an empty value to them. All
            keys can be unset by posting an empty value to `metadata`.
          type: object
        statement_descriptor:
          description: >-
            For card charges, use
            [statement_descriptor_suffix](https://stripe.com/docs/payments/account/statement-descriptors#dynamic).
            Otherwise, you can use this value as the complete description of a
            charge on your customers' statements. It must contain at least one
            letter and be 1–22 characters long.
          maxLength: 22
          type: string
        transfer_data:
          description: >-
            The parameters used to automatically create a transfer after the
            payment is captured.

            Learn more about the [use case for connected
            accounts](https://stripe.com/docs/payments/connected-accounts).
          properties:
            amount:
              type: integer
          title: transfer_data_update_params
          type: object
    PostPaymentIntentsIntentVerifyMicrodepositsRequest:
      type: object
      properties:
        amounts:
          description: >-
            Two positive integers, in *cents*, equal to the values of the
            microdeposits sent to the bank account.
          items:
            type: integer
          type: array
        client_secret:
          description: The client secret of the PaymentIntent.
          maxLength: 5000
          type: string
        descriptor_code:
          description: >-
            A six-character code starting with SM present in the microdeposit
            sent to the bank account.
          maxLength: 5000
          type: string
        expand:
          description: Specifies which fields in the response should be expanded.
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