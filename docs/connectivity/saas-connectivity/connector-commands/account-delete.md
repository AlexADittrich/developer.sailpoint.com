---
id: account-delete
title: Account Delete
pagination_label: Account Delete
sidebar_label: Account Delete
keywords: ['connectivity', 'connectors', 'account delete']
description: Remove account from a source.
slug: /connectivity/saas-connectivity/commands/account-delete
tags: ['Connectivity', 'Connector Command']
---

| Input/Output |       Data Type        |
| :----------- | :--------------------: |
| Input        | StdAccountDeleteInput  |
| Output       | StdAccountDeleteOutput |

### Example StdAccountDeleteInput

```javascript
{
    "identity": "john.doe",
    "key": {
        "simple": {
            "id": "john.doe"
        }
    }
}
```

### Example StdAccountDeleteOutput

```javascript
{
}
```

## Description

The account delete command sends one attribute from ISC, the identity to delete. This can be passed to your connector to delete the account from the source system.

Enable account delete in ISC through a BeforeProvisioning rule. The connector honors whichever operation the provisioning plan sends. For more information, see the [documentation](https://community.sailpoint.com/t5/Identity Security Cloud-Articles/Identity Security Cloud-Rule-Guide/ta-p/76665) and an [example implementation](https://community.sailpoint.com/t5/Identity Security Cloud-Wiki/Identity Security Cloud-Rule-Guide-Before-Provisioning-Rule/ta-p/77415).

The following snippet shows an example of account delete command implementation:

[index.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts)

```javascript
.stdAccountDelete(async (context: Context, input: StdAccountDeleteInput, res: Response<StdAccountDeleteOutput>) => {
    const account = await airtable.getAccount(input.key)
    res.send(await airtable.deleteAccount(account.airtableId))
})
```

[airtable.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts)

```javascript
async deleteAccount(airTableid: string): Promise<Record<string, never>> {
    return this.airTableBase('Users').destroy(airTableid,
    ).then(() => {
        return {}
    }).catch(err => {
        throw new ConnectorError('error while deleting account: ' + err)
    })
}
```
