export const checkIsComplete = (step, transfer) => {
  switch (step) {
    case 1:
      return transfer.toCard.length === 16;
    case 2:
      return parseFloat(transfer.amount) > 0;
    case 3:
      return transfer.pin.length === 4;
    default:
      return false;
  }
};

export const getPageProps = step => {
  switch (step) {
    case 1:
      return {
        leftText: "Back",
        leftIconName: "ios-arrow-back",
        centerText: "Money Transfers",
        buttonText: "Next",
        buttonLeftIcon: null,
        buttonRightIcon: "ios-arrow-forward"
      };
    case 2:
      return {
        leftText: "Back",
        leftIconName: "ios-arrow-back",
        centerText: "Transfer amount",
        buttonText: "Confirm",
        buttonLeftIcon: null,
        buttonRightIcon: "ios-arrow-forward"
      };
    case 3:
      return {
        leftText: "Back",
        leftIconName: "ios-arrow-back",
        centerText: "Confirmation of operation",
        buttonText: "Transfer",
        buttonLeftIcon: null,
        buttonRightIcon: "ios-arrow-forward"
      };
    case 4:
      return {
        leftText: "Close",
        leftIconName: "ios-close",
        centerText: "Result",
        buttonText: "Save as template",
        buttonLeftIcon: true,
        buttonRightIcon: null
      };
    default:
  }
};
