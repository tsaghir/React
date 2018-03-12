/**
 * @flow
 * @relayHash 3dad702b416e8d0a46af83e74ce958da
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteMessageMutationVariables = {|
  input: {
    id: string,
    clientMutationId?: ?string,
  },
|};
export type DeleteMessageMutationResponse = {|
  +deleteMessage: ?{|
    +deletedMessageId: ?string,
    +user: ?{|
      +totalCount: ?number,
    |},
  |},
|};
*/


/*
mutation DeleteMessageMutation(
  $input: DeleteMessageInput!
) {
  deleteMessage(input: $input) {
    deletedMessageId
    user {
      totalCount
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteMessageInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "DeleteMessageInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "deletedMessageId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "totalCount",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeleteMessageMutation",
  "id": null,
  "text": "mutation DeleteMessageMutation(\n  $input: DeleteMessageInput!\n) {\n  deleteMessage(input: $input) {\n    deletedMessageId\n    user {\n      totalCount\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteMessageMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteMessage",
        "storageKey": null,
        "args": v1,
        "concreteType": "DeleteMessagePayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v3
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteMessageMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteMessage",
        "storageKey": null,
        "args": v1,
        "concreteType": "DeleteMessagePayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v3,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '13a089919b325db7a2b0581f2527dfae';
module.exports = node;
