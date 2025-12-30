import { atom } from "jotai";
import type { ToastMessage } from "./toast.atom.types";

export const toastAtom = atom<ToastMessage | null>(null);
