export type Locale = "de" | "en" | "ro" | "es" | "nl" | "da" | "it";

export interface LangMeta {
  code: Locale;
  label: string;
  flag: string;
}

export const languages: LangMeta[] = [
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ro", label: "Română", flag: "🇷🇴" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "da", label: "Dansk", flag: "🇩🇰" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
];

/* ────────────────────────────────────────────────────────────────── */
/* All translation keys                                             */
/* ────────────────────────────────────────────────────────────────── */

export interface Translations {
  // Navbar
  nav_features: string;
  nav_how: string;
  nav_providers: string;
  nav_login: string;
  nav_cta: string;

  // Hero
  hero_badge: string;
  hero_title1: string;
  hero_title2: string;
  hero_desc: string;
  hero_cta: string;
  hero_secondary: string;

  // Stats
  stat_providers: string;
  stat_modules: string;
  stat_gdpr: string;
  stat_candidates: string;

  // Features
  feat_heading: string;
  feat_sub: string;
  feat1_title: string;
  feat1_desc: string;
  feat2_title: string;
  feat2_desc: string;
  feat3_title: string;
  feat3_desc: string;
  feat4_title: string;
  feat4_desc: string;
  feat5_title: string;
  feat5_desc: string;
  feat6_title: string;
  feat6_desc: string;

  // How it works
  how_heading: string;
  how_sub: string;
  how1_title: string;
  how1_desc: string;
  how2_title: string;
  how2_desc: string;
  how3_title: string;
  how3_desc: string;
  how4_title: string;
  how4_desc: string;

  // Providers
  prov_heading: string;
  prov_sub: string;
  prov_cloud: string;
  prov_local: string;

  // Checklist
  check_heading: string;
  check1: string;
  check2: string;
  check3: string;
  check4: string;
  check5: string;
  check6: string;
  check7: string;
  check8: string;

  // CTA
  cta_heading: string;
  cta_desc: string;
  cta_btn: string;

  // Footer
  footer_built: string;

  // Login
  login_title: string;
  login_sub: string;
  login_google: string;
  login_or: string;
  login_email: string;
  login_continue: string;
  login_terms: string;
  login_back: string;

  // Dashboard
  dash_welcome: string;
  dash_process: string;
  dash_open: string;
  dash_stats: string;
  dash_settings: string;
  dash_soon: string;
}

/* ────────────────────────────────────────────────────────────────── */

const t: Record<Locale, Translations> = {
  /* ─── DEUTSCH ──────────────────────────────────────────────────── */
  de: {
    nav_features: "Features",
    nav_how: "So funktioniert's",
    nav_providers: "AI Providers",
    nav_login: "Anmelden",
    nav_cta: "Jetzt starten →",

    hero_badge: "🚀 Powered by 10+ AI Providers",
    hero_title1: "CV-Verarbeitung",
    hero_title2: "mit KI-Power",
    hero_desc: "Extrahiere Daten aus CVs, fülle Word-Vorlagen automatisch aus, verwalte Kandidaten und chatte mit deinem KI-Assistenten — alles in einer App.",
    hero_cta: "Kostenlos starten",
    hero_secondary: "Features entdecken",

    stat_providers: "AI Providers",
    stat_modules: "App-Module",
    stat_gdpr: "DSGVO-konform",
    stat_candidates: "Kandidaten",

    feat_heading: "Alles was du brauchst",
    feat_sub: "Von der CV-Extraktion bis zum fertigen Word-Dokument — in einer integrierten Plattform.",
    feat1_title: "Intelligente CV-Extraktion",
    feat1_desc: "KI liest PDFs, Word-Dokumente und gescannte Bilder — extrahiert alle Daten automatisch in strukturiertes JSON.",
    feat2_title: "Word-Template Populator",
    feat2_desc: "Wähle ein Word-Template, die KI füllt es mit den extrahierten Daten aus — fertig zum Versenden.",
    feat3_title: "Kandidaten-Verwaltung",
    feat3_desc: "Alle Kandidaten mit ihren CVs, IDs und Dokumenten in einem übersichtlichen Dashboard.",
    feat4_title: "AI Chat Assistent",
    feat4_desc: "ChatGPT-ähnliche Oberfläche — bearbeite CVs per Gespräch: 'Entferne alte Jobs, füge Zertifikate hinzu.'",
    feat5_title: "Identcheck",
    feat5_desc: "ID-Dokumente scannen, Geburtsdaten und Ablaufdaten extrahieren — direkt in die Identcheck-Vorlage.",
    feat6_title: "Lebenslauf Generator",
    feat6_desc: "Erstelle professionelle deutsche Lebensläufe im Vorlage-Format — perfekt für die Personalvermittlung.",

    how_heading: "So funktioniert's",
    how_sub: "In 4 einfachen Schritten zum fertigen Dokument.",
    how1_title: "CV hochladen",
    how1_desc: "PDF, DOCX oder Bild — einfach per Drag & Drop.",
    how2_title: "KI extrahiert Daten",
    how2_desc: "Wähle deinen Provider — OpenAI, Gemini oder 8 weitere.",
    how3_title: "Bearbeiten & Prüfen",
    how3_desc: "Chat mit der KI, passe Daten an, füge Infos hinzu.",
    how4_title: "Template ausfüllen",
    how4_desc: "Word-Vorlage wird automatisch ausgefüllt — bereit zum Download.",

    prov_heading: "10+ AI Providers",
    prov_sub: "Wähle den besten Provider für deine Bedürfnisse — von Cloud bis lokal.",
    prov_cloud: "Cloud API",
    prov_local: "Lokal",

    check_heading: "Was ist alles dabei?",
    check1: "PDF, DOCX, JPG/PNG Unterstützung",
    check2: "Automatische OCR für gescannte Dokumente",
    check3: "Multi-Provider Fallback bei Fehlern",
    check4: "Benutzer-Login mit Rollenverwaltung",
    check5: "Kandidaten-Ordner mit allen Dokumenten",
    check6: "AI Chat für CV-Bearbeitung per Gespräch",
    check7: "Lebenslauf Generator (Deutsch)",
    check8: "Identcheck mit ID-Scan Extraktion",

    cta_heading: "Bereit durchzustarten?",
    cta_desc: "Starte jetzt mit der KI-gestützten CV-Verarbeitung — kostenlos und ohne Kreditkarte.",
    cta_btn: "App öffnen",

    footer_built: "Entwickelt mit ❤️ mit",

    login_title: "CV Extractor",
    login_sub: "Melde dich an, um auf dein Dashboard zuzugreifen",
    login_google: "Mit Google anmelden",
    login_or: "oder",
    login_email: "E-Mail-Adresse",
    login_continue: "Weiter",
    login_terms: "Mit der Anmeldung stimmst du unseren Nutzungsbedingungen und Datenschutzrichtlinien zu.",
    login_back: "← Zurück zur Startseite",

    dash_welcome: "Willkommen",
    dash_process: "CV verarbeiten",
    dash_open: "App öffnen",
    dash_stats: "Statistiken",
    dash_settings: "Einstellungen",
    dash_soon: "Kommt bald",
  },

  /* ─── ENGLISH ──────────────────────────────────────────────────── */
  en: {
    nav_features: "Features",
    nav_how: "How it works",
    nav_providers: "AI Providers",
    nav_login: "Sign in",
    nav_cta: "Get started →",

    hero_badge: "🚀 Powered by 10+ AI Providers",
    hero_title1: "CV Processing",
    hero_title2: "with AI Power",
    hero_desc: "Extract data from CVs, auto-fill Word templates, manage candidates, and chat with your AI assistant — all in one app.",
    hero_cta: "Start for free",
    hero_secondary: "Explore features",

    stat_providers: "AI Providers",
    stat_modules: "App Modules",
    stat_gdpr: "GDPR Compliant",
    stat_candidates: "Candidates",

    feat_heading: "Everything you need",
    feat_sub: "From CV extraction to the finished Word document — in one integrated platform.",
    feat1_title: "Smart CV Extraction",
    feat1_desc: "AI reads PDFs, Word docs and scanned images — automatically extracts all data into structured JSON.",
    feat2_title: "Word Template Populator",
    feat2_desc: "Pick a Word template, AI fills it with extracted data — ready to send.",
    feat3_title: "Candidate Management",
    feat3_desc: "All candidates with their CVs, IDs and documents in one clear dashboard.",
    feat4_title: "AI Chat Assistant",
    feat4_desc: "ChatGPT-like interface — edit CVs by conversation: 'Remove old jobs, add certificates.'",
    feat5_title: "Identity Check",
    feat5_desc: "Scan ID documents, extract birth dates and expiry dates — straight into the identity template.",
    feat6_title: "CV Generator",
    feat6_desc: "Create professional German CVs in template format — perfect for recruitment agencies.",

    how_heading: "How it works",
    how_sub: "From upload to finished document in 4 simple steps.",
    how1_title: "Upload CV",
    how1_desc: "PDF, DOCX or image — simply drag & drop.",
    how2_title: "AI extracts data",
    how2_desc: "Choose your provider — OpenAI, Gemini or 8 more.",
    how3_title: "Edit & review",
    how3_desc: "Chat with AI, adjust data, add information.",
    how4_title: "Fill template",
    how4_desc: "Word template is auto-filled — ready to download.",

    prov_heading: "10+ AI Providers",
    prov_sub: "Choose the best provider for your needs — from cloud to local.",
    prov_cloud: "Cloud API",
    prov_local: "Local",

    check_heading: "What's included?",
    check1: "PDF, DOCX, JPG/PNG support",
    check2: "Automatic OCR for scanned documents",
    check3: "Multi-provider fallback on errors",
    check4: "User login with role management",
    check5: "Candidate folders with all documents",
    check6: "AI Chat for CV editing by conversation",
    check7: "CV Generator (German)",
    check8: "Identity check with ID scan extraction",

    cta_heading: "Ready to get started?",
    cta_desc: "Start now with AI-powered CV processing — free and no credit card required.",
    cta_btn: "Open app",

    footer_built: "Built with ❤️ using",

    login_title: "CV Extractor",
    login_sub: "Sign in to access your dashboard",
    login_google: "Sign in with Google",
    login_or: "or",
    login_email: "Email address",
    login_continue: "Continue",
    login_terms: "By signing in, you agree to our Terms of Service and Privacy Policy.",
    login_back: "← Back to homepage",

    dash_welcome: "Welcome",
    dash_process: "Process CV",
    dash_open: "Open app",
    dash_stats: "Statistics",
    dash_settings: "Settings",
    dash_soon: "Coming soon",
  },

  /* ─── ROMÂNĂ ───────────────────────────────────────────────────── */
  ro: {
    nav_features: "Funcționalități",
    nav_how: "Cum funcționează",
    nav_providers: "Furnizori AI",
    nav_login: "Conectare",
    nav_cta: "Începe acum →",

    hero_badge: "🚀 Alimentat de 10+ Furnizori AI",
    hero_title1: "Procesare CV",
    hero_title2: "cu puterea AI",
    hero_desc: "Extrage date din CV-uri, completează automat template-uri Word, gestionează candidați și discută cu asistentul tău AI — totul într-o singură aplicație.",
    hero_cta: "Începe gratuit",
    hero_secondary: "Descoperă funcționalitățile",

    stat_providers: "Furnizori AI",
    stat_modules: "Module App",
    stat_gdpr: "Conform GDPR",
    stat_candidates: "Candidați",

    feat_heading: "Tot ce ai nevoie",
    feat_sub: "De la extragerea CV-ului la documentul Word finalizat — într-o platformă integrată.",
    feat1_title: "Extracție CV Inteligentă",
    feat1_desc: "AI citește PDF-uri, documente Word și imagini scanate — extrage automat toate datele în JSON structurat.",
    feat2_title: "Completare Template Word",
    feat2_desc: "Alege un template Word, AI-ul îl completează cu datele extrase — gata de trimis.",
    feat3_title: "Managementul Candidaților",
    feat3_desc: "Toți candidații cu CV-urile, ID-urile și documentele lor într-un dashboard clar.",
    feat4_title: "Asistent AI Chat",
    feat4_desc: "Interfață similară ChatGPT — editează CV-uri prin conversație: 'Elimină joburile vechi, adaugă certificate.'",
    feat5_title: "Verificare Identitate",
    feat5_desc: "Scanează documente de identitate, extrage date de naștere și expirare — direct în template-ul de verificare.",
    feat6_title: "Generator CV",
    feat6_desc: "Creează CV-uri profesionale în format german — perfect pentru agențiile de recrutare.",

    how_heading: "Cum funcționează",
    how_sub: "De la încărcare la documentul finalizat în 4 pași simpli.",
    how1_title: "Încarcă CV-ul",
    how1_desc: "PDF, DOCX sau imagine — simplu prin drag & drop.",
    how2_title: "AI extrage datele",
    how2_desc: "Alege furnizorul — OpenAI, Gemini sau alți 8.",
    how3_title: "Editează & verifică",
    how3_desc: "Discută cu AI, ajustează datele, adaugă informații.",
    how4_title: "Completează template-ul",
    how4_desc: "Template-ul Word este completat automat — gata de descărcat.",

    prov_heading: "10+ Furnizori AI",
    prov_sub: "Alege cel mai bun furnizor pentru nevoile tale — de la cloud la local.",
    prov_cloud: "Cloud API",
    prov_local: "Local",

    check_heading: "Ce este inclus?",
    check1: "Suport PDF, DOCX, JPG/PNG",
    check2: "OCR automat pentru documente scanate",
    check3: "Fallback multi-furnizor la erori",
    check4: "Autentificare cu gestionare roluri",
    check5: "Dosare candidați cu toate documentele",
    check6: "AI Chat pentru editare CV prin conversație",
    check7: "Generator CV (Germană)",
    check8: "Verificare identitate cu scanare ID",

    cta_heading: "Ești gata să începi?",
    cta_desc: "Începe acum cu procesarea CV-urilor bazată pe AI — gratuit și fără card de credit.",
    cta_btn: "Deschide aplicația",

    footer_built: "Construit cu ❤️ folosind",

    login_title: "CV Extractor",
    login_sub: "Conectează-te pentru a accesa dashboard-ul tău",
    login_google: "Conectare cu Google",
    login_or: "sau",
    login_email: "Adresă de email",
    login_continue: "Continuă",
    login_terms: "Prin conectare, accepți Termenii și Condițiile și Politica de Confidențialitate.",
    login_back: "← Înapoi la pagina principală",

    dash_welcome: "Bine ai venit",
    dash_process: "Procesează CV",
    dash_open: "Deschide aplicația",
    dash_stats: "Statistici",
    dash_settings: "Setări",
    dash_soon: "În curând",
  },

  /* ─── ESPAÑOL ──────────────────────────────────────────────────── */
  es: {
    nav_features: "Características",
    nav_how: "Cómo funciona",
    nav_providers: "Proveedores AI",
    nav_login: "Iniciar sesión",
    nav_cta: "Comenzar →",

    hero_badge: "🚀 Impulsado por 10+ Proveedores de AI",
    hero_title1: "Procesamiento CV",
    hero_title2: "con poder de AI",
    hero_desc: "Extrae datos de CVs, completa plantillas Word automáticamente, gestiona candidatos y chatea con tu asistente AI — todo en una app.",
    hero_cta: "Comenzar gratis",
    hero_secondary: "Explorar características",

    stat_providers: "Proveedores AI",
    stat_modules: "Módulos",
    stat_gdpr: "Conforme RGPD",
    stat_candidates: "Candidatos",

    feat_heading: "Todo lo que necesitas",
    feat_sub: "Desde la extracción del CV hasta el documento Word terminado — en una plataforma integrada.",
    feat1_title: "Extracción CV Inteligente",
    feat1_desc: "La AI lee PDFs, documentos Word e imágenes escaneadas — extrae todos los datos automáticamente en JSON estructurado.",
    feat2_title: "Rellenador de Plantillas Word",
    feat2_desc: "Elige una plantilla Word, la AI la rellena con los datos extraídos — lista para enviar.",
    feat3_title: "Gestión de Candidatos",
    feat3_desc: "Todos los candidatos con sus CVs, IDs y documentos en un panel claro.",
    feat4_title: "Asistente AI Chat",
    feat4_desc: "Interfaz tipo ChatGPT — edita CVs por conversación: 'Elimina trabajos antiguos, añade certificados.'",
    feat5_title: "Verificación de Identidad",
    feat5_desc: "Escanea documentos de identidad, extrae fechas de nacimiento y expiración — directo a la plantilla de verificación.",
    feat6_title: "Generador de CV",
    feat6_desc: "Crea CVs profesionales en formato alemán — perfecto para agencias de reclutamiento.",

    how_heading: "Cómo funciona",
    how_sub: "Del upload al documento terminado en 4 simples pasos.",
    how1_title: "Subir CV",
    how1_desc: "PDF, DOCX o imagen — simplemente arrastra y suelta.",
    how2_title: "AI extrae datos",
    how2_desc: "Elige tu proveedor — OpenAI, Gemini u 8 más.",
    how3_title: "Editar y revisar",
    how3_desc: "Chatea con la AI, ajusta datos, añade información.",
    how4_title: "Rellenar plantilla",
    how4_desc: "Plantilla Word se rellena automáticamente — lista para descargar.",

    prov_heading: "10+ Proveedores AI",
    prov_sub: "Elige el mejor proveedor para tus necesidades — de nube a local.",
    prov_cloud: "Cloud API",
    prov_local: "Local",

    check_heading: "¿Qué incluye?",
    check1: "Soporte PDF, DOCX, JPG/PNG",
    check2: "OCR automático para documentos escaneados",
    check3: "Fallback multi-proveedor en errores",
    check4: "Login de usuario con gestión de roles",
    check5: "Carpetas de candidatos con todos los documentos",
    check6: "AI Chat para edición de CV por conversación",
    check7: "Generador de CV (Alemán)",
    check8: "Verificación de identidad con escaneo de ID",

    cta_heading: "¿Listo para empezar?",
    cta_desc: "Comienza ahora con el procesamiento de CV impulsado por AI — gratis y sin tarjeta de crédito.",
    cta_btn: "Abrir app",

    footer_built: "Construido con ❤️ usando",

    login_title: "CV Extractor",
    login_sub: "Inicia sesión para acceder a tu panel",
    login_google: "Iniciar sesión con Google",
    login_or: "o",
    login_email: "Correo electrónico",
    login_continue: "Continuar",
    login_terms: "Al iniciar sesión, aceptas nuestros Términos de Servicio y Política de Privacidad.",
    login_back: "← Volver a la página principal",

    dash_welcome: "Bienvenido",
    dash_process: "Procesar CV",
    dash_open: "Abrir app",
    dash_stats: "Estadísticas",
    dash_settings: "Configuración",
    dash_soon: "Próximamente",
  },

  /* ─── NEDERLANDS ────────────────────────────────────────────────── */
  nl: {
    nav_features: "Functies",
    nav_how: "Hoe het werkt",
    nav_providers: "AI Providers",
    nav_login: "Inloggen",
    nav_cta: "Nu starten →",

    hero_badge: "🚀 Powered by 10+ AI Providers",
    hero_title1: "CV-Verwerking",
    hero_title2: "met AI-Kracht",
    hero_desc: "Extraheer gegevens uit CV's, vul Word-templates automatisch in, beheer kandidaten en chat met je AI-assistent — alles in één app.",
    hero_cta: "Gratis starten",
    hero_secondary: "Functies ontdekken",

    stat_providers: "AI Providers",
    stat_modules: "App-Modules",
    stat_gdpr: "AVG-conform",
    stat_candidates: "Kandidaten",

    feat_heading: "Alles wat je nodig hebt",
    feat_sub: "Van CV-extractie tot het afgewerkte Word-document — in één geïntegreerd platform.",
    feat1_title: "Slimme CV-Extractie",
    feat1_desc: "AI leest PDF's, Word-documenten en gescande afbeeldingen — haalt alle gegevens automatisch op in gestructureerde JSON.",
    feat2_title: "Word-Template Invuller",
    feat2_desc: "Kies een Word-template, AI vult het met de geëxtraheerde gegevens — klaar om te verzenden.",
    feat3_title: "Kandidatenbeheer",
    feat3_desc: "Alle kandidaten met hun CV's, ID's en documenten in één overzichtelijk dashboard.",
    feat4_title: "AI Chat Assistent",
    feat4_desc: "ChatGPT-achtige interface — bewerk CV's per gesprek: 'Verwijder oude banen, voeg certificaten toe.'",
    feat5_title: "Identiteitscontrole",
    feat5_desc: "Scan identiteitsdocumenten, extraheer geboortedata en verloopdatums — direct in het verificatie-template.",
    feat6_title: "CV Generator",
    feat6_desc: "Maak professionele Duitse CV's in template-formaat — perfect voor uitzendbureaus.",

    how_heading: "Hoe het werkt",
    how_sub: "Van upload tot afgewerkt document in 4 eenvoudige stappen.",
    how1_title: "CV uploaden",
    how1_desc: "PDF, DOCX of afbeelding — gewoon slepen en neerzetten.",
    how2_title: "AI haalt gegevens op",
    how2_desc: "Kies je provider — OpenAI, Gemini of 8 andere.",
    how3_title: "Bewerken & controleren",
    how3_desc: "Chat met AI, pas gegevens aan, voeg informatie toe.",
    how4_title: "Template invullen",
    how4_desc: "Word-template wordt automatisch ingevuld — klaar om te downloaden.",

    prov_heading: "10+ AI Providers",
    prov_sub: "Kies de beste provider voor jouw behoeften — van cloud tot lokaal.",
    prov_cloud: "Cloud API",
    prov_local: "Lokaal",

    check_heading: "Wat zit er in?",
    check1: "PDF, DOCX, JPG/PNG ondersteuning",
    check2: "Automatische OCR voor gescande documenten",
    check3: "Multi-provider fallback bij fouten",
    check4: "Gebruikerslogin met rollenbeheer",
    check5: "Kandidatenmappen met alle documenten",
    check6: "AI Chat voor CV-bewerking per gesprek",
    check7: "CV Generator (Duits)",
    check8: "Identiteitscontrole met ID-scan extractie",

    cta_heading: "Klaar om te beginnen?",
    cta_desc: "Begin nu met AI-aangedreven CV-verwerking — gratis en zonder creditcard.",
    cta_btn: "App openen",

    footer_built: "Gebouwd met ❤️ met",

    login_title: "CV Extractor",
    login_sub: "Log in om toegang te krijgen tot je dashboard",
    login_google: "Inloggen met Google",
    login_or: "of",
    login_email: "E-mailadres",
    login_continue: "Doorgaan",
    login_terms: "Door in te loggen ga je akkoord met onze Servicevoorwaarden en Privacybeleid.",
    login_back: "← Terug naar homepage",

    dash_welcome: "Welkom",
    dash_process: "CV verwerken",
    dash_open: "App openen",
    dash_stats: "Statistieken",
    dash_settings: "Instellingen",
    dash_soon: "Binnenkort",
  },

  /* ─── DANSK ────────────────────────────────────────────────────── */
  da: {
    nav_features: "Funktioner",
    nav_how: "Sådan fungerer det",
    nav_providers: "AI-udbydere",
    nav_login: "Log ind",
    nav_cta: "Kom i gang →",

    hero_badge: "🚀 Drevet af 10+ AI-udbydere",
    hero_title1: "CV-Behandling",
    hero_title2: "med AI-Kraft",
    hero_desc: "Udtræk data fra CV'er, udfyld Word-skabeloner automatisk, administrer kandidater og chat med din AI-assistent — alt i én app.",
    hero_cta: "Start gratis",
    hero_secondary: "Udforsk funktioner",

    stat_providers: "AI-udbydere",
    stat_modules: "App-moduler",
    stat_gdpr: "GDPR-kompatibel",
    stat_candidates: "Kandidater",

    feat_heading: "Alt du har brug for",
    feat_sub: "Fra CV-udtræk til det færdige Word-dokument — i én integreret platform.",
    feat1_title: "Intelligent CV-Udtræk",
    feat1_desc: "AI læser PDF'er, Word-dokumenter og scannede billeder — udtrækker automatisk alle data til struktureret JSON.",
    feat2_title: "Word-Skabelon Udfylder",
    feat2_desc: "Vælg en Word-skabelon, AI udfylder den med de udtrukne data — klar til afsendelse.",
    feat3_title: "Kandidatstyring",
    feat3_desc: "Alle kandidater med deres CV'er, ID'er og dokumenter i et overskueligt dashboard.",
    feat4_title: "AI Chat Assistent",
    feat4_desc: "ChatGPT-lignende interface — rediger CV'er via samtale: 'Fjern gamle jobs, tilføj certifikater.'",
    feat5_title: "Identitetskontrol",
    feat5_desc: "Scan identitetsdokumenter, udtræk fødselsdatoer og udløbsdatoer — direkte i verifikationsskabelonen.",
    feat6_title: "CV Generator",
    feat6_desc: "Opret professionelle tyske CV'er i skabelonformat — perfekt til rekrutteringsbureauer.",

    how_heading: "Sådan fungerer det",
    how_sub: "Fra upload til færdigt dokument i 4 enkle trin.",
    how1_title: "Upload CV",
    how1_desc: "PDF, DOCX eller billede — blot træk og slip.",
    how2_title: "AI udtrækker data",
    how2_desc: "Vælg din udbyder — OpenAI, Gemini eller 8 andre.",
    how3_title: "Rediger & gennemgå",
    how3_desc: "Chat med AI, juster data, tilføj information.",
    how4_title: "Udfyld skabelon",
    how4_desc: "Word-skabelon udfyldes automatisk — klar til download.",

    prov_heading: "10+ AI-udbydere",
    prov_sub: "Vælg den bedste udbyder til dine behov — fra sky til lokal.",
    prov_cloud: "Cloud API",
    prov_local: "Lokal",

    check_heading: "Hvad er inkluderet?",
    check1: "PDF, DOCX, JPG/PNG understøttelse",
    check2: "Automatisk OCR for scannede dokumenter",
    check3: "Multi-udbyder fallback ved fejl",
    check4: "Brugerlogin med rollestyring",
    check5: "Kandidatmapper med alle dokumenter",
    check6: "AI Chat til CV-redigering via samtale",
    check7: "CV Generator (Tysk)",
    check8: "Identitetskontrol med ID-scan udtræk",

    cta_heading: "Klar til at komme i gang?",
    cta_desc: "Start nu med AI-drevet CV-behandling — gratis og uden kreditkort.",
    cta_btn: "Åbn app",

    footer_built: "Bygget med ❤️ med",

    login_title: "CV Extractor",
    login_sub: "Log ind for at få adgang til dit dashboard",
    login_google: "Log ind med Google",
    login_or: "eller",
    login_email: "E-mailadresse",
    login_continue: "Fortsæt",
    login_terms: "Ved at logge ind accepterer du vores Servicevilkår og Privatlivspolitik.",
    login_back: "← Tilbage til startsiden",

    dash_welcome: "Velkommen",
    dash_process: "Behandl CV",
    dash_open: "Åbn app",
    dash_stats: "Statistikker",
    dash_settings: "Indstillinger",
    dash_soon: "Kommer snart",
  },

  /* ─── ITALIANO ─────────────────────────────────────────────────── */
  it: {
    nav_features: "Funzionalità",
    nav_how: "Come funziona",
    nav_providers: "Provider AI",
    nav_login: "Accedi",
    nav_cta: "Inizia ora →",

    hero_badge: "🚀 Supportato da 10+ Provider AI",
    hero_title1: "Elaborazione CV",
    hero_title2: "con potenza AI",
    hero_desc: "Estrai dati dai CV, compila automaticamente template Word, gestisci candidati e chatta con il tuo assistente AI — tutto in un'unica app.",
    hero_cta: "Inizia gratis",
    hero_secondary: "Scopri le funzionalità",

    stat_providers: "Provider AI",
    stat_modules: "Moduli App",
    stat_gdpr: "Conforme GDPR",
    stat_candidates: "Candidati",

    feat_heading: "Tutto ciò di cui hai bisogno",
    feat_sub: "Dall'estrazione del CV al documento Word finito — in una piattaforma integrata.",
    feat1_title: "Estrazione CV Intelligente",
    feat1_desc: "L'AI legge PDF, documenti Word e immagini scannerizzate — estrae automaticamente tutti i dati in JSON strutturato.",
    feat2_title: "Compilatore Template Word",
    feat2_desc: "Scegli un template Word, l'AI lo compila con i dati estratti — pronto per l'invio.",
    feat3_title: "Gestione Candidati",
    feat3_desc: "Tutti i candidati con i loro CV, ID e documenti in una dashboard chiara.",
    feat4_title: "Assistente AI Chat",
    feat4_desc: "Interfaccia tipo ChatGPT — modifica CV tramite conversazione: 'Rimuovi vecchi lavori, aggiungi certificati.'",
    feat5_title: "Verifica Identità",
    feat5_desc: "Scansiona documenti d'identità, estrai date di nascita e scadenza — direttamente nel template di verifica.",
    feat6_title: "Generatore CV",
    feat6_desc: "Crea CV professionali in formato tedesco — perfetto per agenzie di reclutamento.",

    how_heading: "Come funziona",
    how_sub: "Dall'upload al documento finito in 4 semplici passi.",
    how1_title: "Carica CV",
    how1_desc: "PDF, DOCX o immagine — semplicemente trascina e rilascia.",
    how2_title: "AI estrae i dati",
    how2_desc: "Scegli il tuo provider — OpenAI, Gemini o altri 8.",
    how3_title: "Modifica e rivedi",
    how3_desc: "Chatta con l'AI, adatta i dati, aggiungi informazioni.",
    how4_title: "Compila template",
    how4_desc: "Il template Word viene compilato automaticamente — pronto per il download.",

    prov_heading: "10+ Provider AI",
    prov_sub: "Scegli il miglior provider per le tue esigenze — dal cloud al locale.",
    prov_cloud: "Cloud API",
    prov_local: "Locale",

    check_heading: "Cosa è incluso?",
    check1: "Supporto PDF, DOCX, JPG/PNG",
    check2: "OCR automatico per documenti scannerizzati",
    check3: "Fallback multi-provider in caso di errori",
    check4: "Login utente con gestione ruoli",
    check5: "Cartelle candidati con tutti i documenti",
    check6: "AI Chat per modifica CV tramite conversazione",
    check7: "Generatore CV (Tedesco)",
    check8: "Verifica identità con scansione ID",

    cta_heading: "Pronto per iniziare?",
    cta_desc: "Inizia ora con l'elaborazione CV basata su AI — gratuita e senza carta di credito.",
    cta_btn: "Apri app",

    footer_built: "Costruito con ❤️ usando",

    login_title: "CV Extractor",
    login_sub: "Accedi per raggiungere la tua dashboard",
    login_google: "Accedi con Google",
    login_or: "oppure",
    login_email: "Indirizzo email",
    login_continue: "Continua",
    login_terms: "Accedendo, accetti i nostri Termini di Servizio e l'Informativa sulla Privacy.",
    login_back: "← Torna alla homepage",

    dash_welcome: "Benvenuto",
    dash_process: "Elabora CV",
    dash_open: "Apri app",
    dash_stats: "Statistiche",
    dash_settings: "Impostazioni",
    dash_soon: "Prossimamente",
  },
};

export default t;
