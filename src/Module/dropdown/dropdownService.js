import express from "express";
import Q from "q";
import { dropdown } from "./dropdownModel.js";

class DropdownService {
  addDropdown(data) {
    var deferred = Q.defer();

    dropdown
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
  getDropdown(flag) {
    console.log("flag", flag);
    var deferred = Q.defer();
    dropdown
      .find({ flag: flag, status: 1 })
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
  getAllDropdown() {
    var deferred = Q.defer();
    dropdown
      .find({ status: 1 })
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
export default DropdownService;
