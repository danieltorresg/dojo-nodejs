const assert = require("chai").assert;
const getTracks = require("../services/spotify/spotify.service.js");


describe("Sporifi services", function() {
    it("get tracks", async function() {
        const result = await getTracks("bad bunny");
        console.log(result);
    });
}); 