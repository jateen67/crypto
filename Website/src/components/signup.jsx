import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase-config";

export default function Signup() {
  const [emailAddress, setEmailAddress] = useState("");
  const [status, setStatus] = useState(undefined);
  const emailRef = collection(db, "EmailSignups");

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailAddress === "") {
      setStatus({ type: "error" });
      return;
    }

    await addDoc(emailRef, {
      email: emailAddress,
      signed_up: serverTimestamp(),
    })
      .then(() => {
        setStatus({ type: "success" });
      })
      .catch((error) => {
        setStatus({ type: "dberror", error });
      });

    setEmailAddress("");
  };

  return (
    <div className="header-container">
      <h1 className="im-jatin" data-aos="fade-up">
        AI Stock Recommender
      </h1>
      <p className="top-para" data-aos="fade-up" data-aos-delay="500">
        Sign up to get notified when the service goes live. A message will
        appear when you've signed up successfully
      </p>
      <div className="email-container" data-aos="fade-up">
        {status?.type === "success" && (
          <h4 className="success">Success! We have received your email</h4>
        )}
        {status?.type === "error" && (
          <h4 className="error">Error! Please add a valid address</h4>
        )}
        {status?.type === "dberror" && (
          <h4 className="error">
            Error! Something went wrong. Please try again :(
          </h4>
        )}
        <form class="form" onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="Email Address"
            type="email"
            data-aos="fade-up"
            data-aos-delay="1000"
            onChange={(e) => setEmailAddress(e.target.value)}
            value={emailAddress}
          />
          <button className="submit" data-aos="fade-up" data-aos-delay="1500">
            Submit
          </button>
        </form>
      </div>
      <svg class="arrows">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>
  );
}
