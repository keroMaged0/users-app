import { Router } from "express";

import * as controller from "../controller/users/user.controller.js";

const router = Router();

router.get("/", controller.getUsers);

router.get("/:id", controller.getUser);

export const userRouter = router;
