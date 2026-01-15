import * as authService from "../services/authService.js";

export async function getUser(req,res){
    const user_Id = req.user.id;

    try{
        const user = await authService.getUserById(user_Id);

        res.status(200).json(user);
    } catch(error){
        console.error(error);
        res.status(500).json({message: "Erro ao obter dados do usuário."});
    }
}