---
openapi: 3.0.0
info:
  title: Stripe Invoice API
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
  /v1/invoiceitems:
    get:
      description: >-
        <p>Returns a list of your invoice items. Invoice items are returned
        sorted by creation date, with the most recently created invoice items
        appearing first.</p>
      operationId: GetInvoiceitems
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
            The identifier of the customer whose invoice items to return. If
            none is provided, all invoice items will be returned.
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
            Only return invoice items belonging to this invoice. If none is
            provided, all invoice items will be returned. If specifying an
            invoice, no customer identifier is needed.
          in: query
          name: invoice
          required: false
          schema:
            maxLength: 5000
            type: string
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
            Set to `true` to only show pending invoice items, which are not yet
            attached to any invoices. Set to `false` to only show invoice items
            already attached to invoices. If unspecified, no filter is applied.
          in: query
          name: pending
          required: false
          schema:
            type: boolean
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
                      $ref: '#/components/schemas/invoiceitem'
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
                    pattern: ^/v1/invoiceitems
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: InvoicesItemsList
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
      summary: Retrieve Invoice Items
      tags:
        - Invoices
        - Items
    post:
      description: >-
        <p>Creates an item to be added to a draft invoice (up to 250 items per
        invoice). If no invoice is specified, the item will be on the next
        invoice created for the customer specified.</p>
      operationId: PostInvoiceitems
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              discounts:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              period:
                explode: true
                style: deepObject
              price_data:
                explode: true
                style: deepObject
              tax_code:
                explode: true
                style: deepObject
              tax_rates:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: >-
                    The integer amount in cents (or local equivalent) of the
                    charge to be applied to the upcoming invoice. Passing in a
                    negative `amount` will reduce the `amount_due` on the
                    invoice.
                  type: integer
                currency:
                  description: >-
                    Three-letter [ISO currency
                    code](https://www.iso.org/iso-4217-currency-codes.html), in
                    lowercase. Must be a [supported
                    currency](https://stripe.com/docs/currencies).
                  type: string
                customer:
                  description: >-
                    The ID of the customer who will be billed when this invoice
                    item is billed.
                  maxLength: 5000
                  type: string
                description:
                  description: >-
                    An arbitrary string which you can attach to the invoice
                    item. The description is displayed in the invoice for easy
                    tracking.
                  maxLength: 5000
                  type: string
                discountable:
                  description: >-
                    Controls whether discounts apply to this invoice item.
                    Defaults to false for prorations or negative invoice items,
                    and true for all other invoice items.
                  type: boolean
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
                    The coupons to redeem into discounts for the invoice item or
                    invoice line item.
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                invoice:
                  description: >-
                    The ID of an existing invoice to add this invoice item to.
                    When left blank, the invoice item will be added to the next
                    upcoming scheduled invoice. This is useful when adding
                    invoice items in response to an invoice.created webhook. You
                    can only add invoice items to draft invoices and there is a
                    maximum of 250 items per invoice.
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
                period:
                  description: >-
                    The period associated with this invoice item. When set to
                    different values, the period will be rendered on the
                    invoice. If you have [Stripe Revenue
                    Recognition](https://stripe.com/docs/revenue-recognition)
                    enabled, the period will be used to recognize and defer
                    revenue. See the [Revenue Recognition
                    documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing)
                    for details.
                  properties:
                    end:
                      format: unix-time
                      type: integer
                    start:
                      format: unix-time
                      type: integer
                  required:
                    - end
                    - start
                  title: period
                  type: object
                price:
                  description: The ID of the price object.
                  maxLength: 5000
                  type: string
                price_data:
                  description: >-
                    Data used to generate a new
                    [Price](https://stripe.com/docs/api/prices) object inline.
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
                  title: one_time_price_data
                  type: object
                quantity:
                  description: >-
                    Non-negative integer. The quantity of units for the invoice
                    item.
                  type: integer
                subscription:
                  description: >-
                    The ID of a subscription to add this invoice item to. When
                    left blank, the invoice item will be be added to the next
                    upcoming scheduled invoice. When set, scheduled invoices for
                    subscriptions other than the specified subscription will
                    ignore the invoice item. Use this when you want to express
                    that an invoice item has been accrued within the context of
                    a particular subscription.
                  maxLength: 5000
                  type: string
                tax_behavior:
                  description: >-
                    Only required if a [default tax
                    behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended))
                    was not provided in the Stripe Tax settings. Specifies
                    whether the price is considered inclusive of taxes or
                    exclusive of taxes. One of `inclusive`, `exclusive`, or
                    `unspecified`. Once specified as either `inclusive` or
                    `exclusive`, it cannot be changed.
                  enum:
                    - exclusive
                    - inclusive
                    - unspecified
                  type: string
                tax_code:
                  anyOf:
                    - type: string
                    - enum:
                        - ''
                      type: string
                  description: 'A [tax code](https://stripe.com/docs/tax/tax-categories) ID.'
                tax_rates:
                  description: >-
                    The tax rates which apply to the invoice item. When set, the
                    `default_tax_rates` on the invoice do not apply to this
                    invoice item.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                unit_amount:
                  description: >-
                    The integer unit amount in cents (or local equivalent) of
                    the charge to be applied to the upcoming invoice. This
                    `unit_amount` will be multiplied by the quantity to get the
                    full amount. Passing in a negative `unit_amount` will reduce
                    the `amount_due` on the invoice.
                  type: integer
                unit_amount_decimal:
                  description: >-
                    Same as `unit_amount`, but accepts a decimal value in cents
                    (or local equivalent) with at most 12 decimal places. Only
                    one of `unit_amount` and `unit_amount_decimal` can be set.
                  format: decimal
                  type: string
              required:
                - customer
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/invoiceitem'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Invoice Item
      tags:
        - Invoices
        - Items
  '/v1/invoiceitems/{invoiceitem}':
    delete:
      description: >-
        <p>Deletes an invoice item, removing it from an invoice. Deleting
        invoice items is only possible when they’re not attached to invoices, or
        if it’s attached to a draft invoice.</p>
      operationId: DeleteInvoiceitemsInvoiceitem
      parameters:
        - in: path
          name: invoiceitem
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
                $ref: '#/components/schemas/deleted_invoiceitem'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Invoice Item
      tags:
        - Invoices
        - Items
    get:
      description: <p>Retrieves the invoice item with the given ID.</p>
      operationId: GetInvoiceitemsInvoiceitem
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
          name: invoiceitem
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
                $ref: '#/components/schemas/invoiceitem'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Invoice Item
      tags:
        - Invoices
        - Items
    post:
      description: >-
        <p>Updates the amount or description of an invoice item on an upcoming
        invoice. Updating an invoice item is only possible before the invoice
        it’s attached to is closed.</p>
      operationId: PostInvoiceitemsInvoiceitem
      parameters:
        - in: path
          name: invoiceitem
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              discounts:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              period:
                explode: true
                style: deepObject
              price_data:
                explode: true
                style: deepObject
              tax_code:
                explode: true
                style: deepObject
              tax_rates:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: >-
                    The integer amount in cents (or local equivalent) of the
                    charge to be applied to the upcoming invoice. If you want to
                    apply a credit to the customer's account, pass a negative
                    amount.
                  type: integer
                description:
                  description: >-
                    An arbitrary string which you can attach to the invoice
                    item. The description is displayed in the invoice for easy
                    tracking.
                  maxLength: 5000
                  type: string
                discountable:
                  description: >-
                    Controls whether discounts apply to this invoice item.
                    Defaults to false for prorations or negative invoice items,
                    and true for all other invoice items. Cannot be set to true
                    for prorations.
                  type: boolean
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
                    The coupons & existing discounts which apply to the invoice
                    item or invoice line item. Item discounts are applied before
                    invoice discounts. Pass an empty string to remove
                    previously-defined discounts.
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
                period:
                  description: >-
                    The period associated with this invoice item. When set to
                    different values, the period will be rendered on the
                    invoice. If you have [Stripe Revenue
                    Recognition](https://stripe.com/docs/revenue-recognition)
                    enabled, the period will be used to recognize and defer
                    revenue. See the [Revenue Recognition
                    documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing)
                    for details.
                  properties:
                    end:
                      format: unix-time
                      type: integer
                    start:
                      format: unix-time
                      type: integer
                  required:
                    - end
                    - start
                  title: period
                  type: object
                price:
                  description: The ID of the price object.
                  maxLength: 5000
                  type: string
                price_data:
                  description: >-
                    Data used to generate a new
                    [Price](https://stripe.com/docs/api/prices) object inline.
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
                  title: one_time_price_data
                  type: object
                quantity:
                  description: >-
                    Non-negative integer. The quantity of units for the invoice
                    item.
                  type: integer
                tax_behavior:
                  description: >-
                    Only required if a [default tax
                    behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended))
                    was not provided in the Stripe Tax settings. Specifies
                    whether the price is considered inclusive of taxes or
                    exclusive of taxes. One of `inclusive`, `exclusive`, or
                    `unspecified`. Once specified as either `inclusive` or
                    `exclusive`, it cannot be changed.
                  enum:
                    - exclusive
                    - inclusive
                    - unspecified
                  type: string
                tax_code:
                  anyOf:
                    - type: string
                    - enum:
                        - ''
                      type: string
                  description: 'A [tax code](https://stripe.com/docs/tax/tax-categories) ID.'
                tax_rates:
                  anyOf:
                    - items:
                        maxLength: 5000
                        type: string
                      type: array
                    - enum:
                        - ''
                      type: string
                  description: >-
                    The tax rates which apply to the invoice item. When set, the
                    `default_tax_rates` on the invoice do not apply to this
                    invoice item. Pass an empty string to remove
                    previously-defined tax rates.
                unit_amount:
                  description: >-
                    The integer unit amount in cents (or local equivalent) of
                    the charge to be applied to the upcoming invoice. This
                    unit_amount will be multiplied by the quantity to get the
                    full amount. If you want to apply a credit to the customer's
                    account, pass a negative unit_amount.
                  type: integer
                unit_amount_decimal:
                  description: >-
                    Same as `unit_amount`, but accepts a decimal value in cents
                    (or local equivalent) with at most 12 decimal places. Only
                    one of `unit_amount` and `unit_amount_decimal` can be set.
                  format: decimal
                  type: string
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/invoiceitem'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Invoice Item
      tags:
        - Invoices
        - Items
  /v1/invoices:
    get:
      description: >-
        <p>You can list all invoices, or list the invoices for a specific
        customer. The invoices are returned sorted by creation date, with the
        most recently created invoices appearing first.</p>
      operationId: GetInvoices
      parameters:
        - description: >-
            The collection method of the invoice to retrieve. Either
            `charge_automatically` or `send_invoice`.
          in: query
          name: collection_method
          required: false
          schema:
            enum:
              - charge_automatically
              - send_invoice
            type: string
          style: form
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
        - description: Only return invoices for the customer specified by this customer ID.
          in: query
          name: customer
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - explode: true
          in: query
          name: due_date
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
            The status of the invoice, one of `draft`, `open`, `paid`,
            `uncollectible`, or `void`. [Learn
            more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
          in: query
          name: status
          required: false
          schema:
            enum:
              - draft
              - open
              - paid
              - uncollectible
              - void
            type: string
            x-stripeBypassValidation: true
          style: form
        - description: >-
            Only return invoices for the subscription specified by this
            subscription ID.
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
                      $ref: '#/components/schemas/invoice'
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
                    pattern: ^/v1/invoices
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: InvoicesList
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
      summary: Retrieve Invoices
      tags:
        - Invoices
    post:
      description: >-
        <p>This endpoint creates a draft invoice for a given customer. The
        invoice remains a draft until you <a
        href="#finalize_invoice">finalize</a> the invoice, which allows you to
        <a href="#pay_invoice">pay</a> or <a href="#send_invoice">send</a> the
        invoice to your customers.</p>
      operationId: PostInvoices
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              account_tax_ids:
                explode: true
                style: deepObject
              automatic_tax:
                explode: true
                style: deepObject
              custom_fields:
                explode: true
                style: deepObject
              default_tax_rates:
                explode: true
                style: deepObject
              discounts:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              from_invoice:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              payment_settings:
                explode: true
                style: deepObject
              rendering:
                explode: true
                style: deepObject
              shipping_cost:
                explode: true
                style: deepObject
              shipping_details:
                explode: true
                style: deepObject
              transfer_data:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
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
                  description: >-
                    The account tax IDs associated with the invoice. Only
                    editable when the invoice is a draft.
                application_fee_amount:
                  description: >-
                    A fee in cents (or local equivalent) that will be applied to
                    the invoice and transferred to the application owner's
                    Stripe account. The request must be made with an OAuth key
                    or the Stripe-Account header in order to take an application
                    fee. For more information, see the application fees
                    [documentation](https://stripe.com/docs/billing/invoices/connect#collecting-fees).
                  type: integer
                auto_advance:
                  description: >-
                    Controls whether Stripe performs [automatic
                    collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection)
                    of the invoice. If `false`, the invoice's state doesn't
                    automatically advance without an explicit action.
                  type: boolean
                automatic_tax:
                  description: Settings for automatic tax lookup for this invoice.
                  properties:
                    enabled:
                      type: boolean
                  required:
                    - enabled
                  title: automatic_tax_param
                  type: object
                collection_method:
                  description: >-
                    Either `charge_automatically`, or `send_invoice`. When
                    charging automatically, Stripe will attempt to pay this
                    invoice using the default source attached to the customer.
                    When sending an invoice, Stripe will email this invoice to
                    the customer with payment instructions. Defaults to
                    `charge_automatically`.
                  enum:
                    - charge_automatically
                    - send_invoice
                  type: string
                currency:
                  description: >-
                    The currency to create this invoice in. Defaults to that of
                    `customer` if not specified.
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
                  description: >-
                    A list of up to 4 custom fields to be displayed on the
                    invoice.
                customer:
                  description: The ID of the customer who will be billed.
                  maxLength: 5000
                  type: string
                days_until_due:
                  description: >-
                    The number of days from when the invoice is created until it
                    is due. Valid only for invoices where
                    `collection_method=send_invoice`.
                  type: integer
                default_payment_method:
                  description: >-
                    ID of the default payment method for the invoice. It must
                    belong to the customer associated with the invoice. If not
                    set, defaults to the subscription's default payment method,
                    if any, or to the default payment method in the customer's
                    invoice settings.
                  maxLength: 5000
                  type: string
                default_source:
                  description: >-
                    ID of the default payment source for the invoice. It must
                    belong to the customer associated with the invoice and be in
                    a chargeable state. If not set, defaults to the
                    subscription's default source, if any, or to the customer's
                    default source.
                  maxLength: 5000
                  type: string
                default_tax_rates:
                  description: >-
                    The tax rates that will apply to any line item that does not
                    have `tax_rates` set.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                description:
                  description: >-
                    An arbitrary string attached to the object. Often useful for
                    displaying to users. Referenced as 'memo' in the Dashboard.
                  maxLength: 1500
                  type: string
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
                    The coupons to redeem into discounts for the invoice. If not
                    specified, inherits the discount from the invoice's
                    customer. Pass an empty string to avoid inheriting any
                    discounts.
                due_date:
                  description: >-
                    The date on which payment for this invoice is due. Valid
                    only for invoices where `collection_method=send_invoice`.
                  format: unix-time
                  type: integer
                effective_at:
                  description: >-
                    The date when this invoice is in effect. Same as
                    `finalized_at` unless overwritten. When defined, this value
                    replaces the system-generated 'Date of issue' printed on the
                    invoice PDF and receipt.
                  format: unix-time
                  type: integer
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                footer:
                  description: Footer to be displayed on the invoice.
                  maxLength: 5000
                  type: string
                from_invoice:
                  description: >-
                    Revise an existing invoice. The new invoice will be created
                    in `status=draft`. See the [revision
                    documentation](https://stripe.com/docs/invoicing/invoice-revisions)
                    for more details.
                  properties:
                    action:
                      enum:
                        - revision
                      maxLength: 5000
                      type: string
                    invoice:
                      maxLength: 5000
                      type: string
                  required:
                    - action
                    - invoice
                  title: from_invoice
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
                on_behalf_of:
                  description: >-
                    The account (if any) for which the funds of the invoice
                    payment are intended. If set, the invoice will be presented
                    with the branding and support information of the specified
                    account. See the [Invoices with
                    Connect](https://stripe.com/docs/billing/invoices/connect)
                    documentation for details.
                  type: string
                payment_settings:
                  description: >-
                    Configuration settings for the PaymentIntent that is
                    generated when the invoice is finalized.
                  properties:
                    default_mandate:
                      anyOf:
                        - maxLength: 5000
                          type: string
                        - enum:
                            - ''
                          type: string
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
                                request_three_d_secure:
                                  enum:
                                    - any
                                    - automatic
                                  type: string
                              title: invoice_payment_method_options_param
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
                  title: payment_settings
                  type: object
                pending_invoice_items_behavior:
                  description: >-
                    How to handle pending invoice items on invoice creation. One
                    of `include` or `exclude`. `include` will include any
                    pending invoice items, and will create an empty draft
                    invoice if no pending invoice items exist. `exclude` will
                    always create an empty invoice draft regardless if there are
                    pending invoice items or not. Defaults to `exclude` if the
                    parameter is omitted.
                  enum:
                    - exclude
                    - include
                    - include_and_require
                  type: string
                rendering:
                  description: >-
                    The rendering-related settings that control how the invoice
                    is displayed on customer-facing surfaces such as PDF and
                    Hosted Invoice Page.
                  properties:
                    amount_tax_display:
                      enum:
                        - ''
                        - exclude_tax
                        - include_inclusive_tax
                      type: string
                    pdf:
                      properties:
                        page_size:
                          enum:
                            - a4
                            - auto
                            - letter
                          type: string
                      title: rendering_pdf_param
                      type: object
                  title: rendering_param
                  type: object
                shipping_cost:
                  description: Settings for the cost of shipping for this invoice.
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
                  title: shipping_cost
                  type: object
                shipping_details:
                  description: >-
                    Shipping details for the invoice. The Invoice PDF will use
                    the `shipping_details` value if it is set, otherwise the PDF
                    will render the shipping address from the customer.
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
                    name:
                      maxLength: 5000
                      type: string
                    phone:
                      anyOf:
                        - maxLength: 5000
                          type: string
                        - enum:
                            - ''
                          type: string
                  required:
                    - address
                    - name
                  title: recipient_shipping_with_optional_fields_address
                  type: object
                statement_descriptor:
                  description: >-
                    Extra information about a charge for the customer's credit
                    card statement. It must contain at least one letter. If not
                    specified and this invoice is part of a subscription, the
                    default `statement_descriptor` will be set to the first
                    subscription item's product's `statement_descriptor`.
                  maxLength: 22
                  type: string
                subscription:
                  description: >-
                    The ID of the subscription to invoice, if any. If set, the
                    created invoice will only include pending invoice items for
                    that subscription. The subscription's billing cycle and
                    regular subscription events won't be affected.
                  maxLength: 5000
                  type: string
                transfer_data:
                  description: >-
                    If specified, the funds from the invoice will be transferred
                    to the destination and the ID of the resulting transfer will
                    be found on the invoice's charge.
                  properties:
                    amount:
                      type: integer
                    destination:
                      type: string
                  required:
                    - destination
                  title: transfer_data_specs
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/invoice'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Invoice
      tags:
        - Invoices
  /v1/invoices/search:
    get:
      description: >-
        <p>Search for invoices you’ve previously created using Stripe’s <a
        href="/docs/search#search-query-language">Search Query Language</a>.

        Don’t use search in read-after-write flows where strict consistency is
        necessary. Under normal operating

        conditions, data is searchable in less than a minute. Occasionally,
        propagation of new or updated data can be up

        to an hour behind during outages. Search functionality is not available
        to merchants in India.</p>
      operationId: GetInvoicesSearch
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
            invoices](https://stripe.com/docs/search#query-fields-for-invoices).
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
                      $ref: '#/components/schemas/invoice'
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
      summary: Search Invoices
      tags:
        - Search
        - Invoices
  /v1/invoices/upcoming:
    get:
      description: >-
        <p>At any time, you can preview the upcoming invoice for a customer.
        This will show you all the charges that are pending, including
        subscription renewal charges, invoice item charges, etc. It will also
        show you any discounts that are applicable to the invoice.</p>


        <p>Note that when you are viewing an upcoming invoice, you are simply
        viewing a preview – the invoice has not yet been created. As such, the
        upcoming invoice will not show up in invoice listing calls, and you
        cannot use the API to pay or edit the invoice. If you want to change the
        amount that your customer will be billed, you can add, remove, or update
        pending invoice items, or update the customer’s discount.</p>


        <p>You can preview the effects of updating a subscription, including a
        preview of what proration will take place. To ensure that the actual
        proration is calculated exactly the same as the previewed proration, you
        should pass a <code>proration_date</code> parameter when doing the
        actual subscription update. The value passed in should be the same as
        the <code>subscription_proration_date</code> returned on the upcoming
        invoice resource. The recommended way to get only the prorations being
        previewed is to consider only proration line items where
        <code>period[start]</code> is equal to the
        <code>subscription_proration_date</code> on the upcoming invoice
        resource.</p>
      operationId: GetInvoicesUpcoming
      parameters:
        - description: Settings for automatic tax lookup for this invoice preview.
          explode: true
          in: query
          name: automatic_tax
          required: false
          schema:
            properties:
              enabled:
                type: boolean
            required:
              - enabled
            title: automatic_tax_param
            type: object
          style: deepObject
        - description: >-
            The code of the coupon to apply. If `subscription` or
            `subscription_items` is provided, the invoice returned will preview
            updating or creating a subscription with that coupon. Otherwise, it
            will preview applying that coupon to the customer for the next
            upcoming invoice from among the customer's subscriptions. The
            invoice can be previewed without a coupon by passing this value as
            an empty string.
          in: query
          name: coupon
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            The currency to preview this invoice in. Defaults to that of
            `customer` if not specified.
          in: query
          name: currency
          required: false
          schema:
            type: string
          style: form
        - description: >-
            The identifier of the customer whose upcoming invoice you'd like to
            retrieve. If `automatic_tax` is enabled then one of `customer`,
            `customer_details`, `subscription`, or `schedule` must be set.
          in: query
          name: customer
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Details about the customer you want to invoice or overrides for an
            existing customer. If `automatic_tax` is enabled then one of
            `customer`, `customer_details`, `subscription`, or `schedule` must
            be set.
          explode: true
          in: query
          name: customer_details
          required: false
          schema:
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
              tax:
                properties:
                  ip_address:
                    anyOf:
                      - type: string
                      - enum:
                          - ''
                        type: string
                title: tax_param
                type: object
              tax_exempt:
                enum:
                  - ''
                  - exempt
                  - none
                  - reverse
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
            title: customer_details_param
            type: object
          style: deepObject
        - description: >-
            The coupons to redeem into discounts for the invoice preview. If not
            specified, inherits the discount from the customer or subscription.
            This only works for coupons directly applied to the invoice. To
            apply a coupon to a subscription, you must use the `coupon`
            parameter instead. Pass an empty string to avoid inheriting any
            discounts. To preview the upcoming invoice for a subscription that
            hasn't been created, use `coupon` instead.
          explode: true
          in: query
          name: discounts
          required: false
          schema:
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
          style: deepObject
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
            List of invoice items to add or update in the upcoming invoice
            preview.
          explode: true
          in: query
          name: invoice_items
          required: false
          schema:
            items:
              properties:
                amount:
                  type: integer
                currency:
                  type: string
                description:
                  maxLength: 5000
                  type: string
                discountable:
                  type: boolean
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
                invoiceitem:
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
                period:
                  properties:
                    end:
                      format: unix-time
                      type: integer
                    start:
                      format: unix-time
                      type: integer
                  required:
                    - end
                    - start
                  title: period
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
                  title: one_time_price_data
                  type: object
                quantity:
                  type: integer
                tax_behavior:
                  enum:
                    - exclusive
                    - inclusive
                    - unspecified
                  type: string
                tax_code:
                  anyOf:
                    - type: string
                    - enum:
                        - ''
                      type: string
                tax_rates:
                  anyOf:
                    - items:
                        maxLength: 5000
                        type: string
                      type: array
                    - enum:
                        - ''
                      type: string
                unit_amount:
                  type: integer
                unit_amount_decimal:
                  format: decimal
                  type: string
              title: invoice_item_preview_params
              type: object
            type: array
          style: deepObject
        - description: >-
            The identifier of the schedule whose upcoming invoice you'd like to
            retrieve. Cannot be used with subscription or subscription fields.
          in: query
          name: schedule
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            The identifier of the subscription for which you'd like to retrieve
            the upcoming invoice. If not provided, but a `subscription_items` is
            provided, you will preview creating a subscription with those items.
            If neither `subscription` nor `subscription_items` is provided, you
            will retrieve the next upcoming invoice from among the customer's
            subscriptions.
          in: query
          name: subscription
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            For new subscriptions, a future timestamp to anchor the
            subscription's [billing
            cycle](https://stripe.com/docs/subscriptions/billing-cycle). This is
            used to determine the date of the first full invoice, and, for plans
            with `month` or `year` intervals, the day of the month for
            subsequent invoices. For existing subscriptions, the value can only
            be set to `now` or `unchanged`.
          explode: true
          in: query
          name: subscription_billing_cycle_anchor
          required: false
          schema:
            anyOf:
              - enum:
                  - now
                  - unchanged
                maxLength: 5000
                type: string
              - format: unix-time
                type: integer
          style: deepObject
        - description: >-
            A timestamp at which the subscription should cancel. If set to a
            date before the current period ends, this will cause a proration if
            prorations have been enabled using `proration_behavior`. If set
            during a future period, this will always cause a proration for that
            period.
          explode: true
          in: query
          name: subscription_cancel_at
          required: false
          schema:
            anyOf:
              - format: unix-time
                type: integer
              - enum:
                  - ''
                type: string
          style: deepObject
        - description: >-
            Boolean indicating whether this subscription should cancel at the
            end of the current period.
          in: query
          name: subscription_cancel_at_period_end
          required: false
          schema:
            type: boolean
          style: form
        - description: >-
            This simulates the subscription being canceled or expired
            immediately.
          in: query
          name: subscription_cancel_now
          required: false
          schema:
            type: boolean
          style: form
        - description: >-
            If provided, the invoice returned will preview updating or creating
            a subscription with these default tax rates. The default tax rates
            will apply to any line item that does not have `tax_rates` set.
          explode: true
          in: query
          name: subscription_default_tax_rates
          required: false
          schema:
            anyOf:
              - items:
                  maxLength: 5000
                  type: string
                type: array
              - enum:
                  - ''
                type: string
          style: deepObject
        - description: 'A list of up to 20 subscription items, each with an attached price.'
          explode: true
          in: query
          name: subscription_items
          required: false
          schema:
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
          style: deepObject
        - description: >-
            Determines how to handle
            [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations)
            when the billing cycle changes (e.g., when switching plans,
            resetting `billing_cycle_anchor=now`, or starting a trial), or if an
            item's `quantity` changes. The default value is `create_prorations`.
          in: query
          name: subscription_proration_behavior
          required: false
          schema:
            enum:
              - always_invoice
              - create_prorations
              - none
            type: string
          style: form
        - description: >-
            If previewing an update to a subscription, and doing proration,
            `subscription_proration_date` forces the proration to be calculated
            as though the update was done at the specified time. The time given
            must be within the current subscription period and within the
            current phase of the schedule backing this subscription, if the
            schedule exists. If set, `subscription`, and one of
            `subscription_items`, or `subscription_trial_end` are required.
            Also, `subscription_proration_behavior` cannot be set to 'none'.
          in: query
          name: subscription_proration_date
          required: false
          schema:
            format: unix-time
            type: integer
          style: form
        - description: >-
            For paused subscriptions, setting `subscription_resume_at` to `now`
            will preview the invoice that will be generated if the subscription
            is resumed.
          in: query
          name: subscription_resume_at
          required: false
          schema:
            enum:
              - now
            maxLength: 5000
            type: string
          style: form
        - description: Date a subscription is intended to start (can be future or past).
          in: query
          name: subscription_start_date
          required: false
          schema:
            format: unix-time
            type: integer
          style: form
        - description: >-
            If provided, the invoice returned will preview updating or creating
            a subscription with that trial end. If set, one of
            `subscription_items` or `subscription` is required.
          explode: true
          in: query
          name: subscription_trial_end
          required: false
          schema:
            anyOf:
              - enum:
                  - now
                maxLength: 5000
                type: string
              - format: unix-time
                type: integer
          style: deepObject
        - description: >-
            Indicates if a plan's `trial_period_days` should be applied to the
            subscription. Setting `subscription_trial_end` per subscription is
            preferred, and this defaults to `false`. Setting this flag to `true`
            together with `subscription_trial_end` is not allowed. See [Using
            trial periods on
            subscriptions](https://stripe.com/docs/billing/subscriptions/trials)
            to learn more.
          in: query
          name: subscription_trial_from_plan
          required: false
          schema:
            type: boolean
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
                $ref: '#/components/schemas/invoice'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Upcoming Invoices
      tags:
        - Upcoming
        - Invoices
  /v1/invoices/upcoming/lines:
    get:
      description: >-
        <p>When retrieving an upcoming invoice, you’ll get a
        <strong>lines</strong> property containing the total count of line items
        and the first handful of those items. There is also a URL where you can
        retrieve the full (paginated) list of line items.</p>
      operationId: GetInvoicesUpcomingLines
      parameters:
        - description: Settings for automatic tax lookup for this invoice preview.
          explode: true
          in: query
          name: automatic_tax
          required: false
          schema:
            properties:
              enabled:
                type: boolean
            required:
              - enabled
            title: automatic_tax_param
            type: object
          style: deepObject
        - description: >-
            The code of the coupon to apply. If `subscription` or
            `subscription_items` is provided, the invoice returned will preview
            updating or creating a subscription with that coupon. Otherwise, it
            will preview applying that coupon to the customer for the next
            upcoming invoice from among the customer's subscriptions. The
            invoice can be previewed without a coupon by passing this value as
            an empty string.
          in: query
          name: coupon
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            The currency to preview this invoice in. Defaults to that of
            `customer` if not specified.
          in: query
          name: currency
          required: false
          schema:
            type: string
          style: form
        - description: >-
            The identifier of the customer whose upcoming invoice you'd like to
            retrieve. If `automatic_tax` is enabled then one of `customer`,
            `customer_details`, `subscription`, or `schedule` must be set.
          in: query
          name: customer
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Details about the customer you want to invoice or overrides for an
            existing customer. If `automatic_tax` is enabled then one of
            `customer`, `customer_details`, `subscription`, or `schedule` must
            be set.
          explode: true
          in: query
          name: customer_details
          required: false
          schema:
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
              tax:
                properties:
                  ip_address:
                    anyOf:
                      - type: string
                      - enum:
                          - ''
                        type: string
                title: tax_param
                type: object
              tax_exempt:
                enum:
                  - ''
                  - exempt
                  - none
                  - reverse
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
            title: customer_details_param
            type: object
          style: deepObject
        - description: >-
            The coupons to redeem into discounts for the invoice preview. If not
            specified, inherits the discount from the customer or subscription.
            This only works for coupons directly applied to the invoice. To
            apply a coupon to a subscription, you must use the `coupon`
            parameter instead. Pass an empty string to avoid inheriting any
            discounts. To preview the upcoming invoice for a subscription that
            hasn't been created, use `coupon` instead.
          explode: true
          in: query
          name: discounts
          required: false
          schema:
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
            List of invoice items to add or update in the upcoming invoice
            preview.
          explode: true
          in: query
          name: invoice_items
          required: false
          schema:
            items:
              properties:
                amount:
                  type: integer
                currency:
                  type: string
                description:
                  maxLength: 5000
                  type: string
                discountable:
                  type: boolean
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
                invoiceitem:
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
                period:
                  properties:
                    end:
                      format: unix-time
                      type: integer
                    start:
                      format: unix-time
                      type: integer
                  required:
                    - end
                    - start
                  title: period
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
                  title: one_time_price_data
                  type: object
                quantity:
                  type: integer
                tax_behavior:
                  enum:
                    - exclusive
                    - inclusive
                    - unspecified
                  type: string
                tax_code:
                  anyOf:
                    - type: string
                    - enum:
                        - ''
                      type: string
                tax_rates:
                  anyOf:
                    - items:
                        maxLength: 5000
                        type: string
                      type: array
                    - enum:
                        - ''
                      type: string
                unit_amount:
                  type: integer
                unit_amount_decimal:
                  format: decimal
                  type: string
              title: invoice_item_preview_params
              type: object
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
            The identifier of the schedule whose upcoming invoice you'd like to
            retrieve. Cannot be used with subscription or subscription fields.
          in: query
          name: schedule
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
        - description: >-
            The identifier of the subscription for which you'd like to retrieve
            the upcoming invoice. If not provided, but a `subscription_items` is
            provided, you will preview creating a subscription with those items.
            If neither `subscription` nor `subscription_items` is provided, you
            will retrieve the next upcoming invoice from among the customer's
            subscriptions.
          in: query
          name: subscription
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            For new subscriptions, a future timestamp to anchor the
            subscription's [billing
            cycle](https://stripe.com/docs/subscriptions/billing-cycle). This is
            used to determine the date of the first full invoice, and, for plans
            with `month` or `year` intervals, the day of the month for
            subsequent invoices. For existing subscriptions, the value can only
            be set to `now` or `unchanged`.
          explode: true
          in: query
          name: subscription_billing_cycle_anchor
          required: false
          schema:
            anyOf:
              - enum:
                  - now
                  - unchanged
                maxLength: 5000
                type: string
              - format: unix-time
                type: integer
          style: deepObject
        - description: >-
            A timestamp at which the subscription should cancel. If set to a
            date before the current period ends, this will cause a proration if
            prorations have been enabled using `proration_behavior`. If set
            during a future period, this will always cause a proration for that
            period.
          explode: true
          in: query
          name: subscription_cancel_at
          required: false
          schema:
            anyOf:
              - format: unix-time
                type: integer
              - enum:
                  - ''
                type: string
          style: deepObject
        - description: >-
            Boolean indicating whether this subscription should cancel at the
            end of the current period.
          in: query
          name: subscription_cancel_at_period_end
          required: false
          schema:
            type: boolean
          style: form
        - description: >-
            This simulates the subscription being canceled or expired
            immediately.
          in: query
          name: subscription_cancel_now
          required: false
          schema:
            type: boolean
          style: form
        - description: >-
            If provided, the invoice returned will preview updating or creating
            a subscription with these default tax rates. The default tax rates
            will apply to any line item that does not have `tax_rates` set.
          explode: true
          in: query
          name: subscription_default_tax_rates
          required: false
          schema:
            anyOf:
              - items:
                  maxLength: 5000
                  type: string
                type: array
              - enum:
                  - ''
                type: string
          style: deepObject
        - description: 'A list of up to 20 subscription items, each with an attached price.'
          explode: true
          in: query
          name: subscription_items
          required: false
          schema:
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
          style: deepObject
        - description: >-
            Determines how to handle
            [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations)
            when the billing cycle changes (e.g., when switching plans,
            resetting `billing_cycle_anchor=now`, or starting a trial), or if an
            item's `quantity` changes. The default value is `create_prorations`.
          in: query
          name: subscription_proration_behavior
          required: false
          schema:
            enum:
              - always_invoice
              - create_prorations
              - none
            type: string
          style: form
        - description: >-
            If previewing an update to a subscription, and doing proration,
            `subscription_proration_date` forces the proration to be calculated
            as though the update was done at the specified time. The time given
            must be within the current subscription period and within the
            current phase of the schedule backing this subscription, if the
            schedule exists. If set, `subscription`, and one of
            `subscription_items`, or `subscription_trial_end` are required.
            Also, `subscription_proration_behavior` cannot be set to 'none'.
          in: query
          name: subscription_proration_date
          required: false
          schema:
            format: unix-time
            type: integer
          style: form
        - description: >-
            For paused subscriptions, setting `subscription_resume_at` to `now`
            will preview the invoice that will be generated if the subscription
            is resumed.
          in: query
          name: subscription_resume_at
          required: false
          schema:
            enum:
              - now
            maxLength: 5000
            type: string
          style: form
        - description: Date a subscription is intended to start (can be future or past).
          in: query
          name: subscription_start_date
          required: false
          schema:
            format: unix-time
            type: integer
          style: form
        - description: >-
            If provided, the invoice returned will preview updating or creating
            a subscription with that trial end. If set, one of
            `subscription_items` or `subscription` is required.
          explode: true
          in: query
          name: subscription_trial_end
          required: false
          schema:
            anyOf:
              - enum:
                  - now
                maxLength: 5000
                type: string
              - format: unix-time
                type: integer
          style: deepObject
        - description: >-
            Indicates if a plan's `trial_period_days` should be applied to the
            subscription. Setting `subscription_trial_end` per subscription is
            preferred, and this defaults to `false`. Setting this flag to `true`
            together with `subscription_trial_end` is not allowed. See [Using
            trial periods on
            subscriptions](https://stripe.com/docs/billing/subscriptions/trials)
            to learn more.
          in: query
          name: subscription_trial_from_plan
          required: false
          schema:
            type: boolean
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
                      $ref: '#/components/schemas/line_item'
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
                title: InvoiceLinesList
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
      summary: Retrieve Upcoming Invoice Lines
      tags:
        - Upcoming
        - Invoices
        - Lines
  '/v1/invoices/{invoice}':
    delete:
      description: >-
        <p>Permanently deletes a one-off invoice draft. This cannot be undone.
        Attempts to delete invoices that are no longer in a draft state will
        fail; once an invoice has been finalized or if an invoice is for a
        subscription, it must be <a href="#void_invoice">voided</a>.</p>
      operationId: DeleteInvoicesInvoice
      parameters:
        - in: path
          name: invoice
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
                $ref: '#/components/schemas/deleted_invoice'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Invoice
      tags:
        - Invoices
    get:
      description: <p>Retrieves the invoice with the given ID.</p>
      operationId: GetInvoicesInvoice
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
          name: invoice
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
                $ref: '#/components/schemas/invoice'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Invoice
      tags:
        - Invoices
    post:
      description: >-
        <p>Draft invoices are fully editable. Once an invoice is <a
        href="/docs/billing/invoices/workflow#finalized">finalized</a>,

        monetary values, as well as <code>collection_method</code>, become
        uneditable.</p>


        <p>If you would like to stop the Stripe Billing engine from
        automatically finalizing, reattempting payments on,

        sending reminders for, or <a
        href="/docs/billing/invoices/reconciliation">automatically
        reconciling</a> invoices, pass

        <code>auto_advance=false</code>.</p>
      operationId: PostInvoicesInvoice
      parameters:
        - in: path
          name: invoice
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              account_tax_ids:
                explode: true
                style: deepObject
              automatic_tax:
                explode: true
                style: deepObject
              custom_fields:
                explode: true
                style: deepObject
              default_source:
                explode: true
                style: deepObject
              default_tax_rates:
                explode: true
                style: deepObject
              discounts:
                explode: true
                style: deepObject
              effective_at:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              on_behalf_of:
                explode: true
                style: deepObject
              payment_settings:
                explode: true
                style: deepObject
              rendering:
                explode: true
                style: deepObject
              shipping_cost:
                explode: true
                style: deepObject
              shipping_details:
                explode: true
                style: deepObject
              transfer_data:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
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
                  description: >-
                    The account tax IDs associated with the invoice. Only
                    editable when the invoice is a draft.
                application_fee_amount:
                  description: >-
                    A fee in cents (or local equivalent) that will be applied to
                    the invoice and transferred to the application owner's
                    Stripe account. The request must be made with an OAuth key
                    or the Stripe-Account header in order to take an application
                    fee. For more information, see the application fees
                    [documentation](https://stripe.com/docs/billing/invoices/connect#collecting-fees).
                  type: integer
                auto_advance:
                  description: >-
                    Controls whether Stripe performs [automatic
                    collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection)
                    of the invoice.
                  type: boolean
                automatic_tax:
                  description: Settings for automatic tax lookup for this invoice.
                  properties:
                    enabled:
                      type: boolean
                  required:
                    - enabled
                  title: automatic_tax_param
                  type: object
                collection_method:
                  description: >-
                    Either `charge_automatically` or `send_invoice`. This field
                    can be updated only on `draft` invoices.
                  enum:
                    - charge_automatically
                    - send_invoice
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
                  description: >-
                    A list of up to 4 custom fields to be displayed on the
                    invoice. If a value for `custom_fields` is specified, the
                    list specified will replace the existing custom field list
                    on this invoice. Pass an empty string to remove
                    previously-defined fields.
                days_until_due:
                  description: >-
                    The number of days from which the invoice is created until
                    it is due. Only valid for invoices where
                    `collection_method=send_invoice`. This field can only be
                    updated on `draft` invoices.
                  type: integer
                default_payment_method:
                  description: >-
                    ID of the default payment method for the invoice. It must
                    belong to the customer associated with the invoice. If not
                    set, defaults to the subscription's default payment method,
                    if any, or to the default payment method in the customer's
                    invoice settings.
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
                    ID of the default payment source for the invoice. It must
                    belong to the customer associated with the invoice and be in
                    a chargeable state. If not set, defaults to the
                    subscription's default source, if any, or to the customer's
                    default source.
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
                    The tax rates that will apply to any line item that does not
                    have `tax_rates` set. Pass an empty string to remove
                    previously-defined tax rates.
                description:
                  description: >-
                    An arbitrary string attached to the object. Often useful for
                    displaying to users. Referenced as 'memo' in the Dashboard.
                  maxLength: 1500
                  type: string
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
                    The discounts that will apply to the invoice. Pass an empty
                    string to remove previously-defined discounts.
                due_date:
                  description: >-
                    The date on which payment for this invoice is due. Only
                    valid for invoices where `collection_method=send_invoice`.
                    This field can only be updated on `draft` invoices.
                  format: unix-time
                  type: integer
                effective_at:
                  anyOf:
                    - format: unix-time
                      type: integer
                    - enum:
                        - ''
                      type: string
                  description: >-
                    The date when this invoice is in effect. Same as
                    `finalized_at` unless overwritten. When defined, this value
                    replaces the system-generated 'Date of issue' printed on the
                    invoice PDF and receipt.
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                footer:
                  description: Footer to be displayed on the invoice.
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
                on_behalf_of:
                  anyOf:
                    - type: string
                    - enum:
                        - ''
                      type: string
                  description: >-
                    The account (if any) for which the funds of the invoice
                    payment are intended. If set, the invoice will be presented
                    with the branding and support information of the specified
                    account. See the [Invoices with
                    Connect](https://stripe.com/docs/billing/invoices/connect)
                    documentation for details.
                payment_settings:
                  description: >-
                    Configuration settings for the PaymentIntent that is
                    generated when the invoice is finalized.
                  properties:
                    default_mandate:
                      anyOf:
                        - maxLength: 5000
                          type: string
                        - enum:
                            - ''
                          type: string
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
                                request_three_d_secure:
                                  enum:
                                    - any
                                    - automatic
                                  type: string
                              title: invoice_payment_method_options_param
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
                  title: payment_settings
                  type: object
                rendering:
                  description: >-
                    The rendering-related settings that control how the invoice
                    is displayed on customer-facing surfaces such as PDF and
                    Hosted Invoice Page.
                  properties:
                    amount_tax_display:
                      enum:
                        - ''
                        - exclude_tax
                        - include_inclusive_tax
                      type: string
                    pdf:
                      properties:
                        page_size:
                          enum:
                            - a4
                            - auto
                            - letter
                          type: string
                      title: rendering_pdf_param
                      type: object
                  title: rendering_param
                  type: object
                shipping_cost:
                  anyOf:
                    - properties:
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
                      title: shipping_cost
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: Settings for the cost of shipping for this invoice.
                shipping_details:
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
                          anyOf:
                            - maxLength: 5000
                              type: string
                            - enum:
                                - ''
                              type: string
                      required:
                        - address
                        - name
                      title: recipient_shipping_with_optional_fields_address
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Shipping details for the invoice. The Invoice PDF will use
                    the `shipping_details` value if it is set, otherwise the PDF
                    will render the shipping address from the customer.
                statement_descriptor:
                  description: >-
                    Extra information about a charge for the customer's credit
                    card statement. It must contain at least one letter. If not
                    specified and this invoice is part of a subscription, the
                    default `statement_descriptor` will be set to the first
                    subscription item's product's `statement_descriptor`.
                  maxLength: 22
                  type: string
                transfer_data:
                  anyOf:
                    - properties:
                        amount:
                          type: integer
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
                    If specified, the funds from the invoice will be transferred
                    to the destination and the ID of the resulting transfer will
                    be found on the invoice's charge. This will be unset if you
                    POST an empty value.
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/invoice'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Invoice
      tags:
        - Invoices
  '/v1/invoices/{invoice}/finalize':
    post:
      description: >-
        <p>Stripe automatically finalizes drafts before sending and attempting
        payment on invoices. However, if you’d like to finalize a draft invoice
        manually, you can do so using this method.</p>
      operationId: PostInvoicesInvoiceFinalize
      parameters:
        - in: path
          name: invoice
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
                auto_advance:
                  description: >-
                    Controls whether Stripe performs [automatic
                    collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection)
                    of the invoice. If `false`, the invoice's state doesn't
                    automatically advance without an explicit action.
                  type: boolean
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
                $ref: '#/components/schemas/invoice'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Finalize Invoice
      tags:
        - Finalize
        - Invoices
  '/v1/invoices/{invoice}/lines':
    get:
      description: >-
        <p>When retrieving an invoice, you’ll get a <strong>lines</strong>
        property containing the total count of line items and the first handful
        of those items. There is also a URL where you can retrieve the full
        (paginated) list of line items.</p>
      operationId: GetInvoicesInvoiceLines
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
        - in: path
          name: invoice
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
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
                      $ref: '#/components/schemas/line_item'
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
                title: InvoiceLinesList
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
      summary: Retrieve Invoice Lines
      tags:
        - Invoices
        - Lines
  '/v1/invoices/{invoice}/lines/{line_item_id}':
    post:
      description: >-
        <p>Updates an invoice’s line item. Some fields, such as
        <code>tax_amounts</code>, only live on the invoice line item,

        so they can only be updated through this endpoint. Other fields, such as
        <code>amount</code>, live on both the invoice

        item and the invoice line item, so updates on this endpoint will
        propagate to the invoice item as well.

        Updating an invoice’s line item is only possible before the invoice is
        finalized.</p>
      operationId: PostInvoicesInvoiceLinesLineItemId
      parameters:
        - description: Invoice ID of line item
          in: path
          name: invoice
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - description: Invoice line item ID
          in: path
          name: line_item_id
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              discounts:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              period:
                explode: true
                style: deepObject
              price_data:
                explode: true
                style: deepObject
              tax_amounts:
                explode: true
                style: deepObject
              tax_rates:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                amount:
                  description: >-
                    The integer amount in cents (or local equivalent) of the
                    charge to be applied to the upcoming invoice. If you want to
                    apply a credit to the customer's account, pass a negative
                    amount.
                  type: integer
                description:
                  description: >-
                    An arbitrary string which you can attach to the invoice
                    item. The description is displayed in the invoice for easy
                    tracking.
                  maxLength: 5000
                  type: string
                discountable:
                  description: >-
                    Controls whether discounts apply to this line item. Defaults
                    to false for prorations or negative line items, and true for
                    all other line items. Cannot be set to true for prorations.
                  type: boolean
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
                    The coupons & existing discounts which apply to the line
                    item. Item discounts are applied before invoice discounts.
                    Pass an empty string to remove previously-defined discounts.
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
                period:
                  description: >-
                    The period associated with this invoice item. When set to
                    different values, the period will be rendered on the
                    invoice. If you have [Stripe Revenue
                    Recognition](https://stripe.com/docs/revenue-recognition)
                    enabled, the period will be used to recognize and defer
                    revenue. See the [Revenue Recognition
                    documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing)
                    for details.
                  properties:
                    end:
                      format: unix-time
                      type: integer
                    start:
                      format: unix-time
                      type: integer
                  required:
                    - end
                    - start
                  title: period
                  type: object
                price:
                  description: The ID of the price object.
                  maxLength: 5000
                  type: string
                price_data:
                  description: >-
                    Data used to generate a new
                    [Price](https://stripe.com/docs/api/prices) object inline.
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
                  title: one_time_price_data_with_product_data
                  type: object
                quantity:
                  description: >-
                    Non-negative integer. The quantity of units for the line
                    item.
                  type: integer
                tax_amounts:
                  anyOf:
                    - items:
                        properties:
                          amount:
                            type: integer
                          tax_rate_data:
                            properties:
                              country:
                                maxLength: 5000
                                type: string
                              description:
                                maxLength: 5000
                                type: string
                              display_name:
                                maxLength: 50
                                type: string
                              inclusive:
                                type: boolean
                              jurisdiction:
                                maxLength: 50
                                type: string
                              percentage:
                                type: number
                              state:
                                maxLength: 2
                                type: string
                              tax_type:
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
                            required:
                              - display_name
                              - inclusive
                              - percentage
                            title: tax_rate_data_param
                            type: object
                          taxable_amount:
                            type: integer
                        required:
                          - amount
                          - tax_rate_data
                          - taxable_amount
                        title: tax_amount_param
                        type: object
                      type: array
                    - enum:
                        - ''
                      type: string
                  description: >-
                    A list of up to 10 tax amounts for this line item. This can
                    be useful if you calculate taxes on your own or use a
                    third-party to calculate them. You cannot set tax amounts if
                    any line item has
                    [tax_rates](https://stripe.com/docs/api/invoices/line_item#invoice_line_item_object-tax_rates)
                    or if the invoice has
                    [default_tax_rates](https://stripe.com/docs/api/invoices/object#invoice_object-default_tax_rates)
                    or uses [automatic
                    tax](https://stripe.com/docs/tax/invoicing). Pass an empty
                    string to remove previously defined tax amounts.
                tax_rates:
                  anyOf:
                    - items:
                        maxLength: 5000
                        type: string
                      type: array
                    - enum:
                        - ''
                      type: string
                  description: >-
                    The tax rates which apply to the line item. When set, the
                    `default_tax_rates` on the invoice do not apply to this line
                    item. Pass an empty string to remove previously-defined tax
                    rates.
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/line_item'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Invoice Line
      tags:
        - Invoices
        - Lines
  '/v1/invoices/{invoice}/mark_uncollectible':
    post:
      description: >-
        <p>Marking an invoice as uncollectible is useful for keeping track of
        bad debts that can be written off for accounting purposes.</p>
      operationId: PostInvoicesInvoiceMarkUncollectible
      parameters:
        - in: path
          name: invoice
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
                $ref: '#/components/schemas/invoice'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Mark Invoice Uncollectable
      tags:
        - Mark
        - Invoices
        - Uncollectable
  '/v1/invoices/{invoice}/pay':
    post:
      description: >-
        <p>Stripe automatically creates and then attempts to collect payment on
        invoices for customers on subscriptions according to your <a
        href="https://dashboard.stripe.com/account/billing/automatic">subscriptions
        settings</a>. However, if you’d like to attempt payment on an invoice
        out of the normal collection schedule or for some other reason, you can
        do so.</p>
      operationId: PostInvoicesInvoicePay
      parameters:
        - in: path
          name: invoice
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
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                forgive:
                  description: >-
                    In cases where the source used to pay the invoice has
                    insufficient funds, passing `forgive=true` controls whether
                    a charge should be attempted for the full amount available
                    on the source, up to the amount to fully pay the invoice.
                    This effectively forgives the difference between the amount
                    available on the source and the amount due. 


                    Passing `forgive=false` will fail the charge if the source
                    hasn't been pre-funded with the right amount. An example for
                    this case is with ACH Credit Transfers and wires: if the
                    amount wired is less than the amount due by a small amount,
                    you might want to forgive the difference. Defaults to
                    `false`.
                  type: boolean
                mandate:
                  anyOf:
                    - maxLength: 5000
                      type: string
                    - enum:
                        - ''
                      type: string
                  description: >-
                    ID of the mandate to be used for this invoice. It must
                    correspond to the payment method used to pay the invoice,
                    including the payment_method param or the invoice's
                    default_payment_method or default_source, if set.
                off_session:
                  description: >-
                    Indicates if a customer is on or off-session while an
                    invoice payment is attempted. Defaults to `true`
                    (off-session).
                  type: boolean
                paid_out_of_band:
                  description: >-
                    Boolean representing whether an invoice is paid outside of
                    Stripe. This will result in no charge being made. Defaults
                    to `false`.
                  type: boolean
                payment_method:
                  description: >-
                    A PaymentMethod to be charged. The PaymentMethod must be the
                    ID of a PaymentMethod belonging to the customer associated
                    with the invoice being paid.
                  maxLength: 5000
                  type: string
                source:
                  description: >-
                    A payment source to be charged. The source must be the ID of
                    a source belonging to the customer associated with the
                    invoice being paid.
                  maxLength: 5000
                  type: string
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/invoice'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Pay Invoice
      tags:
        - Pay
        - Invoices
  '/v1/invoices/{invoice}/send':
    post:
      description: >-
        <p>Stripe will automatically send invoices to customers according to
        your <a
        href="https://dashboard.stripe.com/account/billing/automatic">subscriptions
        settings</a>. However, if you’d like to manually send an invoice to your
        customer out of the normal schedule, you can do so. When sending
        invoices that have already been paid, there will be no reference to the
        payment in the email.</p>


        <p>Requests made in test-mode result in no emails being sent, despite
        sending an <code>invoice.sent</code> event.</p>
      operationId: PostInvoicesInvoiceSend
      parameters:
        - in: path
          name: invoice
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
                $ref: '#/components/schemas/invoice'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Send Invoice
      tags:
        - Send
        - Invoices
  '/v1/invoices/{invoice}/void':
    post:
      description: >-
        <p>Mark a finalized invoice as void. This cannot be undone. Voiding an
        invoice is similar to <a href="#delete_invoice">deletion</a>, however it
        only applies to finalized invoices and maintains a papertrail where the
        invoice can still be found.</p>
      operationId: PostInvoicesInvoiceVoid
      parameters:
        - in: path
          name: invoice
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
                $ref: '#/components/schemas/invoice'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Void Invoice
      tags:
        - Void
        - Invoices
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
    invoiceitem:
      description: >-
        Invoice Items represent the component lines of an
        [invoice](https://stripe.com/docs/api/invoices). An invoice item is
        added to an

        invoice by creating or updating it with an `invoice` field, at which
        point it will be included as

        [an invoice line item](https://stripe.com/docs/api/invoices/line_item)
        within

        [invoice.lines](https://stripe.com/docs/api/invoices/object#invoice_object-lines).


        Invoice Items can be created before you are ready to actually send the
        invoice. This can be particularly useful when combined

        with a [subscription](https://stripe.com/docs/api/subscriptions).
        Sometimes you want to add a charge or credit to a customer, but actually
        charge

        or credit the customer’s card only at the end of a regular billing
        cycle. This is useful for combining several charges

        (to minimize per-transaction fees), or for having Stripe tabulate your
        usage-based billing totals.


        Related guides: [Integrate with the Invoicing
        API](https://stripe.com/docs/invoicing/integration), [Subscription
        Invoices](https://stripe.com/docs/billing/invoices/subscription#adding-upcoming-invoice-items).
      properties:
        amount:
          description: >-
            Amount (in the `currency` specified) of the invoice item. This
            should always be equal to `unit_amount * quantity`.
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
            The ID of the customer who will be billed when this invoice item is
            billed.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
              - $ref: '#/components/schemas/deleted_customer'
        date:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          nullable: true
          type: string
        discountable:
          description: >-
            If true, discounts will apply to this invoice item. Always false for
            prorations.
          type: boolean
        discounts:
          description: >-
            The discounts which apply to the invoice item. Item discounts are
            applied before invoice discounts. Use `expand[]=discounts` to expand
            each discount.
          items:
            anyOf:
              - maxLength: 5000
                type: string
              - $ref: '#/components/schemas/discount'
            x-expansionResources:
              oneOf:
                - $ref: '#/components/schemas/discount'
          nullable: true
          type: array
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        invoice:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/invoice'
          description: The ID of the invoice this invoice item belongs to.
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
            - invoiceitem
          type: string
        period:
          $ref: '#/components/schemas/invoice_line_item_period'
        price:
          anyOf:
            - $ref: '#/components/schemas/price'
          description: The price of the invoice item.
          nullable: true
        proration:
          description: >-
            Whether the invoice item was created automatically as a proration
            adjustment when the customer switched plans.
          type: boolean
        quantity:
          description: >-
            Quantity of units for the invoice item. If the invoice item is a
            proration, the quantity of the subscription that the proration was
            computed for.
          type: integer
        subscription:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/subscription'
          description: >-
            The subscription that this invoice item has been created for, if
            any.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/subscription'
        subscription_item:
          description: >-
            The subscription item that this invoice item has been created for,
            if any.
          maxLength: 5000
          type: string
        tax_rates:
          description: >-
            The tax rates which apply to the invoice item. When set, the
            `default_tax_rates` on the invoice do not apply to this invoice
            item.
          items:
            $ref: '#/components/schemas/tax_rate'
          nullable: true
          type: array
        test_clock:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/test_helpers.test_clock'
          description: ID of the test clock this invoice item belongs to.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/test_helpers.test_clock'
        unit_amount:
          description: Unit amount (in the `currency` specified) of the invoice item.
          nullable: true
          type: integer
        unit_amount_decimal:
          description: >-
            Same as `unit_amount`, but contains a decimal value with at most 12
            decimal places.
          format: decimal
          nullable: true
          type: string
      required:
        - amount
        - currency
        - customer
        - date
        - discountable
        - id
        - livemode
        - object
        - period
        - proration
        - quantity
      title: InvoiceItem
      type: object
      x-expandableFields:
        - customer
        - discounts
        - invoice
        - period
        - price
        - subscription
        - tax_rates
        - test_clock
      x-resourceId: invoiceitem
    deleted_invoiceitem:
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
            - invoiceitem
          type: string
      required:
        - deleted
        - id
        - object
      title: DeletedInvoiceItem
      type: object
      x-expandableFields: []
      x-resourceId: deleted_invoiceitem
    invoice:
      description: >-
        Invoices are statements of amounts owed by a customer, and are either

        generated one-off, or generated periodically from a subscription.


        They contain [invoice items](https://stripe.com/docs/api#invoiceitems),
        and proration adjustments

        that may be caused by subscription upgrades/downgrades (if necessary).


        If your invoice is configured to be billed through automatic charges,

        Stripe automatically finalizes your invoice and attempts payment. Note

        that finalizing the invoice,

        [when
        automatic](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection),
        does

        not happen immediately as the invoice is created. Stripe waits

        until one hour after the last webhook was successfully sent (or the last

        webhook timed out after failing). If you (and the platforms you may have

        connected to) have no webhooks configured, Stripe waits one hour after

        creation to finalize the invoice.


        If your invoice is configured to be billed by sending an email, then
        based on your

        [email
        settings](https://dashboard.stripe.com/account/billing/automatic),

        Stripe will email the invoice to your customer and await payment. These

        emails can contain a link to a hosted page to pay the invoice.


        Stripe applies any customer credit on the account before determining the

        amount due for the invoice (i.e., the amount that will be actually

        charged). If the amount due for the invoice is less than Stripe's
        [minimum allowed charge

        per currency](/docs/currencies#minimum-and-maximum-charge-amounts), the

        invoice is automatically marked paid, and we add the amount due to the

        customer's credit balance which is applied to the next invoice.


        More details on the customer's credit balance are

        [here](https://stripe.com/docs/billing/customer/balance).


        Related guide: [Send invoices to
        customers](https://stripe.com/docs/billing/invoices/sending)
      properties:
        account_country:
          description: >-
            The country of the business associated with this invoice, most often
            the business creating the invoice.
          maxLength: 5000
          nullable: true
          type: string
        account_name:
          description: >-
            The public name of the business associated with this invoice, most
            often the business creating the invoice.
          maxLength: 5000
          nullable: true
          type: string
        account_tax_ids:
          description: >-
            The account tax IDs associated with the invoice. Only editable when
            the invoice is a draft.
          items:
            anyOf:
              - maxLength: 5000
                type: string
              - $ref: '#/components/schemas/tax_id'
              - $ref: '#/components/schemas/deleted_tax_id'
            x-expansionResources:
              oneOf:
                - $ref: '#/components/schemas/tax_id'
                - $ref: '#/components/schemas/deleted_tax_id'
          nullable: true
          type: array
        amount_due:
          description: >-
            Final amount due at this time for this invoice. If the invoice's
            total is smaller than the minimum charge amount, for example, or if
            there is account credit that can be applied to the invoice, the
            `amount_due` may be 0. If there is a positive `starting_balance` for
            the invoice (the customer owes money), the `amount_due` will also
            take that into account. The charge that gets generated for the
            invoice will be for the amount specified in `amount_due`.
          type: integer
        amount_paid:
          description: 'The amount, in cents (or local equivalent), that was paid.'
          type: integer
        amount_remaining:
          description: >-
            The difference between amount_due and amount_paid, in cents (or
            local equivalent).
          type: integer
        amount_shipping:
          description: This is the sum of all the shipping amounts.
          type: integer
        application:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/application'
            - $ref: '#/components/schemas/deleted_application'
          description: ID of the Connect Application that created the invoice.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/application'
              - $ref: '#/components/schemas/deleted_application'
        application_fee_amount:
          description: >-
            The fee in cents (or local equivalent) that will be applied to the
            invoice and transferred to the application owner's Stripe account
            when the invoice is paid.
          nullable: true
          type: integer
        attempt_count:
          description: >-
            Number of payment attempts made for this invoice, from the
            perspective of the payment retry schedule. Any payment attempt
            counts as the first attempt, and subsequently only automatic retries
            increment the attempt count. In other words, manual payment attempts
            after the first attempt do not affect the retry schedule.
          type: integer
        attempted:
          description: >-
            Whether an attempt has been made to pay the invoice. An invoice is
            not attempted until 1 hour after the `invoice.created` webhook, for
            example, so you might not want to display that invoice as unpaid to
            your users.
          type: boolean
        auto_advance:
          description: >-
            Controls whether Stripe performs [automatic
            collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection)
            of the invoice. If `false`, the invoice's state doesn't
            automatically advance without an explicit action.
          type: boolean
        automatic_tax:
          $ref: '#/components/schemas/automatic_tax'
        billing_reason:
          description: >-
            Indicates the reason why the invoice was created.


            * `manual`: Unrelated to a subscription, for example, created via
            the invoice editor.

            * `subscription`: No longer in use. Applies to subscriptions from
            before May 2018 where no distinction was made between updates,
            cycles, and thresholds.

            * `subscription_create`: A new subscription was created.

            * `subscription_cycle`: A subscription advanced into a new period.

            * `subscription_threshold`: A subscription reached a billing
            threshold.

            * `subscription_update`: A subscription was updated.

            * `upcoming`: Reserved for simulated invoices, per the upcoming
            invoice endpoint.
          enum:
            - automatic_pending_invoice_item_invoice
            - manual
            - quote_accept
            - subscription
            - subscription_create
            - subscription_cycle
            - subscription_threshold
            - subscription_update
            - upcoming
          nullable: true
          type: string
        charge:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/charge'
          description: 'ID of the latest charge generated for this invoice, if any.'
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/charge'
        collection_method:
          description: >-
            Either `charge_automatically`, or `send_invoice`. When charging
            automatically, Stripe will attempt to pay this invoice using the
            default source attached to the customer. When sending an invoice,
            Stripe will email this invoice to the customer with payment
            instructions.
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
        custom_fields:
          description: Custom fields displayed on the invoice.
          items:
            $ref: '#/components/schemas/invoice_setting_custom_field'
          nullable: true
          type: array
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
            - $ref: '#/components/schemas/deleted_customer'
          description: The ID of the customer who will be billed.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
              - $ref: '#/components/schemas/deleted_customer'
        customer_address:
          anyOf:
            - $ref: '#/components/schemas/address'
          description: >-
            The customer's address. Until the invoice is finalized, this field
            will equal `customer.address`. Once the invoice is finalized, this
            field will no longer be updated.
          nullable: true
        customer_email:
          description: >-
            The customer's email. Until the invoice is finalized, this field
            will equal `customer.email`. Once the invoice is finalized, this
            field will no longer be updated.
          maxLength: 5000
          nullable: true
          type: string
        customer_name:
          description: >-
            The customer's name. Until the invoice is finalized, this field will
            equal `customer.name`. Once the invoice is finalized, this field
            will no longer be updated.
          maxLength: 5000
          nullable: true
          type: string
        customer_phone:
          description: >-
            The customer's phone number. Until the invoice is finalized, this
            field will equal `customer.phone`. Once the invoice is finalized,
            this field will no longer be updated.
          maxLength: 5000
          nullable: true
          type: string
        customer_shipping:
          anyOf:
            - $ref: '#/components/schemas/shipping'
          description: >-
            The customer's shipping information. Until the invoice is finalized,
            this field will equal `customer.shipping`. Once the invoice is
            finalized, this field will no longer be updated.
          nullable: true
        customer_tax_exempt:
          description: >-
            The customer's tax exempt status. Until the invoice is finalized,
            this field will equal `customer.tax_exempt`. Once the invoice is
            finalized, this field will no longer be updated.
          enum:
            - exempt
            - none
            - reverse
          nullable: true
          type: string
        customer_tax_ids:
          description: >-
            The customer's tax IDs. Until the invoice is finalized, this field
            will contain the same tax IDs as `customer.tax_ids`. Once the
            invoice is finalized, this field will no longer be updated.
          items:
            $ref: '#/components/schemas/invoices_resource_invoice_tax_id'
          nullable: true
          type: array
        default_payment_method:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/payment_method'
          description: >-
            ID of the default payment method for the invoice. It must belong to
            the customer associated with the invoice. If not set, defaults to
            the subscription's default payment method, if any, or to the default
            payment method in the customer's invoice settings.
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
            ID of the default payment source for the invoice. It must belong to
            the customer associated with the invoice and be in a chargeable
            state. If not set, defaults to the subscription's default source, if
            any, or to the customer's default source.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/bank_account'
              - $ref: '#/components/schemas/card'
              - $ref: '#/components/schemas/source'
          x-stripeBypassValidation: true
        default_tax_rates:
          description: 'The tax rates applied to this invoice, if any.'
          items:
            $ref: '#/components/schemas/tax_rate'
          type: array
        description:
          description: >-
            An arbitrary string attached to the object. Often useful for
            displaying to users. Referenced as 'memo' in the Dashboard.
          maxLength: 5000
          nullable: true
          type: string
        discount:
          anyOf:
            - $ref: '#/components/schemas/discount'
          description: >-
            Describes the current discount applied to this invoice, if there is
            one. Not populated if there are multiple discounts.
          nullable: true
        discounts:
          description: >-
            The discounts applied to the invoice. Line item discounts are
            applied before invoice discounts. Use `expand[]=discounts` to expand
            each discount.
          items:
            anyOf:
              - maxLength: 5000
                type: string
              - $ref: '#/components/schemas/discount'
              - $ref: '#/components/schemas/deleted_discount'
            x-expansionResources:
              oneOf:
                - $ref: '#/components/schemas/discount'
                - $ref: '#/components/schemas/deleted_discount'
          nullable: true
          type: array
        due_date:
          description: >-
            The date on which payment for this invoice is due. This value will
            be `null` for invoices where
            `collection_method=charge_automatically`.
          format: unix-time
          nullable: true
          type: integer
        effective_at:
          description: >-
            The date when this invoice is in effect. Same as `finalized_at`
            unless overwritten. When defined, this value replaces the
            system-generated 'Date of issue' printed on the invoice PDF and
            receipt.
          format: unix-time
          nullable: true
          type: integer
        ending_balance:
          description: >-
            Ending customer balance after the invoice is finalized. Invoices are
            finalized approximately an hour after successful webhook delivery or
            when payment collection is attempted for the invoice. If the invoice
            has not been finalized yet, this will be null.
          nullable: true
          type: integer
        footer:
          description: Footer displayed on the invoice.
          maxLength: 5000
          nullable: true
          type: string
        from_invoice:
          anyOf:
            - $ref: '#/components/schemas/invoices_from_invoice'
          description: >-
            Details of the invoice that was cloned. See the [revision
            documentation](https://stripe.com/docs/invoicing/invoice-revisions)
            for more details.
          nullable: true
        hosted_invoice_url:
          description: >-
            The URL for the hosted invoice page, which allows customers to view
            and pay an invoice. If the invoice has not been finalized yet, this
            will be null.
          maxLength: 5000
          nullable: true
          type: string
        id:
          description: >-
            Unique identifier for the object. This property is always present
            unless the invoice is an upcoming invoice. See [Retrieve an upcoming
            invoice](https://stripe.com/docs/api/invoices/upcoming) for more
            details.
          maxLength: 5000
          type: string
        invoice_pdf:
          description: >-
            The link to download the PDF for the invoice. If the invoice has not
            been finalized yet, this will be null.
          maxLength: 5000
          nullable: true
          type: string
        last_finalization_error:
          anyOf:
            - $ref: '#/components/schemas/api_errors'
          description: >-
            The error encountered during the previous attempt to finalize the
            invoice. This field is cleared when the invoice is successfully
            finalized.
          nullable: true
        latest_revision:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/invoice'
          description: The ID of the most recent non-draft revision of this invoice
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/invoice'
        lines:
          description: >-
            The individual line items that make up the invoice. `lines` is
            sorted as follows: (1) pending invoice items (including prorations)
            in reverse chronological order, (2) subscription items in reverse
            chronological order, and (3) invoice items added after invoice
            creation in chronological order.
          properties:
            data:
              description: Details about each object.
              items:
                $ref: '#/components/schemas/line_item'
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
          title: InvoiceLinesList
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
        next_payment_attempt:
          description: >-
            The time at which payment will next be attempted. This value will be
            `null` for invoices where `collection_method=send_invoice`.
          format: unix-time
          nullable: true
          type: integer
        number:
          description: >-
            A unique, identifying string that appears on emails sent to the
            customer for this invoice. This starts with the customer's unique
            invoice_prefix if it is specified.
          maxLength: 5000
          nullable: true
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - invoice
          type: string
        on_behalf_of:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/account'
          description: >-
            The account (if any) for which the funds of the invoice payment are
            intended. If set, the invoice will be presented with the branding
            and support information of the specified account. See the [Invoices
            with Connect](https://stripe.com/docs/billing/invoices/connect)
            documentation for details.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/account'
        paid:
          description: >-
            Whether payment was successfully collected for this invoice. An
            invoice can be paid (most commonly) with a charge or with credit
            from the customer's account balance.
          type: boolean
        paid_out_of_band:
          description: >-
            Returns true if the invoice was manually marked paid, returns false
            if the invoice hasn't been paid yet or was paid on Stripe.
          type: boolean
        payment_intent:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/payment_intent'
          description: >-
            The PaymentIntent associated with this invoice. The PaymentIntent is
            generated when the invoice is finalized, and can then be used to pay
            the invoice. Note that voiding an invoice will cancel the
            PaymentIntent.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/payment_intent'
        payment_settings:
          $ref: '#/components/schemas/invoices_payment_settings'
        period_end:
          description: >-
            End of the usage period during which invoice items were added to
            this invoice.
          format: unix-time
          type: integer
        period_start:
          description: >-
            Start of the usage period during which invoice items were added to
            this invoice.
          format: unix-time
          type: integer
        post_payment_credit_notes_amount:
          description: >-
            Total amount of all post-payment credit notes issued for this
            invoice.
          type: integer
        pre_payment_credit_notes_amount:
          description: >-
            Total amount of all pre-payment credit notes issued for this
            invoice.
          type: integer
        quote:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/quote'
          description: The quote this invoice was generated from.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/quote'
        receipt_number:
          description: >-
            This is the transaction number that appears on email receipts sent
            for this invoice.
          maxLength: 5000
          nullable: true
          type: string
        rendering:
          anyOf:
            - $ref: '#/components/schemas/invoices_invoice_rendering'
          description: >-
            The rendering-related settings that control how the invoice is
            displayed on customer-facing surfaces such as PDF and Hosted Invoice
            Page.
          nullable: true
        shipping_cost:
          anyOf:
            - $ref: '#/components/schemas/invoices_shipping_cost'
          description: >-
            The details of the cost of shipping, including the ShippingRate
            applied on the invoice.
          nullable: true
        shipping_details:
          anyOf:
            - $ref: '#/components/schemas/shipping'
          description: >-
            Shipping details for the invoice. The Invoice PDF will use the
            `shipping_details` value if it is set, otherwise the PDF will render
            the shipping address from the customer.
          nullable: true
        starting_balance:
          description: >-
            Starting customer balance before the invoice is finalized. If the
            invoice has not been finalized yet, this will be the current
            customer balance. For revision invoices, this also includes any
            customer balance that was applied to the original invoice.
          type: integer
        statement_descriptor:
          description: >-
            Extra information about an invoice for the customer's credit card
            statement.
          maxLength: 5000
          nullable: true
          type: string
        status:
          description: >-
            The status of the invoice, one of `draft`, `open`, `paid`,
            `uncollectible`, or `void`. [Learn
            more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
          enum:
            - draft
            - open
            - paid
            - uncollectible
            - void
          nullable: true
          type: string
          x-stripeBypassValidation: true
        status_transitions:
          $ref: '#/components/schemas/invoices_status_transitions'
        subscription:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/subscription'
          description: 'The subscription that this invoice was prepared for, if any.'
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/subscription'
        subscription_details:
          anyOf:
            - $ref: '#/components/schemas/subscription_details_data'
          description: Details about the subscription that created this invoice.
          nullable: true
        subscription_proration_date:
          description: >-
            Only set for upcoming invoices that preview prorations. The time
            used to calculate prorations.
          type: integer
        subtotal:
          description: >-
            Total of all subscriptions, invoice items, and prorations on the
            invoice before any invoice level discount or exclusive tax is
            applied. Item discounts are already incorporated
          type: integer
        subtotal_excluding_tax:
          description: >-
            The integer amount in cents (or local equivalent) representing the
            subtotal of the invoice before any invoice level discount or tax is
            applied. Item discounts are already incorporated
          nullable: true
          type: integer
        tax:
          description: >-
            The amount of tax on this invoice. This is the sum of all the tax
            amounts on this invoice.
          nullable: true
          type: integer
        test_clock:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/test_helpers.test_clock'
          description: ID of the test clock this invoice belongs to.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/test_helpers.test_clock'
        threshold_reason:
          $ref: '#/components/schemas/invoice_threshold_reason'
        total:
          description: Total after discounts and taxes.
          type: integer
        total_discount_amounts:
          description: The aggregate amounts calculated per discount across all line items.
          items:
            $ref: '#/components/schemas/discounts_resource_discount_amount'
          nullable: true
          type: array
        total_excluding_tax:
          description: >-
            The integer amount in cents (or local equivalent) representing the
            total amount of the invoice including all discounts but excluding
            all tax.
          nullable: true
          type: integer
        total_tax_amounts:
          description: The aggregate amounts calculated per tax rate for all line items.
          items:
            $ref: '#/components/schemas/invoice_tax_amount'
          type: array
        transfer_data:
          anyOf:
            - $ref: '#/components/schemas/invoice_transfer_data'
          description: >-
            The account (if any) the payment will be attributed to for tax
            reporting, and where funds from the payment will be transferred to
            for the invoice.
          nullable: true
        webhooks_delivered_at:
          description: >-
            Invoices are automatically paid or sent 1 hour after webhooks are
            delivered, or until all webhook delivery attempts have [been
            exhausted](https://stripe.com/docs/billing/webhooks#understand).
            This field tracks the time when webhooks for this invoice were
            successfully delivered. If the invoice had no webhooks to deliver,
            this will be set while the invoice is being created.
          format: unix-time
          nullable: true
          type: integer
      required:
        - amount_due
        - amount_paid
        - amount_remaining
        - amount_shipping
        - attempt_count
        - attempted
        - automatic_tax
        - collection_method
        - created
        - currency
        - default_tax_rates
        - lines
        - livemode
        - object
        - paid
        - paid_out_of_band
        - payment_settings
        - period_end
        - period_start
        - post_payment_credit_notes_amount
        - pre_payment_credit_notes_amount
        - starting_balance
        - status_transitions
        - subtotal
        - total
        - total_tax_amounts
      title: Invoice
      type: object
      x-expandableFields:
        - account_tax_ids
        - application
        - automatic_tax
        - charge
        - custom_fields
        - customer
        - customer_address
        - customer_shipping
        - customer_tax_ids
        - default_payment_method
        - default_source
        - default_tax_rates
        - discount
        - discounts
        - from_invoice
        - last_finalization_error
        - latest_revision
        - lines
        - on_behalf_of
        - payment_intent
        - payment_settings
        - quote
        - rendering
        - shipping_cost
        - shipping_details
        - status_transitions
        - subscription
        - subscription_details
        - test_clock
        - threshold_reason
        - total_discount_amounts
        - total_tax_amounts
        - transfer_data
      x-resourceId: invoice
    deleted_invoice:
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
            - invoice
          type: string
      required:
        - deleted
        - id
        - object
      title: DeletedInvoice
      type: object
      x-expandableFields: []
      x-resourceId: deleted_invoice
    line_item:
      description: ''
      properties:
        amount:
          description: 'The amount, in cents (or local equivalent).'
          type: integer
        amount_excluding_tax:
          description: >-
            The integer amount in cents (or local equivalent) representing the
            amount for this line item, excluding all tax and discounts.
          nullable: true
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
            An arbitrary string attached to the object. Often useful for
            displaying to users.
          maxLength: 5000
          nullable: true
          type: string
        discount_amounts:
          description: The amount of discount calculated per discount for this line item.
          items:
            $ref: '#/components/schemas/discounts_resource_discount_amount'
          nullable: true
          type: array
        discountable:
          description: >-
            If true, discounts will apply to this line item. Always false for
            prorations.
          type: boolean
        discounts:
          description: >-
            The discounts applied to the invoice line item. Line item discounts
            are applied before invoice discounts. Use `expand[]=discounts` to
            expand each discount.
          items:
            anyOf:
              - maxLength: 5000
                type: string
              - $ref: '#/components/schemas/discount'
            x-expansionResources:
              oneOf:
                - $ref: '#/components/schemas/discount'
          nullable: true
          type: array
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        invoice_item:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/invoiceitem'
          description: >-
            The ID of the [invoice
            item](https://stripe.com/docs/api/invoiceitems) associated with this
            line item if any.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/invoiceitem'
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
            additional information about the object in a structured format. Note
            that for line items with `type=subscription` this will reflect the
            metadata of the subscription that caused the line item to be
            created.
          type: object
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - line_item
          type: string
        period:
          $ref: '#/components/schemas/invoice_line_item_period'
        price:
          anyOf:
            - $ref: '#/components/schemas/price'
          description: The price of the line item.
          nullable: true
        proration:
          description: Whether this is a proration.
          type: boolean
        proration_details:
          anyOf:
            - $ref: >-
                #/components/schemas/invoices_resource_line_items_proration_details
          description: Additional details for proration line items
          nullable: true
        quantity:
          description: >-
            The quantity of the subscription, if the line item is a subscription
            or a proration.
          nullable: true
          type: integer
        subscription:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/subscription'
          description: 'The subscription that the invoice item pertains to, if any.'
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/subscription'
        subscription_item:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/subscription_item'
          description: >-
            The subscription item that generated this line item. Left empty if
            the line item is not an explicit result of a subscription.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/subscription_item'
        tax_amounts:
          description: The amount of tax calculated per tax rate for this line item
          items:
            $ref: '#/components/schemas/invoice_tax_amount'
          type: array
        tax_rates:
          description: The tax rates which apply to the line item.
          items:
            $ref: '#/components/schemas/tax_rate'
          type: array
        type:
          description: >-
            A string identifying the type of the source of this line item,
            either an `invoiceitem` or a `subscription`.
          enum:
            - invoiceitem
            - subscription
          type: string
        unit_amount_excluding_tax:
          description: >-
            The amount in cents (or local equivalent) representing the unit
            amount for this line item, excluding all tax and discounts.
          format: decimal
          nullable: true
          type: string
      required:
        - amount
        - currency
        - discountable
        - id
        - livemode
        - metadata
        - object
        - period
        - proration
        - type
      title: InvoiceLineItem
      type: object
      x-expandableFields:
        - discount_amounts
        - discounts
        - invoice_item
        - period
        - price
        - proration_details
        - subscription
        - subscription_item
        - tax_amounts
        - tax_rates
      x-resourceId: line_item
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
  - name: Invoices
    description: Needs a description.
  - name: Items
    description: Needs a description.
  - name: Search
    description: Needs a description.
  - name: Upcoming
    description: Needs a description.
  - name: Lines
    description: Needs a description.
  - name: Finalize
    description: Needs a description.
  - name: Mark
    description: Needs a description.
  - name: Uncollectable
    description: Needs a description.
  - name: Pay
    description: Needs a description.
  - name: Send
    description: Needs a description.
  - name: Void
    description: Needs a description.
---