# Calculadora de Investimentos - Grupo Primo

Uma calculadora de investimentos desenvolvida em Next.js que permite comparar o rendimento entre a Taxa Selic e o Fundo Arca do Grupo Primo.

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 20 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd calculadora-investimentos-primo
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**

```bash
npm run dev
```

4. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🧮 Funcionalidades

- **Cálculo de Investimentos**: Compare rendimentos entre Selic (9,25% a.a.) e Fundo Arca (18% a.a.)
- **Interface Responsiva**: Funciona perfeitamente em desktop e mobile
- **Taxa Selic em Tempo Real**: Opção de usar dados reais da API do Banco Central
- **Controles Intuitivos**: Sliders para definir valores de investimento e prazo

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com SSR
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Radix UI** - Componentes acessíveis
- **Jest** - Testes unitários e de interface

## 📊 Regras de Negócio

- **Taxa Selic**: 9,25% ao ano (valor padrão) ou dados reais da API
- **Fundo Arca**: 18% ao ano
- **Dias úteis**: 252 dias por ano
- **Fórmula**: M = P × (1 + i)^(t/252)

## 🧪 Testes

Execute os testes com:

```bash
npm run test
```

### Cobertura de Testes

- ✅ **Testes de Unidade**: Validação dos cálculos de investimento
- ✅ **Testes de Interface**: Interação com sliders e atualização de valores

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:

- 💻 Desktop
- 📱 Mobile
- 📟 Tablet

## 🌟 Diferenciais Implementados

- ✅ **Testes Unitários**: Cobertura da lógica de cálculo
- ✅ **Testes de Interface**: Validação da interação do usuário
- ✅ **SSR**: Server Side Rendering com Next.js, integração com dados da Selic do Banco Central
- ✅ **Responsivo**: Design adaptativo para dispositivos

Este projeto foi desenvolvido como teste técnico para o Grupo Primo.
