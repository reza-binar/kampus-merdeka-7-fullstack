const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/users");
const { imageUpload } = require("../utils/image-kit");

exports.register = async (data, file) => {
    // if there are any file (profile picture)
    if (file.profile_picture) {
        data.profile_picture = await imageUpload(file.profile_picture);
    }

    // create user
    const user = await userRepository.createUser(data);

    // generate token with jwt
    const payload = {
        user_id: user.id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "72h", // expired in 3 days
    });

    // don't forget to remove the password object, if not removed it will be displayed in response
    delete user.password;

    // return the user info and the token
    return {
        user,
        token,
    };
};
