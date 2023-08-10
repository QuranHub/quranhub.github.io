var content = {
    en: {
        translation: {
            site_title: "QuranHub | Holy Quran",
            app_name: "QuranHub",
            app_description: "Your single destination to read & study the Quran.",
            download_android: "Download for Android",
            download_ios: "Download for iOS (Coming Soon)",
            usage_data: "Used by over 100K+ users",
            language: "Language",
            read_quran_title: "Read Quran",
            read_quran_description: "Read the Holy Quran in both Hafs & Warsh recitations.",
            listen_quran_title: "Listen to Quran",
            listen_quran_description: "Listen to Quran audio by various popular reciters.",
            understand_quran_title: "Understand Quran",
            understand_quran_description: "Read Quran tafsir (explanation) & translation in various languages.",
            useful_feature: "Useful feature",
            useful_feature_title: "Search in the Quran",
            useful_feature_description: "Search with a keyword across the entire Quran or just in a Juz', Hizb, Quarter or single Sura.",
            highlight_verse_title: "Highlight a verse to show more options",
            bookmarks_feature_title: "Bookmarks & notes",
            bookmarks_feature_description: "Bookmark a verse or add a text & audio note to it to help you in studying & memorizing the Quran.",
            share_feature_title: "Share",
            share_feature_description: "Share a verse text via other apps.",
            screenshots_section_title: "Take a closer look",
            screenshots_section_description: "QuranHub has many features that you'll find useful",
            download_now: "Download it now",
            created_with_love: "Created with ❤️ in Cairo, Egypt",
            support_link: "Support us",
            contact_us: "Contact us",
        
        }
    },
    ar: {
        translation: {
            site_title: "القرآن الكريم | QuranHub",
            app_name: "القرآن الكريم | QuranHub",
            app_description: "وجهتك الواحدة لقراءة ودراسة القرآن الكريم",
            download_android: "حمّل لنظام أندرويد",
            download_ios: "حمل لنظام أبل (سيتوفر قريبا)",
            usage_data: "يستعمله أكثر من 100 ألف مستخدم",
            language: "اللغة",
            read_quran_title: "اقرأ القرآن",
            read_quran_description: "اقرأ القرآن الكريم بروايتي حفص وورش.",
            listen_quran_title: "استمع إلى القرآن",
            listen_quran_description: "استمع إلى القرآن الكريم بصوت العديد من القرّاء المشهورين.",
            understand_quran_title: "تدبّر القرآن",
            understand_quran_description: "اقرأ تفسير القرآن الكريم أو ترجمته بالعديد من اللغات.",
            useful_feature: "ميزة مفيدة",
            useful_feature_title: "البحث في القرآن",
            useful_feature_description: "ابحث عن كلمة معينة في القرآن الكريم كله أو فقط في جزء منه أو حزب أو ربع أو سورة",
            highlight_verse_title: "اضغط على الآية لعرض المزيد من الخيارات",
            bookmarks_feature_title: "الإشارات المرجعية و الملاحظات",
            bookmarks_feature_description: "أضف إشارة مرجعية للآية أو أضف ملاحظة نصية أو صوتية لها لمساعدتك في دراسة و حفظ القرآن الكريم",
            share_feature_title: "المشاركة",
            share_feature_description: "شارك نص الآية مع الآخرين عبر تطبيقات أخرى",
            screenshots_section_title: "خذ نظرة أقرب",
            screenshots_section_description: "يحتوي تطبيق القرآن الكريم على العديد من الميزات التي ستجدها مفيدة",
            download_now: "حمّله الآن",
            created_with_love: "تم إنشاؤه  بـ ❤️ في القاهرة، مصر",
            support_link: "ادعمنا",
            contact_us: "تواصل معنا",

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
    setLocalizedText('#highlight-verse-feature-title', 'highlight_verse_title')
    setLocalizedText('#bookmarks-feature-title', 'bookmarks_feature_title')
    setLocalizedText('#bookmarks-feature-description', 'bookmarks_feature_description')
    setLocalizedText('#share-feature-title', 'share_feature_title')
    setLocalizedText('#share-feature-description', 'share_feature_description')
    setLocalizedText('#screenshots-section-title', 'screenshots_section_title')
    setLocalizedText('#screenshots-section-description', 'screenshots_section_description')
    setLocalizedText('#download-now-label', 'download_now')
    setLocalizedText('#created-with-love-label', 'created_with_love')
    setLocalizedText('#support-link', 'support_link')
    setLocalizedText('#contact-label', 'contact_us')

}

function setLocalizedText(elementSelector, localizedStrId) {
    $(elementSelector).html(i18next.t(localizedStrId))
}
