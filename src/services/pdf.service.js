import { supabase } from '../lib/supabase';

export const getPdfs = async (lang) => {
    const fields = [
        `id`,
        `title_${lang}`,
        `pdfLink_${lang}`,
        `imgLink_${lang}`
    ].join(', ');

    const { data, error } = await supabase
        .from('pdfs')
        .select(fields);

    if (error) {
        console.error('Error obteniendo los PDFs:', error);
        return [];
    }

    return data.map((item) => ({
        id: item.id,
        title: item[`title_${lang}`],
        pdfLink: item[`pdfLink_${lang}`],
        imgLink: item[`imgLink_${lang}`],
    })).filter(pdf =>
        pdf.title && pdf.title !== 'no' &&
        pdf.pdfLink && pdf.pdfLink !== 'no' &&
        pdf.imgLink && pdf.imgLink !== 'no'
    );
};

// export const getPdfs = async () => {
//     let { data, error } = await supabase.from('pdfs').select('*');
//     if (error) {
//         console.error('Error obteniendo los PDFs:', error);
//         return [];
//     }
//     return data;
// };
