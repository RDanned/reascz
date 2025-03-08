import { Context } from 'koa';
import Lead from '@/models/Lead';
import { z } from 'zod';

const leadSchema = z.object({
  estateType: z.string().min(1, "Typ nemovitosti je povinný."),
  fullname: z.string().min(1, "Jméno je povinné."),
  phone: z.string().regex(/^\+420\d{9}$/, "Neplatný formát telefonu (správně: +420123456789)"),
  email: z.string().email("Neplatný email"),
  region: z.string().min(1, "Region je povinný"),
  district: z.string().min(1, "Okres je povinný"),
});

export const createLead = async (ctx: Context) => {
  const validation = leadSchema.safeParse(ctx.request.body);

  if (!validation.success) {
    ctx.status = 400;
    ctx.body = { error: validation.error.errors.map(e => e.message) };
    return;
  }

  try {
    const lead = new Lead(validation.data);
    await lead.save();
    ctx.status = 201;
    ctx.body = { ...lead };
  } catch (error) {
    ctx.status = 500;

    if (error instanceof Error) {
      ctx.body = { error: error.message };
    } else {
      ctx.body = { error: 'Error occured' };
    }
  }
};
