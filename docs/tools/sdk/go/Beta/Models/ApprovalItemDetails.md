---
id: approval-item-details
title: ApprovalItemDetails
pagination_label: ApprovalItemDetails
sidebar_label: ApprovalItemDetails
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ApprovalItemDetails'] 
slug: /tools/sdk/go/beta/models/approval-item-details
tags: ['SDK', 'Software Development Kit', 'ApprovalItemDetails']
---

# ApprovalItemDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | The approval item&#39;s ID | [optional] 
**Account** |  Pointer to **string** | The account referenced by the approval item | [optional] 
**Application** |  Pointer to **string** | The name of the application/source | [optional] 
**Name** |  Pointer to **string** | The attribute&#39;s name | [optional] 
**Operation** |  Pointer to **string** | The attribute&#39;s operation | [optional] 
**Value** |  Pointer to **string** | The attribute&#39;s value | [optional] 
**State** |  Pointer to [**WorkItemState**](work-item-state) |  | [optional] 

## Methods

### NewApprovalItemDetails

`func NewApprovalItemDetails() *ApprovalItemDetails`

NewApprovalItemDetails instantiates a new ApprovalItemDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalItemDetailsWithDefaults

`func NewApprovalItemDetailsWithDefaults() *ApprovalItemDetails`

NewApprovalItemDetailsWithDefaults instantiates a new ApprovalItemDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ApprovalItemDetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApprovalItemDetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApprovalItemDetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApprovalItemDetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccount

`func (o *ApprovalItemDetails) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *ApprovalItemDetails) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *ApprovalItemDetails) SetAccount(v string)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *ApprovalItemDetails) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetApplication

`func (o *ApprovalItemDetails) GetApplication() string`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *ApprovalItemDetails) GetApplicationOk() (*string, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *ApprovalItemDetails) SetApplication(v string)`

SetApplication sets Application field to given value.

### HasApplication

`func (o *ApprovalItemDetails) HasApplication() bool`

HasApplication returns a boolean if a field has been set.

### GetName

`func (o *ApprovalItemDetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApprovalItemDetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApprovalItemDetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApprovalItemDetails) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOperation

`func (o *ApprovalItemDetails) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *ApprovalItemDetails) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *ApprovalItemDetails) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *ApprovalItemDetails) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetValue

`func (o *ApprovalItemDetails) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ApprovalItemDetails) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ApprovalItemDetails) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *ApprovalItemDetails) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetState

`func (o *ApprovalItemDetails) GetState() WorkItemState`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ApprovalItemDetails) GetStateOk() (*WorkItemState, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ApprovalItemDetails) SetState(v WorkItemState)`

SetState sets State field to given value.

### HasState

`func (o *ApprovalItemDetails) HasState() bool`

HasState returns a boolean if a field has been set.


[[Back to top]](#) 

