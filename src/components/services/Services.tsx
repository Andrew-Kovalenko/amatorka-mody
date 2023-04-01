import * as React from 'react';
import { useCallback, useContext, useState } from 'react';
import { ServicesAccordion, ServicesAccordionHeader, ServicesAccordionHeaderArrow, ServicesAccordionHeaderTitle, ServicesAccordionHeaderTitleFormat, ServicesAccordionItem, ServicesAccordionItemContent, ServicesAccordionItemListSummary, ServicesAccordionItemListTitle, ServicesAccordionItemSummary, ServicesTitle, ServicesWrapper } from './styles';
import { servicesList } from './servicesList';
import { ServiceFormat, ServiceListType, ServiceType } from './types';
import { NavBarContext } from '../root/NavBarContext';
import './styles.css'

export const Services: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ServiceType | null>(null)
    const navBarContext = useContext(NavBarContext);

    const toggleTab = useCallback((tab: ServiceType) => {
        if (activeTab === tab) {
            setActiveTab(null);

            return;
        }

        setActiveTab(tab)
    }, [activeTab])

    const getListsClass = (listType: ServiceListType): string => {
        if (listType === ServiceListType.BENEFITS) {
            return 'benefits-list'
        }

        return ''
    }

    return (
        <ServicesWrapper ref={navBarContext && navBarContext.servicesRef}>
            <ServicesTitle>
                Послуги
            </ServicesTitle>
            <ServicesAccordion>
                {
                    servicesList.map(service => ((
                        <>
                            <ServicesAccordionHeader onClick={() => toggleTab(service.type)}>
                                <ServicesAccordionHeaderTitle>
                                    {service.title}
                                </ServicesAccordionHeaderTitle>
                                {service.details.format === ServiceFormat.ALL
                                    ? (
                                        <ServicesAccordionHeaderTitleFormat>
                                            <div>ONLINE/</div>
                                            <div>OFFLINE</div>
                                        </ServicesAccordionHeaderTitleFormat>
                                    ) : (
                                        <ServicesAccordionHeaderTitleFormat>
                                            {service.details.format}
                                        </ServicesAccordionHeaderTitleFormat>
                                    )}
                                <ServicesAccordionHeaderArrow isOpen={activeTab === service.type} >
                                    +
                                </ServicesAccordionHeaderArrow>
                            </ServicesAccordionHeader>
                            <ServicesAccordionItem isOpen={ activeTab === service.type }>
                                <ServicesAccordionItemContent>
                                    {service.details.lists.map(list => ((
                                        <>
                                            <ServicesAccordionItemListTitle>{list.title}</ServicesAccordionItemListTitle>
                                            <ul className={getListsClass(list.type)}>
                                                {list.items.map(listItem => ((
                                                    <li>
                                                        {listItem.text}
                                                        {listItem.innerList && (
                                                            <ul>
                                                                {listItem.innerList.map(innerItem => ((
                                                                    <li>{innerItem}</li>
                                                                )))}
                                                            </ul>
                                                        )}
                                                    </li>
                                                )))}
                                            </ul>
                                        </>
                                    )))}
                                    <ServicesAccordionItemListSummary>
                                        {service.details.listSummary}
                                    </ServicesAccordionItemListSummary>
                                    <ServicesAccordionItemSummary>
                                        {service.details.importantNote && (
                                            <p><span>Важливо!</span> {service.details.importantNote}</p>
                                        )}
                                        <p><span>Вартість</span> - {service.details.price}</p>
                                        <p><span>Строк виконання</span> - {service.details.ETA}</p>
                                    </ServicesAccordionItemSummary>
                                </ServicesAccordionItemContent>
                            </ServicesAccordionItem>
                        </>
                    )))
                }
            </ServicesAccordion>
        </ServicesWrapper>
    );
}
