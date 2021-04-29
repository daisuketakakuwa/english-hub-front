import axios from 'axios';
import CardService from '@/domains/card/CardService';

export default class CardServiceStub implements CardService {
    async getCardTags(): Promise<String[]> {
        return (await axios.get('/data/card/tags.json')).data;
    }
}