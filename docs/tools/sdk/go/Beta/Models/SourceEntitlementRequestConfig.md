---
id: source-entitlement-request-config
title: SourceEntitlementRequestConfig
pagination_label: SourceEntitlementRequestConfig
sidebar_label: SourceEntitlementRequestConfig
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SourceEntitlementRequestConfig'] 
slug: /tools/sdk/go/beta/models/source-entitlement-request-config
tags: ['SDK', 'Software Development Kit', 'SourceEntitlementRequestConfig']
---

# SourceEntitlementRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** |  Pointer to [**EntitlementAccessRequestConfig**](entitlement-access-request-config) |  | [optional] 

## Methods

### NewSourceEntitlementRequestConfig

`func NewSourceEntitlementRequestConfig() *SourceEntitlementRequestConfig`

NewSourceEntitlementRequestConfig instantiates a new SourceEntitlementRequestConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceEntitlementRequestConfigWithDefaults

`func NewSourceEntitlementRequestConfigWithDefaults() *SourceEntitlementRequestConfig`

NewSourceEntitlementRequestConfigWithDefaults instantiates a new SourceEntitlementRequestConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestConfig

`func (o *SourceEntitlementRequestConfig) GetAccessRequestConfig() EntitlementAccessRequestConfig`

GetAccessRequestConfig returns the AccessRequestConfig field if non-nil, zero value otherwise.

### GetAccessRequestConfigOk

`func (o *SourceEntitlementRequestConfig) GetAccessRequestConfigOk() (*EntitlementAccessRequestConfig, bool)`

GetAccessRequestConfigOk returns a tuple with the AccessRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestConfig

`func (o *SourceEntitlementRequestConfig) SetAccessRequestConfig(v EntitlementAccessRequestConfig)`

SetAccessRequestConfig sets AccessRequestConfig field to given value.

### HasAccessRequestConfig

`func (o *SourceEntitlementRequestConfig) HasAccessRequestConfig() bool`

HasAccessRequestConfig returns a boolean if a field has been set.


[[Back to top]](#) 

