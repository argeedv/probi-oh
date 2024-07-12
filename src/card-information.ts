// Define the structure of a card
export interface CardInformation {
    readonly id: number;
    readonly name: string;
    readonly type: string;
    readonly desc: string;
    readonly atk?: number;
    readonly def?: number;
    readonly level?: number;
    readonly race: string;
    readonly attribute?: string;
    readonly card_images: {
        readonly id: number;
        readonly image_url: string;
        readonly image_url_small: string;
    }[];
}