export enum ServiceType {
    LINES = 'LINES',
    CUPSULA = 'CUPSULA',
    WARDROBE_OFFLINE = 'WARDROBE_OFFLINE',
    WARDROBE_ONLINE = 'WARDROBE_ONLINE',
    WARDROBE_STYLING = 'WARDROBE_STYLING',
    STYLIST_FOR_YEAR = 'STYLIST_FOR_YEAR',
}

export enum ServiceFormat {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
    ALL = 'ALL',
}

export interface IService {
    type: ServiceType,
    title: string,
    details: IServicesDetails,
    notes?: string;
}

export interface IServicesDetails {
    price: string,
    format: ServiceFormat,
    ETA: string,
    lists: IServicesList[],
    listSummary?: string,
}

export interface IServicesList {
    title: string,
    items: IServicesListItem[],
}

export interface IServicesListItem {
    text: string,
    innerList?: string[],
}
