import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 5173;
export const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
export const DATABASE_URL = process.env.DATABASE_URL || 'supersocket';
export const DATABASE_FILE = process.env.DATABASE_FILE || './dev.sqlite';
export const ACCESS_TOKEN = process.env.ACCESS_TOKEN || '';
export const PUBLIC_KEY = process.env.PUBLIC_KEY || '';
export const JWT_SECRET = process.env.JWT_SECRET || 'supersecreto';
export const MP_PUBLIC_KEY = process.env.MP_PUBLIC_KEY || 'TEST-your-public-key';
console.log('PORT:', process.env.PORT);