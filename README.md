<h1 align="center"> Iniciando a aplicação: </h1>
<ol>
    <li>
        <h2> Passos para rodar a aplicação: </h2>
        <ol>
            <li>npm install</li>
            <li>npm run dev</li>
        </ol>
    </li>
    <li>
        <h2> Acesso ao banco de dados: </h2>
        <ol>
            <li>Crie um arquivo .env e insira seus dados. </li>
            <p> Siga o modelo do arquivo .env.example.</p>
        </ol>
    </li>
    <li>
        <h2> Criando as tabelas no seu banco de dados: </h2>
        <ol>
            <li>npm run migrations</li>
        </ol>
    </li>
</ol>

<h1 align="center"> Endpoints: </h1>

<h2> Projects: </h2>
<ol>
    <li>
        <p><strong>Create new project</p></strong>
    </li>
<p>Cria um novo projeto no banco de dados.</p>

<p><strong>URL:</strong></p> <img src="https://user-images.githubusercontent.com/102433664/223453699-7739a1d2-fd09-428b-90b2-b5c574a380b9.png" /> 
<p><strong>BODY:</strong></p> <img src="https://user-images.githubusercontent.com/102433664/223526604-4699adbe-ba09-4251-b285-f6b294a9248b.png" />
   
   <li>
        <p><strong>Get all project</p></strong>
    </li>
<p> Lista todos os projetos do banco de dados </p>

<p><strong>URL:</strong></p> <img src="https://user-images.githubusercontent.com/102433664/223561756-c57ec3d8-e0f9-4b33-a888-b5f480c9c993.png" /> 
    <li>
        <p><strong>Get project</p></strong>
    </li>
<p> Lista um projeto específico. </p>
<p> O usuário deve informar o <strong>id do projeto via path params.</strong> </p>

<p><strong>URL:</strong></p> <img src="https://user-images.githubusercontent.com/102433664/223562254-48e0d862-a982-4b58-b165-0d40299edeaf.png" />
    <li>
        <p><strong>Edit project</p></strong>
    </li>
<p> Editar um projeto específico. </p>
<p> O usuário deve informar o <strong>id do projeto via path params.</strong> </p>

<p><strong>URL:</strong></p> <img src="https://user-images.githubusercontent.com/102433664/223562992-d01f0383-2e1d-471b-a903-4d88e623d094.png" /> 
<p><strong>BODY:</strong></p> <img src="https://user-images.githubusercontent.com/102433664/223563192-89c825c3-0873-4ffe-80b6-e85cba774766.png" />
    <li>
        <p><strong>Delete project</p></strong>
    </li>
<p> deletar um projeto específico. </p>
<p> O usuário deve informar o <strong>id do projeto via path params.</strong> </p>

<p><strong>URL:</strong></p> <img src="https://user-images.githubusercontent.com/102433664/223563971-aab6c605-f910-4a60-9e77-552f9def74e2.png" /> 
</ol>

<h2> Tasks: </h2>

<ol>
    <li>
        <p><strong>Create new task</p></strong>
    </li>
<p>Cria uma nova tarefa no banco de dados.</p>

<p><strong>URL:</strong></p> <img src="https://user-images.githubusercontent.com/102433664/223564287-14f6ef64-5720-4ccf-b349-1f4f3c073c92.png" /> 
<p><strong>BODY:</strong></p> <img src="https://user-images.githubusercontent.com/102433664/223564376-430ff1f0-2201-4deb-b00c-a92d56f54d95.png" />
<p> O usuário precisa informar uma das três opções no status: <strong>Andamento</strong>, <strong>Teste</strong> ou <strong>Concluído</strong>, qualquer outro valor o banco de dados não irá aceitar.
   <li>
        <p><strong>Get Tasks From a Project</p></strong>
    </li>
<p> Lista todas as tarefas de um determinado projeto. </p>
<p> O usuário deve informar o <strong>id do projeto via path params.</strong> </p>
<p><strong>URL:</strong></p> <img src="https://user-images.githubusercontent.com/102433664/223565158-e474b070-b77d-4f8b-8a21-d7943ee243e9.png" /> 
    <li>
        <p><strong>Edit tasks</p></strong>
    </li>
<p> Editar uma tarefa específica. </p>
<p> O usuário deve informar o <strong>id da tarefa via path params.</strong> </p>

<p><strong>URL:</strong></p> <img src="https://user-images.githubusercontent.com/102433664/223565514-061f93f4-f307-4251-9743-ba2d1b25d9e3.png" /> 
<p><strong>BODY:</strong></p> <img src="https://user-images.githubusercontent.com/102433664/223565750-ee387841-93c1-4fcd-9593-a3b98adb9cab.png" />
    <li>
        <p><strong>Delete project</p></strong>
    </li>
<p> Deletar uma tarefa específica. </p>
<p> O usuário deve informar o <strong>id da tarefa via path params.</strong> </p>

<p><strong>URL:</strong></p> <img src="https://user-images.githubusercontent.com/102433664/223566141-1263959f-8672-44a3-b84b-6092c6900f1e.png" /> 
</ol>

 
