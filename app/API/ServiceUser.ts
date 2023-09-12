import { User } from "../INTERFACES/USER_INTERFACES";

export const getUsers = async (): Promise<{ success: boolean; data: User[] }> => {
    try {
        const response = await fetch("https://6172cfe5110a740017222e2b.mockapi.io/elements");
        if (!response.ok) {
          return { success: false, data: [] };
        }
    
        const users: User[] = await response.json();
        return { success: true, data: users };
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
        return { success: false, data: [] };
      }
}