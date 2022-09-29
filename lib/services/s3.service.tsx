import { prisma } from '../../lib/db';
import S3 from 'aws-sdk/clients/s3';

const S3Service = () => {

  interface UploadProps {
    file: string;
    fileType: string;
  };

  
  /**
   * Uploads a file to S3
   * @param {string} file - The file to upload
   * @param {string} fileType - The file type
   * @returns {Promise<string>} - The URL of the uploaded file
   * @throws {Error} - If the file could not be uploaded
   * @example
   * const url = await uploadToS3( 'file', 'image/png' );
   * => "https://s3.amazonaws.com/bucket-name/1234.png"
   */
  const uploadToS3 = async ( { file, fileType }:UploadProps ) => {
    const s3 = new S3( {
      apiVersion: '2006-03-01',
      accessKeyId: process.env.AWS_ACCESS_ID,
      secretAccessKey: process.env.AWS_SECRET,
      region: process.env.AWS_REGION,
    } );
        
    const post = s3.createPresignedPost( {
      Bucket: process.env.AWS_UPLOAD_BUCKET_NAME,
      Fields: {
        key: file,
        'Content-Type': fileType,
        acl: 'public-read'
      },
      Expires: 60, // seconds
      Conditions: [
        [ 'content-length-range', 0, 1048576 ], // up to 1 MB
      ],
    } );
    
    return post;
  };

  return {
    uploadToS3
  };
};

export default S3Service;
