import express from "express";
import Q from "q";
import { structure } from "./structureModel.js";

class StructureService {
  getstructure(industry) {
    console.log("industry", industry);
    var deferred = Q.defer();
    structure
      .find({ industry: industry, status: 1 })
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
  poststructure(data) {
    var deferred = Q.defer();

    structure
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
}
export default StructureService;
