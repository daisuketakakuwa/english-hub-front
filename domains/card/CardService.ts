import Card from '@/domains/card/Card';
import CardSearch from '@/domains/card/CardSearch';

export default interface CardService {
    getCardTags: () => Promise<string[]>;
    searchCard: (cardSearch: CardSearch) => Promise<Card[]>;
    registerCard: (card: Card) => void;
}