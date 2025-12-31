import { atom } from 'jotai';
import type { UserSkill } from '../../services/user/user.service';

export const skillsAtom = atom<UserSkill[]>([]);

export const categoriesAtom = atom((get) => {
    const skills = get(skillsAtom);
    const categories = skills.map((skill) => skill.category);
    return [...new Set(categories)]; // Unique categories
});
