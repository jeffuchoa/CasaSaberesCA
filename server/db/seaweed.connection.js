var { S3Client, HeadBucketCommand, CreateBucketCommand } = require("@aws-sdk/client-s3")

var s3Client = new S3Client({
  endpoint: process.env.S3_ENDPOINT,
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  },
  forcePathStyle: true, // obrigatório para SeaweedFS/MinIO
})

// Função para garantir que o bucket exista
async function inicializarBucket() {
  const bucketName = process.env.S3_BUCKET || "pdfs";
  try {
    await s3Client.send(new HeadBucketCommand({ Bucket: bucketName }));
  } catch (error) {
    if (error.$metadata?.httpStatusCode === 404 || error.name === "NotFound") {
      console.log(`Bucket "${bucketName}" não encontrado. Criando...`);
      await s3Client.send(new CreateBucketCommand({ Bucket: bucketName }));
      console.log(`Bucket "${bucketName}" criado com sucesso!`);
    } else {
      console.error("Erro ao verificar/criar bucket S3:", error);
    }
  }
}

inicializarBucket();

module.exports = s3Client