import express from "express";
import services from "./structureService.js";
import bcrypt from "bcrypt";
const StructureService = new services();

let crud = {
  poststructure: async (req, res) => {
    try {
      const result = await StructureService.poststructure(req.body);

      if (result && result.status === 1) {
        res.status(200).send({ status: 1, data: result.data });
      } else {
        res.status(400).send({
          status: 0,
          data: result.data || "Structure creation failed",
        });
      }
    } catch (err) {
      res.status(500).send({ status: 0, data: err.message });
    }
  },

  getstructure: async (req, res) => {
    StructureService.getstructure(req.body.industry).then(async (result) => {
      console.log(result, "resultcon");
      res.status(200).send(result);
    });
  },
  //  addstructure: async (req, res) => {
  //   try {
  //     const result = await  StructureService.addstructure(req.body);

  //     if (result && result.status === 1) {
  //       res.status(200).send({ status: 1, data: result.data });
  //     } else {
  //       res
  //         .status(400)
  //         .send({ status: 0, data: result.data || "Dropdown creation failed" });
  //     }
  //   } catch (err) {
  //     res.status(500).send({ status: 0, data: err.message });
  //   }
  // },
};

export default crud;
