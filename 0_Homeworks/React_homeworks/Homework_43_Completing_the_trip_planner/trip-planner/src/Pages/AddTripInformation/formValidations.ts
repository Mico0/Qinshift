import type { AddTripValues } from "./AddTripInformation";
import type { RegisterOptions } from "react-hook-form";
export const formValidations: Record<
  keyof AddTripValues,
  RegisterOptions<AddTripValues>
> = {
  passengerName: {
    required: { value: true, message: "Please enter your full name" },
    minLength: {
      value: 5,
      message: "Full name cannot be shorter than 5 characters",
    },
  },
  email: {
    required: { value: true, message: "You must enter a valid e-mail address" },
    pattern: {
      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
      message: "Please enter a valid e-mail address",
    },
  },
  passportNumber: {
    required: {
      value: true,
      message: "You must enter a valid passport number",
    },
    minLength: {
      value: 9,
      message: "Passport number must be 9 characters long",
    },
    maxLength: {
      value: 9,
      message: "Passport number must be 9 characters long",
    },
    pattern: {
      value: /^[A-Z]\d{8}$/i,
      message: "Please enter a valid passport number ex: M12345678",
    },
  },
  budget: {
    required: { value: true, message: "You must enter a starting budget" },
    min: {
      value: 500,
      message: "You need more funds to start this trip, over $500",
    },
  },
  comments: {
    required: true,
  },
};
