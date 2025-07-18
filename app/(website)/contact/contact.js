"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import PageHeading from "@/components/PageHeading";
import Button from "@/components/ui/Button";
export default function Contact({ settings }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = settings?.w3ckey || "";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: `Nurture and Wonder Nannying`,
      subject: "New Contact Message from Nurture and Wonder Nannying"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <Container>
      <PageHeading >Contact</PageHeading>
      <div className="mt-12 prose prose-xl max-w-xl text-center mx-auto">
          <p>To receive a personalised quote and discuss how I can best support your family, please get in touch.</p>
        </div>

      <div className="grid my-10 md:grid-cols-2">
        <div className="my-12">
     
      
          <div className="flex justify-center flex-col items-center md:block">
            <div className="flex items-center space-x-2 text-evergreen dark:text-gray-400">
              <MapPinIcon className="w-4 h-4" />
              <span>Morzine, Haute-Savoie, France</span>
            </div>
            {settings?.email && (
              <div className="flex items-center mt-2 space-x-2 text-evergreen dark:text-gray-400">
                <EnvelopeIcon className="w-4 h-4" />
                <a href={`mailto:${settings.email}`}>
                  {settings.email}
                </a>
              </div>
            )}
            {settings?.phone && (
              <div className="flex items-center mt-2 space-x-2 text-evergreen dark:text-gray-400">
                <PhoneIcon className="w-4 h-4" />
                <a href={`tel:${settings.phone}`}>{settings.phone}</a>
              </div>
            )}
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="my-10">
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}></input>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="false"
                className={`w-full bg-white px-4 py-3 border-2 placeholder:text-evergreen dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 bg-sun-cream focus:ring-4  ${
                  errors.name
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-sky-blue focus:border-twilight-pink ring-peach-blush dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80
                })}
              />
              {errors.name && (
                <div className="mt-1 text-red-600">
                  <small>{errors.name.message}</small>
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="false"
                className={`w-full bg-white px-4 py-3 border-2 placeholder:text-evergreen dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 bg-sun-cream focus:ring-4  ${
                  errors.email
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-sky-blue focus:border-twilight-pink ring-peach-blush dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email"
                  }
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                className={`w-full px-4 py-3 bg-white border-2 placeholder:text-evergreen dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900 bg-sun-cream rounded-md outline-none  h-36 focus:ring-4  ${
                  errors.message
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-sky-blue focus:border-twilight-pink ring-peach-blush dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("message", {
                  required: "Enter your Message"
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  {" "}
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>

            <Button
              type="submit"
              className="w-full py-4 px-7"
              color="orange"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <svg
                  className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>

          {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-sm text-center text-green-500">
              {message || "Success. Message sent successfully"}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-sm text-center text-red-500">
              {message || "Something went wrong. Please try later."}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
