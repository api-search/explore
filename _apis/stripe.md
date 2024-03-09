---
specificationVersion: '0.17'
aid: stripe.com:stripe
name: Stripe
description: >-
  Millions of companies of all sizes use Stripe online and in person to accept
  payments, send payouts, automate financial processes, and ultimately grow
  revenue.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://artisinal.apisjson.org/apis/stripe/apis.yml
created: 2023/10/06
modified: '2024-01-31'
tags:
  - Payments
  - Payouts
  - Financial
  - Revenue
apis:
  - aid: stripe.com:accounts
    name: Stripe Accounts API
    description: >-
      This is an object representing a Stripe account. You can retrieve it to
      see properties on the account like its current requirements or if the
      account is enabled to make live charges or receive payouts.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/accounts
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/accounts
      - type: OpenAPI
        url: properties/accounts-openapi-original.yml
        data:
          info:
            title: Stripe Accounts API
          paths:
            /v1/account:
              get:
                description: Retrieves the details of an account.
                summary: Retrieve Account
                tags:
                  - Retrieve
                  - Account
                  - V1
                  - Account
            /v1/account_links:
              post:
                description: >-
                  <p>Creates an AccountLink object that includes a single-use
                  Stripe URL that the platform can redirect their user to in
                  order to take them through the Connect Onboarding flow.</p>
                summary: Create Account Link
                tags:
                  - Create
                  - Account
                  - Link
                  - V1
                  - Account
                  - Account_links
            /v1/account_sessions:
              post:
                description: >-
                  <p>Creates a AccountSession object that includes a single-use
                  token that the platform can use on their front-end to grant
                  client-side API access.</p>
                summary: Create Account Sessions
                tags:
                  - Create
                  - Account
                  - Sessions
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
            /v1/accounts:
              get:
                description: >-
                  <p>Returns a list of accounts connected to your platform via
                  <a href="/docs/connect">Connect</a>. If you’re not a platform,
                  the list is empty.</p>
                summary: Retrieve Accounts
                tags:
                  - Retrieve
                  - Accounts
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
              post:
                description: >-
                  <p>With <a href="/docs/connect">Connect</a>, you can create
                  Stripe accounts for your users.

                  To do this, you’ll first need to <a
                  href="https://dashboard.stripe.com/account/applications/settings">register
                  your platform</a>.</p>


                  <p>If you’ve already collected information for your connected
                  accounts, you <a
                  href="/docs/connect/best-practices#onboarding">can prefill
                  that information</a> when

                  creating the account. Connect Onboarding won’t ask for the
                  prefilled information during account onboarding.

                  You can prefill any information on the account.</p>
                summary: Create Account
                tags:
                  - Create
                  - Account
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
            /v1/accounts/{account}:
              delete:
                description: >-
                  <p>With <a href="/docs/connect">Connect</a>, you can delete
                  accounts you manage.</p>


                  <p>Accounts created using test-mode keys can be deleted at any
                  time. Standard accounts created using live-mode keys cannot be
                  deleted. Custom or Express accounts created using live-mode
                  keys can only be deleted once all balances are zero.</p>


                  <p>If you want to delete your own account, use the <a
                  href="https://dashboard.stripe.com/settings/account">account
                  information tab in your account settings</a> instead.</p>
                summary: Delete Account
                tags:
                  - Delete
                  - Account
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
              get:
                description: <p>Retrieves the details of an account.</p>
                summary: Retrieve Accounts
                tags:
                  - Retrieve
                  - Accounts
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
              post:
                description: >-
                  <p>Updates a <a href="/docs/connect/accounts">connected
                  account</a> by setting the values of the parameters passed.
                  Any parameters not provided are

                  left unchanged.</p>


                  <p>For Custom accounts, you can update any information on the
                  account. For other accounts, you can update all information
                  until that

                  account has started to go through Connect Onboarding. Once you
                  create an <a href="/docs/api/account_links">Account Link</a>

                  for a Standard or Express account, some parameters can no
                  longer be changed. These are marked as <strong>Custom
                  Only</strong> or <strong>Custom and Express</strong>

                  below.</p>


                  <p>To update your own account, use the <a
                  href="https://dashboard.stripe.com/settings/account">Dashboard</a>.
                  Refer to our

                  <a href="/docs/connect/updating-accounts">Connect</a>
                  documentation to learn more about updating accounts.</p>
                summary: Update Account
                tags:
                  - Update
                  - Account
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
            /v1/accounts/{account}/bank_accounts:
              post:
                description: <p>Create an external account for a given account.</p>
                summary: Create Bank Account
                tags:
                  - Create
                  - Bank
                  - Account
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
            /v1/accounts/{account}/bank_accounts/{id}:
              delete:
                description: >-
                  <p>Delete a specified external account for a given
                  account.</p>
                summary: Delete Bank Account
                tags:
                  - Delete
                  - Bank
                  - Account
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
              get:
                description: >-
                  <p>Retrieve a specified external account for a given
                  account.</p>
                summary: Retrieve Bank Account
                tags:
                  - Retrieve
                  - Bank
                  - Account
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
              post:
                description: >-
                  <p>Updates the metadata, account holder name, account holder
                  type of a bank account belonging to a <a
                  href="/docs/connect/custom-accounts">Custom account</a>, and
                  optionally sets it as the default for its currency. Other bank
                  account details are not editable by design.</p>


                  <p>You can re-enable a disabled bank account by performing an
                  update call without providing any arguments or changes.</p>
                summary: Update Bank Account
                tags:
                  - Update
                  - Bank
                  - Account
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
            /v1/accounts/{account}/capabilities:
              get:
                description: >-
                  <p>Returns a list of capabilities associated with the account.
                  The capabilities are returned sorted by creation date, with
                  the most recent capability appearing first.</p>
                summary: Retrieve Account Capabilities
                tags:
                  - Retrieve
                  - Account
                  - Capabilities
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
            /v1/accounts/{account}/capabilities/{capability}:
              get:
                description: >-
                  <p>Retrieves information about the specified Account
                  Capability.</p>
                summary: Retrieve Account Capability
                tags:
                  - Retrieve
                  - Account
                  - Capability
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
              post:
                description: >-
                  <p>Updates an existing Account Capability. Request or remove a
                  capability by updating its <code>requested</code>
                  parameter.</p>
                summary: Update Account Capability
                tags:
                  - Update
                  - Account
                  - Capability
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
            /v1/accounts/{account}/external_accounts:
              get:
                description: <p>List external accounts for an account.</p>
                summary: Retrieve External Accounts
                tags:
                  - Retrieve
                  - External
                  - Accounts
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
              post:
                description: <p>Create an external account for a given account.</p>
                summary: Create External Accounts
                tags:
                  - Create
                  - External
                  - Accounts
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
            /v1/accounts/{account}/external_accounts/{id}:
              delete:
                description: >-
                  <p>Delete a specified external account for a given
                  account.</p>
                summary: Delete External Account
                tags:
                  - Delete
                  - External
                  - Account
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
              get:
                description: >-
                  <p>Retrieve a specified external account for a given
                  account.</p>
                summary: Retrieve External Account
                tags:
                  - Retrieve
                  - External
                  - Account
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
              post:
                description: >-
                  <p>Updates the metadata, account holder name, account holder
                  type of a bank account belonging to a <a
                  href="/docs/connect/custom-accounts">Custom account</a>, and
                  optionally sets it as the default for its currency. Other bank
                  account details are not editable by design.</p>


                  <p>You can re-enable a disabled bank account by performing an
                  update call without providing any arguments or changes.</p>
                summary: Update External Account
                tags:
                  - Update
                  - External
                  - Account
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
            /v1/accounts/{account}/login_links:
              post:
                description: >-
                  <p>Creates a single-use login link for an Express account to
                  access their Stripe dashboard.</p>


                  <p><strong>You may only create login links for <a
                  href="/docs/connect/express-accounts">Express accounts</a>
                  connected to your platform</strong>.</p>
                summary: Create Login Link
                tags:
                  - Create
                  - Login
                  - Link
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
                  - Login_links
            /v1/accounts/{account}/people:
              get:
                description: >-
                  <p>Returns a list of people associated with the account’s
                  legal entity. The people are returned sorted by creation date,
                  with the most recent people appearing first.</p>
                summary: Retrieve Account Peoples
                tags:
                  - Retrieve
                  - Account
                  - Peoples
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
                  - Login_links
                  - People
              post:
                description: <p>Creates a new person.</p>
                summary: Create Account People
                tags:
                  - Create
                  - Account
                  - People
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
                  - Login_links
                  - People
            /v1/accounts/{account}/people/{person}:
              delete:
                description: >-
                  <p>Deletes an existing person’s relationship to the account’s
                  legal entity. Any person with a relationship for an account
                  can be deleted through the API, except if the person is the
                  <code>account_opener</code>. If your integration is using the
                  <code>executive</code> parameter, you cannot delete the only
                  verified <code>executive</code> on file.</p>
                summary: Delete Account People
                tags:
                  - Delete
                  - Account
                  - People
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
                  - Login_links
                  - People
                  - Person
              get:
                description: <p>Retrieves an existing person.</p>
                summary: Retrieve Account People
                tags:
                  - Retrieve
                  - Account
                  - People
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
                  - Login_links
                  - People
                  - Person
              post:
                description: <p>Updates an existing person.</p>
                summary: Delete Account People
                tags:
                  - Delete
                  - Account
                  - People
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
                  - Login_links
                  - People
                  - Person
            /v1/accounts/{account}/persons:
              get:
                description: >-
                  <p>Returns a list of people associated with the account’s
                  legal entity. The people are returned sorted by creation date,
                  with the most recent people appearing first.</p>
                summary: Retrieve Account Persons
                tags:
                  - Retrieve
                  - Account
                  - Persons
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
                  - Login_links
                  - People
                  - Person
                  - Persons
              post:
                description: <p>Creates a new person.</p>
                summary: Create Account Person
                tags:
                  - Create
                  - Account
                  - Person
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
                  - Login_links
                  - People
                  - Person
                  - Persons
            /v1/accounts/{account}/persons/{person}:
              delete:
                description: >-
                  <p>Deletes an existing person’s relationship to the account’s
                  legal entity. Any person with a relationship for an account
                  can be deleted through the API, except if the person is the
                  <code>account_opener</code>. If your integration is using the
                  <code>executive</code> parameter, you cannot delete the only
                  verified <code>executive</code> on file.</p>
                summary: Delete Account Person
                tags:
                  - Delete
                  - Account
                  - Person
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
                  - Login_links
                  - People
                  - Person
                  - Persons
              get:
                description: <p>Retrieves an existing person.</p>
                summary: Retrieve Account Person
                tags:
                  - Retrieve
                  - Account
                  - Person
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
                  - Login_links
                  - People
                  - Person
                  - Persons
              post:
                description: <p>Updates an existing person.</p>
                summary: Update Account Person
                tags:
                  - Update
                  - Account
                  - Person
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
                  - Login_links
                  - People
                  - Person
                  - Persons
            /v1/accounts/{account}/reject:
              post:
                description: >-
                  <p>With <a href="/docs/connect">Connect</a>, you may flag
                  accounts as suspicious.</p>


                  <p>Test-mode Custom and Express accounts can be rejected at
                  any time. Accounts created using live-mode keys may only be
                  rejected once all balances are zero.</p>
                summary: Reject Account
                tags:
                  - Reject
                  - Account
                  - V1
                  - Account
                  - Account_links
                  - Account_sessions
                  - Accounts
                  - Bank_accounts
                  - Id
                  - Capabilities
                  - Capability
                  - External_accounts
                  - Login_links
                  - People
                  - Person
                  - Persons
                  - Reject
          components: nu
    overlays:
      - type: APIs.io Search
        url: overlays/accounts-openapi-search.yml
  - aid: stripe.com:apple-pay
    name: Stripe Apple Pay API
    description: >-
      Stripe users can accept Apple Pay in iOS applications in iOS 9 and above,
      and on the web in Safari starting with iOS 10 or macOS Sierra. There are
      no additional fees to process Apple Pay payments, and the pricing is the
      same as other card transactions.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/apple-pay
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/apple-pay
      - type: OpenAPI
        url: properties/apple-pay-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Apple Pay API
          paths:
            /v1/apple_pay/domains:
              get:
                description: <p>List apple pay domains.</p>
                summary: Retrieve Apple Pay Domains
                tags:
                  - Retrieve
                  - Apple
                  - Pay
                  - Domains
                  - V1
                  - Apple_pay
                  - Domains
              post:
                description: <p>Create an apple pay domain.</p>
                summary: Create Apple Pay Domains
                tags:
                  - Create
                  - Apple
                  - Pay
                  - Domains
                  - V1
                  - Apple_pay
                  - Domains
            /v1/apple_pay/domains/{domain}:
              delete:
                description: <p>Delete an apple pay domain.</p>
                summary: Delete Apple Pay Domain
                tags:
                  - Delete
                  - Apple
                  - Pay
                  - Domain
                  - V1
                  - Apple_pay
                  - Domains
                  - Domain
              get:
                description: <p>Retrieve an apple pay domain.</p>
                summary: Retrieve Apple Pay Domain
                tags:
                  - Retrieve
                  - Apple
                  - Pay
                  - Domain
                  - V1
                  - Apple_pay
                  - Domains
                  - Domain
          tags:
            - name: Apple Pay
              description: Needs a description.
            - name: Domains
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/apple-pay-openapi-search.yml
  - aid: stripe.com:application-fees
    name: Stripe Application Fees API
    description: >-
      When you collect a transaction fee on top of a charge made for your user
      (using Connect), an Application Fee object is created in your account. You
      can list, retrieve, and refund application fees.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/application_fees
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/application_fees
      - type: OpenAPI
        url: properties/application-fees-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Application Fees API
          paths:
            /v1/application_fees:
              get:
                description: >-
                  <p>Returns a list of application fees you’ve previously
                  collected. The application fees are returned in sorted order,
                  with the most recent fees appearing first.</p>
                summary: Retrieve Application Fees
                tags:
                  - Retrieve
                  - Application
                  - Fees
                  - V1
                  - Application_fees
            /v1/application_fees/{fee}/refunds/{id}:
              get:
                description: >-
                  <p>By default, you can see the 10 most recent refunds stored
                  directly on the application fee object, but you can also
                  retrieve details about a specific refund stored on the
                  application fee.</p>
                summary: Retrieve Application Fees Refund
                tags:
                  - Retrieve
                  - Application
                  - Fees
                  - Refund
                  - V1
                  - Application_fees
                  - Fee
                  - Refunds
                  - Id
              post:
                description: >-
                  <p>Updates the specified application fee refund by setting the
                  values of the parameters passed. Any parameters not provided
                  will be left unchanged.</p>


                  <p>This request only accepts metadata as an argument.</p>
                summary: Update Application Fees Refund
                tags:
                  - Update
                  - Application
                  - Fees
                  - Refund
                  - V1
                  - Application_fees
                  - Fee
                  - Refunds
                  - Id
            /v1/application_fees/{id}:
              get:
                description: >-
                  <p>Retrieves the details of an application fee that your
                  account has collected. The same information is returned when
                  refunding the application fee.</p>
                summary: Retrieve Application Fee
                tags:
                  - Retrieve
                  - Application
                  - Fee
                  - V1
                  - Application_fees
                  - Fee
                  - Refunds
                  - Id
            /v1/application_fees/{id}/refund:
              post:
                description: ''
                summary: Create Application Fee Refund
                tags:
                  - Create
                  - Application
                  - Fee
                  - Refund
                  - V1
                  - Application_fees
                  - Fee
                  - Refunds
                  - Id
                  - Refund
            /v1/application_fees/{id}/refunds:
              get:
                description: >-
                  <p>You can see a list of the refunds belonging to a specific
                  application fee. Note that the 10 most recent refunds are
                  always available by default on the application fee object. If
                  you need more than those 10, you can use this API method and
                  the <code>limit</code> and <code>starting_after</code>
                  parameters to page through additional refunds.</p>
                summary: Retrieve Application Fee Refunds
                tags:
                  - Retrieve
                  - Application
                  - Fee
                  - Refunds
                  - V1
                  - Application_fees
                  - Fee
                  - Refunds
                  - Id
                  - Refund
              post:
                description: >-
                  <p>Refunds an application fee that has previously been
                  collected but not yet refunded.

                  Funds will be refunded to the Stripe account from which the
                  fee was originally collected.</p>


                  <p>You can optionally refund only part of an application fee.

                  You can do so multiple times, until the entire fee has been
                  refunded.</p>


                  <p>Once entirely refunded, an application fee can’t be
                  refunded again.

                  This method will raise an error when called on an
                  already-refunded application fee,

                  or when trying to refund more money than is left on an
                  application fee.</p>
                summary: Refund Application Fee
                tags:
                  - Refund
                  - Application
                  - Fee
                  - V1
                  - Application_fees
                  - Fee
                  - Refunds
                  - Id
                  - Refund
          tags:
            - name: Applications
              description: Needs a description.
            - name: Fees
              description: Needs a description.
            - name: Refunds
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/application-fees-openapi-search.yml
  - aid: stripe.com:application-secrets
    name: Stripe Application Secrets API
    description: >-
      Secret Store is an API that allows Stripe Apps developers to securely
      persist secrets for use by UI Extensions and app backends.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/secret_management
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/secret_management
      - type: OpenAPI
        url: properties/application-secrets-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Application Secrets API
          paths:
            /v1/apps/secrets:
              get:
                description: <p>List all secrets stored on the given scope.</p>
                summary: Retrieve Application Secrets
                tags:
                  - Retrieve
                  - Application
                  - Secrets
                  - V1
                  - Apps
                  - Secrets
              post:
                description: <p>Create or replace a secret in the secret store.</p>
                summary: Create Application Secret
                tags:
                  - Create
                  - Application
                  - Secret
                  - V1
                  - Apps
                  - Secrets
            /v1/apps/secrets/delete:
              post:
                description: >-
                  <p>Deletes a secret from the secret store by name and
                  scope.</p>
                summary: Delete Application Secret
                tags:
                  - Delete
                  - Application
                  - Secret
                  - V1
                  - Apps
                  - Secrets
                  - Delete
            /v1/apps/secrets/find:
              get:
                description: <p>Finds a secret in the secret store by name and scope.</p>
                summary: Find Application Secret
                tags:
                  - Find
                  - Application
                  - Secret
                  - V1
                  - Apps
                  - Secrets
                  - Delete
                  - Find
          tags:
            - name: Applications
              description: Needs a description.
            - name: Secrets
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/application-secrets-openapi-search.yml
  - aid: stripe.com:balance
    name: Stripe Balance API
    description: >-
      This is an object representing your Stripe balance. You can retrieve it to
      see the balance currently on your Stripe account. You can also retrieve
      the balance history, which contains a list of transactions that
      contributed to the balance (charges, payouts, and so forth).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/balance
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/balance
      - type: OpenAPI
        url: properties/balance-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Balance API
          paths:
            /v1/balance:
              get:
                description: >-
                  <p>Retrieves the current account balance, based on the
                  authentication that was used to make the request.
                   For a sample request, see <a href="/docs/connect/account-balances#accounting-for-negative-balances">Accounting for negative balances</a>.</p>
                summary: Retrieve Balance
                tags:
                  - Retrieve
                  - Balance
                  - V1
                  - Balance
            /v1/balance/history:
              get:
                description: >-
                  <p>Returns a list of transactions that have contributed to the
                  Stripe account balance (e.g., charges, transfers, and so
                  forth). The transactions are returned in sorted order, with
                  the most recent transactions appearing first.</p>


                  <p>Note that this endpoint was previously called “Balance
                  history” and used the path
                  <code>/v1/balance/history</code>.</p>
                summary: Retrieve Balance Histories
                tags:
                  - Retrieve
                  - Balance
                  - Histories
                  - V1
                  - Balance
                  - History
            /v1/balance/history/{id}:
              get:
                description: >-
                  <p>Retrieves the balance transaction with the given ID.</p>


                  <p>Note that this endpoint previously used the path
                  <code>/v1/balance/history/:id</code>.</p>
                summary: Retrieve Balance History
                tags:
                  - Retrieve
                  - Balance
                  - History
                  - V1
                  - Balance
                  - History
                  - Id
            /v1/balance_transactions:
              get:
                description: >-
                  <p>Returns a list of transactions that have contributed to the
                  Stripe account balance (e.g., charges, transfers, and so
                  forth). The transactions are returned in sorted order, with
                  the most recent transactions appearing first.</p>


                  <p>Note that this endpoint was previously called “Balance
                  history” and used the path
                  <code>/v1/balance/history</code>.</p>
                summary: Retrieve Balance Transactions
                tags:
                  - Retrieve
                  - Balance
                  - Transactions
                  - V1
                  - Balance
                  - History
                  - Id
                  - Balance_transactions
            /v1/balance_transactions/{id}:
              get:
                description: >-
                  <p>Retrieves the balance transaction with the given ID.</p>


                  <p>Note that this endpoint previously used the path
                  <code>/v1/balance/history/:id</code>.</p>
                summary: Retrieve Balance Transaction
                tags:
                  - Retrieve
                  - Balance
                  - Transaction
                  - V1
                  - Balance
                  - History
                  - Id
                  - Balance_transactions
          tags:
            - name: Balances
              description: Needs a description.
            - name: Histories
              description: Needs a description.
            - name: History
              description: Needs a description.
            - name: Transactions
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/balance-openapi-search.yml
  - aid: stripe.com:billing
    name: Stripe Billing API
    description: >-
      Create and manage subscriptions, recurring payments, and recurring
      revenue.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/billing
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/billing
      - type: OpenAPI
        url: properties/billing-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Billing API
          paths:
            /v1/billing_portal/configurations:
              get:
                description: >-
                  <p>Returns a list of configurations that describe the
                  functionality of the customer portal.</p>
                summary: Retrieve Billing Portal Configurations
                tags:
                  - Retrieve
                  - Billing
                  - Portal
                  - Configurations
                  - V1
                  - Billing_portal
                  - Configurations
              post:
                description: >-
                  <p>Creates a configuration that describes the functionality
                  and behavior of a PortalSession</p>
                summary: Create Billing Portal Configuration
                tags:
                  - Create
                  - Billing
                  - Portal
                  - Configuration
                  - V1
                  - Billing_portal
                  - Configurations
            /v1/billing_portal/configurations/{configuration}:
              get:
                description: >-
                  <p>Retrieves a configuration that describes the functionality
                  of the customer portal.</p>
                summary: Retrieve Billing Portal Configuration
                tags:
                  - Retrieve
                  - Billing
                  - Portal
                  - Configuration
                  - V1
                  - Billing_portal
                  - Configurations
                  - Configuration
              post:
                description: >-
                  <p>Updates a configuration that describes the functionality of
                  the customer portal.</p>
                summary: Update Billing Portal Configuration
                tags:
                  - Update
                  - Billing
                  - Portal
                  - Configuration
                  - V1
                  - Billing_portal
                  - Configurations
                  - Configuration
            /v1/billing_portal/sessions:
              post:
                description: <p>Creates a session of the customer portal.</p>
                summary: Retrieve Billing Portal Session
                tags:
                  - Retrieve
                  - Billing
                  - Portal
                  - Session
                  - V1
                  - Billing_portal
                  - Configurations
                  - Configuration
                  - Sessions
          tags:
            - name: Billing
              description: Needs a description.
            - name: Portals
              description: Needs a description.
            - name: Configurations
              description: Needs a description.
            - name: Session
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/billing-openapi-search.yml
  - aid: stripe.com:charges
    name: Stripe Charges API
    description: >-
      The Charge object represents a single attempt to move money into your
      Stripe account. PaymentIntent confirmation is the most common way to
      create Charges, but transferring money to a different Stripe account
      through Connect also creates Charges. Some legacy payment flows create
      Charges directly, which is not recommended for new integrations.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/charges
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/charges
      - type: OpenAPI
        url: properties/charges-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Charges API
          paths:
            /v1/charges:
              get:
                description: >-
                  <p>Returns a list of charges you’ve previously created. The
                  charges are returned in sorted order, with the most recent
                  charges appearing first.</p>
                summary: Retrieve Charges
                tags:
                  - Retrieve
                  - Charges
                  - V1
                  - Charges
              post:
                description: >-
                  <p>Use the <a href="/docs/api/payment_intents">Payment Intents
                  API</a> to initiate a new payment instead

                  of using this method. Confirmation of the PaymentIntent
                  creates the <code>Charge</code>

                  object used to request payment, so this method is limited to
                  legacy integrations.</p>
                summary: Create Charge
                tags:
                  - Create
                  - Charge
                  - V1
                  - Charges
            /v1/charges/search:
              get:
                description: >-
                  <p>Search for charges you’ve previously created using Stripe’s
                  <a href="/docs/search#search-query-language">Search Query
                  Language</a>.

                  Don’t use search in read-after-write flows where strict
                  consistency is necessary. Under normal operating

                  conditions, data is searchable in less than a minute.
                  Occasionally, propagation of new or updated data can be up

                  to an hour behind during outages. Search functionality is not
                  available to merchants in India.</p>
                summary: Search Charges
                tags:
                  - Search
                  - Charges
                  - V1
                  - Charges
                  - Search
            /v1/charges/{charge}:
              get:
                description: >-
                  <p>Retrieves the details of a charge that has previously been
                  created. Supply the unique charge ID that was returned from
                  your previous request, and Stripe will return the
                  corresponding charge information. The same information is
                  returned when creating or refunding the charge.</p>
                summary: Retrieve Charge
                tags:
                  - Retrieve
                  - Charge
                  - V1
                  - Charges
                  - Search
                  - Charge
              post:
                description: >-
                  <p>Updates the specified charge by setting the values of the
                  parameters passed. Any parameters not provided will be left
                  unchanged.</p>
                summary: Update Charge
                tags:
                  - Update
                  - Charge
                  - V1
                  - Charges
                  - Search
                  - Charge
            /v1/charges/{charge}/capture:
              post:
                description: >-
                  <p>Capture the payment of an existing, uncaptured charge that
                  was created with the <code>capture</code> option set to
                  false.</p>


                  <p>Uncaptured payments expire a set number of days after they
                  are created (<a href="/docs/charges/placing-a-hold">7 by
                  default</a>), after which they are marked as refunded and
                  capture attempts will fail.</p>


                  <p>Don’t use this method to capture a PaymentIntent-initiated
                  charge. Use <a
                  href="/docs/api/payment_intents/capture">Capture a
                  PaymentIntent</a>.</p>
                summary: Capture Charge
                tags:
                  - Capture
                  - Charge
                  - V1
                  - Charges
                  - Search
                  - Charge
                  - Capture
            /v1/charges/{charge}/dispute:
              get:
                description: <p>Retrieve a dispute for a specified charge.</p>
                summary: Retrieve Charge Dispute
                tags:
                  - Retrieve
                  - Charge
                  - Dispute
                  - V1
                  - Charges
                  - Search
                  - Charge
                  - Capture
                  - Dispute
              post:
                description: ''
                summary: Update Charge Dispute
                tags:
                  - Update
                  - Charge
                  - Dispute
                  - V1
                  - Charges
                  - Search
                  - Charge
                  - Capture
                  - Dispute
            /v1/charges/{charge}/dispute/close:
              post:
                description: ''
                summary: Close Charge Dispute
                tags:
                  - Close
                  - Charge
                  - Dispute
                  - V1
                  - Charges
                  - Search
                  - Charge
                  - Capture
                  - Dispute
                  - Close
            /v1/charges/{charge}/refund:
              post:
                description: >-
                  <p>When you create a new refund, you must specify either a
                  Charge or a PaymentIntent object.</p>


                  <p>This action refunds a previously created charge that’s not
                  refunded yet.

                  Funds are refunded to the credit or debit card that’s
                  originally charged.</p>


                  <p>You can optionally refund only part of a charge.

                  You can repeat this until the entire charge is refunded.</p>


                  <p>After you entirely refund a charge, you can’t refund it
                  again.

                  This method raises an error when it’s called on an
                  already-refunded charge,

                  or when you attempt to refund more money than is left on a
                  charge.</p>
                summary: Refund Charge
                tags:
                  - Refund
                  - Charge
                  - V1
                  - Charges
                  - Search
                  - Charge
                  - Capture
                  - Dispute
                  - Close
                  - Refund
            /v1/charges/{charge}/refunds:
              get:
                description: >-
                  <p>You can see a list of the refunds belonging to a specific
                  charge. Note that the 10 most recent refunds are always
                  available by default on the charge object. If you need more
                  than those 10, you can use this API method and the
                  <code>limit</code> and <code>starting_after</code> parameters
                  to page through additional refunds.</p>
                summary: Retrieve Charge Refunds
                tags:
                  - Retrieve
                  - Charge
                  - Refunds
                  - V1
                  - Charges
                  - Search
                  - Charge
                  - Capture
                  - Dispute
                  - Close
                  - Refund
                  - Refunds
              post:
                description: >-
                  <p>When you create a new refund, you must specify a Charge or
                  a PaymentIntent object on which to create it.</p>


                  <p>Creating a new refund will refund a charge that has
                  previously been created but not yet refunded.

                  Funds will be refunded to the credit or debit card that was
                  originally charged.</p>


                  <p>You can optionally refund only part of a charge.

                  You can do so multiple times, until the entire charge has been
                  refunded.</p>


                  <p>Once entirely refunded, a charge can’t be refunded again.

                  This method will raise an error when called on an
                  already-refunded charge,

                  or when trying to refund more money than is left on a
                  charge.</p>
                summary: Create Charge Refunds
                tags:
                  - Create
                  - Charge
                  - Refunds
                  - V1
                  - Charges
                  - Search
                  - Charge
                  - Capture
                  - Dispute
                  - Close
                  - Refund
                  - Refunds
            /v1/charges/{charge}/refunds/{refund}:
              get:
                description: <p>Retrieves the details of an existing refund.</p>
                summary: Retrieve Charge Refund
                tags:
                  - Retrieve
                  - Charge
                  - Refund
                  - V1
                  - Charges
                  - Search
                  - Charge
                  - Capture
                  - Dispute
                  - Close
                  - Refund
                  - Refunds
              post:
                description: <p>Update a specified refund.</p>
                summary: Update Charge Refund
                tags:
                  - Update
                  - Charge
                  - Refund
                  - V1
                  - Charges
                  - Search
                  - Charge
                  - Capture
                  - Dispute
                  - Close
                  - Refund
                  - Refunds
          tags:
            - name: Charges
              description: Needs a description.
            - name: Search
              description: Needs a description.
            - name: Capture
              description: Needs a description.
            - name: Dispute
              description: Needs a description.
            - name: Closed
              description: Needs a description.
            - name: Refunds
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/charges-openapi-search.yml
  - aid: stripe.com:checkout
    name: Stripe Checkout API
    description: >-
      Checkout is a low-code payment integration that creates a customizable
      form for collecting payments. You can embed Checkout directly in your
      website or redirect customers to a Stripe-hosted payment page. It supports
      one-time payments and subscriptions and accepts over 40 local payment
      methods.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/payments/checkout
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/payments/checkout
      - type: OpenAPI
        url: properties/checkout-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Checkout API
          paths:
            /v1/checkout/sessions:
              get:
                description: <p>Returns a list of Checkout Sessions.</p>
                summary: Retrieve Checkout Sessions
                tags:
                  - Retrieve
                  - Checkout
                  - Sessions
                  - V1
                  - Checkout
                  - Sessions
              post:
                description: <p>Creates a Session object.</p>
                summary: Create Checkout Session
                tags:
                  - Create
                  - Checkout
                  - Session
                  - V1
                  - Checkout
                  - Sessions
            /v1/checkout/sessions/{session}:
              get:
                description: <p>Retrieves a Session object.</p>
                summary: Retrieve Checkout Session
                tags:
                  - Retrieve
                  - Checkout
                  - Session
                  - V1
                  - Checkout
                  - Sessions
                  - Session
            /v1/checkout/sessions/{session}/expire:
              post:
                description: >-
                  <p>A Session can be expired when it is in one of these
                  statuses: <code>open</code> </p>


                  <p>After it expires, a customer can’t complete a Session and
                  customers loading the Session see a message saying the Session
                  is expired.</p>
                summary: Expire Checkout Session
                tags:
                  - Expire
                  - Checkout
                  - Session
                  - V1
                  - Checkout
                  - Sessions
                  - Session
                  - Expire
            /v1/checkout/sessions/{session}/line_items:
              get:
                description: >-
                  <p>When retrieving a Checkout Session, there is an includable
                  <strong>line_items</strong> property containing the first
                  handful of those items. There is also a URL where you can
                  retrieve the full (paginated) list of line items.</p>
                summary: Retrieve Checkout Session Line Items
                tags:
                  - Retrieve
                  - Checkout
                  - Session
                  - Line
                  - Items
                  - V1
                  - Checkout
                  - Sessions
                  - Session
                  - Expire
                  - Line_items
          tags:
            - name: Checkout
              description: Needs a description.
            - name: Sessions
              description: Needs a description.
            - name: Expires
              description: Needs a description.
            - name: Line
              description: Needs a description.
            - name: Items
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/checkout-openapi-search.yml
  - aid: stripe.com:climate
    name: Stripe Climate API
    description: >-
      Stripe Climate is the easiest way to help promising permanent carbon
      removal technologies launch and scale. Join a growing group of ambitious
      businesses that are changing the course of carbon removal.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/climate
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/climate
      - type: OpenAPI
        url: properties/climate-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Climate API
          paths:
            /v1/climate/orders:
              get:
                description: >-
                  <p>Lists all Climate order objects. The orders are returned
                  sorted by creation date, with the

                  most recently created orders appearing first.</p>
                summary: Retrieve Climate Orders
                tags:
                  - Retrieve
                  - Climate
                  - Orders
                  - V1
                  - Climate
                  - Orders
              post:
                description: >-
                  <p>Creates a Climate order object for a given Climate product.
                  The order will be processed immediately

                  after creation and payment will be deducted your Stripe
                  balance.</p>
                summary: Create Climate Order
                tags:
                  - Create
                  - Climate
                  - Order
                  - V1
                  - Climate
                  - Orders
            /v1/climate/orders/{order}:
              get:
                description: >-
                  <p>Retrieves the details of a Climate order object with the
                  given ID.</p>
                summary: Retrieve Climate Order
                tags:
                  - Retrieve
                  - Climate
                  - Order
                  - V1
                  - Climate
                  - Orders
                  - Order
              post:
                description: >-
                  <p>Updates the specified order by setting the values of the
                  parameters passed.</p>
                summary: Update Climate Order
                tags:
                  - Update
                  - Climate
                  - Order
                  - V1
                  - Climate
                  - Orders
                  - Order
            /v1/climate/orders/{order}/cancel:
              post:
                description: >-
                  <p>Cancels a Climate order. You can cancel an order within 30
                  days of creation. Stripe refunds the

                  reservation <code>amount_subtotal</code>, but not the
                  <code>amount_fees</code> for user-triggered cancellations.
                  Frontier

                  might cancel reservations if suppliers fail to deliver. If
                  Frontier cancels the reservation, Stripe

                  provides 90 days advance notice and refunds the
                  <code>amount_total</code>.</p>
                summary: Cancel Climate Order
                tags:
                  - Cancel
                  - Climate
                  - Order
                  - V1
                  - Climate
                  - Orders
                  - Order
                  - Cancel
            /v1/climate/products:
              get:
                description: <p>Lists all available Climate product objects.</p>
                summary: Retrieve Climate Products
                tags:
                  - Retrieve
                  - Climate
                  - Products
                  - V1
                  - Climate
                  - Orders
                  - Order
                  - Cancel
                  - Products
            /v1/climate/products/{product}:
              get:
                description: >-
                  <p>Retrieves the details of a Climate product with the given
                  ID.</p>
                summary: Retrieve Climate Product
                tags:
                  - Retrieve
                  - Climate
                  - Product
                  - V1
                  - Climate
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Product
            /v1/climate/reservations:
              get:
                description: >-
                  <p>Lists all Climate order objects. The orders are returned
                  sorted by creation date, with the

                  most recently created orders appearing first.</p>
                summary: Retrieve Climate Reservations
                tags:
                  - Retrieve
                  - Climate
                  - Reservations
                  - V1
                  - Climate
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Product
                  - Reservations
              post:
                description: >-
                  <p>Creates a Climate order object for a given Climate product.
                  The order will be processed immediately

                  after creation and payment will be deducted your Stripe
                  balance.</p>
                summary: Create Climate Reservations
                tags:
                  - Create
                  - Climate
                  - Reservations
                  - V1
                  - Climate
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Product
                  - Reservations
            /v1/climate/reservations/{order}:
              get:
                description: >-
                  <p>Retrieves the details of a Climate order object with the
                  given ID.</p>
                summary: Retrieve Climate Reservation
                tags:
                  - Retrieve
                  - Climate
                  - Reservation
                  - V1
                  - Climate
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Product
                  - Reservations
              post:
                description: >-
                  <p>Updates the specified order by setting the values of the
                  parameters passed.</p>
                summary: Update Climate Reservation
                tags:
                  - Update
                  - Climate
                  - Reservation
                  - V1
                  - Climate
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Product
                  - Reservations
            /v1/climate/reservations/{order}/cancel:
              post:
                description: >-
                  <p>Cancels a Climate order. You can cancel an order within 30
                  days of creation. Stripe refunds the

                  reservation <code>amount_subtotal</code>, but not the
                  <code>amount_fees</code> for user-triggered cancellations.
                  Frontier

                  might cancel reservations if suppliers fail to deliver. If
                  Frontier cancels the reservation, Stripe

                  provides 90 days advance notice and refunds the
                  <code>amount_total</code>.</p>
                summary: Cancel Climate Reservation
                tags:
                  - Cancel
                  - Climate
                  - Reservation
                  - V1
                  - Climate
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Product
                  - Reservations
            /v1/climate/reservations/{order}/confirm:
              post:
                description: >-
                  <p>Confirms a Climate order. When you confirm your order, we
                  immediately deduct the funds from your

                  Stripe balance.</p>
                summary: Confirm Climate Reservation
                tags:
                  - Confirm
                  - Climate
                  - Reservation
                  - V1
                  - Climate
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Product
                  - Reservations
                  - Confirm
            /v1/climate/suppliers:
              get:
                description: <p>Lists all available Climate supplier objects.</p>
                summary: Retrieve Climate Suppliers
                tags:
                  - Retrieve
                  - Climate
                  - Suppliers
                  - V1
                  - Climate
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Product
                  - Reservations
                  - Confirm
                  - Suppliers
            /v1/climate/suppliers/{supplier}:
              get:
                description: <p>Retrieves a Climate supplier object.</p>
                summary: Retrieve Climate Supplier
                tags:
                  - Retrieve
                  - Climate
                  - Supplier
                  - V1
                  - Climate
                  - Orders
                  - Order
                  - Cancel
                  - Products
                  - Product
                  - Reservations
                  - Confirm
                  - Suppliers
                  - Supplier
          tags:
            - name: Climate
              description: Needs a description.
            - name: Orders
              description: Needs a description.
            - name: Cancel
              description: Needs a description.
            - name: Products
              description: Needs a description.
            - name: Reservations
              description: Needs a description.
            - name: Confirm
              description: Needs a description.
            - name: Suppliers
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/climate-openapi-search.yml
  - aid: stripe.com:country
    name: Stripe Country API
    description: >-
      Stripe needs to collect certain pieces of information about each account
      created. These requirements can differ depending on the account’s country.
      The Country Specs API makes these rules available to your integration.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/country_specs
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/country_specs
      - type: OpenAPI
        url: properties/country-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Country API
          paths:
            /v1/country_specs:
              get:
                description: <p>Lists all Country Spec objects available in the API.</p>
                summary: Retrieve Countries
                tags:
                  - Retrieve
                  - Countries
                  - V1
                  - Country_specs
            /v1/country_specs/{country}:
              get:
                description: <p>Returns a Country Spec for a given Country code.</p>
                summary: Retrieve Country
                tags:
                  - Retrieve
                  - Country
                  - V1
                  - Country_specs
                  - Country
          tags:
            - name: Countries
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/country-openapi-search.yml
  - aid: stripe.com:coupons
    name: Stripe Coupons API
    description: >-
      A coupon contains information about a percent-off or amount-off discount
      you might want to apply to a customer. Coupons may be applied to
      subscriptions, invoices, checkout sessions, quotes, and more. Coupons do
      not work with conventional one-off charges or payment intents.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/coupons
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/coupons
      - type: OpenAPI
        url: properties/coupons-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Coupons API
          paths:
            /v1/coupons:
              get:
                description: <p>Returns a list of your coupons.</p>
                summary: Retrieve Coupons
                tags:
                  - Retrieve
                  - Coupons
                  - V1
                  - Coupons
              post:
                description: >-
                  <p>You can create coupons easily via the <a
                  href="https://dashboard.stripe.com/coupons">coupon
                  management</a> page of the Stripe dashboard. Coupon creation
                  is also accessible via the API if you need to create coupons
                  on the fly.</p>


                  <p>A coupon has either a <code>percent_off</code> or an
                  <code>amount_off</code> and <code>currency</code>. If you set
                  an <code>amount_off</code>, that amount will be subtracted
                  from any invoice’s subtotal. For example, an invoice with a
                  subtotal of <currency>100</currency> will have a final total
                  of <currency>0</currency> if a coupon with an
                  <code>amount_off</code> of <amount>200</amount> is applied to
                  it and an invoice with a subtotal of <currency>300</currency>
                  will have a final total of <currency>100</currency> if a
                  coupon with an <code>amount_off</code> of <amount>200</amount>
                  is applied to it.</p>
                summary: Create Coupon
                tags:
                  - Create
                  - Coupon
                  - V1
                  - Coupons
            /v1/coupons/{coupon}:
              delete:
                description: >-
                  <p>You can delete coupons via the <a
                  href="https://dashboard.stripe.com/coupons">coupon
                  management</a> page of the Stripe dashboard. However, deleting
                  a coupon does not affect any customers who have already
                  applied the coupon; it means that new customers can’t redeem
                  the coupon. You can also delete coupons via the API.</p>
                summary: Delet Coupon
                tags:
                  - Delet
                  - Coupon
                  - V1
                  - Coupons
                  - Coupon
              get:
                description: <p>Retrieves the coupon with the given ID.</p>
                summary: Retrieve Coupon
                tags:
                  - Retrieve
                  - Coupon
                  - V1
                  - Coupons
                  - Coupon
              post:
                description: >-
                  <p>Updates the metadata of a coupon. Other coupon details
                  (currency, duration, amount_off) are, by design, not
                  editable.</p>
                summary: Update Coupon
                tags:
                  - Update
                  - Coupon
                  - V1
                  - Coupons
                  - Coupon
          tags:
            - name: Coupons
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/coupons-openapi-search.yml
  - aid: stripe.com:credit-notes
    name: Stripe Credit Notes API
    description: >-
      Issue a credit note to adjust an invoice’s amount after the invoice is
      finalized.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/credit_notes
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/credit_notes
      - type: OpenAPI
        url: properties/credit-notes-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Credit Notes API
          paths:
            /v1/credit_notes:
              get:
                description: <p>Returns a list of credit notes.</p>
                summary: Retrieve Credit Notes
                tags:
                  - Retrieve
                  - Credit
                  - Notes
                  - V1
                  - Credit_notes
              post:
                description: >-
                  <p>Issue a credit note to adjust the amount of a finalized
                  invoice. For a <code>status=open</code> invoice, a credit note
                  reduces

                  its <code>amount_due</code>. For a <code>status=paid</code>
                  invoice, a credit note does not affect its
                  <code>amount_due</code>. Instead, it can result

                  in any combination of the following:</p>


                  <ul>

                  <li>Refund: create a new refund (using
                  <code>refund_amount</code>) or link an existing refund (using
                  <code>refund</code>).</li>

                  <li>Customer balance credit: credit the customer’s balance
                  (using <code>credit_amount</code>) which will be automatically
                  applied to their next invoice when it’s finalized.</li>

                  <li>Outside of Stripe credit: record the amount that is or
                  will be credited outside of Stripe (using
                  <code>out_of_band_amount</code>).</li>

                  </ul>


                  <p>For post-payment credit notes the sum of the refund, credit
                  and outside of Stripe amounts must equal the credit note
                  total.</p>


                  <p>You may issue multiple credit notes for an invoice. Each
                  credit note will increment the invoice’s
                  <code>pre_payment_credit_notes_amount</code>

                  or <code>post_payment_credit_notes_amount</code> depending on
                  its <code>status</code> at the time of credit note
                  creation.</p>
                summary: Create Credit Note
                tags:
                  - Create
                  - Credit
                  - Note
                  - V1
                  - Credit_notes
            /v1/credit_notes/preview:
              get:
                description: <p>Get a preview of a credit note without creating it.</p>
                summary: Retrieve Credit Note Preview
                tags:
                  - Retrieve
                  - Credit
                  - Note
                  - Preview
                  - V1
                  - Credit_notes
                  - Preview
            /v1/credit_notes/preview/lines:
              get:
                description: >-
                  <p>When retrieving a credit note preview, you’ll get a
                  <strong>lines</strong> property containing the first handful
                  of those items. This URL you can retrieve the full (paginated)
                  list of line items.</p>
                summary: Retrieve Credit Note Preview Lines
                tags:
                  - Retrieve
                  - Credit
                  - Note
                  - Preview
                  - Lines
                  - V1
                  - Credit_notes
                  - Preview
                  - Lines
            /v1/credit_notes/{credit_note}/lines:
              get:
                description: >-
                  <p>When retrieving a credit note, you’ll get a
                  <strong>lines</strong> property containing the the first
                  handful of those items. There is also a URL where you can
                  retrieve the full (paginated) list of line items.</p>
                summary: Retrieve Credit Note Lines
                tags:
                  - Retrieve
                  - Credit
                  - Note
                  - Lines
                  - V1
                  - Credit_notes
                  - Preview
                  - Lines
                  - Credit_note
            /v1/credit_notes/{id}:
              get:
                description: >-
                  <p>Retrieves the credit note object with the given
                  identifier.</p>
                summary: Retrieve Credit Note
                tags:
                  - Retrieve
                  - Credit
                  - Note
                  - V1
                  - Credit_notes
                  - Preview
                  - Lines
                  - Credit_note
                  - Id
              post:
                description: <p>Updates an existing credit note.</p>
                summary: Update Credit Note
                tags:
                  - Update
                  - Credit
                  - Note
                  - V1
                  - Credit_notes
                  - Preview
                  - Lines
                  - Credit_note
                  - Id
            /v1/credit_notes/{id}/void:
              post:
                description: >-
                  <p>Marks a credit note as void. Learn more about <a
                  href="/docs/billing/invoices/credit-notes#voiding">voiding
                  credit notes</a>.</p>
                summary: Void Credit Note
                tags:
                  - Void
                  - Credit
                  - Note
                  - V1
                  - Credit_notes
                  - Preview
                  - Lines
                  - Credit_note
                  - Id
                  - Void
          tags:
            - name: Credit
              description: Needs a description.
            - name: Notes
              description: Needs a description.
            - name: Preview
              description: Needs a description.
            - name: Lines
              description: Needs a description.
            - name: Void
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/credit-notes-openapi-search.yml
  - aid: stripe.com:customers
    name: Stripe Customers API
    description: >-
      This object represents a customer of your business. Use it to create
      recurring charges and track payments that belong to the same customer.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/customers
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/customers
      - type: OpenAPI
        url: properties/customers-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Customers API
          paths:
            /v1/customers:
              get:
                description: >-
                  <p>Returns a list of your customers. The customers are
                  returned sorted by creation date, with the most recent
                  customers appearing first.</p>
                summary: Retrieve Customers
                tags:
                  - Retrieve
                  - Customers
                  - V1
                  - Customers
              post:
                description: <p>Creates a new customer object.</p>
                summary: Create Customer
                tags:
                  - Create
                  - Customer
                  - V1
                  - Customers
            /v1/customers/search:
              get:
                description: >-
                  <p>Search for customers you’ve previously created using
                  Stripe’s <a href="/docs/search#search-query-language">Search
                  Query Language</a>.

                  Don’t use search in read-after-write flows where strict
                  consistency is necessary. Under normal operating

                  conditions, data is searchable in less than a minute.
                  Occasionally, propagation of new or updated data can be up

                  to an hour behind during outages. Search functionality is not
                  available to merchants in India.</p>
                summary: Search Customers
                tags:
                  - Search
                  - Customers
                  - V1
                  - Customers
                  - Search
            /v1/customers/{customer}:
              delete:
                description: >-
                  <p>Permanently deletes a customer. It cannot be undone. Also
                  immediately cancels any active subscriptions on the
                  customer.</p>
                summary: Delete Customer
                tags:
                  - Delete
                  - Customer
                  - V1
                  - Customers
                  - Search
                  - Customer
              get:
                description: <p>Retrieves a Customer object.</p>
                summary: Retrieve Customer
                tags:
                  - Retrieve
                  - Customer
                  - V1
                  - Customers
                  - Search
                  - Customer
              post:
                description: >-
                  <p>Updates the specified customer by setting the values of the
                  parameters passed. Any parameters not provided will be left
                  unchanged. For example, if you pass the
                  <strong>source</strong> parameter, that becomes the customer’s
                  active source (e.g., a card) to be used for all charges in the
                  future. When you update a customer to a new valid card source
                  by passing the <strong>source</strong> parameter: for each of
                  the customer’s current subscriptions, if the subscription
                  bills automatically and is in the <code>past_due</code> state,
                  then the latest open invoice for the subscription with
                  automatic collection enabled will be retried. This retry will
                  not count as an automatic retry, and will not affect the next
                  regularly scheduled payment for the invoice. Changing the
                  <strong>default_source</strong> for a customer will not
                  trigger this behavior.</p>


                  <p>This request accepts mostly the same arguments as the
                  customer creation call.</p>
                summary: Update Customer
                tags:
                  - Update
                  - Customer
                  - V1
                  - Customers
                  - Search
                  - Customer
            /v1/customers/{customer}/balance_transactions:
              get:
                description: >-
                  <p>Returns a list of transactions that updated the customer’s
                  <a href="/docs/billing/customer/balance">balances</a>.</p>
                summary: Retrieve Customer Transactions
                tags:
                  - Retrieve
                  - Customer
                  - Transactions
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
              post:
                description: >-
                  <p>Creates an immutable transaction that updates the
                  customer’s credit <a
                  href="/docs/billing/customer/balance">balance</a>.</p>
                summary: Create Customer Transaction
                tags:
                  - Create
                  - Customer
                  - Transaction
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
            /v1/customers/{customer}/balance_transactions/{transaction}:
              get:
                description: >-
                  <p>Retrieves a specific customer balance transaction that
                  updated the customer’s <a
                  href="/docs/billing/customer/balance">balances</a>.</p>
                summary: Retrieve Customer Transaction
                tags:
                  - Retrieve
                  - Customer
                  - Transaction
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
              post:
                description: >-
                  <p>Most credit balance transaction fields are immutable, but
                  you may update its <code>description</code> and
                  <code>metadata</code>.</p>
                summary: Update Customer Transaction
                tags:
                  - Update
                  - Customer
                  - Transaction
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
            /v1/customers/{customer}/bank_accounts:
              get:
                deprecated: true
                description: >-
                  <p>You can see a list of the bank accounts belonging to a
                  Customer. Note that the 10 most recent sources are always
                  available by default on the Customer. If you need more than
                  those 10, you can use this API method and the
                  <code>limit</code> and <code>starting_after</code> parameters
                  to page through additional bank accounts.</p>
                summary: Retrieve Customer Bank Accounts
                tags:
                  - Retrieve
                  - Customer
                  - Bank
                  - Accounts
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
              post:
                description: >-
                  <p>When you create a new credit card, you must specify a
                  customer or recipient on which to create it.</p>


                  <p>If the card’s owner has no default card, then the new card
                  will become the default.

                  However, if the owner already has a default, then it will not
                  change.

                  To change the default, you should <a
                  href="/docs/api#update_customer">update the customer</a> to
                  have a new <code>default_source</code>.</p>
                summary: Create Customer Bank Account
                tags:
                  - Create
                  - Customer
                  - Bank
                  - Account
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
            /v1/customers/{customer}/bank_accounts/{id}:
              delete:
                description: <p>Delete a specified source for a given customer.</p>
                summary: Delete Customer Bank Account
                tags:
                  - Delete
                  - Customer
                  - Bank
                  - Account
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
              get:
                deprecated: true
                description: >-
                  <p>By default, you can see the 10 most recent sources stored
                  on a Customer directly on the object, but you can also
                  retrieve details about a specific bank account stored on the
                  Stripe account.</p>
                summary: Retrieve Customer Bank Account
                tags:
                  - Retrieve
                  - Customer
                  - Bank
                  - Account
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
              post:
                description: <p>Update a specified source for a given customer.</p>
                summary: Update Customer Bank Account
                tags:
                  - Update
                  - Customer
                  - Bank
                  - Account
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
            /v1/customers/{customer}/bank_accounts/{id}/verify:
              post:
                description: <p>Verify a specified bank account for a given customer.</p>
                summary: Verify Customer Bank Account
                tags:
                  - Verify
                  - Customer
                  - Bank
                  - Account
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
            /v1/customers/{customer}/cards:
              get:
                deprecated: true
                description: >-
                  <p>You can see a list of the cards belonging to a customer.

                  Note that the 10 most recent sources are always available on
                  the <code>Customer</code> object.

                  If you need more than those 10, you can use this API method
                  and the <code>limit</code> and <code>starting_after</code>
                  parameters to page through additional cards.</p>
                summary: Retrieve Customer Cards
                tags:
                  - Retrieve
                  - Customer
                  - Cards
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
              post:
                description: >-
                  <p>When you create a new credit card, you must specify a
                  customer or recipient on which to create it.</p>


                  <p>If the card’s owner has no default card, then the new card
                  will become the default.

                  However, if the owner already has a default, then it will not
                  change.

                  To change the default, you should <a
                  href="/docs/api#update_customer">update the customer</a> to
                  have a new <code>default_source</code>.</p>
                summary: Create Customer Card
                tags:
                  - Create
                  - Customer
                  - Card
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
            /v1/customers/{customer}/cards/{id}:
              delete:
                description: <p>Delete a specified source for a given customer.</p>
                summary: Delete Customer Card
                tags:
                  - Delete
                  - Customer
                  - Card
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
              get:
                deprecated: true
                description: >-
                  <p>You can always see the 10 most recent cards directly on a
                  customer; this method lets you retrieve details about a
                  specific card stored on the customer.</p>
                summary: Retrieve Customer Card
                tags:
                  - Retrieve
                  - Customer
                  - Card
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
              post:
                description: <p>Update a specified source for a given customer.</p>
                summary: Update Customer Card
                tags:
                  - Update
                  - Customer
                  - Card
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
            /v1/customers/{customer}/cash_balance:
              get:
                description: <p>Retrieves a customer’s cash balance.</p>
                summary: Retrieve Customer Cash Balance
                tags:
                  - Retrieve
                  - Customer
                  - Cash
                  - Balance
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
              post:
                description: <p>Changes the settings on a customer’s cash balance.</p>
                summary: Update Customer Cash Balance
                tags:
                  - Update
                  - Customer
                  - Cash
                  - Balance
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
            /v1/customers/{customer}/cash_balance_transactions:
              get:
                description: >-
                  <p>Returns a list of transactions that modified the customer’s
                  <a href="/docs/payments/customer-balance">cash
                  balance</a>.</p>
                summary: Retrieve Customer Cash Balance Transactions
                tags:
                  - Retrieve
                  - Customer
                  - Cash
                  - Balance
                  - Transactions
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
            /v1/customers/{customer}/cash_balance_transactions/{transaction}:
              get:
                description: >-
                  <p>Retrieves a specific cash balance transaction, which
                  updated the customer’s <a
                  href="/docs/payments/customer-balance">cash balance</a>.</p>
                summary: Retrieve Customer Cash Balance Transaction
                tags:
                  - Retrieve
                  - Customer
                  - Cash
                  - Balance
                  - Transaction
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
            /v1/customers/{customer}/discount:
              delete:
                description: <p>Removes the currently applied discount on a customer.</p>
                summary: Delete Customer Discount
                tags:
                  - Delete
                  - Customer
                  - Discount
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
              get:
                description: ''
                summary: Retrieve Customer Discount
                tags:
                  - Retrieve
                  - Customer
                  - Discount
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
            /v1/customers/{customer}/funding_instructions:
              post:
                description: >-
                  <p>Retrieve funding instructions for a customer cash balance.
                  If funding instructions do not yet exist for the customer, new

                  funding instructions will be created. If funding instructions
                  have already been created for a given customer, the same

                  funding instructions will be retrieved. In other words, we
                  will return the same funding instructions each time.</p>
                summary: Retrieve Customer Funding Instructions
                tags:
                  - Retrieve
                  - Customer
                  - Funding
                  - Instructions
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
            /v1/customers/{customer}/payment_methods:
              get:
                description: <p>Returns a list of PaymentMethods for a given Customer</p>
                summary: Retrieve Customer Payment Methods
                tags:
                  - Retrieve
                  - Customer
                  - Payment
                  - Methods
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
            /v1/customers/{customer}/payment_methods/{payment_method}:
              get:
                description: <p>Retrieves a PaymentMethod object for a given Customer.</p>
                summary: Retrieve Customer Payment Method
                tags:
                  - Retrieve
                  - Customer
                  - Payment
                  - Method
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
            /v1/customers/{customer}/sources:
              get:
                description: <p>List sources for a specified customer.</p>
                summary: Retrieve Customer Sources
                tags:
                  - Retrieve
                  - Customer
                  - Sources
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
              post:
                description: >-
                  <p>When you create a new credit card, you must specify a
                  customer or recipient on which to create it.</p>


                  <p>If the card’s owner has no default card, then the new card
                  will become the default.

                  However, if the owner already has a default, then it will not
                  change.

                  To change the default, you should <a
                  href="/docs/api#update_customer">update the customer</a> to
                  have a new <code>default_source</code>.</p>
                summary: Create Customer Sources
                tags:
                  - Create
                  - Customer
                  - Sources
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
            /v1/customers/{customer}/sources/{id}:
              delete:
                description: <p>Delete a specified source for a given customer.</p>
                summary: Delete Customer Source
                tags:
                  - Delete
                  - Customer
                  - Source
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
              get:
                description: <p>Retrieve a specified source for a given customer.</p>
                summary: Retrieve Customer Source
                tags:
                  - Retrieve
                  - Customer
                  - Source
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
              post:
                description: <p>Update a specified source for a given customer.</p>
                summary: Update Customer Source
                tags:
                  - Update
                  - Customer
                  - Source
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
            /v1/customers/{customer}/sources/{id}/verify:
              post:
                description: <p>Verify a specified bank account for a given customer.</p>
                summary: Verify Customer Source
                tags:
                  - Verify
                  - Customer
                  - Source
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
            /v1/customers/{customer}/subscriptions:
              get:
                description: >-
                  <p>You can see a list of the customer’s active subscriptions.
                  Note that the 10 most recent active subscriptions are always
                  available by default on the customer object. If you need more
                  than those 10, you can use the limit and starting_after
                  parameters to page through additional subscriptions.</p>
                summary: Retrieve Customer Subscriptions
                tags:
                  - Retrieve
                  - Customer
                  - Subscriptions
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
                  - Subscriptions
              post:
                description: <p>Creates a new subscription on an existing customer.</p>
                summary: Retrieve Customer Subscription
                tags:
                  - Retrieve
                  - Customer
                  - Subscription
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
                  - Subscriptions
            /v1/customers/{customer}/subscriptions/{subscription_exposed_id}:
              delete:
                description: >-
                  <p>Cancels a customer’s subscription. If you set the
                  <code>at_period_end</code> parameter to <code>true</code>, the
                  subscription will remain active until the end of the period,
                  at which point it will be canceled and not renewed. Otherwise,
                  with the default <code>false</code> value, the subscription is
                  terminated immediately. In either case, the customer will not
                  be charged again for the subscription.</p>


                  <p>Note, however, that any pending invoice items that you’ve
                  created will still be charged for at the end of the period,
                  unless manually <a href="#delete_invoiceitem">deleted</a>. If
                  you’ve set the subscription to cancel at the end of the
                  period, any pending prorations will also be left in place and
                  collected at the end of the period. But if the subscription is
                  set to cancel immediately, pending prorations will be
                  removed.</p>


                  <p>By default, upon subscription cancellation, Stripe will
                  stop automatic collection of all finalized invoices for the
                  customer. This is intended to prevent unexpected payment
                  attempts after the customer has canceled a subscription.
                  However, you can resume automatic collection of the invoices
                  manually after subscription cancellation to have us proceed.
                  Or, you could check for unpaid invoices before allowing the
                  customer to cancel the subscription at all.</p>
                summary: Delete Customer Subscription
                tags:
                  - Delete
                  - Customer
                  - Subscription
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
                  - Subscriptions
                  - Subscription_exposed_id
              get:
                description: <p>Retrieves the subscription with the given ID.</p>
                summary: Retrieve Customer Subscription
                tags:
                  - Retrieve
                  - Customer
                  - Subscription
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
                  - Subscriptions
                  - Subscription_exposed_id
              post:
                description: >-
                  <p>Updates an existing subscription on a customer to match the
                  specified parameters. When changing plans or quantities, we
                  will optionally prorate the price we charge next month to make
                  up for any price changes. To preview how the proration will be
                  calculated, use the <a href="#upcoming_invoice">upcoming
                  invoice</a> endpoint.</p>
                summary: Update Customer Subscription
                tags:
                  - Update
                  - Customer
                  - Subscription
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
                  - Subscriptions
                  - Subscription_exposed_id
            /v1/customers/{customer}/subscriptions/{subscription_exposed_id}/discount:
              delete:
                description: <p>Removes the currently applied discount on a customer.</p>
                summary: Delete Customer Subscription Discount
                tags:
                  - Delete
                  - Customer
                  - Subscription
                  - Discount
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
                  - Subscriptions
                  - Subscription_exposed_id
              get:
                description: ''
                summary: Retrieve Customer Subscription Discount
                tags:
                  - Retrieve
                  - Customer
                  - Subscription
                  - Discount
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
                  - Subscriptions
                  - Subscription_exposed_id
            /v1/customers/{customer}/tax_ids:
              get:
                description: <p>Returns a list of tax IDs for a customer.</p>
                summary: Retrieve Customer Tax IDs
                tags:
                  - Retrieve
                  - Customer
                  - Tax
                  - Ds
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
                  - Subscriptions
                  - Subscription_exposed_id
                  - Tax_ids
              post:
                description: >-
                  <p>Creates a new <code>tax_id</code> object for a
                  customer.</p>
                summary: Create Customer Tax ID
                tags:
                  - Create
                  - Customer
                  - Tax
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
                  - Subscriptions
                  - Subscription_exposed_id
                  - Tax_ids
            /v1/customers/{customer}/tax_ids/{id}:
              delete:
                description: <p>Deletes an existing <code>tax_id</code> object.</p>
                summary: Delete Customer Tax ID
                tags:
                  - Delete
                  - Customer
                  - Tax
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
                  - Subscriptions
                  - Subscription_exposed_id
                  - Tax_ids
              get:
                description: >-
                  <p>Retrieves the <code>tax_id</code> object with the given
                  identifier.</p>
                summary: Retrieve Customer Tax ID
                tags:
                  - Retrieve
                  - Customer
                  - Tax
                  - V1
                  - Customers
                  - Search
                  - Customer
                  - Balance_transactions
                  - Transaction
                  - Bank_accounts
                  - Id
                  - Verify
                  - Cards
                  - Cash_balance
                  - Cash_balance_transactions
                  - Discount
                  - Funding_instructions
                  - Payment_methods
                  - Payment_method
                  - Sources
                  - Subscriptions
                  - Subscription_exposed_id
                  - Tax_ids
          tags:
            - name: Customers
              description: Needs a description.
            - name: Search
              description: Needs a description.
            - name: Transactions
              description: Needs a description.
            - name: Bank
              description: Needs a description.
            - name: Accounts
              description: Needs a description.
            - name: Verify
              description: Needs a description.
            - name: Cards
              description: Needs a description.
            - name: Cash
              description: Needs a description.
            - name: Balances
              description: Needs a description.
            - name: Discounts
              description: Needs a description.
            - name: Funding
              description: Needs a description.
            - name: Instructions
              description: Needs a description.
            - name: Payments
              description: Needs a description.
            - name: Methods
              description: Needs a description.
            - name: Sources
              description: Needs a description.
            - name: Subscriptions
              description: Needs a description.
            - name: Discount
              description: Needs a description.
            - name: Taxes
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/customers-openapi-search.yml
  - aid: stripe.com:disputes
    name: Stripe Disputes API
    description: >-
      A dispute occurs when a customer questions your charge with their card
      issuer. When this happens, you have the opportunity to respond to the
      dispute with evidence that shows that the charge is legitimate.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/disputes
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/disputes
      - type: OpenAPI
        url: properties/disputes-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Disputes API
          paths:
            /v1/disputes:
              get:
                description: <p>Returns a list of your disputes.</p>
                summary: Retrieve Disputes
                tags:
                  - Retrieve
                  - Disputes
                  - V1
                  - Disputes
            /v1/disputes/{dispute}:
              get:
                description: <p>Retrieves the dispute with the given ID.</p>
                summary: Retrieve Dispute
                tags:
                  - Retrieve
                  - Dispute
                  - V1
                  - Disputes
                  - Dispute
              post:
                description: >-
                  <p>When you get a dispute, contacting your customer is always
                  the best first step. If that doesn’t work, you can submit
                  evidence to help us resolve the dispute in your favor. You can
                  do this in your <a
                  href="https://dashboard.stripe.com/disputes">dashboard</a>,
                  but if you prefer, you can use the API to submit evidence
                  programmatically.</p>


                  <p>Depending on your dispute type, different evidence fields
                  will give you a better chance of winning your dispute. To
                  figure out which evidence fields to provide, see our <a
                  href="/docs/disputes/categories">guide to dispute
                  types</a>.</p>
                summary: Update Dispute
                tags:
                  - Update
                  - Dispute
                  - V1
                  - Disputes
                  - Dispute
            /v1/disputes/{dispute}/close:
              post:
                description: >-
                  <p>Closing the dispute for a charge indicates that you do not
                  have any evidence to submit and are essentially dismissing the
                  dispute, acknowledging it as lost.</p>


                  <p>The status of the dispute will change from
                  <code>needs_response</code> to <code>lost</code>. <em>Closing
                  a dispute is irreversible</em>.</p>
                summary: Close Dispute
                tags:
                  - Close
                  - Dispute
                  - V1
                  - Disputes
                  - Dispute
                  - Close
          tags:
            - name: Disputes
              description: Needs a description.
            - name: Closed
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/disputes-openapi-search.yml
  - aid: stripe.com:ephemeral-keys
    name: Stripe Ephemeral Keys API
    description: >-
      Stripe.js uses ephemeral keys to securely retrieve Card information from
      the Stripe API without publicly exposing your secret keys. You need to do
      some of the ephemeral key exchange on the server-side to set this up.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/issuing/elements
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/issuing/elements
      - type: OpenAPI
        url: properties/ephemeral-keys-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Ephemeral Keys API
          paths:
            /v1/ephemeral_keys:
              post:
                description: <p>Creates a short-lived API key for a given resource.</p>
                summary: Create Ephemeral Key
                tags:
                  - Create
                  - Ephemeral
                  - Key
                  - V1
                  - Ephemeral_keys
            /v1/ephemeral_keys/{key}:
              delete:
                description: <p>Invalidates a short-lived API key for a given resource.</p>
                summary: Delete Ephemeral Key
                tags:
                  - Delete
                  - Ephemeral
                  - Key
                  - V1
                  - Ephemeral_keys
                  - Key
          tags:
            - name: Ephemeral
              description: Needs a description.
            - name: Keys
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/ephemeral-keys-openapi-search.yml
  - aid: stripe.com:events
    name: Stripe Events API
    description: >-
      Events are our way of letting you know when something interesting happens
      in your account. When an interesting event occurs, we create a new Event
      object.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/events
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/events
      - type: OpenAPI
        url: properties/events-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Events API
          paths:
            /v1/events:
              get:
                description: >-
                  <p>List events, going back up to 30 days. Each event data is
                  rendered according to Stripe API version at its creation time,
                  specified in <a href="/docs/api/events/object">event
                  object</a> <code>api_version</code> attribute (not according
                  to your current Stripe API version or
                  <code>Stripe-Version</code> header).</p>
                summary: Retrieve Events
                tags:
                  - Retrieve
                  - Events
                  - V1
                  - Events
            /v1/events/{id}:
              get:
                description: >-
                  <p>Retrieves the details of an event. Supply the unique
                  identifier of the event, which you might have received in a
                  webhook.</p>
                summary: Retrieve Event
                tags:
                  - Retrieve
                  - Event
                  - V1
                  - Events
                  - Id
          tags:
            - name: Events
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/events-openapi-search.yml
  - aid: stripe.com:exchange-rates
    name: Stripe Exchange Rates API
    description: >-
      Stripe supports processing charges in 135+ currencies allowing you to
      present prices in a customer’s native currency. Doing so can improve sales
      and help customers avoid conversion costs. In order to present prices in
      your customer’s currency, you need to specify the presentment currency
      when creating a PaymentIntent or a charge.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/currencies/conversions
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/currencies/conversions
      - type: OpenAPI
        url: properties/exchange-rates-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Exchange Rates API
          paths:
            /v1/exchange_rates:
              get:
                description: >-
                  <p>Returns a list of objects that contain the rates at which
                  foreign currencies are converted to one another. Only shows
                  the currencies for which Stripe supports.</p>
                summary: Retrieve Exchange Rates
                tags:
                  - Retrieve
                  - Exchange
                  - Rates
                  - V1
                  - Exchange_rates
            /v1/exchange_rates/{rate_id}:
              get:
                description: >-
                  <p>Retrieves the exchange rates from the given currency to
                  every supported currency.</p>
                summary: Retrieve Exchange Rate
                tags:
                  - Retrieve
                  - Exchange
                  - Rate
                  - V1
                  - Exchange_rates
                  - Rate_id
          tags:
            - name: Exchanges
              description: Needs a description.
            - name: Rates
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/exchange-rates-openapi-search.yml
  - aid: stripe.com:files
    name: Stripe Files API
    description: >-
      This object represents files hosted on Stripe’s servers. You can upload
      files with the create file request (for example, when uploading dispute
      evidence). Stripe also creates files independently (for example, the
      results of a Sigma scheduled query).
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/files
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/files
      - type: OpenAPI
        url: properties/files-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Files API
          paths:
            /v1/files:
              get:
                description: >-
                  <p>Returns a list of the files that your account has access
                  to. Stripe sorts and returns the files by their creation
                  dates, placing the most recently created files at the top.</p>
                summary: Retrieve Files
                tags:
                  - Retrieve
                  - Files
                  - V1
                  - Files
              post:
                description: >-
                  <p>To upload a file to Stripe, you need to send a request of
                  type <code>multipart/form-data</code>. Include the file you
                  want to upload in the request, and the parameters for creating
                  a file.</p>


                  <p>All of Stripe’s officially supported Client libraries
                  support sending <code>multipart/form-data</code>.</p>
                servers:
                  - url: https://files.stripe.com/
                summary: Create File
                tags:
                  - Create
                  - File
                  - V1
                  - Files
            /v1/files/{file}:
              get:
                description: >-
                  <p>Retrieves the details of an existing file object. After you
                  supply a unique file ID, Stripe returns the corresponding file
                  object. Learn how to <a
                  href="/docs/file-upload#download-file-contents">access file
                  contents</a>.</p>
                summary: Retrieve File
                tags:
                  - Retrieve
                  - File
                  - V1
                  - Files
                  - File
          tags:
            - name: Files
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/files-openapi-search.yml
  - aid: stripe.com:financial-connections
    name: Stripe Financial Connections API
    description: >-
      Financial Connections lets your users securely share their financial data
      by linking their financial accounts to your business. Use Financial
      Connections to access user-permissioned account data such as tokenized
      account and routing numbers, balances, ownerships details, and
      transactions.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/financial-connections
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/financial-connections
      - type: OpenAPI
        url: properties/financial-connections-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Financial Connections API
          paths:
            /v1/financial_connections/accounts:
              get:
                description: >-
                  <p>Returns a list of Financial Connections
                  <code>Account</code> objects.</p>
                summary: Retrieve Financial Connection Accounts
                tags:
                  - Retrieve
                  - Financial
                  - Connection
                  - Accounts
                  - V1
                  - Financial_connections
                  - Accounts
            /v1/financial_connections/accounts/{account}:
              get:
                description: >-
                  <p>Retrieves the details of an Financial Connections
                  <code>Account</code>.</p>
                summary: Retrieve Financial Connection Account
                tags:
                  - Retrieve
                  - Financial
                  - Connection
                  - Account
                  - V1
                  - Financial_connections
                  - Accounts
                  - Account
            /v1/financial_connections/accounts/{account}/disconnect:
              post:
                description: >-
                  <p>Disables your access to a Financial Connections
                  <code>Account</code>. You will no longer be able to access
                  data associated with the account (e.g. balances,
                  transactions).</p>
                summary: Disconnect Financial Connection Account
                tags:
                  - Disconnect
                  - Financial
                  - Connection
                  - Account
                  - V1
                  - Financial_connections
                  - Accounts
                  - Account
                  - Disconnect
            /v1/financial_connections/accounts/{account}/owners:
              get:
                description: <p>Lists all owners for a given <code>Account</code></p>
                summary: Retrieve Financial Connection Accounts Owners
                tags:
                  - Retrieve
                  - Financial
                  - Connection
                  - Accounts
                  - Owners
                  - V1
                  - Financial_connections
                  - Accounts
                  - Account
                  - Disconnect
                  - Owners
            /v1/financial_connections/accounts/{account}/refresh:
              post:
                description: >-
                  <p>Refreshes the data associated with a Financial Connections
                  <code>Account</code>.</p>
                summary: Refresh Financial Connection Account
                tags:
                  - Refresh
                  - Financial
                  - Connection
                  - Account
                  - V1
                  - Financial_connections
                  - Accounts
                  - Account
                  - Disconnect
                  - Owners
                  - Refresh
            /v1/financial_connections/accounts/{account}/subscribe:
              post:
                description: >-
                  <p>Subscribes to periodic refreshes of data associated with a
                  Financial Connections <code>Account</code>.</p>
                summary: Subscribe to Financial Connection Account
                tags:
                  - Subscribe
                  - To
                  - Financial
                  - Connection
                  - Account
                  - V1
                  - Financial_connections
                  - Accounts
                  - Account
                  - Disconnect
                  - Owners
                  - Refresh
                  - Subscribe
            /v1/financial_connections/accounts/{account}/unsubscribe:
              post:
                description: >-
                  <p>Unsubscribes from periodic refreshes of data associated
                  with a Financial Connections <code>Account</code>.</p>
                summary: Unsubscribe to Financial Connection Account
                tags:
                  - Unsubscribe
                  - To
                  - Financial
                  - Connection
                  - Account
                  - V1
                  - Financial_connections
                  - Accounts
                  - Account
                  - Disconnect
                  - Owners
                  - Refresh
                  - Subscribe
                  - Unsubscribe
            /v1/financial_connections/sessions:
              post:
                description: >-
                  <p>To launch the Financial Connections authorization flow,
                  create a <code>Session</code>. The session’s
                  <code>client_secret</code> can be used to launch the flow
                  using Stripe.js.</p>
                summary: Launch Financial Connection Session
                tags:
                  - Launch
                  - Financial
                  - Connection
                  - Session
                  - V1
                  - Financial_connections
                  - Accounts
                  - Account
                  - Disconnect
                  - Owners
                  - Refresh
                  - Subscribe
                  - Unsubscribe
                  - Sessions
            /v1/financial_connections/sessions/{session}:
              get:
                description: >-
                  <p>Retrieves the details of a Financial Connections
                  <code>Session</code></p>
                summary: Retrieve Financial Connection Session
                tags:
                  - Retrieve
                  - Financial
                  - Connection
                  - Session
                  - V1
                  - Financial_connections
                  - Accounts
                  - Account
                  - Disconnect
                  - Owners
                  - Refresh
                  - Subscribe
                  - Unsubscribe
                  - Sessions
                  - Session
            /v1/financial_connections/transactions:
              get:
                description: >-
                  <p>Returns a list of Financial Connections
                  <code>Transaction</code> objects.</p>
                summary: Retrieve Financial Connection Transactions
                tags:
                  - Retrieve
                  - Financial
                  - Connection
                  - Transactions
                  - V1
                  - Financial_connections
                  - Accounts
                  - Account
                  - Disconnect
                  - Owners
                  - Refresh
                  - Subscribe
                  - Unsubscribe
                  - Sessions
                  - Session
                  - Transactions
            /v1/financial_connections/transactions/{transaction}:
              get:
                description: >-
                  <p>Retrieves the details of a Financial Connections
                  <code>Transaction</code></p>
                summary: Retrieve Financial Connection Transaction
                tags:
                  - Retrieve
                  - Financial
                  - Connection
                  - Transaction
                  - V1
                  - Financial_connections
                  - Accounts
                  - Account
                  - Disconnect
                  - Owners
                  - Refresh
                  - Subscribe
                  - Unsubscribe
                  - Sessions
                  - Session
                  - Transactions
                  - Transaction
          tags:
            - name: ''
              description: Needs a description.
            - name: Financial
              description: Needs a description.
            - name: Connections
              description: Needs a description.
            - name: Accounts
              description: Needs a description.
            - name: Disconnect
              description: Needs a description.
            - name: Owners
              description: Needs a description.
            - name: Refresh
              description: Needs a description.
            - name: Subscriptions
              description: Needs a description.
            - name: Sessions
              description: Needs a description.
            - name: Transactions
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/financial-connections-openapi-search.yml
  - aid: stripe.com:identity
    name: Stripe Identity API
    description: >-
      Use Stripe Identity to confirm the identity of global users to prevent
      fraud, streamline risk operations, and increase trust and safety.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/identity
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/identity
      - type: OpenAPI
        url: properties/identity-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Identity API
          paths:
            /v1/identity/verification_reports:
              get:
                description: <p>List all verification reports.</p>
                summary: Retrieve Verification Reports
                tags:
                  - Retrieve
                  - Verification
                  - Reports
                  - V1
                  - Identity
                  - Verification_reports
            /v1/identity/verification_reports/{report}:
              get:
                description: <p>Retrieves an existing VerificationReport</p>
                summary: Retrieve Verification Report
                tags:
                  - Retrieve
                  - Verification
                  - Report
                  - V1
                  - Identity
                  - Verification_reports
                  - Report
            /v1/identity/verification_sessions:
              get:
                description: <p>Returns a list of VerificationSessions</p>
                summary: Retrieve Verification Sessions
                tags:
                  - Retrieve
                  - Verification
                  - Sessions
                  - V1
                  - Identity
                  - Verification_reports
                  - Report
                  - Verification_sessions
              post:
                description: >-
                  <p>Creates a VerificationSession object.</p>


                  <p>After the VerificationSession is created, display a
                  verification modal using the session
                  <code>client_secret</code> or send your users to the session’s
                  <code>url</code>.</p>


                  <p>If your API key is in test mode, verification checks won’t
                  actually process, though everything else will occur as if in
                  live mode.</p>


                  <p>Related guide: <a
                  href="/docs/identity/verify-identity-documents">Verify your
                  users’ identity documents</a></p>
                summary: Create Verification Sessions
                tags:
                  - Create
                  - Verification
                  - Sessions
                  - V1
                  - Identity
                  - Verification_reports
                  - Report
                  - Verification_sessions
            /v1/identity/verification_sessions/{session}:
              get:
                description: >-
                  <p>Retrieves the details of a VerificationSession that was
                  previously created.</p>


                  <p>When the session status is <code>requires_input</code>, you
                  can use this method to retrieve a valid

                  <code>client_secret</code> or <code>url</code> to allow
                  re-submission.</p>
                summary: Retrieve Verification Session
                tags:
                  - Retrieve
                  - Verification
                  - Session
                  - V1
                  - Identity
                  - Verification_reports
                  - Report
                  - Verification_sessions
                  - Session
              post:
                description: >-
                  <p>Updates a VerificationSession object.</p>


                  <p>When the session status is <code>requires_input</code>, you
                  can use this method to update the

                  verification check and options.</p>
                summary: Update Verification Session
                tags:
                  - Update
                  - Verification
                  - Session
                  - V1
                  - Identity
                  - Verification_reports
                  - Report
                  - Verification_sessions
                  - Session
            /v1/identity/verification_sessions/{session}/cancel:
              post:
                description: >-
                  <p>A VerificationSession object can be canceled when it is in
                  <code>requires_input</code> <a
                  href="/docs/identity/how-sessions-work">status</a>.</p>


                  <p>Once canceled, future submission attempts are disabled.
                  This cannot be undone. <a
                  href="/docs/identity/verification-sessions#cancel">Learn
                  more</a>.</p>
                summary: Cancel Verification Session
                tags:
                  - Cancel
                  - Verification
                  - Session
                  - V1
                  - Identity
                  - Verification_reports
                  - Report
                  - Verification_sessions
                  - Session
                  - Cancel
            /v1/identity/verification_sessions/{session}/redact:
              post:
                description: >-
                  <p>Redact a VerificationSession to remove all collected
                  information from Stripe. This will redact

                  the VerificationSession and all objects related to it,
                  including VerificationReports, Events,

                  request logs, etc.</p>


                  <p>A VerificationSession object can be redacted when it is in
                  <code>requires_input</code> or <code>verified</code>

                  <a href="/docs/identity/how-sessions-work">status</a>.
                  Redacting a VerificationSession in
                  <code>requires_action</code>

                  state will automatically cancel it.</p>


                  <p>The redaction process may take up to four days. When the
                  redaction process is in progress, the

                  VerificationSession’s <code>redaction.status</code> field will
                  be set to <code>processing</code>; when the process is

                  finished, it will change to <code>redacted</code> and an
                  <code>identity.verification_session.redacted</code> event

                  will be emitted.</p>


                  <p>Redaction is irreversible. Redacted objects are still
                  accessible in the Stripe API, but all the

                  fields that contain personal data will be replaced by the
                  string <code>[redacted]</code> or a similar

                  placeholder. The <code>metadata</code> field will also be
                  erased. Redacted objects cannot be updated or

                  used for any purpose.</p>


                  <p><a href="/docs/identity/verification-sessions#redact">Learn
                  more</a>.</p>
                summary: Redact Verification Session
                tags:
                  - Redact
                  - Verification
                  - Session
                  - V1
                  - Identity
                  - Verification_reports
                  - Report
                  - Verification_sessions
                  - Session
                  - Cancel
                  - Redact
          tags:
            - name: Identity
              description: Needs a description.
            - name: Verification
              description: Needs a description.
            - name: Reports
              description: Needs a description.
            - name: Sessions
              description: Needs a description.
            - name: Cancel
              description: Needs a description.
            - name: Redact
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/identity-openapi-search.yml
  - aid: stripe.com:invoice
    name: Stripe Invoice API
    description: >-
      Invoices are statements of amounts owed by a customer, and are either
      generated one-off, or generated periodically from a subscription.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/invoices
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/invoices
      - type: OpenAPI
        url: properties/invoice-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Invoice API
          paths:
            /v1/invoiceitems:
              get:
                description: >-
                  <p>Returns a list of your invoice items. Invoice items are
                  returned sorted by creation date, with the most recently
                  created invoice items appearing first.</p>
                summary: Retrieve Invoice Items
                tags:
                  - Retrieve
                  - Invoice
                  - Items
                  - V1
                  - Invoiceitems
              post:
                description: >-
                  <p>Creates an item to be added to a draft invoice (up to 250
                  items per invoice). If no invoice is specified, the item will
                  be on the next invoice created for the customer specified.</p>
                summary: Create Invoice Item
                tags:
                  - Create
                  - Invoice
                  - Item
                  - V1
                  - Invoiceitems
            /v1/invoiceitems/{invoiceitem}:
              delete:
                description: >-
                  <p>Deletes an invoice item, removing it from an invoice.
                  Deleting invoice items is only possible when they’re not
                  attached to invoices, or if it’s attached to a draft
                  invoice.</p>
                summary: Delete Invoice Item
                tags:
                  - Delete
                  - Invoice
                  - Item
                  - V1
                  - Invoiceitems
                  - Invoiceitem
              get:
                description: <p>Retrieves the invoice item with the given ID.</p>
                summary: Retrieve Invoice Item
                tags:
                  - Retrieve
                  - Invoice
                  - Item
                  - V1
                  - Invoiceitems
                  - Invoiceitem
              post:
                description: >-
                  <p>Updates the amount or description of an invoice item on an
                  upcoming invoice. Updating an invoice item is only possible
                  before the invoice it’s attached to is closed.</p>
                summary: Update Invoice Item
                tags:
                  - Update
                  - Invoice
                  - Item
                  - V1
                  - Invoiceitems
                  - Invoiceitem
            /v1/invoices:
              get:
                description: >-
                  <p>You can list all invoices, or list the invoices for a
                  specific customer. The invoices are returned sorted by
                  creation date, with the most recently created invoices
                  appearing first.</p>
                summary: Retrieve Invoices
                tags:
                  - Retrieve
                  - Invoices
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
              post:
                description: >-
                  <p>This endpoint creates a draft invoice for a given customer.
                  The invoice remains a draft until you <a
                  href="#finalize_invoice">finalize</a> the invoice, which
                  allows you to <a href="#pay_invoice">pay</a> or <a
                  href="#send_invoice">send</a> the invoice to your
                  customers.</p>
                summary: Create Invoice
                tags:
                  - Create
                  - Invoice
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
            /v1/invoices/search:
              get:
                description: >-
                  <p>Search for invoices you’ve previously created using
                  Stripe’s <a href="/docs/search#search-query-language">Search
                  Query Language</a>.

                  Don’t use search in read-after-write flows where strict
                  consistency is necessary. Under normal operating

                  conditions, data is searchable in less than a minute.
                  Occasionally, propagation of new or updated data can be up

                  to an hour behind during outages. Search functionality is not
                  available to merchants in India.</p>
                summary: Search Invoices
                tags:
                  - Search
                  - Invoices
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
                  - Search
            /v1/invoices/upcoming:
              get:
                description: >-
                  <p>At any time, you can preview the upcoming invoice for a
                  customer. This will show you all the charges that are pending,
                  including subscription renewal charges, invoice item charges,
                  etc. It will also show you any discounts that are applicable
                  to the invoice.</p>


                  <p>Note that when you are viewing an upcoming invoice, you are
                  simply viewing a preview – the invoice has not yet been
                  created. As such, the upcoming invoice will not show up in
                  invoice listing calls, and you cannot use the API to pay or
                  edit the invoice. If you want to change the amount that your
                  customer will be billed, you can add, remove, or update
                  pending invoice items, or update the customer’s discount.</p>


                  <p>You can preview the effects of updating a subscription,
                  including a preview of what proration will take place. To
                  ensure that the actual proration is calculated exactly the
                  same as the previewed proration, you should pass a
                  <code>proration_date</code> parameter when doing the actual
                  subscription update. The value passed in should be the same as
                  the <code>subscription_proration_date</code> returned on the
                  upcoming invoice resource. The recommended way to get only the
                  prorations being previewed is to consider only proration line
                  items where <code>period[start]</code> is equal to the
                  <code>subscription_proration_date</code> on the upcoming
                  invoice resource.</p>
                summary: Retrieve Upcoming Invoices
                tags:
                  - Retrieve
                  - Upcoming
                  - Invoices
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
                  - Search
                  - Upcoming
            /v1/invoices/upcoming/lines:
              get:
                description: >-
                  <p>When retrieving an upcoming invoice, you’ll get a
                  <strong>lines</strong> property containing the total count of
                  line items and the first handful of those items. There is also
                  a URL where you can retrieve the full (paginated) list of line
                  items.</p>
                summary: Retrieve Upcoming Invoice Lines
                tags:
                  - Retrieve
                  - Upcoming
                  - Invoice
                  - Lines
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
                  - Search
                  - Upcoming
                  - Lines
            /v1/invoices/{invoice}:
              delete:
                description: >-
                  <p>Permanently deletes a one-off invoice draft. This cannot be
                  undone. Attempts to delete invoices that are no longer in a
                  draft state will fail; once an invoice has been finalized or
                  if an invoice is for a subscription, it must be <a
                  href="#void_invoice">voided</a>.</p>
                summary: Delete Invoice
                tags:
                  - Delete
                  - Invoice
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
                  - Search
                  - Upcoming
                  - Lines
                  - Invoice
              get:
                description: <p>Retrieves the invoice with the given ID.</p>
                summary: Retrieve Invoice
                tags:
                  - Retrieve
                  - Invoice
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
                  - Search
                  - Upcoming
                  - Lines
                  - Invoice
              post:
                description: >-
                  <p>Draft invoices are fully editable. Once an invoice is <a
                  href="/docs/billing/invoices/workflow#finalized">finalized</a>,

                  monetary values, as well as <code>collection_method</code>,
                  become uneditable.</p>


                  <p>If you would like to stop the Stripe Billing engine from
                  automatically finalizing, reattempting payments on,

                  sending reminders for, or <a
                  href="/docs/billing/invoices/reconciliation">automatically
                  reconciling</a> invoices, pass

                  <code>auto_advance=false</code>.</p>
                summary: Update Invoice
                tags:
                  - Update
                  - Invoice
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
                  - Search
                  - Upcoming
                  - Lines
                  - Invoice
            /v1/invoices/{invoice}/finalize:
              post:
                description: >-
                  <p>Stripe automatically finalizes drafts before sending and
                  attempting payment on invoices. However, if you’d like to
                  finalize a draft invoice manually, you can do so using this
                  method.</p>
                summary: Finalize Invoice
                tags:
                  - Finalize
                  - Invoice
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
                  - Search
                  - Upcoming
                  - Lines
                  - Invoice
                  - Finalize
            /v1/invoices/{invoice}/lines:
              get:
                description: >-
                  <p>When retrieving an invoice, you’ll get a
                  <strong>lines</strong> property containing the total count of
                  line items and the first handful of those items. There is also
                  a URL where you can retrieve the full (paginated) list of line
                  items.</p>
                summary: Retrieve Invoice Lines
                tags:
                  - Retrieve
                  - Invoice
                  - Lines
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
                  - Search
                  - Upcoming
                  - Lines
                  - Invoice
                  - Finalize
            /v1/invoices/{invoice}/lines/{line_item_id}:
              post:
                description: >-
                  <p>Updates an invoice’s line item. Some fields, such as
                  <code>tax_amounts</code>, only live on the invoice line item,

                  so they can only be updated through this endpoint. Other
                  fields, such as <code>amount</code>, live on both the invoice

                  item and the invoice line item, so updates on this endpoint
                  will propagate to the invoice item as well.

                  Updating an invoice’s line item is only possible before the
                  invoice is finalized.</p>
                summary: Retrieve Invoice Line
                tags:
                  - Retrieve
                  - Invoice
                  - Line
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
                  - Search
                  - Upcoming
                  - Lines
                  - Invoice
                  - Finalize
                  - Line_item_id
            /v1/invoices/{invoice}/mark_uncollectible:
              post:
                description: >-
                  <p>Marking an invoice as uncollectible is useful for keeping
                  track of bad debts that can be written off for accounting
                  purposes.</p>
                summary: Mark Invoice Uncollectable
                tags:
                  - Mark
                  - Invoice
                  - Uncollectable
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
                  - Search
                  - Upcoming
                  - Lines
                  - Invoice
                  - Finalize
                  - Line_item_id
                  - Mark_uncollectible
            /v1/invoices/{invoice}/pay:
              post:
                description: >-
                  <p>Stripe automatically creates and then attempts to collect
                  payment on invoices for customers on subscriptions according
                  to your <a
                  href="https://dashboard.stripe.com/account/billing/automatic">subscriptions
                  settings</a>. However, if you’d like to attempt payment on an
                  invoice out of the normal collection schedule or for some
                  other reason, you can do so.</p>
                summary: Pay Invoice
                tags:
                  - Pay
                  - Invoice
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
                  - Search
                  - Upcoming
                  - Lines
                  - Invoice
                  - Finalize
                  - Line_item_id
                  - Mark_uncollectible
                  - Pay
            /v1/invoices/{invoice}/send:
              post:
                description: >-
                  <p>Stripe will automatically send invoices to customers
                  according to your <a
                  href="https://dashboard.stripe.com/account/billing/automatic">subscriptions
                  settings</a>. However, if you’d like to manually send an
                  invoice to your customer out of the normal schedule, you can
                  do so. When sending invoices that have already been paid,
                  there will be no reference to the payment in the email.</p>


                  <p>Requests made in test-mode result in no emails being sent,
                  despite sending an <code>invoice.sent</code> event.</p>
                summary: Send Invoice
                tags:
                  - Send
                  - Invoice
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
                  - Search
                  - Upcoming
                  - Lines
                  - Invoice
                  - Finalize
                  - Line_item_id
                  - Mark_uncollectible
                  - Pay
                  - Send
            /v1/invoices/{invoice}/void:
              post:
                description: >-
                  <p>Mark a finalized invoice as void. This cannot be undone.
                  Voiding an invoice is similar to <a
                  href="#delete_invoice">deletion</a>, however it only applies
                  to finalized invoices and maintains a papertrail where the
                  invoice can still be found.</p>
                summary: Void Invoice
                tags:
                  - Void
                  - Invoice
                  - V1
                  - Invoiceitems
                  - Invoiceitem
                  - Invoices
                  - Search
                  - Upcoming
                  - Lines
                  - Invoice
                  - Finalize
                  - Line_item_id
                  - Mark_uncollectible
                  - Pay
                  - Send
                  - Void
          tags:
            - name: Invoices
              description: Needs a description.
            - name: Items
              description: Needs a description.
            - name: Search
              description: Needs a description.
            - name: Upcoming
              description: Needs a description.
            - name: Lines
              description: Needs a description.
            - name: Finalize
              description: Needs a description.
            - name: Mark
              description: Needs a description.
            - name: Uncollectable
              description: Needs a description.
            - name: Pay
              description: Needs a description.
            - name: Send
              description: Needs a description.
            - name: Void
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/invoice-openapi-search.yml
  - aid: stripe.com:issuing
    name: Stripe Issuing API
    description: >-
      An API for businesses to instantly create, manage, and distribute payment
      cards.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/issuing
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/issuing
      - type: OpenAPI
        url: properties/issuing-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Issuing API
          paths:
            /v1/issuing/authorizations:
              get:
                description: >-
                  <p>Returns a list of Issuing <code>Authorization</code>
                  objects. The objects are sorted in descending order by
                  creation date, with the most recently created object appearing
                  first.</p>
                summary: Retrieve Issuing Authorizations
                tags:
                  - Retrieve
                  - Issuing
                  - Authorizations
                  - V1
                  - Issuing
                  - Authorizations
            /v1/issuing/authorizations/{authorization}:
              get:
                description: <p>Retrieves an Issuing <code>Authorization</code> object.</p>
                summary: Retrieve Issuing Authorization
                tags:
                  - Retrieve
                  - Issuing
                  - Authorization
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
              post:
                description: >-
                  <p>Updates the specified Issuing <code>Authorization</code>
                  object by setting the values of the parameters passed. Any
                  parameters not provided will be left unchanged.</p>
                summary: Update Issuing Authorization
                tags:
                  - Update
                  - Issuing
                  - Authorization
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
            /v1/issuing/authorizations/{authorization}/approve:
              post:
                description: >-
                  <p>[Deprecated] Approves a pending Issuing
                  <code>Authorization</code> object. This request should be made
                  within the timeout window of the <a
                  href="/docs/issuing/controls/real-time-authorizations">real-time
                  authorization</a> flow. 

                  This method is deprecated. Instead, <a
                  href="/docs/issuing/controls/real-time-authorizations#authorization-handling">respond
                  directly to the webhook request to approve an
                  authorization</a>.</p>
                summary: Approve Issuing Authorization
                tags:
                  - Approve
                  - Issuing
                  - Authorization
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
            /v1/issuing/authorizations/{authorization}/decline:
              post:
                description: >-
                  <p>[Deprecated] Declines a pending Issuing
                  <code>Authorization</code> object. This request should be made
                  within the timeout window of the <a
                  href="/docs/issuing/controls/real-time-authorizations">real
                  time authorization</a> flow.

                  This method is deprecated. Instead, <a
                  href="/docs/issuing/controls/real-time-authorizations#authorization-handling">respond
                  directly to the webhook request to decline an
                  authorization</a>.</p>
                summary: Decline Issuing Authorization
                tags:
                  - Decline
                  - Issuing
                  - Authorization
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
            /v1/issuing/cardholders:
              get:
                description: >-
                  <p>Returns a list of Issuing <code>Cardholder</code> objects.
                  The objects are sorted in descending order by creation date,
                  with the most recently created object appearing first.</p>
                summary: Retrieve Issuing Cardholders
                tags:
                  - Retrieve
                  - Issuing
                  - Cardholders
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
              post:
                description: >-
                  <p>Creates a new Issuing <code>Cardholder</code> object that
                  can be issued cards.</p>
                summary: Create Issuing Cardholder
                tags:
                  - Create
                  - Issuing
                  - Cardholder
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
            /v1/issuing/cardholders/{cardholder}:
              get:
                description: <p>Retrieves an Issuing <code>Cardholder</code> object.</p>
                summary: Retrieve Issuing Cardholder
                tags:
                  - Retrieve
                  - Issuing
                  - Cardholder
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
              post:
                description: >-
                  <p>Updates the specified Issuing <code>Cardholder</code>
                  object by setting the values of the parameters passed. Any
                  parameters not provided will be left unchanged.</p>
                summary: Update Issuing Cardholder
                tags:
                  - Update
                  - Issuing
                  - Cardholder
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
            /v1/issuing/cards:
              get:
                description: >-
                  <p>Returns a list of Issuing <code>Card</code> objects. The
                  objects are sorted in descending order by creation date, with
                  the most recently created object appearing first.</p>
                summary: Retrieve Issuing Cards
                tags:
                  - Retrieve
                  - Issuing
                  - Cards
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
              post:
                description: <p>Creates an Issuing <code>Card</code> object.</p>
                summary: Create Issuing Card
                tags:
                  - Create
                  - Issuing
                  - Card
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
            /v1/issuing/cards/{card}:
              get:
                description: <p>Retrieves an Issuing <code>Card</code> object.</p>
                summary: Retrieve Issuing Card
                tags:
                  - Retrieve
                  - Issuing
                  - Card
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
              post:
                description: >-
                  <p>Updates the specified Issuing <code>Card</code> object by
                  setting the values of the parameters passed. Any parameters
                  not provided will be left unchanged.</p>
                summary: Update Issuing Card
                tags:
                  - Update
                  - Issuing
                  - Card
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
            /v1/issuing/disputes:
              get:
                description: >-
                  <p>Returns a list of Issuing <code>Dispute</code> objects. The
                  objects are sorted in descending order by creation date, with
                  the most recently created object appearing first.</p>
                summary: Retrieve Issuing Disputes
                tags:
                  - Retrieve
                  - Issuing
                  - Disputes
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
                  - Disputes
              post:
                description: >-
                  <p>Creates an Issuing <code>Dispute</code> object. Individual
                  pieces of evidence within the <code>evidence</code> object are
                  optional at this point. Stripe only validates that required
                  evidence is present during submission. Refer to <a
                  href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute
                  reasons and evidence</a> for more details about evidence
                  requirements.</p>
                summary: Create Issuing Dispute
                tags:
                  - Create
                  - Issuing
                  - Dispute
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
                  - Disputes
            /v1/issuing/disputes/{dispute}:
              get:
                description: <p>Retrieves an Issuing <code>Dispute</code> object.</p>
                summary: Retrieve Issuing Dispute
                tags:
                  - Retrieve
                  - Issuing
                  - Dispute
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
                  - Disputes
                  - Dispute
              post:
                description: >-
                  <p>Updates the specified Issuing <code>Dispute</code> object
                  by setting the values of the parameters passed. Any parameters
                  not provided will be left unchanged. Properties on the
                  <code>evidence</code> object can be unset by passing in an
                  empty string.</p>
                summary: Update Issuing Dispute
                tags:
                  - Update
                  - Issuing
                  - Dispute
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
                  - Disputes
                  - Dispute
            /v1/issuing/disputes/{dispute}/submit:
              post:
                description: >-
                  <p>Submits an Issuing <code>Dispute</code> to the card
                  network. Stripe validates that all evidence fields required
                  for the dispute’s reason are present. For more details, see <a
                  href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute
                  reasons and evidence</a>.</p>
                summary: Submit Issuing Dispute
                tags:
                  - Submit
                  - Issuing
                  - Dispute
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
                  - Disputes
                  - Dispute
                  - Submit
            /v1/issuing/settlements:
              get:
                description: >-
                  <p>Returns a list of Issuing <code>Settlement</code> objects.
                  The objects are sorted in descending order by creation date,
                  with the most recently created object appearing first.</p>
                summary: Retrieve Issuing Settlements
                tags:
                  - Retrieve
                  - Issuing
                  - Settlements
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
                  - Disputes
                  - Dispute
                  - Submit
                  - Settlements
            /v1/issuing/settlements/{settlement}:
              get:
                description: <p>Retrieves an Issuing <code>Settlement</code> object.</p>
                summary: Retrieve Issuing Settlement
                tags:
                  - Retrieve
                  - Issuing
                  - Settlement
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
                  - Disputes
                  - Dispute
                  - Submit
                  - Settlements
                  - Settlement
              post:
                description: >-
                  <p>Updates the specified Issuing <code>Settlement</code>
                  object by setting the values of the parameters passed. Any
                  parameters not provided will be left unchanged.</p>
                summary: Create Issuing Settlement
                tags:
                  - Create
                  - Issuing
                  - Settlement
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
                  - Disputes
                  - Dispute
                  - Submit
                  - Settlements
                  - Settlement
            /v1/issuing/tokens:
              get:
                description: >-
                  <p>Lists all Issuing <code>Token</code> objects for a given
                  card.</p>
                summary: Retrieve Issuing Tokens
                tags:
                  - Retrieve
                  - Issuing
                  - Tokens
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
                  - Disputes
                  - Dispute
                  - Submit
                  - Settlements
                  - Settlement
                  - Tokens
            /v1/issuing/tokens/{token}:
              get:
                description: <p>Retrieves an Issuing <code>Token</code> object.</p>
                summary: Retrieve Issuing Token
                tags:
                  - Retrieve
                  - Issuing
                  - Token
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
                  - Disputes
                  - Dispute
                  - Submit
                  - Settlements
                  - Settlement
                  - Tokens
                  - Token
              post:
                description: >-
                  <p>Attempts to update the specified Issuing <code>Token</code>
                  object to the status specified.</p>
                summary: Update Issuing Token
                tags:
                  - Update
                  - Issuing
                  - Token
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
                  - Disputes
                  - Dispute
                  - Submit
                  - Settlements
                  - Settlement
                  - Tokens
                  - Token
            /v1/issuing/transactions:
              get:
                description: >-
                  <p>Returns a list of Issuing <code>Transaction</code> objects.
                  The objects are sorted in descending order by creation date,
                  with the most recently created object appearing first.</p>
                summary: Retrieve Issuing Transactions
                tags:
                  - Retrieve
                  - Issuing
                  - Transactions
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
                  - Disputes
                  - Dispute
                  - Submit
                  - Settlements
                  - Settlement
                  - Tokens
                  - Token
                  - Transactions
            /v1/issuing/transactions/{transaction}:
              get:
                description: <p>Retrieves an Issuing <code>Transaction</code> object.</p>
                summary: Retrieve Issuing Transaction
                tags:
                  - Retrieve
                  - Issuing
                  - Transaction
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
                  - Disputes
                  - Dispute
                  - Submit
                  - Settlements
                  - Settlement
                  - Tokens
                  - Token
                  - Transactions
                  - Transaction
              post:
                description: >-
                  <p>Updates the specified Issuing <code>Transaction</code>
                  object by setting the values of the parameters passed. Any
                  parameters not provided will be left unchanged.</p>
                summary: Update Issuing Transaction
                tags:
                  - Update
                  - Issuing
                  - Transaction
                  - V1
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Approve
                  - Decline
                  - Cardholders
                  - Cardholder
                  - Cards
                  - Card
                  - Disputes
                  - Dispute
                  - Submit
                  - Settlements
                  - Settlement
                  - Tokens
                  - Token
                  - Transactions
                  - Transaction
          tags:
            - name: Issuing
              description: Needs a description.
            - name: Authorizations
              description: Needs a description.
            - name: Approve
              description: Needs a description.
            - name: Decline
              description: Needs a description.
            - name: Cardholders
              description: Needs a description.
            - name: Cards
              description: Needs a description.
            - name: Disputes
              description: Needs a description.
            - name: Submit
              description: Needs a description.
            - name: Settlements
              description: Needs a description.
            - name: Tokens
              description: Needs a description.
            - name: Transactions
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/issuing-openapi-search.yml
  - aid: stripe.com:link
    name: Stripe Link API
    description: >-
      You can use the Payment Links API to create a payment link that you can
      share with your customers. Stripe redirects customers who open this link
      to a Stripe-hosted payment page.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/payment-links/api
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/payment-links/api
      - type: OpenAPI
        url: properties/link-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Link API
          paths:
            /v1/link_account_sessions:
              post:
                description: >-
                  <p>To launch the Financial Connections authorization flow,
                  create a <code>Session</code>. The session’s
                  <code>client_secret</code> can be used to launch the flow
                  using Stripe.js.</p>
                summary: Launch Link Account Session
                tags:
                  - Launch
                  - Link
                  - Account
                  - Session
                  - V1
                  - Link_account_sessions
            /v1/link_account_sessions/{session}:
              get:
                description: >-
                  <p>Retrieves the details of a Financial Connections
                  <code>Session</code></p>
                summary: Retrieve Link Account Session
                tags:
                  - Retrieve
                  - Link
                  - Account
                  - Session
                  - V1
                  - Link_account_sessions
                  - Session
            /v1/linked_accounts:
              get:
                description: >-
                  <p>Returns a list of Financial Connections
                  <code>Account</code> objects.</p>
                summary: Retrieve Link Accounts
                tags:
                  - Retrieve
                  - Link
                  - Accounts
                  - V1
                  - Link_account_sessions
                  - Session
                  - Linked_accounts
            /v1/linked_accounts/{account}:
              get:
                description: >-
                  <p>Retrieves the details of an Financial Connections
                  <code>Account</code>.</p>
                summary: Retrieve Link Account
                tags:
                  - Retrieve
                  - Link
                  - Account
                  - V1
                  - Link_account_sessions
                  - Session
                  - Linked_accounts
                  - Account
            /v1/linked_accounts/{account}/disconnect:
              post:
                description: >-
                  <p>Disables your access to a Financial Connections
                  <code>Account</code>. You will no longer be able to access
                  data associated with the account (e.g. balances,
                  transactions).</p>
                summary: Disconnect Link Accounts
                tags:
                  - Disconnect
                  - Link
                  - Accounts
                  - V1
                  - Link_account_sessions
                  - Session
                  - Linked_accounts
                  - Account
                  - Disconnect
            /v1/linked_accounts/{account}/owners:
              get:
                description: <p>Lists all owners for a given <code>Account</code></p>
                summary: Retrieve Link Account Owners
                tags:
                  - Retrieve
                  - Link
                  - Account
                  - Owners
                  - V1
                  - Link_account_sessions
                  - Session
                  - Linked_accounts
                  - Account
                  - Disconnect
                  - Owners
            /v1/linked_accounts/{account}/refresh:
              post:
                description: >-
                  <p>Refreshes the data associated with a Financial Connections
                  <code>Account</code>.</p>
                summary: Refresh Link Account
                tags:
                  - Refresh
                  - Link
                  - Account
                  - V1
                  - Link_account_sessions
                  - Session
                  - Linked_accounts
                  - Account
                  - Disconnect
                  - Owners
                  - Refresh
          tags:
            - name: Links
              description: Needs a description.
            - name: Accounts
              description: Needs a description.
            - name: Sessions
              description: Needs a description.
            - name: Disconnect
              description: Needs a description.
            - name: Owners
              description: Needs a description.
            - name: Refresh
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/link-openapi-search.yml
  - aid: stripe.com:payment-intents
    name: Stripe Payment Intents API
    description: >-
      A PaymentIntent guides you through the process of collecting a payment
      from your customer. We recommend that you create exactly one PaymentIntent
      for each order or customer session in your system. You can reference the
      PaymentIntent later to see the history of payment attempts for a
      particular session.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/payment_intents
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/payment_intents
      - type: OpenAPI
        url: properties/payment-intents-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Payment Intents API
          paths:
            /v1/payment_intents:
              get:
                description: <p>Returns a list of PaymentIntents.</p>
                summary: Retrieve Payment Intents
                tags:
                  - Retrieve
                  - Payment
                  - Intents
                  - V1
                  - Payment_intents
              post:
                description: >-
                  <p>Creates a PaymentIntent object.</p>


                  <p>After the PaymentIntent is created, attach a payment method
                  and <a href="/docs/api/payment_intents/confirm">confirm</a>

                  to continue the payment. Learn more about <a
                  href="/docs/payments/payment-intents">the available payment
                  flows

                  with the Payment Intents API</a>.</p>


                  <p>When you use <code>confirm=true</code> during creation,
                  it’s equivalent to creating

                  and confirming the PaymentIntent in the same call. You can use
                  any parameters

                  available in the <a
                  href="/docs/api/payment_intents/confirm">confirm API</a> when
                  you supply

                  <code>confirm=true</code>.</p>
                summary: Create Payment Intent
                tags:
                  - Create
                  - Payment
                  - Intent
                  - V1
                  - Payment_intents
            /v1/payment_intents/search:
              get:
                description: >-
                  <p>Search for PaymentIntents you’ve previously created using
                  Stripe’s <a href="/docs/search#search-query-language">Search
                  Query Language</a>.

                  Don’t use search in read-after-write flows where strict
                  consistency is necessary. Under normal operating

                  conditions, data is searchable in less than a minute.
                  Occasionally, propagation of new or updated data can be up

                  to an hour behind during outages. Search functionality is not
                  available to merchants in India.</p>
                summary: Search Payment Intents
                tags:
                  - Search
                  - Payment
                  - Intents
                  - V1
                  - Payment_intents
                  - Search
            /v1/payment_intents/{intent}:
              get:
                description: >-
                  <p>Retrieves the details of a PaymentIntent that has
                  previously been created. </p>


                  <p>You can retrieve a PaymentIntent client-side using a
                  publishable key when the <code>client_secret</code> is in the
                  query string. </p>


                  <p>If you retrieve a PaymentIntent with a publishable key, it
                  only returns a subset of properties. Refer to the <a
                  href="#payment_intent_object">payment intent</a> object
                  reference for more details.</p>
                summary: Retrieve Payment Intent
                tags:
                  - Retrieve
                  - Payment
                  - Intent
                  - V1
                  - Payment_intents
                  - Search
                  - Intent
              post:
                description: >-
                  <p>Updates properties on a PaymentIntent object without
                  confirming.</p>


                  <p>Depending on which properties you update, you might need to
                  confirm the

                  PaymentIntent again. For example, updating the
                  <code>payment_method</code>

                  always requires you to confirm the PaymentIntent again. If you
                  prefer to

                  update and confirm at the same time, we recommend updating
                  properties through

                  the <a href="/docs/api/payment_intents/confirm">confirm
                  API</a> instead.</p>
                summary: Update Payment Intent
                tags:
                  - Update
                  - Payment
                  - Intent
                  - V1
                  - Payment_intents
                  - Search
                  - Intent
            /v1/payment_intents/{intent}/apply_customer_balance:
              post:
                description: >-
                  <p>Manually reconcile the remaining amount for a
                  <code>customer_balance</code> PaymentIntent.</p>
                summary: Reconcile Payment Intent
                tags:
                  - Reconcile
                  - Payment
                  - Intent
                  - V1
                  - Payment_intents
                  - Search
                  - Intent
                  - Apply_customer_balance
            /v1/payment_intents/{intent}/cancel:
              post:
                description: >-
                  <p>You can cancel a PaymentIntent object when it’s in one of
                  these statuses: <code>requires_payment_method</code>,
                  <code>requires_capture</code>,
                  <code>requires_confirmation</code>,
                  <code>requires_action</code> or, <a
                  href="/docs/payments/intents">in rare cases</a>,
                  <code>processing</code>. </p>


                  <p>After it’s canceled, no additional charges are made by the
                  PaymentIntent and any operations on the PaymentIntent fail
                  with an error. For PaymentIntents with a <code>status</code>
                  of <code>requires_capture</code>, the remaining
                  <code>amount_capturable</code> is automatically refunded. </p>


                  <p>You can’t cancel the PaymentIntent for a Checkout Session.
                  <a href="/docs/api/checkout/sessions/expire">Expire the
                  Checkout Session</a> instead.</p>
                summary: Cancel Payment Intent
                tags:
                  - Cancel
                  - Payment
                  - Intent
                  - V1
                  - Payment_intents
                  - Search
                  - Intent
                  - Apply_customer_balance
                  - Cancel
            /v1/payment_intents/{intent}/capture:
              post:
                description: >-
                  <p>Capture the funds of an existing uncaptured PaymentIntent
                  when its status is <code>requires_capture</code>.</p>


                  <p>Uncaptured PaymentIntents are cancelled a set number of
                  days (7 by default) after their creation.</p>


                  <p>Learn more about <a
                  href="/docs/payments/capture-later">separate authorization and
                  capture</a>.</p>
                summary: Capture Payment Intent
                tags:
                  - Capture
                  - Payment
                  - Intent
                  - V1
                  - Payment_intents
                  - Search
                  - Intent
                  - Apply_customer_balance
                  - Cancel
                  - Capture
            /v1/payment_intents/{intent}/confirm:
              post:
                description: >-
                  <p>Confirm that your customer intends to pay with current or
                  provided

                  payment method. Upon confirmation, the PaymentIntent will
                  attempt to initiate

                  a payment.

                  If the selected payment method requires additional
                  authentication steps, the

                  PaymentIntent will transition to the
                  <code>requires_action</code> status and

                  suggest additional actions via <code>next_action</code>. If
                  payment fails,

                  the PaymentIntent transitions to the
                  <code>requires_payment_method</code> status or the

                  <code>canceled</code> status if the confirmation limit is
                  reached. If

                  payment succeeds, the PaymentIntent will transition to the
                  <code>succeeded</code>

                  status (or <code>requires_capture</code>, if
                  <code>capture_method</code> is set to <code>manual</code>).

                  If the <code>confirmation_method</code> is
                  <code>automatic</code>, payment may be attempted

                  using our <a
                  href="/docs/stripe-js/reference#stripe-handle-card-payment">client
                  SDKs</a>

                  and the PaymentIntent’s <a
                  href="#payment_intent_object-client_secret">client_secret</a>.

                  After <code>next_action</code>s are handled by the client, no
                  additional

                  confirmation is required to complete the payment.

                  If the <code>confirmation_method</code> is
                  <code>manual</code>, all payment attempts must be

                  initiated using a secret key.

                  If any actions are required for the payment, the PaymentIntent
                  will

                  return to the <code>requires_confirmation</code> state

                  after those actions are completed. Your server needs to then

                  explicitly re-confirm the PaymentIntent to initiate the next
                  payment

                  attempt. Read the <a
                  href="/docs/payments/payment-intents/web-manual">expanded
                  documentation</a>

                  to learn more about manual confirmation.</p>
                summary: Confirm Payment Intent
                tags:
                  - Confirm
                  - Payment
                  - Intent
                  - V1
                  - Payment_intents
                  - Search
                  - Intent
                  - Apply_customer_balance
                  - Cancel
                  - Capture
                  - Confirm
            /v1/payment_intents/{intent}/increment_authorization:
              post:
                description: >-
                  <p>Perform an incremental authorization on an eligible

                  <a href="/docs/api/payment_intents/object">PaymentIntent</a>.
                  To be eligible, the

                  PaymentIntent’s status must be <code>requires_capture</code>
                  and

                  <a
                  href="/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported">incremental_authorization_supported</a>

                  must be <code>true</code>.</p>


                  <p>Incremental authorizations attempt to increase the
                  authorized amount on

                  your customer’s card to the new, higher <code>amount</code>
                  provided. Similar to the

                  initial authorization, incremental authorizations can be
                  declined. A

                  single PaymentIntent can call this endpoint multiple times to
                  further

                  increase the authorized amount.</p>


                  <p>If the incremental authorization succeeds, the
                  PaymentIntent object

                  returns with the updated

                  <a
                  href="/docs/api/payment_intents/object#payment_intent_object-amount">amount</a>.

                  If the incremental authorization fails, a

                  <a href="/docs/error-codes#card-declined">card_declined</a>
                  error returns, and no other

                  fields on the PaymentIntent or Charge update. The
                  PaymentIntent

                  object remains capturable for the previously authorized
                  amount.</p>


                  <p>Each PaymentIntent can have a maximum of 10 incremental
                  authorization attempts, including declines.

                  After it’s captured, a PaymentIntent can no longer be
                  incremented.</p>


                  <p>Learn more about <a
                  href="/docs/terminal/features/incremental-authorizations">incremental
                  authorizations</a>.</p>
                summary: Increment Payment Intent Authorization
                tags:
                  - Increment
                  - Payment
                  - Intent
                  - Authorization
                  - V1
                  - Payment_intents
                  - Search
                  - Intent
                  - Apply_customer_balance
                  - Cancel
                  - Capture
                  - Confirm
                  - Increment_authorization
            /v1/payment_intents/{intent}/verify_microdeposits:
              post:
                description: <p>Verifies microdeposits on a PaymentIntent object.</p>
                summary: Verify Payment Intent Microdeposits
                tags:
                  - Verify
                  - Payment
                  - Intent
                  - Microdeposits
                  - V1
                  - Payment_intents
                  - Search
                  - Intent
                  - Apply_customer_balance
                  - Cancel
                  - Capture
                  - Confirm
                  - Increment_authorization
                  - Verify_microdeposits
          tags:
            - name: Payments
              description: Needs a description.
            - name: Intents
              description: Needs a description.
            - name: Search
              description: Needs a description.
            - name: Balances
              description: Needs a description.
            - name: Reconcile
              description: Needs a description.
            - name: Cancel
              description: Needs a description.
            - name: Capture
              description: Needs a description.
            - name: Confirm
              description: Needs a description.
            - name: Increment
              description: Needs a description.
            - name: Authorization
              description: Needs a description.
            - name: Verify
              description: Needs a description.
            - name: Micro
              description: Needs a description.
            - name: Deposits
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/payment-intents-openapi-search.yml
  - aid: stripe.com:payment-links
    name: Stripe Payment Links API
    description: >-
      A payment link is a shareable URL that will take your customers to a
      hosted payment page. A payment link can be shared and used multiple times.
      When a customer opens a payment link it will open a new checkout session
      to render the payment page. You can use checkout session events to track
      payments through payment links.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/payment_links/payment_links
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/payment_links/payment_links
      - type: OpenAPI
        url: properties/payment-links-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Payment Links API
          paths:
            /v1/payment_links:
              get:
                description: <p>Returns a list of your payment links.</p>
                summary: Retrieve Payment Links
                tags:
                  - Retrieve
                  - Payment
                  - Links
                  - V1
                  - Payment_links
              post:
                description: <p>Creates a payment link.</p>
                summary: Create Payment Link
                tags:
                  - Create
                  - Payment
                  - Link
                  - V1
                  - Payment_links
            /v1/payment_links/{payment_link}:
              get:
                description: <p>Retrieve a payment link.</p>
                summary: Retrieve Payment Link
                tags:
                  - Retrieve
                  - Payment
                  - Link
                  - V1
                  - Payment_links
                  - Payment_link
              post:
                description: <p>Updates a payment link.</p>
                summary: Update Payment Link
                tags:
                  - Update
                  - Payment
                  - Link
                  - V1
                  - Payment_links
                  - Payment_link
            /v1/payment_links/{payment_link}/line_items:
              get:
                description: >-
                  <p>When retrieving a payment link, there is an includable
                  <strong>line_items</strong> property containing the first
                  handful of those items. There is also a URL where you can
                  retrieve the full (paginated) list of line items.</p>
                summary: Retrieve Payment Link Line Items
                tags:
                  - Retrieve
                  - Payment
                  - Link
                  - Line
                  - Items
                  - V1
                  - Payment_links
                  - Payment_link
                  - Line_items
          tags:
            - name: Payments
              description: Needs a description.
            - name: Links
              description: Needs a description.
            - name: Lines
              description: Needs a description.
            - name: Items
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/payment-links-openapi-search.yml
  - aid: stripe.com:payment-method
    name: Stripe Payment Method API
    description: >-
      The Payment Methods API allows you to accept a variety of payment methods
      through a single API. A PaymentMethod object contains the payment method
      details to create payments.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/payments/payment-methods
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/payments/payment-methods
      - type: OpenAPI
        url: properties/payment-method-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Payment Method API
          paths:
            /v1/payment_method_configurations:
              get:
                description: <p>List payment method configurations</p>
                summary: Retrieve Payment Method Configurations
                tags:
                  - Retrieve
                  - Payment
                  - Method
                  - Configurations
                  - V1
                  - Payment_method_configurations
              post:
                description: <p>Creates a payment method configuration</p>
                summary: Create Payment Method Configuration
                tags:
                  - Create
                  - Payment
                  - Method
                  - Configuration
                  - V1
                  - Payment_method_configurations
            /v1/payment_method_configurations/{configuration}:
              get:
                description: <p>Retrieve payment method configuration</p>
                summary: Retrieve Payment Method Configuration
                tags:
                  - Retrieve
                  - Payment
                  - Method
                  - Configuration
                  - V1
                  - Payment_method_configurations
                  - Configuration
              post:
                description: <p>Update payment method configuration</p>
                summary: Update Payment Method Configuration
                tags:
                  - Update
                  - Payment
                  - Method
                  - Configuration
                  - V1
                  - Payment_method_configurations
                  - Configuration
            /v1/payment_method_domains:
              get:
                description: <p>Lists the details of existing payment method domains.</p>
                summary: Retrieve Payment Method Domains
                tags:
                  - Retrieve
                  - Payment
                  - Method
                  - Domains
                  - V1
                  - Payment_method_configurations
                  - Configuration
                  - Payment_method_domains
              post:
                description: <p>Creates a payment method domain.</p>
                summary: Create Payment Method Domain
                tags:
                  - Create
                  - Payment
                  - Method
                  - Domain
                  - V1
                  - Payment_method_configurations
                  - Configuration
                  - Payment_method_domains
            /v1/payment_method_domains/{payment_method_domain}:
              get:
                description: >-
                  <p>Retrieves the details of an existing payment method
                  domain.</p>
                summary: Retrieve Payment Method Domain
                tags:
                  - Retrieve
                  - Payment
                  - Method
                  - Domain
                  - V1
                  - Payment_method_configurations
                  - Configuration
                  - Payment_method_domains
                  - Payment_method_domain
              post:
                description: <p>Updates an existing payment method domain.</p>
                summary: Update Payment Method Domain
                tags:
                  - Update
                  - Payment
                  - Method
                  - Domain
                  - V1
                  - Payment_method_configurations
                  - Configuration
                  - Payment_method_domains
                  - Payment_method_domain
            /v1/payment_method_domains/{payment_method_domain}/validate:
              post:
                description: >-
                  <p>Some payment methods such as Apple Pay require additional
                  steps to verify a domain. If the requirements weren’t
                  satisfied when the domain was created, the payment method will
                  be inactive on the domain.

                  The payment method doesn’t appear in Elements for this domain
                  until it is active.</p>


                  <p>To activate a payment method on an existing payment method
                  domain, complete the required validation steps specific to the
                  payment method, and then validate the payment method domain
                  with this endpoint.</p>


                  <p>Related guides: <a
                  href="/docs/payments/payment-methods/pmd-registration">Payment
                  method domains</a>.</p>
                summary: Validate Payment Method Domain
                tags:
                  - Validate
                  - Payment
                  - Method
                  - Domain
                  - V1
                  - Payment_method_configurations
                  - Configuration
                  - Payment_method_domains
                  - Payment_method_domain
                  - Validate
            /v1/payment_methods:
              get:
                description: >-
                  <p>Returns a list of PaymentMethods for Treasury flows. If you
                  want to list the PaymentMethods attached to a Customer for
                  payments, you should use the <a
                  href="/docs/api/payment_methods/customer_list">List a
                  Customer’s PaymentMethods</a> API instead.</p>
                summary: Retrieve Payment Methods
                tags:
                  - Retrieve
                  - Payment
                  - Methods
                  - V1
                  - Payment_method_configurations
                  - Configuration
                  - Payment_method_domains
                  - Payment_method_domain
                  - Validate
                  - Payment_methods
              post:
                description: >-
                  <p>Creates a PaymentMethod object. Read the <a
                  href="/docs/stripe-js/reference#stripe-create-payment-method">Stripe.js
                  reference</a> to learn how to create PaymentMethods via
                  Stripe.js.</p>


                  <p>Instead of creating a PaymentMethod directly, we recommend
                  using the <a
                  href="/docs/payments/accept-a-payment">PaymentIntents</a> API
                  to accept a payment immediately or the <a
                  href="/docs/payments/save-and-reuse">SetupIntent</a> API to
                  collect payment method details ahead of a future payment.</p>
                summary: Create Payment Method
                tags:
                  - Create
                  - Payment
                  - Method
                  - V1
                  - Payment_method_configurations
                  - Configuration
                  - Payment_method_domains
                  - Payment_method_domain
                  - Validate
                  - Payment_methods
            /v1/payment_methods/{payment_method}:
              get:
                description: >-
                  <p>Retrieves a PaymentMethod object attached to the
                  StripeAccount. To retrieve a payment method attached to a
                  Customer, you should use <a
                  href="/docs/api/payment_methods/customer">Retrieve a
                  Customer’s PaymentMethods</a></p>
                summary: Retrieve Payment Method
                tags:
                  - Retrieve
                  - Payment
                  - Method
                  - V1
                  - Payment_method_configurations
                  - Configuration
                  - Payment_method_domains
                  - Payment_method_domain
                  - Validate
                  - Payment_methods
                  - Payment_method
              post:
                description: >-
                  <p>Updates a PaymentMethod object. A PaymentMethod must be
                  attached a customer to be updated.</p>
                summary: Update Payment Method
                tags:
                  - Update
                  - Payment
                  - Method
                  - V1
                  - Payment_method_configurations
                  - Configuration
                  - Payment_method_domains
                  - Payment_method_domain
                  - Validate
                  - Payment_methods
                  - Payment_method
            /v1/payment_methods/{payment_method}/attach:
              post:
                description: >-
                  <p>Attaches a PaymentMethod object to a Customer.</p>


                  <p>To attach a new PaymentMethod to a customer for future
                  payments, we recommend you use a <a
                  href="/docs/api/setup_intents">SetupIntent</a>

                  or a PaymentIntent with <a
                  href="/docs/api/payment_intents/create#create_payment_intent-setup_future_usage">setup_future_usage</a>.

                  These approaches will perform any necessary steps to set up
                  the PaymentMethod for future payments. Using the
                  <code>/v1/payment_methods/:id/attach</code>

                  endpoint without first using a SetupIntent or PaymentIntent
                  with <code>setup_future_usage</code> does not optimize the
                  PaymentMethod for

                  future use, which makes later declines and payment friction
                  more likely.

                  See <a
                  href="/docs/payments/payment-intents#future-usage">Optimizing
                  cards for future payments</a> for more information about
                  setting up

                  future payments.</p>


                  <p>To use this PaymentMethod as the default for invoice or
                  subscription payments,

                  set <a
                  href="/docs/api/customers/update#update_customer-invoice_settings-default_payment_method"><code>invoice_settings.default_payment_method</code></a>,

                  on the Customer to the PaymentMethod’s ID.</p>
                summary: Attach Payment Method
                tags:
                  - Attach
                  - Payment
                  - Method
                  - V1
                  - Payment_method_configurations
                  - Configuration
                  - Payment_method_domains
                  - Payment_method_domain
                  - Validate
                  - Payment_methods
                  - Payment_method
                  - Attach
            /v1/payment_methods/{payment_method}/detach:
              post:
                description: >-
                  <p>Detaches a PaymentMethod object from a Customer. After a
                  PaymentMethod is detached, it can no longer be used for a
                  payment or re-attached to a Customer.</p>
                summary: Detach Payment Method
                tags:
                  - Detach
                  - Payment
                  - Method
                  - V1
                  - Payment_method_configurations
                  - Configuration
                  - Payment_method_domains
                  - Payment_method_domain
                  - Validate
                  - Payment_methods
                  - Payment_method
                  - Attach
                  - Detach
          tags:
            - name: Payments
              description: Needs a description.
            - name: Methods
              description: Needs a description.
            - name: Configurations
              description: Needs a description.
            - name: Domains
              description: Needs a description.
            - name: Validate
              description: Needs a description.
            - name: Attach
              description: Needs a description.
            - name: Detach
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/payment-method-openapi-search.yml
  - aid: stripe.com:payouts
    name: Stripe Payouts API
    description: >-
      A Payout object is created when you receive funds from Stripe, or when you
      initiate a payout to either a bank account or debit card of a connected
      Stripe account. You can retrieve individual payouts, and list all payouts.
      Payouts are made on varying schedules, depending on your country and
      industry.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/payouts
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/payouts
      - type: OpenAPI
        url: properties/payouts-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Payouts API
          paths:
            /v1/payouts:
              get:
                description: >-
                  <p>Returns a list of existing payouts sent to third-party bank
                  accounts or payouts that Stripe sent to you. The payouts
                  return in sorted order, with the most recently created payouts
                  appearing first.</p>
                summary: Retrieve Payouts
                tags:
                  - Retrieve
                  - Payouts
                  - V1
                  - Payouts
              post:
                description: >-
                  <p>To send funds to your own bank account, create a new payout
                  object. Your <a href="#balance">Stripe balance</a> must cover
                  the payout amount. If it doesn’t, you receive an “Insufficient
                  Funds” error.</p>


                  <p>If your API key is in test mode, money won’t actually be
                  sent, though every other action occurs as if you’re in live
                  mode.</p>


                  <p>If you create a manual payout on a Stripe account that uses
                  multiple payment source types, you need to specify the source
                  type balance that the payout draws from. The <a
                  href="#balance_object">balance object</a> details available
                  and pending amounts by source type.</p>
                summary: Create Payout
                tags:
                  - Create
                  - Payout
                  - V1
                  - Payouts
            /v1/payouts/{payout}:
              get:
                description: >-
                  <p>Retrieves the details of an existing payout. Supply the
                  unique payout ID from either a payout creation request or the
                  payout list. Stripe returns the corresponding payout
                  information.</p>
                summary: Retrieve Payout
                tags:
                  - Retrieve
                  - Payout
                  - V1
                  - Payouts
                  - Payout
              post:
                description: >-
                  <p>Updates the specified payout by setting the values of the
                  parameters you pass. We don’t change parameters that you don’t
                  provide. This request only accepts the metadata as
                  arguments.</p>
                summary: Update Payout
                tags:
                  - Update
                  - Payout
                  - V1
                  - Payouts
                  - Payout
            /v1/payouts/{payout}/cancel:
              post:
                description: >-
                  <p>You can cancel a previously created payout if it hasn’t
                  been paid out yet. Stripe refunds the funds to your available
                  balance. You can’t cancel automatic Stripe payouts.</p>
                summary: Cancel Payout
                tags:
                  - Cancel
                  - Payout
                  - V1
                  - Payouts
                  - Payout
                  - Cancel
            /v1/payouts/{payout}/reverse:
              post:
                description: >-
                  <p>Reverses a payout by debiting the destination bank account.
                  At this time, you can only reverse payouts for connected
                  accounts to US bank accounts. If the payout is in the
                  <code>pending</code> status, use
                  <code>/v1/payouts/:id/cancel</code> instead.</p>


                  <p>By requesting a reversal through
                  <code>/v1/payouts/:id/reverse</code>, you confirm that the
                  authorized signatory of the selected bank account authorizes
                  the debit on the bank account and that no other authorization
                  is required.</p>
                summary: Reverse Payout
                tags:
                  - Reverse
                  - Payout
                  - V1
                  - Payouts
                  - Payout
                  - Cancel
                  - Reverse
          tags:
            - name: Payouts
              description: Needs a description.
            - name: Cancel
              description: Needs a description.
            - name: Reverse
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/payouts-openapi-search.yml
  - aid: stripe.com:plans
    name: Stripe Plans API
    description: >-
      You can now model subscriptions more flexibly using the Prices API. It
      replaces the Plans API and is backwards compatible to simplify your
      migration.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/plans
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/plans
      - type: OpenAPI
        url: properties/plans-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Plans API
          paths:
            /v1/plans:
              get:
                description: <p>Returns a list of your plans.</p>
                summary: Retrieve Plans
                tags:
                  - Retrieve
                  - Plans
                  - V1
                  - Plans
              post:
                description: >-
                  <p>You can now model subscriptions more flexibly using the <a
                  href="#prices">Prices API</a>. It replaces the Plans API and
                  is backwards compatible to simplify your migration.</p>
                summary: Create Plan
                tags:
                  - Create
                  - Plan
                  - V1
                  - Plans
            /v1/plans/{plan}:
              delete:
                description: >-
                  <p>Deleting plans means new subscribers can’t be added.
                  Existing subscribers aren’t affected.</p>
                summary: Delete Plan
                tags:
                  - Delete
                  - Plan
                  - V1
                  - Plans
                  - Plan
              get:
                description: <p>Retrieves the plan with the given ID.</p>
                summary: Retrieve Plan
                tags:
                  - Retrieve
                  - Plan
                  - V1
                  - Plans
                  - Plan
              post:
                description: >-
                  <p>Updates the specified plan by setting the values of the
                  parameters passed. Any parameters not provided are left
                  unchanged. By design, you cannot change a plan’s ID, amount,
                  currency, or billing cycle.</p>
                summary: Update Plan
                tags:
                  - Update
                  - Plan
                  - V1
                  - Plans
                  - Plan
          tags:
            - name: Plans
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/plans-openapi-search.yml
  - aid: stripe.com:prices
    name: Stripe Prices API
    description: >-
      Prices define the unit cost, currency, and (optional) billing cycle for
      both recurring and one-time purchases of products. Products help you track
      inventory or provisioning, and prices help you track payment terms.
      Different physical goods or levels of service should be represented by
      products, and pricing options should be represented by prices. This
      approach lets you change prices without having to change your provisioning
      scheme.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/prices
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/prices
      - type: OpenAPI
        url: properties/prices-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Prices API
          paths:
            /v1/prices:
              get:
                description: >-
                  <p>Returns a list of your active prices, excluding <a
                  href="/docs/products-prices/pricing-models#inline-pricing">inline
                  prices</a>. For the list of inactive prices, set
                  <code>active</code> to false.</p>
                summary: Retrieve Prices
                tags:
                  - Retrieve
                  - Prices
                  - V1
                  - Prices
              post:
                description: >-
                  <p>Creates a new price for an existing product. The price can
                  be recurring or one-time.</p>
                summary: Create Price
                tags:
                  - Create
                  - Price
                  - V1
                  - Prices
            /v1/prices/search:
              get:
                description: >-
                  <p>Search for prices you’ve previously created using Stripe’s
                  <a href="/docs/search#search-query-language">Search Query
                  Language</a>.

                  Don’t use search in read-after-write flows where strict
                  consistency is necessary. Under normal operating

                  conditions, data is searchable in less than a minute.
                  Occasionally, propagation of new or updated data can be up

                  to an hour behind during outages. Search functionality is not
                  available to merchants in India.</p>
                summary: Search Prices
                tags:
                  - Search
                  - Prices
                  - V1
                  - Prices
                  - Search
            /v1/prices/{price}:
              get:
                description: <p>Retrieves the price with the given ID.</p>
                summary: Retrieve Price
                tags:
                  - Retrieve
                  - Price
                  - V1
                  - Prices
                  - Search
                  - Price
              post:
                description: >-
                  <p>Updates the specified price by setting the values of the
                  parameters passed. Any parameters not provided are left
                  unchanged.</p>
                summary: Update Price
                tags:
                  - Update
                  - Price
                  - V1
                  - Prices
                  - Search
                  - Price
          tags:
            - name: Prices
              description: Needs a description.
            - name: Search
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/prices-openapi-search.yml
  - aid: stripe.com:products
    name: Stripe Products API
    description: >-
      Products describe the specific goods or services you offer to your
      customers. For example, you might offer a Standard and Premium version of
      your goods or service; each version would be a separate Product. They can
      be used in conjunction with Prices to configure pricing in Payment Links,
      Checkout, and Subscriptions.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/products
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/products
      - type: OpenAPI
        url: properties/products-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Products API
          paths:
            /v1/products:
              get:
                description: >-
                  <p>Returns a list of your products. The products are returned
                  sorted by creation date, with the most recently created
                  products appearing first.</p>
                summary: Retrieve Products
                tags:
                  - Retrieve
                  - Products
                  - V1
                  - Products
              post:
                description: <p>Creates a new product object.</p>
                summary: Create Product
                tags:
                  - Create
                  - Product
                  - V1
                  - Products
            /v1/products/search:
              get:
                description: >-
                  <p>Search for products you’ve previously created using
                  Stripe’s <a href="/docs/search#search-query-language">Search
                  Query Language</a>.

                  Don’t use search in read-after-write flows where strict
                  consistency is necessary. Under normal operating

                  conditions, data is searchable in less than a minute.
                  Occasionally, propagation of new or updated data can be up

                  to an hour behind during outages. Search functionality is not
                  available to merchants in India.</p>
                summary: Search Products
                tags:
                  - Search
                  - Products
                  - V1
                  - Products
                  - Search
            /v1/products/{id}:
              delete:
                description: >-
                  <p>Delete a product. Deleting a product is only possible if it
                  has no prices associated with it. Additionally, deleting a
                  product with <code>type=good</code> is only possible if it has
                  no SKUs associated with it.</p>
                summary: Delete Product
                tags:
                  - Delete
                  - Product
                  - V1
                  - Products
                  - Search
                  - Id
              get:
                description: >-
                  <p>Retrieves the details of an existing product. Supply the
                  unique product ID from either a product creation request or
                  the product list, and Stripe will return the corresponding
                  product information.</p>
                summary: Retrieve Product
                tags:
                  - Retrieve
                  - Product
                  - V1
                  - Products
                  - Search
                  - Id
              post:
                description: >-
                  <p>Updates the specific product by setting the values of the
                  parameters passed. Any parameters not provided will be left
                  unchanged.</p>
                summary: Update Product
                tags:
                  - Update
                  - Product
                  - V1
                  - Products
                  - Search
                  - Id
          tags:
            - name: Products
              description: Needs a description.
            - name: Search
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/products-openapi-search.yml
  - aid: stripe.com:promotion-codes
    name: Stripe Promotion Codes API
    description: >-
      A Promotion Code represents a customer-redeemable code for a coupon. It
      can be used to create multiple codes for a single coupon.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/promotion_codes
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/promotion_codes
      - type: OpenAPI
        url: properties/promotion-codes-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Promotion Codes API
          paths:
            /v1/promotion_codes:
              get:
                description: <p>Returns a list of your promotion codes.</p>
                summary: Retrieve Promotion Codes
                tags:
                  - Retrieve
                  - Promotion
                  - Codes
                  - V1
                  - Promotion_codes
              post:
                description: >-
                  <p>A promotion code points to a coupon. You can optionally
                  restrict the code to a specific customer, redemption limit,
                  and expiration date.</p>
                summary: Create Promotion Code
                tags:
                  - Create
                  - Promotion
                  - Code
                  - V1
                  - Promotion_codes
            /v1/promotion_codes/{promotion_code}:
              get:
                description: >-
                  <p>Retrieves the promotion code with the given ID. In order to
                  retrieve a promotion code by the customer-facing
                  <code>code</code> use <a
                  href="/docs/api/promotion_codes/list">list</a> with the
                  desired <code>code</code>.</p>
                summary: Retrieve Promotion Code
                tags:
                  - Retrieve
                  - Promotion
                  - Code
                  - V1
                  - Promotion_codes
                  - Promotion_code
              post:
                description: >-
                  <p>Updates the specified promotion code by setting the values
                  of the parameters passed. Most fields are, by design, not
                  editable.</p>
                summary: Update Promotion Code
                tags:
                  - Update
                  - Promotion
                  - Code
                  - V1
                  - Promotion_codes
                  - Promotion_code
          tags:
            - name: Promotions
              description: Needs a description.
            - name: Codes
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/promotion-codes-openapi-search.yml
  - aid: stripe.com:quotes
    name: Stripe Quotes API
    description: >-
      A Quote is a way to model prices that you’d like to provide to a customer.
      Once accepted, it will automatically create an invoice, subscription or
      subscription schedule.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/quotes
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/quotes
      - type: OpenAPI
        url: properties/quotes-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Quotes API
          paths:
            /v1/quotes:
              get:
                description: <p>Returns a list of your quotes.</p>
                summary: Retrieve Quotes
                tags:
                  - Retrieve
                  - Quotes
                  - V1
                  - Quotes
              post:
                description: >-
                  <p>A quote models prices and services for a customer. Default
                  options for <code>header</code>, <code>description</code>,
                  <code>footer</code>, and <code>expires_at</code> can be set in
                  the dashboard via the <a
                  href="https://dashboard.stripe.com/settings/billing/quote">quote
                  template</a>.</p>
                summary: Create Quote
                tags:
                  - Create
                  - Quote
                  - V1
                  - Quotes
            /v1/quotes/{quote}:
              get:
                description: <p>Retrieves the quote with the given ID.</p>
                summary: Retrieve Quote
                tags:
                  - Retrieve
                  - Quote
                  - V1
                  - Quotes
                  - Quote
              post:
                description: <p>A quote models prices and services for a customer.</p>
                summary: Update Quote
                tags:
                  - Update
                  - Quote
                  - V1
                  - Quotes
                  - Quote
            /v1/quotes/{quote}/accept:
              post:
                description: <p>Accepts the specified quote.</p>
                summary: Accept Quote
                tags:
                  - Accept
                  - Quote
                  - V1
                  - Quotes
                  - Quote
                  - Accept
            /v1/quotes/{quote}/cancel:
              post:
                description: <p>Cancels the quote.</p>
                summary: Cancel Quote
                tags:
                  - Cancel
                  - Quote
                  - V1
                  - Quotes
                  - Quote
                  - Accept
                  - Cancel
            /v1/quotes/{quote}/computed_upfront_line_items:
              get:
                description: >-
                  <p>When retrieving a quote, there is an includable <a
                  href="https://stripe.com/docs/api/quotes/object#quote_object-computed-upfront-line_items"><strong>computed.upfront.line_items</strong></a>
                  property containing the first handful of those items. There is
                  also a URL where you can retrieve the full (paginated) list of
                  upfront line items.</p>
                summary: Retrieve Quote Computed Upfront Line Items
                tags:
                  - Retrieve
                  - Quote
                  - Computed
                  - Upfront
                  - Line
                  - Items
                  - V1
                  - Quotes
                  - Quote
                  - Accept
                  - Cancel
                  - Computed_upfront_line_items
            /v1/quotes/{quote}/finalize:
              post:
                description: <p>Finalizes the quote.</p>
                summary: Finalize Quote
                tags:
                  - Finalize
                  - Quote
                  - V1
                  - Quotes
                  - Quote
                  - Accept
                  - Cancel
                  - Computed_upfront_line_items
                  - Finalize
            /v1/quotes/{quote}/line_items:
              get:
                description: >-
                  <p>When retrieving a quote, there is an includable
                  <strong>line_items</strong> property containing the first
                  handful of those items. There is also a URL where you can
                  retrieve the full (paginated) list of line items.</p>
                summary: Retrieve Quote Line Items
                tags:
                  - Retrieve
                  - Quote
                  - Line
                  - Items
                  - V1
                  - Quotes
                  - Quote
                  - Accept
                  - Cancel
                  - Computed_upfront_line_items
                  - Finalize
                  - Line_items
            /v1/quotes/{quote}/pdf:
              get:
                description: <p>Download the PDF for a finalized quote</p>
                summary: Retrieve Quote PDF
                tags:
                  - Retrieve
                  - Quote
                  - V1
                  - Quotes
                  - Quote
                  - Accept
                  - Cancel
                  - Computed_upfront_line_items
                  - Finalize
                  - Line_items
                  - Pdf
          tags:
            - name: Quotes
              description: Needs a description.
            - name: Accept
              description: Needs a description.
            - name: Cancel
              description: Needs a description.
            - name: Computed
              description: Needs a description.
            - name: Upfront
              description: Needs a description.
            - name: Lines
              description: Needs a description.
            - name: Items
              description: Needs a description.
            - name: Finalize
              description: Needs a description.
            - name: PDF
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/quotes-openapi-search.yml
  - aid: stripe.com:radar
    name: Stripe Radar API
    description: >-
      Stripe Radar provides real-time fraud protection and requires no
      additional development time. Fraud professionals can add Radar for Fraud
      Teams to customize protection and get deeper insights.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/radar
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/radar
      - type: OpenAPI
        url: properties/radar-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Radar API
          paths:
            /v1/radar/early_fraud_warnings:
              get:
                description: <p>Returns a list of early fraud warnings.</p>
                summary: Retrieve Early Fraud Warnings
                tags:
                  - Retrieve
                  - Early
                  - Fraud
                  - Warnings
                  - V1
                  - Radar
                  - Early_fraud_warnings
            /v1/radar/early_fraud_warnings/{early_fraud_warning}:
              get:
                description: >-
                  <p>Retrieves the details of an early fraud warning that has
                  previously been created. </p>


                  <p>Please refer to the <a
                  href="#early_fraud_warning_object">early fraud warning</a>
                  object reference for more details.</p>
                summary: Retrieve Early Fraud Warning
                tags:
                  - Retrieve
                  - Early
                  - Fraud
                  - Warning
                  - V1
                  - Radar
                  - Early_fraud_warnings
                  - Early_fraud_warning
            /v1/radar/value_list_items:
              get:
                description: >-
                  <p>Returns a list of <code>ValueListItem</code> objects. The
                  objects are sorted in descending order by creation date, with
                  the most recently created object appearing first.</p>
                summary: Retrieve Value List Items
                tags:
                  - Retrieve
                  - Value
                  - List
                  - Items
                  - V1
                  - Radar
                  - Early_fraud_warnings
                  - Early_fraud_warning
                  - Value_list_items
              post:
                description: >-
                  <p>Creates a new <code>ValueListItem</code> object, which is
                  added to the specified parent value list.</p>
                summary: Create Value List Items
                tags:
                  - Create
                  - Value
                  - List
                  - Items
                  - V1
                  - Radar
                  - Early_fraud_warnings
                  - Early_fraud_warning
                  - Value_list_items
            /v1/radar/value_list_items/{item}:
              delete:
                description: >-
                  <p>Deletes a <code>ValueListItem</code> object, removing it
                  from its parent value list.</p>
                summary: Delete Value List Item
                tags:
                  - Delete
                  - Value
                  - List
                  - Item
                  - V1
                  - Radar
                  - Early_fraud_warnings
                  - Early_fraud_warning
                  - Value_list_items
                  - Item
              get:
                description: <p>Retrieves a <code>ValueListItem</code> object.</p>
                summary: Retrieve Value List Item
                tags:
                  - Retrieve
                  - Value
                  - List
                  - Item
                  - V1
                  - Radar
                  - Early_fraud_warnings
                  - Early_fraud_warning
                  - Value_list_items
                  - Item
            /v1/radar/value_lists:
              get:
                description: >-
                  <p>Returns a list of <code>ValueList</code> objects. The
                  objects are sorted in descending order by creation date, with
                  the most recently created object appearing first.</p>
                summary: Retrieve Value Lists
                tags:
                  - Retrieve
                  - Value
                  - Lists
                  - V1
                  - Radar
                  - Early_fraud_warnings
                  - Early_fraud_warning
                  - Value_list_items
                  - Item
                  - Value_lists
              post:
                description: >-
                  <p>Creates a new <code>ValueList</code> object, which can then
                  be referenced in rules.</p>
                summary: Create Value List
                tags:
                  - Create
                  - Value
                  - List
                  - V1
                  - Radar
                  - Early_fraud_warnings
                  - Early_fraud_warning
                  - Value_list_items
                  - Item
                  - Value_lists
            /v1/radar/value_lists/{value_list}:
              delete:
                description: >-
                  <p>Deletes a <code>ValueList</code> object, also deleting any
                  items contained within the value list. To be deleted, a value
                  list must not be referenced in any rules.</p>
                summary: Delete Value List
                tags:
                  - Delete
                  - Value
                  - List
                  - V1
                  - Radar
                  - Early_fraud_warnings
                  - Early_fraud_warning
                  - Value_list_items
                  - Item
                  - Value_lists
                  - Value_list
              get:
                description: <p>Retrieves a <code>ValueList</code> object.</p>
                summary: Retrieve Value List
                tags:
                  - Retrieve
                  - Value
                  - List
                  - V1
                  - Radar
                  - Early_fraud_warnings
                  - Early_fraud_warning
                  - Value_list_items
                  - Item
                  - Value_lists
                  - Value_list
              post:
                description: >-
                  <p>Updates a <code>ValueList</code> object by setting the
                  values of the parameters passed. Any parameters not provided
                  will be left unchanged. Note that <code>item_type</code> is
                  immutable.</p>
                summary: Update Value List
                tags:
                  - Update
                  - Value
                  - List
                  - V1
                  - Radar
                  - Early_fraud_warnings
                  - Early_fraud_warning
                  - Value_list_items
                  - Item
                  - Value_lists
                  - Value_list
          tags:
            - name: Radar
              description: Needs a description.
            - name: Early
              description: Needs a description.
            - name: Fraud
              description: Needs a description.
            - name: Warnings
              description: Needs a description.
            - name: Values
              description: Needs a description.
            - name: Lists
              description: Needs a description.
            - name: Items
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/radar-openapi-search.yml
  - aid: stripe.com:refunds
    name: Stripe Refunds API
    description: >-
      Refund objects allow you to refund a previously created charge that isn’t
      refunded yet. Funds are refunded to the credit or debit card that’s
      initially charged.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/refunds
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/refunds
      - type: OpenAPI
        url: properties/refunds-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Refunds API
          paths:
            /v1/refunds:
              get:
                description: >-
                  <p>Returns a list of all refunds you created. We return the
                  refunds in sorted order, with the most recent refunds
                  appearing first The 10 most recent refunds are always
                  available by default on the Charge object.</p>
                summary: Retrieve Refunds
                tags:
                  - Retrieve
                  - Refunds
                  - V1
                  - Refunds
              post:
                description: >-
                  <p>When you create a new refund, you must specify a Charge or
                  a PaymentIntent object on which to create it.</p>


                  <p>Creating a new refund will refund a charge that has
                  previously been created but not yet refunded.

                  Funds will be refunded to the credit or debit card that was
                  originally charged.</p>


                  <p>You can optionally refund only part of a charge.

                  You can do so multiple times, until the entire charge has been
                  refunded.</p>


                  <p>Once entirely refunded, a charge can’t be refunded again.

                  This method will raise an error when called on an
                  already-refunded charge,

                  or when trying to refund more money than is left on a
                  charge.</p>
                summary: Create Refund
                tags:
                  - Create
                  - Refund
                  - V1
                  - Refunds
            /v1/refunds/{refund}:
              get:
                description: <p>Retrieves the details of an existing refund.</p>
                summary: Retrieve Refund
                tags:
                  - Retrieve
                  - Refund
                  - V1
                  - Refunds
                  - Refund
              post:
                description: >-
                  <p>Updates the refund that you specify by setting the values
                  of the passed parameters. Any parameters that you don’t
                  provide remain unchanged.</p>


                  <p>This request only accepts <code>metadata</code> as an
                  argument.</p>
                summary: Update Refund
                tags:
                  - Update
                  - Refund
                  - V1
                  - Refunds
                  - Refund
            /v1/refunds/{refund}/cancel:
              post:
                description: >-
                  <p>Cancels a refund with a status of
                  <code>requires_action</code>.</p>


                  <p>You can’t cancel refunds in other states. Only refunds for
                  payment methods that require customer action can enter the
                  <code>requires_action</code> state.</p>
                summary: Cancel Refund
                tags:
                  - Cancel
                  - Refund
                  - V1
                  - Refunds
                  - Refund
                  - Cancel
          tags:
            - name: Refunds
              description: Needs a description.
            - name: Cancel
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/refunds-openapi-search.yml
  - aid: stripe.com:reporting
    name: Stripe Reporting API
    description: >-
      The financial reports in the Dashboard provide downloadable reports in CSV
      format for a variety of accounting and reconciliation tasks. These reports
      are also available through the API, so you can schedule them to run
      automatically or run them whenever you need to receive the associated
      report files for accounting purposes.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/reports/api
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/reports/api
      - type: OpenAPI
        url: properties/reporting-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Reporting API
          paths:
            /v1/reporting/report_runs:
              get:
                description: >-
                  <p>Returns a list of Report Runs, with the most recent
                  appearing first.</p>
                summary: Retrieve Report Runs
                tags:
                  - Retrieve
                  - Report
                  - Runs
                  - V1
                  - Reporting
                  - Report_runs
              post:
                description: >-
                  <p>Creates a new object and begin running the report. (Certain
                  report types require a <a
                  href="https://stripe.com/docs/keys#test-live-modes">live-mode
                  API key</a>.)</p>
                summary: Create Report Run
                tags:
                  - Create
                  - Report
                  - Run
                  - V1
                  - Reporting
                  - Report_runs
            /v1/reporting/report_runs/{report_run}:
              get:
                description: <p>Retrieves the details of an existing Report Run.</p>
                summary: Retrieve Report Run
                tags:
                  - Retrieve
                  - Report
                  - Run
                  - V1
                  - Reporting
                  - Report_runs
                  - Report_run
            /v1/reporting/report_types:
              get:
                description: <p>Returns a full list of Report Types.</p>
                summary: Retrieve Report Types
                tags:
                  - Retrieve
                  - Report
                  - Types
                  - V1
                  - Reporting
                  - Report_runs
                  - Report_run
                  - Report_types
            /v1/reporting/report_types/{report_type}:
              get:
                description: >-
                  <p>Retrieves the details of a Report Type. (Certain report
                  types require a <a
                  href="https://stripe.com/docs/keys#test-live-modes">live-mode
                  API key</a>.)</p>
                summary: Retrieve Report Type
                tags:
                  - Retrieve
                  - Report
                  - Type
                  - V1
                  - Reporting
                  - Report_runs
                  - Report_run
                  - Report_types
                  - Report_type
          tags:
            - name: Reports
              description: Needs a description.
            - name: Runs
              description: Needs a description.
            - name: Types
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/reporting-openapi-search.yml
  - aid: stripe.com:reviews
    name: Stripe Reviews API
    description: >-
      Reviews can be used to supplement automated fraud detection with human
      expertise.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/radar/reviews
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/radar/reviews
      - type: OpenAPI
        url: properties/reviews-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Reviews API
          paths:
            /v1/reviews:
              get:
                description: >-
                  <p>Returns a list of <code>Review</code> objects that have
                  <code>open</code> set to <code>true</code>. The objects are
                  sorted in descending order by creation date, with the most
                  recently created object appearing first.</p>
                summary: Retrieve Reviews
                tags:
                  - Retrieve
                  - Reviews
                  - V1
                  - Reviews
            /v1/reviews/{review}:
              get:
                description: <p>Retrieves a <code>Review</code> object.</p>
                summary: Retrieve Review
                tags:
                  - Retrieve
                  - Review
                  - V1
                  - Reviews
                  - Review
            /v1/reviews/{review}/approve:
              post:
                description: >-
                  <p>Approves a <code>Review</code> object, closing it and
                  removing it from the list of reviews.</p>
                summary: Approve Review
                tags:
                  - Approve
                  - Review
                  - V1
                  - Reviews
                  - Review
                  - Approve
          tags:
            - name: Reviews
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/reviews-openapi-search.yml
  - aid: stripe.com:setup
    name: Stripe Setup API
    description: >-
      Use the Setup Intents API to set up a payment method for future payments.
      It’s similar to a payment, but no charge is created. Set up a payment
      method for future payments now.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/payments/setup-intents
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/payments/setup-intents
      - type: OpenAPI
        url: properties/setup-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Setup API
          paths:
            /v1/setup_attempts:
              get:
                description: >-
                  <p>Returns a list of SetupAttempts that associate with a
                  provided SetupIntent.</p>
                summary: Retrieve Setup Attempts
                tags:
                  - Retrieve
                  - Setup
                  - Attempts
                  - V1
                  - Setup_attempts
            /v1/setup_intents:
              get:
                description: <p>Returns a list of SetupIntents.</p>
                summary: Retrieve Setup Intents
                tags:
                  - Retrieve
                  - Setup
                  - Intents
                  - V1
                  - Setup_attempts
                  - Setup_intents
              post:
                description: >-
                  <p>Creates a SetupIntent object.</p>


                  <p>After you create the SetupIntent, attach a payment method
                  and <a href="/docs/api/setup_intents/confirm">confirm</a>

                  it to collect any required permissions to charge the payment
                  method later.</p>
                summary: Create Setup Intent
                tags:
                  - Create
                  - Setup
                  - Intent
                  - V1
                  - Setup_attempts
                  - Setup_intents
            /v1/setup_intents/{intent}:
              get:
                description: >-
                  <p>Retrieves the details of a SetupIntent that has previously
                  been created. </p>


                  <p>Client-side retrieval using a publishable key is allowed
                  when the <code>client_secret</code> is provided in the query
                  string. </p>


                  <p>When retrieved with a publishable key, only a subset of
                  properties will be returned. Please refer to the <a
                  href="#setup_intent_object">SetupIntent</a> object reference
                  for more details.</p>
                summary: Retrieve Setup Intent
                tags:
                  - Retrieve
                  - Setup
                  - Intent
                  - V1
                  - Setup_attempts
                  - Setup_intents
                  - Intent
              post:
                description: <p>Updates a SetupIntent object.</p>
                summary: Update Setup Intent
                tags:
                  - Update
                  - Setup
                  - Intent
                  - V1
                  - Setup_attempts
                  - Setup_intents
                  - Intent
            /v1/setup_intents/{intent}/cancel:
              post:
                description: >-
                  <p>You can cancel a SetupIntent object when it’s in one of
                  these statuses: <code>requires_payment_method</code>,
                  <code>requires_confirmation</code>, or
                  <code>requires_action</code>. </p>


                  <p>After you cancel it, setup is abandoned and any operations
                  on the SetupIntent fail with an error.</p>
                summary: Cancel Setup Intent
                tags:
                  - Cancel
                  - Setup
                  - Intent
                  - V1
                  - Setup_attempts
                  - Setup_intents
                  - Intent
                  - Cancel
            /v1/setup_intents/{intent}/confirm:
              post:
                description: >-
                  <p>Confirm that your customer intends to set up the current or

                  provided payment method. For example, you would confirm a
                  SetupIntent

                  when a customer hits the “Save” button on a payment method
                  management

                  page on your website.</p>


                  <p>If the selected payment method does not require any
                  additional

                  steps from the customer, the SetupIntent will transition to
                  the

                  <code>succeeded</code> status.</p>


                  <p>Otherwise, it will transition to the
                  <code>requires_action</code> status and

                  suggest additional actions via <code>next_action</code>. If
                  setup fails,

                  the SetupIntent will transition to the

                  <code>requires_payment_method</code> status or the
                  <code>canceled</code> status if the

                  confirmation limit is reached.</p>
                summary: Confirm Setup Intent
                tags:
                  - Confirm
                  - Setup
                  - Intent
                  - V1
                  - Setup_attempts
                  - Setup_intents
                  - Intent
                  - Cancel
                  - Confirm
            /v1/setup_intents/{intent}/verify_microdeposits:
              post:
                description: <p>Verifies microdeposits on a SetupIntent object.</p>
                summary: Verify Setup Intent Microdeposit
                tags:
                  - Verify
                  - Setup
                  - Intent
                  - Microdeposit
                  - V1
                  - Setup_attempts
                  - Setup_intents
                  - Intent
                  - Cancel
                  - Confirm
                  - Verify_microdeposits
          tags:
            - name: Setup
              description: Needs a description.
            - name: Attempts
              description: Needs a description.
            - name: Intents
              description: Needs a description.
            - name: Cancel
              description: Needs a description.
            - name: Intent
              description: Needs a description.
            - name: Confirm
              description: Needs a description.
            - name: Verify
              description: Needs a description.
            - name: Micro
              description: Needs a description.
            - name: Deposits
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/setup-openapi-search.yml
  - aid: stripe.com:shipping-rates
    name: Stripe Shipping Rates API
    description: >-
      Shipping rates describe the price of shipping presented to your customers
      and applied to a purchase.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/shipping_rates
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/shipping_rates
      - type: OpenAPI
        url: properties/shipping-rates-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Shipping Rates API
          paths:
            /v1/shipping_rates:
              get:
                description: <p>Returns a list of your shipping rates.</p>
                summary: Retrieve Shipping Rates
                tags:
                  - Retrieve
                  - Shipping
                  - Rates
                  - V1
                  - Shipping_rates
              post:
                description: <p>Creates a new shipping rate object.</p>
                summary: Create Shipping Rate
                tags:
                  - Create
                  - Shipping
                  - Rate
                  - V1
                  - Shipping_rates
            /v1/shipping_rates/{shipping_rate_token}:
              get:
                description: <p>Returns the shipping rate object with the given ID.</p>
                summary: Retrieve Shipping Rate Token
                tags:
                  - Retrieve
                  - Shipping
                  - Rate
                  - Token
                  - V1
                  - Shipping_rates
                  - Shipping_rate_token
              post:
                description: <p>Updates an existing shipping rate object.</p>
                summary: Update Shipping Rate Token
                tags:
                  - Update
                  - Shipping
                  - Rate
                  - Token
                  - V1
                  - Shipping_rates
                  - Shipping_rate_token
          tags:
            - name: Shipping
              description: Needs a description.
            - name: Rates
              description: Needs a description.
            - name: Tokens
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/shipping-rates-openapi-search.yml
  - aid: stripe.com:sigma
    name: Stripe Sigma API
    description: >-
      If you have scheduled a Sigma query, you’ll receive a
      sigma.scheduled_query_run.created webhook each time the query runs. The
      webhook contains a ScheduledQueryRun object, which you can use to retrieve
      the query results.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/sigma/scheduled_queries
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/sigma/scheduled_queries
      - type: OpenAPI
        url: properties/sigma-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Sigma API
          paths:
            /v1/sigma/scheduled_query_runs:
              get:
                description: <p>Returns a list of scheduled query runs.</p>
                summary: Retrieve Scheduled Query Runs
                tags:
                  - Retrieve
                  - Scheduled
                  - Query
                  - Runs
                  - V1
                  - Sigma
                  - Scheduled_query_runs
            /v1/sigma/scheduled_query_runs/{scheduled_query_run}:
              get:
                description: <p>Retrieves the details of an scheduled query run.</p>
                summary: Retrieve Scheduled Query Run
                tags:
                  - Retrieve
                  - Scheduled
                  - Query
                  - Run
                  - V1
                  - Sigma
                  - Scheduled_query_runs
                  - Scheduled_query_run
          tags:
            - name: Scheduled
              description: Needs a description.
            - name: Query
              description: Needs a description.
            - name: Runs
              description: Needs a description.
            - name: ' '
              description: Needs a description.
            - name: Sigma
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/sigma-openapi-search.yml
  - aid: stripe.com:sources
    name: Stripe Sources API
    description: >-
      Source objects allow you to accept a variety of payment methods. They
      represent a customer’s payment instrument, and can be used with the Stripe
      API just like a Card object once chargeable, they can be charged, or can
      be attached to customers.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/sources
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/sources
      - type: OpenAPI
        url: properties/sources-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Sources API
          paths:
            /v1/sources:
              post:
                description: <p>Creates a new source object.</p>
                summary: Create Source
                tags:
                  - Create
                  - Source
                  - V1
                  - Sources
            /v1/sources/{source}:
              get:
                description: >-
                  <p>Retrieves an existing source object. Supply the unique
                  source ID from a source creation request and Stripe will
                  return the corresponding up-to-date source object
                  information.</p>
                summary: Retrieve Source
                tags:
                  - Retrieve
                  - Source
                  - V1
                  - Sources
                  - Source
              post:
                description: >-
                  <p>Updates the specified source by setting the values of the
                  parameters passed. Any parameters not provided will be left
                  unchanged.</p>


                  <p>This request accepts the <code>metadata</code> and
                  <code>owner</code> as arguments. It is also possible to update
                  type specific information for selected payment methods. Please
                  refer to our <a href="/docs/sources">payment method guides</a>
                  for more detail.</p>
                summary: Update Source
                tags:
                  - Update
                  - Source
                  - V1
                  - Sources
                  - Source
            /v1/sources/{source}/mandate_notifications/{mandate_notification}:
              get:
                description: <p>Retrieves a new Source MandateNotification.</p>
                summary: Retrieve Source Mandate Notification
                tags:
                  - Retrieve
                  - Source
                  - Mandate
                  - Notification
                  - V1
                  - Sources
                  - Source
                  - Mandate_notifications
                  - Mandate_notification
            /v1/sources/{source}/source_transactions:
              get:
                description: <p>List source transactions for a given source.</p>
                summary: Retrieve Source Transactions
                tags:
                  - Retrieve
                  - Source
                  - Transactions
                  - V1
                  - Sources
                  - Source
                  - Mandate_notifications
                  - Mandate_notification
                  - Source_transactions
            /v1/sources/{source}/source_transactions/{source_transaction}:
              get:
                description: >-
                  <p>Retrieve an existing source transaction object. Supply the
                  unique source ID from a source creation request and the source
                  transaction ID and Stripe will return the corresponding
                  up-to-date source object information.</p>
                summary: Retrieve Source Transaction
                tags:
                  - Retrieve
                  - Source
                  - Transaction
                  - V1
                  - Sources
                  - Source
                  - Mandate_notifications
                  - Mandate_notification
                  - Source_transactions
                  - Source_transaction
            /v1/sources/{source}/verify:
              post:
                description: <p>Verify a given source.</p>
                summary: Verify Source
                tags:
                  - Verify
                  - Source
                  - V1
                  - Sources
                  - Source
                  - Mandate_notifications
                  - Mandate_notification
                  - Source_transactions
                  - Source_transaction
                  - Verify
          tags:
            - name: Sources
              description: Needs a description.
            - name: Mandates
              description: Needs a description.
            - name: Notifications
              description: Needs a description.
            - name: Transactions
              description: Needs a description.
            - name: Verify
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/sources-openapi-search.yml
  - aid: stripe.com:subscription
    name: Stripe Subscription API
    description: Subscriptions allow you to charge a customer on a recurring basis.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/subscriptions
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/subscriptions
      - type: OpenAPI
        url: properties/subscription-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Subscription API
          paths:
            /v1/subscription_items:
              get:
                description: >-
                  <p>Returns a list of your subscription items for a given
                  subscription.</p>
                summary: Retrieve Subscription Items
                tags:
                  - Retrieve
                  - Subscription
                  - Items
                  - V1
                  - Subscription_items
              post:
                description: >-
                  <p>Adds a new item to an existing subscription. No existing
                  items will be changed or replaced.</p>
                summary: Create Subscription Item
                tags:
                  - Create
                  - Subscription
                  - Item
                  - V1
                  - Subscription_items
            /v1/subscription_items/{item}:
              delete:
                description: >-
                  <p>Deletes an item from the subscription. Removing a
                  subscription item from a subscription will not cancel the
                  subscription.</p>
                summary: Delete Subscription Item
                tags:
                  - Delete
                  - Subscription
                  - Item
                  - V1
                  - Subscription_items
                  - Item
              get:
                description: <p>Retrieves the subscription item with the given ID.</p>
                summary: Retrieve Subscription Item
                tags:
                  - Retrieve
                  - Subscription
                  - Item
                  - V1
                  - Subscription_items
                  - Item
              post:
                description: >-
                  <p>Updates the plan or quantity of an item on a current
                  subscription.</p>
                summary: Update Subscription Item
                tags:
                  - Update
                  - Subscription
                  - Item
                  - V1
                  - Subscription_items
                  - Item
            /v1/subscription_items/{subscription_item}/usage_record_summaries:
              get:
                description: >-
                  <p>For the specified subscription item, returns a list of
                  summary objects. Each object in the list provides usage
                  information that’s been summarized from multiple usage records
                  and over a subscription billing period (e.g., 15 usage records
                  in the month of September).</p>


                  <p>The list is sorted in reverse-chronological order (newest
                  first). The first list item represents the most current usage
                  period that hasn’t ended yet. Since new usage records can
                  still be added, the returned summary information for the
                  subscription item’s ID should be seen as unstable until the
                  subscription billing period ends.</p>
                summary: Retrieve Subscription Item Usage Record Summaries
                tags:
                  - Retrieve
                  - Subscription
                  - Item
                  - Usage
                  - Record
                  - Summaries
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
            /v1/subscription_items/{subscription_item}/usage_records:
              post:
                description: >-
                  <p>Creates a usage record for a specified subscription item
                  and date, and fills it with a quantity.</p>


                  <p>Usage records provide <code>quantity</code> information
                  that Stripe uses to track how much a customer is using your
                  service. With usage information and the pricing model set up
                  by the <a
                  href="https://stripe.com/docs/billing/subscriptions/metered-billing">metered
                  billing</a> plan, Stripe helps you send accurate invoices to
                  your customers.</p>


                  <p>The default calculation for usage is to add up all the
                  <code>quantity</code> values of the usage records within a
                  billing period. You can change this default behavior with the
                  billing plan’s <code>aggregate_usage</code> <a
                  href="/docs/api/plans/create#create_plan-aggregate_usage">parameter</a>.
                  When there is more than one usage record with the same
                  timestamp, Stripe adds the <code>quantity</code> values
                  together. In most cases, this is the desired resolution,
                  however, you can change this behavior with the
                  <code>action</code> parameter.</p>


                  <p>The default pricing model for metered billing is <a
                  href="/docs/api/plans/object#plan_object-billing_scheme">per-unit
                  pricing</a>. For finer granularity, you can configure metered
                  billing to have a <a
                  href="https://stripe.com/docs/billing/subscriptions/tiers">tiered
                  pricing</a> model.</p>
                summary: Create Subscription Item Usage Record
                tags:
                  - Create
                  - Subscription
                  - Item
                  - Usage
                  - Record
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
            /v1/subscription_schedules:
              get:
                description: <p>Retrieves the list of your subscription schedules.</p>
                summary: Retrieve Subscription Schedules
                tags:
                  - Retrieve
                  - Subscription
                  - Schedules
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
                  - Subscription_schedules
              post:
                description: >-
                  <p>Creates a new subscription schedule object. Each customer
                  can have up to 500 active or scheduled subscriptions.</p>
                summary: Create Subscription Schedule
                tags:
                  - Create
                  - Subscription
                  - Schedule
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
                  - Subscription_schedules
            /v1/subscription_schedules/{schedule}:
              get:
                description: >-
                  <p>Retrieves the details of an existing subscription schedule.
                  You only need to supply the unique subscription schedule
                  identifier that was returned upon subscription schedule
                  creation.</p>
                summary: Retrieve Subscription Schedule
                tags:
                  - Retrieve
                  - Subscription
                  - Schedule
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
                  - Subscription_schedules
                  - Schedule
              post:
                description: <p>Updates an existing subscription schedule.</p>
                summary: Update Subscription Schedule
                tags:
                  - Update
                  - Subscription
                  - Schedule
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
                  - Subscription_schedules
                  - Schedule
            /v1/subscription_schedules/{schedule}/cancel:
              post:
                description: >-
                  <p>Cancels a subscription schedule and its associated
                  subscription immediately (if the subscription schedule has an
                  active subscription). A subscription schedule can only be
                  canceled if its status is <code>not_started</code> or
                  <code>active</code>.</p>
                summary: Cancel Subscription Schedule
                tags:
                  - Cancel
                  - Subscription
                  - Schedule
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
                  - Subscription_schedules
                  - Schedule
                  - Cancel
            /v1/subscription_schedules/{schedule}/release:
              post:
                description: >-
                  <p>Releases the subscription schedule immediately, which will
                  stop scheduling of its phases, but leave any existing
                  subscription in place. A schedule can only be released if its
                  status is <code>not_started</code> or <code>active</code>. If
                  the subscription schedule is currently associated with a
                  subscription, releasing it will remove its
                  <code>subscription</code> property and set the subscription’s
                  ID to the <code>released_subscription</code> property.</p>
                summary: Release Subscription Schedule
                tags:
                  - Release
                  - Subscription
                  - Schedule
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
                  - Subscription_schedules
                  - Schedule
                  - Cancel
                  - Release
            /v1/subscriptions:
              get:
                description: >-
                  <p>By default, returns a list of subscriptions that have not
                  been canceled. In order to list canceled subscriptions,
                  specify <code>status=canceled</code>.</p>
                summary: Retrieve Subscriptions
                tags:
                  - Retrieve
                  - Subscriptions
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
                  - Subscription_schedules
                  - Schedule
                  - Cancel
                  - Release
                  - Subscriptions
              post:
                description: >-
                  <p>Creates a new subscription on an existing customer. Each
                  customer can have up to 500 active or scheduled
                  subscriptions.</p>


                  <p>When you create a subscription with
                  <code>collection_method=charge_automatically</code>, the first
                  invoice is finalized as part of the request.

                  The <code>payment_behavior</code> parameter determines the
                  exact behavior of the initial payment.</p>


                  <p>To start subscriptions where the first invoice always
                  begins in a <code>draft</code> status, use <a
                  href="/docs/billing/subscriptions/subscription-schedules#managing">subscription
                  schedules</a> instead.

                  Schedules provide the flexibility to model more complex
                  billing configurations that change over time.</p>
                summary: Create Subscription
                tags:
                  - Create
                  - Subscription
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
                  - Subscription_schedules
                  - Schedule
                  - Cancel
                  - Release
                  - Subscriptions
            /v1/subscriptions/search:
              get:
                description: >-
                  <p>Search for subscriptions you’ve previously created using
                  Stripe’s <a href="/docs/search#search-query-language">Search
                  Query Language</a>.

                  Don’t use search in read-after-write flows where strict
                  consistency is necessary. Under normal operating

                  conditions, data is searchable in less than a minute.
                  Occasionally, propagation of new or updated data can be up

                  to an hour behind during outages. Search functionality is not
                  available to merchants in India.</p>
                summary: Search Subscriptions
                tags:
                  - Search
                  - Subscriptions
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
                  - Subscription_schedules
                  - Schedule
                  - Cancel
                  - Release
                  - Subscriptions
                  - Search
            /v1/subscriptions/{subscription_exposed_id}:
              delete:
                description: >-
                  <p>Cancels a customer’s subscription immediately. The customer
                  will not be charged again for the subscription.</p>


                  <p>Note, however, that any pending invoice items that you’ve
                  created will still be charged for at the end of the period,
                  unless manually <a href="#delete_invoiceitem">deleted</a>. If
                  you’ve set the subscription to cancel at the end of the
                  period, any pending prorations will also be left in place and
                  collected at the end of the period. But if the subscription is
                  set to cancel immediately, pending prorations will be
                  removed.</p>


                  <p>By default, upon subscription cancellation, Stripe will
                  stop automatic collection of all finalized invoices for the
                  customer. This is intended to prevent unexpected payment
                  attempts after the customer has canceled a subscription.
                  However, you can resume automatic collection of the invoices
                  manually after subscription cancellation to have us proceed.
                  Or, you could check for unpaid invoices before allowing the
                  customer to cancel the subscription at all.</p>
                summary: Delete Subscription
                tags:
                  - Delete
                  - Subscription
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
                  - Subscription_schedules
                  - Schedule
                  - Cancel
                  - Release
                  - Subscriptions
                  - Search
                  - Subscription_exposed_id
              get:
                description: <p>Retrieves the subscription with the given ID.</p>
                summary: Retrieve Subscription
                tags:
                  - Retrieve
                  - Subscription
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
                  - Subscription_schedules
                  - Schedule
                  - Cancel
                  - Release
                  - Subscriptions
                  - Search
                  - Subscription_exposed_id
              post:
                description: >-
                  <p>Updates an existing subscription to match the specified
                  parameters.

                  When changing prices or quantities, we optionally prorate the
                  price we charge next month to make up for any price changes.

                  To preview how the proration is calculated, use the <a
                  href="/docs/api/invoices/upcoming">upcoming invoice</a>
                  endpoint.</p>


                  <p>By default, we prorate subscription changes. For example,
                  if a customer signs up on May 1 for a <currency>100</currency>
                  price, they’ll be billed <currency>100</currency> immediately.
                  If on May 15 they switch to a <currency>200</currency> price,
                  then on June 1 they’ll be billed <currency>250</currency>
                  (<currency>200</currency> for a renewal of her subscription,
                  plus a <currency>50</currency> prorating adjustment for half
                  of the previous month’s <currency>100</currency> difference).
                  Similarly, a downgrade generates a credit that is applied to
                  the next invoice. We also prorate when you make quantity
                  changes.</p>


                  <p>Switching prices does not normally change the billing date
                  or generate an immediate charge unless:</p>


                  <ul>

                  <li>The billing interval is changed (for example, from monthly
                  to yearly).</li>

                  <li>The subscription moves from free to paid, or paid to
                  free.</li>

                  <li>A trial starts or ends.</li>

                  </ul>


                  <p>In these cases, we apply a credit for the unused time on
                  the previous price, immediately charge the customer using the
                  new price, and reset the billing date.</p>


                  <p>If you want to charge for an upgrade immediately, pass
                  <code>proration_behavior</code> as <code>always_invoice</code>
                  to create prorations, automatically invoice the customer for
                  those proration adjustments, and attempt to collect payment.
                  If you pass <code>create_prorations</code>, the prorations are
                  created but not automatically invoiced. If you want to bill
                  the customer for the prorations before the subscription’s
                  renewal date, you need to manually <a
                  href="/docs/api/invoices/create">invoice the customer</a>.</p>


                  <p>If you don’t want to prorate, set the
                  <code>proration_behavior</code> option to <code>none</code>.
                  With this option, the customer is billed
                  <currency>100</currency> on May 1 and <currency>200</currency>
                  on June 1. Similarly, if you set
                  <code>proration_behavior</code> to <code>none</code> when
                  switching between different billing intervals (for example,
                  from monthly to yearly), we don’t generate any credits for the
                  old subscription’s unused time. We still reset the billing
                  date and bill immediately for the new subscription.</p>


                  <p>Updating the quantity on a subscription many times in an
                  hour may result in <a href="/docs/rate-limits">rate
                  limiting</a>. If you need to bill for a frequently changing
                  quantity, consider integrating <a
                  href="/docs/billing/subscriptions/usage-based">usage-based
                  billing</a> instead.</p>
                summary: Update Subscription
                tags:
                  - Update
                  - Subscription
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
                  - Subscription_schedules
                  - Schedule
                  - Cancel
                  - Release
                  - Subscriptions
                  - Search
                  - Subscription_exposed_id
            /v1/subscriptions/{subscription_exposed_id}/discount:
              delete:
                description: >-
                  <p>Removes the currently applied discount on a
                  subscription.</p>
                summary: Remove Subscription Discount
                tags:
                  - Remove
                  - Subscription
                  - Discount
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
                  - Subscription_schedules
                  - Schedule
                  - Cancel
                  - Release
                  - Subscriptions
                  - Search
                  - Subscription_exposed_id
                  - Discount
            /v1/subscriptions/{subscription}/resume:
              post:
                description: >-
                  <p>Initiates resumption of a paused subscription, optionally
                  resetting the billing cycle anchor and creating prorations. If
                  a resumption invoice is generated, it must be paid or marked
                  uncollectible before the subscription will be unpaused. If
                  payment succeeds the subscription will become
                  <code>active</code>, and if payment fails the subscription
                  will be <code>past_due</code>. The resumption invoice will
                  void automatically if not paid by the expiration date.</p>
                summary: Resume Subscription
                tags:
                  - Resume
                  - Subscription
                  - V1
                  - Subscription_items
                  - Item
                  - Subscription_item
                  - Usage_record_summaries
                  - Usage_records
                  - Subscription_schedules
                  - Schedule
                  - Cancel
                  - Release
                  - Subscriptions
                  - Search
                  - Subscription_exposed_id
                  - Discount
                  - Subscription
                  - Resume
          tags:
            - name: Subscriptions
              description: Needs a description.
            - name: Items
              description: Needs a description.
            - name: Usage
              description: Needs a description.
            - name: Records
              description: Needs a description.
            - name: Summaries
              description: Needs a description.
            - name: Schedules
              description: Needs a description.
            - name: Cancel
              description: Needs a description.
            - name: Release
              description: Needs a description.
            - name: Search
              description: Needs a description.
            - name: Discounts
              description: Needs a description.
            - name: Resume
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/subscription-openapi-search.yml
  - aid: stripe.com:tax
    name: Stripe Tax API
    description: >-
      Automate sales tax, VAT, and GST compliance on all your transactions—low
      or no code integrations available.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/tax
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/tax
      - type: OpenAPI
        url: properties/tax-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Tax API
          paths:
            /v1/tax/calculations:
              post:
                description: >-
                  <p>Calculates tax based on input and returns a Tax
                  <code>Calculation</code> object.</p>
                summary: Calculate Tax
                tags:
                  - Calculate
                  - Tax
                  - V1
                  - Tax
                  - Calculations
            /v1/tax/calculations/{calculation}/line_items:
              get:
                description: >-
                  <p>Retrieves the line items of a persisted tax calculation as
                  a collection.</p>
                summary: Retrieve Tax Calculation Line Items
                tags:
                  - Retrieve
                  - Tax
                  - Calculation
                  - Line
                  - Items
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
            /v1/tax/registrations:
              get:
                description: >-
                  <p>Returns a list of Tax <code>Registration</code>
                  objects.</p>
                summary: Retrieve Tax Registrations
                tags:
                  - Retrieve
                  - Tax
                  - Registrations
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
              post:
                description: <p>Creates a new Tax <code>Registration</code> object.</p>
                summary: Create Tax Registration
                tags:
                  - Create
                  - Tax
                  - Registration
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
            /v1/tax/registrations/{id}:
              post:
                description: >-
                  <p>Updates an existing Tax <code>Registration</code>
                  object.</p>


                  <p>A registration cannot be deleted after it has been created.
                  If you wish to end a registration you may do so by setting
                  <code>expires_at</code>.</p>
                summary: Retrieve Tax Registration
                tags:
                  - Retrieve
                  - Tax
                  - Registration
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
                  - Id
            /v1/tax/settings:
              get:
                description: <p>Retrieves Tax <code>Settings</code> for a merchant.</p>
                summary: Retrieve Tax Settings
                tags:
                  - Retrieve
                  - Tax
                  - Settings
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
                  - Id
                  - Settings
              post:
                description: >-
                  <p>Updates Tax <code>Settings</code> parameters used in tax
                  calculations. All parameters are editable but none can be
                  removed once set.</p>
                summary: Update Tax Registration
                tags:
                  - Update
                  - Tax
                  - Registration
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
                  - Id
                  - Settings
            /v1/tax/transactions/create_from_calculation:
              post:
                description: >-
                  <p>Creates a Tax <code>Transaction</code> from a
                  calculation.</p>
                summary: Create Tax Transaction
                tags:
                  - Create
                  - Tax
                  - Transaction
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
                  - Id
                  - Settings
                  - Transactions
                  - Create_from_calculation
            /v1/tax/transactions/create_reversal:
              post:
                description: >-
                  <p>Partially or fully reverses a previously created
                  <code>Transaction</code>.</p>
                summary: Reverse Tax Transaction
                tags:
                  - Reverse
                  - Tax
                  - Transaction
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
                  - Id
                  - Settings
                  - Transactions
                  - Create_from_calculation
                  - Create_reversal
            /v1/tax/transactions/{transaction}:
              get:
                description: <p>Retrieves a Tax <code>Transaction</code> object.</p>
                summary: Retrieve Tax Transaction
                tags:
                  - Retrieve
                  - Tax
                  - Transaction
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
                  - Id
                  - Settings
                  - Transactions
                  - Create_from_calculation
                  - Create_reversal
                  - Transaction
            /v1/tax/transactions/{transaction}/line_items:
              get:
                description: >-
                  <p>Retrieves the line items of a committed standalone
                  transaction as a collection.</p>
                summary: Retrieve Tax Transaction Line Items
                tags:
                  - Retrieve
                  - Tax
                  - Transaction
                  - Line
                  - Items
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
                  - Id
                  - Settings
                  - Transactions
                  - Create_from_calculation
                  - Create_reversal
                  - Transaction
            /v1/tax_codes:
              get:
                description: >-
                  <p>A list of <a
                  href="https://stripe.com/docs/tax/tax-categories">all tax
                  codes available</a> to add to Products in order to allow
                  specific tax calculations.</p>
                summary: Retrieve Tax Codes
                tags:
                  - Retrieve
                  - Tax
                  - Codes
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
                  - Id
                  - Settings
                  - Transactions
                  - Create_from_calculation
                  - Create_reversal
                  - Transaction
                  - Tax_codes
            /v1/tax_codes/{id}:
              get:
                description: >-
                  <p>Retrieves the details of an existing tax code. Supply the
                  unique tax code ID and Stripe will return the corresponding
                  tax code information.</p>
                summary: Retrieve Tax Code
                tags:
                  - Retrieve
                  - Tax
                  - Code
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
                  - Id
                  - Settings
                  - Transactions
                  - Create_from_calculation
                  - Create_reversal
                  - Transaction
                  - Tax_codes
            /v1/tax_rates:
              get:
                description: >-
                  <p>Returns a list of your tax rates. Tax rates are returned
                  sorted by creation date, with the most recently created tax
                  rates appearing first.</p>
                summary: Retrieve Tax Rates
                tags:
                  - Retrieve
                  - Tax
                  - Rates
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
                  - Id
                  - Settings
                  - Transactions
                  - Create_from_calculation
                  - Create_reversal
                  - Transaction
                  - Tax_codes
                  - Tax_rates
              post:
                description: <p>Creates a new tax rate.</p>
                summary: Create Tax Rate
                tags:
                  - Create
                  - Tax
                  - Rate
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
                  - Id
                  - Settings
                  - Transactions
                  - Create_from_calculation
                  - Create_reversal
                  - Transaction
                  - Tax_codes
                  - Tax_rates
            /v1/tax_rates/{tax_rate}:
              get:
                description: <p>Retrieves a tax rate with the given ID</p>
                summary: Retrieve Tax Rate
                tags:
                  - Retrieve
                  - Tax
                  - Rate
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
                  - Id
                  - Settings
                  - Transactions
                  - Create_from_calculation
                  - Create_reversal
                  - Transaction
                  - Tax_codes
                  - Tax_rates
                  - Tax_rate
              post:
                description: <p>Updates an existing tax rate.</p>
                summary: Update Tax Rate
                tags:
                  - Update
                  - Tax
                  - Rate
                  - V1
                  - Tax
                  - Calculations
                  - Calculation
                  - Line_items
                  - Registrations
                  - Id
                  - Settings
                  - Transactions
                  - Create_from_calculation
                  - Create_reversal
                  - Transaction
                  - Tax_codes
                  - Tax_rates
                  - Tax_rate
          tags:
            - name: Calculate
              description: Needs a description.
            - name: Taxes
              description: Needs a description.
            - name: Lines
              description: Needs a description.
            - name: Items
              description: Needs a description.
            - name: Registrations
              description: Needs a description.
            - name: Settings
              description: Needs a description.
            - name: Transactions
              description: Needs a description.
            - name: Reverse
              description: Needs a description.
            - name: Codes
              description: Needs a description.
            - name: Rates
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/tax-openapi-search.yml
  - aid: stripe.com:terminal
    name: Stripe Terminal API
    description: >-
      Use Stripe Terminal to accept in-person payments and extend Stripe
      payments to your point of sale.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/terminal
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/terminal
      - type: OpenAPI
        url: properties/terminal-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Terminal API
          paths:
            /v1/terminal/configurations:
              get:
                description: <p>Returns a list of <code>Configuration</code> objects.</p>
                summary: Retrieve Terminal Configurations
                tags:
                  - Retrieve
                  - Terminal
                  - Configurations
                  - V1
                  - Terminal
                  - Configurations
              post:
                description: <p>Creates a new <code>Configuration</code> object.</p>
                summary: Create Terminal Configuration
                tags:
                  - Create
                  - Terminal
                  - Configuration
                  - V1
                  - Terminal
                  - Configurations
            /v1/terminal/configurations/{configuration}:
              delete:
                description: <p>Deletes a <code>Configuration</code> object.</p>
                summary: Delete Terminal Configuration
                tags:
                  - Delete
                  - Terminal
                  - Configuration
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
              get:
                description: <p>Retrieves a <code>Configuration</code> object.</p>
                summary: Retrieve Terminal Configuration
                tags:
                  - Retrieve
                  - Terminal
                  - Configuration
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
              post:
                description: <p>Updates a new <code>Configuration</code> object.</p>
                summary: Update Terminal Configuration
                tags:
                  - Update
                  - Terminal
                  - Configuration
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
            /v1/terminal/connection_tokens:
              post:
                description: >-
                  <p>To connect to a reader the Stripe Terminal SDK needs to
                  retrieve a short-lived connection token from Stripe, proxied
                  through your server. On your backend, add an endpoint that
                  creates and returns a connection token.</p>
                summary: Create Terminal Connection Token
                tags:
                  - Create
                  - Terminal
                  - Connection
                  - Token
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
            /v1/terminal/locations:
              get:
                description: <p>Returns a list of <code>Location</code> objects.</p>
                summary: Retrieve Terminal Locations
                tags:
                  - Retrieve
                  - Terminal
                  - Locations
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
              post:
                description: >-
                  <p>Creates a new <code>Location</code> object.

                  For further details, including which address fields are
                  required in each country, see the <a
                  href="/docs/terminal/fleet/locations">Manage locations</a>
                  guide.</p>
                summary: Create Terminal Location
                tags:
                  - Create
                  - Terminal
                  - Location
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
            /v1/terminal/locations/{location}:
              delete:
                description: <p>Deletes a <code>Location</code> object.</p>
                summary: Delete Terminal Location
                tags:
                  - Delete
                  - Terminal
                  - Location
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
                  - Location
              get:
                description: <p>Retrieves a <code>Location</code> object.</p>
                summary: Retrieve Terminal Location
                tags:
                  - Retrieve
                  - Terminal
                  - Location
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
                  - Location
              post:
                description: >-
                  <p>Updates a <code>Location</code> object by setting the
                  values of the parameters passed. Any parameters not provided
                  will be left unchanged.</p>
                summary: Update Terminal Location
                tags:
                  - Update
                  - Terminal
                  - Location
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
                  - Location
            /v1/terminal/readers:
              get:
                description: <p>Returns a list of <code>Reader</code> objects.</p>
                summary: Retrieve Terminal Readers
                tags:
                  - Retrieve
                  - Terminal
                  - Readers
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
                  - Location
                  - Readers
              post:
                description: <p>Creates a new <code>Reader</code> object.</p>
                summary: Create Terminal Reader
                tags:
                  - Create
                  - Terminal
                  - Reader
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
                  - Location
                  - Readers
            /v1/terminal/readers/{reader}:
              delete:
                description: <p>Deletes a <code>Reader</code> object.</p>
                summary: Delete Terminal Reader
                tags:
                  - Delete
                  - Terminal
                  - Reader
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
                  - Location
                  - Readers
                  - Reader
              get:
                description: <p>Retrieves a <code>Reader</code> object.</p>
                summary: Retrieve Terminal Reader
                tags:
                  - Retrieve
                  - Terminal
                  - Reader
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
                  - Location
                  - Readers
                  - Reader
              post:
                description: >-
                  <p>Updates a <code>Reader</code> object by setting the values
                  of the parameters passed. Any parameters not provided will be
                  left unchanged.</p>
                summary: Update Terminal Reader
                tags:
                  - Update
                  - Terminal
                  - Reader
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
                  - Location
                  - Readers
                  - Reader
            /v1/terminal/readers/{reader}/cancel_action:
              post:
                description: <p>Cancels the current reader action.</p>
                summary: Cancel Terminal Reader Action
                tags:
                  - Cancel
                  - Terminal
                  - Reader
                  - Action
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
                  - Location
                  - Readers
                  - Reader
                  - Cancel_action
            /v1/terminal/readers/{reader}/process_payment_intent:
              post:
                description: <p>Initiates a payment flow on a Reader.</p>
                summary: Initiate Terminal Reader Flow
                tags:
                  - Initiate
                  - Terminal
                  - Reader
                  - Flow
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
                  - Location
                  - Readers
                  - Reader
                  - Cancel_action
                  - Process_payment_intent
            /v1/terminal/readers/{reader}/process_setup_intent:
              post:
                description: <p>Initiates a setup intent flow on a Reader.</p>
                summary: Retrieve Terminal Reader Setup Intent
                tags:
                  - Retrieve
                  - Terminal
                  - Reader
                  - Setup
                  - Intent
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
                  - Location
                  - Readers
                  - Reader
                  - Cancel_action
                  - Process_payment_intent
                  - Process_setup_intent
            /v1/terminal/readers/{reader}/refund_payment:
              post:
                description: <p>Initiates a refund on a Reader</p>
                summary: Refund Terminal Reader Payment
                tags:
                  - Refund
                  - Terminal
                  - Reader
                  - Payment
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
                  - Location
                  - Readers
                  - Reader
                  - Cancel_action
                  - Process_payment_intent
                  - Process_setup_intent
                  - Refund_payment
            /v1/terminal/readers/{reader}/set_reader_display:
              post:
                description: <p>Sets reader display to show cart details.</p>
                summary: Set Terminal Reader Display
                tags:
                  - Set
                  - Terminal
                  - Reader
                  - Display
                  - V1
                  - Terminal
                  - Configurations
                  - Configuration
                  - Connection_tokens
                  - Locations
                  - Location
                  - Readers
                  - Reader
                  - Cancel_action
                  - Process_payment_intent
                  - Process_setup_intent
                  - Refund_payment
                  - Set_reader_display
          tags:
            - name: Terminal
              description: Needs a description.
            - name: Configurations
              description: Needs a description.
            - name: Connections
              description: Needs a description.
            - name: Tokens
              description: Needs a description.
            - name: Locations
              description: Needs a description.
            - name: Readers
              description: Needs a description.
            - name: Actions
              description: Needs a description.
            - name: Payments
              description: Needs a description.
            - name: Flows
              description: Needs a description.
            - name: Setup
              description: Needs a description.
            - name: Intent
              description: Needs a description.
            - name: Display
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/terminal-openapi-search.yml
  - aid: stripe.com:test-helpers
    name: Stripe Test Helpers API
    description: >-
      Stripe provides a number of resources for testing your integration. Make
      sure to test the following use cases before launch, and use our Postman
      collection to make the testing process simpler.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/implementation-guides/billing/testing
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/implementation-guides/billing/testing
      - type: OpenAPI
        url: properties/test-helpers-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Test Helpers API
          paths:
            /v1/test_helpers/customers/{customer}/fund_cash_balance:
              post:
                description: <p>Create an incoming testmode bank transfer</p>
                summary: Create Incoming Bank Transfer
                tags:
                  - Create
                  - Incoming
                  - Bank
                  - Transfer
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
            /v1/test_helpers/issuing/authorizations:
              post:
                description: <p>Create a test-mode authorization.</p>
                summary: Create Autorization
                tags:
                  - Create
                  - Autorization
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
            /v1/test_helpers/issuing/authorizations/{authorization}/capture:
              post:
                description: <p>Capture a test-mode authorization.</p>
                summary: Capture Authorization
                tags:
                  - Capture
                  - Authorization
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
            /v1/test_helpers/issuing/authorizations/{authorization}/expire:
              post:
                description: <p>Expire a test-mode Authorization.</p>
                summary: Expire Authorization
                tags:
                  - Expire
                  - Authorization
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
            /v1/test_helpers/issuing/authorizations/{authorization}/increment:
              post:
                description: <p>Increment a test-mode Authorization.</p>
                summary: Increment Authorization
                tags:
                  - Increment
                  - Authorization
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
            /v1/test_helpers/issuing/authorizations/{authorization}/reverse:
              post:
                description: <p>Reverse a test-mode Authorization.</p>
                summary: Reverse Authorization
                tags:
                  - Reverse
                  - Authorization
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
            /v1/test_helpers/issuing/cards/{card}/shipping/deliver:
              post:
                description: >-
                  <p>Updates the shipping status of the specified Issuing
                  <code>Card</code> object to <code>delivered</code>.</p>
                summary: Update Shipping Status to Deliver
                tags:
                  - Update
                  - Shipping
                  - Status
                  - To
                  - Deliver
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
            /v1/test_helpers/issuing/cards/{card}/shipping/fail:
              post:
                description: >-
                  <p>Updates the shipping status of the specified Issuing
                  <code>Card</code> object to <code>failure</code>.</p>
                summary: Update Shipping Status to Fail
                tags:
                  - Update
                  - Shipping
                  - Status
                  - To
                  - Fail
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
            /v1/test_helpers/issuing/cards/{card}/shipping/return:
              post:
                description: >-
                  <p>Updates the shipping status of the specified Issuing
                  <code>Card</code> object to <code>returned</code>.</p>
                summary: Update Shipping Status to Return
                tags:
                  - Update
                  - Shipping
                  - Status
                  - To
                  - Return
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
            /v1/test_helpers/issuing/cards/{card}/shipping/ship:
              post:
                description: >-
                  <p>Updates the shipping status of the specified Issuing
                  <code>Card</code> object to <code>shipped</code>.</p>
                summary: Update Shipping Status to Ship
                tags:
                  - Update
                  - Shipping
                  - Status
                  - To
                  - Ship
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
            /v1/test_helpers/issuing/transactions/create_force_capture:
              post:
                description: >-
                  <p>Allows the user to capture an arbitrary amount, also known
                  as a forced capture.</p>
                summary: Create Force Capture
                tags:
                  - Create
                  - Force
                  - Capture
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
            /v1/test_helpers/issuing/transactions/create_unlinked_refund:
              post:
                description: >-
                  <p>Allows the user to refund an arbitrary amount, also known
                  as a unlinked refund.</p>
                summary: Create Unlinked Refund
                tags:
                  - Create
                  - Unlinked
                  - Refund
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
            /v1/test_helpers/issuing/transactions/{transaction}/refund:
              post:
                description: <p>Refund a test-mode Transaction.</p>
                summary: Refund Transaction
                tags:
                  - Refund
                  - Transaction
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
            /v1/test_helpers/refunds/{refund}/expire:
              post:
                description: >-
                  <p>Expire a refund with a status of
                  <code>requires_action</code>.</p>
                summary: Expire Refund
                tags:
                  - Expire
                  - Refund
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
            /v1/test_helpers/terminal/readers/{reader}/present_payment_method:
              post:
                description: >-
                  <p>Presents a payment method on a simulated reader. Can be
                  used to simulate accepting a payment, saving a card or
                  refunding a transaction.</p>
                summary: Present Payment Method on Reader
                tags:
                  - Present
                  - Payment
                  - Method
                  - 'On'
                  - Reader
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
            /v1/test_helpers/test_clocks:
              get:
                description: <p>Returns a list of your test clocks.</p>
                summary: Retrieve Test Clocks
                tags:
                  - Retrieve
                  - Test
                  - Clocks
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
              post:
                description: >-
                  <p>Creates a new test clock that can be attached to new
                  customers and quotes.</p>
                summary: Create Test Clock
                tags:
                  - Create
                  - Test
                  - Clock
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
            /v1/test_helpers/test_clocks/{test_clock}:
              delete:
                description: <p>Deletes a test clock.</p>
                summary: Delete Test Clock
                tags:
                  - Delete
                  - Test
                  - Clock
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
                  - Test_clock
              get:
                description: <p>Retrieves a test clock.</p>
                summary: Retrieve Test Clock
                tags:
                  - Retrieve
                  - Test
                  - Clock
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
                  - Test_clock
            /v1/test_helpers/test_clocks/{test_clock}/advance:
              post:
                description: >-
                  <p>Starts advancing a test clock to a specified time in the
                  future. Advancement is done when status changes to
                  <code>Ready</code>.</p>
                summary: Advance Test Clock
                tags:
                  - Advance
                  - Test
                  - Clock
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
                  - Test_clock
                  - Advance
            /v1/test_helpers/treasury/inbound_transfers/{id}/fail:
              post:
                description: >-
                  <p>Transitions a test mode created InboundTransfer to the
                  <code>failed</code> status. The InboundTransfer must already
                  be in the <code>processing</code> state.</p>
                summary: Fail Inbound Transfer
                tags:
                  - Fail
                  - Inbound
                  - Transfer
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
                  - Test_clock
                  - Advance
                  - Treasury
                  - Inbound_transfers
                  - Id
            /v1/test_helpers/treasury/inbound_transfers/{id}/return:
              post:
                description: >-
                  <p>Marks the test mode InboundTransfer object as returned and
                  links the InboundTransfer to a ReceivedDebit. The
                  InboundTransfer must already be in the <code>succeeded</code>
                  state.</p>
                summary: Return Inbound Transfer
                tags:
                  - Return
                  - Inbound
                  - Transfer
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
                  - Test_clock
                  - Advance
                  - Treasury
                  - Inbound_transfers
                  - Id
            /v1/test_helpers/treasury/inbound_transfers/{id}/succeed:
              post:
                description: >-
                  <p>Transitions a test mode created InboundTransfer to the
                  <code>succeeded</code> status. The InboundTransfer must
                  already be in the <code>processing</code> state.</p>
                summary: Succeed Inbound Transfer
                tags:
                  - Succeed
                  - Inbound
                  - Transfer
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
                  - Test_clock
                  - Advance
                  - Treasury
                  - Inbound_transfers
                  - Id
                  - Succeed
            /v1/test_helpers/treasury/outbound_payments/{id}/fail:
              post:
                description: >-
                  <p>Transitions a test mode created OutboundPayment to the
                  <code>failed</code> status. The OutboundPayment must already
                  be in the <code>processing</code> state.</p>
                summary: Fail Outbound Payment
                tags:
                  - Fail
                  - Outbound
                  - Payment
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
                  - Test_clock
                  - Advance
                  - Treasury
                  - Inbound_transfers
                  - Id
                  - Succeed
                  - Outbound_payments
            /v1/test_helpers/treasury/outbound_payments/{id}/post:
              post:
                description: >-
                  <p>Transitions a test mode created OutboundPayment to the
                  <code>posted</code> status. The OutboundPayment must already
                  be in the <code>processing</code> state.</p>
                summary: Transition Outbound Payment
                tags:
                  - Transition
                  - Outbound
                  - Payment
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
                  - Test_clock
                  - Advance
                  - Treasury
                  - Inbound_transfers
                  - Id
                  - Succeed
                  - Outbound_payments
                  - Post
            /v1/test_helpers/treasury/outbound_payments/{id}/return:
              post:
                description: >-
                  <p>Transitions a test mode created OutboundPayment to the
                  <code>returned</code> status. The OutboundPayment must already
                  be in the <code>processing</code> state.</p>
                summary: Return Outbound Payment
                tags:
                  - Return
                  - Outbound
                  - Payment
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
                  - Test_clock
                  - Advance
                  - Treasury
                  - Inbound_transfers
                  - Id
                  - Succeed
                  - Outbound_payments
                  - Post
            /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail:
              post:
                description: >-
                  <p>Transitions a test mode created OutboundTransfer to the
                  <code>failed</code> status. The OutboundTransfer must already
                  be in the <code>processing</code> state.</p>
                summary: Fail Outbound Transfer
                tags:
                  - Fail
                  - Outbound
                  - Transfer
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
                  - Test_clock
                  - Advance
                  - Treasury
                  - Inbound_transfers
                  - Id
                  - Succeed
                  - Outbound_payments
                  - Post
                  - Outbound_transfers
                  - Outbound_transfer
            /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post:
              post:
                description: >-
                  <p>Transitions a test mode created OutboundTransfer to the
                  <code>posted</code> status. The OutboundTransfer must already
                  be in the <code>processing</code> state.</p>
                summary: Transition Outbound Transfer
                tags:
                  - Transition
                  - Outbound
                  - Transfer
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
                  - Test_clock
                  - Advance
                  - Treasury
                  - Inbound_transfers
                  - Id
                  - Succeed
                  - Outbound_payments
                  - Post
                  - Outbound_transfers
                  - Outbound_transfer
            /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return:
              post:
                description: >-
                  <p>Transitions a test mode created OutboundTransfer to the
                  <code>returned</code> status. The OutboundTransfer must
                  already be in the <code>processing</code> state.</p>
                summary: Return Outbound Transfer
                tags:
                  - Return
                  - Outbound
                  - Transfer
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
                  - Test_clock
                  - Advance
                  - Treasury
                  - Inbound_transfers
                  - Id
                  - Succeed
                  - Outbound_payments
                  - Post
                  - Outbound_transfers
                  - Outbound_transfer
            /v1/test_helpers/treasury/received_credits:
              post:
                description: >-
                  <p>Use this endpoint to simulate a test mode ReceivedCredit
                  initiated by a third party. In live mode, you can’t directly
                  create ReceivedCredits initiated by third parties.</p>
                summary: Received Credit
                tags:
                  - Received
                  - Credit
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
                  - Test_clock
                  - Advance
                  - Treasury
                  - Inbound_transfers
                  - Id
                  - Succeed
                  - Outbound_payments
                  - Post
                  - Outbound_transfers
                  - Outbound_transfer
                  - Received_credits
            /v1/test_helpers/treasury/received_debits:
              post:
                description: >-
                  <p>Use this endpoint to simulate a test mode ReceivedDebit
                  initiated by a third party. In live mode, you can’t directly
                  create ReceivedDebits initiated by third parties.</p>
                summary: Received Debit
                tags:
                  - Received
                  - Debit
                  - V1
                  - Test_helpers
                  - Customers
                  - Customer
                  - Fund_cash_balance
                  - Issuing
                  - Authorizations
                  - Authorization
                  - Capture
                  - Expire
                  - Increment
                  - Reverse
                  - Cards
                  - Card
                  - Shipping
                  - Deliver
                  - Fail
                  - Return
                  - Ship
                  - Transactions
                  - Create_force_capture
                  - Create_unlinked_refund
                  - Transaction
                  - Refund
                  - Refunds
                  - Terminal
                  - Readers
                  - Reader
                  - Present_payment_method
                  - Test_clocks
                  - Test_clock
                  - Advance
                  - Treasury
                  - Inbound_transfers
                  - Id
                  - Succeed
                  - Outbound_payments
                  - Post
                  - Outbound_transfers
                  - Outbound_transfer
                  - Received_credits
                  - Received_debits
          tags:
            - name: Tests
              description: Needs a description.
            - name: Incoming
              description: Needs a description.
            - name: Bank
              description: Needs a description.
            - name: Transfers
              description: Needs a description.
            - name: Autorization
              description: Needs a description.
            - name: Capture
              description: Needs a description.
            - name: Authorization
              description: Needs a description.
            - name: Expires
              description: Needs a description.
            - name: Increments
              description: Needs a description.
            - name: Reverse
              description: Needs a description.
            - name: Shipping
              description: Needs a description.
            - name: Status
              description: Needs a description.
            - name: Delivers
              description: Needs a description.
            - name: Fail
              description: Needs a description.
            - name: Return
              description: Needs a description.
            - name: Ship
              description: Needs a description.
            - name: Force
              description: Needs a description.
            - name: Unlinked
              description: Needs a description.
            - name: Refunds
              description: Needs a description.
            - name: Transactions
              description: Needs a description.
            - name: Presents
              description: Needs a description.
            - name: Payments
              description: Needs a description.
            - name: Methods
              description: Needs a description.
            - name: Readers
              description: Needs a description.
            - name: Clocks
              description: Needs a description.
            - name: Advance
              description: Needs a description.
            - name: Fails
              description: Needs a description.
            - name: Inbound
              description: Needs a description.
            - name: Transfer
              description: Needs a description.
            - name: Succeed
              description: Needs a description.
            - name: Outbound
              description: Needs a description.
            - name: Transitions
              description: Needs a description.
            - name: Received
              description: Needs a description.
            - name: Credits
              description: Needs a description.
            - name: Debit
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/test-helpers-openapi-search.yml
  - aid: stripe.com:tokens
    name: Stripe Tokens API
    description: >-
      Tokenization is the process Stripe uses to collect sensitive card or bank
      account details, or personally identifiable information (PII), directly
      from your customers in a secure manner. A token representing this
      information is returned to your server to use. Use our recommended
      payments integrations to perform this process on the client-side. This
      guarantees that no sensitive card data touches your server, and allows
      your integration to operate in a PCI-compliant way.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/tokens
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/tokens
      - type: OpenAPI
        url: properties/tokens-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Tokens API
          paths:
            /v1/tokens:
              post:
                description: >-
                  <p>Creates a single-use token that represents a bank account’s
                  details.

                  You can use this token with any API method in place of a bank
                  account dictionary. You can only use this token once. To do
                  so, attach it to a <a href="#accounts">Custom account</a>.</p>
                summary: Create Token
                tags:
                  - Create
                  - Token
                  - V1
                  - Tokens
            /v1/tokens/{token}:
              get:
                description: <p>Retrieves the token with the given ID.</p>
                summary: Get Token
                tags:
                  - Get
                  - Token
                  - V1
                  - Tokens
                  - Token
          tags:
            - name: Tokens
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/tokens-openapi-search.yml
  - aid: stripe.com:topups
    name: Stripe Topups API
    description: >-
      To top up your Stripe balance, you create a top-up object. You can
      retrieve individual top-ups, as well as list all top-ups. Top-ups are
      identified by a unique, random ID.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/topups
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/topups
      - type: OpenAPI
        url: properties/topups-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Topups API
          paths:
            /v1/topups:
              get:
                description: <p>Returns a list of top-ups.</p>
                summary: Retrieve Top Ups
                tags:
                  - Retrieve
                  - Top
                  - Ups
                  - V1
                  - Topups
              post:
                description: <p>Top up the balance of an account</p>
                summary: Create Top Up
                tags:
                  - Create
                  - Top
                  - Up
                  - V1
                  - Topups
            /v1/topups/{topup}:
              get:
                description: >-
                  <p>Retrieves the details of a top-up that has previously been
                  created. Supply the unique top-up ID that was returned from
                  your previous request, and Stripe will return the
                  corresponding top-up information.</p>
                summary: Retrieve Top Up
                tags:
                  - Retrieve
                  - Top
                  - Up
                  - V1
                  - Topups
                  - Topup
              post:
                description: >-
                  <p>Updates the metadata of a top-up. Other top-up details are
                  not editable by design.</p>
                summary: Update Top Up
                tags:
                  - Update
                  - Top
                  - Up
                  - V1
                  - Topups
                  - Topup
            /v1/topups/{topup}/cancel:
              post:
                description: <p>Cancels a top-up. Only pending top-ups can be canceled.</p>
                summary: Cancel Top Up
                tags:
                  - Cancel
                  - Top
                  - Up
                  - V1
                  - Topups
                  - Topup
                  - Cancel
          tags:
            - name: Top Ups
              description: Needs a description.
            - name: Cancel
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/topups-openapi-search.yml
  - aid: stripe.com:transfers
    name: Stripe Transfers API
    description: >-
      A Transfer object is created when you move funds between Stripe accounts
      as part of Connect.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/transfers
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/transfers
      - type: OpenAPI
        url: properties/transfers-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Transfers API
          paths:
            /v1/transfers:
              get:
                description: >-
                  <p>Returns a list of existing transfers sent to connected
                  accounts. The transfers are returned in sorted order, with the
                  most recently created transfers appearing first.</p>
                summary: Retrieve Transfers
                tags:
                  - Retrieve
                  - Transfers
                  - V1
                  - Transfers
              post:
                description: >-
                  <p>To send funds from your Stripe account to a connected
                  account, you create a new transfer object. Your <a
                  href="#balance">Stripe balance</a> must be able to cover the
                  transfer amount, or you’ll receive an “Insufficient Funds”
                  error.</p>
                summary: Create Transfer
                tags:
                  - Create
                  - Transfer
                  - V1
                  - Transfers
            /v1/transfers/{id}/reversals:
              get:
                description: >-
                  <p>You can see a list of the reversals belonging to a specific
                  transfer. Note that the 10 most recent reversals are always
                  available by default on the transfer object. If you need more
                  than those 10, you can use this API method and the
                  <code>limit</code> and <code>starting_after</code> parameters
                  to page through additional reversals.</p>
                summary: Retrieve Transfer Reversals
                tags:
                  - Retrieve
                  - Transfer
                  - Reversals
                  - V1
                  - Transfers
                  - Id
                  - Reversals
              post:
                description: >-
                  <p>When you create a new reversal, you must specify a transfer
                  to create it on.</p>


                  <p>When reversing transfers, you can optionally reverse part
                  of the transfer. You can do so as many times as you wish until
                  the entire transfer has been reversed.</p>


                  <p>Once entirely reversed, a transfer can’t be reversed again.
                  This method will return an error when called on an
                  already-reversed transfer, or when trying to reverse more
                  money than is left on a transfer.</p>
                summary: Update Transfer Reversal
                tags:
                  - Update
                  - Transfer
                  - Reversal
                  - V1
                  - Transfers
                  - Id
                  - Reversals
            /v1/transfers/{transfer}:
              get:
                description: >-
                  <p>Retrieves the details of an existing transfer. Supply the
                  unique transfer ID from either a transfer creation request or
                  the transfer list, and Stripe will return the corresponding
                  transfer information.</p>
                summary: Retrieve Transfer
                tags:
                  - Retrieve
                  - Transfer
                  - V1
                  - Transfers
                  - Id
                  - Reversals
                  - Transfer
              post:
                description: >-
                  <p>Updates the specified transfer by setting the values of the
                  parameters passed. Any parameters not provided will be left
                  unchanged.</p>


                  <p>This request accepts only metadata as an argument.</p>
                summary: Update Transfer
                tags:
                  - Update
                  - Transfer
                  - V1
                  - Transfers
                  - Id
                  - Reversals
                  - Transfer
            /v1/transfers/{transfer}/reversals/{id}:
              get:
                description: >-
                  <p>By default, you can see the 10 most recent reversals stored
                  directly on the transfer object, but you can also retrieve
                  details about a specific reversal stored on the transfer.</p>
                summary: Retrieve Transfer Reversal
                tags:
                  - Retrieve
                  - Transfer
                  - Reversal
                  - V1
                  - Transfers
                  - Id
                  - Reversals
                  - Transfer
              post:
                description: >-
                  <p>Updates the specified reversal by setting the values of the
                  parameters passed. Any parameters not provided will be left
                  unchanged.</p>


                  <p>This request only accepts metadata and description as
                  arguments.</p>
                summary: Update Transfer Reversal
                tags:
                  - Update
                  - Transfer
                  - Reversal
                  - V1
                  - Transfers
                  - Id
                  - Reversals
                  - Transfer
          tags:
            - name: Transfers
              description: Needs a description.
            - name: Reversals
              description: Needs a description.
            - name: Reversal
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/transfers-openapi-search.yml
  - aid: stripe.com:treasury
    name: Stripe Treasury API
    description: >-
      Stripe Treasury is a banking-as-a-service API that lets you embed
      financial services in your product. With Stripe’s API, you can enable
      businesses to hold funds, pay bills, earn yield, and manage their cash
      flow. Many users build Stripe Issuing in conjunction with Stripe Treasury
      to attach cards to spend funds in the account.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/treasury
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/treasury
      - type: OpenAPI
        url: properties/treasury-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Treasury API
          paths:
            /v1/treasury/credit_reversals:
              get:
                description: <p>Returns a list of CreditReversals.</p>
                summary: Retrieve Credit Reversals
                tags:
                  - Retrieve
                  - Credit
                  - Reversals
                  - V1
                  - Treasury
                  - Credit_reversals
              post:
                description: >-
                  <p>Reverses a ReceivedCredit and creates a CreditReversal
                  object.</p>
                summary: Create Credit Reversal
                tags:
                  - Create
                  - Credit
                  - Reversal
                  - V1
                  - Treasury
                  - Credit_reversals
            /v1/treasury/credit_reversals/{credit_reversal}:
              get:
                description: >-
                  <p>Retrieves the details of an existing CreditReversal by
                  passing the unique CreditReversal ID from either the
                  CreditReversal creation request or CreditReversal list</p>
                summary: Retrieve Credit Reversal
                tags:
                  - Retrieve
                  - Credit
                  - Reversal
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
            /v1/treasury/debit_reversals:
              get:
                description: <p>Returns a list of DebitReversals.</p>
                summary: Retrieve Debit Reversals
                tags:
                  - Retrieve
                  - Debit
                  - Reversals
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
              post:
                description: >-
                  <p>Reverses a ReceivedDebit and creates a DebitReversal
                  object.</p>
                summary: Create Debit Reversal
                tags:
                  - Create
                  - Debit
                  - Reversal
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
            /v1/treasury/debit_reversals/{debit_reversal}:
              get:
                description: <p>Retrieves a DebitReversal object.</p>
                summary: Retrieve Debit Reversal
                tags:
                  - Retrieve
                  - Debit
                  - Reversal
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
            /v1/treasury/financial_accounts:
              get:
                description: <p>Returns a list of FinancialAccounts.</p>
                summary: Retrieve Financial Accounts
                tags:
                  - Retrieve
                  - Financial
                  - Accounts
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
              post:
                description: >-
                  <p>Creates a new FinancialAccount. For now, each connected
                  account can only have one FinancialAccount.</p>
                summary: Create Financial Account
                tags:
                  - Create
                  - Financial
                  - Account
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
            /v1/treasury/financial_accounts/{financial_account}:
              get:
                description: <p>Retrieves the details of a FinancialAccount.</p>
                summary: Retrieve Financial Account
                tags:
                  - Retrieve
                  - Financial
                  - Account
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
              post:
                description: <p>Updates the details of a FinancialAccount.</p>
                summary: Update Financial Account
                tags:
                  - Update
                  - Financial
                  - Account
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
            /v1/treasury/financial_accounts/{financial_account}/features:
              get:
                description: >-
                  <p>Retrieves Features information associated with the
                  FinancialAccount.</p>
                summary: Retrieve Financial Account Features
                tags:
                  - Retrieve
                  - Financial
                  - Account
                  - Features
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
              post:
                description: >-
                  <p>Updates the Features associated with a
                  FinancialAccount.</p>
                summary: Update Financial Account Feature
                tags:
                  - Update
                  - Financial
                  - Account
                  - Feature
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
            /v1/treasury/inbound_transfers:
              get:
                description: >-
                  <p>Returns a list of InboundTransfers sent from the specified
                  FinancialAccount.</p>
                summary: Retrieve Inbound Transfers
                tags:
                  - Retrieve
                  - Inbound
                  - Transfers
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
              post:
                description: <p>Creates an InboundTransfer.</p>
                summary: Create Inbound Transfer
                tags:
                  - Create
                  - Inbound
                  - Transfer
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
            /v1/treasury/inbound_transfers/{id}:
              get:
                description: <p>Retrieves the details of an existing InboundTransfer.</p>
                summary: Retrieve Inbound Transfer
                tags:
                  - Retrieve
                  - Inbound
                  - Transfer
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
            /v1/treasury/inbound_transfers/{inbound_transfer}/cancel:
              post:
                description: <p>Cancels an InboundTransfer.</p>
                summary: Cancel Inbound Transfer
                tags:
                  - Cancel
                  - Inbound
                  - Transfer
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
            /v1/treasury/outbound_payments:
              get:
                description: >-
                  <p>Returns a list of OutboundPayments sent from the specified
                  FinancialAccount.</p>
                summary: Retrieve Outbound Payments
                tags:
                  - Retrieve
                  - Outbound
                  - Payments
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
              post:
                description: <p>Creates an OutboundPayment.</p>
                summary: Create Outbound Payment
                tags:
                  - Create
                  - Outbound
                  - Payment
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
            /v1/treasury/outbound_payments/{id}:
              get:
                description: >-
                  <p>Retrieves the details of an existing OutboundPayment by
                  passing the unique OutboundPayment ID from either the
                  OutboundPayment creation request or OutboundPayment list.</p>
                summary: Retrieve Outbound Payment
                tags:
                  - Retrieve
                  - Outbound
                  - Payment
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
            /v1/treasury/outbound_payments/{id}/cancel:
              post:
                description: <p>Cancel an OutboundPayment.</p>
                summary: Cacel Outbound Payment
                tags:
                  - Cacel
                  - Outbound
                  - Payment
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
            /v1/treasury/outbound_transfers:
              get:
                description: >-
                  <p>Returns a list of OutboundTransfers sent from the specified
                  FinancialAccount.</p>
                summary: Retrieve Outbound Transfers
                tags:
                  - Retrieve
                  - Outbound
                  - Transfers
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
                  - Outbound_transfers
              post:
                description: <p>Creates an OutboundTransfer.</p>
                summary: Create Outbound Transfer
                tags:
                  - Create
                  - Outbound
                  - Transfer
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
                  - Outbound_transfers
            /v1/treasury/outbound_transfers/{outbound_transfer}:
              get:
                description: >-
                  <p>Retrieves the details of an existing OutboundTransfer by
                  passing the unique OutboundTransfer ID from either the
                  OutboundTransfer creation request or OutboundTransfer
                  list.</p>
                summary: Retrieve Outbound Transfer
                tags:
                  - Retrieve
                  - Outbound
                  - Transfer
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
                  - Outbound_transfers
                  - Outbound_transfer
            /v1/treasury/outbound_transfers/{outbound_transfer}/cancel:
              post:
                description: >-
                  <p>An OutboundTransfer can be canceled if the funds have not
                  yet been paid out.</p>
                summary: Cancel Outbound Transfer
                tags:
                  - Cancel
                  - Outbound
                  - Transfer
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
                  - Outbound_transfers
                  - Outbound_transfer
            /v1/treasury/received_credits:
              get:
                description: <p>Returns a list of ReceivedCredits.</p>
                summary: Retrieve Received Credits
                tags:
                  - Retrieve
                  - Received
                  - Credits
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
                  - Outbound_transfers
                  - Outbound_transfer
                  - Received_credits
            /v1/treasury/received_credits/{id}:
              get:
                description: >-
                  <p>Retrieves the details of an existing ReceivedCredit by
                  passing the unique ReceivedCredit ID from the ReceivedCredit
                  list.</p>
                summary: Retrieve Received Credit
                tags:
                  - Retrieve
                  - Received
                  - Credit
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
                  - Outbound_transfers
                  - Outbound_transfer
                  - Received_credits
            /v1/treasury/received_debits:
              get:
                description: <p>Returns a list of ReceivedDebits.</p>
                summary: Retrieve Received Debits
                tags:
                  - Retrieve
                  - Received
                  - Debits
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
                  - Outbound_transfers
                  - Outbound_transfer
                  - Received_credits
                  - Received_debits
            /v1/treasury/received_debits/{id}:
              get:
                description: >-
                  <p>Retrieves the details of an existing ReceivedDebit by
                  passing the unique ReceivedDebit ID from the ReceivedDebit
                  list</p>
                summary: Retrieve Received Debit
                tags:
                  - Retrieve
                  - Received
                  - Debit
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
                  - Outbound_transfers
                  - Outbound_transfer
                  - Received_credits
                  - Received_debits
            /v1/treasury/transaction_entries:
              get:
                description: <p>Retrieves a list of TransactionEntry objects.</p>
                summary: Retrieve Transaction Entries
                tags:
                  - Retrieve
                  - Transaction
                  - Entries
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
                  - Outbound_transfers
                  - Outbound_transfer
                  - Received_credits
                  - Received_debits
                  - Transaction_entries
            /v1/treasury/transaction_entries/{id}:
              get:
                description: <p>Retrieves a TransactionEntry object.</p>
                summary: Retrieve Transaction Entry
                tags:
                  - Retrieve
                  - Transaction
                  - Entry
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
                  - Outbound_transfers
                  - Outbound_transfer
                  - Received_credits
                  - Received_debits
                  - Transaction_entries
            /v1/treasury/transactions:
              get:
                description: <p>Retrieves a list of Transaction objects.</p>
                summary: Retrieve Transactions
                tags:
                  - Retrieve
                  - Transactions
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
                  - Outbound_transfers
                  - Outbound_transfer
                  - Received_credits
                  - Received_debits
                  - Transaction_entries
                  - Transactions
            /v1/treasury/transactions/{id}:
              get:
                description: <p>Retrieves the details of an existing Transaction.</p>
                summary: Retrieve Transaction
                tags:
                  - Retrieve
                  - Transaction
                  - V1
                  - Treasury
                  - Credit_reversals
                  - Credit_reversal
                  - Debit_reversals
                  - Debit_reversal
                  - Financial_accounts
                  - Financial_account
                  - Features
                  - Inbound_transfers
                  - Id
                  - Inbound_transfer
                  - Cancel
                  - Outbound_payments
                  - Outbound_transfers
                  - Outbound_transfer
                  - Received_credits
                  - Received_debits
                  - Transaction_entries
                  - Transactions
          tags:
            - name: Treasury
              description: Needs a description.
            - name: Credits
              description: Needs a description.
            - name: Reversals
              description: Needs a description.
            - name: Debit
              description: Needs a description.
            - name: Financial
              description: Needs a description.
            - name: Accounts
              description: Needs a description.
            - name: Features
              description: Needs a description.
            - name: Inbound
              description: Needs a description.
            - name: Transfers
              description: Needs a description.
            - name: Cancel
              description: Needs a description.
            - name: Outbound
              description: Needs a description.
            - name: Payments
              description: Needs a description.
            - name: Received
              description: Needs a description.
            - name: Debits
              description: Needs a description.
            - name: Transactiosn
              description: Needs a description.
            - name: Entries
              description: Needs a description.
            - name: Transactions
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/treasury-openapi-search.yml
  - aid: stripe.com:webhook
    name: Stripe Webhook API
    description: >-
      You can configure webhook endpoints via the API to be notified about
      events that happen in your Stripe account or connected accounts.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://stripe.com/docs/api/webhook_endpoints
    baseURL: https://api.stripe.com
    tags:
      - Payments
    properties:
      - type: OpenAPI
        url: https://stripe.com/docs/api/webhook_endpoints
      - type: OpenAPI
        url: properties/webhook-openapi-original.yml
        data:
          openapi: 3.0.0
          info:
            title: Stripe Webhook API
          paths:
            /v1/webhook_endpoints:
              get:
                description: <p>Returns a list of your webhook endpoints.</p>
                summary: Retrieve Webhook Endpoints
                tags:
                  - Retrieve
                  - Webhook
                  - Endpoints
                  - V1
                  - Webhook_endpoints
              post:
                description: >-
                  <p>A webhook endpoint must have a <code>url</code> and a list
                  of <code>enabled_events</code>. You may optionally specify the
                  Boolean <code>connect</code> parameter. If set to true, then a
                  Connect webhook endpoint that notifies the specified
                  <code>url</code> about events from all connected accounts is
                  created; otherwise an account webhook endpoint that notifies
                  the specified <code>url</code> only about events from your
                  account is created. You can also create webhook endpoints in
                  the <a
                  href="https://dashboard.stripe.com/account/webhooks">webhooks
                  settings</a> section of the Dashboard.</p>
                summary: Create Webhook Endpoint
                tags:
                  - Create
                  - Webhook
                  - Endpoint
                  - V1
                  - Webhook_endpoints
            /v1/webhook_endpoints/{webhook_endpoint}:
              delete:
                description: >-
                  <p>You can also delete webhook endpoints via the <a
                  href="https://dashboard.stripe.com/account/webhooks">webhook
                  endpoint management</a> page of the Stripe dashboard.</p>
                summary: Delete Webhook Endpoint
                tags:
                  - Delete
                  - Webhook
                  - Endpoint
                  - V1
                  - Webhook_endpoints
                  - Webhook_endpoint
              get:
                description: <p>Retrieves the webhook endpoint with the given ID.</p>
                summary: Retrieve Webhook Endpoint
                tags:
                  - Retrieve
                  - Webhook
                  - Endpoint
                  - V1
                  - Webhook_endpoints
                  - Webhook_endpoint
              post:
                description: >-
                  <p>Updates the webhook endpoint. You may edit the
                  <code>url</code>, the list of <code>enabled_events</code>, and
                  the status of your endpoint.</p>
                summary: Update Webhook Endpoint
                tags:
                  - Update
                  - Webhook
                  - Endpoint
                  - V1
                  - Webhook_endpoints
                  - Webhook_endpoint
          tags:
            - name: Webhooks
              description: Needs a description.
            - name: Endpoints
              description: Needs a descriptio
    overlays:
      - type: APIs.io Search
        url: overlays/webhook-openapi-search.yml
common:
  - type: Sign Up
    url: https://dashboard.stripe.com/register
  - type: Authentication
    url: https://stripe.com/docs/api/authentication
  - type: Blog
    url: https://stripe.com/blog
  - type: Status
    url: https://status.stripe.com/
  - type: Change Log
    url: https://stripe.com/docs/upgrades#api-versions
  - type: Terms of Service
    url: https://stripe.com/privacy
  - type: Support
    url: https://support.stripe.com/
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
  - type: API Evangelist Ratings
    url: overlays/api-evangelist-ratings.yml
  - type: API Evangelist Subway
    url: overlays/api-evangelist-subway.yml
maintainers:
  - FN: APIs.json
    email: info@apis.io
---