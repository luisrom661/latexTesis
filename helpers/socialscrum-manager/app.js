// ==========================================
// STATE MANAGEMENT
// ==========================================

let appState = {
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

let nextSocialId = 4;
let nextSmellId = 4;

// ==========================================
// NAVIGATION
// ==========================================

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.artifact-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const artifactId = item.dataset.artifact;
            
            // Update active states
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(artifactId).classList.add('active');
        });
    });
}

// ==========================================
// MODAL MANAGEMENT
// ==========================================

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// ==========================================
// NOTIFICATIONS
// ==========================================

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
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
    container.innerHTML = appState.productBacklog.technical.map(item => `
        <div class="card backlog-item tech">
            <div class="item-header">
                <span class="item-id">${item.id}</span>
                <span class="status-badge ${item.estado.toLowerCase().replace('_', '-')}">${item.estado}</span>
            </div>
            <div class="item-title">${item.titulo}</div>
            <div class="item-meta">
                <div class="meta-item">💎 Valor: ${item.valor}</div>
                <div class="meta-item">📊 SP: ${item.sp}</div>
                <div class="meta-item"><span class="priority-badge priority-${item.priority}">P${item.priority}</span></div>
            </div>
        </div>
    `).join('');
}

function renderSocialItems() {
    const container = document.getElementById('socialItems');
    container.innerHTML = appState.productBacklog.social.map(item => `
        <div class="card backlog-item social">
            <div class="item-header">
                <span class="item-id">${item.id}</span>
                <span class="status-badge ${item.estado.toLowerCase().replace('_', '-')}">${item.estado}</span>
            </div>
            <div class="item-title">${item.titulo}</div>
            <div class="item-meta">
                <div class="meta-item">💜 ${item.valor_social}</div>
                <div class="meta-item">📊 SPS: ${item.sps}</div>
                <div class="meta-item"><span class="priority-badge priority-${item.priority}">P${item.priority}</span></div>
            </div>
            ${item.smell ? `<div style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary);">⚠️ ${item.smell}</div>` : ''}
            ${item.impact ? `<div style="margin-top: 4px; font-size: 12px; color: var(--color-text-secondary);">📈 ${item.impact}</div>` : ''}
            <div style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary);">👤 ${item.guide}</div>
        </div>
    `).join('');
}

function filterItems(type) {
    const techSection = document.querySelector('.backlog-section:nth-of-type(1)');
    const socialSection = document.querySelector('.backlog-section:nth-of-type(2)');
    
    if (type === 'all') {
        techSection.style.display = 'block';
        socialSection.style.display = 'block';
    } else if (type === 'tech') {
        techSection.style.display = 'block';
        socialSection.style.display = 'none';
    } else if (type === 'social') {
        techSection.style.display = 'none';
        socialSection.style.display = 'block';
    }
}

// Add Social Item
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addSocialItemForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newItem = {
                id: `SOCIAL-${String(nextSocialId).padStart(3, '0')}`,
                titulo: document.getElementById('newSocialTitle').value,
                valor_social: document.getElementById('newSocialValue').value,
                sps: parseInt(document.getElementById('newSocialSPS').value),
                priority: parseInt(document.getElementById('newSocialPriority').value),
                estado: 'TODO',
                smell: document.getElementById('newSocialSmell').value,
                impact: document.getElementById('newSocialImpact').value,
                guide: document.getElementById('newSocialGuide').value
            };
            
            appState.productBacklog.social.push(newItem);
            nextSocialId++;
            
            renderSocialItems();
            closeModal('addSocialItemModal');
            form.reset();
            showNotification('Item social agregado exitosamente!');
        });
    }
});

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
    const title = document.getElementById('storyTitle').value;
    if (!title) {
        showNotification('Por favor completa el título', 'error');
        return;
    }
    
    const newItem = {
        id: `SOCIAL-${String(nextSocialId).padStart(3, '0')}`,
        titulo: title,
        valor_social: document.getElementById('storySmell').value || 'Mejora general',
        sps: parseInt(document.getElementById('storySPS').value),
        priority: parseInt(document.getElementById('storyPriority').value),
        estado: 'TODO',
        smell: document.getElementById('storySmell').value,
        impact: document.getElementById('storyImpact').value,
        guide: document.getElementById('storyAssigned').value
    };
    
    appState.productBacklog.social.push(newItem);
    nextSocialId++;
    
    renderSocialItems();
    clearStoryForm();
    showNotification('User Story guardada y agregada al Product Backlog!');
}

// ==========================================
// ARTIFACT 3: SPRINT BACKLOG SOCIAL
// ==========================================

function renderSprintBacklog() {
    const container = document.getElementById('sprintItems');
    
    container.innerHTML = appState.sprintBacklog.map(item => {
        const healthImpactKey = Object.keys(item.health_impact)[0];
        const healthImpact = item.health_impact[healthImpactKey];
        
        return `
            <div class="card sprint-item">
                <div class="sprint-item-header">
                    <div>
                        <span class="item-id">${item.id}</span>
                        <h3 style="margin: 8px 0;">${item.titulo}</h3>
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
                    ${item.dias.map(dia => `
                        <div class="day-item ${dia.status.toLowerCase().replace('_', '-')}">
                            <div style="font-weight: bold;">Día ${dia.dia}</div>
                            <div style="font-size: 10px; margin-top: 4px;">${dia.actividad || '-'}</div>
                        </div>
                    `).join('')}
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px;">
                    <div>
                        <div style="font-size: 12px; color: var(--color-text-secondary);">Bloqueantes</div>
                        <div style="font-weight: 500;">${item.bloqueantes}</div>
                    </div>
                    <div>
                        <div style="font-size: 12px; color: var(--color-text-secondary);">Health Impact</div>
                        <div style="font-weight: 500;">${healthImpactKey}: ${healthImpact.antes} → ${healthImpact.despues}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Update summary
    const totalSPS = appState.sprintBacklog.reduce((sum, item) => sum + item.sps, 0);
    const avgProgress = appState.sprintBacklog.reduce((sum, item) => sum + item.progress, 0) / appState.sprintBacklog.length;
    const completedSPS = (totalSPS * avgProgress / 100).toFixed(1);
    
    document.getElementById('sprintItemsCount').textContent = appState.sprintBacklog.length;
    document.getElementById('sprintTotalSPS').textContent = totalSPS;
    document.getElementById('sprintCompletedSPS').textContent = completedSPS;
    document.getElementById('sprintProgress').textContent = Math.round(avgProgress) + '%';
}

// ==========================================
// ARTIFACT 4: HEALTH SCORE DASHBOARD
// ==========================================

function renderHealthScore() {
    const container = document.getElementById('healthValues');
    
    container.innerHTML = appState.healthScore.values.map(value => {
        const percentage = (value.score / value.max) * 100;
        let colorClass = 'critical';
        if (value.score >= 9) colorClass = 'excellent';
        else if (value.score >= 7) colorClass = 'good';
        else if (value.score >= 4) colorClass = 'warning';
        
        return `
            <div class="card health-value-card">
                <div class="health-value-header">
                    <div class="health-value-name">${value.nombre}</div>
                    <div class="health-value-score" style="color: var(--color-${colorClass === 'critical' ? 'danger' : colorClass === 'warning' ? 'warning-alt' : colorClass === 'good' ? 'success-alt' : 'primary'});">
                        ${value.score}/${value.max} ${value.tendencia}
                    </div>
                </div>
                <div class="health-bar">
                    <div class="health-bar-fill ${colorClass}" style="width: ${percentage}%;"></div>
                </div>
                <div class="health-value-details">
                    <div class="health-value-detail"><strong>Anterior:</strong> ${value.score_anterior}</div>
                    <div class="health-value-detail"><strong>Smell Activo:</strong> ${value.smell_activo}</div>
                    <div class="health-value-detail"><strong>Indicador:</strong> ${value.indicador_positivo}</div>
                    <div class="health-value-detail"><strong>Acción:</strong> ${value.accion}</div>
                </div>
            </div>
        `;
    }).join('');
    
    // Update summary
    document.getElementById('avgHealthScore').textContent = appState.healthScore.promedio.toFixed(1);
    document.getElementById('prevAvgScore').textContent = appState.healthScore.promedio_anterior.toFixed(1);
    
    // Render active smells table
    const tableBody = document.getElementById('activeSmellsTable');
    tableBody.innerHTML = appState.communitySmells.filter(s => s.status === 'ACTIVE').map(smell => `
        <tr>
            <td><code>${smell.id}</code></td>
            <td>${smell.tipo}</td>
            <td><span class="severity-badge ${smell.severidad.toLowerCase()}">${smell.severidad}</span></td>
            <td>${smell.manifestacion}</td>
            <td><code>${smell.item_social}</code></td>
            <td>${smell.owner}</td>
            <td>${smell.eta_fix}</td>
        </tr>
    `).join('');
}

// ==========================================
// ARTIFACT 5: COMMUNITY SMELL REGISTRY
// ==========================================

function renderCommunitySmells() {
    const container = document.getElementById('smellsRegistry');
    
    container.innerHTML = appState.communitySmells.map(smell => `
        <div class="card smell-card ${smell.severidad.toLowerCase()}">
            <div class="smell-header">
                <div>
                    <div style="font-family: var(--font-family-mono); font-size: 12px; color: var(--color-text-secondary);">${smell.id}</div>
                    <div class="smell-type">${smell.tipo}</div>
                </div>
                <span class="severity-badge ${smell.severidad.toLowerCase()}">${smell.severidad}</span>
            </div>
            
            <div style="margin: 12px 0; padding: 12px; background: var(--color-secondary); border-radius: 8px;">
                <div style="font-size: 12px; color: var(--color-text-secondary); margin-bottom: 4px;">Manifestación</div>
                <div>${smell.manifestacion}</div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 12px;">
                <div>
                    <div style="color: var(--color-text-secondary);">Identificado por</div>
                    <div style="font-weight: 500;">${smell.identificado_por}</div>
                </div>
                <div>
                    <div style="color: var(--color-text-secondary);">Fecha</div>
                    <div style="font-weight: 500;">${smell.fecha}</div>
                </div>
            </div>
            
            <div style="margin-top: 12px; font-size: 12px;">
                <div style="color: var(--color-text-secondary);">Impacto en el equipo</div>
                <div style="margin-top: 4px;">${smell.impacto}</div>
            </div>
            
            <div style="margin-top: 12px; font-size: 12px;">
                <div style="color: var(--color-text-secondary);">Root Cause</div>
                <div style="margin-top: 4px;">${smell.root_cause}</div>
            </div>
            
            <div style="margin-top: 12px; font-size: 12px;">
                <div style="color: var(--color-text-secondary);">Health Scores Afectados</div>
                <div style="margin-top: 4px;">${smell.health_scores_afectados.join(', ')}</div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-top: 12px; font-size: 12px;">
                <div>
                    <div style="color: var(--color-text-secondary);">Item Social</div>
                    <div style="font-weight: 500; font-family: var(--font-family-mono);">${smell.item_social}</div>
                </div>
                <div>
                    <div style="color: var(--color-text-secondary);">Owner</div>
                    <div style="font-weight: 500;">${smell.owner}</div>
                </div>
                <div>
                    <div style="color: var(--color-text-secondary);">ETA Fix</div>
                    <div style="font-weight: 500;">${smell.eta_fix}</div>
                </div>
            </div>
            
            <div style="margin-top: 12px;">
                <span class="status-badge ${smell.status === 'ACTIVE' ? 'in-progress' : 'done'}">${smell.status}</span>
            </div>
        </div>
    `).join('');
}

function filterSmells(status) {
    const container = document.getElementById('smellsRegistry');
    let filtered = appState.communitySmells;
    
    if (status === 'active') {
        filtered = appState.communitySmells.filter(s => s.status === 'ACTIVE');
    } else if (status === 'resolved') {
        filtered = appState.communitySmells.filter(s => s.status === 'RESOLVED');
    }
    
    container.innerHTML = filtered.map(smell => `
        <div class="card smell-card ${smell.severidad.toLowerCase()}">
            <div class="smell-header">
                <div>
                    <div style="font-family: var(--font-family-mono); font-size: 12px; color: var(--color-text-secondary);">${smell.id}</div>
                    <div class="smell-type">${smell.tipo}</div>
                </div>
                <span class="severity-badge ${smell.severidad.toLowerCase()}">${smell.severidad}</span>
            </div>
            
            <div style="margin: 12px 0; padding: 12px; background: var(--color-secondary); border-radius: 8px;">
                <div style="font-size: 12px; color: var(--color-text-secondary); margin-bottom: 4px;">Manifestación</div>
                <div>${smell.manifestacion}</div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 12px;">
                <div>
                    <div style="color: var(--color-text-secondary);">Identificado por</div>
                    <div style="font-weight: 500;">${smell.identificado_por}</div>
                </div>
                <div>
                    <div style="color: var(--color-text-secondary);">Fecha</div>
                    <div style="font-weight: 500;">${smell.fecha}</div>
                </div>
            </div>
            
            <div style="margin-top: 12px; font-size: 12px;">
                <div style="color: var(--color-text-secondary);">Impacto en el equipo</div>
                <div style="margin-top: 4px;">${smell.impacto}</div>
            </div>
            
            <div style="margin-top: 12px;">
                <span class="status-badge ${smell.status === 'ACTIVE' ? 'in-progress' : 'done'}">${smell.status}</span>
            </div>
        </div>
    `).join('');
}

// Add Community Smell
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addSmellForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newSmell = {
                id: `SMELL-${String(nextSmellId).padStart(3, '0')}`,
                tipo: document.getElementById('newSmellType').value,
                severidad: document.getElementById('newSmellSeverity').value,
                manifestacion: document.getElementById('newSmellManifestation').value,
                identificado_por: document.getElementById('newSmellIdentified').value,
                impacto: document.getElementById('newSmellImpact').value,
                item_social: 'TBD',
                owner: 'Social Guide',
                eta_fix: 'TBD',
                health_scores_afectados: [],
                fecha: new Date().toISOString().split('T')[0],
                root_cause: 'Pendiente análisis 5 Whys',
                status: 'ACTIVE',
                resolucion: ''
            };
            
            appState.communitySmells.push(newSmell);
            nextSmellId++;
            
            renderCommunitySmells();
            renderHealthScore();
            closeModal('addSmellModal');
            form.reset();
            showNotification('Community Smell registrado exitosamente!');
        });
    }
});

// ==========================================
// ARTIFACT 7: REPORTE STAKEHOLDERS
// ==========================================

function exportReport() {
    showNotification('Generando reporte PDF... (Funcionalidad simulada)', 'success');
}

function refreshReport() {
    showNotification('Reporte actualizado', 'success');
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderProductBacklog();
    renderSprintBacklog();
    renderHealthScore();
    renderCommunitySmells();
    
    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
});