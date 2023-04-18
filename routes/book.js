const bookController = require("../controllers/bookController");

const router = require("express").Router();
// ADD A BOOK
router.post("/",bookController.addBook);
//GET ALL BOOK
router.get("/", bookController.getAllBooks);
//GET A BOOK 
router.get("/:id",bookController.getABokk);
//UPDATE A BOOK
router.put("/:id", bookController.updateABook);
//DELETE A BOOK 
router.delete("/:id", bookController.deleteBook);

module.exports = router;