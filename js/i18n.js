var content = {
    en: {
        translation: {
            site_title: "QuranHub | Holy Quran",
            app_name: "QuranHub",
            app_description: "Your single destination to read & study the Quran.",
            download_android: "Download for Android",
            download_ios: "Download for iOS (Coming Soon)",
            usage_data: "Used by over 15K+ users",
            language: "Language",
            read_quran_title: "Read Quran",
            read_quran_description: "Read the Holy Quran in both Hafs & Warsh recitations.",
            listen_quran_title: "Listen to Quran",
            listen_quran_description: "Listen to Quran audio by various popular reciters.",
            understand_quran_title: "Understand Quran",
            understand_quran_description: "Read Quran tafsir (explanation) & translation in various languages.",
            useful_feature: "Useful feature",
            useful_feature_title: "Search in the Quran",
            useful_feature_description: "Search with a keyword across the entire Quran or just in a Juz', Hizb, Quarter or single Sura"
        
        }
    },
    ar: {
        translation: {
            site_title: "القرآن الكريم | QuranHub",
            app_name: "القرآن الكريم | QuranHub",
            app_description: "وجهتك الواحدة لقراءة ودراسة القرآن الكريم",
            download_android: "حمّل لنظام أندرويد",
            download_ios: "حمل لنظام أبل (سيتوفر قريبا)",
            usage_data: "يستعمله أكثر من 15 ألف مستخدم",
            language: "اللغة",
            read_quran_title: "اقرأ القرآن",
            read_quran_description: "اقرأ القرآن الكريم بروايتي حفص وورش.",
            listen_quran_title: "استمع إلى القرآن",
            listen_quran_description: "استمع إلى القرآن الكريم بصوت العديد من القرّاء المشهورين.",
            understand_quran_title: "تدبّر القرآن",
            understand_quran_description: "اقرأ تفسير القرآن الكريم أو ترجمته بالعديد من اللغات.",
            useful_feature: "ميزة مفيدة",
            useful_feature_title: "البحث في القرآن",
            useful_feature_description: "ابحث عن كلمة معينة في القرآن الكريم كله أو فقط في جزء منه أو حزب أو ربع أو سورة"

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
    // The website doesn't support RTL layout direction yet
    // $('html').css("direction", i18next.dir(i18next.language));
    $('#main-features-section').css("direction", i18next.dir(i18next.language));

    setLocalizedText('title', 'site_title')
    setLocalizedText('#app-name', 'app_name')
    setLocalizedText('#app-description', 'app_description')
    setLocalizedText('.download-android', 'download_android')
    setLocalizedText('.download-ios', 'download_ios')
    setLocalizedText('#usage-data', 'usage_data')
    setLocalizedText('.lng-label', `language`)
    setLocalizedText('#read-quran-feature-title', 'read_quran_title')
    setLocalizedText('#read-quran-feature-description', 'read_quran_description')
    setLocalizedText('#listen-quran-feature-title', 'listen_quran_title')
    setLocalizedText('#listen-quran-feature-description', 'listen_quran_description')
    setLocalizedText('#understand-quran-feature-title', 'understand_quran_title')
    setLocalizedText('#understand-quran-feature-description', 'understand_quran_description')
    setLocalizedText('#useful-feature-label', 'useful_feature')
    setLocalizedText('#useful-feature-title', 'useful_feature_title')
    setLocalizedText('#useful-feature-description', 'useful_feature_description')

}

function setLocalizedText(elementSelector, localizedStrId) {
    $(elementSelector).html(i18next.t(localizedStrId))
}