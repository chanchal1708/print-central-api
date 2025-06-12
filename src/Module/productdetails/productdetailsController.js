import express from "express";
import services from "./productdetailsService.js";
import bcrypt from "bcrypt";
const productdetailsService = new services();

let crud = {
  addproductiondetails: async (req, res) => {
    try {
      const result = await productdetailsService.addproductiondetails(req.body);

      if (result && result.status === 1) {
        res.status(200).send({ status: 1, data: result.data });
      } else {
        res.status(400).send({
          status: 0,
          data: result.data || "productiondetails creation failed",
        });
      }
    } catch (err) {
      res.status(500).send({ status: 0, data: err.message });
    }
  },
  getproductiondetails: async (req, res) => {
    console.log("req.query", req.query);
    productdetailsService.getproductiondetails().then(async (result) => {
      console.log(result, "resultcon");
      res.status(200).send(result);
    });
  },
  deleteproductiondetails: async (req, res) => {
    try {
      const result = await productdetailsService.deleteproductiondetails(
        req.query
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send({ status: 0, data: err.message });
    }
  },
  getproductdetailsbyID: async (req, res) => {
    try {
      const productId = req.params.id;
      const result = await productdetailsService.getproductdetailsbyID(
        productId
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send({ status: 0, data: err.message });
    }
  },
};

export default crud;
