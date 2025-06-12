import express from "express";
import Q from "q";

import { productdetails } from "./productdetailsModel.js";
class productdetailsService {
  addproductiondetails(data) {
    var deferred = Q.defer();

    productdetails
      .create(data)
      .then((result) => {
        let obj = { status: 1, data: result };
        deferred.resolve(obj);
      })
      .catch((err) => {
        let obj = { status: 0, data: err };
        deferred.resolve(obj);
      });

    return deferred.promise;
  }
  getproductiondetails() {
    var deferred = Q.defer();
    productdetails
      .find({})
      .then((result) => {
        console.log("result", result);
        let obj = { status: 1, data: result };
        deferred.resolve(obj);
      })
      .catch((err) => {
        let obj = { status: 0, data: err };
        deferred.resolve(obj);
      });

    return deferred.promise;
  }
  deleteproductiondetails(query) {
    var deferred = Q.defer();

    productdetails
      .findOneAndDelete({ _id: query.id })
      .then((result) => {
        deferred.resolve({ status: 1, data: result });
      })
      .catch((err) => {
        deferred.resolve({ status: 0, data: err });
      });

    return deferred.promise;
  }
  // getproductdetailsbyID(query) {
  //   var deferred = Q.defer();

  //   productdetails
  //     .findOne({ _id: query.id })
  //     .then((result) => {
  //       deferred.resolve({ status: 1, data: result });
  //     })
  //     .catch((err) => {
  //       deferred.resolve({ status: 0, data: err });
  //     });

  //   return deferred.promise;
  // }
  getproductdetailsbyID(id) {
    console.log("productId", id);
    const deferred = Q.defer();
    productdetails
      .findOne({ _id: id, status: 1 }) // Fetch by product ID
      .then((result) => {
        console.log("result", result);
        const obj = { status: 1, data: result };
        deferred.resolve(obj);
      })
      .catch((err) => {
        const obj = { status: 0, data: err };
        deferred.resolve(obj);
      });

    return deferred.promise;
  }
}
export default productdetailsService;
