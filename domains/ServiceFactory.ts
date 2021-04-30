import Config from "@/domains/Config";
import CardService from "@/domains/card/CardService";
import CardServiceStub from "@/domains/card/CardServiceStub";
import CardServiceImpl from "@/domains/card/CardServiceImpl";

export default class ServiceFactory {

    private static cardService: CardService;

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