// Formulaire non actif

/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect } from "react";
import useThemeStore from "@/store/ThemeStore";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Contact() {
  const { theme } = useThemeStore();
  const themesWithWhiteText = ["dark", "gray", "deep"];

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  useEffect(() => {
    if (errors.prenom) {
      toast.error("Le prénom est requis");
    }
    if (errors.nom) {
      toast.error("Le nom est requis");
    }
    if (errors.email) {
      toast.error("L'email est requis");
    }
    if (errors.message) {
      toast.error("Le message est requis");
    }
  }, [errors]);

  function onSubmitHandler(data) {
    console.log(data);
  }

  return (
    <div className={`container min-h-svh`}>
      <h1 className={`text-clip text-center my-6`}>Formulaire de contact</h1>

      <div className="flex flex-col w-full h-auto mt-8 p-1.5 xs:p-2 sm:p-3 md:p-4 customShadow rounded-xl customBorder gap-4 bg-gradient-to-tr from-neutral-200 to-neutral-100 ">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="flex w-full max-md:flex-col md:gap-x-4">
            {/* prénom */}
            <label
              htmlFor="prenom"
              className="relative block my-3 border border-gray-400 shadow-sm focus-within:border-neutral-600 focus-within:ring-1 focus-within:ring-neutral-600 rounded-xl grow"
            >
              <input
                type="text"
                id="prenom"
                className="w-full p-4 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:rinplaceholder-gray-50 rounded-xl"
                placeholder="prenom"
                {...register("prenom", { required: true })}
              />
              <span
                className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-clip p-2 rounded-full text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs w-28 text-center ${
                  themesWithWhiteText.includes(theme)
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                <b>Prénom</b>
              </span>
            </label>
            {/* nom */}
            <label
              htmlFor="nom"
              className="relative block my-3 border border-gray-400 shadow-sm rounded-xl focus-within:border-neutral-600 focus-within:ring-1 focus-within:ring-neutral-600 grow"
            >
              <input
                type="text"
                id="nom"
                className="w-full p-4 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:rinplaceholder-gray-50 rounded-xl"
                placeholder="nom"
                {...register("nom", { required: true })}
              />
              <span
                className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-clip p-2 rounded-full text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs w-28 text-center  ${
                  themesWithWhiteText.includes(theme)
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                <b>Nom</b>
              </span>
            </label>
          </div>
          {/* email */}
          <label
            htmlFor="email"
            className="relative block my-3 border border-gray-400 shadow-sm rounded-xl focus-within:border-neutral-600 focus-within:ring-1 focus-within:ring-neutral-600"
          >
            <input
              type="text"
              id="email"
              className="w-full p-4 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:rinplaceholder-gray-50 rounded-xl"
              placeholder="email"
              {...register("email", { required: true })}
            />
            <span
              className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-clip p-2 rounded-full text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs w-28 text-center  ${
                themesWithWhiteText.includes(theme)
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              <b>Email</b>
            </span>
          </label>
          {/* Message */}
          <label
            htmlFor="message"
            className="relative block my-6 border border-gray-400 shadow-sm rounded-xl focus-within:border-neutral-600 focus-within:ring-1 focus-within:ring-neutral-600 "
          >
            <textarea
              type="text"
              id="message"
              className="w-full p-4 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:rinplaceholder-gray-50"
              rows="10"
              placeholder="message"
              {...register("message", { required: true })}
            />
            <span
              className={`pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-clip p-2 rounded-full text-xs transition-all peer-placeholder-shown:top-[30px] peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs  w-28 text-center  ${
                themesWithWhiteText.includes(theme)
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              <b>Message</b>
            </span>
          </label>

          <button
            className={`w-full p-4 mx-auto mt-3 mb-5 duration-200 rounded-full shadow-lg bg-clip hover:opacity-80 ${
              themesWithWhiteText.includes(theme)
                ? "text-white"
                : "text-gray-700"
            }`}
          >
            <h4 className={`w-full`}>Envoyer</h4>
          </button>
        </form>
      </div>
      <div className="my-8 text-3xl text-center">
        Formulaire en cours de développement
        <br />
        Vous pouvez me contacter à :
        <a mailto="contact@ducompagnon.fr"> <u><b>contact@ducompagnon.fr</b></u></a><br />
        
        ou par téléphone au : <a href="tel:0699812296" > <u><b>06.99.81.22.96</b></u></a>
      </div>
    </div>
  );
}
