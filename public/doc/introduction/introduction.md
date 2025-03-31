# Boilerplate Angular Universal + Material + Firebase 🚀

Clone, configure e comece a desenvolver rapidamente!
📺 Vídeo explicativo no [Link - YouTube](https://www.youtube.com/playlist?list=PLMy95_4XE08P3_C1Y5_23HS6RoQz8sDUD)

[_Atenção_ - O projeto continua sendo atualizado, porém estou levando ele para outro patamar, clique aqui.](https://github.com/Vida-Fullstack/NgVidaDeploy)

```
1️⃣ Altere o nome da pasta curso-angular-infra-firebase para NOME-DO-PROJETO
2️⃣ VSCODE nas buscas ( lupinha ) altere todos curso-angular-infra-firebase para NOME-DO-PROJETO
```

## 🔥 O que é o Firebase?

O Firebase é uma plataforma do Google que fornece serviços de backend para aplicativos web e mobile. Ele facilita o desenvolvimento ao oferecer banco de dados, autenticação, hospedagem, funções serverless e outras ferramentas sem que o desenvolvedor precise gerenciar servidores.

💡 Resumo: O Firebase é um Backend-as-a-Service (BaaS), ou seja, um serviço que permite desenvolver aplicações sem precisar configurar um servidor próprio.

## 🏗️ Arquitetura do Firebase é Serverless

```
1️⃣ Você escreve o código da sua aplicação
2️⃣ O provedor (Google Cloud, AWS, Azure) executa sob demanda
3️⃣ Não há necessidade de configurar ou manter servidores
4️⃣ O serviço escala automaticamente e você paga apenas pelo uso
```

## 🔥 Benefícios do Serverless

```
✅ Sem necessidade de gerenciar servidores
✅ Escalabilidade automática
✅ Custo reduzido (paga só pelo que usar)
✅ Mais rápido para desenvolver
```

## 📊 Vantagens do Firebase

```
✅ Fácil de integrar com apps Web e Mobile
✅ Sincronização em tempo real (ideal para chats, dashboards)
✅ Escalabilidade automática pelo Google Cloud
✅ Autenticação integrada com login social
```

## 🦓 Validação de Dados com Zod

O Zod é uma biblioteca TypeScript-first para validação de esquemas de dados. Ele é útil para garantir que os dados recebidos na aplicação tenham o formato esperado, prevenindo erros em formulários, chamadas de API e outras interações.

### 🔹 Como usar

```
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(2, "O nome precisa ter pelo menos 2 caracteres"),
  age: z.number().min(18, "A idade mínima é 18"),
  email: z.string().email("E-mail inválido"),
});

const userData = {
  name: "João",
  age: 25,
  email: "joao@email.com",
};

const result = userSchema.safeParse(userData);

if (!result.success) {
  console.error(result.error.format());
} else {
  console.log("Dados válidos:", result.data);
}
```

## 🎨 Estrutura SCSS - SMECSS

Este projeto segue a estrutura SMECSS para organização dos estilos SCSS, garantindo modularidade e escalabilidade.

### 📁 Estrutura de pastas

```
scss
│── abstract/       # Variáveis globais e mixins
│   ├── variables.scss
│
│── animations/     # Animações CSS
│
│── base/           # Estilos base (reset, tipografia, helpers)
│
│── components/     # Componentes reutilizáveis (botões, cards, modais)
│
│── core/           # Configuração do projeto (estilos globais, fontes, etc.)
│
│── layout/         # Grid, containers e estrutura da página
│
│── pages/          # Estilos específicos para páginas
│
│── themes/         # Diferentes temas de cores e estilos
│
│── tools/          # Funções e mixins utilitários
│
│── vendors/        # Estilos de bibliotecas de terceiros ( já instalado bootstrap grids )
```

### 🔹 Como usar

Para garantir organização, siga estas diretrizes:

```
abstract/ → Defina variáveis ($primary-color, $spacing, etc.).
components/ → Estilize componentes reutilizáveis.
layout/ → Estruture o layout global da aplicação.
pages/ → Estilos exclusivos para páginas específicas.
themes/ → Diferentes estilos visuais (modo claro/escuro).
```

### ⚙️ Função utilitária: rem-calc

Esta função converte pixels para rem, facilitando a criação de estilos responsivos.
Facilita o uso de rem sem precisar calcular manualmente.
Mantém a consistência no design responsivo.
Permite ajustar tamanhos facilmente.

### 📌 Arquivo: scss/tools/rem-calc.scss

```
@function rem-calc($size) {
    $value: calc($size / 16);
    @return #{$value}rem;
}
```

### 🔹 Como usar

Para utilizar a função no projeto, basta importar o arquivo rem-calc.scss:

```
@use '@tools/rem-calc' as fn;

.element {
    font-size: fn.rem-calc(20); // 1.25rem
    padding: fn.rem-calc(16); // 1rem
}
```

## 🛠️ Cypress local

```
npx cypress cache clear
npx cypress install --force
```

## 🐺 Husky + Prettier + Eslint

Para garantir qualidade de código e evitar commits com erros, este projeto usa Husky para pre-commit.

### 🔧 Configuração

### ✅ 1 - Inicialize o Husky:

```
npx husky init
```

### ✅ 2 - No arquivo .husky/pre-commit, substitua:

```
#!/usr/bin/env sh
npx lint-staged
```

### ✅ 3 - No arquivo .husky/\_/husky.sh, substitua:

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
```
