## Junno

Stack: NextJS (React and Node), Prisma, Supabase, Clouflare R2

## Requisitos

### Requisitos Funcionais (RFs) Customer:
- [] Deve ser possível agendar serviços;
- [] Deve ser possivel cancelar agendamentos;

### Requisitos Funcionais (RFs) Partner:
- [] Deve ser possível confirmar agendamentos;
- [] Deve ser possivel cancelar agendamentos;
- [] Deve ser possivel cadastrar serviços;
- [] Deve ser possivel editar serviços;
- [] Deve ser possivel habilitar/desabilitar serviços;

### Regras de Negócio (RNs)
- [] Os cancelamentos devem ser feitos em até 2hrs antes do dia agendado e horário;
- [] Só deve ser confirmar agendamentos se houver horário disponível no dia;

### Requisitos Não Funcionais (RNFs)
- [] Login social, conexao com a agenda do google (se for o caso);
- [] Utilização do Clouflare R2 para upload de arquivos;
- [] O upload deve ser feito diretamente pelo front-end utilizando Presigned URLs.

## Anotações