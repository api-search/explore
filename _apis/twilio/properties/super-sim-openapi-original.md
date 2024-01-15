---
components:
  schemas:
    supersim.v1.sim.billing_period:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HB[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the Billing Period.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) the Super SIM
            belongs to.
        sim_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HS[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the Super SIM the Billing Period belongs to.
        start_time:
          type: string
          format: date-time
          nullable: true
          description: >-
            The start time of the Billing Period specified in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        end_time:
          type: string
          format: date-time
          nullable: true
          description: >-
            The end time of the Billing Period specified in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        period_type:
          type: string
          $ref: '#/components/schemas/billing_period_enum_bp_type'
          nullable: true
          description: The type of Billing Period. Can be `ready` or `active`.
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
    billing_period_enum_bp_type:
      type: string
      enum:
        - ready
        - active
    supersim.v1.esim_profile:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HP[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the eSIM Profile
            resource.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) to which the
            eSIM Profile resource belongs.
        iccid:
          type: string
          nullable: true
          description: >-
            The
            [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID)
            associated with the Sim resource.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        sim_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HS[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Sim](https://www.twilio.com/docs/iot/supersim/api/sim-resource)
            resource that this eSIM Profile controls.
        status:
          type: string
          $ref: '#/components/schemas/esim_profile_enum_status'
          nullable: true
          description: >-
            The status of the eSIM Profile. Can be: `new`, `reserving`,
            `available`, `downloaded`, `installed` or `failed`. See the [eSIM
            Profile Status
            Values](https://www.twilio.com/docs/iot/supersim/api/esimprofile-resource#status-values)
            for a description of each.
        eid:
          type: string
          nullable: true
          description: Identifier of the eUICC that can claim the eSIM Profile.
        smdp_plus_address:
          type: string
          format: uri
          nullable: true
          description: >-
            Address of the SM-DP+ server from which the Profile will be
            downloaded. The URL will appear once the eSIM Profile reaches the
            status `available`.
        matching_id:
          type: string
          nullable: true
          description: >-
            Unique identifier of the eSIM profile that can be used to identify
            and download the eSIM profile from the SM-DP+ server. Populated if
            `generate_matching_id` is set to `true` when creating the eSIM
            profile reservation.
        activation_code:
          type: string
          nullable: true
          description: >-
            Combined machine-readable activation code for acquiring an eSIM
            Profile with the Activation Code download method. Can be used in a
            QR code to download an eSIM profile.
        error_code:
          type: string
          nullable: true
          description: >-
            Code indicating the failure if the download of the SIM Profile
            failed and the eSIM Profile is in `failed` state.
        error_message:
          type: string
          nullable: true
          description: >-
            Error message describing the failure if the download of the SIM
            Profile failed and the eSIM Profile is in `failed` state.
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
          description: The absolute URL of the eSIM Profile resource.
    esim_profile_enum_status:
      type: string
      enum:
        - new
        - reserving
        - available
        - downloaded
        - installed
        - failed
    supersim.v1.fleet:
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
            the Fleet resource.
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HF[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique string that we created to identify the Fleet resource.
        unique_name:
          type: string
          nullable: true
          description: >-
            An application-defined string that uniquely identifies the resource.
            It can be used in place of the resource's `sid` in the URL to
            address the resource.
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
          description: The absolute URL of the Fleet resource.
        data_enabled:
          type: boolean
          nullable: true
          description: >-
            Defines whether SIMs in the Fleet are capable of using
            2G/3G/4G/LTE/CAT-M data connectivity. Defaults to `true`.
        data_limit:
          type: integer
          nullable: true
          description: >-
            The total data usage (download and upload combined) in Megabytes
            that each Super SIM assigned to the Fleet can consume during a
            billing period (normally one month). Value must be between 1MB (1)
            and 2TB (2,000,000). Defaults to 250MB.
        data_metering:
          type: string
          $ref: '#/components/schemas/fleet_enum_data_metering'
          nullable: true
          description: >-
            The model by which a SIMs usage is metered and billed. Defaults to
            `payg`.
        sms_commands_enabled:
          type: boolean
          nullable: true
          description: >-
            Defines whether SIMs in the Fleet are capable of sending and
            receiving machine-to-machine SMS via Commands. Defaults to `false`.
        sms_commands_url:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL that will receive a webhook when a Super SIM in the Fleet is
            used to send an SMS from your device to the SMS Commands number.
            Your server should respond with an HTTP status code in the 200
            range; any response body will be ignored.
        sms_commands_method:
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
            A string representing the HTTP method to use when making a request
            to `sms_commands_url`. Can be one of `POST` or `GET`. Defaults to
            `POST`.
        network_access_profile_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HA[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the Network Access Profile that controls which cellular
            networks the Fleet's SIMs can connect to.
        ip_commands_url:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL that will receive a webhook when a Super SIM in the Fleet is
            used to send an IP Command from your device to a special IP address.
            Your server should respond with an HTTP status code in the 200
            range; any response body will be ignored.
        ip_commands_method:
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
            A string representing the HTTP method to use when making a request
            to `ip_commands_url`. Can be one of `POST` or `GET`. Defaults to
            `POST`.
    fleet_enum_data_metering:
      type: string
      enum:
        - payg
    supersim.v1.ip_command:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HG[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the IP Command
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
            the IP Command resource.
        sim_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HS[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the [Super
            SIM](https://www.twilio.com/docs/iot/supersim/api/sim-resource) that
            this IP Command was sent to or from.
        sim_iccid:
          type: string
          nullable: true
          description: >-
            The
            [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID)
            of the [Super
            SIM](https://www.twilio.com/docs/iot/supersim/api/sim-resource) that
            this IP Command was sent to or from.
        status:
          type: string
          $ref: '#/components/schemas/ip_command_enum_status'
          nullable: true
          description: >-
            The delivery status of the IP Command. This is one of the following:
            “queued”, “sent”, “failed” or “received”.
        direction:
          type: string
          $ref: '#/components/schemas/ip_command_enum_direction'
          nullable: true
          description: >-
            Either `to_sim` or `from_sim`. Indicates whether the IP Command
            resource was sent from or to the Super SIM.
        device_ip:
          type: string
          nullable: true
          description: >-
            The IP address of the device that the IP Command was sent to or
            received from. For an IP Command sent to a Super SIM, `device_ip`
            starts out as `null`, and once the IP Command is “sent”, the
            `device_ip` will be filled out. An IP Command sent from a Super SIM
            have its `device_ip` always set.
        device_port:
          type: integer
          nullable: true
          description: >-
            For an IP Command sent to a Super SIM, it would be the destination
            port of the IP message. For an IP Command sent from a Super SIM, it
            would be the source port of the IP message.
        payload_type:
          type: string
          $ref: '#/components/schemas/ip_command_enum_payload_type'
          nullable: true
          description: >-
            Either “text” or “binary”. For an IP Command sent to a Super SIM,
            `payload_type` is configurable. For an IP Command sent from a Super
            SIM, `payload_type` is always “binary”.
        payload:
          type: string
          nullable: true
          description: >-
            The payload that is carried in the IP/UDP message. The payload can
            be encoded in either text or binary format. For text payload, UTF-8
            encoding must be used.


            For an IP Command sent to a Super SIM, the payload is appended to
            the IP/UDP message “as is”. The payload should not exceed 1300
            bytes.


            For an IP Command sent from a Super SIM, the payload from the
            received IP/UDP message is extracted and sent in binary encoding.
            For an IP Command sent from a Super SIM, the payload should not
            exceed 1300 bytes. If it is larger than 1300 bytes, there might be
            fragmentation on the upstream and the message may appear truncated.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
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
          description: The absolute URL of the IP Command resource.
    ip_command_enum_status:
      type: string
      enum:
        - queued
        - sent
        - received
        - failed
    ip_command_enum_direction:
      type: string
      enum:
        - to_sim
        - from_sim
    ip_command_enum_payload_type:
      type: string
      enum:
        - text
        - binary
    supersim.v1.network:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HW[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique string that we created to identify the Network resource.
        friendly_name:
          type: string
          nullable: true
          description: A human readable identifier of this resource.
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the Network resource.
        iso_country:
          type: string
          nullable: true
          description: >-
            The [ISO country
            code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the
            Network resource.
        identifiers:
          type: array
          items: {}
          nullable: true
          description: >-
            Array of objects identifying the
            [MCC-MNCs](https://en.wikipedia.org/wiki/Mobile_country_code) that
            are included in the Network resource.
    supersim.v1.network_access_profile:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HA[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that identifies the Network Access Profile
            resource.
        unique_name:
          type: string
          nullable: true
          description: >-
            An application-defined string that uniquely identifies the resource.
            It can be used in place of the resource's `sid` in the URL to
            address the resource.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) that the
            Network Access Profile belongs to.
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
          description: The absolute URL of the Network Access Profile resource.
        links:
          type: object
          format: uri-map
          nullable: true
    supersim.v1.network_access_profile.network_access_profile_network:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HW[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique string that identifies the Network resource.
        network_access_profile_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HA[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that identifies the Network resource's Network
            Access Profile resource.
        friendly_name:
          type: string
          nullable: true
          description: A human readable identifier of the Network this resource refers to.
        iso_country:
          type: string
          nullable: true
          description: >-
            The [ISO country
            code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the
            Network resource.
        identifiers:
          type: array
          items: {}
          nullable: true
          description: >-
            Array of objects identifying the
            [MCC-MNCs](https://en.wikipedia.org/wiki/Mobile_country_code) that
            are included in the Network resource.
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the Network resource.
    supersim.v1.settings_update:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^OB[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique identifier of this Settings Update.
        iccid:
          type: string
          nullable: true
          description: >-
            The [ICCID](https://en.wikipedia.org/wiki/SIM_card#ICCID) associated
            with the SIM.
        sim_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HS[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the Super SIM to which this Settings Update was applied.
        status:
          type: string
          $ref: '#/components/schemas/settings_update_enum_status'
          nullable: true
          description: >-
            The Status of this Settings Update. One of `scheduled`,
            `in-progress`, `successful` or `failed`.
        packages:
          type: array
          items: {}
          nullable: true
          description: >-
            Array containing the different Settings Packages that will be
            applied to the SIM after the update completes. Each object within
            the array indicates the name and the version of the Settings Package
            that will be on the SIM if the update is successful.
        date_completed:
          type: string
          format: date-time
          nullable: true
          description: >-
            The time, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the
            update successfully completed and the new settings were applied to
            the SIM.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Settings Update was created, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        date_updated:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date that this Settings Update was updated, given in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
    settings_update_enum_status:
      type: string
      enum:
        - scheduled
        - in-progress
        - successful
        - failed
    supersim.v1.sim:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HS[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique string that identifies the Sim resource.
        unique_name:
          type: string
          nullable: true
          description: >-
            An application-defined string that uniquely identifies the resource.
            It can be used in place of the resource's `sid` in the URL to
            address the resource.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) that the
            Super SIM belongs to.
        iccid:
          type: string
          nullable: true
          description: >-
            The
            [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID)
            associated with the SIM.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        status:
          type: string
          $ref: '#/components/schemas/sim_enum_status'
          nullable: true
          description: >-
            The status of the Super SIM. Can be `new`, `ready`, `active`,
            `inactive`, or `scheduled`. See the [Super SIM Status
            Values](https://www.twilio.com/docs/iot/supersim/api/sim-resource#status-values)
            for a description of each.
        fleet_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HF[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique ID of the Fleet configured for this SIM.
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
          description: The absolute URL of the Sim Resource.
        links:
          type: object
          format: uri-map
          nullable: true
    sim_enum_status:
      type: string
      enum:
        - new
        - ready
        - active
        - inactive
        - scheduled
    sim_enum_status_update:
      type: string
      enum:
        - ready
        - active
        - inactive
    supersim.v1.sim.sim_ip_address:
      type: object
      properties:
        ip_address:
          type: string
          nullable: true
          description: IP address assigned to the given Super SIM
        ip_address_version:
          type: string
          $ref: '#/components/schemas/sim_ip_address_enum_ip_address_version'
          nullable: true
          description: IP address version of the corresponding IP address
    sim_ip_address_enum_ip_address_version:
      type: string
      enum:
        - IPv4
        - IPv6
    supersim.v1.sms_command:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the SMS Command
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
            the SMS Command resource.
        sim_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HS[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [SIM](https://www.twilio.com/docs/iot/supersim/api/sim-resource)
            that this SMS Command was sent to or from.
        payload:
          type: string
          nullable: true
          description: >-
            The message body of the SMS Command sent to or from the SIM. For
            text mode messages, this can be up to 160 characters.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        status:
          type: string
          $ref: '#/components/schemas/sms_command_enum_status'
          nullable: true
          description: >-
            The status of the SMS Command. Can be: `queued`, `sent`,
            `delivered`, `received` or `failed`. See the [SMS Command Status
            Values](https://www.twilio.com/docs/iot/supersim/api/smscommand-resource#status-values)
            for a description of each.
        direction:
          type: string
          $ref: '#/components/schemas/sms_command_enum_direction'
          nullable: true
          description: >-
            The direction of the SMS Command. Can be `to_sim` or `from_sim`. The
            value of `to_sim` is synonymous with the term `mobile terminated`,
            and `from_sim` is synonymous with the term `mobile originated`.
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
          description: The absolute URL of the SMS Command resource.
    sms_command_enum_status:
      type: string
      enum:
        - queued
        - sent
        - delivered
        - received
        - failed
    sms_command_enum_direction:
      type: string
      enum:
        - to_sim
        - from_sim
    supersim.v1.usage_record:
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
            [Account](https://www.twilio.com/docs/iam/api/account) that incurred
            the usage.
        sim_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HS[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            SID of a Sim resource to which the UsageRecord belongs. Value will
            only be present when either a value for the `Sim` query parameter is
            provided or when UsageRecords are grouped by `sim`. Otherwise, the
            value will be `null`.
        network_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HW[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            SID of the Network resource the usage occurred on. Value will only
            be present when either a value for the `Network` query parameter is
            provided or when UsageRecords are grouped by `network`. Otherwise,
            the value will be `null`.
        fleet_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HF[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            SID of the Fleet resource the usage occurred on. Value will only be
            present when either a value for the `Fleet` query parameter is
            provided or when UsageRecords are grouped by `fleet`. Otherwise, the
            value will be `null`.
        iso_country:
          type: string
          format: iso-country-code
          nullable: true
          description: >-
            Alpha-2 ISO Country Code that the usage occurred in. Value will only
            be present when either a value for the `IsoCountry` query parameter
            is provided or when UsageRecords are grouped by `isoCountry`.
            Otherwise, the value will be `null`.
        period:
          nullable: true
          description: >-
            The time period for which the usage is reported. The period is
            represented as a pair of `start_time` and `end_time` timestamps
            specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
            format.
        data_upload:
          type: integer
          format: int64
          nullable: true
          description: 'Total data uploaded in bytes, aggregated by the query parameters.'
        data_download:
          type: integer
          format: int64
          nullable: true
          description: 'Total data downloaded in bytes, aggregated by the query parameters.'
        data_total:
          type: integer
          format: int64
          nullable: true
          description: Total of data_upload and data_download.
        data_total_billed:
          type: number
          nullable: true
          description: >-
            Total amount in the `billed_unit` that was charged for the data
            uploaded or downloaded. Will return 0 for usage prior to February 1,
            2022. Value may be 0 despite `data_total` being greater than 0 if
            the data usage is still being processed by Twilio's billing system.
            Refer to [Data Usage
            Processing](https://www.twilio.com/docs/iot/supersim/api/usage-record-resource#data-usage-processing)
            for more details.
        billed_unit:
          type: string
          format: currency
          nullable: true
          description: >-
            The currency in which the billed amounts are measured, specified in
            the 3 letter ISO 4127 format (e.g. `USD`, `EUR`, `JPY`). This can be
            null when data_toal_billed is 0 and we do not yet have billing
            information for the corresponding data usage. Refer to [Data Usage
            Processing](https://www.twilio.com/docs/iot/supersim/api/usage-record-resource#data-usage-processing)
            for more details.
    usage_record_enum_granularity:
      type: string
      enum:
        - hour
        - day
        - all
    usage_record_enum_group:
      type: string
      enum:
        - sim
        - fleet
        - network
        - isoCountry
    usage_record_enum_sort_by:
      type: string
      enum:
        - time
    ListBillingPeriodResponse:
      type: object
      properties:
        billing_periods:
          type: array
          items:
            $ref: '#/components/schemas/supersim.v1.sim.billing_period'
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
    CreateEsimProfileRequest:
      type: object
      properties:
        CallbackUrl:
          type: string
          description: >-
            The URL we should call using the `callback_method` when the status
            of the eSIM Profile changes. At this stage of the eSIM Profile
            pilot, the a request to the URL will only be called when the
            ESimProfile resource changes from `reserving` to `available`.
        CallbackMethod:
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
            The HTTP method we should use to call `callback_url`. Can be: `GET`
            or `POST` and the default is POST.
        GenerateMatchingId:
          type: boolean
          description: >-
            When set to `true`, a value for `Eid` does not need to be provided.
            Instead, when the eSIM profile is reserved, a matching ID will be
            generated and returned via the `matching_id` property. This
            identifies the specific eSIM profile that can be used by any capable
            device to claim and download the profile.
        Eid:
          type: string
          description: Identifier of the eUICC that will claim the eSIM Profile.
    ListEsimProfileResponse:
      type: object
      properties:
        esim_profiles:
          type: array
          items:
            $ref: '#/components/schemas/supersim.v1.esim_profile'
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
    CreateFleetRequest:
      type: object
      required:
        - NetworkAccessProfile
      properties:
        NetworkAccessProfile:
          type: string
          description: >-
            The SID or unique name of the Network Access Profile that will
            control which cellular networks the Fleet's SIMs can connect to.
        UniqueName:
          type: string
          description: >-
            An application-defined string that uniquely identifies the resource.
            It can be used in place of the resource's `sid` in the URL to
            address the resource.
        DataEnabled:
          type: boolean
          description: >-
            Defines whether SIMs in the Fleet are capable of using
            2G/3G/4G/LTE/CAT-M data connectivity. Defaults to `true`.
        DataLimit:
          type: integer
          description: >-
            The total data usage (download and upload combined) in Megabytes
            that each Super SIM assigned to the Fleet can consume during a
            billing period (normally one month). Value must be between 1MB (1)
            and 2TB (2,000,000). Defaults to 1GB (1,000).
        IpCommandsUrl:
          type: string
          format: uri
          description: >-
            The URL that will receive a webhook when a Super SIM in the Fleet is
            used to send an IP Command from your device to a special IP address.
            Your server should respond with an HTTP status code in the 200
            range; any response body will be ignored.
        IpCommandsMethod:
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
            A string representing the HTTP method to use when making a request
            to `ip_commands_url`. Can be one of `POST` or `GET`. Defaults to
            `POST`.
        SmsCommandsEnabled:
          type: boolean
          description: >-
            Defines whether SIMs in the Fleet are capable of sending and
            receiving machine-to-machine SMS via Commands. Defaults to `true`.
        SmsCommandsUrl:
          type: string
          format: uri
          description: >-
            The URL that will receive a webhook when a Super SIM in the Fleet is
            used to send an SMS from your device to the SMS Commands number.
            Your server should respond with an HTTP status code in the 200
            range; any response body will be ignored.
        SmsCommandsMethod:
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
            A string representing the HTTP method to use when making a request
            to `sms_commands_url`. Can be one of `POST` or `GET`. Defaults to
            `POST`.
    ListFleetResponse:
      type: object
      properties:
        fleets:
          type: array
          items:
            $ref: '#/components/schemas/supersim.v1.fleet'
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
    UpdateFleetRequest:
      type: object
      properties:
        UniqueName:
          type: string
          description: >-
            An application-defined string that uniquely identifies the resource.
            It can be used in place of the resource's `sid` in the URL to
            address the resource.
        NetworkAccessProfile:
          type: string
          description: >-
            The SID or unique name of the Network Access Profile that will
            control which cellular networks the Fleet's SIMs can connect to.
        IpCommandsUrl:
          type: string
          format: uri
          description: >-
            The URL that will receive a webhook when a Super SIM in the Fleet is
            used to send an IP Command from your device to a special IP address.
            Your server should respond with an HTTP status code in the 200
            range; any response body will be ignored.
        IpCommandsMethod:
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
            A string representing the HTTP method to use when making a request
            to `ip_commands_url`. Can be one of `POST` or `GET`. Defaults to
            `POST`.
        SmsCommandsUrl:
          type: string
          format: uri
          description: >-
            The URL that will receive a webhook when a Super SIM in the Fleet is
            used to send an SMS from your device to the SMS Commands number.
            Your server should respond with an HTTP status code in the 200
            range; any response body will be ignored.
        SmsCommandsMethod:
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
            A string representing the HTTP method to use when making a request
            to `sms_commands_url`. Can be one of `POST` or `GET`. Defaults to
            `POST`.
        DataLimit:
          type: integer
          description: >-
            The total data usage (download and upload combined) in Megabytes
            that each Super SIM assigned to the Fleet can consume during a
            billing period (normally one month). Value must be between 1MB (1)
            and 2TB (2,000,000). Defaults to 1GB (1,000).
    CreateIpCommandRequest:
      type: object
      required:
        - Sim
        - Payload
        - DevicePort
      properties:
        Sim:
          type: string
          description: >-
            The `sid` or `unique_name` of the [Super
            SIM](https://www.twilio.com/docs/iot/supersim/api/sim-resource) to
            send the IP Command to.
        Payload:
          type: string
          description: >-
            The data that will be sent to the device. The payload cannot exceed
            1300 bytes. If the PayloadType is set to text, the payload is
            encoded in UTF-8. If PayloadType is set to binary, the payload is
            encoded in Base64.
        DevicePort:
          type: integer
          description: The device port to which the IP Command will be sent.
        PayloadType:
          type: string
          $ref: '#/components/schemas/ip_command_enum_payload_type'
          description: >-
            Indicates how the payload is encoded. Either `text` or `binary`.
            Defaults to `text`.
        CallbackUrl:
          type: string
          format: uri
          description: >-
            The URL we should call using the `callback_method` after we have
            sent the IP Command.
        CallbackMethod:
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
            The HTTP method we should use to call `callback_url`. Can be `GET`
            or `POST`, and the default is `POST`.
    ListIpCommandResponse:
      type: object
      properties:
        ip_commands:
          type: array
          items:
            $ref: '#/components/schemas/supersim.v1.ip_command'
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
    ListNetworkResponse:
      type: object
      properties:
        networks:
          type: array
          items:
            $ref: '#/components/schemas/supersim.v1.network'
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
    CreateNetworkAccessProfileRequest:
      type: object
      properties:
        UniqueName:
          type: string
          description: >-
            An application-defined string that uniquely identifies the resource.
            It can be used in place of the resource's `sid` in the URL to
            address the resource.
        Networks:
          type: array
          items:
            type: string
          description: >-
            List of Network SIDs that this Network Access Profile will allow
            connections to.
    ListNetworkAccessProfileResponse:
      type: object
      properties:
        network_access_profiles:
          type: array
          items:
            $ref: '#/components/schemas/supersim.v1.network_access_profile'
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
    UpdateNetworkAccessProfileRequest:
      type: object
      properties:
        UniqueName:
          type: string
          description: The new unique name of the Network Access Profile.
    ListNetworkAccessProfileNetworkResponse:
      type: object
      properties:
        networks:
          type: array
          items:
            $ref: >-
              #/components/schemas/supersim.v1.network_access_profile.network_access_profile_network
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
    CreateNetworkAccessProfileNetworkRequest:
      type: object
      required:
        - Network
      properties:
        Network:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HW[0-9a-fA-F]{32}$'
          description: >-
            The SID of the Network resource to be added to the Network Access
            Profile resource.
    ListSettingsUpdateResponse:
      type: object
      properties:
        settings_updates:
          type: array
          items:
            $ref: '#/components/schemas/supersim.v1.settings_update'
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
    CreateSimRequest:
      type: object
      required:
        - Iccid
        - RegistrationCode
      properties:
        Iccid:
          type: string
          description: >-
            The
            [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID)
            of the Super SIM to be added to your Account.
        RegistrationCode:
          type: string
          description: The 10-digit code required to claim the Super SIM for your Account.
    ListSimResponse:
      type: object
      properties:
        sims:
          type: array
          items:
            $ref: '#/components/schemas/supersim.v1.sim'
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
    UpdateSimRequest:
      type: object
      properties:
        UniqueName:
          type: string
          description: >-
            An application-defined string that uniquely identifies the resource.
            It can be used in place of the resource's `sid` in the URL to
            address the resource.
        Status:
          type: string
          $ref: '#/components/schemas/sim_enum_status_update'
          description: >-
            The new status of the resource. Can be: `ready`, `active`, or
            `inactive`. See the [Super SIM Status
            Values](https://www.twilio.com/docs/iot/supersim/api/sim-resource#status-values)
            for more info.
        Fleet:
          type: string
          description: >-
            The SID or unique name of the Fleet to which the SIM resource should
            be assigned.
        CallbackUrl:
          type: string
          format: uri
          description: >-
            The URL we should call using the `callback_method` after an
            asynchronous update has finished.
        CallbackMethod:
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
            The HTTP method we should use to call `callback_url`. Can be: `GET`
            or `POST` and the default is POST.
        AccountSid:
          type: string
          description: >-
            The SID of the Account to which the Sim resource should belong. The
            Account SID can only be that of the requesting Account or that of a
            Subaccount of the requesting Account. Only valid when the Sim
            resource's status is new.
    ListSimIpAddressResponse:
      type: object
      properties:
        ip_addresses:
          type: array
          items:
            $ref: '#/components/schemas/supersim.v1.sim.sim_ip_address'
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
    CreateSmsCommandRequest:
      type: object
      required:
        - Sim
        - Payload
      properties:
        Sim:
          type: string
          description: >-
            The `sid` or `unique_name` of the
            [SIM](https://www.twilio.com/docs/iot/supersim/api/sim-resource) to
            send the SMS Command to.
        Payload:
          type: string
          description: The message body of the SMS Command.
        CallbackMethod:
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
            The HTTP method we should use to call `callback_url`. Can be: `GET`
            or `POST` and the default is POST.
        CallbackUrl:
          type: string
          format: uri
          description: >-
            The URL we should call using the `callback_method` after we have
            sent the command.
    ListSmsCommandResponse:
      type: object
      properties:
        sms_commands:
          type: array
          items:
            $ref: '#/components/schemas/supersim.v1.sms_command'
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
    ListUsageRecordResponse:
      type: object
      properties:
        usage_records:
          type: array
          items:
            $ref: '#/components/schemas/supersim.v1.usage_record'
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
  title: Twilio - Supersim
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
  '/v1/Sims/{SimSid}/BillingPeriods':
    servers:
      - url: 'https://supersim.twilio.com'
    description: Billing Period for an IoT Super SIM
    x-twilio:
      defaultOutputProperties:
        - sid
        - sim_sid
        - start_time
        - end_time
        - period_type
      pathType: list
      parent: '/Sims/{Sid}'
    get:
      description: Retrieve a list of Billing Periods for a Super SIM.
      tags:
        - SupersimV1BillingPeriod
      parameters:
        - name: SimSid
          in: path
          description: The SID of the Super SIM to list Billing Periods for.
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
                $ref: '#/components/schemas/ListBillingPeriodResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListBillingPeriod
      x-maturity:
        - GA
  /v1/ESimProfiles:
    servers:
      - url: 'https://supersim.twilio.com'
    description: eSIM Profiles that can be loaded onto consumer eUICC SIMs
    x-twilio:
      defaultOutputProperties:
        - sid
        - status
      pathType: list
      mountName: esim_profiles
    post:
      description: Order an eSIM Profile.
      tags:
        - SupersimV1EsimProfile
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.esim_profile'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateEsimProfile
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateEsimProfileRequest'
    get:
      description: Retrieve a list of eSIM Profiles.
      tags:
        - SupersimV1EsimProfile
      parameters:
        - name: Eid
          in: query
          description: List the eSIM Profiles that have been associated with an EId.
          schema:
            type: string
        - name: SimSid
          in: query
          description: >-
            Find the eSIM Profile resource related to a
            [Sim](https://www.twilio.com/docs/iot/supersim/api/sim-resource)
            resource by providing the SIM SID. Will always return an array with
            either 1 or 0 records.
          schema:
            type: string
        - name: Status
          in: query
          description: List the eSIM Profiles that are in a given status.
          schema:
            type: string
            $ref: '#/components/schemas/esim_profile_enum_status'
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
                $ref: '#/components/schemas/ListEsimProfileResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListEsimProfile
      x-maturity:
        - Beta
  '/v1/ESimProfiles/{Sid}':
    servers:
      - url: 'https://supersim.twilio.com'
    description: eSIM Profiles that can be loaded onto consumer eUICC SIMs
    x-twilio:
      defaultOutputProperties:
        - sid
        - status
      pathType: instance
      mountName: esim_profiles
    get:
      description: Fetch an eSIM Profile.
      tags:
        - SupersimV1EsimProfile
      parameters:
        - name: Sid
          in: path
          description: The SID of the eSIM Profile resource to fetch.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.esim_profile'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchEsimProfile
      x-maturity:
        - Beta
  /v1/Fleets:
    servers:
      - url: 'https://supersim.twilio.com'
    description: >-
      Configure shared settings inherited by all Super SIMs assigned to the
      Fleet
    x-twilio:
      defaultOutputProperties:
        - sid
        - unique_name
        - data_metering
      pathType: list
    post:
      description: Create a Fleet
      tags:
        - SupersimV1Fleet
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.fleet'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateFleet
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateFleetRequest'
    get:
      description: Retrieve a list of Fleets from your account.
      tags:
        - SupersimV1Fleet
      parameters:
        - name: NetworkAccessProfile
          in: query
          description: >-
            The SID or unique name of the Network Access Profile that controls
            which cellular networks the Fleet's SIMs can connect to.
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
                $ref: '#/components/schemas/ListFleetResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListFleet
      x-maturity:
        - Beta
  '/v1/Fleets/{Sid}':
    servers:
      - url: 'https://supersim.twilio.com'
    description: >-
      Configure shared settings inherited by all Super SIMs assigned to the
      Fleet
    x-twilio:
      defaultOutputProperties:
        - sid
        - unique_name
        - data_metering
      pathType: instance
    get:
      description: Fetch a Fleet instance from your account.
      tags:
        - SupersimV1Fleet
      parameters:
        - name: Sid
          in: path
          description: The SID of the Fleet resource to fetch.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.fleet'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchFleet
      x-maturity:
        - Beta
    post:
      description: >-
        Updates the given properties of a Super SIM Fleet instance from your
        account.
      tags:
        - SupersimV1Fleet
      parameters:
        - name: Sid
          in: path
          description: The SID of the Fleet resource to update.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.fleet'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateFleet
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateFleetRequest'
  /v1/IpCommands:
    servers:
      - url: 'https://supersim.twilio.com'
    description: Machine-to-machine IP Commands sent to/from Super SIMs
    x-twilio:
      defaultOutputProperties:
        - sid
        - status
        - date_created
      pathType: list
    post:
      description: Send an IP Command to a Super SIM.
      tags:
        - SupersimV1IpCommand
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.ip_command'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateIpCommand
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateIpCommandRequest'
    get:
      description: Retrieve a list of IP Commands from your account.
      tags:
        - SupersimV1IpCommand
      parameters:
        - name: Sim
          in: query
          description: >-
            The SID or unique name of the Sim resource that IP Command was sent
            to or from.
          schema:
            type: string
        - name: SimIccid
          in: query
          description: The ICCID of the Sim resource that IP Command was sent to or from.
          schema:
            type: string
        - name: Status
          in: query
          description: >-
            The status of the IP Command. Can be: `queued`, `sent`, `received`
            or `failed`. See the [IP Command Status
            Values](https://www.twilio.com/docs/iot/supersim/api/ipcommand-resource#status-values)
            for a description of each.
          schema:
            type: string
            $ref: '#/components/schemas/ip_command_enum_status'
        - name: Direction
          in: query
          description: >-
            The direction of the IP Command. Can be `to_sim` or `from_sim`. The
            value of `to_sim` is synonymous with the term `mobile terminated`,
            and `from_sim` is synonymous with the term `mobile originated`.
          schema:
            type: string
            $ref: '#/components/schemas/ip_command_enum_direction'
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
                $ref: '#/components/schemas/ListIpCommandResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListIpCommand
      x-maturity:
        - Beta
  '/v1/IpCommands/{Sid}':
    servers:
      - url: 'https://supersim.twilio.com'
    description: Machine-to-machine IP Commands sent to/from Super SIMs
    x-twilio:
      defaultOutputProperties:
        - sid
        - status
        - date_created
      pathType: instance
    get:
      description: Fetch IP Command instance from your account.
      tags:
        - SupersimV1IpCommand
      parameters:
        - name: Sid
          in: path
          description: The SID of the IP Command resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^HG[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.ip_command'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchIpCommand
      x-maturity:
        - Beta
  '/v1/Networks/{Sid}':
    servers:
      - url: 'https://supersim.twilio.com'
    description: Mobile operator networks to which Super SIMs can connect
    x-twilio:
      defaultOutputProperties:
        - sid
      pathType: instance
    get:
      description: Fetch a Network resource.
      tags:
        - SupersimV1Network
      parameters:
        - name: Sid
          in: path
          description: The SID of the Network resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^HW[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.network'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchNetwork
      x-maturity:
        - Beta
  /v1/Networks:
    servers:
      - url: 'https://supersim.twilio.com'
    description: Mobile operator networks to which Super SIMs can connect
    x-twilio:
      defaultOutputProperties:
        - sid
      pathType: list
    get:
      description: Retrieve a list of Network resources.
      tags:
        - SupersimV1Network
      parameters:
        - name: IsoCountry
          in: query
          description: >-
            The [ISO country
            code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the
            Network resources to read.
          schema:
            type: string
        - name: Mcc
          in: query
          description: >-
            The 'mobile country code' of a country. Network resources with this
            `mcc` in their `identifiers` will be read.
          schema:
            type: string
        - name: Mnc
          in: query
          description: >-
            The 'mobile network code' of a mobile operator network. Network
            resources with this `mnc` in their `identifiers` will be read.
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
                $ref: '#/components/schemas/ListNetworkResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListNetwork
      x-maturity:
        - Beta
  /v1/NetworkAccessProfiles:
    servers:
      - url: 'https://supersim.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - unique_name
        - fleets_count
      pathType: list
      dependentProperties:
        networks:
          mapping:
            network_access_profile_sid: sid
          resource_url: '/v1/NetworkAccessProfiles/{network_access_profile_sid}/Networks'
    post:
      description: Create a new Network Access Profile
      tags:
        - SupersimV1NetworkAccessProfile
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.network_access_profile'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateNetworkAccessProfile
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateNetworkAccessProfileRequest'
    get:
      description: Retrieve a list of Network Access Profiles from your account.
      tags:
        - SupersimV1NetworkAccessProfile
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
                $ref: '#/components/schemas/ListNetworkAccessProfileResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListNetworkAccessProfile
      x-maturity:
        - Beta
  '/v1/NetworkAccessProfiles/{Sid}':
    servers:
      - url: 'https://supersim.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - unique_name
        - fleets_count
      pathType: instance
      dependentProperties:
        networks:
          mapping:
            network_access_profile_sid: sid
          resource_url: '/v1/NetworkAccessProfiles/{network_access_profile_sid}/Networks'
    get:
      description: Fetch a Network Access Profile instance from your account.
      tags:
        - SupersimV1NetworkAccessProfile
      parameters:
        - name: Sid
          in: path
          description: The SID of the Network Access Profile resource to fetch.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.network_access_profile'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchNetworkAccessProfile
      x-maturity:
        - Beta
    post:
      description: >-
        Updates the given properties of a Network Access Profile in your
        account.
      tags:
        - SupersimV1NetworkAccessProfile
      parameters:
        - name: Sid
          in: path
          description: The SID of the Network Access Profile to update.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.network_access_profile'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateNetworkAccessProfile
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateNetworkAccessProfileRequest'
  '/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks':
    servers:
      - url: 'https://supersim.twilio.com'
    description: Mobile operator networks which Network Access Profiles allow access to
    x-twilio:
      defaultOutputProperties:
        - sid
      pathType: list
      parent: '/NetworkAccessProfiles/{Sid}'
      className: network_access_profile_network
    get:
      description: Retrieve a list of Network Access Profile resource's Network resource.
      tags:
        - SupersimV1NetworkAccessProfileNetwork
      parameters:
        - name: NetworkAccessProfileSid
          in: path
          description: >-
            The unique string that identifies the Network Access Profile
            resource.
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
                $ref: '#/components/schemas/ListNetworkAccessProfileNetworkResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListNetworkAccessProfileNetwork
      x-maturity:
        - Beta
    post:
      description: Add a Network resource to the Network Access Profile resource.
      tags:
        - SupersimV1NetworkAccessProfileNetwork
      parameters:
        - name: NetworkAccessProfileSid
          in: path
          description: >-
            The unique string that identifies the Network Access Profile
            resource.
          schema:
            type: string
          required: true
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: >-
                  #/components/schemas/supersim.v1.network_access_profile.network_access_profile_network
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateNetworkAccessProfileNetwork
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateNetworkAccessProfileNetworkRequest'
  '/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks/{Sid}':
    servers:
      - url: 'https://supersim.twilio.com'
    description: Mobile operator networks which Network Access Profiles allow access to
    x-twilio:
      defaultOutputProperties:
        - sid
      pathType: instance
      parent: '/NetworkAccessProfiles/{Sid}'
      className: network_access_profile_network
    delete:
      description: Remove a Network resource from the Network Access Profile resource's.
      tags:
        - SupersimV1NetworkAccessProfileNetwork
      parameters:
        - name: NetworkAccessProfileSid
          in: path
          description: >-
            The unique string that identifies the Network Access Profile
            resource.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^HA[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: >-
            The SID of the Network resource to be removed from the Network
            Access Profile resource.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^HW[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteNetworkAccessProfileNetwork
      x-maturity:
        - Beta
    get:
      description: Fetch a Network Access Profile resource's Network resource.
      tags:
        - SupersimV1NetworkAccessProfileNetwork
      parameters:
        - name: NetworkAccessProfileSid
          in: path
          description: >-
            The unique string that identifies the Network Access Profile
            resource.
          schema:
            type: string
          required: true
        - name: Sid
          in: path
          description: The SID of the Network resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^HW[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: >-
                  #/components/schemas/supersim.v1.network_access_profile.network_access_profile_network
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchNetworkAccessProfileNetwork
      x-maturity:
        - Beta
  /v1/SettingsUpdates:
    servers:
      - url: 'https://supersim.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - iccid
        - sim_sid
        - status
      pathType: list
    get:
      description: Retrieve a list of Settings Updates.
      tags:
        - SupersimV1SettingsUpdate
      parameters:
        - name: Sim
          in: query
          description: Filter the Settings Updates by a Super SIM's SID or UniqueName.
          schema:
            type: string
        - name: Status
          in: query
          description: >-
            Filter the Settings Updates by status. Can be `scheduled`,
            `in-progress`, `successful`, or `failed`.
          schema:
            type: string
            $ref: '#/components/schemas/settings_update_enum_status'
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
                $ref: '#/components/schemas/ListSettingsUpdateResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListSettingsUpdate
      x-maturity:
        - Beta
  /v1/Sims:
    servers:
      - url: 'https://supersim.twilio.com'
    description: Individual IoT Super SIMs
    x-twilio:
      defaultOutputProperties:
        - sid
        - unique_name
        - status
      pathType: list
      dependentProperties:
        billing_periods:
          mapping:
            sim_sid: sid
          resource_url: '/v1/Sims/{sim_sid}/BillingPeriods'
        sim_ip_addresses:
          mapping:
            sim_sid: sid
          resource_url: '/v1/Sims/{sim_sid}/IpAddresses'
    post:
      description: Register a Super SIM to your Account
      tags:
        - SupersimV1Sim
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.sim'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateSim
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateSimRequest'
    get:
      description: Retrieve a list of Super SIMs from your account.
      tags:
        - SupersimV1Sim
      parameters:
        - name: Status
          in: query
          description: >-
            The status of the Sim resources to read. Can be `new`, `ready`,
            `active`, `inactive`, or `scheduled`.
          schema:
            type: string
            $ref: '#/components/schemas/sim_enum_status'
        - name: Fleet
          in: query
          description: >-
            The SID or unique name of the Fleet to which a list of Sims are
            assigned.
          schema:
            type: string
        - name: Iccid
          in: query
          description: >-
            The
            [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID)
            associated with a Super SIM to filter the list by. Passing this
            parameter will always return a list containing zero or one SIMs.
          schema:
            type: string
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
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
                $ref: '#/components/schemas/ListSimResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListSim
      x-maturity:
        - Beta
  '/v1/Sims/{Sid}':
    servers:
      - url: 'https://supersim.twilio.com'
    description: Individual IoT Super SIMs
    x-twilio:
      defaultOutputProperties:
        - sid
        - unique_name
        - status
      pathType: instance
      dependentProperties:
        billing_periods:
          mapping:
            sim_sid: sid
          resource_url: '/v1/Sims/{sim_sid}/BillingPeriods'
        sim_ip_addresses:
          mapping:
            sim_sid: sid
          resource_url: '/v1/Sims/{sim_sid}/IpAddresses'
    get:
      description: Fetch a Super SIM instance from your account.
      tags:
        - SupersimV1Sim
      parameters:
        - name: Sid
          in: path
          description: The SID of the Sim resource to fetch.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.sim'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchSim
      x-maturity:
        - Beta
    post:
      description: Updates the given properties of a Super SIM instance from your account.
      tags:
        - SupersimV1Sim
      parameters:
        - name: Sid
          in: path
          description: The SID of the Sim resource to update.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.sim'
          description: OK
        '202':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.sim'
          description: Accepted
      security:
        - accountSid_authToken: []
      operationId: UpdateSim
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateSimRequest'
  '/v1/Sims/{SimSid}/IpAddresses':
    servers:
      - url: 'https://supersim.twilio.com'
    description: IP Addresses for a Super SIM configured to use a VPN connection
    x-twilio:
      defaultOutputProperties:
        - ip_address
        - ip_address_version
      pathType: list
      parent: '/Sims/{Sid}'
      mountName: sim_ip_addresses
    get:
      description: Retrieve a list of IP Addresses for the given Super SIM.
      tags:
        - SupersimV1SimIpAddress
      parameters:
        - name: SimSid
          in: path
          description: The SID of the Super SIM to list IP Addresses for.
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
                $ref: '#/components/schemas/ListSimIpAddressResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListSimIpAddress
      x-maturity:
        - Beta
  /v1/SmsCommands:
    servers:
      - url: 'https://supersim.twilio.com'
    description: Machine-to-machine SMS Commands sent to/from SIMs
    x-twilio:
      defaultOutputProperties:
        - sid
        - status
        - date_created
      pathType: list
    post:
      description: Send SMS Command to a Sim.
      tags:
        - SupersimV1SmsCommand
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.sms_command'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateSmsCommand
      x-maturity:
        - Beta
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateSmsCommandRequest'
    get:
      description: Retrieve a list of SMS Commands from your account.
      tags:
        - SupersimV1SmsCommand
      parameters:
        - name: Sim
          in: query
          description: >-
            The SID or unique name of the Sim resource that SMS Command was sent
            to or from.
          schema:
            type: string
        - name: Status
          in: query
          description: >-
            The status of the SMS Command. Can be: `queued`, `sent`,
            `delivered`, `received` or `failed`. See the [SMS Command Status
            Values](https://www.twilio.com/docs/iot/supersim/api/smscommand-resource#status-values)
            for a description of each.
          schema:
            type: string
            $ref: '#/components/schemas/sms_command_enum_status'
        - name: Direction
          in: query
          description: >-
            The direction of the SMS Command. Can be `to_sim` or `from_sim`. The
            value of `to_sim` is synonymous with the term `mobile terminated`,
            and `from_sim` is synonymous with the term `mobile originated`.
          schema:
            type: string
            $ref: '#/components/schemas/sms_command_enum_direction'
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
                $ref: '#/components/schemas/ListSmsCommandResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListSmsCommand
      x-maturity:
        - Beta
  '/v1/SmsCommands/{Sid}':
    servers:
      - url: 'https://supersim.twilio.com'
    description: Machine-to-machine SMS Commands sent to/from SIMs
    x-twilio:
      defaultOutputProperties:
        - sid
        - status
        - date_created
      pathType: instance
    get:
      description: Fetch SMS Command instance from your account.
      tags:
        - SupersimV1SmsCommand
      parameters:
        - name: Sid
          in: path
          description: The SID of the SMS Command resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^HC[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/supersim.v1.sms_command'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchSmsCommand
      x-maturity:
        - Beta
  /v1/UsageRecords:
    servers:
      - url: 'https://supersim.twilio.com'
    description: Usage information for Sim resources
    x-twilio:
      defaultOutputProperties:
        - account_sid
        - period
      pathType: list
    get:
      description: List UsageRecords
      tags:
        - SupersimV1UsageRecord
      parameters:
        - name: Sim
          in: query
          description: >-
            SID or unique name of a Sim resource. Only show UsageRecords
            representing usage incurred by this Super SIM.
          schema:
            type: string
        - name: Fleet
          in: query
          description: >-
            SID or unique name of a Fleet resource. Only show UsageRecords
            representing usage for Super SIMs belonging to this Fleet resource
            at the time the usage occurred.
          schema:
            type: string
        - name: Network
          in: query
          description: >-
            SID of a Network resource. Only show UsageRecords representing usage
            on this network.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^HW[0-9a-fA-F]{32}$'
        - name: IsoCountry
          in: query
          description: >-
            Alpha-2 ISO Country Code. Only show UsageRecords representing usage
            in this country.
          schema:
            type: string
            format: iso-country-code
        - name: Group
          in: query
          description: >-
            Dimension over which to aggregate usage records. Can be: `sim`,
            `fleet`, `network`, `isoCountry`. Default is to not aggregate across
            any of these dimensions, UsageRecords will be aggregated into the
            time buckets described by the `Granularity` parameter.
          schema:
            type: string
            $ref: '#/components/schemas/usage_record_enum_group'
        - name: Granularity
          in: query
          description: >-
            Time-based grouping that UsageRecords should be aggregated by. Can
            be: `hour`, `day`, or `all`. Default is `all`. `all` returns one
            UsageRecord that describes the usage for the entire period.
          schema:
            type: string
            $ref: '#/components/schemas/usage_record_enum_granularity'
        - name: StartTime
          in: query
          description: >-
            Only include usage that occurred at or after this time, specified in
            [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Default
            is one month before the `end_time`.
          schema:
            type: string
            format: date-time
        - name: EndTime
          in: query
          description: >-
            Only include usage that occurred before this time (exclusive),
            specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
            format. Default is the current time.
          schema:
            type: string
            format: date-time
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
                $ref: '#/components/schemas/ListUsageRecordResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListUsageRecord
      x-maturity:
        - Beta
servers:
  - url: 'https://supersim.twilio.com'
tags:
  - name: SupersimV1BillingPeriod
  - name: SupersimV1EsimProfile
  - name: SupersimV1Fleet
  - name: SupersimV1IpCommand
  - name: SupersimV1Network
  - name: SupersimV1NetworkAccessProfile
  - name: SupersimV1NetworkAccessProfileNetwork
  - name: SupersimV1SettingsUpdate
  - name: SupersimV1Sim
  - name: SupersimV1SimIpAddress
  - name: SupersimV1SmsCommand
  - name: SupersimV1UsageRecord
x-maturity:
  - name: GA
    description: This product is Generally Available.
  - name: Beta
    description: >-
      PLEASE NOTE that this is a Beta product that is subject to change. Use it
      with caution.
---