import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { extname } from 'path';
import { UploadTypesEnum } from './upload-types.enum';

/**
 * Multer utils
 *
 * @export
 * @class MulterUtils
 */
@Injectable()
export class MulterUtils {
    /**
     * Config for allowed files
     *
     * @static
     * @param {UploadTypeEnum} filesAllowed
     * @returns
     * @memberof MulterUtils
     */
    static getConfig(filesAllowed: UploadTypesEnum) {
        return {
            // Enable file size limits
            limits: {
                fileSize: 2 * 1024 * 1024,
            },
            // Check the mimetypes to allow for upload
            fileFilter: (req: any, file: any, cb: any) => {
                if (file.mimetype.match(`/(${filesAllowed})$`)) {
                    // Allow storage of file
                    cb(null, true);
                } else {
                    // Reject file
                    cb(new HttpException(`Unsupported file type ${extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);
                }
            }
        };
    }
}