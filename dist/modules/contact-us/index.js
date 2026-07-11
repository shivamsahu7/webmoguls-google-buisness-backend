import { Elysia } from 'elysia';
import { dbPlugin } from '../../plugins/db.js';
import { ContactService } from './service.js';
import { createContactDto } from './dto.js';
import { rateLimits } from '../../config/rate-limits.js';
import { success, error } from '../../shared/utils/response.js';
import { MESSAGES } from '../../shared/constants/messages.js';
export const contactUsModule = new Elysia({ prefix: '/contact-us' })
    .use(dbPlugin)
    .use(rateLimits.strict)
    .derive(({ db }) => {
    return { contactService: new ContactService(db) };
})
    // POST /contact-us — Submit contact form
    .post('/', async ({ contactService, body, set }) => {
    try {
        const contact = await contactService.create(body);
        set.status = 201;
        return success(contact, MESSAGES.CONTACT_SUCCESS);
    }
    catch (err) {
        console.error('❌ Contact form submission failed:', err);
        set.status = 500;
        return error(MESSAGES.CONTACT_ERROR);
    }
}, {
    body: createContactDto,
    detail: {
        summary: 'Submit Contact Us Form',
        description: 'Accepts a contact form submission. Rate limited to 1 request per minute per IP.',
        tags: ['Contact Us'],
    },
});
//# sourceMappingURL=index.js.map