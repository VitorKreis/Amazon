import multer from 'multer';

import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('file');

class PhotoController {
  async store(req, res) {
    return upload(req, res, (e) => {
      if (e) {
        res.status(401).json({
          error: e.code,
        });
      }

      res.json(req.file);
    });
  }
}

export default new PhotoController();
