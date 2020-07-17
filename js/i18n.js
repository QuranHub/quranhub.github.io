var content = {
    en: {
        translation: {
            hello: "hello world"
        }
    },
    ar: {
        translation: {
            hello: "مرحبا بالعالم."
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

        $('body').show();
    }
);

i18next.on('languageChanged', function (lng) {
    console.log("Language changed to: " + i18next.language);

    updateContent();
})

function updateContent() {
    $('title').html(i18next.t('hello'));
    $('#appname').html(i18next.t('hello'));

    $('html').css("direction", i18next.dir(i18next.language));
}