---
openapi: 3.0.0
info:
  title: Stripe Webhook API
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
  /v1/webhook_endpoints:
    get:
      description: <p>Returns a list of your webhook endpoints.</p>
      operationId: GetWebhookEndpoints
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
              $ref: '#/components/schemas/GetWebhookEndpointsRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                x-expandableFields:
                  - data
                $ref: '#/components/schemas/NotificationWebhookEndpointList'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>A webhook endpoint must have a <code>url</code> and a list of
        <code>enabled_events</code>. You may optionally specify the Boolean
        <code>connect</code> parameter. If set to true, then a Connect webhook
        endpoint that notifies the specified <code>url</code> about events from
        all connected accounts is created; otherwise an account webhook endpoint
        that notifies the specified <code>url</code> only about events from your
        account is created. You can also create webhook endpoints in the <a
        href="https://dashboard.stripe.com/account/webhooks">webhooks
        settings</a> section of the Dashboard.</p>
      operationId: PostWebhookEndpoints
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              description:
                explode: true
                style: deepObject
              enabled_events:
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
              $ref: '#/components/schemas/PostWebhookEndpointsRequest'
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/webhook_endpoint'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
  '/v1/webhook_endpoints/{webhook_endpoint}':
    delete:
      description: >-
        <p>You can also delete webhook endpoints via the <a
        href="https://dashboard.stripe.com/account/webhooks">webhook endpoint
        management</a> page of the Stripe dashboard.</p>
      operationId: DeleteWebhookEndpointsWebhookEndpoint
      parameters:
        - in: path
          name: webhook_endpoint
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
                #/components/schemas/DeleteWebhookEndpointsWebhookEndpointRequest
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/deleted_webhook_endpoint'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    get:
      description: <p>Retrieves the webhook endpoint with the given ID.</p>
      operationId: GetWebhookEndpointsWebhookEndpoint
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
          name: webhook_endpoint
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
              $ref: '#/components/schemas/GetWebhookEndpointsWebhookEndpointRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/webhook_endpoint'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
    post:
      description: >-
        <p>Updates the webhook endpoint. You may edit the <code>url</code>, the
        list of <code>enabled_events</code>, and the status of your
        endpoint.</p>
      operationId: PostWebhookEndpointsWebhookEndpoint
      parameters:
        - in: path
          name: webhook_endpoint
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              description:
                explode: true
                style: deepObject
              enabled_events:
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
              $ref: '#/components/schemas/PostWebhookEndpointsWebhookEndpointRequest'
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/webhook_endpoint'
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
    webhook_endpoint:
      description: >-
        You can configure [webhook endpoints](https://stripe.com/docs/webhooks/)
        via the API to be

        notified about events that happen in your Stripe account or connected

        accounts.


        Most users configure webhooks from [the
        dashboard](https://dashboard.stripe.com/webhooks), which provides a user
        interface for registering and testing your webhook endpoints.


        Related guide: [Setting up
        webhooks](https://stripe.com/docs/webhooks/configure)
      properties:
        api_version:
          description: The API version events are rendered as for this webhook endpoint.
          maxLength: 5000
          nullable: true
          type: string
        application:
          description: The ID of the associated Connect application.
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
          description: An optional description of what the webhook is used for.
          maxLength: 5000
          nullable: true
          type: string
        enabled_events:
          description: >-
            The list of events to enable for this endpoint. `['*']` indicates
            that all events are enabled, except those that require explicit
            selection.
          items:
            maxLength: 5000
            type: string
          type: array
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
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - webhook_endpoint
          type: string
        secret:
          description: >-
            The endpoint's secret, used to generate [webhook
            signatures](https://stripe.com/docs/webhooks/signatures). Only
            returned at creation.
          maxLength: 5000
          type: string
        status:
          description: The status of the webhook. It can be `enabled` or `disabled`.
          maxLength: 5000
          type: string
        url:
          description: The URL of the webhook endpoint.
          maxLength: 5000
          type: string
      required:
        - created
        - enabled_events
        - id
        - livemode
        - metadata
        - object
        - status
        - url
      title: NotificationWebhookEndpoint
      type: object
      x-expandableFields: []
      x-resourceId: webhook_endpoint
    deleted_webhook_endpoint:
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
            - webhook_endpoint
          type: string
      required:
        - deleted
        - id
        - object
      title: NotificationWebhookEndpointDeleted
      type: object
      x-expandableFields: []
      x-resourceId: deleted_webhook_endpoint
    GetWebhookEndpointsRequest:
      type: object
      properties: {}
    NotificationWebhookEndpointList:
      type: object
      required:
        - data
        - has_more
        - object
        - url
      properties:
        data:
          items:
            $ref: '#/components/schemas/webhook_endpoint'
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
          pattern: ^/v1/webhook_endpoints
          type: string
    PostWebhookEndpointsRequest:
      type: object
      required:
        - enabled_events
        - url
      properties:
        api_version:
          description: >-
            Events sent to this endpoint will be generated with this Stripe
            Version instead of your account's default Stripe Version.
          enum:
            - '2011-01-01'
            - '2011-06-21'
            - '2011-06-28'
            - '2011-08-01'
            - '2011-09-15'
            - '2011-11-17'
            - '2012-02-23'
            - '2012-03-25'
            - '2012-06-18'
            - '2012-06-28'
            - '2012-07-09'
            - '2012-09-24'
            - '2012-10-26'
            - '2012-11-07'
            - '2013-02-11'
            - '2013-02-13'
            - '2013-07-05'
            - '2013-08-12'
            - '2013-08-13'
            - '2013-10-29'
            - '2013-12-03'
            - '2014-01-31'
            - '2014-03-13'
            - '2014-03-28'
            - '2014-05-19'
            - '2014-06-13'
            - '2014-06-17'
            - '2014-07-22'
            - '2014-07-26'
            - '2014-08-04'
            - '2014-08-20'
            - '2014-09-08'
            - '2014-10-07'
            - '2014-11-05'
            - '2014-11-20'
            - '2014-12-08'
            - '2014-12-17'
            - '2014-12-22'
            - '2015-01-11'
            - '2015-01-26'
            - '2015-02-10'
            - '2015-02-16'
            - '2015-02-18'
            - '2015-03-24'
            - '2015-04-07'
            - '2015-06-15'
            - '2015-07-07'
            - '2015-07-13'
            - '2015-07-28'
            - '2015-08-07'
            - '2015-08-19'
            - '2015-09-03'
            - '2015-09-08'
            - '2015-09-23'
            - '2015-10-01'
            - '2015-10-12'
            - '2015-10-16'
            - '2016-02-03'
            - '2016-02-19'
            - '2016-02-22'
            - '2016-02-23'
            - '2016-02-29'
            - '2016-03-07'
            - '2016-06-15'
            - '2016-07-06'
            - '2016-10-19'
            - '2017-01-27'
            - '2017-02-14'
            - '2017-04-06'
            - '2017-05-25'
            - '2017-06-05'
            - '2017-08-15'
            - '2017-12-14'
            - '2018-01-23'
            - '2018-02-05'
            - '2018-02-06'
            - '2018-02-28'
            - '2018-05-21'
            - '2018-07-27'
            - '2018-08-23'
            - '2018-09-06'
            - '2018-09-24'
            - '2018-10-31'
            - '2018-11-08'
            - '2019-02-11'
            - '2019-02-19'
            - '2019-03-14'
            - '2019-05-16'
            - '2019-08-14'
            - '2019-09-09'
            - '2019-10-08'
            - '2019-10-17'
            - '2019-11-05'
            - '2019-12-03'
            - '2020-03-02'
            - '2020-08-27'
            - '2022-08-01'
            - '2022-11-15'
            - '2023-08-16'
            - '2023-10-16'
          maxLength: 5000
          type: string
          x-stripeBypassValidation: true
        connect:
          description: >-
            Whether this endpoint should receive events from connected accounts
            (`true`), or from your account (`false`). Defaults to `false`.
          type: boolean
        description:
          anyOf:
            - maxLength: 5000
              type: string
            - enum:
                - ''
              type: string
          description: An optional description of what the webhook is used for.
        enabled_events:
          description: >-
            The list of events to enable for this endpoint. You may specify
            `['*']` to enable all events, except those that require explicit
            selection.
          items:
            enum:
              - '*'
              - account.application.authorized
              - account.application.deauthorized
              - account.external_account.created
              - account.external_account.deleted
              - account.external_account.updated
              - account.updated
              - application_fee.created
              - application_fee.refund.updated
              - application_fee.refunded
              - balance.available
              - billing_portal.configuration.created
              - billing_portal.configuration.updated
              - billing_portal.session.created
              - capability.updated
              - cash_balance.funds_available
              - charge.captured
              - charge.dispute.closed
              - charge.dispute.created
              - charge.dispute.funds_reinstated
              - charge.dispute.funds_withdrawn
              - charge.dispute.updated
              - charge.expired
              - charge.failed
              - charge.pending
              - charge.refund.updated
              - charge.refunded
              - charge.succeeded
              - charge.updated
              - checkout.session.async_payment_failed
              - checkout.session.async_payment_succeeded
              - checkout.session.completed
              - checkout.session.expired
              - climate.order.canceled
              - climate.order.created
              - climate.order.delayed
              - climate.order.delivered
              - climate.order.product_substituted
              - climate.product.created
              - climate.product.pricing_updated
              - coupon.created
              - coupon.deleted
              - coupon.updated
              - credit_note.created
              - credit_note.updated
              - credit_note.voided
              - customer.created
              - customer.deleted
              - customer.discount.created
              - customer.discount.deleted
              - customer.discount.updated
              - customer.source.created
              - customer.source.deleted
              - customer.source.expiring
              - customer.source.updated
              - customer.subscription.created
              - customer.subscription.deleted
              - customer.subscription.paused
              - customer.subscription.pending_update_applied
              - customer.subscription.pending_update_expired
              - customer.subscription.resumed
              - customer.subscription.trial_will_end
              - customer.subscription.updated
              - customer.tax_id.created
              - customer.tax_id.deleted
              - customer.tax_id.updated
              - customer.updated
              - customer_cash_balance_transaction.created
              - file.created
              - financial_connections.account.created
              - financial_connections.account.deactivated
              - financial_connections.account.disconnected
              - financial_connections.account.reactivated
              - financial_connections.account.refreshed_balance
              - financial_connections.account.refreshed_transactions
              - identity.verification_session.canceled
              - identity.verification_session.created
              - identity.verification_session.processing
              - identity.verification_session.redacted
              - identity.verification_session.requires_input
              - identity.verification_session.verified
              - invoice.created
              - invoice.deleted
              - invoice.finalization_failed
              - invoice.finalized
              - invoice.marked_uncollectible
              - invoice.paid
              - invoice.payment_action_required
              - invoice.payment_failed
              - invoice.payment_succeeded
              - invoice.sent
              - invoice.upcoming
              - invoice.updated
              - invoice.voided
              - invoiceitem.created
              - invoiceitem.deleted
              - issuing_authorization.created
              - issuing_authorization.request
              - issuing_authorization.updated
              - issuing_card.created
              - issuing_card.updated
              - issuing_cardholder.created
              - issuing_cardholder.updated
              - issuing_dispute.closed
              - issuing_dispute.created
              - issuing_dispute.funds_reinstated
              - issuing_dispute.submitted
              - issuing_dispute.updated
              - issuing_token.created
              - issuing_token.updated
              - issuing_transaction.created
              - issuing_transaction.updated
              - mandate.updated
              - payment_intent.amount_capturable_updated
              - payment_intent.canceled
              - payment_intent.created
              - payment_intent.partially_funded
              - payment_intent.payment_failed
              - payment_intent.processing
              - payment_intent.requires_action
              - payment_intent.succeeded
              - payment_link.created
              - payment_link.updated
              - payment_method.attached
              - payment_method.automatically_updated
              - payment_method.detached
              - payment_method.updated
              - payout.canceled
              - payout.created
              - payout.failed
              - payout.paid
              - payout.reconciliation_completed
              - payout.updated
              - person.created
              - person.deleted
              - person.updated
              - plan.created
              - plan.deleted
              - plan.updated
              - price.created
              - price.deleted
              - price.updated
              - product.created
              - product.deleted
              - product.updated
              - promotion_code.created
              - promotion_code.updated
              - quote.accepted
              - quote.canceled
              - quote.created
              - quote.finalized
              - radar.early_fraud_warning.created
              - radar.early_fraud_warning.updated
              - refund.created
              - refund.updated
              - reporting.report_run.failed
              - reporting.report_run.succeeded
              - reporting.report_type.updated
              - review.closed
              - review.opened
              - setup_intent.canceled
              - setup_intent.created
              - setup_intent.requires_action
              - setup_intent.setup_failed
              - setup_intent.succeeded
              - sigma.scheduled_query_run.created
              - source.canceled
              - source.chargeable
              - source.failed
              - source.mandate_notification
              - source.refund_attributes_required
              - source.transaction.created
              - source.transaction.updated
              - subscription_schedule.aborted
              - subscription_schedule.canceled
              - subscription_schedule.completed
              - subscription_schedule.created
              - subscription_schedule.expiring
              - subscription_schedule.released
              - subscription_schedule.updated
              - tax.settings.updated
              - tax_rate.created
              - tax_rate.updated
              - terminal.reader.action_failed
              - terminal.reader.action_succeeded
              - test_helpers.test_clock.advancing
              - test_helpers.test_clock.created
              - test_helpers.test_clock.deleted
              - test_helpers.test_clock.internal_failure
              - test_helpers.test_clock.ready
              - topup.canceled
              - topup.created
              - topup.failed
              - topup.reversed
              - topup.succeeded
              - transfer.created
              - transfer.reversed
              - transfer.updated
              - treasury.credit_reversal.created
              - treasury.credit_reversal.posted
              - treasury.debit_reversal.completed
              - treasury.debit_reversal.created
              - treasury.debit_reversal.initial_credit_granted
              - treasury.financial_account.closed
              - treasury.financial_account.created
              - treasury.financial_account.features_status_updated
              - treasury.inbound_transfer.canceled
              - treasury.inbound_transfer.created
              - treasury.inbound_transfer.failed
              - treasury.inbound_transfer.succeeded
              - treasury.outbound_payment.canceled
              - treasury.outbound_payment.created
              - treasury.outbound_payment.expected_arrival_date_updated
              - treasury.outbound_payment.failed
              - treasury.outbound_payment.posted
              - treasury.outbound_payment.returned
              - treasury.outbound_transfer.canceled
              - treasury.outbound_transfer.created
              - treasury.outbound_transfer.expected_arrival_date_updated
              - treasury.outbound_transfer.failed
              - treasury.outbound_transfer.posted
              - treasury.outbound_transfer.returned
              - treasury.received_credit.created
              - treasury.received_credit.failed
              - treasury.received_credit.succeeded
              - treasury.received_debit.created
            type: string
            x-stripeBypassValidation: true
          type: array
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
        url:
          description: The URL of the webhook endpoint.
          type: string
    DeleteWebhookEndpointsWebhookEndpointRequest:
      type: object
      properties: {}
    GetWebhookEndpointsWebhookEndpointRequest:
      type: object
      properties: {}
    PostWebhookEndpointsWebhookEndpointRequest:
      type: object
      properties:
        description:
          anyOf:
            - maxLength: 5000
              type: string
            - enum:
                - ''
              type: string
          description: An optional description of what the webhook is used for.
        disabled:
          description: Disable the webhook endpoint if set to true.
          type: boolean
        enabled_events:
          description: >-
            The list of events to enable for this endpoint. You may specify
            `['*']` to enable all events, except those that require explicit
            selection.
          items:
            enum:
              - '*'
              - account.application.authorized
              - account.application.deauthorized
              - account.external_account.created
              - account.external_account.deleted
              - account.external_account.updated
              - account.updated
              - application_fee.created
              - application_fee.refund.updated
              - application_fee.refunded
              - balance.available
              - billing_portal.configuration.created
              - billing_portal.configuration.updated
              - billing_portal.session.created
              - capability.updated
              - cash_balance.funds_available
              - charge.captured
              - charge.dispute.closed
              - charge.dispute.created
              - charge.dispute.funds_reinstated
              - charge.dispute.funds_withdrawn
              - charge.dispute.updated
              - charge.expired
              - charge.failed
              - charge.pending
              - charge.refund.updated
              - charge.refunded
              - charge.succeeded
              - charge.updated
              - checkout.session.async_payment_failed
              - checkout.session.async_payment_succeeded
              - checkout.session.completed
              - checkout.session.expired
              - climate.order.canceled
              - climate.order.created
              - climate.order.delayed
              - climate.order.delivered
              - climate.order.product_substituted
              - climate.product.created
              - climate.product.pricing_updated
              - coupon.created
              - coupon.deleted
              - coupon.updated
              - credit_note.created
              - credit_note.updated
              - credit_note.voided
              - customer.created
              - customer.deleted
              - customer.discount.created
              - customer.discount.deleted
              - customer.discount.updated
              - customer.source.created
              - customer.source.deleted
              - customer.source.expiring
              - customer.source.updated
              - customer.subscription.created
              - customer.subscription.deleted
              - customer.subscription.paused
              - customer.subscription.pending_update_applied
              - customer.subscription.pending_update_expired
              - customer.subscription.resumed
              - customer.subscription.trial_will_end
              - customer.subscription.updated
              - customer.tax_id.created
              - customer.tax_id.deleted
              - customer.tax_id.updated
              - customer.updated
              - customer_cash_balance_transaction.created
              - file.created
              - financial_connections.account.created
              - financial_connections.account.deactivated
              - financial_connections.account.disconnected
              - financial_connections.account.reactivated
              - financial_connections.account.refreshed_balance
              - financial_connections.account.refreshed_transactions
              - identity.verification_session.canceled
              - identity.verification_session.created
              - identity.verification_session.processing
              - identity.verification_session.redacted
              - identity.verification_session.requires_input
              - identity.verification_session.verified
              - invoice.created
              - invoice.deleted
              - invoice.finalization_failed
              - invoice.finalized
              - invoice.marked_uncollectible
              - invoice.paid
              - invoice.payment_action_required
              - invoice.payment_failed
              - invoice.payment_succeeded
              - invoice.sent
              - invoice.upcoming
              - invoice.updated
              - invoice.voided
              - invoiceitem.created
              - invoiceitem.deleted
              - issuing_authorization.created
              - issuing_authorization.request
              - issuing_authorization.updated
              - issuing_card.created
              - issuing_card.updated
              - issuing_cardholder.created
              - issuing_cardholder.updated
              - issuing_dispute.closed
              - issuing_dispute.created
              - issuing_dispute.funds_reinstated
              - issuing_dispute.submitted
              - issuing_dispute.updated
              - issuing_token.created
              - issuing_token.updated
              - issuing_transaction.created
              - issuing_transaction.updated
              - mandate.updated
              - payment_intent.amount_capturable_updated
              - payment_intent.canceled
              - payment_intent.created
              - payment_intent.partially_funded
              - payment_intent.payment_failed
              - payment_intent.processing
              - payment_intent.requires_action
              - payment_intent.succeeded
              - payment_link.created
              - payment_link.updated
              - payment_method.attached
              - payment_method.automatically_updated
              - payment_method.detached
              - payment_method.updated
              - payout.canceled
              - payout.created
              - payout.failed
              - payout.paid
              - payout.reconciliation_completed
              - payout.updated
              - person.created
              - person.deleted
              - person.updated
              - plan.created
              - plan.deleted
              - plan.updated
              - price.created
              - price.deleted
              - price.updated
              - product.created
              - product.deleted
              - product.updated
              - promotion_code.created
              - promotion_code.updated
              - quote.accepted
              - quote.canceled
              - quote.created
              - quote.finalized
              - radar.early_fraud_warning.created
              - radar.early_fraud_warning.updated
              - refund.created
              - refund.updated
              - reporting.report_run.failed
              - reporting.report_run.succeeded
              - reporting.report_type.updated
              - review.closed
              - review.opened
              - setup_intent.canceled
              - setup_intent.created
              - setup_intent.requires_action
              - setup_intent.setup_failed
              - setup_intent.succeeded
              - sigma.scheduled_query_run.created
              - source.canceled
              - source.chargeable
              - source.failed
              - source.mandate_notification
              - source.refund_attributes_required
              - source.transaction.created
              - source.transaction.updated
              - subscription_schedule.aborted
              - subscription_schedule.canceled
              - subscription_schedule.completed
              - subscription_schedule.created
              - subscription_schedule.expiring
              - subscription_schedule.released
              - subscription_schedule.updated
              - tax.settings.updated
              - tax_rate.created
              - tax_rate.updated
              - terminal.reader.action_failed
              - terminal.reader.action_succeeded
              - test_helpers.test_clock.advancing
              - test_helpers.test_clock.created
              - test_helpers.test_clock.deleted
              - test_helpers.test_clock.internal_failure
              - test_helpers.test_clock.ready
              - topup.canceled
              - topup.created
              - topup.failed
              - topup.reversed
              - topup.succeeded
              - transfer.created
              - transfer.reversed
              - transfer.updated
              - treasury.credit_reversal.created
              - treasury.credit_reversal.posted
              - treasury.debit_reversal.completed
              - treasury.debit_reversal.created
              - treasury.debit_reversal.initial_credit_granted
              - treasury.financial_account.closed
              - treasury.financial_account.created
              - treasury.financial_account.features_status_updated
              - treasury.inbound_transfer.canceled
              - treasury.inbound_transfer.created
              - treasury.inbound_transfer.failed
              - treasury.inbound_transfer.succeeded
              - treasury.outbound_payment.canceled
              - treasury.outbound_payment.created
              - treasury.outbound_payment.expected_arrival_date_updated
              - treasury.outbound_payment.failed
              - treasury.outbound_payment.posted
              - treasury.outbound_payment.returned
              - treasury.outbound_transfer.canceled
              - treasury.outbound_transfer.created
              - treasury.outbound_transfer.expected_arrival_date_updated
              - treasury.outbound_transfer.failed
              - treasury.outbound_transfer.posted
              - treasury.outbound_transfer.returned
              - treasury.received_credit.created
              - treasury.received_credit.failed
              - treasury.received_credit.succeeded
              - treasury.received_debit.created
            type: string
            x-stripeBypassValidation: true
          type: array
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
        url:
          description: The URL of the webhook endpoint.
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