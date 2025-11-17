# Sistema-de-rastreio-de-pets-e-petshop
# Sistema de Rastreio de Pets Perdidos - Backend

Este é o backend do sistema de rastreio de pets perdidos, desenvolvido em **Python** com **Flask** e banco de dados **MySQL**. Ele permite gerenciar usuários e pets, realizando operações de **CRUD** (Create, Read, Update, Delete).

## Tecnologias utilizadas

- Python 3.x
- Flask
- MySQL (usando mysql-connector-python)
- HTML/JS para interface básica (templates)

## Funcionalidades

### Usuários
- Cadastro de novos usuários
- Listagem de usuários
- Edição de dados do usuário
- Exclusão de usuário

### Pets
- Cadastro de novos pets
- Listagem de pets por usuário
- Edição de dados do pet
- Exclusão de pet

## Estrutura do projeto
servidor_pets/ │
├─ app.py                # Arquivo principal do Flask
├─ requirements.txt      # Dependências do projeto
├─ pets_perdidos.sql     # Script SQL para criar banco e tabelas
├─ README.md             # Este arquivo
└─ templates/            # Arquivos HTML para interface └─ index.html

## Instalação

1. Clonar o repositório:
``bash
git clone https://github.com/camilakaliny15-jpg/Sistema-de-rastreio-de-pets-e-petshop.git
cd Sistema-de-rastreio-de-pets-e-petshop

2. Instalar dependências:
pip install -r requirements.txt

3. Rodar o servidor:
python app.py

O servidor ficará disponível em http://localhost:5000 ou no IP da máquina.


   
