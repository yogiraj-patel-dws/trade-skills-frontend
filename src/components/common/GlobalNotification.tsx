import { useEffect } from "react";
import { notification } from "antd";
import { useAtom } from "jotai";
import { toastAtom } from "../../atoms";

const GlobalNotification = () => {
  const [toast, setToast] = useAtom(toastAtom);
  const [api, contextHolder] = notification.useNotification();

  // how can you call it
  //   setToast({
  //   type: "error",
  //   title: "Unauthorized",
  //   description: "Please login again",
  //   placement: "bottomRight",
  // });

  useEffect(() => {
    if (!toast) return;

    api[toast.type ?? "info"]({
      title: toast.title,
      description: toast.description,
      placement: toast.placement ?? "topRight",
      duration: toast.duration ?? 3,
    });

    // reset after showing
    setToast(null);
  }, [toast, api, setToast]);

  return <>{contextHolder}</>;
};

export default GlobalNotification;
