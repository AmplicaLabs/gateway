<!-- This document is generated from endpoints.json. Do not edit this file directly. -->

# DSNP Gateway Account Services Prototype API Documentation

## Overview

The DSNP Gateway Account Services Prototype API is designed for managing DSNP identities, accounts, profiles, and delegations.

- **Base URL**: <http://localhost:5005>
- **Version**: `1.0.0`

## Endpoints

### 1. Create User Account

- **Endpoint**: `/accounts/user`
- **Method**: `POST`
- **Summary**: Create a new User Account with handles and delegations.

#### Request Body

- **Schema**: [CreateUserAccountRequest](#createuseraccountrequest)

#### Response

- **Status Code**: `200 OK`
- **Schema**: [CreateAccountsResponse](#createAccountsResponse)

### 2. Create Provider Account

- **Endpoint**: `/accounts/provider`
- **Method**: `POST`
- **Summary**: Create a new Provider Account with delegations.

#### Request Body

- **Schema**: [CreateProviderAccountRequest](#createprovideraccountrequest)

#### Response

- **Status Code**: `200 OK`
- **Schema**: [CreateAccountsResponse](#createAccountsResponse)

### 3. Get Accounts

- **Endpoint**: `/accounts`
- **Method**: `GET`
- **Summary**: Get all accounts
- **Security**: Token-based authentication

#### Responses

- **Status Code**: `401 Unauthorized`
- **Schema**: UnauthorizedError

- **Status Code**: `202 Accepted`
- **Description**: Account still pending creation

- **Status Code**: `200 OK`
- **Schema**: [AccountsResponse](#AccountsResponse)

### 4. Get Account

- **Endpoint**: `/accounts/{msaId}`
- **Method**: `GET`
- **Summary**: Get account for current msaId.
- **Security**: Token-based authentication

#### Parameters

| Name  | In   | Description                | Required | Type   |
| ----- | ---- | -------------------------- | -------- | ------ |
| msaId | path | MSA ID of the current user | Yes      | string |

#### Responses

- **Status Code**: `401 Unauthorized`
- **Schema**: UnauthorizedError

- **Status Code**: `202 Accepted`
- **Description**: Account still pending creation

- **Status Code**: `200 OK`
- **Schema**: [AccountResponse](#AccountResponse)

### 5. Create Handle

- **Endpoint**: `/handles`
- **Method**: `POST`
- **Summary**: Create a handle.

#### Request Body

- **Schema**: [HandlesRequest](#handlesrequest)

#### Response

- **Status Code**: `200 OK`
- **Description**: Successful response of account.
- **Schema**: [HandlesResponse](#handlesresponse)

### 6. Change Handle

- **Endpoint**: `/handles/change`
- **Method**: `POST`
- **Summary**: Remove a handle then add the new one.

#### Request Body

- **Schema**: [HandlesRequest](#handlesrequest)

### 7. Remove Handle

- **Endpoint**: `/handles/remove`
- **Method**: `POST`
- **Summary**: Remove a handle.

#### Request Body

- **Schema**: [HandlesRequest](#handlesrequest)

#### Response

- **Status Code**: `200 OK`
- **Description**: Successful response of account.
- **Schema**: [HandlesResponse](#handlesresponse)

### 8. Get Handles

- **Endpoint**: `/handles`
- **Method**: `GET`
- **Summary**: Get the handle associated with an MSA ID.
- **Security**: Token-based authentication

#### Responses

- **Status Code**: `401 Unauthorized`
- **Schema**: UnauthorizedError

- **Status Code**: `200 OK`
- **Schema**: [HandlesResponse](#handlesresponse)

### 9. Create Delegation

- **Endpoint**: `/delegation`
- **Method**: `POST`
- **Summary**: Delegate to the provider with an existing DSNP Identity

#### Request Body

- **Schema**: [CreateDelegationRequest](#createdelegationrequest)

#### Response

- **Status Code**: `401 Unauthorized`
- **Schema**: UnauthorizedError

- **Status Code**: `200 OK`
- **Schema**: [CreateDelegationResponse](#createdelegationresponse)

### 10. Get Delegation

- **Endpoint**: `/delegation`
- **Method**: `GET`
- **Summary**: Return the delegation and provider information

#### Responses

- **Status Code**: `200 OK`
- **Schema**: [DelegationResponse](#delegationresponse)

### 11. Create Keys

- **Endpoint**: `/keys/:msaId`
- **Method**: `POST`
- **Summary**: Create new control keys for an MSA ID.

#### Parameters

| Name   | In   | Description                 | Required | Type   |
| ------ | ---- | --------------------------- | -------- | ------ |
| msaId | path | DSNP ID of the current user | Yes      | string |

#### Responses

- **Status Code**: `401 Unauthorized`
- **Schema**: UnauthorizedError

- **Status Code**: `200 OK`
- **Schema**: [KeysResponse](#keysresponse)

### 12. Get Keys

- **Endpoint**: `/keys/:msaId`
- **Method**: `GET`
- **Summary**: Get all control keys associated with an MSA ID.

#### Parameters

| Name   | In   | Description                 | Required | Type   |
| ------ | ---- | --------------------------- | -------- | ------ |
| msaId | path | DSNP ID of the current user | Yes      | string |

#### Responses

- **Status Code**: `401 Unauthorized`
- **Schema**: UnauthorizedError

- **Status Code**: `200 OK`
- **Schema**: [KeysResponse](#keysresponse)

### 13. Get Profiles

- **Endpoint**: `/profiles`
- **Method**: `GET`
- **Summary**: Get all profiles
- **Security**: Token-based authentication

#### Responses

- **Status Code**: `401 Unauthorized`
- **Schema**: UnauthorizedError

- **Status Code**: `200 OK`
- **Schema**: [ProfilesResponse](#profilesresponse)

### 14. Create Profile

- **Endpoint**: `/profiles/:msaId`
- **Method**: `POST`
- **Summary**: Creates a new profile from a DSNP Identity

#### Parameters

| Name   | In   | Description                 | Required | Type   |
| ------ | ---- | --------------------------- | -------- | ------ |
| msaId | path | DSNP ID of the current user | Yes      | string |

#### Request Body

- **Schema**: [CreateProfileRequest](#createprofilerequest)

#### Response

- **Status Code**: `401 Unauthorized`
- **Schema**: UnauthorizedError

- **Status Code**: `200 OK`
- **Schema**: [ProfilesResponse](#profilesresponse)

### 15. Get Profile

- **Endpoint**: `/profiles/:msaId`
- **Method**: `GET`
- **Summary**: Get profile information for a specific user
- **Security**: Token-based authentication

#### Parameters

| Name   | In   | Description                 | Required | Type   |
| ------ | ---- | --------------------------- | -------- | ------ |
| msaId | path | DSNP ID of the current user | Yes      | string |

#### Responses

- **Status Code**: `401 Unauthorized`
- **Schema**: UnauthorizedError

- **Status Code**: `200 OK`
- **Schema**: [ProfilesResponse](#profilesresponse)

### 16. Create/Edit Profile

- **Endpoint**: `/profiles/:msaId`
- **Method**: `PUT`
- **Summary**: Create/Edit the profile information for a current user
- **Security**: Token-based authentication

#### Parameters

| Name   | In   | Description                 | Required | Type   |
| ------ | ---- | --------------------------- | -------- | ------ |
| msaId | path | DSNP ID of the current user | Yes      | string |

#### Request Body

- **Schema**: [EditProfileRequest](#editprofilerequest)

#### Response

- **Status Code**: `401 Unauthorized`
- **Schema**: UnauthorizedError

- **Status Code**: `200 OK`
- **Schema**: [ProfilesResponse](#profilesResponse)

## Components

| Component       | Type                     | Description        | Properties                                                                                                                                                               | Required Properties                                                                      |
| --------------- | ------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Security Scheme |                          |                    |                                                                                                                                                                          |                                                                                          |
|                 | http                     |                    | scheme: bearer<br>bearerFormat: accessToken                                                                                                                              |                                                                                          |
| Responses       |                          |                    |                                                                                                                                                                          |                                                                                          |
|                 |                          | Unauthorized Error | description: Access token invalid or not found                                                                                                                           |                                                                                          |
| Schemas         |                          |                    |                                                                                                                                                                          |                                                                                          |
|                 | CreateAccountRequest     | Object             | addProviderSignature: string<br>algo: enum (SR25519)<br>baseHandle: string<br>encoding: enum (hex)<br>expiration: number<br>handleSignature: string<br>publicKey: string | addProviderSignature, algo, baseHandle, encoding, expiration, handleSignature, publicKey |
|                 | CreateAccountResponse    | Object             | accessToken: string<br>expires: integer                                                                                                                                  | expires, accessToken                                                                     |
|                 | AccountsResponse         | Array              | msaId: string<br>handle: string                                                                                                                                          | msaId                                                                                   |
|                 | AccountResponse         | Object              | msaId: string<br>handle: string                                                                                                                                          | msaId                                                                                   |
|                 | CreateDelegationRequest  | Object             | pallet: string<br>extrinsicName: string<br>encodedExtrinsic: hexstring                                                                                                   | pallet, extrinsicName, encodedExtrinsic                                                  |
|                 | CreateDelegationResponse | Object             | accessToken: string<br>expires: integer                                                                                                                                  | expires, accessToken                                                                     |
|                 | DelegationResponse       | Object             | nodeUrl: string<br>ipfsGateway: string<br>providerId: string<br>schemas: array of integers<br>network: enum (local, testnet, mainnet)                                    | nodeUrl, providerId, schemas, network                                                    |
|                 | HandlesRequest           | Object             | pallet: string<br>extrinsicName: string<br>encodedExtrinsic: hexstring                                                                                                   | pallet, extrinsicName, encodedExtrinsic                                                  |
|                 | HandlesResponse          | Array              | msaId: string<br>handle: string                                                                                                                                         | msaId, handle                                                                           |
|                 | KeysResponse             | Array              | msaId: string<br>keys: KeyringPair                                                                                                                                      | msaId, keys                                                                             |
|                 | CreateProfileRequest     | Object             | content: string                                                                                                                                                          | content                                                                                  |
|                 | EditProfileRequest       | Object             | content: string                                                                                                                                                          | content                                                                                  |
|                 | ProfilesResponse         | Array              | fromId: string<br>contentHash: string<br>content: string (JSON-encoded Activity Content Note)<br>timestamp: string (Timestamp of the post)<br>displayHandle: string      | fromId, contentHash, content, timestamp                                                  |