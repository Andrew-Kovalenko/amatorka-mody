import * as React from 'react';
import {useCallback, useContext, useState} from 'react';
import {
    ServicesAccordion,
    ServicesAccordionHeader,
    ServicesAccordionHeaderArrow,
    ServicesAccordionHeaderTitle,
    ServicesAccordionHeaderTitleFormat,
    ServicesAccordionItem,
    ServicesAccordionItemContent,
    ServicesAccordionItemListTitle,
    ServicesAccordionItemSummary,
    ServicesTitle,
    ServicesWrapper
} from '../styles';
import {ServiceForClientsType} from "./types";
import {NavBarContext} from "../../root/NavBarContext";
import {ServiceFormat, ServiceListType} from "../types";
import {InnerContainer} from "../../root/styles";
import {servicesList} from "./servicesList";

export const ServicesForClients: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ServiceForClientsType | null>(null)
    const navBarContext = useContext(NavBarContext);

    const toggleTab = useCallback((tab: ServiceForClientsType) => {
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
        <ServicesWrapper ref={navBarContext && navBarContext.servicesForClientsRef}>
            <InnerContainer>
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
                                    <ServicesAccordionHeaderArrow isOpen={activeTab === service.type}>
                                        +
                                    </ServicesAccordionHeaderArrow>
                                </ServicesAccordionHeader>
                                <ServicesAccordionItem isOpen={activeTab === service.type}>
                                    <ServicesAccordionItemContent isOpen={activeTab === service.type}>
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
                                        {service.details.listSummary?.map(item => <p>{item}</p>)}
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
            </InnerContainer>
        </ServicesWrapper>
    );
}
