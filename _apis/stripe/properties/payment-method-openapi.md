---
openapi: 3.0.0
info:
  title: Stripe Payment Method API
  description: Needs description.
  contact:
    email: dev-platform@stripe.com
    name: Stripe Dev Platform Team
    url: 'https://stripe.com'
  termsOfService: 'https://stripe.com/us/terms/'
  version: '2023-10-16'
  x-stripeSpecFilename: spec3
security:
  - basicAuth: []
  - bearerAuth: []
servers:
  - url: 'https://api.stripe.com/'
paths:
  /v1/payment_method_configurations:
    get:
      description: <p>List payment method configurations</p>
      operationId: GetPaymentMethodConfigurations
      parameters:
        - description: The Connect application to filter by.
          explode: true
          in: query
          name: application
          required: false
          schema:
            anyOf:
              - maxLength: 100
                type: string
              - enum:
                  - ''
                type: string
          style: deepObject
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    items:
                      $ref: '#/components/schemas/payment_method_configuration'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: PaymentMethodConfigResourcePaymentMethodConfigurationsList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Payment Method Configurations
      tags:
        - Payments
        - Methods
        - Configurations
    post:
      description: <p>Creates a payment method configuration</p>
      operationId: PostPaymentMethodConfigurations
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              acss_debit:
                explode: true
                style: deepObject
              affirm:
                explode: true
                style: deepObject
              afterpay_clearpay:
                explode: true
                style: deepObject
              alipay:
                explode: true
                style: deepObject
              apple_pay:
                explode: true
                style: deepObject
              apple_pay_later:
                explode: true
                style: deepObject
              au_becs_debit:
                explode: true
                style: deepObject
              bacs_debit:
                explode: true
                style: deepObject
              bancontact:
                explode: true
                style: deepObject
              blik:
                explode: true
                style: deepObject
              boleto:
                explode: true
                style: deepObject
              card:
                explode: true
                style: deepObject
              cartes_bancaires:
                explode: true
                style: deepObject
              cashapp:
                explode: true
                style: deepObject
              eps:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              fpx:
                explode: true
                style: deepObject
              giropay:
                explode: true
                style: deepObject
              google_pay:
                explode: true
                style: deepObject
              grabpay:
                explode: true
                style: deepObject
              ideal:
                explode: true
                style: deepObject
              jcb:
                explode: true
                style: deepObject
              klarna:
                explode: true
                style: deepObject
              konbini:
                explode: true
                style: deepObject
              link:
                explode: true
                style: deepObject
              oxxo:
                explode: true
                style: deepObject
              p24:
                explode: true
                style: deepObject
              paynow:
                explode: true
                style: deepObject
              paypal:
                explode: true
                style: deepObject
              promptpay:
                explode: true
                style: deepObject
              revolut_pay:
                explode: true
                style: deepObject
              sepa_debit:
                explode: true
                style: deepObject
              sofort:
                explode: true
                style: deepObject
              us_bank_account:
                explode: true
                style: deepObject
              wechat_pay:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                acss_debit:
                  description: >-
                    Canadian pre-authorized debit payments, check this
                    [page](https://stripe.com/docs/payments/acss-debit) for more
                    details like country availability.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                affirm:
                  description: >-
                    [Affirm](https://www.affirm.com/) gives your customers a way
                    to split purchases over a series of payments. Depending on
                    the purchase, they can pay with four interest-free payments
                    (Split Pay) or pay over a longer term (Installments), which
                    might include interest. Check this
                    [page](https://stripe.com/docs/payments/affirm) for more
                    details like country availability.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                afterpay_clearpay:
                  description: >-
                    Afterpay gives your customers a way to pay for purchases in
                    installments, check this
                    [page](https://stripe.com/docs/payments/afterpay-clearpay)
                    for more details like country availability. Afterpay is
                    particularly popular among businesses selling fashion,
                    beauty, and sports products.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                alipay:
                  description: >-
                    Alipay is a digital wallet in China that has more than a
                    billion active users worldwide. Alipay users can pay on the
                    web or on a mobile device using login credentials or their
                    Alipay app. Alipay has a low dispute rate and reduces fraud
                    by authenticating payments using the customer's login
                    credentials. Check this
                    [page](https://stripe.com/docs/payments/alipay) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                apple_pay:
                  description: >-
                    Stripe users can accept [Apple Pay](/payments/apple-pay) in
                    iOS applications in iOS 9 and later, and on the web in
                    Safari starting with iOS 10 or macOS Sierra. There are no
                    additional fees to process Apple Pay payments, and the
                    [pricing](/pricing) is the same as other card transactions.
                    Check this [page](https://stripe.com/docs/apple-pay) for
                    more details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                apple_pay_later:
                  description: >-
                    Apple Pay Later, a payment method for customers to buy now
                    and pay later, gives your customers a way to split purchases
                    into four installments across six weeks.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                au_becs_debit:
                  description: >-
                    Stripe users in Australia can accept Bulk Electronic
                    Clearing System (BECS) direct debit payments from customers
                    with an Australian bank account. Check this
                    [page](https://stripe.com/docs/payments/au-becs-debit) for
                    more details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                bacs_debit:
                  description: >-
                    Stripe users in the UK can accept Bacs Direct Debit payments
                    from customers with a UK bank account, check this
                    [page](https://stripe.com/docs/payments/payment-methods/bacs-debit)
                    for more details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                bancontact:
                  description: >-
                    Bancontact is the most popular online payment method in
                    Belgium, with over 15 million cards in circulation.
                    [Customers](https://stripe.com/docs/api/customers) use a
                    Bancontact card or mobile app linked to a Belgian bank
                    account to make online payments that are secure, guaranteed,
                    and confirmed immediately. Check this
                    [page](https://stripe.com/docs/payments/bancontact) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                blik:
                  description: >-
                    BLIK is a [single
                    use](https://stripe.com/docs/payments/payment-methods#usage)
                    payment method that requires customers to authenticate their
                    payments. When customers want to pay online using BLIK, they
                    request a six-digit code from their banking application and
                    enter it into the payment collection form. Check this
                    [page](https://stripe.com/docs/payments/blik) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                boleto:
                  description: >-
                    Boleto is an official (regulated by the Central Bank of
                    Brazil) payment method in Brazil. Check this
                    [page](https://stripe.com/docs/payments/boleto) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                card:
                  description: >-
                    Cards are a popular way for consumers and businesses to pay
                    online or in person. Stripe supports global and local card
                    networks.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                cartes_bancaires:
                  description: >-
                    Cartes Bancaires is France's local card network. More than
                    95% of these cards are co-branded with either Visa or
                    Mastercard, meaning you can process these cards over either
                    Cartes Bancaires or the Visa or Mastercard networks. Check
                    this
                    [page](https://stripe.com/docs/payments/cartes-bancaires)
                    for more details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                cashapp:
                  description: >-
                    Cash App is a popular consumer app in the US that allows
                    customers to bank, invest, send, and receive money using
                    their digital wallet. Check this
                    [page](https://stripe.com/docs/payments/cash-app-pay) for
                    more details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                eps:
                  description: >-
                    EPS is an Austria-based payment method that allows customers
                    to complete transactions online using their bank
                    credentials. EPS is supported by all Austrian banks and is
                    accepted by over 80% of Austrian online retailers. Check
                    this [page](https://stripe.com/docs/payments/eps) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                fpx:
                  description: >-
                    Financial Process Exchange (FPX) is a Malaysia-based payment
                    method that allows customers to complete transactions online
                    using their bank credentials. Bank Negara Malaysia (BNM),
                    the Central Bank of Malaysia, and eleven other major
                    Malaysian financial institutions are members of the PayNet
                    Group, which owns and operates FPX. It is one of the most
                    popular online payment methods in Malaysia, with nearly 90
                    million transactions in 2018 according to BNM. Check this
                    [page](https://stripe.com/docs/payments/fpx) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                giropay:
                  description: >-
                    giropay is a German payment method based on online banking,
                    introduced in 2006. It allows customers to complete
                    transactions online using their online banking environment,
                    with funds debited from their bank account. Depending on
                    their bank, customers confirm payments on giropay using a
                    second factor of authentication or a PIN. giropay accounts
                    for 10% of online checkouts in Germany. Check this
                    [page](https://stripe.com/docs/payments/giropay) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                google_pay:
                  description: >-
                    Google Pay allows customers to make payments in your app or
                    website using any credit or debit card saved to their Google
                    Account, including those from Google Play, YouTube, Chrome,
                    or an Android device. Use the Google Pay API to request any
                    credit or debit card stored in your customer's Google
                    account. Check this
                    [page](https://stripe.com/docs/google-pay) for more details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                grabpay:
                  description: >-
                    GrabPay is a payment method developed by
                    [Grab](https://www.grab.com/sg/consumer/finance/pay/).
                    GrabPay is a digital wallet - customers maintain a balance
                    in their wallets that they pay out with. Check this
                    [page](https://stripe.com/docs/payments/grabpay) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                ideal:
                  description: >-
                    iDEAL is a Netherlands-based payment method that allows
                    customers to complete transactions online using their bank
                    credentials. All major Dutch banks are members of Currence,
                    the scheme that operates iDEAL, making it the most popular
                    online payment method in the Netherlands with a share of
                    online transactions close to 55%. Check this
                    [page](https://stripe.com/docs/payments/ideal) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                jcb:
                  description: >-
                    JCB is a credit card company based in Japan. JCB is
                    currently available in Japan to businesses approved by JCB,
                    and available to all businesses in Australia, Canada, Hong
                    Kong, Japan, New Zealand, Singapore, Switzerland, United
                    Kingdom, United States, and all countries in the European
                    Economic Area except Iceland. Check this
                    [page](https://support.stripe.com/questions/accepting-japan-credit-bureau-%28jcb%29-payments)
                    for more details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                klarna:
                  description: >-
                    Klarna gives customers a range of [payment
                    options](https://stripe.com/docs/payments/klarna#payment-options)
                    during checkout. Available payment options vary depending on
                    the customer's billing address and the transaction amount.
                    These payment options make it convenient for customers to
                    purchase items in all price ranges. Check this
                    [page](https://stripe.com/docs/payments/klarna) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                konbini:
                  description: >-
                    Konbini allows customers in Japan to pay for bills and
                    online purchases at convenience stores with cash. Check this
                    [page](https://stripe.com/docs/payments/konbini) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                link:
                  description: >-
                    [Link](https://stripe.com/docs/payments/link) is a payment
                    method network. With Link, users save their payment details
                    once, then reuse that information to pay with one click for
                    any business on the network.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                name:
                  description: Configuration name.
                  maxLength: 100
                  type: string
                oxxo:
                  description: >-
                    OXXO is a Mexican chain of convenience stores with thousands
                    of locations across Latin America and represents nearly 20%
                    of online transactions in Mexico. OXXO allows customers to
                    pay bills and online purchases in-store with cash. Check
                    this [page](https://stripe.com/docs/payments/oxxo) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                p24:
                  description: >-
                    Przelewy24 is a Poland-based payment method aggregator that
                    allows customers to complete transactions online using bank
                    transfers and other methods. Bank transfers account for 30%
                    of online payments in Poland and Przelewy24 provides a way
                    for customers to pay with over 165 banks. Check this
                    [page](https://stripe.com/docs/payments/p24) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                parent:
                  description: >-
                    Configuration's parent configuration. Specify to create a
                    child configuration.
                  maxLength: 100
                  type: string
                paynow:
                  description: >-
                    PayNow is a Singapore-based payment method that allows
                    customers to make a payment using their preferred app from
                    participating banks and participating non-bank financial
                    institutions. Check this
                    [page](https://stripe.com/docs/payments/paynow) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                paypal:
                  description: >-
                    PayPal, a digital wallet popular with customers in Europe,
                    allows your customers worldwide to pay using their PayPal
                    account. Check this
                    [page](https://stripe.com/docs/payments/paypal) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                promptpay:
                  description: >-
                    PromptPay is a Thailand-based payment method that allows
                    customers to make a payment using their preferred app from
                    participating banks. Check this
                    [page](https://stripe.com/docs/payments/promptpay) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                revolut_pay:
                  description: >-
                    Revolut Pay, developed by Revolut, a global finance app, is
                    a digital wallet payment method. Revolut Pay uses the
                    customer’s stored balance or cards to fund the payment, and
                    offers the option for non-Revolut customers to save their
                    details after their first purchase.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                sepa_debit:
                  description: >-
                    The [Single Euro Payments Area
                    (SEPA)](https://en.wikipedia.org/wiki/Single_Euro_Payments_Area)
                    is an initiative of the European Union to simplify payments
                    within and across member countries. SEPA established and
                    enforced banking standards to allow for the direct debiting
                    of every EUR-denominated bank account within the SEPA
                    region, check this
                    [page](https://stripe.com/docs/payments/sepa-debit) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                sofort:
                  description: >-
                    Stripe users in Europe and the United States can use the
                    [Payment Intents
                    API](https://stripe.com/docs/payments/payment-intents)—a
                    single integration path for creating payments using any
                    supported method—to accept [Sofort](https://www.sofort.com/)
                    payments from customers. Check this
                    [page](https://stripe.com/docs/payments/sofort) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                us_bank_account:
                  description: >-
                    Stripe users in the United States can accept ACH direct
                    debit payments from customers with a US bank account using
                    the Automated Clearing House (ACH) payments system operated
                    by Nacha. Check this
                    [page](https://stripe.com/docs/payments/ach-debit) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                wechat_pay:
                  description: >-
                    WeChat, owned by Tencent, is China's leading mobile app with
                    over 1 billion monthly active users. Chinese consumers can
                    use WeChat Pay to pay for goods and services inside of
                    businesses' apps and websites. WeChat Pay users buy most
                    frequently in gaming, e-commerce, travel, online education,
                    and food/nutrition. Check this
                    [page](https://stripe.com/docs/payments/wechat-pay) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_method_configuration'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Payment Method Configuration
      tags:
        - Payments
        - Methods
        - Configurations
  '/v1/payment_method_configurations/{configuration}':
    get:
      description: <p>Retrieve payment method configuration</p>
      operationId: GetPaymentMethodConfigurationsConfiguration
      parameters:
        - in: path
          name: configuration
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_method_configuration'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Payment Method Configuration
      tags:
        - Payments
        - Methods
        - Configurations
    post:
      description: <p>Update payment method configuration</p>
      operationId: PostPaymentMethodConfigurationsConfiguration
      parameters:
        - in: path
          name: configuration
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              acss_debit:
                explode: true
                style: deepObject
              affirm:
                explode: true
                style: deepObject
              afterpay_clearpay:
                explode: true
                style: deepObject
              alipay:
                explode: true
                style: deepObject
              apple_pay:
                explode: true
                style: deepObject
              apple_pay_later:
                explode: true
                style: deepObject
              au_becs_debit:
                explode: true
                style: deepObject
              bacs_debit:
                explode: true
                style: deepObject
              bancontact:
                explode: true
                style: deepObject
              blik:
                explode: true
                style: deepObject
              boleto:
                explode: true
                style: deepObject
              card:
                explode: true
                style: deepObject
              cartes_bancaires:
                explode: true
                style: deepObject
              cashapp:
                explode: true
                style: deepObject
              eps:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              fpx:
                explode: true
                style: deepObject
              giropay:
                explode: true
                style: deepObject
              google_pay:
                explode: true
                style: deepObject
              grabpay:
                explode: true
                style: deepObject
              ideal:
                explode: true
                style: deepObject
              jcb:
                explode: true
                style: deepObject
              klarna:
                explode: true
                style: deepObject
              konbini:
                explode: true
                style: deepObject
              link:
                explode: true
                style: deepObject
              oxxo:
                explode: true
                style: deepObject
              p24:
                explode: true
                style: deepObject
              paynow:
                explode: true
                style: deepObject
              paypal:
                explode: true
                style: deepObject
              promptpay:
                explode: true
                style: deepObject
              revolut_pay:
                explode: true
                style: deepObject
              sepa_debit:
                explode: true
                style: deepObject
              sofort:
                explode: true
                style: deepObject
              us_bank_account:
                explode: true
                style: deepObject
              wechat_pay:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                acss_debit:
                  description: >-
                    Canadian pre-authorized debit payments, check this
                    [page](https://stripe.com/docs/payments/acss-debit) for more
                    details like country availability.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                active:
                  description: Whether the configuration can be used for new payments.
                  type: boolean
                affirm:
                  description: >-
                    [Affirm](https://www.affirm.com/) gives your customers a way
                    to split purchases over a series of payments. Depending on
                    the purchase, they can pay with four interest-free payments
                    (Split Pay) or pay over a longer term (Installments), which
                    might include interest. Check this
                    [page](https://stripe.com/docs/payments/affirm) for more
                    details like country availability.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                afterpay_clearpay:
                  description: >-
                    Afterpay gives your customers a way to pay for purchases in
                    installments, check this
                    [page](https://stripe.com/docs/payments/afterpay-clearpay)
                    for more details like country availability. Afterpay is
                    particularly popular among businesses selling fashion,
                    beauty, and sports products.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                alipay:
                  description: >-
                    Alipay is a digital wallet in China that has more than a
                    billion active users worldwide. Alipay users can pay on the
                    web or on a mobile device using login credentials or their
                    Alipay app. Alipay has a low dispute rate and reduces fraud
                    by authenticating payments using the customer's login
                    credentials. Check this
                    [page](https://stripe.com/docs/payments/alipay) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                apple_pay:
                  description: >-
                    Stripe users can accept [Apple Pay](/payments/apple-pay) in
                    iOS applications in iOS 9 and later, and on the web in
                    Safari starting with iOS 10 or macOS Sierra. There are no
                    additional fees to process Apple Pay payments, and the
                    [pricing](/pricing) is the same as other card transactions.
                    Check this [page](https://stripe.com/docs/apple-pay) for
                    more details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                apple_pay_later:
                  description: >-
                    Apple Pay Later, a payment method for customers to buy now
                    and pay later, gives your customers a way to split purchases
                    into four installments across six weeks.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                au_becs_debit:
                  description: >-
                    Stripe users in Australia can accept Bulk Electronic
                    Clearing System (BECS) direct debit payments from customers
                    with an Australian bank account. Check this
                    [page](https://stripe.com/docs/payments/au-becs-debit) for
                    more details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                bacs_debit:
                  description: >-
                    Stripe users in the UK can accept Bacs Direct Debit payments
                    from customers with a UK bank account, check this
                    [page](https://stripe.com/docs/payments/payment-methods/bacs-debit)
                    for more details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                bancontact:
                  description: >-
                    Bancontact is the most popular online payment method in
                    Belgium, with over 15 million cards in circulation.
                    [Customers](https://stripe.com/docs/api/customers) use a
                    Bancontact card or mobile app linked to a Belgian bank
                    account to make online payments that are secure, guaranteed,
                    and confirmed immediately. Check this
                    [page](https://stripe.com/docs/payments/bancontact) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                blik:
                  description: >-
                    BLIK is a [single
                    use](https://stripe.com/docs/payments/payment-methods#usage)
                    payment method that requires customers to authenticate their
                    payments. When customers want to pay online using BLIK, they
                    request a six-digit code from their banking application and
                    enter it into the payment collection form. Check this
                    [page](https://stripe.com/docs/payments/blik) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                boleto:
                  description: >-
                    Boleto is an official (regulated by the Central Bank of
                    Brazil) payment method in Brazil. Check this
                    [page](https://stripe.com/docs/payments/boleto) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                card:
                  description: >-
                    Cards are a popular way for consumers and businesses to pay
                    online or in person. Stripe supports global and local card
                    networks.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                cartes_bancaires:
                  description: >-
                    Cartes Bancaires is France's local card network. More than
                    95% of these cards are co-branded with either Visa or
                    Mastercard, meaning you can process these cards over either
                    Cartes Bancaires or the Visa or Mastercard networks. Check
                    this
                    [page](https://stripe.com/docs/payments/cartes-bancaires)
                    for more details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                cashapp:
                  description: >-
                    Cash App is a popular consumer app in the US that allows
                    customers to bank, invest, send, and receive money using
                    their digital wallet. Check this
                    [page](https://stripe.com/docs/payments/cash-app-pay) for
                    more details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                eps:
                  description: >-
                    EPS is an Austria-based payment method that allows customers
                    to complete transactions online using their bank
                    credentials. EPS is supported by all Austrian banks and is
                    accepted by over 80% of Austrian online retailers. Check
                    this [page](https://stripe.com/docs/payments/eps) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                fpx:
                  description: >-
                    Financial Process Exchange (FPX) is a Malaysia-based payment
                    method that allows customers to complete transactions online
                    using their bank credentials. Bank Negara Malaysia (BNM),
                    the Central Bank of Malaysia, and eleven other major
                    Malaysian financial institutions are members of the PayNet
                    Group, which owns and operates FPX. It is one of the most
                    popular online payment methods in Malaysia, with nearly 90
                    million transactions in 2018 according to BNM. Check this
                    [page](https://stripe.com/docs/payments/fpx) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                giropay:
                  description: >-
                    giropay is a German payment method based on online banking,
                    introduced in 2006. It allows customers to complete
                    transactions online using their online banking environment,
                    with funds debited from their bank account. Depending on
                    their bank, customers confirm payments on giropay using a
                    second factor of authentication or a PIN. giropay accounts
                    for 10% of online checkouts in Germany. Check this
                    [page](https://stripe.com/docs/payments/giropay) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                google_pay:
                  description: >-
                    Google Pay allows customers to make payments in your app or
                    website using any credit or debit card saved to their Google
                    Account, including those from Google Play, YouTube, Chrome,
                    or an Android device. Use the Google Pay API to request any
                    credit or debit card stored in your customer's Google
                    account. Check this
                    [page](https://stripe.com/docs/google-pay) for more details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                grabpay:
                  description: >-
                    GrabPay is a payment method developed by
                    [Grab](https://www.grab.com/sg/consumer/finance/pay/).
                    GrabPay is a digital wallet - customers maintain a balance
                    in their wallets that they pay out with. Check this
                    [page](https://stripe.com/docs/payments/grabpay) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                ideal:
                  description: >-
                    iDEAL is a Netherlands-based payment method that allows
                    customers to complete transactions online using their bank
                    credentials. All major Dutch banks are members of Currence,
                    the scheme that operates iDEAL, making it the most popular
                    online payment method in the Netherlands with a share of
                    online transactions close to 55%. Check this
                    [page](https://stripe.com/docs/payments/ideal) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                jcb:
                  description: >-
                    JCB is a credit card company based in Japan. JCB is
                    currently available in Japan to businesses approved by JCB,
                    and available to all businesses in Australia, Canada, Hong
                    Kong, Japan, New Zealand, Singapore, Switzerland, United
                    Kingdom, United States, and all countries in the European
                    Economic Area except Iceland. Check this
                    [page](https://support.stripe.com/questions/accepting-japan-credit-bureau-%28jcb%29-payments)
                    for more details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                klarna:
                  description: >-
                    Klarna gives customers a range of [payment
                    options](https://stripe.com/docs/payments/klarna#payment-options)
                    during checkout. Available payment options vary depending on
                    the customer's billing address and the transaction amount.
                    These payment options make it convenient for customers to
                    purchase items in all price ranges. Check this
                    [page](https://stripe.com/docs/payments/klarna) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                konbini:
                  description: >-
                    Konbini allows customers in Japan to pay for bills and
                    online purchases at convenience stores with cash. Check this
                    [page](https://stripe.com/docs/payments/konbini) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                link:
                  description: >-
                    [Link](https://stripe.com/docs/payments/link) is a payment
                    method network. With Link, users save their payment details
                    once, then reuse that information to pay with one click for
                    any business on the network.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                name:
                  description: Configuration name.
                  maxLength: 100
                  type: string
                oxxo:
                  description: >-
                    OXXO is a Mexican chain of convenience stores with thousands
                    of locations across Latin America and represents nearly 20%
                    of online transactions in Mexico. OXXO allows customers to
                    pay bills and online purchases in-store with cash. Check
                    this [page](https://stripe.com/docs/payments/oxxo) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                p24:
                  description: >-
                    Przelewy24 is a Poland-based payment method aggregator that
                    allows customers to complete transactions online using bank
                    transfers and other methods. Bank transfers account for 30%
                    of online payments in Poland and Przelewy24 provides a way
                    for customers to pay with over 165 banks. Check this
                    [page](https://stripe.com/docs/payments/p24) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                paynow:
                  description: >-
                    PayNow is a Singapore-based payment method that allows
                    customers to make a payment using their preferred app from
                    participating banks and participating non-bank financial
                    institutions. Check this
                    [page](https://stripe.com/docs/payments/paynow) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                paypal:
                  description: >-
                    PayPal, a digital wallet popular with customers in Europe,
                    allows your customers worldwide to pay using their PayPal
                    account. Check this
                    [page](https://stripe.com/docs/payments/paypal) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                promptpay:
                  description: >-
                    PromptPay is a Thailand-based payment method that allows
                    customers to make a payment using their preferred app from
                    participating banks. Check this
                    [page](https://stripe.com/docs/payments/promptpay) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                revolut_pay:
                  description: >-
                    Revolut Pay, developed by Revolut, a global finance app, is
                    a digital wallet payment method. Revolut Pay uses the
                    customer’s stored balance or cards to fund the payment, and
                    offers the option for non-Revolut customers to save their
                    details after their first purchase.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                sepa_debit:
                  description: >-
                    The [Single Euro Payments Area
                    (SEPA)](https://en.wikipedia.org/wiki/Single_Euro_Payments_Area)
                    is an initiative of the European Union to simplify payments
                    within and across member countries. SEPA established and
                    enforced banking standards to allow for the direct debiting
                    of every EUR-denominated bank account within the SEPA
                    region, check this
                    [page](https://stripe.com/docs/payments/sepa-debit) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                sofort:
                  description: >-
                    Stripe users in Europe and the United States can use the
                    [Payment Intents
                    API](https://stripe.com/docs/payments/payment-intents)—a
                    single integration path for creating payments using any
                    supported method—to accept [Sofort](https://www.sofort.com/)
                    payments from customers. Check this
                    [page](https://stripe.com/docs/payments/sofort) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                us_bank_account:
                  description: >-
                    Stripe users in the United States can accept ACH direct
                    debit payments from customers with a US bank account using
                    the Automated Clearing House (ACH) payments system operated
                    by Nacha. Check this
                    [page](https://stripe.com/docs/payments/ach-debit) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
                wechat_pay:
                  description: >-
                    WeChat, owned by Tencent, is China's leading mobile app with
                    over 1 billion monthly active users. Chinese consumers can
                    use WeChat Pay to pay for goods and services inside of
                    businesses' apps and websites. WeChat Pay users buy most
                    frequently in gaming, e-commerce, travel, online education,
                    and food/nutrition. Check this
                    [page](https://stripe.com/docs/payments/wechat-pay) for more
                    details.
                  properties:
                    display_preference:
                      properties:
                        preference:
                          enum:
                            - none
                            - 'off'
                            - 'on'
                          type: string
                      title: display_preference_param
                      type: object
                  title: payment_method_param
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_method_configuration'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Payment Method Configuration
      tags:
        - Payments
        - Methods
        - Configurations
  /v1/payment_method_domains:
    get:
      description: <p>Lists the details of existing payment method domains.</p>
      operationId: GetPaymentMethodDomains
      parameters:
        - description: The domain name that this payment method domain object represents.
          in: query
          name: domain_name
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            Whether this payment method domain is enabled. If the domain is not
            enabled, payment methods will not appear in Elements
          in: query
          name: enabled
          required: false
          schema:
            type: boolean
          style: form
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    items:
                      $ref: '#/components/schemas/payment_method_domain'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    pattern: ^/v1/payment_method_domains
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: PaymentMethodDomainResourcePaymentMethodDomainList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Payment Method Domains
      tags:
        - Payments
        - Methods
        - Domains
    post:
      description: <p>Creates a payment method domain.</p>
      operationId: PostPaymentMethodDomains
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                domain_name:
                  description: >-
                    The domain name that this payment method domain object
                    represents.
                  maxLength: 5000
                  type: string
                enabled:
                  description: >-
                    Whether this payment method domain is enabled. If the domain
                    is not enabled, payment methods that require a payment
                    method domain will not appear in Elements.
                  type: boolean
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
              required:
                - domain_name
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_method_domain'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Payment Method Domain
      tags:
        - Payments
        - Methods
        - Domains
  '/v1/payment_method_domains/{payment_method_domain}':
    get:
      description: <p>Retrieves the details of an existing payment method domain.</p>
      operationId: GetPaymentMethodDomainsPaymentMethodDomain
      parameters:
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - in: path
          name: payment_method_domain
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_method_domain'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Payment Method Domain
      tags:
        - Payments
        - Methods
        - Domains
    post:
      description: <p>Updates an existing payment method domain.</p>
      operationId: PostPaymentMethodDomainsPaymentMethodDomain
      parameters:
        - in: path
          name: payment_method_domain
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                enabled:
                  description: >-
                    Whether this payment method domain is enabled. If the domain
                    is not enabled, payment methods that require a payment
                    method domain will not appear in Elements.
                  type: boolean
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_method_domain'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Payment Method Domain
      tags:
        - Payments
        - Methods
        - Domains
  '/v1/payment_method_domains/{payment_method_domain}/validate':
    post:
      description: >-
        <p>Some payment methods such as Apple Pay require additional steps to
        verify a domain. If the requirements weren’t satisfied when the domain
        was created, the payment method will be inactive on the domain.

        The payment method doesn’t appear in Elements for this domain until it
        is active.</p>


        <p>To activate a payment method on an existing payment method domain,
        complete the required validation steps specific to the payment method,
        and then validate the payment method domain with this endpoint.</p>


        <p>Related guides: <a
        href="/docs/payments/payment-methods/pmd-registration">Payment method
        domains</a>.</p>
      operationId: PostPaymentMethodDomainsPaymentMethodDomainValidate
      parameters:
        - in: path
          name: payment_method_domain
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_method_domain'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Validate Payment Method Domain
      tags:
        - Validate
        - Payments
        - Methods
        - Domains
  /v1/payment_methods:
    get:
      description: >-
        <p>Returns a list of PaymentMethods for Treasury flows. If you want to
        list the PaymentMethods attached to a Customer for payments, you should
        use the <a href="/docs/api/payment_methods/customer_list">List a
        Customer’s PaymentMethods</a> API instead.</p>
      operationId: GetPaymentMethods
      parameters:
        - description: The ID of the customer whose PaymentMethods will be retrieved.
          in: query
          name: customer
          required: false
          schema:
            maxLength: 5000
            type: string
          style: form
        - description: >-
            A cursor for use in pagination. `ending_before` is an object ID that
            defines your place in the list. For instance, if you make a list
            request and receive 100 objects, starting with `obj_bar`, your
            subsequent call can include `ending_before=obj_bar` in order to
            fetch the previous page of the list.
          in: query
          name: ending_before
          required: false
          schema:
            type: string
          style: form
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - description: >-
            A limit on the number of objects to be returned. Limit can range
            between 1 and 100, and the default is 10.
          in: query
          name: limit
          required: false
          schema:
            type: integer
          style: form
        - description: >-
            A cursor for use in pagination. `starting_after` is an object ID
            that defines your place in the list. For instance, if you make a
            list request and receive 100 objects, ending with `obj_foo`, your
            subsequent call can include `starting_after=obj_foo` in order to
            fetch the next page of the list.
          in: query
          name: starting_after
          required: false
          schema:
            type: string
          style: form
        - description: >-
            An optional filter on the list, based on the object `type` field.
            Without the filter, the list includes all current and future payment
            method types. If your integration expects only one type of payment
            method in the response, make sure to provide a type value in the
            request.
          in: query
          name: type
          required: false
          schema:
            enum:
              - acss_debit
              - affirm
              - afterpay_clearpay
              - alipay
              - au_becs_debit
              - bacs_debit
              - bancontact
              - blik
              - boleto
              - card
              - cashapp
              - customer_balance
              - eps
              - fpx
              - giropay
              - grabpay
              - ideal
              - klarna
              - konbini
              - link
              - oxxo
              - p24
              - paynow
              - paypal
              - pix
              - promptpay
              - revolut_pay
              - sepa_debit
              - sofort
              - us_bank_account
              - wechat_pay
              - zip
            type: string
            x-stripeBypassValidation: true
          style: form
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                description: ''
                properties:
                  data:
                    items:
                      $ref: '#/components/schemas/payment_method'
                    type: array
                  has_more:
                    description: >-
                      True if this list has another page of items after this one
                      that can be fetched.
                    type: boolean
                  object:
                    description: >-
                      String representing the object's type. Objects of the same
                      type share the same value. Always has the value `list`.
                    enum:
                      - list
                    type: string
                  url:
                    description: The URL where this list can be accessed.
                    maxLength: 5000
                    pattern: ^/v1/payment_methods
                    type: string
                required:
                  - data
                  - has_more
                  - object
                  - url
                title: PaymentFlowsPaymentMethodList
                type: object
                x-expandableFields:
                  - data
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Payment Methods
      tags:
        - Payments
        - Methods
    post:
      description: >-
        <p>Creates a PaymentMethod object. Read the <a
        href="/docs/stripe-js/reference#stripe-create-payment-method">Stripe.js
        reference</a> to learn how to create PaymentMethods via Stripe.js.</p>


        <p>Instead of creating a PaymentMethod directly, we recommend using the
        <a href="/docs/payments/accept-a-payment">PaymentIntents</a> API to
        accept a payment immediately or the <a
        href="/docs/payments/save-and-reuse">SetupIntent</a> API to collect
        payment method details ahead of a future payment.</p>
      operationId: PostPaymentMethods
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              acss_debit:
                explode: true
                style: deepObject
              affirm:
                explode: true
                style: deepObject
              afterpay_clearpay:
                explode: true
                style: deepObject
              alipay:
                explode: true
                style: deepObject
              au_becs_debit:
                explode: true
                style: deepObject
              bacs_debit:
                explode: true
                style: deepObject
              bancontact:
                explode: true
                style: deepObject
              billing_details:
                explode: true
                style: deepObject
              blik:
                explode: true
                style: deepObject
              boleto:
                explode: true
                style: deepObject
              card:
                explode: true
                style: deepObject
              cashapp:
                explode: true
                style: deepObject
              customer_balance:
                explode: true
                style: deepObject
              eps:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              fpx:
                explode: true
                style: deepObject
              giropay:
                explode: true
                style: deepObject
              grabpay:
                explode: true
                style: deepObject
              ideal:
                explode: true
                style: deepObject
              interac_present:
                explode: true
                style: deepObject
              klarna:
                explode: true
                style: deepObject
              konbini:
                explode: true
                style: deepObject
              link:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              oxxo:
                explode: true
                style: deepObject
              p24:
                explode: true
                style: deepObject
              paynow:
                explode: true
                style: deepObject
              paypal:
                explode: true
                style: deepObject
              pix:
                explode: true
                style: deepObject
              promptpay:
                explode: true
                style: deepObject
              radar_options:
                explode: true
                style: deepObject
              revolut_pay:
                explode: true
                style: deepObject
              sepa_debit:
                explode: true
                style: deepObject
              sofort:
                explode: true
                style: deepObject
              us_bank_account:
                explode: true
                style: deepObject
              wechat_pay:
                explode: true
                style: deepObject
              zip:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                acss_debit:
                  description: >-
                    If this is an `acss_debit` PaymentMethod, this hash contains
                    details about the ACSS Debit payment method.
                  properties:
                    account_number:
                      maxLength: 5000
                      type: string
                    institution_number:
                      maxLength: 5000
                      type: string
                    transit_number:
                      maxLength: 5000
                      type: string
                  required:
                    - account_number
                    - institution_number
                    - transit_number
                  title: payment_method_param
                  type: object
                affirm:
                  description: >-
                    If this is an `affirm` PaymentMethod, this hash contains
                    details about the Affirm payment method.
                  properties: {}
                  title: param
                  type: object
                afterpay_clearpay:
                  description: >-
                    If this is an `AfterpayClearpay` PaymentMethod, this hash
                    contains details about the AfterpayClearpay payment method.
                  properties: {}
                  title: param
                  type: object
                alipay:
                  description: >-
                    If this is an `Alipay` PaymentMethod, this hash contains
                    details about the Alipay payment method.
                  properties: {}
                  title: param
                  type: object
                au_becs_debit:
                  description: >-
                    If this is an `au_becs_debit` PaymentMethod, this hash
                    contains details about the bank account.
                  properties:
                    account_number:
                      maxLength: 5000
                      type: string
                    bsb_number:
                      maxLength: 5000
                      type: string
                  required:
                    - account_number
                    - bsb_number
                  title: param
                  type: object
                bacs_debit:
                  description: >-
                    If this is a `bacs_debit` PaymentMethod, this hash contains
                    details about the Bacs Direct Debit bank account.
                  properties:
                    account_number:
                      maxLength: 5000
                      type: string
                    sort_code:
                      maxLength: 5000
                      type: string
                  title: param
                  type: object
                bancontact:
                  description: >-
                    If this is a `bancontact` PaymentMethod, this hash contains
                    details about the Bancontact payment method.
                  properties: {}
                  title: param
                  type: object
                billing_details:
                  description: >-
                    Billing information associated with the PaymentMethod that
                    may be used or required by particular types of payment
                    methods.
                  properties:
                    address:
                      anyOf:
                        - properties:
                            city:
                              maxLength: 5000
                              type: string
                            country:
                              maxLength: 5000
                              type: string
                            line1:
                              maxLength: 5000
                              type: string
                            line2:
                              maxLength: 5000
                              type: string
                            postal_code:
                              maxLength: 5000
                              type: string
                            state:
                              maxLength: 5000
                              type: string
                          title: billing_details_address
                          type: object
                        - enum:
                            - ''
                          type: string
                    email:
                      anyOf:
                        - type: string
                        - enum:
                            - ''
                          type: string
                    name:
                      anyOf:
                        - maxLength: 5000
                          type: string
                        - enum:
                            - ''
                          type: string
                    phone:
                      anyOf:
                        - maxLength: 5000
                          type: string
                        - enum:
                            - ''
                          type: string
                  title: billing_details_inner_params
                  type: object
                blik:
                  description: >-
                    If this is a `blik` PaymentMethod, this hash contains
                    details about the BLIK payment method.
                  properties: {}
                  title: param
                  type: object
                boleto:
                  description: >-
                    If this is a `boleto` PaymentMethod, this hash contains
                    details about the Boleto payment method.
                  properties:
                    tax_id:
                      maxLength: 5000
                      type: string
                  required:
                    - tax_id
                  title: param
                  type: object
                card:
                  anyOf:
                    - properties:
                        cvc:
                          maxLength: 5000
                          type: string
                        exp_month:
                          type: integer
                        exp_year:
                          type: integer
                        number:
                          maxLength: 5000
                          type: string
                      required:
                        - exp_month
                        - exp_year
                        - number
                      title: card_details_params
                      type: object
                    - properties:
                        token:
                          maxLength: 5000
                          type: string
                      required:
                        - token
                      title: token_params
                      type: object
                  description: >-
                    If this is a `card` PaymentMethod, this hash contains the
                    user's card details. For backwards compatibility, you can
                    alternatively provide a Stripe token (e.g., for Apple Pay,
                    Amex Express Checkout, or legacy Checkout) into the card
                    hash with format `card: {token: "tok_visa"}`. When providing
                    a card number, you must meet the requirements for [PCI
                    compliance](https://stripe.com/docs/security#validating-pci-compliance).
                    We strongly recommend using Stripe.js instead of interacting
                    with this API directly.
                  x-stripeBypassValidation: true
                cashapp:
                  description: >-
                    If this is a `cashapp` PaymentMethod, this hash contains
                    details about the Cash App Pay payment method.
                  properties: {}
                  title: param
                  type: object
                customer:
                  description: >-
                    The `Customer` to whom the original PaymentMethod is
                    attached.
                  maxLength: 5000
                  type: string
                customer_balance:
                  description: >-
                    If this is a `customer_balance` PaymentMethod, this hash
                    contains details about the CustomerBalance payment method.
                  properties: {}
                  title: param
                  type: object
                eps:
                  description: >-
                    If this is an `eps` PaymentMethod, this hash contains
                    details about the EPS payment method.
                  properties:
                    bank:
                      enum:
                        - arzte_und_apotheker_bank
                        - austrian_anadi_bank_ag
                        - bank_austria
                        - bankhaus_carl_spangler
                        - bankhaus_schelhammer_und_schattera_ag
                        - bawag_psk_ag
                        - bks_bank_ag
                        - brull_kallmus_bank_ag
                        - btv_vier_lander_bank
                        - capital_bank_grawe_gruppe_ag
                        - deutsche_bank_ag
                        - dolomitenbank
                        - easybank_ag
                        - erste_bank_und_sparkassen
                        - hypo_alpeadriabank_international_ag
                        - hypo_bank_burgenland_aktiengesellschaft
                        - hypo_noe_lb_fur_niederosterreich_u_wien
                        - hypo_oberosterreich_salzburg_steiermark
                        - hypo_tirol_bank_ag
                        - hypo_vorarlberg_bank_ag
                        - marchfelder_bank
                        - oberbank_ag
                        - raiffeisen_bankengruppe_osterreich
                        - schoellerbank_ag
                        - sparda_bank_wien
                        - volksbank_gruppe
                        - volkskreditbank_ag
                        - vr_bank_braunau
                      maxLength: 5000
                      type: string
                  title: param
                  type: object
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                fpx:
                  description: >-
                    If this is an `fpx` PaymentMethod, this hash contains
                    details about the FPX payment method.
                  properties:
                    bank:
                      enum:
                        - affin_bank
                        - agrobank
                        - alliance_bank
                        - ambank
                        - bank_islam
                        - bank_muamalat
                        - bank_of_china
                        - bank_rakyat
                        - bsn
                        - cimb
                        - deutsche_bank
                        - hong_leong_bank
                        - hsbc
                        - kfh
                        - maybank2e
                        - maybank2u
                        - ocbc
                        - pb_enterprise
                        - public_bank
                        - rhb
                        - standard_chartered
                        - uob
                      maxLength: 5000
                      type: string
                      x-stripeBypassValidation: true
                  required:
                    - bank
                  title: param
                  type: object
                giropay:
                  description: >-
                    If this is a `giropay` PaymentMethod, this hash contains
                    details about the Giropay payment method.
                  properties: {}
                  title: param
                  type: object
                grabpay:
                  description: >-
                    If this is a `grabpay` PaymentMethod, this hash contains
                    details about the GrabPay payment method.
                  properties: {}
                  title: param
                  type: object
                ideal:
                  description: >-
                    If this is an `ideal` PaymentMethod, this hash contains
                    details about the iDEAL payment method.
                  properties:
                    bank:
                      enum:
                        - abn_amro
                        - asn_bank
                        - bunq
                        - handelsbanken
                        - ing
                        - knab
                        - moneyou
                        - n26
                        - rabobank
                        - regiobank
                        - revolut
                        - sns_bank
                        - triodos_bank
                        - van_lanschot
                        - yoursafe
                      maxLength: 5000
                      type: string
                  title: param
                  type: object
                interac_present:
                  description: >-
                    If this is an `interac_present` PaymentMethod, this hash
                    contains details about the Interac Present payment method.
                  properties: {}
                  title: param
                  type: object
                klarna:
                  description: >-
                    If this is a `klarna` PaymentMethod, this hash contains
                    details about the Klarna payment method.
                  properties:
                    dob:
                      properties:
                        day:
                          type: integer
                        month:
                          type: integer
                        year:
                          type: integer
                      required:
                        - day
                        - month
                        - year
                      title: date_of_birth
                      type: object
                  title: param
                  type: object
                konbini:
                  description: >-
                    If this is a `konbini` PaymentMethod, this hash contains
                    details about the Konbini payment method.
                  properties: {}
                  title: param
                  type: object
                link:
                  description: >-
                    If this is an `Link` PaymentMethod, this hash contains
                    details about the Link payment method.
                  properties: {}
                  title: param
                  type: object
                metadata:
                  additionalProperties:
                    type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                  type: object
                oxxo:
                  description: >-
                    If this is an `oxxo` PaymentMethod, this hash contains
                    details about the OXXO payment method.
                  properties: {}
                  title: param
                  type: object
                p24:
                  description: >-
                    If this is a `p24` PaymentMethod, this hash contains details
                    about the P24 payment method.
                  properties:
                    bank:
                      enum:
                        - alior_bank
                        - bank_millennium
                        - bank_nowy_bfg_sa
                        - bank_pekao_sa
                        - banki_spbdzielcze
                        - blik
                        - bnp_paribas
                        - boz
                        - citi_handlowy
                        - credit_agricole
                        - envelobank
                        - etransfer_pocztowy24
                        - getin_bank
                        - ideabank
                        - ing
                        - inteligo
                        - mbank_mtransfer
                        - nest_przelew
                        - noble_pay
                        - pbac_z_ipko
                        - plus_bank
                        - santander_przelew24
                        - tmobile_usbugi_bankowe
                        - toyota_bank
                        - volkswagen_bank
                      type: string
                      x-stripeBypassValidation: true
                  title: param
                  type: object
                payment_method:
                  description: The PaymentMethod to share.
                  maxLength: 5000
                  type: string
                paynow:
                  description: >-
                    If this is a `paynow` PaymentMethod, this hash contains
                    details about the PayNow payment method.
                  properties: {}
                  title: param
                  type: object
                paypal:
                  description: >-
                    If this is a `paypal` PaymentMethod, this hash contains
                    details about the PayPal payment method.
                  properties: {}
                  title: param
                  type: object
                pix:
                  description: >-
                    If this is a `pix` PaymentMethod, this hash contains details
                    about the Pix payment method.
                  properties: {}
                  title: param
                  type: object
                promptpay:
                  description: >-
                    If this is a `promptpay` PaymentMethod, this hash contains
                    details about the PromptPay payment method.
                  properties: {}
                  title: param
                  type: object
                radar_options:
                  description: >-
                    Options to configure Radar. See [Radar
                    Session](https://stripe.com/docs/radar/radar-session) for
                    more information.
                  properties:
                    session:
                      maxLength: 5000
                      type: string
                  title: radar_options
                  type: object
                revolut_pay:
                  description: >-
                    If this is a `Revolut Pay` PaymentMethod, this hash contains
                    details about the Revolut Pay payment method.
                  properties: {}
                  title: param
                  type: object
                sepa_debit:
                  description: >-
                    If this is a `sepa_debit` PaymentMethod, this hash contains
                    details about the SEPA debit bank account.
                  properties:
                    iban:
                      maxLength: 5000
                      type: string
                  required:
                    - iban
                  title: param
                  type: object
                sofort:
                  description: >-
                    If this is a `sofort` PaymentMethod, this hash contains
                    details about the SOFORT payment method.
                  properties:
                    country:
                      enum:
                        - AT
                        - BE
                        - DE
                        - ES
                        - IT
                        - NL
                      type: string
                  required:
                    - country
                  title: param
                  type: object
                type:
                  description: >-
                    The type of the PaymentMethod. An additional hash is
                    included on the PaymentMethod with a name matching this
                    value. It contains additional information specific to the
                    PaymentMethod type.
                  enum:
                    - acss_debit
                    - affirm
                    - afterpay_clearpay
                    - alipay
                    - au_becs_debit
                    - bacs_debit
                    - bancontact
                    - blik
                    - boleto
                    - card
                    - cashapp
                    - customer_balance
                    - eps
                    - fpx
                    - giropay
                    - grabpay
                    - ideal
                    - klarna
                    - konbini
                    - link
                    - oxxo
                    - p24
                    - paynow
                    - paypal
                    - pix
                    - promptpay
                    - revolut_pay
                    - sepa_debit
                    - sofort
                    - us_bank_account
                    - wechat_pay
                    - zip
                  type: string
                  x-stripeBypassValidation: true
                us_bank_account:
                  description: >-
                    If this is an `us_bank_account` PaymentMethod, this hash
                    contains details about the US bank account payment method.
                  properties:
                    account_holder_type:
                      enum:
                        - company
                        - individual
                      type: string
                    account_number:
                      maxLength: 5000
                      type: string
                    account_type:
                      enum:
                        - checking
                        - savings
                      type: string
                    financial_connections_account:
                      maxLength: 5000
                      type: string
                    routing_number:
                      maxLength: 5000
                      type: string
                  title: payment_method_param
                  type: object
                wechat_pay:
                  description: >-
                    If this is an `wechat_pay` PaymentMethod, this hash contains
                    details about the wechat_pay payment method.
                  properties: {}
                  title: param
                  type: object
                zip:
                  description: >-
                    If this is a `zip` PaymentMethod, this hash contains details
                    about the Zip payment method.
                  properties: {}
                  title: param
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_method'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Create Payment Method
      tags:
        - Payments
        - Methods
  '/v1/payment_methods/{payment_method}':
    get:
      description: >-
        <p>Retrieves a PaymentMethod object attached to the StripeAccount. To
        retrieve a payment method attached to a Customer, you should use <a
        href="/docs/api/payment_methods/customer">Retrieve a Customer’s
        PaymentMethods</a></p>
      operationId: GetPaymentMethodsPaymentMethod
      parameters:
        - description: Specifies which fields in the response should be expanded.
          explode: true
          in: query
          name: expand
          required: false
          schema:
            items:
              maxLength: 5000
              type: string
            type: array
          style: deepObject
        - in: path
          name: payment_method
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding: {}
            schema:
              additionalProperties: false
              properties: {}
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_method'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Retrieve Payment Method
      tags:
        - Payments
        - Methods
    post:
      description: >-
        <p>Updates a PaymentMethod object. A PaymentMethod must be attached a
        customer to be updated.</p>
      operationId: PostPaymentMethodsPaymentMethod
      parameters:
        - in: path
          name: payment_method
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              billing_details:
                explode: true
                style: deepObject
              card:
                explode: true
                style: deepObject
              expand:
                explode: true
                style: deepObject
              link:
                explode: true
                style: deepObject
              metadata:
                explode: true
                style: deepObject
              us_bank_account:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                billing_details:
                  description: >-
                    Billing information associated with the PaymentMethod that
                    may be used or required by particular types of payment
                    methods.
                  properties:
                    address:
                      anyOf:
                        - properties:
                            city:
                              maxLength: 5000
                              type: string
                            country:
                              maxLength: 5000
                              type: string
                            line1:
                              maxLength: 5000
                              type: string
                            line2:
                              maxLength: 5000
                              type: string
                            postal_code:
                              maxLength: 5000
                              type: string
                            state:
                              maxLength: 5000
                              type: string
                          title: billing_details_address
                          type: object
                        - enum:
                            - ''
                          type: string
                    email:
                      anyOf:
                        - type: string
                        - enum:
                            - ''
                          type: string
                    name:
                      anyOf:
                        - maxLength: 5000
                          type: string
                        - enum:
                            - ''
                          type: string
                    phone:
                      anyOf:
                        - maxLength: 5000
                          type: string
                        - enum:
                            - ''
                          type: string
                  title: billing_details_inner_params
                  type: object
                card:
                  description: >-
                    If this is a `card` PaymentMethod, this hash contains the
                    user's card details.
                  properties:
                    exp_month:
                      type: integer
                    exp_year:
                      type: integer
                  title: update_api_param
                  type: object
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
                link:
                  description: >-
                    If this is an `Link` PaymentMethod, this hash contains
                    details about the Link payment method.
                  properties: {}
                  title: param
                  type: object
                metadata:
                  anyOf:
                    - additionalProperties:
                        type: string
                      type: object
                    - enum:
                        - ''
                      type: string
                  description: >-
                    Set of [key-value
                    pairs](https://stripe.com/docs/api/metadata) that you can
                    attach to an object. This can be useful for storing
                    additional information about the object in a structured
                    format. Individual keys can be unset by posting an empty
                    value to them. All keys can be unset by posting an empty
                    value to `metadata`.
                us_bank_account:
                  description: >-
                    If this is an `us_bank_account` PaymentMethod, this hash
                    contains details about the US bank account payment method.
                  properties:
                    account_holder_type:
                      enum:
                        - company
                        - individual
                      type: string
                  title: update_param
                  type: object
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_method'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Update Payment Method
      tags:
        - Payments
        - Methods
  '/v1/payment_methods/{payment_method}/attach':
    post:
      description: >-
        <p>Attaches a PaymentMethod object to a Customer.</p>


        <p>To attach a new PaymentMethod to a customer for future payments, we
        recommend you use a <a href="/docs/api/setup_intents">SetupIntent</a>

        or a PaymentIntent with <a
        href="/docs/api/payment_intents/create#create_payment_intent-setup_future_usage">setup_future_usage</a>.

        These approaches will perform any necessary steps to set up the
        PaymentMethod for future payments. Using the
        <code>/v1/payment_methods/:id/attach</code>

        endpoint without first using a SetupIntent or PaymentIntent with
        <code>setup_future_usage</code> does not optimize the PaymentMethod for

        future use, which makes later declines and payment friction more likely.

        See <a href="/docs/payments/payment-intents#future-usage">Optimizing
        cards for future payments</a> for more information about setting up

        future payments.</p>


        <p>To use this PaymentMethod as the default for invoice or subscription
        payments,

        set <a
        href="/docs/api/customers/update#update_customer-invoice_settings-default_payment_method"><code>invoice_settings.default_payment_method</code></a>,

        on the Customer to the PaymentMethod’s ID.</p>
      operationId: PostPaymentMethodsPaymentMethodAttach
      parameters:
        - in: path
          name: payment_method
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                customer:
                  description: The ID of the customer to which to attach the PaymentMethod.
                  maxLength: 5000
                  type: string
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
              required:
                - customer
              type: object
        required: true
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_method'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Attach Payment Method
      tags:
        - Attach
        - Payments
        - Methods
  '/v1/payment_methods/{payment_method}/detach':
    post:
      description: >-
        <p>Detaches a PaymentMethod object from a Customer. After a
        PaymentMethod is detached, it can no longer be used for a payment or
        re-attached to a Customer.</p>
      operationId: PostPaymentMethodsPaymentMethodDetach
      parameters:
        - in: path
          name: payment_method
          required: true
          schema:
            maxLength: 5000
            type: string
          style: simple
      requestBody:
        content:
          application/x-www-form-urlencoded:
            encoding:
              expand:
                explode: true
                style: deepObject
            schema:
              additionalProperties: false
              properties:
                expand:
                  description: Specifies which fields in the response should be expanded.
                  items:
                    maxLength: 5000
                    type: string
                  type: array
              type: object
        required: false
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/payment_method'
          description: Successful response.
        default:
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
          description: Error response.
      summary: Detach Payment Method
      tags:
        - Detach
        - Payments
        - Methods
components:
  schemas:
    error:
      description: An error response from the Stripe API
      properties:
        error:
          $ref: '#/components/schemas/api_errors'
      required:
        - error
      type: object
    payment_method_configuration:
      description: >-
        PaymentMethodConfigurations control which payment methods are displayed
        to your customers when you don't explicitly specify payment method
        types. You can have multiple configurations with different sets of
        payment methods for different scenarios.


        There are two types of PaymentMethodConfigurations. Which is used
        depends on the [charge type](https://stripe.com/docs/connect/charges):


        **Direct** configurations apply to payments created on your account,
        including Connect destination charges, Connect separate charges and
        transfers, and payments not involving Connect.


        **Child** configurations apply to payments created on your connected
        accounts using direct charges, and charges with the on_behalf_of
        parameter.


        Child configurations have a `parent` that sets default values and
        controls which settings connected accounts may override. You can specify
        a parent ID at payment time, and Stripe will automatically resolve the
        connected account’s associated child configuration. Parent
        configurations are [managed in the
        dashboard](https://dashboard.stripe.com/settings/payment_methods/connected_accounts)
        and are not available in this API.


        Related guides:

        - [Payment Method Configurations
        API](https://stripe.com/docs/connect/payment-method-configurations)

        - [Multiple configurations on dynamic payment
        methods](https://stripe.com/docs/payments/multiple-payment-method-configs)

        - [Multiple configurations for your Connect
        accounts](https://stripe.com/docs/connect/multiple-payment-method-configurations)
      properties:
        acss_debit:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        active:
          description: Whether the configuration can be used for new payments.
          type: boolean
        affirm:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        afterpay_clearpay:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        alipay:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        apple_pay:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        application:
          description: >-
            For child configs, the Connect application associated with the
            configuration.
          maxLength: 5000
          nullable: true
          type: string
        au_becs_debit:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        bacs_debit:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        bancontact:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        blik:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        boleto:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        card:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        cartes_bancaires:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        cashapp:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        eps:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        fpx:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        giropay:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        google_pay:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        grabpay:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        ideal:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        is_default:
          description: >-
            The default configuration is used whenever a payment method
            configuration is not specified.
          type: boolean
        jcb:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        klarna:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        konbini:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        link:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        name:
          description: The configuration's name.
          maxLength: 5000
          type: string
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - payment_method_configuration
          type: string
        oxxo:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        p24:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        parent:
          description: 'For child configs, the configuration''s parent configuration.'
          maxLength: 5000
          nullable: true
          type: string
        paynow:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        paypal:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        promptpay:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        revolut_pay:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        sepa_debit:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        sofort:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        us_bank_account:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
        wechat_pay:
          $ref: >-
            #/components/schemas/payment_method_config_resource_payment_method_properties
      required:
        - active
        - id
        - is_default
        - livemode
        - name
        - object
      title: PaymentMethodConfigResourcePaymentMethodConfiguration
      type: object
      x-expandableFields:
        - acss_debit
        - affirm
        - afterpay_clearpay
        - alipay
        - apple_pay
        - au_becs_debit
        - bacs_debit
        - bancontact
        - blik
        - boleto
        - card
        - cartes_bancaires
        - cashapp
        - eps
        - fpx
        - giropay
        - google_pay
        - grabpay
        - ideal
        - jcb
        - klarna
        - konbini
        - link
        - oxxo
        - p24
        - paynow
        - paypal
        - promptpay
        - revolut_pay
        - sepa_debit
        - sofort
        - us_bank_account
        - wechat_pay
      x-resourceId: payment_method_configuration
    payment_method_domain:
      description: >-
        A payment method domain represents a web domain that you have registered
        with Stripe.

        Stripe Elements use registered payment method domains to control where
        certain payment methods are shown.


        Related guides: [Payment method
        domains](https://stripe.com/docs/payments/payment-methods/pmd-registration).
      properties:
        apple_pay:
          $ref: >-
            #/components/schemas/payment_method_domain_resource_payment_method_status
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        domain_name:
          description: The domain name that this payment method domain object represents.
          maxLength: 5000
          type: string
        enabled:
          description: >-
            Whether this payment method domain is enabled. If the domain is not
            enabled, payment methods that require a payment method domain will
            not appear in Elements.
          type: boolean
        google_pay:
          $ref: >-
            #/components/schemas/payment_method_domain_resource_payment_method_status
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        link:
          $ref: >-
            #/components/schemas/payment_method_domain_resource_payment_method_status
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - payment_method_domain
          type: string
        paypal:
          $ref: >-
            #/components/schemas/payment_method_domain_resource_payment_method_status
      required:
        - apple_pay
        - created
        - domain_name
        - enabled
        - google_pay
        - id
        - link
        - livemode
        - object
        - paypal
      title: PaymentMethodDomainResourcePaymentMethodDomain
      type: object
      x-expandableFields:
        - apple_pay
        - google_pay
        - link
        - paypal
      x-resourceId: payment_method_domain
    payment_method:
      description: >-
        PaymentMethod objects represent your customer's payment instruments.

        You can use them with
        [PaymentIntents](https://stripe.com/docs/payments/payment-intents) to
        collect payments or save them to

        Customer objects to store instrument details for future payments.


        Related guides: [Payment
        Methods](https://stripe.com/docs/payments/payment-methods) and [More
        Payment
        Scenarios](https://stripe.com/docs/payments/more-payment-scenarios).
      properties:
        acss_debit:
          $ref: '#/components/schemas/payment_method_acss_debit'
        affirm:
          $ref: '#/components/schemas/payment_method_affirm'
        afterpay_clearpay:
          $ref: '#/components/schemas/payment_method_afterpay_clearpay'
        alipay:
          $ref: '#/components/schemas/payment_flows_private_payment_methods_alipay'
        au_becs_debit:
          $ref: '#/components/schemas/payment_method_au_becs_debit'
        bacs_debit:
          $ref: '#/components/schemas/payment_method_bacs_debit'
        bancontact:
          $ref: '#/components/schemas/payment_method_bancontact'
        billing_details:
          $ref: '#/components/schemas/billing_details'
        blik:
          $ref: '#/components/schemas/payment_method_blik'
        boleto:
          $ref: '#/components/schemas/payment_method_boleto'
        card:
          $ref: '#/components/schemas/payment_method_card'
        card_present:
          $ref: '#/components/schemas/payment_method_card_present'
        cashapp:
          $ref: '#/components/schemas/payment_method_cashapp'
        created:
          description: >-
            Time at which the object was created. Measured in seconds since the
            Unix epoch.
          format: unix-time
          type: integer
        customer:
          anyOf:
            - maxLength: 5000
              type: string
            - $ref: '#/components/schemas/customer'
          description: >-
            The ID of the Customer to which this PaymentMethod is saved. This
            will not be set when the PaymentMethod has not been saved to a
            Customer.
          nullable: true
          x-expansionResources:
            oneOf:
              - $ref: '#/components/schemas/customer'
        customer_balance:
          $ref: '#/components/schemas/payment_method_customer_balance'
        eps:
          $ref: '#/components/schemas/payment_method_eps'
        fpx:
          $ref: '#/components/schemas/payment_method_fpx'
        giropay:
          $ref: '#/components/schemas/payment_method_giropay'
        grabpay:
          $ref: '#/components/schemas/payment_method_grabpay'
        id:
          description: Unique identifier for the object.
          maxLength: 5000
          type: string
        ideal:
          $ref: '#/components/schemas/payment_method_ideal'
        interac_present:
          $ref: '#/components/schemas/payment_method_interac_present'
        klarna:
          $ref: '#/components/schemas/payment_method_klarna'
        konbini:
          $ref: '#/components/schemas/payment_method_konbini'
        link:
          $ref: '#/components/schemas/payment_method_link'
        livemode:
          description: >-
            Has the value `true` if the object exists in live mode or the value
            `false` if the object exists in test mode.
          type: boolean
        metadata:
          additionalProperties:
            maxLength: 500
            type: string
          description: >-
            Set of [key-value pairs](https://stripe.com/docs/api/metadata) that
            you can attach to an object. This can be useful for storing
            additional information about the object in a structured format.
          nullable: true
          type: object
        object:
          description: >-
            String representing the object's type. Objects of the same type
            share the same value.
          enum:
            - payment_method
          type: string
        oxxo:
          $ref: '#/components/schemas/payment_method_oxxo'
        p24:
          $ref: '#/components/schemas/payment_method_p24'
        paynow:
          $ref: '#/components/schemas/payment_method_paynow'
        paypal:
          $ref: '#/components/schemas/payment_method_paypal'
        pix:
          $ref: '#/components/schemas/payment_method_pix'
        promptpay:
          $ref: '#/components/schemas/payment_method_promptpay'
        radar_options:
          $ref: '#/components/schemas/radar_radar_options'
        revolut_pay:
          $ref: '#/components/schemas/payment_method_revolut_pay'
        sepa_debit:
          $ref: '#/components/schemas/payment_method_sepa_debit'
        sofort:
          $ref: '#/components/schemas/payment_method_sofort'
        type:
          description: >-
            The type of the PaymentMethod. An additional hash is included on the
            PaymentMethod with a name matching this value. It contains
            additional information specific to the PaymentMethod type.
          enum:
            - acss_debit
            - affirm
            - afterpay_clearpay
            - alipay
            - au_becs_debit
            - bacs_debit
            - bancontact
            - blik
            - boleto
            - card
            - card_present
            - cashapp
            - customer_balance
            - eps
            - fpx
            - giropay
            - grabpay
            - ideal
            - interac_present
            - klarna
            - konbini
            - link
            - oxxo
            - p24
            - paynow
            - paypal
            - pix
            - promptpay
            - revolut_pay
            - sepa_debit
            - sofort
            - us_bank_account
            - wechat_pay
            - zip
          type: string
          x-stripeBypassValidation: true
        us_bank_account:
          $ref: '#/components/schemas/payment_method_us_bank_account'
        wechat_pay:
          $ref: '#/components/schemas/payment_method_wechat_pay'
        zip:
          $ref: '#/components/schemas/payment_method_zip'
      required:
        - billing_details
        - created
        - id
        - livemode
        - object
        - type
      title: PaymentMethod
      type: object
      x-expandableFields:
        - acss_debit
        - affirm
        - afterpay_clearpay
        - alipay
        - au_becs_debit
        - bacs_debit
        - bancontact
        - billing_details
        - blik
        - boleto
        - card
        - card_present
        - cashapp
        - customer
        - customer_balance
        - eps
        - fpx
        - giropay
        - grabpay
        - ideal
        - interac_present
        - klarna
        - konbini
        - link
        - oxxo
        - p24
        - paynow
        - paypal
        - pix
        - promptpay
        - radar_options
        - revolut_pay
        - sepa_debit
        - sofort
        - us_bank_account
        - wechat_pay
        - zip
      x-resourceId: payment_method
  securitySchemes:
    basicAuth:
      description: >-
        Basic HTTP authentication. Allowed headers-- Authorization: Basic
        <api_key> | Authorization: Basic <base64 hash of `api_key:`>
      scheme: basic
      type: http
    bearerAuth:
      bearerFormat: auth-scheme
      description: >-
        Bearer HTTP authentication. Allowed headers-- Authorization: Bearer
        <api_key>
      scheme: bearer
      type: http
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
    description: Needs a description.
---