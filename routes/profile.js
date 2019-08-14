const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

getUserStats = async (req, res) => {
    try {
        const headers = {
            "TRN-Api-Key": process.env.TRACKER_API_KEY
        };
        const { platform, username } = req.params;

        const response = await fetch(
            `${process.env.TRACKER_API_URL}/profile/${platform}/${username}`,
            {
                headers
            }
        );

        const data = await response.json();

        if (data.errors && data.errors.length > 0) {
            return res.status(404).json({
                message: 'Profile Not Found'
            });
        }

        res.json(data)
    } catch (error) {

    }
};

router.get("/:platform/:username", getUserStats);

module.exports = router;
