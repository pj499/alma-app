import {IncomingForm} from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = (req, res) => {
    if (req.method === 'POST') {
        const form = new IncomingForm();

        const uploadDir = path.join(process.cwd(), 'public/uploads');

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        form.uploadDir = uploadDir;

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.status(500).json({ error: 'Something went wrong while uploading the file.' });
                return;
            }

            if(files.resume){
                const file = files.resume?files.resume[0]: null;
                const oldPath = file?.filepath;
                const newFilePath = path.join(uploadDir, file?.originalFilename);

                fs.rename(oldPath, newFilePath, (renameErr) => {
                    if (renameErr) {
                        res.status(500).json({ error: 'Failed to move file to permanent location.' });
                        return;
                    }

                    console.log('File uploaded successfully:', newFilePath);


                });
            }

            console.log('Form Fields:', fields);

            res.status(200).json({ message: 'Form submitted successfully!' });
        });
    } else {
        // Handle unsupported HTTP methods
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

export default handler;
