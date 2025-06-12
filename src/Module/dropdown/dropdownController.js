import express from "express";
import services from "./dropdownService.js";
import bcrypt from "bcrypt";
const DropdownService = new services();

let crud = {
  addDropdown: async (req, res) => {
    try {
      const result = await DropdownService.addDropdown(req.body);

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

  getDropdown: async (req, res) => {
    console.log("req.body.flag", req.body.flag);
    DropdownService.getDropdown(req.body.flag).then(async (result) => {
      console.log(result, "resultcon");
      res.status(200).send(result);
    });
  },

  getAllDropdown: async (req, res) => {
    DropdownService.getAllDropdown().then(async (result) => {
      console.log(result, "resultcon");
      res.status(200).send(result);
    });
  },
};

export default crud;
