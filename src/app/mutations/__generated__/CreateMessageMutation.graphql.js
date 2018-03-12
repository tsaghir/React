/**
 * @flow
 * @relayHash c3f11d50ccd316376b5f7490226a6be5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateMessageMutationVariables = {|
  input: {
    text: string,
    clientMutationId?: ?string,
  },
|};
export type CreateMessageMutationResponse = {|
  +createMessage: ?{|
    +messageEdge: ?{|
      +__typename: string,
      +cursor: string,
      +node: ?{|
        +id: string,
        +text: ?string,
        +ts: ?number,
      |},
    |},
    +user: ?{|
      +id: string,
      +totalCount: ?number,
    |},
  |},
|};
*/


/*
mutation CreateMessageMutation(
  $input: CreateMessageInput!
) {
  createMessage(input: $input) {
    messageEdge {
      __typename
      cursor
      node {
        id
        text
        ts
      }
    }
    user {
      id
      totalCount
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateMessageInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createMessage",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateMessageInput!"
      }
    ],
    "concreteType": "CreateMessagePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "messageEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "MessageEdge",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cursor",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Message",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "text",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "ts",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalCount",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateMessageMutation",
  "id": null,
  "text": "mutation CreateMessageMutation(\n  $input: CreateMessageInput!\n) {\n  createMessage(input: $input) {\n    messageEdge {\n      __typename\n      cursor\n      node {\n        id\n        text\n        ts\n      }\n    }\n    user {\n      id\n      totalCount\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateMessageMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateMessageMutation",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
(node/*: any*/).hash = '00e5f7760842d4975c3deb4cba900294';
module.exports = node;
