import express from "express";
import services from "./ConfigService.js";
import bcrypt from "bcrypt";
const ConfigService = new services();

let crud = {
  addConfig: async (req, res) => {
    try {
      const result = await ConfigService.addConfig(req.body);

      if (result && result.status === 1) {
        res.status(200).send({ status: 1, data: result.data });
      } else {
        res
          .status(400)
          .send({ status: 0, data: result.data || "Dropdown creation failed" });
      }
    } catch (err) {
      res.status(500).send({ status: 0, data: err.message });
    }
  },
};

export default crud;
