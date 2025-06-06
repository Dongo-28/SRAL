# SRAL - Sistema de Reserva de Alojamento Local

## 📌 Sobre o Projeto

O SRAL é uma plataforma inovadora que conecta proprietários de imóveis com potenciais hóspedes, facilitando a reserva de alojamentos locais. Este sistema permite que utilizadores pesquisem, reservem e gerenciem alojamentos de forma intuitiva e segura.

## 🚀 Tecnologias Utilizadas

### Frontend
- React.js (v17.0.2)
- React Router DOM (v5.2.0)
- Axios (v0.21.1)
- Bootstrap (v5.1.3)
- Formik com Yup para validação

### Backend
- Node.js (v20.x LTS)
- Express.js (v4.17.1)
- MongoDB com Mongoose (v8.14.1)
- JWT para autenticação
- Bcrypt para hash de senhas

## 🛠️ Instalação

### Pré-requisitos
- Node.js (v20.x LTS)
- npm
- MongoDB (local ou Atlas)

### Passos para Instalação

1. Clona o repositório:
   ```bash
   git clone https://github.com/tu_usuario/SRAL.git
   cd SRAL

2. Instala as dependências:
# Para o backend
 cd backend
 npm install

# Para o frontend
 cd ../frontend
 npm install

3. Configura as variáveis de ambiente:

Cria um ficheiro .env na pasta backend com as seguintes variáveis:
 MONGO_URI=tua_string_de_conexao_mongodb
 JWT_SECRET=tua_chave_secreta
 PORT=5000

4. Inicia o servidor backend:
 cd backend
 npm run dev

5. Inicia o frontend:
 cd ../frontend
 npm start

🎯 Funcionalidades Principais
✅ Registo e autenticação de utilizadores
✅ Gestão de propriedades (listagem, criação, edição)
✅ Sistema de reservas com calendário de disponibilidade
✅ Comunicação entre proprietários e hóspedes
✅ Pesquisa e filtragem de propriedades

📄 Licença
Este projeto está sob a licença MIT. Consulta o ficheiro LICENSE para mais detalhes.

🤝 Contribuição
Contribuições são bem-vindas! Para contribuir:

Faz um fork do projeto
Cria uma branch para a tua feature (git checkout -b feature/nova-feature)
Faz commit das tuas alterações (git commit -m 'Adiciona nova feature')
Faz push para a branch (git push origin feature/nova-feature)
Abre um Pull Request