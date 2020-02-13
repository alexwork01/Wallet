import {
  GO_NEXT,
  GO_BACK,
  SET_TRANSFER_PIN,
  SET_TRANSFER_TYPE,
  SET_TRANSFER_CARD,
  SET_TRANSFER_AMOUNT,
  SET_TRANSFER_IS_CONFIRM
} from "./actionTypes";

export const actionSetTransferType = payload => ({
  type: SET_TRANSFER_TYPE,
  payload
});

export const actionSetTransferCard = payload => ({
  type: SET_TRANSFER_CARD,
  payload
});

export const actionSetTransferAmount = payload => ({
  type: SET_TRANSFER_AMOUNT,
  payload
});

export const actionSetTransferIsConfirm = payload => ({
  type: SET_TRANSFER_IS_CONFIRM,
  payload
});

export const actionSetTransferPin = payload => ({
  type: SET_TRANSFER_PIN,
  payload
});

export const actionGoNext = () => ({
  type: GO_NEXT
});

export const actionGoBack = () => ({
  type: GO_BACK
});
