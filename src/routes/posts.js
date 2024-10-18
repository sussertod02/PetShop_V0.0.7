const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');
const authenticateJWT = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   - name: Post
 *     description: Operações relacionadas aos posts
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - titulo
 *         - conteudo
 *       properties:
 *         id:
 *           type: string
 *           description: ID do post
 *         titulo:
 *           type: string
 *           description: Título do post
 *         conteudo:
 *           type: string
 *           description: Conteúdo do post
 *         autorId:
 *           type: string
 *           description: ID do autor do post
 *         dataCriacao:
 *           type: string
 *           format: date-time
 *           description: Data de criação do post
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     tags:
 *       - Post
 *     summary: Retorna todos os posts
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de posts retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       401:
 *         description: Não autorizado
 */
router.get('/', authenticateJWT, postController.obterTodosOsPosts);

/**
 * @swagger
 * /posts:
 *   post:
 *     tags:
 *       - Post
 *     summary: Cria um novo post
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 */
router.post('/', authenticateJWT, postController.criarPost);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     tags:
 *       - Post
 *     summary: Retorna um post pelo ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do post
 *     responses:
 *       200:
 *         description: Post encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post não encontrado
 *       401:
 *         description: Não autorizado
 */
router.get('/:id', authenticateJWT, postController.obterPostPorId);

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     tags:
 *       - Post
 *     summary: Atualiza um post pelo ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Post atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Post não encontrado
 *       401:
 *         description: Não autorizado
 */
router.put('/:id', authenticateJWT, postController.atualizarPost);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     tags:
 *       - Post
 *     summary: Deleta um post pelo ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do post
 *     responses:
 *       204:
 *         description: Post deletado com sucesso
 *       404:
 *         description: Post não encontrado
 *       401:
 *         description: Não autorizado
 */
router.delete('/:id', authenticateJWT, postController.deletarPost);

module.exports = router;
