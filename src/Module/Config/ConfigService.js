import express from "express";
import Q from "q";
import { config } from "./ConfigModel.js";

class ConfigService {
  addConfig(data) {
    var deferred = Q.defer();

    config
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
export default ConfigService;
