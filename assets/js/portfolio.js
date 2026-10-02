(() => {
  const content = document.querySelector('.content');
  const english = document.documentElement.lang === 'en';
  const suffix = english ? '-en' : '';
  const base = new URL('.', document.querySelector('script[src$="portfolio.js"]').src).pathname.replace(/assets\/js\/$/, '');
  const menu = document.querySelector('.menu-toggle');
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    document.querySelector('nav').classList.toggle('open', open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { document.querySelector('nav').classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
  });
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!/^(https?:|mailto:|#)/.test(href)) link.setAttribute('href', href.replace(/\.md(?=$|#)/, '.html'));
  });
  if (document.body.classList.contains('home')) {
    const actions = document.createElement('div'); actions.className = 'hero-actions';
    [[`projects${suffix}.html`, english ? 'Explore projects' : 'Découvrir les projets', 'button'], [`cv${suffix}.html`, english ? 'View my CV' : 'Consulter mon CV', 'button secondary']].forEach(([href,label,cls]) => {
      const link = document.createElement('a'); link.href = base + href; link.className = cls; link.textContent = label + ' ↗'; actions.append(link);
    });
    const intro = Array.from(content.children).find(node => node.tagName === 'HR');
    if (intro) intro.before(actions);
    const headings = Array.from(content.querySelectorAll(':scope > h3'));
    if (headings.length) {
      const grid = document.createElement('div'); grid.className = 'skills-grid'; headings[0].before(grid);
      headings.forEach((heading,index) => {
        const card = document.createElement('section'); card.className = 'skill-card';
        const number = document.createElement('span'); number.className = 'skill-number'; number.textContent = `0${index+1} /`;
        card.append(number); let next = heading.nextElementSibling; card.append(heading);
        while (next && !['H2','H3','HR'].includes(next.tagName)) { const following = next.nextElementSibling; card.append(next); next = following; }
        grid.append(card);
      });
    }
  }
  if (document.body.classList.contains('listing')) {
    const images = {'pcb-design':'PCB/clab-pcb.png','ball-levitation':'Ball_levitation_structure.drawio.png','dali-lighting':'DALI-PCB_3D.png','ball-and-beam':'Ball_and_beam_structure.drawio.png','can-bus':'CAN_structure.drawio.png'};
    const headings = Array.from(content.querySelectorAll(':scope > h2'));
    const grid = document.createElement('div'); grid.className = 'project-grid'; content.prepend(grid);
    headings.forEach(heading => {
      const card = document.createElement('section'); card.className = 'project-card';
      const body = document.createElement('div'); body.className = 'project-body'; let next = heading.nextElementSibling; body.append(heading);
      while (next && next.tagName !== 'H2') { const following = next.nextElementSibling; body.append(next); next = following; }
      const link = body.querySelector('a[href*="project-"]');
      const key = Object.keys(images).find(key => link && link.getAttribute('href').includes(key));
      if (key) { const image = document.createElement('img'); image.src = base + 'assets/images/' + images[key]; image.alt = heading.textContent.replace(/^🔹\s*/, ''); image.className = 'project-image'; image.loading = 'lazy'; card.append(image); }
      card.append(body); grid.append(card);
    });
  }
})();
