---
openapi: 3.0.0
info:
  title: Stripe Credit Notes API
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
  /v1/credit_notes:
    get:
      description: <p>Returns a list of credit notes.</p>
      operationId: GetCreditNotes
      parameters:
        - description: >-
            Only return credit notes for the customer specified by this customer
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
            Only return credit notes for the invoice specified by this invoice
            ID.
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
              $ref: '#/components/schemas/GetCreditNotesRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/CreditNotesList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>Issue a credit note to adjust the amount of a finalized invoice. For
        a <code>status=open</code> invoice, a credit note reduces

        its <code>amount_due</code>. For a <code>status=paid</code> invoice, a
        credit note does not affect its <code>amount_due</code>. Instead, it can
        result

        in any combination of the following:</p>


        <ul>

        <li>Refund: create a new refund (using <code>refund_amount</code>) or
        link an existing refund (using <code>refund</code>).</li>

        <li>Customer balance credit: credit the customer’s balance (using
        <code>credit_amount</code>) which will be automatically applied to their
        next invoice when it’s finalized.</li>

        <li>Outside of Stripe credit: record the amount that is or will be
        credited outside of Stripe (using <code>out_of_band_amount</code>).</li>

        </ul>


        <p>For post-payment credit notes the sum of the refund, credit and
        outside of Stripe amounts must equal the credit note total.</p>


        <p>You may issue multiple credit notes for an invoice. Each credit note
        will increment the invoice’s
        <code>pre_payment_credit_notes_amount</code>

        or <code>post_payment_credit_notes_amount</code> depending on its
        <code>status</code> at the time of credit note creation.</p>
      operationId: PostCreditNotes
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              lines:
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
              $ref: '#/components/schemas/PostCreditNotesRequest'
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/credit_note'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  /v1/credit_notes/preview:
    get:
      description: <p>Get a preview of a credit note without creating it.</p>
      operationId: GetCreditNotesPreview
      parameters:
        - description: >-
            The integer amount in cents (or local equivalent) representing the
            total amount of the credit note.
          in: query
          name: amount
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            The integer amount in cents (or local equivalent) representing the
            amount to credit the customer's balance, which will be automatically
            applied to their next invoice.
          in: query
          name: credit_amount
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            The date when this credit note is in effect. Same as `created`
            unless overwritten. When defined, this value replaces the
            system-generated 'Date of issue' printed on the credit note PDF.
          in: query
          name: effective_at
          required: false
          schema:
            format: unix-time
            type: integer
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
        - description: ID of the invoice.
          in: query
          name: invoice
          required: true
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Line items that make up the credit note.
          explode: true
          in: query
          name: lines
          required: false
          schema:
            items:
              properties:
                amount:
                  type: integer
                description:
                  maxLength: 5000
                  type: string
                invoice_line_item:
                  maxLength: 5000
                  type: string
                quantity:
                  type: integer
                tax_amounts:
                  anyOf:
                    - items:
                        properties:
                          amount:
                            type: integer
                          tax_rate:
                            maxLength: 5000
                            type: string
                          taxable_amount:
                            type: integer
                        required:
                          - amount
                          - tax_rate
                          - taxable_amount
                        title: tax_amount_with_tax_rate_param
                        type: object
                      type: array
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
                type:
                  enum:
                    - custom_line_item
                    - invoice_line_item
                  type: string
                unit_amount:
                  type: integer
                unit_amount_decimal:
                  format: decimal
                  type: string
              required:
                - type
              title: credit_note_line_item_params
              type: object
            type: array
          style: deepObject
        - description: The credit note's memo appears on the credit note PDF.
          in: query
          name: memo
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
            Individual keys can be unset by posting an empty value to them. All
            keys can be unset by posting an empty value to `metadata`.
          explode: true
          in: query
          name: metadata
          required: false
          schema:
            additionalProperties:
              type: string
            type: object
          style: deepObject
        - description: >-
            The integer amount in cents (or local equivalent) representing the
            amount that is credited outside of Stripe.
          in: query
          name: out_of_band_amount
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            Reason for issuing this credit note, one of `duplicate`,
            `fraudulent`, `order_change`, or `product_unsatisfactory`
          in: query
          name: reason
          required: false
          schema:
            enum:
              - duplicate
              - fraudulent
              - order_change
              - product_unsatisfactory
            type: string
          style: form
        - description: ID of an existing refund to link this credit note to.
          in: query
          name: refund
          required: false
          schema:
            type: string
          style: form
        - description: >-
            The integer amount in cents (or local equivalent) representing the
            amount to refund. If set, a refund will be created for the charge
            associated with the invoice.
          in: query
          name: refund_amount
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            When shipping_cost contains the shipping_rate from the invoice, the
            shipping_cost is included in the credit note.
          explode: true
          in: query
          name: shipping_cost
          required: false
          schema:
            properties:
              shipping_rate:
                maxLength: 5000
                type: string
            title: credit_note_shipping_cost
            type: object
          style: deepObject
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/GetCreditNotesPreviewRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/credit_note'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  /v1/credit_notes/preview/lines:
    get:
      description: >-
        <p>When retrieving a credit note preview, you’ll get a
        <strong>lines</strong> property containing the first handful of those
        items. This URL you can retrieve the full (paginated) list of line
        items.</p>
      operationId: GetCreditNotesPreviewLines
      parameters:
        - description: >-
            The integer amount in cents (or local equivalent) representing the
            total amount of the credit note.
          in: query
          name: amount
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            The integer amount in cents (or local equivalent) representing the
            amount to credit the customer's balance, which will be automatically
            applied to their next invoice.
          in: query
          name: credit_amount
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            The date when this credit note is in effect. Same as `created`
            unless overwritten. When defined, this value replaces the
            system-generated 'Date of issue' printed on the credit note PDF.
          in: query
          name: effective_at
          required: false
          schema:
            format: unix-time
            type: integer
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
        - description: ID of the invoice.
          in: query
          name: invoice
          required: true
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
        - description: Line items that make up the credit note.
          explode: true
          in: query
          name: lines
          required: false
          schema:
            items:
              properties:
                amount:
                  type: integer
                description:
                  maxLength: 5000
                  type: string
                invoice_line_item:
                  maxLength: 5000
                  type: string
                quantity:
                  type: integer
                tax_amounts:
                  anyOf:
                    - items:
                        properties:
                          amount:
                            type: integer
                          tax_rate:
                            maxLength: 5000
                            type: string
                          taxable_amount:
                            type: integer
                        required:
                          - amount
                          - tax_rate
                          - taxable_amount
                        title: tax_amount_with_tax_rate_param
                        type: object
                      type: array
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
                type:
                  enum:
                    - custom_line_item
                    - invoice_line_item
                  type: string
                unit_amount:
                  type: integer
                unit_amount_decimal:
                  format: decimal
                  type: string
              required:
                - type
              title: credit_note_line_item_params
              type: object
            type: array
          style: deepObject
        - description: The credit note's memo appears on the credit note PDF.
          in: query
          name: memo
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
            Individual keys can be unset by posting an empty value to them. All
            keys can be unset by posting an empty value to `metadata`.
          explode: true
          in: query
          name: metadata
          required: false
          schema:
            additionalProperties:
              type: string
            type: object
          style: deepObject
        - description: >-
            The integer amount in cents (or local equivalent) representing the
            amount that is credited outside of Stripe.
          in: query
          name: out_of_band_amount
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            Reason for issuing this credit note, one of `duplicate`,
            `fraudulent`, `order_change`, or `product_unsatisfactory`
          in: query
          name: reason
          required: false
          schema:
            enum:
              - duplicate
              - fraudulent
              - order_change
              - product_unsatisfactory
            type: string
          style: form
        - description: ID of an existing refund to link this credit note to.
          in: query
          name: refund
          required: false
          schema:
            type: string
          style: form
        - description: >-
            The integer amount in cents (or local equivalent) representing the
            amount to refund. If set, a refund will be created for the charge
            associated with the invoice.
          in: query
          name: refund_amount
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            When shipping_cost contains the shipping_rate from the invoice, the
            shipping_cost is included in the credit note.
          explode: true
          in: query
          name: shipping_cost
          required: false
          schema:
            properties:
              shipping_rate:
                maxLength: 5000
                type: string
            title: credit_note_shipping_cost
            type: object
          style: deepObject
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
              $ref: '#/components/schemas/GetCreditNotesPreviewLinesRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/CreditNoteLinesList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/credit_notes/{credit_note}/lines':
    get:
      description: >-
        <p>When retrieving a credit note, you’ll get a <strong>lines</strong>
        property containing the the first handful of those items. There is also
        a URL where you can retrieve the full (paginated) list of line
        items.</p>
      operationId: GetCreditNotesCreditNoteLines
      parameters:
        - in: path
          name: credit_note
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
              $ref: '#/components/schemas/GetCreditNotesCreditNoteLinesRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/CreditNoteLinesList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/credit_notes/{id}':
    get:
      description: <p>Retrieves the credit note object with the given identifier.</p>
      operationId: GetCreditNotesId
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
              $ref: '#/components/schemas/GetCreditNotesIdRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/credit_note'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: <p>Updates an existing credit note.</p>
      operationId: PostCreditNotesId
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
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostCreditNotesIdRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/credit_note'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/credit_notes/{id}/void':
    post:
      description: >-
        <p>Marks a credit note as void. Learn more about <a
        href="/docs/billing/invoices/credit-notes#voiding">voiding credit
        notes</a>.</p>
      operationId: PostCreditNotesIdVoid
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
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostCreditNotesIdVoidRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/credit_note'
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
    credit_note:
      description: >-
        Issue a credit note to adjust an invoice's amount after the invoice is
        finalized.


        Related guide: [Credit
        notes](https://stripe.com/docs/billing/invoices/credit-notes)
      properties:
        amount:
          description: >-
            The integer amount in cents (or local equivalent) representing the
            total amount of the credit note, including tax.
          type: integer
        amount_shipping:
          description: This is the sum of all the shipping amounts.
          type: integer
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
          description: ID of the customer.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
              - $ref: '#/components/schemas/deleted_customer'
        customer_balance_transaction:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer_balance_transaction'
          description: Customer balance transaction related to this credit note.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer_balance_transaction'
        discount_amount:
          description: >-
            The integer amount in cents (or local equivalent) representing the
            total amount of discount that was credited.
          type: integer
        discount_amounts:
          description: The aggregate amounts calculated per discount for all line items.
          items:
            $ref: '#/components/schemas/discounts_resource_discount_amount'
          type: array
        effective_at:
          description: >-
            The date when this credit note is in effect. Same as `created`
            unless overwritten. When defined, this value replaces the
            system-generated 'Date of issue' printed on the credit note PDF.
          format: unix-time
          nullable: true
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
          description: ID of the invoice.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/invoice'
        lines:
          description: Line items that make up the credit note
          properties:
            data:
              description: Details about each object.
              items:
                $ref: '#/components/schemas/credit_note_line_item'
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
          title: CreditNoteLinesList
          type: object
          x-expandableFields:
            - data
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        memo:
          description: Customer-facing text that appears on the credit note PDF.
          maxLength: 5000
          nullable: true
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
        number:
          description: >-
            A unique number that identifies this particular credit note and
            appears on the PDF of the credit note and its associated invoice.
          maxLength: 5000
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - credit_note
          type: string
        out_of_band_amount:
          description: Amount that was credited outside of Stripe.
          nullable: true
          type: integer
        pdf:
          description: The link to download the PDF of the credit note.
          maxLength: 5000
          type: string
        reason:
          description: >-
            Reason for issuing this credit note, one of `duplicate`,
            `fraudulent`, `order_change`, or `product_unsatisfactory`
          enum:
            - duplicate
            - fraudulent
            - order_change
            - product_unsatisfactory
          nullable: true
          type: string
        refund:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/refund'
          description: Refund related to this credit note.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/refund'
        shipping_cost:
          anyOf:
            - $ref: '#/components/schemas/invoices_shipping_cost'
          description: >-
            The details of the cost of shipping, including the ShippingRate
            applied to the invoice.
          nullable: true
        status:
          description: >-
            Status of this credit note, one of `issued` or `void`. Learn more
            about [voiding credit
            notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
          enum:
            - issued
            - void
          type: string
        subtotal:
          description: >-
            The integer amount in cents (or local equivalent) representing the
            amount of the credit note, excluding exclusive tax and invoice level
            discounts.
          type: integer
        subtotal_excluding_tax:
          description: >-
            The integer amount in cents (or local equivalent) representing the
            amount of the credit note, excluding all tax and invoice level
            discounts.
          nullable: true
          type: integer
        tax_amounts:
          description: The aggregate amounts calculated per tax rate for all line items.
          items:
            $ref: '#/components/schemas/credit_note_tax_amount'
          type: array
        total:
          description: >-
            The integer amount in cents (or local equivalent) representing the
            total amount of the credit note, including tax and all discount.
          type: integer
        total_excluding_tax:
          description: >-
            The integer amount in cents (or local equivalent) representing the
            total amount of the credit note, excluding tax, but including
            discounts.
          nullable: true
          type: integer
        type:
          description: >-
            Type of this credit note, one of `pre_payment` or `post_payment`. A
            `pre_payment` credit note means it was issued when the invoice was
            open. A `post_payment` credit note means it was issued when the
            invoice was paid.
          enum:
            - post_payment
            - pre_payment
          type: string
        voided_at:
          description: The time that the credit note was voided.
          format: unix-time
          nullable: true
          type: integer
      required:
        - amount
        - amount_shipping
        - created
        - currency
        - customer
        - discount_amount
        - discount_amounts
        - id
        - invoice
        - lines
        - livemode
        - number
        - object
        - pdf
        - status
        - subtotal
        - tax_amounts
        - total
        - type
      title: CreditNote
      type: object
      x-expandableFields:
        - customer
        - customer_balance_transaction
        - discount_amounts
        - invoice
        - lines
        - refund
        - shipping_cost
        - tax_amounts
      x-resourceId: credit_note
    GetCreditNotesRequest:
      type: object
      properties: {}
    CreditNotesList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/credit_note'
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
    PostCreditNotesRequest:
      type: object
      required:
        - invoice
      properties:
        amount:
          description: >-
            The integer amount in cents (or local equivalent) representing the
            total amount of the credit note.
          type: integer
        credit_amount:
          description: >-
            The integer amount in cents (or local equivalent) representing the
            amount to credit the customer's balance, which will be automatically
            applied to their next invoice.
          type: integer
        effective_at:
          description: >-
            The date when this credit note is in effect. Same as `created`
            unless overwritten. When defined, this value replaces the
            system-generated 'Date of issue' printed on the credit note PDF.
          format: unix-time
          type: integer
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        invoice:
          description: ID of the invoice.
          maxLength: 5000
          type: string
        lines:
          description: Line items that make up the credit note.
          items:
            properties:
              amount:
                type: integer
              description:
                maxLength: 5000
                type: string
              invoice_line_item:
                maxLength: 5000
                type: string
              quantity:
                type: integer
              tax_amounts:
                anyOf:
                  - items:
                      properties:
                        amount:
                          type: integer
                        tax_rate:
                          maxLength: 5000
                          type: string
                        taxable_amount:
                          type: integer
                      required:
                        - amount
                        - tax_rate
                        - taxable_amount
                      title: tax_amount_with_tax_rate_param
                      type: object
                    type: array
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
              type:
                enum:
                  - custom_line_item
                  - invoice_line_item
                type: string
              unit_amount:
                type: integer
              unit_amount_decimal:
                format: decimal
                type: string
            required:
              - type
            title: credit_note_line_item_params
            type: object
          type: array
        memo:
          description: The credit note's memo appears on the credit note PDF.
          maxLength: 5000
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
        out_of_band_amount:
          description: >-
            The integer amount in cents (or local equivalent) representing the
            amount that is credited outside of Stripe.
          type: integer
        reason:
          description: >-
            Reason for issuing this credit note, one of `duplicate`,
            `fraudulent`, `order_change`, or `product_unsatisfactory`
          enum:
            - duplicate
            - fraudulent
            - order_change
            - product_unsatisfactory
          type: string
        refund:
          description: ID of an existing refund to link this credit note to.
          type: string
        refund_amount:
          description: >-
            The integer amount in cents (or local equivalent) representing the
            amount to refund. If set, a refund will be created for the charge
            associated with the invoice.
          type: integer
        shipping_cost:
          description: >-
            When shipping_cost contains the shipping_rate from the invoice, the
            shipping_cost is included in the credit note.
          properties:
            shipping_rate:
              maxLength: 5000
              type: string
          title: credit_note_shipping_cost
          type: object
    GetCreditNotesPreviewRequest:
      type: object
      properties: {}
    GetCreditNotesPreviewLinesRequest:
      type: object
      properties: {}
    CreditNoteLinesList:
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
            $ref: '#/components/schemas/credit_note_line_item'
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
    GetCreditNotesCreditNoteLinesRequest:
      type: object
      properties: {}
    GetCreditNotesIdRequest:
      type: object
      properties: {}
    PostCreditNotesIdRequest:
      type: object
      properties:
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        memo:
          description: Credit note memo.
          maxLength: 5000
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
    PostCreditNotesIdVoidRequest:
      type: object
      properties:
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