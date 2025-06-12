import express from "express";
import Q from "q";
import { user } from "./userModel.js";

class userService {
  loginUser(email) {
    console.log("email", email);
    var deferred = Q.defer();
    user
      .findOne({ email: email, status: 1 })
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
  addUsers(data) {
    var deferred = Q.defer();
    user.create(data).then((err, result) => {
      if (err) {
        let obj = { status: 0, data: err };
        deferred.resolve(obj);
      } else {
        let obj = { status: 1, data: result };
        deferred.resolve(obj);
      }
    });
    return deferred.promise;
  }
  addUserss(data) {
    var deferred = Q.defer();
    user.create(data).then((err, result) => {
      if (err) {
        let obj = { status: 0, data: err };
        deferred.resolve(obj);
      } else {
        let obj = { status: 1, data: result };
        deferred.resolve(obj);
      }
    });
    return deferred.promise;
  }
  addUser(data) {
    var deferred = Q.defer();
    user.create(data).then((err, result) => {
      if (err) {
        let obj = { status: 0, data: err };
        deferred.resolve(obj);
      } else {
        let obj = { status: 1, data: result };
        deferred.resolve(obj);
      }
    });
    return deferred.promise;
  }
  updateUser(data) {
    const deferred = Q.defer();

    const filter = { email: data.email };
    const update = data;

    user
      .findOneAndUpdate(filter, update, { new: true })
      .then((result) => {
        if (!result) {
          deferred.resolve({ status: 0, data: "User not found" });
        } else {
          deferred.resolve({ status: 1, data: result });
        }
      })
      .catch((err) => {
        deferred.resolve({ status: 0, data: err });
      });

    return deferred.promise;
  }
  updateUsers(data) {
    const deferred = Q.defer();

    const filter = { email: data.email };
    const update = data;

    user
      .findOneAndUpdate(filter, update, { new: true })
      .then((result) => {
        if (!result) {
          deferred.resolve({ status: 0, data: "User not found" });
        } else {
          deferred.resolve({ status: 1, data: result });
        }
      })
      .catch((err) => {
        deferred.resolve({ status: 0, data: err });
      });

    return deferred.promise;
  }
  getUser(email) {
    console.log("email", email);
    var deferred = Q.defer();
    user
      .findOne({ email: email, status: 1 })
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
  getUsers(email) {
    console.log("email", email);
    var deferred = Q.defer();
    user
      .findOne({ email: email, status: 1 })
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
  getAllUser() {
    var deferred = Q.defer();
    user
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
  getAllUsers() {
    var deferred = Q.defer();
    user
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
  //findOneAndUpdate , Delete
  //Hard Delete
  deleteUser(email) {
    var deferred = Q.defer();
    console.log("email", email);
    user
      .findOneAndDelete({ email: email })
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
  deleteUsers(email) {
    var deferred = Q.defer();
    console.log("email", email);
    user
      .findOneAndDelete({ email: email })
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

  deleteUsersSoft(email) {
    var deferred = Q.defer();
    console.log("email", email);
    user
      .findOneAndUpdate({ email: email }, { status: 0 }, { new: true })
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
  deleteUserSoft(email) {
    var deferred = Q.defer();
    console.log("email", email);
    user
      .findOneAndUpdate({ email: email }, { status: 0 }, { new: true })
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
}
export default userService;
