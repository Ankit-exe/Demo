import { z } from "zod";
import "../index.css";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormSuccess from "../components/FormSuccess";
import { useState } from "react";


//SCHEMA DEFINE

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  companyName: z.string().min(1, "Company name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("This is not valid email."),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});


//props

type SchemaProps = z.infer<typeof formSchema>;


export const Contact = () => {


  // form state
  const [formSubmitted, setFormSubmitted] = useState(false);

  //react query  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SchemaProps>({
    resolver: zodResolver(formSchema),
  });


// on Submit fnx

  const onSubmit = async (formdata: SchemaProps) => {
    console.log(formdata);
    setFormSubmitted(true);
    reset();

    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };



  return (
    <div className="pb-60 pt-20 overflow-hidden mb-20">
      {formSubmitted && <FormSuccess />}
      <div className="h-screen mb-20">
        <div className="h-[90%] bg-purple w-full relative">
          <div className="text-center text-4xl text-white font-semibold flex flex-col py-20 gap-3">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Feel free to contact us.
            </motion.span>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              We'll glad to hear from you.
            </motion.span>
          </div>


        {/* svg */}


          <div className="custom-shape-divider-bottom-1718422084 absolute bottom-0">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>



          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full justify-center flex absolute"
          >


            {/* FORM CONTAINER */}


            <div className="p-10 bg-white z-10 rounded-xl shadow-xl">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 md:w-[500px]"
              >
                <div className="flex flex-col">
                  <label className="font-semibold text-sm">Your name</label>
                  <input
                    type="text"
                    className="border-2 border-border-gray rounded-lg h-9 px-2"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red">{errors.name.message}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold text-sm">Company name</label>
                  <input
                    type="text"
                    className="border-2 border-border-gray rounded-lg h-9 px-2"
                    {...register("companyName")}
                  />
                  {errors.companyName && (
                    <p className="text-red">{errors.companyName.message}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold text-sm">Email</label>
                  <input
                    type="email"
                    className="border-2 border-border-gray rounded-lg h-9 px-2"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red">{errors.email.message}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold text-sm">Subject</label>
                  <input
                    type="text"
                    className="border-2 border-border-gray rounded-lg h-9 px-2"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-red">{errors.subject.message}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold text-sm">Message</label>
                  <textarea
                    className="border-2  border-border-gray rounded-lg min-h-40 max-h-60 p-2"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-red">{errors.message.message}</p>
                  )}
                </div>


                {/* SUBMIT BUTTON */}


                <button className="bg-purple text-white py-2 rounded-lg hover:bg-purple-light duration-150">
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
