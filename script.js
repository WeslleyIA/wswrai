/**
 * WSWR - Soluções em Inteligência Artificial & Posicionamento Digital
 * Interactive Logic: WhatsApp Cloud API Anti-No-Show Simulator & Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Fechar ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. Simulador Oficial WhatsApp Cloud API (Confirmação Ativa & Anti-No-Show)
  const chatMessagesContainer = document.getElementById('demoChatMessages');
  const typingIndicator = document.getElementById('waTypingIndicator');
  const chatBody = document.getElementById('waChatBody');
  const waStatusText = document.getElementById('waStatusText');
  const demoChatInput = document.getElementById('demoChatInput');
  const demoSendBtn = document.getElementById('demoSendBtn');
  const resetDemoBtn = document.getElementById('resetDemoBtn');

  let isTyping = false;
  let conversationState = 'initial';

  function getFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  function scrollChatToBottom() {
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
  }

  // Renderiza a Mensagem Inicial de Confirmação Ativa (Anti-No-Show)
  function initConfirmationDemo() {
    if (!chatMessagesContainer) return;
    conversationState = 'initial';
    isTyping = false;
    if (waStatusText) waStatusText.textContent = 'Conta Comercial Oficial • API WhatsApp Meta';
    if (typingIndicator) typingIndicator.style.display = 'none';

    const time = getFormattedTime();

    chatMessagesContainer.innerHTML = `
      <div class="wa-msg-row wa-msg-out animate-fade-in">
        <div class="wa-bubble wa-bubble-bot wa-bubble-interactive">
          <div class="bot-badge-pill">
            <svg viewBox="0 0 20 20" fill="currentColor" width="11" height="11"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>
            <span>IA WSWR • API Oficial Meta</span>
          </div>
          <p class="wa-text">
            Olá, <strong>Mariana</strong>! Passando para confirmar sua consulta com o <strong>Dr. Carlos</strong> amanhã às <strong>14h30</strong> na Clínica WSWR.<br><br>
            Para garantir sua vaga ou liberar a fila para outro paciente, escolha uma opção abaixo:
          </p>
          <div class="wa-meta">
            <span class="wa-time">${time}</span>
          </div>

          <!-- Botões Interativos Oficiais da API do WhatsApp -->
          <div class="wa-reply-buttons">
            <button class="wa-reply-btn" data-action="confirmar">
              <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              <span>Confirmar Presença</span>
            </button>
            <button class="wa-reply-btn wa-reply-btn-reschedule" data-action="reagendar">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>Reagendar Horário</span>
            </button>
            <button class="wa-reply-btn wa-reply-btn-cancel" data-action="cancelar">
              <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
              <span>Não Poderei Comparecer</span>
            </button>
          </div>
        </div>
      </div>
    `;

    bindInteractiveButtons();
    scrollChatToBottom();
  }

  // Desativa os botões anteriores para evitar cliques múltiplos
  function disablePreviousButtons() {
    const buttons = chatMessagesContainer.querySelectorAll('.wa-reply-btn');
    buttons.forEach(btn => {
      btn.disabled = true;
      btn.style.opacity = '0.55';
      btn.style.pointerEvents = 'none';
    });
  }

  // Manipulador de Ações do Chatbot com Lógica Anti-No-Show
  function handleChatAction(action, userText) {
    if (isTyping) return;
    isTyping = true;
    disablePreviousButtons();

    const userTime = getFormattedTime();

    // 1. Mensagem enviada pelo paciente
    const userMsgRow = document.createElement('div');
    userMsgRow.className = 'wa-msg-row wa-msg-in animate-fade-in';
    userMsgRow.innerHTML = `
      <div class="wa-bubble wa-bubble-user">
        <p class="wa-text">${escapeHtml(userText)}</p>
        <div class="wa-meta">
          <span class="wa-time">${userTime}</span>
          <span class="wa-ticks">✓✓</span>
        </div>
      </div>
    `;
    chatMessagesContainer.appendChild(userMsgRow);
    scrollChatToBottom();

    // 2. Indicador visual de digitando da API Oficial
    if (waStatusText) waStatusText.textContent = 'digitando...';
    if (typingIndicator) typingIndicator.style.display = 'flex';
    scrollChatToBottom();

    // 3. Processamento e resposta contextual da IA
    setTimeout(() => {
      if (typingIndicator) typingIndicator.style.display = 'none';
      if (waStatusText) waStatusText.textContent = 'online agora • API WhatsApp Meta';

      const botTime = getFormattedTime();
      const botMsgRow = document.createElement('div');
      botMsgRow.className = 'wa-msg-row wa-msg-out animate-fade-in';

      if (action === 'confirmar') {
        conversationState = 'confirmed';
        botMsgRow.innerHTML = `
          <div class="wa-bubble wa-bubble-bot highlight-confirmation">
            <div class="bot-badge-pill">
              <svg viewBox="0 0 20 20" fill="currentColor" width="11" height="11"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>
              <span>IA WSWR • Presença Confirmada</span>
            </div>
            <p class="wa-text">
              <strong>Presença confirmada com sucesso, Mariana!</strong><br><br>
              Seu horário está 100% garantido com o <strong>Dr. Carlos</strong> amanhã às <strong>14h30</strong>.<br><br>
              <strong>Localização:</strong> Região Central de Mogi Mirim (estacionamento conveniado no local).<br><br>
              Te aguardamos amanhã. Tenha um excelente dia!
            </p>
            <div class="wa-meta">
              <span class="wa-time">${botTime}</span>
            </div>
          </div>
        `;
        chatMessagesContainer.appendChild(botMsgRow);
        appendConversationEndCard('Atendimento concluído • Presença confirmada no sistema da clínica');

      } else if (action === 'reagendar') {
        conversationState = 'rescheduling';
        botMsgRow.innerHTML = `
          <div class="wa-bubble wa-bubble-bot wa-bubble-interactive">
            <div class="bot-badge-pill">
              <svg viewBox="0 0 20 20" fill="currentColor" width="11" height="11"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>
              <span>IA WSWR • Reagendamento</span>
            </div>
            <p class="wa-text">
              Sem problemas, Mariana! Já liberamos seu horário de amanhã para a fila de espera.<br><br>
              Localizamos estas <strong>3 opções disponíveis</strong> com o Dr. Carlos nesta semana. Toque no horário que preferir:
            </p>
            <div class="wa-meta">
              <span class="wa-time">${botTime}</span>
            </div>

            <!-- Botões Oficiais com Horários Disponíveis -->
            <div class="wa-reply-buttons">
              <button class="wa-reply-btn" data-action="slot_quinta">
                <span>Quinta-feira às 10h00</span>
              </button>
              <button class="wa-reply-btn" data-action="slot_sexta">
                <span>Sexta-feira às 15h30</span>
              </button>
              <button class="wa-reply-btn" data-action="slot_sabado">
                <span>Sábado às 09h00</span>
              </button>
            </div>
          </div>
        `;
        chatMessagesContainer.appendChild(botMsgRow);
        bindInteractiveButtons();

      } else if (action.startsWith('slot_')) {
        conversationState = 'rescheduled';
        let slotName = 'Quinta-feira às 10h00';
        if (action === 'slot_sexta') slotName = 'Sexta-feira às 15h30';
        if (action === 'slot_sabado') slotName = 'Sábado às 09h00';

        botMsgRow.innerHTML = `
          <div class="wa-bubble wa-bubble-bot highlight-confirmation">
            <div class="bot-badge-pill">
              <svg viewBox="0 0 20 20" fill="currentColor" width="11" height="11"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>
              <span>IA WSWR • Novo Horário Marcado</span>
            </div>
            <p class="wa-text">
              <strong>Consulta reagendada com sucesso!</strong><br><br>
              Seu novo horário com o <strong>Dr. Carlos</strong> é <strong>${slotName}</strong>.<br><br>
              Enviaremos um novo lembrete automático 24 horas antes pela API Oficial. Muito obrigado e até breve!
            </p>
            <div class="wa-meta">
              <span class="wa-time">${botTime}</span>
            </div>
          </div>
        `;
        chatMessagesContainer.appendChild(botMsgRow);
        appendConversationEndCard('Atendimento concluído • Consulta reagendada sem fila');

      } else if (action === 'cancelar') {
        conversationState = 'cancelled';
        botMsgRow.innerHTML = `
          <div class="wa-bubble wa-bubble-bot">
            <div class="bot-badge-pill">
              <svg viewBox="0 0 20 20" fill="currentColor" width="11" height="11"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>
              <span>IA WSWR • Horário Liberado</span>
            </div>
            <p class="wa-text">
              Agradecemos pelo aviso, Mariana. Seu horário de amanhã foi cancelado e a vaga já foi disponibilizada automaticamente para quem estava na fila de espera.<br><br>
              Quando desejar marcar uma nova consulta, basta me enviar um "Olá" por aqui a qualquer momento. Tenha uma ótima semana!
            </p>
            <div class="wa-meta">
              <span class="wa-time">${botTime}</span>
            </div>
          </div>
        `;
        chatMessagesContainer.appendChild(botMsgRow);
        appendConversationEndCard('Atendimento concluído • Vaga liberada no sistema');

      } else {
        // Resposta livre caso o usuário digite algo fora do fluxo padrão
        botMsgRow.innerHTML = `
          <div class="wa-bubble wa-bubble-bot">
            <div class="bot-badge-pill">
              <svg viewBox="0 0 20 20" fill="currentColor" width="11" height="11"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>
              <span>IA WSWR • API Oficial</span>
            </div>
            <p class="wa-text">
              Olá! Como sou a assistente da API Oficial da clínica, você pode clicar nos botões acima para <strong>Confirmar Presença</strong> ou <strong>Reagendar Horário</strong> de forma 100% automática.
            </p>
            <div class="wa-meta">
              <span class="wa-time">${botTime}</span>
            </div>
          </div>
        `;
        chatMessagesContainer.appendChild(botMsgRow);
      }

      scrollChatToBottom();
      isTyping = false;
    }, 950);
  }

  // Card de Encerramento Amigável
  function appendConversationEndCard(statusText) {
    const endCard = document.createElement('div');
    endCard.className = 'wa-convo-ended-card animate-fade-in';
    endCard.innerHTML = `
      <div class="convo-status">
        <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
        <span>${statusText}</span>
      </div>
      <button class="wa-convo-restart-btn" id="convoRestartBtn">
        Reiniciar Demonstração
      </button>
    `;
    chatMessagesContainer.appendChild(endCard);

    const restartBtn = endCard.querySelector('#convoRestartBtn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        initConfirmationDemo();
      });
    }
  }

  // Associa os cliques aos botões interativos
  function bindInteractiveButtons() {
    const buttons = chatMessagesContainer.querySelectorAll('.wa-reply-btn:not([disabled])');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        const text = btn.querySelector('span') ? btn.querySelector('span').textContent.trim() : btn.textContent.trim();
        handleChatAction(action, text);
      });
    });
  }

  // Tratamento de Envio por Input de Texto
  function handleUserMessageSend() {
    if (!demoChatInput || isTyping) return;
    const message = demoChatInput.value.trim();
    if (!message) return;

    demoChatInput.value = '';
    const lower = message.toLowerCase();

    if (lower.includes('confirm') || lower.includes('vou') || lower.includes('sim') || lower.includes('estarei') || lower.includes('pode')) {
      handleChatAction('confirmar', message);
    } else if (lower.includes('reagend') || lower.includes('outro') || lower.includes('troc') || lower.includes('mudar') || lower.includes('horario') || lower.includes('horário')) {
      handleChatAction('reagendar', message);
    } else if (lower.includes('cancel') || lower.includes('nao') || lower.includes('não') || lower.includes('posso')) {
      handleChatAction('cancelar', message);
    } else {
      handleChatAction('geral', message);
    }
  }

  if (demoSendBtn) {
    demoSendBtn.addEventListener('click', handleUserMessageSend);
  }

  if (demoChatInput) {
    demoChatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleUserMessageSend();
      }
    });
  }

  if (resetDemoBtn) {
    resetDemoBtn.addEventListener('click', () => {
      initConfirmationDemo();
    });
  }

  // Inicia a demonstração com lembrete ativo
  if (chatMessagesContainer) {
    initConfirmationDemo();
  }

  // 3. Efeito de Scroll no Navbar
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.6)';
      navbar.style.background = 'rgba(7, 11, 18, 0.95)';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.background = 'rgba(7, 11, 18, 0.85)';
    }
  });

  // 4. Smooth scroll com compensação de offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 5. Rastreamento de Conversões e Eventos GA4 (Cliques no WhatsApp)
  function trackWhatsAppConversion(buttonLocation, extraData = {}) {
    const eventData = {
      event_category: 'Engajamento WhatsApp',
      event_label: buttonLocation,
      button_location: buttonLocation,
      destination_url: 'https://wa.me/5519998480403',
      value: 1.0,
      currency: 'BRL',
      ...extraData
    };

    // Google Analytics 4 (gtag.js)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', eventData);
      window.gtag('event', 'generate_lead', eventData);
    }

    // Google Tag Manager / dataLayer
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'whatsapp_conversion',
        ...eventData
      });
    }

    // Log informativo em ambiente de teste
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('[WSWR Analytics] WhatsApp Conversion Tracked:', buttonLocation, eventData);
    }
  }

  // Mapeamento específico dos principais pontos de conversão
  const waConversionElements = [
    { selector: '#floatingWhatsapp', location: 'Botao_Flutuante' },
    { selector: '#navCtaBtn', location: 'Navbar_CTA' },
    { selector: '#heroMainCta', location: 'Hero_Principal' },
    { selector: '.announcement-link', location: 'Barra_Avisos_Topo' },
    { selector: '.footer-link-highlight', location: 'Rodape_Telefone' }
  ];

  waConversionElements.forEach(({ selector, location }) => {
    const el = document.querySelector(selector);
    if (el) {
      el.addEventListener('click', () => {
        trackWhatsAppConversion(location);
      });
    }
  });

  // Rastreia automaticamente qualquer link que aponte para o WhatsApp (wa.me)
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', function () {
      const parentSection = this.closest('section')?.id || (this.closest('footer') ? 'Rodape' : 'Link_Geral');
      trackWhatsAppConversion(`WhatsApp_${parentSection}`);
    });
  });
});

