import React from 'react';
import { useTranslation } from 'react-i18next';

interface Nutrient {
    name: string;
    value: number;
    unit: string;
    dailyValue: number;
    indentations: number;
    section: string;
    order: number;
}

interface NutrientListProps {
    nutrients: Nutrient[];
}

const NutrientList: React.FC<NutrientListProps> = ({ nutrients }) => {
    const { i18n, t } = useTranslation();

    // Group nutrients by section and sort them
    const groupedNutrients = nutrients.reduce((acc: any, nutrient) => {
        const section = nutrient.section || 'Other';
        if (!acc[section]) {
            acc[section] = [];
        }
        acc[section].push(nutrient);
        return acc;
    }, {});

    // Sort sections and nutrients
    const sortedSections = Object.keys(groupedNutrients).sort();
    sortedSections.forEach((section) => {
        groupedNutrients[section].sort((a: Nutrient, b: Nutrient) => a.order - b.order);
    });

    return (
        <div className="px-4 border-t-thick border-black">
            {/* Header with % Daily Value */}
            <div
                className={`flex ${i18n.language === 'ar' ? 'flex-row-reverse' : ''
                    } justify-between text-sm py-2`}
            >
                <span className="font-bold text-lg">
                  
                </span>
                <span className="font-bold text-lg">
                    {i18n.language === 'ar' ? '% القيمة اليومية *' : '% Daily Value *'}
                </span>
            </div>
            {/* Border under "% Daily Value *" */}
            <div className="border-b border-black mb-2" />

            {sortedSections.map((section, index) => (
                <div key={index}>
                    {/* Section Title */}
                    <h3 className="text-xl font-bold mt-1">{section}</h3>

                    {/* Nutrient Items */}
                    {groupedNutrients[section].map((nutrient: any, i: number) => (
                        <div
                            key={i}
                            className={`flex  justify-between items-center border-b border-black py-2`}
                            style={{
                                paddingRight: i18n.language === 'ar' ? `${nutrient.indentations * 16}px` : '0',
                                paddingLeft: i18n.language === 'en' ? `${nutrient.indentations * 16}px` : '0',
                            }}
                        >
                            <span
                                className={`${nutrient.indentations === 0
                                    ? 'font-bold text-lg'
                                    : 'text-sm text-gray-700 italic'
                                    }`}
                            >
                                {nutrient.name} <span className="ml-2">{Math.round(nutrient.value)} {'g'}</span>
                            </span>
                            <span className="font-bold text-sm">
                                {nutrient.dailyValue
                                    ? `${Math.round((nutrient.value / nutrient.dailyValue) * 100)}%`
                                    : '0%'}
                            </span>
                        </div>
                    ))}

                    {/* Separator for Sections */}
                    {index < sortedSections.length - 1 && (
                        <div
                            className="border-black mt-4"
                            style={{
                                width: '100%',
                                borderBottomWidth: '8px',
                            }}
                        />
                    )}
                </div>
            ))}

            {/* Final Bottom Border */}
            <div
                className="border-black"
                style={{
                    width: '100%',
                    borderBottomWidth: '12px',
                }}
            />
        </div>
    );
};

export default NutrientList;
