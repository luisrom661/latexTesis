// ==========================================
// CONSTANTS
// ==========================================

const STATUS = {
    TODO: 'TODO',
    IN_PROGRESS: 'IN_PROGRESS',
    DONE: 'DONE',
    ACTIVE: 'ACTIVE',
    RESOLVED: 'RESOLVED'
};

const NOTIFICATION_TYPES = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info'
};

const NOTIFICATION_DURATION = 3000;

// ==========================================
// STATE MANAGEMENT
// ==========================================

const appState = {
    productBacklog: {
        technical: [
            {
                id: 'TECH-001',
                titulo: 'Como usuario, quiero pagar con tarjeta',
                valor: 9,
                sp: 13,
                priority: 1,
                estado: 'TODO'
            },
            {
                id: 'TECH-002',
                titulo: 'Como admin, quiero ver reportes de ventas',
                valor: 7,
                sp: 8,
                priority: 3,
                estado: 'TODO'
            }
        ],
        social: [
            {
                id: 'SOCIAL-001',
                titulo: '[SOCIAL] Mediación conflicto Dev A - Dev B',
                valor_social: 'Restaurar Respeto',
                sps: 5,
                priority: 2,
                estado: 'DONE',
                smell: 'Conflicto',
                impact: 'Mejorar Respeto de 4 a 6',
                guide: 'Social Guide'
            },
            {
                id: 'SOCIAL-002',
                titulo: '[SOCIAL] Implementar daily async standup',
                valor_social: 'Mejorar comunicación',
                sps: 4,
                priority: 4,
                estado: 'DONE',
                smell: 'Radio Silence',
                impact: 'Mejorar Openness de 5 a 6',
                guide: 'Scrum Master'
            },
            {
                id: 'SOCIAL-003',
                titulo: '[SOCIAL] Workshop de seguridad psicológica',
                valor_social: 'Fortalecer confianza',
                sps: 3,
                priority: 5,
                estado: 'TODO',
                smell: '',
                impact: 'Mejorar clima general',
                guide: 'Social Guide'
            }
        ]
    },
    sprintBacklog: [
        {
            id: 'SOCIAL-001',
            titulo: 'Mediación Dev A - Dev B',
            sps: 5,
            progress: 60,
            dias: [
                { dia: '1-2', status: 'TODO', actividad: '', horas: 0 },
                { dia: '3', status: 'DONE', actividad: '1:1 Dev A', horas: 2 },
                { dia: '3', status: 'DONE', actividad: '1:1 Dev B', horas: 1 },
                { dia: '4', status: 'IN_PROGRESS', actividad: 'Sesión conjunta', horas: 0 },
                { dia: '5', status: 'TODO', actividad: 'Documentación', horas: 0 }
            ],
            bloqueantes: 'NINGUNO',
            health_impact: {
                respeto: { antes: 4, despues: 6 }
            }
        },
        {
            id: 'SOCIAL-002',
            titulo: 'Daily Async Standup',
            sps: 4,
            progress: 62,
            dias: [
                { dia: '1', status: 'DONE', actividad: 'Diseño', horas: 1 },
                { dia: '2', status: 'DONE', actividad: 'Implementación Slack', horas: 1.5 },
                { dia: '3-5', status: 'IN_PROGRESS', actividad: 'Testing', horas: 3 },
                { dia: '5', status: 'TODO', actividad: 'Evaluación', horas: 0 }
            ],
            bloqueantes: 'NINGUNO',
            health_impact: {
                foco: { antes: 5, despues: 6 }
            }
        }
    ],
    healthScore: {
        values: [
            {
                nombre: 'Openness/Franqueza',
                score: 6,
                max: 10,
                tendencia: '↑',
                score_anterior: 5,
                smell_activo: 'Radio Silence (moderado)',
                indicador_positivo: 'Equipo compartió problemas en retrospectiva',
                accion: 'Implementar daily async standup'
            },
            {
                nombre: 'Compromiso',
                score: 8,
                max: 10,
                tendencia: '↔',
                score_anterior: 8,
                smell_activo: 'NINGUNO',
                indicador_positivo: 'Dev A y Dev B colaboraron en mediación',
                accion: 'Mantener apoyo mutuo'
            },
            {
                nombre: 'Respeto',
                score: 5,
                max: 10,
                tendencia: '↑',
                score_anterior: 4,
                smell_activo: 'Conflicto (moderado)',
                indicador_positivo: 'Sesión 1:1 completadas',
                accion: 'Completar mediación'
            },
            {
                nombre: 'Foco',
                score: 7,
                max: 10,
                tendencia: '↑',
                score_anterior: 6,
                smell_activo: 'NINGUNO detectado',
                indicador_positivo: 'Equipo alineado en objetivo Sprint',
                accion: 'Mantener cohesión'
            },
            {
                nombre: 'Coraje',
                score: 2,
                max: 10,
                tendencia: '↓',
                score_anterior: 3,
                smell_activo: 'Lack of Conflict Resolution (severo)',
                indicador_positivo: 'Equipo evita hablar de problemas',
                accion: 'URGENTE - Workshop Disagree and Commit'
            }
        ],
        promedio: 5.6,
        promedio_anterior: 5.1
    },
    communitySmells: [
        {
            id: 'SMELL-001',
            tipo: 'Conflicto',
            severidad: 'MODERADA',
            manifestacion: 'Tensión Dev A-B en code reviews',
            item_social: 'SOCIAL-001',
            owner: 'Social Guide',
            eta_fix: 'Day 4',
            health_scores_afectados: ['Respeto', 'Compromiso', 'Coraje'],
            identificado_por: 'Scrum Master',
            fecha: '2025-11-01',
            impacto: 'Retrasos en revisiones de código, ambiente tenso en reuniones',
            root_cause: 'Diferencias en estándares de código sin documentar',
            status: 'ACTIVE',
            resolucion: ''
        },
        {
            id: 'SMELL-002',
            tipo: 'Radio Silence',
            severidad: 'MODERADA',
            manifestacion: 'Comunicación lenta',
            item_social: 'SOCIAL-002',
            owner: 'Scrum Master',
            eta_fix: 'Day 5',
            health_scores_afectados: ['Openness', 'Foco'],
            identificado_por: 'Product Owner',
            fecha: '2025-11-02',
            impacto: 'Decisiones retrasadas, falta de feedback oportuno',
            root_cause: 'Equipo distribuido en zonas horarias diferentes',
            status: 'ACTIVE',
            resolucion: ''
        },
        {
            id: 'SMELL-003',
            tipo: 'Lack of Conflict Resolution',
            severidad: 'SEVERA',
            manifestacion: 'Evasión de problemas',
            item_social: 'TBD',
            owner: 'Social Guide',
            eta_fix: 'Sprint N+1',
            health_scores_afectados: ['Coraje'],
            identificado_por: 'Social Guide',
            fecha: '2025-11-03',
            impacto: 'Problemas acumulados sin resolver, frustración silenciosa',
            root_cause: 'Falta de seguridad psicológica para escalar conflictos',
            status: 'ACTIVE',
            resolucion: ''
        }
    ]
};

const state = {
    nextSocialId: 4,
    nextSmellId: 4
};

// ==========================================
// NAVIGATION
// ==========================================

function initNavigation() {
    const navContainer = document.querySelector('.nav');
    if (!navContainer) return;

    navContainer.addEventListener('click', (event) => {
        const navItem = event.target.closest('.nav-item');
        if (!navItem) return;

        const artifactId = navItem.dataset.artifact;
        if (!artifactId) return;
        
        setActiveNavigation(navItem, artifactId);
    });
}

function setActiveNavigation(activeItem, artifactId) {
    // Update active nav items
    document.querySelectorAll('.nav-item').forEach(item => 
        item.classList.toggle('active', item === activeItem)
    );
    
    // Update active sections
    document.querySelectorAll('.artifact-section').forEach(section =>
        section.classList.toggle('active', section.id === artifactId)
    );
}

// ==========================================
// MODAL MANAGEMENT
// ==========================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal.active').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
}

// ==========================================
// NOTIFICATIONS
// ==========================================

let notificationTimeout = null;

function showNotification(message, type = NOTIFICATION_TYPES.SUCCESS) {
    if (!message) return;
    
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    // Clear previous timeout
    if (notificationTimeout) {
        clearTimeout(notificationTimeout);
    }
    
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    notificationTimeout = setTimeout(() => {
        notification.classList.remove('show');
        notificationTimeout = null;
    }, NOTIFICATION_DURATION);
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function generateId(prefix, number) {
    return `${prefix}-${String(number).padStart(3, '0')}`;
}

function createElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
}

function updateElementContent(elementId, content, isHTML = true) {
    const element = document.getElementById(elementId);
    if (!element) return false;
    
    if (isHTML) {
        element.innerHTML = content;
    } else {
        element.textContent = content;
    }
    return true;
}

function getFormData(formId) {
    const form = document.getElementById(formId);
    if (!form) return null;
    
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    return data;
}

// ==========================================
// ARTIFACT 1: PRODUCT BACKLOG SOCIAL
// ==========================================

function renderProductBacklog() {
    renderTechnicalItems();
    renderSocialItems();
}

function renderTechnicalItems() {
    const container = document.getElementById('techItems');
    if (!container) return;
    
    const itemsHTML = appState.productBacklog.technical
        .map(item => createTechnicalItemHTML(item))
        .join('');
    
    container.innerHTML = itemsHTML;
}

function createTechnicalItemHTML(item) {
    const statusClass = item.estado.toLowerCase().replace('_', '-');
    
    return `
        <div class="card backlog-item tech" data-id="${sanitizeHTML(item.id)}">
            <div class="item-header">
                <span class="item-id">${sanitizeHTML(item.id)}</span>
                <span class="status-badge ${statusClass}">${sanitizeHTML(item.estado)}</span>
            </div>
            <div class="item-title">${sanitizeHTML(item.titulo)}</div>
            <div class="item-meta">
                <div class="meta-item">💎 Valor: ${item.valor}</div>
                <div class="meta-item">📊 SP: ${item.sp}</div>
                <div class="meta-item">
                    <span class="priority-badge priority-${item.priority}">P${item.priority}</span>
                </div>
            </div>
        </div>
    `;
}

function renderSocialItems() {
    const container = document.getElementById('socialItems');
    if (!container) return;
    
    const itemsHTML = appState.productBacklog.social
        .map(item => createSocialItemHTML(item))
        .join('');
    
    container.innerHTML = itemsHTML;
}

function createSocialItemHTML(item) {
    const statusClass = item.estado.toLowerCase().replace('_', '-');
    const smellHTML = item.smell 
        ? `<div class="item-detail">⚠️ ${sanitizeHTML(item.smell)}</div>` 
        : '';
    const impactHTML = item.impact 
        ? `<div class="item-detail">📈 ${sanitizeHTML(item.impact)}</div>` 
        : '';
    
    return `
        <div class="card backlog-item social" data-id="${sanitizeHTML(item.id)}">
            <div class="item-header">
                <span class="item-id">${sanitizeHTML(item.id)}</span>
                <span class="status-badge ${statusClass}">${sanitizeHTML(item.estado)}</span>
            </div>
            <div class="item-title">${sanitizeHTML(item.titulo)}</div>
            <div class="item-meta">
                <div class="meta-item">💜 ${sanitizeHTML(item.valor_social)}</div>
                <div class="meta-item">📊 SPS: ${item.sps}</div>
                <div class="meta-item">
                    <span class="priority-badge priority-${item.priority}">P${item.priority}</span>
                </div>
            </div>
            ${smellHTML}
            ${impactHTML}
            <div class="item-detail">👤 ${sanitizeHTML(item.guide)}</div>
        </div>
    `;
}

function filterItems(type) {
    const techSection = document.querySelector('.backlog-section:nth-of-type(1)');
    const socialSection = document.querySelector('.backlog-section:nth-of-type(2)');
    
    if (!techSection || !socialSection) return;
    
    const displayConfig = {
        all: { tech: 'block', social: 'block' },
        tech: { tech: 'block', social: 'none' },
        social: { tech: 'none', social: 'block' }
    };
    
    const config = displayConfig[type] || displayConfig.all;
    techSection.style.display = config.tech;
    socialSection.style.display = config.social;
}

// Add Social Item
function initSocialItemForm() {
    const form = document.getElementById('addSocialItemForm');
    if (!form) return;
    
    form.addEventListener('submit', handleSocialItemSubmit);
}

function handleSocialItemSubmit(e) {
    e.preventDefault();
    
    const formData = {
        titulo: document.getElementById('newSocialTitle')?.value?.trim(),
        valor_social: document.getElementById('newSocialValue')?.value?.trim(),
        sps: document.getElementById('newSocialSPS')?.value,
        priority: document.getElementById('newSocialPriority')?.value,
        smell: document.getElementById('newSocialSmell')?.value?.trim(),
        impact: document.getElementById('newSocialImpact')?.value?.trim(),
        guide: document.getElementById('newSocialGuide')?.value
    };
    
    // Validation
    if (!formData.titulo) {
        showNotification('El título es obligatorio', NOTIFICATION_TYPES.ERROR);
        return;
    }
    
    if (!formData.sps || formData.sps < 1) {
        showNotification('Los SPS deben ser mayor a 0', NOTIFICATION_TYPES.ERROR);
        return;
    }
    
    const newItem = {
        id: generateId('SOCIAL', state.nextSocialId),
        titulo: formData.titulo,
        valor_social: formData.valor_social || 'Mejora general',
        sps: parseInt(formData.sps),
        priority: parseInt(formData.priority) || 5,
        estado: STATUS.TODO,
        smell: formData.smell || '',
        impact: formData.impact || '',
        guide: formData.guide || 'Social Guide'
    };
    
    appState.productBacklog.social.push(newItem);
    state.nextSocialId++;
    
    renderSocialItems();
    closeModal('addSocialItemModal');
    e.target.reset();
    showNotification('Item social agregado exitosamente!');
}

// ==========================================
// ARTIFACT 2: USER STORY SOCIAL
// ==========================================

function fillExampleStory() {
    document.getElementById('storyTitle').value = '[SOCIAL] [Conflicto] - Mediación Dev A y Dev B';
    document.getElementById('storyDescription').value = 'Como Social Guide, Quiero facilitar una mediación entre Dev A y Dev B, Para que puedan trabajar colaborativamente y restaurar el respeto mutuo';
    document.getElementById('storySmell').value = 'Conflicto';
    document.getElementById('storySeverity').value = 'MODERADA';
    document.getElementById('storyIndicator').value = 'Tensión observable en code reviews, comentarios pasivo-agresivos';
    document.getElementById('storyImpact').value = 'Retrasos en revisiones de código, ambiente tenso en reuniones de equipo, otros desarrolladores evitan trabajar con ambos';
    document.getElementById('storySPS').value = '5';
    document.getElementById('storyAssigned').value = 'Social Guide';
    document.getElementById('storyPriority').value = '2';
    document.getElementById('storyNotes').value = 'Referencia: Community Smell Registry SMELL-001. Coordinar con Scrum Master para sesiones 1:1 antes de reunión conjunta.';
    
    showNotification('Ejemplo cargado exitosamente', 'success');
}

function clearStoryForm() {
    document.getElementById('userStoryForm').reset();
    showNotification('Formulario limpiado', 'success');
}

function addAcceptanceCriteria() {
    const container = document.getElementById('acceptanceCriteria');
    const newCriteria = document.createElement('div');
    newCriteria.className = 'form-group';
    newCriteria.innerHTML = '<textarea class="form-textarea" placeholder="Nuevo criterio..."></textarea>';
    container.appendChild(newCriteria);
}

function saveUserStory() {
    const formData = {
        title: document.getElementById('storyTitle')?.value?.trim(),
        smell: document.getElementById('storySmell')?.value?.trim(),
        sps: document.getElementById('storySPS')?.value,
        priority: document.getElementById('storyPriority')?.value,
        impact: document.getElementById('storyImpact')?.value?.trim(),
        assigned: document.getElementById('storyAssigned')?.value
    };
    
    // Validation
    if (!formData.title) {
        showNotification('Por favor completa el título', NOTIFICATION_TYPES.ERROR);
        return;
    }
    
    if (!formData.sps || formData.sps < 1) {
        showNotification('Los SPS deben ser mayor a 0', NOTIFICATION_TYPES.ERROR);
        return;
    }
    
    const newItem = {
        id: generateId('SOCIAL', state.nextSocialId),
        titulo: formData.title,
        valor_social: formData.smell || 'Mejora general',
        sps: parseInt(formData.sps),
        priority: parseInt(formData.priority) || 5,
        estado: STATUS.TODO,
        smell: formData.smell || '',
        impact: formData.impact || '',
        guide: formData.assigned || 'Social Guide'
    };
    
    appState.productBacklog.social.push(newItem);
    state.nextSocialId++;
    
    renderSocialItems();
    clearStoryForm();
    showNotification('User Story guardada y agregada al Product Backlog!');
}

// ==========================================
// ARTIFACT 3: SPRINT BACKLOG SOCIAL
// ==========================================

function renderSprintBacklog() {
    const container = document.getElementById('sprintItems');
    if (!container) return;
    
    const itemsHTML = appState.sprintBacklog
        .map(item => createSprintItemHTML(item))
        .join('');
    
    container.innerHTML = itemsHTML;
    updateSprintSummary();
}

function createSprintItemHTML(item) {
    const healthImpactKey = Object.keys(item.health_impact)[0];
    const healthImpact = item.health_impact[healthImpactKey];
    const timelineHTML = item.dias
        .map(dia => createDayItemHTML(dia))
        .join('');
    
    return `
        <div class="card sprint-item" data-id="${sanitizeHTML(item.id)}">
            <div class="sprint-item-header">
                <div>
                    <span class="item-id">${sanitizeHTML(item.id)}</span>
                    <h3 style="margin: 8px 0;">${sanitizeHTML(item.titulo)}</h3>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 24px; font-weight: bold; color: var(--color-primary);">${item.progress}%</div>
                    <div style="font-size: 12px; color: var(--color-text-secondary);">${item.sps} SPS</div>
                </div>
            </div>
            
            <div class="progress-bar" style="margin-bottom: 16px;">
                <div class="progress-bar-fill" style="width: ${item.progress}%;"></div>
            </div>
            
            <h4 style="font-size: 14px; margin-bottom: 8px;">Timeline (Días del Sprint)</h4>
            <div class="timeline">
                ${timelineHTML}
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px;">
                <div>
                    <div style="font-size: 12px; color: var(--color-text-secondary);">Bloqueantes</div>
                    <div style="font-weight: 500;">${sanitizeHTML(item.bloqueantes)}</div>
                </div>
                <div>
                    <div style="font-size: 12px; color: var(--color-text-secondary);">Health Impact</div>
                    <div style="font-weight: 500;">${sanitizeHTML(healthImpactKey)}: ${healthImpact.antes} → ${healthImpact.despues}</div>
                </div>
            </div>
        </div>
    `;
}

function createDayItemHTML(dia) {
    const statusClass = dia.status.toLowerCase().replace('_', '-');
    return `
        <div class="day-item ${statusClass}">
            <div style="font-weight: bold;">Día ${sanitizeHTML(dia.dia)}</div>
            <div style="font-size: 10px; margin-top: 4px;">${sanitizeHTML(dia.actividad) || '-'}</div>
        </div>
    `;
}

function updateSprintSummary() {
    if (appState.sprintBacklog.length === 0) return;
    
    const totalSPS = appState.sprintBacklog.reduce((sum, item) => sum + item.sps, 0);
    const avgProgress = appState.sprintBacklog.reduce((sum, item) => sum + item.progress, 0) / appState.sprintBacklog.length;
    const completedSPS = (totalSPS * avgProgress / 100).toFixed(1);
    
    updateElementContent('sprintItemsCount', appState.sprintBacklog.length, false);
    updateElementContent('sprintTotalSPS', totalSPS, false);
    updateElementContent('sprintCompletedSPS', completedSPS, false);
    updateElementContent('sprintProgress', Math.round(avgProgress) + '%', false);
}

// ==========================================
// ARTIFACT 4: HEALTH SCORE DASHBOARD
// ==========================================

function renderHealthScore() {
    const container = document.getElementById('healthValues');
    if (!container) return;
    
    const valuesHTML = appState.healthScore.values
        .map(value => createHealthValueHTML(value))
        .join('');
    
    container.innerHTML = valuesHTML;
    updateHealthScoreSummary();
    renderActiveSmellsTable();
}

function getHealthColorClass(score) {
    if (score >= 9) return 'excellent';
    if (score >= 7) return 'good';
    if (score >= 4) return 'warning';
    return 'critical';
}

function getHealthColorVar(colorClass) {
    const colorMap = {
        critical: 'danger',
        warning: 'warning-alt',
        good: 'success-alt',
        excellent: 'primary'
    };
    return colorMap[colorClass] || 'danger';
}

function createHealthValueHTML(value) {
    const percentage = (value.score / value.max) * 100;
    const colorClass = getHealthColorClass(value.score);
    const colorVar = getHealthColorVar(colorClass);
    
    return `
        <div class="card health-value-card">
            <div class="health-value-header">
                <div class="health-value-name">${sanitizeHTML(value.nombre)}</div>
                <div class="health-value-score" style="color: var(--color-${colorVar});">
                    ${value.score}/${value.max} ${value.tendencia}
                </div>
            </div>
            <div class="health-bar">
                <div class="health-bar-fill ${colorClass}" style="width: ${percentage}%;"></div>
            </div>
            <div class="health-value-details">
                <div class="health-value-detail"><strong>Anterior:</strong> ${value.score_anterior}</div>
                <div class="health-value-detail"><strong>Smell Activo:</strong> ${sanitizeHTML(value.smell_activo)}</div>
                <div class="health-value-detail"><strong>Indicador:</strong> ${sanitizeHTML(value.indicador_positivo)}</div>
                <div class="health-value-detail"><strong>Acción:</strong> ${sanitizeHTML(value.accion)}</div>
            </div>
        </div>
    `;
}

function updateHealthScoreSummary() {
    updateElementContent('avgHealthScore', appState.healthScore.promedio.toFixed(1), false);
    updateElementContent('prevAvgScore', appState.healthScore.promedio_anterior.toFixed(1), false);
}

function renderActiveSmellsTable() {
    const tableBody = document.getElementById('activeSmellsTable');
    if (!tableBody) return;
    
    const activeSmells = appState.communitySmells.filter(s => s.status === STATUS.ACTIVE);
    const rowsHTML = activeSmells
        .map(smell => createSmellTableRowHTML(smell))
        .join('');
    
    tableBody.innerHTML = rowsHTML;
}

function createSmellTableRowHTML(smell) {
    const severityClass = smell.severidad.toLowerCase();
    return `
        <tr>
            <td><code>${sanitizeHTML(smell.id)}</code></td>
            <td>${sanitizeHTML(smell.tipo)}</td>
            <td><span class="severity-badge ${severityClass}">${sanitizeHTML(smell.severidad)}</span></td>
            <td>${sanitizeHTML(smell.manifestacion)}</td>
            <td><code>${sanitizeHTML(smell.item_social)}</code></td>
            <td>${sanitizeHTML(smell.owner)}</td>
            <td>${sanitizeHTML(smell.eta_fix)}</td>
        </tr>
    `;
}

// ==========================================
// ARTIFACT 5: COMMUNITY SMELL REGISTRY
// ==========================================

function renderCommunitySmells(filter = 'all') {
    const container = document.getElementById('smellsRegistry');
    if (!container) return;
    
    let smells = appState.communitySmells;
    if (filter === 'active') {
        smells = appState.communitySmells.filter(s => s.status === STATUS.ACTIVE);
    } else if (filter === 'resolved') {
        smells = appState.communitySmells.filter(s => s.status === STATUS.RESOLVED);
    }
    
    const smellsHTML = smells
        .map(smell => createCommunitySmellHTML(smell))
        .join('');
    
    container.innerHTML = smellsHTML;
}

function createCommunitySmellHTML(smell) {
    const severityClass = smell.severidad.toLowerCase();
    const statusClass = smell.status === STATUS.ACTIVE ? 'in-progress' : 'done';
    const healthScoresText = smell.health_scores_afectados.join(', ');
    
    return `
        <div class="card smell-card ${severityClass}" data-id="${sanitizeHTML(smell.id)}">
            <div class="smell-header">
                <div>
                    <div style="font-family: var(--font-family-mono); font-size: 12px; color: var(--color-text-secondary);">
                        ${sanitizeHTML(smell.id)}
                    </div>
                    <div class="smell-type">${sanitizeHTML(smell.tipo)}</div>
                </div>
                <span class="severity-badge ${severityClass}">${sanitizeHTML(smell.severidad)}</span>
            </div>
            
            <div style="margin: 12px 0; padding: 12px; background: var(--color-secondary); border-radius: 8px;">
                <div style="font-size: 12px; color: var(--color-text-secondary); margin-bottom: 4px;">Manifestación</div>
                <div>${sanitizeHTML(smell.manifestacion)}</div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 12px;">
                <div>
                    <div style="color: var(--color-text-secondary);">Identificado por</div>
                    <div style="font-weight: 500;">${sanitizeHTML(smell.identificado_por)}</div>
                </div>
                <div>
                    <div style="color: var(--color-text-secondary);">Fecha</div>
                    <div style="font-weight: 500;">${sanitizeHTML(smell.fecha)}</div>
                </div>
            </div>
            
            <div style="margin-top: 12px; font-size: 12px;">
                <div style="color: var(--color-text-secondary);">Impacto en el equipo</div>
                <div style="margin-top: 4px;">${sanitizeHTML(smell.impacto)}</div>
            </div>
            
            <div style="margin-top: 12px; font-size: 12px;">
                <div style="color: var(--color-text-secondary);">Root Cause</div>
                <div style="margin-top: 4px;">${sanitizeHTML(smell.root_cause)}</div>
            </div>
            
            <div style="margin-top: 12px; font-size: 12px;">
                <div style="color: var(--color-text-secondary);">Health Scores Afectados</div>
                <div style="margin-top: 4px;">${sanitizeHTML(healthScoresText)}</div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-top: 12px; font-size: 12px;">
                <div>
                    <div style="color: var(--color-text-secondary);">Item Social</div>
                    <div style="font-weight: 500; font-family: var(--font-family-mono);">
                        ${sanitizeHTML(smell.item_social)}
                    </div>
                </div>
                <div>
                    <div style="color: var(--color-text-secondary);">Owner</div>
                    <div style="font-weight: 500;">${sanitizeHTML(smell.owner)}</div>
                </div>
                <div>
                    <div style="color: var(--color-text-secondary);">ETA Fix</div>
                    <div style="font-weight: 500;">${sanitizeHTML(smell.eta_fix)}</div>
                </div>
            </div>
            
            <div style="margin-top: 12px;">
                <span class="status-badge ${statusClass}">${sanitizeHTML(smell.status)}</span>
            </div>
        </div>
    `;
}

function filterSmells(status) {
    renderCommunitySmells(status);
}

// Add Community Smell
function initSmellForm() {
    const form = document.getElementById('addSmellForm');
    if (!form) return;
    
    form.addEventListener('submit', handleSmellSubmit);
}

function handleSmellSubmit(e) {
    e.preventDefault();
    
    const formData = {
        tipo: document.getElementById('newSmellType')?.value?.trim(),
        severidad: document.getElementById('newSmellSeverity')?.value,
        manifestacion: document.getElementById('newSmellManifestation')?.value?.trim(),
        identificado_por: document.getElementById('newSmellIdentified')?.value?.trim(),
        impacto: document.getElementById('newSmellImpact')?.value?.trim()
    };
    
    // Validation
    if (!formData.tipo) {
        showNotification('El tipo de smell es obligatorio', NOTIFICATION_TYPES.ERROR);
        return;
    }
    
    if (!formData.manifestacion) {
        showNotification('La manifestación es obligatoria', NOTIFICATION_TYPES.ERROR);
        return;
    }
    
    const newSmell = {
        id: generateId('SMELL', state.nextSmellId),
        tipo: formData.tipo,
        severidad: formData.severidad || 'MODERADA',
        manifestacion: formData.manifestacion,
        identificado_por: formData.identificado_por || 'Equipo',
        impacto: formData.impacto || 'Pendiente análisis',
        item_social: 'TBD',
        owner: 'Social Guide',
        eta_fix: 'TBD',
        health_scores_afectados: [],
        fecha: new Date().toISOString().split('T')[0],
        root_cause: 'Pendiente análisis 5 Whys',
        status: STATUS.ACTIVE,
        resolucion: ''
    };
    
    appState.communitySmells.push(newSmell);
    state.nextSmellId++;
    
    renderCommunitySmells();
    renderHealthScore();
    closeModal('addSmellModal');
    e.target.reset();
    showNotification('Community Smell registrado exitosamente!');
}

// ==========================================
// ARTIFACT 7: REPORTE STAKEHOLDERS
// ==========================================

function exportReport() {
    try {
        // Simulación de exportación
        showNotification('Generando reporte PDF... (Funcionalidad simulada)', NOTIFICATION_TYPES.SUCCESS);
        // TODO: Implementar exportación real con librería PDF
    } catch (error) {
        console.error('Error al exportar reporte:', error);
        showNotification('Error al generar el reporte', NOTIFICATION_TYPES.ERROR);
    }
}

function refreshReport() {
    try {
        // Re-renderizar todas las secciones del reporte
        renderProductBacklog();
        renderSprintBacklog();
        renderHealthScore();
        renderCommunitySmells();
        showNotification('Reporte actualizado', NOTIFICATION_TYPES.SUCCESS);
    } catch (error) {
        console.error('Error al actualizar reporte:', error);
        showNotification('Error al actualizar el reporte', NOTIFICATION_TYPES.ERROR);
    }
}

// ==========================================
// INITIALIZATION
// ==========================================

function initModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

function initApp() {
    try {
        // Initialize navigation
        initNavigation();
        
        // Initialize forms
        initSocialItemForm();
        initSmellForm();
        
        // Initialize modals
        initModals();
        
        // Render all artifacts
        renderProductBacklog();
        renderSprintBacklog();
        renderHealthScore();
        renderCommunitySmells();
        
        console.log('SocialScrum Manager initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
        showNotification('Error al inicializar la aplicación', NOTIFICATION_TYPES.ERROR);
    }
}

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);