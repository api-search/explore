---
name: OpenAI
description: >-
  OpenAI is an AI research and deployment company. Our mission is to ensure that
  artificial general intelligence benefits all of humanity. Our mission is to
  ensure that artificial general intelligence—AI systems that are generally
  smarter than humans—benefits all of humanity. We are building safe and
  beneficial AGI, but will also consider our mission fulfilled if our work aids
  others to achieve this outcome.
image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
url: https://raw.githubusercontent.com/apis-json/artisanal/main/apis/openai.yml
created: 2023/11/9
modified: 2023/11/9
specificationVersion: '0.16'
tags:
  - APIs
  - Artificial Intelligence
apis:
  - name: OpenAI Assistants API
    description: >-
      The Assistants API allows you to build AI assistants within your own
      applications. An Assistant has instructions and can leverage models,
      tools, and knowledge to respond to user queries. The Assistants API
      currently supports three types of tools - Code Interpreter, Retrieval, and
      Function calling. In the future, we plan to release more OpenAI-built
      tools, and allow you to provide your own tools on our platform.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/assistants/overview
    baseURL: https://platform.openai.com/
    tags:
      - Assistants
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: >-
          https://github.com/apis-json/artisanal/tree/main/apis/openai/properties/assistants-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/assistants-openapi-search.yml
  - name: OpenAI Audio API
    description: >-
      The Audio API provides two speech to text endpoints, transcriptions and
      translations, based on our state-of-the-art open source large-v2 Whisper
      model.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/guides/speech-to-text
    baseURL: https://platform.openai.com/
    tags:
      - Audio
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: >-
          https://github.com/apis-json/artisanal/tree/main/apis/openai/properties/audio-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/audio-openapi-search.yml
  - name: OpenAI Chat API
    description: >-
      Given a list of messages comprising a conversation, the model will return
      a response., providing an AI chat interface you can use to engage with
      users.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/api-reference/chat
    baseURL: https://platform.openai.com/
    tags:
      - Chat
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: >-
          https://github.com/apis-json/artisanal/tree/main/apis/openai/properties/chat-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/chat-openapi-search.yml
  - name: OpenAI Chat Completions API
    description: >-
      Chat models take a list of messages as input and return a model-generated
      message as output. Although the chat format is designed to make multi-turn
      conversations easy, it’s just as useful for single-turn tasks without any
      conversation.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: >-
      https://platform.openai.com/docs/guides/text-generation/chat-completions-api
    baseURL: https://platform.openai.com/
    tags:
      - Completions
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: >-
          https://github.com/apis-json/artisanal/tree/main/apis/openai/properties/completions-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/completions-openapi-search.yml
  - name: OpenAI Embeddings API
    description: >-
      Learn how to turn text into numbers, unlocking use cases like search.
      OpenAI’s text embeddings measure the relatedness of text strings.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/guides/embeddings
    baseURL: https://platform.openai.com/
    tags:
      - Embed
      - Embeddings
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: >-
          https://github.com/apis-json/artisanal/tree/main/apis/openai/properties/embeddings-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/embeddings-openapi-search.yml
  - name: OpenAI Files API
    description: >-
      Files are used to upload documents that can be used with features like
      Assistants and Fine-tuning. Upload a file that can be used across various
      endpoints. The size of all the files uploaded by one organization can be
      up to 100 GB.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/api-reference/files
    baseURL: https://platform.openai.com/
    tags:
      - Files
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: >-
          https://github.com/apis-json/artisanal/tree/main/apis/openai/properties/files-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/files-openapi-search.yml
  - name: OpenAI Fine Tuning API
    description: >-
      Manage fine-tuning jobs to tailor a model to your specific training data.
      Creates a fine-tuning job which begins the process of creating a new model
      from a given dataset.Response includes details of the enqueued job
      including job status and the name of the fine-tuned models once complete.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/api-reference/fine-tuning
    baseURL: https://platform.openai.com/
    tags:
      - Fine Tuning
      - Models
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: >-
          https://github.com/apis-json/artisanal/tree/main/apis/openai/properties/fint-tuning-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/fint-tuning-openapi-search.yml
  - name: OpenAI Images API
    description: >-
      Learn how to generate or manipulate images with DALL·E in the API. The
      Images API provides three methods for interacting with images - creating
      images from scratch based on a text prompt, creating edited versions of
      images by having the model replace some areas of a pre-existing image,
      based on a new text prompt, Creating variations of an existing image.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/guides/images/image-generation
    baseURL: https://platform.openai.com/
    tags:
      - Images
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: >-
          https://github.com/apis-json/artisanal/tree/main/apis/openai/properties/images-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/images-openapi-search.yml
  - name: OpenAI Models API
    description: >-
      List and describe the various models available in the API. You can refer
      to the Models documentation to understand what models are available and
      the differences between them.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/api-reference/models
    baseURL: https://platform.openai.com/
    tags:
      - Models
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: >-
          https://github.com/apis-json/artisanal/tree/main/apis/openai/properties/models-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/models-openapi-search.yml
  - name: OpenAI Threads API
    description: Create threads that assistants can interact with.
    image: https://kinlane-productions2.s3.amazonaws.com/apis-json/apis-json-logo.jpg
    humanURL: https://platform.openai.com/docs/api-reference/threads
    baseURL: https://platform.openai.com/
    tags:
      - Threads
      - Artificial Intelligence
    properties:
      - type: OpenAPI
        url: https://platform.openai.com/docs/api-reference
      - type: OpenAPI
        url: >-
          https://github.com/apis-json/artisanal/tree/main/apis/openai/properties/threads-openapi-original.yml
    overlays:
      - type: APIs.io Search
        url: >-
          overlays/https://github.com/apis-json/artisanal/tree/main/apis/openai/threads-openapi-search.yml
common:
  - type: Getting Started
    url: https://platform.openai.com/docs/quickstart
  - type: Cookbook
    url: https://cookbook.openai.com
  - type: Rate Limits
    url: https://platform.openai.com/docs/guides/rate-limits
  - type: Libraries
    url: https://platform.openai.com/docs/libraries
  - type: Deprecations
    url: https://platform.openai.com/docs/deprecations
  - type: Errors
    url: https://platform.openai.com/docs/guides/error-codes
  - type: Plugins
    url: https://platform.openai.com/docs/plugins/introduction
  - type: Forum
    url: https://community.openai.com
  - type: Examples
    url: https://platform.openai.com/examples
  - type: Status
    url: https://status.openai.com
  - type: API Keys
    url: https://platform.openai.com/api-keys
  - type: Support
    url: https://help.openai.com/en/
  - type: Tutorials
    url: https://platform.openai.com/docs/tutorials
  - type: Change Log
    url: https://platform.openai.com/docs/changelog
  - type: Plugins
    url: https://platform.openai.com/docs/plugins/introduction
  - type: Playground
    url: https://platform.openai.com/playground
  - type: Keys
    url: https://platform.openai.com/api-keys
  - type: Usage
    url: https://platform.openai.com/usage
maintainers:
  - FN: API Evangelist
    url: http://apievangelist.com
    email: info@apievangelist.com
overlays:
  - type: APIs.io Search
    url: overlays/apis-io-search.yml
---