import React from 'react';
import { useTranslation } from 'react-i18next';

const Disclaimer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="text-sm font-light  mt-4  pt-2 px-4">
            {t('disclaimer')}
        </div>
    );
};

export default Disclaimer;
