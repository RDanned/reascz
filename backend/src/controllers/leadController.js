"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLead = void 0;
const Lead_1 = __importDefault(require("@/models/Lead"));
const zod_1 = require("zod");
const leadSchema = zod_1.z.object({
    estateType: zod_1.z.string().min(1, "Typ nemovitosti je povinný."),
    fullname: zod_1.z.string().min(1, "Jméno je povinné."),
    phone: zod_1.z.string().regex(/^\+420\d{9}$/, "Neplatný formát telefonu (správně: +420123456789)"),
    email: zod_1.z.string().email("Neplatný email"),
    region: zod_1.z.string().min(1, "Region je povinný"),
    district: zod_1.z.string().min(1, "Okres je povinný"),
});
const createLead = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const validation = leadSchema.safeParse(ctx.request.body);
    if (!validation.success) {
        ctx.status = 400;
        ctx.body = { error: validation.error.errors.map(e => e.message) };
        return;
    }
    try {
        const lead = new Lead_1.default(validation.data);
        yield lead.save();
        ctx.status = 201;
        ctx.body = Object.assign({}, lead);
    }
    catch (error) {
        ctx.status = 500;
        if (error instanceof Error) {
            ctx.body = { error: error.message };
        }
        else {
            ctx.body = { error: 'Error occured' };
        }
    }
});
exports.createLead = createLead;
