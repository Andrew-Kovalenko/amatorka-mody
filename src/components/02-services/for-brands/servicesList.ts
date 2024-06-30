import {IService, ServiceFormat, ServiceListType} from "../types";
import {ServiceForBrandsType} from "./types";

export const servicesForBrandsList: IService<ServiceForBrandsType>[] = [
    {
        type: ServiceForBrandsType.UGS_CONTENT,
        title: 'UGC контент',
        details: {
            price: 'від 1500 гривень за відео або бартерна співпраця за погодженням',
            format: ServiceFormat.ONLINE,
            ETA: '2-5 робочих днів з моменту узгодження ТЗ та отримання товару(-рів).',
            lists: [
                {
                    title: 'Що входить в послугу?',
                    type: ServiceListType.SERVICE_CONTAINS,
                    items: [
                        {text: 'узгодження концепції/сценарію;'},
                        {text: 'зйомка на iPhone: розпаковка/огляд товару, grwm (збираємось зі мною), стилізація образу/конкретного товару, огляд магазину - інші варіанти за запитом;'},
                        {text: 'публікація матеріалу в моїй стрічці та сторіз (за потреби).'},
                    ]
                },
            ],
        },
    },
    {
        type: ServiceForBrandsType.PHOTOS_ON_IPHONE,
        title: 'Streetstyle або студійні зйомки на iPhone',
        details: {
            price: 'від 2500 гривень (залежить від кількості товарів)',
            format: ServiceFormat.ONLINE,
            ETA: '5-7 робочих днів з моменту узгодження ТЗ та отримання товару(-рів)',
            lists: [
                {
                    title: 'Що входить в послугу?',
                    type: ServiceListType.SERVICE_CONTAINS,
                    items: [
                        {text: 'підбір референсів та узгодження концепції/сценарію зйомки (створення мудборду);'},
                        {text: 'допомога у підборі локацій;'},
                        {text: 'рекомендації щодо стилізації речей/образів;'},
                        {text: 'зйомка на iPhone (у ролі моделі виступатиму я);'},
                        {text: 'відретушований/змонтований матеріали.'},
                    ]
                },
            ],
        },
    },
    {
        type: ServiceForBrandsType.LESSONS,
        title: 'Лекції про моду та стиль',
        details: {
            format: ServiceFormat.ONLINE,
            lists: [],
            listSummary: [
                'Підійде для клієнтів та персоналу.',
                'Тема, локація, вартість та ін. узгоджується індивідуально.'
            ],
        },
    },
]
