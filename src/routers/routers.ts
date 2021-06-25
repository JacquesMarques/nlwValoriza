import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { CreateTagController } from "../controllers/CreateTagController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateComplimentController } from "../controllers/CreateComplimetController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import {ListUserReceiveComplementsServer} from "../services/ListUserReceiveComplimentsService";
import {ListUserSernderComplimentsService} from "../services/ListUserSenderComplimentsService";
import {ListUserReceiveComplimentsController} from "../controllers/ListUserSenderComplementsController";
import {ListUserSenderComplimentsController} from "../controllers/ListUserReceiveComplementsController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();

router.post("/users", ensureAuthenticated,createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated,createComplimentController.handle);

router.get('/users/compliments/send', ensureAuthenticated, listUserSenderComplimentsController.handle);
router.get('/users/compliments/receive', ensureAuthenticated, listUserReceiveComplimentsController.handle);

export { router }
