const ForgotPassword = () => {
  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center">
        <form action="" className="inline-block login-form px-28 py-20">
          <h1 className="text-center font-sans font-black text-3xl pb-5">
            Forgot Password
          </h1>
          <p className="text-center font-sans text-lg">
            We sent a code to your email
          </p>
          <p className="text-center font-sans text-lg">
            placeholder@temp.com{" "}
            <span className="underline font-sans font-bold">Change</span>
          </p>
          <div className="flex justify-center gap-4 pt-8 pb-4">
            <input type="number" className="inputfield" />
            <input type="number" className="inputfield" />
            <input type="number" className="inputfield" />
            <input type="number" className="inputfield" />
          </div>
          <p className="text-center font-sans text-lg pb-12">
            Did not receive your code?
            <span className="font-sans resend font-bold">Resend</span>
          </p>
          <div className="confirm-btn flex justify-center pt-8">
            <input
              type="button"
              value="Confirm"
              className="confirm-input text-white font-sans py-2"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
