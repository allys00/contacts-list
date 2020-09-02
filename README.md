

# Lista de Contatos

## Endpoints
Base = "https://2izs90mgy8.execute-api.us-east-1.amazonaws.com/dev/v1/"

## Listar Contatos - GET
### URL: {base}/contacts

## Criar Contato - POST
### URL: {base}/contacts/
Body: {
  name:string,
  birthday: string,
  gender: 'male', 'female' 
}

## Listar Contato - GET
### URL: {base}/contacts/:id

## Deletar Contato - DELETE
### URL: {base}/contacts/:id

## Desativar Contato - PUT
### URL: {base}/contacts/:id/deactivate

