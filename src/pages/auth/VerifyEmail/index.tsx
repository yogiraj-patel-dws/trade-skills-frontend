import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

const VerifyEmail = () => {
  const onFinish = (values: any) => {
    console.log("✅ Verify Email Final Output:", values);
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#1c170d] dark:text-gray-100 min-h-screen flex flex-col relative overflow-hidden animated-bg">
      <header className="flex items-center justify-between px-6 md:px-10 py-5 z-20">
        <a className="flex items-center gap-3 group" href="#">
          <div className="size-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
            <span className="material-symbols-outlined filled text-[24px]">
              handshake
            </span>
          </div>
          <h2 className="text-[#1c170d] dark:text-white text-xl font-extrabold tracking-tight">
            TradeSkill
          </h2>
        </a>
        <div className="hidden sm:flex gap-4">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 self-center">
            Already verified?
          </span>
          <a
            className="text-sm font-bold text-[#1c170d] dark:text-white hover:text-primary transition-colors self-center"
            href="#"
          >
            Log In
          </a>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 z-10 w-full max-w-[1400px] mx-auto">
        <div className="glass-card w-full max-w-lg rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-2 animate-bounce-slow">
              <span className="material-symbols-outlined text-primary text-[40px]">
                mark_email_unread
              </span>
            </div>
          </div>

          <div className="text-center mb-4">
            <h1 className="text-3xl font-extrabold text-[#1c170d] dark:text-white tracking-tight mb-3">
              Check your inbox
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-xs mx-auto">
              We’ve sent a 6-digit verification code to{" "}
              <span className="font-bold text-[#1c170d] dark:text-white">
                alex.morgan@example.com
              </span>
            </p>
          </div>

          {/* FORM */}
          <Form className="flex flex-col gap-8 mt-8" onFinish={onFinish}>
            <div className="flex flex-col gap-3">
              <label className="sr-only">Verification Code</label>

              <div className="flex justify-center px-2">
                <Form.Item
                  name="otp"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Verification code is required",
                    },
                    {
                      pattern: /^\d{6}$/,
                      message: "Enter a valid 6-digit code",
                    },
                  ]}
                >
                  <Input.OTP
                    length={6}
                    className="flex justify-center gap-2 sm:gap-3"
                    classNames="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold bg-white dark:bg-surface-dark border-2 border-transparent focus:border-primary focus:ring-0 rounded-2xl shadow-sm outline-none transition-all placeholder-transparent text-[#1c170d] dark:text-white caret-primary"
                  />
                </Form.Item>
              </div>

              {/* ERROR MESSAGE */}
              <Form.Item shouldUpdate noStyle>
                {({ getFieldError }) =>
                  getFieldError("otp")[0] && (
                    <div className="text-center text-xs text-red-500">
                      {getFieldError("otp")[0]}
                    </div>
                  )
                }
              </Form.Item>
            </div>

            {/* SUBMIT */}
            <Button
              htmlType="submit"
              className="w-full py-4 bg-primary hover:bg-primary-hover text-[#1c170d] text-base font-bold rounded-full shadow-[0_4px_14px_0_rgba(43,238,121,0.39)] hover:shadow-[0_6px_20px_rgba(43,238,121,0.23)] hover:-translate-y-0.5 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Verify Email</span>
              <span className="material-symbols-outlined text-sm font-bold">
                arrow_forward
              </span>
            </Button>

            <div className="flex flex-col items-center gap-4 text-sm font-medium">
              <p className="text-gray-500 dark:text-gray-400">
                Didn’t receive the code?
                <button
                  type="button"
                  className="text-[#1c170d] dark:text-white font-bold hover:text-primary dark:hover:text-primary underline decoration-2 decoration-transparent hover:decoration-primary transition-all"
                >
                  Click to resend
                </button>
              </p>

              <Link
                to={ROUTES.SIGNUP}
                className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {" "}
                <span className="material-symbols-outlined text-lg">
                  arrow_back
                </span>
                Back to sign up
              </Link>
            </div>
          </Form>
        </div>

        <div className="mt-8 md:mt-12 flex gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-gray-400">
              verified_user
            </span>
            <span className="text-xs font-semibold text-gray-500">
              Secure &amp; Encrypted
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-gray-400">
              support_agent
            </span>
            <span className="text-xs font-semibold text-gray-500">
              24/7 Support
            </span>
          </div>
        </div>
      </main>

      <div className="fixed top-20 -left-20 w-96 h-96 bg-green-200/30 dark:bg-green-900/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-emerald-100/40 dark:bg-emerald-900/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
    </div>
  );
};

export default VerifyEmail;
