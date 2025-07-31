import { Router } from "express";

import { CopyController } from "./";
import { isAuthenticated } from "../../middlewares/isAuthenticated";


const copyRouter = Router();

const copyController = new CopyController();

copyRouter.get('/',
    copyController.listAll.bind(copyController)
);

copyRouter.post('/',
    isAuthenticated,
    copyController.create.bind(copyController)
)

export { copyRouter }