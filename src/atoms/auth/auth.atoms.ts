import { atomWithStorage } from "jotai/utils";

export const tokenAtom = atomWithStorage<string | null>("tradeSkill_token", null);
export const userIdAtom = atomWithStorage<string | null>("tradeSkill_userId", null);
export const roleAtom = atomWithStorage<string | null>("tradeSkill_role", null);
export const firstNameAtom = atomWithStorage<string | null>("tradeSkill_firstName", null);
export const lastNameAtom = atomWithStorage<string | null>("tradeSkill_lastName", null);

