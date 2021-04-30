import axios from '@/domains/AxiosFactory';
import Card from '@/domains/card/Card';
import CardService from '@/domains/card/CardService';

export default class CardServiceImpl implements CardService {
    async getCardTags(): Promise<String[]> {
        return (await axios.get('/data/card/tags.json')).data;
    }
    async searchCard(): Promise<Card[]> {
        return (await axios.get('/data/card/cards.json')).data;
    }
    async registerCard(card: Card) {
        await axios.put('/card/register', card);
    }
}