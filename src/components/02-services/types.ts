export enum ServiceFormat {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  ALL = 'ALL',
}

export enum ServiceListType {
  NEED_BECAUSE = 'NEED_BECAUSE',
  SCHEME = 'SCHEME',
  BENEFITS = 'BENEFITS',
  SERVICE_CONTAINS = 'SERVICE_CONTAINS',
}

export interface IService<ServiceType> {
  type: ServiceType,
  title: string,
  details: IServicesDetails,
}

export interface IServicesDetails {
  price?: string,
  format: ServiceFormat | null,
  ETA?: string,
  importantNote?: string,
  lists: IServicesList[],
  listSummary?: string[],
}

export interface IServicesList {
  title: string,
  type: ServiceListType;
  items: IServicesListItem[],
}

export interface IServicesListItem {
  text: string,
  innerList?: string[],
}
