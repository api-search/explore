---
openapi: 3.0.0
info:
  title: Stripe Quotes API
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
  /v1/quotes:
    get:
      description: <p>Returns a list of your quotes.</p>
      operationId: GetQuotes
      parameters:
        - description: The ID of the customer whose quotes will be retrieved.
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
        - description: The status of the quote.
          in: query
          name: status
          required: false
          schema:
            enum:
              - accepted
              - canceled
              - draft
              - open
            type: string
            x-stripeBypassValidation: true
          style: form
        - description: >-
            Provides a list of quotes that are associated with the specified
            test clock. The response will not include quotes with test clocks if
            this and the customer parameter is not set.
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
              $ref: '#/components/schemas/GetQuotesRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/QuotesResourceQuoteList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>A quote models prices and services for a customer. Default options
        for <code>header</code>, <code>description</code>, <code>footer</code>,
        and <code>expires_at</code> can be set in the dashboard via the <a
        href="https://dashboard.stripe.com/settings/billing/quote">quote
        template</a>.</p>
      operationId: PostQuotes
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              application_fee_amount:
                explode: true
                style: deepObject
              application_fee_percent:
                explode: true
                style: deepObject
              automatic_tax:
                explode: true
                style: deepObject
              default_tax_rates:
                explode: true
                style: deepObject
              description:
                explode: true
                style: deepObject
              discounts:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              footer:
                explode: true
                style: deepObject
              from_quote:
                explode: true
                style: deepObject
              header:
                explode: true
                style: deepObject
              invoice_settings:
                explode: true
                style: deepObject
              line_items:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              on_behalf_of:
                explode: true
                style: deepObject
              subscription_data:
                explode: true
                style: deepObject
              transfer_data:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostQuotesRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/quote'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/quotes/{quote}':
    get:
      description: <p>Retrieves the quote with the given ID.</p>
      operationId: GetQuotesQuote
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
          name: quote
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
              $ref: '#/components/schemas/GetQuotesQuoteRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/quote'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: <p>A quote models prices and services for a customer.</p>
      operationId: PostQuotesQuote
      parameters:
        - in: path
          name: quote
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
              application_fee_percent:
                explode: true
                style: deepObject
              automatic_tax:
                explode: true
                style: deepObject
              default_tax_rates:
                explode: true
                style: deepObject
              description:
                explode: true
                style: deepObject
              discounts:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              footer:
                explode: true
                style: deepObject
              header:
                explode: true
                style: deepObject
              invoice_settings:
                explode: true
                style: deepObject
              line_items:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              on_behalf_of:
                explode: true
                style: deepObject
              subscription_data:
                explode: true
                style: deepObject
              transfer_data:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostQuotesQuoteRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/quote'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/quotes/{quote}/accept':
    post:
      description: <p>Accepts the specified quote.</p>
      operationId: PostQuotesQuoteAccept
      parameters:
        - in: path
          name: quote
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
              $ref: '#/components/schemas/PostQuotesQuoteAcceptRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/quote'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/quotes/{quote}/cancel':
    post:
      description: <p>Cancels the quote.</p>
      operationId: PostQuotesQuoteCancel
      parameters:
        - in: path
          name: quote
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
              $ref: '#/components/schemas/PostQuotesQuoteCancelRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/quote'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/quotes/{quote}/computed_upfront_line_items':
    get:
      description: >-
        <p>When retrieving a quote, there is an includable <a
        href="https://stripe.com/docs/api/quotes/object#quote_object-computed-upfront-line_items"><strong>computed.upfront.line_items</strong></a>
        property containing the first handful of those items. There is also a
        URL where you can retrieve the full (paginated) list of upfront line
        items.</p>
      operationId: GetQuotesQuoteComputedUpfrontLineItems
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
          name: quote
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
              $ref: >-
                #/components/schemas/GetQuotesQuoteComputedUpfrontLineItemsRequest
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/QuotesResourceListLineItems'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/quotes/{quote}/finalize':
    post:
      description: <p>Finalizes the quote.</p>
      operationId: PostQuotesQuoteFinalize
      parameters:
        - in: path
          name: quote
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
              $ref: '#/components/schemas/PostQuotesQuoteFinalizeRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/quote'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/quotes/{quote}/line_items':
    get:
      description: >-
        <p>When retrieving a quote, there is an includable
        <strong>line_items</strong> property containing the first handful of
        those items. There is also a URL where you can retrieve the full
        (paginated) list of line items.</p>
      operationId: GetQuotesQuoteLineItems
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
          name: quote
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
              $ref: '#/components/schemas/GetQuotesQuoteLineItemsRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/QuotesResourceListLineItems'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/quotes/{quote}/pdf':
    get:
      description: <p>Download the PDF for a finalized quote</p>
      operationId: GetQuotesQuotePdf
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
          name: quote
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
              $ref: '#/components/schemas/GetQuotesQuotePdfRequest'
        required: false
      responses:
        '200':
          content:
            application/pdf:
              schema:
                format: binary
                type: string
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
    quote:
      description: >-
        A Quote is a way to model prices that you'd like to provide to a
        customer.

        Once accepted, it will automatically create an invoice, subscription or
        subscription schedule.
      properties:
        amount_subtotal:
          description: Total before any discounts or taxes are applied.
          type: integer
        amount_total:
          description: Total after discounts and taxes are applied.
          type: integer
        application:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/application'
            - $ref: '#/components/schemas/deleted_application'
          description: ID of the Connect Application that created the quote.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/application'
              - $ref: '#/components/schemas/deleted_application'
        application_fee_amount:
          description: >-
            The amount of the application fee (if any) that will be requested to
            be applied to the payment and transferred to the application owner's
            Stripe account. Only applicable if there are no line items with
            recurring prices on the quote.
          nullable: true
          type: integer
        application_fee_percent:
          description: >-
            A non-negative decimal between 0 and 100, with at most two decimal
            places. This represents the percentage of the subscription invoice
            total that will be transferred to the application owner's Stripe
            account. Only applicable if there are line items with recurring
            prices on the quote.
          nullable: true
          type: number
        automatic_tax:
          $ref: '#/components/schemas/quotes_resource_automatic_tax'
        collection_method:
          description: >-
            Either `charge_automatically`, or `send_invoice`. When charging
            automatically, Stripe will attempt to pay invoices at the end of the
            subscription cycle or on finalization using the default payment
            method attached to the subscription or customer. When sending an
            invoice, Stripe will email your customer an invoice with payment
            instructions and mark the subscription as `active`. Defaults to
            `charge_automatically`.
          enum:
            - charge_automatically
            - send_invoice
          type: string
        computed:
          $ref: '#/components/schemas/quotes_resource_computed'
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
          nullable: true
          type: string
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
            - $ref: '#/components/schemas/deleted_customer'
          description: >-
            The customer which this quote belongs to. A customer is required
            before finalizing the quote. Once specified, it cannot be changed.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
              - $ref: '#/components/schemas/deleted_customer'
        default_tax_rates:
          description: The tax rates applied to this quote.
          items:
            anyOf:
              - maxLength: 5000
                type: string
              - $ref: '#/components/schemas/tax_rate'
            x-expansionResources:
              oneOf:
                - $ref: '#/components/schemas/tax_rate'
          type: array
        description:
          description: A description that will be displayed on the quote PDF.
          maxLength: 5000
          nullable: true
          type: string
        discounts:
          description: The discounts applied to this quote.
          items:
            anyOf:
              - maxLength: 5000
                type: string
              - $ref: '#/components/schemas/discount'
            x-expansionResources:
              oneOf:
                - $ref: '#/components/schemas/discount'
          type: array
        expires_at:
          description: >-
            The date on which the quote will be canceled if in `open` or `draft`
            status. Measured in seconds since the Unix epoch.
          format: unix-time
          type: integer
        footer:
          description: A footer that will be displayed on the quote PDF.
          maxLength: 5000
          nullable: true
          type: string
        from_quote:
          anyOf:
            - $ref: '#/components/schemas/quotes_resource_from_quote'
          description: >-
            Details of the quote that was cloned. See the [cloning
            documentation](https://stripe.com/docs/quotes/clone) for more
            details.
          nullable: true
        header:
          description: A header that will be displayed on the quote PDF.
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
            - $ref: '#/components/schemas/deleted_invoice'
          description: The invoice that was created from this quote.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/invoice'
              - $ref: '#/components/schemas/deleted_invoice'
        invoice_settings:
          $ref: '#/components/schemas/invoice_setting_quote_setting'
        line_items:
          description: A list of items the customer is being quoted for.
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
          title: QuotesResourceListLineItems
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
        number:
          description: >-
            A unique number that identifies this particular quote. This number
            is assigned once the quote is
            [finalized](https://stripe.com/docs/quotes/overview#finalize).
          maxLength: 5000
          nullable: true
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - quote
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
        status:
          description: The status of the quote.
          enum:
            - accepted
            - canceled
            - draft
            - open
          type: string
          x-stripeBypassValidation: true
        status_transitions:
          $ref: '#/components/schemas/quotes_resource_status_transitions'
        subscription:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/subscription'
          description: The subscription that was created or updated from this quote.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/subscription'
        subscription_data:
          $ref: >-
            #/components/schemas/quotes_resource_subscription_data_subscription_data
        subscription_schedule:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/subscription_schedule'
          description: >-
            The subscription schedule that was created or updated from this
            quote.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/subscription_schedule'
        test_clock:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/test_helpers.test_clock'
          description: ID of the test clock this quote belongs to.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/test_helpers.test_clock'
        total_details:
          $ref: '#/components/schemas/quotes_resource_total_details'
        transfer_data:
          anyOf:
            - $ref: '#/components/schemas/quotes_resource_transfer_data'
          description: >-
            The account (if any) the payments will be attributed to for tax
            reporting, and where funds from each payment will be transferred to
            for each of the invoices.
          nullable: true
      required:
        - amount_subtotal
        - amount_total
        - automatic_tax
        - collection_method
        - computed
        - created
        - discounts
        - expires_at
        - id
        - invoice_settings
        - livemode
        - metadata
        - object
        - status
        - status_transitions
        - subscription_data
        - total_details
      title: Quote
      type: object
      x-expandableFields:
        - application
        - automatic_tax
        - computed
        - customer
        - default_tax_rates
        - discounts
        - from_quote
        - invoice
        - invoice_settings
        - line_items
        - on_behalf_of
        - status_transitions
        - subscription
        - subscription_data
        - subscription_schedule
        - test_clock
        - total_details
        - transfer_data
      x-resourceId: quote
    GetQuotesRequest:
      type: object
      properties: {}
    QuotesResourceQuoteList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/quote'
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
          pattern: ^/v1/quotes
          type: string
    PostQuotesRequest:
      type: object
      properties:
        application_fee_amount:
          anyOf:
            - type: integer
            - enum:
                - ''
              type: string
          description: >-
            The amount of the application fee (if any) that will be requested to
            be applied to the payment and transferred to the application owner's
            Stripe account. There cannot be any line items with recurring prices
            when using this field.
        application_fee_percent:
          anyOf:
            - type: number
            - enum:
                - ''
              type: string
          description: >-
            A non-negative decimal between 0 and 100, with at most two decimal
            places. This represents the percentage of the subscription invoice
            total that will be transferred to the application owner's Stripe
            account. There must be at least 1 line item with a recurring price
            to use this field.
        automatic_tax:
          description: >-
            Settings for automatic tax lookup for this quote and resulting
            invoices and subscriptions.
          properties:
            enabled:
              type: boolean
          required:
            - enabled
          title: automatic_tax_param
          type: object
        collection_method:
          description: >-
            Either `charge_automatically`, or `send_invoice`. When charging
            automatically, Stripe will attempt to pay invoices at the end of the
            subscription cycle or at invoice finalization using the default
            payment method attached to the subscription or customer. When
            sending an invoice, Stripe will email your customer an invoice with
            payment instructions and mark the subscription as `active`. Defaults
            to `charge_automatically`.
          enum:
            - charge_automatically
            - send_invoice
          type: string
        customer:
          description: >-
            The customer for which this quote belongs to. A customer is required
            before finalizing the quote. Once specified, it cannot be changed.
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
            The tax rates that will apply to any line item that does not have
            `tax_rates` set.
        description:
          anyOf:
            - maxLength: 500
              type: string
            - enum:
                - ''
              type: string
          description: >-
            A description that will be displayed on the quote PDF. If no value
            is passed, the default description configured in your [quote
            template
            settings](https://dashboard.stripe.com/settings/billing/quote) will
            be used.
        discounts:
          anyOf:
            - items:
                properties:
                  coupon:
                    maxLength: 5000
                    type: string
                  discount:
                    maxLength: 5000
                    type: string
                title: discounts_data_param
                type: object
              type: array
            - enum:
                - ''
              type: string
          description: >-
            The discounts applied to the quote. You can only set up to one
            discount.
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        expires_at:
          description: >-
            A future timestamp on which the quote will be canceled if in `open`
            or `draft` status. Measured in seconds since the Unix epoch. If no
            value is passed, the default expiration date configured in your
            [quote template
            settings](https://dashboard.stripe.com/settings/billing/quote) will
            be used.
          format: unix-time
          type: integer
        footer:
          anyOf:
            - maxLength: 500
              type: string
            - enum:
                - ''
              type: string
          description: >-
            A footer that will be displayed on the quote PDF. If no value is
            passed, the default footer configured in your [quote template
            settings](https://dashboard.stripe.com/settings/billing/quote) will
            be used.
        from_quote:
          description: >-
            Clone an existing quote. The new quote will be created in
            `status=draft`. When using this parameter, you cannot specify any
            other parameters except for `expires_at`.
          properties:
            is_revision:
              type: boolean
            quote:
              maxLength: 5000
              type: string
          required:
            - quote
          title: from_quote_params
          type: object
        header:
          anyOf:
            - maxLength: 50
              type: string
            - enum:
                - ''
              type: string
          description: >-
            A header that will be displayed on the quote PDF. If no value is
            passed, the default header configured in your [quote template
            settings](https://dashboard.stripe.com/settings/billing/quote) will
            be used.
        invoice_settings:
          description: All invoices will be billed using the specified settings.
          properties:
            days_until_due:
              type: integer
          title: quote_param
          type: object
        line_items:
          description: >-
            A list of line items the customer is being quoted for. Each line
            item includes information about the product, the quantity, and the
            resulting cost.
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
                title: price_data
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
            title: line_item_create_params
            type: object
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
        on_behalf_of:
          anyOf:
            - type: string
            - enum:
                - ''
              type: string
          description: The account on behalf of which to charge.
        subscription_data:
          description: >-
            When creating a subscription or subscription schedule, the specified
            configuration data will be used. There must be at least one line
            item with a recurring price for a subscription or subscription
            schedule to be created. A subscription schedule is created if
            `subscription_data[effective_date]` is present and in the future,
            otherwise a subscription is created.
          properties:
            description:
              maxLength: 500
              type: string
            effective_date:
              anyOf:
                - enum:
                    - current_period_end
                  maxLength: 5000
                  type: string
                - format: unix-time
                  type: integer
                - enum:
                    - ''
                  type: string
            metadata:
              additionalProperties:
                type: string
              type: object
            trial_period_days:
              anyOf:
                - type: integer
                - enum:
                    - ''
                  type: string
          title: subscription_data_create_params
          type: object
        test_clock:
          description: ID of the test clock to attach to the quote.
          maxLength: 5000
          type: string
        transfer_data:
          anyOf:
            - properties:
                amount:
                  type: integer
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
            The data with which to automatically create a Transfer for each of
            the invoices.
    GetQuotesQuoteRequest:
      type: object
      properties: {}
    PostQuotesQuoteRequest:
      type: object
      properties:
        application_fee_amount:
          anyOf:
            - type: integer
            - enum:
                - ''
              type: string
          description: >-
            The amount of the application fee (if any) that will be requested to
            be applied to the payment and transferred to the application owner's
            Stripe account. There cannot be any line items with recurring prices
            when using this field.
        application_fee_percent:
          anyOf:
            - type: number
            - enum:
                - ''
              type: string
          description: >-
            A non-negative decimal between 0 and 100, with at most two decimal
            places. This represents the percentage of the subscription invoice
            total that will be transferred to the application owner's Stripe
            account. There must be at least 1 line item with a recurring price
            to use this field.
        automatic_tax:
          description: >-
            Settings for automatic tax lookup for this quote and resulting
            invoices and subscriptions.
          properties:
            enabled:
              type: boolean
          required:
            - enabled
          title: automatic_tax_param
          type: object
        collection_method:
          description: >-
            Either `charge_automatically`, or `send_invoice`. When charging
            automatically, Stripe will attempt to pay invoices at the end of the
            subscription cycle or at invoice finalization using the default
            payment method attached to the subscription or customer. When
            sending an invoice, Stripe will email your customer an invoice with
            payment instructions and mark the subscription as `active`. Defaults
            to `charge_automatically`.
          enum:
            - charge_automatically
            - send_invoice
          type: string
        customer:
          description: >-
            The customer for which this quote belongs to. A customer is required
            before finalizing the quote. Once specified, it cannot be changed.
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
            The tax rates that will apply to any line item that does not have
            `tax_rates` set.
        description:
          anyOf:
            - maxLength: 500
              type: string
            - enum:
                - ''
              type: string
          description: A description that will be displayed on the quote PDF.
        discounts:
          anyOf:
            - items:
                properties:
                  coupon:
                    maxLength: 5000
                    type: string
                  discount:
                    maxLength: 5000
                    type: string
                title: discounts_data_param
                type: object
              type: array
            - enum:
                - ''
              type: string
          description: >-
            The discounts applied to the quote. You can only set up to one
            discount.
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        expires_at:
          description: >-
            A future timestamp on which the quote will be canceled if in `open`
            or `draft` status. Measured in seconds since the Unix epoch.
          format: unix-time
          type: integer
        footer:
          anyOf:
            - maxLength: 500
              type: string
            - enum:
                - ''
              type: string
          description: A footer that will be displayed on the quote PDF.
        header:
          anyOf:
            - maxLength: 50
              type: string
            - enum:
                - ''
              type: string
          description: A header that will be displayed on the quote PDF.
        invoice_settings:
          description: All invoices will be billed using the specified settings.
          properties:
            days_until_due:
              type: integer
          title: quote_param
          type: object
        line_items:
          description: >-
            A list of line items the customer is being quoted for. Each line
            item includes information about the product, the quantity, and the
            resulting cost.
          items:
            properties:
              id:
                maxLength: 5000
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
                title: price_data
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
            title: line_item_update_params
            type: object
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
        on_behalf_of:
          anyOf:
            - type: string
            - enum:
                - ''
              type: string
          description: The account on behalf of which to charge.
        subscription_data:
          description: >-
            When creating a subscription or subscription schedule, the specified
            configuration data will be used. There must be at least one line
            item with a recurring price for a subscription or subscription
            schedule to be created. A subscription schedule is created if
            `subscription_data[effective_date]` is present and in the future,
            otherwise a subscription is created.
          properties:
            description:
              anyOf:
                - maxLength: 500
                  type: string
                - enum:
                    - ''
                  type: string
            effective_date:
              anyOf:
                - enum:
                    - current_period_end
                  maxLength: 5000
                  type: string
                - format: unix-time
                  type: integer
                - enum:
                    - ''
                  type: string
            metadata:
              additionalProperties:
                type: string
              type: object
            trial_period_days:
              anyOf:
                - type: integer
                - enum:
                    - ''
                  type: string
          title: subscription_data_update_params
          type: object
        transfer_data:
          anyOf:
            - properties:
                amount:
                  type: integer
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
            The data with which to automatically create a Transfer for each of
            the invoices.
    PostQuotesQuoteAcceptRequest:
      type: object
      properties:
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
    PostQuotesQuoteCancelRequest:
      type: object
      properties:
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
    GetQuotesQuoteComputedUpfrontLineItemsRequest:
      type: object
      properties: {}
    QuotesResourceListLineItems:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          description: Details about each object.
          items:
            $ref: '#/components/schemas/item'
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
    PostQuotesQuoteFinalizeRequest:
      type: object
      properties:
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        expires_at:
          description: >-
            A future timestamp on which the quote will be canceled if in `open`
            or `draft` status. Measured in seconds since the Unix epoch.
          format: unix-time
          type: integer
    GetQuotesQuoteLineItemsRequest:
      type: object
      properties: {}
    GetQuotesQuotePdfRequest:
      type: object
      properties: {}
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