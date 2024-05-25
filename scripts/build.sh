npm ci --prefix backend
npm ci --prefix frontend
npm run build --prefix frontend
mkdir -p backend/client
cp frontend/dist/* backend/client