---
openapi: 3.0.0
info:
  title: Stripe Terminal API
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
  /v1/terminal/configurations:
    get:
      description: <p>Returns a list of <code>Configuration</code> objects.</p>
      operationId: GetTerminalConfigurations
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
            if present, only return the account default or non-default
            configurations.
          in: query
          name: is_account_default
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
                      $ref: '#/components/schemas/terminal.configuration'
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
                    pattern: ^/v1/terminal/configurations
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: TerminalConfigurationConfigurationList
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
      summary: Retrieve Terminal Configurations
      tags:
        - Terminal
        - Configurations
    post:
      description: <p>Creates a new <code>Configuration</code> object.</p>
      operationId: PostTerminalConfigurations
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              bbpos_wisepos_e:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              offline:
                explode: true
                style: deepObject
              tipping:
                explode: true
                style: deepObject
              verifone_p400:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                bbpos_wisepos_e:
                  description: >-
                    An object containing device type specific settings for BBPOS
                    WisePOS E readers
                  properties:
                    splashscreen:
                      anyOf:
                        - type: string
                        - enum:
                            - ''
                          type: string
                  title: bbpos_wise_pose
                  type: object
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                offline:
                  anyOf:
                    - properties:
                        enabled:
                          type: boolean
                      required:
                        - enabled
                      title: offline
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: Configurations for collecting transactions offline.
                tipping:
                  anyOf:
                    - properties:
                        aud:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        cad:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        chf:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        czk:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        dkk:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        eur:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        gbp:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        hkd:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        myr:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        nok:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        nzd:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        sek:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        sgd:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        usd:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                      title: tipping
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: Tipping configurations for readers supporting on-reader tips
                verifone_p400:
                  description: >-
                    An object containing device type specific settings for
                    Verifone P400 readers
                  properties:
                    splashscreen:
                      anyOf:
                        - type: string
                        - enum:
                            - ''
                          type: string
                  title: verifone_p400
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/terminal.configuration'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Terminal Configuration
      tags:
        - Terminal
        - Configurations
  '/v1/terminal/configurations/{configuration}':
    delete:
      description: <p>Deletes a <code>Configuration</code> object.</p>
      operationId: DeleteTerminalConfigurationsConfiguration
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
                $ref: '#/components/schemas/deleted_terminal.configuration'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Terminal Configuration
      tags:
        - Terminal
        - Configurations
    get:
      description: <p>Retrieves a <code>Configuration</code> object.</p>
      operationId: GetTerminalConfigurationsConfiguration
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
                anyOf:
                  - $ref: '#/components/schemas/terminal.configuration'
                  - $ref: '#/components/schemas/deleted_terminal.configuration'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Terminal Configuration
      tags:
        - Terminal
        - Configurations
    post:
      description: <p>Updates a new <code>Configuration</code> object.</p>
      operationId: PostTerminalConfigurationsConfiguration
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
              bbpos_wisepos_e:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              offline:
                explode: true
                style: deepObject
              tipping:
                explode: true
                style: deepObject
              verifone_p400:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                bbpos_wisepos_e:
                  anyOf:
                    - properties:
                        splashscreen:
                          anyOf:
                            - type: string
                            - enum:
                                - ''
                              type: string
                      title: bbpos_wise_pose
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    An object containing device type specific settings for BBPOS
                    WisePOS E readers
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                offline:
                  anyOf:
                    - properties:
                        enabled:
                          type: boolean
                      required:
                        - enabled
                      title: offline
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: Configurations for collecting transactions offline.
                tipping:
                  anyOf:
                    - properties:
                        aud:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        cad:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        chf:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        czk:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        dkk:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        eur:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        gbp:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        hkd:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        myr:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        nok:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        nzd:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        sek:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        sgd:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                        usd:
                          properties:
                            fixed_amounts:
                              items:
                                type: integer
                              type: array
                            percentages:
                              items:
                                type: integer
                              type: array
                            smart_tip_threshold:
                              type: integer
                          title: currency_specific_config
                          type: object
                      title: tipping
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: Tipping configurations for readers supporting on-reader tips
                verifone_p400:
                  anyOf:
                    - properties:
                        splashscreen:
                          anyOf:
                            - type: string
                            - enum:
                                - ''
                              type: string
                      title: verifone_p400
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    An object containing device type specific settings for
                    Verifone P400 readers
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                anyOf:
                  - $ref: '#/components/schemas/terminal.configuration'
                  - $ref: '#/components/schemas/deleted_terminal.configuration'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Terminal Configuration
      tags:
        - Terminal
        - Configurations
  /v1/terminal/connection_tokens:
    post:
      description: >-
        <p>To connect to a reader the Stripe Terminal SDK needs to retrieve a
        short-lived connection token from Stripe, proxied through your server.
        On your backend, add an endpoint that creates and returns a connection
        token.</p>
      operationId: PostTerminalConnectionTokens
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
                location:
                  description: >-
                    The id of the location that this connection token is scoped
                    to. If specified the connection token will only be usable
                    with readers assigned to that location, otherwise the
                    connection token will be usable with all readers. Note that
                    location scoping only applies to internet-connected readers.
                    For more details, see [the docs on scoping connection
                    tokens](https://stripe.com/docs/terminal/fleet/locations#connection-tokens).
                  maxLength: 5000
                  type: string
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/terminal.connection_token'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Terminal Connection Token
      tags:
        - Terminal
        - Connections
        - Tokens
  /v1/terminal/locations:
    get:
      description: <p>Returns a list of <code>Location</code> objects.</p>
      operationId: GetTerminalLocations
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
                      $ref: '#/components/schemas/terminal.location'
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
                    pattern: ^/v1/terminal/locations
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: TerminalLocationLocationList
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
      summary: Retrieve Terminal Locations
      tags:
        - Terminal
        - Locations
    post:
      description: >-
        <p>Creates a new <code>Location</code> object.

        For further details, including which address fields are required in each
        country, see the <a href="/docs/terminal/fleet/locations">Manage
        locations</a> guide.</p>
      operationId: PostTerminalLocations
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              address:
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
              properties:
                address:
                  description: The full address of the location.
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
                    - country
                  title: create_location_address_param
                  type: object
                configuration_overrides:
                  description: >-
                    The ID of a configuration that will be used to customize all
                    readers in this location.
                  maxLength: 1000
                  type: string
                display_name:
                  description: A name for the location.
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
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
              required:
                - address
                - display_name
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/terminal.location'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Terminal Location
      tags:
        - Terminal
        - Locations
  '/v1/terminal/locations/{location}':
    delete:
      description: <p>Deletes a <code>Location</code> object.</p>
      operationId: DeleteTerminalLocationsLocation
      parameters:
        - in: path
          name: location
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
                $ref: '#/components/schemas/deleted_terminal.location'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Terminal Location
      tags:
        - Terminal
        - Locations
    get:
      description: <p>Retrieves a <code>Location</code> object.</p>
      operationId: GetTerminalLocationsLocation
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
          name: location
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
                anyOf:
                  - $ref: '#/components/schemas/terminal.location'
                  - $ref: '#/components/schemas/deleted_terminal.location'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Terminal Location
      tags:
        - Terminal
        - Locations
    post:
      description: >-
        <p>Updates a <code>Location</code> object by setting the values of the
        parameters passed. Any parameters not provided will be left
        unchanged.</p>
      operationId: PostTerminalLocationsLocation
      parameters:
        - in: path
          name: location
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              address:
                explode: true
                style: deepObject
              configuration_overrides:
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
              properties:
                address:
                  description: The full address of the location.
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
                configuration_overrides:
                  anyOf:
                    - maxLength: 1000
                      type: string
                    - enum:
                        - ''
                      type: string
                  description: >-
                    The ID of a configuration that will be used to customize all
                    readers in this location.
                display_name:
                  description: A name for the location.
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
                anyOf:
                  - $ref: '#/components/schemas/terminal.location'
                  - $ref: '#/components/schemas/deleted_terminal.location'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Terminal Location
      tags:
        - Terminal
        - Locations
  /v1/terminal/readers:
    get:
      description: <p>Returns a list of <code>Reader</code> objects.</p>
      operationId: GetTerminalReaders
      parameters:
        - description: Filters readers by device type
          in: query
          name: device_type
          required: false
          schema:
            enum:
              - bbpos_chipper2x
              - bbpos_wisepad3
              - bbpos_wisepos_e
              - simulated_wisepos_e
              - stripe_m2
              - verifone_P400
            type: string
            x-stripeBypassValidation: true
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
            A location ID to filter the response list to only readers at the
            specific location
          in: query
          name: location
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Filters readers by serial number
          in: query
          name: serial_number
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
        - description: A status filter to filter readers to only offline or online readers
          in: query
          name: status
          required: false
          schema:
            enum:
              - offline
              - online
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
                    description: A list of readers
                    items:
                      $ref: '#/components/schemas/terminal.reader'
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
                title: TerminalReaderRetrieveReader
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
      summary: Retrieve Terminal Readers
      tags:
        - Terminal
        - Readers
    post:
      description: <p>Creates a new <code>Reader</code> object.</p>
      operationId: PostTerminalReaders
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
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                label:
                  description: >-
                    Custom label given to the reader for easier identification.
                    If no label is specified, the registration code will be
                    used.
                  maxLength: 5000
                  type: string
                location:
                  description: The location to assign the reader to.
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
                registration_code:
                  description: >-
                    A code generated by the reader used for registering to an
                    account.
                  maxLength: 5000
                  type: string
              required:
                - registration_code
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/terminal.reader'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Terminal Reader
      tags:
        - Terminal
        - Readers
  '/v1/terminal/readers/{reader}':
    delete:
      description: <p>Deletes a <code>Reader</code> object.</p>
      operationId: DeleteTerminalReadersReader
      parameters:
        - in: path
          name: reader
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
                $ref: '#/components/schemas/deleted_terminal.reader'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Delete Terminal Reader
      tags:
        - Terminal
        - Readers
    get:
      description: <p>Retrieves a <code>Reader</code> object.</p>
      operationId: GetTerminalReadersReader
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
          name: reader
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
                anyOf:
                  - $ref: '#/components/schemas/terminal.reader'
                  - $ref: '#/components/schemas/deleted_terminal.reader'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Terminal Reader
      tags:
        - Terminal
        - Readers
    post:
      description: >-
        <p>Updates a <code>Reader</code> object by setting the values of the
        parameters passed. Any parameters not provided will be left
        unchanged.</p>
      operationId: PostTerminalReadersReader
      parameters:
        - in: path
          name: reader
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
              label:
                explode: true
                style: deepObject
              metadata:
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
                label:
                  anyOf:
                    - maxLength: 5000
                      type: string
                    - enum:
                        - ''
                      type: string
                  description: The new label of the reader.
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
                anyOf:
                  - $ref: '#/components/schemas/terminal.reader'
                  - $ref: '#/components/schemas/deleted_terminal.reader'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Terminal Reader
      tags:
        - Terminal
        - Readers
  '/v1/terminal/readers/{reader}/cancel_action':
    post:
      description: <p>Cancels the current reader action.</p>
      operationId: PostTerminalReadersReaderCancelAction
      parameters:
        - in: path
          name: reader
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
                $ref: '#/components/schemas/terminal.reader'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Cancel Terminal Reader Action
      tags:
        - Terminal
        - Readers
        - Actions
  '/v1/terminal/readers/{reader}/process_payment_intent':
    post:
      description: <p>Initiates a payment flow on a Reader.</p>
      operationId: PostTerminalReadersReaderProcessPaymentIntent
      parameters:
        - in: path
          name: reader
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
              process_config:
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
                payment_intent:
                  description: PaymentIntent ID
                  maxLength: 5000
                  type: string
                process_config:
                  description: Configuration overrides
                  properties:
                    skip_tipping:
                      type: boolean
                    tipping:
                      properties:
                        amount_eligible:
                          type: integer
                      title: tipping_config
                      type: object
                  title: process_config
                  type: object
              required:
                - payment_intent
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/terminal.reader'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Initiate Terminal Reader Flow
      tags:
        - Payments
        - Terminal
        - Readers
        - Flows
  '/v1/terminal/readers/{reader}/process_setup_intent':
    post:
      description: <p>Initiates a setup intent flow on a Reader.</p>
      operationId: PostTerminalReadersReaderProcessSetupIntent
      parameters:
        - in: path
          name: reader
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
              process_config:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                customer_consent_collected:
                  description: Customer Consent Collected
                  type: boolean
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                process_config:
                  description: Configuration overrides
                  properties: {}
                  title: process_setup_config
                  type: object
                setup_intent:
                  description: SetupIntent ID
                  maxLength: 5000
                  type: string
              required:
                - customer_consent_collected
                - setup_intent
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/terminal.reader'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Terminal Reader Setup Intent
      tags:
        - Terminal
        - Readers
        - Setup
        - Intent
  '/v1/terminal/readers/{reader}/refund_payment':
    post:
      description: <p>Initiates a refund on a Reader</p>
      operationId: PostTerminalReadersReaderRefundPayment
      parameters:
        - in: path
          name: reader
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
              properties:
                amount:
                  description: >-
                    A positive integer in __cents__ representing how much of
                    this charge to refund.
                  type: integer
                charge:
                  description: ID of the Charge to refund.
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
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
                payment_intent:
                  description: ID of the PaymentIntent to refund.
                  maxLength: 5000
                  type: string
                refund_application_fee:
                  description: >-
                    Boolean indicating whether the application fee should be
                    refunded when refunding this charge. If a full charge refund
                    is given, the full application fee will be refunded.
                    Otherwise, the application fee will be refunded in an amount
                    proportional to the amount of the charge refunded. An
                    application fee can be refunded only by the application that
                    created the charge.
                  type: boolean
                reverse_transfer:
                  description: >-
                    Boolean indicating whether the transfer should be reversed
                    when refunding this charge. The transfer will be reversed
                    proportionally to the amount being refunded (either the
                    entire or partial amount). A transfer can be reversed only
                    by the application that created the charge.
                  type: boolean
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/terminal.reader'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Refund Terminal Reader Payment
      tags:
        - Terminal
        - Readers
        - Payments
  '/v1/terminal/readers/{reader}/set_reader_display':
    post:
      description: <p>Sets reader display to show cart details.</p>
      operationId: PostTerminalReadersReaderSetReaderDisplay
      parameters:
        - in: path
          name: reader
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              cart:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                cart:
                  description: Cart
                  properties:
                    currency:
                      type: string
                    line_items:
                      items:
                        properties:
                          amount:
                            type: integer
                          description:
                            maxLength: 5000
                            type: string
                          quantity:
                            type: integer
                        required:
                          - amount
                          - description
                          - quantity
                        title: line_item
                        type: object
                      type: array
                    tax:
                      type: integer
                    total:
                      type: integer
                  required:
                    - currency
                    - line_items
                    - total
                  title: cart
                  type: object
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                type:
                  description: Type
                  enum:
                    - cart
                  type: string
              required:
                - type
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/terminal.reader'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Set Terminal Reader Display
      tags:
        - Terminal
        - Readers
        - Display
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
    terminal.configuration:
      description: >-
        A Configurations object represents how features should be configured for
        terminal readers.
      properties:
        bbpos_wisepos_e:
          $ref: >-
            #/components/schemas/terminal_configuration_configuration_resource_device_type_specific_config
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        is_account_default:
          description: Whether this Configuration is the default for your account
          nullable: true
          type: boolean
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
            - terminal.configuration
          type: string
        offline:
          $ref: >-
            #/components/schemas/terminal_configuration_configuration_resource_offline_config
        tipping:
          $ref: >-
            #/components/schemas/terminal_configuration_configuration_resource_tipping
        verifone_p400:
          $ref: >-
            #/components/schemas/terminal_configuration_configuration_resource_device_type_specific_config
      required:
        - id
        - livemode
        - object
      title: TerminalConfigurationConfiguration
      type: object
      x-expandableFields:
        - bbpos_wisepos_e
        - offline
        - tipping
        - verifone_p400
      x-resourceId: terminal.configuration
    deleted_terminal.configuration:
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
            - terminal.configuration
          type: string
      required:
        - deleted
        - id
        - object
      title: TerminalConfigurationDeletedConfiguration
      type: object
      x-expandableFields: []
      x-resourceId: deleted_terminal.configuration
    terminal.connection_token:
      description: >-
        A Connection Token is used by the Stripe Terminal SDK to connect to a
        reader.


        Related guide: [Fleet
        management](https://stripe.com/docs/terminal/fleet/locations)
      properties:
        location:
          description: >-
            The id of the location that this connection token is scoped to. Note
            that location scoping only applies to internet-connected readers.
            For more details, see [the docs on scoping connection
            tokens](https://stripe.com/docs/terminal/fleet/locations#connection-tokens).
          maxLength: 5000
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - terminal.connection_token
          type: string
        secret:
          description: Your application should pass this token to the Stripe Terminal SDK.
          maxLength: 5000
          type: string
      required:
        - object
        - secret
      title: TerminalConnectionToken
      type: object
      x-expandableFields: []
      x-resourceId: terminal.connection_token
    terminal.location:
      description: >-
        A Location represents a grouping of readers.


        Related guide: [Fleet
        management](https://stripe.com/docs/terminal/fleet/locations)
      properties:
        address:
          $ref: '#/components/schemas/address'
        configuration_overrides:
          description: >-
            The ID of a configuration that will be used to customize all readers
            in this location.
          maxLength: 5000
          type: string
        display_name:
          description: The display name of the location.
          maxLength: 5000
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
          type: object
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - terminal.location
          type: string
      required:
        - address
        - display_name
        - id
        - livemode
        - metadata
        - object
      title: TerminalLocationLocation
      type: object
      x-expandableFields:
        - address
      x-resourceId: terminal.location
    deleted_terminal.location:
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
            - terminal.location
          type: string
      required:
        - deleted
        - id
        - object
      title: TerminalLocationDeletedLocation
      type: object
      x-expandableFields: []
      x-resourceId: deleted_terminal.location
    terminal.reader:
      description: >-
        A Reader represents a physical device for accepting payment details.


        Related guide: [Connecting to a
        reader](https://stripe.com/docs/terminal/payments/connect-reader)
      properties:
        action:
          anyOf:
            - $ref: >-
                #/components/schemas/terminal_reader_reader_resource_reader_action
          description: The most recent action performed by the reader.
          nullable: true
        device_sw_version:
          description: The current software version of the reader.
          maxLength: 5000
          nullable: true
          type: string
        device_type:
          description: >-
            Type of reader, one of `bbpos_wisepad3`, `stripe_m2`,
            `bbpos_chipper2x`, `bbpos_wisepos_e`, `verifone_P400`, or
            `simulated_wisepos_e`.
          enum:
            - bbpos_chipper2x
            - bbpos_wisepad3
            - bbpos_wisepos_e
            - simulated_wisepos_e
            - stripe_m2
            - verifone_P400
          type: string
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        ip_address:
          description: The local IP address of the reader.
          maxLength: 5000
          nullable: true
          type: string
        label:
          description: Custom label given to the reader for easier identification.
          maxLength: 5000
          type: string
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        location:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/terminal.location'
          description: The location identifier of the reader.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/terminal.location'
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
            - terminal.reader
          type: string
        serial_number:
          description: Serial number of the reader.
          maxLength: 5000
          type: string
        status:
          description: The networking status of the reader.
          maxLength: 5000
          nullable: true
          type: string
      required:
        - device_type
        - id
        - label
        - livemode
        - metadata
        - object
        - serial_number
      title: TerminalReaderReader
      type: object
      x-expandableFields:
        - action
        - location
      x-resourceId: terminal.reader
    deleted_terminal.reader:
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
            - terminal.reader
          type: string
      required:
        - deleted
        - id
        - object
      title: TerminalReaderDeletedReader
      type: object
      x-expandableFields: []
      x-resourceId: deleted_terminal.reader
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
  - name: Terminal
    description: Needs a description.
  - name: Configurations
    description: Needs a description.
  - name: Connections
    description: Needs a description.
  - name: Tokens
    description: Needs a description.
  - name: Locations
    description: Needs a description.
  - name: Readers
    description: Needs a description.
  - name: Actions
    description: Needs a description.
  - name: Payments
    description: Needs a description.
  - name: Flows
    description: Needs a description.
  - name: Setup
    description: Needs a description.
  - name: Intent
    description: Needs a description.
  - name: Display
    description: Needs a description.
---