document.addEventListener('DOMContentLoaded', () => {
  const whatsappUrl = 'https://wa.me/message/YGVRGLCAVJLBL1';
  const localPhotos = {
    joaquinaDunes: 'https://images.pexels.com/photos/15202791/pexels-photo-15202791.jpeg?auto=compress&cs=tinysrgb&w=1200',
    campecheBeach: 'https://images.pexels.com/photos/15202803/pexels-photo-15202803.jpeg?auto=compress&cs=tinysrgb&w=1200',
    moleBeach: 'https://images.pexels.com/photos/155313/pexels-photo-155313.jpeg?auto=compress&cs=tinysrgb&w=1200',
    galheta: 'https://images.pexels.com/photos/155246/pexels-photo-155246.jpeg?auto=compress&cs=tinysrgb&w=1200',
    lagoinha: 'https://images.pexels.com/photos/11781862/pexels-photo-11781862.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bridge: 'https://images.pexels.com/photos/6676186/pexels-photo-6676186.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bridgeSunrise: 'https://images.pexels.com/photos/5260392/pexels-photo-5260392.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bridgeNight: 'https://images.pexels.com/photos/7899731/pexels-photo-7899731.jpeg?auto=compress&cs=tinysrgb&w=1200',
    lagoa: 'https://images.pexels.com/photos/13424578/pexels-photo-13424578.jpeg?auto=compress&cs=tinysrgb&w=1200',
    barraDaLagoa: 'https://images.pexels.com/photos/155226/pexels-photo-155226.jpeg?auto=compress&cs=tinysrgb&w=1200',
    northBay: 'https://images.pexels.com/photos/15641806/pexels-photo-15641806.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cityCoast: 'https://images.pexels.com/photos/7730287/pexels-photo-7730287.jpeg?auto=compress&cs=tinysrgb&w=1200',
    skyline: 'https://images.pexels.com/photos/9499940/pexels-photo-9499940.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cathedral: 'https://images.pexels.com/photos/6104719/pexels-photo-6104719.jpeg?auto=compress&cs=tinysrgb&w=1200',
    historicDoor: 'https://images.pexels.com/photos/40397516/pexels-photo-40397516.jpeg?auto=compress&cs=tinysrgb&w=1200',
    oldFacade: 'https://images.pexels.com/photos/7949641/pexels-photo-7949641.jpeg?auto=compress&cs=tinysrgb&w=1200',
    harbor: 'https://images.pexels.com/photos/40080683/pexels-photo-40080683.jpeg?auto=compress&cs=tinysrgb&w=1200',
    coastCliff: 'https://images.pexels.com/photos/8159243/pexels-photo-8159243.jpeg?auto=compress&cs=tinysrgb&w=1200',
    costao: 'https://images.pexels.com/photos/15853594/pexels-photo-15853594.jpeg?auto=compress&cs=tinysrgb&w=1200',
    coastAerial: 'https://images.pexels.com/photos/18167437/pexels-photo-18167437.jpeg?auto=compress&cs=tinysrgb&w=1200',
    praiaMoleCrowd: 'https://images.pexels.com/photos/38062574/pexels-photo-38062574.jpeg?auto=compress&cs=tinysrgb&w=1200',
    campecheIslandView: 'https://images.pexels.com/photos/12271368/pexels-photo-12271368.jpeg?auto=compress&cs=tinysrgb&w=1200',
    campecheAerial: 'https://images.pexels.com/photos/15263658/pexels-photo-15263658.jpeg?auto=compress&cs=tinysrgb&w=1200',
    campecheSunset: 'https://images.pexels.com/photos/18076598/pexels-photo-18076598.jpeg?auto=compress&cs=tinysrgb&w=1200',
    campecheCityView: 'https://images.pexels.com/photos/36369686/pexels-photo-36369686.jpeg?auto=compress&cs=tinysrgb&w=1200',
    surfing: 'https://images.pexels.com/photos/35062218/pexels-photo-35062218.jpeg?auto=compress&cs=tinysrgb&w=1200',
    campecheWalk: 'https://images.pexels.com/photos/16126915/pexels-photo-16126915.jpeg?auto=compress&cs=tinysrgb&w=1200',
    coastalAerial: 'https://images.pexels.com/photos/12092865/pexels-photo-12092865.jpeg?auto=compress&cs=tinysrgb&w=1200',
    barraBeach: 'https://images.pexels.com/photos/15263661/pexels-photo-15263661.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rockyShore: 'https://images.pexels.com/photos/18167437/pexels-photo-18167437.jpeg?auto=compress&cs=tinysrgb&w=1200',
    moleCrowd: 'https://images.pexels.com/photos/38062574/pexels-photo-38062574.jpeg?auto=compress&cs=tinysrgb&w=1200',
    campecheCanal: 'https://images.pexels.com/photos/38569537/pexels-photo-38569537.jpeg?auto=compress&cs=tinysrgb&w=1200',
    boatsCoast: 'https://images.pexels.com/photos/36370259/pexels-photo-36370259.jpeg?auto=compress&cs=tinysrgb&w=1200',
    barraSurf: 'https://images.pexels.com/photos/155226/pexels-photo-155226.jpeg?auto=compress&cs=tinysrgb&w=1200',
    lagoonBoats: 'https://images.pexels.com/photos/40080683/pexels-photo-40080683.jpeg?auto=compress&cs=tinysrgb&w=1200',
    coastLagoa: 'https://images.pexels.com/photos/34054819/pexels-photo-34054819.jpeg?auto=compress&cs=tinysrgb&w=1200',
    centroAerial: 'https://images.pexels.com/photos/7730289/pexels-photo-7730289.jpeg?auto=compress&cs=tinysrgb&w=1200',
    centroStreets: 'https://images.pexels.com/photos/12441271/pexels-photo-12441271.jpeg?auto=compress&cs=tinysrgb&w=1200',
    skylineSunset: 'https://images.pexels.com/photos/155244/pexels-photo-155244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bridgeDusk: 'https://images.pexels.com/photos/12271533/pexels-photo-12271533.jpeg?auto=compress&cs=tinysrgb&w=1200',
    churchSquare: 'https://images.pexels.com/photos/10162463/pexels-photo-10162463.jpeg?auto=compress&cs=tinysrgb&w=1200',
    historicArchitecture: 'https://images.pexels.com/photos/40397516/pexels-photo-40397516.jpeg?auto=compress&cs=tinysrgb&w=1200',
    oldBuilding: 'https://images.pexels.com/photos/7949641/pexels-photo-7949641.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bridgeOther: 'https://images.pexels.com/photos/16962775/pexels-photo-16962775.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bridgeBoat: 'https://images.pexels.com/photos/16962777/pexels-photo-16962777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bridgeHarbor: 'https://images.pexels.com/photos/16962778/pexels-photo-16962778.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cityNight: 'https://images.pexels.com/photos/7899725/pexels-photo-7899725.jpeg?auto=compress&cs=tinysrgb&w=1200',
    northCity: 'https://images.pexels.com/photos/9499940/pexels-photo-9499940.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cityArchitecture: 'https://images.pexels.com/photos/7730285/pexels-photo-7730285.jpeg?auto=compress&cs=tinysrgb&w=1200',
    northRoads: 'https://images.pexels.com/photos/6999938/pexels-photo-6999938.jpeg?auto=compress&cs=tinysrgb&w=1200',
    southIsland: 'https://images.pexels.com/photos/15278521/pexels-photo-15278521.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cityWaterfront: 'https://images.pexels.com/photos/30038781/pexels-photo-30038781.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sunriseBridge: 'https://images.pexels.com/photos/5260392/pexels-photo-5260392.jpeg?auto=compress&cs=tinysrgb&w=1200',
    beachRide: 'https://images.pexels.com/photos/15263659/pexels-photo-15263659.jpeg?auto=compress&cs=tinysrgb&w=1200',
    lagoonCoast: 'https://images.pexels.com/photos/34054819/pexels-photo-34054819.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tropicalCoast: 'https://images.pexels.com/photos/34054820/pexels-photo-34054820.jpeg?auto=compress&cs=tinysrgb&w=1200',
    florianopolisBeach: 'https://images.pexels.com/photos/13698305/pexels-photo-13698305.jpeg?auto=compress&cs=tinysrgb&w=1200',
    islandBeach: 'https://images.pexels.com/photos/32852627/pexels-photo-32852627.jpeg?auto=compress&cs=tinysrgb&w=1200',
  };

  const projects = {
    'd-verse': {
      name: 'D/Verse Beach Concept', location: 'Praia Brava · Norte da ilha', rooms: '2 a 4 suítes', size: '102 a 471 m²', parking: 'Consulte unidades', price: 'Consulte valores oficiais', status: 'Lançamento · entrega prevista 2027', neighborhood: 'praia-brava norte', developer: 'Dimas Construções', source: 'https://www.dimasconstrucoes.com.br/dverse/',
      photos: [
        ['https://www.dimasconstrucoes.com.br/dverse/assets/images/facade.jpg', 'D/Verse · fachada do empreendimento'],
        ['https://www.dimasconstrucoes.com.br/dverse/assets/images/gallery-1/1-rooftop.jpg', 'D/Verse · rooftop'],
        ['https://www.dimasconstrucoes.com.br/dverse/assets/images/gallery-3/rooftop-piscina.jpg', 'D/Verse · piscina do rooftop'],
        ['https://www.dimasconstrucoes.com.br/dverse/assets/images/gallery-3/terreo-coworking.jpg', 'D/Verse · coworking'],
        ['https://www.dimasconstrucoes.com.br/dverse/assets/images/gallery-3/rooftop-espaco-gourmet.jpg', 'D/Verse · espaço gourmet'],
      ],
    },
    'd-sense': {
      name: 'D/Sense Home Design', location: 'Centro · Florianópolis', rooms: '3 e 4 suítes', size: '175 a 215 m²', parking: 'Consulte unidades', price: 'Consulte valores oficiais', status: 'Lançamento · entrega prevista 2027', neighborhood: 'centro', developer: 'Dimas Construções', source: 'https://www.dimasconstrucoes.com.br/dsense/',
      photos: [
        ['https://www.dimasconstrucoes.com.br/dsense/_next/static/media/fachada.e4e38ace.jpg', 'D/Sense · fachada do empreendimento'],
        ['https://www.dimasconstrucoes.com.br/dsense/_next/static/media/fachada-2.8e98fb98.jpg', 'D/Sense · arquitetura do projeto'],
        ['https://www.dimasconstrucoes.com.br/dsense/_next/static/media/apartamento-amplo.786b5fd5.jpg', 'D/Sense · apartamento amplo'],
      ],
    },
    'd-season': {
      name: 'D/Season Residence Club', location: 'João Paulo · Norte da ilha', rooms: '2 a 4 suítes', size: '188 a 432 m²', parking: 'Consulte unidades', price: 'Consulte valores oficiais', status: 'Lançamento · entrega prevista 2029', neighborhood: 'joao-paulo norte', developer: 'Dimas Construções', source: 'https://www.dimasconstrucoes.com.br/dseason/',
      photos: [
        ['https://www.dimasconstrucoes.com.br/dseason/assets/images/home-hero.jpg', 'D/Season · imagem de apresentação oficial'],
        ['https://www.dimasconstrucoes.com.br/dseason/assets/images/home-project-intro.jpg', 'D/Season · projeto arquitetônico'],
        ['https://www.dimasconstrucoes.com.br/dseason/assets/images/home-full-image-1.jpg', 'D/Season · imagem oficial do empreendimento'],
        ['https://www.dimasconstrucoes.com.br/dseason/assets/images/home-location.jpg?v=1', 'D/Season · localização no João Paulo'],
        ['https://www.dimasconstrucoes.com.br/dseason/assets/images/home-feature-1.jpg', 'D/Season · vista-mar do projeto'],
      ],
    },
    'la-mare-campeche': {
      name: 'La Mare Campeche', location: 'Campeche · Sul da ilha', rooms: '2 a 5 suítes', size: '108 a 362 m²', parking: '2 a 4 vagas', price: 'Consulte valores oficiais', status: 'Pré-lançamento · entrega prevista 2028', neighborhood: 'campeche sul', developer: 'CFL Incorporadora', source: 'https://www.cfl.com.br/en/empreendimentos/la-mare-campeche',
      photos: [
        ['https://admin.cfl.com.br/app/uploads/2025/11/imagem-destaque-min-1024x1024.png', 'La Mare Campeche · imagem oficial do projeto'],
        ['https://admin.cfl.com.br/app/uploads/2025/11/%C2%A9BLACKHAUS_CFL_CAM_PISCINA_01.png', 'La Mare Campeche · piscina e lazer'],
        ['https://admin.cfl.com.br/app/uploads/2025/11/Terreno-1-1024x576.png', 'La Mare Campeche · terreno do projeto'],
        ['https://admin.cfl.com.br/app/uploads/2025/11/%C2%A9BLACKHAUS_CFL_CAM_AEREA-768x1024.png', 'La Mare Campeche · vista aérea do projeto'],
        ['https://admin.cfl.com.br/app/uploads/2025/11/%C2%A9BLACKHAUS_CFL_CAM_FACHADA_ATIVA_01-1024x576.png', 'La Mare Campeche · fachada ativa'],
      ],
    },
    'oceana-jurere': {
      name: 'Oceana by Arquitectonica', location: 'Jurerê · Norte da ilha', rooms: '3 e 4 suítes', size: '182 a 976 m²', parking: '2 a 4 vagas', price: 'Consulte valores oficiais', status: 'Em construção · entrega prevista 2027', neighborhood: 'jurere norte', developer: 'CFL Incorporadora', source: 'https://www.cfl.com.br/en/empreendimentos/oceana-by-arquitectonica',
      photos: [
        ['https://admin.cfl.com.br/app/uploads/2024/09/%C2%A9BLACKHAUS_CFL_JPH_FACHADA_01-1-1024x576.png', 'Oceana · fachada do empreendimento'],
        ['https://admin.cfl.com.br/app/uploads/2024/09/%C2%A9BLACKHAUS_CFL_JPH_PISCINA_02-768x1024.png', 'Oceana · piscina e lazer'],
        ['https://admin.cfl.com.br/app/uploads/2024/09/%C2%A9BLACKHAUS_CFL_JPH_DETALHE_01-768x1024.png', 'Oceana · detalhe arquitetônico'],
        ['https://admin.cfl.com.br/app/uploads/2024/09/%C2%A9BLACKHAUS_CFL_JPH_PISCINA_TERMICA_02-768x1024.png', 'Oceana · piscina térmica'],
        ['https://admin.cfl.com.br/app/uploads/2024/09/%C2%A9BLACKHAUS_CFL_JPH_PISCINA_TERMICA_01-1024x576.png', 'Oceana · área de piscina interna'],
      ],
    },
    'terraco-cacupe': {
      name: 'Terraço Cacupé', location: 'Cacupé · Norte da ilha', rooms: '3 a 6 suítes', size: '326 a 589 m²', parking: '2 a 4 vagas', price: 'Consulte valores oficiais', status: 'Em construção · entrega prevista 2028', neighborhood: 'cacupe norte', developer: 'CFL Incorporadora', source: 'https://www.cfl.com.br/en/empreendimentos/terraco-cacupe',
      photos: [
        ['https://admin.cfl.com.br/app/uploads/2026/07/%C2%A9Nex-Cena-005_Aerea-1024x576.jpg', 'Terraço Cacupé · vista aérea oficial'],
        ['https://admin.cfl.com.br/app/uploads/2026/07/%C2%A9Nex-Cena-004_Edificio-de-Lazer-1-1024x576.jpg', 'Terraço Cacupé · edifício de lazer'],
        ['https://admin.cfl.com.br/app/uploads/2026/07/%C2%A9Nex-Cena-008_Piscina-Externa-1024x1024.jpg', 'Terraço Cacupé · piscina externa'],
        ['https://admin.cfl.com.br/app/uploads/2026/07/%C2%A9Nex-Cena-009_Piscina-Externa-1024x576.jpg', 'Terraço Cacupé · piscina e deck'],
        ['https://admin.cfl.com.br/app/uploads/2026/07/%C2%A9Nex-Cena-015_Deck-piscina-1-1024x576.jpg', 'Terraço Cacupé · deck com piscina'],
      ],
    },
  };

  const projectCard = (slug, project) => `
    <article class="property-card" data-neighborhood="${project.neighborhood}">
      <a href="${window.location.pathname.includes('/pages/') ? 'empreendimento.html' : 'pages/empreendimento.html'}?imovel=${slug}" aria-label="Conheça ${project.name}">
        <div class="property-image-wrap"><img class="property-image" src="${project.photos[0][0]}" alt="${project.photos[0][1]}" loading="lazy"><span class="property-status">${project.status.split(' · ')[0]}</span><span class="property-image-caption">Imagem oficial · ${project.developer}</span></div>
        <div class="property-details"><p class="property-location">${project.location}</p><h3>${project.name}</h3><div class="property-meta"><span>${project.rooms}</span><span>${project.size}</span><span>${project.parking}</span></div><div class="property-footer"><span class="property-price">${project.price}</span><span class="text-link" aria-hidden="true">Ver projeto</span></div></div>
      </a>
    </article>`;

  document.querySelectorAll('[data-project-grid]').forEach((grid) => {
    const featured = grid.dataset.projectGrid === 'featured';
    const entries = Object.entries(projects);
    grid.innerHTML = (featured ? entries.slice(0, 3) : entries).map(([slug, project]) => projectCard(slug, project)).join('');
  });

  const propertyDetail = document.querySelector('[data-property-detail]');
  if (propertyDetail) {
    const slug = new URLSearchParams(window.location.search).get('imovel');
    const project = projects[slug] || projects['d-verse'];
    document.title = `${project.name} | Kozy Floripa`;
    const gallery = propertyDetail.querySelector('[data-property-gallery]');
    propertyDetail.querySelector('[data-project-name]').textContent = project.name;
    propertyDetail.querySelector('[data-project-location]').textContent = project.location;
    propertyDetail.querySelector('[data-project-specs]').textContent = `${project.status} · ${project.rooms} · ${project.size} · ${project.parking}`;
    propertyDetail.querySelector('[data-project-price]').textContent = project.price;
    gallery.innerHTML = project.photos.map(([src, caption]) => `
      <figure class="property-gallery-item">
        <img src="${src}" alt="${caption}" loading="lazy">
        <figcaption>${caption} · <a href="${project.source}" target="_blank" rel="noopener noreferrer">Fonte oficial: ${project.developer}</a></figcaption>
      </figure>`).join('');
    const inquiry = propertyDetail.querySelector('[data-project-whatsapp]');
    inquiry.href = `${whatsappUrl}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${project.name}.`)}`;
  }

  const photoSetsByPage = {
    'editorial.html': [
      [localPhotos.cityCoast, 'Panorama da Beira-Mar Norte em Florianópolis'],
      [localPhotos.campecheBeach, 'Praia do Campeche e Ilha do Campeche ao fundo'],
      [localPhotos.lagoa, 'Lagoa da Conceição ao entardecer'],
      [localPhotos.cathedral, 'Catedral Metropolitana no Centro de Florianópolis'],
      [localPhotos.bridge, 'Ponte Hercílio Luz sobre a baía'],
      [localPhotos.historicArchitecture, 'Arquitetura histórica no Centro de Florianópolis'],
    ],
    'guia-florianopolis.html': [
      [localPhotos.northBay, 'Baía Norte e skyline de Florianópolis'], [localPhotos.joaquinaDunes, 'Dunas da Joaquina'], [localPhotos.lagoa, 'Lagoa da Conceição'], [localPhotos.bridge, 'Ponte Hercílio Luz'],
    ],
    'guia-campeche.html': [
      [localPhotos.campecheIslandView, 'Litoral e Ilha do Campeche'], [localPhotos.campecheBeach, 'Praia do Campeche'], [localPhotos.joaquinaDunes, 'Dunas da Joaquina, ao norte do Campeche'], [localPhotos.lagoinha, 'Lagoinha do Leste, no sul da ilha'],
    ],
    'guia-lagoa.html': [
      [localPhotos.lagoa, 'Lagoa da Conceição ao entardecer'], [localPhotos.barraSurf, 'Barra da Lagoa e morros verdes'], [localPhotos.campecheCanal, 'Canal costeiro em Florianópolis'], [localPhotos.barraBeach, 'Praia na região leste da ilha'],
    ],
    'guia-centro-norte.html': [
      [localPhotos.cathedral, 'Catedral Metropolitana de Florianópolis'], [localPhotos.bridge, 'Ponte Hercílio Luz'], [localPhotos.northBay, 'Baía Norte vista do alto'], [localPhotos.oldBuilding, 'Fachada histórica no Centro'],
    ],
    'guia-custos.html': [
      [localPhotos.cityCoast, 'Vista urbana da Beira-Mar Norte'], [localPhotos.northCity, 'Edifícios e baía em Florianópolis'], [localPhotos.cathedral, 'Centro histórico de Florianópolis'], [localPhotos.bridgeDusk, 'Ponte Hercílio Luz no fim do dia'],
    ],
    'guia-planta.html': [
      [localPhotos.campecheAerial, 'Vista aérea da costa sul da ilha'], [localPhotos.campecheWalk, 'Praia e caminhada no Campeche'], [localPhotos.northBay, 'Baía Norte e centro urbano'], [localPhotos.skylineSunset, 'Skyline de Florianópolis ao entardecer'],
    ],
  };
  const pageName = window.location.pathname.split('/').pop();
  const pagePhotos = photoSetsByPage[pageName];
  if (pagePhotos) {
    const photoElements = pageName === 'editorial.html'
      ? [...document.querySelectorAll('.editorial-image')]
      : [...document.querySelectorAll('.article-gallery img')];
    photoElements.forEach((image, index) => {
      const photo = pagePhotos[index];
      if (!photo) return;
      [image.src, image.alt] = photo;
    });
  }

  document.querySelectorAll('a.button[href*="contato.html"]').forEach((link) => {
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  const menuButton = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.site-nav');

  document.querySelectorAll('.property-card .property-image-wrap').forEach((wrapper) => {
    if (wrapper.querySelector('.property-image-caption')) return;
    const label = document.createElement('span');
    label.className = 'property-image-caption';
    label.textContent = 'Paisagem da região';
    wrapper.append(label);
  });

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
      menu.classList.toggle('is-open', !isOpen);
    });

    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menu');
        menu.classList.remove('is-open');
      }
    });
  }

  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const propertyCards = [...document.querySelectorAll('[data-neighborhood]')];
  const listingCount = document.querySelector('.listing-count');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      let visibleCount = 0;

      filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      propertyCards.forEach((card) => {
        const isVisible = filter === 'todos' || card.dataset.neighborhood.split(' ').includes(filter);
        card.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });

      if (listingCount) {
        listingCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'imóvel selecionado' : 'imóveis selecionados'}`;
      }
    });
  });

  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    const status = document.querySelector('#form-status');
    const params = new URLSearchParams(window.location.search);
    const requestedProperty = params.get('imovel');
    const messageField = contactForm.elements.namedItem('mensagem');
    const subjectField = contactForm.elements.namedItem('interesse');

    if (requestedProperty && messageField && subjectField) {
      subjectField.value = 'Informações sobre lançamento';
      messageField.value = `Olá! Gostaria de receber informações sobre ${requestedProperty}.`;
    }

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const formData = new FormData(contactForm);
      const subject = `Contato pelo site Kozy Floripa: ${formData.get('interesse')}`;
      const body = [
        `Nome: ${formData.get('nome')}`,
        `E-mail: ${formData.get('email')}`,
        `Telefone: ${formData.get('telefone') || 'Não informado'}`,
        '',
        `Mensagem: ${formData.get('mensagem')}`,
      ].join('\n');

      if (status) status.textContent = 'Abrindo seu aplicativo de e-mail para revisar e enviar a mensagem.';
      window.location.href = `mailto:oi@kozyfloripa.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  const articleEnd = document.querySelector('.article-end');
  if (articleEnd && !sessionStorage.getItem(`kozy-guide-offer:${window.location.pathname}`)) {
    const pageEnd = document.createElement('span');
    pageEnd.className = 'page-end-marker';
    pageEnd.setAttribute('aria-hidden', 'true');
    document.body.append(pageEnd);

    const modal = document.createElement('div');
    modal.className = 'reading-modal';
    modal.hidden = true;
    modal.innerHTML = `
      <div class="reading-modal-backdrop" data-modal-close></div>
      <section class="reading-modal-panel" role="dialog" aria-modal="true" aria-labelledby="reading-modal-title" aria-describedby="reading-modal-copy">
        <button class="reading-modal-close" type="button" aria-label="Fechar oferta" data-modal-close>&times;</button>
        <span class="eyebrow">Material Kozy</span>
        <h2 id="reading-modal-title">Quer receber o guia de valorização?</h2>
        <p id="reading-modal-copy">Peça pelo WhatsApp nosso relatório sobre bairros de Florianópolis e os fatores que vale acompanhar antes de comprar.</p>
        <a class="button button--primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Solicitar guia pelo WhatsApp <span aria-hidden="true">→</span></a>
      </section>`;
    document.body.append(modal);

    const closeButton = modal.querySelector('.reading-modal-close');
    const closeModal = () => {
      modal.hidden = true;
      document.body.classList.remove('modal-open');
      sessionStorage.setItem(`kozy-guide-offer:${window.location.pathname}`, 'dismissed');
    };

    modal.querySelectorAll('[data-modal-close]').forEach((element) => element.addEventListener('click', closeModal));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !modal.hidden) closeModal();
    });

    const showModal = () => {
      if (!modal.hidden) return;
      modal.hidden = false;
      document.body.classList.add('modal-open');
      closeButton.focus();
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          showModal();
          observer.disconnect();
        }
      }, { threshold: 0.1 });
      observer.observe(pageEnd);
    } else {
      window.addEventListener('scroll', () => {
        const reachedEnd = pageEnd.getBoundingClientRect().top <= window.innerHeight;
        if (reachedEnd) showModal();
      }, { once: true, passive: true });
    }
  }
});