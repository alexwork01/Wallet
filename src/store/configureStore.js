import i18next from "../i18n/i18n";
import {
  GO_NEXT,
  GO_BACK,
  SET_TRANSFER_PIN,
  SET_TRANSFER_TYPE,
  SET_TRANSFER_CARD,
  SET_TRANSFER_AMOUNT,
  SET_TRANSFER_IS_CONFIRM
} from "./actionTypes";
import { getPageProps, checkIsComplete } from "./helpers";

export const initialState = {
  step: 1,
  isComplete: false,
  card: {
    title: "Golden Dream",
    expDate: "01/19",
    lastDigits: "2082",
    balance: 2950,
    currency: "UAH"
  },
  transfer: {
    pin: "",
    toCard: "",
    amount: "",
    isConfirm: false,
    commission: 0.01633,
    transferType: 0,
    types: [
      { label: i18next.t("On another bank's card"), value: 0 },
      { label: i18next.t("On your own bank's card"), value: 1 }
    ]
  },
  pageProps: getPageProps(1)
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GO_NEXT:
      return setNextStep(state);
    case GO_BACK:
      return setPrevStep(state);
    case SET_TRANSFER_PIN:
      return setTransferPin(state, payload);
    case SET_TRANSFER_TYPE:
      return setTransferType(state, payload);
    case SET_TRANSFER_CARD:
      return setTransferCard(state, payload);
    case SET_TRANSFER_AMOUNT:
      return setTransferAmount(state, payload);
    case SET_TRANSFER_IS_CONFIRM:
      return setTransferIsConfirm(state, payload);
    default:
      throw new Error();
  }
};

function setNextStep(state) {
  const nextStep = state.step < 4 ? state.step + 1 : state.step;

  if (nextStep === 4) {
    return {
      ...initialState,
      step: nextStep,
      isComplete: true,
      pageProps: getPageProps(nextStep)
    };
  }

  return {
    ...state,
    step: nextStep,
    isComplete: checkIsComplete(nextStep, state.transfer),
    pageProps: getPageProps(nextStep),
    transfer: {
      ...state.transfer,
      pin: ""
    }
  };
}

function setPrevStep(state) {
  const prevStep = state.step > 1 ? state.step - 1 : state.step;

  return {
    ...state,
    step: prevStep,
    isComplete: checkIsComplete(prevStep, state.transfer),
    pageProps: getPageProps(prevStep)
  };
}

function setTransferType(state, payload) {
  return {
    ...state,
    transfer: {
      ...state.transfer,
      transferType: payload
    }
  };
}

function setTransferCard(state, payload) {
  return {
    ...state,
    isComplete: payload.length === 16,
    transfer: {
      ...state.transfer,
      toCard: payload
    }
  };
}

function setTransferAmount(state, payload) {
  return {
    ...state,
    isComplete: parseFloat(payload) > 0,
    transfer: {
      ...state.transfer,
      amount: payload
    }
  };
}

function setTransferIsConfirm(state, payload) {
  return {
    ...state,
    transfer: {
      ...state.transfer,
      isConfirm: payload
    }
  };
}

function setTransferPin(state, payload) {
  return {
    ...state,
    isComplete: payload.length === 4,
    transfer: {
      ...state.transfer,
      pin: payload
    }
  };
}
