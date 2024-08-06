/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable func-names */
/*
 * Account Service
 * Account Service API
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://github.com/OpenAPITools/openapi-generator
 *
 * Generator version: 7.7.0-SNAPSHOT
 */

import http from 'k6/http';
import { group, check, sleep } from 'k6';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export const options = {
  vus: 100,
  duration: '10s',
  thresholds: {
    checks: ['rate>=0.995'],
    http_req_duration: ['avg<100', 'p(95)<200'],
    http_req_failed: ['rate<0.005'],
    http_reqs: ['rate>=256'],
  },
  noConnectionReuse: true,
};

const BASE_URL = 'http://localhost:3000';
// Sleep duration between successive requests.
const SLEEP_DURATION = 0.1;
// Global variables should be initialized.

export default function () {
  group('/v1/accounts/{msaId}', () => {
    const msaId = randomIntBetween(2, 256);

    // Request No. 1: AccountsController_getAccount
    {
      const url = `${BASE_URL}/v1/accounts/${msaId.toString()}`;
      const request = http.get(url);

      check(request, {
        'Found account': (r) => r.status === 200,
      });
    }
  });

  group('/v1/delegation/{msaId}', () => {
    const msaId = randomIntBetween(2, 256);

    // Request No. 1: DelegationController_getDelegation
    {
      const url = `${BASE_URL}/v1/delegation/${msaId.toString()}`;
      const request = http.get(url);

      check(request, {
        'Found delegation information.': (r) => r.status === 200,
      });
    }
  });

  group('/v1/keys/add', () => {
    // Request No. 1: KeysController_addKey
    // eslint-disable-next-line no-lone-blocks
    const url = `${BASE_URL}/v1/keys/add`;
    const keysRequest = {
      msaOwnerAddress: '5G3aEHgZSr3cG1qY4QapTb9osftUYRCkYKShcywVvxdVuvdt',
      msaOwnerSignature:
        '0x709a3bde4a732a871cb3bf105fcb3c867744a7711d0fa22c748cd087eae775167be01f5503ed40c05d3421e4e5d948930cef4cd37c0ce507e2e24b139c1ba28f',
      newKeyOwnerSignature:
        '0xe65ffcb5e8397dfa9e19c6eec4ada0f79bd3b65d718804a60d069c68afd4566acfe225c3d3d3461f3fb7a592444100cf50be5c883eacb8c1b20d3a21caf29f89',
      payload: {
        expiration: 129,
        msaId: '4',
        // prettier-ignore
        newPublicKey:
          new Uint8Array(32)[
            (186, 62, 175, 39, 96, 22, 56, 99,
            140, 5, 56, 87, 211, 139, 88, 202,
            133, 86, 253, 52, 247, 204, 15, 44,
            41, 184, 174, 223, 27, 108, 195, 127)
          ],
      },
    };
    const params = { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } };
    const request = http.post(url, JSON.stringify(keysRequest), params);

    check(request, {
      'Found public keys.': (r) => r.status === 200,
    });
  });

  group('/v1/keys/{msaId}', () => {
    const msaId = randomIntBetween(2, 256);

    // Request No. 1: KeysController_getKeys
    {
      const url = `${BASE_URL}/v1/keys/${msaId}`;
      const request = http.get(url);

      check(request, {
        'Found public keys.': (r) => r.status === 200,
      });
    }
  });

  group('/v1/handles', () => {
    // Request No. 1: HandlesController_createHandle
    // eslint-disable-next-line no-lone-blocks
    {
      const url = `${BASE_URL}/v1/handles`;
      // Sample data copied from e2e test case.
      // As the worker is not required for the load test, these values only need to simulate the request.
      const body = {
        accountId: '5G3aEHgZSr3cG1qY4QapTb9osftUYRCkYKShcywVvxdVuvdt',
        // prettier-ignore
        payload: {
          baseHandle: new Uint8Array([
            67, 111, 102, 102, 101, 101, 80, 97, 117, 108, 101,
          ]),
          expiration: 151
        },
        proof: {
          Sr25519:
            '0x343e6218cf551a65019d4aa9471ea310057ac7214f37bfcb23c893200492ca6e77198ee8f6e2a56781a6b9cfe8c2835a66925029a34ce4eeaf76e3bc7810ab8f',
        },
      };
      const params = { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } };
      const request = http.post(url, JSON.stringify(body), params);

      check(request, {
        'Handle created successfully': (r) => r.status === 200,
      });
    }
  });

  group('/v1/handles/change', () => {
    // Request No. 1: HandlesController_changeHandle
    // eslint-disable-next-line no-lone-blocks
    {
      const url = `${BASE_URL}/v1/handles/change`;
      // Sample data copied from the e2e tests.
      // As the worker is not required for the load test, these values only need to simulate the request.
      const body = {
        accountId: '5HbAZ2qZVZjV4LhH94BLVMY437UoLbCDEK6BRSz7vxDpkxwF',
        // prettier-ignore
        payload: {
          baseHandle: new Uint8Array([
            66, 114, 111, 119, 110, 76, 97, 117, 114, 101, 116, 116, 97,
          ]),
          expiration: 166
        },
        proof: {
          Sr25519:
            '0x9c092b75f62bc61f61c205dc55d67b1e9b28e0adae81aea78c6a0ed5f77b87749e149e639edfe4bdaa0d7391450f191e92fc47b6fd0d72bffcc7f74a9349fb82',
        },
      };
      const params = { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } };
      const request = http.post(url, JSON.stringify(body), params);

      check(request, {
        'Handle changed successfully': (r) => r.status === 200,
      });
    }
  });

  group('/v1/handles/{msaId}', () => {
    const msaId = '2';

    // Request No. 1: HandlesController_getHandle
    {
      const url = `${BASE_URL}/v1/handles/${msaId}`;
      const request = http.get(url);

      check(request, {
        'Found account': (r) => r.status === 200,
      });
    }
  });
}
