---
components:
  schemas:
    microvisor.v1.account_config:
      type: object
      properties:
        key:
          type: string
          nullable: true
          description: The config key; up to 100 characters.
        date_updated:
          type: string
          format: date-time
          nullable: true
        value:
          type: string
          nullable: true
          description: The config value; up to 4096 characters.
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the Config.
    microvisor.v1.account_secret:
      type: object
      properties:
        key:
          type: string
          nullable: true
          description: The secret key; up to 100 characters.
        date_rotated:
          type: string
          format: date-time
          nullable: true
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the Secret.
    microvisor.v1.app:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^KA[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34-character string that uniquely identifies this App.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Account.
        hash:
          type: string
          nullable: true
          description: 'App manifest hash represented as `hash_algorithm:hash_value`.'
        unique_name:
          type: string
          nullable: true
          description: >-
            A developer-defined string that uniquely identifies the App. This
            value must be unique for all Apps on this Account. The `unique_name`
            value may be used as an alternative to the `sid` in the URL path to
            address the resource.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this App was created, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this App was last updated, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        url:
          type: string
          format: uri
          nullable: true
          description: The URL of this resource.
        links:
          type: object
          format: uri-map
          nullable: true
    microvisor.v1.app.app_manifest:
      type: object
      properties:
        app_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^KA[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34-character string that uniquely identifies this App.
        hash:
          type: string
          nullable: true
          description: 'App manifest hash represented as `hash_algorithm:hash_value`.'
        encoded_bytes:
          type: string
          nullable: true
          description: The base-64 encoded manifest
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of this Manifest.
    microvisor.v1.device:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^UV[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34-character string that uniquely identifies this Device.
        unique_name:
          type: string
          nullable: true
          description: >-
            A developer-defined string that uniquely identifies the Device. This
            value must be unique for all Devices on this Account. The
            `unique_name` value may be used as an alternative to the `sid` in
            the URL path to address the resource.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Account.
        app:
          nullable: true
          description: >-
            Information about the target App and the App reported by this
            Device. Contains the properties `target_sid`, `date_targeted`,
            `update_status` (one of `up-to-date`, `pending` and `error`),
            `update_error_code`, `reported_sid` and `date_reported`.
        logging:
          nullable: true
          description: >-
            Object specifying whether application logging is enabled for this
            Device. Contains the properties `enabled` and `date_expires`.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Device was created, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Device was last updated, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        url:
          type: string
          format: uri
          nullable: true
          description: The URL of this resource.
        links:
          type: object
          format: uri-map
          nullable: true
          description: The absolute URLs of related resources.
    microvisor.v1.device.device_config:
      type: object
      properties:
        device_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^UV[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34-character string that uniquely identifies the parent Device.
        key:
          type: string
          nullable: true
          description: The config key; up to 100 characters.
        value:
          type: string
          nullable: true
          description: The config value; up to 4096 characters.
        date_updated:
          type: string
          format: date-time
          nullable: true
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the Config.
    microvisor.v1.device.device_secret:
      type: object
      properties:
        device_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^UV[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34-character string that uniquely identifies the parent Device.
        key:
          type: string
          nullable: true
          description: The secret key; up to 100 characters.
        date_rotated:
          type: string
          format: date-time
          nullable: true
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the Secret.
    ListAccountConfigResponse:
      type: object
      properties:
        configs:
          type: array
          items:
            $ref: '#/components/schemas/microvisor.v1.account_config'
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
    CreateAccountConfigRequest:
      type: object
      required:
        - Key
        - Value
      properties:
        Key:
          type: string
          description: The config key; up to 100 characters.
        Value:
          type: string
          description: The config value; up to 4096 characters.
    UpdateAccountConfigRequest:
      type: object
      required:
        - Value
      properties:
        Value:
          type: string
          description: The config value; up to 4096 characters.
    ListAccountSecretResponse:
      type: object
      properties:
        secrets:
          type: array
          items:
            $ref: '#/components/schemas/microvisor.v1.account_secret'
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
    CreateAccountSecretRequest:
      type: object
      required:
        - Key
        - Value
      properties:
        Key:
          type: string
          description: The secret key; up to 100 characters.
        Value:
          type: string
          description: The secret value; up to 4096 characters.
    UpdateAccountSecretRequest:
      type: object
      required:
        - Value
      properties:
        Value:
          type: string
          description: The secret value; up to 4096 characters.
    ListAppResponse:
      type: object
      properties:
        apps:
          type: array
          items:
            $ref: '#/components/schemas/microvisor.v1.app'
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
    ListDeviceResponse:
      type: object
      properties:
        devices:
          type: array
          items:
            $ref: '#/components/schemas/microvisor.v1.device'
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
    UpdateDeviceRequest:
      type: object
      properties:
        UniqueName:
          type: string
          description: >-
            A unique and addressable name to be assigned to this Device by the
            developer. It may be used in place of the Device SID.
        TargetApp:
          type: string
          description: The SID or unique name of the App to be targeted to the Device.
        LoggingEnabled:
          type: boolean
          description: >-
            A Boolean flag specifying whether to enable application logging.
            Logs will be enabled or extended for 24 hours.
        RestartApp:
          type: boolean
          description: Set to true to restart the App running on the Device.
    ListDeviceConfigResponse:
      type: object
      properties:
        configs:
          type: array
          items:
            $ref: '#/components/schemas/microvisor.v1.device.device_config'
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
    CreateDeviceConfigRequest:
      type: object
      required:
        - Key
        - Value
      properties:
        Key:
          type: string
          description: The config key; up to 100 characters.
        Value:
          type: string
          description: The config value; up to 4096 characters.
    UpdateDeviceConfigRequest:
      type: object
      required:
        - Value
      properties:
        Value:
          type: string
          description: The config value; up to 4096 characters.
    ListDeviceSecretResponse:
      type: object
      properties:
        secrets:
          type: array
          items:
            $ref: '#/components/schemas/microvisor.v1.device.device_secret'
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
    CreateDeviceSecretRequest:
      type: object
      required:
        - Key
        - Value
      properties:
        Key:
          type: string
          description: The secret key; up to 100 characters.
        Value:
          type: string
          description: The secret value; up to 4096 characters.
    UpdateDeviceSecretRequest:
      type: object
      required:
        - Value
      properties:
        Value:
          type: string
          description: The secret value; up to 4096 characters.
  securitySchemes:
    accountSid_authToken:
      type: http
      scheme: basic
info:
  title: Twilio - Microvisor
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
  /v1/Configs:
    servers:
      - url: 'https://microvisor.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties: []
      pathType: list
      mountName: account_configs
    get:
      description: Retrieve a list of all Configs for an Account.
      tags:
        - MicrovisorV1AccountConfig
      parameters:
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
                $ref: '#/components/schemas/ListAccountConfigResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListAccountConfig
      x-maturity:
        - Preview
    post:
      description: Create a config for an Account.
      tags:
        - MicrovisorV1AccountConfig
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.account_config'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateAccountConfig
      x-maturity:
        - Preview
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateAccountConfigRequest'
  '/v1/Configs/{Key}':
    servers:
      - url: 'https://microvisor.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties: []
      pathType: instance
      mountName: account_configs
    get:
      description: Retrieve a Config for an Account.
      tags:
        - MicrovisorV1AccountConfig
      parameters:
        - name: Key
          in: path
          description: The config key; up to 100 characters.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.account_config'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchAccountConfig
      x-maturity:
        - Preview
    post:
      description: Update a config for an Account.
      tags:
        - MicrovisorV1AccountConfig
      parameters:
        - name: Key
          in: path
          description: The config key; up to 100 characters.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.account_config'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateAccountConfig
      x-maturity:
        - Preview
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateAccountConfigRequest'
    delete:
      description: Delete a config for an Account.
      tags:
        - MicrovisorV1AccountConfig
      parameters:
        - name: Key
          in: path
          description: The config key; up to 100 characters.
          schema:
            type: string
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteAccountConfig
      x-maturity:
        - Preview
  /v1/Secrets:
    servers:
      - url: 'https://microvisor.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties: []
      pathType: list
      mountName: account_secrets
    get:
      description: Retrieve a list of all Secrets for an Account.
      tags:
        - MicrovisorV1AccountSecret
      parameters:
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
                $ref: '#/components/schemas/ListAccountSecretResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListAccountSecret
      x-maturity:
        - Preview
    post:
      description: Create a secret for an Account.
      tags:
        - MicrovisorV1AccountSecret
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.account_secret'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateAccountSecret
      x-maturity:
        - Preview
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateAccountSecretRequest'
  '/v1/Secrets/{Key}':
    servers:
      - url: 'https://microvisor.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties: []
      pathType: instance
      mountName: account_secrets
    get:
      description: Retrieve a Secret for an Account.
      tags:
        - MicrovisorV1AccountSecret
      parameters:
        - name: Key
          in: path
          description: The secret key; up to 100 characters.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.account_secret'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchAccountSecret
      x-maturity:
        - Preview
    post:
      description: Update a secret for an Account.
      tags:
        - MicrovisorV1AccountSecret
      parameters:
        - name: Key
          in: path
          description: The secret key; up to 100 characters.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.account_secret'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateAccountSecret
      x-maturity:
        - Preview
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateAccountSecretRequest'
    delete:
      description: Delete a secret for an Account.
      tags:
        - MicrovisorV1AccountSecret
      parameters:
        - name: Key
          in: path
          description: The secret key; up to 100 characters.
          schema:
            type: string
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteAccountSecret
      x-maturity:
        - Preview
  /v1/Apps:
    servers:
      - url: 'https://microvisor.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - unique_name
      pathType: list
      dependentProperties:
        app_manifests:
          mapping:
            app_sid: sid
          resource_url: /v1None
    get:
      description: Retrieve a list of all Apps for an Account.
      tags:
        - MicrovisorV1App
      parameters:
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
                $ref: '#/components/schemas/ListAppResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListApp
      x-maturity:
        - Preview
  '/v1/Apps/{Sid}':
    servers:
      - url: 'https://microvisor.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - unique_name
      pathType: instance
      dependentProperties:
        app_manifests:
          mapping:
            app_sid: sid
          resource_url: /v1None
    get:
      description: Fetch a specific App.
      tags:
        - MicrovisorV1App
      parameters:
        - name: Sid
          in: path
          description: A 34-character string that uniquely identifies this App.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.app'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchApp
      x-maturity:
        - Preview
    delete:
      description: Delete a specific App.
      tags:
        - MicrovisorV1App
      parameters:
        - name: Sid
          in: path
          description: A 34-character string that uniquely identifies this App.
          schema:
            type: string
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteApp
      x-maturity:
        - Preview
  '/v1/Apps/{AppSid}/Manifest':
    servers:
      - url: 'https://microvisor.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties: []
      pathType: instance
      parent: '/Apps/{Sid}'
      mountName: app_manifests
    get:
      description: Retrieve the Manifest for an App.
      tags:
        - MicrovisorV1AppManifest
      parameters:
        - name: AppSid
          in: path
          description: A 34-character string that uniquely identifies this App.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.app.app_manifest'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchAppManifest
      x-maturity:
        - Preview
  /v1/Devices:
    servers:
      - url: 'https://microvisor.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - unique_name
      pathType: list
      dependentProperties:
        device_configs:
          mapping:
            device_sid: sid
          resource_url: '/v1/Devices/{device_sid}/Configs'
        device_secrets:
          mapping:
            device_sid: sid
          resource_url: '/v1/Devices/{device_sid}/Secrets'
    get:
      description: Retrieve a list of all Devices registered with the Account.
      tags:
        - MicrovisorV1Device
      parameters:
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
                $ref: '#/components/schemas/ListDeviceResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListDevice
      x-maturity:
        - Preview
  '/v1/Devices/{Sid}':
    servers:
      - url: 'https://microvisor.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - unique_name
      pathType: instance
      dependentProperties:
        device_configs:
          mapping:
            device_sid: sid
          resource_url: '/v1/Devices/{device_sid}/Configs'
        device_secrets:
          mapping:
            device_sid: sid
          resource_url: '/v1/Devices/{device_sid}/Secrets'
    get:
      description: Fetch a specific Device.
      tags:
        - MicrovisorV1Device
      parameters:
        - name: Sid
          in: path
          description: A 34-character string that uniquely identifies this Device.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.device'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchDevice
      x-maturity:
        - Preview
    post:
      description: Update a specific Device.
      tags:
        - MicrovisorV1Device
      parameters:
        - name: Sid
          in: path
          description: A 34-character string that uniquely identifies this Device.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.device'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateDevice
      x-maturity:
        - Preview
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateDeviceRequest'
  '/v1/Devices/{DeviceSid}/Configs':
    servers:
      - url: 'https://microvisor.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties: []
      pathType: list
      parent: '/Devices/{Sid}'
      mountName: device_configs
    get:
      description: Retrieve a list of all Configs for a Device.
      tags:
        - MicrovisorV1DeviceConfig
      parameters:
        - name: DeviceSid
          in: path
          description: A 34-character string that uniquely identifies the Device.
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
                $ref: '#/components/schemas/ListDeviceConfigResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListDeviceConfig
      x-maturity:
        - Preview
    post:
      description: Create a config for a Microvisor Device.
      tags:
        - MicrovisorV1DeviceConfig
      parameters:
        - name: DeviceSid
          in: path
          description: A 34-character string that uniquely identifies the Device.
          schema:
            type: string
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.device.device_config'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateDeviceConfig
      x-maturity:
        - Preview
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateDeviceConfigRequest'
  '/v1/Devices/{DeviceSid}/Configs/{Key}':
    servers:
      - url: 'https://microvisor.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties: []
      pathType: instance
      parent: '/Devices/{Sid}'
      mountName: device_configs
    get:
      description: Retrieve a Config for a Device.
      tags:
        - MicrovisorV1DeviceConfig
      parameters:
        - name: DeviceSid
          in: path
          description: A 34-character string that uniquely identifies the Device.
          schema:
            type: string
          required: true
        - name: Key
          in: path
          description: The config key; up to 100 characters.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.device.device_config'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchDeviceConfig
      x-maturity:
        - Preview
    post:
      description: Update a config for a Microvisor Device.
      tags:
        - MicrovisorV1DeviceConfig
      parameters:
        - name: DeviceSid
          in: path
          description: A 34-character string that uniquely identifies the Device.
          schema:
            type: string
          required: true
        - name: Key
          in: path
          description: The config key; up to 100 characters.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.device.device_config'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateDeviceConfig
      x-maturity:
        - Preview
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateDeviceConfigRequest'
    delete:
      description: Delete a config for a Microvisor Device.
      tags:
        - MicrovisorV1DeviceConfig
      parameters:
        - name: DeviceSid
          in: path
          description: A 34-character string that uniquely identifies the Device.
          schema:
            type: string
          required: true
        - name: Key
          in: path
          description: The config key; up to 100 characters.
          schema:
            type: string
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteDeviceConfig
      x-maturity:
        - Preview
  '/v1/Devices/{DeviceSid}/Secrets':
    servers:
      - url: 'https://microvisor.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties: []
      pathType: list
      parent: '/Devices/{Sid}'
      mountName: device_secrets
    get:
      description: Retrieve a list of all Secrets for a Device.
      tags:
        - MicrovisorV1DeviceSecret
      parameters:
        - name: DeviceSid
          in: path
          description: A 34-character string that uniquely identifies the Device.
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
                $ref: '#/components/schemas/ListDeviceSecretResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListDeviceSecret
      x-maturity:
        - Preview
    post:
      description: Create a secret for a Microvisor Device.
      tags:
        - MicrovisorV1DeviceSecret
      parameters:
        - name: DeviceSid
          in: path
          description: A 34-character string that uniquely identifies the Device.
          schema:
            type: string
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.device.device_secret'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateDeviceSecret
      x-maturity:
        - Preview
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateDeviceSecretRequest'
  '/v1/Devices/{DeviceSid}/Secrets/{Key}':
    servers:
      - url: 'https://microvisor.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties: []
      pathType: instance
      parent: '/Devices/{Sid}'
      mountName: device_secrets
    get:
      description: Retrieve a Secret for a Device.
      tags:
        - MicrovisorV1DeviceSecret
      parameters:
        - name: DeviceSid
          in: path
          description: A 34-character string that uniquely identifies the Device.
          schema:
            type: string
          required: true
        - name: Key
          in: path
          description: The secret key; up to 100 characters.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.device.device_secret'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchDeviceSecret
      x-maturity:
        - Preview
    post:
      description: Update a secret for a Microvisor Device.
      tags:
        - MicrovisorV1DeviceSecret
      parameters:
        - name: DeviceSid
          in: path
          description: A 34-character string that uniquely identifies the Device.
          schema:
            type: string
          required: true
        - name: Key
          in: path
          description: The secret key; up to 100 characters.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/microvisor.v1.device.device_secret'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateDeviceSecret
      x-maturity:
        - Preview
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateDeviceSecretRequest'
    delete:
      description: Delete a secret for a Microvisor Device.
      tags:
        - MicrovisorV1DeviceSecret
      parameters:
        - name: DeviceSid
          in: path
          description: A 34-character string that uniquely identifies the Device.
          schema:
            type: string
          required: true
        - name: Key
          in: path
          description: The secret key; up to 100 characters.
          schema:
            type: string
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteDeviceSecret
      x-maturity:
        - Preview
servers:
  - url: 'https://microvisor.twilio.com'
tags:
  - name: MicrovisorV1AccountConfig
  - name: MicrovisorV1AccountSecret
  - name: MicrovisorV1App
  - name: MicrovisorV1AppManifest
  - name: MicrovisorV1Device
  - name: MicrovisorV1DeviceConfig
  - name: MicrovisorV1DeviceSecret
x-maturity:
  - name: Preview
    description: >-
      PLEASE NOTE that this is a Preview product that is subject to change. Use
      it with caution. If you currently do not have developer preview access,
      please contact https://www.twilio.com/help/contact.
---