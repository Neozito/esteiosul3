ESTEIO SUL — SITE COMPLETO COM FORMULÁRIO POWER CRM | NOVEMBRO/2026

PUBLICAÇÃO
1. Faça backup da versão publicada.
2. Extraia o ZIP.
3. Envie o CONTEÚDO da pasta esteiosul_site para o public_html da hospedagem.
4. Mantenha intactas as pastas assets/css, assets/js e assets/img.
5. Atualize o navegador (Ctrl+F5) para descartar cache.

INTEGRAÇÃO POWER CRM
- O formulário fornecido pela cliente foi incorporado na HOME (seção "Simulação") e na página simulacao.html.
- Todos os botões de "Simular" da home direcionam à seção integrada; o menu e demais páginas direcionam à simulacao.html.
- O formulário antigo de simulação que abria o WhatsApp foi retirado. Os formulários gerais de CONTATO/ASSOCIADO permanecem no WhatsApp.
- Códigos internos originais preservados: pwrCmpnHsh, pwrFrmCode (YGvwx9Oe), pwrPplnClmn, pwrFnlStg e pwrLdSrc.
- Scripts e estilos oficiais são carregados diretamente de resources.powercrm.com.br, conforme o código recebido da cliente.
- Tipo de veículo "Caminhão ou micro-ônibus" ocultado da lista no site, alinhado ao posicionamento comercial; confirme com o CRM caso seja necessário ajustar também no painel.
- Adicionado acesso alternativo ao formulário oficial em https://cotacao.me/YGvwx9Oe caso haja indisponibilidade de recursos externos.

VERIFICAÇÃO OBRIGATÓRIA ANTES DE COLOCAR EM PRODUÇÃO
- Na hospedagem real, teste os selects dependentes: tipo > marca > ano > modelo e estado > cidade.
- Preencha uma cotação TESTE autorizada e confirme com a equipe da Esteio Sul que ela entrou no funil correto do Power CRM.
- Verifique na ferramenta do navegador se scripts externos e requisições do Power CRM não são bloqueados por CSP/adblock.
- O envio real NÃO pôde ser validado neste pacote: depende dos servidores externos e da conta da associação.
- Não é necessário banco de dados, PHP ou token próprio neste site para usar o embed do fornecedor.
- Não altere os 5 valores de campos ocultos sem orientação da Esteio Sul/Power CRM.

PÁGINAS E CONTEÚDOS PRESERVADOS
- Site responsivo com imagens, marca, hero com troca automática a cada 4 segundos e navegação manual (carro, moto, caminhonete), seções comerciais, depoimentos, parceiros, rodapé e demais páginas originais.
- Matriz em Cascavel + três filiais: Maringá, Chapecó e Pontal do Paraná, preservadas.
- WhatsApp e telefones do ZIP original preservados. Confirme os números atualizados com a associação.
- Contatos genéricos e serviços ao associado continuam com o funcionamento de WhatsApp já existente.

ARQUIVOS PRINCIPAIS
index.html — Formulário oficial integrado na home.
simulacao.html — Página exclusiva de cotação oficial integrada.
assets/css/powercrm-integration.css — Identidade visual do formulário.
assets/js/powercrm-integration.js — Apenas apresentação da opção de veículo.
assets/css/style.css — Demais estilos existentes.
assets/js/script.js — Interações do site e formulários de contato via WhatsApp.

AJUSTE FINAL DO HERO
- Quadro lateral direito de simulação removido da primeira tela.
- O texto principal, os botões de ação, a imagem de fundo e a navegação por veículos foram preservados.
- O formulário Power CRM permanece na seção Simulação da página inicial e em simulacao.html.

AJUSTE DO HERO — ROTAÇÃO AUTOMÁTICA
- As imagens de carro, moto e caminhonete alternam automaticamente a cada 4 segundos, em ciclo contínuo.
- Os botões de navegação e setas continuam funcionando; a contagem recomeça após cada clique.
- O quadro lateral direito permanece removido e o formulário oficial Power CRM permanece na seção Simulação.
