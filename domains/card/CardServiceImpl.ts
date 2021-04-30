import axios from '@/domains/AxiosFactory';
import Card from '@/domains/card/Card';
import CardSearch from '@/domains/card/CardSearch';
import CardService from '@/domains/card/CardService';

export default class CardServiceImpl implements CardService {
    async getCardTags(): Promise<string[]> {
        return (await axios.get('/card/tags')).data;
    }
    async registerCard(card: Card) {
        await axios.put('/card/register', card);
    }
    async updateCard(card: Card) {
        await axios.put('/card/update', card);
    }
    async searchCard(cardSearch: CardSearch): Promise<Card[]> {
        return (await axios.get('/card/search', {params: cardSearch})).data;
    }
    async deleteCard(id: string) {
        await axios.get('/card/delete', { params: { id: id} });
    }

}