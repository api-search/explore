---
components:
  schemas:
    trunking.v1.trunk.credential_list:
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
            the CredentialList resource.
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CL[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the CredentialList
            resource.
        trunk_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^TK[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the Trunk the credential list in associated with.
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
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the resource.
    trunking.v1.trunk.ip_access_control_list:
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
            the IpAccessControlList resource.
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AL[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the
            IpAccessControlList resource.
        trunk_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^TK[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the Trunk the resource is associated with.
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
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the resource.
    trunking.v1.trunk.origination_url:
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
            the OriginationUrl resource.
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^OU[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the OriginationUrl
            resource.
        trunk_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^TK[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the Trunk that owns the Origination URL.
        weight:
          type: integer
          nullable: true
          description: >-
            The value that determines the relative share of the load the URI
            should receive compared to other URIs with the same priority. Can be
            an integer from 1 to 65535, inclusive, and the default is 10. URLs
            with higher values receive more load than those with lower ones with
            the same priority.
        enabled:
          type: boolean
          nullable: true
          description: Whether the URL is enabled. The default is `true`.
        sip_url:
          type: string
          format: uri
          nullable: true
          description: >-
            The SIP address you want Twilio to route your Origination calls to.
            This must be a `sip:` schema.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        friendly_name:
          type: string
          nullable: true
          description: The string that you assigned to describe the resource.
        priority:
          type: integer
          nullable: true
          description: >-
            The relative importance of the URI. Can be an integer from 0 to
            65535, inclusive, and the default is 10. The lowest number
            represents the most important URI.
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
    trunking.v1.trunk.phone_number:
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
            the PhoneNumber resource.
        address_requirements:
          type: string
          $ref: '#/components/schemas/phone_number_enum_address_requirement'
          nullable: true
          description: >-
            Whether the phone number requires an
            [Address](https://www.twilio.com/docs/usage/api/address) registered
            with Twilio and, if so, what type. Can be: `none`, `any`, `local`,
            or `foreign`.
        api_version:
          type: string
          nullable: true
          description: The API version used to start a new TwiML session.
        beta:
          type: boolean
          nullable: true
          description: >-
            Whether the phone number is new to the Twilio platform. Can be:
            `true` or `false`.
        capabilities:
          type: object
          format: string-map
          nullable: true
          description: >-
            The set of Boolean properties that indicate whether a phone number
            can receive calls or messages.  Capabilities are  `Voice`, `SMS`,
            and `MMS` and each capability can be: `true` or `false`.
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
        friendly_name:
          type: string
          nullable: true
          description: The string that you assigned to describe the resource.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        links:
          type: object
          format: uri-map
          nullable: true
          description: The URLs of related resources.
        phone_number:
          type: string
          format: phone-number
          nullable: true
          description: >-
            The phone number in
            [E.164](https://www.twilio.com/docs/glossary/what-e164) format,
            which consists of a + followed by the country code and subscriber
            number.
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^PN[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the PhoneNumber
            resource.
        sms_application_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AP[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the application that handles SMS messages sent to the
            phone number. If an `sms_application_sid` is present, we ignore all
            `sms_*_url` values and use those of the application.
        sms_fallback_method:
          type: string
          format: http-method
          enum:
            - HEAD
            - GET
            - POST
            - PATCH
            - PUT
            - DELETE
          nullable: true
          description: >-
            The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or
            `POST`.
        sms_fallback_url:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL that we call using the `sms_fallback_method` when an error
            occurs while retrieving or executing the TwiML from `sms_url`.
        sms_method:
          type: string
          format: http-method
          enum:
            - HEAD
            - GET
            - POST
            - PATCH
            - PUT
            - DELETE
          nullable: true
          description: 'The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`.'
        sms_url:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL we call using the `sms_method` when the phone number
            receives an incoming SMS message.
        status_callback:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL we call using the `status_callback_method` to send status
            information to your application.
        status_callback_method:
          type: string
          format: http-method
          enum:
            - HEAD
            - GET
            - POST
            - PATCH
            - PUT
            - DELETE
          nullable: true
          description: >-
            The HTTP method we use to call `status_callback`. Can be: `GET` or
            `POST`.
        trunk_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^TK[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the Trunk that handles calls to the phone number. If a
            `trunk_sid` is present, we ignore all of the voice URLs and voice
            applications and use those set on the Trunk. Setting a `trunk_sid`
            will automatically delete your `voice_application_sid` and vice
            versa.
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the resource.
        voice_application_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AP[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the application that handles calls to the phone number.
            If a `voice_application_sid` is present, we ignore all of the voice
            URLs and use those set on the application. Setting a
            `voice_application_sid` will automatically delete your `trunk_sid`
            and vice versa.
        voice_caller_id_lookup:
          type: boolean
          nullable: true
          description: >-
            Whether we look up the caller's caller-ID name from the CNAM
            database ($0.01 per look up). Can be: `true` or `false`.
        voice_fallback_method:
          type: string
          format: http-method
          enum:
            - HEAD
            - GET
            - POST
            - PATCH
            - PUT
            - DELETE
          nullable: true
          description: >-
            The HTTP method that we use to call `voice_fallback_url`. Can be:
            `GET` or `POST`.
        voice_fallback_url:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL that we call using the `voice_fallback_method` when an error
            occurs retrieving or executing the TwiML requested by `url`.
        voice_method:
          type: string
          format: http-method
          enum:
            - HEAD
            - GET
            - POST
            - PATCH
            - PUT
            - DELETE
          nullable: true
          description: 'The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.'
        voice_url:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL we call using the `voice_method` when the phone number
            receives a call. The `voice_url` is not be used if a
            `voice_application_sid` or a `trunk_sid` is set.
    phone_number_enum_address_requirement:
      type: string
      enum:
        - none
        - any
        - local
        - foreign
    trunking.v1.trunk.recording:
      type: object
      properties:
        mode:
          type: string
          $ref: '#/components/schemas/recording_enum_recording_mode'
          nullable: true
          description: >-
            The recording mode for the trunk. Can be do-not-record (default),
            record-from-ringing, record-from-answer, record-from-ringing-dual,
            or record-from-answer-dual.
        trim:
          type: string
          $ref: '#/components/schemas/recording_enum_recording_trim'
          nullable: true
          description: >-
            The recording trim setting for the trunk. Can be do-not-trim
            (default) or trim-silence.
    recording_enum_recording_mode:
      type: string
      enum:
        - do-not-record
        - record-from-ringing
        - record-from-answer
        - record-from-ringing-dual
        - record-from-answer-dual
    recording_enum_recording_trim:
      type: string
      enum:
        - trim-silence
        - do-not-trim
    trunking.v1.trunk:
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
            the Trunk resource.
        domain_name:
          type: string
          nullable: true
          description: >-
            The unique address you reserve on Twilio to which you route your SIP
            traffic. Domain names can contain letters, digits, and `-` and must
            end with `pstn.twilio.com`. See [Termination
            Settings](https://www.twilio.com/docs/sip-trunking#termination) for
            more information.
        disaster_recovery_method:
          type: string
          format: http-method
          enum:
            - HEAD
            - GET
            - POST
            - PATCH
            - PUT
            - DELETE
          nullable: true
          description: >-
            The HTTP method we use to call the `disaster_recovery_url`. Can be:
            `GET` or `POST`.
        disaster_recovery_url:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL we call using the `disaster_recovery_method` if an error
            occurs while sending SIP traffic towards the configured Origination
            URL. We retrieve TwiML from this URL and execute the instructions
            like any other normal TwiML call. See [Disaster
            Recovery](https://www.twilio.com/docs/sip-trunking#disaster-recovery)
            for more information.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        friendly_name:
          type: string
          nullable: true
          description: The string that you assigned to describe the resource.
        secure:
          type: boolean
          nullable: true
          description: >-
            Whether Secure Trunking is enabled for the trunk. If enabled, all
            calls going through the trunk will be secure using SRTP for media
            and TLS for signaling. If disabled, then RTP will be used for media.
            See [Secure
            Trunking](https://www.twilio.com/docs/sip-trunking#securetrunking)
            for more information.
        recording:
          nullable: true
          description: >-
            The recording settings for the trunk. Can be: `do-not-record`,
            `record-from-ringing`, `record-from-answer`. If set to
            `record-from-ringing` or `record-from-answer`, all calls going
            through the trunk will be recorded. The only way to change recording
            parameters is on a sub-resource of a Trunk after it has been
            created. e.g.`/Trunks/[Trunk_SID]/Recording -XPOST
            -d'Mode=record-from-answer'`. See
            [Recording](https://www.twilio.com/docs/sip-trunking#recording) for
            more information.
        transfer_mode:
          type: string
          $ref: '#/components/schemas/trunk_enum_transfer_setting'
          nullable: true
          description: >-
            The call transfer settings for the trunk. Can be: `enable-all`,
            `sip-only` and `disable-all`. See
            [Transfer](https://www.twilio.com/docs/sip-trunking/call-transfer)
            for more information.
        transfer_caller_id:
          type: string
          $ref: '#/components/schemas/trunk_enum_transfer_caller_id'
          nullable: true
          description: >-
            Caller Id for transfer target. Can be: `from-transferee` (default)
            or `from-transferor`.
        cnam_lookup_enabled:
          type: boolean
          nullable: true
          description: >-
            Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If
            enabled, all inbound calls to the SIP Trunk from the United States
            and Canada automatically perform a CNAM Lookup and display Caller ID
            data on your phone. See [CNAM
            Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more
            information.
        auth_type:
          type: string
          nullable: true
          description: >-
            The types of authentication mapped to the domain. Can be: `IP_ACL`
            and `CREDENTIAL_LIST`. If both are mapped, the values are returned
            in a comma delimited list. If empty, the domain will not receive any
            traffic.
        auth_type_set:
          type: array
          items:
            type: string
          nullable: true
          description: Reserved.
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
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^TK[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique string that we created to identify the Trunk resource.
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
    trunk_enum_transfer_setting:
      type: string
      enum:
        - disable-all
        - enable-all
        - sip-only
    trunk_enum_transfer_caller_id:
      type: string
      enum:
        - from-transferee
        - from-transferor
    CreateCredentialListRequest:
      type: object
      required:
        - CredentialListSid
      properties:
        CredentialListSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CL[0-9a-fA-F]{32}$'
          description: >-
            The SID of the [Credential
            List](https://www.twilio.com/docs/voice/sip/api/sip-credentiallist-resource)
            that you want to associate with the trunk. Once associated, we will
            authenticate access to the trunk against this list.
    ListCredentialListResponse:
      type: object
      properties:
        credential_lists:
          type: array
          items:
            $ref: '#/components/schemas/trunking.v1.trunk.credential_list'
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
    CreateIpAccessControlListRequest:
      type: object
      required:
        - IpAccessControlListSid
      properties:
        IpAccessControlListSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AL[0-9a-fA-F]{32}$'
          description: >-
            The SID of the [IP Access Control
            List](https://www.twilio.com/docs/voice/sip/api/sip-ipaccesscontrollist-resource)
            that you want to associate with the trunk.
    ListIpAccessControlListResponse:
      type: object
      properties:
        ip_access_control_lists:
          type: array
          items:
            $ref: '#/components/schemas/trunking.v1.trunk.ip_access_control_list'
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
    UpdateOriginationUrlRequest:
      type: object
      properties:
        Weight:
          type: integer
          description: >-
            The value that determines the relative share of the load the URI
            should receive compared to other URIs with the same priority. Can be
            an integer from 1 to 65535, inclusive, and the default is 10. URLs
            with higher values receive more load than those with lower ones with
            the same priority.
        Priority:
          type: integer
          description: >-
            The relative importance of the URI. Can be an integer from 0 to
            65535, inclusive, and the default is 10. The lowest number
            represents the most important URI.
        Enabled:
          type: boolean
          description: Whether the URL is enabled. The default is `true`.
        FriendlyName:
          type: string
          description: >-
            A descriptive string that you create to describe the resource. It
            can be up to 64 characters long.
        SipUrl:
          type: string
          format: uri
          description: >-
            The SIP address you want Twilio to route your Origination calls to.
            This must be a `sip:` schema. `sips` is NOT supported.
    CreateOriginationUrlRequest:
      type: object
      required:
        - Weight
        - Priority
        - Enabled
        - FriendlyName
        - SipUrl
      properties:
        Weight:
          type: integer
          description: >-
            The value that determines the relative share of the load the URI
            should receive compared to other URIs with the same priority. Can be
            an integer from 1 to 65535, inclusive, and the default is 10. URLs
            with higher values receive more load than those with lower ones with
            the same priority.
        Priority:
          type: integer
          description: >-
            The relative importance of the URI. Can be an integer from 0 to
            65535, inclusive, and the default is 10. The lowest number
            represents the most important URI.
        Enabled:
          type: boolean
          description: Whether the URL is enabled. The default is `true`.
        FriendlyName:
          type: string
          description: >-
            A descriptive string that you create to describe the resource. It
            can be up to 64 characters long.
        SipUrl:
          type: string
          format: uri
          description: >-
            The SIP address you want Twilio to route your Origination calls to.
            This must be a `sip:` schema.
    ListOriginationUrlResponse:
      type: object
      properties:
        origination_urls:
          type: array
          items:
            $ref: '#/components/schemas/trunking.v1.trunk.origination_url'
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
    CreatePhoneNumberRequest:
      type: object
      required:
        - PhoneNumberSid
      properties:
        PhoneNumberSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^PN[0-9a-fA-F]{32}$'
          description: >-
            The SID of the [Incoming Phone
            Number](https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource)
            that you want to associate with the trunk.
    ListPhoneNumberResponse:
      type: object
      properties:
        phone_numbers:
          type: array
          items:
            $ref: '#/components/schemas/trunking.v1.trunk.phone_number'
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
    UpdateRecordingRequest:
      type: object
      properties:
        Mode:
          type: string
          $ref: '#/components/schemas/recording_enum_recording_mode'
          description: >-
            The recording mode for the trunk. Can be do-not-record (default),
            record-from-ringing, record-from-answer, record-from-ringing-dual,
            or record-from-answer-dual.
        Trim:
          type: string
          $ref: '#/components/schemas/recording_enum_recording_trim'
          description: >-
            The recording trim setting for the trunk. Can be do-not-trim
            (default) or trim-silence.
    UpdateTrunkRequest:
      type: object
      properties:
        FriendlyName:
          type: string
          description: >-
            A descriptive string that you create to describe the resource. It
            can be up to 64 characters long.
        DomainName:
          type: string
          description: >-
            The unique address you reserve on Twilio to which you route your SIP
            traffic. Domain names can contain letters, digits, and `-` and must
            end with `pstn.twilio.com`. See [Termination
            Settings](https://www.twilio.com/docs/sip-trunking#termination) for
            more information.
        DisasterRecoveryUrl:
          type: string
          format: uri
          description: >-
            The URL we should call using the `disaster_recovery_method` if an
            error occurs while sending SIP traffic towards the configured
            Origination URL. We retrieve TwiML from the URL and execute the
            instructions like any other normal TwiML call. See [Disaster
            Recovery](https://www.twilio.com/docs/sip-trunking#disaster-recovery)
            for more information.
        DisasterRecoveryMethod:
          type: string
          format: http-method
          enum:
            - HEAD
            - GET
            - POST
            - PATCH
            - PUT
            - DELETE
          description: >-
            The HTTP method we should use to call the `disaster_recovery_url`.
            Can be: `GET` or `POST`.
        TransferMode:
          type: string
          $ref: '#/components/schemas/trunk_enum_transfer_setting'
          description: >-
            The call transfer settings for the trunk. Can be: `enable-all`,
            `sip-only` and `disable-all`. See
            [Transfer](https://www.twilio.com/docs/sip-trunking/call-transfer)
            for more information.
        Secure:
          type: boolean
          description: >-
            Whether Secure Trunking is enabled for the trunk. If enabled, all
            calls going through the trunk will be secure using SRTP for media
            and TLS for signaling. If disabled, then RTP will be used for media.
            See [Secure
            Trunking](https://www.twilio.com/docs/sip-trunking#securetrunking)
            for more information.
        CnamLookupEnabled:
          type: boolean
          description: >-
            Whether Caller ID Name (CNAM) lookup should be enabled for the
            trunk. If enabled, all inbound calls to the SIP Trunk from the
            United States and Canada automatically perform a CNAM Lookup and
            display Caller ID data on your phone. See [CNAM
            Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more
            information.
        TransferCallerId:
          type: string
          $ref: '#/components/schemas/trunk_enum_transfer_caller_id'
          description: >-
            Caller Id for transfer target. Can be: `from-transferee` (default)
            or `from-transferor`.
    CreateTrunkRequest:
      type: object
      properties:
        FriendlyName:
          type: string
          description: >-
            A descriptive string that you create to describe the resource. It
            can be up to 64 characters long.
        DomainName:
          type: string
          description: >-
            The unique address you reserve on Twilio to which you route your SIP
            traffic. Domain names can contain letters, digits, and `-` and must
            end with `pstn.twilio.com`. See [Termination
            Settings](https://www.twilio.com/docs/sip-trunking#termination) for
            more information.
        DisasterRecoveryUrl:
          type: string
          format: uri
          description: >-
            The URL we should call using the `disaster_recovery_method` if an
            error occurs while sending SIP traffic towards the configured
            Origination URL. We retrieve TwiML from the URL and execute the
            instructions like any other normal TwiML call. See [Disaster
            Recovery](https://www.twilio.com/docs/sip-trunking#disaster-recovery)
            for more information.
        DisasterRecoveryMethod:
          type: string
          format: http-method
          enum:
            - HEAD
            - GET
            - POST
            - PATCH
            - PUT
            - DELETE
          description: >-
            The HTTP method we should use to call the `disaster_recovery_url`.
            Can be: `GET` or `POST`.
        TransferMode:
          type: string
          $ref: '#/components/schemas/trunk_enum_transfer_setting'
          description: >-
            The call transfer settings for the trunk. Can be: `enable-all`,
            `sip-only` and `disable-all`. See
            [Transfer](https://www.twilio.com/docs/sip-trunking/call-transfer)
            for more information.
        Secure:
          type: boolean
          description: >-
            Whether Secure Trunking is enabled for the trunk. If enabled, all
            calls going through the trunk will be secure using SRTP for media
            and TLS for signaling. If disabled, then RTP will be used for media.
            See [Secure
            Trunking](https://www.twilio.com/docs/sip-trunking#securetrunking)
            for more information.
        CnamLookupEnabled:
          type: boolean
          description: >-
            Whether Caller ID Name (CNAM) lookup should be enabled for the
            trunk. If enabled, all inbound calls to the SIP Trunk from the
            United States and Canada automatically perform a CNAM Lookup and
            display Caller ID data on your phone. See [CNAM
            Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more
            information.
        TransferCallerId:
          type: string
          $ref: '#/components/schemas/trunk_enum_transfer_caller_id'
          description: >-
            Caller Id for transfer target. Can be: `from-transferee` (default)
            or `from-transferor`.
    ListTrunkResponse:
      type: object
      properties:
        trunks:
          type: array
          items:
            $ref: '#/components/schemas/trunking.v1.trunk'
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
  securitySchemes:
    accountSid_authToken:
      type: http
      scheme: basic
info:
  title: Twilio - Trunking
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
  '/v1/Trunks/{TrunkSid}/CredentialLists/{Sid}':
    servers:
      - url: 'https://trunking.twilio.com'
    description: List of credentials for accessing a trunk
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - date_created
      pathType: instance
      parent: '/Trunks/{Sid}'
      mountName: credentials_lists
      className: credential_list
    get:
      description: ''
      tags:
        - TrunkingV1CredentialList
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk from which to fetch the credential list.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The unique string that we created to identify the CredentialList
            resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^CL[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/trunking.v1.trunk.credential_list'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchCredentialList
      x-maturity:
        - GA
    delete:
      description: ''
      tags:
        - TrunkingV1CredentialList
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk from which to delete the credential list.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The unique string that we created to identify the CredentialList
            resource to delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^CL[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteCredentialList
      x-maturity:
        - GA
  '/v1/Trunks/{TrunkSid}/CredentialLists':
    servers:
      - url: 'https://trunking.twilio.com'
    description: List of credentials for accessing a trunk
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - date_created
      pathType: list
      parent: '/Trunks/{Sid}'
      mountName: credentials_lists
      className: credential_list
    post:
      description: ''
      tags:
        - TrunkingV1CredentialList
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk to associate the credential list with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/trunking.v1.trunk.credential_list'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateCredentialList
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateCredentialListRequest'
    get:
      description: ''
      tags:
        - TrunkingV1CredentialList
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk from which to read the credential lists.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
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
                $ref: '#/components/schemas/ListCredentialListResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListCredentialList
      x-maturity:
        - GA
  '/v1/Trunks/{TrunkSid}/IpAccessControlLists/{Sid}':
    servers:
      - url: 'https://trunking.twilio.com'
    description: List of IP addresses for accessing a trunk
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - date_created
      pathType: instance
      parent: '/Trunks/{Sid}'
    get:
      description: ''
      tags:
        - TrunkingV1IpAccessControlList
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk from which to fetch the IP Access Control List.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The unique string that we created to identify the
            IpAccessControlList resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^AL[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/trunking.v1.trunk.ip_access_control_list'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchIpAccessControlList
      x-maturity:
        - GA
    delete:
      description: Remove an associated IP Access Control List from a Trunk
      tags:
        - TrunkingV1IpAccessControlList
      parameters:
        - name: TrunkSid
          in: path
          description: >-
            The SID of the Trunk from which to delete the IP Access Control
            List.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The unique string that we created to identify the
            IpAccessControlList resource to delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^AL[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteIpAccessControlList
      x-maturity:
        - GA
  '/v1/Trunks/{TrunkSid}/IpAccessControlLists':
    servers:
      - url: 'https://trunking.twilio.com'
    description: List of IP addresses for accessing a trunk
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - date_created
      pathType: list
      parent: '/Trunks/{Sid}'
    post:
      description: Associate an IP Access Control List with a Trunk
      tags:
        - TrunkingV1IpAccessControlList
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk to associate the IP Access Control List with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/trunking.v1.trunk.ip_access_control_list'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateIpAccessControlList
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateIpAccessControlListRequest'
    get:
      description: List all IP Access Control Lists for a Trunk
      tags:
        - TrunkingV1IpAccessControlList
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk from which to read the IP Access Control Lists.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
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
                $ref: '#/components/schemas/ListIpAccessControlListResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListIpAccessControlList
      x-maturity:
        - GA
  '/v1/Trunks/{TrunkSid}/OriginationUrls/{Sid}':
    servers:
      - url: 'https://trunking.twilio.com'
    description: Network element entry points into your communications infrastructure
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - sip_url
        - priority
        - weight
      pathType: instance
      parent: '/Trunks/{Sid}'
    get:
      description: ''
      tags:
        - TrunkingV1OriginationUrl
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk from which to fetch the OriginationUrl.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The unique string that we created to identify the OriginationUrl
            resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^OU[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/trunking.v1.trunk.origination_url'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchOriginationUrl
      x-maturity:
        - GA
    delete:
      description: ''
      tags:
        - TrunkingV1OriginationUrl
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk from which to delete the OriginationUrl.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The unique string that we created to identify the OriginationUrl
            resource to delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^OU[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteOriginationUrl
      x-maturity:
        - GA
    post:
      description: ''
      tags:
        - TrunkingV1OriginationUrl
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk from which to update the OriginationUrl.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The unique string that we created to identify the OriginationUrl
            resource to update.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^OU[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/trunking.v1.trunk.origination_url'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateOriginationUrl
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateOriginationUrlRequest'
  '/v1/Trunks/{TrunkSid}/OriginationUrls':
    servers:
      - url: 'https://trunking.twilio.com'
    description: Network element entry points into your communications infrastructure
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - sip_url
        - priority
        - weight
      pathType: list
      parent: '/Trunks/{Sid}'
    post:
      description: ''
      tags:
        - TrunkingV1OriginationUrl
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk to associate the resource with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/trunking.v1.trunk.origination_url'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateOriginationUrl
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateOriginationUrlRequest'
    get:
      description: ''
      tags:
        - TrunkingV1OriginationUrl
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk from which to read the OriginationUrl.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
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
                $ref: '#/components/schemas/ListOriginationUrlResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListOriginationUrl
      x-maturity:
        - GA
  '/v1/Trunks/{TrunkSid}/PhoneNumbers/{Sid}':
    servers:
      - url: 'https://trunking.twilio.com'
    description: Phone numbers associated with trunks
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - phone_number
      pathType: instance
      parent: '/Trunks/{Sid}'
    get:
      description: ''
      tags:
        - TrunkingV1PhoneNumber
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk from which to fetch the PhoneNumber resource.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The unique string that we created to identify the PhoneNumber
            resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^PN[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/trunking.v1.trunk.phone_number'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchPhoneNumber
      x-maturity:
        - GA
    delete:
      description: ''
      tags:
        - TrunkingV1PhoneNumber
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk from which to delete the PhoneNumber resource.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The unique string that we created to identify the PhoneNumber
            resource to delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^PN[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeletePhoneNumber
      x-maturity:
        - GA
  '/v1/Trunks/{TrunkSid}/PhoneNumbers':
    servers:
      - url: 'https://trunking.twilio.com'
    description: Phone numbers associated with trunks
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - phone_number
      pathType: list
      parent: '/Trunks/{Sid}'
    post:
      description: ''
      tags:
        - TrunkingV1PhoneNumber
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk to associate the phone number with.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/trunking.v1.trunk.phone_number'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreatePhoneNumber
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreatePhoneNumberRequest'
    get:
      description: ''
      tags:
        - TrunkingV1PhoneNumber
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk from which to read the PhoneNumber resources.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
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
                $ref: '#/components/schemas/ListPhoneNumberResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListPhoneNumber
      x-maturity:
        - GA
  '/v1/Trunks/{TrunkSid}/Recording':
    servers:
      - url: 'https://trunking.twilio.com'
    description: Recording settings for a trunk
    x-twilio:
      defaultOutputProperties:
        - mode
        - trim
      pathType: instance
      parent: '/Trunks/{Sid}'
      mountName: recordings
    get:
      description: ''
      tags:
        - TrunkingV1Recording
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk from which to fetch the recording settings.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/trunking.v1.trunk.recording'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchRecording
      x-maturity:
        - GA
    post:
      description: ''
      tags:
        - TrunkingV1Recording
      parameters:
        - name: TrunkSid
          in: path
          description: The SID of the Trunk that will have its recording settings updated.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '202':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/trunking.v1.trunk.recording'
          description: Accepted
      security:
        - accountSid_authToken: []
      operationId: UpdateRecording
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateRecordingRequest'
  '/v1/Trunks/{Sid}':
    servers:
      - url: 'https://trunking.twilio.com'
    description: Represents a SIP trunk
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - domain_name
      pathType: instance
      dependentProperties:
        origination_urls:
          mapping:
            trunk_sid: sid
          resource_url: '/v1/Trunks/{trunk_sid}/OriginationUrls'
        credentials_lists:
          mapping:
            trunk_sid: sid
          resource_url: '/v1/Trunks/{trunk_sid}/CredentialLists'
        ip_access_control_lists:
          mapping:
            trunk_sid: sid
          resource_url: '/v1/Trunks/{trunk_sid}/IpAccessControlLists'
        phone_numbers:
          mapping:
            trunk_sid: sid
          resource_url: '/v1/Trunks/{trunk_sid}/PhoneNumbers'
        recordings:
          mapping:
            trunk_sid: sid
          resource_url: /v1None
    get:
      description: ''
      tags:
        - TrunkingV1Trunk
      parameters:
        - name: Sid
          in: path
          description: >-
            The unique string that we created to identify the Trunk resource to
            fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/trunking.v1.trunk'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchTrunk
      x-maturity:
        - GA
    delete:
      description: ''
      tags:
        - TrunkingV1Trunk
      parameters:
        - name: Sid
          in: path
          description: >-
            The unique string that we created to identify the Trunk resource to
            delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteTrunk
      x-maturity:
        - GA
    post:
      description: ''
      tags:
        - TrunkingV1Trunk
      parameters:
        - name: Sid
          in: path
          description: >-
            The unique string that we created to identify the OriginationUrl
            resource to update.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^TK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/trunking.v1.trunk'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateTrunk
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateTrunkRequest'
  /v1/Trunks:
    servers:
      - url: 'https://trunking.twilio.com'
    description: Represents a SIP trunk
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - domain_name
      pathType: list
      dependentProperties:
        origination_urls:
          mapping:
            trunk_sid: sid
          resource_url: '/v1/Trunks/{trunk_sid}/OriginationUrls'
        credentials_lists:
          mapping:
            trunk_sid: sid
          resource_url: '/v1/Trunks/{trunk_sid}/CredentialLists'
        ip_access_control_lists:
          mapping:
            trunk_sid: sid
          resource_url: '/v1/Trunks/{trunk_sid}/IpAccessControlLists'
        phone_numbers:
          mapping:
            trunk_sid: sid
          resource_url: '/v1/Trunks/{trunk_sid}/PhoneNumbers'
        recordings:
          mapping:
            trunk_sid: sid
          resource_url: /v1None
    post:
      description: ''
      tags:
        - TrunkingV1Trunk
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/trunking.v1.trunk'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateTrunk
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateTrunkRequest'
    get:
      description: ''
      tags:
        - TrunkingV1Trunk
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
                $ref: '#/components/schemas/ListTrunkResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListTrunk
      x-maturity:
        - GA
servers:
  - url: 'https://trunking.twilio.com'
tags:
  - name: TrunkingV1CredentialList
  - name: TrunkingV1IpAccessControlList
  - name: TrunkingV1OriginationUrl
  - name: TrunkingV1PhoneNumber
  - name: TrunkingV1Recording
  - name: TrunkingV1Trunk
x-maturity:
  - name: GA
    description: This product is Generally Available.
---