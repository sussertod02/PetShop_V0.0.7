const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoControllers');
const authenticateJWT = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   - name: Produto
 *     description: Operações relacionadas aos produtos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Produto:
 *       type: object
 *       required:
 *         - nome
 *         - preco
 *       properties:
 *         id:
 *           type: string
 *           description: ID do produto
 *         nome:
 *           type: string
 *           description: Nome do produto
 *         descricao:
 *           type: string
 *           description: Descrição do produto
 *         preco:
 *           type: number
 *           format: float
 *           description: Preço do produto
 *         quantidade:
 *           type: integer
 *           description: Quantidade disponível do produto
 */

/**
 * @swagger
 * /produtos:
 *   get:
 *     tags:
 *       - Produto
 *     summary: Retorna todos os produtos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Produto'
 *       401:
 *         description: Não autorizado
 */
router.get('/', authenticateJWT, produtoController.obterTodosOsProdutos);

/**
 * @swagger
 * /produtos:
 *   post:
 *     tags:
 *       - Produto
 *     summary: Cria um novo produto
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Produto'
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 */
router.post('/', authenticateJWT, produtoController.criarProduto);

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     tags:
 *       - Produto
 *     summary: Retorna um produto pelo ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Produto encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       404:
 *         description: Produto não encontrado
 *       401:
 *         description: Não autorizado
 */
router.get('/:id', authenticateJWT, produtoController.obterProdutoPorId);

/**
 * @swagger
 * /produtos/{id}:
 *   put:
 *     tags:
 *       - Produto
 *     summary: Atualiza um produto pelo ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Produto'
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Produto não encontrado
 *       401:
 *         description: Não autorizado
 */
router.put('/:id', authenticateJWT, produtoController.atualizarProduto);

/**
 * @swagger
 * /produtos/{id}:
 *   delete:
 *     tags:
 *       - Produto
 *     summary: Deleta um produto pelo ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do produto
 *     responses:
 *       204:
 *         description: Produto deletado com sucesso
 *       404:
 *         description: Produto não encontrado
 *       401:
 *         description: Não autorizado
 */
router.delete('/:id', authenticateJWT, produtoController.deletarProduto);

module.exports = router;
