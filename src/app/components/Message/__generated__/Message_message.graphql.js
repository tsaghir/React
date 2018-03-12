/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Message_message$ref: FragmentReference;
export type Message_message = {|
  +id: string,
  +text: ?string,
  +ts: ?number,
  +$refType: Message_message$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Message_message",
  "type": "Message",
  "metadata": null,
  "argumentDefinitions": [],
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "ts",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = '421ea0ee2b7cc2d658fda9ea62f22d4b';
module.exports = node;
