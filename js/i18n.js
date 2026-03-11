// Sistema de traducciones sencillo para la landing de Belón Energy

(function () {
  var STORAGE_KEY = 'belon_lang';

  var translations = {
    es: {
      nav_services: 'Servicios',
      nav_how_it_works: 'Cómo funciona',
      nav_why_us: 'Beneficios',
      nav_contact: 'Contacto',

      hero_title: '¿Estás pagando más de lo necesario en tu factura de luz?',
      hero_subtitle: 'En Belón Energy analizamos tu contrato energético, detectamos sobrecostes y gestionamos los cambios con la comercializadora para que no pierdas tiempo ni dinero.',
      hero_cta_primary: 'Revisar mi factura',
      hero_cta_secondary: 'Hablar por WhatsApp',
      hero_support: 'Asesoramiento independiente para particulares, comunidades y empresas.',
      header_cta: 'Revisar mi factura',
      floating_cta: 'Analizar factura gratis',
      segment_tab_particular: 'Particular',
      segment_tab_community: 'Comunidad',
      segment_tab_company: 'Empresa',

      supply_option_both: 'Luz y gas',
      supply_option_power: 'Solo luz',
      supply_option_gas: 'Solo gas',

      bill_option_lt_50: 'Menos de 50€',
      bill_option_50_100: '50–100€',
      bill_option_100_200: '100–200€',
      bill_option_gt_200: 'Más de 200€',

      contact_section_title: 'Solicita la revisión de tu factura',
      contact_section_p1: 'Envíanos tu factura y analizaremos tu contrato energético para identificar posibles mejoras.',

      strong_cta_title: 'Descubre si estás pagando de más en tu factura.',
      strong_cta_subtitle: 'Analizamos tu contrato de luz y gas, sin compromiso, y te proponemos cómo pagar menos.',
      strong_cta_button: 'Revisar mi factura',
      strong_cta_note: 'Estudio energético sin compromiso.',

      // Panel flotante del formulario
      lead_panel_title: 'Revisamos tu factura por ti',
      lead_panel_intro: 'Déjanos tus datos y, si quieres, sube tu factura de luz. Nosotros hablamos con la distribuidora y te proponemos la mejor opción.',

      // Sección "Por qué nosotros"
      why_title: 'Tu factura energética no debería ser un problema.',
      why_intro: 'La mayoría de hogares y pequeños negocios pagan de más porque no tienen tiempo para revisar contratos, entender tarifas ni pelearse con las compañías. En Belón Energy gestionamos tus facturas para que pagues solo lo necesario.',
      why_card1_title: 'Facturas que no se entienden',
      why_card1_text: 'Discriminación horaria, peajes, ajustes… Las compañías complican el lenguaje para que no sepas exactamente qué estás pagando.',
      why_card2_title: 'Horas perdidas al teléfono',
      why_card2_text: 'Llamadas eternas, menús automáticos y explicaciones distintas según con quién hables. Mientras tanto, tus facturas siguen llegando cada mes.',
      why_card3_title: 'Subidas de precios sin avisar',
      why_card3_text: 'Las condiciones cambian, aparecen cargos extra y casi nunca tienes una visión clara de si estás pagando un precio justo.',
      why_bottom_title: 'Gestionamos tu energía por ti.',
      why_bottom_text: 'Nos encargamos de analizar tus facturas, optimizar tus contratos de luz y gas y hablar con las compañías en tu nombre. Tú solo nos envías tu factura y nosotros nos ocupamos del resto.',

      // Sección servicios
      services_title: 'Servicios de optimización energética',
      services_intro: 'Nuestro trabajo consiste en revisar tu contrato energético y encontrar oportunidades de mejora que te permitan optimizar tu factura sin complicaciones.',
      service1_title: 'Análisis de factura',
      service1_text: 'Estudiamos tu factura de luz o gas para identificar posibles sobrecostes, errores o condiciones mejorables.',
      service2_title: 'Optimización de tarifa',
      service2_text: 'Comparamos comercializadoras y propuestas para ajustar tu contrato a tu consumo real y cambiarte a la mejor tarifa disponible.',
      service3_title: 'Gestión con la comercializadora',
      service3_text: 'Nos encargamos de gestionar los cambios necesarios con la compañía energética.',
      service4_title: 'Seguimiento energético',
      service4_text: 'Revisamos tu situación periódicamente para asegurarnos de que sigues pagando lo justo.',

      // Cómo funciona
      how_title: 'Así funciona nuestro servicio',
      how_intro: 'Un proceso sencillo para revisar tu factura de luz o gas y aplicar las mejoras sin que tengas que pelearte con las compañías.',
      how_step1_title: 'Nos envías tu factura',
      how_step1_text: 'Puedes enviarnos una copia de tu factura de luz o gas a través del formulario o por WhatsApp.',
      how_step2_title: 'Analizamos tu contrato energético',
      how_step2_text: 'Revisamos condiciones, tarifas, potencias y servicios añadidos para detectar dónde estás pagando de más.',
      how_step3_title: 'Te explicamos las mejoras',
      how_step3_text: 'Te presentamos las opciones de optimización de forma clara y sin compromiso.',
      how_step4_title: 'Gestionamos los cambios',
      how_step4_text: 'Si decides aplicar las mejoras, gestionamos los trámites con la compañía.',

      // Testimonios
      testimonials_title: 'Lo que dicen nuestros clientes',
      testimonials_note: 'Próximamente integraremos reseñas verificadas de Google Reviews.',

      // Otras soluciones
      extra_title: 'Otras soluciones energéticas',
      extra_intro: 'Además de la optimización de facturas, en Belón Energy también ofrecemos asesoramiento en otros proyectos relacionados con la energía para particulares, comunidades y empresas.',
      extra_cta_text: '¿Quieres saber qué solución energética es la mejor para tu caso?',
      extra_cta_button: 'Consultar por WhatsApp',
      extra_card_cta: 'Consultar servicio',

      // Testimonios (textos principales)
      testimonial1_text: '"Envié mi factura por WhatsApp y en 48 horas tenía una propuesta clara. Solo con ajustar la potencia ya estoy pagando bastante menos cada mes."',
      testimonial1_author: 'Juan R. · Hogar en Marbella',
      testimonial2_text: '"Nos explicaron la factura paso a paso y se encargaron de hablar con la comercializadora. No hemos tenido que hacer ni una llamada y la factura ha bajado."',
      testimonial2_author: 'María L. · Administración de fincas',
      testimonial3_text: '"Como pequeña empresa no teníamos tiempo para revisar contratos. Con Belón Energy tenemos a alguien de confianza que nos avisa cuando hay cambios y oportunidades de ahorro."',
      testimonial3_author: 'Andrés B. · Pyme de servicios',

      // Tarjetas de soluciones adicionales
      extra_card1_title: 'Instalaciones fotovoltaicas',
      extra_card1_text: 'Soluciones de autoconsumo para reducir el consumo energético.',
      extra_card1_li1: '· Estudio energético',
      extra_card1_li2: '· Diseño de la instalación',
      extra_card1_li3: '· Tramitación administrativa',
      extra_card1_li4: '· Instalación y puesta en marcha',
      extra_card1_footer: 'Para que produzcas tu propia energía y reduzcas al máximo tu factura eléctrica.',

      extra_card2_title: 'Renting fotovoltaico',
      extra_card2_text: 'Opciones de financiación para proyectos solares.',
      extra_card2_li1: '· Sin inversión inicial',
      extra_card2_li2: '· Ahorro desde el primer día',
      extra_card2_li3: '· Mantenimiento incluido',
      extra_card2_li4: '· Contrato flexible',
      extra_card2_footer: 'Una forma sencilla de acceder al autoconsumo sin comprometer tu liquidez.',

      extra_card3_title: 'Alquiler de tejados para autoconsumo',
      extra_card3_text: 'Aprovechamiento de cubiertas para generación energética.',
      extra_card3_li1: '· Estudio de viabilidad',
      extra_card3_li2: '· Búsqueda de inversores',
      extra_card3_li3: '· Gestión completa del proyecto',
      extra_card3_footer: 'Genera ingresos pasivos sin inversión ni preocupaciones técnicas.',

      extra_card4_title: 'Certificados de eficiencia energética',
      extra_card4_text: 'Evaluación energética de viviendas y edificios.',
      extra_card4_li1: '· Obligatorio para vender o alquilar',
      extra_card4_li2: '· Válido para trámites inmobiliarios',
      extra_card4_li3: '· Inspección técnica y registro oficial',
      extra_card4_footer: 'Un trámite rápido y seguro para cumplir con la normativa vigente.',

      // Contacto lateral
      contact_section_p2: 'El formulario flotante que ves a la derecha está siempre disponible para que nos dejes tus datos en cualquier momento de la visita.',
      contact_call_label: 'Llámanos',
      contact_email_label: 'Email',
      contact_hq_label: 'Sede Central',

      // Footer
      footer_brand_text: 'Belón Energy es una asesoría energética independiente que ayuda a particulares, comunidades y empresas a optimizar sus contratos de luz y gas y gestionar sus servicios energéticos con mayor claridad.',
      footer_sections_title: 'Servicios y secciones',
      footer_legal_title: 'Legal',
      footer_link_services: 'Servicios',
      footer_link_other_solutions: 'Otras soluciones energéticas',
      footer_link_about: 'Sobre Belón Energy',
      footer_link_how: 'Cómo funciona',
      footer_link_contact: 'Contacto',
      footer_link_privacy: 'Privacidad',
      footer_link_legal: 'Aviso legal',
      footer_contact_title: 'Contacto',
      footer_copyright: '© Belón Energy. Todos los derechos reservados.',
      footer_cookie_settings: 'Gestionar cookies',

      contact_name_label: 'Nombre completo',
      contact_name_placeholder: 'Ej: Juan García',
      contact_phone_label: 'Teléfono',
      contact_phone_placeholder: '+34 000 000 000',
      contact_email_label: 'Email (opcional)',
      contact_email_placeholder: 'juan@ejemplo.com',
      contact_supply_label: 'Tipo de suministro',
      contact_bill_label: 'Factura mensual aproximada',
      contact_invoice_label: 'Subir factura (opcional)',
      contact_invoice_text: 'Arrastra aquí tu factura o haz clic para seleccionarla',
      contact_invoice_help: 'Aceptamos archivos PDF o imagen (JPG, PNG). Si no la tienes a mano, puedes enviárnosla después.',
      contact_privacy_text: 'He leído y acepto la <button type="button" class="underline hover:text-primary dark:hover:text-accent-green transition-colors cursor-pointer" id="open-privacy-from-form">política de privacidad y protección de datos</button>.',
      contact_submit: 'Enviar factura para revisión',
      contact_submit_note: 'Analizamos tu caso sin compromiso y te llamamos en menos de 48 horas.',

      // CTA sección "Cómo funciona"
      how_cta: 'Solicitar revisión de factura',

      // Nueva sección problema/dolor
      problem_title: 'Tu factura energética no debería ser una incógnita',
      problem_text: '<p>La factura de la luz y el gas se ha vuelto cada vez más difícil de entender. Tarifas que cambian, potencias mal ajustadas, precios que suben sin que sepamos exactamente por qué.</p><p>Muchas personas y empresas terminan pagando más de lo necesario simplemente porque no tienen tiempo o conocimientos para revisar su contrato energético.</p><p>En Belón Energy analizamos tu situación energética para ayudarte a pagar solo lo que realmente corresponde a tu consumo.</p>',

      // Beneficios
      benefits_title: 'Qué ganas con Belón Energy',
      benefit1_title: 'Mayor control sobre tu factura energética',
      benefit1_text: 'Entiendes qué estás pagando en cada concepto y dónde se puede optimizar.',
      benefit2_title: 'Optimización de tu tarifa y potencia contratada',
      benefit2_text: 'Ajustamos tu contrato a tu consumo real para evitar sobrecostes innecesarios.',
      benefit3_title: 'Un interlocutor independiente',
      benefit3_text: 'Te representamos frente a las compañías energéticas sin intereses comerciales ocultos.',
      benefit4_title: 'Más claridad en tus contratos energéticos',
      benefit4_text: 'Simplificamos la letra pequeña para que tomes decisiones informadas.',
      benefit5_title: 'Ahorro de tiempo en gestiones complejas',
      benefit5_text: 'Olvídate de llamadas, esperas y trámites con las comercializadoras.',
      benefit6_title: 'Seguimiento a largo plazo',
      benefit6_text: 'Revisamos tu situación periódicamente para que sigas pagando solo lo que corresponde.'
    },
    en: {
      nav_services: 'Services',
      nav_how_it_works: 'How it works',
      nav_why_us: 'Benefits',
      nav_contact: 'Contact',

      hero_title: 'Are you paying more than you should on your electricity bill?',
      hero_subtitle: 'At Belón Energy we analyse your energy contract, detect overcharges and handle the changes with your supplier so you do not waste time or money.',
      hero_cta_primary: 'Review my bill',
      hero_cta_secondary: 'Chat on WhatsApp',
      hero_support: 'Independent advice for households, communities and businesses.',
      header_cta: 'Review my bill',
      floating_cta: 'Free bill review',
      segment_tab_particular: 'Residential',
      segment_tab_community: 'Community',
      segment_tab_company: 'Business',

      supply_option_both: 'Electricity and gas',
      supply_option_power: 'Electricity only',
      supply_option_gas: 'Gas only',

      bill_option_lt_50: 'Under €50',
      bill_option_50_100: '€50–100',
      bill_option_100_200: '€100–200',
      bill_option_gt_200: 'More than €200',

      contact_section_title: 'Request your bill review',
      contact_section_p1: 'Send us your bill and we will analyse your energy contract to identify possible improvements.',

      strong_cta_title: 'Find out if you are overpaying on your energy bill.',
      strong_cta_subtitle: 'We analyse your electricity and gas contract with no obligation and show you how to pay less.',
      strong_cta_button: 'Review my bill',
      strong_cta_note: 'Energy study with no obligation.',

      // Floating lead form panel
      lead_panel_title: 'We review your bill for you',
      lead_panel_intro: 'Leave us your details and, if you wish, upload your electricity bill. We speak directly with the distributor and propose the best option for you.',

      // "Why us" section
      why_title: 'Your energy bill should not be a problem.',
      why_intro: 'Most households and small businesses overpay because they do not have time to review contracts, understand tariffs or argue with energy companies. At Belón Energy we manage your bills so that you only pay what is necessary.',
      why_card1_title: 'Bills that are hard to understand',
      why_card1_text: 'Time-of-use tariffs, network charges, adjustments… Energy companies use complex language so you never really know what you are paying for.',
      why_card2_title: 'Hours lost on the phone',
      why_card2_text: 'Endless calls, automated menus and different explanations depending on who you speak to. Meanwhile, your bills keep arriving every month.',
      why_card3_title: 'Price increases without warning',
      why_card3_text: 'Conditions change, extra charges appear and you rarely have a clear view of whether you are paying a fair price.',
      why_bottom_title: 'We manage your energy for you.',
      why_bottom_text: 'We analyse your bills, optimise your electricity and gas contracts and talk to the companies on your behalf. You simply send us your bill and we take care of the rest.',

      // Services section
      services_title: 'Energy optimisation services',
      services_intro: 'Our job is to review your energy contract and find improvement opportunities so you can optimise your bill without complications.',
      service1_title: 'Bill analysis',
      service1_text: 'We study your electricity or gas bill to identify possible overcharges, errors or better conditions.',
      service2_title: 'Tariff optimisation',
      service2_text: 'We compare suppliers and offers to match your contract to your real consumption and switch you to the best available tariff.',
      service3_title: 'Supplier management',
      service3_text: 'We take care of managing the necessary changes directly with your energy company.',
      service4_title: 'Energy follow‑up',
      service4_text: 'We periodically review your situation to make sure you keep paying the right amount.',

      // How it works
      how_title: 'How our service works',
      how_intro: 'A simple process to review your electricity or gas bill and apply improvements without you having to deal with the companies.',
      how_step1_title: 'You send us your bill',
      how_step1_text: 'You can send us a copy of your electricity or gas bill via the form or WhatsApp.',
      how_step2_title: 'We analyse your energy contract',
      how_step2_text: 'We review conditions, tariffs, power and extra services to detect where you are overpaying.',
      how_step3_title: 'We explain the improvements',
      how_step3_text: 'We present the optimisation options clearly and with no obligation.',
      how_step4_title: 'We manage the changes',
      how_step4_text: 'If you decide to go ahead, we handle the procedures with the company.',

      // Testimonials
      testimonials_title: 'What our clients say',
      testimonials_note: 'We will soon integrate verified reviews from Google Reviews.',

      // Extra energy solutions
      extra_title: 'Other energy solutions',
      extra_intro: 'In addition to bill optimisation, Belón Energy also offers advice on other energy‑related projects for individuals, communities and businesses.',
      extra_cta_text: 'Do you want to know which energy solution is best for you?',
      extra_cta_button: 'Ask on WhatsApp',
      extra_card_cta: 'Ask about this service',

      // Testimonials main texts
      testimonial1_text: '"I sent my bill via WhatsApp and within 48 hours I had a clear proposal. Just by adjusting the contracted power I am already paying significantly less every month."',
      testimonial1_author: 'Juan R. · Home in Marbella',
      testimonial2_text: '"They explained the bill step by step and dealt with the supplier for us. We have not had to make a single call and the bill has gone down."',
      testimonial2_author: 'María L. · Property management',
      testimonial3_text: '"As a small business we had no time to review contracts. With Belón Energy we have someone we trust who alerts us when there are changes and savings opportunities."',
      testimonial3_author: 'Andrés B. · Service SME',

      // Extra solutions cards
      extra_card1_title: 'Solar PV installations',
      extra_card1_text: 'Self‑consumption solutions to reduce your energy use from the grid.',
      extra_card1_li1: '· Energy study',
      extra_card1_li2: '· System design',
      extra_card1_li3: '· Administrative paperwork',
      extra_card1_li4: '· Installation and commissioning',
      extra_card1_footer: 'So you can generate your own energy and reduce your electricity bill as much as possible.',

      extra_card2_title: 'Solar leasing',
      extra_card2_text: 'Financing options for solar projects.',
      extra_card2_li1: '· No initial investment',
      extra_card2_li2: '· Savings from day one',
      extra_card2_li3: '· Maintenance included',
      extra_card2_li4: '· Flexible contract',
      extra_card2_footer: 'A simple way to access self‑consumption without compromising your cash flow.',

      extra_card3_title: 'Roof rental for self‑consumption',
      extra_card3_text: 'Use your roof space for solar generation projects.',
      extra_card3_li1: '· Feasibility study',
      extra_card3_li2: '· Investor search',
      extra_card3_li3: '· Full project management',
      extra_card3_footer: 'Generate passive income with no investment and no technical worries.',

      extra_card4_title: 'Energy performance certificates',
      extra_card4_text: 'Energy assessment for homes and buildings.',
      extra_card4_li1: '· Mandatory for selling or renting',
      extra_card4_li2: '· Valid for property transactions',
      extra_card4_li3: '· Technical inspection and official registration',
      extra_card4_footer: 'A quick, safe way to comply with current regulations.',

      // Contact side info
      contact_section_p2: 'The floating form you see on the right is always available so you can leave us your details at any time during your visit.',
      contact_call_label: 'Call us',
      contact_email_label: 'Email',
      contact_hq_label: 'Head office',

      // Footer
      footer_brand_text: 'Belón Energy is an independent energy consultancy that helps individuals, communities and businesses optimise their electricity and gas contracts and manage their energy services more clearly.',
      footer_sections_title: 'Sections & services',
      footer_legal_title: 'Legal',
      footer_link_services: 'Services',
      footer_link_other_solutions: 'Other energy solutions',
      footer_link_about: 'About Belón Energy',
      footer_link_how: 'How it works',
      footer_link_contact: 'Contact',
      footer_link_privacy: 'Privacy',
      footer_link_legal: 'Legal notice',
      footer_contact_title: 'Contact',
      footer_copyright: '© Belón Energy. All rights reserved.',
      footer_cookie_settings: 'Manage cookies',

      contact_name_label: 'Full name',
      contact_name_placeholder: 'e.g. John Smith',
      contact_phone_label: 'Phone',
      contact_phone_placeholder: '+34 000 000 000',
      contact_email_label: 'Email (optional)',
      contact_email_placeholder: 'john@example.com',
      contact_supply_label: 'Supply type',
      contact_bill_label: 'Approx. monthly bill',
      contact_invoice_label: 'Upload bill (optional)',
      contact_invoice_text: 'Drag your bill here or click to select it',
      contact_invoice_help: 'We accept PDF or image files (JPG, PNG). If you do not have it to hand, you can send it later.',
      contact_privacy_text: 'I have read and accept the <button type="button" class="underline hover:text-primary dark:hover:text-accent-green transition-colors cursor-pointer" id="open-privacy-from-form">privacy and data protection policy</button>.',
      contact_submit: 'Send bill for review',
      contact_submit_note: 'We review your case with no obligation and call you back within 48 hours.',

      // CTA in "How it works" section
      how_cta: 'Request bill review',

      // Problem section
      problem_title: 'Your energy bill should not be a mystery',
      problem_text: '<p>Electricity and gas bills have become increasingly difficult to understand. Tariffs that change, wrongly sized power, prices that go up without us really knowing why.</p><p>Many people and businesses end up paying more than they should simply because they do not have the time or knowledge to review their energy contract.</p><p>At Belón Energy we analyse your situation so you only pay for the energy you actually use.</p>',

      // Benefits
      benefits_title: 'What you gain with Belón Energy',
      benefit1_title: 'More control over your energy bill',
      benefit1_text: 'You understand what you are paying for in each item and where there is room for optimisation.',
      benefit2_title: 'Optimised tariff and contracted power',
      benefit2_text: 'We adapt your contract to your real consumption to avoid unnecessary overcharges.',
      benefit3_title: 'An independent representative',
      benefit3_text: 'We represent you in front of energy companies with no hidden commercial interests.',
      benefit4_title: 'More clarity in your contracts',
      benefit4_text: 'We simplify the small print so you can make informed decisions.',
      benefit5_title: 'Time savings on complex procedures',
      benefit5_text: 'Forget about calls, waiting times and paperwork with suppliers.',
      benefit6_title: 'Long‑term follow‑up',
      benefit6_text: 'We periodically review your situation so you continue paying only what corresponds.'
    }
  };

  function applyLanguage(lang) {
    if (!translations[lang]) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = translations[lang][key];
      if (typeof value === 'string') {
        el.innerHTML = value;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var value = translations[lang][key];
      if (typeof value === 'string') {
        el.setAttribute('placeholder', value);
      }
    });
  }

  function updateLangSwitcherUI(lang) {
    document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang-switch') === lang;
      btn.classList.toggle('bg-primary', isActive);
      btn.classList.toggle('text-white', isActive);
      btn.classList.toggle('shadow-sm', isActive);
      btn.classList.toggle('border-primary/20', isActive);

      if (!isActive) {
        btn.classList.remove('bg-primary', 'text-white', 'shadow-sm');
      }
    });
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    applyLanguage(lang);
    document.documentElement.setAttribute('data-lang', lang);
    updateLangSwitcherUI(lang);
    try {
      document.dispatchEvent(new CustomEvent('i18n:language-changed', { detail: { lang: lang } }));
    } catch (e) {}
  }

  window.setLanguage = setLanguage;

  document.addEventListener('DOMContentLoaded', function () {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}

    var initial = saved;
    if (!initial) {
      var browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
      initial = browserLang.indexOf('en') === 0 ? 'en' : 'es';
    }
    if (!translations[initial]) initial = 'es';

    document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang-switch');
        setLanguage(lang);
      });
    });

    setLanguage(initial);
  });
})();

