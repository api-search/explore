---
components:
  schemas:
    notify.v1.service.binding:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^BS[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique string that we created to identify the Binding resource.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) that created
            the Binding resource.
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^IS[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/notify/api/service-resource)
            the resource is associated with.
        credential_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Credential](https://www.twilio.com/docs/notify/api/credential-resource)
            resource to be used to send notifications to this Binding. If
            present, this overrides the Credential specified in the Service
            resource. Applicable only to `apn`, `fcm`, and `gcm` type Bindings.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date and time in GMT when the resource was created specified in
            [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date and time in GMT when the resource was last updated
            specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt)
            format.
        notification_protocol_version:
          type: string
          nullable: true
          description: >-
            The protocol version to use to send the notification. This defaults
            to the value of `default_xxxx_notification_protocol_version` in the
            [Service](https://www.twilio.com/docs/notify/api/service-resource)
            for the protocol. The current version is `"3"` for `apn`, `fcm`, and
            `gcm` type Bindings. The parameter is not applicable to `sms` and
            `facebook-messenger` type Bindings as the data format is fixed.
        endpoint:
          type: string
          nullable: true
          description: Deprecated.
        identity:
          type: string
          nullable: true
          description: >-
            The `identity` value that uniquely identifies the resource's
            [User](https://www.twilio.com/docs/chat/rest/user-resource) within
            the
            [Service](https://www.twilio.com/docs/notify/api/service-resource).
            Up to 20 Bindings can be created for the same Identity in a given
            Service.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 120
        binding_type:
          type: string
          nullable: true
          description: >-
            The transport technology to use for the Binding. Can be: `apn`,
            `fcm`, `gcm`, `sms`, or `facebook-messenger`.
        address:
          type: string
          nullable: true
          description: >-
            The channel-specific address. For APNS, the device token. For FCM
            and GCM, the registration token. For SMS, a phone number in E.164
            format. For Facebook Messenger, the Messenger ID of the user or a
            phone number in E.164 format.
          x-twilio:
            pii:
              handling: sensitive
              deleteSla: 120
        tags:
          type: array
          items:
            type: string
          nullable: true
          description: >-
            The list of tags associated with this Binding. Tags can be used to
            select the Bindings to use when sending a notification. Maximum 20
            tags are allowed.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 120
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the Binding resource.
        links:
          type: object
          format: uri-map
          nullable: true
          description: The URLs of related resources.
    binding_enum_binding_type:
      type: string
      enum:
        - apn
        - gcm
        - sms
        - fcm
        - facebook-messenger
        - alexa
    notify.v1.credential:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the Credential
            resource.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) that created
            the Credential resource.
        friendly_name:
          type: string
          nullable: true
          description: The string that you assigned to describe the resource.
        type:
          type: string
          $ref: '#/components/schemas/credential_enum_push_service'
          nullable: true
          description: 'The Credential type. Can be: `gcm`, `fcm`, or `apn`.'
        sandbox:
          type: string
          nullable: true
          description: >-
            [APN only] Whether to send the credential to sandbox APNs. Can be
            `true` to send to sandbox APNs or `false` to send to production.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date and time in GMT when the resource was created specified in
            [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date and time in GMT when the resource was last updated
            specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt)
            format.
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the Credential resource.
    credential_enum_push_service:
      type: string
      enum:
        - gcm
        - apn
        - fcm
    notify.v1.service.notification:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^NT[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the Notification
            resource.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) that created
            the Notification resource.
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^IS[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/notify/api/service-resource)
            the resource is associated with.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date and time in GMT when the resource was created specified in
            [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
        identities:
          type: array
          items:
            type: string
          nullable: true
          description: >-
            The list of `identity` values of the Users to notify. We will
            attempt to deliver notifications only to Bindings with an identity
            in this list.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 120
        tags:
          type: array
          items:
            type: string
          nullable: true
          description: >-
            The tags that select the Bindings to notify. Notifications will be
            attempted only to Bindings that have all of the tags listed in this
            property.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 120
        segments:
          type: array
          items:
            type: string
          nullable: true
          description: >-
            The list of Segments to notify. The
            [Segment](https://www.twilio.com/docs/notify/api/segment-resource)
            resource is deprecated. Use the `tags` property, instead.
        priority:
          type: string
          $ref: '#/components/schemas/notification_enum_priority'
          nullable: true
          description: >-
            The priority of the notification. Can be: `low` or `high` and the
            default is `high`. A value of `low` optimizes the client app's
            battery consumption; however, notifications may be delivered with
            unspecified delay. For FCM and GCM, `low` priority is the same as
            `Normal` priority. For APNS `low` priority is the same as `5`. A
            value of `high` sends the notification immediately, and can wake up
            a sleeping device. For FCM and GCM, `high` is the same as `High`
            priority. For APNS, `high` is a priority `10`. SMS does not support
            this property.
        ttl:
          type: integer
          nullable: true
          description: >-
            How long, in seconds, the notification is valid. Can be an integer
            between 0 and 2,419,200, which is 4 weeks, the default and the
            maximum supported time to live (TTL). Delivery should be attempted
            if the device is offline until the TTL elapses. Zero means that the
            notification delivery is attempted immediately, only once, and is
            not stored for future delivery. SMS does not support this property.
        title:
          type: string
          nullable: true
          description: >-
            The notification title. For FCM and GCM, this translates to the
            `data.twi_title` value. For APNS, this translates to the
            `aps.alert.title` value. SMS does not support this property. This
            field is not visible on iOS phones and tablets but appears on Apple
            Watch and Android devices.
        body:
          type: string
          nullable: true
          description: >-
            The notification text. For FCM and GCM, translates to
            `data.twi_body`. For APNS, translates to `aps.alert.body`. For SMS,
            translates to `body`. SMS requires either this `body` value, or
            `media_urls` attribute defined in the `sms` parameter of the
            notification.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 0
        sound:
          type: string
          nullable: true
          description: >-
            The name of the sound to be played for the notification. For FCM and
            GCM, this Translates to `data.twi_sound`.  For APNS, this translates
            to `aps.sound`.  SMS does not support this property.
        action:
          type: string
          nullable: true
          description: >-
            The actions to display for the notification. For APNS, translates to
            the `aps.category` value. For GCM, translates to the
            `data.twi_action` value. For SMS, this parameter is not supported
            and is omitted from deliveries to those channels.
        data:
          nullable: true
          description: >-
            The custom key-value pairs of the notification's payload. For FCM
            and GCM, this value translates to `data` in the FCM and GCM
            payloads. FCM and GCM [reserve certain
            keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref)
            that cannot be used in those channels. For APNS, attributes of
            `data` are inserted into the APNS payload as custom properties
            outside of the `aps` dictionary. In all channels, we reserve keys
            that start with `twi_` for future use. Custom keys that start with
            `twi_` are not allowed and are rejected as 400 Bad request with no
            delivery attempted. For SMS, this parameter is not supported and is
            omitted from deliveries to those channels.
        apn:
          nullable: true
          description: >-
            The APNS-specific payload that overrides corresponding attributes in
            the generic payload for APNS Bindings. This property maps to the
            APNS `Payload` item, therefore the `aps` key must be used to change
            standard attributes. Adds custom key-value pairs to the root of the
            dictionary. See the [APNS
            documentation](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CommunicatingwithAPNs.html)
            for more details. We reserve keys that start with `twi_` for future
            use. Custom keys that start with `twi_` are not allowed.
        gcm:
          nullable: true
          description: >-
            The GCM-specific payload that overrides corresponding attributes in
            the generic payload for GCM Bindings.  This property maps to the
            root JSON dictionary. Target parameters `to`, `registration_ids`,
            and `notification_key` are not allowed. We reserve keys that start
            with `twi_` for future use. Custom keys that start with `twi_` are
            not allowed.
        fcm:
          nullable: true
          description: >-
            The FCM-specific payload that overrides corresponding attributes in
            the generic payload for FCM Bindings. This property maps to the root
            JSON dictionary. See the [FCM
            documentation](https://firebase.google.com/docs/cloud-messaging/http-server-ref#downstream)
            for more details. Target parameters `to`, `registration_ids`,
            `condition`, and `notification_key` are not allowed in this
            parameter. We reserve keys that start with `twi_` for future use.
            Custom keys that start with `twi_` are not allowed. FCM also
            [reserves certain
            keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref),
            which cannot be used in that channel.
        sms:
          nullable: true
          description: >-
            The SMS-specific payload that overrides corresponding attributes in
            the generic payload for SMS Bindings.  Each attribute in this value
            maps to the corresponding `form` parameter of the Twilio
            [Message](https://www.twilio.com/docs/sms/api/message-resource)
            resource.  These parameters of the Message resource are supported in
            snake case format: `body`, `media_urls`, `status_callback`, and
            `max_price`.  The `status_callback` parameter overrides the
            corresponding parameter in the messaging service, if configured. The
            `media_urls` property expects a JSON array.
        facebook_messenger:
          nullable: true
          description: Deprecated.
        alexa:
          nullable: true
          description: Deprecated.
    notification_enum_priority:
      type: string
      enum:
        - high
        - low
    notify.v1.service:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^IS[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique string that we created to identify the Service resource.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) that created
            the Service resource.
        friendly_name:
          type: string
          nullable: true
          description: The string that you assigned to describe the resource.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date and time in GMT when the resource was created specified in
            [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date and time in GMT when the resource was last updated
            specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt)
            format.
        apn_credential_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Credential](https://www.twilio.com/docs/notify/api/credential-resource)
            to use for APN Bindings.
        gcm_credential_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Credential](https://www.twilio.com/docs/notify/api/credential-resource)
            to use for GCM Bindings.
        fcm_credential_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Credential](https://www.twilio.com/docs/notify/api/credential-resource)
            to use for FCM Bindings.
        messaging_service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^MG[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the [Messaging
            Service](https://www.twilio.com/docs/sms/quickstart#messaging-services)
            to use for SMS Bindings. In order to send SMS notifications this
            parameter has to be set.
        facebook_messenger_page_id:
          type: string
          nullable: true
          description: Deprecated.
        default_apn_notification_protocol_version:
          type: string
          nullable: true
          description: >-
            The protocol version to use for sending APNS notifications. Can be
            overridden on a Binding by Binding basis when creating a
            [Binding](https://www.twilio.com/docs/notify/api/binding-resource)
            resource.
        default_gcm_notification_protocol_version:
          type: string
          nullable: true
          description: >-
            The protocol version to use for sending GCM notifications. Can be
            overridden on a Binding by Binding basis when creating a
            [Binding](https://www.twilio.com/docs/notify/api/binding-resource)
            resource.
        default_fcm_notification_protocol_version:
          type: string
          nullable: true
          description: >-
            The protocol version to use for sending FCM notifications. Can be
            overridden on a Binding by Binding basis when creating a
            [Binding](https://www.twilio.com/docs/notify/api/binding-resource)
            resource.
        log_enabled:
          type: boolean
          nullable: true
          description: >-
            Whether to log notifications. Can be: `true` or `false` and the
            default is `true`.
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the Service resource.
        links:
          type: object
          format: uri-map
          nullable: true
          description: >-
            The URLs of the Binding, Notification, Segment, and User resources
            related to the service.
        alexa_skill_id:
          type: string
          nullable: true
          description: Deprecated.
        default_alexa_notification_protocol_version:
          type: string
          nullable: true
          description: Deprecated.
        delivery_callback_url:
          type: string
          nullable: true
          description: URL to send delivery status callback.
        delivery_callback_enabled:
          type: boolean
          nullable: true
          description: >-
            Callback configuration that enables delivery callbacks, default
            false
    CreateBindingRequest:
      type: object
      required:
        - Identity
        - BindingType
        - Address
      properties:
        Identity:
          type: string
          description: >-
            The `identity` value that uniquely identifies the new resource's
            [User](https://www.twilio.com/docs/chat/rest/user-resource) within
            the
            [Service](https://www.twilio.com/docs/notify/api/service-resource).
            Up to 20 Bindings can be created for the same Identity in a given
            Service.
        BindingType:
          type: string
          $ref: '#/components/schemas/binding_enum_binding_type'
          description: >-
            The transport technology to use for the Binding. Can be: `apn`,
            `fcm`, `gcm`, `sms`, or `facebook-messenger`.
        Address:
          type: string
          description: >-
            The channel-specific address. For APNS, the device token. For FCM
            and GCM, the registration token. For SMS, a phone number in E.164
            format. For Facebook Messenger, the Messenger ID of the user or a
            phone number in E.164 format.
        Tag:
          type: array
          items:
            type: string
          description: >-
            A tag that can be used to select the Bindings to notify. Repeat this
            parameter to specify more than one tag, up to a total of 20 tags.
        NotificationProtocolVersion:
          type: string
          description: >-
            The protocol version to use to send the notification. This defaults
            to the value of `default_xxxx_notification_protocol_version` for the
            protocol in the
            [Service](https://www.twilio.com/docs/notify/api/service-resource).
            The current version is `"3"` for `apn`, `fcm`, and `gcm` type
            Bindings. The parameter is not applicable to `sms` and
            `facebook-messenger` type Bindings as the data format is fixed.
        CredentialSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: >-
            The SID of the
            [Credential](https://www.twilio.com/docs/notify/api/credential-resource)
            resource to be used to send notifications to this Binding. If
            present, this overrides the Credential specified in the Service
            resource. Applies to only `apn`, `fcm`, and `gcm` type Bindings.
        Endpoint:
          type: string
          description: Deprecated.
    ListBindingResponse:
      type: object
      properties:
        bindings:
          type: array
          items:
            $ref: '#/components/schemas/notify.v1.service.binding'
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
    ListCredentialResponse:
      type: object
      properties:
        credentials:
          type: array
          items:
            $ref: '#/components/schemas/notify.v1.credential'
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
    CreateCredentialRequest:
      type: object
      required:
        - Type
      properties:
        Type:
          type: string
          $ref: '#/components/schemas/credential_enum_push_service'
          description: 'The Credential type. Can be: `gcm`, `fcm`, or `apn`.'
        FriendlyName:
          type: string
          description: >-
            A descriptive string that you create to describe the resource. It
            can be up to 64 characters long.
        Certificate:
          type: string
          description: >-
            [APN only] The URL-encoded representation of the certificate. Strip
            everything outside of the headers, e.g. `-----BEGIN
            CERTIFICATE-----MIIFnTCCBIWgAwIBAgIIAjy9H849+E8wDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNV.....A==-----END
            CERTIFICATE-----`
        PrivateKey:
          type: string
          description: >-
            [APN only] The URL-encoded representation of the private key. Strip
            everything outside of the headers, e.g. `-----BEGIN RSA PRIVATE
            KEY-----MIIEpQIBAAKCAQEAuyf/lNrH9ck8DmNyo3fGgvCI1l9s+cmBY3WIz+cUDqmxiieR\n.-----END
            RSA PRIVATE KEY-----`
        Sandbox:
          type: boolean
          description: >-
            [APN only] Whether to send the credential to sandbox APNs. Can be
            `true` to send to sandbox APNs or `false` to send to production.
        ApiKey:
          type: string
          description: >-
            [GCM only] The `Server key` of your project from Firebase console
            under Settings / Cloud messaging.
        Secret:
          type: string
          description: >-
            [FCM only] The `Server key` of your project from Firebase console
            under Settings / Cloud messaging.
    UpdateCredentialRequest:
      type: object
      properties:
        FriendlyName:
          type: string
          description: >-
            A descriptive string that you create to describe the resource. It
            can be up to 64 characters long.
        Certificate:
          type: string
          description: >-
            [APN only] The URL-encoded representation of the certificate. Strip
            everything outside of the headers, e.g. `-----BEGIN
            CERTIFICATE-----MIIFnTCCBIWgAwIBAgIIAjy9H849+E8wDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNV.....A==-----END
            CERTIFICATE-----`
        PrivateKey:
          type: string
          description: >-
            [APN only] The URL-encoded representation of the private key. Strip
            everything outside of the headers, e.g. `-----BEGIN RSA PRIVATE
            KEY-----MIIEpQIBAAKCAQEAuyf/lNrH9ck8DmNyo3fGgvCI1l9s+cmBY3WIz+cUDqmxiieR\n.-----END
            RSA PRIVATE KEY-----`
        Sandbox:
          type: boolean
          description: >-
            [APN only] Whether to send the credential to sandbox APNs. Can be
            `true` to send to sandbox APNs or `false` to send to production.
        ApiKey:
          type: string
          description: >-
            [GCM only] The `Server key` of your project from Firebase console
            under Settings / Cloud messaging.
        Secret:
          type: string
          description: >-
            [FCM only] The `Server key` of your project from Firebase console
            under Settings / Cloud messaging.
    CreateNotificationRequest:
      type: object
      properties:
        Body:
          type: string
          description: >-
            The notification text. For FCM and GCM, translates to
            `data.twi_body`. For APNS, translates to `aps.alert.body`. For SMS,
            translates to `body`. SMS requires either this `body` value, or
            `media_urls` attribute defined in the `sms` parameter of the
            notification.
        Priority:
          type: string
          $ref: '#/components/schemas/notification_enum_priority'
          description: >-
            The priority of the notification. Can be: `low` or `high` and the
            default is `high`. A value of `low` optimizes the client app's
            battery consumption; however, notifications may be delivered with
            unspecified delay. For FCM and GCM, `low` priority is the same as
            `Normal` priority. For APNS `low` priority is the same as `5`. A
            value of `high` sends the notification immediately, and can wake up
            a sleeping device. For FCM and GCM, `high` is the same as `High`
            priority. For APNS, `high` is a priority `10`. SMS does not support
            this property.
        Ttl:
          type: integer
          description: >-
            How long, in seconds, the notification is valid. Can be an integer
            between 0 and 2,419,200, which is 4 weeks, the default and the
            maximum supported time to live (TTL). Delivery should be attempted
            if the device is offline until the TTL elapses. Zero means that the
            notification delivery is attempted immediately, only once, and is
            not stored for future delivery. SMS does not support this property.
        Title:
          type: string
          description: >-
            The notification title. For FCM and GCM, this translates to the
            `data.twi_title` value. For APNS, this translates to the
            `aps.alert.title` value. SMS does not support this property. This
            field is not visible on iOS phones and tablets but appears on Apple
            Watch and Android devices.
        Sound:
          type: string
          description: >-
            The name of the sound to be played for the notification. For FCM and
            GCM, this Translates to `data.twi_sound`.  For APNS, this translates
            to `aps.sound`.  SMS does not support this property.
        Action:
          type: string
          description: >-
            The actions to display for the notification. For APNS, translates to
            the `aps.category` value. For GCM, translates to the
            `data.twi_action` value. For SMS, this parameter is not supported
            and is omitted from deliveries to those channels.
        Data:
          description: >-
            The custom key-value pairs of the notification's payload. For FCM
            and GCM, this value translates to `data` in the FCM and GCM
            payloads. FCM and GCM [reserve certain
            keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref)
            that cannot be used in those channels. For APNS, attributes of
            `data` are inserted into the APNS payload as custom properties
            outside of the `aps` dictionary. In all channels, we reserve keys
            that start with `twi_` for future use. Custom keys that start with
            `twi_` are not allowed and are rejected as 400 Bad request with no
            delivery attempted. For SMS, this parameter is not supported and is
            omitted from deliveries to those channels.
        Apn:
          description: >-
            The APNS-specific payload that overrides corresponding attributes in
            the generic payload for APNS Bindings. This property maps to the
            APNS `Payload` item, therefore the `aps` key must be used to change
            standard attributes. Adds custom key-value pairs to the root of the
            dictionary. See the [APNS
            documentation](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CommunicatingwithAPNs.html)
            for more details. We reserve keys that start with `twi_` for future
            use. Custom keys that start with `twi_` are not allowed.
        Gcm:
          description: >-
            The GCM-specific payload that overrides corresponding attributes in
            the generic payload for GCM Bindings.  This property maps to the
            root JSON dictionary. See the [GCM
            documentation](https://firebase.google.com/docs/cloud-messaging/http-server-ref)
            for more details. Target parameters `to`, `registration_ids`, and
            `notification_key` are not allowed. We reserve keys that start with
            `twi_` for future use. Custom keys that start with `twi_` are not
            allowed. GCM also [reserves certain
            keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref).
        Sms:
          description: >-
            The SMS-specific payload that overrides corresponding attributes in
            the generic payload for SMS Bindings.  Each attribute in this value
            maps to the corresponding `form` parameter of the Twilio
            [Message](https://www.twilio.com/docs/sms/quickstart) resource. 
            These parameters of the Message resource are supported in snake case
            format: `body`, `media_urls`, `status_callback`, and `max_price`. 
            The `status_callback` parameter overrides the corresponding
            parameter in the messaging service, if configured. The `media_urls`
            property expects a JSON array.
        FacebookMessenger:
          description: Deprecated.
        Fcm:
          description: >-
            The FCM-specific payload that overrides corresponding attributes in
            the generic payload for FCM Bindings. This property maps to the root
            JSON dictionary. See the [FCM
            documentation](https://firebase.google.com/docs/cloud-messaging/http-server-ref#downstream)
            for more details. Target parameters `to`, `registration_ids`,
            `condition`, and `notification_key` are not allowed in this
            parameter. We reserve keys that start with `twi_` for future use.
            Custom keys that start with `twi_` are not allowed. FCM also
            [reserves certain
            keys](https://firebase.google.com/docs/cloud-messaging/http-server-ref),
            which cannot be used in that channel.
        Segment:
          type: array
          items:
            type: string
          description: >-
            The Segment resource is deprecated. Use the `tag` parameter,
            instead.
        Alexa:
          description: Deprecated.
        ToBinding:
          type: array
          items:
            type: string
          description: >-
            The destination address specified as a JSON string.  Multiple
            `to_binding` parameters can be included but the total size of the
            request entity should not exceed 1MB. This is typically sufficient
            for 10,000 phone numbers.
        DeliveryCallbackUrl:
          type: string
          description: URL to send webhooks.
        Identity:
          type: array
          items:
            type: string
          description: >-
            The `identity` value that uniquely identifies the new resource's
            [User](https://www.twilio.com/docs/chat/rest/user-resource) within
            the
            [Service](https://www.twilio.com/docs/notify/api/service-resource).
            Delivery will be attempted only to Bindings with an Identity in this
            list. No more than 20 items are allowed in this list.
        Tag:
          type: array
          items:
            type: string
          description: >-
            A tag that selects the Bindings to notify. Repeat this parameter to
            specify more than one tag, up to a total of 5 tags. The implicit tag
            `all` is available to notify all Bindings in a Service instance.
            Similarly, the implicit tags `apn`, `fcm`, `gcm`, `sms` and
            `facebook-messenger` are available to notify all Bindings in a
            specific channel.
    CreateServiceRequest:
      type: object
      properties:
        FriendlyName:
          type: string
          description: >-
            A descriptive string that you create to describe the resource. It
            can be up to 64 characters long.
        ApnCredentialSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: >-
            The SID of the
            [Credential](https://www.twilio.com/docs/notify/api/credential-resource)
            to use for APN Bindings.
        GcmCredentialSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: >-
            The SID of the
            [Credential](https://www.twilio.com/docs/notify/api/credential-resource)
            to use for GCM Bindings.
        MessagingServiceSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^MG[0-9a-fA-F]{32}$'
          description: >-
            The SID of the [Messaging
            Service](https://www.twilio.com/docs/sms/quickstart#messaging-services)
            to use for SMS Bindings. This parameter must be set in order to send
            SMS notifications.
        FacebookMessengerPageId:
          type: string
          description: Deprecated.
        DefaultApnNotificationProtocolVersion:
          type: string
          description: >-
            The protocol version to use for sending APNS notifications. Can be
            overridden on a Binding by Binding basis when creating a
            [Binding](https://www.twilio.com/docs/notify/api/binding-resource)
            resource.
        DefaultGcmNotificationProtocolVersion:
          type: string
          description: >-
            The protocol version to use for sending GCM notifications. Can be
            overridden on a Binding by Binding basis when creating a
            [Binding](https://www.twilio.com/docs/notify/api/binding-resource)
            resource.
        FcmCredentialSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: >-
            The SID of the
            [Credential](https://www.twilio.com/docs/notify/api/credential-resource)
            to use for FCM Bindings.
        DefaultFcmNotificationProtocolVersion:
          type: string
          description: >-
            The protocol version to use for sending FCM notifications. Can be
            overridden on a Binding by Binding basis when creating a
            [Binding](https://www.twilio.com/docs/notify/api/binding-resource)
            resource.
        LogEnabled:
          type: boolean
          description: >-
            Whether to log notifications. Can be: `true` or `false` and the
            default is `true`.
        AlexaSkillId:
          type: string
          description: Deprecated.
        DefaultAlexaNotificationProtocolVersion:
          type: string
          description: Deprecated.
        DeliveryCallbackUrl:
          type: string
          description: URL to send delivery status callback.
        DeliveryCallbackEnabled:
          type: boolean
          description: >-
            Callback configuration that enables delivery callbacks, default
            false
    ListServiceResponse:
      type: object
      properties:
        services:
          type: array
          items:
            $ref: '#/components/schemas/notify.v1.service'
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
    UpdateServiceRequest:
      type: object
      properties:
        FriendlyName:
          type: string
          description: >-
            A descriptive string that you create to describe the resource. It
            can be up to 64 characters long.
        ApnCredentialSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: >-
            The SID of the
            [Credential](https://www.twilio.com/docs/notify/api/credential-resource)
            to use for APN Bindings.
        GcmCredentialSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: >-
            The SID of the
            [Credential](https://www.twilio.com/docs/notify/api/credential-resource)
            to use for GCM Bindings.
        MessagingServiceSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^MG[0-9a-fA-F]{32}$'
          description: >-
            The SID of the [Messaging
            Service](https://www.twilio.com/docs/sms/quickstart#messaging-services)
            to use for SMS Bindings. This parameter must be set in order to send
            SMS notifications.
        FacebookMessengerPageId:
          type: string
          description: Deprecated.
        DefaultApnNotificationProtocolVersion:
          type: string
          description: >-
            The protocol version to use for sending APNS notifications. Can be
            overridden on a Binding by Binding basis when creating a
            [Binding](https://www.twilio.com/docs/notify/api/binding-resource)
            resource.
        DefaultGcmNotificationProtocolVersion:
          type: string
          description: >-
            The protocol version to use for sending GCM notifications. Can be
            overridden on a Binding by Binding basis when creating a
            [Binding](https://www.twilio.com/docs/notify/api/binding-resource)
            resource.
        FcmCredentialSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: >-
            The SID of the
            [Credential](https://www.twilio.com/docs/notify/api/credential-resource)
            to use for FCM Bindings.
        DefaultFcmNotificationProtocolVersion:
          type: string
          description: >-
            The protocol version to use for sending FCM notifications. Can be
            overridden on a Binding by Binding basis when creating a
            [Binding](https://www.twilio.com/docs/notify/api/binding-resource)
            resource.
        LogEnabled:
          type: boolean
          description: >-
            Whether to log notifications. Can be: `true` or `false` and the
            default is `true`.
        AlexaSkillId:
          type: string
          description: Deprecated.
        DefaultAlexaNotificationProtocolVersion:
          type: string
          description: Deprecated.
        DeliveryCallbackUrl:
          type: string
          description: URL to send delivery status callback.
        DeliveryCallbackEnabled:
          type: boolean
          description: >-
            Callback configuration that enables delivery callbacks, default
            false
  securitySchemes:
    accountSid_authToken:
      type: http
      scheme: basic
info:
  title: Twilio - Notify
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
  '/v1/Services/{ServiceSid}/Bindings/{Sid}':
    servers:
      - url: 'https://notify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - identity
        - endpoint
        - binding_type
        - address
      pathType: instance
      parent: '/Services/{Sid}'
    get:
      description: ''
      tags:
        - NotifyV1Binding
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/notify/api/service-resource)
            to fetch the resource from.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^IS[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Binding
            resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^BS[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/notify.v1.service.binding'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchBinding
      x-maturity:
        - Beta
    delete:
      description: ''
      tags:
        - NotifyV1Binding
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/notify/api/service-resource)
            to delete the resource from.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^IS[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Binding
            resource to delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^BS[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteBinding
      x-maturity:
        - Beta
  '/v1/Services/{ServiceSid}/Bindings':
    servers:
      - url: 'https://notify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - identity
        - endpoint
        - binding_type
        - address
      pathType: list
      parent: '/Services/{Sid}'
    post:
      description: ''
      tags:
        - NotifyV1Binding
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/notify/api/service-resource)
            to create the resource under.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^IS[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/notify.v1.service.binding'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateBinding
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateBindingRequest'
    get:
      description: ''
      tags:
        - NotifyV1Binding
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/notify/api/service-resource)
            to read the resource from.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^IS[0-9a-fA-F]{32}$'
          required: true
        - name: StartDate
          in: query
          description: >-
            Only include usage that has occurred on or after this date. Specify
            the date in GMT and format as `YYYY-MM-DD`.
          schema:
            type: string
            format: date
        - name: EndDate
          in: query
          description: >-
            Only include usage that occurred on or before this date. Specify the
            date in GMT and format as `YYYY-MM-DD`.
          schema:
            type: string
            format: date
        - name: Identity
          in: query
          description: >-
            The [User](https://www.twilio.com/docs/chat/rest/user-resource)'s
            `identity` value of the resources to read.
          schema:
            type: array
            items:
              type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 120
        - name: Tag
          in: query
          description: >-
            Only list Bindings that have all of the specified Tags. The
            following implicit tags are available: `all`, `apn`, `fcm`, `gcm`,
            `sms`, `facebook-messenger`. Up to 5 tags are allowed.
          schema:
            type: array
            items:
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
                $ref: '#/components/schemas/ListBindingResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListBinding
      x-maturity:
        - Beta
  /v1/Credentials:
    servers:
      - url: 'https://notify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - type
      pathType: list
    get:
      description: ''
      tags:
        - NotifyV1Credential
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
                $ref: '#/components/schemas/ListCredentialResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListCredential
      x-maturity:
        - Beta
    post:
      description: ''
      tags:
        - NotifyV1Credential
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/notify.v1.credential'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateCredential
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateCredentialRequest'
  '/v1/Credentials/{Sid}':
    servers:
      - url: 'https://notify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - type
      pathType: instance
    get:
      description: ''
      tags:
        - NotifyV1Credential
      parameters:
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Credential
            resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^CR[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/notify.v1.credential'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchCredential
      x-maturity:
        - Beta
    post:
      description: ''
      tags:
        - NotifyV1Credential
      parameters:
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Credential
            resource to update.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^CR[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/notify.v1.credential'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateCredential
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateCredentialRequest'
    delete:
      description: ''
      tags:
        - NotifyV1Credential
      parameters:
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Credential
            resource to delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^CR[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteCredential
      x-maturity:
        - Beta
  '/v1/Services/{ServiceSid}/Notifications':
    servers:
      - url: 'https://notify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - priority
        - title
      pathType: list
      parent: '/Services/{Sid}'
    post:
      description: ''
      tags:
        - NotifyV1Notification
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/notify/api/service-resource)
            to create the resource under.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^IS[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/notify.v1.service.notification'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateNotification
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateNotificationRequest'
      x-twilio:
        conditional:
          - - identity
            - tag
  /v1/Services:
    servers:
      - url: 'https://notify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - date_created
      pathType: list
      dependentProperties:
        bindings:
          mapping:
            service_sid: sid
          resource_url: '/v1/Services/{service_sid}/Bindings'
        notifications:
          mapping:
            service_sid: sid
          resource_url: '/v1/Services/{service_sid}/Notifications'
        users:
          mapping:
            service_sid: sid
          resource_url: '/v1/Services/{service_sid}/Users'
        segments:
          mapping:
            service_sid: sid
          resource_url: '/v1/Services/{service_sid}/Segments'
    post:
      description: ''
      tags:
        - NotifyV1Service
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/notify.v1.service'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateService
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateServiceRequest'
    get:
      description: ''
      tags:
        - NotifyV1Service
      parameters:
        - name: FriendlyName
          in: query
          description: The string that identifies the Service resources to read.
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
                $ref: '#/components/schemas/ListServiceResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListService
      x-maturity:
        - Beta
  '/v1/Services/{Sid}':
    servers:
      - url: 'https://notify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - date_created
      pathType: instance
      dependentProperties:
        bindings:
          mapping:
            service_sid: sid
          resource_url: '/v1/Services/{service_sid}/Bindings'
        notifications:
          mapping:
            service_sid: sid
          resource_url: '/v1/Services/{service_sid}/Notifications'
        users:
          mapping:
            service_sid: sid
          resource_url: '/v1/Services/{service_sid}/Users'
        segments:
          mapping:
            service_sid: sid
          resource_url: '/v1/Services/{service_sid}/Segments'
    delete:
      description: ''
      tags:
        - NotifyV1Service
      parameters:
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Service
            resource to delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^IS[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteService
      x-maturity:
        - Beta
    get:
      description: ''
      tags:
        - NotifyV1Service
      parameters:
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Service
            resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^IS[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/notify.v1.service'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchService
      x-maturity:
        - Beta
    post:
      description: ''
      tags:
        - NotifyV1Service
      parameters:
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Service
            resource to update.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^IS[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/notify.v1.service'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateService
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateServiceRequest'
servers:
  - url: 'https://notify.twilio.com'
tags:
  - name: NotifyV1Binding
  - name: NotifyV1Credential
  - name: NotifyV1Notification
  - name: NotifyV1Service
x-maturity:
  - name: Beta
    description: >-
      PLEASE NOTE that this is a Beta product that is subject to change. Use it
      with caution.
---