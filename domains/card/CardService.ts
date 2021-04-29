export default interface CardService {
    getCardTags: () => Promise<String[]>;
}