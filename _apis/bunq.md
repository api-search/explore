---
name: Bunq
description: >-
  We offer mobile banking that makes life easy—wherever, whenever. Join us and
  discover a simple, sustainable, and user-centered way of banking that makes
  everyday finances 100% hassle-free.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/bunq.yml
created: 2023/11/13
modified: 2023/11/13
specificationVersion: '0.16'
tags:
  - APIs
  - Banks
  - Banking
  - PSD2
apis:
  - name: Bunq API
    description: >-
      We offer mobile banking that makes life easy—wherever, whenever. Join us
      and discover a simple, sustainable, and user-centered way of banking that
      makes everyday finances 100% hassle-free.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://doc.bunq.com/
    baseURL: https://api.example.com
    tags:
      - APIs
      - Banks
      - Banking
      - PSD2
    properties:
      - type: OpenAPI
        url: https://doc.bunq.com/
      - type: OpenAPI
        data:
          openapi: 3.0.0
          info:
            title: bunq API
            license:
              name: Apache 2.0
              url: https://www.apache.org/licenses/LICENSE-2.0.html
          paths:
            /activity-map-place-public/{itemId}:
              get:
                tags:
                  - activity-map-place-public
                summary: ''
                description: Public endpoint for getting the place info.
            /user/{userID}/additional-transaction-information-category:
              get:
                tags:
                  - additional-transaction-information-category
                summary: ''
                description: Get the available categories.
            /user/{userID}/additional-transaction-information-category-user-defined:
              post:
                tags:
                  - additional-transaction-information-category-user-defined
                summary: ''
                description: Manage user-defined categories.
            /user/{userID}/monetary-account/{monetary-accountID}/attachment:
              post:
                tags:
                  - attachment
                summary: ''
                description: >-
                  Create a new monetary account attachment. Create a POST
                  request with a payload that contains the binary representation
                  of the file, without any JSON wrapping. Make sure you define
                  the MIME type (i.e. image/jpeg) in the Content-Type header.
                  You are required to provide a description of the attachment
                  using the X-Bunq-Attachment-Description header.
            /user/{userID}/attachment/{itemId}:
              get:
                tags:
                  - attachment
                summary: ''
                description: >-
                  Get a specific attachment. The header of the response contains
                  the content-type of the attachment.
            /attachment-public:
              post:
                tags:
                  - attachment-public
                summary: ''
                description: >-
                  Create a new public attachment. Create a POST request with a
                  payload that contains a binary representation of the file,
                  without any JSON wrapping. Make sure you define the MIME type
                  (i.e. image/jpeg, or image/png) in the Content-Type header.
                  You are required to provide a description of the attachment
                  using the X-Bunq-Attachment-Description header.
            /attachment-public/{itemId}:
              get:
                tags:
                  - attachment-public
                summary: ''
                description: >-
                  Get a specific attachment's metadata through its UUID. The
                  Content-Type header of the response will describe the MIME
                  type of the attachment file.
            /avatar:
              post:
                tags:
                  - avatar
                summary: ''
                description: >-
                  Avatars are public images used to represent you or your
                  company. Avatars are used to represent users, monetary
                  accounts and cash registers. Avatars cannot be deleted, only
                  replaced. Avatars can be updated after uploading the image you
                  would like to use through AttachmentPublic. Using the
                  attachment_public_uuid which is returned you can update your
                  Avatar. Avatars used for cash registers and company accounts
                  will be reviewed by bunq.
            /avatar/{itemId}:
              get:
                tags:
                  - avatar
                summary: ''
                description: >-
                  Avatars are public images used to represent you or your
                  company. Avatars are used to represent users, monetary
                  accounts and cash registers. Avatars cannot be deleted, only
                  replaced. Avatars can be updated after uploading the image you
                  would like to use through AttachmentPublic. Using the
                  attachment_public_uuid which is returned you can update your
                  Avatar. Avatars used for cash registers and company accounts
                  will be reviewed by bunq.
            /user/{userID}/billing-contract-subscription:
              get:
                tags:
                  - billing-contract-subscription
                summary: ''
                description: >-
                  Get all subscription billing contract for the authenticated
                  user.
            /user/{userID}/bunqme-fundraiser-profile/{itemId}:
              get:
                tags:
                  - bunqme-fundraiser-profile
                summary: ''
                description: bunq.me public profile of the user.
            /user/{userID}/bunqme-fundraiser-profile:
              get:
                tags:
                  - bunqme-fundraiser-profile
                summary: ''
                description: bunq.me public profile of the user.
            /user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{itemId}:
              get:
                tags:
                  - bunqme-fundraiser-result
                summary: ''
                description: bunq.me fundraiser result containing all payments.
            /user/{userID}/monetary-account/{monetary-accountID}/bunqme-tab:
              post:
                tags:
                  - bunqme-tab
                summary: ''
                description: >-
                  bunq.me tabs allows you to create a payment request and share
                  the link through e-mail, chat, etc. Multiple persons are able
                  to respond to the payment request and pay through bunq, iDeal
                  or SOFORT.
              get:
                tags:
                  - bunqme-tab
                summary: ''
                description: >-
                  bunq.me tabs allows you to create a payment request and share
                  the link through e-mail, chat, etc. Multiple persons are able
                  to respond to the payment request and pay through bunq, iDeal
                  or SOFORT.
            /user/{userID}/monetary-account/{monetary-accountID}/bunqme-tab/{itemId}:
              put:
                tags:
                  - bunqme-tab
                summary: ''
                description: >-
                  bunq.me tabs allows you to create a payment request and share
                  the link through e-mail, chat, etc. Multiple persons are able
                  to respond to the payment request and pay through bunq, iDeal
                  or SOFORT.
              get:
                tags:
                  - bunqme-tab
                summary: ''
                description: >-
                  bunq.me tabs allows you to create a payment request and share
                  the link through e-mail, chat, etc. Multiple persons are able
                  to respond to the payment request and pay through bunq, iDeal
                  or SOFORT.
            /user/{userID}/monetary-account/{monetary-accountID}/bunqme-tab-result-response/{itemId}:
              get:
                tags:
                  - bunqme-tab-result-response
                summary: ''
                description: >-
                  Used to view bunq.me TabResultResponse objects belonging to a
                  tab. A TabResultResponse is an object that holds details on a
                  tab which has been paid from the provided monetary account.
            /user/{userID}/oauth-client/{oauth-clientID}/callback-url/{itemId}:
              get:
                tags:
                  - callback-url
                summary: ''
                description: Used for managing OAuth Client Callback URLs.
              put:
                tags:
                  - callback-url
                summary: ''
                description: Used for managing OAuth Client Callback URLs.
              delete:
                tags:
                  - callback-url
                summary: ''
                description: Used for managing OAuth Client Callback URLs.
            /user/{userID}/oauth-client/{oauth-clientID}/callback-url:
              post:
                tags:
                  - callback-url
                summary: ''
                description: Used for managing OAuth Client Callback URLs.
              get:
                tags:
                  - callback-url
                summary: ''
                description: Used for managing OAuth Client Callback URLs.
            /user/{userID}/card/{itemId}:
              put:
                tags:
                  - card
                summary: ''
                description: >-
                  Update the card details. Allow to change pin code, status,
                  limits, country permissions and the monetary account connected
                  to the card. When the card has been received, it can be also
                  activated through this endpoint.
              get:
                tags:
                  - card
                summary: ''
                description: Return the details of a specific card.
            /user/{userID}/card:
              get:
                tags:
                  - card
                summary: ''
                description: Return all the cards available to the user.
            /user/{userID}/card-batch:
              post:
                tags:
                  - card-batch
                summary: ''
                description: Used to update multiple cards in a batch.
            /user/{userID}/card-batch-replace:
              post:
                tags:
                  - card-batch-replace
                summary: ''
                description: Used to replace multiple cards in a batch.
            /user/{userID}/card-credit:
              post:
                tags:
                  - card-credit
                summary: ''
                description: Create a new credit card request.
            /user/{userID}/card-debit:
              post:
                tags:
                  - card-debit
                summary: ''
                description: Create a new debit card request.
            /user/{userID}/card-name:
              get:
                tags:
                  - card-name
                summary: ''
                description: Return all the accepted card names for a specific user.
            /user/{userID}/certificate-pinned:
              post:
                tags:
                  - certificate-pinned
                summary: ''
                description: Pin the certificate chain.
              get:
                tags:
                  - certificate-pinned
                summary: ''
                description: List all the pinned certificate chain for the given user.
            /user/{userID}/certificate-pinned/{itemId}:
              delete:
                tags:
                  - certificate-pinned
                summary: ''
                description: Remove the pinned certificate chain with the specific ID.
              get:
                tags:
                  - certificate-pinned
                summary: ''
                description: Get the pinned certificate chain with the specified ID.
            /user/{userID}/challenge-request/{itemId}:
              get:
                tags:
                  - challenge-request
                summary: ''
                description: Endpoint for apps to fetch a challenge request.
              put:
                tags:
                  - challenge-request
                summary: ''
                description: Endpoint for apps to fetch a challenge request.
            /user/{userID}/company:
              post:
                tags:
                  - company
                summary: ''
                description: Create and manage companies.
              get:
                tags:
                  - company
                summary: ''
                description: Create and manage companies.
            /user/{userID}/company/{itemId}:
              get:
                tags:
                  - company
                summary: ''
                description: Create and manage companies.
              put:
                tags:
                  - company
                summary: ''
                description: Create and manage companies.
            /user/{userID}/confirmation-of-funds:
              post:
                tags:
                  - confirmation-of-funds
                summary: ''
                description: Used to confirm availability of funds on an account.
            /user/{userID}/chat-conversation/{chat-conversationID}/attachment/{attachmentID}/content:
              get:
                tags:
                  - content
                summary: ''
                description: Get the raw content of a specific attachment.
            /user/{userID}/monetary-account/{monetary-accountID}/attachment/{attachmentID}/content:
              get:
                tags:
                  - content
                summary: ''
                description: Get the raw content of a specific attachment.
            /attachment-public/{attachment-publicUUID}/content:
              get:
                tags:
                  - content
                summary: ''
                description: Get the raw content of a specific attachment.
            /user/{userID}/attachment/{attachmentID}/content:
              get:
                tags:
                  - content
                summary: ''
                description: Get the raw content of a specific attachment.
            /user/{userID}/export-annual-overview/{export-annual-overviewID}/content:
              get:
                tags:
                  - content
                summary: ''
                description: Used to retrieve the raw content of an annual overview.
            /user/{userID}/monetary-account/{monetary-accountID}/export-rib/{export-ribID}/content:
              get:
                tags:
                  - content
                summary: ''
                description: Used to retrieve the raw content of an RIB.
            /user/{userID}/card/{cardID}/export-statement-card/{export-statement-cardID}/content:
              get:
                tags:
                  - content
                summary: ''
                description: >-
                  Fetch the raw content of a card statement export. The returned
                  file format could be CSV or PDF depending on the statement
                  format specified during the statement creation. The doc won't
                  display the response of a request to get the content of a
                  statement export.
            /user/{userID}/monetary-account/{monetary-accountID}/customer-statement/{customer-statementID}/content:
              get:
                tags:
                  - content
                summary: ''
                description: >-
                  Fetch the raw content of a statement export. The returned file
                  format could be MT940, CSV or PDF depending on the statement
                  format specified during the statement creation. The doc won't
                  display the response of a request to get the content of a
                  statement export.
            /user/{userID}/monetary-account/{monetary-accountID}/event/{eventID}/statement/{statementID}/content:
              get:
                tags:
                  - content
                summary: ''
                description: Fetch the raw content of a payment statement export.
            /user/{userID}/credential-password-ip/{itemId}:
              get:
                tags:
                  - credential-password-ip
                summary: ''
                description: >-
                  Create a credential of a user for server authentication, or
                  delete the credential of a user for server authentication.
            /user/{userID}/credential-password-ip:
              get:
                tags:
                  - credential-password-ip
                summary: ''
                description: >-
                  Create a credential of a user for server authentication, or
                  delete the credential of a user for server authentication.
            /user/{userID}/currency-cloud-beneficiary:
              post:
                tags:
                  - currency-cloud-beneficiary
                summary: ''
                description: Endpoint to manage CurrencyCloud beneficiaries.
              get:
                tags:
                  - currency-cloud-beneficiary
                summary: ''
                description: Endpoint to manage CurrencyCloud beneficiaries.
            /user/{userID}/currency-cloud-beneficiary/{itemId}:
              get:
                tags:
                  - currency-cloud-beneficiary
                summary: ''
                description: Endpoint to manage CurrencyCloud beneficiaries.
            /user/{userID}/currency-cloud-beneficiary-requirement:
              get:
                tags:
                  - currency-cloud-beneficiary-requirement
                summary: ''
                description: Endpoint to list requirements for CurrencyCloud beneficiaries.
            /user/{userID}/monetary-account/{monetary-accountID}/currency-cloud-payment-quote:
              post:
                tags:
                  - currency-cloud-payment-quote
                summary: ''
                description: Endpoint for managing currency conversions.
            /user/{userID}/monetary-account/{monetary-accountID}/currency-conversion:
              get:
                tags:
                  - currency-conversion
                summary: ''
                description: Endpoint for managing currency conversions.
            /user/{userID}/monetary-account/{monetary-accountID}/currency-conversion/{itemId}:
              get:
                tags:
                  - currency-conversion
                summary: ''
                description: Endpoint for managing currency conversions.
            /user/{userID}/monetary-account/{monetary-accountID}/currency-conversion-quote:
              post:
                tags:
                  - currency-conversion-quote
                summary: ''
                description: Endpoint to create a quote for currency conversions.
            /user/{userID}/monetary-account/{monetary-accountID}/currency-conversion-quote/{itemId}:
              get:
                tags:
                  - currency-conversion-quote
                summary: ''
                description: Endpoint to create a quote for currency conversions.
              put:
                tags:
                  - currency-conversion-quote
                summary: ''
                description: Endpoint to create a quote for currency conversions.
            /user/{userID}/monetary-account/{monetary-accountID}/customer-statement:
              post:
                tags:
                  - customer-statement
                summary: ''
                description: >-
                  Used to create new and read existing statement exports.
                  Statement exports can be created in either CSV, MT940 or PDF
                  file format.
              get:
                tags:
                  - customer-statement
                summary: ''
                description: >-
                  Used to create new and read existing statement exports.
                  Statement exports can be created in either CSV, MT940 or PDF
                  file format.
            /user/{userID}/monetary-account/{monetary-accountID}/customer-statement/{itemId}:
              get:
                tags:
                  - customer-statement
                summary: ''
                description: >-
                  Used to create new and read existing statement exports.
                  Statement exports can be created in either CSV, MT940 or PDF
                  file format.
              delete:
                tags:
                  - customer-statement
                summary: ''
                description: >-
                  Used to create new and read existing statement exports.
                  Statement exports can be created in either CSV, MT940 or PDF
                  file format.
            /user/{userID}/monetary-account/{monetary-accountID}/payment-auto-allocate/{payment-auto-allocateID}/definition:
              get:
                tags:
                  - definition
                summary: ''
                description: List all the definitions in a payment auto allocate.
            /device/{itemId}:
              get:
                tags:
                  - device
                summary: ''
                description: >-
                  Get a single Device. A Device is either a DevicePhone or a
                  DeviceServer.
            /device:
              get:
                tags:
                  - device
                summary: ''
                description: >-
                  Get a collection of Devices. A Device is either a DevicePhone
                  or a DeviceServer.
            /device-server:
              post:
                tags:
                  - device-server
                summary: ''
                description: >-
                  Create a new DeviceServer providing the installation token in
                  the header and signing the request with the private part of
                  the key you used to create the installation. The API Key that
                  you are using will be bound to the IP address of the
                  DeviceServer which you have created.<br/><br/>Using a Wildcard
                  API Key gives you the freedom to make API calls even if the IP
                  address has changed after the POST
                  device-server.<br/><br/>Find out more at this link <a
                  href="https:/bunq.com/en/apikey-dynamic-ip"
                  target="_blank">https:/bunq.com/en/apikey-dynamic-ip</a>.
              get:
                tags:
                  - device-server
                summary: ''
                description: Get a collection of all the DeviceServers you have created.
            /device-server/{itemId}:
              get:
                tags:
                  - device-server
                summary: ''
                description: Get one of your DeviceServers.
            /user/{userID}/monetary-account/{monetary-accountID}/draft-payment:
              post:
                tags:
                  - draft-payment
                summary: ''
                description: Create a new DraftPayment.
              get:
                tags:
                  - draft-payment
                summary: ''
                description: >-
                  Get a listing of all DraftPayments from a given
                  MonetaryAccount.
            /user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{itemId}:
              put:
                tags:
                  - draft-payment
                summary: ''
                description: Update a DraftPayment.
              get:
                tags:
                  - draft-payment
                summary: ''
                description: Get a specific DraftPayment.
            /user/{userID}/event/{itemId}:
              get:
                tags:
                  - event
                summary: ''
                description: Get a specific event for a given user.
            /user/{userID}/event:
              get:
                tags:
                  - event
                summary: ''
                description: >-
                  Get a collection of events for a given user. You can add query
                  the parameters monetary_account_id, status and/or
                  display_user_event to filter the response. When
                  monetary_account_id={id,id} is provided only events that
                  relate to these monetary account ids are returned. When
                  status={AWAITING_REPLY/FINALIZED} is provided the response
                  only contains events with the status AWAITING_REPLY or
                  FINALIZED. When display_user_event={true/false} is set to
                  false user events are excluded from the response, when not
                  provided user events are displayed. User events are events
                  that are not related to a monetary account (for example:
                  connect invites).
            /user/{userID}/export-annual-overview:
              post:
                tags:
                  - export-annual-overview
                summary: ''
                description: >-
                  Create a new annual overview for a specific year. An overview
                  can be generated only for a past year.
              get:
                tags:
                  - export-annual-overview
                summary: ''
                description: List all the annual overviews for a user.
            /user/{userID}/export-annual-overview/{itemId}:
              get:
                tags:
                  - export-annual-overview
                summary: ''
                description: Get an annual overview for a user by its id.
              delete:
                tags:
                  - export-annual-overview
                summary: ''
                description: >-
                  Used to create new and read existing annual overviews of all
                  the user's monetary accounts. Once created, annual overviews
                  can be downloaded in PDF format via the
                  'export-annual-overview/{id}/content' endpoint.
            /user/{userID}/monetary-account/{monetary-accountID}/export-rib:
              post:
                tags:
                  - export-rib
                summary: ''
                description: Create a new RIB.
              get:
                tags:
                  - export-rib
                summary: ''
                description: List all the RIBs for a monetary account.
            /user/{userID}/monetary-account/{monetary-accountID}/export-rib/{itemId}:
              get:
                tags:
                  - export-rib
                summary: ''
                description: Get a RIB for a monetary account by its id.
              delete:
                tags:
                  - export-rib
                summary: ''
                description: >-
                  Used to create new and read existing RIBs of a monetary
                  account
            /user/{userID}/card/{cardID}/export-statement-card/{itemId}:
              get:
                tags:
                  - export-statement-card
                summary: ''
                description: >-
                  Used to create new and read existing card statement exports.
                  Statement exports can be created in either CSV or PDF file
                  format.
            /user/{userID}/card/{cardID}/export-statement-card:
              get:
                tags:
                  - export-statement-card
                summary: ''
                description: >-
                  Used to create new and read existing card statement exports.
                  Statement exports can be created in either CSV or PDF file
                  format.
            /user/{userID}/card/{cardID}/export-statement-card-csv:
              post:
                tags:
                  - export-statement-card-csv
                summary: ''
                description: Used to serialize ExportStatementCardCsv
              get:
                tags:
                  - export-statement-card-csv
                summary: ''
                description: Used to serialize ExportStatementCardCsv
            /user/{userID}/card/{cardID}/export-statement-card-csv/{itemId}:
              get:
                tags:
                  - export-statement-card-csv
                summary: ''
                description: Used to serialize ExportStatementCardCsv
              delete:
                tags:
                  - export-statement-card-csv
                summary: ''
                description: Used to serialize ExportStatementCardCsv
            /user/{userID}/card/{cardID}/export-statement-card-pdf:
              post:
                tags:
                  - export-statement-card-pdf
                summary: ''
                description: Used to serialize ExportStatementCardPdf
              get:
                tags:
                  - export-statement-card-pdf
                summary: ''
                description: Used to serialize ExportStatementCardPdf
            /user/{userID}/card/{cardID}/export-statement-card-pdf/{itemId}:
              get:
                tags:
                  - export-statement-card-pdf
                summary: ''
                description: Used to serialize ExportStatementCardPdf
              delete:
                tags:
                  - export-statement-card-pdf
                summary: ''
                description: Used to serialize ExportStatementCardPdf
            /user/{userID}/feature-announcement/{itemId}:
              get:
                tags:
                  - feature-announcement
                summary: ''
                description: view for updating the feature display.
            /user/{userID}/card/{cardID}/generated-cvc2:
              post:
                tags:
                  - generated-cvc2
                summary: ''
                description: Generate a new CVC2 code for a card.
              get:
                tags:
                  - generated-cvc2
                summary: ''
                description: Get all generated CVC2 codes for a card.
            /user/{userID}/card/{cardID}/generated-cvc2/{itemId}:
              get:
                tags:
                  - generated-cvc2
                summary: ''
                description: Get the details for a specific generated CVC2 code.
              put:
                tags:
                  - generated-cvc2
                summary: ''
                description: Endpoint for generating and retrieving a new CVC2 code.
            /user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction:
              post:
                tags:
                  - ideal-merchant-transaction
                summary: ''
                description: >-
                  View for requesting iDEAL transactions and polling their
                  status.
              get:
                tags:
                  - ideal-merchant-transaction
                summary: ''
                description: >-
                  View for requesting iDEAL transactions and polling their
                  status.
            /user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{itemId}:
              get:
                tags:
                  - ideal-merchant-transaction
                summary: ''
                description: >-
                  View for requesting iDEAL transactions and polling their
                  status.
            /user/{userID}/insight-preference-date:
              get:
                tags:
                  - insight-preference-date
                summary: ''
                description: Used to allow users to set insight/budget preferences.
            /user/{userID}/insights:
              get:
                tags:
                  - insights
                summary: ''
                description: >-
                  Used to get insights about transactions between given time
                  range.
            /user/{userID}/insights-search:
              get:
                tags:
                  - insights-search
                summary: ''
                description: Used to get events based on time and insight category.
            /installation:
              post:
                tags:
                  - installation
                summary: ''
                description: >-
                  This is the only API call that does not require you to use the
                  "X-Bunq-Client-Authentication" and "X-Bunq-Client-Signature"
                  headers.
                   You provide the server with the public part of the key pair that you are going to use to create the value of the signature header for all future API calls. The server creates an installation for you. Store the Installation Token and ServerPublicKey from the response. This token is used in the "X-Bunq-Client-Authentication" header for the creation of a DeviceServer and SessionServer.
              get:
                tags:
                  - installation
                summary: ''
                description: >-
                  You must have an active session to make this call. This call
                  returns the Id of the the Installation you are using in your
                  session.
            /installation/{itemId}:
              get:
                tags:
                  - installation
                summary: ''
                description: >-
                  You must have an active session to make this call. This call
                  is used to check whether the Id you provide is the Id of your
                  current installation or not.
            /user/{userID}/monetary-account/{monetary-accountID}/payment-auto-allocate/{payment-auto-allocateID}/instance:
              get:
                tags:
                  - instance
                summary: ''
                description: >-
                  List all the times a users payment was automatically
                  allocated.
            /user/{userID}/monetary-account/{monetary-accountID}/payment-auto-allocate/{payment-auto-allocateID}/instance/{itemId}:
              get:
                tags:
                  - instance
                summary: ''
                description: >-
                  List all the times a users payment was automatically
                  allocated.
            /user/{userID}/monetary-account/{monetary-accountID}/invoice:
              get:
                tags:
                  - invoice
                summary: ''
                description: Used to view a bunq invoice.
            /user/{userID}/monetary-account/{monetary-accountID}/invoice/{itemId}:
              get:
                tags:
                  - invoice
                summary: ''
                description: Used to view a bunq invoice.
            /user/{userID}/invoice:
              get:
                tags:
                  - invoice
                summary: ''
                description: Used to list bunq invoices by user.
            /user/{userID}/invoice/{itemId}:
              get:
                tags:
                  - invoice
                summary: ''
                description: Used to list bunq invoices by user.
            /user/{userID}/credential-password-ip/{credential-password-ipID}/ip/{itemId}:
              get:
                tags:
                  - ip
                summary: ''
                description: >-
                  Manage the IPs which may be used for a credential of a user
                  for server authentication.
              put:
                tags:
                  - ip
                summary: ''
                description: >-
                  Manage the IPs which may be used for a credential of a user
                  for server authentication.
            /user/{userID}/credential-password-ip/{credential-password-ipID}/ip:
              post:
                tags:
                  - ip
                summary: ''
                description: >-
                  Manage the IPs which may be used for a credential of a user
                  for server authentication.
              get:
                tags:
                  - ip
                summary: ''
                description: >-
                  Manage the IPs which may be used for a credential of a user
                  for server authentication.
            /user/{userID}/legal-name:
              get:
                tags:
                  - legal-name
                summary: ''
                description: >-
                  Endpoint for getting available legal names that can be used by
                  the user.
            /user/{userID}/limit:
              get:
                tags:
                  - limit
                summary: ''
                description: Get all limits for the authenticated user.
            /user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{itemId}:
              get:
                tags:
                  - mastercard-action
                summary: ''
                description: MasterCard transaction view.
            /user/{userID}/monetary-account/{monetary-accountID}/mastercard-action:
              get:
                tags:
                  - mastercard-action
                summary: ''
                description: MasterCard transaction view.
            /user/{userID}/monetary-account/{itemId}:
              get:
                tags:
                  - monetary-account
                summary: ''
                description: Get a specific MonetaryAccount.
            /user/{userID}/monetary-account:
              get:
                tags:
                  - monetary-account
                summary: ''
                description: Get a collection of all your MonetaryAccounts.
            /user/{userID}/monetary-account-bank:
              post:
                tags:
                  - monetary-account-bank
                summary: ''
                description: Create new MonetaryAccountBank.
              get:
                tags:
                  - monetary-account-bank
                summary: ''
                description: Gets a listing of all MonetaryAccountBanks of a given user.
            /user/{userID}/monetary-account-bank/{itemId}:
              get:
                tags:
                  - monetary-account-bank
                summary: ''
                description: Get a specific MonetaryAccountBank.
              put:
                tags:
                  - monetary-account-bank
                summary: ''
                description: Update a specific existing MonetaryAccountBank.
            /user/{userID}/monetary-account-card/{itemId}:
              get:
                tags:
                  - monetary-account-card
                summary: ''
                description: Get a specific MonetaryAccountCard.
              put:
                tags:
                  - monetary-account-card
                summary: ''
                description: Update a specific existing MonetaryAccountCard.
            /user/{userID}/monetary-account-card:
              get:
                tags:
                  - monetary-account-card
                summary: ''
                description: Gets a listing of all MonetaryAccountCard of a given user.
            /user/{userID}/monetary-account-external:
              post:
                tags:
                  - monetary-account-external
                summary: ''
                description: >-
                  Endpoint for managing monetary accounts which are connected to
                  external services.
              get:
                tags:
                  - monetary-account-external
                summary: ''
                description: >-
                  Endpoint for managing monetary accounts which are connected to
                  external services.
            /user/{userID}/monetary-account-external/{itemId}:
              get:
                tags:
                  - monetary-account-external
                summary: ''
                description: >-
                  Endpoint for managing monetary accounts which are connected to
                  external services.
              put:
                tags:
                  - monetary-account-external
                summary: ''
                description: >-
                  Endpoint for managing monetary accounts which are connected to
                  external services.
            /user/{userID}/monetary-account-external-savings:
              post:
                tags:
                  - monetary-account-external-savings
                summary: ''
                description: >-
                  Endpoint for managing monetary account savings which are
                  connected to external services.
              get:
                tags:
                  - monetary-account-external-savings
                summary: ''
                description: >-
                  Endpoint for managing monetary account savings which are
                  connected to external services.
            /user/{userID}/monetary-account-external-savings/{itemId}:
              get:
                tags:
                  - monetary-account-external-savings
                summary: ''
                description: >-
                  Endpoint for managing monetary account savings which are
                  connected to external services.
              put:
                tags:
                  - monetary-account-external-savings
                summary: ''
                description: >-
                  Endpoint for managing monetary account savings which are
                  connected to external services.
            /user/{userID}/monetary-account-joint:
              post:
                tags:
                  - monetary-account-joint
                summary: ''
                description: The endpoint for joint monetary accounts.
              get:
                tags:
                  - monetary-account-joint
                summary: ''
                description: The endpoint for joint monetary accounts.
            /user/{userID}/monetary-account-joint/{itemId}:
              get:
                tags:
                  - monetary-account-joint
                summary: ''
                description: The endpoint for joint monetary accounts.
              put:
                tags:
                  - monetary-account-joint
                summary: ''
                description: The endpoint for joint monetary accounts.
            /user/{userID}/monetary-account-savings:
              post:
                tags:
                  - monetary-account-savings
                summary: ''
                description: Create new MonetaryAccountSavings.
              get:
                tags:
                  - monetary-account-savings
                summary: ''
                description: Gets a listing of all MonetaryAccountSavingss of a given user.
            /user/{userID}/monetary-account-savings/{itemId}:
              get:
                tags:
                  - monetary-account-savings
                summary: ''
                description: Get a specific MonetaryAccountSavings.
              put:
                tags:
                  - monetary-account-savings
                summary: ''
                description: Update a specific existing MonetaryAccountSavings.
            /user-company/{user-companyID}/name:
              get:
                tags:
                  - name
                summary: ''
                description: >-
                  Return all the known (trade) names for a specific user
                  company.
            /user/{userID}/monetary-account/{monetary-accountID}/adyen-card-transaction/{adyen-card-transactionID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/adyen-card-transaction/{adyen-card-transactionID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{switch-service-paymentID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{switch-service-paymentID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{bunqme-fundraiser-resultID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{bunqme-fundraiser-resultID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{draft-paymentID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{draft-paymentID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{ideal-merchant-transactionID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{ideal-merchant-transactionID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{payment-batchID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{payment-batchID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{request-inquiry-batchID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{request-inquiry-batchID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{request-inquiryID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{request-inquiryID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/request-response/{request-responseID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/request-response/{request-responseID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{schedule-instanceID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{schedule-instanceID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{schedule-payment-batchID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{schedule-payment-batchID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{schedule-paymentID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{schedule-paymentID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{sofort-merchant-transactionID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{sofort-merchant-transactionID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/whitelist/{whitelistID}/whitelist-result/{whitelist-resultID}/note-attachment:
              post:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/whitelist/{whitelistID}/whitelist-result/{whitelist-resultID}/note-attachment/{itemId}:
              put:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              delete:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
              get:
                tags:
                  - note-attachment
                summary: ''
                description: Used to manage attachment notes.
            /user/{userID}/monetary-account/{monetary-accountID}/adyen-card-transaction/{adyen-card-transactionID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/adyen-card-transaction/{adyen-card-transactionID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{switch-service-paymentID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{switch-service-paymentID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{bunqme-fundraiser-resultID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{bunqme-fundraiser-resultID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{draft-paymentID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{draft-paymentID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{ideal-merchant-transactionID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{ideal-merchant-transactionID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{payment-batchID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{payment-batchID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{request-inquiry-batchID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{request-inquiry-batchID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{request-inquiryID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{request-inquiryID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/request-response/{request-responseID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/request-response/{request-responseID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{schedule-instanceID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{schedule-instanceID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{schedule-payment-batchID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{schedule-payment-batchID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{schedule-paymentID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{schedule-paymentID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{sofort-merchant-transactionID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{sofort-merchant-transactionID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/monetary-account/{monetary-accountID}/whitelist/{whitelistID}/whitelist-result/{whitelist-resultID}/note-text:
              post:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Manage the notes for a given user.
            /user/{userID}/monetary-account/{monetary-accountID}/whitelist/{whitelistID}/whitelist-result/{whitelist-resultID}/note-text/{itemId}:
              put:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              delete:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
              get:
                tags:
                  - note-text
                summary: ''
                description: Used to manage text notes.
            /user/{userID}/notification-filter-email:
              post:
                tags:
                  - notification-filter-email
                summary: ''
                description: Manage the email notification filters for a user.
              get:
                tags:
                  - notification-filter-email
                summary: ''
                description: Manage the email notification filters for a user.
            /user/{userID}/notification-filter-failure:
              post:
                tags:
                  - notification-filter-failure
                summary: ''
                description: Manage the url notification filters for a user.
              get:
                tags:
                  - notification-filter-failure
                summary: ''
                description: Manage the url notification filters for a user.
            /user/{userID}/notification-filter-push:
              post:
                tags:
                  - notification-filter-push
                summary: ''
                description: Manage the push notification filters for a user.
              get:
                tags:
                  - notification-filter-push
                summary: ''
                description: Manage the push notification filters for a user.
            /user/{userID}/notification-filter-url:
              post:
                tags:
                  - notification-filter-url
                summary: ''
                description: Manage the url notification filters for a user.
              get:
                tags:
                  - notification-filter-url
                summary: ''
                description: Manage the url notification filters for a user.
            /user/{userID}/monetary-account/{monetary-accountID}/notification-filter-url:
              post:
                tags:
                  - notification-filter-url
                summary: ''
                description: Manage the url notification filters for a user.
              get:
                tags:
                  - notification-filter-url
                summary: ''
                description: Manage the url notification filters for a user.
            /user/{userID}/oauth-client/{itemId}:
              get:
                tags:
                  - oauth-client
                summary: ''
                description: Used for managing OAuth Clients.
              put:
                tags:
                  - oauth-client
                summary: ''
                description: Used for managing OAuth Clients.
            /user/{userID}/oauth-client:
              post:
                tags:
                  - oauth-client
                summary: ''
                description: Used for managing OAuth Clients.
              get:
                tags:
                  - oauth-client
                summary: ''
                description: Used for managing OAuth Clients.
            /user/{userID}/monetary-account/{monetary-accountID}/payment:
              post:
                tags:
                  - payment
                summary: ''
                description: Create a new Payment.
              get:
                tags:
                  - payment
                summary: ''
                description: >-
                  Get a listing of all Payments performed on a given
                  MonetaryAccount (incoming and outgoing).
            /user/{userID}/monetary-account/{monetary-accountID}/payment/{itemId}:
              get:
                tags:
                  - payment
                summary: ''
                description: Get a specific previous Payment.
            /user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/payment:
              get:
                tags:
                  - payment
                summary: ''
                description: MasterCard transaction view.
            /user/{userID}/monetary-account/{monetary-accountID}/payment-auto-allocate:
              post:
                tags:
                  - payment-auto-allocate
                summary: ''
                description: Manage a users automatic payment auto allocated settings.
              get:
                tags:
                  - payment-auto-allocate
                summary: ''
                description: Manage a users automatic payment auto allocated settings.
            /user/{userID}/monetary-account/{monetary-accountID}/payment-auto-allocate/{itemId}:
              get:
                tags:
                  - payment-auto-allocate
                summary: ''
                description: Manage a users automatic payment auto allocated settings.
              put:
                tags:
                  - payment-auto-allocate
                summary: ''
                description: Manage a users automatic payment auto allocated settings.
              delete:
                tags:
                  - payment-auto-allocate
                summary: ''
                description: Manage a users automatic payment auto allocated settings.
            /user/{userID}/payment-auto-allocate:
              get:
                tags:
                  - payment-auto-allocate
                summary: ''
                description: List a users automatic payment auto allocated settings.
            /user/{userID}/monetary-account/{monetary-accountID}/payment-batch:
              post:
                tags:
                  - payment-batch
                summary: ''
                description: >-
                  Create a payment batch by sending an array of single payment
                  objects, that will become part of the batch.
              get:
                tags:
                  - payment-batch
                summary: ''
                description: Return all the payment batches for a monetary account.
            /user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{itemId}:
              put:
                tags:
                  - payment-batch
                summary: ''
                description: >-
                  Revoke a bunq.to payment batch. The status of all the payments
                  will be set to REVOKED.
              get:
                tags:
                  - payment-batch
                summary: ''
                description: Return the details of a specific payment batch.
            /payment-service-provider-credential/{itemId}:
              get:
                tags:
                  - payment-service-provider-credential
                summary: ''
                description: Register a Payment Service Provider and provide credentials
            /payment-service-provider-credential:
              post:
                tags:
                  - payment-service-provider-credential
                summary: ''
                description: Register a Payment Service Provider and provide credentials
            /user/{userID}/payment-service-provider-draft-payment:
              post:
                tags:
                  - payment-service-provider-draft-payment
                summary: ''
                description: Manage the PaymentServiceProviderDraftPayment's for a PISP.
              get:
                tags:
                  - payment-service-provider-draft-payment
                summary: ''
                description: Manage the PaymentServiceProviderDraftPayment's for a PISP.
            /user/{userID}/payment-service-provider-draft-payment/{itemId}:
              put:
                tags:
                  - payment-service-provider-draft-payment
                summary: ''
                description: Manage the PaymentServiceProviderDraftPayment's for a PISP.
              get:
                tags:
                  - payment-service-provider-draft-payment
                summary: ''
                description: Manage the PaymentServiceProviderDraftPayment's for a PISP.
            /user/{userID}/payment-service-provider-issuer-transaction:
              post:
                tags:
                  - payment-service-provider-issuer-transaction
                summary: ''
                description: The endpoint for payment service provider issuer transactions
              get:
                tags:
                  - payment-service-provider-issuer-transaction
                summary: ''
                description: The endpoint for payment service provider issuer transactions
            /user/{userID}/payment-service-provider-issuer-transaction/{itemId}:
              get:
                tags:
                  - payment-service-provider-issuer-transaction
                summary: ''
                description: The endpoint for payment service provider issuer transactions
              put:
                tags:
                  - payment-service-provider-issuer-transaction
                summary: ''
                description: The endpoint for payment service provider issuer transactions
            /user/{userID}/invoice/{invoiceID}/pdf-content:
              get:
                tags:
                  - pdf-content
                summary: ''
                description: Get a PDF export of an invoice.
            /registry-import-splitwise-csv:
              post:
                tags:
                  - registry-import-splitwise-csv
                summary: ''
                description: >-
                  Used to upload a CSV export from Splitwise, and create a new
                  Registry from it.
            /user/{userID}/registry/{registryID}/registry-settlement:
              post:
                tags:
                  - registry-settlement
                summary: ''
                description: Create a new Slice group settlement.
              get:
                tags:
                  - registry-settlement
                summary: ''
                description: Get a listing of all Slice group settlements.
            /user/{userID}/registry/{registryID}/registry-settlement/{itemId}:
              get:
                tags:
                  - registry-settlement
                summary: ''
                description: Get a specific Slice group settlement.
            /user/{userID}/card/{cardID}/replace:
              post:
                tags:
                  - replace
                summary: ''
                description: Request a card replacement.
            /user/{userID}/monetary-account/{monetary-accountID}/request-inquiry:
              post:
                tags:
                  - request-inquiry
                summary: ''
                description: Create a new payment request.
              get:
                tags:
                  - request-inquiry
                summary: ''
                description: >-
                  Get all payment requests for a user's monetary account.
                  bunqme_share_url is always null if the counterparty is a bunq
                  user.
            /user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{itemId}:
              put:
                tags:
                  - request-inquiry
                summary: ''
                description: >-
                  Revoke a request for payment, by updating the status to
                  REVOKED.
              get:
                tags:
                  - request-inquiry
                summary: ''
                description: >-
                  Get the details of a specific payment request, including its
                  status. bunqme_share_url is always null if the counterparty is
                  a bunq user.
            /user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch:
              post:
                tags:
                  - request-inquiry-batch
                summary: ''
                description: >-
                  Create a request batch by sending an array of single request
                  objects, that will become part of the batch.
              get:
                tags:
                  - request-inquiry-batch
                summary: ''
                description: Return all the request batches for a monetary account.
            /user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{itemId}:
              put:
                tags:
                  - request-inquiry-batch
                summary: ''
                description: >-
                  Revoke a request batch. The status of all the requests will be
                  set to REVOKED.
              get:
                tags:
                  - request-inquiry-batch
                summary: ''
                description: Return the details of a specific request batch.
            /user/{userID}/monetary-account/{monetary-accountID}/request-response/{itemId}:
              put:
                tags:
                  - request-response
                summary: ''
                description: Update the status to accept or reject the RequestResponse.
              get:
                tags:
                  - request-response
                summary: ''
                description: Get the details for a specific existing RequestResponse.
            /user/{userID}/monetary-account/{monetary-accountID}/request-response:
              get:
                tags:
                  - request-response
                summary: ''
                description: Get all RequestResponses for a MonetaryAccount.
            /sandbox-user-company:
              post:
                tags:
                  - sandbox-user-company
                summary: ''
                description: Used to create a sandbox userCompany.
            /sandbox-user-person:
              post:
                tags:
                  - sandbox-user-person
                summary: ''
                description: Used to create a sandbox userPerson.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule/{itemId}:
              get:
                tags:
                  - schedule
                summary: ''
                description: >-
                  Get a specific schedule definition for a given monetary
                  account.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule:
              get:
                tags:
                  - schedule
                summary: ''
                description: >-
                  Get a collection of scheduled definition for a given monetary
                  account. You can add the parameter type to filter the
                  response. When
                  type={SCHEDULE_DEFINITION_PAYMENT,SCHEDULE_DEFINITION_PAYMENT_BATCH}
                  is provided only schedule definition object that relate to
                  these definitions are returned.
            /user/{userID}/schedule:
              get:
                tags:
                  - schedule
                summary: ''
                description: >-
                  Get a collection of scheduled definition for all accessible
                  monetary accounts of the user. You can add the parameter type
                  to filter the response. When
                  type={SCHEDULE_DEFINITION_PAYMENT,SCHEDULE_DEFINITION_PAYMENT_BATCH}
                  is provided only schedule definition object that relate to
                  these definitions are returned.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{itemId}:
              get:
                tags:
                  - schedule-instance
                summary: ''
                description: view for reading, updating and listing the scheduled instance.
              put:
                tags:
                  - schedule-instance
                summary: ''
                description: view for reading, updating and listing the scheduled instance.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance:
              get:
                tags:
                  - schedule-instance
                summary: ''
                description: view for reading, updating and listing the scheduled instance.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule-payment:
              post:
                tags:
                  - schedule-payment
                summary: ''
                description: Endpoint for schedule payments.
              get:
                tags:
                  - schedule-payment
                summary: ''
                description: Endpoint for schedule payments.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{itemId}:
              delete:
                tags:
                  - schedule-payment
                summary: ''
                description: Endpoint for schedule payments.
              get:
                tags:
                  - schedule-payment
                summary: ''
                description: Endpoint for schedule payments.
              put:
                tags:
                  - schedule-payment
                summary: ''
                description: Endpoint for schedule payments.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{itemId}:
              get:
                tags:
                  - schedule-payment-batch
                summary: ''
                description: Endpoint for schedule payment batches.
              put:
                tags:
                  - schedule-payment-batch
                summary: ''
                description: Endpoint for schedule payment batches.
              delete:
                tags:
                  - schedule-payment-batch
                summary: ''
                description: Endpoint for schedule payment batches.
            /user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch:
              post:
                tags:
                  - schedule-payment-batch
                summary: ''
                description: Endpoint for schedule payment batches.
            /server-error:
              post:
                tags:
                  - server-error
                summary: ''
                description: An endpoint that will always throw an error.
            /installation/{installationID}/server-public-key:
              get:
                tags:
                  - server-public-key
                summary: ''
                description: Show the ServerPublicKey for this Installation.
            /session/{itemId}:
              delete:
                tags:
                  - session
                summary: ''
                description: Deletes the current session.
            /session-server:
              post:
                tags:
                  - session-server
                summary: ''
                description: >-
                  Create a new session for a DeviceServer. Provide the
                  Installation token in the "X-Bunq-Client-Authentication"
                  header. And don't forget to create the
                  "X-Bunq-Client-Signature" header. The response contains a
                  Session token that should be used for as the
                  "X-Bunq-Client-Authentication" header for all future API
                  calls. The ip address making this call needs to match the ip
                  address bound to your API key.
            /user/{userID}/monetary-account/{monetary-accountID}/share-invite-monetary-account-inquiry:
              post:
                tags:
                  - share-invite-monetary-account-inquiry
                summary: ''
                description: >-
                  [DEPRECATED - use /share-invite-monetary-account-response]
                  Create a new share inquiry for a monetary account, specifying
                  the permission the other bunq user will have on it.
              get:
                tags:
                  - share-invite-monetary-account-inquiry
                summary: ''
                description: >-
                  [DEPRECATED - use /share-invite-monetary-account-response] Get
                  a list with all the share inquiries for a monetary account,
                  only if the requesting user has permission to change the
                  details of the various ones.
            /user/{userID}/monetary-account/{monetary-accountID}/share-invite-monetary-account-inquiry/{itemId}:
              get:
                tags:
                  - share-invite-monetary-account-inquiry
                summary: ''
                description: >-
                  [DEPRECATED - use /share-invite-monetary-account-response] Get
                  the details of a specific share inquiry.
              put:
                tags:
                  - share-invite-monetary-account-inquiry
                summary: ''
                description: >-
                  [DEPRECATED - use /share-invite-monetary-account-response]
                  Update the details of a share. This includes updating status
                  (revoking or cancelling it), granted permission and validity
                  period of this share.
            /user/{userID}/share-invite-monetary-account-response/{itemId}:
              get:
                tags:
                  - share-invite-monetary-account-response
                summary: ''
                description: Return the details of a specific share a user was invited to.
              put:
                tags:
                  - share-invite-monetary-account-response
                summary: ''
                description: Accept or reject a share a user was invited to.
            /user/{userID}/share-invite-monetary-account-response:
              get:
                tags:
                  - share-invite-monetary-account-response
                summary: ''
                description: Return all the shares a user was invited to.
            /user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{itemId}:
              get:
                tags:
                  - sofort-merchant-transaction
                summary: ''
                description: >-
                  View for requesting Sofort transactions and polling their
                  status.
            /user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction:
              get:
                tags:
                  - sofort-merchant-transaction
                summary: ''
                description: >-
                  View for requesting Sofort transactions and polling their
                  status.
            /user/{userID}/monetary-account/{monetary-accountID}/event/{eventID}/statement:
              post:
                tags:
                  - statement
                summary: ''
                description: Used to create a statement export of a single payment.
            /user/{userID}/monetary-account/{monetary-accountID}/event/{eventID}/statement/{itemId}:
              get:
                tags:
                  - statement
                summary: ''
                description: Used to create a statement export of a single payment.
            /user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{itemId}:
              get:
                tags:
                  - switch-service-payment
                summary: ''
                description: >-
                  An incoming payment made towards an account of an external
                  bank and redirected to a bunq account via switch service.
            /user/{userID}/token-qr-request-ideal:
              post:
                tags:
                  - token-qr-request-ideal
                summary: ''
                description: Create a request from an ideal transaction.
            /user/{userID}/token-qr-request-sofort:
              post:
                tags:
                  - token-qr-request-sofort
                summary: ''
                description: Create a request from an SOFORT transaction.
            /user/{userID}/transferwise-currency:
              get:
                tags:
                  - transferwise-currency
                summary: ''
                description: Used to get a list of supported currencies for Transferwise.
            /user/{userID}/transferwise-quote:
              post:
                tags:
                  - transferwise-quote
                summary: ''
                description: >-
                  Used to get quotes from Transferwise. These can be used to
                  initiate payments.
            /user/{userID}/transferwise-quote/{itemId}:
              get:
                tags:
                  - transferwise-quote
                summary: ''
                description: >-
                  Used to get quotes from Transferwise. These can be used to
                  initiate payments.
            /user/{userID}/transferwise-quote-temporary:
              post:
                tags:
                  - transferwise-quote-temporary
                summary: ''
                description: >-
                  Used to get temporary quotes from Transferwise. These cannot
                  be used to initiate payments
            /user/{userID}/transferwise-quote-temporary/{itemId}:
              get:
                tags:
                  - transferwise-quote-temporary
                summary: ''
                description: >-
                  Used to get temporary quotes from Transferwise. These cannot
                  be used to initiate payments
            /user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-recipient:
              post:
                tags:
                  - transferwise-recipient
                summary: ''
                description: Used to manage recipient accounts with Transferwise.
              get:
                tags:
                  - transferwise-recipient
                summary: ''
                description: Used to manage recipient accounts with Transferwise.
            /user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-recipient/{itemId}:
              get:
                tags:
                  - transferwise-recipient
                summary: ''
                description: Used to manage recipient accounts with Transferwise.
              delete:
                tags:
                  - transferwise-recipient
                summary: ''
                description: Used to manage recipient accounts with Transferwise.
            /user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-recipient-requirement:
              post:
                tags:
                  - transferwise-recipient-requirement
                summary: ''
                description: >-
                  Used to determine the recipient account requirements for
                  Transferwise transfers.
              get:
                tags:
                  - transferwise-recipient-requirement
                summary: ''
                description: >-
                  Used to determine the recipient account requirements for
                  Transferwise transfers.
            /user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-transfer:
              post:
                tags:
                  - transferwise-transfer
                summary: ''
                description: Used to create Transferwise payments.
              get:
                tags:
                  - transferwise-transfer
                summary: ''
                description: Used to create Transferwise payments.
            /user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-transfer/{itemId}:
              get:
                tags:
                  - transferwise-transfer
                summary: ''
                description: Used to create Transferwise payments.
            /user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-transfer-requirement:
              post:
                tags:
                  - transferwise-transfer-requirement
                summary: ''
                description: >-
                  Used to determine the account requirements for Transferwise
                  transfers.
            /user/{userID}/transferwise-user:
              post:
                tags:
                  - transferwise-user
                summary: ''
                description: Used to manage Transferwise users.
              get:
                tags:
                  - transferwise-user
                summary: ''
                description: Used to manage Transferwise users.
            /user/{userID}/tree-progress:
              get:
                tags:
                  - tree-progress
                summary: ''
                description: See how many trees this user has planted.
            /user/{itemId}:
              get:
                tags:
                  - user
                summary: ''
                description: Get a specific user.
            /user:
              get:
                tags:
                  - user
                summary: ''
                description: Get a collection of all available users.
            /user-company/{itemId}:
              get:
                tags:
                  - user-company
                summary: ''
                description: Get a specific company.
              put:
                tags:
                  - user-company
                summary: ''
                description: Modify a specific company's data.
            /user-payment-service-provider/{itemId}:
              get:
                tags:
                  - user-payment-service-provider
                summary: ''
                description: Used to view UserPaymentServiceProvider for session creation.
            /user-person/{itemId}:
              get:
                tags:
                  - user-person
                summary: ''
                description: Get a specific person.
              put:
                tags:
                  - user-person
                summary: ''
                description: Modify a specific person object's data.
            /user/{userID}/whitelist-sdd/{itemId}:
              get:
                tags:
                  - whitelist-sdd
                summary: ''
                description: Get a specific recurring SDD whitelist entry.
            /user/{userID}/whitelist-sdd:
              get:
                tags:
                  - whitelist-sdd
                summary: ''
                description: >-
                  Get a listing of all recurring SDD whitelist entries for a
                  target monetary account.
            /user/{userID}/monetary-account/{monetary-accountID}/whitelist-sdd/{itemId}:
              get:
                tags:
                  - whitelist-sdd
                summary: ''
                description: Get a specific SDD whitelist entry.
            /user/{userID}/monetary-account/{monetary-accountID}/whitelist-sdd:
              get:
                tags:
                  - whitelist-sdd
                summary: ''
                description: >-
                  Get a listing of all SDD whitelist entries for a target
                  monetary account.
            /user/{userID}/whitelist-sdd-one-off/{itemId}:
              get:
                tags:
                  - whitelist-sdd-one-off
                summary: ''
                description: Get a specific one off SDD whitelist entry.
              put:
                tags:
                  - whitelist-sdd-one-off
                summary: ''
                description: >-
                  Whitelist an one off SDD so that when another one off SDD from
                  the creditor comes in, it is automatically accepted.
              delete:
                tags:
                  - whitelist-sdd-one-off
                summary: ''
                description: >-
                  Whitelist an one off SDD so that when another one off SDD from
                  the creditor comes in, it is automatically accepted.
            /user/{userID}/whitelist-sdd-one-off:
              post:
                tags:
                  - whitelist-sdd-one-off
                summary: ''
                description: Create a new one off SDD whitelist entry.
              get:
                tags:
                  - whitelist-sdd-one-off
                summary: ''
                description: >-
                  Get a listing of all one off SDD whitelist entries for a
                  target monetary account.
            /user/{userID}/whitelist-sdd-recurring/{itemId}:
              get:
                tags:
                  - whitelist-sdd-recurring
                summary: ''
                description: Get a specific recurring SDD whitelist entry.
              put:
                tags:
                  - whitelist-sdd-recurring
                summary: ''
                description: >-
                  Whitelist a recurring SDD so that when another recurrence
                  comes in, it is automatically accepted.
              delete:
                tags:
                  - whitelist-sdd-recurring
                summary: ''
                description: >-
                  Whitelist a recurring SDD so that when another recurrence
                  comes in, it is automatically accepted.
            /user/{userID}/whitelist-sdd-recurring:
              post:
                tags:
                  - whitelist-sdd-recurring
                summary: ''
                description: Create a new recurring SDD whitelist entry.
              get:
                tags:
                  - whitelist-sdd-recurring
                summary: ''
                description: >-
                  Get a listing of all recurring SDD whitelist entries for a
                  target monetary account.
          tags:
            - name: activity-map-place-public
              description: ''
            - name: additional-transaction-information-category
              description: ''
            - name: additional-transaction-information-category-user-defined
              description: ''
            - name: attachment
              description: ''
            - name: attachment-public
              description: ''
            - name: avatar
              description: ''
            - name: billing-contract-subscription
              description: ''
            - name: bunqme-fundraiser-profile
              description: ''
            - name: bunqme-fundraiser-result
              description: ''
            - name: bunqme-tab
              description: ''
            - name: bunqme-tab-result-response
              description: ''
            - name: callback-url
              description: ''
            - name: card
              description: ''
            - name: card-batch
              description: ''
            - name: card-batch-replace
              description: ''
            - name: card-credit
              description: ''
            - name: card-debit
              description: ''
            - name: card-name
              description: ''
            - name: certificate-pinned
              description: ''
            - name: challenge-request
              description: ''
            - name: company
              description: ''
            - name: confirmation-of-funds
              description: ''
            - name: content
              description: ''
            - name: credential-password-ip
              description: ''
            - name: currency-cloud-beneficiary
              description: ''
            - name: currency-cloud-beneficiary-requirement
              description: ''
            - name: currency-cloud-payment-quote
              description: ''
            - name: currency-conversion
              description: ''
            - name: currency-conversion-quote
              description: ''
            - name: customer-statement
              description: ''
            - name: definition
              description: ''
            - name: device
              description: ''
            - name: device-server
              description: ''
            - name: draft-payment
              description: ''
            - name: event
              description: ''
            - name: export-annual-overview
              description: ''
            - name: export-rib
              description: ''
            - name: export-statement-card
              description: ''
            - name: export-statement-card-csv
              description: ''
            - name: export-statement-card-pdf
              description: ''
            - name: feature-announcement
              description: ''
            - name: generated-cvc2
              description: ''
            - name: ideal-merchant-transaction
              description: ''
            - name: insight-preference-date
              description: ''
            - name: insights
              description: ''
            - name: insights-search
              description: ''
            - name: installation
              description: ''
            - name: instance
              description: ''
            - name: invoice
              description: ''
            - name: ip
              description: ''
            - name: legal-name
              description: ''
            - name: limit
              description: ''
            - name: mastercard-action
              description: ''
            - name: monetary-account
              description: ''
            - name: monetary-account-bank
              description: ''
            - name: monetary-account-card
              description: ''
            - name: monetary-account-external
              description: ''
            - name: monetary-account-external-savings
              description: ''
            - name: monetary-account-joint
              description: ''
            - name: monetary-account-savings
              description: ''
            - name: name
              description: ''
            - name: note-attachment
              description: ''
            - name: note-text
              description: ''
            - name: notification-filter-email
              description: ''
            - name: notification-filter-failure
              description: ''
            - name: notification-filter-push
              description: ''
            - name: notification-filter-url
              description: ''
            - name: oauth-client
              description: ''
            - name: payment
              description: ''
            - name: payment-auto-allocate
              description: ''
            - name: payment-batch
              description: ''
            - name: payment-service-provider-credential
              description: ''
            - name: payment-service-provider-draft-payment
              description: ''
            - name: payment-service-provider-issuer-transaction
              description: ''
            - name: pdf-content
              description: ''
            - name: registry-import-splitwise-csv
              description: ''
            - name: registry-settlement
              description: ''
            - name: replace
              description: ''
            - name: request-inquiry
              description: ''
            - name: request-inquiry-batch
              description: ''
            - name: request-response
              description: ''
            - name: sandbox-user-company
              description: ''
            - name: sandbox-user-person
              description: ''
            - name: schedule
              description: ''
            - name: schedule-instance
              description: ''
            - name: schedule-payment
              description: ''
            - name: schedule-payment-batch
              description: ''
            - name: server-error
              description: ''
            - name: server-public-key
              description: ''
            - name: session
              description: ''
            - name: session-server
              description: ''
            - name: share-invite-monetary-account-inquiry
              description: ''
            - name: share-invite-monetary-account-response
              description: ''
            - name: sofort-merchant-transaction
              description: ''
            - name: statement
              description: ''
            - name: switch-service-payment
              description: ''
            - name: token-qr-request-ideal
              description: ''
            - name: token-qr-request-sofort
              description: ''
            - name: transferwise-currency
              description: ''
            - name: transferwise-quote
              description: ''
            - name: transferwise-quote-temporary
              description: ''
            - name: transferwise-recipient
              description: ''
            - name: transferwise-recipient-requirement
              description: ''
            - name: transferwise-transfer
              description: ''
            - name: transferwise-transfer-requirement
              description: ''
            - name: transferwise-user
              description: ''
            - name: tree-progress
              description: ''
            - name: user
              description: ''
            - name: user-company
              description: ''
            - name: user-payment-service-provider
              description: ''
            - name: user-person
              description: ''
            - name: whitelist-sdd
              description: ''
            - name: whitelist-sdd-one-off
              description: ''
            - name: whitelist-sdd-recurring
              description: ''
      - type: API Evangelist Ratings
        data:
          weekNumber: 12
          rules:
            - code: openapi-external-docs-error
              message: External Docs
            - code: openapi-openapi-version-300-info
              message: 3.0.0 Version of OpenAPI
            - code: openapi-openapi-version-310-info
              message: 3.1.0 Version of OpenAPI
            - code: openapi-info-title-info
              message: Info Title
            - code: openapi-info-title-upper-case-info
              message: Info Title Upper Case
            - code: openapi-info-description-info
              message: Info Description
            - code: openapi-info-description-length-error
              message: Info Description Length
            - code: openapi-info-terms-of-service-info
              message: Terms of Service
            - code: openapi-info-contact-email-error
              message: Contact Email
            - code: openapi-info-contact-info
              message: Contact Object
            - code: openapi-info-contact-name-info
              message: Contact Name
            - code: openapi-info-contact-url-info
              message: Contact URL
            - code: openapi-info-license-info
              message: License Object
            - code: openapi-info-license-name-info
              message: Info License Name
            - code: openapi-info-license-url-info
              message: Info License URL
            - code: openapi-info-version-info
              message: Info Version
            - code: openapi-security-schemes-error
              message: Security Scheme
            - code: openapi-schema-description-error
              message: Schema SHOULD have a description.
            - code: openapi-schema-names-camel-case-warn
              message: Schema Name Camel Case
            - code: openapi-schema-names-length-error
              message: Schema Name Length
            - code: openapi-schema-names-snake-case-warn
              message: Schema Name Snake Case
            - code: openapi-schema-type-info
              message: Schema Type
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
            - code: openapi-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-schema-properties-names-snake-case-error
              message: Schema Property Names Snake Case
            - code: openapi-schema-properties-descriptions-length-error
              message: Schema Description Length
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
            - code: openapi-operations-tags-info
              message: Operation Tags
            - code: openapi-operations-summary-error
              message: Operation Summary
            - code: openapi-operations-summary-period-none-info
              message: Operation Summary Period
            - code: openapi-operations-operation-ids-camel-case-error
              message: Operation ID Camel Case
            - code: openapi-operations-operation-ids-info
              message: Operation ID.
            - code: openapi-operations-description-info
              message: Operation Description
            - code: openapi-parameters-in-info
              message: Parameters In
            - code: openapi-parameters-name-info
              message: Parameter Name
            - code: openapi-parameters-path-names-snake-case-error
              message: Parameter Path Name Snake Case
            - code: openapi-parameters-description-error
              message: Parameter Description
            - code: openapi-parameters-required-error
              message: Parameters MUST have a required property.
            - code: openapi-parameters-schema-info
              message: Parameter Schema Type
            - code: openapi-parameters-schema-type-info
              message: Parameter Schema Type
            - code: openapi-parameters-description-info
              message: Parameter Description
            - code: openapi-parameters-required-info
              message: Parameter has a required property.
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
            - code: openapi-response-get-400-status-code-info
              message: 400 Status Code for GET Responses
            - code: openapi-parameters-path-names-camel-case-error
              message: Parameter Path Name Camel Case
            - code: openapi-response-get-200-schema-components-warn
              message: GET Response 200 Schema Components
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
            - code: openapi-request-body-have-schema-properties-warn
              message: Request Body Schema Components
            - code: openapi-request-body-have-schema-required-info
              message: Request Body Schema Required
            - code: openapi-request-body-have-schema-required-warn
              message: Request Body Schema Required
            - code: openapi-request-body-schema-properties-descriptions-error
              message: Schema Description
            - code: openapi-request-body-schema-properties-descriptions-info
              message: Schema Description
            - code: openapi-request-body-schema-properties-format-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-properties-names-pascal-case-error
              message: Request Body Schema Property Names Pascal Case
            - code: openapi-request-body-schema-properties-nullable-error
              message: Request Body Schema Properties Format
            - code: openapi-request-body-schema-ref-warn
              message: Request Body Schema Ref
            - code: openapi-response-post-201-status-code-error
              message: POST 201 Status Code
            - code: openapi-response-post-404-status-code-warn
              message: 404 Status Code for POST Responses
            - code: openapi-response-post-500-status-code-error
              message: 500 Status Code for POST Responses
            - code: openapi-response-post-400-status-code-info
              message: 400 Status Code for POST Responses
            - code: openapi-operations-description-length-error
              message: Operation Description Length
            - code: openapi-request-body-schema-properties-names-camel-case-error
              message: Request Body Schema Property Names Camel Case
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
            - code: openapi-response-put-404-status-code-warn
              message: 404 Status Code for PUT Responses
            - code: openapi-response-put-500-status-code-error
              message: 500 Status Code for PUT Responses
            - code: openapi-response-put-400-status-code-info
              message: 400 Status Code for PUT Responses
            - code: openapi-no-request-body-on-delete-info
              message: DELETE Request Body
            - code: openapi-response-delete-204-status-code-error
              message: DELETE 204 Status Code
            - code: openapi-response-delete-404-status-code-error
              message: 404 Status Code for DELETE Responses
            - code: openapi-response-delete-500-status-code-error
              message: 500 Status Code for DELETE Responses
            - code: openapi-response-delete-400-status-code-info
              message: 400 Status Code for DELETE Responses
            - code: openapi-request-body-schema-properties-descriptions-length-error
              message: Schema Description Length
            - code: openapi-request-body-schema-properties-names-length-error
              message: Schema Properties Name Length
            - code: openapi-parameters-name-length-error
              message: Parameter Length
            - code: openapi-tags-object-info
              message: Tag Object
            - code: openapi-tags-name-info
              message: Tag Name
            - code: openapi-tags-description-error
              message: Tag Descriptions
    contact:
      - FN: Name
        url: http://example.com
        email: info@example.com
    overlays:
      - type: API Evangelist Ratings
        url: overlays/bunq-openapi-api-evangelist-ratings.yml
    aid: bunq:bunq-api
common:
  - type: Portal
    url: https://developer.bunq.com/en/
  - type: Authentication
    url: https://doc.bunq.com/#/authentication
  - type: Errors
    url: https://doc.bunq.com/#/errors
  - type: Headers
    url: https://doc.bunq.com/#/headers
  - type: Type
    url: https://example.com
  - type: Callbacks
    url: https://doc.bunq.com/#/callbacks
  - type: Pagination
    url: https://doc.bunq.com/#/pagination
  - type: Change Log
    url: https://beta.doc.bunq.com/basics/changelog
  - type: Status
    url: https://status.bunq.com/
  - type: GitHub Organization
    url: https://github.com/bunq
  - type: Postman Collections
    url: https://github.com/bunq/postman/
  - type: Sandbox
    url: https://beta.doc.bunq.com/basics/sandbox
  - type: Blog
    url: https://medium.com/bunq-developers-corner
  - type: FAQ
    url: https://beta.doc.bunq.com/other/faq
  - type: Terms of Service
    url: >-
      https://assets-global.website-files.com/63b43f001c7774d38d5f3a2d/63b43f001c7774ee815f41aa_20200805_terms_bunq_API_EN.pdf
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/apis-io-search.yml
aid: bunq
---