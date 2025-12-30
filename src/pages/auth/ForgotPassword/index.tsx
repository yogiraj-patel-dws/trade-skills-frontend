import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { Form, Input, Button } from "antd";

const ForgotPassword = () => {
  const onFinish = (values: any) => {
    console.log("✅ Forgot Password Final Output:", values);
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#1c170d] dark:text-[#f4efe7] overflow-x-hidden transition-colors duration-200">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/5"></div>
        <div className="absolute top-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-blue-400/5 blur-[120px] dark:bg-blue-900/10"></div>
        <div className="absolute -bottom-[10%] left-[20%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/5"></div>
      </div>

      <div className="relative flex min-h-screen w-full flex-col">
        <main className="flex-1 flex items-center justify-center px-4 py-10">
          <div className="layout-content-container flex flex-col w-full max-w-[480px]">
            <div className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-[2rem] shadow-xl dark:shadow-2xl dark:shadow-black/20 p-8 sm:p-10 border border-[#e8e0ce]/50 dark:border-[#3d3424]">
              <div className="flex flex-col items-center gap-6 mb-8 text-center">
                <div className="relative flex items-center justify-center size-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-2">
                  <span className="material-symbols-outlined text-primary text-[40px]">
                    lock_reset
                  </span>
                  <div className="absolute -z-10 inset-0 bg-primary/20 blur-xl rounded-full"></div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-[#1c170d] dark:text-white">
                    Forgot your password?
                  </h1>
                  <p className="text-base font-normal leading-relaxed text-[#9c8149] dark:text-[#d4c5a8] max-w-[360px]">
                    Don't worry, it happens to the best of us. Enter your email
                    below to reset it.
                  </p>
                </div>
              </div>

              {/* FORM */}
              <Form className="flex flex-col gap-6 w-full" onFinish={onFinish}>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold ml-4 text-[#1c170d] dark:text-[#f4efe7]"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Form.Item
                      name="email"
                      noStyle
                      rules={[
                        { required: true, message: "Email is required" },
                        { type: "email", message: "Enter a valid email address" },
                      ]}
                    >
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-full text-[#1c170d] dark:text-white border border-[#e8e0ce] dark:border-[#4a3e2a] bg-[#fcfbf8] dark:bg-[#221c10] h-14 pl-12 pr-5 text-base font-normal focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-[#9c8149]/60 dark:placeholder:text-[#8a7650]"
                      />
                    </Form.Item>

                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9c8149] dark:text-[#8a7650] flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-[20px]">
                        mail
                      </span>
                    </div>
                  </div>

                  {/* ERROR MESSAGE */}
                  <Form.Item shouldUpdate noStyle>
                    {({ getFieldError }) =>
                      getFieldError("email")[0] && (
                        <div className="ml-4 text-xs text-red-500">
                          {getFieldError("email")[0]}
                        </div>
                      )
                    }
                  </Form.Item>
                </div>

                {/* SUBMIT */}
                <Button
                  htmlType="submit"
                  className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-gradient-to-r from-[#2bee79] to-[#6ff6a5] hover:to-[#2bee79] text-[#1c170d] text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="truncate">Send Reset Link</span>
                </Button>
              </Form>

              <div className="mt-8 text-center">
                <Link
                  to={ROUTES.LOGIN}
                  className="inline-flex items-center gap-2 text-[#9c8149] hover:text-primary dark:text-[#d4c5a8] dark:hover:text-primary text-sm font-medium transition-colors group"
                >
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">
                    arrow_back
                  </span>
                  Back to Login
                </Link>
              </div>
            </div>

            <p className="text-center mt-8 text-sm text-[#9c8149] dark:text-[#8a7650]">
              Need help?{" "}
              <a
                className="font-bold underline hover:text-primary dark:hover:text-primary"
                href="#"
              >
                Contact Support
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ForgotPassword;
