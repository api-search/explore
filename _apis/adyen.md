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
            - name: Verification
            - name: Accounts
          paths:
            /checkAccountHolder:
              post:
                tags:
                  - Verification
                summary: Trigger verification
                description: >-
                  Triggers the verification of an account holder even if the
                  checks are not yet required for the volume that they are
                  currently processing.
                x-addedInVersion: '5'
                x-groupName: Verification
                x-sortIndex: 3
                x-methodName: checkAccountHolder
            /closeAccount:
              post:
                tags:
                  - Accounts
                summary: Close an account
                description: >-
                  Closes an account. If an account is closed, you cannot process
                  transactions, pay out its funds, or reopen it. If payments are
                  made to a closed account, the payments are sent to your liable
                  account.
                x-groupName: Accounts
                x-sortIndex: 3
                x-methodName: closeAccount
            /closeAccountHolder:
              post:
                tags:
                  - Account holders
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
                x-groupName: Account holders
                x-sortIndex: 7
                x-methodName: closeAccountHolder
            /closeStores:
              post:
                tags:
                  - Account holders
                summary: Close stores
                description: Closes stores associated with an account holder.
                x-addedInVersion: '5'
                x-groupName: Account holders
                x-sortIndex: 9
                x-methodName: closeStores
            /createAccount:
              post:
                tags:
                  - Accounts
                summary: Create an account
                description: >-
                  Creates an account under an account holder. An account holder
                  can have [multiple
                  accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#create-additional-accounts).
                x-groupName: Accounts
                x-sortIndex: 1
                x-methodName: createAccount
            /createAccountHolder:
              post:
                tags:
                  - Account holders
                summary: Create an account holder
                description: >-
                  Creates an account holder that [represents the sub-merchant's
                  entity](https://docs.adyen.com/marketplaces-and-platforms/classic/account-structure#your-platform)
                  in your platform. The details that you need to provide in the
                  request depend on the sub-merchant's legal entity type. For
                  more information, refer to [Account holder and
                  accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#legal-entity-types).
                x-groupName: Account holders
                x-sortIndex: 1
                x-methodName: createAccountHolder
            /deleteBankAccounts:
              post:
                tags:
                  - Verification
                summary: Delete bank accounts
                description: 'Deletes bank accounts associated with an account holder. '
                x-groupName: Verification
                x-sortIndex: 4
                x-methodName: deleteBankAccounts
            /deleteLegalArrangements:
              post:
                tags:
                  - Verification
                summary: Delete legal arrangements
                description: >-
                  Deletes legal arrangements and/or legal arrangement entities
                  associated with an account holder.
                x-groupName: Verification
                x-sortIndex: 6
                x-methodName: deleteLegalArrangements
            /deletePayoutMethods:
              post:
                tags:
                  - Verification
                summary: Delete payout methods
                description: Deletes payout methods associated with an account holder.
                x-addedInVersion: '5'
                x-groupName: Verification
                x-sortIndex: 5
                x-methodName: deletePayoutMethods
            /deleteShareholders:
              post:
                tags:
                  - Verification
                summary: Delete shareholders
                description: Deletes shareholders associated with an account holder.
                x-groupName: Verification
                x-sortIndex: 7
                x-methodName: deleteShareholders
            /deleteSignatories:
              post:
                tags:
                  - Verification
                summary: Delete signatories
                description: Deletes signatories associated with an account holder.
                x-groupName: Verification
                x-sortIndex: 8
                x-methodName: deleteSignatories
            /getAccountHolder:
              post:
                tags:
                  - Account holders
                summary: Get an account holder
                description: Returns the details of an account holder.
                x-groupName: Account holders
                x-sortIndex: 2
                x-methodName: getAccountHolder
            /getTaxForm:
              post:
                tags:
                  - Account holders
                summary: Get a tax form
                description: >-
                  Generates a tax form for account holders operating in the US.
                  For more information, refer to [Providing tax
                  forms](https://docs.adyen.com/marketplaces-and-platforms/classic/tax-forms).
                x-groupName: Account holders
                x-sortIndex: 8
                x-methodName: getTaxForm
            /getUploadedDocuments:
              post:
                tags:
                  - Verification
                summary: Get documents
                description: >
                  Returns documents that were previously uploaded for an account
                  holder. Adyen uses the documents during the [verification
                  process](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process).
                x-groupName: Verification
                x-sortIndex: 2
                x-methodName: getUploadedDocuments
            /suspendAccountHolder:
              post:
                tags:
                  - Account holders
                summary: Suspend an account holder
                description: >-
                  Changes the [status of an account
                  holder](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#account-holder-statuses)
                  to **Suspended**.
                x-groupName: Account holders
                x-sortIndex: 5
                x-methodName: suspendAccountHolder
            /unSuspendAccountHolder:
              post:
                tags:
                  - Account holders
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
                x-groupName: Account holders
                x-sortIndex: 6
                x-methodName: unSuspendAccountHolder
            /updateAccount:
              post:
                tags:
                  - Accounts
                summary: Update an account
                description: Updates the description or payout schedule of an account.
                x-groupName: Accounts
                x-sortIndex: 2
                x-methodName: updateAccount
            /updateAccountHolder:
              post:
                tags:
                  - Account holders
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

                x-groupName: Account holders
                x-sortIndex: 3
                x-methodName: updateAccountHolder
            /updateAccountHolderState:
              post:
                tags:
                  - Account holders
                summary: Update payout or processing state
                description: >-
                  Disables or enables the processing or payout state of an
                  account holder.
                x-groupName: Account holders
                x-sortIndex: 4
                x-methodName: updateAccountHolderState
            /uploadDocument:
              post:
                tags:
                  - Verification
                summary: Upload a document
                description: >-
                  Uploads a document for an account holder. Adyen uses the
                  documents during the [verification
                  process](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process).
                x-groupName: Verification
                x-sortIndex: 1
                x-methodName: uploadDocument
    overlays:
      - type: APIs.io Search
        url: overlays/accounts-openapi-search.yml
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
                  - General
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
                  the requests are sent in parallel.
                x-groupName: General
                x-sortIndex: 0
                x-methodName: balanceTransfer
    overlays:
      - type: APIs.io Search
        url: overlays/balance-control-openapi-search.yml
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
                  - General
                summary: Check if 3D Secure is available
                description: >-
                  Verifies whether 3D Secure is available for the specified BIN
                  or card brand. For 3D Secure 2, this endpoint also returns
                  device fingerprinting keys.


                  For more information, refer to [3D Secure
                  2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).
                x-addedInVersion: '1'
                x-sortIndex: 0
                x-methodName: get3dsAvailability
            /getCostEstimate:
              post:
                tags:
                  - General
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
                  define in the `assumptions` parameter.
                x-sortIndex: 0
                x-methodName: getCostEstimate
    overlays:
      - type: APIs.io Search
        url: overlays/binlookup-openapi-search.yml
  - name: Adyen Checkout API
    description: This is the description of your API.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/api-explorer/Checkout/71/overview
    baseURL: https://api.example.com
    tags:
      - Checkout
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
                  - Utility
                summary: Get an Apple Pay session
                description: >-
                  You need to use this endpoint if you have an API-only
                  integration with Apple Pay which uses Adyen's Apple Pay
                  certificate.


                  The endpoint returns the Apple Pay session data which you need
                  to complete the [Apple Pay session
                  validation](https://docs.adyen.com/payment-methods/apple-pay/api-only?tab=adyen-certificate-validation_1#complete-apple-pay-session-validation).
                x-sortIndex: 2
                x-methodName: getApplePaySession
            /cancels:
              post:
                tags:
                  - Modifications
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
                x-sortIndex: 3
                x-methodName: cancelAuthorisedPayment
            /cardDetails:
              post:
                tags:
                  - Payments
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

                x-sortIndex: 6
                x-methodName: cardDetails
            /donations:
              post:
                tags:
                  - Donations
                summary: Start a transaction for donations
                description: >-
                  Takes in the donation token generated by the `/payments`
                  request and uses it to make the donation for the donation
                  account specified in the request.


                  For more information, see
                  [Donations](https://docs.adyen.com/online-payments/donations).
                x-sortIndex: 2
                x-methodName: donations
            /orders:
              post:
                tags:
                  - Orders
                summary: Create an order
                description: >-
                  Creates an order to be used for partial payments. Make a POST
                  `/orders` call before making a `/payments` call when
                  processing payments with different payment methods.
                x-sortIndex: 2
                x-methodName: orders
            /orders/cancel:
              post:
                tags:
                  - Orders
                summary: Cancel an order
                description: >-
                  Cancels an order. Cancellation of an order results in an
                  automatic rollback of all payments made in the order, either
                  by canceling or refunding the payment, depending on the type
                  of payment method.
                x-sortIndex: 3
                x-methodName: cancelOrder
            /originKeys:
              post:
                tags:
                  - Utility
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
                deprecated: true
                x-deprecatedInVersion: '67'
                x-sortIndex: 1
                x-methodName: originKeys
            /paymentLinks:
              post:
                tags:
                  - Payment links
                summary: Create a payment link
                description: >-
                  Creates a payment link to our hosted payment form where
                  shoppers can pay. The list of payment methods presented to the
                  shopper depends on the `currency` and `country` parameters
                  sent in the request.


                  For more information, refer to [Pay by Link
                  documentation](https://docs.adyen.com/online-payments/pay-by-link#create-payment-links-through-api).
                x-sortIndex: 1
                x-methodName: paymentLinks
            /paymentLinks/{linkId}:
              get:
                tags:
                  - Payment links
                summary: Get a payment link
                description: >-
                  Retrieves the payment link details using the payment link
                  `id`.
                x-sortIndex: 2
                x-methodName: getPaymentLink
              patch:
                tags:
                  - Payment links
                summary: Update the status of a payment link
                description: >-
                  Updates the status of a payment link. Use this endpoint to
                  [force the expiry of a payment
                  link](https://docs.adyen.com/online-payments/pay-by-link#update-payment-link-status).
                x-sortIndex: 3
                x-methodName: updatePaymentLink
            /paymentMethods:
              post:
                tags:
                  - Payments
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
                x-sortIndex: 2
                x-methodName: paymentMethods
            /paymentMethods/balance:
              post:
                tags:
                  - Orders
                summary: Get the balance of a gift card
                description: >-
                  Retrieves the balance remaining on a shopper's gift card. To
                  check a gift card's balance, make a POST
                  `/paymentMethods/balance` call and include the gift card's
                  details inside a `paymentMethod` object.
                x-sortIndex: 1
                x-methodName: getBalanceOfGiftCard
            /paymentSession:
              post:
                tags:
                  - Classic Checkout SDK
                summary: Create a payment session
                description: >-
                  Provides the data object that can be used to start the
                  Checkout SDK. To set up the payment, pass its amount,
                  currency, and other required parameters. We use this to
                  optimise the payment flow and perform better risk assessment
                  of the transaction.


                  For more information, refer to [How it
                  works](https://docs.adyen.com/online-payments#howitworks).
                deprecated: true
                x-deprecatedInVersion: '37'
                x-sortIndex: 1
                x-methodName: paymentSession
            /payments:
              post:
                tags:
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
                x-sortIndex: 3
                x-methodName: payments
            /payments/details:
              post:
                tags:
                  - Payments
                summary: Submit details for a payment
                description: >+
                  Submits details for a payment created using `/payments`. This
                  step is only needed when no final state has been reached on
                  the `/payments` request, for example when the shopper was
                  redirected to another page to complete the payment.

                x-sortIndex: 4
                x-methodName: paymentsDetails
            /payments/result:
              post:
                tags:
                  - Classic Checkout SDK
                summary: Verify a payment result
                description: >-
                  Verifies the payment result using the payload returned from
                  the Checkout SDK.


                  For more information, refer to [How it
                  works](https://docs.adyen.com/online-payments#howitworks).
                deprecated: true
                x-deprecatedInVersion: '37'
                x-sortIndex: 2
                x-methodName: verifyPaymentResult
            /payments/{paymentPspReference}/amountUpdates:
              post:
                tags:
                  - Modifications
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
                x-sortIndex: 6
                x-methodName: updateAuthorisedAmount
            /payments/{paymentPspReference}/cancels:
              post:
                tags:
                  - Modifications
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
                x-sortIndex: 2
                x-methodName: cancelAuthorisedPaymentByPspReference
            /payments/{paymentPspReference}/captures:
              post:
                tags:
                  - Modifications
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
                x-sortIndex: 1
                x-methodName: captureAuthorisedPayment
            /payments/{paymentPspReference}/refunds:
              post:
                tags:
                  - Modifications
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
                x-sortIndex: 4
                x-methodName: refundCapturedPayment
            /payments/{paymentPspReference}/reversals:
              post:
                tags:
                  - Modifications
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
                x-sortIndex: 5
                x-methodName: refundOrCancelPayment
            /sessions:
              post:
                tags:
                  - Payments
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
                x-addedInVersion: '68'
                x-sortIndex: 1
                x-methodName: sessions
            /sessions/{sessionId}:
              get:
                tags:
                  - Payments
                summary: Get the result of a payment session
                description: >-
                  Returns the status of the payment session with the `sessionId`
                  and `sessionResult` specified in the path.
                x-addedInVersion: '68'
                x-sortIndex: 2
                x-methodName: getResultOfPaymentSession
            /storedPaymentMethods:
              get:
                tags:
                  - Recurring
                summary: Get tokens for stored payment details
                description: >+
                  Lists the tokens for stored payment details for the shopper
                  identified in the path, if there are any available. The token
                  ID can be used with payment requests for the shopper's
                  payment. A summary of the stored details is included.

                x-addedInVersion: '70'
                x-sortIndex: 2
                x-methodName: getTokensForStoredPaymentDetails
            /storedPaymentMethods/{storedPaymentMethodId}:
              delete:
                tags:
                  - Recurring
                summary: Delete a token for stored payment details
                description: >-
                  Deletes the token identified in the path. The token can no
                  longer be used with payment requests.
                x-addedInVersion: '70'
                x-sortIndex: 4
                x-methodName: deleteTokenForStoredPaymentDetails
    overlays:
      - type: APIs.io Search
        url: overlays/checkout-openapi-search.yml
  - name: Adyen Configuration API
    description: >-
      The Configuration API enables you to create a platform where you can
      onboard your users as account holders and create balance accounts, cards,
      and business accounts.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://docs.adyen.com/api-explorer/balanceplatform/2/overview
    baseURL: https://api.example.com
    tags:
      - Configuration
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
                  - Account holders
                summary: Create an account holder
                description: >+
                  Creates an account holder linked to a [legal
                  entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).

                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: createAccountHolder
            /accountHolders/{id}:
              get:
                tags:
                  - Account holders
                summary: Get an account holder
                description: Returns an account holder.
                x-addedInVersion: '1'
                x-sortIndex: 3
                x-methodName: getAccountHolder
              patch:
                tags:
                  - Account holders
                summary: Update an account holder
                description: >-
                  Updates an account holder. When updating an account holder
                  resource, if a parameter is not provided in the request, it is
                  left unchanged.
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: updateAccountHolder
            /accountHolders/{id}/balanceAccounts:
              get:
                tags:
                  - Account holders
                summary: Get all balance accounts of an account holder
                description: >-
                  Returns a paginated list of the balance accounts associated
                  with an account holder. To fetch multiple pages, use the query
                  parameters. 


                  For example, to limit the page to 5 balance accounts and skip
                  the first 10, use
                  `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.
                x-addedInVersion: '1'
                x-sortIndex: 4
                x-methodName: getAllBalanceAccountsOfAccountHolder
            /accountHolders/{id}/taxForms:
              get:
                tags:
                  - Account holders
                summary: Get a tax form
                description: >-
                  Generates a tax form for account holders operating in the US.
                  For more information, refer to [Providing tax
                  forms](https://docs.adyen.com/marketplaces-and-platforms/us-tax-forms/).
                x-addedInVersion: '2'
                x-sortIndex: 5
                x-methodName: getTaxForm
            /balanceAccounts:
              post:
                tags:
                  - Balance accounts
                summary: Create a balance account
                description: >-
                  Creates a balance account that holds the funds of the
                  associated account holder.
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: createBalanceAccount
            /balanceAccounts/{balanceAccountId}/sweeps:
              get:
                tags:
                  - Balance accounts
                summary: Get all sweeps for a balance account
                description: >-
                  Returns a list of the sweeps configured for a balance account.


                  To fetch multiple pages, use the query parameters. For
                  example, to limit the page to 5 sweeps and to skip the first
                  10, use
                  `/balanceAccounts/{balanceAccountId}/sweeps?limit=5&offset=10`.
                x-addedInVersion: '2'
                x-sortIndex: 7
                x-methodName: getAllSweepsForBalanceAccount
              post:
                tags:
                  - Balance accounts
                summary: Create a sweep
                description: >-
                  Creates a sweep that results in moving funds from or to a
                  balance account.


                  A sweep pulls in or pushes out funds based on a defined
                  schedule, amount, currency, and a source or a destination.
                x-addedInVersion: '2'
                x-sortIndex: 5
                x-methodName: createSweep
            /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}:
              delete:
                tags:
                  - Balance accounts
                summary: Delete a sweep
                description: Deletes a sweep for a balance account.
                x-addedInVersion: '2'
                x-sortIndex: 9
                x-methodName: deleteSweep
              get:
                tags:
                  - Balance accounts
                summary: Get a sweep
                description: Returns a sweep.
                x-addedInVersion: '2'
                x-sortIndex: 8
                x-methodName: getSweep
              patch:
                tags:
                  - Balance accounts
                summary: Update a sweep
                description: >-
                  Updates a sweep. When updating a sweep resource, note that if
                  a request parameter is not provided, the parameter is left
                  unchanged.
                x-addedInVersion: '2'
                x-sortIndex: 6
                x-methodName: updateSweep
            /balanceAccounts/{id}:
              get:
                tags:
                  - Balance accounts
                summary: Get a balance account
                description: >-
                  Returns a balance account and its balances for the default
                  currency and other currencies with a non-zero balance.
                x-addedInVersion: '1'
                x-sortIndex: 3
                x-methodName: getBalanceAccount
              patch:
                tags:
                  - Balance accounts
                summary: Update a balance account
                description: Updates a balance account.
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: updateBalanceAccount
            /balanceAccounts/{id}/paymentInstruments:
              get:
                tags:
                  - Balance accounts
                summary: Get payment instruments linked to a balance account
                description: >-
                  Returns a paginated list of the payment instruments associated
                  with a balance account. 


                  To fetch multiple pages, use the query parameters.For example,
                  to limit the page to 3 payment instruments which are in active
                  status and to skip the first 6, use
                  `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6&status=active`.
                x-addedInVersion: '1'
                x-sortIndex: 4
                x-methodName: getPaymentInstrumentsLinkedToBalanceAccount
            /balancePlatforms/{id}:
              get:
                tags:
                  - Platform
                summary: Get a balance platform
                description: Returns a balance platform.
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: getBalancePlatform
            /balancePlatforms/{id}/accountHolders:
              get:
                tags:
                  - Platform
                summary: Get all account holders under a balance platform
                description: >-
                  Returns a paginated list of all the account holders that
                  belong to the balance platform. To fetch multiple pages, use
                  the query parameters. 


                  For example, to limit the page to 5 account holders and to
                  skip the first 20, use
                  `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: getAllAccountHoldersUnderBalancePlatform
            /cardorders:
              get:
                tags:
                  - Card orders
                summary: Get a list of card orders
                description: Returns a paginated list of card orders.
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: listCardOrders
            /cardorders/{id}/items:
              get:
                tags:
                  - Card orders
                summary: Get card order items
                description: Returns the item list of a specific card order.
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: getCardOrderItems
            /grantAccounts/{id}:
              get:
                tags:
                  - Grant accounts
                summary: Get a grant account
                description: >-
                  Returns the details of the [grant
                  account](https://docs.adyen.com/marketplaces-and-platforms/capital#grant-account).
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: getGrantAccount
            /grantOffers:
              get:
                tags:
                  - Grant offers
                summary: Get all available grant offers
                description: >-
                  Returns a list of all [grant
                  offers](https://docs.adyen.com/marketplaces-and-platforms/capital#grant-offers)
                  available for `accountHolderId` specified as a query
                  parameter.
                x-addedInVersion: '2'
                x-sortIndex: 1
                x-methodName: getAllAvailableGrantOffers
            /grantOffers/{grantOfferId}:
              get:
                tags:
                  - Grant offers
                summary: Get a grant offer
                description: Returns the details of a single grant offer.
                x-addedInVersion: '2'
                x-sortIndex: 1
                x-methodName: getGrantOffer
            /networkTokens/{networkTokenId}:
              get:
                tags:
                  - Network tokens
                summary: Get a network token
                description: Returns the details of a network token.
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: getNetworkToken
              patch:
                tags:
                  - Network tokens
                summary: Update a network token
                description: Updates the status of the network token.
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: updateNetworkToken
            /paymentInstrumentGroups:
              post:
                tags:
                  - Payment instrument groups
                summary: Create a payment instrument group
                description: >-
                  Creates a payment instrument group to associate and group
                  payment instrument resources together. You can apply a
                  transaction rule to a payment instrument group.
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: createPaymentInstrumentGroup
            /paymentInstrumentGroups/{id}:
              get:
                tags:
                  - Payment instrument groups
                summary: Get a payment instrument group
                description: Returns the details of a payment instrument group.
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: getPaymentInstrumentGroup
            /paymentInstrumentGroups/{id}/transactionRules:
              get:
                tags:
                  - Payment instrument groups
                summary: Get all transaction rules for a payment instrument group
                description: >-
                  Returns a list of all the transaction rules associated with a
                  payment instrument group.
                x-addedInVersion: '1'
                x-sortIndex: 3
                x-methodName: getAllTransactionRulesForPaymentInstrumentGroup
            /paymentInstruments:
              post:
                tags:
                  - Payment instruments
                summary: Create a payment instrument
                description: >-
                  Creates a payment instrument to issue a physical card, a
                  virtual card, or a business account to your user.

                   For more information, refer to [Issue cards](https://docs.adyen.com/issuing/create-cards) or [Issue business accounts](https://docs.adyen.com/marketplaces-and-platforms/business-accounts).
                x-addedInVersion: '1'
                x-sortIndex: 11
                x-methodName: createPaymentInstrument
            /paymentInstruments/{id}:
              get:
                tags:
                  - Payment instruments
                summary: Get a payment instrument
                description: Returns the details of a payment instrument.
                x-addedInVersion: '1'
                x-sortIndex: 13
                x-methodName: getPaymentInstrument
              patch:
                tags:
                  - Payment instruments
                summary: Update a payment instrument
                description: >-
                  Updates a payment instrument. Once a payment instrument is
                  already active, you can only update its status. However, for
                  cards created with **inactive** status, you can still update
                  the balance account associated with the card.
                x-addedInVersion: '1'
                x-sortIndex: 12
                x-methodName: updatePaymentInstrument
            /paymentInstruments/{id}/networkTokens:
              get:
                tags:
                  - Payment instruments
                summary: List network tokens
                description: List the network tokens connected to a payment instrument.
                x-addedInVersion: '1'
                x-sortIndex: 15
                x-methodName: listNetworkTokens
            /paymentInstruments/{id}/reveal:
              get:
                tags:
                  - Payment instruments
                summary: Get the PAN of a payment instrument
                description: >-
                  Returns the primary account number (PAN) of a payment
                  instrument.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service#api-permissions):


                  * Balance Platform BCL PCI role
                x-addedInVersion: '1'
                x-sortIndex: 14
                x-methodName: getPanOfPaymentInstrument
            /paymentInstruments/{id}/transactionRules:
              get:
                tags:
                  - Payment instruments
                summary: Get all transaction rules for a payment instrument
                description: >-
                  Returns a list of transaction rules associated with a payment
                  instrument.
                x-addedInVersion: '1'
                x-sortIndex: 14
                x-methodName: getAllTransactionRulesForPaymentInstrument
            /pins/change:
              post:
                tags:
                  - PIN functionality
                summary: Change Pin
                description: Change Pin
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: changePin
            /pins/publicKey:
              get:
                tags:
                  - PIN functionality
                summary: Get RSA publicKey
                description: Get RSA publicKey
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: getRsaPublickey
            /pins/reveal:
              post:
                tags:
                  - PIN functionality
                summary: Reveal Pin
                description: Reveal Pin
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: revealPin
            /transactionRules:
              post:
                tags:
                  - Transaction rules
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
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: createTransactionRule
            /transactionRules/{transactionRuleId}:
              delete:
                tags:
                  - Transaction rules
                summary: Delete a transaction rule
                description: Deletes a transaction rule.
                x-addedInVersion: '1'
                x-sortIndex: 5
                x-methodName: deleteTransactionRule
              get:
                tags:
                  - Transaction rules
                summary: Get a transaction rule
                description: Returns the details of a transaction rule.
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: getTransactionRule
              patch:
                tags:
                  - Transaction rules
                summary: Update a transaction rule
                description: >-
                  Updates a transaction rule. 


                  * To update only the status of a transaction rule, send only
                  the `status` parameter. All other parameters not provided in
                  the request are left unchanged.


                  * When updating any other parameter, you need to send all
                  existing resource parameters. If you omit a parameter in the
                  request, that parameter is removed from the resource.
                x-addedInVersion: '1'
                x-sortIndex: 3
                x-methodName: updateTransactionRule
            /transferRoutes/calculate:
              post:
                tags:
                  - Transfer routes
                summary: Calculate transfer routes
                description: >-
                  Returns available transfer routes based on a combination of
                  transfer `country`, `currency`, `counterparty`, and
                  `priorities`. Use this endpoint to find optimal transfer
                  priorities and associated requirements before you [make a
                  transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers).
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: calculateTransferRoutes
            /validateBankAccountIdentification:
              post:
                tags:
                  - Bank account validation
                summary: Validate a bank account
                description: >-
                  Validates bank account identification details. You can use
                  this endpoint to validate bank account details before you
                  [make a
                  transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers)
                  or [create a transfer
                  instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments).
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: validateBankAccountIdentification
    overlays:
      - type: APIs.io Search
        url: overlays/configuration-openapi-search.yml
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
      - Configuration
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
                  - General
                summary: Submit a Subject Erasure Request.
                description: >-
                  Sends the PSP reference containing the shopper data that
                  should be deleted.
                x-sortIndex: 0
                x-methodName: requestSubjectErasure
    overlays:
      - type: APIs.io Search
        url: overlays/data-protection-openapi-search.yml
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
                  - General
                summary: Accept a dispute
                description: Accepts a specific dispute.
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: acceptDispute
            /defendDispute:
              post:
                tags:
                  - General
                summary: Defend a dispute
                description: Defends a specific dispute.
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: defendDispute
            /deleteDisputeDefenseDocument:
              post:
                tags:
                  - General
                summary: Delete a defense document
                description: >-
                  Deletes a specific dispute defense document that was supplied
                  earlier.
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: deleteDisputeDefenseDocument
            /retrieveApplicableDefenseReasons:
              post:
                tags:
                  - General
                summary: Get applicable defense reasons
                description: >-
                  Returns a list of all applicable defense reasons to defend a
                  specific dispute.
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: retrieveApplicableDefenseReasons
            /supplyDefenseDocument:
              post:
                tags:
                  - General
                summary: Supply a defense document
                description: Supplies a specific dispute defense document.
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: supplyDefenseDocument
    overlays:
      - type: APIs.io Search
        url: overlays/disputes-openapi-search.yml
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
                  - General
                summary: Get the balances of an account holder
                description: >-
                  Returns the account balances of an account holder. An
                  account's balances are organized according by currencies. This
                  mean that an account may have multiple balances: one for each
                  currency.
                x-groupName: General
                x-sortIndex: 1
                x-methodName: accountHolderBalance
            /accountHolderTransactionList:
              post:
                tags:
                  - General
                summary: Get a list of transactions
                description: >-
                  Returns a list of transactions for an account holder's
                  accounts. You can specify the accounts and transaction
                  statuses to be included on the list. The call returns a
                  maximum of 50 transactions for each account. To retrieve all
                  transactions, you must make another call with the 'page' value
                  incremented. Transactions are listed in chronological order,
                  with the most recent transaction first.
                x-groupName: General
                x-sortIndex: 2
                x-methodName: accountHolderTransactionList
            /debitAccountHolder:
              post:
                tags:
                  - General
                summary: Send a direct debit request
                description: >-
                  Sends a direct debit request to an account holder's bank
                  account. If the direct debit is successful, the funds are
                  settled in the accounts specified in the split instructions.
                  Adyen sends the result of the direct debit in a
                  [`DIRECT_DEBIT_INITIATED`](https://docs.adyen.com/api-explorer/#/NotificationService/latest/post/DIRECT_DEBIT_INITIATED)
                  notification webhook.

                   To learn more about direct debits, see [Top up accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/top-up-accounts).
                x-groupName: General
                x-sortIndex: 8
                x-methodName: debitAccountHolder
            /payoutAccountHolder:
              post:
                tags:
                  - General
                summary: Pay out from an account to the account holder
                description: >-
                  Pays out a specified amount from an account to the bank
                  account of account holder.
                x-groupName: General
                x-sortIndex: 3
                x-methodName: payoutAccountHolder
            /refundFundsTransfer:
              post:
                tags:
                  - General
                summary: Refund a funds transfer
                description: >-
                  Refunds funds transferred from one account to another. Both
                  accounts must be in the same platform, but can have different
                  account holders. 
                x-groupName: General
                x-sortIndex: 5
                x-methodName: refundFundsTransfer
            /refundNotPaidOutTransfers:
              post:
                tags:
                  - General
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
                x-groupName: General
                x-sortIndex: 7
                x-methodName: refundNotPaidOutTransfers
            /setupBeneficiary:
              post:
                tags:
                  - General
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
                x-groupName: General
                x-sortIndex: 6
                x-methodName: setupBeneficiary
            /transferFunds:
              post:
                tags:
                  - General
                summary: Transfer funds between platform accounts
                description: >-
                  Transfers funds from one account to another account. Both
                  accounts must be in the same platform, but can have different
                  account holders. The transfer must include a transfer code,
                  which should be determined by the platform, in compliance with
                  local regulations.
                x-groupName: General
                x-sortIndex: 4
                x-methodName: transferFunds
    overlays:
      - type: APIs.io Search
        url: overlays/funds-openapi-search.yml
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
                  - Hosted Onboarding Page
                summary: Get a link to a Adyen-hosted onboarding page
                description: >-
                  Returns a link to an Adyen-hosted onboarding page (HOP) that
                  you can send to your account holder. For more information on
                  how to use HOP, refer to [Hosted
                  onboarding](https://docs.adyen.com/marketplaces-and-platforms/classic/collect-verification-details/hosted-onboarding-page). 
                x-groupName: Hosted Onboarding Page
                x-sortIndex: 1
                x-methodName: getOnboardingUrl
            /getPciQuestionnaireUrl:
              post:
                tags:
                  - PCI Compliance Questionnaire Page
                summary: Get a link to a PCI compliance questionnaire
                description: >-
                  Returns a link to a PCI compliance questionnaire that you can
                  send to your account holder.
                   > You should only use this endpoint if you have a [partner platform setup](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners).
                x-groupName: PCI Compliance Questionnaire Page
                x-sortIndex: 1
                x-methodName: getPciQuestionnaireUrl
    overlays:
      - type: APIs.io Search
        url: overlays/hosted-onboarding-openapi-search.yml
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
      - Verification
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
                  - Business lines
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

                x-addedInVersion: '1'
                x-sortIndex: 12
                x-methodName: createBusinessLine
            /businessLines/{id}:
              delete:
                tags:
                  - Business lines
                summary: Delete a business line
                description: |-
                  Deletes a business line.

                   >If you delete a business line linked to a [payment method](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api), it can affect your merchant account's ability to use the [payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings). The business line is removed from all linked merchant accounts.
                x-addedInVersion: '1'
                x-sortIndex: 14
                x-methodName: deleteBusinessLine
              get:
                tags:
                  - Business lines
                summary: Get a business line
                description: Returns the detail of a business line.
                x-addedInVersion: '1'
                x-sortIndex: 13
                x-methodName: getBusinessLine
              patch:
                tags:
                  - Business lines
                summary: Update a business line
                description: Updates a business line.
                x-addedInVersion: '2'
                x-sortIndex: 15
                x-methodName: updateBusinessLine
            /documents:
              post:
                tags:
                  - Documents
                summary: Upload a document for verification checks
                description: |-
                  Uploads a document for verification checks.

                   Adyen uses the information from the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities) to run automated verification checks. If these checks fail, you will be notified to provide additional documents.

                   You should only upload documents when Adyen requests additional information for the legal entity.

                   >You can upload a maximum of 15 pages for photo IDs.
                x-addedInVersion: '1'
                x-sortIndex: 4
                x-methodName: uploadDocumentForVerificationChecks
            /documents/{id}:
              delete:
                tags:
                  - Documents
                summary: Delete a document
                description: Deletes a document.
                x-addedInVersion: '1'
                x-sortIndex: 7
                x-methodName: deleteDocument
              get:
                tags:
                  - Documents
                summary: Get a document
                description: Returns a document.
                x-addedInVersion: '1'
                x-sortIndex: 5
                x-methodName: getDocument
              patch:
                tags:
                  - Documents
                summary: Update a document
                description: |-
                  Updates a document.

                   >You can upload a maximum of 15 pages for photo IDs.
                x-addedInVersion: '1'
                x-sortIndex: 6
                x-methodName: updateDocument
            /legalEntities:
              post:
                tags:
                  - Legal entities
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

                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: createLegalEntity
            /legalEntities/{id}:
              get:
                tags:
                  - Legal entities
                summary: Get a legal entity
                description: Returns a legal entity.
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: getLegalEntity
              patch:
                tags:
                  - Legal entities
                summary: Update a legal entity
                description: |-
                  Updates a legal entity.

                   >To change the legal entity type, include only the new `type` in your request. To update the `entityAssociations` array, you need to replace the entire array. For example, if the array has 3 entries and you want to remove 1 entry, you need to PATCH the resource with the remaining 2 entries.
                x-addedInVersion: '1'
                x-sortIndex: 3
                x-methodName: updateLegalEntity
            /legalEntities/{id}/businessLines:
              get:
                tags:
                  - Legal entities
                summary: Get all business lines under a legal entity
                description: Returns the business lines owned by a legal entity.
                x-addedInVersion: '1'
                x-sortIndex: 4
                x-methodName: getAllBusinessLinesUnderLegalEntity
            /legalEntities/{id}/checkVerificationErrors:
              post:
                tags:
                  - Legal entities
                summary: Check a legal entity's verification errors
                description: >-
                  Returns the verification errors for a legal entity and its
                  supporting entities.
                x-addedInVersion: '3'
                x-sortIndex: 2
                x-methodName: checkLegalEntitysVerificationErrors
            /legalEntities/{id}/confirmDataReview:
              post:
                tags:
                  - Legal entities
                summary: Confirm data review
                description: >-
                  Confirms that your user has reviewed the data for the legal
                  entity specified in the path. Call this endpoint to inform
                  Adyen that your user reviewed and verified that the data is
                  up-to-date. The endpoint returns the timestamp of when Adyen
                  received the request.
                x-addedInVersion: '3'
                x-sortIndex: 22
                x-methodName: confirmDataReview
            /legalEntities/{id}/onboardingLinks:
              post:
                tags:
                  - Hosted Onboarding
                summary: Get a link to an Adyen-hosted onboarding page
                description: >+
                  Returns a link to an Adyen-hosted onboarding page where you
                  need to redirect your user.


                  >If you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: getLinkToAdyenhostedOnboardingPage
            /legalEntities/{id}/pciQuestionnaires:
              get:
                tags:
                  - PCI questionnaires
                summary: Get PCI questionnaire details
                description: Get a list of signed PCI questionnaires.
                x-addedInVersion: '1'
                x-sortIndex: 3
                x-methodName: getPciQuestionnaireDetails
            /legalEntities/{id}/pciQuestionnaires/generatePciTemplates:
              post:
                tags:
                  - PCI questionnaires
                summary: Generate PCI questionnaire
                description: >-
                  Generates the required PCI questionnaires based on the user's
                  [salesChannel](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__reqParam_salesChannels).
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: generatePciQuestionnaire
            /legalEntities/{id}/pciQuestionnaires/signPciTemplates:
              post:
                tags:
                  - PCI questionnaires
                summary: Sign PCI questionnaire
                description: Signs the required PCI questionnaire.
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: signPciQuestionnaire
            /legalEntities/{id}/pciQuestionnaires/{pciid}:
              get:
                tags:
                  - PCI questionnaires
                summary: Get PCI questionnaire
                description: Returns the signed PCI questionnaire.
                x-addedInVersion: '1'
                x-sortIndex: 4
                x-methodName: getPciQuestionnaire
            /legalEntities/{id}/termsOfService:
              post:
                tags:
                  - Terms of Service
                summary: Get Terms of Service document
                description: Returns the Terms of Service document for a legal entity.
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: getTermsOfServiceDocument
            /legalEntities/{id}/termsOfService/{termsofservicedocumentid}:
              patch:
                tags:
                  - Terms of Service
                summary: Accept Terms of Service
                description: Accepts Terms of Service.
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: acceptTermsOfService
            /legalEntities/{id}/termsOfServiceAcceptanceInfos:
              get:
                tags:
                  - Terms of Service
                summary: Get Terms of Service information for a legal entity
                description: Returns Terms of Service information for a legal entity.
                x-addedInVersion: '1'
                x-sortIndex: 3
                x-methodName: getTermsOfServiceInformationForLegalEntity
            /legalEntities/{id}/termsOfServiceStatus:
              get:
                tags:
                  - Terms of Service
                summary: Get Terms of Service status
                description: >-
                  Returns the required types of Terms of Service that need to be
                  accepted by a legal entity.
                x-addedInVersion: '1'
                x-sortIndex: 4
                x-methodName: getTermsOfServiceStatus
            /themes:
              get:
                tags:
                  - Hosted Onboarding
                summary: Get a list of hosted onboarding page themes
                description: >+
                  Returns a list of hosted onboarding page themes.


                  >If you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: listHostedOnboardingPageThemes
            /themes/{id}:
              get:
                tags:
                  - Hosted Onboarding
                summary: Get an onboarding link theme
                description: >+
                  Returns the details of the theme identified in the path.>If
                  you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

                x-addedInVersion: '1'
                x-sortIndex: 4
                x-methodName: getOnboardingLinkTheme
            /transferInstruments:
              post:
                tags:
                  - Transfer instruments
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
                x-addedInVersion: '1'
                x-sortIndex: 8
                x-methodName: createTransferInstrument
            /transferInstruments/{id}:
              delete:
                tags:
                  - Transfer instruments
                summary: Delete a transfer instrument
                description: Deletes a transfer instrument.
                x-addedInVersion: '1'
                x-sortIndex: 11
                x-methodName: deleteTransferInstrument
              get:
                tags:
                  - Transfer instruments
                summary: Get a transfer instrument
                description: Returns the details of a transfer instrument.
                x-addedInVersion: '1'
                x-sortIndex: 9
                x-methodName: getTransferInstrument
              patch:
                tags:
                  - Transfer instruments
                summary: Update a transfer instrument
                description: Updates a transfer instrument.
                x-addedInVersion: '1'
                x-sortIndex: 10
                x-methodName: updateTransferInstrument
    overlays:
      - type: APIs.io Search
        url: overlays/legal-entity-openapi-search.yml
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
                  - Business lines
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

                x-addedInVersion: '1'
                x-sortIndex: 12
                x-methodName: createBusinessLine
            /businessLines/{id}:
              delete:
                tags:
                  - Business lines
                summary: Delete a business line
                description: |-
                  Deletes a business line.

                   >If you delete a business line linked to a [payment method](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api), it can affect your merchant account's ability to use the [payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings). The business line is removed from all linked merchant accounts.
                x-addedInVersion: '1'
                x-sortIndex: 14
                x-methodName: deleteBusinessLine
              get:
                tags:
                  - Business lines
                summary: Get a business line
                description: Returns the detail of a business line.
                x-addedInVersion: '1'
                x-sortIndex: 13
                x-methodName: getBusinessLine
              patch:
                tags:
                  - Business lines
                summary: Update a business line
                description: Updates a business line.
                x-addedInVersion: '2'
                x-sortIndex: 15
                x-methodName: updateBusinessLine
            /documents:
              post:
                tags:
                  - Documents
                summary: Upload a document for verification checks
                description: |-
                  Uploads a document for verification checks.

                   Adyen uses the information from the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities) to run automated verification checks. If these checks fail, you will be notified to provide additional documents.

                   You should only upload documents when Adyen requests additional information for the legal entity.

                   >You can upload a maximum of 15 pages for photo IDs.
                x-addedInVersion: '1'
                x-sortIndex: 4
                x-methodName: uploadDocumentForVerificationChecks
            /documents/{id}:
              delete:
                tags:
                  - Documents
                summary: Delete a document
                description: Deletes a document.
                x-addedInVersion: '1'
                x-sortIndex: 7
                x-methodName: deleteDocument
              get:
                tags:
                  - Documents
                summary: Get a document
                description: Returns a document.
                x-addedInVersion: '1'
                x-sortIndex: 5
                x-methodName: getDocument
              patch:
                tags:
                  - Documents
                summary: Update a document
                description: |-
                  Updates a document.

                   >You can upload a maximum of 15 pages for photo IDs.
                x-addedInVersion: '1'
                x-sortIndex: 6
                x-methodName: updateDocument
            /legalEntities:
              post:
                tags:
                  - Legal entities
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

                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: createLegalEntity
            /legalEntities/{id}:
              get:
                tags:
                  - Legal entities
                summary: Get a legal entity
                description: Returns a legal entity.
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: getLegalEntity
              patch:
                tags:
                  - Legal entities
                summary: Update a legal entity
                description: |-
                  Updates a legal entity.

                   >To change the legal entity type, include only the new `type` in your request. To update the `entityAssociations` array, you need to replace the entire array. For example, if the array has 3 entries and you want to remove 1 entry, you need to PATCH the resource with the remaining 2 entries.
                x-addedInVersion: '1'
                x-sortIndex: 3
                x-methodName: updateLegalEntity
            /legalEntities/{id}/businessLines:
              get:
                tags:
                  - Legal entities
                summary: Get all business lines under a legal entity
                description: Returns the business lines owned by a legal entity.
                x-addedInVersion: '1'
                x-sortIndex: 4
                x-methodName: getAllBusinessLinesUnderLegalEntity
            /legalEntities/{id}/checkVerificationErrors:
              post:
                tags:
                  - Legal entities
                summary: Check a legal entity's verification errors
                description: >-
                  Returns the verification errors for a legal entity and its
                  supporting entities.
                x-addedInVersion: '3'
                x-sortIndex: 2
                x-methodName: checkLegalEntitysVerificationErrors
            /legalEntities/{id}/confirmDataReview:
              post:
                tags:
                  - Legal entities
                summary: Confirm data review
                description: >-
                  Confirms that your user has reviewed the data for the legal
                  entity specified in the path. Call this endpoint to inform
                  Adyen that your user reviewed and verified that the data is
                  up-to-date. The endpoint returns the timestamp of when Adyen
                  received the request.
                x-addedInVersion: '3'
                x-sortIndex: 22
                x-methodName: confirmDataReview
            /legalEntities/{id}/onboardingLinks:
              post:
                tags:
                  - Hosted Onboarding
                summary: Get a link to an Adyen-hosted onboarding page
                description: >+
                  Returns a link to an Adyen-hosted onboarding page where you
                  need to redirect your user.


                  >If you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: getLinkToAdyenhostedOnboardingPage
            /legalEntities/{id}/pciQuestionnaires:
              get:
                tags:
                  - PCI questionnaires
                summary: Get PCI questionnaire details
                description: Get a list of signed PCI questionnaires.
                x-addedInVersion: '1'
                x-sortIndex: 3
                x-methodName: getPciQuestionnaireDetails
            /legalEntities/{id}/pciQuestionnaires/generatePciTemplates:
              post:
                tags:
                  - PCI questionnaires
                summary: Generate PCI questionnaire
                description: >-
                  Generates the required PCI questionnaires based on the user's
                  [salesChannel](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__reqParam_salesChannels).
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: generatePciQuestionnaire
            /legalEntities/{id}/pciQuestionnaires/signPciTemplates:
              post:
                tags:
                  - PCI questionnaires
                summary: Sign PCI questionnaire
                description: Signs the required PCI questionnaire.
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: signPciQuestionnaire
            /legalEntities/{id}/pciQuestionnaires/{pciid}:
              get:
                tags:
                  - PCI questionnaires
                summary: Get PCI questionnaire
                description: Returns the signed PCI questionnaire.
                x-addedInVersion: '1'
                x-sortIndex: 4
                x-methodName: getPciQuestionnaire
            /legalEntities/{id}/termsOfService:
              post:
                tags:
                  - Terms of Service
                summary: Get Terms of Service document
                description: Returns the Terms of Service document for a legal entity.
                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: getTermsOfServiceDocument
            /legalEntities/{id}/termsOfService/{termsofservicedocumentid}:
              patch:
                tags:
                  - Terms of Service
                summary: Accept Terms of Service
                description: Accepts Terms of Service.
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: acceptTermsOfService
            /legalEntities/{id}/termsOfServiceAcceptanceInfos:
              get:
                tags:
                  - Terms of Service
                summary: Get Terms of Service information for a legal entity
                description: Returns Terms of Service information for a legal entity.
                x-addedInVersion: '1'
                x-sortIndex: 3
                x-methodName: getTermsOfServiceInformationForLegalEntity
            /legalEntities/{id}/termsOfServiceStatus:
              get:
                tags:
                  - Terms of Service
                summary: Get Terms of Service status
                description: >-
                  Returns the required types of Terms of Service that need to be
                  accepted by a legal entity.
                x-addedInVersion: '1'
                x-sortIndex: 4
                x-methodName: getTermsOfServiceStatus
            /themes:
              get:
                tags:
                  - Hosted Onboarding
                summary: Get a list of hosted onboarding page themes
                description: >+
                  Returns a list of hosted onboarding page themes.


                  >If you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: listHostedOnboardingPageThemes
            /themes/{id}:
              get:
                tags:
                  - Hosted Onboarding
                summary: Get an onboarding link theme
                description: >+
                  Returns the details of the theme identified in the path.>If
                  you are using hosted onboarding and just beginning your
                  integration, use v3 for your API requests. Otherwise, use v2.

                x-addedInVersion: '1'
                x-sortIndex: 4
                x-methodName: getOnboardingLinkTheme
            /transferInstruments:
              post:
                tags:
                  - Transfer instruments
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
                x-addedInVersion: '1'
                x-sortIndex: 8
                x-methodName: createTransferInstrument
            /transferInstruments/{id}:
              delete:
                tags:
                  - Transfer instruments
                summary: Delete a transfer instrument
                description: Deletes a transfer instrument.
                x-addedInVersion: '1'
                x-sortIndex: 11
                x-methodName: deleteTransferInstrument
              get:
                tags:
                  - Transfer instruments
                summary: Get a transfer instrument
                description: Returns the details of a transfer instrument.
                x-addedInVersion: '1'
                x-sortIndex: 9
                x-methodName: getTransferInstrument
              patch:
                tags:
                  - Transfer instruments
                summary: Update a transfer instrument
                description: Updates a transfer instrument.
                x-addedInVersion: '1'
                x-sortIndex: 10
                x-methodName: updateTransferInstrument
    overlays:
      - type: APIs.io Search
        url: overlays/legal-entity-openapi-search.yml
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
                  - Account - company level
                summary: Get a list of company accounts
                description: >-
                  Returns the list of company accounts that your API credential
                  has access to. The list is grouped into pages as defined by
                  the query parameters.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):


                  * Management API—Account read
                x-sortIndex: 0
                x-methodName: listCompanyAccounts
            /companies/{companyId}:
              get:
                tags:
                  - Account - company level
                summary: Get a company account
                description: >-
                  Returns the company account specified in the path. Your API
                  credential must have access to the company account. 


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Account read
                x-sortIndex: 0
                x-methodName: getCompanyAccount
            /companies/{companyId}/androidApps:
              get:
                tags:
                  - Android files - company level
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
                x-sortIndex: 1
                x-methodName: listAndroidApps
              post:
                tags:
                  - Android files - company level
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
                x-addedInVersion: '3'
                x-sortIndex: 4
                x-methodName: uploadAndroidApp
            /companies/{companyId}/androidApps/{id}:
              get:
                tags:
                  - Android files - company level
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
                x-sortIndex: 3
                x-methodName: getAndroidApp
            /companies/{companyId}/androidCertificates:
              get:
                tags:
                  - Android files - company level
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
                x-sortIndex: 2
                x-methodName: listAndroidCertificates
            /companies/{companyId}/apiCredentials:
              get:
                tags:
                  - API credentials - company level
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
                x-sortIndex: 0
                x-methodName: listApiCredentials
              post:
                tags:
                  - API credentials - company level
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
                x-sortIndex: 0
                x-methodName: createApiCredential
            /companies/{companyId}/apiCredentials/{apiCredentialId}:
              get:
                tags:
                  - API credentials - company level
                summary: Get an API credential
                description: >-
                  Returns the [API
                  credential](https://docs.adyen.com/development-resources/api-credentials)
                  identified in the path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
                x-sortIndex: 0
                x-methodName: getApiCredential
              patch:
                tags:
                  - API credentials - company level
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
                x-sortIndex: 0
                x-methodName: updateApiCredential
            /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins:
              get:
                tags:
                  - Allowed origins - company level
                summary: Get a list of allowed origins
                description: >-
                  Returns the list of [allowed
                  origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  for the API credential identified in the path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
                x-sortIndex: 0
                x-methodName: listAllowedOrigins
              post:
                tags:
                  - Allowed origins - company level
                summary: Create an allowed origin
                description: >-
                  Adds a new [allowed
                  origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  to the API credential's list of allowed origins.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
                x-sortIndex: 0
                x-methodName: createAllowedOrigin
            /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}:
              delete:
                tags:
                  - Allowed origins - company level
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
                x-sortIndex: 0
                x-methodName: deleteAllowedOrigin
              get:
                tags:
                  - Allowed origins - company level
                summary: Get an allowed origin
                description: >-
                  Returns the [allowed
                  origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  identified in the path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
                x-sortIndex: 0
                x-methodName: getAllowedOrigin
            /companies/{companyId}/apiCredentials/{apiCredentialId}/generateApiKey:
              post:
                tags:
                  - API key - company level
                summary: Generate new API key
                description: >-
                  Returns a new API key for the API credential. You can use the
                  new API key a few minutes after generating it. The old API key
                  stops working 24 hours after generating a new one.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
                x-sortIndex: 0
                x-methodName: generateNewApiKey
            /companies/{companyId}/apiCredentials/{apiCredentialId}/generateClientKey:
              post:
                tags:
                  - Client key - company level
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
                x-sortIndex: 0
                x-methodName: generateNewClientKey
            /companies/{companyId}/billingEntities:
              get:
                tags:
                  - Terminal orders - company level
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
                x-sortIndex: 3
                x-methodName: listBillingEntities
            /companies/{companyId}/merchants:
              get:
                tags:
                  - Account - company level
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
                x-sortIndex: 0
                x-methodName: listMerchantAccounts
            /companies/{companyId}/shippingLocations:
              get:
                tags:
                  - Terminal orders - company level
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
                x-sortIndex: 4
                x-methodName: listShippingLocations
              post:
                tags:
                  - Terminal orders - company level
                summary: Create a shipping location
                description: >-
                  Creates a shipping location for the company identified in the
                  path. A shipping location defines an address where orders can
                  be delivered.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read and write
                x-sortIndex: 5
                x-methodName: createShippingLocation
            /companies/{companyId}/terminalActions:
              get:
                tags:
                  - Terminal actions - company level
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
                x-sortIndex: 1
                x-methodName: listTerminalActions
            /companies/{companyId}/terminalActions/{actionId}:
              get:
                tags:
                  - Terminal actions - company level
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
                x-sortIndex: 2
                x-methodName: getTerminalAction
            /companies/{companyId}/terminalLogos:
              get:
                tags:
                  - Terminal settings - company level
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
                x-sortIndex: 2
                x-methodName: getTerminalLogo
              patch:
                tags:
                  - Terminal settings - company level
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
                x-sortIndex: 4
                x-methodName: updateTerminalLogo
            /companies/{companyId}/terminalModels:
              get:
                tags:
                  - Terminal orders - company level
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
                x-sortIndex: 1
                x-methodName: listTerminalModels
            /companies/{companyId}/terminalOrders:
              get:
                tags:
                  - Terminal orders - company level
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
                x-sortIndex: 7
                x-methodName: listOrders
              post:
                tags:
                  - Terminal orders - company level
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
                x-sortIndex: 6
                x-methodName: createOrder
            /companies/{companyId}/terminalOrders/{orderId}:
              get:
                tags:
                  - Terminal orders - company level
                summary: Get an order
                description: >-
                  Returns the details of the terminal products order identified
                  in the path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
                x-sortIndex: 8
                x-methodName: getOrder
              patch:
                tags:
                  - Terminal orders - company level
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
                x-sortIndex: 9
                x-methodName: updateOrder
            /companies/{companyId}/terminalOrders/{orderId}/cancel:
              post:
                tags:
                  - Terminal orders - company level
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
                x-sortIndex: 10
                x-methodName: cancelOrder
            /companies/{companyId}/terminalProducts:
              get:
                tags:
                  - Terminal orders - company level
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
                x-sortIndex: 2
                x-methodName: listTerminalProducts
            /companies/{companyId}/terminalSettings:
              get:
                tags:
                  - Terminal settings - company level
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
                x-sortIndex: 1
                x-methodName: getTerminalSettings
              patch:
                tags:
                  - Terminal settings - company level
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
                x-sortIndex: 3
                x-methodName: updateTerminalSettings
            /companies/{companyId}/users:
              get:
                tags:
                  - Users - company level
                summary: Get a list of users
                description: >
                  Returns the list of users for the `companyId` identified in
                  the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
                x-sortIndex: 0
                x-methodName: listUsers
              post:
                tags:
                  - Users - company level
                summary: Create a new user
                description: >
                  Creates the user for the `companyId` identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
                x-sortIndex: 0
                x-methodName: createNewUser
            /companies/{companyId}/users/{userId}:
              get:
                tags:
                  - Users - company level
                summary: Get user details
                description: >
                  Returns user details for the `userId` and the `companyId`
                  identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
                x-sortIndex: 0
                x-methodName: getUserDetails
              patch:
                tags:
                  - Users - company level
                summary: Update user details
                description: >
                  Updates user details for the `userId` and the `companyId`
                  identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
                x-sortIndex: 0
                x-methodName: updateUserDetails
            /companies/{companyId}/webhooks:
              get:
                tags:
                  - Webhooks - company level
                summary: List all webhooks
                description: >-
                  Lists all webhook configurations for the company account.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read

                  * Management API—Webhooks read and write
                x-sortIndex: 2
                x-methodName: listAllWebhooks
              post:
                tags:
                  - Webhooks - company level
                summary: Set up a webhook
                description: >-
                  Subscribe to receive webhook notifications about events
                  related to your company account. You can add basic
                  authentication to make sure the data is secure.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read and write
                x-sortIndex: 1
                x-methodName: setUpWebhook
            /companies/{companyId}/webhooks/{webhookId}:
              delete:
                tags:
                  - Webhooks - company level
                summary: Remove a webhook
                description: >-
                  Remove the configuration for the webhook identified in the
                  path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read and write
                x-sortIndex: 5
                x-methodName: removeWebhook
              get:
                tags:
                  - Webhooks - company level
                summary: Get a webhook
                description: >-
                  Returns the configuration for the webhook identified in the
                  path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read

                  * Management API—Webhooks read and write
                x-sortIndex: 3
                x-methodName: getWebhook
              patch:
                tags:
                  - Webhooks - company level
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
                x-sortIndex: 4
                x-methodName: updateWebhook
            /companies/{companyId}/webhooks/{webhookId}/generateHmac:
              post:
                tags:
                  - Webhooks - company level
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
                x-sortIndex: 6
                x-methodName: generateHmacKey
            /companies/{companyId}/webhooks/{webhookId}/test:
              post:
                tags:
                  - Webhooks - company level
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
                x-sortIndex: 7
                x-methodName: testWebhook
            /me:
              get:
                tags:
                  - My API credential
                summary: Get API credential details
                description: >-
                  Returns your [API
                  credential](https://docs.adyen.com/development-resources/api-credentials)
                  details based on the API Key you used in the request.


                  You can make this request with any of the Management API
                  roles.
                x-sortIndex: 0
                x-methodName: getApiCredentialDetails
            /me/allowedOrigins:
              get:
                tags:
                  - My API credential
                summary: Get allowed origins
                description: >-
                  Returns the list of [allowed
                  origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  of your [API
                  credential](https://docs.adyen.com/development-resources/api-credentials)
                  based on the API key you used in the request.


                  You can make this request with any of the Management API
                  roles.
                x-sortIndex: 0
                x-methodName: getAllowedOrigins
              post:
                tags:
                  - My API credential
                summary: Add allowed origin
                description: >-
                  Adds an allowed origin to the list of [allowed
                  origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  of your API credential.

                  The API key from the request is used to identify the [API
                  credential](https://docs.adyen.com/development-resources/api-credentials).


                  You can make this request with any of the Management API
                  roles.
                x-sortIndex: 0
                x-methodName: addAllowedOrigin
            /me/allowedOrigins/{originId}:
              delete:
                tags:
                  - My API credential
                summary: Remove allowed origin
                description: >-
                  Removes the [allowed
                  origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  specified in the path.

                  The API key from the request is used to identify the [API
                  credential](https://docs.adyen.com/development-resources/api-credentials).


                  You can make this request with any of the Management API
                  roles.
                x-sortIndex: 0
                x-methodName: removeAllowedOrigin
              get:
                tags:
                  - My API credential
                summary: Get allowed origin details
                description: >-
                  Returns the details of the [allowed
                  origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  specified in the path.

                  The API key from the request is used to identify the [API
                  credential](https://docs.adyen.com/development-resources/api-credentials).


                  You can make this request with any of the Management API
                  roles.
                x-sortIndex: 0
                x-methodName: getAllowedOriginDetails
            /me/generateClientKey:
              post:
                tags:
                  - My API credential
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
                x-sortIndex: 0
                x-methodName: generateClientKey
            /merchants:
              get:
                tags:
                  - Account - merchant level
                summary: Get a list of merchant accounts
                description: >-
                  Returns the list of merchant accounts that your API credential
                  has access to. The list is grouped into pages as defined by
                  the query parameters. 


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Account read
                x-sortIndex: 4
                x-methodName: listMerchantAccounts
              post:
                tags:
                  - Account - merchant level
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
                x-sortIndex: 1
                x-methodName: createMerchantAccount
            /merchants/{merchantId}:
              get:
                tags:
                  - Account - merchant level
                summary: Get a merchant account
                description: >-
                  Returns the merchant account specified in the path. Your API
                  credential must have access to the merchant account.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Account read
                x-sortIndex: 3
                x-methodName: getMerchantAccount
            /merchants/{merchantId}/activate:
              post:
                tags:
                  - Account - merchant level
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
                x-sortIndex: 2
                x-methodName: requestToActivateMerchantAccount
            /merchants/{merchantId}/apiCredentials:
              get:
                tags:
                  - API credentials - merchant level
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
                x-sortIndex: 0
                x-methodName: listApiCredentials
              post:
                tags:
                  - API credentials - merchant level
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
                x-sortIndex: 0
                x-methodName: createApiCredential
            /merchants/{merchantId}/apiCredentials/{apiCredentialId}:
              get:
                tags:
                  - API credentials - merchant level
                summary: Get an API credential
                description: >-
                  Returns the [API
                  credential](https://docs.adyen.com/development-resources/api-credentials)
                  identified in the path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
                x-sortIndex: 0
                x-methodName: getApiCredential
              patch:
                tags:
                  - API credentials - merchant level
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
                x-sortIndex: 0
                x-methodName: updateApiCredential
            /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins:
              get:
                tags:
                  - Allowed origins - merchant level
                summary: Get a list of allowed origins
                description: >-
                  Returns the list of [allowed
                  origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  for the API credential identified in the path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
                x-sortIndex: 0
                x-methodName: listAllowedOrigins
              post:
                tags:
                  - Allowed origins - merchant level
                summary: Create an allowed origin
                description: >-
                  Adds a new [allowed
                  origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  to the API credential's list of allowed origins.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
                x-sortIndex: 0
                x-methodName: createAllowedOrigin
            /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}:
              delete:
                tags:
                  - Allowed origins - merchant level
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
                x-sortIndex: 0
                x-methodName: deleteAllowedOrigin
              get:
                tags:
                  - Allowed origins - merchant level
                summary: Get an allowed origin
                description: >-
                  Returns the [allowed
                  origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins)
                  identified in the path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
                x-sortIndex: 0
                x-methodName: getAllowedOrigin
            /merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey:
              post:
                tags:
                  - API key - merchant level
                summary: Generate new API key
                description: >-
                  Returns a new API key for the API credential. You can use the
                  new API key a few minutes after generating it. The old API key
                  stops working 24 hours after generating a new one.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—API credentials read and write
                x-sortIndex: 0
                x-methodName: generateNewApiKey
            /merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateClientKey:
              post:
                tags:
                  - Client key - merchant level
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
                x-sortIndex: 0
                x-methodName: generateNewClientKey
            /merchants/{merchantId}/billingEntities:
              get:
                tags:
                  - Terminal orders - merchant level
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
                x-sortIndex: 3
                x-methodName: listBillingEntities
            /merchants/{merchantId}/paymentMethodSettings:
              get:
                tags:
                  - Payment methods - merchant level
                summary: Get all payment methods
                description: >
                  Returns details for all payment methods of the merchant
                  account identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Payment methods read
                x-sortIndex: 2
                x-methodName: getAllPaymentMethods
              post:
                tags:
                  - Payment methods - merchant level
                summary: Request a payment method
                description: >
                  Sends a request to add a new payment method to the merchant
                  account identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Payment methods read and write
                x-sortIndex: 1
                x-methodName: requestPaymentMethod
            /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}:
              get:
                tags:
                  - Payment methods - merchant level
                summary: Get payment method details
                description: >
                  Returns details for the merchant account and the payment
                  method identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Payment methods read
                x-sortIndex: 3
                x-methodName: getPaymentMethodDetails
              patch:
                tags:
                  - Payment methods - merchant level
                summary: Update a payment method
                description: >
                  Updates payment method details for the merchant account and
                  the payment method identified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Payment methods read and write
                x-sortIndex: 4
                x-methodName: updatePaymentMethod
            /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/addApplePayDomains:
              post:
                tags:
                  - Payment methods - merchant level
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
                x-sortIndex: 5
                x-methodName: addApplePayDomain
            /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}/getApplePayDomains:
              get:
                tags:
                  - Payment methods - merchant level
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
                x-sortIndex: 6
                x-methodName: getApplePayDomains
            /merchants/{merchantId}/payoutSettings:
              get:
                tags:
                  - Payout settings - merchant level
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
                x-sortIndex: 3
                x-methodName: listPayoutSettings
              post:
                tags:
                  - Payout settings - merchant level
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
                x-sortIndex: 1
                x-methodName: addPayoutSetting
            /merchants/{merchantId}/payoutSettings/{payoutSettingsId}:
              delete:
                tags:
                  - Payout settings - merchant level
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
                x-sortIndex: 5
                x-methodName: deletePayoutSetting
              get:
                tags:
                  - Payout settings - merchant level
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
                x-sortIndex: 4
                x-methodName: getPayoutSetting
              patch:
                tags:
                  - Payout settings - merchant level
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
                x-sortIndex: 2
                x-methodName: updatePayoutSetting
            /merchants/{merchantId}/shippingLocations:
              get:
                tags:
                  - Terminal orders - merchant level
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
                x-sortIndex: 4
                x-methodName: listShippingLocations
              post:
                tags:
                  - Terminal orders - merchant level
                summary: Create a shipping location
                description: >-
                  Creates a shipping location for the merchant account
                  identified in the path. A shipping location defines an address
                  where orders can be shipped to. 


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read and write
                x-sortIndex: 5
                x-methodName: createShippingLocation
            /merchants/{merchantId}/splitConfigurations:
              get:
                tags:
                  - Split configuration - merchant level
                summary: Get a list of split configurations
                description: >-
                  Returns the list of split configurations for the merchant
                  account.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
                x-sortIndex: 3
                x-methodName: listSplitConfigurations
              post:
                tags:
                  - Split configuration - merchant level
                summary: Create a split configuration
                description: >-
                  Creates a split configuration for the merchant account
                  specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
                x-sortIndex: 1
                x-methodName: createSplitConfiguration
            /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}:
              delete:
                tags:
                  - Split configuration - merchant level
                summary: Delete a split configuration
                description: >-
                  Deletes the split configuration specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
                x-sortIndex: 8
                x-methodName: deleteSplitConfiguration
              get:
                tags:
                  - Split configuration - merchant level
                summary: Get a split configuration
                description: >-
                  Returns the split configuration specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
                x-sortIndex: 4
                x-methodName: getSplitConfiguration
              patch:
                tags:
                  - Split configuration - merchant level
                summary: Update split configuration description
                description: >-
                  Changes the description of the split configuration specified
                  in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
                x-sortIndex: 5
                x-methodName: updateSplitConfigurationDescription
              post:
                tags:
                  - Split configuration - merchant level
                summary: Create a rule
                description: >-
                  Creates a rule in the split configuration specified in the
                  path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
                x-sortIndex: 2
                x-methodName: createRule
            /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}:
              delete:
                tags:
                  - Split configuration - merchant level
                summary: Delete a split configuration rule
                description: >-
                  Deletes the split configuration rule specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
                x-sortIndex: 9
                x-methodName: deleteSplitConfigurationRule
              patch:
                tags:
                  - Split configuration - merchant level
                summary: Update split conditions
                description: >-
                  Changes the conditions of the split configuration rule
                  specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
                x-sortIndex: 6
                x-methodName: updateSplitConditions
            /merchants/{merchantId}/splitConfigurations/{splitConfigurationId}/rules/{ruleId}/splitLogic/{splitLogicId}:
              patch:
                tags:
                  - Split configuration - merchant level
                summary: Update the split logic
                description: >-
                  Changes the split logic specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API - SplitConfiguration read and write
                x-sortIndex: 7
                x-methodName: updateSplitLogic
            /merchants/{merchantId}/stores:
              get:
                tags:
                  - Account - store level
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
                x-sortIndex: 1
                x-methodName: listStoresByMerchantId
              post:
                tags:
                  - Account - store level
                summary: Create a store
                description: >-
                  Creates a store for the merchant account identified in the
                  path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read and write
                x-sortIndex: 0
                x-methodName: createStoreByMerchantId
            /merchants/{merchantId}/stores/{reference}/terminalLogos:
              get:
                tags:
                  - Terminal settings - store level
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
                x-sortIndex: 2
                x-methodName: getTerminalLogo
              patch:
                tags:
                  - Terminal settings - store level
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
                x-sortIndex: 4
                x-methodName: updateTerminalLogo
            /merchants/{merchantId}/stores/{reference}/terminalSettings:
              get:
                tags:
                  - Terminal settings - store level
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
                x-sortIndex: 1
                x-methodName: getTerminalSettings
              patch:
                tags:
                  - Terminal settings - store level
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
                x-sortIndex: 3
                x-methodName: updateTerminalSettings
            /merchants/{merchantId}/stores/{storeId}:
              get:
                tags:
                  - Account - store level
                summary: Get a store
                description: >-
                  Returns the details of the store identified in the path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read

                  * Management API—Stores read and write
                x-sortIndex: 2
                x-methodName: getStore
              patch:
                tags:
                  - Account - store level
                summary: Update a store
                description: >-
                  Updates the store identified in the path. You can only update
                  some store parameters.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read and write
                x-sortIndex: 3
                x-methodName: updateStore
            /merchants/{merchantId}/terminalLogos:
              get:
                tags:
                  - Terminal settings - merchant level
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
                x-sortIndex: 2
                x-methodName: getTerminalLogo
              patch:
                tags:
                  - Terminal settings - merchant level
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
                x-sortIndex: 4
                x-methodName: updateTerminalLogo
            /merchants/{merchantId}/terminalModels:
              get:
                tags:
                  - Terminal orders - merchant level
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
                x-sortIndex: 1
                x-methodName: listTerminalModels
            /merchants/{merchantId}/terminalOrders:
              get:
                tags:
                  - Terminal orders - merchant level
                summary: Get a list of orders
                description: >-
                  Returns a list of terminal products orders for the merchant
                  account identified in the path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
                x-sortIndex: 7
                x-methodName: listOrders
              post:
                tags:
                  - Terminal orders - merchant level
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
                x-sortIndex: 6
                x-methodName: createOrder
            /merchants/{merchantId}/terminalOrders/{orderId}:
              get:
                tags:
                  - Terminal orders - merchant level
                summary: Get an order
                description: >-
                  Returns the details of the terminal products order identified
                  in the path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Terminal ordering read

                  * Management API—Terminal ordering read and write
                x-sortIndex: 8
                x-methodName: getOrder
              patch:
                tags:
                  - Terminal orders - merchant level
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
                x-sortIndex: 9
                x-methodName: updateOrder
            /merchants/{merchantId}/terminalOrders/{orderId}/cancel:
              post:
                tags:
                  - Terminal orders - merchant level
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
                x-sortIndex: 10
                x-methodName: cancelOrder
            /merchants/{merchantId}/terminalProducts:
              get:
                tags:
                  - Terminal orders - merchant level
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
                x-sortIndex: 2
                x-methodName: listTerminalProducts
            /merchants/{merchantId}/terminalSettings:
              get:
                tags:
                  - Terminal settings - merchant level
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
                x-sortIndex: 1
                x-methodName: getTerminalSettings
              patch:
                tags:
                  - Terminal settings - merchant level
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
                x-sortIndex: 3
                x-methodName: updateTerminalSettings
            /merchants/{merchantId}/users:
              get:
                tags:
                  - Users - merchant level
                summary: Get a list of users
                description: >
                  Returns a list of users associated with the `merchantId`
                  specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
                x-sortIndex: 0
                x-methodName: listUsers
              post:
                tags:
                  - Users - merchant level
                summary: Create a new user
                description: >
                  Creates a user for the `merchantId` specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
                x-sortIndex: 0
                x-methodName: createNewUser
            /merchants/{merchantId}/users/{userId}:
              get:
                tags:
                  - Users - merchant level
                summary: Get user details
                description: >
                  Returns user details for the `userId` and the `merchantId`
                  specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
                x-sortIndex: 0
                x-methodName: getUserDetails
              patch:
                tags:
                  - Users - merchant level
                summary: Update a user
                description: >
                  Updates user details for the `userId` and the `merchantId`
                  specified in the path.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Users read and write
                x-sortIndex: 0
                x-methodName: updateUser
            /merchants/{merchantId}/webhooks:
              get:
                tags:
                  - Webhooks - merchant level
                summary: List all webhooks
                description: >-
                  Lists all webhook configurations for the merchant account.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read

                  * Management API—Webhooks read and write
                x-sortIndex: 2
                x-methodName: listAllWebhooks
              post:
                tags:
                  - Webhooks - merchant level
                summary: Set up a webhook
                description: >-
                  Subscribe to receive webhook notifications about events
                  related to your merchant account. You can add basic
                  authentication to make sure the data is secure.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read and write
                x-sortIndex: 1
                x-methodName: setUpWebhook
            /merchants/{merchantId}/webhooks/{webhookId}:
              delete:
                tags:
                  - Webhooks - merchant level
                summary: Remove a webhook
                description: >-
                  Remove the configuration for the webhook identified in the
                  path.


                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read and write
                x-sortIndex: 5
                x-methodName: removeWebhook
              get:
                tags:
                  - Webhooks - merchant level
                summary: Get a webhook
                description: >-
                  Returns the configuration for the webhook identified in the
                  path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Webhooks read

                  * Management API—Webhooks read and write
                x-sortIndex: 3
                x-methodName: getWebhook
              patch:
                tags:
                  - Webhooks - merchant level
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
                x-sortIndex: 4
                x-methodName: updateWebhook
            /merchants/{merchantId}/webhooks/{webhookId}/generateHmac:
              post:
                tags:
                  - Webhooks - merchant level
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
                x-sortIndex: 6
                x-methodName: generateHmacKey
            /merchants/{merchantId}/webhooks/{webhookId}/test:
              post:
                tags:
                  - Webhooks - merchant level
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
                x-sortIndex: 7
                x-methodName: testWebhook
            /stores:
              get:
                tags:
                  - Account - store level
                summary: Get a list of stores
                description: >-
                  Returns a list of stores. The list is grouped into pages as
                  defined by the query parameters.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read

                  * Management API—Stores read and write
                x-sortIndex: 4
                x-methodName: listStores
              post:
                tags:
                  - Account - store level
                summary: Create a store
                description: >-
                  Creates a store for the merchant account specified in the
                  request.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read and write
                x-sortIndex: 5
                x-methodName: createStore
            /stores/{storeId}:
              get:
                tags:
                  - Account - store level
                summary: Get a store
                description: >-
                  Returns the details of the store identified in the path.


                  To make this request, your API credential must have one of the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read

                  * Management API—Stores read and write
                x-sortIndex: 6
                x-methodName: getStoreById
              patch:
                tags:
                  - Account - store level
                summary: Update a store
                description: >-
                  Updates the store identified in the path.

                  You can only update some store parameters.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Stores read and write
                x-sortIndex: 7
                x-methodName: updateStoreById
            /stores/{storeId}/terminalLogos:
              get:
                tags:
                  - Terminal settings - store level
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
                x-sortIndex: 2
                x-methodName: getTerminalLogoByStoreId
              patch:
                tags:
                  - Terminal settings - store level
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
                x-sortIndex: 4
                x-methodName: updateTerminalLogoByStoreId
            /stores/{storeId}/terminalSettings:
              get:
                tags:
                  - Terminal settings - store level
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
                x-sortIndex: 1
                x-methodName: getTerminalSettingsByStoreId
              patch:
                tags:
                  - Terminal settings - store level
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
                x-sortIndex: 3
                x-methodName: updateTerminalSettingsByStoreId
            /terminals:
              get:
                tags:
                  - Terminals - terminal level
                summary: Get a list of terminals
                description: >-
                  Returns the payment terminals that the API credential has
                  access to and that match the query parameters. 

                  To make this request, your API credential must have the
                  following
                  [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API — Terminal actions read
                x-sortIndex: 1
                x-methodName: listTerminals
            /terminals/scheduleActions:
              post:
                tags:
                  - Terminal actions - terminal level
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
                x-sortIndex: 1
                x-methodName: createTerminalAction
            /terminals/{terminalId}/reassign:
              post:
                tags:
                  - Terminals - terminal level
                summary: Reassign a terminal
                description: >-
                  Reassigns a payment terminal to a company account, merchant
                  account, merchant account inventory, or a store.


                  To make this request, your API credential must have the
                  following
                  [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):

                  * Management API—Assign Terminal
                x-addedInVersion: '3'
                x-sortIndex: 2
                x-methodName: reassignTerminal
            /terminals/{terminalId}/terminalLogos:
              get:
                tags:
                  - Terminal settings - terminal level
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
                x-sortIndex: 4
                x-methodName: getTerminalLogo
              patch:
                tags:
                  - Terminal settings - terminal level
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
                x-sortIndex: 6
                x-methodName: updateLogo
            /terminals/{terminalId}/terminalSettings:
              get:
                tags:
                  - Terminal settings - terminal level
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
                x-sortIndex: 3
                x-methodName: getTerminalSettings
              patch:
                tags:
                  - Terminal settings - terminal level
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

                  * Management API—Terminal settings Advanced read and write
                x-sortIndex: 5
                x-methodName: updateTerminalSettings
    overlays:
      - type: APIs.io Search
        url: overlays/management-openapi-search.yml
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
                  - General
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
                x-groupName: General
                x-sortIndex: 1
                x-methodName: createNotificationConfiguration
            /deleteNotificationConfigurations:
              post:
                tags:
                  - General
                summary: Delete a notification subscription configuration
                description: >-
                  Deletes an existing notification subscription configuration.
                  After the subscription is deleted, no further event
                  notifications will be sent to the URL defined in the
                  subscription.
                x-groupName: General
                x-sortIndex: 6
                x-methodName: deleteNotificationConfigurations
            /getNotificationConfiguration:
              post:
                tags:
                  - General
                summary: Get a notification subscription configuration
                description: >-
                  Returns the details of the configuration of a notification
                  subscription.
                x-groupName: General
                x-sortIndex: 2
                x-methodName: getNotificationConfiguration
            /getNotificationConfigurationList:
              post:
                tags:
                  - General
                summary: Get a list of notification subscription configurations
                description: >-
                  Returns the details of the configurations of all of the
                  notification subscriptions in the platform of the executing
                  user.
                x-groupName: General
                x-sortIndex: 3
                x-methodName: getNotificationConfigurationList
            /testNotificationConfiguration:
              post:
                tags:
                  - General
                summary: Test a notification configuration
                description: >-
                  Tests an existing notification subscription configuration. For
                  each event type specified, a test notification will be
                  generated and sent to the URL configured in the subscription
                  specified.
                x-groupName: General
                x-sortIndex: 4
                x-methodName: testNotificationConfiguration
            /updateNotificationConfiguration:
              post:
                tags:
                  - General
                summary: Update a notification subscription configuration
                description: >-
                  Updates an existing notification subscription configuration.
                  If you are updating the event types, you must provide all
                  event types, otherwise the previous event type configuration
                  will be overwritten.
                x-groupName: General
                x-sortIndex: 5
                x-methodName: updateNotificationConfiguration
    overlays:
      - type: APIs.io Search
        url: overlays/notification-configurations-openapi-search.yml
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
                  - Modifications
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
                x-addedInVersion: '30'
                x-sortIndex: 6
                x-methodName: adjustAuthorisation
            /authorise:
              post:
                tags:
                  - Payments
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
                x-sortIndex: 1
                x-methodName: authorise
            /authorise3d:
              post:
                tags:
                  - Payments
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
                x-sortIndex: 2
                x-methodName: authorise3d
            /authorise3ds2:
              post:
                tags:
                  - Payments
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
                x-addedInVersion: '37'
                x-sortIndex: 3
                x-methodName: authorise3ds2
            /cancel:
              post:
                tags:
                  - Modifications
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
                x-sortIndex: 2
                x-methodName: cancel
            /cancelOrRefund:
              post:
                tags:
                  - Modifications
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
                x-sortIndex: 4
                x-methodName: cancelOrRefund
            /capture:
              post:
                tags:
                  - Modifications
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

                x-sortIndex: 1
                x-methodName: capture
            /donate:
              post:
                tags:
                  - Modifications
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
                x-addedInVersion: '40'
                x-sortIndex: 6
                x-methodName: donate
            /getAuthenticationResult:
              post:
                tags:
                  - Payments
                summary: Get the 3DS authentication result
                description: >-
                  Return the authentication result after doing a 3D Secure
                  authentication only.
                x-addedInVersion: '51'
                x-sortIndex: 4
                x-methodName: getAuthenticationResult
            /refund:
              post:
                tags:
                  - Modifications
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
                x-sortIndex: 3
                x-methodName: refund
            /retrieve3ds2Result:
              post:
                tags:
                  - Payments
                summary: Get the 3DS2 authentication result
                description: >-
                  Retrieves the `threeDS2Result` after doing a 3D Secure 2
                  authentication only.
                x-addedInVersion: '40'
                x-sortIndex: 4
                x-methodName: retrieve3ds2Result
            /technicalCancel:
              post:
                tags:
                  - Modifications
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
                x-addedInVersion: '30'
                x-sortIndex: 5
                x-methodName: technicalCancel
            /voidPendingRefund:
              post:
                tags:
                  - Modifications
                summary: Cancel an in-person refund
                description: >-
                  This endpoint allows you to cancel an unreferenced refund
                  request before it has been completed.


                  In your call, you can refer to the original refund request
                  either by using the `tenderReference`, or the `pspReference`.
                  We recommend implementing based on the `tenderReference`, as
                  this is generated for both offline and online transactions.


                  For more information, refer to [Cancel an unreferenced
                  refund](https://docs.adyen.com/point-of-sale/refund-payment/cancel-unreferenced).
                x-addedInVersion: '25'
                x-sortIndex: 7
                x-methodName: voidPendingRefund
    overlays:
      - type: APIs.io Search
        url: overlays/payments-openapi-search.yml
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
                  - Reviewing
                summary: Confirm a payout
                description: |-
                  Confirms a previously submitted payout.

                  To cancel a payout, use the `/declineThirdParty` endpoint.
                x-addedInVersion: '10'
                x-sortIndex: 1
                x-methodName: confirmThirdParty
            /declineThirdParty:
              post:
                tags:
                  - Reviewing
                summary: Cancel a payout
                description: >-
                  Cancels a previously submitted payout.


                  To confirm and send a payout, use the `/confirmThirdParty`
                  endpoint.
                x-addedInVersion: '10'
                x-sortIndex: 2
                x-methodName: declineThirdParty
            /payout:
              post:
                tags:
                  - Instant payouts
                summary: Make an instant card payout
                description: >-
                  With this call, you can pay out to your customers, and funds
                  will be made available within 30 minutes on the cardholder's
                  bank account (this is dependent on whether the issuer supports
                  this functionality). Instant card payouts are only supported
                  for Visa and Mastercard cards.
                x-addedInVersion: '11'
                x-sortIndex: 1
                x-methodName: payout
            /storeDetail:
              post:
                tags:
                  - Initialization
                summary: Store payout details
                description: >-
                  Stores payment details under the `PAYOUT` recurring contract.
                  These payment details can be used later to submit a payout via
                  the `/submitThirdParty` call.
                x-sortIndex: 2
                x-methodName: storeDetail
            /storeDetailAndSubmitThirdParty:
              post:
                tags:
                  - Initialization
                summary: Store details and submit a payout
                description: >-
                  Submits a payout and stores its details for subsequent
                  payouts.


                  The submitted payout must be confirmed or declined either by a
                  reviewer or via `/confirmThirdParty` or `/declineThirdParty`
                  calls.
                x-addedInVersion: '10'
                x-sortIndex: 1
                x-methodName: storeDetailAndSubmitThirdParty
            /submitThirdParty:
              post:
                tags:
                  - Initialization
                summary: Submit a payout
                description: >-
                  Submits a payout using the previously stored payment details.
                  To store payment details, use the `/storeDetail` API call.


                  The submitted payout must be confirmed or declined either by a
                  reviewer or via `/confirmThirdParty` or `/declineThirdParty`
                  calls.
                x-addedInVersion: '10'
                x-sortIndex: 3
                x-methodName: submitThirdParty
    overlays:
      - type: APIs.io Search
        url: overlays/payouts-openapi-search.yml
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
                  - General
                summary: Assign terminals
                description: >-
                  Assigns one or more payment terminals to a merchant account or
                  a store. You can also use this endpoint to reassign terminals
                  between merchant accounts or stores, and to unassign a
                  terminal and return it to company inventory.
                x-sortIndex: 1
                x-methodName: assignTerminals
            /findTerminal:
              post:
                tags:
                  - General
                summary: Get the account or store of a terminal
                description: >-
                  Returns the company account, merchant account, or store that a
                  payment terminal is assigned to.
                x-sortIndex: 1
                x-methodName: findTerminal
            /getStoresUnderAccount:
              post:
                tags:
                  - General
                summary: Get the stores of an account
                description: >-
                  Returns a list of stores associated with a company account or
                  a merchant account, including the status of each store.
                x-sortIndex: 1
                x-methodName: getStoresUnderAccount
            /getTerminalDetails:
              post:
                tags:
                  - General
                summary: Get the details of a terminal
                description: >-
                  Returns the details of a payment terminal, including where the
                  terminal is assigned to. The response returns the same details
                  that are provided in the terminal list in your Customer Area
                  and in the Terminal Fleet report.
                x-sortIndex: 1
                x-methodName: getTerminalDetails
            /getTerminalsUnderAccount:
              post:
                tags:
                  - General
                summary: Get the list of terminals
                description: >-
                  Returns a list of payment terminals associated with a company
                  account, merchant account, or store. The response shows
                  whether the terminals are in the inventory, or in-store (ready
                  for boarding or already boarded).
                x-sortIndex: 1
                x-methodName: getTerminalsUnderAccount
    overlays:
      - type: APIs.io Search
        url: overlays/pos-terminal-openapi-search.yml
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
                  - General
                summary: Create new permits linked to a recurring contract.
                description: >-
                  Create permits for a recurring contract, including support for
                  defining restrictions.
                x-addedInVersion: '40'
                x-sortIndex: 0
                x-methodName: createPermit
            /disable:
              post:
                tags:
                  - General
                summary: Disable stored payment details
                description: >-
                  Disables stored payment details to stop charging a shopper
                  with this particular recurring detail ID.


                  For more information, refer to [Disable stored
                  details](https://docs.adyen.com/classic-integration/recurring-payments/disable-stored-details/).
                x-sortIndex: 2
                x-methodName: disable
            /disablePermit:
              post:
                tags:
                  - General
                summary: Disable an existing permit.
                description: >-
                  Disable a permit that was previously linked to a
                  recurringDetailReference.
                x-addedInVersion: '61'
                x-sortIndex: 0
                x-methodName: disablePermit
            /listRecurringDetails:
              post:
                tags:
                  - General
                summary: Get stored payment details
                description: >-
                  Lists the stored payment details for a shopper, if there are
                  any available. The recurring detail ID can be used with a
                  regular authorisation request to charge the shopper. A summary
                  of the payment detail is returned for presentation to the
                  shopper.


                  For more information, refer to [Retrieve stored
                  details](https://docs.adyen.com/classic-integration/recurring-payments/retrieve-stored-details/).
                x-sortIndex: 1
                x-methodName: listRecurringDetails
            /notifyShopper:
              post:
                tags:
                  - General
                summary: Ask issuer to notify the shopper
                description: >-
                  Sends a request to the issuer so they can inform the shopper
                  about the upcoming recurring payment. This endpoint is used
                  only for local acquiring in India. For more information, refer
                  to [Recurring card payments in
                  India](https://docs.adyen.com/payment-methods/cards/cards-recurring-india).
                x-sortIndex: 4
                x-methodName: notifyShopper
            /scheduleAccountUpdater:
              post:
                tags:
                  - General
                summary: Schedule running the Account Updater
                description: >-
                  When making the API call, you can submit either the credit
                  card information, or the recurring detail reference and the
                  shopper reference:

                  * If the card information is provided, all the sub-fields for
                  `card` are mandatory.

                  * If the recurring detail reference is provided, the fields
                  for `shopperReference` and `selectedRecurringDetailReference`
                  are mandatory.
                x-addedInVersion: '4'
                x-sortIndex: 3
                x-methodName: scheduleAccountUpdater
    overlays:
      - type: APIs.io Search
        url: overlays/recurring-openapi-search.yml
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
                  - General
                summary: Changes the status of the payment method.
                description: >-
                  Changes the status of the provided payment method to the
                  specified status.
                x-groupName: General
                x-sortIndex: 0
                x-methodName: changeStatus
            /checkBalance:
              post:
                tags:
                  - General
                summary: Checks the balance.
                description: Checks the balance of the provided payment method.
                x-groupName: General
                x-sortIndex: 0
                x-methodName: checkBalance
            /issue:
              post:
                tags:
                  - General
                summary: Issues a new card.
                description: Issues a new card of the given payment method.
                x-groupName: General
                x-sortIndex: 0
                x-methodName: issue
            /load:
              post:
                tags:
                  - General
                summary: Loads the payment method.
                description: Loads the payment method with the specified funds.
                x-groupName: General
                x-sortIndex: 0
                x-methodName: load
            /mergeBalance:
              post:
                tags:
                  - General
                summary: Merge the balance of two cards.
                description: >-
                  Increases the balance of the paymentmethod by the full amount
                  left on the source paymentmethod
                x-groupName: General
                x-sortIndex: 0
                x-methodName: mergeBalance
            /voidTransaction:
              post:
                tags:
                  - General
                summary: Voids a transaction.
                description: Voids the referenced stored value transaction.
                x-groupName: General
                x-sortIndex: 0
                x-methodName: voidTransaction
    overlays:
      - type: APIs.io Search
        url: overlays/stored-value-openapi-search.yml
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
            /logout:
              post:
                description: Empty. Content of the Logout Request message.
                summary: Logout Request
            /enableservice:
              post:
                description: >-
                  It conveys the services that will be enabled for the  POI
                  Terminal without the request of the Sale System, and a
                  possible invitation for the Customer to start the services.
                  Content of the Enable Service Request message.
                summary: EnableService Request
            /admin:
              post:
                description: Empty. Content of the Custom Admin Request message.
                summary: Admin Request
            /payment:
              post:
                description: >-
                  Request sent to terminal to initiate payment.  It conveys
                  Information related to the Payment transaction to process.
                  Content of the Payment Request message.
                summary: Payment Request
            /cardacquisition:
              post:
                description: >-
                  It conveys Information related to the payment and loyalty
                  cards to read and analyse. This message pair is usually
                  followed by a message pair (e.g. payment or loyalty) which
                  refers to this Card Acquisition message pair. Content of the
                  Card Acquisition Request message.
                summary: CardAcquisition Request
            /loyalty:
              post:
                description: >-
                  It conveys Information related to the Loyalty transaction to
                  process. Content of the Loyalty Request message.
                summary: Loyalty Request
            /storedvalue:
              post:
                description: >-
                  It conveys Information related to the Stored Value transaction
                  to process. Content of the Stored Value Request message.
                summary: StoredValue Request
            /reversal:
              post:
                description: >-
                  It conveys Information related to the reversal of a previous
                  payment or a loyalty transaction. Content of the Reversal
                  Request message.
                summary: Reversal Request
            /reconciliation:
              post:
                description: >-
                  It conveys Information related to the Reconciliation requested
                  by the Sale System. Content of the Reconciliation Request
                  message.
                summary: Reconciliation Request
            /gettotals:
              post:
                description: >-
                  It conveys information from the Sale System related to the
                  scope and the format of the totals to be computed by the POI
                  System. Content of the Get Totals Request message.
                summary: GetTotals Request
            /balanceinquiry:
              post:
                description: >-
                  It conveys Information related to the account for which a
                  Balance Inquiry is requested. Content of the Balance Inquiry
                  Request message.
                summary: BalanceInquiry Request
            /transactionstatus:
              post:
                description: >-
                  It conveys Information requested for status of the last or
                  current Payment, Loyalty or Reversal transaction. Content of
                  the TransactionStatus Request message.
                summary: TransactionStatus Request
            /diagnosis:
              post:
                description: >-
                  It conveys Information related to the target POI for which the
                  diagnosis is requested. Content of the Diagnosis Request
                  message.
                summary: Diagnosis Request
            /display:
              post:
                description: >-
                  It conveys the data to display and the way to process the
                  display. It contains the complete content to display. It might
                  contain an operation (the DisplayOutput element) per Display
                  Device type. Content of the Display Request message.
                summary: Display Request
            /input:
              post:
                description: >-
                  It conveys data to display and the way to process the display,
                  and contains the complete content to display. In addition to
                  the display on the Input Device, it might contain an operation
                  (the DisplayOutput element) per Display Device type. Content
                  of the Input Request message.
                summary: Input Request
            /print:
              post:
                description: >-
                  It conveys the data to print and the way to process the print.
                  It contains the complete content to print. Content of the
                  Print Request message.
                summary: Print Request
            /cardreaderapdu:
              post:
                description: >-
                  It contains the APDU request to send to the chip of the card,
                  and a possible invitation message to display on the
                  CashierInterface or the CustomerInterface. Content of the Card
                  Reader APDU Request message.
                summary: CardReaderAPDU Request
    overlays:
      - type: APIs.io Search
        url: overlays/terminal-openapi-search.yml
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
                  - General
                summary: Creates one or more test card ranges.
                description: Creates one or more test card ranges.
                x-groupName: General
                x-sortIndex: 0
    overlays:
      - type: APIs.io Search
        url: overlays/test-cards-openapi-search.yml
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
                  - Capital
                summary: Get a capital account
                description: Returns a list of grants with status and outstanding balances.
                x-addedInVersion: '3'
                x-sortIndex: 2
                x-methodName: getCapitalAccount
              post:
                tags:
                  - Capital
                summary: Request a grant payout
                description: Requests the payout of the selected grant offer.
                x-addedInVersion: '3'
                x-sortIndex: 1
                x-methodName: requestGrantPayout
            /grants/{id}:
              get:
                tags:
                  - Capital
                summary: Get grant reference details
                description: >-
                  Returns the details of a capital account specified in the
                  path.
                x-addedInVersion: '3'
                x-sortIndex: 3
                x-methodName: getGrantReferenceDetails
            /transactions:
              get:
                tags:
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

                x-addedInVersion: '1'
                x-sortIndex: 1
                x-methodName: getAllTransactions
            /transactions/{id}:
              get:
                tags:
                  - Transactions
                summary: Get a transaction
                description: >-
                  >Versions 1 and 2 of the Transfers API are deprecated. If you
                  are just starting your implementation, use the latest version.


                  Returns a transaction.
                x-addedInVersion: '1'
                x-sortIndex: 2
                x-methodName: getTransaction
            /transfers:
              post:
                tags:
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
                x-addedInVersion: '2'
                x-sortIndex: 1
                x-methodName: transferFunds
            /transfers/{transferId}/returns:
              post:
                tags:
                  - Transfers
                summary: Return a transfer
                description: >-
                  Returns previously transferred funds without creating a new
                  `transferId`.
                x-addedInVersion: '3'
                x-sortIndex: 2
                x-methodName: returnTransfer
    overlays:
      - type: APIs.io Search
        url: overlays/transfers-openapi-search.yml
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
---