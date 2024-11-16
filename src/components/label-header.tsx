import React from 'react';
import { useTranslation } from 'react-i18next';

interface LabelHeaderProps {
    servings: number;
    servingSize: number;
    calories: number;
}

const LabelHeader: React.FC<LabelHeaderProps> = ({ servings, servingSize, calories }) => {
    const { t } = useTranslation();

    return (
        <div className="px-4">
            {/* "Nutrition Facts" Heading */}
            <div className="text-center relative">
                <h1 className="text-6xl font-extrabold leading-none">{t('nutritionFacts')}</h1>
                {/* Border below "Nutrition Facts" */}
                <div
                    className="mx-auto mt-2 border-black"
                    style={{
                        width: '95%',
                        borderBottomWidth: '3px', // Bold border
                    }}
                />
            </div>

            {/* Serving Information */}
            <p className="text-lg mt-4">{t('servingPerContainer', { count: servings })}</p>
            <div className="flex justify-between items-center mt-2 text-2xl font-bold">
                <p>{t('servingSize')}</p>
                <p>{servingSize}g</p>
            </div>
            {/* Border below "Serving Size" */}
            <div
                className="mx-auto border-black"
                style={{
                    width: '100%',
                    borderBottomWidth: '25px',
                    marginTop: '8px',
                }}
            />

            {/* Amount Per Serving */}
            <div className="">
                <h2 className="text-xl font-bold ">{t('amountPerServing')}</h2>
            </div>

            {/* Calories Section */}
            <div className="flex flex-col justify-center items-center mt-1 pt-2">
                <div className="flex justify-between w-full">
                    <h2 className="text-6xl font-bold">{t('calories')}</h2>
                    <span className="text-7xl font-black leading-none">{Math.round(calories)}</span>
                </div>
                {/* Border below "Calories" */}
                <div
                    className="mx-auto border-black"
                    style={{
                        width: '100%',
                        borderBottomWidth: '10px',
                        marginTop: '8px',
                    }}
                />
            </div>
        </div>
    );
};

export default LabelHeader;
