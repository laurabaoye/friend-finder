const express = require("express");
const router = express.Router();

const friendData = require("../data/data");
router.get("/api", (req, res) => {
    res.send(friendData);
});

router.post("/api/friends", (req, res) => {
    let singleUserData = req.body.scores;
    let allUsersData = [];

    for (let i = 0; i < friendData.length; i++) {
        allUsersData.push(friendData[i].scores);
    }

    // Now let find the index of best match
    let bestMatchIdx = indexOfMax(allUsersData, singleUserData);

    function indexOfMax(allUsersData, singleUserData) {
        let totalDiffArr = [];

        for (let each of allUsersData) {
            let eachArr = [];

            for (let i = 0; i < each.length; i++) {
                eachArr.push(Math.abs(each[i] - singleUserData[i]));
            }
            totalDiffArr.push(eachArr.reduce((a, b) => a + b));
        }
        return totalDiffArr.indexOf(Math.max(...totalDiffArr));
    }

    friendData.push(req.body);
    res.json(friendData[bestMatchIdx]);
});

module.exports = router;
