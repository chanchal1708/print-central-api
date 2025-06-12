import express from "express";
import services from "./userService.js";
import bcrypt from "bcrypt";
const UserService = new services();

let crud = {
  loginUser: async (req, res) => {
    try {
      console.log("req.body", req.body);
      const { email, password } = req.body;
      console.log("email:", email);
      console.log("password:", password);

      if (!email || !password) {
        console.log("email.....:", email);
        console.log("password:", password);
        return res
          .status(400)
          .send({ status: 0, data: "Email and password required" });
      }

      const result = await UserService.getUser(email, password);

      if (result.status === 0 || !result.data) {
        return res.status(404).send({ status: 0, data: "User not found" });
      }

      const user = result.data;

      const isMatch = await bcrypt.compare(password, user.password);
      console.log("ismatch:", isMatch);
      console.log("password:", password);
      console.log("user.password:", user.password);
      if (!isMatch) {
        return res.status(401).send({ status: 0, data: "Invalid password" });
      }

      return res
        .status(200)
        .send({ status: 1, data: "Login successful", user });
    } catch (err) {
      return res.status(500).send({ status: 0, data: err.message });
    }
  },

  addUserss: async (req, res) => {
    UserService.addUserss(req.body).then(async (result) => {
      if (result) {
        let ob = { status: 1, data: result };
        res.status(200).send(ob);
      }
    });
  },
  addUsers: async (req, res) => {
    UserService.addUsers(req.query).then(async (result) => {
      if (result) {
        let ob = { status: 1, data: result };
        res.status(200).send(ob);
      }
    });
  },
  updateUsers: async (req, res) => {
    const updatedData = req.query;
    try {
      const result = await UserService.updateUsers(updatedData);
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send({ status: 0, data: err.message });
    }
  },

  addUser: async (req, res) => {
    try {
      const { password, ...rest } = req.body;

      if (!password) {
        return res
          .status(400)
          .send({ status: 0, data: "Password is required" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const userData = { ...rest, password: hashedPassword };

      const result = await UserService.addUser(userData);

      if (result && result.status === 1) {
        res.status(200).send({ status: 1, data: result.data });
      } else {
        res
          .status(500)
          .send({ status: 0, data: result.data || "User creation failed" });
      }
    } catch (err) {
      res.status(500).send({ status: 0, data: err.message });
    }
  },

  updateUser: async (req, res) => {
    const updatedData = req.query;
    try {
      const result = await UserService.updateUser(updatedData);
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send({ status: 0, data: err.message });
    }
  },
  getUser: async (req, res) => {
    console.log("req.body.email", req.body.email);
    UserService.getUser(req.body.email).then(async (result) => {
      console.log(result, "resultcon");
      res.status(200).send(result);
    });
  },
  getUsers: async (req, res) => {
    console.log("req.query.email", req.query.email);
    UserService.getUsers(req.query.email).then(async (result) => {
      console.log(result, "resultcon");
      res.status(200).send(result);
    });
  },
  getAllUser: async (req, res) => {
    console.log("req.body", req.body);
    UserService.getAllUser().then(async (result) => {
      console.log(result, "resultcon");
      res.status(200).send(result);
    });
  },
  getAllUsers: async (req, res) => {
    console.log("req.query", req.query);
    UserService.getAllUsers().then(async (result) => {
      console.log(result, "resultcon");
      res.status(200).send(result);
    });
  },
  deleteUser: async (req, res) => {
    console.log("req.body.email", req.body.email);
    UserService.deleteUser(req.body.email).then(async (result) => {
      res.status(200).send(result);
    });
  },
  deleteUsers: async (req, res) => {
    console.log("req.query.email", req.query.email);
    UserService.deleteUsers(req.query.email).then(async (result) => {
      res.status(200).send(result);
    });
  },

  deleteUserSoft: async (req, res) => {
    console.log("req.body.email", req.body.email);
    UserService.deleteUserSoft(req.body.email).then(async (result) => {
      res.status(200).send(result);
    });
  },
  deleteUsersSoft: async (req, res) => {
    console.log("req.query.email", req.query.email);
    UserService.deleteUsersSoft(req.query.email).then(async (result) => {
      res.status(200).send(result);
    });
  },
};

export default crud;
