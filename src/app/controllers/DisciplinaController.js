import Disciplina from "../models/Disciplina"

// CRUD
class DisciplinaController{
	// regras de negócio

	// CREATE com método POST
	async create(req, res){
		const { codigo, nome, departamento, qtdCreditos } = req.body

		const codigo_exists = await Disciplina.findOne({codigo})

		if(codigo_exists){
			return res.status(409).json({message: "Não foi possível concluir a operação pois já existe disciplina com mesmo código cadastrada."})
		}

		try{
			const disciplina = await Disciplina.create(req.body)
			return res.status(201).json(disciplina)
		}catch(error){
			return res.status(500).json({message: `Erro interno: ${error}`})
		}
	}

	// READ com método GET
	async read(req, res){
		try{
			const disciplinas = await Disciplina.find()

			return res.status(200).json(disciplinas)
		}catch(error){
			return res.status(500).json({message: `Erro interno: ${error}`})
		}
	}

	// UPDATE com método PUT
	async update(req, res){
		const { id } = req.params

		const disciplina = await Disciplina.findOne({id})

		if(!disciplina){
			return res.status(404).json({message: "Disciplina não encontrada!"})
		}

		try{
			await Disciplina.updateOne(req.body).where({id})

			return res.status(201).json({message: "Disciplina atualizada com sucesso!"})
		}catch(error){
			return res.status(500).json({message: `Erro interno ${error}`})
		}
	}

	// DELETE com método DELETE
	async delete(req, res){
		try{
			const { id } = req.params
			const disciplinaToDelete = await Disciplina.findOne({id})

			if(!disciplinaToDelete){
				return res.status(404).json({message: `Disciplina ${id} não encontrada.`})
			}

			await Disciplina.deleteOne({id})

			return res.json({message: "Disciplina removida."})
		}catch(error){
			return res.status(500).json({message: `Erro interno ${error}`})
		}
	}
}

export default new DisciplinaController()