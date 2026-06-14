import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  business: z.string().max(200).optional().or(z.literal("")),
  service: z.string().max(120).optional().or(z.literal("")),
  budget: z.string().max(60).optional().or(z.literal("")),
  message: z.string().min(5).max(4000),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("leads").insert({
      name: data.name,
      email: data.email,
      business: data.business || null,
      service: data.service || null,
      budget: data.budget || null,
      message: data.message,
    });
    if (error) {
      console.error("Failed to insert lead", error);
      throw new Error("Could not save your message. Please try again or email hello@vuult.com.");
    }
    return { ok: true } as const;
  });
