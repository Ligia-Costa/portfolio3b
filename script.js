document.addEventListener('DOMContentLoaded', () => {

    // 0. DEFINIÇÃO CENTRAL: Intersection Observer (DEVE VIR PRIMEIRO)
    // Este observer precisa ser definido no topo para que outras partes do código o utilizem.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ativa a animação para elementos que entram na tela
                entry.target.classList.add('active');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translate(0, 0)';
            }
        });
    }, { threshold: 0.1 });

    // Inicializa a observação nos elementos HTML já existentes
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
        el.style.opacity = '0'; // Garante o estado inicial invisível
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    const projectsData = [
    {
        id: 'repensei',
        name: 'RePensei',
        iconClass: 'ph-robot', // Ícone para o card principal
        logoUrl: 'assets/logos/repensei.png', // Caminho da logo
        mascotUrl: 'assets/mascotes/mascote_repensei.png', // Caminho do mascote
        shortDesc: 'Plataforma de inteligência artificial para revisão personalizada de conteúdo do ENEM.',
        longDesc: 'Plataforma inovadora que utiliza Inteligência Artificial para gerar trilhas de aprendizado personalizadas, ajudando estudantes do ensino médio a revisarem conteúdos específicos de forma engajadora e focada, minimizando lacunas de conhecimento.',
        projectLink: 'https://repensei.com.br',
        youtubeLink: 'https://youtube.com/watch?v=repensei_pitch',
        qrcodeUrl: 'assets/qrcodes/repensei_qr.png', // QR Code estático (alternativa para geração)
        team: [
            { name: 'Ana Souza', role: 'Scrum Master', photo: 'assets/team/ana.jpg' },
            { name: 'Carlos Lima', role: 'Front-End', photo: 'assets/team/carlos.jpg' },
            { name: 'Bia Santos', role: 'Back-End', photo: 'assets/team/bia.jpg' },
        ]
    },
    {
        id: 'redaction',
        name: 'Redaction',
        iconClass: 'ph-pen-nib',
        logoUrl: 'assets/logos/redaction.png',
        mascotUrl: 'assets/mascotes/mascote_redaction.png',
        shortDesc: 'Ferramenta de aprimoramento textual e correção automática focada em redações para o ENEM.',
        longDesc: 'O Redaction é uma ferramenta de correção e aprimoramento textual baseada em processamento de linguagem natural (NLP), focada em redações para o ENEM. Oferece feedback instantâneo sobre gramática, coesão e argumentação.',
        projectLink: 'https://redaction.app',
        youtubeLink: 'https://youtube.com/watch?v=redaction_pitch',
        qrcodeUrl: 'assets/qrcodes/redaction_qr.png',
        team: [
            { name: 'João Silva', role: 'Tech-Leader', photo: 'assets/team/joao.jpg' },
            { name: 'Paula Oliveira', role: 'UX/UI Designer', photo: 'assets/team/paula.jpg' },
            { name: 'Ricardo Costa', role: 'DevOps', photo: 'assets/team/ricardo.jpg' },
        ]
    },
    {
        id: 'pontovirgula',
        name: 'Ponto&Vírgula',
        iconClass: 'ph-books',
        logoUrl: 'assets/logos/pontovirgula.png',
        mascotUrl: 'assets/mascotes/mascote_pontovirgula.png',
        shortDesc: 'Plataforma de troca de experiências e mentoria entre veteranos e calouros universitários.',
        longDesc: 'Conecta estudantes do ensino médio a veteranos universitários, oferecendo sessões de mentoria e troca de experiências para auxiliar na escolha profissional e na adaptação à vida acadêmica.',
        projectLink: 'https://pontovirgula.com',
        youtubeLink: 'https://youtube.com/watch?v=pontovirgula_pitch',
        qrcodeUrl: 'assets/qrcodes/pontovirgula_qr.png',
        team: [
            { name: 'Heitor Schutz', role: 'TechLead', photo: 'sala/heitor.jpg' },
            { name: 'Lígia Costa', role: 'Scrum Master', photo: 'sala/ligia.jpg' },
            { name: 'Paulo Henrique', role: 'Programador Front-end', photo: 'sala/paulo.jpg' },
            { name: 'Pedro Vitor', role: 'Programador Back-end', photo: 'sala/pedro.jfif' },
        ]
    },
    {
        id: 'ortofix',
        name: 'Ortofix',
        iconClass: 'ph-brain',
        logoUrl: 'assets/logos/ortofix.png',
        mascotUrl: 'assets/mascotes/mascote_ortofix.png',
        shortDesc: 'Aplicação gamificada que foca na correção de dislexia e disortografia em jovens e adolescentes.',
        longDesc: 'Um aplicativo terapêutico e educativo que utiliza jogos e exercícios interativos baseados em neurociência para auxiliar jovens e adolescentes no tratamento e correção de dificuldades de leitura e escrita (dislexia e disortografia).',
        projectLink: 'https://ortofix.app',
        youtubeLink: 'https://youtube.com/watch?v=ortofix_pitch',
        qrcodeUrl: 'assets/qrcodes/ortofix_qr.png',
        team: [
            { name: 'Pedro Alvez', role: 'Tech-Leader', photo: 'assets/team/pedro.jpg' },
            { name: 'Camila Gomes', role: 'UX Researcher', photo: 'assets/team/camila.jpg' },
            { name: 'Lucas Reis', role: 'Back-End', photo: 'assets/team/lucas.jpg' },
        ]
    },
    {
        id: 'mathmagic',
        name: 'MathMagic',
        iconClass: 'ph-cube',
        logoUrl: 'assets/logos/mathmagic.png',
        mascotUrl: 'assets/mascotes/mascote_mathmagic.png',
        shortDesc: 'Gerador inteligente de problemas matemáticos personalizados, com foco em raciocínio lógico.',
        longDesc: 'Utiliza IA para criar problemas matemáticos contextualizados e desafiadores, adaptados ao nível de dificuldade do usuário, focando em melhorar o raciocínio lógico e a preparação para olimpíadas de matemática.',
        projectLink: 'https://mathmagic.tech',
        youtubeLink: 'https://youtube.com/watch?v=mathmagic_pitch',
        qrcodeUrl: 'assets/qrcodes/mathmagic_qr.png',
        team: [
            { name: 'Gustavo Paiva', role: 'Scrum Master', photo: 'assets/team/gustavo.jpg' },
            { name: 'Isabela Rocha', role: 'Fullstack Dev', photo: 'assets/team/isabela.jpg' },
            { name: 'Thiago Farias', role: 'Front-End', photo: 'assets/team/thiago.jpg' },
        ]
    },
    {
        id: 'terapia',
        name: 'TerapIA',
        iconClass: 'ph-heart',
        logoUrl: 'assets/logos/terapia.png',
        mascotUrl: 'assets/mascotes/mascote_terapia.png',
        shortDesc: 'Assistente virtual de saúde mental que oferece suporte inicial e ferramentas de autoajuda.',
        longDesc: 'Um chatbot inteligente que usa processamento de linguagem natural para fornecer escuta ativa e exercícios de autoajuda baseados em Terapia Cognitivo-Comportamental (TCC), servindo como suporte inicial para jovens com ansiedade e estresse.',
        projectLink: 'https://terapia.chat',
        youtubeLink: 'https://youtube.com/watch?v=terapia_pitch',
        qrcodeUrl: 'assets/qrcodes/terapia_qr.png',
        team: [
            { name: 'Carla Nunes', role: 'Product Owner', photo: 'assets/team/carla.jpg' },
            { name: 'Diego Costa', role: 'AI Specialist', photo: 'assets/team/diego.jpg' },
            { name: 'Ellen Vaz', role: 'UX Designer', photo: 'assets/team/ellen.jpg' },
        ]
    },
    {
        id: 'gramaticexplorer',
        name: 'GramaticExplorer',
        iconClass: 'ph-map-trifold',
        logoUrl: 'assets/logos/gramaticexplorer.png',
        mascotUrl: 'assets/mascotes/mascote_gramaticexplorer.png',
        shortDesc: 'Jogo interativo de RPG focado em ensinar regras gramaticais e ortografia do português.',
        longDesc: 'Transforma o aprendizado de gramática em uma aventura de RPG, onde os estudantes progridem em fases ao resolverem desafios linguísticos. Aumenta o engajamento e facilita a memorização de regras complexas do português.',
        projectLink: 'https://gramaticexplorer.game',
        youtubeLink: 'https://youtube.com/watch?v=gramaticexplorer_pitch',
        qrcodeUrl: 'assets/qrcodes/gramaticexplorer_qr.png',
        team: [
            { name: 'Felipe Soares', role: 'Game Designer', photo: 'assets/team/felipe.jpg' },
            { name: 'Giovanna Lee', role: 'Fullstack Dev', photo: 'assets/team/giovanna.jpg' },
            { name: 'Henrique Mota', role: 'DevOps', photo: 'assets/team/henrique.jpg' },
        ]
    },
    ];
    
    // 2. GERAÇÃO DE CARDS DE PROJETOS (Funciona agora que 'observer' está definido)
    const projectsGrid = document.getElementById('projects-grid');

    if(projectsGrid) {
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            // ... classes e atributos ...
            projectCard.className = 'bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-brand-purple/30 hover:-translate-y-1 transition-all group reveal-up';
            projectCard.setAttribute('data-project-id', project.id);
            
            // Cores personalizadas
            const brandColor = project.id === 'repensei' ? 'text-brand-purple bg-brand-light' : 
                                project.id === 'redaction' ? 'text-blue-600 bg-blue-50' : 
                                'text-green-600 bg-green-50';

            projectCard.innerHTML = `
                <div class="w-14 h-14 ${brandColor} rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    <i class="ph ${project.iconClass}"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">${project.name}</h3>
                <p class="text-gray-500 text-sm mb-4">${project.shortDesc}</p>
                <button class="open-modal-btn text-brand-purple font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" data-project-id="${project.id}">
                    Ver mais <i class="ph ph-arrow-right"></i>
                </button>
            `;
            projectsGrid.appendChild(projectCard);
            observer.observe(projectCard); // AQUI funciona
        });
    }

    // 3. MENU MOBILE
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    }

    // 4. LÓGICA DA MODAL
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const teamMembersContainer = document.getElementById('modal-team-members');

    // Função para preencher a modal com dados
    function openModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);

        if (!project) return;

        // Preenche os dados do projeto
        document.getElementById('modal-logo').src = project.logoUrl;
        document.getElementById('modal-title').textContent = project.name;
        document.getElementById('modal-description').textContent = project.longDesc;
        
        // Links
        document.getElementById('modal-project-link').href = project.projectLink;
        document.getElementById('modal-youtube-link').href = project.youtubeLink;
        
        // QR Code e Mascote
        document.getElementById('modal-qrcode').innerHTML = `<img src="${project.qrcodeUrl}" alt="QR Code ${project.name}" class="w-full h-full object-contain">`;
        document.getElementById('modal-mascot').src = project.mascotUrl;

        // Preenche os membros da equipe
        teamMembersContainer.innerHTML = '';
        project.team.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'flex items-center gap-4 bg-white p-3 rounded-lg border border-gray-100 transition-shadow hover:shadow-md';
            memberCard.innerHTML = `
                <div class="w-12 h-12 rounded-full overflow-hidden border border-brand-light">
                    <img src="${member.photo}" alt="${member.name}" class="w-full h-full object-cover">
                </div>
                <div>
                    <h4 class="font-semibold text-gray-900 text-sm">${member.name}</h4>
                    <p class="text-xs text-brand-purple font-mono">${member.role}</p>
                </div>
            `;
            teamMembersContainer.appendChild(memberCard);
        });

        // Mostra a modal com transição
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.add('opacity-100');
            document.getElementById('modal-content').classList.remove('scale-95', 'opacity-0');
            document.getElementById('modal-content').classList.add('scale-100', 'opacity-100');
        }, 10);
    }

    // Evento para abrir a modal ao clicar em "Ver mais"
    document.addEventListener('click', (e) => {
        if (e.target.closest('.open-modal-btn')) {
            const button = e.target.closest('.open-modal-btn');
            const projectId = button.getAttribute('data-project-id');
            openModal(projectId);
        }
    });

    // Função para fechar a modal
    function closeProjectModal() {
        modal.classList.add('hidden');
        modal.classList.remove('opacity-100');
        document.getElementById('modal-content').classList.remove('scale-100', 'opacity-100');
        document.getElementById('modal-content').classList.add('scale-95', 'opacity-0');
    }

    // Evento para fechar a modal
    closeModalBtn.addEventListener('click', closeProjectModal);

    // Fechar modal clicando fora do conteúdo
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // 5. Gerador de Alunos com Redes Sociais
    const studentsGrid = document.getElementById('students-grid');
    const numberOfStudents = 24;
    const firstNames = ["Gabriel", "Lucas", "Beatriz", "Sophia", "Mateus", "Enzo", "Lara", "Ana"];
    const lastNames = ["Silva", "Souza", "Oliveira", "Santos", "Lima", "Pereira", "Ferreira", "Costa"];

    if(studentsGrid) {
        for (let i = 1; i <= numberOfStudents; i++) {
            const randomName = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;

            const studentCard = document.createElement('div');
            studentCard.className = 'flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-purple transition-all group reveal-up';
            
            studentCard.innerHTML = `
                <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-light group-hover:border-brand-purple transition-all mb-3">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Student${i}&backgroundColor=e6e6e6" alt="${randomName}" class="w-full h-full object-cover">
                </div>
                
                <h4 class="font-bold text-gray-800 text-sm text-center">${randomName}</h4>
                <p class="text-xs text-brand-purple font-mono mb-3">Dev Fullstack</p>
                
                <div class="flex gap-3 mt-auto pt-3 border-t border-gray-50 w-full justify-center">
                    <a href="#" class="text-gray-400 hover:text-[#0077b5] transition-colors"><i class="ph ph-linkedin-logo text-lg"></i></a>
                    <a href="#" class="text-gray-400 hover:text-black transition-colors"><i class="ph ph-github-logo text-lg"></i></a>
                    <a href="#" class="text-gray-400 hover:text-[#E1306C] transition-colors"><i class="ph ph-instagram-logo text-lg"></i></a>
                </div>
            `;
            studentsGrid.appendChild(studentCard);
            observer.observe(studentCard);
        }
    }
});
