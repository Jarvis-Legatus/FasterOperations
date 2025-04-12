"use client";
import { useState } from "react";
// import { signIn } from "next-auth/react"; // Keep commented out as requested
import toast from "react-hot-toast";
import { validateEmail } from "@/utils/validateEmail";
import Loader from "@/components/Common/Loader";

const MagicLink = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Please enter your email address.");
    }

    setLoader(true);
    if (!validateEmail(email)) {
      setLoader(false);
      return toast.error("Please enter a valid email address.");
    } else {
      // --- START: Comment out the actual signIn call and its handlers ---
      /*
      signIn("email", {
        redirect: false,
        email: email,
      })
        .then((callback: any) => { // Added ': any' temporarily if uncommenting, better to use proper type
          if (callback?.ok) {
            toast.success("Email sent");
            setEmail("");
            setLoader(false);
          }
        })
        .catch((error: any) => { // Added ': any' temporarily if uncommenting, better to use 'unknown' or 'Error'
          console.log(error);
          toast.error("Unable to send email!");
          setLoader(false);
        });
      */
      // --- END: Comment out the actual signIn call and its handlers ---

      // Since the above is commented out, provide feedback that it's disabled
      toast.error("Magic Link sign-in is currently disabled.");
      setLoader(false); // Stop the loader
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[22px]">
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
        />
      </div>
      <div className="mb-9">
        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-blue-dark"
        >
          Send Magic Link {loader && <Loader />}
        </button>
      </div>
    </form>
  );
};

export default MagicLink;