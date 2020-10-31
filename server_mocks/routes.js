const path = require("path");
const UPLOAD_DIR = path.resolve(__dirname, "./data/upload");

const { v4: uuidv4 } = require("uuid");
const {getMockData} = require('./helpers');

module.exports = async (app) => {
  app.post("/upload", async (req, res) => {
    const fileNames = Object.keys(req.files);

    console.log("FILES", fileNames);

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ ok: false, message: "No files uploaded" });
    }

    let uploadedFile = req.files[fileNames[0]];
    let uploadedFileParts = uploadedFile.name.split(".");

    const savedFileName = `${uuidv4()}.${
      uploadedFileParts[uploadedFileParts.length - 1]
    }`;

    const err = await uploadedFile.mv(`${UPLOAD_DIR}/${savedFileName}`);

    if (err) {
      res.status(500).json({ ok: false });
    } else {
      res.json({ ok: true, file: savedFileName });
    }
  });

  app.get("/api/:entity/:id", function (req, res) {
    console.log("HEADERS", req.headers);    
    console.log('path', `${req.params.entity}/${req.params.id}`);

    let result = getMockData(`${req.params.entity}/${req.params.id}`);

    if (result.ok) {
        res.json(result.data);
    }else {
        res.status(404).end();
    }
    
  });

  /*
          /:id
          req.params
        */
  app.post("/api/", function (req, res) {
    const body = req.body;
    res.send(body);
  });
};
