import React from "react";

interface Nutrient {
    name: string;
    value: number;
    unit: string | null;
    daily_value: number;
    indentations: number;
}

interface NutrientSectionProps {
    nutrient: Nutrient;
}

const NutrientSection: React.FC<NutrientSectionProps> = ({ nutrient }) => {
    if (!nutrient) {
        return <p className="text-red-500">Nutrient data is missing or invalid.</p>;
    }

    const {
        name = "Unknown Nutrient",
        value = 0,
        // unit  = "g",
        daily_value = 1,
        indentations = 0,
    } = nutrient;
// console.log("Nutrient:", nutrient);
    return (
        <div style={{ marginLeft: `${indentations * 10}px` }} className="mb-2">
            <p className="flex justify-between">
                <span>{name}</span>
                <span>
                    {Math.round(value)} {nutrient?.unit || ""} (
                    {daily_value ? Math.round((value / daily_value) * 100) : 0}%) 
                </span>
            </p>
        </div>
    );
};

export default NutrientSection;
