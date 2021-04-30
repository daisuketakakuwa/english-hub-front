import axios from '@/domains/AxiosFactory';
import Card from '@/domains/card/Card';
import CardSearch from '@/domains/card/CardSearch';
import CardService from '@/domains/card/CardService';

export default class CardServiceStub implements CardService {
    async getCardTags(): Promise<string[]> {
        return (await axios.get('/data/card/tags.json')).data;
    }
    async registerCard(card: Card) {}
    async updateCard(card: Card) {}
    async searchCard(cardSearch: CardSearch): Promise<Card[]> {
        return (await axios.get('/data/card/cards.json')).data;
    }
    async deleteCard(id: string) {}

}