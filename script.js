document.addEventListener('DOMContentLoaded', () => {

    // 1. INTERSECTION OBSERVER (Para animações de entrada)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translate(0, 0)';
            }
        });
    }, { threshold: 0.1 });

    // Inicializa nos elementos que já existem
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // 2. DADOS DOS PROJETOS
    const projectsData = [
        {
            id: 'repensei',
            name: 'RePensei',
            logoUrl: 'logo/RePensei.png', 
            mascotUrl: 'mascote/RePensei.png',
            shortDesc: 'A sua plataforma de estudos!',
            longDesc: 'A Repensei é uma plataforma desenvolvida para estudantes querendo ter um desempenho melhor nas matérias de Filosofia e Sociologia para ajuda-los em vestibulares. O problema inicial foi por conta das notas destas matérias nos vestibulares e como estava decaindo as notas tanto nos vestibulares quanto nas escolas. Nosso projeto contém dois planos, gratuito que contém flashcards e quizzes pré-definidos, o premium contém flashcards, quizzes, historicos de atividades, resumos, correção, chat-bot com implementação de IA. O sistema contém com uma pagina de admin aonde ele verá o desempenho dos usúario cadastradas com um historico de atividades podendo ver todo o progresso.',
            projectLink: 'https://repensei.onrender.com/',
            youtubeLink: 'https://www.youtube.com/watch?v=GW9qj8n_Ga8',
            qrcodeUrl: 'qrcode/qrRepensei.png',
            team: [
                { name: 'Ana Paula', role: 'Scrum Master', photo: 'sala/ana paula.png' },
                { name: 'Luis Gustavo', role: 'Programador Front-End e Back-end', photo: 'sala/luisg.png' },
                { name: 'Pedro Henrique', role: 'Programador Back-end', photo: 'sala/pedroh.png' },
                { name: 'Thimotio', role: 'Tech Lead', photo: 'sala/thimotio.png' },
            ]
        },
        {
            id: 'redaction',
            name: 'Redaction',
            logoUrl: 'logo/Redaction.png',
            mascotUrl: 'mascote/Redaction.png',
            shortDesc: 'A tecnologia que transforma sua escrita em aprendizado!',
            longDesc: 'O REDACTION é um app criado para facilitar o treino de redações do ENEM de um jeito leve, intuitivo e completo. Ele combina miniaulas rápidas, jogos de fixação e uma jornada gamificada que mantém o aluno praticando, enquanto um sistema de IA faz correções alinhadas aos critérios oficiais. Com recursos acessíveis, repertórios prontos e orientações claras, o app ajuda o estudante a entender melhor o que o ENEM pede e a aprimorar sua escrita de forma contínua.',
            projectLink: 'https://redaction-senai.vercel.app',
            youtubeLink: '#',
            qrcodeUrl: 'qrcode/qrRedaction.png',
            team: [
                { name: 'Joaquim', role: 'Tech Lead e Programador Back-end', photo: 'sala/joaquim.png' },
                { name: 'Yasmim', role: 'Product Owner e Programadora Front-end', photo: 'sala/yasmim.png' },
                { name: 'Pedro Roel', role: 'Programador Back-end', photo: 'sala/pedror.png' },
                { name: 'Mariana', role: 'Scrum Master e Programadora Front-end', photo: 'sala/mariana.png' },
            ]
        },
        {
            id: 'pontovirgula',
            name: 'Ponto&Vírgula',
            logoUrl: 'logo/Ponto&Vírgula.png',
            mascotUrl: 'mascote/Ponto&Vírgula.png',
            shortDesc: 'A vírgula que faz a diferença!',
            longDesc: 'O Ponto&Vírgula é um sistema EduTech que utiliza avaliações diagnósticas inteligentes e geração de conteúdo por IA para oferecer trilhas de aprendizagem personalizadas em Língua Portuguesa e Matemática aos estudantes dos anos finais de cada etapa. A plataforma registra o aluno, aplica uma avaliação inicial e recomenda conteúdos de revisão ou avanço conforme o desempenho, apresentados em uma interface moderna desenvolvida em React, Tailwind e TypeScript, com backend em Flask e banco de dados MySQL. Além disso, o sistema dispõe de um painel para professores, atualizado em tempo real, permitindo acompanhar o progresso da turma e orientar intervenções pedagógicas mais precisas.',
            projectLink: 'https://pontoevirgula.vercel.app',
            youtubeLink: 'https://youtu.be/B-rJNl3w9Vc',
            qrcodeUrl: 'qrcode/qrPontoevirgula.png',
            team: [
                { name: 'Heitor Schutz', role: 'Tech Lead', photo: 'sala/heitor.png' },
                { name: 'Lígia Costa', role: 'Scrum Master', photo: 'sala/ligia.png' },
                { name: 'Paulo Henrique', role: 'Programador Front-end', photo: 'sala/paulo.png' },
                { name: 'Pedro Vitor', role: 'Programador Back-end', photo: 'sala/pedro.png' },
            ]
        },
        {
            id: 'ortofix',
            name: 'Ortofix',
            logoUrl: 'logo/ortofix.png',
            mascotUrl: 'mascote/ortofix.png',
            shortDesc: 'Aprenda com clareza e confiança: ortografia descomplicada para quem ensina e para quem aprende.',
            longDesc: 'O OrtoFix é uma edutech focada na Língua Portuguesa que auxilia os alunos do Ensino Médio a dominarem a ortografia, através de uma estrutura gamificada e interativa, em meio a uma era de gírias e abreviações. A plataforma utiliza Inteligência Artificial (IA) para oferecer suporte em tempo real e relatórios de progresso. Assim, os alunos maximizam a retenção e a eficácia do estudo, alcançando proficiência comunicativa para o sucesso acadêmico e profissional e os professores recebem resultados mais rápidos e significativos.',
            projectLink: 'https://ortofix-mvp.vercel.app/',
            youtubeLink: 'https://www.youtube.com/watch?v=_IkevGGjLIM&t=1s',
            qrcodeUrl: 'qrcode/qrOrtofix.png',
            team: [
                { name: 'Sarah', role: 'Scrum Master', photo: 'sala/sarah.png' },
                { name: 'Gabriel Alves', role: 'Tech Lead e Programador Back-end', photo: 'sala/alves.png' },
                { name: 'Pietro', role: 'Programador Back-end', photo: 'sala/pietro.png' },
                { name: 'Igor', role: 'Programador Front-end', photo: 'sala/igor.png' },
                { name: 'Vinicius', role: 'Programador Back-end e DBA', photo: 'sala/vinicius.png' },
            ]
        },
        {
            id: 'mathmagic',
            name: 'MathMagic',
            logoUrl: 'logo/mathmagic.png',
            mascotUrl: 'mascote/mathmagic.png',
            shortDesc: 'Transformando o aprendizado de Matemática em uma jornada mágica!',
            longDesc: 'O MathMagic é uma plataforma web full-stack gamificada, desenvolvida com o intuito de mitigar a desmotivação e as lacunas de aprendizado nas quatro operações matemáticas básicas (Adição, Subtração, Multiplicação e Divisão) no Ensino Fundamental. O problema central reside na dificuldade dos educadores em obter um diagnóstico imediato e preciso do desempenho individual e coletivo dos alunos para a intervenção pedagógica eficaz. O objetivo do projeto foi conceber e implementar uma solução digital moderna que transformasse a prática matemática em uma jornada lúdica e engajadora. O público-alvo é tripartite: Alunos (usuários finais), Professores (gestores de salas e conteúdo) e Administradores (gestores de trilhas globais).',
            projectLink: 'https://frontend-mathmagic.vercel.app/',
            youtubeLink: '#',
            qrcodeUrl: 'qrcode/qrMathmagic.png',
            team: [
                { name: 'Richard', role: 'Scrum Master e Programador Back-end', photo: 'sala/richard.png' },
                { name: 'Maria Julia', role: 'Tech Lead e Programadora Front-end', photo: 'sala/maju.png' },
                { name: 'João Pedro', role: 'Programador Front-End', photo: 'sala/joaop.png' },
                { name: 'Luis Felipe', role: 'Programador Back-end', photo: 'sala/luisf.png' },
            ]
        },
        {
            id: 'fewit',
            name: 'FEWIT',
            logoUrl: 'logo/fewit.png', 
            mascotUrl: 'mascote/fewit.png', 
            shortDesc: 'Desvende seus sentimentos!',
            longDesc: 'A Fewit é uma aplicação web criada para ajudar pessoas a compreender melhor seus próprios sentimentos. A plataforma identifica emoções por meio da interação com o usuário, explica de forma simples o que cada sentimento significa e, oferece orientações e recomendações apoiadas por IA para lidar com emoções negativas ou intensas. O objetivo é fornecer suporte emocional acessível, imediato e confiável, funcionando como um primeiro passo para o autoconhecimento e para o cuidado com a saúde mental. O público-alvo inclui jovens e adultos que desejam entender melhor suas emoções e desenvolver inteligência emocional no dia a dia.',
            projectLink: '#',
            youtubeLink: 'https://www.youtube.com/watch?v=lXoYfnCO6Gc',
            qrcodeUrl: 'qrcode/qrFewit.png',
            team: [
                { name: 'Antonio', role: 'Programador Back-end', photo: 'sala/antonio.jpg' },
                { name: 'Douglas', role: 'Scrum Master', photo: 'sala/douglas.png' },
                { name: 'Manoela', role: 'Programadora Front-end', photo: 'sala/manu.png' },
                { name: 'Matheus', role: 'Tech Lead', photo: 'sala/matheus.png' },
            ]
        },
        {
            id: 'gramaticxplorer',
            name: 'GramaticXplorer',
            logoUrl: 'logo/GramaticXplorer.png', 
            mascotUrl: 'mascote/GramaticXplorer.png', 
            shortDesc: 'Quando a educação inova!',
            longDesc: 'O GramaticXplorer é uma Edutech criada para transformar o aprendizado da Língua Portuguesa, focando em reverter o alto índice de reprovação em gramática e a falta de interesse juvenil. A plataforma simplifica conceitos complexos com uma abordagem gamificada e interativa. Assim, utilizando o poder da Inteligência Artificial (IA), a plataforma oferece um Chatbot 24h para tirar dúvidas instantaneamente e gera Relatórios de Desempenho Personalizados, Lições para a aprendizagem e Exercícios para fixação do conteúdo. Permitindo que o estudante aprenda no seu ritmo e maximize a eficácia do estudo. Nosso objetivo é democratizar o acesso ao ensino de qualidade, preparando jovens para o sucesso acadêmico e profissional com o domínio da comunicação.',
            projectLink: 'https://gramaticxplorer.vercel.app',
            youtubeLink: '#',
            qrcodeUrl: 'qrcode/qrGramatic.png',
            team: [
                { name: 'Gabriel Camargo', role: 'Tech Lead e Programador Back-end', photo: 'sala/camargo.png' },
                { name: 'Julia', role: 'Scrum Master', photo: 'sala/jr.png' },
                { name: 'Juliano', role: 'Programador Back-end', photo: 'sala/juliano.png' },
                { name: 'Maria Isabela', role: 'Product Owner e Programadora Front-end', photo: 'sala/isa.png' },
                { name: 'Nicolas', role: 'Programador Back-end', photo: 'sala/nicolas.png' },
            ]
        }
    ];
    
    // 3. GERAÇÃO DE CARDS DE PROJETOS (Tela Inicial)
    const projectsGrid = document.getElementById('projects-grid');

    if(projectsGrid) {
        projectsGrid.innerHTML = ''; // Limpa container
        
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-brand-purple/20 hover:-translate-y-2 transition-all duration-300 group reveal-up cursor-pointer open-modal-btn flex flex-col h-full';
            projectCard.setAttribute('data-project-id', project.id);
            
            projectCard.innerHTML = `
                <div class="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 p-2">
                    <img src="${project.mascotUrl}" alt="${project.name}" class="w-full h-full object-contain drop-shadow-sm">
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">${project.name}</h3>
                <p class="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">${project.shortDesc}</p>
                
                <div class="flex items-center text-brand-purple font-bold text-sm pt-4 border-t border-gray-50 mt-auto">
                    Ver detalhes <i class="ph ph-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
            observer.observe(projectCard);
        });
    }

    // 4. MENU MOBILE
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    }

    // 5. LÓGICA DO MODAL (Estrutura Nova)
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalContent = document.getElementById('modal-content');
    const teamMembersContainer = document.getElementById('modal-team-members');


    function openModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;

        // Preenche Textos
        document.getElementById('modal-description').textContent = project.longDesc;
        
        // Preenche Links
        document.getElementById('modal-project-link').href = project.projectLink;
        document.getElementById('modal-youtube-link').href = project.youtubeLink;
        
        // Preenche Imagens
        // ✅ CORRIGIDO: Usando 'modal-logo' que existe no HTML atual
        document.getElementById('modal-logo').src = project.logoUrl; 
        document.getElementById('modal-mascot').src = project.mascotUrl;
        
        // Preenche QR Code
        const qrContainer = document.getElementById('modal-qrcode');
        // REMOVIDO O 'p-2' para que a imagem ocupe 100% do container
        qrContainer.innerHTML = `<img src="${project.qrcodeUrl}" alt="QR Code" class="w-full h-full object-contain">`;

        // Preenche Equipe (Modificado para expandir a função/role)
        teamMembersContainer.innerHTML = '';
        project.team.forEach(member => {
            const memberCard = document.createElement('div');
            // Usando items-start para suportar múltiplos cargos em duas linhas (expansão do card)
            memberCard.className = 'flex items-start gap-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all';
            
            memberCard.innerHTML = `
                <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0 bg-gray-100">
                <img src="${member.photo}" alt="${member.name}" class="w-full h-full object-cover">
                </div>
                <div class="text-left">
                <h4 class="font-bold text-gray-900 text-sm leading-tight">${member.name}</h4>
                    <p class="text-xs text-brand-purple font-bold uppercase tracking-wide mt-0.5">${member.role}</p>
                </div>
            `;
            teamMembersContainer.appendChild(memberCard);
        });

        // Mostrar Modal
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Trava o scroll da página
        
        // Animação suave de entrada
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
            }, 10);
    }

    function closeProjectModal() {
        // Animação suave de saída
        modal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Destrava o scroll
        }, 300);
    }

    // Eventos de Clique
    document.addEventListener('click', (e) => {
        // Verifica se clicou em um botão de abrir modal (card ou botão "Ver mais")
        const btn = e.target.closest('.open-modal-btn');
        if (btn) {
            const projectId = btn.getAttribute('data-project-id');
            openModal(projectId);
        }
    });

    if(closeModalBtn) {
        closeModalBtn.addEventListener('click', closeProjectModal);
    }

    // Fechar clicando fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeProjectModal();
        }
    });
});
