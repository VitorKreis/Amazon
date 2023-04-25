import multer from 'multer';

import multerConfig from '../config/multerConfig';
import Picture from '../models/Picture';

const upload = multer(multerConfig).single('file');

class PictureController {
  store(req, res) {
    return upload(req, res, async (e) => {
      if (e) {
        res.status(401).json({
          error: e.code,
        });
      }

      try {
        const { originalname, filename } = req.file;

        const { product_id } = req.body;

        const newPhoto = await Picture.create({ originalname, filename, product_id });
        return res.json(newPhoto);
      } catch (error) {
        return res.status(404).json({
          error: error.message,
        });
      }
    });
  }
}

export default new PictureController();
