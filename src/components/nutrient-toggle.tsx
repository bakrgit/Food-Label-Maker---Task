import React from 'react';

interface NutrientToggleProps {
    nutrients: { name: string; enabled: boolean }[];
    onToggle: (name: string) => void;
}

const NutrientToggle: React.FC<NutrientToggleProps> = ({ nutrients, onToggle }) => {
    return (
        <div className="flex flex-wrap gap-4 p-4 border-b-2 border-black">
            {nutrients.map((nutrient) => (
                <label key={nutrient.name} className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={nutrient.enabled}
                        onChange={() => onToggle(nutrient.name)}
                    />
                    <span className="text-sm px-2">{nutrient.name}</span>
                </label>
            ))}
        </div>
    );
};

export default NutrientToggle;
