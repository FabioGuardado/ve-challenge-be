import multer from "multer";
import { dirname, extname, join } from "path";
import { fileURLToPath } from "url";

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
const MIME_TYPES = ["image/jpeg", "image/png"];

const multerUpload = multer({
  storage: multer.diskStorage({ destination: join(CURRENT_DIR, "../../uploads"), filename: (req, file, cb) => {
    const fileExtension = extname(file.originalname);
    const fileName = file.originalname.split(fileExtension)[0];
    cb(null, `${fileName}-${Date.now()}${fileExtension}`)
  } }),
  fileFilter: (req, file, cb) => {
    if (MIME_TYPES.includes(file.mimetype)) cb(null, true);
    else cb(new Error(`Only ${MIME_TYPES.join(', ')} mimetypes are allowed.`));
  },
  limits: { fieldSize: 10000000 },
});

export default multerUpload;
