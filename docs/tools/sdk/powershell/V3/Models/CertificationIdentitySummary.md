---
id: certification-identity-summary
title: CertificationIdentitySummary
pagination_label: CertificationIdentitySummary
sidebar_label: CertificationIdentitySummary
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CertificationIdentitySummary'] 
slug: /tools/sdk/powershell/v3/models/certification-identity-summary
tags: ['SDK', 'Software Development Kit', 'CertificationIdentitySummary']
---


# CertificationIdentitySummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The ID of the identity summary | [optional] 
**Name** |  Pointer to **String** | Name of the linked identity | [optional] 
**IdentityId** |  Pointer to **String** | The ID of the identity being certified | [optional] 
**Completed** |  Pointer to **Boolean** | Indicates whether the review items for the linked identity&#39;s certification have been completed | [optional] 

## Examples

- Prepare the resource
```powershell
$CertificationIdentitySummary = Initialize-PSSailpointCertificationIdentitySummary  -Id 2c91808772a504f50172a9540e501ba7 `
 -Name Alison Ferguso `
 -IdentityId 2c9180857182306001719937377a33de `
 -Completed true
```

- Convert the resource to JSON
```powershell
$CertificationIdentitySummary | ConvertTo-JSON
```


[[Back to top]](#) 
