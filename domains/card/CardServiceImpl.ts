import axios from 'axios';
import CardService from '@/domains/card/CardService';

export default class CardServiceImpl implements CardService {
    async getCardTags(): Promise<String[]> {
        return (await axios.get('/data/card/tags.json')).data;
    }
}