function handler(req, res)
{
    if (req.method === 'POST')
    {
        const email = req.body.email;

        if (!email || !email.includes('@')) {
            res.status(422).json({message: 'Please enter a valid email address'});
            return;
        }
        res.status(201).json({message: 'Signed up!'});
        console.log(email);
    }
}
export default handler;
