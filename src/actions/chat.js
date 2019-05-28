import { createAction } from 'redux-starter-kit';

export const open = createAction('CHAT_OPEN');
export const close = createAction('CHAT_CLOSE');
export const convosRequest = createAction('CHAT_CONVOS_REQUEST');
export const convosSuccess = createAction('CHAT_CONVOS_SUCCESS');
export const convosFail = createAction('CHAT_CONVOS_FAILURE');
export const activateConvo = createAction('CHAT_CONVO_ACTIVATE');
export const deactivateConvo = createAction('CHAT_CONVO_DEACTIVATE');
export const convoActivated = createAction('CHAT_CONVO_ACTIVATED');
export const convoMessagesRequest = createAction('CHAT_CONVO_MESSAGES_REQUEST');
export const convoMessagesSuccess = createAction('CHAT_CONVO_MESSAGES_SUCCESS');
export const convoMessagesFail = createAction('CHAT_CONVO_MESSAGES_FAILURE');