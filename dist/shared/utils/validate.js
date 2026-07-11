import { ZodError } from 'zod';
import { MESSAGES } from '../constants/messages.js';
export const validate = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            return next();
        }
        catch (error) {
            if (error instanceof ZodError) {
                const zodError = error;
                const cleanDetails = zodError.errors.map((err) => ({
                    field: err.path.join('.'),
                    message: err.message,
                }));
                res.status(422).json({
                    success: false,
                    error: MESSAGES.VALIDATION_FAILED,
                    details: cleanDetails,
                });
                return;
            }
            res.status(500).json({ success: false, error: 'Internal server error' });
        }
    };
};
//# sourceMappingURL=validate.js.map