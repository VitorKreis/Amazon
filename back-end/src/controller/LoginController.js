import session from "express-session";
import User from "../models/User";

class LoginController {
  async login(req, res){
    const { email, password } = req.body

    if(!email || !password) return res.status(401).json({ error : "Please check your password and your email" })

    const user = await User.findOne({where: {email}})

    if(!user) return res.status(400).send('Please check your e-mail')

    if(!(await user.IsValide(password))) res.status(400).json({error: "Please check your password "})
    
    const { id } = user
    req.session.user = {
        id: id,
        email: email
    }

    return res.json(req.session.user)
  }
}

export default new LoginController();
