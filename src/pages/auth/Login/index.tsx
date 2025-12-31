import { useNavigate, Link } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { ROUTES } from "../../../constants/routes";
import { useAppMutation } from "../../../react-query/useAppMutation";
import { authService } from "../../../services/auth/auth.service";
import type { LoginPayload } from "../../../services/auth/auth.types";

import { useSetAtom } from "jotai";
import {
  tokenAtom,
  userIdAtom,
  roleAtom,
  firstNameAtom,
  lastNameAtom,
} from "../../../atoms/auth/auth.atoms";

const Login = () => {
  const navigate = useNavigate();
  const setToken = useSetAtom(tokenAtom);
  const setUserId = useSetAtom(userIdAtom);
  const setRole = useSetAtom(roleAtom);
  const setFirstName = useSetAtom(firstNameAtom);
  const setLastName = useSetAtom(lastNameAtom);

  const { mutate: login, isPending } = useAppMutation(
    (values: LoginPayload) => authService.login(values),
    {
      onSuccess: (response) => {
        console.log("Login successful:", response);
        const { token, user } = response.data;
        setToken(token);
        setUserId(user.id);
        setRole(user.role);
        setFirstName(user.profile.firstName);
        setLastName(user.profile.lastName);

        message.success("Login successful!");
        navigate(ROUTES.DASHBOARD);
      },
      onError: (error) => {
        console.error("Login error:", error);
        message.error(error.message || "Login failed. Please try again.");
      },
    }
  );

  const onFinish = (values: LoginPayload) => {
    console.log("Form submitted with values:", values);
    login(values);
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center relative overflow-hidden text-[#1c170d] dark:text-[#fcfbf8]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen dark:bg-primary/5"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] bg-[#e8e0ce]/40 dark:bg-primary/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="layout-container flex flex-col items-center justify-center w-full max-w-[480px] p-4 z-10">
        <div className="w-full bg-white/70 dark:bg-[#2c2415]/60 backdrop-blur-xl border border-white/60 dark:border-white/10 rounded-[2.5rem] shadow-2xl p-8 sm:p-10 relative overflow-hidden ring-1 ring-white/40 dark:ring-transparent">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

          {/* HEADER */}
          <div className="flex flex-col items-center text-center gap-4 mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/40 rounded-2xl blur-lg group-hover:bg-primary/60 transition-all duration-500"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-[#4ade80] rounded-2xl flex items-center justify-center shadow-lg text-[#221c10] transform transition-transform group-hover:scale-105 duration-300">
                <span className="material-symbols-outlined text-4xl">
                  diversity_3
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-[#1c170d] dark:text-white">
                Welcome Back
              </h1>
              <p className="text-[#9c8149] dark:text-[#d4c5a3] text-sm font-medium leading-relaxed max-w-[260px] mx-auto">
                Enter your details to access your skill exchange community.
              </p>
            </div>
          </div>

          {/* FORM */}
          <Form
            className="flex flex-col gap-5"
            onFinish={onFinish}
            layout="vertical"
            preserve={false}
          >
            {/* EMAIL */}
            <div className="space-y-1.5 group">
              <label
                htmlFor="email"
                className="text-xs font-bold uppercase tracking-wider text-[#9c8149] dark:text-[#b0a182] ml-4"
              >
                Email Address
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-[#9c8149]/70 group-focus-within:text-primary transition-colors text-[20px]">
                    alternate_email
                  </span>
                </div>

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
                    className="w-full h-14 pr-5 bg-white dark:bg-[#221c10] border border-[#e8e0ce] dark:border-[#4a3e2a] rounded-full text-[#1c170d] dark:text-[#fcfbf8] placeholder:text-[#9c8149]/50 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm font-medium"
                  />
                </Form.Item>
              </div>

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

            {/* PASSWORD */}
            <div className="space-y-1.5 group">
              <label
                htmlFor="password"
                className="text-xs font-bold uppercase tracking-wider text-[#9c8149] dark:text-[#b0a182] ml-4"
              >
                Password
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-[#9c8149]/70 group-focus-within:text-primary transition-colors text-[20px]">
                    lock_open
                  </span>
                </div>

                <Form.Item
                  name="password"
                  noStyle
                  rules={[{ required: true, message: "Password is required" }]}
                >
                  <Input.Password
                    id="password"
                    placeholder="••••••••"
                    visibilityToggle={false}
                    className="w-full h-14 pr-5 bg-white dark:bg-[#221c10] border border-[#e8e0ce] dark:border-[#4a3e2a] rounded-full text-[#1c170d] dark:text-[#fcfbf8] placeholder:text-[#9c8149]/50 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm font-medium"
                  />
                </Form.Item>
              </div>

              <Form.Item shouldUpdate noStyle>
                {({ getFieldError }) =>
                  getFieldError("password")[0] && (
                    <div className="ml-4 text-xs text-red-500">
                      {getFieldError("password")[0]}
                    </div>
                  )
                }
              </Form.Item>

              <div className="flex justify-end px-2 pt-1">
                <Link
                  to={ROUTES.FORGOT_PASSWORD}
                  className="text-sm font-semibold text-[#9c8149] hover:text-primary dark:text-[#b0a182] dark:hover:text-primary transition-colors decoration-primary/30 underline-offset-4 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* SUBMIT */}
            <Button
              htmlType="submit"
              loading={isPending}
              disabled={isPending}
              className="mt-2 w-full h-14 bg-gradient-to-r from-primary to-[#4ade80] hover:to-primary text-[#221c10] font-bold text-lg rounded-full shadow-glow transform active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group/btn"
            >
              <span>{isPending ? "Logging in..." : "Log In"}</span>
              {!isPending && (
                <span className="material-symbols-outlined text-[20px] font-bold group-hover/btn:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              )}
            </Button>
          </Form>

          {/* OR */}
          <div className="relative my-6 flex items-center py-2">
            <div className="flex-grow border-t border-[#e8e0ce] dark:border-[#4a3e2a]"></div>
            <span className="flex-shrink-0 mx-4 text-[#9c8149] text-xs font-bold uppercase tracking-wider">
              or
            </span>
            <div className="flex-grow border-t border-[#e8e0ce] dark:border-[#4a3e2a]"></div>
          </div>

          {/* GOOGLE */}
          {/* <button
            className="w-full h-14 bg-white dark:bg-[#221c10] border border-[#e8e0ce] dark:border-[#4a3e2a] rounded-full text-[#1c170d] dark:text-[#fcfbf8] font-bold text-sm hover:bg-[#fcfbf8] dark:hover:bg-[#2c2415] hover:border-[#d4c5a3] dark:hover:border-[#5c4d35] transition-all flex items-center justify-center gap-3 shadow-sm active:scale-[0.98]"
            type="button"
          >
            <div className="w-5 h-5 relative flex items-center justify-center">
              <img
                alt="Google Logo"
                className="w-full h-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQsMz3__aMeebjnRgJww5PmMI1w7yGABI0jd5trfCVWyqaUkotXOxQ9rCRll4xmPzQ2J2cdu_JyDF272a2vOA3r6zF4YRGDuBAEHAZ7OnOLDrvoxU8NKUZYQNBHXKGJvtMlMY_dd752p2in7cYwlaBoMio2638K-9sJnMsXBI4er9dEkqR_loC_gIOlBM4ENxy8rCvVny1fFUDs5_HbfOXvtzzQ42DLRKUqjcFYtGWFfYuhOjWKC9l7L2PjEENaXBKcG0VNB3KKsk"
              />
            </div>
            <span>Continue with Google</span>
          </button> */}

          <div className="mt-8 text-center">
            <p className="text-[#9c8149] dark:text-[#b0a182] text-sm">
              Don't have an account?
              <Link
                to={ROUTES.SIGNUP}
                className="text-[#1c170d] dark:text-primary font-bold hover:text-primary dark:hover:text-[#4ade80] transition-colors ml-1"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs font-medium text-[#9c8149]/60 dark:text-[#b0a182]/40">
          © 2024 TradeSkill Platform
        </p>
      </div>
    </div>
  );
};

export default Login;
