import { Router } from "express"

import DisciplinaController from "./app/controllers/DisciplinaController"

const routes = new Router();

routes.post("/disciplinas", DisciplinaController.create)
routes.get("/disciplinas", DisciplinaController.read)
routes.put("/disciplinas/:id", DisciplinaController.update)
routes.delete("/disciplinas/:id", DisciplinaController.delete)

export default routes;