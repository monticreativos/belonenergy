// Sistema de traducciones sencillo para la landing de Belón Energy

(function () {
  var STORAGE_KEY = 'belon_lang';

  var translations = {
    es: {
      nav_services: 'Servicios',
      nav_how_it_works: 'Cómo funciona',
      nav_why_us: 'Por qué nosotros',
      nav_contact: 'Contacto',

      hero_title: 'Revisamos y gestionamos tu factura de luz y gas para que pagues menos.',
      hero_subtitle: 'Analizamos tu factura de luz y gas, detectamos sobrecostes, optimizamos tus tarifas y hablamos con las compañías por ti para que dejes de perder tiempo en llamadas y pagues solo lo justo.',
      hero_cta_primary: 'Analizar factura gratis',
      hero_cta_secondary: 'Subir factura',
      header_cta: 'Analizar factura gratis',
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

      contact_section_title: 'Envíanos tu factura y nos encargamos de todo',
      contact_section_p1: 'Envíanos tu factura de luz o gas y la revisamos línea a línea para detectar sobrecostes y errores. Nosotros hablamos con la distribuidora o comercializadora por ti, sin llamadas eternas ni letra pequeña.',

      strong_cta_title: 'Descubre si estás pagando de más en tu factura.',
      strong_cta_subtitle: 'Analizamos tu contrato de luz y gas, sin compromiso, y te proponemos cómo pagar menos.',
      strong_cta_button: 'Analizar factura gratis',
      strong_cta_note: 'Estudio energético sin compromiso.',

      // Panel flotante del formulario
      lead_panel_title: 'Consigue tu mejor tarifa sin llamadas eternas',
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
      services_title: 'Servicios pensados para que pagues menos.',
      services_intro: 'Un servicio integral de gestión de facturas de luz y gas para hogares y pequeños negocios que quieren olvidarse de las compañías energéticas.',
      service1_title: 'Auditoría de factura',
      service1_text: 'Revisamos tus facturas de luz y gas para detectar sobrecostes, tarifas incorrectas y servicios que no necesitas.',
      service2_title: 'Optimización de tarifa',
      service2_text: 'Comparamos comercializadoras y propuestas para ajustar tu contrato a tu consumo real y cambiarte a la mejor tarifa disponible.',
      service3_title: 'Gestión con compañías',
      service3_text: 'Hacemos las llamadas y trámites por ti: cambios de contrato, ajustes de potencia, incidencias de facturación y reclamaciones.',
      service4_title: 'Seguimiento continuo',
      service4_text: 'Revisamos periódicamente tus facturas para asegurarnos de que sigues con la mejor tarifa y te avisamos si aparece una opción mejor.',

      // Cómo funciona
      how_title: 'Cómo funciona nuestro servicio para revisar tu factura.',
      how_intro: 'Un proceso sencillo de revisión de factura de luz y gas para que pases de facturas confusas a pagar solo lo justo, sin tratar directamente con las compañías.',
      how_step1_title: 'Subes tu factura o rellenas el formulario',
      how_step1_text: 'Puedes adjuntar tu factura de luz o gas o simplemente indicarnos tus datos de contacto y tu gasto aproximado.',
      how_step2_title: 'Analizamos tu contrato energético',
      how_step2_text: 'Revisamos condiciones, tarifas, potencias y servicios añadidos para detectar dónde estás pagando de más.',
      how_step3_title: 'Optimizamos tu tarifa y gestionamos los cambios',
      how_step3_text: 'Hablamos con las compañías por ti para aplicar la tarifa adecuada, ajustar potencias y resolver incidencias.',
      how_step4_title: 'Empiezas a pagar menos',
      how_step4_text: 'Te explicamos de forma sencilla los cambios realizados y cuánto puedes ahorrar a partir de ahora.',

      // Testimonios
      testimonials_title: 'Lo que dicen nuestros clientes',

      // Otras soluciones
      extra_title: 'Más soluciones para optimizar tu energía',
      extra_intro: 'Además de gestionar tu factura de luz y gas, ofrecemos soluciones energéticas para viviendas y empresas que buscan reducir costes y mejorar su eficiencia.',
      extra_cta_text: '¿Quieres saber qué solución energética es la mejor para tu caso?',
      extra_cta_button: 'Solicitar asesoramiento',

      // Testimonios (textos principales)
      testimonial1_text: '"La precisión técnica de Belón es de otro nivel. Todo funcionó exactamente como prometieron en el estudio inicial."',
      testimonial1_author: 'Juan Rodríguez - Residente Marbella',
      testimonial2_text: '"Increíble servicio post-venta. Tuvimos una duda con la app y nos atendieron un domingo en 10 minutos. Totalmente recomendados."',
      testimonial2_author: 'María López - Gerente Industrial',
      testimonial3_text: '"Buscábamos ingeniería pura y no comerciales agresivos. Belón nos dio la confianza técnica que necesitábamos."',
      testimonial3_author: 'Andrés Benítez - Arquitecto',

      // Tarjetas de soluciones adicionales
      extra_card1_title: 'Instalaciones fotovoltaicas',
      extra_card1_text: 'Diseñamos e instalamos sistemas solares adaptados al consumo real de cada vivienda o empresa.',
      extra_card1_li1: '· Estudio energético',
      extra_card1_li2: '· Diseño de la instalación',
      extra_card1_li3: '· Tramitación administrativa',
      extra_card1_li4: '· Instalación y puesta en marcha',
      extra_card1_footer: 'Para que produzcas tu propia energía y reduzcas al máximo tu factura eléctrica.',

      extra_card2_title: 'Renting fotovoltaico',
      extra_card2_text: 'Instala energía solar sin inversión inicial y paga una cuota mensual fija.',
      extra_card2_li1: '· Sin inversión inicial',
      extra_card2_li2: '· Ahorro desde el primer día',
      extra_card2_li3: '· Mantenimiento incluido',
      extra_card2_li4: '· Contrato flexible',
      extra_card2_footer: 'Una forma sencilla de acceder al autoconsumo sin comprometer tu liquidez.',

      extra_card3_title: 'Alquiler de tejados',
      extra_card3_text: 'Si dispones de una cubierta amplia o nave industrial, podemos alquilar tu tejado para proyectos solares.',
      extra_card3_li1: '· Estudio de viabilidad',
      extra_card3_li2: '· Búsqueda de inversores',
      extra_card3_li3: '· Gestión completa del proyecto',
      extra_card3_footer: 'Genera ingresos pasivos sin inversión ni preocupaciones técnicas.',

      extra_card4_title: 'Certificado de eficiencia energética',
      extra_card4_text: 'Emitimos certificados energéticos oficiales para viviendas, locales y edificios.',
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
      footer_brand_text: 'Ingeniería especializada en energía fotovoltaica. Soluciones de autoconsumo para un futuro sostenible.',
      footer_links_title: 'Enlaces',
      footer_link_services: 'Servicios',
      footer_link_projects: 'Proyectos',
      footer_link_why: 'Por qué Belón',
      footer_link_contact: 'Contacto',
      footer_link_privacy: 'Política de privacidad',
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
      contact_invoice_label: 'Sube tu última factura (opcional)',
      contact_invoice_text: 'Arrastra aquí tu factura o haz clic para seleccionarla',
      contact_invoice_help: 'Aceptamos archivos PDF o imagen (JPG, PNG). Si no la tienes a mano, puedes enviárnosla después.',
      contact_privacy_text: 'He leído y acepto la <button type="button" class="underline hover:text-primary dark:hover:text-accent-green transition-colors cursor-pointer" id="open-privacy-from-form">política de privacidad y protección de datos</button>.',
      contact_submit: 'Quiero que reviséis mi factura',
      contact_submit_note: 'Analizamos tu caso sin compromiso y te llamamos en menos de 48 horas.'
    },
    en: {
      nav_services: 'Services',
      nav_how_it_works: 'How it works',
      nav_why_us: 'Why us',
      nav_contact: 'Contact',

      hero_title: 'We review and manage your electricity and gas bills so you pay less.',
      hero_subtitle: 'We analyse your electricity and gas bills, detect overcharges, optimise your tariffs and deal with the energy companies for you so you stop wasting time on calls and only pay what is fair.',
      hero_cta_primary: 'Free bill review',
      hero_cta_secondary: 'Upload my bill',
      header_cta: 'Free bill review',
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

      contact_section_title: 'Send us your bill and we take care of everything',
      contact_section_p1: 'Send us your electricity or gas bill and we will review it line by line to detect overcharges and errors. We speak directly with your distributor or retailer for you, with no endless calls or fine print.',

      strong_cta_title: 'Find out if you are overpaying on your energy bill.',
      strong_cta_subtitle: 'We analyse your electricity and gas contract with no obligation and show you how to pay less.',
      strong_cta_button: 'Free bill review',
      strong_cta_note: 'Energy study with no obligation.',

      // Floating lead form panel
      lead_panel_title: 'Get the best tariff without endless calls',
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
      services_title: 'Services designed to help you pay less.',
      services_intro: 'An end-to-end management service for electricity and gas bills aimed at households and small businesses that want to forget about energy companies.',
      service1_title: 'Bill audit',
      service1_text: 'We review your electricity and gas bills to detect overcharges, incorrect tariffs and services you do not need.',
      service2_title: 'Tariff optimisation',
      service2_text: 'We compare suppliers and offers to match your contract to your real consumption and switch you to the best available tariff.',
      service3_title: 'Dealing with energy companies',
      service3_text: 'We handle calls and paperwork for you: contract changes, power adjustments, billing issues and claims.',
      service4_title: 'Ongoing monitoring',
      service4_text: 'We periodically review your bills to ensure you still have the best tariff and notify you if a better option appears.',

      // How it works
      how_title: 'How our bill review service works.',
      how_intro: 'A simple electricity and gas bill review process that takes you from confusing invoices to paying only what is fair, without dealing directly with the companies.',
      how_step1_title: 'Upload your bill or fill in the form',
      how_step1_text: 'You can attach your electricity or gas bill or simply share your contact details and approximate spend.',
      how_step2_title: 'We analyse your energy contract',
      how_step2_text: 'We review conditions, tariffs, power and extra services to detect where you are overpaying.',
      how_step3_title: 'We optimise your tariff and manage the changes',
      how_step3_text: 'We speak to the energy companies on your behalf to apply the right tariff, adjust power and resolve incidents.',
      how_step4_title: 'You start paying less',
      how_step4_text: 'We explain in simple terms the changes made and how much you can save from now on.',

      // Testimonials
      testimonials_title: 'What our clients say',

      // Extra energy solutions
      extra_title: 'More solutions to optimise your energy',
      extra_intro: 'In addition to managing your electricity and gas bills, we offer energy solutions for homes and businesses that want to reduce costs and improve efficiency.',
      extra_cta_text: 'Do you want to know which energy solution is best for you?',
      extra_cta_button: 'Request advice',

      // Testimonials main texts
      testimonial1_text: '"Belón’s technical accuracy is on another level. Everything worked exactly as promised in the initial study."',
      testimonial1_author: 'Juan Rodríguez - Marbella resident',
      testimonial2_text: '"Amazing after‑sales service. We had a question about the app and they helped us on a Sunday in 10 minutes. Totally recommended."',
      testimonial2_author: 'María López - Industrial manager',
      testimonial3_text: '"We wanted pure engineering, not aggressive salespeople. Belón gave us the technical confidence we needed."',
      testimonial3_author: 'Andrés Benítez - Architect',

      // Extra solutions cards
      extra_card1_title: 'Solar PV installations',
      extra_card1_text: 'We design and install solar systems tailored to the real consumption of each home or business.',
      extra_card1_li1: '· Energy study',
      extra_card1_li2: '· System design',
      extra_card1_li3: '· Administrative paperwork',
      extra_card1_li4: '· Installation and commissioning',
      extra_card1_footer: 'So you can generate your own energy and reduce your electricity bill as much as possible.',

      extra_card2_title: 'Solar leasing',
      extra_card2_text: 'Install solar energy with no upfront investment and pay a fixed monthly fee.',
      extra_card2_li1: '· No initial investment',
      extra_card2_li2: '· Savings from day one',
      extra_card2_li3: '· Maintenance included',
      extra_card2_li4: '· Flexible contract',
      extra_card2_footer: 'A simple way to access self‑consumption without compromising your cash flow.',

      extra_card3_title: 'Roof rental',
      extra_card3_text: 'If you have a large roof or industrial building, we can rent it for solar projects.',
      extra_card3_li1: '· Feasibility study',
      extra_card3_li2: '· Investor search',
      extra_card3_li3: '· Full project management',
      extra_card3_footer: 'Generate passive income with no investment and no technical worries.',

      extra_card4_title: 'Energy performance certificate',
      extra_card4_text: 'We issue official energy performance certificates for homes, premises and buildings.',
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
      footer_brand_text: 'Engineering specialising in photovoltaic energy. Self-consumption solutions for a sustainable future.',
      footer_links_title: 'Links',
      footer_link_services: 'Services',
      footer_link_projects: 'Projects',
      footer_link_why: 'Why Belón',
      footer_link_contact: 'Contact',
      footer_link_privacy: 'Privacy policy',
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
      contact_invoice_label: 'Upload your latest bill (optional)',
      contact_invoice_text: 'Drag your bill here or click to select it',
      contact_invoice_help: 'We accept PDF or image files (JPG, PNG). If you do not have it to hand, you can send it later.',
      contact_privacy_text: 'I have read and accept the <button type="button" class="underline hover:text-primary dark:hover:text-accent-green transition-colors cursor-pointer" id="open-privacy-from-form">privacy and data protection policy</button>.',
      contact_submit: 'I want you to review my bill',
      contact_submit_note: 'We review your case with no obligation and call you back in less than 48 hours.'
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

