import axios from '@/domains/AxiosFactory';
import Card from '@/domains/card/Card';
import CardService from '@/domains/card/CardService';

export default class CardServiceStub implements CardService {
    async getCardTags(): Promise<String[]> {
        return (await axios.get('/data/card/tags.json')).data;
    }
    async searchCard(): Promise<Card[]> {
        return (await axios.get('/data/card/cards.json')).data;
    }
    async registerCard(card: Card) {
        alert(card.content);
    }
}