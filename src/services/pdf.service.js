import { supabase } from '../lib/supabase';

export const getPdfs = async () => {
    let { data, error } = await supabase.from('pdfs').select('*');
    if (error) {
        console.error('Error obteniendo los PDFs:', error);
        return [];
    }
    return data;
};
