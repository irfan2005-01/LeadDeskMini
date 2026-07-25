import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res.json({
      success: true,
      token,
      admin: {
        id: admin.id,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const seedAdmin = async (req, res) => {
  try {
    const existing = await prisma.admin.findUnique({
      where: {
        email: "admin@leaddesk.com",
      },
    });

    if (existing) {
      return res.json({
        success: true,
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    await prisma.admin.create({
      data: {
        email: "admin@leaddesk.com",
        password: hashedPassword,
      },
    });

    return res.json({
      success: true,
      message: "✅ Admin created successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Seed failed",
    });
  }
};