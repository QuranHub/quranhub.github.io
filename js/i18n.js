var content = {
    en: {
        translation: {
            site_title: "QuranHub | Holy Quran",
            app_name: "QuranHub",
            app_description: "Your single destination to read & study the Quran."
        }
    },
    ar: {
        translation: {
            site_title: "القرآن الكريم | QuranHub",
            app_name: "القرآن الكريم | QuranHub",
            app_description: "وجهتك الواحدة لقراءة ودراسة القرآن الكريم."
        }
    }
};


i18next.use(window.i18nextBrowserLanguageDetector).init(
    {
        debug: false,
        supportedLngs: ['en', 'ar'],
        fallbackLng: 'en',
        resources: content,
        detection: {
            // order and from where user language should be detected
            order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

            // keys or params to lookup language from
            lookupQuerystring: 'lng',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            lookupFromPathIndex: 0,
            lookupFromSubdomainIndex: 0,

            // cache user language on
            caches: ['localStorage', 'cookie'],
            excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

            // optional expire and domain for set cookie
            cookieMinutes: 10,
            cookieDomain: 'myDomain',

            // optional htmlTag with lang attribute, the default is:
            htmlTag: document.documentElement,

            // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
            cookieOptions: { path: '/' }
        }
    },
    function (err, t) {
        console.log("i18next initialized!");

        updateContent();

        $('.site-wrapper').show();
    }
);

i18next.on('languageChanged', function (lng) {
    console.log("Language changed to: " + i18next.language);

    updateContent();
})

function updateContent() {
    $('title').html(i18next.t('site_title'));
    $('#app-name').html(i18next.t('app_name'));
    $('#app-description').html(i18next.t('app_description'));

    $('html').css("direction", i18next.dir(i18next.language));
}