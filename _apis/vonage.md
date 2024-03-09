---
name: Vonage
description: >-
  We’re making communications more flexible, intelligent, and personal, to help
  enterprises the world over stay ahead. We provide unified communications,
  contact centers and programmable communications APIs, built on the world's
  most flexible cloud communications platform.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/vonage.yml
created: 2023/11/14
modified: 2023/11/14
specificationVersion: '0.16'
tags:
  - Communications
apis:
  - name: Vonage SMS API
    description: >-
      With the SMS API you can send SMS from your account and lookup messages
      both messages that you've sent as well as messages sent to your virtual
      numbers. Numbers are specified in E.164 format. 
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.vonage.com/en/api/sms
    baseURL: https://api.example.com
    tags:
      - SMS
    properties:
      - type: OpenAPI
        url: https://developer.vonage.com/en/api/sms
      - type: OpenAPI
        url: https://developer.vonage.com/api/v1/developer/api/file/sms?format=yml
      - type: OpenAPI
        url: https://developer.vonage.com/api/v1/developer/api/file/sms?format=yml
      - type: OpenAPI
        url: https://developer.vonage.com/en/api/sms#errors
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://developer.vonage.com/api/v1/developer/api/file/sms?format=yml-openapi-search.yml
  - name: Vonage Message API
    description: >-
      The Messages API consolidates and normalises exchanges across all
      messaging channels. It allows you to use a single API to interact with our
      various channels such as SMS, MMS, WhatsApp, Viber and Facebook
      Messenger. 
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.vonage.com/en/api/messages-olympus
    baseURL: https://api.example.com
    tags:
      - Messages
      - WhatsApp
      - Facebook Messenger
    properties:
      - type: OpenAPI
        url: https://developer.vonage.com/en/api/messages-olympus
      - type: OpenAPI
        url: >-
          https://developer.vonage.com/api/v1/developer/api/file/messages-olympus?format=yml
      - type: OpenAPI
        url: https://developer.vonage.com/en/api/messages-olympus#websockets
      - type: OpenAPI
        url: https://developer.vonage.com/en/api/messages-olympus#errors
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://developer.vonage.com/api/v1/developer/api/file/messages-olympus?format=yml-openapi-search.yml
  - name: Vonage Meetings API
    description: >-
      The Vonage Meetings API allows you to integrate real-time, high-quality
      interactive video meetings into your web apps.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://developer.vonage.com/en/meetings/overview
    baseURL: https://api.example.com
    tags:
      - Meetings
      - Videos
    properties:
      - type: OpenAPI
        url: https://developer.vonage.com/en/api/meetings
      - type: OpenAPI
        url: >-
          https://developer.vonage.com/api/v1/developer/api/file/meetings?format=yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://developer.vonage.com/api/v1/developer/api/file/meetings?format=yml-openapi-search.yml
common:
  - type: Portal
    url: https://developer.vonage.com/
  - type: Documentation
    url: https://developer.vonage.com/en/documentation
  - type: SDKs
    url: https://developer.vonage.com/en/tools
  - type: Integrations
    url: https://developer.vonage.com/en/integration
  - type: Change Log
    url: https://developer.vonage.com/en/changelogs
  - type: Use Cases
    url: https://developer.vonage.com/en/use-cases
  - type: Blog
    url: https://developer.vonage.com/en/blog
  - type: Sign Up
    url: https://ui.idp.vonage.com/ui/auth/registration
  - type: Issues
    url: https://api.support.vonage.com/hc/en-us/sections/115004147507
  - type: Knowledge
    url: https://api.support.vonage.com/hc/en-us
  - type: Status
    url: https://vonageapi.statuspage.io/
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---