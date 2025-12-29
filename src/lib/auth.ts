import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Admin credentials (in production, store in database)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  // Password: admin123 (hashed)
  passwordHash: '$2a$10$8ZqB0yqKjN9K1FZqQ7YQ.OvTqXE/YqUxZhQJzZqY4VqKYqZqY4VqK'
};

export interface AdminUser {
  username: string;
  name: string;
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export function generateToken(user: AdminUser): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string): AdminUser | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AdminUser;
  } catch (error) {
    return null;
  }
}

export async function authenticateAdmin(username: string, password: string): Promise<AdminUser | null> {
  if (username !== ADMIN_CREDENTIALS.username) {
    return null;
  }

  // For demo purposes, accept 'admin123' or verify against hash
  const isValid = password === 'admin123' || await verifyPassword(password, ADMIN_CREDENTIALS.passwordHash);
  
  if (!isValid) {
    return null;
  }

  return {
    username: ADMIN_CREDENTIALS.username,
    name: 'ZEXO'
  };
}
