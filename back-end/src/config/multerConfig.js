// eslint-disable-next-line import/no-extraneous-dependencies
import multer from 'multer';
import { resolve, extname } from 'path';

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
      return cb(new multer.MulterError('The file must be JPG or PNG'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: ((req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    }),
    filename: ((req, file, cb) => {
      cb(null, `${resolve(__dirname, '..', '..', 'uploads')}${extname(file.originalname)}`);
    }),
  }),
};
