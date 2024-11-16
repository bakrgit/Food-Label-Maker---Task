import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import data from './data/response.json';
import { Disclaimer, LabelHeader, NutrientToggle, NutrientList } from './components';

const App: React.FC = () => {
  const { label } = data;
  const {  i18n } = useTranslation();

  const [nutrients, setNutrients] = useState(
    Object.entries(label.serving).map(([_ , value]: any) => ({
      name: value.name,
      value: value.value,
      unit: value.unit,
      dailyValue: value.daily_value,
      indentations: value.indentations || 0,
      enabled: value.enabled === 1,
      section: value.section || '',
      order: value.order || 0,
    }))
  );

  const handleToggle = (name: string) => {
    setNutrients((prev) =>
      prev.map((nutrient) =>
        nutrient.name === name ? { ...nutrient, enabled: !nutrient.enabled } : nutrient
      )
    );
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  const enabledNutrients = nutrients.filter((nutrient) => nutrient.enabled);

  return (
    <div
      className={`max-w-md mx-auto border-thick border-black ${i18n.language === 'ar' ? 'rtl' : 'ltr'
        }`}
      style={{
        fontFamily: i18n.language === 'ar' ? 'Noto Sans Arabic' : 'Roboto',
        direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
      }}
    >
      <button
        onClick={toggleLanguage}
        className="bg-black text-white px-4 py-2 mb-4 ml-4"
      >
        {i18n.language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      </button>

      <NutrientToggle nutrients={nutrients} onToggle={handleToggle} />
      <LabelHeader
        servings={label.amounts.number_of_servings}
        servingSize={label.amounts.serving}
        calories={label.serving.Calories.value}
      />
      <NutrientList nutrients={enabledNutrients} />
      <Disclaimer />
    </div>
  );
};

export default App;
