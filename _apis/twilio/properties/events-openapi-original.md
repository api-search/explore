---
components:
  schemas:
    events.v1.event_type:
      type: object
      properties:
        type:
          type: string
          nullable: true
          description: A string that uniquely identifies this Event Type.
        schema_id:
          type: string
          nullable: true
          description: >-
            A string that uniquely identifies the Schema this Event Type adheres
            to.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: 'The date that this Event Type was created, given in ISO 8601 format.'
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: 'The date that this Event Type was updated, given in ISO 8601 format.'
        description:
          type: string
          nullable: true
          description: A human readable description for this Event Type.
        url:
          type: string
          format: uri
          nullable: true
          description: The URL of this resource.
        links:
          type: object
          format: uri-map
          nullable: true
    events.v1.schema:
      type: object
      properties:
        id:
          type: string
          nullable: true
          description: >-
            The unique identifier of the schema. Each schema can have multiple
            versions, that share the same id.
        url:
          type: string
          format: uri
          nullable: true
          description: The URL of this resource.
        links:
          type: object
          format: uri-map
          nullable: true
          description: >-
            Contains a dictionary of URL links to nested resources of this
            schema.
        latest_version_date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that the latest schema version was created, given in ISO
            8601 format.
        latest_version:
          type: integer
          nullable: true
          description: The latest version published of this schema.
    events.v1.schema.schema_version:
      type: object
      properties:
        id:
          type: string
          nullable: true
          description: >-
            The unique identifier of the schema. Each schema can have multiple
            versions, that share the same id.
        schema_version:
          type: integer
          nullable: true
          description: The version of this schema.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: 'The date the schema version was created, given in ISO 8601 format.'
        url:
          type: string
          format: uri
          nullable: true
          description: The URL of this resource.
        raw:
          type: string
          format: uri
          nullable: true
    events.v1.sink:
      type: object
      properties:
        date_created:
          type: string
          format: date-time
          nullable: true
          description: 'The date that this Sink was created, given in ISO 8601 format.'
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: 'The date that this Sink was updated, given in ISO 8601 format.'
        description:
          type: string
          nullable: true
          description: A human readable description for the Sink
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^DG[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34 character string that uniquely identifies this Sink.
        sink_configuration:
          nullable: true
          description: >-
            The information required for Twilio to connect to the provided Sink
            encoded as JSON.
        sink_type:
          type: string
          $ref: '#/components/schemas/sink_enum_sink_type'
          nullable: true
          description: The Sink type. Can only be "kinesis" or "webhook" currently.
        status:
          type: string
          $ref: '#/components/schemas/sink_enum_status'
          nullable: true
          description: >-
            The Status of this Sink. One of `initialized`, `validating`,
            `active` or `failed`.
        url:
          type: string
          format: uri
          nullable: true
          description: The URL of this resource.
        links:
          type: object
          format: uri-map
          nullable: true
          description: Contains a dictionary of URL links to nested resources of this Sink.
    sink_enum_status:
      type: string
      enum:
        - initialized
        - validating
        - active
        - failed
    sink_enum_sink_type:
      type: string
      enum:
        - kinesis
        - webhook
        - segment
    events.v1.sink.sink_test:
      type: object
      properties:
        result:
          type: string
          nullable: true
          description: Feedback indicating whether the test event was generated.
    events.v1.sink.sink_validate:
      type: object
      properties:
        result:
          type: string
          nullable: true
          description: Feedback indicating whether the given Sink was validated.
    events.v1.subscription.subscribed_event:
      type: object
      properties:
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Account.
        type:
          type: string
          nullable: true
          description: Type of event being subscribed to.
        schema_version:
          type: integer
          nullable: true
          description: The schema version that the Subscription should use.
        subscription_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^DF[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Subscription.
        url:
          type: string
          format: uri
          nullable: true
          description: The URL of this resource.
    events.v1.subscription:
      type: object
      properties:
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Account.
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^DF[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34 character string that uniquely identifies this Subscription.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Subscription was created, given in ISO 8601
            format.
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Subscription was updated, given in ISO 8601
            format.
        description:
          type: string
          nullable: true
          description: A human readable description for the Subscription
        sink_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^DG[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the sink that events selected by this subscription should
            be sent to. Sink must be active for the subscription to be created.
        url:
          type: string
          format: uri
          nullable: true
          description: The URL of this resource.
        links:
          type: object
          format: uri-map
          nullable: true
          description: >-
            Contains a dictionary of URL links to nested resources of this
            Subscription.
    ListEventTypeResponse:
      type: object
      properties:
        types:
          type: array
          items:
            $ref: '#/components/schemas/events.v1.event_type'
        meta:
          type: object
          properties:
            first_page_url:
              type: string
              format: uri
            next_page_url:
              type: string
              format: uri
              nullable: true
            page:
              type: integer
            page_size:
              type: integer
            previous_page_url:
              type: string
              format: uri
              nullable: true
            url:
              type: string
              format: uri
            key:
              type: string
    ListSchemaVersionResponse:
      type: object
      properties:
        schema_versions:
          type: array
          items:
            $ref: '#/components/schemas/events.v1.schema.schema_version'
        meta:
          type: object
          properties:
            first_page_url:
              type: string
              format: uri
            next_page_url:
              type: string
              format: uri
              nullable: true
            page:
              type: integer
            page_size:
              type: integer
            previous_page_url:
              type: string
              format: uri
              nullable: true
            url:
              type: string
              format: uri
            key:
              type: string
    UpdateSinkRequest:
      type: object
      required:
        - Description
      properties:
        Description:
          type: string
          description: >-
            A human readable description for the Sink **This value should not
            contain PII.**
    CreateSinkRequest:
      type: object
      required:
        - Description
        - SinkConfiguration
        - SinkType
      properties:
        Description:
          type: string
          description: >-
            A human readable description for the Sink **This value should not
            contain PII.**
        SinkConfiguration:
          description: >-
            The information required for Twilio to connect to the provided Sink
            encoded as JSON.
        SinkType:
          type: string
          $ref: '#/components/schemas/sink_enum_sink_type'
          description: The Sink type. Can only be "kinesis" or "webhook" currently.
    ListSinkResponse:
      type: object
      properties:
        sinks:
          type: array
          items:
            $ref: '#/components/schemas/events.v1.sink'
        meta:
          type: object
          properties:
            first_page_url:
              type: string
              format: uri
            next_page_url:
              type: string
              format: uri
              nullable: true
            page:
              type: integer
            page_size:
              type: integer
            previous_page_url:
              type: string
              format: uri
              nullable: true
            url:
              type: string
              format: uri
            key:
              type: string
    CreateSinkValidateRequest:
      type: object
      required:
        - TestId
      properties:
        TestId:
          type: string
          description: >-
            A 34 character string that uniquely identifies the test event for a
            Sink being validated.
    ListSubscribedEventResponse:
      type: object
      properties:
        types:
          type: array
          items:
            $ref: '#/components/schemas/events.v1.subscription.subscribed_event'
        meta:
          type: object
          properties:
            first_page_url:
              type: string
              format: uri
            next_page_url:
              type: string
              format: uri
              nullable: true
            page:
              type: integer
            page_size:
              type: integer
            previous_page_url:
              type: string
              format: uri
              nullable: true
            url:
              type: string
              format: uri
            key:
              type: string
    CreateSubscribedEventRequest:
      type: object
      required:
        - Type
      properties:
        Type:
          type: string
          description: Type of event being subscribed to.
        SchemaVersion:
          type: integer
          description: The schema version that the Subscription should use.
    UpdateSubscribedEventRequest:
      type: object
      properties:
        SchemaVersion:
          type: integer
          description: The schema version that the Subscription should use.
    ListSubscriptionResponse:
      type: object
      properties:
        subscriptions:
          type: array
          items:
            $ref: '#/components/schemas/events.v1.subscription'
        meta:
          type: object
          properties:
            first_page_url:
              type: string
              format: uri
            next_page_url:
              type: string
              format: uri
              nullable: true
            page:
              type: integer
            page_size:
              type: integer
            previous_page_url:
              type: string
              format: uri
              nullable: true
            url:
              type: string
              format: uri
            key:
              type: string
    CreateSubscriptionRequest:
      type: object
      required:
        - Description
        - SinkSid
        - Types
      properties:
        Description:
          type: string
          description: >-
            A human readable description for the Subscription **This value
            should not contain PII.**
        SinkSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^DG[0-9a-fA-F]{32}$'
          description: >-
            The SID of the sink that events selected by this subscription should
            be sent to. Sink must be active for the subscription to be created.
        Types:
          type: array
          items: {}
          description: An array of objects containing the subscribed Event Types
    UpdateSubscriptionRequest:
      type: object
      properties:
        Description:
          type: string
          description: A human readable description for the Subscription.
        SinkSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^DG[0-9a-fA-F]{32}$'
          description: >-
            The SID of the sink that events selected by this subscription should
            be sent to. Sink must be active for the subscription to be created.
  securitySchemes:
    accountSid_authToken:
      type: http
      scheme: basic
info:
  title: Twilio - Events
  description: This is the public Twilio REST API.
  termsOfService: 'https://www.twilio.com/legal/tos'
  contact:
    name: Twilio Support
    url: 'https://support.twilio.com'
    email: support@twilio.com
  license:
    name: Apache 2.0
    url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
  version: 1.52.0
openapi: 3.0.1
paths:
  /v1/Types:
    servers:
      - url: 'https://events.twilio.com'
    description: Event Types available
    x-twilio:
      defaultOutputProperties:
        - type
        - schema_id
        - description
      pathType: list
      mountName: event_types
    get:
      description: Retrieve a paginated list of all the available Event Types.
      tags:
        - EventsV1EventType
      parameters:
        - name: SchemaId
          in: query
          description: >-
            A string parameter filtering the results to return only the Event
            Types using a given schema.
          schema:
            type: string
        - name: PageSize
          in: query
          description: >-
            How many resources to return in each list page. The default is 50,
            and the maximum is 1000.
          schema:
            type: integer
            minimum: 1
            maximum: 1000
        - name: Page
          in: query
          description: The page index. This value is simply for client state.
          schema:
            type: integer
            minimum: 0
        - name: PageToken
          in: query
          description: The page token. This is provided by the API.
          schema:
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ListEventTypeResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListEventType
      x-maturity:
        - GA
  '/v1/Types/{Type}':
    servers:
      - url: 'https://events.twilio.com'
    description: Event Types available
    x-twilio:
      defaultOutputProperties:
        - type
        - schema_id
        - description
      pathType: instance
      mountName: event_types
    get:
      description: Fetch a specific Event Type.
      tags:
        - EventsV1EventType
      parameters:
        - name: Type
          in: path
          description: A string that uniquely identifies this Event Type.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/events.v1.event_type'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchEventType
      x-maturity:
        - GA
  '/v1/Schemas/{Id}':
    servers:
      - url: 'https://events.twilio.com'
    description: Versioned Schema definitions for Event Types
    x-twilio:
      defaultOutputProperties:
        - id
      pathType: instance
      dependentProperties:
        versions:
          mapping:
            id: id
          resource_url: '/v1/Schemas/{id}/Versions'
    get:
      description: Fetch a specific schema with its nested versions.
      tags:
        - EventsV1Schema
      parameters:
        - name: Id
          in: path
          description: >-
            The unique identifier of the schema. Each schema can have multiple
            versions, that share the same id.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/events.v1.schema'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchSchema
      x-maturity:
        - GA
  /v1/Schemas:
    servers:
      - url: 'https://events.twilio.com'
    description: Versioned Schema definitions for Event Types
    x-twilio:
      defaultOutputProperties:
        - id
      pathType: list
      dependentProperties:
        versions:
          mapping:
            id: id
          resource_url: '/v1/Schemas/{id}/Versions'
  '/v1/Schemas/{Id}/Versions':
    servers:
      - url: 'https://events.twilio.com'
    description: Version of the Schema
    x-twilio:
      defaultOutputProperties:
        - id
        - schema_version
        - date_created
      pathType: list
      parent: '/Schemas/{Id}'
      className: schema_version
    get:
      description: Retrieve a paginated list of versions of the schema.
      tags:
        - EventsV1SchemaVersion
      parameters:
        - name: Id
          in: path
          description: >-
            The unique identifier of the schema. Each schema can have multiple
            versions, that share the same id.
          schema:
            type: string
          required: true
        - name: PageSize
          in: query
          description: >-
            How many resources to return in each list page. The default is 50,
            and the maximum is 1000.
          schema:
            type: integer
            minimum: 1
            maximum: 1000
        - name: Page
          in: query
          description: The page index. This value is simply for client state.
          schema:
            type: integer
            minimum: 0
        - name: PageToken
          in: query
          description: The page token. This is provided by the API.
          schema:
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ListSchemaVersionResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListSchemaVersion
      x-maturity:
        - GA
  '/v1/Schemas/{Id}/Versions/{SchemaVersion}':
    servers:
      - url: 'https://events.twilio.com'
    description: Version of the Schema
    x-twilio:
      defaultOutputProperties:
        - id
        - schema_version
        - date_created
      pathType: instance
      parent: '/Schemas/{Id}'
      className: schema_version
    get:
      description: Fetch a specific schema and version.
      tags:
        - EventsV1SchemaVersion
      parameters:
        - name: Id
          in: path
          description: >-
            The unique identifier of the schema. Each schema can have multiple
            versions, that share the same id.
          schema:
            type: string
          required: true
        - name: SchemaVersion
          in: path
          description: The version of the schema
          schema:
            type: integer
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/events.v1.schema.schema_version'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchSchemaVersion
      x-maturity:
        - GA
  '/v1/Sinks/{Sid}':
    servers:
      - url: 'https://events.twilio.com'
    description: Sink destination to send events to
    x-twilio:
      defaultOutputProperties:
        - date_created
        - date_updated
        - description
        - sid
        - sink_configuration
        - sink_type
        - status
      pathType: instance
      dependentProperties:
        sink_test:
          mapping:
            sid: sid
          resource_url: '/v1/Sinks/{sid}/Test'
        sink_validate:
          mapping:
            sid: sid
          resource_url: '/v1/Sinks/{sid}/Validate'
    get:
      description: Fetch a specific Sink.
      tags:
        - EventsV1Sink
      parameters:
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Sink.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^DG[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/events.v1.sink'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchSink
      x-maturity:
        - GA
    delete:
      description: Delete a specific Sink.
      tags:
        - EventsV1Sink
      parameters:
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Sink.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^DG[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteSink
      x-maturity:
        - GA
    post:
      description: Update a specific Sink
      tags:
        - EventsV1Sink
      parameters:
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Sink.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^DG[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/events.v1.sink'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateSink
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateSinkRequest'
  /v1/Sinks:
    servers:
      - url: 'https://events.twilio.com'
    description: Sink destination to send events to
    x-twilio:
      defaultOutputProperties:
        - date_created
        - date_updated
        - description
        - sid
        - sink_configuration
        - sink_type
        - status
      pathType: list
      dependentProperties:
        sink_test:
          mapping:
            sid: sid
          resource_url: '/v1/Sinks/{sid}/Test'
        sink_validate:
          mapping:
            sid: sid
          resource_url: '/v1/Sinks/{sid}/Validate'
    post:
      description: Create a new Sink
      tags:
        - EventsV1Sink
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/events.v1.sink'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateSink
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateSinkRequest'
    get:
      description: >-
        Retrieve a paginated list of Sinks belonging to the account used to make
        the request.
      tags:
        - EventsV1Sink
      parameters:
        - name: InUse
          in: query
          description: >-
            A boolean query parameter filtering the results to return sinks
            used/not used by a subscription.
          schema:
            type: boolean
        - name: Status
          in: query
          description: >-
            A String query parameter filtering the results by status
            `initialized`, `validating`, `active` or `failed`.
          schema:
            type: string
        - name: PageSize
          in: query
          description: >-
            How many resources to return in each list page. The default is 50,
            and the maximum is 1000.
          schema:
            type: integer
            minimum: 1
            maximum: 1000
        - name: Page
          in: query
          description: The page index. This value is simply for client state.
          schema:
            type: integer
            minimum: 0
        - name: PageToken
          in: query
          description: The page token. This is provided by the API.
          schema:
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ListSinkResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListSink
      x-maturity:
        - GA
  '/v1/Sinks/{Sid}/Test':
    servers:
      - url: 'https://events.twilio.com'
    description: Test sink
    x-twilio:
      defaultOutputProperties:
        - result
      pathType: list
      parent: '/Sinks/{Sid}'
      mountName: sink_test
    post:
      description: Create a new Sink Test Event for the given Sink.
      tags:
        - EventsV1SinkTest
      parameters:
        - name: Sid
          in: path
          description: >-
            A 34 character string that uniquely identifies the Sink to be
            Tested.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^DG[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/events.v1.sink.sink_test'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateSinkTest
      x-maturity:
        - GA
  '/v1/Sinks/{Sid}/Validate':
    servers:
      - url: 'https://events.twilio.com'
    description: Validate sink
    x-twilio:
      defaultOutputProperties:
        - result
      pathType: list
      parent: '/Sinks/{Sid}'
      mountName: sink_validate
    post:
      description: Validate that a test event for a Sink was received.
      tags:
        - EventsV1SinkValidate
      parameters:
        - name: Sid
          in: path
          description: >-
            A 34 character string that uniquely identifies the Sink being
            validated.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^DG[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/events.v1.sink.sink_validate'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateSinkValidate
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateSinkValidateRequest'
  '/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents':
    servers:
      - url: 'https://events.twilio.com'
    description: Event subscribed to in the parent Subscription
    x-twilio:
      defaultOutputProperties:
        - type
        - schema_version
        - account_sid
        - subscription_sid
      pathType: list
      parent: '/Subscriptions/{Sid}'
    get:
      description: Retrieve a list of all Subscribed Event types for a Subscription.
      tags:
        - EventsV1SubscribedEvent
      parameters:
        - name: SubscriptionSid
          in: path
          description: The unique SID identifier of the Subscription.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^DF[0-9a-fA-F]{32}$'
          required: true
        - name: PageSize
          in: query
          description: >-
            How many resources to return in each list page. The default is 50,
            and the maximum is 1000.
          schema:
            type: integer
            minimum: 1
            maximum: 1000
        - name: Page
          in: query
          description: The page index. This value is simply for client state.
          schema:
            type: integer
            minimum: 0
        - name: PageToken
          in: query
          description: The page token. This is provided by the API.
          schema:
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ListSubscribedEventResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListSubscribedEvent
      x-maturity:
        - GA
    post:
      description: Add an event type to a Subscription.
      tags:
        - EventsV1SubscribedEvent
      parameters:
        - name: SubscriptionSid
          in: path
          description: The unique SID identifier of the Subscription.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^DF[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/events.v1.subscription.subscribed_event'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateSubscribedEvent
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateSubscribedEventRequest'
  '/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}':
    servers:
      - url: 'https://events.twilio.com'
    description: Event subscribed to in the parent Subscription
    x-twilio:
      defaultOutputProperties:
        - type
        - schema_version
        - account_sid
        - subscription_sid
      pathType: instance
      parent: '/Subscriptions/{Sid}'
    get:
      description: Read an Event for a Subscription.
      tags:
        - EventsV1SubscribedEvent
      parameters:
        - name: SubscriptionSid
          in: path
          description: The unique SID identifier of the Subscription.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^DF[0-9a-fA-F]{32}$'
          required: true
        - name: Type
          in: path
          description: Type of event being subscribed to.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/events.v1.subscription.subscribed_event'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchSubscribedEvent
      x-maturity:
        - GA
    post:
      description: Update an Event for a Subscription.
      tags:
        - EventsV1SubscribedEvent
      parameters:
        - name: SubscriptionSid
          in: path
          description: The unique SID identifier of the Subscription.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^DF[0-9a-fA-F]{32}$'
          required: true
        - name: Type
          in: path
          description: Type of event being subscribed to.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/events.v1.subscription.subscribed_event'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateSubscribedEvent
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateSubscribedEventRequest'
    delete:
      description: Remove an event type from a Subscription.
      tags:
        - EventsV1SubscribedEvent
      parameters:
        - name: SubscriptionSid
          in: path
          description: The unique SID identifier of the Subscription.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^DF[0-9a-fA-F]{32}$'
          required: true
        - name: Type
          in: path
          description: Type of event being subscribed to.
          schema:
            type: string
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteSubscribedEvent
      x-maturity:
        - GA
  /v1/Subscriptions:
    servers:
      - url: 'https://events.twilio.com'
    description: Subscription to send Event Types to a Sink
    x-twilio:
      defaultOutputProperties:
        - account_sid
        - sid
        - sink_sid
        - date_created
        - date_updated
      pathType: list
      dependentProperties:
        subscribed_events:
          mapping:
            subscription_sid: sid
          resource_url: '/v1/Subscriptions/{subscription_sid}/SubscribedEvents'
    get:
      description: >-
        Retrieve a paginated list of Subscriptions belonging to the account used
        to make the request.
      tags:
        - EventsV1Subscription
      parameters:
        - name: SinkSid
          in: query
          description: >-
            The SID of the sink that the list of Subscriptions should be
            filtered by.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^DG[0-9a-fA-F]{32}$'
        - name: PageSize
          in: query
          description: >-
            How many resources to return in each list page. The default is 50,
            and the maximum is 1000.
          schema:
            type: integer
            minimum: 1
            maximum: 1000
        - name: Page
          in: query
          description: The page index. This value is simply for client state.
          schema:
            type: integer
            minimum: 0
        - name: PageToken
          in: query
          description: The page token. This is provided by the API.
          schema:
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ListSubscriptionResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListSubscription
      x-maturity:
        - GA
    post:
      description: Create a new Subscription.
      tags:
        - EventsV1Subscription
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/events.v1.subscription'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateSubscription
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateSubscriptionRequest'
  '/v1/Subscriptions/{Sid}':
    servers:
      - url: 'https://events.twilio.com'
    description: Subscription to send Event Types to a Sink
    x-twilio:
      defaultOutputProperties:
        - account_sid
        - sid
        - sink_sid
        - date_created
        - date_updated
      pathType: instance
      dependentProperties:
        subscribed_events:
          mapping:
            subscription_sid: sid
          resource_url: '/v1/Subscriptions/{subscription_sid}/SubscribedEvents'
    get:
      description: Fetch a specific Subscription.
      tags:
        - EventsV1Subscription
      parameters:
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Subscription.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^DF[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/events.v1.subscription'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchSubscription
      x-maturity:
        - GA
    post:
      description: Update a Subscription.
      tags:
        - EventsV1Subscription
      parameters:
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Subscription.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^DF[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/events.v1.subscription'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateSubscription
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateSubscriptionRequest'
    delete:
      description: Delete a specific Subscription.
      tags:
        - EventsV1Subscription
      parameters:
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Subscription.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^DF[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteSubscription
      x-maturity:
        - GA
servers:
  - url: 'https://events.twilio.com'
tags:
  - name: EventsV1EventType
  - name: EventsV1Schema
  - name: EventsV1SchemaVersion
  - name: EventsV1Sink
  - name: EventsV1SinkTest
  - name: EventsV1SinkValidate
  - name: EventsV1SubscribedEvent
  - name: EventsV1Subscription
x-maturity:
  - name: GA
    description: This product is Generally Available.
---