
import { Post, Get, Param, Res, Controller, UseInterceptors, UseGuards, UploadedFiles, HttpException, HttpStatus } from '@nestjs/common';
import { ApiCreatedResponse, ApiConsumes, ApiBody, ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { FileResponseVm } from './file-response-vm.model'
import { MulterUtils } from './multer-utils.service';
import { UploadTypesEnum } from './upload-types.enum';
import { UsersService } from 'src/users/users.service';

const ApiException = () => class {
    statusCode: HttpStatus;
    message: any;
    error: string;
};

@Controller('/attachment/files')
@ApiTags('Attachments')
export class FilesController {
    constructor(
        private filesService: FilesService,
        private readonly usersService: UsersService
        ) { }

    @Post('')
    @ApiConsumes('multipart/form-data')
    @ApiBody({ description: 'Attachment Files' })
    @UseInterceptors(FilesInterceptor('file', +3, MulterUtils.getConfig(UploadTypesEnum.ANY)))
    upload(@UploadedFiles() files) {
        return files.map(file => file.id);
    }

    @Post('images')
    @ApiConsumes('multipart/form-data')
    @ApiBody({ description: 'Attachment Images' })
    @UseInterceptors(FilesInterceptor('file', +3, MulterUtils.getConfig(UploadTypesEnum.IMAGES)))
    uploadImages(@UploadedFiles() files) {
        return files.map(file => file.id);
    }

    @Post('images/avatar/:id')
    @ApiConsumes('multipart/form-data')
    @ApiBody({ description: 'Attachment Images' })
    @UseInterceptors(FilesInterceptor('file', +3, MulterUtils.getConfig(UploadTypesEnum.IMAGES)))
    uploadAvatar(@Param('id') id: string, @UploadedFiles() files) {
        this.usersService.update(id, { avatarId: files[0].id })
        return files.map(file => file.id);
    }

    @Post('docs')
    @ApiConsumes('multipart/form-data')
    @ApiBody({ description: 'Attachment Docs' })
    @UseInterceptors(FilesInterceptor('file', +3, MulterUtils.getConfig(UploadTypesEnum.DOCS)))
    uploadDocs(@UploadedFiles() files) {
        return files.map(file => file.id);
    }

    @Get('info/:id')
    @ApiBadRequestResponse({ type: ApiException })
    async getFileInfo(@Param('id') id: string): Promise<FileResponseVm> {
        const file = await this.filesService.findInfo(id)
        const filestream = await this.filesService.readStream(id)
        if (!filestream) {
            throw new HttpException('An error occurred while retrieving file info', HttpStatus.EXPECTATION_FAILED)
        }
        return {
            message: 'File has been detected',
            file: file
        }
    }

    @Get(':id')
    @ApiBadRequestResponse({ type: ApiException })
    async getFile(@Param('id') id: string, @Res() res) {
        const file = await this.filesService.findInfo(id)
        const filestream = await this.filesService.readStream(id)
        if (!filestream) {
            throw new HttpException('An error occurred while retrieving file', HttpStatus.EXPECTATION_FAILED)
        }
        res.header('Content-Type', file.contentType);
        return filestream.pipe(res)
    }

    @Get('download/:id')
    @ApiBadRequestResponse({ type: ApiException })
    async downloadFile(@Param('id') id: string, @Res() res) {
        const file = await this.filesService.findInfo(id)
        const filestream = await this.filesService.readStream(id)
        if (!filestream) {
            throw new HttpException('An error occurred while retrieving file', HttpStatus.EXPECTATION_FAILED)
        }
        res.header('Content-Type', file.contentType);
        res.header('Content-Disposition', 'attachment; filename=' + file.filename);
        return filestream.pipe(res)
    }

    @Get('delete/:id')
    @ApiBadRequestResponse({ type: ApiException })
    @ApiCreatedResponse({ type: FileResponseVm })
    async deleteFile(@Param('id') id: string): Promise<FileResponseVm> {
        const file = await this.filesService.findInfo(id)
        const filestream = await this.filesService.deleteFile(id)
        if (!filestream) {
            throw new HttpException('An error occurred during file deletion', HttpStatus.EXPECTATION_FAILED)
        }
        return {
            message: 'File has been deleted',
            file: file
        }
    }
}