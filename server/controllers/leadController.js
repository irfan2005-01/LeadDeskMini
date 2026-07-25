import prisma from "../config/prisma.js";

// Create Lead (Public)
export const createLead = async (req, res) => {
  try {
    const { name, email, budget, message } = req.body;

    if (!name || !email || !budget || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        budget,
        message,
      },
    });

    res.status(201).json({
      success: true,
      message: "Lead submitted successfully",
      lead,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get All Leads (Admin)
export const getLeads = async (req, res) => {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      leads,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Update Lead Status
export const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedLead = await prisma.lead.update({
      where: {
        id: Number(id),
      },
      data: {
        status,
      },
    });

    res.json({
      success: true,
      message: "Lead updated",
      lead: updatedLead,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};