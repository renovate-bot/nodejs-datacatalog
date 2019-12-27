// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
const policytagmanagerModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
describe('v1beta1.PolicyTagManagerClient', () => {
  it('has servicePath', () => {
    const servicePath =
      policytagmanagerModule.v1beta1.PolicyTagManagerClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      policytagmanagerModule.v1beta1.PolicyTagManagerClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port = policytagmanagerModule.v1beta1.PolicyTagManagerClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
      fallback: true,
    });
    assert(client);
  });
  describe('createTaxonomy', () => {
    it('invokes createTaxonomy without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.ICreateTaxonomyRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createTaxonomy = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createTaxonomy(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createTaxonomy with error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.ICreateTaxonomyRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createTaxonomy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createTaxonomy(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('deleteTaxonomy', () => {
    it('invokes deleteTaxonomy without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IDeleteTaxonomyRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteTaxonomy = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteTaxonomy(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteTaxonomy with error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IDeleteTaxonomyRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteTaxonomy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteTaxonomy(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updateTaxonomy', () => {
    it('invokes updateTaxonomy without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IUpdateTaxonomyRequest = {};
      request.taxonomy = {};
      request.taxonomy.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateTaxonomy = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateTaxonomy(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateTaxonomy with error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IUpdateTaxonomyRequest = {};
      request.taxonomy = {};
      request.taxonomy.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateTaxonomy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateTaxonomy(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getTaxonomy', () => {
    it('invokes getTaxonomy without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IGetTaxonomyRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getTaxonomy = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getTaxonomy(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getTaxonomy with error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IGetTaxonomyRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getTaxonomy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getTaxonomy(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('createPolicyTag', () => {
    it('invokes createPolicyTag without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.ICreatePolicyTagRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createPolicyTag = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createPolicyTag(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createPolicyTag with error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.ICreatePolicyTagRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createPolicyTag = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createPolicyTag(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('deletePolicyTag', () => {
    it('invokes deletePolicyTag without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IDeletePolicyTagRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deletePolicyTag = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deletePolicyTag(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deletePolicyTag with error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IDeletePolicyTagRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deletePolicyTag = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deletePolicyTag(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updatePolicyTag', () => {
    it('invokes updatePolicyTag without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IUpdatePolicyTagRequest = {};
      request.policyTag = {};
      request.policyTag.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updatePolicyTag = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updatePolicyTag(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updatePolicyTag with error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IUpdatePolicyTagRequest = {};
      request.policyTag = {};
      request.policyTag.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updatePolicyTag = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updatePolicyTag(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getPolicyTag', () => {
    it('invokes getPolicyTag without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IGetPolicyTagRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getPolicyTag = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getPolicyTag(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getPolicyTag with error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IGetPolicyTagRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getPolicyTag = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getPolicyTag(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getIamPolicy', () => {
    it('invokes getIamPolicy without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.iam.v1.IGetIamPolicyRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getIamPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getIamPolicy(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getIamPolicy with error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.iam.v1.IGetIamPolicyRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getIamPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getIamPolicy(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('setIamPolicy', () => {
    it('invokes setIamPolicy without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.iam.v1.ISetIamPolicyRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.setIamPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.setIamPolicy(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setIamPolicy with error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.iam.v1.ISetIamPolicyRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.setIamPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.setIamPolicy(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('testIamPermissions', () => {
    it('invokes testIamPermissions without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.iam.v1.ITestIamPermissionsRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.testIamPermissions = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.testIamPermissions(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes testIamPermissions with error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.iam.v1.ITestIamPermissionsRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.testIamPermissions = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.testIamPermissions(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('listTaxonomies', () => {
    it('invokes listTaxonomies without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IListTaxonomiesRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listTaxonomies = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listTaxonomies(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listTaxonomiesStream', () => {
    it('invokes listTaxonomiesStream without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IListTaxonomiesRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listTaxonomies = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listTaxonomiesStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(request);
    });
  });
  describe('listPolicyTags', () => {
    it('invokes listPolicyTags without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IListPolicyTagsRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listPolicyTags = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listPolicyTags(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listPolicyTagsStream', () => {
    it('invokes listPolicyTagsStream without error', done => {
      const client = new policytagmanagerModule.v1beta1.PolicyTagManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.datacatalog.v1beta1.IListPolicyTagsRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listPolicyTags = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listPolicyTagsStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(request);
    });
  });
});