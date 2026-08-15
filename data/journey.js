/* =============================================================
   JOURNEY DATA — ΤΟ ΜΟΝΟ ΑΡΧΕΙΟ ΠΟΥ ΑΛΛΑΖΕΙΣ
   -------------------------------------------------------------
   • Κάθε κείμενο είναι ζευγάρι { en: "...", el: "..." }
   • images: [{ n: 12, caption: {en,el} }]  →  το n δείχνει στο
     MEDIA παρακάτω (αριθμός → όνομα αρχείου στο /images/media)
   • status: "win" | "fail" | "lesson" | "live" | "next"
   • milestone: true  → η στάση φωτίζεται σαν μεγάλο ορόσημο
   • meanwhile: τι έκανα στη ζωή μου εκείνη τη στιγμή
   ============================================================= */

window.JOURNEY = {

  profile: {
    name: "Angelo",
    role: { en: "Founder — Advon Media", el: "Founder — Advon Media" },
    tagline: {
      en: "A-Levels and mindset books at 18. Affiliate pages, four dead stores, a trading account that bled, an agency that finally worked. 200+ websites later, this is the whole map — nothing edited out.",
      el: "A-Levels και βιβλία νοοτροπίας στα 18. Affiliate σελίδες, τέσσερα νεκρά stores, ένας λογαριασμός trading που μάτωσε, ένα agency που τελικά δούλεψε. 200+ websites μετά, αυτός είναι όλος ο χάρτης — χωρίς περικοπές."
    },
    startYear: 2022,
    lastUpdated: "15/08/2026",
    currentLabel: { en: "15 Aug 2026 — you are here", el: "15 Αυγ 2026 — εδώ είμαστε" },
    links: [{ label: "advonmedia.com", url: "https://advonmedia.com" }]
  },

  /* ---- Year bands (each becomes a row on the desktop map) ---- */
  periods: [
    { id: "p2021", label: "2020 – 21", note: { en: "School · mindset", el: "Σχολείο · νοοτροπία" } },
    { id: "p2022", label: "2022",      note: { en: "First money online", el: "Πρώτα λεφτά online" } },
    { id: "p2023", label: "2023",      note: { en: "Stores → agency", el: "Stores → agency" } },
    { id: "p2024", label: "2024",      note: { en: "The grind", el: "Η κοπιαστική χρονιά" } },
    { id: "p2025", label: "2025",      note: { en: "Reset & focus", el: "Reset & εστίαση" } },
    { id: "p2026", label: "2026",      note: { en: "It works", el: "Δουλεύει" } },
    { id: "pnext", label: "Next",      note: { en: "What's being built", el: "Τι χτίζεται" } }
  ],

  chapters: [
    { id: "foundation",   label: { en: "Foundation",   el: "Θεμέλια" },      color: "#6d5ce0" },
    { id: "affiliate",    label: { en: "Affiliate",    el: "Affiliate" },    color: "#9b59ff" },
    { id: "ecommerce",    label: { en: "E-commerce",   el: "E-commerce" },   color: "#0aa8d6" },
    { id: "smma",         label: { en: "SMMA",         el: "SMMA" },         color: "#e8407a" },
    { id: "web",          label: { en: "Web & Agency", el: "Web & Agency" }, color: "#12a86a" },
    { id: "trading",      label: { en: "Trading",      el: "Trading" },      color: "#f08a1e" },
    { id: "next",         label: { en: "Next",         el: "Επόμενα" },      color: "#7b83a6" }
  ],

  /* ---- index → file in /images/media (add new photos at the end) ---- */
  media: {
    1:"2020-12-08_IMG_4950.jpg", 2:"2021-02-17_IMG_6925.jpg", 3:"2021-04-25_IMG_8080.jpg",
    4:"2022-05-21_A92FC2FF-6CCB-44A1-B8F5-354CC5F045C8.jpg", 5:"2022-11-17_IMG_1290.gif",
    6:"2022-11-18_IMG_1320.jpg", 7:"2022-12-27_IMG_0117.jpg", 8:"2022-12-30_IMG_0195.jpg",
    9:"2022-12-31_IMG_0230.jpg", 10:"2022-12-31_IMG_0232.jpg", 11:"2023-01-13_IMG_0528.jpg",
    12:"2023-02-03_IMG_0738.jpg", 13:"2023-02-15_IMG_0655.jpg", 14:"2023-04-10_IMG_1527.jpg",
    15:"2023-04-20_IMG_1635.jpg", 16:"2023-06-06_EE8571A3-2E08-4C4C-847C-2C80AD31BD5B.jpg",
    17:"2023-06-09_DAA69A77-A463-439F-972D-AD587B324F6F.jpg", 18:"2023-06-11_IMG_2166.jpg",
    19:"2023-06-14_IMG_2267.jpg", 20:"2023-06-18_3A4DEC37-8610-4E69-A7FE-9584BF824092.jpg",
    21:"2023-06-25_018834eedf8d49e190c556f2a9e220ea.gif", 22:"2023-06-25_DA1BB4DF-14DC-436A-94F7-3C5D2219A209.jpg",
    23:"2023-06-29_A180FD61-76D7-494F-8110-0BD8BEBEB950.jpg", 24:"2023-07-07_IMG_2786.jpg",
    25:"2023-07-09_0F0DCF19-04B8-4BB6-A336-FD0354486B60.jpg", 26:"2023-08-08_IMG_3495.jpg",
    27:"2023-09-01_IMG_4014.jpg", 28:"2023-09-05_E454B9E7-7FEB-4781-A99F-92DC5E43A5E4.jpg",
    29:"2023-09-05_IMG_4079.jpg", 30:"2023-09-07_60A70328-6FA7-428D-B784-89329BAC8302.jpg",
    31:"2023-09-11_IMG_4150.jpg", 32:"2023-09-12_B99772EF-3819-47E0-B7BF-92F349155AE5.jpg",
    33:"2023-09-14_IMG_4187.jpg", 34:"2023-10-10_IMG_4689.gif", 35:"2024-01-19_IMG_7354.jpg",
    36:"2024-02-12_C0B1F4BB-982B-40E3-8018-B51516DE5F2A.jpg", 37:"2024-02-22_IMG_8039.jpg",
    38:"2024-02-23_IMG_8049.jpg", 39:"2024-02-26_246C9F93-CB34-4A83-AF57-92A5D45359DE.jpg",
    40:"2024-02-26_IMG_8088.jpg", 41:"2024-03-01_IMG_8148.jpg", 42:"2024-03-02_IMG_8206.jpg",
    43:"2024-03-04_IMG_8246.jpg", 44:"2024-03-14_IMG_8401.jpg", 45:"2024-03-20_IMG_8525.jpg",
    46:"2024-04-05_EF678BED-586E-4650-A34B-0947B122D6CA.jpg", 47:"2024-04-11_IMG_8827.jpg",
    48:"2024-04-14_IMG_8873.jpg", 49:"2024-04-16_IMG_8893.jpg",
    50:"2024-04-17_7C81F99B-3E36-4166-ADF3-4DF7B8F7CE2E.jpg", 51:"2024-04-18_IMG_8906.jpg",
    52:"2024-04-18_IMG_8909.jpg", 53:"2024-05-01_IMG_9069.jpg", 54:"2024-05-02_IMG_9077.jpg",
    55:"2024-05-04_F70DB7B4-BF22-4C64-988C-081F1DCCE039.jpg", 56:"2024-05-14_IMG_9260.jpg",
    57:"2024-05-18_52B04C9D-ABBD-4050-9D4A-A18E75F736DE.jpg", 58:"2024-05-19_IMG_9325.jpg",
    59:"2024-05-20_IMG_9332.jpg", 60:"2024-05-20_IMG_9333.jpg", 61:"2024-05-24_IMG_9372.jpg",
    62:"2024-05-24_IMG_9373.jpg", 63:"2024-05-24_IMG_9376.jpg", 64:"2024-05-27_IMG_9399.jpg",
    65:"2024-05-28_IMG_9414.jpg", 66:"2024-05-30_250614F3-405E-42E3-BF1E-E72E06A584FF.jpg",
    67:"2024-05-30_IMG_9443.jpg", 68:"2024-06-04_IMG_9596.jpg", 69:"2024-08-15_IMG_1587.jpg",
    70:"2024-08-20_IMG_1706.jpg", 71:"2024-08-20_IMG_1709.jpg", 72:"2024-09-04_Add_a_heading-14_2.jpg",
    73:"2024-09-04_IMG_1961.jpg", 74:"2024-10-02_IMG_2521.jpg", 75:"2024-10-10_IMG_2672.jpg",
    76:"2024-10-11_IMG_2701.jpg", 77:"2024-11-08_IMG_3129.jpg", 78:"2025-01-21_IMG_4303.jpg",
    79:"2025-01-21_IMG_4304.jpg", 80:"2025-01-21_IMG_4307.jpg", 81:"2025-01-22_IMG_4318.jpg",
    82:"2025-01-28_6783BB0D-C964-4324-954D-EC0A38F77831.jpg", 83:"2025-01-28_IMG_4402.jpg",
    84:"2025-04-29_IMG_6078.jpg", 85:"2025-05-08_IMG_6236_2.jpg", 86:"2025-05-11_IMG_6290_2.jpg",
    87:"2025-05-13_IMG_6310.jpg", 88:"2025-05-13_IMG_6311.jpg", 89:"2025-06-03_IMG_6666.jpg",
    90:"2025-06-04_7B18A1BA-D06A-4BFB-886F-37979AA46C93.jpg", 91:"2025-06-09_IMG_6777.jpg",
    92:"2025-06-10_72D836ED-DFF0-41BE-B3FF-4A640A46F5C4.jpg", 93:"2025-06-14_IMG_6890.jpg",
    94:"2025-09-01_IMG_8951.jpg", 95:"2025-09-16_IMG_9143.jpg",
    96:"2025-10-10_04A80F3A-5467-4ACA-B6B4-7F302962B20D.jpg",
    97:"2025-10-10_494A29AC-E660-4C63-8257-D3A24161B45F.jpg",
    98:"2025-10-11_9EA3F38D-A5D3-4F54-B2F6-AE58C59FB717.jpg",
    99:"2025-10-15_1364600A-92C7-426F-97C4-320FDB538727.jpg",
    100:"2025-10-16_938AB618-73D3-49CA-BA9F-FCD40286EA47.jpg", 101:"2025-10-27_IMG_9766.jpg",
    102:"2025-10-30_IMG_9800.jpg", 103:"2025-10-30_IMG_9807.jpg", 104:"2025-10-30_IMG_9808.jpg",
    105:"2025-10-31_IMG_9832.jpg", 106:"2026-02-08_IMG_1687.jpg", 107:"2026-02-15_IMG_1914.jpg",
    108:"2026-03-05_IMG_2263.jpg", 109:"2026-03-22_IMG_2562.jpg", 110:"2026-03-22_IMG_2563.jpg",
    111:"2026-04-02_IMG_2762.jpg"
  },

  stages: [

  /* ======================= 2020 – 2021 ======================= */
  {
    id: "alevels", period: "p2021", chapter: "foundation", icon: "book", status: "lesson",
    date: { en: "Dec 2020 – 2021", el: "Δεκ 2020 – 2021" },
    short: { en: "A-Levels & mindset", el: "A-Levels & νοοτροπία" },
    title: { en: "Before any of it: A-Levels and a stack of books", el: "Πριν από όλα: A-Levels και μια στοίβα βιβλία" },
    subtitle: { en: "The head got built before the business did", el: "Το μυαλό χτίστηκε πριν από την επιχείρηση" },
    meanwhile: { en: "Year 12–13 · IAL / A-Levels, aiming for a top UK university", el: "Β' – Γ' Λυκείου · IAL / A-Levels, με στόχο κορυφαίο πανεπιστήμιο στο UK" },
    body: {
      en: "At this point there was no business — there was a target. A-Levels, online classes, mock marks on a screen, and a very specific plan to get into a top UK university. In parallel I was ordering and reading everything I could find on mindset, goal setting and how successful people actually think and behave, and watching the same material on repeat. None of it made a euro. All of it decided what happened next.",
      el: "Εκείνη τη στιγμή δεν υπήρχε επιχείρηση — υπήρχε στόχος. A-Levels, online μαθήματα, βαθμοί σε μια οθόνη, και ένα πολύ συγκεκριμένο σχέδιο για κορυφαίο πανεπιστήμιο στο UK. Παράλληλα παρήγγελνα και διάβαζα ό,τι έβρισκα για νοοτροπία, στοχοθεσία και για το πώς σκέφτονται και συμπεριφέρονται πραγματικά οι επιτυχημένοι, βλέποντας ξανά και ξανά το ίδιο υλικό. Τίποτα από αυτά δεν έβγαλε ευρώ. Όλα αυτά όμως καθόρισαν το τι ακολούθησε."
    },
    metrics: [
      { label: { en: "Pure Maths 2", el: "Pure Maths 2" }, value: "99 / A" },
      { label: { en: "Further Maths", el: "Further Maths" }, value: "96 / A" },
      { label: { en: "Physics", el: "Φυσική" }, value: "95 / A" },
      { label: { en: "Businesses", el: "Επιχειρήσεις" }, value: "0" }
    ],
    lesson: {
      en: "Discipline is transferable. The habit of grinding for a number transferred perfectly to grinding for revenue.",
      el: "Η πειθαρχία μεταφέρεται. Η συνήθεια να δουλεύεις σκληρά για έναν βαθμό μεταφέρθηκε τέλεια στο να δουλεύεις για τζίρο."
    },
    images: [
      { n: 1, caption: { en: "8 Dec 2020 — marks on screen, mid online class", el: "8 Δεκ 2020 — βαθμοί στην οθόνη, μέσα σε online μάθημα" } },
      { n: 26, caption: { en: "IAL January 2021 exams — the official marks report", el: "Εξετάσεις IAL Ιανουαρίου 2021 — η επίσημη βαθμολογία" } },
      { n: 2, caption: { en: "The books — thoughts, emotion, and 'magnetic' force", el: "Τα βιβλία — σκέψεις, συναίσθημα και «μαγνητική» δύναμη" } }
    ]
  },
  {
    id: "first-product-page", period: "p2021", chapter: "ecommerce", icon: "search", status: "lesson",
    date: { en: "25 Apr 2021", el: "25 Απρ 2021" },
    short: { en: "First product page", el: "Πρώτη σελίδα προϊόντος" },
    title: { en: "The first product page I ever saved", el: "Η πρώτη σελίδα προϊόντος που κράτησα ποτέ" },
    subtitle: { en: "Teeth whitening strips, €0.01–0.32", el: "Ταινίες λεύκανσης δοντιών, €0,01–0,32" },
    meanwhile: { en: "Still at school, exams ahead", el: "Ακόμα σχολείο, εξετάσεις μπροστά" },
    body: {
      en: "Long before any store existed, I was already scrolling AliExpress looking for the thing that could be resold. Teeth whitening strips at a few cents, 3,251 orders, 4.8 stars. Nothing came of it — but the instinct of 'what could this sell for?' started here and never switched off.",
      el: "Πολύ πριν υπάρξει οποιοδήποτε store, ήδη έψαχνα στο AliExpress το προϊόν που θα μπορούσε να μεταπωληθεί. Ταινίες λεύκανσης δοντιών με λίγα λεπτά, 3.251 παραγγελίες, 4,8 αστέρια. Δεν βγήκε τίποτα — αλλά το ένστικτο «πόσο θα μπορούσε να πουληθεί αυτό;» ξεκίνησε εδώ και δεν έκλεισε ποτέ."
    },
    metrics: [
      { label: { en: "Cost", el: "Κόστος" }, value: "€0.01–0.32" },
      { label: { en: "Orders on listing", el: "Παραγγελίες" }, value: "3,251" },
      { label: { en: "Sold by me", el: "Πούλησα" }, value: "0" }
    ],
    lesson: { en: "Cheap to buy is not the same as easy to sell.", el: "Φθηνό στην αγορά δεν σημαίνει εύκολο στην πώληση." },
    images: [{ n: 3, caption: { en: "AliExpress, April 2021", el: "AliExpress, Απρίλιος 2021" } }]
  },

  /* ========================== 2022 =========================== */
  {
    id: "first-200", period: "p2022", chapter: "affiliate", icon: "star", status: "win", milestone: true,
    date: { en: "Summer 2022", el: "Καλοκαίρι 2022" },
    short: { en: "First $200 online", el: "Πρώτα $200 online" },
    title: { en: "First money ever made online — $200", el: "Τα πρώτα λεφτά online — $200" },
    subtitle: { en: "@weight_losers_ · Okinawa Flat Belly Tonic · ClickBank", el: "@weight_losers_ · Okinawa Flat Belly Tonic · ClickBank" },
    meanwhile: { en: "18 years old, summer between school and King's College London", el: "18 χρονών, καλοκαίρι ανάμεσα σε σχολείο και King's College London" },
    body: {
      en: "An Instagram page about losing weight, daily clips, a link in bio, and a ClickBank supplement — Okinawa Flat Belly Tonic — that I was promoting as an affiliate. $200 came in. The strange part: I barely understood what I had sold. Going back into ClickBank much later to check is how I properly worked out what had happened. The page itself reached 730,000 accounts in 30 days with 1,648 followers.",
      el: "Μια σελίδα στο Instagram για απώλεια βάρους, καθημερινά clips, ένα link στο bio, και ένα συμπλήρωμα από το ClickBank — το Okinawa Flat Belly Tonic — που προωθούσα ως affiliate. Μπήκαν $200. Το παράξενο: ελάχιστα καταλάβαινα τι είχα πουλήσει. Μπαίνοντας πολύ αργότερα στο ClickBank να το τσεκάρω, κατάλαβα σωστά τι είχε γίνει. Η ίδια η σελίδα έφτασε 730.000 λογαριασμούς σε 30 ημέρες με 1.648 followers."
    },
    metrics: [
      { label: { en: "First earnings", el: "Πρώτα κέρδη" }, value: "$200" },
      { label: { en: "Accounts reached / 30d", el: "Λογαριασμοί / 30 ημ." }, value: "730K" },
      { label: { en: "Followers", el: "Followers" }, value: "1,648" },
      { label: { en: "Posts", el: "Δημοσιεύσεις" }, value: "101" }
    ],
    lesson: {
      en: "The first money doesn't arrive because you understood the game. It arrives because you were in it.",
      el: "Τα πρώτα λεφτά δεν έρχονται επειδή κατάλαβες το παιχνίδι. Έρχονται επειδή ήσουν μέσα σε αυτό."
    },
    images: [
      { n: 11, caption: { en: "@weight_losers_ — 101 posts, 730K reached in 30 days", el: "@weight_losers_ — 101 posts, 730K σε 30 ημέρες" } },
      { n: 4, caption: { en: "The setup it was all run from", el: "Το setup απ' όπου έτρεχαν όλα" } }
    ]
  },
  {
    id: "four-accounts", period: "p2022", chapter: "affiliate", icon: "grid", status: "lesson",
    date: { en: "17–18 Nov 2022", el: "17–18 Νοε 2022" },
    short: { en: "Four accounts, four bets", el: "Τέσσερις λογαριασμοί" },
    title: { en: "Four accounts, four bets, one account switcher", el: "Τέσσερις λογαριασμοί, τέσσερα στοιχήματα, ένας switcher" },
    subtitle: { en: "ultrasound_tub · millionaireshub__ · instagrboost_ · weight_losers_", el: "ultrasound_tub · millionaireshub__ · instagrboost_ · weight_losers_" },
    meanwhile: { en: "First year at King's College London, just started", el: "Πρώτο έτος στο King's College London, μόλις ξεκίνησε" },
    body: {
      en: "One screenshot from 18 November 2022 sums up that whole phase: four Instagram accounts running at once. @ultrasound_tub for the ultrasonic cleaner, @millionaireshub__ for money content, @instagrboost_ for selling cheap Instagram followers with Nikita, and @weight_losers_ — the one that had actually made money. Four different bets, all live, all mine, all at 18.",
      el: "Ένα screenshot της 18ης Νοεμβρίου 2022 συνοψίζει όλη εκείνη τη φάση: τέσσερις λογαριασμοί Instagram ταυτόχρονα. @ultrasound_tub για το ultrasonic cleaner, @millionaireshub__ για περιεχόμενο χρημάτων, @instagrboost_ για φθηνούς followers Instagram μαζί με τον Nikita, και @weight_losers_ — αυτός που είχε βγάλει πραγματικά λεφτά. Τέσσερα διαφορετικά στοιχήματα, όλα ζωντανά, όλα δικά μου, όλα στα 18."
    },
    metrics: [
      { label: { en: "Accounts live", el: "Ενεργοί λογαριασμοί" }, value: "4" },
      { label: { en: "Models tried", el: "Μοντέλα" }, value: { en: "Affiliate · SMM · product", el: "Affiliate · SMM · προϊόν" } },
      { label: { en: "Age", el: "Ηλικία" }, value: "18" }
    ],
    lesson: {
      en: "Four half-bets beat zero bets — but they also guarantee that nothing gets the attention it needs.",
      el: "Τέσσερα μισά στοιχήματα είναι καλύτερα από κανένα — αλλά εγγυώνται και ότι τίποτα δεν παίρνει την προσοχή που χρειάζεται."
    },
    images: [
      { n: 6, caption: { en: "The account switcher, 18 Nov 2022", el: "Ο switcher λογαριασμών, 18 Νοε 2022" } },
      { n: 5, caption: { en: "The ultrasonic cleaner being filmed for @ultrasound_tub", el: "Το ultrasonic cleaner σε λήψη για το @ultrasound_tub" } },
      { n: 12, caption: { en: "INSTAGRBOOST™ brand", el: "Το brand INSTAGRBOOST™" } }
    ]
  },
  {
    id: "first-stores", period: "p2022", chapter: "ecommerce", icon: "cart", status: "fail",
    date: { en: "Dec 2022", el: "Δεκ 2022" },
    short: { en: "First stores", el: "Πρώτα stores" },
    title: { en: "The first stores: projector, humidifier, puffer cases", el: "Τα πρώτα stores: projector, humidifier, puffer θήκες" },
    subtitle: { en: "Products ordered, ads shot, nothing sold", el: "Προϊόντα παραγγέλθηκαν, ads γυρίστηκαν, τίποτα δεν πουλήθηκε" },
    meanwhile: { en: "First year at KCL — the projector arrived next to the King's lanyard", el: "Πρώτο έτος στο KCL — ο projector ήρθε δίπλα στο lanyard του King's" },
    body: {
      en: "December 2022 was a spreadsheet of CJdropshipping product IDs and a pile of samples: an LED projector, an antigravity humidifier sold under 'Stuffy' with TikTok ads running, puffer phone cases found on AliExpress at €1.54. Real money went out on samples, Shopify and ads. Not one of these products ever made a sale.",
      el: "Ο Δεκέμβριος 2022 ήταν ένα excel με κωδικούς CJdropshipping και ένας σωρός δείγματα: ένας LED projector, ένα antigravity humidifier με το όνομα «Stuffy» και TikTok ads, puffer θήκες κινητού από AliExpress στα €1,54. Πραγματικά λεφτά έφυγαν σε δείγματα, Shopify και διαφημίσεις. Κανένα από αυτά τα προϊόντα δεν έκανε ποτέ πώληση."
    },
    metrics: [
      { label: { en: "Products lined up", el: "Προϊόντα στη λίστα" }, value: "9" },
      { label: { en: "Puffer case cost", el: "Κόστος puffer θήκης" }, value: "€1.54" },
      { label: { en: "Sales", el: "Πωλήσεις" }, value: "0" }
    ],
    lesson: {
      en: "Picking the product is the easy 5%. Everything expensive comes after.",
      el: "Η επιλογή προϊόντος είναι το εύκολο 5%. Ό,τι κοστίζει έρχεται μετά."
    },
    images: [
      { n: 7, caption: { en: "LED projector sample — next to the King's College lanyard", el: "Δείγμα LED projector — δίπλα στο lanyard του King's College" } },
      { n: 8, caption: { en: "'Stuffy' — the antigravity humidifier ad running on TikTok", el: "«Stuffy» — η διαφήμιση του antigravity humidifier στο TikTok" } },
      { n: 9, caption: { en: "The product & expenses sheet", el: "Το excel προϊόντων & εξόδων" } },
      { n: 10, caption: { en: "Puffer cases on AliExpress, €1.54", el: "Puffer θήκες στο AliExpress, €1,54" } }
    ]
  },

  /* ========================== 2023 =========================== */
  {
    id: "iprotech", period: "p2023", chapter: "ecommerce", icon: "shield", status: "fail",
    date: { en: "6 Mar 2023 — store launch", el: "6 Μαρ 2023 — launch του store" },
    short: { en: "iProTech™", el: "iProTech™" },
    title: { en: "iProTech™ — the puffer case store goes live", el: "iProTech™ — το store με τις puffer θήκες ανοίγει" },
    subtitle: { en: "A brand, a logo, dozens of TikToks, zero orders", el: "Ένα brand, ένα λογότυπο, δεκάδες TikTok, μηδέν παραγγελίες" },
    meanwhile: { en: "First year at King's College London", el: "Πρώτο έτος στο King's College London" },
    body: {
      en: "This was the first thing that felt like a real business: a brand name, a logo, a store, and a lot of TikToks shot with the cases in hand. Launched 6 March 2023. It never sold. Everything about the outside was right and everything about the inside — margin, differentiation, trust — was missing.",
      el: "Αυτό ήταν το πρώτο πράγμα που έμοιαζε με πραγματική επιχείρηση: όνομα brand, λογότυπο, store, και πολλά TikTok γυρισμένα με τις θήκες στο χέρι. Άνοιξε στις 6 Μαρτίου 2023. Δεν πούλησε ποτέ. Ό,τι φαινόταν απ' έξω ήταν σωστό και ό,τι υπήρχε από μέσα — περιθώριο, διαφοροποίηση, εμπιστοσύνη — έλειπε."
    },
    metrics: [
      { label: { en: "Launch", el: "Launch" }, value: "06/03/2023" },
      { label: { en: "Orders", el: "Παραγγελίες" }, value: "0" },
      { label: { en: "Stores so far", el: "Stores μέχρι τότε" }, value: "4" }
    ],
    lesson: {
      en: "A logo is not a moat. If the customer can find the same case for €1.54, the brand has to be the product.",
      el: "Ένα λογότυπο δεν είναι πλεονέκτημα. Αν ο πελάτης βρίσκει την ίδια θήκη στα €1,54, το brand πρέπει να είναι το προϊόν."
    },
    images: [{ n: 13, caption: { en: "iProTech™ — the brand", el: "iProTech™ — το brand" } }]
  },
  {
    id: "ad-media", period: "p2023", chapter: "smma", icon: "compass", status: "lesson",
    date: { en: "10 Apr 2023", el: "10 Απρ 2023" },
    short: { en: "A&D Media", el: "A&D Media" },
    title: { en: "A&D Media — the first agency name", el: "A&D Media — το πρώτο όνομα agency" },
    subtitle: { en: "From selling products to selling results", el: "Από πώληση προϊόντων σε πώληση αποτελεσμάτων" },
    meanwhile: { en: "First year at KCL, researching SMMA between lectures", el: "Πρώτο έτος στο KCL, έρευνα για SMMA ανάμεσα στα μαθήματα" },
    body: {
      en: "After four dead stores I stopped trying to sell objects and started studying high-ticket SMMA — lead generation for businesses, built on GoHighLevel: funnels, pipelines, automations, missed-call text-back, review requests. On 10 April 2023 it got a name and a logo: A&D Media.",
      el: "Μετά από τέσσερα νεκρά stores σταμάτησα να προσπαθώ να πουλήσω αντικείμενα και άρχισα να μελετώ high-ticket SMMA — lead generation για επιχειρήσεις, πάνω σε GoHighLevel: funnels, pipelines, automations, missed-call text-back, αιτήματα κριτικών. Στις 10 Απριλίου 2023 πήρε όνομα και λογότυπο: A&D Media."
    },
    metrics: [
      { label: { en: "Stack", el: "Stack" }, value: "GoHighLevel" },
      { label: { en: "Target", el: "Στόχος" }, value: { en: "High-ticket niches", el: "High-ticket niches" } },
      { label: { en: "Named", el: "Ονομάστηκε" }, value: "10/04/2023" }
    ],
    lesson: {
      en: "Businesses don't buy ads. They buy booked appointments.",
      el: "Οι επιχειρήσεις δεν αγοράζουν διαφημίσεις. Αγοράζουν κλεισμένα ραντεβού."
    },
    images: [{ n: 14, caption: { en: "A&D Media", el: "A&D Media" } }]
  },
  {
    id: "glynos", period: "p2023", chapter: "smma", icon: "flag", status: "lesson", milestone: true,
    date: { en: "20 Apr 2023", el: "20 Απρ 2023" },
    short: { en: "Rhodes — the pivot", el: "Ρόδος — η στροφή" },
    title: { en: "George Glynos, Rhodes — the sentence that changed the business", el: "Γιώργος Γλυνός, Ρόδος — η φράση που άλλαξε την επιχείρηση" },
    subtitle: { en: "First appointment ever booked, from Instagram DMs", el: "Το πρώτο ραντεβού που κλείστηκε ποτέ, από Instagram DMs" },
    meanwhile: { en: "First year at KCL, cold DMing Greek dentists from London", el: "Πρώτο έτος στο KCL, cold DMs σε Έλληνες οδοντιάτρους από το Λονδίνο" },
    body: {
      en: "20 April 2023: the first appointment I ever booked, from Instagram DMs — dentist George Glynos in Rhodes. I built the ad campaign, and Meta rejected it: in Greece, advertising is restricted for doctors and dentists. The entire SMMA playbook I had just learned could not legally run in the niche I had chosen. But he still needed to be found online. So I built him a website instead. That is the exact point where the business became a web business.",
      el: "20 Απριλίου 2023: το πρώτο ραντεβού που έκλεισα ποτέ, μέσα από Instagram DMs — ο οδοντίατρος Γιώργος Γλυνός στη Ρόδο. Έστησα την καμπάνια και η Meta την απέρριψε: στην Ελλάδα η διαφήμιση είναι περιορισμένη για γιατρούς και οδοντιάτρους. Όλο το SMMA playbook που μόλις είχα μάθει δεν μπορούσε νόμιμα να τρέξει στο niche που είχα διαλέξει. Παρ' όλα αυτά έπρεπε να τον βρίσκουν online. Οπότε του έφτιαξα website. Ακριβώς εκεί η επιχείρηση έγινε επιχείρηση websites."
    },
    metrics: [
      { label: { en: "First appointment", el: "Πρώτο ραντεβού" }, value: "20/04/2023" },
      { label: { en: "Audience built", el: "Κοινό" }, value: "12.8–15.1K" },
      { label: { en: "Ad status", el: "Κατάσταση ad" }, value: { en: "Rejected", el: "Απορρίφθηκε" } },
      { label: { en: "Outcome", el: "Αποτέλεσμα" }, value: { en: "Website instead", el: "Website αντ' αυτού" } }
    ],
    lesson: {
      en: "Listen to the objection. Sometimes the 'no' is the map to the real business.",
      el: "Άκου την αντίρρηση. Καμιά φορά το «όχι» είναι ο χάρτης για την πραγματική δουλειά."
    },
    images: [
      { n: 15, caption: { en: "'Glynos test' in Ads Manager — and the rejection notice", el: "«Glynos test» στο Ads Manager — και η ειδοποίηση απόρριψης" } },
      { n: 18, caption: { en: "Building the dental site instead", el: "Χτίζοντας το οδοντιατρικό site αντ' αυτού" } }
    ]
  },
  {
    id: "advon-born", period: "p2023", chapter: "web", icon: "layers", status: "win", milestone: true,
    date: { en: "18 Jun 2023", el: "18 Ιουν 2023" },
    short: { en: "ADVON MEDIA born", el: "Γεννιέται η ADVON MEDIA" },
    title: { en: "ADVON MEDIA gets its name and logo", el: "Η ADVON MEDIA παίρνει όνομα και λογότυπο" },
    subtitle: { en: "The name that is still on the door today", el: "Το όνομα που είναι ακόμα στην πόρτα σήμερα" },
    meanwhile: { en: "Summer after first year — full days on the laptop, meetings between", el: "Καλοκαίρι μετά το πρώτο έτος — ολόκληρες μέρες στο laptop, ραντεβού ενδιάμεσα" },
    body: {
      en: "A&D Media became ADVON MEDIA on 18 June 2023. Around that date: pages and pages of handwritten scripts and offers on the table, days of building in cafés, first meetings in cars and on pavements. Three years later, it is the only name still standing.",
      el: "Η A&D Media έγινε ADVON MEDIA στις 18 Ιουνίου 2023. Γύρω από εκείνη την ημερομηνία: σελίδες επί σελίδων χειρόγραφα scripts και προσφορές στο τραπέζι, μέρες δουλειάς σε καφετέριες, πρώτα ραντεβού μέσα σε αυτοκίνητα και σε πεζοδρόμια. Τρία χρόνια μετά, είναι το μόνο όνομα που στέκει ακόμα."
    },
    metrics: [
      { label: { en: "Named", el: "Ονομάστηκε" }, value: "18/06/2023" },
      { label: { en: "Previous names", el: "Προηγούμενα ονόματα" }, value: "2" },
      { label: { en: "Still running", el: "Ακόμα ενεργό" }, value: { en: "Yes", el: "Ναι" } }
    ],
    lesson: {
      en: "You do not need the perfect name. You need one you are willing to keep for three years.",
      el: "Δεν χρειάζεσαι το τέλειο όνομα. Χρειάζεσαι ένα που θα κρατήσεις τρία χρόνια."
    },
    images: [
      { n: 20, caption: { en: "The original ADVON MEDIA logo, 18 Jun 2023", el: "Το αρχικό λογότυπο ADVON MEDIA, 18 Ιουν 2023" } },
      { n: 17, caption: { en: "Scripts and offers on the table", el: "Scripts και προσφορές στο τραπέζι" } },
      { n: 19, caption: { en: "Same table, 7:51 in the morning", el: "Το ίδιο τραπέζι, 7:51 το πρωί" } },
      { n: 16, caption: { en: "Building, café, two laptops", el: "Δουλειά, καφετέρια, δύο laptop" } },
      { n: 22, caption: { en: "A meeting", el: "Ένα ραντεβού" } },
      { n: 21, caption: { en: "Between meetings", el: "Ανάμεσα σε ραντεβού" } }
    ]
  },
  {
    id: "official", period: "p2023", chapter: "web", icon: "doc", status: "win",
    date: { en: "7 Jul 2023", el: "7 Ιουλ 2023" },
    short: { en: "Making it official", el: "Επίσημα" },
    title: { en: "Registering the business", el: "Έναρξη επιχείρησης" },
    subtitle: { en: "ID, lease, TAXISnet codes, AMKA, activity codes", el: "Ταυτότητα, μισθωτήριο, κωδικοί TAXISnet, ΑΜΚΑ, ΚΑΔ" },
    meanwhile: { en: "19 years old, doing paperwork between summer shifts of work", el: "19 χρονών, χαρτιά ανάμεσα σε καλοκαιρινές βάρδιες δουλειάς" },
    body: {
      en: "The accountant's email listing everything needed to open a sole proprietorship, with a €150 + VAT fee for the process. Unglamorous, and the moment the hobby became a company.",
      el: "Το email του λογιστή με όλα όσα χρειάζονταν για έναρξη ατομικής επιχείρησης, με αμοιβή 150€ + ΦΠΑ για τη διαδικασία. Καθόλου λαμπερό, και η στιγμή που το χόμπι έγινε εταιρεία."
    },
    metrics: [
      { label: { en: "Setup fee", el: "Κόστος έναρξης" }, value: "€150 + VAT" },
      { label: { en: "Age", el: "Ηλικία" }, value: "19" }
    ],
    lesson: { en: "Paperwork is the cheapest part of a business and the one most people stall on.", el: "Τα χαρτιά είναι το φθηνότερο κομμάτι μιας επιχείρησης και αυτό στο οποίο κολλάνε οι περισσότεροι." },
    images: [{ n: 24, caption: { en: "The accountant's checklist", el: "Η λίστα του λογιστή" } }]
  },
  {
    id: "price-350", period: "p2023", chapter: "web", icon: "tag", status: "lesson",
    date: { en: "Jul – Sep 2023", el: "Ιουλ – Σεπ 2023" },
    short: { en: "Websites at €350–600", el: "Websites στα €350–600" },
    title: { en: "Selling websites at €350–600 — the paid-first offer", el: "Πουλώντας websites στα €350–600 — η επί πληρωμή προσφορά" },
    subtitle: { en: "Before 'free' was ever on the table", el: "Πριν καν μπει στο τραπέζι το «δωρεάν»" },
    meanwhile: { en: "Second year at King's College London starts", el: "Ξεκινά το δεύτερο έτος στο King's College London" },
    body: {
      en: "The offer ladder was written by hand: websites at €400–600, a confirmation software at €100/month, confirmation + booking calendar for restaurants at €330/month, the full stack with email and text marketing at €750/month. Business cards were printed. Client onboarding checklists were written out. The first client emails and deposits started arriving. It worked — slowly, and with a price tag that made every 'no' expensive.",
      el: "Η κλίμακα προσφορών γράφτηκε στο χέρι: websites στα €400–600, software επιβεβαίωσης στα €100/μήνα, επιβεβαίωση + booking calendar για εστιατόρια στα €330/μήνα, το πλήρες πακέτο με email και text marketing στα €750/μήνα. Τυπώθηκαν επαγγελματικές κάρτες. Γράφτηκαν λίστες onboarding πελατών. Άρχισαν να έρχονται τα πρώτα email και οι πρώτες προκαταβολές. Δούλευε — αργά, και με μια τιμή που έκανε κάθε «όχι» ακριβό."
    },
    metrics: [
      { label: { en: "Website price", el: "Τιμή website" }, value: "€400–600" },
      { label: { en: "Software tier", el: "Πακέτο software" }, value: "€100–750/mo" },
      { label: { en: "Cold-call offer", el: "Προσφορά cold call" }, value: "€57" }
    ],
    lesson: {
      en: "A high price with no proof is just a longer conversation that ends in no.",
      el: "Ψηλή τιμή χωρίς αποδείξεις είναι απλώς μια πιο μακριά συζήτηση που τελειώνει σε «όχι»."
    },
    images: [
      { n: 25, caption: { en: "The offer ladder, handwritten", el: "Η κλίμακα προσφορών, χειρόγραφη" } },
      { n: 29, caption: { en: "ADVON MEDIA business cards", el: "Επαγγελματικές κάρτες ADVON MEDIA" } },
      { n: 33, caption: { en: "The cold-call script", el: "Το script για cold call" } },
      { n: 31, caption: { en: "Client onboarding checklist", el: "Λίστα onboarding πελάτη" } },
      { n: 27, caption: { en: "Client email — changes and first deposit", el: "Email πελάτη — αλλαγές και πρώτη δόση" } },
      { n: 30, caption: { en: "Online booking, live", el: "Online ραντεβού, ζωντανά" } }
    ]
  },
  {
    id: "more-meetings-2023", period: "p2023", chapter: "web", icon: "users", status: "lesson",
    date: { en: "Sep – Oct 2023", el: "Σεπ – Οκτ 2023" },
    short: { en: "Meetings, no closes", el: "Ραντεβού, χωρίς κλεισίματα" },
    title: { en: "Two or three more meetings. None of them closed.", el: "Άλλα δύο-τρία ραντεβού. Κανένα δεν έκλεισε." },
    subtitle: { en: "The quiet part of every founder story", el: "Το κομμάτι που δεν λέγεται σε καμία ιστορία" },
    meanwhile: { en: "Second year at KCL, working from cafés and between lectures", el: "Δεύτερο έτος στο KCL, δουλειά από καφετέριες και ανάμεσα σε μαθήματα" },
    body: {
      en: "After Glynos there were two or three more meetings. All of them went nowhere. This is the part that gets skipped in most timelines: months of effort, real preparation, and nothing signed at the end of it.",
      el: "Μετά τον Γλυνό ακολούθησαν άλλα δύο-τρία ραντεβού. Κανένα δεν πήγε πουθενά. Αυτό είναι το κομμάτι που παραλείπεται στα περισσότερα χρονολόγια: μήνες προσπάθειας, πραγματική προετοιμασία, και τίποτα υπογεγραμμένο στο τέλος."
    },
    metrics: [
      { label: { en: "Meetings", el: "Ραντεβού" }, value: "2–3" },
      { label: { en: "Closed", el: "Έκλεισαν" }, value: "0" }
    ],
    lesson: { en: "Zero closes is data, not a verdict — as long as you change something after it.", el: "Μηδέν κλεισίματα είναι δεδομένο, όχι ετυμηγορία — αρκεί να αλλάξεις κάτι μετά." },
    images: [
      { n: 28, caption: { en: "Working from a café", el: "Δουλειά από καφετέρια" } },
      { n: 32, caption: { en: "On the way to a meeting", el: "Καθ' οδόν προς ραντεβού" } },
      { n: 34, caption: { en: "The setup at the time", el: "Το setup εκείνη την εποχή" } }
    ]
  },

  /* ========================== 2024 =========================== */
  {
    id: "free-offer", period: "p2024", chapter: "web", icon: "gift", status: "win", milestone: true,
    date: { en: "Jan 2024", el: "Ιαν 2024" },
    short: { en: "The website goes free", el: "Το website γίνεται δωρεάν" },
    title: { en: "The offer flips: the website becomes free", el: "Η προσφορά αλλάζει: το website γίνεται δωρεάν" },
    subtitle: { en: "Remove the risk, and people finally say yes", el: "Βγάλε το ρίσκο, και ο κόσμος επιτέλους λέει ναι" },
    meanwhile: { en: "Second year at KCL — cold calling Greece from London", el: "Δεύτερο έτος στο KCL — cold calling στην Ελλάδα από το Λονδίνο" },
    body: {
      en: "January 2024, from London, in the middle of second year: I rewrote the whole script. Instead of asking a Greek doctor to pay €400–1,500 upfront for a website from a 19-year-old they had never met, I built it first and for free. The risk moved from the client to me. That one change is the reason the business exists today.",
      el: "Ιανουάριος 2024, από το Λονδίνο, μέσα στο δεύτερο έτος: ξαναέγραψα όλο το script. Αντί να ζητάω από έναν Έλληνα γιατρό να πληρώσει €400–1.500 προκαταβολικά για ένα website από έναν 19χρονο που δεν είχε γνωρίσει ποτέ, το έφτιαχνα πρώτα και δωρεάν. Το ρίσκο μετακινήθηκε από τον πελάτη σε εμένα. Αυτή η μία αλλαγή είναι ο λόγος που υπάρχει η επιχείρηση σήμερα."
    },
    metrics: [
      { label: { en: "Old price", el: "Παλιά τιμή" }, value: "€400–1,500" },
      { label: { en: "New price", el: "Νέα τιμή" }, value: "€0 upfront" },
      { label: { en: "Calling from", el: "Καλώντας από" }, value: "London" }
    ],
    lesson: {
      en: "When you cannot beat them on trust, beat them on risk. Carry it yourself.",
      el: "Όταν δεν μπορείς να τους κερδίσεις στην εμπιστοσύνη, κέρδισέ τους στο ρίσκο. Πάρ' το πάνω σου."
    },
    images: [{ n: 35, caption: { en: "The new script, 19 Jan 2024", el: "Το νέο script, 19 Ιαν 2024" } }]
  },
  {
    id: "first-150", period: "p2024", chapter: "web", icon: "euro", status: "win",
    date: { en: "12 Feb 2024", el: "12 Φεβ 2024" },
    short: { en: "€150 in", el: "€150 μέσα" },
    title: { en: "Money in the account under the new offer", el: "Λεφτά στον λογαριασμό με τη νέα προσφορά" },
    subtitle: { en: "Confirmed transaction — €150", el: "Επιτυχής συναλλαγή — €150" },
    meanwhile: { en: "Second year at KCL", el: "Δεύτερο έτος στο KCL" },
    body: {
      en: "The first bank confirmation after the offer changed. Small number, enormous signal: someone had seen the work first and then paid for it.",
      el: "Η πρώτη τραπεζική επιβεβαίωση μετά την αλλαγή της προσφοράς. Μικρό ποσό, τεράστιο μήνυμα: κάποιος είδε πρώτα τη δουλειά και μετά πλήρωσε γι' αυτήν."
    },
    metrics: [
      { label: { en: "Amount", el: "Ποσό" }, value: "€150" },
      { label: { en: "Date", el: "Ημερομηνία" }, value: "12/02/2024" }
    ],
    lesson: { en: "Proof first, invoice second. It works in that order and almost never in reverse.", el: "Πρώτα απόδειξη, μετά τιμολόγιο. Δουλεύει με αυτή τη σειρά και σχεδόν ποτέ ανάποδα." },
    images: [
      { n: 36, caption: { en: "Confirmed — €150", el: "Επιτυχής συναλλαγή — €150" } },
      { n: 42, caption: { en: "'Δωρεάν Ιστοσελίδα' going out by email", el: "«Δωρεάν Ιστοσελίδα» φεύγει με email" } }
    ]
  },
  {
    id: "ai-receptionist", period: "p2024", chapter: "smma", icon: "bot", status: "fail",
    date: { en: "22 Feb – 4 Mar 2024", el: "22 Φεβ – 4 Μαρ 2024" },
    short: { en: "AI receptionist", el: "AI ρεσεψιονίστ" },
    title: { en: "The AI receptionist that didn't speak Greek", el: "Ο AI ρεσεψιονίστ που δεν μιλούσε ελληνικά" },
    subtitle: { en: "Booked a US provider, sat the call, found the dealbreaker", el: "Έκλεισα ραντεβού με US πάροχο, κάθισα στην κλήση, βρήκα το εμπόδιο" },
    meanwhile: { en: "Second year at KCL", el: "Δεύτερο έτος στο KCL" },
    body: {
      en: "I wanted a voice AI that could answer the phone for clinics. I booked a call with a US provider on 22 February, sat the demo on 4 March, and got the answer that ended it: it did not work in Greek. An entire product line closed in one sentence — but the idea stayed on the list, and two years later Advon ships a bilingual AI assistant of its own.",
      el: "Ήθελα ένα φωνητικό AI που να σηκώνει το τηλέφωνο για ιατρεία. Έκλεισα κλήση με έναν πάροχο στις ΗΠΑ στις 22 Φεβρουαρίου, κάθισα στο demo στις 4 Μαρτίου, και πήρα την απάντηση που το τελείωσε: δεν δούλευε στα ελληνικά. Μια ολόκληρη σειρά προϊόντων έκλεισε με μία πρόταση — αλλά η ιδέα έμεινε στη λίστα, και δύο χρόνια μετά η Advon έχει δικό της δίγλωσσο AI βοηθό."
    },
    metrics: [
      { label: { en: "Provider", el: "Πάροχος" }, value: { en: "US", el: "ΗΠΑ" } },
      { label: { en: "Blocker", el: "Εμπόδιο" }, value: { en: "No Greek", el: "Χωρίς ελληνικά" } },
      { label: { en: "Revisited", el: "Επιστροφή" }, value: "2026" }
    ],
    lesson: { en: "A dead end you documented is a product you can build later.", el: "Ένα αδιέξοδο που κατέγραψες είναι ένα προϊόν που μπορείς να φτιάξεις αργότερα." },
    images: [
      { n: 37, caption: { en: "The booking form and confirmation", el: "Η φόρμα και η επιβεβαίωση ραντεβού" } },
      { n: 43, caption: { en: "The call, 4 Mar 2024", el: "Η κλήση, 4 Μαρ 2024" } },
      { n: 41, caption: { en: "Another call the same week", el: "Άλλη κλήση την ίδια εβδομάδα" } }
    ]
  },
  {
    id: "in-person", period: "p2024", chapter: "web", icon: "pin", status: "lesson", milestone: true,
    date: { en: "Feb – Jun 2024", el: "Φεβ – Ιουν 2024" },
    short: { en: "Athens on foot", el: "Αθήνα με τα πόδια" },
    title: { en: "Athens on foot: the in-person meeting era", el: "Αθήνα με τα πόδια: η εποχή των δια ζώσης ραντεβού" },
    subtitle: { en: "Dozens of clinics, a pocket full of business cards, very few closes", el: "Δεκάδες ιατρεία, μια τσέπη γεμάτη κάρτες, ελάχιστα κλεισίματα" },
    meanwhile: { en: "Cold calling from London, then flying to Greece and booking every meeting in person", el: "Cold calling από το Λονδίνο, μετά πτήση στην Ελλάδα και όλα τα ραντεβού δια ζώσης" },
    body: {
      en: "For four months the model was: cold call from London, and every time I landed in Greece, run the meetings face to face. Dentists, ophthalmologists, paediatricians, dermatologists, nutritionists — Kifisia, Glyfada, Peristeri, Kolonaki. The photos from this period are almost all waiting rooms, business cards and traffic. It closed some clients. It also burned an enormous amount of time on people who were never going to buy, and that is what produced the single most valuable operational lesson of the whole journey: qualify online, meet online.",
      el: "Για τέσσερις μήνες το μοντέλο ήταν: cold call από το Λονδίνο, και κάθε φορά που προσγειωνόμουν στην Ελλάδα, όλα τα ραντεβού πρόσωπο με πρόσωπο. Οδοντίατροι, οφθαλμίατροι, παιδίατροι, δερματολόγοι, διαιτολόγοι — Κηφισιά, Γλυφάδα, Περιστέρι, Κολωνάκι. Οι φωτογραφίες αυτής της περιόδου είναι σχεδόν όλες αίθουσες αναμονής, επαγγελματικές κάρτες και κίνηση. Έκλεισε κάποιους πελάτες. Έκαψε όμως και τεράστιο χρόνο σε ανθρώπους που δεν επρόκειτο ποτέ να αγοράσουν, και αυτό παρήγαγε το πιο πολύτιμο λειτουργικό μάθημα όλης της διαδρομής: qualify online, ραντεβού online."
    },
    metrics: [
      { label: { en: "Months", el: "Μήνες" }, value: "5" },
      { label: { en: "Meeting type", el: "Τύπος ραντεβού" }, value: { en: "In person only", el: "Μόνο δια ζώσης" } },
      { label: { en: "Time cost", el: "Κόστος χρόνου" }, value: { en: "Very high", el: "Πολύ υψηλό" } },
      { label: { en: "Lesson value", el: "Αξία μαθήματος" }, value: { en: "Highest", el: "Η μεγαλύτερη" } }
    ],
    lesson: {
      en: "An unqualified meeting costs the same as a qualified one — and in person it costs three hours instead of twenty minutes.",
      el: "Ένα μη ποιοτικοποιημένο ραντεβού κοστίζει όσο και ένα ποιοτικό — και δια ζώσης κοστίζει τρεις ώρες αντί για είκοσι λεπτά."
    },
    images: [
      { n: 38, caption: { en: "In the clinic, February 2024", el: "Στο ιατρείο, Φεβρουάριος 2024" } },
      { n: 40, caption: { en: "Business card — oral surgery, Kifisia", el: "Κάρτα — στοματική χειρουργική, Κηφισιά" } },
      { n: 39, caption: { en: "Another waiting room", el: "Άλλη μια αίθουσα αναμονής" } },
      { n: 47, caption: { en: "Researching the next prospect — ophthalmologist, Glyfada", el: "Έρευνα για τον επόμενο υποψήφιο — οφθαλμίατρος, Γλυφάδα" } },
      { n: 49, caption: { en: "VK Vision", el: "VK Vision" } },
      { n: 64, caption: { en: "Clinical nutritionist, Kolonaki", el: "Κλινική διαιτολόγος, Κολωνάκι" } },
      { n: 65, caption: { en: "Paediatrician, Kifisia", el: "Παιδίατρος, Κηφισιά" } },
      { n: 67, caption: { en: "Dental implants, Athens", el: "Οδοντικά εμφυτεύματα, Αθήνα" } },
      { n: 52, caption: { en: "Lunch on the way to the next one", el: "Φαγητό καθ' οδόν προς το επόμενο" } },
      { n: 55, caption: { en: "Building the sites at home in between", el: "Χτίζοντας τα sites στο σπίτι ενδιάμεσα" } }
    ]
  },
  {
    id: "t212", period: "p2024", chapter: "trading", icon: "piggy", status: "win",
    date: { en: "14 Mar – 15 Aug 2024", el: "14 Μαρ – 15 Αυγ 2024" },
    short: { en: "€1,243 → €3,506", el: "€1.243 → €3.506" },
    title: { en: "Saving into Trading 212: €1,243 → €3,506", el: "Αποταμίευση στο Trading 212: €1.243 → €3.506" },
    subtitle: { en: "Not trading yet — just putting it somewhere", el: "Όχι trading ακόμα — απλώς τα έβαζα κάπου" },
    meanwhile: { en: "Second year finishing, third year ahead", el: "Το δεύτερο έτος τελειώνει, το τρίτο μπροστά" },
    body: {
      en: "Everything the websites earned went into a Trading 212 account. On 14 March 2024 it was €1,243. By 15 August 2024 it was €3,506. At this point it was pure saving — index-style holdings, small positions, no leverage, no drama. That came later.",
      el: "Ό,τι έβγαζαν τα websites πήγαινε σε έναν λογαριασμό Trading 212. Στις 14 Μαρτίου 2024 ήταν €1.243. Στις 15 Αυγούστου 2024 ήταν €3.506. Εκείνη τη στιγμή ήταν καθαρή αποταμίευση — μετοχές τύπου index, μικρές θέσεις, καμία μόχλευση, κανένα δράμα. Αυτά ήρθαν αργότερα."
    },
    metrics: [
      { label: { en: "14 Mar 2024", el: "14 Μαρ 2024" }, value: "€1,243" },
      { label: { en: "15 Aug 2024", el: "15 Αυγ 2024" }, value: "€3,506" },
      { label: { en: "Growth", el: "Αύξηση" }, value: "×2.8" }
    ],
    lesson: { en: "Saving is boring and it is the only reason there was ever capital to lose later.", el: "Η αποταμίευση είναι βαρετή και είναι ο μόνος λόγος που υπήρξε ποτέ κεφάλαιο για να χαθεί αργότερα." },
    images: [
      { n: 44, caption: { en: "14 March 2024 — €1,243.04", el: "14 Μαρτίου 2024 — €1.243,04" } },
      { n: 69, caption: { en: "15 August 2024 — €3,506.84", el: "15 Αυγούστου 2024 — €3.506,84" } }
    ]
  },
  {
    id: "paid-clients", period: "p2024", chapter: "web", icon: "check", status: "win",
    date: { en: "Apr – Jun 2024", el: "Απρ – Ιουν 2024" },
    short: { en: "Getting paid", el: "Πληρωμές" },
    title: { en: "Real clients, real invoices — €120–150 a site", el: "Πραγματικοί πελάτες, πραγματικά τιμολόγια — €120–150 ανά site" },
    subtitle: { en: "Paediatricians, ophthalmologists, telecardiology", el: "Παιδίατροι, οφθαλμίατροι, τηλεκαρδιολογία" },
    meanwhile: { en: "Finishing second year at KCL", el: "Τελειώνοντας το δεύτερο έτος στο KCL" },
    body: {
      en: "The free-first offer started converting. Clients sent material, approved drafts, transferred payment and asked for the domain. Small tickets — €120, €126, €150 — but they arrived on their own, repeatedly, and the whole loop from cold call to live site to invoice finally closed.",
      el: "Η προσφορά «δωρεάν πρώτα» άρχισε να κάνει conversion. Οι πελάτες έστελναν υλικό, ενέκριναν προσχέδια, έκαναν μεταφορά και ζητούσαν το domain. Μικρά ποσά — €120, €126, €150 — αλλά έρχονταν από μόνα τους, επαναλαμβανόμενα, και ο κύκλος από cold call σε ζωντανό site σε τιμολόγιο επιτέλους έκλεισε."
    },
    metrics: [
      { label: { en: "Typical ticket", el: "Τυπικό ποσό" }, value: "€120–150" },
      { label: { en: "Niches", el: "Niches" }, value: { en: "Medical", el: "Ιατρικά" } },
      { label: { en: "Model", el: "Μοντέλο" }, value: { en: "Build → invoice", el: "Φτιάχνω → τιμολογώ" } }
    ],
    lesson: { en: "Small tickets that repeat beat big tickets that never land.", el: "Μικρά ποσά που επαναλαμβάνονται κερδίζουν τα μεγάλα που δεν έρχονται ποτέ." },
    images: [
      { n: 57, caption: { en: "'The money has been deposited'", el: "«Τα χρήματα έχουν κατατεθεί»" } },
      { n: 59, caption: { en: "€120 transferred, invoice details sent", el: "Μεταφορά €120, στοιχεία τιμολόγησης" } },
      { n: 60, caption: { en: "€126.20 — bank confirmation", el: "€126,20 — επιβεβαίωση τράπεζας" } },
      { n: 48, caption: { en: "Client sending material for the website", el: "Πελάτης στέλνει υλικό για το website" } },
      { n: 68, caption: { en: "Telecardiology — free website request", el: "Τηλεκαρδιολογία — αίτημα για δωρεάν website" } },
      { n: 63, caption: { en: "Online meeting — nutrition client", el: "Online ραντεβού — πελάτης διατροφής" } }
    ]
  },
  {
    id: "card-skins", period: "p2024", chapter: "ecommerce", icon: "card", status: "fail",
    date: { en: "20 Aug 2024", el: "20 Αυγ 2024" },
    short: { en: "Card skins", el: "Αυτοκόλλητα καρτών" },
    title: { en: "The viral card-skin idea", el: "Η ιδέα των viral αυτοκόλλητων για κάρτες" },
    subtitle: { en: "'Anti Social Social Club', 'My Husband's Card'", el: "«Anti Social Social Club», «My Husband's Card»" },
    meanwhile: { en: "Summer before third year at KCL", el: "Καλοκαίρι πριν το τρίτο έτος στο KCL" },
    body: {
      en: "Convinced that credit-card skins with funny slogans would go viral on short-form video, I spent days going through catalogues picking designs. It never got past the research stage — a week later a better idea landed and this one was dropped.",
      el: "Πεπεισμένος ότι αυτοκόλλητα για πιστωτικές κάρτες με αστεία σλόγκαν θα γίνονταν viral σε short-form video, πέρασα μέρες ψάχνοντας καταλόγους και διαλέγοντας σχέδια. Δεν πέρασε ποτέ το στάδιο της έρευνας — μια εβδομάδα μετά ήρθε καλύτερη ιδέα και αυτή εγκαταλείφθηκε."
    },
    metrics: [
      { label: { en: "Designs reviewed", el: "Σχέδια" }, value: "47" },
      { label: { en: "Ordered", el: "Παραγγέλθηκαν" }, value: "0" },
      { label: { en: "Lifespan", el: "Διάρκεια" }, value: { en: "~2 weeks", el: "~2 εβδομάδες" } }
    ],
    lesson: { en: "'This will go viral' is a hypothesis, not a plan.", el: "Το «αυτό θα γίνει viral» είναι υπόθεση, όχι σχέδιο." },
    images: [
      { n: 70, caption: { en: "Catalogue, design 9/47", el: "Κατάλογος, σχέδιο 9/47" } },
      { n: 71, caption: { en: "Catalogue, design 18/47", el: "Κατάλογος, σχέδιο 18/47" } }
    ]
  },
  {
    id: "nfc-stands", period: "p2024", chapter: "ecommerce", icon: "nfc", status: "lesson",
    date: { en: "4 Sep 2024 → still selling", el: "4 Σεπ 2024 → πουλιέται ακόμα" },
    short: { en: "NFC review stands", el: "NFC σταντ κριτικών" },
    title: { en: "NFC Google review stands — the one product that stuck", el: "NFC σταντ κριτικών Google — το ένα προϊόν που έμεινε" },
    subtitle: { en: "€26.98 an order · ~€350 spent · ~€400 back", el: "€26,98 η παραγγελία · ~€350 έξοδα · ~€400 έσοδα" },
    meanwhile: { en: "Third year at King's College London begins", el: "Ξεκινά το τρίτο έτος στο King's College London" },
    body: {
      en: "Launched 4 September 2024 and taken on full time: a tap-to-review NFC stand that pushes customers straight to a business's Google reviews. Ads were run through a Fiverr freelancer, around €350 went out across Shopify, commissions and CJdropshipping, and about €400 came back. Orders were real — €26.98 at a time, the Shopify notifications stacking up on the lock screen. I was convinced this was the idea, and I still believe selling them in person works. But it is a one-off purchase, not a business: nobody buys a second stand. Advon still sells them today, as an add-on rather than a company.",
      el: "Ξεκίνησε στις 4 Σεπτεμβρίου 2024 και το πήρα full time: ένα NFC σταντ που με ένα tap στέλνει τον πελάτη κατευθείαν στις κριτικές Google μιας επιχείρησης. Οι διαφημίσεις έτρεχαν μέσω ενός freelancer από το Fiverr, έφυγαν περίπου €350 συνολικά σε Shopify, προμήθειες και CJdropshipping, και γύρισαν περίπου €400. Οι παραγγελίες ήταν πραγματικές — €26,98 τη φορά, με τις ειδοποιήσεις Shopify να στοιβάζονται στην οθόνη. Ήμουν πεπεισμένος ότι αυτή ήταν η ιδέα, και ακόμα πιστεύω ότι η δια ζώσης πώληση δουλεύει. Αλλά είναι αγορά μιας φοράς, όχι επιχείρηση: κανείς δεν αγοράζει δεύτερο σταντ. Η Advon τα πουλάει ακόμα σήμερα, ως πρόσθετο και όχι ως εταιρεία."
    },
    metrics: [
      { label: { en: "Launch", el: "Launch" }, value: "04/09/2024" },
      { label: { en: "Order value", el: "Αξία παραγγελίας" }, value: "€26.98" },
      { label: { en: "Spent", el: "Έξοδα" }, value: "≈ €350" },
      { label: { en: "Made", el: "Έσοδα" }, value: "≈ €400" },
      { label: { en: "Still sold", el: "Πουλιέται ακόμα" }, value: { en: "Yes", el: "Ναι" } }
    ],
    lesson: {
      en: "A one-off purchase is a product. A reason to come back is a business.",
      el: "Μια αγορά μιας φοράς είναι προϊόν. Ένας λόγος να ξαναέρθουν είναι επιχείρηση."
    },
    images: [
      { n: 72, caption: { en: "The creative — tap here, review on Google", el: "Το creative — tap εδώ, κριτική στη Google" } },
      { n: 74, caption: { en: "Orders stacking on the lock screen — €26.98 each", el: "Παραγγελίες στη lock screen — €26,98 η καθεμία" } },
      { n: 75, caption: { en: "Order #1012, 10 October", el: "Παραγγελία #1012, 10 Οκτωβρίου" } },
      { n: 76, caption: { en: "Ads manager — 20,544 reach, 7 ads", el: "Ads manager — 20.544 reach, 7 διαφημίσεις" } },
      { n: 73, caption: { en: "Day one of the store", el: "Πρώτη μέρα του store" } }
    ]
  },
  {
    id: "trading", period: "p2024", chapter: "trading", icon: "chart", status: "fail", milestone: true,
    date: { en: "Nov 2024 – early Feb 2025", el: "Νοε 2024 – αρχές Φεβ 2025" },
    short: { en: "Day trading → CFDs", el: "Day trading → CFDs" },
    title: { en: "Day trading Realty Income and NVIDIA — then CFDs took it back", el: "Day trading σε Realty Income και NVIDIA — μετά τα CFDs τα πήραν πίσω" },
    subtitle: { en: "+€1,800, then −€1,000 in a single day", el: "+€1.800, μετά −€1.000 σε μία μέρα" },
    meanwhile: { en: "Third year at KCL, trading between lectures in London", el: "Τρίτο έτος στο KCL, trading ανάμεσα σε μαθήματα στο Λονδίνο" },
    body: {
      en: "From November 2024 to early February 2025 I day traded — Realty Income and NVIDIA as stocks first, then CFDs. At the peak I was around €1,800 in profit. Then DeepSeek was released, NVIDIA dropped roughly 10%, I was long, I held, it fell to about −17%, and I got out. It rebounded the next day. I had already lost — around €1,000 gone in a single session, and the rest bled away after. The account history is a wall of red: −$3,004, −$5,289, −$230. Almost everything I had made went back.",
      el: "Από τον Νοέμβριο 2024 μέχρι τις αρχές Φεβρουαρίου 2025 έκανα day trading — πρώτα Realty Income και NVIDIA ως μετοχές, μετά CFDs. Στο peak ήμουν περίπου €1.800 σε κέρδος. Μετά βγήκε το DeepSeek, η NVIDIA έπεσε γύρω στο 10%, ήμουν long, κράτησα, έφτασε περίπου στο −17%, και βγήκα. Την επόμενη μέρα ανέκαμψε. Είχα ήδη χάσει — περίπου €1.000 σε μία συνεδρίαση, και τα υπόλοιπα έφυγαν σιγά σιγά μετά. Το ιστορικό είναι ένας τοίχος κόκκινου: −$3.004, −$5.289, −$230. Σχεδόν όλα όσα είχα βγάλει γύρισαν πίσω."
    },
    metrics: [
      { label: { en: "Peak profit", el: "Μέγιστο κέρδος" }, value: "≈ €1,800" },
      { label: { en: "Worst day", el: "Χειρότερη μέρα" }, value: "≈ −€1,000" },
      { label: { en: "Trigger", el: "Αφορμή" }, value: "DeepSeek / NVDA" },
      { label: { en: "Net result", el: "Καθαρό αποτέλεσμα" }, value: { en: "Gave it back", el: "Τα έδωσα πίσω" } }
    ],
    lesson: {
      en: "Leverage doesn't create skill, it exposes its absence. I build assets now — not positions.",
      el: "Η μόχλευση δεν δημιουργεί ικανότητα, αποκαλύπτει την απουσία της. Τώρα χτίζω περιουσιακά στοιχεία — όχι θέσεις."
    },
    images: [
      { n: 77, caption: { en: "Realty Income orders — +€321.80 recorded", el: "Εντολές Realty Income — +€321,80 καταγεγραμμένα" } },
      { n: 78, caption: { en: "NVIDIA market sell — $11,791 filled", el: "NVIDIA market sell — $11.791 εκτελέστηκε" } },
      { n: 83, caption: { en: "The wall of red: −$3,004, −$5,289", el: "Ο τοίχος του κόκκινου: −$3.004, −$5.289" } },
      { n: 80, caption: { en: "The charts, the levels, the alerts", el: "Τα charts, τα levels, τα alerts" } },
      { n: 79, caption: { en: "Two laptops, outside, London", el: "Δύο laptop, έξω, Λονδίνο" } },
      { n: 81, caption: { en: "Deposits €10,680 · withdrawals €11,510", el: "Καταθέσεις €10.680 · αναλήψεις €11.510" } }
    ]
  },

  /* ========================== 2025 =========================== */
  {
    id: "reset-list", period: "p2025", chapter: "foundation", icon: "list", status: "lesson",
    date: { en: "29 Apr 2025", el: "29 Απρ 2025" },
    short: { en: "The reset list", el: "Η λίστα επανεκκίνησης" },
    title: { en: "The reset list — every idea on one page", el: "Η λίστα επανεκκίνησης — κάθε ιδέα σε μία σελίδα" },
    subtitle: { en: "AI social media, booking systems, courses, NFC, SMMA, dropshipping…", el: "AI social media, συστήματα ραντεβού, courses, NFC, SMMA, dropshipping…" },
    meanwhile: { en: "Final months of the KCL degree", el: "Τελευταίοι μήνες του πτυχίου στο KCL" },
    body: {
      en: "After the trading account emptied, I sat down and wrote out every idea I had — AI social media manager at €50/month, booking system €50/month, AI receptionist €97–250/month, fitness course, door-to-door NFC stands plus websites, email and calendar AI, customer support chatbot, dropshipping UK–US, digital products, shorts automation. Then I picked.",
      el: "Αφού άδειασε ο λογαριασμός trading, κάθισα και έγραψα κάθε ιδέα που είχα — AI social media manager στα €50/μήνα, σύστημα ραντεβού €50/μήνα, AI ρεσεψιονίστ €97–250/μήνα, fitness course, πόρτα-πόρτα NFC σταντ μαζί με websites, email και calendar AI, chatbot υποστήριξης, dropshipping UK–US, ψηφιακά προϊόντα, αυτοματοποίηση shorts. Και μετά διάλεξα."
    },
    metrics: [
      { label: { en: "Ideas written", el: "Ιδέες" }, value: "30+" },
      { label: { en: "Chosen", el: "Επιλέχθηκε" }, value: "1" },
      { label: { en: "Date", el: "Ημερομηνία" }, value: "29/04/2025" }
    ],
    lesson: { en: "You cannot choose between ideas you have not written down.", el: "Δεν μπορείς να διαλέξεις ανάμεσα σε ιδέες που δεν έχεις γράψει." },
    images: [{ n: 84, caption: { en: "The list, 29 April 2025", el: "Η λίστα, 29 Απριλίου 2025" } }]
  },
  {
    id: "smma-2025", period: "p2025", chapter: "smma", icon: "target", status: "fail",
    date: { en: "8 May – early Jun 2025", el: "8 Μαΐου – αρχές Ιουν 2025" },
    short: { en: "SMMA, one more time", el: "SMMA, άλλη μία φορά" },
    title: { en: "SMMA at €25 a month — closed one dentist, then stopped", el: "SMMA στα €25 τον μήνα — έκλεισα έναν οδοντίατρο και σταμάτησα" },
    subtitle: { en: "AI-generated posts, in-person close in Kolonaki", el: "Posts με AI, δια ζώσης κλείσιμο στο Κολωνάκι" },
    meanwhile: { en: "Degree finishing, one month all-in on this", el: "Το πτυχίο τελειώνει, ένας μήνας αφιερωμένος εξ ολοκλήρου σε αυτό" },
    body: {
      en: "8 May 2025: one focused month on social media management, priced at €25–50 per business, with AI-generated images doing the content. I never really believed the posts would earn engagement, but I believed I could run many accounts at once and build something recurring. I cold called, and closed the very first person I met in person — a dentist in Kolonaki. Then reality: he later forgot he had even paid, I messaged him, he never replied. I did get paid, and I upsold him the NFC review base. But the value was not there, and I shut it down.",
      el: "8 Μαΐου 2025: ένας μήνας αφιερωμένος στη διαχείριση social media, στα €25–50 ανά επιχείρηση, με εικόνες φτιαγμένες από AI για περιεχόμενο. Ποτέ δεν πίστεψα πραγματικά ότι τα posts θα έφερναν engagement, αλλά πίστευα ότι μπορούσα να τρέχω πολλούς λογαριασμούς μαζί και να χτίσω κάτι επαναλαμβανόμενο. Έκανα cold calling και έκλεισα τον πρώτο κιόλας άνθρωπο που συνάντησα δια ζώσης — έναν οδοντίατρο στο Κολωνάκι. Και μετά η πραγματικότητα: ξέχασε ακόμα και ότι είχε πληρώσει, του έστειλα μήνυμα, δεν απάντησε ποτέ. Πληρώθηκα και του έκανα upsell τη βάση κριτικών NFC. Αλλά η αξία δεν ήταν εκεί, και το έκλεισα."
    },
    metrics: [
      { label: { en: "Price", el: "Τιμή" }, value: "€25–50/mo" },
      { label: { en: "Clients closed", el: "Πελάτες" }, value: "1" },
      { label: { en: "Content", el: "Περιεχόμενο" }, value: { en: "AI images", el: "Εικόνες AI" } },
      { label: { en: "Duration", el: "Διάρκεια" }, value: { en: "~1 month", el: "~1 μήνας" } }
    ],
    lesson: {
      en: "If the client cannot remember paying you, you were not delivering value — you were delivering activity.",
      el: "Αν ο πελάτης δεν θυμάται καν ότι σε πλήρωσε, δεν παρέδιδες αξία — παρέδιδες κίνηση."
    },
    images: [
      { n: 85, caption: { en: "The pitch, €50 → €25", el: "Το pitch, €50 → €25" } },
      { n: 86, caption: { en: "The full script, rewritten", el: "Το πλήρες script, ξαναγραμμένο" } },
      { n: 87, caption: { en: "Prospecting — dermatology", el: "Prospecting — δερματολογία" } },
      { n: 88, caption: { en: "Prospecting — Harley Street", el: "Prospecting — Harley Street" } }
    ]
  },
  {
    id: "online-calling", period: "p2025", chapter: "web", icon: "phone", status: "win", milestone: true,
    date: { en: "Jun 2025", el: "Ιουν 2025" },
    short: { en: "Cold calling, online", el: "Cold calling, online" },
    title: { en: "Back to websites — but every meeting online", el: "Πίσω στα websites — αλλά κάθε ραντεβού online" },
    subtitle: { en: "The lesson from 2024, finally applied", el: "Το μάθημα του 2024, επιτέλους σε εφαρμογή" },
    meanwhile: { en: "Final weeks of the degree at King's College London", el: "Τελευταίες εβδομάδες του πτυχίου στο King's College London" },
    body: {
      en: "June 2025: back to what had always actually paid — websites — but this time cold calling with every meeting run online instead of in person. Everything got faster: more calls per day, more meetings per week, no traffic, no wasted afternoons. A few hundred euros came in that month, and for the first time the machine felt like a machine.",
      el: "Ιούνιος 2025: πίσω σε αυτό που πάντα πλήρωνε πραγματικά — websites — αλλά αυτή τη φορά cold calling με όλα τα ραντεβού online αντί για δια ζώσης. Όλα έγιναν πιο γρήγορα: περισσότερες κλήσεις την ημέρα, περισσότερα ραντεβού την εβδομάδα, καμία κίνηση, κανένα χαμένο απόγευμα. Μπήκαν λίγες εκατοντάδες ευρώ εκείνον τον μήνα, και για πρώτη φορά η μηχανή έμοιαζε με μηχανή."
    },
    metrics: [
      { label: { en: "Meetings", el: "Ραντεβού" }, value: { en: "100% online", el: "100% online" } },
      { label: { en: "Pipeline tracked", el: "Pipeline" }, value: "€2,380" },
      { label: { en: "Month result", el: "Αποτέλεσμα μήνα" }, value: { en: "A few hundred €", el: "Λίγες εκατοντάδες €" } }
    ],
    lesson: { en: "The same offer, delivered without travel, is a different business.", el: "Η ίδια προσφορά, χωρίς μετακινήσεις, είναι άλλη επιχείρηση." },
    images: [
      { n: 91, caption: { en: "Client and renewal tracker — €2,380", el: "Παρακολούθηση πελατών & ανανεώσεων — €2.380" } },
      { n: 92, caption: { en: "Online meeting", el: "Online ραντεβού" } },
      { n: 90, caption: { en: "Another one, same week", el: "Άλλο ένα, την ίδια εβδομάδα" } },
      { n: 89, caption: { en: "Paediatric site being presented", el: "Παρουσίαση παιδιατρικού site" } }
    ]
  },
  {
    id: "graduation", period: "p2025", chapter: "foundation", icon: "cap", status: "win",
    date: { en: "Jul – Aug 2025", el: "Ιουλ – Αυγ 2025" },
    short: { en: "Graduated", el: "Πτυχίο" },
    title: { en: "Graduated from King's College London", el: "Πτυχίο από το King's College London" },
    subtitle: { en: "Three years of doing both at once, finished", el: "Τρία χρόνια που έτρεχαν και τα δύο μαζί, τέλος" },
    meanwhile: { en: "Vacation until August — the first real break in three years", el: "Διακοπές μέχρι τον Αύγουστο — το πρώτο πραγματικό διάλειμμα σε τρία χρόνια" },
    body: {
      en: "The degree finished in July 2025. Every stage before this one happened while studying full time in London — cold calls between lectures, builds at night, meetings on flights home. From here on, the business had my full attention for the first time.",
      el: "Το πτυχίο τελείωσε τον Ιούλιο 2025. Κάθε στάδιο πριν από αυτό συνέβη ενώ σπούδαζα full time στο Λονδίνο — cold calls ανάμεσα σε μαθήματα, builds τα βράδια, ραντεβού σε πτήσεις για Ελλάδα. Από εδώ και πέρα, η επιχείρηση είχε για πρώτη φορά όλη μου την προσοχή."
    },
    metrics: [
      { label: { en: "Degree", el: "Πτυχίο" }, value: "KCL" },
      { label: { en: "Years running both", el: "Χρόνια παράλληλα" }, value: "3" }
    ],
    lesson: { en: "Nothing here was built with free time. It was built with the time that was left.", el: "Τίποτα εδώ δεν χτίστηκε με ελεύθερο χρόνο. Χτίστηκε με τον χρόνο που περίσσευε." },
    images: []
  },
  {
    id: "sep-oct-2025", period: "p2025", chapter: "web", icon: "trend", status: "win", milestone: true,
    date: { en: "Sep – Oct 2025", el: "Σεπ – Οκτ 2025" },
    short: { en: "≈€2k, then ≈€2k", el: "≈€2k, μετά ≈€2k" },
    title: { en: "Deferring the army to test the business properly", el: "Αναβάλλοντας τον στρατό για να δοκιμάσω σωστά την επιχείρηση" },
    subtitle: { en: "≈ €2,000 net in September · ≈ €2,000 net in October", el: "≈ €2.000 καθαρά τον Σεπτέμβριο · ≈ €2.000 καθαρά τον Οκτώβριο" },
    meanwhile: { en: "Army deferred from September to November — deliberately", el: "Ο στρατός μετατέθηκε από Σεπτέμβριο σε Νοέμβριο — σκόπιμα" },
    body: {
      en: "Mandatory military service was due in September. I pushed it to November on purpose, to get two clean months of testing the online model with nothing else on my mind. I was not even working full days — plenty of that time was spent enjoying life and being on holiday — and it still produced roughly €2,000 net in September and another €2,000 in October, with Stripe paying out steadily every few days.",
      el: "Η θητεία ήταν για τον Σεπτέμβριο. Την πήγα επίτηδες Νοέμβριο, για να έχω δύο καθαρούς μήνες να δοκιμάσω το online μοντέλο χωρίς τίποτα άλλο στο μυαλό. Ούτε καν δούλευα ολόκληρες μέρες — αρκετός από αυτόν τον χρόνο πήγε σε διακοπές και στο να απολαμβάνω τη ζωή — και παρ' όλα αυτά έβγαλε περίπου €2.000 καθαρά τον Σεπτέμβριο και άλλα €2.000 τον Οκτώβριο, με το Stripe να πληρώνει σταθερά κάθε λίγες μέρες."
    },
    metrics: [
      { label: { en: "September net", el: "Σεπτέμβριος καθαρά" }, value: "≈ €2,000" },
      { label: { en: "October net", el: "Οκτώβριος καθαρά" }, value: "≈ €2,000" },
      { label: { en: "Payout cadence", el: "Συχνότητα πληρωμών" }, value: { en: "Every few days", el: "Κάθε λίγες μέρες" } },
      { label: { en: "Effort", el: "Ένταση" }, value: { en: "Part time", el: "Μερική απασχόληση" } }
    ],
    lesson: {
      en: "Buying yourself two uninterrupted months is worth more than any tactic.",
      el: "Το να αγοράσεις για τον εαυτό σου δύο αδιάκοπους μήνες αξίζει περισσότερο από οποιαδήποτε τακτική."
    },
    images: [
      { n: 94, caption: { en: "Cold call tracker — September", el: "Παρακολούθηση cold calls — Σεπτέμβριος" } },
      { n: 95, caption: { en: "The sheet mid-September", el: "Το φύλλο στα μέσα Σεπτεμβρίου" } },
      { n: 101, caption: { en: "Stripe payouts, late October", el: "Πληρωμές Stripe, τέλη Οκτωβρίου" } },
      { n: 97, caption: { en: "Client call", el: "Κλήση πελάτη" } },
      { n: 98, caption: { en: "Client call", el: "Κλήση πελάτη" } },
      { n: 99, caption: { en: "Client call", el: "Κλήση πελάτη" } },
      { n: 100, caption: { en: "Client call", el: "Κλήση πελάτη" } }
    ]
  },
  {
    id: "pulse-power", period: "p2025", chapter: "ecommerce", icon: "battery", status: "fail",
    date: { en: "30–31 Oct 2025", el: "30–31 Οκτ 2025" },
    short: { en: "Pulse Power", el: "Pulse Power" },
    title: { en: "Pulse Power — the mini power bank", el: "Pulse Power — το mini power bank" },
    subtitle: { en: "A brand, a full creative set, and then nothing", el: "Ένα brand, ένα πλήρες σετ creative, και μετά τίποτα" },
    meanwhile: { en: "Weeks before basic training", el: "Λίγες εβδομάδες πριν τον στρατό" },
    body: {
      en: "The last e-commerce attempt: a 22.5W keyring power bank, branded Pulse Power, with a complete set of product renders and short-form clips ready to go. It never became a business — by this point the websites were paying and the army was two weeks away.",
      el: "Η τελευταία απόπειρα e-commerce: ένα power bank μπρελόκ 22,5W, με brand Pulse Power, με πλήρες σετ από renders προϊόντος και έτοιμα short-form clips. Δεν έγινε ποτέ επιχείρηση — σε εκείνο το σημείο τα websites πλήρωναν και ο στρατός ήταν σε δύο εβδομάδες."
    },
    metrics: [
      { label: { en: "Product", el: "Προϊόν" }, value: "22.5W" },
      { label: { en: "Creatives made", el: "Creatives" }, value: "15+" },
      { label: { en: "Stores built total", el: "Συνολικά stores" }, value: "6" }
    ],
    lesson: { en: "By the sixth store, the pattern was undeniable: I like launching more than I like selling.", el: "Στο έκτο store, το μοτίβο ήταν αδιαμφισβήτητο: μου αρέσει περισσότερο να ξεκινάω παρά να πουλάω." },
    images: [
      { n: 104, caption: { en: "Pulse Power — the product", el: "Pulse Power — το προϊόν" } },
      { n: 105, caption: { en: "The full creative set", el: "Το πλήρες σετ creative" } },
      { n: 102, caption: { en: "Lifestyle render", el: "Lifestyle render" } },
      { n: 103, caption: { en: "The brand", el: "Το brand" } }
    ]
  },
  {
    id: "army", period: "p2025", chapter: "foundation", icon: "shield2", status: "lesson",
    date: { en: "Nov 2025", el: "Νοε 2025" },
    short: { en: "Tripoli — 26 days", el: "Τρίπολη — 26 ημέρες" },
    title: { en: "Basic training, Tripoli — 26 days offline", el: "Βασική εκπαίδευση, Τρίπολη — 26 ημέρες offline" },
    subtitle: { en: "The only period with zero work done", el: "Η μόνη περίοδος με μηδέν δουλειά" },
    meanwhile: { en: "Mandatory military service begins", el: "Ξεκινά η θητεία" },
    body: {
      en: "26 days of basic training in Tripoli, with no ability to work at all. Everything stopped. It was also the first forced pause since 2022, and the plan for January was written in the head long before it was written down.",
      el: "26 ημέρες βασικής εκπαίδευσης στην Τρίπολη, χωρίς καμία δυνατότητα δουλειάς. Όλα σταμάτησαν. Ήταν και η πρώτη αναγκαστική παύση από το 2022, και το σχέδιο για τον Ιανουάριο γράφτηκε στο μυαλό πολύ πριν γραφτεί στο χαρτί."
    },
    metrics: [
      { label: { en: "Days", el: "Ημέρες" }, value: "26" },
      { label: { en: "Location", el: "Τοποθεσία" }, value: { en: "Tripoli", el: "Τρίπολη" } },
      { label: { en: "Revenue", el: "Έσοδα" }, value: "€0" }
    ],
    lesson: { en: "A business that stops when you stop is still a job. That is worth knowing early.", el: "Μια επιχείρηση που σταματά όταν σταματάς είναι ακόμα δουλειά. Καλό είναι να το μάθεις νωρίς." },
    images: []
  },
  {
    id: "december-2025", period: "p2025", chapter: "web", icon: "spark", status: "win",
    date: { en: "Dec 2025", el: "Δεκ 2025" },
    short: { en: "Loading the spring", el: "Τεντώνοντας το ελατήριο" },
    title: { en: "December: everything loaded for a January launch", el: "Δεκέμβριος: όλα έτοιμα για εκκίνηση τον Ιανουάριο" },
    subtitle: { en: "Lists, scripts, systems — ready before the gun", el: "Λίστες, scripts, συστήματα — έτοιμα πριν την εκκίνηση" },
    meanwhile: { en: "Out of basic training, serving, planning around army hours", el: "Έξω από τη βασική, υπηρετώντας, με προγραμματισμό γύρω από τις ώρες του στρατού" },
    body: {
      en: "Out of basic training, the whole of December went into preparation: prospect lists, scripts, the tracker, the delivery process — so that January could start at full speed the moment circumstances and army hours allowed. The goal written down was €5,000 net profit by June 2026.",
      el: "Μετά τη βασική, όλος ο Δεκέμβριος πήγε σε προετοιμασία: λίστες υποψηφίων, scripts, ο πίνακας παρακολούθησης, η διαδικασία παράδοσης — ώστε ο Ιανουάριος να ξεκινήσει με πλήρη ταχύτητα μόλις το επέτρεπαν οι συνθήκες και οι ώρες του στρατού. Ο στόχος που γράφτηκε ήταν €5.000 καθαρό κέρδος μέχρι τον Ιούνιο 2026."
    },
    metrics: [
      { label: { en: "Goal set", el: "Στόχος" }, value: "€5,000 net" },
      { label: { en: "Deadline set", el: "Προθεσμία" }, value: "Jun 2026" }
    ],
    lesson: { en: "The month before the sprint decides the sprint.", el: "Ο μήνας πριν το σπριντ καθορίζει το σπριντ." },
    images: []
  },

  /* ========================== 2026 =========================== */
  {
    id: "january-2026", period: "p2026", chapter: "web", icon: "trophy", status: "win", milestone: true,
    date: { en: "Jan 2026", el: "Ιαν 2026" },
    short: { en: "Goal hit — in month one", el: "Ο στόχος έπεσε — μήνα ένα" },
    title: { en: "The June goal, hit in January", el: "Ο στόχος του Ιουνίου, πιασμένος τον Ιανουάριο" },
    subtitle: { en: "€5,945 booked · 100% of the month · the biggest milestone so far", el: "€5.945 κλεισμένα · 100% του μήνα · το μεγαλύτερο ορόσημο μέχρι σήμερα" },
    meanwhile: { en: "Serving in the army, working around it", el: "Υπηρετώντας στον στρατό, δουλεύοντας γύρω από αυτό" },
    body: {
      en: "The goal set in December was €5,000 net by June 2026. It was hit in the first month. January 2026 closed at €5,945 booked with the month tracked at 100% — around €6,000 net, while still serving in the army. Four years after the first $200 affiliate commission, this is the single biggest milestone of the entire journey.",
      el: "Ο στόχος που τέθηκε τον Δεκέμβριο ήταν €5.000 καθαρά μέχρι τον Ιούνιο 2026. Έπεσε τον πρώτο μήνα. Ο Ιανουάριος 2026 έκλεισε με €5.945 κλεισμένα και τον μήνα στο 100% — περίπου €6.000 καθαρά, ενώ ακόμα υπηρετούσα στον στρατό. Τέσσερα χρόνια μετά την πρώτη προμήθεια affiliate των $200, αυτό είναι το μεγαλύτερο ορόσημο όλης της διαδρομής."
    },
    metrics: [
      { label: { en: "Booked", el: "Κλεισμένα" }, value: "€5,945" },
      { label: { en: "Net profit", el: "Καθαρό κέρδος" }, value: "≈ €6,000" },
      { label: { en: "Month booked", el: "Μήνας κλεισμένος" }, value: "100%" },
      { label: { en: "vs goal", el: "vs στόχος" }, value: { en: "5 months early", el: "5 μήνες νωρίτερα" } }
    ],
    lesson: {
      en: "Four years of failures were not a detour. They were the reason one month could do this.",
      el: "Τέσσερα χρόνια αποτυχιών δεν ήταν παράκαμψη. Ήταν ο λόγος που ένας μήνας μπόρεσε να το κάνει αυτό."
    },
    images: [
      { n: 107, caption: { en: "'Jan Booked 100%' — €5,945", el: "«Jan Booked 100%» — €5.945" } },
      { n: 106, caption: { en: "Stripe payouts through late January and February", el: "Πληρωμές Stripe τέλη Ιανουαρίου και Φεβρουάριο" } }
    ]
  },
  {
    id: "march-2026", period: "p2026", chapter: "web", icon: "trend", status: "win", milestone: true,
    date: { en: "Feb – Mar 2026", el: "Φεβ – Μαρ 2026" },
    short: { en: "€6,550 — best month", el: "€6.550 — καλύτερος μήνας" },
    title: { en: "March 2026 — €6,550, the best month yet", el: "Μάρτιος 2026 — €6.550, ο καλύτερος μήνας μέχρι τώρα" },
    subtitle: { en: "Also the most intense — the army was still running", el: "Και ο πιο έντονος — ο στρατός συνεχιζόταν" },
    meanwhile: { en: "Still serving; work squeezed into every hour outside", el: "Ακόμα στον στρατό· η δουλειά στριμωγμένη σε κάθε ώρα εκτός" },
    body: {
      en: "Months were not identical — each one had a different number of weeks actually available to work. February held, and March closed at €6,550 with the month booked 100%. It was the most time-consuming and intense stretch of the whole business, run in parallel with military service.",
      el: "Οι μήνες δεν ήταν ίδιοι — ο καθένας είχε διαφορετικό αριθμό εβδομάδων πραγματικά διαθέσιμων για δουλειά. Ο Φεβρουάριος κράτησε, και ο Μάρτιος έκλεισε στα €6.550 με τον μήνα κλεισμένο 100%. Ήταν το πιο χρονοβόρο και έντονο διάστημα όλης της επιχείρησης, παράλληλα με τη θητεία."
    },
    metrics: [
      { label: { en: "March booked", el: "Μάρτιος κλεισμένος" }, value: "€6,550" },
      { label: { en: "Month booked", el: "Μήνας" }, value: "100%" },
      { label: { en: "Conditions", el: "Συνθήκες" }, value: { en: "Army in parallel", el: "Στρατός παράλληλα" } }
    ],
    lesson: { en: "Consistency is not identical months. It is a floor that keeps rising.", el: "Συνέπεια δεν είναι ίδιοι μήνες. Είναι ένα πάτωμα που ανεβαίνει." },
    images: [
      { n: 111, caption: { en: "'March Booked 100%' — €6,550", el: "«March Booked 100%» — €6.550" } },
      { n: 108, caption: { en: "The meetings sheet, March 2026", el: "Το φύλλο ραντεβού, Μάρτιος 2026" } },
      { n: 93, caption: { en: "The cold call board", el: "Ο πίνακας cold calls" } }
    ]
  },
  {
    id: "build-stack", period: "p2026", chapter: "web", icon: "code", status: "lesson",
    date: { en: "Jan – May 2026", el: "Ιαν – Μάι 2026" },
    short: { en: "GoHighLevel → AI", el: "GoHighLevel → AI" },
    title: { en: "How the sites get built: GoHighLevel → Gemini → Claude", el: "Πώς χτίζονται τα sites: GoHighLevel → Gemini → Claude" },
    subtitle: { en: "Every website until Jan 2026 was built on GoHighLevel", el: "Κάθε website μέχρι τον Ιαν 2026 χτίστηκε σε GoHighLevel" },
    meanwhile: { en: "Serving, delivering, and rebuilding the toolchain at the same time", el: "Στρατός, παραδόσεις, και ταυτόχρονα ξαναχτίσιμο των εργαλείων" },
    body: {
      en: "From the very first site until January 2026, every single website was built on GoHighLevel. After that I moved to raw HTML generated with Gemini, and from May 2026 to Claude. It is faster than the builder, but it is still slow and the AI still makes plenty of mistakes — each site takes real time and real correction. Alongside that came tool research: white-label AI sales agents, appointment-booking software, anything that could take work off the pile.",
      el: "Από το πρώτο κιόλας site μέχρι τον Ιανουάριο 2026, κάθε website χτίστηκε σε GoHighLevel. Μετά πέρασα σε καθαρό HTML φτιαγμένο με Gemini, και από τον Μάιο 2026 σε Claude. Είναι πιο γρήγορο από τον builder, αλλά παραμένει αργό και το AI κάνει ακόμα αρκετά λάθη — κάθε site θέλει πραγματικό χρόνο και πραγματική διόρθωση. Παράλληλα έτρεχε έρευνα εργαλείων: white-label AI sales agents, software για ραντεβού, οτιδήποτε μπορούσε να βγάλει δουλειά από τη στοίβα."
    },
    metrics: [
      { label: { en: "Until Jan 2026", el: "Μέχρι Ιαν 2026" }, value: "GoHighLevel" },
      { label: { en: "Jan – May 2026", el: "Ιαν – Μάι 2026" }, value: "Gemini / HTML" },
      { label: { en: "From May 2026", el: "Από Μάι 2026" }, value: "Claude" }
    ],
    lesson: { en: "New tools do not remove the work. They move it — from building to reviewing.", el: "Τα νέα εργαλεία δεν βγάζουν τη δουλειά. Τη μετακινούν — από το χτίσιμο στον έλεγχο." },
    images: [
      { n: 109, caption: { en: "White-label AI sales agent research", el: "Έρευνα για white-label AI sales agent" } },
      { n: 110, caption: { en: "Appointment booking software research", el: "Έρευνα για software ραντεβού" } }
    ]
  },
  {
    id: "spring-2026", period: "p2026", chapter: "web", icon: "sun", status: "win",
    date: { en: "Apr – Jun 2026", el: "Απρ – Ιουν 2026" },
    short: { en: "Less time, still €3k+", el: "Λιγότερος χρόνος, πάλι €3k+" },
    title: { en: "April to June: less time in, still over €3,000 net", el: "Απρίλιος με Ιούνιο: λιγότερος χρόνος, πάλι πάνω από €3.000 καθαρά" },
    subtitle: { en: "Vacation in April, a lighter May and June", el: "Διακοπές τον Απρίλιο, πιο χαλαρός Μάιος και Ιούνιος" },
    meanwhile: { en: "A lot of April was holiday; May and June were deliberately lighter", el: "Ο Απρίλιος πήγε σε μεγάλο βαθμό σε διακοπές· ο Μάιος και ο Ιούνιος ήταν σκόπιμα πιο ήπιοι" },
    body: {
      en: "April was mostly holiday. May and June were not worked as hard either. Even so, each month cleared more than €3,000 net. That is the number that matters most from this stretch: the floor held while the hours dropped.",
      el: "Ο Απρίλιος ήταν κυρίως διακοπές. Ούτε ο Μάιος και ο Ιούνιος δουλεύτηκαν το ίδιο σκληρά. Παρ' όλα αυτά, κάθε μήνας ξεπέρασε τα €3.000 καθαρά. Αυτό είναι το νούμερο που μετράει περισσότερο από αυτή την περίοδο: το πάτωμα κράτησε ενώ οι ώρες έπεσαν."
    },
    metrics: [
      { label: { en: "Monthly net", el: "Καθαρά ανά μήνα" }, value: "> €3,000" },
      { label: { en: "Hours", el: "Ώρες" }, value: { en: "Reduced", el: "Μειωμένες" } },
      { label: { en: "Floor", el: "Πάτωμα" }, value: { en: "Held", el: "Κράτησε" } }
    ],
    lesson: { en: "The real test of a system is what it does on your lazy months.", el: "Το πραγματικό τεστ ενός συστήματος είναι τι κάνει στους τεμπέλικους μήνες σου." },
    images: []
  },
  {
    id: "today", period: "p2026", chapter: "web", icon: "pin2", status: "live", milestone: true,
    date: { en: "Jul – 15 Aug 2026 · present", el: "Ιουλ – 15 Αυγ 2026 · σήμερα" },
    short: { en: "Referrals only", el: "Μόνο συστάσεις" },
    title: { en: "Today: cold calling stopped, referrals only", el: "Σήμερα: τα cold calls σταμάτησαν, μόνο συστάσεις" },
    subtitle: { en: "Clearing the backlog — and it is not cleared yet", el: "Ξεκαθαρίζοντας τη στοίβα — και δεν έχει τελειώσει ακόμα" },
    meanwhile: { en: "15 August 2026 — this is where the map ends, for now", el: "15 Αυγούστου 2026 — εδώ τελειώνει ο χάρτης, προς το παρόν" },
    body: {
      en: "In July 2026 I stopped cold calling entirely. Since then the work has come purely from referrals, and the focus has been on finishing every job already in the pipeline. As of 15 August 2026 that is still not done. Advon Media today: 200+ websites delivered, 110+ five-star Google reviews, a 5.0 rating, websites built with no upfront payment, first sample in 7–14 days, unlimited revisions, hosting from €10.83/month, and ten service lines around the core — Google Business and Maps with NFC review stands, online booking with automated reminders, a bilingual AI website assistant, direct booking for tourism synced with Booking, Airbnb and Expedia, digital QR menus, cost calculators, custom small software, wedding and christening sites and social media management.",
      el: "Τον Ιούλιο 2026 σταμάτησα τελείως τα cold calls. Από τότε η δουλειά έρχεται καθαρά από συστάσεις, και η εστίαση είναι να τελειώσουν όλα τα έργα που είναι ήδη στη σειρά. Στις 15 Αυγούστου 2026 αυτό δεν έχει ολοκληρωθεί ακόμα. Η Advon Media σήμερα: 200+ websites παραδομένα, 110+ πεντάστερες κριτικές Google, βαθμολογία 5.0, κατασκευή χωρίς προκαταβολή, πρώτο δείγμα σε 7–14 ημέρες, απεριόριστες διορθώσεις, hosting από 10,83€/μήνα, και δέκα υπηρεσίες γύρω από τον πυρήνα — Google Business & Maps με NFC σταντ κριτικών, online ραντεβού με αυτόματες υπενθυμίσεις, δίγλωσσος AI βοηθός ιστοσελίδας, direct booking για τουρισμό συγχρονισμένο με Booking, Airbnb και Expedia, ψηφιακά QR menu, υπολογιστές κόστους, custom μικρά software, sites γάμου και βάπτισης, και διαχείριση social media."
    },
    metrics: [
      { label: { en: "Websites built", el: "Websites" }, value: "200+" },
      { label: { en: "5★ Google reviews", el: "5★ κριτικές Google" }, value: "110+" },
      { label: { en: "Google rating", el: "Βαθμολογία Google" }, value: "5.0" },
      { label: { en: "Upfront cost", el: "Προκαταβολή" }, value: { en: "€0", el: "0€" } },
      { label: { en: "First sample", el: "Πρώτο δείγμα" }, value: { en: "7–14 days", el: "7–14 ημέρες" } },
      { label: { en: "Hosting from", el: "Hosting από" }, value: { en: "€10.83/mo", el: "10,83€/μήνα" } },
      { label: { en: "Lead source", el: "Πηγή πελατών" }, value: { en: "Referrals", el: "Συστάσεις" } },
      { label: { en: "Service lines", el: "Υπηρεσίες" }, value: "10" }
    ],
    lesson: {
      en: "Nothing was wasted. Every failed venture is now a department in what I run today.",
      el: "Τίποτα δεν πήγε χαμένο. Κάθε αποτυχημένο εγχείρημα είναι σήμερα ένα τμήμα σε αυτό που τρέχω."
    },
    images: []
  },

  /* ========================== NEXT ============================ */
  {
    id: "next-ads", period: "pnext", chapter: "next", icon: "megaphone", status: "next",
    date: { en: "Next", el: "Επόμενο" },
    short: { en: "Meta + Google Ads", el: "Meta + Google Ads" },
    title: { en: "Meta + Google Ads — scale the web business to €5–10k net", el: "Meta + Google Ads — κλιμάκωση του web business στα €5–10k καθαρά" },
    subtitle: { en: "Stop relying on referrals alone", el: "Τέλος στην αποκλειστική εξάρτηση από συστάσεις" },
    meanwhile: { en: "Being planned now", el: "Σχεδιάζεται τώρα" },
    body: {
      en: "The next lever is paid acquisition for Advon itself: Meta and Google Ads feeding the pipeline instead of cold calls or word of mouth, with the target of holding €5,000–10,000 net per month and going beyond it.",
      el: "Ο επόμενος μοχλός είναι το paid acquisition για την ίδια την Advon: Meta και Google Ads να τροφοδοτούν το pipeline αντί για cold calls ή στόμα με στόμα, με στόχο να κρατηθούν τα €5.000–10.000 καθαρά τον μήνα και να ξεπεραστούν."
    },
    metrics: [
      { label: { en: "Target", el: "Στόχος" }, value: "€5–10k / mo" },
      { label: { en: "Channel", el: "Κανάλι" }, value: "Meta · Google" }
    ],
    lesson: { en: "", el: "" },
    images: []
  },
  {
    id: "next-video", period: "pnext", chapter: "next", icon: "film", status: "next",
    date: { en: "Next", el: "Επόμενο" },
    short: { en: "AI video for villas", el: "AI video για βίλες" },
    title: { en: "AI video for villas, apartments and rentals", el: "AI video για βίλες, διαμερίσματα και ενοικιάσεις" },
    subtitle: { en: "A second product for a market I already serve", el: "Ένα δεύτερο προϊόν για μια αγορά που ήδη εξυπηρετώ" },
    meanwhile: { en: "On the list", el: "Στη λίστα" },
    body: {
      en: "Short-form AI-generated video for villas, apartments and short-term rentals — the same tourism clients who already take direct booking and websites, sold a product that photography alone cannot deliver.",
      el: "Short-form video φτιαγμένο με AI για βίλες, διαμερίσματα και βραχυχρόνιες μισθώσεις — οι ίδιοι τουριστικοί πελάτες που ήδη παίρνουν direct booking και websites, με ένα προϊόν που δεν το δίνει η φωτογραφία μόνη της."
    },
    metrics: [{ label: { en: "Market", el: "Αγορά" }, value: { en: "Tourism", el: "Τουρισμός" } }],
    lesson: { en: "", el: "" },
    images: []
  },
  {
    id: "next-software", period: "pnext", chapter: "next", icon: "cube", status: "next",
    date: { en: "Next", el: "Επόμενο" },
    short: { en: "Custom software", el: "Custom software" },
    title: { en: "Custom software", el: "Custom software" },
    subtitle: { en: "The highest-value thing the skillset can sell", el: "Το πιο υψηλής αξίας που μπορεί να πουλήσει αυτό το skillset" },
    meanwhile: { en: "On the list", el: "Στη λίστα" },
    body: {
      en: "Small bespoke software for the businesses already on the books — the natural end point of everything from the €330/month booking calendar written by hand in 2023 to the AI tooling used to build sites today.",
      el: "Μικρά custom software για τις επιχειρήσεις που είναι ήδη πελάτες — το φυσικό τέρμα όλων, από το booking calendar των €330/μήνα που γράφτηκε στο χέρι το 2023 μέχρι τα εργαλεία AI που χτίζουν τα sites σήμερα."
    },
    metrics: [{ label: { en: "Status", el: "Κατάσταση" }, value: { en: "Planned", el: "Σχεδιασμός" } }],
    lesson: { en: "", el: "" },
    images: []
  }
  ]
};
