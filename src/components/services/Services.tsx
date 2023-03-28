import * as React from 'react';
import { useCallback, useContext, useState } from 'react';
import { ServicesAccordion, ServicesAccordionHeader, ServicesAccordionHeaderArrow, ServicesAccordionHeaderTitle, ServicesAccordionHeaderTitleFormat, ServicesAccordionItem, ServicesAccordionItemContent, ServicesAccordionItemListSummary, ServicesAccordionItemListTitle, ServicesAccordionItemSummary, ServicesTitle, ServicesWrapper } from './styles';
import { servicesList } from './servicesList';
import { ServiceType } from './types';
import { NavBarContext } from '../root/NavBarContext';

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
                                <ServicesAccordionHeaderTitleFormat>
                                    {service.details.format}
                                </ServicesAccordionHeaderTitleFormat>
                                <ServicesAccordionHeaderArrow isOpen={activeTab === service.type} >
                                    +
                                </ServicesAccordionHeaderArrow>
                            </ServicesAccordionHeader>
                            <ServicesAccordionItem isOpen={ activeTab === service.type }>
                                <ServicesAccordionItemContent>
                                    {service.details.lists.map(list => ((
                                        <>
                                            <ServicesAccordionItemListTitle>{list.title}</ServicesAccordionItemListTitle>
                                            <ul>
                                                {list.items.map(listItem => ((
                                                    <li>
                                                        {listItem.text}
                                                        {listItem.innerList && (
                                                            <ol>
                                                                {listItem.innerList.map(innerItem => ((
                                                                    <li>{innerItem}</li>
                                                                )))}
                                                            </ol>
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
