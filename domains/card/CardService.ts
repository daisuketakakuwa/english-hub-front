import Card from '@/domains/card/Card';
import CardSearch from '@/domains/card/CardSearch';

export default interface CardService {
    getCardTags: () => Promise<string[]>;
    registerCard: (card: Card) => void;
    updateCard: (card: Card) => void;
    searchCard: (cardSearch: CardSearch) => Promise<Card[]>;
    deleteCard: (id: string) => void;

}