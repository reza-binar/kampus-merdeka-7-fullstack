const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

exports.validateRegister = (req, res, next) => {
    // Validation body schema
    const validateBody = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
    });

    // The file is not required
    const validateFileBody = z
        .object({
            profile_picture: z
                .object({
                    name: z.string(),
                    data: z.any(),
                })
                .nullable()
                .optional(),
        })
        .nullable()
        .optional();

    // Validate
    const resultValidateBody = validateBody.safeParse(req.body);
    if (!resultValidateBody.success) {
        // If validation fails, return error messages
        throw new BadRequestError(resultValidateBody.error.errors);
    }

    // Validate
    const resultValidateFiles = validateFileBody.safeParse(req.files);
    if (!resultValidateFiles.success) {
        // If validation fails, return error messages
        throw new BadRequestError(resultValidateFiles.error.errors);
    }

    next();
};
