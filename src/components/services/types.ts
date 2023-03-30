export enum ServiceType {
    LINES = 'LINES',
    CUPSULA = 'CUPSULA',
    WARDROBE_REVIEW = 'WARDROBE_REVIEW',
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
}

export interface IServicesDetails {
    price: string,
    format: ServiceFormat,
    ETA: string,
    importantNote?: string,
    lists: IServicesList[],
    listSummary?: string,
}

export interface IServicesList {
    title: string,
    items: IServicesListItem[],
}

export type ServicesBenefits = Record<ServiceType, IServicesList>

export interface IServicesListItem {
    text: string,
    innerList?: string[],
}
