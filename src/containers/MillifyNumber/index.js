import { millify } from "millify";
export const MillifyNumber = (number) => {
  const formattedNumber = () => {
    switch (true) {
      case number >= 1000000000:
        return millify(number / 1000000000) + "B";
      case number >= 1000000:
        return millify(number / 1000000) + "M";
      case number >= 1000:
        return millify(number / 1000) + "K";
      default:
        return millify(number);
    }
  };

  return formattedNumber();
};
