import { useNavigate, useSearchParams } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { ROUTES } from "../../../constants/routes";
import { useAppMutation } from "../../../react-query/useAppMutation";
import { authService } from "../../../services/auth/auth.service";
import type { ResetPasswordPayload } from "../../../services/auth/auth.types";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const { mutate: resetPassword, isPending } = useAppMutation(
    (values: ResetPasswordPayload) => authService.resetPassword(values),
    {
      onSuccess: () => {
        message.success("Password reset successfully!");
        navigate(ROUTES.LOGIN);
      },
      onError: (error) => {
        message.error(
          error.message || "Failed to reset password. Please try again."
        );
      },
    }
  );

  const onFinish = (values: { password: string }) => {
    if (!token) {
      message.error("Invalid or missing token.");
      return;
    }
    resetPassword({ token, password: values.password });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100 rounded-full blur-[120px] mix-blend-multiply filter dark:mix-blend-normal dark:bg-emerald-900"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-100 rounded-full blur-[120px] mix-blend-multiply filter dark:mix-blend-normal dark:bg-blue-900"></div>
        <div className="absolute top-[30%] left-[40%] w-[30vw] h-[30vw] bg-green-100 rounded-full blur-[100px] mix-blend-multiply filter dark:mix-blend-normal dark:bg-background-dark"></div>
      </div>

      <main className="flex-grow flex items-center justify-center px-4 py-8 relative z-10">
        <div className="w-full max-w-[520px] bg-white/70 dark:bg-surface-dark/60 glass-card border border-white/50 dark:border-white/10 shadow-soft rounded-[32px] p-8 md:p-10 transition-all duration-300">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
              <span className="material-symbols-outlined text-[32px]">
                lock_reset
              </span>
            </div>
            <h1 className="text-text-main-light dark:text-text-main-dark text-3xl font-extrabold tracking-tight mb-3">
              Reset your password
            </h1>
            <p className="text-text-sub-light dark:text-text-sub-dark text-base font-medium">
              Create a new secure password to get back to learning and teaching.
            </p>
          </div>

          {/* FORM */}
          <Form className="flex flex-col gap-6" onFinish={onFinish}>
            {/* NEW PASSWORD */}
            <div>
              <label
                htmlFor="new-password"
                className="block text-text-main-light dark:text-text-main-dark text-sm font-bold mb-2 ml-4"
              >
                New Password
              </label>

              <div className="relative group">
                <Form.Item
                  name="password"
                  noStyle
                  rules={[
                    { required: true, message: "Password is required" },
                    {
                      min: 8,
                      message: "Password must be at least 8 characters",
                    },
                  ]}
                >
                  <Input.Password
                    id="new-password"
                    placeholder="Enter new password"
                    visibilityToggle={false}
                    className="w-full h-14 pl-6 pr-12 rounded-full border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark/50 text-text-main-light dark:text-text-main-dark placeholder:text-text-sub-light/70 dark:placeholder:text-text-sub-dark/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-200 outline-none"
                  />
                </Form.Item>
              </div>

              {/* ERROR */}
              <Form.Item shouldUpdate noStyle>
                {({ getFieldError }) =>
                  getFieldError("password")[0] && (
                    <div className="mt-2 ml-4 text-xs text-red-500">
                      {getFieldError("password")[0]}
                    </div>
                  )
                }
              </Form.Item>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-text-main-light dark:text-text-main-dark text-sm font-bold mb-2 ml-4"
              >
                Confirm Password
              </label>

              <div className="relative group">
                <Form.Item
                  name="confirmPassword"
                  noStyle
                  dependencies={["password"]}
                  rules={[
                    { required: true, message: "Please confirm password" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Passwords do not match")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    id="confirm-password"
                    placeholder="Re-enter new password"
                    visibilityToggle={true}
                    className="w-full h-14 pl-6 pr-12 rounded-full border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark/50 text-text-main-light dark:text-text-main-dark placeholder:text-text-sub-light/70 dark:placeholder:text-text-sub-dark/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-200 outline-none"
                  />
                </Form.Item>
              </div>

              {/* ERROR */}
              <Form.Item shouldUpdate noStyle>
                {({ getFieldError }) =>
                  getFieldError("confirmPassword")[0] && (
                    <div className="mt-2 ml-4 text-xs text-red-500">
                      {getFieldError("confirmPassword")[0]}
                    </div>
                  )
                }
              </Form.Item>
            </div>

            {/* ACTIONS */}
            <div className="pt-4 flex flex-col gap-4">
              <Button
                htmlType="submit"
                loading={isPending}
                disabled={isPending}
                className="w-full h-14 bg-primary hover:bg-primary-dark hover:-translate-y-0.5 shadow-[0_4px_14px_0_rgba(43,238,121,0.39)] hover:shadow-[0_6px_20px_rgba(43,238,121,0.23)] text-text-main-light font-bold text-lg rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>{isPending ? "Resetting..." : "Reset Password"}</span>
                {!isPending && (
                  <span className="material-symbols-outlined text-[20px] font-bold">
                    arrow_forward
                  </span>
                )}
              </Button>

              <a
                href={ROUTES.LOGIN}
                className="text-center text-text-sub-light dark:text-text-sub-dark hover:text-text-main-light dark:hover:text-white font-semibold text-sm transition-colors py-2 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">
                  arrow_back
                </span>
                Back to Log In
              </a>
            </div>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default ResetPassword;
