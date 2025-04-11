function changeLanguage() {
  const translations = {
    en: {
      langbuttonMB: "PT",
      langbutton: "PT",
      langbuttonFT: "PT",
      "nav-home": "Home",
      "nav-about": "About",
      "nav-service": "Service",
      "nav-project": "Project",
      "nav-resources": "Resources",
      "nav-contact": "Contact",
      "hero-heading": "Powering Businesses with Smarter Digital Solutions",
      "hero-text":
        "From custom software to ironclad security, we engineer technology that drives efficiency, growth, and competitive advantage.",
      "cuross-heading-2": "Secure, Scalable, Seamless – The Matisforce Way",
      "cuross-des-2":
        "Agile development, proactive IT management, and enterprise-grade security—all tailored to your business needs",
      "cuross-heading-3": "We Don’t Just Build Tech – We Build Trust",
      "cuross-des-3":
        " Partner with a team that prioritizes transparency, long-term relationships, and results you can measure",
      "about-heading": "About Us",
      "about-text":
        " Matisforce is a trusted technology partner dedicated to helping businesses innovate, secure, and scale through cutting-edge digital solutions. Founded on the principles of excellence, agility, and client-centricity, we combine deep technical expertise with a passion for problem-solving to deliver future-ready software, robust IT infrastructure, and ironclad cybersecurity.",
      "services-heading": "Our Services",
      "service-1-title": "Software Development",
      "service-1-text":
        "We craft scalable, high-performance software tailored to your unique business needs—from intuitive web/mobile apps to complex enterprise systems, using cutting-edge technologies like AI, cloud, and IoT.",
      "service-2-title": "Managed IT Services (MSP)",
      "service-2-text":
        "Our proactive 24/7 IT management ensures your infrastructure runs seamlessly—offering cloud solutions, cybersecurity, and helpdesk support so you can focus on growth, not downtime.",
      "service-3-title": "Cyber & Cloud Security",
      "service-3-text":
        "Protect your business with enterprise-grade security—comprehensive threat detection, compliance audits, and cloud hardening to safeguard your data and reputation.",
      "service-4-title": "Turn-Key Solutions",
      "service-4-text":
        "From concept to deployment, we deliver end-to-end technology solutions—handling development, integration, and scaling so you can launch faster and smarter.",
      "team-heading": "Team Members",
      "testimonial-heading": "Testimonial",
      "testimonial-1-text":
        "Matisforce built our healthcare SaaS platform from scratch—delivering it 3 weeks ahead of schedule. Their agile approach and clean code reduced our maintenance costs by 40%. They’re not just vendors; they’re long-term partners.",
      "testimonial-1-author": "Sarah K.",
      "testimonial-1-role": "CTO @ MedTech Solutions (Healthcare Industry)",
      "testimonial-2-text":
        "After struggling with constant IT fires, Matisforce took over our infrastructure. Their 24/7 monitoring and proactive updates cut our downtime to zero. Finally, we can focus on growth, not tech headaches.",
      "testimonial-2-author": "James L.",
      "testimonial-2-role": "COO @ RetailChain (E-commerce Industry)",
      "testimonial-3-text":
        "A competitor suffered a ransomware attack, but Matisforce’s preemptive penetration testing saved us. Their team patched vulnerabilities we didn’t even know existed. Worth every penny.",
      "testimonial-3-author": "Priya M.",
      "testimonial-3-role": "CISO @ Finova Bank (Financial Services)",
      "testimonial-4-text":
        "From concept to launch, Matisforce handled everything—UI/UX, development, even AWS scaling. Our MVP impressed investors so much we secured $2M in seed funding. They’re our secret weapon.",
      "testimonial-4-author": "Diego R.",
      "testimonial-4-role": "Founder @ AgriTech StartUp (Agriculture Tech)",
      "footer-quick-links": "Quick Links",
      "footer-about": "About Us",
      "footer-services": "Our Services",
      "footer-projects": "Our Projects",
      "footer-testimonials": "Testimonials",
      "footer-contact-heading": "Contact Matisforce",
      "footer-contact-text": "Let’s Build Something Extraordinary Together",
      "footer-contact-button": "Contact Us",
      "footer-address": "Address",
      "footer-address-text": "Rua da verdelho 333, 4470-825 Maia",
      "footer-phone": "Phone",
      "footer-phone-text": "+351 220968078",
      "footer-email": "Email",
      "footer-email-text": "info@matisforce.com",
      "copyright-text": ", All Right Reserved.",
      "terms-of-use": "Terms of Use",
      "code-of-conduct": "Code of Conduct",
      "complaints-channel": "Complaints Channel",
      readMore: "Read More",
      Address: "Address",
      Designation: "Designation",
      "fact-1-title": "On-Time Delivery, Every Time",
      "fact-1-text":
        "We deploy top-tier professionals and agile workflows to deliver your project on schedule—no matter the scope or complexity.",
      "fact-2-title": "Client Success, Not Just Satisfaction",
      "fact-2-text":
        "We build long-term partnerships by exceeding expectations, with solutions tailored to your evolving business needs.",
      "fact-3-title": "Future-Ready Solutions",
      "fact-3-text":
        "We leverage cutting-edge technology and industry best practices to ensure you get the most advanced, scalable tools available.",
      "what-we-do-heading": "What We Do",
      "what-we-do-text":
        "At Matisforce, we empower entrepreneurs and enterprises to transform bold ideas into market-ready software solutions...",
      "what-we-do-item-1": "Accelerates time-to-market with agile development.",
      "what-we-do-item-2": "Enhances user engagement through intuitive design.",
      "what-we-do-item-3":
        "Scales securely with cloud-native and DevOps practices.",
      "what-we-do-item-4":
        "Solves complex challenges with AI, IoT, or blockchain integration.",
      "who-we-are-heading": "Who We Are",
      "who-we-are-text":
        "Matisforce is a trusted technology partner dedicated to helping businesses innovate, secure, and scale through cutting-edge digital solutions...",
      "our-mission-heading": "Our Mission",
      "our-mission-text":
        "To empower organizations of all sizes with tailored, high-performance technology that drives growth, enhances efficiency, and mitigates risks in an ever-evolving digital landscape.",
      "our-values-heading": "Our Values",
      "our-values-item-1":
        "Innovation: We stay ahead of the curve with the latest tools and methodologies.",
      "our-values-item-2":
        "Integrity: Transparency and ethics are at the core of every partnership.",
      "our-values-item-3":
        "Impact: We measure success by the tangible results we deliver to your business.",
      "our-values-item-4":
        "Collaboration: Your vision + our expertise = unstoppable solutions.",
      "footer-quick-links-heading": "Quick Links",
      "footer-about-link": "About Us",
      "footer-services-link": "Our Services",
      "footer-projects-link": "Our Projects",
      "footer-testimonials-link": "Testimonials",
      "footer-contact-heading": "Contact Matisforce",
      "footer-contact-text": "Let’s Build Something Extraordinary Together",
      "footer-contact-button": "Contact Us",
      services_title: "Services",
      about_title: "About Us",
      contact_title: "Contact Us",
      contact: "Contact",
      sendMessage: "Send Message",
    },
    pt: {
      langbuttonMB: "EN",
      langbutton: "EN",
      langbuttonFT: "EN",
      "nav-home": "Início",
      "nav-about": "Sobre",
      "nav-service": "Serviço",
      "nav-project": "Projeto",
      "nav-resources": "Recursos",
      "nav-contact": "Contato",
      "cuross-heading-3":
        "Não Apenas Construímos Tecnologia – Construímos Confiança",
      "cuross-des-3":
        "Faça parceria com uma equipe que prioriza transparência, relacionamentos de longo prazo e resultados que você pode medir",
      "hero-heading":
        "Impulsionando Negócios com Soluções Digitais Inteligentes",
      "hero-text":
        "De software personalizado a segurança robusta, projetamos tecnologia que impulsiona eficiência, crescimento e vantagem competitiva.",
      "about-heading": "Sobre Nós",
      "cuross-heading-2": "Seguro, Escalável, Sem Costura – O Jeito Matisforce",
      "cuross-des-2":
        "Desenvolvimento ágil, gestão proativa de TI e segurança de nível empresarial—tudo adaptado às necessidades do seu negócio",
      "about-text": ` A Matisforce é um parceiro tecnológico confiável dedicado a ajudar empresas a inovar, proteger e escalar através de soluções digitais de ponta. Fundada com os princípios de excelência, agilidade e foco no cliente, combinamos profunda expertise técnica com uma paixão por resolver problemas para entregar software pronto para o futuro, infraestrutura robusta de TI e segurança cibernética inabalável.`,
      "services-heading": "Nossos Serviços",
      "service-1-title": "Desenvolvimento de Software",
      "service-1-text":
        "Criamos software escalável e de alto desempenho adaptado às suas necessidades exclusivas de negócios—de aplicativos web/móveis intuitivos a sistemas empresariais complexos, usando tecnologias de ponta como IA, nuvem e IoT.",
      "service-2-title": "Serviços de TI Gerenciados (MSP)",
      "service-2-text":
        "Nossa gestão proativa de TI 24/7 garante que sua infraestrutura funcione perfeitamente—oferecendo soluções em nuvem, segurança cibernética e suporte técnico para que você possa se concentrar no crescimento, não no tempo de inatividade.",
      "service-3-title": "Segurança Cibernética e na Nuvem",
      "service-3-text":
        "Proteja seu negócio com segurança de nível empresarial—detecção abrangente de ameaças, auditorias de conformidade e fortalecimento da nuvem para proteger seus dados e reputação.",
      "service-4-title": "Soluções Turn-Key",
      "service-4-text":
        "Do conceito à implantação, entregamos soluções tecnológicas completas—cuidando do desenvolvimento, integração e escalabilidade para que você possa lançar mais rápido e com mais inteligência.",
      "team-heading": "Membros da Equipe",
      "testimonial-heading": "Depoimentos",
      "testimonial-1-text":
        "A Matisforce construiu nossa plataforma SaaS de saúde do zero—entregando 3 semanas antes do prazo. Sua abordagem ágil e código limpo reduziram nossos custos de manutenção em 40%. Eles não são apenas fornecedores; são parceiros de longo prazo.",
      "testimonial-1-author": "Sarah K.",
      "testimonial-1-role": "CTO @ MedTech Solutions (Indústria de Saúde)",
      "testimonial-2-text":
        "Depois de lutar com constantes problemas de TI, a Matisforce assumiu nossa infraestrutura. Seu monitoramento 24/7 e atualizações proativas reduziram nosso tempo de inatividade a zero. Finalmente, podemos nos concentrar no crescimento, não em dores de cabeça tecnológicas.",
      "testimonial-2-author": "James L.",
      "testimonial-2-role": "COO @ RetailChain (Indústria de E-commerce)",
      "testimonial-3-text":
        "Um concorrente sofreu um ataque de ransomware, mas os testes de penetração preventivos da Matisforce nos salvaram. Sua equipe corrigiu vulnerabilidades que nem sabíamos que existiam. Vale cada centavo.",
      "testimonial-3-author": "Priya M.",
      "testimonial-3-role": "CISO @ Finova Bank (Serviços Financeiros)",
      "testimonial-4-text":
        "Do conceito ao lançamento, a Matisforce cuidou de tudo—UI/UX, desenvolvimento e até escalabilidade na AWS. Nosso MVP impressionou tanto os investidores que garantimos US$ 2 milhões em financiamento inicial. Eles são nossa arma secreta.",
      "testimonial-4-author": "Diego R.",
      "testimonial-4-role": "Fundador @ AgriTech StartUp (Tecnologia Agrícola)",
      "footer-quick-links": "Links Rápidos",
      "footer-about": "Sobre Nós",
      "footer-services": "Nossos Serviços",
      "footer-projects": "Nossos Projetos",
      "footer-testimonials": "Depoimentos",
      "footer-contact-heading": "Contate a Matisforce",
      "footer-contact-text": "Vamos Construir Algo Extraordinário Juntos",
      "footer-contact-button": "Entre em Contato",
      "footer-address": "Endereço",
      "footer-address-text": "Rua da verdelho 333, 4470-825 Maia",
      "footer-phone": "Telefone",
      "footer-phone-text": "+351 220968078",
      "footer-email": "Email",
      "footer-email-text": "info@matisforce.com",
      "copyright-text": ", Todos os Direitos Reservados.",
      "terms-of-use": "Condições de Uso",
      "code-of-conduct": "Código de Conduta",
      "complaints-channel": "Canal de Reclamações",
      readMore: "Leia Mais",
      Address: "Endereço",
      Designation: "Designação",
      "fact-1-title": "Entrega Pontual, Sempre",
      "fact-1-text":
        "Implantamos profissionais de alto nível e fluxos de trabalho ágeis para entregar seu projeto no prazo—independentemente do escopo ou complexidade.",
      "fact-2-title": "Sucesso do Cliente, Não Apenas Satisfação",
      "fact-2-text":
        "Construímos parcerias de longo prazo superando expectativas, com soluções adaptadas às necessidades em evolução do seu negócio.",
      "fact-3-title": "Soluções Preparadas para o Futuro",
      "fact-3-text":
        "Aproveitamos tecnologia de ponta e as melhores práticas do setor para garantir que você obtenha as ferramentas mais avançadas e escaláveis disponíveis.",
      "what-we-do-heading": "O Que Fazemos",
      "what-we-do-text":
        "Na Matisforce, capacitamos empreendedores e empresas a transformar ideias ousadas em soluções de software prontas para o mercado...",
      "what-we-do-item-1":
        "Acelera o tempo de lançamento no mercado com desenvolvimento ágil.",
      "what-we-do-item-2":
        "Melhora o engajamento do usuário por meio de design intuitivo.",
      "what-we-do-item-3":
        "Escala com segurança usando práticas nativas da nuvem e DevOps.",
      "what-we-do-item-4":
        "Resolve desafios complexos com integração de IA, IoT ou blockchain.",
      "who-we-are-heading": "Quem Somos",
      "who-we-are-text":
        "A Matisforce é um parceiro tecnológico confiável dedicado a ajudar empresas a inovar, proteger e escalar através de soluções digitais de ponta...",
      "our-mission-heading": "Nossa Missão",
      "our-mission-text":
        "Capacitar organizações de todos os tamanhos com tecnologia personalizada e de alto desempenho que impulsiona o crescimento, melhora a eficiência e mitiga riscos em um cenário digital em constante evolução.",
      "our-values-heading": "Nossos Valores",
      "our-values-item-1":
        "Inovação: Estamos à frente com as ferramentas e metodologias mais recentes.",
      "our-values-item-2":
        "Integridade: Transparência e ética estão no centro de todas as parcerias.",
      "our-values-item-3":
        "Impacto: Medimos o sucesso pelos resultados tangíveis que entregamos ao seu negócio.",
      "our-values-item-4":
        "Colaboração: Sua visão + nossa expertise = soluções imparáveis.",
      "footer-quick-links-heading": "Links Rápidos",
      "footer-about-link": "Sobre Nós",
      "footer-services-link": "Nossos Serviços",
      "footer-projects-link": "Nossos Projetos",
      "footer-testimonials-link": "Depoimentos",
      "footer-contact-heading": "Contate a Matisforce",
      "footer-contact-text": "Vamos Construir Algo Extraordinário Juntos",
      "footer-contact-button": "Entre em Contato",
      services_title: "Serviços",
      about_title: "Sobre Nós",
      contact_title: "Entre em Contato",
      contact: "Contato",
      sendMessage: "Enviar Mensagem",
    },
  };

  const currentLang = document.documentElement.lang === "en" ? "pt" : "en";
  document.documentElement.lang = currentLang;

  // Update all text elements
  for (const [id, text] of Object.entries(translations[currentLang])) {
    const element = document.getElementById(id);
    if (element) {
      element.innerText = text;
    }
  }

  // Update language button text
  const langButtons = document.querySelectorAll(".langbutton");
  langButtons.forEach((button) => {
    button.innerText = currentLang === "en" ? "🇵🇹" : "🇺🇸";
  });
}
