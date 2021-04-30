import axios from 'axios';
import Card from '@/domains/card/Card';
import CardService from '@/domains/card/CardService';

export default class CardServiceImpl implements CardService {
    async getCardTags(): Promise<String[]> {
        return (await axios.get('/data/card/tags.json')).data;
    }
    async searchCard(): Promise<Card[]> {
        return (await axios.get('/data/card/cards.json')).data;
    }
}