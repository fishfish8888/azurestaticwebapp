import React, { useState } from "react";

const FORM_ENDPOINT = "https://func-aks-log-query.azurewebsites.net/api/akslogquery"; // TODO - fill on the later step

const InputForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Site domain name, e.g. www.example.com"
          name="hostname"
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="AKS namespace"
          name="namespace"
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default InputForm;
