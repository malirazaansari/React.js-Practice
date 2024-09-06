const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRIE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRIE_PROJECT_ID),
  appwriteDataBaseId: String(import.meta.env.VITE_APPWRIE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRIE_COLEECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRIE_BUCKET_ID),
};

export default conf;
