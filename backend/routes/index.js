import express from "express";
 
import { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";
import { getAllUsers, register, login } from "../controllers/Users.js";
 
const router = express.Router();

router.get('/', getAllUsers);
router.post('/login', login);
router.post('/register', register); 
//router.get('/', getAllProducts);
router.get('/:id', getProductById);
//router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
 
export default router;