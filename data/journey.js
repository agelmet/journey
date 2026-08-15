/* =============================================================
   JOURNEY DATA  —  ΤΟ ΜΟΝΟ ΑΡΧΕΙΟ ΠΟΥ ΧΡΕΙΑΖΕΤΑΙ ΝΑ ΑΛΛΑΖΕΙΣ
   -------------------------------------------------------------
   HOW TO EDIT / ΠΩΣ ΝΑ ΤΟ ΑΛΛΑΞΕΙΣ:

   1) Κάθε στάδιο (stage) είναι ένα αντικείμενο { ... } στη λίστα.
   2) Κάθε κείμενο έχει δύο γλώσσες:  { en: "...", el: "..." }
   3) Για εικόνες: βάλε το αρχείο στον φάκελο /images και γράψε
      { src: "images/to-arxeio.jpg", caption: { en: "...", el: "..." } }
   4) status:  "win" | "fail" | "lesson" | "live"
   5) Οι ημερομηνίες είναι placeholders — άλλαξέ τες ελεύθερα.
   ============================================================= */

window.JOURNEY = {

  profile: {
    name: "Angelo",
    handle: "@agelmet",
    role: {
      en: "Founder — Advon Media",
      el: "Founder — Advon Media"
    },
    tagline: {
      en: "From a 18-year-old chasing affiliate commissions to running a web & marketing studio. Every win, every failure, every lesson — on one map.",
      el: "Από 18άρης που κυνηγούσε προμήθειες affiliate, μέχρι το δικό μου web & marketing studio. Κάθε νίκη, κάθε αποτυχία, κάθε μάθημα — σε έναν χάρτη."
    },
    startYear: 2022,
    currentLabel: { en: "August 2026 — you are here", el: "Αύγουστος 2026 — εδώ είμαστε" },
    links: [
      { label: "Advon Media", url: "https://advonmedia.com" },
      { label: "GitHub", url: "https://github.com/agelmet" }
    ]
  },

  /* Chapters = τα μεγάλα κεφάλαια. Χρησιμοποιούνται στα φίλτρα & στα χρώματα. */
  chapters: [
    { id: "affiliate",    label: { en: "Affiliate",    el: "Affiliate" },     color: "#7c5cff" },
    { id: "dropshipping", label: { en: "Dropshipping", el: "Dropshipping" },  color: "#00d4ff" },
    { id: "trading",      label: { en: "Trading",      el: "Trading" },       color: "#ff9f45" },
    { id: "smma",         label: { en: "SMMA",         el: "SMMA" },          color: "#ff5c8a" },
    { id: "web",          label: { en: "Web & Agency", el: "Web & Agency" },  color: "#2bd98b" }
  ],

  stages: [
    /* ---------------------------------------------------------- 01 */
    {
      id: "affiliate-2022",
      chapter: "affiliate",
      icon: "🚀",
      status: "lesson",
      year: "2022",
      date: { en: "2022 · age 18", el: "2022 · στα 18 μου" },
      duration: { en: "≈ TBD months", el: "≈ TBD μήνες" },
      title: { en: "Affiliate Marketing — the first click", el: "Affiliate Marketing — το πρώτο κλικ" },
      subtitle: { en: "Where it all started", el: "Εκεί που ξεκίνησαν όλα" },
      body: {
        en: "At 18 I discovered that a link could make money while I slept. I went deep into affiliate marketing: choosing offers, writing copy, testing traffic sources and learning — the hard way — what actually converts. No big paydays, but this is where the obsession was born: understanding *why* a person clicks, and *why* they buy.",
        el: "Στα 18 μου ανακάλυψα ότι ένα link μπορεί να βγάζει λεφτά όσο κοιμάμαι. Μπήκα βαθιά στο affiliate marketing: επιλογή προσφορών, copywriting, δοκιμές σε traffic sources και μάθηση — με τον δύσκολο τρόπο — για το τι πραγματικά κάνει conversion. Δεν έβγαλα τρελά λεφτά, αλλά εκεί γεννήθηκε η εμμονή: να καταλάβω *γιατί* κάποιος κλικάρει και *γιατί* αγοράζει."
      },
      metrics: [
        { label: { en: "Age", el: "Ηλικία" }, value: "18" },
        { label: { en: "Capital", el: "Κεφάλαιο" }, value: "≈ TBD" },
        { label: { en: "Outcome", el: "Αποτέλεσμα" }, value: { en: "Foundation", el: "Βάση" } }
      ],
      lesson: {
        en: "Traffic without a real offer is just noise. Attention is easy — trust is the product.",
        el: "Traffic χωρίς πραγματική προσφορά είναι απλά θόρυβος. Η προσοχή είναι εύκολη — η εμπιστοσύνη είναι το προϊόν."
      },
      images: [
        { src: "images/placeholder-affiliate-1.svg", caption: { en: "Me, 2022 — replace this photo", el: "Εγώ, 2022 — αντικατάστησε τη φωτό" } },
        { src: "images/placeholder-affiliate-2.svg", caption: { en: "First dashboard / campaign", el: "Πρώτο dashboard / καμπάνια" } }
      ]
    },

    /* ---------------------------------------------------------- 02 */
    {
      id: "ds-puffer-cases",
      chapter: "dropshipping",
      icon: "📱",
      status: "fail",
      year: "2022",
      date: { en: "2022 · TBD", el: "2022 · TBD" },
      duration: { en: "≈ TBD", el: "≈ TBD" },
      title: { en: "Dropshipping #1 — Puffer Phone Cases", el: "Dropshipping #1 — Puffer Θήκες Κινητού" },
      subtitle: { en: "My first real store", el: "Το πρώτο μου πραγματικό store" },
      body: {
        en: "The first store I built end-to-end: product research, Shopify build, creatives, paid ads. Puffer cases were trending hard and I learned what riding a trend actually costs — margins, shipping times, ad account chaos and refund requests.",
        el: "Το πρώτο store που έστησα από την αρχή ως το τέλος: product research, Shopify, creatives, paid ads. Οι puffer θήκες ήταν σε τρελό trend και έμαθα τι κοστίζει πραγματικά να κυνηγάς ένα trend — περιθώρια, χρόνοι αποστολής, χάος με τα ad accounts και αιτήματα επιστροφών."
      },
      metrics: [
        { label: { en: "Ad spend", el: "Ad spend" }, value: "TBD" },
        { label: { en: "Revenue", el: "Τζίρος" }, value: "TBD" },
        { label: { en: "Platform", el: "Πλατφόρμα" }, value: "Shopify" }
      ],
      lesson: {
        en: "A trending product is a deadline, not a business.",
        el: "Ένα trending προϊόν είναι προθεσμία, όχι επιχείρηση."
      },
      images: [
        { src: "images/placeholder-store-puffer.svg", caption: { en: "Store screenshot", el: "Screenshot του store" } }
      ]
    },

    /* ---------------------------------------------------------- 03 */
    {
      id: "ds-mini-projector",
      chapter: "dropshipping",
      icon: "📽️",
      status: "fail",
      year: "2022",
      date: { en: "2022 · TBD", el: "2022 · TBD" },
      duration: { en: "≈ TBD", el: "≈ TBD" },
      title: { en: "Dropshipping #2 — Mini Projector", el: "Dropshipping #2 — Mini Projector" },
      subtitle: { en: "Higher ticket, higher expectations", el: "Πιο ακριβό προϊόν, πιο μεγάλες προσδοκίες" },
      body: {
        en: "Moving up in price point to fix the margin problem. Better creatives, better landing page — but higher price means higher trust needed, and a no-name brand shipping from overseas doesn't buy trust.",
        el: "Ανέβασα τιμή για να λύσω το πρόβλημα του περιθωρίου. Καλύτερα creatives, καλύτερη landing page — αλλά ψηλότερη τιμή σημαίνει περισσότερη εμπιστοσύνη, και ένα no-name brand που στέλνει από το εξωτερικό δεν αγοράζει εμπιστοσύνη."
      },
      metrics: [
        { label: { en: "Ticket", el: "Τιμή" }, value: "TBD" },
        { label: { en: "ROAS", el: "ROAS" }, value: "TBD" },
        { label: { en: "Outcome", el: "Αποτέλεσμα" }, value: { en: "Closed", el: "Έκλεισε" } }
      ],
      lesson: {
        en: "Raising the price raises the bar for everything else — brand, proof, support.",
        el: "Όταν ανεβάζεις την τιμή, ανεβάζει ο πήχης σε όλα — brand, αποδείξεις, υποστήριξη."
      },
      images: [
        { src: "images/placeholder-store-projector.svg", caption: { en: "Product page", el: "Σελίδα προϊόντος" } }
      ]
    },

    /* ---------------------------------------------------------- 04 */
    {
      id: "ds-blackhead-remover",
      chapter: "dropshipping",
      icon: "✨",
      status: "lesson",
      year: "2023",
      date: { en: "2023 · TBD", el: "2023 · TBD" },
      duration: { en: "≈ TBD", el: "≈ TBD" },
      title: { en: "Dropshipping #3 — Nose Blackhead Remover", el: "Dropshipping #3 — Συσκευή Μαύρων Στιγμάτων" },
      subtitle: { en: "Beauty niche, problem-solving product", el: "Beauty niche, προϊόν που λύνει πρόβλημα" },
      body: {
        en: "First time selling a real 'problem → solution' product with strong video hooks. Best creative performance so far, but the beauty niche is brutally competitive and ad policies around skin claims are unforgiving.",
        el: "Πρώτη φορά που πούλησα πραγματικό προϊόν 'πρόβλημα → λύση' με δυνατά video hooks. Τα καλύτερα creatives μέχρι τότε, αλλά το beauty niche είναι άγρια ανταγωνιστικό και οι πολιτικές διαφημίσεων για το δέρμα δεν συγχωρούν."
      },
      metrics: [
        { label: { en: "Best CTR", el: "Καλύτερο CTR" }, value: "TBD" },
        { label: { en: "Orders", el: "Παραγγελίες" }, value: "TBD" },
        { label: { en: "Channel", el: "Κανάλι" }, value: "TikTok / Meta" }
      ],
      lesson: {
        en: "A visible problem sells itself — the creative is the product.",
        el: "Ένα ορατό πρόβλημα πουλάει μόνο του — το creative είναι το προϊόν."
      },
      images: [
        { src: "images/placeholder-store-blackhead.svg", caption: { en: "Ad creative / store", el: "Creative διαφήμισης / store" } }
      ]
    },

    /* ---------------------------------------------------------- 05 */
    {
      id: "ds-mini-powerbank",
      chapter: "dropshipping",
      icon: "🔋",
      status: "fail",
      year: "2023",
      date: { en: "2023 · TBD", el: "2023 · TBD" },
      duration: { en: "≈ TBD", el: "≈ TBD" },
      title: { en: "Dropshipping #4 — Mini Power Bank", el: "Dropshipping #4 — Mini Power Bank" },
      subtitle: { en: "The last store — and the exit", el: "Το τελευταίο store — και η έξοδος" },
      body: {
        en: "By now I could launch a store in a weekend. That was exactly the problem: so could everyone else. Same suppliers, same photos, same ads, zero moat. This is where I decided dropshipping wasn't the game I wanted to play.",
        el: "Πλέον μπορούσα να στήσω store σε ένα Σαββατοκύριακο. Αυτό ακριβώς ήταν το πρόβλημα: μπορούσαν και όλοι οι άλλοι. Ίδιοι προμηθευτές, ίδιες φωτογραφίες, ίδιες διαφημίσεις, μηδέν πλεονέκτημα. Εκεί αποφάσισα ότι το dropshipping δεν ήταν το παιχνίδι μου."
      },
      metrics: [
        { label: { en: "Stores built", el: "Stores συνολικά" }, value: "4" },
        { label: { en: "Verdict", el: "Ετυμηγορία" }, value: { en: "Move on", el: "Προχωράω" } },
        { label: { en: "Skills kept", el: "Skills που κράτησα" }, value: { en: "Ads, CRO, Shopify", el: "Ads, CRO, Shopify" } }
      ],
      lesson: {
        en: "If anyone can copy you in a weekend, you don't own a business — you rent a trend.",
        el: "Αν σε αντιγράφει ο καθένας σε ένα Σαββατοκύριακο, δεν έχεις επιχείρηση — νοικιάζεις ένα trend."
      },
      images: [
        { src: "images/placeholder-store-powerbank.svg", caption: { en: "Store / product shots", el: "Store / φωτό προϊόντος" } }
      ]
    },

    /* ---------------------------------------------------------- 06 */
    {
      id: "smma-gohighlevel",
      chapter: "smma",
      icon: "🎯",
      status: "lesson",
      year: "2023",
      date: { en: "2023 · TBD", el: "2023 · TBD" },
      duration: { en: "≈ TBD", el: "≈ TBD" },
      title: { en: "High-Ticket SMMA with GoHighLevel", el: "High-Ticket SMMA με GoHighLevel" },
      subtitle: { en: "From selling products to selling results", el: "Από πώληση προϊόντων σε πώληση αποτελεσμάτων" },
      body: {
        en: "I switched from B2C to B2B: lead generation for high-ticket niches, built on GoHighLevel — funnels, pipelines, automations, missed-call text-back, review requests. For the first time I wasn't selling a $30 gadget, I was selling a system. Cold outreach, discovery calls, proposals — a completely different skill set.",
        el: "Πέρασα από B2C σε B2B: lead generation για high-ticket niches, πάνω σε GoHighLevel — funnels, pipelines, automations, missed-call text-back, αιτήματα κριτικών. Για πρώτη φορά δεν πουλούσα ένα gadget των 30€, πουλούσα σύστημα. Cold outreach, discovery calls, προτάσεις — τελείως άλλο σετ δεξιοτήτων."
      },
      metrics: [
        { label: { en: "Stack", el: "Stack" }, value: "GoHighLevel" },
        { label: { en: "Model", el: "Μοντέλο" }, value: { en: "Retainer", el: "Retainer" } },
        { label: { en: "Niches", el: "Niches" }, value: { en: "Medical / dental", el: "Ιατρικά / οδοντιατρικά" } }
      ],
      lesson: {
        en: "Businesses don't buy ads. They buy booked appointments.",
        el: "Οι επιχειρήσεις δεν αγοράζουν διαφημίσεις. Αγοράζουν κλεισμένα ραντεβού."
      },
      images: [
        { src: "images/placeholder-smma.svg", caption: { en: "GoHighLevel funnel / pipeline", el: "GoHighLevel funnel / pipeline" } }
      ]
    },

    /* ---------------------------------------------------------- 07 */
    {
      id: "glynos-rhodes",
      chapter: "smma",
      icon: "🦷",
      status: "lesson",
      year: "2023",
      date: { en: "2023 · TBD", el: "2023 · TBD" },
      duration: { en: "≈ TBD", el: "≈ TBD" },
      title: { en: "Dr. George Glynos, Rhodes — the turning point", el: "Δρ. Γιώργος Γλυνός, Ρόδος — το σημείο καμπής" },
      subtitle: { en: "The client who redirected the whole business", el: "Ο πελάτης που άλλαξε ολόκληρη την πορεία" },
      body: {
        en: "Chasing dental clients in Greece, I reached dentist George Glynos in Rhodes. He told me something that changed my direction: in Greece, advertising is restricted for doctors and dentists. The SMMA playbook I had built simply could not be run for that niche here. But he still needed to be found online — he needed a website. So I built one. That single conversation moved me from 'ads agency' to 'web'.",
        el: "Κυνηγώντας οδοντιατρικούς πελάτες στην Ελλάδα, έφτασα στον οδοντίατρο Γιώργο Γλυνό στη Ρόδο. Μου είπε κάτι που άλλαξε την κατεύθυνσή μου: στην Ελλάδα η διαφήμιση είναι περιορισμένη για γιατρούς και οδοντιάτρους. Το SMMA playbook που είχα χτίσει απλά δεν μπορούσε να τρέξει σε αυτό το niche εδώ. Παρ' όλα αυτά, έπρεπε να τον βρίσκουν online — χρειαζόταν website. Οπότε του έφτιαξα. Αυτή η μία κουβέντα με μετακίνησε από 'ads agency' σε 'web'."
      },
      metrics: [
        { label: { en: "Location", el: "Τοποθεσία" }, value: { en: "Rhodes, GR", el: "Ρόδος" } },
        { label: { en: "Blocker", el: "Εμπόδιο" }, value: { en: "Ads restricted", el: "Απαγόρευση διαφήμισης" } },
        { label: { en: "Pivot", el: "Στροφή" }, value: { en: "Ads → Websites", el: "Ads → Websites" } }
      ],
      lesson: {
        en: "Listen to the objection. Sometimes the 'no' is the map to the real business.",
        el: "Άκου την αντίρρηση. Καμιά φορά το 'όχι' είναι ο χάρτης για την πραγματική δουλειά."
      },
      images: [
        { src: "images/placeholder-dental.svg", caption: { en: "Dental website project", el: "Έργο website οδοντιατρείου" } }
      ]
    },

    /* ---------------------------------------------------------- 08 */
    {
      id: "trading-stocks",
      chapter: "trading",
      icon: "📈",
      status: "lesson",
      year: "2023",
      date: { en: "2023–2024 · TBD", el: "2023–2024 · TBD" },
      duration: { en: "≈ TBD", el: "≈ TBD" },
      title: { en: "Day Trading — stocks, starting with NVIDIA", el: "Day Trading — μετοχές, ξεκινώντας από NVIDIA" },
      subtitle: { en: "The detour", el: "Η παράκαμψη" },
      body: {
        en: "The markets pulled me in. I started with stocks — NVIDIA above all — charts, levels, earnings, pre-market. Early green days convinced me I had found a faster road. What I had actually found was a very expensive teacher.",
        el: "Οι αγορές με τράβηξαν. Ξεκίνησα με μετοχές — κυρίως NVIDIA — charts, levels, earnings, pre-market. Οι πρώτες κερδοφόρες μέρες με έπεισαν ότι βρήκα πιο γρήγορο δρόμο. Αυτό που είχα βρει στην πραγματικότητα ήταν ένας πολύ ακριβός δάσκαλος."
      },
      metrics: [
        { label: { en: "Main ticker", el: "Κύρια μετοχή" }, value: "NVDA" },
        { label: { en: "Style", el: "Στυλ" }, value: { en: "Day trading", el: "Day trading" } },
        { label: { en: "Result", el: "Αποτέλεσμα" }, value: "TBD" }
      ],
      lesson: {
        en: "Being right and being profitable are two different skills.",
        el: "Το να έχεις δίκιο και το να βγάζεις κέρδος είναι δύο διαφορετικές ικανότητες."
      },
      images: [
        { src: "images/placeholder-trading-1.svg", caption: { en: "Trading setup / chart", el: "Trading setup / chart" } }
      ]
    },

    /* ---------------------------------------------------------- 09 */
    {
      id: "trading-cfd",
      chapter: "trading",
      icon: "📉",
      status: "fail",
      year: "2024",
      date: { en: "2024 · TBD", el: "2024 · TBD" },
      duration: { en: "≈ TBD", el: "≈ TBD" },
      title: { en: "CFDs & leverage — the loss", el: "CFDs & μόχλευση — η απώλεια" },
      subtitle: { en: "The most expensive lesson", el: "Το πιο ακριβό μάθημα" },
      body: {
        en: "From stocks I moved to CFDs, where leverage makes everything faster — including the losses. I gave back what I had made and more. No excuses: I was trading size I couldn't emotionally handle, in a game where the house has infinite patience. Painful, but it ended the search for a shortcut for good.",
        el: "Από τις μετοχές πήγα σε CFDs, όπου η μόχλευση κάνει τα πάντα πιο γρήγορα — και τις απώλειες. Έδωσα πίσω όσα είχα βγάλει και παραπάνω. Χωρίς δικαιολογίες: έπαιζα με μέγεθος που δεν άντεχα ψυχολογικά, σε ένα παιχνίδι όπου το σπίτι έχει άπειρη υπομονή. Πονεμένο, αλλά τελείωσε οριστικά το ψάξιμο για συντομεύσεις."
      },
      metrics: [
        { label: { en: "Instrument", el: "Προϊόν" }, value: "CFDs" },
        { label: { en: "Result", el: "Αποτέλεσμα" }, value: { en: "Loss", el: "Ζημιά" } },
        { label: { en: "Recovery", el: "Επιστροφή" }, value: { en: "Back to work", el: "Πίσω στη δουλειά" } }
      ],
      lesson: {
        en: "Leverage doesn't create skill, it exposes its absence. I build assets now — not positions.",
        el: "Η μόχλευση δεν δημιουργεί ικανότητα, αποκαλύπτει την απουσία της. Τώρα χτίζω περιουσιακά στοιχεία — όχι θέσεις."
      },
      images: [
        { src: "images/placeholder-trading-2.svg", caption: { en: "The drawdown", el: "Το drawdown" } }
      ]
    },

    /* ---------------------------------------------------------- 10 */
    {
      id: "back-to-web",
      chapter: "web",
      icon: "💻",
      status: "win",
      year: "2025",
      date: { en: "2025 · TBD", el: "2025 · TBD" },
      duration: { en: "≈ TBD", el: "≈ TBD" },
      title: { en: "Back to websites — building real assets", el: "Πίσω στα websites — χτίζοντας πραγματικά assets" },
      subtitle: { en: "The skill that always paid", el: "Το skill που πάντα πλήρωνε" },
      body: {
        en: "I went back to what actually worked and what I was actually good at: building websites that make businesses look credible and get found. Real clients, real invoices, real results. Everything I learned before — copy, ads, funnels, CRO — finally had somewhere to live.",
        el: "Γύρισα σε αυτό που πραγματικά δούλευε και σε αυτό που πραγματικά ήμουν καλός: να φτιάχνω websites που κάνουν τις επιχειρήσεις να δείχνουν αξιόπιστες και να τις βρίσκουν. Πραγματικοί πελάτες, πραγματικά τιμολόγια, πραγματικά αποτελέσματα. Όλα όσα είχα μάθει — copy, ads, funnels, CRO — βρήκαν επιτέλους σπίτι."
      },
      metrics: [
        { label: { en: "Clients", el: "Πελάτες" }, value: "TBD" },
        { label: { en: "Sites shipped", el: "Sites που παρέδωσα" }, value: "TBD" },
        { label: { en: "Model", el: "Μοντέλο" }, value: { en: "Project + care plan", el: "Project + συντήρηση" } }
      ],
      lesson: {
        en: "The boring skill you already have usually beats the exciting one you don't.",
        el: "Το βαρετό skill που ήδη έχεις συνήθως κερδίζει το συναρπαστικό που δεν έχεις."
      },
      images: [
        { src: "images/placeholder-web-1.svg", caption: { en: "Client website", el: "Website πελάτη" } },
        { src: "images/placeholder-web-2.svg", caption: { en: "Another project", el: "Άλλο έργο" } }
      ]
    },

    /* ---------------------------------------------------------- 11 */
    {
      id: "advon-media",
      chapter: "web",
      icon: "🏆",
      status: "live",
      year: "2026",
      date: { en: "August 2026 — now", el: "Αύγουστος 2026 — τώρα" },
      duration: { en: "Ongoing", el: "Σε εξέλιξη" },
      title: { en: "ADVON MEDIA", el: "ADVON MEDIA" },
      subtitle: { en: "Where the journey is right now", el: "Εδώ βρίσκεται το ταξίδι τώρα" },
      body: {
        en: "Everything converged into one brand: Advon Media. Websites, branding, SEO and marketing for businesses that need to be taken seriously online — with more services being added as we grow. Four years, five business models, a lot of failures, and one company that carries all of it.",
        el: "Όλα κατέληξαν σε ένα brand: Advon Media. Websites, branding, SEO και marketing για επιχειρήσεις που θέλουν να τις παίρνουν στα σοβαρά online — με νέες υπηρεσίες να προστίθενται συνεχώς. Τέσσερα χρόνια, πέντε επιχειρηματικά μοντέλα, πολλές αποτυχίες, και μία εταιρεία που τα κουβαλάει όλα."
      },
      metrics: [
        { label: { en: "Founded", el: "Ίδρυση" }, value: "TBD" },
        { label: { en: "Services", el: "Υπηρεσίες" }, value: { en: "Web · Brand · SEO", el: "Web · Brand · SEO" } },
        { label: { en: "Status", el: "Κατάσταση" }, value: { en: "Growing", el: "Μεγαλώνει" } }
      ],
      lesson: {
        en: "Nothing was wasted. Every failed venture is a department in what I run today.",
        el: "Τίποτα δεν πήγε χαμένο. Κάθε αποτυχημένο εγχείρημα είναι ένα τμήμα σε αυτό που τρέχω σήμερα."
      },
      images: [
        { src: "images/placeholder-advon-1.svg", caption: { en: "Advon Media", el: "Advon Media" } },
        { src: "images/placeholder-advon-2.svg", caption: { en: "The team / the work", el: "Η ομάδα / η δουλειά" } }
      ]
    },

    /* ---------------------------------------------------------- 12 */
    {
      id: "next",
      chapter: "web",
      icon: "🌅",
      status: "next",
      year: "202X",
      date: { en: "Next chapter", el: "Επόμενο κεφάλαιο" },
      duration: { en: "—", el: "—" },
      title: { en: "To be written…", el: "Προς συγγραφή…" },
      subtitle: { en: "The map keeps growing", el: "Ο χάρτης συνεχίζει να μεγαλώνει" },
      body: {
        en: "This roadmap is alive. New milestones, new numbers, new photos get added here as they happen.",
        el: "Αυτός ο χάρτης είναι ζωντανός. Νέα ορόσημα, νέοι αριθμοί, νέες φωτογραφίες προστίθενται εδώ όσο συμβαίνουν."
      },
      metrics: [],
      lesson: { en: "", el: "" },
      images: []
    }
  ]
};
