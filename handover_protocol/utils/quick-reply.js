/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
const api = require('./api');

function sendQuickReply(psid, message, payload) {
  let payload = {};
  let title; 

  payload.recipient = {
    id: psid
  }

  if (payload === 'pass_thread_control') {
    title = 'Handover to Page Inbox';
  } else if (payload === 'take_thread_control') {
    title = 'Handover to Bot';
  }

  payload.message = {
    text: message,
    quick_replies: [{
        content_type: 'text',
        title: payload,
        payload: payload
    }]    
  }

  api.call('/messages', payload, () => {});
}

module.exports = sendQuickReply;
