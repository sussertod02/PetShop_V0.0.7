const express = require('express');
const router = express.Router();
const subcategoriaController = require('../controllers/subcategoriaControllers');
const authenticateJWT = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   - name: Subcategoria
 *     description: Operações relacionadas às subcategorias
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Subcategoria:
 *       type: object
 *       required:
 *         - nome
 *         - categoriaId
 *       properties:
 *         id:
 *           type: string
 *           description: ID da subcategoria
 *         nome:
 *           type: string
 *           description: Nome da subcategoria
 *         descricao:
 *           type: string
 *           description: Descrição da subcategoria
 *         categoriaId:
 *           type: string
 *           description: ID da categoria associada
 */

/**
 * @swagger
 * /subcategorias:
 *   get:
 *     tags:
 *       - Subcategoria
 *     summary: Retorna todas as subcategorias
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de subcategorias retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subcategoria'
 *       401:
 *         description: Não autorizado
 */
router.get('/', authenticateJWT, subcategoriaController.obterTodasAsSubcategorias);

/**
 * @swagger
 * /subcategorias:
 *   post:
 *     tags:
 *       - Subcategoria
 *     summary: Cria uma nova subcategoria
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subcategoria'
 *     responses:
 *       201:
 *         description: Subcategoria criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subcategoria'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 */
router.post('/', authenticateJWT, subcategoriaController.criarSubcategoria);

/**
 * @swagger
 * /subcategorias/{id}:
 *   get:
 *     tags:
 *       - Subcategoria
 *     summary: Retorna uma subcategoria pelo ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da subcategoria
 *     responses:
 *       200:
 *         description: Subcategoria encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subcategoria'
 *       404:
 *         description: Subcategoria não encontrada
 *       401:
 *         description: Não autorizado
 */
router.get('/:id', authenticateJWT, subcategoriaController.obterSubcategoriaPorId);

/**
 * @swagger
 * /subcategorias/{id}:
 *   put:
 *     tags:
 *       - Subcategoria
 *     summary: Atualiza uma subcategoria pelo ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da subcategoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subcategoria'
 *     responses:
 *       200:
 *         description: Subcategoria atualizada com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Subcategoria não encontrada
 *       401:
 *         description: Não autorizado
 */
router.put('/:id', authenticateJWT, subcategoriaController.atualizarSubcategoria);

/**
 * @swagger
 * /subcategorias/{id}:
 *   delete:
 *     tags:
 *       - Subcategoria
 *     summary: Deleta uma subcategoria pelo ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da subcategoria
 *     responses:
 *       204:
 *         description: Subcategoria deletada com sucesso
 *       404:
 *         description: Subcategoria não encontrada
 *       401:
 *         description: Não autorizado
 */
router.delete('/:id', authenticateJWT, subcategoriaController.deletarSubcategoria);

module.exports = router;
