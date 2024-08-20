/**
 * @openapi
 * /apireserve:
 *   post:
 *     summary: Create a new appointment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idclient:
 *                 type: integer
 *                 example: 1
 *               date:
 *                 type: string
 *                 example: '2024-08-01T10:00:00Z'
 *               doctor:
 *                 type: string
 *                 example: 'Dr. Smith'
 *               reason:
 *                 type: string
 *                 example: 'Routine check-up'
 *     responses:
 *       201:
 *         description: Appointment created successfully
 *       500:
 *         description: Server error
 */
/**
 * @openapi
 * /appointments/{idclients}:
 *   get:
 *     summary: Get a customer's reservations
 *     parameters:
 *       - in: path
 *         name: idclients
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserves found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idclient:
 *                     type: integer
 *                   date:
 *                     type: string
 *                   doctor:
 *                     type: string
 *                   reason:
 *                     type: string
 *       404:
 *         description: No reservations found
 *       500:
 *         description: Server error
 */