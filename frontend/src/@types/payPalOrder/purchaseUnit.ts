import CountryCodes from '../countryCodes';
import CurrencyCodes from './currencyCodes';
import ILink from './link';

interface IPurchaseUnit {
    reference_id: string;
    amount: {
        currency_code: CurrencyCodes;
        value: string;
        breakdown: {
            item_total: {
                currency_code: CurrencyCodes;
                value: string;
            };
            shipping: {
                currency_code: CurrencyCodes;
                value: string;
            };
            tax_total: {
                currency_code: CurrencyCodes;
                value: string;
            };
        };
    };
    payee: {
        email_address: 'devdesign@devdesign.fi';
        display_data: {
            brand_name: 'DevDesign CO';
        };
    };
    description: string;
    items: [
        {
            name: string;
            unit_amount: {
                currency_code: CurrencyCodes;
                value: string;
            };
            tax: {
                currency_code: CurrencyCodes;
                value: string;
            };
            quantity: string;
            description: string;
            category: 'PHYSICAL_GOODS';
        },
        {
            name: string;
            unit_amount: {
                currency_code: CurrencyCodes;
                value: string;
            };
            tax: {
                currency_code: CurrencyCodes;
                value: string;
            };
            quantity: string;
            description: string;
            category: 'PHYSICAL_GOODS';
        },
    ];
    shipping: {
        name: {
            full_name: string;
        };
        phone_number: {
            national_number: string;
        };
        address: {
            address_line_1: string;
            admin_area_2: string;
            postal_code: string;
            country_code: CountryCodes;
        };
        type: 'SHIPPING';
    };
    payments: {
        captures: [
            {
                id: string;
                status: 'PENDING';
                status_details: {
                    reason: 'UNILATERAL';
                };
                amount: {
                    currency_code: CurrencyCodes;
                    value: string;
                };
                final_capture: true;
                seller_protection: {
                    status: 'NOT_ELIGIBLE';
                };
                links: ILink[];
                create_time: Date;
                update_time: Date;
            },
        ];
    };
}

export default IPurchaseUnit;
