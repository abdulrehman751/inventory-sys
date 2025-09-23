// middleware/uploadMiddleware.js
import multer from "multer";

const storage = multer.memoryStorage(); // store in memory buffer
const upload = multer({ storage });
console.log("upload middleware configured")

export default upload;
