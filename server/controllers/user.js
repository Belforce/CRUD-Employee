import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM employees";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
    
        return res.status(200).json(data);
      });
    };

    export const addUser = (req, res) => {
      const q =
        "INSERT INTO employees(`name`, `email`, `position`) VALUES(?)";
    
      const values = [
        req.body.name,
        req.body.email,
        req.body.position,
      ];
    
      db.query(q, [values], (err) => {
        if (err) return res.json(err);
    
        return res.status(200).json("Employee added with success.");
      });
    };

    export const updateUser = (req, res) => {
      const q =
        "UPDATE employees SET `name` = ?, `email` = ?, `postion` = ? WHERE `id` = ?";
    
      const values = [
        req.body.name,
        req.body.email,
        req.body.position,
      ];
    
      db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);
    
        return res.status(200).json("Employee changed with success.");
      });
    };
    
    export const deleteUser = (req, res) => {
      const q = "DELETE FROM employees WHERE `id` = ?";
    
      db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);
    
        return res.status(200).json("Employee deleted.");
      });
    };