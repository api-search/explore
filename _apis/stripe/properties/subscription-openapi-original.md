---
openapi: 3.0.0
info:
  title: Stripe Subscription API
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
  /v1/subscription_items:
    get:
      description: >-
        <p>Returns a list of your subscription items for a given
        subscription.</p>
      operationId: GetSubscriptionItems
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
        - description: The ID of the subscription whose items will be retrieved.
          in: query
          name: subscription
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
              $ref: '#/components/schemas/GetSubscriptionItemsRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/SubscriptionsItemsSubscriptionItemList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>Adds a new item to an existing subscription. No existing items will
        be changed or replaced.</p>
      operationId: PostSubscriptionItems
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              billing_thresholds:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              price_data:
                explode: true
                style: deepObject
              tax_rates:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostSubscriptionItemsRequest'
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/subscription_item'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/subscription_items/{item}':
    delete:
      description: >-
        <p>Deletes an item from the subscription. Removing a subscription item
        from a subscription will not cancel the subscription.</p>
      operationId: DeleteSubscriptionItemsItem
      parameters:
        - in: path
          name: item
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
              $ref: '#/components/schemas/DeleteSubscriptionItemsItemRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/deleted_subscription_item'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    get:
      description: <p>Retrieves the subscription item with the given ID.</p>
      operationId: GetSubscriptionItemsItem
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
          name: item
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
              $ref: '#/components/schemas/GetSubscriptionItemsItemRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/subscription_item'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>Updates the plan or quantity of an item on a current
        subscription.</p>
      operationId: PostSubscriptionItemsItem
      parameters:
        - in: path
          name: item
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              billing_thresholds:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              price_data:
                explode: true
                style: deepObject
              tax_rates:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostSubscriptionItemsItemRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/subscription_item'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/subscription_items/{subscription_item}/usage_record_summaries':
    get:
      description: >-
        <p>For the specified subscription item, returns a list of summary
        objects. Each object in the list provides usage information that’s been
        summarized from multiple usage records and over a subscription billing
        period (e.g., 15 usage records in the month of September).</p>


        <p>The list is sorted in reverse-chronological order (newest first). The
        first list item represents the most current usage period that hasn’t
        ended yet. Since new usage records can still be added, the returned
        summary information for the subscription item’s ID should be seen as
        unstable until the subscription billing period ends.</p>
      operationId: GetSubscriptionItemsSubscriptionItemUsageRecordSummaries
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
        - in: path
          name: subscription_item
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
              $ref: >-
                #/components/schemas/GetSubscriptionItemsSubscriptionItemUsageRecordSummariesRequest
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/UsageEventsResourceUsageRecordSummaryList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/subscription_items/{subscription_item}/usage_records':
    post:
      description: >-
        <p>Creates a usage record for a specified subscription item and date,
        and fills it with a quantity.</p>


        <p>Usage records provide <code>quantity</code> information that Stripe
        uses to track how much a customer is using your service. With usage
        information and the pricing model set up by the <a
        href="https://stripe.com/docs/billing/subscriptions/metered-billing">metered
        billing</a> plan, Stripe helps you send accurate invoices to your
        customers.</p>


        <p>The default calculation for usage is to add up all the
        <code>quantity</code> values of the usage records within a billing
        period. You can change this default behavior with the billing plan’s
        <code>aggregate_usage</code> <a
        href="/docs/api/plans/create#create_plan-aggregate_usage">parameter</a>.
        When there is more than one usage record with the same timestamp, Stripe
        adds the <code>quantity</code> values together. In most cases, this is
        the desired resolution, however, you can change this behavior with the
        <code>action</code> parameter.</p>


        <p>The default pricing model for metered billing is <a
        href="/docs/api/plans/object#plan_object-billing_scheme">per-unit
        pricing</a>. For finer granularity, you can configure metered billing to
        have a <a
        href="https://stripe.com/docs/billing/subscriptions/tiers">tiered
        pricing</a> model.</p>
      operationId: PostSubscriptionItemsSubscriptionItemUsageRecords
      parameters:
        - in: path
          name: subscription_item
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
              timestamp:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: >-
                #/components/schemas/PostSubscriptionItemsSubscriptionItemUsageRecordsRequest
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/usage_record'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  /v1/subscription_schedules:
    get:
      description: <p>Retrieves the list of your subscription schedules.</p>
      operationId: GetSubscriptionSchedules
      parameters:
        - description: >-
            Only return subscription schedules that were created canceled the
            given date interval.
          explode: true
          in: query
          name: canceled_at
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
            Only return subscription schedules that completed during the given
            date interval.
          explode: true
          in: query
          name: completed_at
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
            Only return subscription schedules that were created during the
            given date interval.
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
        - description: Only return subscription schedules for the given customer.
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
            Only return subscription schedules that were released during the
            given date interval.
          explode: true
          in: query
          name: released_at
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
        - description: Only return subscription schedules that have not started yet.
          in: query
          name: scheduled
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
              $ref: '#/components/schemas/GetSubscriptionSchedulesRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/SubscriptionSchedulesResourceScheduleList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>Creates a new subscription schedule object. Each customer can have up
        to 500 active or scheduled subscriptions.</p>
      operationId: PostSubscriptionSchedules
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              default_settings:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              phases:
                explode: true
                style: deepObject
              start_date:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostSubscriptionSchedulesRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/subscription_schedule'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/subscription_schedules/{schedule}':
    get:
      description: >-
        <p>Retrieves the details of an existing subscription schedule. You only
        need to supply the unique subscription schedule identifier that was
        returned upon subscription schedule creation.</p>
      operationId: GetSubscriptionSchedulesSchedule
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
          name: schedule
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
              $ref: '#/components/schemas/GetSubscriptionSchedulesScheduleRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/subscription_schedule'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: <p>Updates an existing subscription schedule.</p>
      operationId: PostSubscriptionSchedulesSchedule
      parameters:
        - in: path
          name: schedule
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              default_settings:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              phases:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: '#/components/schemas/PostSubscriptionSchedulesScheduleRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/subscription_schedule'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/subscription_schedules/{schedule}/cancel':
    post:
      description: >-
        <p>Cancels a subscription schedule and its associated subscription
        immediately (if the subscription schedule has an active subscription). A
        subscription schedule can only be canceled if its status is
        <code>not_started</code> or <code>active</code>.</p>
      operationId: PostSubscriptionSchedulesScheduleCancel
      parameters:
        - in: path
          name: schedule
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
                #/components/schemas/PostSubscriptionSchedulesScheduleCancelRequest
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/subscription_schedule'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/subscription_schedules/{schedule}/release':
    post:
      description: >-
        <p>Releases the subscription schedule immediately, which will stop
        scheduling of its phases, but leave any existing subscription in place.
        A schedule can only be released if its status is
        <code>not_started</code> or <code>active</code>. If the subscription
        schedule is currently associated with a subscription, releasing it will
        remove its <code>subscription</code> property and set the subscription’s
        ID to the <code>released_subscription</code> property.</p>
      operationId: PostSubscriptionSchedulesScheduleRelease
      parameters:
        - in: path
          name: schedule
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
                #/components/schemas/PostSubscriptionSchedulesScheduleReleaseRequest
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/subscription_schedule'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  /v1/subscriptions:
    get:
      description: >-
        <p>By default, returns a list of subscriptions that have not been
        canceled. In order to list canceled subscriptions, specify
        <code>status=canceled</code>.</p>
      operationId: GetSubscriptions
      parameters:
        - description: Filter subscriptions by their automatic tax settings.
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
            title: automatic_tax_filter_params
            type: object
          style: deepObject
        - description: >-
            The collection method of the subscriptions to retrieve. Either
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
        - explode: true
          in: query
          name: current_period_end
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
        - explode: true
          in: query
          name: current_period_start
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
        - description: The ID of the customer whose subscriptions will be retrieved.
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
        - description: Filter for subscriptions that contain this recurring price ID.
          in: query
          name: price
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
            The status of the subscriptions to retrieve. Passing in a value of
            `canceled` will return all canceled subscriptions, including those
            belonging to deleted customers. Pass `ended` to find subscriptions
            that are canceled and subscriptions that are expired due to
            [incomplete
            payment](https://stripe.com/docs/billing/subscriptions/overview#subscription-statuses).
            Passing in a value of `all` will return subscriptions of all
            statuses. If no value is supplied, all subscriptions that have not
            been canceled are returned.
          in: query
          name: status
          required: false
          schema:
            enum:
              - active
              - all
              - canceled
              - ended
              - incomplete
              - incomplete_expired
              - past_due
              - paused
              - trialing
              - unpaid
            type: string
          style: form
        - description: >-
            Filter for subscriptions that are associated with the specified test
            clock. The response will not include subscriptions with test clocks
            if this and the customer parameter is not set.
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
              $ref: '#/components/schemas/GetSubscriptionsRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/SubscriptionsSubscriptionList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>Creates a new subscription on an existing customer. Each customer can
        have up to 500 active or scheduled subscriptions.</p>


        <p>When you create a subscription with
        <code>collection_method=charge_automatically</code>, the first invoice
        is finalized as part of the request.

        The <code>payment_behavior</code> parameter determines the exact
        behavior of the initial payment.</p>


        <p>To start subscriptions where the first invoice always begins in a
        <code>draft</code> status, use <a
        href="/docs/billing/subscriptions/subscription-schedules#managing">subscription
        schedules</a> instead.

        Schedules provide the flexibility to model more complex billing
        configurations that change over time.</p>
      operationId: PostSubscriptions
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
              on_behalf_of:
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
              $ref: '#/components/schemas/PostSubscriptionsRequest'
        required: true
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
  /v1/subscriptions/search:
    get:
      description: >-
        <p>Search for subscriptions you’ve previously created using Stripe’s <a
        href="/docs/search#search-query-language">Search Query Language</a>.

        Don’t use search in read-after-write flows where strict consistency is
        necessary. Under normal operating

        conditions, data is searchable in less than a minute. Occasionally,
        propagation of new or updated data can be up

        to an hour behind during outages. Search functionality is not available
        to merchants in India.</p>
      operationId: GetSubscriptionsSearch
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
            subscriptions](https://stripe.com/docs/search#query-fields-for-subscriptions).
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
              $ref: '#/components/schemas/GetSubscriptionsSearchRequest'
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
  '/v1/subscriptions/{subscription_exposed_id}':
    delete:
      description: >-
        <p>Cancels a customer’s subscription immediately. The customer will not
        be charged again for the subscription.</p>


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
      operationId: DeleteSubscriptionsSubscriptionExposedId
      parameters:
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
              cancellation_details:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              $ref: >-
                #/components/schemas/DeleteSubscriptionsSubscriptionExposedIdRequest
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
    get:
      description: <p>Retrieves the subscription with the given ID.</p>
      operationId: GetSubscriptionsSubscriptionExposedId
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
              $ref: >-
                #/components/schemas/GetSubscriptionsSubscriptionExposedIdRequest
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
    post:
      description: >-
        <p>Updates an existing subscription to match the specified parameters.

        When changing prices or quantities, we optionally prorate the price we
        charge next month to make up for any price changes.

        To preview how the proration is calculated, use the <a
        href="/docs/api/invoices/upcoming">upcoming invoice</a> endpoint.</p>


        <p>By default, we prorate subscription changes. For example, if a
        customer signs up on May 1 for a <currency>100</currency> price, they’ll
        be billed <currency>100</currency> immediately. If on May 15 they switch
        to a <currency>200</currency> price, then on June 1 they’ll be billed
        <currency>250</currency> (<currency>200</currency> for a renewal of her
        subscription, plus a <currency>50</currency> prorating adjustment for
        half of the previous month’s <currency>100</currency> difference).
        Similarly, a downgrade generates a credit that is applied to the next
        invoice. We also prorate when you make quantity changes.</p>


        <p>Switching prices does not normally change the billing date or
        generate an immediate charge unless:</p>


        <ul>

        <li>The billing interval is changed (for example, from monthly to
        yearly).</li>

        <li>The subscription moves from free to paid, or paid to free.</li>

        <li>A trial starts or ends.</li>

        </ul>


        <p>In these cases, we apply a credit for the unused time on the previous
        price, immediately charge the customer using the new price, and reset
        the billing date.</p>


        <p>If you want to charge for an upgrade immediately, pass
        <code>proration_behavior</code> as <code>always_invoice</code> to create
        prorations, automatically invoice the customer for those proration
        adjustments, and attempt to collect payment. If you pass
        <code>create_prorations</code>, the prorations are created but not
        automatically invoiced. If you want to bill the customer for the
        prorations before the subscription’s renewal date, you need to manually
        <a href="/docs/api/invoices/create">invoice the customer</a>.</p>


        <p>If you don’t want to prorate, set the <code>proration_behavior</code>
        option to <code>none</code>. With this option, the customer is billed
        <currency>100</currency> on May 1 and <currency>200</currency> on June
        1. Similarly, if you set <code>proration_behavior</code> to
        <code>none</code> when switching between different billing intervals
        (for example, from monthly to yearly), we don’t generate any credits for
        the old subscription’s unused time. We still reset the billing date and
        bill immediately for the new subscription.</p>


        <p>Updating the quantity on a subscription many times in an hour may
        result in <a href="/docs/rate-limits">rate limiting</a>. If you need to
        bill for a frequently changing quantity, consider integrating <a
        href="/docs/billing/subscriptions/usage-based">usage-based billing</a>
        instead.</p>
      operationId: PostSubscriptionsSubscriptionExposedId
      parameters:
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
              description:
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
              on_behalf_of:
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
              $ref: >-
                #/components/schemas/PostSubscriptionsSubscriptionExposedIdRequest
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
  '/v1/subscriptions/{subscription_exposed_id}/discount':
    delete:
      description: <p>Removes the currently applied discount on a subscription.</p>
      operationId: DeleteSubscriptionsSubscriptionExposedIdDiscount
      parameters:
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
              $ref: >-
                #/components/schemas/DeleteSubscriptionsSubscriptionExposedIdDiscountRequest
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
  '/v1/subscriptions/{subscription}/resume':
    post:
      description: >-
        <p>Initiates resumption of a paused subscription, optionally resetting
        the billing cycle anchor and creating prorations. If a resumption
        invoice is generated, it must be paid or marked uncollectible before the
        subscription will be unpaused. If payment succeeds the subscription will
        become <code>active</code>, and if payment fails the subscription will
        be <code>past_due</code>. The resumption invoice will void automatically
        if not paid by the expiration date.</p>
      operationId: PostSubscriptionsSubscriptionResume
      parameters:
        - in: path
          name: subscription
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
              $ref: '#/components/schemas/PostSubscriptionsSubscriptionResumeRequest'
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
    subscription_item:
      description: >-
        Subscription items allow you to create customer subscriptions with more
        than

        one plan, making it easy to represent complex billing relationships.
      properties:
        billing_thresholds:
          anyOf:
            - $ref: '#/components/schemas/subscription_item_billing_thresholds'
          description: >-
            Define thresholds at which an invoice will be sent, and the related
            subscription advanced to a new billing period
          nullable: true
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          type: integer
        id:
          description: Unique identifier for the object.
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
          type: object
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - subscription_item
          type: string
        price:
          $ref: '#/components/schemas/price'
        quantity:
          description: >-
            The [quantity](https://stripe.com/docs/subscriptions/quantities) of
            the plan to which the customer should be subscribed.
          type: integer
        subscription:
          description: The `subscription` this `subscription_item` belongs to.
          maxLength: 5000
          type: string
        tax_rates:
          description: >-
            The tax rates which apply to this `subscription_item`. When set, the
            `default_tax_rates` on the subscription do not apply to this
            `subscription_item`.
          items:
            $ref: '#/components/schemas/tax_rate'
          nullable: true
          type: array
      required:
        - created
        - id
        - metadata
        - object
        - price
        - subscription
      title: SubscriptionItem
      type: object
      x-expandableFields:
        - billing_thresholds
        - price
        - tax_rates
      x-resourceId: subscription_item
    deleted_subscription_item:
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
            - subscription_item
          type: string
      required:
        - deleted
        - id
        - object
      title: DeletedSubscriptionItem
      type: object
      x-expandableFields: []
      x-resourceId: deleted_subscription_item
    usage_record:
      description: >-
        Usage records allow you to report customer usage and metrics to Stripe
        for

        metered billing of subscription prices.


        Related guide: [Metered
        billing](https://stripe.com/docs/billing/subscriptions/metered-billing)
      properties:
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
            - usage_record
          type: string
        quantity:
          description: The usage quantity for the specified date.
          type: integer
        subscription_item:
          description: The ID of the subscription item this usage record contains data for.
          maxLength: 5000
          type: string
        timestamp:
          description: The timestamp when this usage occurred.
          format: unix-time
          type: integer
      required:
        - id
        - livemode
        - object
        - quantity
        - subscription_item
        - timestamp
      title: UsageRecord
      type: object
      x-expandableFields: []
      x-resourceId: usage_record
    subscription_schedule:
      description: >-
        A subscription schedule allows you to create and manage the lifecycle of
        a subscription by predefining expected changes.


        Related guide: [Subscription
        schedules](https://stripe.com/docs/billing/subscriptions/subscription-schedules)
      properties:
        application:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/application'
            - $ref: '#/components/schemas/deleted_application'
          description: ID of the Connect Application that created the schedule.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/application'
              - $ref: '#/components/schemas/deleted_application'
        canceled_at:
          description: >-
            Time at which the subscription schedule was canceled. Measured in
            seconds since the Unix epoch.
          format: unix-time
          nullable: true
          type: integer
        completed_at:
          description: >-
            Time at which the subscription schedule was completed. Measured in
            seconds since the Unix epoch.
          format: unix-time
          nullable: true
          type: integer
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        current_phase:
          anyOf:
            - $ref: '#/components/schemas/subscription_schedule_current_phase'
          description: >-
            Object representing the start and end dates for the current phase of
            the subscription schedule, if it is `active`.
          nullable: true
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
            - $ref: '#/components/schemas/deleted_customer'
          description: ID of the customer who owns the subscription schedule.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
              - $ref: '#/components/schemas/deleted_customer'
        default_settings:
          $ref: >-
            #/components/schemas/subscription_schedules_resource_default_settings
        end_behavior:
          description: >-
            Behavior of the subscription schedule and underlying subscription
            when it ends. Possible values are `release` or `cancel` with the
            default being `release`. `release` will end the subscription
            schedule and keep the underlying subscription running.`cancel` will
            end the subscription schedule and cancel the underlying
            subscription.
          enum:
            - cancel
            - none
            - release
            - renew
          type: string
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
          nullable: true
          type: object
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - subscription_schedule
          type: string
        phases:
          description: Configuration for the subscription schedule's phases.
          items:
            $ref: '#/components/schemas/subscription_schedule_phase_configuration'
          type: array
        released_at:
          description: >-
            Time at which the subscription schedule was released. Measured in
            seconds since the Unix epoch.
          format: unix-time
          nullable: true
          type: integer
        released_subscription:
          description: >-
            ID of the subscription once managed by the subscription schedule (if
            it is released).
          maxLength: 5000
          nullable: true
          type: string
        status:
          description: >-
            The present status of the subscription schedule. Possible values are
            `not_started`, `active`, `completed`, `released`, and `canceled`.
            You can read more about the different states in our [behavior
            guide](https://stripe.com/docs/billing/subscriptions/subscription-schedules).
          enum:
            - active
            - canceled
            - completed
            - not_started
            - released
          type: string
        subscription:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/subscription'
          description: ID of the subscription managed by the subscription schedule.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/subscription'
        test_clock:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/test_helpers.test_clock'
          description: ID of the test clock this subscription schedule belongs to.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/test_helpers.test_clock'
      required:
        - created
        - customer
        - default_settings
        - end_behavior
        - id
        - livemode
        - object
        - phases
        - status
      title: SubscriptionSchedule
      type: object
      x-expandableFields:
        - application
        - current_phase
        - customer
        - default_settings
        - phases
        - subscription
        - test_clock
      x-resourceId: subscription_schedule
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
    GetSubscriptionItemsRequest:
      type: object
      properties: {}
    SubscriptionsItemsSubscriptionItemList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/subscription_item'
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
          pattern: ^/v1/subscription_items
          type: string
    PostSubscriptionItemsRequest:
      type: object
      required:
        - subscription
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
          description: >-
            Define thresholds at which an invoice will be sent, and the
            subscription advanced to a new billing period. When updating, pass
            an empty string to remove previously-defined thresholds.
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
        payment_behavior:
          description: >-
            Use `allow_incomplete` to transition the subscription to
            `status=past_due` if a payment is required but cannot be paid. This
            allows you to manage scenarios where additional user actions are
            needed to pay a subscription's invoice. For example, SCA regulation
            may require 3DS authentication to complete payment. See the [SCA
            Migration
            Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication)
            for Billing to learn more. This is the default behavior.


            Use `default_incomplete` to transition the subscription to
            `status=past_due` when payment is required and await explicit
            confirmation of the invoice's payment intent. This allows simpler
            management of scenarios where additional user actions are needed to
            pay a subscription’s invoice. Such as failed payments, [SCA
            regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication),
            or collecting a mandate for a bank debit payment method.


            Use `pending_if_incomplete` to update the subscription using
            [pending
            updates](https://stripe.com/docs/billing/subscriptions/pending-updates).
            When you use `pending_if_incomplete` you can only pass the
            parameters [supported by pending
            updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).


            Use `error_if_incomplete` if you want Stripe to return an HTTP 402
            status code if a subscription's invoice cannot be paid. For example,
            if a payment method requires 3DS authentication due to SCA
            regulation and further user action is needed, this parameter does
            not update the subscription and returns an error instead. This was
            the default behavior for API versions prior to 2019-03-14. See the
            [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn
            more.
          enum:
            - allow_incomplete
            - default_incomplete
            - error_if_incomplete
            - pending_if_incomplete
          type: string
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
        proration_behavior:
          description: >-
            Determines how to handle
            [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations)
            when the billing cycle changes (e.g., when switching plans,
            resetting `billing_cycle_anchor=now`, or starting a trial), or if an
            item's `quantity` changes. The default value is `create_prorations`.
          enum:
            - always_invoice
            - create_prorations
            - none
          type: string
        proration_date:
          description: >-
            If set, the proration will be calculated as though the subscription
            was updated at the given time. This can be used to apply the same
            proration that was previewed with the [upcoming
            invoice](https://stripe.com/docs/api#retrieve_customer_invoice)
            endpoint.
          format: unix-time
          type: integer
        quantity:
          description: >-
            The quantity you'd like to apply to the subscription item you're
            creating.
          type: integer
        subscription:
          description: The identifier of the subscription to modify.
          maxLength: 5000
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
          description: >-
            A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids.
            These Tax Rates will override the
            [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates)
            on the Subscription. When updating, pass an empty string to remove
            previously-defined tax rates.
    DeleteSubscriptionItemsItemRequest:
      type: object
      properties:
        clear_usage:
          description: >-
            Delete all usage for the given subscription item. Allowed only when
            the current plan's `usage_type` is `metered`.
          type: boolean
        proration_behavior:
          description: >-
            Determines how to handle
            [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations)
            when the billing cycle changes (e.g., when switching plans,
            resetting `billing_cycle_anchor=now`, or starting a trial), or if an
            item's `quantity` changes. The default value is `create_prorations`.
          enum:
            - always_invoice
            - create_prorations
            - none
          type: string
        proration_date:
          description: >-
            If set, the proration will be calculated as though the subscription
            was updated at the given time. This can be used to apply the same
            proration that was previewed with the [upcoming
            invoice](https://stripe.com/docs/api#retrieve_customer_invoice)
            endpoint.
          format: unix-time
          type: integer
    GetSubscriptionItemsItemRequest:
      type: object
      properties: {}
    PostSubscriptionItemsItemRequest:
      type: object
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
          description: >-
            Define thresholds at which an invoice will be sent, and the
            subscription advanced to a new billing period. When updating, pass
            an empty string to remove previously-defined thresholds.
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
        off_session:
          description: >-
            Indicates if a customer is on or off-session while an invoice
            payment is attempted.
          type: boolean
        payment_behavior:
          description: >-
            Use `allow_incomplete` to transition the subscription to
            `status=past_due` if a payment is required but cannot be paid. This
            allows you to manage scenarios where additional user actions are
            needed to pay a subscription's invoice. For example, SCA regulation
            may require 3DS authentication to complete payment. See the [SCA
            Migration
            Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication)
            for Billing to learn more. This is the default behavior.


            Use `default_incomplete` to transition the subscription to
            `status=past_due` when payment is required and await explicit
            confirmation of the invoice's payment intent. This allows simpler
            management of scenarios where additional user actions are needed to
            pay a subscription’s invoice. Such as failed payments, [SCA
            regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication),
            or collecting a mandate for a bank debit payment method.


            Use `pending_if_incomplete` to update the subscription using
            [pending
            updates](https://stripe.com/docs/billing/subscriptions/pending-updates).
            When you use `pending_if_incomplete` you can only pass the
            parameters [supported by pending
            updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).


            Use `error_if_incomplete` if you want Stripe to return an HTTP 402
            status code if a subscription's invoice cannot be paid. For example,
            if a payment method requires 3DS authentication due to SCA
            regulation and further user action is needed, this parameter does
            not update the subscription and returns an error instead. This was
            the default behavior for API versions prior to 2019-03-14. See the
            [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn
            more.
          enum:
            - allow_incomplete
            - default_incomplete
            - error_if_incomplete
            - pending_if_incomplete
          type: string
        price:
          description: >-
            The ID of the price object. When changing a subscription item's
            price, `quantity` is set to 1 unless a `quantity` parameter is
            provided.
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
        proration_behavior:
          description: >-
            Determines how to handle
            [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations)
            when the billing cycle changes (e.g., when switching plans,
            resetting `billing_cycle_anchor=now`, or starting a trial), or if an
            item's `quantity` changes. The default value is `create_prorations`.
          enum:
            - always_invoice
            - create_prorations
            - none
          type: string
        proration_date:
          description: >-
            If set, the proration will be calculated as though the subscription
            was updated at the given time. This can be used to apply the same
            proration that was previewed with the [upcoming
            invoice](https://stripe.com/docs/api#retrieve_customer_invoice)
            endpoint.
          format: unix-time
          type: integer
        quantity:
          description: >-
            The quantity you'd like to apply to the subscription item you're
            creating.
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
          description: >-
            A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids.
            These Tax Rates will override the
            [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates)
            on the Subscription. When updating, pass an empty string to remove
            previously-defined tax rates.
    GetSubscriptionItemsSubscriptionItemUsageRecordSummariesRequest:
      type: object
      properties: {}
    UsageEventsResourceUsageRecordSummaryList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/usage_record_summary'
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
    PostSubscriptionItemsSubscriptionItemUsageRecordsRequest:
      type: object
      required:
        - quantity
      properties:
        action:
          description: >-
            Valid values are `increment` (default) or `set`. When using
            `increment` the specified `quantity` will be added to the usage at
            the specified timestamp. The `set` action will overwrite the usage
            quantity at that timestamp. If the subscription has [billing
            thresholds](https://stripe.com/docs/api/subscriptions/object#subscription_object-billing_thresholds),
            `increment` is the only allowed value.
          enum:
            - increment
            - set
          type: string
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        quantity:
          description: The usage quantity for the specified timestamp.
          type: integer
        timestamp:
          anyOf:
            - enum:
                - now
              maxLength: 5000
              type: string
            - format: unix-time
              type: integer
          description: >-
            The timestamp for the usage event. This timestamp must be within the
            current billing period of the subscription of the provided
            `subscription_item`, and must not be in the future. When passing
            `"now"`, Stripe records usage for the current time. Default is
            `"now"` if a value is not provided.
    GetSubscriptionSchedulesRequest:
      type: object
      properties: {}
    SubscriptionSchedulesResourceScheduleList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/subscription_schedule'
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
          pattern: ^/v1/subscription_schedules
          type: string
    PostSubscriptionSchedulesRequest:
      type: object
      properties:
        customer:
          description: >-
            The identifier of the customer to create the subscription schedule
            for.
          maxLength: 5000
          type: string
        default_settings:
          description: Object representing the subscription schedule's default settings.
          properties:
            application_fee_percent:
              type: number
            automatic_tax:
              properties:
                enabled:
                  type: boolean
              required:
                - enabled
              title: automatic_tax_config
              type: object
            billing_cycle_anchor:
              enum:
                - automatic
                - phase_start
              type: string
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
            collection_method:
              enum:
                - charge_automatically
                - send_invoice
              type: string
            default_payment_method:
              maxLength: 5000
              type: string
            description:
              anyOf:
                - maxLength: 500
                  type: string
                - enum:
                    - ''
                  type: string
            invoice_settings:
              properties:
                days_until_due:
                  type: integer
              title: subscription_schedule_default_settings_param
              type: object
            on_behalf_of:
              anyOf:
                - type: string
                - enum:
                    - ''
                  type: string
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
          title: default_settings_params
          type: object
        end_behavior:
          description: >-
            Behavior of the subscription schedule and underlying subscription
            when it ends. Possible values are `release` or `cancel` with the
            default being `release`. `release` will end the subscription
            schedule and keep the underlying subscription running.`cancel` will
            end the subscription schedule and cancel the underlying
            subscription.
          enum:
            - cancel
            - none
            - release
            - renew
          type: string
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        from_subscription:
          description: >-
            Migrate an existing subscription to be managed by a subscription
            schedule. If this parameter is set, a subscription schedule will be
            created using the subscription's item(s), set to auto-renew using
            the subscription's interval. When using this parameter, other
            parameters (such as phase values) cannot be set. To create a
            subscription schedule with other modifications, we recommend making
            two separate API calls.
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
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
            Individual keys can be unset by posting an empty value to them. All
            keys can be unset by posting an empty value to `metadata`.
        phases:
          description: >-
            List representing phases of the subscription schedule. Each phase
            can be customized to have different durations, plans, and coupons.
            If there are multiple phases, the `end_date` of one phase will
            always equal the `start_date` of the next phase.
          items:
            properties:
              add_invoice_items:
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
                type: number
              automatic_tax:
                properties:
                  enabled:
                    type: boolean
                required:
                  - enabled
                title: automatic_tax_config
                type: object
              billing_cycle_anchor:
                enum:
                  - automatic
                  - phase_start
                type: string
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
              collection_method:
                enum:
                  - charge_automatically
                  - send_invoice
                type: string
              coupon:
                maxLength: 5000
                type: string
              currency:
                type: string
              default_payment_method:
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
              description:
                anyOf:
                  - maxLength: 500
                    type: string
                  - enum:
                      - ''
                    type: string
              end_date:
                format: unix-time
                type: integer
              invoice_settings:
                properties:
                  days_until_due:
                    type: integer
                title: invoice_settings
                type: object
              items:
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
                  title: configuration_item_params
                  type: object
                type: array
              iterations:
                type: integer
              metadata:
                additionalProperties:
                  type: string
                type: object
              on_behalf_of:
                type: string
              proration_behavior:
                enum:
                  - always_invoice
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
              trial:
                type: boolean
              trial_end:
                format: unix-time
                type: integer
            required:
              - items
            title: phase_configuration_params
            type: object
          type: array
        start_date:
          anyOf:
            - format: unix-time
              type: integer
            - enum:
                - now
              maxLength: 5000
              type: string
          description: >-
            When the subscription schedule starts. We recommend using `now` so
            that it starts the subscription immediately. You can also use a Unix
            timestamp to backdate the subscription so that it starts on a past
            date, or set a future date for the subscription to start on.
    GetSubscriptionSchedulesScheduleRequest:
      type: object
      properties: {}
    PostSubscriptionSchedulesScheduleRequest:
      type: object
      properties:
        default_settings:
          description: Object representing the subscription schedule's default settings.
          properties:
            application_fee_percent:
              type: number
            automatic_tax:
              properties:
                enabled:
                  type: boolean
              required:
                - enabled
              title: automatic_tax_config
              type: object
            billing_cycle_anchor:
              enum:
                - automatic
                - phase_start
              type: string
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
            collection_method:
              enum:
                - charge_automatically
                - send_invoice
              type: string
            default_payment_method:
              maxLength: 5000
              type: string
            description:
              anyOf:
                - maxLength: 500
                  type: string
                - enum:
                    - ''
                  type: string
            invoice_settings:
              properties:
                days_until_due:
                  type: integer
              title: subscription_schedule_default_settings_param
              type: object
            on_behalf_of:
              anyOf:
                - type: string
                - enum:
                    - ''
                  type: string
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
          title: default_settings_params
          type: object
        end_behavior:
          description: >-
            Behavior of the subscription schedule and underlying subscription
            when it ends. Possible values are `release` or `cancel` with the
            default being `release`. `release` will end the subscription
            schedule and keep the underlying subscription running.`cancel` will
            end the subscription schedule and cancel the underlying
            subscription.
          enum:
            - cancel
            - none
            - release
            - renew
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
        phases:
          description: >-
            List representing phases of the subscription schedule. Each phase
            can be customized to have different durations, plans, and coupons.
            If there are multiple phases, the `end_date` of one phase will
            always equal the `start_date` of the next phase. Note that past
            phases can be omitted.
          items:
            properties:
              add_invoice_items:
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
                type: number
              automatic_tax:
                properties:
                  enabled:
                    type: boolean
                required:
                  - enabled
                title: automatic_tax_config
                type: object
              billing_cycle_anchor:
                enum:
                  - automatic
                  - phase_start
                type: string
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
              collection_method:
                enum:
                  - charge_automatically
                  - send_invoice
                type: string
              coupon:
                maxLength: 5000
                type: string
              default_payment_method:
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
              description:
                anyOf:
                  - maxLength: 500
                    type: string
                  - enum:
                      - ''
                    type: string
              end_date:
                anyOf:
                  - format: unix-time
                    type: integer
                  - enum:
                      - now
                    maxLength: 5000
                    type: string
              invoice_settings:
                properties:
                  days_until_due:
                    type: integer
                title: invoice_settings
                type: object
              items:
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
                  title: configuration_item_params
                  type: object
                type: array
              iterations:
                type: integer
              metadata:
                additionalProperties:
                  type: string
                type: object
              on_behalf_of:
                type: string
              proration_behavior:
                enum:
                  - always_invoice
                  - create_prorations
                  - none
                type: string
              start_date:
                anyOf:
                  - format: unix-time
                    type: integer
                  - enum:
                      - now
                    maxLength: 5000
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
              trial:
                type: boolean
              trial_end:
                anyOf:
                  - format: unix-time
                    type: integer
                  - enum:
                      - now
                    maxLength: 5000
                    type: string
            required:
              - items
            title: phase_configuration_params
            type: object
          type: array
        proration_behavior:
          description: >-
            If the update changes the current phase, indicates whether the
            changes should be prorated. The default value is
            `create_prorations`.
          enum:
            - always_invoice
            - create_prorations
            - none
          type: string
    PostSubscriptionSchedulesScheduleCancelRequest:
      type: object
      properties:
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        invoice_now:
          description: >-
            If the subscription schedule is `active`, indicates if a final
            invoice will be generated that contains any un-invoiced metered
            usage and new/pending proration invoice items. Defaults to `true`.
          type: boolean
        prorate:
          description: >-
            If the subscription schedule is `active`, indicates if the
            cancellation should be prorated. Defaults to `true`.
          type: boolean
    PostSubscriptionSchedulesScheduleReleaseRequest:
      type: object
      properties:
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        preserve_cancel_date:
          description: Keep any cancellation on the subscription that the schedule has set
          type: boolean
    GetSubscriptionsRequest:
      type: object
      properties: {}
    SubscriptionsSubscriptionList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/subscription'
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
          pattern: ^/v1/subscriptions
          type: string
    PostSubscriptionsRequest:
      type: object
      required:
        - customer
      properties:
        add_invoice_items:
          description: >-
            A list of prices and quantities that will generate invoice items
            appended to the next invoice for this subscription. You may pass up
            to 20 items.
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
            A non-negative decimal between 0 and 100, with at most two decimal
            places. This represents the percentage of the subscription invoice
            total that will be transferred to the application owner's Stripe
            account. The request must be made by a platform account on a
            connected account in order to set an application fee percentage. For
            more information, see the application fees
            [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
          type: number
        automatic_tax:
          description: >-
            Automatic tax settings for this subscription. We recommend you only
            include this parameter when the existing value is being changed.
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
            subscription's start date to. If set, the first invoice will contain
            a proration for the timespan between the start date and the current
            time. Can be combined with trials and the billing cycle anchor.
          format: unix-time
          type: integer
        billing_cycle_anchor:
          description: >-
            A future timestamp to anchor the subscription's [billing
            cycle](https://stripe.com/docs/subscriptions/billing-cycle). This is
            used to determine the date of the first full invoice, and, for plans
            with `month` or `year` intervals, the day of the month for
            subsequent invoices. The timestamp is in UTC format.
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
            subscription advanced to a new billing period. Pass an empty string
            to remove previously-defined thresholds.
        cancel_at:
          description: >-
            A timestamp at which the subscription should cancel. If set to a
            date before the current period ends, this will cause a proration if
            prorations have been enabled using `proration_behavior`. If set
            during a future period, this will always cause a proration for that
            period.
          format: unix-time
          type: integer
        cancel_at_period_end:
          description: >-
            Boolean indicating whether this subscription should cancel at the
            end of the current period.
          type: boolean
        collection_method:
          description: >-
            Either `charge_automatically`, or `send_invoice`. When charging
            automatically, Stripe will attempt to pay this subscription at the
            end of the cycle using the default source attached to the customer.
            When sending an invoice, Stripe will email your customer an invoice
            with payment instructions and mark the subscription as `active`.
            Defaults to `charge_automatically`.
          enum:
            - charge_automatically
            - send_invoice
          type: string
        coupon:
          description: >-
            The ID of the coupon to apply to this subscription. A coupon applied
            to a subscription will only affect invoices created for that
            particular subscription.
          maxLength: 5000
          type: string
        currency:
          description: >-
            Three-letter [ISO currency
            code](https://www.iso.org/iso-4217-currency-codes.html), in
            lowercase. Must be a [supported
            currency](https://stripe.com/docs/currencies).
          type: string
        customer:
          description: The identifier of the customer to subscribe.
          maxLength: 5000
          type: string
        days_until_due:
          description: >-
            Number of days a customer has to pay invoices generated by this
            subscription. Valid only for subscriptions where `collection_method`
            is set to `send_invoice`.
          type: integer
        default_payment_method:
          description: >-
            ID of the default payment method for the subscription. It must
            belong to the customer associated with the subscription. This takes
            precedence over `default_source`. If neither are set, invoices will
            use the customer's
            [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method)
            or
            [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
          maxLength: 5000
          type: string
        default_source:
          description: >-
            ID of the default payment source for the subscription. It must
            belong to the customer associated with the subscription and be in a
            chargeable state. If `default_payment_method` is also set,
            `default_payment_method` will take precedence. If neither are set,
            invoices will use the customer's
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
            The tax rates that will apply to any subscription item that does not
            have `tax_rates` set. Invoices created will have their
            `default_tax_rates` populated from the subscription.
        description:
          description: >-
            The subscription's description, meant to be displayable to the
            customer. Use this field to optionally store an explanation of the
            subscription for rendering in Stripe surfaces and certain local
            payment methods UIs.
          maxLength: 500
          type: string
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        items:
          description: 'A list of up to 20 subscription items, each with an attached price.'
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
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
            Individual keys can be unset by posting an empty value to them. All
            keys can be unset by posting an empty value to `metadata`.
        off_session:
          description: >-
            Indicates if a customer is on or off-session while an invoice
            payment is attempted.
          type: boolean
        on_behalf_of:
          anyOf:
            - type: string
            - enum:
                - ''
              type: string
          description: >-
            The account on behalf of which to charge, for each of the
            subscription's invoices.
        payment_behavior:
          description: >-
            Only applies to subscriptions with
            `collection_method=charge_automatically`.


            Use `allow_incomplete` to create subscriptions with
            `status=incomplete` if the first invoice cannot be paid. Creating
            subscriptions with this status allows you to manage scenarios where
            additional user actions are needed to pay a subscription's invoice.
            For example, SCA regulation may require 3DS authentication to
            complete payment. See the [SCA Migration
            Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication)
            for Billing to learn more. This is the default behavior.


            Use `default_incomplete` to create Subscriptions with
            `status=incomplete` when the first invoice requires payment,
            otherwise start as active. Subscriptions transition to
            `status=active` when successfully confirming the payment intent on
            the first invoice. This allows simpler management of scenarios where
            additional user actions are needed to pay a subscription’s invoice.
            Such as failed payments, [SCA
            regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication),
            or collecting a mandate for a bank debit payment method. If the
            payment intent is not confirmed within 23 hours subscriptions
            transition to `status=incomplete_expired`, which is a terminal
            state.


            Use `error_if_incomplete` if you want Stripe to return an HTTP 402
            status code if a subscription's first invoice cannot be paid. For
            example, if a payment method requires 3DS authentication due to SCA
            regulation and further user action is needed, this parameter does
            not create a subscription and returns an error instead. This was the
            default behavior for API versions prior to 2019-03-14. See the
            [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn
            more.


            `pending_if_incomplete` is only used with updates and cannot be
            passed when creating a subscription.


            Subscriptions with `collection_method=send_invoice` are
            automatically activated regardless of the first invoice status.
          enum:
            - allow_incomplete
            - default_incomplete
            - error_if_incomplete
            - pending_if_incomplete
          type: string
        payment_settings:
          description: Payment settings to pass to invoices created by the subscription.
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
            Specifies an interval for how often to bill for any pending invoice
            items. It is analogous to calling [Create an
            invoice](https://stripe.com/docs/api#create_invoice) for the given
            subscription at the specified interval.
        promotion_code:
          description: >-
            The API ID of a promotion code to apply to this subscription. A
            promotion code applied to a subscription will only affect invoices
            created for that particular subscription.
          maxLength: 5000
          type: string
        proration_behavior:
          description: >-
            Determines how to handle
            [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations)
            resulting from the `billing_cycle_anchor`. If no value is passed,
            the default is `create_prorations`.
          enum:
            - always_invoice
            - create_prorations
            - none
          type: string
        transfer_data:
          description: >-
            If specified, the funds from the subscription's invoices will be
            transferred to the destination and the ID of the resulting transfers
            will be found on the resulting charges.
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
            Unix timestamp representing the end of the trial period the customer
            will get before being charged for the first time. If set, trial_end
            will override the default trial period of the plan the customer is
            being subscribed to. The special value `now` can be provided to end
            the customer's trial immediately. Can be at most two years from
            `billing_cycle_anchor`. See [Using trial periods on
            subscriptions](https://stripe.com/docs/billing/subscriptions/trials)
            to learn more.
        trial_from_plan:
          description: >-
            Indicates if a plan's `trial_period_days` should be applied to the
            subscription. Setting `trial_end` per subscription is preferred, and
            this defaults to `false`. Setting this flag to `true` together with
            `trial_end` is not allowed. See [Using trial periods on
            subscriptions](https://stripe.com/docs/billing/subscriptions/trials)
            to learn more.
          type: boolean
        trial_period_days:
          description: >-
            Integer representing the number of trial period days before the
            customer is charged for the first time. This will always overwrite
            any trials that might apply via a subscribed plan. See [Using trial
            periods on
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
    GetSubscriptionsSearchRequest:
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
            $ref: '#/components/schemas/subscription'
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
    DeleteSubscriptionsSubscriptionExposedIdRequest:
      type: object
      properties:
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
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        invoice_now:
          description: >-
            Will generate a final invoice that invoices for any un-invoiced
            metered usage and new/pending proration invoice items.
          type: boolean
        prorate:
          description: >-
            Will generate a proration invoice item that credits remaining unused
            time until the subscription period end.
          type: boolean
    GetSubscriptionsSubscriptionExposedIdRequest:
      type: object
      properties: {}
    PostSubscriptionsSubscriptionExposedIdRequest:
      type: object
      properties:
        add_invoice_items:
          description: >-
            A list of prices and quantities that will generate invoice items
            appended to the next invoice for this subscription. You may pass up
            to 20 items.
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
            A non-negative decimal between 0 and 100, with at most two decimal
            places. This represents the percentage of the subscription invoice
            total that will be transferred to the application owner's Stripe
            account. The request must be made by a platform account on a
            connected account in order to set an application fee percentage. For
            more information, see the application fees
            [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
          type: number
        automatic_tax:
          description: >-
            Automatic tax settings for this subscription. We recommend you only
            include this parameter when the existing value is being changed.
          properties:
            enabled:
              type: boolean
          required:
            - enabled
          title: automatic_tax_config
          type: object
        billing_cycle_anchor:
          description: >-
            Either `now` or `unchanged`. Setting the value to `now` resets the
            subscription's billing cycle anchor to the current time (in UTC).
            For more information, see the billing cycle
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
            subscription advanced to a new billing period. Pass an empty string
            to remove previously-defined thresholds.
        cancel_at:
          anyOf:
            - format: unix-time
              type: integer
            - enum:
                - ''
              type: string
          description: >-
            A timestamp at which the subscription should cancel. If set to a
            date before the current period ends, this will cause a proration if
            prorations have been enabled using `proration_behavior`. If set
            during a future period, this will always cause a proration for that
            period.
        cancel_at_period_end:
          description: >-
            Boolean indicating whether this subscription should cancel at the
            end of the current period.
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
            Either `charge_automatically`, or `send_invoice`. When charging
            automatically, Stripe will attempt to pay this subscription at the
            end of the cycle using the default source attached to the customer.
            When sending an invoice, Stripe will email your customer an invoice
            with payment instructions and mark the subscription as `active`.
            Defaults to `charge_automatically`.
          enum:
            - charge_automatically
            - send_invoice
          type: string
        coupon:
          description: >-
            The ID of the coupon to apply to this subscription. A coupon applied
            to a subscription will only affect invoices created for that
            particular subscription.
          maxLength: 5000
          type: string
        days_until_due:
          description: >-
            Number of days a customer has to pay invoices generated by this
            subscription. Valid only for subscriptions where `collection_method`
            is set to `send_invoice`.
          type: integer
        default_payment_method:
          description: >-
            ID of the default payment method for the subscription. It must
            belong to the customer associated with the subscription. This takes
            precedence over `default_source`. If neither are set, invoices will
            use the customer's
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
            ID of the default payment source for the subscription. It must
            belong to the customer associated with the subscription and be in a
            chargeable state. If `default_payment_method` is also set,
            `default_payment_method` will take precedence. If neither are set,
            invoices will use the customer's
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
            The tax rates that will apply to any subscription item that does not
            have `tax_rates` set. Invoices created will have their
            `default_tax_rates` populated from the subscription. Pass an empty
            string to remove previously-defined tax rates.
        description:
          anyOf:
            - maxLength: 500
              type: string
            - enum:
                - ''
              type: string
          description: >-
            The subscription's description, meant to be displayable to the
            customer. Use this field to optionally store an explanation of the
            subscription for rendering in Stripe surfaces and certain local
            payment methods UIs.
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        items:
          description: 'A list of up to 20 subscription items, each with an attached price.'
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
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
            Individual keys can be unset by posting an empty value to them. All
            keys can be unset by posting an empty value to `metadata`.
        off_session:
          description: >-
            Indicates if a customer is on or off-session while an invoice
            payment is attempted.
          type: boolean
        on_behalf_of:
          anyOf:
            - type: string
            - enum:
                - ''
              type: string
          description: >-
            The account on behalf of which to charge, for each of the
            subscription's invoices.
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
            If specified, payment collection for this subscription will be
            paused.
        payment_behavior:
          description: >-
            Use `allow_incomplete` to transition the subscription to
            `status=past_due` if a payment is required but cannot be paid. This
            allows you to manage scenarios where additional user actions are
            needed to pay a subscription's invoice. For example, SCA regulation
            may require 3DS authentication to complete payment. See the [SCA
            Migration
            Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication)
            for Billing to learn more. This is the default behavior.


            Use `default_incomplete` to transition the subscription to
            `status=past_due` when payment is required and await explicit
            confirmation of the invoice's payment intent. This allows simpler
            management of scenarios where additional user actions are needed to
            pay a subscription’s invoice. Such as failed payments, [SCA
            regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication),
            or collecting a mandate for a bank debit payment method.


            Use `pending_if_incomplete` to update the subscription using
            [pending
            updates](https://stripe.com/docs/billing/subscriptions/pending-updates).
            When you use `pending_if_incomplete` you can only pass the
            parameters [supported by pending
            updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).


            Use `error_if_incomplete` if you want Stripe to return an HTTP 402
            status code if a subscription's invoice cannot be paid. For example,
            if a payment method requires 3DS authentication due to SCA
            regulation and further user action is needed, this parameter does
            not update the subscription and returns an error instead. This was
            the default behavior for API versions prior to 2019-03-14. See the
            [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn
            more.
          enum:
            - allow_incomplete
            - default_incomplete
            - error_if_incomplete
            - pending_if_incomplete
          type: string
        payment_settings:
          description: Payment settings to pass to invoices created by the subscription.
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
            Specifies an interval for how often to bill for any pending invoice
            items. It is analogous to calling [Create an
            invoice](https://stripe.com/docs/api#create_invoice) for the given
            subscription at the specified interval.
        promotion_code:
          description: >-
            The promotion code to apply to this subscription. A promotion code
            applied to a subscription will only affect invoices created for that
            particular subscription.
          maxLength: 5000
          type: string
        proration_behavior:
          description: >-
            Determines how to handle
            [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations)
            when the billing cycle changes (e.g., when switching plans,
            resetting `billing_cycle_anchor=now`, or starting a trial), or if an
            item's `quantity` changes. The default value is `create_prorations`.
          enum:
            - always_invoice
            - create_prorations
            - none
          type: string
        proration_date:
          description: >-
            If set, the proration will be calculated as though the subscription
            was updated at the given time. This can be used to apply exactly the
            same proration that was previewed with [upcoming
            invoice](https://stripe.com/docs/api#upcoming_invoice) endpoint. It
            can also be used to implement custom proration logic, such as
            prorating by day instead of by second, by providing the time that
            you wish to use for proration calculations.
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
            If specified, the funds from the subscription's invoices will be
            transferred to the destination and the ID of the resulting transfers
            will be found on the resulting charges. This will be unset if you
            POST an empty value.
        trial_end:
          anyOf:
            - enum:
                - now
              maxLength: 5000
              type: string
            - format: unix-time
              type: integer
          description: >-
            Unix timestamp representing the end of the trial period the customer
            will get before being charged for the first time. This will always
            overwrite any trials that might apply via a subscribed plan. If set,
            trial_end will override the default trial period of the plan the
            customer is being subscribed to. The special value `now` can be
            provided to end the customer's trial immediately. Can be at most two
            years from `billing_cycle_anchor`.
        trial_from_plan:
          description: >-
            Indicates if a plan's `trial_period_days` should be applied to the
            subscription. Setting `trial_end` per subscription is preferred, and
            this defaults to `false`. Setting this flag to `true` together with
            `trial_end` is not allowed. See [Using trial periods on
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
    DeleteSubscriptionsSubscriptionExposedIdDiscountRequest:
      type: object
      properties: {}
    PostSubscriptionsSubscriptionResumeRequest:
      type: object
      properties:
        billing_cycle_anchor:
          description: >-
            Either `now` or `unchanged`. Setting the value to `now` resets the
            subscription's billing cycle anchor to the current time (in UTC).
            Setting the value to `unchanged` advances the subscription's billing
            cycle anchor to the period that surrounds the current time. For more
            information, see the billing cycle
            [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
          enum:
            - now
            - unchanged
          maxLength: 5000
          type: string
        expand:
          description: Specifies which fields in the response should be expanded.
          items:
            maxLength: 5000
            type: string
          type: array
        proration_behavior:
          description: >-
            Determines how to handle
            [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations)
            when the billing cycle changes (e.g., when switching plans,
            resetting `billing_cycle_anchor=now`, or starting a trial), or if an
            item's `quantity` changes. The default value is `create_prorations`.
          enum:
            - always_invoice
            - create_prorations
            - none
          type: string
        proration_date:
          description: >-
            If set, the proration will be calculated as though the subscription
            was resumed at the given time. This can be used to apply exactly the
            same proration that was previewed with [upcoming
            invoice](https://stripe.com/docs/api#retrieve_customer_invoice)
            endpoint.
          format: unix-time
          type: integer
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