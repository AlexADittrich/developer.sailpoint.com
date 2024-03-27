---
id: approval-items
title: ApprovalItems
pagination_label: ApprovalItems
sidebar_label: ApprovalItems
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ApprovalItems'] 
slug: /tools/sdk/powershell/v3/models/approval-items
tags: ['SDK', 'Software Development Kit', 'ApprovalItems']
---


# ApprovalItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The approval item&#39;s ID | [optional] 
**Account** |  Pointer to **String** | The account referenced by the approval item | [optional] 
**Application** |  Pointer to **String** | The name of the application/source | [optional] 
**Name** |  Pointer to **String** | The attribute&#39;s name | [optional] 
**Operation** |  Pointer to **String** | The attribute&#39;s operation | [optional] 
**Value** |  Pointer to **String** | The attribute&#39;s value | [optional] 
**State** |  Pointer to [**WorkItemState**](work-item-state) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalItems = Initialize-PSSailpointApprovalItems  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Account john.smith `
 -Application Active Directory `
 -Name emailAddress `
 -Operation update `
 -Value a@b.com `
 -State null
```

- Convert the resource to JSON
```powershell
$ApprovalItems | ConvertTo-JSON
```


[[Back to top]](#) 
