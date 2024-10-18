const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');
const authenticateJWT = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   - name: Perfil
 *     description: Operações relacionadas a perfis
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Perfil:
 *       type: object
 *       required:
 *         - nome
 *       properties:
 *         id:
 *           type: string
 *           description: ID do perfil
 *         nome:
 *           type: string
 *           description: Nome do perfil
 */

/**
 * @swagger
 * /perfis:
 *   get:
 *     tags:
 *       - Perfil
 *     summary: Retorna todos os perfis
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de perfis
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Perfil'
 */
router.get('/', authenticateJWT, perfilController.obterTodasOsPerfis);

/**
 * @swagger
 * /perfis:
 *   post:
 *     tags:
 *       - Perfil
 *     summary: Cria um novo perfil
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Perfil'
 *     responses:
 *       201:
 *         description: Perfil criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Perfil'
 *       400:
 *         description: Erro de validação
 *       500:
 *         description: Erro ao criar perfil
 */
router.post('/', authenticateJWT, perfilController.criarPerfil);

/**
 * @swagger
 * /perfis/{id}:
 *   get:
 *     tags:
 *       - Perfil
 *     summary: Retorna um perfil pelo ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do perfil
 *     responses:
 *       200:
 *         description: Perfil encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Perfil'
 *       404:
 *         description: Perfil não encontrado
 */
router.get('/:id', authenticateJWT, perfilController.obterPerfilPorId);

/**
 * @swagger
 * /perfis/{id}:
 *   put:
 *     tags:
 *       - Perfil
 *     summary: Atualiza um perfil pelo ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do perfil
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Perfil'
 *     responses:
 *       200:
 *         description: Perfil atualizado com sucesso
 *       404:
 *         description: Perfil não encontrado
 *       400:
 *         description: Erro de validação
 */
router.put('/:id', authenticateJWT, perfilController.atualizarPerfil);

/**
 * @swagger
 * /perfis/{id}:
 *   delete:
 *     tags:
 *       - Perfil
 *     summary: Deleta um perfil pelo ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do perfil
 *     responses:
 *       204:
 *         description: Perfil deletado com sucesso
 *       404:
 *         description: Perfil não encontrado
 *       500:
 *         description: Erro ao deletar perfil
 */
router.delete('/:id', authenticateJWT, perfilController.deletarPerfil);

module.exports = router;
