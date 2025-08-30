// frontend/js/language.js
document.addEventListener('DOMContentLoaded', () => {
    let currentLanguage = localStorage.getItem('language') || (navigator.language.startsWith('vi') ? 'vi' : 'en');

    const applyTranslations = () => {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[currentLanguage] && translations[currentLanguage][key]) {
                element.innerText = translations[currentLanguage][key];
            }
        });

        document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
            const key = element.getAttribute('data-lang-placeholder');
            if (translations[currentLanguage] && translations[currentLanguage][key]) {
                element.placeholder = translations[currentLanguage][key];
            }
        });

        // FIX: Update language switcher text to show CURRENT language
        const langSwitchers = document.querySelectorAll('.language-switcher-text');
        langSwitchers.forEach(switcher => {
            switcher.textContent = currentLanguage === 'vi' ? 'Tiếng Việt' : 'English';
        });
        // END FIX

        // Update HTML lang attribute
        document.documentElement.lang = currentLanguage === 'vi' ? 'vi' : 'en';
    };

    window.setLanguage = (lang) => {
        if (lang !== 'vi' && lang !== 'en') {
            console.error('Unsupported language:', lang);
            return;
        }
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        applyTranslations();
        
        // Trigger re-render of dynamic components if they are visible
        if (typeof kiemtradangnhap === 'function') kiemtradangnhap();
        if (typeof renderOrderProduct === 'function' && document.getElementById('order-history')?.classList.contains('open')) {
            renderOrderProduct();
        }
    };

    window.getLangText = (key) => {
        return translations[currentLanguage][key] || key;
    };

    // Initialize listeners for all language switchers
    document.querySelectorAll('.language-switcher').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = currentLanguage === 'vi' ? 'en' : 'vi';
            setLanguage(newLang);
        });
    });

    // Initial translation apply
    applyTranslations();
});