import { Router, Request, Response} from 'express';

const router = Router();

router.post('/paypal/create-order', async (req: Request,res: Response) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
})

export default router;