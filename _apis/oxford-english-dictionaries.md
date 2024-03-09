---
name: Oxford English Dictionaries
description: >-
  Here at Oxford Dictionaries, home of the OED, we love words. That’s why we
  have experienced lexicographers tracking the living language, delving deep
  into our corpora and monitoring a wide range of media in order to understand
  how words are being used and how language is evolving. This research is used
  by our editors to write and edit dictionary entries and translations, meaning
  we’re able to offer up-to-date, accurate, and reliable lexical content in
  multiple languages.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: >-
  https://raw.githubusercontent.com/apis-json/artisanal/main/apis/oxford-english-dictionaries.yml
created: 2023/11/15
modified: 2023/11/15
specificationVersion: '0.16'
tags:
  - Dictionaries
  - Words
apis:
  - name: Oxford Dictionaries API
    description: >-
      If you’re looking to enhance your app or website with dictionary data,
      don’t compromise on quality. The Oxford Dictionaries API offers easy and
      intuitive access to Oxford's dictionary content, which is trusted around
      the world.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.oxforddictionaries.com/
    baseURL: https://api.example.com
    tags:
      - Dictionaries
      - Words
    properties:
      - type: OpenAPI
        url: https://developer.oxforddictionaries.com/documentation
      - type: OpenAPI
        url: >-
          https://developer.oxforddictionaries.com/swagger/spec/od_api_demo_v2.json
    contact:
      - FN: Contact Page
        url: https://developer.oxforddictionaries.com/contact-us
        email: ''
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://developer.oxforddictionaries.com/swagger/spec/od_api_demo_v2.json-openapi-search.yml
common:
  - type: Updates
    url: https://developer.oxforddictionaries.com/updates
  - type: Blog
    url: https://api-blog.oxforddictionaries.com/
  - type: Status Codes
    url: https://developer.oxforddictionaries.com/documentation/response-codes
  - type: Branding
    url: https://languages.oup.com/oxford-languages-branding-resources/
  - type: FAQ
    url: https://developer.oxforddictionaries.com/faq
  - type: Glossary
    url: https://developer.oxforddictionaries.com/documentation/glossary
  - type: Sign In
    url: https://developer.oxforddictionaries.com/sign-in
  - type: Privacy Policy
    url: https://global.oup.com/privacy
  - type: FAQ
    url: https://developer.oxforddictionaries.com/faq
  - type: Terms of Service
    url: https://developer.oxforddictionaries.com/api-terms-and-conditions
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---