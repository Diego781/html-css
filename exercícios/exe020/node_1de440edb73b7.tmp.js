<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Hover</title>
    <style>
        body{
            font-family: Arial, Helvetica, sans-serif;

        }
        div > p {
            display:none;


        }
        div:hover > p{
            display:block;
            color:white;
            background-color:red;
            width: 300px;
        }
        div:hover{
            color:red;
        }

    </style>
</head>
<body>
    <h1>Exemplo de Hover</h1>
    <p>Passe o mouse sobre o texto abaixo</p>
    <div>Passe o mouse aqui
        <P>TEXTO ESCONDIDO...</P>
    </div>
    <p>Fim do exemplo</p>
</body>
</html>