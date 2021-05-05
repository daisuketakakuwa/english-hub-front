import User from "@/domains/user/User";

export default interface AuthService {
    login: (user: User) => Promise<boolean>;
}