import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getPdfs } from '../../services/pdf.service';

const PDFContext = createContext();

export const PDFProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [pdfsCache, setPdfsCache] = useState({});
    const [currentPdfs, setCurrentPdfs] = useState([]);

    useEffect(() => {
        const lang = i18n.language;
        if (pdfsCache[lang]) {
            setCurrentPdfs(pdfsCache[lang]);
            return;
        }
        getPdfs(lang).then((pdfs) => {
            setPdfsCache((prev) => ({ ...prev, [lang]: pdfs }));
            setCurrentPdfs(pdfs);
        });
    }, [i18n.language]);

    return (
        <PDFContext.Provider value={currentPdfs}>
            {children}
        </PDFContext.Provider>
    );
};

export const usePDFs = () => useContext(PDFContext);
