---
aid: box
name: Box
description: >-
  Box, Inc. (formerly Box.net) is a public company based in Redwood City,
  California. It develops and markets cloud-based content management,
  collaboration, and file sharing tools for businesses. Box was founded in 2005
  by Aaron Levie and Dylan Smith. Initially, it focused on consumers, but around
  2009 and 2010 Box pivoted to focus on business users. The company raised about
  $500 million over numerous funding rounds, before going public in 2015. Its
  software allows users to store and manage files in an online folder system
  accessible from any device. Users can then comment on the files, share them,
  apply workflows, and implement security and governance policies.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/box.yml
created: 2023/11/09
modified: 2023/11/09
specificationVersion: '0.16'
tags: []
apis:
  - aid: box:box-authorize-api
    name: Box Authorize API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Authorize API
          paths:
            /authorize:
              get:
                summary: Authorize user
                description: >-
                  Authorize a user by sending them through the
                  [Box](https://box.com)

                  website and request their permission to act on their behalf.


                  This is the first step when authenticating a user using

                  OAuth 2.0. To request a user's authorization to use the Box
                  APIs

                  on their behalf you will need to send a user to the URL with
                  this

                  format.
                tags:
                  - Authorize
                  - User
                  - Authori
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-error
              message: JSON Media Type GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-error
              message: JSON Media Type Default
            - code: openapi-response-get-default-schema-components-warn
              message: Default Response Schema Components
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
    overlays:
      - type: APIs.io Search
        url: overlays/authorize-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/authorize-openapi-api-evangelist-ratings.yml
  - aid: box:box-oauth2-api
    name: Box Oauth2 API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Oauth2 API
          paths:
            /oauth2/token:
              post:
                summary: Request access token
                description: >-
                  Request an Access Token using either a client-side obtained
                  OAuth 2.0

                  authorization code or a server-side JWT assertion.


                  An Access Token is a string that enables Box to verify that a

                  request belongs to an authorized session. In the normal order
                  of

                  operations you will begin by requesting authentication from
                  the

                  [authorize](#get-authorize) endpoint and Box will send you an

                  authorization code.


                  You will then send this code to this endpoint to exchange it
                  for

                  an Access Token. The returned Access Token can then be used to
                  to make

                  Box API calls.
                tags:
                  - Request
                  - Access
                  - Token
                  - Oauth2
                  - Token
            /oauth2/token#refresh:
              post:
                summary: Refresh access token
                description: >-
                  Refresh an Access Token using its client ID, secret, and
                  refresh token.
                tags:
                  - Refresh
                  - Access
                  - Token
                  - Oauth2
                  - Token
                  - Token#refresh
            /oauth2/revoke:
              post:
                summary: Revoke access token
                description: |-
                  Revoke an active Access Token, effectively logging a user out
                  that has been previously authenticated.
                tags:
                  - Revoke
                  - Access
                  - Token
                  - Oauth2
                  - Token
                  - Token#refresh
                  - Revo
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: >-
                openapi-request-body-have-application-x-www-form-url-encoded-info
              message: Request Body Application X WWW Form URL Encoded
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: invalid-ref
              message: '''#/components/schemas/PostOAuth2Token'' does not exist'
            - code: openapi-request-body-schema-ref-info
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
    overlays:
      - type: APIs.io Search
        url: overlays/oauth2-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/oauth2-openapi-api-evangelist-ratings.yml
  - aid: box:box-files-api
    name: Box Files API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Files API
          paths:
            /files/{file_id}:
              get:
                summary: Get file information
                tags:
                  - Get
                  - File
                  - Information
                  - Files
                  - File_id
                description: Retrieves the details about a file.
              post:
                summary: Restore file
                tags:
                  - Restore
                  - File
                  - Files
                  - File_id
                description: >-
                  Restores a file that has been moved to the trash.


                  An optional new parent ID can be provided to restore the file
                  to in case the

                  original folder has been deleted.
              put:
                summary: Update file
                tags:
                  - Update
                  - File
                  - Files
                  - File_id
                description: |-
                  Updates a file. This can be used to rename or move a file,
                  create a shared link, or lock a file.
              delete:
                summary: Delete file
                tags:
                  - Delete
                  - File
                  - Files
                  - File_id
                description: |-
                  Deletes a file, either permanently or by moving it to
                  the trash.

                  The the enterprise settings determine whether the item will
                  be permanently deleted from Box or moved to the trash.
            /files/{file_id}/content:
              get:
                summary: Download file
                tags:
                  - Download
                  - File
                  - Files
                  - File_id
                  - Content
                description: Returns the contents of a file in binary format.
              post:
                tags:
                  - Upload
                  - File
                  - Version
                  - Files
                  - File_id
                  - Content
                summary: Upload file version
                description: |-
                  Update a file's content. For file sizes over 50MB we recommend
                  using the Chunk Upload APIs.

                  # Request body order

                  The `attributes` part of the body must come **before** the
                  `file` part. Requests that do not follow this format when
                  uploading the file will receive a HTTP `400` error with a
                  `metadata_after_file_contents` error code.
            /files/content:
              options:
                summary: Preflight check before upload
                tags:
                  - Preflight
                  - Check
                  - Before
                  - Upload
                  - Files
                  - File_id
                  - Content
                description: |-
                  Performs a check to verify that a file will be accepted by Box
                  before you upload the entire file.
              post:
                tags:
                  - Upload
                  - File
                  - Files
                  - File_id
                  - Content
                summary: Upload file
                description: >-
                  Uploads a small file to Box. For file sizes over 50MB we
                  recommend

                  using the Chunk Upload APIs.


                  # Request body order


                  The `attributes` part of the body must come **before** the

                  `file` part. Requests that do not follow this format when

                  uploading the file will receive a HTTP `400` error with a

                  `metadata_after_file_contents` error code.
            /files/upload_sessions:
              post:
                summary: Create upload session
                tags:
                  - Create
                  - Upload
                  - Session
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                description: Creates an upload session for a new file.
            /files/{file_id}/upload_sessions:
              post:
                summary: Create upload session for existing file
                tags:
                  - Create
                  - Upload
                  - Session
                  - For
                  - Existing
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                description: Creates an upload session for an existing file.
            /files/upload_sessions/{upload_session_id}:
              get:
                summary: Get upload session
                tags:
                  - Get
                  - Upload
                  - Session
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                description: Return information about an upload session.
              put:
                summary: Upload part of file
                tags:
                  - Upload
                  - Part
                  - Of
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                description: Updates a chunk of an upload session for a file.
              delete:
                summary: Remove upload session
                tags:
                  - Remove
                  - Upload
                  - Session
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                description: |-
                  Abort an upload session and discard all data uploaded.

                  This cannot be reversed.
            /files/upload_sessions/{upload_session_id}/parts:
              get:
                summary: List parts
                tags:
                  - List
                  - Parts
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                description: |-
                  Return a list of the chunks uploaded to the upload
                  session so far.
            /files/upload_sessions/{upload_session_id}/commit:
              post:
                summary: Commit upload session
                tags:
                  - Commit
                  - Upload
                  - Session
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                description: |-
                  Close an upload session and create a file from the
                  uploaded chunks.
            /files/{file_id}/copy:
              post:
                summary: Copy file
                description: Creates a copy of a file.
                tags:
                  - Copy
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
            /files/{file_id}/thumbnail.{extension}:
              get:
                summary: Get file thumbnail
                description: >-
                  Retrieves a thumbnail, or smaller image representation, of a
                  file.


                  Sizes of `32x32`,`64x64`, `128x128`, and `256x256` can be
                  returned in

                  the `.png` format and sizes of `32x32`, `160x160`, and
                  `320x320`

                  can be returned in the `.jpg` format.


                  Thumbnails can be generated for the image and video file
                  formats listed

                  [found on our community site][1].


                  [1]:
                  https://community.box.com/t5/Migrating-and-Previewing-Content/File-Types-and-Fonts-Supported-in-Box-Content-Preview/ta-p/327
                tags:
                  - Get
                  - File
                  - Thumbnail
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
            /files/{file_id}/collaborations:
              get:
                summary: List file collaborations
                description: |-
                  Retrieves a list of pending and active collaborations for a
                  file. This returns all the users that have access to the file
                  or have been invited to the file.
                tags:
                  - List
                  - File
                  - Collaborations
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
            /files/{file_id}/comments:
              get:
                summary: List file comments
                description: Retrieves a list of comments for a file.
                tags:
                  - List
                  - File
                  - Comments
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
            /files/{file_id}/tasks:
              get:
                summary: List tasks on file
                description: |-
                  Retrieves a list of all the tasks for a file. This
                  endpoint does not support pagination.
                tags:
                  - List
                  - Tasks
                  - 'On'
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
            /files/{file_id}/trash:
              get:
                summary: Get trashed file
                tags:
                  - Get
                  - Trashed
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                description: >-
                  Retrieves a file that has been moved to the trash.


                  Please note that only if the file itself has been moved to the

                  trash can it be retrieved with this API call. If instead one
                  of

                  its parent folders was moved to the trash, only that folder

                  can be inspected using the

                  [`GET /folders/:id/trash`](e://get_folders_id_trash) API.


                  To list all items that have been moved to the trash, please

                  use the [`GET
                  /folders/trash/items`](e://get-folders-trash-items/)

                  API.
              delete:
                summary: Permanently remove file
                tags:
                  - Permanently
                  - Remove
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                description: |-
                  Permanently deletes a file that is in the trash.
                  This action cannot be undone.
            /files/{file_id}/versions:
              get:
                summary: List all file versions
                tags:
                  - List
                  - All
                  - File
                  - Versions
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                description: >-
                  Retrieve a list of the past versions for a file.


                  Versions are only tracked by Box users with premium accounts.
                  To fetch the ID

                  of the current version of a file, use the `GET /file/:id` API.
            /files/{file_id}/versions/{file_version_id}:
              get:
                summary: Get file version
                tags:
                  - Get
                  - File
                  - Version
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                description: |-
                  Retrieve a specific version of a file.

                  Versions are only tracked for Box users with premium accounts.
              delete:
                summary: Remove file version
                tags:
                  - Remove
                  - File
                  - Version
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                description: |-
                  Move a file version to the trash.

                  Versions are only tracked for Box users with premium accounts.
              put:
                summary: Restore file version
                tags:
                  - Restore
                  - File
                  - Version
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                description: |-
                  Restores a specific version of a file after it was deleted.
                  Don't use this endpoint to restore Box Notes,
                  as it works with file formats such as PDF, DOC,
                  PPTX or similar.
            /files/{file_id}/versions/current:
              post:
                summary: Promote file version
                tags:
                  - Promote
                  - File
                  - Version
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                description: >-
                  Promote a specific version of a file.


                  If previous versions exist, this method can be used to

                  promote one of the older versions to the top of the version
                  history.


                  This creates a new copy of the old version and puts it at the

                  top of the versions history. The file will have the exact same
                  contents

                  as the older version, with the the same hash digest, `etag`,
                  and

                  name as the original.


                  Other properties such as comments do not get updated to their

                  former values.


                  Don't use this endpoint to restore Box Notes,

                  as it works with file formats such as PDF, DOC,

                  PPTX or similar.
            /files/{file_id}/metadata:
              get:
                summary: List metadata instances on file
                tags:
                  - List
                  - Metadata
                  - Instances
                  - 'On'
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                description: Retrieves all metadata for a given file.
            /files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo:
              get:
                summary: Get classification on file
                tags:
                  - Get
                  - Classification
                  - 'On'
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                description: >-
                  Retrieves the classification metadata instance that

                  has been applied to a file.


                  This API can also be called by including the enterprise ID in
                  the

                  URL explicitly, for example

                  `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
              post:
                summary: Add classification to file
                tags:
                  - Add
                  - Classification
                  - To
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                description: >-
                  Adds a classification to a file by specifying the label of the

                  classification to add.


                  This API can also be called by including the enterprise ID in
                  the

                  URL explicitly, for example

                  `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
              put:
                summary: Update classification on file
                tags:
                  - Update
                  - Classification
                  - 'On'
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                description: >-
                  Updates a classification on a file.


                  The classification can only be updated if a classification has
                  already been

                  applied to the file before. When editing classifications, only
                  values are

                  defined for the enterprise will be accepted.
              delete:
                summary: Remove classification from file
                tags:
                  - Remove
                  - Classification
                  - From
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                description: >-
                  Removes any classifications from a file.


                  This API can also be called by including the enterprise ID in
                  the

                  URL explicitly, for example

                  `/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
            /files/{file_id}/metadata/{scope}/{template_key}:
              get:
                summary: Get metadata instance on file
                tags:
                  - Get
                  - Metadata
                  - Instance
                  - 'On'
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                description: >-
                  Retrieves the instance of a metadata template that has been
                  applied to a

                  file.
              post:
                summary: Create metadata instance on file
                tags:
                  - Create
                  - Metadata
                  - Instance
                  - 'On'
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                description: >-
                  Applies an instance of a metadata template to a file.


                  In most cases only values that are present in the metadata
                  template

                  will be accepted, except for the `global.properties` template
                  which accepts

                  any key-value pair.
              put:
                summary: Update metadata instance on file
                tags:
                  - Update
                  - Metadata
                  - Instance
                  - 'On'
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                description: >-
                  Updates a piece of metadata on a file.


                  The metadata instance can only be updated if the template has
                  already been

                  applied to the file before. When editing metadata, only values
                  that match

                  the metadata template schema will be accepted.


                  The update is applied atomically. If any errors occur during
                  the

                  application of the operations, the metadata instance will not
                  be changed.
              delete:
                summary: Remove metadata instance from file
                tags:
                  - Remove
                  - Metadata
                  - Instance
                  - From
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                description: Deletes a piece of file metadata.
            /files/{file_id}/metadata/global/boxSkillsCards:
              get:
                summary: List Box Skill cards on file
                tags:
                  - List
                  - Box
                  - Skill
                  - Cards
                  - 'On'
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Skills
                  - Cards
                description: >-
                  List the Box Skills metadata cards that are attached to a
                  file.
              post:
                summary: Create Box Skill cards on file
                tags:
                  - Create
                  - Box
                  - Skill
                  - Cards
                  - 'On'
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Skills
                  - Cards
                description: Applies one or more Box Skills metadata cards to a file.
              put:
                summary: Update Box Skill cards on file
                tags:
                  - Update
                  - Box
                  - Skill
                  - Cards
                  - 'On'
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Skills
                  - Cards
                description: Updates one or more Box Skills metadata cards to a file.
              delete:
                summary: Remove Box Skill cards from file
                tags:
                  - Remove
                  - Box
                  - Skill
                  - Cards
                  - From
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Skills
                  - Cards
                description: Removes any Box Skills cards metadata from a file.
            /files/{file_id}/watermark:
              get:
                summary: Get watermark on file
                tags:
                  - Get
                  - Watermark
                  - 'On'
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Skills
                  - Cards
                  - Watermark
                description: Retrieve the watermark for a file.
              put:
                summary: Apply watermark to file
                tags:
                  - Apply
                  - Watermark
                  - To
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Skills
                  - Cards
                  - Watermark
                description: Applies or update a watermark on a file.
              delete:
                summary: Remove watermark from file
                tags:
                  - Remove
                  - Watermark
                  - From
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Skills
                  - Cards
                  - Watermark
                description: Removes the watermark from a file.
            /files/{file_id}#get_shared_link:
              get:
                summary: Get shared link for file
                tags:
                  - Get
                  - Shared
                  - Link
                  - For
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Skills
                  - Cards
                  - Watermark
                  - '#get_shared_link'
                description: Gets the information for a shared link on a file.
            /files/{file_id}#add_shared_link:
              put:
                summary: Add shared link to file
                tags:
                  - Add
                  - Shared
                  - Link
                  - To
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Skills
                  - Cards
                  - Watermark
                  - '#get_shared_link'
                  - '#add_shared_link'
                description: Adds a shared link to a file.
            /files/{file_id}#update_shared_link:
              put:
                summary: Update shared link on file
                tags:
                  - Update
                  - Shared
                  - Link
                  - 'On'
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Skills
                  - Cards
                  - Watermark
                  - '#get_shared_link'
                  - '#add_shared_link'
                  - '#update_shared_link'
                description: Updates a shared link on a file.
            /files/{file_id}#remove_shared_link:
              put:
                summary: Remove shared link from file
                tags:
                  - Remove
                  - Shared
                  - Link
                  - From
                  - File
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Skills
                  - Cards
                  - Watermark
                  - '#get_shared_link'
                  - '#add_shared_link'
                  - '#update_shared_link'
                  - '#remove_shared_link'
                description: Removes a shared link from a file.
            /retention_policy_assignments/{retention_policy_assignment_id}/files_under_retention:
              get:
                summary: Get files under retention
                tags:
                  - Get
                  - Files
                  - Under
                  - Retention
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Skills
                  - Cards
                  - Watermark
                  - '#get_shared_link'
                  - '#add_shared_link'
                  - '#update_shared_link'
                  - '#remove_shared_link'
                  - Retention_policy_assignments
                  - Retention_policy_assignment_id
                  - Files_under_retention
                description: >-
                  Returns a list of files under retention for a retention policy
                  assignment.
            /legal_hold_policy_assignments/{legal_hold_policy_assignment_id}/files_on_hold:
              get:
                summary: List current file versions for legal hold policy assignment
                tags:
                  - List
                  - Current
                  - File
                  - Versions
                  - For
                  - Legal
                  - Hold
                  - Policy
                  - Assignment
                  - Files
                  - File_id
                  - Content
                  - Upload_sessions
                  - Upload_session_id
                  - Parts
                  - Commit
                  - Copy
                  - Thumbnail.
                  - Extension
                  - Collaborations
                  - Comments
                  - Tasks
                  - Trash
                  - Versions
                  - File_version_id
                  - Current
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Skills
                  - Cards
                  - Watermark
                  - '#get_shared_link'
                  - '#add_shared_link'
                  - '#update_shared_link'
                  - '#remove_shared_link'
                  - Retention_policy_assignments
                  - Retention_policy_assignment_id
                  - Files_under_retention
                  - Legal_hold_policy_assignments
                  - Legal_hold_policy_assignment_id
                  - Files_on_hold
                description: >-
                  Get a list of current file versions for a legal hold

                  assignment.


                  In some cases you may want to get previous file versions
                  instead. In these

                  cases, use the `GET 
                  /legal_hold_policy_assignments/:id/file_versions_on_hold`

                  API instead to return any previous versions of a file for this
                  legal hold

                  policy assignment.


                  Due to ongoing re-architecture efforts this API might not
                  return all file

                  versions held for this policy ID. Instead, this API will only
                  return the

                  latest file version held in the newly developed architecture.
                  The `GET

                  /file_version_legal_holds` API can be used to fetch current
                  and past versions

                  of files held within the legacy architecture.


                  The `GET /legal_hold_policy_assignments?policy_id={id}` API
                  can be used to

                  find a list of policy assignments for a give
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: invalid-ref
              message: '''#/components/schemas/TrashFileRestored'' does not exist'
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-200-media-type-error
              message: JSON Media Type GET
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-error
              message: A GET operation should have a 200 status code for the response.
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-response-put-500-status-code-info
              message: 500 Status Code for PUT Responses
            - code: openapi-response-delete-400-status-code-info
              message: 400 Status Code for DELETE Responses
            - code: openapi-request-body-schema-properties-nullable-info
              message: Request Body Schema Properties Nullable
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
    overlays:
      - type: APIs.io Search
        url: overlays/files-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/files-openapi-api-evangelist-ratings.yml
  - aid: box:box-file-requests-api
    name: Box File Requests API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box File Requests API
          paths:
            /file_requests/{file_request_id}:
              get:
                summary: Get file request
                tags:
                  - Get
                  - File
                  - Request
                  - File_requests
                  - File_request_id
                description: Retrieves the information about a file request.
              put:
                summary: Update file request
                tags:
                  - Update
                  - File
                  - Request
                  - File_requests
                  - File_request_id
                description: |-
                  Updates a file request. This can be used to activate or
                  deactivate a file request.
              delete:
                summary: Delete file request
                tags:
                  - Delete
                  - File
                  - Request
                  - File_requests
                  - File_request_id
                description: Deletes a file request permanently.
            /file_requests/{file_request_id}/copy:
              post:
                summary: Copy file request
                tags:
                  - Copy
                  - File
                  - Request
                  - File_requests
                  - File_request_id
                  - Copy
                description: >-
                  Copies an existing file request that is already present on one
                  folder,

                  and applies it to ano
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: invalid-ref
              message: '''#/components/schemas/FileRequestUpdateRequest'' does not exist'
            - code: openapi-request-body-schema-ref-info
              message: Request Body Schema Ref
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
    overlays:
      - type: APIs.io Search
        url: overlays/file-requests-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/file-requests-openapi-api-evangelist-ratings.yml
  - aid: box:box-folders-api
    name: Box Folders API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Folders API
          paths:
            /folders/{folder_id}:
              get:
                summary: Get folder information
                tags:
                  - Get
                  - Folder
                  - Information
                  - Folders
                  - Folder_id
                description: >-
                  Retrieves details for a folder, including the first 100
                  entries

                  in the folder.


                  Passing `sort`, `direction`, `offset`, and `limit`

                  parameters in query allows you to manage the

                  list of returned

                  [folder items](r://folder--full#param-item-collection).


                  To fetch more items within the folder, use the

                  [Get items in a folder](e://get-folders-id-items) endpoint.
              post:
                summary: Restore folder
                tags:
                  - Restore
                  - Folder
                  - Folders
                  - Folder_id
                description: >-
                  Restores a folder that has been moved to the trash.


                  An optional new parent ID can be provided to restore the
                  folder to in case the

                  original folder has been deleted.


                  # Folder locking


                  During this operation, part of the file tree will be locked,
                  mainly

                  the source folder and all of its descendants, as well as the
                  destination

                  folder.


                  For the duration of the operation, no other move, copy,
                  delete, or restore

                  operation can performed on any of the locked folders.
              put:
                summary: Update folder
                description: |-
                  Updates a folder. This can be also be used to move the folder,
                  create shared links, update collaborations, and more.
                tags:
                  - Update
                  - Folder
                  - Folders
                  - Folder_id
              delete:
                summary: Delete folder
                description: |-
                  Deletes a folder, either permanently or by moving it to
                  the trash.
                tags:
                  - Delete
                  - Folder
                  - Folders
                  - Folder_id
            /folders/{folder_id}/items:
              get:
                summary: List items in folder
                tags:
                  - List
                  - Items
                  - In
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                description: >-
                  Retrieves a page of items in a folder. These items can be
                  files,

                  folders, and web links.


                  To request more information about the folder itself, like its
                  size,

                  use the [Get a folder](#get-folders-id) endpoint instead.
            /folders:
              post:
                summary: Create folder
                tags:
                  - Create
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                description: Creates a new empty folder within the specified parent folder.
            /folders/{folder_id}/copy:
              post:
                summary: Copy folder
                description: |-
                  Creates a copy of a folder within a destination folder.

                  The original folder will not be changed.
                tags:
                  - Copy
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
            /folders/{folder_id}/collaborations:
              get:
                summary: List folder collaborations
                description: >-
                  Retrieves a list of pending and active collaborations for a

                  folder. This returns all the users that have access to the
                  folder

                  or have been invited to the folder.
                tags:
                  - List
                  - Folder
                  - Collaborations
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
            /folders/{folder_id}/trash:
              get:
                summary: Get trashed folder
                tags:
                  - Get
                  - Trashed
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                description: >-
                  Retrieves a folder that has been moved to the trash.


                  Please note that only if the folder itself has been moved to
                  the

                  trash can it be retrieved with this API call. If instead one
                  of

                  its parent folders was moved to the trash, only that folder

                  can be inspected using the

                  [`GET /folders/:id/trash`](e://get_folders_id_trash) API.


                  To list all items that have been moved to the trash, please

                  use the [`GET
                  /folders/trash/items`](e://get-folders-trash-items/)

                  API.
              delete:
                summary: Permanently remove folder
                tags:
                  - Permanently
                  - Remove
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                description: |-
                  Permanently deletes a folder that is in the trash.
                  This action cannot be undone.
            /folders/{folder_id}/metadata:
              get:
                summary: List metadata instances on folder
                tags:
                  - List
                  - Metadata
                  - Instances
                  - 'On'
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                description: >-
                  Retrieves all metadata for a given folder. This can not be
                  used on the root

                  folder with ID `0`.
            /folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo:
              get:
                summary: Get classification on folder
                tags:
                  - Get
                  - Classification
                  - 'On'
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                description: >-
                  Retrieves the classification metadata instance that

                  has been applied to a folder.


                  This API can also be called by including the enterprise ID in
                  the

                  URL explicitly, for example

                  `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
              post:
                summary: Add classification to folder
                tags:
                  - Add
                  - Classification
                  - To
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                description: >-
                  Adds a classification to a folder by specifying the label of
                  the

                  classification to add.


                  This API can also be called by including the enterprise ID in
                  the

                  URL explicitly, for example

                  `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
              put:
                summary: Update classification on folder
                tags:
                  - Update
                  - Classification
                  - 'On'
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                description: >-
                  Updates a classification on a folder.


                  The classification can only be updated if a classification has
                  already been

                  applied to the folder before. When editing classifications,
                  only values are

                  defined for the enterprise will be accepted.
              delete:
                summary: Remove classification from folder
                tags:
                  - Remove
                  - Classification
                  - From
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                description: >-
                  Removes any classifications from a folder.


                  This API can also be called by including the enterprise ID in
                  the

                  URL explicitly, for example

                  `/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.
            /folders/{folder_id}/metadata/{scope}/{template_key}:
              get:
                summary: Get metadata instance on folder
                tags:
                  - Get
                  - Metadata
                  - Instance
                  - 'On'
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                description: >-
                  Retrieves the instance of a metadata template that has been
                  applied to a

                  folder. This can not be used on the root folder with ID `0`.
              post:
                summary: Create metadata instance on folder
                tags:
                  - Create
                  - Metadata
                  - Instance
                  - 'On'
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                description: >-
                  Applies an instance of a metadata template to a folder.


                  In most cases only values that are present in the metadata
                  template

                  will be accepted, except for the `global.properties` template
                  which accepts

                  any key-value pair.


                  To display the metadata template in the Box web app the
                  enterprise needs to be

                  configured to enable **Cascading Folder Level Metadata** for
                  the user in the

                  admin console.
              put:
                summary: Update metadata instance on folder
                tags:
                  - Update
                  - Metadata
                  - Instance
                  - 'On'
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                description: >-
                  Updates a piece of metadata on a folder.


                  The metadata instance can only be updated if the template has
                  already been

                  applied to the folder before. When editing metadata, only
                  values that match

                  the metadata template schema will be accepted.


                  The update is applied atomically. If any errors occur during
                  the

                  application of the operations, the metadata instance will not
                  be changed.
              delete:
                summary: Remove metadata instance from folder
                tags:
                  - Remove
                  - Metadata
                  - Instance
                  - From
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                description: Deletes a piece of folder metadata.
            /folders/trash/items:
              get:
                summary: List trashed items
                tags:
                  - List
                  - Trashed
                  - Items
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                description: >-
                  Retrieves the files and folders that have been moved

                  to the trash.


                  Any attribute in the full files or folders objects can be
                  passed

                  in with the `fields` parameter to retrieve those specific

                  attributes that are not returned by default.


                  This endpoint defaults to use offset-based pagination, yet
                  also supports

                  marker-based pagination using the `marker` parameter.
            /folders/{folder_id}/watermark:
              get:
                summary: Get watermark for folder
                tags:
                  - Get
                  - Watermark
                  - For
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Watermark
                description: Retrieve the watermark for a folder.
              put:
                summary: Apply watermark to folder
                tags:
                  - Apply
                  - Watermark
                  - To
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Watermark
                description: Applies or update a watermark on a folder.
              delete:
                summary: Remove watermark from folder
                tags:
                  - Remove
                  - Watermark
                  - From
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Watermark
                description: Removes the watermark from a folder.
            /folders/{folder_id}#get_shared_link:
              get:
                summary: Get shared link for folder
                tags:
                  - Get
                  - Shared
                  - Link
                  - For
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Watermark
                  - '#get_shared_link'
                description: Gets the information for a shared link on a folder.
            /folders/{folder_id}#add_shared_link:
              put:
                summary: Add shared link to folder
                tags:
                  - Add
                  - Shared
                  - Link
                  - To
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Watermark
                  - '#get_shared_link'
                  - '#add_shared_link'
                description: Adds a shared link to a folder.
            /folders/{folder_id}#update_shared_link:
              put:
                summary: Update shared link on folder
                tags:
                  - Update
                  - Shared
                  - Link
                  - 'On'
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Watermark
                  - '#get_shared_link'
                  - '#add_shared_link'
                  - '#update_shared_link'
                description: Updates a shared link on a folder.
            /folders/{folder_id}#remove_shared_link:
              put:
                summary: Remove shared link from folder
                tags:
                  - Remove
                  - Shared
                  - Link
                  - From
                  - Folder
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Watermark
                  - '#get_shared_link'
                  - '#add_shared_link'
                  - '#update_shared_link'
                  - '#remove_shared_link'
                description: Removes a shared link from a folder.
            /users/{user_id}/folders/0:
              put:
                summary: Transfer owned folders
                tags:
                  - Transfer
                  - Owned
                  - Folders
                  - Folders
                  - Folder_id
                  - Items
                  - Copy
                  - Collaborations
                  - Trash
                  - Metadata
                  - Classification
                  - Vochw
                  - Wo
                  - Scope
                  - Template_key
                  - Watermark
                  - '#get_shared_link'
                  - '#add_shared_link'
                  - '#update_shared_link'
                  - '#remove_shared_link'
                  - Users
                  - User_id
                description: >-
                  Move all of the items (files, folders and workflows) owned by
                  a user into

                  another user's account


                  Only the root folder (`0`) can be transferred.


                  Folders can only be moved across users by users with
                  administrative

                  permissions.


                  All existing shared links and folder-level collaborations are
                  transferred

                  during the operation. Please note that while collaborations at
                  the individual

                  file-level are transferred during the operation, the
                  collaborations are

                  deleted when the original user is deleted.


                  This call will be performed synchronously which might lead to
                  a slow response

                  when the source user has a large number of items in all of its
                  folders.


                  If the destination path has a metadata cascade policy attached
                  to any of

                  the parent folders, a metadata cascade operation will be
                  kicked off

                  asynchronously.


                  There is currently no way to check for when this operation is
                  finished.


                  The destination folder's name will be in the format `{User}'s
                  Files and

                  Folders`, where `{User}` is the display name of the user.


                  To make this API call your application will need to have the
                  "Read and write

                  all files and folders stored in Box" scope enabled.


                  Please make sure the destination user has access to `Relay` or
                  `Relay Lite`,

                  and has access to the files and folders involved in the
                  workflows being

                  transferred.


                  Admins will receive an email when the operation i
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: invalid-ref
              message: '''#/components/schemas/TrashFolderRestored'' does not exist'
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-400-status-code-info
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-get-200-status-code-error
              message: A GET operation should have a 200 status code for the response.
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-info
              message: 500 Status Code for PUT Responses
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-request-body-schema-properties-nullable-info
              message: Request Body Schema Properties Nullable
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
    overlays:
      - type: APIs.io Search
        url: overlays/folders-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/folders-openapi-api-evangelist-ratings.yml
  - aid: box:box-folder-locks-api
    name: Box Folder Locks API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Folder Locks API
          paths:
            /folder_locks:
              get:
                summary: List folder locks
                tags:
                  - List
                  - Folder
                  - Locks
                  - Folder_locks
                description: >-
                  Retrieves folder lock details for a given folder.


                  You must be authenticated as the owner or co-owner of the
                  folder to

                  use this endpoint.
              post:
                summary: Create folder lock
                tags:
                  - Create
                  - Folder
                  - Lock
                  - Folder_locks
                description: >-
                  Creates a folder lock on a folder, preventing it from being
                  moved and/or

                  deleted.


                  You must be authenticated as the owner or co-owner of the
                  folder to

                  use this endpoint.
            /folder_locks/{folder_lock_id}:
              delete:
                summary: Delete folder lock
                description: >-
                  Deletes a folder lock on a given folder.


                  You must be authenticated as the owner or co-owner of the
                  folder to

                  use this endpoint.
                tags:
                  - Delete
                  - Folder
                  - Lock
                  - Folder_locks
                  - Folder_lock_
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: invalid-ref
              message: '''#/components/schemas/Folder--Mini'' does not exist'
    overlays:
      - type: APIs.io Search
        url: overlays/folder-locks-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/folder-locks-openapi-api-evangelist-ratings.yml
  - aid: box:box-metadata-templates-api
    name: Box Metadata Templates API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Metadata Templates API
          paths:
            /metadata_templates:
              get:
                summary: Find metadata template by instance ID
                tags:
                  - Find
                  - Metadata
                  - Template
                  - By
                  - Instance
                  - Metadata_templates
                description: >-
                  Finds a metadata template by searching for the ID of an
                  instance of the

                  template.
            /metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema:
              get:
                summary: List all classifications
                tags:
                  - List
                  - All
                  - Classifications
                  - Metadata_templates
                  - Classification
                  - Vochw
                  - Wo
                  - Schema
                description: >-
                  Retrieves the classification metadata template and lists all
                  the

                  classifications available to this enterprise.


                  This API can also be called by including the enterprise ID in
                  the

                  URL explicitly, for example

                  `/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.
            /metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#add:
              put:
                summary: Add classification
                tags:
                  - Add
                  - Classification
                  - Metadata_templates
                  - Classification
                  - Vochw
                  - Wo
                  - Schema
                  - Schema#add
                description: >-
                  Adds one or more new classifications to the list of
                  classifications

                  available to the enterprise.


                  This API can also be called by including the enterprise ID in
                  the

                  URL explicitly, for example

                  `/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.
            /metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#update:
              put:
                summary: Update classification
                tags:
                  - Update
                  - Classification
                  - Metadata_templates
                  - Classification
                  - Vochw
                  - Wo
                  - Schema
                  - Schema#add
                  - Schema#update
                description: >-
                  Updates the labels and descriptions of one or more
                  classifications

                  available to the enterprise.


                  This API can also be called by including the enterprise ID in
                  the

                  URL explicitly, for example

                  `/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.
            /metadata_templates/{scope}/{template_key}/schema:
              get:
                summary: Get metadata template by name
                tags:
                  - Get
                  - Metadata
                  - Template
                  - By
                  - Name
                  - Metadata_templates
                  - Classification
                  - Vochw
                  - Wo
                  - Schema
                  - Schema#add
                  - Schema#update
                  - Scope
                  - Template_key
                description: >-
                  Retrieves a metadata template by its `scope` and `templateKey`
                  values.


                  To find the `scope` and `templateKey` for a template, list all
                  templates for

                  an enterprise or globally, or list all templates applied to a
                  file or folder.
              put:
                tags:
                  - Update
                  - Metadata
                  - Template
                  - Metadata_templates
                  - Classification
                  - Vochw
                  - Wo
                  - Schema
                  - Schema#add
                  - Schema#update
                  - Scope
                  - Template_key
                summary: Update metadata template
                description: >-
                  Updates a metadata template.


                  The metadata template can only be updated if the template

                  already exists.


                  The update is applied atomically. If any errors occur during
                  the

                  application of the operations, the metadata template will not
                  be changed.
              delete:
                summary: Remove metadata template
                tags:
                  - Remove
                  - Metadata
                  - Template
                  - Metadata_templates
                  - Classification
                  - Vochw
                  - Wo
                  - Schema
                  - Schema#add
                  - Schema#update
                  - Scope
                  - Template_key
                description: |-
                  Delete a metadata template and its instances.
                  This deletion is permanent and can not be reversed.
            /metadata_templates/{template_id}:
              get:
                summary: Get metadata template by ID
                tags:
                  - Get
                  - Metadata
                  - Template
                  - By
                  - Metadata_templates
                  - Classification
                  - Vochw
                  - Wo
                  - Schema
                  - Schema#add
                  - Schema#update
                  - Scope
                  - Template_key
                  - Template_id
                description: Retrieves a metadata template by its ID.
            /metadata_templates/global:
              get:
                summary: List all global metadata templates
                tags:
                  - List
                  - All
                  - Global
                  - Metadata
                  - Templates
                  - Metadata_templates
                  - Classification
                  - Vochw
                  - Wo
                  - Schema
                  - Schema#add
                  - Schema#update
                  - Scope
                  - Template_key
                  - Template_id
                  - Global
                description: >-
                  Used to retrieve all generic, global metadata templates
                  available to all

                  enterprises using Box.
            /metadata_templates/enterprise:
              get:
                summary: List all metadata templates for enterprise
                tags:
                  - List
                  - All
                  - Metadata
                  - Templates
                  - For
                  - Enterprise
                  - Metadata_templates
                  - Classification
                  - Vochw
                  - Wo
                  - Schema
                  - Schema#add
                  - Schema#update
                  - Scope
                  - Template_key
                  - Template_id
                  - Global
                  - Enterprise
                description: >-
                  Used to retrieve all metadata templates created to be used
                  specifically within

                  the user's enterprise
            /metadata_templates/schema:
              post:
                summary: Create metadata template
                tags:
                  - Create
                  - Metadata
                  - Template
                  - Metadata_templates
                  - Classification
                  - Vochw
                  - Wo
                  - Schema
                  - Schema#add
                  - Schema#update
                  - Scope
                  - Template_key
                  - Template_id
                  - Global
                  - Enterprise
                description: |-
                  Creates a new metadata template that can be applied to
                  files and folders.
            /metadata_templates/schema#classifications:
              post:
                summary: Add initial classifications
                tags:
                  - Add
                  - Initial
                  - Classifications
                  - Metadata_templates
                  - Classification
                  - Vochw
                  - Wo
                  - Schema
                  - Schema#add
                  - Schema#update
                  - Scope
                  - Template_key
                  - Template_id
                  - Global
                  - Enterprise
                  - Schema#classifications
                description: >-
                  When an enterprise does not yet have any classifications, this
                  API call

                  initializes the classification template with an initial set of

                  classifications.


                  If an enterprise already has a classification, the template
                  will already

                  exist and instead an API call should be made to add additional

                  clas
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-400-status-code-info
              message: 400 Status Code for DELETE Responses
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
    overlays:
      - type: APIs.io Search
        url: overlays/metadata-templates-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/metadata-templates-openapi-api-evangelist-ratings.yml
  - aid: box:box-metadata-cascade-policies-api
    name: Box Metadata Cascade Policies API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Metadata Cascade Policies API
          paths:
            /metadata_cascade_policies:
              get:
                summary: List metadata cascade policies
                tags:
                  - List
                  - Metadata
                  - Cascade
                  - Policies
                  - Metadata_cascade_policies
                description: >-
                  Retrieves a list of all the metadata cascade policies

                  that are applied to a given folder. This can not be used on
                  the root

                  folder with ID `0`.
              post:
                summary: Create metadata cascade policy
                tags:
                  - Create
                  - Metadata
                  - Cascade
                  - Policy
                  - Metadata_cascade_policies
                description: >-
                  Creates a new metadata cascade policy that applies a given

                  metadata template to a given folder and automatically

                  cascades it down to any files within that folder.


                  In order for the policy to be applied a metadata instance must
                  first

                  be applied to the folder the policy is to be applied to.
            /metadata_cascade_policies/{metadata_cascade_policy_id}:
              get:
                summary: Get metadata cascade policy
                tags:
                  - Get
                  - Metadata
                  - Cascade
                  - Policy
                  - Metadata_cascade_policies
                  - Metadata_cascade_policy_id
                description: >-
                  Retrieve a specific metadata cascade policy assigned to a
                  folder.
              delete:
                summary: Remove metadata cascade policy
                tags:
                  - Remove
                  - Metadata
                  - Cascade
                  - Policy
                  - Metadata_cascade_policies
                  - Metadata_cascade_policy_id
                description: Deletes a metadata cascade policy.
            /metadata_cascade_policies/{metadata_cascade_policy_id}/apply:
              post:
                summary: Force-apply metadata cascade policy to folder
                tags:
                  - Force-apply
                  - Metadata
                  - Cascade
                  - Policy
                  - To
                  - Folder
                  - Metadata_cascade_policies
                  - Metadata_cascade_policy_id
                  - Apply
                description: >-
                  Force the metadata on a folder with a metadata cascade policy
                  to be applied to

                  all of its children. This can be used after creating a new
                  cascade policy to

                  enforce the metadata to be cascaded down to all existing files
                  within 
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-names-snake-case-error
              message: Request Body Schema Property Names Snake Case
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: invalid-ref
              message: '''#/components/schemas/ConflictError'' does not exist'
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
    overlays:
      - type: APIs.io Search
        url: overlays/metadata-cascade-policies-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/metadata-cascade-policies-openapi-api-evangelist-ratings.yml
  - aid: box:box-metadata-queries-api
    name: Box Metadata Queries API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Metadata Queries API
          paths:
            /metadata_queries/execute_read:
              post:
                summary: Query files/folders by metadata
                tags:
                  - Query
                  - Files/folders
                  - By
                  - Metadata
                  - Metadata_queries
                  - Execute_read
                description: >-
                  Create a search using SQL-like syntax to return items that
                  match specific

                  metadata.


                  By default, this endpoint returns only the most basic info
                  about the items for

                  which the query matches. To get additional fields for each
                  item, including any

                  of the metadata, use the `fields` attribute i
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: invalid-ref
              message: '''#/components/schemas/MetadataQuery'' does not exist'
            - code: openapi-request-body-schema-ref-info
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/metadata-queries-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/metadata-queries-openapi-api-evangelist-ratings.yml
  - aid: box:box-comments-api
    name: Box Comments API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Comments API
          paths:
            /files/{file_id}/comments:
              get:
                summary: List file comments
                description: Retrieves a list of comments for a file.
                tags:
                  - List
                  - File
                  - Comments
                  - Files
                  - File_id
                  - Comments
            /comments/{comment_id}:
              get:
                summary: Get comment
                tags:
                  - Get
                  - Comment
                  - Files
                  - File_id
                  - Comments
                  - Comment_id
                description: >-
                  Retrieves the message and metadata for a specific comment, as
                  well

                  as information on the user who created the comment.
              put:
                summary: Update comment
                tags:
                  - Update
                  - Comment
                  - Files
                  - File_id
                  - Comments
                  - Comment_id
                description: Update the message of a comment.
              delete:
                summary: Remove comment
                tags:
                  - Remove
                  - Comment
                  - Files
                  - File_id
                  - Comments
                  - Comment_id
                description: Permanently deletes a comment.
            /comments:
              post:
                tags:
                  - Create
                  - Comment
                  - Files
                  - File_id
                  - Comments
                  - Comment_id
                summary: Create comment
                description: |-
                  Adds a comment by the user to a specific file, or
                  as a reply to an ot
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: invalid-ref
              message: '''#/components/schemas/Comment'' does not exist'
    overlays:
      - type: APIs.io Search
        url: overlays/comments-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/comments-openapi-api-evangelist-ratings.yml
  - aid: box:box-collaborations-api
    name: Box Collaborations API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Collaborations API
          paths:
            /files/{file_id}/collaborations:
              get:
                summary: List file collaborations
                description: |-
                  Retrieves a list of pending and active collaborations for a
                  file. This returns all the users that have access to the file
                  or have been invited to the file.
                tags:
                  - List
                  - File
                  - Collaborations
                  - Files
                  - File_id
                  - Collaborations
            /folders/{folder_id}/collaborations:
              get:
                summary: List folder collaborations
                description: >-
                  Retrieves a list of pending and active collaborations for a

                  folder. This returns all the users that have access to the
                  folder

                  or have been invited to the folder.
                tags:
                  - List
                  - Folder
                  - Collaborations
                  - Files
                  - File_id
                  - Collaborations
                  - Folders
                  - Folder_id
            /collaborations/{collaboration_id}:
              get:
                summary: Get collaboration
                tags:
                  - Get
                  - Collaboration
                  - Files
                  - File_id
                  - Collaborations
                  - Folders
                  - Folder_id
                  - Collaboration_id
                description: Retrieves a single collaboration.
              put:
                tags:
                  - Update
                  - Collaboration
                  - Files
                  - File_id
                  - Collaborations
                  - Folders
                  - Folder_id
                  - Collaboration_id
                summary: Update collaboration
                description: |-
                  Updates a collaboration.
                  Can be used to change the owner of an item, or to
                  accept collaboration invites.
              delete:
                summary: Remove collaboration
                tags:
                  - Remove
                  - Collaboration
                  - Files
                  - File_id
                  - Collaborations
                  - Folders
                  - Folder_id
                  - Collaboration_id
                description: Deletes a single collaboration.
            /collaborations:
              get:
                summary: List pending collaborations
                tags:
                  - List
                  - Pending
                  - Collaborations
                  - Files
                  - File_id
                  - Collaborations
                  - Folders
                  - Folder_id
                  - Collaboration_id
                description: Retrieves all pending collaboration invites for this user.
              post:
                tags:
                  - Create
                  - Collaboration
                  - Files
                  - File_id
                  - Collaborations
                  - Folders
                  - Folder_id
                  - Collaboration_id
                summary: Create collaboration
                description: >-
                  Adds a collaboration for a single user or a single group to a
                  file

                  or folder.


                  Collaborations can be created using email address, user IDs,
                  or a

                  group IDs.


                  If a collaboration is being created with a group, access to

                  this endpoint is dependent on the group's ability to be
                  invited.


                  If collaboration is in `pending` status, the following fields

                  are redacted:

                  - `login` and `name` are hidden if a collaboration was created

                  using `user_id`,

                  -  `name` is hidden if a collaboration was created using
                  `login`.
            /groups/{group_id}/collaborations:
              get:
                summary: List group collaborations
                tags:
                  - List
                  - Group
                  - Collaborations
                  - Files
                  - File_id
                  - Collaborations
                  - Folders
                  - Folder_id
                  - Collaboration_id
                  - Groups
                  - Group_id
                description: |-
                  Retrieves all the collaborations for a group. The user
                  must have admin permissions to inspect enterprise's groups.

                  Each collaboration object has details on which files or
                  folders the group has access to and wit
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-204-status-code-info
              message: PUT 204 Status Code
            - code: openapi-response-put-204-no-body-error
              message: No Response Body PUT
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: invalid-ref
              message: '''#/components/schemas/File'' does not exist'
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
    overlays:
      - type: APIs.io Search
        url: overlays/collaborations-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/collaborations-openapi-api-evangelist-ratings.yml
  - aid: box:box-search-api
    name: Box Search API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Search API
          paths:
            /search:
              get:
                summary: Search for content
                tags:
                  - Search
                  - For
                  - Content
                  - Search
                description: >-
                  Searches for files, folders, web links, and shared files
                  across the

                  users content or across the entire
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: invalid-ref
              message: '''#/components/schemas/MetadataFilter'' does not exist'
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/search-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/search-openapi-api-evangelist-ratings.yml
  - aid: box:box-tasks-api
    name: Box Tasks API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Tasks API
          paths:
            /files/{file_id}/tasks:
              get:
                summary: List tasks on file
                description: |-
                  Retrieves a list of all the tasks for a file. This
                  endpoint does not support pagination.
                tags:
                  - List
                  - Tasks
                  - 'On'
                  - File
                  - Files
                  - File_id
                  - Tasks
            /tasks:
              post:
                tags:
                  - Create
                  - Task
                  - Files
                  - File_id
                  - Tasks
                summary: Create task
                description: >-
                  Creates a single task on a file. This task is not assigned to
                  any user and

                  will need to be assigned separately.
            /tasks/{task_id}:
              get:
                summary: Get task
                tags:
                  - Get
                  - Task
                  - Files
                  - File_id
                  - Tasks
                  - Task_id
                description: Retrieves information about a specific task.
              put:
                tags:
                  - Update
                  - Task
                  - Files
                  - File_id
                  - Tasks
                  - Task_id
                summary: Update task
                description: >-
                  Updates a task. This can be used to update a task's
                  configuration, or to

                  update its completion state.
              delete:
                tags:
                  - Remove
                  - Task
                  - Files
                  - File_id
                  - Tasks
                  - Task_id
                summary: Remove task
                description: Removes a task from a file.
            /tasks/{task_id}/assignments:
              get:
                summary: List task assignments
                tags:
                  - List
                  - Task
                  - Assignments
                  - Files
                  - File_id
                  - Tasks
                  - Task_id
                  - Assignments
                description: Lists all of the assignments for a
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-info
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: invalid-ref
              message: '''#/components/schemas/File--Mini'' does not exist'
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
    overlays:
      - type: APIs.io Search
        url: overlays/tasks-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/tasks-openapi-api-evangelist-ratings.yml
  - aid: box:box-task-assignments-api
    name: Box Task Assignments API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Task Assignments API
          paths:
            /task_assignments:
              post:
                summary: Assign task
                tags:
                  - Assign
                  - Task
                  - Task_assignments
                description: >-
                  Assigns a task to a user.


                  A task can be assigned to more than one user by creating
                  multiple

                  assignments.
            /task_assignments/{task_assignment_id}:
              get:
                summary: Get task assignment
                tags:
                  - Get
                  - Task
                  - Assignment
                  - Task_assignments
                  - Task_assignment_id
                description: Retrieves information about a task assignment.
              put:
                summary: Update task assignment
                tags:
                  - Update
                  - Task
                  - Assignment
                  - Task_assignments
                  - Task_assignment_id
                description: |-
                  Updates a task assignment. This endpoint can be
                  used to update the state of a task assigned to a user.
              delete:
                summary: Unassign task
                tags:
                  - Unassign
                  - Task
                  - Task_assignments
                  - Task_assignment_id
                description: Deletes a specific task
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: invalid-ref
              message: '''#/components/schemas/File--Mini'' does not exist'
    overlays:
      - type: APIs.io Search
        url: overlays/task-assignments-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/task-assignments-openapi-api-evangelist-ratings.yml
  - aid: box:box-shared-items-api
    name: Box Shared Items API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Shared Items API
          paths:
            /shared_items:
              get:
                summary: Find file for shared link
                tags:
                  - Find
                  - File
                  - For
                  - Shared
                  - Link
                  - Shared_items
                description: >-
                  Returns the file represented by a shared link.


                  A shared file can be represented by a shared link,

                  which can originate within the current enterprise or within
                  another.


                  This endpoint allows an application to retrieve information
                  about a

                  shared file when only given a shared link.


                  The `shared_link_permission_options` array field can be
                  returned

                  by requesting it in the `fields` query parameter.
            /shared_items#folders:
              get:
                summary: Find folder for shared link
                tags:
                  - Find
                  - Folder
                  - For
                  - Shared
                  - Link
                  - Shared_items
                  - Shared_items#folders
                description: >-
                  Return the folder represented by a shared link.


                  A shared folder can be represented by a shared link,

                  which can originate within the current enterprise or within
                  another.


                  This endpoint allows an application to retrieve information
                  about a

                  shared folder when only given a shared link.
            /shared_items#web_links:
              get:
                summary: Find web link for shared link
                tags:
                  - Find
                  - Web
                  - Link
                  - For
                  - Shared
                  - Shared_items
                  - Shared_items#folders
                  - Shared_items#web_links
                description: >-
                  Returns the web link represented by a shared link.


                  A shared web link can be represented by a shared link,

                  which can originate within the current enterprise or within
                  another.


                  This endpoint allows an application to retrieve information
                  about a

                  shared web link when only given a 
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: invalid-ref
              message: '''#/components/schemas/File'' does not exist'
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/shared-items-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/shared-items-openapi-api-evangelist-ratings.yml
  - aid: box:box-shared-itemsfolders-api
    name: Box Shared Items#folders API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Shared Items#folders API
          paths:
            /shared_items#folders:
              get:
                summary: Find folder for shared link
                tags:
                  - Find
                  - Folder
                  - For
                  - Shared
                  - Link
                  - Shared_items#folders
                description: >-
                  Return the folder represented by a shared link.


                  A shared folder can be represented by a shared link,

                  which can originate within the current enterprise or within
                  another.


                  This endpoint allows an application to retrieve information
                  about a

                  shared folder when only given a 
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: invalid-ref
              message: '''#/components/schemas/Folder'' does not exist'
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/shared-itemsfolders-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/shared-itemsfolders-openapi-api-evangelist-ratings.yml
  - aid: box:box-web-links-api
    name: Box Web Links API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Web Links API
          paths:
            /web_links:
              post:
                summary: Create web link
                tags:
                  - Create
                  - Web
                  - Link
                  - Web_links
                description: Creates a web link object within a folder.
            /web_links/{web_link_id}:
              get:
                summary: Get web link
                tags:
                  - Get
                  - Web
                  - Link
                  - Web_links
                  - Web_link_id
                description: Retrieve information about a web link.
              post:
                summary: Restore web link
                tags:
                  - Restore
                  - Web
                  - Link
                  - Web_links
                  - Web_link_id
                description: >-
                  Restores a web link that has been moved to the trash.


                  An optional new parent ID can be provided to restore the  web
                  link to in case

                  the original folder has been deleted.
              put:
                summary: Update web link
                tags:
                  - Update
                  - Web
                  - Link
                  - Web_links
                  - Web_link_id
                description: Updates a web link object.
              delete:
                summary: Remove web link
                tags:
                  - Remove
                  - Web
                  - Link
                  - Web_links
                  - Web_link_id
                description: Deletes a web link.
            /web_links/{web_link_id}/trash:
              get:
                summary: Get trashed web link
                tags:
                  - Get
                  - Trashed
                  - Web
                  - Link
                  - Web_links
                  - Web_link_id
                  - Trash
                description: Retrieves a web link that has been moved to the trash.
              delete:
                summary: Permanently remove web link
                tags:
                  - Permanently
                  - Remove
                  - Web
                  - Link
                  - Web_links
                  - Web_link_id
                  - Trash
                description: |-
                  Permanently deletes a web link that is in the trash.
                  This action cannot be undone.
            /web_links/{web_link_id}#get_shared_link:
              get:
                summary: Get shared link for web link
                tags:
                  - Get
                  - Shared
                  - Link
                  - For
                  - Web
                  - Web_links
                  - Web_link_id
                  - Trash
                  - '#get_shared_link'
                description: Gets the information for a shared link on a web link.
            /web_links/{web_link_id}#add_shared_link:
              put:
                summary: Add shared link to web link
                tags:
                  - Add
                  - Shared
                  - Link
                  - To
                  - Web
                  - Web_links
                  - Web_link_id
                  - Trash
                  - '#get_shared_link'
                  - '#add_shared_link'
                description: Adds a shared link to a web link.
            /web_links/{web_link_id}#update_shared_link:
              put:
                summary: Update shared link on web link
                tags:
                  - Update
                  - Shared
                  - Link
                  - 'On'
                  - Web
                  - Web_links
                  - Web_link_id
                  - Trash
                  - '#get_shared_link'
                  - '#add_shared_link'
                  - '#update_shared_link'
                description: Updates a shared link on a web link.
            /web_links/{web_link_id}#remove_shared_link:
              put:
                summary: Remove shared link from web link
                tags:
                  - Remove
                  - Shared
                  - Link
                  - From
                  - Web
                  - Web_links
                  - Web_link_id
                  - Trash
                  - '#get_shared_link'
                  - '#add_shared_link'
                  - '#update_shared_link'
                  - '#remove_shared_link'
                description: Removes a shared link from
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: invalid-ref
              message: '''#/components/schemas/TrashWebLinkRestored'' does not exist'
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-request-body-schema-properties-nullable-info
              message: Request Body Schema Properties Nullable
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
    overlays:
      - type: APIs.io Search
        url: overlays/web-links-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/web-links-openapi-api-evangelist-ratings.yml
  - aid: box:box-shared-itemsweb-links-api
    name: Box Shared Items#web Links API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Shared Items#web Links API
          paths:
            /shared_items#web_links:
              get:
                summary: Find web link for shared link
                tags:
                  - Find
                  - Web
                  - Link
                  - For
                  - Shared
                  - Shared_items#web_links
                description: >-
                  Returns the web link represented by a shared link.


                  A shared web link can be represented by a shared link,

                  which can originate within the current enterprise or within
                  another.


                  This endpoint allows an application to retrieve information
                  about a

                  shared web link when only given a 
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: invalid-ref
              message: '''#/components/schemas/WebLink--Mini'' does not exist'
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/shared-itemsweb-links-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/shared-itemsweb-links-openapi-api-evangelist-ratings.yml
  - aid: box:box-users-api
    name: Box Users API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Users API
          paths:
            /users:
              get:
                summary: List enterprise users
                tags:
                  - List
                  - Enterprise
                  - Users
                  - Users
                description: >-
                  Returns a list of all users for the Enterprise along with
                  their `user_id`,

                  `public_name`, and `login`.


                  The application and the authenticated user need to

                  have the permission to look up users in the entire

                  enterprise.
              post:
                summary: Create user
                tags:
                  - Create
                  - User
                  - Users
                description: |-
                  Creates a new managed user in an enterprise. This endpoint
                  is only available to users and applications with the right
                  admin permissions.
            /users/me:
              get:
                summary: Get current user
                tags:
                  - Get
                  - Current
                  - User
                  - Users
                  - Me
                description: >-
                  Retrieves information about the user who is currently
                  authenticated.


                  In the case of a client-side authenticated OAuth 2.0
                  application

                  this will be the user who authorized the app.


                  In the case of a JWT, server-side authenticated application

                  this will be the service account that belongs to the
                  application

                  by default.


                  Use the `As-User` header to change who this API call is made
                  on behalf of.
            /users/terminate_sessions:
              post:
                summary: Create jobs to terminate users session
                tags:
                  - Create
                  - Jobs
                  - To
                  - Terminate
                  - Users
                  - Session
                  - Users
                  - Me
                  - Terminate_sessions
                description: |-
                  Validates the roles and permissions of the user,
                  and creates asynchronous jobs
                  to terminate the user's sessions.
                  Returns the status for the POST request.
            /users/{user_id}:
              get:
                summary: Get user
                tags:
                  - Get
                  - User
                  - Users
                  - Me
                  - Terminate_sessions
                  - User_id
                description: |-
                  Retrieves information about a user in the enterprise.

                  The application and the authenticated user need to
                  have the permission to look up users in the entire
                  enterprise.

                  This endpoint also returns a limited set of information
                  for external users who are collaborated on content
                  owned by the enterprise for authenticated users with the
                  right scopes. In this case, disallowed fields will return
                  null instead.
              put:
                summary: Update user
                tags:
                  - Update
                  - User
                  - Users
                  - Me
                  - Terminate_sessions
                  - User_id
                description: |-
                  Updates a managed or app user in an enterprise. This endpoint
                  is only available to users and applications with the right
                  admin permissions.
              delete:
                summary: Delete user
                tags:
                  - Delete
                  - User
                  - Users
                  - Me
                  - Terminate_sessions
                  - User_id
                description: |-
                  Deletes a user. By default this will fail if the user
                  still owns any content. Move their owned content first
                  before proceeding, or use the `force` field to delete
                  the user and their files.
            /users/{user_id}/avatar:
              get:
                summary: Get user avatar
                tags:
                  - Get
                  - User
                  - Avatar
                  - Users
                  - Me
                  - Terminate_sessions
                  - User_id
                  - Avatar
                description: Retrieves an image of a the user's avatar.
              post:
                summary: Add or update user avatar
                tags:
                  - Add
                  - Or
                  - Update
                  - User
                  - Avatar
                  - Users
                  - Me
                  - Terminate_sessions
                  - User_id
                  - Avatar
                description: Adds or updates a user avatar.
              delete:
                summary: Delete user avatar
                tags:
                  - Delete
                  - User
                  - Avatar
                  - Users
                  - Me
                  - Terminate_sessions
                  - User_id
                  - Avatar
                description: |-
                  Removes an existing user avatar.
                  You cannot reverse this operation.
            /users/{user_id}/folders/0:
              put:
                summary: Transfer owned folders
                tags:
                  - Transfer
                  - Owned
                  - Folders
                  - Users
                  - Me
                  - Terminate_sessions
                  - User_id
                  - Avatar
                  - Folders
                description: >-
                  Move all of the items (files, folders and workflows) owned by
                  a user into

                  another user's account


                  Only the root folder (`0`) can be transferred.


                  Folders can only be moved across users by users with
                  administrative

                  permissions.


                  All existing shared links and folder-level collaborations are
                  transferred

                  during the operation. Please note that while collaborations at
                  the individual

                  file-level are transferred during the operation, the
                  collaborations are

                  deleted when the original user is deleted.


                  This call will be performed synchronously which might lead to
                  a slow response

                  when the source user has a large number of items in all of its
                  folders.


                  If the destination path has a metadata cascade policy attached
                  to any of

                  the parent folders, a metadata cascade operation will be
                  kicked off

                  asynchronously.


                  There is currently no way to check for when this operation is
                  finished.


                  The destination folder's name will be in the format `{User}'s
                  Files and

                  Folders`, where `{User}` is the display name of the user.


                  To make this API call your application will need to have the
                  "Read and write

                  all files and folders stored in Box" scope enabled.


                  Please make sure the destination user has access to `Relay` or
                  `Relay Lite`,

                  and has access to the files and folders involved in the
                  workflows being

                  transferred.


                  Admins will receive an email when the operation is completed.
            /users/{user_id}/email_aliases:
              get:
                summary: List user's email aliases
                tags:
                  - List
                  - User's
                  - Email
                  - Aliases
                  - Users
                  - Me
                  - Terminate_sessions
                  - User_id
                  - Avatar
                  - Folders
                  - Email_aliases
                description: |-
                  Retrieves all email aliases for a user. The collection
                  does not include the primary login for the user.
              post:
                summary: Create email alias
                tags:
                  - Create
                  - Email
                  - Alias
                  - Users
                  - Me
                  - Terminate_sessions
                  - User_id
                  - Avatar
                  - Folders
                  - Email_aliases
                description: Adds a new email alias to a user account..
            /users/{user_id}/email_aliases/{email_alias_id}:
              delete:
                summary: Remove email alias
                tags:
                  - Remove
                  - Email
                  - Alias
                  - Users
                  - Me
                  - Terminate_sessions
                  - User_id
                  - Avatar
                  - Folders
                  - Email_aliases
                  - Email_alias_id
                description: Removes an email alias from a user.
            /users/{user_id}/memberships:
              get:
                summary: List user's groups
                tags:
                  - List
                  - User's
                  - Groups
                  - Users
                  - Me
                  - Terminate_sessions
                  - User_id
                  - Avatar
                  - Folders
                  - Email_aliases
                  - Email_alias_id
                  - Memberships
                description: |-
                  Retrieves all the groups for a user. Only members of this
                  group or users with admin-level permissions will be able to
                  u
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: invalid-ref
              message: '''#/components/schemas/TrackingCode'' does not exist'
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-schema-properties-nullable-info
              message: Request Body Schema Properties Nullable
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-get-200-media-type-error
              message: JSON Media Type GET
            - code: openapi-request-body-json-media-type-on-post-error
              message: JSON Media Type POST
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
    overlays:
      - type: APIs.io Search
        url: overlays/users-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/users-openapi-api-evangelist-ratings.yml
  - aid: box:box-invites-api
    name: Box Invites API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Invites API
          paths:
            /invites:
              post:
                summary: Create user invite
                tags:
                  - Create
                  - User
                  - Invite
                  - Invites
                description: >-
                  Invites an existing external user to join an enterprise.


                  The existing user can not be part of another enterprise and

                  must already have a Box account. Once invited, the user will
                  receive an

                  email and are prompted to accept the invitation within the

                  Box web application.


                  This method requires the "Manage An Enterprise" scope enabled
                  for

                  the application, which can be enabled within the developer
                  console.
            /invites/{invite_id}:
              get:
                summary: Get user invite status
                tags:
                  - Get
                  - User
                  - Invite
                  - Status
                  - Invites
                  - Invite_id
                description: Returns the status of a
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: invalid-ref
              message: '''#/components/schemas/User--Mini'' does not exist'
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/invites-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/invites-openapi-api-evangelist-ratings.yml
  - aid: box:box-groups-api
    name: Box Groups API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Groups API
          paths:
            /groups:
              get:
                summary: List groups for enterprise
                tags:
                  - List
                  - Groups
                  - For
                  - Enterprise
                  - Groups
                description: |-
                  Retrieves all of the groups for a given enterprise. The user
                  must have admin permissions to inspect enterprise's groups.
              post:
                summary: Create group
                tags:
                  - Create
                  - Group
                  - Groups
                description: >-
                  Creates a new group of users in an enterprise. Only users with
                  admin

                  permissions can create new groups.
            /groups/terminate_sessions:
              post:
                summary: Create jobs to terminate user group session
                tags:
                  - Create
                  - Jobs
                  - To
                  - Terminate
                  - User
                  - Group
                  - Session
                  - Groups
                  - Terminate_sessions
                description: |-
                  Validates the roles and permissions of the group,
                  and creates asynchronous jobs
                  to terminate the group's sessions.
                  Returns the status for the POST request.
            /groups/{group_id}:
              get:
                summary: Get group
                tags:
                  - Get
                  - Group
                  - Groups
                  - Terminate_sessions
                  - Group_id
                description: |-
                  Retrieves information about a group. Only members of this
                  group or users with admin-level permissions will be able to
                  use this API.
              put:
                summary: Update group
                tags:
                  - Update
                  - Group
                  - Groups
                  - Terminate_sessions
                  - Group_id
                description: |-
                  Updates a specific group. Only admins of this
                  group or users with admin-level permissions will be able to
                  use this API.
              delete:
                summary: Remove group
                tags:
                  - Remove
                  - Group
                  - Groups
                  - Terminate_sessions
                  - Group_id
                description: |-
                  Permanently deletes a group. Only users with
                  admin-level permissions will be able to use this API.
            /groups/{group_id}/memberships:
              get:
                summary: List members of group
                tags:
                  - List
                  - Members
                  - Of
                  - Group
                  - Groups
                  - Terminate_sessions
                  - Group_id
                  - Memberships
                description: |-
                  Retrieves all the members for a group. Only members of this
                  group or users with admin-level permissions will be able to
                  use this API.
            /groups/{group_id}/collaborations:
              get:
                summary: List group collaborations
                tags:
                  - List
                  - Group
                  - Collaborations
                  - Groups
                  - Terminate_sessions
                  - Group_id
                  - Memberships
                  - Collaborations
                description: |-
                  Retrieves all the collaborations for a group. The user
                  must have admin permissions to inspect enterprise's groups.

                  Each collaboration object has details on which files or
                  folders the group has access to and wit
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: invalid-ref
              message: '''#/components/schemas/SessionTerminationMessage'' does not exist'
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-info
              message: 500 Status Code for POST Responses
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-names-pascal-case-warn
              message: Schema Name Pascal Case
    overlays:
      - type: APIs.io Search
        url: overlays/groups-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/groups-openapi-api-evangelist-ratings.yml
  - aid: box:box-group-memberships-api
    name: Box Group Memberships API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Group Memberships API
          paths:
            /group_memberships:
              post:
                summary: Add user to group
                tags:
                  - Add
                  - User
                  - To
                  - Group
                  - Group_memberships
                description: |-
                  Creates a group membership. Only users with
                  admin-level permissions will be able to use this API.
            /group_memberships/{group_membership_id}:
              get:
                summary: Get group membership
                tags:
                  - Get
                  - Group
                  - Membership
                  - Group_memberships
                  - Group_membership_id
                description: |-
                  Retrieves a specific group membership. Only admins of this
                  group or users with admin-level permissions will be able to
                  use this API.
              put:
                summary: Update group membership
                tags:
                  - Update
                  - Group
                  - Membership
                  - Group_memberships
                  - Group_membership_id
                description: |-
                  Updates a user's group membership. Only admins of this
                  group or users with admin-level permissions will be able to
                  use this API.
              delete:
                summary: Remove user from group
                tags:
                  - Remove
                  - User
                  - From
                  - Group
                  - Group_memberships
                  - Group_membership_id
                description: |-
                  Deletes a specific group membership. Only admins of this
                  group or users with admin-level permissions will be able to
                  u
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: invalid-ref
              message: '''#/components/schemas/User--Mini'' does not exist'
    overlays:
      - type: APIs.io Search
        url: overlays/group-memberships-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/group-memberships-openapi-api-evangelist-ratings.yml
  - aid: box:box-webhooks-api
    name: Box Webhooks API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Webhooks API
          paths:
            /webhooks:
              get:
                summary: List all webhooks
                tags:
                  - List
                  - All
                  - Webhooks
                  - Webhooks
                description: >-
                  Returns all defined webhooks for the requesting application.


                  This API only returns webhooks that are applied to files or
                  folders that are

                  owned by the authenticated user. This means that an admin can
                  not see webhooks

                  created by a service account unless the admin has access to
                  those folders, and

                  vice versa.
              post:
                summary: Create webhook
                tags:
                  - Create
                  - Webhook
                  - Webhooks
                description: Creates a webhook.
            /webhooks/{webhook_id}:
              get:
                tags:
                  - Get
                  - Webhook
                  - Webhooks
                  - Webhook_id
                summary: Get webhook
                description: Retrieves a specific webhook
              put:
                summary: Update webhook
                tags:
                  - Update
                  - Webhook
                  - Webhooks
                  - Webhook_id
                description: Updates a webhook.
              delete:
                summary: Remove webhook
                tags:
                  - Remove
                  - Webhook
                  - Webhooks
                  - Webhook_id
                description: Delet
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: invalid-ref
              message: '''#/components/schemas/Webhook--Mini'' does not exist'
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/webhooks-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/webhooks-openapi-api-evangelist-ratings.yml
  - aid: box:box-skill-invocations-api
    name: Box Skill Invocations API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Skill Invocations API
          paths:
            /skill_invocations/{skill_id}:
              put:
                summary: Update all Box Skill cards on file
                tags:
                  - Update
                  - All
                  - Box
                  - Skill
                  - Cards
                  - 'On'
                  - File
                  - Skill_invocations
                  - Skill_id
                description: >-
                  An alternative method that can be used to overwrite and update
                  all Box Skill

                  metadata card
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: invalid-ref
              message: '''#/components/schemas/KeywordSkillCard'' does not exist'
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/skill-invocations-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/skill-invocations-openapi-api-evangelist-ratings.yml
  - aid: box:box-events-api
    name: Box Events API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Events API
          paths:
            /events:
              options:
                summary: Get events long poll endpoint
                tags:
                  - Get
                  - Events
                  - Long
                  - Poll
                  - Endpoint
                  - Events
                description: >-
                  Returns a list of real-time servers that can be used for
                  long-polling updates

                  to the [event stream](#get-events).


                  Long polling is the concept where a HTTP request is kept open
                  until the

                  server sends a response, then repeating the process over and
                  over to receive

                  updated responses.


                  Long polling the event stream can only be used for user
                  events, not for

                  enterprise events.


                  To use long polling, first use this endpoint to retrieve a
                  list of long poll

                  URLs. Next, make a long poll request to any of the provided
                  URLs.


                  When an event occurs in monitored account a response with the
                  value

                  `new_change` will be sent. The response contains no other
                  details as

                  it only serves as a prompt to take further action such as
                  sending a

                  request to the [events endpoint](#get-events) with the last
                  known

                  `stream_position`.


                  After the server sends this response it closes the connection.
                  You must now

                  repeat the long poll process to begin listening for events
                  again.


                  If no events occur for a while and the connection times out
                  you will

                  receive a response with the value `reconnect`. When you
                  receive this response

                  you’ll make another call to this endpoint to restart the
                  process.


                  If you receive no events in `retry_timeout` seconds then you
                  will need to

                  make another request to the real-time server (one of the URLs
                  in the response

                  for this endpoint). This might be necessary due to network
                  errors.


                  Finally, if you receive a `max_retries` error when making a
                  request to the

                  real-time server, you should start over by making a call to
                  this endpoint

                  first.
              get:
                summary: List user and enterprise events
                tags:
                  - List
                  - User
                  - And
                  - Enterprise
                  - Events
                  - Events
                description: >-
                  Returns up to a year of past events for a given user

                  or for the entire enterprise.


                  By default this returns events for the authenticated user. To
                  retrieve events

                  for the entire enterprise, set the `stream_type` to
                  `admin_logs_streaming`

                  for live monitoring of new events, or `admin_logs` for
                  querying across

                  historical events. The user making the API call will

                  need to have admin privileges, and the application will need
                  to have the

                  scope `manage enterprise properti
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: invalid-ref
              message: '''#/components/schemas/RealtimeServer'' does not exist'
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/events-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/events-openapi-api-evangelist-ratings.yml
  - aid: box:box-collections-api
    name: Box Collections API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Collections API
          paths:
            /collections:
              get:
                summary: List all collections
                tags:
                  - List
                  - All
                  - Collections
                  - Collections
                description: |-
                  Retrieves all collections for a given user.

                  Currently, only the `favorites` collection
                  is supported.
            /collections/{collection_id}/items:
              get:
                summary: List collection items
                tags:
                  - List
                  - Collection
                  - Items
                  - Collections
                  - Collection_id
                  - Items
                description: |-
                  Retrieves the files and/or folders contained within
                  this
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: invalid-ref
              message: '''#/components/schemas/Collection'' does not exist'
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/collections-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/collections-openapi-api-evangelist-ratings.yml
  - aid: box:box-recent-items-api
    name: Box Recent Items API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Recent Items API
          paths:
            /recent_items:
              get:
                summary: List recently accessed items
                tags:
                  - List
                  - Recently
                  - Accessed
                  - Items
                  - Recent_items
                description: |-
                  Returns information about the recent items accessed
                  by a user, either in the last 90 days or up to the last
                  1000 ite
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: invalid-ref
              message: '''#/components/schemas/RecentItem'' does not exist'
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/recent-items-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/recent-items-openapi-api-evangelist-ratings.yml
  - aid: box:box-retention-policies-api
    name: Box Retention Policies API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Retention Policies API
          paths:
            /retention_policies:
              get:
                summary: List retention policies
                tags:
                  - List
                  - Retention
                  - Policies
                  - Retention_policies
                description: Retrieves all of the retention policies for an enterprise.
              post:
                summary: Create retention policy
                tags:
                  - Create
                  - Retention
                  - Policy
                  - Retention_policies
                description: Creates a retention policy.
            /retention_policies/{retention_policy_id}:
              get:
                summary: Get retention policy
                tags:
                  - Get
                  - Retention
                  - Policy
                  - Retention_policies
                  - Retention_policy_id
                description: Retrieves a retention policy.
              put:
                summary: Update retention policy
                tags:
                  - Update
                  - Retention
                  - Policy
                  - Retention_policies
                  - Retention_policy_id
                description: Updates a retention policy.
              delete:
                summary: Delete retention policy
                tags:
                  - Delete
                  - Retention
                  - Policy
                  - Retention_policies
                  - Retention_policy_id
                description: Permanently deletes a retention policy.
            /retention_policies/{retention_policy_id}/assignments:
              get:
                summary: List retention policy assignments
                tags:
                  - List
                  - Retention
                  - Policy
                  - Assignments
                  - Retention_policies
                  - Retention_policy_id
                  - Assignments
                description: >-
                  Returns a list of all retention policy assignments associated
                  with a specified

                  reten
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: invalid-ref
              message: '''#/components/schemas/User--Mini'' does not exist'
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-schema-properties-nullable-info
              message: Request Body Schema Properties Nullable
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-description-length-error
              message: Description needs to be less than 250 characters.
            - code: openapi-schema-names-length-error
              message: Schema Name Length
    overlays:
      - type: APIs.io Search
        url: overlays/retention-policies-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/retention-policies-openapi-api-evangelist-ratings.yml
  - aid: box:box-retention-policy-assignments-api
    name: Box Retention Policy Assignments API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Retention Policy Assignments API
          paths:
            /retention_policy_assignments:
              post:
                summary: Assign retention policy
                tags:
                  - Assign
                  - Retention
                  - Policy
                  - Retention_policy_assignments
                description: Assigns a retention policy to an item.
            /retention_policy_assignments/{retention_policy_assignment_id}:
              get:
                summary: Get retention policy assignment
                tags:
                  - Get
                  - Retention
                  - Policy
                  - Assignment
                  - Retention_policy_assignments
                  - Retention_policy_assignment_id
                description: Retrieves a retention policy assignment
              delete:
                summary: Remove retention policy assignment
                tags:
                  - Remove
                  - Retention
                  - Policy
                  - Assignment
                  - Retention_policy_assignments
                  - Retention_policy_assignment_id
                description: |-
                  Removes a retention policy assignment
                  applied to content.
            /retention_policy_assignments/{retention_policy_assignment_id}/files_under_retention:
              get:
                summary: Get files under retention
                tags:
                  - Get
                  - Files
                  - Under
                  - Retention
                  - Retention_policy_assignments
                  - Retention_policy_assignment_id
                  - Files_under_retention
                description: >-
                  Returns a list of files under retention for a retention policy
                  assignment.
            /retention_policy_assignments/{retention_policy_assignment_id}/file_versions_under_retention:
              get:
                summary: Get file versions under retention
                tags:
                  - Get
                  - File
                  - Versions
                  - Under
                  - Retention
                  - Retention_policy_assignments
                  - Retention_policy_assignment_id
                  - Files_under_retention
                  - File_versions_under_retention
                description: >-
                  Returns a list of file versions under retention for a
                  retention policy
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: invalid-ref
              message: '''#/components/schemas/RetentionPolicy--Mini'' does not exist'
    overlays:
      - type: APIs.io Search
        url: overlays/retention-policy-assignments-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/retention-policy-assignments-openapi-api-evangelist-ratings.yml
  - aid: box:box-legal-hold-policies-api
    name: Box Legal Hold Policies API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Legal Hold Policies API
          paths:
            /legal_hold_policies:
              get:
                summary: List all legal hold policies
                tags:
                  - List
                  - All
                  - Legal
                  - Hold
                  - Policies
                  - Legal_hold_policies
                description: |-
                  Retrieves a list of legal hold policies that belong to
                  an enterprise.
              post:
                summary: Create legal hold policy
                tags:
                  - Create
                  - Legal
                  - Hold
                  - Policy
                  - Legal_hold_policies
                description: Create a new legal hold policy.
            /legal_hold_policies/{legal_hold_policy_id}:
              get:
                summary: Get legal hold policy
                tags:
                  - Get
                  - Legal
                  - Hold
                  - Policy
                  - Legal_hold_policies
                  - Legal_hold_policy_id
                description: Retrieve a legal hold policy.
              put:
                summary: Update legal hold policy
                tags:
                  - Update
                  - Legal
                  - Hold
                  - Policy
                  - Legal_hold_policies
                  - Legal_hold_policy_id
                description: Update legal hold policy.
              delete:
                tags:
                  - Remove
                  - Legal
                  - Hold
                  - Policy
                  - Legal_hold_policies
                  - Legal_hold_policy_id
                summary: Remove legal hold policy
                description: |-
                  Delete an existing legal hold policy.

                  This is an asynchronous process. The policy will not be
                  fully deleted yet when the respo
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-type-info
              message: Request Body Schema Properties Format
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: invalid-ref
              message: '''#/components/schemas/LegalHoldPolicy--Mini'' does not exist'
    overlays:
      - type: APIs.io Search
        url: overlays/legal-hold-policies-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/legal-hold-policies-openapi-api-evangelist-ratings.yml
  - aid: box:box-legal-hold-policy-assignments-api
    name: Box Legal Hold Policy Assignments API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Legal Hold Policy Assignments API
          paths:
            /legal_hold_policy_assignments:
              get:
                summary: List legal hold policy assignments
                tags:
                  - List
                  - Legal
                  - Hold
                  - Policy
                  - Assignments
                  - Legal_hold_policy_assignments
                description: >-
                  Retrieves a list of items a legal hold policy has been
                  assigned to.
              post:
                summary: Assign legal hold policy
                tags:
                  - Assign
                  - Legal
                  - Hold
                  - Policy
                  - Legal_hold_policy_assignments
                description: Assign a legal hold to a file, file version, folder, or user.
            /legal_hold_policy_assignments/{legal_hold_policy_assignment_id}:
              get:
                summary: Get legal hold policy assignment
                tags:
                  - Get
                  - Legal
                  - Hold
                  - Policy
                  - Assignment
                  - Legal_hold_policy_assignments
                  - Legal_hold_policy_assignment_id
                description: Retrieve a legal hold policy assignment.
              delete:
                tags:
                  - Unassign
                  - Legal
                  - Hold
                  - Policy
                  - Legal_hold_policy_assignments
                  - Legal_hold_policy_assignment_id
                summary: Unassign legal hold policy
                description: |-
                  Remove a legal hold from an item.

                  This is an asynchronous process. The policy will not be
                  fully removed yet when the response returns.
            /legal_hold_policy_assignments/{legal_hold_policy_assignment_id}/files_on_hold:
              get:
                summary: List current file versions for legal hold policy assignment
                tags:
                  - List
                  - Current
                  - File
                  - Versions
                  - For
                  - Legal
                  - Hold
                  - Policy
                  - Assignment
                  - Legal_hold_policy_assignments
                  - Legal_hold_policy_assignment_id
                  - Files_on_hold
                description: >-
                  Get a list of current file versions for a legal hold

                  assignment.


                  In some cases you may want to get previous file versions
                  instead. In these

                  cases, use the `GET 
                  /legal_hold_policy_assignments/:id/file_versions_on_hold`

                  API instead to return any previous versions of a file for this
                  legal hold

                  policy assignment.


                  Due to ongoing re-architecture efforts this API might not
                  return all file

                  versions held for this policy ID. Instead, this API will only
                  return the

                  latest file version held in the newly developed architecture.
                  The `GET

                  /file_version_legal_holds` API can be used to fetch current
                  and past versions

                  of files held within the legacy architecture.


                  The `GET /legal_hold_policy_assignments?policy_id={id}` API
                  can be used to

                  find a list of policy assignments for a given policy ID.
            /legal_hold_policy_assignments/{legal_hold_policy_assignment_id}/file_versions_on_hold:
              get:
                summary: List previous file versions for legal hold policy assignment
                tags:
                  - List
                  - Previous
                  - File
                  - Versions
                  - For
                  - Legal
                  - Hold
                  - Policy
                  - Assignment
                  - Legal_hold_policy_assignments
                  - Legal_hold_policy_assignment_id
                  - Files_on_hold
                  - File_versions_on_hold
                description: >-
                  Get a list of previous file versions for a legal hold

                  assignment.


                  In some cases you may only need the latest file versions
                  instead. In these

                  cases, use the `GET 
                  /legal_hold_policy_assignments/:id/files_on_hold` API

                  instead to return any current (latest) versions of a file for
                  this legal hold

                  policy assignment.


                  Due to ongoing re-architecture efforts this API might not
                  return all files

                  held for this policy ID. Instead, this API will only return
                  past file versions

                  held in the newly developed architecture. The `GET
                  /file_version_legal_holds`

                  API can be used to fetch current and past versions of files
                  held within the

                  legacy architecture.


                  The `GET /legal_hold_policy_assignments?policy_id={id}` API
                  can be used to

                  find a list of policy assignments for a give
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: invalid-ref
              message: >-
                '#/components/schemas/LegalHoldPolicyAssignment--Base' does not
                exist
    overlays:
      - type: APIs.io Search
        url: overlays/legal-hold-policy-assignments-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/legal-hold-policy-assignments-openapi-api-evangelist-ratings.yml
  - aid: box:box-file-version-retentions-api
    name: Box File Version Retentions API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box File Version Retentions API
          paths:
            /file_version_retentions:
              get:
                tags:
                  - List
                  - File
                  - Version
                  - Retentions
                  - File_version_retentions
                summary: List file version retentions
                description: >-
                  Retrieves all file version retentions for the given
                  enterprise.
            /file_version_retentions/{file_version_retention_id}:
              get:
                tags:
                  - Get
                  - Retention
                  - 'On'
                  - File
                  - File_version_retentions
                  - File_version_retention_id
                summary: Get retention on file
                description: Returns information about a file versi
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-description-length-error
              message: Description needs to be less than 250 characters.
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: invalid-ref
              message: '''#/components/schemas/FileVersion--Mini'' does not exist'
    overlays:
      - type: APIs.io Search
        url: overlays/file-version-retentions-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/file-version-retentions-openapi-api-evangelist-ratings.yml
  - aid: box:box-file-version-legal-holds-api
    name: Box File Version Legal Holds API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box File Version Legal Holds API
          paths:
            /file_version_legal_holds/{file_version_legal_hold_id}:
              get:
                summary: Get file version legal hold
                tags:
                  - Get
                  - File
                  - Version
                  - Legal
                  - Hold
                  - File_version_legal_holds
                  - File_version_legal_hold_id
                description: |-
                  Retrieves information about the legal hold policies
                  assigned to a file version.
            /file_version_legal_holds:
              get:
                summary: List file version legal holds
                tags:
                  - List
                  - File
                  - Version
                  - Legal
                  - Holds
                  - File_version_legal_holds
                  - File_version_legal_hold_id
                description: >-
                  Get a list of file versions on legal hold for a legal hold

                  assignment.


                  Due to ongoing re-architecture efforts this API might not
                  return all file

                  versions for this policy ID.


                  Instead, this API will only return file versions held in the
                  legacy

                  architecture. Two new endpoints will available to request any
                  file versions

                  held in the new architecture.


                  For file versions held in the new architecture, the `GET

                  /legal_hold_policy_assignments/:id/file_versions_on_hold` API
                  can be used to

                  return all past file versions available for this policy
                  assignment, and the

                  `GET /legal_hold_policy_assignments/:id/files_on_hold` API can
                  be used to

                  return any current (latest) versions of a file under legal
                  hold.


                  The `GET /legal_hold_policy_assignments?policy_id={id}` API
                  can be used to

                  find a list of policy assignments for a given policy ID.


                  Once the re-architecture is completed this API will be
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: invalid-ref
              message: '''#/components/schemas/FileVersion--Mini'' does not exist'
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/file-version-legal-holds-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/file-version-legal-holds-openapi-api-evangelist-ratings.yml
  - aid: box:box-shield-information-barriers-api
    name: Box Shield Information Barriers API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Shield Information Barriers API
          paths:
            /shield_information_barriers/{shield_information_barrier_id}:
              get:
                summary: Get shield information barrier with specified ID
                tags:
                  - Get
                  - Shield
                  - Information
                  - Barrier
                  - With
                  - Specified
                  - Shield_information_barriers
                  - Shield_information_barrier_id
                description: Get shield information barrier based on provided ID.
            /shield_information_barriers/change_status:
              post:
                summary: >-
                  Add changed status of shield information barrier with
                  specified ID
                tags:
                  - Add
                  - Changed
                  - Status
                  - Of
                  - Shield
                  - Information
                  - Barrier
                  - With
                  - Specified
                  - Shield_information_barriers
                  - Shield_information_barrier_id
                  - Change_status
                description: >-
                  Change status of shield information barrier with the specified
                  ID.
            /shield_information_barriers:
              get:
                summary: List shield information barriers
                tags:
                  - List
                  - Shield
                  - Information
                  - Barriers
                  - Shield_information_barriers
                  - Shield_information_barrier_id
                  - Change_status
                description: |-
                  Retrieves a list of shield information barrier objects
                  for the enterprise of JWT.
              post:
                summary: Create shield information barrier
                tags:
                  - Create
                  - Shield
                  - Information
                  - Barrier
                  - Shield_information_barriers
                  - Shield_information_barrier_id
                  - Change_status
                description: |-
                  Creates a shield information barrier to
                  separate individuals/groups within the same
                  firm and prevents confidential information passing b
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: invalid-ref
              message: '''#/components/schemas/Enterprise--Base'' does not exist'
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/shield-information-barriers-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/shield-information-barriers-openapi-api-evangelist-ratings.yml
  - aid: box:box-shield-information-barrier-reports-api
    name: Box Shield Information Barrier Reports API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Shield Information Barrier Reports API
          paths:
            /shield_information_barrier_reports:
              get:
                summary: List shield information barrier reports
                tags:
                  - List
                  - Shield
                  - Information
                  - Barrier
                  - Reports
                  - Shield_information_barrier_reports
                description: Lists shield information barrier reports.
              post:
                summary: Create shield information barrier report
                tags:
                  - Create
                  - Shield
                  - Information
                  - Barrier
                  - Report
                  - Shield_information_barrier_reports
                description: >-
                  Creates a shield information barrier report for a given
                  barrier.
            /shield_information_barrier_reports/{shield_information_barrier_report_id}:
              get:
                summary: Get shield information barrier report by ID
                tags:
                  - Get
                  - Shield
                  - Information
                  - Barrier
                  - Report
                  - By
                  - Shield_information_barrier_reports
                  - Shield_information_barrier_report_id
                description: Retrieves a shield information barrier repo
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: invalid-ref
              message: >-
                '#/components/schemas/ShieldInformationBarrierReference' does
                not exist
            - code: openapi-request-body-schema-ref-info
              message: Request Body Schema Ref
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/shield-information-barrier-reports-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/shield-information-barrier-reports-openapi-api-evangelist-ratings.yml
  - aid: box:box-shield-information-barrier-segments-api
    name: Box Shield Information Barrier Segments API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Shield Information Barrier Segments API
          paths:
            /shield_information_barrier_segments/{shield_information_barrier_segment_id}:
              get:
                summary: Get shield information barrier segment with specified ID
                tags:
                  - Get
                  - Shield
                  - Information
                  - Barrier
                  - Segment
                  - With
                  - Specified
                  - Shield_information_barrier_segments
                  - Shield_information_barrier_segment_id
                description: >-
                  Retrieves shield information barrier segment based on provided
                  ID..
              delete:
                summary: Delete shield information barrier segment
                tags:
                  - Delete
                  - Shield
                  - Information
                  - Barrier
                  - Segment
                  - Shield_information_barrier_segments
                  - Shield_information_barrier_segment_id
                description: |-
                  Deletes the shield information barrier segment
                  based on provided ID.
              put:
                summary: Update shield information barrier segment with specified ID
                tags:
                  - Update
                  - Shield
                  - Information
                  - Barrier
                  - Segment
                  - With
                  - Specified
                  - Shield_information_barrier_segments
                  - Shield_information_barrier_segment_id
                description: >-
                  Updates the shield information barrier segment based on
                  provided ID..
            /shield_information_barrier_segments:
              get:
                summary: List shield information barrier segments
                tags:
                  - List
                  - Shield
                  - Information
                  - Barrier
                  - Segments
                  - Shield_information_barrier_segments
                  - Shield_information_barrier_segment_id
                description: |-
                  Retrieves a list of shield information barrier segment objects
                  for the specified Information Barrier ID.
              post:
                summary: Create shield information barrier segment
                tags:
                  - Create
                  - Shield
                  - Information
                  - Barrier
                  - Segment
                  - Shield_information_barrier_segments
                  - Shield_information_barrier_segment_id
                description: Creates a shield information bar
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-nullable-info
              message: Request Body Schema Properties Nullable
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: invalid-ref
              message: >-
                '#/components/schemas/ShieldInformationBarrier--Base' does not
                exist
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/shield-information-barrier-segments-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/shield-information-barrier-segments-openapi-api-evangelist-ratings.yml
  - aid: box:box-shield-information-barrier-segment-members-api
    name: Box Shield Information Barrier Segment Members API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Shield Information Barrier Segment Members API
          paths:
            /shield_information_barrier_segment_members/{shield_information_barrier_segment_member_id}:
              get:
                summary: Get shield information barrier segment member by ID
                tags:
                  - Get
                  - Shield
                  - Information
                  - Barrier
                  - Segment
                  - Member
                  - By
                  - Shield_information_barrier_segment_members
                  - Shield_information_barrier_segment_member_id
                description: |-
                  Retrieves a shield information barrier
                  segment member by its ID.
              delete:
                summary: Delete shield information barrier segment member by ID
                tags:
                  - Delete
                  - Shield
                  - Information
                  - Barrier
                  - Segment
                  - Member
                  - By
                  - Shield_information_barrier_segment_members
                  - Shield_information_barrier_segment_member_id
                description: |-
                  Deletes a shield information barrier
                  segment member based on provided ID.
            /shield_information_barrier_segment_members:
              get:
                summary: List shield information barrier segment members
                tags:
                  - List
                  - Shield
                  - Information
                  - Barrier
                  - Segment
                  - Members
                  - Shield_information_barrier_segment_members
                  - Shield_information_barrier_segment_member_id
                description: |-
                  Lists shield information barrier segment members
                  based on provided segment IDs.
              post:
                summary: Create shield information barrier segment member
                tags:
                  - Create
                  - Shield
                  - Information
                  - Barrier
                  - Segment
                  - Member
                  - Shield_information_barrier_segment_members
                  - Shield_information_barrier_segment_member_id
                description: Creates a new shield information barrier seg
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: invalid-ref
              message: >-
                '#/components/schemas/ShieldInformationBarrier--Base' does not
                exist
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/shield-information-barrier-segment-members-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/shield-information-barrier-segment-members-openapi-api-evangelist-ratings.yml
  - aid: box:box-shield-information-barrier-segment-restrictions-api
    name: Box Shield Information Barrier Segment Restrictions API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Shield Information Barrier Segment Restrictions API
          paths:
            /shield_information_barrier_segment_restrictions/{shield_information_barrier_segment_restriction_id}:
              get:
                summary: Get shield information barrier segment restriction by ID
                tags:
                  - Get
                  - Shield
                  - Information
                  - Barrier
                  - Segment
                  - Restriction
                  - By
                  - Shield_information_barrier_segment_restrictions
                  - Shield_information_barrier_segment_restriction_id
                description: |-
                  Retrieves a shield information barrier segment
                  restriction based on provided ID.
              delete:
                summary: Delete shield information barrier segment restriction by ID
                tags:
                  - Delete
                  - Shield
                  - Information
                  - Barrier
                  - Segment
                  - Restriction
                  - By
                  - Shield_information_barrier_segment_restrictions
                  - Shield_information_barrier_segment_restriction_id
                description: |-
                  Delete shield information barrier segment restriction
                  based on provided ID.
            /shield_information_barrier_segment_restrictions:
              get:
                summary: List shield information barrier segment restrictions
                tags:
                  - List
                  - Shield
                  - Information
                  - Barrier
                  - Segment
                  - Restrictions
                  - Shield_information_barrier_segment_restrictions
                  - Shield_information_barrier_segment_restriction_id
                description: |-
                  Lists shield information barrier segment restrictions
                  based on provided segment ID.
              post:
                summary: Create shield information barrier segment restriction
                tags:
                  - Create
                  - Shield
                  - Information
                  - Barrier
                  - Segment
                  - Restriction
                  - Shield_information_barrier_segment_restrictions
                  - Shield_information_barrier_segment_restriction_id
                description: |-
                  Creates a shield information barrier
                  segment restric
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-length-error
              message: Info Title Length
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: invalid-ref
              message: >-
                '#/components/schemas/ShieldInformationBarrier--Base' does not
                exist
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/shield-information-barrier-segment-restrictions-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/shield-information-barrier-segment-restrictions-openapi-api-evangelist-ratings.yml
  - aid: box:box-device-pinners-api
    name: Box Device Pinners API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Device Pinners API
          paths:
            /device_pinners/{device_pinner_id}:
              get:
                summary: Get device pin
                tags:
                  - Get
                  - Device
                  - Pin
                  - Device_pinners
                  - Device_pinner_id
                description: Retrieves information about an individual device pin.
              delete:
                summary: Remove device pin
                tags:
                  - Remove
                  - Device
                  - Pin
                  - Device_pinners
                  - Device_pinner_id
                description: Deletes an individual device pin.
            /enterprises/{enterprise_id}/device_pinners:
              get:
                summary: List enterprise device pins
                tags:
                  - List
                  - Enterprise
                  - Device
                  - Pins
                  - Device_pinners
                  - Device_pinner_id
                  - Enterprises
                  - Enterprise_id
                description: |-
                  Retrieves all the device pins within an enterprise.

                  The user must have admin privileges, and the application
                  needs the "manage enterprise" scope to mak
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: invalid-ref
              message: '''#/components/schemas/User--Mini'' does not exist'
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/device-pinners-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/device-pinners-openapi-api-evangelist-ratings.yml
  - aid: box:box-enterprises-api
    name: Box Enterprises API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Enterprises API
          paths:
            /enterprises/{enterprise_id}/device_pinners:
              get:
                summary: List enterprise device pins
                tags:
                  - List
                  - Enterprise
                  - Device
                  - Pins
                  - Enterprises
                  - Enterprise_id
                  - Device_pinners
                description: |-
                  Retrieves all the device pins within an enterprise.

                  The user must have admin privileges, and the application
                  needs the "manage enterprise" scope to mak
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: invalid-ref
              message: '''#/components/schemas/DevicePinner'' does not exist'
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/enterprises-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/enterprises-openapi-api-evangelist-ratings.yml
  - aid: box:box-terms-of-services-api
    name: Box Terms Of Services API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Terms Of Services API
          paths:
            /terms_of_services:
              get:
                summary: List terms of services
                tags:
                  - List
                  - Terms
                  - Of
                  - Services
                  - Terms_of_services
                description: |-
                  Returns the current terms of service text and settings
                  for the enterprise.
              post:
                tags:
                  - Create
                  - Terms
                  - Of
                  - Service
                  - Terms_of_services
                summary: Create terms of service
                description: |-
                  Creates a terms of service for a given enterprise
                  and type of user.
            /terms_of_services/{terms_of_service_id}:
              get:
                summary: Get terms of service
                tags:
                  - Get
                  - Terms
                  - Of
                  - Service
                  - Terms_of_services
                  - Terms_of_service_id
                description: Fetches a specific terms of service.
              put:
                summary: Update terms of service
                tags:
                  - Update
                  - Terms
                  - Of
                  - Service
                  - Terms_of_services
                  - Terms_of_service_id
                description: Updates a specific ter
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: invalid-ref
              message: '''#/components/schemas/TermsOfService--Base'' does not exist'
    overlays:
      - type: APIs.io Search
        url: overlays/terms-of-services-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/terms-of-services-openapi-api-evangelist-ratings.yml
  - aid: box:box-terms-of-service-user-statuses-api
    name: Box Terms Of Service User Statuses API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Terms Of Service User Statuses API
          paths:
            /terms_of_service_user_statuses:
              get:
                summary: List terms of service user statuses
                tags:
                  - List
                  - Terms
                  - Of
                  - Service
                  - User
                  - Statuses
                  - Terms_of_service_user_statuses
                description: |-
                  Retrieves an overview of users and their status for a
                  terms of service, including Whether they have accepted
                  the terms and when.
              post:
                summary: Create terms of service status for new user
                tags:
                  - Create
                  - Terms
                  - Of
                  - Service
                  - Status
                  - For
                  - New
                  - User
                  - Terms_of_service_user_statuses
                description: Sets the status for a terms of service for a user.
            /terms_of_service_user_statuses/{terms_of_service_user_status_id}:
              put:
                summary: Update terms of service status for existing user
                tags:
                  - Update
                  - Terms
                  - Of
                  - Service
                  - Status
                  - For
                  - Existing
                  - User
                  - Terms_of_service_user_statuses
                  - Terms_of_service_user_status_id
                description: Updates the status for a terms of service
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: invalid-ref
              message: '''#/components/schemas/TermsOfService--Base'' does not exist'
    overlays:
      - type: APIs.io Search
        url: overlays/terms-of-service-user-statuses-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/terms-of-service-user-statuses-openapi-api-evangelist-ratings.yml
  - aid: box:box-collaboration-whitelist-entries-api
    name: Box Collaboration Whitelist Entries API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Collaboration Whitelist Entries API
          paths:
            /collaboration_whitelist_entries:
              get:
                summary: List allowed collaboration domains
                tags:
                  - List
                  - Allowed
                  - Collaboration
                  - Domains
                  - Collaboration_whitelist_entries
                description: >-
                  Returns the list domains that have been deemed safe to create
                  collaborations

                  for within the current enterprise.
              post:
                summary: Add domain to list of allowed collaboration domains
                tags:
                  - Add
                  - Domain
                  - To
                  - List
                  - Of
                  - Allowed
                  - Collaboration
                  - Domains
                  - Collaboration_whitelist_entries
                description: |-
                  Creates a new entry in the list of allowed domains to allow
                  collaboration for.
            /collaboration_whitelist_entries/{collaboration_whitelist_entry_id}:
              get:
                summary: Get allowed collaboration domain
                tags:
                  - Get
                  - Allowed
                  - Collaboration
                  - Domain
                  - Collaboration_whitelist_entries
                  - Collaboration_whitelist_entry_id
                description: >-
                  Returns a domain that has been deemed safe to create
                  collaborations

                  for within the current enterprise.
              delete:
                summary: Remove domain from list of allowed collaboration domains
                tags:
                  - Remove
                  - Domain
                  - From
                  - List
                  - Of
                  - Allowed
                  - Collaboration
                  - Domains
                  - Collaboration_whitelist_entries
                  - Collaboration_whitelist_entry_id
                description: >-
                  Removes a domain from the list of domains that have been
                  deemed safe to create

                  collaborations for within the current
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
    overlays:
      - type: APIs.io Search
        url: overlays/collaboration-whitelist-entries-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/collaboration-whitelist-entries-openapi-api-evangelist-ratings.yml
  - aid: box:box-collaboration-whitelist-exempt-targets-api
    name: Box Collaboration Whitelist Exempt Targets API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Collaboration Whitelist Exempt Targets API
          paths:
            /collaboration_whitelist_exempt_targets:
              get:
                summary: List users exempt from collaboration domain restrictions
                tags:
                  - List
                  - Users
                  - Exempt
                  - From
                  - Collaboration
                  - Domain
                  - Restrictions
                  - Collaboration_whitelist_exempt_targets
                description: >-
                  Returns a list of users who have been exempt from the
                  collaboration

                  domain restrictions.
              post:
                summary: Create user exemption from collaboration domain restrictions
                tags:
                  - Create
                  - User
                  - Exemption
                  - From
                  - Collaboration
                  - Domain
                  - Restrictions
                  - Collaboration_whitelist_exempt_targets
                description: >-
                  Exempts a user from the restrictions set out by the allowed
                  list of domains

                  for collaborations.
            /collaboration_whitelist_exempt_targets/{collaboration_whitelist_exempt_target_id}:
              get:
                summary: Get user exempt from collaboration domain restrictions
                tags:
                  - Get
                  - User
                  - Exempt
                  - From
                  - Collaboration
                  - Domain
                  - Restrictions
                  - Collaboration_whitelist_exempt_targets
                  - Collaboration_whitelist_exempt_target_id
                description: |-
                  Returns a users who has been exempt from the collaboration
                  domain restrictions.
              delete:
                summary: Remove user from list of users exempt from domain restrictions
                tags:
                  - Remove
                  - User
                  - From
                  - List
                  - Of
                  - Users
                  - Exempt
                  - Domain
                  - Restrictions
                  - Collaboration_whitelist_exempt_targets
                  - Collaboration_whitelist_exempt_target_id
                description: >-
                  Removes a user's exemption from the restrictions set out by
                  the allowed list

                  of domains for col
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-length-error
              message: Operation Summary Length
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: invalid-ref
              message: '''#/components/schemas/User--Mini'' does not exist'
    overlays:
      - type: APIs.io Search
        url: overlays/collaboration-whitelist-exempt-targets-openapi-search.yml
      - type: API Evangelist Ratings
        url: >-
          overlays/collaboration-whitelist-exempt-targets-openapi-api-evangelist-ratings.yml
  - aid: box:box-storage-policies-api
    name: Box Storage Policies API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Storage Policies API
          paths:
            /storage_policies:
              get:
                summary: List storage policies
                tags:
                  - List
                  - Storage
                  - Policies
                  - Storage_policies
                description: Fetches all the storage policies in the enterprise.
            /storage_policies/{storage_policy_id}:
              get:
                summary: Get storage policy
                tags:
                  - Get
                  - Storage
                  - Policy
                  - Storage_policies
                  - Storage_policy_id
                description: Fetches a specific sto
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: invalid-ref
              message: '''#/components/schemas/StoragePolicy--Mini'' does not exist'
    overlays:
      - type: APIs.io Search
        url: overlays/storage-policies-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/storage-policies-openapi-api-evangelist-ratings.yml
  - aid: box:box-storage-policy-assignments-api
    name: Box Storage Policy Assignments API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Storage Policy Assignments API
          paths:
            /storage_policy_assignments:
              get:
                summary: List storage policy assignments
                tags:
                  - List
                  - Storage
                  - Policy
                  - Assignments
                  - Storage_policy_assignments
                description: >-
                  Fetches all the storage policy assignment for an enterprise or
                  user.
              post:
                summary: Assign storage policy
                tags:
                  - Assign
                  - Storage
                  - Policy
                  - Storage_policy_assignments
                description: Creates a storage policy assignment for an enterprise or user.
            /storage_policy_assignments/{storage_policy_assignment_id}:
              get:
                summary: Get storage policy assignment
                tags:
                  - Get
                  - Storage
                  - Policy
                  - Assignment
                  - Storage_policy_assignments
                  - Storage_policy_assignment_id
                description: Fetches a specific storage policy assignment.
              put:
                summary: Update storage policy assignment
                tags:
                  - Update
                  - Storage
                  - Policy
                  - Assignment
                  - Storage_policy_assignments
                  - Storage_policy_assignment_id
                description: Updates a specific storage policy assignment.
              delete:
                summary: Unassign storage policy
                tags:
                  - Unassign
                  - Storage
                  - Policy
                  - Storage_policy_assignments
                  - Storage_policy_assignment_id
                description: |-
                  Delete a storage policy assignment.

                  Deleting a storage policy assignment on a user
                  will have the user inherit the enterprise's default
                  storage policy.

                  There is a rate limit for calling this endpoint of only
                  twice per user in a 24 hour
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-400-status-code-warn
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: openapi-schema-properties-type-error
              message: Schema Properties Type
            - code: openapi-schema-properties-allof-info
              message: Schema Properties AllOf
            - code: invalid-ref
              message: '''#/components/schemas/StoragePolicy--Mini'' does not exist'
    overlays:
      - type: APIs.io Search
        url: overlays/storage-policy-assignments-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/storage-policy-assignments-openapi-api-evangelist-ratings.yml
  - aid: box:box-zip-downloads-api
    name: Box Zip Downloads API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Zip Downloads API
          paths:
            /zip_downloads:
              post:
                summary: Create zip download
                tags:
                  - Create
                  - Zip
                  - Download
                  - Zip_downloads
                description: >-
                  Creates a request to download multiple files and folders as a
                  single `zip`

                  archive file. This API does not return the archive but instead
                  performs all

                  the checks to ensure that the user has access to all the
                  items, and then

                  returns a `download_url` and a `status_url` that can be used
                  to download the

                  archive.


                  The limit for an archive is either the Account's upload limit
                  or

                  10,000 files, whichever is met first.


                  **Note**: Downloading a large file can be

                  affected by various

                  factors such as distance, network latency,

                  bandwidth, and congestion, as well as packet loss

                  ratio and current server load.

                  For these reasons we recommend that a maximum ZIP archive

                  total size does not exceed 25GB.
            /zip_downloads/{zip_download_id}/content:
              get:
                summary: Download zip archive
                tags:
                  - Download
                  - Zip
                  - Archive
                  - Zip_downloads
                  - Zip_download_id
                  - Content
                description: >-
                  Returns the contents of a `zip` archive in binary format. This
                  URL does not

                  require any form of authentication and could be used in a
                  user's browser to

                  download the archive to a user's device.


                  By default, this URL is only valid for a few seconds from the
                  creation of

                  the request for this archive. Once a download has started it
                  can not be

                  stopped and resumed, instead a new request for a zip archive
                  would need to

                  be created.


                  The URL of this endpoint should not be considered as fixed.
                  Instead, use

                  the [Create zip download](e://post_zip_downloads) API to
                  request to create a

                  `zip` archive, and then follow the `download_url` field in the
                  response to

                  this endpoint.
            /zip_downloads/{zip_download_id}/status:
              get:
                summary: Get zip download status
                tags:
                  - Get
                  - Zip
                  - Download
                  - Status
                  - Zip_downloads
                  - Zip_download_id
                  - Content
                  - Status
                description: >-
                  Returns the download status of a `zip` archive, allowing an
                  application to

                  inspect the progress of the download as well as the number of
                  items that

                  might have been skipped.


                  This endpoint can only be accessed once the download has
                  started.

                  Subsequently this endpoint is valid for 12 hours from the
                  start of the

                  download.


                  The URL of this endpoint should not be considered as fixed.
                  Instead, use

                  the [Create zip download](e://post_zip_downloads) API to
                  request to create a

                  `zip` archive, and then follow the `status_url` field in the
                  response to

                  th
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: invalid-ref
              message: '''#/components/schemas/ZipDownloadRequest'' does not exist'
            - code: openapi-request-body-schema-ref-info
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-info
              message: Operation Security Definition
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-error
              message: JSON Media Type GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/zip-downloads-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/zip-downloads-openapi-api-evangelist-ratings.yml
  - aid: box:box-sign-requests-api
    name: Box Sign Requests API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Sign Requests API
          paths:
            /sign_requests/{sign_request_id}/cancel:
              post:
                summary: Cancel sign request
                tags:
                  - Cancel
                  - Sign
                  - Request
                  - Sign_requests
                  - Sign_request_id
                  - Cancel
                description: Cancels a sign request.
            /sign_requests/{sign_request_id}/resend:
              post:
                summary: Resend sign request
                tags:
                  - Resend
                  - Sign
                  - Request
                  - Sign_requests
                  - Sign_request_id
                  - Cancel
                  - Resend
                description: Resends a sign request email to all outstanding signers.
            /sign_requests/{sign_request_id}:
              get:
                summary: Get sign request by ID
                tags:
                  - Get
                  - Sign
                  - Request
                  - By
                  - Sign_requests
                  - Sign_request_id
                  - Cancel
                  - Resend
                description: Gets a sign request by ID.
            /sign_requests:
              get:
                summary: List sign requests
                tags:
                  - List
                  - Sign
                  - Requests
                  - Sign_requests
                  - Sign_request_id
                  - Cancel
                  - Resend
                description: >-
                  Gets sign requests created by a user. If the `sign_files`
                  and/or

                  `parent_folder` are deleted, the sign request will not return
                  in the list.
              post:
                summary: Create sign request
                tags:
                  - Create
                  - Sign
                  - Request
                  - Sign_requests
                  - Sign_request_id
                  - Cancel
                  - Resend
                description: >-
                  Creates a sign request. This involves preparing a document for
                  signing and

                  sending the sign request
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-request-body-on-post-error
              message: Request Body POST
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-400-status-code-warn
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: invalid-ref
              message: '''#/components/schemas/SignRequestCreateRequest'' does not exist'
            - code: openapi-request-body-schema-ref-info
              message: Request Body Schema Ref
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/sign-requests-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/sign-requests-openapi-api-evangelist-ratings.yml
  - aid: box:box-workflows-api
    name: Box Workflows API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Workflows API
          paths:
            /workflows:
              get:
                summary: List workflows
                tags:
                  - List
                  - Workflows
                  - Workflows
                description: >-
                  Returns list of workflows that act on a given `folder ID`, and

                  have a flow with a trigger type of `WORKFLOW_MANUAL_START`.


                  You application must be authorized to use the `Manage Box
                  Relay` application

                  scope within the developer console in to use this endpoint.
            /workflows/{workflow_id}/start:
              post:
                summary: Starts workflow based on request body
                tags:
                  - Starts
                  - Workflow
                  - Based
                  - 'On'
                  - Request
                  - Body
                  - Workflows
                  - Workflow_id
                  - Start
                description: >-
                  Initiates a flow with a trigger type of
                  `WORKFLOW_MANUAL_START`.


                  You application must be authorized to use the `Manage Box
                  Relay` application

                  scope within the develo
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: invalid-ref
              message: '''#/components/schemas/Workflow'' does not exist'
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/workflows-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/workflows-openapi-api-evangelist-ratings.yml
  - aid: box:box-sign-templates-api
    name: Box Sign Templates API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Sign Templates API
          paths:
            /sign_templates:
              get:
                summary: List Box Sign templates
                tags:
                  - List
                  - Box
                  - Sign
                  - Templates
                  - Sign_templates
                description: Gets Box Sign templates created by a user.
            /sign_templates/{template_id}:
              get:
                summary: Get Box Sign template by ID
                tags:
                  - Get
                  - Box
                  - Sign
                  - Template
                  - By
                  - Sign_templates
                  - Template_id
                description: Fetches details of a specific Box Si
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-400-status-code-warn
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-warn
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
            - code: invalid-ref
              message: '''#/components/schemas/Folder--Mini'' does not exist'
    overlays:
      - type: APIs.io Search
        url: overlays/sign-templates-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/sign-templates-openapi-api-evangelist-ratings.yml
  - aid: box:box-integration-mappings-api
    name: Box Integration Mappings API
    description: Needs a description
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.box.com/
    baseURL: https://api.example.com
    tags: []
    properties:
      - type: OpenAPI
        url: https://developer.box.com/
      - type: OpenAPI
        data:
          openapi: 3.1.0
          info:
            title: Box Integration Mappings API
          paths:
            /integration_mappings/slack:
              get:
                summary: List Slack integration mappings
                tags:
                  - List
                  - Slack
                  - Integration
                  - Mappings
                  - Integration_mappings
                  - Slack
                description: >-
                  Lists [Slack integration
                  mappings](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack)
                  in a users' enterprise.


                  You need Admin or Co-Admin role to

                  use this endpoint.
              post:
                summary: Create Slack integration mapping
                tags:
                  - Create
                  - Slack
                  - Integration
                  - Mapping
                  - Integration_mappings
                  - Slack
                description: >-
                  Creates a [Slack integration
                  mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack)

                  by mapping a Slack channel to a Box item.


                  You need Admin or Co-Admin role to

                  use this endpoint.
            /integration_mappings/slack/{integration_mapping_id}:
              put:
                summary: Update Slack integration mapping
                tags:
                  - Update
                  - Slack
                  - Integration
                  - Mapping
                  - Integration_mappings
                  - Slack
                  - Integration_mapping_id
                description: >-
                  Updates a [Slack integration
                  mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).

                  Supports updating the Box folder ID and options.


                  You need Admin or Co-Admin role to

                  use this endpoint.
              delete:
                summary: Delete Slack integration mapping
                tags:
                  - Delete
                  - Slack
                  - Integration
                  - Mapping
                  - Integration_mappings
                  - Slack
                  - Integration_mapping_id
                description: >-
                  Deletes a [Slack integration
                  mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).



                  You need Admin or Co-Admin role to

                  use th
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-tags-object-error
              message: Tag Object
            - code: openapi-info-contact-error
              message: Contact Object
            - code: openapi-info-license-error
              message: License Object
            - code: openapi-info-terms-of-service-error
              message: Terms of Service
            - code: openapi-info-version-error
              message: Info Version
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-no-api-in-path-error
              message: No API in Path
            - code: openapi-no-path-trailing-slash-info
              message: Path Trailing Slash
            - code: openapi-path-description-warn
              message: Path Description
            - code: openapi-version-in-path-info
              message: Version in Path
            - code: openapi-no-request-body-on-get-info
              message: GET Request Body
            - code: openapi-operation-security-definitions-error
              message: Operation Security Definition
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-summary-info
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-query-names-camel-case-error
              message: Parameter Query Name Camel Case
            - code: openapi-parameters-query-names-snake-case-error
              message: Parameter Query Name Snake Case
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-response-get-500-status-code-error
              message: 500 Status Code for GET Responses
            - code: openapi-response-get-200-status-code-info
              message: GET Response Has 200 Status Code
            - code: openapi-responses-examples-error
              message: Schema COULD have an example.
            - code: openapi-response-get-200-content-info
              message: GET Content
            - code: openapi-response-get-200-media-type-info
              message: JSON Media Type GET
            - code: openapi-response-get-200-media-type-schema-info
              message: Schema GET
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
            - code: openapi-response-get-200-schema-ref-warn
              message: GET Response 200 Schema Ref
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-response-get-404-status-code-info
              message: 404 Status Code for GET Responses
            - code: openapi-response-get-default-status-code-info
              message: Response Has Default Status Code
            - code: openapi-response-get-default-content-info
              message: Default Content
            - code: openapi-response-get-default-media-type-info
              message: JSON Media Type Default
            - code: openapi-response-get-default-media-type-schema-info
              message: Schema Default
            - code: openapi-response-get-default-schema-ref-warn
              message: Default Response Schema Ref
            - code: openapi-request-body-on-post-info
              message: Request Body POST
            - code: openapi-request-body-content-on-post-info
              message: Request Body Content POST
            - code: openapi-request-body-have-content-info
              message: Request Body Content
            - code: openapi-request-body-have-application-json-info
              message: Request Body Application JSON
            - code: openapi-request-body-json-media-type-on-post-info
              message: JSON Media Type POST
            - code: openapi-request-body-have-schema-info
              message: Request Body Schema
            - code: invalid-ref
              message: >-
                '#/components/schemas/IntegrationMappingSlackCreateRequest' does
                not exist
            - code: openapi-request-body-schema-ref-info
              message: Request Body Schema Ref
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-201-status-code-info
              message: POST 201 Status Code
            - code: openapi-response-get-201-content-info
              message: POST Content
            - code: openapi-response-post-201-media-type-info
              message: JSON Media Type POST
            - code: openapi-response-post-201-media-type-schema-info
              message: Schema POST
            - code: openapi-response-post-201-schema-components-warn
              message: GET Response 201 Schema Components
            - code: openapi-response-post-201-schema-ref-error
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-201-schema-ref-info
              message: GET Response 201 Schema Ref
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-response-post-404-status-code-info
              message: 404 Status Code for POST Responses
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-request-body-on-put-info
              message: Request Body PUT
            - code: openapi-request-body-content-on-put-info
              message: Request Body Content PUT
            - code: openapi-request-body-json-media-type-on-put-error
              message: JSON Media Type POSPUTT
            - code: openapi-request-body-json-media-type-on-put-info
              message: JSON Media Type PUT
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-type-error
              message: Request Body Schema Properties Type
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-response-put-204-status-code-error
              message: PUT 204 Status Code
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-response-put-404-status-code-info
              message: 404 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-400-status-code-warn
              message: 400 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-204-status-code-info
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-info
              message: 404 Status Code for DELETE Responses
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
            - code: openapi-schema-description-info
              message: Schemas has a description.
            - code: openapi-schema-properties-format-error
              message: Schema Properties Format
            - code: openapi-schema-properties-names-pascal-case-error
              message: Schema Property Names Pascal Case
            - code: openapi-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-schema-properties-pii-info
              message: Schema PII
            - code: openapi-schema-properties-enum-info
              message: Schema Property Enum
            - code: openapi-schema-properties-enum-casing-error
              message: Schema Property Enum Casing
            - code: openapi-schema-properties-nullable-error
              message: Schema Properties Format
            - code: openapi-schema-properties-type-info
              message: Schema Properties Format
            - code: openapi-schema-properties-names-camel-case-error
              message: Schema Property Names Camel Case
            - code: openapi-schema-properties-nullable-info
              message: Schema Properties Nullable
    overlays:
      - type: APIs.io Search
        url: overlays/integration-mappings-openapi-search.yml
      - type: API Evangelist Ratings
        url: overlays/integration-mappings-openapi-api-evangelist-ratings.yml
common:
  - type: Blog
    url: https://medium.com/box-developer-blog
  - type: Newsletter
    url: https://developer.box.com/newsletter/
  - type: Change Log
    url: https://developer.box.com/changelog/
  - type: Samples
    url: https://github.com/box/samples
  - type: Forum
    url: >-
      https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
  - type: Status
    url: https://status.box.com/
  - type: Feedback
    url: https://pulse.box.com/forums/909778-product-feedback?category_id=330838
  - type: Login
    url: https://account.box.com/login
  - type: Pricing
    url: https://www.box.com/pricing
  - type: Node SDK
    url: https://github.com/box/box-node-sdk
  - type: Java SDK
    url: https://github.com/box/box-java-sdk
  - type: Python SDK
    url: https://github.com/box/box-python-sdk
  - type: .NET SDK
    url: https://github.com/box/box-windows-sdk-v2
  - type: iOS Content SDK
    url: https://github.com/box/box-ios-sdk
  - type: CLI
    url: https://github.com/box/boxcli
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
---