import Card from '@/domains/card/Card';

export default interface CardService {
    getCardTags: () => Promise<String[]>;
    searchCard: () => Promise<Card[]>;
}