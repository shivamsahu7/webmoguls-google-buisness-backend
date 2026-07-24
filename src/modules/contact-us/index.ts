import { Router } from 'express';
import { db } from '../../db/index.js';
import { ContactService } from './service.js';
import { createContactDto } from './dto.js';
import { rateLimits } from '../../config/rate-limits.js';
import { success, error } from '../../shared/utils/response.js';
import { MESSAGES } from '../../shared/constants/messages.js';
import { validate } from '../../shared/utils/validate.js';

export const contactUsRouter = Router();
const contactService = new ContactService(db);

// POST /contact-us
contactUsRouter.post(
  '/',
  rateLimits.strict,
  validate(createContactDto),
  async (req, res) => {
    try {
      const { fullName, businessEmail, businessName, website, tellUsAbout } = req.body;
      const contact = await contactService.create({
        fullName,
        businessEmail,
        businessName,
        website: website ?? null,
        tellUsAbout: tellUsAbout ?? null,
      });
      res.status(201).json(success(contact, MESSAGES.CONTACT_SUCCESS));
    } catch (err) {
      console.error('❌ Contact form submission failed:', err instanceof Error ? (err.stack || err.message) + (err.cause ? '\\nCause: ' + JSON.stringify(err.cause) : '') : err);
      res.status(500).json(error(MESSAGES.CONTACT_ERROR));
    }
  }
);
