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
    function ({ query: { id_grupoPergunta } }, res) {
      var _dbConnection = dbConnection();
      var _callback = function (error, result) {
        return {
          _dbConnection,
          res,
          id_grupoPergunta,
        };

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


  app.get
  (
      '/getEstacao',
      function ({ query: { id_users } }, res) {
        var _dbConnection = dbConnection();
        var _callback = function (error, result) {
          return {
            _dbConnection,
            res,
            id_users,
          };

        }
          var retornoEstacaoSQL = new EstacaoSQL(_dbConnection, _callback);
          retornoEstacaoSQL.getEstacao()
      }
  )
  app.get
  (
      '/getAdmGrupo',
      function ({ query: { id_users } }, res) {
        var _dbConnection = dbConnection();
        var _callback = function (error, result) {
          return {
            _dbConnection,
            res,
            id_users,
          };

        }
          var retornoAdmGrupoSQL = new AdmGrupoSQL(_dbConnection, _callback);
          retornoAdmGrupoSQL.getAdmGrupo()
      }
  )
  app.get
  (
    '/getResposta',
    function ({ query: {grupo_id,id_grupoPergunta,atividade_id,qtdAcerto} }, res) {
      console.log(grupo_id,id_grupoPergunta,atividade_id,qtdAcerto);
      var _dbConnection = dbConnection();
      var _callback = function (error, result) {
        return {
          _dbConnection,
          res,
          grupo_id,
          id_grupoPergunta,
          atividade_id,
          qtdAcerto,

        };
      }
      var retornorankingSQL = new rankingSQL(_dbConnection, _callback);
        retornorankingSQL.getResposta()
    }
  )
  app.get
(
    '/getResp',
    function ({ query: {Codigoatividade} }, res) {
      console.log(Codigoatividade);
      var _dbConnection = dbConnection();
      var _callback = function (error, result) {
        return {
          _dbConnection,
          res,
          Codigoatividade,
       };
      }

        var retornoRespostaTelaSQL = new RespostaTelaSQL(_dbConnection, _callback);
        retornoRespostaTelaSQL.getResp()
    }
)
app.get
  (
      '/getAdmRanking',
      function ({ query: { id_users } }, res) {
        console.log(id_users);
        var _dbConnection = dbConnection();
        var _callback = function (error, result) {
          return {
            _dbConnection,
            res,
            id_users,
          };

        }
          var retornorAdmRanking = new AdmRanking(_dbConnection, _callback);
          retornorAdmRanking.getAdmRanking()
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
  const callbackRes = this._callback();
  callbackRes._dbConnection.query
  (
    'SELECT * FROM `perguntas` INNER JOIN grupoPerguntas ON perguntas.grupoPerguntas_id = grupoPerguntas.id_grupoPergunta WHERE grupoPerguntas_id=?',[callbackRes.id_grupoPergunta],
    function (err, result, fields) {
      if (err) throw err;
      if (result.length) {
        callbackRes.res.status(200).send({
          success: 'Pergunta com sucesso',
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
  const callbackRes = this._callback();
    callbackRes._dbConnection.query
    (
      "INSERT INTO `perguntas`(`enunciado`, `alternativaA`, `alternativaB`, `alternativaC`, `alternativaD`, `altCorreta`, `grupoPerguntas_id`) VALUES ('"+ callbackRes.enunciado+ "','" +callbackRes.alternativaA+ "','" +callbackRes.alternativaB+ "','" +callbackRes.alternativaC+ "','" +callbackRes.alternativaD+ "','" +callbackRes.altCorreta+ "','" +callbackRes.grupoPerguntas_id+ "')", function(err, result, fields){
        if (err) {
          console.log('Erro: ' + err);
        }else{
          callbackRes.res.status(200).send({
            success: 'Usuário inserido com sucesso',
            statusCode: 200,
            data : result
          });
        }
      }
    );
}

function EstacaoSQL(dbConnection, callback) {
  this._dbConnection = dbConnection;
  this._callback = callback;
}
EstacaoSQL.prototype.getEstacao = function () {
  const callbackRes = this._callback();
  callbackRes._dbConnection.query
  (
    'SELECT * FROM `grupoPerguntas` INNER JOIN atividade ON grupoPerguntas.atividade_id = atividade.id_atividade INNER JOIN usuario ON atividade.usuario_id = usuario.id_users WHERE id_users = ?',[callbackRes.id_users],
    function (err, result, fields) {
      if (err) throw err;
      if (result.length) {
        callbackRes.res.status(200).send({
          success: 'COnsultar Estação',
          statusCode: 200,
          data2: result
        })
      }
    }
  );
}
  function AdmGrupoSQL(dbConnection, callback) {
    this._dbConnection = dbConnection;
    this._callback = callback;
  }
  AdmGrupoSQL.prototype.getAdmGrupo = function () {
    const callbackRes = this._callback();
    callbackRes._dbConnection.query
    (
      'SELECT * FROM `grupoPessoas` INNER JOIN atividade ON  grupoPessoas.id_atividade = atividade.id_atividade INNER JOIN usuario ON atividade.usuario_id = usuario.id_users WHERE id_users = ?',[callbackRes.id_users],
      function (err, result, fields) {
        if (err) throw err;
        if (result.length) {
          callbackRes.res.status(200).send({
            success: 'Perguntas ',
            statusCode: 200,
            data3: result
          })
        }
      }
  );
  }

  function rankingSQL(dbConnection, callback) {
    this._dbConnection = dbConnection;
    this._callback = callback;
  }
  function rankingSQL(dbConnection, callback) {
    this._dbConnection = dbConnection;
    this._callback = callback;
  }
  rankingSQL.prototype.getResposta = function () {
    const callbackRes = this._callback();
    callbackRes._dbConnection.query
      (
        "INSERT INTO `resposta`(`grupo_id`, `pergunta_id`,`atividade_id`,`qtdAcerto`) VALUES ('"+callbackRes.grupo_id+"','"+callbackRes.id_grupoPergunta+"','"+callbackRes.atividade_id+"','"+callbackRes.qtdAcerto+"')",
        function (err, result, fields) {
        if (err) {
          console.log('Erro: ' + err);
        }else{
            callbackRes.res.status(300).send({
            success: 'Ranking',
            statusCode: 300,
            data4 : result
          });
        }
      }
      );
    }

  function RespostaTelaSQL(dbConnection, callback) {
    this._dbConnection = dbConnection;
    this._callback = callback;
  }
  RespostaTelaSQL.prototype.getResp = function () {
    const callbackRes = this._callback();
    callbackRes._dbConnection.query
    (
      'SELECT * FROM `resposta` INNER JOIN grupoPessoas ON resposta.grupo_id = grupoPessoas.idGrupo INNER JOIN atividade ON resposta.atividade_id = atividade.id_atividade WHERE atividade_id=? ORDER BY qtdAcerto DESC',[callbackRes.Codigoatividade],function (err, result, fields) {
        if (err) throw err;
        if (err) {
          console.log('Erro: ' + err);
        }else{
            callbackRes.res.status(200).send({
            success: 'Ranking',
            statusCode: 200,
            data5 : result
          });
        }
      }
    );
  }
  function AdmRanking(dbConnection, callback) {
    this._dbConnection = dbConnection;
    this._callback = callback;
  }
  AdmRanking.prototype.getAdmRanking = function () {
    const callbackRes = this._callback();
    callbackRes._dbConnection.query
    (
      'SELECT * FROM `resposta` INNER JOIN grupoPessoas ON resposta.grupo_id = grupoPessoas.idGrupo INNER JOIN atividade ON resposta.atividade_id = atividade.id_atividade INNER JOIN usuario ON atividade.usuario_id = usuario.id_users WHERE id_users = ?',[callbackRes.id_users],
      function (err, result, fields) {
        if (err) throw err;
        if (result.length) {
          callbackRes.res.status(200).send({
            success: 'Consultar Grupos',
            statusCode: 200,
            data2: result
          })
        }
      }
    );
  }

