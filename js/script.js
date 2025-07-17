document.addEventListener('DOMContentLoaded', function() { // Dados dos mistérios com áudios reais
    const misterios = {
        gozosos: [
           { title: "1 Mistério Gozoso", name: "Anunciação do Anjo a Maria", desc: "O anjo Gabriel anuncia a Maria que ela será a Mãe do Salvador (Lc 126).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Joyful-Mysteries.mp3#t=0" },
           { title: "2 Mistério Gozoso", name: "Visitação de Maria a Isabel", desc: "Maria visita sua prima Isabel, que reconhece a Mãe do Senhor (Lc 139).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Joyful-Mysteries.mp3#t=180" },
           { title: "3 Mistério Gozoso", name: "Nascimento de Jesus em Belém", desc: "Jesus nasce na pobreza e é colocado numa manjedoura (Lc2,1-20).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Joyful-Mysteries.mp3#t=360" },
           { title: "4 Mistério Gozoso", name: "Apresentação do Menino Jesus no Templo", desc: "Maria e José apresentam Jesus no Templo, onde Simeão profetiza (Lc 222).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Joyful-Mysteries.mp3#t=540" },
           { title: "5 Mistério Gozoso", name: "Encontro do Menino Jesus no Templo", desc: "Jesus é encontrado entre os doutores, após três dias de busca (Lc 241).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Joyful-Mysteries.mp3#t=7200" }
        ],
        dolorosos: [
           { title: "1º Mistério Doloroso", name: "Agonia de Jesus no Horto das Oliveiras", desc: "Jesus reza no Getsêmani e suporta a angústia da Paixão (Mt 2636).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Sorrowful-Mysteries.mp3#t=0" },
           { title: "2º Mistério Doloroso", name: "Flagelação de Jesus", desc: "Jesus é amarrado e cruelmente flagelado (Jo19).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Sorrowful-Mysteries.mp3#t=180" },
           { title: "3º Mistério Doloroso", name: "Coroação de Espinhos", desc: "Jesus é coroado de espinhos e escarnecido (Mt 2727).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Sorrowful-Mysteries.mp3#t=360" },
           { title: "4º Mistério Doloroso", name: "Jesus carrega a Cruz", desc: "Jesus carrega a cruz até o Calvário (Jo 19).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Sorrowful-Mysteries.mp3#t=540" },
           { title: "5º Mistério Doloroso", name: "Crucifixão e Morte de Jesus", desc: "Jesus é crucificado e morre por nossa salvação (Jo 1918).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Sorrowful-Mysteries.mp3#t=7200" }
        ],
        gloriosos: [
           { title: "1º Mistério Glorioso", name: "Ressurreição de Jesus", desc: "Jesus ressuscita glorioso no terceiro dia (Mc16).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Glorious-Mysteries.mp3#t=0" },
           { title: "2º Mistério Glorioso", name: "Ascensão de Jesus ao Céu", desc: "Jesus sobe ao Céu e senta-se à direita do Pai (At1,6-11).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Glorious-Mysteries.mp3#t=180" },
           { title: "3º Mistério Glorioso", name: "Descida do Espírito Santo", desc: "OEspírito Santo desce sobre Maria e os Apóstolos (At 2).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Glorious-Mysteries.mp3#t=360" },
           { title: "4º Mistério Glorioso", name: "Assunção de Maria ao Céu", desc: "Maria é elevada ao Céu de corpo e alma (Ap12).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Glorious-Mysteries.mp3#t=540" },
           { title: "5º Mistério Glorioso", name: "Coroação de Maria como Rainha do Céu e da Terra", desc: "Maria é coroada por Deus como Rainha do Universo (Ap12).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Glorious-Mysteries.mp3#t=7200" }
        ],
        luminosos: [
           { title: "1º Mistério Luminoso", name: "Batismo de Jesus no Jordão", desc: "Jesus é batizado por João e o Pai o revela como seu Filho (Mt 313).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Luminous-Mysteries.mp3#t=0" },
           { title: "2º Mistério Luminoso", name: "Auto-revelação nas Bodas de Caná", desc: "Jesus transforma água em vinho, a pedido de Maria (Jo2,1-12).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Luminous-Mysteries.mp3#t=180" },
           { title: "3º Mistério Luminoso", name: "Anúncio do Reino de Deus", desc: "Jesus anuncia o Reino e convida à conversão (Mc1).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Luminous-Mysteries.mp3#t=360" },
           { title: "4º Mistério Luminoso", name: "Transfiguração de Jesus", desc: "Jesus mostra sua glória no Monte Tabor (Lc 928).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Luminous-Mysteries.mp3#t=540" },
           { title: "5º Mistério Luminoso", name: "Instituição da Eucaristia", desc: "Jesus institui a Eucaristia na Última Ceia (Mt 2626).", audio: "https://media.blubrry.com/discerninghearts/www.discerninghearts.com/Devotionals/Rosary-Luminous-Mysteries.mp3#t=7200" }
        ]
    };

    // Mapeamento dos dias da semana para os mistérios
    const diasMisterios = {
      0: "gloriosos",  // Domingo
      1: "gozosos",    // Segunda
      2: "dolorosos",  // Terça
      3: "gloriosos",  // Quarta
      4: "luminosos",  // Quinta
      5: "dolorosos",  // Sexta
      6: "gozosos"     // Sábado
    };

    // Nomes dos dias da semana
    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    // Nomes dos mistérios para exibição
    const nomesMisterios = {
        gozosos: "Mistérios Gozosos",
        dolorosos: "Mistérios Dolorosos",
        gloriosos: "Mistérios Gloriosos",
        luminosos: "Mistérios Luminosos"
    };

    // Elementos do DOM
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const themeSwitcher = document.getElementById('theme-switcher');
    const progressBar = document.querySelector('.progress');
    const currentCount = document.getElementById('current-count');
    const resetProgress = document.getElementById('reset-progress');
    const currentDate = document.getElementById('current-date');
    const currentMisterioInfo = document.getElementById('current-misterio-info');
    const leiturasContainer = document.querySelector('.leituras-container');
    const credoButtons = document.querySelectorAll('.credo-btn');
    const credoContents = document.querySelectorAll('.credo-content');

    // Variáveis de estado
    let currentProgress = localStorage.getItem('tercoProgress') || 0;
    let currentTheme = localStorage.getItem('theme') || 'light';
    let currentAudio = null;

    // Inicialização
    const hoje = new Date();
    const diaSemana = hoje.getDay();
    const misterioDoDia = diasMisterios[diaSemana];
    
    initTabs(misterioDoDia);
    initCredo();
    updateProgressBar();
    setTheme(currentTheme);
    displayCurrentDate();
    displayMisterioInfo(diaSemana, misterioDoDia);
    fetchLeituras();

    // Event Listeners
    menuToggle.addEventListener('click', toggleMobileMenu);
    themeSwitcher.addEventListener('click', toggleTheme);
    resetProgress.addEventListener('click', resetTercoProgress);

    // Funções
    function initTabs(misterioPadrao) {
        // Ativa o mistério do dia
        tabButtons.forEach(button => {
            const misterio = button.getAttribute('data-misterio');
            
            if (misterio === misterioPadrao) {
                button.classList.add('active');
                document.getElementById(misterio).classList.add('active');
                fillMisterioContent(misterio);
            }
            
            button.addEventListener('click', () => {
                // Atualiza botões ativos
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Atualiza conteúdo ativo
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === misterio) {
                        content.classList.add('active');
                        // Preenche o conteúdo se estiver vazio
                        if (content.innerHTML.trim() === '') {
                            fillMisterioContent(misterio);
                        }
                    }
                });
            });
        });
    }

    function initCredo() {
        credoButtons.forEach(button => {
            button.addEventListener('click', () => {
                const credoType = button.getAttribute('data-credo');
                
                // Atualiza botões ativos
                credoButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Atualiza conteúdo ativo
                credoContents.forEach(content => {
                    content.style.display = 'none';
                    if (content.id === credoType) {
                        content.style.display = 'block';
                    }
                });
            });
        });
    }

    function displayMisterioInfo(diaSemana, misterio) {
        const diaNome = diasSemana[diaSemana];
        const misterioNome = nomesMisterios[misterio];
        currentMisterioInfo.textContent = `${diaNome} - ${misterioNome}`;
    }

    function fillMisterioContent(misterio) {
        const contentDiv = document.getElementById(misterio);
        contentDiv.innerHTML = '';
        
        misterios[misterio].forEach((item, index) => {
            const misterioItem = document.createElement('div');
            misterioItem.className = 'misterio-item';
            
            misterioItem.innerHTML = `
                <h3 class="misterio-title">${item.title}</h3>
                <h4 class="misterio-name">${item.name}</h4>
                <p class="misterio-desc">${item.desc}</p>
                <button class="audio-btn" data-audio="${item.audio}" data-misterio="${misterio}" data-index="${index}">
                    <i class="fas fa-play"></i> Ouvir meditação
                </button>
            `;
            
            contentDiv.appendChild(misterioItem);
            
            // Adiciona event listener para o botão de áudio
            const audioBtn = misterioItem.querySelector('.audio-btn');
            audioBtn.addEventListener('click', () => {
              playAudio(item.audio, misterio, index);
            });
        });
    }

    function playAudio(src, misterio, index) {
        // Para o áudio atual se estiver tocando
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            // Remove a classe playing de todos os botões
            document.querySelectorAll('.audio-btn').forEach(btn => {
                btn.classList.remove('playing');
                btn.innerHTML = `<i class="fas fa-play"></i> Ouvir meditação`;
            });
        }

        // Cria novo elemento de áudio
        currentAudio = new Audio();
        currentAudio.src = src;
        
        // Atualiza o botão atual
        const currentBtn = document.querySelector(`[data-misterio="${misterio}"][data-index="${index}"]`);
        currentBtn.classList.add('playing');
        currentBtn.innerHTML = `<i class="fas fa-pause"></i> Pausar`;

        // Event listeners para o áudio
        currentAudio.addEventListener('ended', () => {
            currentBtn.classList.remove('playing');
            currentBtn.innerHTML = `<i class="fas fa-play"></i> Ouvir meditação`;
            currentAudio = null;
        });

        currentAudio.addEventListener('error', () => {
            alert('Erro ao carregar o áudio. Verifique sua conexão com a internet.');
            currentBtn.classList.remove('playing');
            currentBtn.innerHTML = `<i class="fas fa-play"></i> Ouvir meditação`;
            currentAudio = null;
        });

        // Toggle play/pause
        if (currentAudio.paused) {
            currentAudio.play().catch(error => {
                console.error('Erro ao reproduzir áudio:', error);
                alert('Erro ao reproduzir o áudio. Verifique sua conexão com a internet.');
                currentBtn.classList.remove('playing');
                currentBtn.innerHTML = `<i class="fas fa-play"></i> Ouvir meditação`;
                currentAudio = null;
            });
        } else {
            currentAudio.pause();
            currentBtn.classList.remove('playing');
            currentBtn.innerHTML = `<i class="fas fa-play"></i> Ouvir meditação`;
        }
    }

    function stopAllAudio() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }
        document.querySelectorAll('.audio-btn').forEach(btn => {
            btn.classList.remove('playing');
            btn.innerHTML = `<i class="fas fa-play"></i> Ouvir meditação`;
        });
    }

    function toggleMobileMenu() {
        mobileNav.classList.toggle('active');
    }

    function toggleTheme() {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        currentTheme = newTheme;
        localStorage.setItem('theme', newTheme);
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = themeSwitcher.querySelector('i');
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    function incrementProgress() {
        currentProgress = Math.min(parseInt(currentProgress) + 1, 50);
        localStorage.setItem('tercoProgress', currentProgress);
        updateProgressBar();
    }

    function resetTercoProgress() {
        currentProgress = 0;
        localStorage.setItem('tercoProgress', currentProgress);
        updateProgressBar();
    }

    function updateProgressBar() {
        const percentage = (currentProgress / 50) * 100;
        progressBar.style.width = percentage + '%';
        currentCount.textContent = currentProgress;
    }

    function displayCurrentDate() {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        currentDate.textContent = hoje.toLocaleDateString('pt-BR', options);
    }

    async function fetchLeituras() {
        try {
            const response = await fetch('https://catolica-api.vercel.app/api/dia');
            if (!response.ok) {
                throw new Error('Erro na API');
            }
            const data = await response.json();
            displayLeituras(data);
        } catch (error) {
            console.error('Erro ao buscar leituras:', error);
            fetchLocalLeituras();
        }
    }

    function fetchLocalLeituras() { // Dados de exemplo caso a API falhe
        const leiturasExemplo = {
            primeiraLeitura: {
                titulo: "Primeira Leitura",
                referencia: "At 2,1-11",
                texto: "Naqueles dias, a palavra do Senhor foi dirigida a Natã nestes termos:Vaidizer ao meu servo Davi: Assim fala o Senhor: Quando chegar o fim dos teus dias e repousares com teus pais, então suscitarei, depois de ti, um descendente teu, e consolidarei a sua realeza. Ele construirá uma casa para o meu nome, e eu firmarei para sempre o trono da sua realeza. Eu serei para ele um pai, e ele será para mim um filho. A tua casa e a tua realeza permanecerão estáveis para sempre diante de mim, e o teu trono será firme para sempre."
            },
            salmo: {
                titulo: "Salmo Responsorial",
                referencia: "Sl 88(89)",
                texto: "R. Para sempre cantarei as graças do Senhor!\n\nPara sempre cantarei as graças do Senhor! De geração em geração anunciarei vossa fidelidade. Vós dissestes: 'A aliança é estabelecida para sempre!' E vossa fidelidade é firmada no céu.\n\nR. 'Encontrei meu servo Davi e com óleo santo o consagrei. Minha mão sempre estará com ele e meu braço o tornará forte.'\n\nR. Minha fidelidade e graça estarão com ele, e pelo meu nome crescerá o seu poder. Ele me invocará: Vós sois meu Pai, meu Deus e rocha da minha salvação!"
            },
            evangelho: {
                titulo: "Evangelho",
                referencia: "Mt 12,46-50",
                texto: "Enquanto Jesus falava às multidões, sua mãe e seus irmãos ficaram fora, querendo falar com ele.\n\nDisseram-lhe: 'Tua mãe e teus irmãos estão aí fora e querem falar contigo.\n\nEle respondeu:Quem é minha mãe e quem são meus irmãos?'\n\nEstendendo a mão para os discípulos, disse: 'Eis minha mãe e meus irmãos.\n\nPois todo aquele que faz a vontade do meu Pai, que está nos céus, esse é meu irmão, minha irmã e minha mãe.'"
            }
        };
        displayLeituras(leiturasExemplo);
    }

    function displayLeituras(data) {
        leiturasContainer.innerHTML = '';
        
        const leituras = [
            data.primeiraLeitura,
            data.salmo,
            data.evangelho
        ];

        leituras.forEach(leitura => {
            if (leitura) {
                const leituraCard = document.createElement('div');
                leituraCard.className = 'leitura-card';
                leituraCard.innerHTML = `
                    <h3 class="leitura-title">${leitura.titulo}</h3>
                    <p class="leitura-ref">${leitura.referencia}</p>
                    <p style="white-space: pre-line;">${leitura.texto}</p>
                `;
                leiturasContainer.appendChild(leituraCard);
            }
        });
    }

    // Adiciona event listener para incrementar progresso ao clicar nos mistérios
    document.addEventListener('click', function(e) {
        if (e.target.closest('.misterio-item')) {
            incrementProgress();
        }
    });

    // Para todos os áudios quando mudar de aba
    tabButtons.forEach(button => {
        button.addEventListener('click', stopAllAudio);
    });
}); 