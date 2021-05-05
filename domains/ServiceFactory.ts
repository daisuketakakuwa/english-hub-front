import AuthService from "@/domains/auth/AuthService";
import AuthServiceImpl from "@/domains/auth/AuthServiceImpl";
import CardService from "@/domains/card/CardService";
import CardServiceImpl from "@/domains/card/CardServiceImpl";
import CardServiceStub from "@/domains/card/CardServiceStub";
import Config from "@/domains/Config";
export default class ServiceFactory {

    private static cardService: CardService;
    private static authService: AuthService;

    static async getAuthService() {
        if (!this.authService) {
            return new AuthServiceImpl();
        }
        return this.authService;
    }

    static async getCardService() {
        if (!this.cardService) {
            this.cardService = (await this.isStub())
                ? new CardServiceStub()
                : new CardServiceImpl();
        }
        return this.cardService;
    }

    private static async isStub() {
        return new Config().getStub();
    }    

}