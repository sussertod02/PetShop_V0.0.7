const express = require('express');
const router = express.Router();
const vendas2Controller = require('../controllers/vendas2Controller');
const authenticateJWT = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   - name: Vendas
 *     description: Operações relacionadas às vendas (vendas2)
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ClienteMaisCompras2:
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
 * /vendas/clientes-mais-compras2:
 *   get:
 *     tags:
 *       - Vendas
 *     summary: Retorna os clientes que mais compraram (vendas2)
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
 *                 $ref: '#/components/schemas/ClienteMaisCompras2'
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro ao obter os clientes que mais compraram
 */
router.get('/clientes-mais-compras2', authenticateJWT, vendas2Controller.clientesMaisCompras);

module.exports = router;
