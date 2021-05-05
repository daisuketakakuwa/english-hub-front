import axios from "@/domains/AxiosFactory";
import User from "@/domains/user/User";
import AuthService from "@/domains/auth/AuthService";
import Auth from "@/domains/auth/Auth";

export default class AuthServiceImpl implements AuthService{

    async login(user: User): Promise<boolean> {
        const auth: Auth = (await axios.put("/auth/login", user)).data;
        if (auth.success) {
            axios.defaults.headers.common.Authorization = auth.token;
            return true;
        } else {
            return false
        }

    }

}