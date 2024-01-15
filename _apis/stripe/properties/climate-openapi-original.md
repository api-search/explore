---
openapi: 3.0.0
info:
  title: Stripe Climate API
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
  /v1/climate/orders:
    get:
      description: >-
        <p>Lists all Climate order objects. The orders are returned sorted by
        creation date, with the

        most recently created orders appearing first.</p>
      operationId: GetClimateOrders
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
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/GetClimateOrdersRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/ClimateRemovalsOrdersList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>Creates a Climate order object for a given Climate product. The order
        will be processed immediately

        after creation and payment will be deducted your Stripe balance.</p>
      operationId: PostClimateOrders
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              beneficiary:
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
              $ref: '#/components/schemas/PostClimateOrdersRequest'
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/climate.order'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/climate/orders/{order}':
    get:
      description: >-
        <p>Retrieves the details of a Climate order object with the given
        ID.</p>
      operationId: GetClimateOrdersOrder
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
        - description: Unique identifier of the order.
          in: path
          name: order
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
              $ref: '#/components/schemas/GetClimateOrdersOrderRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/climate.order'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>Updates the specified order by setting the values of the parameters
        passed.</p>
      operationId: PostClimateOrdersOrder
      parameters:
        - description: Unique identifier of the order.
          in: path
          name: order
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              beneficiary:
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
              $ref: '#/components/schemas/PostClimateOrdersOrderRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/climate.order'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/climate/orders/{order}/cancel':
    post:
      description: >-
        <p>Cancels a Climate order. You can cancel an order within 30 days of
        creation. Stripe refunds the

        reservation <code>amount_subtotal</code>, but not the
        <code>amount_fees</code> for user-triggered cancellations. Frontier

        might cancel reservations if suppliers fail to deliver. If Frontier
        cancels the reservation, Stripe

        provides 90 days advance notice and refunds the
        <code>amount_total</code>.</p>
      operationId: PostClimateOrdersOrderCancel
      parameters:
        - description: Unique identifier of the order.
          in: path
          name: order
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
              $ref: '#/components/schemas/PostClimateOrdersOrderCancelRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/climate.order'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  /v1/climate/products:
    get:
      description: <p>Lists all available Climate product objects.</p>
      operationId: GetClimateProducts
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
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/GetClimateProductsRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/ClimateRemovalsProductsList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/climate/products/{product}':
    get:
      description: <p>Retrieves the details of a Climate product with the given ID.</p>
      operationId: GetClimateProductsProduct
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
          name: product
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
              $ref: '#/components/schemas/GetClimateProductsProductRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/climate.product'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  /v1/climate/reservations:
    get:
      description: >-
        <p>Lists all Climate order objects. The orders are returned sorted by
        creation date, with the

        most recently created orders appearing first.</p>
      operationId: GetClimateReservations
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
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/GetClimateReservationsRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/ClimateRemovalsOrdersList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>Creates a Climate order object for a given Climate product. The order
        will be processed immediately

        after creation and payment will be deducted your Stripe balance.</p>
      operationId: PostClimateReservations
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              beneficiary:
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
              $ref: '#/components/schemas/PostClimateReservationsRequest'
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/climate.order'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/climate/reservations/{order}':
    get:
      description: >-
        <p>Retrieves the details of a Climate order object with the given
        ID.</p>
      operationId: GetClimateReservationsOrder
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
        - description: Unique identifier of the order.
          in: path
          name: order
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
              $ref: '#/components/schemas/GetClimateReservationsOrderRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/climate.order'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>Updates the specified order by setting the values of the parameters
        passed.</p>
      operationId: PostClimateReservationsOrder
      parameters:
        - description: Unique identifier of the order.
          in: path
          name: order
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              beneficiary:
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
              $ref: '#/components/schemas/PostClimateReservationsOrderRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/climate.order'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/climate/reservations/{order}/cancel':
    post:
      description: >-
        <p>Cancels a Climate order. You can cancel an order within 30 days of
        creation. Stripe refunds the

        reservation <code>amount_subtotal</code>, but not the
        <code>amount_fees</code> for user-triggered cancellations. Frontier

        might cancel reservations if suppliers fail to deliver. If Frontier
        cancels the reservation, Stripe

        provides 90 days advance notice and refunds the
        <code>amount_total</code>.</p>
      operationId: PostClimateReservationsOrderCancel
      parameters:
        - description: Unique identifier of the order.
          in: path
          name: order
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
              $ref: '#/components/schemas/PostClimateReservationsOrderCancelRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/climate.order'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/climate/reservations/{order}/confirm':
    post:
      description: >-
        <p>Confirms a Climate order. When you confirm your order, we immediately
        deduct the funds from your

        Stripe balance.</p>
      operationId: PostClimateReservationsOrderConfirm
      parameters:
        - description: Unique identifier of the order.
          in: path
          name: order
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
              $ref: '#/components/schemas/PostClimateReservationsOrderConfirmRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/climate.order'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  /v1/climate/suppliers:
    get:
      description: <p>Lists all available Climate supplier objects.</p>
      operationId: GetClimateSuppliers
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
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/GetClimateSuppliersRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/ClimateRemovalsSuppliersList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/climate/suppliers/{supplier}':
    get:
      description: <p>Retrieves a Climate supplier object.</p>
      operationId: GetClimateSuppliersSupplier
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
          name: supplier
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
              $ref: '#/components/schemas/GetClimateSuppliersSupplierRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/climate.supplier'
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
    climate.order:
      description: >-
        Orders represent your intent to purchase a particular Climate product.
        When you create an order, the

        payment is deducted from your merchant balance.
      properties:
        amount_fees:
          description: >-
            Total amount of [Frontier](https://frontierclimate.com/)'s service
            fees in the currency's smallest unit.
          type: integer
        amount_subtotal:
          description: Total amount of the carbon removal in the currency's smallest unit.
          type: integer
        amount_total:
          description: >-
            Total amount of the order including fees in the currency's smallest
            unit.
          type: integer
        beneficiary:
          $ref: '#/components/schemas/climate_removals_beneficiary'
        canceled_at:
          description: >-
            Time at which the order was canceled. Measured in seconds since the
            Unix epoch.
          format: unix-time
          nullable: true
          type: integer
        cancellation_reason:
          description: Reason for the cancellation of this order.
          enum:
            - expired
            - product_unavailable
            - requested
          nullable: true
          type: string
          x-stripeBypassValidation: true
        certificate:
          description: 'For delivered orders, a URL to a delivery certificate for the order.'
          maxLength: 5000
          nullable: true
          type: string
        confirmed_at:
          description: >-
            Time at which the order was confirmed. Measured in seconds since the
            Unix epoch.
          format: unix-time
          nullable: true
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
            lowercase, representing the currency for this order.
          maxLength: 5000
          type: string
        delayed_at:
          description: >-
            Time at which the order's expected_delivery_year was delayed.
            Measured in seconds since the Unix epoch.
          format: unix-time
          nullable: true
          type: integer
        delivered_at:
          description: >-
            Time at which the order was delivered. Measured in seconds since the
            Unix epoch.
          format: unix-time
          nullable: true
          type: integer
        delivery_details:
          description: Details about the delivery of carbon removal for this order.
          items:
            $ref: '#/components/schemas/climate_removals_order_deliveries'
          type: array
        expected_delivery_year:
          description: The year this order is expected to be delivered.
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
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          type: object
        metric_tons:
          description: Quantity of carbon removal that is included in this order.
          format: decimal
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - climate.order
          type: string
        product:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/climate.product'
          description: Unique ID for the Climate `Product` this order is purchasing.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/climate.product'
        product_substituted_at:
          description: >-
            Time at which the order's product was substituted for a different
            product. Measured in seconds since the Unix epoch.
          format: unix-time
          nullable: true
          type: integer
        status:
          description: The current status of this order.
          enum:
            - awaiting_funds
            - canceled
            - confirmed
            - delivered
            - open
          type: string
      required:
        - amount_fees
        - amount_subtotal
        - amount_total
        - created
        - currency
        - delivery_details
        - expected_delivery_year
        - id
        - livemode
        - metadata
        - metric_tons
        - object
        - product
        - status
      title: ClimateRemovalsOrders
      type: object
      x-expandableFields:
        - beneficiary
        - delivery_details
        - product
      x-resourceId: climate.order
    climate.product:
      description: >-
        A Climate product represents a type of carbon removal unit available for
        reservation.

        You can retrieve it to see the current price and availability.
      properties:
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        current_prices_per_metric_ton:
          additionalProperties:
            $ref: '#/components/schemas/climate_removals_products_price'
          description: >-
            Current prices for a metric ton of carbon removal in a currency's
            smallest unit.
          type: object
        delivery_year:
          description: The year in which the carbon removal is expected to be delivered.
          nullable: true
          type: integer
        id:
          description: >-
            Unique identifier for the object. For convenience, Climate product
            IDs are human-readable strings

            that start with `climsku_`. See [carbon removal
            inventory](https://stripe.com/docs/climate/orders/carbon-removal-inventory)

            for a list of available carbon removal products.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        metric_tons_available:
          description: The quantity of metric tons available for reservation.
          format: decimal
          type: string
        name:
          description: The Climate product's name.
          maxLength: 5000
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - climate.product
          type: string
        suppliers:
          description: >-
            The carbon removal suppliers that fulfill orders for this Climate
            product.
          items:
            $ref: '#/components/schemas/climate.supplier'
          type: array
      required:
        - created
        - current_prices_per_metric_ton
        - id
        - livemode
        - metric_tons_available
        - name
        - object
        - suppliers
      title: ClimateRemovalsProducts
      type: object
      x-expandableFields:
        - current_prices_per_metric_ton
        - suppliers
      x-resourceId: climate.product
    climate.supplier:
      description: A supplier of carbon removal.
      properties:
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        info_url:
          description: Link to a webpage to learn more about the supplier.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        locations:
          description: The locations in which this supplier operates.
          items:
            $ref: '#/components/schemas/climate_removals_location'
          type: array
        name:
          description: Name of this carbon removal supplier.
          maxLength: 5000
          type: string
        object:
          description: >-
            String representing the object’s type. Objects of the same type
            share the same value.
          enum:
            - climate.supplier
          type: string
        removal_pathway:
          description: The scientific pathway used for carbon removal.
          enum:
            - biomass_carbon_removal_and_storage
            - direct_air_capture
            - enhanced_weathering
          type: string
      required:
        - id
        - info_url
        - livemode
        - locations
        - name
        - object
        - removal_pathway
      title: ClimateRemovalsSuppliers
      type: object
      x-expandableFields:
        - locations
      x-resourceId: climate.supplier
    GetClimateOrdersRequest:
      type: object
      properties: {}
    ClimateRemovalsOrdersList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/climate.order'
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
          pattern: ^/v1/climate/orders
          type: string
    PostClimateOrdersRequest:
      type: object
      required:
        - product
      properties:
        amount:
          description: >-
            Requested amount of carbon removal units. Either this or
            `metric_tons` must be specified.
          type: integer
        beneficiary:
          description: >-
            Publicly sharable reference for the end beneficiary of carbon
            removal. Assumed to be the Stripe account if not set.
          properties:
            public_name:
              maxLength: 5000
              type: string
          required:
            - public_name
          title: beneficiary_params
          type: object
        currency:
          description: >-
            Request currency for the order as a three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a supported [settlement currency for your
            account](https://stripe.com/docs/currencies). If omitted, the
            account's default currency will be used.
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
        metric_tons:
          description: >-
            Requested number of tons for the order. Either this or `amount` must
            be specified.
          format: decimal
          type: string
        product:
          description: Unique identifier of the Climate product.
          maxLength: 5000
          type: string
    GetClimateOrdersOrderRequest:
      type: object
      properties: {}
    PostClimateOrdersOrderRequest:
      type: object
      properties:
        beneficiary:
          anyOf:
            - properties:
                public_name:
                  anyOf:
                    - maxLength: 5000
                      type: string
                    - enum:
                        - ''
                      type: string
              required:
                - public_name
              title: beneficiary_params
              type: object
            - enum:
                - ''
              type: string
          description: >-
            Publicly sharable reference for the end beneficiary of carbon
            removal. Assumed to be the Stripe account if not set.
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
    PostClimateOrdersOrderCancelRequest:
      type: object
      properties:
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
    GetClimateProductsRequest:
      type: object
      properties: {}
    ClimateRemovalsProductsList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/climate.product'
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
          pattern: ^/v1/climate/products
          type: string
    GetClimateProductsProductRequest:
      type: object
      properties: {}
    GetClimateReservationsRequest:
      type: object
      properties: {}
    PostClimateReservationsRequest:
      type: object
      required:
        - product
      properties:
        amount:
          description: >-
            Requested amount of carbon removal units. Either this or
            `metric_tons` must be specified.
          type: integer
        beneficiary:
          description: >-
            Publicly sharable reference for the end beneficiary of carbon
            removal. Assumed to be the Stripe account if not set.
          properties:
            public_name:
              maxLength: 5000
              type: string
          required:
            - public_name
          title: beneficiary_params
          type: object
        currency:
          description: >-
            Request currency for the order as a three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a supported [settlement currency for your
            account](https://stripe.com/docs/currencies). If omitted, the
            account's default currency will be used.
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
        metric_tons:
          description: >-
            Requested number of tons for the order. Either this or `amount` must
            be specified.
          format: decimal
          type: string
        product:
          description: Unique identifier of the Climate product.
          maxLength: 5000
          type: string
    GetClimateReservationsOrderRequest:
      type: object
      properties: {}
    PostClimateReservationsOrderRequest:
      type: object
      properties:
        beneficiary:
          anyOf:
            - properties:
                public_name:
                  anyOf:
                    - maxLength: 5000
                      type: string
                    - enum:
                        - ''
                      type: string
              required:
                - public_name
              title: beneficiary_params
              type: object
            - enum:
                - ''
              type: string
          description: >-
            Publicly sharable reference for the end beneficiary of carbon
            removal. Assumed to be the Stripe account if not set.
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
    PostClimateReservationsOrderCancelRequest:
      type: object
      properties:
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
    PostClimateReservationsOrderConfirmRequest:
      type: object
      properties:
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
    GetClimateSuppliersRequest:
      type: object
      properties: {}
    ClimateRemovalsSuppliersList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/climate.supplier'
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
          pattern: ^/v1/climate/suppliers
          type: string
    GetClimateSuppliersSupplierRequest:
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