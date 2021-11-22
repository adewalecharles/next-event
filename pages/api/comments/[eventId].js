function handler(req, res)
{
    const eventId = req.query.eventId;

    if (req.method === 'GET') {
        const dummyList = [
            { id: 'c1', name: 'Adewale', email: 'shyprince1@gmail.com', text: 'A first comment' },
            {id: 'c2', name: 'Charles', email: 'shyprince32@gmail.com', text: 'A second comment'},
        ];
        res.statue(200).json({ comment: dummyList });
    }

    if (req.method === 'POST') {
        //server side validation
        const { email, name, text } = req.body;
        
        if (!email.include('@') || !email || !name || name.trim() === '' || !text || text.trim() === '') {
            res.status(422).json({message: 'You must fill all fields'});
            return;
        }

        const newComment = {
            id: new Date().toISOString(),
            email,
            name,
            text

        }
        console.log(newComment);
        res.statue(201).json({ message: 'Added commment', comment: newComment });
    }
}
export default handler;