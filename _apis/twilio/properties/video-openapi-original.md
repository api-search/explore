---
components:
  schemas:
    video.v1.composition:
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
            the Composition resource.
        status:
          type: string
          $ref: '#/components/schemas/composition_enum_status'
          nullable: true
          description: >-
            The status of the composition. Can be: `enqueued`, `processing`,
            `completed`, `deleted` or `failed`. `enqueued` is the initial state
            and indicates that the composition request has been received and is
            scheduled for processing; `processing` indicates the composition is
            being processed; `completed` indicates the composition has been
            completed and is available for download; `deleted` means the
            composition media has been deleted from the system, but its metadata
            is still available for 30 days; `failed` indicates the composition
            failed to execute the media processing task.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date and time in GMT when the resource was created specified in
            [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        date_completed:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date and time in GMT when the composition's media processing
            task finished, specified in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        date_deleted:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date and time in GMT when the composition generated media was
            deleted, specified in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CJ[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the Composition
            resource.
        room_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^RM[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the Group Room that generated the audio and video tracks
            used in the composition. All media sources included in a composition
            must belong to the same Group Room.
        audio_sources:
          type: array
          items:
            type: string
          nullable: true
          description: >-
            The array of track names to include in the composition. The
            composition includes all audio sources specified in `audio_sources`
            except those specified in `audio_sources_excluded`. The track names
            in this property can include an asterisk as a wild card character,
            which matches zero or more characters in a track name. For example,
            `student*` includes tracks named `student` as well as `studentTeam`.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        audio_sources_excluded:
          type: array
          items:
            type: string
          nullable: true
          description: >-
            The array of track names to exclude from the composition. The
            composition includes all audio sources specified in `audio_sources`
            except for those specified in `audio_sources_excluded`. The track
            names in this property can include an asterisk as a wild card
            character, which matches zero or more characters in a track name.
            For example, `student*` excludes `student` as well as `studentTeam`.
            This parameter can also be empty.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        video_layout:
          nullable: true
          description: >-
            An object that describes the video layout of the composition in
            terms of regions. See [Specifying Video
            Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
            for more info.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        resolution:
          type: string
          nullable: true
          description: >-
            The dimensions of the video image in pixels expressed as columns
            (width) and rows (height). The string's format is
            `{width}x{height}`, such as `640x480`.
        trim:
          type: boolean
          nullable: true
          description: >-
            Whether to remove intervals with no media, as specified in the POST
            request that created the composition. Compositions with `trim`
            enabled are shorter when the Room is created and no Participant
            joins for a while as well as if all the Participants leave the room
            and join later, because those gaps will be removed. See [Specifying
            Video
            Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
            for more info.
        format:
          type: string
          $ref: '#/components/schemas/composition_enum_format'
          nullable: true
          description: >-
            The container format of the composition's media files as specified
            in the POST request that created the Composition resource. See [POST
            Parameters](https://www.twilio.com/docs/video/api/compositions-resource#http-post-parameters)
            for more information.
        bitrate:
          type: integer
          nullable: true
          description: The average bit rate of the composition's media.
        size:
          type: integer
          format: int64
          nullable: true
          description: The size of the composed media file in bytes.
        duration:
          type: integer
          nullable: true
          description: The duration of the composition's media file in seconds.
        media_external_location:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL of the media file associated with the composition when
            stored externally. See [External S3
            Compositions](/docs/video/api/external-s3-compositions) for more
            details.
        status_callback:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL called using the `status_callback_method` to send status
            information on every composition event.
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
            The HTTP method used to call `status_callback`. Can be: `POST` or
            `GET`, defaults to `POST`.
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the resource.
        links:
          type: object
          format: uri-map
          nullable: true
          description: The URL of the media file associated with the composition.
    composition_enum_status:
      type: string
      enum:
        - enqueued
        - processing
        - completed
        - deleted
        - failed
    composition_enum_format:
      type: string
      enum:
        - mp4
        - webm
    video.v1.composition_hook:
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
            the CompositionHook resource.
        friendly_name:
          type: string
          nullable: true
          description: >-
            The string that you assigned to describe the resource. Can be up to
            100 characters long and must be unique within the account.
        enabled:
          type: boolean
          nullable: true
          description: >-
            Whether the CompositionHook is active. When `true`, the
            CompositionHook is triggered for every completed Group Room on the
            account. When `false`, the CompositionHook is never triggered.
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
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^HK[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the CompositionHook
            resource.
        audio_sources:
          type: array
          items:
            type: string
          nullable: true
          description: >-
            The array of track names to include in the compositions created by
            the composition hook. A composition triggered by the composition
            hook includes all audio sources specified in `audio_sources` except
            those specified in `audio_sources_excluded`. The track names in this
            property can include an asterisk as a wild card character, which
            matches zero or more characters in a track name. For example,
            `student*` includes tracks named `student` as well as `studentTeam`.
            Please, be aware that either video_layout or audio_sources have to
            be provided to get a valid creation request
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        audio_sources_excluded:
          type: array
          items:
            type: string
          nullable: true
          description: >-
            The array of track names to exclude from the compositions created by
            the composition hook. A composition triggered by the composition
            hook includes all audio sources specified in `audio_sources` except
            for those specified in `audio_sources_excluded`. The track names in
            this property can include an asterisk as a wild card character,
            which matches zero or more characters in a track name. For example,
            `student*` excludes `student` as well as `studentTeam`. This
            parameter can also be empty.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        video_layout:
          nullable: true
          description: >-
            A JSON object that describes the video layout of the composition in
            terms of regions as specified in the HTTP POST request that created
            the CompositionHook resource. See [POST
            Parameters](https://www.twilio.com/docs/video/api/compositions-resource#http-post-parameters)
            for more information. Please, be aware that either video_layout or
            audio_sources have to be provided to get a valid creation request
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        resolution:
          type: string
          nullable: true
          description: >-
            The dimensions of the video image in pixels expressed as columns
            (width) and rows (height). The string's format is
            `{width}x{height}`, such as `640x480`.
        trim:
          type: boolean
          nullable: true
          description: >-
            Whether intervals with no media are clipped, as specified in the
            POST request that created the CompositionHook resource. Compositions
            with `trim` enabled are shorter when the Room is created and no
            Participant joins for a while as well as if all the Participants
            leave the room and join later, because those gaps will be removed.
            See [Specifying Video
            Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
            for more info.
        format:
          type: string
          $ref: '#/components/schemas/composition_hook_enum_format'
          nullable: true
          description: >-
            The container format of the media files used by the compositions
            created by the composition hook. If `mp4` or `webm`, `audio_sources`
            must have one or more tracks and/or a `video_layout` element must
            contain a valid `video_sources` list, otherwise an error occurs.
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
            The HTTP method we should use to call `status_callback`. Can be
            `POST` or `GET` and defaults to `POST`.
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the resource.
    composition_hook_enum_format:
      type: string
      enum:
        - mp4
        - webm
    video.v1.composition_settings:
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
            the CompositionSettings resource.
        friendly_name:
          type: string
          nullable: true
          description: >-
            The string that you assigned to describe the resource and that will
            be shown in the console
        aws_credentials_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the stored Credential resource.
        aws_s3_url:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL of the AWS S3 bucket where the compositions are stored. We
            only support DNS-compliant URLs like
            `https://documentation-example-twilio-bucket/compositions`, where
            `compositions` is the path in which you want the compositions to be
            stored. This URL accepts only URI-valid characters, as described in
            the <a href='https://tools.ietf.org/html/rfc3986#section-2'>RFC
            3986</a>.
        aws_storage_enabled:
          type: boolean
          nullable: true
          description: >-
            Whether all compositions are written to the `aws_s3_url`. When
            `false`, all compositions are stored in our cloud.
        encryption_key_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the Public Key resource used for encryption.
        encryption_enabled:
          type: boolean
          nullable: true
          description: >-
            Whether all compositions are stored in an encrypted form. The
            default is `false`.
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the resource.
    video.v1.recording:
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
            the Recording resource.
        status:
          type: string
          $ref: '#/components/schemas/recording_enum_status'
          nullable: true
          description: >-
            The status of the recording. Can be: `processing`, `completed`, or
            `deleted`. `processing` indicates the recording is still being
            captured; `completed` indicates the recording has been captured and
            is now available for download. `deleted` means the recording media
            has been deleted from the system, but its metadata is still
            available.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date and time in GMT when the resource was created specified in
            [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^RT[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the Recording
            resource.
        source_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^[a-zA-Z]{2}[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the recording source. For a Room Recording, this value is
            a `track_sid`.
        size:
          type: integer
          format: int64
          nullable: true
          description: 'The size of the recorded track, in bytes.'
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the resource.
        type:
          type: string
          $ref: '#/components/schemas/recording_enum_type'
          nullable: true
          description: 'The recording''s media type. Can be: `audio` or `video`.'
        duration:
          type: integer
          nullable: true
          description: >-
            The duration of the recording in seconds rounded to the nearest
            second. Sub-second tracks have a `Duration` property of 1 second
        container_format:
          type: string
          $ref: '#/components/schemas/recording_enum_format'
          nullable: true
          description: >-
            The file format for the recording. Can be: `mka` or `mkv`. Video
            Room recordings are captured in [Matroska container
            format](https://matroska.org/), `mka` is for audio files and `mkv`
            for video files.
        codec:
          type: string
          $ref: '#/components/schemas/recording_enum_codec'
          nullable: true
          description: >-
            The codec used to encode the track. Can be: `VP8`, `H264`, `OPUS`,
            and `PCMU`.
        grouping_sids:
          nullable: true
          description: >-
            A list of SIDs related to the recording. Includes the `room_sid` and
            `participant_sid`.
        track_name:
          type: string
          nullable: true
          description: >-
            The name that was given to the source track of the recording. If no
            name is given, the `source_sid` is used.
          x-twilio:
            pii:
              handling: standard
              deleteSla: 30
        offset:
          type: integer
          format: int64
          nullable: true
          description: >-
            The time in milliseconds elapsed between an arbitrary point in time,
            common to all group rooms, and the moment when the source room of
            this track started. This information provides a synchronization
            mechanism for recordings belonging to the same room.
        media_external_location:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL of the media file associated with the recording when stored
            externally. See [External S3
            Recordings](/docs/video/api/external-s3-recordings) for more
            details.
        status_callback:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL called using the `status_callback_method` to send status
            information on every recording event.
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
            The HTTP method used to call `status_callback`. Can be: `POST` or
            `GET`, defaults to `POST`.
        links:
          type: object
          format: uri-map
          nullable: true
          description: The URLs of related resources.
    recording_enum_status:
      type: string
      enum:
        - processing
        - completed
        - deleted
        - failed
    recording_enum_type:
      type: string
      enum:
        - audio
        - video
        - data
    recording_enum_format:
      type: string
      enum:
        - mka
        - mkv
    recording_enum_codec:
      type: string
      enum:
        - VP8
        - H264
        - OPUS
        - PCMU
    video.v1.recording_settings:
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
            the RecordingSettings resource.
        friendly_name:
          type: string
          nullable: true
          description: >-
            The string that you assigned to describe the resource and show the
            user in the console
        aws_credentials_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the stored Credential resource.
        aws_s3_url:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL of the AWS S3 bucket where the recordings are stored. We
            only support DNS-compliant URLs like
            `https://documentation-example-twilio-bucket/recordings`, where
            `recordings` is the path in which you want the recordings to be
            stored. This URL accepts only URI-valid characters, as described in
            the <a href='https://tools.ietf.org/html/rfc3986#section-2'>RFC
            3986</a>.
        aws_storage_enabled:
          type: boolean
          nullable: true
          description: >-
            Whether all recordings are written to the `aws_s3_url`. When
            `false`, all recordings are stored in our cloud.
        encryption_key_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the Public Key resource used for encryption.
        encryption_enabled:
          type: boolean
          nullable: true
          description: >-
            Whether all recordings are stored in an encrypted form. The default
            is `false`.
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the resource.
    video.v1.room:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^RM[0-9a-fA-F]{32}$'
          nullable: true
          description: The unique string that we created to identify the Room resource.
        status:
          type: string
          $ref: '#/components/schemas/room_enum_room_status'
          nullable: true
          description: >-
            The status of the room. Can be: `in-progress`, `failed`, or
            `completed`.
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
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) that created
            the Room resource.
        enable_turn:
          type: boolean
          nullable: true
          description: 'Deprecated, now always considered to be true.'
        unique_name:
          type: string
          nullable: true
          description: >-
            An application-defined string that uniquely identifies the resource.
            It can be used as a `room_sid` in place of the resource's `sid` in
            the URL to address the resource, assuming it does not contain any
            [reserved
            characters](https://tools.ietf.org/html/rfc3986#section-2.2) that
            would need to be URL encoded. This value is unique for `in-progress`
            rooms. SDK clients can use this name to connect to the room. REST
            API clients can use this name in place of the Room SID to interact
            with the room as long as the room is `in-progress`.
        status_callback:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL we call using the `status_callback_method` to send status
            information to your application on every room event. See [Status
            Callbacks](https://www.twilio.com/docs/video/api/status-callbacks)
            for more info.
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
            The HTTP method we use to call `status_callback`. Can be `POST` or
            `GET` and defaults to `POST`.
        end_time:
          type: string
          format: date-time
          nullable: true
          description: >-
            The UTC end time of the room in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
        duration:
          type: integer
          nullable: true
          description: The duration of the room in seconds.
        type:
          type: string
          $ref: '#/components/schemas/room_enum_room_type'
          nullable: true
          description: >-
            The type of room. Can be: `go`, `peer-to-peer`, `group-small`, or
            `group`. The default value is `group`.
        max_participants:
          type: integer
          nullable: true
          description: 'The maximum number of concurrent Participants allowed in the room. '
        max_participant_duration:
          type: integer
          nullable: true
          description: >-
            The maximum number of seconds a Participant can be connected to the
            room. The maximum possible value is 86400 seconds (24 hours). The
            default is 14400 seconds (4 hours).
        max_concurrent_published_tracks:
          type: integer
          nullable: true
          description: >-
            The maximum number of published audio, video, and data tracks all
            participants combined are allowed to publish in the room at the same
            time. Check [Programmable Video
            Limits](https://www.twilio.com/docs/video/programmable-video-limits)
            for more details. If it is set to 0 it means unconstrained.
        record_participants_on_connect:
          type: boolean
          nullable: true
          description: >-
            Whether to start recording when Participants connect. ***This
            feature is not available in `peer-to-peer` rooms.***
        video_codecs:
          type: array
          items:
            type: string
            $ref: '#/components/schemas/room_enum_video_codec'
          nullable: true
          description: >-
            An array of the video codecs that are supported when publishing a
            track in the room.  Can be: `VP8` and `H264`.  ***This feature is
            not available in `peer-to-peer` rooms***
        media_region:
          type: string
          nullable: true
          description: >-
            The region for the media server in Group Rooms.  Can be: one of the
            [available Media
            Regions](https://www.twilio.com/docs/video/ip-addresses#media-servers).
            ***This feature is not available in `peer-to-peer` rooms.***
        audio_only:
          type: boolean
          nullable: true
          description: >-
            When set to true, indicates that the participants in the room will
            only publish audio. No video tracks will be allowed. Group rooms
            only.
        empty_room_timeout:
          type: integer
          nullable: true
          description: >-
            Specifies how long (in minutes) a room will remain active after last
            participant leaves. Can be configured when creating a room via REST
            API. For Ad-Hoc rooms this value cannot be changed.
        unused_room_timeout:
          type: integer
          nullable: true
          description: >-
            Specifies how long (in minutes) a room will remain active if no one
            joins. Can be configured when creating a room via REST API. For
            Ad-Hoc rooms this value cannot be changed.
        large_room:
          type: boolean
          nullable: true
          description: Indicates if this is a large room.
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
    room_enum_room_status:
      type: string
      enum:
        - in-progress
        - completed
        - failed
    room_enum_room_type:
      type: string
      enum:
        - go
        - peer-to-peer
        - group
        - group-small
    room_enum_video_codec:
      type: string
      enum:
        - VP8
        - H264
    video.v1.room.room_participant:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^PA[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the RoomParticipant
            resource.
        room_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^RM[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the participant's room.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) that created
            the RoomParticipant resource.
        status:
          type: string
          $ref: '#/components/schemas/room_participant_enum_status'
          nullable: true
          description: >-
            The status of the Participant. Can be: `connected` or
            `disconnected`.
        identity:
          type: string
          nullable: true
          description: >-
            The application-defined string that uniquely identifies the
            resource's User within a Room. If a client joins with an existing
            Identity, the existing client is disconnected. See [access
            tokens](https://www.twilio.com/docs/video/tutorials/user-identity-access-tokens)
            and
            [limits](https://www.twilio.com/docs/video/programmable-video-limits)
            for more info. 
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
        start_time:
          type: string
          format: date-time
          nullable: true
          description: >-
            The time of participant connected to the room in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
        end_time:
          type: string
          format: date-time
          nullable: true
          description: >-
            The time when the participant disconnected from the room in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
        duration:
          type: integer
          nullable: true
          description: >-
            The duration in seconds that the participant was `connected`.
            Populated only after the participant is `disconnected`.
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
    room_participant_enum_status:
      type: string
      enum:
        - connected
        - disconnected
    video.v1.room.room_participant.room_participant_anonymize:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^PA[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the RoomParticipant
            resource.
        room_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^RM[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the participant's room.
        account_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^AC[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the
            [Account](https://www.twilio.com/docs/iam/api/account) that created
            the RoomParticipant resource.
        status:
          type: string
          $ref: '#/components/schemas/room_participant_anonymize_enum_status'
          nullable: true
          description: >-
            The status of the Participant. Can be: `connected` or
            `disconnected`.
        identity:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^PA[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the participant.
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
        start_time:
          type: string
          format: date-time
          nullable: true
          description: >-
            The time of participant connected to the room in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
        end_time:
          type: string
          format: date-time
          nullable: true
          description: >-
            The time when the participant disconnected from the room in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
        duration:
          type: integer
          nullable: true
          description: >-
            The duration in seconds that the participant was `connected`.
            Populated only after the participant is `disconnected`.
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the resource.
    room_participant_anonymize_enum_status:
      type: string
      enum:
        - connected
        - disconnected
    video.v1.room.room_participant.room_participant_published_track:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^MT[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the
            RoomParticipantPublishedTrack resource.
        participant_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^PA[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the Participant resource with the published track.
        room_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^RM[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the Room resource where the track is published.
        name:
          type: string
          nullable: true
          description: >-
            The track name. Must be no more than 128 characters, and be unique
            among the participant's published tracks.
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
        enabled:
          type: boolean
          nullable: true
          description: Whether the track is enabled.
        kind:
          type: string
          $ref: '#/components/schemas/room_participant_published_track_enum_kind'
          nullable: true
          description: 'The track type. Can be: `audio`, `video` or `data`.'
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the resource.
    room_participant_published_track_enum_kind:
      type: string
      enum:
        - audio
        - video
        - data
    video.v1.room.room_participant.room_participant_subscribe_rule:
      type: object
      properties:
        participant_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^PA[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the Participant resource for the Subscribe Rules.
        room_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^RM[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the Room resource for the Subscribe Rules
        rules:
          type: array
          items:
            type: object
            format: subscribe-rule
            properties:
              type:
                type: string
              all:
                type: boolean
              publisher:
                type: string
              track:
                type: string
              kind:
                type: string
              priority:
                type: string
          nullable: true
          description: >-
            A collection of Subscribe Rules that describe how to include or
            exclude matching tracks. See the [Specifying Subscribe
            Rules](https://www.twilio.com/docs/video/api/track-subscriptions#specifying-sr)
            section for further information.
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
    video.v1.room.room_participant.room_participant_subscribed_track:
      type: object
      properties:
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^MT[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the
            RoomParticipantSubscribedTrack resource.
        participant_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^PA[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the participant that subscribes to the track.
        publisher_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^PA[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the participant that publishes the track.
        room_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^RM[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the room where the track is published.
        name:
          type: string
          nullable: true
          description: >-
            The track name. Must have no more than 128 characters and be unique
            among the participant's published tracks.
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
        enabled:
          type: boolean
          nullable: true
          description: Whether the track is enabled.
        kind:
          type: string
          $ref: '#/components/schemas/room_participant_subscribed_track_enum_kind'
          nullable: true
          description: 'The track type. Can be: `audio`, `video` or `data`.'
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the resource.
    room_participant_subscribed_track_enum_kind:
      type: string
      enum:
        - audio
        - video
        - data
    video.v1.room.room_recording:
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
            the RoomRecording resource.
        status:
          type: string
          $ref: '#/components/schemas/room_recording_enum_status'
          nullable: true
          description: >-
            The status of the recording. Can be: `processing`, `completed`, or
            `deleted`. `processing` indicates the Recording is still being
            captured. `completed` indicates the Recording has been captured and
            is now available for download. `deleted` means the recording media
            has been deleted from the system, but its metadata is still
            available for historical purposes.
        date_created:
          type: string
          format: date-time
          nullable: true
          description: >-
            The date and time in GMT when the resource was created specified in
            [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
        sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^RT[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The unique string that we created to identify the RoomRecording
            resource.
        source_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^[a-zA-Z]{2}[0-9a-fA-F]{32}$'
          nullable: true
          description: >-
            The SID of the recording source. For a Room Recording, this value is
            a `track_sid`.
        size:
          type: integer
          format: int64
          nullable: true
          description: The size of the recorded track in bytes.
        url:
          type: string
          format: uri
          nullable: true
          description: The absolute URL of the resource.
        type:
          type: string
          $ref: '#/components/schemas/room_recording_enum_type'
          nullable: true
          description: 'The recording''s media type. Can be: `audio` or `video`.'
        duration:
          type: integer
          nullable: true
          description: >-
            The duration of the recording rounded to the nearest second.
            Sub-second duration tracks have a `duration` of 1 second
        container_format:
          type: string
          $ref: '#/components/schemas/room_recording_enum_format'
          nullable: true
          description: >-
            The file format for the recording. Can be: `mka` or `mkv`. Video
            Room recordings are captured in [Matroska container
            format](https://matroska.org/), `mka` is for audio files and `mkv`
            for video files.
        codec:
          type: string
          $ref: '#/components/schemas/room_recording_enum_codec'
          nullable: true
          description: 'The codec used for the recording. Can be: `VP8` or `H264`.'
        grouping_sids:
          nullable: true
          description: >-
            A list of SIDs related to the Recording. Includes the `room_sid` and
            `participant_sid`.
        track_name:
          type: string
          nullable: true
          description: >-
            The name that was given to the source track of the recording. If no
            name is given, the `source_sid` is used.
        offset:
          type: integer
          format: int64
          nullable: true
          description: >-
            The time in milliseconds elapsed between an arbitrary point in time,
            common to all group rooms, and the moment when the source room of
            this track started. This information provides a synchronization
            mechanism for recordings belonging to the same room.
        media_external_location:
          type: string
          format: uri
          nullable: true
          description: >-
            The URL of the media file associated with the recording when stored
            externally. See [External S3
            Recordings](/docs/video/api/external-s3-recordings) for more
            details.
        room_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^RM[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the Room resource the recording is associated with.
        links:
          type: object
          format: uri-map
          nullable: true
          description: The URLs of related resources.
    room_recording_enum_status:
      type: string
      enum:
        - processing
        - completed
        - deleted
        - failed
    room_recording_enum_type:
      type: string
      enum:
        - audio
        - video
        - data
    room_recording_enum_format:
      type: string
      enum:
        - mka
        - mkv
    room_recording_enum_codec:
      type: string
      enum:
        - VP8
        - H264
        - OPUS
        - PCMU
    video.v1.room.room_recording_rule:
      type: object
      properties:
        room_sid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^RM[0-9a-fA-F]{32}$'
          nullable: true
          description: The SID of the Room resource for the Recording Rules
        rules:
          type: array
          items:
            type: object
            format: recording-rule
            properties:
              type:
                type: string
              all:
                type: boolean
              publisher:
                type: string
              track:
                type: string
              kind:
                type: string
          nullable: true
          description: >-
            A collection of Recording Rules that describe how to include or
            exclude matching tracks for recording
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
    ListCompositionResponse:
      type: object
      properties:
        compositions:
          type: array
          items:
            $ref: '#/components/schemas/video.v1.composition'
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
    CreateCompositionRequest:
      type: object
      required:
        - RoomSid
      properties:
        RoomSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^RM[0-9a-fA-F]{32}$'
          description: >-
            The SID of the Group Room with the media tracks to be used as
            composition sources.
        VideoLayout:
          description: >-
            An object that describes the video layout of the composition in
            terms of regions. See [Specifying Video
            Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
            for more info. Please, be aware that either video_layout or
            audio_sources have to be provided to get a valid creation request
        AudioSources:
          type: array
          items:
            type: string
          description: >-
            An array of track names from the same group room to merge into the
            new composition. Can include zero or more track names. The new
            composition includes all audio sources specified in `audio_sources`
            except for those specified in `audio_sources_excluded`. The track
            names in this parameter can include an asterisk as a wild card
            character, which will match zero or more characters in a track name.
            For example, `student*` includes `student` as well as `studentTeam`.
            Please, be aware that either video_layout or audio_sources have to
            be provided to get a valid creation request
        AudioSourcesExcluded:
          type: array
          items:
            type: string
          description: >-
            An array of track names to exclude. The new composition includes all
            audio sources specified in `audio_sources` except for those
            specified in `audio_sources_excluded`. The track names in this
            parameter can include an asterisk as a wild card character, which
            will match zero or more characters in a track name. For example,
            `student*` excludes `student` as well as `studentTeam`. This
            parameter can also be empty.
        Resolution:
          type: string
          description: >-
            A string that describes the columns (width) and rows (height) of the
            generated composed video in pixels. Defaults to `640x480`. 

            The string's format is `{width}x{height}` where: 


            * 16 <= `{width}` <= 1280

            * 16 <= `{height}` <= 1280

            * `{width}` * `{height}` <= 921,600


            Typical values are: 


            * HD = `1280x720`

            * PAL = `1024x576`

            * VGA = `640x480`

            * CIF = `320x240`


            Note that the `resolution` imposes an aspect ratio to the resulting
            composition. When the original video tracks are constrained by the
            aspect ratio, they are scaled to fit. See [Specifying Video
            Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
            for more info.
        Format:
          type: string
          $ref: '#/components/schemas/composition_enum_format'
          description: >-
            The container format of the composition's media files. Can be: `mp4`
            or `webm` and the default is `webm`. If you specify `mp4` or `webm`,
            you must also specify one or more `audio_sources` and/or a
            `video_layout` element that contains a valid `video_sources` list,
            otherwise an error occurs.
        StatusCallback:
          type: string
          format: uri
          description: >-
            The URL we should call using the `status_callback_method` to send
            status information to your application on every composition event.
            If not provided, status callback events will not be dispatched.
        StatusCallbackMethod:
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
            The HTTP method we should use to call `status_callback`. Can be:
            `POST` or `GET` and the default is `POST`.
        Trim:
          type: boolean
          description: >-
            Whether to clip the intervals where there is no active media in the
            composition. The default is `true`. Compositions with `trim` enabled
            are shorter when the Room is created and no Participant joins for a
            while as well as if all the Participants leave the room and join
            later, because those gaps will be removed. See [Specifying Video
            Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
            for more info.
    UpdateCompositionHookRequest:
      type: object
      required:
        - FriendlyName
      properties:
        FriendlyName:
          type: string
          description: >-
            A descriptive string that you create to describe the resource. It
            can be up to  100 characters long and it must be unique within the
            account.
        Enabled:
          type: boolean
          description: >-
            Whether the composition hook is active. When `true`, the composition
            hook will be triggered for every completed Group Room in the
            account. When `false`, the composition hook never triggers.
        VideoLayout:
          description: >-
            A JSON object that describes the video layout of the composition
            hook in terms of regions. See [Specifying Video
            Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
            for more info.
        AudioSources:
          type: array
          items:
            type: string
          description: >-
            An array of track names from the same group room to merge into the
            compositions created by the composition hook. Can include zero or
            more track names. A composition triggered by the composition hook
            includes all audio sources specified in `audio_sources` except those
            specified in `audio_sources_excluded`. The track names in this
            parameter can include an asterisk as a wild card character, which
            matches zero or more characters in a track name. For example,
            `student*` includes tracks named `student` as well as `studentTeam`.
        AudioSourcesExcluded:
          type: array
          items:
            type: string
          description: >-
            An array of track names to exclude. A composition triggered by the
            composition hook includes all audio sources specified in
            `audio_sources` except for those specified in
            `audio_sources_excluded`. The track names in this parameter can
            include an asterisk as a wild card character, which matches zero or
            more characters in a track name. For example, `student*` excludes
            `student` as well as `studentTeam`. This parameter can also be
            empty.
        Trim:
          type: boolean
          description: >-
            Whether to clip the intervals where there is no active media in the
            compositions triggered by the composition hook. The default is
            `true`. Compositions with `trim` enabled are shorter when the Room
            is created and no Participant joins for a while as well as if all
            the Participants leave the room and join later, because those gaps
            will be removed. See [Specifying Video
            Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
            for more info.
        Format:
          type: string
          $ref: '#/components/schemas/composition_hook_enum_format'
          description: >-
            The container format of the media files used by the compositions
            created by the composition hook. Can be: `mp4` or `webm` and the
            default is `webm`. If `mp4` or `webm`, `audio_sources` must have one
            or more tracks and/or a `video_layout` element must contain a valid
            `video_sources` list, otherwise an error occurs.
        Resolution:
          type: string
          description: >-
            A string that describes the columns (width) and rows (height) of the
            generated composed video in pixels. Defaults to `640x480`. 

            The string's format is `{width}x{height}` where: 


            * 16 <= `{width}` <= 1280

            * 16 <= `{height}` <= 1280

            * `{width}` * `{height}` <= 921,600


            Typical values are: 


            * HD = `1280x720`

            * PAL = `1024x576`

            * VGA = `640x480`

            * CIF = `320x240`


            Note that the `resolution` imposes an aspect ratio to the resulting
            composition. When the original video tracks are constrained by the
            aspect ratio, they are scaled to fit. See [Specifying Video
            Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
            for more info.
        StatusCallback:
          type: string
          format: uri
          description: >-
            The URL we should call using the `status_callback_method` to send
            status information to your application on every composition event.
            If not provided, status callback events will not be dispatched.
        StatusCallbackMethod:
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
            The HTTP method we should use to call `status_callback`. Can be:
            `POST` or `GET` and the default is `POST`.
    ListCompositionHookResponse:
      type: object
      properties:
        composition_hooks:
          type: array
          items:
            $ref: '#/components/schemas/video.v1.composition_hook'
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
    CreateCompositionHookRequest:
      type: object
      required:
        - FriendlyName
      properties:
        FriendlyName:
          type: string
          description: >-
            A descriptive string that you create to describe the resource. It
            can be up to  100 characters long and it must be unique within the
            account.
        Enabled:
          type: boolean
          description: >-
            Whether the composition hook is active. When `true`, the composition
            hook will be triggered for every completed Group Room in the
            account. When `false`, the composition hook will never be triggered.
        VideoLayout:
          description: >-
            An object that describes the video layout of the composition hook in
            terms of regions. See [Specifying Video
            Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
            for more info.
        AudioSources:
          type: array
          items:
            type: string
          description: >-
            An array of track names from the same group room to merge into the
            compositions created by the composition hook. Can include zero or
            more track names. A composition triggered by the composition hook
            includes all audio sources specified in `audio_sources` except those
            specified in `audio_sources_excluded`. The track names in this
            parameter can include an asterisk as a wild card character, which
            matches zero or more characters in a track name. For example,
            `student*` includes tracks named `student` as well as `studentTeam`.
        AudioSourcesExcluded:
          type: array
          items:
            type: string
          description: >-
            An array of track names to exclude. A composition triggered by the
            composition hook includes all audio sources specified in
            `audio_sources` except for those specified in
            `audio_sources_excluded`. The track names in this parameter can
            include an asterisk as a wild card character, which matches zero or
            more characters in a track name. For example, `student*` excludes
            `student` as well as `studentTeam`. This parameter can also be
            empty.
        Resolution:
          type: string
          description: >-
            A string that describes the columns (width) and rows (height) of the
            generated composed video in pixels. Defaults to `640x480`. 

            The string's format is `{width}x{height}` where: 


            * 16 <= `{width}` <= 1280

            * 16 <= `{height}` <= 1280

            * `{width}` * `{height}` <= 921,600


            Typical values are: 


            * HD = `1280x720`

            * PAL = `1024x576`

            * VGA = `640x480`

            * CIF = `320x240`


            Note that the `resolution` imposes an aspect ratio to the resulting
            composition. When the original video tracks are constrained by the
            aspect ratio, they are scaled to fit. See [Specifying Video
            Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
            for more info.
        Format:
          type: string
          $ref: '#/components/schemas/composition_hook_enum_format'
          description: >-
            The container format of the media files used by the compositions
            created by the composition hook. Can be: `mp4` or `webm` and the
            default is `webm`. If `mp4` or `webm`, `audio_sources` must have one
            or more tracks and/or a `video_layout` element must contain a valid
            `video_sources` list, otherwise an error occurs.
        StatusCallback:
          type: string
          format: uri
          description: >-
            The URL we should call using the `status_callback_method` to send
            status information to your application on every composition event.
            If not provided, status callback events will not be dispatched.
        StatusCallbackMethod:
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
            The HTTP method we should use to call `status_callback`. Can be:
            `POST` or `GET` and the default is `POST`.
        Trim:
          type: boolean
          description: >-
            Whether to clip the intervals where there is no active media in the
            Compositions triggered by the composition hook. The default is
            `true`. Compositions with `trim` enabled are shorter when the Room
            is created and no Participant joins for a while as well as if all
            the Participants leave the room and join later, because those gaps
            will be removed. See [Specifying Video
            Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
            for more info.
    CreateCompositionSettingsRequest:
      type: object
      required:
        - FriendlyName
      properties:
        FriendlyName:
          type: string
          description: >-
            A descriptive string that you create to describe the resource and
            show to the user in the console
        AwsCredentialsSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: The SID of the stored Credential resource.
        EncryptionKeySid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: The SID of the Public Key resource to use for encryption.
        AwsS3Url:
          type: string
          format: uri
          description: >-
            The URL of the AWS S3 bucket where the compositions should be
            stored. We only support DNS-compliant URLs like
            `https://documentation-example-twilio-bucket/compositions`, where
            `compositions` is the path in which you want the compositions to be
            stored. This URL accepts only URI-valid characters, as described in
            the <a href='https://tools.ietf.org/html/rfc3986#section-2'>RFC
            3986</a>.
        AwsStorageEnabled:
          type: boolean
          description: >-
            Whether all compositions should be written to the `aws_s3_url`. When
            `false`, all compositions are stored in our cloud.
        EncryptionEnabled:
          type: boolean
          description: >-
            Whether all compositions should be stored in an encrypted form. The
            default is `false`.
    ListRecordingResponse:
      type: object
      properties:
        recordings:
          type: array
          items:
            $ref: '#/components/schemas/video.v1.recording'
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
    CreateRecordingSettingsRequest:
      type: object
      required:
        - FriendlyName
      properties:
        FriendlyName:
          type: string
          description: >-
            A descriptive string that you create to describe the resource and be
            shown to users in the console
        AwsCredentialsSid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: The SID of the stored Credential resource.
        EncryptionKeySid:
          type: string
          minLength: 34
          maxLength: 34
          pattern: '^CR[0-9a-fA-F]{32}$'
          description: The SID of the Public Key resource to use for encryption.
        AwsS3Url:
          type: string
          format: uri
          description: >-
            The URL of the AWS S3 bucket where the recordings should be stored.
            We only support DNS-compliant URLs like
            `https://documentation-example-twilio-bucket/recordings`, where
            `recordings` is the path in which you want the recordings to be
            stored. This URL accepts only URI-valid characters, as described in
            the <a href='https://tools.ietf.org/html/rfc3986#section-2'>RFC
            3986</a>.
        AwsStorageEnabled:
          type: boolean
          description: >-
            Whether all recordings should be written to the `aws_s3_url`. When
            `false`, all recordings are stored in our cloud.
        EncryptionEnabled:
          type: boolean
          description: >-
            Whether all recordings should be stored in an encrypted form. The
            default is `false`.
    UpdateRoomRequest:
      type: object
      required:
        - Status
      properties:
        Status:
          type: string
          $ref: '#/components/schemas/room_enum_room_status'
          description: The new status of the resource. Set to `completed` to end the room.
    CreateRoomRequest:
      type: object
      properties:
        EnableTurn:
          type: boolean
          description: 'Deprecated, now always considered to be true.'
        Type:
          type: string
          $ref: '#/components/schemas/room_enum_room_type'
          description: >-
            The type of room. Can be: `go`, `peer-to-peer`, `group-small`, or
            `group`. The default value is `group`.
        UniqueName:
          type: string
          description: >-
            An application-defined string that uniquely identifies the resource.
            It can be used as a `room_sid` in place of the resource's `sid` in
            the URL to address the resource, assuming it does not contain any
            [reserved
            characters](https://tools.ietf.org/html/rfc3986#section-2.2) that
            would need to be URL encoded. This value is unique for `in-progress`
            rooms. SDK clients can use this name to connect to the room. REST
            API clients can use this name in place of the Room SID to interact
            with the room as long as the room is `in-progress`.
        StatusCallback:
          type: string
          format: uri
          description: >-
            The URL we should call using the `status_callback_method` to send
            status information to your application on every room event. See
            [Status
            Callbacks](https://www.twilio.com/docs/video/api/status-callbacks)
            for more info.
        StatusCallbackMethod:
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
            The HTTP method we should use to call `status_callback`. Can be
            `POST` or `GET`.
        MaxParticipants:
          type: integer
          description: >-
            The maximum number of concurrent Participants allowed in the room.
            Peer-to-peer rooms can have up to 10 Participants. Small Group rooms
            can have up to 4 Participants. Group rooms can have up to 50
            Participants.
        RecordParticipantsOnConnect:
          type: boolean
          description: >-
            Whether to start recording when Participants connect. ***This
            feature is not available in `peer-to-peer` rooms.***
        VideoCodecs:
          type: array
          items:
            type: string
            $ref: '#/components/schemas/room_enum_video_codec'
          description: >-
            An array of the video codecs that are supported when publishing a
            track in the room.  Can be: `VP8` and `H264`.  ***This feature is
            not available in `peer-to-peer` rooms***
        MediaRegion:
          type: string
          description: >-
            The region for the media server in Group Rooms.  Can be: one of the
            [available Media
            Regions](https://www.twilio.com/docs/video/ip-addresses#group-rooms-media-servers).
            ***This feature is not available in `peer-to-peer` rooms.***
        RecordingRules:
          description: >-
            A collection of Recording Rules that describe how to include or
            exclude matching tracks for recording
        AudioOnly:
          type: boolean
          description: >-
            When set to true, indicates that the participants in the room will
            only publish audio. No video tracks will be allowed. Group rooms
            only.
        MaxParticipantDuration:
          type: integer
          description: >-
            The maximum number of seconds a Participant can be connected to the
            room. The maximum possible value is 86400 seconds (24 hours). The
            default is 14400 seconds (4 hours).
        EmptyRoomTimeout:
          type: integer
          description: >-
            Configures how long (in minutes) a room will remain active after
            last participant leaves. Valid values range from 1 to 60 minutes (no
            fractions).
        UnusedRoomTimeout:
          type: integer
          description: >-
            Configures how long (in minutes) a room will remain active if no one
            joins. Valid values range from 1 to 60 minutes (no fractions).
        LargeRoom:
          type: boolean
          description: 'When set to true, indicated that this is the large room.'
    ListRoomResponse:
      type: object
      properties:
        rooms:
          type: array
          items:
            $ref: '#/components/schemas/video.v1.room'
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
    UpdateRoomParticipantRequest:
      type: object
      properties:
        Status:
          type: string
          $ref: '#/components/schemas/room_participant_enum_status'
          description: >-
            The new status of the resource. Can be: `connected` or
            `disconnected`. For `in-progress` Rooms the default Status is
            `connected`, for `completed` Rooms only `disconnected` Participants
            are returned.
    ListRoomParticipantResponse:
      type: object
      properties:
        participants:
          type: array
          items:
            $ref: '#/components/schemas/video.v1.room.room_participant'
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
    ListRoomParticipantPublishedTrackResponse:
      type: object
      properties:
        published_tracks:
          type: array
          items:
            $ref: >-
              #/components/schemas/video.v1.room.room_participant.room_participant_published_track
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
    UpdateRoomParticipantSubscribeRuleRequest:
      type: object
      properties:
        Rules:
          description: >-
            A JSON-encoded array of subscribe rules. See the [Specifying
            Subscribe
            Rules](https://www.twilio.com/docs/video/api/track-subscriptions#specifying-sr)
            section for further information.
    ListRoomParticipantSubscribedTrackResponse:
      type: object
      properties:
        subscribed_tracks:
          type: array
          items:
            $ref: >-
              #/components/schemas/video.v1.room.room_participant.room_participant_subscribed_track
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
    ListRoomRecordingResponse:
      type: object
      properties:
        recordings:
          type: array
          items:
            $ref: '#/components/schemas/video.v1.room.room_recording'
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
    UpdateRoomRecordingRuleRequest:
      type: object
      properties:
        Rules:
          description: A JSON-encoded array of recording rules.
  securitySchemes:
    accountSid_authToken:
      type: http
      scheme: basic
info:
  title: Twilio - Video
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
  '/v1/Compositions/{Sid}':
    servers:
      - url: 'https://video.twilio.com'
    description: Recording compositions
    x-twilio:
      defaultOutputProperties:
        - sid
        - status
        - resolution
        - format
      pathType: instance
      dependentProperties:
        media:
          mapping:
            composition_sid: sid
          resource_url: /v1None
    get:
      description: Returns a single Composition resource identified by a Composition SID.
      tags:
        - VideoV1Composition
      parameters:
        - name: Sid
          in: path
          description: The SID of the Composition resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^CJ[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.composition'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchComposition
      x-maturity:
        - GA
    delete:
      description: Delete a Recording Composition resource identified by a Composition SID.
      tags:
        - VideoV1Composition
      parameters:
        - name: Sid
          in: path
          description: The SID of the Composition resource to delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^CJ[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteComposition
      x-maturity:
        - GA
  /v1/Compositions:
    servers:
      - url: 'https://video.twilio.com'
    description: Recording compositions
    x-twilio:
      defaultOutputProperties:
        - sid
        - status
        - resolution
        - format
      pathType: list
      dependentProperties:
        media:
          mapping:
            composition_sid: sid
          resource_url: /v1None
    get:
      description: List of all Recording compositions.
      tags:
        - VideoV1Composition
      parameters:
        - name: Status
          in: query
          description: >-
            Read only Composition resources with this status. Can be:
            `enqueued`, `processing`, `completed`, `deleted`, or `failed`.
          schema:
            type: string
            $ref: '#/components/schemas/composition_enum_status'
        - name: DateCreatedAfter
          in: query
          description: >-
            Read only Composition resources created on or after this [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time
            zone.
          schema:
            type: string
            format: date-time
        - name: DateCreatedBefore
          in: query
          description: >-
            Read only Composition resources created before this ISO 8601
            date-time with time zone.
          schema:
            type: string
            format: date-time
        - name: RoomSid
          in: query
          description: Read only Composition resources with this Room SID.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RM[0-9a-fA-F]{32}$'
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
                $ref: '#/components/schemas/ListCompositionResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListComposition
      x-maturity:
        - GA
    post:
      description: ''
      tags:
        - VideoV1Composition
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.composition'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateComposition
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateCompositionRequest'
  '/v1/CompositionHooks/{Sid}':
    servers:
      - url: 'https://video.twilio.com'
    description: Recording composition hooks
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - date_created
      pathType: instance
    get:
      description: >-
        Returns a single CompositionHook resource identified by a
        CompositionHook SID.
      tags:
        - VideoV1CompositionHook
      parameters:
        - name: Sid
          in: path
          description: The SID of the CompositionHook resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^HK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.composition_hook'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchCompositionHook
      x-maturity:
        - GA
    delete:
      description: >-
        Delete a Recording CompositionHook resource identified by a
        `CompositionHook SID`.
      tags:
        - VideoV1CompositionHook
      parameters:
        - name: Sid
          in: path
          description: The SID of the CompositionHook resource to delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^HK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteCompositionHook
      x-maturity:
        - GA
    post:
      description: ''
      tags:
        - VideoV1CompositionHook
      parameters:
        - name: Sid
          in: path
          description: The SID of the CompositionHook resource to update.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^HK[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.composition_hook'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateCompositionHook
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateCompositionHookRequest'
  /v1/CompositionHooks:
    servers:
      - url: 'https://video.twilio.com'
    description: Recording composition hooks
    x-twilio:
      defaultOutputProperties:
        - sid
        - friendly_name
        - date_created
      pathType: list
    get:
      description: List of all Recording CompositionHook resources.
      tags:
        - VideoV1CompositionHook
      parameters:
        - name: Enabled
          in: query
          description: >-
            Read only CompositionHook resources with an `enabled` value that
            matches this parameter.
          schema:
            type: boolean
        - name: DateCreatedAfter
          in: query
          description: >-
            Read only CompositionHook resources created on or after this [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time
            zone.
          schema:
            type: string
            format: date-time
        - name: DateCreatedBefore
          in: query
          description: >-
            Read only CompositionHook resources created before this [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time
            zone.
          schema:
            type: string
            format: date-time
        - name: FriendlyName
          in: query
          description: >-
            Read only CompositionHook resources with friendly names that match
            this string. The match is not case sensitive and can include
            asterisk `*` characters as wildcard match.
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
                $ref: '#/components/schemas/ListCompositionHookResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListCompositionHook
      x-maturity:
        - GA
    post:
      description: ''
      tags:
        - VideoV1CompositionHook
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.composition_hook'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateCompositionHook
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateCompositionHookRequest'
  /v1/CompositionSettings/Default:
    servers:
      - url: 'https://video.twilio.com'
    description: Recording composition settings
    x-twilio:
      defaultOutputProperties:
        - friendly_name
        - aws_storage_enabled
        - encryption_enabled
      pathType: instance
      mountName: composition_settings
      className: composition_settings
    get:
      description: ''
      tags:
        - VideoV1CompositionSettings
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.composition_settings'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchCompositionSettings
      x-maturity:
        - GA
    post:
      description: ''
      tags:
        - VideoV1CompositionSettings
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.composition_settings'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateCompositionSettings
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateCompositionSettingsRequest'
  '/v1/Recordings/{Sid}':
    servers:
      - url: 'https://video.twilio.com'
    description: 'Single-track, single-media recordings'
    x-twilio:
      defaultOutputProperties:
        - sid
        - date_created
        - status
        - type
        - duration
        - codec
      pathType: instance
      dependentProperties:
        media:
          mapping:
            recording_sid: sid
          resource_url: /v1None
    get:
      description: Returns a single Recording resource identified by a Recording SID.
      tags:
        - VideoV1Recording
      parameters:
        - name: Sid
          in: path
          description: The SID of the Recording resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RT[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.recording'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchRecording
      x-maturity:
        - GA
    delete:
      description: Delete a Recording resource identified by a Recording SID.
      tags:
        - VideoV1Recording
      parameters:
        - name: Sid
          in: path
          description: The SID of the Recording resource to delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RT[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteRecording
      x-maturity:
        - GA
  /v1/Recordings:
    servers:
      - url: 'https://video.twilio.com'
    description: 'Single-track, single-media recordings'
    x-twilio:
      defaultOutputProperties:
        - sid
        - date_created
        - status
        - type
        - duration
        - codec
      pathType: list
      dependentProperties:
        media:
          mapping:
            recording_sid: sid
          resource_url: /v1None
    get:
      description: List of all Track recordings.
      tags:
        - VideoV1Recording
      parameters:
        - name: Status
          in: query
          description: >-
            Read only the recordings that have this status. Can be:
            `processing`, `completed`, or `deleted`.
          schema:
            type: string
            $ref: '#/components/schemas/recording_enum_status'
        - name: SourceSid
          in: query
          description: Read only the recordings that have this `source_sid`.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^[a-zA-Z]{2}[0-9a-fA-F]{32}$'
        - name: GroupingSid
          in: query
          description: >-
            Read only recordings with this `grouping_sid`, which may include a
            `participant_sid` and/or a `room_sid`.
          schema:
            type: array
            items:
              type: string
              minLength: 34
              maxLength: 34
              pattern: '^[a-zA-Z]{2}[0-9a-fA-F]{32}$'
        - name: DateCreatedAfter
          in: query
          description: >-
            Read only recordings that started on or after this [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time
            zone.
          schema:
            type: string
            format: date-time
        - name: DateCreatedBefore
          in: query
          description: >-
            Read only recordings that started before this [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time
            zone, given as `YYYY-MM-DDThh:mm:ss+|-hh:mm` or
            `YYYY-MM-DDThh:mm:ssZ`.
          schema:
            type: string
            format: date-time
        - name: MediaType
          in: query
          description: >-
            Read only recordings that have this media type. Can be either
            `audio` or `video`.
          schema:
            type: string
            $ref: '#/components/schemas/recording_enum_type'
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
                $ref: '#/components/schemas/ListRecordingResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListRecording
      x-maturity:
        - GA
  /v1/RecordingSettings/Default:
    servers:
      - url: 'https://video.twilio.com'
    description: Recording settings
    x-twilio:
      defaultOutputProperties:
        - friendly_name
        - aws_storage_enabled
        - encryption_enabled
      pathType: instance
      mountName: recording_settings
      className: recording_settings
    get:
      description: ''
      tags:
        - VideoV1RecordingSettings
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.recording_settings'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchRecordingSettings
      x-maturity:
        - GA
    post:
      description: ''
      tags:
        - VideoV1RecordingSettings
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.recording_settings'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateRecordingSettings
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateRecordingSettingsRequest'
  '/v1/Rooms/{Sid}':
    servers:
      - url: 'https://video.twilio.com'
    description: Video rooms with one or more participants
    x-twilio:
      defaultOutputProperties:
        - sid
        - unique_name
        - status
      pathType: instance
      dependentProperties:
        recordings:
          mapping:
            room_sid: sid
          resource_url: '/v1/Rooms/{room_sid}/Recordings'
        participants:
          mapping:
            room_sid: sid
          resource_url: '/v1/Rooms/{room_sid}/Participants'
        recording_rules:
          mapping:
            room_sid: sid
          resource_url: '/v1/Rooms/{room_sid}/RecordingRules'
    get:
      description: ''
      tags:
        - VideoV1Room
      parameters:
        - name: Sid
          in: path
          description: The SID of the Room resource to fetch.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.room'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchRoom
      x-maturity:
        - GA
    post:
      description: ''
      tags:
        - VideoV1Room
      parameters:
        - name: Sid
          in: path
          description: The SID of the Room resource to update.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.room'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateRoom
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateRoomRequest'
  /v1/Rooms:
    servers:
      - url: 'https://video.twilio.com'
    description: Video rooms with one or more participants
    x-twilio:
      defaultOutputProperties:
        - sid
        - unique_name
        - status
      pathType: list
      dependentProperties:
        recordings:
          mapping:
            room_sid: sid
          resource_url: '/v1/Rooms/{room_sid}/Recordings'
        participants:
          mapping:
            room_sid: sid
          resource_url: '/v1/Rooms/{room_sid}/Participants'
        recording_rules:
          mapping:
            room_sid: sid
          resource_url: '/v1/Rooms/{room_sid}/RecordingRules'
    post:
      description: ''
      tags:
        - VideoV1Room
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.room'
          description: Created
      security:
        - accountSid_authToken: []
      operationId: CreateRoom
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/CreateRoomRequest'
    get:
      description: ''
      tags:
        - VideoV1Room
      parameters:
        - name: Status
          in: query
          description: >-
            Read only the rooms with this status. Can be: `in-progress`
            (default) or `completed`
          schema:
            type: string
            $ref: '#/components/schemas/room_enum_room_status'
        - name: UniqueName
          in: query
          description: Read only rooms with the this `unique_name`.
          schema:
            type: string
        - name: DateCreatedAfter
          in: query
          description: >-
            Read only rooms that started on or after this date, given as
            `YYYY-MM-DD`.
          schema:
            type: string
            format: date-time
        - name: DateCreatedBefore
          in: query
          description: >-
            Read only rooms that started before this date, given as
            `YYYY-MM-DD`.
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
                $ref: '#/components/schemas/ListRoomResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListRoom
      x-maturity:
        - GA
  '/v1/Rooms/{RoomSid}/Participants/{Sid}':
    servers:
      - url: 'https://video.twilio.com'
    description: Participants in video rooms
    x-twilio:
      defaultOutputProperties:
        - sid
        - identity
        - status
      pathType: instance
      dependentProperties:
        published_tracks:
          mapping:
            room_sid: room_sid
            participant_sid: sid
          resource_url: '/v1/Rooms/{room_sid}/Participants/{participant_sid}/PublishedTracks'
        subscribed_tracks:
          mapping:
            room_sid: room_sid
            participant_sid: sid
          resource_url: '/v1/Rooms/{room_sid}/Participants/{participant_sid}/SubscribedTracks'
        subscribe_rules:
          mapping:
            room_sid: room_sid
            participant_sid: sid
          resource_url: '/v1/Rooms/{room_sid}/Participants/{participant_sid}/SubscribeRules'
        anonymize:
          mapping:
            room_sid: room_sid
            sid: sid
          resource_url: /v1None
      parent: '/Rooms/{Sid}'
    get:
      description: ''
      tags:
        - VideoV1Participant
      parameters:
        - name: RoomSid
          in: path
          description: The SID of the room with the Participant resource to fetch.
          schema:
            type: string
          required: true
        - name: Sid
          in: path
          description: The SID of the RoomParticipant resource to fetch.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.room.room_participant'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchRoomParticipant
      x-maturity:
        - GA
    post:
      description: ''
      tags:
        - VideoV1Participant
      parameters:
        - name: RoomSid
          in: path
          description: The SID of the room with the participant to update.
          schema:
            type: string
          required: true
        - name: Sid
          in: path
          description: The SID of the RoomParticipant resource to update.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.room.room_participant'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateRoomParticipant
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateRoomParticipantRequest'
  '/v1/Rooms/{RoomSid}/Participants':
    servers:
      - url: 'https://video.twilio.com'
    description: Participants in video rooms
    x-twilio:
      defaultOutputProperties:
        - sid
        - identity
        - status
      pathType: list
      dependentProperties:
        published_tracks:
          mapping:
            room_sid: room_sid
            participant_sid: sid
          resource_url: '/v1/Rooms/{room_sid}/Participants/{participant_sid}/PublishedTracks'
        subscribed_tracks:
          mapping:
            room_sid: room_sid
            participant_sid: sid
          resource_url: '/v1/Rooms/{room_sid}/Participants/{participant_sid}/SubscribedTracks'
        subscribe_rules:
          mapping:
            room_sid: room_sid
            participant_sid: sid
          resource_url: '/v1/Rooms/{room_sid}/Participants/{participant_sid}/SubscribeRules'
        anonymize:
          mapping:
            room_sid: room_sid
            sid: sid
          resource_url: /v1None
      parent: '/Rooms/{Sid}'
    get:
      description: ''
      tags:
        - VideoV1Participant
      parameters:
        - name: RoomSid
          in: path
          description: The SID of the room with the Participant resources to read.
          schema:
            type: string
          required: true
        - name: Status
          in: query
          description: >-
            Read only the participants with this status. Can be: `connected` or
            `disconnected`. For `in-progress` Rooms the default Status is
            `connected`, for `completed` Rooms only `disconnected` Participants
            are returned.
          schema:
            type: string
            $ref: '#/components/schemas/room_participant_enum_status'
        - name: Identity
          in: query
          description: >-
            Read only the Participants with this
            [User](https://www.twilio.com/docs/chat/rest/user-resource)
            `identity` value.
          schema:
            type: string
        - name: DateCreatedAfter
          in: query
          description: >-
            Read only Participants that started after this date in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
          schema:
            type: string
            format: date-time
        - name: DateCreatedBefore
          in: query
          description: >-
            Read only Participants that started before this date in [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
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
                $ref: '#/components/schemas/ListRoomParticipantResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListRoomParticipant
      x-maturity:
        - GA
  '/v1/Rooms/{RoomSid}/Participants/{Sid}/Anonymize':
    servers:
      - url: 'https://video.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - identity
        - status
      pathType: instance
      parent: '/Rooms/{RoomSid}/Participants/{Sid}'
    post:
      description: ''
      tags:
        - VideoV1Anonymize
      parameters:
        - name: RoomSid
          in: path
          description: The SID of the room with the participant to update.
          schema:
            type: string
          required: true
        - name: Sid
          in: path
          description: The SID of the RoomParticipant resource to update.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: >-
                  #/components/schemas/video.v1.room.room_participant.room_participant_anonymize
          description: OK
      security:
        - accountSid_authToken: []
      operationId: UpdateRoomParticipantAnonymize
      x-maturity:
        - GA
  '/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks/{Sid}':
    servers:
      - url: 'https://video.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - name
        - enabled
        - kind
      pathType: instance
      parent: '/Rooms/{RoomSid}/Participants/{Sid}'
    get:
      description: Returns a single Track resource represented by TrackName or SID.
      tags:
        - VideoV1PublishedTrack
      parameters:
        - name: RoomSid
          in: path
          description: >-
            The SID of the Room resource where the Track resource to fetch is
            published.
          schema:
            type: string
          required: true
        - name: ParticipantSid
          in: path
          description: >-
            The SID of the Participant resource with the published track to
            fetch.
          schema:
            type: string
          required: true
        - name: Sid
          in: path
          description: The SID of the RoomParticipantPublishedTrack resource to fetch.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: >-
                  #/components/schemas/video.v1.room.room_participant.room_participant_published_track
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchRoomParticipantPublishedTrack
      x-maturity:
        - GA
  '/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks':
    servers:
      - url: 'https://video.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - name
        - enabled
        - kind
      pathType: list
      parent: '/Rooms/{RoomSid}/Participants/{Sid}'
    get:
      description: >-
        Returns a list of tracks associated with a given Participant. Only
        `currently` Published Tracks are in the list resource.
      tags:
        - VideoV1PublishedTrack
      parameters:
        - name: RoomSid
          in: path
          description: >-
            The SID of the Room resource where the Track resources to read are
            published.
          schema:
            type: string
          required: true
        - name: ParticipantSid
          in: path
          description: >-
            The SID of the Participant resource with the published tracks to
            read.
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
                $ref: '#/components/schemas/ListRoomParticipantPublishedTrackResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListRoomParticipantPublishedTrack
      x-maturity:
        - GA
  '/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules':
    servers:
      - url: 'https://video.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - participant_sid
        - room_sid
        - rules
      pathType: list
      parent: '/Rooms/{RoomSid}/Participants/{Sid}'
      className: subscribe_rules
    get:
      description: Returns a list of Subscribe Rules for the Participant.
      tags:
        - VideoV1SubscribeRules
      parameters:
        - name: RoomSid
          in: path
          description: >-
            The SID of the Room resource where the subscribe rules to fetch
            apply.
          schema:
            type: string
          required: true
        - name: ParticipantSid
          in: path
          description: >-
            The SID of the Participant resource with the subscribe rules to
            fetch.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: >-
                  #/components/schemas/video.v1.room.room_participant.room_participant_subscribe_rule
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchRoomParticipantSubscribeRule
      x-maturity:
        - GA
    post:
      description: Update the Subscribe Rules for the Participant
      tags:
        - VideoV1SubscribeRules
      parameters:
        - name: RoomSid
          in: path
          description: >-
            The SID of the Room resource where the subscribe rules to update
            apply.
          schema:
            type: string
          required: true
        - name: ParticipantSid
          in: path
          description: The SID of the Participant resource to update the Subscribe Rules.
          schema:
            type: string
          required: true
      responses:
        '202':
          content:
            application/json:
              schema:
                $ref: >-
                  #/components/schemas/video.v1.room.room_participant.room_participant_subscribe_rule
          description: Accepted
      security:
        - accountSid_authToken: []
      operationId: UpdateRoomParticipantSubscribeRule
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateRoomParticipantSubscribeRuleRequest'
  '/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks/{Sid}':
    servers:
      - url: 'https://video.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - name
        - enabled
        - kind
      pathType: instance
      parent: '/Rooms/{RoomSid}/Participants/{Sid}'
    get:
      description: >-
        Returns a single Track resource represented by `track_sid`.  Note: This
        is one resource with the Video API that requires a SID, be Track Name on
        the subscriber side is not guaranteed to be unique.
      tags:
        - VideoV1SubscribedTrack
      parameters:
        - name: RoomSid
          in: path
          description: The SID of the Room where the Track resource to fetch is subscribed.
          schema:
            type: string
          required: true
        - name: ParticipantSid
          in: path
          description: >-
            The SID of the participant that subscribes to the Track resource to
            fetch.
          schema:
            type: string
          required: true
        - name: Sid
          in: path
          description: The SID of the RoomParticipantSubscribedTrack resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^MT[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: >-
                  #/components/schemas/video.v1.room.room_participant.room_participant_subscribed_track
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchRoomParticipantSubscribedTrack
      x-maturity:
        - GA
  '/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks':
    servers:
      - url: 'https://video.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - sid
        - name
        - enabled
        - kind
      pathType: list
      parent: '/Rooms/{RoomSid}/Participants/{Sid}'
    get:
      description: Returns a list of tracks that are subscribed for the participant.
      tags:
        - VideoV1SubscribedTrack
      parameters:
        - name: RoomSid
          in: path
          description: The SID of the Room resource with the Track resources to read.
          schema:
            type: string
          required: true
        - name: ParticipantSid
          in: path
          description: >-
            The SID of the participant that subscribes to the Track resources to
            read.
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
                $ref: >-
                  #/components/schemas/ListRoomParticipantSubscribedTrackResponse
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListRoomParticipantSubscribedTrack
      x-maturity:
        - GA
  '/v1/Rooms/{RoomSid}/Recordings/{Sid}':
    servers:
      - url: 'https://video.twilio.com'
    description: 'Single-track, single-media room recordings'
    x-twilio:
      defaultOutputProperties:
        - sid
        - date_created
        - status
        - type
        - duration
        - codec
      pathType: instance
      dependentProperties:
        media:
          mapping:
            room_sid: room_sid
            sid: sid
          resource_url: /v1None
      parent: '/Rooms/{Sid}'
      className: room_recording
    get:
      description: ''
      tags:
        - VideoV1RoomRecording
      parameters:
        - name: RoomSid
          in: path
          description: The SID of the Room resource with the recording to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RM[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: The SID of the RoomRecording resource to fetch.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RT[0-9a-fA-F]{32}$'
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.room.room_recording'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchRoomRecording
      x-maturity:
        - GA
    delete:
      description: ''
      tags:
        - VideoV1RoomRecording
      parameters:
        - name: RoomSid
          in: path
          description: The SID of the room with the RoomRecording resource to delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RM[0-9a-fA-F]{32}$'
          required: true
        - name: Sid
          in: path
          description: The SID of the RoomRecording resource to delete.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RT[0-9a-fA-F]{32}$'
          required: true
      responses:
        '204':
          description: The resource was deleted successfully.
      security:
        - accountSid_authToken: []
      operationId: DeleteRoomRecording
      x-maturity:
        - GA
  '/v1/Rooms/{RoomSid}/Recordings':
    servers:
      - url: 'https://video.twilio.com'
    description: 'Single-track, single-media room recordings'
    x-twilio:
      defaultOutputProperties:
        - sid
        - date_created
        - status
        - type
        - duration
        - codec
      pathType: list
      dependentProperties:
        media:
          mapping:
            room_sid: room_sid
            sid: sid
          resource_url: /v1None
      parent: '/Rooms/{Sid}'
      className: room_recording
    get:
      description: ''
      tags:
        - VideoV1RoomRecording
      parameters:
        - name: RoomSid
          in: path
          description: The SID of the room with the RoomRecording resources to read.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^RM[0-9a-fA-F]{32}$'
          required: true
        - name: Status
          in: query
          description: >-
            Read only the recordings with this status. Can be: `processing`,
            `completed`, or `deleted`.
          schema:
            type: string
            $ref: '#/components/schemas/room_recording_enum_status'
        - name: SourceSid
          in: query
          description: Read only the recordings that have this `source_sid`.
          schema:
            type: string
            minLength: 34
            maxLength: 34
            pattern: '^[a-zA-Z]{2}[0-9a-fA-F]{32}$'
        - name: DateCreatedAfter
          in: query
          description: >-
            Read only recordings that started on or after this [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time
            zone.
          schema:
            type: string
            format: date-time
        - name: DateCreatedBefore
          in: query
          description: >-
            Read only Recordings that started before this [ISO
            8601](https://en.wikipedia.org/wiki/ISO_8601) datetime with time
            zone.
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
                $ref: '#/components/schemas/ListRoomRecordingResponse'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: ListRoomRecording
      x-maturity:
        - GA
  '/v1/Rooms/{RoomSid}/RecordingRules':
    servers:
      - url: 'https://video.twilio.com'
    description: 'TODO: Resource-level docs'
    x-twilio:
      defaultOutputProperties:
        - room_sid
        - rules
      pathType: list
      parent: '/Rooms/{Sid}'
      className: recording_rules
    get:
      description: Returns a list of Recording Rules for the Room.
      tags:
        - VideoV1RecordingRules
      parameters:
        - name: RoomSid
          in: path
          description: >-
            The SID of the Room resource where the recording rules to fetch
            apply.
          schema:
            type: string
          required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.room.room_recording_rule'
          description: OK
      security:
        - accountSid_authToken: []
      operationId: FetchRoomRecordingRule
      x-maturity:
        - GA
    post:
      description: Update the Recording Rules for the Room
      tags:
        - VideoV1RecordingRules
      parameters:
        - name: RoomSid
          in: path
          description: >-
            The SID of the Room resource where the recording rules to update
            apply.
          schema:
            type: string
          required: true
      responses:
        '202':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/video.v1.room.room_recording_rule'
          description: Accepted
      security:
        - accountSid_authToken: []
      operationId: UpdateRoomRecordingRule
      x-maturity:
        - GA
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/UpdateRoomRecordingRuleRequest'
servers:
  - url: 'https://video.twilio.com'
tags:
  - name: VideoV1Anonymize
  - name: VideoV1Composition
  - name: VideoV1CompositionHook
  - name: VideoV1CompositionSettings
  - name: VideoV1Participant
  - name: VideoV1PublishedTrack
  - name: VideoV1Recording
  - name: VideoV1RecordingRules
  - name: VideoV1RecordingSettings
  - name: VideoV1Room
  - name: VideoV1RoomRecording
  - name: VideoV1SubscribeRules
  - name: VideoV1SubscribedTrack
x-maturity:
  - name: GA
    description: This product is Generally Available.
---