# FrontierFrame menu approval proof

A single café and one sample menu item. The validator checks whole-cent prices and valid opening hours. An approval is tied to the exact draft; the release step also checks that nobody published another change in the meantime.

The sample tests run locally. The browser demo simulates a price update using sample data and does not deploy a real café site.

**Try it:** [Menu approval demo](https://frontierframe-website-demo.lawrence-anyang-wang.chatgpt.site/proof/)

## Run the tests

Use Node.js 22 or newer. The checked-in validator was generated with Ajv from the JSON schema.

    npm test

The cases cover a valid release, invalid prices and hours, stale approval, edits after approval, competing updates, and replayed releases.
