---
components:
  schemas:
    verify.v2.service.access_token:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^YK[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34 character string that uniquely identifies this Access Token.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Account.
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VA[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Verify Service.
        entity_identity:
          type: string
          nullable: true
          description: The unique external identifier for the Entity of the Service.
        factor_type:
          type: string
          $ref: '#/components/schemas/access_token_enum_factor_types'
          nullable: true
          description: The Type of the Factor. Currently only `push` is supported.
        factor_friendly_name:
          type: string
          nullable: true
          description: >-
            A human readable description of this factor, up to 64 characters.
            For a push factor, this can be the device's name.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        token:
          type: string
          nullable: true
          description: >-
            The access token generated for enrollment, this is an encrypted json
            web token.
        url:
          type: string
          format: uri
          nullable: true
          description: The URL of this resource.
        ttl:
          type: integer
          nullable: true
          description: 'How long, in seconds, the access token is valid. Max: 5 minutes'
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this access token was created, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
    access_token_enum_factor_types:
      type: string
      enum:
        - push
    verify.v2.service.rate_limit.bucket:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^BL[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34 character string that uniquely identifies this Bucket.
        rate_limit_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^RK[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The Twilio-provided string that uniquely identifies the Rate Limit
            resource.
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VA[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) the
            resource is associated with.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) that created
            the Rate Limit resource.
        max:
          type: integer
          nullable: true
          description: Maximum number of requests permitted in during the interval.
        interval:
          type: integer
          nullable: true
          description: Number of seconds that the rate limit will be enforced over.
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
          description: The URL of this resource.
    verify.v2.service.entity.challenge:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^YC[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34 character string that uniquely identifies this Challenge.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Account.
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VA[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Service.
        entity_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^YE[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Entity.
        identity:
          type: string
          nullable: true
          description: >-
            Customer unique identity for the Entity owner of the Challenge. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        factor_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^YF[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Factor.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Challenge was created, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Challenge was updated, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        date_responded:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Challenge was responded, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        expiration_date:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date-time when this Challenge expires, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format. The default
            value is five (5) minutes after Challenge creation. The max value is
            sixty (60) minutes after creation.
        status:
          type: string
          $ref: '#/components/schemas/challenge_enum_challenge_statuses'
          nullable: true
          description: >-
            The Status of this Challenge. One of `pending`, `expired`,
            `approved` or `denied`.
        responded_reason:
          type: string
          $ref: '#/components/schemas/challenge_enum_challenge_reasons'
          nullable: true
          description: >-
            Reason for the Challenge to be in certain `status`. One of `none`,
            `not_needed` or `not_requested`.
        details:
          nullable: true
          description: >-
            Details provided to give context about the Challenge. Intended to be
            shown to the end user.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        hidden_details:
          nullable: true
          description: >-
            Details provided to give context about the Challenge. Intended to be
            hidden from the end user. It must be a stringified JSON with only
            strings values eg. `{"ip": "172.168.1.234"}`
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        metadata:
          nullable: true
          description: >-
            Custom metadata associated with the challenge. This is added by the
            Device/SDK directly to allow for the inclusion of device
            information. It must be a stringified JSON with only strings values
            eg. `{"os": "Android"}`. Can be up to 1024 characters in length.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        factor_type:
          type: string
          $ref: '#/components/schemas/challenge_enum_factor_types'
          nullable: true
          description: >-
            The Factor Type of this Challenge. Currently `push` and `totp` are
            supported.
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
            Challenge.
    challenge_enum_challenge_statuses:
      type: string
      enum:
        - pending
        - expired
        - approved
        - denied
    challenge_enum_challenge_reasons:
      type: string
      enum:
        - none
        - not_needed
        - not_requested
    challenge_enum_factor_types:
      type: string
      enum:
        - push
        - totp
    challenge_enum_list_orders:
      type: string
      enum:
        - asc
        - desc
    verify.v2.service.entity:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^YE[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34 character string that uniquely identifies this Entity.
        identity:
          type: string
          nullable: true
          description: >-
            The unique external identifier for the Entity of the Service. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Account.
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VA[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Service.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Entity was created, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Entity was updated, given in [ISO
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
          description: >-
            Contains a dictionary of URL links to nested resources of this
            Entity.
    verify.v2.service.entity.factor:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^YF[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34 character string that uniquely identifies this Factor.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Account.
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VA[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Service.
        entity_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^YE[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Entity.
        identity:
          type: string
          nullable: true
          description: >-
            Customer unique identity for the Entity owner of the Factor. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Factor was created, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Factor was updated, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        friendly_name:
          type: string
          nullable: true
          description: >-
            A human readable description of this resource, up to 64 characters.
            For a push factor, this can be the device's name.
        status:
          type: string
          $ref: '#/components/schemas/factor_enum_factor_statuses'
          nullable: true
          description: The Status of this Factor. One of `unverified` or `verified`.
        factor_type:
          type: string
          $ref: '#/components/schemas/factor_enum_factor_types'
          nullable: true
          description: The Type of this Factor. Currently `push` and `totp` are supported.
        config:
          nullable: true
          description: An object that contains configurations specific to a `factor_type`.
        metadata:
          nullable: true
          description: >-
            Custom metadata associated with the factor. This is added by the
            Device/SDK directly to allow for the inclusion of device
            information. It must be a stringified JSON with only strings values
            eg. `{"os": "Android"}`. Can be up to 1024 characters in length.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        url:
          type: string
          format: uri
          nullable: true
          description: The URL of this resource.
    factor_enum_factor_statuses:
      type: string
      enum:
        - unverified
        - verified
    factor_enum_factor_types:
      type: string
      enum:
        - push
        - totp
    factor_enum_notification_platforms:
      type: string
      enum:
        - apn
        - fcm
        - none
    factor_enum_totp_algorithms:
      type: string
      enum:
        - sha1
        - sha256
        - sha512
    verify.v2.form:
      type: object
      properties:
        form_type:
          type: string
          $ref: '#/components/schemas/form_enum_form_types'
          nullable: true
          description: The Type of this Form. Currently only `form-push` is supported.
        forms:
          nullable: true
          description: >-
            Object that contains the available forms for this type. This
            available forms are given in the standard [JSON
            Schema](https://json-schema.org/) format
        form_meta:
          nullable: true
          description: >-
            Additional information for the available forms for this type. E.g.
            The separator string used for `binding` in a Factor push.
        url:
          type: string
          format: uri
          nullable: true
          description: The URL to access the forms for this type.
    form_enum_form_types:
      type: string
      enum:
        - form-push
    verify.v2.service.messaging_configuration:
      type: object
      properties:
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
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VA[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) that the
            resource is associated with.
        country:
          type: string
          nullable: true
          description: >-
            The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
            country code of the country this configuration will be applied to.
            If this is a global configuration, Country will take the value
            `all`.
        messaging_service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^MG[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the [Messaging
            Service](https://www.twilio.com/docs/messaging/api/service-resource)
            to be used to send SMS to the country of this configuration.
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
          description: The URL of this resource.
    verify.v2.service.entity.new_factor:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^YF[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34 character string that uniquely identifies this Factor.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Account.
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VA[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Service.
        entity_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^YE[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Entity.
        identity:
          type: string
          nullable: true
          description: >-
            Customer unique identity for the Entity owner of the Factor. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        binding:
          nullable: true
          description: >-
            Contains the `factor_type` specific secret and metadata.

            For push, this is `binding.public_key` and `binding.alg`.

            For totp, this is `binding.secret` and `binding.uri`. The
            `binding.uri` property is generated following the [google
            authenticator key URI
            format](https://github.com/google/google-authenticator/wiki/Key-Uri-Format),
            and `Factor.friendly_name` is used for the “accountname” value and
            `Service.friendly_name` or `Service.totp.issuer` is used for the
            `issuer` value.



            The Binding property is ONLY returned upon Factor creation.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Factor was created, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Factor was updated, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        friendly_name:
          type: string
          nullable: true
          description: >-
            The friendly name of this Factor. This can be any string up to 64
            characters, meant for humans to distinguish between Factors.

            For `factor_type` `push`, this could be a device name.

            For `factor_type` `totp`, this value is used as the “account name”
            in constructing the `binding.uri` property.

            At the same time, we recommend avoiding providing PII.
        status:
          type: string
          $ref: '#/components/schemas/new_factor_enum_factor_statuses'
          nullable: true
          description: The Status of this Factor. One of `unverified` or `verified`.
        factor_type:
          type: string
          $ref: '#/components/schemas/new_factor_enum_factor_types'
          nullable: true
          description: The Type of this Factor. Currently `push` and `totp` are supported.
        config:
          nullable: true
          description: An object that contains configurations specific to a `factor_type`.
        metadata:
          nullable: true
          description: >-
            Custom metadata associated with the factor. This is added by the
            Device/SDK directly to allow for the inclusion of device
            information. It must be a stringified JSON with only strings values
            eg. `{"os": "Android"}`. Can be up to 1024 characters in length.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        url:
          type: string
          format: uri
          nullable: true
          description: The URL of this resource.
    new_factor_enum_factor_statuses:
      type: string
      enum:
        - unverified
        - verified
    new_factor_enum_factor_types:
      type: string
      enum:
        - push
        - totp
    new_factor_enum_notification_platforms:
      type: string
      enum:
        - apn
        - fcm
        - none
    new_factor_enum_totp_algorithms:
      type: string
      enum:
        - sha1
        - sha256
        - sha512
    verify.v2.service.entity.challenge.notification:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^NT[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34 character string that uniquely identifies this Notification.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Account.
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VA[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Service.
        entity_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^YE[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Entity.
        identity:
          type: string
          nullable: true
          description: >-
            Customer unique identity for the Entity owner of the Challenge. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        challenge_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^YC[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Challenge.
        priority:
          type: string
          nullable: true
          description: >-
            The priority of the notification. For `push` Challenges it's always
            `high` which sends the notification immediately, and can wake up a
            sleeping device.
        ttl:
          type: integer
          nullable: true
          description: 'How long, in seconds, the notification is valid. Max: 5 minutes'
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Notification was created, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
    verify.v2.service.rate_limit:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^RK[0-9a-fA-F]{32}$'
          nullable: true
          description: A 34 character string that uniquely identifies this Rate Limit.
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VA[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) the
            resource is associated with.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) that created
            the Rate Limit resource.
        unique_name:
          type: string
          nullable: true
          description: >-
            Provides a unique and addressable name to be assigned to this Rate
            Limit, assigned by the developer, to be optionally used in addition
            to SID. **This value should not contain PII.**
        description:
          type: string
          nullable: true
          description: Description of this Rate Limit
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
          description: The URL of this resource.
        links:
          type: object
          format: uri-map
          nullable: true
          description: The URLs of related resources.
    verify.v2.safelist:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^GN[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique string that we created to identify the SafeList resource.
        phone_number:
          type: string
          nullable: true
          description: The phone number in SafeList.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 0
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the SafeList resource.
    verify.v2.service:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VA[0-9a-fA-F]{32}$'
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
          description: >-
            The string that you assigned to describe the verification service.
            It can be up to 32 characters long. **This value should not contain
            PII.**
        code_length:
          type: integer
          nullable: true
          description: The length of the verification code to generate.
        lookup_enabled:
          type: boolean
          nullable: true
          description: >-
            Whether to perform a lookup with each verification started and
            return info about the phone number.
        psd2_enabled:
          type: boolean
          nullable: true
          description: >-
            Whether to pass PSD2 transaction parameters when starting a
            verification.
        skip_sms_to_landlines:
          type: boolean
          nullable: true
          description: >-
            Whether to skip sending SMS verifications to landlines. Requires
            `lookup_enabled`.
        dtmf_input_required:
          type: boolean
          nullable: true
          description: >-
            Whether to ask the user to press a number before delivering the
            verify code in a phone call.
        tts_name:
          type: string
          nullable: true
          description: >-
            The name of an alternative text-to-speech service to use in phone
            calls. Applies only to TTS languages.
        do_not_share_warning_enabled:
          type: boolean
          nullable: true
          description: >-
            Whether to add a security warning at the end of an SMS verification
            body. Disabled by default and applies only to SMS. Example SMS body:
            `Your AppName verification code is: 1234. Don’t share this code with
            anyone; our employees will never ask for the code`
        custom_code_enabled:
          type: boolean
          nullable: true
          description: >-
            Whether to allow sending verifications with a custom code instead of
            a randomly generated one. Not available for all customers.
        push:
          nullable: true
          description: >-
            Configurations for the Push factors (channel) created under this
            Service.
        totp:
          nullable: true
          description: >-
            Configurations for the TOTP factors (channel) created under this
            Service.
        default_template_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HJ[0-9a-fA-F]{32}$'
          nullable: true
        verify_event_subscription_enabled:
          type: boolean
          nullable: true
          description: >-
            Whether to allow verifications from the service to reach the
            stream-events sinks if configured
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
          description: The absolute URL of the resource.
        links:
          type: object
          format: uri-map
          nullable: true
          description: The URLs of related resources.
    verify.v2.service.verification:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VE[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the Verification
            resource.
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VA[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) the
            resource is associated with.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) that created
            the Verification resource.
        to:
          type: string
          nullable: true
          description: >-
            The phone number or
            [email](https://www.twilio.com/docs/verify/email) being verified.
            Phone numbers must be in [E.164
            format](https://www.twilio.com/docs/glossary/what-e164).
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        channel:
          type: string
          $ref: '#/components/schemas/verification_enum_channel'
          nullable: true
          description: >-
            The verification method used. One of:
            [`email`](https://www.twilio.com/docs/verify/email), `sms`,
            `whatsapp`, `call`, or `sna`.
        status:
          type: string
          nullable: true
          description: >-
            The status of the verification. One of: `pending`, `approved`, or
            `canceled`
        valid:
          type: boolean
          nullable: true
          description: >-
            Use "status" instead. Legacy property indicating whether the
            verification was successful.
        lookup:
          nullable: true
          description: Information about the phone number being verified.
        amount:
          type: string
          nullable: true
          description: >-
            The amount of the associated PSD2 compliant transaction. Requires
            the PSD2 Service flag enabled.
          x-twilio:
            pii:
              handling: sensitive
              deleteSla: 1
        payee:
          type: string
          nullable: true
          description: >-
            The payee of the associated PSD2 compliant transaction. Requires the
            PSD2 Service flag enabled.
          x-twilio:
            pii:
              handling: sensitive
              deleteSla: 1
        send_code_attempts:
          type: array
          items: {}
          nullable: true
          description: >-
            An array of verification attempt objects containing the channel
            attempted and the channel-specific transaction SID.
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
        sna:
          nullable: true
          description: >-
            The set of fields used for a silent network auth (`sna`)
            verification. Contains a single field with the URL to be invoked to
            verify the phone number.
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the Verification resource.
    verification_enum_channel:
      type: string
      enum:
        - sms
        - call
        - email
        - whatsapp
        - sna
    verification_enum_status:
      type: string
      enum:
        - canceled
        - approved
    verification_enum_risk_check:
      type: string
      enum:
        - enable
        - disable
    verify.v2.verification_attempt:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VL[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID that uniquely identifies the verification attempt resource.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) that created
            the Verification resource.
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VA[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) used to
            generate the attempt.
        verification_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VE[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Verification](https://www.twilio.com/docs/verify/api/verification)
            that generated the attempt.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Attempt was created, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Attempt was updated, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        conversion_status:
          type: string
          $ref: '#/components/schemas/verification_attempt_enum_conversion_status'
          nullable: true
          description: >-
            A string specifying the conversion status of the verification. A
            conversion happens when the user is able to provide the correct
            code. Possible values are `CONVERTED` and `UNCONVERTED`.
        channel:
          type: string
          $ref: '#/components/schemas/verification_attempt_enum_channels'
          nullable: true
          description: >-
            A string specifying the communication channel used for the
            verification attempt. i.e SMS, CALL, etc.
        price:
          nullable: true
          description: >-
            An object containing the charge for this verification attempt
            related to the channel costs and the currency used. The costs
            related to the succeeded verifications are not included. May not be
            immediately available. More information on pricing is available
            [here](https://www.twilio.com/en-us/verify/pricing).
        channel_data:
          nullable: true
          description: >-
            An object containing the channel specific information for an
            attempt.
        url:
          type: string
          format: uri
          nullable: true
    verification_attempt_enum_channels:
      type: string
      enum:
        - sms
        - call
        - email
        - whatsapp
    verification_attempt_enum_call_status:
      type: string
      enum:
        - queued
        - in-progress
        - completed
        - busy
        - failed
        - no-answer
        - ringing
        - canceled
    verification_attempt_enum_message_status:
      type: string
      enum:
        - queued
        - sending
        - sent
        - failed
        - delivered
        - undelivered
        - receiving
        - received
        - accepted
        - scheduled
        - read
        - partially_delivered
        - canceled
    verification_attempt_enum_conversion_status:
      type: string
      enum:
        - converted
        - unconverted
    verification_attempt_enum_attempt_status:
      type: string
      enum:
        - confirmed
        - unconfirmed
        - expired
    verify.v2.verification_attempts_summary:
      type: object
      properties:
        total_attempts:
          type: integer
          nullable: true
          description: Total of attempts made according to the provided filters
        total_converted:
          type: integer
          nullable: true
          description: >-
            Total of  attempts made that were confirmed by the end user,
            according to the provided filters.
        total_unconverted:
          type: integer
          nullable: true
          description: >-
            Total of attempts made that were not confirmed by the end user,
            according to the provided filters.
        conversion_rate_percentage:
          type: number
          nullable: true
          description: >-
            Percentage of the confirmed messages over the total, defined by
            (total_converted/total_attempts)*100. 
        url:
          type: string
          format: uri
          nullable: true
    verification_attempts_summary_enum_channels:
      type: string
      enum:
        - sms
        - call
        - email
        - whatsapp
    verify.v2.service.verification_check:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VE[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the VerificationCheck
            resource.
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VA[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) the
            resource is associated with.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) that created
            the VerificationCheck resource.
        to:
          type: string
          nullable: true
          description: >-
            The phone number or
            [email](https://www.twilio.com/docs/verify/email) being verified.
            Phone numbers must be in [E.164
            format](https://www.twilio.com/docs/glossary/what-e164).
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        channel:
          type: string
          $ref: '#/components/schemas/verification_check_enum_channel'
          nullable: true
          description: >-
            The verification method to use. One of:
            [`email`](https://www.twilio.com/docs/verify/email), `sms`,
            `whatsapp`, `call`, or `sna`.
        status:
          type: string
          nullable: true
          description: >-
            The status of the verification. Can be: `pending`, `approved`, or
            `canceled`.
        valid:
          type: boolean
          nullable: true
          description: >-
            Use "status" instead. Legacy property indicating whether the
            verification was successful.
        amount:
          type: string
          nullable: true
          description: >-
            The amount of the associated PSD2 compliant transaction. Requires
            the PSD2 Service flag enabled.
          x-twilio:
            pii:
              handling: sensitive
              deleteSla: 1
        payee:
          type: string
          nullable: true
          description: >-
            The payee of the associated PSD2 compliant transaction. Requires the
            PSD2 Service flag enabled.
          x-twilio:
            pii:
              handling: sensitive
              deleteSla: 1
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time
            in GMT when the Verification Check resource was created.
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: >-
            The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time
            in GMT when the Verification Check resource was last updated.
        sna_attempts_error_codes:
          type: array
          items: {}
          nullable: true
          description: >-
            List of error codes as a result of attempting a verification using
            the `sna` channel. The error codes are chronologically ordered, from
            the first attempt to the latest attempt. This will be an empty list
            if no errors occured or `null` if the last channel used wasn't
            `sna`.
    verification_check_enum_channel:
      type: string
      enum:
        - sms
        - call
        - email
        - whatsapp
        - sna
    verify.v2.verification_template:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HJ[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            A 34 character string that uniquely identifies a Verification
            Template.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Account.
        friendly_name:
          type: string
          nullable: true
          description: >-
            A descriptive string that you create to describe a Template. It can
            be up to 32 characters long.
        channels:
          type: array
          items:
            type: string
          nullable: true
          description: >-
            A list of channels that support the Template. Can include: sms,
            voice.
        translations:
          nullable: true
          description: >-
            An object that contains the different translations of the template.
            Every translation is identified by the language short name and
            contains its respective information as the approval status, text and
            created/modified date.
    verify.v2.service.webhook:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^YW[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique string that we created to identify the Webhook resource.
        service_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VA[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique SID identifier of the Service.
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
          description: >-
            The string that you assigned to describe the webhook. **This value
            should not contain PII.**
        event_types:
          type: array
          items:
            type: string
          nullable: true
          description: >-
            The array of events that this Webhook is subscribed to. Possible
            event types: `*, factor.deleted, factor.created, factor.verified,
            challenge.approved, challenge.denied`
        status:
          type: string
          $ref: '#/components/schemas/webhook_enum_status'
          nullable: true
          description: >-
            The webhook status. Default value is `enabled`. One of: `enabled` or
            `disabled`
        version:
          type: string
          $ref: '#/components/schemas/webhook_enum_version'
          nullable: true
          description: >-
            The webhook version. Default value is `v2` which includes all the
            latest fields. Version `v1` is legacy and may be removed in the
            future.
        webhook_url:
          type: string
          format: uri
          nullable: true
          description: The URL associated with this Webhook.
        webhook_method:
          type: string
          $ref: '#/components/schemas/webhook_enum_methods'
          nullable: true
          description: The method to be used when calling the webhook's URL.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date and time in GMT when the resource was created specified in
            [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date and time in GMT when the resource was last updated
            specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
            format.
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the Webhook resource.
    webhook_enum_status:
      type: string
      enum:
        - enabled
        - disabled
    webhook_enum_version:
      type: string
      enum:
        - v1
        - v2
    webhook_enum_methods:
      type: string
      enum:
        - GET
        - POST
    CreateAccessTokenRequest:
      type: object
      required:
        - Identity
        - FactorType
      properties:
        Identity:
          type: string
          description: >-
            The unique external identifier for the Entity of the Service. This
            identifier should be immutable, not PII, and generated by your
            external system, such as your user's UUID, GUID, or SID.
        FactorType:
          type: string
          $ref: '#/components/schemas/access_token_enum_factor_types'
          description: The Type of this Factor. Eg. `push`
        FactorFriendlyName:
          type: string
          description: >-
            The friendly name of the factor that is going to be created with
            this access token
        Ttl:
          type: integer
          description: >-
            How long, in seconds, the access token is valid. Can be an integer
            between 60 and 300. Default is 60.
    CreateBucketRequest:
      type: object
      required:
        - Max
        - Interval
      properties:
        Max:
          type: integer
          description: Maximum number of requests permitted in during the interval.
        Interval:
          type: integer
          description: Number of seconds that the rate limit will be enforced over.
    ListBucketResponse:
      type: object
      properties:
        buckets:
          type: array
          items:
            $ref: '#/components/schemas/verify.v2.service.rate_limit.bucket'
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
    UpdateBucketRequest:
      type: object
      properties:
        Max:
          type: integer
          description: Maximum number of requests permitted in during the interval.
        Interval:
          type: integer
          description: Number of seconds that the rate limit will be enforced over.
    CreateChallengeRequest:
      type: object
      required:
        - FactorSid
      properties:
        FactorSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^YF[0-9a-fA-F]{32}$'
          description: The unique SID identifier of the Factor.
        ExpirationDate:
          type: string
          format: date-time
          description: >-
            The date-time when this Challenge expires, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format. The default
            value is five (5) minutes after Challenge creation. The max value is
            sixty (60) minutes after creation.
        Details.Message:
          type: string
          description: >-
            Shown to the user when the push notification arrives. Required when
            `factor_type` is `push`. Can be up to 256 characters in length
        Details.Fields:
          type: array
          items: {}
          description: >-
            A list of objects that describe the Fields included in the
            Challenge. Each object contains the label and value of the field,
            the label can be up to 36 characters in length and the value can be
            up to 128 characters in length. Used when `factor_type` is `push`.
            There can be up to 20 details fields.
        HiddenDetails:
          description: >-
            Details provided to give context about the Challenge. Not shown to
            the end user. It must be a stringified JSON with only strings values
            eg. `{"ip": "172.168.1.234"}`. Can be up to 1024 characters in
            length
        AuthPayload:
          type: string
          description: >-
            Optional payload used to verify the Challenge upon creation. Only
            used with a Factor of type `totp` to carry the TOTP code that needs
            to be verified. For `TOTP` this value must be between 3 and 8
            characters long.
    ListChallengeResponse:
      type: object
      properties:
        challenges:
          type: array
          items:
            $ref: '#/components/schemas/verify.v2.service.entity.challenge'
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
    UpdateChallengeRequest:
      type: object
      properties:
        AuthPayload:
          type: string
          description: >-
            The optional payload needed to verify the Challenge. E.g., a TOTP
            would use the numeric code. For `TOTP` this value must be between 3
            and 8 characters long. For `Push` this value can be up to 5456
            characters in length
        Metadata:
          description: >-
            Custom metadata associated with the challenge. This is added by the
            Device/SDK directly to allow for the inclusion of device
            information. It must be a stringified JSON with only strings values
            eg. `{"os": "Android"}`. Can be up to 1024 characters in length.
    CreateEntityRequest:
      type: object
      required:
        - Identity
      properties:
        Identity:
          type: string
          description: >-
            The unique external identifier for the Entity of the Service. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
    ListEntityResponse:
      type: object
      properties:
        entities:
          type: array
          items:
            $ref: '#/components/schemas/verify.v2.service.entity'
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
    UpdateFactorRequest:
      type: object
      properties:
        AuthPayload:
          type: string
          description: >-
            The optional payload needed to verify the Factor for the first time.
            E.g. for a TOTP, the numeric code.
        FriendlyName:
          type: string
          description: The new friendly name of this Factor. It can be up to 64 characters.
        Config.NotificationToken:
          type: string
          description: >-
            For APN, the device token. For FCM, the registration token. It is
            used to send the push notifications. Required when `factor_type` is
            `push`. If specified, this value must be between 32 and 255
            characters long.
        Config.SdkVersion:
          type: string
          description: The Verify Push SDK version used to configure the factor
        Config.TimeStep:
          type: integer
          description: >-
            Defines how often, in seconds, are TOTP codes generated. i.e, a new
            TOTP code is generated every time_step seconds. Must be between 20
            and 60 seconds, inclusive
        Config.Skew:
          type: integer
          description: >-
            The number of time-steps, past and future, that are valid for
            validation of TOTP codes. Must be between 0 and 2, inclusive
        Config.CodeLength:
          type: integer
          description: >-
            Number of digits for generated TOTP codes. Must be between 3 and 8,
            inclusive
        Config.Alg:
          type: string
          $ref: '#/components/schemas/factor_enum_totp_algorithms'
          description: >-
            The algorithm used to derive the TOTP codes. Can be `sha1`, `sha256`
            or `sha512`
        Config.NotificationPlatform:
          type: string
          description: >-
            The transport technology used to generate the Notification Token.
            Can be `apn`, `fcm` or `none`.


            Required when `factor_type` is `push`.
    ListFactorResponse:
      type: object
      properties:
        factors:
          type: array
          items:
            $ref: '#/components/schemas/verify.v2.service.entity.factor'
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
    CreateNewFactorRequest:
      type: object
      required:
        - FriendlyName
        - FactorType
      properties:
        FriendlyName:
          type: string
          description: >-
            The friendly name of this Factor. This can be any string up to 64
            characters, meant for humans to distinguish between Factors.

            For `factor_type` `push`, this could be a device name.

            For `factor_type` `totp`, this value is used as the “account name”
            in constructing the `binding.uri` property.

            At the same time, we recommend avoiding providing PII.
        FactorType:
          type: string
          $ref: '#/components/schemas/new_factor_enum_factor_types'
          description: The Type of this Factor. Currently `push` and `totp` are supported.
        Binding.Alg:
          type: string
          description: >-
            The algorithm used when `factor_type` is `push`. Algorithm
            supported: `ES256`
        Binding.PublicKey:
          type: string
          description: |-
            The Ecdsa public key in PKIX, ASN.1 DER format encoded in Base64.

            Required when `factor_type` is `push`
        Config.AppId:
          type: string
          description: >-
            The ID that uniquely identifies your app in the Google or Apple
            store, such as `com.example.myapp`. It can be up to 100 characters
            long.


            Required when `factor_type` is `push`.
        Config.NotificationPlatform:
          type: string
          $ref: '#/components/schemas/new_factor_enum_notification_platforms'
          description: >-
            The transport technology used to generate the Notification Token.
            Can be `apn`, `fcm` or `none`.


            Required when `factor_type` is `push`.
        Config.NotificationToken:
          type: string
          description: >-
            For APN, the device token. For FCM, the registration token. It is
            used to send the push notifications. Must be between 32 and 255
            characters long.


            Required when `factor_type` is `push`.
        Config.SdkVersion:
          type: string
          description: |-
            The Verify Push SDK version used to configure the factor

            Required when `factor_type` is `push`
        Binding.Secret:
          type: string
          description: >-
            The shared secret for TOTP factors encoded in Base32. This can be
            provided when creating the Factor, otherwise it will be generated.


            Used when `factor_type` is `totp`
        Config.TimeStep:
          type: integer
          description: >-
            Defines how often, in seconds, are TOTP codes generated. i.e, a new
            TOTP code is generated every time_step seconds. Must be between 20
            and 60 seconds, inclusive. The default value is defined at the
            service level in the property `totp.time_step`. Defaults to 30
            seconds if not configured.


            Used when `factor_type` is `totp`
        Config.Skew:
          type: integer
          description: >-
            The number of time-steps, past and future, that are valid for
            validation of TOTP codes. Must be between 0 and 2, inclusive. The
            default value is defined at the service level in the property
            `totp.skew`. If not configured defaults to 1.


            Used when `factor_type` is `totp`
        Config.CodeLength:
          type: integer
          description: >-
            Number of digits for generated TOTP codes. Must be between 3 and 8,
            inclusive. The default value is defined at the service level in the
            property `totp.code_length`. If not configured defaults to 6.


            Used when `factor_type` is `totp`
        Config.Alg:
          type: string
          $ref: '#/components/schemas/new_factor_enum_totp_algorithms'
          description: >-
            The algorithm used to derive the TOTP codes. Can be `sha1`, `sha256`
            or `sha512`. Defaults to `sha1`.


            Used when `factor_type` is `totp`
        Metadata:
          description: >-
            Custom metadata associated with the factor. This is added by the
            Device/SDK directly to allow for the inclusion of device
            information. It must be a stringified JSON with only strings values
            eg. `{"os": "Android"}`. Can be up to 1024 characters in length.
    CreateMessagingConfigurationRequest:
      type: object
      required:
        - Country
        - MessagingServiceSid
      properties:
        Country:
          type: string
          description: >-
            The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
            country code of the country this configuration will be applied to.
            If this is a global configuration, Country will take the value
            `all`.
        MessagingServiceSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^MG[0-9a-fA-F]{32}$'
          description: >-
            The SID of the [Messaging
            Service](https://www.twilio.com/docs/messaging/api/service-resource)
            to be used to send SMS to the country of this configuration.
    ListMessagingConfigurationResponse:
      type: object
      properties:
        messaging_configurations:
          type: array
          items:
            $ref: '#/components/schemas/verify.v2.service.messaging_configuration'
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
    UpdateMessagingConfigurationRequest:
      type: object
      required:
        - MessagingServiceSid
      properties:
        MessagingServiceSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^MG[0-9a-fA-F]{32}$'
          description: >-
            The SID of the [Messaging
            Service](https://www.twilio.com/docs/messaging/api/service-resource)
            to be used to send SMS to the country of this configuration.
    CreateNotificationRequest:
      type: object
      properties:
        Ttl:
          type: integer
          description: >-
            How long, in seconds, the notification is valid. Can be an integer
            between 0 and 300. Default is 300. Delivery is attempted until the
            TTL elapses, even if the device is offline. 0 means that the
            notification delivery is attempted immediately, only once, and is
            not stored for future delivery.
    CreateRateLimitRequest:
      type: object
      required:
        - UniqueName
      properties:
        UniqueName:
          type: string
          description: >-
            Provides a unique and addressable name to be assigned to this Rate
            Limit, assigned by the developer, to be optionally used in addition
            to SID. **This value should not contain PII.**
        Description:
          type: string
          description: Description of this Rate Limit
    ListRateLimitResponse:
      type: object
      properties:
        rate_limits:
          type: array
          items:
            $ref: '#/components/schemas/verify.v2.service.rate_limit'
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
    UpdateRateLimitRequest:
      type: object
      properties:
        Description:
          type: string
          description: Description of this Rate Limit
    CreateSafelistRequest:
      type: object
      required:
        - PhoneNumber
      properties:
        PhoneNumber:
          type: string
          description: >-
            The phone number to be added in SafeList. Phone numbers must be in
            [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
    CreateServiceRequest:
      type: object
      required:
        - FriendlyName
      properties:
        FriendlyName:
          type: string
          description: >-
            A descriptive string that you create to describe the verification
            service. It can be up to 32 characters long. **This value should not
            contain PII.**
        CodeLength:
          type: integer
          description: >-
            The length of the verification code to generate. Must be an integer
            value between 4 and 10, inclusive.
        LookupEnabled:
          type: boolean
          description: >-
            Whether to perform a lookup with each verification started and
            return info about the phone number.
        SkipSmsToLandlines:
          type: boolean
          description: >-
            Whether to skip sending SMS verifications to landlines. Requires
            `lookup_enabled`.
        DtmfInputRequired:
          type: boolean
          description: >-
            Whether to ask the user to press a number before delivering the
            verify code in a phone call.
        TtsName:
          type: string
          description: >-
            The name of an alternative text-to-speech service to use in phone
            calls. Applies only to TTS languages.
        Psd2Enabled:
          type: boolean
          description: >-
            Whether to pass PSD2 transaction parameters when starting a
            verification.
        DoNotShareWarningEnabled:
          type: boolean
          description: >-
            Whether to add a security warning at the end of an SMS verification
            body. Disabled by default and applies only to SMS. Example SMS body:
            `Your AppName verification code is: 1234. Don’t share this code with
            anyone; our employees will never ask for the code`
        CustomCodeEnabled:
          type: boolean
          description: >-
            Whether to allow sending verifications with a custom code instead of
            a randomly generated one. Not available for all customers.
        Push.IncludeDate:
          type: boolean
          description: >-
            Optional configuration for the Push factors. If true, include the
            date in the Challenge's response. Otherwise, the date is omitted
            from the response. See
            [Challenge](https://www.twilio.com/docs/verify/api/challenge)
            resource’s details parameter for more info. Default: false.
            **Deprecated** do not use this parameter. This timestamp value is
            the same one as the one found in `date_created`, please use that one
            instead.
        Push.ApnCredentialSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: >-
            Optional configuration for the Push factors. Set the APN Credential
            for this service. This will allow to send push notifications to iOS
            devices. See [Credential
            Resource](https://www.twilio.com/docs/notify/api/credential-resource)
        Push.FcmCredentialSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: >-
            Optional configuration for the Push factors. Set the FCM Credential
            for this service. This will allow to send push notifications to
            Android devices. See [Credential
            Resource](https://www.twilio.com/docs/notify/api/credential-resource)
        Totp.Issuer:
          type: string
          description: >-
            Optional configuration for the TOTP factors. Set TOTP Issuer for
            this service. This will allow to configure the issuer of the TOTP
            URI. Defaults to the service friendly name if not provided.
        Totp.TimeStep:
          type: integer
          description: >-
            Optional configuration for the TOTP factors. Defines how often, in
            seconds, are TOTP codes generated. i.e, a new TOTP code is generated
            every time_step seconds. Must be between 20 and 60 seconds,
            inclusive. Defaults to 30 seconds
        Totp.CodeLength:
          type: integer
          description: >-
            Optional configuration for the TOTP factors. Number of digits for
            generated TOTP codes. Must be between 3 and 8, inclusive. Defaults
            to 6
        Totp.Skew:
          type: integer
          description: >-
            Optional configuration for the TOTP factors. The number of
            time-steps, past and future, that are valid for validation of TOTP
            codes. Must be between 0 and 2, inclusive. Defaults to 1
        DefaultTemplateSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HJ[0-9a-fA-F]{32}$'
          description: >-
            The default message
            [template](https://www.twilio.com/docs/verify/api/templates). Will
            be used for all SMS verifications unless explicitly overriden. SMS
            channel only.
        VerifyEventSubscriptionEnabled:
          type: boolean
          description: >-
            Whether to allow verifications from the service to reach the
            stream-events sinks if configured
    ListServiceResponse:
      type: object
      properties:
        services:
          type: array
          items:
            $ref: '#/components/schemas/verify.v2.service'
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
            A descriptive string that you create to describe the verification
            service. It can be up to 32 characters long. **This value should not
            contain PII.**
        CodeLength:
          type: integer
          description: >-
            The length of the verification code to generate. Must be an integer
            value between 4 and 10, inclusive.
        LookupEnabled:
          type: boolean
          description: >-
            Whether to perform a lookup with each verification started and
            return info about the phone number.
        SkipSmsToLandlines:
          type: boolean
          description: >-
            Whether to skip sending SMS verifications to landlines. Requires
            `lookup_enabled`.
        DtmfInputRequired:
          type: boolean
          description: >-
            Whether to ask the user to press a number before delivering the
            verify code in a phone call.
        TtsName:
          type: string
          description: >-
            The name of an alternative text-to-speech service to use in phone
            calls. Applies only to TTS languages.
        Psd2Enabled:
          type: boolean
          description: >-
            Whether to pass PSD2 transaction parameters when starting a
            verification.
        DoNotShareWarningEnabled:
          type: boolean
          description: >-
            Whether to add a privacy warning at the end of an SMS. **Disabled by
            default and applies only for SMS.**
        CustomCodeEnabled:
          type: boolean
          description: >-
            Whether to allow sending verifications with a custom code instead of
            a randomly generated one. Not available for all customers.
        Push.IncludeDate:
          type: boolean
          description: >-
            Optional configuration for the Push factors. If true, include the
            date in the Challenge's response. Otherwise, the date is omitted
            from the response. See
            [Challenge](https://www.twilio.com/docs/verify/api/challenge)
            resource’s details parameter for more info. Default: false.
            **Deprecated** do not use this parameter.
        Push.ApnCredentialSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: >-
            Optional configuration for the Push factors. Set the APN Credential
            for this service. This will allow to send push notifications to iOS
            devices. See [Credential
            Resource](https://www.twilio.com/docs/notify/api/credential-resource)
        Push.FcmCredentialSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: >-
            Optional configuration for the Push factors. Set the FCM Credential
            for this service. This will allow to send push notifications to
            Android devices. See [Credential
            Resource](https://www.twilio.com/docs/notify/api/credential-resource)
        Totp.Issuer:
          type: string
          description: >-
            Optional configuration for the TOTP factors. Set TOTP Issuer for
            this service. This will allow to configure the issuer of the TOTP
            URI.
        Totp.TimeStep:
          type: integer
          description: >-
            Optional configuration for the TOTP factors. Defines how often, in
            seconds, are TOTP codes generated. i.e, a new TOTP code is generated
            every time_step seconds. Must be between 20 and 60 seconds,
            inclusive. Defaults to 30 seconds
        Totp.CodeLength:
          type: integer
          description: >-
            Optional configuration for the TOTP factors. Number of digits for
            generated TOTP codes. Must be between 3 and 8, inclusive. Defaults
            to 6
        Totp.Skew:
          type: integer
          description: >-
            Optional configuration for the TOTP factors. The number of
            time-steps, past and future, that are valid for validation of TOTP
            codes. Must be between 0 and 2, inclusive. Defaults to 1
        DefaultTemplateSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HJ[0-9a-fA-F]{32}$'
          description: >-
            The default message
            [template](https://www.twilio.com/docs/verify/api/templates). Will
            be used for all SMS verifications unless explicitly overriden. SMS
            channel only.
        VerifyEventSubscriptionEnabled:
          type: boolean
          description: >-
            Whether to allow verifications from the service to reach the
            stream-events sinks if configured
    CreateVerificationRequest:
      type: object
      required:
        - To
        - Channel
      properties:
        To:
          type: string
          description: >-
            The phone number or
            [email](https://www.twilio.com/docs/verify/email) to verify. Phone
            numbers must be in [E.164
            format](https://www.twilio.com/docs/glossary/what-e164).
        Channel:
          type: string
          description: >-
            The verification method to use. One of:
            [`email`](https://www.twilio.com/docs/verify/email), `sms`,
            `whatsapp`, `call`, `sna` or `auto`.
        CustomFriendlyName:
          type: string
          description: >-
            A custom user defined friendly name that overwrites the existing one
            in the verification message
        CustomMessage:
          type: string
          description: The text of a custom message to use for the verification.
        SendDigits:
          type: string
          description: >-
            The digits to send after a phone call is answered, for example, to
            dial an extension. For more information, see the Programmable Voice
            documentation of
            [sendDigits](https://www.twilio.com/docs/voice/twiml/number#attributes-sendDigits).
        Locale:
          type: string
          description: >-
            Locale will automatically resolve based on phone number country code
            for SMS, WhatsApp, and call channel verifications. It will fallback
            to English or the template’s default translation if the selected
            translation is not available. This parameter will override the
            automatic locale resolution. [See supported languages and more
            information
            here](https://www.twilio.com/docs/verify/supported-languages).
        CustomCode:
          type: string
          description: >-
            A pre-generated code to use for verification. The code can be
            between 4 and 10 characters, inclusive.
        Amount:
          type: string
          description: >-
            The amount of the associated PSD2 compliant transaction. Requires
            the PSD2 Service flag enabled.
        Payee:
          type: string
          description: >-
            The payee of the associated PSD2 compliant transaction. Requires the
            PSD2 Service flag enabled.
        RateLimits:
          description: >-
            The custom key-value pairs of Programmable Rate Limits. Keys
            correspond to `unique_name` fields defined when [creating your Rate
            Limit](https://www.twilio.com/docs/verify/api/service-rate-limits).
            Associated value pairs represent values in the request that you are
            rate limiting on. You may include multiple Rate Limit values in each
            request.
        ChannelConfiguration:
          description: >-
            [`email`](https://www.twilio.com/docs/verify/email) channel
            configuration in json format. The fields 'from' and 'from_name' are
            optional but if included the 'from' field must have a valid email
            address.
        AppHash:
          type: string
          description: >-
            Your [App
            Hash](https://developers.google.com/identity/sms-retriever/verify#computing_your_apps_hash_string)
            to be appended at the end of your verification SMS body. Applies
            only to SMS. Example SMS body: `<#> Your AppName verification code
            is: 1234 He42w354ol9`.
        TemplateSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HJ[0-9a-fA-F]{32}$'
          description: >-
            The message
            [template](https://www.twilio.com/docs/verify/api/templates). If
            provided, will override the default template for the Service. SMS
            and Voice channels only.
        TemplateCustomSubstitutions:
          type: string
          description: >-
            A stringified JSON object in which the keys are the template's
            special variables and the values are the variables substitutions.
        DeviceIp:
          type: string
          description: >-
            Strongly encouraged if using the auto channel. The IP address of the
            client's device. If provided, it has to be a valid IPv4 or IPv6
            address.
        RiskCheck:
          type: string
          $ref: '#/components/schemas/verification_enum_risk_check'
          description: >-
            Risk_check overrides Fraud Prevention measures like Fraud Guard, Geo
            Permissions etc per verification attempt basis, allowing Verify to
            block traffic considered fraudulent if enabled or bypass active
            protections if disabled. Can be: `enable`(default) or `disable`. For
            SMS channel only.
        Tags:
          type: string
          description: >-
            A string containing a JSON map of key value pairs of tags to be
            recorded as metadata for the message. The object may contain up to
            10 tags. Keys and values can each be up to 128 characters in length.
    UpdateVerificationRequest:
      type: object
      required:
        - Status
      properties:
        Status:
          type: string
          $ref: '#/components/schemas/verification_enum_status'
          description: 'The new status of the resource. Can be: `canceled` or `approved`.'
    ListVerificationAttemptResponse:
      type: object
      properties:
        attempts:
          type: array
          items:
            $ref: '#/components/schemas/verify.v2.verification_attempt'
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
    CreateVerificationCheckRequest:
      type: object
      properties:
        Code:
          type: string
          description: The 4-10 character string being verified.
        To:
          type: string
          description: >-
            The phone number or
            [email](https://www.twilio.com/docs/verify/email) to verify. Either
            this parameter or the `verification_sid` must be specified. Phone
            numbers must be in [E.164
            format](https://www.twilio.com/docs/glossary/what-e164).
        VerificationSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^VE[0-9a-fA-F]{32}$'
          description: >-
            A SID that uniquely identifies the Verification Check. Either this
            parameter or the `to` phone
            number/[email](https://www.twilio.com/docs/verify/email) must be
            specified.
        Amount:
          type: string
          description: >-
            The amount of the associated PSD2 compliant transaction. Requires
            the PSD2 Service flag enabled.
        Payee:
          type: string
          description: >-
            The payee of the associated PSD2 compliant transaction. Requires the
            PSD2 Service flag enabled.
    ListVerificationTemplateResponse:
      type: object
      properties:
        templates:
          type: array
          items:
            $ref: '#/components/schemas/verify.v2.verification_template'
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
    CreateWebhookRequest:
      type: object
      required:
        - FriendlyName
        - EventTypes
        - WebhookUrl
      properties:
        FriendlyName:
          type: string
          description: >-
            The string that you assigned to describe the webhook. **This value
            should not contain PII.**
        EventTypes:
          type: array
          items:
            type: string
          description: >-
            The array of events that this Webhook is subscribed to. Possible
            event types: `*, factor.deleted, factor.created, factor.verified,
            challenge.approved, challenge.denied`
        WebhookUrl:
          type: string
          description: The URL associated with this Webhook.
        Status:
          type: string
          $ref: '#/components/schemas/webhook_enum_status'
          description: >-
            The webhook status. Default value is `enabled`. One of: `enabled` or
            `disabled`
        Version:
          type: string
          $ref: '#/components/schemas/webhook_enum_version'
          description: >-
            The webhook version. Default value is `v2` which includes all the
            latest fields. Version `v1` is legacy and may be removed in the
            future.
    ListWebhookResponse:
      type: object
      properties:
        webhooks:
          type: array
          items:
            $ref: '#/components/schemas/verify.v2.service.webhook'
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
    UpdateWebhookRequest:
      type: object
      properties:
        FriendlyName:
          type: string
          description: >-
            The string that you assigned to describe the webhook. **This value
            should not contain PII.**
        EventTypes:
          type: array
          items:
            type: string
          description: >-
            The array of events that this Webhook is subscribed to. Possible
            event types: `*, factor.deleted, factor.created, factor.verified,
            challenge.approved, challenge.denied`
        WebhookUrl:
          type: string
          description: The URL associated with this Webhook.
        Status:
          type: string
          $ref: '#/components/schemas/webhook_enum_status'
          description: >-
            The webhook status. Default value is `enabled`. One of: `enabled` or
            `disabled`
        Version:
          type: string
          $ref: '#/components/schemas/webhook_enum_version'
          description: >-
            The webhook version. Default value is `v2` which includes all the
            latest fields. Version `v1` is legacy and may be removed in the
            future.
  securitySchemes:
    accountSid_authToken:
      type: http
      scheme: basic
info:
  title: Twilio - Verify
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
  '/v2/Services/{ServiceSid}/AccessTokens':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - account_sid
        - service_sid
        - entity_identity
        - factor_type
        - factor_friendly_name
        - token
        - ttl
        - date_created
      pathType: list
      parent: '/Services/{Sid}'
    post:
      description: Create a new enrollment Access Token for the Entity
      tags:
        - VerifyV2AccessToken
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.access_token'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateAccessToken
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateAccessTokenRequest'
  '/v2/Services/{ServiceSid}/AccessTokens/{Sid}':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - account_sid
        - service_sid
        - entity_identity
        - factor_type
        - factor_friendly_name
        - token
        - ttl
        - date_created
      pathType: instance
      parent: '/Services/{Sid}'
    get:
      description: Fetch an Access Token for the Entity
      tags:
        - VerifyV2AccessToken
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Access Token.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^YK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.access_token'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchAccessToken
      x-maturity:
        - GA
  '/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - service_sid
        - rate_limit_sid
        - account_sid
        - max
        - interval
        - date_created
        - date_updated
      pathType: list
      parent: '/Services/{ServiceSid}/RateLimits/{Sid}'
    post:
      description: Create a new Bucket for a Rate Limit
      tags:
        - VerifyV2Bucket
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: RateLimitSid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Rate Limit
            resource.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.rate_limit.bucket'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateBucket
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateBucketRequest'
    get:
      description: Retrieve a list of all Buckets for a Rate Limit.
      tags:
        - VerifyV2Bucket
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: RateLimitSid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Rate Limit
            resource.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RK[0-9a-fA-F]{32}$'
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
                $ref: '#/components/schemas/ListBucketResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListBucket
      x-maturity:
        - GA
  '/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - service_sid
        - rate_limit_sid
        - account_sid
        - max
        - interval
        - date_created
        - date_updated
      pathType: instance
      parent: '/Services/{ServiceSid}/RateLimits/{Sid}'
    post:
      description: Update a specific Bucket.
      tags:
        - VerifyV2Bucket
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: RateLimitSid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Rate Limit
            resource.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RK[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Bucket.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^BL[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.rate_limit.bucket'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateBucket
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateBucketRequest'
    get:
      description: Fetch a specific Bucket.
      tags:
        - VerifyV2Bucket
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: RateLimitSid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Rate Limit
            resource.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RK[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Bucket.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^BL[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.rate_limit.bucket'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchBucket
      x-maturity:
        - GA
    delete:
      description: Delete a specific Bucket.
      tags:
        - VerifyV2Bucket
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: RateLimitSid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Rate Limit
            resource.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RK[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Bucket.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^BL[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteBucket
      x-maturity:
        - GA
  '/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - factor_type
        - status
        - responded_reason
        - date_created
      pathType: list
      dependentProperties:
        notifications:
          mapping:
            service_sid: service_sid
            identity: identity
            challenge_sid: sid
          resource_url: >-
            /v2/Services/{service_sid}/Entities/{identity}/Challenges/{challenge_sid}/Notifications
      parent: '/Services/{ServiceSid}/Entities/{Identity}'
    post:
      description: Create a new Challenge for the Factor
      tags:
        - VerifyV2Challenge
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Identity
          in: path
          description: >-
            Customer unique identity for the Entity owner of the Challenge. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.entity.challenge'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateChallenge
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateChallengeRequest'
    get:
      description: Retrieve a list of all Challenges for a Factor.
      tags:
        - VerifyV2Challenge
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Identity
          in: path
          description: >-
            Customer unique identity for the Entity owner of the Challenge. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
          required: true
        - name: FactorSid
          in: query
          description: The unique SID identifier of the Factor.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^YF[0-9a-fA-F]{32}$'
        - name: Status
          in: query
          description: >-
            The Status of the Challenges to fetch. One of `pending`, `expired`,
            `approved` or `denied`.
          schema:
            type: string
            $ref: '#/components/schemas/challenge_enum_challenge_statuses'
        - name: Order
          in: query
          description: >-
            The desired sort order of the Challenges list. One of `asc` or
            `desc` for ascending and descending respectively. Defaults to `asc`.
          schema:
            type: string
            $ref: '#/components/schemas/challenge_enum_list_orders'
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
                $ref: '#/components/schemas/ListChallengeResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListChallenge
      x-maturity:
        - GA
  '/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - factor_type
        - status
        - responded_reason
        - date_created
      pathType: instance
      dependentProperties:
        notifications:
          mapping:
            service_sid: service_sid
            identity: identity
            challenge_sid: sid
          resource_url: >-
            /v2/Services/{service_sid}/Entities/{identity}/Challenges/{challenge_sid}/Notifications
      parent: '/Services/{ServiceSid}/Entities/{Identity}'
    get:
      description: Fetch a specific Challenge.
      tags:
        - VerifyV2Challenge
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Identity
          in: path
          description: >-
            Customer unique identity for the Entity owner of the Challenges.
            This identifier should be immutable, not PII, length between 8 and
            64 characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
          required: true
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Challenge.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^YC[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.entity.challenge'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchChallenge
      x-maturity:
        - GA
    post:
      description: Verify a specific Challenge.
      tags:
        - VerifyV2Challenge
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Identity
          in: path
          description: >-
            Customer unique identity for the Entity owner of the Challenge. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
          required: true
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Challenge.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^YC[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.entity.challenge'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateChallenge
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateChallengeRequest'
  '/v2/Services/{ServiceSid}/Entities':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - identity
        - date_created
      pathType: list
      dependentProperties:
        factors:
          mapping:
            service_sid: service_sid
            identity: identity
          resource_url: '/v2/Services/{service_sid}/Entities/{identity}/Factors'
        new_factors:
          mapping:
            service_sid: service_sid
            identity: identity
          resource_url: '/v2/Services/{service_sid}/Entities/{identity}/Factors'
        challenges:
          mapping:
            service_sid: service_sid
            identity: identity
          resource_url: '/v2/Services/{service_sid}/Entities/{identity}/Challenges'
      parent: '/Services/{Sid}'
    post:
      description: Create a new Entity for the Service
      tags:
        - VerifyV2Entity
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.entity'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateEntity
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateEntityRequest'
    get:
      description: Retrieve a list of all Entities for a Service.
      tags:
        - VerifyV2Entity
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
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
                $ref: '#/components/schemas/ListEntityResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListEntity
      x-maturity:
        - GA
  '/v2/Services/{ServiceSid}/Entities/{Identity}':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - identity
        - date_created
      pathType: instance
      dependentProperties:
        factors:
          mapping:
            service_sid: service_sid
            identity: identity
          resource_url: '/v2/Services/{service_sid}/Entities/{identity}/Factors'
        new_factors:
          mapping:
            service_sid: service_sid
            identity: identity
          resource_url: '/v2/Services/{service_sid}/Entities/{identity}/Factors'
        challenges:
          mapping:
            service_sid: service_sid
            identity: identity
          resource_url: '/v2/Services/{service_sid}/Entities/{identity}/Challenges'
      parent: '/Services/{Sid}'
    delete:
      description: Delete a specific Entity.
      tags:
        - VerifyV2Entity
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Identity
          in: path
          description: >-
            The unique external identifier for the Entity of the Service. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteEntity
      x-maturity:
        - GA
    get:
      description: Fetch a specific Entity.
      tags:
        - VerifyV2Entity
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Identity
          in: path
          description: >-
            The unique external identifier for the Entity of the Service. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.entity'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchEntity
      x-maturity:
        - GA
  '/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - status
        - factor_type
      pathType: instance
      parent: '/Services/{ServiceSid}/Entities/{Identity}'
    delete:
      description: Delete a specific Factor.
      tags:
        - VerifyV2Factor
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Identity
          in: path
          description: >-
            Customer unique identity for the Entity owner of the Factor. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
          required: true
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Factor.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^YF[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteFactor
      x-maturity:
        - GA
    get:
      description: Fetch a specific Factor.
      tags:
        - VerifyV2Factor
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Identity
          in: path
          description: >-
            Customer unique identity for the Entity owner of the Factor. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
          required: true
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Factor.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^YF[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.entity.factor'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchFactor
      x-maturity:
        - GA
    post:
      description: >-
        Update a specific Factor. This endpoint can be used to Verify a Factor
        if passed an `AuthPayload` param.
      tags:
        - VerifyV2Factor
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Identity
          in: path
          description: >-
            Customer unique identity for the Entity owner of the Factor. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
          required: true
        - name: Sid
          in: path
          description: A 34 character string that uniquely identifies this Factor.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^YF[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.entity.factor'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateFactor
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateFactorRequest'
  '/v2/Services/{ServiceSid}/Entities/{Identity}/Factors':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - status
        - factor_type
      pathType: list
      parent: '/Services/{ServiceSid}/Entities/{Identity}'
    get:
      description: Retrieve a list of all Factors for an Entity.
      tags:
        - VerifyV2Factor
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Identity
          in: path
          description: >-
            Customer unique identity for the Entity owner of the Factors. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
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
                $ref: '#/components/schemas/ListFactorResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListFactor
      x-maturity:
        - GA
    post:
      description: Create a new Factor for the Entity
      tags:
        - VerifyV2NewFactor
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Identity
          in: path
          description: >-
            Customer unique identity for the Entity owner of the Factor. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.entity.new_factor'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateNewFactor
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateNewFactorRequest'
      x-twilio:
        mountName: new_factors
  '/v2/Forms/{FormType}':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - form_type
      pathType: instance
    get:
      description: Fetch the forms for a specific Form Type.
      tags:
        - VerifyV2Form
      parameters:
        - name: FormType
          in: path
          description: The Type of this Form. Currently only `form-push` is supported.
          schema:
            type: string
            $ref: '#/components/schemas/form_enum_form_types'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.form'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchForm
      x-maturity:
        - Beta
  '/v2/Services/{ServiceSid}/MessagingConfigurations':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - account_sid
        - service_sid
        - country
        - messaging_service_sid
        - date_created
        - date_updated
      pathType: list
      parent: '/Services/{Sid}'
    post:
      description: Create a new MessagingConfiguration for a service.
      tags:
        - VerifyV2MessagingConfiguration
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) that the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.messaging_configuration'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateMessagingConfiguration
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateMessagingConfigurationRequest'
    get:
      description: Retrieve a list of all Messaging Configurations for a Service.
      tags:
        - VerifyV2MessagingConfiguration
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) that the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
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
                $ref: '#/components/schemas/ListMessagingConfigurationResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListMessagingConfiguration
      x-maturity:
        - GA
  '/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - account_sid
        - service_sid
        - country
        - messaging_service_sid
        - date_created
        - date_updated
      pathType: instance
      parent: '/Services/{Sid}'
    post:
      description: Update a specific MessagingConfiguration
      tags:
        - VerifyV2MessagingConfiguration
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) that the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Country
          in: path
          description: >-
            The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
            country code of the country this configuration will be applied to.
            If this is a global configuration, Country will take the value
            `all`.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.messaging_configuration'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateMessagingConfiguration
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateMessagingConfigurationRequest'
    get:
      description: Fetch a specific MessagingConfiguration.
      tags:
        - VerifyV2MessagingConfiguration
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) that the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Country
          in: path
          description: >-
            The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
            country code of the country this configuration will be applied to.
            If this is a global configuration, Country will take the value
            `all`.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.messaging_configuration'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchMessagingConfiguration
      x-maturity:
        - GA
    delete:
      description: Delete a specific MessagingConfiguration.
      tags:
        - VerifyV2MessagingConfiguration
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) that the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Country
          in: path
          description: >-
            The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
            country code of the country this configuration will be applied to.
            If this is a global configuration, Country will take the value
            `all`.
          schema:
            type: string
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteMessagingConfiguration
      x-maturity:
        - GA
  '/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{ChallengeSid}/Notifications':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - identity
        - challenge_sid
        - date_created
      pathType: list
      parent: '/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}'
    post:
      description: Create a new Notification for the corresponding Challenge
      tags:
        - VerifyV2Notification
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Identity
          in: path
          description: >-
            Customer unique identity for the Entity owner of the Challenge. This
            identifier should be immutable, not PII, length between 8 and 64
            characters, and generated by your external system, such as your
            user's UUID, GUID, or SID. It can only contain dash (-) separated
            alphanumeric characters.
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
          required: true
        - name: ChallengeSid
          in: path
          description: The unique SID identifier of the Challenge.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^YC[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: >-
                  #/components/schemas/verify.v2.service.entity.challenge.notification
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateNotification
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateNotificationRequest'
  '/v2/Services/{ServiceSid}/RateLimits':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - service_sid
        - account_sid
        - unique_name
        - description
        - date_created
        - date_updated
      pathType: list
      dependentProperties:
        buckets:
          mapping:
            service_sid: service_sid
            rate_limit_sid: sid
          resource_url: '/v2/Services/{service_sid}/RateLimits/{rate_limit_sid}/Buckets'
      parent: '/Services/{Sid}'
    post:
      description: Create a new Rate Limit for a Service
      tags:
        - VerifyV2RateLimit
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.rate_limit'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateRateLimit
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateRateLimitRequest'
    get:
      description: Retrieve a list of all Rate Limits for a service.
      tags:
        - VerifyV2RateLimit
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
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
                $ref: '#/components/schemas/ListRateLimitResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListRateLimit
      x-maturity:
        - GA
  '/v2/Services/{ServiceSid}/RateLimits/{Sid}':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - service_sid
        - account_sid
        - unique_name
        - description
        - date_created
        - date_updated
      pathType: instance
      dependentProperties:
        buckets:
          mapping:
            service_sid: service_sid
            rate_limit_sid: sid
          resource_url: '/v2/Services/{service_sid}/RateLimits/{rate_limit_sid}/Buckets'
      parent: '/Services/{Sid}'
    post:
      description: Update a specific Rate Limit.
      tags:
        - VerifyV2RateLimit
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Rate Limit
            resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.rate_limit'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateRateLimit
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateRateLimitRequest'
    get:
      description: Fetch a specific Rate Limit.
      tags:
        - VerifyV2RateLimit
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Rate Limit
            resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.rate_limit'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchRateLimit
      x-maturity:
        - GA
    delete:
      description: Delete a specific Rate Limit.
      tags:
        - VerifyV2RateLimit
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the
            [Service](https://www.twilio.com/docs/verify/api/service) the
            resource is associated with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Rate Limit
            resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteRateLimit
      x-maturity:
        - GA
  /v2/SafeList/Numbers:
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - phone_number
      pathType: list
      mountName: safelist
    post:
      description: Add a new phone number to SafeList.
      tags:
        - VerifyV2Safelist
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.safelist'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateSafelist
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateSafelistRequest'
  '/v2/SafeList/Numbers/{PhoneNumber}':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - phone_number
      pathType: instance
      mountName: safelist
    get:
      description: Check if a phone number exists in SafeList.
      tags:
        - VerifyV2Safelist
      parameters:
        - name: PhoneNumber
          in: path
          description: >-
            The phone number to be fetched from SafeList. Phone numbers must be
            in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 0
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.safelist'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchSafelist
      x-maturity:
        - Beta
    delete:
      description: Remove a phone number from SafeList.
      tags:
        - VerifyV2Safelist
      parameters:
        - name: PhoneNumber
          in: path
          description: >-
            The phone number to be removed from SafeList. Phone numbers must be
            in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 0
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteSafelist
      x-maturity:
        - Beta
  /v2/Services:
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - date_created
      pathType: list
      dependentProperties:
        verifications:
          mapping:
            service_sid: sid
          resource_url: '/v2/Services/{service_sid}/Verifications'
        verification_checks:
          mapping:
            service_sid: sid
          resource_url: '/v2/Services/{service_sid}/VerificationCheck'
        rate_limits:
          mapping:
            service_sid: sid
          resource_url: '/v2/Services/{service_sid}/RateLimits'
        messaging_configurations:
          mapping:
            service_sid: sid
          resource_url: '/v2/Services/{service_sid}/MessagingConfigurations'
        entities:
          mapping:
            service_sid: sid
          resource_url: '/v2/Services/{service_sid}/Entities'
        webhooks:
          mapping:
            service_sid: sid
          resource_url: '/v2/Services/{service_sid}/Webhooks'
        access_tokens:
          mapping:
            service_sid: sid
          resource_url: '/v2/Services/{service_sid}/AccessTokens'
    post:
      description: Create a new Verification Service.
      tags:
        - VerifyV2Service
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateService
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateServiceRequest'
    get:
      description: Retrieve a list of all Verification Services for an account.
      tags:
        - VerifyV2Service
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
                $ref: '#/components/schemas/ListServiceResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListService
      x-maturity:
        - GA
  '/v2/Services/{Sid}':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - date_created
      pathType: instance
      dependentProperties:
        verifications:
          mapping:
            service_sid: sid
          resource_url: '/v2/Services/{service_sid}/Verifications'
        verification_checks:
          mapping:
            service_sid: sid
          resource_url: '/v2/Services/{service_sid}/VerificationCheck'
        rate_limits:
          mapping:
            service_sid: sid
          resource_url: '/v2/Services/{service_sid}/RateLimits'
        messaging_configurations:
          mapping:
            service_sid: sid
          resource_url: '/v2/Services/{service_sid}/MessagingConfigurations'
        entities:
          mapping:
            service_sid: sid
          resource_url: '/v2/Services/{service_sid}/Entities'
        webhooks:
          mapping:
            service_sid: sid
          resource_url: '/v2/Services/{service_sid}/Webhooks'
        access_tokens:
          mapping:
            service_sid: sid
          resource_url: '/v2/Services/{service_sid}/AccessTokens'
    get:
      description: Fetch specific Verification Service Instance.
      tags:
        - VerifyV2Service
      parameters:
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Verification
            Service resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchService
      x-maturity:
        - GA
    delete:
      description: Delete a specific Verification Service Instance.
      tags:
        - VerifyV2Service
      parameters:
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Verification
            Service resource to delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteService
      x-maturity:
        - GA
    post:
      description: Update a specific Verification Service.
      tags:
        - VerifyV2Service
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
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateService
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateServiceRequest'
  '/v2/Services/{ServiceSid}/Verifications':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - to
        - channel
        - status
        - valid
        - date_created
      pathType: list
      parent: '/Services/{Sid}'
    post:
      description: Create a new Verification using a Service
      tags:
        - VerifyV2Verification
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the verification
            [Service](https://www.twilio.com/docs/verify/api/service) to create
            the resource under.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.verification'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateVerification
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateVerificationRequest'
  '/v2/Services/{ServiceSid}/Verifications/{Sid}':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - to
        - channel
        - status
        - valid
        - date_created
      pathType: instance
      parent: '/Services/{Sid}'
    post:
      description: Update a Verification status
      tags:
        - VerifyV2Verification
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the verification
            [Service](https://www.twilio.com/docs/verify/api/service) to update
            the resource from.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Verification
            resource to update.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.verification'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateVerification
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateVerificationRequest'
    get:
      description: Fetch a specific Verification
      tags:
        - VerifyV2Verification
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the verification
            [Service](https://www.twilio.com/docs/verify/api/service) to fetch
            the resource from.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Verification
            resource to fetch.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.verification'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchVerification
      x-maturity:
        - GA
  /v2/Attempts:
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - date_created
        - date_updated
        - conversion_status
        - channel
      pathType: list
      mountName: verification_attempts
    get:
      description: List all the verification attempts for a given Account.
      tags:
        - VerifyV2VerificationAttempt
      parameters:
        - name: DateCreatedAfter
          in: query
          description: >-
            Datetime filter used to consider only Verification Attempts created
            after this datetime on the summary aggregation. Given as GMT in ISO
            8601 formatted datetime string: yyyy-MM-dd'T'HH:mm:ss'Z.
          schema:
            type: string
            format: date-time
        - name: DateCreatedBefore
          in: query
          description: >-
            Datetime filter used to consider only Verification Attempts created
            before this datetime on the summary aggregation. Given as GMT in ISO
            8601 formatted datetime string: yyyy-MM-dd'T'HH:mm:ss'Z.
          schema:
            type: string
            format: date-time
        - name: ChannelData.To
          in: query
          description: Destination of a verification. It is phone number in E.164 format.
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        - name: Country
          in: query
          description: >-
            Filter used to query Verification Attempts sent to the specified
            destination country.
          schema:
            type: string
            format: iso-country-code
        - name: Channel
          in: query
          description: >-
            Filter used to query Verification Attempts by communication channel.
            Valid values are `SMS` and `CALL`
          schema:
            type: string
            $ref: '#/components/schemas/verification_attempt_enum_channels'
        - name: VerifyServiceSid
          in: query
          description: >-
            Filter used to query Verification Attempts by verify service. Only
            attempts of the provided SID will be returned.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
        - name: VerificationSid
          in: query
          description: >-
            Filter used to return all the Verification Attempts of a single
            verification. Only attempts of the provided verification SID will be
            returned.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VE[0-9a-fA-F]{32}$'
        - name: Status
          in: query
          description: >-
            Filter used to query Verification Attempts by conversion status.
            Valid values are `UNCONVERTED`, for attempts that were not
            converted, and `CONVERTED`, for attempts that were confirmed.
          schema:
            type: string
            $ref: '#/components/schemas/verification_attempt_enum_conversion_status'
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
                $ref: '#/components/schemas/ListVerificationAttemptResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListVerificationAttempt
      x-maturity:
        - GA
  '/v2/Attempts/{Sid}':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - date_created
        - date_updated
        - conversion_status
        - channel
      pathType: instance
      mountName: verification_attempts
    get:
      description: Fetch a specific verification attempt.
      tags:
        - VerifyV2VerificationAttempt
      parameters:
        - name: Sid
          in: path
          description: The unique SID identifier of a Verification Attempt
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VL[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.verification_attempt'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchVerificationAttempt
      x-maturity:
        - GA
  /v2/Attempts/Summary:
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - total_attempts
        - total_converted
        - total_unconverted
        - conversion_rate_percentage
      pathType: instance
      mountName: verification_attempts_summary
    get:
      description: >-
        Get a summary of how many attempts were made and how many were
        converted.
      tags:
        - VerifyV2VerificationAttemptsSummary
      parameters:
        - name: VerifyServiceSid
          in: query
          description: >-
            Filter used to consider only Verification Attempts of the given
            verify service on the summary aggregation.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
        - name: DateCreatedAfter
          in: query
          description: >-
            Datetime filter used to consider only Verification Attempts created
            after this datetime on the summary aggregation. Given as GMT in ISO
            8601 formatted datetime string: yyyy-MM-dd'T'HH:mm:ss'Z.
          schema:
            type: string
            format: date-time
        - name: DateCreatedBefore
          in: query
          description: >-
            Datetime filter used to consider only Verification Attempts created
            before this datetime on the summary aggregation. Given as GMT in ISO
            8601 formatted datetime string: yyyy-MM-dd'T'HH:mm:ss'Z.
          schema:
            type: string
            format: date-time
        - name: Country
          in: query
          description: >-
            Filter used to consider only Verification Attempts sent to the
            specified destination country on the summary aggregation.
          schema:
            type: string
            format: iso-country-code
        - name: Channel
          in: query
          description: >-
            Filter Verification Attempts considered on the summary aggregation
            by communication channel. Valid values are `SMS`, `CALL` and
            `WHATSAPP`
          schema:
            type: string
            $ref: '#/components/schemas/verification_attempts_summary_enum_channels'
        - name: DestinationPrefix
          in: query
          description: >-
            Filter the Verification Attempts considered on the summary
            aggregation by Destination prefix. It is the prefix of a phone
            number in E.164 format.
          schema:
            type: string
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.verification_attempts_summary'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchVerificationAttemptsSummary
      x-maturity:
        - GA
  '/v2/Services/{ServiceSid}/VerificationCheck':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - to
        - channel
        - status
        - valid
        - date_created
      pathType: list
      parent: '/Services/{Sid}'
      mountName: verification_checks
    post:
      description: challenge a specific Verification Check.
      tags:
        - VerifyV2VerificationCheck
      parameters:
        - name: ServiceSid
          in: path
          description: >-
            The SID of the verification
            [Service](https://www.twilio.com/docs/verify/api/service) to create
            the resource under.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.verification_check'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateVerificationCheck
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateVerificationCheckRequest'
  /v2/Templates:
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
      pathType: list
    get:
      description: List all the available templates for a given Account.
      tags:
        - VerifyV2Template
      parameters:
        - name: FriendlyName
          in: query
          description: String filter used to query templates with a given friendly name.
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
                $ref: '#/components/schemas/ListVerificationTemplateResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListVerificationTemplate
      x-maturity:
        - GA
  '/v2/Services/{ServiceSid}/Webhooks':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - service_sid
        - friendly_name
        - event_types
        - webhook_url
        - webhook_method
        - status
        - date_created
      pathType: list
      parent: '/Services/{Sid}'
    post:
      description: Create a new Webhook for the Service
      tags:
        - VerifyV2Webhook
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.webhook'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateWebhook
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateWebhookRequest'
    get:
      description: Retrieve a list of all Webhooks for a Service.
      tags:
        - VerifyV2Webhook
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
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
                $ref: '#/components/schemas/ListWebhookResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListWebhook
      x-maturity:
        - GA
  '/v2/Services/{ServiceSid}/Webhooks/{Sid}':
    servers:
      - url: 'https://verify.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - service_sid
        - friendly_name
        - event_types
        - webhook_url
        - webhook_method
        - status
        - date_created
      pathType: instance
      parent: '/Services/{Sid}'
    post:
      description: ''
      tags:
        - VerifyV2Webhook
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Webhook
            resource to update.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^YW[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.webhook'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateWebhook
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateWebhookRequest'
    delete:
      description: Delete a specific Webhook.
      tags:
        - VerifyV2Webhook
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Webhook
            resource to delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^YW[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteWebhook
      x-maturity:
        - GA
    get:
      description: Fetch a specific Webhook.
      tags:
        - VerifyV2Webhook
      parameters:
        - name: ServiceSid
          in: path
          description: The unique SID identifier of the Service.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^VA[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The Twilio-provided string that uniquely identifies the Webhook
            resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^YW[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/verify.v2.service.webhook'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchWebhook
      x-maturity:
        - GA
servers:
  - url: 'https://verify.twilio.com'
tags:
  - name: VerifyV2AccessToken
  - name: VerifyV2Bucket
  - name: VerifyV2Challenge
  - name: VerifyV2Entity
  - name: VerifyV2Factor
  - name: VerifyV2Form
  - name: VerifyV2MessagingConfiguration
  - name: VerifyV2NewFactor
  - name: VerifyV2Notification
  - name: VerifyV2RateLimit
  - name: VerifyV2Safelist
  - name: VerifyV2Service
  - name: VerifyV2Template
  - name: VerifyV2Verification
  - name: VerifyV2VerificationAttempt
  - name: VerifyV2VerificationAttemptsSummary
  - name: VerifyV2VerificationCheck
  - name: VerifyV2Webhook
x-maturity:
  - name: GA
    description: This product is Generally Available.
  - name: Beta
    description: >-
      PLEASE NOTE that this is a Beta product that is subject to change. Use it
      with caution.
---