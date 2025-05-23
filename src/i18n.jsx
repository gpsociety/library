import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: { 
            translation: { 
                navLink1: 'Library',
                navLink2: 'Gallery',
                download: 'Download',
                pdfH1: 'Gain quick access to all of our educational content',
                pdfP1: 'Explore our',
                pdfP2: 'Digital Repository',
                pdfP3: 'and download interactive scientific and educational material.',
                gllH1: 'Your favourite penguins,',
                gllB: 'now on your phone!',
                gllP1: "Every month, we'll release 4K HD wallpaper celebrating penguins, Free download and use!",
                footer: 'Made to protect the environment.',
                footerP: 'Follow Us',
                comingSoon: 'Coming Soon!',
                may: 'May',
                june: 'June',
                july: ' July'
            } 
        },
        es: { 
            translation: { 
                navLink1: 'Biblioteca',
                navLink2: 'Galería',
                download: 'Descargar',
                pdfH1: 'Obten acceso rápido a todo nuestro contenido educativo',
                pdfP1: 'Explora nuestro',
                pdfP2: 'Repositorio Digital',
                pdfP3: 'y descarga materiales científicos y educativos interactivos.',
                gllH1: 'Tus pingüinos favoritos,',
                gllB: 'ahora en tu teléfono!',
                gllP1: 'Cada mes, publicaremos un fondo de pantalla 4K HD dedicado a los pingüinos. ¡Descárgalo y úsalo gratis!',
                footer: 'Beneficiamos a los pingüinos, a la gente y al Planeta.',
                footerP: 'Síguenos',
                comingSoon: 'Próximamente!',
                may: 'Mayo',
                june: 'Junio',
                july: 'Julio'
            } 
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
});

export default i18n;
