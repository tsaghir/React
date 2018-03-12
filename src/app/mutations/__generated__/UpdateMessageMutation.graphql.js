/**
 * @flow
 * @relayHash d6c5b395c39d8d865582594f2ab87562
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateMessageMutationVariables = {|
  input: {
    id: string,
    text: string,
    clientMutationId?: ?string,
  },
|};
export type UpdateMessageMutationResponse = {|
  +updateMessage: ?{|
    +message: ?{|
      +id: string,
      +text: ?string,
    |},
  |},
|};
*/


/*
mutation UpdateMessageMutation(
  $input: UpdateMessageInput!
) {
  updateMessage(input: $input) {
    message {
      id
      text
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateMessageInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateMessage",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateMessageInput!"
      }
    ],
    "concreteType": "UpdateMessagePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "message",
        "storageKey": null,
        "args": null,
        "concreteType": "Message",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "text",
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
  "name": "UpdateMessageMutation",
  "id": null,
  "text": "mutation UpdateMessageMutation(\n  $input: UpdateMessageInput!\n) {\n  updateMessage(input: $input) {\n    message {\n      id\n      text\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateMessageMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateMessageMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '87ef5cfca8e3d9b807fb3cef39400a02';
module.exports = node;
