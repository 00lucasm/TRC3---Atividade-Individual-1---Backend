import { Router } from "express"

import DisciplinaController from "./app/controllers/DisciplinaController"

const routes = new Router();

routes.post("/disciplina", DisciplinaController.create)
routes.get("/disciplina", DisciplinaController.read)
routes.put("/disciplina/:id", DisciplinaController.update)
routes.delete("/disciplina/:id", DisciplinaController.delete)

export default routes;