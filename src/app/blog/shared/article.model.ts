import { Tag } from './tag.model';

export interface Article {
    id: number;
    auteur: String;
    contenu: String;
    datePublication: Date;
    description: String;
    imgUrl: String;
    titre: String;
    note: number;
    tags: Tag[];
    // temps: String;
}
