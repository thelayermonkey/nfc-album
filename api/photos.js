import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  const result = await cloudinary.search
    .expression('folder:comunion-gianna-2026')
    .sort_by('created_at', 'desc')
    .max_results(50)
    .execute();

  res.status(200).json(result.resources);
}
