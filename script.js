document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    }

    // 2. Animação de Scroll (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
    });

    // 3. Gerador de Alunos com Redes Sociais
    const studentsGrid = document.getElementById('students-grid');
    const numberOfStudents = 24; // Quantidade de alunos

    // Lista de nomes fictícios para dar mais realismo (opcional)
    const firstNames = ["Gabriel", "Lucas", "Beatriz", "Sophia", "Mateus", "Enzo", "Lara", "Ana"];
    const lastNames = ["Silva", "Souza", "Oliveira", "Santos", "Lima", "Pereira", "Ferreira", "Costa"];

    if(studentsGrid) {
        for (let i = 1; i <= numberOfStudents; i++) {
            // Gera nome aleatório
            const randomName = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;

            const studentCard = document.createElement('div');
            // Adicionei 'p-4 bg-white rounded-xl shadow-sm border border-gray-100' para o card ter fundo
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