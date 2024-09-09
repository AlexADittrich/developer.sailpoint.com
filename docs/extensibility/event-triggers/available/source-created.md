---
id: source-created
title: Source Created
pagination_label: Source Created
sidebar_label: Source Created
sidebar_class_name: sourceCreated
keywords: ['event', 'trigger', 'source', 'created', 'available']
description: Fires after a source is created.
slug: /extensibility/event-triggers/triggers/source-created
tags: ['Event Triggers', 'Available Event Triggers', 'Fire and Forget']
---

## Event Context

Source Created events occur when a new source is successfully created via the API or the Admin UI. Some uses cases for this trigger include the following:

- Provide evidence to show auditors connector logic and sources are not manipulated outside of proper change control processes.
- Auto-configure new sources with proper owners using external data sources.

This is an example input from this trigger:

```json
{
  "id": "2c9180866166b5b0016167c32ef31a66",
  "name": "Test source",
  "type": "DIRECT_CONNECT",
  "created": "2021-03-29T22:01:50.474Z",
  "connector": "active-directory",
  "actor": {
    "type": "IDENTITY",
    "id": "2c91808568c529c60168cca6f90c1313",
    "name": "William Wilson"
  }
}
```

## Additional Information and Links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
<!-- [Input schema](https://platform.sailpoint.com/apis/beta/#section/Source-Created-Event-Trigger-Input) -->
