---
openapi: 3.0.0
info:
  title: Stripe Tax API
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
  /v1/tax/calculations:
    post:
      description: >-
        <p>Calculates tax based on input and returns a Tax
        <code>Calculation</code> object.</p>
      operationId: PostTaxCalculations
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              customer_details:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              line_items:
                explode: true
                style: deepObject
              shipping_cost:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostTaxCalculationsRequest'
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/tax.calculation'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/tax/calculations/{calculation}/line_items':
    get:
      description: >-
        <p>Retrieves the line items of a persisted tax calculation as a
        collection.</p>
      operationId: GetTaxCalculationsCalculationLineItems
      parameters:
        - in: path
          name: calculation
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
            maxLength: 500
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
            maxLength: 500
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              $ref: >-
                #/components/schemas/GetTaxCalculationsCalculationLineItemsRequest
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: >-
                  #/components/schemas/TaxProductResourceTaxCalculationLineItemList
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  /v1/tax/registrations:
    get:
      description: <p>Returns a list of Tax <code>Registration</code> objects.</p>
      operationId: GetTaxRegistrations
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
        - description: The status of the Tax Registration.
          in: query
          name: status
          required: false
          schema:
            enum:
              - active
              - all
              - expired
              - scheduled
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/GetTaxRegistrationsRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: >-
                  #/components/schemas/TaxProductRegistrationsResourceTaxRegistrationList
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: <p>Creates a new Tax <code>Registration</code> object.</p>
      operationId: PostTaxRegistrations
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              active_from:
                explode: true
                style: deepObject
              country_options:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostTaxRegistrationsRequest'
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/tax.registration'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/tax/registrations/{id}':
    post:
      description: >-
        <p>Updates an existing Tax <code>Registration</code> object.</p>


        <p>A registration cannot be deleted after it has been created. If you
        wish to end a registration you may do so by setting
        <code>expires_at</code>.</p>
      operationId: PostTaxRegistrationsId
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
              active_from:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              expires_at:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostTaxRegistrationsIdRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/tax.registration'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  /v1/tax/settings:
    get:
      description: <p>Retrieves Tax <code>Settings</code> for a merchant.</p>
      operationId: GetTaxSettings
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
              $ref: '#/components/schemas/GetTaxSettingsRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/tax.settings'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>Updates Tax <code>Settings</code> parameters used in tax
        calculations. All parameters are editable but none can be removed once
        set.</p>
      operationId: PostTaxSettings
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              defaults:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              head_office:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostTaxSettingsRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/tax.settings'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  /v1/tax/transactions/create_from_calculation:
    post:
      description: <p>Creates a Tax <code>Transaction</code> from a calculation.</p>
      operationId: PostTaxTransactionsCreateFromCalculation
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
              $ref: >-
                #/components/schemas/PostTaxTransactionsCreateFromCalculationRequest
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/tax.transaction'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  /v1/tax/transactions/create_reversal:
    post:
      description: >-
        <p>Partially or fully reverses a previously created
        <code>Transaction</code>.</p>
      operationId: PostTaxTransactionsCreateReversal
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              line_items:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              shipping_cost:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostTaxTransactionsCreateReversalRequest'
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/tax.transaction'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/tax/transactions/{transaction}':
    get:
      description: <p>Retrieves a Tax <code>Transaction</code> object.</p>
      operationId: GetTaxTransactionsTransaction
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
          name: transaction
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
              $ref: '#/components/schemas/GetTaxTransactionsTransactionRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/tax.transaction'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/tax/transactions/{transaction}/line_items':
    get:
      description: >-
        <p>Retrieves the line items of a committed standalone transaction as a
        collection.</p>
      operationId: GetTaxTransactionsTransactionLineItems
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
            maxLength: 500
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
            maxLength: 500
            type: string
          style: form
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
            encoding: {}
            schema:
              additionalProperties: false
              $ref: >-
                #/components/schemas/GetTaxTransactionsTransactionLineItemsRequest
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: >-
                  #/components/schemas/TaxProductResourceTaxTransactionLineItemList
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  /v1/tax_codes:
    get:
      description: >-
        <p>A list of <a href="https://stripe.com/docs/tax/tax-categories">all
        tax codes available</a> to add to Products in order to allow specific
        tax calculations.</p>
      operationId: GetTaxCodes
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
              $ref: '#/components/schemas/GetTaxCodesRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/TaxProductResourceTaxCodeList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/tax_codes/{id}':
    get:
      description: >-
        <p>Retrieves the details of an existing tax code. Supply the unique tax
        code ID and Stripe will return the corresponding tax code
        information.</p>
      operationId: GetTaxCodesId
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
              $ref: '#/components/schemas/GetTaxCodesIdRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/tax_code'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  /v1/tax_rates:
    get:
      description: >-
        <p>Returns a list of your tax rates. Tax rates are returned sorted by
        creation date, with the most recently created tax rates appearing
        first.</p>
      operationId: GetTaxRates
      parameters:
        - description: >-
            Optional flag to filter by tax rates that are either active or
            inactive (archived).
          in: query
          name: active
          required: false
          schema:
            type: boolean
          style: form
        - description: Optional range for filtering created date.
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
            Optional flag to filter by tax rates that are inclusive (or those
            that are not inclusive).
          in: query
          name: inclusive
          required: false
          schema:
            type: boolean
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
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/GetTaxRatesRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/TaxRatesList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: <p>Creates a new tax rate.</p>
      operationId: PostTaxRates
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
              $ref: '#/components/schemas/PostTaxRatesRequest'
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/tax_rate'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/tax_rates/{tax_rate}':
    get:
      description: <p>Retrieves a tax rate with the given ID</p>
      operationId: GetTaxRatesTaxRate
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
          name: tax_rate
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
              $ref: '#/components/schemas/GetTaxRatesTaxRateRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/tax_rate'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: <p>Updates an existing tax rate.</p>
      operationId: PostTaxRatesTaxRate
      parameters:
        - in: path
          name: tax_rate
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
              $ref: '#/components/schemas/PostTaxRatesTaxRateRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/tax_rate'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
components:
  schemas:
    tax.calculation:
      description: >-
        A Tax Calculation allows you to calculate the tax to collect from your
        customer.


        Related guide: [Calculate tax in your custom payment
        flow](https://stripe.com/docs/tax/custom)
      properties:
        amount_total:
          description: Total after taxes.
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
          description: >-
            The ID of an existing
            [Customer](https://stripe.com/docs/api/customers/object) used for
            the resource.
          maxLength: 5000
          nullable: true
          type: string
        customer_details:
          $ref: '#/components/schemas/tax_product_resource_customer_details'
        expires_at:
          description: Timestamp of date at which the tax calculation will expire.
          format: unix-time
          nullable: true
          type: integer
        id:
          description: Unique identifier for the calculation.
          maxLength: 5000
          nullable: true
          type: string
        line_items:
          description: The list of items the customer is purchasing.
          nullable: true
          properties:
            data:
              description: Details about each object.
              items:
                $ref: '#/components/schemas/tax.calculation_line_item'
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
              pattern: '^/v1/tax/calculations/[^/]+/line_items'
              type: string
          required:
            - data
            - has_more
            - object
            - url
          title: TaxProductResourceTaxCalculationLineItemList
          type: object
          x-expandableFields:
            - data
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
            - tax.calculation
          type: string
        shipping_cost:
          anyOf:
            - $ref: >-
                #/components/schemas/tax_product_resource_tax_calculation_shipping_cost
          description: The shipping cost details for the calculation.
          nullable: true
        tax_amount_exclusive:
          description: The amount of tax to be collected on top of the line item prices.
          type: integer
        tax_amount_inclusive:
          description: The amount of tax already included in the line item prices.
          type: integer
        tax_breakdown:
          description: Breakdown of individual tax amounts that add up to the total.
          items:
            $ref: '#/components/schemas/tax_product_resource_tax_breakdown'
          type: array
        tax_date:
          description: >-
            Timestamp of date at which the tax rules and rates in effect applies
            for the calculation.
          format: unix-time
          type: integer
      required:
        - amount_total
        - currency
        - customer_details
        - livemode
        - object
        - tax_amount_exclusive
        - tax_amount_inclusive
        - tax_breakdown
        - tax_date
      title: TaxProductResourceTaxCalculation
      type: object
      x-expandableFields:
        - customer_details
        - line_items
        - shipping_cost
        - tax_breakdown
      x-resourceId: tax.calculation
    error:
      description: An error response from the Stripe API
      properties:
        error:
          $ref: '#/components/schemas/api_errors'
      required:
        - error
      type: object
    tax.registration:
      description: >-
        A Tax `Registration` lets us know that your business is registered to
        collect tax on payments within a region, enabling you to [automatically
        collect tax](https://stripe.com/docs/tax).


        Stripe doesn't register on your behalf with the relevant authorities
        when you create a Tax `Registration` object. For more information on how
        to register to collect tax, see [our
        guide](https://stripe.com/docs/tax/registering).


        Related guide: [Using the Registrations
        API](https://stripe.com/docs/tax/registrations-api)
      properties:
        active_from:
          description: >-
            Time at which the registration becomes active. Measured in seconds
            since the Unix epoch.
          format: unix-time
          type: integer
        country:
          description: >-
            Two-letter country code ([ISO 3166-1
            alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
          maxLength: 5000
          type: string
        country_options:
          $ref: >-
            #/components/schemas/tax_product_registrations_resource_country_options
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        expires_at:
          description: >-
            If set, the registration stops being active at this time. If not
            set, the registration will be active indefinitely. Measured in
            seconds since the Unix epoch.
          format: unix-time
          nullable: true
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
            - tax.registration
          type: string
        status:
          description: >-
            The status of the registration. This field is present for
            convenience and can be deduced from `active_from` and `expires_at`.
          enum:
            - active
            - expired
            - scheduled
          type: string
      required:
        - active_from
        - country
        - country_options
        - created
        - id
        - livemode
        - object
        - status
      title: TaxProductRegistrationsResourceTaxRegistration
      type: object
      x-expandableFields:
        - country_options
      x-resourceId: tax.registration
    tax.settings:
      description: >-
        You can use Tax `Settings` to manage configurations used by Stripe Tax
        calculations.


        Related guide: [Using the Settings
        API](https://stripe.com/docs/tax/settings-api)
      properties:
        defaults:
          $ref: '#/components/schemas/tax_product_resource_tax_settings_defaults'
        head_office:
          anyOf:
            - $ref: >-
                #/components/schemas/tax_product_resource_tax_settings_head_office
          description: The place where your business is located.
          nullable: true
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
            - tax.settings
          type: string
        status:
          description: >-
            The `active` status indicates you have all required settings to
            calculate tax. A status can transition out of `active` when new
            required settings are introduced.
          enum:
            - active
            - pending
          type: string
        status_details:
          $ref: >-
            #/components/schemas/tax_product_resource_tax_settings_status_details
      required:
        - defaults
        - livemode
        - object
        - status
        - status_details
      title: TaxProductResourceTaxSettings
      type: object
      x-expandableFields:
        - defaults
        - head_office
        - status_details
      x-resourceId: tax.settings
    tax.transaction:
      description: >-
        A Tax Transaction records the tax collected from or refunded to your
        customer.


        Related guide: [Calculate tax in your custom payment
        flow](https://stripe.com/docs/tax/custom#tax-transaction)
      properties:
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
          description: >-
            The ID of an existing
            [Customer](https://stripe.com/docs/api/customers/object) used for
            the resource.
          maxLength: 5000
          nullable: true
          type: string
        customer_details:
          $ref: '#/components/schemas/tax_product_resource_customer_details'
        id:
          description: Unique identifier for the transaction.
          maxLength: 5000
          type: string
        line_items:
          description: 'The tax collected or refunded, by line item.'
          nullable: true
          properties:
            data:
              description: Details about each object.
              items:
                $ref: '#/components/schemas/tax.transaction_line_item'
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
              pattern: '^/v1/tax/transactions/[^/]+/line_items'
              type: string
          required:
            - data
            - has_more
            - object
            - url
          title: TaxProductResourceTaxTransactionLineItemList
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
          nullable: true
          type: object
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - tax.transaction
          type: string
        reference:
          description: 'A custom unique identifier, such as ''myOrder_123''.'
          maxLength: 5000
          type: string
        reversal:
          anyOf:
            - $ref: >-
                #/components/schemas/tax_product_resource_tax_transaction_resource_reversal
          description: 'If `type=reversal`, contains information about what was reversed.'
          nullable: true
        shipping_cost:
          anyOf:
            - $ref: >-
                #/components/schemas/tax_product_resource_tax_transaction_shipping_cost
          description: The shipping cost details for the transaction.
          nullable: true
        tax_date:
          description: >-
            Timestamp of date at which the tax rules and rates in effect applies
            for the calculation.
          format: unix-time
          type: integer
        type:
          description: 'If `reversal`, this transaction reverses an earlier transaction.'
          enum:
            - reversal
            - transaction
          type: string
      required:
        - created
        - currency
        - customer_details
        - id
        - livemode
        - object
        - reference
        - tax_date
        - type
      title: TaxProductResourceTaxTransaction
      type: object
      x-expandableFields:
        - customer_details
        - line_items
        - reversal
        - shipping_cost
      x-resourceId: tax.transaction
    tax_code:
      description: >-
        [Tax codes](https://stripe.com/docs/tax/tax-categories) classify goods
        and services for tax purposes.
      properties:
        description:
          description: >-
            A detailed description of which types of products the tax code
            represents.
          maxLength: 5000
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        name:
          description: A short name for the tax code.
          maxLength: 5000
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - tax_code
          type: string
      required:
        - description
        - id
        - name
        - object
      title: TaxProductResourceTaxCode
      type: object
      x-expandableFields: []
      x-resourceId: tax_code
    tax_rate:
      description: >-
        Tax rates can be applied to
        [invoices](https://stripe.com/docs/billing/invoices/tax-rates),
        [subscriptions](https://stripe.com/docs/billing/subscriptions/taxes) and
        [Checkout
        Sessions](https://stripe.com/docs/payments/checkout/set-up-a-subscription#tax-rates)
        to collect tax.


        Related guide: [Tax
        rates](https://stripe.com/docs/billing/taxes/tax-rates)
      properties:
        active:
          description: >-
            Defaults to `true`. When set to `false`, this tax rate cannot be
            used with new applications or Checkout Sessions, but will still work
            for subscriptions and invoices that already have it set.
          type: boolean
        country:
          description: >-
            Two-letter country code ([ISO 3166-1
            alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
          maxLength: 5000
          nullable: true
          type: string
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        description:
          description: >-
            An arbitrary string attached to the tax rate for your internal use
            only. It will not be visible to your customers.
          maxLength: 5000
          nullable: true
          type: string
        display_name:
          description: >-
            The display name of the tax rates as it will appear to your customer
            on their receipt email, PDF, and the hosted invoice page.
          maxLength: 5000
          type: string
        effective_percentage:
          description: >-
            Actual/effective tax rate percentage out of 100. For tax
            calculations with automatic_tax[enabled]=true,

            this percentage reflects the rate actually used to calculate tax
            based on the product's taxability

            and whether the user is registered to collect taxes in the
            corresponding jurisdiction.
          nullable: true
          type: number
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        inclusive:
          description: This specifies if the tax rate is inclusive or exclusive.
          type: boolean
        jurisdiction:
          description: >-
            The jurisdiction for the tax rate. You can use this label field for
            tax reporting purposes. It also appears on your customer’s invoice.
          maxLength: 5000
          nullable: true
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
            - tax_rate
          type: string
        percentage:
          description: >-
            Tax rate percentage out of 100. For tax calculations with
            automatic_tax[enabled]=true, this percentage includes the statutory
            tax rate of non-taxable jurisdictions.
          type: number
        state:
          description: >-
            [ISO 3166-2 subdivision
            code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country
            prefix. For example, "NY" for New York, United States.
          maxLength: 5000
          nullable: true
          type: string
        tax_type:
          description: 'The high-level tax type, such as `vat` or `sales_tax`.'
          enum:
            - amusement_tax
            - communications_tax
            - gst
            - hst
            - igst
            - jct
            - lease_tax
            - pst
            - qst
            - rst
            - sales_tax
            - service_tax
            - vat
          nullable: true
          type: string
      required:
        - active
        - created
        - display_name
        - id
        - inclusive
        - livemode
        - object
        - percentage
      title: TaxRate
      type: object
      x-expandableFields: []
      x-resourceId: tax_rate
    PostTaxCalculationsRequest:
      type: object
      required:
        - currency
        - line_items
      properties:
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        customer:
          description: >-
            The ID of an existing customer to use for this calculation. If
            provided, the customer's address and tax IDs are copied to
            `customer_details`.
          maxLength: 5000
          type: string
        customer_details:
          description: 'Details about the customer, including address and tax IDs.'
          properties:
            address:
              properties:
                city:
                  anyOf:
                    - maxLength: 5000
                      type: string
                    - enum:
                        - ''
                      type: string
                country:
                  maxLength: 5000
                  type: string
                line1:
                  anyOf:
                    - maxLength: 5000
                      type: string
                    - enum:
                        - ''
                      type: string
                line2:
                  anyOf:
                    - maxLength: 5000
                      type: string
                    - enum:
                        - ''
                      type: string
                postal_code:
                  anyOf:
                    - maxLength: 5000
                      type: string
                    - enum:
                        - ''
                      type: string
                state:
                  anyOf:
                    - maxLength: 5000
                      type: string
                    - enum:
                        - ''
                      type: string
              required:
                - country
              title: postal_address
              type: object
            address_source:
              enum:
                - billing
                - shipping
              type: string
            ip_address:
              type: string
            tax_ids:
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
            taxability_override:
              enum:
                - customer_exempt
                - none
                - reverse_charge
              type: string
          title: customer_details
          type: object
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        line_items:
          description: A list of items the customer is purchasing.
          items:
            properties:
              amount:
                type: integer
              product:
                maxLength: 5000
                type: string
              quantity:
                type: integer
              reference:
                maxLength: 500
                type: string
              tax_behavior:
                enum:
                  - exclusive
                  - inclusive
                type: string
              tax_code:
                type: string
            required:
              - amount
            title: calculation_line_item
            type: object
          type: array
        shipping_cost:
          description: Shipping cost details to be used for the calculation.
          properties:
            amount:
              type: integer
            shipping_rate:
              maxLength: 5000
              type: string
            tax_behavior:
              enum:
                - exclusive
                - inclusive
              type: string
            tax_code:
              type: string
          title: shipping_cost
          type: object
        tax_date:
          description: >-
            Timestamp of date at which the tax rules and rates in effect applies
            for the calculation. Measured in seconds since the Unix epoch. Can
            be up to 48 hours in the past, and up to 48 hours in the future.
          type: integer
    GetTaxCalculationsCalculationLineItemsRequest:
      type: object
      properties: {}
    TaxProductResourceTaxCalculationLineItemList:
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
            $ref: '#/components/schemas/tax.calculation_line_item'
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
          pattern: '^/v1/tax/calculations/[^/]+/line_items'
          type: string
    GetTaxRegistrationsRequest:
      type: object
      properties: {}
    TaxProductRegistrationsResourceTaxRegistrationList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/tax.registration'
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
          pattern: ^/v1/tax/registrations
          type: string
    PostTaxRegistrationsRequest:
      type: object
      required:
        - active_from
        - country
        - country_options
      properties:
        active_from:
          anyOf:
            - enum:
                - now
              maxLength: 5000
              type: string
            - format: unix-time
              type: integer
          description: >-
            Time at which the Tax Registration becomes active. It can be either
            `now` to indicate the current time, or a future timestamp measured
            in seconds since the Unix epoch.
        country:
          description: >-
            Two-letter country code ([ISO 3166-1
            alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
          maxLength: 5000
          type: string
        country_options:
          description: Specific options for a registration in the specified `country`.
          properties:
            ae:
              properties:
                type:
                  enum:
                    - standard
                  type: string
              required:
                - type
              title: default
              type: object
            at:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            au:
              properties:
                type:
                  enum:
                    - standard
                  type: string
              required:
                - type
              title: default
              type: object
            be:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            bg:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            ca:
              properties:
                province_standard:
                  properties:
                    province:
                      maxLength: 5000
                      type: string
                  required:
                    - province
                  title: province_standard
                  type: object
                type:
                  enum:
                    - province_standard
                    - simplified
                    - standard
                  type: string
              required:
                - type
              title: canada
              type: object
            ch:
              properties:
                type:
                  enum:
                    - standard
                  type: string
              required:
                - type
              title: default
              type: object
            cl:
              properties:
                type:
                  enum:
                    - simplified
                  type: string
              required:
                - type
              title: simplified
              type: object
            co:
              properties:
                type:
                  enum:
                    - simplified
                  type: string
              required:
                - type
              title: simplified
              type: object
            cy:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            cz:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            de:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            dk:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            ee:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            es:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            fi:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            fr:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            gb:
              properties:
                type:
                  enum:
                    - standard
                  type: string
              required:
                - type
              title: default
              type: object
            gr:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            hr:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            hu:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            id:
              properties:
                type:
                  enum:
                    - simplified
                  type: string
              required:
                - type
              title: simplified
              type: object
            ie:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            is:
              properties:
                type:
                  enum:
                    - standard
                  type: string
              required:
                - type
              title: default
              type: object
            it:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            jp:
              properties:
                type:
                  enum:
                    - standard
                  type: string
              required:
                - type
              title: default
              type: object
            kr:
              properties:
                type:
                  enum:
                    - simplified
                  type: string
              required:
                - type
              title: simplified
              type: object
            lt:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            lu:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            lv:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            mt:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            mx:
              properties:
                type:
                  enum:
                    - simplified
                  type: string
              required:
                - type
              title: simplified
              type: object
            my:
              properties:
                type:
                  enum:
                    - simplified
                  type: string
              required:
                - type
              title: simplified
              type: object
            nl:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            'no':
              properties:
                type:
                  enum:
                    - standard
                  type: string
              required:
                - type
              title: default
              type: object
            nz:
              properties:
                type:
                  enum:
                    - standard
                  type: string
              required:
                - type
              title: default
              type: object
            pl:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            pt:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            ro:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            sa:
              properties:
                type:
                  enum:
                    - simplified
                  type: string
              required:
                - type
              title: simplified
              type: object
            se:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            sg:
              properties:
                type:
                  enum:
                    - standard
                  type: string
              required:
                - type
              title: default
              type: object
            si:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            sk:
              properties:
                standard:
                  properties:
                    place_of_supply_scheme:
                      enum:
                        - small_seller
                        - standard
                      type: string
                  required:
                    - place_of_supply_scheme
                  title: standard
                  type: object
                type:
                  enum:
                    - ioss
                    - oss_non_union
                    - oss_union
                    - standard
                  type: string
              required:
                - type
              title: europe
              type: object
            th:
              properties:
                type:
                  enum:
                    - simplified
                  type: string
              required:
                - type
              title: simplified
              type: object
            tr:
              properties:
                type:
                  enum:
                    - simplified
                  type: string
              required:
                - type
              title: simplified
              type: object
            us:
              properties:
                local_amusement_tax:
                  properties:
                    jurisdiction:
                      maxLength: 5000
                      type: string
                  required:
                    - jurisdiction
                  title: local_amusement_tax
                  type: object
                local_lease_tax:
                  properties:
                    jurisdiction:
                      maxLength: 5000
                      type: string
                  required:
                    - jurisdiction
                  title: local_lease_tax
                  type: object
                state:
                  maxLength: 5000
                  type: string
                type:
                  enum:
                    - local_amusement_tax
                    - local_lease_tax
                    - state_communications_tax
                    - state_sales_tax
                  type: string
              required:
                - state
                - type
              title: united_states
              type: object
            vn:
              properties:
                type:
                  enum:
                    - simplified
                  type: string
              required:
                - type
              title: simplified
              type: object
            za:
              properties:
                type:
                  enum:
                    - standard
                  type: string
              required:
                - type
              title: default
              type: object
          title: country_options
          type: object
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        expires_at:
          description: >-
            If set, the Tax Registration stops being active at this time. If not
            set, the Tax Registration will be active indefinitely. Timestamp
            measured in seconds since the Unix epoch.
          format: unix-time
          type: integer
    PostTaxRegistrationsIdRequest:
      type: object
      properties:
        active_from:
          anyOf:
            - enum:
                - now
              maxLength: 5000
              type: string
            - format: unix-time
              type: integer
          description: >-
            Time at which the registration becomes active. It can be either
            `now` to indicate the current time, or a timestamp measured in
            seconds since the Unix epoch.
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        expires_at:
          anyOf:
            - enum:
                - now
              maxLength: 5000
              type: string
            - format: unix-time
              type: integer
            - enum:
                - ''
              type: string
          description: >-
            If set, the registration stops being active at this time. If not
            set, the registration will be active indefinitely. It can be either
            `now` to indicate the current time, or a timestamp measured in
            seconds since the Unix epoch.
    GetTaxSettingsRequest:
      type: object
      properties: {}
    PostTaxSettingsRequest:
      type: object
      properties:
        defaults:
          description: Default configuration to be used on Stripe Tax calculations.
          properties:
            tax_behavior:
              enum:
                - exclusive
                - inclusive
                - inferred_by_currency
              type: string
            tax_code:
              type: string
          title: defaults_param
          type: object
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        head_office:
          description: The place where your business is located.
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
              title: validated_country_address
              type: object
          required:
            - address
          title: head_office_param
          type: object
    PostTaxTransactionsCreateFromCalculationRequest:
      type: object
      required:
        - calculation
        - reference
      properties:
        calculation:
          description: >-
            Tax Calculation ID to be used as input when creating the
            transaction.
          maxLength: 5000
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
        reference:
          description: >-
            A custom order or sale identifier, such as 'myOrder_123'. Must be
            unique across all transactions, including reversals.
          maxLength: 500
          type: string
    PostTaxTransactionsCreateReversalRequest:
      type: object
      required:
        - mode
        - original_transaction
        - reference
      properties:
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        flat_amount:
          description: >-
            A flat amount to reverse across the entire transaction, in negative
            integer cents. This value represents the total amount to refund from
            the transaction, including taxes.
          type: integer
        line_items:
          description: The line item amounts to reverse.
          items:
            properties:
              amount:
                type: integer
              amount_tax:
                type: integer
              metadata:
                additionalProperties:
                  type: string
                type: object
              original_line_item:
                maxLength: 5000
                type: string
              quantity:
                type: integer
              reference:
                maxLength: 500
                type: string
            required:
              - amount
              - amount_tax
              - original_line_item
              - reference
            title: transaction_line_item_reversal
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
        mode:
          description: >-
            If `partial`, the provided line item or shipping cost amounts are
            reversed. If `full`, the original transaction is fully reversed.
          enum:
            - full
            - partial
          type: string
        original_transaction:
          description: The ID of the Transaction to partially or fully reverse.
          maxLength: 5000
          type: string
        reference:
          description: >-
            A custom identifier for this reversal, such as
            `myOrder_123-refund_1`, which must be unique across all
            transactions. The reference helps identify this reversal transaction
            in exported [tax reports](https://stripe.com/docs/tax/reports).
          maxLength: 500
          type: string
        shipping_cost:
          description: The shipping cost to reverse.
          properties:
            amount:
              type: integer
            amount_tax:
              type: integer
          required:
            - amount
            - amount_tax
          title: transaction_shipping_cost_reversal
          type: object
    GetTaxTransactionsTransactionRequest:
      type: object
      properties: {}
    GetTaxTransactionsTransactionLineItemsRequest:
      type: object
      properties: {}
    TaxProductResourceTaxTransactionLineItemList:
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
            $ref: '#/components/schemas/tax.transaction_line_item'
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
          pattern: '^/v1/tax/transactions/[^/]+/line_items'
          type: string
    GetTaxCodesRequest:
      type: object
      properties: {}
    TaxProductResourceTaxCodeList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/tax_code'
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
    GetTaxCodesIdRequest:
      type: object
      properties: {}
    GetTaxRatesRequest:
      type: object
      properties: {}
    TaxRatesList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/tax_rate'
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
          pattern: ^/v1/tax_rates
          type: string
    PostTaxRatesRequest:
      type: object
      required:
        - display_name
        - inclusive
        - percentage
      properties:
        active:
          description: >-
            Flag determining whether the tax rate is active or inactive
            (archived). Inactive tax rates cannot be used with new applications
            or Checkout Sessions, but will still work for subscriptions and
            invoices that already have it set.
          type: boolean
        country:
          description: >-
            Two-letter country code ([ISO 3166-1
            alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
          maxLength: 5000
          type: string
        description:
          description: >-
            An arbitrary string attached to the tax rate for your internal use
            only. It will not be visible to your customers.
          maxLength: 5000
          type: string
        display_name:
          description: 'The display name of the tax rate, which will be shown to users.'
          maxLength: 50
          type: string
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        inclusive:
          description: This specifies if the tax rate is inclusive or exclusive.
          type: boolean
        jurisdiction:
          description: >-
            The jurisdiction for the tax rate. You can use this label field for
            tax reporting purposes. It also appears on your customer’s invoice.
          maxLength: 50
          type: string
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
        percentage:
          description: This represents the tax rate percent out of 100.
          type: number
        state:
          description: >-
            [ISO 3166-2 subdivision
            code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country
            prefix. For example, "NY" for New York, United States.
          maxLength: 2
          type: string
        tax_type:
          description: 'The high-level tax type, such as `vat` or `sales_tax`.'
          enum:
            - amusement_tax
            - communications_tax
            - gst
            - hst
            - igst
            - jct
            - lease_tax
            - pst
            - qst
            - rst
            - sales_tax
            - service_tax
            - vat
          type: string
    GetTaxRatesTaxRateRequest:
      type: object
      properties: {}
    PostTaxRatesTaxRateRequest:
      type: object
      properties:
        active:
          description: >-
            Flag determining whether the tax rate is active or inactive
            (archived). Inactive tax rates cannot be used with new applications
            or Checkout Sessions, but will still work for subscriptions and
            invoices that already have it set.
          type: boolean
        country:
          description: >-
            Two-letter country code ([ISO 3166-1
            alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
          maxLength: 5000
          type: string
        description:
          description: >-
            An arbitrary string attached to the tax rate for your internal use
            only. It will not be visible to your customers.
          maxLength: 5000
          type: string
        display_name:
          description: 'The display name of the tax rate, which will be shown to users.'
          maxLength: 50
          type: string
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        jurisdiction:
          description: >-
            The jurisdiction for the tax rate. You can use this label field for
            tax reporting purposes. It also appears on your customer’s invoice.
          maxLength: 50
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
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
            Individual keys can be unset by posting an empty value to them. All
            keys can be unset by posting an empty value to `metadata`.
        state:
          description: >-
            [ISO 3166-2 subdivision
            code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country
            prefix. For example, "NY" for New York, United States.
          maxLength: 2
          type: string
        tax_type:
          description: 'The high-level tax type, such as `vat` or `sales_tax`.'
          enum:
            - amusement_tax
            - communications_tax
            - gst
            - hst
            - igst
            - jct
            - lease_tax
            - pst
            - qst
            - rst
            - sales_tax
            - service_tax
            - vat
          type: string
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