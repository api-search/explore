---
openapi: 3.0.0
info:
  title: Stripe Billing API
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
  /v1/billing_portal/configurations:
    get:
      description: >-
        <p>Returns a list of configurations that describe the functionality of
        the customer portal.</p>
      operationId: GetBillingPortalConfigurations
      parameters:
        - description: >-
            Only return configurations that are active or inactive (e.g., pass
            `true` to only list active configurations).
          in: query
          name: active
          required: false
          schema:
            type: boolean
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
            Only return the default or non-default configurations (e.g., pass
            `true` to only list the default configuration).
          in: query
          name: is_default
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
                      $ref: '#/components/schemas/billing_portal.configuration'
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
                    pattern: ^/v1/billing_portal/configurations
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: PortalPublicResourceConfigurationList
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
      summary: Retrieve Billing Portal Configurations
      tags:
        - Billing
        - Portals
        - Configurations
    post:
      description: >-
        <p>Creates a configuration that describes the functionality and behavior
        of a PortalSession</p>
      operationId: PostBillingPortalConfigurations
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              business_profile:
                explode: true
                style: deepObject
              default_return_url:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              features:
                explode: true
                style: deepObject
              login_page:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                business_profile:
                  description: The business information shown to customers in the portal.
                  properties:
                    headline:
                      anyOf:
                        - maxLength: 60
                          type: string
                        - enum:
                            - ''
                          type: string
                    privacy_policy_url:
                      type: string
                    terms_of_service_url:
                      type: string
                  title: business_profile_create_param
                  type: object
                default_return_url:
                  anyOf:
                    - type: string
                    - enum:
                        - ''
                      type: string
                  description: >-
                    The default URL to redirect customers to when they click on
                    the portal's link to return to your website. This can be
                    [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url)
                    when creating the session.
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                features:
                  description: Information about the features available in the portal.
                  properties:
                    customer_update:
                      properties:
                        allowed_updates:
                          anyOf:
                            - items:
                                enum:
                                  - address
                                  - email
                                  - name
                                  - phone
                                  - shipping
                                  - tax_id
                                type: string
                              type: array
                            - enum:
                                - ''
                              type: string
                        enabled:
                          type: boolean
                      required:
                        - enabled
                      title: customer_update_creation_param
                      type: object
                    invoice_history:
                      properties:
                        enabled:
                          type: boolean
                      required:
                        - enabled
                      title: invoice_list_param
                      type: object
                    payment_method_update:
                      properties:
                        enabled:
                          type: boolean
                      required:
                        - enabled
                      title: payment_method_update_param
                      type: object
                    subscription_cancel:
                      properties:
                        cancellation_reason:
                          properties:
                            enabled:
                              type: boolean
                            options:
                              anyOf:
                                - items:
                                    enum:
                                      - customer_service
                                      - low_quality
                                      - missing_features
                                      - other
                                      - switched_service
                                      - too_complex
                                      - too_expensive
                                      - unused
                                    type: string
                                  type: array
                                - enum:
                                    - ''
                                  type: string
                          required:
                            - enabled
                            - options
                          title: subscription_cancellation_reason_creation_param
                          type: object
                        enabled:
                          type: boolean
                        mode:
                          enum:
                            - at_period_end
                            - immediately
                          type: string
                        proration_behavior:
                          enum:
                            - always_invoice
                            - create_prorations
                            - none
                          type: string
                      required:
                        - enabled
                      title: subscription_cancel_creation_param
                      type: object
                    subscription_pause:
                      properties:
                        enabled:
                          type: boolean
                      title: subscription_pause_param
                      type: object
                    subscription_update:
                      properties:
                        default_allowed_updates:
                          anyOf:
                            - items:
                                enum:
                                  - price
                                  - promotion_code
                                  - quantity
                                type: string
                              type: array
                            - enum:
                                - ''
                              type: string
                        enabled:
                          type: boolean
                        products:
                          anyOf:
                            - items:
                                properties:
                                  prices:
                                    items:
                                      maxLength: 5000
                                      type: string
                                    type: array
                                  product:
                                    maxLength: 5000
                                    type: string
                                required:
                                  - prices
                                  - product
                                title: subscription_update_product_param
                                type: object
                              type: array
                            - enum:
                                - ''
                              type: string
                        proration_behavior:
                          enum:
                            - always_invoice
                            - create_prorations
                            - none
                          type: string
                      required:
                        - default_allowed_updates
                        - enabled
                        - products
                      title: subscription_update_creation_param
                      type: object
                  title: features_creation_param
                  type: object
                login_page:
                  description: >-
                    The hosted login page for this configuration. Learn more
                    about the portal login page in our [integration
                    docs](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal#share).
                  properties:
                    enabled:
                      type: boolean
                  required:
                    - enabled
                  title: login_page_create_param
                  type: object
                metadata:
                  additionalProperties:
                    type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
              required:
                - business_profile
                - features
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/billing_portal.configuration'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Billing Portal Configuration
      tags:
        - Billing
        - Portals
        - Configurations
  '/v1/billing_portal/configurations/{configuration}':
    get:
      description: >-
        <p>Retrieves a configuration that describes the functionality of the
        customer portal.</p>
      operationId: GetBillingPortalConfigurationsConfiguration
      parameters:
        - in: path
          name: configuration
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
                $ref: '#/components/schemas/billing_portal.configuration'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Billing Portal Configuration
      tags:
        - Billing
        - Portals
        - Configurations
    post:
      description: >-
        <p>Updates a configuration that describes the functionality of the
        customer portal.</p>
      operationId: PostBillingPortalConfigurationsConfiguration
      parameters:
        - in: path
          name: configuration
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              business_profile:
                explode: true
                style: deepObject
              default_return_url:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              features:
                explode: true
                style: deepObject
              login_page:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                active:
                  description: >-
                    Whether the configuration is active and can be used to
                    create portal sessions.
                  type: boolean
                business_profile:
                  description: The business information shown to customers in the portal.
                  properties:
                    headline:
                      anyOf:
                        - maxLength: 60
                          type: string
                        - enum:
                            - ''
                          type: string
                    privacy_policy_url:
                      anyOf:
                        - type: string
                        - enum:
                            - ''
                          type: string
                    terms_of_service_url:
                      anyOf:
                        - type: string
                        - enum:
                            - ''
                          type: string
                  title: business_profile_update_param
                  type: object
                default_return_url:
                  anyOf:
                    - type: string
                    - enum:
                        - ''
                      type: string
                  description: >-
                    The default URL to redirect customers to when they click on
                    the portal's link to return to your website. This can be
                    [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url)
                    when creating the session.
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                features:
                  description: Information about the features available in the portal.
                  properties:
                    customer_update:
                      properties:
                        allowed_updates:
                          anyOf:
                            - items:
                                enum:
                                  - address
                                  - email
                                  - name
                                  - phone
                                  - shipping
                                  - tax_id
                                type: string
                              type: array
                            - enum:
                                - ''
                              type: string
                        enabled:
                          type: boolean
                      title: customer_update_updating_param
                      type: object
                    invoice_history:
                      properties:
                        enabled:
                          type: boolean
                      required:
                        - enabled
                      title: invoice_list_param
                      type: object
                    payment_method_update:
                      properties:
                        enabled:
                          type: boolean
                      required:
                        - enabled
                      title: payment_method_update_param
                      type: object
                    subscription_cancel:
                      properties:
                        cancellation_reason:
                          properties:
                            enabled:
                              type: boolean
                            options:
                              anyOf:
                                - items:
                                    enum:
                                      - customer_service
                                      - low_quality
                                      - missing_features
                                      - other
                                      - switched_service
                                      - too_complex
                                      - too_expensive
                                      - unused
                                    type: string
                                  type: array
                                - enum:
                                    - ''
                                  type: string
                          required:
                            - enabled
                          title: subscription_cancellation_reason_updating_param
                          type: object
                        enabled:
                          type: boolean
                        mode:
                          enum:
                            - at_period_end
                            - immediately
                          type: string
                        proration_behavior:
                          enum:
                            - always_invoice
                            - create_prorations
                            - none
                          type: string
                      title: subscription_cancel_updating_param
                      type: object
                    subscription_pause:
                      properties:
                        enabled:
                          type: boolean
                      title: subscription_pause_param
                      type: object
                    subscription_update:
                      properties:
                        default_allowed_updates:
                          anyOf:
                            - items:
                                enum:
                                  - price
                                  - promotion_code
                                  - quantity
                                type: string
                              type: array
                            - enum:
                                - ''
                              type: string
                        enabled:
                          type: boolean
                        products:
                          anyOf:
                            - items:
                                properties:
                                  prices:
                                    items:
                                      maxLength: 5000
                                      type: string
                                    type: array
                                  product:
                                    maxLength: 5000
                                    type: string
                                required:
                                  - prices
                                  - product
                                title: subscription_update_product_param
                                type: object
                              type: array
                            - enum:
                                - ''
                              type: string
                        proration_behavior:
                          enum:
                            - always_invoice
                            - create_prorations
                            - none
                          type: string
                      title: subscription_update_updating_param
                      type: object
                  title: features_updating_param
                  type: object
                login_page:
                  description: >-
                    The hosted login page for this configuration. Learn more
                    about the portal login page in our [integration
                    docs](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal#share).
                  properties:
                    enabled:
                      type: boolean
                  required:
                    - enabled
                  title: login_page_update_param
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
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/billing_portal.configuration'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Billing Portal Configuration
      tags:
        - Billing
        - Portals
        - Configurations
  /v1/billing_portal/sessions:
    post:
      description: <p>Creates a session of the customer portal.</p>
      operationId: PostBillingPortalSessions
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
              flow_data:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                configuration:
                  description: >-
                    The ID of an existing
                    [configuration](https://stripe.com/docs/api/customer_portal/configuration)
                    to use for this session, describing its functionality and
                    features. If not specified, the session uses the default
                    configuration.
                  maxLength: 5000
                  type: string
                customer:
                  description: The ID of an existing customer.
                  maxLength: 5000
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                flow_data:
                  description: >-
                    Information about a specific flow for the customer to go
                    through. See the
                    [docs](https://stripe.com/docs/customer-management/portal-deep-links)
                    to learn more about using customer portal deep links and
                    flows.
                  properties:
                    after_completion:
                      properties:
                        hosted_confirmation:
                          properties:
                            custom_message:
                              maxLength: 500
                              type: string
                          title: after_completion_hosted_confirmation_param
                          type: object
                        redirect:
                          properties:
                            return_url:
                              type: string
                          required:
                            - return_url
                          title: after_completion_redirect_param
                          type: object
                        type:
                          enum:
                            - hosted_confirmation
                            - portal_homepage
                            - redirect
                          type: string
                      required:
                        - type
                      title: flow_data_after_completion_param
                      type: object
                    subscription_cancel:
                      properties:
                        retention:
                          properties:
                            coupon_offer:
                              properties:
                                coupon:
                                  maxLength: 5000
                                  type: string
                              required:
                                - coupon
                              title: coupon_offer_param
                              type: object
                            type:
                              enum:
                                - coupon_offer
                              type: string
                          required:
                            - coupon_offer
                            - type
                          title: retention_param
                          type: object
                        subscription:
                          maxLength: 5000
                          type: string
                      required:
                        - subscription
                      title: flow_data_subscription_cancel_param
                      type: object
                    subscription_update:
                      properties:
                        subscription:
                          maxLength: 5000
                          type: string
                      required:
                        - subscription
                      title: flow_data_subscription_update_param
                      type: object
                    subscription_update_confirm:
                      properties:
                        discounts:
                          items:
                            properties:
                              coupon:
                                maxLength: 5000
                                type: string
                              promotion_code:
                                maxLength: 5000
                                type: string
                            title: subscription_update_confirm_discount_params
                            type: object
                          type: array
                        items:
                          items:
                            properties:
                              id:
                                maxLength: 5000
                                type: string
                              price:
                                maxLength: 5000
                                type: string
                              quantity:
                                type: integer
                            required:
                              - id
                            title: subscription_update_confirm_item_params
                            type: object
                          type: array
                        subscription:
                          maxLength: 5000
                          type: string
                      required:
                        - items
                        - subscription
                      title: flow_data_subscription_update_confirm_param
                      type: object
                    type:
                      enum:
                        - payment_method_update
                        - subscription_cancel
                        - subscription_update
                        - subscription_update_confirm
                      type: string
                  required:
                    - type
                  title: flow_data_param
                  type: object
                locale:
                  description: >-
                    The IETF language tag of the locale customer portal is
                    displayed in. If blank or auto, the customer’s
                    `preferred_locales` or browser’s locale is used.
                  enum:
                    - auto
                    - bg
                    - cs
                    - da
                    - de
                    - el
                    - en
                    - en-AU
                    - en-CA
                    - en-GB
                    - en-IE
                    - en-IN
                    - en-NZ
                    - en-SG
                    - es
                    - es-419
                    - et
                    - fi
                    - fil
                    - fr
                    - fr-CA
                    - hr
                    - hu
                    - id
                    - it
                    - ja
                    - ko
                    - lt
                    - lv
                    - ms
                    - mt
                    - nb
                    - nl
                    - pl
                    - pt
                    - pt-BR
                    - ro
                    - ru
                    - sk
                    - sl
                    - sv
                    - th
                    - tr
                    - vi
                    - zh
                    - zh-HK
                    - zh-TW
                  type: string
                on_behalf_of:
                  description: >-
                    The `on_behalf_of` account to use for this session. When
                    specified, only subscriptions and invoices with this
                    `on_behalf_of` account appear in the portal. For more
                    information, see the
                    [docs](https://stripe.com/docs/connect/separate-charges-and-transfers#on-behalf-of).
                    Use the [Accounts
                    API](https://stripe.com/docs/api/accounts/object#account_object-settings-branding)
                    to modify the `on_behalf_of` account's branding settings,
                    which the portal displays.
                  type: string
                return_url:
                  description: >-
                    The default URL to redirect customers to when they click on
                    the portal's link to return to your website.
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
                $ref: '#/components/schemas/billing_portal.session'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Billing Portal Session
      tags:
        - Billing
        - Portals
        - Sessions
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
    billing_portal.configuration:
      description: >-
        A portal configuration describes the functionality and behavior of a
        portal session.
      properties:
        active:
          description: >-
            Whether the configuration is active and can be used to create portal
            sessions.
          type: boolean
        application:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/application'
            - $ref: '#/components/schemas/deleted_application'
          description: ID of the Connect Application that created the configuration.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/application'
              - $ref: '#/components/schemas/deleted_application'
        business_profile:
          $ref: '#/components/schemas/portal_business_profile'
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        default_return_url:
          description: >-
            The default URL to redirect customers to when they click on the
            portal's link to return to your website. This can be
            [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url)
            when creating the session.
          maxLength: 5000
          nullable: true
          type: string
        features:
          $ref: '#/components/schemas/portal_features'
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        is_default:
          description: >-
            Whether the configuration is the default. If `true`, this
            configuration can be managed in the Dashboard and portal sessions
            will use this configuration unless it is overriden when creating the
            session.
          type: boolean
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        login_page:
          $ref: '#/components/schemas/portal_login_page'
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
            - billing_portal.configuration
          type: string
        updated:
          description: >-
            Time at which the object was last updated. Measured in seconds since
            the Unix epoch.
          format: unix-time
          type: integer
      required:
        - active
        - business_profile
        - created
        - features
        - id
        - is_default
        - livemode
        - login_page
        - object
        - updated
      title: PortalConfiguration
      type: object
      x-expandableFields:
        - application
        - business_profile
        - features
        - login_page
      x-resourceId: billing_portal.configuration
    billing_portal.session:
      description: >-
        The Billing customer portal is a Stripe-hosted UI for subscription and

        billing management.


        A portal configuration describes the functionality and features that you

        want to provide to your customers through the portal.


        A portal session describes the instantiation of the customer portal for

        a particular customer. By visiting the session's URL, the customer

        can manage their subscriptions and billing details. For security
        reasons,

        sessions are short-lived and will expire if the customer does not visit
        the URL.

        Create sessions on-demand when customers intend to manage their
        subscriptions

        and billing details.


        Learn more in the [integration
        guide](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal).
      properties:
        configuration:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/billing_portal.configuration'
          description: >-
            The configuration used by this session, describing the features
            available.
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/billing_portal.configuration'
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        customer:
          description: The ID of the customer for this session.
          maxLength: 5000
          type: string
        flow:
          anyOf:
            - $ref: '#/components/schemas/portal_flows_flow'
          description: >-
            Information about a specific flow for the customer to go through.
            See the
            [docs](https://stripe.com/docs/customer-management/portal-deep-links)
            to learn more about using customer portal deep links and flows.
          nullable: true
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        locale:
          description: >-
            The IETF language tag of the locale Customer Portal is displayed in.
            If blank or auto, the customer’s `preferred_locales` or browser’s
            locale is used.
          enum:
            - auto
            - bg
            - cs
            - da
            - de
            - el
            - en
            - en-AU
            - en-CA
            - en-GB
            - en-IE
            - en-IN
            - en-NZ
            - en-SG
            - es
            - es-419
            - et
            - fi
            - fil
            - fr
            - fr-CA
            - hr
            - hu
            - id
            - it
            - ja
            - ko
            - lt
            - lv
            - ms
            - mt
            - nb
            - nl
            - pl
            - pt
            - pt-BR
            - ro
            - ru
            - sk
            - sl
            - sv
            - th
            - tr
            - vi
            - zh
            - zh-HK
            - zh-TW
          nullable: true
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - billing_portal.session
          type: string
        on_behalf_of:
          description: >-
            The account for which the session was created on behalf of. When
            specified, only subscriptions and invoices with this `on_behalf_of`
            account appear in the portal. For more information, see the
            [docs](https://stripe.com/docs/connect/separate-charges-and-transfers#on-behalf-of).
            Use the [Accounts
            API](https://stripe.com/docs/api/accounts/object#account_object-settings-branding)
            to modify the `on_behalf_of` account's branding settings, which the
            portal displays.
          maxLength: 5000
          nullable: true
          type: string
        return_url:
          description: >-
            The URL to redirect customers to when they click on the portal's
            link to return to your website.
          maxLength: 5000
          nullable: true
          type: string
        url:
          description: >-
            The short-lived URL of the session that gives customers access to
            the customer portal.
          maxLength: 5000
          type: string
      required:
        - configuration
        - created
        - customer
        - id
        - livemode
        - object
        - url
      title: PortalSession
      type: object
      x-expandableFields:
        - configuration
        - flow
      x-resourceId: billing_portal.session
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
  - name: Billing
    description: Needs a description.
  - name: Portals
    description: Needs a description.
  - name: Configurations
    description: Needs a description.
  - name: Session
    description: Needs a description.
---