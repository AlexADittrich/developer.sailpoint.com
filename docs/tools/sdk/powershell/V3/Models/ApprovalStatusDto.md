---
id: approval-status-dto
title: ApprovalStatusDto
pagination_label: ApprovalStatusDto
sidebar_label: ApprovalStatusDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ApprovalStatusDto'] 
slug: /tools/sdk/powershell/v3/models/approval-status-dto
tags: ['SDK', 'Software Development Kit', 'ApprovalStatusDto']
---


# ApprovalStatusDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Forwarded** |  Pointer to **Boolean** | True if the request for this item was forwarded from one owner to another. | [optional] [default to $false]
**OriginalOwner** |  Pointer to [**ApprovalStatusDtoOriginalOwner**](approval-status-dto-original-owner) |  | [optional] 
**CurrentOwner** |  Pointer to [**ApprovalStatusDtoCurrentOwner**](approval-status-dto-current-owner) |  | [optional] 
**Modified** |  Pointer to **System.DateTime** | Time at which item was modified. | [optional] 
**Status** |  Pointer to [**ManualWorkItemState**](manual-work-item-state) |  | [optional] 
**Scheme** |  Pointer to [**ApprovalScheme**](approval-scheme) |  | [optional] 
**ErrorMessages** |  Pointer to [**[]ErrorMessageDto**](error-message-dto) | If the request failed, includes any error messages that were generated. | [optional] 
**Comment** |  Pointer to **String** | Comment, if any, provided by the approver. | [optional] 
**RemoveDate** |  Pointer to **System.DateTime** | The date the role or access profile is no longer assigned to the specified identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalStatusDto = Initialize-PSSailpointApprovalStatusDto  -Forwarded false `
 -OriginalOwner null `
 -CurrentOwner null `
 -Modified 2019-08-23T18:52:57.398Z `
 -Status null `
 -Scheme null `
 -ErrorMessages null `
 -Comment I approve this request `
 -RemoveDate 2020-07-11T00:00Z
```

- Convert the resource to JSON
```powershell
$ApprovalStatusDto | ConvertTo-JSON
```


[[Back to top]](#) 
