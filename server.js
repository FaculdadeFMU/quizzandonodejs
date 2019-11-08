var express = require('express'),
    mysql = require('mysql'),
    cors = require('cors');

var port = process.env.PORT || 3032;
var app = express();

app.use(cors());
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.listen(port, function() {
    console.log('servidor iniciado na porta ' + port);
})

app.get
(
    '/',
    function ( req, res ) {
        res.status(200).json({ msg : 'Api funcionando' })
    }
)

app.get
(
  '/getBasico',
  function ({ query: { email, senha } }, res) {
    console.log(email, senha);
    var _dbConnection = dbConnection();
    var _callback = function (error, result) {
      return {
        _dbConnection,
        res,
        email,
        senha
      };

    }
    var retornoBuscaSQL = new buscaSQL(_dbConnection, _callback);
    retornoBuscaSQL.getBasico()
  }
)

app.get
  (
    '/inputBasico',
    function ({ query: {nome,email,senha,confirmacaoSenha} }, res) {
      var _dbConnection = dbConnection();
      var _callback = function (error, result) {
        return {
          _dbConnection,
          res,
          nome,
          email,
          senha,
          confirmacaoSenha
         };

      }
      var retornoInsertSQL = new insertSQL(_dbConnection,_callback);
      retornoInsertSQL.inputBasico()
    }
  )

  app.get
  (
    '/inputAtividade',
    function ({ query: {nomeAtividade,usuario_id} }, res) {
      console.log('atividade: ' + nomeAtividade);
      console.log('usuario: ' + usuario_id)
      var _dbConnection = dbConnection();
      var _callback = function (error, result) {
        return {
          _dbConnection,
          res,
          nomeAtividade,
          usuario_id
         };

      }
      var retornoAtividadeSQL = new AtividadeSQL(_dbConnection, _callback);
      retornoAtividadeSQL.inputAtividade()
    }
  )
  app.get
(
  '/getatividade',
  function ({ query: {nomeAtividade,usuario_id} }, res) {
    console.log('atividade: ' + nomeAtividade);
    console.log('usuario: ' + usuario_id)
    var _dbConnection = dbConnection();
    var _callback = function (error, result) {
      return {
        _dbConnection,
        res,
        nomeAtividade,
        usuario_id
       };

    }
    var retornoAtividadebuscaSQL = new AtividadebuscaSQL(_dbConnection, _callback);
    retornoAtividadebuscaSQL.getatividade()
  }
)

app.get
  (
    '/inputgrupos',
    function ({ query: { nomeGrupo, atividade_id } }, res) {
      var _dbConnection = dbConnection();
      var _callback = function (error, result) {
        return {
          _dbConnection,
          res,
          nomeGrupo,
          atividade_id
        };

      }
      var retornoinsertGruposSQL = new insertGruposSQL(_dbConnection, _callback);
      retornoinsertGruposSQL.inputgrupos()
    }
  )

  app.get
(
    '/getPergunta',
    function( req, res ) {
        var _dbConnection = dbConnection();
        var _callback = function (error, result) {
            _dbConnection.destroy();
            res.status(200).send(result);
        }

        var retornoPerguntasSQL = new PerguntasSQL(_dbConnection, _callback);
        retornoPerguntasSQL.getPergunta()
    }
)

app.get
(
    '/getQuizzando',
    function( req, res ) {
        var _dbConnection = dbConnection();
        var _callback = function (error, result) {
            _dbConnection.destroy();
            res.status(200).send(result);
        }

        var retornoQuizzSQL = new QuizzSQL(_dbConnection, _callback);
        retornoQuizzSQL.getQuizzando()
    }
)
app.get
(
  '/getBasicoTeste',
  function ({ query:{ idgrupo, idintegrante }}, res) {
    console.log(idgrupo, idintegrante);
    var _dbConnection = dbConnection();
    var _callback = function (error, result) {
      return {
        _dbConnection,
        res,
        idgrupo,
        idintegrante
      };

    }

    var retornobuscaQuizzSQL = new buscaQuizzSQL(_dbConnection, _callback);
    retornobuscaQuizzSQL.getBasicoTeste()
  }
)
app.get
  (
    '/getGrupoquizz',
    function ({ query: { nomeGrupo, CodigoAtiv } }, res) {
      var _dbConnection = dbConnection();
      var _callback = function (error, result) {
        return {
          _dbConnection,
          res,
          nomeGrupo,
          CodigoAtiv
        };

      }
      var retornobuscaGrupoSQL = new buscaGrupoSQL(_dbConnection, _callback);
      retornobuscaGrupoSQL.getGrupoquizz()
    }
  )
  app.get
(
    '/getTeste1',
    function ({ query: { nomeGrupo, CodigoAtiv } }, res) {
      console.log(nomeGrupo, CodigoAtiv);
      var _dbConnection = dbConnection();
      var _callback = function (error, result) {
        return {
          _dbConnection,
          res,
          nomeGrupo,
          CodigoAtiv
        };
      }

        var retornoTesteSQL = new TesteSQL(_dbConnection, _callback);
        retornoTesteSQL.getTeste1()
    }
)
app.get
  (
    '/inputintegrantes',
    function ({ query: { nomeRep, email,Ra,idGrupo,nome1,Ra1,nome2,Ra2,nome3,Ra3} }, res) {
      console.log(nomeRep, email,Ra,idGrupo,nome1,Ra1,nome2,Ra2,nome3,Ra3);
      var _dbConnection = dbConnection();
      var _callback = function (error, result) {
        return {
          _dbConnection,
          res,
          nomeRep,
          email,
          Ra,
          idGrupo,
          nome1,
          Ra1,
          nome2,
          Ra2,
          nome3,
          Ra3
        };
      }
      var retornoinsertintegrantesSQL = new insertintegrantesSQL(_dbConnection, _callback);
        retornoinsertintegrantesSQL.inputintegrantes()
    }
  )

  app.get
  (
    '/inputPerguntas1',
    function ({ query: { enunciado, alternativaA, alternativaB, alternativaC, alternativaD, altCorreta, grupoPerguntas_id } }, res) {
      console.log('Chegou aqui nos perguntas');
      var _dbConnection = dbConnection();
      var _callback = function (error, result) {
        return {
          _dbConnection,
          res,
          enunciado,
          alternativaA,
          alternativaB,
          alternativaC,
          alternativaD,
          altCorreta,
          grupoPerguntas_id
        };

      }
      var retornoinsertPerguntaSQL = new insertPerguntaSQL(_dbConnection, _callback);
      retornoinsertPerguntaSQL.inputPerguntas1()
    }
  )



/* CONEXÃO BANCO DE DADOS */
var dbConnection = function () {
    return mysql.createConnection
    (
        {
            host: 'remotemysql.com',
            user: 'lMQkPgIdBK',
            password: 'OSOnu5R4Ou',
            database: 'lMQkPgIdBK',
            multipleStatements: true,

        }
    )
}
/* MODEL */
function buscaSQL(dbConnection, callback) {
    this._dbConnection = dbConnection;
    this._callback = callback;
}
buscaSQL.prototype.getBasico = function () {
  const callbackRes = this._callback();
  callbackRes._dbConnection.query
    (
      ' SELECT * FROM usuario WHERE email=? and senha=?', [callbackRes.email,callbackRes.senha], function (err, result, fields) {
        if (err) throw err;
        if (result.length) {
          callbackRes.res.status(200).send({
            success: 'Login com sucesso',
            statusCode: 200,
            data: result
          })
        } else {
          callbackRes.res.status(404).send({
            success: 'Usuário ou senha inválidos',
            statusCode: 404,
          })
        }
      }
    )
}

function insertSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}


insertSQL.prototype.inputBasico = function () {
  const callbackRes = this._callback();
  callbackRes._dbConnection.query
    (
      "INSERT INTO `usuario`(`nome`,`email`, `senha`) VALUES ('"+callbackRes.nome+"','"+callbackRes.email+"','"+callbackRes.senha+"')",
    );
  callbackRes.res.status(200).send({
    success: 'Usuário inserido com sucesso',
    statusCode: 200,
  });
}


function AtividadeSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}

AtividadeSQL.prototype.inputAtividade = function () {
  const callbackRes = this._callback();
  callbackRes._dbConnection.query
    (
      "INSERT INTO `atividade`(`nomeAtividade`,`usuario_id`) VALUES ('"+callbackRes.nomeAtividade+"','"+callbackRes.usuario_id+"')", function(err, result, fields){
        if (err) {
          // handle error
        }else{
           // Your row is inserted you can view
          console.log(result.insertId);
          callbackRes.res.status(200).send({
            success: 'Usuário inserido com sucesso',
            statusCode: 200,
            data : result
          });
        }
      }
    );
}

function AtividadebuscaSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}

AtividadebuscaSQL.prototype.getatividade = function () {
const callbackRes = this._callback();
callbackRes._dbConnection.query
  (
    ' SELECT * FROM atividade WHERE nomeAtividade=?',[callbackRes.nomeAtividade], function (err, result, fields) {
      if (err) throw err;
      if (result.length) {
        callbackRes.res.status(200).send({
          success: 'Login com sucesso',
          statusCode: 200,
          data: result
        })
      } else {
        callbackRes.res.status(404).send({
          success: 'Usuário ou senha inválidos',
          statusCode: 404,
        })
      }
    }
  )
}

function insertGruposSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}


insertGruposSQL.prototype.inputgrupos = function () {
  const callbackRes = this._callback();
  callbackRes._dbConnection.query
  (
    "INSERT INTO `grupoPerguntas`(`nomeGrupo`, `atividade_id`) VALUES ('" + callbackRes.nomeGrupo + "','" + callbackRes.atividade_id + "')", function(err, result, fields){
      if (err) {
        console.log('Erro: ' + err);
      }else{
        console.log(result.insertId);
        callbackRes.res.status(200).send({
          success: 'Usuário inserido com sucesso',
          statusCode: 200,
          data : result
        });
      }
    }
  );
}

function PerguntasSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}
PerguntasSQL.prototype.getPergunta = function () {
  this._dbConnection.query
  (
    'SELECT * FROM `perguntas` INNER JOIN grupoPerguntas ON perguntas.grupoPerguntas_id = grupoPerguntas.id_grupoPergunta WHERE grupoPerguntas_id=1',
      this._callback
  );
}

function QuizzSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}
QuizzSQL.prototype.getQuizzando = function () {
  this._dbConnection.query
  (
    'SELECT * FROM atividade WHERE id_atividade',
      this._callback
  );
}

function buscaQuizzSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}

buscaQuizzSQL.prototype.getBasicoTeste = function () {
  const callbackRes = this._callback();
  callbackRes._dbConnection.query
    (
      'SELECT a.idGrupo,a.nomeGrupo,b.nomeAtividade,b.id_atividade,id_integrante,nome,nome1,nome2,nome3 FROM `integrante` INNER JOIN grupoPessoas AS a ON integrante.idGrupo = a.idGrupo INNER JOIN atividade AS b ON a.id_atividade = b.id_atividade WHERE b.id_atividade=? and a.idGrupo=?',[callbackRes.idintegrante,callbackRes.idgrupo],function (err, result, fields) {
        if (err) throw err;
        if (result.length) {
          callbackRes.res.status(200).send({
            success: 'Login com sucesso',
            statusCode: 200,
            data: result
          })
        } else {
          callbackRes.res.status(404).send({
            success: 'Usuário ou senha inválidos',
            statusCode: 404,
          })
        }
      }
    )

}


function buscaGrupoSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}
buscaGrupoSQL.prototype.getGrupoquizz = function () {
  const callbackRes = this._callback();
  callbackRes._dbConnection.query
    (
      "INSERT INTO grupoPessoas (`nomeGrupo`, `id_atividade`) VALUES ('"+callbackRes.nomeGrupo+"','"+callbackRes.CodigoAtiv+"')",
    );
  callbackRes.res.status(200).send({
    success: 'Grupo inserido com sucesso',
    statusCode: 200,
  });
}

function TesteSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}
TesteSQL.prototype.getTeste1 = function () {
  const callbackRes = this._callback();
  callbackRes._dbConnection.query
  (
    'SELECT * FROM grupoPessoas WHERE nomeGrupo=? ',[callbackRes.nomeGrupo],function (err, result, fields) {
      if (err) throw err;
      if (result.length) {
        callbackRes.res.status(300).send({
          success: 'Grupo inserido com sucesso',
          statusCode: 300,
          data: result
        })
      } else {
        callbackRes.res.status(404).send({
          success: 'Usuário ou senha inválidos',
          statusCode: 404,
        })
      }
    }
  );
}

function insertintegrantesSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}
insertintegrantesSQL.prototype.inputintegrantes = function () {
  const callbackRes = this._callback();
  callbackRes._dbConnection.query
    (
      "INSERT INTO `integrante`(`nome`, `email`,`Ra`,`idGrupo`,`nome1`,`Ra1`,`nome2`,`Ra2`, `nome3`,`Ra3`) VALUES ('"+callbackRes.nomeRep+"','"+callbackRes.email+"','"+callbackRes.Ra+"','"+callbackRes.idGrupo+"','"+callbackRes.nome1+"','"+callbackRes.Ra1+"','"+callbackRes.nome2+"','"+callbackRes.Ra2+"','"+callbackRes.nome3+"','"+callbackRes.Ra3+"')",
    );
  callbackRes.res.status(200).send({
    success: 'Grupo inserido com sucesso',
    statusCode: 200,
  });
}

function insertPerguntaSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}


insertPerguntaSQL.prototype.inputPerguntas1 = function () {
  console.log('chegou aqui!');
  const callbackRes = this._callback();
    callbackRes._dbConnection.query
    (
      "INSERT INTO `perguntas`(`enunciado`, `alternativaA`, `alternativaB`, `alternativaC`, `alternativaD`, `altCorreta`, `grupoPerguntas_id`) VALUES ('"+ callbackRes.enunciado+ "','" +callbackRes.alternativaA+ "','" +callbackRes.alternativaB+ "','" +callbackRes.alternativaC+ "','" +callbackRes.alternativaD+ "','" +callbackRes.altCorreta+ "','" +callbackRes.grupoPerguntas_id+ "')", function(err, result, fields){
        if (err) {
          console.log('Erro: ' + err);
        }else{
          console.log(result.insertId);
          callbackRes.res.status(200).send({
            success: 'Usuário inserido com sucesso',
            statusCode: 200,
            data : result
          });
        }
      }
    );
}

