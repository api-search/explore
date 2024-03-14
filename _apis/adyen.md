---
name: Adyen
description: >-
  End-to-end payments, data, and financial management in a single solution. Meet
  the financial technology platform that helps you realize your ambitions
  faster.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/adyen.yml
created: 2023/11/13
modified: 2024/02/19
specificationVersion: '0.16'
tags:
  - APIs
  - Payments
apis:
  - name: Adyen Accounting Notifications API
    description: >-
      Adyen sends notifications through webhooks to inform your system about
      incoming and outgoing transfers in your platform. You can use these
      webhooks to build your implementation. For example, you can use this
      information to update balances in your own dashboards or to keep track of
      incoming funds.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://docs.adyen.com/marketplaces-and-platforms/classic/configure-notifications/
    baseURL: https://cal-test.adyen.com
    tags:
      - Accounting
      - Notifications
      - Webhooks
    properties:
      - type: OpenAPI
        url: >-
          https://docs.adyen.com/marketplaces-and-platforms/classic/configure-notifications/
      - type: OpenAPI
        url: properties/accounting-notifications-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/accounting-notifications-openapi-search.yml
    aid: adyen:adyen-accounting-notifications-api
  - name: Adyen Account API
    description: >-
      This API is used for the classic integration. If you are just starting
      your implementation, refer to our new integration guide instead. The
      Account API provides endpoints for managing account-related entities on
      your platform. These related entities include account holders, accounts,
      bank accounts, shareholders, and verification-related documents. The
      management operations include actions such as creation, retrieval,
      updating, and deletion of them.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/api-explorer/Account/6/overview
    baseURL: https://cal-test.adyen.com
    tags:
      - Payments
      - Accounts
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/api-explorer/Account/6/overview
      - type: OpenAPI
        url: properties/accounts-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Adyen Account API
            x-timestamp: '2023-05-30T15:27:20Z'
          x-groups:
            - Account holders
            - Accounts
            - Verification
          tags:
            - name: Account holders
            - name: Verifications
            - name: Accounts
          paths:
            /checkAccountHolder:
              post:
                tags:
                  - Trigger
                  - Verification
                  - Account
                  - Holder
                summary: Trigger verification
                description: >-
                  Triggers the verification of an account holder even if the
                  checks are not yet required for the volume that they are
                  currently processing.
            /closeAccount:
              post:
                tags:
                  - Close
                  - An
                  - Account
                  - Account
                  - Holder
                summary: Close an account
                description: >-
                  Closes an account. If an account is closed, you cannot process
                  transactions, pay out its funds, or reopen it. If payments are
                  made to a closed account, the payments are sent to your liable
                  account.
            /closeAccountHolder:
              post:
                tags:
                  - Close
                  - An
                  - Account
                  - Holder
                  - Account
                  - Holder
                summary: Close an account holder
                description: >-
                  Changes the [status of an account
                  holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses)
                  to **Closed**. This state is final. If an account holder is
                  closed, you can't process transactions, pay out funds, or
                  reopen it. If payments are made to an account of an account
                  holder with a **Closed**
                  [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status),
                  the payments are sent to your liable account.
            /closeStores:
              post:
                tags:
                  - Close
                  - Stores
                  - Account
                  - Holder
                  - Stores
                summary: Close stores
                description: Closes stores associated with an account holder.
            /createAccount:
              post:
                tags:
                  - Create
                  - An
                  - Account
                  - Account
                  - Holder
                  - Stores
                summary: Create an account
                description: >-
                  Creates an account under an account holder. An account holder
                  can have [multiple
                  accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#create-additional-accounts).
            /createAccountHolder:
              post:
                tags:
                  - Create
                  - An
                  - Account
                  - Holder
                  - Account
                  - Holder
                  - Stores
                summary: Create an account holder
                description: >-
                  Creates an account holder that [represents the sub-merchant's
                  entity](https://docs.adyen.com/marketplaces-and-platforms/classic/account-structure#your-platform)
                  in your platform. The details that you need to provide in the
                  request depend on the sub-merchant's legal entity type. For
                  more information, refer to [Account holder and
                  accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#legal-entity-types).
            /deleteBankAccounts:
              post:
                tags:
                  - Delete
                  - Bank
                  - Accounts
                  - Account
                  - Holder
                  - Stores
                  - Bank
                  - Accounts
                summary: Delete bank accounts
                description: 'Deletes bank accounts associated with an account holder. '
            /deleteLegalArrangements:
              post:
                tags:
                  - Delete
                  - Legal
                  - Arrangements
                  - Account
                  - Holder
                  - Stores
                  - Bank
                  - Accounts
                  - Legal
                  - Arrangements
                summary: Delete legal arrangements
                description: >-
                  Deletes legal arrangements and/or legal arrangement entities
                  associated with an account holder.
            /deletePayoutMethods:
              post:
                tags:
                  - Delete
                  - Payout
                  - Methods
                  - Account
                  - Holder
                  - Stores
                  - Bank
                  - Accounts
                  - Legal
                  - Arrangements
                  - Payout
                  - Methods
                summary: Delete payout methods
                description: Deletes payout methods associated with an account holder.
            /deleteShareholders:
              post:
                tags:
                  - Delete
                  - Shareholders
                  - Account
                  - Holder
                  - Stores
                  - Bank
                  - Accounts
                  - Legal
                  - Arrangements
                  - Payout
                  - Methods
                  - Shareholders
                summary: Delete shareholders
                description: Deletes shareholders associated with an account holder.
            /deleteSignatories:
              post:
                tags:
                  - Delete
                  - Signatories
                  - Account
                  - Holder
                  - Stores
                  - Bank
                  - Accounts
                  - Legal
                  - Arrangements
                  - Payout
                  - Methods
                  - Shareholders
                  - Signatories
                summary: Delete signatories
                description: Deletes signatories associated with an account holder.
            /getAccountHolder:
              post:
                tags:
                  - Get
                  - An
                  - Account
                  - Holder
                  - Account
                  - Holder
                  - Stores
                  - Bank
                  - Accounts
                  - Legal
                  - Arrangements
                  - Payout
                  - Methods
                  - Shareholders
                  - Signatories
                summary: Get an account holder
                description: Returns the details of an account holder.
            /getTaxForm:
              post:
                tags:
                  - Get
                  - Tax
                  - Form
                  - Account
                  - Holder
                  - Stores
                  - Bank
                  - Accounts
                  - Legal
                  - Arrangements
                  - Payout
                  - Methods
                  - Shareholders
                  - Signatories
                  - Tax
                  - Form
                summary: Get a tax form
                description: >-
                  Generates a tax form for account holders operating in the US.
                  For more information, refer to [Providing tax
                  forms](https://docs.adyen.com/marketplaces-and-platforms/classic/tax-forms).
            /getUploadedDocuments:
              post:
                tags:
                  - Get
                  - Documents
                  - Account
                  - Holder
                  - Stores
                  - Bank
                  - Accounts
                  - Legal
                  - Arrangements
                  - Payout
                  - Methods
                  - Shareholders
                  - Signatories
                  - Tax
                  - Form
                  - Uploaded
                  - Documents
                summary: Get documents
                description: >
                  Returns documents that were previously uploaded for an account
                  holder. Adyen uses the documents during the [verification
                  process](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process).
            /suspendAccountHolder:
              post:
                tags:
                  - Suspend
                  - An
                  - Account
                  - Holder
                  - Account
                  - Holder
                  - Stores
                  - Bank
                  - Accounts
                  - Legal
                  - Arrangements
                  - Payout
                  - Methods
                  - Shareholders
                  - Signatories
                  - Tax
                  - Form
                  - Uploaded
                  - Documents
                summary: Suspend an account holder
                description: >-
                  Changes the [status of an account
                  holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses)
                  to **Suspended**.
            /unSuspendAccountHolder:
              post:
                tags:
                  - Unsuspend
                  - An
                  - Account
                  - Holder
                  - Account
                  - Holder
                  - Stores
                  - Bank
                  - Accounts
                  - Legal
                  - Arrangements
                  - Payout
                  - Methods
                  - Shareholders
                  - Signatories
                  - Tax
                  - Form
                  - Uploaded
                  - Documents
                  - Suspend
                summary: Unsuspend an account holder
                description: >-
                  Changes the [status of an account
                  holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses)
                  from **Suspended** to **Inactive**. 

                  Account holders can have a **Suspended**
                  [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status)
                  if you suspend them through the
                  [`/suspendAccountHolder`](https://docs.adyen.com/api-explorer/#/Account/v5/post/suspendAccountHolder)
                  endpoint or if a verification deadline expires.


                  You can only unsuspend account holders if they do not have
                  verification checks with a **FAILED**
                  [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status).
            /updateAccount:
              post:
                tags:
                  - Update
                  - An
                  - Account
                  - Account
                  - Holder
                  - Stores
                  - Bank
                  - Accounts
                  - Legal
                  - Arrangements
                  - Payout
                  - Methods
                  - Shareholders
                  - Signatories
                  - Tax
                  - Form
                  - Uploaded
                  - Documents
                  - Suspend
                summary: Update an account
                description: Updates the description or payout schedule of an account.
            /updateAccountHolder:
              post:
                tags:
                  - Update
                  - An
                  - Account
                  - Holder
                  - Account
                  - Holder
                  - Stores
                  - Bank
                  - Accounts
                  - Legal
                  - Arrangements
                  - Payout
                  - Methods
                  - Shareholders
                  - Signatories
                  - Tax
                  - Form
                  - Uploaded
                  - Documents
                  - Suspend
                summary: Update an account holder
                description: >+
                  Updates the `accountHolderDetails` and `processingTier` of an
                  account holder, and adds bank accounts and shareholders.


                  When updating `accountHolderDetails`, parameters that are not
                  included in the request are left unchanged except for the
                  following object:


                  * `metadata`: Updating the metadata replaces the entire
                  object. This means that to update an existing key-value pair,
                  you must provide the changes, as well as other existing
                  key-value pairs.


                  When updating any field in the following objects, you must
                  submit all the fields required for validation:

                   * `address`

                  * `fullPhoneNumber`


                  * `bankAccountDetails.BankAccountDetail`


                  * `businessDetails.shareholders.ShareholderContact`

                   For example, to update the `address.postalCode`, you must also submit the `address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` so that the address can be validated.

                  To add a bank account or shareholder, provide the bank account
                  or shareholder details without a `bankAccountUUID` or a
                  `shareholderCode`.

            /updateAccountHolderState:
              post:
                tags:
                  - Update
                  - Payout
                  - Or
                  - Processing
                  - State
                  - Account
                  - Holder
                  - Stores
                  - Bank
                  - Accounts
                  - Legal
                  - Arrangements
                  - Payout
                  - Methods
                  - Shareholders
                  - Signatories
                  - Tax
                  - Form
                  - Uploaded
                  - Documents
                  - Suspend
                  - State
                summary: Update payout or processing state
                description: >-
                  Disables or enables the processing or payout state of an
                  account holder.
            /uploadDocument:
              post:
                tags:
                  - Upload
                  - Document
                  - Account
                  - Holder
                  - Stores
                  - Bank
                  - Accounts
                  - Legal
                  - Arrangements
                  - Payout
                  - Methods
                  - Shareholders
                  - Signatories
                  - Tax
                  - Form
                  - Uploaded
                  - Documents
                  - Suspend
                  - State
                  - Document
                summary: Upload a document
                description: >-
                  Uploads a document for an account holder. Adyen uses the
                  documents during the [verification
                  process](https://docs.adyen.com/marketplaces-and-platforms/classi
    overlays:
      - type: APIs.io Search
        url: overlays/accounts-openapi-search.yml
    aid: adyen:adyen-account-api
  - name: Adyen Authentication Webhooks API
    description: >-
      Adyen sends webhooks to inform your system about events related to
      cardholder authentication.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/development-resources/webhooks/
    baseURL: https://cal-test.adyen.com
    tags:
      - Authentication
      - Payments
      - Webhooks
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/development-resources/webhooks/
      - type: OpenAPI
        url: properties/authentication-webhooks-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/authentication-webhooks-openapi-search.yml
    aid: adyen:adyen-authentication-webhooks-api
  - name: Adyen Balance Control API
    description: >-
      The Balance Control API lets you transfer funds between merchant accounts
      that belong to the same legal entity and are under the same company
      account.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/api-explorer/BalanceControl/1/overview
    baseURL: https://cal-test.adyen.com
    tags:
      - Balances
      - Transfers
      - Funds
      - Merchants
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/api-explorer/BalanceControl/1/overview
      - type: OpenAPI
        url: properties/balance-control-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Adyen Balance Control API
          x-groups:
            - General
          tags:
            - name: General
          paths:
            /balanceTransfer:
              post:
                tags:
                  - Start
                  - Balance
                  - Transfer
                  - Transfer
                summary: Start a balance transfer
                description: >
                  Starts a balance transfer request between merchant accounts.
                  The following conditions must be met before you can
                  successfully transfer balances:


                  * The source and destination merchant accounts must be under
                  the same company account and legal entity.


                  * The source merchant account must have sufficient funds.


                  * The source and destination merchant accounts must have at
                  least one common processing currency.


                  When sending multiple API requests with the same source and
                  destination merchant accounts, send the requests sequentially
                  and *not* in parallel. Some requests may not be processed if
                  the reques
    overlays:
      - type: APIs.io Search
        url: overlays/balance-control-openapi-search.yml
    aid: adyen:adyen-balance-control-api
  - name: Adyen BinLookup API
    description: >-
      The BIN Lookup API provides endpoints for retrieving information, such as
      cost estimates, and 3D Secure supported version based on a given BIN.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/api-explorer/BinLookup/52/overview
    baseURL: https://pal-test.adyen.com
    tags:
      - Estimates
      - Costs
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/api-explorer/BinLookup/52/overview
      - type: OpenAPI
        url: properties/binlookup-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Adyen BinLookup API
          tags:
            - name: General
          paths:
            /get3dsAvailability:
              post:
                tags:
                  - Check
                  - If
                  - Secure
                  - Is
                  - Available
                  - Availability
                summary: Check if 3D Secure is available
                description: >-
                  Verifies whether 3D Secure is available for the specified BIN
                  or card brand. For 3D Secure 2, this endpoint also returns
                  device fingerprinting keys.


                  For more information, refer to [3D Secure
                  2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).
            /getCostEstimate:
              post:
                tags:
                  - Get
                  - Fees
                  - Cost
                  - Estimate
                  - Availability
                  - Cost
                  - Estimate
                summary: Get a fees cost estimate
                description: >-
                  >This API is available only for merchants operating in
                  Australia, the EU, and the UK.


                  Use the Adyen Cost Estimation API to pre-calculate interchange
                  and scheme fee costs. Knowing these costs prior actual payment
                  authorisation gives you an opportunity to charge those costs
                  to the cardholder, if necessary.


                  To retrieve this information, make the call to the
                  `/getCostEstimate` endpoint. The response to this call
                  contains the amount of the interchange and scheme fees charged
                  by the network for this transaction, and also which
                  surcharging policy is possible (based on current regulations).


                  > Since not all information is known in advance (for example,
                  if the cardholder will successfully authenticate via 3D Secure
                  or if you also plan to provide additional Level 2/3 data), the
                  returned amounts are based on a set of assumption criteria you
                  define in the 
    overlays:
      - type: APIs.io Search
        url: overlays/binlookup-openapi-search.yml
    aid: adyen:adyen-binlookup-api
  - name: Adyen Checkout API
    description: This is the description of your API.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/api-explorer/Checkout/71/overview
    baseURL: https://api.example.com
    tags:
      - Checkouts
      - Commerce
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/api-explorer/Checkout/71/overview
      - type: OpenAPI
        url: properties/checkout-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Adyen Checkout API
          tags:
            - name: Payments
            - name: Donations
            - name: Payment links
            - name: Modifications
            - name: Recurring
            - name: Orders
            - name: Utility
            - name: Classic Checkout SDK
          paths:
            /applePay/sessions:
              post:
                tags:
                  - Get
                  - An
                  - Apple
                  - Pay
                  - Session
                  - Pay
                  - Sessions
                summary: Get an Apple Pay session
                description: >-
                  You need to use this endpoint if you have an API-only
                  integration with Apple Pay which uses Adyen's Apple Pay
                  certificate.


                  The endpoint returns the Apple Pay session data which you need
                  to complete the [Apple Pay session
                  validation](https://docs.adyen.com/payment-methods/apple-pay/api-only?tab=adyen-certificate-validation_1#complete-apple-pay-session-validation).
            /cancels:
              post:
                tags:
                  - Cancel
                  - An
                  - Authorised
                  - Payment
                  - Pay
                  - Sessions
                  - Cancels
                summary: Cancel an authorised payment
                description: >-
                  Cancels the authorisation on a payment that has not yet been
                  [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures),
                  and returns a unique reference for this request. You get the
                  outcome of the request asynchronously, in a
                  [**TECHNICAL_CANCEL**
                  webhook](https://docs.adyen.com/online-payments/cancel#cancellation-webhook).


                  If you want to cancel a payment using the
                  [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference),
                  use the
                  [`/payments/{paymentPspReference}/cancels`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/cancels)
                  endpoint instead.


                  If you want to cancel a payment but are not sure whether it
                  has been captured, use the
                  [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals)
                  endpoint instead.


                  For more information, refer to
                  [Cancel](https://docs.adyen.com/online-payments/cancel).
            /cardDetails:
              post:
                tags:
                  - Get
                  - The
                  - List
                  - Of
                  - Brands
                  - 'On'
                  - Card
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                summary: Get the list of brands on the card
                description: >+
                  Send a request with at least the first 6 digits of the card
                  number to get a response with an array of brands on the card.
                  If you include [your supported
                  brands](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/cardDetails__reqParam_supportedBrands)
                  in the request, the response also tells you if you support
                  each [brand that was
                  identified](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/cardDetails__resParam_details).


                  If you have an API-only integration and collect card data, use
                  this endpoint to find out if the shopper's card is co-branded.
                  For co-branded cards, you must let the shopper choose the
                  brand to pay with  if you support both brands.

            /donations:
              post:
                tags:
                  - Start
                  - Transaction
                  - For
                  - Donations
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                summary: Start a transaction for donations
                description: >-
                  Takes in the donation token generated by the `/payments`
                  request and uses it to make the donation for the donation
                  account specified in the request.


                  For more information, see
                  [Donations](https://docs.adyen.com/online-payments/donations).
            /orders:
              post:
                tags:
                  - Create
                  - An
                  - Order
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                summary: Create an order
                description: >-
                  Creates an order to be used for partial payments. Make a POST
                  `/orders` call before making a `/payments` call when
                  processing payments with different payment methods.
            /orders/cancel:
              post:
                tags:
                  - Cancel
                  - An
                  - Order
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                summary: Cancel an order
                description: >-
                  Cancels an order. Cancellation of an order results in an
                  automatic rollback of all payments made in the order, either
                  by canceling or refunding the payment, depending on the type
                  of payment method.
            /originKeys:
              post:
                tags:
                  - Create
                  - Origin
                  - Key
                  - Values
                  - For
                  - Domains
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                summary: Create originKey values for domains
                description: >-
                  This operation takes the origin domains and returns a JSON
                  object containing the corresponding origin keys for the
                  domains. 

                  > If you're still using origin key for your Web Drop-in or
                  Components integration, we recommend [switching to client
                  key](https://docs.adyen.com/development-resources/client-side-authentication/migrate-from-origin-key-to-client-key).
                  This allows you to use a single key for all origins, add or
                  remove origins without generating a new key, and detect the
                  card type from the number entered in your payment form. 
            /paymentLinks:
              post:
                tags:
                  - Create
                  - Payment
                  - Link
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                summary: Create a payment link
                description: >-
                  Creates a payment link to our hosted payment form where
                  shoppers can pay. The list of payment methods presented to the
                  shopper depends on the `currency` and `country` parameters
                  sent in the request.


                  For more information, refer to [Pay by Link
                  documentation](https://docs.adyen.com/online-payments/pay-by-link#create-payment-links-through-api).
            /paymentLinks/{linkId}:
              get:
                tags:
                  - Get
                  - Payment
                  - Link
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                summary: Get a payment link
                description: >-
                  Retrieves the payment link details using the payment link
                  `id`.
              patch:
                tags:
                  - Update
                  - The
                  - Status
                  - Of
                  - Payment
                  - Link
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                summary: Update the status of a payment link
                description: >-
                  Updates the status of a payment link. Use this endpoint to
                  [force the expiry of a payment
                  link](https://docs.adyen.com/online-payments/pay-by-link#update-payment-link-status).
            /paymentMethods:
              post:
                tags:
                  - Get
                  - List
                  - Of
                  - Available
                  - Payment
                  - Methods
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                summary: Get a list of available payment methods
                description: >-
                  Queries the available payment methods for a transaction based
                  on the transaction context (like amount, country, and
                  currency). Besides giving back a list of the available payment
                  methods, the response also returns which input details you
                  need to collect from the shopper (to be submitted to
                  `/payments`).


                  Although we highly recommend using this endpoint to ensure you
                  are always offering the most up-to-date list of payment
                  methods, its usage is optional. You can, for example, also
                  cache the `/paymentMethods` response and update it once a
                  week.
            /paymentMethods/balance:
              post:
                tags:
                  - Get
                  - The
                  - Balance
                  - Of
                  - Gift
                  - Card
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                  - Balance
                summary: Get the balance of a gift card
                description: >-
                  Retrieves the balance remaining on a shopper's gift card. To
                  check a gift card's balance, make a POST
                  `/paymentMethods/balance` call and include the gift card's
                  details inside a `paymentMethod` object.
            /paymentSession:
              post:
                tags:
                  - Create
                  - Payment
                  - Session
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                  - Balance
                  - Session
                summary: Create a payment session
                description: >-
                  Provides the data object that can be used to start the
                  Checkout SDK. To set up the payment, pass its amount,
                  currency, and other required parameters. We use this to
                  optimise the payment flow and perform better risk assessment
                  of the transaction.


                  For more information, refer to [How it
                  works](https://docs.adyen.com/online-payments#howitworks).
            /payments:
              post:
                tags:
                  - Start
                  - Transaction
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                  - Balance
                  - Session
                  - Payments
                summary: Start a transaction
                description: >-
                  Sends payment parameters (like amount, country, and currency)
                  together with other required input details collected from the
                  shopper. To know more about required parameters for specific
                  payment methods, refer to our [payment method
                  guides](https://docs.adyen.com/payment-methods). 

                  The response depends on the [payment
                  flow](https://docs.adyen.com/payment-methods#payment-flow):

                  * For a direct flow, the response includes a `pspReference`
                  and a `resultCode` with the payment result, for example
                  **Authorised** or **Refused**. 

                  * For a redirect or additional action, the response contains
                  an `action` object. 
            /payments/details:
              post:
                tags:
                  - Submit
                  - Details
                  - For
                  - Payment
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                  - Balance
                  - Session
                  - Payments
                summary: Submit details for a payment
                description: >+
                  Submits details for a payment created using `/payments`. This
                  step is only needed when no final state has been reached on
                  the `/payments` request, for example when the shopper was
                  redirected to another page to complete the payment.

            /payments/result:
              post:
                tags:
                  - Verify
                  - Payment
                  - Result
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                  - Balance
                  - Session
                  - Payments
                  - Result
                summary: Verify a payment result
                description: >-
                  Verifies the payment result using the payload returned from
                  the Checkout SDK.


                  For more information, refer to [How it
                  works](https://docs.adyen.com/online-payments#howitworks).
            /payments/{paymentPspReference}/amountUpdates:
              post:
                tags:
                  - Update
                  - An
                  - Authorised
                  - Amount
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                  - Balance
                  - Session
                  - Payments
                  - Result
                  - Psp
                  - Reference
                  - Amount
                  - Updates
                summary: Update an authorised amount
                description: >-
                  Increases or decreases the authorised payment amount and
                  returns a unique reference for this request. You get the
                  outcome of the request asynchronously, in an
                  [**AUTHORISATION_ADJUSTMENT**
                  webhook](https://docs.adyen.com/development-resources/webhooks/understand-notifications#event-codes).


                  You can only update authorised amounts that have not yet been
                  [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures).


                  The amount you specify in the request is the updated amount,
                  which is larger or smaller than the initial authorised amount.


                  For more information, refer to [Authorisation
                  adjustment](https://docs.adyen.com/online-payments/adjust-authorisation#use-cases).
            /payments/{paymentPspReference}/cancels:
              post:
                tags:
                  - Cancel
                  - An
                  - Authorised
                  - Payment
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                  - Balance
                  - Session
                  - Payments
                  - Result
                  - Psp
                  - Reference
                  - Amount
                  - Updates
                summary: Cancel an authorised payment
                description: >-
                  Cancels the authorisation on a payment that has not yet been
                  [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/paymentPspReference/captures),
                  and returns a unique reference for this request. You get the
                  outcome of the request asynchronously, in a [**CANCELLATION**
                  webhook](https://docs.adyen.com/online-payments/cancel#cancellation-webhook).


                  If you want to cancel a payment but don't have the
                  [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference),
                  use the
                  [`/cancels`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/cancels)
                  endpoint instead.


                  If you want to cancel a payment but are not sure whether it
                  has been captured, use the
                  [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals)
                  endpoint instead.


                  For more information, refer to
                  [Cancel](https://docs.adyen.com/online-payments/cancel).
            /payments/{paymentPspReference}/captures:
              post:
                tags:
                  - Capture
                  - An
                  - Authorised
                  - Payment
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                  - Balance
                  - Session
                  - Payments
                  - Result
                  - Psp
                  - Reference
                  - Amount
                  - Updates
                  - Captures
                summary: Capture an authorised payment
                description: >2-
                   Captures an authorised payment and returns a unique reference for this request. You get the outcome of the request asynchronously, in a [**CAPTURE** webhook](https://docs.adyen.com/online-payments/capture#capture-notification).

                  You can capture either the full authorised amount or a part of
                  the authorised amount. By default, any unclaimed amount after
                  a partial capture gets cancelled. This does not apply if you
                  enabled multiple partial captures on your account and the
                  payment method supports multiple partial captures. 


                  [Automatic
                  capture](https://docs.adyen.com/online-payments/capture#automatic-capture)
                  is the default setting for most payment methods. In these
                  cases, you don't need to make capture requests. However,
                  making capture requests for payments that are captured
                  automatically does not result in double charges.


                  For more information, refer to
                  [Capture](https://docs.adyen.com/online-payments/capture).
            /payments/{paymentPspReference}/refunds:
              post:
                tags:
                  - Refund
                  - Captured
                  - Payment
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                  - Balance
                  - Session
                  - Payments
                  - Result
                  - Psp
                  - Reference
                  - Amount
                  - Updates
                  - Captures
                  - Refunds
                summary: Refund a captured payment
                description: >-
                  Refunds a payment that has been
                  [captured](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/captures),
                  and returns a unique reference for this request. You get the
                  outcome of the request asynchronously, in a [**REFUND**
                  webhook](https://docs.adyen.com/online-payments/refund#refund-webhook).


                  You can refund either the full captured amount or a part of
                  the captured amount. You can also perform multiple partial
                  refunds, as long as their sum doesn't exceed the captured
                  amount.


                  > Some payment methods do not support partial refunds. To
                  learn if a payment method supports partial refunds, refer to
                  the payment method page such as
                  [cards](https://docs.adyen.com/payment-methods/cards#supported-cards),
                  [iDEAL](https://docs.adyen.com/payment-methods/ideal), or
                  [Klarna](https://docs.adyen.com/payment-methods/klarna). 


                  If you want to refund a payment but are not sure whether it
                  has been captured, use the
                  [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/reversals)
                  endpoint instead.


                  For more information, refer to
                  [Refund](https://docs.adyen.com/online-payments/refund).
            /payments/{paymentPspReference}/reversals:
              post:
                tags:
                  - Refund
                  - Or
                  - Cancel
                  - Payment
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                  - Balance
                  - Session
                  - Payments
                  - Result
                  - Psp
                  - Reference
                  - Amount
                  - Updates
                  - Captures
                  - Refunds
                  - Reversals
                summary: Refund or cancel a payment
                description: >-
                  [Refunds](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/refunds)
                  a payment if it has already been captured, and
                  [cancels](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments/{paymentPspReference}/cancels)
                  a payment if it has not yet been captured. Returns a unique
                  reference for this request. You get the outcome of the request
                  asynchronously, in a [**CANCEL_OR_REFUND**
                  webhook](https://docs.adyen.com/online-payments/reverse#cancel-or-refund-webhook).


                  The reversed amount is always the full payment amount.

                  > Do not use this request for payments that involve multiple
                  partial captures.


                  For more information, refer to
                  [Reversal](https://docs.adyen.com/online-payments/reversal).
            /sessions:
              post:
                tags:
                  - Create
                  - Payment
                  - Session
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                  - Balance
                  - Session
                  - Payments
                  - Result
                  - Psp
                  - Reference
                  - Amount
                  - Updates
                  - Captures
                  - Refunds
                  - Reversals
                summary: Create a payment session
                description: >-
                  Creates a payment session for [Web
                  Drop-in](https://docs.adyen.com/online-payments/web-drop-in)
                  and [Web
                  Components](https://docs.adyen.com/online-payments/web-components)
                  integrations.


                  The response contains encrypted payment session data. The
                  front end then uses the session data to make any required
                  server-side calls for the payment flow.


                  You get the payment outcome asynchronously, in an
                  [AUTHORISATION](https://docs.adyen.com/api-explorer/#/Webhooks/latest/post/AUTHORISATION)
                  webhook.
            /sessions/{sessionId}:
              get:
                tags:
                  - Get
                  - The
                  - Result
                  - Of
                  - Payment
                  - Session
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                  - Balance
                  - Session
                  - Payments
                  - Result
                  - Psp
                  - Reference
                  - Amount
                  - Updates
                  - Captures
                  - Refunds
                  - Reversals
                summary: Get the result of a payment session
                description: >-
                  Returns the status of the payment session with the `sessionId`
                  and `sessionResult` specified in the path.
            /storedPaymentMethods:
              get:
                tags:
                  - Get
                  - Tokens
                  - For
                  - Stored
                  - Payment
                  - Details
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                  - Balance
                  - Session
                  - Payments
                  - Result
                  - Psp
                  - Reference
                  - Amount
                  - Updates
                  - Captures
                  - Refunds
                  - Reversals
                  - Payment
                summary: Get tokens for stored payment details
                description: >+
                  Lists the tokens for stored payment details for the shopper
                  identified in the path, if there are any available. The token
                  ID can be used with payment requests for the shopper's
                  payment. A summary of the stored details is included.

            /storedPaymentMethods/{storedPaymentMethodId}:
              delete:
                tags:
                  - Delete
                  - Token
                  - For
                  - Stored
                  - Payment
                  - Details
                  - Pay
                  - Sessions
                  - Cancels
                  - Details
                  - Donations
                  - Orders
                  - Cancel
                  - Keys
                  - Links
                  - Link
                  - Id
                  - Methods
                  - Balance
                  - Session
                  - Payments
                  - Result
                  - Psp
                  - Reference
                  - Amount
                  - Updates
                  - Captures
                  - Refunds
                  - Reversals
                  - Payment
                  - Stored
                  - Method
                summary: Delete a token for stored payment details
                description: >-
                  Deletes the token identified in the path. The token can no
                  longer be use
    overlays:
      - type: APIs.io Search
        url: overlays/checkout-openapi-search.yml
    aid: adyen:adyen-checkout-api
  - name: Adyen Configuration API
    description: >-
      The Configuration API enables you to create a platform where you can
      onboard your users as account holders and create balance accounts, cards,
      and business accounts.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/api-explorer/balanceplatform/2/overview
    baseURL: https://api.example.com
    tags:
      - Configurations
      - Accounts
      - Balances
      - Cards
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/api-explorer/balanceplatform/2/overview
      - type: OpenAPI
        url: properties/configuration-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Configuration API
          tags:
            - name: Platform
            - name: Account holders
            - name: Balance accounts
            - name: Payment instruments
            - name: Payment instrument groups
            - name: Transaction rules
            - name: Bank account validation
            - name: Network tokens
            - name: Grant accounts
            - name: Grant offers
            - name: PIN functionality
            - name: Card orders
            - name: Transfer routes
          paths:
            /accountHolders:
              post:
                tags:
                  - Create
                  - An
                  - Account
                  - Holder
                  - Holders
                summary: Create an account holder
                description: >+
                  Creates an account holder linked to a [legal
                  entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).

            /accountHolders/{id}:
              get:
                tags:
                  - Get
                  - An
                  - Account
                  - Holder
                  - Holders
                  - Id
                summary: Get an account holder
                description: Returns an account holder.
              patch:
                tags:
                  - Update
                  - An
                  - Account
                  - Holder
                  - Holders
                  - Id
                summary: Update an account holder
                description: >-
                  Updates an account holder. When updating an account holder
                  resource, if a parameter is not provided in the request, it is
                  left unchanged.
            /accountHolders/{id}/balanceAccounts:
              get:
                tags:
                  - Get
                  - All
                  - Balance
                  - Accounts
                  - Of
                  - An
                  - Account
                  - Holder
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                summary: Get all balance accounts of an account holder
                description: >-
                  Returns a paginated list of the balance accounts associated
                  with an account holder. To fetch multiple pages, use the query
                  parameters. 


                  For example, to limit the page to 5 balance accounts and skip
                  the first 10, use
                  `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.
            /accountHolders/{id}/taxForms:
              get:
                tags:
                  - Get
                  - Tax
                  - Form
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                summary: Get a tax form
                description: >-
                  Generates a tax form for account holders operating in the US.
                  For more information, refer to [Providing tax
                  forms](https://docs.adyen.com/marketplaces-and-platforms/us-tax-forms/).
            /balanceAccounts:
              post:
                tags:
                  - Create
                  - Balance
                  - Account
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                summary: Create a balance account
                description: >-
                  Creates a balance account that holds the funds of the
                  associated account holder.
            /balanceAccounts/{balanceAccountId}/sweeps:
              get:
                tags:
                  - Get
                  - All
                  - Sweeps
                  - For
                  - Balance
                  - Account
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                summary: Get all sweeps for a balance account
                description: >-
                  Returns a list of the sweeps configured for a balance account.


                  To fetch multiple pages, use the query parameters. For
                  example, to limit the page to 5 sweeps and to skip the first
                  10, use
                  `/balanceAccounts/{balanceAccountId}/sweeps?limit=5&offset=10`.
              post:
                tags:
                  - Create
                  - Sweep
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                summary: Create a sweep
                description: >-
                  Creates a sweep that results in moving funds from or to a
                  balance account.


                  A sweep pulls in or pushes out funds based on a defined
                  schedule, amount, currency, and a source or a destination.
            /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}:
              delete:
                tags:
                  - Delete
                  - Sweep
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                summary: Delete a sweep
                description: Deletes a sweep for a balance account.
              get:
                tags:
                  - Get
                  - Sweep
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                summary: Get a sweep
                description: Returns a sweep.
              patch:
                tags:
                  - Update
                  - Sweep
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                summary: Update a sweep
                description: >-
                  Updates a sweep. When updating a sweep resource, note that if
                  a request parameter is not provided, the parameter is left
                  unchanged.
            /balanceAccounts/{id}:
              get:
                tags:
                  - Get
                  - Balance
                  - Account
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                summary: Get a balance account
                description: >-
                  Returns a balance account and its balances for the default
                  currency and other currencies with a non-zero balance.
              patch:
                tags:
                  - Update
                  - Balance
                  - Account
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                summary: Update a balance account
                description: Updates a balance account.
            /balanceAccounts/{id}/paymentInstruments:
              get:
                tags:
                  - Get
                  - Payment
                  - Instruments
                  - Linked
                  - To
                  - Balance
                  - Account
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                summary: Get payment instruments linked to a balance account
                description: >-
                  Returns a paginated list of the payment instruments associated
                  with a balance account. 


                  To fetch multiple pages, use the query parameters.For example,
                  to limit the page to 3 payment instruments which are in active
                  status and to skip the first 6, use
                  `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6&status=active`.
            /balancePlatforms/{id}:
              get:
                tags:
                  - Get
                  - Balance
                  - Platform
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                summary: Get a balance platform
                description: Returns a balance platform.
            /balancePlatforms/{id}/accountHolders:
              get:
                tags:
                  - Get
                  - All
                  - Account
                  - Holders
                  - Under
                  - Balance
                  - Platform
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                summary: Get all account holders under a balance platform
                description: >-
                  Returns a paginated list of all the account holders that
                  belong to the balance platform. To fetch multiple pages, use
                  the query parameters. 


                  For example, to limit the page to 5 account holders and to
                  skip the first 20, use
                  `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.
            /cardorders:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Card
                  - Orders
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                summary: Get a list of card orders
                description: Returns a paginated list of card orders.
            /cardorders/{id}/items:
              get:
                tags:
                  - Get
                  - Card
                  - Order
                  - Items
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                summary: Get card order items
                description: Returns the item list of a specific card order.
            /grantAccounts/{id}:
              get:
                tags:
                  - Get
                  - Grant
                  - Account
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                summary: Get a grant account
                description: >-
                  Returns the details of the [grant
                  account](https://docs.adyen.com/marketplaces-and-platforms/capital#grant-account).
            /grantOffers:
              get:
                tags:
                  - Get
                  - All
                  - Available
                  - Grant
                  - Offers
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                summary: Get all available grant offers
                description: >-
                  Returns a list of all [grant
                  offers](https://docs.adyen.com/marketplaces-and-platforms/capital#grant-offers)
                  available for `accountHolderId` specified as a query
                  parameter.
            /grantOffers/{grantOfferId}:
              get:
                tags:
                  - Get
                  - Grant
                  - Offer
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                summary: Get a grant offer
                description: Returns the details of a single grant offer.
            /networkTokens/{networkTokenId}:
              get:
                tags:
                  - Get
                  - Network
                  - Token
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                summary: Get a network token
                description: Returns the details of a network token.
              patch:
                tags:
                  - Update
                  - Network
                  - Token
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                summary: Update a network token
                description: Updates the status of the network token.
            /paymentInstrumentGroups:
              post:
                tags:
                  - Create
                  - Payment
                  - Instrument
                  - Group
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                summary: Create a payment instrument group
                description: >-
                  Creates a payment instrument group to associate and group
                  payment instrument resources together. You can apply a
                  transaction rule to a payment instrument group.
            /paymentInstrumentGroups/{id}:
              get:
                tags:
                  - Get
                  - Payment
                  - Instrument
                  - Group
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                summary: Get a payment instrument group
                description: Returns the details of a payment instrument group.
            /paymentInstrumentGroups/{id}/transactionRules:
              get:
                tags:
                  - Get
                  - All
                  - Transaction
                  - Rules
                  - For
                  - Payment
                  - Instrument
                  - Group
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                summary: Get all transaction rules for a payment instrument group
                description: >-
                  Returns a list of all the transaction rules associated with a
                  payment instrument group.
            /paymentInstruments:
              post:
                tags:
                  - Create
                  - Payment
                  - Instrument
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                summary: Create a payment instrument
                description: >-
                  Creates a payment instrument to issue a physical card, a
                  virtual card, or a business account to your user.

                   For more information, refer to [Issue cards](https://docs.adyen.com/issuing/create-cards) or [Issue business accounts](https://docs.adyen.com/marketplaces-and-platforms/business-accounts).
            /paymentInstruments/{id}:
              get:
                tags:
                  - Get
                  - Payment
                  - Instrument
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                summary: Get a payment instrument
                description: Returns the details of a payment instrument.
              patch:
                tags:
                  - Update
                  - Payment
                  - Instrument
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                summary: Update a payment instrument
                description: >-
                  Updates a payment instrument. Once a payment instrument is
                  already active, you can only update its status. However, for
                  cards created with **inactive** status, you can still update
                  the balance account associated with the card.
            /paymentInstruments/{id}/networkTokens:
              get:
                tags:
                  - List
                  - Network
                  - Tokens
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                summary: List network tokens
                description: List the network tokens connected to a payment instrument.
            /paymentInstruments/{id}/reveal:
              get:
                tags:
                  - Get
                  - The
                  - Of
                  - Payment
                  - Instrument
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                  - Reveal
                summary: Get the PAN of a payment instrument
                description: >-
                  Returns the primary account number (PAN) of a payment
                  instrument.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service#api-permissions):


                  * Balance Platform BCL PCI role
            /paymentInstruments/{id}/transactionRules:
              get:
                tags:
                  - Get
                  - All
                  - Transaction
                  - Rules
                  - For
                  - Payment
                  - Instrument
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                  - Reveal
                summary: Get all transaction rules for a payment instrument
                description: >-
                  Returns a list of transaction rules associated with a payment
                  instrument.
            /pins/change:
              post:
                tags:
                  - Change
                  - Pin
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                  - Reveal
                  - Pins
                  - Change
                summary: Change Pin
                description: Change Pin
            /pins/publicKey:
              get:
                tags:
                  - Get
                  - Public
                  - Key
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                  - Reveal
                  - Pins
                  - Change
                  - Key
                summary: Get RSA publicKey
                description: Get RSA publicKey
            /pins/reveal:
              post:
                tags:
                  - Reveal
                  - Pin
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                  - Reveal
                  - Pins
                  - Change
                  - Key
                summary: Reveal Pin
                description: Reveal Pin
            /transactionRules:
              post:
                tags:
                  - Create
                  - Transaction
                  - Rule
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                  - Reveal
                  - Pins
                  - Change
                  - Key
                summary: Create a transaction rule
                description: >-
                  Creates a [transaction
                  rule](https://docs.adyen.com/issuing/transaction-rules). When
                  your user makes a transaction with their Adyen-issued card,
                  the transaction is allowed or declined based on the conditions
                  and outcome defined in the transaction rule. You can apply the
                  transaction rule to several cards, such as all the cards in
                  your platform, or to a specific card. For use cases, see
                  [examples](https://docs.adyen.com/issuing/transaction-rules/examples).
            /transactionRules/{transactionRuleId}:
              delete:
                tags:
                  - Delete
                  - Transaction
                  - Rule
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                  - Reveal
                  - Pins
                  - Change
                  - Key
                  - Rule
                summary: Delete a transaction rule
                description: Deletes a transaction rule.
              get:
                tags:
                  - Get
                  - Transaction
                  - Rule
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                  - Reveal
                  - Pins
                  - Change
                  - Key
                  - Rule
                summary: Get a transaction rule
                description: Returns the details of a transaction rule.
              patch:
                tags:
                  - Update
                  - Transaction
                  - Rule
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                  - Reveal
                  - Pins
                  - Change
                  - Key
                  - Rule
                summary: Update a transaction rule
                description: >-
                  Updates a transaction rule. 


                  * To update only the status of a transaction rule, send only
                  the `status` parameter. All other parameters not provided in
                  the request are left unchanged.


                  * When updating any other parameter, you need to send all
                  existing resource parameters. If you omit a parameter in the
                  request, that parameter is removed from the resource.
            /transferRoutes/calculate:
              post:
                tags:
                  - Calculate
                  - Transfer
                  - Routes
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                  - Reveal
                  - Pins
                  - Change
                  - Key
                  - Rule
                  - Routes
                  - Calculate
                summary: Calculate transfer routes
                description: >-
                  Returns available transfer routes based on a combination of
                  transfer `country`, `currency`, `counterparty`, and
                  `priorities`. Use this endpoint to find optimal transfer
                  priorities and associated requirements before you [make a
                  transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers).
            /validateBankAccountIdentification:
              post:
                tags:
                  - Validate
                  - Bank
                  - Account
                  - Holders
                  - Id
                  - Balance
                  - Accounts
                  - Tax
                  - Forms
                  - Account
                  - Sweeps
                  - Sweep
                  - Payment
                  - Instruments
                  - Platforms
                  - Cardorders
                  - Items
                  - Offers
                  - Grant
                  - Offer
                  - Tokens
                  - Network
                  - Token
                  - Instrument
                  - Groups
                  - Transaction
                  - Rules
                  - Reveal
                  - Pins
                  - Change
                  - Key
                  - Rule
                  - Routes
                  - Calculate
                  - Bank
                  - Identification
                summary: Validate a bank account
                description: >-
                  Validates bank account identification details. You can use
                  this endpoint to validate bank account details before you
                  [make a
                  transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers)
                  or [create a transfer
                  instrument](https://docs.adyen.com/api-explorer/legalentity/latest/po
    overlays:
      - type: APIs.io Search
        url: overlays/configuration-openapi-search.yml
    aid: adyen:adyen-configuration-api
  - name: Adyen Configuration Webhooks API
    description: >-
      Adyen sends webhooks to inform your system about events that occur in your
      platform. These events include, for example, when an account holders
      capabilities are updated, or when a sweep configuration is created or
      updated. When an event occurs, Adyen makes an HTTP POST request to a URL
      on your server and includes the details of the event in the request body.
      You can use these webhooks to build your implementation.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/api-explorer/balanceplatform-webhooks/1/overview
    baseURL: https://api.example.com
    tags:
      - Configurations
      - Webhooks
      - Accounts
    properties:
      - type: OpenAPI
        url: >-
          https://docs.adyen.com/api-explorer/balanceplatform-webhooks/1/overview
      - type: OpenAPI
        url: properties/configuration-webhooks-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/configuration-webhooks-openapi-search.yml
    aid: adyen:adyen-configuration-webhooks-api
  - name: Adyen Data Protection API
    description: >-
      Adyen Data Protection API provides a way for you to process [Subject
      Erasure Requests](https://gdpr-info.eu/art-17-gdpr/) as mandated in GDPR.
      Use our API to submit a request to delete shopper''s data, including
      payment details and other related information (for example, delivery
      address or shopper email).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://gdpr-info.eu/art-17-gdpr/
    baseURL: https://api.example.com
    tags:
      - Data
      - Privacy
      - GDPR
    properties:
      - type: OpenAPI
        url: https://gdpr-info.eu/art-17-gdpr/
      - type: OpenAPI
        url: properties/data-protection-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Adyen Data Protection API
          tags:
            - name: General
          paths:
            /requestSubjectErasure:
              post:
                tags:
                  - Submit
                  - Subject
                  - Erasure
                  - Request.
                  - Subject
                  - Erasure
                summary: Submit a Subject Erasure Request.
                description: Sends the PSP reference containing the shopper
    overlays:
      - type: APIs.io Search
        url: overlays/data-protection-openapi-search.yml
    aid: adyen:adyen-data-protection-api
  - name: Adyen Disputes API
    description: >-
      You can use the Disputes API to automate the dispute handling process so
      that you can respond to disputes and chargebacks as soon as they are
      initiated. The Disputes API lets you retrieve defense reasons, supply and
      delete defense documents, and accept or defend disputes.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/risk-management/disputes-api
    baseURL: https://api.example.com
    tags:
      - Disputes
      - Chargebacks
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/risk-management/disputes-api
      - type: OpenAPI
        url: properties/disputes-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Disputes API
          tags:
            - name: General
          paths:
            /acceptDispute:
              post:
                tags:
                  - Accept
                  - Dispute
                  - Dispute
                summary: Accept a dispute
                description: Accepts a specific dispute.
            /defendDispute:
              post:
                tags:
                  - Defend
                  - Dispute
                  - Dispute
                summary: Defend a dispute
                description: Defends a specific dispute.
            /deleteDisputeDefenseDocument:
              post:
                tags:
                  - Delete
                  - Defense
                  - Document
                  - Dispute
                  - Defense
                  - Document
                summary: Delete a defense document
                description: >-
                  Deletes a specific dispute defense document that was supplied
                  earlier.
            /retrieveApplicableDefenseReasons:
              post:
                tags:
                  - Get
                  - Applicable
                  - Defense
                  - Reasons
                  - Dispute
                  - Defense
                  - Document
                  - Applicable
                  - Reasons
                summary: Get applicable defense reasons
                description: >-
                  Returns a list of all applicable defense reasons to defend a
                  specific dispute.
            /supplyDefenseDocument:
              post:
                tags:
                  - Supply
                  - Defense
                  - Document
                  - Dispute
                  - Defense
                  - Document
                  - Applicable
                  - Reasons
                summary: Supply a defense document
                description: Supplies a specific d
    overlays:
      - type: APIs.io Search
        url: overlays/disputes-openapi-search.yml
    aid: adyen:adyen-disputes-api
  - name: Adyen Funds API
    description: >-
      The Fund API provides endpoints for managing the funds in the accounts on
      your platform. These management operations include, for example, the
      transfer of funds from one account to another, the payout of funds to an
      account holder, and the retrieval of balances in an account.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/marketplaces-and-platforms/classic/fund-transfer/
    baseURL: https://api.example.com
    tags:
      - Funds
      - Accounts
      - Balances
    properties:
      - type: OpenAPI
        url: >-
          https://docs.adyen.com/marketplaces-and-platforms/classic/fund-transfer/
      - type: OpenAPI
        url: properties/funds-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Fund API
            x-timestamp: '2023-05-30T15:27:19Z'
          x-groups:
            - General
            - Migration
          tags:
            - name: General
          paths:
            /accountHolderBalance:
              post:
                tags:
                  - Get
                  - The
                  - Balances
                  - Of
                  - An
                  - Account
                  - Holder
                  - Holder
                  - Balance
                summary: Get the balances of an account holder
                description: >-
                  Returns the account balances of an account holder. An
                  account's balances are organized according by currencies. This
                  mean that an account may have multiple balances: one for each
                  currency.
            /accountHolderTransactionList:
              post:
                tags:
                  - Get
                  - List
                  - Of
                  - Transactions
                  - Holder
                  - Balance
                  - Transaction
                  - List
                summary: Get a list of transactions
                description: >-
                  Returns a list of transactions for an account holder's
                  accounts. You can specify the accounts and transaction
                  statuses to be included on the list. The call returns a
                  maximum of 50 transactions for each account. To retrieve all
                  transactions, you must make another call with the 'page' value
                  incremented. Transactions are listed in chronological order,
                  with the most recent transaction first.
            /debitAccountHolder:
              post:
                tags:
                  - Send
                  - Direct
                  - Debit
                  - Request
                  - Holder
                  - Balance
                  - Transaction
                  - List
                  - Account
                summary: Send a direct debit request
                description: >-
                  Sends a direct debit request to an account holder's bank
                  account. If the direct debit is successful, the funds are
                  settled in the accounts specified in the split instructions.
                  Adyen sends the result of the direct debit in a
                  [`DIRECT_DEBIT_INITIATED`](https://docs.adyen.com/api-explorer/#/NotificationService/latest/post/DIRECT_DEBIT_INITIATED)
                  notification webhook.

                   To learn more about direct debits, see [Top up accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/top-up-accounts).
            /payoutAccountHolder:
              post:
                tags:
                  - Pay
                  - Out
                  - From
                  - An
                  - Account
                  - To
                  - The
                  - Holder
                  - Holder
                  - Balance
                  - Transaction
                  - List
                  - Account
                summary: Pay out from an account to the account holder
                description: >-
                  Pays out a specified amount from an account to the bank
                  account of account holder.
            /refundFundsTransfer:
              post:
                tags:
                  - Refund
                  - Funds
                  - Transfer
                  - Holder
                  - Balance
                  - Transaction
                  - List
                  - Account
                  - Funds
                  - Transfer
                summary: Refund a funds transfer
                description: >-
                  Refunds funds transferred from one account to another. Both
                  accounts must be in the same platform, but can have different
                  account holders. 
            /refundNotPaidOutTransfers:
              post:
                tags:
                  - Refund
                  - All
                  - Transactions
                  - Of
                  - An
                  - Account
                  - Since
                  - The
                  - Most
                  - Recent
                  - Payout
                  - Holder
                  - Balance
                  - Transaction
                  - List
                  - Account
                  - Funds
                  - Transfer
                  - Not
                  - Paid
                  - Out
                  - Transfers
                summary: >-
                  Refund all transactions of an account since the most recent
                  payout
                description: >-
                  Refunds all the transactions of an account that have taken
                  place since the most recent payout. This request is on a
                  account basis (as opposed to a payment basis), so only the
                  portion of the payment that was made to the specified account
                  is refunded. The commissions, fees, and payments to other
                  accounts remain in the accounts to which they were sent as
                  designated by the original payment's split details.
            /setupBeneficiary:
              post:
                tags:
                  - Designate
                  - Beneficiary
                  - Account
                  - And
                  - Transfer
                  - The
                  - Benefactor's
                  - Current
                  - Balance
                  - Holder
                  - Balance
                  - Transaction
                  - List
                  - Account
                  - Funds
                  - Transfer
                  - Not
                  - Paid
                  - Out
                  - Transfers
                  - Beneficiary
                summary: >-
                  Designate a beneficiary account and transfer the benefactor's
                  current balance
                description: >-
                  Defines a benefactor and a beneficiary relationship between
                  two accounts. At the time of benefactor/beneficiary setup, the
                  funds in the benefactor account are transferred to the
                  beneficiary account, and any further payments to the
                  benefactor account are automatically sent to the beneficiary
                  account. A series of benefactor/beneficiaries may not exceed
                  four beneficiaries and may not have a cycle in it.
            /transferFunds:
              post:
                tags:
                  - Transfer
                  - Funds
                  - Between
                  - Platform
                  - Accounts
                  - Holder
                  - Balance
                  - Transaction
                  - List
                  - Account
                  - Funds
                  - Transfer
                  - Not
                  - Paid
                  - Out
                  - Transfers
                  - Beneficiary
                summary: Transfer funds between platform accounts
                description: >-
                  Transfers funds from one account to another account. Both
                  accounts must be in the same platform, but can have different
                  account holders. The transfer must include a transfer code,
                  which should be determined by the platform, in compliance
    overlays:
      - type: APIs.io Search
        url: overlays/funds-openapi-search.yml
    aid: adyen:adyen-funds-api
  - name: Adyen Hosted Onboarding API
    description: >-
      The Fund API provides endpoints for managing the funds in the accounts on
      your platform. These management operations include, for example, the
      transfer of funds from one account to another, the payout of funds to an
      account holder, and the retrieval of balances in an account.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://docs.adyen.com/marketplaces-and-platforms/collect-verification-details/hosted/
    baseURL: https://api.example.com
    tags:
      - Hosted
      - Onboarding
      - Accounts
    properties:
      - type: OpenAPI
        url: >-
          https://docs.adyen.com/marketplaces-and-platforms/collect-verification-details/hosted/
      - type: OpenAPI
        url: properties/hosted-onboarding-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Hosted Onboarding API
            x-timestamp: '2023-05-30T15:27:20Z'
          x-groups:
            - Hosted Onboarding Page
            - PCI Compliance Questionnaire Page
          tags:
            - name: Hosted Onboarding Page
            - name: PCI Compliance Questionnaire Page
          paths:
            /getOnboardingUrl:
              post:
                tags:
                  - Get
                  - Link
                  - To
                  - Adyen-hosted
                  - Onboarding
                  - Page
                  - Onboarding
                  - Url
                summary: Get a link to a Adyen-hosted onboarding page
                description: >-
                  Returns a link to an Adyen-hosted onboarding page (HOP) that
                  you can send to your account holder. For more information on
                  how to use HOP, refer to [Hosted
                  onboarding](https://docs.adyen.com/marketplaces-and-platforms/classic/collect-verification-details/hosted-onboarding-page). 
            /getPciQuestionnaireUrl:
              post:
                tags:
                  - Get
                  - Link
                  - To
                  - Compliance
                  - Questionnaire
                  - Onboarding
                  - Url
                  - Pci
                  - Questionnaire
                summary: Get a link to a PCI compliance questionnaire
                description: >-
                  Returns a link to a PCI compliance questionnaire that you can
                  send to your account holder.
                   > You should only use this endpoint if you have a [partner platform setup](https://docs.adyen.com/marketplaces-and-platforms/classic/
    overlays:
      - type: APIs.io Search
        url: overlays/hosted-onboarding-openapi-search.yml
    aid: adyen:adyen-hosted-onboarding-api
  - name: Adyen Legal Entity API
    description: >-
      The Legal Entity Management API enables you to manage legal entities that
      contain information required for verification.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://docs.adyen.com/marketplaces-and-platforms/legal-entity-management-api/
    baseURL: https://api.example.com
    tags: &ref_0
      - Legal
      - Entities
      - Verifications
    properties:
      - type: OpenAPI
        url: >-
          https://docs.adyen.com/marketplaces-and-platforms/legal-entity-management-api/
      - type: OpenAPI
        url: properties/legal-entity-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Legal Entity Management API
          tags:
            - name: Legal entities
            - name: Transfer instruments
            - name: Business lines
            - name: Documents
            - name: Terms of Service
            - name: Hosted Onboarding
            - name: PCI questionnaires
          paths:
            /businessLines:
              post:
                tags:
                  - Create
                  - Business
                  - Line
                  - Lines
                summary: Create a business line
                description: >+
                  Creates a business line. 


                  This resource contains information about your user's line of
                  business, including their industry and their source of funds.
                  Adyen uses this information to verify your users as required
                  by payment industry regulations. Adyen informs you of the
                  verification results through webhooks or API responses.


                  >If you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

            /businessLines/{id}:
              delete:
                tags:
                  - Delete
                  - Business
                  - Line
                  - Lines
                  - Id
                summary: Delete a business line
                description: |-
                  Deletes a business line.

                   >If you delete a business line linked to a [payment method](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api), it can affect your merchant account's ability to use the [payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings). The business line is removed from all linked merchant accounts.
              get:
                tags:
                  - Get
                  - Business
                  - Line
                  - Lines
                  - Id
                summary: Get a business line
                description: Returns the detail of a business line.
              patch:
                tags:
                  - Update
                  - Business
                  - Line
                  - Lines
                  - Id
                summary: Update a business line
                description: Updates a business line.
            /documents:
              post:
                tags:
                  - Upload
                  - Document
                  - For
                  - Verification
                  - Checks
                  - Lines
                  - Id
                  - Documents
                summary: Upload a document for verification checks
                description: |-
                  Uploads a document for verification checks.

                   Adyen uses the information from the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities) to run automated verification checks. If these checks fail, you will be notified to provide additional documents.

                   You should only upload documents when Adyen requests additional information for the legal entity.

                   >You can upload a maximum of 15 pages for photo IDs.
            /documents/{id}:
              delete:
                tags:
                  - Delete
                  - Document
                  - Lines
                  - Id
                  - Documents
                summary: Delete a document
                description: Deletes a document.
              get:
                tags:
                  - Get
                  - Document
                  - Lines
                  - Id
                  - Documents
                summary: Get a document
                description: Returns a document.
              patch:
                tags:
                  - Update
                  - Document
                  - Lines
                  - Id
                  - Documents
                summary: Update a document
                description: |-
                  Updates a document.

                   >You can upload a maximum of 15 pages for photo IDs.
            /legalEntities:
              post:
                tags:
                  - Create
                  - Legal
                  - Entity
                  - Lines
                  - Id
                  - Documents
                  - Entities
                summary: Create a legal entity
                description: >+
                  Creates a legal entity. 


                  This resource contains information about the user that will be
                  onboarded in your platform. Adyen uses this information to
                  perform verification checks as required by payment industry
                  regulations. Adyen informs you of the verification results
                  through webhooks or API responses. 


                  >If you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

            /legalEntities/{id}:
              get:
                tags:
                  - Get
                  - Legal
                  - Entity
                  - Lines
                  - Id
                  - Documents
                  - Entities
                summary: Get a legal entity
                description: Returns a legal entity.
              patch:
                tags:
                  - Update
                  - Legal
                  - Entity
                  - Lines
                  - Id
                  - Documents
                  - Entities
                summary: Update a legal entity
                description: |-
                  Updates a legal entity.

                   >To change the legal entity type, include only the new `type` in your request. To update the `entityAssociations` array, you need to replace the entire array. For example, if the array has 3 entries and you want to remove 1 entry, you need to PATCH the resource with the remaining 2 entries.
            /legalEntities/{id}/businessLines:
              get:
                tags:
                  - Get
                  - All
                  - Business
                  - Lines
                  - Under
                  - Legal
                  - Entity
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                summary: Get all business lines under a legal entity
                description: Returns the business lines owned by a legal entity.
            /legalEntities/{id}/checkVerificationErrors:
              post:
                tags:
                  - Check
                  - Legal
                  - Entity's
                  - Verification
                  - Errors
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                summary: Check a legal entity's verification errors
                description: >-
                  Returns the verification errors for a legal entity and its
                  supporting entities.
            /legalEntities/{id}/confirmDataReview:
              post:
                tags:
                  - Confirm
                  - Data
                  - Review
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                summary: Confirm data review
                description: >-
                  Confirms that your user has reviewed the data for the legal
                  entity specified in the path. Call this endpoint to inform
                  Adyen that your user reviewed and verified that the data is
                  up-to-date. The endpoint returns the timestamp of when Adyen
                  received the request.
            /legalEntities/{id}/onboardingLinks:
              post:
                tags:
                  - Get
                  - Link
                  - To
                  - An
                  - Adyen-hosted
                  - Onboarding
                  - Page
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                summary: Get a link to an Adyen-hosted onboarding page
                description: >+
                  Returns a link to an Adyen-hosted onboarding page where you
                  need to redirect your user.


                  >If you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

            /legalEntities/{id}/pciQuestionnaires:
              get:
                tags:
                  - Get
                  - Questionnaire
                  - Details
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                summary: Get PCI questionnaire details
                description: Get a list of signed PCI questionnaires.
            /legalEntities/{id}/pciQuestionnaires/generatePciTemplates:
              post:
                tags:
                  - Generate
                  - Questionnaire
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                summary: Generate PCI questionnaire
                description: >-
                  Generates the required PCI questionnaires based on the user's
                  [salesChannel](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__reqParam_salesChannels).
            /legalEntities/{id}/pciQuestionnaires/signPciTemplates:
              post:
                tags:
                  - Sign
                  - Questionnaire
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                summary: Sign PCI questionnaire
                description: Signs the required PCI questionnaire.
            /legalEntities/{id}/pciQuestionnaires/{pciid}:
              get:
                tags:
                  - Get
                  - Questionnaire
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                summary: Get PCI questionnaire
                description: Returns the signed PCI questionnaire.
            /legalEntities/{id}/termsOfService:
              post:
                tags:
                  - Get
                  - Terms
                  - Of
                  - Service
                  - Document
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                summary: Get Terms of Service document
                description: Returns the Terms of Service document for a legal entity.
            /legalEntities/{id}/termsOfService/{termsofservicedocumentid}:
              patch:
                tags:
                  - Accept
                  - Terms
                  - Of
                  - Service
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                summary: Accept Terms of Service
                description: Accepts Terms of Service.
            /legalEntities/{id}/termsOfServiceAcceptanceInfos:
              get:
                tags:
                  - Get
                  - Terms
                  - Of
                  - Service
                  - Information
                  - For
                  - Legal
                  - Entity
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                summary: Get Terms of Service information for a legal entity
                description: Returns Terms of Service information for a legal entity.
            /legalEntities/{id}/termsOfServiceStatus:
              get:
                tags:
                  - Get
                  - Terms
                  - Of
                  - Service
                  - Status
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                  - Status
                summary: Get Terms of Service status
                description: >-
                  Returns the required types of Terms of Service that need to be
                  accepted by a legal entity.
            /themes:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Hosted
                  - Onboarding
                  - Page
                  - Themes
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                  - Status
                  - Themes
                summary: Get a list of hosted onboarding page themes
                description: >+
                  Returns a list of hosted onboarding page themes.


                  >If you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

            /themes/{id}:
              get:
                tags:
                  - Get
                  - An
                  - Onboarding
                  - Link
                  - Theme
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                  - Status
                  - Themes
                summary: Get an onboarding link theme
                description: >+
                  Returns the details of the theme identified in the path.>If
                  you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

            /transferInstruments:
              post:
                tags:
                  - Create
                  - Transfer
                  - Instrument
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                  - Status
                  - Themes
                  - Instruments
                summary: Create a transfer instrument
                description: >-
                  Creates a transfer instrument. 


                  A transfer instrument is a bank account that a legal entity
                  owns. Adyen performs verification checks on the transfer
                  instrument as required by payment industry regulations. We
                  inform you of the verification results through webhooks or API
                  responses.


                  When the transfer instrument passes the verification checks,
                  you can start sending funds from the balance platform to the
                  transfer instrument (such as payouts).
            /transferInstruments/{id}:
              delete:
                tags:
                  - Delete
                  - Transfer
                  - Instrument
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                  - Status
                  - Themes
                  - Instruments
                summary: Delete a transfer instrument
                description: Deletes a transfer instrument.
              get:
                tags:
                  - Get
                  - Transfer
                  - Instrument
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                  - Status
                  - Themes
                  - Instruments
                summary: Get a transfer instrument
                description: Returns the details of a transfer instrument.
              patch:
                tags:
                  - Update
                  - Transfer
                  - Instrument
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                  - Status
                  - Themes
                  - Instruments
                summary: Update a transfer instrument
                description: Updat
    overlays:
      - type: APIs.io Search
        url: overlays/legal-entity-openapi-search.yml
    aid: adyen:adyen-legal-entity-api
  - name: Adyen Legal Entity API
    description: >-
      The Legal Entity Management API enables you to manage legal entities that
      contain information required for verification.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://docs.adyen.com/marketplaces-and-platforms/legal-entity-management-api/
    baseURL: https://api.example.com
    tags: *ref_0
    properties:
      - type: OpenAPI
        url: >-
          https://docs.adyen.com/marketplaces-and-platforms/legal-entity-management-api/
      - type: OpenAPI
        url: properties/legal-entity-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Legal Entity Management API
          tags:
            - name: Legal entities
            - name: Transfer instruments
            - name: Business lines
            - name: Documents
            - name: Terms of Service
            - name: Hosted Onboarding
            - name: PCI questionnaires
          paths:
            /businessLines:
              post:
                tags:
                  - Create
                  - Business
                  - Line
                  - Lines
                summary: Create a business line
                description: >+
                  Creates a business line. 


                  This resource contains information about your user's line of
                  business, including their industry and their source of funds.
                  Adyen uses this information to verify your users as required
                  by payment industry regulations. Adyen informs you of the
                  verification results through webhooks or API responses.


                  >If you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

            /businessLines/{id}:
              delete:
                tags:
                  - Delete
                  - Business
                  - Line
                  - Lines
                  - Id
                summary: Delete a business line
                description: |-
                  Deletes a business line.

                   >If you delete a business line linked to a [payment method](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api), it can affect your merchant account's ability to use the [payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings). The business line is removed from all linked merchant accounts.
              get:
                tags:
                  - Get
                  - Business
                  - Line
                  - Lines
                  - Id
                summary: Get a business line
                description: Returns the detail of a business line.
              patch:
                tags:
                  - Update
                  - Business
                  - Line
                  - Lines
                  - Id
                summary: Update a business line
                description: Updates a business line.
            /documents:
              post:
                tags:
                  - Upload
                  - Document
                  - For
                  - Verification
                  - Checks
                  - Lines
                  - Id
                  - Documents
                summary: Upload a document for verification checks
                description: |-
                  Uploads a document for verification checks.

                   Adyen uses the information from the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities) to run automated verification checks. If these checks fail, you will be notified to provide additional documents.

                   You should only upload documents when Adyen requests additional information for the legal entity.

                   >You can upload a maximum of 15 pages for photo IDs.
            /documents/{id}:
              delete:
                tags:
                  - Delete
                  - Document
                  - Lines
                  - Id
                  - Documents
                summary: Delete a document
                description: Deletes a document.
              get:
                tags:
                  - Get
                  - Document
                  - Lines
                  - Id
                  - Documents
                summary: Get a document
                description: Returns a document.
              patch:
                tags:
                  - Update
                  - Document
                  - Lines
                  - Id
                  - Documents
                summary: Update a document
                description: |-
                  Updates a document.

                   >You can upload a maximum of 15 pages for photo IDs.
            /legalEntities:
              post:
                tags:
                  - Create
                  - Legal
                  - Entity
                  - Lines
                  - Id
                  - Documents
                  - Entities
                summary: Create a legal entity
                description: >+
                  Creates a legal entity. 


                  This resource contains information about the user that will be
                  onboarded in your platform. Adyen uses this information to
                  perform verification checks as required by payment industry
                  regulations. Adyen informs you of the verification results
                  through webhooks or API responses. 


                  >If you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

            /legalEntities/{id}:
              get:
                tags:
                  - Get
                  - Legal
                  - Entity
                  - Lines
                  - Id
                  - Documents
                  - Entities
                summary: Get a legal entity
                description: Returns a legal entity.
              patch:
                tags:
                  - Update
                  - Legal
                  - Entity
                  - Lines
                  - Id
                  - Documents
                  - Entities
                summary: Update a legal entity
                description: |-
                  Updates a legal entity.

                   >To change the legal entity type, include only the new `type` in your request. To update the `entityAssociations` array, you need to replace the entire array. For example, if the array has 3 entries and you want to remove 1 entry, you need to PATCH the resource with the remaining 2 entries.
            /legalEntities/{id}/businessLines:
              get:
                tags:
                  - Get
                  - All
                  - Business
                  - Lines
                  - Under
                  - Legal
                  - Entity
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                summary: Get all business lines under a legal entity
                description: Returns the business lines owned by a legal entity.
            /legalEntities/{id}/checkVerificationErrors:
              post:
                tags:
                  - Check
                  - Legal
                  - Entity's
                  - Verification
                  - Errors
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                summary: Check a legal entity's verification errors
                description: >-
                  Returns the verification errors for a legal entity and its
                  supporting entities.
            /legalEntities/{id}/confirmDataReview:
              post:
                tags:
                  - Confirm
                  - Data
                  - Review
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                summary: Confirm data review
                description: >-
                  Confirms that your user has reviewed the data for the legal
                  entity specified in the path. Call this endpoint to inform
                  Adyen that your user reviewed and verified that the data is
                  up-to-date. The endpoint returns the timestamp of when Adyen
                  received the request.
            /legalEntities/{id}/onboardingLinks:
              post:
                tags:
                  - Get
                  - Link
                  - To
                  - An
                  - Adyen-hosted
                  - Onboarding
                  - Page
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                summary: Get a link to an Adyen-hosted onboarding page
                description: >+
                  Returns a link to an Adyen-hosted onboarding page where you
                  need to redirect your user.


                  >If you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

            /legalEntities/{id}/pciQuestionnaires:
              get:
                tags:
                  - Get
                  - Questionnaire
                  - Details
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                summary: Get PCI questionnaire details
                description: Get a list of signed PCI questionnaires.
            /legalEntities/{id}/pciQuestionnaires/generatePciTemplates:
              post:
                tags:
                  - Generate
                  - Questionnaire
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                summary: Generate PCI questionnaire
                description: >-
                  Generates the required PCI questionnaires based on the user's
                  [salesChannel](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__reqParam_salesChannels).
            /legalEntities/{id}/pciQuestionnaires/signPciTemplates:
              post:
                tags:
                  - Sign
                  - Questionnaire
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                summary: Sign PCI questionnaire
                description: Signs the required PCI questionnaire.
            /legalEntities/{id}/pciQuestionnaires/{pciid}:
              get:
                tags:
                  - Get
                  - Questionnaire
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                summary: Get PCI questionnaire
                description: Returns the signed PCI questionnaire.
            /legalEntities/{id}/termsOfService:
              post:
                tags:
                  - Get
                  - Terms
                  - Of
                  - Service
                  - Document
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                summary: Get Terms of Service document
                description: Returns the Terms of Service document for a legal entity.
            /legalEntities/{id}/termsOfService/{termsofservicedocumentid}:
              patch:
                tags:
                  - Accept
                  - Terms
                  - Of
                  - Service
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                summary: Accept Terms of Service
                description: Accepts Terms of Service.
            /legalEntities/{id}/termsOfServiceAcceptanceInfos:
              get:
                tags:
                  - Get
                  - Terms
                  - Of
                  - Service
                  - Information
                  - For
                  - Legal
                  - Entity
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                summary: Get Terms of Service information for a legal entity
                description: Returns Terms of Service information for a legal entity.
            /legalEntities/{id}/termsOfServiceStatus:
              get:
                tags:
                  - Get
                  - Terms
                  - Of
                  - Service
                  - Status
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                  - Status
                summary: Get Terms of Service status
                description: >-
                  Returns the required types of Terms of Service that need to be
                  accepted by a legal entity.
            /themes:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Hosted
                  - Onboarding
                  - Page
                  - Themes
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                  - Status
                  - Themes
                summary: Get a list of hosted onboarding page themes
                description: >+
                  Returns a list of hosted onboarding page themes.


                  >If you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

            /themes/{id}:
              get:
                tags:
                  - Get
                  - An
                  - Onboarding
                  - Link
                  - Theme
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                  - Status
                  - Themes
                summary: Get an onboarding link theme
                description: >+
                  Returns the details of the theme identified in the path.>If
                  you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

            /transferInstruments:
              post:
                tags:
                  - Create
                  - Transfer
                  - Instrument
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                  - Status
                  - Themes
                  - Instruments
                summary: Create a transfer instrument
                description: >-
                  Creates a transfer instrument. 


                  A transfer instrument is a bank account that a legal entity
                  owns. Adyen performs verification checks on the transfer
                  instrument as required by payment industry regulations. We
                  inform you of the verification results through webhooks or API
                  responses.


                  When the transfer instrument passes the verification checks,
                  you can start sending funds from the balance platform to the
                  transfer instrument (such as payouts).
            /transferInstruments/{id}:
              delete:
                tags:
                  - Delete
                  - Transfer
                  - Instrument
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                  - Status
                  - Themes
                  - Instruments
                summary: Delete a transfer instrument
                description: Deletes a transfer instrument.
              get:
                tags:
                  - Get
                  - Transfer
                  - Instrument
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                  - Status
                  - Themes
                  - Instruments
                summary: Get a transfer instrument
                description: Returns the details of a transfer instrument.
              patch:
                tags:
                  - Update
                  - Transfer
                  - Instrument
                  - Lines
                  - Id
                  - Documents
                  - Entities
                  - Business
                  - Check
                  - Verification
                  - Errors
                  - Confirm
                  - Data
                  - Review
                  - Onboarding
                  - Links
                  - Pci
                  - Questionnaires
                  - Generate
                  - Templates
                  - Sign
                  - Pciid
                  - Terms
                  - Of
                  - Service
                  - Termsofservicedocumentid
                  - Acceptance
                  - Infos
                  - Status
                  - Themes
                  - Instruments
                summary: Update a transfer instrument
                description: Updat
    overlays:
      - type: APIs.io Search
        url: overlays/legal-entity-openapi-search.yml
    aid: adyen:adyen-legal-entity-api
  - name: Adyen Management API
    description: >-
      Configure and manage your Adyen company and merchant accounts, stores, and
      payment terminals.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/api-explorer/Management/3/overview
    baseURL: https://api.example.com
    tags:
      - Management
      - Accounts
      - Stores
      - Terminals
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/api-explorer/Management/3/overview
      - type: OpenAPI
        url: properties/management-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Management API
          tags:
            - name: Account - company level
            - name: Account - merchant level
            - name: Account - store level
            - name: Payout settings - merchant level
            - name: Users - company level
            - name: Users - merchant level
            - name: My API credential
            - name: API credentials - company level
            - name: API credentials - merchant level
            - name: API key - company level
            - name: API key - merchant level
            - name: Client key - company level
            - name: Client key - merchant level
            - name: Allowed origins - company level
            - name: Allowed origins - merchant level
            - name: Webhooks - company level
            - name: Webhooks - merchant level
            - name: Payment methods - merchant level
            - name: Terminals - terminal level
            - name: Terminal actions - company level
            - name: Terminal actions - terminal level
            - name: Terminal orders - company level
            - name: Terminal orders - merchant level
            - name: Terminal settings - company level
            - name: Terminal settings - merchant level
            - name: Terminal settings - store level
            - name: Terminal settings - terminal level
            - name: Android files - company level
            - name: Split configuration - merchant level
          paths:
            /companies:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Company
                  - Accounts
                  - Companies
                summary: Get a list of company accounts
                description: >-
                  Returns the list of company accounts that your API credential
                  has access to. The list is grouped into pages as defined by
                  the query parameters.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):


                  * Management API—Account read
            /companies/{companyId}:
              get:
                tags:
                  - Get
                  - Company
                  - Account
                  - Companies
                  - Id
                summary: Get a company account
                description: >-
                  Returns the company account specified in the path. Your API
                  credential must have access to the company account. 


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Account read
            /companies/{companyId}/androidApps:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Android
                  - Apps
                  - Companies
                  - Id
                  - Android
                  - Apps
                summary: Get a list of Android apps
                description: >-
                  Returns a list of the Android apps that are available for the
                  company identified in the path. 

                  These apps have been uploaded to Adyen and can be installed or
                  uninstalled on Android payment terminals through [terminal
                  actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Android files read

                  * Management API—Android files read and write

                  * Management API—Terminal actions read

                  * Management API—Terminal actions read and write
              post:
                tags:
                  - Upload
                  - Android
                  - App
                  - Companies
                  - Id
                  - Android
                  - Apps
                summary: Upload Android App
                description: >-
                  Uploads an Android APK file to Adyen.

                  The maximum APK file size is 200 MB.

                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Android files read and write


                  >By choosing to upload, install, or run any third-party
                  applications on an Adyen payment terminal, you accept full
                  responsibility and liability for any consequences of
                  uploading, installing, or running any such applications.
            /companies/{companyId}/androidApps/{id}:
              get:
                tags:
                  - Get
                  - Android
                  - App
                  - Companies
                  - Id
                  - Android
                  - Apps
                summary: Get Android app
                description: >-
                  Returns the details of the Android app identified in the
                  path. 

                  These apps have been uploaded to Adyen and can be installed or
                  uninstalled on Android payment terminals through [terminal
                  actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Android files read

                  * Management API—Android files read and write
            /companies/{companyId}/androidCertificates:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Android
                  - Certificates
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                summary: Get a list of Android certificates
                description: >-
                  Returns a list of the Android certificates that are available
                  for the company identified in the path.

                  Typically, these certificates enable running apps on Android
                  payment terminals. The certifcates in the list have been
                  uploaded to Adyen and can be installed or uninstalled on
                  Android terminals through [terminal
                  actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Android files read

                  * Management API—Android files read and write

                  * Management API—Terminal actions read

                  * Management API—Terminal actions read and write
            /companies/{companyId}/apiCredentials:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Credentials
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                summary: Get a list of API credentials
                description: >-
                  Returns the list of [API
                  credentials](https://docs.adyen.com/development-resources/api-credentials)
                  for the company account. The list is grouped into pages as
                  defined by the query parameters.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
              post:
                tags:
                  - Create
                  - An
                  - Credential.
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                summary: Create an API credential.
                description: >-
                  Creates an [API
                  credential](https://docs.adyen.com/development-resources/api-credentials)
                  for the company account identified in the path. In the
                  request, you can specify which merchant accounts the new API
                  credential will have access to, as well as its roles and
                  allowed origins.


                  The response includes several types of authentication details:

                  * [API
                  key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication):
                  used for API request authentication.

                  * [Client
                  key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works):
                  public key used for client-side authentication.

                  * [Username and
                  password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication):
                  used for basic authentication.


                  > Make sure you store the API key securely in your system. You
                  won't be able to retrieve it later.


                  If your API key is lost or compromised, you need to [generate
                  a new API
                  key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/apiCredentials/{apiCredentialId}/generateApiKey).


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
            /companies/{companyId}/apiCredentials/{apiCredentialId}:
              get:
                tags:
                  - Get
                  - An
                  - Credential
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                summary: Get an API credential
                description: >-
                  Returns the [API
                  credential](https://docs.adyen.com/development-resources/api-credentials)
                  identified in the path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
              patch:
                tags:
                  - Update
                  - An
                  - Credential.
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                summary: Update an API credential.
                description: >-
                  Changes the API credential's roles, merchant account access,
                  or allowed origins. The request has the new values for the
                  fields you want to change. The response contains the full
                  updated API credential, including the new values from the
                  request. 


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
            /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Allowed
                  - Origins
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                summary: Get a list of allowed origins
                description: >-
                  Returns the list of [allowed
                  origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  for the API credential identified in the path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
              post:
                tags:
                  - Create
                  - An
                  - Allowed
                  - Origin
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                summary: Create an allowed origin
                description: >-
                  Adds a new [allowed
                  origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  to the API credential's list of allowed origins.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
            /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}:
              delete:
                tags:
                  - Delete
                  - An
                  - Allowed
                  - Origin
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                summary: Delete an allowed origin
                description: >-
                  Removes the [allowed
                  origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  identified in the path. As soon as an allowed origin is
                  removed, we no longer accept client-side requests from that
                  domain.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
              get:
                tags:
                  - Get
                  - An
                  - Allowed
                  - Origin
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                summary: Get an allowed origin
                description: >-
                  Returns the [allowed
                  origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  identified in the path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
            /companies/{companyId}/apiCredentials/{apiCredentialId}/generateApiKey:
              post:
                tags:
                  - Generate
                  - New
                  - Key
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                summary: Generate new API key
                description: >-
                  Returns a new API key for the API credential. You can use the
                  new API key a few minutes after generating it. The old API key
                  stops working 24 hours after generating a new one.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
            /companies/{companyId}/apiCredentials/{apiCredentialId}/generateClientKey:
              post:
                tags:
                  - Generate
                  - New
                  - Client
                  - Key
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                summary: Generate new client key
                description: >-
                  Returns a new [client
                  key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works)
                  for the API credential identified in the path. You can use the
                  new client key a few minutes after generating it. The old
                  client key stops working 24 hours after generating a new one.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
            /companies/{companyId}/billingEntities:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Billing
                  - Entities
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                summary: Get a list of billing entities
                description: >-
                  Returns the billing entities of the company identified in the
                  path and all merchant accounts belonging to the company.

                  A billing entity is a legal entity where we charge orders to.
                  An order for terminal products must contain the ID of a
                  billing entity.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
            /companies/{companyId}/merchants:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Merchant
                  - Accounts
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                summary: Get a list of merchant accounts
                description: >-
                  Returns the list of merchant accounts under the company
                  account specified in the path. The list only includes merchant
                  accounts that your API credential has access to. The list is
                  grouped into pages as defined by the query parameters. 


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Account read
            /companies/{companyId}/shippingLocations:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Shipping
                  - Locations
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                summary: Get a list of shipping locations
                description: >-
                  Returns the shipping locations for the company identified in
                  the path and all merchant accounts belonging to the company.

                  A shipping location includes the address where orders can be
                  delivered, and an ID which you need to specify when ordering
                  terminal products.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
              post:
                tags:
                  - Create
                  - Shipping
                  - Location
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                summary: Create a shipping location
                description: >-
                  Creates a shipping location for the company identified in the
                  path. A shipping location defines an address where orders can
                  be delivered.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read and write
            /companies/{companyId}/terminalActions:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Terminal
                  - Actions
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                summary: Get a list of terminal actions
                description: >-
                  Returns the [terminal
                  actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api)
                  that have been scheduled for the company identified in the
                  path.The response doesn't include actions that are scheduled
                  by Adyen.

                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal actions read

                  * Management API—Terminal actions read and write
            /companies/{companyId}/terminalActions/{actionId}:
              get:
                tags:
                  - Get
                  - Terminal
                  - Action
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                summary: Get terminal action
                description: >-
                  Returns the details of the [terminal
                  action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api)
                  identified in the path.

                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal actions read

                  * Management API—Terminal actions read and write
            /companies/{companyId}/terminalLogos:
              get:
                tags:
                  - Get
                  - The
                  - Terminal
                  - Logo
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                summary: Get the terminal logo
                description: >-
                  Returns the logo that is configured for a specific payment
                  terminal model at the company identified in the path. 


                  The logo is returned as a Base64-encoded string. You need to
                  Base64-decode the string to get the actual image file. 

                  This logo applies to all terminals of the specified model
                  under the company, unless a different logo is configured at a
                  lower level (merchant account, store, or individual terminal).


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read

                  * Management API—Terminal settings read and write
              patch:
                tags:
                  - Update
                  - The
                  - Terminal
                  - Logo
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                summary: Update the terminal logo
                description: >-
                  Updates the logo that is configured for a specific payment
                  terminal model at the company identified in the path. You can
                  update the logo for only one terminal model at a time.

                  This logo applies to all terminals of the specified model
                  under the company, unless a different logo is configured at a
                  lower level (merchant account, store, or individual
                  terminal). 

                  * To change the logo, specify the image file as a
                  Base64-encoded string.

                  * To restore the logo inherited from the Adyen PSP level,
                  specify an empty logo value.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read and write
            /companies/{companyId}/terminalModels:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Terminal
                  - Models
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                summary: Get a list of terminal models
                description: >-
                  Returns a list of payment terminal models that the company
                  identified in the path has access to.

                  The response includes the terminal model ID, which can be used
                  as a query parameter when getting a list of terminals or a
                  list of products for ordering.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
            /companies/{companyId}/terminalOrders:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Orders
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                summary: Get a list of orders
                description: >-
                  Returns a lists of terminal products orders for the company
                  identified in the path.

                  To filter the list, use one or more of the query parameters.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
              post:
                tags:
                  - Create
                  - An
                  - Order
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                summary: Create an order
                description: >-
                  Creates an order for payment terminal products for the company
                  identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read and write

                  >Requests to the Management API test endpoint do not create
                  actual orders for test terminals. To order test terminals, you
                  need to [submit a sales
                  order](https://docs.adyen.com/point-of-sale/managing-terminals/order-terminals/#sales-order-steps)
                  in your Customer Area.
            /companies/{companyId}/terminalOrders/{orderId}:
              get:
                tags:
                  - Get
                  - An
                  - Order
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                summary: Get an order
                description: >-
                  Returns the details of the terminal products order identified
                  in the path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
              patch:
                tags:
                  - Update
                  - An
                  - Order
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                summary: Update an order
                description: >-
                  Updates the terminal products order identified in the path.

                  Updating is only possible while the order has the status
                  **Placed**.


                  The request body only needs to contain what you want to
                  change. 

                  However, to update the products in the `items` array, you must
                  provide the entire array. For example, if the array has three
                  items:
                   To remove one item, the array must include the remaining two items. Or to add one item, the array must include all four items.

                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read and write
            /companies/{companyId}/terminalOrders/{orderId}/cancel:
              post:
                tags:
                  - Cancel
                  - An
                  - Order
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                summary: Cancel an order
                description: >-
                  Cancels the terminal products order identified in the path.

                  Cancelling is only possible while the order has the status
                  **Placed**.

                  To cancel an order, make a POST call without a request body.
                  The response returns the full order details, but with the
                  status changed to **Cancelled**.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read and write
            /companies/{companyId}/terminalProducts:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Terminal
                  - Products
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                summary: Get a list of terminal products
                description: >-
                  Returns a country-specific list of payment terminal packages
                  and parts that the company identified in the path has access
                  to.
                   
                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
            /companies/{companyId}/terminalSettings:
              get:
                tags:
                  - Get
                  - Terminal
                  - Settings
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                summary: Get terminal settings
                description: >-
                  Returns the payment terminal settings that are configured for
                  the company identified in the path. These settings apply to
                  all terminals under the company, unless different values are
                  configured at a lower level (merchant account, store, or
                  individual terminal).


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read

                  * Management API—Terminal settings read and write


                  For [sensitive terminal
                  settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings),
                  your API credential must have the following role:

                  * Management API—Terminal settings Advanced read and write
              patch:
                tags:
                  - Update
                  - Terminal
                  - Settings
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                summary: Update terminal settings
                description: >-
                  Updates payment terminal settings for the company identified
                  in the path. These settings apply to all terminals under the
                  company, unless different values are configured at a lower
                  level (merchant account, store, or individual terminal).


                  * To change a parameter value, include the full object that
                  contains the parameter, even if you don't want to change all
                  parameters in the object.

                  * To restore a parameter value inherited from the Adyen PSP
                  level, include the full object that contains the parameter,
                  and specify an empty value for the parameter or omit the
                  parameter.

                  * Objects that are not included in the request are not
                  updated.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read and write


                  For [sensitive terminal
                  settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings),
                  your API credential must have the following role:

                  * Management API—Terminal settings Advanced read and write
            /companies/{companyId}/users:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Users
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                summary: Get a list of users
                description: >
                  Returns the list of users for the `companyId` identified in
                  the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
              post:
                tags:
                  - Create
                  - New
                  - User
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                summary: Create a new user
                description: >
                  Creates the user for the `companyId` identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
            /companies/{companyId}/users/{userId}:
              get:
                tags:
                  - Get
                  - User
                  - Details
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                summary: Get user details
                description: >
                  Returns user details for the `userId` and the `companyId`
                  identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
              patch:
                tags:
                  - Update
                  - User
                  - Details
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                summary: Update user details
                description: >
                  Updates user details for the `userId` and the `companyId`
                  identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
            /companies/{companyId}/webhooks:
              get:
                tags:
                  - List
                  - All
                  - Webhooks
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                summary: List all webhooks
                description: >-
                  Lists all webhook configurations for the company account.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read

                  * Management API—Webhooks read and write
              post:
                tags:
                  - Set
                  - Up
                  - Webhook
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                summary: Set up a webhook
                description: >-
                  Subscribe to receive webhook notifications about events
                  related to your company account. You can add basic
                  authentication to make sure the data is secure.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read and write
            /companies/{companyId}/webhooks/{webhookId}:
              delete:
                tags:
                  - Remove
                  - Webhook
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                summary: Remove a webhook
                description: >-
                  Remove the configuration for the webhook identified in the
                  path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read and write
              get:
                tags:
                  - Get
                  - Webhook
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                summary: Get a webhook
                description: >-
                  Returns the configuration for the webhook identified in the
                  path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read

                  * Management API—Webhooks read and write
              patch:
                tags:
                  - Update
                  - Webhook
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                summary: Update a webhook
                description: >-
                  Make changes to the configuration of the webhook identified in
                  the path. The request contains the new values you want to have
                  in the webhook configuration. The response contains the full
                  configuration for the webhook, which includes the new values
                  from the request.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read and write
            /companies/{companyId}/webhooks/{webhookId}/generateHmac:
              post:
                tags:
                  - Generate
                  - An
                  - Key
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                summary: Generate an HMAC key
                description: >-
                  Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for
                  the webhook identified in the path. This key allows you to
                  check the integrity and the origin of the notifications you
                  receive.By creating an HMAC key, you start receiving
                  [HMAC-signed
                  notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures)
                  from Adyen. Find out more about how to [verify HMAC
                  signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read and write
            /companies/{companyId}/webhooks/{webhookId}/test:
              post:
                tags:
                  - Test
                  - Webhook
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                summary: Test a webhook
                description: >-
                  Sends sample notifications to test if the webhook is set up
                  correctly.


                  We send sample notifications for maximum 20 of the merchant
                  accounts that the webhook is configured for. If the webhook is
                  configured for more than 20 merchant accounts, use the
                  `merchantIds` array to specify a subset of the merchant
                  accounts for which to send test notifications.


                  We send four test notifications for each event code you
                  choose. They cover success and failure scenarios for the
                  hard-coded currencies EUR and GBP, regardless of the
                  currencies configured in the merchant accounts. For custom
                  notifications, we only send the specified custom notification.


                  The response describes the result of the test. The `status`
                  field tells you if the test was successful or not. You can use
                  the other response fields to troubleshoot unsuccessful tests.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read and write
            /me:
              get:
                tags:
                  - Get
                  - Credential
                  - Details
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                summary: Get API credential details
                description: >-
                  Returns your [API
                  credential](https://docs.adyen.com/development-resources/api-credentials)
                  details based on the API Key you used in the request.


                  You can make this request with any of the Management API
                  roles.
            /me/allowedOrigins:
              get:
                tags:
                  - Get
                  - Allowed
                  - Origins
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                summary: Get allowed origins
                description: >-
                  Returns the list of [allowed
                  origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  of your [API
                  credential](https://docs.adyen.com/development-resources/api-credentials)
                  based on the API key you used in the request.


                  You can make this request with any of the Management API
                  roles.
              post:
                tags:
                  - Add
                  - Allowed
                  - Origin
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                summary: Add allowed origin
                description: >-
                  Adds an allowed origin to the list of [allowed
                  origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  of your API credential.

                  The API key from the request is used to identify the [API
                  credential](https://docs.adyen.com/development-resources/api-credentials).


                  You can make this request with any of the Management API
                  roles.
            /me/allowedOrigins/{originId}:
              delete:
                tags:
                  - Remove
                  - Allowed
                  - Origin
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                summary: Remove allowed origin
                description: >-
                  Removes the [allowed
                  origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  specified in the path.

                  The API key from the request is used to identify the [API
                  credential](https://docs.adyen.com/development-resources/api-credentials).


                  You can make this request with any of the Management API
                  roles.
              get:
                tags:
                  - Get
                  - Allowed
                  - Origin
                  - Details
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                summary: Get allowed origin details
                description: >-
                  Returns the details of the [allowed
                  origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  specified in the path.

                  The API key from the request is used to identify the [API
                  credential](https://docs.adyen.com/development-resources/api-credentials).


                  You can make this request with any of the Management API
                  roles.
            /me/generateClientKey:
              post:
                tags:
                  - Generate
                  - Client
                  - Key
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                summary: Generate a client key
                description: >-
                  Generates a new [client
                  key](https://docs.adyen.com/development-resources/client-side-authentication/)
                  used to authenticate requests from your payment environment.

                  You can use the new client key a few minutes after generating
                  it.

                  The old client key stops working 24 hours after generating a
                  new one.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
            /merchants:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Merchant
                  - Accounts
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                summary: Get a list of merchant accounts
                description: >-
                  Returns the list of merchant accounts that your API credential
                  has access to. The list is grouped into pages as defined by
                  the query parameters. 


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Account read
              post:
                tags:
                  - Create
                  - Merchant
                  - Account
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                summary: Create a merchant account
                description: >-
                  Creates a merchant account for the company account specified
                  in the request.


                  Use this endpoint if your integration requires it, such as
                  Adyen for Platforms Manage. Your Adyen contact will set up
                  your access.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Accounts read and write
            /merchants/{merchantId}:
              get:
                tags:
                  - Get
                  - Merchant
                  - Account
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                summary: Get a merchant account
                description: >-
                  Returns the merchant account specified in the path. Your API
                  credential must have access to the merchant account.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Account read
            /merchants/{merchantId}/activate:
              post:
                tags:
                  - Request
                  - To
                  - Activate
                  - Merchant
                  - Account
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                summary: Request to activate a merchant account
                description: >-
                  Sends a request to activate the merchant account identified in
                  the path.


                  You get the result of the activation asynchronously through a
                  [`merchant.updated`](https://docs.adyen.com/api-explorer/ManagementNotification/latest/post/merchant.updated)
                  webhook. Once the merchant account is activated, you can start
                  using it to accept payments and payouts.


                  Use this endpoint if your integration requires it, such as
                  Adyen for Platforms Manage. Your Adyen contact will set up
                  your access.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Accounts read and write
            /merchants/{merchantId}/apiCredentials:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Credentials
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                summary: Get a list of API credentials
                description: >-
                  Returns the list of [API
                  credentials](https://docs.adyen.com/development-resources/api-credentials)
                  for the merchant account. The list is grouped into pages as
                  defined by the query parameters.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
              post:
                tags:
                  - Create
                  - An
                  - Credential
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                summary: Create an API credential
                description: >-
                  Creates an [API
                  credential](https://docs.adyen.com/development-resources/api-credentials)
                  for the company account identified in the path. In the
                  request, you can specify the roles and allowed origins for the
                  new API credential.


                  The response includes the:

                  * [API
                  key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication):
                  used for API request authentication.

                  * [Client
                  key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works):
                  public key used for client-side authentication.

                  * [Username and
                  password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication):
                  used for basic authentication.


                  > Make sure you store the API key securely in your system. You
                  won't be able to retrieve it later.


                  If your API key is lost or compromised, you need to [generate
                  a new API
                  key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey).


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
            /merchants/{merchantId}/apiCredentials/{apiCredentialId}:
              get:
                tags:
                  - Get
                  - An
                  - Credential
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                summary: Get an API credential
                description: >-
                  Returns the [API
                  credential](https://docs.adyen.com/development-resources/api-credentials)
                  identified in the path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
              patch:
                tags:
                  - Update
                  - An
                  - Credential
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                summary: Update an API credential
                description: >-
                  Changes the API credential's roles, or allowed origins. The
                  request has the new values for the fields you want to change.
                  The response contains the full updated API credential,
                  including the new values from the request. 


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
            /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Allowed
                  - Origins
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                summary: Get a list of allowed origins
                description: >-
                  Returns the list of [allowed
                  origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  for the API credential identified in the path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
              post:
                tags:
                  - Create
                  - An
                  - Allowed
                  - Origin
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                summary: Create an allowed origin
                description: >-
                  Adds a new [allowed
                  origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  to the API credential's list of allowed origins.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
            /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}:
              delete:
                tags:
                  - Delete
                  - An
                  - Allowed
                  - Origin
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                summary: Delete an allowed origin
                description: >-
                  Removes the [allowed
                  origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  identified in the path. As soon as an allowed origin is
                  removed, we no longer accept client-side requests from that
                  domain.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
              get:
                tags:
                  - Get
                  - An
                  - Allowed
                  - Origin
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                summary: Get an allowed origin
                description: >-
                  Returns the [allowed
                  origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  identified in the path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
            /merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey:
              post:
                tags:
                  - Generate
                  - New
                  - Key
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                summary: Generate new API key
                description: >-
                  Returns a new API key for the API credential. You can use the
                  new API key a few minutes after generating it. The old API key
                  stops working 24 hours after generating a new one.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
            /merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateClientKey:
              post:
                tags:
                  - Generate
                  - New
                  - Client
                  - Key
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                summary: Generate new client key
                description: >-
                  Returns a new [client
                  key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works)
                  for the API credential identified in the path. You can use the
                  new client key a few minutes after generating it. The old
                  client key stops working 24 hours after generating a new one.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
            /merchants/{merchantId}/billingEntities:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Billing
                  - Entities
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                summary: Get a list of billing entities
                description: >-
                  Returns the billing entities of the merchant account
                  identified in the path.

                  A billing entity is a legal entity where we charge orders to.
                  An order for terminal products must contain the ID of a
                  billing entity.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
            /merchants/{merchantId}/paymentMethodSettings:
              get:
                tags:
                  - Get
                  - All
                  - Payment
                  - Methods
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                summary: Get all payment methods
                description: >
                  Returns details for all payment methods of the merchant
                  account identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Payment methods read
              post:
                tags:
                  - Request
                  - Payment
                  - Method
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                summary: Request a payment method
                description: >
                  Sends a request to add a new payment method to the merchant
                  account identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Payment methods read and write
            /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}:
              get:
                tags:
                  - Get
                  - Payment
                  - Method
                  - Details
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                summary: Get payment method details
                description: >
                  Returns details for the merchant account and the payment
                  method identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Payment methods read
              patch:
                tags:
                  - Update
                  - Payment
                  - Method
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                summary: Update a payment method
                description: >
                  Updates payment method details for the merchant account and
                  the payment method identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Payment methods read and write
            /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/addApplePayDomains:
              post:
                tags:
                  - Add
                  - An
                  - Apple
                  - Pay
                  - Domain
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                summary: Add an Apple Pay domain
                description: >
                  Adds the new domain to the list of Apple Pay domains that are
                  registered with the merchant account and the payment method
                  identified in the path. For more information, see [Apple Pay
                  documentation](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain).


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Payment methods read and write
            /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/getApplePayDomains:
              get:
                tags:
                  - Get
                  - Apple
                  - Pay
                  - Domains
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                summary: Get Apple Pay domains
                description: >
                  Returns all Apple Pay domains that are registered with the
                  merchant account and the payment method identified in the
                  path. For more information, see [Apple Pay
                  documentation](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain).


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Payment methods read
            /merchants/{merchantId}/payoutSettings:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Payout
                  - Settings
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                summary: Get a list of payout settings
                description: >-
                  Returns the list of payout settings for the merchant account
                  identified in the path.


                  Use this endpoint if your integration requires it, such as
                  Adyen for Platforms Manage. Your Adyen contact will set up
                  your access.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Payout account settings read
              post:
                tags:
                  - Add
                  - Payout
                  - Setting
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                summary: Add a payout setting
                description: >-
                  Sends a request to add a payout setting for the merchant
                  account specified in the path. A payout setting links the
                  merchant account to the [transfer
                  instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments)
                  that contains the details of the payout bank account. Adyen
                  verifies the bank account before allowing and enabling the
                  payout setting.


                  If you're accepting payments in multiple currencies, you may
                  add multiple payout settings for the merchant account.


                  Use this endpoint if your integration requires it, such as
                  Adyen for Platforms Manage. Your Adyen contact will set up
                  your access.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):


                  * Management API—Payout account settings read and write
            /merchants/{merchantId}/payoutSettings/{payoutSettingsId}:
              delete:
                tags:
                  - Delete
                  - Payout
                  - Setting
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                summary: Delete a payout setting
                description: >-
                  Deletes the payout setting identified in the path.


                  Use this endpoint if your integration requires it, such as
                  Adyen for Platforms Manage. Your Adyen contact will set up
                  your access.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):


                  * Management API—Payout account settings read and write
              get:
                tags:
                  - Get
                  - Payout
                  - Setting
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                summary: Get a payout setting
                description: >-
                  Returns the payout setting identified in the path.


                  Use this endpoint if your integration requires it, such as
                  Adyen for Platforms Manage. Your Adyen contact will set up
                  your access.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Payout account settings read
              patch:
                tags:
                  - Update
                  - Payout
                  - Setting
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                summary: Update a payout setting
                description: >-
                  Updates the payout setting identified in the path. You can
                  enable or disable the payout setting.


                  Use this endpoint if your integration requires it, such as
                  Adyen for Platforms Manage. Your Adyen contact will set up
                  your access.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):


                  * Management API—Payout account settings read and write
            /merchants/{merchantId}/shippingLocations:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Shipping
                  - Locations
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                summary: Get a list of shipping locations
                description: >-
                  Returns the shipping locations for the merchant account
                  identified in the path.

                  A shipping location includes the address where orders can be
                  delivered, and an ID which you need to specify when ordering
                  terminal products.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
              post:
                tags:
                  - Create
                  - Shipping
                  - Location
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                summary: Create a shipping location
                description: >-
                  Creates a shipping location for the merchant account
                  identified in the path. A shipping location defines an address
                  where orders can be shipped to. 


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read and write
            /merchants/{merchantId}/splitConfigurations:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Split
                  - Configurations
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                summary: Get a list of split configurations
                description: >-
                  Returns the list of split configurations for the merchant
                  account.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
              post:
                tags:
                  - Create
                  - Split
                  - Configuration
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                summary: Create a split configuration
                description: >-
                  Creates a split configuration for the merchant account
                  specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
            /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}:
              delete:
                tags:
                  - Delete
                  - Split
                  - Configuration
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                summary: Delete a split configuration
                description: >-
                  Deletes the split configuration specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
              get:
                tags:
                  - Get
                  - Split
                  - Configuration
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                summary: Get a split configuration
                description: >-
                  Returns the split configuration specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
              patch:
                tags:
                  - Update
                  - Split
                  - Configuration
                  - Description
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                summary: Update split configuration description
                description: >-
                  Changes the description of the split configuration specified
                  in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
              post:
                tags:
                  - Create
                  - Rule
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                summary: Create a rule
                description: >-
                  Creates a rule in the split configuration specified in the
                  path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
            /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}:
              delete:
                tags:
                  - Delete
                  - Split
                  - Configuration
                  - Rule
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                summary: Delete a split configuration rule
                description: >-
                  Deletes the split configuration rule specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
              patch:
                tags:
                  - Update
                  - Split
                  - Conditions
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                summary: Update split conditions
                description: >-
                  Changes the conditions of the split configuration rule
                  specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
            /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}/splitLogic/{splitLogicId}:
              patch:
                tags:
                  - Update
                  - The
                  - Split
                  - Logic
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                summary: Update the split logic
                description: >-
                  Changes the split logic specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
            /merchants/{merchantId}/stores:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Stores
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                summary: Get a list of stores
                description: >-
                  Returns a list of stores for the merchant account identified
                  in the path. The list is grouped into pages as defined by the
                  query parameters.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read

                  * Management API—Stores read and write
              post:
                tags:
                  - Create
                  - Store
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                summary: Create a store
                description: >-
                  Creates a store for the merchant account identified in the
                  path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read and write
            /merchants/{merchantId}/stores/{reference}/terminalLogos:
              get:
                tags:
                  - Get
                  - The
                  - Terminal
                  - Logo
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                summary: Get the terminal logo
                description: >-
                  Returns the logo that is configured for a specific payment
                  terminal model at the store identified in the path. 

                  The logo is returned as a Base64-encoded string. You need to
                  Base64-decode the string to get the actual image file. 

                  This logo applies to all terminals of the specified model
                  under the store, unless a different logo is configured for an
                  individual terminal.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read

                  * Management API—Terminal settings read and write
              patch:
                tags:
                  - Update
                  - The
                  - Terminal
                  - Logo
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                summary: Update the terminal logo
                description: >-
                  Updates the logo that is configured for a specific payment
                  terminal model at the store identified in the path. You can
                  update the logo for only one terminal model at a time.

                  This logo applies to all terminals of the specified model
                  under the store, unless a different logo is configured for an
                  individual terminal. 


                  * To change the logo, specify the image file as a
                  Base64-encoded string.

                  * To restore the logo inherited from a higher level (merchant
                  or company account), specify an empty logo value.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read and write
            /merchants/{merchantId}/stores/{reference}/terminalSettings:
              get:
                tags:
                  - Get
                  - Terminal
                  - Settings
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                summary: Get terminal settings
                description: >-
                  Returns the payment terminal settings that are configured for
                  the store identified in the path. These settings apply to all
                  terminals under the store unless different values are
                  configured for an individual terminal.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read

                  * Management API—Terminal settings read and write


                  For [sensitive terminal
                  settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings),
                  your API credential must have the following role:

                  * Management API—Terminal settings Advanced read and write
              patch:
                tags:
                  - Update
                  - Terminal
                  - Settings
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                summary: Update terminal settings
                description: >-
                  Updates payment terminal settings for the store identified in
                  the path. These settings apply to all terminals under the
                  store, unless different values are configured for an
                  individual terminal.


                  * To change a parameter value, include the full object that
                  contains the parameter, even if you don't want to change all
                  parameters in the object.

                  * To restore a parameter value inherited from a higher level,
                  include the full object that contains the parameter, and
                  specify an empty value for the parameter or omit the
                  parameter.

                  * Objects that are not included in the request are not
                  updated.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read and write


                  For [sensitive terminal
                  settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings),
                  your API credential must have the following role:

                  * Management API—Terminal settings Advanced read and write
            /merchants/{merchantId}/stores/{storeId}:
              get:
                tags:
                  - Get
                  - Store
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Get a store
                description: >-
                  Returns the details of the store identified in the path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read

                  * Management API—Stores read and write
              patch:
                tags:
                  - Update
                  - Store
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Update a store
                description: >-
                  Updates the store identified in the path. You can only update
                  some store parameters.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read and write
            /merchants/{merchantId}/terminalLogos:
              get:
                tags:
                  - Get
                  - The
                  - Terminal
                  - Logo
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Get the terminal logo
                description: >-
                  Returns the logo that is configured for a specific payment
                  terminal model at the merchant account identified in the
                  path. 

                  The logo is returned as a Base64-encoded string. You need to
                  Base64-decode the string to get the actual image file. 

                  This logo applies to all terminals of the specified model
                  under the merchant account, unless a different logo is
                  configured at a lower level (store or individual terminal).


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read

                  * Management API—Terminal settings read and write
              patch:
                tags:
                  - Update
                  - The
                  - Terminal
                  - Logo
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Update the terminal logo
                description: >-
                  Updates the logo for a specific payment terminal model at the
                  merchant account identified in the path. You can update the
                  logo for only one terminal model at a time. 

                  This logo applies to all terminals of the specified model
                  under the merchant account, unless a different logo is
                  configured at a lower level (store or individual terminal).


                  * To change the logo, specify the image file as a
                  Base64-encoded string.

                  * To restore the logo inherited from the company account,
                  specify an empty logo value.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read and write
            /merchants/{merchantId}/terminalModels:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Terminal
                  - Models
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Get a list of terminal models
                description: >-
                  Returns the payment terminal models that merchant account
                  identified in the path has access to. The response includes
                  the terminal model ID, which can be used as a query parameter
                  when getting a list of terminals or a list of products for
                  ordering.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
            /merchants/{merchantId}/terminalOrders:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Orders
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Get a list of orders
                description: >-
                  Returns a list of terminal products orders for the merchant
                  account identified in the path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
              post:
                tags:
                  - Create
                  - An
                  - Order
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Create an order
                description: >-
                  Creates an order for payment terminal products for the
                  merchant account identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read and write

                  >Requests to the Management API test endpoint do not create
                  actual orders for test terminals. To order test terminals, you
                  need to [submit a sales
                  order](https://docs.adyen.com/point-of-sale/managing-terminals/order-terminals/#sales-order-steps)
                  in your Customer Area.
            /merchants/{merchantId}/terminalOrders/{orderId}:
              get:
                tags:
                  - Get
                  - An
                  - Order
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Get an order
                description: >-
                  Returns the details of the terminal products order identified
                  in the path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
              patch:
                tags:
                  - Update
                  - An
                  - Order
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Update an order
                description: >-
                  Updates the terminal products order identified in the path.

                  Updating is only possible while the order has the status
                  **Placed**.


                  The request body only needs to contain what you want to
                  change. 

                  However, to update the products in the `items` array, you must
                  provide the entire array. For example, if the array has three
                  items:
                   To remove one item, the array must include the remaining two items. Or to add one item, the array must include all four items.

                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read and write
            /merchants/{merchantId}/terminalOrders/{orderId}/cancel:
              post:
                tags:
                  - Cancel
                  - An
                  - Order
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Cancel an order
                description: >-
                  Cancels the terminal products order identified in the path.

                  Cancelling is only possible while the order has the status
                  **Placed**.

                  To cancel an order, make a POST call without a request body.
                  The response returns the full order details, but with the
                  status changed to **Cancelled**.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read and write
            /merchants/{merchantId}/terminalProducts:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Terminal
                  - Products
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Get a list of terminal products
                description: >-
                  Returns a country-specific list of payment terminal packages
                  and parts that the merchant account identified in the path has
                  access to.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
            /merchants/{merchantId}/terminalSettings:
              get:
                tags:
                  - Get
                  - Terminal
                  - Settings
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Get terminal settings
                description: >-
                  Returns the payment terminal settings that are configured for
                  the merchant account identified in the path. These settings
                  apply to all terminals under the merchant account unless
                  different values are configured at a lower level (store or
                  individual terminal).


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read

                  * Management API—Terminal settings read and write
              patch:
                tags:
                  - Update
                  - Terminal
                  - Settings
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Update terminal settings
                description: >-
                  Updates payment terminal settings for the merchant account
                  identified in the path.

                  These settings apply to all terminals under the merchant
                  account, unless different values are configured at a lower
                  level (store or individual terminal).


                  * To change a parameter value, include the full object that
                  contains the parameter, even if you don't want to change all
                  parameters in the object.

                  * To restore a parameter value inherited from a higher level,
                  include the full object that contains the parameter, and
                  specify an empty value for the parameter or omit the
                  parameter.

                  * Objects that are not included in the request are not
                  updated.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read and write
            /merchants/{merchantId}/users:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Users
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Get a list of users
                description: >
                  Returns a list of users associated with the `merchantId`
                  specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
              post:
                tags:
                  - Create
                  - New
                  - User
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Create a new user
                description: >
                  Creates a user for the `merchantId` specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
            /merchants/{merchantId}/users/{userId}:
              get:
                tags:
                  - Get
                  - User
                  - Details
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Get user details
                description: >
                  Returns user details for the `userId` and the `merchantId`
                  specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
              patch:
                tags:
                  - Update
                  - User
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Update a user
                description: >
                  Updates user details for the `userId` and the `merchantId`
                  specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
            /merchants/{merchantId}/webhooks:
              get:
                tags:
                  - List
                  - All
                  - Webhooks
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: List all webhooks
                description: >-
                  Lists all webhook configurations for the merchant account.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read

                  * Management API—Webhooks read and write
              post:
                tags:
                  - Set
                  - Up
                  - Webhook
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Set up a webhook
                description: >-
                  Subscribe to receive webhook notifications about events
                  related to your merchant account. You can add basic
                  authentication to make sure the data is secure.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read and write
            /merchants/{merchantId}/webhooks/{webhookId}:
              delete:
                tags:
                  - Remove
                  - Webhook
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Remove a webhook
                description: >-
                  Remove the configuration for the webhook identified in the
                  path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read and write
              get:
                tags:
                  - Get
                  - Webhook
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Get a webhook
                description: >-
                  Returns the configuration for the webhook identified in the
                  path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read

                  * Management API—Webhooks read and write
              patch:
                tags:
                  - Update
                  - Webhook
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Update a webhook
                description: >-
                  Make changes to the configuration of the webhook identified in
                  the path. The request contains the new values you want to have
                  in the webhook configuration. The response contains the full
                  configuration for the webhook, which includes the new values
                  from the request.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read and write
            /merchants/{merchantId}/webhooks/{webhookId}/generateHmac:
              post:
                tags:
                  - Generate
                  - An
                  - Key
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Generate an HMAC key
                description: >-
                  Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for
                  the webhook identified in the path. This key allows you to
                  check the integrity and the origin of the notifications you
                  receive.By creating an HMAC key, you start receiving
                  [HMAC-signed
                  notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures)
                  from Adyen. Find out more about how to [verify HMAC
                  signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read and write
            /merchants/{merchantId}/webhooks/{webhookId}/test:
              post:
                tags:
                  - Test
                  - Webhook
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Test a webhook
                description: >-
                  Sends sample notifications to test if the webhook is set up
                  correctly.


                  We send four test notifications for each event code you
                  choose. They cover success and failure scenarios for the
                  hard-coded currencies EUR and GBP, regardless of the
                  currencies configured in the merchant accounts. For custom
                  notifications, we only send the specified custom notification.


                  The response describes the result of the test. The `status`
                  field tells you if the test was successful or not. You can use
                  the other fields to troubleshoot unsuccessful tests.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read and write
            /stores:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Stores
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Get a list of stores
                description: >-
                  Returns a list of stores. The list is grouped into pages as
                  defined by the query parameters.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read

                  * Management API—Stores read and write
              post:
                tags:
                  - Create
                  - Store
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Create a store
                description: >-
                  Creates a store for the merchant account specified in the
                  request.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read and write
            /stores/{storeId}:
              get:
                tags:
                  - Get
                  - Store
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Get a store
                description: >-
                  Returns the details of the store identified in the path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read

                  * Management API—Stores read and write
              patch:
                tags:
                  - Update
                  - Store
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Update a store
                description: >-
                  Updates the store identified in the path.

                  You can only update some store parameters.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read and write
            /stores/{storeId}/terminalLogos:
              get:
                tags:
                  - Get
                  - The
                  - Terminal
                  - Logo
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Get the terminal logo
                description: >-
                  Returns the logo that is configured for a specific payment
                  terminal model at the store identified in the path. 

                  The logo is returned as a Base64-encoded string. You need to
                  Base64-decode the string to get the actual image file. 

                  This logo applies to all terminals of that model under the
                  store unless a different logo is configured for an individual
                  terminal.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read

                  * Management API—Terminal settings read and write
              patch:
                tags:
                  - Update
                  - The
                  - Terminal
                  - Logo
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Update the terminal logo
                description: >-
                  Updates the logo that is configured for a specific payment
                  terminal model at the store identified in the path. You can
                  update the logo for only one terminal model at a time.

                  This logo applies to all terminals of the specified model
                  under the store, unless a different logo is configured for an
                  individual terminal. 


                  * To change the logo, specify the image file as a
                  Base64-encoded string.

                  * To restore the logo inherited from a higher level (merchant
                  or company account), specify an empty logo value.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read and write
            /stores/{storeId}/terminalSettings:
              get:
                tags:
                  - Get
                  - Terminal
                  - Settings
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Get terminal settings
                description: >-
                  Returns the payment terminal settings that are configured for
                  the store identified in the path. These settings apply to all
                  terminals under the store unless different values are
                  configured for an individual terminal.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read

                  * Management API—Terminal settings read and write


                  For [sensitive terminal
                  settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings),
                  your API credential must have the following role:

                  * Management API—Terminal settings Advanced read and write
              patch:
                tags:
                  - Update
                  - Terminal
                  - Settings
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                summary: Update terminal settings
                description: >-
                  Updates payment terminal settings for the store identified in
                  the path. These settings apply to all terminals under the
                  store, unless different values are configured for an
                  individual terminal.


                  * To change a parameter value, include the full object that
                  contains the parameter, even if you don't want to change all
                  parameters in the object.

                  * To restore a parameter value inherited from a higher level,
                  include the full object that contains the parameter, and
                  specify an empty value for the parameter or omit the
                  parameter.

                  * Objects that are not included in the request are not
                  updated.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read and write


                  For [sensitive terminal
                  settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings),
                  your API credential must have the following role:

                  * Management API—Terminal settings Advanced read and write
            /terminals:
              get:
                tags:
                  - Get
                  - List
                  - Of
                  - Terminals
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                  - Terminals
                summary: Get a list of terminals
                description: >-
                  Returns the payment terminals that the API credential has
                  access to and that match the query parameters. 

                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API — Terminal actions read
            /terminals/scheduleActions:
              post:
                tags:
                  - Create
                  - Terminal
                  - Action
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                  - Terminals
                summary: Create a terminal action
                description: >-
                  Schedules a [terminal
                  action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api)
                  by specifying the action and the terminals that the action
                  must be applied to. 


                  The following restrictions apply:

                  * You can schedule only one action at a time. For example, to
                  install a new app version and remove an old app version, you
                  have to make two API requests. 

                  * The maximum number of terminals in a request is **100**. For
                  example, to apply an action to 250 terminals, you have to
                  divide the terminals over three API requests. 

                  * If there is an error with one or more terminal IDs in the
                  request, the action is scheduled for none of the terminals.
                  You need to fix the error and try again. 


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal actions read and write
            /terminals/{terminalId}/reassign:
              post:
                tags:
                  - Reassign
                  - Terminal
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                  - Terminals
                  - Reassign
                summary: Reassign a terminal
                description: >-
                  Reassigns a payment terminal to a company account, merchant
                  account, merchant account inventory, or a store.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Assign Terminal
            /terminals/{terminalId}/terminalLogos:
              get:
                tags:
                  - Get
                  - The
                  - Terminal
                  - Logo
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                  - Terminals
                  - Reassign
                summary: Get the terminal logo
                description: >-
                  Returns the logo that is configured for the payment terminal
                  identified in the path.

                  The logo is returned as a Base64-encoded string. You need to
                  Base64-decode the string to get the actual image file.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read

                  * Management API—Terminal settings read and write
              patch:
                tags:
                  - Update
                  - The
                  - Logo
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                  - Terminals
                  - Reassign
                summary: Update the logo
                description: >-
                  Updates the logo for the payment terminal identified in the
                  path.


                  * To change the logo, specify the image file as a
                  Base64-encoded string.

                  * To restore the logo inherited from a higher level (store,
                  merchant account, or company account), specify an empty logo
                  value.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read and write
            /terminals/{terminalId}/terminalSettings:
              get:
                tags:
                  - Get
                  - Terminal
                  - Settings
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                  - Terminals
                  - Reassign
                summary: Get terminal settings
                description: >-
                  Returns the settings that are configured for the payment
                  terminal identified in the path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read

                  * Management API—Terminal settings read and write


                  For [sensitive terminal
                  settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings),
                  your API credential must have the following role:

                  * Management API—Terminal settings Advanced read and write
              patch:
                tags:
                  - Update
                  - Terminal
                  - Settings
                  - Companies
                  - Id
                  - Android
                  - Apps
                  - Certificates
                  - Api
                  - Credentials
                  - Credential
                  - Allowed
                  - Origins
                  - Origin
                  - Generate
                  - Key
                  - Client
                  - Billing
                  - Entities
                  - Merchants
                  - Shipping
                  - Locations
                  - Terminal
                  - Actions
                  - Action
                  - Logos
                  - Models
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Settings
                  - Users
                  - User
                  - Webhooks
                  - Webhook
                  - Hmac
                  - Test
                  - Me
                  - Activate
                  - Payment
                  - Method
                  - Add
                  - Apple
                  - Pay
                  - Domains
                  - Get
                  - Payout
                  - Split
                  - Configurations
                  - Configuration
                  - Rules
                  - Rule
                  - Logic
                  - Stores
                  - Reference
                  - Store
                  - Terminals
                  - Reassign
                summary: Update terminal settings
                description: >-
                  Updates the settings that are configured for the payment
                  terminal identified in the path.


                  * To change a parameter value, include the full object that
                  contains the parameter, even if you don't want to change all
                  parameters in the object.

                  * To restore a parameter value inherited from a higher level,
                  include the full object that contains the parameter, and
                  specify an empty value for the parameter or omit the
                  parameter.

                  * Objects that are not included in the request are not
                  updated.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal settings read and write


                  For [sensitive terminal
                  settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings),
                  your API credential must have the following role:

                  * Management API—Terminal settings
    overlays:
      - type: APIs.io Search
        url: overlays/management-openapi-search.yml
    aid: adyen:adyen-management-api
  - name: Adyen Management Webhooks API
    description: >-
      Adyen uses webhooks to inform your system about events that happen with
      your Adyen company and merchant accounts, stores, payment terminals, and
      payment methods when using [Management
      API](https://docs.adyen.com/api-explorer/#/ManagementService/latest/overview).
      When a and includes the details of the event in the request body. See
      [Webhooks](https://docs.adyen.com/development-resources/webhooks) for more
      information.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/api-explorer/#/ManagementService/latest/overview
    baseURL: https://api.example.com
    tags:
      - Management
      - Accounts
      - Stores
      - Terminals
    properties:
      - type: OpenAPI
        url: >-
          https://docs.adyen.com/api-explorer/#/ManagementService/latest/overview
      - type: OpenAPI
        url: properties/management-webhooks-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/management-webhooks-openapi-search.yml
    aid: adyen:adyen-management-webhooks-api
  - name: Adyen Notification Configuration API
    description: >-
      This API is used for the classic integration. If you are just starting
      your implementation, refer to our [new integration
      guide](https://docs.adyen.com/marketplaces-and-platforms) instead.\n\nThe
      Notification Configuration API provides endpoints for setting up and
      testing notifications that inform you of events on your platform, for
      example when a verification check or a payout has been completed.\n\nFor
      more information, refer to our
      [documentation](https://docs.adyen.com/marketplaces-and-platforms/classic/notifications).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/marketplaces-and-platforms/classic/notifications
    baseURL: https://api.example.com
    tags:
      - Notifications
    properties:
      - type: OpenAPI
        url: >-
          https://docs.adyen.com/marketplaces-and-platforms/classic/notifications
      - type: OpenAPI
        url: properties/notification-configurations-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Notification Configuration API
            x-timestamp: '2023-05-30T15:27:19Z'
          x-groups:
            - General
          tags:
            - name: General
          paths:
            /createNotificationConfiguration:
              post:
                tags:
                  - Subscribe
                  - To
                  - Notifications
                  - Notification
                  - Configuration
                summary: Subscribe to notifications
                description: >-
                  Creates a subscription to notifications informing you of
                  events on your platform. After the subscription is created,
                  the events specified in the configuration will be sent to the
                  URL specified in the configuration. Subscriptions must be
                  configured on a per-event basis (as opposed to, for example, a
                  per-account holder basis), so all event notifications of a
                  marketplace and of a given type will be sent to the same
                  endpoint(s). A marketplace may have multiple endpoints if
                  desired; an event notification may be sent to as many or as
                  few different endpoints as configured.
            /deleteNotificationConfigurations:
              post:
                tags:
                  - Delete
                  - Notification
                  - Subscription
                  - Configuration
                  - Notification
                  - Configuration
                  - Configurations
                summary: Delete a notification subscription configuration
                description: >-
                  Deletes an existing notification subscription configuration.
                  After the subscription is deleted, no further event
                  notifications will be sent to the URL defined in the
                  subscription.
            /getNotificationConfiguration:
              post:
                tags:
                  - Get
                  - Notification
                  - Subscription
                  - Configuration
                  - Notification
                  - Configuration
                  - Configurations
                summary: Get a notification subscription configuration
                description: >-
                  Returns the details of the configuration of a notification
                  subscription.
            /getNotificationConfigurationList:
              post:
                tags:
                  - Get
                  - List
                  - Of
                  - Notification
                  - Subscription
                  - Configurations
                  - Notification
                  - Configuration
                  - Configurations
                  - List
                summary: Get a list of notification subscription configurations
                description: >-
                  Returns the details of the configurations of all of the
                  notification subscriptions in the platform of the executing
                  user.
            /testNotificationConfiguration:
              post:
                tags:
                  - Test
                  - Notification
                  - Configuration
                  - Notification
                  - Configuration
                  - Configurations
                  - List
                summary: Test a notification configuration
                description: >-
                  Tests an existing notification subscription configuration. For
                  each event type specified, a test notification will be
                  generated and sent to the URL configured in the subscription
                  specified.
            /updateNotificationConfiguration:
              post:
                tags:
                  - Update
                  - Notification
                  - Subscription
                  - Configuration
                  - Notification
                  - Configuration
                  - Configurations
                  - List
                summary: Update a notification subscription configuration
                description: >-
                  Updates an existing notification subscription configuration.
                  If you are updating the event types, you must provide all
                  event types, otherwise the previous event type configurat
    overlays:
      - type: APIs.io Search
        url: overlays/notification-configurations-openapi-search.yml
    aid: adyen:adyen-notification-configuration-api
  - name: Adyen Notification Webhooks API
    description: >-
      Adyen sends notifications through webhooks to inform your system about
      events that occur in the balance platform. These events include, for
      example, a card user making a payment, or a merchant starting a refund.
      When an event occurs, Adyen makes an HTTP POST request to a URL on your
      server and includes the details of the event in the request body. You can
      use the webhooks to build your implementation. For example, you can use
      this information to update balances in your own dashboards or to keep
      track of incoming funds.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://docs.adyen.com/point-of-sale/design-your-integration/notifications/
    baseURL: https://api.example.com
    tags:
      - Notifications
      - Webhooks
    properties:
      - type: OpenAPI
        url: >-
          https://docs.adyen.com/point-of-sale/design-your-integration/notifications/
      - type: OpenAPI
        url: properties/notification-webhooks-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/notification-webhooks-openapi-search.yml
    aid: adyen:adyen-notification-webhooks-api
  - name: Adyen Notifications API
    description: >-
      The Notification API sends notifications to the endpoints specified in a
      given subscription. Subscriptions are managed through the Notification
      Configuration API. The API specifications listed here detail the format of
      each notification. For more information, refer to our
      [documentation](https://docs.adyen.com/marketplaces-and-platforms/classic/notifications).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/marketplaces-and-platforms/classic/notifications
    baseURL: https://api.example.com
    tags:
      - Notifications
    properties:
      - type: OpenAPI
        url: >-
          https://docs.adyen.com/marketplaces-and-platforms/classic/notifications
      - type: OpenAPI
        url: properties/notifications-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/notifications-openapi-search.yml
    aid: adyen:adyen-notifications-api
  - name: Adyen Payments API
    description: >-
      A set of API endpoints that allow you to initiate, settle, and modify
      payments on the Adyen payments platform. You can use the API to accept
      card payments (including One-Click and 3D Secure), bank transfers,
      ewallets, and many other payment methods.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/online-payments/
    baseURL: https://api.example.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/online-payments/
      - type: OpenAPI
        url: properties/payments-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Adyen Payment API
          tags:
            - name: Payments
            - name: Modifications
          paths:
            /adjustAuthorisation:
              post:
                tags:
                  - Change
                  - The
                  - Authorised
                  - Amount
                  - Authorisation
                summary: Change the authorised amount
                description: >-
                  Allows you to increase or decrease the authorised amount after
                  the initial authorisation has taken place. This functionality
                  enables for example tipping, improving the chances your
                  authorisation will be valid, or charging the shopper when they
                  have already left the merchant premises.


                  > This endpoint is part of our [classic API
                  integration](https://docs.adyen.com/online-payments/classic-integrations/api-integration-ecommerce).

                  > If you have a [newer
                  integration](https://docs.adyen.com/online-payments), and are
                  doing:

                  > * [Asynchronous
                  adjustments](https://docs.adyen.com/online-payments/adjust-authorisation#asynchronous-or-synchronous-adjustment),
                  use the
                  [`/payments/{paymentPspReference}/amountUpdates`](https://docs.adyen.com/api-explorer/#/CheckoutService/v67/post/payments/{paymentPspReference}/amountUpdates)
                  endpoint on Checkout API.

                  > * [Synchronous
                  adjustments](https://docs.adyen.com/online-payments/adjust-authorisation#asynchronous-or-synchronous-adjustment),
                  use this endpoint.
            /authorise:
              post:
                tags:
                  - Create
                  - An
                  - Authorisation
                  - Authorisation
                  - Authorise
                summary: Create an authorisation
                description: >-
                  Creates a payment with a unique reference (`pspReference`) and
                  attempts to obtain an authorisation hold. For cards, this
                  amount can be captured or cancelled later. Non-card payment
                  methods typically don't support this and will automatically
                  capture as part of the authorisation.

                  > This endpoint is part of our [classic API
                  integration](https://docs.adyen.com/online-payments/classic-integrations/api-integration-ecommerce).
                  If using a [newer
                  integration](https://docs.adyen.com/online-payments), use the
                  [`/payments`](https://docs.adyen.com/api-explorer/#/CheckoutService/payments)
                  endpoint under Checkout API instead.
            /authorise3d:
              post:
                tags:
                  - Complete
                  - Authorisation
                  - Authorisation
                  - Authorise
                  - Authorise3d
                summary: Complete a 3DS authorisation
                description: >-
                  For an authenticated 3D Secure session, completes the payment
                  authorisation. This endpoint must receive the `md` and
                  `paResponse` parameters that you get from the card issuer
                  after a shopper pays via 3D Secure.


                  > This endpoint is part of our [classic API
                  integration](https://docs.adyen.com/online-payments/classic-integrations/api-integration-ecommerce/3d-secure).
                  If using a [newer
                  integration](https://docs.adyen.com/online-payments), use the
                  [`/payments/details`](https://docs.adyen.com/api-explorer/#/CheckoutService/payments/details)
                  endpoint under Checkout API instead.
            /authorise3ds2:
              post:
                tags:
                  - Complete
                  - S2
                  - Authorisation
                  - Authorisation
                  - Authorise
                  - Authorise3d
                  - Authorise3ds2
                summary: Complete a 3DS2 authorisation
                description: >-
                  For an authenticated 3D Secure 2 session, completes the
                  payment authorisation. This endpoint must receive the
                  `threeDS2Token` and `threeDS2Result` parameters.


                  > This endpoint is part of our [classic API
                  integration](https://docs.adyen.com/online-payments/classic-integrations/api-integration-ecommerce/3d-secure).
                  If using a [newer
                  integration](https://docs.adyen.com/online-payments), use the
                  [`/payments/details`](https://docs.adyen.com/api-explorer/#/CheckoutService/payments/details)
                  endpoint under Checkout API instead.
            /cancel:
              post:
                tags:
                  - Cancel
                  - An
                  - Authorisation
                  - Authorisation
                  - Authorise
                  - Authorise3d
                  - Authorise3ds2
                  - Cancel
                summary: Cancel an authorisation
                description: >-
                  Cancels the authorisation hold on a payment, returning a
                  unique reference for this request. You can cancel payments
                  after authorisation only for payment methods that support
                  distinct authorisations and captures.


                  For more information, refer to
                  [Cancel](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/cancel).


                  > This endpoint is part of our [classic API
                  integration](https://docs.adyen.com/online-payments/classic-integrations/api-integration-ecommerce).
                  If using a [newer
                  integration](https://docs.adyen.com/online-payments), use the
                  [`/payments/{paymentPspReference}/cancels`](https://docs.adyen.com/api-explorer/#/CheckoutService/payments/{paymentPspReference}/cancels)
                  endpoint under Checkout API instead.
            /cancelOrRefund:
              post:
                tags:
                  - Cancel
                  - Or
                  - Refund
                  - Payment
                  - Authorisation
                  - Authorise
                  - Authorise3d
                  - Authorise3ds2
                  - Cancel
                  - Or
                  - Refund
                summary: Cancel or refund a payment
                description: >-
                  Cancels a payment if it has not been captured yet, or refunds
                  it if it has already been captured. This is useful when it is
                  not certain if the payment has been captured or not (for
                  example, when using auto-capture).


                  Do not use this endpoint for payments that involve:
                   * [Multiple partial captures](https://docs.adyen.com/online-payments/capture).
                   * [Split data](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information) either at time of payment or capture for Adyen for Platforms.

                   Instead, check if the payment has been captured and make a corresponding [`/refund`](https://docs.adyen.com/api-explorer/#/Payment/refund) or [`/cancel`](https://docs.adyen.com/api-explorer/#/Payment/cancel) call.

                  For more information, refer to [Cancel or
                  refund](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/cancel-or-refund).


                  > This endpoint is part of our [classic API
                  integration](https://docs.adyen.com/online-payments/classic-integrations/api-integration-ecommerce).
                  If using a [newer
                  integration](https://docs.adyen.com/online-payments), use the
                  [`/payments/{paymentPspReference}/reversals`](https://docs.adyen.com/api-explorer/#/CheckoutService/payments/{paymentPspReference}/reversals)
                  endpoint under Checkout API instead.
            /capture:
              post:
                tags:
                  - Capture
                  - An
                  - Authorisation
                  - Authorisation
                  - Authorise
                  - Authorise3d
                  - Authorise3ds2
                  - Cancel
                  - Or
                  - Refund
                  - Capture
                summary: Capture an authorisation
                description: >+
                  Captures the authorisation hold on a payment, returning a
                  unique reference for this request. Usually the full
                  authorisation amount is captured, however it's also possible
                  to capture a smaller amount, which results in cancelling the
                  remaining authorisation balance.


                  Payment methods that are captured automatically after
                  authorisation don't need to be captured. However, submitting a
                  capture request on these transactions will not result in
                  double charges. If immediate or delayed auto-capture is
                  enabled, calling the capture method is not neccessary.


                  For more information refer to
                  [Capture](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/capture).


                  > This endpoint is part of our [classic API
                  integration](https://docs.adyen.com/online-payments/classic-integrations/api-integration-ecommerce).
                  If using a [newer
                  integration](https://docs.adyen.com/online-payments), use the
                  [`/payments/{paymentPspReference}/captures`](https://docs.adyen.com/api-explorer/#/CheckoutService/v67/post/payments/{paymentPspReference}/captures)
                  endpoint on Checkout API instead.

            /donate:
              post:
                tags:
                  - Create
                  - Donation
                  - Authorisation
                  - Authorise
                  - Authorise3d
                  - Authorise3ds2
                  - Cancel
                  - Or
                  - Refund
                  - Capture
                  - Donate
                summary: Create a donation
                description: >-
                  Schedules a new payment to be created (including a new
                  authorisation request) for the specified donation using the
                  payment details of the original payment.


                  > This endpoint is part of our [classic API
                  integration](https://docs.adyen.com/online-payments/classic-integrations/api-integration-ecommerce).
                  If using a [newer
                  integration](https://docs.adyen.com/online-payments), use the
                  [`/donations`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/donations)
                  endpoint under Checkout API instead.
            /getAuthenticationResult:
              post:
                tags:
                  - Get
                  - The
                  - Authentication
                  - Result
                  - Authorisation
                  - Authorise
                  - Authorise3d
                  - Authorise3ds2
                  - Cancel
                  - Or
                  - Refund
                  - Capture
                  - Donate
                  - Authentication
                  - Result
                summary: Get the 3DS authentication result
                description: >-
                  Return the authentication result after doing a 3D Secure
                  authentication only.
            /refund:
              post:
                tags:
                  - Refund
                  - Captured
                  - Payment
                  - Authorisation
                  - Authorise
                  - Authorise3d
                  - Authorise3ds2
                  - Cancel
                  - Or
                  - Refund
                  - Capture
                  - Donate
                  - Authentication
                  - Result
                summary: Refund a captured payment
                description: >-
                  Refunds a payment that has previously been captured, returning
                  a unique reference for this request. Refunding can be done on
                  the full captured amount or a partial amount. Multiple
                  (partial) refunds will be accepted as long as their sum
                  doesn't exceed the captured amount. Payments which have been
                  authorised, but not captured, cannot be refunded, use the
                  /cancel method instead.


                  Some payment methods/gateways do not support partial/multiple
                  refunds.

                  A margin above the captured limit can be configured to cover
                  shipping/handling costs.


                  For more information, refer to
                  [Refund](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/refund).


                  > This endpoint is part of our [classic API
                  integration](https://docs.adyen.com/online-payments/classic-integrations/api-integration-ecommerce).
                  If using a [newer
                  integration](https://docs.adyen.com/online-payments), use the
                  [`/payments/{paymentPspReference}/refunds`](https://docs.adyen.com/api-explorer/#/CheckoutService/payments/{paymentPspReference}/refunds)
                  endpoint under Checkout API instead.
            /retrieve3ds2Result:
              post:
                tags:
                  - Get
                  - The
                  - S2
                  - Authentication
                  - Result
                  - Authorisation
                  - Authorise
                  - Authorise3d
                  - Authorise3ds2
                  - Cancel
                  - Or
                  - Refund
                  - Capture
                  - Donate
                  - Authentication
                  - Result
                summary: Get the 3DS2 authentication result
                description: >-
                  Retrieves the `threeDS2Result` after doing a 3D Secure 2
                  authentication only.
            /technicalCancel:
              post:
                tags:
                  - Cancel
                  - An
                  - Authorisation
                  - Using
                  - Your
                  - Reference
                  - Authorisation
                  - Authorise
                  - Authorise3d
                  - Authorise3ds2
                  - Cancel
                  - Or
                  - Refund
                  - Capture
                  - Donate
                  - Authentication
                  - Result
                summary: Cancel an authorisation using your reference
                description: >-
                  This endpoint allows you to cancel a payment if you do not
                  have the PSP reference of the original payment request
                  available.


                  In your call, refer to the original payment by using the
                  `reference` that you specified in your payment request.


                  For more information, see [Technical
                  cancel](https://docs.adyen.com/online-payments/classic-integrations/modify-payments/cancel#technical-cancel). 


                  > This endpoint is part of our [classic API
                  integration](https://docs.adyen.com/online-payments/classic-integrations/api-integration-ecommerce).
                  If using a [newer
                  integration](https://docs.adyen.com/online-payments), use the
                  [`/cancels`](https://docs.adyen.com/api-explorer/#/CheckoutService/cancels)
                  endpoint under Checkout API instead.
            /voidPendingRefund:
              post:
                tags:
                  - Cancel
                  - An
                  - In-person
                  - Refund
                  - Authorisation
                  - Authorise
                  - Authorise3d
                  - Authorise3ds2
                  - Cancel
                  - Or
                  - Refund
                  - Capture
                  - Donate
                  - Authentication
                  - Result
                  - Pending
                summary: Cancel an in-person refund
                description: >-
                  This endpoint allows you to cancel an unreferenced refund
                  request before it has been completed.


                  In your call, you can refer to the original refund request
                  either by using the `tenderReference`, or the `pspReference`.
                  We recommend implementing based on the `tenderReference`, as
                  this is generated for both offline and online transactions.


                  For more information, refer to [Cancel an unreferenced
                  refund](https://docs.adyen.com/point-of-sale/refund-payme
    overlays:
      - type: APIs.io Search
        url: overlays/payments-openapi-search.yml
    aid: adyen:adyen-payments-api
  - name: Adyen Payouts API
    description: >-
      A set of API endpoints that allow you to store payout details, confirm, or
      decline a payout.\n\nFor more information, refer to [Online
      payouts](https://docs.adyen.com/online-payments/online-payouts).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/online-payments/online-payouts
    baseURL: https://api.example.com
    tags:
      - Payouts
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/online-payments/online-payouts
      - type: OpenAPI
        url: properties/payouts-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Adyen Payout API
          tags:
            - name: Initialization
            - name: Reviewing
            - name: Instant payouts
          paths:
            /confirmThirdParty:
              post:
                tags:
                  - Confirm
                  - Payout
                  - Third
                  - Party
                summary: Confirm a payout
                description: |-
                  Confirms a previously submitted payout.

                  To cancel a payout, use the `/declineThirdParty` endpoint.
            /declineThirdParty:
              post:
                tags:
                  - Cancel
                  - Payout
                  - Third
                  - Party
                summary: Cancel a payout
                description: >-
                  Cancels a previously submitted payout.


                  To confirm and send a payout, use the `/confirmThirdParty`
                  endpoint.
            /payout:
              post:
                tags:
                  - Make
                  - An
                  - Instant
                  - Card
                  - Payout
                  - Third
                  - Party
                  - Payout
                summary: Make an instant card payout
                description: >-
                  With this call, you can pay out to your customers, and funds
                  will be made available within 30 minutes on the cardholder's
                  bank account (this is dependent on whether the issuer supports
                  this functionality). Instant card payouts are only supported
                  for Visa and Mastercard cards.
            /storeDetail:
              post:
                tags:
                  - Store
                  - Payout
                  - Details
                  - Third
                  - Party
                  - Payout
                  - Detail
                summary: Store payout details
                description: >-
                  Stores payment details under the `PAYOUT` recurring contract.
                  These payment details can be used later to submit a payout via
                  the `/submitThirdParty` call.
            /storeDetailAndSubmitThirdParty:
              post:
                tags:
                  - Store
                  - Details
                  - And
                  - Submit
                  - Payout
                  - Third
                  - Party
                  - Payout
                  - Detail
                  - And
                  - Submit
                summary: Store details and submit a payout
                description: >-
                  Submits a payout and stores its details for subsequent
                  payouts.


                  The submitted payout must be confirmed or declined either by a
                  reviewer or via `/confirmThirdParty` or `/declineThirdParty`
                  calls.
            /submitThirdParty:
              post:
                tags:
                  - Submit
                  - Payout
                  - Third
                  - Party
                  - Payout
                  - Detail
                  - And
                  - Submit
                summary: Submit a payout
                description: >-
                  Submits a payout using the previously stored payment details.
                  To store payment details, use the `/storeDetail` API call.


                  The submitted payout must be confirmed or declined either by a
                  reviewer or via `/confirmThirdParty` or `/d
    overlays:
      - type: APIs.io Search
        url: overlays/payouts-openapi-search.yml
    aid: adyen:adyen-payouts-api
  - name: Adyen POS Terminal API
    description: >-
      This API provides endpoints for managing your point-of-sale (POS) payment
      terminals. You can use the API to obtain information about a specific
      terminal, retrieve overviews of your terminals and stores, and assign
      terminals to a merchant account or store.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/
    baseURL: https://api.example.com
    tags:
      - Point of Sale
      - Terminals
      - Payments
      - Stores
    properties:
      - type: OpenAPI
        url: >-
          https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/
      - type: OpenAPI
        url: properties/pos-terminal-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: POS Terminal Management API
          tags:
            - name: General
          paths:
            /assignTerminals:
              post:
                tags:
                  - Assign
                  - Terminals
                  - Terminals
                summary: Assign terminals
                description: >-
                  Assigns one or more payment terminals to a merchant account or
                  a store. You can also use this endpoint to reassign terminals
                  between merchant accounts or stores, and to unassign a
                  terminal and return it to company inventory.
            /findTerminal:
              post:
                tags:
                  - Get
                  - The
                  - Account
                  - Or
                  - Store
                  - Of
                  - Terminal
                  - Terminals
                  - Terminal
                summary: Get the account or store of a terminal
                description: >-
                  Returns the company account, merchant account, or store that a
                  payment terminal is assigned to.
            /getStoresUnderAccount:
              post:
                tags:
                  - Get
                  - The
                  - Stores
                  - Of
                  - An
                  - Account
                  - Terminals
                  - Terminal
                  - Stores
                  - Under
                  - Account
                summary: Get the stores of an account
                description: >-
                  Returns a list of stores associated with a company account or
                  a merchant account, including the status of each store.
            /getTerminalDetails:
              post:
                tags:
                  - Get
                  - The
                  - Details
                  - Of
                  - Terminal
                  - Terminals
                  - Terminal
                  - Stores
                  - Under
                  - Account
                  - Details
                summary: Get the details of a terminal
                description: >-
                  Returns the details of a payment terminal, including where the
                  terminal is assigned to. The response returns the same details
                  that are provided in the terminal list in your Customer Area
                  and in the Terminal Fleet report.
            /getTerminalsUnderAccount:
              post:
                tags:
                  - Get
                  - The
                  - List
                  - Of
                  - Terminals
                  - Terminals
                  - Terminal
                  - Stores
                  - Under
                  - Account
                  - Details
                summary: Get the list of terminals
                description: >-
                  Returns a list of payment terminals associated with a company
                  account, merchant account, or store. The response shows
                  whether the terminals are in the inventory, or in-store (ready
                  for board
    overlays:
      - type: APIs.io Search
        url: overlays/pos-terminal-openapi-search.yml
    aid: adyen:adyen-pos-terminal-api
  - name: Adyen Recurring API
    description: >-
      The Recurring APIs allow you to manage and remove your tokens or saved
      payment details. Tokens should be created with validation during a payment
      request. For more information, refer to our [Tokenization
      documentation](https://docs.adyen.com/online-payments/tokenization).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/online-payments/tokenization
    baseURL: https://api.example.com
    tags:
      - Payouts
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/online-payments/tokenization
      - type: OpenAPI
        url: properties/recurring-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Adyen Recurring API
          tags:
            - name: General
          paths:
            /createPermit:
              post:
                tags:
                  - Create
                  - New
                  - Permits
                  - Linked
                  - To
                  - Recurring
                  - Contract.
                  - Permit
                summary: Create new permits linked to a recurring contract.
                description: >-
                  Create permits for a recurring contract, including support for
                  defining restrictions.
            /disable:
              post:
                tags:
                  - Disable
                  - Stored
                  - Payment
                  - Details
                  - Permit
                  - Disable
                summary: Disable stored payment details
                description: >-
                  Disables stored payment details to stop charging a shopper
                  with this particular recurring detail ID.


                  For more information, refer to [Disable stored
                  details](https://docs.adyen.com/classic-integration/recurring-payments/disable-stored-details/).
            /disablePermit:
              post:
                tags:
                  - Disable
                  - An
                  - Existing
                  - Permit.
                  - Permit
                  - Disable
                summary: Disable an existing permit.
                description: >-
                  Disable a permit that was previously linked to a
                  recurringDetailReference.
            /listRecurringDetails:
              post:
                tags:
                  - Get
                  - Stored
                  - Payment
                  - Details
                  - Permit
                  - Disable
                  - Recurring
                  - Details
                summary: Get stored payment details
                description: >-
                  Lists the stored payment details for a shopper, if there are
                  any available. The recurring detail ID can be used with a
                  regular authorisation request to charge the shopper. A summary
                  of the payment detail is returned for presentation to the
                  shopper.


                  For more information, refer to [Retrieve stored
                  details](https://docs.adyen.com/classic-integration/recurring-payments/retrieve-stored-details/).
            /notifyShopper:
              post:
                tags:
                  - Ask
                  - Issuer
                  - To
                  - Notify
                  - The
                  - Shopper
                  - Permit
                  - Disable
                  - Recurring
                  - Details
                  - Shopper
                summary: Ask issuer to notify the shopper
                description: >-
                  Sends a request to the issuer so they can inform the shopper
                  about the upcoming recurring payment. This endpoint is used
                  only for local acquiring in India. For more information, refer
                  to [Recurring card payments in
                  India](https://docs.adyen.com/payment-methods/cards/cards-recurring-india).
            /scheduleAccountUpdater:
              post:
                tags:
                  - Schedule
                  - Running
                  - The
                  - Account
                  - Updater
                  - Permit
                  - Disable
                  - Recurring
                  - Details
                  - Shopper
                  - Account
                  - Updater
                summary: Schedule running the Account Updater
                description: >-
                  When making the API call, you can submit either the credit
                  card information, or the recurring detail reference and the
                  shopper reference:

                  * If the card information is provided, all the sub-fields for
                  `card` are mandatory.

                  * If the recurring detail reference is provided, the fields
                  for `shopperReference` and `selectedRecurringDetailR
    overlays:
      - type: APIs.io Search
        url: overlays/recurring-openapi-search.yml
    aid: adyen:adyen-recurring-api
  - name: Adyen Report Webhooks API
    description: >-
      Adyen sends webhooks to inform your system that reports were generated and
      are ready to be downloaded. You can download reports programmatically by
      making an HTTP GET request, or manually from your [Balance Platform
      Customer Area](https://balanceplatform-test.adyen.com/balanceplatform).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/api-explorer/report-webhooks/1/overview
    baseURL: https://api.example.com
    tags:
      - Reports
      - Webhooks
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/api-explorer/report-webhooks/1/overview
      - type: OpenAPI
        url: properties/report-webhooks-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/report-webhooks-openapi-search.yml
    aid: adyen:adyen-report-webhooks-api
  - name: Adyen Stored Value API
    description: A set of API endpoints to manage stored value products.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/payment-methods/gift-cards/stored-value-api/
    baseURL: https://api.example.com
    tags:
      - Gift Cards
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/payment-methods/gift-cards/stored-value-api/
      - type: OpenAPI
        url: properties/stored-value-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Adyen Stored Value API
          x-groups:
            - General
          tags:
            - name: General
          paths:
            /changeStatus:
              post:
                tags:
                  - Changes
                  - The
                  - Status
                  - Of
                  - Payment
                  - Method.
                  - Status
                summary: Changes the status of the payment method.
                description: >-
                  Changes the status of the provided payment method to the
                  specified status.
            /checkBalance:
              post:
                tags:
                  - Checks
                  - The
                  - Balance.
                  - Status
                  - Balance
                summary: Checks the balance.
                description: Checks the balance of the provided payment method.
            /issue:
              post:
                tags:
                  - Issues
                  - New
                  - Card.
                  - Status
                  - Balance
                  - Issue
                summary: Issues a new card.
                description: Issues a new card of the given payment method.
            /load:
              post:
                tags:
                  - Loads
                  - The
                  - Payment
                  - Method.
                  - Status
                  - Balance
                  - Issue
                  - Load
                summary: Loads the payment method.
                description: Loads the payment method with the specified funds.
            /mergeBalance:
              post:
                tags:
                  - Merge
                  - The
                  - Balance
                  - Of
                  - Two
                  - Cards.
                  - Status
                  - Balance
                  - Issue
                  - Load
                summary: Merge the balance of two cards.
                description: >-
                  Increases the balance of the paymentmethod by the full amount
                  left on the source paymentmethod
            /voidTransaction:
              post:
                tags:
                  - Voids
                  - Transaction.
                  - Status
                  - Balance
                  - Issue
                  - Load
                  - Transaction
                summary: Voids a transaction.
                description: Voids the referenced
    overlays:
      - type: APIs.io Search
        url: overlays/stored-value-openapi-search.yml
    aid: adyen:adyen-stored-value-api
  - name: Adyen Terminal API
    description: >-
      The Adyen Terminal API lets you make payments, issue refunds, collect
      shopper information, and perform other shopper-terminal interactions using
      a payment terminal supplied by Adyen.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/terminal-api-reference/
    baseURL: https://api.example.com
    tags:
      - Terminals
      - Payments
      - Refunds
    properties:
      - type: OpenAPI
        url: >-
          https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/terminal-api-reference/
      - type: OpenAPI
        url: properties/terminal-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            title: Adyen Terminal API
          paths:
            /login:
              post:
                description: >-
                  It conveys Information related to the session (period between
                  a Login and the following Logout) to process. Content of the
                  Login Request message.
                summary: Login Request
                tags:
                  - Login
                  - Request
                  - Login
            /logout:
              post:
                description: Empty. Content of the Logout Request message.
                summary: Logout Request
                tags:
                  - Logout
                  - Request
                  - Login
                  - Logout
            /enableservice:
              post:
                description: >-
                  It conveys the services that will be enabled for the  POI
                  Terminal without the request of the Sale System, and a
                  possible invitation for the Customer to start the services.
                  Content of the Enable Service Request message.
                summary: EnableService Request
                tags:
                  - Enable
                  - Service
                  - Request
                  - Login
                  - Logout
                  - Enableservice
            /admin:
              post:
                description: Empty. Content of the Custom Admin Request message.
                summary: Admin Request
                tags:
                  - Admin
                  - Request
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
            /payment:
              post:
                description: >-
                  Request sent to terminal to initiate payment.  It conveys
                  Information related to the Payment transaction to process.
                  Content of the Payment Request message.
                summary: Payment Request
                tags:
                  - Payment
                  - Request
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
                  - Payment
            /cardacquisition:
              post:
                description: >-
                  It conveys Information related to the payment and loyalty
                  cards to read and analyse. This message pair is usually
                  followed by a message pair (e.g. payment or loyalty) which
                  refers to this Card Acquisition message pair. Content of the
                  Card Acquisition Request message.
                summary: CardAcquisition Request
                tags:
                  - Card
                  - Acquisition
                  - Request
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
                  - Payment
                  - Cardacquisition
            /loyalty:
              post:
                description: >-
                  It conveys Information related to the Loyalty transaction to
                  process. Content of the Loyalty Request message.
                summary: Loyalty Request
                tags:
                  - Loyalty
                  - Request
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
                  - Payment
                  - Cardacquisition
                  - Loyalty
            /storedvalue:
              post:
                description: >-
                  It conveys Information related to the Stored Value transaction
                  to process. Content of the Stored Value Request message.
                summary: StoredValue Request
                tags:
                  - Stored
                  - Value
                  - Request
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
                  - Payment
                  - Cardacquisition
                  - Loyalty
                  - Storedvalue
            /reversal:
              post:
                description: >-
                  It conveys Information related to the reversal of a previous
                  payment or a loyalty transaction. Content of the Reversal
                  Request message.
                summary: Reversal Request
                tags:
                  - Reversal
                  - Request
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
                  - Payment
                  - Cardacquisition
                  - Loyalty
                  - Storedvalue
                  - Reversal
            /reconciliation:
              post:
                description: >-
                  It conveys Information related to the Reconciliation requested
                  by the Sale System. Content of the Reconciliation Request
                  message.
                summary: Reconciliation Request
                tags:
                  - Reconciliation
                  - Request
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
                  - Payment
                  - Cardacquisition
                  - Loyalty
                  - Storedvalue
                  - Reversal
                  - Reconciliation
            /gettotals:
              post:
                description: >-
                  It conveys information from the Sale System related to the
                  scope and the format of the totals to be computed by the POI
                  System. Content of the Get Totals Request message.
                summary: GetTotals Request
                tags:
                  - Get
                  - Totals
                  - Request
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
                  - Payment
                  - Cardacquisition
                  - Loyalty
                  - Storedvalue
                  - Reversal
                  - Reconciliation
                  - Gettotals
            /balanceinquiry:
              post:
                description: >-
                  It conveys Information related to the account for which a
                  Balance Inquiry is requested. Content of the Balance Inquiry
                  Request message.
                summary: BalanceInquiry Request
                tags:
                  - Balance
                  - Inquiry
                  - Request
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
                  - Payment
                  - Cardacquisition
                  - Loyalty
                  - Storedvalue
                  - Reversal
                  - Reconciliation
                  - Gettotals
                  - Balanceinquiry
            /transactionstatus:
              post:
                description: >-
                  It conveys Information requested for status of the last or
                  current Payment, Loyalty or Reversal transaction. Content of
                  the TransactionStatus Request message.
                summary: TransactionStatus Request
                tags:
                  - Transaction
                  - Status
                  - Request
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
                  - Payment
                  - Cardacquisition
                  - Loyalty
                  - Storedvalue
                  - Reversal
                  - Reconciliation
                  - Gettotals
                  - Balanceinquiry
                  - Transactionstatus
            /diagnosis:
              post:
                description: >-
                  It conveys Information related to the target POI for which the
                  diagnosis is requested. Content of the Diagnosis Request
                  message.
                summary: Diagnosis Request
                tags:
                  - Diagnosis
                  - Request
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
                  - Payment
                  - Cardacquisition
                  - Loyalty
                  - Storedvalue
                  - Reversal
                  - Reconciliation
                  - Gettotals
                  - Balanceinquiry
                  - Transactionstatus
                  - Diagnosis
            /display:
              post:
                description: >-
                  It conveys the data to display and the way to process the
                  display. It contains the complete content to display. It might
                  contain an operation (the DisplayOutput element) per Display
                  Device type. Content of the Display Request message.
                summary: Display Request
                tags:
                  - Display
                  - Request
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
                  - Payment
                  - Cardacquisition
                  - Loyalty
                  - Storedvalue
                  - Reversal
                  - Reconciliation
                  - Gettotals
                  - Balanceinquiry
                  - Transactionstatus
                  - Diagnosis
                  - Display
            /input:
              post:
                description: >-
                  It conveys data to display and the way to process the display,
                  and contains the complete content to display. In addition to
                  the display on the Input Device, it might contain an operation
                  (the DisplayOutput element) per Display Device type. Content
                  of the Input Request message.
                summary: Input Request
                tags:
                  - Input
                  - Request
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
                  - Payment
                  - Cardacquisition
                  - Loyalty
                  - Storedvalue
                  - Reversal
                  - Reconciliation
                  - Gettotals
                  - Balanceinquiry
                  - Transactionstatus
                  - Diagnosis
                  - Display
                  - Input
            /print:
              post:
                description: >-
                  It conveys the data to print and the way to process the print.
                  It contains the complete content to print. Content of the
                  Print Request message.
                summary: Print Request
                tags:
                  - Print
                  - Request
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
                  - Payment
                  - Cardacquisition
                  - Loyalty
                  - Storedvalue
                  - Reversal
                  - Reconciliation
                  - Gettotals
                  - Balanceinquiry
                  - Transactionstatus
                  - Diagnosis
                  - Display
                  - Input
                  - Print
            /cardreaderapdu:
              post:
                description: >-
                  It contains the APDU request to send to the chip of the card,
                  and a possible invitation message to display on the
                  CashierInterface or the CustomerInterface. Content of the Card
                  Reader APDU Request message.
                summary: CardReaderAPDU Reque
                tags:
                  - Card
                  - Reader
                  - Reque
                  - Login
                  - Logout
                  - Enableservice
                  - Admin
                  - Payment
                  - Cardacquisition
                  - Loyalty
                  - Storedvalue
                  - Reversal
                  - Reconciliation
                  - Gettotals
                  - Balanceinquiry
                  - Transactionstatus
                  - Diagnosis
                  - Display
                  - Input
                  - Print
                  - Cardreaderap
    overlays:
      - type: APIs.io Search
        url: overlays/terminal-openapi-search.yml
    aid: adyen:adyen-terminal-api
  - name: Adyen Test Cards API
    description: >-
      The Test Cards API provides endpoints for generating custom test card
      numbers. For more information, refer to [Custom test
      cards](https://docs.adyen.com/development-resources/testing/create-test-cards)
      documentation.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/development-resources/testing/create-test-cards
    baseURL: https://api.example.com
    tags:
      - Tests
      - Cards
      - Testing
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/development-resources/testing/create-test-cards
      - type: OpenAPI
        url: properties/test-cards-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Adyen Test Cards API
            x-timestamp: '2022-05-03T09:24:07Z'
          x-groups:
            - General
          tags:
            - name: General
          paths:
            /createTestCardRanges:
              post:
                tags:
                  - Creates
                  - One
                  - Or
                  - More
                  - Test
                  - Card
                  - Ranges.
                  - Test
                  - Card
                  - Ranges
                summary: Creates one or more test card ranges.
                description: Creates o
    overlays:
      - type: APIs.io Search
        url: overlays/test-cards-openapi-search.yml
    aid: adyen:adyen-test-cards-api
  - name: Adyen Transaction Webhooks API
    description: >-
      Adyen sends webhooks to inform your system about incoming and outgoing
      transfers in your platform. You can use these webhooks to build your
      implementation. For example, you can use this information to update
      balances in your own dashboards or to keep track of incoming funds.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://docs.adyen.com/marketplaces-and-platforms/business-accounts/transactions/transaction-webhooks/
    baseURL: https://api.example.com
    tags:
      - Transactions
      - Webhooks
      - Funds
    properties:
      - type: OpenAPI
        url: >-
          https://docs.adyen.com/marketplaces-and-platforms/business-accounts/transactions/transaction-webhooks/
      - type: OpenAPI
        url: properties/transaction-webhooks-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/transaction-webhooks-openapi-search.yml
    aid: adyen:adyen-transaction-webhooks-api
  - name: Adyen Transfer Webhooks API
    description: >-
      Adyen sends webhooks to inform your system about incoming and outgoing
      transfers in your platform. You can use these webhooks to build your
      implementation. For example, you can use this information to update
      balances in your own dashboards or to keep track of incoming funds.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/api-explorer/transfer-webhooks/3/overview
    baseURL: https://api.example.com
    tags:
      - Transfers
      - Webhooks
      - Funds
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/api-explorer/transfer-webhooks/3/overview
      - type: OpenAPI
        url: properties/transfer-webhooks-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/transfer-webhooks-openapi-search.yml
    aid: adyen:adyen-transfer-webhooks-api
  - name: Adyen Transfers API
    description: >-
      This API provides endpoints that you can use to transfer funds, whether
      when [paying out to a transfer
      instrument](https://docs.adyen.com/marketplaces-and-platforms/payout-to-users/on-demand-payouts),
      [sending funds to third
      parties](https://docs.adyen.com/marketplaces-and-platforms/business-accounts/send-receive-funds)
      for users with business bank accounts, or to [request a payout for a grant
      offer](https://docs.adyen.com/marketplaces-and-platforms/capital). The API
      also supports use cases for [getting transactions for business bank
      accounts](https://docs.adyen.com/marketplaces-and-platforms/business-accounts/transactions-api)
      and getting [grants and its outstanding
      balances](https://docs.adyen.com/marketplaces-and-platforms/capital#get-balances).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://docs.adyen.com/marketplaces-and-platforms/payout-to-users/on-demand-payouts
    baseURL: https://api.example.com
    tags:
      - Transfers
      - Webhooks
      - Funds
    properties:
      - type: OpenAPI
        url: >-
          https://docs.adyen.com/marketplaces-and-platforms/payout-to-users/on-demand-payouts
      - type: OpenAPI
        url: properties/transfers-openapi-original.yml
        data:
          openapi: 3.1.0
          info:
            x-publicVersion: true
            title: Transfers API
          tags:
            - name: Transfers
            - name: Transactions
            - name: Capital
          paths:
            /grants:
              get:
                tags:
                  - Get
                  - Capital
                  - Account
                  - Grants
                summary: Get a capital account
                description: Returns a list of grants with status and outstanding balances.
              post:
                tags:
                  - Request
                  - Grant
                  - Payout
                  - Grants
                summary: Request a grant payout
                description: Requests the payout of the selected grant offer.
            /grants/{id}:
              get:
                tags:
                  - Get
                  - Grant
                  - Reference
                  - Details
                  - Grants
                  - Id
                summary: Get grant reference details
                description: >-
                  Returns the details of a capital account specified in the
                  path.
            /transactions:
              get:
                tags:
                  - Get
                  - All
                  - Transactions
                  - Grants
                  - Id
                  - Transactions
                summary: Get all transactions
                description: >+
                  >Versions 1 and 2 of the Transfers API are deprecated. If you
                  are just starting your implementation, use the latest version.


                  Returns all the transactions related to a balance account,
                  account holder, or balance platform.


                  When making this request, you must include at least one of the
                  following:

                  - `balanceAccountId`

                  - `accountHolderId`

                  - `balancePlatform`.


                  This endpoint supports cursor-based pagination. The response
                  returns the first page of results, and returns links to the
                  next and previous pages when applicable. You can use the links
                  to page through the results.

            /transactions/{id}:
              get:
                tags:
                  - Get
                  - Transaction
                  - Grants
                  - Id
                  - Transactions
                summary: Get a transaction
                description: >-
                  >Versions 1 and 2 of the Transfers API are deprecated. If you
                  are just starting your implementation, use the latest version.


                  Returns a transaction.
            /transfers:
              post:
                tags:
                  - Transfer
                  - Funds
                  - Grants
                  - Id
                  - Transactions
                  - Transfers
                summary: Transfer funds
                description: >-
                  >Versions 1 and 2 of the Transfers API are deprecated. If you
                  are just starting your implementation, use the latest version.


                  Starts a request to transfer funds to [balance
                  accounts](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts),
                  [transfer
                  instruments](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments),
                  or third-party bank accounts. Adyen sends the outcome of the
                  transfer request through webhooks.


                  To use this endpoint, you need an additional role for your API
                  credential and transfers must be enabled for the source
                  balance account. Your Adyen contact will set these up for you.
            /transfers/{transferId}/returns:
              post:
                tags:
                  - Return
                  - Transfer
                  - Grants
                  - Id
                  - Transactions
                  - Transfers
                  - Returns
                summary: Return a transfer
                description: Returns previously transferred funds without crea
    overlays:
      - type: APIs.io Search
        url: overlays/transfers-openapi-search.yml
    aid: adyen:adyen-transfers-api
  - name: Adyen Webhooks API
    description: >-
      We use webhooks to send you updates about payment status updates, newly
      available reports, and other events that you can subscribe to. For more
      information, refer to our
      [documentation](https://docs.adyen.com/development-resources/webhooks).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/development-resources/webhooks
    baseURL: https://api.example.com
    tags:
      - Transfers
      - Webhooks
      - Funds
    properties:
      - type: OpenAPI
        url: https://docs.adyen.com/development-resources/webhooks
      - type: OpenAPI
        url: properties/webhooks-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: overlays/webhooks-openapi-search.yml
    aid: adyen:adyen-webhooks-api
common:
  - type: Terms of Service
    url: https://www.adyen.com/legal/terms-and-conditions
  - type: Authentication
    url: https://www.adyen.com/authentication-3d-secure
  - type: Plans
    url: https://www.adyen.com/pricing
  - type: Documentation
    url: https://docs.adyen.com/
  - type: Newsletter
    url: https://www.adyen.com/newsletter
  - type: Knowledge
    url: https://www.adyen.com/knowledge-hub
  - type: Login
    url: https://authn-live.adyen.com/authn/ui/login
  - type: Support
    url: https://help.adyen.com/en_US
  - type: Contact
    url: https://help.adyen.com/en_US/contact
  - type: Webinars
    url: https://help.adyen.com/en_US/academy/webinars
  - type: Privacy
    url: https://www.adyen.com/policies-and-disclaimer/privacy-policy
  - type: OpenAPI
    url: https://github.com/Adyen/adyen-openapi
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
aid: adyen
---