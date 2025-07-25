import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { formValidations } from "./formValidations";
import { saveToLocalStorage } from "../../service/localStorage";

export interface AddTripValues {
  passengerName: string;
  email: string;
  passportNumber: string;
  budget: string;
  comments: string;
}

export default function AddTripInformation() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<AddTripValues>();

  const navigate = useNavigate();

  function onSubmit(formValue: AddTripValues) {
    // console.log(formValue);
    saveToLocalStorage("passengerInfo", undefined, formValue);
    navigate("/trip-planner");
  }
  console.log(errors);
  return (
    <div className="bg-[var(--papaya)]  border-4 border-[var(--tea-green)] rounded-lg shadow-2xl relative m-2 md:m-10">
      <div className="flex items-center justify-center p-5 border-b-4 rounded-t border-[var(--tea-green)]">
        <h2 className="text-xl  font-semibold">Add your trip information</h2>
      </div>

      <div className="p-6 space-y-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="passenger-name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Passenger Name
              </label>
              <input
                type="text"
                id="passenger-name"
                {...register("passengerName", formValidations.passengerName)}
                className="shadow-sm bg-[var(--cornsilk)] border border-[var(--tea-green)] text-black sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="John Doe"
              />
              {errors.passengerName && (
                <p className="text-red-700 p-2">
                  {errors.passengerName.message}
                </p>
              )}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="passenger-email"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                {...register("email", formValidations.email)}
                id="passenger-email"
                className="shadow-sm bg-[var(--cornsilk)] border border-[var(--tea-green)] text-black sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="john@gmail.com"
              />
              {errors.email && (
                <p className="text-red-700 p-2">{errors.email.message}</p>
              )}
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="passport-number"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Passport Number
              </label>
              <input
                type="text"
                {...register("passportNumber", formValidations.passportNumber)}
                id="passport-number"
                className="shadow-sm bg-[var(--cornsilk)] border border-[var(--tea-green)] text-black sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="M12345678"
              />
              {errors.passportNumber && (
                <p className="text-red-700 p-2">
                  {errors.passportNumber.message}
                </p>
              )}
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="budget"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Budget
              </label>
              <input
                type="number"
                {...register("budget", formValidations.budget)}
                id="budget"
                className="shadow-sm bg-[var(--cornsilk)] border border-[var(--tea-green)] text-black sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="$2300"
              />
              {errors.budget && (
                <p className="text-red-700 p-2">{errors.budget.message}</p>
              )}
            </div>
            <div className="col-span-full">
              <label
                htmlFor="trip-comments"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Product Details
              </label>
              <textarea
                id="trip-comments"
                {...register("comments", formValidations.comments)}
                rows={6}
                className="shadow-sm bg-[var(--cornsilk)] border border-[var(--tea-green)] text-black sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Comments..."
              ></textarea>
              {errors.comments && (
                <p className="text-red-700 p-2">{errors.comments.message}</p>
              )}
            </div>
          </div>
          <div className="p-6  mt-4 border-t border-[var(--tea-green)] rounded-b flex items-center justify-center">
            <Button icon="add" type="submit" disabled={!errors}>
              Add trip
            </Button>
          </div>
          {isSubmitSuccessful && (
            <h4 className="text-green-800 p-2">
              You have successfully submitted your information
            </h4>
          )}
        </form>
      </div>
    </div>
  );
}
