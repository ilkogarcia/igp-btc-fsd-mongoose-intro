module.exports = class AuthCtrl {
  // Authentication API: SignUp
  static async apiSignUp (req, res) {
    return res.status(201).json({ message: 'OK SignUp' })

  }

  // Authentication API: SignIn
  static async apiSignIn (req, res) {
    return res.status(201).json({ message: 'OK SignIn' })
  }
}
