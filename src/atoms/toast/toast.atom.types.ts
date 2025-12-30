import type { NotificationArgsProps } from "antd";

export type ToastMessage = {
  type?: "success" | "info" | "warning" | "error";
  title: string;
  description?: string;
  placement?: NotificationArgsProps["placement"];
  duration?: number;
};
