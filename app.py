from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)  # libera CORS para todas as rotas

# Função para conectar ao banco
def conectar_banco():
    return mysql.connector.connect(
        host="db4free.net",      # ou seu host
        user="bd_pets",           # seu usuário do banco
        password="grupo@2025!",           # sua senha
        database="pets_perdidos"      # nome do seu banco
    )

# ================= USUÁRIOS =================

# Cadastrar usuário
@app.route("/cadastro_usuario", methods=["POST"])
def cadastro_usuario():
    dados = request.json
    nome = dados.get("nome")
    email = dados.get("email")
    senha = dados.get("senha")
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute(
            "INSERT INTO usuarios (nome, email, senha) VALUES (%s, %s, %s)",
            (nome, email, senha)
        )
        conexao.commit()
        cursor.close()
        conexao.close()
        return jsonify({"mensagem": "Usuário cadastrado com sucesso!"})
    except Exception as e:
        return jsonify({"erro": str(e)})

# Listar usuários
@app.route("/listar_usuarios", methods=["GET"])
def listar_usuarios():
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor(dictionary=True)
        cursor.execute("SELECT id, nome, email FROM usuarios")
        usuarios = cursor.fetchall()
        cursor.close()
        conexao.close()
        return jsonify(usuarios)
    except Exception as e:
        return jsonify({"erro": str(e)})

# Editar usuário
@app.route("/editar_usuario/<int:id>", methods=["PUT"])
def editar_usuario(id):
    dados = request.json
    nome = dados.get("nome")
    email = dados.get("email")
    senha = dados.get("senha")
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute(
            "UPDATE usuarios SET nome=%s, email=%s, senha=%s WHERE id=%s",
            (nome, email, senha, id)
        )
        conexao.commit()
        cursor.close()
        conexao.close()
        return jsonify({"mensagem": "Usuário atualizado com sucesso!"})
    except Exception as e:
        return jsonify({"erro": str(e)})

# Deletar usuário
@app.route("/deletar_usuario/<int:id>", methods=["DELETE"])
def deletar_usuario(id):
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute("DELETE FROM usuarios WHERE id=%s", (id,))
        conexao.commit()
        cursor.close()
        conexao.close()
        return jsonify({"mensagem": "Usuário deletado com sucesso!"})
    except Exception as e:
        return jsonify({"erro": str(e)})

# ================= PETS =================

# Cadastrar pet
@app.route("/cadastrar_pet", methods=["POST"])
def cadastrar_pet():
    dados = request.json
    usuario_id = dados.get("usuario_id")
    nome = dados.get("nome")
    especie = dados.get("especie")
    raca = dados.get("raca")
    idade = dados.get("idade")
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor()
        cursor.execute(
            "INSERT INTO pets (usuario_id, nome, especie, raca, idade) VALUES (%s, %s, %s, %s, %s)",
            (usuario_id, nome, especie, raca, idade)
        )
        conexao.commit()
        cursor.close()
        conexao.close()
        return jsonify({"mensagem": "Pet cadastrado com sucesso!"})
    except Exception as e:
        return jsonify({"erro": str(e)})

# Listar pets por usuário
@app.route("/listar_pets/<int:usuario_id>", methods=["GET"])
def listar_pets(usuario_id):
    try:
        conexao = conectar_banco()
        cursor = conexao.cursor(dictionary=True)
        cursor.execute("SELECT * FROM pets WHERE usuario_id=%s", (usuario_id,))
        pets = cursor.fetchall()
        cursor.close()
        conexao.close()
        return jsonify(pets)
    except Exception as e:
        return jsonify({"erro": str(e)})

# ================== ROTA PRINCIPAL ==================
@app.route("/")
def home():
    return render_template("index.html")
# ================= MAIN =================
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
