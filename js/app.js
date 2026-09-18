const IMG = (file) => encodeURI(`Sample-cake-images/${file}`);

const CATEGORIES = [
  { id: "all", en: "All", am: "ሁሉም" },
  { id: "Wedding Cake", en: "Wedding", am: "ሰርግ" },
  { id: "Birthday Cake", en: "Birthday", am: "ልደት" },
  { id: "Casual Cake", en: "Casual", am: "ቀላል" },
  { id: "Event Cake", en: "Event", am: "ዝግጅት" },
  { id: "Holiday Cake", en: "Holiday", am: "በዓል" },
  { id: "Custom Image Cake", en: "Custom", am: "ብጁ" },
];

const CATEGORY_LABELS = {
  "Wedding Cake": { en: "Wedding Cake", am: "የሰርግ ኬክ" },
  "Birthday Cake": { en: "Birthday Cake", am: "የልደት ኬክ" },
  "Casual Cake": { en: "Casual Cake", am: "ቀላል ኬክ" },
  "Event Cake": { en: "Event Cake", am: "የዝግጅት ኬክ" },
  "Holiday Cake": { en: "Holiday Cake", am: "የበዓል ኬክ" },
  "Custom Image Cake": { en: "Custom Image Cake", am: "ብጁ ምስል ኬክ" },
};

const PRODUCTS = [
  { id: 1, category: "Wedding Cake", price: 850, image: "photo_5773864483683420050_y.jpg", en: "Royal Rose Elegance", am: "ሮያል ሮዝ ኤሌጋንስ" },
  { id: 2, category: "Wedding Cake", price: 1200, image: "photo_5823310350513190891_c.jpg", en: "Golden Pearl Wedding Cake", am: "የወርቅ ዕንቁ የሰርግ ኬክ" },
  { id: 3, category: "Wedding Cake", price: 950, image: "photo_5834738798926350783_y.jpg", en: "White Velvet Romance", am: "ነጭ ቬልቬት ሮማንስ" },
  { id: 4, category: "Wedding Cake", price: 1350, image: "photo_5919996004285925350_y.jpg", en: "Crystal Garden Cake", am: "ክሪስታል የአትክልት ኬክ" },
  { id: 5, category: "Wedding Cake", price: 750, image: "photo_5990310670534118959_y.jpg", en: "Classic Ivory Wedding Cake", am: "ክላሲክ አይቮሪ የሰርግ ኬክ" },
  { id: 6, category: "Wedding Cake", price: 1500, image: "photo_5976677177321264174_y.jpg", en: "Royal Three-Tier Cake", am: "ሮያል ሦስት ደረጃ ኬክ" },
  { id: 7, category: "Birthday Cake", price: 180, image: "photo_5866142895420061155_c.jpg", en: "Chocolate Celebration", am: "የቸኮሌት በዓል" },
  { id: 8, category: "Birthday Cake", price: 220, image: "photo_5996844222029434339_y.jpg", en: "Strawberry Dream", am: "የስትሮቤሪ ሕልም" },
  { id: 9, category: "Birthday Cake", price: 200, image: "photo_5827953437797191225_y.jpg", en: "Rainbow Party Cake", am: "የቀስተ ደመና ፓርቲ ኬክ" },
  { id: 10, category: "Birthday Cake", price: 240, image: "photo_5816763115255828235_y.jpg", en: "Chocolate Fudge Birthday Cake", am: "የቸኮሌት ፋጅ የልደት ኬክ" },
  { id: 11, category: "Birthday Cake", price: 160, image: "photo_5825942362310513795_y.jpg", en: "Vanilla Birthday Delight", am: "የቫኒላ የልደት ደስታ" },
  { id: 12, category: "Birthday Cake", price: 190, image: "photo_5798523514427394770_y.jpg", en: "Confetti Celebration Cake", am: "ኮንፌቲ የበዓል ኬክ" },
  { id: 13, category: "Casual Cake", price: 140, image: "photo_5875327588497034190_y.jpg", en: "Vanilla Garden Cake", am: "የቫኒላ የአትክልት ኬክ" },
  { id: 14, category: "Casual Cake", price: 150, image: "photo_6014674293427473281_y.jpg", en: "Classic Chocolate Cake", am: "ክላሲክ ቸኮሌት ኬክ" },
  { id: 15, category: "Casual Cake", price: 155, image: "photo_5994610993654336909_y.jpg", en: "Lemon Cream Cake", am: "የሎሚ ክሬም ኬክ" },
  { id: 16, category: "Casual Cake", price: 170, image: "photo_5987652760087759833_y.jpg", en: "Caramel Delight Cake", am: "የካራሜል ደስታ ኬክ" },
  { id: 17, category: "Casual Cake", price: 160, image: "photo_5920321476911369763_y.jpg", en: "Coconut Dream Cake", am: "የኮኮናት ሕልም ኬክ" },
  { id: 18, category: "Casual Cake", price: 180, image: "photo_5985305478856117660_y.jpg", en: "Blueberry Cream Cake", am: "የብሉቤሪ ክሬም ኬክ" },
  { id: 19, category: "Event Cake", price: 450, image: "photo_5852826903373352773_y.jpg", en: "Grand Celebration Cake", am: "ታላቅ የበዓል ኬክ" },
  { id: 20, category: "Event Cake", price: 550, image: "photo_5929090296891248285_y.jpg", en: "Corporate Prestige Cake", am: "የድርጅት ክብር ኬክ" },
  { id: 21, category: "Event Cake", price: 600, image: "photo_5931342096704933448_y.jpg", en: "Elegant Gala Cake", am: "ኤሌጋንት ጋላ ኬክ" },
  { id: 22, category: "Event Cake", price: 400, image: "photo_5920321476911369781_y.jpg", en: "Anniversary Celebration Cake", am: "የምስረታ በዓል ኬክ" },
  { id: 23, category: "Event Cake", price: 500, image: "photo_5800897102337477742_y.jpg", en: "Luxury Dessert Cake", am: "የቅንጦት ጣፋጭ ኬክ" },
  { id: 24, category: "Event Cake", price: 650, image: "photo_6026269631384849637_y.jpg", en: "Grand Chocolate Event Cake", am: "ታላቅ የቸኮሌት ዝግጅት ኬክ" },
  { id: 25, category: "Holiday Cake", price: 280, image: "photo_5787513000695632035_y.jpg", en: "Christmas Snow Cake", am: "የገና በረዶ ኬክ" },
  { id: 26, category: "Holiday Cake", price: 320, image: "photo_5987767418534694026_y.jpg", en: "Winter Wonderland Cake", am: "የክረምት ውበት ኬክ" },
  { id: 27, category: "Holiday Cake", price: 250, image: "photo_5787513000695632037_y.jpg", en: "Easter Garden Cake", am: "የፋሲካ የአትክልት ኬክ" },
  { id: 28, category: "Holiday Cake", price: 350, image: "photo_5847963226572787302_y.jpg", en: "New Year Celebration Cake", am: "የአዲስ ዓመት በዓል ኬክ" },
  { id: 29, category: "Holiday Cake", price: 290, image: "photo_5881715209884777196_c.jpg", en: "Valentine's Heart Cake", am: "የፍቅር ልብ ኬክ" },
  { id: 30, category: "Holiday Cake", price: 270, image: "photo_6046397024954944364_y.jpg", en: "Halloween Mystery Cake", am: "የሃሎዊን ምስጢር ኬክ" },
  { id: 31, category: "Custom Image Cake", price: 300, image: "photo_5807408453146840628_y.jpg", en: "Photo Memory Cake", am: "የፎቶ ትውስታ ኬክ" },
  { id: 32, category: "Custom Image Cake", price: 350, image: "photo_5816718980171894796_y.jpg", en: "Personalized Portrait Cake", am: "የግል ምስል ኬክ" },
  { id: 33, category: "Custom Image Cake", price: 380, image: "photo_5827951088450081462_y.jpg", en: "Family Photo Celebration Cake", am: "የቤተሰብ ፎቶ በዓል ኬክ" },
  { id: 34, category: "Custom Image Cake", price: 320, image: "photo_5811938350855210060_y.jpg", en: "Custom Logo Cake", am: "ብጁ አርማ ኬክ" },
  { id: 35, category: "Custom Image Cake", price: 280, image: "photo_5787513000695632039_y.jpg", en: "Cartoon Character Cake", am: "የካርቱን ገጸ-ባህሪ ኬክ" },
  { id: 36, category: "Custom Image Cake", price: 450, image: "photo_5974173838452919797_y.jpg", en: "Premium Custom Photo Cake", am: "ፕሪሚየም ብጁ ፎቶ ኬክ" },
];

const GALLERY = [
  "photo_5814467180358209882_y.jpg",
  "photo_5814511315442143384_y.jpg",
  "photo_5814511315442143400_y.jpg",
  "photo_5827951088450081464_y.jpg",
  "photo_5827951088450081513_y.jpg",
  "photo_5830177891554103081_y.jpg",
  "photo_5895228697420172764_y.jpg",
  "photo_5920321476911369769_y.jpg",
  "photo_5920321476911369772_y.jpg",
  "photo_5974425377507578530_y.jpg",
  "photo_6017120204284347458_y.jpg",
  "photo_6017361508435692884_y.jpg",
];

const I18N = {
  en: {
    skip: "Skip to content",
    navHome: "Home",
    navMenu: "Cakes",
    navGallery: "Gallery",
    navAbout: "About",
    navContact: "Contact",
    heroEyebrow: "Handmade cakes",
    heroTitle: "Cakes made for your celebration",
    heroLead: "Elegant wedding cakes, joyful birthday cakes, and fully custom designs — crafted with care by Pila Pastry.",
    heroCta: "View cakes",
    heroSecondary: "Place an order",
    menuEyebrow: "The collection",
    menuTitle: "Our cakes",
    menuLead: "Thirty-six cakes across six categories. Prices are in Ethiopian birr (ETB).",
    resultCount: (n) => (n === 1 ? "1 cake" : `${n} cakes`),
    galleryEyebrow: "Recent work",
    galleryTitle: "Gallery",
    galleryLead: "A look at cakes we have made for weddings, birthdays, baptisms, and custom celebrations.",
    aboutEyebrow: "Our story",
    aboutTitle: "Pila Pastry",
    aboutP1: "Pila Pastry creates elegant, custom cakes for weddings, birthdays, holidays, and every celebration in between. Each cake is handmade — from classic cream finishes to fully custom designs with photos, logos, and characters.",
    aboutP2: "We work in English and Amharic, and we love making cakes that feel personal: a wedding cake with gold florals, a first birthday with butterflies, or a portrait cake for someone you love.",
    aboutTiktok: "Follow us on TikTok",
    aboutTelegram: "Message us on Telegram",
    contactEyebrow: "Orders",
    contactTitle: "Order a cake",
    contactLead: "Tell us the occasion, the cake you like, and your date. We will get back to you to confirm details.",
    contactPoint1: "Wedding, birthday, event, holiday, and custom cakes",
    contactPoint2: "Custom photos, logos, and character designs",
    contactPoint3: "Message us on TikTok @lidiyamerklgn1",
    formName: "Name",
    formPhone: "Phone",
    formCake: "Cake",
    formCakePlaceholder: "Choose a cake",
    formDate: "Event date",
    formMessage: "Message",
    formMessagePlaceholder: "Occasion, servings, flavour, or design notes",
    formSubmit: "Send inquiry",
    formSuccess: "Thank you. Your inquiry is ready — please also message us on TikTok @lidiyamerklgn1 to confirm.",
    formError: "Please enter your name and phone number.",
    orderThis: "Order this cake",
    footerNote: "Handmade cakes for weddings, birthdays, and every celebration.",
  },
  am: {
    skip: "ወደ ይዘት ይዝለሉ",
    navHome: "መነሻ",
    navMenu: "ኬኮች",
    navGallery: "ማዕከለ-ሥዕል",
    navAbout: "ስለ እኛ",
    navContact: "ያግኙን",
    heroEyebrow: "በእጅ የተሰሩ ኬኮች",
    heroTitle: "ለበዓልዎ የተሰሩ ኬኮች",
    heroLead: "ውብ የሰርግ ኬኮች፣ የልደት ኬኮች እና ሙሉ ብጁ ዲዛይኖች — በፒላ ፓስትሪ በጥንቃቄ የተሰሩ።",
    heroCta: "ኬኮችን ይመልከቱ",
    heroSecondary: "ትዕዛዝ ያስቀምጡ",
    menuEyebrow: "ስብስብ",
    menuTitle: "ኬኮቻችን",
    menuLead: "ሠላሳ ስድስት ኬኮች በስድስት ምድቦች። ዋጋዎች በኢትዮጵያዊ ብር (ETB) ናቸው።",
    resultCount: (n) => `${n} ኬኮች`,
    galleryEyebrow: "የቅርብ ጊዜ ሥራዎች",
    galleryTitle: "ማዕከለ-ሥዕል",
    galleryLead: "ለሰርግ፣ ለልደት፣ ለጥምቀት እና ለብጁ ዝግጅቶች የሠራናቸው ኬኮች።",
    aboutEyebrow: "ታሪካችን",
    aboutTitle: "ፒላ ፓስትሪ",
    aboutP1: "ፒላ ፓስትሪ ለሰርግ፣ ለልደት፣ ለበዓላት እና ለሁሉም ዓይነት ዝግጅቶች የተዘጋጁ ውብ እና ብጁ ኬኮችን ይሠራል። እያንዳንዱ ኬክ በእጅ፣ ከክላሲክ ክሬም እስከ ፎቶ፣ አርማ እና ገጸ-ባህሪያት ድረስ ይዘጋጃል።",
    aboutP2: "በእንግሊዘኛ እና በአማርኛ እንሠራለን። የወርቅ አበባ ያለው የሰርግ ኬክ፣ ቢራቢሮ ያለው የልደት ኬክ፣ ወይም የምስል ኬክ — እያንዳንዱ ኬክ የግል እንዲሆን እንወዳለን።",
    aboutTiktok: "በቲክቶክ ይከተሉን",
    aboutTelegram: "በቴሌግራም ይላኩልን",
    contactEyebrow: "ትዕዛዞች",
    contactTitle: "ኬክ ይዘዙ",
    contactLead: "አጋጣሚውን፣ የሚወዱትን ኬክ እና ቀኑን ይንገሩን። ዝርዝሮችን ለማረጋገጥ እንመልሳለን።",
    contactPoint1: "የሰርግ፣ የልደት፣ የዝግጅት፣ የበዓል እና ብጁ ኬኮች",
    contactPoint2: "ብጁ ፎቶዎች፣ አርማዎች እና የገጸ-ባህሪ ዲዛይኖች",
    contactPoint3: "በቲክቶክ @lidiyamerklgn1 ይላኩልን",
    formName: "ስም",
    formPhone: "ስልክ",
    formCake: "ኬክ",
    formCakePlaceholder: "ኬክ ይምረጡ",
    formDate: "የዝግጅት ቀን",
    formMessage: "መልእክት",
    formMessagePlaceholder: "አጋጣሚ፣ የሰዎች ብዛት፣ ጣዕም ወይም የዲዛይን ማስታወሻዎች",
    formSubmit: "ጥያቄ ይላኩ",
    formSuccess: "እናመሰግናለን። ጥያቄዎ ዝግጁ ነው — ለማረጋገጥ በቲክቶክ @lidiyamerklgn1 ይላኩልን።",
    formError: "እባክዎ ስምዎን እና ስልክዎን ያስገቡ።",
    orderThis: "ይህን ኬክ ይዘዙ",
    footerNote: "ለሰርግ፣ ለልደት እና ለሁሉም በዓላት በእጅ የተሰሩ ኬኮች።",
  },
};

const state = {
  lang: localStorage.getItem("pila-lang") === "am" ? "am" : "en",
  filter: "all",
};

function t(key) {
  return I18N[state.lang][key];
}

function formatPrice(price) {
  return `${price.toLocaleString("en-US")} ETB`;
}

function productName(product) {
  return product[state.lang];
}

function categoryLabel(category) {
  return CATEGORY_LABELS[category][state.lang];
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.body.lang = state.lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (typeof value === "string") el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === state.lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  renderFilters();
  renderProducts();
  renderCakeSelect();
}

function renderFilters() {
  const wrap = document.getElementById("filters");
  wrap.innerHTML = CATEGORIES.map(
    (cat) => `
      <button type="button" class="filter-btn${state.filter === cat.id ? " is-active" : ""}" data-filter="${cat.id}">
        ${cat[state.lang]}
      </button>
    `
  ).join("");
}

function filteredProducts() {
  if (state.filter === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === state.filter);
}

function renderProducts() {
  const items = filteredProducts();
  document.getElementById("resultCount").textContent = t("resultCount")(items.length);
  document.getElementById("productGrid").innerHTML = items
    .map(
      (p) => `
        <article class="card" data-id="${p.id}" tabindex="0">
          <img src="${IMG(p.image)}" alt="${productName(p)}">
          <div class="card-body">
            <p class="card-category">${categoryLabel(p.category)}</p>
            <h3>${productName(p)}</h3>
            <p class="card-price">${formatPrice(p.price)}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCakeSelect(selectedId) {
  const select = document.getElementById("cakeSelect");
  const current = selectedId || select.value;
  select.innerHTML =
    `<option value="">${t("formCakePlaceholder")}</option>` +
    PRODUCTS.map((p) => `<option value="${p.id}">${productName(p)} — ${formatPrice(p.price)}</option>`).join("");
  if (current) select.value = current;
}

function renderGallery() {
  document.getElementById("galleryGrid").innerHTML = GALLERY.map(
    (file) => `<img src="${IMG(file)}" alt="" data-gallery-src="${IMG(file)}">`
  ).join("");
}

function openModal(product) {
  const modal = document.getElementById("productModal");
  document.getElementById("modalImage").src = IMG(product.image);
  document.getElementById("modalImage").alt = productName(product);
  document.getElementById("modalCategory").textContent = categoryLabel(product.category);
  document.getElementById("modalTitle").textContent = productName(product);
  document.getElementById("modalPrice").textContent = formatPrice(product.price);
  document.getElementById("modalOrder").dataset.id = product.id;
  modal.hidden = false;
}

function closeModal() {
  document.getElementById("productModal").hidden = true;
}

function openLightbox(src) {
  document.getElementById("lightboxImage").src = src;
  document.getElementById("lightbox").hidden = false;
}

function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
}

function orderProduct(id) {
  closeModal();
  const select = document.getElementById("cakeSelect");
  select.value = String(id);
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  select.focus();
}

function init() {
  applyLanguage();
  renderGallery();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lang = btn.dataset.lang;
      localStorage.setItem("pila-lang", state.lang);
      applyLanguage();
    });
  });

  document.getElementById("filters").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-filter]");
    if (!btn) return;
    state.filter = btn.dataset.filter;
    renderFilters();
    renderProducts();
  });

  document.getElementById("productGrid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-id]");
    if (!card) return;
    const product = PRODUCTS.find((p) => p.id === Number(card.dataset.id));
    if (product) openModal(product);
  });

  document.getElementById("productGrid").addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest("[data-id]");
    if (!card) return;
    event.preventDefault();
    const product = PRODUCTS.find((p) => p.id === Number(card.dataset.id));
    if (product) openModal(product);
  });

  document.getElementById("galleryGrid").addEventListener("click", (event) => {
    const img = event.target.closest("[data-gallery-src]");
    if (img) openLightbox(img.dataset.gallerySrc);
  });

  document.querySelectorAll("[data-close-modal]").forEach((el) => el.addEventListener("click", closeModal));
  document.querySelectorAll("[data-close-lightbox]").forEach((el) => el.addEventListener("click", closeLightbox));
  document.getElementById("lightbox").addEventListener("click", (event) => {
    if (event.target.id === "lightbox") closeLightbox();
  });

  document.getElementById("modalOrder").addEventListener("click", (event) => {
    orderProduct(event.currentTarget.dataset.id);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeModal();
    closeLightbox();
  });

  const nav = document.getElementById("nav");
  const toggle = document.getElementById("menuToggle");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.getElementById("orderForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = document.getElementById("formStatus");
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    if (!name || !phone) {
      status.hidden = false;
      status.textContent = t("formError");
      return;
    }
    status.hidden = false;
    status.textContent = t("formSuccess");
    form.reset();
    renderCakeSelect();
  });
}

init();
