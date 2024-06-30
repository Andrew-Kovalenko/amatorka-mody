import * as React from 'react';
import {useCallback, useContext, useState} from 'react';
import {
    ServicesAccordion,
    ServicesAccordionHeader,
    ServicesAccordionHeaderArrow,
    ServicesAccordionHeaderTitle,
    ServicesAccordionItem,
    ServicesAccordionItemContent,
    ServicesAccordionItemListTitle,
    ServicesAccordionItemSummary,
    ServicesTitle
} from '../styles';
import {servicesForBrandsList} from './servicesList';
import {ServiceForBrandsType} from './types';
import {ServiceListType} from '../types';
import {NavBarContext} from '../../root/NavBarContext';
import '../styles.css'
import {InnerContainer} from '../../root/styles';
import {ServicesWrapperForBrands} from "./styles";

export const ServicesForBrands: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ServiceForBrandsType | null>(null)
    const navBarContext = useContext(NavBarContext);

    const toggleTab = useCallback((tab: ServiceForBrandsType) => {
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
        <ServicesWrapperForBrands ref={navBarContext && navBarContext.servicesForBrandsRef}>
            <InnerContainer>
                <ServicesTitle>
                    Для брендів
                </ServicesTitle>
                <ServicesAccordion>
                    {
                        servicesForBrandsList.map(service => ((
                            <>
                                <ServicesAccordionHeader onClick={() => toggleTab(service.type)}>
                                    <ServicesAccordionHeaderTitle>
                                        {service.title}
                                    </ServicesAccordionHeaderTitle>
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
                                        {service.details.listSummary?.map((item, index) => <>
                                            {index !== 0 && <br/>}
                                            <p>{item}</p>
                                        </>)}
                                        <ServicesAccordionItemSummary>
                                            {service.details.importantNote && (
                                                <p><span>Важливо!</span> {service.details.importantNote}</p>
                                            )}
                                            {service.details.price && <p><span>Вартість</span> - {service.details.price}</p>}
                                            {service.details.ETA && <p><span>Строк виконання</span> - {service.details.ETA}</p>}
                                        </ServicesAccordionItemSummary>
                                    </ServicesAccordionItemContent>
                                </ServicesAccordionItem>
                            </>
                        )))
                    }
                </ServicesAccordion>
            </InnerContainer>
        </ServicesWrapperForBrands>
    );
}
