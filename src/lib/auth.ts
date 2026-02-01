import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Admin credentials (in production, store in database)
const ADMIN_CREDENTIALS = {
  username: 'Zexo Team',
  // Password: Zexo@1234admin (hashed)
  passwordHash: '$2b$10$B.oNomuKm6A.sDPBIc5b/OiN9CqJ30UL5LB5jbRNU.pJHbShzQ40u'
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

  // Verify against hash
  const isValid = await verifyPassword(password, ADMIN_CREDENTIALS.passwordHash);

  if (!isValid) {
    return null;
  }

  return {
    username: ADMIN_CREDENTIALS.username,
    name: 'Zexo Team'
  };
}
