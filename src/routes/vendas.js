const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/vendasController'); 
const authenticateJWT = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   - name: Vendas
 *     description: Operações relacionadas às vendas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ClienteMaisCompras:
 *       type: object
 *       properties:
 *         clienteId:
 *           type: string
 *           description: ID do cliente
 *         nome:
 *           type: string
 *           description: Nome do cliente
 *         totalCompras:
 *           type: integer
 *           description: Total de compras realizadas pelo cliente
 *     Vendas:
 *       type: object
 *       properties:
 *         vendaId:
 *           type: string
 *           description: ID da venda
 *         clienteId:
 *           type: string
 *           description: ID do cliente que realizou a compra
 *         dataVenda:
 *           type: string
 *           format: date-time
 *           description: Data e hora em que a venda foi realizada
 *         valorTotal:
 *           type: number
 *           format: float
 *           description: Valor total da venda
 *         produtos:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               produtoId:
 *                 type: string
 *                 description: ID do produto vendido
 *               quantidade:
 *                 type: integer
 *                 description: Quantidade do produto vendido
 */

/**
 * @swagger
 * /VENDAS/clientes-mais-compras:
 *   get:
 *     tags:
 *       - Vendas
 *     summary: Retorna os clientes que mais compraram
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de clientes que mais compraram retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ClienteMaisCompras'
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro ao obter os clientes que mais compraram
 */
router.get('/clientes-mais-compras', authenticateJWT, vendaController.clientesMaisCompras);

module.exports = router;
