# Requisitos iniciais

- **Criar o banco de dados** usando o arquivo "database.sql" no MySQL
- Ter o **PHP 8.4** instalado. **No mínimo 8.2**.
- Se em local, **inicializar o Apache** e colocar o projeto sob visibilidade deste servidor, no diretório htdocs ou workbench
- **Configurar o arquivo .env** com as credenciais do banco de dados

# **Documentação de Inicialização do Projeto**

Este projeto é composto por um back-end em PHP e um front-end em React. Abaixo estão as instruções detalhadas para iniciar ambos os ambientes de desenvolvimento.

---

## **1. Inicialização do Back-end (PHP)**

O back-end está desenvolvido em PHP e utiliza um servidor embutido para rodar a aplicação.

### **Passos para iniciar o back-end:**

#### 1.1. **Certifique-se de ter o PHP instalado em sua máquina.** Se não tiver, você pode [baixar o PHP](https://www.php.net/downloads) e instalá-lo.
   
#### 1.2. **Abra o terminal/console** e navegue até o diretório do projeto onde o back-end está localizado.

Exemplo de navegação para o diretório do back-end:
```bash
cd /caminho/para/seu/projeto/skejul-ipm
```

#### 1.3. **Inicie o servidor embutido do PHP** executando o comando abaixo. Ele iniciará o servidor na porta 8000, que é a porta padrão do back-end.

```bash
php -S localhost:8000 -t public
```
- localhost:8000 é o endereço onde o back-end estará disponível.
- -t public especifica o diretório raiz do servidor, onde o arquivo index.php está localizado.

#### 1.4. O back-end estará acessível através do endereço http://localhost:8000.

## **2. Inicialização do Front-end (React)**

O front-end do projeto foi desenvolvido usando React e gerenciado com npm (Node Package Manager).

### Passos para inicializar o Frontend

Certifique-se de ter o Node.js instalado. Você pode verificar se o Node.js está instalado com o comando:

#### 2.1. **Certifique-se de ter o Node.js instalado.** Você pode verificar se o Node.js está instalado com o comando:

```bash
node -v
```
Funciona melhor com versão acima de 18.0.0.

#### 2.2. **Abra o terminal/console** e navegue até o diretório onde o front-end está localizado.

```bash
cd /caminho/para/seu/projeto/skejul-ipm/frontend/skejul-frontend
```

#### 2.3. Instale as dependências do front-end executando o seguinte comando. Isso instalará todos os pacotes necessários definidos no package.json:

```bash
npm install
```

#### 2.4. Inicie o servidor de desenvolvimento com o comando abaixo. Isso irá rodar o front-end localmente, normalmente na porta 3000:
```bash
npm run dev
```

## **3. Fluxo de execução**

### Back-end: O back-end PHP estará acessível na porta 8000 e pode ser acessado através de endpoints de API (por exemplo, http://localhost:8000/api).
### Front-end: O front-end React será executado na porta 3000, consumindo as APIs do back-end PHP para interagir com o usuário.
### Processo de Desenvolvimento:
- Sempre que você realizar modificações no back-end, reinicie o servidor PHP.
- Modifique o front-end em src e, ao salvar, o Vite atualizará automaticamente a interface.

## **4. Configuração Adicional**
### Banco de Dados:
- Certifique-se de que o banco de dados está configurado corretamente e em funcionamento no seu ambiente local.
- O script database.sql pode ser usado para criar o banco de dados inicial se necessário.

Agora você tem as instruções completas para inicializar e rodar o seu projeto com back-end em PHP e front-end em React! Se houver algum outro ajuste ou necessidade, fique à vontade para perguntar. 😊

## Árvore de diretórios

- ├───app -> (Backend do projeto em PHP, sob padrão MVC)
- │   ├───Controllers
- │   ├───Core
- │   └───Services
- ├───config
- ├───frontend -> (Backend do projeto em ReactJS)
- │   ├───node_modules
- │   └───skejul-frontend
- │       ├───node_modules
- │       ├───public
- │       └───src
- │           ├───assets
- │           ├───components
- │           ├───context
- │           ├───pages
- │           └───services
- ├───node_modules
- ├───public
- └───vendor