const toolsData = [
 {name:"ChatGPT",letter:"C",category:"Texto",type:"Freemium",desc:"Assistente de IA para escrita, ideias, estudo e tarefas do dia a dia.",url:"https://chatgpt.com"},
 {name:"Canva",letter:"Ca",category:"Imagem",type:"Freemium",desc:"Crie designs, apresentações e conteúdos visuais com recursos de IA.",url:"https://www.canva.com"},
 {name:"Gemini",letter:"G",category:"Produtividade",type:"Freemium",desc:"Assistente de IA do Google para pesquisa, escrita e produtividade.",url:"https://gemini.google.com"},
 {name:"Perplexity",letter:"P",category:"Texto",type:"Freemium",desc:"Ferramenta de pesquisa com respostas acompanhadas de fontes.",url:"https://www.perplexity.ai"},
 {name:"CapCut",letter:"Cc",category:"Vídeo",type:"Freemium",desc:"Editor de vídeo com recursos inteligentes para criação de conteúdo.",url:"https://www.capcut.com"},
 {name:"ElevenLabs",letter:"E",category:"Áudio",type:"Freemium",desc:"Plataforma de geração de voz e recursos de áudio por IA.",url:"https://elevenlabs.io"},
 {name:"Runway",letter:"R",category:"Vídeo",type:"Freemium",desc:"Ferramentas de IA para criação e edição de vídeos.",url:"https://runwayml.com"},
 {name:"Cursor",letter:"Cu",category:"Programação",type:"Freemium",desc:"Editor de código com recursos de assistência por IA.",url:"https://cursor.com"},
 {name:"Notion AI",letter:"N",category:"Produtividade",type:"Pago",desc:"Recursos de IA integrados ao espaço de trabalho Notion.",url:"https://www.notion.com/product/ai"}
];
const promptsData = [
 {title:"Roteiro curto com gancho forte",cat:"Conteúdo",desc:"Para estruturar um vídeo curto educativo.",text:"Crie um roteiro de vídeo de até 45 segundos sobre [TEMA]. Comece com um gancho claro nos primeiros 3 segundos, explique uma ideia prática em linguagem simples e termine com uma pergunta que incentive comentários. Não prometa resultados garantidos."},
 {title:"Calendário de conteúdo semanal",cat:"Marketing",desc:"Organize publicações com variedade de formatos.",text:"Monte um calendário de conteúdo de 7 dias para [NICHO], com tema, formato, objetivo e uma ideia de gancho para cada publicação. Varie entre conteúdo educativo, bastidores, dúvidas frequentes e demonstrações."},
 {title:"Explicar um assunto de forma simples",cat:"Estudos",desc:"Transforme um tema complexo em explicação acessível.",text:"Explique [ASSUNTO] para alguém iniciante. Use linguagem simples, analogias cotidianas e um exemplo prático. Termine com um resumo de 3 pontos e 3 perguntas para revisar o aprendizado."},
 {title:"Ideias para resolver um problema do público",cat:"Marketing",desc:"Encontre pautas úteis a partir das dores da audiência.",text:"Meu público é [PÚBLICO] e enfrenta [PROBLEMA]. Sugira 15 ideias de conteúdo que ajudem esse público, agrupadas em dicas, erros comuns, passo a passo, mitos e perguntas frequentes."},
 {title:"Organizar uma tarefa grande",cat:"Produtividade",desc:"Divida um objetivo em pequenas etapas executáveis.",text:"Ajude-me a concluir [OBJETIVO]. Divida em etapas pequenas, ordene por prioridade, estime o esforço de cada uma e indique qual é a primeira ação prática. Aponte informações que ainda preciso definir."}
];
const tutorialsData=[
 ["Como escrever bons prompts","INICIANTE","Aprenda a informar contexto, objetivo, formato e restrições para obter respostas mais úteis.","✧"],
 ["Como avaliar uma ferramenta de IA","INICIANTE","Veja critérios para comparar recursos, privacidade, limites e planos.","⌕"],
 ["IA para criar conteúdo com responsabilidade","INTERMEDIÁRIO","Use IA como apoio criativo, revise informações e mantenha sua voz própria.","▤"],
 ["Como verificar respostas geradas por IA","INICIANTE","Aprenda a conferir dados, procurar fontes e identificar possíveis erros.","✓"],
 ["Organize sua biblioteca de prompts","INTERMEDIÁRIO","Crie categorias, nomeie modelos e adapte comandos para tarefas recorrentes.","▦"],
 ["Primeiros passos com automação","AVANÇADO","Entenda gatilhos, ações e cuidados antes de conectar serviços.","⌘"]
];
const newsData=[
 ["Biblioteca de prompts","Exemplo de atualização: nova coleção de prompts para planejamento de conteúdo.","CONTEÚDO"],
 ["Ferramentas em destaque","Exemplo de publicação: comparação de recursos e planos de ferramentas populares.","FERRAMENTAS"],
 ["Aprendizado responsável","Exemplo de guia: como verificar informações produzidas por inteligência artificial.","GUIA"]
];
const $=s=>document.querySelector(s);
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2300)}
function toolCard(t){return `<article class="tool-card"><div class="tool-top"><div class="tool-logo">${t.letter}</div><div><h3>${t.name}</h3><span class="category">${t.category}</span></div></div><p>${t.desc}</p><div class="tool-bottom"><span class="type-pill">${t.type}</span><a href="${t.url}" target="_blank" rel="noopener noreferrer">Site oficial ↗</a></div></article>`}
function renderTools(){const featured=toolsData.slice(0,3);$("#featuredTools").innerHTML=featured.map(toolCard).join("");const q=($("#toolSearch")?.value||"").toLowerCase();const cat=$("#categoryFilter")?.value||"Todas";const filtered=toolsData.filter(t=>(cat==="Todas"||t.category===cat)&&(t.name+" "+t.desc+" "+t.category).toLowerCase().includes(q));$("#allTools").innerHTML=filtered.length?filtered.map(toolCard).join(""):'<div class="notice">Nenhuma ferramenta encontrada.</div>'}
function renderPrompts(){const q=($("#promptSearch")?.value||"").toLowerCase();const cat=$("#promptCategory")?.value||"Todas";const items=promptsData.filter(p=>(cat==="Todas"||p.cat===cat)&&(p.title+" "+p.desc+" "+p.text).toLowerCase().includes(q));$("#promptList").innerHTML=items.map((p,i)=>`<article class="prompt-card"><div class="prompt-card-top"><div><h3>${p.title}</h3><p>${p.desc}</p></div><span class="tag">${p.cat}</span></div><div class="prompt-text" id="prompt-${i}">${p.text}</div><button class="secondary-button copy-prompt" data-index="${i}">Copiar prompt</button></article>`).join("")||'<div class="notice">Nenhum prompt encontrado.</div>';document.querySelectorAll(".copy-prompt").forEach(b=>b.addEventListener("click",()=>copyText(items[Number(b.dataset.index)].text)))}
function renderTutorials(){$("#tutorialGrid").innerHTML=tutorialsData.map(t=>`<article class="tutorial-card"><div class="tutorial-art">${t[3]}</div><div class="tutorial-body"><small>${t[1]}</small><h3>${t[0]}</h3><p>${t[2]}</p></div></article>`).join("")}
function renderNews(){$("#newsList").innerHTML=newsData.map(n=>`<article class="news-card"><div class="news-symbol">✦</div><div><h3>${n[0]}</h3><p>${n[1]}</p><small>${n[2]} · EXEMPLO DEMONSTRATIVO</small></div></article>`).join("")}
function navigate(page){document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id==="page-"+page));document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.page===page));const active=document.querySelector(`.nav-link[data-page="${page}"]`);$("#crumb").textContent=active?active.textContent.trim():"Visão geral";$("#sidebar").classList.remove("open");window.scrollTo({top:0,behavior:"smooth"})}
async function copyText(text){try{await navigator.clipboard.writeText(text);toast("Texto copiado!")}catch(e){toast("Não foi possível copiar automaticamente.")}}
document.querySelectorAll("[data-page]").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.page)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.go)));
$("#mobileMenu").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
$("#toolSearch").addEventListener("input",renderTools);$("#categoryFilter").addEventListener("change",renderTools);
$("#promptSearch").addEventListener("input",renderPrompts);$("#promptCategory").addEventListener("change",renderPrompts);
$("#globalSearch").addEventListener("keydown",e=>{if(e.key==="Enter"){const q=e.target.value.trim();navigate("ferramentas");$("#toolSearch").value=q;renderTools()}});
$("#generatorForm").addEventListener("submit",e=>{e.preventDefault();const format=$("#format").value,subject=$("#subject").value.trim(),goal=$("#goal").value;const result=`${format.toUpperCase()}\\n\\nTEMA: ${subject}\\nOBJETIVO: ${goal}\\n\\nGANCHO\\nVocê já pensou em como ${subject.toLowerCase()} pode fazer diferença?\\n\\nDESENVOLVIMENTO\\n1. Apresente o contexto do assunto em uma frase.\\n2. Explique uma dica prática e mostre um exemplo.\\n3. Destaque um erro comum e como evitá-lo.\\n\\nENCERRAMENTO\\nResuma o principal aprendizado e convide a pessoa a compartilhar uma dúvida.\\n\\nNOTA: modelo inicial gerado localmente. Revise e adapte antes de publicar.`;$("#generatedOutput").textContent=result;$("#generatedOutput").classList.remove("empty-state");$("#copyOutput").disabled=false});
$("#copyOutput").addEventListener("click",()=>copyText($("#generatedOutput").textContent));
renderTools();renderPrompts();renderTutorials();renderNews();