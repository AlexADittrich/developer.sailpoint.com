---
id: campaign
title: Campaign
pagination_label: Campaign
sidebar_label: Campaign
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Campaign'] 
slug: /tools/sdk/powershell/v3/models/campaign
tags: ['SDK', 'Software Development Kit', 'Campaign']
---


# Campaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Id of the campaign | [optional] [readonly] 
**Name** |  **String** | The campaign name. If this object is part of a template, special formatting applies; see the &#x60;/campaign-templates/{id}/generate&#x60; endpoint documentation for details. | 
**Description** |  **String** | The campaign description. If this object is part of a template, special formatting applies; see the &#x60;/campaign-templates/{id}/generate&#x60; endpoint documentation for details. | 
**Deadline** |  Pointer to **System.DateTime** | The campaign&#39;s completion deadline.  This date must be in the future in order to activate the campaign.  If you try to activate a campaign with a deadline of today or in the past, you will receive a 400 error response. | [optional] 
**Type** |   **Enum** [  "MANAGER",    "SOURCE_OWNER",    "SEARCH",    "ROLE_COMPOSITION" ] | The type of campaign. Could be extended in the future. | 
**EmailNotificationEnabled** |  Pointer to **Boolean** | Enables email notification for this campaign | [optional] [default to $false]
**AutoRevokeAllowed** |  Pointer to **Boolean** | Allows auto revoke for this campaign | [optional] [default to $false]
**RecommendationsEnabled** |  Pointer to **Boolean** | Enables IAI for this campaign. Accepts true even if the IAI product feature is off. If IAI is turned off then campaigns generated from this template will indicate false. The real value will then be returned if IAI is ever enabled for the org in the future. | [optional] [default to $false]
**Status** |  Pointer to  **Enum** [  "PENDING",    "STAGED",    "CANCELING",    "ACTIVATING",    "ACTIVE",    "COMPLETING",    "COMPLETED",    "ERROR",    "ARCHIVED" ] | The campaign&#39;s current status. | [optional] [readonly] 
**CorrelatedStatus** |  Pointer to  **Enum** [  "CORRELATED",    "UNCORRELATED" ] | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [optional] 
**Created** |  Pointer to **System.DateTime** | Created time of the campaign | [optional] [readonly] 
**TotalCertifications** |  Pointer to **Int32** | The total number of certifications in this campaign. | [optional] [readonly] 
**CompletedCertifications** |  Pointer to **Int32** | The number of completed certifications in this campaign. | [optional] [readonly] 
**Alerts** |  Pointer to [**[]CampaignAlert**](campaign-alert) | A list of errors and warnings that have accumulated. | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | Modified time of the campaign | [optional] [readonly] 
**VarFilter** |  Pointer to [**CampaignAllOfFilter**](campaign-all-of-filter) |  | [optional] 
**SunsetCommentsRequired** |  Pointer to **Boolean** | Determines if comments on sunset date changes are required. | [optional] [default to $true]
**SourceOwnerCampaignInfo** |  Pointer to [**CampaignAllOfSourceOwnerCampaignInfo**](campaign-all-of-source-owner-campaign-info) |  | [optional] 
**SearchCampaignInfo** |  Pointer to [**CampaignAllOfSearchCampaignInfo**](campaign-all-of-search-campaign-info) |  | [optional] 
**RoleCompositionCampaignInfo** |  Pointer to [**CampaignAllOfRoleCompositionCampaignInfo**](campaign-all-of-role-composition-campaign-info) |  | [optional] 
**SourcesWithOrphanEntitlements** |  Pointer to [**[]CampaignAllOfSourcesWithOrphanEntitlements**](campaign-all-of-sources-with-orphan-entitlements) | A list of sources in the campaign that contain \&quot;&quot;orphan entitlements\&quot;&quot; (entitlements without a corresponding Managed Attribute). An empty list indicates the campaign has no orphan entitlements. Null indicates there may be unknown orphan entitlements in the campaign (the campaign was created before this feature was implemented). | [optional] [readonly] 
**MandatoryCommentRequirement** |  Pointer to  **Enum** [  "ALL_DECISIONS",    "REVOKE_ONLY_DECISIONS",    "NO_DECISIONS" ] | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | [optional] 

## Examples

- Prepare the resource
```powershell
$Campaign = Initialize-PSSailpointCampaign  -Id 2c9079b270a266a60170a2779fcb0007 `
 -Name Manager Campaign `
 -Description Everyone needs to be reviewed by their manager `
 -Deadline 2020-03-15T10:00:01.456Z `
 -Type MANAGER `
 -EmailNotificationEnabled false `
 -AutoRevokeAllowed false `
 -RecommendationsEnabled true `
 -Status ACTIVE `
 -CorrelatedStatus CORRELATED `
 -Created 2020-03-03T22:15:13.611Z `
 -TotalCertifications 100 `
 -CompletedCertifications 10 `
 -Alerts null `
 -Modified 2020-03-03T22:20:12.674Z `
 -VarFilter null `
 -SunsetCommentsRequired true `
 -SourceOwnerCampaignInfo null `
 -SearchCampaignInfo null `
 -RoleCompositionCampaignInfo null `
 -SourcesWithOrphanEntitlements null `
 -MandatoryCommentRequirement NO_DECISIONS
```

- Convert the resource to JSON
```powershell
$Campaign | ConvertTo-JSON
```


[[Back to top]](#) 
